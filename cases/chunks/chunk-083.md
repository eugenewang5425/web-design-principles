# Case Chunk 083 — Round 83

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9201 · `module` gets prioritised over `main`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍33 💬29 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `module` entry in `package.json` gets prioritised over the `main` entry (even on Node.js).…

### CASE-9202 · web pack source map not working for some devtool options.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍42 💬29 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Sourcemap is not working for some devtool options. Tested options: **eval:** working…

### CASE-9203 · Webpack 5 only compiles DOM urls, not node urls
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬28 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Node URLs don't seem to get compiled. **If the current behavior is a bug, please provide the steps to reproduce.** Try to load a worker_thread with a node URL. The file won't get compiled correctly.…

### CASE-9204 · inline loader not migrateable to webpack 5 when used in require.context
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬28 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The documentation in [link] to replace inline loaders with Asset Modules does not apply to `require.context`. Specifically, it doesn't seem like I can exclude a source asset from being parsed by…

### CASE-9205 · Using `externals` as `script` generate unexpected code
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: android 36, webpack
- **Signals**: 👍3 💬28 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Resulting bundle contains unexpected non-es5 instruction: `async`/`await`, arrow function; that does not match expected target, e.g., having defaults target `browserslist` with `android 36`, result:…

### CASE-9207 · Webpack 4 chunkhash/contenthash can vary between builds
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬28 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm finding that the chunkhash varies between builds in v4. Using the diff utility between the…

### CASE-9208 · TypeError: Cannot read property 'outputOptions' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬28 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Build fails. ```shell $ webpack --env.app=pdf (node:7276) DeprecationWarning: Tapable.apply is…

### CASE-9209 · Can't create UMD build which can be required by Node
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍63 💬28 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If you require a module in the target output UMD you get this error: ``` ReferenceError:…

### CASE-9211 · webpack tries to resolve `new URL('./', import.meta.url)` to a module and fails or succeeds (both are wrong)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬27 · closed · labels: status: stale/webpack-5/webpack-6
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack's resolution of `new URL(..., import.meta.url)` does something unexpected when the target is a directory, which doesn't correspond to what either the browser or Node will do. For comparison,…

### CASE-9212 · Disk cache + asset module regression in v5.72.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬27 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack throws this error when using asset modules + disk caching: > Error: Cannot read properties of undefined (reading 'get') during rendering of asset…

### CASE-9213 · Async imports' child imports do not end up in async imports chunk
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬27 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Think this might be a bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I asked about this on [Stack Overflow]([link]), but got no answers, so…

### CASE-9214 · Persistent caching errors when a packfile is > 2GB
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F4 · **Env**: webpack
- **Signals**: 👍1 💬26 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a large app in a monorepo. Turning on filesystem caching for the client bundle is fine and shows great speed improvement. With SSR, we have ~100 entrypoints - the first run appears to cache…

### CASE-9215 · webpack serve compiling twice with a specific dependency package.json
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬26 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is compiling the project twice, when running in serve mode, if the project imports a library with the following `package.json` `main` config: ``` "main": "./lib/", ``` **If the current…

### CASE-9216 · Optional chain is incorrectly removed when used on import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍28 💬26 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack incorrectly compiles `x?.value` to `(something).value` when `x` is something that's been imported. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9217 · Watch doesn't work correctly with links
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬26 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack file watcher ignores changes in symlinked files if `resolve > symlinks` options is set…

### CASE-9218 · [Webpack 5 bug, works in 4] exported library in an empty object
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬26 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Exported library is an empty object. **If the current behavior is a bug, please provide the steps to reproduce.** ```js // src/Main.tsx export default { foo: 1 } ``` ```js // webpack.config.js const…

### CASE-9219 · LimitChunkCountPlugin max chunks not working for dynamic import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬26 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When use LimitChunkCountPlugin with dynamic import for multi entry, webpack will generate chunks even set maxChunks = 1. **If the current behavior is a bug, please provide the steps to reproduce.**…

