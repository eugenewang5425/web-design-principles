# Case Chunk 088 — Round 88

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9701 · Conflicting ESM star re-exports should yield a SyntaxError
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬10 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If a file has conflicting star exports, the first export takes precedence, and no error is raised. In the inline example below, `"foo1"` is logged. **If the current behavior is a bug, please provide…

### CASE-9702 · Mode option always overrides NODE_ENV at compile time. Why?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Setting mode option to `none` replaces `process.env.NODE_ENV` to string `none` in the bundled source code. So in every case (none, development, production) the bundled output will not have…

### CASE-9703 · Webpack does'n lift common code up to ansector's level
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After compiling the project many bundles have common code **If the current behavior is a bug, please provide the steps to reproduce.** here is my config: ```js mode: 'production', target: 'web', cache:…

### CASE-9704 · [Documentation] Css-Bundle examples are broken in the docs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The documentation & the respective directory `/css-bundle` for the following links is broken…

### CASE-9705 · Webpack 4 breaks file-loading'ing wasm file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** wasm files which are loaded using file-loader throw an error about a parse fail. ``` Module…

### CASE-9709 · Infinite loop in Stats.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬10 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` unhandledRejection Invalid string length RangeError: Invalid string length at formatError…

### CASE-9710 · ModuleConcatenationPlugin throws on array default exports with functions
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I want to report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `webpack.optimize.ModuleConcatenationPlugin()` throws `Cannot read property…

### CASE-9711 · WebpackMissingModule generates a syntax error when preceded by new
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [WebpackMissingModule]([link] tool]/blob/master/lib/dependencies/WebpackMissingModule.js)…

### CASE-9712 · Suggesting webpack.config.json
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Not request, but suggest a feature ;-) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This suggestion is based on the following tweet from @user :…

### CASE-9714 · webpack shows distorted entries after compiling large entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Our application has ~2K modules with multiple entries. After compiling these entry points,…

### CASE-9715 · Chrome dies after trying to modify code at runtime
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With Chrome, it was possible to modify code while debugging, then save it, and the debugger…

### CASE-9716 · help-output test fails on OSX
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `$(npm bin)/mocha --grep help-output` fails ``` AssertionError: expected Array [ 'webpack…

### CASE-9717 · Webpack should avoid including file content which contains no explicitly imported modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍4 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature (I think?) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Let's say I have a component library, such as Office UI Fabric React. I export…

### CASE-9718 · webpack 3 is missing uglify v2.x dependency which breaks the build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm getting the following error: ``` ERROR in bundle-main.js from UglifyJs TypeError: Cannot…

### CASE-9719 · namedChunksPlugin + dynamic import overwrites node_modules/babel-loader/lib/index.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the namedChunksPlugin on a web application involving dynamic imports, the…

### CASE-9720 · bare string exports (webpack vs nodejs)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Strings are exported bare, so that contents are interpreted as identifiers. ``` var foo =…

### CASE-9721 · FEAT: Create a messages.json file for all kinds of messages emitted by webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'd say it's a feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, all messages (be it warnings, errors, etcetera) are hard-coded,…

### CASE-9722 · Is there a forum for webpack?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: I have tried 3 of the webpack tutorials and none of them work. Does anyone know where to get help or get better tutorials? <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is…

### CASE-9723 · `webpack --profile --json` "RangeError: Invalid string length" when outputting _huge_ JSON file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running webpack with `--profile --json` flags, and the JSON data to be output is rather…

### CASE-9724 · Manifest when using multiple vendors and commons chunks simultaneously
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I followed the example in [common-chunk-and-vendor-chunk]([link] tool]/tree/master/examples/common-chunk-and-vendor-chunk) but I'm also using multiple instances of the CommonsChunkPlugin.…

### CASE-9725 · Add Analytics tracking
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature/Enhancement <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> <!-- A great way to do this is to provide your configuration via a GitHub gist. --> <!-- Best provide a minimal…

