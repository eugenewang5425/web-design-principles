# Case Chunk 084 — Round 84

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9301 · Webpack 5 memory leak in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍15 💬20 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I make a change in my web app and Webpack compiles, memory usage seems to increase. If I keep making changes and Webpack keeps re-compiling, memory usage will continue to climb. In a large…

### CASE-9302 · Watcher issue on Window's short paths like C:\PROGRA~1\
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬20 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm an author of the fork-ts-checker-webpack-plugin and I noticed that behavior in my recent PR: [link] When I navigate to a path using MS-DOS compatible path (for example temp directory on GitHub…

### CASE-9303 · Dynamic import from node_modules is not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍9 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I made a vue component package `my-custom-comp`, which contains dynamic import: `my-custom-comp.vue` ``` <template> <component v-if="id && data" :is="`list-${id}`" :data="data" /> </template>…

### CASE-9304 · Module not found: Error: Can't resolve 'aws-sdk' when importing Webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍40 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Importing Webpack into an Express application results in errors being thrown. **If the current behavior is a bug, please provide the steps to reproduce.** webpack.config.dev.js: ```js const path =…

### CASE-9305 · Unable to import WebAssembly modules bigger than 4KB
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When importing WebAssembly modules bigger than 4KB browser throws ``` RangeError:…

### CASE-9306 · Add support for more complex selectors for sideEffects
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack searched for `"sideEffects": false` in package.json to perform the extra optimizations for esm modules. However if `false` is a string, the optimization isn't detected. We should probably (in the case that package authors might mistake this as "false" vs `false`) put the wrong value in, and theres no simple way to detect (as a…

### CASE-9307 · WatchIgnorePlugin useless for files inside a watched directory [ref]
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬20 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I want to open an issue that was previously closed due to inactivity. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Unknown. **If the current…

### CASE-9309 · webpack-dev-server breaks on changing folder structure or renaming files and requires restart
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍24 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** In my opinion this is a bug because it was working in older versions of webpack. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I rename some…

### CASE-9310 · Can watch mode support watching new file automatically?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** watch mode can not support watching new file automatically **If the current behavior is a…

### CASE-9311 · EnvironmentPlugin: destructuring process.env doesn't work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍43 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** report a *bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Destructuring `process.env` doesn't work. `console.log(MY_VAR);` logs `undefined`…

### CASE-9312 · Uncaught SyntaxError: Unexpected token import
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍3 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Bug** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In case of development environment such code ``` if (process.env.NODE_ENV === 'testing') { import('somemodule'); } ``` is transformed by webpack…

### CASE-9313 · Too long build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬20 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Probably it's bug... <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![2017-03-23 16 10 41]([link]) **If the current behavior is a bug, please…

### CASE-9315 · Worker not bundling imported files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬19 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I am trying to load a Worker in the following way: ```ts const url = new URL('./path/to/worker.ts', import.meta.url); const worker = new Worker(url); ``` In the worker file I am trying to do an import: ```ts import { someFunction } from './functions'; someFunction(); ``` If I don't provide `{ type: 'module' }` to the Worker constructor, the import…

### CASE-9316 · Webpack 4.29.4 depends on unpublished [email] via git
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍24 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Latest webpack (4.29.4) pulls in `[email]` using Git. [long]([link]) is still on 4.0.0, so 4.0.1 hasn't been published yet. This mean it is doing so via `git`, which creates a hard dependency on…

### CASE-9317 · define rule.use as a function, loader can't find options with ident
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I define rule.use as a function and returns an array of loaders, but it will crash with this error: error: `Module not found: Error: Can't find options with ident 'ref--xxx'` **If the current…

### CASE-9318 · Uncaught SyntaxError: The requested module '/MyComponent.mjs' does not provide an export named 'default'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍1 💬19 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a React component `MyComponent.jsx` and I try to use webpack to output the component in…

### CASE-9319 · Webpack fails in production mode while running uglifyjs-webpack-plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** **BUG** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Execution fails in production mode while using minimiser (aka uglifyjs-webpack-plugin). If…

### CASE-9321 · Can't find a way to disable WebAssembly parser
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** WebAssembly parser kicks in even when `module.noParse` is set to `/.wasm$/` **If the current behavior is a bug, please provide the steps to reproduce.** Please see this conversation for a deeper context…

### CASE-9322 · Webpack performance budgets and asset size limit warning apply to images
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬19 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The webpack performance budgets and asset limit warning applies to images. ![image]([link])…

### CASE-9323 · npm build fails
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** npm build sends an error ![screen shot 2018-01-16 at 12 33 20]([link]) **If the current…

### CASE-9324 · Cannot get final name for export "default" in "delegated ..." with Webpack 3 scope hoisting
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug report. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This error occured when upgrading to webpack 3 and added scope hoisting using the `new…

### CASE-9325 · It isn't made clear exactly how to use non-javascript webpack configs.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬19 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If your webpack.config.* is in a non-javascript language, webpack will very conveniently…

### CASE-9326 · [Performance] Webpack 2.4.0+ slower than 2.3.x
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍24 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently getting a ~60 second difference between Webpack 2.4.0 and 2.3.3: ``` Version: webpack…

### CASE-9327 · default exports bug
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬19 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Default exports seem to make it hard for webpack to do proper tree shaking. **If the current…

### CASE-9328 · Webpack 2 Dynamic Import degrades build performance (slow) compared to static imports.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬19 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I would like to report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When converting my project's components to dynamically import…

### CASE-9330 · Trying to use mongoose with node-webkit target on Webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webkit, webpack
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: I tried to get an answer on StackOverflow, but nobody seemed to have an idea. So I post this as a bug, since I can't get it to work: I use webpack and target it's build output for `node-webkit`. I want to require the `mongoose` module inside my project to connect to mongodb, but it always states some errors when I try to pack the project: ``` WARNING in ./~/mongoose/~/mongodb/~/mongodb-core/~/bson/~/bson-ext/ext/index.js Module not found: Error: Cannot resolve 'file' or 'directory' ./win32/x64/bson in…

### CASE-9331 · HookWebpackError: Cannot read property 'e' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍18 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> Since we run npm update and got 5.83, build script fail with this error: Creating an optimized production build... Failed to compile. HookWebpackError: Cannot read property 'e' of undefined -- inner error -- TypeError: Cannot read property 'e' of undefined Generated code for…

### CASE-9332 · Maximum call stack size exceeded -> In SourceMapDevToolPlugin/ Tappable
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running the dev-server in live-reload mode and changing files the dev server will immediately die with this stack trace when changing a file. With this stack trace: ``` RangeError: Maximum call…

### CASE-9333 · when request with error(like 404), the script(which created by dynamic import) fires a timeout instead of the onerror
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** About the dynamic import, when the script's(like some js resource in CDN) get an error(like 404 or abort), the webpack made it trigger the timeout logic instead of the onerror logic. So, it will…

### CASE-9334 · Inline loaders are ignore in webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Inline loaders are ignored if webpack configuration has rules for these files. ```ts const testImage = require('!file-loader!./images/test-image.png'); const testIcon =…

### CASE-9335 · Module build failed: UnhandledSchemeError: Reading from "alias:/App" is not handled by plugins (Unhandled scheme).
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack does not resolve path aliases. I am creating a new react app and trying to configure webpack compiler from scratch. The issue happens when running the build command with `webpack -c…

### CASE-9336 · ReferenceError: Cannot access '<something>' before initialization
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍21 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am not quite sure how to describe what the situation actually is, but the bottom line is that in some rare cases importing a module in the wrong order causes `ReferenceError: Cannot access…

### CASE-9337 · `new Worker(import.meta.url)` doesn't work as expected
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I have code like this: ```js new Worker(import.meta.url) ``` where module spawns itself as a Worker when multithreading is enabled. **What is the current behavior?** Webpack transforms `import.meta.url` into a `file:` URI, which…

### CASE-9338 · dependOn with multiple entry points and dynamic imports broken in 5.19.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Getting errors after updating to 5.19.0 `Uncaught ReferenceError: __webpack_require__ is not defined` `Uncaught (in promise) TypeError: c(...).Z is not a function` The compiled code is missing…

### CASE-9339 · [Webpack 5] Reference error: __webpack_require__ is not defined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I would like to upgrade our repo to webpack5. We have custom requires and custom dependency and templates. In webpack4, the dependency could be added without issues. Now though, the compiled code…

### CASE-9340 · Module build failed: Error: Final loader (unknown) didn't return a Buffer or String
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬18 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 5.1.0 throws an error on compile, while webpack 4.44.2 completes successfully: ``` ERROR in #web/bundles/sonatacore/vendor/select2/select2.css Module build failed: Error: Final loader…

### CASE-9341 · Webpack 5 watch mode does not trigger compilation when node_modules file changes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 5 RC 4 in watch mode does not respond to a change in a file in node_modules. Webpack 4 does. **If the current behavior is a bug, please provide the steps to reproduce.** ```bash cd /tmp…

### CASE-9342 · `"sideEffects": false` not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** ```jsonc // package.json { "sideEffects": false, "dependencies": { "webpack": "^4.39.2", "webpack-cli": "^3.3.7" } } ```…

### CASE-9343 · code-splitting of different module versions
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍1 💬18 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> We `import` two mini-apps, both depend upon [`react-intl`]([link]), but each are using different versions of it (which leads to breaking changes) - A: `react-intl`@**^2.7.3** - B: `react-intl`@**^3.1.8** [`SplitChunksPlugin`]([link]) does not seem to be aware of the difference of the two 🤔 It would be great if the official docs would clearly state…

### CASE-9344 · Multiple assets emit different content to the same filename
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack shows a warning when rebuild: > Multiple assets emit different content to the same filename app.js.map **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9345 · output.filename not working if function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬18 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I use a function for `output.filename` it doesn't work for my dynamic imports: they get emitted as `1.js`, `2.js` etc. with identical chunk value (whereas chunk name is correct) In addition…

### CASE-9346 · Import an exception behavior of a module that uses `import()` internally
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍4 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am developing a vue plugin that is built using `@user/cli` 3.0.0-rc.10. Additional features can be loaded via option options when installing the plugin (asynchronously loaded via `import()`). If…

### CASE-9347 · Webpack cannot handle Semantic-UI .css files?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬18 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** Using Webpack, I…

### CASE-9349 · Webpack 4 irregularly spikes CPU at 93% "after chunk asset optimization" during hot reload rebuild, CPU loads ~1.25 cores, sometimes Node dies with out-of-memory error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬18 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 4 irregularly spikes CPU at 93% "after chunk asset optimization" during hot reload…

### CASE-9350 · Parts of async loaded chunk end up in explicit vendor chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬18 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I think this is a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am using an explit vendor chunk, but one part of my app uses the async…

### CASE-9351 · `module.hot.accept(..., () => ...)` is never called
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬18 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The following modules couldn't be hot updated... the only thing that appears to work is if…

### CASE-9354 · Main chunk points to the wrong runtime chunk when using Module Federation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬17 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running the `watch` command, at some point the `runtime-app` chunk referenced in the `app` chunk is different from the one referenced in the `asset-manifest.json`. Since we load…

### CASE-9355 · Massive performance regression on 5.71.0 during initial script execution.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: ios, webpack, mobile
- **Signals**: 👍1 💬17 · closed · labels: status: stale
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Hi, I do not have a minimal repro case yet but just as an fyi, we are seeing a massive regression on our initial script execution when going from webpack version 5.70.0 to 5.71.0. Feel free to close this issue if there is no action to be had but our main bundle went from taking 38ms to execute all the way to 97ms. On mobile iOS, it's even worse. I…

### CASE-9357 · Bundled React library throws Invalid hook call error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, webpack
- **Signals**: 👍0 💬17 · closed · labels: webpack-5/dependencies
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I get the following React error when trying to use my library built with Webpack ``` Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen…

### CASE-9358 · Inverse match pattern in rules not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-B1, P-B2, P-B3 · **Env**: webpack
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Unable to use inverse match pattern in rules <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> ``` { test: /\.(ttf|woff2|woff|eot|otf)$/, use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "fonts/", publicPath: "../fonts/" } } }, { test: /.*webfont.*\.svg$/,…

### CASE-9359 · 5.25.0 has broken my builds
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬17 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I have a Laravel app which uses blade.php for browser-side content, with some small <script> sections using JQuery. JQuery is part of the vendor.js chunk created by Webpack, via Laravel Mix When build with 5.24.4, everything works…

### CASE-9360 · ie 11 silently failing feature after build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬17 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am using a vue, vue cli, and bootsrap-vue in a project. When I run a project in development mode, it is working fine. When I go to build the project a particular feature doesn't work. I have a…

### CASE-9361 · A with webpack v5 bundled unchanged svelte app, does not work anymore
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, svelte
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-9362 · libraryTarget UMD and code splitting
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍26 💬17 · open
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When splitting code in webpack, the chunks are loaded with temporary script tags: ```js…

### CASE-9363 · Context dependencies should support resource queries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬17 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** There is no way to pass a resource query when using context dependencies via…

### CASE-9364 · webpack v3 mangling exports name will break `Array.from` of core-js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍16 💬17 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> ### **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> ### **What is the current behavior?** > (I wanna cry: )The optimization of Scope Hoisting could break core-js `Array.from`.…

### CASE-9365 · Webpack 3 bundle size is larger than Webpack 2.6.1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬17 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The build passes, but fails to concatenate, bundle size is bigger than with 2.6.1 ```…

### CASE-9366 · runtime.js cannot find bundles to require when code splitting among multiple bundles is enabled
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> I have encountered a bug while trying to split code into multiple bundles, while preventing duplication of said code. In other words, I want to create a "main" bundle which is the "true" entry point of the…

### CASE-9367 · @user/helpers is incorrectly removed/tree shaked from the production bundle
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `swc-loader` with `@user/helpers` and mixing ESM and CommonJS it seems that the tree shaking process in webpack incorrectly marks `@user/helpers` as not used. When changing the repro…

### CASE-9368 · `require.context` not parsed in ESM packages
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In packages with `type: "module"`, webpack fails to parse and replace `require.context()` expressions. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Clone [link] 2.…

### CASE-9370 · runtime chunk content is different from build to build, but source code has not changed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: linux, webpack
- **Signals**: 👍1 💬16 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I run two builds from the same git commit hash on different linux machines - it provides me almost the same output, except runtime chunk Example: ``` // first run on machine_1 in CI…

### CASE-9371 · Webpack 5 persistent cache + EnvironmentPlugin: environment variables changing doesn't affect cache.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 5 persistent cache + EnvironmentPlugin: environment variables changing doesn't affect cache. **If the current behavior is a bug, please provide the steps to reproduce.** - make webpack…

### CASE-9372 · Webpack 5 HMR plugin error in runtime.[hash].hot-update.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** i am not sure whether this is webpack-dev-server issue or webpack or something else, however after 1st hot reload happens there is a constant error: ``` jsonp chunk loading:103 Uncaught TypeError:…

### CASE-9373 · Access to real require or real import
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: webpack, electron
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Hello, I can't post on StackOverflow so I ask that here. Is there any way to bypass webpack version of require and use the real require or the real async import that just import js files from random locations? I ask that for the purpose of module based electron application: it is similar to VSCode extension system that can run arbitary JS files…

### CASE-9374 · Library Modules undefined when using splitChunks
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Without `splitChunks` enabled entries have module objects in library as expected, but when `splitChunks` is enabled all keys in the library object are `undefined`. **If the current behavior is a…

### CASE-9375 · Module not execute, no errors, when a certain amount of imports is used
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue, bootstrap
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a VueJS component with 5 imports. The generated `edit.js` file for the specific page we're loading. ```js import Vue from 'PublicJs/vue-bootstrap'; import CvPhotoUploader from…

### CASE-9377 · Can't use `[name]` in `webassemblyModuleFilename`
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍1 💬16 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Trying to use `[name]` in `output.webassemblyModuleFilename` config leads to: ``` ChunkRenderError: Path variable [name] not implemented in this context: ``` <!-- A great way to do this is to…

### CASE-9378 · After change file .js (import (css, less, scss)), webpack result is error.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> - This is my project: [[link]]([link]) - Can someone help me. I really need help. I thank you very much if you support me. **Do you want to request a *feature* or report a *bug*?** - report a bug. **What is the current behavior?** - I'm working on a project boilerplate with webpack (optimized for bundler) but I have a very strange error in during…

### CASE-9379 · Fails to parse BigInteger Literal
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` const bigInteger = 0n; ``` Causes the following error: ``` Module parse failed: Identifier directly after number (0:20) You may need an appropriate loader to handle this file type. ``` Compiling…

### CASE-9381 · Webpack doesn’t work well with wasm modules created with Emscripten
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍46 💬16 · open · labels: area: wasm
- **Excerpt**: # Feature request <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The modularized JS emitted by [Emscripten]([link]) registers a global with a given name that loads the wasm file on invocation, initializes the wasm runtime and returns a [`Module`]([link]). Making it work with Webpack is quite hard as there seems to be interference with Webpack 4 defaults. This is the `webpack.config.js` that I came up with: ```js const…

### CASE-9382 · Webpack4 splitChunks 'all' 'initial' -> bundle.js not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As soon as i am defining splitChunks.cacheGroups.[name].chunks: 'initial' or 'all' the produced…

### CASE-9385 · Webpack no longer supports define correctly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬16 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack no longer appears to support define correctly. **If the current behavior is a bug,…

### CASE-9387 · Lodash is exported to window
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` import lodash from 'lodash'; ``` Open a page in browser, go to console type `window._`. It…

### CASE-9388 · Merge / concatenate JavaScript files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Request a feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack 2 apparently doesn't support this. **If the current behavior is a bug,…

### CASE-9389 · certain complex dependency chains don't resolve
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** in certain circumstances calling `require('stream').Transform` give an object **If the current…

### CASE-9390 · Dynamic expressions for import() are broken
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Per this doc I expect the following code to work, but it throws an error: [link]…

### CASE-9392 · After version 5.78.0, module rules don't seem to apply to resource assets added by a plugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** As of version `5.77.0`, my Webpack plugin was working, but after upgrading to Webpack `5.78.0`, with the same Webpack config, it suddenly broke, and Webpack builds produce a loader…

### CASE-9393 · EvalSourceMapDevToolPlugin with append= false add always source map url
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬15 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** according with documentation [link] append = false the sourceURL should be not be appended instead in the dist/main.js is added sourceURL //# sourceURL=[module]\n//#…

### CASE-9395 · Dynamic expression imports are broken on Typescript 4.9.2 and higher
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: typescript, webpack
- **Signals**: 👍2 💬15 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have encountered the same issue since upgrading to Typescript 4.9.5 with a issue that looks the same as the one discussed here: [link] tool]/discussions/16566. It looks like Typescript 4.9.2+…

