# Case Chunk 081 — Round 81

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-9001 · 当base配置项和ssrManifest同时使用时，生成ssr-manifest.json中部分css url地址不正确并未加上base前缀
- **Principles**: P-F4 · **Env**: windows, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug 复现方法： 使用官方提供 的ssr-vue示例 [[link] tool]/tree/main/packages/playground/ssr-vue]([link] tool]/tree/main/packages/playground/ssr-vue)，vite.config.js中加入base:'test/',配置项 运行npm run build命令 可以看到ssr-manifest.json中的.vue文件内联的style标签生成的css文件都没有加上base前缀 ### Reproduction [link] tool]/tree/main/packages/playground/ssr-vue ### System Info ```shell System: OS: Windows 10 10.0.17763 CPU: (16) x64 Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz Memory: 7.85 GB / 15.86 GB Binaries: Node: 16.13.1 - D:\Program Files\nodejs\node.EXE Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD npm: 8.5.0 - D:\Program…

### CASE-9004 · Warnings during postinstall script of starter app
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I build the "starter app", I get a few warnings like the one below: ``` WARN "postinstall" script of "[email]" inside "/app/vite/packages/playground/ssr-deps" is skipped as the working directory seems suspicious. To run this lifecycle script anyway, use "--unsafe-perm". ``` I'm new to Vitejs: Are these important? What could I do to eliminate them? **More detail:** I want to use a Docker instance for the development environment. There's a nice repo with Dockerfile that sets everything up at [link] (In fact, I reported these warnings over there, and was advised to ask…

### CASE-9008 · Make auto-fixing of stack traces optional when using ssrLoadModule
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p3-downstream-blocker/feat: ssr
- **Excerpt**: ### Clear and concise description of the problem When an error occurs during SSR, the stack trace needs fixing in order to be correct: ```js try { result = mod.foo(); } catch (error) { vite.ssrFixStacktrace(error); handle_error(error); } ``` But if the error occurred during `ssrLoadModule`, Vite will fix the stack trace before the error is thrown. As discussed in [ref], this results in a broken sourcemap at best and a cryptic "TypeError: Line must be greater than or equal to 1, got -1" error at worst: ```diff try { + const mod = await vite.ssrLoadModule('my-module.js'); result = mod.foo(); }…

### CASE-9017 · `build.cssCodeSplit: false` => CSS missing in `dist/manifest.json`
- **Principles**: P-F4 · **Env**: linux, vite
- **Signals**: 👍10 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When setting `build.cssCodeSplit: false` then the CSS is missing in the `dist/manifest.json` (`dist/client/manifest.json` if using vite-plugin-ssr). ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.4 Debian GNU/Linux 10 (buster) 10 (buster) CPU: (2) x64 06/7a Memory: 2.71 GB / 2.71 GB Container: Yes Shell: 5.0.3 - /bin/bash Binaries: Node: 16.5.0 - ~/.config/nvm/versions/node/v16.5.0/bin/node Yarn: 1.22.11 - ~/.config/nvm/versions/node/v16.5.0/bin/yarn npm: 7.20.5 - ~/.config/nvm/versions/node/v16.5.0/bin/npm Watchman: 4.9.0 -…

### CASE-9029 · bug(ssr): process.env.xxx is undefined when calling ssrloadmodules api
- **Principles**: P-F4 · **Env**: macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug From this [pr]([link] tool][ref]) which cause `process.env.FOO` is undefined in nodejs environment and we must use `process.env['FOO']` to get the right value because `process.env` will be replaced with `({})` ### Reproduction ```bash $ git clone [email]:zhangyuang/vite-ssr-error-require.git $ git checkout bug/env ``` ### System Info ```shell $ npx envinfo --system --npmPackages '{vite,@user/*}' --binaries --browsers System: OS: macOS 10.15.4 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 278.79 MB / 16.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 14.17.2…

### CASE-9037 · Top-level await is not supported by `ssrLoadModule`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: has workaround/enhancement: pending triage
- **Excerpt**: ### Describe the bug If a module uses top-level await, attempting to load it with `ssrLoadModule` results in an error. <details> <summary>Stack trace</summary> ``` 4:03:16 PM [vite] Error when evaluating SSR module src/index.js: SyntaxError: Cannot use keyword 'await' outside an async function (2:0) at Object.pp$5.raise (/path/to/vite-top-level-await-repro/node_modules/vite/dist/node/chunks/dep-36bf480c.js:47485:13) at Object.pp$4.checkUnreserved (/path/to/vite-top-level-await-repro/node_modules/vite/dist/node/chunks/dep-36bf480c.js:47391:14) at Object.pp$4.parseIdent…

### CASE-9038 · Conditional Export Resolves Incorrectly For Browser After Previously Loading For SSR
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug I am encountering this bug where after resolving an conditional export for node in SSR, that same conditional export will incorrectly load the node version in a browser script. For some reason, this only happens in this one case during dev mode. ### Reproduction I tried to make a simpler reproduction but I only find the bug appearing in this case, and it is simple enough to replicate. FYI for full transparency, this will run [this npm init script]([link]) which creates a vite project which uses [this vite plugin]([link]) and the offending conditional exports can be found…

### CASE-9042 · Latest @user/plugin-legacy breaks ssr build
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Copied from [link] tool][ref][ref]: ```bash $ vite build --ssr src/entry-server.ts --outDir dist/ssr ~/dist/ssr/entry-server.js:36 export function __vite_legacy_guard() { ^^^^^^ SyntaxError: Unexpected token 'export' at wrapSafe (internal/modules/cjs/loader.js:984:16) at Module._compile (internal/modules/cjs/loader.js:1032:27) at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10) at Module.load (internal/modules/cjs/loader.js:933:32) at Function.Module._load (internal/modules/cjs/loader.js:774:14) at Module.require…

### CASE-9044 · `vite build --ssr` always output cjs module
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: has workaround/feat: ssr
- **Excerpt**: ### Describe the bug I tried to set the esbuild format to esm, but that didn't work. ```js // vite.config.js import { defineConfig } from 'vite' // [link] export default defineConfig({ build: { target: 'esnext' }, esbuild: { format: 'esm' } }) ``` ### Reproduction Here's an [example]([link]). ```sh yarn yarn build ``` This is the code after the build ```js // dist/main.js 'use strict'; var dayjs = require('dayjs'); function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; } var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);…

### CASE-9047 · "Blob is not defined" error for inline web worker in SSR mode
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: ssr/feat: web workers
- **Excerpt**: ### Describe the bug I have a Svelte-Kit application that uses Vite under the hood. When updating my Vite version, I got the following error when building the project and then trying to run it: ``` > Blob is not defined ReferenceError: Blob is not defined at file:///home/bastian/dev/bstats-web/.svelte-kit/output/server/app.js:1237:14 at ModuleJob.run (node:internal/modules/esm/module_job:175:25) at async Loader.import (node:internal/modules/esm/loader:178:24) at async start (file:///home/bastian/dev/bstats-web/node_modules/@user/kit/dist/chunks/index6.js:277:14) at async…

### CASE-9048 · ssr: resolve also `.cjs` and `.mjs` file extensions
- **Principles**: P-F4 · **Env**: vite, typescript
- **Signals**: 👍0 💬4 · closed · labels: p3-downstream-blocker/feat: ssr
- **Excerpt**: ### Describe the bug `vite` does not resolve `.cjs` extensions in `ssr` mode. I got it working by adding `'.cjs'` to `ssrExtensions` inside `src/node/utils.ts`. ```typescript const ssrExtensions = ['.js', '.cjs', '.json', '.node'] ``` I'm not sure why the extension is missing. Maybe `vite` should also include the `.mjs` file extension. The issue blocks users to add [typesafe-i18n]([link]) to their `vite` projects. That library exports only `.cjs` and `.mjs` files to support both `CommonJS` and `ESM` projects. ### Reproduction [link] run `npm run dev` and go to `[link] ### System Info ```shell…

