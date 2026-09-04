# Case Chunk 087 — Round 87

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9601 · Importing both JS and assets in the same entry breaks the runtime
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When the runtime is enabled, a single entry with both JS and non-JS imports will fail to load. The runtime fails with the following error when trying to locate the module: ```…

### CASE-9602 · Issue with Web Worker and Module Federation in Angular NX Project
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular, webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am running a project with NX, dynamic Module Federation, and a Web Worker. I expect that there should be no issues and that the Web Worker will function as it did previously…

### CASE-9603 · Webpack overwrites custom objects passed into resolve.unsafeCache
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, webpack
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> When upgrading from Webpack 4 to Webpack 5, we identified an issue where custom Proxy cache objects passed into `resolve.unsafeCache` are overwritten by the [`removeOperations` function]([link]…

### CASE-9605 · Unable to set target for Web Workers
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · open · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Unable to set target for Web Workers ``` new Worker(new URL('./worker.js', import.meta.url)); ``` My worker uses the package named `decode-named-character-reference`, the package…

### CASE-9607 · [webpack.cache.PackFileCacheStrategy] Restoring failed for ResolverCachePlugin. SyntaxError: Cannot use import statement outside a module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale/webpack-5
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When packing for the second time, webpack reports 'Restoring failed for ResolverCachePlugin'. e.g. <w> [webpack.cache.PackFileCacheStrategy] Restoring failed for ResolverCachePlugin|normal|dependencyType=|commonjs|path=|/Users/keboliu/vscode-shortcut/portal-h5-node/src/views/teleclinict/booking/case-info|request=|@/lib/utils.js from pack: SyntaxError: Cannot use…

### CASE-9608 · Bundler doesn't appear to tell worker where to look for bundled file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a worker which imports a local js file using the ```self.importScripts()``` syntax, however when I try to trigger it, I receive a 404 error in the browser console. The 404 due to the worker…

### CASE-9609 · npm install errors with '@user/eslint@*'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍13 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** npm install errors out on '@user/eslint@*' Not Found - GET [link] npm ERR! 404 npm ERR! 404 '@user/eslint@*' is not in the npm registry. npm ERR! 404 You should bug the author to publish it (or use…

### CASE-9610 · Module federation cannot resolve version of secondary entry points with no version
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When trying to use packages that have secondary entry points but those entry points package.jsons do not have a version in them, webpack throws warnings like: ``` shared module @user/client/core ->…

### CASE-9611 · node_modules are not excluded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: I have created a minimal file to reproduce the bug, removing extneral dependencies such as path. I have upgraded to the latest version of webpack and posted on [stackoverflow]([link]). <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** node_modules…

### CASE-9612 · IgnoreWarningsPlugin not functioning properly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, bootstrap
- **Signals**: 👍0 💬11 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The IgnoreWarningsPlugin cannot ignore the warnings I specify normally Steps to reproduce: 1. clone this repo: [link] 2. then open the project root directory 3. run `lerna bootstrap` to install…

### CASE-9613 · Make import.meta.url dynamic
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `import.meta.url` is replaced by the current file location at the build time. [link] tool]/blob/main/lib/dependencies/ImportMetaPlugin.js#L99 **If the current behavior is a bug, please provide the…

### CASE-9614 · `eval-source-map` issue with Hot Module Replacement
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** source-map does not work correctly with `devtool: eval-source-map` when app hot updating. If the hot-updated code causes runtime error, we will get something like: ``` VM3252 utils.ts:6 Uncaught…

### CASE-9616 · Webpack 5: "Module parse failed: Unexpected token" when importing JSON file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬11 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I think I have found a bug in webpack 5. I'm getting the error `Module parse failed: Unexpected token (1:13)` from webpack. It points to a `node_modules/emoji-mart/data/all.json`. `emoji-mart` is a react library that we are using [link] <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed.…

### CASE-9617 · CVE-2021-27290 due to using old version of `ssri`
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [CVE-2021-27290]([link]) > ssri 5.2.2-8.0.0, fixed in 8.0.1, processes SRIs using a regular expression which is vulnerable to a denial of service. Malicious SRIs could take an extremely long time to…

### CASE-9618 · Promise is undefined with target: ['web', 'es5'] using webworker
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** IE 11 throws a "'Promise' is undefined" exception if there is a promise or async in the code, even with `babel-loader`. This error occurs in a piece of code generated by webpack: ![image]([link])…

### CASE-9619 · Infinite rebuild loop in vagrant environment in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: macos, webpack
- **Signals**: 👍4 💬11 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using Webpack 5.11.1 (update from 4) inside a vagrant machine on macOS i have a loop of rebuild in watch mode, for example: * starting the client:watch with `npx webpack --devtool eval-source-map…