### CASE-9220 · Webpack 4 splitChunks causes reused chunks to not be executed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍32 💬26 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I am working in a complicated app that has a bunch of bundles on every page. Most of these are "global" bundles and appear on every page. So, I have configured webpack to prevent any modules that appear in these bundles from appearing in…

### CASE-9221 · ProvidePlugin injection into .mjs files seems to be broken
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍13 💬26 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug, I think. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** At runtime, a `.mjs` module with injections from `ProvidePlugin` will throw an…

### CASE-9223 · Add semver & changelog generation to webpack & plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬26 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Add [semantic-release]([link]) and [cz-converntion-changelog]([link]) to help…

### CASE-9225 · Circular hash dependency for hashed folder names
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬25 · open · labels: status: stale/webpack-5/help wanted
- **Excerpt**: The same [link] tool][ref] ___ <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** A `Circular hash dependency` compilation error is thrown for hash collisions in folder names. **If the current behavior is a bug, please provide the steps to…

### CASE-9226 · I asked in StackOverflow, in Gitter Webpack and in Discord Electron but got no answer
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-A3, P-H1 · **Env**: webpack, electron
- **Signals**: 👍0 💬25 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I asked an helping request in StackOverflow: [link] in webpack Gitter : ![image]([link]) ![image]([link]) And also in Discord Electron Forum: [link] ![image]([link]) but got no answer, no hints, no help at all. So, being conscious that this is not the right place, I ask here if there is someone who can give me an hand. I'm having this error:…

### CASE-9227 · ModuleFederationPlugin's name may not include dashes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬25 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `ReferenceError: ical is not defined` **If the current behavior is a bug, please provide the steps to reproduce.** `new ModuleFederationPlugin({ name: 'share-ical-link' })` <!-- A great way to do…

### CASE-9229 · Expose the `mode` option for loaders
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬25 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Currently, loaders don’t have access to webpack’s `mode` option. **What is the expected…

### CASE-9230 · Source maps with newer Chrome DevTools' workspaces
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍15 💬26 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature, but also a bug in a sense. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Source map plugins inject three new lines and a footer template…

### CASE-9231 · Unexpected code after tree-shake
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍9 💬25 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Either a bug or unclear docs. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Given `entry` is the entry module: <img width="750" alt="screen shot…

### CASE-9232 · multiple usage of the CommonsChunkPlugin, only first works
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬25 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** It's either a bug or the [documentation]([link]) is not clear. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Trying to solve this [stackoverflow…

### CASE-9234 · Build takes twice as long with >=5.92.0 compared to 5.91.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬24 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Our project takes around 55 sec to build with Webpack versions 5.92.0 and later (tested up to 5.93.0), compared to 24 sec on 5.91.0 and earlier with no other changes. ``` ⬡ webpack:…

### CASE-9235 · commonjs Modules Do Not Work Correctly With externalsType of 'promise'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬24 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> ## What is the current behavior? _**EDIT:**_ As per [this comment below]([link] tool][ref][ref]) this behavior seems to be isolated to commonjs modules (and possibly other non-esm modules). When using `externalsType: 'promise'`, all…

### CASE-9236 · Enabling the experimental option experiments.buildHttp will cause HMR to not work.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬24 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Enabling the experimental option experiments.buildHttp will cause HMR to not work. **If the current behavior is a bug, please provide the steps to reproduce.** 1、I've provided a small library of…

### CASE-9237 · Target files on different drive than the output path cause invalid path and error is thrown
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍5 💬24 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When providing assets from a different drive than then output path on Windows Compiler.js throws an error and the build fails. [link]…

### CASE-9239 · Module Federation Dynamic Import
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬24 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Page no rendering `main.js` return error : `Uncaught SyntaxError: Unexpected token '!=='` **If the current behavior is a bug, please provide the steps to reproduce.** I have 2 apps : - shell :…

