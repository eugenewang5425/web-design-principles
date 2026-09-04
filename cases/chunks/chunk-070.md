# Case Chunk 070 — Round 70

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-7901 · $env/static/public not properly tree shaken
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: svelte
- **Excerpt**: ### Describe the bug Hello, I'm working on a project where there will be features flags that would be used in build because each of our customer will have a different build of the project. Because of (very) strict requirements, code that is behind a disabled feature flag should not be in the build given to the customer. I'm working on a proof of concept using $env/static/public for the feature flags, but I see that the code behind the feature flag actually is in the resulting build. My best guess is that the values of the features flag are replaced after the tree-shaking step ? ###…

### CASE-7975 · SvelteKit cli overlapping parameter shortcut -h
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: blocked by upstream/p3-edge-case
- **Excerpt**: **Describe the bug** The "svelte-kit" cli commands dev, preview and start have overlapping parameter shortcuts for the host parameter and the help, both shortcuts are `-h`. When using the shortcut, the help is always displayed and the command exits. (Using `--host` instead works) **Logs** ```bash $ npx svelte-kit dev -ho Description Deprecated — use svelte-kit preview instead Usage $ svelte-kit start [options] Options -p, --port Port (default 3000) -h, --host Host (only use this on trusted networks) (default localhost) -H, --https Use self-signed HTTPS certificate (default false) -o, --open…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7902 · Page does not reload when navigating back via back arrow button in browser
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍4 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When I navigate to a new page (see example below) and then press the back button of the browser, the url changes but the page content remains unchanged. Only when I manually reload the page, the correct content appears. How i navigate to the new page: `<a href="/service/{singleService.id}" class="service-name">{singleService.name}</a>` ### Reproduction 1. structure like this ![image]([link]) 2. Navigate to `[link] (normal +page.svelte) 3. Click on Service of Stack and get redirected to `[link] 4. Click on back-Button in Browser Now the url has changed back to `[link] but…

### CASE-7911 · client side navigation incorrectly re-uses `data` from previous request
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: ### Describe the bug The `load_route` function re-uses data from a previous result if `loaders` array does not have any data to load at a specific index. In my case I first load data where 5 different `loaders` are involved. On the next page (which includes a layout reset) only 3 loaders are involved. The last one does not provide any data and `SvelteKit` uses the `data` from the previous request, which is wrong since that data should not be involved in the rendering process becasue of the layout reset. ![image]([link]) > those logs were created by adding `console.log(1, url.pathname,…

### CASE-7933 · In preview, all svelte components gets their styles loaded regardless if they aren't used or lazy loaded
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In preview, styles of all the components are added to the head, even if the component is never used or dynamically lazy loaded. In my case, it triggers conflicts from global styles between the home page and an admin page for a CMS. It also add unecessary load to the initial requests ### Reproduction Run the following in preview: [link] Two components have been added : $lib/components/Test.svelte is loaded dynamically $lib/components/Test2.svelte is not used at all Test1-xxx.css is added regardless if it's loaded later. Test2-xxx.css is added but the component is never…

### CASE-7942 · Incorrect path for dynamic routes: Server & Client mismatch
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I'm using a dynamic route, but its params are incorrect on the server (and correct on the client). Best to explain it with an example. Relevant Code: ![image]([link]) Now when opening `[link] I'm getting following message on the client: ![image]([link]) which is correct! But on the server it's looking different: ![image]([link]) As you can see, it prints out the log twice. The first one is correct, the second one is incorrect. On the client, it prints it out only once - the correct one. ### Reproduction GitHub repo: [link] Stackblitz: [link]]%2Ftests%2F[slugname].svelte…

### CASE-7948 · build error
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, svelte
- **Signals**: 👍1 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When running npm run build getting below error: ![image]([link]) ### Reproduction Ubuntu: 20.04 Node: 14.18.3 ### Logs _No response_ ### System Info ```shell na ``` ### Severity blocking all usage of SvelteKit ### Additional Information _No response_

### CASE-7956 · Intellij cannot resolve `@user/fira-mono` in new demo project
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍0 💬5 · closed · labels: examples/p3-edge-case
- **Excerpt**: ### Describe the bug I use IntelliJ and when I load the sveltekit base project, I receive an error from my IDE saying that it cannot resolve 'fira-mono' at this line: ```css @user '@user/fira-mono'; ``` Here is a screenshot: <img width="1552" alt="Screen Shot 2021-11-07 at 1 53 29 PM" src="[link]> ### Reproduction ```shell npm init svelte@user my-app ``` ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0.1 CPU: (8) x64 Intel(R) Core(TM) i7-4980HQ CPU @ 2.80GHz Memory: 264.78 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.6 -…

### CASE-7964 · adapter-static build time fetching does not work when `export const prerender = true;` et al. are set
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: pkg:adapter-static/p3-edge-case
- **Excerpt**: ### Describe the bug According to the [docs]([link]), files that are being requested via `load` can be fetched once at build time. This works, but only if flags such as ```JavaScript export const ssr = false; export const prerender = true; ``` have not been set. If they are set, the resources will be requested via client side Javascript. ![image]([link]) I don't know if this is expected behaviour or a bug, in the latter case I can create an example repository. ### Reproduction ```JavaScript <script context="module"> // The following break SSG: // export const prerender = true; // export const…

### CASE-7971 · Static-adapter build error: cannot read property 'copy_static_files' of undefined
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** On build try using `@user/adapter-static` error occured: `Cannot read property 'copy_static_files' of undefined` **Logs** Please include browser console and server logs around the time this bug occurred. ![image]([link]) **To Reproduce** Start default SvelteKit app, and add static adapter to `svelte.config.js`: ```js import preprocess from 'svelte-preprocess'; import adapter from '@user/adapter-static'; const config = { preprocess: preprocess(), kit: { adapter: adapter(), target: '#svelte' } }; export default config; ``` **Expected behavior** Project built successfully.…

### CASE-7976 · Loading does not finish when starting with Skeleton project.
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** When I start the Svelte app, which is a project created using the template Skeleton project, the site does not stop loading. **Logs** <img src="[link] width="320"/> <img src="[link] width="320"/> **Expected behavior** The site should complete loading. **Stacktraces** I will post the log after installation. <details> <summary>Stack trace</summary> Sho:module nagaishou$ npm init svelte@user my-page npx: 5個のパッケージを2.765秒でインストールしました。 create-svelte version 2.0.0-next.70 Welcome to SvelteKit! This is beta software; expect bugs and missing features. If you encounter a problem,…

### CASE-7981 · error: "Cannot use keyword 'await' outside an async function", why?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: **Describe the bug** In `./generated/index.ts` I'm using this code: ```ts import type { PlayerServiceClient } from './generated/player.client'; let playerService: PlayerServiceClient; const playerClient = await import('./generated/player.client'); export const player = (): PlayerServiceClient => playerService || ((playerService = new playerClient.PlayerServiceClient({})), playerService); ``` **Logs** `Cannot use keyword 'await' outside an async function` **Expected behavior** I would like to use this because I need lazy load of many files and I would like to use it like this in my components:…

### CASE-7984 · Svelte gives "Error: Function called outside component initialization", only in Dev Build.
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: vite
- **Excerpt**: **Describe the bug** This issue is not just with Svelte Kit, It happened with vite + routify combo as well, and only in dev build. Basically, this issue happens upon doing a normal dev build. ![image]([link]) **Logs** <details> <summary>Logs</summary> Failed to init component <Root> Error: Function called outside component initialization at get_current_component ([link]) at setContext ([link]) at instance ([link]) at init ([link]) at new Root ([link]) at createProxiedComponent ([link]) at new ProxyComponent ([link]) at new Proxy<Root> ([link]) at Renderer.start ([link]) at async start…

