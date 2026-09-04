# Case Chunk 078 — Round 78

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8701 · After build, dev server run in error `process is not defined`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug After a sucessful build of the app, when try running `npm run dev` again, it runs normally, but the app under the dev server cannot open in browser properly. the chrome console shows: ![image]([link]) when trace into the file, it shows: ![image]([link]) in the `source code` tab,…

### CASE-8709 · [Vite 8][plugin-legacy] legacy chunks not loaded when they should
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, vite, mobile
- **Signals**: 👍0 💬5 · closed · labels: plugin: legacy/p4-important
- **Excerpt**: ### Describe the bug The production build with most recent vite and @user/legacy-plugin fail to load the legacy chunks when they should I am trying to gradually re-introduce older browser (we have a user base that is still using Safari < 16 and Safari mobile < 16.4), after migrating to vite 8 (which is great by the way!) - legacy builds are not loaded. I might be doing smth stupid as I am surprised this has not yet been reported. The production build with legacy plugin injects this in `index.html`: ```html <script type="module">import'data:text/javascript,if(!import.meta.resolve)throw…

### CASE-8714 · Safari 15 receives the modern bundle but cannot handle modern CSS syntax
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 15, macos
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Safari 15 supports ESM, so @user/plugin-legacy always serves it the modern bundle. But Safari 15 does not support several baseline "widely available" CSS features emitted in that build. For example: ```@user (width > 450px) { ... }``` This leads to layout and rendering issues for Safari 15 users. There is currently no way to prevent Safari 15 from being treated as a modern browser even though it cannot handle the CSS in the modern output. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 15.5 CPU: (10) arm64 Apple M1…

### CASE-8718 · Bump default `build.target`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge88, firefox78, chrome87, safari14, chrome 80, edge 80, firefox 74, safari 13
- **Signals**: 👍4 💬6 · closed · labels: breaking change/p3-significant
- **Excerpt**: ### Description The [current default `build.target`]([link] tool]/blob/cf10b416afde904657784722a874f7183630c4bb/packages/vite/src/node/constants.ts#L79-L85) is a bit outdated. ``` es2020 edge88 firefox78 chrome87 safari14 ``` The reasons why this should be bumped: - this support range requires [optional chaining to be transpiled]([link]) causing the bundle size to be bigger - AFAIK we didn't want to transpile optional chaining - [caniuse shows that Chrome 80+, Edge 80+, Firefox 74+, Safari 13.1+ supports it]([link]), but [esbuild transpiles it]([link]) unless the target is Chrome 91+ due to…

### CASE-8730 · `cacheDir` option doesn't change cache directory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: vite, electron
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I want change the directory of cache with `cacheDir` option and the folder generated is always `node_modules/.vite` instead of `.vite/cache`. I'm using yarn berry v4 with Plug'n'Play (PnP). ### Reproduction [template-electron-vite]([link]) ### Steps to reproduce - `git clone [link] - `cd template-electron-vite` - `yarn` - `yarn start` ### Current `vite.config.ts` ```ts import { defineConfig } from 'vite' export default defineConfig(({ root, mode, command }) => { return { root, mode, build: { emptyOutDir: false, outDir: '.vite/build', watch: command === 'serve' ? {} :…

### CASE-8731 · "TypeError: undefined is not a function at System.register.execute" in chrome 39
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 39, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: invalid/plugin: legacy
- **Excerpt**: ### Describe the bug ``` "TypeError: undefined is not a function at System.register.execute ([link]) at n ([link]) at v ([link]) at [link] at nl ([link]) at [link] at MutationObserver.Jf ([link])" ``` vite.config.ts ```ts import { fileURLToPath, URL } from 'node:url' import { defineConfig } from 'vite' import vue from '@user/plugin-vue' import Components from 'unplugin-vue-components/vite' import { VantResolver } from '@user/auto-import-resolver' import legacy from '@user/plugin-legacy' // [link] export default defineConfig({ base:'/xx', plugins: [ vue(), Components({ resolvers:…

### CASE-8732 · Reload does not happen if an entrypoint is in a circular dep loop
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬5 · open · labels: feat: hmr/p2-edge-case
- **Excerpt**: ### Describe the bug In the [repo]([link]), after change any part of source code, hmr do not refresh the page. ### Reproduction [link] ### Steps to reproduce npm install npm run start ### System Info ```shell System: OS: macOS 14.4.1 CPU: (11) arm64 Apple M3 Pro Memory: 1.98 GB / 18.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.12.1 - ~/.nvm/versions/node/v20.12.1/bin/node npm: 10.5.0 - ~/.nvm/versions/node/v20.12.1/bin/npm Browsers: Chrome: 124.0.6367.158 Safari: 17.4.1 npmPackages: vite: ^5.2.2 => 5.2.2 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow…

### CASE-8738 · legacy plugin: Functions not polyfilled (both modern and legacy) for code in a module web worker scripts
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 110, vite
- **Signals**: 👍3 💬5 · open · labels: pending triage/plugin: legacy/feat: web workers
- **Excerpt**: ### Describe the bug The legacy plugin won't polyfill functions used in a module web worker script. ### Reproduction [link] ### Steps to reproduce 1. In `main.js`, invoke the module web worker script `worker.js` based on [the doc]([link]): ```js const worker = new Worker(new URL('worker.js', import.meta.url), { type: 'module'}) ``` 3. In the worker script `worker.js`, use a modern JS function, such as [`toSpliced`]([link]), only supported since Chrome 110: ```js const a = [0, 1, 2].toSpliced(0); ``` 4. Use the following vite configuration so that modern polyfill is auto tested: ```js import {…

### CASE-8754 · Uncaught SyntaxError: Unexpected token ?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 69, macos, vite
- **Signals**: 👍0 💬5 · closed · labels: invalid
- **Excerpt**: ### Describe the bug After upgrading from Vite 3.2.7 to 4.4.9, my production build is not working in old browsers, despite using vite legacy plugin. Reverting back to 3.2.7 fixes the issue, so the bug is somewhere in Vite v4. The error I get when I try to load an app in Chrome 69 for example results in this error: `Uncaught SyntaxError: Unexpected token ?` ### Reproduction [link] ### Steps to reproduce 1. Run `yarn install` 2. Run `yarn build` 3. Run `yarn preview` 4. Open the app in some old browser like Chrome 69 and observe DevTools Console ### System Info ```shell System: OS: macOS 13.2.1…

### CASE-8757 · TypeError: Cannot read properties of undefined (reading 'prototype')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬5 · closed · labels: invalid
- **Excerpt**: ### Describe the bug After built the project , I am getting the error in the console, TypeError: Cannot read properties of undefined (reading 'prototype') However, there is no error before build the project. ### Reproduction [link] ### Steps to reproduce npm install && npm run test:ui ### System Info ```shell System: OS: macOS 13.3.1 Shell: 5.9 - /bin/zsh Binaries: Node: 18.16.0 - /usr/local/bin/node npm: 9.6.4 - /usr/local/bin/npm pnpm: 8.2.0 - /usr/local/bin/pnpm Browsers: Chrome: 114.0.5735.198 Safari: 16.4 npmPackages: vite: ^4.4.0 => 4.4.2 vitest: ^0.33.0 => 0.33.0 ``` ### Used Package…

### CASE-8763 · HMR port config not respected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/
- **Signals**: 👍7 💬5 · closed · labels: p3-minor-bug/regression
- **Excerpt**: ### Describe the bug ``` server: { port: 4000, hmr: { port: 3001 }, hmr: { port: 3001, clientPort: 3001 }, ``` And several other config combinations did not work, (Unable to connect to websocket in Chrome/FF). However, using: ``` server: { port: 4000, hmr: { port: 4000 }, ``` Works fine. I'm assuming somewhere that port is not being respected. This occurred immediately following an upgrade from 4.1.1 to 4.3.1 ### Reproduction [link] ### Steps to reproduce Add ``` server: 4000, hmr: { port: 3001 }, ``` to a bare-bones config and WS will fail to connect. change to port to clientPort and match…

