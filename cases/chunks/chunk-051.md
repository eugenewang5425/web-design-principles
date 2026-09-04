# Case Chunk 051 — Round 51

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6001 · CSS style render differ between SSR and SPA
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - `npx create-nuxt-app nuxt-demo` - add `DemoComponent.vue` to `components/` - `DemoComponent.vue` ```html <template> <div class="red-p"></div> </template> <style scoped> .red-p { background-color: red; width: 50px; height: 50px; } </style> ``` - `pages/index.vue` ```html <template> <DemoComponent class="blue-p" /> </template> <style scoped> .blue-p { background-color: blue; } <style/> ``` - open the website - the first fragment page from SSR ![fragment-ssr.png]([link]) - then SPA Hydration…

### CASE-6003 · Important bug: api will called twice !!! if i do ...
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍1 💬11 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [2.2.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce for seo , i replace some extra data , below :(it produce by server render ,but seo / client no need.) sS = '<script>window.__NUXT__' eS = ';</script><script src=' page.html = page.html.substring(0, page.html.indexOf(sS)) + page.html.substring(page.html.indexOf(eS) + eS.length-12) but , client call api again . I guess nuxt refer to the data whether server rendered . Please switch let me remove this data , for seo , because client no need this data, server have rendered . ### What is expected ? if can give…

### CASE-6006 · Add Firebase Custom Server Integration Causing Error
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: 2.x
- **Excerpt**: I tried to restructure the Nuxt project folder so that it can be deployed to Firebase, take a look this repository [Nuxt Firebase Vuetify]([link]). Everything is working fine, but a problem occurred when I use custom component from UI framework like Vuetify. The browser console displays an error like this, > The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside &lt;p&gt;, or missing . Bailing hydration and performing full client-side render. I changed `buildDir` config…

### CASE-6007 · redirect() not rendering within plugin
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬11 · closed · labels: question/2.x
- **Excerpt**: I'm using a non-ssr plugin to check something before redirecting, the only way I can get it to fire is but wrapping a Promise around the function and leaving out the resolve() within the Promise, the url updates, but the redirected page doesn't render, just the previous page... nuxt.config.js ``` plugins: [ { src: '~/plugins/auth', ssr: false } ] ``` plugins/auth.js ``` export default ({ store, redirect, route }) => { // doesn't work redirect('/admin/login') // doesn't work return new Promise((resolve, reject) => { redirect('/admin/login') resolve() }) // works, but only the url updates, the…

### CASE-6013 · No entry found in rollupOptions.input
- **Principles**: P-F4, P-G4, P-E3 · **Env**: opera, windows, nuxt, vite, tailwind
- **Signals**: 👍10 💬10 · closed · labels: good first issue/workaround available/pending triage/❗ p4-important/possible regression
- **Excerpt**: ### Environment Operating system Windows 10.0.26200 │ │ │ CPU AMD Ryzen 5 3600X 6-Core Processor (12 cores) │ │ │ Node.js version v24.11.1 │ │ │ nuxt/cli version 3.35.1 │ │ │ Package manager npm 11.6.2 │ │ │ Nuxt version 4.4.5 │ │ │ Nitro version 2.13.4 │ │ │ Builder vite 7.3.3 │ │ │ Config app, compatibilityDate, css, devtools, modules, nitro, runtimeConfig, ssr, vite │ │ │ Modules @user/nuxt 0.11.3, @user/tailwindcss 7.0.0-beta.0 ### Reproduction running "nuxt dev" command ### Describe the bug When i run the nuxt dev script i get No entry found in rollupOptions.input 10:03:28 AM at…

### CASE-6014 · SPA navigation hangs indefinitely for child routes when parent route defined via `pages:extend` has no `file` property
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 🐛 bug/pages/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment - Nuxt version: 4.4.4 - Node.js: (your version) - Package manager: (npm / pnpm / yarn) ### Reproduction 1. Define a parent route in `pages:extend` without a `file` property 2. Add child routes under it 3. Navigate to a child route using `<NuxtLink>` 4. Observe: page enters infinite loading state, never resolves ### Describe the bug ### Description When defining a parent route via the `pages:extend` hook without specifying a `file` property on it, SPA navigation to any of its child routes results in an infinite loading state. The page never resolves on the client side. SSR…

### CASE-6015 · "Fetch handler error: Premature close" after upgrading to Nuxt 4
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍4 💬10 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v20.19.5` - Nuxt Version: `4.1.3` - CLI Version: `3.29.3` - Nitro Version: `2.12.7` - Package Manager: `[email]` - Builder: `-` - User Config: `ssr`, `devtools`, `app`, `css`, `modules`, `colorMode`, `i18n`, `components`, `imports`, `build`, `vite`, `runtimeConfig`, `nitro`, `features`, `compatibilityDate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction I can't provide a reproduction ### Describe the bug After upgrading my project from Nuxt 3 to Nuxt 4,…

### CASE-6019 · Preview mode broken after upgrade to v4
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍7 💬10 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.12.0 - Nuxt Version: 4.0.0 - CLI Version: 3.26.2 - Nitro Version: 2.12.0 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr, runtimeConfig, modules, auth, css, postcss, shadcn, icon, routeRules, vite - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email], [email] - Build Modules: - ### Reproduction `npm run build` `npm run preview` ### Describe the bug After upgrading to Nuxt v4 I can no longer run the preview. It seems as if there is a parsing…

### CASE-6021 · Nitro fails to recognize Nuxt aliases inside dependencies
- **Principles**: P-F4 · **Env**: windows, nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: ### Environment * Nuxt 3.16.1 * Nitro 2.11.8 * Windows 11 * bun, pnpm ### Reproduction [link] ``` pnpm i cd packages/nuxt-app pnpm nuxt dev ``` ### Describe the bug Nuxt runs in three different environments: 1. Nuxt setup/module Node environment 2. Nitro server side Node environment 3. Nuxt/Vue app side ssr/browser environment I have a separate package called "lib" that is intended to be used with my nuxt app so it uses Nuxt aliases: ```js // main.mjs in external library import sharedData from "@user"; // "@user" is an alias defined in "nuxt.config.ts" export default { ...sharedData, hello:…

### CASE-6024 · Nuxt 3.16.0 - routeRules Proxy Causes SSR Requests to Hang
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍6 💬10 · closed · labels: workaround available/pending triage/nitro/possible regression
- **Excerpt**: ### Environment Working directory: /app nuxi 9:10:31 PM Nuxt project info: nuxi 9:10:31 PM ------------------------------ - Operating System: Linux - Node Version: v23.7.0 - Nuxt Version: 3.16.0 - CLI Version: 3.22.5 - Nitro Version: 2.11.6 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, future, devtools, nitro, routeRules - Runtime Modules: - - Build Modules: - ### Reproduction [link] Steps to Reproduce: 1. Define routeRules in nuxt.config.ts: ```ts export default defineNuxtConfig({ compatibilityDate: '2024-11-01', future: { compatibilityVersion: 4, }, devtools: {…

### CASE-6026 · URI path not encoded in dev mode
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.12.0 - Nuxt Version: 3.15.1 - CLI Version: 3.20.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: ssr, compatibilityDate, modules, shadcn, appConfig, app, vite - Runtime Modules: @user/[email], [email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug Client requests pages from the dev server, however the paths are not URI encoded, meaning that the client sends invalid characters in the URL, specifically square brackets. I'd like to submit a PR, but I have no idea where to…

### CASE-6028 · Defining `$fetch` within `useFetch()` doesnt pass cookies on SSR
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬10 · closed · labels: 📚 documentation
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v21.6.1 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: future, extends, modules, runtimeConfig, routeRules, i18n - Runtime Modules: @user/ui@^2.17.0 - Build Modules: - ------------------------------ ### Reproduction [link] - Run `bun dev` to start Nuxt app on port 3000 and Nitro app on port 3001 - Press button "set cookie" - Reload page 1: Cookie is not set - Navigate to page 2, back to page 1: Cookie is set ### Describe the bug…

### CASE-6029 · useCookie navigateTo new page hydration
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug On the new page hydration I'm not able to read the cookies value in custom fetchapi composable function. Simulation context provided below. ### Additional context On index.vue page I setup cookies. When I navigate to another page by clicking button "Navigate…

### CASE-6031 · Build failing in production (Digital Ocean) - ERROR Cannot find module '/workspace/@user/supabase' 3.11.2 - 3.12.2
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, debug, runtimeConfig, devtools, modules, ui, css, app, supabase, security - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug I have not been able to successfully deploy to production ( DO) since nuxt 3.11.2…

### CASE-6033 · [Performance] Using this.$route inside a computed triggers reactivity while we are changing pages
- **Principles**: P-F4 · **Env**: opera, react, nuxt, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: good first issue/3.x/🐛 bug/pages/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.10.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, experimental, sourcemap, app, hooks, devServer, modules, devtools, imports, vite, nitro, components, pinia, i18n, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction [link]].vue ### Describe the bug Issue: - When using options API with Vue and creating a computed that utilizes `this.$route` inside it, the computed will…

### CASE-6037 · Nuxt 3.10.2: Page takes too long to hydrate
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, tailwind, vue
- **Signals**: 👍2 💬13 · closed · labels: 3.x/pending triage/needs reproduction/⚡ performance
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.9.0 - Nuxt Version: 3.10.2 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: imports, components, alias, modules, colorMode, headlessui, sourcemap, runtimeConfig, $development, i18n, googleFonts, devtools, tailwindcss, experimental, nitro - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], floating-vue/nuxt, [email], @user/[email], base/modules/preview - Build Modules: -…

