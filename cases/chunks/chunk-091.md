# Case Chunk 091 — Round 91

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10001 · Weboack 5 Module Federation error in shared
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **webpack version: 5.37.0 react version: 17.0.2 react-dom version: 17.0.2** i created project for demostation my problem -> [module_federation_test]([link]) I have two apps: 1. **host_app** is app…

### CASE-10002 · TypeError: The 'compilation' argument must be an instance of Compilation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After the migration of webpack v4.41.6 to v5.37.0 our build fail with to following stack strace: ``` An error occurred during the build: TypeError: The 'compilation' argument must be an instance of…

### CASE-10003 · Module dependencies set in buildModule hook are getting reset during the build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to modify the source of the module based on [this comment]([link]) So my code looks like this: ```js compilation.hooks.buildModule.tap('MyPlugin', (module) => { module.addDependency(new…

### CASE-10004 · Module Federation emits zero-sized files
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> When internal library added as `shared` dependency, webpack emits zero-sized files ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** Repro: 1. `git clone…

### CASE-10005 · Devtool breaks UMD exports with webpack-dev-server
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After loading my bundle `window.quickstarts = {}`. **If the current behavior is a bug, please provide the steps to reproduce.** webpack.config.js: ```js module.exports = { mode: 'development',…

### CASE-10006 · Watching error with ContextModule
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When saving changes to a file bundled in a multi-compiler mode (not sure this is relevant though), of a server side rendered React application, hydrated client side after synchronous loading of the…

### CASE-10007 · Webpack 5 Native Workers generates an unusable chunk for node targets
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using native workers with the `async-node` target generates a chunk that can't be used since it doesn't transform any of the require statements, generate any common chunks, or include the webpack…

### CASE-10008 · Pound symbol in project path breaks webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running "yarn run dev" (or "npm run dev") on a Laravel project to build JS/CSS fails when the project path contains a # pound symbol. Removing the # pound symbol from the path allows it to run with…

### CASE-10009 · Module not found: Error: Can't resolve './src'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-10010 · webpack 4.45.0 falls to build with ModuleScopePlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In webpack v4.45.0，When I build a project with ModuleScopePlugin，it throws an error：`ModuleNotFoundError: Module not found: Error: You attempted to import…

### CASE-10011 · webpack-dev-server compiles twice on startup
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It seems like that the watcher does not work correctly with inline entries like in the following webpack config: ```js module.exports = { entry: { main: "./src/index.js", inline:…

### CASE-10012 · `npm link` doesn't work between webpack 5 and webpack 4 builds
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> Gitter seems dead, I've placed questions there and nobody answers. It's just a posting questions place with no answers. <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When trying to link a library built with webpack 4 in development mode into a…

### CASE-10013 · Webpack 5 - DevTool - Some devtools does not work since upgrade
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After upgrading to webpack 5, with devtool equal to `eval-source-map` or `eval-cheap-module-source-map`, if I inpect the code generated, I have transformed code. ```…

### CASE-10014 · "Modules" reserved keyword in cacheGroup test option
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I work on an existing project with a long history. I have multiple entries and want to extract common and vendor modules in two separate bundles. I'm using two cachegroups, one for both. Modules…

### CASE-10015 · Cannot find the hash of the main bundle from runtime
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Deploying to production breaks the script as the runtime cannot find the chunk tagged by the particular hash. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-10016 · Incorrect paths in compilation.fileDependencies
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The `compilation.fileDependencies` (at a webpack plugin) contains incorrect paths, such as `/`, `/home`, etc. There is no such problem with `webpack@user`. **If the current behavior is a bug, please…

### CASE-10017 · `__webpack_require__(null)` when using manual splitChunks, concatenateModules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This might be closely related to [ref]. ``` // EXTERNAL MODULE: ./packages/path/SomeModule.ts var SomeModule = __webpack_require__(null); ``` obviously moduleId null does not work... This module is…

### CASE-10018 · WP5: Unexpected lazy element in stream
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When requiring specific libraries. I'll get a serialization error. For example, requiring this middleware inside a custom express dev server will throw the error `const xrayExpress =…

### CASE-10019 · [5.0.0] Persistent cache fails when using the "--config" attribute
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the --config attribute in the webpack command, while persistent cache is enabled then the following error is thrown: ```[webpack.cache.PackFileCacheStrategy] Caching failed for pack:…

### CASE-10020 · require.context() and export default runtime error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** if you use require.context(...) to load some modules and then you use "export default ..." then the generated code fails on runtime with the following message: `Cannot access…

### CASE-10021 · [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I created a script in node js, it works fine, but when I create a bundle with webpack and run it I receive this error: `[DEP0005] DeprecationWarning: Buffer() is deprecated due to security and…

### CASE-10022 · webpack@user watch recompiles many times after fs.writeFileSync
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** For webpack@user, running watch on a file that was just written to with fs.writeFileSync will cause many repeated compilations, even though the file remains the same between those compilations. This…

### CASE-10023 · BUG(CLI): Incorrect simpleType for watch-options-poll
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report `watch-options-poll` can accept only `number` or `boolean` values. But it's `simpleType` is defined as `string`. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [link]…

### CASE-10024 · `import()` fails at runtime under node when `output.filename` and `output.chunkFilename` have dirs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When targeting node (`target: "node"`) `import()`s will fail to work at runtime, the chunk of the imported module can not be located. This happens when there's a directory segment in…

### CASE-10025 · Webpack 5, watchOptions.ignored with a RegExp object is broken
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Passing an array including RegExp to `watchOptions.ignore` results in the following error: ``` /Users/george/Documents/marvel/mkiii/src/sites/marvel3/node_modules/glob-to-regexp/index.js:3 throw new…

### CASE-10026 · modules[moduleId].call is undefined running locally Angular Universal project with Lazy loading
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: angular, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi, I'm trying to run my project with Angular Universa locally but webpack gives an error. It is not able to load my modules. I'm using lazy loading and the module name uses hash. I think webpack is…

### CASE-10028 · ERROR TypeError: (void 0) is not a function - prod build issue
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Throwing ERROR TypeError: (void 0) is not a function in the production build. **If the current behavior is a bug, please provide the steps to reproduce.** I am working on a simple d3.js project. In…

### CASE-10029 · enforceExtension in resolve doesn't work!!!
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack.config.js ``` const path = require('path'); const { CleanWebpackPlugin } = require('clean-webpack-plugin'); module.exports = { mode: 'development', entry: './src/index.js', output: { path:…

### CASE-10030 · Compiler.hooks.done is undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```compiler.hooks.done``` is undefined. ```compiler.hooks.*``` are all undefined. ``` C:\projects\myProjectPath\node_modules\webpack-bundle-analyzer\lib\BundleAnalyzerPlugin.js:90…

### CASE-10031 · Webpack5: mod is not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Building a project in **production mode** using webpack5 results in a `mod is not defined` error at runtime. If you build with development mode, no errors will occur at runtime. In webpack4 this…

### CASE-10032 · when target=node, webpack5 splitChunk load vendor.js with incorrect path,cause 'module not found' error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, windows, webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please note that this template is not optional. Please fill out _ALL_ fields, or your issue may be closed as "invalid." Please do not delete this template. Please ask questions on StackOverflow or Gitter ([link] tool]). General questions, how-to questions, and support requests will be closed. --> - Operating System: Windows 10 - Node Version: v10.15.3 - NPM Version: v6.4.1 - webpack Version: 5.0.0-beta.11 - webpack-dev-server Version: - Browser: <!-- Please place an x, no spaces, in all [ ] that apply Please note that we are NOT accepting FEATURE requests at this time. --> - [x] This is…

### CASE-10033 · Prefetch adds crossorigin attribute for same origin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Regular script and preload requests check if the request url has the same origin as the page before adding the crossorigin attribute: [link]…

### CASE-10035 · 404 during loading chunks when using contenthash
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Splitting bundle into chunks using [contenthash] substitution in chunkFilename causes random changes in chunk name even if there were no changes to a file. Because of that some of the requested…

### CASE-10036 · module.fileDependencies undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I try to writing a incremental build plugin with official documentation and catch an error report when I run build, look like this ``` class MyPlugin { apply(compiler) {…

### CASE-10037 · splitChunks splits chunks correctly, but all of them are always injected in <head>. Use case with dynamically imported polyfills not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With the following configuration: ```ts splitChunks: { chunks: 'async', minSize: Infinity, maxSize: 0, minChunks: 1, maxAsyncRequests: 5, maxInitialRequests: 3, automaticNameDelimiter: '~', name:…

### CASE-10038 · Takes too long to exit
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I start the webpack compilation everything is fine, its fast (1388ms) and smooth BUT it takes way to long to exit and I don't know why. It seems like it does something but I can't see what it…

### CASE-10039 · Named Harmony imports are wrapped in Object(), while namespace imports are not
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using a named import (eg., `import { foo } from './bar';`), references to that import are wrapped in an Object constructor (`Object(r.foo)(parameter)`). This behavior doesn't take place for…

### CASE-10040 · Progress messages are shown on multiple lines after upgrade to 4.39.0
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After upgrading to from 4.38.0 to 4.39.0 the progress output is no longer shown on a single line but on multiple lines as visible here: ![image]([link]) In the previous version the progress output…

### CASE-10041 · CSS output is broken /******/
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am attempting to build a CSS file from a SCSS file. Seemingly at random, the output CSS file contains the correct css styles, but they are followed by a bunch of lines beginning with /******/ and…

### CASE-10042 · the second parameter of `cleverMerge` could be undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug， the second parameter of `cleverMerge` could be undefined ![image]([link]) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In [[link]]([link])，…

### CASE-10044 · how can i change rules in child compiler ?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```js // TODO: how can i add other rules or change rules for child compiler const…

### CASE-10045 · Dynamic import() only working for specific files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic Code Splitting is not working for specific files. I am using the following to code split: ```js const myPage = React.lazy(() => import(/* webpackChunkName: "myPage"…

### CASE-10046 · node_modules is found in bundle.js, you can analyse using stats
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Expecting `node_modules` to be not part of the bundle, but inseams to be I am having trouble reducing my bundle size, when built using webpack (both `development` and `production` modes) When I…

### CASE-10047 · ProfilingPlugin produces malformed JSON
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running webpack with ProfilingPlugin, the resulted JSON is malformed. To be precise, the end of file looks following: ```…

### CASE-10048 · No treeshaking when importing *
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If you destructure your imports (ie `import { something } from './nothing'`) webpack will only bundle that variable/function/whatever you imported - as expected. If you don’t destructure your…

### CASE-10049 · Server-side hot reload not working for Node 11.x
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On Node.js 11.x, server-side hot reload does not work. I tracked it down to the function `hotDownloadManifest` in `lib/node/NodeMainTemplate.runtime.js`, which is always returning undefined. It's…

### CASE-10050 · NormalModuleReplacementPlugin multiDefine error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: **What am I doing?** I'm creating a dojo based widget for my front end application and I'm using webpack to pack it all. There are some external modules that need some patches and I'm doing it manually as for now. and It works fine if I manually patch the module files. <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or…

### CASE-10051 · Cannot find module 'webpack'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, ubuntu, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running latest webpack (4.29.6) via npm under git bash / command prompt (windows 10) I receive an error ``` Error: Cannot find module 'webpack' ``` Running the same repository under Ubuntu…

### CASE-10053 · Latest webpack no longer works with rustwasm
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I just followed this tutorial: [link] However, with the latest version of webpack-dev-server the wasm module doesn't load: ``` ERROR in ../pkg/rust_wasm_test_bg.wasm Module parse failed: Unexpected…

### CASE-10054 · Dynamic import cause the bundle chunks to not get loaded properly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, angular
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> recently faced a problem that I couldn't find any example or the same issue about it. I don't know if it is a bug or a configuration issue. I explain. I have an Angular/Angularjs application which gets built by Webpack 4. I realized…

### CASE-10055 · webpack --watch ignores changes in files that only export TS interfaces
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍8 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When the only thing a Typescript file exports is an interface, changes to the interface are not seen by `webpack --watch`. **If the current behavior is a bug, please provide the steps to…

### CASE-10056 · dynamic import() loaded an unexpected url when have an sub-route (Runtime issue)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hello! I have a problem that Reate.Lazy (Using import() function ) loaded an unexpected url. I have used Reate.Lazy (Using import() function ) success when I have only main route(Using React-Router…

### CASE-10057 · ProfilingPlugin error when using outputPath
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Following the example in [link] when setting the outputPath to a folder that doesn't exist, the build fails with the following error. ``` events.js:167 throw er; // Unhandled 'error' event ^ Error:…

### CASE-10058 · Build failed in Linux because of case sensitive path name
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: linux, macos, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** While bundling a project which is written in requirejs/AMD I see that it is failing on Prod environment because on MacOS it is able to resolve the uppercase paths but it is not possible in Linux so…

### CASE-10060 · Inconsistent mainFields resolution using Webpack 4 in a monorepo
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, next.js
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In a monorepo that is wired using Lerna and Yarn workspaces, one of the packages is a Next.js app, which depends on several packages internal to the monorepo. All of the consumable packages in the monorepo are written in modern javascript, and have both a `main` field and a `module` field in their `package.json`s. [As per convention]([link]), the `main` field points…

### CASE-10062 · Path to webpack's own modules cause new bundles to be created on different machines.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have two machines. Webpack is building different bundles without the content changing. **If the current behavior is a bug, please provide the steps to reproduce.** Relative to where I build my…

### CASE-10063 · splitChunks can't split common chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report splitChunks can't split common chunk <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** the split rules: ``` optimization: { splitChunks: { cacheGroups: { commons: { test: /\.js$/, name: 'commons', chunks: 'all', minChunks: 3, minSize: 0 }, vendors:…

### CASE-10064 · Variable may not be declared after bundling
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After webpack runs, a variable may wind up being declared in a spot that never executes **If the current behavior is a bug, please provide the steps to reproduce.** Run the following js through…

### CASE-10065 · Path aliases in tsconfig.json for TypeScript-powered Webpack configuration not working properly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Imports in TypeScript-powered configuration files relying on path aliases defined in the `tsconfig.json` cannot be resolved at all. **If the current behavior is a bug, please provide the steps to…

### CASE-10066 · scss-files still in js-bundle altough extracted
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Hi, I am using sass-loader toghether with typings-for-css-modules-loader and MiniCssExtractPlugin, in order to get js-files together with corresponding css files for my multiple entries. However, in difference to webpack 3, now the…

### CASE-10067 · WebAssembly modules don't work with target electron-renderer
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Wasm files can't be imported when target is set to `electron-renderer`. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I `import()` a wasm file and target is set to `web` it works like intended, but when I change target to…

### CASE-10068 · The dependency on micromatch package should be removed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I've observed that you have a dependency on [micromatch npm package]([link]) which pulls in additional trivial packages like `nanomatch`, `is-odd`, `is-even` and `is-number`. The only place you're using this module is in the [/lib/optimize/SideEffectsFlagPlugin.js]([link]…

### CASE-10069 · webpack should use dependencies firstly but not node-libs-browser
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍1 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```js // TypeScript Code // node_modules/events (my dependencies and webpack.config target: 'web') import events from 'events'; export function f() {} ``` The bundle `events` package from…

### CASE-10070 · Plugin API: `Invalid arguments to tap` when trying to access normalModuleFactory hooks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Based on the documentation [here]([link]), I'm trying to access the `parser` instance, but I'm getting the following error: ```bash Error: Invalid arguments to tap(options: Object, fn: function) at…

### CASE-10071 · Invalid Character in boundle when JS script is UTF-8 encoded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack produces a invalid character in bundle file in development mode when the js file encoding is UTF-8 **If the current behavior is a bug, please provide the steps to reproduce.** 1. create an empty…

### CASE-10072 · CommonJS modules are not handled properly with ES6 star imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report A star import should _always_ resolve to a module object in ES6 module land. However, when importing CommonJS modules, webpack does not behave this way. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **If the current behavior is a bug, please provide the steps to reproduce.** Create…

### CASE-10074 · requiring a missing module throws a different error message than native
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> The pattern thrown by exceptions is important when attempting to ensure we catch the exception we expect to catch. **What is the current behavior?** ```javascript require('missing-module'); ``` throws: `Cannot find module…

### CASE-10076 · caching problem: delete js file or add js file, many js files's hash will change
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I use react-router to spilt chunks,but when I delete a route or add a route,almost all the…

### CASE-10077 · Webpack with Typescript: "inline-source-map" does not map Typescript correctly - wrong typescript mapping
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3 · **Env**: webpack, typescript
- **Signals**: 👍1 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Since I've migrated to webpack 4.6.0, Visual Studio breakpoints started positioning in the end…

### CASE-10078 · Feature Request: better CSS support for native Web Components
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With the extract CSS plugin (or similar ones) it is not possible to add the extracted CSS…

### CASE-10079 · Browser fails to load async chunk. References file with "chunkhash" undefined.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Browser fails to import chunk because file```chunkhash``` is ```undefined``` in…

### CASE-10080 · webpack 4 - Adding minChunks to optimization.splitChunks breaks common chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** **BUG** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When adding the `minChunks` property to `optimization.splitChunks.cacheGroups.X`, the…

### CASE-10081 · Double Compile is Needed For Hot Reload Bug?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi I am using this template: [link] and I noticed something very strange. When I load it up for…

### CASE-10082 · Add a maxSize option for splitChunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'd like to request a feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using `optimization.splitChunks`in Webpack 4, I can nicely split out…

### CASE-10083 · DLLPlugin and DLLReferencePlugin are using different modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Some dependencies doesn't split out, like `vue`, `vue-router`. I think this may due to…

### CASE-10085 · Combination of entry and common modules in one chuck
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature or bug? <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Chunk includes entry's files code, but does not execute it. **If the current…

### CASE-10086 · regression in 4.2 after "Prevent webpack from running twice at a time" merged
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬7 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **I want to report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack-dev-server --lazy is now broken **If the current behavior is a bug, please provide the steps to reproduce.** Run…

### CASE-10087 · [Feature] function values for DefinePlugin to execute rather than stringify.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** DefinePlugin stringifies values that are functions. **If the current behavior is a bug,…

### CASE-10089 · Strange webpack output.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I upgraded Webpack from 3 to 4 I'v got strange output in dev mode: ```…

### CASE-10090 · webwork can't find window on 'bootstrap'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: bootstrap, webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Request chunk from webwork and the bootstrap contain window keyword, however webwork can't…

### CASE-10091 · Source maps not created when mode is production
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬7 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using `SourceMapDevToolPlugin` to create source maps doesn't work when mode is set to…

### CASE-10092 · dynamic import code compressed though it's in dead code
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** dynamic import code compressed though it's in dead code, I use webpack.optimize.UglifyJsPlugin…

### CASE-10095 · [documentation/feature request] extending loaders
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great…

### CASE-10096 · Dynamic import react component not working with webpack3
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I try to use dynamic import to code splitting react component but i found this problem…

### CASE-10097 · document in the README where we can go to discuss in long the use of webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Can you document in the README where we can discuss in long the use of webpack? Like a…

### CASE-10098 · Allow app authors to force libraries into sideEffects: false`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature Request <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `sideEffects: false` is (or will be, in webpack 4) a library-level setting. **If…

### CASE-10099 · DllPlugin does not write manifest when used with webpack-dev-server
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬7 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently the DLL plugin (via LibManifestPlugin) [writes the manifest using…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10027 · not able to transform arrow functions while bundling js
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: # Bug report **What is the current behavior?** I can see a new feature called dependOn is added to webpack which fits in rightly for my requirement. As I moved my webpack version from 4.43.0 to 5.0.0-beta.16, for some reasons the transformation of arrow function in bundle.js is not happening. **If the current behavior is a bug, please provide the steps to reproduce.** Let me share my configurations. **Package.json** ` ``` { "name": "root", "private": true, "workspaces": [ "compositions/*" ], "dependencies": { "classnames": "^2.2.6", "core-js": "3", "react": "^16.10.2", "react-dom": "^16.10.2"…

### CASE-10034 · Webpack bundling wrong file when using custom loader
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack, typescript
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: # Bug report **What is the current behavior?** I have created a custom loader. It transforms `.proto` files into typescript that I can import and use. I've verified that the typescript is generated correctly, although the problem now is that when I open my `bundle.js` I see multiple `index.ts` files. This is a express app, so it tries to bind to port 8000 multiple times, and the application never loads (is how I found out about the issue). Typing seems to work just fine (although I haven't verified that). **If the current behavior is a bug, please provide the steps to reproduce.** Not sure…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-10043 · resolve.alias not working in ssr
- **Principles**: P-F4 · **Env**: react, webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: There's a problem for me to do SSR building, I config the `resolve.alias = { 'bar/sdk/react': dirname(join(process.cwd(), 'node_modules', 'react')) }` both in client and server webpackConfig. ```js import React from 'bar/lib/sdk/react'; // not use import React from 'react'; // bar/lib/sdk/react/index.d.ts not have index.js // the `bar` is alias `lib/sdk/react` with `bar/node_modules/react` ``` I write in the project like ```js import React from 'bar/sdk/react'; ``` output in server dist bundle is 'bar/sdk/react' not use alias '/node_modules/[email]@user' so run in server, it's crash.

### CASE-10094 · Incorrect description in "multiple-entry-points" example for webpack 4
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: help wanted
- **Excerpt**: The `multiple-entry-points` README.md says: > - `commons.js` contains: > - the module system > - chunk loading logic > - module `common.js` which is used in both pages [link] tool]/blob/master/examples/multiple-entry-points/README.md However with webpack 4, this no longer seems to be the case. In the output below, it appears the module system and chunk loading logic exist within `pageA.js` and `pageB.js`. I am unsure if the description is wrong or if the example output is wrong, but in either case there is a mismatch here. /cc @user I'd be happy to open a MR to correct this if you could…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10052 · Cannot assign to read only property 'name' of function
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: electron, react
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: **What is the current behavior?** Getting a runtime error only when running in `--target electron-renderer`. It's happening when requiring the module `react-markdown` => `unified` => `vfile`, but the error happens because it hits this area and is processing `faker`, which has a file named `name`. Assigning it here causes the error: ![image]([link]) ``` Uncaught (in promise) TypeError: Cannot assign to read only property 'name' of function 'function Require(name) { if (name === undefined) return void ParseModuleData(); var id = GetIDForModu...<omitted>... }' at AddModuleEntry…

### CASE-10059 · ERROR from UglifyJs - TypeError: Cannot read property 'name' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: # Bug report **What is the current behavior?** When building for `electron-main` target: ``` ERROR in main.prod.js from UglifyJs TypeError: Cannot read property 'name' of undefined ``` **[Full error text in this gist]([link])** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a minimal reproduction with instructions on how to reproduce --> <!-- Repositories with too many files or large `webpack.config.js` files are not suitable --> <!-- Please only add…

### CASE-10088 · Webpack produces invalid JS code
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: Using your latest version, turns out webpack is producing broken JS code [link] Chrome complains with ``` index.coffee:2 Uncaught SyntaxError: missing ) after argument list at Object../lib/jquery/index.coffee (lib.js:851) at __webpack_require__ (lib.js:710) at fn (lib.js:95) at eval (multi_jquery_goog_ext:1) at Object.1 (lib.js:1060) at __webpack_require__ (lib.js:710) at lib.js:762 at lib.js:765 ``` Tried to find this out by eliminating each option one after one but no luck. Any clues what this could be? I have this error three times for all my three entry points in development mode.

### CASE-10100 · DllReferencePlugin / DllPlugin can't work in Safari 9.1, it will throw ERROR [Can't find variable]
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari 9, safari, webpack, typescript
- **Signals**: 👍0 💬7 · closed · labels: status: stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** It's looking like a bug. **Please tell us about your environment:** Webpack version: 2.5.1 OSX 10.11.4 Safari 9.1 **(Only in safari version < 10)** Language: [all | TypeScript X.X | ES6/7 | ES5 | Dart | ...] ES6 Project Directory: _~/my-project/config/webpack.config.js ~/my-project/config/webpack.dll.config.js_ _webpack.dll.config.js_ ``` plugins: [ new webpack.DllPlugin({ path: path.join(__dirname, '../dest/[name]-manifest.json'), name: '[name]', context: path.join(__dirname, '../dest') }) ] ``` _webpack.config.js_ ``` plugins: [ new…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10061 · Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
- **Principles**: P-A3, P-H1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: # Bug report Hi, I got an error when I try to run webpack and awesome-typescript-loader (the same issue occurs with ts-loader), to package a typescript serverless function, with a dependency package named `'imagemin-jpegtran'` : - _Critical dependency: require function is used in a way in which dependencies cannot be statically extracted_ **Edit** : this error occurs because of bin-wrapper module which is using `require('import-lazy')(require);` [link] **What is the current behavior?** > WARNING in ./node_modules/bin-wrapper/index.js 5:34-41 > Critical dependency: require function is used in…

### CASE-10073 · Development mode behaviour changed between 4.6.0 and 4.7.0
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report A change in behaviour of `--mode=development` between `[email]` and `4.7.0` has been observed in my project At this point I’m unsure if this is a regression in webpack, or an issue with my config that has always existed (and 4.7.0 is now exposing the error). First, a brief description of the desired output: 1. `app.js` initial chunk containing all of my code from `/src/` (note: I’m not lazy loading, don’t @ me) 2.…

### CASE-10075 · Contenthash doesn't work with splitchunks: 'all'
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** Webpack throws a `Cannot convert undefined or null to object` error when `contenthash` is used for `output.filename` and `splitChunks.chunks: 'all' is enabled`. <img width="381" alt="screen shot 2018-05-03 at 14 33 44" src="[link]> This is the webpack.config, [link to reproducible repo]([link]): ```js output: { filename: 'app.[contenthash:8].js', chunkFilename: '[name].[contenthash:8].chunk.js', }, mode: 'production', optimization: { splitChunks: { chunks: 'all', name: 'vendors', }, }, ``` **If…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10084 · External Modules don't output correctly for 'global' type.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed · labels: status: stale/help wanted
- **Excerpt**: [link] tool]/blob/0e404b8683d79052e3a6b42743bd3061f17a5a5d/lib/ExternalModule.js#L116 Hi there, in attempting to get our server side bundles set up properly, I think I discovered a bug introduced alongside the addition of configurable global objects ([link] tool]/commit/d95f93f8cb875d4184c38ef3548aaca2f9ac8175) As of Webpack 4.4.1, this is the output I get back from the 'global' option: ```js /***/ (function(module, exports) { (function() { module.exports = global["self"]; }()); /***/ }) ``` I believe the intent of the commit was: ```js return this.getSourceForGlobalVariableExternal(request,…

### CASE-10093 · webpack@user - [name] identifier ignored in output filename
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Maybe a bug or a renamed variable? **What is the current behavior?** Migrating from @user to @user, here a simple config: ``` const path = require('path'); const webpack = require('webpack'); const config = module.exports = { entry: path.resolve('./app/index.js'), output: { path: path.resolve('./dist'), filename: '[name].js', //ignored? }, profile: true, module: { rules: [{ test: /\.(js|mjs|jsx)$/i, use: [{ loader: 'babel-loader', options: { cacheDirectory: true, }, }], }], }, }; ``` Here src/*index.js*: <== filename thus [name] should…

