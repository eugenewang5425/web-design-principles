# Principles × Cases — 原则与案例结合讲解版（教学版）

> 每条原则 = **陈述 + 代码示例（❌ 错 / ✅ 对）+ 经典案例**。编号与 [PURE.md](./PURE.md) 一致。
> **案例编号**：`CASE-0001~0099` = 本项目自己的实战案例；`CASE-1001+` = 从公开仓库 issue 中爬取并**匿名化**的高价值案例（症状与环境保留，来源信息不保留——来源聚合清单见 README 末尾）。
> **环境标注规则**：每个案例必须注明【平台 / 浏览器 / 缩放或视口 / 技术栈】——同一个 bug 在不同环境的答案完全不同。
>
> 按"症状 → 原则"反查请用 [cases/BUG-INDEX.md](../cases/BUG-INDEX.md)；在线检索案例库：<https://eugenewang5425.github.io/web-design-principles/>

---

## A. Layout & Reflow 布局与回流

### P-A1 Reflow Guarantee 重排保证
**陈述**：320px 宽至 400% 缩放的任意组合下不得出现水平滚动（WCAG 1.4.10 AA）。它不是"设计目标"，是会被一根 15px 滚动条击穿的硬约束。

```css
/* ❌ 固定宽度叠固定宽度，320px 屏必出血 */
.container { width: 960px; margin: 0 auto; }
.sidebar   { width: 300px; flex-shrink: 0; }

/* ✅ 弹性 + 下限，任何视口都不溢出 */
.container { max-width: 960px; margin: 0 auto; padding-inline: 16px; }
.sidebar   { width: clamp(200px, 28vw, 300px); min-width: 0; }
html       { overflow-x: clip; }  /* 兜底护栏，见 P-A2 */
```

**经典案例 · CASE-0001 横向滚动条的"高度税"**
- **环境**：Windows 10/11 · Chrome 桌面版 · 缩放 50/80/90/100% 均可复现 · 单页静态站
- **症状**：页面底部反复弹跳 ±15px；滚动日志里页面总高在 1266 ↔ 1281 之间来回跳。
- **根因**：某元素在特定缩放下横向溢出几像素 → Windows 经典滚动条（占 ~15px 高度）闪现 → 视口高度被压掉 15px → 底部钳制判定漂移 → 溢出随高度变化消失 → 滚动条消失 → 高度恢复 → 循环振荡。**一个违反 P-A1 的几像素溢出，放大成了整页抖动。**
- **修复**：`html { overflow-x: clip }` 消灭滚动条本身。

**经典案例（爬取）**：媒体未预留空间导致的布局位移是全库最大症状桶（2554 条，见 P-A3）——它们全都始于"某宽度下多出了几像素/几十像素"。

### P-A2 Constraint Containment 约束包围
**陈述**：flex/grid 子项显式 `min-width:0`；可能溢出的容器用 `overflow-x: clip` 而非 `hidden`。

```css
/* ❌ flexbox 经典陷阱：子项 min-width:auto 默认不收缩，
   一个长 URL 就把整行撑爆 */
.row { display: flex; }
.url { white-space: nowrap; }        /* 撑爆者 */

/* ✅ 三件套：min-width:0 允许收缩 + overflow 处理残余 */
.row { display: flex; min-width: 0; }
.url { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
html { overflow-x: clip; }   /* clip 不创建滚动容器；hidden 会创建，
                                并改变页面可用高度 —— 正是 CASE-0001 的帮凶 */
```

**经典案例 · CASE-0001（续）**：为什么用 `clip` 不用 `hidden`——`overflow-x: hidden` 在根元素上仍会建立滚动容器，滚动条高度税照收；`clip` 是纯裁剪，不产生滚动条、不影响 sticky 与纵向滚动。

**经典案例（爬取）**：`flex-grid` 桶 47 条 + `overflow-scroll` 桶 1280 条中，大量是"内容撑破 flex 布局"的同一族问题——flex 子项默认 `min-width: auto`，这是 CSS 工作组事后承认的历史包袱。

### P-A3 Intrinsic Size Discipline 固有尺寸纪律
**陈述**：图片/视频/iframe 必须预留空间（`width`/`height`/`aspect-ratio`），加载不得引起布局位移。

