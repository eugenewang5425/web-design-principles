# Case Chunk 095 — Round 95

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10401 · core plugin LimitChunkCountPlugin generates deprecation warning
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In webpack 5 (v5.31.0) adding [webpack.optimize.LimitChunkCountPlugin]([link]) to config will lead to deprecation warning in console: ``` (node:24852) [DEP_WEBPACK_CHUNK_INTEGRATE]…

### CASE-10402 · [Webpack 5: ModuleFederationPlugin] Uncaught (in promise) TypeError: entry.get is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am getting the following error: ``` Uncaught (in promise) TypeError: entry.get is not a function at get (main.js:750) ``` Which with sourcemaps enabled says the issue is triggered from…

### CASE-10403 · webpackPrefetch: true breaks library output
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If I use `/* webpackPrefetch: true */` for dynamic imports, it makes my library output `undefined` **If the current behavior is a bug, please provide the steps to reproduce.** [link] <!-- A great…

### CASE-10404 · SourceMapDevTool plugin leaks memory in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If I use `devtool:"cheap-module-source-map"`, assets with `[contenthash]` filenames, and webpack in watch mode, it appears to store sourcemaps in webpack's in-memory cache with identifiers including…

### CASE-10405 · Async chunk loading breaks complex expressions in globalObject option
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```javascript // webpack.config.js output: { library: 'myLib', libraryTarget: 'umd', globalObject: 'typeof self !== \'undefined\' ? self : this', }, optimization: { splitChunks: { chunks: 'all',…

### CASE-10406 · `esmodule` packaging failure
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Compile the results`dist/main.js` `foo` is undefined ```js (()=>{"use strict";foo()})(); ``` **If the current behavior is a bug, please provide the steps to reproduce.** `file path` ```shell . ├──…

### CASE-10407 · Webpack 5 break IE11 with react 17.0.1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> If i use webpack 5.18.0 with react 17.0.1 the resulting vendor bundle contains some ES6 keywords like const. This breaks ie11 browser Chunk of webpack config: ``` const webpack = require("webpack"); const path = require("path"); //…

### CASE-10408 · Webpack5 File caching cannot be used in production mode with custom compilers
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: # Bug report I have submitted this question in stackoverflow, but I haven't received any reply。 [link] **What is the current behavior?** First, I use a custom compiler like "const compiler = webpack (config)"; compiler.run () ”。 Second, I have successfully upgraded to webpack 5 and have been able to compile successfully in production mode. Third, I use the persistent caching mechanism of webpack5 in production mode, and configure it according to the following configuration, hoping to integrate it into our CI process. Fourth, I found that the cache file could not be generated in my directory…

### CASE-10409 · Worker is not defined for target Node.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I am trying to use the new Webpack 5 native worker features. per @user 's comment at [link] I was under the impression the worker support would work for both web workers and node.js worker-threads. I understand the documentation is not yet ready and hope i'm missing something obvious. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which…

### CASE-10410 · browser get wrong warnings
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** this is some eslint warnings ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** webpack4 and webpack-dev-server3 work good, when upgrade webpack5.10.0…

### CASE-10411 · Webpack: The worst tech I've ever tried! HMR is not working at all.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Gosh, this stupid bundler has tons of fucking dumb issues. One of dozens is as below: Enabled hot: true and added ``` { loader: MiniCssExtractPlugin.loader, options: { hot: true, }, } ``` to my css…

### CASE-10412 · `require.context()` duplicates file names in `context.keys()` list
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `require.context(__dirname, true, /\.mdl\.ts$/)` the context `keys()` are duplicated. I tested the same code with [email] and it works as expected (see expected behavior). **If the…

### CASE-10413 · AMD module built with `webpack serve` returns `undefined` (Webpack 5 only)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `webpack serve` the defaut AMD module returns `undefined`. **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your…