### CASE-9240 · "production" mode is causing an exception in IE11
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am bundling my TypeScript application with Webpack 4, and compiling with Babel. When using `mode: "production"` in `"webpack": "^4.42.1",` I get the error `Unhandled promise rejection Typeerror:…

### CASE-9241 · Error from mini-css-extract-plugin introduced by 4.32.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍23 💬24 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` Module build failed (from /home/circleci/project/node_modules/mini-css-extract-plugin/dist/loader.js): TypeError: Cannot read property 'identifier' of null at text.map.line…

### CASE-9242 · Micro Frontend architecture - many builds as one
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬24 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue, please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack bundles the context based on its given entry point. Works perfectly as expected.…

### CASE-9243 · Error: Cannot find module 'webpack/lib/removeAndDo' when building a project
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍14 💬24 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running my build returns an error: "build": "node…

### CASE-9244 · Webpack 4.0 file-loader json issue
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍24 💬24 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** JSON parse error (' Unexpected token m in JSON at position 0') after `file-loader` plugin…

### CASE-9246 · When using AMD output, use AMD for code-split chunks as well
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍31 💬24 · open
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A new feature that would improve code-splitting with externals. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** _Context :_ An application which is…

### CASE-9248 · experimental.css not support legacy browser?
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** experimental.css may not supports legacy browser because it relys on css variable to load css chunk, I'm wondering whether it's by design ```js /******/ var loadCssChunkData = (target, link,…

### CASE-9249 · Built 'module' bundle errors with "require is not defined", but 'commonjs' bundle errors with "Cannot use import"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> [link] <!-- [link] tool] --> Done. <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to bundle an ES module node app into a single file, with the exception of the `sharp` library [which has problems]([link]) with [Webpack]([link]). This is a node server app,…

### CASE-9250 · Cache breaks asset module live reloading
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬23 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Live reloading breaks for assets using `asset/resource` rule type when caching is enabled. **If the current behavior is a bug, please provide the steps to reproduce.** Add an asset loader rule: ```…

### CASE-9251 · Loaders used with the inline syntax can't fully override module types
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hi, Let's say that I create a webpack config with a rule that handles all `.txt` files using the `asset/resource` type: ```js { test: /\.txt$/i, type: 'asset/resource' } ``` I then wish to create a…

### CASE-9252 · DefinePlugin with Persistent cache
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If value provided by DefinePlugin changed when using Persistent cache output will not change. **If the current behavior is a bug, please provide the steps to reproduce.** [link] Run `npm run…

### CASE-9253 · Build time degradation in [email]-beta.0
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I met huge build time degradation in new beta release. For example, node target in prod mode took ``` Version: webpack 5.0.0-beta.0 Time: 231016ms ``` instead of ``` Version: webpack 4.40.2 Time:…

### CASE-9254 · Load split code from a different origin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature (or question if it is already supported) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using dynamic import, I can split my scripts to…

### CASE-9255 · webpack 4 dynamic import got exception in "(window.webpackJsonP = window.webpackJsonP || []).push" which "push" is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍12 💬23 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** It blocked lazy module load. due to error "push" is not a function. It's not always occur. some…

### CASE-9256 · [Feature Request] Use virtual file as entry point
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍45 💬23 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** You must specify the entry point file path and output dir. **If the current behavior is a…

### CASE-9257 · webpack --watch breaking site after modifying a file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬23 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Working with webpack --watch option breaks the page after modifying a file. **If the…

### CASE-9258 · webpack 2.6.0 can't find variable: Promise on require async
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍35 💬23 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Having ReferenceError: Can't find variable: Promise when using `require(['dep'], callback)` **If…

### CASE-9260 · Compilation progress is always displayed to stderr
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬24 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> Not sure, it could be considered as a feature or as a bug. For certainty, let's call it a bug, because messages written to stderr are expected to be errors (IMHO). **What is the current behavior?** According to [documentation]([link]) and [code]([link] tool]/blob/v2.2.0-rc.1/lib/ProgressPlugin.js#L175), compilation progress is…