### CASE-9620 · Webpack allows unhandled promise rejection to fail silently
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We recently had a bad build deploy successfully and found that an outdated plugin was causing an unhandled promise rejection that didn't cause the build to fail. **If the current behavior is a bug,…

### CASE-9621 · MinChunkSizePlugin breaks federated modules loading
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬11 · closed · labels: status: stale/webpack-5/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When an application tries to load a remote module with a minimal chunk size defined via the Webpack `MinChunkSizePlugin`, I get this error: ``` Uncaught TypeError: Cannot read property 'call' of…

### CASE-9622 · In packages we publish with conditional exports, should .mjs files still be ES5 except for import/export statements?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Since `import` and `export` statements are not ES5, it seems tempting to use other non-ES5 features in published `.mjs` files. But all hell will break loose once Webpack is resolving `.mjs` files by default in packages with conditional exports, if packages that used to resolve to code that was compatible with legacy browsers now resolve to `.mjs`…

### CASE-9623 · Webpack 5 Watch Only Rebuilds Once, Never Again
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running `webpack --mode development --watch --progress` in Webpack 5, it builds everything fine, then goes into watch mode. Upon the **first** change of my .tsx, it then successfully rebuilds…

### CASE-9624 · [Webpack 5] Modules from internal library cannot be loaded when using mode: development (work in production)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Modules from internal library (also built with Webpack) is missing all exports and is missing from `__webpack_modules__` when building with `mode: development`. The same code works and the page is…

### CASE-9626 · Tree shaking doesn't work on second-level-deep modules /with example
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** simple webpack tree shaking setup with typescript correctly works on 1st level nested functions, but on second-level nested functions doesn't remove unused/never-called code full working example…

### CASE-9627 · chunk names are numeric instead of regular ones
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Try to use code splitting with import and "magic" comments for giving chunks meaningful names and use them in SSR, but I get numeric names instead <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** chunks have numeric identifiers **If the current…

### CASE-9628 · Uglify Webpack globals
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Is there a way to mangle/uglify Webpack globals? Option for it? Even hacky way? Few examples: `__webpack_exports__`, `moduleName__WEBPACK_IMPORTED_MODULE_0__` My bundle is extremely size-sensitive and these are **10-15% of my bundle**. [link] Really sorry about question here but I've adventured like a week in SO, gitter, etc - no answers.

### CASE-9629 · webpackIgnore prevents polyfilling of dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```js import( /* webpackIgnore: true */ '[link]) ``` should not be interpreted by webpack (which works), but it also does not get transpiled correctly using babel-loader. **If the current behavior…

### CASE-9630 · Module not found with yarn 2
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> [link] **What is the current behavior?** I'm trying to use `yarn` 2 to build an application with `webpack` and I get this error when building with both `webpack` 4 and `pnp-webpack-plugin` and `webpack` 5: ``` (node:415) UnhandledPromiseRejectionWarning: Error: Error on webpack build: ../lib/core/lib/nudash.js Module not found: Error: Something that got detected as your top-level application (because it doesn't seem to belong to any package) tried to access a package that is not declared in your dependencies…

### CASE-9631 · ERR_CONNECTION / CORS Request did not succeed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> "webpack": "^4.41.5" vue --version @user/cli 4.1.2 # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I already asked questions in vue.js forum, in stackoverflow, and in other github reports. **What is the current behavior?** **If the current behavior is a bug, please provide the…

### CASE-9632 · Dynamic import with variable + externals config not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to use a dynamic import that uses a variable, and at the same time leave all these modules as external libraries, so I'm doing this: ```import(`library/${module}.js`);``` And my Webpack…

### CASE-9633 · [object Module] instead of image links after Webpack processing
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `[object Module]` output instead of image links after processing through Webpack, e.g. - `<link rel="shortcut icon" href="[object Module]" />` - `<img src="[object Module]" alt=""/>`. **If the…

### CASE-9634 · Having many lazy chunks slows down rebuilds
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Having many lazy chunks slows down rebuilds even when they don't change. **If the current behavior is a bug, please provide the steps to reproduce.** To repro follow the steps below. No tools aside…

