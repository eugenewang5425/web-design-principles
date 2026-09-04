# Case Chunk 077 — Round 77

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8601 · Vite does not resolve css url() paths correctly
- **Principles**: P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Older issue: [link] tool][ref] I have the same problem. The browser can not load the font. If i add a dot before the slash or remove the slash, it works **My build config** ` build: { outDir: fileURLToPath(new URL('./../public/admin', import.meta.url)), target: 'esnext', manifest: true, emptyOutDir: true, minify: true, rollupOptions: { input: fileURLToPath(new URL('./src/main.ts', import.meta.url)), output: { entryFileNames: '[name].js', chunkFileNames: '[name]-[hash].js', assetFileNames: '[name].[ext]', globals: { vue: 'Vue' } } } },` **The output** ` @user{…

### CASE-8685 · Cannot access ambient const enums when the '--isolatedModules' flag is provided.
- **Principles**: P-B1, P-B2, P-B3 · **Env**: react, vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Error when build with @user/react: <!-- A clear and concise description of what the bug is. --> ``` $ tsc && vite build node_modules/@user/font-icons-mdl2/lib/IconNames.d.ts:1807:51 - error TS2748: Cannot access ambient const enums when the '--isolatedModules' flag is provided. 1807 export declare type IconNamesInput = keyof typeof IconNames; ``` <!-- If you intend to submit a PR for this issue, tell us in the…

### CASE-8693 · Cannot load font files referenced in a node_modules css file
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [ ] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug I'm working on a new project at work, and we're using a node_modules dependency containing all the company css. The css file itself loads Font Awesome files with relative paths: ```css @user { font-family: Font Awesome\ 5 Free; font-style: normal; font-weight: 400; font-display: auto; src: url(../fonts/fa/fa-regular-400.eot); src: url(../fonts/fa/fa-regular-400.eot?#iefix)…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8602 · Environment variables aren't refreshed when the env file is referred to from test/env in the config file
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react, tailwind
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Very simple `.env` ``` VITE_USE_FIREBASE_EMULATORS=true ``` Fairly simple `vite.config.ts` ``` /// <reference types="vitest/config" /> import react from "@user/plugin-react-swc" import { config } from "dotenv" import tailwindcss from "tailwindcss" import { defineConfig } from "vite" import tsconfigPaths from "vite-tsconfig-paths" export default defineConfig({ plugins: [react(), tsconfigPaths()], css: { postcss: { plugins: [tailwindcss()] } }, test: { env: { ...config({ path: "./.env" }).parsed } } }) ``` and fairly simple check, either…

### CASE-8603 · Issue with Vite's new Sass JS API and `@user/sass-json-importer`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug **Describe the bug** I'm attempting to use Vite's new Sass JS API for a project where I need to convert JSON files into Sass variables. Previously, I used the `node-sass-json-importer` package with the old Vite configuration. Here's an example of the old config: ```javascript import jsonImporter from 'node-sass-json-importer'; export default { css: { preprocessorOptions: { scss: { additionalData: '@user "@user/assets/scss/utils" as *;', importer: jsonImporter(), }, }, // Specific PostCSS config file folder. postcss: '../../packages/AAA', }, }; ``` With the new API, I…

### CASE-8608 · Environment variable value not reloading when ".env changed, restarting server..." if process.env. is mutated once
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬6 · open · labels: pending triage
- **Excerpt**: ### Describe the bug I was thinking it is a critical issue but when recreating the minimal reproducible PoC for the issue I found the [root cause]([link] tool]/blob/1465b2064ee23ac5df5414b13355a394ccd931af/packages/vite/src/node/env.ts#L65). I still think this should be resolved even if it is more related to the developer's mistake than a bug. Long story short; I was looking to use process.env. in the vite.config.js file and I found this example [link] but that response is not compatible with the current vite at all and will create all sorts of issues if used in dev mode. ```javascript // !!!…

### CASE-8616 · Breaking change to env vars expansion since [email]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug We're using env expansion feature for our .env files. Given following .env file as example: ```ini # .env VITE_SOURCE=12345 VITE_EXPANDED=$VITE_SOURCE-678-ab ``` ### We expect, the behaviour of Vite@<=5.1.1: ```js console.log(import.meta.env.VITE_EXPANDED) // 12345-678-ab ``` ### Actual result for Vite@>=5.1.2: ```js console.log(import.meta.env.VITE_EXPANDED) // 12345 ``` the `-678-ab` part is missing now ### Reproduction [link] ### Steps to reproduce - have any setup with [email]+ - have any .env file setup - in .env file have an env variable vith env expansion and…

### CASE-8617 · ESM `.postcssrc.ts` w. `"type": "module"` results in `ERR_REQUIRE_ESM`
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: Originally reported over here by @user (before [the issue was fixed in `postcss-load-config`]([link])): - [link] tool][ref] --- ### Describe the bug Upgrading to a version after [`[email]`]([link]) (which [added support for ESM `postcss.config.ts` w. `"type": "module"`]([link]) does not resolve the problem in Vite that `require()` is used to load an ESM `postcss.config.ts` (or any other variations on the TS config) when in a `"type": "module"` project: ```bash > vite [Failed to load PostCSS config: Failed to load PostCSS config (searchPath: /home/projects/vitejs-vite-2gepfr): [Error] Must use…

### CASE-8622 · Variable-width fonts not resolving during Vite build
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: vite, react
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm currently converting a large web app from create-react-app to Vite. Our SCSS framework uses variable width & weight fonts, which are imported using `url()` in SCSS. We need to provide these fonts as static assets in our project, since our users often use it in environments without an internet connection to fetch webfonts with. The font file names contain square brackets `[` for the weight and width to be injected into. However, using square brackets in the import string results in incorrect font file names in the build output, where the square brackets are replaced…

### CASE-8633 · Vite library build is polluting global namespace
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug I am building a library. I have js file with class, which defines some fields. It is external npm package file, but the same occurs for simple code like this: ``` export class X { someField; } ``` After build, iife and umd output files in dist folder are polluted with auxiliary global variables. ``` var __defProp = Object.defineProperty; var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value; var __publicField = (obj, key, value) => { __defNormalProp(obj, typeof key…

### CASE-8636 · use environment set some prototype use if condition, it will remove all if statement block when building.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: invalid
- **Excerpt**: ### Describe the bug ``` vite -v // output vite/2.9.12 win32-x64 node-v16.10.0 ``` when i set a environment variable, like: ``` // .env.release file VITE_USER_ACCESS: 'user_access_placeholder' ``` useing code, like: ```ts window.test = 'test'; // mark if (import.meta.env.VITE_USER_ACCESS === 'enabled') { // .... } window.testend = 'test; ``` after build output file, search code ``` vite build --mode release ``` ``` // index.hash.js window.test='test';window.testend='test; ``` found. lose contents in the if statement. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info…

### CASE-8660 · "this" parameter in iife transpiled another variable in production
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: bug: upstream/p3-minor-bug/inconsistency/feat: commonjs
- **Excerpt**: ### Describe the bug There is no issue in dev environment but in production when using "this" as parameter in iife, "this" should mean window object but transpiled another variable. For example I am using device-uuid package and this package using iife with "this" parameter. ### Example Usage ``` (function (exports) { var DeviceUUID = function(options) { ... } exports.DeviceUUID = DeviceUUID; return new DeviceUUID(navigator.userAgent); })(this); ``` ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.2.1 CPU: (8) x64 Apple M1 Memory: 22.84 MB / 8.00 GB Shell: 5.8 - /bin/zsh…

### CASE-8677 · import.meta.env build failed when using custom type `number`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I wanted to customize env variable in `vite-env.d.ts` ``` /// <reference types="vite/client" /> interface ImportMetaEnv { readonly VITE_APP_TITLE: string readonly VITE_PORT: number } ``` But when building the project it failded with the message: Property 'VITE_PORT' of type 'number' is not assignable to string index type 'string | boolean | undefined'. ### Reproduction Repo link: [Here]([link]) ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (4) x64 Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz Memory: 1.56 GB / 7.89 GB Binaries: Node: 14.15.4 -…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8604 · [@user/plugin-legacy] Polyfills for Symbol make the app break on old browsers
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chrome 38, ios
- **Signals**: 👍1 💬6 · closed · labels: bug: upstream/has workaround/plugin: legacy/p2-edge-case
- **Excerpt**: ### Describe the bug I'm using `@user/plugin-legacy` to target Chrome >= 38, including polyfills so I expect the app work properly in Chrome 38. However, when I run the built app on that browser an error is displayed in the console: "Unhandled promise rejection TypeError: @@user must return a primitive value". In my app, I'm using Axios. One of its classes (`AxiosHeaders`) defines a `[Symbol.iterator]` property. So, when Babel transpiles this class, it defines this property calling `Symbol.iterator[Symbol.toPrimitive]('string')`. This call returns an object, not a primitive value, so the…

### CASE-8607 · Links to icons in webmanifest are not resolved during building
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, android
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Have a link to webmanifest in html file ```html <link rel="manifest" href="src/assets/manifest.webmanifest" /> ``` Original peace of code from webmanifest ```json "icons": [ { "src": "/src/assets/site_icons/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" }, ... ``` After building have a webmanifest in dist with original paths & names as in development The icons themselves are also missing in dist ```json "icons": [ { "src": "/src/assets/site_icons/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" }, ... ``` all other icons in…

### CASE-8610 · Vite is seemingly creating empty/junk source maps when optimizing dependencies
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, vite, react
- **Signals**: 👍28 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When running a very basic Preact app (see reproduction), in FireFox (perhaps elsewhere too, unsure), users see warnings of `No sources are declared in this source map` and indeed, the optimized dependencies have empty generated source maps. <details> <summary>Warning & Source Map</summary> ``` Source map error: No sources are declared in this source map. Resource URL: [link] Source Map URL: preact.js.map ``` Repeat this warning then for every dependency > `node_modules/.vite/deps/preact.js.map` ```json { "version": 3, "sources": [], "sourcesContent": [], "mappings": "",…

### CASE-8614 · Uncaught ReferenceError: document is not defined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos
- **Signals**: 👍1 💬6 · closed · labels: p3-minor-bug/regression/feat: web workers
- **Excerpt**: ### Describe the bug <img width="566" alt="image" src="[link] tool]/assets/31335385/f40bbfd5-a0a4-4935-b8fd-a9bd84e59e58"> 使用了 wasm ### Reproduction [link] ### Steps to reproduce pnpm dev ### System Info ```shell System: OS: macOS 14.4 CPU: (10) arm64 Apple M1 Max Memory: 1.20 GB / 64.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.17.1 - ~/.nvm/versions/node/v18.17.1/bin/node Yarn: 1.22.21 - /opt/homebrew/bin/yarn npm: 9.6.7 - ~/.nvm/versions/node/v18.17.1/bin/npm pnpm: 8.15.1 - /opt/homebrew/bin/pnpm bun: 1.0.18 - ~/.bun/bin/bun Browsers: Chrome: 123.0.6312.59 Safari: 17.4 npmPackages:…

### CASE-8624 · Latest two versions of Safari should be fully supported in legacy plugin
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I noticed the legacy plugin uses this Browserslist query: [`last 2 versions and not dead, > 0.3%, Firefox ESR`]([link] tool]/blob/85c38abda0b28cdb45503dc6badee920dc56c182/packages/plugin-legacy/src/index.ts#L308) Unfortunately, because of how Browserslist works, this only includes some of the last 2 major versions of Safari, since `last 2 versions` only includes the last 2 minor versions, and `> 0.3%` excludes some minor versions due to low usage. I suggest using `last 2 major versions and not dead, > 0.3%, Firefox ESR` instead. This could potentially expand supported…

### CASE-8628 · @user/plugin-legacy does not take effect in dev mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chrome 78
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug @user/plugin-legacy does not take effect in dev mode. We also need polyfill in the development mode. ### Reproduction [link] ### Steps to reproduce Nullish coalescing assignment (x ??= y) cannot use in the old chrome like <85. For reproducing you should use old version chrome(like chrome 78 even older) visit the dist after build and deploy. 1. Plaease visit the Reproduction link and doneload the zip then unzip. 2. npm i 3. npm run dev 3.1 Use old chrome visit localhost:5173 then press F12, you can see this error: Uncaught SyntaxError: Unexpected token '?' 4. npm run build…

### CASE-8629 · Env variable DEBUG not working with vite cli
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, windows, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I want vite to only output logs in namespace `vite:time`, so I set env variable `DEBUG="vite:time"`, but it still output all logs. ### Reproduction [link] ### Steps to reproduce See output from terminal, it not only contains logs in namespace `vite:time`, but also `vite:deps`, `vite:cache`, etc. ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (16) x64 12th Gen Intel(R) Core(TM) i5-12600K Memory: 4.03 GB / 15.75 GB Binaries: Node: 18.14.0 - D:\Compilers\nodejs\node.EXE npm: 9.3.1 - D:\Compilers\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0),…

### CASE-8641 · ES module error after updating `3.1.5`,
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍5 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug After updating from `3.1.4` to `3.1.5`, below error being occured: I'd roll backed to `3.1.4` and the bug has been disappeared. ```bash SyntaxError: Cannot use import statement outside a module ``` ### Reproduction Just install `3.1.5` ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 53.79 GB / 63.41 GB Binaries: Node: 16.6.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.19.1 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.22000.120.0), Chromium…

### CASE-8646 · Transform failed - Expected ";" but found "from"
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, firefox, safari, macos, vue, vite
- **Signals**: 👍0 💬6 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug Transform failed after running `yarn build` ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5.1 CPU: (8) arm64 Apple M1 Memory: 95.75 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.13.1 - /usr/local/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 8.1.2 - /usr/local/bin/npm Browsers: Chrome Canary: 107.0.5260.0 Firefox Developer Edition: 104.0 Safari: 15.6.1 npmPackages: @user/plugin-vue: ^3.0.3 => 3.0.3 vite: ^3.0.9 => 3.0.9 ``` ### Used Package Manager yarn ### Logs <details> <summary>Click to expand!</summary> ```shell vite:config…

### CASE-8648 · cant resolve css in deep node_module dir
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite, react
- **Signals**: 👍1 💬6 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug I import a less file in src. this less file import B.less in node_module, B.less import A.less in moduleB own node_module. vite cant find A.less ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.2.1 CPU: (10) arm64 Apple M1 Pro Memory: 282.52 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 18.4.0 - ~/.nvm/versions/node/v18.4.0/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 8.12.1 - ~/.nvm/versions/node/v18.4.0/bin/npm Browsers: Chrome: 104.0.5112.79 Safari: 15.3 npmPackages: @user/plugin-react: ^2.0.1 => 2.0.1 vite: ^3.0.7 => 3.0.7 ``` ###…

### CASE-8650 · `iife` code generated by vite3 is not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬6 · closed · labels: bug: upstream/feat: library mode
- **Excerpt**: ### Describe the bug I was building a lib generated in `iife` mode, and it is not working as soon as i put it on cdn. <img width="805" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.6 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz Memory: 438.13 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 18.6.0 - ~/.nvm/versions/node/v18.6.0/bin/node Yarn: 1.21.1 - /usr/local/bin/yarn npm: 8.13.2 - ~/.nvm/versions/node/v18.6.0/bin/npm Watchman: 4.9.0 - /usr/local/bin/watchman Browsers: Chrome: 103.0.5060.134 Firefox: 102.0 Safari: 15.0…

### CASE-8652 · vite真机访问调试显示白屏
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, vite, iphone
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug [link] 随便这个能写js代码的地方 class MyClass{ name='value'// 写了这行代码iphone真机显示白屏，pc访问正常，android没测过 } ### Reproduction [link] ### System Info ```shell "vite": "^2.9.9" ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite…

### CASE-8656 · CSS is included in SSR builds
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, linux
- **Signals**: 👍1 💬6 · closed · labels: pending triage/feat: css/feat: ssr/regression
- **Excerpt**: ### Describe the bug CSS is included in SSR builds, which is unexpected: CSS is useless on the server-side. (You can actually see that the CSS included in the SSR build is unused.) ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.10 Debian GNU/Linux 10 (buster) 10 (buster) CPU: (2) x64 Intel(R) Celeron(R) N4020 CPU @ 1.10GHz Memory: 413.73 MB / 2.71 GB Container: Yes Shell: 5.0.3 - /bin/bash Binaries: Node: 18.0.0 - ~/.config/nvm/versions/node/v18.0.0/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 8.6.0 - ~/.config/nvm/versions/node/v18.0.0/bin/npm Browsers: Firefox:…

### CASE-8658 · Failed to parse JSON file.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, react, vite
- **Signals**: 👍0 💬6 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug parse json fail ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (6) x64 Intel(R) Core(TM) i5-9400 CPU @ 2.90GHz Memory: 6.55 GB / 15.86 GB Binaries: Node: 16.13.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD npm: 8.1.2 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (102.0.1245.41) Internet Explorer: 11.0.19041.1566 npmPackages: @user/plugin-react: ^1.3.0 => 1.3.2 vite: ^2.9.9 => 2.9.12 ``` ### Used Package Manager pnpm ### Logs ```shell Just run the project…

### CASE-8659 · test-serve(main): `not-preserve-symlinks` test on Windows fails
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, windows, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug it seems there is something broken on Windows running `test-serve` script on main branch (Windows 10 PRO machine: I enable dev mode): ![imagen]([link]) ### Reproduction just clone main on a Window 10 machine and run the `test-serve` script ### System Info ```shell npx envinfo --system --npmPackages '{vite,@user/*}' --binaries --browsers System: OS: Windows 10 10.0.19044 CPU: (16) x64 Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz Memory: 41.21 GB / 63.95 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE npm: 8.1.0 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome:…

### CASE-8661 · Breaking change in 2.9: listening server on server.hmr.port
- **Principles**: P-G1, P-G2, P-G3 · **Env**: linux, vite
- **Signals**: 👍2 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug We have a bit of a special setup: instead of Vite proxying our server, we proxy to Vite via our server. We do this using a config that has a section looking like this: ```javascript server: { port: 5588, hmr: { port: 3001, }, }, ``` This makes the in-app Vite client contact a server on port 3001, and this has been working fine up until now. But with the 2.9 upgrade, suddenly Vite itself started a listening IPv6 port on server.port. This is new, and conflicts with our setup. I am not sure of a workaround. ### Reproduction [link] ### System Info ```shell System: OS: Linux…

### CASE-8664 · CSS import regression in Vite 2.8
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/feat: css/regression
- **Excerpt**: ### Describe the bug When you import CSS using the `inline` flag, like ``` import prismCss from 'prismjs/themes/prism-okaidia.css?inline'; ``` the value is available in development mode but becomes an empty string in the built version ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.2 CPU: (10) arm64 Apple M1 Max Memory: 1.75 GB / 64.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.3.0 - ~/.nvm/versions/node/v17.3.0/bin/node npm: 8.3.0 - ~/.nvm/versions/node/v17.3.0/bin/npm Browsers: Chrome: 97.0.4692.99 Firefox: 95.0.2 Safari: 15.3 npmPackages: vite: ^2.8.0-beta.6 =>…

### CASE-8666 · Vite server ends up in a infinite reload loop when used with usb remote debugging on Android with chrome://inspect
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, android, vite, desktop
- **Signals**: 👍0 💬6 · closed · labels: pending triage/cannot reproduce/feat: hmr
- **Excerpt**: ### Describe the bug I have a vite project working perfectly fine on my desktop. Now I try to debug it on my phone using the remote debugger of chrome. I head to chrome://inspect, forward the port 3000 and then on the phone I can successfully load the website (so the port forwarding work just fine) but then vite server enters into a reloading loop and I have no idea why as a user. It seems some connection is lost (likely that hmr stuff) but there is no actionable feedback or useful debug since the debug output gets cleared because the page is reloaded. I think a 4s timeout would already help…

### CASE-8667 · error when starting dev server on v2.7.11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, react, vite
- **Signals**: 👍1 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Just upgraded to v2.7.11, on previous 2.7.10 all starts fine ### Reproduction need reproduction ### System Info ```shell System: OS: macOS 12.0 CPU: (8) arm64 Apple M1 Memory: 79.16 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.8.0 - ~/.nvm/versions/node/v16.8.0/bin/node Yarn: 3.1.0 - ~/.nvm/versions/node/v16.8.0/bin/yarn npm: 7.21.0 - ~/.nvm/versions/node/v16.8.0/bin/npm Watchman: 2021.12.20.00 - /usr/local/bin/watchman Browsers: Chrome: 97.0.4692.71 Firefox: 88.0.1 Safari: 15.0 npmPackages: @user/plugin-react: ^1.1.4 => 1.1.4 vite: 2.7.11 => 2.7.11 ``` ### Used…

### CASE-8668 · Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I use import or require dby-base, this error occurre. ### Reproduction import or require dby-base in a new vite project ### System Info ```shell System: OS: macOS 11.0.1 CPU: (4) x64 Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz Memory: 96.02 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.15.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.8 - /usr/local/bin/npm Watchman: 4.1.0 - /usr/local/bin/watchman Browsers: Chrome: 96.0.4664.110 Firefox: 92.0 Safari: 14.0.1 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X]…

### CASE-8679 · load page is too lang
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vue, tailwind
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug When i use UI Framework in my projects,I import the css and run my app ,The browser load the css is too lang. ### Reproduction import 'ant-design-vue/dist/antd.css'; import 'tailwindcss/tailwind.css'; ### System Info ```shell System: OS: macOS 11.4 CPU: (12) x64 Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz Memory: 178.13 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.13 - /usr/local/bin/npm Watchman: 4.9.0 - /usr/local/bin/watchman Browsers: Chrome: 91.0.4472.114 Safari: 14.1.1 ``` ### Used…

### CASE-8687 · using target 'chrome 49' with plugin-legacy, after compilation, there is still imports in js files.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 49, chrome, windows, vue
- **Signals**: 👍0 💬6 · closed · labels: plugin: legacy/p3-minor-bug
- **Excerpt**: ### Describe the bug I'm trying to make my vue3 website work on chrome 49, which is the laster version for chrome working with windows xp. However, after compilation, there is still imports in 17 js files, for example: ```node `import"core-js/modules/es.promise.js";`. `import"core-js/modules/es.array.slice.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";` ``` Meanwhile, in other files there is no imports exists. ### Reproduction use chrome 49 as…

### CASE-8697 · how can i use vite with electron
- **Principles**: P-G1, P-G2, P-G3 · **Env**: vite, electron, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug when i use sqlite3 in my project ``` import HelloWorld from './components/HelloWorld.vue' import { ref } from 'vue' const sqlite = require('sqlite3') export default { name: 'App', components: { HelloWorld, }, setup() { const sqlite3 = sqlite.verbose() var db = new…

### CASE-8698 · DevTools very slow when importing @user/ui
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, tailwind, vite
- **Signals**: 👍10 💬6 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Tailwind UI is a CSS framework which during dev phase bundles a LOT of CSS to the webpage, around 4 MB. It seems that this, combined with how Vite inserts its CSS (using a script tag for HMR purposes) makes it very slow to parse by the browser, to the point of being almost unusable. Here's a video of how Chrome on a recent Macbook Pro handles a simple Vite + Tailwind starter project: [link] ## Reproduction Here's a sample project that can be used to reproduce the issue, note that you also have to add @user/ui as described in the readme (the issue shows itself without it,…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8605 · SVGs not loading correctly as background images in Vite
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬6 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I'm encountering an issue where SVG files used as background images in my React components are not being handled correctly by Vite. When building the project, the SVGs are not inlined as data URIs and neither included in the final build (because of their small sizes), resulting in broken image references. It works perfectly fine in <img /> tag though, as smaller SVGs are inlined as data URIs. ### Steps to reproduce 1. Create a new React project: npx create-react-app my-vite-app 2. Install Vite: cd my-vite-app npm install -D vite 3. Create an SVG file: Create an…

### CASE-8618 · umd in production import two vue； esm and commonjs
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬6 · closed · labels: inconsistency
- **Excerpt**: ### Describe the bug we use esm vue in main project ``` { find: 'vue$', replacement: resolve('./node_modules/vue/dist/vue.runtime.esm.js'), } ``` and import a umd npm package; `vue-konva` for example; which code is ![image]([link] tool]/assets/5386958/d5346c03-6be6-45c4-8bde-ea70d892c6f7) in dev it's only one vue(esm), the generated code ![image]([link] tool]/assets/5386958/b351f20d-90ab-432a-8a97-39c878fc71ac) But in production, rollup with `commonjs` plugin import the commonjs's vue ![QfXy8XZZ3K]([link] tool]/assets/5386958/e425a6b4-6cdd-4987-a3b0-30803996f9ba) all plugin is here…

### CASE-8621 · Vite 4 to Vite 5 causes @user/node-fetch to use server module in browser - leads to `global is not defined` error
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm updating a SvelteKit project from Vite 4 to 5 and Supabase throws an error once the client hydrates `global is not defined`. I'm not sure if this is a Vite bug, a SvelteKit bug, or a Supabase bug. But it's a bug relating to how Vite chooses which server or browser file to serve up. For reference, in Vite 4, @user/node-fetch loads a browser version (browser.js) client-side: ![image]([link]) But in Vite 5 it loads the server version (index.js) on the client thus causing the problem: ![image]([link]) I've also posted this in Supabase: [link] - I hope it's just a simple…

### CASE-8625 · [4.4.1] After update from 4.3.9, server crashes when changing .env file
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: p3-minor-bug/regression
- **Excerpt**: ### Describe the bug Previously on 4.3.9, when I change .env file, server restarts successfully After upgrading to the latest version, server crashes when .env is changed **BEFORE** ![image]([link] tool]/assets/9588282/c111c15e-4eec-42eb-9b8b-ea863485f017) **AFTER** ``` VITE v4.4.1 ready in 1272 ms ➜ Local: [link] ➜ Network: [link] ➜ Network: [link] ➜ Network: [link] ➜ press h to show help 1:09:14 AM [vite] .env changed, restarting server... const err = new Error('The server is being restarted or closed. Request is outdated'); ^ Error: The server is being restarted or closed. Request is…

### CASE-8626 · When I import the UMD library "store2" in Vite, it seems that the build process is not handled correctly.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: bug: upstream/feat: commonjs
- **Excerpt**: ### Describe the bug "store2"([link]) is a third-party UMD package. When I import it in my project and build it as a UMD library, if the environment used is AMD, an error occurs indicating that "store2" is undefined. Then I looked at the generated code and found that Vite did not handle the AMD logic correctly in "store2". This causes "store2" to become an AMD package if the referencing environment is AMD. This code snippet represents the UMD logic of the "store2" library: <img width="815" alt="image" src="[link] tool]/assets/8545094/eb1bb88f-4b80-4b54-886e-f8d7bdc0f208"> This code snippet…

### CASE-8627 · Page background image does not show up on npm run build => FTP
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Running **npm run build** on a Vue 3 installation from Vite. The background image is in a styles file, i.e., `body { background: url('durham.jpg') center center no-repeat; background-size: 100vw; }` The image itself is in the `public/` folder After building and pushing live, the background image does not show up. The path on hover in the CSS Dev Tools shows it at `assets/durham.jpg` `body { background: url(durham.jpg) center center no-repeat; background-size: 100vw; }` But it does not show up. The alias or something with the path is not working. ![Screenshot 2023-06-06 at…

### CASE-8631 · Glob imports with alias don't preserve the pattern
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍11 💬6 · open · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug With a vite config like this: ```js export default { resolve: { alias: { '@': path.resolve(__dirname, './src'), }, }, }; ``` And using eager glob import like this: ```js const jsons = import.meta.glob('@/jsons/*.json', { eager: true }); const json = jsons[`@/jsons/1.json`]; // <- undefined ``` I expect to get the imported JSON module but instead got `undefined`. It turns out that the result of glob import is like this: <img width="457" alt="import result" src="[link]> The alias in the pattern is resolved with absolute path so I cannot access the result using the same…

### CASE-8632 · Vite React Dev Mode doesnt work, but production build works
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to integrate Reactive Search with a React app in Vite [link] Reactive Search doesn't seem functioning in Dev mode. But it works in the production build. I didn't report this to `vitejs/plugin-react` repo since the production build was working correctly ### Reproduction [link] ### Steps to reproduce Run `npm install` and `npm run dev` Current Result: ![image]([link]) Excepted result: ![image]([link]) ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 1.17 GB / 15.96 GB Binaries: Node:…

### CASE-8635 · Routing broken for preview with react-router-dom in 4.0.0-alpha.2
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍9 💬6 · closed · labels: p4-important/regression
- **Excerpt**: ### Describe the bug When going to `/some/route/somewhere` using react-router-dom with preview the query path is not passed to the route leading to a 404 error. In local dev it works fine. `git bisect` indicates this PR is the cause: [link] tool][ref] ### Reproduction [link] ### Steps to reproduce note: the StackBlitz link will run a build then run preview from the terminal query param. In dev the problem does not appear to happen. Go to `/test/about` in the StackBlitz repro: <img width="626" alt="image" src="[link]> ### System Info ```shell n/a ``` ### Used Package Manager yarn ### Logs _No…

### CASE-8637 · [3.2.0-beta.3] `new URL` doesn't work with alias and dynamic path
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍16 💬6 · open · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug The code below doesn't return asset URL ```ts new URL(`@/${img}.svg`, import.meta.url).href ``` Alias alone works, dynamic path works, but these 2 together don't: ![image]([link]) ### Reproduction [link] ### Steps to reproduce Open the repro, see the one image is not loaded while others are ### System Info ```shell stackblitz ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8638 · Changing moduleResolution from Node to Node16 throws error
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍13 💬6 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Trying the Vite React setup on StackBlitz & my local setup, changing the moduleResolution to Node16 throws this error but the server starts and shows the Vite + React page, but it is kinda annoying to have this red highlight on the IDE ### Reproduction [link] ### Steps to reproduce Change moduleResolution of tsconfig to Node16 ### System Info ```shell StackBlitz ``` ### Used Package Manager pnpm ### Logs ![image]([link]) ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link]…

### CASE-8647 · Resolving static assets from a linked dep inside a monorepo
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬6 · closed · labels: invalid
- **Excerpt**: ### Describe the bug When I run `tsc && vite build --watch --mode development` command of my app in a pnpm workspaces monorepo, vite is unable to resolve static assets referenced in a linked dependency of that app. In my case: apps/outlook imports the `packages/calendar` package (a react calendar client built with vite as well). The calendar has some `.tsx` files that reference some statis assets of their own. Error: ```shell Could not resolve '../../assets/info.svg' from ../../packages/calendar/src/components/action-pane/action-pane.tsx ``` ![image]([link]) Research: - I tried asking the…

### CASE-8651 · Bug: "Failed to construct 'URL': Invalid URL" in Vite3.0.0
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Where the bug occurs: ![image]([link]) My "build.target" is "es2015". In the production environment after executing "vite build". After my test, Vite2.9.14 does not have this bug, The bug is on Vite3.0.0. ![image]([link]) ![image]([link]) ### Reproduction no ### System Info ```shell Uncaught TypeError: Failed to construct 'URL': Invalid URL ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). -…

### CASE-8653 · _plugin-vue_export-helper js file cant not be access with Github Pages(404)
- **Principles**: P-A3, P-H1 · **Env**: macos, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug @user/plugin-vue3.0.0 change the name of the export file, that adds the `_`, <img width="378" alt="image" src="[link]> that made the website built with Github Pages can not access because The Github Pages block the file starting with the underline character, Though it can be resolved to add the `.nojekyll` file at the root space, it just not a good solution, I add the `.nojekyll` file in my project, so the Reproduction link maybe not find the error. If the file is removed, it'll make a 404 error. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.4 CPU:…

### CASE-8655 · /_nuxt paths don't work behind Apache reverse proxy
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: invalid
- **Excerpt**: <!-- issue-up-forward-issue [link] --> <table><td><img width="760" height="0" src="[link]> &nbsp;&nbsp;&nbsp;Forwarded from downstream issue: - [link] by @user </td></table><br> ### Environment Nuxt CLI v3.0.0-rc.4 18:38:53 RootDir: /home/haaiee/Projects/nuxt3-problem 18:38:55 Nuxt project info: 18:38:55 ------------------------------ - Operating System: `Linux` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction **Start the…

### CASE-8669 · Production build generates the exported default as the module itself
- **Principles**: P-A3, P-H1 · **Env**: react, typescript, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/p2-edge-case/inconsistency
- **Excerpt**: ### Describe the bug When importing the package [react-mapbox-wrapper]([link]), it behaves differently when used in development and production. Given the following code: ```typescript import * as M from "react-mapbox-wrapper"; console.log(`M`, M); ``` running `vite` outputs: ![image]([link]) running `vite build && vite preview` outputs: ![image]([link]) ### Reproduction 1. clone [link] 2. `npm install` 3. `npm run dev` 4. see that the console.log that mentioned above exports accordingly 5. `npm run build` 6. `npm run preview` 7. see that the console.log logs a module which its default module…

### CASE-8670 · there are error when resolve.extensions add .vue type in window10(64) , but is normal in mac
- **Principles**: P-A3, P-H1 · **Env**: windows, vue, vite
- **Signals**: 👍0 💬6 · closed · labels: windows only/pending triage
- **Excerpt**: ### Describe the bug 1. in vite.config.js add resolve: { extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'] }, 2. in app.vue import HelloWorld from './components/HelloWorld' , no .vue ext 3. yarn run dev has errror ![image]([link]) ### Reproduction 1. git clone [link] 2. cd my-vue-app 3. yarn run dev 4. to look the error ### System Info ```shell npx: installed 1 in 2.244s System: OS: Windows 10 10.0.18363 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 6.80 GB / 15.89 GB Binaries: Node: 14.5.0 - D:\nodejs\v14\node.EXE Yarn: 1.22.17 - D:\nodejs\v14\yarn.CMD npm:…

### CASE-8671 · ViteJS Website's SSL Certification is expired
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍6 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug It's expired on Nov 28th, 2021. ![image]([link]) ### Reproduction Just go to vitejs.dev. ### System Info ```shell N/A ``` ### Used Package Manager npm ### Logs ```shell N/A ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite issue and not a framework-specific…

### CASE-8674 · (bug: ssr) NodeRequire is undefined when call ssrLoadmodule in entry-server file
- **Principles**: P-A3, P-H1, P-F4 · **Env**: macos, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug `ssrModuleLoader` function only inject `NodeJs.Global` in context but not `NodeRequire` which cause `require is not defined` error occur when evaluating `!entry` module. I can't determine whether vite do this on purpose.here is a [pr]([link] tool][ref]) maybe fix the problem ### Reproduction [link] ```bash $ yarn && yarn dev && curl [link] ``` ![image]([link]) ### System Info ```shell $ npx envinfo --system --npmPackages '{vite,@user/*}' --binaries --browsers System: OS: macOS 10.15.4 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 1.44 GB / 16.00 GB Shell:…

### CASE-8675 · Vite really slow
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug So my main goal has been to move this project [link] to use Vite instead of Rollup. I managed to successfully move it and make it work. But it takes forever to load. The actual bundling is ready really fast it seems ![image]([link]) It is the page actually loading and the hot reloading of the application that take a very long time with a browser with a blank page. ![image]([link]) The rollup version from the original repo loads nearly instantly. This happens on Windows 10. This is my first issues in this repo, if there is anything wrong or that needs correcting or a…

### CASE-8676 · Does not support TS decorators?
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Does not support TS decorators? The return of reflect.getmetadata acquisition is null ![image]([link]) The expected results are as follows: ![image]([link]) ### Reproduction npm run dev ### System Info ```shell node v12.5.0 npm V6.9.0 "vite": "^2.5.3", "vue": "3.2.8", ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an…

### CASE-8680 · Config of esbuild loader doesn't support object data
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> When i set the loader as follow codesnap, i get the error report which said "loader" must be a string. So how to write the config if i want change the loader of jsx? ![image]([link]) ![image]([link]) ### Reproduction <!-- Please provide a link to a repo that can reproduce the problem you ran into. A reproduction is required unless you are absolutely…

### CASE-8681 · vite is too slow when i use it
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: help wanted/windows only
- **Excerpt**: ### Describe the bug <!-- A clear and concise description of what the bug is. --> my app is not too fast when i use vite one month ago it's maybe a good issue to develop the speed of vite my project demo address is : [link] ![image]([link]) ### Reproduction [link] git clone it and use yarn run dev to see the problem. today i see it in 10460ms , other time i see it in 1000ms ### System Info window 10 and 16Gb memory

### CASE-8682 · different url resolve result in template img src and style background url.
- **Principles**: P-A3, P-H1 · **Env**: webpack, vite
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> I have two alias, one is `@` for src and another is `~` for `''` then when I ```html <img src="~@/assets/logo.png' /> // is works well ``` while ```css .demo { background: url(~@/assets/logo.png) 0 0 no-repeat; // is will raise error for 404 } ``` > I know it is weird to set ~ and @, but I want my code compat with webpack(css-loader) style and vite.…

### CASE-8683 · 使用`vite2+vue3.0`构建的项目中，子组件更新父组件的值，在使用`npm run build` 打包后报错
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · closed · labels: bug: upstream
- **Excerpt**: ## 使用`vite2+vue3.0`构建的项目中，子组件更新父组件的值（父子组件数据动态双向绑定） 在使用`npm run build` 打包后报错 这里写了个测试 1、`app.vue`传值“Hello Vue 3 + Vite"到`HelloWorld.vue`页面 2、`HelloWorld.vue`通过`input`框更新传过来的值 ![在这里插入图片描述]([link]) ## 文件代码 `app.vue`文件下（父组件） ```html <template> <img alt="Vue logo" src="./assets/logo.png" /> <div style="padding: 15px; background: #ddd"> <p class="red">app.vue父组件</p> <h1>{{ msg }}</h1> </div> <HelloWorld v-model:msg="msg" /> </template> <script setup> import { ref } from "vue"; import HelloWorld from "./components/HelloWorld.vue"; const msg = ref("Hello Vue 3 + Vite"); // This starter template is…

### CASE-8688 · `vite dev` can't set base url like `vite build`
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍5 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I follow the [Backend Integration]([link]) section so that I can use koa to serve my app. But I can't load assets files like image. Just like this.. ![image]([link]) ### Reproduction Sorry I can't upload the project to the github. I just follow the document, and I want the prefix address of the static resource to be converted from the root directory to the base that I set. ```js import { defineConfig } from 'vite' import reactRefresh from '@user/plugin-react-refresh' import staticConfig from '../../config/staticConfig' // [link] export default defineConfig({ plugins:…

### CASE-8690 · Use of picture element for handling image fallbacks
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: help wanted/p3-minor-bug
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I am unable to use standards for handling image formats such as webp with fallbacks for older browsers. This is how it is supposed to be used: ``` <picture> <source type="image/webp" srcset="pyramid.webp"> <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles"> </picture> ``` [Reference]([link]). The output html in dist with vite is the following: ``` <picture> <source type="image/webp" srcset="pyramid.webp"> <img src="pyramid.f0ab5a13.png" alt="regular pyramid built from four equilateral…

### CASE-8695 · [SSR] Express Static won't serve built files over a certain size.. (16kb)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug I'm working with modules and working with SSR with vite. In my client entry, when I make a call to `createApp` or `createSSRApp` or even `createRouter` then the script/module will "hang" or stay pending on load. Here is what the network says in dev tools: <img width="1113" alt="Screen Shot 2020-11-10 at 9 24 55 AM" src="[link]> The HTML that is loading the file looks like this: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <script type="module" src="/_assets/index.621f1230.js"></script> </head> <body> <div id="app" data-server-rendered="true"><div…

### CASE-8696 · update 1.0.0-rc.8 to 1.0.0-rc.9 miss build file
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vue, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: Hello, after update my build folder changes, miss index.hml file, i added images 1.0.0-rc.8 image: [link] 1.0.0-rc.9 image: [link] maybe it's not bug... i add upgrade step by step, problem here all packege ``` "dependencies": { "vue": "^3.0.0", "vue-router": "^4.0.0-beta.12", "vuex": "^4.0.0-rc.1" }, "devDependencies": { "@user/plugin-replace": "^2.3.4", "@user/compiler-sfc": "^3.0.2", "@user/server-renderer": "^3.0.2", "express": "^4.17.1", "vite": "^1.0.0-rc.9" <<<<<<<<<<<<<<<<<<<<< } ```

### CASE-8699 · [vite] Failed to resolve module import "vue.js".
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug I am struggling with this error for a whole day.... <img width="584" alt="截屏2020-07-28 19 50 25" src="[link]> <img width="947" alt="截屏2020-07-28 19 51 04" src="[link]> I cannot find vue.js module in devtools->Application->Feames->Scripts, but found `vue.runtime.esm-bundler.js` <img width="303" alt="截屏2020-07-28 19 53 40" src="[link]> ## Reproduction Please provide a link to a repo that can reproduce the problem you ran into. A reproduction is **required** unless you are absolutely sure that the the problem is obvious and the information you provided is enough for us to…

### CASE-8700 · Lazy loading routes don't work in generated build
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: ## Describe the bug Routes stop working in generated bundle when I use dynamically imported (async) route components (in dev all works fine): ```js export const routes = [ { path: "/", component: "Home" }, { path: "/about", component: "About" } ].map(({ path, component, meta }) => ({ path, component: () => import(`./views/${component}.vue`) })) ``` ## Reproduction ### Reproduction Repo: [link] ### Reproduction step ``` yarn build yarn servestatic ``` When i go to localhost:8080 I get this error in the console: ``` index.d91b05ae.js:1 GET [link] net::ERR_ABORTED 404 (Not Found) ``` Same with…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8606 · 6.0.0-beta.3 regression, all chunks grew significantly in size
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Starting with Vite 6.0.0-beta.3, all chunks produced in the `dist` directory significantly grew in size. ``` vite v6.0.0-beta.2 building for production... ✓ 216 modules transformed. dist/index.html 0.38 kB │ gzip: 0.26 kB dist/assets/index-BueeJHUf.js 19.84 kB │ gzip: 8.84 kB ✓ built in 779ms ``` ``` vite v6.0.0-beta.3 building for production... ✓ 125 modules transformed. dist/index.html 0.38 kB │ gzip: 0.26 kB dist/assets/index-XnBmJTxy.js 25.16 kB │ gzip: 10.13 kB ✓ built in 774ms ``` I've internally been able to confirm the increase is seen across a large number of…

### CASE-8611 · bug: vite 5.3.0 fails ionic build command
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, mobile
- **Signals**: 👍3 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug running ionic build with vite 5.3.0 gives error, 5.2.11 works. ### Reproduction ...... ### Steps to reproduce in package.json use vite: "vite": "5.3.0" ``` sil@user mxmobile % ionic build > vite build vite v5.3.0 building for production... ✓ 71 modules transformed. x Build failed in 374ms error during build: [commonjs--resolver] node_modules/@user/core/components/ion-item-sliding.js (53:78): Expected ',', got '(' file: /Users/sil/Local/Weinberg/_code/mxmobile/node_modules/@user/core/components/ion-item-sliding.js:53:78 51: }); 52: await this.updateOptions(); 53:…

### CASE-8612 · [vite] Pre-transform error: Failed to load url
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug in my vite 5 project, after we merge branch with new file, vite #DEV crash, and I have to stop and restard #DEV to new to be resolved by vite ### Reproduction npm create vite@user ### Steps to reproduce - pnpm run dev - create a file layout A.tsx in main branch - create a git branch : test-branch - create a file component 'B.tsx" - import call component B. on A - commit push - stop vite - checkout to main - restart vite dev - create a file component C - call C in A - merge test-branch in branch A ==>normally a this stage you should have error like this in console ###…

### CASE-8613 · [plugin:vite:esbuild] [plugin vite:esbuild] src/Element.jsx: Duplicate key "src" in object literal
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I have this code: ``` case "image": const imageComponent = <img class={img || "h-auto max-w-full my-6 mx-auto"} src={rest.url} alt={rest.alt} title={rest.title} {...transformedAttributes} > {childElements} </img> console.log("###############", imageComponent) return imageComponent ``` And I get this warning: ``` [plugin:vite:esbuild] [plugin vite:esbuild] src/BaseComponents/Element.jsx: Duplicate key "src" in object literal 127| return rest.url; 128| }, 129| src: _wrapSignal(rest, "url"), | ^ 130| get alt () { 131| return rest.alt; ``` while I can see that the…

### CASE-8615 · Dynamic image url not working on build after upgrade from vite 4 to 5.1.6
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I just realized that for some reason this is not working anymore after I upgraded vite from 4.4.9 to 5.1.6. It still works on development. But as soon as I build my code it seems like `imgUrl` is undefined. I don't see a error or warning about the transform having failed or so. ``` const imgUrl = new URL( `../../../assets/images/flags/flag-${cc}.svg`, import.meta.url ); ``` This only happens on dynamic urls. A static url seems to work. Or maybe I have missed something that changed when upgrading from vite 4 to 5? I've seen a few issues that seemed quite similar like…

### CASE-8620 · Unnecessary errors for public js libs in index.html
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍2 💬6 · closed · labels: p2-edge-case/regression
- **Excerpt**: ### Describe the bug After migrating from Vite 4.x to 5.0.8, for dev server, whenever the page (index.html) loads, in terminal I get errors like: ``` 09:12:55 [vite] Pre-transform error: Failed to load url /[email] (resolved id: /[email]). This file is in /public and will be copied as-is during build without going through the plugin transforms, and therefore should not be imported from source code. It can only be referenced via HTML tags. ``` I have '[email]' in the '/public' folder and `<script src="/[email]"></script>` in the 'index.html'. Exactly as the message suggests: 'It can only be…

### CASE-8642 · import glob, operation not permitted
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, vue, vite
- **Signals**: 👍0 💬6 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug I am displaying **dynamically all images located in the Assets directory**. In a **SPA** with **Vue + Vite.** For this purpose, I am using - **import.meta.glob** from Vite `import.meta.glob("../assets/images/*.(jpg|JPG|png|PNG|svg)", { as: "url" })`, - relative path binding ``return new URL(`${subPath}`, import.meta.url).href``). Success in dev mode. Error while building in production mode. ### Reproduce ### `npm run build` ### Error ### ``` vite v3.1.4 building for production... ✓ 17 modules transformed. [vite:import-glob] EPERM: operation not permitted, scandir…

### CASE-8662 · vite build using old cached source file?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I had an unterminated string constant in a Vue file. As expected, the 'server.hmr.overlay' showed the error and the line that caused it... ```` [plugin:vite:eslint] C:\myproject\src\pages\LoginPage.vue 59:11 error Parsing error: Unterminated string constant. (49:11) ✖ 1 problem (1 error, 0 warnings) C:/myproject/src/pages/LoginPage.vue at formatError (C:\myproject\node_modules\vite\dist\node\chunks\dep-f9d9421a.js:38082:46) at TransformContext.error (C:\myproject\node_modules\vite\dist\node\chunks\dep-f9d9421a.js:38078:19) at TransformContext.transform…

### CASE-8672 · Setting build mode to "development" breaks React JSX transform
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react, vite
- **Signals**: 👍8 💬6 · closed
- **Excerpt**: ### Describe the bug If `"mode": "development"` is specified in `vite.config.js`, and the project uses React JSX - then this results in a broken build, which displays in the console the following error when it first encounters a JSX tag: ``` jsxDevRuntime.exports.jsxDEV is not a function ``` `jsxDevRuntime.exports` at that point do indeed have `jsxDEV` value set to undefined. Looks like some part of the transform is not being set to development mode in this case, and doesn't produce `jsxDEV` data. This seems similar to [link] but setting `NODE_ENV` environment variable to `development` did…

### CASE-8673 · Error when importing CJS plugin into vite.config.js when project is ESM.
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Note: This is similar to [link] tool][ref], but that issue is about imports within application code, not imports within Vite's config file. I believe this issue to be different, as it is being governed by the transforms being done in `loadConfigFromFile`. --- When importing a cjs plugin (E.g. `vite-plugin-checker`) with a default export into a esm project (`"type": "module"`)'s vite.config.js file, the import instead looks as if I did `import * as checker from ...` rather than `import checker from ...`. See logs below, and debugger screenshot: ![image]([link]) As an…

### CASE-8684 · SSR: `Cannot read property 'get' of undefined` [cssModulesCache] since v2.3.4
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬6 · closed · labels: needs reproduction
- **Excerpt**: <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug After updating to v2.3.4, I get this error when trying to render a Svelte file with CSS in development mode: ``` TypeError: Cannot read property 'get' of undefined at TransformContext.transform (/my-project/node_modules/vite/src/node/plugins/css.ts:256:51) at Object.transform (/my-project/node_modules/vite/src/node/server/pluginContainer.ts:495:43) at transformRequest (/my-project/node_modules/vite/src/node/server/transformRequest.ts:128:27) at…

### CASE-8686 · Inability to build apps for production using a simple rollup transform plugin (specifically rollup-plugin-string)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> There seems to be a bug where using a very simple rollup transform plugin works during development, but causes building during production to fail. I have tried this with both `rollup-plugin-string` and my own custom version of it with the same exact results. ###…

### CASE-8694 · [Bug report] Can not load file without extname in public folder
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, mobile
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> ## Describe the bug When i upgrade vite from `v1.0.0-rc.13` to `v2.0.0-beta.4`, i can not load file (without extname) in `public` folder. For example, i can not load file called `abc`, but i can load the same file called `abc.data`. ```sh 4:01:26 PM [vite] Internal server error: Error: Failed to load url /weights/ssd_mobilenetv1_model-shard1. Does the file exist? at transformRequest…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8609 · CSS file paths aren't rebased corretly anymore after updating to Vite 5
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hi and massive thanks for your work on Vite. My issue: I have just updated from Vite 4 to 5. Previously this configuration was working just fine; ``` export default defineConfig({ publicDir: 'src/static', build: { assetsDir: 'assets', emptyOutDir: true, manifest: true, outDir: `public/themes/${process.env.WP_DEFAULT_THEME}/build/`, rollupOptions: { input: [ 'src/styles/styles.scss', 'src/scripts/scripts.js', ], }, }, }); ``` But now, the build process doesn't adapt the paths in the CSS files correctly. Apparently it just takes the `assetsDir` option, without including the…

### CASE-8623 · When linking a npm package to a equivalent local folder, starting dev server with --force is failing
- **Principles**: P-G4, P-E3 · **Env**: vite, webpack
- **Signals**: 👍2 💬6 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug I have some privates npm packages that, when installed through pnpm (or npm) works like it should in my vite project. However when I link this package with a symlink to where it is in my computer, then starting the dev server fails. (when runing vite --force) I tried to copy paste the exact content of the published package into the linked one (to check if other files where influencing vite) and the issue persist. I was previously doing it with a webpack build system and it worked well. This is my vite config ```js import { defineConfig } from 'vite'; // Select between the…

### CASE-8645 · CSS file name changed after v3 upgrade
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍4 💬6 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug Hello! I have a pretty basic vite.config.ts. Main area of interest is this: ```js build: { rollupOptions: { input: { "my-app": resolve(__dirname, "index.html"), }, } } ``` With Vite 2.x, it would produce this output: ``` dist/index.html dist/assets/my-app.<hash>.css dist/assets/my-app.<hash>.js ``` After upgrading to Vite 3 it changed to this: ``` dist/index.html dist/assets/index.<hash>.css dist/assets/my-app.<hash>.js ``` Is that change intentional? Is there an easy way to get this behavior back, beyond adding a hack in assetFileNames? Thanks! ### Reproduction [link]…

### CASE-8663 · 多页项目dev正常，build后自定义样式优先级低于框架样式
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug build: { rollupOptions: { input: { alarm: path.resolve(__dirname, 'alarm.html'), pass: path.resolve(__dirname, 'pass.html'), facility: path.resolve(__dirname, 'facility-service-system.html') } } }, 开发模式正常，build后： ``` <link rel="modulepreload" href="./assets/common.edbf0978.js"> <link rel="modulepreload" href="./assets/vendor.500d549a.js"> <link rel="modulepreload" href="./assets/dictionary.1a017a0b.js"> <link rel="modulepreload" href="./assets/utils.1eb921be.js"> <link rel="stylesheet" href="./assets/common.9d3a84ec.css"> //这个自定义样式优先级降低了 <link rel="stylesheet"…

### CASE-8665 · Cannot pass an npm dependency as an entrypoint to build
- **Principles**: P-G4, P-E3 · **Env**: macos, vite
- **Signals**: 👍0 💬6 · closed · labels: p4-important/regression
- **Excerpt**: ### Describe the bug If you attempt to pass an npm dependency to vite.build's `rollupOptions.input` you will get an error like this: ``` Could not resolve entry module (packages/astro/test/fixtures/static-build-frameworks/@user/renderer-lit/client-shim.js). ``` This is a regression caused here: [link] tool][ref]/files#diff-aa53520bfd53e6c24220c44494457cc66370fd2bee513c15f9be7eb537a363e7R272-R286 It assumes that all entrypoints are files within the project root and not npm package dependencies. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (16) x64 Intel(R)…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8619 · Sourcemap line numbers are incorrect in SSR
- **Principles**: P-F4 · **Env**: linux, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug The line numbers of stack traces shown upon SSR don't match the actual line numbers of the source code. I've tried multiple setups using different Vite plugins (e.g. `@user/plugin-vue`) and the line numbers are consistenly wrong, so I suspect the issue to live inside Vite core. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 6.1 Debian GNU/Linux 11 (bullseye) 11 (bullseye) CPU: (2) x64 Intel(R) Celeron(R) N4020 CPU @ 1.10GHz Memory: 1.52 GB / 2.70 GB Container: Yes Shell: 5.1.4 - /bin/bash Binaries: Node: 20.9.0 -…

### CASE-8630 · Incorrect or unclear docs regarding `import.meta.env` usage in library mode
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍4 💬6 · closed · labels: documentation/contribution welcome
- **Excerpt**: ### Documentation is - [X] Missing - [ ] Outdated - [X] Confusing - [ ] Not sure? ### Explain in Detail [link] says "In library mode, all import.meta.env.* usage are statically replaced when building for production." I don't understand how that could be. E.g. Vite can't possibly know at build time what the value of `import.meta.env.SSR` is since that's determined at runtime. ### Your Suggestion for Changes Clarify whether it really is "all import.meta.env.* usage" that's replaced, or only some like `import.meta.env.PROD`/`import.meta.env.DEV`. If it is all, clarify what values are set for…

### CASE-8634 · React invalid hook call in library mode
- **Principles**: P-F4 · **Env**: react, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have a [React component]([link]) that is built using vite library mode. But when i import this component in app created by `create-react-app` i get the following error: ``` react.development.js:209 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See [link] for tips about how to debug…

### CASE-8643 · Issue after upgrade using jsdom with optional dependencies
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/feat: ssr/regression
- **Excerpt**: ### Describe the bug I noticed an issue after upgrading an ssr project with vite from `3.0.4` to `3.1.3`. Using `jsdom` in a server side page results in an error about an optional dependency. ```bash Error: ENOENT: no such file or directory, open '__vite-optional-peer-dep:canvas:jsdom' at Object.openSync (node:fs:585:3) at Object.readFileSync (node:fs:453:35) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1122:18) at Module.load (node:internal/modules/cjs/loader:981:32) at Function.Module._load (node:internal/modules/cjs/loader:822:12) at Module.require…

### CASE-8654 · [Vite 3] `/__vite_ping` not always intercepted
- **Principles**: P-F4 · **Env**: linux, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug It seems like the first `/__vite_ping` slips through and isn't intercepted by Vite's dev middleware. HMR still works, so it's not critical. The vite-plugin-ssr middleware has a [workaround]([link]), but for other middlewares, it can turn out to be an inconvenience to be hit by the `/__vite_ping` HTTP request and may lead to the pesky need for a workaround like vite-plugin-ssr's one. ### Reproduction ~~[link] **EDIT**: this reproduction doesn't actually work, see discussion below. ### System Info ```shell System: OS: Linux 5.10 Debian GNU/Linux 10 (buster) 10 (buster) CPU:…

### CASE-8678 · Circular dependency warning despite dynamic import
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: feat: ssr
- **Excerpt**: ### Describe the bug Suppose I have two files like these: ```js // one.mjs console.log("Hello from one.mjs"); setTimeout(() => { import("./two.mjs"); }, 500); ``` ```js // two.mjs import "./one.mjs"; console.log("Hello from two.mjs"); ``` When I `ssrLoadModule("./one.mjs")`, I get the following output: ``` Hello from one.mjs Hello from one.mjs Hello from two.mjs Circular dependency: one.mjs -> /two.mjs -> /one.mjs -> /two.mjs ``` That is, `one.mjs` is evaluated twice before `two.mjs` is evaluated and I get a circular dependency warning. I'm aware of the limitations and I know there is a [pull…

### CASE-8689 · SSR multi-page app build error: Multiple inputs are not supported for "output.inlineDynamicImports".
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍5 💬6 · closed · labels: pending triage/feat: ssr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Building server for multi-page app with SSR throws this error: ``` Multiple inputs are not supported for "output.inlineDynamicImports". error during build: Error: Multiple inputs are not supported for "output.inlineDynamicImports". at error (/Users/ondrejrohon/Documents/Deepnote/repos/vite-multipage/node_modules/rollup/dist/shared/rollup.js:5308:30) at getInlineDynamicImports…

### CASE-8691 · SSR Externals False Positive on Windows
- **Principles**: P-F4 · **Env**: windows, vite
- **Signals**: 👍8 💬6 · closed · labels: windows only/p4-important/feat: ssr
- **Excerpt**: ## Describe the bug Part of the heuristic for determining if a dependency should be externalized for SSR is to compare the "resolved ESM entry point and its default Node entry point". That comparison happens here: [link] tool]/blob/5095e041deaced2db8fc3c3af504367bc57bb93f/packages/vite/src/node/ssr/ssrExternal.ts#L67 The path `requireEntry` comes from `require.resolve` which is not normalized. On Windows the path `entry` (which is normalized) has POSIX path separators and `requireEntry` has Windows path separators. This leads to a false positive, thinking the package has a cjs distribution…

### CASE-8692 · Multiple ssrLoadModule calls can return different copies of internal modules
- **Principles**: P-F4 · **Env**: vite, react
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: - [X] Read [the docs]([link]). - [X] Use Vite >=2.0. (1.x is no longer supported) - [X] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug When doing server side rendering with `ssrLoadModule`, loading more than one module and then using them together can break, because the modules returned by `ssrLoadModule` can use different copies of internal dependencies. This breaks React specifically, because if two different modules are loaded by `ssrLoadModule` that use two different Reacts, the hooks system breaks and React gives this message:…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8639 · [vite-url-rewrite] messes up url(), when the url contains a single function call with Scss
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍2 💬6 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug When using url containing a function within a scss file, the content will be rewritten by the internal vite-url-rewrite. Input: `background-image: url(map-get($data-uris, $spreadsheet-insert-image-dialog-preview-img));` Output: `background-image: url('node_modules/@user/kendo-theme-default/dist/map-get($data-uris, $spreadsheet-insert-image-dialog-preview-img'));` This can't be parsed by the sass compiler and resulting finally in a error message: `[plugin:vite:css] [sass] expected ";". ╷ 31443 │ background-image:…

### CASE-8644 · Option to disable import inlining for a css file
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Description I have an issue where import inlining isn't generating correct css, and an easy way to solve it would be to just disable import inlining for the file, so that conditional imports can be used. ### Suggested solution Have an option when importing a css file to disable import inling for that file, like `?url` (maybe `?noinline`). So the built output would be something like this: ```css @user "12345678.1234567.css"; @user "87654321.87654321.css" (prefers-color-scheme: dark); ``` with each import built as a seperate css file. ### Alternative Alternatively, a vite config option…

### CASE-8657 · Assets entries in the manifest do not preserve the original file extension
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: p3-downstream-blocker
- **Excerpt**: ### Describe the bug [ref] added assets to the manifest, but the entries are invalid for Sass/Less/Stylus stylesheets, as it's erasing the original extension from the [manifest]([link]) entry names and `src`. For example, for `style.scss` the entry is: ```json "style.css": { "file": "assets/style.a5c756ae.css", "src": "style.css" } ``` In contrast, Vite does preserve `.ts` extensions: ```json "main.ts": { "file": "assets/main.ts.a1959a64.js", "src": "main.ts", ``` For any backend integration to map files correctly, it's desirable to preserve the extension for assets as well: ```json…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8640 · Source mapping issue when debugging in browser
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite, svelte
- **Signals**: 👍1 💬6 · open · labels: p3-minor-bug/feat: deps optimizer/feat: sourcemap
- **Excerpt**: ### Describe the bug When I use @user/ethers ([link]) in my vite project I get source mapping issues when debugging in browser. In a monorepo setup it cannot even find the files and I get error like ``` Error while fetching an original source: request failed with status 404 Source URL: <unknown> ``` in a simple folder setup, the lines are offf I created 2 repo to reproduce the issue monorepo : [link] simple folder: [link] The setup is using vite svelte-ts template ### Reproduction [link] ### Steps to reproduce 1. pnpm i 1. pnpm dev 1. navigate to [link] 1. try to set a breakpoint in…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-8649 · [vite] Internal server error: Failed to resolve import "stui-vue" from "src/markdown/get-started.md". Does the file exist?
- **Principles**: P-D4, P-F1, P-F5 · **Env**: vite, vue, desktop
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ## What configuration is missing？ ### Describe the bug vite upgrade 1.0.0-rc.1 to 2.5.10 Step1：`yarn add [email]` Step2：`yarn dev` error: ``` [vite] Internal server error: Failed to resolve import "stui-vue" from "src/markdown/get-started.md". Does the file exist? Plugin: vite:import-analysis File: /Users/erica/Desktop/01前端/05项目/06goal-Vue3-wheel/src/markdown/get-started.md 1 | 2 | import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "stui-vue" | ^ 3 | const _sfc_main = { 4 | components: {Button} at formatError…

