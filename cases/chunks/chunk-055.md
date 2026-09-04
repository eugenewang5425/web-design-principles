# Case Chunk 055 — Round 55

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6401 · GSAP ScrollTrigger is causing a scroll to top on iOS 16 Safari
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-D4, P-F1, P-F5 · **Env**: safari, opera, ios 16, nuxt, vite
- **Signals**: 👍2 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug On iOS 16 Safari with GSAP ScrollTrigger and `scroll-behavior: smooth;` in my stylesheet, the page automatically scrolls back to top when the scroll animation has finished. I'm absolutely not sure if this is related to Nuxt, but this issue only occurs on Nuxt rc.11 (I had no issues on rc.8) which is the reason for…

### CASE-6412 · iphone7 safari vue hook mounted no run
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, opera, vue, nuxt, webpack, iphone
- **Signals**: 👍0 💬7 · closed · labels: question/3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `webpack` - User Config: `builder`, `app` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction My attempts to create a template project also failed // form: app.vue <template> <div> <p>{{a}}</p> <NuxtWelcome /> </div> </template> <script lang="ts" setup> import { onMounted } from "vue"; let a = ref("111") console.error('111') onMounted(async()=>{ console.error('444444') a.value = '222'…

### CASE-6422 · TS(2322) with NuxtWelcome missing lang="ts"
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chromium, windows, nuxt, vite, typescript, electron
- **Signals**: 👍1 💬7 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `ssr` - Runtime Modules: `-` - Build Modules: `-` Version: 1.67.2 (user setup) Electron: 17.4.1 Chromium: 98.0.4758.141 Node.js: 16.13.0 V8: 9.8.177.13-electron.0 OS: Windows_NT x64 10.0.22000 Volar: 0.35.2 ### Reproduction [link] ### Describe the bug VSCode problem window shows a TS 2322 issue with NuxtWelcome component. It appears to not recognise the component default values. I'm not sure if this is Nuxt or…

### CASE-6439 · `nuxi init` failed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge/, macos, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/cli
- **Excerpt**: <!-- Please carefully read the contribution docs before creating a bug report 👉 [link] Please use the code sandbox template below to create a minimal reproduction 👉 [link] --> ### Environment - MacOS Big Sur - Node v16.6.2 ### Describe the bug and expected behavior ```bash npx nuxi@user init my-nuxt3-website ``` Emits error: ``` Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/antfu/.npm/_npx/b95349761371180e/node_modules/nuxi-edge/cli' imported from /Users/antfu/.npm/_npx/b95349761371180e/node_modules/nuxi/nuxi.mjs at new NodeError (node:internal/errors:371:5) at finalizeResolution…

### CASE-6446 · Infinite loop on hot reload when async import
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, nuxt
- **Signals**: 👍0 💬7 · closed · labels: stale/pending triage/2.x
- **Excerpt**: Hello. I've found odd behavior of hot reload - when I try to make await import on the @user package I'm getting an infinite loop (refreshing browser). I'm using Safari in this case (which don't support intl.numberformat fully). <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt`…

### CASE-6447 · NuxtJs: ReferenceError: NuxtError is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: I am learning nuxt and my fresh project is generated with the `2.14.5` nuxt version. I wanted to test how nuxt-link works so I intentionally put a nuxt-link to a route that doesn't work hoping to get redirected to the default 404 page. I put this line the `pages/index.vue` file: `<nuxt-link to='/asksdkjd'>ssss</nuxt-link>` And it displays in chrome like [this:]([link]) After I click the link I get these error in console: `ReferenceError: NuxtError is not defined at Vue.errorChanged (App.js?efe7:173) at Watcher.run (vue.runtime.esm.js?2b0e:4568) at flushSchedulerQueue…

### CASE-6448 · Safari "Invalid regular expression: invalid group specifier name" Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: <!-- ex: v2.13.0 --> v2.13.0 - node: <!-- ex: v12.14.0 --> v14.9.0 I cannot log in via Safari in spa…

### CASE-6455 · ScrollTop issue in Safari browser only
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: safari, nuxt, vue, ipad
- **Signals**: 👍0 💬7 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [2.7.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - Install a new Nuxt app with yarn create nuxt-app (no option) - Add some content in index.vue to be able to scroll - Generate a static site with yarn run generate and host it - Open the index page in Safari browser (I've tried in Mac and iPad) - Scroll down the page then reload it ### What is expected ? The scroll position should be kept after reloading the page. ### What is actually happening? The scroll position is back to the top of the page after reloading it. ### Additional comments? My tests were…

### CASE-6464 · [edge] vue2-google-maps "SyntaxError: Unexpected token <" is back
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, vue, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [[email]-25609473.c77fa47 ]([link] ) ### Reproduction link [[link]]([link]) ### Steps to reproduce upgrading from [email]-25607354.1e02195 to [email]-25609473.c77fa47 this error appeared again [link] client works but hitting a ssr route gives "SyntaxError: Unexpected token <" no changes where made to nuxt.config.js ### What is expected ? to work ### What is actually happening? "SyntaxError: Unexpected token <" ### Additional comments? plugins/vueGoogleMaps.js ` import Vue from 'vue' import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main' Vue.use(VueGoogleMaps, {…

### CASE-6468 · Cannot start project
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 2, nuxt
- **Signals**: 👍1 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [Edge 2.0.0-25599455.3a0f094]([link] 2.0.0-25599455.3a0f094) ### Reproduction link [[link]]([link]) ### Steps to reproduce node: 10.5.0 1. yarn install / npm install 2. yarn dev / npm run dev ### What is expected ? Successfully compiled. ### What is actually happening? Error occurs: ``` These dependencies were not found: * core-js/modules/es6.array.find in ./.nuxt/client.js * core-js/modules/es6.array.iterator in ./.nuxt/client.js * core-js/modules/es6.date.to-string in ./.nuxt/utils.js, ./.nuxt/client.js * core-js/modules/es6.function.name in ./.nuxt/utils.js, ./.nuxt/index.js…

### CASE-6471 · [edge] nuxt doesnt launch if only production dependencies installed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [none](none) ### Steps to reproduce yarn install --production=true yarn start It will fail with following error: ``` $ nuxt start internal/modules/cjs/loader.js:573 throw err; ^ Error: Cannot find module 'figures' at Function.Module._resolveFilename (internal/modules/cjs/loader.js:571:15) at Function.Module._load (internal/modules/cjs/loader.js:497:25) at Module.require (internal/modules/cjs/loader.js:626:17) at require (internal/modules/cjs/helpers.js:20:18) at Object.<anonymous>…

### CASE-6472 · [edge] Module build failed: TypeError: Cannot read property 'eslint' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vue, nuxt
- **Signals**: 👍6 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [edge]([link] framework].js/releases/tag/edge) ### Reproduction link [[link]]([link]) ### Steps to reproduce npm install -g vue-cli vue init nuxt-community/starter-template nuxt-test npm uninstall nuxt npm install nuxt-edge -S npm run dev ### What is expected ? No error is thrown ### What is actually happening? Following error is thrown: Module build failed: TypeError: Cannot read property 'eslint' of undefined at Object.module.exports (/node_modules/eslint-loader/index.js:148:18) You may use special comments to disable some warnings. Use // eslint-disable-next-line to ignore the…

### CASE-6489 · chrome extention
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, nuxt, webpack
- **Signals**: 👍0 💬7 · closed · labels: question/2.x
- **Excerpt**: when you build the project arose the following problems: 1) there is no possibility to change the name of the directory _nuxt (_nuxt -> сustom_dir / in extensions are not valid user names of files and directories with an underscore) 2) using the `mode: 'hash'`, incorrect references are generated, they still generated for `mode: 'history'` 3) how to use `CopyWebpackPlugin` only stage `generate`? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link]…

