# Case Chunk 082 — Round 82

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9101 · [v8] CJS interop factory shadowed when re-bundling rolldown-emitted CJS output
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍3 💬3 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug vite build silently generates broken code when bundling a CJS package whose files were themselves previously emitted by rolldown using "unbundle" mode. The root cause is a naming collision: rolldown uses `require_<filestem>` as the variable name for its `__commonJS` factory wrappers. When a source file already contains a local variable with the same name (because it was previously emitted by rolldown), rolldown skips creating the outer factory, yet still replaces `require("./file.cjs")` with `require_<X>()` inside the wrapper body. The result is self-referencing code that…

### CASE-9103 · Error when creating Vite React app with TanStack Router using pnpm
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, vite, react
- **Signals**: 👍4 💬4 · closed · labels: pending triage/feat: create-vite
- **Excerpt**: ### Describe the bug I’m encountering an error when creating a React project with Vite + TanStack Router. Command used: ``` pnpm create vite@user . ``` Selections: - Framework: React - Variant: TanStack Router - Use Vite 8 beta (Experimental)?: No Error message: ``` error: too many arguments for 'create'. Expected 1 argument but got 4. ``` ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (20) x64 Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz Memory: 42.54 GB / 63.92 GB Binaries: Node: 23.9.0 - C:\Program Files\nodejs\node.EXE…

### CASE-9109 · thread '<unnamed>' panicked - I don't know how to reproduce
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍5 💬3 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug Everytime i run npm run build i am receving the following error and i don't know what to do. It happens locally and also on aws amplify. We did not change anything really for it to start happening. ``` vite v5.4.7 building for production... thread '<unnamed>' panicked at /Users/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/swc_common-0.39.0/src/syntax_pos.rs:702:18: width 3 given for non-narrow character note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace thread '<unnamed>' panicked at library/core/src/panicking.rs:221:5: panic in a…

### CASE-9115 · Error using build.terserOptions mangle nth_identifier
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug I'm attempting to prefix mangled variable names. [link] told me that under `build.terserOptions`, I could add > Additional [minify options]([link]) to pass on to Terser. [link] > mangle.properties (default false) — a subcategory of the mangle option. Pass an object to specify custom [mangle property options]([link]). [link] > nth_identifer (default: an internal mangler that weights based on character frequency analysis) -- Pass an object with a get(n) function that converts an ordinal into the nth most favored (usually shortest) identifier. Optionally also provide…

### CASE-9116 · EUNSUPPORTEDPROTOCOL
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vite, react, typescript
- **Signals**: 👍0 💬3 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug ``` PS D:\dddd> npm create vite@user > npx > create-vite √ Project name: ... vite-project √ Select a framework: » React √ Select a variant: » TypeScript + SWC Scaffolding project in D:\dddd\vite-project... Done. Now run: cd vite-project npm install npm run dev PS D:\dddd> cd .\vite-project\ PS D:\dddd\vite-project> npm i npm error code EUNSUPPORTEDPROTOCOL npm error Unsupported URL Type "workspace:": workspace:^ npm error A complete log of this run can be found in: ``` ### Reproduction na ### Steps to reproduce > npm create vite@user > npx > create-vite √ Project name:…

### CASE-9117 · parameter in import() contains a variable, the file path will not be found after packing.
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬3 · open · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug If the parameter in Import() contains a variable, the file path will not be found after packing. raw code: ![image]([link] tool]/assets/73653404/8bc5f780-b38b-41a5-93aa-c818491c41f9) after build and run in web: ![image]([link] tool]/assets/73653404/decfa885-5f99-4ba7-a4e5-8b7fae46e402) ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 14.0 CPU: (12) arm64 Apple M2 Pro Memory: 260.98 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 16.20.0 - ~/.nvm/versions/node/v16.20.0/bin/node npm: 8.19.4 -…