```html
<!-- ❌ 无尺寸：图片加载瞬间，下方内容被推走（CLS 事件） -->
<img src="hero.jpg" alt="">

<!-- ✅ 预留宽高比：占位从第一帧就正确 -->
<img src="hero.jpg" alt="" width="1200" height="630" style="max-width:100%;height:auto">
```

```css
/* ✅ 响应式媒体容器的通用形态 */
.media { aspect-ratio: 16 / 9; overflow: hidden; }
.media > img { width: 100%; height: 100%; object-fit: cover; }
```

**经典案例**：CLS 从"体验指标"变成"核心_web 指标"后，无数站点因为 hero 图没写 `width/height` 在 Lighthouse 上被打回。浏览器解析到 `<img width height>` 会**在图片未加载时**就算出宽高比并预留空间——这是零成本的修复。全库 `media-cls` 桶 2554 条案例的教训一致：**布局位移几乎总是"尺寸未声明"**。

### P-A4 Tokenized Sizing 令牌化尺寸
**陈述**：间距、圆角、z-index、断点一律来自设计令牌，禁止魔法数字。

```css
/* ❌ 魔法数字：7px 9px 11px 各写各的，换行计算全靠猜 */
.card { padding: 7px 9px 11px; border-radius: 6px; z-index: 9999; }

/* ✅ 令牌：值域可预测，换行/层叠规则建立在刻度上 */
:root {
  --space-1: 4px;  --space-2: 8px;  --space-3: 16px;
  --radius-m: 8px; --z-dropdown: 10; --z-modal: 30;
}
.card { padding: var(--space-2); border-radius: var(--radius-m); z-index: var(--z-modal); }
```