### CASE-6495 · View Transition API "Race Condition" with useAsyncData / useSanityQuery
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: chrome/, edge, nuxt
- **Signals**: 👍1 💬6 · open · labels: 📚 documentation/🛠️ dx
- **Excerpt**: ### Environment ### Environment Environment Nuxt Version: 4.x Nitro Version: Latest Browser: Chrome/Edge (latest with View Transition support) ### Reproduction I have created a reproduction, but I've removed my sanity API tokens which I cant make public. [link] ### Describe the bug ## Description When viewTransition is enabled, there is a synchronization gap between route change and DOM hydration for asynchronous data. Even when using top-level await with useAsyncData (or useSanityQuery), the View Transition API is unable to match view-transition-named objects in the DOM between each view. ##…

### CASE-6496 · type declarations not generated in `shared-imports.d.ts`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/145, safari/537, linux, windows, nuxt, webkit
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt project info: | | | | -------------------- | --------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v22.22.0` | | **nuxt/cli version** | `3.34.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.4.2` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config**…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6402 · __vite_ssr_import_2__.createMemoryHistory is not a function on RC.9 RC.10
- **Principles**: P-F4 · **Env**: opera, vite, nuxt, webpack, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/bundler:vite
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v18.9.0` - Nuxt Version: `2.15.8` - Nitro Version: `0.5.3` - Package Manager: `[email]` - Builder: `webpack` - User Config: `ssr`, `components`, `nitro`, `css`, `modules`, `runtimeConfig`, `googleAnalytics`, `vueuse`, `windicss` - Runtime Modules: `[email]`, `[email]`, `[email]`, `@user/[email]-27719579.87dcdf2`, `@user/[email]` - Build Modules: `-` - Device: Mac M1 - Homebrew 3.6.1 ------------------------------ ### Reproduction - git clone [link] - yarn install - yarn dev ### Describe the bug no…

### CASE-6403 · Error occurs when enabling https on dev in Nuxt3
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍3 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `telemetry`, `build`, `modules`, `components`, `vueuse`, `runtimeConfig`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction after update project to v3.0.0-rc.9 problem inited ### Describe the bug I use composable useFetch ``` [nuxt] [request error] [unhandled] [500] fetch failed () at…

### CASE-6404 · Cloudflare worker build error
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.10-27711996.0ab29f6` - Nitro Version: `0.5.2-27709289.11cc5cd` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `plugins`, `build`, `modules`, `experimental`, `components`, `vite`, `intlify`, `vueuse`, `windicss`, `content` - Runtime Modules: `unplugin-icons/nuxt`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction - ###…

### CASE-6407 · Error [ERR_MODULE_NOT_FOUND] of "dayjs"
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.8 20:19:14 RootDir: /Users/user/nuxt-app 20:19:20 Nuxt project info: 20:19:20 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `build`, `meta`, `alias`, `plugins`, `modules`, `css`, `routes`, `vite`, `ssr` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ 👉 Report an issue: [link] 20:19:20 👉 Suggest an improvement: [link] 👉 Read documentation: [link] ### Reproduction [link] ### Describe the…

### CASE-6409 · useState not as SSR-friendly as expected?
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.8 21:46:49 RootDir: /Users/morpheu5/web/mre 21:46:50 Nuxt project info: 21:46:50 ------------------------------ - Operating System: `Darwin` - Node Version: `v18.3.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `target`, `ssr`, `generate` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug `useState` produces a client-side hydration mismatch warning when used to exchange data between children and parent – I can't exclude other cases but this is…

### CASE-6411 · Nuxt-rc.8 prefetches all pages (ssr: false)
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍7 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.7.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction You can clone [link] and run ``` nuxt build ``` to see the result (.output/public/index.html) with Nuxt-rc.6. After that update to Nuxt-rc.8 and rebuild again. You should see the massive increase. ### Describe the bug I did a few tests with a lot of pages. In Nuxt-rc.6, after building the app, the .output/public/index.html had only the entry.xxx.mjs as script and a…

### CASE-6413 · CF Workers: Hydration completed but contains mismatches. `entry.mjs`
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/nitro
- **Excerpt**: ### Environment Cloudflare Workers / Miniflare Local: - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `nitro`, `vite` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] `npm run build && npm run preview` ### Describe the bug When you use the default `app.vue` that comes when installing Nuxt, the page does not return any errors. **app.vue** ```html <template> <NuxtWelcome /> </template> ``` When you use this `app.vue` and navigate to any route you get the hydration error.…

### CASE-6414 · The requested page still loads when making a redirection via route middleware
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: ✨ enhancement/3.x/workaround available/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `components`, `meta`, `alias`, `buildModules`, `vue`, `css`, `modules`, `postcss`, `runtimeConfig`, `vite` - Runtime Modules: `@user/[email]` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction [link] ### Describe the bug When a middleware which makes a redirection to an external URL executes, the requested page still loads after the middleware, which then triggers undesired behaviours as, for example, the…

### CASE-6416 · code splitting on build is not working
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, webpack
- **Signals**: 👍2 💬7 · closed · labels: 3.x/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `ssr`, `modern`, `build`, `css`, `buildModules`, `runtimeConfig`, `vite`, `builder`, `webpack` - Runtime Modules: `@user/[email]-27628766.3629b9a`, `~/modules/home/index.ts`, `~/modules/product/index.ts`, `~/modules/catalog/index.ts`, `~/modules/cart/index.ts`, `~/modules/common/index.ts`, `~/modules/productRowSlider/index.ts`, `~/modules/productCard/index.ts`, `~/modules/header/index.ts`, `~/modules/shop/index.ts`,…

### CASE-6417 · [nuxt] [request error] __vite_ssr_import_1__ is not defined [ref]
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, desktop
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ``` Nuxt CLI v3.0.0-rc.6 21:50:58 RootDir: C:\Users\dell\Desktop\NEWPROJS\Barreau_App_Web 21:51:07 Nuxt project info: 21:51:07 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `head`, `css`, `build`, `vite` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ 👉 Report an issue: [link] 21:51:07 👉 Suggest an improvement: [link] 👉 Read documentation: [link] ``` ### Reproduction Can't provide a repository cause it's a private…