### CASE-10414 · Order of imported (or exported) values is not respected between dev and prod env
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Order of imported values (when using `import * as values`) is not respected between dev and prod environment **If the current behavior is a bug, please provide the steps to reproduce.** foo.js: ```…

### CASE-10415 · Watch mode rebuilds due to "missing" invalid files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> This might be issue for [source-map-loader]([link]) instead, please let me know if it must be moved. But for me it seems that there could be generic solutions possible at webpack/watchpack level that would work around the…

### CASE-10416 · [Webpack5]|code splitting] installChunk: Cannot read property 'length' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using @user/component library, with SSR, I get the error: installChunk: Cannot read property 'length' of undefined In debug, I can see that chunk object only contains…

### CASE-10417 · (turns out this is a Lerna bug) Interactive mode breaks `--json` flag
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If I input an invalid option or otherwise make `webpack` have doubts, it will go into interactive mode and ask me for feedback. E.g.: `npx webpack --no-color --json --verbose > stats.json # invalid…

### CASE-10418 · Node mocking not working: configuration[0].node has an unknown property
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Node module mocking in the configuration does not work as of v5.1.3, and will produce a schema error such as: ``` 'Invalid configuration object. Webpack has been initialized using a configuration…

### CASE-10419 · Error: NormalModuleFactory.afterResolve is no longer a waterfall hook, but a bailing hook instead.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack build crashes with error `Error: NormalModuleFactory.afterResolve is no longer a waterfall hook, but a bailing hook instead. Do not return the passed object, but modify it instead. Returning…

### CASE-10420 · ProvidePlugin prints "Module not found: Error: Can't resolve '"value"'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am trying to use `ProvidePlugin` inside an Angular project using `@user/custom-webpack` ([see PR repo here]([link])). During compilation, it throws an error saying it cannot find the module I want…

### CASE-10421 · Strange ValidationError, when config is ok
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I have the following config (optimization part): ```ts optimization: { runtimeChunk: { name: 'runtime', }, splitChunks: { minChunks: 2, minSize: 30000, cacheGroups: { clientApplication: { name: 'clientApplication', test:…

### CASE-10422 · [Webpack 5] Module Federation - Re-exports imported in remote crash application with no error message.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bi-directional hosts. Exposed file is a re-export. Compilation does not throw an error. But application won't load. **Context** - `app1` exposes `indexExternal.js` as `./hostExports` which…

### CASE-10423 · compilation.rebuildModule broken in webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍18 💬5 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behaviour?** `compilation.rebuildModule` is broken since the breaking changes introduced in webpack 5 alpha. The source of the issue is the `removeReasonsOfDependencyBlock` function called inside…

### CASE-10424 · Regression in 4.44.0: minified code error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** seeing this error in minified version of code: ``` console error: Error: Minified React error [ref]; visit [link]]=undefined&args[]= for the full message or use the non-minified dev environment for…

### CASE-10425 · [Webpack 5] Dynamic import is not working with promise externals
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ~~`__webpack_require__` is called with result of promise external when it's is loaded as dynamic import, which results with error~~ webpack it threating resolved value as module id with dynamic…

### CASE-10426 · Build time degradation in [email]-beta.22
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of Webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have seen a huge increase in production build times after moving to Webpack-beta:22 `Webpack-beta:22 | 960sec ` instead of `Webpack 4.43.0 | 180sec` I can figure out the issue being related to…

### CASE-10427 · Resolving custom file from another folder with invalid package.json causes webpack not to find module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Error: Cannot find module 'alligator/file.js' **If the current behavior is a bug, please provide the steps to reproduce.** Let's assume we have 4 folders and 4 files like below: MAIN FOLDER |- A…

### CASE-10428 · #__PURE__ not honored in tree-shaking
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I intially formulated this as a [stackoverflow question]([link]) but failed to get an answer there. I'm submitting this here as I have now become convinced this is a bug. **What is the current behavior?** When importing a named export marked with `#__PURE__` webpack fails to tree-shake the remainder of the file. Given the following files: ```js //a.js export const X = /*#__PURE__*/ "X"; const a = function () {…