**经典案例**：DTCG 设计令牌规范（design-tokens/community-group，★2113）之所以成为行业标准，正因为"换行计算与层叠规则依赖值域可预测"——当间距是 7/9/11 的随机数时，任何响应式换行推演都是玄学。参考 [theme-ui](https://github.com/system-ui/theme-ui)（★5395）的约束驱动模型。

### P-A5 Stacking Discipline 层叠纪律
**陈述**：不依赖隐式层叠顺序；需要置顶的元素显式建立 stacking context，z-index 用令牌刻度。

```css
/* ❌ z-index 军备竞赛：为什么 99999 也不在上面？ */
.tooltip  { z-index: 99999; }   /* 没用！父级有 transform，被锁进低层 context */

/* ✅ 找到锁住你的祖先，在那里解决；置顶元素用刻度令牌 */
.modal    { position: fixed; z-index: var(--z-modal); }        /* 30 */
.dropdown { position: absolute; z-index: var(--z-dropdown); } /* 10 */
```

**经典案例**："z-index 无敌大却不生效"是 CSS 史上最著名的陷阱之一：`transform`、`filter`、`opacity < 1`、`isolation` 都会**创建新的 stacking context**，把子元素的 z-index 锁死在父级的层级里。解法从来不是更大的数字，而是**画层级图**：谁创建了 context、谁在谁的 context 里。全库 `stacking-zindex` 桶 66 条都是这一族。

---

## B–C. Typography / Color 排版与色彩

### P-B1 Readable Measure 可读行长
**陈述**：正文行长 45–75 字符；先定 measure 再冻结栅格。

```css
/* ❌ 27 寸显示器上一行 180 字符，读者眼睛找得到下一行吗 */
article { max-width: 100%; }

/* ✅ 用字符单位锁 measure，天然随字号缩放 */
article { max-width: 72ch; margin-inline: auto; }
```

**经典案例**：`ch` 单位基于字体"0"字宽，比像素更贴合排版本质——同一份内容在用户调大字号后行长（字符数）不变，可读性保持。这是"先 measure 后栅格"的技术支撑：栅格列宽推导自内容测度，而不是反过来。

### P-B2 Fluid Type with Fallback 流式字号带回退
**陈述**：`clamp()` 流式标题，但必须验证 320px 与 4K 两端的换行。

```css
/* ❌ 纯 vw：320px 手机上 2.9vw≈9px 看不见，4K 上 155px 成海报 */
h1 { font-size: 2.9vw; }

/* ✅ clamp 三参数：最小可读值 / 流动值 / 最大布局值 */
h1 { font-size: clamp(24px, 5vw + 8px, 56px); }
```

**经典案例**：纯 vw 标题在移动端缩放禁用页面（`user-scalable=no` 的老站）与桌面超宽屏上两头翻车。`clamp()` 是 CSS 给出的正解，但"两端验证"仍要人工做——例：`5vw + 8px` 在 320px 时 = 24px 刚好，在 3840px 时被 56px 封顶，才是真"流式"。

### P-B3 Font Loading Strategy 字体加载策略
**陈述**：网络字体必须声明 `font-display` + 度量兼容回退，加载不得引起 CLS。

```css
/* ❌ 默认 block 期白屏 + swap 期跳版（FOUT→CLS） */
@font-face { font-family: Brand; src: url(brand.woff2); }

/* ✅ swap + 度量覆写：回退字体占位尺寸≈真字体，跳版不可感知 */
@font-face {
  font-family: Brand; src: url(brand.woff2) format('woff2');
  font-display: swap;
  size-adjust: 105%; ascent-override: 90%;  /* 度量校准 */
}
body { font-family: Brand, system-ui, sans-serif; }
```

**经典案例 · CASE-4764 路由切换瞬间整页裸奔（爬取）**
- **环境**：Next.js 生产构建（**dev 模式不复现**）· CSS Modules
- **症状**：点击 `next/link` 后旧页面 DOM 还在、样式已被移除——过渡期间整页无样式闪白。
- **根因**：样式移除时机绑定"路由切换"而非"DOM 实际卸载"。
- **教训**：这是 font-display 教训在**样式维度**的重现——资源（字体/样式）的加载与卸载策略不得引起视觉突变；且 dev 与生产行为不一致（P-G3）。

### P-C1 Contrast Floor 对比度下限
**陈述**：正文 ≥ 4.5:1，大字号与 UI 组件边界 ≥ 3:1。

```css
/* ❌ 暗色模式的"高级灰"：#888 on #111 = 4.0:1，正文不达标 */
--text: #888888; --bg: #111111;

/* ✅ 语义令牌过表：正文 4.5:1 起步 */
--text: #b6bdc7;  /* on #111 ≈ 9.6:1 */
--text-muted: #8b949e;  /* 仅用于辅助信息 */
```

**经典案例**：暗色模式翻车几乎都源于"把浅色主题的灰直接加深"。正解是 P-C3 的令牌整体替换 + 对比度过表，而不是逐处调色。

### P-C2 Never Color Alone 不单靠颜色
**陈述**：状态（错误/成功/禁用）必须同时有图标或文字。

```html
<!-- ❌ 红框 = 出错？8% 男性红绿色盲分不清红/绿框 -->
<input class="invalid" aria-invalid="false">

<!-- ✅ 颜色 + 图标 + 文本 + aria 四通道 -->
<input class="invalid" aria-invalid="true" aria-describedby="email-err">
<p id="email-err">⚠️ Email format is invalid 邮箱格式不正确</p>
```

**经典案例**：WCAG 1.4.1 的立意是"颜色是无障碍信息通道中最脆弱的一条"——色觉障碍、强光下屏幕、单色墨水屏，任何一条都能让"仅颜色"的设计失效。

### P-C3 Theme as Token Swap 主题即令牌切换
**陈述**：暗色模式 = 语义令牌整体替换，不是逐个改色。

```css
/* ❌ 组件里写死颜色：暗色模式下白底白字 */
.card { background: #fff; color: #333; }

/* ✅ 组件只引用语义令牌；主题切换 = 换 :root 值 */
:root          { --surface: #ffffff; --text-1: #1f2328; }
[data-theme=dark] { --surface: #161b22; --text-1: #e6edf3; }
.card { background: var(--surface); color: var(--text-1); }
```

**经典案例**：`prefers-color-scheme` 普及后，"硬编码 #fff"成了最高产的暗色模式 bug 源。组件写语义名（surface/text-1），主题文件管值——两个主题各自过 P-C1 的对比度表，才是可持续的闭环。

---

## D. Motion 动效

### P-D1 Interruptible First 动效可打断
**陈述**：任何动画必须能被用户输入立即打断——用户永远比动画优先。

```js
// ❌ 动画期间用户点击被吞：动画在"替用户做决定"
el.addEventListener('click', () => {
  if (animating) return;      // 用户此时是焦躁的，你让他等
  animating = true;
  animate(el, 400, () => (animating = false));
});

// ✅ Web Animations API：输入即取消，状态无锁
const a = el.animate([{ opacity: 0 }, { opacity: 1 }], 400);
el.addEventListener('click', () => a.cancel(), { once: true });
```

**经典案例 · CASE-0002 Chrome 151 原生平滑滚动失准（自家）**
- **环境**：Windows · Chrome 151 桌面（iOS WebView / 微信 IAB / 手机浏览器全部正常）
- **症状**：点击导航后平滑滑行、落点差 290–346px；页面底部按钮（行程应为 0）点击后反而上飞 346px。
- **根因**：引擎对 `scroll-behavior: smooth` 的落点计算失准且随位置变化——不是代码 bug。
- **修复**：导航点击 preventDefault → JS 计算目标（读 computed `scroll-padding/scroll-margin`）→ 钳制后 `scrollTo` **瞬时跳转** + `pushState`。瞬时跳转没有动画 = 没有失败面。
- **对应**：P-D4（关键导航不得依赖内置平滑滚动）、P-G3（只在桌面 Chrome 发生 = 必须真机验证）。

**经典案例 · CASE-4761 框架迁移击碎共享布局动画（爬取，330👍142💬）**
- **环境**：Linux · Chromium 系 · React 18.2 + Next.js 13 App Router + Framer Motion（Pages Router 同代码正常）
- **根因**：动画库假设"路由切换时组件树连续"；App Router 流式渲染改变了挂载时序，共享布局前提被打破。
- **对应**：P-D1（动画状态须可被路由打断重建）、P-F5（动画状态绑定生命周期契约，换框架=换契约）。

### P-D2 Respect Reduced Motion 尊重减少动效
**陈述**：非必要动效必须响应 `prefers-reduced-motion`。

```css
/* ❌ 全站视差/入场动画无差别轰炸 */
.hero { animation: zoomIn .8s ease-out; }

/* ✅ 一条媒体查询降级所有非必要动效 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

**经典案例**：前庭功能障碍用户对视差滚动/缩放动画会产生生理眩晕——`prefers-reduced-motion` 不是"极客偏好开关"，是无障碍刚需（WCAG 2.3.3）。上面的全局降级是可整站复用的最小实现。

### P-D3 Compositor-Only 合成器专属
**陈述**：只动画 `transform` / `opacity`。

```css
/* ❌ 动画布局属性：每帧触发 layout+paint，低端机掉帧 */
.menu   { transition: width .3s; }        /* width 变 → 重排全文档 */
.tooltip{ transition: top .2s, left .2s; }

/* ✅ transform 不触发重排，合成器线程接管 */
.menu    { transition: transform .3s; transform: scaleX(0); transform-origin: left; }
.tooltip { transition: transform .2s, opacity .2s; }
```

**经典案例**：60fps = 每帧 16.7ms 预算；动画 `width` 意味着每帧做一次全文档重排——"动画越复杂越卡"的直觉反了，是**属性选错了**。DevTools Performance 面板紫色（Layout）块就是证据。

### P-D4 No Scroll Hijacking 不劫持滚动
**陈述**：滚动动效不得抢占滚轮/触摸控制；关键导航不得依赖浏览器内置平滑滚动。

```js
// ❌ 全页滚动劫持：wheel 事件 + 强制动画到"下一屏"，
//    用户中速滚动永远停在两屏之间（fullpage.js 一族的原罪）
window.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollTo({ top: screenIdx++ * innerHeight, behavior: 'smooth' });
}, { passive: false });