### CASE-6038 · Failed to fetch dynamically imported module
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.17.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: vite - User Config: builder, ssr, css, runtimeConfig, devtools, modules, yandexMaps, device, vite - Runtime Modules: @user/[email], @user/[email], [email], vue-yandex-maps/nuxt, @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug ![Снимок экрана 2024-02-10 в 16 25 16]([link]…

### CASE-6043 · Nuxt 3 - Hydration mismatch error is not shown if the mismatch is caused by an Async Component
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Any ### Reproduction [link] ### Describe the bug This may be an upstream issue with Vue (almost 100% certain) but I would like to know your opinion on a workaround or possible fix: - The issue consists in not displaying "Hydration completed but contains mismatches" (in DEV and PRD envs) when we use an Async Component with a Mismatch. This is a severe issue for websites that serve milions of pages and have a mismatch but it is silent to our logs/obervability tooling. After some investigation it seems that when we use an Async Component the hydration is somewhat defered and at…

### CASE-6045 · Without `<script setup>` Nuxt App context is lost after async
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬10 · closed · labels: 3.x/workaround available/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.7.1 - CLI Version: 3.8.0 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: ssr - Runtime Modules: - - Build Modules: - ### Reproduction [link] ```js export default { async setup() { // replacement for useAsyncData await new Promise((res) => setTimeout(res, 100)); // awaited call before useHead produces an error on `npm run generate` useHead({ title: 'issue', }); }, }; ``` ### Describe the bug After update to 3.7.1 it throws `500` error on `npm run generate` if there is `useSeoMeta`…

### CASE-6049 · `useCookie` value still remains after cookie expiration
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬10 · closed · labels: ✨ enhancement/good first issue/3.x/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.16.0` - Nuxt Version: `3.5.3` - Nitro Version: `2.4.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `plugins`, `css`, `vite`, `build`, `devtools`, `modules`, `routeRules`, `runtimeConfig`, `elementPlus`, `i18n`, `auth`, `pinia`, `veeValidate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `./modules/auth`, `@user/[email]-beta.12-28113576.7bc33c3`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction ```ts const testCookie = useCookie('test', { maxAge:…

### CASE-6050 · getCookie return undefined only on ssr
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript, tailwind
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v16.18.1 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: runtimeConfig, devServer, vite, typescript, css, modules, tailwindcss - Runtime Modules: @user/[email], @user/[email], @user/[email]-28059208.2abef1b - Build Modules: - ### Reproduction [link] ### Describe the bug I premise that I don't know if it makes more sense to put this issue here, or on h3. I am trying to read a cookie in a nuxt server api. As written in the documentation, I am using the getCookie() fuction to which I…

### CASE-6051 · Server routes event.context.params typed incorrectly
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍6 💬10 · open · labels: types/nitro/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ```BASH ------------------------------ - Operating System: `Linux` - Node Version: `v16.19.1` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `postcss`, `modules`, `typescript` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ``` ### Reproduction Must use Nuxt 3.3, it doesnt error on lower versions. ```TS // server/api/something/[id]/index.get.ts export default defineEventHandler(async (event) => { return event.context.params.id; //…

### CASE-6052 · upgrade nuxt 3.0.0 to 3.2.2 create error on dev server (reading 'port' of undefined)
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: 3.x/workaround available/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: 07:37:15 ------------------------------ - Operating System: `Linux` - Node Version: `v18.12.1` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `buildModules`, `css`, `purgecss`, `vite`, `nitro`, `runtimeConfig`, `experimental`, `app`, `sourcemap` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `@user/[email]`, `[email]` ------------------------------ ### Reproduction here is `nuxt.config.js` ```js import postcssRTLCSS from 'postcss-rtlcss'; import {VitePWA} from…

### CASE-6055 · Hydration node mismatch with `.server`/`.client` components
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍3 💬10 · closed · labels: 🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug According to the docs, server-side rendered `.server` components are replaced with their `.client` counterparts on the client-side. Unfortunately, this isn't working as expected and Vue throws an `Hydration node mismatch` warning even though both files contain the same template without any state dependent dynamic content.…

### CASE-6066 · SyntaxError: Cannot use import statement outside a module (Nuxt 3 + heroicons/vue + headlessui/vue)
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue, webpack, tailwind
- **Signals**: 👍11 💬10 · closed · labels: 3.x/🐛 bug
- **Excerpt**: Hello ! 👋 ### Environment ``` E:\WindowsData\Bureau\portfolio-v3>npx nuxi info Nuxt CLI v3.0.0-27234417.10170da RootDir: E:\WindowsData\Bureau\portfolio-v3 Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.6.1` - Nuxt Version: `3-3.0.0-27234417.10170da` - Package Manager: `Yarn` - Bundler: `Webpack` - User Config: `ssr`, `srcDir`, `plugins` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ``` ### Describe the bug and expected behavior I have tried to integrate a component from Tailwindui which exploits the…

### CASE-6067 · Hydration mismatch error
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, webpack
- **Signals**: 👍3 💬10 · closed · labels: 3.x/🐛 bug/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.9.0` - Nuxt Version: `3-3.0.0-27235989.d52b1e8` - Package Manager: `Yarn` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug I was eager to try out the nuxt 3 beta. And simply followed the installation instructions from [link] . But on running `yarn dev -o` or `yarn dev` I get a console error saying 'Hydration completed but contains mismatches.' Not sure if I'm missing something. I've just started with nuxt ### Reproduction Just following the installation steps should…

### CASE-6069 · SSR asyncData issue: rendering on client instead of server
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍1 💬10 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Versions - nuxt: 2.15.3 - node: v14.15.4 - nuxt/http: 0.6.4 ### Reproduction I have a "frontend" application (Nuxt) running on [link] that needs to render all requests towards an internal "backend" rest api (running on [link]). In order to do so, I am trying to take advantage of SSR, since the backend is internal and cannot be exposed. To do so, I used `asyncData`, following exactly what the documentation suggests: [link] Below is an oversimplified example of what I have setup so far: **pages/index.vue** ``` <template> <span>{{ module }}</span> </template> <script> export default { name:…

### CASE-6071 · Async calls break router.beforeEach
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍12 💬10 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Set up a basic SSR nuxt app. Add a plugin that uses an asynchronous call in router.beforeEach Navigate to a page in the site ### What is expected ? The call should complete successfully ### What is actually happening? [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render. ### Additional…

### CASE-6073 · Error page not work on Nuxt Server Error
- **Principles**: P-F4 · **Env**: ios, nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [2.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1) Create the `layout/error.vue` 2) Create the page which will call Axios via Vuex 3) When calling API via Axios, the API return 404/500 ### What is expected ? The error will pass to the custom Error page. ### What is actually happening? If user use nuxt-router to change the page (not SSR), the custom error page shown. But if I refresh and view the SSR Page. The NuxtServerError Page will be shown in dev mode (yarn dev) and the default Server Error page when yarn start. ### Additional comments? Here is my…

### CASE-6082 · Redirects for SEO
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: Hi, I have a big problem... I am developing now an e-shop using nuxt and I stuck at the redirections moment. We have the laravel backend with api and admin-panel, so our SEO department can use SEO module to write a big array of redirects for they needs. All this data stores in the DB. And I am confused for the right solution to implement these redirects into my SSR+SPA App Do you have any ideas for the most beautiful solution for this problem? Thanks for any answer :-) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a>…

### CASE-6084 · Integration of google analytics
- **Principles**: P-F4, P-F5, P-H3 · **Env**: ios, nuxt, webpack
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: Hi I am using Nuxt 1.0.0_alpha5 version. I believe I have followed the recommendations to integrate Google Analytics, with the following link : [link] I put my own UA value in the plugins file. Here is how I've integrated it in nuxt.config.js : ``` build: { vendor: [ 'axios', 'lodash.debounce' ], plugins: [ new webpack.ProvidePlugin({ '_': 'lodash'}), { src: '~plugins/ga.js', ssr: false } ] }, ``` I meet the following error message after build, what am I doing wrong. Many thanks. ``` nuxt build [nuxt] Building... nuxt:build App root: /home/matthieu/helping-pong_nuxt +0ms nuxt:build Generating…

### CASE-6085 · CDN configuration challenges when using domain
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: Ok, after spending few frustrating hrs with CDN engineers (MaxCDN) and hosting engineers (`zeit now`) too... I need help setup my site. In nuxt.config: ``` build: { publicPath: '[link] ... ``` Once deployed on `now`, I get my SSR render JS with path, for example... ``` <link rel="prefetch" href="[link] as="script"> ``` Above domain points to SSL endpoint at MaxCDN. They cache the file when requested, back from my hosted domain. But here is the issue since when this file is requested it returns my web page with 404 instead of JS! If I remove CDN, JS is properly returned. Whats wrong here? Any…

### CASE-6086 · ssr custom directive
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬10 · closed · labels: question/2.x
- **Excerpt**: Hello my custom directive not working on server side! directive ``` Vue.directive('mydirective', { bind (el, binding) { el.innerHTML = 'mydirective worked'; } }); ``` html template `<div v-mydirective="{foo: 'bar'}">initial text</div>` This code worked only browser - not working on server side (( How fix this problem?? Thanks, really very need this. **PS.** How worked directive > v-html This worked on server side and client side. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link]…

### CASE-6091 · nuxt generate fails with Nuxt 4.0 but not Nuxt 4.0.0-rc.0
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: nitro/upstream/4.x
- **Excerpt**: ### Environment <pre> 14:17:57.071 | ------------------------------ -- | -- 14:17:57.071 | - Operating System: `Linux` 14:17:57.071 | - Node Version: `v22.16.0` 14:17:57.071 | - Nuxt Version: `4.0.0` 14:17:57.071 | - CLI Version: `3.26.2` 14:17:57.071 | - Nitro Version: `2.12.0` 14:17:57.071 | - Package Manager: `[email]` 14:17:57.072 | - Builder: `-` 14:17:57.072 | - User Config: `build`, `modules`, `ssr`, `pwa`, `runtimeConfig`, `compatibilityDate`, `devtools`, `vite` 14:17:57.072 | - Runtime Modules: `@user/[email]`, `()` 14:17:57.072 | - Build Modules: `-` 14:17:57.072 |…

### CASE-6097 · illegal character U+0040
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, typescript, tailwind, vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v22.9.0 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, srcDir, ssr, typescript, modules, eslint, i18n, security, tailwindcss, app, vite, hooks, nitro, routeRules, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], [email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction ```ts enum UserRole { ADMIN = "admin", MODERATOR =…

### CASE-6098 · CI building docker fails with `compatibilityVersion: 4` but local typcheck/building works
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, typescript, tailwind, vue
- **Signals**: 👍0 💬9 · closed · labels: workaround available/4.x/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.16.0 - Nuxt Version: ^3.13.2 - CLI Version: 3.13.2 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: app, future, modules, ssr, typescript, eslint, i18n, tailwindcss, components, imports, primevue, experimental, nitro, hooks, spaLoadingTemplate, devtools, compatibilityDate - Runtime Modules: @user/fonts@^0.8.0, @user/i18n@^8.5.4, @user/tailwindcss@^6.12.1, @user/nuxt@^11.1.0, @user/eslint@^0.5.7, @user/nuxt@^0.5.4, @user/nuxt@^4.13.2, @user/nuxt-module@^4.0.7 - Build…

### CASE-6099 · Client-only component in production. TypeError: Cannot read properties of null (reading 'parentNode')
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬9 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, modules, ssr - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Enter the reproduction and waiting for `npm run generate && npm run preview`. > Sometimes `npm run generate` fails on stackblitz with error ` ERROR Command failed with exit code 13: npx serve ./public `. Try `npm run generate`…

### CASE-6100 · nuxtlink or navigateto forces client side request instead of SSR
- **Principles**: P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.12.2 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, css, postcss, modules, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction // profile/index.vue ```vue const { $api } = useNuxtApp(); const authStore = useAuthStore(); const { data, error, status } = await useAsyncData(() => $api .get<{ status: string; user: User…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6002 · Event Listener / method / watch data not working after Nuxt Generate
- **Principles**: P-F5, P-H3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Dist folder in repo ![Screen Shot 2019-04-15 at 1.58.16 PM.png]([link]) ![Screen Shot 2019-04-15 at 1.58.02 PM.png]([link]) . The default index.vue page has @user events that call method (changeStep), a data watch listener (step). These work in dev and production mode, but don't in generate files. I have console.log at the start of both the method and watch function. Neither console.log show up then running /index.html generated page. ### What is expected ? In my build, the area below the "next" or…

### CASE-6012 · stale `_payload.json?{buildId}` on client navigation after ISR revalidation
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍3 💬10 · closed · labels: pending triage/nitro
- **Excerpt**: ### Environment System | Version -- | -- Node.js version | 22.x Package manager | bun Nuxt version | 4.4.8 Nitro version | 2.13.4 Deployment target | Vercel (vercel preset) Relevant config: ```experimental.payloadExtraction: 'client', routeRules: { '/': { isr: 120 }, '/b': { isr: 120 } }``` ### Reproduction Repo: [link] Live deployment: [link] > [!NOTE] > This bug requires a Vercel deployment with ISR. It does not reproduce in nuxt dev or StackBlitz. 1. Deploy the repo to Vercel. 2. Hard-reload `/`, then client-navigate A → B → A (warms the browser cache for `/_payload.json?{buildId}`). 3.…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6004 · How to lazy load components?
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬11 · closed · labels: 2.x
- **Excerpt**: Hello. I have `admin` route where I have big Component that uses few external libraries. This route will be avaliable only for me, not for users of my site. RIght now it's loaded from the start even if I on another route. I tried this ```js const vue2Dropzone = () => import('vue2-dropzone') components: { vueDropzone: vue2Dropzone } ``` But still chunk is loaded even if I am not on this route. What is the logic behinfd this? How to actually load code only when I need it? Why it is not working out of the box? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is…

### CASE-6005 · Duplicated meta tags and titles
- **Principles**: P-A3, P-H1, P-F4 · **Env**: nuxt, vue
- **Signals**: 👍2 💬11 · closed · labels: 2.x
- **Excerpt**: Hey, I'm working on a SSR website and keep having issues with duplicated meta tags. As you can see on the screenshot below, nuxt generate two title tags. ![capture d ecran 2018-02-26 a 14 18 46]([link]) I use nuxt `head()` method and `hid` attribute to override defaults tags on my article page, but the two meta tags are being used. In nuxt.config.js : <img width="439" alt="capture d ecran 2018-02-26 a 14 24 43" src="[link]> In videos/_slug.vue : <img width="565" alt="capture d ecran 2018-02-26 a 14 22 56" src="[link]> Oh, and if I remove default title and description from `nuxt.config.js`,…

### CASE-6016 · The requested module 'vue' does not provide an export named 'default'
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ```sh ------------------------------ - Operating System: Linux - Node Version: v22.12.0 - Nuxt Version: 4.1.0 - CLI Version: 3.28.0 - Nitro Version: 2.12.5 - Package Manager: [email] - Builder: - - User Config: buildId, compatibilityDate, ssr, app, alias, css, vite, fonts, image, modules, pinia, imports, runtimeConfig, experimental, $development, $production - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction - `npm run build` - `node .output/server/index.mjs` In `npm run dev`,…

### CASE-6018 · Error __buildAssetsURL is not defined
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍9 💬10 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.17.1` - Nuxt Version: `4.0.0` - CLI Version: `3.26.2` - Nitro Version: `2.12.3` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `telemetry`, `sourcemap`, `experimental`, `modules`, `alias`, `sentry`, `routeRules`, `css`, `eslint`, `extends`, `devtools`, `components`, `imports`, `runtimeConfig`, `delayHydration`, `gtm`, `image`, `i18n`, `fonts` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]`, `@user/nuxt/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When…

### CASE-6027 · free(): invalid size and socket hang up
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v20.5.1` - Nuxt Version: `3.13.0` - CLI Version: `3.13.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction When i launch npm run dev or yarn run dev raises ![image]([link]) ### Describe the bug When i launch npm run dev or yarn run dev raises ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-6032 · undefined title in google SERP?
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, tailwind
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Production in Hosted in Vercel - Operating System: Darwin - Node Version: v20.14.0 - Nuxt Version: 3.12.1 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: css, extends, modules, site, sitemap, ogImage, linkChecker, seoExperiments, seo, cookieControl, sanctum, bugsnag, eslint, image, runtimeConfig, imports, ui, devtools, experimental, colorMode, tailwindcss, routeRules - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/motion/[email], [email], [email], [email], @user/[email], [email], @user/[email], [email],…

### CASE-6034 · "No match found for location with path" is still spammed on unknown paths
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬10 · closed · labels: nitro/upstream/❗ p4-important
- **Excerpt**: ### Environment Basically everywhere, on my windows development machine: ``` ------------------------------ - Operating System: Windows_NT - Node Version: v18.15.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: devtools, css, devServer, modules, runtimeConfig, sitemap, image, i18n - Runtime Modules: [email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ``` And in the production docker image using node-20 / node-21 alpine where I can only provide the nitro.json: ```json { "date":…

### CASE-6036 · Augmenting RuntimeNuxtHooks not working correctly
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vue, typescript
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v21.5.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools, extends, app, buildModules, modules, image, pinia, piniaPersistedstate, imports, i18n, primevue, css, runtimeConfig, routeRules - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: @user/[email] ### Reproduction [Stackblitz]([link]) (typescript not working, I'm sorry) or [Github]([link]) ### Describe the bug As I…

### CASE-6039 · Property X does not exist on type '{}'. - TypeScript
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, typescript, nuxt, vite, vue
- **Signals**: 👍3 💬10 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v21.2.0 - Nuxt Version: 3.10.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: app, css, devtools, modules, postcss, typescript, ogImage, site, sitemap, routeRules, vite, runtimeConfig, experimental - Runtime Modules: @user/[email], @user/[email]-beta.55 - Build Modules: - ### Reproduction Switch from yarn to npm by deleting node_modules and .nuxt folder and reinstall everything with npm i, then start the dev again. I'm using latest vue version with latest nuxt version ###…

### CASE-6040 · Component <Anonymous> is missing template or render function.
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/needs reproduction/needs details
- **Excerpt**: ### Environment The project works locally and is deployed online. Page refresh error ![image]([link] framework]/assets/117615674/8e750d69-c232-4d7e-9aae-788b7b6b5f8e) ![image]([link] framework]/assets/117615674/a2de41d1-bba4-48d7-8605-7fe7fb5805a2) ### Reproduction [project-name.zip]([link] framework]/files/13817117/project-name.zip) ### Describe the bug ``` [root@user ~]# node /data/wwwroot/cangjingge/nuxt3/.output/server/index.mjs Listening on [link]]:3000 [Vue warn]: Component <Anonymous> is missing template or render function. ^Z [1]+ 已停止 node…

### CASE-6041 · IFrame style and script leak to parent page
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, pages - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug In my `index.vue` page I create an `iframe` element, which is rendering my `iframe.vue` page: ```vue // index.vue <template> <div>This is index page content!</div> <iframe src="/iframe"></iframe> </template> ``` ```vue // iframe.vue <script setup>…

### CASE-6046 · I'm getting [Vue warn]: setup() return property "$hello" should not start with "$" or "_" which are reserved prefixes for Vue internals when using .client component
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍1 💬10 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/✨ good reproduction
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, imports, modules, css, svgo, i18n, headlessui, image, components, extends, runtimeConfig, linkChecker, googleFonts, build, vite - Runtime Modules: @user/[email], @user/[email], @user/[email]-beta.13, [email], [email], @user/[email]-rc.1, [email], @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ### Reproduction [Stackblitz reproduction link]([link]) 1. Add plugin exactly the…

### CASE-6053 · Ambiguous error notification in Nuxt 3.2.2 with typeScript: { typeCheck: true }
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, typescript, vite
- **Signals**: 👍4 💬10 · closed · labels: good first issue/3.x/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment ❯ npx nuxi info Nuxi 3.2.2 RootDir: /home/projects/nuxt-starter-5vb8p7 Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction 1. Define { typeScript: { typeCheck: true } } in nuxt.config.ts 2. Run `npm run dev` 3. Weird error notification without any message pops up ![image]([link]) Reproduction sandbox: [link] ###…

### CASE-6056 · Pinia store values in layout is not server side rendered
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.17.1` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `meta`, `modules`, `image`, `components`, `build`, `css`, `postcss`, `vite` - Runtime Modules: `@user/[email]`, `[email]`, `@user/[email]`, `@user/[email]-27769790.4b27db3` - Build Modules: `-` ### Reproduction **Source code** [link] **Deployed version** [link] ### Describe the bug Hi! We have a general Nuxt 3 boilerplate at Novicell that we use to build various client websites. We've…

### CASE-6057 · Cannot catch error with $fetch (ohmyfetch)
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, ios, nuxt, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction ```vue <script lang="ts" setup> import axios from 'axios' const props = defineProps({ image: { type: String } }) const isExist = ref(false) const isFileExist = async (filepath: string) => { try { await $fetch(filepath) return true } catch (e) { return false }…

### CASE-6061 · use two await fetch in the server, Error: nuxt instance unavailable
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.19.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `srcDir`, `meta`, `postcss` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug when I use two await fetch in the server, will throw Error: nuxt instance unavailable <img width="767" alt="image" src="[link]> ### Additional context _No response_ ### Logs _No response_

### CASE-6065 · SyntaxError: Unexpected token 'export'
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, webpack
- **Signals**: 👍1 💬10 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v14.18.0` - Nuxt Version: `3-3.0.0-27234503.d5127e9` - Package Manager: `Yarn` - Bundler: `Webpack` - User Config: `build` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug ![image]([link]) When i install Element Plus it's the error that i see ### Reproduction [link] ### Additional context _No response_ ### Logs _No response_

### CASE-6068 · Error on using useFetch
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, webpack, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v14.16.0` - Nuxt Version: `3-3.0.0-27234211.2a0afbd` - Package Manager: `Yarn` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug and expected behavior error on using the useFetch composable ![image]([link]) index.vue ```vue <script setup lang="ts"> import { useFetch } from "nuxt3"; const { data } = await useFetch("[link]); console.log(data); </script> <template> <div>index</div> </template> <style scoped></style> ``` ### Steps to reproduce <!-- Steps to reproduce the…

### CASE-6080 · AMP example doesn't work
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: Hello. I am trying to implement AMP with Nuxt. When I run official `with-amp` example, it doesn't load images component. And the page loads very slow. [link] <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c2314">#c2314</a>)</em></sub></div>

### CASE-6081 · Load video from assets folder
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: I'm not able to load a video from `assets` folder, I know this might be solved in [ref]. I tried both `~/assets/...` and `~assets/...` but I can't make it work. My component: ```html <template> <div> <video src="~assets/video.mp4"> <p>Your browser does not support the video tag.</p> </video> </div> </template> ``` My assets folder: ![assetsfolder]([link]) Am I doing something wrong? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1783">#c1783</a>)</em></sub></div>

### CASE-6083 · Invalid character in statusMessage.
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: 2.x
- **Excerpt**: [async-data-bug.zip]([link] framework].js/files/1240674/async-data-bug.zip) ```shell npm i npm run dev ``` ![image]([link]) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1279">#c1279</a>)</em></sub></div>

### CASE-6088 · Invalid hostname =127.0.0.1. Using `` as fallback.
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: workaround available/upstream/possible regression
- **Excerpt**: ### Environment ``` │ │ ╭── Nuxt project info (copied to clipboard) ─────────────────────────────────────────╮ │ │ │ │ │ Operating system macOS 24.0.0 │ │ │ CPU Apple M1 (8 cores) │ │ │ Node.js version v22.15.0 │ │ │ nuxt/cli version 3.33.1 │ │ │ Package manager npm 11.5.2 │ │ │ Nuxt version 4.3.1 │ │ │ Nitro version 2.13.1 │ │ │ Builder vite 7.3.1 │ │ │ Config compatibilityDate, devtools, image, modules, sitemap, vite │ │ │ Modules @user/image 1.11.0, @user/sitemap 7.6.0 │ │ │ │ │ ╰────────────────────────────────────────────────────────────────────────────────────╯ │ ``` ### Reproduction 1.…

### CASE-6089 · Cannot find module '..../vite-plugin-checker/..../typescript.js
- **Principles**: P-A3, P-H1 · **Env**: vite, typescript, nuxt, vue
- **Signals**: 👍3 💬9 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Describe the bug Hi there, since the update to nuxt 4.3.1 (and vue 3.5.28) i get an error in build console. <img width="1752" height="856" alt="Image" src="[link] />

### CASE-6090 · Compiled files appearing in the project after updating to 4.0.3
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍2 💬9 · closed · labels: pending triage/upstream/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.17.0` - Nuxt Version: `4.0.3` - CLI Version: `3.27.0` - Nitro Version: `2.12.4` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `extends`, `fonts`, `css`, `vite`, `i18n`, `runtimeConfig`, `alias`, `imports`, `image` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction WIP ### Describe the bug I've noticed that compiled `.js` files have started appearing (seemingly at random) next to their source files in projects running on version `4.0.3` while the dev server is running. This wasn't…

### CASE-6093 · TypeError: Cannot read properties of null (reading 'parentNode') with useFetch
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue
- **Signals**: 👍3 💬9 · closed · labels: 🛠️ dx/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v22.5.0 - Nuxt Version: 3.16.0 - CLI Version: 3.23.0 - Nitro Version: 2.11.6 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, future, modules - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] Steps: 1) Follow stackblitz link and wait for it to install 2) Press "Open in New Tab" button, wait for it to fully load and then open the console <img width="130" alt="Image" src="[link] /> 3) Navigate to `pages/index.vue`,…

### CASE-6096 · `app.vue` file is totally ignored
- **Principles**: P-A3, P-H1 · **Env**: opera, ubuntu, linux, vue, nuxt
- **Signals**: 👍0 💬9 · closed · labels: pending triage
- **Excerpt**: ### Environment ```` ------------------------------ - Operating System: Ubuntu 20.04 LTS Linux - Node Version: v20.12.2 - Nuxt Version: 3.14.1592 - CLI Version: 3.16.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ```` ### Reproduction [link] ### Describe the bug I am working with pages and layers and my `app.vue` file gets completely ignored. **Screenshot:** ![Image]([link]) ### Additional context _No response_ ### Logs ```shell-script ```

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6008 · Bug: Nuxt broke Enter transition
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: 2.x
- **Excerpt**: Hello guys. I am struggling with strange issue. It appears only in Nuxt, when using Vue without SSR all works fine! I am using CleaveJS to mask my input and detect Credit Card type. Then I show animated Credit Card logo. When using Nuxt Enter transition is broken!!! Here, try to type `34` or `44` or `22` - [link] This transition is broken ONLY on first appear. If you delete input and try to type it again - transition works just fine. And the worst part that it appears only after I build and deploy this app! If you ran it locally all is working. First I thought it can be because image doesn't…

### CASE-6047 · <Transition appear/> not working
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.19.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, modules - Runtime Modules: @user/[email], @user/motion/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug The vue docs says : If you also want to apply a transition on the initial render of a node, you can add the appear prop. [link] There is no transition on the initial render with nuxt, it however works when unmounting/remouting the node afterwards. Working fine on vanilla vue : [link] ###…

### CASE-6063 · Cannot add any custom directive (locally or globally)
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt, vite, vue, desktop
- **Signals**: 👍0 💬10 · closed · labels: 3.x/🐛 bug/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27277498.850ef69` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug It's impossible to add any custom directive (locally or globally). I get this: `[SSR] Error transforming /Users/Me/Desktop/nuxt3-app/pages/index.vue: SyntaxError: Custom directive is missing corresponding SSR transform and will be ignored.` ### Reproduction [link] ### Additional context _No response_ ### Logs _No response_

### CASE-6077 · Display rerendering after router.push triggered
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce [link] - open it. Click "change local var to" button. See how local var changed from default to 11111111 even route is changing already and it shouldnt happen. Transition doesnt matter for this, without them its just a bit harder to notice, but if strip all css it will still be same behaviour. For first i though its not related to nuxt and tried to reproduce with router and vue itself. [link] -> click about button at the right corner. And its not happening. Nothing…

### CASE-6079 · Transition between error layout doesn't work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍1 💬10 · closed · labels: stale/2.x
- **Excerpt**: I have `default` and `error` layout, but when I hit to error page there's no transition. I read about `layout transition` but still have no solution for that issues. Can you please provide more clear example, because current example doesn't apply to my case. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c2403">#c2403</a>)</em></sub></div>

### CASE-6092 · as usually nothing work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment bun ### Reproduction i don't why it updated to latest version, because i want to stay to noe and not to test new one ### Describe the bug Pre-transform error: Failed to resolve import "#app-manifest" and other ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6095 · Transition doesn't render page if root component missing
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt
- **Signals**: 👍3 💬9 · closed · labels: pending triage
- **Excerpt**: ### Environment Working directory: /home/projects/kkvilogryz.github 4:05:37 PM Nuxt project info: 4:05:37 PM ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.15.1 - CLI Version: 3.17.2 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ 4:05:37 PM 👉 Report an issue: [link] framework]/issues/new?template=bug-report.yml 👉 Suggest an improvement: [link] framework]/discussions/new 👉 Read documentation: [link] ### Reproduction [Repo where…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6009 · The error in basic.generate.test/validate
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: webkit
- **Signals**: 👍1 💬11 · closed · labels: 2.x
- **Excerpt**: `/validate` wrongly passes, it actually fails (which is expected) due to the same error as `/validate?valid=true` fails. The actual error is `jsdom` trying to `getComputedStyle().WebkitTransitionDelay.split`, where the `WebkitTransitionDelay` is `undefined` If you open the generated page with a real browser, it behaves correctly in both cases. I am unsure why it's the validate routes that trigger this, probably because they cause a transition when they resolve to the validated page or error page. What do we do about this? How to report to `jsdom`? <!--cmty--><!--cmty_prevent_hook--> <div…

### CASE-6022 · hmr error TypeError: parentComponent.ctx.deactivate is not a function
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome 134, nuxt, vue
- **Signals**: 👍1 💬10 · closed · labels: 🛠️ dx/🐛 bug/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment latest chrome 134 ### Reproduction [link] ### Describe the bug ![Image]([link]) nuxt 3.16.0, I modified the index.vue and encountered an error triggering hot-reload. using keepalive. ### Additional context _No response_ ### Logs ```shell-script TypeError: parentComponent.ctx.deactivate is not a function at unmount (runtime-core.esm-bun…?v=1bf3769f:5847:27) at patch (runtime-core.esm-bun…s?v=1bf3769f:4673:7) at sharedContext.activate (runtime-core.esm-bun…s?v=1bf3769f:2592:7) at processComponent (runtime-core.esm-bun…?v=1bf3769f:5198:29) at patch…

### CASE-6025 · Layout <slot /> displays last in SSR project upon navigation between not-SSR pages
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, firefox, edge, nuxt
- **Signals**: 👍0 💬10 · closed · labels: upstream/🔨 p3-minor
- **Excerpt**: ### Environment Most likely not Environment-dependent, but : - Nuxt 3.15.4 (both my project and the reproduction) - Node 18.20.3 (reproduction), 22.11.0 and 22.14.0 (my project) - Browsers : Chrome, Firefox and Edge ### Reproduction [link] (new link) New link from [link] framework][ref] because I deleted my reproduction (sorry ^^") Basic Layout with a \<slot /\> between 2 divs Two pages with SSR disabled on them in nuxt.config.ts When navigating between them, the \<slot /\> of the layout (page content) is displayed last. ### Describe the bug On a project with SSR enabled, the <slot /> of the…

### CASE-6042 · Nuxt>3.7.0 Client with deactivated "renderJsonPayloads" fails with "TypeError: Cannot read properties of undefined (reading 'baseURL')"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, nuxt
- **Signals**: 👍8 💬10 · closed · labels: good first issue/3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.7.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.0 - Package Manager: [email] - Builder: - - User Config: experimental - Runtime Modules: - - Build Modules: - ### Reproduction [link] Or: (1) Install a new project with [email] (or 3.8.2) (2) Edit nuxt.config.ts ``` // [link] export default defineNuxtConfig({ experimental: { renderJsonPayloads: false, }, }); ``` (3) Generate and serve `nuxt generate && nuxt start` (4) Open in browser ### Describe the bug In Chrome, the application crashes immediately and does not…

### CASE-6054 · Nuxt is adding all extracted css files both to head and to end of html
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, nuxt
- **Signals**: 👍0 💬10 · closed · labels: pending triage/2.x/needs reproduction
- **Excerpt**: ### Environment System: OS: Windows 10 10.0.22622 CPU: (16) x64 Intel(R) Core(TM) i9-10885H CPU @ 2.40GHz Memory: 40.69 GB / 63.75 GB Binaries: Node: 16.18.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm: 8.19.2 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.22621.586.0), Chromium (109.0.1518.61) Internet Explorer: 11.0.22621.1 npmPackages: @user/babel-preset-app: 2.15.8 => 2.15.8 nuxt: 2.15.8 => 2.15.8 ### Reproduction [link] ### Describe the bug We are seeing an issue where we have the same CSS files added twice to the application,…

### CASE-6058 · [RC 9] [RC 10] `Cannot read properties of undefined (reading 'modules')` when `vue` is installed in parent dir
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vue, vite, nuxt
- **Signals**: 👍3 💬10 · closed · labels: 3.x/🐛 bug/bundler:vite/❗ p4-important
- **Excerpt**: ### Related issues - [meta framework].js[ref] - [meta framework].js[ref] - [meta framework].js[ref] - [link] framework].js[ref] - sidestream-tech/sidebase[ref] ### Reproduction Minimal reproduction: [link] ### Describe the bug How it happens: If vue dependency is installed outside of project directory in an adjutant directory (usually home directory with `node_modules`), `vite-node` that is enabled by default for RC.9+ makes issues. (issue is with nuxt custom external options) ### Additional context ## Workaround 1 Try switching to the [edge channel]([link]). It should have been solved with…

### CASE-6059 · Netlify preset 'netlify-edge' Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬10 · closed · labels: 3.x/🐛 bug/nitro/🔨 p3-minor
- **Excerpt**: ### Environment Netlify ### Reproduction Just create a Nuxt 3 Project and deploy it on netlify with the following preset: ``` nitro: { preset: 'netlify-edge' } ``` ### Describe the bug Netlify support suggested to raise a bug ticket here: > > believe this is a problem with Nuxt and the way they're generating an Edge Function. It could be worth trying to post an issue here: [link] > > The reason why I believe it is because, Nuxt is responsible for generating an Edge Function and there seems to be something wrong with that is being generated. But again, if they have any other ideas, you can let…

### CASE-6062 · Browser url changes before useAsyncData / useFetch resolves and ssr
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, windows, nuxt, vite, typescript
- **Signals**: 👍5 💬10 · closed · labels: upstream/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `app`, `autoImports`, `buildModules`, `css`, `experimental`, `modules`, `typescript` - Runtime Modules: `@user/[email]` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction [link] Open in new window and enable 3g throttling in Chrome devtools. ### Describe the bug When clicking on NuxtLink, the browser url changes before useAsyncData and/or useFetch resolves. This is an issue when using things like…

### CASE-6070 · Custom publicPath not working with electron
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: electron, nuxt
- **Signals**: 👍7 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: **Error message**: v2.15.0 ChunkLoadError: Loading chunk 2 failed. (works with v2.14) ### Versions - nuxt: v2.15.0 - electron: v11.2.3 It works with nuxt-v2.14.12. ### Reproduction I made a minimum code to reproduce. [link] ### Steps to reproduce You can reproduce with [link] ``` yarn && yarn clean && yarn build && yarn start ``` ### What is Expected? It works even with v2.15 as v2.14. Otherwise, there is another way or a workaround with v2.15. ### What is actually happening? I can see `ChunkLoadError: Loading chunk 2 failed.` on DevTools when application is launching. <img width="77%"…

### CASE-6074 · Nuxt error() does not stop execution of previous component
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, ios, nuxt
- **Signals**: 👍0 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.3.4]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce The reproduction link contains a generated app with the latest Nuxt and the following setup: - Custom error layout page - axios module - nuxt-i18n module - axios plugin which throws an error if 404 or 500 or higher error is returned. - Express with /api proxy To reproduce you should run `yarn dev` and open the console on chrome. ### What is expected ? That the error component is injected instead of the original component, removing all the semantics of the original component. ### What is actually…

### CASE-6076 · Components are being instantiated twice if application creates a Vue instance in plugins
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome 4, vue, nuxt
- **Signals**: 👍0 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [nuxt-edge]([link]) and 1.4.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce To see the weird problem of components being instantiated and mounted twice, do the following: 1.) npm i 2.) npm run dev 3.) Open localhost:3000 in Chrome 4.) Inspect client-side console after you refresh the page. You will notice MinimalComponent being mounted twice for unknown reason(s). ### What is expected ? MinimalComponent should only mount once. ### What is actually happening? MinimalComponent is mounted twice. ### Additional comments? I believe this is because nuxt assumes itself to…

