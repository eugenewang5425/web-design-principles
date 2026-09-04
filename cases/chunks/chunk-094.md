# Case Chunk 094 — Round 94

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10301 · Fail to locate files when bundling file that imports compiled webpack config that specifies context
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I run webpack on a `node` server script with webpack-hot-middleware, which asks for a…

### CASE-10302 · hotDownloadManifest forming invalid URL for hot-update.json request
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It appears to respect my custom `__webpack_public_path__` configuration, but when generating…

### CASE-10303 · SyntaxError: Unexpected token 'const' with babel-loader if babelrc is absent
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Karma tests in PhantomJS fail with `SyntaxError: Unexpected token 'const'` when no…

### CASE-10304 · ModuleConcatenationPlugin renames Classes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** when ModuleConcatenationPlugin is enabled some classes are renamed. Generated code without…

### CASE-10305 · 3.5.1 with ModuleConcatenationPlugin yeilds "Maximum call stack size exceeded"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> bug **What is the current behavior?** ``` /Users/Shared/Jenkins/---/node_modules/webpack/lib/optimize/ConcatenatedModule.js:224…

### CASE-10306 · DllPlugin with CommonsChunkPlugin ReferenceError: vendor_dll is not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Uncaught ReferenceError: vendor_dll is not defined Possibly because output.library Template…

### CASE-10307 · ERROR in chunk manifest [entry] with webpack v3.1.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do…

### CASE-10308 · Provide clear output about when a build finishes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'm proposing a feature/enhancement. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running webpack with `--watch` for a while, your console…

### CASE-10309 · ModuleConcatenation (inner): dependency variables are used (i. e. ProvidePlugin)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using the `ModuleConcatenationPlugin` with `--display-optimization-bailout` I get a warning on…

### CASE-10310 · [Feature Request] add options to exclude certain files/folders for ModuleConcatenationPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** All files will be processed by ModuleConcatenationPlugin. **If the current behavior is a…

### CASE-10311 · Webpack3 generate css in wrong order
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `extract-text-webpack-plugin` with webpack3 to generate stylesheet file, the…

### CASE-10312 · Consider adding dynamic import's webpackMode as a configuration option, or eval the comment contents to get value
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍36 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Feature Request Add webpackMode as a config. option OR eval comment in dynamic import before using it's value. **What is the current…

### CASE-10313 · UglifyJsPlugin: typescript sourcemap not match
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After use webpack build my project (ts) with UglifyJsPlugin, it worked well, but **sourcemap…

### CASE-10314 · No global object available for {target: 'webworker'}|
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Bug **What is the current behavior?** When compiling a file using `{target: 'webworker'}`, the `global` object is not shimmed,…

### CASE-10315 · Do not fail on non-standardized but already supported in browsers ecmascript features
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** It's not a bug, it's a feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I can't use webpack without babel for local development of…

### CASE-10316 · Please make long term caching better supported out of the box
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍38 💬6 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, predictable long term caching of output chunks is difficult to achieve. After…

### CASE-10317 · Re-ordering / Re-naming of vendor chunk modules, despite use of HashedModuleIdsPlugin and CommonsChunkPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Previously, in our app, we did not use the `HashedModuleIdsPlugin`. This caused the vendor…

### CASE-10318 · hidden-source-map (correct file names and lines)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I don't know if it's bug so it can be a feature request or bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm using `hidden-source-map` to…

### CASE-10319 · Entry chunks not being re-evaluated when script is re-run
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Entry modules are not being re-evaluated when the script they are in is re-run **If the current…