// ✅ 滚动是用户的方向盘：原生滚动 + 观察者（IntersectionObserver）
const io = new IntersectionObserver(([en]) => {
  nav.classList.toggle('active', en.isIntersecting);
}, { rootMargin: '-40% 0px -40% 0px' });
io.observe(section);
```

**经典案例**：整页劫持滚动自 fullpage.js 时代起就是可用性重灾区（用户失去滚动控制 = 失去掌控感）。观察者模式给出同等的"视差/高亮"效果而零劫持。自家 CASE-0002 是这条原则的另一半：**连浏览器自带的平滑滚动都不可信**——关键导航自己算、瞬时跳。

---

## E. Accessibility 无障碍

### P-E1 Focus Visible & Managed 焦点可见且受控
**陈述**：焦点永远可见；焦点陷阱只允许出现在模态中且必须有出口。

```css
/* ❌ 全局杀焦点outline：键盘用户彻底迷路 */
:focus { outline: none; }

/* ✅ 保留可见焦点 + 只在鼠标点击时隐藏（:focus-visible 自动分流） */
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

```js
// ❌ 无出口的陷阱：Tab 关进对话框出不来
dialog.showModal();  // 需要确认 Esc 与关闭按钮都归还焦点
// ✅ 原生 <dialog> 自带 Esc + 焦点陷阱 + 归还焦点，先于自研轮子
```

