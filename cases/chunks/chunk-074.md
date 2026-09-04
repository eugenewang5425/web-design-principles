# Case Chunk 074 — Round 74

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8301 · Cannot GET
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍0 💬12 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug After I install the andt, less and router plug-ins and start the project, I open the "cannot get" in the browser ### Reproduction [link] ### System Info ```shell Windows 10 Google Chrome：89.0.4389.90 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [ ] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [ ] Read the [Contributing Guidelines]([link] tool]/blob/main/.github/contributing.md). - [ ] Read the [docs]([link]). - [ ] Check that there isn't already an issue that reports the same bug to avoid creating a duplicate. - […

### CASE-8302 · vite 2.4.0: `importMeta.d.ts` types not exporting `ImportMeta` and `ImportMetaEnv`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, chromium, windows, vite, typescript, vue
- **Signals**: 👍0 💬12 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Typescript cannot resolve `import.meta.globEager`: ![imagen]([link]) ### Reproduction not required, just see `importMeta.d.ts` file ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (16) x64 Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz Memory: 46.12 GB / 63.95 GB Binaries: Node: 15.11.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - C:\Program Files\nodejs\yarn.CMD npm: 7.6.0 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome: 91.0.4472.124 Edge: Spartan (44.19041.1023.0), Chromium (91.0.864.64) Internet Explorer: 11.0.19041.1 npmPackages: @user/plugin-vue:…

### CASE-8304 · Struggling to polyfill dynamic import manually after upgrading to v2.3.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 18, webview
- **Signals**: 👍1 💬12 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug The latest minor release 2.3.0 dropped the built-in support for dynamic import polyfill. That's a shame for us bc we're developing an app with MSFT WebView 1 which uses Edge 18 under the hood. This browser falls in the category of support ESM but not dynamic import, so using the legacy plugin won't work. We have to polyfill it ourselves now **which is totally fine** (we did that previously when using [email])…

### CASE-8307 · Https dev server locks mobile Safari in infinite redirect loop
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, ios, macos, ios 14, vite, mobile
- **Signals**: 👍11 💬12 · closed · labels: p2-edge-case
- **Excerpt**: ## Describe the bug Using https causes infinite redirecting behaviour in iOS Safari ## Reproduction 1. Set the server to use https 2. Visit the dev site using iOS Safari and one of the network IPs 3. Confirm the "Visit unsecure web site" 4. Site keeps re-loading rapidly, switching between site URL and certificate warning URL ## System Info - `vite` version: 2.0.4 - Operating System: MacOS 11.2.1, iOS 14.4 - Node version: 14.0.0 - Package manager (npm/yarn/pnpm) and version: Yarn 1.22.5 ## Logs (Optional if provided reproduction) 1. Run `yarn dev` using https

### CASE-8312 · Page reloading very slow in Firefox on localhost
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, windows, typescript, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I set up a basic Vanilla-Typescript Vite project. Then I start the development server. Then I open the site in a freshly installed Firefox on Windows 11. Finally, I open `main.ts` and add a dummy statement like `console.log(20);` to it. **Expected** Reloading should be instant. **Actual** Reloading is very slow. **Related** [link] [link] tool][ref] [link] tool]/discussions/15622 Judging from all that, the bug seems to be caused by some interaction between Firefox and Vite. Also, it seems to both happen with HMR (tested in another project) and with plain old page reloads.…

### CASE-8313 · Vite with Tanstack Add-ons fails (Windows + Mac + Linux)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, linux, vite
- **Signals**: 👍1 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Attaching complete console output for your reference. ![Image]([link]) ### Reproduction Not Required, A simple command as show in the screenshot is enough ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 19.92 GB / 31.91 GB Binaries: Node: 22.14.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.22 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 10.9.2 - C:\Program Files\nodejs\npm.CMD pnpm: 9.5.0 - ~\AppData\Local\pnpm\pnpm.EXE Browsers: Edge: Chromium…

### CASE-8314 · Content length mismatch for modules when accessing dev server through android emulator
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, android, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug As part of upgrading one of our sites to use Vite, we have ran into an issue when accessing the dev server on various android emulators. The issue seems to maybe stem from the web sockets / hot module reload, but unsure as each "fix" we have attempted hasn't proven fruitful and the access via the emulator remains flaky. When it fails the tab remains a white screen. Below is the screenshot of the exact error when accessing the chrome inspector for emulators via `chrome://inspect/#devices` (to see the network tab) ![Image]([link]) The content that is required to be…

### CASE-8316 · bug: vite binary crashes during hosting a static build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ## Static Build: [build.zip]([link]) ## Reproduction [minimal] `docker run -p 8080:8080 ghcr.io/z-auth/zauth:feat-transactions` ## On Other file hosting binaries... 1. Python3 `python3 -m http.server -d build/ 8080` > It works absolutely fine. 2. Chrome extensions 1. Turn on developer mode in extensions 2. Load unpacked : and add the extracted build folder. ### Reproduction [link] ### Steps to reproduce Reproduction: 1. unpack build 2. `bun install [email]` #Reproducing in `npm, yarn ` as well 3. `bunx vite build/ --port 8080` 4. Go to `localhost:8080` in ur browser:…

### CASE-8321 · 在使用antdesign-vue1.7.8的date-picker组件,通过moment库设置日期组件的default-value，使用webpack编译运行没有问题,改为vite编译运行后会报错
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, vue, webpack, vite
- **Signals**: 👍0 💬11 · closed · labels: feat: deps optimizer
- **Excerpt**: ### Describe the bug 我的环境是：[email][email][email] 在模板中使用antdesign-vue的date-picker组件,通过moment库设置日期组件的default-value，在webpack编译运行是不会报错的，我想体验下vite，就换成了vite，发现就会报错，具体报错来源是moment库报的。 ### Reproduction [link] ### Steps to reproduce npm i npm run dev ### System Info ```shell windows10 64位 chrome ``` ### Used Package Manager npm ### Logs ``` Uncaught TypeError: (void 0) is not a function at validator6 (ant-design-vue.js?v=df2ac479:31461:89) at assertProp (chunk-DDJN2YAM.js?v=d4570444:3118:10) at validateProp (chunk-DDJN2YAM.js?v=d4570444:3071:5) at _loop_1 (chunk-DDJN2YAM.js?v=d4570444:3241:17) at…

### CASE-8322 · 设置环境变量后，这个环境变量并没有出现在import.meta.env列表中
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 自定义环境变量以 VITE_ 开头的import.meta.env无法取到 <img width="690" alt="image" src="[link]> 在vite.config.ts中通过loadEnv可以拿到自定义的环境变量 服务我是有重跑的，依旧取不到 ### Reproduction 1 ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M1 Pro Memory: 91.69 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.12.1 - ~/.nvm/versions/node/v18.12.1/bin/node Yarn: 1.22.19 - ~/.yarn/bin/yarn npm: 8.19.2 - ~/.nvm/versions/node/v18.12.1/bin/npm Browsers: Chrome: 110.0.5481.100 Safari: 16.2 ``` ### Used Package Manager pnpm ### Logs _No response_ ###…

### CASE-8327 · The typescripe project compiled by vite cannot run normally on safari, but it can run normally on chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chrome, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug [link] <img width="549" alt="image" src="[link]> Then I start the project through the command about `npm run tauri dev`, but it gives an error when rendering。 <img width="800" alt="image" src="[link]> Below is info of `npm run tauri info`: <img width="380" alt="image" src="[link]> <img width="247" alt="image" src="[link]> Below is struct of the project: <img width="307" alt="image" src="[link]> <img width="800" alt="image" src="[link]> ### Reproduction npm create vite@user ### System Info ```shell Below is info of `npm run tauri info`: <img width="380" alt="image"…

### CASE-8332 · Vite CSS 插入顺序问题
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vite, tailwind, vue
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 当我同时使用 TailWind CSS 与 Naive UI 的时候，Naive UI 的 按钮样式会错误，原因是 vite 会把CSS插入到 <head></head>标签的最后，覆盖了 Naive UI 的样式。我想问的是我想控制 CSS的插入位置或者时机，我该怎么做？ ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (8) arm64 Apple M1 Memory: 178.88 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.3.0 - /opt/homebrew/bin/node Yarn: 3.1.1 - /opt/homebrew/bin/yarn npm: 8.3.0 - /opt/homebrew/bin/npm Watchman: 2021.12.27.00 - /opt/homebrew/bin/watchman Browsers: Chrome: 96.0.4664.110 Firefox: 94.0.1 Safari: 15.2 npmPackages: @user/plugin-vue: ^2.0.0 => 2.0.1 vite: ^2.7.2…

