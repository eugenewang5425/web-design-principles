# Case Chunk 075 — Round 75

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8401 · env.mjs strips quotes from string values
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Using a [conditional configuration]([link]) and a string value for an object property breaks the build because the generated `env.mjs` file strips quotes from string values, making them unknown variables. ### Reproduction [link] ### Steps to reproduce Run the code above - it will be successful. Uncomment the `// b: 'x',` line and the build will break with ``` Uncaught ReferenceError: x is not defined at env.mjs:16:31 ``` The generated `env.mjs` file looks like this: ```js // assign defines const defines = { "a": 1, "b": x, "__VUE_OPTIONS_API__": true,…

### CASE-8408 · Dynamic import fails with variables and aliases
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍0 💬9 · open · labels: pending triage
- **Excerpt**: ### Describe the bug I added in `vite.config.ts` aliases list as follows ```ts import react from "@user/plugin-react"; import { defineConfig } from "vite"; const aliases = { apps: "/src/apps", }; const aliasesList = []; for (const [key, value] of Object.entries(aliases)) { aliasesList.push({ find: key, replacement: value, }); } // [link] export default defineConfig({ plugins: [react()], resolve: { alias: aliasesList, }, }); ``` Now when i try to make a dynamic import like this ```ts import('apps/my-file').then(output => { // works fine }); ``` This works fine, but when i try to do something…

### CASE-8410 · PostCSS not applied to imports via `composes`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍10 💬9 · open · labels: feat: css/p2-nice-to-have
- **Excerpt**: ### Describe the bug I'm trying to have styles included in a CSS module via `composes` processed by PostCSS, but it's not happening. All other styles are processed by PostCSS correctly. Take the following CSS modules and PostCSS config: ```json { "plugins": { "postcss-preset-env": { "browsers": "defaults, ie >= 11", "importFrom": [ "./src/variables.css" ] }, "postcss-nested": { } } } ``` ```css /* variables.css */ :root { --color-red: red; --color-blue: blue; } /* component.module.css */ .component { color: var(--color-red); .nested { width: 100%; } } /* main.module.css */ .main { composes:…

### CASE-8428 · Project build failed with "import.meta.env"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos, vite, vue
- **Signals**: 👍10 💬9 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug Project build failed > Project build failed with "import.meta.env".If delete the code "import.meta.env", project will build success. ### Reproduction Repo: <[link]> ### System Info - required vite version: 2.2.2 - required Operating System: macos 11.3 - required Node version: 14.16.1 Optional: Installed vue version (from yarn.lock or package-lock.json) ^3.0.5 Installed @user/compiler-sfc version ^3.0.5 ### Logs (Optional if provided reproduction) [rollup-plugin-dynamic-import-variables] Unexpected token (3:15) vue3-vite-ts-vant3/src/utils/request.ts:3:15 error during…

### CASE-8433 · Can't import CJS deep import
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: needs reproduction
- **Excerpt**: This is similar to many deep import bugs, which are closed. There's currently [ref] that is open, but it seems the cause there is linking. This looks exactly like [ref], which was closed because its author was "lucky" having access to ESM sources. ## Describe the bug I'm trying to use `prismjs` and include the `csharp` language grammar. Here's my module: ```js import Prism from "prismjs"; export default Prism; await import("prismjs/components/prism-csharp"); ``` Note that `prismjs` is entirely written in Common JS style (and even worse: uses global variables, hence the `await import()`). When…

### CASE-8434 · cssPreprocessOptions less modifyVars Invalid modification
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug this is modify to vantUI theme variable. less import not work. #### vant.theme.var.less ``` @user './default.less'; // vant主题变量参考 [link] // componentNz @user: #theme[color]; @user: #theme[color-border]; // button @user: #theme[color-primary]; @user: #theme[color-primary]; @user:…

### CASE-8436 · Environment variables from the environment are ignored
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬9 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> > Do NOT ignore this template or your issue will have a very high chance to be closed without comment. ## Describe the bug Only variables from `.env` files are loaded. Environment variables starting with `VITE_`, but defined outside `.env` files are not included in `import.meta.env`. ## Reproduction - Start vite within an environment containing variables starting with `VITE_`, using `cross-env` or…

### CASE-8438 · Constant assigned to a variable should be used when tree shaking
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: bug: upstream/has workaround/p2-edge-case/clarity: high
- **Excerpt**: ### Describe the bug Building the same minimal reproduction with Vite 8 produces a much larger JavaScript bundle than Vite 7. Observed: ```txt $ yarn build:7 dist/assets/index-l82qMY7x.js 55.32 kB │ gzip: 28.02 kB $ yarn build:8 dist/assets/index-CxJHI96j.js 848.64 kB │ gzip: 238.40 kB ``` The minimal reproducion includes: - plain JavaScript entry - one conditional branch behind `import.meta.env.MODE`, crucially with TWO comparisons to string - one reference to `@user/browser` - no custom Vite config ### Reproduction [link] "core" of the reproduction: ```js import { toCanvas } from…

### CASE-8442 · Global namespace pollution when using rollupOptions.output.format umd
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬8 · closed · labels: contribution welcome/has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug I'm building a bundle with `umd` format as a target. When doing so I expect the result bundle to be wrapped in an iife function. The configuration looks like this : ```javascript build: { rollupOptions: { output: { format: "umd", entryFileNames: "bundle.js", }, }, }, ``` Instead, I have variables declared outside the `iife` : ![image]([link] tool]/assets/16164512/56effe29-e75d-4ec3-8abd-be79b1092c02) This is a problem because the variables' declaration might override previous variables with the same name. This is how I encountered the issue. ## Workaround : So far, I have…

### CASE-8446 · .env.[mode].local is useless , Because it will always be bundled , even if git has ignored it ||||| .env.[mode].local 的使用场景在哪？即使git忽略了它，它也总是会被打包进去
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Description Let's say I have two files: `.env.development` and `.env.development.local`. Even though git has ignored the.local file, when npm run build-dev, vite would still bundle `.env.development.local` into the dist file, which would cause the environment variables in.local to overwrite the original file, and the development environment would work, but the production environment would break. The.local file should only exist locally. Vite also didn't provide any configuration to ignore specific files, so I had to delete the.local file, change the.env.development file during…

### CASE-8479 · import.meta.env.MODE=production while import.meta.env.PROD returned false
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I set `NODE_ENV=development` in .env file, and set `NODE_ENV=production` in .env.production file, then run `vite build` with production mode(by default), the `import.meta.env.PROD` variable turned out to be `false`, which is expected to be `true`. <img width="346" alt="Screen Shot 2021-12-29 at 11 04 38 PM" src="[link]> I found that at `vite/packages/vite/src/node/config.ts`, there is a `loadEnv` function, in which process.env.VITE_USER_NODE_ENV would be override by .env file [link]…