### CASE-9635 · npm audit fails after installing latest webpack 4.35.3
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** npm audit fails after installing latest webpack 4.35.3 **If the current behavior is a bug, please provide the steps to reproduce.** do an npm install webpack -D and then do npm audit. <!-- A great…

### CASE-9636 · Uncaught TypeError: c.querySelectorAll is not a function at MutationObserver.<anonymous>
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `Uncaught TypeError: c.querySelectorAll is not a function at MutationObserver.<anonymous> ` appears in browsers console with bundle script loaded. Current behavior started right after `npm i` today.…

### CASE-9637 · Uncaught TypeError: __webpack_require__(…).context is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I am trying to import dynamically vue components using this code: const components = require.context('./', true, '/^index\.js$/'); I am getting this error: app.js:9 Uncaught TypeError:…

### CASE-9639 · Unable to import webpack-bundled UMD library as an ES6 import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** [BUG] <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> same issue: [link] I've authored a javascript library using Webpack. The entrypoint `someClass.js` looks like this: ```js…

### CASE-9640 · requireEnsure is not included in runtime chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In certain circumstances requireEnsure function is not included in runtime chunk **If the current behavior is a bug, please provide the steps to reproduce.** Repro repo [link] 1. Run ```npm run…

### CASE-9641 · Using CSP with DLLs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the DLLPlugin there is no way to include the `__webpack_nonce__` value as described in [link] **If the current behavior is a bug, please provide the steps to reproduce.** 1. Checkout the…

### CASE-9642 · DllReferencePlugin cannot consume exposed index.js correctly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In ES6, having an index.js file in a folder lets you perform an import from the folder implicitly without specifying the index.js. **DllPlugin** correctly adds such files to **manifest.json**, but…

### CASE-9643 · FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, angular
- **Signals**: 👍4 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report? <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have just upgraded a fully working Angular 5 app to Angular 6. The v5 version of the app had an ejected Webpack config, and I know this is generally considered unsupported, but we are using…

### CASE-9644 · what's the disadvantage of namedChunks?
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> In production mode, namedChunks is default to false, so what is the disadvantage of namedChunks, I think it is necessary in production. **webpack version: 4.25.1** e.g. ## before * I have 3 entries: entry-a & entry-b & entry-c ![image]([link]) ## then * Add a new entry: aa ![image]([link]) * as chunk name is **ids** in production, after I added this…

### CASE-9645 · this transformed to undefined in webpack 4
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** module this is being replace to undefined when switching to webpack 4 from webpack 3. **If the current behavior is a bug, please provide the steps to reproduce.** thisTest.js: ``` this.hello =…

### CASE-9646 · Webpack is very very slow even with cache plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is very very slow, in webpack 3 recompile time (hot reload) was 1~3s now (webpack 4) its above 3min **If the current behavior is a bug, please provide the steps to reproduce.** its not a bug…

### CASE-9647 · Crash in uglify plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running webpack in production mode I still see it going through `devDependencies`. In my case it enters ``` node_modules/uglifyjs-webpack-plugin/node_modules/source-map/lib/source-map-consumer.js:20…

### CASE-9648 · webpack gets stuck again? in compile stage
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I run `npm run build:aot` The process is stuck in different files each time but always at 68% - 69% ` 69% building modules 1720/1726 modules 6 active …ient/node_modules/....js` The memory is used…

### CASE-9649 · webpack 4.8.1 error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, desktop
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After updating the webpack from 2.5.1 to 4.81 i start to have the error below > PS C:\Users\pc\Desktop\mmm> webpack --config .\webpack.config.js > (node:16372) DeprecationWarning: Tapable.plugin is…

### CASE-9650 · 4.8.0 install hangs on Node 6/NPM 3 on Windows
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With the 4.8.0 release of webpack, we are seeing builds timeout on our CI server (VSTS) during `npm install -g webpack`. This also happens on a local machine running the same version of node/npm. 4.7.0…

### CASE-9651 · Chrome 66 + Webpack + Node: Breakpoints don't stop the control flow
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3, P-G2 · **Env**: chrome 66, chrome, webpack
- **Signals**: 👍9 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'm reporting a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When inspecting a webpack-built bundle (running with Node) in Chrome,…