### CASE-8338 · Lot of warning in Firefox about : "resource at *** preloaded with link preload was not used within a few seconds"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, vue, vite
- **Signals**: 👍0 💬11 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Hello, we are building a single page application in vue.js with vite. According to the doc : `Vite automatically generates <link rel="modulepreload"> directives for entry chunks and their direct imports in the built HTML.` However Firefox is not supporting modulepreload so it's look like vite is generating automatically the following on Firefox : `<link rel="preload" as="script" crossorigin="" href="/assets/Component.469e8f3b.js">` which create the following warning : `The resource at “***/assets/Component.469e8f3b.js” preloaded with link preload was not used within a few…

### CASE-8339 · react-pdf is not compatible without shims
- **Principles**: P-G1, P-G2, P-G3 · **Env**: react, vite, webkit
- **Signals**: 👍0 💬11 · closed · labels: has workaround
- **Excerpt**: ### Describe the bug When trying to use React PDF in a Vite React project, we get: ``` Uncaught ReferenceError: global is not defined at node_modules/blob/index.js (index.js:5) at __require (chunk-KVFJW2XH.js?v=ce5c473e:12) at node_modules/blob-stream/index.js (index.js:3) at __require (chunk-KVFJW2XH.js?v=ce5c473e:12) at asyncToGenerator.js:32 ``` It's from the `blob` NPM library, but what's really strange is the code in `.vite/@user.js` on line 554 is: ```javascript var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder; ``` But the…

### CASE-8347 · Top level await for import() function stopped working in Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, vite
- **Signals**: 👍13 💬10 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug For some reason when building for production and using top level await for an import() function that imports a module which imports another module the import() never completes with await. This started happening recently on Chrome (on Safari and Firefox it works fine) and this does not happen when running in dev mode. Not really sure if the issue is Chrome related or with vite bundle when running for production. Here is a quick summary of the reproduce link: We have a `main.ts` file with a top level await import for `module1.ts` ``` import './style.css'; const div =…

### CASE-8354 · Legacy plugin modern polyfills don't respect targets
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome
- **Signals**: 👍0 💬10 · closed · labels: enhancement/plugin: legacy
- **Excerpt**: ### Describe the bug It seems that with `modernPolyfills: true`, neither the `targets` nor the browserlist config is used at all. Along with polyfilling more than necessary for a given target, I am unable to get it to change the polyfill *at all* regardless of any targets, however new or old. The docs say, "Note it is not recommended to use the true value (which uses auto-detection) because core-js@user is very aggressive in polyfill inclusions due to all the bleeding edge features it supports." I understand that core-js may be aggressive, but I find it hard to believe that it thinks Chrome…

### CASE-8357 · It will fail if the root directory is inside node_modules
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬10 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug I set the root directory to 'node_modules/.mpa', then i run vite, it supposed to see the HTML under node_modules/.mpa, but it failed. ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. yarn 2. yarn dev ### System Info ```shell System: OS: macOS 13.3 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 1.98 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 14.21.3 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 6.14.18 - /usr/local/bin/npm Browsers: Chrome: 111.0.5563.146 Safari: 16.4 ``` ### Used Package Manager yarn ### Logs _No…

### CASE-8362 · cannot support @user/plugin-babel
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, safari, macos
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug babel tranform es6 is bad, look this: <img width="1077" alt="image" src="[link]> that is right in rollup: <img width="1156" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5 CPU: (8) x64 Apple M1 Pro Memory: 66.13 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 14.19.1 - /usr/local/bin/node Yarn: 1.22.18 - /usr/local/bin/yarn npm: 8.13.2 - /opt/homebrew/bin/npm Browsers: Firefox: 103.0.2 Safari: 15.6 ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8363 · [SSR] The route is lazy loaded, and the reference path reports an error after packaging
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, macos
- **Signals**: 👍0 💬10 · closed · labels: invalid
- **Excerpt**: ### Describe the bug The route is requested to be loaded by the network, and then the route list is dynamically updated, but an error is reported after packaging. 1. yarn 2. yarn build 3. node server.prod.cjs ![截屏2022-07-29 12 10 18]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5 CPU: (6) x64 Intel(R) Core(TM) i5-8500B CPU @ 3.00GHz Memory: 644.54 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 14.19.0 - ~/.nvm/versions/node/v14.19.0/bin/node Yarn: 1.22.18 - /usr/local/bin/yarn npm: 6.14.16 - ~/.nvm/versions/node/v14.19.0/bin/npm Browsers: Chrome:…

### CASE-8372 · Environment variable breaking build
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍2 💬10 · closed · labels: p4-important
- **Excerpt**: ### Describe the bug I have an environment variable that is a license key for a product in my project, it has some characters in there that seem to be breaking the build. Can be reproduced in a vite.new. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 152.78 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.0 - ~/.nvm/versions/node/v14.17.0/bin/node npm: 6.14.13 - ~/.nvm/versions/node/v14.17.0/bin/npm Browsers: Brave Browser: 92.1.28.106 Chrome: 98.0.4758.80 Firefox: 91.0.1 Safari: 15.2 npmPackages:…

### CASE-8378 · Npm module mqtt doesn't work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I can't use the npm module mqtt. I don't know if it's because it's a node module. ### Reproduction ```bash npm i mqtt ``` ```js // main.js import { connect } from 'mqtt' console.log(connect); ``` ![image]([link]) ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (16) x64 AMD Ryzen 7 4800U with Radeon Graphics Memory: 7.16 GB / 15.36 GB Binaries: Node: 14.17.5 - C:\Program Files\nodejs\node.EXE npm: 6.14.14 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1023.0), Chromium (92.0.902.84) Internet Explorer: 11.0.19041.906 npmPackages:…

### CASE-8398 · enable minify for lib mode es output + `build.minify: 'terser'`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬9 · closed · labels: enhancement/feat: library mode
- **Excerpt**: ### Describe the bug drop_console: true, // 移除 console drop_debugger: true, // 移除 debugger 参数不起作用 ### Reproduction [link] ### Steps to reproduce ![image]([link]) ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (16) x64 Intel(R) Core(TM) i9-10980HK CPU @ 2.40GHz Memory: 23.62 GB / 63.84 GB Binaries: Node: 20.15.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD npm: 10.7.0 - C:\Program Files\nodejs\npm.CMD pnpm: 9.6.0 - C:\Program Files\nodejs\pnpm.CMD bun: 1.1.40 - C:\Program Files\nodejs\bun.CMD Browsers: Edge: Chromium (128.0.2739.79)…