**经典案例**："outline: none 一行代码毁掉整个键盘可访问性"是审计报告里的常客。`<dialog>` 元素（2022 起全绿支持）把陷阱、Esc、焦点归还都做对了——自研 modal 的焦点管理代码大多有洞。

### P-E2 Semantic First 语义优先
**陈述**：先用原生元素，ARIA 是最后手段。

```html
<!-- ❌ div 按钮：不可聚焦、不播报、不触发表单提交 -->
<div class="btn" onclick="save()">Save</div>

<!-- ✅ 原生 button：焦点、Enter/Space、role、播报全部免费 -->
<button type="submit">Save</button>
```

**经典案例**：ARIA 第一条规则（ARIA in HTML 规范原文）："不要使用 ARIA"——能用 `<button>`/`<nav>`/`<table>` 原生元素时，ARIA 属性只是给浏览器已经免费提供的东西重复造轮子，还常造错。`focus-a11y` 桶 1155 条案例中大量起于"自定义控件忘了一个原生属性"。

### P-E3 Hit Target 命中目标
**陈述**：可点击目标 ≥ 24×24px（AA），移动端推荐 44×44。

```css
/* ❌ 图标视觉 16px 且点击区同大：拇指必备须瞄准 */
.close { width: 16px; height: 16px; }

/* ✅ 视觉可小、命中区不小 */
.close { width: 16px; height: 16px; position: relative; }
.close::after { content: ''; position: absolute; inset: -14px; }  /* 实际命中 44px */
```

**经典案例**：地铁单手刷手机场景下，16px 关闭按钮的误触率飙升。WCAG 2.5.8 把 24×24 定为 AA 下限，Apple/Google HIG 的 44/48dp 是"推荐值"——两者都指向同一事实：**指尖不是光标**。

### P-E4 Announce State Changes 播报状态变化
**陈述**：动态更新（toast/异步结果/实时高亮）通过 `aria-live` 播报。

```html
<!-- ❌ 动态插入了 toast，屏幕阅读器一片寂静 -->
<div class="toast">Saved ✓</div>

<!-- ✅ live region 先于内容存在；内容更新即播报 -->
<div class="toast" aria-live="polite" role="status"></div>
<script> toastEl.textContent = 'Saved ✓'; </script>
```

**经典案例**：SPA 路由切换后焦点留在原地、读屏器毫无反应，是单页应用对无障碍的系统性破坏。`aria-live="polite"` 的细节是 **region 必须预先存在**——动态创建再插入的 live region 经常不被监听。

---

## F. State & Feedback 状态与反馈

### P-F1 Viewport Metrics Are Not Constant 视口度量非常量
**陈述**：滚动/位置判定不得假设 `innerHeight`/`maxY` 稳定——用带宽 ≥ 阈值 + 双向滞回。

```js
// ❌ 单点阈值 + 假设 maxY 恒定：滚动条出现→maxY 变→判定翻转→振荡
const atBottom = scrollY >= maxY - 100;

// ✅ 双向滞回：进入 120px / 退出 240px，噪声在带内被吸收
let pinned = false;
function update() {
  const dist = maxY - scrollY;          // maxY 每次现读，不缓存！
  if (!pinned && dist <= 120) pinned = true;    // 宽松进
  else if (pinned && dist > 240) pinned = false; // 严格出（滞回带 120px）
  nav.classList.toggle('end-zone', pinned);
}
```