### CASE-6418 · useHead causes flicker when hydrating SSR-rendered page
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍1 💬7 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `css` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction Use `useHead` to assign some CSS classes to body, and then visit the page: ```vue <script setup lang="ts"> useHead({ bodyAttrs: { class: 'accent-yellow dark-zinc dark' } }); </script> ``` [link] ### Describe the bug SSR correctly generates classes on body, then on hydration they are removed and then added again, resulting in a very noticeable…

### CASE-6419 · css files are being loaded as script module in dev with `ssr: false` (webpack)
- **Principles**: P-F4 · **Env**: opera, linux, webpack, nuxt
- **Signals**: 👍2 💬7 · closed · labels: 3.x/🐛 bug/bundler:webpack/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `webpack` - User Config: `builder`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction - `npx nuxi init nuxt-app` - `cd nuxt-app` - `yarn add -D @user/webpack-builder` - add to `nuxt.config.js`: `builder: 'webpack'` / `ssr: false` - `yarn dev` ### Describe the bug ``` Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of…

### CASE-6420 · FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
- **Principles**: P-F4 · **Env**: opera, ubuntu, linux, nuxt, vite, typescript, vue
- **Signals**: 👍4 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment RootDir: /home/ubuntu/nuxt-app 15:29:06 Nuxt project info: 15:29:06 ------------------------------ - Operating System: `Linux` - Node Version: `v18.1.0` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `css`, `router`, `build`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction nuxt.config.ts ``` import { defineNuxtConfig } from "nuxt"; // [link] export default defineNuxtConfig({ typescript: { strict: true, }, css: ["vuetify/lib/styles/main.sass"], router: { prefetchLinks:…

### CASE-6423 · Aborted?
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.3 16:50:00 RootDir: /src/frontend/nuxt3-all-in-one 16:50:01 Nuxt project info: 16:50:01 ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias`, `ssr`, `buildModules`, `vite`, `meta` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction migrate from `"nuxt3": "3.0.0-27376999.6abf75d` to ` "nuxt": "3.0.0-rc.3","@user/vite-builder": "3.0.0-rc.3",` ### Describe the bug WARN…

### CASE-6424 · Could not load .nuxt/dist/server/server.mjs when using ssr false and webpack
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, webpack
- **Signals**: 👍6 💬7 · closed · labels: 3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.18.2` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `webpack` - User Config: `builder`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction - `npx nuxi init nuxt-app` - `cd nuxt-app` - `yarn add -D @user/webpack-builder` - add to **nuxt.config.js**: `builder: 'webpack'` and `ssr: false` - `yarn build` ### Describe the bug ``` yarn run v1.22.19 $ nuxt build Nuxt CLI v3.0.0-rc.3 15:58:12 ✔ Generated public .output/public nitro…

### CASE-6426 · nuxt3-rc generate and url is not relative Url
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.0-27508091.78fcbcf 10:48:08 RootDir: /Users/mac/.webcode/gin-nuxt/web 10:48:11 Nuxt project info: 10:48:11 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.0-27508091.78fcbcf` - Package Manager: `[email]` - Builder: `vite` - User Config: `meta`, `ssr`, `buildModules`, `css`, `components`, `publicRuntimeConfig`, `experimental`, `vite`, `build` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction all ### Describe the bug ``` <head > <link rel="stylesheet"…

### CASE-6427 · Cannot read properties of undefined (reading 'getSSRProps')
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27419629.87eb7d0 RootDir: D:\develop\nuxt3-app Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-27419629.87eb7d0` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `css`, `nitro`, `vue` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction I have the following repo/branch: [link] 1. Clone it using `git clone --branch test/nuxt [link] 2. Install the dependencies using `npm install` 3. Rename `config.example.json` to `config.json`…

### CASE-6429 · nested node_modules are always inlined rather than externalised
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/bundler:vite/upstream/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27398533.8edd481` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `ssr`, `buildModules` - Runtime Modules: `-` - Build Modules: `[email]` ------------------------------ ### Reproduction Clone repo: [link] ``` yarn install yarn build yarn start ``` ### Describe the bug Production build inlines external lib in server chunk '.output/server/chunks/app/server.mjs' and breaks build. This happens if you have a nuxt3 module as a node module (in this reproduction…

### CASE-6431 · "useRouter" and "useRoute" not exported
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27307420.6a25d3e` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `meta`, `buildModules`, `ssr`, `srcDir`, `css`, `publicRuntimeConfig` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction As the title says, `useRouter` and `useRoute` can't be imported ```js import { useRoute } from '#app'; // useRoute is not exported from the 'app' ``` ### Describe the bug I am trying to import `useRoute` as stated…

### CASE-6433 · SSR Error when adding plugin
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27258467.4e424d0` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `ssr`, `plugins` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug Hello, I've started a new project with Nuxt 3 and was trying to import the codemirror library as a plugin but I can't get it to work. Is this a bug or am I doing something wrong? The error is as follows: [vite] Internal server error: Failed to resolve import "~plugins/codemirror.js" from…

### CASE-6436 · .graphql, .gql import error
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍7 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27245461.ffb05fc` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `ssr`, `buildModules`, `css`, `vite` - Runtime Modules: `-` - Build Modules: `[email]` ------------------------------ ### Describe the bug Rollup does not support graphql files. ```sh ERROR Rollup error: Error: Unexpected token (Note that you need plugins to import files that are not JavaScript) ``` ### Reproduction Import graphql file like: `import Product from './graphs/product.graphql';` ###…

### CASE-6443 · Multiline style string unescaped parsing
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍3 💬7 · closed · labels: 2.x/upstream
- **Excerpt**: ### Versions - nuxt: v2.14.12 - node: v12.19.0 ### Reproduction Repository [link] <details open> <summary>Additional Details</summary> <br> minimal nuxt installation </details> ### Steps to reproduce Index page contains 3 nested divs with the same multiline style attribute. On ssr load, inspect the nested divs and notice how only the parent div's style has been parsed correctly, while the nested children's style is broken by the \n character. Use the links to navigate back and forth between index page and its copy, and you will notice that style is parsed correctly when client side rendered.…

### CASE-6453 · renderState() not work
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬7 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.8.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce npm install npm run dev check the source code of the page, you can find that there is no state ### What is expected ? when i use renderState() in my custom template, i wish the state is injected to the template ### What is actually happening? there is no state info in the html ### Additional comments? the code in vue-server-renderer/build.dev.js : ``` TemplateRenderer.prototype.renderState = function renderState (context, options) { console.log('state:', context.state); // undefined…