### CASE-8400 · Issue setting strict CSP in production
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, vite
- **Signals**: 👍2 💬9 · open · labels: enhancement/has workaround
- **Excerpt**: ### Describe the bug I am having the same issue as [here]([link] tool][ref]), but the [solution ]([link] tool][ref]) isn't working for me. I'm using Electron + Vite and am trying to set a strict CSP (one with no `unsafe-inline`). Since I am using Electron and am not fetching my resources from a server, the nonce specified for `cspNonce` is generated right above the config. I then just use a plugin to inject the nonce into the index.html. This works fine in dev when the entire process is ran every time I run the app, but in production the process is only ran when packaging the app and never…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8303 · Vite doesn't support ESM packages with "exports" field in SSR
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍8 💬12 · closed · labels: feat: ssr/p2-edge-case
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> Because of this [link] issue, Vite won't parse package.json "exports" field and will throw this error for packages that doesn't use "main" field: ```node 3:03:07 AM [vite] Error when evaluating SSR module /src/components/context.ts: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module:…

### CASE-8315 · Dependencies optimization in ssr Environments during dev request handling can cause inconsistent states
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬11 · open · labels: pending triage/feat: ssr/feat: deps optimizer
- **Excerpt**: ### Describe the bug The problem consists in the fact that during local development dependency optimization (`optimizeDeps`) can happen, in an ssr environment, while a request is being processed. This can be problematic as this allows modules to be reloaded while code is still being evaluated/run, meaning that the two can get out of sync. Consider this very simplified example of such a scenario: - the vite dev server receives a request and it starts processing the request in an ssr environment - a dependency `A` is encountered and optimized - some global state gets saved based on the…

### CASE-8318 · ssrLoadModule fails to respect preact/compat aliases, while the SSR bundle does respect preact/compat aliases
- **Principles**: P-F4 · **Env**: react, webpack, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm migrating an existing repo from Webpack to Vite. We use preact, and rely on aliasing `react` and `react-dom` to `preact/compat` in the SSR bundle. Vite handles the aliases as expected when it bundles the SSR code for production. But when loading SSR for development using `vite.ssrLoadModule`, Vite fails to respect the `react->preact/compat` alias, even though it respects other aliases in `vite.config.js`. I have provided a minimalist reproduction of the issue below. If this is not a bug and is in fact the expected functionality, the discrepancy between prod and dev is…

### CASE-8337 · Vite + Tailwind JIT -> broken HMR
- **Principles**: P-F4 · **Env**: vite, tailwind, vue
- **Signals**: 👍1 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I add Tailwind (JIT mode) to my PostCSS config, HMR doesn't kick-in for Vue templates anymore. ### Reproduction Without `tailwindcss` in my `.postcssrc.json`: ![kCHu4zilUb]([link]) Notice the hmr update `home.vue` appearing in terminal (and it works in browser). Now let's add Tailwind to `.postcssrc.json`: ```json { "plugins": { "tailwindcss": {} } } ``` Note that I'm using JIT mode, in `tailwind.config.js`: ```js module.exports = { mode: "jit", purge: ["./{Components,Modules}/**/*.vue", "./app.vue"], } ``` Restart, it works. Let's try hmr again:…

### CASE-8345 · Environment API: `noExternal` configuration inconsistency between top-level and environment-level settings
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬10 · open · labels: documentation
- **Excerpt**: ### Documentation is - [ ] Missing - [ ] Outdated - [ ] Confusing - [x] Not sure? ### Explain in Detail When using Vite 6's experimental Environment API with SSR builds, there's an undocumented requirement that `ssr.noExternal` must be configured at the **top level** of the configuration rather than at the environment level to actually bundle dependencies. ## Current Behavior ### ❌ This doesn't work (dependencies are externalized): ```js { environments: { ssr: { build: { noExternal: true, // ← This has no effect rollupOptions: { input: 'virtual:my-ssr-entry' } } } } } ``` ### ✅ This works…

### CASE-8358 · Vite eats proper error messages and replaces them with just `[vite] Error when evaluating SSR module`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to build a website with vite-plugin-ssr. It's very hard to work because I don't actually get proper error messages in my console. Here is the discussion that initiated this bug report: [link] CC @user ### Reproduction [link] ### Steps to reproduce This is just a new project created via `pnpm create vite-plugin-ssr@user`, then enabling SSR in vite config. I have another commit to introduce a bug in the code: [link] If you run the project via `pnpm run dev` and visit [link] You will see something like the error message here: [link] It doesn't actually contain…

### CASE-8359 · Curious behaviour when loading CJS/ESM with `vite.ssrLoadModule`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: p4-important/feat: ssr
- **Excerpt**: ### Describe the bug After upgrading to Vite 4 I am no longer able to consume certain packages, but the same packages worked in Vite 3: - [`uuid`]([link]) (same issue reported in [ref]) - [`@user/css/adapter`]([link]) (uses [Preconstruct]([link]) to generate the `package.json`) See linked repo for instructions and reproduction. --- But investigating a bit further why it fails with `@user/css/adapter` I've identified a curious behaviour. I've recorded a [CodeTour]([link]) in the linked repo which explains the behaviour (requires VS Code). TL;DR: - Vite 4 resolves `@user/css/adapter` main entry…

### CASE-8374 · react-markdown doesn't work in SSR dev
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: p4-important/feat: ssr
- **Excerpt**: ### Describe the bug `react-markdown` fails with `ReferenceError: module is not defined` when I try to import it from a module loaded with `ssrLoadModule`. It seems to be caused by mixing ES modules and CJS modules in the transitive dependencies. Everything works as expected when I add `"type": "module"` to `package.json`. ### Reproduction - Clone this repo and install dependencies: [link] - Run `node ssr-module.mjs` and observe that `react-markdown` works correctly when run directly. - Run `node index.cjs` and observe loading with SSR fails. - Add `"type": "module"` to `package.json` to fix…

### CASE-8380 · Vite doesn't transpile plugins listed in devDependencies
- **Principles**: P-F4 · **Env**: linux, ubuntu, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm using [link] with vue 3, and the ssr build will not work unless `vite-ssr` is in the project's `dependencies`. This is not suitable for my project because it is a library and we don't want to make our users install dependencies that we only use for development. ### Reproduction [link] Move `vite-ssr` from `devDependencies` to `dependencies` and it'll work. ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue --binaries --browsers`: ```node System: OS: Linux 4.15 Ubuntu 18.04.5 LTS (Bionic Beaver) CPU: (12) x64 AMD Ryzen 5 3600 6-Core…

### CASE-8393 · Rolldown server build stalls / never completes with high volume of SFC <style> blocks
- **Principles**: P-F4 · **Env**: nuxt, vite, vue
- **Signals**: 👍0 💬9 · closed · labels: bug: upstream/p4-important
- **Excerpt**: ### Describe the bug ### I am doing … Running a production Nuxt 4 app build (`yarn build`) that uses Vite 8.0.0-beta.16 with Rolldown — the issue below is reproducible with `npm:rolldown-vite@user`, no difference. The app has SSR enabled and roughly 680 Vue SFCs, each with a non-trivial amount of component-scoped CSS in <style> blocks. The same app built with standard Vite (Rollup) completes successfully. ### What I expect is … The build to finish: client and server bundles should be produced, even if it takes a while under that CSS load. ### What actually is happening is … With Rolldown, the…

### CASE-8396 · [bug] SSR: CJS module instantiated twice when resolved via different specifier formats by a plugin
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug During Server-Side Rendering (SSR), Vite's module runner instantiates a CommonJS module twice if it is imported using two different specifier formats that are resolved to the same file by a custom resolveId plugin. In our use case with Deno, a plugin resolves both a bare specifier (noop-tag) and a prefixed specifier (npm:noop-tag) to the exact same CJS file on disk. However, Vite's SSR module graph does not seem to recognize them as the same module, leading to two separate initializations. This breaks any CJS package that relies on a singleton pattern or shared…

### CASE-8397 · SSR Page Reload does not refresh page on the client after upgrading to Vite 6
- **Principles**: P-F4 · **Env**: macos, vite
- **Signals**: 👍0 💬9 · open · labels: documentation/feat: ssr
- **Excerpt**: ### Describe the bug Using the `create-vite-extra` - Vanilla SSR template, when editing `src/entry-server.ts` and saving, it no longer triggers a page reload. Editing and saving `entry-client` works as expected. When using v5.4.9 this does not occur. ### Reproduction [link] ### Steps to reproduce ```bash npm create vite-extra@user (vanilla SSR) npm i npm run dev ``` edit `src/entry-server.ts` and save, I'm thinking this should trigger refresh ### System Info ```shell System: OS: macOS 15.1 CPU: (8) arm64 Apple M1 Memory: 163.77 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.5.1 -…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8305 · Uncaught TypeError: vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend is not a function
- **Principles**: P-A3, P-H1 · **Env**: linux, vue, webpack, vite
- **Signals**: 👍0 💬12 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug I tried the current [main]([link] tool]/tree/d555dd6cfdcdcc9bddaeaa6c3f9f4d82d2b9a847) and encounter a bug while in `dev` mode. ![image]([link]) This only occurs when using vite after commit [link] tool]/commit/05fd1e26be1c64c665b5c01161f2e789c1deb6aa and seems not to affect preview/build mode ### Reproduction Create a repo with `vue-2` + `vuetify` and use `yarn link "vite"` with commit `05fd1e2` and the one before => [link] ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue --binaries --browsers`: ```node System: OS: Linux 5.10 Arch Linux…

### CASE-8306 · `global is not defined`
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍4 💬12 · closed
- **Excerpt**: **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [√ ] Read [the docs]([link]). - [√] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. - [√] This is a concrete bug. For Q&A open a [GitHub Discussion]([link] tool]/discussions) or join our [Discord Chat Server]([link]). ## Describe the bug I'm getting `global is not defined` error. <img width="572" alt="Screen Shot 2021-03-20 at 5 38 00 PM" src="[link]> ## Reproduction The header…

### CASE-8309 · CSS full path for images
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬12 · closed · labels: needs reproduction
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> ## Describe the bug When vite is required (included from another endpoint) the reference to images in the CSS are lost cause the CSS is injected in the page. ```css div { background: url(/image/demo.png) } ``` When transpiled I think it would be nice to inject the full path to avoid any problem ```css div { background: url([link]) } ``` Or maybe offer a configuration to set the "publicPath" ## Reproduction Start any vite template including CSS. Then load this from another endpoint. For instance I'm on [link] and I include ```html <script…

### CASE-8310 · Package static resource problem
- **Principles**: P-A3, P-H1 · **Env**: opera, vite
- **Signals**: 👍0 💬12 · closed · labels: needs reproduction
- **Excerpt**: ## Describe the bug After upgrading the rc.9 version, the static resource package in the template is not output Preview after executing yarn build, the picture is 404. And there is no such picture in the generated file ``` <template> <img src="/@/assets/images/logo.png" /> </template> ``` ## System Info - **required** `vite` version: rc.9 - **required** Operating System: mac - **required** Node version: 12

### CASE-8311 · Error [SyntaxError]: Unexpected token: punc (.), During Build, when using optional chaining in the code
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬12 · closed
- **Excerpt**: ## Describe the bug When using `terser` minification (Which is the default), and one has some optional chaining in the code. The `build` fails with the error: `Error [SyntaxError]: Unexpected token: punc (.)` This is because, `terser` does not support `optional chaining` and a few other `es2020` features. ## Reproduction This is because we chaged `esbuildservice.ts` [link] tool]/blob/master/src/node/esbuildService.ts#L72 ![image]([link]) to always target `es2020` which is not always correct. We should either make it configurable, or read it from the `tsconfig` file. ## System Info -…

### CASE-8317 · Incorrect warning/error when @user is used before @user
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm using `@user` on my .css file but to have enforce the order of layer properly, the layers have to be defined before its use. When I put `@user` order defined above `@user`, I'm getting the follow error which indicates that it should work but still gives the error. <img width="549" alt="image" src="[link] tool]/assets/8681348/e25aad9d-6480-472f-af25-229c22e6b444"> It says `aside from @user and @user statement` which is my case but error keeps showing up. You can check out the reproduction for more testing. ### Reproduction [link] ### Steps to reproduce Run `npm…

### CASE-8320 · TS source for source maps in node_modules are processed by Vite pipeline when requested by the devtools
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬11 · closed · labels: bug: upstream/p3-minor-bug/feat: sourcemap
- **Excerpt**: Hi, when i connect external library with provided source mapping and sources i cannot get correct source mapping for debugging, all i get is wrapped in hot reload transpiled content. Side bar sows correctly selected file in node_modules path in src directory, but real content is completely different. Is there any way i can enable mapping, so it works like in project with CRA? <img width="1093" alt="image" src="[link] tool]-plugin-react-swc/assets/843964/06c34cb1-5fae-43d6-9bc4-e29ac1d78b81"> <img width="1878" alt="image" src="[link]…

### CASE-8324 · TypeScript WebWorker scripts imported with `new URL()` get inlined as `data:video/mp2t`
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍16 💬11 · open · labels: has workaround/p2-edge-case/feat: web workers
- **Excerpt**: ### Describe the bug With a vanilla TS project, using WebWorkers with the recommended `URL` syntax works fine: ```typescript const worker = new Worker(new URL('./worker.ts', import.meta.url)) ``` Building the project gives me two separate files, a main file and the worker file. However, if the worker is created with e.g. a factory pattern and still using the URL syntax, some interesting things happen: ```typescript const workerFactory = (workerScript: URL, workerOptions: WorkerOptions) => () => new Worker(workerScript, workerOptions); const main = () => { const factory = workerFactory(new…

### CASE-8328 · Pre-bundling is very slow when including ant-design-vue
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍10 💬11 · closed · labels: feat: deps optimizer/performance
- **Excerpt**: ### Describe the bug As the title says, when I include ant-design-vue, in my tests, it takes about 41.13s, which is very, very slow. ![image]([link]) A reproducible project: <[link]>, in fact, I only refer to the Button component ```ts import { createApp } from 'vue' import App from './App.vue' import 'ant-design-vue/dist/antd.css' import { Button } from 'ant-design-vue' console.log(Button) createApp(App).mount('#app') ``` The log is obtained using the following command ```sh pnpm vite --debug --force 2>&1 | tee vite.log ``` I observed that when the library contains a lot of code like `import…

### CASE-8329 · polyfills-legacy.js throw error: Cannot assign to read only property 'prototype' of function
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug: upstream/plugin: legacy
- **Excerpt**: ### Describe the bug When I use the @user/plugin-legacy plugin to generate polyfills-legacy.js, it throws an error in QQ browser version 9.7: ![image]([link]) And this error will cause the later injected Systemjs not to be initialized and executed, resulting in the System object not being found and the page js unable to load and run. ![image]([link]) The reason for this is because polyfills-legacy.js tries to assign undefined to Array.prototype[Symbol.iterator].prototype, but in QQ browser version 9.7, this value is not writable, and the generation of polyfills-legacy chunk It is built by…

### CASE-8333 · PWA manifest issue
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍10 💬11 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug I have an `index.html` that contains a reference to a PWA manifest like `<link rel="manifest" href="/manifest.webmanifest" />`. The manifest itself looks like this ``` { "name": "App", "icons": [ { "src": "icon-192x192.png", "sizes": "192x192", "type": "image/png" } ], "start_url": "/" } ``` When building the project with Vite, it inlines the manifest in the html. I think inlining this alters the behaviour of the manifest, as all relative urls in the manifest are, according to the spec, resolved against the url of the manifest. When this is inlined, the browser does not…

### CASE-8334 · `require is not defined` when using Lazy Loading Routes by vue-router
- **Principles**: P-A3, P-H1 · **Env**: chrome61, windows, vue, vite
- **Signals**: 👍2 💬11 · closed · labels: documentation
- **Excerpt**: ### Describe the bug use Lazy Loading Routes by `vue-router` like the below code, ```javascript // router.js createRouter({ history: createWebHashHistory('/'), routes: [ { path: '/', name: 'Home', component: () => import('/src/views/Home.vue') } ] }); ``` ```javascript vite.config.js export default defineConfig({ // ... build: { target: ['chrome61'] }, }) ``` it is error console in browser ``` vendor.dcd75cb2.js:6 ReferenceError: require is not defined at index.a463ca0d.js:1 ``` ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.17763 CPU: (4) x64 Intel(R) Core(TM)…

### CASE-8335 · Vite is slow on large codebases on windows
- **Principles**: P-A3, P-H1 · **Env**: windows, linux, vite
- **Signals**: 👍14 💬11 · closed · labels: windows only/performance
- **Excerpt**: ### Describe the bug While using Vite for bundling large codebase (around 700 files served) on Windows machine (reproducible both on windows 10 and 11 beta) Vite page load time takes around 5-30 seconds depending on drive type (NVME on-board SSD, NVME SSD, SATA SSD), comparing to <2 seconds on Mac (did not try on linux). Core reason is `tryFsResolve` function ![image]([link]) Which is using accessSync call, which is internally using multiple sync FS calls, and NTFS (specifically NTFS, looks like FAT is working better) is rather complex system with multiple checks that can take milliseconds;…

### CASE-8336 · Vite keeps refreshing the page with logs stuck in `connecting`
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬11 · closed · labels: pending triage/feat: hmr/has workaround
- **Excerpt**: ### Describe the bug Vite keeps refreshing the page and logs are stuck with `connecting...` `server connection lost. polling for restart...` ![log]([link]) ### Reproduction Here is the [codesandbox]([link] tool]/tree/main/packages/create-vite/template-react) of the official react template package. This one is stuck while I was trying (image above). ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i5-8300H CPU @ 2.30GHz Memory: 7.89 GB / 15.85 GB Binaries: Node: 16.1.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 -…

### CASE-8341 · [yarn pnp] Dep optimizer does not work with virtual path (peer-dependencies)
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬11 · closed · labels: wontfix
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug When using peer dependencies Yarn is creating virtual paths, when vite optimize deps it keeps the file structure: <img width="1730" alt="Screen Shot 2021-01-27 at 10 08 14 AM" src="[link]> Now yarn here is…

### CASE-8346 · [plugin:vite:react-babel] [BABEL]
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍1 💬10 · closed · labels: pending triage/bug: upstream
- **Excerpt**: ### Describe the bug Why does the jsx created with vite report an error when running [plugin:vite:react-babel] [BABEL] ### Reproduction [link] ### Steps to reproduce pnpm create vite cd mydemo pnpm install pnpm run dev [plugin:vite:react-babel] [BABEL] ![image]([link]) ### System Info ```shell [plugin:vite:react-babel] [BABEL] ``` ### Used Package Manager pnpm ### Logs [plugin:vite:react-babel] [BABEL] ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8348 · Dynamic imports doesn't work after i upgraded to Vite 5.3.1
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: p4-important/regression/feat: library mode
- **Excerpt**: ### Describe the bug ```js useEffect(() => { if (dateTooltipTheme === 'light') import('tippy.js/themes/light.css'); if (dateTooltipTheme === 'light-border') import('tippy.js/themes/light-border.css'); if (dateTooltipTheme === 'material') import('tippy.js/themes/material.css'); if (dateTooltipTheme === 'translucent') import('tippy.js/themes/translucent.css'); }, [dateTooltipTheme]); ``` This code used to work with my package [package]([link]) but now i get this error when i try my package in a vite environment: ![image]([link] tool]/assets/63022311/eba3494b-136a-48d3-b69b-81b7cfef20fb) ###…

### CASE-8351 · add favicon
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍1 💬10 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I want to add a favicon on all devices, so far it works on NONE! `<link rel="icon" type="image/png" href="../resources/img/icon.png"/>` ``` const window = new BrowserWindow({ width: 1050, height: 670, show: false, icon: '../resources/img/icon.png', ``` this is really annoying, I just want to get on with my actual app not mess around on something so simple, come on guys!! ### Reproduction none ### Steps to reproduce _No response_ ### System Info ```shell linux ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8355 · Build fails with `ENOTDIR` on fresh Laravel 10 install with recent NodeJS Docker images
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug Not sure if this is a Laravel configuration issue or a Vite bug. On a fresh install of Laravel 10 (default configuration) and using recent official Docker images of NodeJS (NodeJS >= 18.x), `npm run build` fails with `ENOTDIR`. ### Reproduction [link] ### Steps to reproduce Sorry, there is no reproduction URL. All of the steps to reproduce are below: ``` // Setup: podman pull docker.io/library/node:20-bullseye-slim // Or probably same with Docker podman pull docker.io/library/node:18-bullseye-slim podman pull docker.io/library/node:16-bullseye-slim composer global require…

### CASE-8356 · Security .env issue
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm able to see all .env values ![image]([link] tool]/assets/39565703/6bcd67d0-23db-4ba6-92ca-92d816adc26d) ### Reproduction Codesandbox - [link] ### Steps to reproduce ### Step 1 - Use import.meta.env ```ts import { createClient } from "@user/supabase-js" const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "" const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "" const supabase = createClient(supabaseUrl, supabaseAnonKey) export default supabase ``` ### Step 2 - open dev tools - sources - see all .env values ### System Info ```shell - ``` ### Used…

