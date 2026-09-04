# Case Chunk 073 — Round 73

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8201 · Defining `global: 'globalThis'` variable will replace `global.css` as `"globalThis".css` on building
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬22 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug As title ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.0 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 17.84 GB / 64.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 12.22.5 - ~/.nvm/versions/node/v12.22.5/bin/node Yarn: 1.22.11 - /usr/local/bin/yarn npm: 6.14.14 - ~/.nvm/versions/node/v12.22.5/bin/npm Browsers: Chrome: 92.0.4515.159 Firefox: 91.0.2 Safari: 15.0 npmPackages: vite: ^1.0.0-rc.13 => 1.0.0-rc.13 ``` ### Used Package Manager yarn ### Logs ```shell vite:config env mode: production +0ms vite:config env: {} +1ms vite:config…

### CASE-8203 · Support named exports in cjs libraries for optimizer
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, vite, react, webpack
- **Signals**: 👍0 💬22 · closed · labels: enhancement
- **Excerpt**: ## Describe the bug Fresh Vite app with react template. From ```js import { createStore } from 'redux-dynamic-modules'; ``` Vite generate: ```js import {createStore} from "/@user/redux-dynamic-modules.js"; ``` But this code crush with Chrome ``` Uncaught SyntaxError: The requested module '/@user/redux-dynamic-modules.js' does not provide an export named 'createStore' ``` Firefox ``` Uncaught SyntaxError: import not found: createStore ``` How it exported [link] At least with webpack it's work fine ## Reproduction I can create repo with this single import if required ## System Info -…

### CASE-8206 · Wrong esbuild target when using `vite dev`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome87, edge88, firefox78, safari14, vite
- **Signals**: 👍8 💬21 · open · labels: documentation
- **Excerpt**: ### Describe the bug When setting a build target in the config using either `build.target` or `esbuild.target`, this only applies to `vite build`. So far, this is expected, since [ref] automatically sets the esbuild target to `esnext` when using `vite dev`. However, when I import a library that requires the target to be set to `esnext` ([bson]([link]) for example) and try running `vite dev` I get this error message: ``` [ERROR] Top-level await is not available in the configured target environment ("chrome87", "edge88", "es2020", "firefox78", "safari14" + 2 overrides) ``` Running `vite build`…

### CASE-8208 · Unable to support functions such as "optional chain" in QQ browser 10 or chrome 70
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 70, vue, vite
- **Signals**: 👍2 💬21 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Invalid Babel configuration // App.vue ```vue const num = window?.num ?? 9; console.log(num); ``` // babel.config.js ```js module.exports = { presets: [ "@user/cli-plugin-babel/preset", "@user/plugin-proposal-optional-chaining" ] }; ``` // vite.config.ts ```ts import { defineConfig } from 'vite' import vue from '@user/plugin-vue' import legacy from '@user/plugin-legacy' import babel from 'vite-babel-plugin' // [link] export default defineConfig({ plugins: [ vue(), (babel as any)(), // legacy({ // additionalLegacyPolyfills: ['@user/plugin-proposal-optional-chaining'], //…

### CASE-8209 · import.meta.glob('/src/views/**/*.vue') 生成路由 打包后报Error: Unknown variable dynamic import
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, safari, macos, vue, vite
- **Signals**: 👍0 💬21 · closed · labels: documentation/inconsistency
- **Excerpt**: ### Describe the bug import.meta.glob('/src/views/**/*.vue') 生成路由 打包后访问/views/test/Index.vue文件报错 Error: Unknown variable dynamic import dev env 正常 ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.4 CPU: (8) x64 Intel(R) Core(TM) i5-8279U CPU @ 2.40GHz Memory: 2.78 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.1.0 - ~/.nvm/versions/node/v16.1.0/bin/node npm: 7.11.2 - ~/.nvm/versions/node/v16.1.0/bin/npm Browsers: Chrome: 91.0.4472.114 Safari: 14.1.1 npmPackages: @user/plugin-vue: ^1.2.3 => 1.2.4 vite: ^2.3.8 => 2.3.8 ``` ### Used Package Manager npm ### Logs…

### CASE-8213 · Import error in the browser and blank page in some templates (subst)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox, vue, react, vite, typescript
- **Signals**: 👍0 💬20 · closed · labels: windows only/pending triage
- **Excerpt**: ### Describe the bug When I scaffold a new Vue or Preact project with [`create-vite@user`]([link] tool]/tree/631a9bf3bd73c8625afa812d108b7e532c1d66d8/packages/create-vite), and then run `npm run dev` (after installing the dependencies), I get the `Uncaught SyntaxError: import not found: default` in Firefox, and a blank page. I can reproduce this with CJS and ESM (without and with TypeScript). But also with `[email]`, except that you have to remember to add `"type": "module"` in the `package.json`, or transform the imports and exports in `vite.config.js` into CJS. I can also reproduce this bug…

### CASE-8219 · CSS files cannot be treeshaken with side effects
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos, vue, webpack, vite
- **Signals**: 👍5 💬19 · closed · labels: p2-to-be-discussed
- **Excerpt**: ### Describe the bug ![image]([link]) vue-cli(webpack) VS vite ![image]([link]) ### Reproduction [link] * `npm start` to run vue-cli * `npm run vite` to run vite * `npm run build` to run vue-cli * `npm run vite:build` to run vite ### System Info ```shell System: OS: macOS 11.4 CPU: (8) x64 Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz Memory: 2.44 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.1 - ~/.nvm/versions/node/v14.17.1/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 6.14.13 - ~/.nvm/versions/node/v14.17.1/bin/npm Watchman: 4.9.0 - /usr/local/bin/watchman Browsers: Chrome:…

### CASE-8221 · Vite fails to load modules in Chrome with net:ERR_FAILED error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, vite
- **Signals**: 👍10 💬18 · open · labels: bug: upstream
- **Excerpt**: ### Describe the bug If you try to load lots of modules at once using Vite the page could fail to load with `net:ERR_FAILED` code occasionally. This happens **probably** because JS module requests oversaturate Chrome networking and it fails to fulfil some of the requests. This bug doesn't affect Firefox. At GitLab we had to engineer [our own mitigation for this bug]([link]), but it's not fully fixed. I don't know if the bug is caused only by Chrome, Vite or both. Vite shows no errors in the stdout when this happens. <img width="824" alt="image" src="[link]…

### CASE-8224 · [Vite version 3.0.0-alpha.9]: Treeshaking does not work with libs.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍2 💬18 · closed · labels: p3-significant/feat: deps optimizer
- **Excerpt**: ### Describe the bug [Vite version 3.0.0-alpha.9]: Cannot treeshaking libs. <img width="504" alt="image" src="[link]> [Vite version 2.9.9]: Its ok. <img width="520" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.6 CPU: (8) arm64 Apple M1 Memory: 99.69 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.13.0/bin/yarn npm: 8.1.0 - ~/.nvm/versions/node/v16.13.0/bin/npm Browsers: Chrome: 102.0.5005.61 Safari: 14.1.2 npmPackages: @user/plugin-legacy: ^1.8.0 =>…

### CASE-8226 · vue3+vite reports Uncaught ReferenceError: Buffer is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, vue, vite
- **Signals**: 👍0 💬18 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug version： "vue": "^3.2.16", "vite": "^2.6.4" Buffer is used for data conversion in the vue3+vite project, and the running project reports Uncaught ReferenceError: Buffer is not defined ### Reproduction The project git repository is: [link] ### System Info ```shell System: OS: macOS 11.6 CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz Memory: 351.83 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.15.4 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.15 - /usr/local/bin/npm Browsers: Safari: 14.1.2 ``` ### Used Package Manager npm ### Logs…

### CASE-8227 · when dependency modules use React.lazy, vite convert more 'default' wrapped the component
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, react, vite
- **Signals**: 👍0 💬18 · closed · labels: has workaround
- **Excerpt**: ### Describe the bug When I use this code: ![image]([link]) throw this error: ![image]([link]) I guess vite may convert more 'default' wrapped the component, which cause the error. ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.2.3 CPU: (8) arm64 Apple M1 Memory: 139.81 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.1.0 - ~/n/bin/node Yarn: 1.22.10 - /opt/homebrew/bin/yarn npm: 7.17.0 - ~/n/bin/npm Browsers: Chrome: 92.0.4515.131 Safari: 14.0.3 npmPackages: vite: ^2.4.4 => 2.4.4 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow…