### CASE-6460 · generate with spa mode generates html with no static content
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.3.4]([link]) ### Reproduction link [generate --spa](generate --spa) ### Steps to reproduce Run ```generate --spa``` to produce static html files ### What is expected ? html files with static pre rendered content for seo, bots, etc... ### What is actually happening? html files generated only contains the minimal basic of javascript files. ### Additional comments? This is a little confusing to me. And it seems that this is not fully documented. I've seen [ref] [ref]. But I'm not really sure what to make of this. Apparently you need the ssr to generate the html files with static…

### CASE-6465 · Error during $style injection on cached components
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍3 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Reproduction link [[link]]([link]) ### Steps to reproduce - `yarn install` - `yarn run build` - `yarn run start` - Open `[link] - Refresh the page The error is also reproducible in development mode with `yarn run dev`. ### What is expected ? The app should render properly. ### What is actually happening? ``` × error TypeError: Cannot set property '$style' of undefined at injectStyles (components/CachedComponent.vue:8:0) at hook (node_modules/vue-loader/lib/runtime/componentNormalizer.js:53:0) at C:\[...]\nuxt-cached-component-css-modules\node_modules\vue-server-renderer\build.js:7467:15…

### CASE-6467 · genearted error with nested component
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce ![bug.png]([link]) ### What is expected ? ![shouldbe.png]([link]) ### What is actually happening? when genarate (with or without ---spa),missing nested componet ### Additional comments? only when genarated file in `dist` ,ssr is fine <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c7695">#c7695</a>)</em></sub></div>

### CASE-6473 · linkActiveClass doesn't work with Non-ASCII URL in SSR
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce npm run dev ### What is expected ? Current link will be green. ### What is actually happening? linkActiveClass doesn't work with Non-ASCII URL in SSR. When you on /测试，refresh the browser, linkActiveClass has gone. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c6876">#c6876</a>)</em></sub></div>

### CASE-6475 · page fetch and action/dispatch redirect not working.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I'm trying to redirect inside of a Vuex action. 1) It initially renders the page it is going to redirect to, but the URL does not change. 2) It ends up rendering the original page that it was redirecting from. 3) It throws a hydration error: ``` Parent: <div class="form-container" data-v-58d7984c=""> vue.runtime.esm.js:5940 Mismatching childNodes vs. VNodes: NodeList [ form ] Array [ {…} ] vue.runtime.esm.js:5941 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level…

### CASE-6476 · noscript Tag
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: If i add a noscript tag i get a warning. In the compiled version i get a js error message. "The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render." I have tried to add this to a plugin file, but it do not work. ` Vue.config.ignoredElements.push('noscript'); ` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community…

### CASE-6480 · 404 error when using slug instead of ID
- **Principles**: P-F4 · **Env**: ios
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I'm grabbing blog posts from the Contentful API. I'd like to use a slug in my URL instead of an ID but can't seem to get it working. It works fine when just using an ID; however, when I try and use the slug and pass in the ID as a param, it fails (404). 🆗 working => `myurl.com/post/12345` 🆗 working (better) => `myurl.com/post/my-awesome-slug?id=12345` 🚫 not working (ideal) => `myurl.com/post/my-awesome-slug` Expected results - axios fetches post via provided ID in params - post renders - on refresh, post renders - post content is in page source (server rendered) Actual results - post…

### CASE-6484 · iview tree is not matching server-rendered content
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I did exactly as you have in your docs for plugins. i have a file named iview.js and inside of there i have. Im using nuxt/express template ` import iView from 'iview' import Vue from 'vue' import 'iview/dist/styles/iview.css' Vue.use(iView) ` just like u recommend. Next i add that plugin in nuxt.config.js ` plugins: [ // ssr: false to only include it on client-side { src: '~plugins/iview.js', ssr: false } ] ` but it keeps giving me this error > The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example…

### CASE-6487 · chunks filename hash
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍1 💬7 · closed · labels: 2.x
- **Excerpt**: Hello. We have recently encounter a serious problem in production. When new app release is published users will loose layout after hydration. ![cache]([link]) Here is headers response from server. (Application is being directly rendered by nuxt and is under a simply nginx reverse proxy backend without any caching) ```bash $ curl -I [link] HTTP/2 200 server: nginx date: Mon, 17 Apr 2017 11:22:17 GMT content-type: application/javascript content-length: 2990 vary: Accept-Encoding accept-ranges: bytes last-modified: Mon, 17 Apr 2017 10:49:05 GMT etag: W/"bae-15b7b87bce8" vary: Accept-Encoding…

### CASE-6488 · 0.10.0 Regression - Can no longer move build artifacts which breaks deployment
- **Principles**: P-F4 · **Env**: nuxt, vue, webpack
- **Signals**: 👍6 💬7 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: I am deploying to a service that works by running `nuxt build` in a `/tmp` folder and then moves the project to a new location for hosting. This previously worked when using `0.9.X`, but no longer works with Nuxt `0.10.X`. This broke because Nuxt started using `vue-ssr-webpack-plugin`, which by default [sets basedir]([link]) to an absolute path generated at build time. This path is no longer valid at runtime since my deployment system will move the project. This property can be overridden at runtime using [basedir option]([link]), but [Nuxt does not provide a hook into these options]([link]…

### CASE-6491 · rspack/webpack builder: dev SSR fails on Windows with ERR_UNSUPPORTED_ESM_URL_SCHEME (externals emitted as raw absolute paths)
- **Principles**: P-F4 · **Env**: opera, windows, webpack, nuxt
- **Signals**: 👍1 💬6 · open · labels: bundler:webpack/🔨 p3-minor
- **Excerpt**: # Environment - Operating System: Windows 11 Pro (10.0.26100) - Node Version: v24.15.0 - Nuxt Version: 4.5.2 - Nitro Version: 2.13.4 - Package Manager: [email] - Builder: @user/rspack-builder 4.5.2 (Rspack 2.1.9) - User Config: `builder: 'rspack'` # Reproduction Windows-only bug, so StackBlitz can't reproduce it. Minimal steps on any Windows machine: ```bash npm create nuxt@user test-rspack # accept defaults cd test-rspack pnpm add -D @user/rspack-builder ``` ```ts // nuxt.config.ts export default defineNuxtConfig({ compatibilityDate: '2025-07-15', builder: 'rspack', }) ``` ```bash pnpm dev #…

### CASE-6494 · `window.location.hash` and `route.hash` both empty in `onMounted` during SSR hydration
- **Principles**: P-F4 · **Env**: opera, macos, nuxt
- **Signals**: 👍1 💬6 · closed · labels: workaround available/pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment | | | | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `macOS 25.3.0` | | **CPU** | `Apple M2 Pro (12 cores)` | | **Node.js version** | `v22.22.2` | | **nuxt/cli version** | `3.35.1` | | **Package manager** | `[email]` | | **Nuxt version** | `3.21.4` | | **Nitro version** | `2.13.4` | | **Builder** |…