### CASE-8361 · Vue + Vite + SSR: Referencing public assets with the root path (`/myimage.jpg`) inside the `public` directory results in a Rollup error
- **Principles**: P-A3, P-H1, P-F4 · **Env**: ios, vue, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Using [vite-plugin-ssr]([link]) with Vue, running `build` with an asset referenced from the root path (e.g. `/myimage.jpg`) results in a Rollup error. This doesn't occur during `dev`. Also, the issue doesn't occur when used with a [generic Vue SPA]([link]). However, @user noted that *vite-plugin-ssr doesn't do anything about the public directory* Here's a detailed explanation of the scenarios: **Scenario A: VPS with Vue using `npm init vite-plugin-ssr@user`** ``` "vite": "^3.0.9", "vite-plugin-ssr": "^0.4.32", "@user/plugin-vue": "^3.0.3" ``` `myimage.jpg` can be found in…

### CASE-8367 · base option not support fully url at dev mode
- **Principles**: P-A3, P-H1 · **Env**: typescript, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug from [ref], the last comment. In my case, use base like this: ```typescript import { defineConfig } from "vite"; import vue from "@user/plugin-vue"; export default defineConfig({ plugins: [ vue({ template: { compilerOptions: { isCustomElement: function(tag) { return tag.includes("fl-") || tag.includes("sl-"); } } } }) ], base: "[link] root: "/Users/zhouyiming/Project/frameless-pc/src/pages/demo1" }); ``` But when i visit the [link] the assets is not be rewrited <img width="427" alt="image" src="[link]> if this page is nested in a "main" page, this request will be 404 <img…

