#!/usr/bin/env node
// Round collector — fetch 100 high-value issues per round, anonymize, bucket, index, commit.
// Usage: node tools/round.mjs [--rounds N]
// Principles of this tool: cases keep bug + environment, never source identity.
// Source repos are only aggregated in README's Sources section.
//
// Data path: REST /repos/{repo}/issues sorted by comments desc (high-value first),
// paginated with a persistent cursor — no search API needed (works with any token,
// 5000 req/h core limit, and no 1000-result search cap).

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const D = (p) => join(ROOT, p);
const TODAY = () => new Date().toLocaleDateString('sv');

// ---------- token (from git credential manager, never stored) ----------
function getToken() {
  const out = execFileSync('git', ['credential', 'fill'], {
    cwd: ROOT, input: 'protocol=https\nhost=github.com\n', encoding: 'utf8',
  });
  const m = out.match(/^password=(.+)$/m);
  if (!m) throw new Error('no github token in git credential store');
  return m[1].trim();
}
const TOKEN = getToken();

// ---------- repos to mine ----------
const REPOS = [
  ['facebook/react', 'framework'], ['vuejs/core', 'framework'], ['sveltejs/svelte', 'framework'],
  ['angular/angular', 'framework'], ['preactjs/preact', 'framework'], ['solidjs/solid', 'framework'],
  ['QwikDev/qwik', 'framework'], ['alpinejs/alpine', 'framework'],
  ['vercel/next.js', 'meta-framework'], ['nuxt/nuxt', 'meta-framework'],
  ['remix-run/remix', 'meta-framework'], ['gatsbyjs/gatsby', 'meta-framework'], ['sveltejs/kit', 'meta-framework'],
  ['vitejs/vite', 'build-tool'], ['webpack/webpack', 'build-tool'],
  ['tailwindlabs/tailwindcss', 'css-framework'], ['bootstrap/bootstrap', 'css-framework'],
  ['styled-components/styled-components', 'css-in-js'], ['emotion-js/emotion', 'css-in-js'],
  ['mui/material-ui', 'component-library'], ['ant-design/ant-design', 'component-library'],
  ['element-plus/element-plus', 'component-library'], ['chakra-ui/chakra-ui', 'component-library'],
  ['shadcn-ui/ui', 'component-library'], ['vuetifyjs/vuetify', 'component-library'],
  ['primefaces/primeng', 'component-library'], ['primefaces/primevue', 'component-library'],
  ['react-bootstrap/react-bootstrap', 'component-library'], ['ionic-team/ionic-framework', 'component-library'],
  ['framer/motion', 'animation-library'], ['pmndrs/react-spring', 'animation-library'], ['greensock/GSAP', 'animation-library'],
  ['chartjs/Chart.js', 'chart-library'], ['d3/d3', 'chart-library'],
  ['apexcharts/apexcharts.js', 'chart-library'], ['recharts/recharts', 'chart-library'],
  ['mrdoob/three.js', '3d-library'], ['pmndrs/react-three-fiber', '3d-library'],
  ['Leaflet/Leaflet', 'map-library'],
  ['nolimits4web/swiper', 'ui-component'], ['fullcalendar/fullcalendar', 'ui-component'],
  ['quilljs/quill', 'editor'], ['ueberdosis/tiptap', 'editor'], ['microsoft/monaco-editor', 'editor'],
  ['videojs/video.js', 'media-player'], ['sampotts/plyr', 'media-player'], ['video-dev/hls.js', 'media-player'],
];
const MAX_PAGES_PER_REPO = 60;