### CASE-9169 · Imported variable bindings have difficult to debug names.
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍76 💬39 · open
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** Feature, improvement to debugging webpack-built projects. **What is the current behavior?** Webpack renames variable bindings in ES6 imports when it replaces them with `__webpack_require__` calls. In this example the imported binding `foo` is compiled to `__WEBPACK_IMPORTED_MODULE_0__foo__["a" /* foo */]`. If you use dev tools debugger you cannot watch or execute`foo` because it is not defined. input: ```javascript import {foo} from './foo';…

### CASE-9190 · Re-exported JSON imports are undefined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬31 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I have a module that imports some JSON objects and re-exports them as named exports, e.g.: ``` import someJson1 from './some-json-1'; import someJson2 from './some-json-2'; export { someJson1, someJson2 }; ``` Then when I import these exports in another module they are undefined, e.g.: ``` import { someJson1, someJson2 } from 'jsonModule'; ``` `someJson1` and `someJson2` are now undefined. However, the two imports are valid within the jsonModule, and if I copy them to local variables and then…

### CASE-9192 · webpack output is not treated as a module (`import.meta`)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬30 · closed
- **Excerpt**: ### Bug Description Goal: get import.meta to be "ignored" correctly by webpack. Some context: in Bitfocus Companion, with its current webpack settings, `import.meta.url` (in @user/node-core/build/esm/sdk/esmLoader.js) is converted to a hardcoded string containing the full dev environment path -- since the goal is distribute the code, this is an error, and since the "problem" is in a third-party package, I can't simply change their code. Also note that the code works correctly before packaging. Setting `module.parser.javascript.importMeta: false` in webpackconfig fixes that problem in the code…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-9102 · Vite 8 regression: string const enum with alias member produces wrong runtime value
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite, typescript
- **Signals**: 👍0 💬3 · closed · labels: bug: upstream/has workaround/p2-edge-case
- **Excerpt**: Vite 8 (rolldown) emits incorrect code for string `const enum` with alias members. The same code works correctly with Vite 7 (esbuild). ```ts export const enum Theme { Light = "Light", Dark = "Dark", Default = Theme.Light, } console.log(Theme.Light); // Vite 7: "Light" ✓ | Vite 8: "Default" ✗ ``` Rolldown emits a numeric-style reverse mapping (`e[e.Default = e.Light] = "Default"`) that overwrites the forward mapping. TypeScript never generates reverse mappings for string enums. **Repro:** [link] ```bash npm install && npm run build && node dist/main.js ``` **Upstream:** rolldown/rolldown[ref]

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9104 · `build.rollupOptions.output.banner` does not work when it is a comment string.
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍1 💬3 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug ```ts { build: { minify: false, rollupOptions: { output: { banner: '/* test commnet */', }, }, }, } ``` After configuring as described above, there are no related comments at the top of the built artifacts. context [link] tool][ref][ref] ### Reproduction [link] ### Steps to reproduce `pnpm build` ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz Memory: 3.83 GB / 15.86 GB Binaries: Node: 24.8.0 - C:\Users\admin\AppData\Local\Volta\tools\image\node\24.8.0\node.EXE Yarn: 4.6.0 -…

### CASE-9107 · Dev external dependency is still attempting to be resolved at runtime by import-analysis plugin
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍2 💬3 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When you mark a dependency as external via ```json { resolve: { external: ['test-utils'], } } ``` then provide the dependency via an import map ```html <script type="importmap"> { "imports": { "test-utils": "/test-utils.js" } } </script> ``` The plugin still throws an error saying its unable to resolve the dependency. <img width="2398" height="1254" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce pnpm i pnpm dev running the project in preview mode works fine though. pnpm build pnpm preview ### System Info ```shell System: OS: macOS 15.6.1 CPU:…

### CASE-9112 · Assets used in HTML template elements are not bundled correctly
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬3 · closed · labels: feat: html/p3-minor-bug
- **Excerpt**: ### Describe the bug Bundling images (and I assume other assets) does not work when they are imported in html template elements. It works when I write `<img src="./my-asset.svg"/>` in the body, I can see the asset copied in the distant directory (or inlined) and the source url changed accordingly. But when my `<img/>` is in a `<template>` element, the url does not change and the asset is not bundled. (can reproduce using bun, pnpm and npm, haven't tested yarn) ### Reproduction [link] ### Steps to reproduce Run `npm run build` and look at the generated html in `dist/index.html`. ### System…