### CASE-9726 · hyphenated names
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍8 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting any dependency with hyphenated name such as *html-minifier* or *react-dom* to…

### CASE-9727 · import() breaks SSR with react
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: react, webpack
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** a combination of import() promises, webpack dependency resolution, and SPA architectures…

### CASE-9728 · classes not tree-shaked
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I've got a module with a couple of classes and a constant. - With multiple exports: When I only…

### CASE-9731 · How could I pack each node_modules to single file with chunkhash value, then insert it's path into html
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: Hi，I Have an question, and I ask it in Stack Overflow, [link] , But I could not get the answer for so long time. And I have tries many tools, but none of them could help me. here is the tools list - [webpack-node-externals]([link]) - [[link]]([link]) - common chunk plugin I need some help. here is my question # Hi， I have a problem with webpack. How could I split dependencies and app, my dir like this ``` . ├── app //app loginc ├── node_modules // npm packages, contains react and react-dom ├── package.json └── webpack.config.js ``` I want to use webpack to pack each node_module into one js…

### CASE-9734 · [StackOverflow] Uncaught RangeError: Maximum call stack size exceeded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: ``` Uncaught RangeError: Maximum call stack size exceeded hotAddUpdateChunk @ bundle.js:736 webpackHotUpdateCallback @user.js:5 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 webpackHotUpdateCallback @ bundle.js:6 ``` What happens is that after a successful hot reload, [webpackHotUpdateCallback]([link]…

### CASE-9735 · Source Maps not Compatible with Visual Studio - Unsupported format of the sourcemap
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I was getting the following error when trying to debug TypeScript that had been bundled using webpack. ``` Unsupported format of the sourcemap ``` I provided lots of details on how I isolated the problem in a [StackOverflow answer]([link]) and a [Visual Studio Connect bug]([link]). The long and short of it though, is that the Source Maps that webpack is generating, include short segments in the mappings property at the ends of some lines (where lines are separated by semi colons). After I manually edited the source map files be removing these segments, I was able to debug TypeScript files…

### CASE-9740 · publicPath auto does not work with amd
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When libraryTarget is set to amd/umd and module has external dependencies, AutoPublicPathRuntimeModule fails do determine correct script path **If the current behavior is a bug,…

### CASE-9742 · Invalid hook call in React only when using Webpack rather than the Vite bundler
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack, vite, typescript
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When serving my Webpack + TypeScript + React project I'm getting: ```plain Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen…

### CASE-9743 · this.importModule broken in esm packages
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am using the Webpack loader API [`this.importModule`]([link]) which invokes [`vm.runInThisContext`]([link]) to execute the module code. However, as soon as the `package.json` file…

### CASE-9745 · Using resource query strings is incompatible with a package's "exports" field for defining entry points
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, you cannot use resource queries in an import for a package who has defined an `"exports"` field, because webpack thinks that the entire import path should be resolvable in the target…

### CASE-9746 · Experimental module output nests "export" inside "__webpack_require__" callback
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack, typescript, react
- **Signals**: 👍4 💬9 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When building my library (Typescript, ESM, Webpack 5, React), the output is broken due to a stray `export` line inside what appears to be a callback called `__webpack_require__`: ![image]([link])…