### CASE-9052 · vite ssr 使用 `?.` 出错
- **Principles**: P-F4 · **Env**: linux, vite, typescript, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 项目使用typescript 在项目`[link] ssr似乎不支持 `?.`语法。 但是直接使用`vite` 命令运行而不是使用 `node ./server`却运行正常 ### Reproduction 新增test.ts并在任一vue组件中引入该文件调用`foo`方法就会重现。 const obj = { a: () => { console.log('fun a') }, } export const foo = () => { // TODO not support `?.` ？ obj?.a?.(); } ### System Info ```shell System: OS: Linux 5.10 Arch Linux CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 6.52 GB / 15.55 GB Container: Yes Shell: 5.8 - /bin/zsh Binaries: Node: 12.13.1 - ~/data/linux-software/node-v12.13.1-linux-x64/bin/node Yarn: 1.22.10 - ~/data/common/node_modules/bin/yarn npm:…

### CASE-9053 · [Yarn workspaces] Unable to use a pre-built workspace package
- **Principles**: P-F4 · **Env**: svelte, vite, typescript
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I have yarn workspaces set up and I want to include one of my packages within my SvelteKit application. My `svelte.config.js` contains the following **Vite** configuration: ``` vite: () => ({ esbuild: { exclude: ['my-package'] }, ssr: { external: ['my-package'] } }) ``` `my-package` generates **Commonjs** code and uses a normal Typescript compiler based on the following `tsconfig.json` file: ``` { "compilerOptions": { "target": "ES6", "module": "commonjs", "declaration": true, "declarationMap": true, "removeComments": true, "experimentalDecorators": true,…

### CASE-9064 · ssr-manifest.json and ssrContext disclose folder structure present in the source code
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: ssr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> In a ssr build, ssr-manifest.json and ssrContext (in the `dist/server/entry-server.js` file), will contain the complete filenames (including the folder structure) present in the source code. This causes two problems: * It may "leak" personal or confidential information about the source code being built * It could be the internal and private structure…

### CASE-9069 · Vite re-optimizes dependencies although they did not change
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When releasing an application with semantic versioning and without changing its dependencies, the `version` property of one of the lock file formats (case spotted for `package-lock.json`) gets updated, causing the generated `_metadata.json` to mismatch, and thus trigger an unnecessary dependency rebuild. ### Reproduction Just follow these steps: 1. `npm init @user/app` 2. `npm install` 3. `npm version major` 4. `vite --clearScreen false` 5. `npm version minor` 6. `vite --clearScreen false` should display `Pre-bundling dependencies` ### System Info Not needed. --- ###…

### CASE-9070 · `ssr-vue` client navigation test is flaky
- **Principles**: P-F4 · **Env**: vue, vite
- **Signals**: 👍1 💬4 · closed · labels: p3-minor-bug/feat: ssr/test
- **Excerpt**: ## Describe the bug The **client navigation** test in `packages/playground/ssr-vue/__tests__/ssr-vue.spec.ts` is flaky and can erroneously fail a test run. ## Reproduction I am always able to replicate this on my system, but I suspect not every system has this issue. On a fresh clone of the Vite monorepo: ```bash yarn --frozen-lockfile cd packages/vite && yarn build && cd ../.. cd packages/plugin-vue && yarn build && cd ../.. yarn test ``` Here's a CI run of it failing despite no changes to Vite: [link] tool]/3295/workflows/5c10a93d-39c3-40cd-becc-56a1c2601d7f/jobs/3190 ## System Info -…

### CASE-9076 · Vue HMR cause server modules not to be updated
- **Principles**: P-F4 · **Env**: vue, vite
- **Signals**: 👍1 💬4 · closed · labels: pending triage/feat: hmr/feat: ssr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug A minimal example: ```vue <script> import "./log" export default {} </script> <template><div>App</div></template> ``` I use a Vite plugin to remove the `import "./log"` when `ssr` is `false`, i.e. remove it from client code ([this is how `preload` works in Ream]([link])), if I update the code in `log.js`, the file doesn't seem to be updated on the…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-9002 · 配置optimizeDeps.exclude运行报错
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, windows, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 在vite.config.ts中配置了optimizeDeps外部包的引入，但是运行的时候不知道哪里没设置，导致报错。我直接在window.ReactDom是能访问到报错的方法 配置项： ![image]([link]) 报错： ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.17763 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 3.57 GB / 15.88 GB Binaries: Node: 16.13.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.21.1 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 8.1.3 - F:\Code\QiuTools\node_modules\.bin\npm.CMD Browsers: Chrome: 100.0.4896.60 Edge: Spartan (44.17763.1.0) Internet Explorer: 11.0.17763.592 npmPackages:…

### CASE-9003 · In plugin object the 'this' is inconformity in different function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug If i have a vite plugin like this ```javascript function testPlugin() { class Test1 { name = 'test1'; configResolved() { //this is just this console.log(this); } resolveId(c) { //this is rollup Context ? console.log(this); } } return new Test1(); } ``` ### Reproduction [link] ### System Info ```shell windows 10 21H2 node v16.14.0 npm 8.3.1 vite 2.9.1 Edge(Chromium) 100.0.1185.29 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing…

### CASE-9011 · npm run dev doesn't start if there is '#' in the path
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, vite, vue, svelte
- **Signals**: 👍4 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug as per title, when running 'npm run dev' when there is '#' in the dir path vite is throwing an error html:D:/#test/vite-project/index.html:1:7: error: Cannot read file "../..": The handle is invalid. 1 │ import "/src/main.ts" tried with vue, svelte and vanila templates, all the same ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (32) x64 AMD Ryzen 9 5950X 16-Core Processor Memory: 44.56 GB / 63.91 GB Binaries: Node: 16.13.2 - C:\Program Files\nodejs\node.EXE npm: 8.3.2 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan…

### CASE-9014 · preserveModulesRoot of vite configuration file is invalid in windows
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: windows only/bug: upstream
- **Excerpt**: ### Describe the bug [preserveModulesRoot]([link]) of vite configuration file is invalid in windows in windows （The src directory should not exist in the es directory） ![]([link]) in macos <img width="334" alt="截屏2022-01-14 下午10 53 23" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (8) x64 Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz Memory: 8.44 GB / 15.83 GB Binaries: Node: 14.17.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.22.0 - ~\AppData\Roaming\npm\npm.CMD Browsers: Edge: Spartan…

### CASE-9016 · Vite shows blank page instead of helpful error message
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, linux, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Importing jsonwebtoken inside my project `Uncaught TypeError: Cannot read properties of undefined (reading 'from')` on Chrome and `Uncaught TypeError: Buffer2 is undefined` on Firefox. I am using vite(2.7.2) and jsonwebttoken(8.5.1). I tried both yarn and npm to install the package. Same result. ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.10 Manjaro Linux CPU: (4) x64 Intel(R) Core(TM) i7-5600U CPU @ 2.60GHz Memory: 433.96 MB / 15.51 GB Container: Yes Shell: 3.3.1 - /bin/fish Binaries: Node: 17.3.0 - /usr/bin/node Yarn: 1.22.11 -…

### CASE-9018 · [vite] warning: "import.meta" is not available in the configured target environment ("safari11") and will be empty
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari11, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Here [link] tool][ref] is the problem I encountered. But when I modified the code according to [this comment]([link] tool][ref][ref]), I encountered new problems at dev server: ``` [vite] warning: "import.meta" is not available in the configured target environment ("safari11") and will be empty 1 | export const env = import.meta.env.DEV ? 'dev' : 'prod' | ^ ``` I'm not sure if this is a problem. How should I respond to this warning? ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (6) x64 AMD Ryzen 5 4500U with Radeon Graphics…

### CASE-9019 · [vite] connecting... in https
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: hmr
- **Excerpt**: ### Describe the bug its normal when i deploy my webapp in http mode， but when deploy it in https mode，it begin to repeated connecting every five seconds and always refesh even with the hmr setting. it also doest work in wss here is my website infos: 1.website: [link] 2.code: [link] 3.vite.config.ts ![image]([link]) ### Reproduction visit [link] ![image]([link]) ### System Info ```shell centos7 chrome ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing…

### CASE-9028 · [vite] Internal server error: Failed to resolve import "./chunk-NOKAMFJ2.js" from "node_modules/.vite/chunk-72YHFGW7.js?v=70a2ec6a". Does the file exist?
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ![image]([link]) ### Reproduction I just initial my project with storybook. `npx sb@user init --builder storybook-builder-vite` ### System Info ```shell System: OS: macOS 10.15.4 CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz Memory: 395.95 MB / 16.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 12.18.2 - ~/.nvm/versions/node/v12.18.2/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.5 - ~/.nvm/versions/node/v12.18.2/bin/npm Browsers: Chrome: 95.0.4638.54 Safari: 13.1 npmPackages: @user/plugin-react: ^1.0.0 => 1.0.5 vite: ^2.6.4 => 2.6.11 ``` ### Used Package…

### CASE-9030 · "0 0" in the body with vite 2.6.7 when head tag has attributes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug With vite .2.4.4 this not happen but with 2.6.7. Inside the body tag appears: ```html <body> "0 " <script type="module" src="/@user/client"></script> " 0 " ... </body> ``` ### Reproduction [reproduction]([link]). When index.html has `head` tag with attributes then appears the zeros. ### System Info ```shell System: OS: macOS 11.4 CPU: (4) x64 Intel(R) Core(TM) i5-7600K CPU @ 3.80GHz Memory: 376.04 MB / 24.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.3 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.13 - /usr/local/bin/npm Browsers: Chrome:…

### CASE-9032 · a problem related to the vite server port
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍5 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug 1. a new vite app: default port is 3000 ![image]([link]) 2. my koa server: this port is also 3000 ![image]([link]) when I start vite app and then start koa server OR start koa server and then start vite app, no indication of port conflict. And I use Google Chrome to access the page 127.0.0.1:3000, the page display content about the latter server content. ### Reproduction This question reminds me of PM2——master-slave mode, but vite didn't handle it well. I try to read the vite's source code, but I am worried about misunderstanding, so come here to issue. If this is a…

### CASE-9034 · vite can not import css file as url
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, vite
- **Signals**: 👍7 💬4 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug import css file as url will become something like this: ``` export default "/src/components/test.css" ``` while import js\png\svg with same grammar return the path right. ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (12) x64 Intel(R) Core(TM) i7-10710U CPU @ 1.10GHz Memory: 3.52 GB / 15.81 GB Binaries: Node: 14.17.6 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.15 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1023.0), Chromium (94.0.992.31) Internet Explorer:…

