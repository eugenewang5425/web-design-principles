# Case Chunk 089 — Round 89

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9801 · webpack/hot/poll?1000 doesn't work correctly in webpack v4 [electron]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍5 💬9 · closed · labels: status: stale
- **Excerpt**: ### Do you want to request a feature or report a bug? Bug ### What is the current behavior? `webpack/hot/poll?1000` in the `entry` doesn't work correctly in webpack v4. When the first pack finished, there are no new updates. However, webpack try to load the the hot-update manifest file (`c29b4da1bbf40db96232.hot-update.json`) and return with `ERR_FILE_NOT_FOUND` After something changed in the `src/app.jsx`, `c29b4da1bbf40db96232.hot-update.json` is created. But after the electron freshed , webpack try to load another hot-update manifest file(`c1f5f7e4a22b756ebdc9.hot-update.json `) I guess…

### CASE-9834 · Uncaught Error: Received packet in the wrong sequence if config.devtool = ''
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: Hi , I were using for quite some time the [mysql]([link]) node driver in my Electron projects which works fine. But now while using Webpack, my production builds throw: `Uncaught Error: Received packet in the wrong sequence.` After some testing I have realised that the error goes away if I keep config.devtool = 'eval' in my webpack.conf.js file, otherwise it crashes: ``` if (process.env.NODE_ENV === 'production') { config.devtool = '' // <----- this will throw Uncaught Error if I omit 'eval' config.plugins.push( new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }), new…

### CASE-9835 · Source-Map is picking random files
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, chrome 53, windows, webpack, typescript
- **Signals**: 👍6 💬9 · closed
- **Excerpt**: - [x] bug report Here are my versions: Webpack: 1.12.14 Windows 7 Browsers: Fails in: Chrome: 51.0.2704.84 Works in: IE 11, Chrome 53.0.2767.0 canary (64-bit) Language: TypeScript Bug: When I select a file in the chrome debugger, the file that actually opens is a random file from my project. For example, I have the following file: `/src/views/configuration/configuration-vm.ts.` When I open this file in the chrome debugger, a random file is loaded from my project instead. The random file is sometimes a .ts or a .html file. (However, the CSS files seem unaffected.) NOTE: The WEBPACK FOOTER…

### CASE-9838 · ReferenceError: createRequire is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: ### Bug Description After upgrading from 5.105.2 to 5.105.3, our code returns this error: `ReferenceError: createRequire is not defined` ``` ReferenceError: createRequire is not defined at ../../node_modules/yargs-parser/build/lib/index.js (VM121 renderer-preload.js:13636:17) at __webpack_require__ (VM121 renderer-preload.js:14929:42) at ./src/electron-preload/renderer-preload/context-bridge.ts (VM121 renderer-preload.js:12662:70) at __webpack_require__ (VM121 renderer-preload.js:14929:42) at VM121 renderer-preload.js:14985:115 at VM121 renderer-preload.js:14989:3 at Object.<anonymous> (VM121…

### CASE-9888 · HMR broken with module federation
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome 84, firefox 79, edge 84, windows, webpack, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: After having a video call with @user yesterday evening, he asked me to open an issue for HMR being broken with module federation. - [x] This is a **bug** - Operating System: Windows 10 - Node Version: 12.16.2 - NPM Version: 6.14.4 - webpack Version: 5.0.0-beta.22 - webpack-dev-server Version: 3.11.0 - Browser: Chrome 84.0.4147.105, Firefox 79.0, Edge 84.0.522.48 ### Code [link] ### Expected Behavior Changes in a react component will show in the browser without a refresh. ### Actual Behavior Changes in a react component will **not** show in the browser without a refresh. ### For Bugs; How can…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9802 · Webpack runtime doesn't work on Safari 5
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: safari 5, webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The current webpack v4 runtime uses Function.prototype.bind which is not available in…

### CASE-9803 · webpack 4 doesn't allow to use different loaders depending on issuer
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Declaring multiple loaders with same `test` but different `issuer` stopped working in webpack 4…

### CASE-9804 · webpack generates error when run in a directory starting with an exclamation sign
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using webpack in a directory start starts with `!`, generates errors but works as expected when…

### CASE-9805 · Chunks encoded as ASCII in Webpack 4.x
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Chunks that contain unicode characters are encoding in ASCII not in UTF-8. **If the current…

### CASE-9806 · Is it possible to use critical.bundle.js, above vendor.bundle.js in the DOM?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Not sure if it's been done before, or, what I am experiencing is a bug, or, just I'm not using it right. **Please ask questions on StackOverflow or the webpack Gitter** Banned from StackOverflow, my past has come back to haunt me, despite having done my best to correct all my mistakes. [Asked…

### CASE-9807 · How to remove eval and Function constructor from webpack build to avoid CSP issues
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** BUG : [Stackoverflow Link]([link]) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It gives both eval and Function contructor which is not required…

### CASE-9808 · ModuleConcatenationPlugin option to disable name scoping
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently ModuleConcatenationPlugin keeps the scope for exports by adding an identifier in…

### CASE-9809 · Enhance MultiCompiler behavior with configuration dependencies
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, we can define bundle dependencies by using the configuration options `name` and…

### CASE-9810 · devtool=eval interferes with window.onerror, on Chrome.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍4 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bundling JS with webpack, using the option devtool: 'eval', adds `//@ sourceURL` tags…

### CASE-9811 · Minification doesn't work well with es6 imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack generates wrong source map. **If the current behavior is a bug, please…

### CASE-9812 · Webpack Prefers AMD?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> When it encounters an if check [like this]([link]) I'd expect it to use the first positive if statement and continue. In this…

### CASE-9813 · Can not use CommonsChunkPlugin when window is not defined.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `window` is not declared globally, commons.js contains `window`, [link] tool][ref] seems…

### CASE-9814 · ModuleConcatenationPlugin transform re-export module to __WEBPACK_IMPORTED_MODULE_0_lodash__[true]
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Maybe a *bug*, some behavior I don't understand <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Transformed with undefined error. **If the current…

### CASE-9815 · ModuleConcatenation bailout: Module is not an ECMAScript module when inheriting exported based config
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When inheriting from a base webpack config provided by an npm module and merging via…

### CASE-9816 · Specify output directory with dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Neither <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am wondering if it is possible to specify an output directory per dynamic import context:…

### CASE-9817 · webpack 3.3.0 lazy load callback is undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** this is a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** not loading correctly in order and callback return is undefined. functions in…

### CASE-9818 · Plugins always emitted in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I'm on watch mode, plugins like `html-webpack-plugin` and `extract-text-webpack-plugin`…

### CASE-9819 · `hotDownloadManifest` in `JsonpMainTemplate.runtime.js` does not return a promise and causes exception
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hot module reloading doesn't work. When hot reloading modules in our React Chrome…

### CASE-9820 · `profile: true` in webpack.config.js has no effect
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Adding `profile: true` to my Webpack config doesn't actually result in profiling data…

### CASE-9821 · Webpack 3 seems to have/cause a memory leak
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍49 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack-dev-server crashes after ~30 mins of dev work (not sure how many cycles this…

### CASE-9822 · Global functions get called in wrong context in webpack 3
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Global methods get called in context of the `__WEBPACK_IMPORTED_MODULE_0`-object in webpack 3.…

### CASE-9824 · webpack2 is much slower than webpack1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** NO <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to…

### CASE-9825 · Webpack 3: * as imports inside index file - output conflicting names.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug _Note: I am still trying to create a small reproducable case but I am not able to do it. But i see this issue in my huge code base in my company._ <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests…

### CASE-9826 · Can't import a chunk from dll
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I get an error "Module not found: Error: Can't resolve..." while trying to build my code. **If…

### CASE-9827 · webpack 2.3.2 and external AMD Modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> Bug report - external AMD modules don't load webpack 2.3.2 <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **Current behavior** I have an external amd module mylogger, I load into my pages using requirejs. I've added externals to my…

### CASE-9828 · js import bootstrap css error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: bootstrap, webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> First of all, I am sorry that my English may be very poor, so I use google translate to describe my problem! **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the…

### CASE-9829 · __dirname not in relation to original location
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** While using webpack for server side packing of node.js apps I am unable to have an accurate…

### CASE-9831 · Cannot configure webpack 2.2.1 correctly, keep throwing WebpackOptionsValidationError
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I used **[email]-beta.22** and **[email]-beta.10** before, and it worked fine. The…

### CASE-9832 · Exception while loading ejs view engine at runtime
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Exception thrown when trying to load ejs view engine: ``` Error: Cannot find module "." at webpackMissingModule…

### CASE-9839 · when using `outputModule` library entry files may export additional names
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The `ModuleChunkFormatPlugin` may create arbitrary file-level names when formatting an ESM chunk. [link]…

### CASE-9840 · Webpack does not recognize new files (maybe batch file creation issue?)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> I have a typescript project, that i develop with VSCode. In the workspace i have a task configured that automatically runs. this is webpack --watch. there is no static entry file, rather I've used glob to simply tell…

### CASE-9841 · hmr might fail if there are new initial chunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR might fail if one initial chunk occur at second compilation. The reason: If one chunk is not initial chunk in the first compilation, but is initial chunk in the second…

### CASE-9842 · mangled exports breaks with destructuring assignment of JSON imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As of 5.90.2 (including 5.91.0), destructuring assignment on a JSON import does not work because the property names have been changed (using default settings). Setting…

### CASE-9843 · Using `[name]` within `output.library`, the correct value isn't utilized in the source map namespace
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When utilizing multiple entry points, and specifying a custom library name which includes the `[name]` placeholder, the source-map resource path is excluding the replaced `[name]`…

### CASE-9844 · [5.91.0] "Fixed fs types" breaks `outputFileSystem` compatibility with `memfs`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After Webpack upgrade from v5.90.3 to 5.91.0 in an existing project, the TypeScript does not allow the code given in [Custom File Systems docs]([link]) because of typing conflict…

### CASE-9845 · Aggregate errors or errors with cause are not logged
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If an [`AggregateError`]([link]) or `Error` with [`cause`]([link]) is thrown, Webpack intercepts and only logs the primary message. For these cases, that message is often just an…

### CASE-9846 · import binding not linked in `define` function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Keywords: - AMD - define - import **What is the current behavior?** import binding in define function will cause referenceError. **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do…

### CASE-9847 · Infinity loop in moduleFederationPlugin, in runtime loading module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If your shared module do not import all modules in main index.js file(use for tree shaking), fallback module infitity looping browser runtime. [Consumes]([link]…

### CASE-9848 · Source map names for context modules with parts that look like non-absolute paths are malformed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When a build includes context modules where the regular expression contains something which looks like a relative path, Webpack generates a source map with an incorrect source name that turns the…

### CASE-9849 · LitElement doesn't work when target is 'electron-renderer'
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I set my build target to 'electron-renderer' the app builds fine, but at runtime, I get the error: ``` Uncaught (in promise) TypeError: h.createComment is not a function at r…

### CASE-9850 · Unexpected automatic fix for invalid @user statements in wrong order.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** > In CSS 2.1, any `@user` rules must precede all other rules (except the `@user` rule, if present). [link]([link]) - esbuild chooses to generate invalid code with warnings. - webapck chooses to be…

### CASE-9851 · Watchpack Error (watcher): Error: EMFILE: too many open files, watch
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack watch doesn't work when VSCode is running. Whenever I run webpack, it prints lots of messages like this: ``` Watchpack Error (watcher): Error: EMFILE: too many open files, watch <path>…

### CASE-9852 · __webpack_nonce__ fails due to imports getting hoisted above the assignment.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm attempting to setup CSP in our application, and the `__webpack_nonce__` assignment simply isn't working. After digging into the generated code, I discovered it's because all of the imports get…

### CASE-9853 · Webpack module federation not using webpack nonce
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting a webpack nonce as per the [webpack content security policy page]([link]), the webpack nonce is not being properly inserted in the remoteEntry.js file, so the desired CSP doesn't pass.…

### CASE-9854 · Hoist RegExp Literals in SourceMapDevToolPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The use of RegExp literals create unnecessary object references/allocations especially in iterated hot paths like SourceMapDevToolPlugin. We should hoist these to the top of file and give them…

### CASE-9855 · Uncaught SyntaxError: Unexpected token '}'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack randomly fails to bunle which causes `Uncaught SyntaxError: Unexpected token '}'` error message and broken code: It seems like it adds the following segment twice, which causes the problem:…

### CASE-9856 · Generated ES module trying to import already-removed empty JS chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm leveraging Webpack 5's ESM support to generate ESM libraries, in the meanwhile I use `mini-css-extract-plugin` to extract all CSS to a single file. With some typical config, I succeed in the…

### CASE-9857 · React hooks composition fail when packaging into different entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** React hook `useContext(Context)` doesn't work when call from another hook from different entry For example: 1. I have `useHook1` and `useHook2`. `useHook2` call `useHook1` inside 2. Configure…

### CASE-9858 · Outputted lambda in conditional fails with Qt WebKit
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webkit, webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Bundles cannot be loaded by the Qt WebKit browser and fail with console message `':'. Expected a ';', ']', '}', ')', ',', line terminator or EOF following a arrow` <!-- A great way to do this is to provide your configuration via a…

### CASE-9859 · Incremental rebuild performance regression in v5.54.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack spends several seconds inside of [`lib/Watching.js`]([link] tool]/blob/main/lib/Watching.js) after an incremental rebuild: This profile is from `5.54.0`: ![5 54 0]([link]) And I verified…

### CASE-9861 · Async module library with `type: "module"` exports `undefined`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` Welcome to Node.js v16.6.1. Type ".help" for more information. > await import(`./dist/bundle.js`) [Module: null prototype] { a: undefined } ``` **If the current behavior is a bug, please provide…

### CASE-9862 · [SOLVED] WebPack takes time to compile like 34970 ms
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``webpack 5.47.1 compiled with 1 warning in 34970 ms`` <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a minimal reproduction with…

### CASE-9863 · [Breaking change] NormalModuleReplacementPlugin resolves modules using old resource's context in 5.49.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬8 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of Webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using the NormalModuleReplacementPlugin, the context in which imports were resolved inside the replacing resource (newResource) was changed in version 5.49.0. Previously with 5.48.0 and lower,…

### CASE-9864 · Module Federation: injecting scripts for remotes with HtmlWebpackPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale/webpack-5/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** During runtime when request to remote application **is pending**, injected script is blocking the page. **If the current behavior is a bug, please provide the steps to reproduce.** In the scenario…

### CASE-9865 · Webpack 5 multiple web workers with shared chunks failing to load
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Multiple web workers within webpack are unable to load shared chunks from the correct url due to the workers self.location being different than the window.location of the original page **If the…

### CASE-9867 · Providing __system_context__ when an entry point sets library.type = 'system'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting `library.type` per entry point, `__system_context__` is not set for SystemJS entry points and compilation sometimes fails. **If the current behavior is a bug, please provide the steps…

### CASE-9868 · [Webpack 5] 3x slowdown caused by _discoverActiveExportsFromOtherStarExports
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Upgrading to Webpack 5 takes 5s to livereload my browser between changes: ![image]([link]) (the light green blocks at the bottom are calls to `getStarReexports` and the slow hotspot…

### CASE-9869 · Const reassignment in production build
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack, vue
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack generates code using a `const` variable and then attempts to re-assign it. I suppose this could be due to the vue dependencies I'm using - but this code very much appears to be generated by…

### CASE-9870 · webpack 4/5 compatibility issue
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If an app that is bundled with webpack@user tries to consume library that has been bundled with webpack@user AND TerserPlugin with `keep_fnames: true` option AND the library exports something that…

### CASE-9871 · `v5.22.0` breaks HtmlWebpackLoader
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Updating from 5.21.2 to 5.22.0 makes my build spit out the following errors for all my `HtmlWebpackPlugins`: `message: Error: The loader "<path>\\node_modules\\html-webpack-plugin\\li b\\loader.js!<path>\\src\\app\\app.html" didn't…

### CASE-9872 · Async externals are not awaited in commonjs modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, if I configure `externals: {someExternal: 'promise window.getDep...'}`, they are awaited only in es modules. In commonjs modules they are promises. Which is not a big deal, if it's local…

### CASE-9873 · `type: "commonjs"` and browser ESM exports with ".js"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi, Per [link] tool][ref][ref] and [link] , a couple of projects have run into issues where `type: 'commonjs'` is used and webpack is using this fact to insist that *all* `.js` exports must…

### CASE-9874 · splitchunks with multiple entry points is broken in v5.12.0+
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the splitchunks.cacheGroups option with multiple entry points one of the vendor bundle files is not created. This only occurs in Webpack v5.12.0 and later. Webpack v5.11.1 and earlier…

### CASE-9875 · Entry with chunkloading import-scripts public path wrong
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** For my test build, when I am importing another script in my entry with chunkloading set to import-scripts, it requires from the non-test build chunks path/directory which doesn't exist in the…

### CASE-9876 · Webpack 4.44 FATAL ERROR: JavaScript heap out of memory
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a project in which I run webpack dev server and a webpack watch command ``` "dev-client": "npx webpack-dev-server --mode development --config config/webpack.config.js", "dev-server": "npx…

### CASE-9877 · react-bootstrap-table2-toolkit Import Error in Webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, bootstrap, webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `react-bootstrap-table2-toolkit` package causes error when bundled using webpack 5 (`5.10.1` to be exact). Simply adding `import { Search } from 'react-bootstrap-table2-toolkit';` to any js file…

### CASE-9878 · Accessing a circular dependency early with re-export, an error occurs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale/webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This is a simplified example: ```js // src/barrel/a.js export function a() {} // src/barrel/b.js import {a} from "./index"; console.log(a); // expected undefined export function b() {} //…

### CASE-9879 · Dynamic import with variable + module-federation-plugin error
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I'm trying to use a dynamic import that uses a variable in module federation plugin. Then report error.My Code: ```javascript const separator = '/' import("childApp"+separator+"module").then(res=>{ console.log(res) }) ``` error:…

### CASE-9880 · [webpack 5] Dynamic chunk loading error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report After migrating from v4 to v5 webpack fails while serving dynamic chunk loading <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic chunk import hangs and throws timeout error ```js import(/* webpackChunkName: "Home" */ './home') ``` ```bash…

### CASE-9881 · [path] in assetModuleFilename may unexpectedly traverse parent directories
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With `output.assetModuleFilename` configured as `"[path][name][ext]"`, referencing an asset from outside the project root via `..` or a symlink through `..` causes a file to be written outside of…

### CASE-9882 · Webpack load all files in node_module directory in development mode and dynamic import name
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> The issue reported to Codemirror codemirror/CodeMirror[ref] but in fact it's bug in Webpack development mode module loading. Webpack load everything that is in node_module, if module have invalid files (like html file) it give…

### CASE-9883 · Can not import css file not exported from package.json
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I am working on [link] This is very simple web pack configured web app. It works well with webpack 4(original version). But after I update web pack version, it shows following error. Module not found: Error: Package path ./Build/Cesium/Widgets/widgets.css is not exported from package E:\MyResearch\CesiumJsGIS\node_modules\cesium (see exports fiel d…

### CASE-9884 · A with webpack v5 bundled unchanged angular app, does not work anymore
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack, angular
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report A successful bundled angular app, does not work after webpack 5 upgrade. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Link: [link] ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** Please use the…

### CASE-9885 · webpack5 wepback-cli4.0 internal/modules/cjs/loader.js:883 Error: Cannot find module 'webpack-cli/bin/config-yargs'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```ts webpack5.0 webapck4.0 internal/modules/cjs/loader.js:883 throw err; ^ Error: Cannot find module 'webpack-cli/bin/config-yargs' Require stack: [webpack-cli] Error: Universal Chunk Loading is…

### CASE-9886 · Installing wepack fails
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `npm i webpack` fails Error message: ``` npm ERR! Maximum call stack size exceeded npm ERR! A complete log of this run can be found in: npm ERR!…

### CASE-9887 · Adding "exclude" to oneOf loaders adds minutes to build time
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```js module: { rules: [ { oneOf: [ { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: [ /node_modules/ ] }, ]}]} ``` Adding the `exclude` block with `/node_modules/` in it adds…

### CASE-9889 · Total Different Output with 4.x and 5.22 Beta and the application stops working with libraryTarget:'system'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I am trying to upgrade my project from 4.x to 5.22 beta and the application stops working with libraryTarget as 'system' , i am loading the module using System.JS dynamically and the exported methods are missing in the 5.X ``` try {…

### CASE-9890 · copy only, prevent bundle and binary asset corruption
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Not sure if it's a problem with webpack or my use of it, but asking on [stackoverflow]([link]) and gitter didn't get me any help so far. Neither did an issue at [link] <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or…

### CASE-9891 · Poor webpack own typings detalization
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬8 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Loader from `webpack/declarations/WebpackOptions` ```typescript export interface Loader { [k: string]: any; } ``` Loader from `@user/webpack` ```typescript interface Loader extends Function { (this:…

### CASE-9892 · Webpack 5 HMR Issue: Cannot set property './index.js' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In Webpack 5, when I am using webpack-hot-middleware and `HotModuleReplacementPlugin`, then if I make a change in one of my JavaScript files and refresh my web app, I receive the error `Uncaught…

### CASE-9893 · DefinePlugin doesn't handle arrays & undefined correctly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If providing a config with an array in it the DefinePlugin does not resolve it correctly. If accessing an undefined key object the DefinePlugin does return the whole object. **If the current…

### CASE-9894 · Safari will not paint the DOM untill all css chunks are loaded
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: safari, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I assume webpack loads asynchronous chunks by adding script and link tags in the head tag. It seems that safari will not paint the dom untill all the async css chunks are loaded. I have a simple web…

### CASE-9895 · Asset module gets different hash
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** using different configurations: ```js rules: [ { test: /\.css$/, loader: 'css-loader' }, { test: /\.ttf$/, type: "asset" } ] ``` ```js rules: [ { test: /\.css$/, loader: 'css-loader' }, { test:…

### CASE-9896 · (updated) hot.status() returns wrong value
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: I submitted the issue by mistake in [ref], I'm updating it here. <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `module.hot.status()` the status string fed to the status handler (registered via `module.hot.addStatusHandler()`) is different in…

### CASE-9897 · Loading chunk {chunkId} failed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** use react-lazy split code ,product evn user error loading chunk 7 failed. Here is sentry error json (some sensitive information has been removed): ``` { "event_id":"", "project":313, "release":"",…

### CASE-9898 · Building for multiple environments with a single task
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I do not think my problem is a bug. It could very well be a feature request or somebody already has a solution to it and just that I'm unable to figure out the right way. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or…

### CASE-9899 · Chunk graph / "available modules optimisation" refactor in 4.38.0 breaks our bundles
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a large, 25,000+ module, build with multiple entry points and judicious usage of code splitting. In the latest version of Webpack we have a scenario where one of our async bundles when…

### CASE-9900 · Loader called twice when used "inline"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When a loader is set "inline" in an import statement, the loader is called twice: once with the options on Webpack config file, once with the inline options. It is explictly said that Webpack…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9823 · CommonsChunkPlugin in async mode doesn't select initial chunks caused a bug in expected behvaior
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍20 💬9 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The change that was made by [this PR]([link] tool][ref]) caused a change in expected behavior which IMO seems like a bug. **If the current behavior is a bug, please provide the steps to reproduce.** I have this configuration: ```js entry: { application: [path.join(chunksPath, 'application_chunk')] }, .... plugins: { new webpack.optimize.CommonsChunkPlugin({ async: "vendors", children: true, minChunks: (module, count) => { return module.resource && webpackUtils.isVendor(module.resource) &&…

### CASE-9866 · Target: node12 throws no dynamic import
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report **What is the current behavior?** When setting `target: 'node12'` for a modules build, I get the message: ``` Error: For the selected environment is no default ESM chunk format available: ESM exports can be chosen when 'import()' is available. JSONP Array push can be chosen when 'document' is available. Select an appropriate 'target' to allow selecting one by default, or specify the 'output.chunkFormat' directly.…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9830 · Plugin API done() is called to often - in this case before additional compiler passes
- **Principles**: P-F4, P-F5, P-H3 · **Env**: webpack, react
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: We use Webpack in an SSR React application. We have a build dependency between our client and server. The client has to be build before starting building the server. In our current code base we experienced something new... which was probably introduced during recent Webpack v2 development: - The client part is building code and completed. - The server part is building. - The client is building again. - The server is building again. This first felt like some kind of race condition. I spend some more time debugging it and I break it down to this section in `Compiler.js` inside `emitAssets()`:…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9833 · resolveLoader.alias does not handle loader query properly.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, webpack
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 2.1.0-beta.27 **Please tell us about your environment:** Linux **Current behavior:** Trying to alias from `loader` to `loader?query` broken **Expected/desired behavior:** If i `require('loader!resource')`, when `loader` is aliased to `loader?query`, then require should be transformed to `require('loader?query!resource')`. As for now, webpack tries to resolve `loader?query` as path to js file with loader. It is working in webpack 1.x branch. Is there any workarounds available?

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9836 · AMD external dependencies don't load in chunks
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I'm finding that if module A depends on an external AMD module and ends up in a non-entry chunk, then the AMD module doesn't load, and there is an undefined variable in the code. To repro: 1) Download the repro code at [link] 2) Untar the file. 3) cd into the directory 4) npm install webpack 5) webpack --config webpack.config.js 6) open install.html (if on mac, otherwise just open in a browser) Expected: every module in the code loads properly and changes its div from "no" to "yes". Actual: the two modules that end up in chunk 1.1 and have dojo dependencies fail to run. If you look at the…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-9837 · Theme loading is broken for my use case
- **Principles**: P-C1, P-C2, P-C3 · **Env**: bootstrap
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Loading with less and style is broken for my use case. I can require('bootstrap/less/bootstrap') but if I want to load it from './style.less' with @user "~bootstrap/less/bootstrap" then it fails with the fonts. The imported file doesn't then run imports from the path of that current file but from the original file. So only loading theme files from a single directory is supported. This limitation is making it so that I can't create a custom bootstrap.less that (ehm) bootstraps only the parts that I want and also includes a custom theme file. So now its all or nothing in regards to bower…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9860 · Module id not stable when compiling the same code in different folders
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** This week we upgrade webpack from `5.33.2` to `5.50.0`. The module ids became unstable between builds produced from different CI instances. **If the current behavior is a bug, please provide the steps to reproduce.** - Clone [link] - Execute `npm install && npm run build` in folder a and b - Observe webpack assigning different module ids to the same file _With webpack 5.50.0_ ![image]([link]) _With webpack 5.33.2_ ![image]([link]) **What is the expected behavior?** Module id not change like the old version