### CASE-8765 · Explicit URL Imports with relative path
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Hi there Feature: Explicit URL Imports ([link]) When I use the absolute path, all is well and working <img width="582" alt="image" src="[link]> But I have a problem with relative path <img width="474" alt="image" src="[link]> <img width="914" alt="image" src="[link]> ### Reproduction easy to reproduce ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.6 CPU: (10) arm64 Apple M1 Pro Memory: 107.14 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.14.0 - /usr/local/bin/node npm: 9.3.1 - /usr/local/bin/npm Browsers: Chrome:…

### CASE-8766 · vite auto convert unicode string
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 14, linux, vite
- **Signals**: 👍1 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug source code: ```javascript console.log('\xaa\xb5\xba\xc0-\xd6'); ``` outupt: ```javascript console.log("ªµºÀ-Ö"); ``` 1. rollup and esbuild will not do this 2. this convert is not safe. For example, in safari 14, new Regexp(unicodeString) [link] ### Reproduction [link] ### Steps to reproduce 1. open [link] 2. after `npm install`, run `vite build` ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 16.14.2 - /usr/local/bin/node Yarn: 1.22.19 -…

### CASE-8770 · Failed to bundle in lib modes with preserveModules and noExternal when module has no export name
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: electron
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug I'm trying to bundle node scripts under ssr mode. I need to use some dependency that use native node modules so we have to set `preserveModules` to preserve the use of `__dirname`. I also need to externalize node builtins and electron builtins. This setup will fail when I try to build when rollup reads a module that have no export name (just barely export function). The log stops at ``` node_modules/.pnpm/[email]/node_modules/yallist/iterator Cannot read properties of undefined (reading '0') error during build: TypeError: Cannot read properties of undefined (reading '0')…

### CASE-8771 · Vite crash because of RangeError: Invalid Websocket Frame 1006 WS_ERR_INVALID_CLOSE_CODE
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍5 💬5 · closed · labels: contribution welcome
- **Excerpt**: ### Describe the bug If the `ws` dependency module emits an error while HMR is running, it goes unhandled and causes Vite's node process to crash. ``` node:events:491 throw er; // Unhandled 'error' event ``` This particular `ws` throws after the computer goes to sleep and wakes up. Afaik, this is not reproducible via vite.new ### Reproduction [link] ### Steps to reproduce 1. Start Vite with HMR 2. Visit your localhost app (Chrome was used) 3. Put computer to sleep, wait a few seconds 4. Observe this on your page <img width="459" alt="image" src="[link]> <img width="929" alt="image"…

### CASE-8776 · Vite change the style order in production that cause the overwrite issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: feat: css/p3-minor-bug/inconsistency
- **Excerpt**: ### Describe the bug I am experiencing an issue with the Full calendar plugin in my Vuejs + Vite project where my custom styles are not being applied in production mode. This is due to Vite changing the order of the component's default styles and my custom styles, causing a conflict. ### Reproduction [link] ### Steps to reproduce Run the project in development yarn && yarn dev run the project in production yarn build && yarn preview ### System Info ```shell macOS: Ventura google chrome ``` ### Used Package Manager yarn ### Logs ## In Development Mode ![Screenshot 2023-01-20 at 12 23 52…

### CASE-8784 · Upgrading to vite 3.1.4 - Module path has been externalized for browser in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In a project I am currently using vite 2.9.15 and everything is working fine. When i upgraded to vite 3.1.4, I now get the following warning in Chrome: `browser-external:crypto:9 Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.randomBytes" in client code.` ![image]([link]) It seems to be coming from importing bcrypt in a file but why is it throwing this warning after upgrading to the new vite version. I have double checked this to make sure its the vite version causing issues by creating a new branch. Any advice for what you think…

### CASE-8785 · Build success, but run failed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug console: this.triggerElm.setAttribute is not a function This bug will cause some components on the page to fail to display, such as icon, such as el-dropdown ### Reproduction pnpm uninstall [email];pnpm install [email] ### System Info ```shell chrome: 105.0.5195.127 vite: 3.1.3 element-ui: 2.15.8 env: production module: el-dropdown ``` ### Used Package Manager pnpm ### Logs no error ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8787 · base设置完整URL并没有生效
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, react, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ### Reproduction none ### System Info ```shell System: OS: macOS 12.4 CPU: (4) x64 Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz Memory: 17.01 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.16.0 - ~/.nvm/versions/node/v16.16.0/bin/node Yarn: 1.22.15 - ~/.nvm/versions/node/v16.16.0/bin/yarn npm: 8.11.0 - ~/.nvm/versions/node/v16.16.0/bin/npm Browsers: Chrome: 105.0.5195.125 Safari: 15.5 npmPackages: @user/plugin-react: ^2.1.0 => 2.1.0 vite: ^3.1.0 => 3.1.3 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X]…

### CASE-8790 · "const" keyword is present in the polyfill.legacy build
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, safari, ios, android, svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/has workaround/plugin: legacy
- **Excerpt**: ### Describe the bug Im trying to transpile my svelte files to es5 target. While doing so im having "const" keyword in my polyfills-legacy.js. This is my vite.config.js and included the browserlist in package.json plugins: [ svelte({ configFile: './config/svelte.config.js' }), legacy({ ignoreBrowserslistConfig: true }) ], "browserslist": { "production": [ "chrome >= 38", "firefox >= 33", "safari >= 8", "IE 11", "iOS >= 7", "ChromeAndroid >= 38", "FirefoxAndroid >= 33" ], "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ] } <img width="1049"…

### CASE-8791 · export default will be change export
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, safari, macos, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug This is code <img width="349" alt="image" src="[link]> This is after vite build <img width="461" alt="image" src="[link]> I can not find `export default`, because I use `import HomeBanner from 'xxxxxxx'` ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5 CPU: (8) x64 Apple M1 Pro Memory: 20.71 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 14.19.1 - /usr/local/bin/node Yarn: 1.22.18 - /usr/local/bin/yarn npm: 8.13.2 - /opt/homebrew/bin/npm Browsers: Firefox: 102.0.1 Safari: 15.6 ``` ### Used Package Manager yarn ### Logs _No response_ ###…

### CASE-8793 · vite ssr - spaces in url leads to different req.pathname
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬5 · closed · labels: feat: ssr/p2-edge-case
- **Excerpt**: ### Describe the bug Making a request in SSR mode to `[link] leads to the req.originalUrl looking like `/indextest/dangiel1` but making a request to `[link] (note the %20 space) leads to: `/@user/__x00__/index%20test/dangiel1` ### Reproduction N/A ### System Info ```shell System: OS: macOS 12.4 CPU: (10) arm64 Apple M1 Max Memory: 954.67 MB / 64.00 GB Shell: 5.1.16 - /usr/local/bin/bash Binaries: Node: 17.9.0 - ~/.nvm/versions/node/v17.9.0/bin/node Yarn: 1.22.15 - ~/.nvm/versions/node/v17.9.0/bin/yarn npm: 8.5.5 - ~/.nvm/versions/node/v17.9.0/bin/npm Browsers: Chrome: 103.0.5060.134 Safari:…

### CASE-8796 · SSL protocol error when using '--host'
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, linux, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Create a new project using `npm create vite@user vite3test -- --template vue`. Running `npm run dev -- --host` and open the network link in the browser. Chrome reported `This site can’t provide a secure connection` with error code of `ERR_SSL_PROTOCOL_ERROR` ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.4 Manjaro Linux CPU: (2) x64 Intel(R) Core(TM) i5-5200U CPU @ 2.20GHz Memory: 2.07 GB / 4.79 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 18.4.0 - /run/user/1000/fnm_multishells/1747721_1657771034401/bin/node Yarn:…

### CASE-8798 · Base URL with custom protocol is prefixed with slash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron
- **Signals**: 👍0 💬5 · closed · labels: enhancement/p2-nice-to-have
- **Excerpt**: ### Describe the bug After setting custom protocol, built dist files have a leading slash in path. ``` export default defineConfig({ base: 'app://', }); ``` (my use-case for custom protocol is to load app in Electron). ### Reproduction [link] ### System Info ```shell Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 8.1.0 - C:\Program Files\nodejs\npm.CMD ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing…