### CASE-6078 · Vue.js not detected on browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 58, chrome 64, vue, nuxt
- **Signals**: 👍1 💬10 · closed · labels: 2.x
- **Excerpt**: Hi, I'm developping a website which works normally. But when I try to open vue-devtools, it remains empty. Vue-devtools icon says "Vue.js not detected", however, vue-devtools tab is available and says "Ready. Detected Vue 2.5.13", but doesn't show any component nor store or event. I read some posts and threads about devtools not working with minified versions of Vuejs or with "File://" protocol, but I'm unable to fix this. I'm on Nuxt 1.3.0, Vue-devtools 4.1.3, Firefox 58.0.2 or Chrome 64.0.3282.140 (neither works). I launch the site with `npm run dev` (ie. `nuxt`)... Does someone could help…

### CASE-6087 · Runtime error when a module imports from nuxt/app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/146, safari/537, linux, mac os x, nuxt, webkit
- **Signals**: 👍1 💬9 · closed · labels: pending triage
- **Excerpt**: ### Environment | | | | -------------------- | --------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v22.22.0` | | **nuxt/cli version** | `3.34.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.4.2` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** |…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6010 · How do I access environment variables in a component?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬11 · closed · labels: 2.x
- **Excerpt**: I can't find a way to access environment variables (especially within a component). I created a brand new project with: ```bash vue init nuxt/starter new-project cd new-project npm install npm run dev ``` **nuxt.config.js** ``` module.exports = { ... env: { hey: 'hey' } } ``` **pages/index.vue** ``` <script> import Logo from '~/components/Logo.vue' export default { components: { Logo }, mounted () { console.log(process.env) } } </script> ``` `console.log()` prints an empty object. I read in [the documentation]([link]) that you could access environment variables with `process.env`. What am I…