### CASE-8233 · Forever-pending requests to dev server
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, firefox, vite, vue, webkit
- **Signals**: 👍7 💬17 · closed · labels: documentation/has workaround
- **Excerpt**: ### Describe the bug When you try to use Vite in a large Vue.js application (1000+ modules) and run the dev server, the app won't load in a browser. If you open DevTools, you will see a lot of pending requests there. And they will stay stalled forever. It looks like this issue only occurs in Chromium-based browsers. I can reproduce it in both Brave and Chromium. But it works without any problems in Firefox or GNOME Web (WebKit). ### Reproduction 1. Go to `pending-requests` folder of [vite-bugs]([link]) repo. 2. Run `npm install` 3. Run `npm run dev` 4. Open a new tab in any Chromium-based…

### CASE-8237 · Warning for case-insensitive systems
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite, vue
- **Signals**: 👍6 💬17 · open · labels: enhancement/p3-significant
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> ## Describe the bug Single file component template is not updated after making any change inside the <template> </template> tags. ![Screen Shot 2020-10-26 at 1 34 48]([link]) ## Reproduction **Repository:** [link] Run with npm run dev. Open on Chrome and change anything inside the template tag in a Vue SFC. To see the updates I have to run **npm run dev** every time. Refreshing the page doesn't work.…

### CASE-8238 · vite6 [commonjs--resolver] node_modules/testb/a.js (1:6): await isn't allowed in non-async function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, vite
- **Signals**: 👍1 💬16 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Everything works fine with Vite 5. Top-level await in node_modules. [link] ### Reproduction [link] ### Steps to reproduce `npm install && npm run build` ### System Info ```shell System: OS: macOS 14.3.1 CPU: (8) arm64 Apple M2 Memory: 2.71 GB / 24.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.20.2 - ~/.nvm/versions/node/v18.20.2/bin/node Yarn: 1.22.22 - ~/.nvm/versions/node/v18.20.2/bin/yarn npm: 10.5.0 - ~/.nvm/versions/node/v18.20.2/bin/npm pnpm: 9.6.0 - ~/.nvm/versions/node/v18.20.2/bin/pnpm Browsers: Safari: 17.3.1 ``` ### Used Package Manager npm ### Logs ``` >…

### CASE-8240 · Parsing error: ESLint was configured to run on `<tsconfigRootDir>/vite.config.ts` using `parserOptions.project`:
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite, react, typescript
- **Signals**: 👍4 💬16 · closed
- **Excerpt**: ### Describe the bug pnpm create vite react typescript-swc ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell OS: macOS 12.5.1 CPU: (8) arm64 Apple M1 Pro Memory: 101.81 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.16.0 - ~/.nvm/versions/node/v16.16.0/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 8.11.0 - ~/.nvm/versions/node/v16.16.0/bin/npm pnpm: 8.5.1 - /opt/homebrew/bin/pnpm Watchman: 2023.02.27.00 - /opt/homebrew/bin/watchman Browsers: Chrome: 114.0.5735.198 Safari: 15.6.1 npmPackages: @user/plugin-react-swc: ^3.3.2 => 3.3.2 vite:…

### CASE-8245 · run error: does not provide an export named 'createElementBlock'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vue, vite
- **Signals**: 👍0 💬16 · closed · labels: bug: upstream/has workaround
- **Excerpt**: ### Describe the bug first, It works normally in `vue/cli`. run ``` $ npm init vite@user $ cd vite-project $ npm i $ npm run dev # ok $ npm i -S element-plus@user $ npm run dev # error ``` on chrome devtools console log: ``` HelloWorld.vue:28 Uncaught SyntaxError: The requested module '/node_modules/.vite/vue.js?v=a348567b' does not provide an export named 'createElementBlock' ``` then, it removed ``` $ npm uninstall element-plus ``` still ``` HelloWorld.vue:28 Uncaught SyntaxError: The requested module '/node_modules/.vite/vue.js?v=a348567b' does not provide an export named…

### CASE-8250 · [astro-ci] Lit element SSR failure
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬15 · closed · labels: p4-important
- **Excerpt**: ### Describe the bug We are receiving a `window is not defined` error when using our [Lit Element SSR renderer]([link]). This is likely a problem with Vite respecting our shims for browser globals like `window`. ### Reproduction (see logs) ### System Info ```shell System: OS: macOS 12.0.1 CPU: (8) arm64 Apple M1 Memory: 304.47 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.2 - /usr/local/bin/node Yarn: 1.22.18 - /usr/local/bin/yarn npm: 8.1.2 - /usr/local/bin/npm Browsers: Chrome: 103.0.5060.134 Firefox: 102.0.1 Safari: 15.1 ``` ### Used Package Manager pnpm ### Logs 1. Run `pnpm…

### CASE-8251 · assetFileName invalid while use legacy plugin/使用legacy插件后rollup的assetFileNames设置失效
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 52, vite
- **Signals**: 👍0 💬15 · closed · labels: pending triage/plugin: legacy
- **Excerpt**: ### Describe the bug while i write vite config' build module include ```js rollupOptions: { output: { chunkFileNames: 'static/js/[name]-[hash].js', entryFileNames: 'static/js/[name]-[hash].js', assetFileNames: 'static/[ext]/[name]-[hash].[ext]', manualChunks(id) { if (id.includes('node_modules')) { return id.toString().split('node_modules/')[1].split('/')[0].toString(); } } } } ``` my outdir file will bundle correct like dist -static --css --js --png and while use legacyPlugin as `legacyPlugin({ targets: ['chrome 52'], additionalLegacyPolyfills: ['regenerator-runtime/runtime'] })` in config's…

### CASE-8257 · Importing an svg file from JS does not return a resolved URL string
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, vite
- **Signals**: 👍1 💬14 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Importing an svg file from JS does not return a resolved URL string `import Sun from '@/assets/icon/sun.svg' ` actually: return data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?..... expect: return resolved URL string like `/src/assets/icon/sun.svg` In vite4 works fine, this problem occurs in vite5 ### Reproduction no ### Steps to reproduce _No response_ ### System Info ```shell windows11 Microsoft Edge 版本 119.0.2151.93 (正式版本) (64 位) [email] [email] [email] ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of…

### CASE-8262 · 调式时，断点位置不正常
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, safari, macos, vite, vue
- **Signals**: 👍0 💬14 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 现在在使用断点 chrome调式时工作是不正常的，经常会断在不正常的位置，删除了断点之后也会中断代码。请问一下这个问题是要怎么来解决？ ### Reproduction 我使用的是vscode,不管是使用vite来调试还是用vscode的 chrome插件来调试都是一样的问题，原来使用 vuecli基本不存在这个问题 ### System Info ```shell System: OS: macOS 12.0.1 CPU: (6) x64 Intel(R) Core(TM) i5-8500B CPU @ 3.00GHz Memory: 13.66 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.18.1 - /usr/local/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 6.14.15 - /usr/local/bin/npm Browsers: Chrome: 96.0.4664.110 Edge: 96.0.1054.62 Safari: 15.1 ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow…

### CASE-8264 · import statement in Workers
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, windows
- **Signals**: 👍8 💬14 · closed · labels: p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug Due Firefox limit to support import statement in a web workers, how we can create production bundle? I get "SyntaxError: import declarations may only appear at top level of a module" in FF. [link] ### Reproduction use ```import {myExport} from '/modules/my-module.js';``` inside worker. ### System Info ```shell Windows, nightly FF 93.0a1 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X]…

### CASE-8266 · Not compatible with Electron: Node.js internal modules truncated
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3, P-F4 · **Env**: electron
- **Signals**: 👍5 💬14 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> Node.js internal modules were turned into empty objects. Which is valid and needed in Electron enviroments. And, Node.js only means SSR is a false assumption. ### Reproduction <!-- Please provide a link to a repo that can reproduce the problem you ran into. A…

### CASE-8269 · [vite] Pre-transform error: Failed to convert napi value into rust type `bool`
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite, react
- **Signals**: 👍10 💬13 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I can't build a docker image from my simple VITE project ### Reproduction Localhost ### Steps to reproduce docker build image docker run image_id ### System Info ```shell System: OS: macOS 14.6.1 CPU: (10) arm64 Apple M1 Max Memory: 122.48 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.9.0 - /opt/homebrew/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 9.8.1 - /usr/local/bin/npm Browsers: Chrome: 129.0.6668.72 Safari: 17.6 npmPackages: @user/plugin-react: ^4.3.1 => 4.3.1 vite: ^5.3.1 => 5.3.2 ``` ### Used Package Manager npm ### Logs _No response_ ###…