### CASE-8368 · An external img should not generate an import statement
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vue, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug Here's the setup. `Page1.vue` contains an external image that doesn't exist in this repo**: ``` <img alt="smpte bars" class="logo" src="/img/aaaSMPTE-color-bars.png" /> ``` There's a `entry-point-1.ts` file which includes the `Page1.vue` file, and that entry point file is specified as an `input` in the `vite.config.ts` config. The `vite.config.ts` also has a rollup config that specifies that PNG to be external: ``` export default defineConfig({ // ... build: { rollupOptions: { input: [ 'src/entry-point-1.ts', ], external: [ '/img/aaaSMPTE-color-bars.png', ], // ... } },…

### CASE-8369 · “Failed to construct 'URL': Invalid URL” in v2.9.1
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug After upgrading to [email], `new URL` and `import.meta.URL` was failed. It occurred an error as `Uncaught TypeError: Failed to construct 'URL': Invalid URL`. The `src` of img cannot be inferred correctly. But in [email] everything went well. > raw code used in .ts ``` <img src="${ new URL('../assets/images/loading/loading.gif', import.meta.url).href }" alt=''> ``` > compiled code - [email] `<img src="${new URL("/front/assets/loading.c075df69.gif",self.location).href}" alt=''>` The `src` of img is `"[link] which is correct - [email] `<img src="${new…

### CASE-8370 · Can not resolve when package.json exports field resolution result is a direcory
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: pending triage/p2-to-be-discussed
- **Excerpt**: ### Describe the bug I have a package named `some-package` and it's files are in `node_modules`. ### `package.json` in `node_modules/some-package` ``` json { "name": "some-package", "version": "1.0.0", "license": "MIT", "exports": { ".": "./index.js", "./sub": "./lib/sub" } } ``` ### `index.js` in `node_modules/some-packages/lib/sub` ``` js export const Foo = 'Foo'; ``` then I import it in the `main.js` in root directory ``` js import { Foo } from 'some-package/sub'; console.log(Foo); ``` it complain the error ![image]([link]) **I also run the same code in Node.js or Webpack-based project,…

### CASE-8375 · `vite:define` plugin will replace module or path-name keyword in defines
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug if some lib, folder or file-name have some keyword defined in `define` property, and run `vite build` will casue `[vite]: Rollup failed to resolve import` error. After checked source code and found some casue on follow picture. ![image]([link]) ### Reproduction open this link [link] and see `Terminal` output ### System Info ```shell System: OS: macOS 12.0.1 CPU: (8) x64 Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz Memory: 224.04 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 8.1.0 -…