### CASE-6497 · server cannot obtain the parameters of router.query and router.fullpath.
- **Principles**: P-F4 · **Env**: opera, nuxt, typescript, vite, vue
- **Signals**: 👍1 💬6 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.19.6 - Nuxt Version: 4.0.3 - CLI Version: 3.27.0 - Nitro Version: 2.12.4 - Package Manager: [email] - Builder: - - User Config: ssr, nitro, modules, elementPlus, i18n, shadcn, imports, css, runtimeConfig, app, typescript, experimental, vite, vueuse, postcss, devtools, build, features, compatibilityDate - Runtime Modules: @user/[email], pinia-plugin-persistedstate/[email], @user/[email], [email], [email], [email], [email], @user/[email]-beta.0, unplugin-icons/[email], @user/[email], @user/[email] - Build Modules: -…

### CASE-6498 · Vite Rolldown: Nuxt server build stalls / never completes with high volume of SFC <style> blocks
- **Principles**: P-F4 · **Env**: opera, macos, vite, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment | | | | -------------------- | ----------------------------------------------- | | **Operating system** | `macOS 25.3.0` | | **CPU** | `Apple M2 Max (12 cores)` | | **Node.js version** | `v24.13.0` | | **nuxt/cli version** | `3.33.1` | | **Package manager** | `[email]` | | **Nuxt version** | `4.3.1` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]-beta.16` | | **Config** | `app`, `compatibilityDate`, `devtools`, `ssr` | | **Modules** | `-` | ### Reproduction Have a minimal Nuxt app here that reproduces the problem: [link] ☝️ Clone, `yarn install`, `yarn build`. With…

### CASE-6499 · Page breaks when navigating from a non-SSR page to a prerendered page
- **Principles**: P-F4 · **Env**: opera, macos, nuxt
- **Signals**: 👍6 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment | | | | -------------------- | --------------------- | | **Operating system** | `macOS 25.2.0` | | **CPU** | `Apple M4 (10 cores)` | | **Node.js version** | `v24.13.0` | | **nuxt/cli version** | `3.32.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.3.0` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** | `-` | | **Modules** | `-` | ### Reproduction [link] ### Describe the bug When using `routeRules` in Nuxt Config, if you set `ssr: false` for route `A` and `prerender: true` for route `B`, build the project and open the website…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6405 · allow modifying public assets after build (or in hook)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬7 · closed · labels: ✨ enhancement/good first issue/3.x/nitro
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `ssr`, `postcss`, `generate`, `nitro`, `buildModules`, `css`, `meta`, `modules`, `sitemap`, `image`, `unocss`, `publicRuntimeConfig`, `vite`, `nuxtTypedRouter`, `plugins` - Runtime Modules: `@user/[email]`, `@user/[email]-27703611.03cc029`, `[email]`, `@user/[email]` - Build Modules: `@user/[email]`, `@user/[email]`, `()` ### Reproduction I have purgecss running from CLI after building and app. Like…

### CASE-6406 · 3.0.0-rc.9 AWS Lambda SSR is broken with No match found for location with path "/images/icons/gear.png"
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt project info: 13:45:19 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `nitro`, `app`, `server`, `modules`, `css`, `build` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction <img width="1309" alt="image" src="[link]> ### Describe the bug My application is hosted as SSR with aws-lambda and worked fine with the rc-8 version. I upgraded today to rc-9 and it works locally…

### CASE-6408 · nuxt3.rc-8 not suppport element-plus
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment any enviroment ### Reproduction ![image]([link]) ![image]([link]) ### Describe the bug When nuxt3.rc-7 and nuxt3.rc-8 are upgraded to vite3, element plus cannot be used normally. Element plus itself supports vite3. Is there a special configuration on nuxt3 that causes the error? ### Additional context _No response_ ### Logs _No response_

### CASE-6410 · [rc.8] NuxtPage with keepalive on page + conditional root element results in weird errors
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v17.4.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `app` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Open [[link]]([link]) and click on "sub 123". After the page is displayed click on "index" => you will see the following error in the console and a corrupted page. Navigating now doesn't work anymore. ![image]([link]) ### Describe the bug The problem occurs when the following conditions are true: - NuxtPage in app.vue - definePageMeta with keepalive in /index.vue…

### CASE-6421 · [ERROR] No matching export in "node_modules/vue/dist/vue.runtime.esm-bundler.js" for import "default"
- **Principles**: P-A3, P-H1 · **Env**: vue, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment node: 16.15.1 (I've tried 16.14.2) npm: 8.11.0 Nuxt version: "nuxt": "3.0.0-rc.3", "@user/composition-api": "^0.32.0", ### Reproduction Here is my minimal demo: [link] All my dependencies on package.json Notice on Button.vue component and app.vue file. My project just have only two these files but I'm getting error `503 Server Unavailable` <img width="797" alt="Screen Shot 2022-06-14 at 07 42 28" src="[link]> ### Describe the bug ``` ✘ [ERROR] No matching export in "node_modules/vue/dist/vue.runtime.esm-bundler.js" for import "default"…

### CASE-6430 · exports is not defined and m.default is not a function
- **Principles**: P-A3, P-H1 · **Env**: macos, nuxt
- **Signals**: 👍6 💬7 · closed · labels: 3.x/🐛 bug/bundler:vite
- **Excerpt**: ### Environment System: macOS 12.1 nuxt3: 3.0.0-27365509.a2e2e04 yarn: 3.1.1 node: 16.13.0 ### Reproduction [link] ### Describe the bug getting error as shown below: <img width="1018" alt="Screen Shot 2022-01-12 at 08 30 04" src="[link]> ### Additional context _No response_ ### Logs _No response_

### CASE-6432 · error TS5083: Cannot read file 'project/.nuxt/tsconfig.json'.
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment github actions ### Reproduction - create Nuxt project with `nuxi` and `vite` - install test framework (form me it is `jest`) - rune `yarn test` before `yarn dev` ### Describe the bug It seems like i can't run a test before I run the initial dev setup `yarn dev`, because `ts-config.json` extends from `.nuxt/ts-config.json` ![image]([link]) ### Additional context _No response_ ### Logs ```shell yarn run v1.22.17 $ jest FAIL __test__/components/atom/h-switch.test.ts ● Test suite failed to run error TS5083: Cannot read file '/home/runner/work/project/.nuxt/tsconfig.json'. message…