### CASE-8275 · v3.2.0 missing output
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, macos, vite
- **Signals**: 👍4 💬13 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug After upgrading to v3.2.0 or later, `vite build` no longer outputs CSS files and is missing JS (except barebones IIFE). ### Reproduction [link] ### Steps to reproduce Run `yarn install && yarn build && yarn demo:build` ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M1 Memory: 444.34 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.18.0 - ~/.volta/tools/image/node/16.18.0/bin/node Yarn: 1.22.19 - ~/.volta/tools/image/yarn/1.22.19/bin/yarn npm: 8.19.2 - ~/.volta/tools/image/node/16.18.0/bin/npm Browsers: Chrome: 107.0.5304.87 Firefox: 104.0…

### CASE-8279 · build: @user/plugin-legacy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, mobile, iphone
- **Signals**: 👍0 💬13 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug when I used @user/plugin-legacy plugins, in production environment, open the website use android oppo mobile, the error message is "globalThis is undefined" , the iPhone , and other mobile is ok , so how do I fixed the problem? ### Reproduction [link] ### System Info ```shell the oppo mobile android os version: 8.0.1 the 360 mobile android os version: 8.0.2 ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link]…

### CASE-8294 · Duplicate loading of the same resource on startup with Vite 2.9 beta1+
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍0 💬12 · closed · labels: p3-minor-bug/regression
- **Excerpt**: ### Describe the bug On the first page load in Chrome, after removing `node_modules/.vite` I see only a blank page. The reason is ``` Uncaught (in promise) DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "dom-module" has already been used with this registry ``` which in turn originates in that a JS file is loaded twice with different `?v=` parameters ![image]([link]) It is a timing issue because if I open the Chrome inspector then the issue disappears and the `vaadin.js` file is still loaded twice but with the same `?v=` parameter. With 2.9.0.beta0 I do not see…

### CASE-8295 · Minified global var names in conflict with other libraries using iife output format
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, vite
- **Signals**: 👍3 💬12 · closed · labels: p3-minor-bug/feat: library mode
- **Excerpt**: ### Describe the bug Recently I came across an extreme edge case when vite would build and minify my library in `iife` format, but keep some global variables outside of the main closure. This resulted to one of these minified global vars to be named after `ga` which resulted to conflict with the actual google analytics library, causing my library to break during runtime. This is an example of the output javascript I got: ![code]([link]) My vite configuration is similar to the following one: ```ts import path from "path"; import minifyHTML from "rollup-plugin-minify-html-literals"; import {…

### CASE-8297 · Using obfuscated packages: Uncaught (in promise) TypeError: {......} is not a constructor
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍1 💬12 · closed · labels: inconsistency
- **Excerpt**: ### Describe the bug I'm using vanilla ts project with a very basic structure [here]([link]) I've imported the [link] library like: `import { SelfieSegmentation } from '@user/selfie_segmentation';` When I'm in devepment mode, everything seems to work as intended but after build, I get this error: `Uncaught (in promise) TypeError: e.SelfieSegmentation is not a constructor` I'm using chrome ## Note: Everything works fine in development mode by running `npm run dev` ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (24) x64 AMD Ryzen 9 5900X 12-Core Processor Memory: 22.39 GB /…

### CASE-8298 · Pre-bundling dependencies，the path auto add ./ on head
- **Principles**: P-G1, P-G2, P-G3 · **Env**: windows, vite, vue
- **Signals**: 👍0 💬12 · closed · labels: windows only/pending triage
- **Excerpt**: ### Describe the bug when exec npm run dev , on vite pre-bundling dependencies,it throw err, it auto add './' to the head of module path,like dep:Vuex:1:14: error: Could not resolve **"./D**:/code/Solution/front/node_modules/vuex/dist/vuex.esm-bundler.js" ### Reproduction [link] ### System Info ```shell System: OS: Windows 7 6.1.7601 CPU: (4) x64 Intel(R) Core(TM) i5 CPU M 540 @ 2.53GHz Memory: 3.37 GB / 7.93 GB Binaries: Node: 14.17.5 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.14 - C:\Program Files\nodejs\npm.CMD Browsers: Internet Explorer:…

### CASE-8299 · customElement register error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍1 💬12 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug when i mixin multiple vite project in one vite project(micro frontend). customElements overlay register will reregister and error ![image]([link]) ### Reproduction [link] [link] tool]/blob/3df736b602b7059d397acf0776d87ac7a0fa5b67/packages/vite/src/client/overlay.ts#L184-L185 ### System Info ```shell chrome ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X]…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8202 · the vite's HMR does not work when I use React.lazy() API for lazyload
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vite, react
- **Signals**: 👍4 💬22 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug when I use React.lazy(),like this: ``` // router/index.ts import React from 'react'; const Home = React.lazy(() => import('../views/Home')); const About = React.lazy(() => import('../views/About')); const routes = [ { path: '/', exact: true, component: Home }, { path: '/about', exact: true, component: About }, { path: '/login', exact: true, component: React.lazy(() => import('../views/login/login')) }, { path: '/form-page', exact: true, component: React.lazy(() => import('../views/form-test/form-page')) }, { path: '/props-up', exact: true, component: React.lazy(() =>…

### CASE-8205 · Windows: Can't pull changes because of "long file name" test file
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬21 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to pull the latest changes to my local fork (so I can submit a PR). I expect git to be able to pull these changes. On Windows, the following error appears. <img width="522" alt="vite-filename-test-issue" src="[link] tool]/assets/347224/0b0575c8-2c8d-4e47-b45e-6cfe8b3ef6ec"> It appears that the test for long file name is indeed trying to create a filename that is too long. My local fork is 42 commits behind. The dialog above looks like it has hash references in git "tree-ish". ### Reproduction Not possible because of issue ### Steps to reproduce Run a normal…

### CASE-8207 · url with relative path in sass/scss is broken when main.js and assets are in subdirectory
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍44 💬21 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug Following on from [my comment]([link] tool][ref][ref]) in [ref] - the linked PR ([ref]) doesn't solve the issue when main.js and assets are stored in a top level assets directory, e.g.: ``` ├── assets │ ├── images │ │ └── vite.svg │ ├── main.js │ └── styles │ ├── pages │ │ └── home.scss │ └── style.scss ├── index.html ├── package.json ├── package-lock.json ├── public │ └── vite.svg └── README.md ``` You can see in the linked reproducer that `url('../../images/vite.svg')` does not resolve the image correctly, even though that is the correct relative path to the file from…

### CASE-8211 · Vite Installation failing
- **Principles**: P-A3, P-H1 · **Env**: linux, macos, vite
- **Signals**: 👍21 💬20 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am installing Vite.Js within docker container with linux image. Packages fail to resolve. Assume the latest version of rollup is impoacting ![Screenshot 2024-10-27 at 12 55 31 PM]([link]) error Couldn't find package "@user/[email]" required by "rollup@^4.2.0" on the "npm" registry. ### Reproduction [link] ### Steps to reproduce Run npm install vite.js "dev": "vite", "build": "tsc && vite build", ### System Info ```shell System: OS: macOS 13.7 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 42.40 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.15.0…