### CASE-9036 · Ie11 is not supported when mode does not equal production
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug when i run vite build --mode xm，the packaging result does not support Internet Explorer 11。 The Internet Explorer 11 console displays a message: Unhandled promise rejection ReferenceError: “Proxy”未定义 ### Reproduction no ### System Info ```shell System: OS: Windows 10 10.0.18363 CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz Memory: 2.04 GB / 7.86 GB Binaries: Node: 12.14.1 - D:\nvm\nodejs\node.EXE Yarn: 1.22.11 - D:\nvm\nvm\yarn.CMD npm: 6.11.3 - D:\nvm\nodejs\npm.CMD Browsers: Edge: Spartan (44.18362.1533.0) Internet Explorer: 11.0.18362.1 npmPackages: vite:…

### CASE-9039 · Source map genrating issue
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, windows, vue, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug This is related to [ref] ![image]([link]) In generated source map, you have two sources but only one sourceContents. this is not an issue on firefox windows but is a serious issue on chrome windows ![image]([link]) ![image]([link]) and will screw up the debugger And not only vue, you see there is inconsistency between file to file in react to ![image]([link]) one file starts with `C:`, and the other start with `c:,` this will not cause an issue because ![image]([link]) ![image]([link]) you got one two one match between sources and sourcesContent in the sourcemap how to…

### CASE-9043 · Not loading CSS for inter-ui since 2.5.1
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, firefox, safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Since vite 2.5.1 CSS files of [inter-ui]([link]) do not load any more. With 2.5.0 it works. <img width="2048" alt="CleanShot 2021-08-28 at 12 04 44@user" src="[link]> ### Reproduction [vite-project.zip]([link] tool]/files/7070552/vite-project.zip) ### System Info ```shell System: OS: macOS 11.5.2 CPU: (8) arm64 Apple M1 Memory: 158.20 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.7.0 - /opt/homebrew/bin/node Yarn: 1.22.11 - /opt/homebrew/bin/yarn npm: 7.20.3 - /opt/homebrew/bin/npm Browsers: Edge: 90.0.818.56 Firefox: 91.0.2 Safari: 14.1.2 Safari Technology…

### CASE-9046 · Vite 2.4.x cannot find SASS when using Nuxt-Vite
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, safari, macos, vite, nuxt
- **Signals**: 👍2 💬4 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug Even with SASS properly installed and present in package.json, Vite says SASS is not installed. ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.5 CPU: (12) x64 Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz Memory: 10.27 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.17.4 - /usr/local/opt/node@user/bin/node Yarn: 1.22.11 - /usr/local/bin/yarn npm: 6.14.14 - /usr/local/opt/node@user/bin/npm Browsers: Chrome: 92.0.4515.107 Edge: 92.0.902.67 Firefox Developer Edition: 91.0 Safari: 14.1.2 ``` ### Used Package Manager npm ### Logs ```shell ERROR…

### CASE-9051 · vite ssr与三方UI插件
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, firefox, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 有关vite ssr 中。比如我需要借助 三方的ui 插件来实现一些需求功能。 element-plus 中的 Cascader 级联选择器 不可以使用和其它小部分组件 和 naiveui 在ssr中的使用 任然遇到我们开发者无法解决的问题。 ssr 中在每个框架也好库的引入方式也好，都有自己的标准！！！ ### Reproduction <img width="1167" alt="1625845033066_FFDB82D0-610B-4088-8DFE-02EF2C4E8BB2" src="[link]> ### System Info ```shell System: OS: macOS 11.4 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 326.92 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.16.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.11 - /usr/local/bin/npm Browsers: Chrome: 91.0.4472.114 Firefox: 89.0.2…

### CASE-9054 · [2.4.0-beta.1] Break nested module resolve
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug `@user/router` import a cjs version `vue-router` ![image]([link]) ### Reproduction [link] ```shell yarn cd packages/main yarn dev check the link [link] ``` ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 2.16 GB / 13.87 GB Binaries: Node: 14.16.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - C:\Program Files\nodejs\yarn.CMD npm: 6.14.12 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1023.0), Chromium (91.0.864.59) Internet Explorer: 11.0.19041.1 ``` ### Used Package Manager…

### CASE-9060 · URL of `public` assets is wrong in built CSS files if `assetsDir` is set and `base` is `'./'`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬4 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug 当我将静态资源（图片，字体）放在public文件下时，打包之后，css文件中静态资源引用路径不对 ### Reproduction [Github Repo Link]([link]) ### System Info System: OS: macOS Mojave 10.14.6 CPU: (4) x64 Intel(R) Core(TM) i5-7267U CPU @ 3.10GHz Memory: 986.89 MB / 8.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 14.16.0 - /usr/local/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 6.14.11 - /usr/local/bin/npm Browsers: Chrome: 91.0.4472.77 Safari: 14.1…

