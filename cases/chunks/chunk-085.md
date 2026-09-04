# Case Chunk 085 — Round 85

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9401 · Inside require.ensure, using require with chained property causes dependencies to be added to wrong chunk
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬15 · closed · labels: webpack-5
- **Excerpt**: # Bug report _EDIT: originally thought this happened with TypeScript dependency but that's not the case, so updating description._ **What is the current behavior?** When using `require.ensure` along with a specified chunkName to require code where a chained property reference is used (see below), the dependency module will not get added to the specified chunk, but instead to the chunk of the caller. This massively breaks lazy loading behaviour in our code base. An example of what is meant by "chained property reference" can be seen here. Anything where there is a chained reference/call…

### CASE-9411 · Webpack issues in splitchunk with setup of micro front end (using ESI)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: edge, webpack, react
- **Signals**: 👍1 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report I am currently having below micro front end setup using akamai's <esi> tech for the composition of page: ![Architecture]([link]) where the content node app serves SSR with vendor & client bundles (full-fledged). ESI fragments: header/footer served from node js apps with external dependencies (react, react-dom etc) Getting below error when ESI apps using splitchunks & loadable apps for lazy loading ```…

### CASE-9435 · error:'output.filename' is required, either in config file or as --output-filename"
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** 1.config webpack like this: ![image]([link]) 2.run webpack 3.it got an error like above **What is the expected behavior?** no error thrown **If this is a feature request, what is motivation or use case for changing the behavior?** no

### CASE-9458 · Cache failed with Yarn 2 PNP
- **Principles**: P-A3, P-H1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report **What is the current behavior?** ``` <w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Managed item /Users/xxx/.yarn/unplugged/typescript-patch-ba0dbfd217 isn't a directory or doesn't contain a package.json <w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies ``` The contents of the folder are as follows: ![image]([link]) **If the…