### CASE-6434 · how to build with .mjs/.js/.css hosting on cdn?
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27252573.ad7e755 19:54:26 RootDir: /Users/lookis/projects/nuxt3-app 19:54:27 Nuxt project info: 19:54:27 ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27252573.ad7e755` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `modules`, `build`, `proxy` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Describe the bug build.publicPath only affect image file, all css/.mjs file still use relativePath "/_nuxt/" ### Reproduction [link] yarn build yarn start…

### CASE-6437 · useFetch infinite loading on non-existing URL
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, webpack
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27235451.ece0e01 18:14:05 RootDir: /home/centos/nuxt3-killed 18:14:05 Nuxt project info: 18:14:06 ------------------------------ - Operating System: `Linux` - Node Version: `v14.17.6` - Nuxt Version: `3-3.0.0-27235451.ece0e01` - Package Manager: `npm` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug web browser stuck in infinite loading ![image]([link]) htop ![image]([link]) btw, if I don't specify base url on useFetch, what's the full url is calling? No doc about this ###…

### CASE-6441 · Option to disable build progress bars in CLI even when TTY is enabled
- **Principles**: P-A3, P-H1 · **Env**: nuxt, webpack
- **Signals**: 👍0 💬7 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 --> ### Is your feature request related to a problem? Please describe. I use Docker and wanted to enable TTY so I could see colours in Docker Compose logs. However, enabling TTY also renders the webpack progress bars during builds. The bars work but have some rendering issues, most likely due to Docker Compose prefixing each log line with with the container name. For example, the Client and Server bars render twice for each update. ![image]([link]) ### Describe the solution you'd like A top level option, or documentation,…

### CASE-6442 · encoded url causing error when accessing via static mode
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: 2.14.12 - node: 15.6.0 ### Reproduction [link] This is how the generated paths look like ![image]([link])…

### CASE-6449 · ChunkLoadError: Loading chunk {n} failed.
- **Principles**: P-A3, P-H1 · **Env**: ios, nuxt
- **Signals**: 👍0 💬7 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Versions - nuxt: v2.13.3 - node: v11.12.0 ### Reproduction I receive the following errors after building full-static spa page (nuxt build && nuxt export): ``` Failed to load resource: the server responded with a status of 404 (Not Found) [link] ``` ``` ChunkLoadError: Loading chunk 1 failed. (error: [link]) ``` ``nuxt dev`` works fine, the whole site works without problems. ``` mode: 'spa', target: 'static', modules: [ '@user/nuxt-optimized-images', '@user/axios', '@user/eslint-module', '@user/robots', '@user/redirect-module', 'qonfucius-nuxt-fontawesome', '@user/content',…

### CASE-6450 · since [email] some modern files are missing?
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍5 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: Since nuxt 2.13.3 it seems our app is totally broken in modern mode. e.g. [link] <-- see the commons/ followed by a dot immediately. Browser console log: ![image]([link]) Nuxt 2.13.2 is NOT affected by this bug as far as I can tell, as the only change from yesterday to today is the nuxt version. Maybe it's related to [ref] ? In another app I use a custom "filename" option for the assets, It seems this one is not affecetd by this bug, but still verifying it. ```js filenames: { app: ({ isModern, isDev }) => `${!isModern ? 'legacy-' : ''}${!isDev ? '[contenthash]' : '[name]'}-app.js`, chunk: ({…

### CASE-6457 · v-cloak doesn't work in nuxt
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍1 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) [[link]]([link]) ### Steps to reproduce in layouts/default.vue, I try to use v-cloak to show loading spinner before app is ready. v-cloak works well in vue app, but it doesn't work in nuxt app. ```html <template> <div v-cloak> <nuxt /> </div> </template> <style> [v-cloak]>* { display: none !important; } [v-cloak]::before { content: " "; display: block !important; width: 16px; height: 16px; background-image:…

### CASE-6463 · csp: too many SHA256 hashes
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.4]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce We're seeing way too many SHA256 hashes in production. The SSR HTML only contains a single `<script>` tag, but 39 hashes are cramped into the header. ```js { render: { csp: { policies: { 'default-src': ['https:'], 'img-src': ['https:', '*.google-analytics.com'], 'style-src': ["'self'", "'unsafe-inline'", process.env.APP_HOST, '*.typekit.net', 'cdnjs.cloudflare.com', 'fonts.googleapis.com'], 'script-src': ["'self'", "'unsafe-inline'", process.env.APP_HOST, 'sentry.io', '*.sentry-cdn.com',…

### CASE-6482 · Alias in style attribute doesn't work rc3
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: ``` // Doesn't work style="background-image: url('~static/image.png')" // Works <img src="~static/image.png" /> ``` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1146">#c1146</a>)</em></sub></div>

### CASE-6483 · Can't execute $emit tag <a> inside <nuxt-link>
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I try $emit from child to parent it just work fine. but when i try @user inside `<nuxt-link>` to execute $emit function it not work at all. I don't know if i do something wrong? <img width="466" alt="screen shot 2560-07-27 at 7 28 18 pm" src="[link]> I also try to bind @user on `<nuxt-link>` and it still not work