### CASE-8381 · self accepting HMR modules should not invalidate the whole import chain (?)
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍3 💬10 · closed · labels: needs reproduction/feat: hmr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug We unravelled a bug recently in our application with HMR. When we change a single .vue file it throws an error like this one: <img width="1282" alt="Screen Shot 2021-06-08 at 6 25 48 PM" src="[link]> This sounds like a circular dependency bug so we started trying to find it... but after some investigation we noticed this error message only shows up in [email]-beta.34 and later. This commit is the one we are…

### CASE-8382 · Build failed when use react-router-dom and path-to-regexp
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug use `react-router-dom` and `path-to-regexp` package in the same time comes a problem ````jsx import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom"; import { match } from 'path-to-regexp' // change to 'path-to-regexp/dist.es2015' works console.log(match) ```` Got error like this ![image]([link]) I do prepare [a codesandbox link]([link]), but it's works fine. I can't make it right on my local environment. ### Reproduction try download [this codesandbox demo]([link]) and run `npm run dev` ### System Info Output of `npx envinfo --system…

### CASE-8383 · rollupOptions.output.assetFileNames does not work
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍12 💬10 · closed
- **Excerpt**: ### Describe the bug `rollupOptions.output.assetFileNames` does not work. I have the start project with changed config: ```js export default defineConfig({ plugins: [vue()], build: { rollupOptions: { output: { entryFileNames: `[name].js`, // works chunkFileNames: `[name].js`, // works assetFileNames: `[name].[ext]` // does not work for images } } } }) ``` The result build structure looks so: ![image]([link]) As you can see `assetFileNames` option was ignored for `logo.png`. See the related bug: [link] tool][ref][ref] ### Reproduction `yarn create @user/app my-vue-app --template vue` and use…

### CASE-8385 · No matching export for import "**"
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [x] Read [the docs]([link]). - [x] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. - [x] This is a concrete bug. For Q&A open a [GitHub Discussion]([link] tool]/discussions) or join our [Discord Chat Server]([link]). ## Describe the bug /Login.vue:4:9: error: No matching export for import "ManageProps" ![image]([link]) When I…

### CASE-8386 · decorators not support in js for prebuild
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍2 💬10 · closed · labels: pending triage/has workaround
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [x] Read [the docs]([link]). - [x] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. - [x] This is a concrete bug. For Q&A open a [GitHub Discussion]([link] tool]/discussions) or join our [Discord Chat Server]([link]). ## Describe the bug 运行 `dev`时，因为有预购建，导致esbuild无法识别js中的decorators，报如下错误 ![image]([link]) ## Reproduction code 如下…

### CASE-8390 · ESM module for both Node.js and the Browser?
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: contribution welcome
- **Excerpt**: ## Describe the bug The `httpie` package specifies "browser" paths on its `package.json` multiple times, but frontend build tools don't seem to pick up the correct file (always selecting `node/index.mjs`) <img width="615" alt="screenshot" src="[link]> **ERROR** ``` [vite] Dep optimization failed with error: Could not load http (imported by node_modules/httpie/node/index.mjs): ENOENT: no such file or directory, open 'http' [Error: Could not load http (imported by node_modules/httpie/node/index.mjs): ENOENT: no such file or directory, open 'http'] { errno: -2, code: 'ENOENT', syscall: 'open',…

### CASE-8399 · Document not defined in worker import
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍3 💬9 · open · labels: feat: css/p2-nice-to-have/feat: web workers
- **Excerpt**: ### Describe the bug While running in dev mode and importing a worker that has dependency on a css file. The worker fails to start with `document not defined` ![image]([link] tool]/assets/25068382/6a3f757f-baf1-4f19-89f1-6aee9c9ac2cc) I have created a minimal reproduction of the issue on [stackblitz]([link]) worker.ts ```ts import styles from './worker.module.css'; self.onmessage = () => { console.log('hello world', styles.container); }; ``` imported in App.tsx ```tsx import * as React from 'react'; import reactLogo from './assets/react.svg'; import viteLogo from '/vite.svg'; import…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8308 · env variables not accessible in vite.config.js
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, vue
- **Signals**: 👍16 💬12 · closed · labels: enhancement/has workaround
- **Excerpt**: ## Describe the bug Variables from `.env*` files are accessible only during development/build but not already in `vite.config.js`. Im not sure if this behaviour was omitted on purpose because it doesn't align with vite's design or it was simply forgotten, but when I was using `vue-cli` I got used to having the env variables available already in vue.config.js. I find it super convenient to be able to setup the vue/vite configuration parameters based on the values provided by the `.env*` files (instead of checking the `mode` and conditionally setting the parameters to the same values which are…

### CASE-8323 · Library mode includes both production and development packages for react and react-dom
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react, vite, typescript
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In a pristine vite react TS project I'm exporting `root` variable in `main.tsx` and using library mode with minimal configuration. After building and inspecting the built file, I can see the references to both development and production files, which more than doubles the size of the bundle. Expected result is only having `*.production.min.js` in the bundle. For clarity, I WANT to include `React` in the bundle. ### Reproduction [link] ### Steps to reproduce ```shell yarn create vite ``` Select `React` and `TypeScript` Update `main.tsx` as follows: ```tsx import React from…

### CASE-8326 · Property 'env' does not exist on type 'ImportMeta' in 3.0.0
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, vite, react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug In vite 3.0.0 it still exists, even if it was previously closed. Can be recreated using `react-ts` template. Try to use env variable via `import.meta.env`, TS will give you an error `Property 'env' does not exist on type 'ImportMeta'.` According to the docs it should work: [link] ### Reproduction yarn create vite my-app --template react-ts ### System Info ```shell System: OS: macOS 11.6 CPU: (8) arm64 Apple M1 Memory: 128.70 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.14.2 - ~/.nvm/versions/node/v16.14.2/bin/node Yarn: 1.22.15 -…

### CASE-8365 · The English website is not accessible
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Is this my problem? ![image]([link]) ### Reproduction [link] ### System Info ```shell none ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a…

### CASE-8377 · esbuild minifier mangles top-level variable names in umd library build
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬10 · closed · labels: has workaround/p3-minor-bug/feat: library mode
- **Excerpt**: ### Describe the bug vite 2.5.7 ![image]([link]) after update to vite 2.6.11 ![image]([link]) [this pr]([link] tool][ref]/files#diff-aa53520bfd53e6c24220c44494457cc66370fd2bee513c15f9be7eb537a363e7L116) changed the default `minify` to `esbuild` ### Reproduction 1. create project ```sh npm init vite@user test -- --template vanilla && cd test && npm i ``` 2. config ```js import { defineConfig } from 'vite'; // [link] export default defineConfig({ build: { lib: { name: 'test', entry: 'main.js', }, }, }); ``` 3. edit main.js ```js const a = {}; console.log({...a}) ``` 4. build ```sh npx vite…

### CASE-8384 · process.env.NODE_DEBUG is undefined
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite, webpack
- **Signals**: 👍0 💬10 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug This may be my misunderstanding of how env variables are processed in Vite but in my project the value `process.env.NODE_DEBUG` is undefined when compiling a third-party dependency. The dependency in question is `@user/event-hubs`. ![image]([link]) This is not an issue when using another bundler such as webpack, parcel, or rollup. I have attempted this solution: [link] tool]/discussions/2344 but I couldn't get it to work... ### Reproduction I have put together a reproduction of the issue [here]([link]). However, for clarity here are the steps: 1. Create a blank vite…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8319 · resolve.alias doesn't work on vite builds
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬11 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug When I run `vite dev`, `resolve.alias` has works. <img width="943" alt="image" src="[link] tool]/assets/37169906/abc36cab-e968-4b43-98e3-da65d261b62d"> But, when I run `vite build`, it won't works. <img width="1118" alt="image" src="[link] tool]/assets/37169906/27736ecb-2aa6-47e6-8678-7b6758b30196"> this is my code: ```ts import { PluginOption, defineConfig } from 'vite'; import * as path from 'path'; function print() { let init = false; const plugin: PluginOption = { name: 'print', async transform(src, id) { if (this.resolve && !init) { console.log('debug', await…