### CASE-9396 · devtool:'source-map' not working correctly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I printed some statements in the console and couldn't jump to the source properly.(devtool:'eval-source-map' can jump to the source properly) **If the current behavior is a bug, please provide the…

### CASE-9397 · Treeshaking with side effect free package is unexpectedly slow
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5/webpack-6
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Given that one uses package that has multiple ESM exports, and marked as side effect free, all sub-trees seems to be analyzed or even compiled, which causes great performance loss. Inclusion (or not…

### CASE-9398 · MultiCompiler didn't release memory after one compiler is finished.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬15 · open · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I use MultiCompiler configs. If i run them one by one, Webpack can build them all. ```js const config = {} webpack(config) ``` If i run them together, OOM appeares. ```js const configs = [config1,…

### CASE-9399 · webpack causes ECONNRESET during build when running on a M1 MacBook
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In some of my bigger existing projects using webpack and webpack-dev-server, `npx webpack` and `npx webpack serve` do no longer work as expected since I moved over to my new MacBook Pro (M1 chip).…

### CASE-9400 · HMR is not working for web workers
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬15 · open · labels: status: stale/webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When updating the code loaded by web worker nothing happens. **If the current behavior is a bug, please provide the steps to reproduce.** This is a very simple configuration where HMR doesn't work:…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9308 · Case insensitivity causes builds to fail when run on another platform
- **Principles**: P-F4 · **Env**: windows
- **Signals**: 👍17 💬20 · closed · labels: webpack-5
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature, though if you squint at it, it looks like a bug. **What is the current behavior?** If a user is building their application on a Windows machine and requiring a file with a case mismatch, the build will succeed. Ex: ``` import foo from 'longCamelCasedFilename.js' ``` when the file on disk is actually `longCamelCasedFileName.js`. Now when they try to deploy to a service which builds the project for them on a case-sensitive file system the build will complain about the module being missing. **What is the expected behavior?**…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9314 · Chunk hash are not consistent on different machines
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: When requiring shim for using process in browser, chunk hash variants on different machines. In the module "lib/NodeSourcePlugin", "getPathToModule" method will return an absolute path of node shim. This will cause different results depending on the path where your project exits on different machines. And when webpack injects variable dependencies such as 'require(/path/to/node_modules/process/browser.js)', the expression used to initialize DependenciesBlockVariable is changed, Which makes the hash of chunk changed too ! Is this a bug ? Or feature ? It is so disturbing that same code but gets…

### CASE-9352 · DefinePlugin doesn't work inside React Components
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, webpack
- **Signals**: 👍52 💬18 · closed
- **Excerpt**: Hey there. I have a very strange issue with my build. My global variables replaced by webpack inside "normal" files, but not replaced inside files with react. My config looks like this (it's too big and not interesting): ``` javascript const GLOBALS = { __API__: '[link] __ENV: 'development', 'process.env.NODE_ENV': '"production"' }; const serverConfig = { ... module: { ...config.module, loaders: [ ...config.module.loaders, { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', cacheDirectory: true, query: { babelrc: false, presets: ['react', 'es2015-node5', 'stage-0'], plugins: []…

### CASE-9383 · Allow annotating dynamic import/require calls as non-critical (external)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍2 💬16 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Request a _feature_. **What is the current behavior?** No matter what, if you have an `import` or a `require` call that takes in a variable (instead of a string literal), Webpack will warn that the request of a dependency is an expression. **If the current behavior is a bug, please provide the…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9320 · Dynamic import() error, wrong file path on nested routes
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍9 💬19 · closed · labels: status: stale
- **Excerpt**: # Bug report **What is the current behavior?** Dynamic import `import()` doesn't work on nested routes: the file path of lazy loaded file is not begin parsed correctly. **If the current behavior is a bug, please provide the steps to reproduce.** Here is a simple test repository [test-webpack-dynamic-import]([link]), please read the *README.md* file. **What is the expected behavior?** `import()` file path should not be relative but absolute path, or webpack should automatically rewrite the file path if the file is called from a location different from the root folder. **Other relevant…

### CASE-9329 · `__webpack_public_path__` does not work if entrypoint uses ES6-style imports
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, webpack
- **Signals**: 👍0 💬19 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 1.13.1 **Please tell us about your environment:** Ubuntu 14.04 **Current behavior:** Entrypoint file: ``` __webpack_public_path__ = SETTINGS.STATIC_URL + 'build/' require('navbar/navbar.es6') ``` If I use `import 'navbar/navbar.es6'` instead, the images that are loaded inside of `navbar.es6` (via `import imageName from 'img/filepath.png'`) do not have the public_path prepended to them. When I use the above `require('navbar/navbar.es6')`, it works fine. CommonJS imports work but ES6-style ones do not when dynamically setting…

### CASE-9348 · SplitChunk plugin keeps large dependencies in two seperate chunks.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬18 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** A few large dependencies (slate / react-slate / immutable) shared by two pages are not put in a shared chunk (a large number of dependencies are the same including components). See visualization below: ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** ``` splitChunks: { chunks: 'all', name: false, } ``` **What is the expected behavior?** In my understanding this should not happen by default, so I'd like to see if this is incorrect behaviour. If this is…

### CASE-9353 · Sourcemap from bundle is not utf-8 encoded
- **Principles**: P-A3, P-H1 · **Env**: linux, webpack
- **Signals**: 👍3 💬18 · closed · labels: status: stale
- **Excerpt**: This can be seen in sourcemap ![image]([link]) This is the actual bundle generated ![image]([link]) The letter `å` is wrong. Not sure if it's Webpack's fault or Sourcemap's? Using Linux if that matters. Using `devtool: '#source-map'` This is a letter only used in comments, not actual source, so shouldn't be a real problem.

### CASE-9369 · IE11: syntax error in vendor bundle although target: ["web", "es5"] is used
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: # Bug report **What is the current behavior?** After bundling and testing in IE11 i've encountered this syntax error. (although i don't really get it why): <img width="348" alt="Bildschirmfoto 2021-06-01 um 15 39 21" src="[link]> <img width="995" alt="Bildschirmfoto 2021-06-01 um 15 38 16" src="[link]> **If the current behavior is a bug, please provide the steps to reproduce.** - having a webpack config with target: ["web", "es5"] - using webpack 5 **What is the expected behavior?** Bundling should produce a clean / stable bundle which works in IE11, when "es5" is mentioned as target. **Other…

### CASE-9376 · [HMR] Hot Module Replacement is disabled after v4.40.3
- **Principles**: P-A3, P-H1 · **Env**: opera, webpack
- **Signals**: 👍7 💬16 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report After upgrading from 4.40.2 to 4.40.3 or higher, this comes up. ![image]([link]) As seen in the releases, 4.40.3 fixes an HMR-related issue, but somehow it has also triggered this one. Dowgrading to 4.40.2 resolves the issue. **Other relevant information:** webpack version: v4.40.3 Node.js version: 11.10.0 Operating System: OSX Additional tools:

### CASE-9384 · load chunks with xhr+eval rather than jsonp
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍11 💬16 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature **What is the current behavior?** Webpack creates chunks when using lazy loading for scripts, e.g `require.ensure`, and loads them by adding script src tag to the DOM. **What is the expected behavior?** Allow to load chunks using XHR + Eval as well instead of adding script src to the…

### CASE-9386 · scope hoisting - tried out and bundle gives multiple errors
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Bundle loads.. **What is the expected behavior?** Bundle does not load when adding ``` new webpack.optimize.ModuleConcatenationPlugin(), ``` on the next branch This is against a large 160k line application using es6 modules and quite a few libraries, with 2 bundles code split out. btw the size savings are 17kb out of 1496 kb which is good. Errors are: ![image]([link]) ![image]([link]) ![image]([link]) The project is not open source, so I can't just point you at it, but hopefully the above might…

### CASE-9391 · Module federation prevents to use expose-shared modules as singletons
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · open · labels: status: stale
- **Excerpt**: **a.js** ```js import {c} from './c' export const a = c; ``` **b.js** ```js import {c} from './c' export const b = c; ``` **c.js** ```js export const c = 123; ``` ```js new ModuleFederationPlugin({ name: 'app2', exposes: { './App': './src/App', './a': './src/a', './b': './src/b', }, }) ``` Here is an output after build ![image]([link] tool]/assets/6654581/2631a376-17fe-4a11-b352-78ecdf967247) `c.js` is using by `a` and `d` and was duplicated that is not expected behaviour For example c.js may be some singleton-class but bundler-behaviour prevents it. Is it a bug? Repo [link]

### CASE-9394 · mode: performance regression
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬15 · closed
- **Excerpt**: Looking at the chart here we introduced a performance regression in webpack prod builds. Adding this bug to track this and marking as a priority. ![image]([link] tool]/assets/3408176/cd1f5cef-4e49-4796-8585-ceebe401c021)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9356 · browserslist target throws when Babel can understand it
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome 90, edge 91, firefox 78, opera 76, safari 14, android 91, ios
- **Signals**: 👍0 💬17 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report **What is the current behavior?** Using the following `.browserslistrc` that was generated a few weeks back with `npx browserslist --mobile-to-desktop "> 0.5%, last 2 versions, Firefox ESR, not dead, not IE 11"` throws. ``` and_chr 91 and_ff 89 and_qq 10.4 and_uc 12.12 android 91 baidu 7.12 chrome 90 edge 91 firefox 78 ios_saf 12.4 kaios 2.5 op_mini all op_mob 76 opera 76 safari 14 samsung 13.0 ``` **If the…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-9380 · create-react-app: source generated by webpack source and chrome source doesn't mactch up
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, react, webpack
- **Signals**: 👍5 💬16 · closed
- **Excerpt**: # Bug report **What is the current behavior?** Background: create-react-app was using cheap-module-source-map and it didn't work well with browser breakpoints: [link] it switched from cheap-module-source-map to eval-source-map for 2.1.4 release: [link] This broke the error overlay line number because the source code generated from webpack doesn't match that of Chrome's: [link] **What is the expected behavior?** Ideally eval-source-map should be used in create-react-app but this is a blocking issue. We should be able to matching source code in both chrome and webpack source. Currently webpack…