**经典案例 · CASE-0003 scroll-spy 末端"方向漏洞"（自家）**
- **环境**：任何浏览器 · 页面末端两个 section 都接近视口
- **症状**：滚轮小步滚动时高亮随机翻转；±8px 随机游走仿真即可触发。
- **根因**：保持带用 `!down` 判方向——下滚 121~240px 区间每一步都把"保持"翻走；单侧阈值没有滞回，噪声必然穿越。
- **修复**：方向无关滞回（120 进/240 出）+ mousedown 释放 override；且**所有"距底 N px"判定不再缓存 maxY**（滚动条税让它漂移 ±15px，见 CASE-0001）。

### P-F2 Optimistic with Recovery 乐观更新可回滚
**陈述**：乐观 UI 必须配失败回滚路径。

```js
// ❌ 乐观置位 + 失败装死：点赞数撒谎
likeBtn.onclick = () => { count++; likeBtn.classList.add('on'); api.like(); };

// ✅ 快照-乐观-失败回滚，用户永远看到真相
likeBtn.onclick = async () => {
  const snapshot = { count, on: likeBtn.classList.contains('on') };
  count++; likeBtn.classList.add('on');
  try { await api.like(); }
  catch { count = snapshot.count; likeBtn.classList.toggle('on', snapshot.on); toast('Failed, rolled back'); }
};
```

**经典案例**："点赞假成功"是乐观 UI 最常见的溃败形态——请求 401 后数字不回落，用户以为点过，实际没点上。快照-回滚三行代码是这类 bug 的通用疫苗。

### P-F3 Skeleton ≥ Spinner 骨架优先
**陈述**：加载用骨架屏保持布局，不用 spinner 让内容区塌陷。

```html
<!-- ❌ spinner 替换内容区：加载完内容涌入，整页跳一下 -->
<div class="feed">{loading ? '<div class="spinner"></div>' : cards}</div>

<!-- ✅ 骨架占位与内容同构：加载前后零位移 -->
<div class="feed">
  {loading ? cards.map(() => '<div class="card skeleton"></div>') : cards.map(renderCard)}
</div>
```

**经典案例**：spinner 的隐藏代价是**布局塌陷**——内容到达瞬间整个信息流下移，用户正在读的行跳走（也是 CLS 事件）。骨架屏在感知性能上同样优于 spinner（进度感研究的一致结论），两端都赢。

### P-F4 Render Parity 渲染一致性
**陈述**：SSR 输出与客户端首帧必须逐字节一致；依赖浏览器环境的值延迟到 effect。

```jsx
// ❌ 客户端才知道的值参与首帧：水合必炸
function Clock() { return <span>{new Date().toLocaleTimeString()}</span>; }
function Avatar() { return <div className={'id-' + Math.random().toString(36).slice(2, 7)}>…</div>; }

// ✅ 服务端渲染占位，effect 里再变成真值（首帧一致性 > 首帧完美）
function Clock() {
  const [time, setTime] = useState(null);       // 服务端与首帧都是 null
  useEffect(() => setTime(new Date()), []);     // 客户端挂载后更新
  return <span>{time ?? '—'}</span>;
}
```

**经典案例 · CASE-4756 `Warning: Prop className did not match`（爬取，780👍273💬 全库最高）**
- **环境**：Windows · Chrome · Next.js + styled-components v4 的 `css` prop
- **症状**：服务端输出的 class 与客户端首帧计算的不一致，每次水合告警 + 样式闪烁。
- **根因**：运行时生成的 class 参与了首帧渲染——服务端永远算不出一样的结果。
- **对应**：渲染一致性原则的教科书案例：**任何依赖浏览器环境的值（宽度/随机/时间/运行时 id）都必须延迟产生或用确定性方案**。

### P-F5 Listener Hygiene 监听器卫生
**陈述**：监听器与拥有它的生命周期绑定；高频回调读取的状态做过期检查。