### CASE-7985 · Windows: css not loaded on navigation
- **Principles**: P-A3, P-H1 · **Env**: windows, linux
- **Signals**: 👍5 💬5 · closed
- **Excerpt**: **Describe the bug** When navigating from one page to another, the css of the second page is not loaded. This only happens when building the app on Windows, on Linux (WSL2 on Windows), the css file is correctly loaded. I've created a simple repo for reproduction: [link] First page: ![image]([link]) A click on "To page 2" shows this on WSL2: ![image]([link]) Network requests (notice the css for page2 at the enc): ![image]([link]) And this on Windows (missing the styling): ![image]([link]) Network requests (no css for page2): ![image]([link]) **Logs** There are no errors in the console **To…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7903 · @user/adapter-netlify + Supabase - throws http 500 only when edge functions are turned on.
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug It's a little bit of a weird one that I haven't found any documentation on. Basically, if edge functions are enabled, a 500 error gets thrown when running the deployed site due to, as far as I can tell, the Supabase helper trying to access the `document` variable while running the server code of the SvelteKit app. The really weird part is that locally with the dev server, this issue never happens. While Edge functions are not a priority and my project is fine not using them, this seems like a bug somewhere either with the adapter or with Supabase(where I've also filed an…

### CASE-7905 · Client-side console.log not showing output in browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, svelte
- **Signals**: 👍1 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I am trying to log messages to the browser console when a button is clicked, but nothing is showing up in the Firefox console. I expect at least the "Getting PDFs..." message to be displayed when the button is clicked. Here's the relevant code from my Svelte component: ``` <!-- routes/+page.svelte --> <script> import { page } from '$app/stores'; import PdfList from '$lib/PdfList.svelte'; import PdfViewer from '$lib/PdfViewer.svelte'; import { selectedPdf } from '$misc/stores'; import { SSE } from 'sse.js'; async function getPdfs() { console.log('Getting PDFs...'); const…

### CASE-7907 · Enhanced form with `<button formaction>` scrolls to top of form on Chromium browsers
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chromium, firefox, safari, svelte
- **Signals**: 👍1 💬5 · open · labels: documentation
- **Excerpt**: ### Describe the bug I have an enhanced form using SvelteKit, and I use `<button formaction="?/addPet">` to add form inputs to the form. Its wrapping form has a separate action: ```html <form id="pet-form" method="POST" action="?/submit" use:enhance data-sveltekit-noscroll> <!-- labels and inputs --> <div> <button style="--color-link: [ref];" formaction="?/addPet">Add pet name</button> <button>Submit form!</button> </div> </form> ``` On a Chromium browser, when clicking "Add pet name", the page scrolls to the top of the form. On Firefox and Safari, the scroll position stays put as expected.…

### CASE-7917 · Cannot find module './$types' for routes with a leading dot like .well-known
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍0 💬5 · closed · labels: types / typescript/blocked by upstream
- **Excerpt**: ### Describe the bug For example a route like "/.well-known/change-password" (for [password managers]([link])) will generate in the editor the error: > Cannot find module './$types' or its corresponding type declarations.ts(2307) ### Reproduction repo [link] ### Logs _No response_ ### System Info ```Shell System: OS: macOS 11.7.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 15.09 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 19.0.1 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.19.2 - /usr/local/bin/npm Browsers: Brave Browser: 107.1.45.123 Chrome:…

### CASE-7924 · Unable to use third party custom elements
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, macos, svelte
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### Describe the bug Third party custom elements work fine in `app.html` but not in `+page.svelte`. I've only tested with Pyscript custom elements. ### Reproduction [Reproduction repo]([link]) ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.6.8 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 290.84 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 18.8.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.18.0 - /usr/local/bin/npm Browsers: Brave Browser: 104.1.42.97 Chrome: 104.0.5112.101 Firefox: 103.0.2 Firefox Developer Edition: 105.0…

### CASE-7926 · Uncaught TypeError on start
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I get an uncaught exception in the `console` And then I get weird bugs that I don't understand (sorry to be so vague) ### Reproduction I created a repo at to repoduce the bug [link] steps: - git clone - npm i - npm run dev - open in *firefox* ### Logs ```shell <Layout> was created with unknown prop 'data' layout.svelte:84:92 <Page> was created with unknown prop 'data' +page.svelte:41:92 <Page> was created with unknown prop 'errors' +page.svelte:41:92 Uncaught (in promise) TypeError: navigation_result.state.branch.at is not a function update [link]…

### CASE-7929 · [Adapter Vercel] Returning a json Response object from an edge function returns an empty object
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬5 · closed · labels: pkg:adapter-vercel
- **Excerpt**: ### Describe the bug I'm trying to fetch some json from an endpoint which is deployed as an edge function. The endpoint returns a `Response` object, like this: ```ts export const GET: RequestHandler = () => { const body = { some: { data: 'from my endpoint' }, here: { isSome: 'more' } }; return new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } }); }; ``` Everything works perfectly in local dev and preview, but once deployed to Vercel the response is an empty object. If I return a POJO instead of a `Response` ```ts export const GET: RequestHandler…

### CASE-7936 · goto doesn't preserve hash
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-D4, P-F1, P-F5 · **Env**: chrome, firefox, safari, macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug goto does not take into account hash in url at all. `goto("/profile/settings#kyc")` will do the same as `goto("/profile/settings")` except some buggy scrollTo animations. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.2.1 CPU: (8) arm64 Apple M1 Memory: 76.67 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.7.1 - /opt/homebrew/bin/node Yarn: 1.22.15 - /opt/homebrew/bin/yarn npm: 8.5.2 - /opt/homebrew/bin/npm Browsers: Chrome Canary: 105.0.5147.0 Firefox Developer Edition: 102.0 Safari: 15.3 Safari Technology Preview:…

### CASE-7937 · Accept header parsing possibly too strict
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome/95, safari/537, windows, svelte, webkit
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Hi! I noticed some 500 responses in our server logs and tracked it down to this line in SvelteKit: [link] framework]/blob/27a9888161b86bcc8418f87f93ed54959c631079/packages/kit/src/runtime/server/page/index.js#L57 The Accept header in question was `text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2`, with the part throwing the error being `*; q=.2`. The user agent was `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36` ### Reproduction Here's a test: [link] [link] IMO it should return a 200 with the…

### CASE-7939 · Netlify adapter build failure with Edge enabled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Tried to use the new Netlify Edge option in an existing project and it resulted in a `no such file or directory` error about `.svelte-kit/netlify-tmp/manifest.js`. Confirmed it also happens on a freshly created skeleton app, with the only change being to switch to the Netlify adapter and setting `edge: true`. ### Reproduction ``` $ npm init svelte test-netlify-edge # skeleton, nothing else enabled $ cd test-netlify-edge $ npm i -D @user/[email]-next.53 $ npm uninstall @user/adapter-auto $ code . # to edit svelte.config.js, switching to adapter-netlify and setting edge:…

### CASE-7940 · Typescript added even tho requested no to
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, macos, typescript, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Generating a new app, I chose not to add typescript support. I want to have a pure JS app. TS was added anyway and is generating TS-related compile issues as I build the app out. This appears to be a bug. ### Reproduction A generate new app with SvelteKit. Select No to the Typescript support prompt. Observe that TS artifacts are added anyway. ### Logs _No response_ ### System Info ```shell macOS, chrome browser. Very recent kit version (last week) I will add this when I get back to my machine. ``` ### Severity serious, but I can work around it ### Additional Information…

