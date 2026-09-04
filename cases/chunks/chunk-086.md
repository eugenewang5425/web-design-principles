# Case Chunk 086 — Round 86

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-9501 · Incorrect handling of imported identifier "require"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If an ES module exports a function named `require`, when you import and invoke it webpack 5 incorrectly treats it as a CJS require: ```js import { require } from './my-lib'; function whatever() {…

### CASE-9502 · undefined && require('mockjs') will pack mockjs
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** undefined && require('mockjs') will pack mockjs **If the current behavior is a bug, please provide the steps to reproduce.** step0: mkdir webpack-demo && cd webpack-demo step1: npm init -y step2:…

### CASE-9503 · Webpack 5 watch not failing on error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, typescript
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When I start webpack in watch mode it does not fail on a TypeScript error. **If the current behavior is a bug, please provide the steps to reproduce.** 1. Clone this GitHub repository: [link] 2.…

### CASE-9504 · Webpack-5 filesystem cache not detects changed files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The changes in the project's source-tree are not detected with the following config: ```js config.cache = { type: 'filesystem', cacheDirectory: `${cacheDirectory}/webpack`, buildDependencies: {…

### CASE-9505 · Module concatenation produces invalid output due to name collision
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` import * as cn from "classnames"; export function foo() { const classnames = cn({a: 1}); console.log(classnames); return classnames; } ``` with module concatenation this is compiled as ``` //…

### CASE-9506 · v4 devtoolModuleFilenameTemplate adds additional symbol on incremental builds
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** on each incremental build webpack adds additional `/` to unaffected modules while running webpack-dev-server, which results in a bad expirience in dev tool because folders get nested deeper and…

### CASE-9507 · Webpack 5: Empty JS chunks are emitted for CSS entries
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Empty JS files are emitted for CSS entries in Webpack 5 even when `optimization.removeEmptyChunks` is `true`. **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A…

### CASE-9508 · webpack 5: '.wasm' is missing loader
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report webpack 5 is missing '.wasm' loader shown in this console report ![image]([link]) <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack 4 do just fine parse the wasm but somehow webpack 5 unable to parse '.wasm' because missing loader **If the…

### CASE-9509 · Webpack 5 entry dependOn property with UMD exports does not allow AMD loader to load dependent modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬13 · open
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The newly-introduced `dependOn` feature to be released with Webpack 5 seems to have non-deterministic behaviour when exporting UMD modules and using a require-based (i.e. AMD) loader. What appears…

### CASE-9510 · move source-map-loader into core
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Bundle codes with eval sourcemap, but reference to a package that ships with standalone sourcemap will not convert standalone sourcemap to eval sourcemap, this will emit a lot of warning in browser…

### CASE-9511 · Chunk code isn't executing when only specific chunk in html file
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When adding a specific single chunk to HtmlWebpackPlugin, js code is __not__ executed. (note while I tried to understand what is wrong: If I add all chunks to html file, all js code is executing).…

### CASE-9512 · Dependencies (micromatch) Security Vulnerabilities
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** webpack package requires an old version of 'micromatch' (3.1.10) that requires 'set-value' with old version (2.0.0) which has vulnerability issue. **If the current behavior is a bug, please provide…

### CASE-9513 · TypeError: Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm using code splitting (via SplitChunksPlugin) to extract common dependencies. I have multiple entry points. The output target is node. When trying to run the successfully bundled code, I get the…

### CASE-9514 · Source maps are failing to parse using devtool: source-map
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, firefox, webpack
- **Signals**: 👍11 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If we build using the option `devtool: source-map`, the source maps that are being produced are failing to parse on Chrome and Firefox and debugging is not available. If we switch to `devtool:…

### CASE-9515 · Creating target: "node" module with runtimeChunk: "single" doesn't work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We have a large code base with a number of different packages. We want to make each package a separate umd module. Some of the packages are used on both the server, using node, and in the browser.…

### CASE-9516 · Dll Reference Plugin Invalid Options after upgrade from 4.19.1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍8 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After upgrading from 4.19.1 to 4.20.(0|1) I receive a long list of validation errors (estimate over 1000) when trying to reference a DLL bundle with the DLL Reference Plugin. These errors start with…

### CASE-9517 · Webpack 4.19.1: undefinedresolvePathname is not defined (but 4.19.0 works!)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The first time we npx start our project after a fresh npm install it seems to work. Subsequent attempt fail with a blank page and the following error (no compiler errors): ![image]([link]) This…

### CASE-9518 · contenthash changing even though file remains identical
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report ```js output: { filename: 'file-[contenthash].js', chunkFilename: 'chunk-[contenthash].js' }, optimization: { splitChunks: { chunks: 'all', cacheGroups: { vendors: { test: /[\\/]node_modules[\\/]/, }, }, }, } ``` <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the…

### CASE-9519 · Entry bundles are not generated with single runtimeChunk option
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍11 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** On webpack 4.17 when I add a single runtime option to my config `runtimeChunk: { name: shared }` my entry bundles are not generated. **If the current behavior is a bug, please provide the steps to…

### CASE-9520 · Hot Module Replacement of a particular module only works once while the App component can be HMR-ed all the time
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Hot Module Replacement works every other time but not all of the time. A more detailed explanation is [available here]([link]). **If the current behavior is a bug, please provide the steps to…

### CASE-9522 · `cacheGroups` overrides `libraryTarget` output in webpack4
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬13 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When both options `optimization.splitChunks.cacheGroups` and `output.libraryTarget` are in webpack.config and existing entry is used in `cacheGroups` there is no [library output ]([link]) in such entry.…

### CASE-9523 · Upgrading to Webpack 4.8.0 results in "Error: Cannot find module Debug"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack is throwing the error "Cannot: find module debug" as of version 4.8.0. I attached a node debugger and that module is being required by @user\ast\1.3.1\node_modules\@user\ast\lib\traverse.js The…

### CASE-9524 · Loader can't modify resource type without accessing private API
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬13 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Now that webpack has the concept of module type (JSON, JS, CSS, WASM), loaders which convert…

### CASE-9525 · webpack 4.0.0-beta.0 different behavior with .mjs files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I want to report unexpected behavior <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** # file: /server/main.mjs - with --experimental-modules flag…

### CASE-9526 · [4.0] json tree shaking with object spread
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** I don't know is it as expected or a bug indeed <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ```js import * as json from './test.json' const {…

### CASE-9527 · dynamic require all bundled in
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** question <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** [link] ```js const ENV = process.env.API_ENV || 'development'; // eslint-disable-next-line…

### CASE-9528 · Async import returning undefined default export
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** This is hard to explain, so I'll try my best. When using Webpack 3.5 + UglifyES + React…

### CASE-9529 · BUG: Uncaught (in promise) Error: Loading chunk 0 failed.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** *Bug* <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm exporting using the `amd` `libraryTarget`. The sources use dynamic imports and my…

### CASE-9530 · Synchronous callback for require.ensure in Webpack 2
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍5 💬13 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** First of all: thank you so much for a great tool. Webpack is awesome! I've asked my question on StackOverflow but still did not get an answer. So let's say I want to request a feature. I have an isomorphic React/React-router project that uses Webpack and its Code Splitting feature. For each…

### CASE-9532 · SourceMapDevToolPlugin not working with CommonsChunkPlugin and UglifyjsWebpackPlugin
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬14 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Reporting a *bug*. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** SourceMapDevToolPlugin running after CommonsChunkPlugin and…

### CASE-9533 · Webpack's tests are broken in v 2.2
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** tests are broken when cloning webpack from latest ``` > [email] test…

### CASE-9535 · how to use webpack dll plugin in server-side rendering
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍6 💬13 · closed
- **Excerpt**: I have submit this in stackoverflow, but it seems no response, so I wanner to know is that it does not support this usage? I am trying to use webpack's dllPlugin to get my chunk small, and I made it work well in client-side but something wrong in server-side rendering. **Webpack version:** 1.13.1 **environment:** OSX 10.11.6 I used [this]([link] tool]/tree/master/examples/dll) as an example, and make it simpler, here is my demo code: webpack.config.dll.js ``` // webpack.config.dll.js const path = require('path'); const webpack = require('webpack'); module.exports = { entry: { a: ['./a'] },…

### CASE-9539 · Webpack BannerPlugin with `raw` option should put `use strict` on the very first line
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** 1. When using BannerPlugin with `raw` option, it appends the code before `"use strict"`, this will cause strict mode to not function properly. 2. When set `minimize` to true,…

### CASE-9540 · Module Federation: Remote Initialization fails with single runtime chunk + multiple entrypoints
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If a federated import exists under a specific entrypoint that is not yet loaded, and webpack uses `runtimeChunk: single` - the initialization will fail. ``` Initialization of sharing external…

### CASE-9541 · export in library works only for last entry module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · open · labels: webpack-5/help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report export in library works only for last entry module <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** in webpack config like: ```js module.exports = { entry: ["a", "b", "c"], output: { library: { type: "global" } } }; ``` only exports from `c` will…

### CASE-9542 · "npx webpack" fails with "RangeError: WebAssembly.Instance(): Out of memory: wasm memory"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Attempting to run webpack leads to the following error: ``` $ npm view webpack version 5.70.0 $ npx webpack [webpack-cli] RangeError: WebAssembly.Instance(): Out of memory: wasm memory at create…

### CASE-9543 · webpack sourcemap include absolute path
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-9544 · [webpack-cli] Error: Cannot find module 'acorn'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Running webpack throws an exception that `acorn` cannot be found: ``` [webpack-cli] Error: Cannot find module 'acorn' Require stack: - [root]\node_modules\acorn-import-assertions\lib\index.js -…

### CASE-9545 · devtool source-map creates broken `webpack://` urls when `output.library.name` is an array containing a placeholder
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When using an `output.library.name` containing a `[name]` placeholder, e.g. `['MyLib', '[name]']`, the source maps generated by `'devtool': 'source-map'` are broken. I get a bunch of JS console…

### CASE-9546 · Build for productions with module federation cause white blank without error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬12 · closed · labels: webpack-5/area: module-federation
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> I am trying to make a shared file, such as context/redux/vuex (i am using vue) but after build i got only a white page, no errors. I thought it was some sort of vuex problem, so i decide to try it as a simple file exporting a object…

### CASE-9547 · 5.40 breaks type of webpack-dev-server
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** 1. install `webpack` and `@user/webpack-dev-server` 2. create a variable of type `Configuration`…

### CASE-9548 · Can't build webpack if code uses it as it's dependency
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Throws error on initializing ``` Error: ./node_modules is neither a posix nor a windows path, and there is no 'join' method defined in the file system ``` **If the current behavior is a bug, please…

### CASE-9549 · Loading assets via a loader's `this.loadModule()` doesn't emit asset files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When calling `this.loadModule( "some-path", callback )` from a loader while `some-path` is defined as an asset in the module rules (eg. `type: "asset/source"`), webpack won't emit `some-path` as an…

### CASE-9551 · Tree shaking and /*#__PURE__*/: import { css } from "styled-components" keeps styled-components in the bundle even if it’s unused
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack has an optimization for [the `sideEffects: false` flag]([link]). Say, we have a module `foo` with `"sideEffects": false` in its `package.json`. If we import this module but don’t use any of…

### CASE-9552 · TypeError: Cannot read property 'includes' of undefined at ModuleFederationPlugin.apply (***/node_modules/webpack/lib/container/ModuleFederationPlugin.js:45:49)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, vue
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** ``` > [email] dev /Users/apple/Code/01-Demo/01-End-to-End/vue-element-admin > vue-cli-service serve INFO Starting development server... ERROR TypeError: Cannot read property 'includes' of undefined…

### CASE-9553 · HMR does not pick up changes from dependency packages inside "node_modules"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** HMR does not pick up changes from dependency packages inside `node_modules`, and it looks like `package.json` of dependency packages acts as a barrier (explanation below). **If the current behavior…

### CASE-9554 · [DllPlugin] manifest has relative paths to dependency files within node_modules
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If the `context` in my webpack is a subfolder of my project folder like `src`, then the Dll manifest will contain entries like `"content":{"../node_modules/react/index.js":{"id":1,` In this case I'm…

### CASE-9555 · TS type for Entry error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Typing error with the following: ``` import { Configuration } from 'webpack'; const configuration = (): Configuration => { const webpackConfig = { mode: 'development' as const, entry:…

### CASE-9556 · use dynamic import in npm library use webpack
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> [link] [link] **What is the current behavior?** I use lazy load in the library, which I write for another project. when I package it and publish it to npmjs. I import it in another project. It can't work and show can't find the…

### CASE-9557 · Errors should output to STDERR (bis)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed · labels: status: stale/webpack-6
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack prints everything to stdout, including errors. It's a problem when webpack is used by another tool in a build process: that tool cannot extract the error messages, only detect that there was…

### CASE-9558 · splitchunk not working properly
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I have 3 webpack config file with one `common` ,`dev` and for `prop` each. I am attaching the codesandbox link where you can find those configs [`sandbox`]([link]) Now in `webpack.common.js` i am…

### CASE-9559 · Transient failure: TypeError: Cannot read property 'bind' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍5 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We experienced a failure on getaround.com yesterday from ~3:35pm - 4pm PST. There was an error in the console: ``` getaround.js:1 Uncaught TypeError: Cannot read property 'bind' of undefined at…

### CASE-9560 · Tree shaking does not apply to re-exported namespace imports
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-9561 · moduleFilenameTemplate option to SourceMapDevToolPlugin does not seem to work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Best I can tell, the **moduleFilenameTemplate** option to **webpack.SourceMapDevToolPlugin** does nothing. The doc implies that **moduleFilenameTemplate** is equivalent to setting the…

### CASE-9562 · Cannot find module '@user/wasm-opt'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce.** <!-- A great way to do this is to provide your configuration via a GitHub repository --> <!-- The most helpful is a…

### CASE-9563 · Runtime `TypeError` when a `.js` ES module imports a `.mjs` ES module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed · labels: help wanted
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Edit:** Include some context around `mithril.mjs` itself. # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When you build and run the bundle in [this repo]([link]), it generates an error with the message `Uncaught ReferenceError: require is not…

### CASE-9564 · webpack4 minify javascript bug, but webpack 3 has not this bug
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** After minify javascript, I deploy these code files , and access these code by browser, it throws the error that xx is not function. If I don't minify javascript, and just build code by mode…

### CASE-9565 · Dynamic import with variable + externals config not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I'm trying to use a dynamic import that uses a variable, and at the same time leave all these modules as external libraries, so I'm doing this: ```import(`library/${module}.js`);``` And my Webpack…

### CASE-9566 · no warning when trying to externalize "require" module with amd as intermediate module format
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** when `"require"` is listed in the `externals`, it seems to be entirely ignored. externalizing `"require"` is useful for amd libaries - as importing require should give the bundle access to the AMD…

### CASE-9567 · Invalid ES6 code generated
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When running with minification (default `optimize: true` flag) there is invalid JavaScript code produced with certain ES 6 codes. **If the current behavior is a bug, please provide the steps to…

### CASE-9568 · main.js has been loaded,but it didn't run
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** the main.js has been loaded,but it didn't run **If the current behavior is a bug, please provide the steps to reproduce.** the devDependencies package.json ``` "autoprefixer-loader": "^2.0.0", "babel":…

### CASE-9569 · Webpack emits unused functions in production mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack emits unused functions in production mode. **If the current behavior is a bug, please provide the steps to reproduce.** ```js // a.js console.log("a"); export function a1() { console.log("a1"); } export function a2() { console.log("a2"); } ``` ```js // b.js import * as a from "./a"; export { a }; ``` ```js // index.js import { a } from "./b"; a.a1(); ```…

### CASE-9570 · Modules initialized multiple times
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** In webpack v4, it appears that *shared modules are initialized for every runtime chunk (and each entry chunk by default contains one), and not just once*. In my case, a common vendor chunk and two entry…

### CASE-9571 · nodejs __dirname and __filename invalid separator for cross platform
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the webpack Gitter. --> <!-- [link] --> <!-- [link] tool] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I run webpack on windows to compile a nodejs application with `__dirname` and `__filename` set to `true` in my config. The polyfill replace the dynamic behavior with a static string of the original path,…

### CASE-9572 · TypeError: Cannot read property 'call' of undefined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Uncatched error pops up if some resource is not found in array. `try` block have no `catch`…

### CASE-9574 · Move vendors cacheGroup to a mode more specific than 'none'
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale/webpack-5
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Requesting a feature, well, more of a change to existing feature. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** With webpack 4.6.0, with mode:…

### CASE-9575 · Cannot read property 'replace' of undefined whit Invalid JSON
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack exit abruptly when a JSON is not formatted correctly when a server is running. I'm…

### CASE-9576 · Webpack config function export error in express server / fails with Invalid configuration object
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** This is a misfeature(?) <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Function export fails with ``` WebpackOptionsValidationError: Invalid…

### CASE-9577 · Buffer shim generated for javascript/esm files doesn't bundle buffer module
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I use `rawBytes = new Buffer(new Uint8Array(byteArray));` in my code. By default, webpack…

### CASE-9578 · Bug in Webpack 3 and 4: can't `require` a module with a ESM entry point
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍25 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** If you `require` a package with a `module` field in its package.json, and the module has an…

### CASE-9579 · Changing entries from plugins
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The first tap hook that runs is "entry-option", which converts the `entry` option into…

### CASE-9580 · Webpack's IgnorePlugin causes an "TypeError: Cannot read property 'identifier' of undefined"
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍10 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Using `webpack.IgnorePlugin` causes compilation to fail with a `TypeError: Cannot read…

### CASE-9581 · Watch config file in watch mode
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** feature <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Webpack needs to be restarted in order to read in changed configuration files **What is the…

### CASE-9582 · Performance degradation in build times after upgrade to 3.7.1
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** A bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We build our main app as a [Dll]([link]), and after recent upgrade we experience huge build…

### CASE-9584 · HMR multi-parent bug
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale/help wanted
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> bug **What is the current behavior?** There seems to be an issue with the Hot Module Replacement feature when the hot replaced module…

### CASE-9585 · Error in uglifyjs-webpack-plugin after upgrading to webpack 3
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The following error is shown: core.min.js from UglifyJs TypeError: Cannot read property 'reset'…

### CASE-9586 · commonsChunkPlugins async options Invalid
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** - I am using webpack2.4.0, in my `webpack.config.js` use `plugin`…

### CASE-9587 · Bug: TypeError: __webpack_require__.e is not a function (for target node?)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **Bug: I'm using webpack to build the server using target node, but the output claims requireEnsure as undefined!** `TypeError: __webpack_require__.e is not a function` The function is…

### CASE-9588 · Cannot find module "." When I use require.context
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** The code snippet should work as expected, I think. But in fact, it's not work as expected when…

### CASE-9589 · Getting started produces an error
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** When following the [Getting Started]([link]) it produces an error when calling `webpack` at the…

### CASE-9590 · webpack doesn't compile production
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** BUG <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** FAILS TO COMPILE WHEN RUN "NPM RUN BUILD", HAS NO ISSUE RUNNING NPM RUN DEV **If the current…

### CASE-9591 · manifest chunk hash not changed while compilation stats inside it changed
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍4 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** report a bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Here is my config. Follow the [the caching guide]([link]) but not include the…

### CASE-9592 · Webpack 2 hangs on all projects after update
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍9 💬12 · closed
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> # Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> As the title suggests, I've just recently cleaned out my `node_modules` folders in a number of different projects as I update my dependencies. I've been using Webpack2 for several weeks…

### CASE-9594 · webpack2 very slow with PhantomJS prebuilt
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** Bug <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** Extremely higher build times, it increased from 9 to 24 minutes. **If the current behavior is a…

### CASE-9595 · [email]-rc.4: maxModules option not working
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Before creating an issue please make sure you are using the latest version of webpack. --> **Do you want to request a *feature* or report a *bug*?** Bug. <!-- Please ask questions on StackOverflow or the webpack Gitter ([link] tool]). Questions will be closed. --> **What is the current behavior?** `stats.modules: false` and `stats.maxModules: 0` doesn't work. **If the current behavior is a bug, please provide the steps to reproduce.** webpack.config.js [link] **What is the expected behavior?** `stats.modules: false` and `stats.maxModules: 0` should hide modules output to console **Please…

### CASE-9599 · Unexpected token export when using outputModule
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** I updated from `5.63.0` to `5.101.3` and my code no longer loads. Instead I get errors on the page stating: ``` Unexpected token export ``` I then downgraded version by version until…

### CASE-9600 · [TerserWebpackPlugin] Inconsistent order of params/variables in identical builds on arm/amd
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report <!-- Please ask questions on StackOverflow or the GitHub Discussions. --> <!-- [link] tool]/discussions --> <!-- [link] --> <!-- Issues which contain questions or support requests will be closed. --> **What is the current behavior?** We build our app on both arm and amd architectures for k8s, and we build each separately so that native bindings can be resolved properly. I've been tracking down a ChunkError due to…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9521 · Heap out of memory
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: Hi all, # Bug report We as a team encounter a lot of heap errors on our development (approx 1 an hour, sometimes even faster). Can we have a look at this /work this out? I know @user is already fixing some memory leaks, however we would like to get ours fixed as well. **What is the current behavior?** ℹ ｢wdm｣: Compiling... 92% after chunk asset optimization SourceMapDevToolPlugin <--- Last few GCs ---> [2697:0x102801e00] 1924201 ms: Mark-sweep 1374.6 (1457.5) -> 1374.5 (1458.0) MB, 620.1 / 0.0 ms allocation failure GC in old space requested [2697:0x102801e00] 1924928 ms: Mark-sweep 1374.5…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9531 · Bug in uglify-js leads to broken build (Invalid left-hand side expression in postfix operation)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍23 💬13 · closed
- **Excerpt**: Because it caused me some headaches the last hour: If your (optimized via UglifyJsPlugin) production build stopped working and the console in chrome says ``` Uncaught ReferenceError: Invalid left-hand side expression in postfix operation ``` It's most likely this bug: [link] As hotfix you can nail the uglify-js version in your package.json to 2.7.5 and reinstall your node_modules.

### CASE-9534 · __webpack_public_path__ does not work in webpack 2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, android, ios, webpack, webview, mobile
- **Signals**: 👍0 💬13 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 2.1.0-beta.25 **Please tell us about your environment:** OSX 10.x **Current behavior:** set `__webpack_public_path__` doesn't work **Expected/desired behavior:** I set `__webpack_public_path__` = 'assets' in entry.js,then use `System.import('xxxx')`, the require path doesn't contain 'assets * **Browser:** [all | Chrome XX | Firefox XX | IE XX | Safari XX | Mobile Chrome XX | Android X.X Web Browser | iOS XX Safari | iOS XX UIWebView | iOS XX WKWebView ] * **Language:** [ES6/7]

### CASE-9550 · WorkerPlugin doesn't correctly handle `new URL().toString()`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack, typescript
- **Signals**: 👍0 💬12 · closed · labels: webpack-5
- **Excerpt**: <!-- Please don't delete this template because we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> # Bug report The [documentation for `Worker`]([link]) and `SharedWorker` say that their constructors accept **strings**, not `URL`s (and the TypeScript standard library types enforce this for SharedWorker, although not for Worker). In practice, it seems like passing a URL is fine (at least in Chrome), but for projects using TypeScript, it will be most natural to pass a string, which means that `String()`, `.toString()`,…

### CASE-9573 · All non separate-file sourceMap devtool options break layout when changing CSS from Chrome Dev Tools
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack
- **Signals**: 👍4 💬12 · closed · labels: status: stale
- **Excerpt**: **What is the current behavior?** When I use anything else besides an external source map file option as a value in the dev option (for example "source-map"), [link] , when I modify a CSS property in my Chrome dev tools inspector, something weird happens: Chrome seems to add dynamically many copies of my rule/file which I modified (and naturally a broken layout.) ![39046259-db556168-4495-11e8-99d9-b366b8cb976f]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** - use webpack-dev-server - use cheap-module-eval-source-map - modify CSS properties from devtools…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-9536 · CommonsChunkPlugin problem with code splitting and multiple entry points
- **Principles**: P-B1, P-B2, P-B3 · **Env**: linux, webpack
- **Signals**: 👍11 💬13 · closed · labels: status: stale
- **Excerpt**: **I'm submitting a bug report** **Webpack version:** 1.13.1 **Please tell us about your environment:** Linux **Current behavior:** Trying to get code split between multiple entry points, with each entry point split into own code and vendor bundle, then commons extracted for both own code and vendor bundles. Entry points look like: ``` entry: { login: './src/Login/index.jsx', app: './src/index.jsx', vendor: Object.keys(packageDotJson.dependencies).filter(function (element) { return element !== 'font-awesome' && element !== 'jspdf'; }), loginvendor: packageDotJson.loginDependencies }, ``` The…

### CASE-9597 · Failed to decode downloaded font, OTS parsing error: Failed to convert WOFF 2.0 font to SFNT...
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I have a problem when try to import font-awesome to my project. > Failed to decode downloaded font: [link] > OTS parsing error: Failed to convert WOFF 2.0 font to SFNT > Failed to decode downloaded font: [link] > OTS parsing error: incorrect file size in WOFF header > Failed to decode downloaded font: [link] > OTS parsing error: incorrect entrySelector for table directory config is ``` { test: /\.woff(\?.*$|$)/, loader : 'file-loader' }, { test: /\.woff2(\?.*$|$)/, loader : 'file-loader' }, { test: /\.ttf(\?.*$|$)/, loader : 'file-loader' }, { test: /\.eot(\?.*$|$)/, loader : 'file-loader' },…

### CASE-9598 · CSS/lazy/hmr: asset resource referenced in CSS isn't available to lazy loaded javascript chunk
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Have you used AI? None ### Bug Description When the same asset is included in both .css file (with `experiments.css`) and imported in an asynchronously loaded lazy chunk, it throws at runtime. ### Link to Minimal Reproduction and step to reproduce [link] ### Expected Behavior the asset resource is available in both CSS and JS chunks ### Actual Behavior ``` ERROR Cannot find module './font.woff2' at __webpack_require__ ([link]) at fn ([link]) at eval (webpack:///./mod.js?:2:69) at ./mod.js ([link]) at __webpack_require__ ([link]) at fn ([link]) ``` ### Environment ```shell System: OS:…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9537 · Improve readability of "Module not found" output
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬13 · closed · labels: status: stale
- **Excerpt**: So I've been using webpack for over a year now, and I still have a hell of a time figuring out the "Module not found" output. Most of it is useless output to me, and it always takes me multiple minutes to figure out what's going on. It should be immediately obvious what's broken and where. Here's an example of the _end_ of some output i'm getting currently (note this continues upward with more output): ``` [D:\billysFile\code\javascript\nodejs\modules\blocks.js\node_modules\TextArea] [D:\billysFile\code\javascript\nodejs\modules\blocks.js\node_modules\TextArea]…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-9538 · Source map line mapping is incorrect
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome
- **Signals**: 👍1 💬13 · closed
- **Excerpt**: I'm seeing an issue where the combined sourcemaps for my output chunks have gradually diverging line mappings between the output source and the original source. The result is that even though the source mappings appear to be correct, if you set a breakpoint on a line in Chrome, it will not translate to the correct line in the original source. This effect can be observed using your sourcemap visualizer (great tool, btw). [Here is a simple example.]([link]) Note that the line mappings are correct for the first contained file, but they shift gradually in subsequent files. This was produced with…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9583 · Feature Request: externals should be able to specify arbitrary expressions
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: status: stale/help wanted
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** Currently, externals only allow specifying a single variable as the value to use from the global scope. Eg `{externals: {'gem/Style':'Gem.Style'}` will return a bundle that loads `root["Gem.Style"]`. This is obviously not what I expected to load here. **What is the expected behavior?** I'd like to be able to specify an arbitrary expression in order to find the module. For example, I'd like to be able to specify externals like `{externals: {"gem/Style": {expression: ".Gem.Style"}}}` so that…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9593 · function __webpack_require__ does not properly check for existence of module
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬12 · closed · labels: status: stale
- **Excerpt**: <!-- Please don't delete this template or we'll close your issue --> <!-- Before creating an issue please make sure you are using the latest version of webpack. --> <!-- Also consider trying the webpack@user version, maybe it's already fixed. --> **Do you want to request a *feature* or report a *bug*?** - Reporting a bug **What is the current behavior?** - I am recognizing the following error when constructing a simple bundle using require.ensure() ![image]([link]) ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce.** In order to reproduce the error,…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-9596 · Bug, Sourcemap urls without filename or path (only hash) in Chrome
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, webpack
- **Signals**: 👍4 💬12 · closed · labels: status: stale
- **Excerpt**: **Webpack version:** 2.1.0-beta.24 / 2.1.0-beta.25 **Please tell us about your environment:** OSX 10.12 Sierra **Current behavior:** I have a problem with Webpack, where it shows only the sourcemap hash (webpack:///?d41d). It corresponds to the ?[hash] that is being put behind the sourcemaps in the sources tab in Chrome, but it seems to not to pickup the rest of the path (so clicking it will result in file not found). I tried a lot of different devtool variants, setting the sourceMapFilename or devtoolModuleFilenameTemplate directly, even downgrading webpack 2 to beta 24, all to no avail.…