// ---------- taxonomy: bug symptom bucket -> principle ids ----------
const BUCKETS = [
  { id: 'overflow-scroll', en: 'Overflow & Scrollbars', zh: '溢出与滚动条', principles: ['P-A1', 'P-A2', 'P-G1', 'P-F1'],
    re: /overflow|scrollbar|scroll bar|hscroll|scrollwidth|scrollheight|clientwidth|horizontal scroll/ },
  { id: 'stacking-zindex', en: 'Stacking & Occlusion', zh: '层叠与遮挡', principles: ['P-A5'],
    re: /z-index|z index|stacking context|on top of|behind the|occlu|overlapping/ },
  { id: 'flex-grid', en: 'Flex & Grid Layout', zh: '弹性与栅格布局', principles: ['P-A2', 'P-A4'],
    re: /flexbox|flex-wrap|flex item|flex container|grid-template|display:\s*(flex|grid)|min-width|min-height:\s*0|gap:/ },
  { id: 'responsive-viewport', en: 'Responsive & Viewport', zh: '响应式与视口', principles: ['P-A1', 'P-A4', 'P-G3'],
    re: /responsive|viewport|media query|@media|breakpoint|device-width|\bvw\b|\bvh\b|\bzoom\b/ },
  { id: 'browser-quirk', en: 'Browser / Platform Quirk', zh: '浏览器与平台差异', principles: ['P-G1', 'P-G2', 'P-G3'],
    re: /safari|webkit|firefox|\bchrome\b|\bedge\b|internet explorer|\bios\b|android|webview|electron|in-app/ },
  { id: 'animation-motion', en: 'Animation & Motion', zh: '动效', principles: ['P-D1', 'P-D2', 'P-D3'],
    re: /animation|animate|transition|keyframes|transform|gsap|framer|spring/ },
  { id: 'scroll-behavior', en: 'Scroll Behavior', zh: '滚动行为', principles: ['P-D4', 'P-F1', 'P-F5'],
    re: /scroll-behavior|smooth scroll|scrollto|scrollintoview|scroll-snap|scrollspy|scroll listener|wheel|touchmove|overscroll/ },
  { id: 'focus-a11y', en: 'Focus & Accessibility', zh: '焦点与无障碍', principles: ['P-E1', 'P-E2', 'P-E4'],
    re: /focus|aria|screen reader|a11y|accessib|tabindex|keyboard nav|role=|voiceover|nvda/ },
  { id: 'contrast-color', en: 'Contrast & Color Themes', zh: '色彩对比与主题', principles: ['P-C1', 'P-C2', 'P-C3'],
    re: /contrast|color scheme|dark mode|light mode|\btheme\b|color-blind|prefers-color/ },
  { id: 'font-typography', en: 'Fonts & Typography', zh: '字体与排版', principles: ['P-B1', 'P-B2', 'P-B3'],
    re: /\bfont\b|typograph|line-height|letter-spacing|woff|font-display|text wrap|ellipsis|truncate/ },
  { id: 'media-cls', en: 'Media & CLS', zh: '媒体与布局位移', principles: ['P-A3', 'P-H1'],
    re: /\bimg\b|image|video|lazy ?load|aspect-ratio|layout shift|\bcls\b|poster|iframe/ },
  { id: 'ssr-hydration', en: 'SSR & Hydration', zh: '服务端渲染与水合', principles: ['P-F4'],
    re: /hydration|hydrate|ssr|server.render|mismatch|server html/ },
  { id: 'race-state', en: 'Race & Listeners', zh: '竞态与监听器', principles: ['P-F5', 'P-H3'],
    re: /race condition|event listener|unmount|memory leak|stale|debounce|throttle|abortcontroller|cleanup/ },
  { id: 'layout-perf', en: 'Layout Performance', zh: '布局性能', principles: ['P-H2', 'P-H3'],
    re: /reflow|layout thrash|\bjank\b|forced synchron|repaint|long task|frame drop|laggy|slow render/ },
  { id: 'form-input', en: 'Forms & Mobile Input', zh: '表单与移动输入', principles: ['P-G4', 'P-E3'],
    re: /\binput\b|\bform\b|autofill|virtual keyboard|keyboard opens|input zoom|textarea|\bselect\b/ },
];
function classify(text) {
  const t = text.toLowerCase();
  const hits = [];
  for (const b of BUCKETS) {
    if (b.re.test(t)) hits.push(b.id);
    if (hits.length >= 3) break;
  }
  return hits; // empty = not design-related, dropped
}

// ---------- environment extraction ----------
const ENV_PATTERNS = [
  /(chrome|chromium|safari|firefox|edge|opera)[ \/]?(\d{1,3})?/g,
  /(windows|macos|mac os x|linux|ubuntu|android ?\d{0,2}|ios ?\d{0,2})/g,
  /(react|vue|svelte|angular|next\.js|nuxt|tailwind|bootstrap|typescript|webpack|vite|electron|webview|webkit)/g,
  /(iphone|ipad|mobile|desktop|retina|high-dpi)/g,
];
function extractEnv(text) {
  const t = text.toLowerCase();
  const found = new Set();
  for (const re of ENV_PATTERNS) {
    let m;
    while ((m = re.exec(t)) !== null && found.size < 10) {
      const v = m[0].trim().replace(/\s+/g, ' ');
      if (v && v.length <= 16) found.add(v);
    }
  }
  return [...found].slice(0, 8);
}