### CASE-9652 · ERROR in Entry module not found: Error: Can't resolve './src' with [email]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** it is bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This is my webpack.config.js : const browserConfig = { entry : APP_DIR +…

### CASE-9653 · Current working directory is not used when I point to webpack.config.js in sibling directory
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Request a feature, even though it migth be there already but I just don't know how to set it up. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?**…

### CASE-9654 · Bug: "DeprecationWarning: Tapable.apply is deprecated. Call apply on the plugin directly instead" for ProgressPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** I suppose it is a Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> Asks in [link] tool], [link] tool]/dev, [link] **What is the current behavior?** ``` webpack --progress 10% building modules 2/2 modules 0 active(node:18628) DeprecationWarning: Tapable.apply is deprecated. Call apply on the Hash: 31a5c2e9ae4b0e57dc59Version: webpack 4.0.1 ``` **If the current behavior is a bug, please provide the steps to reproduce.** This issue is just about deprecation warning appears when `webpack --progress`…

### CASE-9655 · await import('@user' + var); a.k.a Dynamic Third-party Namespaced Module Loading
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I request a godlike ***feature*** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [Here]([link]) the question on StackOverflow. Sadly, no one can…

### CASE-9656 · Missing querystring.unescape Node polyfill
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Trying to use `querystring.unescape` yields `TypeError: querystring.unescape is not a…

### CASE-9657 · caching problem: delete js file or add js file, many js files's hash will change
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When i follow the official documentation [link] ， I found that if I delete a js file…

### CASE-9658 · Use ModuleConcatenationPlugin generates code that raises exceptions
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This issue is related to [ref] and describes a build configuration where the use of the…

### CASE-9659 · Configuring library as external in webpack does not work like expected with UMD as libraryTarget
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍17 💬11 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I assume this could be a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I want to build my own JavaScript library and register it under an…

### CASE-9660 · Error about module.exports when not using ES import/export
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> Bug **What is the current behavior?** Getting errors about `module.exports` not being allowed, yet my code does not use any import/export syntax. Here is an example file: ```javascript const React = require('react'); class UIComponent extends React.Component { constructor(props) { super(props); } } module.exports = UIComponent; ```…

### CASE-9664 · Webpack introduces "unreachable code after return statement" warning in Firefox
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: firefox, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack replaces an unreachable `break` statement with an unreachable `{}` statement. This causes a warning in Firefox ([link]). **If the current behavior is a bug, please provide…

### CASE-9665 · Single Runtime Chunk breaks Module Federation Container init
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> [link] tool][ref] # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting runtimeChunk:single, or specifying a separate runtimeChunk. Module are not hoisted correctly. externals and `webpack/container/reference/name` modules…

### CASE-9666 · Webpack with minimize : true may inflate bundle by inlining large binary strings multiple times
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using minimize: true webpack inlines some variables. In our case it inlines WASM bytecode, which is 15 MB string. It does so 2 times, which inflates bundles size significantly.…

### CASE-9667 · Minification step of production mode breaks build if key of object is diacritic character
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The minification step of the production mode breaks the build and the code cannot be run inside the browser. Explanation (please see the reproduction repo): The `match-sorter`…

### CASE-9668 · Webpack cache is not invalidated properly after updating one dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using webpack cache, I get contaminated build after updating one of dependencies. Specifically, my project has a git dependency, after updating commit ref webpack seems to "merge" old one and…

### CASE-9669 · `compiler.watchMode` should be `true` when running `webpack-dev-server`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using a plugin while running `webpack-dev-server`, `compiler.watchMode` is `false`, yet the `watchRun` and `watchClose` hooks are active. **If the current behavior is a bug, please provide the…

### CASE-9670 · Can't create webpack module with dependOn for import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Hello. I would like to create three entry points with, on of them is shared. I'm trying to use `dependOn` entry option. When i will have been added dependOn into entry, entry format changed. Run code like this in my frontend application: ```javascript import * as X from 'module'; console.log(X); ``` And see for module [with **dependOn:**]([link]) :…

### CASE-9671 · Can't resolve node builtin modules in esm build dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```bash <w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Can't resolve 'url' in '/Users/keenwon/Test/webpack-test' <w> while resolving 'url' in…

### CASE-9672 · Issues with local CSS on mode: "production"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Some of the styles doen't get applied on `mode: "production"` **If the current behavior is a bug, please provide the steps to reproduce.** to reproduce: [webpack.config]([link])…

