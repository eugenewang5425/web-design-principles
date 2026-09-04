# Case Chunk 076 — Round 76

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8501 · transform.filter.code regexes with .+ and /s flag cause "Maximum call stack size exceeded" on large files
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: p3-minor-bug/clarity: medium
- **Excerpt**: Hi! 👋 Firstly, thanks for your work on this project! 🙂 Today I used [patch-package]([link]) to patch `[email]` for the project I'm working on. The package which had Maximum call stack size exceeded had a JS file 5.7MB, I know it's a lot but It's a very complex thing, which can't be split unfortunately. <!-- 🔺️🔺️🔺️ PLEASE REPLACE THIS BLOCK with a description of your problem, and any other relevant context 🔺️🔺️🔺️ --> Here is the diff that solved my problem: ```diff diff --git a/node_modules/@user/vite-builder/node_modules/vite/dist/node/chunks/config.js…

### CASE-8502 · Support css module for files other than `.module.css`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug ### The Problem According to the docs, vite.config.ts → css.modules.scopeBehaviour is passed through to postcss-modules, which “assumes all classes are local by default” and allows users to override that behaviour. However, in practice Vite only applies the CSS Modules transform to files whose names include the .module. infix (e.g. button.module.scss). When the same file is renamed to button.scss, the transform is skipped entirely — the file is treated as global CSS — even if scopeBehaviour: 'local' is explicitly set. This means the scopeBehaviour option is effectively…

### CASE-8503 · SVG `<image>` element asset are not transformed
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have an SVG image in my *index.html*.\ This SVG contain an `<image href="img.png">`. *img.png* is not exported as asset. ### Reproduction [link] ### Steps to reproduce ### input * *index.html* (containing `<img src="logo.svg">`) * *logo.svg* (containing `<image href="img.png">`) * *img.png* ### output * *index.html* (containing `<img src="logo-CaNPvlKk.svg">`) * *logo-CaNPvlKk.svg* (containing `<image href="img.png">`) ### expected output * *index.html* (containing `<img src="logo-VewXuH7r.svg">`) * *logo-VewXuH7r.svg* (containing `<image href="img-BueZsOOv.png">`) *…

### CASE-8504 · CSS preprocessor support with `transformer: 'lightningcss'`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, vite
- **Signals**: 👍1 💬7 · closed · labels: feat: css/p2-nice-to-have
- **Excerpt**: ### Describe the bug Lightningcss fails on scss single line comments when using it as a transformer. It's strange because it should be processed by scss to generate valid css comments since it supports only multiline comments. I has another part of an app bundling by rspack and it works fine so it appears a vite bug ### Reproduction [link] ### Steps to reproduce Reproduction link has a github repo with default vanilla setup, enabled lightningcss, renamed style.css to scss and added a comment ``` npm install npm run build ``` ### System Info ```shell System: OS: macOS 15.1.1 CPU: (14) arm64…

### CASE-8511 · Bug：Cannot load resources that start with //.
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Adding font resources that start with // in the index.html file in the root directory causes an error in the console. The error message is `[vite] Pre-transform error: Failed to load url //at.alicdn.com/t/c/font_3604131_25pwmwrknp2.js (resolved id: //at.alicdn.com/t/c/font_3604131_25pwmwrknp2.js). Does the file exist?` ### Reproduction [email] ### Steps to reproduce 1. Create an empty project with Vite. 2. Add `<script src="//at.alicdn.com/t/c/font_3604131_25pwmwrknp2.js"></script>` in the index.html file in the root directory. 3. Run `npm run dev` to start the…

### CASE-8514 · ENOENT error in dev mode
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍7 💬7 · open · labels: pending triage
- **Excerpt**: ### Describe the bug Hello folks 👋 I am working on Linaria with @user, recently we an issue about the problem in dev mode, [link] To provide context, Linaria performs module evaluation like `vite-node` as we need to transform styles and for that we should know actual values, for example: ```ts import { colors } from './x' const style = css` color: ${colors.red}` ``` For that, we will load files on our side, transform, evaluate and get results. The problem that we faced with Vite is that when dependencies are resolved ([link]), they don't exist on a disk yet. For example: ```…