### CASE-10429 · SplitChunks generates same file names for chunks, with different casing
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On adding a new feature to an application, webpack build split two of the chunks with the same name and capitalisation difference. This broke the output.filename in dev with…

### CASE-10430 · Specifying “target” in webpack config as “electron-renderer” gives an error “window is not defined” while building with next build
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In order to use "ipcRenderer" inside renderer process in my electron app, I have specified target as "electron-renderer" in my webpack config. Before specifying target it was not allowing me to…

### CASE-10431 · Potential Webpack 5 regression with `mode: development` and shared imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `mode: development` with the current Webpack 5 version (`^5.0.0-beta.16` in package.json from `npm install webpack@user`), changes to a single file imported into two separate entrypoints…

### CASE-10432 · Webpack production mode can't display images on other pages besides the main page
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** - Production mode when built doesn't display images and other non js, html and css files such as shaders (development mode is fine). The images are definitely within the dist folder so it's not an…

### CASE-10433 · ERROR TypeError: (void 0) is not a function - in production build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Throwing _ERROR TypeError: (void 0) is not a function_ in the production build. **If the current behavior is a bug, please provide the steps to reproduce.** I am working on a simple d3.js project.…

### CASE-10434 · Webpack 5 - Memory Leak
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I make a change in my web app and Webpack compiles, memory usage seems to increase. If I keep making changes and Webpack keeps re-compiling, memory usage will continue to climb. In a large…

### CASE-10435 · Can't use [chunkhash] or [contenthash] in filename if chunkFilename uses [hash]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In `output`, if I attempt to use the `[chunkhash]` or `[contenthash]` placeholder in `filename`, but use `[hash]` in `chunkFilename`, the build will fail with the error: ``` ERROR in chunk main…

### CASE-10436 · [Webpack5] split-chunks-plugin: automaticNameMaxLength param considered invalid during schema validation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The document for Webpack v5.0.0-beta.14 shows: [link] **If the current behavior is a bug, please provide the steps to reproduce.** add the following to webpack config: ```javascript…

### CASE-10437 · Uncaught TypeError: __webpack_require__(...).context is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Either of the following pieces of code produces `Uncaught TypeError: __webpack_require__(...).context is not a function`: ``` const basenam = '.'; let ctx = require.context(basenam, true); ``` ```…

### CASE-10439 · External js libraries imported but not working (bootstrap, fontawesome...)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-B1, P-B2, P-B3 · **Env**: bootstrap, webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bootstrap and font awesome are installed on the app and are required in app/javascript/packs/application.js : ``` // This file is automatically compiled by Webpack, along with any other files //…

### CASE-10441 · When a Yarn 2 installation uses virtual packages, the DllPlugin/DllReferencePlugin doesn't refer to the linked library.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> When a Yarn 2 installation uses [virtual packages][lexicon], the DllPlugin/DllReferencePlugin don't pull in the linked library. This is because the [virtual package][lexicon] paths are unique even though the refer to the same package. # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed.…

### CASE-10442 · [Docs] i18n example is missing
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The localization example listed in [link] tool]/tree/master/examples#i18n and at [link] is missing **If the current behavior is a bug, please provide the steps to reproduce.** N/A <!-- A great way…

### CASE-10443 · Webpack4 doesn't handle network paths
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `output.path` is a network path of the following format: `\\hostname\directory\deep\tree` webpack fails with the following message: ``` WebpackOptionsValidationError: Invalid configuration…

### CASE-10444 · In browser debugger - no access to thrown error when in async context
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When an exception is caught inside an async function, the debugger does not display the value of the exception parameter given to the `catch` block. It is accesible by the program itself, e.g. you…

### CASE-10445 · import from node_modules breaks the code
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Edit: Webpack ouput done but code not working **If the current behavior is a bug, please provide the steps to reproduce.** **webpack.config.js** ```js const path = require('path'); module.exports =…