### CASE-9674 · Unable to resolve 'os' with ESM module dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> This bug report relates to [this] StackOverflow question and a bug report filed on the Pisma repo: [link] **What is the current behavior?** Bundling a module made using the ESM module system with a 'node' protocol import does not…

### CASE-9677 · Extra code found in the production build
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** input: [link] ![image]([link]) extra `useRef()` found in the production build ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** clone [link] ``` npm run…

### CASE-9678 · new URL() won't work as I expected upon server side rendering
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I'm not sure it's a bug or it is how it works, but let me show it first. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Generally, I want to server-side rendering a page: 1. Bundle `page.js` to `page.bundle.js` with webpack for server side…

### CASE-9679 · An unhandled error has occurred inside Forge: Cannot read property 'tapAsync' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I described the issue in gitter.im/[build tool] : ![image]([link]) ![image]([link]) ![image]([link]) And in StackOverflow: [link] But didn't solve the issue. So... I ask here, because I do not know if it's problem I can solve, but I…

### CASE-9680 · splitChunks make the global array `chunkLoadingGlobal` contain same chunk more times
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On webpack 5, The global array `self["webpackChunkxxx"]` may contain same chunk more times when using splitChunks. When using webpack 4, it runs ok. **If the current behavior is a bug, please…

### CASE-9681 · Incorrect conditional require `tslib` for forced common chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> The conditional require inside a common chunk (enforced, shared by multiple entries) incorrectly skips loading of `tslib` (not sure if it is specific to just it or more generic issue). **What is the current behavior?** ``` js //…

### CASE-9682 · Caching is not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> In the attached image, red square should be like blue square. (cached) **What is the current behavior?** GIVEN my webpack config is set up for caching with ``` output: { filename: '[name].[contenthash].js', path:…

### CASE-9683 · v5: [webpack-cli] TypeError: compiler.plugin is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Made all suggestions for v4->v5 try to run dev configuration with `webpack serve` and got the error **If the current behavior is a bug, please provide the steps to reproduce.** yes <!-- A great way…

### CASE-9684 · resolve.fallback fails for linked packages
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬10 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Configuring `resolve.fallaback` does not work for modules linked from outside the package directory that webpack is being used from. For example with the following file structure ``` root/ +- pkg-a/…

### CASE-9685 · electron/index.js bundled since [email]-beta.30
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬10 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Since version 5.0.0-beta.30, webpack bundles the `electron/index.js` file when using `require('electron')` with target `electron-main`. This causes it to fail, as that file uses `__dirname` to refer…

### CASE-9686 · Unable to build because of error with export from v. 5 beta 30
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬10 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I'm unable to compile [fluent]([link]) with new versions of webpack. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After an update to webpack 5.0.0-beta.30 or higher, I get an error during compilation: ``` ERROR in…

### CASE-9687 · Option 'bail' causes failed build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Setting option [bail]([link]) to true will break the build for unresolved modules wrapped in try...catch After setting bail to false bundle builds successfully **If the current behavior is a bug,…

### CASE-9689 · [Webpack 5] Uncaught TypeError: entry.get is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Getting this error ```javascript Uncaught TypeError: entry.get is not a function at get (main.e23b686eeb1e8d58814b.js:20685) at main.e23b686eeb1e8d58814b.js:20698 at…

### CASE-9690 · Using compilation.rebuildModule() on compiler.hooks.emit strange behaviour
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Hi everyone! I just wanted to check if the following is a normal behaviour or something else. While writing a plugin, I've tapped into `compiler.hooks.emit` and managed to collect an object with information about emitted assets (essentially paths and sizes). Then my intention was to load that object into an existing module. I’ve managed to get the…

### CASE-9691 · How do i compile node modules into a seperate file?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do…

### CASE-9692 · HotModuleReplacementPlugin throws TypeError: Cannot read property 'filter' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I set up a dev server for my private project and run it, and when I edit some file, I see the following error thrown by HotModuleReplacementPlugin and then the server exits. ```…

### CASE-9693 · a nameless vendor chunk not triggers HMR updates
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR not triggers an update when vendor chunk is nameless. **Steps to reproduce:** 1. clone [link] 2. npm i 3. npm start 4. update some key in `public/locales/en/translation.json`. It will send to…