### CASE-9113 · Setting manualChunks breaks react lazy loading
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍6 💬3 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm using a react component like ```ts import { lazy, Suspense } from "react"; const Lazy = lazy(() => import("./LazyCanvasPreload")); const FullPageSpinner = () => <>spin...</>; const Component = () => { return ( <> <Suspense fallback={<FullPageSpinner />}> <Lazy /> </Suspense> </> ); }; export default Component; ``` to load a heavy three.js canvas. Without lazy loading this component makes the first paint have to wait for the ~2MB three and rapier libraries. Vite does successfully chunk this component and it works great. Until I add this vite config: ```ts { plugins,…

### CASE-9119 · Vite adds spaces after commas in image url within srcset (HTML files)
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬3 · closed · labels: feat: html/p3-minor-bug
- **Excerpt**: ### Describe the bug Vite appears to add spaces around commas when a comma is present in a `srcset` property. This only occurs in HTML files. If my index.html file contains ```html <img srcset="[link] 1x, [link] 2x" src="[link] > ``` Vite outputs ```html <img srcset="[link] f_auto, fl_progressive, q_auto, w_100/v1/www.hackercamp.cz/faq-ubytko-3 1x, [link] f_auto, fl_progressive, q_auto, w_100/v1/www.hackercamp.cz/faq-ubytko-3 2x" src="[link]> ``` Take note of the space added to the image URL after the comma in the pathname. `/dpr_2, f_auto, fl_progressive, q_auto, w_100/`. To narrow the…

### CASE-9173 · [5.1.2] No longer the very useful colored tabular stats in webpack 5
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍9 💬37 · closed · labels: webpack-5
- **Excerpt**: # Bug report In webpack 4 the stats looked like this ![image]([link]) and in webpack 5 it looks like this: ![image]([link]) I'm using the following unchanged `stat` configuration and was wondering how to get back the very helpful tabular output in version 4. I also noticed, that the output no longer seems to be colored. ```js { all: undefined, assets: true, assetsSort: 'field', cached: false, children: false, chunks: false, chunkModules: false, chunkOrigins: false, chunksSort: 'field', colors: true, errors: true, errorDetails: true, excludeAssets: assetName => !/\.js$/i.test(assetName), hash:…

### CASE-9197 · Polyfilling node core modules in webpack 5
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, webpack
- **Signals**: 👍0 💬29 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> Webpack 5 no longer do auto-polyfilling for node core modules. # Bug report <img width="756" alt="Screenshot 2020-10-27 at 16 23 55" src="[link]> **Other relevant information:** webpack version: 5.2.0M Node.js version: 12.18.4 Operating System: macOS Mojave Additional tools: Jhipster 6.10.4 # PS I'm a beginner in development so solution must be well described fo me.

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9105 · Environment API with `server.hmr: false` still creates WebSocket server causing port conflicts
- **Principles**: P-F4 · **Env**: vite, nuxt
- **Signals**: 👍3 💬3 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When using **Vite's Environment API** with an SSR environment that has `server.hmr: false`, Vite should not create a WebSocket server (similar to how `server.ws: false` works). However, Vite **still creates a WebSocket server** and attempts to bind to the default port **24678**, causing `EADDRINUSE` errors in monorepos where multiple Vite instances run simultaneously. This is particularly problematic for: - **Nuxt 4.2.x** (uses environment API and sets `hmr: false` for SSR builds) - Monorepos running multiple Vite dev servers with environment API - Any SSR framework using…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9106 · Pseudo element selectors with nested @user doesn't build correctly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug: upstream/feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug Hi, When you have a nested `@user` inside a pseudo-element selector, it works in development but doesn't work after the build, the CSS build output is wrong. Here is an example: ```css dialog { margin: auto; } dialog::backdrop { background: #2E368C7F; transition: opacity 1s ease-in; @user { opacity: 0; } } ``` Here is the CSS output (after build): ```css dialog{margin:auto}dialog::backdrop{background:#2e368c7f;transition:opacity 1s ease-in}@user{{opacity:0}} ``` Formated output: ```css dialog { margin: auto } dialog::backdrop { background: #2e368c7f; transition: opacity…

### CASE-9108 · Unexpected warning while building transforming image-set urls with less
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬3 · closed · labels: feat: css/has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug We use less as css preprocessor. There we have a setup with mixins filling image-sets. After this [commit:d59efd8]([link] tool]/commit/d59efd8dfd1c5bf2e7c45c7cdb1c0abc2a05ba02#diff-448c9125d438cc9d62514de00075bc37329817df84f295b4baeb5c7d507ba80f) we get vite:resolve warnings. > __VITE_ASSET__BgDL8UKD__ referenced in __VITE_ASSET__BgDL8UKD__ didn't resolve at build time, it will remain unchanged to be resolved at runtime The build css file looks correct to me though. The less code looks like this: ```less .image-from-set(@user; @user) { @{prop}: image-set(@user 1x); }…

### CASE-9118 · Source maps missing for hoisted imports for ssrTransforms
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: p3-minor-bug/feat: ssr/feat: sourcemap
- **Excerpt**: ### Describe the bug We rely on source maps to correctly report errors to users in the dev tools that we create (Wallaby.js, Quokka.js, Console Ninja), but they are missing for `import` statements that are hoisted as a part of ssrTransforms. See [example source map visualization]([link]). We've fixed the issue and created a test case against the main branch and will link to a PR once this issue has been created. ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X]…

### CASE-9157 · [BUG?] npm link causes Webpack to look for babel-plugin in linked package node_modules.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍82 💬41 · closed · labels: status: stale
- **Excerpt**: I've linked a package that is outside of the project by first running `npm link` in the outside package, then `npm link name-of-package` inside the project. I am now getting this error: ``` Module build failed: ReferenceError: Unknown plugin "transform-es2015-arrow-functions" specified in "base" at 0, attempted to resolve relative to "/path/to/location/far/away/from/project/name-of-package" ``` Of course there's no babel plugin there.

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9110 · Source maps in VSCode not working for debug if white space is in url
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, svelte, electron
- **Signals**: 👍1 💬3 · open · labels: p3-minor-bug/feat: sourcemap
- **Excerpt**: ### Describe the bug I can't debug using inline VSCode debugger when space is in url of the file. Please check the issue in SvelteKit repo: [link] ### Reproduction [link] ### Steps to reproduce Please check SvelteKit issue with detailed instructions how to reproduce this issue: [link] ### System Info ```shell Visual Studio Code Version: 1.92.2 Commit: fee1edb8d6d72a0ddff41e5f71a671c23ed924b9 Date: 2024-08-14T17:29:30.058Z Electron: 30.1.2 ElectronBuildId: 9870757 Chromium: 124.0.6367.243 Node.js: 20.14.0 V8: 12.4.254.20-electron.0 OS: Darwin x64 23.6.0 ``` ### Used Package Manager npm ###…

### CASE-9111 · "vite" rewrites "named import" of typescript enums as "default import" and breaks app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, vite, typescript
- **Signals**: 👍5 💬3 · open · labels: p3-minor-bug/feat: deps optimizer
- **Excerpt**: ### Describe the bug I try to use a named import (`import { Status } from 'ts-enum/status.ts'`), I expect the import to work (it works with `yarn build`), but `vite` rewrites it as a "default import" (cf below) which is wrong (cf error). `vite` import rewrite: ```javascript import __vite__cjsImport0_tsEnum_status from "/node_modules/.vite/deps/ts-enum_status.js?v=af7bba1f"; const Status = __vite__cjsImport0_tsEnum_status["Status"]; ``` browser error (from dev console, both Firefox and Chrome): ``` main.ts:1 Uncaught SyntaxError: The requested module…

### CASE-9121 · Source Maps don't work on Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍310 💬226 · closed
- **Excerpt**: Hello everyone, I just started to use webpack and I'm having serious issues in debugging my code. The problem is that the Chrome debugger doesn't work properly. I'm not sure if this is a webpack issue, a Chrome issue or my fault. This is my webpack file ``` var webpack = require('webpack'); module.exports = { entry: [ './app', ], output: { path: __dirname + '/assets', publicPath: '/assets', filename: 'app.js', }, devServer: { contentBase: __dirname + '/assets', host: '0.0.0.0', port: process.env.PORT, historyApiFallback: true, watchOptions: { aggregateTimeout: 300, poll: 1000, } }, cache:…

### CASE-9127 · Webpack source maps are broken for debugging in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, webpack
- **Signals**: 👍43 💬80 · closed
- **Excerpt**: I've put together a quick repo to demonstrate the problem: [link] And here's a gif of the issue in action: ![screencap]([link]) I've checked Uglify, and Firefox has no issues there. I've tried the different config options for `devtool`: - `eval` - works - `cheap-eval-source-map` - works - `cheap-source-map` - does not work - `cheap-module-eval-source-map` - works - `cheap-module-source-map` - does not work - `eval-source-map` - works - `source-map` - does not work So seems like eval is file, but an external sourcemap for multiple files does not. Any thoughts about what's going on? I've also…

### CASE-9152 · JsonpMainTemplatePlugin.js uses Promises to resolve dependencies which is not working in Internet Explorer 9-11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack
- **Signals**: 👍8 💬44 · closed · labels: status: stale/help wanted
- **Excerpt**: Code splitting with `require.ensure` for webpack 2.2.0-rc.1 generates loader that uses `Promise` [link] tool]/blob/f9e57d9a0c4b06d0bc3db5c67721827aa9cf6fcd/lib/JsonpMainTemplatePlugin.js#L102 ``` "", "var promise = new Promise(function(resolve, reject) {", this.indent([ ``` These prevents splitted modules to run normally in any internet explorer 9-11 cause IE doesn't have `Promise` implementation and polyfill is loaded within one of splitted modules. My generated entry point module looks like this. It loads 2 other modules (1-vendor with Promise implementation, 2 - app code) ``` var library =…

