# Case Chunk 050 — Round 50

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5901 · Issue with template styles not unmounting on programmatic navigation
- **Principles**: P-F5, P-H3 · **Env**: nuxt, bootstrap
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: Hi, I found a behaviour, that I think could be a bug of some sorts. I'm building quite a large site using Nuxt, and using different CSS frameworks for the client frontend and admin backend: Foundation in the front, Bootstrap in the back. Sort of a CSS framework mullet :) All the frontend pages are using "frontend" layout, everything in the backend is using "admin" layout. When performing standard navigation from the frontend to admin (or reveresed) everything works just fine. However, if you navigate _programatically_ to a page using another template (using either `$router.push` or…

### CASE-5944 · loading.throttle doesn't seem to work
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Go to link Slow down network (either delay 10s or change profile to 1k/sec up/down) notice the second you click About button, the progress bar shows, even though throttle is set to 5000 ### What is expected ? Per documentation, progress bar shouldn't show until throttle is expired ### What is actually happening? Progress bar is shown right away <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link]…

### CASE-5971 · production memory leaks since version 3.6.1
- **Principles**: P-F5, P-H3 · **Env**: opera, nuxt
- **Signals**: 👍2 💬11 · closed · labels: 3.x/🐛 bug/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.17.1 - Nuxt Version: 3.7.1 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction The problem is that this bug only occurs on our staging / production environment. In our development we cannot reproduce the memory leak. Also recreating this in a minimal environment, is not possible because i cannot share access to our staging. I hope to get some more insights, when more information is provided. I can provide the heap snapshots…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5902 · Multiline CSS selectors do not work correctly with ssr
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: I use a lot of CSS classes and I like long, descriptive class names, thats why I sometimes end up with multi line class names: ```html <div class=" o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@user"> </div> ``` It seems that the server renderer can't handle those new line separated classes: <img width="808" alt="bildschirmfoto 2017-11-14 um 18 08 50" src="[link]> As soon as I trigger client side rendering, everything looks fine again: <img width="273" alt="bildschirmfoto 2017-11-14 um 18 11 10" src="[link]> Is there something I can do about this or is this…

### CASE-5908 · Hydration does not work after upgrading to 4.1.3
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite, vue, typescript
- **Signals**: 👍2 💬12 · closed · labels: pending triage
- **Excerpt**: ### Environment `- Operating System: `Darwin` - Node Version: `v24.9.0` - Nuxt Version: `4.1.3` - CLI Version: `3.28.0` - Nitro Version: `2.12.7` - Package Manager: `[email]` - Builder: `vite` - User Config: `debug`, `devServer`, `future`, `esbuild`, `optimization`, `vue`, `srcDir`, `components`, `devtools`, `features`, `app`, `builder`, `experimental`, `typescript`, `dev`, `ssr`, `dir`, `imports`, `alias`, `ignore`, `build`, `optimizeDeps`, `runtimeConfig`, `css`, `modules`, `icon`, `unocss`, `googleFonts`, `piniaPersistedstate`, `nitro`, `elementPlus`, `image`, `hooks`, `compatibilityDate`…

### CASE-5915 · Build size increase 7x after upgrading nuxt from 3.5.3 to 3.11.2
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍1 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment npx nuxi info ### Reproduction We statically generated same site on both of the version, there are not much of the changes that can imcrease the build size from 110MB to 700+MB. site url : [link] **with nuxt 3.5.3** <img width="264" alt="3 5 3" src="[link] framework]/assets/75368987/4c08f06f-9cf2-4e92-b0cb-a3746372f4ed"> site url : [link] **with nuxt 3.11.2** <img width="267" alt="3 11 2" src="[link] framework]/assets/75368987/2d5e8c6b-ca81-4c06-a5a1-50f52af687c4"> ### Describe the bug After upgrading Nuxt from version 3.5.3 to 3.11.2, after running: `nuxi generate` the size…

### CASE-5921 · Query parameters with ssr response
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Operating System: Linux Node Version: v16.20.0 Nuxt Version: 3.6.0 Nitro Version: 2.5.1 Package Manager: [email] Builder: - User Config: - Runtime Modules: - Build Modules: - ### Reproduction [Stackblitz demo with query parameter]([link]) [link] Notice the query parameters are part of the NUXT_DATA script <img width="797" alt="image" src="[link] framework]/assets/41701284/a77c3ed0-b7c2-4a45-a350-48dc2de0741c"> ### Describe the bug I am using a proxy cache server to add some query parameters before a request is sent to nuxt server. These query parameters are being returned in…

### CASE-5926 · Hello, help me see what's going on here? How to solve it
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ![image]([link]) ### Reproduction ERROR Cannot read property 'name' of undefined ### Describe the bug ERROR Cannot read property 'name' of undefined ### Additional context _No response_ ### Logs _No response_

### CASE-5927 · dynamic import file load twice in build mode
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/⚡ performance
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ``` npm run build npm run preview ``` Open `/third` page reload page (SSR load) and see DevTools -> Network, static_file loaded twice. ### Describe the bug dynamic imports in application hooks load file twice in build mode with SSR. In SPA and/or dev mode all works correct <img…

### CASE-5929 · NuxtWelcome is present in build
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v18.6.0` - Nuxt Version: `3.1.1` - Nitro Version: `2.1.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias`, `extends` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Didn't manage to reproduce on [link] ### Describe the bug Component [NuxtWelcome]([link]) uses nowhere. But it is present in build. <img width="1785" alt="image" src="[link]> <img width="1790" alt="image" src="[link]> ### Additional context _No response_ ### Logs _No…

### CASE-5933 · deploy to netlify using github actions
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬12 · closed · labels: 📚 documentation/3.x/nitro/upstream
- **Excerpt**: ### Describe the bug While fetching the data from the github repo, it is working good, but if i make my own github action with all required information, it is not building nuxt3 `dist` folder. As per nuxt3 netlify docs: [link] It is not detecting the netlify environment while building. ### Steps to reproduce 1. Run `git clone [link] 2. Check the github actions: `.github/workflows/netlify.yaml` & `netlify.toml` file 3. Try to push it and the action fails with this error message. ![image]([link]) ### Configuration ```toml [dev] command = "sleep 999999999" framework = "#custom" functions =…

### CASE-5934 · Types for defineNuxtPlugin and nuxtApp
- **Principles**: P-A3, P-H1 · **Env**: nuxt, typescript
- **Signals**: 👍2 💬12 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment IDE PhpStorm 2021.3.3 $ tsc --version Version 4.6.3 "name": "nuxt3", "version": "3.0.0-27484505.9f6eff7", "repository": "nuxt/framework", ### Reproduction I created this stackblitz but I can't quite get the `"strict": true` to work 😣 [link] ### Describe the bug TS7022: 'plugin' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer. ![image]([link]) ### Additional context What is the recommended way to type a plugin so that nuxtApp is fully typed? e.g. ```typescript import type { NuxtApp } from…