### CASE-9694 · Webpack: ignore missing chunks at runtime initialization
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a web app which I bundle using the Webpack (using it only for bundling and generating chunks) Let's say after bundling I have the following output: `main.bundle.js`, `feature1.module.js`,…

### CASE-9695 · hash might collide with unidentical file contents when webpack config changes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If certain configs are changed, webpack produces different file output, but the calculated hash remaisn the same. This is the case at least with different source map configs: `hidden-source-map` and…

### CASE-9696 · Possible bug with tree shaking between packages
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍13 💬10 · closed
- **Excerpt**: # Bug report I have also posted this issue on stackoverflow, because I don't know for sure if it's a bug or the expected behaviour: [link] **What is the current behavior?** Tree shaking doesn't seem to be working between packages. But it works for an individual package. Before going further, I have created a minimum repro that I will explain throughout this issue: [link] **If the current behavior is a bug, please provide the steps to reproduce.** For simplicity sake, the example above just uses webpack. **Babel is not used**. Also, despite not using real dependencies between the packages in…

### CASE-9698 · Dynamic imports do no take the webpackJsonP index into account when generating their hash
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack does not take take the `webpackJsonP` index into account when generating the chunk hash for dynamic imports. **If the current behavior is a bug, please provide the steps to reproduce.** I am…

### CASE-9699 · DefinePlugin regression
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** DefinePlugin does not replace things in all situations. I encounter this issue while upgrading from webpack v3.6.0 to v4.23.1 **If the current behavior is a bug, please provide the steps to…

### CASE-9700 · Webpack Watch change/rename detection of js to jsx, css to scss or / file to folder / index. [Ext]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬10 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack Watch has not detected any changes / renamings of js in jsx, css in scss or / file in folder / index. [Ext] _ERROR in ./app/reducer/ui/setting.js Module build failed: Error: ENOENT: no such…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9604 · HookWebpackError: HMR is not implemented for module chunk format yet [webpack 5]
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍22 💬11 · closed · labels: status: stale
- **Excerpt**: # Bug report **What is the current behavior?** We're currently encountering an issue while attempting to build our webpack based projects using the target browserlist (last 10 version) configuration. The error message we're encountering is: "HMR is not implemented for module chunk format yet." Our goal is to transition our application to use ESM (ECMAScript Modules), and to achieve this, we've been working with the required ESM configuration. While we have been able to successfully build the project, this HMR-related error is causing a roadblock in our development process. Upon investigation,…

### CASE-9663 · Template strings and arrow functions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Hello! Is there any plans to support template literals and arrow functions in dynamic requires? Maybe in webpack2? For example, this doesn't work, only if replace arrow with normal function and template string with classic concatenation ``` javascript export default _.transform(langs, (result, lang) => { result[lang] = require(`./${lang}/index.js`).default; }) ``` ES6 is supported more and more, so some specific applications don't need to be compiled in ES5

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9606 · Magic Comments not working for images
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed · labels: status: stale
- **Excerpt**: I am trying to preload/prefetch an image so that I don't have to be connected to the internet at the exact moment to display the image. It's for a "you are offline" page in my app. I was reading online that the webpack magic comments feature might be able to do that. [[link]]([link]) It's not working for me. # Bug report The image that I am trying to preload/prefetch does not show and there is no `<link rel` tag added to the DOM. **If the current behavior is a bug, please provide the steps to reproduce.** Checkout the demo repository here: [[link]]([link]) **What is the expected behavior?** I…

### CASE-9615 · Inlined SVG extracted with invalid filename
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬11 · closed · labels: webpack-5/help wanted
- **Excerpt**: # Bug report **What is the current behavior?** When using `css-loader` with an SVG that is inlined the extracted SVG gets an invalid filename **If the current behavior is a bug, please provide the steps to reproduce.** 1. Use `css-loader` ```js ({ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }); ``` 2. Set `assetModuleFilename` to something ```js { assetModuleFilename: 'media/[name].[contenthash:8][ext]' } ``` 3. Have CSS with inlined SVG ```css .className { background: url(data:image/svg+xml;utf8,<svg width=%279px%27 height=%276px%27 viewBox=%270 0 9 6%27 version=%271.1%27…