### CASE-9174 · SyntaxError: Unexpected token: name (xxxxxx) from Uglify plugin
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, windows, android, ios, webpack, webview
- **Signals**: 👍80 💬37 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 2.1 beta 22 **Please tell us about your environment:** Windows 10 **Current behavior:** Using webpack.optimize.UglifyJsPlugin() in webpack.config throws SyntaxError: Unexpected token: name (xxxxxx) . The code there is unreachable. if(false) { let xxxx = **Expected/desired behavior:** No errors - **Browser:** [all | Chrome XX | Firefox XX | IE XX | Safari XX | Mobile Chrome XX | Android X.X Web Browser | iOS XX Safari | iOS XX UIWebView | iOS XX WKWebView ] - **Language:** TypeScript 2.x and ES6 target

### CASE-9180 · Split chunk fails to load with undefined hash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍0 💬35 · closed
- **Excerpt**: # Bug report **What is the current behavior?** Certain chunk requests use `undefined` instead of the hash. Example of the resulting error in chrome: ``` Uncaught (in promise) Error: Loading chunk 63 failed. (error: [link]) at HTMLScriptElement.i ({appName}.d5b0c78176fe6ff82a0f.bundle.js:1) ``` The request for chunk 63 looks like this: ``` [link] ``` Stepping through the webpack build, it appears as though the function `getScriptSrcPath` in `JsonpMainTemplatePlugin.js` ([link]([link] tool]/blob/a0eab48f3799f5d3528b0c0c3a0e48161a43933c/lib/web/JsonpMainTemplatePlugin.js#L47)) creates a mapping…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-9114 · Invalid relative path in index.html when building with base option empty in Windows
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍2 💬3 · closed · labels: help wanted/windows only
- **Excerpt**: ### Describe the bug (Sorry if this was asked/answered before, just cannot find information on this topic) When building a simple project, I get `dist/index.html` file with relative paths using parent directories navigation (double dots). It looks like this: ``` <!doctype html> <html lang="en"> <head> <meta charset="UTF-8" /> <link rel="icon" type="image/svg+xml" href="../../../vite.svg" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Vite App</title> <script type="module" crossorigin src="../../../assets/index-BXSNOGaM.js"></script> <link rel="stylesheet"…

### CASE-9150 · Sourcemaps in chrome off by 1 line
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome
- **Signals**: 👍28 💬45 · closed
- **Excerpt**: Using babel loader (and nothing else), and both `inline-source-map` and `source-map`, when setting breakpoints, things are off by one line (eg: if I put a breakpoint on the first line of a function in the original code, once the breakpoint is hit, I'm actually outside of the function. If i put a breakpoint on the second line inside the function, I can inspect the state and everything is as if I was at the first line). Seems like there has been similar issues last year that had been fixed. Regression maybe?

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9120 · nodejs 17: digital envelope routines::unsupported
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍410 💬300 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```sh [webpack-cli] Error: error:0308010C:digital envelope routines::unsupported at new Hash (node:internal/crypto/hash:67:19) at Object.createHash (node:crypto:130:10) at…

### CASE-9122 · Parsing of `import()` fails in 4.29.0 (Compilation issue, related to dynamic import)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍415 💬171 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I've updated to v4.29.0, and my code is no longer compiling. Error: ```ERROR in ./routes/index.js 11:10 Module parse failed: Unexpected token (11:10) You may need an appropriate loader to handle…

### CASE-9123 · Webpack4 has memory leak in development mode
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍167 💬156 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The memory increased when running webpack4 in development, and the memory didn't release. So…

### CASE-9124 · Cannot assign to read only property 'exports' of object '#<Object>' (mix require and export)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍118 💬113 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Module with code ```js // 'a.js' module.exports = { a: 'b' }; // b.js const a =…

### CASE-9125 · [Webpack 5] (minimal repro included!) __webpack_modules__[moduleId] is undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍23 💬108 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `__webpack_require__` goes bang attempting to import a library local to our project (i.e. a sibling package in the same lerna monorepo). We did not experience this problem in webpack 4.25.1, but we…

### CASE-9126 · Regression on v5.99.0, [something] not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍18 💬81 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack builds the artefact just fine. When running the app, there is a reference error, which prevents the app from running. I've verified version 5.99.0 is affected by downgrading…

### CASE-9128 · webpack broken by [email], "custom keyword definition is invalid: data.errors should be boolean"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍163 💬75 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** A fresh install of webpack will fail to run with the error "custom keyword definition is invalid: data.errors should be boolean" due to the latest version of ajv. See issue here [link] referencing…

### CASE-9129 · webpack keeps asking if I want to install webpack-cli
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍18 💬75 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I guess this is a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I just installed Webpack, using: npm install -g webpack I then run webpack…

### CASE-9130 · Strange warning stating that export does not exist when it does
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack, typescript, react
- **Signals**: 👍175 💬74 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Not sure if this is a problem with a loader or webpack itself, but on a project that is using typescript, I'm getting a warning: ```javascript WARNING in ./React/src/components/_shared/form/form-model.ts…

### CASE-9131 · webpack 5.0.0-beta.30 Module not found: Error: Can't resolve '../../core-js/object/define-property'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍39 💬73 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** install `@user/runtime-corejs3` for file `index.js` ```js import '@user/runtime-corejs3/helpers/esm/defineProperty' ``` and run `webpack ./index.js` ``` ERROR in…

### CASE-9132 · Filesystem Cache is throwing TypeError: Cannot read property 'length' of undefined from ResolverCachePlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬66 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Attempting to get the cache working for webpack 5. I have it working on one of my local repos, but this one (a clone of a different website), is throwing an error: Relevant config: ``` cache: {…

### CASE-9133 · Tapable.plugin is deprecated. Use new API on `.hooks` instead
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍55 💬64 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![topic]([link]) [link] **If the current behavior is a bug, please provide the steps to…

### CASE-9135 · Cannot find module 'react' in react-redux and cloudinary-react with Yarn 2, babel-loader, and webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬58 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Trying to get a stack of webpack 5.1.3, babel-loader and yarn 2.3.3 working with PnP on a react, react-redux web app. Getting the following series of errors which all seem to be the same thing, but…

### CASE-9136 · Uncaught Error: Cannot find module "."
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬57 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Below exception: ``` polyfills.js:1 Error: Cannot find module "." at webpackMissingModule (eval…

### CASE-9137 · Segmentation faults keep occurring after a while.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬56 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After a while of running the webpack dev server in watch mode, webpack 5 segfaults with a message like this: ```ℹ ｢wdm｣: Compiling... <--- Last few GCs ---> [44446:0x2a53fb0] 7749337 ms: Mark-sweep…

### CASE-9138 · Runtime TypeError: Cannot read property 'call' of undefined at __webpack_require__
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍23 💬56 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I try to run my project with `webpack-dev-server` I get runtime error `Cannot read…

### CASE-9139 · 2.3.0 breaks path resolution on Windows
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍31 💬56 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack fails with error on any path, e.g.: configuration.context: The provided value…

### CASE-9140 · Webpack 5: Library build with WebWrokers does not work with applications that are dependent on it
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A5 · **Env**: webpack, react
- **Signals**: 👍5 💬52 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a core library based on React, that used among several applications that built on top of `react-scripts`. Our library contain various heavy computations that used among our applications.…

### CASE-9141 · contenthash changing even though file remains identical
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬52 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> This issue was opened because [link] tool][ref] was closed saying it's been fixed even though many people have reported that it has definitely not been fixed. # Bug report ```js output: { filename: 'file-[contenthash].js', chunkFilename: 'chunk-[contenthash].js' }, optimization: { splitChunks: { chunks: 'all', cacheGroups: { vendors: { test: /[\\/]node_modules[\\/]/, }, }, }, } ``` <!-- Please ask questions on StackOverflow…

### CASE-9142 · webpack@user Tree Shaking doesn't eliminate code between multiple entry points in same configuration object.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍51 💬52 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** By way of example, I have: - `util.js`: ES exports two methods: `red` and `blue` via two…

### CASE-9143 · modules[moduleId] is undefined error is unhelpful
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍17 💬50 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** FEATURE - error reporting <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The webpack produces errorneous client code which pops `modules[moduleId]…

### CASE-9144 · Problems with pnpm and the way loaders are resolved
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍30 💬49 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **bug**? **What is the current behavior?** I can't create libs which use webpack and loaders, install these libs with pnpm and try to…

### CASE-9145 · CSS Order Differs Between Development & Production Modes when Treeshaking.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍50 💬48 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** CSS seems to be out of order in "development" vs "production" mode. It appears somehow related…

### CASE-9146 · Uncaught ReferenceError: global is not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍9 💬46 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I have an `Electron` based application. we do `webpack ` in the render process. It throws error when I run the app `Uncaught ReferenceError: global is not defined` **If the current behavior is a bug, please provide the steps to…

### CASE-9147 · RemoveParentModulesPlugin takes a long time with hundreds of chunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬46 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I want to report a performance bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In projects with a lot of chunks, a lot of time is spent on…

### CASE-9148 · "Uncaught ReferenceError exports is not defined" since 2.2.0-rc.5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍21 💬46 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Bundle is incorrect and crashes with "exports is not defined". Unfortunately I can't share steps to reproduce, as the codebase is closed source. However, it definitely worked with…

### CASE-9149 · 5.0.0-rc.3 fails with tslib
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍3 💬45 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running `[email]-rc.3` fails when importing `rxjs` (which uses `tslib`): ![image]([link]) --- **If the current behavior is a bug, please provide the steps to reproduce.** Details of this error are…

### CASE-9151 · Add `target: "universal"`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍143 💬44 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** targets are pretty restrictive and a web bundle can't be used in node or webworker. **If…

### CASE-9153 · Uncaught TypeError: Cannot read properties of undefined (reading 'call')
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬41 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Can't have same package.json name on host and remote. Getting error at some point using module federation, guessing when splitChunks kicks in. **If the current behavior is a bug, please provide the…

### CASE-9154 · New node: scheme from Node 16 not handled
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍19 💬41 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The [new `node:` prefix from Node v16]([link]) causes an `UnhandledSchemeError`: ``` ERROR in node:path Module build failed: UnhandledSchemeError: Reading from "node:path" is not handled by plugins…

### CASE-9155 · webpack@user, node@user, Mac crashes when compiler.watch().close()
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍32 💬41 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report When closing a watching compiler programmatically, the node process crashes. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Getting the following crash in several repositories on our Mac CIs: ``` Assertion failed: (0), function uv_close, file…

### CASE-9156 · large webpack build almost hangs at 91% on an "additional asset processing" step
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍56 💬41 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** possible bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I have already asked on StackOverflow and it seems as if this behavior would be quite common but there have been no…

### CASE-9158 · webpack watch mode rebuild twice on file change [MacOS]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: macos, webpack
- **Signals**: 👍8 💬40 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Minimal repro: [link] **What is the current behavior?** Run the project [link] on a mac machine (yarn && yarn start) After the initial compile, open `src/index.js` and hit save. You will see that webpack rebuild the project twice.…

### CASE-9159 · HMR not working on webpack 5.66.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍12 💬40 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hot module reloading is not working after updating webpack to v5.66.0. **If the current behavior is a bug, please provide the steps to reproduce.** - Clone [link] - Run `npm i webpack@user` to…

### CASE-9160 · splitChunks with innerGraph does not add required dependencies into common chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬40 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Two entries and common chunk (see the linked repo for more details): * index1 - imports dep1 which imports dep2. actually uses both of them * index2 - imports dep1 but only uses a function that does…

### CASE-9161 · webpack 4: access the mode flag from webpack.config.js file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍47 💬40 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *feature* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **If this is a feature request, what is motivation or use case for changing the behavior?** Since webpack 4 introduces an…

### CASE-9162 · Prompt users to install webpack-cli on first usage
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬40 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** Feature <!-- A great…

### CASE-9163 · Undetermined shared module version when importing a file from the module directly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍4 💬39 · closed · labels: status: stale/webpack-5/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When importing a file directly from a module (i.e. `import "react-dom/test-utils"`) when it's configured to be shared via ModuleFedrationPlugin a warning with a nonsensical instruction may be…

### CASE-9164 · Webpack 4 doesn't support sharing modules from entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍19 💬39 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 4.5 cannot be configured to create JavaScript files that both: a) bundle shared modules…

### CASE-9165 · ERROR in Entry module not found: Error: Can't resolve './src' in 'C:\Idessign'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬39 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** yes it is bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** C:\Idessign>webpack Hash: 18bc2fd105d4883da519 Version: webpack 4.2.0 Time: 108ms…

### CASE-9166 · Error: Cannot find module with dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍37 💬39 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I try to load dynamic module with `import('/path/to/my/module.js').then()` it work, but…

### CASE-9167 · file does not match the corresponding path on disk - File does not exist
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬40 · closed
- **Excerpt**: I'm reporting a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I change files (recompiled in a linked package), webpack chokes with ``` Error in ./src/index.js Module not found: [CaseSensitivePathsPlugin] `some file.js` does not match the corresponding path on disk - File does not exist. @ ./src/index.js 29:16-36 ``` **What is the expected behavior?** I'd expect webpack to just happily restart. **Please mention other relevant information…

### CASE-9168 · Webpack gives $ is not defined or jQuery is not defined error in console
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬39 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do…

### CASE-9170 · Webpack is crashing with HookWebpackError: Maximum call stack size exceeded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬38 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Error: `[webpack-cli] HookWebpackError: Maximum call stack size exceeded` <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack fails with the above error when I run it. **If the current behavior is a bug, please provide the steps to…

### CASE-9171 · dynamic import naming doesn't work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍17 💬38 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I used comment to define chunkname as follows: ```javascript import(/* webpackChunkName:…

### CASE-9172 · Webpack dev server takes up a lot of memory (751.9MB) for GitLab CE
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬38 · closed
- **Excerpt**: @user @user @user <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Unexpected Behavior <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We are unsure if this is a combination of both webpack and…

### CASE-9175 · Dependency resolution of 3rd-party imports fails
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬36 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `yarn run build` in my [MWE (note the commit hash in the URL]([link]) fails with a bunch of resolver errors. **If the current behavior is a bug, please provide the steps to reproduce.** 1. `git…

### CASE-9176 · [ext] placeholder is not replaced when set in output.filename
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬36 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** ~~Bug~~ feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using '[ext]' placeholder in the output.filename doesn't get replaced and instead…

### CASE-9177 · asset/resource builds outside of dist when [pathname] contains references to hoisted node_modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬35 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Files located in hoisted node_modules of a workspace and loaded as `asset/resource` are built outside of dist. This differs from what `file-loader` does **If the current behavior is a bug, please…

### CASE-9178 · Chunksplitting leads to Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬35 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When chunksplitting with the default setup as described here [link] splitting chunks leads to the original chunk to only include one module and that modules moduleId is the path instead of the…

### CASE-9179 · Webpack should have a way to ignore `require` calls
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍96 💬35 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack tries to handle all `require()` calls, even those not meant for browser usage. This makes it almost impossible to have a module that works in both Node.js and the browser, but has some added…

### CASE-9181 · The case for Workers
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍51 💬35 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature! 🎉 <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** (This is gonna be a bit longer.) Let’s imagine working on a project using [WebWorkers].…

### CASE-9182 · Uncaught (in promise) Error: Loading chunk # failed.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍20 💬34 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report `Uncaught (in promise) Error: Loading chunk # failed.` after rolling update. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a kubernetes cluster with a couple of pods running an image of a web app build with webpack. When I build a new image…

### CASE-9183 · Webpack 4 Generates Empty CSS Vendors Bundle
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬33 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Empty CSS Vendors Bundle Being Generated **If the current behavior is a bug, please…

### CASE-9184 · Unable to get DefinePlugin, CommonsChunkPlugin and UglifyJsPlugin to work together.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬33 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using DefinePlugin and UglifyJsPlugin together the minification is done before the…

### CASE-9185 · Resolve module (mjs) incorrectly when using Module Federation Plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬32 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `swr/infinite` with `swr>1.1.2` dependency and sharing it with [Module Federation (SharePlugin)]([link]) ```js new webpack.container.ModuleFederationPlugin({ shared: ['swr'], }), ``` We…

### CASE-9186 · Uncaught TypeError: Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬32 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In webpack production mode, bundled file has error when running in the browser. **If the current behavior is a bug, please provide the steps to reproduce.** `webpack.config.js` ```javascript const…

### CASE-9187 · Using webpackChunkName with dynamic import changes chunk logic
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍19 💬32 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using a `import()` that uses a variable (dynamic import) each file gets into its own…

### CASE-9188 · Bug: require() doesn't support `default` exports in ES Modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍38 💬32 · closed
- **Excerpt**: ✅ ➡️ Edit 2020 for Webpack users: - always prefer `import` nowadays. Only use `require` if the package is not an ES Module. --- <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. -->…

### CASE-9189 · Compile top-level await to ES5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬31 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Top-level await code is currently always compiled to native async/await code and therefore doesn't work in browsers like IE11. **If the current behavior is a bug, please provide the steps to…

### CASE-9191 · Duplicate modules - NOT solvable by `npm dedupe`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍26 💬31 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Two identical sub-dependencies are being included twice in the build. **If the current behavior…

### CASE-9193 · DataUrl can't be generated automatically, because there is no mimetype for
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬30 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I activate persistent cache and see this error: ``` DataUrl can't be generated automatically, because there is no mimetype for "" in mimetype database. Either pass a mimetype via…

### CASE-9194 · Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍5 💬30 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** There's an issue report [link] on `react-refresh-webpack-plugin`, and I happened to encounter it as well. At fist glance it seems to be a bug over there, however, it might be a bug in webpack after…

### CASE-9195 · BUG: "export 'default' (imported as 'selection_enter') was not found in './enter'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬30 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** BUG <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently if you try to use d3.js library, webpack will generate warning: *"export 'default'…

### CASE-9196 · Angular project build failed after upgrading to Webpack 5.79.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular, webpack
- **Signals**: 👍16 💬29 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After updating to version 5.79.0 I am receiving this error during the build on my angular project: ``` Error: Module parse failed: parser.destructuringAssignmentPropertiesFor is not a function File…

### CASE-9198 · Webpack progress log output seems unformatted in the last version
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: macos, webpack
- **Signals**: 👍14 💬29 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> A problem in progress output log which is showing in a bad format in macOs **What is the current behavior?** When the webpack is progressing, the log is showing this way: ```` │ <s> [webpack.Progress] 98% after emitting…

### CASE-9199 · TypeError: webpack.optimize.UglifyJsPlugin is not a constructor
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬29 · closed
- **Excerpt**: This is in **`[email]-beta.0`** <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** **bug** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` TypeError: webpack.optimize.UglifyJsPlugin is not a…

### CASE-9200 · Loading chunk 1 failed.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack
- **Signals**: 👍6 💬29 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On Internet Explorer 11, a request to a bundle in the cache results in "Loading chunk 1 failed.…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9134 · [Webpack 5]: cache leak with incremental compilation
- **Principles**: P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍4 💬59 · closed · labels: status: stale/webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** We recently upgraded from webpack4 to webpack5 and are experiencing memory leaks when using webpack5 caching. We have the following caching policy defined: ```json "cache": { "cacheDirectory": "/home/admin/src/coda/.webpack-cache", "type": "filesystem", "store": "pack", "name": "baseApp", "idleTimeoutForInitialStore": 0 } ``` When we launch webpack devserver the VM usage climbs to about 2.5GB and then stabilizes. The bundle outputs in about 70s. When we mutate a source file, this correctly triggers a recompile, and memory doubles before hitting…