### CASE-9261 · `parser.hooks.new` not called for classes within the same file.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The `parser.hooks.new("Item")` hooks are not called when the class `Item` is within the same file/module. It works if the class `Item` is imported from another module. **If the…

### CASE-9262 · Deterministic module IDs are unstable in the face of change, which breaks long-term caching
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Adding extra imports of a module (or removing some) changes its module id, which causes a change in every bundle/chunk that uses that module. I'm guessing this happens because occurrence order…

### CASE-9263 · Inevitable unhandled Promise rejection due to failure of prefetch
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> TL; DR: [Promise without `.catch` here.]([link] tool]/blob/179d2e00fe0b901ff176f1c6dbbf6a17f1ff44ea/lib/prefetch/ChunkPrefetchTriggerRuntimeModule.js#L38) **What is the current behavior?** If you dynamic-import a chunk and that…

### CASE-9264 · Dynamic imports don't work when `exports` specified in package.json and aliases
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍33 💬22 · open · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** --- **The same problem in `require.context` and `import.meta.webpackContext`**, so need to be fixed too --- For example, `highlight.js` has the following in `exports` of `package.json`: ```json {…

### CASE-9265 · Webpack 5 worker import fails with "chunks: 'all'" + [contenthash] in output filename
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬22 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Worker import started producing a script loading error as soon as I added `[contenthash]` into the output filename. I see a strange 404 error in the console for a **non-existent** chunk script with…

### CASE-9266 · FEATURE MISSING (this function is working with file-loader) Asset modules is only working with relative paths
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> I have an output that is not in the `/` path, but instead, it is in `/prod/webpack/`. So the output is there. The problem: ```js output: { path: buildDir, filename: '[name].[contenthash].js', // chunkFilename: '[name].[contenthash].js', // publicPath: '{{ app.url_subdir }}/webpack/', publicPath: `prod/webpack/`, assetModuleFilename:…

### CASE-9267 · Remote can crash host app when using ModuleFederationPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍17 💬22 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** An incorrectly configured remote can crash its host app **If the current behavior is a bug, please provide the steps to reproduce.** [link] On [this line]([link]) change the value of `publicPath` to…

### CASE-9268 · ProfilingPlugin output dosen't displayed in Chrome
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍3 💬22 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** JSON produced by ProfilingPlugin is shown in Chrome with one single "Evaluate Script" line without any additional info. Although events.json is pretty large, contains a lot of lines, timestamps, and…

### CASE-9269 · Webpack doesn't split third party library code between bundles
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The code splitting, using Webpack with Loadable plugin, doesn’t split the code to the correct bundle. It happens when both bundles use the same third party library, but each one imports a different…

### CASE-9271 · Modules is missing in production mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍16 💬22 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Maybe same problem with [ref] <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Seems some modules is missing in production mode **If the current behavior is a bug, please provide the steps to reproduce.** It's hard to create a minimum reproducible…

### CASE-9272 · ProfilingPlugin file shows nothing in Chrome 66
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome 66, webpack
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The generated events.json does not show anything in the Performance tab in Chrome 66. **If the current behavior is a bug, please provide the steps to reproduce.** Run `webpack --plugin…

### CASE-9273 · Treeshaking doesn't take place - lodash
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍13 💬22 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug? <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I am loading a single export from lodash, but get the complete lodash in output-bundle.js.…

### CASE-9274 · Cannot install webpack 4.0.0 using node 6.11.4 (current Ubuntu)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: ubuntu, webpack
- **Signals**: 👍9 💬22 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I cannot use the latest stable webpack with node v6.11.4 (version shipped with the current…

### CASE-9275 · DefinePlugin can cause a ModuleConcatenationPlugin bug
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ModuleConcatenationPlugin is moving imports needed at runtime to a function with delayed…

### CASE-9276 · require.context() rebuilds on every incremental build
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍2 💬22 · closed · labels: webpack-5
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** `require.context()` modules get rebuilt even when modifying unrelated file. See image below. In that instance, only the first file was edited, but it seems to rebuild the require.context()'s for the whole product... ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** add a `require.context()` to one…

### CASE-9278 · Breaking change introduced between 2.2.1 and 2.3.0 - relative/absolute paths
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍37 💬22 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The current NPM semantic version standards state that changes between minor versions should be…

### CASE-9280 · Provide more info in `ChunkLoadError`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬21 · closed · labels: status: stale/webpack-5/help wanted
- **Excerpt**: <!-- Bug reports and Feature requests must use other templates, or will be closed --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> Would it be possible to provide more info in [ChunkLoadError]([link] tool]/blob/main/lib/web/JsonpChunkLoadingRuntimeModule.js#L309), i.e. exact reason of failing? I have an interesting case where from time to time my chunk is not loaded. When I open `devtools` I can see that request for chunk is successful but the chunk is still not loaded. I have…

### CASE-9281 · BannerPlugin does not honor raw
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** A string value for `banner` that is a JS comment does not appear to work with `raw: true`. For example, if I specify the following for a `.css` file that is generated by webpack: ```…

### CASE-9282 · Wrong line numbers when processing files after ts-loader
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬21 · open · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack in some cases reports errors according to .js files instead of originating .ts files. For the repro below the error is ``` ERROR in ./startup.ts 8:11-31 Module not found: Error: Can't…

### CASE-9284 · [Webpack 5] Long time for rebuilds
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬21 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I get very long rebuilds on Webpack 5, about 1 minutes. <img width="643" alt="webpack-5-rebuild" src="[link]> But on weback 4 I get much less rebuild time, about 4 seconds. <img width="594"…

### CASE-9286 · TypeError: __webpack_require__(...) is not a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```shell TypeError: __webpack_require__(...) is not a function ``` **If the current behavior is a bug, please provide the steps to reproduce.** it's a really simple situation that takes you 5…

### CASE-9287 · __webpack_public_path__ is Reset Across Entrypoints
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **Background Information** My application build generates urls for image and other assets that depend on a runtime environment variable. Therefore I need to adapt the webpack public path at runtime, which is possible by setting…

### CASE-9288 · Full page reload on syntax errors during hot reloads
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, webpack
- **Signals**: 👍0 💬21 · closed · labels: status: stale
- **Excerpt**: <!-- Please note that this template is not optional. Please fill out _ALL_ fields, or your issue may be closed as "invalid." Please do not delete this template. Please ask questions on StackOverflow or Gitter ([link] tool]). General questions, how-to questions, and support requests will be closed. --> * Operating System: Mac 10.13.6 * Node Version: 11.8.0 * NPM Version: 6.5.0 * webpack Version: 4.29.0 * webpack-dev-server Version: 3.1.14 <!-- Please place an x, no spaces, in all [ ] that apply Please note that we are NOT accepting FEATURE requests at this time. --> - [x] This is a **bug** - […

### CASE-9289 · Webpack unexpectedly watches unrelated files even the ones not imported anywhere
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬21 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack in watch mode is recursively scanning unrelated files in the current working directory and the `src` folder even though none of them should appear in the dependency graph and they don't…

### CASE-9290 · Can't find options with ident 'ref--*-*' when Rule.use is a function
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬21 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When Rule.use is a function that return UseEntry **With Options**, the compilation failed with error "Can't find options with ident 'ref--4-1'" **If the current behavior is a bug, please provide the…

### CASE-9291 · Error when trying to build bundle after upgrading to `4.20.0`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, mobile
- **Signals**: 👍59 💬21 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When trying to build a js bundle and publish like we used to, webpack reported this error: /Users/***/Documents/work/repos/mobile-web/node_modules/webpack-cli/bin/config-yargs.js:89 describe:…

### CASE-9292 · Target for "electron-renderer" shouldn't have `browser` in `resolve.mainFields`
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: electron, webpack
- **Signals**: 👍16 💬21 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Issue [ref] assumption is wrong. Electron renderer is not only a browser, it utilities the node power. > Each web page in Electron runs in its own process, which is called the renderer process. > In…

### CASE-9293 · Tree shaking not working with webpack 4.5
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍7 💬21 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I'd like to report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Tree shaking does not appear to be working. Dead code should be identified…

### CASE-9295 · Create multiple sourcemaps from a single build
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *feature* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Set devtool;. `NODE_ENV === PRODUCTION ? 'nosources-source-map' : 'eval-source-map';`…

### CASE-9296 · Provide option to disable initial compilation when watching
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍22 💬21 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature Request <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When `webpack --watch` is first run, the first thing it does it compile all of the…

### CASE-9298 · RangeError: Maximum call stack size exceeded
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬20 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After running `npm run prod`, webpack throws, ``` ➜ aem-test git:(main) ✗ npm run prod > [email] prod > NODE_ENV=production webpack --config ./webpack.prod.js && clientlib --verbose…

### CASE-9299 · Worker type classic is not preserved when using libraryTarget module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬20 · open · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bundling with libraryTarget module, `new Worker` with [options type classic]([link]) will be rewritten from: ```js const myWorker = new Worker(new URL("worker.js", import.meta.url), { type:…

### CASE-9300 · TypeError: Cannot read property 'jsonData' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍30 💬20 · closed · labels: webpack-5
- **Excerpt**: Please excuse that the bug report is quite short. I don't have time to debug the problem myself today. Since the bug doesn't come from other dependencies according to the stacktrace and the only change since the last usage is in the webpack version, I post the bug report anyway. <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9206 · Align with the proposed WebAssembly/ESM integration specification
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍1 💬28 · closed · labels: status: stale
- **Excerpt**: _Update: On further investigation, it seems that there's a very significant mismatch between webpack Wasm semantics and the early draft proposed standard, in terms of when Wasm instantiation happens. I'm happy to have the help of the webpack team here, with your experience this space and success building a working system. Let's keep discussing this to figure out what semantics should be standardized._ ## Feature request The WebAssembly CG is working on standardizing the integration of WebAssembly modules and ES Modules. The [proposal's semantics]([link]) are very similar to what webpack's…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9210 · Code-splitting creates request for "undefined.js" 404
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍0 💬28 · closed
- **Excerpt**: Using version `[email]` I've started using code-splitting and it seems `webpack --watch` start outputting broken bundles as soon as I make a change to any file, it's fixed by just restarting the process (which makes watching pointless). Chrome outputs the following error to the console: ``` GET [link] 404 (OK) ``` ``` output: { path: '/...', filename: 'static/[name].js', chunkFilename: 'static/[chunkhash].js' } ``` I'm assuming `[chunkhash]` for some reason become `undefined` when it's rebuilding the bundle. PS. The terminal does not seem to print any errors and the bundle is correctly named…