// ---------- anonymization ----------
function anonymize(text, repoSlug, category) {
  let s = String(text || '');
  const generic = `[${category.replace(/-/g, ' ')}]`;
  s = s.split(repoSlug).join(generic);          // exact source slug
  s = s.replace(/https?:\/\/[^\s)\]>]+/g, '[link]');
  // residual refs a URL strip leaves behind (markdown link tails etc.)
  s = s.replace(/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/(issues|pulls?|discussions|commit)s?\/[0-9a-z]+/gi, '[ref]');
  s = s.replace(/#issuecomment-\d+|#discussion_r?\d+|\/issues\/\d+|\/pull\/\d+|\/pulls\/\d+/gi, '[ref]');
  s = s.replace(/#[0-9]+\b|\b(gh|issue|bug)-\d{2,}\b/gi, '[ref]');
  s = s.replace(/@[\w-]+/g, '@user');
  s = s.replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, '[email]');
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length > 600) s = s.slice(0, 600).replace(/\s\S*$/, '') + '…';
  return s;
}

// drop roadmaps / meta threads — they match keyword buckets via prose but are not bug cases
const DROP_LABELS = /type:\s*(big ?picture|meta)|roadmap|announcement|discussion/i;
const BUG_WORDS = /\b(bug|broken|crash|hang|freez|flicker|glitch|jitter|jump|shift|wrong|incorrect|misalign|overflow|clipped|cut ?off|regression|leak|fails? to|doesn'?t (render|work|scroll|focus|open|close)|not (rendered|working|focused|visible|scrollable)|breaks? (layout|scroll)|stuck)\b/i;

// ---------- github api (REST, core limit 5000/h) ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function ghListIssues(slug, page) {
  const params = new URLSearchParams({
    state: 'all', sort: 'comments', direction: 'desc', per_page: '100', page: String(page),
  });
  for (let attempt = 0; attempt < 4; attempt++) {
    let res;
    try {
      res = await fetch(`https://api.github.com/repos/${slug}/issues?${params}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'wdp-case-collector',
        },
      });
    } catch { await sleep(5000 * (attempt + 1)); continue; }
    if (res.status === 403 || res.status === 429) {
      const reset = Number(res.headers.get('x-ratelimit-reset') || 0);
      const wait = reset ? Math.min(Math.max(reset * 1000 - Date.now(), 20000), 90000) : 60000;
      console.log(`  rate-limited, waiting ${Math.round(wait / 1000)}s`);
      await sleep(wait);
      continue;
    }
    if (res.status === 404) return { notFound: true };
    if (!res.ok) throw new Error(`list ${res.status}`);
    return { items: await res.json() };
  }
  throw new Error('rate limit persisted — abort batch (progress saved)');
}

// ---------- state ----------
function loadJSON(p, fallback) {
  if (existsSync(p)) return JSON.parse(readFileSync(p, 'utf8'));
  return fallback;
}
const dataDir = D('data');
const chunkDir = D('cases/chunks');
mkdirSync(dataDir, { recursive: true });
mkdirSync(chunkDir, { recursive: true });

const progress = loadJSON(D('data/progress.json'), { repoIdx: 0, page: 1, round: 0 });
progress.repoIdx = Number.isInteger(progress.repoIdx) ? progress.repoIdx : 0;
progress.page = Number.isInteger(progress.page) ? progress.page : 1;
progress.round = Number.isInteger(progress.round) ? progress.round : 0;
const seen = loadJSON(D('data/seen.json'), {});
const sources = loadJSON(D('data/sources.json'), []);
const seqState = loadJSON(D('data/seq.json'), { next: 1001 });
let nextCaseId = seqState.next;

// ---------- README helpers ----------
function readREADME() { return readFileSync(D('README.md'), 'utf8'); }
function setMarker(md, marker, content) {
  const re = new RegExp(`(<!-- ${marker}:START -->)[\\s\\S]*?(<!-- ${marker}:END -->)`);
  if (!re.test(md)) throw new Error(`README marker ${marker} missing — add it first`);
  return md.replace(re, `$1\n${content}\n$2`);
}

// ---------- one round ----------
async function runRound(roundNo) {
  let newCount = 0;
  let rawScanned = 0;
  const collected = [];
  const seenThis = new Set();

  while (newCount < 100 && progress.repoIdx < REPOS.length) {
    const [slug, category] = REPOS[progress.repoIdx];
    const res = await ghListIssues(slug, progress.page);
    if (res.notFound) { progress.repoIdx++; progress.page = 1; continue; }
    const items = res.items || [];
    rawScanned += items.length;

    for (const it of items) {
      if (it.pull_request) continue;                       // issues only
      const key = `${slug}#${it.number}`;
      const h = createHash('sha1').update(key).digest('hex').slice(0, 12);
      if (seen[h] || seenThis.has(h)) continue;
      const reactions = it.reactions?.total_count || 0;
      const comments = it.comments || 0;
      const labels = (it.labels || []).map((l) => l.name);
      const hasBug = labels.some((l) => /bug/i.test(l));
      if (labels.some((l) => DROP_LABELS.test(l))) continue;
      if (!(reactions >= 2 || comments >= 4 || hasBug)) continue;

      const rawTitle = it.title || 'untitled';
      const rawBody = it.body || '';
      if (!hasBug && !BUG_WORDS.test(rawTitle + ' ' + rawBody)) continue;

      const title = anonymize(it.title || 'untitled', slug, category);
      const body = anonymize(it.body || '', slug, category);
      const buckets = classify(title + ' ' + body);
      if (!buckets.length) continue;                       // design-related only

      const principles = [...new Set(buckets.flatMap((b) => BUCKETS.find((x) => x.id === b).principles))];
      const id = `CASE-${nextCaseId++}`;
      seen[h] = 1;
      seenThis.add(h);
      if (!sources.includes(slug)) sources.push(slug);
      collected.push({
        id, title, buckets, principles, env: extractEnv(title + ' ' + body),
        labels: labels.slice(0, 5), state: it.state, reactions, comments,
        excerpt: body, round: roundNo,
      });
      newCount++;
      if (newCount >= 100) break;
    }

    if (newCount >= 100) break;
    if (items.length < 100 || progress.page >= MAX_PAGES_PER_REPO) { progress.repoIdx++; progress.page = 1; }
    else progress.page++;
  }

  if (newCount === 0) {
    console.log(`[debug] scanned ${rawScanned} raw issues, repoIdx=${progress.repoIdx}, page=${progress.page}`);
    return { newCount, rawScanned };
  }

  appendFileSync(D('data/cases.jsonl'), collected.map((c) => JSON.stringify(c)).join('\n') + '\n');
  writeFileSync(D('data/seen.json'), JSON.stringify(seen));
  writeFileSync(D('data/seq.json'), JSON.stringify({ next: nextCaseId }));
  writeFileSync(D('data/sources.json'), JSON.stringify(sources, null, 2));

  // chunk file, grouped by primary bucket
  const byBucket = {};
  for (const c of collected) (byBucket[c.buckets[0]] ||= []).push(c);
  let chunk = `# Case Chunk ${String(roundNo).padStart(3, '0')} — Round ${roundNo}\n\n`;
  chunk += `> ${newCount} anonymized cases · collected ${TODAY()} · environments kept, sources removed (aggregate sources: README end)\n`;
  chunk += `> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)\n\n`;
  for (const [bid, list] of Object.entries(byBucket)) {
    const b = BUCKETS.find((x) => x.id === bid);
    chunk += `## ${bid} — ${b.en} ${b.zh} · principles: ${b.principles.join(', ')}\n\n`;
    for (const c of list) {
      chunk += `### ${c.id} · ${c.title}\n`;
      chunk += `- **Principles**: ${c.principles.join(', ')} · **Env**: ${c.env.join(', ') || 'unspecified'}\n`;
      chunk += `- **Signals**: 👍${c.reactions} 💬${c.comments} · ${c.state}${c.labels.length ? ' · labels: ' + c.labels.join('/') : ''}\n`;
      if (c.excerpt) chunk += `- **Excerpt**: ${c.excerpt}\n`;
      chunk += `\n`;
    }
  }
  writeFileSync(D(`cases/chunks/chunk-${String(roundNo).padStart(3, '0')}.md`), chunk);

  // rebuild global index + bug index
  const all = readFileSync(D('data/cases.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  const idx = { updated: TODAY(), total: all.length, round: roundNo, buckets: {}, principles: {} };
  for (const b of BUCKETS) idx.buckets[b.id] = { en: b.en, zh: b.zh, principles: b.principles, ids: [] };
  for (const c of all) for (const bid of c.buckets) {
    if (!idx.buckets[bid]) idx.buckets[bid] = { en: bid, zh: '', principles: [], ids: [] };
    idx.buckets[bid].ids.push(c.id);
  }
  for (const b of BUCKETS) for (const p of b.principles) (idx.principles[p] ||= []).push(...idx.buckets[b.id].ids);
  for (const p of Object.keys(idx.principles)) idx.principles[p] = [...new Set(idx.principles[p])];
  writeFileSync(D('data/index.json'), JSON.stringify(idx));

  // compact export for the GitHub Pages search page (docs/ is served by Pages)
  mkdirSync(D('docs'), { recursive: true });
  writeFileSync(D('docs/cases.json'), JSON.stringify(all.map((c) => ({
    id: c.id, t: c.title, b: c.buckets, p: c.principles, e: c.env,
    s: c.state, r: c.reactions, c: c.comments, x: c.excerpt.slice(0, 280),
  }))));

  let bugIndex = `# Bug Index — 按 bug 症状反查设计原则 / Symptom → Principle\n\n`;
  bugIndex += `> 用法：拿着线上 bug 的**症状关键词**找到桶 → 桶内给出候选原则（[PURE.md](../principles/PURE.md)）与案例编号 → 到 chunk 文件读案例与环境。\n`;
  bugIndex += `> 反方向（原则 → 案例）见 [WITH-CASES.md](../principles/WITH-CASES.md) 与 [data/index.json](../data/index.json)。\n\n`;
  bugIndex += `Total cases: **${all.length}** · Rounds: **${roundNo}** · Updated: ${TODAY()}\n\n`;
  for (const b of BUCKETS) {
    const ids = idx.buckets[b.id].ids;
    if (!ids.length) continue;
    bugIndex += `### ${b.id} · ${b.en} ${b.zh}\n`;
    bugIndex += `- **Principles**: ${b.principles.map((p) => `[${p}](../principles/PURE.md#p-${p.slice(2).toLowerCase()})`).join(' ')} · **${ids.length} cases**\n`;
    bugIndex += `- **Cases**: ${ids.slice(0, 30).join(', ')}${ids.length > 30 ? ` … +${ids.length - 30} more (see chunks)` : ''}\n\n`;
  }
  writeFileSync(D('cases/BUG-INDEX.md'), bugIndex);

  // homepage update
  let md = readREADME();
  const topBuckets = Object.entries(idx.buckets)
    .filter(([, v]) => v.ids.length).sort((a, b) => b[1].ids.length - a[1].ids.length)
    .slice(0, 6).map(([k, v]) => `${k}(${v.ids.length})`).join(' · ');
  md = setMarker(md, 'ROUND', [
    `| Metric | Value |`,
    `|---|---|`,
    `| Rounds done | **${roundNo}** (target: 100 rounds / 10,000 cases) |`,
    `| Cases collected | **${all.length}** |`,
    `| Last round | +${newCount} cases · ${rawScanned} raw issues scanned |`,
    `| Top symptom buckets | ${topBuckets} |`,
    `| Updated | ${TODAY()} · index: [BUG-INDEX.md](cases/BUG-INDEX.md) · search: [live page](https://eugenewang5425.github.io/web-design-principles/) |`,
  ].join('\n'));
  md = setMarker(md, 'SOURCES', [
    `Aggregated crawl sources (repos whose public issues were mined and anonymized into the case bank).`,
    `Cases themselves carry **no** source identity — this list is the only place sources appear.`,
    ``,
    ...sources.map((s) => `- ${s}`),
  ].join('\n'));
  writeFileSync(D('README.md'), md);

  return { newCount, rawScanned };
}

// ---------- commit ----------
function commitRound(roundNo, newCount, total) {
  const git = (args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });
  git(['add', '-A']);
  try {
    git(['commit', '-m', `data: round ${roundNo} — +${newCount} anonymized cases (total ${total})`]);
  } catch { /* nothing to commit */ }
}

// ---------- main ----------
const rounds = Math.max(1, Number(process.argv.includes('--rounds') ? process.argv[process.argv.indexOf('--rounds') + 1] : 1));
for (let i = 0; i < rounds; i++) {
  progress.round += 1;
  const t0 = Date.now();
  process.stdout.write(`round ${progress.round} … `);
  let res;
  try {
    res = await runRound(progress.round);
  } catch (e) {
    console.log(`ABORTED: ${e.message}`);
    progress.round -= 1;
    writeFileSync(D('data/progress.json'), JSON.stringify(progress));
    process.exit(1);
  }
  if (res.newCount === 0) {
    progress.round -= 1;
    writeFileSync(D('data/progress.json'), JSON.stringify(progress));
    console.log(`0 new cases — stopping batch (all sources exhausted?)`);
    break;
  }
  const total = JSON.parse(readFileSync(D('data/index.json'), 'utf8')).total;
  commitRound(progress.round, res.newCount, total);
  writeFileSync(D('data/progress.json'), JSON.stringify(progress));
  console.log(`+${res.newCount} (raw ${res.rawScanned}, total ${total}, ${((Date.now() - t0) / 1000).toFixed(1)}s)`);
}
console.log('batch done');