### CASE-8214 · HMR does not work
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬20 · closed · labels: pending triage/feat: hmr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I see this [HMR didn't work for dynamic imported modules ](issue:[link] tool]-plugin-react[ref]),I also have this issue. but I have another problem in react. for example: my vit config: ![image]([link]) my whistle: ![image]([link]) I will use "cms.fcc.qq.com" open the page. my html: ![image]([link]) my component: index.tsx use App.tsx: ![image]([link]) App.tsx: ![image]([link]) ![image]([link]) when I change…

### CASE-8225 · 🚩 HMR Dublicate content 🚩
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬18 · closed · labels: bug: upstream/feat: hmr/p3-minor-bug
- **Excerpt**: ### Describe the bug Hi. I have 100% one component with uniq key `<BlogInfoLine :key="post.blogPostId"></BlogInfoLine>` after i change anything inside i get dublicate content (watch video). i try restart VSC and browser - nothing. ![bug_vite]([link]) On browser Vue plugin show that is One component ![image]([link]) On html sctucture see that root element dont dublicate but internal side by side dublicated ![image]([link]) ### Reproduction big work say that i can show ### System Info ```shell Binaries: Node: 17.3.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.15 - C:\Program Files…

### CASE-8230 · "Cannot add property __props, object is not extensible" when running in production mode while using defineAsyncComponent
- **Principles**: P-A3, P-H1 · **Env**: macos, vite, vue
- **Signals**: 👍4 💬18 · closed
- **Excerpt**: ## Describe the bug Show error "Cannot add property __props, object is not extensible" ## Reproduction Work normal at dev environment, but fail when running in production Repo: This is private source, but I will update later if need ## System Info - vite 1.0.0-rc.4 - vue v3.0.0-rc.5 - macos: 10.15.6 - node: 12.14.1 ## Logs (Optional if provided reproduction) ![image]([link])

### CASE-8232 · Property 'div' does not exist on type 'JSX.IntrinsicElements'.
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍6 💬17 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug This problem will appear when I use vite build a `react-ts` project. When I write some HTML element in JSX, IDE will always prompt `Property '...' does not exist on type 'JSX.IntrinsicElements'.`. I‘d not change anything, it‘s just a default project create by vite. Actually, the react-ts template preset provided on the vite official website also within this problem. ![image]([link] tool]/assets/62818957/dc908936-1005-4099-b756-2d61af42fafb) ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: Windows 11 Binaries: Default packages…

### CASE-8235 · when i import the css file in less file, vite would throw error:no found file,but if i change the .css into .less would no error
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬17 · closed · labels: p2-edge-case
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug when i import css file in the less file, it would throw the error ![image]([link]) <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction repoduction: [link] branch :test2 <!-- Please provide a link to a repo that can reproduce the problem you ran into. A reproduction is required unless you are…

### CASE-8241 · Build logs filled with warnings in 3.2.0 when relying on external (relative) assets
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍21 💬16 · closed · labels: enhancement/p2-nice-to-have
- **Excerpt**: ### Describe the bug In my web app, I have many resources (images/fonts) that are hardcoded, but external resources (ie. the machine that builds my app won't have those resources). After upgrading to 3.2.x, the build log is filled with messages like: > [x] referenced in [y] didn't resolve at build time, it will remain unchanged to be resolved at runtime (Added in [ref]) The resources are defined in my vite.config file as externals (rollup config), although building the app doesn't actually care about this configuration for css files. Now, whether or not you define the externals in your rollup…

### CASE-8242 · vite deep scan - can't import styles from node modules scoped npm pacakge
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬16 · closed · labels: invalid
- **Excerpt**: edit: repo: [link] |### Describe the bug fail to import from node modules (during npm link of scope package) even though you can see that the file is explicitly exists in the node_modules and the path is 100% correct. <img width="1137" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell [link] * note that i've created the node_modules manually and i think stackblitz just remove it or hide it somehow ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the…

### CASE-8252 · 2.7.0+ production mode issue
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬15 · closed · labels: regression
- **Excerpt**: ### Describe the bug After upgrading to 2.7.0+, the production mode site is broken ![image]([link]) ### Reproduction Sry, I can not share my repo, here is the package.json "dependencies": { "@user/plugin-vue": "2.0.0", "@user/core": "^2.0.0-alpha.14", "@user/validators": "^2.0.0-alpha.13", "@user/core": "^7.2.2", "@user/integrations": "^7.2.2", "@user/router": "^7.2.2", "chart.js": "^3.6.2", "core-js": "^3.19.3", "devextreme": "^21.2.4", "devextreme-aspnet-data-nojquery": "^2.8.4", "devextreme-vue": "^21.2.4", "lodash": "^4.17.21", "primeflex": "^3.0.0", "primeicons": "^5.0.0", "primevue":…

### CASE-8255 · Uncaught Error: Dynamic require of "xxx/main.scss" is not supported, when ESM package import commonjs module
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍5 💬15 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ![image]([link]) error log in browser console panel: Uncaught Error: Dynamic require of "/Users/ligfee/Documents/code/self/vite.d/demo.d/vite-issue-dep-dep/node_modules/@user/next/lib/icon/main.scss" is not supported code analysis: App import @user/dep-1-demo, this package is ESM @user/dep-1-demo import a commonjs module ```javascript // filename: node_modules/@user/dep-1-demo/lib/CascaderSelect.js // not import { Cascader } from @user/next; // import from a module, not package, vite can not handle this scene import Cascader from '@user/next/lib/cascader-select'; // this…

### CASE-8256 · When use the Multi-Page App on vite, will miss the js file when building.
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬14 · closed · labels: cannot reproduce
- **Excerpt**: ### Describe the bug I tried using vite's [multi-app]([link]) feature to integrate a project made of pure `html/css/js` into `vite`. However, when it was built, the `js` file path that was included in index.html was not included in the build, resulting in `404` error. **NOTE: The images folder and fonts and css are well included and built.** ### Reproduction [link] ### Steps to reproduce # create vite project ```shell yarn create vite example-web --template react-swc-ts cd example-web ``` ``` ├── package.json ├── vite.config.js ├── index.html ├── main.js └── nested ├── index.html └── js └──…

### CASE-8258 · Worker and build only error: Unexpected early exit. This happens when Promises returned by plugins cannot resolve
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍8 💬14 · closed · labels: p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug I have issues with build when I have worker inside worker when using sqllite when I have workers in workers Works fine in dev, but not in build Though it first was a sqllite/wasm issue and something I was missing. but found out their stackblitz worked fine even on build So stripped it down to just vite as dependency Asked here before I created the issue, just incase I was doing something wrong [link] tool]/discussions/13357 @user FYI ### Reproduction [link] ### Steps to reproduce download and try and run npm run build It runs fine in dev mode (see image 1), but if you…

### CASE-8268 · v6.3.3 ReferenceError: Cannot access '__vite_ssr_export_default__' before initialization
- **Principles**: P-A3, P-H1, P-F4 · **Env**: windows, linux, vite
- **Signals**: 👍15 💬13 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug After upgrading from v6.3.2 to v6.3.3 my rather simple tests are failing with: `ReferenceError: Cannot access '__vite_ssr_export_default__' before initialization` Reverting back to v6.3.2 fixes it. It looks like this message was introduced in [80a91ff]([link] tool]/commit/80a91ff82426a4c88d54b9f5ec9a4205cb13899b): ![Image]([link]) I'm guessing, of course, but... ### Reproduction n/a ### Steps to reproduce ![Image]([link]) the error is thrown on this highlighted line: ![Image]([link]) ### System Info ```shell Windows and Linux and Docker... ``` ### Used Package Manager…

### CASE-8270 · Stuck or slow pending requests
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍9 💬13 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug When using the Vite dev server some requests seems to be stuck in a pending state, or they take over a minute to complete. The debug logs does not indicate that this is an issue other than that they take over a minute to complete. What's particularly odd is that the affected file in this case, `uiData.js`, is quite small. So, it's puzzling why it's taking so long to load. All other requests only take a few milliseconds. ![image]([link] tool]/assets/43852515/f2f3fa7a-cbc9-4059-8c0f-11129bed01e6) ![image (1)]([link]…

### CASE-8281 · PostCSS plugins cannot be resolved when root != cwd
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬13 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When running the Vite server with a root other than `cwd`, PostCSS is unable to find its plugins. As far as I understand, this happens because `postcss-load-config` uses `import-cwd` to load plugins: [link] ### Reproduction I created a repo to make it easy to reproduce: [link] 1. `cd app && yarn && yarn start` (running in same directory): Server works fine. <img width="1552" alt="Screen Shot 2021-06-28 at 10 37 48 pm" src="[link]> 2. `cd runner && yarn && yarn start` (running from another directory): PostCSS plugin error. <img width="1552" alt="Screen Shot 2021-06-28 at…

### CASE-8287 · `new Worker("some-package")` doesn't load optimized dep
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬12 · closed · labels: has workaround/p3-minor-bug/feat: deps optimizer
- **Excerpt**: ### Describe the bug Unable to integrate [monaco-sql-languages]([link]) in a vite project. ![image]([link] tool]/assets/58289241/bcb7a0fd-50e4-40e2-a916-f9395a3db244) Maybe it's not an issue with vite, but I do need help. I'm maintaining [monaco-sql-languages]([link]), and I found [monaco-yaml]([link]) having the same issue and it wasn't resolved Related to this [issue]([link] tool][ref]), I can't comment under this issue because it's locked. The last comment on this issue said it was fixed, but I still reproduce the issue. Also, in the documentation for the [monaco-yaml]([link]) repository,…