### CASE-9061 · [vite:asset] Plugin error - Unable to get file name for unknown file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Error when try to build my project with vite version 2.3.4, work ok with vite 2.3.3 ``` Plugin error - Unable to get file name for unknown file "bd901e3b" ``` <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction This my private project, sorry I cannot show it ### System Info ```node System: OS: Windows 10 10.0.19041 CPU: (8) x64 Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz Memory: 9.07 GB / 15.92 GB Binaries: Node: 14.16.0 - C:\Program Files\nodejs\node.EXE npm: 6.14.11 - C:\Program Files\nodejs\npm.CMD Browsers: Edge:…

### CASE-9065 · plugin-legacy, Vue2 + IE11, lazy loading routes+components doesn't work, no errors
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/plugin: legacy
- **Excerpt**: ### Describe the bug When using plugin-legacy, the built website doesn't work as expected in IE. Components and routes using lazy-loading with arrow functions doesn't work, the components are not loaded at all. Additionally, IE's console shows no errors. The "App.vue" base file successfully loads, but any route that uses lazy-loading doesn't load and nothing is displayed. As viewed in Chrome (expected): ![image]([link]) As viewed in IE 11: ![image]([link]) ### Reproduction Reproducible bug: [link] Steps: 1. Clone the linked project and run `npm install` 2. Run `vite build` 3. Host the "dist"…

### CASE-9088 · Serving gzip or br variants not working
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, edge, firefox, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Adding br and gzip files once `vite build` is executed, not being served: just `ERR_CONTENT_DECODING_FAILED` on chrome, edge and firefox. ## Reproduction 1) `yarn create vite-app vite-test` 2) modify `build` script on `package.json` to be: `"build": "vite build --https"` 3) add `serve` script on `package.json`: `"server": "vite serve dist --https --mode production"` 4) Create `gz` and `br` variant for `index.html` file. 4) `yarn serve` I have my own CA configured on all browsers and have a valid TLS certificate configured, I just cofigure it on `vite.config.ts` file: ```…

### CASE-9097 · Built output includes `{} = null` causing Uncaught TypeError when targeting safari11 (Vite 8)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: safari11, vite
- **Signals**: 👍0 💬3 · open · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug After upgrading to Vite 8 and building with target: ["safari11"], a simple function with object rest/spread and nested destructuring is transformed incorrectly and the build output contains `{} = null`, which causes a runtime TypeError `Uncaught TypeError: Cannot destructure 'null' as it is null.`. ```js function pe(e, t) { const { ariaAttributes: s, style: r, ...n } = e, { ariaAttributes: i, style: l, ...f } = t; return X(s, i) && X(r, l) && X(n, f); } ``` will be transfor to ```js function…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-9005 · SSR transform loses `Object.defineProperty` in certain cases
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug When running a module like ```js import { foo } from '$lib/things.js'; export const get = () => foo // no semicolon ``` through Vite's SSR transform, I end up with ```js const __vite_ssr_import_0__ = await __vite_ssr_import__("/src/lib/things.js"); const get = () => __vite_ssr_import_0__.foo ``` rather than the correct ```js const __vite_ssr_import_0__ = await __vite_ssr_import__("/src/lib/things.js"); const get = () => foo Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }}); ``` As far as I can tell,…

### CASE-9012 · Vite preview build failing
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ios, vite
- **Signals**: 👍5 💬4 · closed · labels: duplicate/pending triage/p3-minor-bug
- **Excerpt**: ### Describe the bug Running the app in dev mode works perfect (npm run dev). When trying to preview a prod build the browser throws this: `Uncaught TypeError: Failed to resolve module specifier "emitter". Relative references must start with either "/", "./", or "../".` I believe this first issue is related to axios as I get this message during the build: `transforming (68) node_modules/axios/lib/helpers/isAxiosError.js'emitter' is imported by emitter?commonjs-external, but could not be resolved – treating it as an external dependency` I also noticed when deploying to a server I get a…

### CASE-9022 · Failed to parse html
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: html
- **Excerpt**: ### Describe the bug Vite is failing to build due to a failure to parse the `index.html` file. ### Reproduction Create a new vanilla JS project with `yarn create vite repro --template vanilla`. Replace the content of the `index.html` with the following: ```html <!DOCTYPE html> <html lang="en"> <body> <pre> foo <=> baz; </pre> </body> </html> ``` Try to build the project or run the dev server and the following error appears: ``` yarn run v1.22.10 warning package.json: No license field $ vite build vite v2.6.14 building for production... ✓ 0 modules transformed. [vite:build-html] Unable to…

### CASE-9027 · vue3 vite build Maximum call stack size exceeded
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug $ npm run build appear Maximum call stack size exceeded ### Reproduction none ### System Info ```shell windows 10 node v14.0.0 npm 7.15.1 "vue": "^3.2.16", "vite": "^2.6.4", "@user/plugin-vue": "^1.9.3", ``` ### Used Package Manager yarn ### Logs ```shell $ npm run build > vite build vite v2.6.12 building for production... ✓ 4123 modules transformed. Maximum call stack size exceeded error during build: RangeError: Maximum call stack size exceeded at MemberExpression.parseNode (G:\deployment\mas\my-vite-project\node_modules\rollup\dist\shared\rollup.js:5084:14) at new…

### CASE-9035 · String 'import.meta.env' in Vue template breaks vite build
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: vue, vite
- **Signals**: 👍1 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug After adding a new typed property to import.meta.env, adding the string `import.meta.env` breaks vite build. Dev server works normally, no TS errors. ```shell $ vue-tsc --noEmit && vite build vite v2.5.10 building for production... ✓ 5 modules transformed. [rollup-plugin-dynamic-import-variables] Unexpected token (8:69) file: /Users/uninen/LocalDocuments/Code/tmp/metaenv-bug/src/App.vue:8:69 error during build: SyntaxError: Unexpected token (8:69) at Parser.pp$5.raise (/Users/uninen/LocalDocuments/Code/tmp/metaenv-bug/node_modules/rollup/dist/shared/rollup.js:19495:13) at…

### CASE-9057 · SSR: imports in function param object destructuring assignment are not defined
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> The SSR transform does not properly handle usage of a module import inside a function parameter's object destructuring assignment, leading to the usage throwing a ReferenceError. Example: ```javascript import { fn } from 'a-dep'; function foo({ a = fn() }) {} ```…

### CASE-9058 · Code splitting ineffective due to vendor chunk
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍11 💬4 · closed · labels: enhancement/p2-nice-to-have
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I use framer-motions m component to lazyload most of the library, however due to the default options of Vite this is entirely ineffective since all of framer-motion ends up in the immediately loaded vendor bundle anyway. By disabling the rollup option manualChunks the code is splitted up as expected. <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue,…

### CASE-9072 · Build fails after updating to 2.1.x if there is the nullish coalescing operator (??) in a SFC template (Vue)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, vue, vite
- **Signals**: 👍8 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [x] Read [the docs]([link]). - [x] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. - [x] This is a concrete bug. For Q&A open a [GitHub Discussion]([link] tool]/discussions) or join our [Discord Chat Server]([link]). ## Describe the bug After upgrading Vite to version `2.1.1`, my builds started failing during the transform phase…

### CASE-9073 · SSR source map merging fails on empty file segments (Error: No element indexed by 0)
- **Principles**: P-D1, P-D2, P-D3, P-F4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍16 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug The following source map merging: [link] tool]/blob/6fae0b7d119cf97904ae276176f8bb4374aee300/packages/vite/src/node/ssr/ssrTransform.ts#L180-L186 Given an empty input will throw an error: <details><summary>Dev mode log</summary> ```bash $ pnpm dev > [email] dev C:\Users\GrygrFlzr\Documents\projects\sourcemap-repro > node server Error: No element indexed by 0 at ArraySet$2.ArraySet_at [as at] (C:\Users\GrygrFlzr\Documents\projects\sourcemap-repro\node_modules\.pnpm\[email]\node_modules\vite\dist\node\chunks\dep-e0f09032.js:24278:9) at BasicSourceMapConsumer.<anonymous>…