### CASE-10446 · Lazy loaded modules conflict (Micro Frontend )
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have three angular (version 7 and above) applications let's say: 1. shell application 2. sub application (client A) 3. sub application (client B) In my senario i wanted to load this sub…

### CASE-10447 · Dead code still shown in Source Map
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I define a variable via `DefinePlugin` and use that within my coding, the minified `.js` file removes that dead code correctly but the source map still shows the coding inside that `if`. I do…

### CASE-10448 · contenthash doesn't calculate inline-source-map
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** contenthash doesn't calculate inline-source-map, i.e., when inline source map is changed, the contenthash doesn't change. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-10449 · [Question] : data/code sharing between different chained (pitch) loader
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I am trying to understand the main flow of normal and pitch loader and The docs about this [link] is pretty straight forward and clear. One Thing I faced missing is about the code or data sharing between different loader using pitch method. In normal loaders , The output of the prev is input of the next loader. Thats fine ! But in pitch loader,when a…

### CASE-10450 · CSS File imported with url imports looses original location
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I believe this to be a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Take a file within node_modules `file.css` containing style `background:…

### CASE-10451 · Default chunk minsize of 30k ignored in dev mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The default chunk minsize of 30k is not working properly in development mode. A vendor chunk of 17k is produced while it is not generated in prod mode, nor if the `minsize` value is explicitly set…

### CASE-10452 · Webpack prefetching stops working when runtimeChunk is enabled.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-10453 · An object is not support in externals
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** the version of my webpack is 4.35.2 when I config my webpack.config.js with externals,and use a object with { root, amd, commonjs},the result is void 0 **If the current behavior is a bug, please…

### CASE-10454 · Webpack output missing quotes when using externals
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I require an external module I see this line in my output which contains syntax error: ``` module.exports = ./manifest.json; ``` with the following error: `SyntaxError: Unexpected token .` **If…

### CASE-10455 · issues：Using ”DllReferencePlugin“ still packages some third-party libraries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** ：：bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I want to shorten the packing time，so，i use DllReferencePlugin and DllPlugin to Split…

### CASE-10456 · Integrating the external local module into existing project
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I have been trying to integrate an external react-native-sdk local module which contains few UI components, and it exports these components just like an npm module. When I try to use these components in an existing react native web project, the imported components are an undefined component when checked in logs. Created application code repository…

### CASE-10457 · How does webpack handle modules with the "-browserify" field in the package name?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack works very well, but I am still a newbie and I am a bit confused. When I use "import * as timers from'timers'", webpack can also find timers-browserify correctly. Does the WebPack do special…

### CASE-10458 · Plugin templates don't get updated with HMR
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** An `ImportDependencyTemplate` plugin does not re-run or update template through HMR when a dependency is changed. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-10459 · Loaders behaves different between function or array module.rules.use
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `module.rules.use` is set to a function, and `babel-loader` is given an `options` property, the `worker-loader` as a final loader could report errors: ```text ERROR in…

### CASE-10460 · guidance for node-only libraries being consumed by webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> A few weeks ago, a change in the [`mongodb`]([link]) project caused errors for users of webpack (you can see more details [here]([link])) `mongodb` is fundamentally a node-only library, and is not meant to be run in a browser environment. We had assumed that users would not try to run the library through `webpack` since it could be run in node, but…

### CASE-10461 · When web pack configures template using html-webpack-plugin plug-in, report Entrypoint undefined = index.html
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** Template report undefined <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!--…

### CASE-10462 · Common module imported by more than one module was shown only once in `stats.json`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to find all the modules that import `common.js` through `stats.json`, but only `a.js` shown in `common.js` field in `stats.json` such as: ```json [ ... { ... "id": null, "identifier":…