```js
// ❌ SPA 路由切换后旧监听器还活着：内存泄漏 + 重复执行
useEffect(() => {
  window.addEventListener('resize', () => setWidth(innerWidth));  // 永不卸载
}, []);

// ✅ 返回清理函数 + 用 ref 防过期闭包
useEffect(() => {
  const onR = () => setWidth(window.innerWidth);
  window.addEventListener('resize', onR);
  return () => window.removeEventListener('resize', onR);
}, []);

useEffect(() => {
  const id = setInterval(() => {
    if (cancelledRef.current) return;   // 异步回调先验过期
    poll();
  }, 1000);
  return () => clearInterval(id);
}, []);
```

**经典案例**：`race-state` 桶 539 条的主旋律是同一个循环："路由切了 → 旧组件的 scroll/interval 还在跑 → setState 到已卸载组件 → 内存涨 + 行为诡异"。React 的 effect 清理函数、`AbortController`、stale-closure 检查都是这一原则的工具化。

---

## G. Environment Resilience 环境韧性

### P-G1 Scrollbar Modes Differ 滚动条模式因平台而异
**陈述**：Overlay（macOS/移动，不占位）与 Classic（Windows/Linux，占 ~15px）并存——设计必须兼容两者，且不得引发滚动条出现→消失的振荡。

```css
/* ❌ 居中布局没给滚动条留位：短页/长页切换时内容左右横跳 15px */
.page { max-width: 960px; margin-inline: auto; }

/* ✅ 声明滚动条槽位常驻：Overlay 平台零成本，Classic 平台不再横跳 */
html { scrollbar-gutter: stable; overflow-x: clip; }
```

**经典案例 · CASE-0001（A 组已详述）**：Windows 经典滚动条占 15px 高度，它的"出现→消失"循环把页面总高变成方波——所有缓存 `maxY`/`innerHeight` 的逻辑一起振荡。`overflow-x: clip` 治溢出源，`scrollbar-gutter: stable` 治宽度横跳，两者经常需要一起上。

### P-G2 Occlusion Is a State 遮挡是一种状态
**陈述**：WebView/IAB/Electron 在遮挡时冻结 rAF/定时器/滚动事件——恢复逻辑必须容忍时间跳跃。

```js
// ❌ 用"距上次 scroll 的间隔"判定用户滚停：遮挡恢复后时间线断裂，误判必现
let last = performance.now();
window.addEventListener('scroll', () => {
  if (performance.now() - last > 500) showBackToTop();  // 恢复后 500ms 假成立
  last = performance.now();
});

// ✅ 时间跳跃感知：恢复可见时重置基准，比较相对间隔前先检查连续性
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) { last = performance.now(); resync(); }
});
```

**经典案例 · CASE-0004 IAB 遮挡冻结渲染（自家）**
- **环境**：App 内 WebView（Electron 壳 / 移动 IAB）· scroll 驱动 UI
- **症状**：窗口被遮挡再回来后 scroll 事件不派发、定时器冻结，页面像死了一样；录屏/截图强制产帧才恢复。
- **规则**：可见性恢复逻辑必须容忍时间跳跃；后台任务挂 `visibilitychange` 显式暂停/恢复；调试时先强制产帧区分"冻结"与"死循环"。

### P-G3 Real Device, Real Zoom 真机真缩放
**陈述**：无头全绿 ≠ 上线正确；关键交互必须在真实浏览器 + 多缩放档位验证。

```
验证矩阵（关键交互必过）：
浏览器 × { Chrome, Safari, Firefox, WebView/IAB }
缩放   × { 50%, 67%, 80%, 90%, 100%, 110%, 125% }
模式   × { dev build, prod build }
滚动条 × { Overlay(macOS/移动), Classic(Windows/Linux) }
```

**经典案例**：本仓库三案齐发——CASE-0001（经典滚动条，无头复现不了）、CASE-0002（Chrome 151 独有）、CASE-0004（IAB 遮挡，无头永远复现不了）；爬取侧 CASE-4764（**dev 不复现的生产 bug**）与 CASE-9121（Source Map 只在特定浏览器失效）。共同教训：**复现矩阵越贴合真实用户环境，无头绿灯的含金量才越高。**