### CASE-6485 · Assets path resolution not working for tags different than <img>
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I created a new Nuxt project and put files named `campus.jpg` and `campus.mp4` inside the assets folder. Then in my `index.vue` I just wrote: ``` <template> <div> <video autoplay muted loop poster="~assets/campus.jpg"> <source src="~assets/campus.webm" type="video/webm"> <source src="~assets/campus.mp4" type="video/mp4"> </video> </div> </template> ``` The generated code stays with the same path (i.e. `[link]), so just 404 happens. The same path with `<img src="~assets/campus.jpg">` works as expected. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available…

### CASE-6490 · Error refreshing page after nuxt build
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I run `node v7.1` and `yarn 0.18.1` and I installed nuxt through the template running the following command: `$ vue init nuxt/starter <project-name>` and when inside I ran `yarn` to install the dependencies. However, when I do `yarn dev` and access the "about page" and refresh, I get an error that says the following: `Vue.js error: Error: render function or template not defined in component: anonymous` [here is an image of the error]([link]) I did not edit any files or touch any configuration. Is there any reason why this is happening? <!--cmty--><!--cmty_prevent_hook--> <div…

### CASE-6500 · [Docs] 'layers/' directory is not documented in the directory structure docs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: 📚 documentation/good first issue
- **Excerpt**: ### Environment Documentation Issue ### Reproduction ## Screenshot <img width="292" height="898" alt="Image" src="[link] /> ### Describe the bug I noticed the `layers/` directory is not documented in the [directory structure section of the docs]([link]). Is there a particular reason for that (like maybe to keep it simple)? ### Additional context _No response_ ### Logs ```shell-script ```

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-6415 · useLazyFetch with useRoute query not work
- **Principles**: P-A2, P-A4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment useLazyFetch ### Reproduction useLazyFetch ### Describe the bug there is a Pagination component ``` <template> <div class="tw-flex tw-flex-wrap tw-justify-between"> <div class="tw-flex tw-items-center"> <div class="tw-flex"> <nuxt-link v-for="(page, index) in pageCount" :key="index" :class="[activePageNumber == page ? 'tw-bg-default-600 tw-text-white': 'tw-bg-transparent']" :to="`${link}?page=${page}`" class="tw-py-2 tw-px-3 tw-mr-2 tw-rounded tw-cursor-pointer tw-inline-block tw-h-8 tw-text-center" >{{ page }} </nuxt-link> </div> </div> </div> </template> <script lang="ts"…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6425 · sync route state smartly with suspended route
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: ✨ enhancement/3.x/pages
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.1-27510703.46ecbc5` - Package Manager: `[email]` - Builder: `vite` - User Config: `pageTransition`, `runtimeConfig`, `css`, `build`, `postcss`, `vite` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Computed route parameters update before navigation has finished in combination with `useAsyncData`. E.g. `/path/with/[slug]` uses the slug to fetch data from the backend: ``` const slug = computed(() => route.params.slug); const { data, refresh } =…

### CASE-6428 · LayoutTransition inconsistent behaviour
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment See Stackblitz ### Reproduction [link] ### Describe the bug I was using the new definePageMeta function and tried out the transition properties and noticed an unexpected behaviour when transition between layouts. When transitioning from layout a to layout b, the b-leave-transition is applied and then the b-enter-transition. Imo it should be from a-leave-transition to b-enter-transition. When transitioning between pages within the same layout the transition works as expected ( also in the example) ### Additional context _No response_ ### Logs _No response_

### CASE-6435 · `swiper` Missing "./vue/swiper-vue.js" export
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, windows, vue, nuxt, vite, desktop
- **Signals**: 👍2 💬7 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27251455.110b2b2 07:15:02 RootDir: C:\Users\Andy\Desktop\test\lombakativ 07:15:03 Nuxt project info: 07:15:03 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.11.0` - Nuxt Version: `3.0.0-27251455.110b2b2` - Package Manager: `npm` - Bundler: `Vite` - User Config: `vite`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug fresh install , problem with only run dev... ``` WARN [SSR] Error transforming ./node_modules/swiper/vue/swiper-vue.js: Error: Missing…

### CASE-6445 · Errors in production
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Versions - nuxt: ^2.14.6 - node: v14.15.1 ### Reproduction might be related to this as the stack trace is [ref] ``` 6383e8d.js:2 TypeError: Cannot read property '_transitionClasses' of undefined at Array.Er (6383e8d.js:2) at j (6383e8d.js:2) at 6383e8d.js:2 at j (6383e8d.js:2) at f.__patch__ (6383e8d.js:2) at f.t._update (6383e8d.js:2) at f.r (6383e8d.js:2) at _n.get (6383e8d.js:2) at _n.run (6383e8d.js:2) at gn (6383e8d.js:2) te @ 6383e8d.js:2 Zt @ 6383e8d.js:2 Yt @ 6383e8d.js:2 (anonymous) @ 6383e8d.js:2 ie @ 6383e8d.js:2 Promise.then (async) ee @ 6383e8d.js:2 ue @ 6383e8d.js:2…

### CASE-6452 · Javascript leave transition hook not showing tween animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.9.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Click on the link to go to the about page, and go back to the index page. The reproduction link is serverd on netlify production mode, ### What is expected ? Leave transition must be executed and showed ### What is actually happening? Leave transitions is not showed , only the enter transitions ### Additional comments? Also i make a code sandbox where is the code and is deployed to netlify (The reproduction link) [link] <!--cmty--> <div align="right"><sub><em>This bug report is available on <a…

### CASE-6454 · Page transition hooks execution scope is "getting lost"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: question/pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce In any of the page transition object hooks (enter, leave) try to access the page component. It is impossible, scope is "lost" or undefined. ### What is expected ? `this` to point the page component instance ### What is actually happening? `this` is undefined or other unknown ### Additional comments? This issue is kind of a renewal of: [link] framework].js[ref] which was closed without the answer. I ran into the issue when trying to make JS driven, animated page cover/reveal component. I wanted to…

### CASE-6462 · Clicking nuxt-link within transition-group triggers page loading error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍2 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.4]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create list of `<nuxt-link>` elements wrapped within `<transition-group>` 2. Click any of the links to navigate to another page ### What is expected ? For target page to load ### What is actually happening? Page loading error is thrown ### Additional comments? Error (`Cannot read property 'length' of undefined`) triggers within TransitionGroup component, in `updated` life cycle. ```js updated: function updated () { var children = this.prevChildren; var moveClass = this.moveClass || ((this.name ||…

### CASE-6469 · transition event no call
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link]) ### Reproduction link [[link] link]([link] link) ### Steps to reproduce transition event no call in the layouts ### What is expected ? call event ### What is actually happening? this <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c7527">#c7527</a>)</em></sub></div>

### CASE-6477 · Using data from $store cause glitch page transition on leave
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: If I use data from Vuex, for example ``` {{ $store.state.error }} ``` And while having Page transition, let's say `300ms`, then data in that element changes **before** page transition finished. How to wait until page leave transition fired? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c2097">#c2097</a>)</em></sub></div>

### CASE-6492 · View transition started while the previous one is still animating never resolves — the old transition's cleanup wipes the new one's handlers
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: chromium, nuxt
- **Signals**: 👍1 💬6 · open · labels: pending triage/possible bot
- **Excerpt**: ### Environment - Nuxt 4.5.0 / 4.5.1 (plugin code identical), `experimental.viewTransition: true` - Chromium (any version with the View Transitions API) ### Reproduction Two ordinary pages, then navigate again *while the first transition is still animating* (the default group animation runs ~0.25s; ours runs 0.4s, which makes this trivial to hit by clicking through the app at normal speed): ```ts // any component const router = useRouter() async function repro() { await router.push("/a") setTimeout(() => router.back(), 150) // < animation duration } ``` Instrumenting `startViewTransition`…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6438 · Vite: SCSS Styles doesn't preload in dev
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/bundler:vite
- **Excerpt**: ### Describe the bug and expected behavior <!-- A clear and concise description of what the bug is. --> When I use SCSS, styles doesn't preload. You can see it in [codeSanbox]([link]) The same problem appears in my local environment. ### Steps to reproduce Steps to reproduce the behavior: 1. Add node-sass, sass and sass-loader packages in your package.json 2. Add some styles in <style> tag with attr lang="scss". For example: ``` <style lang="scss"> .test { font-size: 24px; font-family: sans-serif; } </style> ``` 3. Reload page 4. See, that styles doesn't preload ### Additional context I've…

### CASE-6466 · nuxt web server return truncted vendor js in prod env
- **Principles**: P-B1, P-B2, P-B3 · **Env**: nuxt, webpack
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.0.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce it's unstable. Sometimes it works but sometimes not. When it dosen't work , it reports error ": webpackJsonp is not defined". And we checked. ![manifest.png]([link]) manifest js file or vendor js file is broken. The server return a error file. Finally it will get these common js file again after the app.js filei . So it reports error "webpackJsonp is not defined". it's nothing about proxy. It seems a bug of nuxt ### What is expected ? get js file stablely ### What is actually happening? return truncated…