### CASE-10321 · require('constants') in webpack@user requires nodejs native constants
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** 1. Setup in webpack.config.js `module.resolver: [ path.resolve(__dirname, 'src'),…

### CASE-10323 · [BUG] require as a variable
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When build the following ```js var r = require, e = 'extensions' console.log(r[e]) ``` yields…

### CASE-10324 · Feature: Reuse DLL bundles for production rebuild - export tree-shakable es2015 module format
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A feature for build time optimization, extending the Webpack DLL functionality <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Wepack DLLs speed up…

### CASE-10325 · core-js error on npm link: __webpack_require__(...) is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Worked fine until I did an `npm link` to the imported component. See details below. **If the…

### CASE-10327 · Wrong error message details `cannot find module`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> *Bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Two crazy nights ago I forgot to install postcss-loader, so all this time I'd tried to use this loader and seen error message like this: > Uncaught Error: Cannot find module…

### CASE-10328 · Why CommonChunksPlugins does not remove Commons Chunk Code
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** RT **If the current behavior is a bug, please provide the steps to reproduce.** I have a multi Page…

### CASE-10329 · Cannot Import react, react-dom, redux or react-redux on electron-renderer target
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: react, electron, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> I'm having a bug here. Loading react fails on electron-renderer target. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> React, redux and many cannot be loaded on electron. Reproducing the error is complex, so I just provide an npm module…

### CASE-10330 · Browsers ignore source maps
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3, P-G2 · **Env**: chrome, webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Source maps are not generated. Breakpoints are ignored (at least in Chrome and FF), `debugger;`…

### CASE-10331 · [bug] [2.0] Unable to append paths to externals.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Setting an external, f.e. ```js externals: [ '@user', ], ``` then trying to import something…

### CASE-10332 · New CommonsChunk vendor algorithm/functionality
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently CommonsChunk is great for applications that explicitly define chunks, but for…

### CASE-10333 · Webpack-dev-server on Windows consumes ~15% of CPU just watching for file changes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On a large-ish project, webpack keeps consistently burning large percentage of my CPU actively…

### CASE-10334 · Webpack 2: Requests with no extension resolve to node_modules before local resources
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Even though my `resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules']`, requests…

### CASE-10335 · watch doesn't work since 2.2.0-rc.7
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using webpack --watch --config my.config.js with webpack 2.2.0 rc7 it processes all files,…

### CASE-10336 · resolve.extensions ignored
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** BUG <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Ignores `resolve.extensions` option **If the current behavior is a bug, please provide the…

### CASE-10337 · Add runtime switch to name anonymous functions
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This week a friend of mine ( @user ) hacked together something amazing. Something that…

### CASE-10341 · Webpack is breaking npm ssh2 module
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron, angular
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hi, I want to use the ssh2 pack from [link] in my Electron app inside an angular 2 service. I found that it didn't work out the box - which was strange because all other npm packages just 'worked' including an FTP module. I come here after this stack overflow post, and a followup issue on the ssh2 package github : [link] And this ssh2 issue: [link] The ssh2 package maintainer suggested I added an issue here to see if you guys on the webpack side can help at all, because I think he has run out of ideas on what he can do to fix it. Any and all support would be very graciously received.

### CASE-10352 · Regression in v5.99.0 - Cannot use 'import.meta' outside a module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Our page fails to load with `Cannot use 'import.meta' outside a module`, presumably because we use it when initializing a Worker or something. **If the current behavior is a bug,…

### CASE-10354 · Async chunk unexpectedly merged with split chunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In some conditions, `webpack` does not output an async chunk for a module imported with `import()`, but merges it with split chunks. **If the current behavior is a bug, please…

### CASE-10355 · Async imports in tree-shaken functions still end up in the bundle
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic imports that are tree-shaken away still end up including their contents in the bundle. This does not occur with re-exports. See code example below. **If the current behavior…

### CASE-10356 · Nested define functions are not considered as exports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack gives a false warning - "export 'default' (imported as 'foo') was not found in './mid.js' (module has no exports)" **If the current behavior is a bug, please provide the…

### CASE-10358 · @user CSS at-rule not always respected when determining order
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Despite `a.css` being imported by `b.css`, it comes later in the resulting css file. **If the current behavior is a bug, please provide the steps to reproduce.** [link] ``` npm…

### CASE-10359 · Export warnings while exporting CSS using Webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** While trying to import CSS classes into React code and compiling with Webpack, I'm getting warnings in the pattern of export x imported as x was not found in somefile.css" Here's one…

### CASE-10360 · Memory leak from child compilation in watch mode (`Sources` strings)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> NOTE: This issue is very similar to [link] tool][ref] (child compilations), but these are two separate leaks. This one is related to duplicate strings added to the in-memory cache. **What is the current behavior?**…

### CASE-10361 · NormalModuleReplacementPlugin doesn't resolve relative imports of also replaced modules within replaced modules anymore in webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Apologies for the cryptic title but I'm not sure how to describe this better. I fear what follows below might not be much easier to understand either, sadly. We're using…

### CASE-10362 · Superclass replaced with `null` in production build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When building the following JavaScript file with Webpack in production mode, it generates invalid code that throws a `TypeError` at runtime: ```javascript var SuperClass = class {};…