### CASE-8325 · Vite + Linaria + `exports` field in `package.json` = crash
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍1 💬11 · closed · labels: p3-minor-bug/feat: build
- **Excerpt**: ### Describe the bug I tried setting up [Playwright for component testing]([link]), which uses vite, in our existing components library repo, but I ended up hitting a roadblock with Vite using the `exports` field for linaria's local/relative imports. Vite should ignore the `exports` field in the local `package.json` file. What is actually happening is this error: ``` vite v3.2.4 building for production... ✓ 3 modules transformed. [commonjs--resolver] Missing "./main_lquf2n.css" export in "undefined" package error during build: Error: Missing "./main_lquf2n.css" export in "undefined" package…

### CASE-8330 · regex based filter in asset-import-meta-url ignores actual code in some cases
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hey! When using `new URL(..., import.meta.url)`, for some cases vite does not transform the URLs to point to bundled assets (only when building though, works fine in dev 🧑‍💻) ## Reproduction Go to [repro]([link]) and in the terminal do ```bash npm run build npm run preview ``` Browser console should show (notice the second URL isn't transformed) <img width="568" alt="image" src="[link]> ## Why? It seems these regex filters are at fault [link] tool]/blob/4433df4c6b278d5a2f4d2ca14f0a7930ed647e80/packages/vite/src/node/plugins/assetImportMetaUrl.ts#L34-L37 ```javascript //…

### CASE-8331 · CSS is missed in `transform` hook
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, vite
- **Signals**: 👍0 💬11 · closed · labels: wontfix/feat: css
- **Excerpt**: ### Describe the bug CSS is missed in `transform` hook now. `code` argument of `transform(code, id)` hook contains only `"export default ''"` string. There is no CSS. It worked before — with Vite 2.5.7. For example, I was able to generate such [style.css]([link]) With this plugin: [(using)]([link]), [(plugin code)]([link]) --- For the reproduction uncomment [these lines]([link]) of [the minimal reproduction repo]([link]) ### Reproduction [link] ### System Info ```shell OS: Windows 10 10.0.19043 Node: 17.3.0 Yarn: 1.22.5 npm: 7.19.1 vite: 2.7.2 ``` ### Used Package Manager npm ### Logs _No…

### CASE-8340 · Issues importing from Private registry 'lib': 'npm:@user/plugins'
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬11 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Importing from a @user: private registry seems to mess with the namespaces for use with say Greensock Club Plugins. [link] ### Reproduction ```json //package.json "devDependencies": { "gsap": "npm:@user/shockingly@^3.6.1", } ``` try to import ```js import { gsap } from 'gsap' //works import { ScrollTrigger } from 'gsap/ScrollTrigger' //does not work gsap.registerPlugins(ScrollTrigger) ``` ### Workaround for Greensock membership download the membership zip and import the .tar included bonus plugins in your package.json ```json "gsap": "./scripts/gsap-bonus.tar", ``` ###…

### CASE-8342 · Use file src path as keys in build manifest
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬11 · closed · labels: enhancement
- **Excerpt**: - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) ## Describe the bug Assets directories are not respected when generating a final build. If your root is `app/vite`, and your entrypoint file is `app/vite/entrypoints/application.js` And in your entrypoint you import `import "../images/nested/image.svg"` Your production build still keeps the image in the top level `assets` directory and doesnt transform it into: `assets/images/nested/image[hash].svg` Instead, it just stays as `assets/image[hash].svg` ## Reproduction Here's the repo with the reproduction: [link]…

### CASE-8343 · Dev server corrupts a method named `import`, causing SyntaxError: Unexpected token '('
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍14 💬10 · closed · labels: bug: upstream/p3-downstream-blocker/regression
- **Excerpt**: ### Describe the bug In Vite 8.1.0, the dev server's `importAnalysis` transform mistakes a **method or identifier named `import`** (e.g. `async import(keys, values) {}` inside a class) for a **dynamic `import()` expression**. It injects the query-injection helper into the method's parameter list, producing invalid JavaScript: ```diff - async import(keys, values) { + async import(__vite__injectQuery(keys, 'import'), values) { ``` A function/method parameter list cannot contain a call expression, so the browser throws `SyntaxError: Unexpected token '('` when it loads the served module, and the…

### CASE-8344 · segmentation fault
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, vite
- **Signals**: 👍19 💬10 · closed · labels: bug: upstream/p4-important
- **Excerpt**: ### Describe the bug BUILDER ➜ ./packages/app (main*) $ npx vite build vite v8.0.7 building client environment for production... ✓ 6551 modules transformed. Segmentation fault BUILDER ➜ ./packages/app (main*) $ bunx vite build vite v8.0.7 building client environment for production... ✓ 6551 modules transformed. [1] 764902 segmentation fault bunx vite build I tried under both npx/node and with bun ### Reproduction working on this ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 6.17 Debian GNU/Linux 12 (bookworm) 12 (bookworm) CPU: (12) arm64 unknown Memory:…

### CASE-8349 · Fail to load packages installed from Git repo with pnpm v9
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍3 💬10 · closed · labels: p4-important
- **Excerpt**: ### Describe the bug Since upgrading to pnpm v9, Vite has failed to load packages installed from Git repo. <details> <summary>Error like this</summary> ```shell vite:load 5.98ms [fs] /main.js +0ms vite:resolve 6.61ms uuid-mirror -> /Users/kongdev/Workspace/demo/vite-issue/node_modules/.pnpm/uuid@user+https+++gitee.com+kongdev+uuid.git#da189d1792993d0da4b5008ea98c5ef48896739c/node_modules/uuid/dist/esm-browser/index.js +29ms vite:import-analysis 15.07ms [1 imports rewritten] main.js +0ms vite:transform 24.05ms /main.js +0ms 3:06:02 PM [vite] Pre-transform error: Failed to load url…