### CASE-8288 · The vite property decorator is invalid
- **Principles**: P-A3, P-H1 · **Env**: vite, webpack
- **Signals**: 👍0 💬12 · closed · labels: invalid
- **Excerpt**: ### Describe the bug When the property decorator is involved in the project, the dev and production modes are different from the webpack effect, and the expected effect is the same as the webpack effect. ### Reproduction [link] ### Steps to reproduce 1. git clone [link] 2. cd arca/packages/awesome-babylonjs/babylonjs-mtoon-material 3. run `pnpm install` 4. run `pnpm run dev` 5. git clone [link] 6. git fetch origin 6.x:6.x 7. run `pnpm install` 8. run `pnpm run debug` This is the effect of vite： <img width="1440" alt="image" src="[link]…

### CASE-8293 · Sourcemap for "/iframe.html" points to missing source files
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍1 💬12 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug @user, opening an issue so we can keep track of an issue introduced in 2.9.0-beta.6, and not present in 2.9.0-beta.4, so it should be related to: - [link] tool][ref] Users are seeing logs: ``` Sourcemap for "/iframe.html" points to missing source files ``` See [link] And ``` Sourcemap for "/root/Projects/xyz/frontend/index.html" points to missing source files Sourcemap for "/root/Projects/xyz/frontend/src/App.vue" points to missing source files ``` See [discussion in Vite Land]([link]) ### Reproduction [link] ### System Info ```shell . ``` ### Used Package Manager pnpm…

### CASE-8300 · page use vant and @user/plugin-legacy plugin build.
- **Principles**: P-A3, P-H1 · **Env**: chrome58, linux
- **Signals**: 👍0 💬12 · closed · labels: pending triage/plugin: legacy
- **Excerpt**: ### Describe the bug page use vant lib and @user/plugin-legacy plugin build. run in chrome58 get Error SystemJS [link] but page only use my component, it will be normal. ![image]([link]) ![image]([link]) `dist/assets` not has file `./index-legacy.62d61901.js` ### Reproduction [link] ### System Info ```shell System: OS: Linux 4.4 Debian GNU/Linux 10 (buster) 10 (buster) CPU: (12) x64 AMD Ryzen 5 PRO 4650U with Radeon Graphics Memory: 2.58 GB / 15.23 GB Container: Yes Shell: 5.7.1 - /bin/zsh Binaries: Node: 15.11.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 7.6.0 -…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8204 · module.hot regression
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬22 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug When using the self-accepting API it transforms ```js main.jsx ...someCode if (__DEV__) { hot.accept((m) => { try { for (let i in m) { compareSignatures(module[i], m[i]); } } catch (e) { window.location.reload(); } }); } ``` TO: ``` hot.accept("/main.jsx", "/main.jsx", m => { try { for (let i in m) { compareSignatures(module[i], m[i]); } } catch (e) { window.location.reload(); } }); ``` The self-accepted url gets injected twice meaning the callback never gets called, this feels like a problem in the [transform-step]([link]). Maybe this is intended as an array (?) it is the…

### CASE-8210 · Vite-6.0.7 appears to transpile `case` statements incorrectly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍9 💬20 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug Taking the base example from StackBlitz, importing js2pdf-2.5.1 and attempting to build fails with an error about unexpected case. Output fails with the following: ``` Error during build: [vite:esbuild-transpile] Transform failed with 1 error: assets/index-!~{001}~.js:960:38152: ERROR: Unexpected "case" ``` Someone else [posted about it today]([link]) that I only just found and identified that it was the transpilation turning `case false:` in `casefalse:` and sure enough the minified version in the error message includes: ``` ... switch(R){case…

### CASE-8222 · Cannot bundle .node files
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, vite
- **Signals**: 👍18 💬18 · open · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to create a server side bundle that includes packages containing .node files. In this specific instance, the problematic package is nodejs-polars. ``` in/nodejs-polars.linux-arm-gnueabihf.node does not exist ✓ 13 modules transformed. ✓ built in 1.39s [commonjs] Unexpected character '' (Note that you need plugins to import files that are not JavaScript) file: /home/projects/vitejs-vite-xp1ggj/node_modules/nodejs-polars/bin/series/list.js:1:0 1: ELF>�rd@user�@user ^ 2: @@@user�bd�bd... 3: ``` I have tried various plugins to resolve this but none of them seem to…

### CASE-8229 · Flow support
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬18 · closed · labels: enhancement/has workaround
- **Excerpt**: ## Describe the bug I'm trying to write vite-plugin for removing Flow.js types and i'm getting the error below ## Reproduction 1. `yarn create @user/app` template - vanilla 2. (inside generated folder) ``` yarn install yarn add -D flow-remove-types ``` 3. Set `main.js` content: ```javascript /* @user */ type Type = {}; ``` 4. Create `vite.config.js`: ```javascript import removeTypes from "flow-remove-types"; export default { plugins: [ { name: "vite-plugin-flow", enforce: "pre", transform(code) { const output = removeTypes(code); return { code: output.toString(), map: null, }; }, }, ], }; ```…

### CASE-8234 · Sourcemap is likely to be incorrect: a plugin (undefined) was used to transform files...
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍2 💬17 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug Something changed between 2.5.6 and 2.5.7 in regards to how `<style>` blocks are processed. I have a feeling that [link] tool]/commit/015290a169d5ca3806aa0b2eb417426d61df9b7d is the cause because not much else changed in regards to CSS between 2.5.6 and 2.5.7 releases. I've provided a very minimal repo to reproduce the issue. ### Reproduction [link] $ npm run build ```vite v2.5.7 building for production... ✓ 10 modules transformed. rendering chunks (1)...Sourcemap is likely to be incorrect: a plugin (undefined) was used to transform files, but didn't generate a sourcemap…

### CASE-8236 · Legacy build fails on babel step
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍4 💬17 · closed · labels: bug: upstream/plugin: legacy
- **Excerpt**: ## Describe the bug The build with the legacy plugin active fails with an error from babel. ``` ❯ npm run build > [email] build > tsc && vite build vite v2.0.5 building for production... ✓ 21 modules transformed. [legacy-post-process] [BABEL] unknown: .plugins[13][0] must be a string, object, function error during build: Error: [BABEL] unknown: .plugins[13][0] must be a string, object, function at assertPluginTarget (/Sites/vite-project/node_modules/@user/standalone/babel.js:67416:12) at assertPluginItem (//Sites/vite-project/node_modules/@user/standalone/babel.js:67390:6) at…

### CASE-8248 · Built in support for template engines
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** Yes. Trying to use anything but `html` for your markup doesn't quite work at the moment. I've been trying to develop a [Pug plugin]([link]) and I got stuck. There were a few tickets ([ref] [[ref]]([link] tool][ref]) [ref] ) closed, but I don't think the issue is solved. By making a plugin using [transformIndexHtml]([link]) you would still need an `index.html`. You can't have a structure like this for example: ``` _main.pug index.pug << extends _main.pug about/ |-- index.pug << extends _main.pug vite.config.js ``` Snowpack had…

### CASE-8260 · Add `preTransform` and `postTransform` hooks
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬14 · closed · labels: enhancement/p3-significant
- **Excerpt**: ### Description I believe it would be best for Vite if [ref] was implemented as a plugin. It would keep inevitable bug reports out of the core repo. It's up to the team to decide if they want to maintain it or let the community handle things. It doesn't matter to me, as long as Vite is able to support other cache implementations. For example, someone might write a remote caching plugin or something with more granular invalidation. To support [ref] as a plugin, we need some new plugin hooks. ### Suggested solution ## preTransform This hook would be called before the following code: [link]…

### CASE-8261 · exports is not defined
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, typescript, vue
- **Signals**: 👍0 💬14 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug enable `transformMixedEsModules` and run `yarn build && yarn preview` <img width="393" alt="image" src="[link]> vite.config.ts ```TypeScript import { defineConfig } from 'vite' import vue from '@user/plugin-vue' import { resolve } from 'path' import inject from '@user/plugin-inject' // [link] export default defineConfig({ plugins: [vue()], resolve: { alias: { '@': resolve(__dirname, 'src'), '@user': resolve(__dirname, 'src/page'), '@user': resolve(__dirname, 'src/assets/img'), stream: 'stream-browserify', process: 'process/browser', zlib: 'browserify-zlib', util: 'util',…