### CASE-7943 · Different-origin link to same path incorrectly getting handled by client-side router
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, chrome, svelte
- **Signals**: 👍1 💬5 · closed · labels: router/p1-important
- **Excerpt**: ### Describe the bug Installing the default Skeleton with JS or TS and clicking on the link to [link] does not work. ### Reproduction Cannot follow link [link] from deployed and/or local Sveltekit installation. This is pretty much the default skeleton installation with JS or TS. [link] ### Logs Firefox ```js Uncaught (in promise) DOMException: The operation is insecure. start-f3a65506.js:1 ge [link] AsyncFunctionThrow self-hosted:704 (Async: async) _start_router [link] ``` Chrome ```js start-f3a65506.js:1 Uncaught (in promise) DOMException: Failed to execute 'pushState' on 'History': A…

### CASE-7958 · [bug] page destroyed during hydration if a file fails to load
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, svelte
- **Signals**: 👍2 💬5 · closed · labels: help wanted/p2-nice-to-have
- **Excerpt**: ### Describe the bug The page from the reproduction loads during SSR and then fails during hydration during dev mode if you both have adblock on and are not using the new `experimental.prebundleSvelteLibraries` option ([link]). This particular example is kind of an edge case, but the outcome is really bad and I'm not so sure how rare it is more generally. Per Rich's point, sometimes things fail to load because you live in NYC and take the subway and lose connectivity going into a tunnel. That the entire page would be wiped out eventhough SSR succeeded is quite a bad outcome. If we wrapped the…

### CASE-7960 · ERR_CONNECTION_REFUSED can not connect by ip (--host) in 1.0.0-next.176
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, macos
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### Describe the bug ERR_CONNECTION_REFUSED can not connect by ip (--host) in `1.0.0-next.176` and can not connect form outside docker but no problem in `1.0.0-next.175` by change version in package.json and re install deps ### Reproduction - ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.5 CPU: (8) arm64 Apple M1 Memory: 217.02 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.10.0 - ~/.nvm/versions/node/v16.10.0/bin/node Yarn: 1.22.11 - ~/.nvm/versions/node/v16.10.0/bin/yarn npm: 7.24.0 - ~/.nvm/versions/node/v16.10.0/bin/npm Browsers: Chrome: 94.0.4606.61…

### CASE-7961 · Freeze livereload in node_modules folder
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍0 💬5 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug If sveltekit root folder inside `./src/node_modules/svelte-kit` live reload in dev mode don't working... ### Reproduction Create sveltekit project inside node_modules folder & run `svelte-kit dev` ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0 CPU: (8) arm64 Apple M1 Memory: 116.34 MB / 8.00 GB Shell: 3.3.1 - /opt/homebrew/bin/fish Binaries: Node: 16.9.0 - /opt/homebrew/bin/node npm: 7.21.1 - /opt/homebrew/bin/npm Browsers: Chrome: 93.0.4577.63 Firefox: 92.0 Firefox Developer Edition: 93.0 Safari: 15.0 npmPackages: @user/adapter-static:…

### CASE-7962 · Parent element's unique class repeating on all the child elements
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Hi As you see the parent's class gets repeated on its all child elements. ![Screenshot 2021-09-10 102640]([link]) ![Screenshot 2021-09-10 102704]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (12) x64 Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz Memory: 6.67 GB / 15.84 GB Binaries: Node: 14.16.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.22.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1023.0), Chromium (93.0.961.38) Internet…