### P-G4 Keyboard Resizes 视觉视口会变
**陈述**：移动端软键盘压缩 `visualViewport`——输入框、fixed 底栏必须响应它。

```js
// ❌ 假设布局稳定：键盘弹起后 fixed 底栏被顶进键盘底下/悬空
window.addEventListener('resize', layout);   // iOS 上 resize 不可靠

// ✅ 监听 visualViewport：键盘弹起/收起都拿到真实可用区
const vv = window.visualViewport;
vv.addEventListener('resize', () => {
  composer.style.bottom = `${window.innerHeight - vv.height - vv.offsetTop}px`;
});
```

**经典案例**："iOS 聊天输入框被键盘遮住一半"是移动 web 十年常青 bug——根因是 iOS Safari 的 `window.innerHeight` 在键盘弹出时语义含混，唯一可靠信息源是 `visualViewport`。`form-input` 桶 1355 条中键盘相关占显著比例。

---

## H. Performance & Perception 性能与感知

### P-H1 Perception Budgets 感知预算
**陈述**：LCP < 2.5s、INP < 200ms、CLS < 0.1——超预算的功能先修性能再加。

```js
// 用性能观察者把预算变成可报警的常量，而不是"感觉有点卡"
new PerformanceObserver((l) => {
  for (const e of l.getEntries()) {
    if (e.entryType === 'layout-shift' && !e.hadRecentInput && e.value > 0.1)
      report('CLS budget blown', e.value);
  }
}).observe({ type: 'layout-shift', buffered: true });
```

**经典案例**：全库统计佐证——`media-cls`（布局位移）占 10000 条案例的 25.5%，是第一大症状桶；`browser-quirk` 23.4% 次之。"感觉上没问题"在数据面前不堪一击：**预算必须量化并持续观测**。

### P-H2 No Layout Thrash 布局抖动归零
**陈述**：同帧内 DOM 读与写分组批量。

```js
// ❌ 读-写-读-写交替：每次写使下一次读强制 reflow，N 行 = N 次重排
for (const row of rows) {
  const h = row.getBoundingClientRect().height;  // 读（reflow）
  row.style.height = h * 2 + 'px';               // 写（失效）
}

// ✅ 先全读后全写：1 次重排
const heights = rows.map((r) => r.getBoundingClientRect().height);  // 读×N
rows.forEach((r, i) => { r.style.height = heights[i] * 2 + 'px'; }); // 写×N
```

**经典案例**："表格 hover 变卡"的经典根因：hover 处理器里读一个布局属性再写一个样式，交替循环把每帧重排次数放大 N 倍。DevTools Performance 面板里一串连续紫色 Layout 块（forced reflow 警告）就是这条原则的案发现场。

### P-H3 Throttle High-Frequency Events 高频事件节流
**陈述**：scroll/resize/mousemove 回调一律 rAF 节流或 passive 监听。

```js
// ❌ scroll 回调里做布局读写：滚动被回调阻塞，帧率腰斩
window.addEventListener('scroll', (e) => {
  header.style.opacity = 1 - scrollY / 300;
  const r = hero.getBoundingClientRect();   // 每个滚动事件强制 reflow
}, { passive: true });                      // passive 救不了布局读写

// ✅ rAF 节流：一帧最多执行一次，滚动本身零阻塞
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    header.style.opacity = 1 - scrollY / 300;
    ticking = false;
  });
}, { passive: true });
```

**经典案例**：`{ passive: true }` 只解决"能否立即滚动"，不解决"回调内的布局读写阻塞合成"——两者是正交的两件事，都必须做。这是 scroll 性能问题修复一半就"自以为修好"的高频误区。

---

## 双向索引说明

```
原则 (P-A1…P-H3)  ⇄  bug 桶 (16 类)  ⇄  案例 (CASE-0001…, CASE-1001…10999)
```

- **从原则找案例**：本文件 / `data/index.json` 的 `principles` 映射。
- **从 bug 找原则**：[cases/BUG-INDEX.md](../cases/BUG-INDEX.md)（按症状分桶）或[在线检索页](https://eugenewang5425.github.io/web-design-principles/)（支持按原则/桶/环境/关键词过滤）。
- **机器可读**：`data/index.json`（双向）+ `data/cases.jsonl`（全量案例）。