### CASE-6011 · Unable to access process.env from browser
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍0 💬11 · closed · labels: question/2.x
- **Excerpt**: Hi, I am trying to set baseURL as env variable by defining it in nuxt.config.js env: { baseURL: 'myserver.com' } But when I console.log(process.env) in the browser. It shows an empty object. Any reason why this is not working? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c227">#c227</a>)</em></sub></div>

### CASE-6017 · app.cdnURL variable is always empty in dev mode
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬10 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.19.0 - Nuxt Version: 3.18.1 - CLI Version: 3.28.0 - Nitro Version: 2.12.4 - Package Manager: [email] - Builder: vite - User Config: - Runtime Modules: - Build Modules: ### Reproduction 1. Open [StackBlitz]([link]) 2. Run `pnpm run dev` - you will see `cdnURL is not installed` in the console 3. Run `pnpm run build` - you will see `cdnURL is installed` in the console ### Describe the bug In dev mode, the app.cdnURL variable is [always an empty string]([link] framework]/blob/main/packages/schema/src/config/app.ts#L47). Because of…

### CASE-6023 · Nuxt 3.16.0 build and run preview error 500 ReferenceError: shared_cjs_prodExports is not defined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, nuxt
- **Signals**: 👍3 💬10 · closed · labels: workaround available/pending triage/possible regression
- **Excerpt**: ### Environment Operating System: Windows 10 Node Version: v22.11.0 Nuxt Version: v3.16.0 CLI Version: v3.22.5 Nitro Version: v2.11.6 Package Manager: [email] ### Reproduction [link] ### Describe the bug I defined a plugin in the `plugins` directory and used components from `@user/nuxt` in the plugin. After upgrading to Nuxt v3.16.0, the development environment runs without any issues, and there are no errors when running `pnpm build`. However, when I start the preview with `pnpm preview`, the page returns a 500 error and becomes inaccessible. The console shows the following error message:…

