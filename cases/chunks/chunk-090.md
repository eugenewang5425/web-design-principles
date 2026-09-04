# Case Chunk 090 — Round 90

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9901 · Module parse failed Need appro
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: react, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I'm not sure if I am at the right place to report this bug Please look into it and guide me. I am using react-mapbox package that loads it's css file from node_modules and it gives me error on while running dev server and while running build as well. **Error while webpack build?** `ERROR in ./node_modules/mapbox-gl/dist/mapbox-gl.css 2:0 Module parse failed: Unexpected token (2:0) You may need an appropriate loader to handle this file type. | /* stylelint-disable */ > .mapboxgl-map { | font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif; | overflow: hidden; @…

### CASE-9902 · Stackoverflow in terser plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` ERROR in main.js from Terser RangeError: Maximum call stack size exceeded ``` **If the current behavior is a bug, please provide the steps to reproduce.** ``` git clone [link] cd…

### CASE-9903 · Duplicate code when bundling the same module for an entry point as sync and async dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We are upgrading a giant codebase from Webpack 3 to 4 and are blocked on one issue. We…

### CASE-9904 · It takes 10 minutes to pack a 20M bag.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It takes 10 minutes to pack a 20M bag. Execution node --max_old_space_size=4096 node_modules/webpack/bin/webpack.js "--config" "[build tool].prod.js" "--profile" **If the current behavior is a bug,…

### CASE-9905 · Issue with Bootstrap reset css
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: bootstrap, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bootstrap css reset is not being built correctly. The file node_modules/bootstrap/dist/css/bootstrap.css contains this css: ``` *, *::before, *::after { box-sizing: border-box; } ``` In my build…

### CASE-9906 · HMR don't detect change made with fs.writeFile from nodejs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When a nodejs script is writing code in the "src" folder watched by HMR, the change detection are unstable. Sometime it get detected, sometime not. **If the current behavior is a bug, please provide…

### CASE-9907 · Critical dependency error when use react-loadable
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In the code splite, `react-loadable is used`. For reuse, I encapsulate the `Loadable` function and return a loadable component through the path of the incoming component, but this causes an error…

### CASE-9908 · Webpack 4 does not process css files from node_modules in production mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> DISCLAIMER: this issue is a duplicate of [ref]. The original issue was closed without (as I can see) any strong reason. I asked to reopen the original issue, but, unfortunately, did not hear back. This bug is stopping us from…

### CASE-9909 · Better error message when resolveLoader alias not found
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If I have some webpack config that wants to alias references to a "i18n" loader to another…

### CASE-9910 · ProgressPlugin output artifacts with multi-configs on v4.25.0+
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using multiple configs with the ProgressPlugin since v4.25.0, an artifact is left after 10% and a new progress starts. ![screen shot 2018-11-12 at 9 55 42 am]([link]) **If the current behavior…

### CASE-9911 · webpackPreload does not work for the async chunks generated in the initial chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When an async chunk is flagged with `webpackPreload: true` in the initial chunk it is not preloaded. **If the current behavior is a bug, please provide the steps to reproduce.** `src/index.js`…

### CASE-9912 · Dynamic Import from external URL will throw `Module not found` error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic Import from external URL will throw `Module not found` error **If the current behavior is a bug, please provide the steps to reproduce.** ```javascript // webpack.config.js const path =…

### CASE-9913 · Class name mangled with default settings
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack is mangling class names. ```javascript export class Test { constructor() { this.test = 1; } } // importing somewhere else Test.name; // should be "Test", but is instead some mangled…

### CASE-9914 · bail not work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack --config webpack.config --bail when error occured webpack don't exit and i debuged the case and found maybe is here a bug in NormalModule? ` // if we have an error mark module as failed and…

### CASE-9915 · [contenthash] not working for .js files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When adding `[contenthash]` to `.js` files, webpack doesnt compile the `contenthash` correctly and outputs `js/main.[contenthash].js`. But when doing the same to `.css` files, the output is correct:…