### CASE-9100 · Oxc minifier removes `if` guard and changes runtime behavior
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍1 💬3 · closed · labels: bug: upstream
- **Excerpt**: Upstream issue: [link] ### Describe the bug Since upgrading to Vite 8, the default Oxc minifier appears to incorrectly optimize one of my functions and changes its runtime behavior. Here is a stripped down version of my code: ```ts let rafId: number | undefined; function foo() { if (rafId == null) { rafId = requestAnimationFrame(() => { console.log('callback'); }); } } ``` Minified build output using oxc: ```js function e(){requestAnimationFrame(()=>{console.log(`callback`)})} ``` Minified build output using esbuild: ```js function…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-9006 · Create `react` and `react-ts` templates' production builds not working
- **Principles**: P-A3, P-H1 · **Env**: macos, react, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug Hey folks! If you create a brand new project using the `react` or `react-ts` build and run `npm run preview` you'll be greeted by a `cannot get /` error page: ![image]([link]) I'm using the default react project from `vite.new` as the reproduction. Just run `npm run preview` and you'll see it :) ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (10) arm64 Apple M1 Pro Memory: 2.52 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.14.0 - ~/.nvm/versions/node/v16.14.0/bin/node npm: 8.3.1 - ~/.nvm/versions/node/v16.14.0/bin/npm Browsers:…

### CASE-9007 · failed to load module for ssr: /src/h_main_app_onmount.js
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hey In my case vite is a dependency. For builder.io/qwik And I just wanted to say: ![image]([link]) ![image]([link]) Yes, kind sir. It sure would have been helpful 😅 ### Reproduction ⠀⠀⠀⠀ ### System Info ```shell ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ``` ### Used Package Manager npm ### Logs ```shell ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ``` ### Validations - [ ] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [ ] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [ ] Read the [docs]([link]). - [ ] Check that there…

### CASE-9013 · deps are rebundled when I lazy load a component, making the app to crash [ref]
- **Principles**: P-A3, P-H1 · **Env**: macos, react, vite, webpack
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce/plugin: legacy
- **Excerpt**: ### Describe the bug I am using react and react.lazy + import to lazy load dependencies. While on development, everytime I navigate to a part of the app that triggers a lazy load a component, the deps of that component are detected as new dependencies, vite starts rebundling and the app fails to load the component (probably due to a server connection closed). Is there a way to avoid this? Is lazy loading (using react.lazy + import) not supported? This was previously a webpack project ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.5.2 CPU: (12) x64 Intel(R) Core(TM)…

### CASE-9021 · (node:21202) UnhandledPromiseRejectionWarning: URIError: URI malformed
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ### Reproduction hard to reproduction ### System Info ```shell mac node v14.11.0 "vite": "^2.6.14", "vite-plugin-vue2": "^1.9.0", ``` ### Used Package Manager npm ### Logs ```shell (node:28221) UnhandledPromiseRejectionWarning: URIError: URI malformed at decodeURI (<anonymous>) ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link]…

### CASE-9026 · Vite JSX multiline class support
- **Principles**: P-A3, P-H1 · **Env**: vite, react, vue
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Clear and concise description of the problem for react project with vitejs, i did not encounter this error with .jsx file, however i faced this issues when using official plugin-vue-jsx with vue 3 project. ![image]([link]) Message.jsx ``` <div class=" fixed <--- multiline class, and its valid jsx syntax top-5 inset-x-0 z-50 flex flex-col space-y-4 items-center justify-center px " > ``` error throw by vite ``` 7:13:27 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with…

### CASE-9040 · Calling a method or property of another component using ref in one component raises an error when run build script, But running dev Script is normal
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage/inconsistency
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ### Reproduction yarn create vite cd vite-project yarn add Children.vue component to HelloWord.vue call Children func thought ref in HelloWord.vue run build script ### System Info ```shell { "name": "vite-project", "version": "0.0.0", "scripts": { "dev": "vite", "build": "vite build", "serve": "vite preview", "preview:build": "yarn run build && vite preview " }, "dependencies": { "vue": "^3.2.11" }, "devDependencies": { "@user/plugin-vue": "^1.6.1", "@user/compiler-sfc": "^3.2.11", "vite": "^2.5.6" } } ``` ### Used Package Manager yarn…

### CASE-9041 · Wrong value for attribute rel on link elements
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug If import path includes query parameters, value for attribute rel on link elements may be wrong [link] tool]/blob/main/packages/vite/src/node/plugins/importAnalysisBuild.ts#L52 eg: if `dep` equals `/assets/breath-btn.a8a19f92.css?bid=30039`, `isCss` will be `false`, so we will finally get `<link rel="modulepreload" as="script" crossorigin="" href="/assets/breath-btn.a8a19f92.css?bid=30039">` ### Reproduction ![image]([link]) ![image]([link]) ### System Info ```shell System: OS: macOS 10.15.7 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 1.42 GB / 16.00 GB…

### CASE-9045 · can't load img with alias name when development mode
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug I use alias name for img path, but it don't work when development node. However it load when production mode. ### Reproduction ``` //vite.config.js resolve:{ alias:{ images: resolve(__dirname, 'src/assets/images') } } //App.vue <img src="images/1.png" alt="" /> ``` ![image]([link]) ### System Info ```shell System: OS: Windows 10 10.0.18363 CPU: (8) x64 Intel(R) Core(TM) i7-9700 CPU @ 3.00GHz Memory: 6.20 GB / 15.94 GB Binaries: Node: 14.15.4 - D:\software\nodejs\node.EXE npm: 6.14.12 - D:\software\nodejs\npm.CMD npmPackages: "vue": "^3.2.2", "@user/plugin-vue": "^1.4.0",…

### CASE-9049 · declarationOutDir does not work with ./dist but works with ./types
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug When using library mode in react-ts, declarationOutDir does not work with ./dist but works with ./types ![image]([link]) ### Reproduction // tsconfig.json `{ "compilerOptions": { "target": "ESNext", "lib": [ "DOM", "DOM.Iterable", "ESNext" ], "allowJs": false, "skipLibCheck": false, "esModuleInterop": false, "allowSyntheticDefaultImports": true, "strict": true, "forceConsistentCasingInFileNames": true, "module": "ESNext", "moduleResolution": "Node", "resolveJsonModule": true, "isolatedModules": true, "jsx": "react", "declaration": true, "emitDeclarationOnly": true,…

### CASE-9050 · Expected identifier but found "@"，seem not support decorator ?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Clear and concise description of the problem ![image]([link]) ![image]([link]) ![image]([link]) ### Suggested solution i tried to modify .js to .ts of autobind-decorator package src file, but it doesn't work. can i use Can I continue to use this package autobind-decorator ? ### Alternative _No response_ ### Additional context _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/.github/contributing.md). - [X] Read the [docs]([link]). - [X] Check that there isn't already…