### CASE-7968 · Add an option for inline scripts in html to be externalised
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍20 💬5 · open
- **Excerpt**: I am trying to reuse a number of my svelte components in a Chrome extension that replaces the newtab page. I am using a site generated with adapter-static, and the client side router disabled, but i still need javascript enabled for the likes of a search bar. On a default build of a test page the Javascript does not work, and I see the following error in the extension console: `Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash…

### CASE-7972 · Proposing we not reload when the dev mode websocket is unavailable
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** There are a number ways the dev mode websocket on port 24678 can get broken. When you're running through various layers of proxy for SSL termination and authentication, and dealing with machines on different network fabrics, it's quite possible to just not have that working for whatever reason. In my case, our dev workstations are only reachable from our laptops via this crazy proxy and Chrome extension, and I was able to get the websocket working with the right SSH tunnel setup but I can certainly imagine others not being…

### CASE-7979 · Duplicate script tags inserted
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, ubuntu, svelte, vite
- **Signals**: 👍3 💬5 · closed · labels: vite
- **Excerpt**: **Describe the bug** I'm noticing duplicate script tags in my SvelteKit app. ``` <link rel="modulepreload" href="/./_app/pages/$layout.svelte-a6ce5e1a.js"> ... <link rel="modulepreload" as="script" crossorigin="" href="/_app/pages/$layout.svelte-a6ce5e1a.js"> ``` **To Reproduce** - `npm init svelte@user` and choose all the defaults - `npm run preview` Inspect head element with Chrome inspector <details> <summary>Diagnostics</summary> - The output of `npx envinfo --system --npmPackages svelte,@[meta framework],vite --binaries --browsers` ``` System: OS: Linux 5.8 Ubuntu 20.04.2 LTS (Focal…

### CASE-7994 · resolve() replaces the first character with backslash in external links
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Running an external link through resolve() breaks them. `[link] is transformed into `/ttps:/live.staticflickr.com/65535/54843647922_a6f731ef05_o.jpg` What's the recommended way of dealing with mixed internal and external links? ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: Windows 11 10.0.26200 CPU: (16) x64 Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz Memory: 2.20 GB / 15.91 GB Binaries: Node: 22.22.2 - C:\Users\reio\scoop\apps\nodejs22\current\node.EXE npm: 10.9.7 - C:\Users\reio\scoop\apps\nodejs22\current\npm.CMD Browsers: Chrome:…

### CASE-7996 · "loading" indicator in SvelteKit docs does not go away when coming back in Safari 26
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 26, safari, svelte
- **Signals**: 👍0 💬4 · open · labels: awaiting submitter
- **Excerpt**: ### Describe the bug This is honestly exactly as described in [link] framework][ref] from a few years back, but it appears to be back in just Safari (I'm using 26.3) now. The SPA navigation in the SvelteKit documentation reliably gets stuck in the loading state when going back from another page. This happens on my site too with eg ``` {#if navigating?.to} <LoaderComponent /> {/if} ``` But this happens on the SvelteKit docs site right now too, for a higher-profile example. I've tried adding all the usual suspects like `pageshow` events, but in Safari nothing seems to fire when returning back.…

### CASE-8000 · Error when using hyphenated keys in object properties with Remote functions form
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, macos
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug When using Remote functions with the `form` API, object keys containing hyphens (e.g., `zh-TW`, `zh-CN`) cause errors when accessing form fields. ### Reproduction [link] Run `pnpm dev` and click the submit button on the form. ### Logs ```Shell Uncaught (in promise) Error: Invalid path list[0].text.zh-TW ``` ### System Info ```Shell System: OS: macOS 15.6.1 CPU: (12) arm64 Apple M4 Pro Memory: 2.52 GB / 48.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.16.0 - /usr/local/bin/node npm: 11.4.1 - /usr/local/bin/npm pnpm: 10.12.1 - /usr/local/bin/pnpm Browsers: Chrome:…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7904 · sveltekit nodes are clobbering each other in "embedded" mode
- **Principles**: P-F4 · **Env**: svelte, react
- **Signals**: 👍0 💬5 · closed · labels: ready to implement
- **Excerpt**: ### Describe the bug Consider the scenario where Sveltekit is building pages in [embedded]([link]) mode. In this scenario, Sveltekit generates two pages: `a.html` and `b.html`. Both `a` and `b` are then embedded into a single page: ``` <ReactWebsite> <Header /> <a.html /> <Ad /> <b.html /> <Footer /> </ReactWebsite> ``` When Sveltekit builds these pages, it inlines the following hydration script (or something similar) into _both_ pages: ```html <script> { __sveltekit_17vqb19 = { env: {}, base: new URL(".", location).pathname.slice(0, -1), element: document.currentScript.parentElement }; const…

### CASE-7909 · Calling `invalidate` on mount in a layout triggers an infinite reload loop on a 404 error
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the bug The `server_fallback` method from here: [link] framework]/blob/74798e94ab16db33887a2229ae03f6ec419d40f3/packages/kit/src/runtime/client/client.js#L1122-L1134 appears to check if the page has `hydrated` to prevent infinite reloads when a 404 happens. However, it seems if `invalidate` is called (for instance in a `+layout.svelte` component that is parent to the 404-d page), it is my understanding that `invalidate` waits for the page to `hydrate` prior to `server_fallback` being called, and so an infinite redirect loop appears. ### Reproduction Here's a modified template:…

### CASE-7910 · SSR of page that imports a large file causes huge spike in memory usage
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug During the initial server side render of a page that imports a large file the server memory usage spikes to approximately 100x the size of the file. On my system this causes node to run out of memory and crash when importing files larger than 30MB. This seems to happen for imported JSON files as well as text files imported using Vite's `?raw` parameter. Curiously the memory usage spike only seems to occur when using the dev server (`npm run dev`). It does not occur when building the project with `npm run build` and then using the preview server (`npm run preview`). The…

### CASE-7916 · DOM elements move around during SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have a list of items to display like so: ```svelte <ul> {#each items as item} <li> <a href={getPath(item)} class="block"> <div class="content">...</div> </a> </li> {/each} </ul> ``` However during SSR the `div` that has the content pops outside of the `a` tag and the HTML sent to the browser looks like this: ```html <ul> <li> <a href="/something" class="block"></a> <div class="content">...</div> </li> </ul> ``` After hydration, the content placed back inside the `a` tag correctly, but this causes a lot of shifting and misplacement during loading. The problem is with the…

### CASE-7919 · Load() function in +page.js and +page.svelte content is not SSR'ing
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Both my layout.svelte and page.svelte have their corresponding .js counterparts with their own load functions. Content from layout.svelte is SSR'd and built in server as expected, however, content from page.js is fetched and built client-side. I know this because 1. Only my nav and footer and content in layout.svelte is visible when clicking "page source" and 2. Disabling JS only shows my footer and header, not the content of the page itself. ### Reproduction The repo as it stands is here: [link] It's a basic SvelteKit project using latest structure and Node Adapter.…

### CASE-7928 · +layout.server.js not correctly passing data down during client-side hydration
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug After client side navigation, calling `await parent()` from within a +page.server.js exported load function returns `{"data":null}` instead of the value returned from the +layout.server.js exported load function ### Reproduction - Load [link] - Note that layout data, and page data are correct initially - Click on 'Another page' link, to do a client side navigation to a new page - Note that layout data is now incorrect (as is the layout data that was merged into page data) ### Logs _No response_ ### System Info ```shell stackblitz default template fork ``` ### Severity…

### CASE-7930 · Date changes datatype in SSR und CSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug When returning a JSDate from an endpoint. The datatype is preserved during SSR, but then on clientside load the type is the expected string. ### Reproduction The reproduction repo can be found here: [link] The setup is very simple: ## index.svelte ```ts <script lang="ts"> export let now: string; console.log(now.toString(), (now as any) instanceof Date,typeof now === 'string'); </script> ``` ## index.ts ```ts export async function GET() { return { body: { now: new Date() } } } ``` ### Logs ```shell Server Log: `Wed Aug 10 2022 16:15:55 GMT+0200 (Mitteleuropäische…

### CASE-7932 · Netlify adapter complains about ES module requires
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug I am having problems on a new project and they seem to all be related to `require` vs `import`. I don't know enough of the internals to get if it comes from svelte-kit, the netlify adapter, vite or something else. Currently I use a Swiper module on one page. This page works fine locally with the dev server, but as soon as I check it live on Netlify, then I get this error on the page where the slideshow is: ``` require() of ES Module /var/task/node_modules/ssr-window/ssr-window.esm.js from /var/task/.netlify/server/entries/pages/test.svelte.js not supported. Instead change…

### CASE-7938 · DNS issues kill SvelteKit SSR process with fetch()
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: error handling
- **Excerpt**: ### Describe the problem If a `fetch()` DNS resolution fails the SvelteKit server-side rendering process of node-adapter crashes and dies. It is unusual for a failed `fetch()` to kill a process, and highly undesirable, so I would like to highlight this unexpected behaviour. Our [node-adapter]([link]) encountered the following error and crashes the whole SSR process when doing SSR: ``` FetchError: request to [link] failed, reason: getaddrinfo EAI_AGAIN tradingstrategy.ai at ClientRequest.<anonymous> (file:///root/frontend/build/shims-eb608bdd.js:6246:11) at ClientRequest.emit…

### CASE-7941 · Hydration bug with browser extensions
- **Principles**: P-F4 · **Env**: macos, svelte
- **Signals**: 👍0 💬5 · closed · labels: documentation
- **Excerpt**: ### Describe the bug [link] is using SvelteKit, and many users are reporting that the site isn't loading properly. It seems that hydration isn't happening. In some very rare occurrences, it does hydrate. The issue only happens with certain browser extensions, for example the [BeaNote]([link]) extension. I've reproduced it on Netlify and CloudFlare Pages, but not locally. ### Reproduction Repo: [link] 1. Deploy to Netlify or CloudFlare Pages 2. Install the [BeaNote]([link]) 3. Visit the deployed site ### Logs _No response_ ### System Info ```shell System: OS: macOS 10.15.7 CPU: (8) x64…

### CASE-7951 · [@user] In dev: Setting ssr: false doesn't render pages
- **Principles**: P-F4 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Creating `test.svelte`, and setting `ssr: false` doesn't render test.svelte in dev ### Reproduction 1. npm init svelte@user my-app 2. cd my-app 3. npm install 4. npm i -D @user/adapter-static@user 4. update svelte.config.js to use @user/adapter-static 5. create src/routes/test.svelte 6. npm run dev 7. navigate to /test.svelte ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.11 Ubuntu 20.04.3 LTS (Focal Fossa) CPU: (4) x64 Intel(R) Xeon(R) CPU @ 2.80GHz Memory: 4.59 GB / 7.77 GB Container: Yes Shell: 5.0.17 - /bin/bash Binaries: Node: 16.13.1 -…

### CASE-7952 · Error page still loaded when redirecting
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: error handling/breaking change
- **Excerpt**: ### Describe the bug This is the scenario: I have a conditional redirect in `__layout.svelte` which checks if the current path starts with a certain prefix. Let's say "foo". If I go to `/foo/bar` and `routes/foo/bar.svelte` exists, I correctly get redirected and the `bar` page does not get loaded. If I go to `/foo/baz` and that page does not exist, the `__error.svelte` page still gets ssr-ed and loaded and sent to the browser. In my specific project, this becomes a problem because with `/foo/baz` the error page fails to load because it tries to access unavailable stuff, the server returns an…

### CASE-7953 · @user issue on SSR hydration
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When you put this code anywhere in a SvelteKit page that has SSR and hydration enabled: ```svelte <p> {#if true} {@user '<p>Hey!</p>'} {/if} </p> ``` It results in the following error when hydrating the server rendered page on the browser. `Unhandled Promise Rejection: TypeError: null is not an object (evaluating 'node.parentNode.removeChild')` The error is only displayed on the browser console, and only when it is rendered on the server. If navigating to the page from another page (no ssr involved) then it works just fine. ### Reproduction Reproduction is pretty easy,…

### CASE-7969 · Vite proxy urls not working in development with SSR=true
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍5 💬5 · closed · labels: vite/p2-nice-to-have
- **Excerpt**: - I have a django server running on port 8000 which is providing the api. - in my `svelte.config.js` i have: ```js vite: { server: { host: "0.0.0.0", proxy: { "/api": "[link] ... ``` which works nicely as long as I have ``` <script lang="ts" context="module"> export const ssr = false; ``` in my Pages. However when I enable ssr, the ssr seems to ignore the proxy-logic and returns, for example: ``` 500 Could not load /api/v2/pages/find/?html_path=/ ``` I created a repo to illustrate the problem: [link] **Expected behavior** I would like svelte also in SSR mode to honor the vite-proxy logic…

### CASE-7973 · Bad error message when `load` returns falsy from layout
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: error handling
- **Excerpt**: **Describe the bug** When returning nothing in a load function (as perceived to be permitted [by the docs]([link]) ) an error is thrown that doesn't pin point the actual issue - which may not even need to be one - which is that I wrote `return;` at the end of the load function instead of `return {};` **Logs** Cannot read property 'error' of undefined TypeError: Cannot read property 'error' of undefined at normalize (node_modules/@[meta framework]/dist/ssr.js:517:13) at load_node (node_modules/@[meta framework]/dist/ssr.js:829:11) at async respond_with_error (node_modules/@[meta…

### CASE-7977 · Build output includes unused JS with static adapter
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: **Describe the bug** Using `adapter-static` and the config options: `hydrate: false` and `router: false`—and no JS within any components—`.js` files that aren't used are still output in `./build` when running `npm run build`. E.g. with this `svelte.config.js`: ```js import adapter from '@user/adapter-static'; const config = { kit: { target: '#svelte', hydrate: false, router: false, adapter: adapter(), } }; ``` I get an output `index.html` that includes *no* `link` or `script` tags (as expected), but there are output `.js` files such as `./build/start-*.js` and…

### CASE-7986 · JS/CSS-only starter template dev mode errors on Windows
- **Principles**: P-F4 · **Env**: windows, vite, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** Internal errors when attempting to run dev mode. The page SSR succeeds, but is non-interactive. **Logs** Browser ``` start.js:1 GET [link] net::ERR_ABORTED 404 (Not Found) manifest.js:1 GET [link] net::ERR_ABORTED 404 (Not Found) ``` Console (with exact linebreaks) ``` 5:32:12 PM [vite] Internal server error: Failed to resolve import "C:UsersGrygrFlzrDocumentsprojectskit [email] untimeproxy-adapter-dom.js". Does the file exist? ``` It seems like we're passing in an unescaped Windows-slashed path to vite. **To Reproduce** ```bash npm init svelte@user # js and css only npm…

### CASE-7987 · static assets (_app/immutable/*) return 404 with adapter-netlify, despite preferStatic: true being correctly set
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug After a successful build and deploy, all static assets under _app/immutable/ return 404 (with content-type: text/plain) on Netlify, while SSR/page routes render correctly. This occurs on a brand-new Netlify site with zero deploy history, ruling out caching or per-file deduplication as the cause. Switching to @user/adapter-vercel with the identical codebase resolves the issue immediately. Environment @[meta framework]: 2.69.1 @user/adapter-netlify: 6.0.4 vite: 7.3.6 @user/vite-plugin-svelte: 6.x svelte: 5.56.1 ### Reproduction Steps to reproduce Standard SvelteKit project…

### CASE-7997 · Dev server hydration errors when using bun
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug When running the dev server with bun (`bun --bun vite dev`) hydration errors can occur. In practice these are intermittent but can be reproduced by anything that calls `sync.create()` (see reproduction steps below). As best as I understand it, `create_manifest_data` assigns numeric node indices based on the order `fs.readdirSync()` returns directory entries. This ordering is not guaranteed by POSIX and differs between runtimes: node returns entries alphabetically, while bun returns them in filesystem/creation order. This means the same project produces different…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7906 · feat: Guard function to protect routes (+guard.server.js)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍23 💬5 · closed
- **Excerpt**: ### Describe the problem Actually it's quite difficult and confusing to correctly protect routes on a Sveltekit application. Unlike many other concepts like page, layout, form or endpoint, Sveltekit does not really offer us a clear solution for that. Using a `+layout.server.js` seems the simplest solution, but wrong because of parallel loading which can leak data. Or you must have a `+page.server.js` on all pages with an `await parent()` at the beginning to ensure that the layout is executed. But it is repetitive and a source of error/omission... And this solution does not protect form's…

### CASE-7908 · Error: Request body must be a string or TypedArray when using fetch in page.server.js action
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug I have a situation where I am posting form data to an external API in a server side route. I may refactor this to not go to the server and use the client directly but I stumbled upon this issue. I passed in the fetch object to my action so I could forward along my auth headers, it results in this error being thrown. If I do not pass it it and use standard fetch things work fine (but I have to manually set the auth header). After looking at the code it seems like there is a todo related to this. My usecase isn't super traditional (posting form data to serverside action,…

### CASE-7912 · Unexpected end of JSON input
- **Principles**: P-G4, P-E3 · **Env**: linux, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When switching to one specific route (/profile) I get the following error even if the +page.svelte is completely empty: ``` SyntaxError: Unexpected end of JSON input at load_data (client.js?t=1670859539762&v=f1f07156:1712:25) at async load_route (client.js?t=1670859539762&v=f1f07156:791:19) at async update (client.js?t=1670859539762&v=f1f07156:263:38) at async navigate (client.js?t=1670859539762&v=f1f07156:1134:3) ``` ### Reproduction [Linux] [Node 16.x] 1. clone repository `git clone [link] 2. navigate into cloned repository `cd ThesisPortal` 3. switch branch to…

### CASE-7918 · The demo app does not work on Stackblitz
- **Principles**: P-G4, P-E3 · **Env**: linux, svelte
- **Signals**: 👍0 💬5 · closed · labels: pkg:create-svelte
- **Excerpt**: ### Describe the bug The Sverdle demo app does not fully function on Stackblitz. Entering a guess and hitting Enter produces the following error: ``` Unexpected token 'C', "Cross-site"... is not valid JSON ``` This is because `sverdle?/enter` returns "Cross-site POST form submissions are forbidden" ### Reproduction Go to sveltekit.new, go to Sverdle, enter a guess, and hit enter. The error will be displayed. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh…

### CASE-7921 · Form `enhance` does not work when `action` points to a different route
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍1 💬5 · closed · labels: documentation
- **Excerpt**: ### Describe the bug `enhance` without a callback will not apply its action if the form action references a different route. However, it works when manually calling `applyAction(result)` in the callback. For example: ```html // routes/+page.svelte <form use:enhance method="POST" action="/login"> // this doesn't work <form use:enhance method="POST"> // this works ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.0 CPU: (8) arm64 Apple M1 Pro Memory: 8.07 GB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.17.0 -…

### CASE-7922 · `use:enhance` does not properly handle `<button formaction="...">`
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: breaking change
- **Excerpt**: ### Describe the bug Adding `use:enhance` to a form like: ```html <script lang="ts"> import { enhance } from '$app/forms'; </script> <form method="POST" action="?/a" use:enhance> <button>Submit A</button> <button formaction="?/b">Submit B</button> </form> ``` Always calls `?/a` action. Removing it calls `?/b` when clicking "Submit B". ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.5.1 CPU: (8) x64 Apple M2 Memory: 23.95 MB / 24.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.4.0 - ~/.asdf/installs/nodejs/18.4.0/bin/node npm: 8.12.1 -…

### CASE-7947 · Svelte/TailwindCSS/Rollup template dependencies broken
- **Principles**: P-G4, P-E3 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug After a fresh installation following the docs, using the following settings: `application type: Svelte` `template: TailwindCSS` `bundler: Rollup` and upon running `npm run dev`, the server crashes throwing an error. This is because the dependencies listed in the template pulled by the installer (`Axelen123/svelte-tailwind-template#rollup`) lists incompatible dependencies. To newer users wishing to use the template, this issue prevents all usage of SvelteKit. ### Reproduction `npm init svelte@user app` `Select application type: Svelte` `Select template: TailwindCSS`…

### CASE-7957 · Endpoint throws 500 error on empty body
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug when `'Content-Type': 'application/json'` and body is empty. Application throws: ``` Exception has occurred: SyntaxError: Unexpected end of JSON input at JSON.parse (<anonymous>) ... ``` ### Reproduction ``` fetch("<url>/<endpoint>.json", { "headers": { "content-type": "application/json", }, "referrerPolicy": "strict-origin-when-cross-origin", "body": null, "method": "DELETE", "mode": "cors", "credentials": "omit" }); ``` should do the trick ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.6 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz…

### CASE-7963 · Using vite-plugin-iso-import after updating to latest version of SvelteKit results in an error
- **Principles**: P-G4, P-E3 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I was using [vite-plugin-iso-import]([link]) successfully just fine for a few weeks. Today I updated SvelteKit from .144 to .162 and now I am getting this error when trying to start the server: ``` > The following dependencies are imported but could not be resolved: text-field-edit?client (imported by /Users/kevin/Workspace/cn-sveltekit/src/lib/components/Textarea.svelte) fit-textarea?client (imported by /Users/kevin/Workspace/cn-sveltekit/src/lib/components/Textarea.svelte) Are they installed? ``` Why is this no longer working after the SvelteKit update, and how do I fix…

### CASE-7966 · Dev server don't autodiscover new routes
- **Principles**: P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍12 💬5 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug If the dev server is running, SvelteKit don't see newly added routes, and result in 404 when navigating to them. ### Reproduction - Create a new project (`npm init svelte@user my-app` + select the `Skeleton project`, should also be true for demo app) - Install the project (`npm install`) - Start the dev server (`npm run dev`) - Add a new page in `src/routes` (ex: `src/routes/test.svelte`) - Try to navigate to the route (with the previous example: `[link]) ### Logs ```shell // Server console side 09:50:09 [vite] page reload .svelte-kit/dev/generated/manifest.js // Browser…

### CASE-7970 · Official way to pass state from endpoint to fallthrough page routes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍11 💬5 · closed · labels: documentation/router/p2-nice-to-have
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I'm implementing a login flow that for technical reasons needs to be an old-fashioned form submit. If the username and password that are entered fail to authenticate, I'd like the response to the POST to be the same login page, but with the username already pre-filled with what the user entered last time, and with a specific error message about what happened. **Describe the solution you'd like** I'd like the handler for a POST endpoint to be able to fall through to a page (which it already can), and for it to be able to pass…

### CASE-7983 · HTML FormData docs
- **Principles**: P-G4, P-E3 · **Env**: typescript, svelte
- **Signals**: 👍1 💬5 · closed · labels: documentation
- **Excerpt**: **Describe the bug** When submitting a form using the POST method, no data is picked up by the request body in the endpoint. When sending the same data using something like Curl, Postman, Insomnia or any other HTTP tool, the JSON body is parsed correctly. **Logs** None **To Reproduce** I've created a repo: [link] Init options were no typescript, css for styling and no linting/formatting. **Expected behavior** I would expect an endpoint receiving a POST request from a form to handle the form data in the body object correctly, as per [the docs]([link]). **Information about your SvelteKit…

### CASE-7993 · Mysterious remote functions error
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi there. I've been getting an issue reported by users that they sometimes get a 500 error when trying to upload audio files with a form that uses remote functions. They're met with: `Failed to execute remote function` I've been unable the replicate the problem myself and given this [seems to be a rare state to reach]([link]) I thought I'd bring the issue here. ### Reproduction Here is the project that's having the issue, specifically the form and remote function that handles the upload: - [Form]([link]) - [Remote function]([link]) - Plus [the API endpoint]([link]),…

### CASE-7999 · Form Submit with fields.set only runs if hidden fields are added.
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍4 💬4 · open · labels: forms
- **Excerpt**: ### Describe the bug When setting fields according to data (i.e. for an edit form), the form will not submit without hidden fields. Not sure if this is intentional. But I imagine it would be nice, to set fields including hidden files via fields.set as to not need to add hidden fields anymore. The form does not submit without all fields as inputs though. ```svelte <script lang="ts"> import { updatePage, getPages } from '$lib/db/remotes/page.remote'; const pages = $derived(await getPages()); updatePage.fields.set({ pageId: '6964aeb9dbcf6670463f4e4d', title: 'test', slug: 'slugtest', parentId:…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7913 · Too many env vars leads to `vite build` failing with ENAMETOOLONG
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed · labels: p3-edge-case/$app/env
- **Excerpt**: ### Describe the bug Build `vite build` of demo app (`npm create svelte@user`) fails with `ENAMETOOLONG` in `src/exports/vite/index.js` L460 in 'Prerendering' phase when it tries to fork(). [link] framework]/blob/96751b0636f1cd511498de1de4d70990079348ea/packages/kit/src/exports/vite/index.js#L460 Root cause is L467 packing env.private and env.public and overflowing 32kB. [link] framework]/blob/96751b0636f1cd511498de1de4d70990079348ea/packages/kit/src/exports/vite/index.js#L467 If env.private is large (e.g. due to a bunch of "npm\_\*" variables added by pnpm (or is it vite that adds all of…

### CASE-7915 · Renaming +page.js to +page.ts doesn't fix typescript issues (Module '"./$types"' has no exported member 'PageLoad'.ts(2305))
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, svelte
- **Signals**: 👍1 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When creating a +page.ts file, if one initially sets it to .js, you can't just rename the file to .ts to get it to start working. I looked high and low to fix the issue, and posted on Stack Overflow, but only removing the file and recreating it with .ts initially fixes it. Somebody commented and said I should flag this bug, so here I am. ### Reproduction Is there a ts project I can fork? I can't seem to find it. Create a +page.svelte in `routes` (under any folder or root level) and create a +page.js file. Then, rename it to .ts and you'll see the error. Removing the file…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7914 · $page.url is undefined
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the bug When building production with cloudflare adapter there seems to be an issue with `$page.url` being undefined during SSR. This happened after deploying to cloudflare, dev environment was fine. My component structure: ``` +layout.svelte Nav.svelte ``` The code that throws the error ``` <!-- Will give error; TypeError: Cannot read properties of undefined (reading 'pathname')--> <a rel="prefetch" aria-current={'/music' === $page.url.pathname ? 'page' : undefined} href="/music" > music </a> ``` ### Reproduction [link] (repo before commit…

### CASE-7946 · SvelteKit should not set tabIndex=-1
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug SvelteKit adds tabIndex=-1 to the document body in order to be able to manage focus upon navigation: [link] framework][ref] This is not a "safe" change, in that it may impact the behavior of components on the page. In particular, this change means that some actions that would normally not trigger a `focus` event (like mousedown on some text) will now fire a `focus` event on the document body. These extra `focus` events may confuse code that does its own focus management (for example, a focus trap). They were the source of two different user-reported bugs in my component…