### CASE-9916 · ProfilingPlugin unhandled Promise rejection "Session is not connected" on rebuild
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> When running the ProfilnigPlugin and then updating a file to trigger a rebuild, I noticed an unhandled Promise rejection. I added this code to get a stack trace: ```js process.on('unhandledRejection', (unhandledRejectionError) => {…

### CASE-9917 · Using optimization.namedModules will expose internal paths and filenames in output bundle(s)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `optimization.namedModules`, internal, and potentially sensitive paths and filenames are exposed in the output bundle(s). I am torn as to if I should report this as a bug, or suggest a…

### CASE-9918 · Every entry point has their own module cache (webpack 4) instead of a shared module cache (webpack 3)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When loading 2 entry points on the same page that share a common module, the module is instantiated twice, even when it's bundled into the commons bundle. We ran into this while upgrading…

### CASE-9919 · wasm: element segment with get_global as offset refering to an imported global
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The module: ```wat (module (global (import "spectest" "global_i32") i32) (table 1000 anyfunc) (func $f) (elem (get_global 0) $f) ) ``` will be transformed to: ```wat (module (global (mut i32) (i32.const…

### CASE-9921 · Can't name a variable "module" when devtool is "source-map"
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Having a variable/const declaration with name "module" in an ES6 module causes a runtime error because of a conflicting webpack helper variable. **If the current behavior is a bug, please provide the…

### CASE-9922 · Duplicate files in developer tools when using eval source maps
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using any `devtool` strategy that uses `eval`, such as `cheap-module-eval-source-map`,…

### CASE-9923 · webpack.HashedModuleIdsPlugin cause iOS uiwebview crash
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: ios, webpack, webview
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> [email] **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When use the `webpack.HashedModuleIdsPlugin` to build the project, our monitor recorded…

### CASE-9924 · babel-polyfill not shimming Array.prototype.includes
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Looks like a bug to me. I've tried StackOverflow but didn't get an answer. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In Internet Explorer 11…

### CASE-9925 · About CSS entrypoint and HTML entrypoint
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** BUG <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ` Entrypoint undefined = index.html` and ` Entrypoint undefined =…

### CASE-9926 · Bug with module.exports.__esModule on older browsers
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: firefox, chrome, safari, android, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug / Bugfix <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In old versions of Firefox, Chrome, Safari and Android Browser (afaik), the line…

### CASE-9927 · Combination of devtool: 'source-map' and library: ['Foo', '[name]'] throws error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬8 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With the following configuration, webpack throws the following error ```js module.exports = {…

### CASE-9928 · Output is wrong when using "runtimeChunk: 'single'" and "output.chunkFilename"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍20 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If I have the `output.chunkFilename` and `optimization.runtimeChunk: 'single'` set,…

### CASE-9929 · Import with wildcard not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Importing several files via wildcard is not working. No matter if I use ES6 native `import…

### CASE-9930 · Link to legacy Webpack 1 docs for people stuck in legacy land
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I google for a problem in a legacy webpack 1 setup, I might end up on pages like this:…

### CASE-9931 · (feature) load the same file with different rule sets without inline loaders
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** you need to use `import Styles from 'style-loader!css-loader?modules!./styles.css';` ~~**If…

### CASE-9932 · [4.0] `module.hot` is replaced by `false` on development
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As title **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9933 · Not able to use a jQuery plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack, angular
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi I'm using Angular 4 template +Asp core form VS 2017 and webpack and I'm not able to use a jQuery…

### CASE-9934 · ionic build takes long on webpack > 3.6.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I want to report a Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If using webpack that is higher than 3.6.0 than my Ionic Build is taking…

### CASE-9936 · Version 3.8.0 configuration problems.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Bug** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I am running Laravel app and using webpack. It fails to run after updating to version 3.8.0. Previous version 3.7.1 had no problems. Error: `cross-env NODE_ENV=development…

### CASE-9937 · Importing thousand svgs with a dynamic import expression causes a Javascript Heap out of memory
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I request a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack throws an exception, as soon as it reads the dynamic import statement. The…

### CASE-9939 · Help bundling Kendo UI ASP.NET library
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug? Maybe? <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** An error to the console that states that "jQuery is not defined" when using the Razor…

### CASE-9940 · Source maps will not be generated when run the " webpack -p" command.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** > Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With nothing to be changed, run the command `webpack ` or `webpack -p`，I get source maps only…

### CASE-9941 · Allow falsy values in plugins array
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** passing `undefined`, `null`, or `false` in a plugins array results in the following error:…

### CASE-9942 · Warn user about duplicate plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Seems a lot of issues are created from users unaware that some CLI flags are merely…

### CASE-9943 · "webpack#ajv" not installed after update to webpack 3.1.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `yarn check` results in the following error: ``` error "ajv" is wrong version:…

### CASE-9944 · Missing module at 1st build, present at consecutive build only from webpack@user
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Having this error when updating from webpack@user to webpack@user on a dynamic css load ```…

### CASE-9946 · DefinePlugin not working with destructure of multiple env vars
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using `const { a, b } = process.env` results in a client-side exception, where both variables…

### CASE-9947 · Able to track file removal in `watch-run`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It's not possible to get removed files using current `watching.getTimes()` API. <!-- A…

### CASE-9948 · webpack 2.5.1 can't use async CommonsChunkPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍20 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **webpack 2.5.1 can't use async CommonsChunkPlugin** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** use async CommonsChunkPlugin ``` new webpack.optimize.CommonsChunkPlugin({ async: 'used-twice',…

### CASE-9949 · Runtime Missing module error from UglifyJS plugin.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍7 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a Typescript project that I'm trying to bundle with Webpack, but I keep getting a…

### CASE-9951 · configuration.output.filename: A relative path is expected
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When trying to run my webpack configuration, getting the following error in the console: ``` configuration.output.filename: A relative path is expected. However the provided value "/js/[name].js" is an absolute path! Please use output.path to specify absolute path and output.filename for the file name. ``` **If the current behavior is a bug, please provide the steps to reproduce.** This is my webpack…

### CASE-9952 · DllPlugin: support entrypoint in DLL bundles
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** DllPlugin currently only works on `library` bundles, not entry bundles. That is, it is…

### CASE-9953 · Add a loader option to exclude/include files in a module's dependency tree
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Request a feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9955 · webpack recieves hot update and does nothing
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: I'll buy you a beer if you can help me figure this out. I've been trying to debug this for nine or ten hours and it's driving me nuts. <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be…

### CASE-9957 · Wrong Arguments for style-loader when loading from browser
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I use webpack 2.2 to build my project, while build is successed but the browser failed to load…

### CASE-9958 · No build file being outputted when using webpack. I am not using webpack dev server, I am creating the build by running a script --> npm run build. Anyone have an idea what might be going on?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![screen shot 2017-01-17 at 12 17 25 am]([link]) **If the current behavior is a bug, please provide…

### CASE-9959 · utf8 issue upon updating from 2.2.0-rc.3 to 2.2.0-rc.4 or later
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Starting with rc.4 or later, I get this error: ``` > ./node_modules/webpack/bin/webpack.js…

### CASE-9960 · CommonsChunkPlugin does not move shared class
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ### Class hierarchy ``` Main (entry, common chunk) / \ ClassA ClassB \ \ \ ClassC \ /…

### CASE-9962 · __webpack_require__.i(...) is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, bootstrap
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> **What is the current behavior?** The following exception is thrown when launching the script client side ``` Uncaught TypeError: __webpack_require__.i(...) is not a function at Object../src/client/entries/start.js (:8000/js/webpack:/src/client/entries/start.js:17) at __webpack_require__ (:8000/js/webpack:/webpack/bootstrap…

### CASE-9963 · Chunkhash changes in every build even there is no change at all.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> *bug* **What is the current behavior?** As the title **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub gist. --> [link] [link] **What is the expected behavior?** The two commits are both built with Travis CI, [link] I just `restart…

### CASE-9966 · mongoose.connect undefined is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I got exactly same issue as the question on the stack overflow here: [link] also I got mongoose.model as undefined . but the same code works fine without webpack. I want to confirm this is a issue of webpack or mongoose, I use latest version mongoose 4.1.11

### CASE-9968 · module federation bug with host in React 19 and remote in React 18
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using module federation plugin, if host is using React 19 and remote is using React 18, host fails to load with below error in console: react-jsx-runtime.development.js:328…

### CASE-9969 · DLL with chunks have its module init code replaced by reference to dll (loaded by other chunks in main)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I use DLL to share code among many separate page bundles. This vendor DLL and page bundles have chunks (created because the explicit use of `import()`) When a dynamically-linked module is referenced from a chunk of page bundle but the module have not yet been instantiated. Loading the chunk would fail with an error. <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link]…

### CASE-9970 · Output chunks change when build stays the same
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report The original issue was reported here [link] but I have a strong suspicion that the issue is with webpack and not with nextjs. <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** when none of the source files change, webpack creates…

### CASE-9971 · `library.type module` and `optimization.runtimeChunk single` will nest `export` inside `__webpack_require__` callback
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `library.type module` and `optimization.runtimeChunk single` will nest `export` inside `__webpack_require__` callback **If the current behavior is a bug, please provide the steps to…

### CASE-9972 · externalsType.promise are not awaited in bundled dependencies
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Externals of type 'promise' are passed as promise (not as awaited value) to bundled amd type dependencies. **If the current behavior is a bug, please provide the steps to…

### CASE-9973 · Using multiple entry files does not work with HMR - hotUpdateGlobal
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When the config has multiple entries, and these entries are loaded in the same page, HMR doesn't work properly and it throws an error like this ![image]([link]) The first file…

### CASE-9974 · Stats object; assets; related - type mismatch
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The stats object produced by setting the CLI flag `--json=compilation-stats.json` has a mismatch between the returned value and the type definition _if_ there are no entries for the…

### CASE-9976 · Default-importing UMD module in ESM file didn't take `default` named export from UMD module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Suppose we are consuming a library published with UMD module (actually it's a Webpack-bundled UMD library module) that exports the following members * `HighchartsReact`: a React…

### CASE-9977 · ProfilingPlugin not rendering in Chrome
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍5 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm getting an error when using the ProfilingPlugin. I get an error reporting that `n.args.data.frames is not iterable` when dropping the events.json into Chrome. **If the current behavior is a bug,…

### CASE-9978 · some bug of realcontenthash plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** some string (which matched old file hash) will be replace in realContentHashPlugin. (ps. 'old hash' means the content hash before dealing with realContentHashPlugin) **If the current behavior is a…

### CASE-9979 · Target: electron-preload outputs non-working js
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting the `target` in webpack to e.g. `electron22.0-preload`, the generated js includes webpack boilerplate code that uses `__dirname`, however `__dirname` is no longer available in electron…

### CASE-9980 · HMR load chunk fail if disable chunk filename hash.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR load chunk fail if disable chunk filename hash. **If the current behavior is a bug, please provide the steps to reproduce.** 1. add `webpack.config.js` at [link]…

### CASE-9981 · types.d.ts is invalid in 5.75
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `types.d.ts` is valid prior to version 5.75, but in 5.75 it becomes invalid. **If the current behavior is a bug, please provide the steps to reproduce.** Using 5.75, it's not possible to compile…

### CASE-9982 · incorrect "unused pure expression or super"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Code like this, ```js let _Foo; class Foo { static #_ = [_init_foo, _initProto, _Foo, _initClass2] = _applyDecs(this, [[signal, 3, "lorem"], [signal, 0, "foo"]], [reactive]); foo =…

### CASE-9983 · ModuleFederationPlugin not generate remoteEntry.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** My purpose is the building assets with only 1 js file, which is `remoteEntry.js`.Here is my configuration: ```js const HtmlWebpackPlugin = require("html-webpack-plugin"); const {…

### CASE-9984 · webpackMode: "weak" is fail, When module is in node_modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `webpackMode: "weak"` faile, when module is in `node_modules` **If the current behavior is a bug, please provide the steps to reproduce.** [link] <!-- A great way to do this is to provide your…

### CASE-9985 · lazy-compilation first request style-loader add style error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** when the first request, only add one(the very last one import css/less file) to the html, cause the page style error <!-- example --> **example** index.jsx(entry): import 'styles/my.less'; import…

### CASE-9986 · How do I migrate file-loader with postTransformPublicPath to asset?
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> We currently apply the following file-loader configuration: ```js { test: imageFileExtensions, loader: "file-loader", options: { name: "[path][name].[ext]", outputPath: url => getRelativeImagePath(url), publicPath: url => getRelativeImagePath(url), postTransformPublicPath: p => `__webpack_public_path__ + ${p}` } } ``` According to the docs, migrating…

### CASE-9987 · AMD w/ define() doesn't work in a particular case (create-react-app based app; webpack; babel)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a .js file which uses AMD using the `define()` method. **IF** the file contains a particular JS warning (i.e. "no-dupe-keys" == an object with duplicate keys such as `{ a: 6, a: 6 }`)…

### CASE-9988 · In some cases, webpack is generating source maps that are not consumed by the node with --enable-source-maps flag
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behaviour?** In some cases, Webpack is generating invalid source maps which cannot be consumed by node in `--enable-source-maps` mode. I've observed that when the project contains for example an [ajv]([link])…

### CASE-9989 · Value `assign-properties` of `output.library.type` not working with `export default class`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The library type `assign-properties` uses a loop to assign the exports. This works correctly when an object is exported, but not when a function is exported. This is what `assign-properties` has…

### CASE-9990 · Treeshaking failing to remove an export that's only dynamically imported
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I found a bug with treeshaking, and will link to [this repo]([link]) to explain it. The `RxFunctionList` file defines 2 named exported variables - [one small]([link]) (a graphQL fragment) and [one…

### CASE-9991 · @user/[email] dependency doesn't exist but is present in yarn.lock
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: webpack-5/dependencies
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack has a direct dependency to a nonexistent package (@user/[email]) **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your…

### CASE-9992 · HMR does not work when page require output bundles from multiple entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR does not work when page require output bundles from multiple entries in webpack 5. But it works in webpack 4. **If the current behavior is a bug, please provide the steps to reproduce.** [link]…

### CASE-9994 · sometimes all files that should be passed are not passed to loaders
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a `ts / js / tsx / jsx` loader like this: ```js module: { rules: [ { test: /\.[jt]sx?$/, include: [/src/], exclude: [/node_modules/, /server/], use: [ { loader: 'babel-loader', // ... }, }, {…

### CASE-9995 · Error: "block.getRootBlock is not a function" in webpack 5.60.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running a build with module federation yields the following error: ``` UnhandledPromiseRejectionWarning: TypeError: block.getRootBlock is not a function at getBlockModules…

### CASE-9996 · Wrong compression
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack incorrectly removed {}, causing the "this" environment to fail **If the current behavior is a bug, please provide the steps to reproduce.** src: `data = ({ f: func, data: data }).f();` dist:…

### CASE-9997 · NPE in FileSystemInfo
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ~~Null pointer error~~ Error due to null object in `FileSystemInfo.getContextTimestamp` **If the current behavior is a bug, please provide the steps to reproduce.** Call…

### CASE-9998 · Invalid warning on Windows: reported dependencies need to be absolute paths.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: windows, webpack, electron
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When importing "electron" on windows, the following warning is displayed: ``` Invalid dependencies have been reported by plugins or loaders for this module. All reported dependencies need to be…

### CASE-9999 · throw an Error with type: 'asset', parser.dataUrlCondition.maxSize
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I got an `TypeError: Cannot read property 'get' of undefined` when rebuild with config `type: 'asset', parser.dataUrlCondition.maxSize=1000` **If the current behavior is a bug, please provide the…

### CASE-10000 · LimitChunkCountPlugin breaks projects that use WASM imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When LimitChunkCountPlugin is used with max chunks set to 1, projects that use WASM modules break. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Clone [link] 2. Run…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9920 · compiled bundle moduleId is null
- **Principles**: P-F4 · **Env**: vue, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: # Bug report **What is the current behavior?** my problem happens on vue ssr project。by config webpack，new webpack instance and start by webpack-dev-server，the output dectory bundle.js，in this js file，moduleId is null **If the current behavior is a bug, please provide the steps to reproduce.** 1、normal webpack config 2、new webpack instance 3、instacnce watch 4、the output bundle ， moduleId is null this is the output code，like this： /***/ null: /***/ (function(module, exports, __webpack_require__) { /***/ }), **What is the expected behavior?** module have right moduleId **Other relevant…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-9935 · uglify not working
- **Principles**: P-C1, P-C2, P-C3 · **Env**: webpack
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: Hi, Can you have a look at this issue: [link] on npm run build I get an error npm run dev and npm run watch work fine. ``` ERROR in bundle.js from UglifyJs Unexpected token: punc (() [bundle.js:20892,36] ``` I use the following webpack setup: package.json: ```json { "name": "ss-webpack", "version": "1.0.0", "description": "A silverstripe theme setup using webpack to bundle assets and provide a front end build system. ", "main": "index.js", "scripts": { "watch": "NODE_ENV=development webpack-dashboard -- webpack-dev-server", "dev": "NODE_ENV=development webpack", "build": "NODE_ENV=production…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9938 · Better control of bundling and de-duping dependencies shared across entry points
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature to keep Shell and main Bundle free of unnecessary dependencies when CommonsChunkPlugin plugin is used with multiple entry points. Consider an SPA PRPL Pattern (Shell+lazy loaded bundled routes): ![image]([link]) With 3 entry points (my-app.html, list-view.html and detail-view.html) and…

### CASE-9964 · Hot module replace dont work in this simple project
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** **Video showing the problem** [link] **Webpack version:** 2.0.15 beta **Please tell us about your environment:** OSX 10.12.1 **Current behavior:** Webpack shows on console that it is reloading, but it dont replace the new content on the HTML. **Expected/desired behavior:** On change HTML file, the HMR need change the HTML on browser * **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem along with a gist/jsbin of your webpack configuration.** Copy and paste this lines on terminal/console: > git…

### CASE-9993 · assetModuleFilename doesn't affect chunkhash of final javascript file
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** Changing `assetModuleFilename` in configuration doesn't change `chunkhash` of files using `import`ed images. this can lead to various caching problems (browser, procies, cdn etc) **If the current behavior is a bug, please provide the steps to reproduce.** you can find an example here [link] webpack config: ```javascript { mode: 'development', entry: './src/index.js', output: { filename: '[name].[chunkhash].js', path: path.resolve(__dirname, 'dist'), assetModuleFilename: 'img/[name]-[hash][ext]', }, module: { rules: [ { test: /\.(png|jpg|gif)$/i,…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9945 · import module doesn't work for union types
- **Principles**: P-G4, P-E3 · **Env**: typescript, webpack
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Hello everyone, I'm not sure bug it is. I have following code that is compiled ok by typescript and webpack ```typescript import { Component, Input } from "@user/core"; import { ProcessPlanning } from "./processplanning"; @user({ selector: 'processplanning', templateUrl: "/processplanning.component.html" }) export class ProcessPlanningComponent { @user() model: ProcessPlanning | null = null; } ``` but there is runtime error: ``` Uncaught ReferenceError: processplanning_1 is not defined ``` in bundled js ```javascript __decorate([ core_1.Input(), __metadata("design:type",…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9950 · heavy memory usage when generating sourcemaps
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍9 💬8 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Heavy memory usage when generating sourcemaps resulting in lots of garbage collection, resulting in slow builds. **If the current behavior is a bug, please provide the steps to reproduce.** Run a larger webpack build and profile it using the chrome dev…

### CASE-9961 · Both docs and behavior for webpack.LoaderOptionsPlugin are wrong
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: *bug* **What is the current behavior?** webpack.LoaderOptionsPlugin doesn't pass options to sass-loader While in need for customised sass loadpath and separate css fiile output I've spent some time configuring bleeding edge Webpack 2 with bleeding edge sass-loader (: Good news is that old-school approach works: **If the current behavior is a bug, please provide the steps to reproduce.** ```js // this passing nothing new webpack.LoaderOptionsPlugin({ sassLoader: { includePaths: [ path.resolve('./node_modules') ] } }) // this passing undefined new webpack.LoaderOptionsPlugin({ options: {…

### CASE-9965 · make devtool: "source-map" fast by producing concatenated sourcemaps
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, windows, webpack
- **Signals**: 👍6 💬8 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** (this could be seen as a bug or a feature) **Webpack version:** 1.10.x/2.x **Please tell us about your environment:** OSX 10.x / Linux / Windows 10 **Current behavior:** Lots of people are currently being forced to use devtool: "source-map", the most expensive sourcemap option, because of a bug in chrome. For example, see: [ref]. This makes the incremental build quite slow :(. According to the [source maps revision 3 spec]([link]), there is a "concatenated" version of sourcemaps: > To support concatenating generated code and other common post processing, an…

### CASE-9967 · Error around nested `__webpack_require__`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 144, windows, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Bug Description Hi there! Since `5.103.0`, I'm getting the following error: ``` Chrome 144.0.0.0 (Windows 10) ERROR Uncaught TypeError: __webpack_modules__[moduleId] is not a function at webpack://my-little-project/./node_modules/@user/expect-utils/build/index.js?:692:41 TypeError: __webpack_modules__[moduleId] is not a function at __nested_webpack_require_24761__ (webpack://my-little-project/./node_modules/@user/expect-utils/build/index.js?:692:41) at ./src/utils.ts (webpack://my-little-project/./node_modules/@user/expect-utils/build/index.js?:321:16) at __nested_webpack_require_24761__…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9954 · Webpack behaves weird with npm config arguments.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: status: stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** When running Webpack cli with an npm config argument, it will try to parse (and fail, cause the new "strict" mode about env variables). **If the current behavior is a bug, please provide the steps to reproduce.** Using a `package.json` file that uses config properties and arguments. ```json { "name": "test-package", "config": { "mode": "development" }, "scripts": { "build": "webpack --progress --profile", "build:prod": "webpack --progress --profile --bail --test-package:mode=\"production\"",…

### CASE-9975 · Webpack 4.x will remove useful variable at some condition
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: # Bug report **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** install a umd format package, like `pack-sdk`. This package content is ```ts (function (global, factory) { typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AgoraRTCShared = {})); })(this, (function (exports) { 'use strict'; function packSDK() { const sdk = () =>…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9956 · Webpack 2 native support to es6 modules not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I have mentioned `['es2015', { 'modules': false }]` instead of `es2015` as the babel preset after checking out this popular github issue [link] tool].js.org[ref] the babel loader is not including `transform-es2015-modules-commonjs` as it should but webpack2 is not taking responsibility of loading the es6 modules I dont have a .babelrc **EDIT:: devDependencies** ``` "autoprefixer": "^6.1.0", "babel-core": "^6.7.4", "babel-eslint": "^6.0.4", "babel-loader": "^6.2.4", "babel-plugin-add-module-exports": "^0.2.0", "babel-plugin-add-react-displayname": "0.0.3", "babel-plugin-lodash": "^3.1.4",…