### CASE-8274 · library mode: Vite doesn't appear to transform cjs deps correctly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍1 💬13 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm using Vite to bundle my library. When I bundle my library to `es` format, a transitive dep (that is only in cjs format) doesn't appear to be transformed correctly. Here's the setup: my_library depends on `@user/react/fsm`, which depends on `use-sync-external-store` (cjs only). It seems that `use-sync-external-store` isn't being correctly parsed/transformed by Vite, and is causing crashes. ### Reproduction [link] ### Steps to reproduce Using StackBlitz above: - run `npm run build` - See contents of `build/lib.js` - Follow import to…

### CASE-8277 · `SSR`: ssrLoadModule issue
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: windows, vite
- **Signals**: 👍0 💬13 · closed · labels: pending triage/feat: ssr/feat: deps optimizer
- **Excerpt**: ### Describe the bug # description I'm using `antd` in `ssr` mode, everytime startup vite devServer, it took about 40s to start. I've debug `vite` source code in local, and I found that the reason is: [link] tool]/blob/main/packages/vite/src/node/server/transformRequest.ts#L234 I tested three conditions: 1. use antd and vite no ssr => fast 2. use only vite ssr, no UI lib => fast 3. use antd and vite ssr => slow BTW, I think this is not related to [ref]. ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (16) x64 Intel(R) Core(TM) i7-10700F CPU @ 2.90GHz…

### CASE-8278 · warning: "@user" must be the first rule in the file (2.6.x regression ?)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍7 💬13 · closed · labels: feat: css/has workaround
- **Excerpt**: ### Describe the bug `npm run build` shows 100 warnings with ``` > <stdin>:15:7495: warning: "@user" must be the first rule in the file 15 │ ...transform:rotate(0)}to{transform:rotate(2turn)}}@user "UTF-8";/*! ╵ ~~~~~~~~ <stdin>:15:6767: note: This rule cannot come before a "@user" rule 15 │ ...t:attr(data-deselect);color:#fff}.multiselect-enter-active,.multi... ``` Appears to be a regression in 2.6.x To reproduce: ``` npm init vite@user my-vue-app -- --template vue ``` then add just 3 libraries to package.json and main.js Minimal repo: [link] ``` npm install npm run build ``` FYI Also tried…

### CASE-8284 · `transformIndexHtml` hook gets the wrong html filepath when running Multi-Page
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍0 💬13 · closed · labels: pending triage/feat: html
- **Excerpt**: ### Describe the bug `transformIndexHtml` hook gets the wrong html filepath when running Multi-Page. ### Reproduction ```js import { defineConfig } from 'vite' import vue from '@user/plugin-vue' import { resolvePath } from './utils' export default defineConfig({ plugins: [ vue(), ], build: { rollupOptions: { input: { main: resolvePath('index.html'), landingPage: resolvePath('landing-page/index.html'), }, }, }, }) ``` Project root directory structure: - index.html - landing-page - index.html in the `transformIndexHtml` hook: ```js async transformIndexHtml(html, { filename }) { ... } ``` Go to…

### CASE-8285 · transformIndexHtml errors with "No matching HTML proxy module found" when referencing entry point as import
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍5 💬12 · open · labels: feat: html/p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug Scaffold any SSR example from create-vite-extra and to the following changes: Wrap the code of the client entry point in ```js // client-entry.js export default function render() { // previous code... } ``` Change the script src to manually import the function ```html <!-- <script type="module" src="src/client-entry.js"></script> --> <script type="module"> import render from "./src/client-entry.js" render(); </script> ``` This will fail with: "No matching HTML proxy module found from /?html-proxy&index=0.js" There is a similar issue on [link] tool][ref], but it's…