### CASE-7949 · Errors in the first two lines of server-side endpoints are not reported
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: vite
- **Excerpt**: ### Describe the bug When the first line of a server-side endpoint contains an error, the dev server displays `TypeError: Line must be greater than or equal to 1, got -1` instead of showing the actual error. ### Reproduction Create a svelte-kit project and paste this in src/routes/server-side.js ```js /** @user {import('@[meta framework]').RequestHandler} */ export async function get({ params }) { return { body: "Hello world" }; } ``` then start the dev server, load `[link] in your browser Then add a line at the top of the file, containing `thisvariableisnotdefined`, so as to get ```js…

### CASE-7950 · Focus broken when navigating with hash
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: router/p2-nice-to-have
- **Excerpt**: ### Describe the bug In an effort to make tab navigation better on my site, I was implementing a skip to content button which would skip the navbar and directly go to the content. I have implemented it as it is normally implemented but I am running into a small problem. Normally, focussing on the skip to content button and then pressing enter gets you to the content, and pressing the tab key after that makes you cycle through the content. In my implementation, I am brought to the skip to content button twice before I can cycle through the site's content. ### Reproduction Add a skip to content…

### CASE-7955 · Modifying src/routes/*.svelte at dev mode cause non reactive variables to change
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍2 💬5 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug Create following page in routes ```svelte <!-- src/routes/[slug].svelte --> <script> import { page } from '$app/stores'; let p_slug = $page.params.slug; </script> <h1>{p_slug}</h1> <a href={`${p_slug}_x`}>Click me - {p_slug}</a> ``` In production build or in dev build without code edits p_slug is constant since I visit any page like [link] Even if I click on link "Click me - test", p_slug will not change. This is good expected behaviour. ## Now the issue. In dev mode visit [link] then click on "Click me - test" link. _(url will be changed to /test_x)_ Edit…