### CASE-6048 · Prisma can't finding any environmental variables when Nuxt is in production
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍2 💬10 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.16.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction I have created this repo [repo]([link]) that recreates the issue. In summary if you load the DATABASE_URL from a .env, prisma wont find it when Nuxt is in production. ### Describe the bug When nuxt is in dev, prisma functions perfectly. However when I build the nuxt app, prisma can no longer…

### CASE-6060 · Fetching data in a setup script from an url that has ${variable} in the url is not possible.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍2 💬10 · closed · labels: 3.x/workaround available/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.8 15:57:24 RootDir: /home/projects/nuxt-starter-si1vu3 15:57:27 Nuxt project info: 15:57:27 ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link]].vue,pages%2F[...slug].vueexampl%2Ce Test url: [link] ### Describe the bug I expect it to be possible to use: ``` const { data: blok, pending, refresh, } = await useAsyncData(() => $fetch(…

### CASE-6064 · Async imports with variables throw error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, webpack, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.16.0` - Nuxt Version: `3-3.0.0-27237303.6acfdcd` - Package Manager: `npm` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug Using dynamic imports with variables throw error. Example ``` <script setup lang="ts"> import { defineAsyncComponent } from 'vue'; const name = 'test'; const componentId = defineAsyncComponent( () => import(`./components/${name}.vue`) ); </script> ``` Error ``` Error [Vue warn]: Unhandled…