### CASE-5936 · Exports is not defined in ES module scope
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍20 💬12 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v17.0.1` - Nuxt Version: `3.0.0-27258294.bdbfa36` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `vite`, `css` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug After updating to version `3.0.0-27258294.bdbfa36` I am unable to start the project. In my browser: ![image]([link]) ### Reproduction The problem is in my current project but also in a newly created one, so I'm not sending my repo. I also tried to create new project on node…

### CASE-5938 · Auto add `.nojekyll` to `.output/public` on generate for Github Pages hosting
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, webpack, vue
- **Signals**: 👍0 💬12 · closed · labels: ✨ enhancement/3.x/workaround available/upstream/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `2.15.8` - Nitro Version: `-` - Package Manager: `[email]` - Builder: `webpack` - User Config: `target`, `router`, `head`, `loading`, `css`, `plugins`, `components`, `buildModules`, `modules`, `toast`, `image`, `content`, `styleResources`, `eslint`, `stylelint`, `generate`, `build` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]`, `vue-toastification/nuxt`, `@user/[email]` - Build Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`…

### CASE-5940 · Code splitting broken with latest nuxt version
- **Principles**: P-A3, P-H1 · **Env**: nuxt, webpack
- **Signals**: 👍0 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: ### Versions - nuxt: latest - node: as in sandbox ### Reproduction This sandbox has various webpack analyze "dumps" in /static -> this is the working one [link] If you run yarn build -a you should find the analyze as in dump6 Once you run yarn upgrade nuxt in this sandbox: [link] you get a nice all in one bundle. ### What is Expected? Proper code splitting like here: ![image]([link]) You'll see that "BModal" suddenly appears in the app-chunk and not in the foo/bar chunk anymore. The same for the error component. ### What is actually happening? Pretty much no code splitting at all:…

### CASE-5943 · Application startup file of Nuxt js on node js cpanel
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: I created a setup node js app in the cpanel, I'm using namecheap hosting then I copy my project to the application root /home/marcubcd/my-website. My question is what will be my application startup file I try to use the nuxt.config.js but is not working here the screenshot I hope that there will be an answer. ![image]([link]) I look mydomain.com result ![image]([link]) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c9139">#c9139</a>)</em></sub></div>

### CASE-5947 · req.headers producing error - Cannot read property 'headers' of undefined
- **Principles**: P-A3, P-H1 · **Env**: ios, vue, nuxt
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: I am using vue-i18n in my project. the issue is when i am loading the page. below codes are able to fetch cookie data but again it producing nuxt error. I tried putting try..catch, (process.server) but no one worked. Because if this, now axios is not working. ![image]([link]) code which i am using - **in plugin/i18n.js** ``` import Vue from 'vue'; import VueI18n from 'vue-i18n'; Vue.use(VueI18n); export default ({ app, store, req }) => { console.log('plugins') var cookies = req.headers.cookie var KeyNameLocale = "locale=" var decodedCookie = decodeURIComponent(cookies) console.log('cookie')…

### CASE-5955 · event .stop or .prevent dont work on production build
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬11 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v24.7.0` - Nuxt Version: `4.2.1` - CLI Version: `3.30.0` - Nitro Version: `2.12.9` - Package Manager: `[email]` - Builder: `-` - User Config: `modules`, `devtools`, `css`, `routeRules`, `experimental`, `compatibilityDate`, `eslint`, `heyApi` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction Try in pnpm dev. it works Not in production build ### Describe the bug Using Nuxt UI ChatPromptSubmit: <img width="794"…

### CASE-5956 · useAsyncData watch option is broken?
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, vue, react
- **Signals**: 👍0 💬11 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v22.17.0 - Nuxt Version: 4.1.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.5 - Package Manager: [email] - Builder: - - User Config: modules, components, css, runtimeConfig, dir, compatibilityDate, vite, eslint, fonts, image - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug When use useAsyncData at [...slug].vue and watch for route change, watch prop in useAsyncData doesn't react to ref value change (when navigating and fullPatch changes)…

### CASE-5961 · reactive props destructure with default values doesn't work
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, react, nuxt, vue
- **Signals**: 👍4 💬11 · closed · labels: workaround available/🐛 bug/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.13.1 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug Defining props with default value using the new vue 3.5 props destructure is compiled differently in nuxt. In the [vue playground (vue3.5.1, SSR)]([link]): ![image]([link]) ```js /* Analyzed bindings: { "foo": "props" } */ import { defineComponent as _defineComponent } from 'vue' const __sfc__ =…

### CASE-5962 · v-html and dynamic component not working server-side
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, typescript
- **Signals**: 👍0 💬11 · closed · labels: pending triage/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.14.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, future, srcDir, typescript, runtimeConfig, modules, components, image, directus, imports, devtools, i18n, css, postcss, eslint - Runtime Modules: @user/[email], @user/[email]-alpha.1, [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Not needed ### Describe the bug When using dynamic component + v-html the content is…

### CASE-5965 · useRoute is considered as any by typescript-eslint with unplugin-vue-router
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, typescript, vue, nuxt, vite
- **Signals**: 👍1 💬11 · closed · labels: types/3.x/pending triage/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.11.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.5 - Package Manager: [email] - Builder: - - User Config: build, components, content, devtools, experimental, image, modules, runtimeConfig, typescript, vite - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug In a Nuxt project that has enabled the experimental `typedPages`, `typescript-eslint` considers `useRoute` to be a…

### CASE-5966 · Warnings at build time [x] referenced in [y] didn't resolve at build time, it will remain unchanged to be resolved at runtime
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍14 💬11 · closed · labels: 3.x/🛠️ dx/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.0 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools, css - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug After upgrading to 3.11, the build log is filled with messages like: > [x] referenced in [y] didn't resolve at build time, it will remain unchanged to be resolved at runtime This is introduced when using images from the public folder in styles.…

### CASE-5978 · useHead is not overwriting the head of nuxt.config
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `windicss`, `build`, `buildModules`, `modules`, `experimental`, `components`, `vite`, `runtimeConfig`, `vueuse` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]`, `[email]` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction <img width="566" alt="Captura de Tela 2023-03-24 às 15 12 13" src="[link]> <img width="566"…

### CASE-5986 · cannot send FormData in `$fetch` body
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬11 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Operating System: Windows 10 Node Version: v14.16.1 Nuxt Version: 3.0.0-rc.08 Builder: vite Runtime Modules: - Build Modules: - ### Reproduction - Create a new nuxt3 project ( doesn't matter if you are using rc10 ) - Create a new simple component to upload an image - Put in the component an input type file like as follows : `<input type="file" id="file-input" multiple @user="onInputChange" />` - Add a script tag and create a new method `onInputChange` like this : ```` onInputChange (e) { const file = e.target.files await $fetch('/api/uploadFile', { method: "POST", body: {…

### CASE-5996 · Runtime.ImportModuleError - Error: Cannot find module 'server' Require stack: - /var/runtime/index.mjs
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment Netlify preview, branch and production ### Reproduction When you create a new deployment on netlify it returns: <img width="859" alt="image" src="[link]> There are numerous others complaint about it on Netllify, but Netlify points towards Nuxt [link] ### Describe the bug <img width="859" alt="image" src="[link]> ### Additional context _No response_ ### Logs _No response_

### CASE-5998 · Nuxt app is not recompiling in Docker container on Windows in dev mode
- **Principles**: P-A3, P-H1 · **Env**: windows, linux, nuxt, desktop
- **Signals**: 👍4 💬11 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Versions - nuxt: ex: v2.15.3 - node: lts-alpine docker image (Currently Node 14.16) ### Reproduction Code is here: [link] It is a pretty simple version of the blog with nuxt example, based on the nuxt content example. [link] The only differences really should be some upgraded versions, my own amateurish styling, and content. I took that I added a Dockerfile, Dockerfile.dev and docker-compose.yml all of which are pretty simple and work great on my linux desktop. When it try to do development on my windows laptop and run docker-compose up and I go into the associated container. I can see…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5903 · Error building Scss
- **Principles**: P-E1, P-E2, P-E4 · **Env**: ubuntu, nuxt, vue
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: Hello, I am trying to compile my project the last version of Nuxt (I was using alpha5) and I am getting Error with Scss special chars. I am using node 6.11 and Ubuntu 16.04 Here is the error message on the console : It refers to the contents of scss import within a Vue page ``` Error : Module build failed // the error points the @ behind import @user "~/assets/css/SCSS_partials/variables"; ``` // nuxt.config.js extract ``` css: [ // SCSS file in the project '@/assets/css/main.scss' ] ``` What should I do to make it works ? Many thanks Matthieu <!--cmty--><!--cmty_prevent_hook--> <div…

### CASE-5906 · Global SASS loading not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: I tried to follow the guide from [link] ``` // file: nuxt.config.js css: [ { src: '~assets/style/vars.sass', lang: 'sass' }, ] ``` But I'm getting `Undefined variable..`. or `No mixing named...` over and over again <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c697">#c697</a>)</em></sub></div>

### CASE-5911 · Cloudflare Pages environment (Bindings/Secrets) not available on SSR api requests made with useAsyncData/$fetch but works with useFetch
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍4 💬12 · open · labels: 📚 documentation/good first issue/nitro
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.10.0` - Nuxt Version: `3.15.0` - CLI Version: `3.17.2` - Nitro Version: `2.10.4` - Package Manager: `[email]` - Builder: `-` - User Config: `default` - Runtime Modules: `[email]` - Build Modules: `-` ### Reproduction Repo: [link] Deployment on Cloudflare Pages: [link] ### Describe the bug After deploying the project to Cloudflare Pages, the Cloudflare data (Bindings, Variables, etc) are NOT injected on server event.context when making a request to the server/api with `useAsyncData/$fetch`. However, the data IS available when…

### CASE-5912 · [cloudflare pages] environment variables not loaded with nodejs_compat flag
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍0 💬12 · closed · labels: pending triage/nitro
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.10.0 - Nuxt Version: 3.13.2 - CLI Version: 3.14.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Deployed website: [link] Repo Nuxt Config: [link] <img width="193" alt="Screenshot 2024-09-26 at 9 03 36 PM" src="[link]> <img width="781" alt="Screenshot 2024-09-26 at 9 03 58 PM" src="[link]> <img width="721" alt="Screenshot 2024-09-30 at 11 05 35 PM" src="[link]> ### Describe the bug…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5904 · i18n example broken on server load
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: How to reproduce: download [link] framework].js/tree/dev/examples/i18n `yarn` and then any: ``` yarn dev ``` ```sh yarn generate hs -p 3000 dist/ ``` ```sh yarn build yarn start ``` and load [link] In all of the cases, the server will send the French html, but upon hydration it will silently (nothing in console) be replaced with English. Furthermore, the `active` `base state` in the Vue devtool will be ``` locales:Array[2] 0:"en" 1:"fr" locale:"fr" ``` while `$vm0.$i18n.locale` is `'en'`; <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a…

### CASE-5905 · Lib vue-picture-input not working with SSR
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬13 · closed · labels: 2.x
- **Excerpt**: Hi, I have a problem when I load a page directly from the server (not encountered when dynamically loaded) : ``` Nuxt.js Error: ReferenceError: File is not defined at Object.237 (PictureInput.vue:89:0) ``` from this component: [link] It seems that SSR is causing this, how to make an exception so it doesnt load it before the page is mounted? Thanks! <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c870">#c870</a>)</em></sub></div>

### CASE-5907 · route.params watchers don’t fire in page/children during (or right after) hydration when async setup is delayed
- **Principles**: P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍1 💬12 · closed · labels: pending triage/suspense
- **Excerpt**: ### Environment Operating System: Any Node Version: v24.9.0 Nuxt Version: 4.1.0 CLI Version: 3.29.3 Nitro Version: 2.12.7 Package Manager: [email] Builder: - User Config: - Runtime Modules: - Build Modules: - ### Reproduction **Steps:** 1. Start dev server. 2. Open either /first or /second and restart. 3. While the first page is still initializing, click the link to the other page. 4. Observe the console: App.vue logs the route param change, but the page component does not. [codeSandbox]([link]) ### Describe the bug When using a dynamic route pages/[pageType].vue and delaying hydration on the…

### CASE-5913 · Recent changes cause issues with client side Vue libraries using refs in composables
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.10.0 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, css, app, build, modules, nitro, runtimeConfig, serverHandlers, vite, devtools, postcss, compatibilityDate - Runtime Modules: @user/[email], @user/[email] - Build Modules: - ### Reproduction The private Vue library: - works fine when used in a Vue SPA application, e.g. [[link]]([link]) - works fine when used as a web component in a non Vue application, e.g. [link] - no longer works when used in a Nuxt…

### CASE-5914 · Broken Navigation in Nuxt 3.12.2 - Uncaught (in promise) TypeError: Cannot redefine property: __navigationId at Function.defineProperty (<anonymous>)
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍13 💬12 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, debug, runtimeConfig, devtools, modules, ui, css, app, supabase - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction After updating to 3.12.2 I noticed once in a while that error shows up. Seems to be related [to]([link] framework][ref]) ### Describe…

### CASE-5919 · The data type is not resolved in the component template when using useAsyncData witch $fetch method
- **Principles**: P-F4 · **Env**: opera, nuxt, typescript, vue, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v21.3.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: typescript, runtimeConfig, devtools, ssr, modules, features, vuetify, css, vite - Runtime Modules: [email], @user/[email], @user/[email] - Build Modules: - ### Reproduction ```vue <script lang="ts" setup> // data: Ref<{id: string, public: boolean}[] | null> const { data } = useAsyncData<{ id: string; public: boolean }[]>("/projects/", () => $fetch("/projects/")); // projects: globalThis.ComputedRef<{id:…

### CASE-5922 · After initializing the page that throws an error and navigating to other pages, the error view should disappear.
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Operating System: NixOS Node Version: v18.16.0 Nuxt Version: 3.6.5 Nitro Version: 2.5.2 Package Manager: [email] Builder: vite User Config: pages, typescript, stylus, app, modules, components, vite Runtime Modules: - Build Modules: - ### Reproduction [Stackblitz]([link]) [Github]([link]) ### Describe the bug **Reproduction:** 1. Go to the "Error page". 2. Reload the page. 3. Navigate to other pages. 4. The error view does not disappear. **Mandatory conditions:** - The `ssr` property in `nuxt.config.ts` must be set to false. - The `showError` function must be used in…

### CASE-5923 · layouts now require a single root node
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬12 · closed · labels: 3.x/workaround available/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.16.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: ssr, runtimeConfig, telemetry, css, modules, i18n, build, postcss, devtools, plugins - Runtime Modules: @user/[email], @user/[email]-beta.11, @user/[email], @user/[email], [email] - Build Modules: - ------------------------------ ### Reproduction Can't share the project (private company project) ### Describe the bug After the update the application won'y run, and I have this error on te console…

### CASE-5928 · Nuxt Deployment on Vercel Caches All API Requests
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.19.0` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `components`, `ssr`, `app`, `routeRules`, `nitro`, `css`, `build`, `modules`, `pwa` - Runtime Modules: `@user/[email]`, `()` - Build Modules: `-` ### Reproduction It can't be reproduced in a local environment. ### Describe the bug I faced this strange behavior that my login page didn't act correctly when I first deployed my app using Vercel. Then I realized Vercel caches my API requests, although it was a `POST`…

### CASE-5930 · useFetch is not using new value from reactive object
- **Principles**: P-F4 · **Env**: opera, react, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.11.0` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `runtimeConfig`, `nitro`, `modules` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Does not works as expected, the API call does not reflect a change in the ref. When `rfid` changes, the API call fired keeps using the old value. ``` const rfid = ref("Value1") rfid.value = "Value2" const { data, refresh } = await useFetch<IOrderPopulated[]>(…

### CASE-5931 · Going to a page with app.vue produces a "No match found for location with path "/"" error
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt project info: 21:31:25 ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.13-27769897.0f2ef5d` - Nitro Version: `0.6.0-27768582.4603279` - Package Manager: `[email]` - Builder: `vite` - User Config: `telemetry`, `ssr`, `runtimeConfig`, `nitro`, `app`, `css`, `modules`, `storyblok`, `postcss`, `vite`, `i18n` - Runtime Modules: `@user/[email]`, `[email]`, `@user/[email]-alpha.2` - Build Modules: `-` ------------------------------ ### Reproduction Here is a reproduction version of the issue: [link] ### Describe the…

### CASE-5935 · Production build + custom vue lib + ssr
- **Principles**: P-F4 · **Env**: opera, vue, nuxt, vite
- **Signals**: 👍12 💬12 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ``` npx nuxi info: ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27338323.1e98259` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ``` vue version `3.2.26` (same for nuxt project and vue lib) ### Reproduction [link] There are two projects: - `nuxt-project` - project to reproduce the bug commands to start project: - `yarn` - `yarn build && yarn start` - `ui-lib` - example of external lib. Also, it is published to npm as…

### CASE-5937 · Exports is not defined in ES module scope
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍8 💬12 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT - Windows 10 Pro, Version 21H1 (OS Build 19043.1288), WFEP 120.2212.3920.0` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-27248715.54549cf` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `srcDir`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug When using a third-party src folder (which is not the current folder) and when server rendering is enabled, an error 500 appears - `exports is not defined in ES module scope` ### Reproduction 1. run `npx…

### CASE-5941 · When importing a plugin on client side, mode: 'client' and ssr: 'false' aren't working
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create a plugin in plugins directory as VueApexCharts.js In that file: ``` import Vue from 'vue' import VueApexCharts from 'vue-apexcharts' Vue.use(VueApexCharts) ``` 2. In your nuxt.config.js file: ``` plugins: [ { src: '~/plugins/VueApexChart.client.js', mode: 'client' }, ], ``` Or Try: ``` plugins: [ { src: '~/plugins/VueApexChart.js', ssr: false }, ], ``` Or Try: plugins: [ { src: '~/plugins/VueApexChart.client.js'}, ], None of the methods for disabling ssr for a plugin mentioned in the…

### CASE-5942 · Nuxt + Vuetify production mode loading css late
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Grab the repo, build and run in production mode. Make sure to have the network tab open to disable cache. You can see as you refresh that some vuetify styles load late and the elements change. ### What is expected ? There should be no jump in style as they should be loaded already from nuxt SSR. ### What is actually happening? The styles seem to be loaded via javascript so you can see the elements jump. ### Additional comments? I have also tested this with the latest vuetify 2 beta, the problem still…

### CASE-5949 · Middleware on first load in static pages
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍1 💬12 · closed · labels: 2.x
- **Excerpt**: Middleware can depend on query string. Middleware runs once per navigation, wherever. This works wonderfully for first SSR load from a living server. However, when generating pages, `query` is always `{}`. So, when a static page is accessed with a query string (from another site, bookmarks, chat) the resulting page is as if there was no query string, since the middleware is pre-executed only. Hence, middleware depending on query is broken on static load. What should we do? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a>…

### CASE-5951 · v-html directive throws error if wrapper is other than `div` or `span`
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: Like the title says, when I put some html source via the `v-html:` directive I get an ugly error and warning ``` [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside \<p>, or missing <tbody>. Bailing hydration and performing full client-side render. ``` preceded by a supposedly list of mismatching elements (they do **not** mismatch after checking though). After losing like 2 hours on this I found I am not alone as seen on this [thread]([link]…

### CASE-5958 · Netlify build breaks due to compatibilityDate
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬11 · closed · labels: pending triage/nitro/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.13.1` - Nuxt Version: `3.15.3` - CLI Version: `3.20.0` - Nitro Version: `2.10.4` - Package Manager: `[email]` - Builder: `-` - User Config: `ssr`, `spaLoadingTemplate`, `modules`, `runtimeConfig`, `css`, `vite`, `googleFonts`, `vue`, `devtools` - Runtime Modules: `@user/[email]`, `@user/[email]`, `floating-vue/[email]`, `[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I updated my SPA app from Nuxt 3.6.5 to 3.15.3 and ran `nuxt dev`. I then got asked by the script "Do you want to update your…

### CASE-5959 · Id from `useId()` changes on hydration.
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍9 💬11 · closed · labels: upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.14.1592 - CLI Version: 3.16.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug Once I use `useAsyncData` in `app.vue` or some layout, `useId()` within child components return different Id's after hydration. As soon as I remove `useAsyncData`, everything works as intended. The error from the reproduction looks like this: ``` Vue warn]: Hydration text content mismatch on <div…

### CASE-5960 · Hydration attribute mismatch when you use `useId` inside a component and the page contains a `useAsyncData`
- **Principles**: P-F4, P-G4, P-E3 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍3 💬11 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.14.159 - CLI Version: 3.15.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug When you have a component that uses the `useId` hook, for example: ```vue <template> <label :for="id"> Label </label> <input :id="id" /> </template> <script lang="ts" setup> const id = useId(); </script> ``` and you use this component inside a page or another component that uses the `useAsyncData` hook, for…

### CASE-5964 · firebase deployment failed: @user/css-inline-darwin-arm64 EBADPLATFORM error
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage/nitro/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v21.6.2 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, ssr, modules, site, i18n, nitro, plugins - Runtime Modules: @user/[email], @user/[email], @user/[email]-rc.10 - Build Modules: - ------------------------------ ### Reproduction _No reproduction link_ ### Describe the bug I want to deploy my Nuxt 3 application to firebase hosting. When I run `firebase deploy` I get following error: ```bash Build failed with status:…

### CASE-5967 · `$fetch`: use `useRequestFetch()` when calling internal API during SSR
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍40 💬11 · open · labels: workaround available/nitro/🍰 p2-nice-to-have
- **Excerpt**: ### Describe the feature When having API routes in Nuxt with authentication (using H3 `useSession` or [nuxt-auth-utils]([link])), we need to forward the `cookie` to the API routes when fetching the data on SSR. ### Not working ```vue <script setup> const { data: teams } = await useAsyncData('team', () => $fetch('/api/teams') </script> ``` ### Working ```vue <script setup> const { data: teams } = await useAsyncData('team', () => useRequestFetch()('/api/teams') </script> ``` Or using `useFetch`: ```vue <script setup> const { data: teams } = await useFetch('/api/teams', { key: 'teams' })…

### CASE-5968 · Internal server error: URI malformed
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.16.0 - Nuxt Version: 3.7.1 - CLI Version: 3.8.1 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: ssr, build, routeRules, postcss, modules, i18n, app, runtimeConfig, css - Runtime Modules: @user/[email], @user/[email]-rc.4 - Build Modules: - ------------------------------ ### Reproduction [link]].vue Using: ip:3000/test?test=100% (Goes correct, no crashes) Using: ip:3000/test/?test=100% (Nuxt/Node crashes) In our opinion it should not crash. ### Describe the bug It…

### CASE-5970 · Accessing Nuxt composables inside useAsyncData after awaiting some other promise throws error: "A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function."
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.17.0 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: telemetry, ssr - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug ```vue <script lang="ts" setup> // ~/app.vue import { testUtilFunc } from "~/utils/someUtils"; const { error, data } = useAsyncData( "some-id", async () => { // It has to await an async function const message = await testUtilFunc(); /* returns Promise<"ok"> */ // Using any nuxt composable hereafter shall throw…

### CASE-5972 · Nuxt 3.7 - "Starting nuxt..." takes 20 seconds and after that devtools don't open with many errors
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, typescript, vite, tailwind
- **Signals**: 👍2 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt project info: 10:41:32 AM ------------------------------ - Operating System: Linux - Node Version: v18.14.2 - Nuxt Version: 3.7.0 - CLI Version: 3.7.0 - Nitro Version: 2.6.1 - Package Manager: [email] - Builder: - - User Config: ssr, runtimeConfig, modules, alias, serverDir, dir, components, imports, typescript, experimental, css, build, devtools, vite, tailwindcss, postcss, apollo - Runtime Modules: @user/[email], @user/[email]-alpha.6, @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When I run `pnpm run dev`…

### CASE-5974 · layers do not work with directories including a period/full stop (`.`)
- **Principles**: P-F4 · **Env**: opera, linux, windows, nuxt, vite
- **Signals**: 👍2 💬11 · open · labels: upstream/layers
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.17.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: extends, runtimeConfig, modules - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ - Operating System: Windows_NT - Node Version: v16.13.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: extends, app, quasar, devtools, ssr, devServer - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe…

### CASE-5976 · vite error: Rollup failed to resolve import "#internal/nitro" from "virtual:nuxt:C:/.../.nuxt/paths.mjs".
- **Principles**: P-F4 · **Env**: opera, windows, vite, nuxt, typescript
- **Signals**: 👍2 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment $ npx nuxi info Nuxi 3.6.2 RootDir: C:/.../nghnuxt3 Nuxt project info: ------------------------------ - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.6.2 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr, runtimeConfig, modules, css, build, typescript, hooks - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ The vite version is vite v4.3.9 and stays the same when runnin nuxt 3.6.1 or nuxt 3.6.2 ### Reproduction I have yet to reproduce this in a minimal reproduction. Fresh nuxt 3.6.2…

### CASE-5980 · SSR & Await (directus example)
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.17.1` - Nuxt Version: `3.1.0` - Nitro Version: `2.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction ([link]) Create directus plugin ```js import { BaseStorage, Directus } from '@user/sdk' import { useAuth } from '~~/store/auth' // Make sure you review the Directus SDK documentation for more information // [link] export default defineNuxtPlugin(async (nuxtApp) => { const { directusUrl }…

### CASE-5981 · deploy nuxt 3 on plesk
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍5 💬11 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment ssr ### Reproduction null ### Describe the bug how can I deploy Nuxt 3 on Plesk? there is no guide on the official site for deploying on Plesk plz give me a step-by-step guide to deploy Nuxt 3 on Plesk. ### Additional context _No response_ ### Logs _No response_

### CASE-5982 · Component setup runs before router middleware is resolved
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬11 · closed · labels: 3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v18.12.0` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `vite`, `modules`, `i18n` - Runtime Modules: `@user/[email]`, `@user/[email]-beta.1` - Build Modules: `-` ------------------------------ ### Reproduction ```js // middleware/auth.global.js export default defineNuxtRouteMiddleware(async (to)=> { if (process.client) return const app = useNuxtApp() const event = app.ssrContext.event const accessToken =…

### CASE-5984 · Meta tags show in browser but don't work
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `target`, `css`, `modules`, `runtimeConfig`, `sanity`, `meta`, `sitemap` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I have added meta tags to the nuxt.config.ts. These data can be see when viewing the head from the elements, but when trying to validate they are working, I get errors say no description etc.…

### CASE-5985 · navigateTo causes hydration errors from route middleware (client only)
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍4 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug When loading the app from server side, any `navigateTo` called in a **route middleware** client side will likely cause **hydration errors**. Hydration hasn't kicked in yet when the app is redirected to another page, so the DOM structure can be really…

### CASE-5987 · Tailwind CSS not included in `<head>` in HTML in Production (GitHub Pages)
- **Principles**: P-F4 · **Env**: opera, windows, tailwind, nuxt, vite, typescript
- **Signals**: 👍2 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxi 3.0.0-rc.9 14:05:20 RootDir: C:/Websites/songuessr 14:05:23 Nuxt project info: 14:05:23 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `target`, `modules` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When running `nuxt dev`, the styles **are working** as expected. However, when deploying to GitHub Pages, the CSS is not even included in the…

### CASE-5988 · Nuxt3 Docker Building EACCES Error
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `css`, `modules`, `build`, `vite`, `runtimeConfig`, `app` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction - Use docker file: ```docker # Build FROM node:lts-alpine as builder # ENV NODE_ENV production WORKDIR /home/node COPY package*.json ./ RUN npm install COPY . . RUN npm run build # Run FROM node:lts-alpine as prod ENV NODE_ENV…

### CASE-5992 · Uncaught ReferenceError: Buffer is not defined
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.4 00:36:31 RootDir: /nuxt3-app 00:36:33 Nuxt project info: 00:36:33 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias`, `publicRuntimeConfig`, `srcDir`, `dir`, `css`, `buildModules`, `meta`, `generate`, `ssr`, `vite` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]` ------------------------------ 👉 Report an issue: [link] 00:36:33 👉 Suggest an improvement: [link] 👉 Read documentation: [link] ###…

### CASE-5995 · nuxi build Could not load server.mjs
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬11 · closed · labels: 3.x/🐛 bug/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.0` - Nuxt Version: `3.0.0-27257216.f5aea9f` - Package Manager: `npm` - Bundler: `Vite` - User Config: `css`, `build`, `srcDir`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug When I run the command `nuxi build` or `npm run build` I get the error message: ERROR Rollup error: Could not load .../.nuxt/dist/server/server.mjs (imported by node_modules/@user/nitro/dist/runtime/app/render.mjs): ENOENT: no such file or directory, open…

### CASE-5997 · Hydration of components with fetchHook in the layout scope will fail
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬11 · closed · labels: pending triage/2.x
- **Excerpt**: Thank for the good work guys. We really enjoy using Nuxt In a lot of our web projects. Short description: If components are used outside of the page scope (i.e. inside a layout) a component with a fetch method will miss it's data-fetch-key attribute in html coming from the server-side. That's why the client-side hydration will fail, resulting in an error. We are using some asynchronously fetched content inside the `<header>` of the page. This `<header>` is used inside the layout, not the page. This bug occurs only after updating from Nuxt 2.14.6 to 2.15.3! Everything was working fine before…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5909 · Nuxt 4.1.1: Nuxt Build Error: [nuxt:tree-shake-composables:transform] Cannot split a chunk that has already been edited
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, typescript
- **Signals**: 👍22 💬12 · closed · labels: good first issue/pending triage/possible regression
- **Excerpt**: I got build error after upgrade to nuxt `4.1.1` ``` Nuxt Build Error: [nuxt:tree-shake-composables:transform] Cannot split a chunk that has already been edited ``` After debugging, i found that the affected parts are normally arrow functions (either `async` or not) passed into `onMounted` Like ```typescript onMounted(() => { // Do something }) // this would cause error when run build ``` Then i had to fix it with ```typescript function doSomething() {} onMounted(doSomething) ``` Then the build works again! I think this might be a bug, it could be something inside the arrow function caused the…

### CASE-5910 · Scroll behaviour timing is not properly aligned to page transition duration
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍4 💬12 · closed
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.20.7` - Nuxt Version: `3.17.4` - CLI Version: `3.25.1` - Nitro Version: `2.11.12` - Package Manager: `[email]` - Builder: `-` - User Config: `app`, `compatibilityDate`, `devtools`, `site`, `css`, `ssr`, `modules`, `ogImage`, `seoExperiments`, `linkChecker`, `fonts`, `image`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `lenis/[email]` - Build Modules: `-` ### Reproduction Follow the documentation to apply page transitions: [link] Add this to your nuxt.config.ts file: ``` export default…

### CASE-5916 · scroll jump & visibility issue with page transitions
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, nuxt, typescript
- **Signals**: 👍8 💬12 · closed · labels: pending triage/pages
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v21.6.1` - Nuxt Version: `3.10.3` - CLI Version: `3.10.1` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `nitro`, `modules`, `svgo`, `image`, `googleFonts`, `alias`, `app`, `typescript`, `devtools`, `devServer` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When transitioning between pages the scroll position is reset which is expected. However…

### CASE-5918 · Will accessing the homepage load CSS and JavaScript files from other sub pages?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, tailwind, vue
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment "devDependencies": { "@user/nuxt": "^1.4.1", "@user/nuxt": "^1.0.7", "@user/auto-animate": "^0.8.1", "@user/ui-pro": "^0.7.5", "@user/color-mode": "^3.3.2", "@user/device": "^3.1.1", "@user/tailwindcss": "^6.11.2", "@user/nuxt": "^1.2.0", "@user/nuxt": "^0.5.1", "@user/tween.js": "^23.1.1", "@user/three": "^0.161.2", "ant-design-vue": "^4.1.2", "dayjs-nuxt": "^2.1.9", "element-plus": "^2.5.3", "jwt-decode": "^4.0.0", "mqtt": "^5.3.5", "nuxt": "^3.10.1", "pinia": "^2.1.7", "three": "^0.161.0", "vue": "^3.4.14", "vue-router": "^4.2.5" }, ### Reproduction I will enter the…

### CASE-5920 · transform `navigateTo` in `<script setup>` to provide an early return
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍20 💬12 · open · labels: 🛠️ dx/🍰 p2-nice-to-have
- **Excerpt**: ### Environment Nuxt project info: 1:53:15 PM ------------------------------ - Operating System: Linux - Node Version: v20.5.1 - Nuxt Version: 3.7.3 - CLI Version: 3.8.4 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: devServer, vite, nitro, build, devtools, modules, css - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction see [link] ``` <script setup lang="ts"> await navigateTo("/a") await navigateTo("/b") </script> ``` expected: navigate to /a and stop there observed: navigate to /a and then to /b/ and stop at /b…

### CASE-5924 · `Unknown component mode: null` after upgrading to Nuxt `v3.4.3`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, vite
- **Signals**: 👍6 💬12 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.15.0` - Nuxt Version: `3.4.3` - Nitro Version: `2.3.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug After upgrading to Nuxt `v3.4.3` I get the following error: ```shell ERROR Internal server error: Unknown component mode: null, this might be an internal bug of Nuxt. Plugin: nuxt:components:imports File: /Users/.../assets/placeholder.svg?component at TransformContext.transform…

### CASE-5932 · useRuntimeConfig() is not work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `vite`, `publicRuntimeConfig`, `plugins`, `meta`, `build`, `buildModules`, `pageTransition`, `vueuse`, `strapi`, `i18n` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]-alpha.0` ------------------------------ ### Reproduction ``` // nuxt.config.ts publicRuntimeConfig: { CDN_URL: process.env.CDN_URL, }, // app.vue…

### CASE-5945 · JavaScript hooks transition - a bug on pages?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: I think there is a bug in Nuxt 2.4.x in transition. Example in about.vue template: ``` <transition appear //---> this never work v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:leave="leave"> .... </transition> ``` In script: ``` transition: { mode: 'out-in', css: false, beforeEnter (el) { console.log('before in transition object') // works }, enter (el, done) { console.log('enter in transition object') // works }, afterEnter (el) { console.log('after enter in transition object') // works }, leave (el, done) { console.log('leave in transition object') //…

### CASE-5953 · appear property on transition object not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: i just noticed the appear property on the transition object doesn't seem to work. and is missing in the docs. is it not implemented or only missing in the docs and i'm doing something wrong and that makes it not work. ``` export default { transition: { appear: true, css: false, mode: 'out-in', enter (el, done) { done() } } } ``` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c487">#c487</a>)</em></sub></div>

### CASE-5963 · onUploadProgress on $fetch
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.12.2 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: app, routeRules, runtimeConfig, css, colorMode, googleFonts, ssr, devtools, ignore, modules, build, dayjs, auth - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/auto-animate/[email], @user/test-utils/[email], floating-vue/nuxt, @user/[email] - Build…

### CASE-5977 · Transforming JavaScript decorators to the configured target environment ("es2019") is not supported yet
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍4 💬11 · closed · labels: 3.x/🐛 bug/nitro/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.20.0` - Nuxt Version: `3.6.0` - Nitro Version: `2.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias, nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug im experiencing an issue where the TypeScript compiler cant transform JavaScript decorators to the "es2019" target environment, despite correctly setting up the tsconfig.json with experimental decorators enabled. This problem just started recently, while the project was previously working fine. ### Additional…

### CASE-5983 · `page:start` hook isn't called on every page or layout transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍3 💬11 · closed · labels: pending triage
- **Excerpt**: ### Environment Noticed that opacity property doesn't change over page transition in NuxtLoadingIndicator. Simple logging `page:start` hook callback showed that it doesn't get called when you move from page to page (only `page:finish` does) It happens only with dynamic layouts (more then 1). If you remove layouts from the project, NuxtLoadingIndicator works as expected**** ### Reproduction [Layout Reproduction]([link]) - click around the pages you'll notice odd behavior of the NuxtLoadingIndicator ### Describe the bug Seems like `page:start` hook acts oddly with dynamic layouts (from the…

### CASE-5989 · Error transforming file.vue: v-model can only be used on <input>, <textarea> and <select> elements. Custom webcomponents not working with v-model
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: opera, linux, vue, nuxt, vite, typescript
- **Signals**: 👍1 💬11 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v18.7.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `vue`, `modules`, `formkit`, `vite`, `buildModules` - Runtime Modules: `./modules/sdx`, `@user/[email]-beta.9` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction #### Codesandbox [Reproduction link]([link]) #### Manual Reproduction 1. Create a nuxt project 2. Create a new `.vue`file 3. Add a custom input webcomponent (mine is from a stenciljs library, Note: the…

### CASE-5994 · ERROR [worker] Cannot read properties of undefined (reading 'getSSRProps')
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt, vite, vue, desktop
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27406801.569aaeb 10:01:04 RootDir: /Users/andreyleonov/Desktop/SS 10:01:05 Nuxt project info: 10:01:05 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27406801.569aaeb` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `vue`, `privateRuntimeConfig`, `publicRuntimeConfig`, `css`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction ``` export default defineNuxtConfig({ vue: { compilerOptions: { directiveTransforms: { motion: () => ({ props:…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5917 · "The stylesheet was not loaded because its MIME type" error in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, nuxt
- **Signals**: 👍3 💬12 · closed · labels: 3.x/pending triage/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.10.2 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction 1. Create a new Nuxt project with the `pnpm dlx nuxi@user init <project-name>` command. 2. Start the dev server with `pnpm run dev`. 3. Open the Nuxt site in Firefox, my version is: 122.0.1 (64-bit). ### Describe the bug When you open the Nuxt site in Firefox for the first…

### CASE-5939 · Not scrolling to top on navigation (Firefox, scroll-behavior: smooth)
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: firefox, nuxt, vue
- **Signals**: 👍2 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: ### Minimal reproducible code example + repository: [link] <br> + `package.json`: ```json { "scripts": { "dev": "nuxt" }, "dependencies": { "core-js": "3.15.2", "nuxt": "2.15.7" } } ``` <br> + `nuxt.config.js`: ```js export default { // Target: [link] target: 'static', // Auto import components: [link] components: true, } ``` <br> + `layouts/default.vue`: ```vue <template> <Nuxt /> </template> <style> :root { scroll-behavior: smooth; /* <== IMPORTANT */ } </style> ``` <br> + `pages/index.vue`: ```vue <template> <div> <MyComp></MyComp> <NuxtLink to="/other-page/">Other Page</NuxtLink> </div>…

### CASE-5946 · [edge] [nuxt] Error while initializing app DOMException
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, nuxt
- **Signals**: 👍0 💬12 · closed · labels: pending triage/2.x
- **Excerpt**: _**Edit:**_ I solved the problem you can find the solution in this comment [link] framework].js[ref][ref] ### Version [2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Go to the reproduction link 2. Login with username: `public` and password: `not` 3. Check Dev-Tools console ### What is expected ? The website should render fine and it should play the video. ### What is actually happening? It throws an error in the console. ### Additional comments? I tried to upgrade my nuxt version to 2.0 and I get the following error: ``` [nuxt] Error while initializing app…

### CASE-5948 · Keep-alive with nuxt-child only not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍1 💬12 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce I want some of the pages to have keep-alive ( like 1 or 2). So i tried to use it with nuxt-child. [link] [link] E.g. <nuxt-child keep-alive/> And i see that activated\deactivated got triggered fine for that child page. But the child page still got recreated every time. But if i also set keep-alive for the core <nuxt keep-alive/> it will work as expected initially. [link] [link] So it doesnt work with nuxt-child, only with nuxt. PS same behavior with nuxt-edge ### What…

### CASE-5957 · Error stack does not show on Firefox
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, opera, nuxt, vue, vite
- **Signals**: 👍0 💬11 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v22.14.0 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.7 - Package Manager: [email] - Builder: - - User Config: devServer, ssr, compatibilityDate, future, imports, components, plugins, css, postcss, modules, vue, devtools, vite - Runtime Modules: [email] - Build Modules: - ------------------------------ ### Reproduction Log an error on Firefox ### Describe the bug Tested with the latest version of Nuxt. Works with regular Vue/Vite but breaks with Nuxt. Methods still link to the…

### CASE-5979 · UC browser And Google Chrome on mobile，The browser only returns static prerendering, with no functionality
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, nuxt, mobile
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment nuxt 3.2.2 ### Reproduction use ### Describe the bug UC browser And Google Chrome on mobile，The browser only returns static prerendering, with no functionality。 ### Additional context _No response_ ### Logs _No response_

### CASE-5990 · useRoute() does not return reactive object
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, react
- **Signals**: 👍2 💬11 · closed · labels: 3.x/🐛 bug/pages/🔨 p3-minor
- **Excerpt**: I have something related, when I use the route.name in a computed variable OR use the route(.name) in a watch function it doesn't get triggered after navigating. When I output the $route.name in the template tag, this does get updated after navigating. Some additional info, when I do the following: In RC.6 ```js console.log(useRoute()); Output: Proxy with computed values ``` In edge ```js console.log(useRoute()); Output: Regular json object with values ``` _Originally posted by @user in [link] framework].js[ref]

### CASE-5991 · createTest from @user/test-utils-edge can't load nuxt
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, linux, nuxt, vite, tailwind
- **Signals**: 👍0 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.6 17:34:51 RootDir: /app 17:34:53 Nuxt project info: 17:34:53 ------------------------------ - Operating System: `Linux` - Node Version: `v14.20.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `srcDir`, `meta`, `loading`, `build`, `modules`, `tailwindcss`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction Install nuxt test utils and vitest `yarn add --dev @user/test-utils-edge vitest` Define the…

### CASE-5993 · NuxtLink to="/" renders blank page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/100, safari/537, mac os x, nuxt, vite, webkit, vue
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v17.7.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `app` - Runtime Modules: `-` - Build Modules: `-` ------------------------------------- navigator.userAgent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36' ### Reproduction I use vanilla project with following structure: pages: - index.vue - restaurants - index.vue - [name].vue ### Describe the bug When navigating with NuxtLink component, every route works…

### CASE-6000 · RangeError: Maximum call stack size exceeded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, ios, nuxt
- **Signals**: 👍0 💬11 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [nuxt-edge]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce From a page, when I make an Ajax request to an API resource / endpoint that returns a 404 / not found, I see "RangeError: Maximum call stack size exceeded". In the below example, calling the API with a valid slug/parameter, like: ``` let podcastDataResponse = await context.$axios.get('/podcast-episodes/' + podcastSlug); ``` I get a valid Json response back, and everything works fine. However, if I pass an invalid slug to the API endpoint, such that the API returns a 404 (NOT Json), like: ``` let…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5925 · TypeError: Cannot read properties of undefined (reading '__asyncLoader') on this.$router.push(menu.url)
- **Principles**: P-B1, P-B2, P-B3 · **Env**: ios, nuxt, vue
- **Signals**: 👍0 💬12 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment This is my package.json dependencies { "private": true, "scripts": { "build": "nuxt build", "dev": "nuxt dev", "generate": "nuxt generate", "preview": "nuxt preview", "postinstall": "nuxt prepare" }, "engines": { "node": ">=18.0.0" }, "devDependencies": { "nuxt": "^3.4.1" }, "dependencies": { "@user/font": "^7.1.96", "@user/js": "^7.1.96", "@user/nuxt": "^0.4.6", "@user/vue-datepicker": "^4.2.3", "axios": "^1.2.2", "pinia": "^2.0.29", "sass": "^1.58.0", "vuetify": "^3.1.14" }, "overrides": { "vue": "latest" } } ### Reproduction Ah I dont have it right now ### Describe the bug…

### CASE-5952 · css @user "~font-awesome/.." is broken in RC
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vue, webpack, nuxt
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: After the update to RC I cant Import Node Modules anymore the standard way with ```@user "~font-awesome/...``` but have to remove it ```@user "font-awesome/...```. But this behavior breaks all other stuff that is relying on the [standard way]([link]). In our case we use vue-styleguidist which than can't resolve the scss imports anymore (uses it's own webpack config). I tried to fix that with the webpack alias but can't find any way that satisfies both. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-5950 · Multiple module with babel-plugin-component:
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: stale/2.x
- **Excerpt**: [ref] ```javascript build: { babel: { plugins: [ ['component', [{ libraryName: 'element-ui', styleLibraryName: 'theme-default' }, { libraryName: 'mint-ui', style: true }]] ] } } ``` However, it does not seem to support multiple module [babel-plugin-component#multiple-module]([link]) ```javascript build: { babel: { plugins: [ ['component', [{ libraryName: 'element-ui', styleLibraryName: 'theme-default' }]] ] } } ``` and ```javascript build: { babel: { plugins: [ ['component', { libraryName: 'element-ui', styleLibraryName: 'theme-default' }] ] } } ``` work fine!…

### CASE-5954 · AdminLTE 2 (Bootstrap 3) theme and <nuxt-link> issue
- **Principles**: P-C1, P-C2, P-C3 · **Env**: bootstrap, nuxt
- **Signals**: 👍0 💬12 · closed · labels: 2.x
- **Excerpt**: I have a issue with nuxt-link on static nuxt app. I want to use AdminLTE theme. It based on bootstrap 3. When i use 'nuxt dev' - nodejs server routes - all works fine, but when a use static app routes - bootsrap dropdowns not works GIF for illustrate what [link] If page force reload in browser - dropdown became works again It is issue or i doing somebody wrong? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c358">#c358</a>)</em></sub></div>

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-5969 · Pages don't disappear and new pages load in the same area when you use a transition when navigating
- **Principles**: P-A5, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍1 💬11 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment "nuxt": "^3.8.0" ### Reproduction [link] ### Describe the bug I have an app that I am working on, and I notice when I use ``` app: { pageTransition: { name: 'page', mode: 'out-in' } } ``` in the Nuxt config that pages end up loading on top of each other. I have a simple representation of it here: [link] Video showing this effect: [link] ### Additional context _No response_ ### Logs _No response_

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-5973 · Unhandled error during execution of scheduler flush. TypeError: Cannot set properties of null (setting 'nodeValue')
- **Principles**: P-A2, P-A4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬11 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.12.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, css, build - Runtime Modules: - - Build Modules: - ### Reproduction Repo: [link] ### Describe the bug I'm using Vuetify with Nuxt. Here is an example `pages/index.vue` to reproduce the bug (see the reproduction repo for the full project code): ```vue <template> <div> <div class="d-flex flex-wrap"> <v-card v-for="(value, name) in result" :key="name" class="mx-2 my-2 flex-grow-1" > <v-card-title class="d-flex…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5975 · PayloadExtraction/useFetch persists data when it shouldn't
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬11 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, experimental, nitro - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug To reproduce: 1. yarn run build 2. node .output/server/index.mjs 3. Go to a product and select a size 4. Go back 5. Go to same product as in step 3 You'll then see the size is not the default size. ### Additional context _No response_ ### Logs _No…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5999 · One more issue for SSR debugging not working
- **Principles**: P-A1, P-A4, P-G3, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: 📚 documentation/3.x/2.x
- **Excerpt**: Hey guys, I'd like to contribute to the docs on the topic. If someone throws some quick info in this thread as I've spent hours and hours trying to get SSR VSCode debugging to work. Specifically there's nothing with regards to sourcemaps. As it stands, standard starter template is unable to bind to any breakpoints on VSCode for SSR code (`asyncData()` for example)