### CASE-10463 · Unable to install webpack due to @user/long dependencies
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** 1. npm install webpack 2. then get the error `npm ERR! Maximum call stack size exceeded` 3. then check the log `108 http fetch GET 404 [link] 479ms 109 silly fetchPackageMetaData error for…

### CASE-10464 · Server-side HMR not updating in node v11.11.0+
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hot module reloading does not work in node v11.11.0+. This may be a node issue, but I'm posting it here first as I'm not familiar with webpack internals. **If the current behavior is a bug, please…

### CASE-10465 · Uncaught ReferenceError: ... is not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` Uncaught ReferenceError: Mechanism is not defined (anonymous function) (anonymous function) ./src/Car.ts __webpack_require__ (anonymous function) ./src/UserAI.ts __webpack_require__ (anonymous…

### CASE-10466 · Module ids with trailing slash inconsistent with node.js behavior
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `require('some-module/')` resolves to `node_modules/some-module.js` in webpack, while node resolves this to `node_modules/some-module/index.js` because of the trailing slash. **If the current…

### CASE-10467 · Tree shaking behaving differently for require
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Tree shaking behaves in weird way when we compare different data types. **What is the current behavior?** When we compare the same data types only the contents of file matching the conditions are included in the output whereas when…

### CASE-10468 · `Uncaught SyntaxError: Unexpected token !` with `new Method` usage
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Fails with an expection **If the current behavior is a bug, please provide the steps to reproduce.** ``` import Method from 'path/to/unexisting/module'; new Method(); ``` It will be transpiled to…

### CASE-10469 · Unclear about the meaning and usage of splitChunks.maxAsyncRequest
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I write a demo: 1. Dynamic import three modules in App.js. ![default]([link]) 2. In each page I import orgchart.js which size is bigger then minSize. ![2]([link]) 3. I set the maxAsyncRequests to 2, so I guess the orgchart.js will not be split, because of my async request is 3. ![4]([link]) 4. But the result is the orgchart.js is split. ![3]([link])…

### CASE-10470 · rule.exclude not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack build does not exclude specified file ``` > npx webpack --verbose --mode production --config webpack.config.js ℹ ｢atl｣: Using [email] from typescript ℹ ｢atl｣: Using tsconfig.json from…

### CASE-10471 · Multiple entries with dynamic import on Webpack4
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi, I'm novice in Webpack. I spend many hours from this problem.. In Webpack4 config, there are…

### CASE-10473 · Module concatenation not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> *This has been moved from [this babel issue]([link])* **What is the current behavior?** webpack's module concatenation does not behave correctly. Everything builds okay but results in a runtime error: ![image]([link]) Disabling…

### CASE-10474 · Webpack Tree-shaking fails with static properties but not static getters
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If an ES6 class contains a static **getter** property but the class itself is un-used, it will correctly be removed from the bundle. So this is tree-shake compatible: ```javascript // works, tree…

### CASE-10475 · Promisifed webpack returns errors as a return value
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using promisify on Webpack as follows: `const asyncWebpack = promisify(webpack);`, any compilation errors are returned as a value rather than thrown. **If the current behavior is a bug, please…

### CASE-10476 · error with dllplugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I use webpack4.20.2 and Dllplugin to pack react and antd, but there are some errors caused by…

### CASE-10477 · HMR only works with a webpack-dev-middleware app server
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a flask backend serving an app that includes a `<script>` tag with a `bundle.js` served by the `webpack-dev-server`. I was expecting HMR to work with this setup, since I don't see anything in…

### CASE-10478 · Error: Cannot find module './WebAssemblyInInitialChunkError'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** i am using webpack to bundle my react app everything was fine until last update here is my `webpack.config,js` ``` internal/modules/cjs/loader.js:583 throw err; ^ Error: Cannot find module…

### CASE-10479 · Webpack 4 entry point requires leading ./ on Windows
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 4 (on Windows 10 at least) is overly fussy about the format for the entry point. If I use: `entry: 'ts/index.tsx'` then I get the error message `Can't resolve 'ts/index.tsx'`. However, if I…

### CASE-10480 · webpackPrefetch always creates `link rel` , does not matter if the `if statement` is `true` or `false`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's…

### CASE-10481 · Detect module.require dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬5 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack does not resolve dependencies (or generate warnings) when using…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10438 · Wasm not worked in edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, webpack
- **Signals**: 👍2 💬5 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report **What is the current behavior?** wasm is not usable on edge **If the current behavior is a bug, please provide the steps to reproduce.** * create a wasm module and import it ```javascript import("my_wasm_module").then(m => m.greet()) ``` * open edge (not chromium kernel) it would complains about `TypeError: Response expected` * open edge (chromium kernel): everything works **What is the expected behavior?** the…

### CASE-10483 · outline-none doesn't work on button with focus in chrome
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, tailwind
- **Signals**: 👍6 💬38 · closed
- **Excerpt**: Hi, First of all, a big thank's for your work on Tailwindcss, it make coding css so cool again ! Maybe it's not a bug and you thought about this already, but it seems strange that outline-none doesn't set outline-none on focus too, on button element. I noticed that only on Chrome and only on buttons. If I want to remove outline on focus, I need to do : ``` <button class="outline-none focus:outline-none">click-me</button> ``` If not I see a big blue outline when the button is in Focus state. It seems that's its coming from normalize.css with : ``` button:focus { outline: 1px dotted; outline:…

### CASE-10484 · preflight button reset in v3 inconsistent with v2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍30 💬34 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.0.6 **What build tool (or framework if it abstracts the build tool) are you using?** postcss: 8.3.11 webpack: 5.65.0 **What version of Node.js are you using?** v14.16.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** [link] framework][ref] removes the…

### CASE-10485 · 4.0.8 is a break update, many styles don't work after upgrading in the Astro project
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍12 💬33 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.8 **What build tool (or framework if it abstracts the build tool) are you using?** pnpm10.4.1 astro5.3.0 tailwindcss4.0.8 @user/vite4.0.8 **What version of Node.js are you using?** v20.18.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** **Describe your issue** many styles don't work after…

### CASE-10487 · tailwindcss v3.0.5 is not picking up changes unless I change tailwind.config.js file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vue
- **Signals**: 👍16 💬30 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.5 **What build tool (or framework if it abstracts the build tool) are you using?** "postcss": "^8.4.5" **What version of Node.js are you using?** v16.6.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** ``` { "name": "tw2", "version": "0.1.0", "private": true, "scripts": { "serve": "vue-cli-service…

### CASE-10488 · JIT mode is not picking up changes unless I change tailwind.config.js file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, tailwind
- **Signals**: 👍23 💬26 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? postcss-cli v8.3.1 ### What version of Node.js are you using? v14.15.5 ### What browser are you using? Firefox ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue Sometimes tailwind in `jit` mode is not adding classes to final CSS when I'm adding them to my HTML files unless I edit the `tailwind.config.js` file, I usually comment and uncomment some line in that file and all of sudden I see the class has…

### CASE-10489 · [JIT]: JIT not working properly. like flex classes (next js)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, macos, tailwind, next.js
- **Signals**: 👍5 💬26 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.1 ### What build tool (or framework if it abstracts the build tool) are you using? next.js 10.1.3 ### What version of Node.js are you using? v14.15.1 ### What browser are you using? Firefox, Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue JIT not working properly... when i use classs like w-20 or flex classes its not working properly @user can you check my repo ? is it bug or i missed something ?

### CASE-10491 · tailwind 3 doesn't work with storybook/webpack setup
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, tailwind, webpack
- **Signals**: 👍6 💬25 · closed
- **Excerpt**: I'm using macOS, Chrome v96, Node.js 16 I created a github repository with this exact issue - [link] Basically just do `yarn` and `yarn storybook` and you'll see storybook loaded correctly. change package.json to use tailwind `^3.0.0` and run `yarn` and `yarn storybook` again and you'll see no tailwind is loaded inside storybook.

### CASE-10493 · Styles aren't generated when building a Docker image for ARM64 on a 2019 Intel MacBook Pro
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍4 💬25 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** Rails 8.0.2 **What version of Node.js are you using?** - **What browser are you using?** Chrome **What operating system are you using?** macOS -> ARM64 **Describe your issue** I've prepared detailed steps you can follow. 1. I'm on a MacBook Pro 2019 (Intel): ``` % arch i386…

### CASE-10494 · TypeError: Cannot read properties of undefined (reading '700')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, tailwind, angular
- **Signals**: 👍13 💬24 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** "tailwindcss": "^3.0.1", **What build tool (or framework if it abstracts the build tool) are you using?** "postcss": "^8.3.11", Angular 13 , **What version of Node.js are you using?** node : v16.13.0 **What browser are you using?** Chrome, **What operating system are you using?** Ubuntu 20.04 **Describe your issue** after I update Tailwindcss on my angular 13…

### CASE-10497 · v4 alpha does not work on Stackblitz
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, tailwind, vite
- **Signals**: 👍13 💬22 · closed · labels: v4
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0-alpha.6 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 5.1.5 **What version of Node.js are you using?** v18.18.0 **What browser are you using?** Chrome **What operating system are you using?** StackBlitz **Reproduction URL** [link] A Tailwind Play link or public GitHub repo that includes a minimal reproduction of the…

### CASE-10498 · `backdrop-blur-` does not work on webkit browsers (ie safari)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, ios, windows, webkit, tailwind
- **Signals**: 👍5 💬21 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v3.4.4` **What build tool (or framework if it abstracts the build tool) are you using?** Next `v14.2.2` PostCSS `v8` **What version of Node.js are you using?** Node `v20.11.1` Bun `v1.1.8` **What browser are you using?** Safari [macOS/iOS] (does **NOT** work as expected) `v17.5` Brave [Windows] (works as expected) `v1.67.116` Arc [macOS] (works as expected)…

### CASE-10499 · The global variable `--tw-transform` is not defined in base
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.7 **What build tool (or framework if it abstracts the build tool) are you using?** tailwindcss-cli 3.0.7 **What version of Node.js are you using?** v16.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] – Funny thing here: `--tw-transform` gets directly added to `div:after` and there is no…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10440 · Bundle size increased a lot after upgrading from Webpack 2 to Webpack 4
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I successfully upgraded one project from Webpack 2 to Webpack 4. While doing that, app.js served to users went from 500kb to 2.3Mb which is unacceptable. I believe three shaking isn't configured properly but I could be wrong: [link] <img width="1108" alt="Screen_Shot_2020-02-13_at_10_39_50_AM" src="[link]>

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10472 · [Bug] Webpack can't import css from nested modules
- **Principles**: P-B1, P-B2, P-B3 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: # Bug report Webpack can't import css from nested modules, I have 3 modules: - A: is the one who import the css files - B: is the one who tested it working with webpack - C: is the one who fail to test with webpack, but this time A was nested in B. B and C have been tested with the same webpack config. **What is the current behavior?** The css file is importer from [font-awesome in module A]([link]). ```js import 'font-awesome/css/font-awesome.css'; ``` This dependency is installed in B and tested working here [link] [The css loader configuration looks like this]([link]) { test: /\.css$/,…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10482 · variable colors with <alpha-value> not working with theme function on plugins
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍47 💬40 · closed
- **Excerpt**: I'm trying to create a plugin for Tailwind 3.1.8, but when I use variables on colors with the new syntax - `rgb(var(--primary) / <alpha-value>)` - the color stop working. I created an example on [[link]]([link]) Removing the `/ <alpha-value>` from the color value make things work again. I'm doing something wrong?

### CASE-10490 · `@user`Broken in Tailwind CSS v4.0 – No Clear Fix or Docs!
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind, typescript
- **Signals**: 👍12 💬25 · closed
- **Excerpt**: # Tailwind CSS v4.0 `@user` Bug Report ## Introduction I'm in the process of upgrading a large project, actually, five Blazor projects that all conjoin into one via components and different backends. Our focus with this project is to deliver an optimal UI experience to the end-user, which is why we use TypeScript, C#, and of course, our favorite, Tailwind CSS. Btw, huge fans! Now, with that said, we have certain native components where we cannot add CSS classes to the component itself, making `@user` an essential part of our workflow. However, after upgrading to Tailwind CSS v4.0, `@user` is…

### CASE-10492 · New purge option not working with webpack
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: webpack, tailwind
- **Signals**: 👍7 💬25 · closed
- **Excerpt**: First of all, congrats in the new 1.4 release, the new purge option is awesome! Recently I used it in a project built with Parcel and worked like a charm. However, I cannot make it work in another project built with webpack. Previously I was using the webpack `PurgecssPlugin` configuration, now I removed it and expected it to work with the following configuration: ```js // tailwind.config.js module.exports = { purge: ['./src/**/*.html', './src/**/*.tsx'], theme: {}, variants: {}, plugins: [], }; ``` ```js // webpack.config.js module.exports = { // ... module: { rules: [ { // ... }, { test:…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-10486 · Tailwind CLI slow down / memory leak
- **Principles**: P-F5, P-H3 · **Env**: opera, windows, tailwind
- **Signals**: 👍3 💬30 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** None **What version of Node.js are you using?** v17.0.1 **What browser are you using?** N/A **What operating system are you using?** Windows 10 **Reproduction URL** [link] **Describe your issue** After saving a file in the root folder, that triggers a rebuild by the Tailwind CLI watcher, **while the rebuild is still in progress**, I think some kind of memory leak happens. The reproduction requires a file to be saved very rapidly to showcase it, but on larger…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10495 · Dark mode "class" strategy doesn't work with CSS Modules and @user
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍19 💬23 · closed
- **Excerpt**: ### Describe the problem: [Dark Mode]([link]) in ['class' strategy]([link]) doesn't work with [CSS Modules]([link]) and `@user`. `css-loader` renames `.dark` selectors given by tailwind. <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> ### Link to a minimal reproduction: [link] <!-- Please create a reproduction on [link] or link to a GitHub repository that reliably reproduces the issue with the least amount of extraneous code possible. We can't help you without a reproduction. -->

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10496 · Fix : Error with lightningcss when using Tailwind CSS v4 with Next.js 15.2.1 and Node.js 20.18.3
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, tailwind, next.js
- **Signals**: 👍0 💬22 · closed · labels: needs reproduction
- **Excerpt**: **Getting Error with lightningcss when using Tailwind CSS v4 with Next.js 15.2.1 and Node.js 20.18.3 using create-next-app@user . --use-pnpm** **version of Tailwind CSS** v4.0.12 (via @user/postcss) **build tool framework** Next.js 15.2.1 with Turbopack **version of Node.js** v20.18.3 **browser** N/A (Build error) ** operating system ** Windows 10 **Repo URL** [link] also attached terminal messages in a saparate md file name terminalmessage.md(can be found in repo) 1. Create a new Next.js project with Tailwind CSS: ``` npx create-next-app@user blogcodeabode --use-pnpm ``` (Select Yes for…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10500 · applyComplexClasses compiler stuck with @user inside media queries or variants
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍3 💬20 · closed
- **Excerpt**: ### Describe the problem: With the new applyComplexClasses if you put `@user` **the old way**: inside a `@user` (media query) or a `&:hover` (variant), the complier gets stuck (using postcss loader in webpack). ### Link to a minimal reproduction: This css makes the compiler gets stuck (apply content can be anything): ``` .selector { @user md { @user w-2/6; } } ``` ``` .selector { &:hover { @user text-white; } } ``` I know the I should use the new way to `@user md:w-2/6` and `@user hover:text-white`, but for backward compatibility could be good fixing this bug, or at least give an error in the…