### CASE-10363 · Module exposed via ModuleFederationPlugin gets initialized twice
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The issue is related to the Module Federation plugin. I have two applications `app1` and `app2`. `app1` exposes a module named `test.js` using the ModuleFederationPlugin. Both `app1` and `app2` use…

### CASE-10364 · Caught (in promise) TypeError: c[t] is not a function, Index.js code doesn't run when served publicly, Updated Webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When bundled files are served publicly, any code inside the index.js (entry point for bundle) does not execute or run. However, all imports into index.js which include functions run with no problem.…

### CASE-10365 · Webpack repo fails lint out of the box on windows
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, linux, webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Lint fails on the CR in EOL of files on windows. I tried cloning the repo on linux and things worked as expected. I tried with git's `core.autocrlf` set to `true` and set to `false` and they both failed. My analysis is that this happens because `.gitattributes` has `* text=auto` which is equivalent to having `autocrlf` to `true` all the time. On…

### CASE-10366 · Expensive module hashing for all files on every rebuild
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running `webpack` with `watch` mode and collecting a CPU profile, I can observe that the `createModuleHashes` step in the `seal` phase is costing us a large amount of time (often 1s+). In the…

### CASE-10368 · Will there be webpack6?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-10369 · stats: 'errors-warnings' setting does not suppress success message
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When the `stats` option is set to `'errors-warnings'`, it still outputs the message `webpack compiled successfully` to the console. **If the current behavior is a bug, please provide the steps to…

### CASE-10370 · Major Build Performance Regressions when using ContainerPlugin in childCompiler
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Build should not be 2-3x slower **If the current behavior is a bug, please provide the steps to reproduce.** If i create a childCompiler and use `exposes` (ContainerPlugin) a webpack compile…

### CASE-10371 · Imported TypeScript enum is undefined in Webpack module object
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: opera, windows, typescript, webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report webpack version: 5.74.0 Node.js version: 14.15.1 Operating System: Windows 10 Pro <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Exported enums are undefined at runtime. ![image]([link]) `util_types__WEBPACK_IMPORTED_MODULE_0__` contains no…

### CASE-10372 · ESM output: single runtime chunk resolved to wrong path when using subpath entrys
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If i create entrypoints that include a path in their name, when runtimeChunk: single is set - webpack imports the runtime from the wrong directory. **If the current behavior is a bug, please provide…

### CASE-10374 · Cannot read property '__esModule' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a components library where we have multiple entry points setup for components. Since we had nesting of components as well, we were ending up duplicating the code. Hence we used the…

### CASE-10375 · Module federation - Missing reload/invalidate mechanism for remoteEntry.js when some chunk fails to load
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Simplified description of my scenario: I have a typical setup of 3 angular apps built with module federation plugin. host-app (shell-app) remote-app (mfe1) remote-app (mfe2) The shell app loads the…

### CASE-10376 · why module federation load url wrong
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** app A load from app B which is expose some component use module federation case wrong url. **If the current behavior is a bug, please provide the steps to reproduce.** 1. app B expose somethings…

### CASE-10377 · Top Level await parsing failes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Enabling `experiments.topLevelAwait` and using the `@user/plugin-syntax-top-level-await` for parsing .jsx files does not work, and throws error `Error: Top-level-await is only supported in EcmaScript Modules` <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current…

### CASE-10379 · Top-level await leads to complexity explosion with cyclic imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In a project with cyclic imports, top-level `await` leads to a massive complexity explosion. On a complete graph of *n* nodes, the time and memory grows as *Θ*(*n*!), which gets very bad quickly. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Create the following file as `0.js`: ```js export const c = await null; ``` 2. Create the…

### CASE-10380 · Webpack removing preact import used by jsx
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack strips the `preact` import from the source code which will throw an error when running the JS in the browser: `MyComponent.tsx:8 Uncaught ReferenceError: preact is not defined`. **If the…