### CASE-8350 · Dynamic css import not working
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Here is a reproduced issue. I am trying to load css dynamiclally [link] this says that it should work [link] I am getting ``` npm run build && npm run preview > [email] build > tsc && vite build vite v5.2.11 building for production... [plugin:vite:dynamic-import-vars] [plugin vite:dynamic-import-vars] src/themes/theme-loader.ts: invalid import "./${name}.css`, { with: { type: "css" } ". It cannot be statically analyzed. Variable dynamic imports must start with ./ and be limited to a specific directory. For example: import(`./foo/${bar}.js`). ✓ 36 modules transformed.…

### CASE-8352 · namespace import would be transformed to void 0
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug <img width="612" alt="image" src="[link] tool]/assets/4798868/2f52df98-55f0-4fd5-aab3-685c02c7672b"> My project need antd v3，but console report this error when my vite devserve runs in development. <img width="718" alt="image" src="[link] tool]/assets/4798868/1499d105-6736-4bb8-a9a0-51f98606df97"> The antd source code path is node_modules/antd/es/local-provider/index.js. <img width="510" alt="image" src="[link] tool]/assets/4798868/53bc0ddf-8170-40e3-bf97-092e6998ba00"> The transformed code is 'void 0' ### Reproduction [link] ### Steps to reproduce _No response_ ###…

### CASE-8353 · Vite ignoring external files during Pre-transform
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍7 💬10 · closed · labels: p3-downstream-blocker
- **Excerpt**: ### Describe the bug Hi, I've recently tried setting up storybook with the latest vite / vue template. But it seems to be ignoring the build / rollupOptions / external setting during the pre-transform stage ### Reproduction As below ### Steps to reproduce ```bash # Create basic vite / vue template npm create vue@user npm install # Setup storybook npx storybook@user init # update everything to latest version npm-check-updates -i # run storybook npm run storybook ``` This results in vue trying to pick up on `/sb-preview/runtime.js` ``` Pre-transform error: Failed to load url…

### CASE-8366 · Error: Module "module" has been externalized for browser compatibility
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F4 · **Env**: vite
- **Signals**: 👍2 💬10 · closed · labels: p4-important/regression
- **Excerpt**: ### Describe the bug At Qwik, we use Vite. When updating to 3.0.0, we found out that the app always crashes in the browser, because a SSR module leaks and it's imported through a ESM import in the browser code. Internally QwikVite plugin uses ssrLoadModule(). seems like it's caching the transform needed for SSR and making it accessible from the client, when hitting the URL. even manually setting `transformRequest(url, {ssr: false])` returns a request that in SSR only. This was not a problem in 2.9.9 ``` Uncaught (in promise) Error: Module "module" has been externalized for browser…

### CASE-8371 · esbuild minify unexpect transform
- **Principles**: P-D1, P-D2, P-D3 · **Env**: chrome60, chrome63, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug when I use config for vite ```js export default { build: { target: 'chrome60' } } ``` esbuild transform `dynamic import` to `require`. like this: ```js import('./workerImport-a2c311d3.js') ``` to ```js require('./workerImport-a2c311d3.js') ``` may be chrome63 support `dynamic import`. chrome60 no support. But I don't think this conversion meets the expectations. I think need to polyfill `import` in chrome63 ### Reproduction [link] ### System Info ```shell any ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8373 · Support for moduleInfo.meta in resolveId hook still not equivalent in vite dev and vite build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍4 💬10 · open · labels: rollup plugin compat/p3-minor-bug
- **Excerpt**: ### Describe the bug In [link] tool][ref] support for `moduleInfo.meta` is added to the dev server. This is a very welcome change that I look forward to using. Unforunately, behavioral parity between `vite build` and `vite dev` is not quite there yet. In the attached reproduction recipe the former succeeds while the latter fails. By "failing" I mean the `transform` hook is never called and doesn't inject an important transformation into `foo.js`. Here are relevant parts of the files. ```js //main.js import fn from './foo.js?xoption=21' document.querySelector('#app').innerHTML = `<h1>Hello…

### CASE-8387 · SSR HTML transformation in middleware mode doesn't add style tags for statically imported css
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, react
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: - [X] Read [the docs]([link]). - [X] Use Vite >=2.0. (1.x is no longer supported) - [X] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug During development, when using vite in middleware mode like the `ssr-react` example, CSS source files imported by the entrypoint aren't sourced via a `<link/>` tag in the transformed HTML. This results in a flash of unstyled content because the server rendered response doesn't include the CSS, but during hydration, the client renders and imports the style. I believe that in normal, vite is the…

### CASE-8388 · Inline worker build without any output files or error message.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍3 💬10 · closed · labels: has workaround/p2-edge-case/inconsistency/feat: web workers
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug I am using monaco editor with inline worker, vite build output nothing. (exit at `✓ 739 modules transformed.`) (When I used vite 1, it worked as expected. ## Reproduction [link] ## System Info - `vite` version:…

### CASE-8389 · router dynamic import component build error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [ ] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug `master` branch: use router `dev` branch: not use ### use vue-router-next ``` component: () => import("../Home.vue"), ``` but when `build` bundle, `var Symbol = root.Symbol;` from `lodash-es` does not transform [link] This causes `Symbol` in line 2 to be undefined `exports[Symbol.toStringTag] = "Module";` ### not use router `var Symbol$1 = root.Symbol;` [link] ## Reproduction [link] `yarn build` see…

### CASE-8391 · [vite] error while transforming /app/client/vite.config.ts with esbuild in Docker image
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍1 💬10 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Following error when trying to run `vite build` in a docker container. I tried to convert the config file to a JS file but then it throws an error on my main.ts. On my (windows) development pc the build command works perfectly. ``` > vite build --debug vite v1.0.0-rc.4 [vite] error while transforming /app/client/vite.config.ts with esbuild: Error: The service was stopped at /app/client/node_modules/esbuild/lib/main.js:405:31 at Socket.afterClose (/app/client/node_modules/esbuild/lib/main.js:331:7) at Socket.emit (events.js:326:22) at endReadableNT…

### CASE-8392 · Vite 7 + @user/plugin-legacy fails after upgrading esbuild to 0.27.7+
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍1 💬9 · closed · labels: bug: upstream/has workaround/plugin: legacy/p2-edge-case
- **Excerpt**: ### Describe the bug ### Describe the bug After upgrading Vite to `7.3.2`, `@user/plugin-legacy` started failing during the legacy downgrade/transformation flow. I investigated the issue and found that forcing `esbuild` to `0.27.4` makes the problem disappear: ```json { "overrides": { "esbuild": "0.27.4" } } ``` So this appears to be a compatibility issue related to esbuild version resolution after upgrading Vite. ### Reproduction Please provide a minimal reproduction repo if needed. I can prepare one. ### Steps to reproduce 1. Upgrade Vite to 7.3.2 2. Use @user/plugin-legacy 3. Run the build…

### CASE-8394 · Module ids escape Bazel's symlink sandbox
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍10 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm testing out `rolldown-vite` in a Bazel monorepo. I'm seeing the `index.html` file get written out to the wrong place unless the sandbox is disabled: ``` rolldown-vite v7.3.1 building client environment for production... transforming...✓ 3 modules transformed. rendering chunks... computing gzip size... dist/../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/packages/foo-app/index.html 0.14 kB │ gzip: 0.12 kB dist/assets/index-YiMfhTXK.js 0.72 kB │ gzip: 0.41 kB ✓ built in 19ms ``` After comparing `rolldown-vite` with `vite`, I believe…

### CASE-8395 · Errors when multiple versions of same browser is specified in `build.target`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: chrome135, chrome134, edge135, edge134, vite, react
- **Signals**: 👍0 💬9 · open · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug It seems like this is enough to crash rolldown-vite when running `vite build`: ```js export default defineConfig({ build: { target: ['chrome135', 'chrome134'], // or // target: ['edge135', 'edge134'], } }) ``` ``` > vite build You have set `optimizeDeps.esbuildOptions` but this options is now deprecated. Vite now uses Rolldown to optimize the dependencies. Please use `optimizeDeps.rollupOptions` instead. ♻️ Generating routes... ✅ Processed routes in 77ms vite v6.3.5 building for production... transforming (9) node_modules\react\cjs\react-jsx-runtime.production.jstarget…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8360 · Vite4 regression - TypeError: Cannot read properties of undefined
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite, react
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug The only change was going from vite 3 > vite 4. It was working with vite 3 and even vite 2. The following code throws an error on the server in development: ```ts import { extendTheme } from "@user/react"; const theme = extendTheme({}) ``` ``` (node:8) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension. (Use `node --trace-warnings ...` to show where the warning was created) TypeError: Cannot read properties of undefined (reading 'extendTheme') at eval (/home/projects/llqijrlvr.github/src/entry.js:5:35) at async…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-8364 · CSS `@user` bundling misses selectors inside media queries
- **Principles**: P-A2, P-A4 · **Env**: vite
- **Signals**: 👍1 💬10 · closed · labels: bug: upstream/feat: css
- **Excerpt**: ### Describe the bug ```css @user 'layers.css' layer(demo); ``` where `layers.css` contains: ```css h1 { color: red; } @user (min-width: 100px) { h1 { color: green; } } ``` incorrectly produces: ```css @user demo { h1 { color: red; } } @user (min-width: 100px) { h1 { color: green; } } ``` instead of (this is just one correct way): ```css @user demo { h1 { color: red; } @user (min-width: 100px) { h1 { color: green; } } } ``` This means any media queries are unlayered, giving them the top most precedence and specificity over styles in layers. Vanilla Vite example: [link] Demo: [link] I'd like a…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8376 · @user/plugin-react - Inconsistent vendor reference
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍9 💬10 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug When using @user/react-plugin with `react-custom-scrollbars-2` (but other packages have similar issues - can be found here: [link]), reference to react is not transformed in all locations the same way. `react-custom-scrollbars-2` imports react utility functions: `import { Component, createElement, cloneElement } from 'react';` [link] In the library output, it looks like this (emphasis on the `_react.`: ``` return (0, _react.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) { _this7.container = _ref3; } }), [(0,…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8379 · When Built with configure assetFileNames, the assets not found
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug When project built, run the dist. The page will load all assets in `css` dictionary, actually the assets aren't in this dictionary. ![image]([link]) ```js build: { outDir: "test_dir", assetsDir: "static", rollupOptions: { output: { chunkFileNames: "static/js/[name]-[hash].js", assetFileNames(chunkInfo) { const fileName = chunkInfo.name; let extPath = "[ext]"; if (/\.(png|jpe?g|gif|svg)$/i.test(fileName)) { extPath = "img"; } else if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(fileName)) { extPath = "media"; } else if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) { extPath =…