### CASE-9238 · globalObject: "this" work incorrect with ModuleFederation after 5.2.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari
- **Signals**: 👍0 💬24 · closed · labels: webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** the ModuleFederation crashed with `output.globalObject: "this" ` **If the current behavior is a bug, please provide the steps to reproduce.** - clone `[link] - add `ModuleFederationPlugin` - set `output.globalObject: "this" ` - set `package.json` (disable `arrowFunctions`) ``` "browserslist": { "production": [ ">0.2%", "not dead", "not op_mini all" ], "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ] } ``` - build and run the output `remoteEntry.js` error: ```js // this is undefined var…

### CASE-9270 · WASM bundles fail when loaded via `file://` URLs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron
- **Signals**: 👍2 💬22 · closed · labels: help wanted
- **Excerpt**: # Bug report **What is the current behavior?** Electron apps fail to load WASM code because WASM bundles served via `file` URL's aren't allowed to be loaded via `instantiateStreaming` (specifically because MIME `application/wasm` must be set. **If the current behavior is a bug, please provide the steps to reproduce.** No configuration is specifically necessary, but I've included a reproducing project at [this git repo]([link]). To run: ``` yarn install ./build.sh yarn start ``` Running will require a recent Rust nightly build, but I'm happy to add the bundle files if necessary to skip that…

### CASE-9277 · Module parse failed. Unexpected character '#'.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webpack, electron, vue
- **Signals**: 👍9 💬23 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **What is the current behavior?** I am using [electron-vue]([link]). I would like to write some unit test. But encountered the following error. ``` $npm run unit > [email] unit /Users/fluency03/Workplace/github/dockeron > cross-env BABEL_ENV=testing-unit karma start test/unit/karma.conf.js (node:19628) DeprecationWarning: loaderUtils.parseQuery()…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9222 · Variable name mapping issue *only* when using ModuleConcatentationPlugin
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍9 💬26 · closed
- **Excerpt**: _Hi WP Team, congrats on the major version bump, and thank you for all of your hard work this year! Filing this in response to a [tweet]([link]), would be great to get ETA on docs for `ModuleConcatentationPlugin`. We're aware it's an experimental feature. Keep us posted. Thanks!_ <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** `Bug` <!--…

### CASE-9228 · library isn't available anymore in window after adding splitChunks
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍4 💬25 · closed
- **Excerpt**: # Bug report **What is the current behavior?** By using a library name and returning an object in our entry files we were able to make certain functionality accessible through window.<library name>. Since we added the splitChunks optimization, this doesn't work anymore. `window.<library name>` is undefined. **If the current behavior is a bug, please provide the steps to reproduce.** Here is the most important part of our webpack config file ```coffee webpack = require("webpack") path = require("path") module.exports = entry: application: "./app/assets/javascripts/application.coffee" output:…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9224 · Hot reload triggered multiple times in a row when launching dev server
- **Principles**: P-F5, P-H3 · **Env**: webpack
- **Signals**: 👍10 💬26 · closed · labels: status: stale
- **Excerpt**: Hello! **I'm submitting a bug report** I've been using webpack for a long time and I've seen this behaviour on several mac OSX computers. Sometimes, when launching the dev server (either with `webpack-dev-server` or `webpack-dev-middleware`), webpack enters a loop when it invalidates and reloads my bundle 3 to 12 times in a row. This is difficult to reproduce because it happens randomly. It seems to happen more frequently if I kill and restart my server a lot. It looks like a race condition or an FS event bug. I got this bug with webpack 1 as well as webpack 2 so all versions I used seem to…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-9233 · Module not found: Error: Cannot resolve 'file' or 'directory' (import sass with a relative font folder in webpack)
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍25 💬25 · closed
- **Excerpt**: My project structure is: [![enter image description here]([link])]([link]) /src/styles/main.scss ``` @user 'materialize/sass/materialize.scss'; .... ``` I also try `@user './materialize/sass/materialize.scss';` here notwork. It only work when I import the lib in index.js /src/index.js (this worked) ``` import './styles/reset.css'; import './styles/main.scss'; import './styles/font-awesome/font-awesome.scss'; ``` webpack loader: ``` loaders: [ { test: /\.js?/, exclude: [/node_modules/, /styles/], loaders: ['babel'], include: path.join(__dirname, 'src') }, { test: /\.scss$/, loader:…

### CASE-9294 · Allow module system that does not rely on getters in Webpack 4
- **Principles**: P-B1, P-B2, P-B3 · **Env**: webpack
- **Signals**: 👍10 💬21 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Request a feature **What is the current behavior?** When exporting functions using `export function foo` and importing using `import * as bar`, they are compiled to getters/setters in Webpack 4. index.js: ```js export function foo() { return 1; } ``` importer.js: ```js import * as bar from './index'; ``` Output (truncated): ```js // define getter function for harmony exports __webpack_require__.d = function(exports, name, getter) { if(!__webpack_require__.o(exports, name)) { Object.defineProperty(exports, name, { configurable: false,…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9245 · `webpack --watch` should write to stdout at the beginning and end of incremental build
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍17 💬24 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Feature request. **What is the current behavior?** `webpack --watch` does not write anything to stdout that would clearly indicate the current incremental build has (1) started or (2) is done/complete. See image attached. **What is the expected behavior?** I would expect, for the purposes of…

### CASE-9247 · After turning on lazyCompilation, the first load of externals will fail
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report Enable lazyCompilation, and because of the micro frontend, I need to set `output.library.type` to umd. At this time, an error will appear during the first load. After refreshing the page again, it will become normal. **What is the current behavior?** <img width="779" alt="Image" src="[link] /> **If the current behavior is a bug, please provide the steps to reproduce.** [link] Run the following command: pnpm i…

### CASE-9283 · assets modules won't work for inline html <img>
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍3 💬21 · closed · labels: webpack-5
- **Excerpt**: # Bug report **What is the current behavior?** I know I can import using js, but how can I import in an HTML file or CSS file in Webpack 5? ~~doing this in css/sass:~~ ~~`background: url("../../images/image.png");`~~ or this in html template: `<img class="logo-img" src="images/favicon.svg" alt="website logo" />` doesn't work. I just get broken links. What am I missing for these asset modules? I've tried them all in all combos with all file extensions. I've been adding and deleting stuff but here's what I have latest: <img width="83" alt="CleanShot 2020-11-10 at 22 21 35@user" src="[link]>…

### CASE-9285 · webpack 4 -> 5 : several typescript issues
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, webpack, typescript
- **Signals**: 👍2 💬21 · closed
- **Excerpt**: # Bug report webpack version: beta 15 Node.js version: 10.xxx Operating System: windows ### 1. ModuleOptions is not exported ### 2. ResolveOptions is not exported ![image]([link]) fix: export them at the end of the file ![image]([link]) ### 3. EntryObject is wrong ``` type Entry = | string | (() => string | EntryObject | [string, string] | Promise<EntryStatic>) | EntryObject | [string, string]; declare interface EntryObject { [index: string]: string | [string, string] | EntryDescription; } ``` but doc says here : [link] ``` module.exports = { //... entry: { app: { import: './app.js',…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-9259 · webpack sourcemaps do not work well with ES6 imports
- **Principles**: P-A1, P-A4, P-G3 · **Env**: webpack
- **Signals**: 👍4 💬23 · closed · labels: status: stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** Sourcemaps do not work for ES6 imports Example: `import foo from '../src/fooProvider'` will be visible as `__WEBPACK_IMPORTED_MODULE_0__src__fooProvider__.a` Using `require` and `module.exports` will correctly make `foo` available in the debugger scope. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Clone minimal project: [link] 2. npm install 3. run karma to see if everything works 4. run karma with breakpoint in test/foo-test.js line 6 5. See messed up…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9279 · Unused function in ESM code winds up incorrectly referencing a global
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: ### Bug Description An unused function in ESM code winds up being incorrectly transformed, referencing a global variable rather than the imported variable. This causes an unrelated variable in the entry module that happens to have the same name to be renamed. ### Link to Minimal Reproduction and step to reproduce Reproduction: [test.zip]([link]) 1. Unzip the reproduction project. 2. Run `npm install && npm exec webpack`. 3. Examine `dist/main.js`. ### Expected Behavior If function `unused()` is not tree-shaken out, it looks something like this: ```js function unused() { return…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9297 · CommonChunkPlugin: Feature - Select statically imported modules from chunks that were created from a dynamic import (require.ensure / System.import / import(".."))
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍61 💬21 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature for `CommonChunkPlugin`. Support selecting modules from **non-entry** chunks. Meaning, select statically imported modules from chunks that were created from a **dynamic** import (`require.ensure` / `System.import` / `import("..")`) **What is the current behavior?** Currently `CommonChunkPlugin` only receives modules imported from **entry** chunks. **What is the expected behavior?** `CommonChunkPlugin` should receive also modules from **non-entry** chunks.<br> Another option will be that the default behavior will be that the…