### CASE-10382 · webpack removes files specified in package.json sideEffects
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Files specified in package.json `sideEffects` is removed **If the current behavior is a bug, please provide the steps to reproduce.** Minimum reproduction: [link] Note that _src/lib/package.json_…

### CASE-10383 · Error resolving root-relative image paths in css for external images
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When encountering a root-relative url (IE: `url(/path/to/image.jpg)` ) in css, Webpack attempts to process the asset and throws an error if it fails to do so. This is fine if the image is local to…

### CASE-10384 · failed to inference ONNX model: TypeError: Cannot read properties of undefined (reading 'InferenceSession')
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> Two weeks ago I opened a thread in `StackOverFlow` asking for help about `ONNX` not "read"/"loaded" by `webpack`: [link] but didn't receive any help. <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I wrote a `GitHub's issue` in the Microsoft's ONNX page: [link] and, according to…

### CASE-10385 · Module federation: sync load support
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍1 💬5 · closed · labels: status: stale/webpack-5/help wanted/area: module-federation
- **Excerpt**: # Bug report so, i would like to create this ticket to give more visibility to [link] tool][ref] and see if we can finally get this fixed <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** crash with error `Uncaught Error: Shared module is not available for eager consumption: webpack/sharing/consume/default/react/react` **If the current behavior is a bug, please provide the steps to reproduce.** this is a repository to reproduce…

### CASE-10386 · Bug report: Subfolder package.json files for dependencies are not being respected
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Subfolder package.json files for dependencies are not being respected. **If the current behavior is a bug, please provide the steps to reproduce.** Example Library: [link] 1. Clone [link] 2. `npm…

### CASE-10387 · PackFileCacheStrategy warnings with global Promise hook
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I was runing a nextjs project with webpack5. When I added following code ```js class HookPromise extends Promise {} global.Promise = HookPromise ``` I got some warnings like ``` <w>…

### CASE-10388 · Regression: Webpack 5.52.1 takes a full minute to shut down
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Webpack 5.52.1 introduced an issue not seen in 5.52.0. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It takes full minute to wait for webpack to shut down after printing message "compiled successfully". **If the current behavior is a bug,…

### CASE-10389 · External imports in ESM output are two layers of "default" deep
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Relevant parts of config: ``` experiments: { "outputModule": true }, externalsType: "module", externals: { "fela-plugin-named-keys": "fela-plugin-named-keys" }, ``` When I have set my Webpack config…

### CASE-10390 · config `module.generator.emit` is no longer available
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It seems that in latest version (v5.50) the `emit` of global options for seperate generators ' (e.g. `module.generator.asset.emit` `module.generator['asset/resource'].emit`) is no longer available?…

### CASE-10391 · BuildDependencies in cache not update
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm using webpack to bundle my project, if `BuildDependencies` in cache configuration is updated but the cache pack is not invalid, the pack will not updated. **If the current behavior is a bug,…

### CASE-10392 · Initial styles are broken with lazyCompilation and style-loader
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> The `lazyCompilation` experimental feature is very useful for multi-entry projects, the switch to webpack 5 did cause an overall slow down for cold builds and hot module reload times but I've been able to improve the situation with…

### CASE-10393 · Large served bundle yields net::ERR_CONTENT_LENGTH_MISMATCH in Chrome
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-F4 · **Env**: chrome, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When served using `webpack serve`, large bundles may not load in the browser fast enough, getting cut off (perhaps due to underlying connection timeout). The result in the console is…

### CASE-10394 · dynamic import of modules containing same import statements sometimes result in duplicate code generation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If we have two modules say A and B. A and B imports react. During dynamic import of these two module I found react code to be duplicated. **If the current behavior is a bug, please provide the steps…

### CASE-10395 · `module.rule.generator.emit = false` results in different emitted filenames
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `module.rule.generator.emit` is set to `false` for asset resources, webpack is supposed to emit the same filename as when it's set to `true`. This doesn't work correctly if there's an image…

### CASE-10396 · Webpack ignores errors thrown in callback passed to `runAsChild()`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If the callback passed to `runAsChild()` throws an error for whatever reason (e.g. [link]), webpack will swallow/ignore the error and happily continue compiling. Eventually the process will finish…

### CASE-10397 · configuration has an unknown property 'writeToDisk'. These properties are valid
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** "dev" build exits with status 2. **If the current behavior is a bug, please provide the steps to reproduce.** It happens when executing `webpack serve --progress --profile --config webpack.dev.js`…

### CASE-10399 · Webpack5 doesn't have compatibility with non-harmony modules.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![image]([link]) when I import `file-saver` package(a non-harmony module). it's all of the property is on `defalut` **If the current behavior is a bug, please provide the steps to reproduce.** 1.…

### CASE-10400 · Unexpected behavior for advanced `dependOn` usage
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** According to the [documentation]([link]) and [examples]([link]), entry points provided to another entry's `dependOn` property must: > [...] be loaded before this entry point is loaded Whilst this…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10320 · Webpack/Babel does not work with $NODE_PATH
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: This is a bug report - I am getting this error: ``` Module build failed: Error: Couldn't find preset "latest" relative to directory "/Users/alexamil/WebstormProjects/oresoftware/sumanjs/suman-browser-polyfills/modules" at /Users/alexamil/WebstormProjects/oresoftware/sumanjs/suman/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19 at Array.map (native) at OptionManager.resolvePresets (/Users/alexamil/WebstormProjects/oresoftware/sumanjs/suman/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20) at OptionManager.mergePresets…