### CASE-8499 · Global variable is initialized too late when lazy loading Lexical/Prism
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬7 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the regression I'm experiencing this error in my app when using rolldown-vite instead of vite : Uncaught ReferenceError: Prism is not defined. Prism is supposed to be declared as a global variable whenever it gets imported by @user/code, and then lexical just calls Prism and an error is thrown. This used to work without issue with vite, either in dev mode or in production. In my quest to provide a minimal reproduction, I've had a hard time reproducing it in production mode. I've noticed that the issue only happens when : * there's some lazy loading involved (in my app we're using…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8402 · tsconfig seems to be ignored
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍4 💬9 · closed · labels: has workaround/p2-edge-case/regression
- **Excerpt**: ### Describe the bug Hey all, I'm trying to use inversifyJS (a DI container) together with vite. inversify heavily depends on decorators, therefor nothing will work, unless experimental decorators are enabled for almost all compilations. This is my current file layout: ![image]([link] tool]/assets/152604473/e4066deb-4464-4ceb-8fa2-b14ef1b75d72) In my one existing tsconfig.json, I have these settings: ```js { "compilerOptions": { "jsx": "react", "target": "ES2022", "useDefineForClassFields": true, "module": "ESNext", "lib": ["ES2022", "DOM", "DOM.Iterable"], "skipLibCheck": true, "types":…

### CASE-8405 · Modify Custom Plugin code cause unexpected 504
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am writing a custom Vite plugin to handle routing. The plugin works fine, but when I comment out or add console statements in the load function, a 504 error is displayed on the webpage. <img width="721" alt="image" src="[link] tool]/assets/58261676/3811c5e4-bcfd-41a2-9d91-77f5dae599f2"> <img width="792" alt="image" src="[link] tool]/assets/58261676/4f9df1ca-f756-49bc-b0d9-d70d20d6b131"> ### Reproduction [link] ### Steps to reproduce Use npm run dev to start the app. Visit [link] route. And go ./vitePlugns/pluginRoutes.js file, search FIXME word. ### System Info ```shell…

### CASE-8409 · HMR duplicated modules in case of fast sequentional changes
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Sometimes HMR somehow mess with modules, so it ends with error (in my case it's TDZ error - Cannot access SomeClass before initializing), and whole build became broken until next HMR or server restart. That's definitely caused by changing the file while hmr in process. So, basically, I get big-enough project, then: 1. Change file (just print 1 somewhere in JSX) 2. Ctrl+S 2. Immediately change file again (print 2) 2. Ctrl+S 2. After page loading, there is duplicating JS imports with different timestamps and whole build is broken until next HMR: ![image]([link]) This is…

### CASE-8412 · [v3] dynamic import tsx file is wrong
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: invalid
- **Excerpt**: ### Describe the bug The following code is OK in V2 ，but cannot be executed in v3 ```tsx const loader = (path: string) => { return import(`../rc-components/${path}/index.tsx`); } ``` ![image]([link]) ### Reproduction -- ### System Info ```shell -- ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the…

### CASE-8413 · Static Asset Handling not returning the correct path
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am using Vite with my Vue project. I am trying to link an image with a dynamic url path, received as a prop. The image is a svg file, located in the directory `/src/assets/icons`. As described at the bottom of the [guide]([link]), I wrote this code: ```js <template> <img :src="url" :class="'noselect ' + (clickable ? 'clickable' : '')" :alt="icon"> </template> <script setup> import { computed } from 'vue'; const { icon } = defineProps({ icon: { type: String, required: true }, clickable: { type: Boolean, default: false } }); const url = computed(() => new…

### CASE-8414 · Build lib error ^2.9.4. Uncaught SyntaxError: Illegal return statement
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬9 · closed · labels: needs reproduction/regression/feat: library mode
- **Excerpt**: ### Describe the bug 2.9.4 is normal , but i found 2.9.8 has the error. The following figure is the code generated by 2.9.4. The '`' at the place marked '1' was moved to the place marked '2' in 2.9.8. <img width="532" alt="WX20220506-111710@user" src="[link]> The following figure is the code generated by 2.9.8. <img width="731" alt="WX20220506-111856@user" src="[link]> ### Reproduction 2.9.8 ### System Info ```shell System: OS: macOS 12.3.1 CPU: (20) x64 Intel(R) Core(TM) i9-10900K CPU @ 3.70GHz Memory: 12.33 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.12.0 -…

### CASE-8416 · vite does not handle "browser" field in package.json properly, when using package 'tapable'
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Just install npm package `tapable`, and import it in `main.js` ```js import { SyncHook } from 'tapable'; console.log('load Hook', SyncHook); ``` Then the console will print an error: <img width="789" alt="image" src="[link]> Then I digged into `node_modules/tapable/package.json`, and it use `browser` field for different platforms. <img width="348" alt="image" src="[link]> and package `util` is imported in `tapable/lib/Hook.js Line 7` <img width="384" alt="image" src="[link]> So In expected result, I will get the file `util-browser` involved, which described in `browser`.…

### CASE-8424 · Unable to integrate with monaco-yaml successfully
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ![image]([link]) ```log languageFeatures.js:85 Error: Unexpected usage at EditorSimpleWorker.loadForeignModule (editorSimpleWorker.js:450) at webWorker.js:38 ``` I don't understand what does this mean. ### Reproduction <!-- Please provide a link to a repo that can…

### CASE-8429 · vite 打包之后 css 文件丢失
- **Principles**: P-A3, P-H1 · **Env**: vite, typescript, vue
- **Signals**: 👍1 💬9 · closed · labels: plugin: legacy
- **Excerpt**: ### Describe the bug 在使用 @user/plugin-legacy 插件，并且配置 build.cssCodeSplit 为 true 时，打包之后 css 文件丢失，当 `build.cssCodeSplit` 设置为true之后，打包后 css 正常 ```typescript import { defineConfig } from 'vite'; import jsx from '@user/plugin-vue-jsx'; import legacy from '@user/plugin-legacy'; export default defineConfig({ plugins: [ jsx(), legacy({ targets: ['defaults'], polyfills: ['es.object.values'], }), ], build: { // 这里加上这个配置 cssCodeSplit: false, }, }); ``` 如上述，加上 `build.cssCodeSplit` 这个配置为 false 后，打包后，css 文件就没了 ![image]([link]) 把 `build.cssCodeSplit` 这个配置为 true 后，打包后 css 正常 ![image]([link]) ### Reproduction…

### CASE-8431 · vite+react+antd-mobile，build之后出现报错系列？
- **Principles**: P-A3, P-H1 · **Env**: vite, react, mobile
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug package.json ``` "devDependencies": { "@user/plugin-react-refresh": "^1.3.2", "vite": "^2.1.5", } ``` dev正常，build之后报错如下： ![image]([link])

### CASE-8432 · Vite + Esbuild Docker issue
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I'm trying to Docker build my app, and although the build phase is working fine on my laptop, I'm getting this when building the Docker image: ``` > [build-stage 6/6] RUN npm run build: [ref] 0.436 [ref] 0.436 > [email] build /app [ref] 0.436 > cross-env NODE_ENV=production vite build --debug [ref] 0.436 [ref] 0.766 [vite] failed to load config from /app/vite.config.js: [ref] 0.771 Error: spawn Unknown system…

### CASE-8435 · Build Error with swiper
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, ubuntu, vite, vue
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Cannot build with [swiper]([link]) ## Reproduction Create a fresh vitejs app and add swiper ``` yarn add swiper ``` Go to `App.vue` and simply load and call swiper ``` import { Swiper } from 'swiper' console.log(Swiper) ``` Try to build No Error with `yarn dev` It's apparently not a [swiper issue]([link]) ## System Info - **required** `vite` version: 1.0.0-rc4 - **required** Operating System: Linux Ubuntu - **required** Node version: 12.11.1 ## Logs (Optional if provided reproduction) <img width="1277" alt="Screen Shot 2020-08-11 at 11 49 25 AM" src="[link]>

### CASE-8443 · Vite Dev Mode not loading css in react SSR application
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vite, react
- **Signals**: 👍10 💬8 · open · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug Dev mode in a react server-rendered application, the initial critical css is not inlined into the html. Styles kicks in only after the react hydration and the vite runtime loaded. This results in a very bad flickering, especially in big applications since it takes a few seconds before the vite fetches all the required js and is browser ready. <img width="622" alt="Screenshot 2024-04-24 at 2 16 23 AM" src="[link] tool]/assets/10056971/d8260bf3-ab7e-4ddd-947e-d48dcdd559f5"> ### Expectation The stylesheet with critical css is either: - inlined in the html or - is written to…

### CASE-8444 · vite 5.1.3 will lost js & css in html if `build.rollupOptions.input` is relative path
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, vite
- **Signals**: 👍5 💬8 · closed · labels: windows only/feat: html/has workaround/p2-edge-case/regression
- **Excerpt**: ### Describe the bug vite 5.1.3 will lost js & css in html after build multiple html input it works in vite4 <img width="787" alt="snapshot" src="[link] tool]/assets/51726580/2e2f1198-b633-43c8-8449-1cd487296e7f"> ### Reproduction [link] ### Steps to reproduce cd vite5 pnpm i pnpm run build ### System Info ```shell System: OS: Windows 11 10.0.22621 CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz Memory: 7.86 GB / 15.80 GB Binaries: Node: 20.11.0 - C:\Program Files\nodejs\node.EXE npm: 10.2.4 - C:\Program Files\nodejs\npm.CMD pnpm: 8.15.1 - ~\AppData\Roaming\npm\pnpm.CMD Browsers:…

### CASE-8447 · SVG don't escape single quotes with url('') in css
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍5 💬8 · closed · labels: has workaround/p2-to-be-discussed
- **Excerpt**: ### Describe the bug Hello, I am waiting for the fixes with svg and the conversion of base64. [link] tool][ref] I installed the last release 5.0.10 and integrated this pull that fixed my problem but It stopped working. In the next images show how I import icon, how I use icon in tag video importing with URL the CSS, and how to build icon in mode compile. Thanks very much beforehand for your help. **Describe the bug** I'm using svelte I'm using vite 5.0.10 The last version vite that broke this 5.0.0 The last version vite that work is 4.5.0 Import the icon in svg ![image]([link]…

### CASE-8449 · import.meta.glob path is empty after build in lib mode
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬8 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I'm building vue icon lib. I use `import.meta.glob` to scan 'assets/icons' folder. Everything is working as expected during development. But after build I noticed that path in `import.meta.glob` is empty(it is just an empty obj) so I'm getting errors that "icon doesn't exist in 'assets/icons'" <img width="656" alt="Screenshot 2023-11-26 at 16 54 26" src="[link] tool]/assets/64487090/05a2ce7f-9b05-407a-839e-9b985e5e853c"> <img width="994" alt="Screenshot 2023-11-26 at 16 52 58" src="[link] tool]/assets/64487090/b29425d4-6696-4e9a-bbb4-b125b7d8c684"> ### Reproduction [link]…

### CASE-8450 · Import asset fails to load when path matches `server.proxy`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · open
- **Excerpt**: ### Describe the bug Let say my `index.js` imports an asset from an "images" folder: ```js import img from "./images/img.png" ``` And that I have declared a `server.proxy` option that points to a static folder also named "images" (so there are two folders named "images", one for assets to import, one for static assets): ```js const backendUrl = '[link] export default defineConfig(() => ({ build: { outDir: '../main/resources/public' }, root: 'src/web', server: { proxy: { '/api': backendUrl, '/images': backendUrl } } })) ``` When the app loads (in dev mode), the asset file is loading like `GET…

### CASE-8454 · Note that you need plugins to import files that are not JavaScript
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug error during build: RollupError: Unexpected token (Note that you need plugins to import files that are not JavaScript) ### Reproduction [link] ### Steps to reproduce yarn typecheck && cross-env VITE_APP_ENV=dev vite build ### System Info ```shell System ``` ### Used Package Manager yarn ### Logs ![image]([link]) ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link]…

### CASE-8456 · import.meta在低版本浏览器报错
- **Principles**: P-A3, P-H1 · **Env**: chrome63, vite, vue, typescript
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug node 19.6.0 vite 4.1.0 vue 3.2.45 typescript 4.9.3 npm run dev 运行项目后，在Chrome63版本打开，显示空白页，并且有报错： ![image]([link]) ![image]([link]) 使用legacy插件，配置兼容低版本，没有作用；配置如下： ![image]([link]) 这个有没有办法解决啊？ 求大佬指点！ ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell Uncaught SyntaxError: Unexpected token . ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8461 · "Uncaught TypeError: Cannot read properties of undefined (reading 'prototype')" after migrating from 2.9.15 to 3.2.0
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬8 · closed · labels: wontfix
- **Excerpt**: ### Describe the bug In [this project]([link]) I want to upgrade vite and it's plugins. Every time I do it the previously working project breaks i.e. the browser window is blank and devtools shows: <img width="718" alt="error" src="[link]> The issue seems similar to [link] tool][ref] and [link] tool][ref]. ```shell PS C:\Users\alexa\capturing> yarn why sax └─ xml-js@user:1.6.11 └─ sax@user:1.2.4 (via npm:^1.2.4) PS C:\Users\alexa\capturing> yarn why string_decoder └─ readable-stream@user:3.6.0 └─ string_decoder@user:1.3.0 (via npm:^1.1.1) ``` ### Reproduction [link] ### Steps to reproduce…

### CASE-8463 · vite cannot recognize "process" in 2.9.15 and 3.1.x in runtime & the output is different from 2.9.6
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Vite cannot recognize "process" in 2.9.15 and 3.1.x when compile. And the bundle volume will grow larger, but it works well in 2.9.6. ![image]([link]) ### Reproduction #### build with 2.9.6 [link] <img width="653" alt="image" src="[link]> #### build with 3.1.x [link] <img width="672" alt="image" src="[link]> #### amazing The same code's different output is amazing! ### Steps to reproduce 1、yarn 2、yarn build 3、search in the file lib/scms-common-resource.umd.js with keyword "process" ### System Info ```shell System: OS: macOS 11.5.1 CPU: (8) x64 Apple M1 Memory: 38.30 MB /…

### CASE-8469 · v3 `import()` and v2 `import()` behavior is inconsistent
- **Principles**: P-A3, P-H1 · **Env**: linux, vue, vite
- **Signals**: 👍3 💬8 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug Related issues: [ref] ### Describe ![image]([link]) The final path is `../components/Com1.vue`, but glob result is missing `../components`. This is valid in `vite2`. I don't know if this is a `break changes` or a `bug`, and I don't see any documentation mentioning it. ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (4) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 16.14.2 - /usr/local/bin/node Yarn: 1.22.10 - /bin/yarn npm: 7.17.0 - /bin/npm npmPackages: @user/plugin-vue:…

### CASE-8470 · Dev Server says "Upgrade Required", browser has CORS-issues since Vite version 2.9.0
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hello Vite! I'm the author of [this plugin for Vite and Silverstripe CMS]([link]), [this plugin for CakePHP]([link]), and I use [this configuration]([link]). Until now, everything worked fine with the dev server, hot module replacement etc. However, after running `yarn upgrade` i noticed that the dev server is not working anymore. The browser is complaining about cors-issues - see screenshot below: <img width="680" alt="Bildschirmfoto 2022-06-15 um 10 47 33" src="[link]> I tried to downgrade vite step by step and the issue seems to be present from version `2.9.0`. Is…

### CASE-8475 · Vite unable to use npm xml-js package: Cannot read properties of undefined (reading 'prototype') at sax.js:222:46 at node_modules/sax/lib/sax.js
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍2 💬8 · closed · labels: p2-edge-case/inconsistency
- **Excerpt**: ### Describe the bug Current web app project using Rollup and am able to use the xml-js package to build the web app, however, when trying to switch Vite, the web app fails to load and Vite produces no errors, however, in the console I get the error below at runtime. I reproduced this using the simplest Vite+Vue app on stackblitz (see link below). ![image]([link]) Text: ``` Uncaught TypeError: Cannot read properties of undefined (reading 'prototype') at sax.js:222:46 at node_modules/sax/lib/sax.js (sax.js:1565:1) at __require (chunk-OL3AADLO.js?v=8029f249:9:50) at…

### CASE-8476 · vite hmr mac下无法实现热加载
- **Principles**: P-A3, P-H1 · **Env**: vite, vue, typescript
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug hmr 在项目文件修改后，不会重新热加载，每次都要手动重新，npm run dev，求大神看看 ![image]([link]) nodejs: v14.15.4 npm: 6.14.15 package.json `{ "name": "testvue", "private": true, "version": "0.0.0", "scripts": { "dev": "vite", "build": "vue-tsc --noEmit && vite build", "preview": "vite preview" }, "dependencies": { "vue": "^3.2.25" }, "devDependencies": { "@user/plugin-vue": "^2.2.0", "typescript": "^4.5.4", "vite": "^2.8.0", "vue-tsc": "^0.29.8" } }` ### Reproduction vite ### System Info ```shell npx envinfo --system --npmPackages '{vite,@user/*}' --binaries --browsers npx: 1 安装成功，用时 1.575 秒 System:…

### CASE-8485 · My project does not use Tailwind but it requires it to build
- **Principles**: P-A3, P-H1 · **Env**: tailwind, vite
- **Signals**: 👍0 💬8 · closed · labels: feat: css/p2-nice-to-have
- **Excerpt**: ### Describe the bug I have a project that does not use Tailwind, but when I run `npm run build`, I see the following: <img width="1536" alt="CleanShot 2021-08-21 at 14 55 34@user" src="[link]> Now, when I try to deploy my project to production, it fails during the build process because it requires the `tailwindcss` package. I already deleted and recreated my `package-lock.json` with no luck. Here's the contents of my `package.json`: ``` { "name": "admin", "version": "0.0.0", "scripts": { "dev": "vite", "build": "vite build", "serve": "vite preview" }, "dependencies": { "@user/core":…

### CASE-8494 · After using vue-router, there is an error in packaging and running # Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, vue, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: [ref] Describe the bug After using vue-router and build, there will be errors when and run in nginx. ![image]([link]) ![image]([link]) `Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.` Tried Nginx to add type information to js files but the same error still occurs ## System Info - **required** `vite` version: 1.0.0-rc.4 - **required** Operating System: Linux - **required** Node version:v12.16.3 - Optional: - npm/yarn version 6.14.4 - Installed `vue` version (from…

### CASE-8495 · Importing a node module with a CSS entry point no longer works
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Describe the bug Importing a package like [`modern-normalize`]([link]) now no longer works without suffixing `?import` manually Suffixing `?import` treats the module as external in production builds. ![image]([link]) ![image]([link]) ![image]([link]) ## System Info - `vite` version: 0.14.3 - Operating System: Arch Linux - Node version: 14.2.0

### CASE-8497 · [Vite 8 regression] Bundled CSS with non-ASCII codepoints (icon fonts) misrenders due to missing charset declaration
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug In Vite 8, CSS bundles containing non-ASCII codepoints (e.g. PUA codepoints in `content:` rules used by icon fonts like `video-react`) emit raw UTF-8 bytes with no `@user` declaration, no BOM, and no `charset=utf-8` in the HTTP `Content-Type`. When the browser has no charset signal it can fall back to a non-UTF-8 environment encoding, which decodes a 3-byte UTF-8 codepoint (e.g. `0xEF 0x88 0x80` → U+F200) as three Windows-1252 characters (`ïˆ€`). Icon fonts then render fallback `.notdef` glyphs. This worked in Vite 6 because esbuild (then the default CSS minifier)…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8403 · Regression in CSS output location
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: chrome, svelte, vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug CSS is output to a different location. ~~That location doesn't match the location in the manifest and~~ the change in location breaks SvelteKit users upgrading to Vite 5 because it breaks relative links to font files and potentially other assets: [link] We could work around it on the SvelteKit side by changing the left hand side of the `input` object in the Vite config, but the workarounds have some issues. E.g. I could replace `/` with `_`, but then the file names get to be awkwardly long and show up differently in the Chrome network tab. If I try to just strip the…

### CASE-8404 · lightningcss.target not working
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: safari, macos, webkit
- **Signals**: 👍0 💬9 · closed · labels: invalid
- **Excerpt**: ### Describe the bug specifying ```js export default { css: { transformer: 'lightningcss', lightningcss: { targets: { safari: 15 }, }, }, } ``` Safari does not support `backdrop-filter`, it needs prefixed `-webkit-backdrop-filter`. but the output code doesn't has the prefixed version. FYI: lightningcss playground works fine <img width="960" alt="image" src="[link] tool]/assets/8372385/53420aa5-9bae-4c65-bdbf-bb304030400d"> ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 14.1 CPU: (8) arm64 Apple M1 Pro Memory: 64.14 MB / 16.00 GB Shell:…

### CASE-8415 · 2.9.2 regression - Cannot read properties of null (reading 'isCE')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vue, vite
- **Signals**: 👍0 💬9 · closed · labels: has workaround/p3-downstream-blocker/regression
- **Excerpt**: ### Describe the bug Please use provided repo and run `npm run dev` then open developer console you will see the error. Downgrade to 2.9.1 problem is gone. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.3.1 CPU: (10) arm64 Apple M1 Max Memory: 4.11 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.8.0 - /usr/local/bin/node Yarn: 1.22.15 - /usr/local/bin/yarn npm: 8.5.5 - /usr/local/bin/npm Browsers: Chrome: 100.0.4896.88 Firefox: 99.0 Safari: 15.4 npmPackages: @user/plugin-vue: 2.3.1 => 2.3.1 vite: 2.9.2 => 2.9.2 ``` ### Used Package Manager npm ### Logs…

### CASE-8417 · func name with uppercase letter cause hot reload failure?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, react
- **Signals**: 👍0 💬9 · closed · labels: pending triage/feat: hmr
- **Excerpt**: ### Describe the bug Use react template. When a function name that starts with an uppercase letter in a component, hot reload was fail, It only can refreshed browser unless the function is changed to lowercase: // hot reload fail const **Func** = () => null; export default () => 123; // hot reload success const **func** = () => null; export default () => 123; ### Reproduction [issue-mini-project]([link]) ### System Info ```shell System: OS: macOS 11.4 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Shell: 5.8 - /bin/zsh Binaries: Node: 16.0.0 npm: 7.10.0 Browsers: Chrome: 98.0.4758.80…

### CASE-8418 · allow configuring the crossorigin attribute
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, vite
- **Signals**: 👍17 💬9 · open · labels: pending triage/has workaround
- **Excerpt**: ### Clear and concise description of the problem When building, the script tags inside the dist index.html get the attribute crossorigin automatically. The only way to change it to "use-credentials" is by modifying the final dist file. The reason this should be able to be modified is because there is a bug in Safari which leads to an 401 HTTP error if you have any authentication. [link] ### Suggested solution It would be nice to set crossorigin="use-credentials" inside vite.config.js somewhere for modules. ### Alternative _No response_ ### Additional context _No response_ ### Validations -…

### CASE-8421 · Minify css will transform rgba to #rrggbbaa
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome61, android, webview, vite
- **Signals**: 👍0 💬9 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug use esbuild to minify css will transform rgba to #rrggbbaa，android webview can‘t support：[#rrggbbaa]([link]) - in `vite.config.js` set `build.config.target` with `['chrome61']` can't work - create `build.js` set target with `['chrome61']` can work **build.js** ```js const esbuild = require('esbuild') esbuild.buildSync({ entryPoints: ['app.css'], minify: true, target: ['chrome61'], outfile: 'out.css' }) ``` ### Reproduction ```css #app { background-color: rgba(0, 0, 0, 0.1); } ``` ```js const esbuild = require('esbuild') esbuild.buildSync({ entryPoints: ['app.css'],…

### CASE-8423 · chrome throw ERR_HTTP2_PROTOCOL_ERROR
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, vite
- **Signals**: 👍14 💬9 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug When I run vite devServer, Chrome occasionally fails to load some js files. The error message is net::ERR_HTTP2_PROTOCOL_ERROR. Then I re-run vite devServer and reload it, and it runs fine. But when I copied the url and opened it in a new tab, it broke again. This error only occurs in Chrome, FireFox is working fine. ![image]([link]) I find some net log in chrome://net-internals/#events: ![image]([link]) This is the gist of the error: HTTP2_STREAM_ERROR --> description = "Server reset stream." --> net_error = "ERR_HTTP2_PROTOCOL_ERROR" --> stream_id = 13571 ###…

### CASE-8440 · Inline worker code incompatibility with Playwright’s WebKit
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webkit, vite
- **Signals**: 👍2 💬8 · closed · labels: contribution welcome/p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug The current implementation of inline workers generated by Vite is not compatible with Playwright’s WebKit browser. Specifically, the [`WorkerWrapper`]([link] tool]/blob/c0f72a695c5308cba605e3db4f851f4f6692e50c/packages/vite/src/node/plugins/worker.ts#L328-L370) code fails when trying to create workers using a Blob URL in WebKit, leading to errors during tests. The code in question is as follows: ```js function WorkerWrapper(options) { let objURL; try { objURL = blob && (self.URL || self.webkitURL).createObjectURL(blob); if (!objURL) throw ""; const worker = new…

### CASE-8441 · Chrome 131 will not load page when break points present
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome 131, chrome, vite, react, typescript
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have a legacy vite project but also have replicated with clean vite project. % npm create vite@user Need to install the following packages: [email] Ok to proceed? (y) y > npx > create-vite ✔ Project name: … vite-project ✔ Select a framework: › React ✔ Select a variant: › TypeScript Scaffolding project in /Users/michaeldobeson/Temp/ViteTest/vite-project... Done. Now run: cd vite-project npm install npm run dev Launching a debug session in vscode with chrome shows the page as expected. Creating any break point and reloading the debug session hangs the page. It appears to…

### CASE-8460 · hyperid 加载报错
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, vite
- **Signals**: 👍0 💬8 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug vite升级到3.2.3 后，hyperid 模块加载报错： ``` loadable.esm.js:377 Uncaught TypeError: uuidv4 is not a function at hyperid (hyperid.js:19:19) at uuidGenerator (uuid.tsx:7:10) at uuid.tsx:13:16 ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.6 CPU: (4) x64 Intel(R) Core(TM) i7-7567U CPU @ 3.50GHz Memory: 26.68 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.12.0 - ~/.nvm/versions/node/v18.12.0/bin/node Yarn: 1.22.15 - ~/.yarn/bin/yarn npm: 8.19.2 - ~/.nvm/versions/node/v18.12.0/bin/npm Browsers: Chrome:…

### CASE-8462 · Works in dev, but not on a production build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, firefox, linux, vite
- **Signals**: 👍0 💬8 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug So, I upgraded my project from Vite `v2.9.15` to `v3.1.8`, after which I started getting build warnings and issues. ### Reproduction [link] ### Steps to reproduce Run: ``` yarn yarn build yarn preview # optional ``` Open [link] ### System Info ```shell System: OS: Linux 6.0 undefined CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 6.16 GB / 13.53 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 16.16.0 - /usr/bin/node Yarn: 1.22.17 - /usr/bin/yarn npm: 8.19.2 - /usr/bin/npm Browsers: Brave Browser: 106.1.44.112 Chromium: 106.0.5249.119 Firefox:…

### CASE-8464 · globalThis is not defined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, vue, vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug 开发服务局域网手机钉钉浏览器访问报错globalThis is not defined ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (4) x64 Intel(R) Core(TM) i5-2450M CPU @ 2.50GHz Memory: 1.00 GB / 7.89 GB Binaries: Node: 14.18.0 - C:\Program Files\nodejs\node.EXE npm: 6.14.15 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (105.0.1343.33) Internet Explorer: 11.0.19041.1566 npmPackages: @user/plugin-legacy: ^2.0.1 => 2.0.1 @user/plugin-vue: ^3.0.0 => 3.0.1 @user/plugin-vue-jsx: ^2.0.0 => 2.0.0 vite: ^3.0.0 => 3.0.5…

### CASE-8466 · Vite build relative path not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, windows, vite
- **Signals**: 👍0 💬8 · closed · labels: invalid
- **Excerpt**: ### Describe the bug - In vite.config.ts I set `base: ''` and run `npm run build`, the `dist` output folder like this: ![image]([link]) - My vite.config.ts: ![image]([link]) - tsconfig.json: ![image]([link]) - Package version: ![image]([link]) ### Reproduction Follow the image ### System Info ```shell System: OS: Windows 8.1 6.3.9600 CPU: (8) x64 Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz Memory: 6.39 GB / 15.92 GB Binaries: Node: 16.16.0 - D:\Z-Dim\services\nodejs\node.EXE npm: 8.11.0 - D:\Z-Dim\services\nodejs\npm.CMD Browsers: Chrome: 104.0.5112.81 Internet Explorer: 11.0.9600.17031…

### CASE-8467 · Conditional imports don't work in scss
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: firefox, linux
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When using a conditional import in scss, the output isn't processed correctly. ![image]([link]) SCSS variables are still in the output: ![image]([link]) Related to [link] ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.19 undefined CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz Memory: 6.23 GB / 15.42 GB Container: Yes Shell: 5.9 - /bin/zsh Binaries: Node: 18.7.0 - /usr/bin/node npm: 8.17.0 - /usr/bin/npm Browsers: Firefox: 103.0.2 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of…

### CASE-8468 · Vite 3.0.4 - vite build never completes for SvelteKit project (no errors)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, firefox, safari, macos, vite, svelte
- **Signals**: 👍0 💬8 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Running `npm run build` which is a script in my package.json for `vite build` goes through the "transforming" stage then "rendering chunks" but never completes and doesn't provide any errors. ### Reproduction 1. `git clone [link] 2. `cd shy-svelte` 3. `npm install` 4. `npm run build` ### System Info ```shell System: OS: macOS 12.4 CPU: (10) arm64 Apple M1 Pro Memory: 873.11 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.7.0 - /opt/homebrew/bin/node npm: 8.15.1 - /opt/homebrew/bin/npm Browsers: Chrome: 103.0.5060.134 Firefox: 102.0.1 Safari: 15.5 npmPackages:…

### CASE-8477 · CJS dependencies are not being pre-bundled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I've got an example Vite app [here]([link]) that has an ESM library, gboost-ui, which has CJS dependencies and peerDependencies which are CJS. When I run `pnpm dev` I get an error in the browser: `The requested module '/node_modules/.pnpm/[email]/node_modules/prop-types/index.js?v=f8148f89' does not provide an export named 'default'`. So I try adding `prop-types` to `optimizeDeps.include` but then I get: `The requested module '/@user/Users/stickb/Code/scratch/tdmp-edge-mgmt-ui/node_modules/.pnpm/[email]/node_modules/zen-observable/index.js?v=2906f0d0' does not provide an…

### CASE-8478 · IOS 10+ blank
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: ios 10, ios10, ios11, vue, vite
- **Signals**: 👍0 💬8 · closed · labels: needs reproduction/plugin: legacy/p2-edge-case
- **Excerpt**: ### Describe the bug IOS10 blank, not working ![cc61d89a03d9de850ecd384eb0e392a]([link]) . ### Reproduction [link] ### System Info ```shell ios 10+ vue 3 vite 2 ``` ``` demo site [demo]([link]) >=ios11 working ``` ### Used Package Manager yarn ### Logs ```shell can't find variable System... ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug…

### CASE-8480 · Project doesn't compile
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug I have a simple project with web3 libraries, but it doesn't compile. Check this [stackblitz]([link]) used web3 libraries ``` "@user/providers": "^5.5.1", "@user/core": "^6.0.9", "@user/injected-connector": "^6.0.7", "@user/network-connector": "^6.1.9", ``` ### Reproduction Check this [stackblitz]([link]) ### System Info ```shell System: OS: macOS 12.0.1 CPU: (8) arm64 Apple M1 Pro Memory: 184.80 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.2.0 - /opt/homebrew/bin/node Yarn: 1.22.17 - /opt/homebrew/bin/yarn npm: 8.2.0 - /opt/homebrew/bin/npm Browsers: Chrome:…

### CASE-8491 · plugin-legacy：Unexpected token import
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 53
- **Signals**: 👍5 💬8 · closed · labels: plugin: legacy
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I used the plugin @user/plugin-legacy ``` legacy({ targets: ['chrome 53'] }), ``` But the packaged code still contains `import"core-js/modules/es.promise.js";` ``` ****-legacy.278fab9b.js:1 Uncaught SyntaxError: Unexpected token import SyntaxError: Unexpected token import ****-legacy.278fab9b.js:1 Uncaught (in promise) SyntaxError: Unexpected token import ``` <!-- A clear and concise description of what the bug…

### CASE-8496 · Import .ts files in index.html
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite, vue
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Describe the bug Vite is still serving .ts files if they are imported in the index.html <script> tag. It results in not loadable page. > index.html ``` <script type="module"> import { createApp } from 'vue' import App from './src/App.vue' import { router } from './src/router/index.ts' import { store } from './src/store/index.ts' const app = createApp(App) app.use(store) app.use(router) app.mount('#app') </script> ``` > Chrome console error ``` Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8406 · When UMD and CJS are output at the same time: ERROR: Expected "(" but found "."
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, vite
- **Signals**: 👍0 💬9 · closed · labels: bug: upstream/p3-minor-bug/feat: library mode
- **Excerpt**: ### Describe the bug While I build Output error ``` dist/lib/build/a.js 0.16 kB │ gzip: 0.16 kB [vite:esbuild-transpile] Transform failed with 1 error: vite-starter.umd.cjs:7:16: ERROR: Expected "(" but found "." Expected "(" but found "." 5 | })(this, (function (exports) { 'use strict'; 6 | 7 | function index.utilA(name) { | ^ 8 | return 1; 9 | } ✓ built in 296ms error during build: Error: Transform failed with 1 error: ``` ### Reproduction [link] ### Steps to reproduce npm run build ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @…

### CASE-8419 · Importing an ESM package that uses an esModuleInterop package is not compatible in Dev mode.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍2 💬9 · closed · labels: pending triage/inconsistency
- **Excerpt**: ### Describe the bug I'm trying to use the `onboard` library, and that uses uses `@user.pm/safe-apps-sdk v3.0.0` `@user.pm/safe-apps-sdk v3.0.0` is a commonjs with the following setting: ```js Object.defineProperty(exports, "__esModule", { value: true }); ``` #### What works: If I import `@user.pm/safe-apps-sdk v3.0.0` directly it work as I would expect, in development and production. This is how I see the transformation in dev mode: ```js console.log(import('@user.pm/safe-apps-sdk')); //becomes: //works fine console.log(import('/node_modules/.vite/@user.js?v=b22e823a').then(m => m.default &&…

### CASE-8420 · error during build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, vite, desktop
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug $ npm run vite:build > [email] vite:build C:\Users\USER\Desktop\work\operation > vite build vite v2.7.10 building for production... transforming... Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification ✓ 200 modules transformed. rendering chunks... [vite:css-post] The service was stopped error during build: Error: The service was stopped at C:\Users\USER\Desktop\work\operation\node_modules\esbuild\lib\main.js:1276:29 at C:\Users\USER\Desktop\work\operation\node_modules\esbuild\lib\main.js:629:9 at Socket.afterClose…

### CASE-8422 · Fail to import ESM dependencies in config file
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Related to [build tool][ref] - this time with a reproduction. Given the following `vite.config.js` file: ```js import { defineConfig } from "vite"; import preact from "@user/preset-vite"; import grayMatter from "gray-matter"; import remarkParse from "remark-parse"; import remarkStringify from "remark-stringify"; import remarkToRehype from "remark-rehype"; import rehypeRaw from "rehype-raw"; import { unified } from "unified"; import toJsx from "@user/hast-util-to-jsx"; export default defineConfig({ plugins: [ { name: "markdown", async transform(code, id) { if…

### CASE-8425 · css-post plugins crashes when using transformRequest without first starting a server
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug While using the JS API, transformRequest can be used to get transformed versions of js/ts files without starting a server, but when doing the same on css files the css-post plugin crashes with: ``` ❯ node server.js (node:269183) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'get' of undefined at TransformContext.transform…

### CASE-8430 · vite base full url option seems not work in development
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍13 💬9 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> vite base full url option seems not work in development ```javascript export default defineConfig({ base: '[link] plugins: [vue({ template: { transformAssetUrls: { base: '[link] } } })] }) ``` ![image]([link]) ### Reproduction [link] ### System Info Output of `npx…

### CASE-8437 · Vite does not resolve `modulepreload` for plugin-resolved IDs
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬8 · open · labels: pending triage
- **Excerpt**: ### Describe the bug When an HTML entry contains a module preload link pointing at a source module, it gets followed when doing `vite build`: ```html <link rel="modulepreload" href="/src/main.ts" /> <script type="module" src="/src/main.ts"></script> <!-- ⬆️ the above is transformed to the below ⬇️ --> <link rel="modulepreload" href="data:text/javascript;base64,..." /> <script type="module" src="/assets/index-....js"></script> ``` But if the JS module is a plugin-resolved ID, it doesn't follow the `modulepreload`: ```html <link rel="modulepreload" href="/@user" /> <script type="module"…

### CASE-8448 · new URL("/my/file.js?wow", import.meta.url) doesn't provide "?wow" param to a plugin
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: feat: web workers
- **Excerpt**: ### Describe the bug ``` new URL("/my/file.js?wow", import.meta.url) ``` doesn't provide "?wow" param in `resolveId` or `transform` handlers. In transform `/my/file.js?type=classic&worker_file` but no custom "wow" param. ### Reproduction [link] In the terminal you may see (no `?wow` param) ``` resolve id /test.js?type=module&worker_file resolve id /test.js?type=module&worker_file ``` ### Steps to reproduce ``` new URL("/my/file.js?wow", import.meta.url) ``` Create plugin with `resolveId` and `trasnform` and see id. ### System Info ```shell VITE v5.0.7 ``` ### Used Package Manager pnpm ###…

### CASE-8452 · Inconsistent compilation of CSS Modules between dev and build commands when using ?url query param
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍1 💬8 · closed · labels: p3-minor-bug/inconsistency
- **Excerpt**: ### Describe the bug Hi everyone :wave: I'm trying to workaround [link] tool][ref] by manually listing CSS Modules I want to manipulate on the client-side but the contents of the transformed asset differs between `vite dev` and `vite build`, to be more specific, in `dev` the CSS class names are property hashed as I would expect for a `.module.css` file but they are not after `vite build`. For the reproduction project, I have an `Isolated.module.css` file: ```css .ImportantText { color: red; font-weight: bold; } ``` Which I'm importing as follows: ```javascript import IsolatedUrl from…

### CASE-8455 · vite dev server works, but `vite build` fails: RollupError: "useState" is not exported by React
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍0 💬8 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug I'm using React in a very small, simple Vite app. The dev server works great, but when I try to `vite build` I get this: ``` $ npx vite build vite v4.2.1 building for production... transforming (11) ..\..\packages\cv-components\dist\index.css"Fragment" is not exported by "../../common/temp/node_modules/.pnpm/[email]/node_modules/react/jsx-runtime.js", imported by "react/jsx-runtime". "jsx" is not exported by "../../common/temp/node_modules/.pnpm/[email]/node_modules/react/jsx-runtime.js", imported by "react/jsx-runtime". "jsxs" is not exported by…

### CASE-8457 · Broken examples after [ref]
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, vue
- **Signals**: 👍5 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug PR [ref] updated a few example's `package.json` to use alpha versions of some Vite plugins. This breaks the `vue` and `vue-ts` examples linked at: [link] ``` $ vite failed to load config from /home/projects/vitejs-vite-lrnemy/vite.config.js error when starting dev server: file:///home/projects/vitejs-vite-lrnemy/node_modules/@user/plugin-vue/dist/index.mjs:2 import { isCSSRequest, normalizePath as normalizePath$1, transformWithEsbuild, formatPostcssSourceMap, createFilter } from 'vite'; ^^^^^^^^^^^^ SyntaxError: The requested module 'vite' does not provide an export named…

### CASE-8473 · Cannot change SourceMaps path if esbuild is not used
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage/feat: sourcemap
- **Excerpt**: ### Describe the bug For the dev mode, I am using Babel for transpiling typescript and not esbuild which is turned off inside vite.config. In that case all sourcemaps (..."sources":["app.ts"]) have only relative paths and not absolute path as they have when esbuild is used. It seems that default rollup sourcemap settings are used because exactly the same output I am getting using only rollup. There is not way to create sourceMaps with absolute path or maybe I miss something. e.g. ``` sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => { // will replace relative paths with absolute…

### CASE-8474 · Worker does not go through some plugins in vite build, but does in development
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage/feat: web workers
- **Excerpt**: ### Describe the bug In a Vite project with some Rollup plugins, when importing a worker like this: new URL("./worker/CompiledWorker.js", import.meta.url).href, the inlined code doesn't get transformed through some plugins when running `vite build`. I tried setting the plugins both directly on Vite and also on Rollup. See repo. ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.6.2 CPU: (8) x64 Intel(R) Core(TM) i7-4850HQ CPU @ 2.30GHz Memory: 249.74 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.2 - /Users/toma/.nvm/versions/node/v16.13.2/bin/node npm: 8.4.1 -…

### CASE-8483 · No matching export in "browser-external:stream"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, react
- **Signals**: 👍3 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ### Explanation of the error When using vite with a react project including the [library subtitle]([link]), we have the two following errors : ``` No matching export in "browser-external:stream" for import "Duplex" ``` and ``` No matching export in "browser-external:stream" for import "Transform" ``` (Full error below) The error is from the builtin module **stream** that , for a reason I ignore, is replaced by browser-external:stream. The problem is similar to this one : aws-amplify/amplify-js[ref] As well as maybe this one : [link] tool][ref] ### Error Message ``` error…

### CASE-8484 · "Pre-bundling dependencies" in node_modules chunking does not respect plugins queue
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Why? Some libraries have DEBUG flag in codebase to ship more debugging information into development build, but "Pre-bundling dependencies" does not respect plugins, responsible for this transformation, and it fails it. I'm trying to configure debug globals in glimmex application, using vite plugin: [link] it has ordering: `enforce: "pre"`, and babel transformation itself works just fine, but (checked output), but, I don't see it applied to codebase (compiled node_modules dependency) once I have server running. I'm trying to replace source code manually, and it's also…

### CASE-8492 · [plugin:vite:esbuild] Transform failed with 1 error: Unexpected "@"，when using styled-components+mobx+ts
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When I'm rendering a styled component, I get the following error: [plugin:vite:esbuild] Transform failed with 1 error: Unexpected "@". ### Reproduction See [vite-bug-with-styled-components]([link]) When I created a new TSX component that used the Styled component in this component, and used the mobx@user component, I got an error: [Plugin :vite:esbuild] Transform failed with 1 error: Unexpected "@". When I remove the styled components in the component, it runs normally <!-- Please provide a link to a repo that can reproduce the problem you ran into. A reproduction is…

### CASE-8498 · [Vite 8] Hook Filters behaves differently between dev and build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍3 💬7 · open · labels: p3-minor-bug/inconsistency
- **Excerpt**: ### Describe the bug While migrating a project to Vite 8, I noticed that some plugins are applied in dev mode but not when building the application. It seems like more glob features are supported in dev but not when building. ### Reproduction [link] ### Steps to reproduce Create a new Vite project with the vanilla template and add the following `vite.config.ts` file: ```ts import { defineConfig } from 'vite'; export default defineConfig({ plugins: [ { name: 'filter-test', transform: { filter: { id: { include: '**/*.(js)', } }, handler(code, id) { console.log('transform', id); } } } ], }); ```…

### CASE-8500 · [v8] Rolldown with OXC removes comments, directives and unused bindings
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction/clarity: medium
- **Excerpt**: ### Describe the bug When a virtual module emits some JavaScript code, and is bundled, the final code has comments, directives and bindings stripped down. In v7 that didn't happen. This behaviour doesn't seem to be configurable with the function `transformWithOxc` ### Reproduction [link] ### Steps to reproduce - Checkout the repository - Checkout branch `bug/stripping` - Run `node build.mjs` - See the logs ### System Info ```shell System: OS: macOS 26.3.1 CPU: (12) arm64 Apple M4 Pro Memory: 12.99 GB / 48.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.12.0 npm: 11.6.2 pnpm: 10.28.0 Browsers:…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8407 · Vite cannot load `vite.config.ts` with Node 17 and `[email]-beta.3`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When running `$ vite build` Vite throws this error: ```bash $ pnpm build > @ build /home/rom/tmp/vite-ssr-project > vite build failed to load config from /home/rom/tmp/vite-ssr-project/vite.config.ts error during build: Error: The URL must be of scheme file at /home/rom/tmp/vite-ssr-project/vite.config.ts at loadConfigFromBundledFile (file:///home/rom/tmp/vite-ssr-project/node_modules/.pnpm/[email]-beta.3_@[email]/node_modules/vite/dist/node/chunks/dep-64acfab2.js:65812:19) at processTicksAndRejections (node:internal/process/task_queues:96:5) at async loadConfigFromFile…

### CASE-8427 · `ssrLoadModule` does not load nested dependency
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬9 · closed · labels: pending triage/feat: ssr
- **Excerpt**: ### Describe the bug Original issue discovered: [link] tool]/discussions/3464#discussioncomment-807918 I have a vite plugin that make use of the `ssr` argument in resolveId hook. The main purpose of the plugin is to replace `@user/polyfills/fetch` with `@user/polyfills/fetch.node` when its on the server and `@user/polyfills/fetch.browser` when it is on the client. This plugins work on the client side, but break when `ssrLoadModule` is use to load the server entry point. #### Some investigations I have tired to replace `@user/polyfills/fetch` with a random virtual module (ie.…

### CASE-8445 · `isSsrBuild` set to `false` when using `ssrLoadModule` with vite dev server
- **Principles**: P-F4 · **Env**: linux, vite
- **Signals**: 👍1 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have vite.config.ts that needs to know if we are doing an SSR build when using ssrLoadModule. Currently, it is set to false. I need to do this because I need to replace `global` with `window` using define for CSR. I cant switch it around, because otherwise, window is not defined in SSR. I dont know if this is a bug, or if there is a way to set it to `true` ? ### Reproduction [link] ### Steps to reproduce Just open the stackblliz link. You can see that `isSsrBuild` is set to `false`. ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM)…

### CASE-8458 · vite tries to resolve dependencies despite they're marked as external
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬8 · open · labels: has workaround/p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug Hi there, we're using vite inside a big monorepo and I'm experiencing an unexpected issue when building with libraries marked as external. We're trying to build each module in parallel, but the `vite` build fails because a dependency is not yet built. This should not happen, because the dependency is explicitly flagged as `external` (and `vite --ssr` already defaults to having every bare import external by default). `vite` reading and interpreting the external dependency somewhat defeats the point of having it `external` in the first place. It is not bundled in the output…

### CASE-8465 · ERR_SSL_VERSION_OR_CIPHER_MISMATCH when both --https and server.https provided
- **Principles**: P-F4 · **Env**: vite, react, typescript
- **Signals**: 👍1 💬8 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug When using `server.https` set to true, subsequently passing the `--https` CLI flag to `vite` causes a ERR_SSL_VERSION_OR_CIPHER_MISMATCH when trying to load the page served by the dev server. Reloading the page does not have any effect on the issue. The reproduction steps are listed below, additionally, the reproduction stackblitz link with the project set up as stated below also errors out in an odd way. * npm create vite * react * typescript * Add ``` { server: { https: true } } ``` to vite.config.ts In package.json, under scripts, dev, pass `--https` to vite. The above…

### CASE-8471 · React SSR not working in Production Build.
- **Principles**: P-F4 · **Env**: macos, react, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I managed to get SSR with React and Vite working with the command "vite" but when i try to build with "vite build" and serve it with "vite preview" SSR got not working. The code is Public and i want to Maintain it as a good template: [link] ### Reproduction Reproduction clone my code, then `npm i` -> `npm run dev` try all works. shutdown and try `npm run preview`, look in the loaded document now no SSR ### System Info ```shell System: OS: macOS 12.4 CPU: (20) arm64 Apple M1 Ultra Memory: 19.76 GB / 64.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.0.0 -…

### CASE-8482 · Glob import does not refresh in SSR - minimatch vs micromatch
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug The observed bug is that `import.meta.glob('...')` does not detect newly added files under some circumstances. I've only seen this during SSR and using a pattern like `..../*.(js|ts)`. It works when using `..../*.[jt]s)` instead. I think the reason is that `import.meta.glob` uses `fast-glob` to match files, which internally uses `micromatch`. However, the [watcher uses `minimatch` instead]([link] tool]/blob/3ba2d7ec07d0c95de5a4213567c0f6b198baba7f/packages/vite/src/node/server/hmr.ts#L193) to track new files. Apparently, the syntax of those two is different. See this…

### CASE-8487 · SSR SourceMap not loaded when debugging
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍6 💬8 · closed · labels: p3-minor-bug/feat: ssr
- **Excerpt**: ### Describe the bug Currently it looks like when debugging the node process with source maps enabled (`node --inspect --enable-source-maps ./source.js`) that the source maps are not actually loaded. ### Reproduction Load any file via `ssrLoadModule` with a `debugger`. You will see that the debugger shows compiled code instead of the source. eg: _source.js_ ```js const { createServer } = require('vite') (async () => { const server = await createServer({ server: { middlewareMode: true } }); await server.ssrLoadModule("./debug.js"); })(); ``` _debug.js_ ```js debugger; console.log("debugging",…

### CASE-8488 · Issues with ESM module import syntax and endless loop during load in SSR
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug [JSDB]([link]) is a 100% JavaScript database. The latest version is written in ESM. Simply importing it in the SSR server script (in [vite-plugin-ssr]([link])) causes errors that do not otherwise exist in other contexts. (I am trying to use an ESM node module that otherwise works fine during SSR with Vite.) ### Reproduction 1. Create an instance of the vite-plugin-ssr vue starter app: ```shell npm init vite-plugin-ssr ``` 2. Change the type to `module` in _package.json_: ```json { … "type": "module", … } ``` 3. Install JSDB: ```shell npm i @user/jsdb ``` 4. Add the…

### CASE-8489 · SSR:Error: ENOENT: no such file or directory, open 'xxx/src/views/module.tsx'
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug <!-- A clear and concise description of what the bug is. --> in ssr render fail. error info: ``` error info Pre-bundling dependencies: vue vue-router vue-decorator (this will be run only when your dependencies or config have changed) [Error: ENOENT: no such file or directory, open 'USERPATH/src/views/module.tsx'] { errno: -2, code: 'ENOENT', syscall: 'open', path: 'USERPATH/src/views/module.tsx' } Error:…

### CASE-8493 · Support SSR in plugin-vue-jsx
- **Principles**: P-F4 · **Env**: vue, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug Vite is unable to SSR when using jsx/tsx style Vue components. I have been told by a Vue maintainer this is is because `@user/plugin-vue-jsx` is failing to inject modules into ssr context. Please see [original issue]([link]) for more context ## Reproduction Please provide a link to a repo that can reproduce the problem you ran into. [link] 1. clone 2. `yarn` 3. `yarn dev` 4. open localhost:3000 `Cannot read property forEach of undefined` I previously assumed this error came from `renderToString` from `@user/server-renderer`, see line 16 of `entry-server.ts`. Apparently…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8411 · devserver response very slow in host proxy
- **Principles**: P-G4, P-E3 · **Env**: macos, vite, react
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am dev via proxy or modify host file. but the devserver response very slow in host proxy. ![Xnip2022-09-04_20-57-59]([link]) this problem found in vite version after 3.0.6 ## Reproduction - select react template ``` pnpm create vite ``` - run dev - modify host file add host to `/etc/host` ``` 127.0.0.1 www.baidu.com ``` - open [link] ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.3 CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz Memory: 25.05 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.16.0 - /usr/local/bin/node Yarn: 1.22.11 -…

### CASE-8426 · When bundling, conditional exports in package.json are selected incorrectly
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When importing a module that has conditional exports specified (e.g., "browser", "import", "require" or "node"), Vite may select the incorrect export, depending on the order of exports in the module's package.json file. For js/ts files that are strictly used for endpoints (e.g., target of a fetch request), this is problematic. The specific case is when importing "jose" to sign JWTs. In its [package.json]([link]), you can see the "exports" , of which many have "browser", "import" and "require" entries. Example: ``` "exports": { "./package.json": "./package.json",…

### CASE-8439 · empty css rollup input generates empty js output
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: feat: css/p2-edge-case/feat: build
- **Excerpt**: ### What I am doing Empty CSS (or SCSS) file as input in vite rollupOptions config. ```js export default { build: { manifest: true, rollupOptions: { input: [/* 'test.scss', */ 'test.css'], }, }, }; ``` ### What i expect to happen I expected either no output for this file (and no manifest entry), or an empty css file output and a manifest entry like this: ```json { "test.css": { "file": "assets/test-l0sNRNKZ.css", "name": "test", "src": "test.css", "isEntry": true } } ``` ### What is actually happening Vite generates an empty js file as output when running `vite build`, e.g. this manifest…

### CASE-8459 · vue2 tsx (class component) hmr exception
- **Principles**: P-G4, P-E3 · **Env**: vue, vite
- **Signals**: 👍0 💬8 · closed · labels: feat: hmr/p3-minor-bug
- **Excerpt**: ### Describe the bug vite@user + vue2 + class component + tsx When use `lang="tsx"` and class component, the vite hmr error. See below about "Steps to reproduce" for details. ### Reproduction -- ### Steps to reproduce dependencies ```json { "@user/plugin-vue2": "^2.0.1", "@user/plugin-vue2-jsx": "^1.0.3", "vite": "^3.2.3", "vue": "^2.7.14", "vue-class-component": "^7.2.6", "vue-property-decorator": "^9.1.2" } ``` set `lang="tsx"` ```vue <template> <el-form ref="form" :mode="value" size="mini" @user.native.prevent > <el-form-item label="Test"> <!-- e.g.: changed "v-model" to test1, -->…

### CASE-8472 · HMR does not work with certain code in Vue
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬8 · closed · labels: bug: upstream/feat: hmr/p3-minor-bug
- **Excerpt**: ### Describe the bug When using slot, the prop is not updated after modifying the prop of the child component. ```vue <template> <!-- Simple example --> <Form> <!-- ⬇️ changed it but not updated --> <FormItem label="second" /> </Form> </template> ``` ```js // form.js import { renderSlot as _renderSlot } from 'vue' // [link] // <slot /> export default (_ctx, _cache) => { return _renderSlot(_ctx.$slots, 'default') } ``` ```js // form-item.js import { toDisplayString as _toDisplayString } from 'vue' export default { props: { label: String }, setup(props) { // [link] // {{ label }} // Generated…

### CASE-8490 · vite will automatically escape and replace the string form"process.env.NODE_ENV:" content!!!
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍1 💬8 · closed · labels: pending triage/p2-edge-case
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I want print process.env.NODE_ENV: console.log("process.env.NODE_ENV:", process.env.NODE_ENV); actually: bug : 1、browser Error: Uncaught SyntaxError: missing ) after argument list 2、browser/Sources : console.log(""development":", "development"); "process.env.NODE_ENV:" is replace development expect ：process.env.NODE_ENV: development step: 1、npm init @user/app 2、npm i && npm run dev 3、open and modify src\main.js…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8451 · npm run build results in bad links on index.html page to scritps, etc., anything in /assets
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Just doing a build. Result is that the /asset links don't work and the page won't render. When I remove the slash before /assets the page loads. `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <link rel="icon" href="/favicon.ico" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Incident Map App</title> <script type="module" crossorigin src="/assets/index-14964bb2.js"></script> <link rel="stylesheet" href="/assets/index-27545ae8.css"> </head> <body> <div id="app" class="container align-items-center"></div> </body> </html>…

### CASE-8481 · Line numbers in TypeScript broken for Chrome/VSCode debugging
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-E1, P-E2, P-E4 · **Env**: chrome/, chrome, typescript, react, vue
- **Signals**: 👍23 💬8 · closed · labels: needs reproduction/feat: sourcemap
- **Excerpt**: ### Describe the bug I have a web application that does not use any frameworks such as React, Vue, etc. but does use TypeScript instead of normal JS files. When breakpoints are placed in my source code (using VSCode) the application does indeed break at the expected moment, and both Chrome Debugger and VSCode highlight the same (correct) lines but all Call Stack and variables info clearly shows the debugger is being referred to a different line. In addition, the line numbers reported for console.log statements (in Debug Console, for example) do not match the source code. ### Reproduction This…

### CASE-8486 · Click doesn't work
- **Principles**: P-A1, P-A4, P-G3, P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: In the provided template ssr-vue, In the DEV environment the click event does not work, and this is also the case in my own project. Clicking is completely unresponsive and does not execute the functions in setup，How to solve this problem ```vue <template> <h1>Home</h1> <p> <img src="../assets/logo.png" alt="logo" /> </p> <button @user="state.count++">count is: {{ state.count }}</button> <Foo /> <p class="virtual">msg from virtual module: {{ foo.msg }}</p> <p class="inter">this will be styled with a font-face</p> <ImportType /> </template> <script setup> import foo from '@user' import {…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8453 · Fail to require (in cjs) CSS modules from an npm package
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: feat: css/p3-minor-bug/regression/feat: deps optimizer
- **Excerpt**: ### Describe the bug The background is I have some existing packages whose generated code is in CommonJS + CSS modules. E.g. ```js "use strict"; var __importDefault = (this && this.__importDefault) || function (mod) { return (mod && mod.__esModule) ? mod : { "default": mod }; }; Object.defineProperty(exports, "__esModule", { value: true }); exports.circularFont = void 0; const circular_font_module_scss_1 = __importDefault(require("./circular-font.module.scss")); exports.circularFont = circular_font_module_scss_1.default.circularFont; //# sourceMappingURL=index.js.map ``` This file uses…