### CASE-7965 · Files in static cannot be accessible in both local development server and production when paths.base and paths.assets are set
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: ### Describe the bug When running the local development server, it appears that files in `static` are served from the root of the server. When building a static site using the static adapter, files in `static` get copied to the build directory. These differing behaviors make it impossible to reference files in the `static` directory in HTML templates in such a way that they will be accessible in both the local development server and production. Consider this HTML inside `src/routes/index.svelte`: ``` <svelte:head> <style> /* Typography */ @user { font-family: 'roboto'; src:…

### CASE-7980 · Visible "Navigated to ..." in production builds
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍14 💬5 · closed
- **Excerpt**: **Describe the bug** There is a hidden element on the page with id `svelte-announcer` that is used for accessibility. When developing (running `svelte-kit dev`) the element is hidden. However, once you run `svelte-kit build && node build` the element becomes visible as soon as you make a client side navigation. **Logs** No browser or server errors occur **To Reproduce** 1. Check out this repo: [link] . It is just the default svelte kit template with a second route added for navigation. 2. `npm run dev` 3. Click the "Client side navigation" link, and notice there is no issue 4. `npm run build…

### CASE-7988 · Allow for multiple environment variable sources
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem Stems from the tail end of [ref]. Some environment values are not easily or ideally loaded from environment variables, or may desire different handling than the default explicit environment variable behavior but still otherwise act like an environment variable would. For example: - [Docker Secrets]([link]) are loaded as files in the `/run` directory that must be read at runtime. These, unlike environment variables, are not visible to `docker inspect`, and so are recommended for things that ought to be kept secret. - [Kubernetes secrets]([link]) work the same way. -…

### CASE-7989 · Add configurable sse keepalive for query.live
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem Unsure If i should have just replied in [ref], but it was closed, so I thought I'd just make a request here. > No configuration for now; if there's a realistic usecase for it we can add it later. A use case for me would be that I'm using sveltekit with bun, and bun [does not allow timeout]([link]) config via an environment variable, so I'm stuck either making the query live shorter than 10 seconds, not using bun, or using another 3rd party bun adapter. At my old company it would also be very useful because of the 1984-esque policies on the nginx-es managed by the it…

### CASE-7990 · Font preloading does not work
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ```css @user '@user/suit/fonts/variable/woff2/SUIT-Variable.css'; @user 'tailwindcss'; @user '@user/forms'; @user { --font-sans: 'SUIT Variable'; } ``` > determines what files should be added to the `<head>` tag to preload it - [source]([link]) ```ts export const handle = async ({ event, resolve }) => { return await resolve(event, { preload: ({ type }) => type === 'js' || type === 'css' || type === 'font' }); }; ``` Above configuration does not generate an HTML tag like this: ```html <link rel="preload" as="font" type="font/woff2" crossorigin="" href="" /> ``` Aren't…

### CASE-7992 · use:enhance does not update form.message when running into a CSRF error
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: forms
- **Excerpt**: ### Describe the bug Basically, when a form has `use:enhance`, it does not update `form.message` when running into a CSRF error when the ORIGIN variable is empty, during production build where ORIGIN is not specifically set. the fact that the ORIGIN variable is empty, is not the thing that I report here. It is the fact the `form.message` does not update, whilst the console's network tab DOES show in the response that there is a `message` key saying the CSRF error (see logs section). ### Reproduction To reproduce, you must start a new project using `npx sv create` with betterauth demo…

### CASE-7998 · Remote function query with await blocks page load in svelte:boundary when query is stored as local variable.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug when query is stored as a variaible in the script, the page load is blocked until the query completes. For example in the below sample I'd expect to see the loading on the client "immediately" and after 5 sec, the data should be displayed. Instead of this, the page is not served by the server for 5 seconds, than it gets data almost immediatelly. On the other hand using the 'queryData()' within the markup works as expected. ### Reproduction ``` <script lang="ts"> import {queryData} from "./data.remote" const data = queryData(); </script> <svelte:boundary> {#snippet…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7920 · Update sveltekit Request new event. hooks
- **Principles**: P-C1, P-C2, P-C3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug hello, since the new version of sveletekit I can no longer make the code work that I present to you the hook the application crashes with an error TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator)) Thank you for your help ### Reproduction [link] import cookie from 'cookie'; export const getSession = async (event) => { const cookies = cookie.parse(event.request.headers.get('cookie') || ''); const theme = cookies.theme || 'light'; return { theme }; }; export const handle = async ({ event, resolve }) => { const response = await…