### CASE-8289 · “Unexpected early exit” when building with Node 20 and Yarn PnP
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬12 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Initiating a build in the MWE repository via `yarn build` results in the following error, after which the build fails: ``` Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit: (vite:build-html) transform "/workspaces/vite-project/index.html" error during build: Error: Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit: (vite:build-html) transform "/workspaces/vite-project/index.html" at EventEmitter.handleEmptyEventLoop…

### CASE-8290 · Watch Error When Too Many Files In "Public" Directory When Project On File Share
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬12 · open · labels: documentation/bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug I am transitioning an existing project to Vite. When I copy all of my files to the "Public" directory, I can not start the program via `npx vite`. It exits almost immediately. This is confirmed to be caused by the code being hosted on a remote file share, which is being mounted as a local drive. This is required because of the corporate environment. **Importantly** the error returned is "Unknown", and does not reference too many files as being the problem! ## Other notes: The most appropriate area I have found to debug the error is in…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8212 · lazy imported modules are not bundled correctly on building
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: pending triage/feat: css/inconsistency
- **Excerpt**: ### Describe the bug The following pattern runs very well on development: ```ts const [data, error] = usePromise(() => Promise.all([ Promise.any([ import( `../../../node_modules/prismjs/themes/prism-${theme}.css` ) as Promise<unknown>, import( `../../../node_modules/prism-themes/themes/prism-${theme}.css` ) as Promise<unknown>, ]), import( `../../../node_modules/prismjs/components/prism-${ lang === 'js' ? 'javascript' : lang }.min.js` ) as Promise<unknown>, ]), ) ``` But it seems not been bundled at all on building, confirmed with `build.rollupOptions.manualChunks` ### Reproduction [link]…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8215 · manifest.json does not include assets
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍3 💬20 · closed
- **Excerpt**: ## Describe the bug Statically imported assets (SVG file in my case) will get bundled and created in the `outDir`, but are missing in the generated `manifest.json`. **vite.config.js** ```js import { defineConfig } from 'vite'; import legacy from '@user/plugin-legacy'; export default defineConfig({ base: '/static/', publicDir: 'assets/static/', build: { manifest: true, outDir: 'public/static/', assetsInlineLimit: 0, rollupOptions: { input: 'assets/main.ts', }, }, plugins: [legacy()], }); ``` **assets/main.ts** ```ts import './icon.svg'; ``` **manifest.json** ```json { "assets/main-legacy.ts":…

### CASE-8223 · Ctrl+C no longer kills processes running in parallel with `vite`
- **Principles**: P-G4, P-E3 · **Env**: macos, vite
- **Signals**: 👍2 💬18 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When using `npm-run-all` to run package scripts in parallel with the Vite dev process, a Ctrl+C input only kills the Vite process and a second Ctrl+C is needed to kill the remaining scripts. This is a regression from 3.2.5, where a single Ctrl+C killed all parallel running processes. This may be due to the new shortcuts CLI. ### Reproduction [link] ### Steps to reproduce Follow the reproduction README. ### System Info ```shell System: OS: macOS 13.0.1 CPU: (10) arm64 Apple M1 Max Memory: 21.14 GB / 64.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 17.2.0 -…

### CASE-8253 · Cannot access ambient const enums when the '--isolatedModules' flag is provided.
- **Principles**: P-G4, P-E3 · **Env**: vue, vite
- **Signals**: 👍14 💬15 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug Even with a minimal setup, vue-tsc fire errors when `isolatedModules` flag is active ### Reproduction [link] ## What I did Very simple: ``` npm init vite@user # select vue + vue-ts npm i ``` Set `isolatedModules` to `true` in tsconfig.json. ``` npm run build ``` Get the following errors: ``` node_modules/@user/runtime-core/dist/runtime-core.d.ts:1193:6 - error TS2748: Cannot access ambient const enums when the '--isolatedModules' flag is provided. 1193 [BooleanFlags.shouldCast]?: boolean; ~~~~~~~~~~~~ node_modules/@user/runtime-core/dist/runtime-core.d.ts:1194:6 - error…

### CASE-8273 · Vite4 build does not respect the assets path
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍6 💬13 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Vite4 does not generate the same path for associated assets when building than Vite3. I'm working with a Vite+Django integration. When building assets, it's important to keep the same path to allow Django found related files. With vite3 when building the file "/my-code/index.js" an asset was build at "/my-code/index.css". Now with vite4, the assets for file "/my-code/index.js" it's build at "/index.css". I've tried to get the right info with the "assetFileNames" functions to no avail. I've used the "build.rollupOptions.input" and the "build.lib.entry" configurations, but…

### CASE-8280 · Undefined imports in production build with shared components
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: has workaround/p3-minor-bug/inconsistency
- **Excerpt**: ### Describe the bug When building for production, several pages import from FontAwesome (`import { faXXX } from '@user/sub/faXXX.js'`). Some of those imports are shared between a lot of components. These shared imports in `dist/assets` are seen, after running `npm run build`, as a separate chunk of the form `faXXX.hash.js`, apparently empty. Example from the repo to reproduce issue: ``` $ cat faPlusCircle.ef7d87a6.js var faPlusCircle = {}; export { faPlusCircle as f }; //# sourceMappingURL=faPlusCircle.ef7d87a6.js.map ``` Which produces following error in _some_ pages: ``` Uncaught (in…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8216 · Exported variable in chunk is not defined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍27 💬20 · closed · labels: bug: upstream/has workaround
- **Excerpt**: ## Describe the bug Some interaction between the packages `@user/[email]`, `@user/[email]` and `@user/[email]-alpha.12` leads to a chunk being generated which exports a variable that is not defined. In the browser's console: ``` Uncaught ReferenceError: makeStyles_default is not defined at Object.makeStyles (index.js:1) at Object.get [as makeStyles] (chunk.5ZFU4BUR.js?v=c903acc3:25) at main.js:3 ``` This problem only seems to occur in specific circumstances. Depending on what the application imports Vite appears to generate different chunks. In some cases the chunk generated contains the…

### CASE-8228 · Build Error: [rollup-plugin-dynamic-import-variables] Unexpected token
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, vite, vue
- **Signals**: 👍6 💬18 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [x] Read [the docs]([link]). - [x] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. ## Describe the bug can no build this project ## Reproduction [link] ## System Info - `vite` version: ^2.0.0 - Operating System: mac os 10.15.4 - Node version: v14.15.1 - Package manager (npm/yarn/pnpm) and version: npm 6.14.8 ## Logs (Optional if…

### CASE-8231 · When referencing an environment variable that doesnt exist, vite dumps your whole environment into the bundle as an object
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍3 💬17 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug When you reference an env var, the idea is that Vite will replace the reference with the value of that env var. So given the following `.env` ``` VITE_FOO=foo ``` And the following code ```js console.log(import.meta.env.VITE_FOO); ``` The resulting output should be ```js console.log("foo"); ``` And this is true and works as expected. But now reference an env var that doesn't exist, you'd expect the replacement to become `undefined`, like so: ```js console.log(import.meta.env.VITE_FOO); // 'foo' console.log(import.meta.env.VITE_BAR); // undefined ``` What actually happens…

### CASE-8243 · Exposed env vars are not available
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, vue
- **Signals**: 👍3 💬16 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug Using an `.env` file to define environment variables, static values are passed on and available in Vue as expected. Exposing existing env vars to Vue, however, does not work and produces empty values. I've exposed the env var using the syntax from [this comment]([link] tool][ref][ref]). STR: * open reproduction * start dev server with command `PORT=4000 npm run dev` Expected: `PORT` should be available from `main.js` and output `4000`. Actual: `PORT` is an empty string. ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.6.1 CPU: (12) x64 Intel(R)…

### CASE-8249 · vite 6 breaks ability to using special chars in html tags attrs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍3 💬15 · closed · labels: p2-to-be-discussed
- **Excerpt**: ### Describe the bug when using ejs tags (like `html: {cspNonce: '<%= nonce _%>'},` or `experimental: { renderBuiltUrl(filename) {return `<%= somePath %>/${filename}`;}})`) , or URLS that contains multiple query strings parameters `http:host.com/url?query=123&limit=100`, in any html tag attribute, the `", ', &, <, and >`. are escaped and so the output html is no longer correct. (the typical use case for the ejs approach is to have express render the built html page and populate those template variables at runtime). The bug is not present in vite 5 and was introduced by [ref] , to fix issue…

### CASE-8259 · Relative url not correctly rebased when using less
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: vite, vue
- **Signals**: 👍0 💬14 · closed · labels: feat: css/p2-nice-to-have/regression
- **Excerpt**: ### Describe the bug Hello Vite, When upgrading to Vite >=3.2.3 there is a problem when resolving variables inside an import that uses less. The [linked project]([link]) demonstrates the bug. The project is made from a freshly created Vue+Vite project with following important changes for the bug: - `./vite.config.ts` alias - `./src/components/HelloWorld.vue` row 2 with `import 'thingy/style-thingy.less';` - `./src/style.css` with ` font-family: 'OSR';` - And now for the code causing the bug: everything in `./src/thingy/*` This works in 3.2.2 but not in 3.2.3 and above, not even in 4.0.1. So…

### CASE-8286 · Exporting redefined "Object" throws an error in SSR
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: vite
- **Signals**: 👍1 💬12 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug When `Object` variable is redefined and exported from a module, Vite SSR fails with an error: ``` Error: Cannot read properties of null (reading 'defineProperty') at eval (/home/projects/node-m1jzee/test.js:6:8) at _0x2e26db._evaluate ([link]) at async ModuleJob.run ([link]) ``` Related: [link] ### Reproduction [link] ### Steps to reproduce ``` node index.mjs ``` ### System Info ```shell Stackblitz ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the…

### CASE-8296 · Uncaught Error: Unknown variable dynamic import
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬12 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ![image]([link]) When I use the command npm run dev locally, it works normally. But the package file after executing npm run build does not work normally npm run dev: ![image]([link]) npm run build: ![image]([link]) Some related configurations: BrowserRouter, Suspense, lazy ![image]([link]) ![image]([link]) vite.config.ts ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.5.2 CPU: (8) x64 Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz Memory: 304.15 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.6.0 - /usr/local/bin/node Yarn:…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8217 · CSS Modules - composed styles are duplicated
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍4 💬19 · open · labels: feat: css/has workaround/p3-minor-bug
- **Excerpt**: ### Describe the bug Importing a css module that's been composed ends up duplicating styles. In the reproduction linked below, our `App.tsx` has 2 div elements with texts that have different styles. The styles are under the `styles` folder. The first text is styled using `originalText` style from `original.module.css`, and should have a 32px font size. The second one should have a 14px font size, since it's styled using `smallText` from `small.module.css`, which composes `originalText` and then overrides the font size. However, it doesn't work as expected. The `originalText` style from…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8218 · SSR fails on sub-package imports when `exports` field is defined (can't SSR Firebase v9)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: p4-important/feat: ssr
- **Excerpt**: ### Describe the bug `tryNodeResolve` fails on Firebase. It swallows this exception from `_resolveExports` inside `resolveExports`: > Missing "." export in "firebase" package It seems reasonable that Firebase doesn't export this because they don't allow you to import `firebase`. You have to import a sub-package like `firebase/functions`, etc. I don't see anything in [the Node docs]([link]) that says you must export `.` As a result, Firebase is not treated as external eventhough it provides a CJS build. This in turn causes SSR to fail when using Firebase ### Reproduction [link] ### System Info…

### CASE-8220 · ssrBuild with async Vue3 components / routes , trouble with import to require conversion in built files.
- **Principles**: P-F4 · **Env**: vue, vite
- **Signals**: 👍1 💬19 · closed · labels: bug: upstream/has workaround
- **Excerpt**: ## Describe the bug I've been spending some time with the mostly undocumented ssrBuild feature of Vite + Vue3, so this might not actually be a bug but working as intended and i might be doing something wrong. I am trying to run the ssrBuild with a router that defines some async components as below: ```js export default function (type) { const routerHistory = type === 'client' ? createWebHistory() : createMemoryHistory(); return createRouter({ history: routerHistory, routes: [ { path: '/', component: Home, props: true }, { path: '/a', component: () => import('./components/PageA.vue'), props:…

### CASE-8239 · virtual file system is broken in v6
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬16 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug ```ts import { createServer } from 'vite' const server = await createServer({ plugins: [ { name: 'virtual-fs', resolveId (id) { if (id === 'my-virtual-file') { return id + '.js' } }, load (id) { if (id === 'my-virtual-file.js') { return 'export default "Hello, world!"' } } } ] }) console.log(await server.ssrLoadModule('my-virtual-file.js')) await server.close() ``` This is working in v5, but broken in v6. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell N/A ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X]…