### CASE-9478 · Image files required through url-loader/file-loader are corrupt
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: I'm trying to require image files: ``` javascript require('../images/marble.jpg') ``` My loader configuration looks like: ``` javascript test: /\.(jpg|png)$/, loader: 'url-loader', query: { limit: 8192, name: 'images/[name].[ext]' } ``` When I use image files (both png and jpg) over the limit, they are copied incorrectly. The output files are much bigger than the originals, and they are no longer correctly formatted images. They are still binary files, though, so it is difficult to tell what's going wrong. (Images below the limit work fine.) For example, I'm using a jpg that's 61.9kb. the…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9402 · Warning from PackFileCacheStrategy: Serializing big strings (747kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The same warnings occur multiple times when compile is finished. I add `console.trace()` as [link] mentioned. ``` [webpack.cache.PackFileCacheStrategy] Serializing big strings (361kiB) impacts…

### CASE-9403 · Module Federation with Library Type Module (ESM) is not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When setting ``` new ModuleFederationPlugin({ name: "app1", filename: "remoteEntry.js", library: { type: "module" }, remotes: { app2: "[link] }, exposes: { "./Button": "./src/Button", } }) ``` in…

### CASE-9404 · Error in multithreading with wasm-pack and webassembly rust
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬15 · closed · labels: webpack-5/area: wasm
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When compiling [link] via `(p)npm watch` using webpack 5.49.0 and the latest rust and the rust flags `-Ctarget-feature=+atomics,+bulk-memory,+mutable-globals`, I get this error: ``` webpack compiled…

### CASE-9405 · Any file js, that has an "assert" string in it, throws an error.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After i removed the `package-lock.json` and reinstalled i got this error. **If the current behavior is a bug, please provide the steps to reproduce.** It is a big project, i can't reproduce, but…

### CASE-9406 · WP5: Unexpected lazy element in stream
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** 1. enable persistent cache in webpack config 2. use webpack in custom dev server when calling webpack(config), throw error `Unexpected lazy element in stream`. i found the same issue but closed.…

### CASE-9407 · Failure to load loader from a scoped package when using pnpm
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using a loader from a scoped package (`@<scope>/<package>`) through `pnpm`, the system will resolve the correct path, but then fail to find the module for usage as a loader: ``` Error: Cannot…

### CASE-9408 · __webpack_require__.d is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a big/medium sized project using webpack 5.36.2. just migrated from webpack 4.44.2. which worked fine for my team but the speed improvement between those two versions is just insane. Thank…

### CASE-9409 · installed webpack-cli will output a error while process exit
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬15 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report When webpack is installed but webpack-cli is not . After put yes to shell, at last it will install webpack-cli ,but still output an error to shell . <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ➜ react-babel-study npm run test > [email] test…

### CASE-9412 · dynamic import for chunk in node_modules is not working as expected
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍5 💬15 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When _Project B_ imports _Project A_ from `node_modules`, and _Project A_ uses dynamic import/lazy loading to load some part of itself as required, the resolution fails on _Project B_ (webpack in…

### CASE-9413 · Stats: RangeError: Expected Area/Location(/Location)* for time zone, got CET
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬15 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `timeZone` = **CET** throws RangeError. **If the current behavior is a bug, please provide the steps to reproduce.** 1. set the OS timezone to `CET` 2. run webpack **Error Log:** ```sh webpack…

### CASE-9414 · Webpack 4.40.2 can't parse class properties
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack fails with error: ``` ERROR in /var/app/src/util/bunyan/logstash.js 42:8 Module parse failed: Unexpected token (42:8) You may need an appropriate loader to handle this file type. | | let…

### CASE-9415 · Webpack sourcemaps do not work well with ES6 imports (repost)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍13 💬15 · open
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This is a repost of [ref], which was closed due to inactivity. Current behavior is that sourcemaps do not work well with ES6 imports. Example: `import { printToConsole } from './util';` becomes…

### CASE-9416 · `config.module.rule[].resolve` didn't merge with `config.resolve`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ### config.module.rule[].resolve not merge with config.resolve I'm using the `resolve` option in `config.module.rule[]` , because it can be work with `include` option. **If the current behavior is a…

### CASE-9417 · Got a invalid JSON file with the webpack.DllPlugin when there are many entry points
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Recently, Migrating webPack version from 3.10.0 to 4.17.2. I want to make a DLL file for my project, but then I got a error JSON file with `webpack.DllPlugin`, it only occurred when I use the…

### CASE-9418 · Split chunks are not being loaded in the webworker target
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The chunks are not imported (no occurrences of importScripts in entry chunks) so an error is thrown: ``` Uncaught TypeError: Cannot read property 'call' of undefined worker-a.js:20…

### CASE-9419 · ProfilingPlugin output file crashes Chrome devtools
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍9 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After running ProfilingPlugin and dragging the events.json file into Chrome devtools Performance tab, devtools crashes and closes after "Processing profile..." This seems to happen on larger builds…

### CASE-9420 · --progress cause console to mess around
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I set the --progress flag, it start to output bundling info in console, but it doesn't stop at a place, instead it run across the screen and mess around. Like this: ![image]([link]) <!-- "It should…

### CASE-9421 · Watch Mode re-emitting/re-building untouched files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬15 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In Watch Mode, using ExtractTextPlugin/SASS-Loader in a multi-entry context, and editing a JS…

### CASE-9422 · link in sample page leads nowhere -> "move-to-parent "
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I see a link but it leads nowhere **If the current behavior is a bug, please provide the steps…

### CASE-9423 · Apparent bug when using DefinePlugin with module.hot.accept
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `module.hot.accept()` causes an error to be thrown when used in conjunction with…

### CASE-9424 · splitChunks not working as expected
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using splitChunks, if dealing with a simple project it's working but in more complexe…

### CASE-9425 · Allow specific entrypoints in `splitChunks.chunks` option
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` configuration.optimization.splitChunks.chunks should be one of these: "initial" |…

### CASE-9426 · Exporting JS from an inline loader that consumes a JSON file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug (though i might just need to set a property somewhere - couldn't tell from the docs. I suspect this is related to natively supporting JSON modules now.) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or…

### CASE-9427 · Watch bug
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> BUG <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Ok perhaps i am doing this wrong as i am new to webpack but surely i cant be the first person to try this. When i run webpack with the --watch option, it seems to start the watching of…

### CASE-9428 · Find and replace referenced to modules error. modulesWithInfo not find referencedModule
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` TypeError: Cannot read property 'type' of undefined at getFinalName…

### CASE-9429 · sourcemap collision when building as a library
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This happens when you have multiple webpack builds that integrate at runtime. For instance, I have…

### CASE-9430 · Webpack import cannot be caught
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, if you dynamically call the import function and you are offline, the catch function…

### CASE-9431 · Babel Transform Runtime doesn't seem to work with Webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using webpack and babel's transform-runtime, I'm unable to use `exports *`. **If…

### CASE-9432 · that myloader run this.callback is undefined in myloader.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I think it's bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I want to develop a loader , but I can't invoke _**callback**_ of loader API .…

### CASE-9433 · How to force webpack not to use eval in production
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Baiscally a *question*, but it might be a bug, I'm not sure. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm having the [csp]([link]…

### CASE-9434 · When using `--optimize-minimize`, webpack ignores uglifyPlugin's `mangle: false` option.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using `--optimize-minimize`, webpack ignores uglifyPlugin's `mangle: false` option. **If…

### CASE-9436 · Bug with file-loader and dev server ?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬15 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When loading fonts using the file-loader and WebPack 2.2, some name patterns don't…

### CASE-9437 · Refactor use of forEach to for -- provides 10x performance
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬15 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** As per @user tweet ([link]) it has been brought to attention that there are some rather obvious performance gains (upwards of 10x) when using `for` over `for-of` and `forEach` <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain…

### CASE-9440 · Asset module binary files are stored in webpack cache
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · open · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Currently asset modules are stored in webpack filesystem cache, seemingly multiple times per asset, increasing the cache size significantly. <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Asset modules are cached in cache packs,…

### CASE-9441 · Entry module isn't executed when targeting webworker with a runtime chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When targeting `webworker` with a runtime chunk, the entry module isn't executed unless it has a dynamic import. From some debugging, it seems that the code of each module is wrapped…

### CASE-9442 · Webpack tries to import a chunk that does not exist
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is trying to import a chunk that does not exsit. **If the current behavior is a bug, please provide the steps to reproduce.** I have prepare a repo for reproducing it: - Clone [link] - Run…

### CASE-9443 · Compilation Error while processing magic comment should not be downgraded to warning
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When building a project that contains an invalid webpackChunkName (eg. `/* webpackChunkName: foo */) the compiler emits the message ``` Compilation error while processing magic comment(-s): /*…

### CASE-9444 · Modules imports for side effects from barrel files are not included in bundle
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have a `index.ts` which imports 2 modules (`abstract-control.ts` and `abstract-control.directive.ts`) for side effects, and exports another module (`custom-control-status.directive.ts`) therefore…

### CASE-9445 · in-operator broken; `"property" in object` ALWAYS gets inlined as true
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, webpack
- **Signals**: 👍10 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack v5 incorrectly evaluates & bundles `"property" in object` as `true`, when `object` imported from a different file, even if the property is not present in the object (e.g. `"doesNotExist" in…

### CASE-9447 · Error: url.replace is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report yarn start and getting error . Same error with css plugin, So I think if this error happens not just in html webpack plugin then it can be related to Webpack [link] <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![image]([link]) **If the current…

### CASE-9448 · Byte order marks included in output file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> When running on Windows and when the webpack mode=development byte order marks from the source files are copied to the output file. This results in broken Javascript. This was reported a few years ago here [link] tool][ref] and was…

### CASE-9449 · Webpack 5 uses dramatically more memory than Webpack 4
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We’ve been unable to migrate Zulip from webpack 4 to webpack 5 due to an enormous memory usage regression. Memory usage is important to us because many of our users are on VMs with just 2 GB RAM. In…

### CASE-9450 · Resolve alias fails - "Module not found: Error: Can't resolve"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi, I am using webpack 5 via nextjs and need to resolve an import with an alias. However it fails. Here is the config, with two different options. Both resulting in different errors. It seems Option…

### CASE-9451 · Dynamic expressions not working with new URL(.., import.meta.url)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍3 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When a URL is created with a dynamic expression, webpack does not transform it: ```js const language = detectVisitorLanguage(); const url = new URL(`./locale/${language}.json`, import.meta.url);…

### CASE-9452 · Webpack 5 ModeFederation error when shared package version is not in semver
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5/help wanted/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** One of our packages has version 'dev' set in package.json as it is internal not released yet package. ```json .... "dependencies": { "{PACKAGE_NAME}": "dev", } .... ``` When I try to configure…

### CASE-9453 · Uncaught SyntaxError: Invalid or unexpected token
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> ![image]([link]) my webpack config ``` new ModuleFederationPlugin({ name: "ahas_sentinel", library: { type: "var", name: "ahas_sentinel" }, filename: "remoteEntry.js", remotes: { ahas_switch: `ahas_switch@${config.output.publicPath}remoteEntry.js`, }, exposes: { "./routes": "./routes.tsx", }, shared: { ...deps, }, }) ``` * [x] webpack-5

### CASE-9454 · Randomly dropping CSS modules from entrypoint on watch recompilation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** First compilation always works. However, during development in *watch* mode, subsequent recompilations drop other included modules from the final output. When modifying `app.less` in development,…

### CASE-9455 · FileSystemInfo can not createSnapshot with symbol link
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I install deps with [npminstall]([link])(it can install faster), but the file tree in `node_modules` is special bacause npminstall install pkgs with symbol link to download and write less files. The…

### CASE-9456 · resolve.extensions not working for files different from js, jsx
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [link] ```extensions: ['.jsx', '.js', '.styl', '.svg']``` For example, i have folder with ```done.svg, index.jsx, styles.styl``` files. Importing svg file w/o extension in index.jsx file -…

### CASE-9457 · webpackIgnore: true is ignored, dynamic import/require still processed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬14 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamic require gets parsed that isn't supposed to because I marked it with the `webpackIgnore: true` comment based on what I see here: [link] tool][ref]/files **If the current behavior is a bug,…

### CASE-9459 · Webpack analyses dependencies tree before applying webpack.DefinePlugin variables and minimizing code
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have define a constant in my config ```json new webpack.DefinePlugin({ "__PROD__": true, }), ``` and use it in my code ```js if (!__PROD__) { const myObject = require('my-package'); .... } ```…

### CASE-9460 · Update acorn in webpack 4
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍49 💬14 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> [link]

### CASE-9461 · HotModuleReplacementPlugin occasionally not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After webpack detect changes, it produce new bundles, but it won't call the compiler done hooks.And hmr doesn't work correctly. **If the current behavior is a bug, please provide the steps to…

### CASE-9462 · Deprecated <script charset="utf-8">
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Dynamically added scripts (via JSONP) contain `charset` attribute but it is deprecated ([check MDN]([link])). **If the current behavior is a bug, please provide the steps to reproduce.** 1. Use any…

### CASE-9463 · webpack child compiler does not perform any compilation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I created `childCompiler` at `parentCompiler.hook.make` stage and I called `runAsChild` at `parentCompiler.hook.emit` stage. `childCompilation.assets` are nothing. I do not see any compilation.…

### CASE-9465 · ProfilingPlugin crashes with devserver and in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬14 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using ProfilingPlugin and run webpack in `--watch` mode or devserver, following error is thrown: ``` 98% after emitting(node:79437) UnhandledPromiseRejectionWarning: Error…

### CASE-9466 · contenthash is inconsistent while build on multi machine
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** we have deployed our webapp via two servers , index.html and static files are build and deployed seperately.when we apply the contenthash of webpack4.29.6, we found that the content hash of vendors…

### CASE-9467 · Prefetched chunks ignore __webpack_public_path__ value
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍15 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When marking a chunk with `/* webpackPrefetch: true */` the value of `__webpack_public_path__ ` is ignored and the value specified in `webpack.config.js` or the default is used instead. This is not…

### CASE-9468 · Webpack can only compile a simple setup with Fontawesome SVG icons in development mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack can only compile a simple setup with Fontawesome SVG icons in ```development``` mode. In ```production``` mode the compilation never finishes, there is no log output, the node process spikes…

### CASE-9469 · Documentation should be explicit about the default configs for development and production modes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *documentation* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I've spent quite some time trying to figure out what is the exact configuration…

### CASE-9470 · Synchronously importing wasm modules in the main chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍66 💬14 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently when a wasm module is imported like: ```js import { foo } from './foo.wasm'; // ...…

### CASE-9471 · Webpack 4: include UglifyJsPlugin under the production mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `mode: 'production'` in webpack 4 doesn’t enable the minificator. The code with `mode:…

### CASE-9472 · Webpack const isWin is not compiled to var
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack compiles the bundle and adds this line of code: `/* WEBPACK VAR INJECTION…

### CASE-9473 · Unexpected token stopped deploying wepback.js
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug **Link:** [Stackoverflow question]([link]) **What is the current behavior?** Yes **If the current behavior is a bug, please provide the steps to reproduce.** Deployment <!-- A great way to do this is to provide your configuration via a GitHub gist. --> <!-- Best provide a minimal…

### CASE-9474 · ES6 Refactor
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Not all `webpack@user` things use ES6 syntax as appropriate. **If the current behavior is…

### CASE-9475 · path.parse method does not get included when bundling for target:web
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> **What is the current behavior?** For `target:web` If a module is using `import { parse } from 'path';`, It will fail on the client since it won't be sent/mocked. **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub gist. --> Just…

### CASE-9480 · ES module bundled library using dynamic import + publicPath does not work with ES module bundled app
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Here's an reproduction: [link] Seems like webpack fails to load dynamic imports from nested bundles if they point to a dynamic path (custom public path, or a CDN for example) **If…

### CASE-9481 · FlagDependencyExportsPlugin is slow with large JSON imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Projects importing large JSON files take multiple seconds to build, even incremental builds in watch mode. Most of the time in incremental rebuilds is spent in…

### CASE-9482 · License scan badge shown as failing
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [link] tool] - license badge is self-reported as failing **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your…

### CASE-9483 · Web Workers in a project with `experiments.outputModule = true` call `importScripts` despite being loaded with `{type: "module"}`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In a project with `experiments.outputModule = true`, the following code: ```js // main code new Worker(new URL("<worker path>", import.meta.url)) ``` ```js // worker code import {…

### CASE-9484 · Webpack 5 LoaderContext: `addContextDependency` causes loader to rerun once after any change in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> Our project relies heavily on custom 'heavy' loaders, and fast compilation is crucial. In watch mode, every loader that utilizes `addContextDependency` reruns one more time after any project change, leading to longer build times. Trying to find a solution to minimize the re-running of these loaders and improve watch mode performance. # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!--…

### CASE-9485 · Preloading modules with magic comments does not result in modulepreload injection
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> Webpack magic comments do not inject the correct HTML syntax for preloading modules. **What is the current behavior?** Preloading a module results in the following HTML injection: ``` <link rel="preload" as="script" href="[link]>…

### CASE-9486 · Require.resolve not resolving for target:node bundles
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** My goal is create a standalone bundle. (Optimization, tree shaking whatever doesn't matter) Source code has non-standard/unusual coding (for ex. require(require.resolve) instead of require) I think…

### CASE-9487 · Module Federation eager shared libs break anytime a remote build is requested from a host build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Module Federation eager shared libs break anytime a remote build is requested from a host build **If the current behavior is a bug, please provide the steps to reproduce.** example: [link] 1. create…

### CASE-9488 · Dev server compiles twice in VSCode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `webpack-dev-server` (via `webpack serve`) compiles twice on every save in VSCode. This doesn't happen when using an other editor such as Sublime. **If the current behavior is a bug, please provide…

### CASE-9489 · Async modules not resolved correctly with module federation
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬13 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** async modules (e.g. using top-level-await) are resolved into promise by Module Federation **If the current behavior is a bug, please provide the steps to reproduce.** [link] Repo above is two…

### CASE-9490 · Using ProgressPlugin with MiniCssExtractPlugin causes FS cache pack to be invalidated
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It appears that when using `ProgressPlugin`, `MiniCssExtractPlugin` and File System cache, the first cache pack gets invalidated with the following reason `Pack got invalid because of write to:…

### CASE-9491 · webpack should not warn import usage, when import is unreachable (e.g. guarded by `if` statement)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍52 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bundling ```js import * as React from "react"; if (React.useId !== undefined) { // do something with React.useId } ``` will currently warn with `export 'useId' (imported as 'React') was not found in…

### CASE-9492 · webpack5 upgrade find a Lot of error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** recently, i try to update the webpack version from 4 to 5. All configuration not change(except the webpack change docs told me what property should I remove or change) But when I run my project, I…

### CASE-9493 · processContextHashSnapshot(path, tsh.hash) throws error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running `npx next build` Causes the following error: `info - Creating an optimized production…

### CASE-9494 · BuildCycleError with a module blocking itself
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: DISCLAIMER: I don't have a minimal reproduction example, I only have this issue in a big project which I can't share. I understand that the issue might be closed because of this, but maybe you'll help me to understand if it's even a bug of webpack <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will…

### CASE-9495 · Hot only HMR failed to work in 5.48.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR fails to work **If the current behavior is a bug, please provide the steps to reproduce.** Open [x.zip]([link] tool]/files/6937822/x.zip) and follow reproduce steps in `README.md` <!-- A great…

### CASE-9496 · ENAMETOOLONG when emitting HMR chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬13 · closed · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In a complex project we are applying multiple loaders - everything works as expected, however when a HMR build triggers the emitted `hot-update.json` file has a too long name. ``` [webpack-cli]…

### CASE-9497 · Cannot resolve 'main.js' in /dir
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack reported it cannot resolve 'main.js' in folder /x/y although the file was present. After changing entry:'main.js' to entry:'./main.js' everthing worked fine. **If the current behavior is a…

### CASE-9498 · watchOptions.ignored RegExp doesn't seem to work in Webpack 5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Files matching `RegExp` set to `watchOptions.ignored` is not ignored and triggers rebuilds. **If the current behavior is a bug, please provide the steps to reproduce.** Clone this repo: [link] Start dev server as instructed in README.md Change file `ignored.ts` <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most…

### CASE-9499 · Initial vendor chunks not respecting minSize
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Changing minSIze to 520KB generates synchronous ( initial ) vendor chunk of size 517KB. **If the current behavior is a bug, please provide the steps to reproduce.** I have two entry points with…

### CASE-9500 · App with Module federation doesn't load all scripts
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** There are a few apps configured with ModuleFederationPlugin: - main (loads one component from i_service and one component from b_service) - i_service that exposes one component to main app -…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-9410 · Eval sourcemaps truncates [] characters and everything in-between
- **Principles**: P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: Raised from [link] ## bug Eval sourcemap doesn’t seem to support [] characters in the sources property. These characters get truncated and this causes nextjs to break. ## To Reproduce 1. Clone next.js and go to [link] (master branch or 9.5) 2. install dependencies, then run `yarn|npm run dev` 3. go to localhost and click "first post" 4. Now go into the `.next` folder, server -> pages -> post -> [id].js 5. Search for `/***/ "./pages/post/[id]/index.js":` 6. Select the base64 content and run `pbpaste | base64 -D` on the command line 6. inspect the JSON output. ```json…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9438 · Cheap source maps do not work with UglifyJsPlugin
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 1.13.1 **Please tell us about your environment:** OSX 10.11.5 **Current behavior:** Source maps either error or generate empty files when using UglifyJsPlugin and `cheap` inside `devtool` **Expected/desired behavior:** `cheap` variants generate correct files when using UglifyJsPlugin **To Reproduce:** 1. Clone [link] 2. Change config to [link] This is what I get for different `devtool` options running webpack: 1. `source-map` - works 2. `cheap-source-map` - Error: Failed to parse SourceMap 3. `cheap-module-source-map` - No error, but…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9439 · Uncaught TypeError: _angular2.default.module is not a function when enable resolve.alias
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: angular, webpack
- **Signals**: 👍0 💬15 · closed · labels: status: stale
- **Excerpt**: well, this is pretty critic to me, I was trying to optimize the bundle by letting webpack to use the minified versions of the dependencies in development to make the rebundling go as fast as possible. ``` javascript var path = require('path'), webpack = require('webpack'), node_modules = path.resolve(__dirname, 'node_modules'), pathToAngular = path.resolve(node_modules, 'angular/angular.min.js'), pathToAngularAnimate = path.resolve(node_modules, 'angular-animate/angular-animate.min.js'), pathToAngularAria = path.resolve(node_modules, 'angular-aria/angular-aria.min.js'),…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9446 · publicPath escapes '@' character while emitting css files
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale/webpack-5/dependencies
- **Excerpt**: # Bug report Hi, I'm developing chrome extension and in order to use images in CSS styles i need to set `pubicPath` to `chrome-extension://__MSG_@@user/` ([see why]([link])). **What is the current behavior?** For unknown reason CSS files are generated like this: ```css body { background: red; background-image: url(chrome-extension://__MSG_%40@user/895c2722a512d5b2e333.png); /* ^^^ */ } ``` **If the current behavior is a bug, please provide the steps to reproduce.** I prepared [repository]([link]): ```shell git clone [email]:jedrzejowski/my-issue-3.git webpack-issue-XXX cd webpack-issue-XXX…

### CASE-9464 · Error "ReferenceError: can't access lexical declaration `XXX' before initialization" when loading a webpack-ed app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, webpack
- **Signals**: 👍3 💬14 · closed · labels: status: stale
- **Excerpt**: # Bug report **What is the current behavior?** When loading the home page, we get this error in the browser's console: ``` ReferenceError: can't access lexical declaration `reportTrackThreadHeight' before initialization app.js:1 js app.js:1 js TrackThread.js:243 ``` This happens both in Firefox and Chrome (the error message is slightly different in Chrome). This also happens in a dev server, or when building and loading the built app, both in dev and prod mode. **If the current behavior is a bug, please provide the steps to reproduce.** STR: 1. clone [link] 2. switch to branch `webpack-bug`…

### CASE-9476 · Error: Cannot resolve module 'fs' with electron and js
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: Hi all, I'm looking a way to working with electron (as node module ) and **webpack**, but we have some bug with fs module error with it. But i think it's a common pbm for webpack with use of node and js. We have some errore with fs not found : Error: Cannot resolve module 'fs' and i know we can use the node option in webpack.config with fs as 'empty' but in this way the error is now " fs.readFileSync is not a function". Anyone can help us to config webpack for this type of use ? **Context :** You can reproduce it with basic config for webpack and electron. webpack.config.js: ``` let…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9477 · Memory Leak Sadness
- **Principles**: P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍0 💬14 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** [See this plugin]([link]) **Webpack version:** 1.10.x **Please tell us about your environment:** OSX 10.11.6 **Current behavior:** Recurrent builds (webpack-dev-server) with this plugin causes a memory leak which eventually crashes Node.js **Expected/desired behavior:** I would not expect this plugin to introduce a memory leak as I am not retaining any references. Does creating a child compiler cause a leak somehow? Using the following plugin: [link] Which uses the assets output by the webpack build to create a service worker in a template like fashion. ``` new…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9479 · Upgrading from 5.107.2 to 5.108.1 breaks component packages which import styles
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: ### Have you used AI? No ### Bug Description When I upgrade webpack from 5.107.2 to 5.108.1 the component library I'm using (@user/pelagos) no longer displays correctly because the styles are not included anymore. ### Link to Minimal Reproduction and step to reproduce [link] Steps: 1. `npm i` 2. `npm start` 3. In the UI select "See dialog example" 4. Notice it renders correctly 5. Back in the CLI, stop npm 6. `npm up webpack` 7. `npm start` 8. In the UI select "See dialog example" 9. Notice it now renders incorrectly, also notice the styles are no longer applied ### Expected Behavior The…