### CASE-6094 · Devops: Ops should be able to configure nuxt as easily as Dev. 'nuxt dev' works but 'nuxt build' doesn't. process.env.SOME_LIB_VAR
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: linux, nuxt
- **Signals**: 👍1 💬9 · closed · labels: 🛠️ dx/nitro
- **Excerpt**: ### Environment Develop on linux. Configure with .env file. Made famous by the dotenv module. Which copies contents to process.env. Deploy on kubernetes. Which configures pods through environment variables Which nodejs copies to process.env. Except for 'nuxt build' which ignores them. Now Ops can't configure what Dev configured. ### Reproduction 1. Develop your nuxt project for months, running 'nuxt dev', 2. Configured it a file called .env - like the dotenv module uses to copy contents to process.env 3. Run 'nuxt build' 4. Create a docker image to run in production 5. Configure with…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-6020 · Nuxt/Vue lifecycle data load mismatch in layout and page components
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1, P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬10 · closed · labels: 📚 documentation
- **Excerpt**: ### Environment Nuxt version 3.17.5 ### Reproduction Playground: [link] There you can see the hydration problem, and also visually you can see how the data in the \<pre\> tag is flickering. This is precisely because on the server the data `settings`, when the TheHeader component is executed, is empty. ![Image]([link]) ### Describe the bug The problem is that I have a layout that contains TheHeader component. However, the request to get data for the header theme is in the page component. And it turns out that the data for the header is not substituted into TheHeader component, which is in the…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6030 · Build issue: Lexical.node.mjs not found, only Lexical.prod.mjs present
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬10 · closed · labels: 3.x/workaround available/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v20.15.0 - Nuxt Version: - - CLI Version: 3.12.0 - Nitro Version: - - Package Manager: unknown - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction I'm using Nuxt and Lexical.js and I'm trying to build the project with the nuxt build command. After this, my dependencies are placed in the .output/server/node_modules folder in a compiled form. However, when running the built project, Nuxt requests the Lexical.node.mjs file, while only Lexical.prod.mjs is present in the folder. The package.json…