### CASE-7925 · Stores get reset on page change/reloads starting on kit v.1.0.0-next.398
- **Principles**: P-C1, P-C2, P-C3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When building a sveltekit app using the static adapter plugin, Tauri, and sveltekit version next.398+, navigating between pages triggers a full page reload, resetting stores in the app, and rerendering the whole page. ### Reproduction Sorry for linking the whole project, but I have no idea where the point of failure is. 1. Clone or Fork - [link] 2. Have Rust, Node, and Yarn installed 3. Run `yarn build` to build the application 4. Open the app and go to the *settings* tab on the top right 5. Scroll down until the theme selection and choose `dark` or `light` (whichever one…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7923 · 1.0.0-next.455 causing broken Netlify response header behavior
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug With a simple upgrade to `@[meta framework]` from `1.0.0-next.454` to `1.0.0-next.455` with no code changes except the ones needed for the upgrade, the response headers of the pages as served from Netlify are different. I suspect that something changed with the build to where now the `netlify.toml` is not being read (even though it seems to be detected when looking at the Netlify build logs for the branch). The response headers (truncated) for an initial html page are changed as follows: ```diff - cache-control: public, max-age=0, must-revalidate - content-type:…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7927 · Failed to build pre-rendered app with ``adapter-static``.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I've upgraded to the latest version of the sveltekit in my app and resolved all of the migrations etc.., but now I cannot build (and pre-render) it with ``adapter-static``. I thought that was my fault somewhere, but as you see, I created a repo with the original sveltekit demo app, and something wrong there either. ### Reproduction [link] ### Logs ```shell > [email] build > vite build vite v3.0.9 building for production... ✓ 52 modules transformed. .svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg 1.85 KiB…

### CASE-7931 · request route with param and folder in static with same name returns error on dev mode
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: vite/blocked by upstream
- **Excerpt**: ### Describe the bug In the project, I have a route and a folder in static with the same name (images). Loading `images/someimage.jpg` working well, but accessing just `images?somepaream` produce an error. Failed to load url /images?load=%2Fimages%2Fteaser.jpg (resolved id: /images?load=%2Fimages%2Fteaser.jpg). This file is in /public and will be copied as-is during build without going through the plugin transforms, and therefore should not be imported from source code. It can only be referenced via HTML tags. Seems relating to [link] framework][ref] but in a more special way. After build…