### CASE-9747 · Error when compiling typescript in target es2022
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Error when compiling typescript in target es2022 **If the current behavior is a bug, please provide the steps to reproduce.** tsconfig.json ``` { ... "compilerOptions" { ... "target": "ES2022", ...…

### CASE-9748 · Cannot use typescript references in webpack.config.ts without first building reference
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Cannot use typescript references in webpack.config.ts without first building references. **If the current behavior is a bug, please provide the steps to reproduce.** [link] <!-- A great way to do…

### CASE-9749 · Webpack5 ES5 Terser compression configuration is incorrect
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** > Everything that can be configured is configured, but still cannot be converted to ES5 ```js const path = require('path'); module.exports = { entry: './src/index.js', mode: 'production', target:…

### CASE-9750 · Variable instead string path into dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Hi, I really hope that you can help me... I have 5 applications that i connect them using module-federation. All of names of libraries i putted to array. Its like const arr = ["app/MyButton"]; Right now i wont to get from all my libraries all modules in the function, something like this const foo = async (arr: string[]) => { for (let i = 0; i <…

### CASE-9751 · Error: ChunkGroup.addOptions: No option merge strategy for name
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` [...]/node_modules/webpack/lib/ChunkGroup.js:117 throw new Error( ^ Error: ChunkGroup.addOptions: No option merge strategy for name at Entrypoint.addOptions…

### CASE-9752 · Images assets not display when using module federation
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm using module-federation with webpack 5. In the remote I have a png file which display when I run the remote project as stand alone but when I use the shell the image is not display. Consume the…

### CASE-9753 · With output.environment.module, packaged dependency gets incorrect reference to external dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm building a react component library, so I declare react and react-dom as `externals`. I'm using webpack to build our library as a module, with `experiments.outputModule = true`,…

### CASE-9754 · Webpack [contenthash] changes on file rename or if file is moved to another directory
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Contenthash depends on filename and target directory of source file. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Create a standard webpack config 2. Add the…

### CASE-9756 · Could not build webpack.config.ts at 5.60.0 with webpack-dev-server.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** At webpack 5.60.0, `webpack.config.ts` cannot be compiled and builded when property of `webpack-dev-server` is existed. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9757 · Bug when using `globalThis` from core-js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This code throws in IE8 with : `Object doesn't support this action` ```js (typeof globalThis !== "undefined") && (typeof globalThis.String !== "undefined") ``` **If the current behavior is a bug,…

### CASE-9758 · webpack 5 has outputed incompatible `export.default`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As we all known, `exports.default` is not compatible with ES3 syntax, and developers always use `babel` to convert it into `exports['default']`, but recently I found that Webpack 5 has incorrectly…

### CASE-9759 · Tree-shaken code shared between multiple remotes in same app broken in production mode
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When an app exposes multiple remote entrypoints, it looks like they use the same ID for modules, and so if that code is tree-shaken, then there is a race condition where if an entrypoint imports a…

### CASE-9761 · webpack5 > webpack.IgnorePlugin failure
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In the process of learning Webpack 5 ```bash > [email] build > webpack asset main.js 628 KiB [emitted] (name: main) 1 related asset runtime modules 1020 bytes 4 modules modules by path…

### CASE-9762 · Webpack 5 : Invalid chunkIds/moduleIds are generated.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using Webpack `5.37.0` (this might exist in previous versions), moduleIds which should be numerical are contain character, these incident occur randomly, So far I haven't seen any pattern or…

### CASE-9763 · Setting node.__dirname to false doesn't work with ffi-napi, ref-napi libraries with electron js
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using webpack in the electron js app I can't import native module libraries like `ffi-napi`, `ref-napi`, etc in my application. Libraries like those generally expects node's `__dirname` to set as…

### CASE-9764 · Adding parameters to federation chunk requests
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Dear webpack team, I know this is a question, but just wanted to check with you before developing my own solution or sending a PR that you may not accept :-). I made this question in stack overflow last Friday: [link] What I was thinking is to add a new feature so that users can install a runtime handler to intercept the composition of file names at…

### CASE-9765 · "One CLI for webpack must be installed" after minor update from 4.44.2 to 4.45.0/4.46.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After upgrading webpack from 4.44.2 to 4.45.0 (or 4.46.0), webpack asks to install `webpack-cli`: ```console $ yarn prod yarn run v1.22.5 $ npm run production npm WARN lifecycle The node binary used…

### CASE-9766 · Server-side rendering does not work with Module Federation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am able to build and start the host and remote servers successfully, but I get this server error when loading the page in the browser. The browser remains spinning until I stop the server. ```…

### CASE-9767 · Type misalign between webpack and webpack-sources
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> In webpack's declarations.d.ts, `Source` is ```ts export abstract class Source { size(): number; map(options?: MapOptions): Object; ``` while in `@user/webpack-sources`, it is ``` map(options?: MapOptions): RawSourceMap | null; ```…

### CASE-9768 · Error: "version" is a required argument
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** My webpack setup works fine in my local environment but fails in GCP cloudbuild with an obscure error. ``` Step [ref] - "client-built": (node:29) UnhandledPromiseRejectionWarning: Error: "version"…

### CASE-9769 · buildDependencies not working as expected.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** See pull request here [link] tool].js.org[ref] I'm `require`ing a file in webpack configuration, but change to `require`ed file doesn't invalidate the cache as per [link] Here's the related…

### CASE-9770 · optimization.splitChunks.chunks = initial will catch error but not throw an Error out !
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Both webpack4 and webpack 5 had this issue. While my program has an error ,this config will make javascript runtime block ,but none of Error had thrown. // src/index.js ``` const a = c; ``` // html…

### CASE-9771 · webpack execute and replace my umd module code during compile
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack execute and replace code like `typeof define === "function"` and `typeof module === "object"` during compile. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9772 · Unable to produce large library bundle that can be consumed by other projects.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is unable to consume library that was created from other webpack project and is built for commonjs target. It fails with "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation…

### CASE-9773 · Webpack 5 module federation: output.publicPath only works if an url
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It fails to load vendor chunks: ![image]([link]) *the files are served without the publicPath on the root on app1 but correctly on app2 - just not loaded - it would never make sense that app1 and…

### CASE-9774 · Bug in module resolution
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After upgrade to Webpack@user, in development mode with HMR, module resolution fails for indirect dependencies via webpack-bundled libraries. **If the current behavior is a bug, please provide the…

### CASE-9775 · Using `require.main === module` has unexpected behavior
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the following code in my index.js file to test whether my module is being run from the command-line, after i bundle my library with webpack, the code is always triggered. ``` if (typeof…

### CASE-9777 · webpack can incorrectly remove transitive side effects
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> It appears that there are situations in which declared side effects are not preserved, if they're coming through a module which has had its exports tree-shaken. This is best explained with an example. I [prepared a project]([link])…

### CASE-9778 · No module factory available for dependency type: ModuleHotAcceptDependency
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** ` package.json(has deleted some extra npm package) { "name": "h5_friends_editor", "version": "1.0.0",…

### CASE-9780 · ERROR: TS1149 in NodeTargetPlugins(11,10)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react, typescript
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I'm just staring to out with Webpack, trying to make a very simple React app written in TypeScript. And I cannot get the simplest examples to work properly. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the `ts-loader` plugin to…

### CASE-9781 · Webpack default minimizer produces staled sourcemap
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Built a simple project followed by this guide, [link] the generated map's `sources` field point to a staled file path **no longer existed in the file system**. Here is webpack config:…

### CASE-9782 · Unexpected end of JSON input while parsing near '...,"husky":"^3.0.2","is'
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After running `npm install` (where webpack is included in package.json) or after running `npm install webpack` (where webpack is not included in package.json), I get the following error: `npm ERR!…

### CASE-9783 · __webpack_nonce__ is not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After adding `__webpack_nonce__ = "foobar";` in my `main.js` (the entry file) the resulting index.html does not contain nonce in the script tag. I'm not sure if I'm meant to do some additional…

### CASE-9784 · High severity vulnerabilities found in set-value and mixin-deep
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Two vulnerabilities have been highlighted by [Synk]([link]) in dependencies of `[email]` **If the current behavior is a bug, please provide the steps to reproduce.** Run `synk test` on a project…

### CASE-9785 · TypeError: Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using a custom webpack config the classname should not be mangled. Right now I'm getting the console error as shown below. **If the current behavior is a bug, please provide the steps to…

### CASE-9786 · DllReferencePlugin option name has extension
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Can not get correct output (not `string`): ![スクリーンショット 2019-05-24 11 18 53]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** When `DllReferencePlugin` option name…

### CASE-9787 · Webpack crash on nodejs@user
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If use nodejs@user, webpack crash with error: ``` MacBook:~/www/$ webpack # # Fatal error in , line 0 # Check failed: U_SUCCESS(status). # # # #FailureMessage Object: 0x7ffeefbf4fc0Illegal…

### CASE-9788 · Webpack doesn't throw error or warning when the entry file mentioned is config is not found.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running webpack build through node api does not tell whether the entry file is present or not. **If the current behavior is a bug, please provide the steps to reproduce.** Try changing the entry…

### CASE-9789 · Webpack outputs invalid code when 'require' is assigned by object literal shorthand
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The way Webpack replaces `require` assigned using [object literal shorthand]([link]) is not valid syntax. Using [this config]([link]), this: ```js let x = { require } ``` is replaced with this:…

### CASE-9790 · "@user directive requires a url or quoted path"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `scss` files which either: * are imported directly into a React component (e.g. with `import "./my-component-styling.scss";`), or * use `@user "./some-other-stylesheet.scss"` in the file contents…

### CASE-9791 · unable to load a raw wasm file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I try to get the raw content of a wasm file through the raw-loader: ``` module.exports = function readWasm() { return import('raw-loader!source-map/lib/mappings.wasm'); // see [link] } ``` Then the…

### CASE-9793 · sideEffects doesn't work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `sideEffects` doesn't work. **If the current behavior is a bug, please provide the steps to reproduce.** [link] <!-- A great way to do this is to provide your configuration via a GitHub repository…

### CASE-9794 · Dynamic async import not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When you look at the minimal reproduction link you can see the Icon.vue. There I built my dynamic component, where the dynamic svgs get loaded. The svgs can only be loaded with a svg-loader. You can…

### CASE-9795 · Only vendor.css is being generated when mode is "production".
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Only vendor.css is being generated when mode is "production". **If the current behavior is a bug, please provide the steps to reproduce.** When I run Webpack in production mode, only vendor.css…

### CASE-9796 · serve property in webpack.config.js is treated as invalid
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** A _webpack.config.js_ containing a `serve` property (to configure [link]) is treated as invalid. **If the current behavior is a bug, please provide the steps to reproduce.** Use a _webpack.config.js_…

### CASE-9797 · [Webpack 4] Percentage in ProgressPlugin is NaN
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Prior to webpack 4, when running webpack-cli with `--progress` percentage was shown during the build. After upgrading to webpack 4, the percentage stopped appearing. **If the current behavior is a bug,…

### CASE-9798 · Bundle still contains all exports after sideEffects: false
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** possible bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Output bundle contains `index.js` `a.js` `b.js` `c.js` from `big-module`, and `a.js`…

### CASE-9799 · [SOLVED] Webpack: Error in window is not defined during deploy with "window" used in necessary node modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** "Error in window is not defined" in main.js file during deploy. I am not using "window" in my…

### CASE-9800 · [Webpack 4] React-router does not render any routes when I build with NODE_ENV=production
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** Hello, When I build…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-9706 · webpack 4 splitChunks duplicates the content of chunks generated with style-loader **useable** feature
- **Principles**: P-C1, P-C2, P-C3 · **Env**: webpack
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: I am currently migrating webpack.config.js from webpack 3 to webpack 4. The application uses the style-loader useable feature to load themes as follows: ``` loader = require('../styles/app.theme.' + theme + '.less'); loader(function (style) { style.use(); }); ``` It also uses the bundle-loader to load cultures as follows: ``` var loader = require('bundle-loader?name=[name]!./cultures/app.culture.' + locale + '.js'); loader(setLocale); ``` My webpack 3 configuration is: ``` var path = require('path'); var util = require('util'); var webpack = require('webpack'); var config =…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9707 · Sourcemaps not working correctly with typescript.
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: opera, chrome, firefox, typescript, webpack
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Sourcemaps does not show the source correctly, but show the transformed code. I am building with `--mode development` **If the current behavior is a bug, please provide the steps to reproduce.** [repo to reproduce]([link]) Build and trace the `console.error` **What is the expected behavior?** Sourcemaps should lead to the source files. **Please mention other relevant information such as the browser version, Node.js version, webpack version, and Operating System.** Browsers: Chrome & Firefox, others…

### CASE-9730 · An empty Array is not considered a valid entrypoint (configuration validator edge case)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** >=2.1.beta.25 **Current behavior:** Empty Array does not validate as a valid entrypoint. This used to work before validation was introduced. **Expected/desired behavior:** An empty Array should be considered valid by the configuration validator, since its contents can be filled programmatically by a plugin. **Problematic configuration**: ``` js entry: { app: [], // <-- this entrypoint will be filled programmatically by the aurelia-webpack-plugin another: ['some-package', 'some-other-package'] }, ``` **Error** ``` js Invalid configuration…

### CASE-9732 · Buffer polyfill is broken on MS Edge and Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, firefox, linux, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 1.13.1 **Please tell us about your environment:** Linux mint **Current behavior:** Depends on `node-libs-browser` version 0.5.3 which in turn uses `buffer` version 3.6.0 which has a broken implementation of `slice` on Microsoft Edge and Firefox, see [link] **Expected/desired behavior:** Bump the dependency on `node-libs-browser` to version 1.0.0. **To reproduce:** In the console on Microsoft Edge with `node-libs-browser` 0.5.3, run this: `new Buffer([1, 2, 3, 4]).slice(2, 4).length === 2` This returns `false` in Edge. **What is the expected…

### CASE-9737 · Chrome 40 doesn't recognized source map urls produced with #eval
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 40, chrome 39, chrome, webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: Hi there! Using Webpack 1.5.3 and Chrome 40 (not Chrome 39, it works properly), open a page with a javascript error and click on one of the links in the backtrace for that error. (In a file from the Webpack bundle, of course). If your experience is like mine, a new blank tab will pop up with the URL that devtools should be using to navigate to the source inside of bundle.js. when the `devtool` string in the webpack config is set to '#inline-source-map' Chrome understands the link just fine, but there have been reports of reduced accuracy in line numbers with that method, and also the filename…

### CASE-9779 · Accessing `document.currentScript` in async chunks returns null in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, webpack
- **Signals**: 👍1 💬9 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report **What is the current behavior?** If modules in an async chunk calls `document.currentScript`, the result will be `null` in Firefox while other browsers returns the expected `<script>` element. **If the current behavior is a bug, please provide the steps to reproduce.** The details of the issue is at [this repo]([link]). **What is the expected behavior?** Developers should have a way to workaround Firefox's…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9708 · webpack@user: uglify configuration [feat request]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍6 💬10 · closed
- **Excerpt**: - What is the intended way to configure uglify-es without explicitly disabling and then re-requiring uglify plugin with custom configuration? - Shouldn't be "parallel" enabled by default? Looks like a great way to improve compiling times. [link] I'm asking because unfortunately uglify-es is broken right now and I'm getting `Uncaught TypeError: Assignment to constant variable.` all over my projects I attempted to migrate from webpack@user to webpack@user. Here is a suggested fix: [link] But I don't know how to translate `uglifyjs -m -c inline=false` to webpack uglify options 🤷🏻‍♂️ If I…

### CASE-9713 · JSON loader to ES6 imports [feature request]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍9 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature: convert JSON imports to ES6 imports by default. **What is the current behavior?** ``` import { name } from 'package.json'; ``` Here you get the name variable from package.json, but since it was not converted to ES6 imports first you will not achieve tree shaking and any babel feature…

### CASE-9736 · Requiring library with multiline strings adds tabs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍1 💬10 · closed · labels: status: stale
- **Excerpt**: In my project I am requiring in a library from node_modules which contains a block of code similar to the following: ``` javascript var someVariable = 'line1\ line2\ line3\ line4'; ``` This is a valid, though not recommended, way to use multiline strings in Javascript. The issue occurs after I bundle my project with WebPack. The output looks something like this: ``` javascript .. function(module,exports,__webpack_require__){ /* other code */ var someVariable='line1 line2 line3 line4'; ... ``` Tabs are added into the multiline string. I get the same result even when I don't minify/uglify the…

### CASE-9755 · [email] can't detected and polyfilled global variable when imported npm package which package.json's `type` value is "module"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed · labels: webpack-5
- **Excerpt**: # Bug report ## Current behavior Not generated webpack runtime global code in bundled file ## Reproduce [Minimal reproducible Github repository]([link]) ### How to reproduce 1. npm i 2. node ./addGlobalModule.js 3. npm run build --workspaces 4. See packages/webpack5/dist/bundle.js ## Expected behavior genreate webpack runtime global code in bundled file ```js /******/ /* webpack/runtime/global */ /******/ (() => { /******/ __webpack_require__.g = (function() { /******/ if (typeof globalThis === 'object') return globalThis; /******/ try { /******/ return this || new Function('return this')();…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9729 · Code splitting not working for me, server-side
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: This code works: ```js // require(['./WorldMap.vue'], (SkWorldMap) => { // this.loading = false; // this.maybeWorldMap = SkWorldMap; // }); ``` This code does not: ```js if (typeof window === 'undefined') { return; } require(['./WorldMap.vue'], (SkWorldMap) => { this.loading = false; this.maybeWorldMap = SkWorldMap; }); ``` Unfortunately, I don't have a proper error right now except for "window is not defined": ``` ReferenceError: window is not defined at e.__esModule.default (__vue_ssr_bundle__:1:478) at __vue_ssr_bundle__:1:1052 at r.(anonymous function).exports (__vue_ssr_bundle__:1:146)…

### CASE-9738 · 5.106.0 regression: ReferenceError: __WEBPACK_DEFAULT_EXPORT__ is not defined in SSR/eval contexts
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍10 💬9 · closed
- **Excerpt**: ## Bug report **What is the current behavior?** After upgrading from webpack 5.105.4 to 5.106.0, server-side rendering via ExecJS produces: ``` ReferenceError: __WEBPACK_DEFAULT_EXPORT__ is not defined ``` when evaluating a server bundle that includes modules with anonymous default exports (arrow functions). The webpack compilation itself succeeds — the error occurs at **runtime** when the compiled bundle is evaluated via `eval()` (ExecJS in Ruby, used for SSR). **What is the expected behavior?** The compiled bundle should evaluate without errors, as it did in 5.105.4. **Steps to reproduce**…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9733 · question: Uncaught TypeError: __webpack_require__(...) is not a function
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: i've recently started experiencing this issue, where i will start up webpack as usual via `npm run dev`, where `dev` is defined in `package.json` as: ``` "dev": "webpack-dev-server --config [build tool].dev.config.js --progress --colors --hot --inline", ``` then i'll hit it in the browser with `localhost:8080` and everything will be fine, until... i change a file in the `app` folder and :boom: ``` Uncaught TypeError: __webpack_require__(...) is not a function ``` <img width="499" alt="screen shot 2016-01-14 at 7 42 40 pm" src="[link]> ironically i first started seeing this when i was trying…

### CASE-9744 · Add null check to avoid `TypeError: Cannot read properties of undefined (reading 'call')`
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed · labels: help wanted
- **Excerpt**: ## Feature request Note that this is not a bug report, this is a UX improvement ticket. It won't actually solve the underlying issue but it might help webpack users understand it better. **What is the expected behavior?** Occasionally webpack fails to properly load modules and it fails on this line, causing: <img src="[link] width="651"> - [link] tool][ref] And others like it: [link] tool]/issues?q=is:issue+sort%253Aupdated-desc+%2522Cannot+read+properties+of+undefined%2522+in%253Atitle+is%253Aclosed++call **What is motivation or use case for adding/changing the behavior?** The error is in…

### CASE-9776 · After each code change, the copy operation of the "copy-webpack-plugin" plug-in is executed at the same time as the recompilation operation.
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: webpack: v4.43.0 webpack-dev-server: v3.11.0 copy-webpack-plugin: v6.0.2 html-webpack-plugin v4.3.0 Windows 10 professional edition 1902 18363.900 node.js: v14.4.0 npm: v6.14.5 Describe the bug: 1、 After each code change, the copy operation of the "copy-webpack-plugin" plug-in is executed at the same time as the recompilation operation. ![image]([link]) To Reproduce: 1、The configuration of "copy-webpack-plugin" is: ![image]([link]) 2、The configuration of "html-webpack-plugin" is: ![image]([link]) 3、The configuration of "webpack" is: ![image]([link]) Expected behavior： 1、 After each code…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9739 · RealContentHashPlugin watch rebuild can keep stale runtime chunk filename hashes
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Bug report When using watch mode with `cache: { type: "memory" }`, `optimization.runtimeChunk: "single"`, and `splitChunks` forcing a named shared chunk, the second compilation can fail in `RealContentHashPlugin` after a source edit. `RealContentHashPlugin` is only where the stale reference gets detected. The stale hash appears to be baked into the runtime chunk before the changed initial chunk has been re-hashed. ### Minimal reproduction `async-entry.js` ```js import("./sync-entry.js"); ``` `sync-entry.js` ```js import "./large-shared.js"; export const syncValue = "__SYNC__";…

### CASE-9760 · Persistent caching return stale results when updating resolve.alias
- **Principles**: P-F5, P-H3 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: status: stale/webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** When changing `resolve.alias`, affected persistent cache entries are still used instead of being evited. **If the current behavior is a bug, please provide the steps to reproduce.** I'm using the filesystem cache with resolve aliases: ```js const myAliases = { "@user/MyComponent": "/dirname/OLD_COMPONENT.js", }; module.exports = { cache: { type: "filesystem", }, resolve: { alias: myAliases } } ``` Now, let's change the aliases: ```js const myAliases = { "@user/MyComponent": "/dirname/NEW_COMPONENT.js", }; module.exports = { cache: { type:…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-9741 · Incorrect handling of createRequire and require
- **Principles**: P-A5 · **Env**: webpack, typescript
- **Signals**: 👍3 💬9 · closed
- **Excerpt**: # Bug report Context: My projects use NextJs (webpack behind the scene for bundling) and Prisma (database ORM), and Prisma uses their code generator to generate the client code by project. **What is the current behavior?** Webpack couldn't bundle the TypeScript code generated by Prisma properly, specifically line 80-83 of [code]([link]) in `<generated_output>/internal/class.ts`, and cause the error below ``` TypeError: t is not a function at Object.getQueryCompilerWasmModule (.next/server/app/page.js:1:29120) ``` The current generated bundle code is ```js…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9792 · Module concatenation causes React component to lose its state
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: status: stale
- **Excerpt**: # Bug report **What is the current behavior?** When `mode` is set to 'production' and `devtool` is set to a setting that produces source-maps, React produces unexpected results. After long experimentation, I believe the behavior is caused by module concatenation. It affects one particular library, which I have included in the repo below. **If the current behavior is a bug, please provide the steps to reproduce.** See my repo here: [link] **What is the expected behavior?** The React component should only update the input field. But instead the encapsulating fieldset is updated, and key is…