### CASE-8799 · Can't set key prop within v-for loop in template
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Can't set key prop on sub component within v-for loop in template ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (12) x64 Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz Memory: 3.94 GB / 15.75 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.15 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 8.1.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.22000.120.0), Chromium (102.0.1245.30) Internet Explorer: 11.0.22000.120 ``` ### Used Package Manager npm ### Logs _No response_ ###…

### CASE-8800 · deployed on Android TV shows a white screen and cannot be operated!
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, android, android 9, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug vite 2.9.8 deployed on Android TV shows a white screen and cannot be operated normal browser works fine, add @user/plugin-legacy has no effect ### Reproduction [link] tool] ### System Info ```shell System: OS: Android TV (Android 9) Binaries: Node: 16.14.2 - ~/.nvm/versions/node/v16.14.2/bin/node Yarn: 1.22.18 - ~/.nvm/versions/node/v16.14.2/bin/yarn npm: 8.5.0 - ~/.nvm/versions/node/v16.14.2/bin/npm Browsers: unknown npmPackages: @user/plugin-vue: 2.3.1 vite: 2.9.8 ``` ### Used Package Manager yarn ### Logs ```shell import { defineConfig } from "vite"; import vue from…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8702 · TS support fails with incorrect browser import
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: For example, when you import a TS file into App.vue and access an exported member... ```html // App.vue <script lang="ts"> import { count } from "./foo" export default { data: () => ({ count }) } </script> ``` ... you get an `Failed to load module script` error: ![Bildschirmfoto 2020-05-06 um 14 04 58]([link]) `vite`/`esbuild` creates a `foo` resource without the `.js/.ts` extension. The JS file is also not accessible if you call it directly like `[link]>?t=<hash>`.

### CASE-8705 · Issue with tree-shaking in Vite 8.1.0 / rolldown >= 1.1.0 with complex module graph
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍6 💬5 · closed · labels: bug: upstream/has workaround/p3-minor-bug
- **Excerpt**: ### Describe the bug A Vite 8.1.x production build produces a bundle that throws at runtime: ``` Uncaught ReferenceError: Context is not defined. ``` Dev mode works correctly. In the bundle, the bug is caused by a reference to an undeclared variable: ```js //#region ../../node_modules/.pnpm/@[email][email]@[email]/node_modules/@user/icons/es/icons/index.js var init_icons$2 = __esmMin((() => { init_ArrowDownOutlined(); init_ArrowUpOutlined(); init_CloseOutlined(); init_CopyOutlined(); init_DeleteOutlined(); init_ExclamationCircleOutlined(); init_PlusCircleOutlined(); })); var init_es$4 =…

### CASE-8707 · [v8] The hook `generateBundle` returns code stripped of directives, comments and unused variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When a virtual module contains comments, directives, and unused variables, those are removed from the code that is available in the hook `generateBundle`. This is **a regression** compared to v7, and undocumented breaking change from the migration guide. At Astro, we rely on a top-level comment to use our head propagation strategy, however this breaks in v8 because the comment is stripped. Previous issue [link] tool][ref] ### Reproduction [link] ### Steps to reproduce - Checkout the repro - Checkout branch `bug/stripping-correct` - Run `node build.mjs` for single…

### CASE-8723 · Vite fails to parse worker options when they are stored in a variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ### Title: Vite fails to parse worker options when they are stored in a variable #### Description: When using Vite with the following code, an error occurs during the bundling process: ```js var worker; var workerOptions = { 'type': 'module', 'name': 'em-pthread', }; worker = new Worker(new URL('wasm.js', import.meta.url), workerOptions); PThread.unusedWorkers.push(worker); ``` The error message is: ``` [plugin:vite:worker-import-meta-url] Vite is unable to parse the worker options as the value is not static. To ignore this error, please use /* @user */ in the worker…

### CASE-8728 · Vite 5.4.0 env var fails when bundling Vite-bundled library
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍1 💬5 · closed · labels: p4-important/regression
- **Excerpt**: ### Describe the bug This was brought up at [link] tool][ref][ref] When a library uses Vite (library mode) to bundle and uses env var, the `const __vite_import_meta_env__ = {` may get included in the code. When that happens and we bundle that library in our app, we re-inject the variable declaration again here, which causes a runtime error: [link] tool]/blob/fcf50c2e881356ea0d725cc563722712a2bf5695/packages/vite/src/node/plugins/define.ts#L139-L148 ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell n/a ``` ### Used Package Manager npm ### Logs <details>…

### CASE-8734 · Exponential Backoff for Failed Pings
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: pending triage
- **Excerpt**: ### Description There was an issue ([ref]) for this created a while ago, but was closed in favor of skipping pinging when the tab is not shown. I believe that issue should not have been closed, because skipping pinging when the tab is not shown does not solve the problem entirely - when the tab is visible, it still causes the console to fill up, and the tab to start lagging, or it might even crash the tab/browser. Here are just some of the use cases where the tab remains visible: - "Emulate a focused page" is enabled in devtools - tab is open on 2nd monitor - tab is open and developer leaves…

### CASE-8747 · caching and serving a previous version
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Using svelte, `npm run dev` (vite), I stumbled on a weird case where I have an error about a variable I used (hierarchy2), that doesn't exist anymore in App.svelte since a few version iterations: ![image]([link] tool]/assets/65325/3fa1b6c2-2bf2-476b-87b1-4adbac59ce4e) ![image]([link] tool]/assets/65325/2bf02e82-3abf-4502-bf0e-129d3cf91af6) I tried with another fresh browser and have the same issue, so it's not the browser cache. I also tried by changing the file name (App.svelte) to something else and call it in main.ts, it didn't fix it. An also tried `vite --force`,…

### CASE-8761 · Vite watcher crashing
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, vue
- **Signals**: 👍1 💬5 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug The following issue is happening on a large project I migrated from vue-cli to Vite. However, to eliminate as many variables as possible, I was able to reproduce the exact issue with a newly scaffolded project using the `npm create vite@user` command. The watcher process started by `vite build --watch` fails periodically. Issue [ref] is exactly what we are seeing happen. If I add a folder to my C:\ drive (or add files to any folder within the C:\ drive), the watcher fails. [ref] is closed and was supposedly fixed by [ref], but we are still seeing this happen, even with a…