### CASE-7934 · adaptor-static no longer generate endpoint like sitemap.xml.ts and robots.txt.ts as a static file
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug adaptor-static no longer generate endpoint like sitemap.xml.ts and robots.txt.ts as a static file, which it did previously(I don't have an exact version number for that unfortunately. I have seen that behavior roughly 6 months ago?) ### Reproduction [link] Based on the log below, seems like a SSR bundle is generated, even though `adaptor-static` is used. It is generating a SSR bundle. ### Logs ```shell vite v2.9.14 building for production... ✓ 13 modules transformed. .svelte-kit/output/client/_app/manifest.json 1.19 KiB…

### CASE-7935 · Conditional configuration in vite.config.js breaks prod build
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug If your `vite.config.js` uses conditional configuration, Svelte stops trying to compile components files to JS during SSR, and the resulting build fails because Rollup/Acorn is trying to parse Svelte files as JS. ### Reproduction [link] ### Logs ```shell ❯ npm run build $ vite build vite v2.9.13 building for production... ✓ 34 modules transformed. .svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg 1.85 KiB .svelte-kit/output/client/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2 15.40 KiB…

### CASE-7945 · SvelteKit not always triggering animations on scroll when using svelte-reveal package
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug Hi, I’m the maintainer of a small Svelte action called [svelte-reveal]([link]) that allows users to easily create and trigger animations on scroll. I’ve tested my package over and over with vanilla Svelte (you can also take a look at [this REPL]([link])) and it works fine. However, with SvelteKit for some reason it does not. By testing the action I created on SvelteKit, I've noticed that the animations do not get triggered at a hard page reload, but rather only when the project files are saved with new content. I assume this behavior might have something to do with the…

### CASE-7954 · Kit builds my project two times even if I disabled ssr
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍12 💬5 · closed
- **Excerpt**: ### Describe the bug I couldn't understand why Kit builds my project two times even if [I disabled `ssr` in svelte.config.cjs]([link]): ``` vite v2.6.14 building for production... ... vite v2.6.14 building SSR bundle for production... ``` ### Reproduction [link] ### Logs ```shell > [email] build > svelte-kit build vite v2.6.14 building for production... ✓ 28 modules transformed. .svelte-kit/output/client/_app/assets/svelte-logo-87df40b8.svg 1.85 KiB .svelte-kit/output/client/_app/manifest.json 1.82 KiB .svelte-kit/output/client/_app/pages/__layout.svelte-57ab7eca.js 4.04 KiB / gzip: 1.79 KiB…

### CASE-7959 · cannot specify build target
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug while running `svelte-kit build` i cannot set the build target, it says `"build_server: The value for kit.vite.build.target specified in svelte.config.js has been ignored. This option is controlled by SvelteKit."` and when i then try to build a project where i use BigInt it says `"> Transform failed with 1 error: app.js:2052:9: error: Big integer literals are not available in the configured target environment ("es2018")"` ### Reproduction 1. create an empty ("skeleton") sveltekit project (with the node-adapter) 2. create an `index.js` file in `src/routes` and fill it with…

### CASE-7967 · TypeError: store.subscribe is not a function: When config.js is run as an ESM module by using top-level await
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬5 · closed · labels: vite
- **Excerpt**: ### Describe the bug When `svelte.config.js` is forced to be an esm module by using a top-level `await` and within `src/hooks/index.ts`: `import svelte/store` loads the esm version of `svelte/store/index.mjs`. `ssrTransform` in vite overwrites the transpiled `writable` function to reference `subscribe` that is imported from `internal/index.mjs`. This causes the returned `Writable` store from `writable` to have the incorrect definition of `subscribe`. Due to `ssrTransform` [link] `writable` in `store/index.mjs` is transpiled to become: ```js function writable(value, start =…

### CASE-7974 · Env variables breaking build (even when comented)
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F4 · **Env**: vite, svelte, desktop
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** `build` command breaking when adding `import.meta.env.VITE_MESSAGE` in the code, and still breaks even if the code is comented, I have to fully remove it for it to build. The `dev` command works fine. Tried without adapter and with`adapter-vercel`, but the problem percists. **Logs** ``` vite v2.3.2 building SSR bundle for production... ✓ 7 modules transformed. [rollup-plugin-dynamic-import-variables] Unexpected token (8:348) file: /Users/me/Desktop/issue/src/routes/index.svelte:8:348 > Unexpected token (8:348) SyntaxError: Unexpected token (8:348) at Object.pp$4.raise…

### CASE-7978 · superfluous build warning with transitions and easing
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: **Describe the bug** I have several components with code like: ``` <script> import { fly } from 'svelte/transition'; import { sineIn, sineOut } from 'svelte/easing'; </script> <tr in:fly|local={{ easing: sineIn }} out:fly|local={{ easing: sineOut }}> ... </tr> ``` When I do `npm run build`, I get the following superfluous warning: ``` transforming... ✓ 126 modules transformed. 'fade', 'fly' and 'slide' are imported from external module 'svelte/transition' but never used 'sineIn' and 'sineOut' are imported from external module 'svelte/easing' but never used ``` I don't know if this is an issue…

### CASE-7982 · [pnpm 6] `pnpm build`: failed to resolve import `@[meta framework]/ssr`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: **Describe the bug** When using `pnpm build` on pnpm 6.0.0 on a new kit project, it fails because `@[meta framework]/ssr` is not properly found during the build step bundling. This issue does not occur on `npm` or `yarn`. Dev mode works. **To Reproduce** ```bash npm init svelte@user pnpm i pnpm build ``` **Expected behavior** Build successful. **Stacktraces** <details><summary>Stack trace</summary> ``` $ pnpm build > [email] build C:\Users\GrygrFlzr\Documents\projects\kit-71c > svelte-kit build vite v2.1.5 building for production... ✓ 18 modules transformed.…

### CASE-7991 · Service worker build ignores vite build.target and esbuild options
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug `build_service_worker()` runs a separate `vite.build()` with `configFile: false`. It forwards `define` and `build.minify` from the main Vite config, but not `build.target` or `esbuild`. As a result, user overrides in `vite.config.js` (e.g. `build.target: "es2022"`, `esbuild.supported.destructuring`) apply to the main client build but not to the service worker build. With `[email]` this causes the service worker build to fail ([link]): ``` [vite:esbuild-transpile] Transform failed with N errors: service-worker.mjs:158:10: ERROR: Transforming destructuring to the configured…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7944 · Proactively handle version updates
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: p2-nice-to-have/breaking change
- **Excerpt**: ### Describe the problem As of [ref], SvelteKit is able to recover from navigations that are broken as a result of an updated version, which is important piece of [ref]. It's not perfect though — navigations will 'succeed' if the module for the new page is already cached (either in the module cache already, or cached by a service worker) and any relevant endpoints haven't changed in an incompatible way, but the content could well be stale. ### Describe the proposed solution It would arguably be better if we could do one of two things: 1. Disable the client-side router as soon as a new version…

### CASE-7995 · Client navigation leaves stale +error.svelte mounted after remote query render error with experimental handleRenderingErrors
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug I’m using SvelteKit with both `kit.experimental.remoteFunctions` and `kit.experimental.handleRenderingErrors` enabled. When a remote query throws an `error(404, ...)` during component render on a client-rendered page, the nearest `+error.svelte` renders as expected for that route. However, after navigating client-side to another route, the failed error UI is not torn down correctly and remains mounted above the next page’s content. This minimal repro has two routes: - `/` renders a normal home page with a link to `/data` - `/data` awaits a remote query at the top level of…