### CASE-9625 · [Webpack 5] Can not use web-assembly rust impl
- **Principles**: P-A3, P-H1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report **Context** If I create a simple rust function like this one: ```rust #[wasm_bindgen] pub fn return_char() -> char { return 'a'; } ``` And then I use this method inside constructor of web-component: ```typescript constructor() { super(); this.attachShadow({ mode: 'open' }); this.shadowRoot.innerHTML = template; console.log(return_char()); } ``` This worked as expected I can see `'a'` in the console: <center><img src="[link]></center> If I create rust struct with implementation like this one: ```rust #[wasm_bindgen] pub struct Test { value: char } #[wasm_bindgen] impl Test { pub…

### CASE-9673 · module Federation init too many remote.js
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: status: stale/webpack-5
- **Excerpt**: webpack5 # Bug report when i see the code after build, i think something wrong with this: ![image]([link]) the code from __webpack_require__.I it case when init a remote container, all the container init env you use import(). when open first page. will init too many remote.js i don't know why , thanks for telling me why

### CASE-9675 · `UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'length' of null` (5.47.0)
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍9 💬10 · closed · labels: webpack-5
- **Excerpt**: # Bug report The latest version of webpack (`5.47.0`) causes our build pipeline to fail due to some missed `null` check. Our project has both the backend and frontend built and deployed as a single unit and no frontend changes were made between a backend-exclusive code change successfully merged and deployed yesterday evening and our builds (now failing) this morning. ![image]([link])

### CASE-9697 · v4.29.4 RangeError: Maximum call stack size exceeded
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍11 💬10 · closed
- **Excerpt**: # Bug report This only fails in a docker container during an npm install from my experience, but may just be a low memory failure. Does not fail locally. **What is the current behavior?** ``` npm ERR! Maximum call stack size exceeded` The command '/bin/sh -c npm install' returned a non-zero code: 1 ``` log from the docker container: ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** 1. Install docker for mac 2. create a package.json with version of `v4.29.4` 3. create a dockerfile and add latest node `node:lts-alpine` 4. assure it runs `npm install`…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9638 · [Webpack 5] chunkFilename doesn't seem to be applying?
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍4 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report When setting `output.chunkFilename: "chunk-[id].js"` alongside `output.filename: "[name]"` in ncc development, we're finding that the chunk is still being output as just the ID - `655` instead of the `chunk-655.js` form. **What is the current behavior?** `output.chunkFilename` should be supported as in the docs. **If the current behavior is a bug, please provide the steps to reproduce.** This test is currently…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9661 · Incorrect __WEBPACK_IMPORTED_MODULE_ placement
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: I have this in my bundle: ```js /* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3_simpler_redux_form__, "reducer")) __webpack_require__.d(exports, "form", function() { return __WEBPACK_IMPORTED_MODULE_3_simpler_redux_form__["reducer"]; }); /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simpler_redux_form__ = __webpack_require__(26); ``` As can be seen from this code the order of these two lines is incorrect: it should have defined the variable first and only then check the `if` condition. This is `rc.3`

### CASE-9662 · Global variable problem with `library`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍7 💬11 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** (Code below) After bundled, I import `mylib-bundle.js` by `<script>`, and I see my expected object is wrapped by a property `default`, which means I have to use something like `mylib.default.fn1` to access its properties. However, if I change `export default` in `mylib.js` to `module.exports =`, it works well. **If the current behavior is a bug, please provide the steps to reproduce.** ```javascript //…

### CASE-9676 · Migrating to Webpack 5 with Next.js 10.2 yields `Module not found: Can't resolve X` for custom env variables, and `Module not found: Can't resolve 'fs'`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack, next.js
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I'm migrating my Next.js app from 10.1.x to 10.2.x and enabled Webpack 5. But, I'm encountering a variety of Wbepack-related errors that make no sense to me and I'm stuck. Next.js webpack migration is simple if we haven't customised the Webpack behavior, but we did and we're having issues migrating by hand. > Our work is open source so we'll provide a full reproduction. **What is the current behavior?** > From…

### CASE-9688 · Dynamic Import not working with variable path
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: # Bug report **What is the current behavior?** When using a variable path inside of dynamic import, it throws a `Error: Cannot find module` error. **If the current behavior is a bug, please provide the steps to reproduce.** ```javascript const componentPath = `${process.cwd().replace('/', '')}/${context.componentPath}`; const component = await import(`/${componentPath}.js`); console.log(component); ``` Tried from [ref] ## Also Tried ```javascript const componentPath = `${process.cwd()}/${context.componentPath}.js`; const component = await import(/* webpackIgnore: true */ componentPath);…