### CASE-8244 · Inconsistent SSR require/import paths on Windows
- **Principles**: P-F4 · **Env**: windows, linux
- **Signals**: 👍4 💬16 · closed · labels: windows only/pending triage/feat: ssr
- **Excerpt**: ### Describe the bug The following entries appear in `require.cache` on Windows... ```js [ 'C:\\DevTemp\\my-app\\node_modules\\solid-js\\web\\dist\\server.cjs', 'C:/DevTemp/my-app/node_modules/solid-js/dist/server.cjs', 'C:\\DevTemp\\my-app\\node_modules\\solid-js\\dist\\server.cjs' ] ``` Note the 2nd and 3rd paths above refer to the same file. Whereas on Linux in the same project we see... ```js [ '/home/brendan/devtemp/my-app/node_modules/solid-js/web/dist/server.cjs', '/home/brendan/devtemp/my-app/node_modules/solid-js/dist/server.cjs' ] ``` The second entry results from a `require()` call…

### CASE-8246 · `import_meta.glob is not a function` (updating `[email]` -> `[email]`)
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬16 · closed · labels: bug: upstream/has workaround/feat: ssr
- **Excerpt**: The latest release `2.3.5` breaks `vite-plugin-ssr` and the browser throws `Uncaught TypeError: import_meta.glob is not a function`. I'm looking at what change may have led to that.

### CASE-8247 · build error faunadb: require is not defined / Cannot read property 'custom' of undefined
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍2 💬16 · closed · labels: wontfix/has workaround
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I created a new svelte-kit app, which will execute a faunadb query via netlify function. A small example can be found here: [link] On npm run dev, vite shows me the following exception: ```node 23:22:19 [vite] Error when evaluating SSR module /node_modules/faunadb/index.js: ReferenceError: require is not defined at /node_modules/faunadb/index.js:1:13 at instantiateModule…

### CASE-8254 · Vite 2.7.0-beta.4 regression when building for SSR targeting Cloudflare Workers
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬15 · closed · labels: feat: ssr
- **Excerpt**: ### Describe the bug I'm using Vite to build an SSR app targeting Cloudflare Workers. Below is my config for the build of the server entry: ``` publicDir: false, build: { minify: true, outDir: serverOutDir, rollupOptions: { input: { index: entry }, output: { output: { manualChunks: () => "index.js", dir: serverOutDir, }, }, }, }, ssr: { target: "webworker", noExternal: true, }, ``` The intention is to output a single file that runs in a CF Worker and this works in Vite 2.6.x up until 2.7.0-beta.4 where it breaks. In 2.7.0-beta.4 the build completes fine and it still outputs 1 file as it…

### CASE-8263 · Better handling of dynamic imports in dead code
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍11 💬14 · closed · labels: has workaround/p3-minor-bug
- **Excerpt**: ### Describe the bug When working with SSR, one would expect patterns like this to work: ```js if (import.meta.env.SSR) { const { data } = await import('./loadServer'); console.log(data); } else { const data = await fetch('/data').then((r) => r.text()); console.log(data); } ``` I.e., ignore `loadServer` for the browser bundle. It actually works fine with the dev server, but when `loadServer` (transitively) imports node builtin modules, `vite build` fails with e.g.: ``` Error: 'readFile' is not exported by __vite-browser-external, imported by loadServer.js ``` It would be nice if vite could…

### CASE-8265 · [SSR] Stop resolving externalized dependencies
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬14 · closed · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug AFAICT, Vite should completely ignore externalize SSR dependencies, including: - Not trying to resolve the dependency's module locations - ~Not read the dependency's code at all~ (edit: this seems to be the case ✅ ) E.g. [link] I don't see a reason why Vite should try to resolve the module `vuetify/lib/components`. Proposal: Vite should completely ignore externalized deps. cc @user @user Do you know why Vite touches externalized deps? @user I'm thinking maybe we should cue in Evan about this at some point. ### Reproduction Vuetify repro: [link]

### CASE-8267 · HMR duplicated modules because of query params mismatch
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬14 · closed · labels: feat: hmr/p4-important
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. 我只能希望我正确地遵循了中文说明 ## Describe the bug HMR sometimes reload the same version of a given module with different query parameters, resulting in duplicated copies of this module in the browser. Different importers get different runtime…

### CASE-8271 · Vite errors on import of @user/js-api-loader
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍1 💬13 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I'm trying to use the Google Maps api-loader library to inject the Google Maps api script into my sveltekit webapp. The library was installed in my project with "npm i @user/js-api-loader" and is invoked in my webapp code with "import { Loader } from '@user/js-api-loader';". When I run "npm run dev", the procedure fails with the following error : _22:04:04 [vite] Error when evaluating SSR module /src/routes/+page.svelte: failed to import "@user/js-api-loader" |- SyntaxError: [vite] Named export 'Loader' not found. The requested module '@user/js-api-loader' is a CommonJS…

### CASE-8272 · Vite SSR Imports not loading classes correctly - constructors not loaded
- **Principles**: P-F4 · **Env**: vite, svelte, typescript
- **Signals**: 👍1 💬13 · closed · labels: contribution welcome/p2-nice-to-have/feat: ssr
- **Excerpt**: ### Describe the bug I'm trying to use a class in a Vite + SvelteKit project with TypeScript enabled. However, when I try to use a class and construct it in other places, while IntelliSense/LSPs don't throw any errors, when building/developing, the following error is outputted: ``` 11:00:08 AM [vite] Error when evaluating SSR module /src/lib/core/games/chess/chess.ts: |- TypeError: __vite_ssr_import_0__.GameMetadata is not a constructor at eval (/home/ramendev/projects/just-games/src/lib/core/games/chess/chess.ts:5:15) at async instantiateModule…

### CASE-8276 · CommonJS dependencies crash SSR server
- **Principles**: P-F4 · **Env**: ios
- **Signals**: 👍5 💬13 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug CommonJS dependencies encountered during SSR can crash the server (e.g. `ReferenceError: module is not defined` or `ReferenceError: require is not defined`, depending on which is first) if workspaces are used in some capacity. I have identified two specific scenarios where this will occur: 1. The CJS dependency is a workspace (i.e. `app` → `cjs-workspace`) 2. The CJS dependency is a sub-dependency of a pnpm or Yarn PnP workspace dependency (i.e. `app` → `other-workspace` → `cjs-npm-dependency`) While possibly confusing, the first scenario is arguably intentional behavior…

### CASE-8282 · preload 动态组件 异常处理
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!--StartFragment--> return Promise.all( deps.map((dep) =&gt; { // @user if (dep in seen) return // @user seen[dep] = true const isCss = dep.endsWith('.css') const cssSelector = isCss ? '[rel="stylesheet"]' : '' // @user check if the file is already preloaded by SSR markup if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) { return } // @user const link = document.createElement('link') // @user…

### CASE-8291 · [Vite 3] `@user/plugin-vue` breaks HMR when used with `vite-plugin-ssr`
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬12 · closed · labels: pending triage/feat: hmr/feat: ssr
- **Excerpt**: ### Describe the bug HMR doesn't work. **== EDIT ==** The root cause seems to be that `@user/plugin-vue` is not respecting ecosystem query parameters. See discussion below. **=========** I had a quick look at it: the signal is not being sent to the browser. Note that the socket message `{"type":"update","updates":[{"type":"js-update","timestamp":1658677022754,"path":"/pages/index.page.client.vue?extractExportNames&lang.vue"` is not enough (it only updates the `?extractExportNames` version of the module). The terminal says: ``` 5:38:42 PM [vite] hmr update…

### CASE-8292 · Make `ssr.noExternal` shallow
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬12 · open · labels: pending triage/breaking change
- **Excerpt**: ### Description Current behavior in v2: when an SSR dependency `some-library` is `noExternal`, then Vite will as well `noExternal` all `some-library`'s dependencies. Current behavior in v3 (beta): slightly better because it only `noExternal` dependencies of `some-libraries` that cannot be resolved. (Correct me if I'm wrong.) ### Suggested solution Externalize all `some-library`'s dependencies. I.e. only make `some-library` `noExternal`. ## Priority Low. (Because AFAICT this doesn't cause the same problems than `noExternalize` too many SSR user dependencies.) ### Alternative _No response_ ###…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-8283 · Vite dev server bundles two versions of a file causing `svelte-routing` to break
- **Principles**: P-F5, P-H3 · **Env**: vite, svelte
- **Signals**: 👍1 💬13 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Using `svelte-routing` as the router, when `navigate()` is called, the address bar url changes, but the displayed route component doesn't change. It appears that triggering of some event listeners are not working when running with Vite. ([link]) The same code works when used with plain Rollup, and when used with `vite build` + `vite preview`. Only `vite` dev server has the issue. This could be related to [link]…