### CASE-8774 · Dynamic import fails in route with brackets or parenthesis
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍10 💬5 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug This bug was initially reported to Sveltekit ([link]), but it likely is a bug with Vite, related to [link] tool][ref], but affecting direct imports rather than glob imports. Dynamically importing a module in a route with [parameters] or (group), for example: ```js // src/routes/[foo]/+page.js export async load = ({ params }) => (await import(`./index.${params.foo}.js`).data; // src/routes/(foo)/bar/+page.js export async load = ({ url }) => (await import(`./index.${url.params.get('foo'}.js`).data; ``` Fails with the following error: ``` Error: Unknown variable dynamic…

### CASE-8779 · multiple vite bundle import in one page throw:Uncaught SyntaxError: Identifier 'React' has already been declared
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug when multiple vite bundle import in one page will throw " Identifier 'Fa' has already been declared " in console. ![image]([link]) bundle 1 fold level 1 screenshot: ![image]([link]) the bundle 2 fold level 1 screenshot: ![image]([link]) ![image]([link]) i have already to try： * set minify with false in one of bunde * switch minify to terser and disable mangle and compress it's still output some mangled variable was decleared. when set both bundle with minify false it output: ![image]([link]) my vite config is ```js import { defineConfig } from 'vite'; import react from…

### CASE-8783 · env file load incorrect
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: documentation
- **Excerpt**: ### Describe the bug I have a .env file looks like this: ``` APP_SIGN_SALT="PICUE[ref]$LCDG56h$LBNOD3*1H6ER4Y#DN12G6Z3J" ``` But in my app, the env variable became this: ```ts console.log(import.meta.env.APP_SIGN_SALT); // =>PICUE[ref]*1H6ER4Y#DN12G6Z3J ``` In [email], the env variable is correct: ```ts require('dotenv').config(); console.log(process.env.APP_SIGN_SALT); // => PICUE[ref]$LCDG56h$LBNOD3*1H6ER4Y#DN12G6Z3J ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.3.1 CPU: (4) x64 Intel(R) Core(TM) i5-7500 CPU @ 3.40GHz Memory:…

### CASE-8795 · "Building for Production" docs "Library Mode" section mildly broken
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: documentation/contribution welcome
- **Excerpt**: ### Describe the bug Based on; * [link] * [link] tool]/blame/5ea70b3c3cd5f208471338c5832a3eba1aafb01d/docs/guide/build.md#L117-L185 ```sh npm create vite@user myapp --template vanilla cd myapp echo "import { resolve } from 'path' import { defineConfig } from 'vite' export default defineConfig({ build: { lib: { entry: resolve(__dirname, 'lib/main.js'), name: 'MyLib', // the proper extensions will be added fileName: 'my-lib' }, rollupOptions: { // make sure to externalize deps that shouldn't be bundled // into your library external: ['vue'], output: { // Provide global variables to use in the…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8703 · experimental.bundledDev + build.rolldownOptions.input causes 404 at [link] in Vite 8.1
- **Principles**: P-G4, P-E3 · **Env**: windows, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage/feat: bundled-dev
- **Excerpt**: ### Describe the bug Dev server returns 404 when experimental.bundledDev is enabled with a custom build.rolldownOptions.input. ```ts import { defineConfig } from 'vite' import vue from '@user/plugin-vue' import { join } from 'path' // [link] export default defineConfig({ plugins: [vue()], build: { rolldownOptions: { input: { main: join(process.cwd(), './index-export.html') } } }, experimental: { bundledDev: true } }) ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 11 10.0.26200 CPU: (20) x64 12th Gen Intel(R) Core(TM) i7-12700H…

### CASE-8737 · Not able to inject the same CSS file
- **Principles**: P-G4, P-E3 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I change a CSS file dynamically and imports it. If the file name is different, it imports and injects its content to the page. However when I select the previously selected value, it doesn't inject it and style doesn't change. When a CSS is imported multiple times with the same path, Vite assumes it hasn't changed and doesn't re-import it. This can be to improve performance, but in this case, it prevents dynamic CSS reloading. ### Reproduction [link] ### Steps to reproduce I use SvelteKit/Svelte:Runes on Vite: ``` <script lang="ts"> // more lines // import all css styles…

### CASE-8744 · Unexpected warning "(!) Could not auto-determine entry point" [5.1 beta]
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug If your vite config is using `build.lib.entry` instead of `build.rollupOptions.input`, then you recieve a spurious warning when running `vite build` as follows: ``` (!) Could not auto-determine entry point from rollupOptions or html files and there are no explicit optimizeDeps.include patterns. Skipping dependency pre-bundling. ``` This is because the code is explicitly checking for [`config.build.rollupOptions.input`]([link] tool]/blob/6c4bf266a0bcae8512f6daf99dff57a73ae7bcf6/packages/vite/src/node/optimizer/scan.ts#L173) but that appears to be undefined at this point…

### CASE-8777 · Development server seems to serve index.html at root instead of subdirectory index.html
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug I am creating a multipage web-site with a vite config of: ``` import { defineConfig } from 'vite'; import { resolve } from 'path'; import svgLoader from 'vite-svg-loader'; const root = resolve(__dirname, 'src'); const outDir = resolve(__dirname, 'dist'); export default defineConfig({ root: root, build: { outDir, emptyOutDir: true, rollupOptions: { input: { main: resolve(root, 'index.html'), lessons: resolve(root, 'lessons', 'index.html'), locations: resolve(root, 'locations', 'index.html'), schedule: resolve(root, 'schedule', 'index.html'), }, }, }, plugins:…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8704 · bundledDev: server-side API to map module id to served URL (needed for SSR modulepreload/hydration hints)
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬5 · open · labels: feat: bundled-dev
- **Excerpt**: ### Description SSR frameworks that stream HTML serialize **per-module URLs into the document itself**, ahead of any client code: - `<link rel="modulepreload" href="...">` hints, so the browser fetches lazy route chunks in parallel with the entry bundle during HTML parse, and - a hydration module map (e.g. `_$HY.r["…_assets"] = { hydrationKey: url }`) written by inline `<script>` chunks in the stream, which the client runtime `import()`s **before** resuming server-rendered DOM. Concrete case: SolidStart on solid-js 2.0 / vite-plugin-solid. In (unbundled) dev, the framework's asset resolver…

### CASE-8719 · Vite 6: module.ssrModule is empty for styles modules during SSR in development
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug With Vite 5, we were able to inject in the SSR response the styles in the `<head>` by using the module graph. ```ts const matchedComponent = ...; const modules = vite.moduleGraph.getModulesByFile(matchedComponent); modules.forEach((mod) => { if (mod.file?.endsWith(".scss") || mod.file?.endsWith(".css") || mod.id?.includes("vue&type=style")) { VITE 5: mod.ssrModule.default; // COMPILED CSS of the module VITE 6: mod.ssrModule // is an empty object {} } }); ``` How can I get the mod.ssrModule to be loaded in Vite 6? ### Reproduction **Vite 6:** [link] ``` Processing module:…

### CASE-8741 · Style injection conflicts with SSR hydration on document
- **Principles**: P-F4 · **Env**: vite, react
- **Signals**: 👍1 💬5 · open · labels: pending triage
- **Excerpt**: ### Describe the bug tl;dr: vite dev injected `<style>` tags maybe removed by preact's hydration on `<html>` element. Actually my SSR framework renders the whole `<html>` tag and I was trying to figure out how to deal with the styles in dev server. Suppose I have a project like this: ```tsx // App.tsx import "./app.css"; // any styles export function App() { return <html> <head> ... </head> <body> ... </body> </html> } ``` ```tsx // entry.tsx import { render } from 'preact'; import { App } from './App.tsx'; render(<App />, document, document.documentElement); ``` And in server side, I just…

### CASE-8745 · Default exports of some libs causing class/function errors
- **Principles**: P-F4 · **Env**: linux, vite, react
- **Signals**: 👍1 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm not sure if this is a Vite error specifically, but I've been seeing the same error arise from some CJS libs. This occurs in SSR mode. `Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.` It occurs from react-slick - [link] and @user -[link] You can get around the issue by dynamically importing the library to only run client-side, but that's not an optimal solution. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined…

### CASE-8755 · [SSR] Vite fails to process CJS npm packages
- **Principles**: P-F4 · **Env**: linux, vite, react
- **Signals**: 👍5 💬5 · open · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug In the context of SSR, Vite fails to process CJS npm packages. The linked reproduction is minimal and shows the issue by adding `react` to `ssr.noExternal`. Another reproduction showcasing that this issue is a blocker for users: [brillout/vite-ssr-preact-mui]([link]). In general, it often happens that a CJS package needs to be processed by Vite; this issue is a major blocker. ### Reproduction [link] ### Steps to reproduce See the reproduction's `README.md`. ### System Info ```shell System: OS: Linux 4.14 Debian GNU/Linux 11 (bullseye) 11 (bullseye) CPU: (2) x64 Intel(R)…

### CASE-8756 · SSR not working with cjs modules
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I try to build ssr project, but cant to build production with cjs modules And simple demo well works with hack ( ssr: { noExternal: mode === "production" ? ["react-copy-to-clipboard", "date-fns"] : [], },), but crash with any error (filename.js not existed, but it already) ### Reproduction [link] ### Steps to reproduce yarn dev - failed yarn run build yarn run prod - failed (with noExternal its ok, but dev failed) ### System Info ```shell * ``` ### Used Package Manager yarn ### Logs * ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8760 · Unknown file extension .ts when importing workspace typescript package
- **Principles**: P-F4 · **Env**: typescript, svelte, vite, desktop
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug This only happens when using ssr (sveltekit) but it's a vite error, anytime I visit a page that uses an import from any of my workspace packages I get this error ``` Internal server error: Unknown file extension ".ts" for /Users/john/Desktop/projects/project-name/packages/utils/src/index.ts ``` I am getting type completion so I know the package is loading correctly, I am not doing any transpiling on the packages themselevs (according to [this]([link]) turborepo guide what's weird is that when I tried reproducing it with an exact copy it worked, this also only started…

### CASE-8788 · Import.meta error in vite 3.1.3
- **Principles**: P-F4 · **Env**: vite, react, typescript
- **Signals**: 👍1 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug There appears to be a bug in vite **3.1.3**: when using vite with react and typescript (using a package called `vite-plugin-ssr`) I get errors beginning with: ` [vite] warning: "import.meta" is not available in the configured target environment ("ES2017") and will be empty` If I change the version to` vite 3.0.9`, the error goes away. The issue is with the vite version rather than the `vite-plugin-ssr` package, as I understood it. Here is a [reproduction:]([link]) . tsconfig has` "module": "ES2020" `and: ``` "ts-node": { "transpileOnly": true, "compilerOptions": {…

### CASE-8797 · Support wasm in SSR
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍15 💬5 · closed · labels: enhancement/contribution welcome/has workaround/feat: ssr/feat: wasm
- **Excerpt**: ### Description Currently, the wasm plugin usually get the `.wasm` file using `fetch`. This approach doesn't work in SSR. Even if `fetch` were available, fetching a relative path would not work. This results in errors such as `ERR_INVALID_URL` when in SSR. ### Suggested solution By adding an extra if cause to the [wasm helper]([link] tool]/blob/8970f16bfcd76606825551595f9b3a699517fd25/packages/vite/src/node/plugins/wasm.ts#L7), we could check the `import.meta.env.SSR` to see if we're in SSR mode. If we are, then we could load the file from disk instead of fetching it over the network.…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8706 · vite 8.0.13 regression in dev mode with `bundledDev:true` and react lazy loading with `resolve.alias`
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍1 💬5 · closed · labels: bug: upstream/p2-edge-case/feat: bundled-dev
- **Excerpt**: ### Describe the bug This appears to be a regression in Vite after `8.0.10`. When using `vite` with `experimental.bundledDev: true`, lazy loading in React can fail in dev mode. The same reproduction works correctly with Vite `8.0.10`, but fails with Vite `8.0.13`. `[email]` example: [link] With `[email]`, all lazy imports fail on the first click, but work correctly after a page refresh: [link] If I disable `experimental.bundledDev` in `[email]`, everything works correctly. ### Reproduction [link] ### Steps to reproduce 1. `npm run dev` 2. All lazy loaded pages fail on first load in dev mode…

### CASE-8713 · plugin-legacy make env vars error
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/plugin: legacy
- **Excerpt**: ### Describe the bug such as pic， it will cause: `.env` vars in `process.env`, `.env.development` can't override vars. <img width="1650" height="961" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell no ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [x] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [x] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [x] Read the [docs]([link]). - [x] Check that there isn't [already an issue]([link] tool]/issues)…

### CASE-8716 · "react-art" build with vite6 cause error
- **Principles**: P-A3, P-H1 · **Env**: macos, react, vite
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/p2-edge-case/feat: commonjs
- **Excerpt**: ### Describe the bug 当项目中引入react-art这个包时，dev下是正常的，但是当执行build之后，预览浏览器控制台会报错； <img width="570" alt="Image" src="[link] /> 已经尝试执行过： 1. 使用不同的react-art版本，17.x ～ 19.x，均有问题 2. 使用vite5.x版本是正常的，升级到6.x后出现了此问题 ### Reproduction [link] ### Steps to reproduce 1.执行 npm run biuld 2.执行 npm run preview 3.在浏览器访问并打开控制台 4.可以看到报错： <img width="570" alt="Image" src="[link] /> ### System Info ```shell System: OS: macOS 15.3.2 CPU: (16) arm64 Apple M4 Max Memory: 26.08 GB / 128.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.14.0 - /usr/local/bin/node Yarn: 1.22.22 - /usr/local/bin/yarn npm: 10.9.2 - /usr/local/bin/npm…

### CASE-8721 · bug creating react app
- **Principles**: P-A3, P-H1 · **Env**: windows, react, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug ![image]([link]) the problem is this is a react (javascript) app if i rename the src/main.jsx to src/main.tsx works ### Reproduction no one ### Steps to reproduce $ yarn create vite my-react-app --template react $ cd my-react-app $ yarn install $ yarn run dev ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (12) x64 12th Gen Intel(R) Core(TM) i5-12400F Memory: 14.52 GB / 31.82 GB Binaries: Node: 18.20.3 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.22 - C:\Program Files\nodejs\yarn.CMD npm: 10.7.0 - C:\Program Files\nodejs\npm.CMD pnpm: 9.3.0 - C:\Program…

### CASE-8725 · Vite ignores `useDefineForClassFields` in nested tsconfigs when using ts project references
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/has workaround/p3-minor-bug
- **Excerpt**: ### Describe the bug When I use `react-ts` template and try to use `mobx` inside, then I get wrong behavior because [mobx require ts compiler option `"useDefineForClassFields": true`]([link]), but `vite` loose this optin when it is defined in referenced tsconfig file. It is `vite` bug, not `tsc`. To demonstrate this I remove options `"noEmit": true` and `"allowImportingTsExtensions": true` from `tsconfig.app.json` and `tsconfig.node.json` and run `npm run build`. For this setup I will see two result JS files (compiled by `tsc` and by `vite`). ![image]([link]) Similar errors: 1. [link]…

### CASE-8727 · When importing wrong local files shows no error.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug First, I feel like it should be a known issue, but I can't find it anywhere in issues or SO etc. but i refuse to believe I'm the only one who bring this app. When I change import file I expect IDE to highlight the error - because the file does not exist. but instead there is no error about import. it reproduces with all files except ts, tsx. Reproduce: 1) go here - [link] 2) check 3 and 4 lines. <img width="667" alt="image" src="[link]> I think it's related to this file `/node_modules/vite/client.d.ts`. in there are declared modules with specific files. maybe it should be…

### CASE-8736 · Demonstration of HMR not working in Docker
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug - Create a new vite project - Add [.devcontainer]([link]) files - Reload in container - run `npx remix vite:dev` - Edit `_index.tsx` Expected - File change to be detected - HMR to send update - Browser to show edits Actual - Nothing Provides Minimal repro for [ref] ### Video Demonstration [link] tool]/assets/2856501/629b4c4f-fa96-4ecf-93e0-9140d0e1110a I show that using polling restores desired effects. Although I don't know if this is expected best solution because of some limitation with Docker file mounting OR if there is a more optimal solution. I suspect there could…

### CASE-8739 · empty enum got undefined
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug I am using typescript module augmentation for enum, but got error if enum is empty at the beginning (enum would be undefined) <img width="546" alt="image" src="[link] tool]/assets/22314182/9c1a8a0e-9e63-4316-957b-fa5d32045fad"> ### Reproduction [link] ### Steps to reproduce just check reproduction link, enum would be undefined after compilation <img width="299" alt="image" src="[link] tool]/assets/22314182/6aac8285-5489-4ffc-941b-2b5a65bc23bb"> ### System Info ```shell not so important ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow…

### CASE-8740 · React + Vite: Problem with treeshaking
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍1 💬5 · closed · labels: invalid
- **Excerpt**: ### Describe the bug #### Problem with Tree shaking - After running the command `npm run build` the build files i noticed that some unused components are getting imported in the bundle. - Which causes increase in the bundle size. ### Reproduction [link] ### Steps to reproduce Run `npm install` followed by `npm run build` - Inspect the build only `SimpleComponent` is used in the app so build should include `SimpleComponent` only - Other unused components are also getting bundled in the build ![image]([link] tool]/assets/70106102/f1697952-eb6f-41bf-b399-90b003054226) - Is it expected then why…

### CASE-8742 · Error Vite creating a vanilla typescript project with pnpm
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I am creating a project with pnpm of vanilla typescript, but when i execute pnpm install after creating the project, i have this error: ![image]([link] tool]/assets/93671143/04083e09-8388-44db-ba8c-16ef828470e5) My node js version is 21.5.0 ### Reproduction [link] ### Steps to reproduce Install node 21.5.0 Run "pnpm create vite" Select vanilla typescript cd /name_project pnpm install ### System Info ```shell npx envinfo --system --npmPackages '{vite,@user/*,rollup}' --binaries --browsers Need to install the following packages: [email] Ok to proceed? (y) y System: OS:…

### CASE-8743 · `base` option is not working on `<audio>` & `<video>` tag in `index.html`
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug The document here [link] says: > JS-imported asset URLs, CSS url() references, and **asset** references in your .html files are all automatically adjusted to respect this option during build. It's working for js/css/images... but not for audio/video. ### Reproduction [link] ### Steps to reproduce 1. run `pnpm i` 2. run `pnpm build` 3. see `./dist/index.html` ### System Info ```shell System: OS: macOS 14.2.1 CPU: (8) arm64 Apple M2 Memory: 296.02 MB / 16.00 GB Shell: 5.9 - /bin/zsh npmPackages: vite: ^5.0.12 => 5.0.12 ``` ### Used Package Manager pnpm ### Logs _No…

### CASE-8748 · "ReferenceError: document is not defined" in worker
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug I am getting a `document is not defined` error from a service worker once the app is built - this does not happen in development. The error is as follows: ``` Uncaught ReferenceError: document is not defined at stakers-73lEuv0j.js:1:1406 at stakers-73lEuv0j.js:17:405829 ``` <img width="752" alt="Screenshot 2023-12-11 at 09 47 12" src="[link] tool]/assets/13929023/64d96e09-06bb-471e-9bff-c2396c72b99b"> ### Reproduction Deployment with bug: [link] ### Steps to reproduce - Go to [link] and clone the project. - Run `yarn && yarn build && yarn preview`. ### System Info…

### CASE-8749 · bun's `.env` automatic loading feature doesn't work well with Vite's one
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: wontfix
- **Excerpt**: ### Describe the bug I am using the [`build`]([link]) function to programmatically build my vite project. I have a `build.ts` file that contains the `build({ ... })` function invocation. I've set the `mode` to `'production'`, however my `.env.production` is not being recognized and vite is incorrectly using the `.env.local` file. I made a repro repository which contains two env files: ![image]([link] tool]/assets/10621548/c872795c-8179-41ff-b2a2-7e0e5a9b586f) When I run the build via `bun run build.ts` (could have also have been via `ts-node`), and I search for `[link] this value is not…

### CASE-8752 · [cli] `npm` Cannot pass in `--template` parameter
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug I tried using`npm create vite@user my-vue-app -- --template vue`. It is reasonable to execute and create projects directly. Actually, it is necessary to select the template again. -- But Yarn and PNPM do not have this issue, I don't know if this is an incompatibility issue with the code itself or an error with NPM. And there are only issues with Windows, and there are no issues with the Mac. ### Reproduction none ### Steps to reproduce ![image]([link] tool]/assets/81673017/0d64a366-5933-4da4-8da8-b32ed8d0af20) ### System Info ```shell System: OS: Windows 10 10.0.22621…

### CASE-8758 · .env文件不支持读取环境变量
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug 形如VITE_APP_NAME=${npm_package_name} 这种的变量会直接字符串替换 ### Reproduction [link] ### Steps to reproduce 这是我本地的.env文件 ![image]([link] tool]/assets/17741492/dcf37f11-d21d-4f9c-95ea-1f398dc3e224) 这是我在node_modules中解析env文件的地方加的日志输出 ![image]([link] tool]/assets/17741492/7ca0ab98-5d94-4d7a-b03e-5a55d107a43d) ![image]([link] tool]/assets/17741492/a91689f0-65c9-43e9-b6a1-954c57d9d9d2) ### System Info ```shell System: OS: macOS 12.4 CPU: (8) arm64 Apple M1 Memory: 438.11 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.17.1 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn…

### CASE-8759 · Vite forces refresh on ANY file change when negative glob paths are used
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍3 💬5 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug After using the following piece of code ```js const components = { ...import.meta.glob(['./components/*.vue', '!./components/*.lazy.vue'], { eager: true, import: 'default' }), ...import.meta.glob(['./components/*.lazy.vue'], { eager: false, import: 'default' }) }; for (const path in components) { Vue.component(path.split('/').pop().split('.').shift(), components[path]) } ``` to automatically import vue files and lazy load them if it contains lazy in the file name we noticed Vite would refresh the page when ANY files are created, removed or moved. In this case the file…

### CASE-8762 · `importAnalysisBuild.ts` injects same CSS styles multiple times
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍0 💬5 · closed · labels: p3-minor-bug
- **Excerpt**: ### Expected Hydrating a React app, server side rendered through Puppeteer, I expect that CSS styles already injected inside the `index.html` file, are not injected a second time at runtime. ### Actual The `preload()` function from the [`packages/vite/src/node/plugins/importAnalysisBuild.ts`]([link] tool]/blob/9a7ec986257c640001649b3925af79ee99bac86a/packages/vite/src/node/plugins/importAnalysisBuild.ts) file is failing detecting already injected stylesheets, and injects them a second time. A picture is worth a thousand words. <img width="800" alt="build_mode" src="[link]…

### CASE-8764 · "Maximum call stack size exceeded" error on build a lot images
- **Principles**: P-A3, P-H1 · **Env**: linux, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug To build a lot images will got "Maximum call stack size exceeded". ### Reproduction [link] ### Steps to reproduce 1. Toggle the last comment of the code 2. Run `vite build` 3. Build fail and get `Maximum call stack size exceeded` ### System Info ```shell System: OS: Linux 5.0 Binaries: Node: 16.14.2 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 7.17.0 - /usr/local/bin/npm npmPackages: @user/plugin-vue: ^4.0.0 => 4.1.0 vite: ^4.3.0-beta.2 => 4.3.0-beta.8 * This info from stackblitz * ``` ### Used Package Manager pnpm ### Logs ```shell ❯ vite build vite…

### CASE-8768 · Import files using alias `~` formatError
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Default alias is `@`, But using `~` Error Related links [link] ![image]([link]) ### Reproduction [link] ### Steps to reproduce npm install npm run dev **Involve files:** _vite.config.ts sconfig.json App.vue_ ### System Info ```shell Vite@user Stackblitz@user ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link]…

### CASE-8769 · Assets Not Loaded with Backend Integration
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hi! I've created a basic backend integration setup. The production build is working. However during development, images in App.tsx aren't working. They're being fetched from the current port (8000), where they don't exist. `[link] `[link] For the Vite logo, the src is set to `dist/vite.svg` to make this work for production. I can't tell if this is a bug or how this would be solved with config. This bug was reported earlier here by @user and @user [[link] tool][ref]](in this issue), but I could not find an answer on how to actually resolve this problem. ### Reproduction…

### CASE-8772 · The requested module '/node_modules/.vite/deps/vue.js?v=dba27df3' does not provide an export named 'default'
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce pnpm build pnpm dev ### System Info ```shell "vite": "^4.0.0", ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a…

### CASE-8773 · Dependencies assets are not include on the application assets
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open · labels: pending triage/has workaround/feat: web workers/feat: library mode
- **Excerpt**: ### Describe the bug Hi, I have a library which includes a worker, and there's no problem building this library. An index.mjs and assets folder containing the worker are created, everything looks fine. However, when I'm importing this library in my application, the worker isn't added to the app's assets, both in dev and build. If I copy/paste this worker myself in the app's assets folder, then everything is working fine. The same happens with other types of assets such as images. I would greatly appreciate any assistance in resolving this issue. Thank you, ### Reproduction [link] ### Steps to…

### CASE-8780 · "Maximum call stack size exceeded" error on calling the Stylus mixin from the library while without Vite working fine
- **Principles**: P-A3, P-H1 · **Env**: vite, webpack
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug Trying to use the mixin from the library: ``` <style lang="stylus" scoped> @user "../node_modules/@user/frontend/Functionality.styl" .Test Paddings({ left: 1px, right: 2px }) </style> ``` Got Vite error: ``` Maximum call stack size exceeded ``` ![image]([link]) Seems like the problem with the [library]([link]) but without Vite (with plain Stylus) everything works all right what I'll prove in the reproduction (also, working fine with Webpack, but I will no prove it in the reproduction). ### Reproduction [link] ### Steps to reproduce See the README.md of the reproduction…

### CASE-8782 · Vite 3.x HMR causes full page reload if a symlink is in the path
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I have a Vite setup that worked as expected for HMR using Vite 2.x, then I updated it to Vite 3, and I've noticed that while changes to any JavaScript works properly in terms of HMR changes, such as this file: <[link]> ...however if I make a change to the Vue component that JavaScript loads: <[link]> ...it successfully HMR's the changes, but then the full page is reloaded as well. I can see the request Is this a known issue with Vite 3.x? I'm running the latest release, Vite 3.1.8, full setup is here: <[link]> ### Video [link] ### Resolution: So here's the issue... I have…

### CASE-8786 · Inconsistent asset paths between `dev` and `build` when using `base`
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍9 💬5 · open · labels: feat: html/p3-minor-bug/inconsistency
- **Excerpt**: ### Describe the bug ### Steps to reproduce 1. Go to [link] 2. Run `npm run build && npm run preview` 3. Check path for `href` attribute: ```html <head> ... <link rel="icon" type="image/svg+xml" href="/admin/vite.svg"> <link rel="manifest" href="/manifest.json"> 👈✅ ... </head> ``` 4. Run `npm run dev` 5. Check path for `href` attribute: ```html <head> ... <link rel="icon" type="image/svg+xml" href="/admin/vite.svg"> <link rel="manifest" href="/admin/manifest.json"> 👈❌ ... </head> ``` In the example I'd expect asset paths in `index.html` to behave the same in development as when building for…

### CASE-8794 · Cypress component test produces "@user/plugin-react can't detect preamble. Something is wrong"
- **Principles**: P-A3, P-H1 · **Env**: macos, react, vite
- **Signals**: 👍1 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I maintain an app skeleton with Vite, React, and optional Cypress support. Since the upgrade to Vite3, I get the "@user/plugin-react can't detect preamble. Something is wrong" failure message when running the Cypress component tests. It used to work fine with Vite2. - Working solution with Vite2: [link] - Failing solution with Vite3: [link] <img width="1792" alt="Screenshot 2022-07-25 at 13 58 58" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.4 CPU: (4) x64 Intel(R) Core(TM) i5-7267U CPU @ 3.10GHz Memory: 281.67 MB / 16.00 GB Shell:…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8708 · [v8] Dependency optimization causes incorrect execution order of echarts internal methods (works in v5)
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍1 💬5 · closed · labels: bug: upstream/has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug When using Vite 8, executing: import * as echarts from 'echarts'; import 'echarts/theme/v5.js'; throws error: Uncaught TypeError: Cannot read properties of undefined (reading 'type'). Everything works fine with [email] Vite 5: In the dependency optimization result, the init_install method in node_modules/echarts/lib/component/dataset/install executes before the install method — behavior is correct. Vite 8: In the dependency optimization result, when the install method executes, the init_install method has not yet executed, causing the error. ### Reproduction [link] ###…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8710 · [Vite 8] Rolldown `transform.inject` differences between build and serve mode
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍4 💬5 · open · labels: pending triage/clarity: high
- **Excerpt**: ### Describe the bug When trying to use Rolldown `transform.inject` option to replace globals like `Buffer`, there is a difference in behavior between build and serve mode when using middleware mode. Not sure if it relates to some other environments but the same configuration worked in every combination with Vite 7 and `@user/plugin-inject`. ### Reproduction [link] ### Steps to reproduce 1. Run `npm install` 2. Run `npm run build && npm run preview` 3. Observe that reference to `Buffer` from `entry-client.js` is visible in console log 4. Run `npm run dev` 5. **App crashes with error `Uncaught…

### CASE-8711 · Vite-plugin-legacy default browserslist query includes ie11 in target
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I might be wrong about this, but I believe the intention doesn't match the browserslist query used for the default target for vite-plugin-legacy. I suspect that the default wants no dead browsers at all, but the current query is grouping `not dead` with `last 2 versions`. This results in ie11 (@user.36%) being included in the targets which is probably transforming and polyfilling a lot more than expected out of the gate. This will solve itself pretty soon - ie11 is dancing around 0.3%, but we should probably be intentional about it? tldr; - current: [`last 2 versions and…

### CASE-8712 · `.cts` files are not transpiled by esbuild plugin in SSR mode
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: typescript, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When dynamically importing a `.cts` file containing TypeScript-specific syntax in SSR mode, Vite fails to transpile it with esbuild and passes it directly to Rollup, causing a parse error. The issue is in `packages/vite/src/node/plugins/esbuild.ts`: The `esbuildPlugin` filter: ```typescript const filter = createFilter(include || /\.(m?ts|[jt]sx)$/, exclude || /\.js$/) ``` This regex `/\.(m?ts|[jt]sx)$/` matches `.ts`, `.mts`, `.tsx`, `.jsx` but **not `.cts`**. However, `transformWithEsbuild` already handles `.cts` correctly: ```typescript if (ext === 'cjs' || ext ===…

### CASE-8715 · `meta` is missing from `this.getModuleInfo` during rebuilds in `build --watch`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug according to [link] > meta itself should not be overwritten, but it is ok to mutate its properties at any time to store meta information about a module. The advantage of doing this instead of keeping state in a plugin is that meta is persisted to and restored from the cache if it is used, e.g. when using watch mode from the CLI. so returning `meta` from a transform hook for an id one can expect it to be available for the remainder of `build --watch` running. but if you check out the 2 plugins in this vite config [link] and follow the reproduction steps, its not the case.…

### CASE-8717 · 🚨 [REGRESSION][6.0.11 -> 6.1.0] Building with Web Worker fails
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: p3-minor-bug/regression/feat: web workers
- **Excerpt**: ### Describe the bug This used to build successfully in version `6.0.11`. Started failing in `6.1.0`. Code: ```ts const worker = new Worker(new URL('./worker', import.meta.url)); ``` Build: ```shell vite build ✓ 30 modules transformed. x Build failed in 136ms error during build: [vite:worker-import-meta-url] Expected ',', got ':' file: /home/nonroot/app/browser/src/worker/singleton.ts at getRollupError (file:///home/nonroot/app/browser/node_modules/rollup/dist/es/shared/parseAst.js:397:41) at convertProgram…

### CASE-8720 · json/svg/others? import does not work when dev server is behind a proxy
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I have a react/typescript app running under the vite dev server. This dev server is running behind a reverse proxy. When doing `import data from "./data.json"` I get error: `Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.` Observationally from the network console, I can see that `data.json` is being loaded by the browser, but it is raw json, not the transformed to javascript code that this import should usually…

### CASE-8722 · Vite 6 PWA build doesn't seem to resolve the correct file
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I've tried to upgrade from v5 to v6, but for some reason, the PWA build seems to not quite do what it did before. This is the output for v6 in the repro repository ``` > [email] build /Users/jacquesg/github/sw-repro > tsc && vite build vite v6.0.6 building for production... ✓ 35 modules transformed. dist/manifest.webmanifest 0.47 kB dist/index.html 0.70 kB │ gzip: 0.38 kB dist/assets/react-CHdo91hT.svg 4.13 kB │ gzip: 2.05 kB dist/assets/index-BtyAWewE.css 1.79 kB │ gzip: 0.86 kB dist/assets/workbox-window.prod.es5-B9K5rw8f.js 5.72 kB │ gzip: 2.35 kB…

### CASE-8724 · Private field transform error in production mode
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug The following code does not run correctly in production mode: ```ts const state = () => {}; Object.setPrototypeOf(state, null); class A { #state = state; render = () => { this.#state(); return 'Normal'; }; } document.body.innerHTML = new A().render(); ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.2.3 -…

### CASE-8729 · [vite:build-import-analysis] Cannot read properties of undefined (reading 'forEach')
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I added web workers to my react-vite project and when I try to build I get this error: ``` $ npm run build > [email] build > tsc && vite build vite v4.5.3 building for production... ✓ 1037 modules transformed. The emitted file "assets/purify.es-f1fd0f50.js" overwrites a previously emitted file of the same name. The emitted file "assets/html2canvas.esm-e0a7d97b.js" overwrites a previously emitted file of the same name. [vite:build-import-analysis] Cannot read properties of undefined (reading 'forEach') ✓ built in 17.41s error during build: TypeError: Cannot read properties…

### CASE-8733 · `url()` in a CSS file imported by `@user` is not resolved correctly when using lightningcss
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: feat: css/has workaround/p3-minor-bug
- **Excerpt**: ### Describe the bug `url()` inside a CSS file that is imported from a CSS file by `@user` is not resolved correctly when using `css.transformer: 'lightningcss'`. The same source code works with `css.transformer: 'postcss'`. <details> <summary>original description</summary> Hello. When a CSS file is imported with .css?inline, it is correctly minified and transformed with `css.transformer=postcss` and `build.cssMinify=esbuild`. When I change to `build.cssMinify=lightningcss`, the build process still works correctly. 👍 However, when I change to `css.transformer=lightningcss` in vite.config.js,…

### CASE-8746 · [vite/plugin] The "attributes" property of ModuleInfo is not supported.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, vite
- **Signals**: 👍2 💬5 · open · labels: pending triage/rollup plugin compat
- **Excerpt**: ### Describe the bug When using `this.getModuleInfo(id).attributes` in a plugin (for instance in `transform` hook) the following error occurs : ``` [vite] The "attributes" property of ModuleInfo is not supported. ``` But the same code works in native Rollup plugins. related issue: [Support for moduleInfo.meta in resolveId hook still not equivalent in vite dev and vite build]([link] tool][ref]) ### Reproduction [link] ### System Info ```shell System: OS: Linux 6.5 Fedora Linux 37 (Workstation Edition) CPU: (16) x64 AMD Ryzen 9 5900HS with Radeon Graphics Memory: 6.49 GB / 15.02 GB Container:…

### CASE-8750 · Externals don't work with dynamic imports
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬5 · closed · labels: feat: css/p2-edge-case
- **Excerpt**: ### Describe the bug Hi, when configuring externals: ```js export default defineConfig({ build: { rollupOptions: { external: [ 'v-calendar', 'v-calendar/dist/style.css', ], } } } ``` then [using normal import]([link]) it works: ``` % yarn build yarn run v1.22.19 $ vue-tsc && vite build vite v4.5.0 building for production... ✓ 18 modules transformed. dist/index.html 0.45 kB │ gzip: 0.29 kB dist/assets/vue-5532db34.svg 0.50 kB │ gzip: 0.31 kB dist/assets/index-c322ae43.css 1.30 kB │ gzip: 0.67 kB dist/assets/index-f1637a40.js 51.67 kB │ gzip: 20.96 kB ✓ built in 583ms ``` <img width="648"…

### CASE-8753 · Vite transforms and strips out part of a function resulting in breakage
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm writing a library which imports the `@user/text-expander-element` custom element. During build Vite is transforming a function in a way that leads to the element breaking. The build file has transformed the `onCommit` function to this: ```js onCommit({ target }) { const item = target; if (!(item instanceof HTMLElement)) return; if (!this.combobox) return; const match = this.match; if (!match) return; this.input.value.substring(0, match.position - match.key.length); this.input.value.substring(match.position + match.text.length); const detail = { item, key: match.key,…

### CASE-8775 · React - Static class field initialization fails
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript, webpack
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug So after updating some of our dependencies we had to enable typescript's `useDefineForClassFields` feature. Since then, some of our legacy react class components fail to initialize their static class fields. This error only occurs if these two conditions are met - The class itself is decorated - The static class field initialization self references another static class field Transformations produced by `webpack` or a bare `esbuild` build seem to work just fine. e.g. ```typescript import React from 'react'; import { observer } from 'mobx-react'; @user export default class…

### CASE-8778 · `import.meta.glob` breaks in Svelte template
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed · labels: contribution welcome/p3-minor-bug
- **Excerpt**: ### Describe the bug First reported in [link] According to @user > ... this is a Vite bug because instead of transforming and replacing just the `import.meta.glob('./*')` part with an object, it's looking at the whole expression generated by Svelte to coerce the object to a string. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell StackBlitz ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link]…

### CASE-8781 · vite build fails with CRLF endings in index.html: eof-in-element-that-can-contain-only-text
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, windows, vite
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream/feat: html/p3-minor-bug
- **Excerpt**: ### Describe the bug I have set `git config --global core.autocrlf true` so that on Linux my index.html has LF line endings and on Windows it has CRLF endings. With LF line endings, `vite build` works perfectly, but on Windows with CRLF, I get the following error message: ```` vite v3.1.8 building for production... ✓ 0 modules transformed. [vite:build-html] Unable to parse HTML; parse5 error code eof-in-element-that-can-contain-only-text at {"file":"H:/projekte/graph2/index.html","line":105,"column":1} file: H:/projekte/graph2/index.html error during build: Error: Unable to parse HTML; parse5…

### CASE-8789 · "process.env.NODE_ENV" causes invalid code injection
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Vite's [`client-inject` plugin indiscriminately replaces `process.env.NODE_ENV`]([link] tool]/blob/da7c3ae/packages/vite/src/node/plugins/clientInjections.ts#L67-L71), even in comments and string literals. This is similar to [ref], where the issue happens in Vite's `define` plugin. This becomes a problem in the following Vue template: ```html <template> <!-- NODE_ENV is process.env.NODE_ENV --> <h2>demo</h2> </template> ``` `@user/compiler-sfc` transforms that into this: ```js _createCommentVNode(" NODE_ENV is process.env.NODE_ENV ") ⋮ ``` ...which is passed to the…

### CASE-8792 · Building `?worker` works in dev but bundling with Terser errors
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug When using Terser and Workers on non-trivial dependencies, vite seems to exhibit a concurrency bug which causes terser to error and forces the bundle to stop. However, this bug is particularly confusing for developers because it doesn't mention terser at all! Instead, it says ``` Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit: (vite:worker) transform "vitebug/node_modules/.pnpm/[email]/node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js?worker" ``` Ideally whatever error terser is…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8726 · Not detected recurrence in scss code (@user calling itself) leading to build failure
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage/bug: upstream
- **Excerpt**: ### Describe the bug When scss code contains an infinite recurrence, the build consumes all available heap memory: **Example:** ``` @user test { background-color: red; // infinite loop in recurrence @user test(); } ``` **Actual:** `scss style.scc` command fails quickly with Stack Overflow error. `vite build` consumes all available heap memory, then aborts. **Expected** `vite build` command fails quickly with Stack Overflow error. ### Reproduction [link] ### Steps to reproduce 1. Go to [link] 2. Run `npm run install` 3. Run `sass style.scss` - observe heap errors 4. Run `npm run build` 5.…

### CASE-8751 · 404 error fetching bindings_wasm_bg.wasm when running rollup on the browser
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Hi everyone, not sure if this is the correct place to post this, I already posted on Stack Overflow without luck. I'm trying to use the package @user/browser on my project to generate a dynamic bundle as described [here]([link]) I know it might sound as if this is not a vite issue, however when running the code I get the following errors: <img width="664" alt="Screenshot 2023-10-11 at 18 01 32" src="[link] tool]/assets/8492873/f6c56669-4315-42b2-9401-3acfce93c32f"> My first question is, what exactly is the `[link] file? Do I need to add a specific plugin for this file to…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8735 · Globbing in optimizeDeps.includes does not seem to work
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vue, vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: p3-minor-bug/feat: deps optimizer
- **Excerpt**: ### Describe the bug (See also [link] tool]/discussions/15833#discussioncomment-8797827) I am developing an application using vue3, vite, typescript, vue-router & vuetify. When starting the application using `pnpm vite` and opening it in the browser I get the following (or similar) logs: ```log 11:59:32 AM [vite] ✨ new dependencies optimized: vuetify/lib/components/VCard/index.mjs, vuetify/lib/components/VGrid/index.mjs, vuetify/lib/components/VImg/index.mjs, vuetify/lib/components/VKbd/index.mjs, vuetify/lib/components/VOverlay/index.mjs, vuetify/lib/components/VResponsive/index.mjs 11:59:32…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8767 · Font tilt style invalidated
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Describe the bug Using the font tilt style in the vite project does not seem to work, The same is true with the online program available on the vite website. ### Reproduction [link] ### Steps to reproduce ![image]([link]) ### System Info ```shell No error message was generated ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link]…