### CASE-6035 · NuxtLayout breaks v-model behaviour when used after any async statement
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, modules - Runtime Modules: @user/[email] - Build Modules: - ### Reproduction Checkout the project on Stackblitz: [[link]]([link]) The input value should be 2, but it remains 1 if you remove the async statement or NuxtLayout, everything will be fixed. ### Describe the bug It seems something happens in NuxtLayout that breaks v-model behavior *before mount* and prevent it from updating the value of…

### CASE-6072 · Form component added directly to layout + Netlify forms not playing well together
- **Principles**: P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍0 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) [[link]]([link]) (View browser console) ### Steps to reproduce 1. Deploy the provided repository to Netlify 2. Go to the link 3. Watch it crash and burn (Open browser console) ### What is expected ? Nuxt should work with [Netlify forms]([link]) properly ### What is actually happening? When adding `data-netlify="true"` to a form, the app crashes. I believe this happens only when using components within layouts. Doesn't happen when components are placed in pages. ### Additional comments? I'm not sure whose fault this is: Nuxt's…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6044 · Slow nuxt build of nitro on code changes when use DB
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, tailwind, vue
- **Signals**: 👍0 💬10 · closed · labels: 3.x/pending triage/nitro
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.7.1 - CLI Version: 3.8.1 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: alias, app, colorMode, css, dayjs, devtools, experimental, i18n, image, modules, nitro, pwa, runtimeConfig, security, spaLoadingTemplate, ssr, tailwindcss, viewport, vueEmail - Runtime Modules: @user/[email], @user/[email]-rc.1, @user/[email], @user/[email]-rc.4, @user/[email], @user/[email], @user/[email], @user/[email], [email], [email], [email], [email], vue-email/nuxt - Build Modules: - ### Reproduction…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-6075 · page does not scrollToTop on route change if the layout is also changing
- **Principles**: P-D4, P-F1, P-F5 · **Env**: nuxt
- **Signals**: 👍2 💬10 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.1.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Go to repo link. 2. Scroll all the way down and click on link. 3. Notice you are on a new page but at the bottom of the page ### What is expected ? Should be at the top of the page ### What is actually happening? You are at the bottom of the page <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c7941">#c7941</a>)</em></sub></div>