### CASE-9055 · Pre build problem of ES build
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When pre building, go to filter: / ^ [[w @] [^:] /, and the. Vue suffix will not be recognized. You need to return again to add spcename ### Reproduction ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) ### System Info ```shell no ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/.github/contributing.md). - [X] Read the [docs]([link]). - [X] Check that there isn't already an issue that…

### CASE-9056 · css `url()` assets in html not handled in build process
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍5 💬4 · closed · labels: pending triage/p2-edge-case
- **Excerpt**: ### Describe the bug writing css style in html entry file with followings: ```html <style> #app { background-image: url("./bg-texture.jpeg"); } </style> ``` Only works in dev mode. The bg-texture.jpg won't be hashed and copied to the build output dir. Run `yarn serve` then you can see a 404 error complaining about can't find bg-texture.jpeg. ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.4 CPU: (8) arm64 Apple M1 Memory: 109.94 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 15.12.0 - /opt/homebrew/bin/node Yarn: 1.22.10 - /opt/homebrew/bin/yarn npm:…

### CASE-9059 · Throwing run time error .
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> I have a react project created with Vite js. When I am importing airtable in my project its throwing error. <img width="732" alt="code" src="[link]> <img width="959" alt="coonsole" src="[link]> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction <!-- Please provide a link to a repo that can…

### CASE-9068 · vite always refresh and connecting
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I use whistle ,config: ![image]([link]) vite config: ![image]([link]) when i use vite ,my page '[link] refresh, always show [vite] connecting. ![image]([link]) <!-- A clear and concise description of what the bug is. --> I think 。maybe whistle redirect to 'localhost:30010' multiple times ？ can it not refresh? <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ###…

### CASE-9071 · The dev server uses mime type "video/mp2t"
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: good first issue
- **Excerpt**: ## Describe the bug When getting `.ts` files from the vite server, they are delivered with the wrong mime type. Expected would be `Content-Type: text/javascript` but instead we get `Content-Type: video/mp2t`. ## Reproduction A simple minimal vite project, with a .ts file to be transpiled, should be enough. See the `curl` call below for reproducing it. ## System Info - `vite` version: 2.1.2 - Operating System: MacOS Big Sur - Node version: v14.15.4 - Package manager (npm/yarn/pnpm) and version: npm: 6.14.10 ## Logs (Optional if provided reproduction) Example curl command: ``` curl [link] -I…

### CASE-9074 · a bug about eslint when runing in the browser
- **Principles**: P-A3, P-H1 · **Env**: vite, vue, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [ ] Read [the docs]([link]). - [ ] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. ## Describe the bug is it a bug? it checks the code in the browser, not the source code, you can see in the picture,it reports "__vite_plugin_react_timeout is not in camel case" ## Reproduction ![image]([link]) ![image]([link]) ![image]([link]) ##…

### CASE-9080 · Dynamically importing dependency modules
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍5 💬4 · closed · labels: enhancement
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I'd like to dynamically import language files in `highlight.js`: ```js import.meta.glob(`highlight.js/lib/languages/*.js`) ``` However, I get the following error: ``` [plugin:vite:import-analysis] Invalid glob import syntax: pattern must start with "." or "/" (relative to project root) ``` This works, but the results aren't very nice: ```js import.meta.glob(`../../node_modules/highlight.js/lib/languages/*`); ``` <img width="610" alt="Screen Shot 2021-02-05 at 10 53 45 PM" src="[link]> **Describe the solution you'd like** For…

### CASE-9083 · [vite] Internal server error: Cannot read property 'length' of null
- **Principles**: P-A3, P-H1 · **Env**: opera, vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug 使用 Vite 构建Vue 项目，安装好依赖，运行 npm run dev 报相关错误 [vite] Internal server error: Cannot read property 'length' of null ## System Info - `vite` version: 2.0.0-beta.52 - Operating System:win10 - Node version: 14.8.0 - Package manager (npm/yarn/pnpm) and version:npm 6.14.7 ## Logs (Optional if provided reproduction) ![image]([link])

### CASE-9084 · Setting client types and library DOM in "tsconfig" breaks types
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported). ## Describe the bug Using `"types": ["vite/client"]` with `"lib": ["DOM"]` causes TS to break. ![image]([link]) ## Reproduction [link] ## System Info - `vite` version: ^2.0.0-beta.48 - Operating System: Windows 10 x64 - Node version: v14.15.1 - Package manager (npm/yarn/pnpm) and version: 6.14.8 ## Logs (Optional if…

### CASE-9085 · Vite failed to install the vue global component.
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug > 我在vite上测试，vue3.0 注册组件 当我在 `main.ts` 里使用最简单的方式注册了一些全局组件后，我在子级页面无法使用该vue组件, 在页面内部引入组件也无法渲染组件。 * 组件代码 ![image]([link]) * main.ts ![image]([link]) * index ![image]([link]) * page render ![image]([link]) ## Reproduction [链接地址]([link]) ## System Info - vite 2.0.0 beta.4 - vue 3.0.5 ## Logs (Optional if provided reproduction)

### CASE-9086 · Typescript: IDE reports TS2307: Cannot find module error for Vue components imports
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, typescript, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug IDE Visual Studio Code reports TS2307: Cannot find module error for Vue components imports. Imports are higlighted in red. <img width="621" alt="Jietu20201027-142234@user" src="[link]> ## Reproduction [link] - create with `create-vite-app` with command `yarn create vite-app project-name --template vue-ts` - Open any file that imports *.vue files ## System Info - **required** `vite` version: 1.0.0-rc.8 - **required** Operating System: macOS v10.15.5 - **required** Node version: v12.16.1 - Optional: - npm/yarn version: 1.22.4 - Installed `vue` version (from `yarn.lock` or…

### CASE-9087 · [1.0.0-rc.6]: CodeSandbox demos that uses Vite are broken after upgrade.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug CodeSandbox demos that uses `vite@^1.0.0-rc.6` are broken and throws this error in the console: ![image]([link]) Demos that are locked to `1.0.0-rc.4` works properly. ## Reproduction Broken (uses 1.0.0-rc.6): [link] Working (uses 1.0.0-rc.4): [link] ## System Info (Provided by the…

### CASE-9089 · bareImportRE test error
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ## Describe the bug I use the default config of vite，and rollup generates file content like this ![image]([link]) when it goes to 'vite:optimize-dep-assets' plugin, vite treats importee: '\u0000../../asset/icons/selectmenu-collected.svg?commonjs-proxy' as bare node modules, which can not be resolved. ## System Info - **required** `vite` version: 1.0.0-rc.4 - **required** Operating System: windows - **required** Node version: 10.21.0 ## Logs (Optional if provided reproduction) 1. Run `vite` or `vite build` with the `--debug` flag. 2. Provide the error log here.

### CASE-9091 · vite generate abosulte path for _assets. there should be an option to use relative path
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: enhancement
- **Excerpt**: ## Describe the bug I am making a website where I have no control over in which folder path it will be hosted (ipfs) Currently vite generate path as abosulte path from the root.. This requires me to post-process the files to change them to relative path It would be good to have an option to have the asset relative to each other. so when a image is requested from a js file, its path should be relative to it.

### CASE-9092 · importing specific modules from lodash-es imports everything
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Doing: ``` import { orderBy } from "lodash-es"; ``` imports every lodash module resulting in refreshes taking 5+ sec (during dev): ![image]([link]) Is this a fundamental limitation of the browser module system, `lodash-es` package, or Vite itself? ## Reproduction ``` yarn add lodash-es ``` ``` import { orderBy } from "lodash-es"; ``` ## System Info - **required** `vite` version: `1.0.0-rc.4` - **required** Operating System: Windows 7 - **required** Node version: `v12.4.0` - Optional: - yarn: `1.19.1`

### CASE-9094 · lazy imported css is lost in vite build
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug If a lazy loaded module import a css module. The css is lost after `vite build`. ## Reproduction [link] The `Count.tsx` module is lazy loaded, but it's style is lost when `npm run build`. `npm run dev` works fine. ## System Info - **required** `vite` version: 1.0.0-beta.11 - **required** Operating System: macos - **required** Node version: 12.16.2

### CASE-9095 · Lazy Loading & Code Splitting Components
- **Principles**: P-A3, P-H1 · **Env**: webpack, vue, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** With Webpack & vue-loader, lazy loading and code splitting is pretty simple to do, but it seems like it doesn't work in Vite: App.vue: ```vue <template> <div> <p> Count: {{ count }} </p> <button @user="count++">increment</button> <div v-if="count >= 1"> <LazyComponent /> </div> </div> </template> <script> export default { components: { LazyComponent : () => import('./LazyComponent.vue') }, data: () => ({ count: 0 }), }; </script> ``` LazyComponent.vue: ``` <template> <h1>Lazy Component</h1> </template> ``` index.html: ```…

### CASE-9099 · `experimental.bundledDev` fails to resolve virtual modules (breaks UnoCSS and Vue DevTools)
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬3 · open · labels: p3-minor-bug/feat: bundled-dev
- **Excerpt**: ### Describe the bug When enabling the `experimental.bundledDev` option in Vite, plugins that rely on injecting and serving **Virtual Modules** fail to work correctly. I tested this with two major ecosystem plugins: `unocss` and `vite-plugin-vue-devtools`. Both broke simultaneously when `bundledDev: true` was enabled. It seems the dev server fails to resolve, bundle, or serve virtual modules, resulting in 404 errors or missing code. <img width="1211" height="213" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce 1. Scaffold a standard Vite + Vue project. 2. Install…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-9009 · "__dirname is not defined in ES module scope" in vite.config.js with module type in package.json
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs documentation
- **Excerpt**: ### Describe the bug According to [link] vite.config.js may use ES module syntax and will replace __dirname. However when doing this in the following multi-page vite.config.js, it will fail. ## vite.config.js ``` import { resolve } from "path"; export default { sourcemap: true, build: { rollupOptions: { input: { primary: resolve(__dirname, "index.html"), secondary: resolve(__dirname, "secondary.html"), }, output: { assetFileNames: "assets/[name][extname]", }, }, }, }; ``` ## package.json ```json { "name": "multipage-bug", "private": true, "version": "0.0.0", "type": "module", "scripts": {…

### CASE-9010 · "You must supply options.input to rollup" Error during build
- **Principles**: P-G4, P-E3 · **Env**: vite, react
- **Signals**: 👍1 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Recently migrated from 2.7.13 to 2.8.0 The following error is throwing on `vite build` command "You must supply options.input to rollup" vite.config.js ``` import { defineConfig } from 'vite'; import { createHtmlPlugin } from 'vite-plugin-html'; import svgr from 'vite-plugin-svgr'; import legacy from '@user/plugin-legacy'; import react from '@user/plugin-react'; export default defineConfig(() => ({ define: { // as the `process` is not injected by vite, we set it manually to avoid error in inner modules 'process.env': process.env, }, build: { outDir: 'build', }, plugins: […

### CASE-9024 · Browser return 404 when path includes .(dot)
- **Principles**: P-G4, P-E3 · **Env**: vite, webpack, vue
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug vite crash with browser 404 when path includes .(dot) character. Works with out dot ![____htmlWebpackPlugin_options_title___]([link]) Crash with dot ![localhost_と_ネットワーク]([link]) It works well when I use vue-cli, so it looks a bug. ### Reproduction Repo is [here]([link]) First, create a project with vue-cli. ``` ~/g/g/k/L/vite (master ⚡☡+) vue create hello-world Vue CLI v4.5.15 ? Please pick a preset: Manually select features ? Check the features needed for your project: Choose Vue version, Babel, TS, Linter ? Choose a version of Vue.js that you want to start the project…

### CASE-9066 · Two-level route with react-router-dom : page don't load
- **Principles**: P-G4, P-E3 · **Env**: macos, react, vite, vue
- **Signals**: 👍4 💬4 · closed · labels: pending triage/feat: html
- **Excerpt**: ### Describe the bug When using the `BrowserRouter` component from `react-router-dom`, with a two-level route. The page won't load when reloading. The bug is not there when using the `HashRouter` instead. ### Reproduction [link] 1. navigate to users route 2. select a user to redirect on his profile page 3. reload, and 🐛 is here You can also try with the NoReload route ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue --binaries --browsers`: ```node System: OS: macOS 11.2.3 CPU: (8) arm64 Apple M1 Memory: 334.61 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries:…

### CASE-9098 · Function-form `manualChunks` is called but its assignments are silently discarded (Vite 8 / rolldown) — lazy chunk pulled onto the boot path
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug Under Vite 8, the **function form** of `build.rollupOptions.output.manualChunks` is called but its return values are **silently discarded**. The [v8 migration guide]([link]) says the object form is removed and the function form is *deprecated* — deprecated, however, should mean "works with a warning", not "accepted and ignored with no warning". Concrete failure: a shared CJS module that the function assigns to a static chunk is instead colocated into the chunk of its dynamic-only CJS requirer. The entry chunk then **statically** imports that supposed-to-be-lazy chunk, and…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-9015 · dev server: debug flag overrides DEBUG env variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Running `DEBUG=* vite dev --debug` enables only debug on `vite:*` instead of `*`, because vite overrides DEBUG env. Expected behavior: vite leaves `DEBUG=*` or `DEBUG=*,vite:*` and all debugs are printed Actual behavior: vite replaces `DEBUG=vite:*` and only vite's debugs are printed. Source location of the issue: [link] tool]/blob/f346d89741b3c3a5287ce8b03637e520777d3674/packages/vite/bin/vite.js#L31 Should I prepare a PR for this or is it the intended behavior? ### Reproduction [link] Looking for `vite-plugin-layouts` logs, command what works: `DEBUG=vite-plugin-layouts…

### CASE-9020 · define not working with typescript vue template
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Using the vue-ts template, and defining a variable in the define section of the vite config, throws an error when building (works in dev) ### Reproduction create a new vite vue-ts template project ``` $ pnpm create vite my-vue-ts-app -- --template vue-ts` $ cd my-vue-ts-app $ pnpm i ``` vite.config.ts ```js export default defineConfig({ define: { __BUILD_DATE: JSON.stringify(Date()) }, plugins: [vue()] }) ``` main.ts ``` import { createApp } from 'vue' import App from './App.vue' createApp(App).mount('#app') console.log(__BUILD_DATE) ``` and then run build ``` ➜…

### CASE-9023 · Dev sever fails to start when inaccessible paths exist in project root
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, vue
- **Signals**: 👍2 💬4 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug When starting the Vite Dev Server, either by the `vite` command or via `createServer()`, if there are inaccessible paths in the project root then the dev server fails to load. ### Reproduction Create a new Vite project: `$ yarn create vite test --template vue` `$ cd test` `$ yarn` Create a directory owned by root ( or any user other than the one running vite ), and make it inaccessible to other users: `$ sudo mkdir private` `$ sudo chmod o= private` Attempt to start vite dev server: ``` $ yarn dev yarn run v1.22.15 warning package.json: No license field $ vite error when…

### CASE-9025 · Library build using both script setup and regular script tags resulting in undefined references
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍1 💬4 · closed · labels: bug: upstream/feat: library mode
- **Excerpt**: ### Describe the bug Using Vitejs + Vue, following a standard init : ``` $> npm init vite@user ✔ Select a framework: › vue ✔ Select a variant: › vue ``` Using both `<script setup>` and `<script>` tags within an SFC component lead to undefined reference on the data var used in a `v-modal` (check out HelloWorld.vue in the linked Reproduction repo below) Upon trying to use the input tag at the runtime, the following error is displayed : ``` Uncaught ReferenceError: testData is not defined ``` The reason to that is the following generated function inside the built `dist/test-lib.umd.js` file :…

### CASE-9031 · Regression: Optimized dependencies in 2.6.x cannot access `import.meta`
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: edge, macos, vite
- **Signals**: 👍5 💬4 · closed · labels: pending triage/regression
- **Excerpt**: ### Describe the bug Dependencies optimized by Vite are getting a hardcoded empty object instead of `import.meta` since `2.6.0-beta.0`. This means such dependencies cannot access `import.meta.hot` API or any environment variable like `import.meta.env.SSR`. This is a [workaround implemented in `vite-ssr`]([link]). However, I hit a wall when trying to workaround `import.meta.hot.on(...)` in Vitedge :/ Thanks! ### Reproduction [link] ### System Info ```shell System: OS: macOS 10.15.7 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 152.89 MB / 16.00 GB Shell: 5.7.1 - /bin/zsh…

### CASE-9033 · HOST environment variable no longer works as of v2.6.0
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍3 💬4 · closed · labels: pending triage/regression
- **Excerpt**: ### Describe the bug When using [email], I could specify the host name for the dev server in an `.env` file. This breaks in [email] PS: I'm aware, that one can *also* use the `--host` flag ### Reproduction ```js // vite.config.js import { defineConfig } from 'vite'; import dotenv from 'dotenv'; import fs from 'fs'; import path from 'path'; dotenv.config(); export default () => defineConfig({ server: { host: process.env.HOST, port: process.env.PORT, https: process.env.HTTPS === 'true' ? { cert: fs.readFileSync(path.resolve(__dirname, process.env.SSL_CRT_FILE)), key:…

### CASE-9062 · pnpm breaks svelte template of npm init @user/app
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When creating a template project using `npm init @user/app` and the svelte option the browser breaks when going to `localhost:3000` with error: ``` Uncaught ReferenceError: __DEFINES__ is not defined <anonymous> env.ts:17 env.ts:17:16 <anonymous> env.ts:17 InnerModuleEvaluation self-hosted:2379 InnerModuleEvaluation self-hosted:2379 evaluation self-hosted:2330 ``` ### Reproduction Just run the following: ``` npm init @user/app √ Project name: · vite-project √ Select a framework: · svelte √ Select a variant: · JavaScript cd vite-project pnpm install npm run dev ``` then…

### CASE-9063 · @user of sass in 2.3.2 fails
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: Using Bulma and importing a sass file from within an scss file causes the error: ```node Plugin: vite:css File: /Users/theuser/Documents/GitHub/my-app/src/sass/variables.scss Error: NoSuchMethodError: method not found: 'apply$2' on null ``` Specifically, the import looks like this: ```scss @user 'node_modules/bulma/sass/utilities/_all.sass'; ``` In Vite Land Discord it was suggested that this PR may have caused the problem as the error doesn't occur with vite version 2.3.1 ### Reproduction This can be reproduced by installing Bulma ``` npm i bulma ``` and referencing the file in the import as…

### CASE-9078 · plugin-legacy: polyfills can't share dependencies with other chunks
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug In my Vue CLI-based project, I used an environment variable based on `VUE_CLI_MODERN_MODE` and `VUE_CLI_MODERN_BUILD` to conditionally load a polyfill and hook it into a Vue lifecycle hook: ```js import Vue…

### CASE-9081 · Alias or duplicate module problem
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍1 💬4 · closed · labels: needs reproduction
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [ ] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug Hello, I am having issues when importing a node module, that is supposed to share a variable. Since the v2 of vite, I think there is an alias not resolving well. Here is the example with Routify (Svelte):…

### CASE-9082 · No longer able to do Vue.prototype.$foo = 'bar';
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug Previously, using vue-cli, I was able to set global variables from inside my main.js such as ``` import Vue from 'vue'; Vue.prototype.$is_dev = process.env.NODE_ENV === 'development'; Vue.prototype.$is_app =…

### CASE-9090 · Import statement with variable does not work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug I can not pass any variable to the import statement. ## Reproduction This **works:** ```js setup() { import("heroicons/solid/academic-cap.svg").then((v) => { console.log(v.default) }); } // /@user/heroicons/solid/academic-cap.svg ``` This **does not:** ```js setup() { const link = "heroicons/solid/academic-cap.svg"; import(link).then((v) => { console.log(v.default) }); } // Uncaught (in promise) TypeError: Failed to resolve module specifier 'heroicons/solid/academic-cap.svg' ``` ## System Info - `vite` version: v1.0.0-rc.4 - Operating System: Microsoft Windows 10 Pro N…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-9067 · Cannot import slick-theme from the slick-carousel package
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: feat: css
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Working on a project which uses the `slick-carousel` package. As soon as i import `slick-carousel/slick/slick-theme.scss` an error is thrown. ```node Plugin: vite:css File: .../node_modules/slick-carousel/slick/slick-theme.scss Error: expected ")". ╷ 24 │ @user slick-image-url(../../node_modules/slick-carousel/slick/$url) { │ ^ ╵ node_modules/slick-carousel/slick/slick-theme.scss 24:27 @user src/styles/app.scss…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-9075 · Sourcemaps incorrect line number for Chrome debugger
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, vite, vue, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: **⚠️ IMPORTANT ⚠️ Please do not ignore this template. If you do, your issue will be closed immediately.** - [x] Read [the docs]([link]). - [x] Make sure this is a Vite issue and not a framework-specific issue. For example, if it's a Vue SFC related bug, it should likely be reported to [link] instead. ## Describe the bug Chrome's devtool debugger points to wrong locations in source files. ## Reproduction Create new `react-ts` project with Vite. ``` yarn create @user/app my-project --template react-ts ``` Add a `debugger` in source code and run app in Chrome (`yarn dev`). See breakpoint trigger…

### CASE-9077 · href="#" inside head tag make vite 2.0.0 build failed
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [ ] Read [the docs]([link]). - [ ] Use Vite >=2.0. (1.x is no longer supported) - [ ] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug href="#" inside head tag makes vite 2.0.0 build failed. like: ``` <head> <meta charset="UTF-8" /> <!-- next line will casue vite build failed --> <link rel="icon" href="#" /> <meta name="viewport"…

### CASE-9093 · Sourcemaps pointing to nowhere
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍1 💬4 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug Some of the sources in app are just not pointing to the correct sourcemaps for the most cases. When I put the breakpoint they jump to random lines, sometimes the lines mentioned in the stacktraces are not even in the corresponding module and are also off. ## Reproduction…

### CASE-9096 · All Typescript sourcemaps resolve to `input.ts` when running live
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-G4, P-E3 · **Env**: chrome, typescript, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ## Describe the bug When including Typescript, the generated source map for each file maps it the file to `input.ts`. This causes problems with breakpoints, as well as logging locations. Additionally, during loading in the Chrome debugger, you can sometimes see all Typescript files flash as `input.ts`. ## Reproduction ```sh $ npx create-vite-app $ npm i $ echo "console.log('test')" > test.ts $ echo "import './test'" >> main.js $ npm run dev ``` ```sh $ curl '[link] > console.log("test"); > > > //#…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-9079 · Apparent race condition in recursive resolveId logic
- **Principles**: P-F5, P-H3 · **Env**: vite
- **Signals**: 👍2 💬4 · closed · labels: pending triage
- **Excerpt**: - [x] Read the docs. - [x] Use Vite >=2.0. - [x] Not upgrading from 1.x. --- First up, sorry in advance – I don't have a good repro case for this. While exploring adopting Vite in a large codebase I ran into a mysterious error with an import like this in an SCSS file: ```css // in _abc.scss @user './_xyz'; ``` This is supposed to resolve to `_xyz.scss` with the extension, but I was receiving an error from this line of code [link] tool]/blob/5b56d70c1d173d4c5e3d9532f9c3bc6f8bfc020c/packages/vite/src/node/plugins/css.ts#L869 where it said† it couldn't find the file `/path/to/_xyz` (without the…