### CASE-8515 · Cannot build using symlinks. v4.4.x
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Build fails when adding the `src` folder using a symbolic link. In v4.3.9, it succeeds and the v4.4.x fails. --- vite v4.4.3 building for production... ✓ 7 modules transformed. ✓ built in 102ms Unexpected character '@' (Note that you need plugins to import files that are not JavaScript) file: D:/data/test/vite-lib/src/hello-element.ts:12:0 10: * @user button - The button 11: */ 12: @user('hello-element') ^ 13: export class HelloElement extends LitElement { 14: /** error during build: RollupError: Unexpected character '@' (Note that you need plugins to import files that…

### CASE-8520 · Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: macos, vue, vite
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug These day i transform a vue2 builded by vue-cli to vite3;when i run serve in local, browser throw error as follow: <img width="669" alt="image" src="[link]> i think it causes by commonjs, but I set config it also has not work. ` //vite.config.js import { viteCommonjs } from '@user/vite-plugin-commonjs' plugins: [ ... viteCommonjs({ skipPreBuild: true }), ... ],` Search for a few days but no common problem，hope to get solution as soon as possible ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.3 CPU: (8) x64 Apple…

### CASE-8526 · Greensock GSAP ScrollTrigger is failing with vite
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, vite, react
- **Signals**: 👍0 💬7 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I am trying to create an animation with Greensock GSAP and I am using the GSAP ScollTrigger plugin, I want a series of cards to appear when the page is scrolled away. This works fine on Create React App, but it doesn't work in Vite. I have replicated it using Vanilla JS, Create React App, and even Parcel and all worked fine. Vite doesn't seem to support scroll animations. I have linked ### Reproduction [link] ### Steps to reproduce Clone the repo: `git clone [email]:DeveloperAspire/card-pile.git` Run `yarn` to install dependencies Run `yarn dev` to start up the…

### CASE-8533 · Inconsistent Builds in Module Sets
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, vite
- **Signals**: 👍2 💬7 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug On a same immutable application codebase and environment prerequisites `Vite:build` produces bundles including different sets of dependent modules. As a consequence chunk content and hashes can mutate from build to build. ### Reproduction [link] ### Steps to reproduce ```shell npm i while true; do npm run build | grep 'modules transformed' ; done ``` ### System Info ```shell System: OS: macOS 12.4 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 182.59 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.15.1 - ~/.nvm/versions/node/v16.15.1/bin/node npm:…

### CASE-8534 · SSR transform doesn't respect hoisting
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍1 💬7 · closed · labels: contribution welcome/p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug In Javascript, imports are hoisted. So the following code works ``` decamelize("HelloThere") import decamelize from 'decamelized' ``` But when transformed in vite ssr, it produces the following ``` __vite_ssr_import_0__.default("HelloThere"); const __vite_ssr_import_0__ = await __vite_ssr_import__("decamelize"); ``` Which obviously doesn't work and produces the following error ``` Cannot access '__vite_ssr_import_0__' before initialization ``` Originally opened in [link] but it's a Vite issue actually. I believe this is a bug for two reasons: - Valid JavaScript code…

### CASE-8541 · build.target = 'es2019' together with base = './' results in import.meta still present in output js
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, ubuntu
- **Signals**: 👍0 💬7 · closed · labels: documentation/contribution welcome
- **Excerpt**: ### Describe the bug According to the docs [link] a valid esbuild target could be given to the build.target option. According to [link] 'es2019' build target should result in import.meta being transformed. This works as long as the base option is an absolute path, as soon as this is a relative path import.meta is still present in the js file generated by `npm run build`. See [link] and the used config [link] When changing to `base: '/'` the resulting js will not contain import.meta anymore ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.15 Ubuntu 22.04.1 LTS 22.04.1 LTS…

### CASE-8548 · Link to stylesheet is transformed to javascript import
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍6 💬7 · closed · labels: enhancement/feat: css/feat: html
- **Excerpt**: ### Describe the bug I'm trying to include an external css file in my html, but vite transforms it to an import from the javascript bundle, so I get this error: `Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/css". Strict MIME type checking is enforced for module scripts per HTML spec.` I have this line in `index.html`: ``` <link rel="stylesheet" href="/css/style.css?family=Splash" /> ``` In production, the css is available in that location and for development I have included a proxy rule for it, so I would like the line to…

### CASE-8552 · Vite build fail on css-post since 2.9.2
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍3 💬7 · closed · labels: regression
- **Excerpt**: ### Describe the bug Since 2.9.2, I can't build my project. There seems to be some kind of CSS transform error. I want to add that reverting to 2.9.1 fix the issue, so that might be introduced recently. ``` [vite:css-post] Transform failed with 2 errors [...] ELIFECYCLE Command failed with exit code 1. ``` The `;` inside the string in this line seems to be the cause: ``` @user url('[link]); ``` ⚠️ Note: I had to modify the `esbuild\lib\main.js` file to trace it back here, it could be nice to have a better error display. Btw, I still don't really know if it's cause by Vite or Esbuild... ###…

### CASE-8564 · context method emitFile() is not supported in serve mode. This plugin is likely not vite-compatible.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: wontfix/pending triage
- **Excerpt**: ### Describe the bug I try to use this.emitFile like this ``` transform() { const css = sample(allPaths); this.emitFile({ type: "asset", source: css, id: "", fileName: "atomic.css", }); }, ``` but emitfile is not generated a d gives warning: context method emitFile() is not supported in serve mode. This plugin is likely not vite-compatible. (In rollup this.emitFile is used with generateBundle instead of transform) Is there any Changes in vite because I take the reference from rollUp ### Reproduction . ### System Info ```shell "vite": "^2.8.1" ``` ### Used Package Manager npm ### Logs _No…

### CASE-8579 · @user/plugin-react-refresh doesn't work with generic react functional components
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript
- **Signals**: 👍0 💬7 · closed · labels: has workaround
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> Generic typescript react functional components cannot be transformed using `plugin-react-refresh`. This works with the [typescript compiler]([link]). <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction ```typescript interface MyProps<T> { readonly example: T; } export const MyComponent =…

### CASE-8587 · [v.1.0.0-rc.4] RangeError: Invalid count value
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ubuntu, vite, react
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug I'm using vite to build react app and I have a bug when execute `vite build`. This bug occurred at [email]-rc.4, but not [email]-rc.3 . And also, the bug didn't occur when I remove styled-components from the project. ## Reproduction [link] ## System Info - `[email]-rc.4` - OS: `Ubuntu 18.04` - Node: `v14.5.0` - Optional: - yarn: `1.22.4` ## Logs Below is a build log. ``` $ yarn build yarn run v1.22.4 $ tsc --noEmit && vite build vite v1.0.0-rc.4 ⠧ Building for production... [vite] warnings while transforming index.09068383.js with esbuild: The following expression is not…

### CASE-8589 · Transforming index.html sets Content-Type: application/javascript
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug Transforming `index.html` sets `Content-Type: application/javascript` for `index.html`. Should be `text/html`. ## Reproduction Please provide a link to a repo that can reproduce the problem you ran into. ```javascript const server = vite.createServer({ ...options, transforms: [{…

### CASE-8591 · Template Strings reformatted to newlines with oxc minify enabled.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I've taken ages trying to figure this out and I presume is a bug or lacking documentation for the oxc minify transformation. A template literal string with new lines. Is not being compressed when compress is enabled. The strings in question are vertex and fragment shaders. That should retain \n to output new lines in the shader program but compress. I am not sure how to convert and transform properly. So even the second example with a string like `TEST \n TEST` is being pretty formatted. I am pre transforming the strings. When minify is disabled the string is compressed.…

### CASE-8595 · ssr: ssr.external is not the top level priority
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬6 · open · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug On the server side, we hope the third-party module will be externalized correctly. If I set an alias for the third-party module, Vite will transform the URL to a local file system path instead of an externalized path. Even though I set `ssr.external` to the module. It's a simple reproduct code ```js // server-entry.js import * as Vue from 'vue' ``` ```js // vite.config.js import { resolve } from 'node:path' import { defineConfig } from 'vite' // in order to trigger ssr server restart export default defineConfig({ resolve: { alias: { vue: resolve(process.cwd(),…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8505 · Using '/' as resolve.alias breaks the assets urls
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Vite: **5.4.10** Inside `vite.config.ts` I'm setting ```js resolve: { alias: { '/': srcDir, }, }, ``` and inside my React app I'm importing TS file and assets files as ```js import {Component} from '/my-app/Component' import AssetUrl from '/assets/my-asset.svg' ``` TS files work as expected, but assets urls don't. Generated assets urls are correct, **but** the Vite Dev Server does not serve them. ```jsx <img src={AssetUrl}/> <!-- This shows no image. --> ``` Removing the `resolve.alias` and changing the imports to be relative makes the assets urls work again. In…

### CASE-8507 · Got wrong url when importing some svg files
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬7 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug **This problem only occurs in prod mode.** There are two svg files in reproduction that are imported in the same way, but get different results ```ts import url_01_url from "./assets/01.svg?url"; import url_02_url from "./assets/02.svg?url"; ``` ```txt 01: /assets/01-CAOkh7Dq.svg 02: data:image/svg+xml,%3csvg%20xmlns='[link] ``` ### Reproduction [link] ### Steps to reproduce ```shell git clone [email]:hungtcs/vite-svg-assets-reproduction.git cd vite-svg-assets-reproduction pnpm run build pnpm run preview ``` ### System Info ```shell System: OS: macOS 14.6.1 CPU: (8) arm64…

### CASE-8508 · Dynamic imports don't work from inlined web worker
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍0 💬7 · open · labels: pending triage
- **Excerpt**: ### Describe the bug I'm using an inlined (?worker&inline) web worker that dynamically imports some other libraries. It works well in dev mode but fails in the production build since the filenames are relative which doesn't work with the worker's blob url. ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. Open [link] 2. Open dev tools 3. Click "send message to worker" button 4. Check the error message in the console ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh…

### CASE-8512 · create vite template react gives typescript errors on jsx files
- **Principles**: P-A3, P-H1 · **Env**: vite, react, typescript
- **Signals**: 👍1 💬7 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug <img width="425" alt="image" src="[link] tool]/assets/16365134/39ed7fbe-11f1-4edb-946a-7c26325046d4"> vite template react written in JS a bunch of vs code errors. if i add an empty jsonconfig.json they go away. any ideas why? 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686) example error and why is this a TS error? yarn create vite newApp --template react is how i created the project and i expected it to work out of the box in vscode strangly these errors go away when i add an empty jsconfig.json file to the root…

### CASE-8516 · Vuetify styles are not treeshaked
- **Principles**: P-A3, P-H1 · **Env**: windows, vue
- **Signals**: 👍0 💬7 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I'm building a component libirary that is wrapper on vuetify every thing is good. I'm expecting: - When I use a utility class or a component I load only these styles in the final build Currently: - When I use any component from vuetify the generated css file contains the whole styles of vuetify which increases the the build size. ![image]([link] tool]/assets/19964514/eea2e66a-8825-495c-b62b-e8a19f93e1cf) ### Reproduction [link] ### Steps to reproduce npm i && npm run build ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (12) x64 AMD Ryzen 5 5600H with…

### CASE-8521 · devserver proxy to grafana crashs
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug normally proxy to grafana without crash ### Reproduction tring to create the demo ### Steps to reproduce 1、run dev server 2、proxy the /grafana prefix to the grafana server 3、open a page with a iframe whose src is a /grafana/xxx/dashboard address 4、and the dev server crashes every time when I open the page, with the following error, everything goes well except this one VITE v4.0.4 ready in 711 ms ➜ Local: [link] ➜ Network: use --host to expose ➜ press h to show help node:events:490 throw er; // Unhandled 'error' event ^ Error: read ECONNRESET at TCP.onStreamRead…

### CASE-8525 · Vite bundles react-dom.development in the production build on lib mode
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In this image - 1st build is a regular build with React and it correctly includes only the `production` version of `ReactDOM` - 2nd build is using `lib` mode and it has a huge bundle size due to Vite bundling the `development` version of `ReactDOM` as well ![image]([link]) This seems to be the same issue as [link] tool][ref] ### Reproduction [link] ### Steps to reproduce - npm install - npm run build and observe the production js file. You can see `development` bundle is included ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM)…

### CASE-8528 · Dynamic Import of JSON File skips import of Keys with Fullstop/Dot (.)
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬7 · open · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug When dynamiclly importing a JSON file that contains keys with fullstops in it (i.e. `foo.bar`), these key/value pairs are not imported but skipped: de.json: ```json { "foo": "bar", "foo.bar": "baz" } ``` Import: ```js const thing = await import(`./translations/${locale}.json`); console.log(thing); ``` Output: It can be seen, that "foo.bar" only exists under "default": <img width="280" alt="image" src="[link]> Expected Output (previously working with Webpack Dynamic Import): "foo.bar" exists at top level: <img width="207" alt="image" src="[link]> ### Reproduction [link]…

### CASE-8532 · [commonjs--resolver] Failed to resolve entry for package "/my-vue-app". The package may have incorrect main/module/exports specified in its package.json.
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬7 · closed · labels: p2-nice-to-have/feat: build
- **Excerpt**: ### Describe the bug I have spent half a day trying to figure out why my build fails. This error message did not tell me where in my code the problem was. **The error message should be clearer and show where the error is.** Please follow the `Steps to reproduce` below. If I add a `<img src="/" />` the build fails. All I did was take the official vite vue template and replaced this line and the build fails: **App.vue** ```diff - <img src="/vite.svg" class="logo" alt="Vite logo" /> + <img src="/" class="logo" alt="Vite logo" /> ``` Then if I run build I get this error:: ```` $ npm run build >…

### CASE-8535 · Vite >=3.1.5 breaks Jotai babel plugins
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬7 · closed · labels: p4-important
- **Excerpt**: ### Describe the bug Vite 3.1.5 changed the processing of package exports. This breaks two [Jotai]([link]) plugins (debug-label and react-refresh). vite dev chokes with the following error: <img width="563" alt="image" src="[link]> Reverting to 3.1.4 makes the error go away. The author of Jotai thinks this may be a vite problem, not a problem with Jotai itself. See discussion with initial analysis here: [link] ### Reproduction [link] ### Steps to reproduce pnpm install, then pnpm dev ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 9 6900HS with Radeon…

### CASE-8537 · Doesn't work with "Indexed-color mode" images
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, vite
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Good afternoon, today I noticed such an error. You can check on these images: [link] Images in "Indexed-color mode" are not converted, they are simply skipped. ### Reproduction npm run build && [link] ### System Info ```shell System: OS: Linux 4.15 Ubuntu 18.04.6 LTS (Bionic Beaver) CPU: (2) x64 AMD EPYC Processor Memory: 899.51 MB / 1.90 GB Container: Yes Shell: 4.4.20 - /bin/bash Binaries: Node: 16.17.0 - /usr/bin/node npm: 8.19.1 - /usr/bin/npm npmPackages: vite: ^3.0.0 => 3.1.0 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our…

### CASE-8551 · There is a problem with protoubfjs when building with the vite command.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: bug: upstream/has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug There is a problem with protoubfjs when building with the vite command. After the build is completed, an error occurs that ReflectionObject$5.prototype cannot be found. It works properly when running a local server without building. - ** protobuf call file: proto.ts ** ``` import { load, Type } from "protobufjs"; const { root } = await load("/src/protobuf/proto/command.proto"); ``` - ** browser error ** ``` (Field$6.prototype=Object.create(ReflectionObject$5.prototype)).constructor=Field$6).className="Field";var Enum$9=_enum,types$4=types$5,util$f= ``` ![image]([link])…

### CASE-8555 · Web Worker imports don't respect rollupOptions.output.assetFileNames on build
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/feat: web workers
- **Excerpt**: ### Describe the bug - By default, building a Vite project generates `[name].[hash].[ext]` - Using `rollupOptions.output.assetFileNames` (and entry/chunkFileNames): `[name].[ext]` we can remove the hashing - However, this does not work for workers Repro: - Go to [sample project on Stackblitz]([link]) - Open terminal - `yarn build` - Observe `/dist/assets` folder output Expected: - All files without hash Actual: - Workers are generated with a hash still <img width="859" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell envinfo doesn't work on Stackblitz, but whatever is…

### CASE-8557 · Stop serving static files from root directory
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍22 💬7 · closed · labels: enhancement/p2-to-be-discussed
- **Excerpt**: ### Clear and concise description of the problem Vite serves files under the root directory: [link] tool]/blob/1e9615d8614458947a81e0d4753fe61f3a277cb3/packages/vite/src/node/server/index.ts#L558 This has caused some collisions. E.g. a SvelteKit user recently reported that they cannot have a URL path of `tests` because the static serving will attempt to serve the `tests` directory ([link]). It's also caused quite a bit of confusion with the [`publicDir`]([link]) and [`base`]([link]) options because files end up being available via multiple URLs. E.g. if you have `public/image.png` you could…

### CASE-8558 · Use import xx from 'xx.css', production environment problem
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬7 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug `import xx from 'xx.css'` There is no problem in the development environment, but there is a problem in the production environment. This problem appeared after [email], there was no problem before. Here are the key screenshots Develop(css has content) <img width="1635" alt="image" src="[link]> Production(css content is empty) <img width="1552" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.2.1 CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz Memory: 833.20 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.14.0 -…

### CASE-8559 · Can't resolve submodule import when module's "exports" field doesn't have * pattern
- **Principles**: P-A3, P-H1 · **Env**: vite, webpack
- **Signals**: 👍0 💬7 · closed · labels: documentation/pending triage
- **Excerpt**: ### Describe the bug I use my company's package [Juno]([link]) and import the file Button component with subpaths ``` js import { RcButton } from "@user/juno/components/Buttons"; ``` Vite complains these error ![image]([link]) **When same code bundled with webpack, the path can be resolved correctly** ## workaround ### option1: import the module, not the submodule ``` import { RcButton } from '@user/juno' ``` ### option2: add * pattern to @user/juno's package.json ``` diff "exports": { ".": { "node": { "module": "./es6/index.js", "require": "./index.js" }, "default": "./es6/index.js" }, -…

### CASE-8562 · full page reload when component has been modified
- **Principles**: P-A3, P-H1 · **Env**: windows, react, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/feat: hmr
- **Excerpt**: ### Describe the bug Changing single component using create-react-app will show immediate results meanwhile using vite, it triggers full page reload. On large application its very bad DX because it takes 6 seconds to see results on even small changes. Any ideas why this is happening ? ![image]([link]) to reproduce: [link] download the zip cd apps/senf-workspace npm ci npm run vite:start change Navbar.jsx or any component. [link] ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i7-4702MQ CPU @ 2.20GHz Memory: 14.20 GB / 23.88 GB…

### CASE-8563 · [2.8.5] Invalid script being added to html
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬7 · closed · labels: p3-downstream-blocker
- **Excerpt**: ### Describe the bug I updated my project to vite 2.8.5, and found that my storybook using `storybook-builder-vite` started to fail. I now see this in my browser console: ``` iframe.html:1 Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec. iframe.html:1 Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec. ```…

### CASE-8575 · vite+ant-design-vue 开启css module 后加载组件库less文件初次加载时间会很慢
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> 利用vite搭建vue3+ant-design-vue项目，使用css modules时引用antdv组件的less文件时初次启动加载很慢 <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction vite.config.ts中的CSS配置为 ![image]([link]) 引用ant-design-vue的less文件 ![image]([link]) 在index.module.less中引用 ![image]([link]) 之后在BasicLayout.tsx中引用 import styles from…

### CASE-8576 · build error in production
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug when i excute ``` npm run build ``` ![image]([link]) because i add a plugin to css-module my css/scss file, but in development environment, [the project]([link]) can run ~ . Now i want to know the difference between development environment and production environment I need to change(plugin) ### Reproduction <!-- Please provide a link to a repo that can reproduce the problem you ran into. A reproduction is…

### CASE-8584 · favicon href is undefined after build
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug favicon href is undefined after build ![image]([link]) ## Reproduction [link] A reproduction is **required** unless you are absolutely sure that the the problem is obvious and the information you provided is enough for us to understand what the problem is. If a report has only…

### CASE-8590 · Basic setup for local dev not working
- **Principles**: P-A3, P-H1 · **Env**: vue, webpack, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: After following the instruction in the readme, I ended up with an error. ![image]([link]) I'm using the vue-next webpack template and added a new npm script for vite after `yarn add -D vite`. I then updated my index.html to what was in the instructions, created a Comp.vue component in `src/` but it isn't working. Am I missing something? `// Comp.vue` ```vue <template> <button @user="count++">{{ count }}</button> </template> <script> export default { data: () => ({ count: 0 }) } </script> <style scoped> button { color: red; } </style> ``` `// index.html` ```html <div id="app"></div> <script…

### CASE-8600 · how to avoid every page import all entry chunks when buiding a multi-page?
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When building a multi-page application with Vite, the generated pages automatically include all entry chunks, even if those chunks are not actually used/depended on by the page. What causes this behavior? The following pictures show this: index.html ![Image]([link]) error.html ![Image]([link]) ### Reproduction [link] ### Steps to reproduce npm run build ### System Info ```shell vite ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [x] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [x] Read the [Contributing…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8506 · Breakpoints in Vite React
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, vite, react, typescript, vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I decided to try Vite for myself. I use **VSCode** and **Google Chrome**, trying use it with **React Typescript** project, studied a lot of information, tried several approaches, but still did not understand why breakpoints do not work when the browser is launched in debug mode. If you set a breakpoint anywhere before launching F5, the page in the browser just hangs in debug pause mode and does not pass the breakpoint to VSCode, but if you set a breakpoint after the page loads, the breakpoints work, as I expect. I tried to create a JS project, a Vue project, the same…

### CASE-8524 · Debugging of Vite + Lit + TS problematic using VS Code.
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · open · labels: bug: upstream/p3-minor-bug/feat: sourcemap
- **Excerpt**: ### Describe the bug I discovered that the default Vite + Lit + TS project has issues with hitting breakpoints set on the local TS source within VS Code, prior to starting the dev server: 1. Breakpoint set in code here: ![image]([link]) 2. Dev server started up, debugger instead breaks here: ![image]([link]) This experience is extrapolated for any subsequent static or dynamic local TS module imports. Upon further investigation, I discovered this strange behaviour within the browser sources: <img width="1258" alt="Screenshot 2023-03-02 at 13 42 17" src="[link]> 1. A `/src/my-element.ts` file…

### CASE-8561 · index.html 在build的时候需要忽略里面的一些处理
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍2 💬7 · closed · labels: pending triage/p2-edge-case
- **Excerpt**: ### Describe the bug index.html 里面使用了服务端参数 {{cdnHost}} 在使用服务端参数的时候 <link > 会在build的时候被处理报错，希望能不对这个link处理，或者能配置忽略，当然我开发和build是分开两个index.html的 index.html ``` <!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1.0"> <link rel="icon" href="{{cdnHost}}/cdn/images/favicon.ico"> <link rel="stylesheet" href="{{cdnHost}}/cdn/printjs/print.min.css" type="text/css"> <title></title> </head> <body> <div id="app"></div> <script…

### CASE-8585 · use systemjs in index
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: duplicate
- **Excerpt**: ## Describe the bug is there a way to use systemjs in index.html for importing dynamically some library? this is my index.html ``` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <link rel="icon" href="/favicon.ico" /> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Vite App</title> <script type="systemjs-importmap"> { "imports": { "main": "[link] "lodash": "[link] } } </script> <script src="[link]></script> <script src="[link]></script> </head> <body> <div id="app"></div> <script type="module"> System.import('main'); </script> </body> </html> ```…

### CASE-8597 · Can't debug vite.config.ts unless pre-set a breakpoint at `dep-DBxKXgDP.js` in VSCode.
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: p3-minor-bug/feat: sourcemap
- **Excerpt**: ### Description I have tried the settings.json in [ref] and [[ref]]([link] tool][ref]). It just doesn't work for me, the breakponits in `vite.config.ts` just can't hit. This only works for me if I also set a breakpoint to `.\node_modules\vite\dist\node\chunks\dep-DBxKXgDP.js#L49224`: ```javascript const config = await (typeof configExport === "function" ? configExport(configEnv) : configExport); ``` which is in source code: [link] tool]/blob/494f8544a90dfb54dfc41ebd4b6971f6c1eeb8df/packages/vite/src/node/config.ts#L1836-L1838 Then a `step over/continue` will call the function and hit the…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8509 · Environment Variable is not working on VITE 5.0.12
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Please help !! I still cannot access the variables. The .env file is in the root and with preflix. I tried VITE_ and REACT_APP. VITE 5.1 ![301351301-b96c3a38-f556-4854-901f-e68b63429641]([link] tool]/assets/123962074/f1d299b1-5d59-418e-be9e-c27cb1e0b9b8) ![301351007-1408c712-5d60-4bb7-b12a-2c71d9d1c040]([link] tool]/assets/123962074/1cd01b98-246f-4702-b500-212350a3e9d0) ![301350950-ec126a11-f7ce-484d-bfa2-0333300e5895]([link] tool]/assets/123962074/a52124d8-52ca-45b0-bf29-de6db543d660) What is wrong???? I can not understand. It is a brand new installation of react + vite.…

### CASE-8530 · [Beta] Dotenv expand is failing the build - consider reverting processing process. env
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Hi, One of the breaking changes in vite late alpha is preventing us to run the beta: [link] tool]/commit/d5fe92cd2a0be2b8636e876a81a63921a808afb2 Parsing / expanding with dotenv process.env variable is highly disruptive and certainly can lead to unexpected behaviour. Here we are testing Warp terminal, it is injecting this WARP_PS1 containing `$`. I can see how this could randomly bite other users and some side effects might be hard to debug (if it actually expand some variables from process.env) <img width="1019" alt="Capture d’écran, le 2022-12-05 à 10 06 45"…

### CASE-8536 · maybeJSX throws a fatal error instead of a warning
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte, vite
- **Signals**: 👍0 💬7 · open · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug There should be some environmental variable to skip the `maybeJSX` variable bailing, or it should be a warning. This flags incorrectly for us, as we're specifically serving Svelte files without the Svelte plugin for integration with a file editor. This comes from line 198 of importAnalysis.ts: [link] tool]/blob/31f5ff3ef9ee071afa8cc66870e13e9753c3ab93/packages/vite/src/node/plugins/importAnalysis.ts#L198 Also see: [link] tool]/discussions/6246 ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5.1 CPU: (10) arm64 Apple M1 Max Memory: 87.70 MB / 32.00 GB…

### CASE-8539 · @user/plugin-legacy bug with buildPolyfillChunk and const type variable
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍0 💬7 · closed · labels: plugin: legacy/p5-urgent
- **Excerpt**: ### Describe the bug I try build my project with vite 3. I use @user/plugin-legacy for support old browsers. my vite.config.js file is ``` import { resolve } from 'path'; import { defineConfig } from 'vite'; import vue from '@user/plugin-vue'; import legacy from '@user/plugin-legacy'; export default defineConfig({ base: '/', build: { rollupOptions: { input: { main: resolve(__dirname, 'pages/index.html'), about: resolve(__dirname, 'pages/about/index.html'), }, }, }, server: { port: 3000, host: '0.0.0.0', hrm: true, }, plugins: [ vue(), legacy({ targets: ['defaults', 'not IE 11'], }), ], });…

### CASE-8553 · url() with variable or relative path in sass/scss is broken
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍16 💬7 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: This issue organizes many issues around relative url() in sass/scss and adds many information. (Please convert to discussion if it should be a discussion.) Related: [ref], [ref], [ref], [ref], [ref] ## Premise sass does not support rebasing relative url ([link]). For example, ```scss /* src/foo.scss */ @user "./nested/bar.scss"; /* ---- */ /* src/nested/bar.scss */ .bar { background: url('./bar.png'); /* intends nested/bar.png */ } ``` becomes ```css /* src/foo.css */ .bar { background: url('./bar.png'); /* becomes src/bar.png */ } ``` Also there is no API for custom rebasing ([link]). In…

### CASE-8569 · import.meta.glob() does not work with variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows
- **Signals**: 👍1 💬7 · closed · labels: contribution welcome/needs documentation
- **Excerpt**: ### Describe the bug I'm trying to use `import.meta.glob` to read a folder. It works if I use a string literal. But I have been unable to make it work with a dynamic folder name. The error I get is `import.meta.glob() can only accept string literals.` ### Reproduction ```js let url = "/posts/**/*.md" posts = import.meta.globEager(url) ``` ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (8) x64 AMD Ryzen 3 5300U with Radeon Graphics Memory: 1005.28 MB / 7.37 GB Binaries: Node: 16.8.0 - C:\Program Files\nodejs\node.EXE npm: 7.21.0 - C:\Program Files\nodejs\npm.CMD Browsers:…

### CASE-8570 · broken scss url rewrites with scss variables
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug When an imported scss file has variable `url($foo)` links, they get badly rewritten: [scss-import-test/index.scss:]([link]) ```scss $default-image-1: "/default.png"; $default-image-2: "./default.png"; $default-image-3: "default.png"; body { background-image: url($default-image-1); background-image: url($default-image-2); background-image: url($default-image-3); background-image: url("/default.png"); background-image: url("./default.png"); background-image: url("default.png"); } ``` Gets rewritten as (notice the invalid css): ```css body { background-image:…

### CASE-8582 · Service workers don't work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug I'm using react with a service worker, anyhow when i build my app, everything goes fine except for the sw which wouldn't exist in the dist directory. Let alone that the code used to get the sw has an undefined variable which is PUBLIC_URL which causes that error in the browser console: `GET [link] 404 (Not Found) (anonymous) @ index.e8abe765.js:10 (anonymous) @ index.e8abe765.js:10 load (async) (anonymous) @ index.e8abe765.js:10 (anonymous) @ index.e8abe765.js:10` ## Reproduction just build a react app with a service worker Please provide a link to a repo that can…

### CASE-8588 · Dev Server Proxy to HTTPS backend does not seem to work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬7 · closed · labels: needs reproduction
- **Excerpt**: > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug Trying to proxy backend requests to a local server that is using HTTPS. Proxy configuration as follows: ``` module.exports = { proxy: { '/api': { target: '[link] changeOrigin: true, } } } ``` (Note that I have also tried various other variations without any improvements) Requests fail to go through, appear to be attempting to proxy without HTTPS, i.e. to [link] End result is that the request fails with a 500 code, would expect it to query the server. ## Reproduction I…

### CASE-8596 · Building removes a variable and its implementations + conditional statements using it
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, vite
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I am building a test runner script for my webapp in react. It's an iterative "looping" scripts that runs the webapp over multiple times. The **first 3 times i need to do a quick test**, then test should be long afterwards. When i run the project `npm run dev` - basically just "vite" command, **the first 3 test are running quickly**, then the rest are slow - so my TS files seem to work in development. When i run build the project `npm run build` - "tsc && vite build" command, and then host that webapp and open it, the **every test is quick** - not like in development. - i…

### CASE-8598 · Vite produces invalid output paths when rebasing URLs in SCSS files
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍7 💬6 · open · labels: pending triage
- **Excerpt**: ### Describe the bug I have a Vite.js application where I import an SCSS file from a dependency. In a CSS bundle produce by Vite, the path is incorrect and invalid. This issue seems to be specific to the file structure, as I can reproduce it if the SCSS file name matches the target directory name except the leading underscore and the `url()` argument is built using a variable: ``` ├── foobar │ └── static.png └── _foobar.scss // <- url("foobar/#{$file-name}.png") ``` In the resulting bundle, the `foobar/static.png` relative path is rebased to become `.../xxx/_foobar.scssstatic.png` (see the…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8510 · Major browsers (Chrome, Firefox...) just removed data URLs in SVG elements, resulting in a difference betweend dev and prod
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Article: [link] Chrome status: [link] Vite seems to inline SVGs when building a project. But data URLs in SVG don't work anymore (cf article). So there's a difference between dev (when there's no inlining, everything work) and prod (when it's inlined, it does not display anything) ### Reproduction [link] ### Steps to reproduce `pnpm run dev` The rendered SVG element looks like this: ```html <use href="/src/vite.svg#logo"></use> ``` => **Works as intended** ![image]([link] tool]/assets/4563971/93c21251-4153-4812-8a85-ae254c9c3732) --- `pnpm run build && pnpx serve dist`…

### CASE-8517 · [docs] Default production target is confusing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chrome 64, chrome 87
- **Signals**: 👍5 💬7 · closed · labels: documentation
- **Excerpt**: ### Documentation is - [ ] Missing - [X] Outdated - [X] Confusing - [ ] Not sure? ### Explain in Detail Hi! Default [browser compatibility for production]([link]) seems to be outdated or confusing. The text says that it's "support for es modules, dynamic import and import.meta", however chrome version seems to be too high (so are others, chrome is just an example). According to caniuse, minimal chrome version that supports all of this features is chrome 64 ([^1], [^2], [^3]). I believe the confusion comes from [link] tool][ref]. And chrome 87 was chosen arbitrary as it was what browserslist…

### CASE-8522 · Vite dev isn't working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, safari, edge, windows, macos, vite
- **Signals**: 👍0 💬7 · closed · labels: cannot reproduce
- **Excerpt**: ### Describe the bug I am trying to develop with vanilla vite on my intel macbook in Firefox. But page refuses to load only in ff. <img width="1235" alt="image" src="[link]> It works in safari and on my windows 11 machine. Both have the same npm, vite and ff versions. Vite build works fine on mac. I tried to troubleshoot it by ff [article]([link]). ### Reproduction [link] ### Steps to reproduce `npm create vite@user` `cd edgeq` `npm i` `npm run dev` Open localhost:5173 in firefox on macos ### System Info ```shell System: OS: macOS 12.6.3 CPU: (4) x64 Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz…

### CASE-8523 · New vite project runs with error __DEFINES__ is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, windows, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug ![1678342152617]([link]) I use npm to create a new vite project, nothing to do after running is this error, only in chrome will be so, edge or Firefox is no problem, I reinstalled the chrome will still have。I can't find what the problem is。 ### Reproduction [link] ### Steps to reproduce ```shell npm create vite npm install npm run dev ``` ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (4) x64 Intel(R) Core(TM) i5-7300HQ CPU @ 2.50GHz Memory: 4.87 GB / 15.71 GB Binaries: Node: 19.3.0 - C:\Applications\nodeJs\node.EXE npm: 9.2.0 -…

### CASE-8527 · Issue setting strict CSP in dev
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍32 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to set a strict CSP in dev so that developers don't inadvertently introduce changes that will break the application in production where a strict CSP is applied. In this case the CSP avoids setting `unsafe-inline` for `style-src` `Content-Security-Policy: style-src 'nonce-random' 'self'` etc When running in dev `client.ts` in Chrome the following errors are seen in console `Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'nonce-random' 'self'". Either the 'unsafe-inline' keyword, a hash…

### CASE-8531 · Incorrect chunking when code has top-level await
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, linux, ubuntu, vite
- **Signals**: 👍0 💬7 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug my library write and used with vite. but vite build and preview mode reload refresh page 2-3 time empty page. but dev mode working all. ### Reproduction [link] ### Steps to reproduce pnpm install pnpm build pnpm preview chrome debugger mode this problem. console.log dont see and working ![image]([link]) ### System Info ```shell System: OS: Linux 5.17 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish) CPU: (12) x64 11th Gen Intel(R) Core(TM) i5-11400 @ 2.60GHz Memory: 9.98 GB / 31.12 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 18.12.1 - /usr/bin/node Yarn:…

### CASE-8538 · mp3 file missing in bundle
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬7 · closed · labels: invalid
- **Excerpt**: ### Describe the bug 1. Take the repo link and clone the repo 2. Run `npm run build` 3. Here it is. No `mp3` file in `dist/` folder ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.5.1 CPU: (8) arm64 Apple M1 Memory: 91.59 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.10.0 - ~/.nvm/versions/node/v16.10.0/bin/node npm: 8.1.0 - ~/.nvm/versions/node/v16.10.0/bin/npm Browsers: Chrome: 104.0.5112.101 Safari: 15.6.1 npmPackages: vite: ^3.0.9 => 3.0.9 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8546 · [Vite 3] Pre-bundling not discovering all dependencies
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, linux, vite, react
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Vite 3's pre-bundling phase doesn't seem to discover all dependencies leading to a full page reload. ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.10 Debian GNU/Linux 10 (buster) 10 (buster) CPU: (2) x64 Intel(R) Celeron(R) N4020 CPU @ 1.10GHz Memory: 333.75 MB / 2.71 GB Container: Yes Shell: 5.0.3 - /bin/bash Binaries: Node: 18.0.0 - ~/.config/nvm/versions/node/v18.0.0/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 8.6.0 - ~/.config/nvm/versions/node/v18.0.0/bin/npm Browsers: Firefox: 97.0.1 npmPackages: @user/plugin-react: ^1.3.2 => 1.3.2 vite:…

### CASE-8547 · bug: vite-Server-to-Client
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍0 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug [bug-vite-Server-to-Client]([link]) ### Reproduction [link] ### System Info ```shell mac Chrome ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite issue and not a framework-specific issue. For example, if…

### CASE-8550 · 每次修改完代码之后需要重启才可以进行页面的更新
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍1 💬7 · closed · labels: duplicate/cannot reproduce
- **Excerpt**: ### Describe the bug 每次修改完代码之后需要重启才可以进行页面的更新 ### Reproduction 就是使用cnpm create vite@user 正常去新建一个项目 配置了路由，在组件中编辑代码的时候，每次更新必须重启项目才可以进行页面的更新 ### System Info ```shell Google Chrome 版本 102.0.5005.63（正式版本） （64 位） node -v v14.17.2 vite ^2.9.9 npm 6.14.13 ``` ### Used Package Manager npm ### Logs ```shell 没有报错日志 ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports…

### CASE-8556 · npm run build运行错误提示
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍1 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug npm run build运行后无法执行 D:\colors\node_modules\vscode-jsonrpc\lib\common\linkedMap.js:40 return this._head?.value; SyntaxError: Unexpected token '.' ### Reproduction need reproduction ### System Info ```shell System: OS: Windows 7 6.1.7601 CPU: (4) x64 Intel(R) Core(TM) i3-4130 CPU @ 3.40GHz Memory: 1.44 GB / 7.70 GB Binaries: Node: 12.18.3 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.15 - ~\AppData\Roaming\npm\yarn.CMD npm: 8.4.1 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome: 99.0.4844.82 ``` ### Used Package Manager npm ### Logs ```shell…

### CASE-8560 · Vite dynamic import is not available on android5/chrome 39
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 39, android5, vite, vue
- **Signals**: 👍1 💬7 · closed · labels: invalid/plugin: legacy
- **Excerpt**: ### Describe the bug router/index.js ``` import Vue from 'vue' import Router from 'vue-router' import IndexPage from '@/views/Index/index.vue' const ListPage = () => import('@/views/List/index.vue') Vue.use(Router) const router = new Router({ routes: [ { path: '/', redirect: 'index', component: IndexPage, children: [ { path: 'index', component: IndexPage, name: 'Index', meta: { title: 'index' } } ] }, { path: '/list', name: 'List', component: ListPage, meta: { title: 'list' } } ] }) router.afterEach(function (transition) { document.title = transition.meta.title || transition.meta.name || ''…

### CASE-8565 · maybe a bug of fast-refresh
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍2 💬7 · closed · labels: documentation/pending triage
- **Excerpt**: ### Describe the bug An error occurs when hmr are constantly triggered. I'm not sure if this is a fast-Refresh issue. Hope to get your answer, thank you very much! ### Reproduction [link] ### Reproduction Step 1. yarn && yarn dev 2. constantly trigger hmr in `src/Container.ts` ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (6) x64 Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz Memory: 1.11 GB / 15.87 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.4 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.24.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan…

### CASE-8571 · change root path, entry html's source require will not found
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬7 · open · labels: feat: html/p3-minor-bug
- **Excerpt**: ### Describe the bug After changing root path, in vite.config . ![image]([link]) source which required in entry html , will not found. ![image]([link]) ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 10.15.7 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 149.41 MB / 32.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 14.17.0 Yarn: 1.22.10 npm: 6.14.13 Browsers: Chrome: 92.0.4515.159 Safari: 14.1.2 npmPackages: vite: ^2.5.0 => 2.5.0 ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8573 · Internal server error: Cannot read property 'theme' of undefined
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, edge, macos, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to use @user/jit with Vite. I have followed the documentation and various articles online on how to configure it but it fails whenever I run `yarn dev`. I get an error. ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.2.1 CPU: (8) x64 Intel(R) Core(TM) i7-8557U CPU @ 1.70GHz Memory: 1.38 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 12.19.0 - ~/.nvm/versions/node/v12.19.0/bin/node Yarn: 1.22.10 - ~/.nvm/versions/node/v12.19.0/bin/yarn npm: 6.14.8 - ~/.nvm/versions/node/v12.19.0/bin/npm Browsers: Chrome: 91.0.4472.114 Edge:…

### CASE-8574 · Chunks reporting a preload link warning in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox
- **Signals**: 👍0 💬7 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug When using lazy loading assets, we are getting this warning when running in Firefox: ``` The resource at “<CHUNK URL>” preloaded with link preload was not used within a few seconds. Make sure all attributes of the preload tag are set correctly. ``` ### Reproduction Reproduction repo: [link] Reproduction steps: - From Repo run these commands to get a local production development server running: ``` npm i npm run build npm run serve ``` - Open Firefox to [link] and click the About link to go the About page. - Open the javascript console. - Wait for about a minute - You…

### CASE-8586 · Subscriptions Transport WS module not found during npm dev but fine in npm build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug Error in chrome console. `Uncaught SyntaxError: The requested module '/@user/subscriptions-transport-ws/dist/client.js' does not provide an export named 'SubscriptionClient'` A clear and concise description of what the bug is. During yarn dev, Vite is unable to find exports from subscriptions-transport-ws although once the project is built for production using yarn build it works fine. ## Reproduction yarn add subscriptions-transport-ws import { SubscriptionClient } from…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8513 · Failed to resolve svg with an alias
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬7 · closed · labels: invalid
- **Excerpt**: ### Describe the bug After upgrading from vite 4.5.0 to 5.0.4, I get this error: > Error: Failed to resolve import "~/img/wordmark.svg" from "src/theme/index.tsx". Does the file exist? If I change this to a relative import, like `../../img/wordmark.svg`, it works. ### Reproduction [link] ### Steps to reproduce `npm i && npm run dev`, you should see: > Failed to resolve import "~/img/javascript.svg" from "main.js". Does the file exist? ### System Info ```shell System: OS: macOS 14.1.2 CPU: (10) arm64 Apple M1 Max Memory: 19.80 GB / 64.00 GB Shell: 5.2.15 - /opt/homebrew/bin/bash Binaries:…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8518 · Investigate root cause for vite 4.3.x can't build date-fns/locale in ssr (temp. patched)
- **Principles**: P-F4 · **Env**: macos, linux, vite
- **Signals**: 👍2 💬7 · open · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug I'm importing locales from date-fns like this: `import { enGB, es, de } from "date-fns/locale";` in my code. It worked fine with vite 4.2.x, but both 4.3.0 and 4.3.1 replace the "from" part with `… from "s";` which server, once it runs, can not find, for obvious reasons. ### Reproduction [link] ### Steps to reproduce run `npm install` followed by `npm test` ### System Info ```shell I reproduced it both on macos and linux. System: OS: macOS 13.4 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 482.73 MB / 32.00 GB Shell: 3.6.1 - /usr/local/bin/fish Binaries:…

### CASE-8540 · Not generating asset for CSS in SSR
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: feat: ssr/p2-edge-case
- **Excerpt**: ### Describe the bug Vite does not output an asset in SSR mode for dynamically imported CSS files. You can reproduce the issue by opening the stackblitz link and run `vite build --outDir ssr --ssr server.js`. You will see that the generated `server.js` in `ssr` folder refers to `./assets/style2.b4683fb7.js` (or similar) but the actual file is not generated. ### Reproduction [link] ### System Info ```shell See stackblitz ``` ### Used Package Manager npm ### Logs <details> <summary>Click to expand!</summary> ```shell ❯ vite build --outDir ssr --ssr server.js --debug vite:config no config file…

### CASE-8542 · Vite produces unreasonably small chunks
- **Principles**: P-F4 · **Env**: vite, react
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Vite produces unreasonably small chunks (90% of all chunks are under 1KB with a few 300KB+). Here is the full build log: [link] This is example website: [link] This is out Vite configuration: ```ts import path from 'path'; import { default as react } from '@user/plugin-react'; import { defineConfig } from 'vite'; import { default as ssr } from 'vite-plugin-ssr/plugin'; const { VITE_BASE_URL } = process.env; export default defineConfig(({ ssrBuild }) => { let build; if (!ssrBuild) { build = { emptyOutDir: true, manifest: true, minify: true, polyfillModulePreload: false,…

### CASE-8544 · [Vite 3 Regression] Vue 3 Component CSS not bundled (SSR)
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I've recently hit a bit of a stumbling block while upgrading to `[email] + [email] + @user/plugin-vue@user` Everything seems to be working fine but when running a SSG build, some (random) components CSS are not getting included. Everything works fine in `vite dev` mode, this is only when running a `vite build` It 'seems' to be an upstream issue with either Vite or the Vite Vue plugin, as my setup this works fine with `[email] + vite@user + @user/plugin-vue@user` There are no errors with the build and there does't seem to be any reason for the specificity of the components…

### CASE-8545 · Inline modules cause full page refresh instead of HMR for SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug When inlining code in a `<script type="module">//some code</script>` HMR does not seem to work when in SSR mode. Inside the script is a call to `import.meta.glob` to load other files (not sure if that is relevant). What I believe is happening is that the virtual module created always causes a full reload based on [this]([link] tool][ref]) PR. When the module actually references a file and is not virtual then HMR works appropriately. Can this be fixed? Potential other relevant PR I found - [link] tool][ref] Secondary question, which might be off topic: is it possible for…

### CASE-8549 · [Vite 3] Babel Bug
- **Principles**: P-F4 · **Env**: ios, vite, typescript
- **Signals**: 👍0 💬7 · closed · labels: p3-downstream-blocker
- **Excerpt**: ### Describe the bug It seems that, in some scenarios, the babel plugin is trying to parse TypeScript code even though it's not configured to be able to parse TypeScript. Which breaks both dev and build. The same code does work with Vite 2. This is a blocker for building Vike Frameworks. (And, AFAICT there is no workaround for this bug, but I could be wrong.) The bug reproduction is minimal but uses VikePress; let me know if you want more minimal reproduction that doesn't use VikePress. This is the last bug for making Vite 3 + vite-plugin-ssr green again 🎉. (I'm curious what the reason is…

### CASE-8566 · Unexpected token '.'
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug ``` bash 上午11:51:08 [vite] Error when evaluating SSR module /src/api/index.ts: SyntaxError: Unexpected token '.' at new AsyncFunction (<anonymous>) at instantiateModule (D:\work\kbb_ssr_hybrid\node_modules\vite\dist\node\chunks\dep-e0fe87f8.js:66543:28) at processTicksAndRejections (node:internal/process/task_queues:96:5) ``` ``` bash // dep-e0fe87f8.js:66543:28 const AsyncFunction = async function () { }.constructor; const initModule = new AsyncFunction(`global`, ssrModuleExportsKey, ssrImportMetaKey, ssrImportKey, ssrDynamicImportKey, ssrExportAllKey, result.code +…

### CASE-8567 · SSR can't resolve builtin modules that start with underscore
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬7 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug Some packages (like `@user/client`) require the builtin `_http_common` module (or others that start with an underscore) which causes `ssrLoadModule` to throw `Error: Cannot find module '_http_common' imported from ...` error. It seems to be caused by the `builtin-modules` package that Vite uses for this purpose filtering out modules that start with an underscore (changing the relevant regex in the transpiled code fixes the problem). ### Reproduction - Clone the repo and install the dependencies: [link] - `node ssr-module.mjs` works but `node .` throws trying to load the…

### CASE-8580 · [plugin:plugin-vue-jsx] Unable to convert tsx correctly when performing server side rendering in SSR mode
- **Principles**: P-F4 · **Env**: vue, vite
- **Signals**: 👍0 💬7 · closed · labels: has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug The jsx transpiling fails when using [vite-ssr]([link]) and` plugin-vue-jsx` at the same time. I think this is because `__default__` is not processed correctly in the following source code. [link] tool]/blob/524a0185bbb06fb13e151a37c6e0ae9d6a4ed477/packages/plugin-vue-jsx/index.js#L207-L210 The duplication procedure and my fix (I don't know if it's appropriate) can be replicated in the following repository: ### Reproduction It can be reproduced in the following repository. [link] ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue…

### CASE-8581 · Vite dev server: support netlify dev
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: has workaround
- **Excerpt**: **Is your feature request related to a problem? Please describe.** [netlify dev]([link]) doesn't work with vite dev server. netlify dev starts a proxy server which redirect to vite dev server. However vite dev server replies with `ok`. I suspect this might be due to host mismatch, since the proxy and the server and on different ports. **Describe the solution you'd like** vite dev server and netlify dev should be friends. **Describe alternatives you've considered** Checked the vite docs for a way to relax the hostname checking **Additional context** Reproduction repository: [link]

### CASE-8583 · V2, React: Invalid hook call
- **Principles**: P-F4 · **Env**: react, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [X] Read [the docs]([link]). - [X] Use Vite >=2.0. (1.x is no longer supported) - [X] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug ``` Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React…

### CASE-8592 · Allows to apply different Oxc options depending on the files
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬6 · open
- **Excerpt**: ### Describe the regression Original issue: [link] tool]-plugin-react[ref] Hi! I was trying to config OXC plugins through the react plugin like we can do for babel, but it turns out that with rolldown+plugin-react we now set it up on global oxc. My current config has this: ```js plugins: [ react({ include: ['/**/*.jsx'] exclude: ['**/no-display-name/*.jsx'], babel: { plugins: [ [ 'babel-plugin-styled-components', { displayName: true, ssr: true, pure: true, }, ], ], }, }), react({ include: ['**/no-display-name/*.jsx'], babel: { plugins: [ [ 'babel-plugin-styled-components', { displayName:…

### CASE-8599 · JS module imported as url not handled correctly on build
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have an SSR framework that has the [following]([link]) within. Notice `entryClientUrl` part (both its import and reference site). ```tsx import type { RouteObject } from 'react-router' import { createRoute } from '../lib/react-router-helpers.js' import entryClientUrl from './entry.client.jsx?url' export const Component = () => { return ( <html lang="en"> <head> <meta charSet="utf-8" /> </head> <body> <script type="module" src={entryClientUrl}></script> </body> </html> ) } export const root = createRoute({ path: `/`, Component, }) export const routes: RouteObject[] = […

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-8519 · PostCSS plugins are not applied correctly during `vite build`
- **Principles**: P-A2, P-A4 · **Env**: vite
- **Signals**: 👍5 💬7 · open · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug When running `vite build` with a `postcss.config.cjs` file in the project, I would expect `postcss` plugins to run before the final `style.css` file is created in `dist/`. Example: - final `dist/style.css` ```css .btn { align-items: center; color: #ff0; display: flex; justify-content: center } .modal { align-items: center; color: red; display: flex; justify-content: center } .box { align-items: center; color: blue; display: flex; justify-content: center } ``` - after manually running `postcss dist/styles.css -o dist/styles.css` ```css .btn { color: #ff0 } .btn, .modal {…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-8529 · Missing gzip information for HTML files in build logs output
- **Principles**: P-A5 · **Env**: macos, vite
- **Signals**: 👍1 💬7 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Describe the bug On top of the uncompressed file size, Vite 3 displayed the gzip size for HTML, CSS, JS and (if I’m correct) SVG files. The gzip size for HTML files is currently missing from Vite 4 build output. I think it should be included, as it’s a useful information. ### Reproduction [link] ### Steps to reproduce Run `npm install` and `npm run build`. ### System Info ```shell System: OS: macOS 12.6.1 CPU: (16) x64 Intel(R) Core(TM) i9-9980HK CPU @ 2.40GHz Shell: 5.9 - /usr/local/bin/zsh Binaries: Node: 16.15.0 - ~/.nvm/versions/node/v16.15.0/bin/node npm: 8.5.5 -…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8543 · Invalid production build when using inertia.js library in Vite 3.0.3
- **Principles**: P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍1 💬7 · closed · labels: p2-edge-case/inconsistency/feat: commonjs
- **Excerpt**: ### Describe the bug Starting from Vite 3, we are not able to build our Vue 2.7 app, that is using the inertia.js library. See the reproduction linked below. In the `resources/views/pages/welcome.vue`-file, you can see a Vue component, that defines a form using the inertia js form helper. When using this form helper, the production build errors out with the error messages, described below. As soon as I limit the dependency for Vite to version 2.9.14, everything compiles just fine in production mode. Please note, that the reproduction repository strips out the server part, that is usually part…

### CASE-8554 · Vite is not tree-shakable for imported node_modules
- **Principles**: P-G4, P-E3 · **Env**: vite, react
- **Signals**: 👍0 💬7 · closed · labels: cannot reproduce
- **Excerpt**: ### Describe the bug Npm install a library that IS tree-shakable and import it. Only import 1 thing from that lib, but the whole lib is included. ## To reproduce 1. Create a new Vite project `npm create vite@user`, select React with JS. 2. Import a tree-shakable lib, ex: `npm install @user/react-icons` 3. Only import 1 thing, put that in main.jsx (like this: [[link]]([link])). Example: ``` import { Info20Regular } from '@user/react-icons'; console.log(Info20Regular); ``` 4. Create the bundle via `npm run build`. 5. Look up `dist/assets/index.hash.js`, CTRL+F `ChevronDown20Regular` which is…

### CASE-8593 · Default CSS minifier in Vite@user blocks some progressive modern CSS features
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍12 💬6 · open · labels: bug: upstream/clarity: high
- **Excerpt**: ### Describe the bug After upgrading to Vite@user, I noticed that CSS minification now defaults to Lightning CSS. Since then, production builds started showing warnings or failing when using some modern progressive CSS features that are already supported in browsers. Examples include selectors and pseudo-elements such as `::scroll-marker`, `::scroll-marker-group`, `::scroll-button()`, `:target-current`, and `::search-text`. I also encountered a hard build failure when using `@user` in a form that currently works in supporting browsers: ```css @user (.section) { color: blue; } ``` Switching…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8568 · assetsDir can not use the relative Path '../'
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug it works in development. Terminal report an error when i used build command. ``` The "fileName" or "name" properties of emitted files must be strings that are neither absolute nor relative paths, received "../iconfont.a2bfd5b8.eot". ``` ### Reproduction This is details about the error message. ![image]([link]) I can't find the `font.xxx.css` file in my project, so i try to annotate related code, such as ![image]([link]) then build again. but it still report error, see ![image]([link]) vite.config.js ``` import { defineConfig } from 'vite' import { createVuePlugin } from…

### CASE-8572 · Dynamic imports that result in css being added to the system remove any `@user` statements in existing css
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug When css is dynamically imported (such as, for instance, when dynamically importing a `.svelte` file), any `@user` statements in other css are lost. I think this only occurs in library mode, or perhaps when `cssCodeSplit` is false. `vite.config.js`: ```javascript export default config = { build: { lib: { entry: 'index.js', formats: ['es'], } } }; ``` `index.js`: ```javascript import './index.css'; export default async function foo() { await import('./dyn.css'); return "foo"; } ``` `index.css`: ```css @user "[link] .index-is-included { font-size: 42px } ``` `dyn.css`:…

### CASE-8577 · css modules composes from '...' not works
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍5 💬7 · closed · labels: windows only/bug: upstream/feat: css
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Compose class names from other file is not working. Vite fails to resolve the path Aliases inside "composes from" not work as well ```css composes: font-blue from 'blue.module.css'; ``` <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction [link] <!-- Please provide a link to a repo that can…

### CASE-8578 · Aliases do not work for preload links in index.html
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite, react
- **Signals**: 👍0 💬7 · closed · labels: feat: html/p3-minor-bug
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug resolve.alias configuration of vite config do not work in index.html here some examples The configuragion: ```ts export default defineConfig({ plugins: [reactRefresh()], resolve: { alias: [ { find: '@user', replacement: path.resolve('common'), }, ] } }) ``` If we have this structure ``` common fonts IBMPlexSans-Medium.woff2 index.html ``` this lines inside index.html: ``` // this works in either dev server and…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-8594 · Dead-code-eliminated dynamic `import()` still emits orphan chunk with stale metadata
- **Principles**: P-F5, P-H3 · **Env**: vite
- **Signals**: 👍0 💬6 · open · labels: bug: upstream/p2-edge-case/feat: build
- **Excerpt**: ### Describe the bug When a dynamic `import()` is inside a dead code branch that depends on a cross-module constant, Vite's build correctly DCEs the code but still emits the target as an orphan chunk with stale `dynamicImports` metadata. A literal `if (false) { import('dead-module') }` is handled correctly. The bug only occurs when the condition comes from a cross-module constant. Standalone Rolldown handles both cases correctly. ### Reproduction [link] ### Steps to reproduce ```js import { build } from "vite"; const result = await build({ root: "/tmp/test", configFile: false, logLevel:…

