# Case Chunk 093 — Round 93

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10201 · Single-Spa application stops working with Latest webpack Beta Upgrade
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After updating Single-Spa application from 4.x to latest beta the application stops work **If the current behavior is a bug, please provide the steps to reproduce.** [link] [link] <!-- A great way…

### CASE-10202 · Corrupt source map paths for context module that uses negative lookahead
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Given a context module that uses a negative lookahead, e.g. ```js // registers all files other than `./index.js` const context = require.context( ".", true, /^(?!.*[\\/]index\.js$).*$/i, "lazy" );…

### CASE-10204 · minsize doesn't work as expected
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am using this `splitChunksPlugin` settings. ```js output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js', chunkFilename: '[name].js' }, optimization: { splitChunks: { chunks:…

### CASE-10205 · Webpack inserts line break after semicolon in quoted string, breaks Google Font import with multiple font weights
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍4 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack inserts a line break after semi-colon in quoted string **If the current behavior is a bug, please provide the steps to reproduce.** 1. Select multiple font weights for a Google font and copy…

### CASE-10206 · Module building fails with using node-interface for building web-project
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍2 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I use the electron-app for building web project with using [node-interface]([link]) for webpack. Errors appear after include the babel-loader to [webpack.config]([link]) <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` Uncaught (in promise)…

### CASE-10208 · ./src/index.js Cannot find file: 'Hello.js' does not match the corresponding name on disk: '.\src\hello.js'.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-10209 · 'code of conduct' routes to openjsf.org
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** 'Code of conduct' link in CODE_OF_CONDUCT.md routes of openjsf.org . check it out here : [link] tool]/blob/master/CODE_OF_CONDUCT.md **If the current behavior is a bug, please provide the steps to…

### CASE-10210 · when multi entry includes 'index',webpack entry config does not work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack.config.config.js ```js const {CleanWebpackPlugin} = require('clean-webpack-plugin'); module.exports = { mode: 'development', entry: { home: './home.js', index: './index.js' }, output: {…

### CASE-10211 · Critical dependency: the request of a dependency is an expression
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** My testing-app is compiling fine, except that I get this warning: " Critical dependency: the request of a dependency is an expression" (base) marco@user:~/webMatters/vueMatters/PeerJS-VueJS-Test$…

### CASE-10212 · Invalid webpack:///webpack/bootstrap mapping/content in source maps
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, bootstrap
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack outputs a source map that includes the following mapping: | Bundle line | Bundle column | Source file | Source line | Source column | |---|---|---|---|---| | 1 | 933 |…

### CASE-10213 · Some chunks doesnt get included in HTML when disabling name in splitChunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** When using config like below: ``` optimization: { splitChunks: { chunks: 'all', name: false, }, } ``` Vendor chunk doesnt…

### CASE-10214 · Watch mode not working for many files in a large project
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack recompiles when saving some files in my project but not others when running in watch mode. Other than the fact that they are all a mix of .ts .tsx and .less files, there does not seem to be…

### CASE-10215 · Issue creating a UMD module that uses dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to generate a UMD module that uses the `import()` syntax. That said, with the current version of Webpack, `import()` is converted into using `document.createElement('script')` which…

### CASE-10216 · Module not found: Error: Can't resolve 'fs'
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The current behavior is that webpack is not able to resolve the module `fs` and causes webpack to fail bundling. This webpack [target]([link]) is set to **electron-renderer** due to this target being the only viable option in order to implement [Electron best security practices]([link]). The usual solution to this problem is to set the webpack target to `node`,…

### CASE-10217 · XHR request not supported by stream-http getReader() of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I need to send xhr requests to set up Cypress tests in my project, unfortunatly, even if the request succeed, i can't access data because of dependencies used by webpack: (node-libs-browser and…

### CASE-10218 · LimitChunkCountPlugin bug with maxChunks: 1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using `new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })` in my build process generates the following message: ``` chunk main [entry] Cannot convert undefined or null to object ``` **If…

### CASE-10219 · Can't use 2 js files created in same library
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report A bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm not 100% sure this is a bug, and I also have an [SO question ]([link])open. When…

### CASE-10220 · Can't resolve react components when importing from subfolder [Need help]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It seems impossible for webpack to load the ts/tsx files that are included Error : ``` ERROR in ./src/pages/HomePage.tsx Module not found: Error: Can't resolve '../components/Sidebar' in…

### CASE-10221 · Removing an entrypoint by SplitChunksPlugin leads to mini-css-extract-plugin error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After migration from webpack 3 + extract-text-webpack-plugin to webpack 4 + mini-css-extract-plugin we encountered the same problem in several of our projects - we found that it has already been…

### CASE-10222 · Uncaught ChunkLoadError: Loading chunk 0 failed.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack, react
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have created one react library which has the components that are commonly used(Such as button, form elements, input, radio, checkbox, tabs, etc) and following is the webpack config file to it…

### CASE-10223 · Shared runtime for library & code splitting via the SplitChunksPlugin doesn't work properly (SystemJS & UMD)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Code-splitting via the SplitChunksPlugin and/or via a shared Runtime leads to a non-functional library when being loaded by SystemJS. Chunks are never loaded. If you disable both then, depending on…

### CASE-10224 · CommonJS modules with "sideEffects": false still removes styles for single-file vue components in production builds
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: vue, webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a vue project with single-file vue components, I use babel transform my ES2015 module syntax into CommonJS modules (for some reason), but i can`t find my styles from single-file vue…

### CASE-10225 · Data uri import does not work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Data uri import does not work **If the current behavior is a bug, please provide the steps to reproduce.** When using a data uri in an import statement, webpack throws an error saying it can't find…

### CASE-10226 · yarn start doesnt give error but chunks served through yarn build give application specific error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am migrating my react 15 application to react16. `yarn start` works fine and doesnt throw application oriented errors but when chunks are served through `yarn build` , it throws my application…

### CASE-10227 · Imports in ES modules revert to loading CommonJS
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In the latest version of Webpack 4 with default config, imports in .js files prefer a package `module`, whereas identical imports in `.mjs` files for some reason revert to loading the package…

### CASE-10229 · unable to generate prefetch html
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** for prefetch: ``` import(/* webpackPrefetch: true */ './module'); ``` got: ``` <script type="text/javascript" src="module.bundle.js"></script> ``` **If the current behavior is a bug, please provide…

### CASE-10230 · `ReferenceError` on circular dependencies with ES2015 `let`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `export let` and circular dependencies, runtime will have `ReferenceError` errors. **If the current behavior is a bug, please provide the steps to reproduce.** ``` git clone [link] cd…

### CASE-10231 · webpack' parser evaluates node-related expressions even when polyfills are disabled
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack evaluates and optimizes-out node-related expressions even when polyfills are disabled. **If the current behavior is a bug, please provide the steps to reproduce.** **webpack.config.js**…

### CASE-10232 · module.hot.accept is transforming code incorrectly
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is transforming code incorrectly. I'm not sure if it is Babel or Webpack, but my first guess is Webpack. My Code : ```js setupHMR () { if (module.hot) { // Setup hot module replacement…

### CASE-10233 · webpack change the electron render env
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-10234 · (optimization.splitChunks) Extracting true commons from multiple entry points relays on `minChunks` value
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When we are building with multiple entry points that share a common modules (but also have other deps): ``` entry: { page1: 'src/page1.js', page2: 'src/page2.js', page3: 'src/page3.js', page4:…

### CASE-10235 · Webpacks fetches 4 files for one dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using an import() in the base level of a file (i.e. not inside any functions/classes), webpack fetches 4 files on the browser. It's possible that this is caused by two separate issues (one…

### CASE-10236 · compile.run not propagating thrown errors
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using the node api, throwing an error within the `compiler.run` function does not propagate the error to the calling process: ```js // scripts/build.js let compiler = webpack(compilerConfig);…

### CASE-10237 · Dynamic require doesn't work with JSON file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic require works fine with javascript modules and webpack can load json without any problem, however once you mix them, it will fail. **If the current behavior is a bug, please provide the…

### CASE-10238 · Uncaught SyntaxError: Unexpected token <
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** i updated webpack from 1.14 to webpack 4 and i got this error my webpack configuration of versuion 1.14 was like this webpack.common.js `var debug = process.env.NODE_ENV !== "production"; var…

### CASE-10239 · Error: Callback was already called. when using `npm run dev` from docker on windows
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Whenever running `docker-compose up` on a windows machine whose volumes are mounted, I get this error. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I recently starting working on a windows machine and found i cannot mount my directory without…

### CASE-10240 · Webpack 4 build broke after rebuild
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On [link] tool]/releases/tag/v4.17.1 everything works fine, on [link] tool]/releases/tag/v4.17.2 after updating code, webpack rebuilds and the css/styles are broken. **If the current behavior is a…

### CASE-10241 · Add ability to setup separated bundles in one config
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Request a feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** not relevant **If the current behavior is a bug, please provide the steps to…

### CASE-10242 · Cheap-module-source-map not generated with correct source file.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue, bootstrap
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I create a project with `Vue-Cli 3` and set webpack config `devtool` as `cheap-module-source-map`. **What is the current behavior?** The source map file generated just contain source content `webpack:///webpack/bootstrap` and…

### CASE-10243 · import( /* webpackPrefetch:true */ breaking when upgraded to React v16.6
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> When using import(/* webpackPrefetch: true */ "some-dynamically-imported-file") React dom throws an error as below: ```bash ERROR in ./node_modules/react-dom/cjs/react-dom.development.js Module build failed (from…

### CASE-10244 · Building production bundle with WebAssembly fails with "Cannot read property 'importedNames' of null"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm attempting to build a webpack bundle which is building a WebWorker script which dynamically imports a WebAssembly module in it. I've got this configured within development mode and it works as…

### CASE-10245 · unsafe-perm in lifecycle true
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This error shows when I try running the webpack 0 info it worked if it ends with ok 1 verbose cli [ 'C:\\Program Files\\nodejs\\node.exe', 1 verbose cli 'C:\\Program…

### CASE-10246 · When I used code split, I found that the chunk file was loaded earlier than the corresponding CSS file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> <!-- PLEASE READ THE FIRST SECTION :-) --> ### Is this a bug report? No <!-- If you answered "Yes": Please note that your issue will be fixed much faster if you spend about half an hour preparing it, including the exact reproduction steps and a demo. If you're in a hurry or don't feel confident, it's fine to report bugs with less details, but this…

### CASE-10247 · Webpack's alias doesn't work when target module is in node_modules
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** alias doesn't work when target module is in node_modules folder **If the current behavior is a bug, please provide the steps to reproduce.** ## Background I'm writing an SSR react app with…

### CASE-10248 · Unable to access global variable in definePlugin functions
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Unable to access global variable in global function defined in definePlugin **If the current behavior is a bug, please provide the steps to reproduce.** ``` // webpack.js new DefinePlugin({ 'ENV':…

### CASE-10249 · Can not use other module types(except es6 module) with tree shaking!
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Ccommonjs modules stop whole project tree shaking! <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The babelrc: ``` ["@user/preset-env", { "modules": false, "targets": { "browsers": ["> 1%", "ie > 9"] }, "useBuiltIns": "usage" }] ``` When i use…

### CASE-10250 · providedExports: true in 4.17.0 breaks project that worked in 4.16.5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In 4.17.0 the production build breaks on a project build correctly with 4.16.5. I have narrowed it down to the `providedExports` setting as setting that to `false` will fix the build again. The…

### CASE-10251 · Source maps aren't added to .mjs output files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Source maps don't get added when defining an output file with an `mjs` extension. If I change nothing about my config except for the output extension from `mjs` to `js`, it works as expected. **If…

### CASE-10253 · "use strict" optimization bug
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `Uncaught SyntaxError: Strict mode code may not include a with statement` from Chrome when webpack is used with production mode. Does not reproduce with development mode. **If the current behavior…

### CASE-10255 · optimization.splitChunks does not respect entry
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using multiple entry points, specifying `splitChunks` to break out vendors has no way to organize by entry, so the compiled vendor files overwrite each other. **If the current behavior is a…

### CASE-10256 · node_modules are not excluded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** node_modules is not excluded from the build. **If the current behavior is a bug, please provide the steps to reproduce.** Download: [link] Install the (dev)dependencies by running: `npm install…

### CASE-10258 · path must be absolute or specify root to res.sendFile
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have the node.js server: ``` const express = require('express'); const path = require('path'); const app = express() .use(express.static( path.join(__dirname, '../static') )) .use(express.json())…

### CASE-10259 · Generator definition shorthand outputs as function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The [shorthand for defining a generator method in an object]([link]) is sometimes parsed as a function. In some cases, this raises an uncaught syntax error in the browser (because keywords such as…

### CASE-10260 · Tree shaking not working with spread operator
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Tree shaking is broken (the whole library is included) if a spread operator is used. **If the current behavior is a bug, please provide the steps to reproduce.** Example code: ```ts import * as Rx from…

### CASE-10261 · `Chunk.integrate()` can arbitrarily rename entry name chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I've a webpack config with a "server" entry whose chunk name is renamed with the name of a split chunk when using `LimitChunkCountPlugin`. Then `webpackHotServerMiddleware(compiler, { chunkName: 'server', })` fails to retrieve the handler with given chunk name. <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support…

### CASE-10262 · Same contenthash, different asset content after running optimization plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Two different builds with different (for example) `postcss` configuration, result into an asset that has different content, but same `[contenthash]`, and therefore same filename. This means that if you…

### CASE-10264 · Webpack4 is slower than webpack3 in my project.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In my project, webpack4 is slower than webpack3. Why is it? If used cache, webpack4 is quick. But I can not use cache. I try to close some loaders to resolve it, but as before. ![image]([link]) **If the…

### CASE-10265 · Splitting by entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature/bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a need to assemble two different bundles with styles for the open and closed…

### CASE-10266 · different content output same content hash
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** the content of the output files are different, but the content hash are same. **If the current behavior is a bug, please provide the steps to reproduce.** [reproduce repo]([link]) <!-- A great way to do…

### CASE-10267 · Out of memory webpack -p
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # The fix Clean your `dist` folder before building (suggestion: use the `clean-webpack-plugin`) # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** For some reason, having a large number of old builds/files in the `dist` folder will cause webpack to run…

### CASE-10268 · Side-effects options breaks Lodash's chain method
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Importing `chain` from `[email]` doesn't work with `sideEffects: true` (production mode). ```…

### CASE-10269 · TypeError: Cannot read property 'compilation' of undefined at ModuleConcatenationPlugin.apply
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After updating from Webpack 3 to 4, I get an error: ```…

### CASE-10270 · How can i config when i run 'webpack' and happen this problem
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> ok! <!-- Before creating an issue please make sure you are using the latest version of webpack. --> yes,it's version of 3.6.0 <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> how can i try this :) **Do you want to request a *feature* or report a *bug*?** i have some question for run 'webpack' <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> QAQ...but i find many solution and none…

### CASE-10271 · Dynamic binding src attribute for an image in VueJS
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: vue, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Wrong parsing images by webpack **If the current behavior is a bug, please provide the steps to…

### CASE-10272 · resolveWeak returns an empty object for JSON split chunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** resolveWeak returns an empty object when used with an entry point. **If the current…

### CASE-10273 · 2 different entries in folders, url must include index.html
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** a bug i guess <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Entering a folder which includes index.html, wont show index.html, instead it would…

### CASE-10276 · Uncaught TypeError: $(...).datetimepicker is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `Uncaught TypeError: $(...).datetimepicker is not a function` **If the current behavior is a…

### CASE-10277 · Can't use AggressiveSplittingPlugin split code run well in html
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After I use `AggressiveSplittingPlugin` split big chunk into small chunks, and edit…

### CASE-10278 · Webpack not calling hooks in the right order?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug/feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When writing a plugin and using `compiler.hooks` or `compilation.hooks`, hooks like…

### CASE-10279 · Ensure that runtime source code stays in ES5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature for test infrastructure <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** CI doesn't warn you when using post-ES5 stuff in runtime code. **If…

### CASE-10280 · optimization.sideEffects = true causes issues with local CSS
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `optimization.sideEffects = true` like in `mode: "production"`, local (not from…

### CASE-10281 · optimization.splitChunks.chunks = 'all' has error in node env
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** throw error: TypeError: Cannot read property 'call' of undefined code line:…

### CASE-10282 · Error during loading module: TypeError: Cannot read property 'includes' of undefined (Windows)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** import() does't work with webpack alias on Windows OS **If the current behavior is a bug,…

### CASE-10283 · option to proxy optimization.nodeEnv to let ancestor define the NODE_ENV
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** - Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** process.env.NODE_ENV defaults to production and its not possible to let it be…

### CASE-10284 · bundle file is not shown.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'm not sure this is bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I would like to show output file. **If the current behavior is a bug,…

### CASE-10285 · Provide a way to pass options to webpack-composed plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** if `mode` is set to `"production"`, there's no (documented) way to instruct webpack to pass…

### CASE-10286 · Provide default Webpack.run() callback function.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Must manually write a callback function. **If the current behavior is a bug, please provide…

### CASE-10287 · ModuleNotFound error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Current published webpack 3.11.0 generates the following error when used together with…

### CASE-10288 · React - Module parse failed: You may need an appropriate loader to handle this file type.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> - **Webpack Version: "^1.12.12"** <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** - I want help in my webpack.config.js. I want to know that is there something wrong in my file. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> - I asked on **webpack Gitter** but no one replied. That'w why I am asking…

### CASE-10289 · ContextReplacementPlugin causes secondary/repeated module build in watch mode.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ContextReplace seems to cause duplicate (Wasted) rebuilds in watch mode. **If the current…

### CASE-10290 · webpack3/4 only emits files with 2 or more dynamically added entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm currently writing a plugin that needs to dynamically add entries to webpack, During…

### CASE-10291 · ProfilingPlugin errors when user is loading JSON.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If you use the `new webpack.debug.ProfilingPlugin` available in v4, and you are…

### CASE-10292 · Expose webpack version in the `compiler` object passed to plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *feature* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When writing a plugin whose goal is compatibility with both the legacy and webpack v4…

### CASE-10293 · WebPack bootstrap throws undefined error when loading specific chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, bootstrap
- **Signals**: 👍2 💬6 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We are currently injecting multiple webpack modules javascript projects into our app. The issue…

### CASE-10294 · configurable sourceURL to avoid chromium cross-origin policy
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chromium, chrome, webpack
- **Signals**: 👍5 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As this [Issue]([link] tool]-dev-server[ref]) describe, Chrome's native Promise global…

### CASE-10297 · Support logging statements for sourcemaps
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Building a large codebase, sourcemaps do not provide any console logging to show that the…

### CASE-10298 · [Feature] allow resolution of async loaded external dependencies in runtime
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬6 · closed
- **Excerpt**: I understand this request is out of mainstream usage of webpack, but I would grateful, if there is small chance that it would be evaluated. <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will…

### CASE-10299 · Webpack doesn't include AMD module dependencies if it uses an arrow function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If an AMD module is defined like this: ```js define(require => { const dep = require('dep');…

### CASE-10300 · es2015 modules take much longer to rebundle than commonjs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'm not sure if this is a bug or intended behaviour, but it was very surprising to find rebuild times halved by using commonjs versus es2015. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10203 · Crash with multiple targets
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: I have a `webpack.config.js` with multiple targets [as described here]([link]), for building a bundle for `electron-main` and `electron-renderer`. The final export is: module.exports = [mainConfig, rendererConfig]; If I set it to either config individually, e.g. module.exports = mainConfig; then it works perfectly. The output is generated in the correct directory, and Webpack prints some stats at the end. However if I export both configs in an array, then Webpack seems to crash! This is the full output I get: ``` $ node_modules/.bin/webpack-cli Starting type checking service... $ ``` As far…

### CASE-10296 · Stats.toJson() is taking a lot of the build time on incremental builds (3sec+)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, webpack
- **Signals**: 👍0 💬6 · closed · labels: status: stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** During incremental build, the Stats.toJson() takes 3s+ (out of 10s) to do it's thing. See profiler picture below. ![image]([link]) Attached CPU profile from chrome dev tools as well. [CPU-20171206T171932.zip]([link] tool]/files/1537455/CPU-20171206T171932.zip) The time taken seems to be in the area of the code guarded by "showChunks" and "showModules". Also, setting the stats options to disable stuff on the webpack config does not seem to make any difference. **If the current behavior is a bug,…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10207 · Output IIFE not working
- **Principles**: P-A3, P-H1 · **Env**: opera, webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: # Bug report **What is the current behavior?** Setting output mode to IIFE doesn't work. It creates a compilation error. ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** ``` module.exports = { entry: 'index.js', output: { path: '/dist', filename: '[name].bundle.js', publicPath: '/', iife: true } }; ``` **What is the expected behavior?** I expect Webpack to put my bundle inside my `dist` folder and have this bundle wrapped in a self called function. **Other relevant information:** webpack version: **4.39.3** Node.js version: **12.14.0** Operating…

### CASE-10252 · extract mutiple js files from node_modules
- **Principles**: P-A3, P-H1 · **Env**: webpack, vue
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I have a project which created by vue-cli2.0 and has multiple pages. Each page has imported the module vue and vue-router, some of these pages import other module, like vue-lazyload, vue-awesome-swiper or picker. Now I update my project from webpack3 to Webpack4. I encountered one issue. I want to extract 'vue' and 'vue-router' module into vendor.js and extract other modules into its seperate js file. But in…

### CASE-10254 · Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
- **Principles**: P-A3, P-H1 · **Env**: webpack, react
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: # Bug report ``` WARNING in ./node_modules/bin-wrapper/index.js 5:34-41 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted @ ./node_modules/pngquant-bin/lib/index.js @ ./node_modules/pngquant-bin/index.js @ ./node_modules/imagemin-pngquant/index.js @ ./node_modules/image-webpack-loader/index.js @ dll reactBoilerplateDeps WARNING in ./node_modules/execa/node_modules/cross-spawn/index.js Module not found: Error: Can't resolve 'spawn-sync' in '/home/arindampradhan/Bitbucket/website_v3/node_modules/execa/node_modules/cross-spawn' @…

### CASE-10263 · Dynamic Import Json (Splitted Chunk) returns string instead
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: # Bug report **What is the current behavior?** Dynamic Imports with Json's are returning .js files. Added file-loader to preserve the json using the following configuration ``` { test: /\.json$/, type: "javascript/auto", loader: "file-loader", options: { name: "i18/[name].[ext]" }, include: [ path.resolve(__dirname, "../src"), ], }, ``` With this the `.json` keeps intact as shown in the following image: ![capture4]([link]) In the image you can see `i18n.<...>` files being created, it's a proxy to the `.json` files. It contains the following: ``` (window.webpackJsonp = window.webpackJsonp ||…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10228 · Overloading the term "Environment Variable" causing unnecessary confusion
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍8 💬6 · closed · labels: status: stale
- **Excerpt**: # Bug report Webpack **function type** configurations take, as a first argument, a parameter named `env` & the documentation refers to this as ["environment variables"]([link]) **What is the expected behavior?** This parameter is set via [Environment Variables]([link]). **What is the current behavior?** This parameter (`env`) has **nothing to do with environment variables** & is actually set via command line switches. **Why is this a problem?** Reusing a term that's already used in this context needlessly misdirects programmers attempting to understand webpack configuration files, leading to…

### CASE-10274 · process.env.PORT is undefined in CI Build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> I'm in the process of deploying a webpack-supported node.js app to Azure App Service, but I have a problem using ```process.env.PORT``` in the source code. This environment variable is not available during CI Build, and when webpack compiles it becomes ```undefined```. An example: ```const NODE_PORT = process.env.PORT || 3000;``` will become ```var…

### CASE-10275 · The imported variable isn't recognized when is shadowed
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The imported variable isn't recognized when is shadowed. **If the current behavior is a bug, please provide the steps to reproduce.** `src/index.js` ```js import foo from './foo'; function bar() { console.log( foo ); for ( const foo of [ 1, 2 ,3 ] ) {…

### CASE-10295 · EnvironmentPlugin Handles Bracket Notation Inconsistently
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍4 💬6 · closed · labels: status: stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Using bracket notation works when using a string directly (i.e. `process.env['TEST_ENV_VAR']`). It does NOT however work when using a string accessed from an object. See the following example: ```js const stringMap = { someString: 'TEST_ENV_VAR' } process.env['TEST_ENV_VAR'] // Variable is defined process.env[stringMap.someString] // Variable is undefined ``` **If the current behavior is a bug, please provide the steps to reproduce.** 1. Add an env var via configuration named `TEST_ENV_VAR` (any…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10257 · import node_modules module ,Error: Can't resolve (Window10, Mac normal)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ios
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: # Bug report ```js // index.js import axios from 'axios' console.log('index:Promise',typeof Promise) ``` Module not found: Error: Can't resolve 'Promise' in node_modules/axios/lib/core/Axios.js index.js have Promise, Axios.js not Promise. Unless axios is also processed by babel, otherwise it will be given an error. ```js babel: { plugins: [ require.resolve('babel-plugin-syntax-dynamic-import'), [ require.resolve('babel-plugin-transform-runtime'), { helpers: true, polyfill: true, regenerator: true, moduleName: path.dirname(require.resolve('babel-runtime/package')) } ],…