### CASE-6470 · Unstyled css flashes while using vue-styled-components
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - Go to the link provided [link] I use `vue-styled-components` for my styles but instead of being rendered properly, they flash the unstyled component before. Live example here: [link] Source: [link] My component looks like: ``` <template> <div> <app-title>Welcome!</app-title> <router-link to="/about">About page</router-link> </div> </template> <script> import styled from 'vue-styled-components'; const Title = styled.h1` font-size: 36px; color: red; `; export default { components: { "app-title": Title }…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6440 · nuxt start this node process，As time goes on (or the number of visits increases), more and more memory is used
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: v2.15.3 - node: v14.19.1 ### Reproduction this is my blog: [[link]]([link]) ,memory leak is happen it…

### CASE-6458 · npm run build failed [Unable to update lock within the stale threshold]
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍2 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce I am using CodeBuild for our deployment from last 2 months. But when I build today then it gets failed. I tried many times. Here is the log for the same: > nuxt build [04:17:14] [FATAL] Lock is already released at callback (node_modules/proper-lockfile/lib/lockfile.js:241:60) at Promise (node_modules/proper-lockfile/lib/adapter.js:39:9) at new Promise (<anonymous>) at args (node_modules/proper-lockfile/lib/adapter.js:30:25) at NuxtCommand.lockRelease [as _lockRelease]…

### CASE-6486 · Memory leak still exists
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: good first issue/2.x
- **Excerpt**: @user Please have a look. [link] framework].js[ref] <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c585">#c585</a>)</em></sub></div>

### CASE-6493 · Potential memory leak related to buildAssetsURL
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬6 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment Nuxt project info: | | | | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 6.17.0-23-generic` | | **CPU** | `13th Gen Intel(R) Core(TM) i7-1365U (12 cores)` | | **Node.js version** | `v22.13.1` | | **nuxt/cli version** | `3.33.1` | | **Package manager** | `[email]` | | **Nuxt version** | `3.21.1` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** | `alias`, `app`,…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6444 · config is not giving privateRuntimeConfig() with SSG
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Versions - "nuxt": "^2.14.6", - node: v12.19.0 ### Reproduction I am referring [link] to setup config (.env). All the configuration is working fine. My application is SSG (target: 'static'). When I run my application I am able to access the variables configured in publicRuntimeConfig() but privateRuntimeConfig() variables are not accessible to me. Am I doing anything wrong here? My usecase is very simple. I am building a simple personal profile website. My use case is to provide a subscribers functionality. This will talk to my Airtable API. Now I would like to safely provide my Airtable…

### CASE-6456 · Cannot access templateVars.options in templates
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.7.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce a) create a module that injects a plugin b) have plugin use lodash syntax to fill in vars from templateVars c) notice that even though templateVars.options exists, it's { } in the written template The problems seems to be with [link] framework].js/blob/dev/packages/builder/src/builder.js#L515 which merges options with the template, even if options isn't passed. ### What is expected ? My assumption is that anything you see in templateVars should be accessible in a template! ### What is actually…

### CASE-6474 · Use environment variables inside nuxt.config.js
- **Principles**: P-E1, P-E2, P-E4 · **Env**: ios, nuxt
- **Signals**: 👍3 💬7 · closed · labels: question/2.x
- **Excerpt**: Hey! ## Description I'm currently trying to set several config parameters depending on whether nuxt.js is launched in dev or production mode. To accomplish this, I haven't changed any environment variables before starting nuxt. Unfortunately, the following won't work (using the axios module) by default: ``` /* * Axios */ axios: { baseURL: process.env.NODE_ENV !== 'production' ? '[link] : '[link] }, ``` If I use `console.log(process.env.NODE_ENV)` in the `nuxt.config.js` file, it's undefined (if not set before) ## Current possible solution I only came up with one solution for it: ### Set env…

### CASE-6481 · ~/assets alias doesn't work inside @user but relatives paths works
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: Hey guys, I found a bug and I don't know if it is related with Nuxt and/or Vue-loader. Since Nuxt uses [Single File Components]([link]) I usually create a global css with all my variables and import inside the `<style></style>` tag but seems the `~/assets` or `~assets` isn't working properly. I got a error when I try to use it: ![error]([link]) BUT when I used **relative path** works fine ```css <style> /* works! */ @user "../../assets/styles/element/theme-variables.css"; /* fails */ @user "~assets/styles/element/theme-variables.css"; :root { --sidebar-padding: var(--notification-padding); }…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6451 · on refresh with nuxt child it mounts 3 times
- **Principles**: P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.9.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce filling out the form of our booking engine we add hotel and then fill our details form and submit to take us to payment page if we refresh the page it mounts the child component 3 times so then we cant pay. it only happens on page refresh ### What is expected ? fill out the form and submit ### What is actually happening? refresh the page and fill out form and submit it mounts 3 times causing it to create 3 posts to the payment and obviously that just crashes ### Additional comments? if you need access…

### CASE-6459 · feat: support yarn pnp
- **Principles**: P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍4 💬7 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### Version [v2.4.3]([link]) ### Reproduction link [[link] framework].js[ref]]([link] framework].js[ref]) ### Steps to reproduce create-nuxt-app test [select yarn as package manager] cd test rm -rf ./node_modules yarn --pnp yarn run dev ### What is expected ? I expect nuxt to run the dev server. ### What is actually happening? /bin/sh: nuxt: command not found error Command failed with exit code 127. ### Additional comments? See [link] framework].js[ref][ref] for reference. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a>…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-6461 · no scrollBehavior on route-change with nested nuxt-child
- **Principles**: P-D4, P-F1, P-F5 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.3.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce ### Steps to reproduce 1. scroll down this page: [link] 2. click on an article excerpt link 3. see the article render half way down the page [Here's the repo]([link]) Both the [`from` page]([link]) and the [`to` page]([link]) include `scrollToTop: true`. Related: [ref] cc @user ### What is expected ? scrollBehavior is triggered ### What is actually happening? scrollbehavior is not triggered (no scrollToTop) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6478 · How to recreate page on same link?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: question/2.x
- **Excerpt**: Hello, I have a fixed navigation bar and I want to recreate (without reloading the whole App) the page, if the users clicks the same link again. I tried to work with the prop key on the nuxt tag, but this doesn't work. ```html <div class="navigation-bar"> <button v-on:click.native="$router.push('/news')">News</button> </div> <nuxt :key="$route.fullPath"></nuxt> ``` See also here: [Stackoverflow]([link]) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link]…

### CASE-6479 · Proper strategy for binding a class to <html>
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: vue
- **Signals**: 👍0 💬7 · closed · labels: 2.x
- **Excerpt**: I couldn't see a way to do this even through my layout file; I want to add a class to the `<html>` tag that does `overflow: hidden !important` when a modal is present so that I can prevent scrolling in the background. I figure since I have modals in different components I would use vuex to globally communicate: my `store/index.js` ```js import Vuex from 'vuex' const store = () => new Vuex.Store({ state: { modal: false, }, mutations: { modalOn (state) { state.modal = true document.getElementsByTagName('html')[0].classList.add('is-clipped') }, modalOff (state) { state.modal = false…