### CASE-10342 · Webpack should set the __esModules flag to true when handling ES6 modules
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 2.1.0-beta.25 **Please tell us about your environment:** OSX 10.12 (16A323) **Current behavior:** When I use webpack with babel and the the `babel-plugin-transform-es2015-modules-commonjs` transform I can't import a ES6 module anymore which is not transpiled by babel. Babel handles the module like an CommonJS module because webpack doesn't set the `__esModules` flag to `true`. **Expected/desired behavior:** I should be able to import the module. - **If the current behavior is a bug, please provide the steps to reproduce and if possible a…

### CASE-10349 · AMD require call is incorrectly replaced by webpack and causes SyntaxError
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: I am in the process of migrating from RequireJS to Webpack, but following AMD module that worked in RequireJS produces "SyntaxError: missing ; before statement" with webpack: ``` define([], function() { var modules = []; if (modules.length) { require(modules, function() {}); } }); ``` This is basically an excerpt that causes error. Webpack transforms it to following: ``` var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { var modules = []; if (modules.length) { __webpack_require__(1)!/* require */(/*…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-10322 · cannot evaluate module correctly when using CommonsChunkPlugins in node
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm investigating ssr in `node` using modules built by webpack. If i use `CommonsChunkPlugin` then the entry module cannot be evaluated correctly. If i remove the…

### CASE-10357 · Modules builded by Webpack dont work with SSH
- **Principles**: P-F4 · **Env**: webpack, vite
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: # Bug report **What is the current behavior?** I can't use builded modules for target web for SSR applications because of ```sh 5:36:22 PM [vite] Error when evaluating SSR module /main.server.mjs: |- ReferenceError: document is not defined (or self is not defined) ``` and the same errors. This is because ```js /******/ /* webpack/runtime/jsonp chunk loading */ /******/ (() => { /******/ __webpack_require__.b = document.baseURI || self.location.href; ``` **What is the expected behavior?** Webpack should check that document/self doesn't exist and avoid the errors. E.g. ```js typeof document !==…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10326 · Performance warning file size is wrong
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ![image]([link]) ![image]([link])

### CASE-10340 · Webpack2 build more than twice when entry file changed once
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** ![image]([link]) Run webpack dev-server after change one entry file, it will build many times with the same hash. And followed by this message: ``` webpack: bundle is now VALID. webpack: bundle is now INVALID. ``` Then I switch to webpack1, it works and only build twice.(Only one `bundle is now INVALID.`) **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do…

### CASE-10343 · Problems with IMG loading
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: I'm submitting a bug report, i think. Im trying loading images inside <img src""> tag, but the content of src attribute not change after bundle.js generated. 2.1.0-beta.25 Project: [link] File with correct image tag: [link] Generated bundle with path: [link] [search for: logo.png] Path that image need have to work: "/web-app/assets/logo.png" What bundle.js have now: .setElementAttribute(this._el_9,"src","../../static/images/logo.png" Can anyone help me?

### CASE-10344 · DllReferencePlugin [HMR] Nothing hot updated.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬6 · closed · labels: status: stale
- **Excerpt**: when I use DllReferencePlugin , HotModuleReplacementPlugin and react-hmre doesn't work, but use CommonsChunkPlugin, that is wroking fine. why ? what should I do that use DllReferencePlugin and HotModuleReplacementPlugin & react-hmre is working fine. ![Uploading image.png…]()

### CASE-10348 · * in html parameters need to be escaped
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I do not know if it's exactly a bug, but after a lot of debug to find out why the watch had stopped, I discovered that the problem was in the "accept" property of file input: <input accept="images/*" /> . The \* must be be escaped. edit: I'm using JSX.

### CASE-10367 · oneOf rule has been picked multiple times
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report [link] **What is the current behavior?** !!xxx/css-loader/src/index.js??xxx/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[6].use[2]!./globals.css will not pick any loader, but asset/resource can be merged in **What is the expected behavior?** <img width="1066" alt="image" src="[link]> I'm guessing that the following new judgment statement should be added ```diff + if (r.type !== "type" || (r.type ===…

### CASE-10373 · [Module Federation] when mjs consumes a shared module , it will use shared module as commonjs
- **Principles**: P-A3, P-H1 · **Env**: opera, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: # Bug report **What is the current behavior?** Currently when you import a shared module in a .mjs file. It will use shared module as commonjs Source: <img width="2239" alt="Screen Shot 2022-08-10 at 14 21 45" src="[link]> Build Result: <img width="2517" alt="Screen Shot 2022-08-10 at 14 24 08" src="[link]> **If the current behavior is a bug, please provide the steps to reproduce.** minimial repro: [link] **What is the expected behavior?** shared module should be correctly used based on their meta info **Other relevant information:** webpack version: 5.74.0 Node.js version: v16.16.0 Operating…

### CASE-10378 · externals=scripts & module federation
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: # Bug report ```js externals:{ react: 'React@[link] } ``` ![image]([link])

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10338 · several DllReferencePlugin & import one js in html,throw ReferenceError: dll2 is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 47, chrome 52, windows, webpack, vue
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> I dont using the lastest version of webpack. I use webpack 1.13.1, and win7 system. **Do you want to request a *feature* or report a *bug*?** Yes,I want to report a bug. **Please mention other relevant information such as the browser version, Node.js version, Operating System and programming language.** 1、I use node v4.4.5. 2、Operating System Windows 7. 3、Programming language is Javascript,Vuejs,jquery,jquery-ui. 4、firefox 47, chrome 52 **What is the current behavior?** When I write several…

### CASE-10339 · Uncaught TypeError after build with OccurrenceOrderPlugin in [email]
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 55, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Enviroment: * Chrome 55 * Node 6.7 * [email] I found manifest throw a TypeError when using **OccurrenceOrderPlugin** to optimize build: ```javascript new webpack.optimize.OccurrenceOrderPlugin(true) ``` ``` Uncaught TypeError: Cannot read property 'call' of undefined manifest.4cf9fa68.js:51 ``` <img width="447" alt="2017-01-01 19 48 05" src="[link]> I created a [minimized webpack build project]([link]) to reproduce the OccurrenceOrderPlugin bug. Just do: ```bash git clone [link] && cd webpack1-long-term-cache yarn npm run build:occurrence ``` and then open the `occurrence/build/index.html`,…

### CASE-10346 · Minification of CSS in -p mode removes -moz/-o/-ms rules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack, webkit
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I was testing out Webpack with the `-p` flag and got some weird results in my CSS compared to my regular page. One of these errors was the aparent removal of CSS code. CSS in my .css-file: ``` .systembar::before { background: #0066b3; background: -o-linear-gradient(left, #a2c517 10%, [ref] 30%, #0082b6 50%, #151f77 75%, #db0050 100%); background: -moz-linear-gradient(left, #a2c517 10%, [ref] 30%, #0082b6 50%, #151f77 75%, #db0050 100%); background: -webkit-linear-gradient(left, #a2c517 10%, [ref] 30%, #0082b6 50%, #151f77 75%, #db0050 100%); background: -ms-linear-gradient(left, #a2c517 10%,…

### CASE-10381 · resolve.extensions not working for files different from js, jsx
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, webpack, webview, desktop
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: I have some problem for similar situation. In my case, i have one system work in web broswer, and work in dekstop electron app. The webpack and the system worked perfectly as long as I didn't need to separate functionality from the web and desktop systems. To solve this situation, I separated files with different extensions webview.tsx and desktop.tsx as "FileOpenMenu.desktop.tsx" and "FileOpenMenu.webview.tsx". And for import I would like to import like this "import FileOpenMenu from 'FileOpenMenu". For this I needed to create 2 webpack files that would load the correct file depending on the…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10345 · How to include Webpack build plugin/library in project?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: This is a question. I created a project without webpack. Now just for learning webpack, I am including in my project. I have a following files which I am trying to build through webpack: ### main.js ``` define(['../libs/nunjucks.slim.js'], function(nunjucks){ // use the nunjucks variable }); ``` ### nunjucks.slim.js > [Link]([link]) (_Webpack build plugin_) But `main.js` is throwing error - `nunjucks is not defined`. I don't know what I am doing wrong here. As per my understanding, in `nunjucks.slim.js` file, if I replace `var nunjucks` to `window.nunjucks` it works fine. But I am not…

### CASE-10350 · Export of CJS require("file.json") has broken in 5.107.1
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Have you used AI? None ### Bug Description ``` export const data = require("./data.json"); ``` in production build since 5.107.1 this exports empty object. ### Link to Minimal Reproduction and step to reproduce [link] ### Expected Behavior exported variable has the contents of the JSON file ### Actual Behavior empty object exported. ### Environment ```shell System: OS: Windows 11 10.0.26200 Binaries: Node: 24.11.1 Yarn: 1.22.22 Packages: webpack: 5.107.2 => 5.107.2 webpack-cli: ^7.0.2 => 7.0.2 ``` ### Is this a regression? Yes (please specify version below) ### Last Working Version…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-10347 · How is this AMD implementation broken?
- **Principles**: P-D4, P-F1, P-F5 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I have a very basic webpack config file. My entry file is simple, like so: ``` js var $ = require("jquery"); require("jquery-mousewheel")($) ``` While this compiles, it throws an error in the browser (`Uncaught TypeError: __webpack_require__(...) is not a function`). This is fixed by disabling AMD like so: ``` js var $ = require("jquery"); require("imports?define=>false!jquery-mousewheel")($) ``` My question is: what is broken about [jquery-mousewheel's AMD implementation]([link]) that necessitates this fix? It seems to be the basic paradigm for AMD. I can't solve my issue with…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10351 · NodeEnvironmentPlugin does not purge filesystem for watch-runs
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I'm seeing an issue with Webpack where it cannot find a module from `node_modules` after an `npm install` while running in watch mode. While it seems appropriate that this can temporarily occur while performing the `npm install`, it seems Webpack does not recover from this and still considers the module 'not found' during subsequent compilations, even after the `npm install` has completely finished. I can try to create a reproduction case for this issue, but I'm still trying to pinpoint what exactly goes wrong and how Webpack is supposed to work in such cases. My suspicion goes to the input…

### CASE-10353 · `ModernModuleLibraryPlugin` attempts undefined access when handling any module that is not `ConcatenatedModule`
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report `ModernModuleLibraryPlugin.renderStartup` assumes that every input module is `ConcatenatedModule`, which is not guaranteed. This will error compilation when any output file represents a single chunk and a single input module. This is quite likely if there are any: - shared chunks - workers - dynamic imports - imports with top-level async ## What is the current behavior? the meta `exportsFinalName` is only created…

### CASE-10398 · `DefinePlugin` does not work if `loader` modifies the code
- **Principles**: P-G4, P-E3 · **Env**: opera
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: Pre-determined plugin/loader order causes bugs in my application: 1. I have a custom `babel` plugin which modifies code. 2. This causes `DefinePlugin` to fail because it seems to operate on `babel` output, not input, code. It thus cannot recognize what to replace in the code. How can I tell `DefinePlugin` to run before `babel-loader`? I don't see any configuration option for that. Not sure, if that is an oversight, or if there is a way to fix this at all? I setup a repository that illustrates the issue: [link] PS: I am not sure if this a bug or a feature request or something else.

