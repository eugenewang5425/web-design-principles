# Case Chunk 052 — Round 52

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6101 · Static routes are no longer rendered in v3.11.0
- **Principles**: P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: 🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.19.0 - Nuxt Version: 3.11.0 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr - Runtime Modules: - - Build Modules: - ### Reproduction I can reproduce on a fresh install using SSR from v3.11.0. ## Reproduce on v3.12.2 ``` npx nuxi@user init reproduce-prerender-routes-error --gitInit=false --packageManager=npm cd reproduce-prerender-routes-error mkdir pages echo "<template>Testing</template>" > pages/testing.vue echo "export default defineNuxtConfig({ ssr: false })" >…

### CASE-6107 · ERROR Failed to resolve import "#internal/nuxt/paths" from "virtual:nuxt:C:\Users\MyPc\Workspace\myproject\apps\myapp\.nuxt\fetch.mjs". Does the file exist?
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, typescript, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt project info: 09:06:32 ------------------------------ - Operating System: Windows_NT - Node Version: v21.7.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: extends, devtools, dev, debug, modules, appConfig, typescript, ssr, routeRules, nitro, css, runtimeConfig, sitemap, site, app, nuxtIcon, content, experimental, fonts, vite - Runtime Modules: @user/nuxt, @user/content, @user/[email], @user/fonts, @user/seo, nuxt-icon - Build Modules: - ### Reproduction Upgraded a bunch of dependencies, no idea…

### CASE-6112 · update docs to explain configuring vite hmr
- **Principles**: P-F4 · **Env**: opera, linux, vite, nuxt
- **Signals**: 👍2 💬9 · open · labels: 📚 documentation/workaround available
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Linux - Node Version: v18.19.0 - Nuxt Version: 3.7.4 - CLI Version: 3.10.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: vite, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction Reproduction github PR [link] ``` git clone [email]:hutchic-org/nuxt-37-ws.git cd nuxt-37-ws make run ctrl^c make exec netstat -tupln ``` expected result ``` netstat -tupln Active Internet connections (only servers) Proto Recv-Q Send-Q Local Address Foreign Address State…

### CASE-6115 · Teleport behaves differently for SSR and client-side
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.1 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug When using `Teleport` during SSR, the content is teleported **above** the main nuxt application. When using `Teleport` on the client-side, the content is teleported below. This causes issues with teleported modals / dropdowns etc. ```html <Teleport to="body"> <div>SSR teleport</div> </Teleport> <ClientOnly>…

### CASE-6117 · Server middleware triggered even when not calling server endpoints
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Working directory: /home/projects/github-dlbtlr Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.0 - CLI Version: 3.9.1 - Nitro Version: 2.7.0 - Package Manager: [email] - Builder: - - User Config: ssr, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] Try visiting pages on / or /foo. They will both crash because `server/middleware/test.ts` is executed even though app has `ssr: false` in Nuxt config and neither page is calling any server endpoint. ###…

### CASE-6120 · Using <component :is="'style'" type="text/css"> with slots produces hydration missmatch only in nuxt3 (vue+vite works fine)
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.7.0 - Nuxt Version: 3.7.3 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Here is a reporduction version of this issue: [link] Please note that issues like this don't visually show in Stackblitz. You need to run it locally. Here is an example from Vue with vite where it doesnt happen: [link] ### Describe the bug When using `<component :is="'style'"…

### CASE-6122 · [nuxt] [request error] [unhandled] [500] __vite_ssr_import_2__.composableNames is not iterable
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.3.1 - Nuxt Version: 3.7.1 - CLI Version: 3.7.3 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Not sure. I've just upgraded nuxt from 3.6.5 to 3.7.1 The @user version seems to be the latest 1.5.2 ### Describe the bug Site load produces error after upgrading Nuxt ### Additional context _No response_ ### Logs ```shell-script [nitro] ✔ Nitro built in 5506 ms [nuxt] [request error]…

### CASE-6123 · Allowing more than a single fetch in useAsyncData
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v16.19.0 - Nuxt Version: 3.5.0 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: app, css, ssr, modules, htmlValidator, runtimeConfig, alias, build, vite - Runtime Modules: @user/[email], @user/nuxt@^0.4.10, @user/html-validator@^1.2.4, nuxt-swiper@^1.1.0 - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug The issue occurs during SSR. I'm trying to fetch second data based on a value from the first fetched data. From the below…

### CASE-6124 · Nuxi generate crash using netlify preset
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v16.17.0 - Nuxt Version: 3.6.3 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: app, nitro, css, build, vite, postcss, sitemap, modules, runtimeConfig, delayHydration, sourcemap - Runtime Modules: [email], [email], (), @user/[email] - Build Modules: - ### Reproduction - Update to last version of nuxt > `3.6.0` - Set the nitro preset to netlify - run `nuxi generate` ### Describe the bug I have my site deploy to Netlify. Until now I was using the command `nuxi generate` in order to build the site and…

### CASE-6126 · Nuxt 3.6.0 Redirected to index.html and get 404 Page not found with ssr:false
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬9 · closed · labels: 3.x/workaround available/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.15.0` - Nuxt Version: `3.6.0` - Nitro Version: `2.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `modules`, `app`, `i18n`, `alias`, `vite`, `css`, `postcss`, `build` - Runtime Modules: `@user/[email]-beta.9-f64c966`, `@user/[email]-beta.9` - Build Modules: `-` ### Reproduction upgraded from nuxt 3.5.0 to nuxt 3.6.0 with ssr: false and tried to run it after `npm run generate` and run `npx servor .output/public` tried the same by hosting on s3 bucket and cloudfront - same issue ### Describe the bug…

### CASE-6128 · Missing `<link>` tags in production build
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/🐛 bug/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.13.0` - Nuxt Version: `3.3.3` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `app`, `ssr`, `srcDir`, `modules`, `vite`, `nitro`, `googleFonts`, `i18n`, `content`, `plausible` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]-beta.10-28003311.2c39470`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction I was not able to create a minimal reproduction for this issue as this bug does not seem to occur in a…

### CASE-6130 · useNuxtData setting overwriting data doesn't work
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍1 💬9 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v18.11.0` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `srcDir`, `ssr`, `nitro`, `devServer`, `typescript`, `devtools`, `runtimeConfig` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction I've recreated the [optimistic update example from the docs]([link]): [link] 1. Click add button 2. Click add button again (every second add will fail) 3. See that the data doesn't get overwritten. ###…

### CASE-6131 · Returns error while trying to use "npm run dev" on fresh installation
- **Principles**: P-F4 · **Env**: opera, windows, ios, nuxt, webpack, bootstrap, vue
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment Nuxt project info: 19:26:59 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `2.16.2` - Nitro Version: `-` - Package Manager: `[email]` - Builder: `webpack` - User Config: `ssr`, `head`, `css`, `plugins`, `components`, `buildModules`, `modules`, `axios`, `pwa`, `content`, `build` - Runtime Modules: `bootstrap-vue/nuxt`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction `npm run dev` ### Describe the bug while trying to run a fresh installation of nuxt…

### CASE-6132 · Hot-update.json 404.
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, webpack
- **Signals**: 👍3 💬9 · closed · labels: pending triage/2.x/needs reproduction
- **Excerpt**: [email] ### Environment kx yapily-ui-dashboard-698f774889-bgxdj sh /src $ npx nuxi info npx: installed 1 in 1.85s Nuxi 3.2.3 10:17:58 10:17:59 RootDir: /src 10:17:59 Nuxt project info: 10:17:59 ------------------------------ - Operating System: `Linux` - Node Version: `v14.21.1` - Nuxt Version: `2.16.1` - Nitro Version: `-` - Package Manager: `[email]` - Builder: `webpack` - User Config: `ssr`, `head`, `css`, `buildModules`, `env`, `publicRuntimeConfig`, `plugins`, `modules`, `styleResources`, `telemetry`, `router`, `serverMiddleware`, `build`, `watchers` - Runtime Modules: `@user/[email]`,…

### CASE-6134 · devServer config do not work in nuxt.config
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍10 💬9 · closed · labels: 3.x/workaround available/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `debug`, `ssr`, `srcDir`, `serverDir`, `dir`, `alias`, `app`, `css`, `devServer`, `runtimeConfig`, `router`, `modules`, `plugins` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction In nuxt config add : `devServer` attribute like in the doc [link] Try to customise `port` and `host` with custom `port` and/or custom `ip`. Run dev command. It will show Local: `[link] `in Terminal no matter which custom port…

### CASE-6136 · RC13 - dev SSR error with module 'mathjs'
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/workaround available/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug When using the library mathjs in development mode, import fails with the following error: ``` [nuxt] [request error] [unhandled] [500] __vite_ssr_import_0__.default is not a function at ./node_modules/mathjs/lib/esm/entry/configReadonly.js:16:30 at…

### CASE-6137 · dynamic routes url in dev mode contains illegal characters
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `colorMode`, `ssr`, `app`, `store`, `srcDir`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction same issue as in [meta framework].js[ref] java.net.URISyntaxException: Illegal character in path at index 22: [link]]-4eea24f4.mjs at java.base/java.net.URI$Parser.fail(Unknown Source) at java.base/java.net.URI$Parser.checkChars(Unknown…

### CASE-6142 · NuxtLink with anchor-link (#id) does not work.
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.3 23:26:06 RootDir: C:\Users\sebas\JavascriptProjects\sebbejohansson-front 23:26:08 Nuxt project info: 23:26:08 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v17.8.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `telemetry`, `ssr`, `target`, `generate`, `router`, `app`, `css`, `modules`, `storyblok`, `build`, `env` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ 👉 Report an issue: [link] 23:26:08 👉 Suggest an improvement: [link] 👉 Read…

### CASE-6145 · Route '/app' returns source code instead of rendered page in development
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍0 💬9 · closed · labels: 3.x/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v17.6.0` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `buildModules`, `css`, `experimental`, `postcss`, `runtimeConfig`, `ssr`, `target`, `typescript` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction [link] ### Describe the bug While running in development mode, the route '/app' returns the source code instead of the rendered page. It works fine after build, and also if you navigate to the route via <NuxtLink> component but on reload or…

### CASE-6146 · Cookie can't be set together with redirect
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍1 💬9 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27491748.3186841 11:06:50 RootDir: C:\Work\Test 11:06:56 Nuxt project info: 11:06:56 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27491748.3186841` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `build`, `buildModules`, `vite`, `typescript` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction When using this code and performing SSR request (when this code is executed on server side) ``` useCookie('myCookie').value =…

### CASE-6147 · [Middleware] Hydration node mismatch
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍1 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: `Darwin` - Node Version: `v16.12.0` - Nuxt Version: `3.0.0-27396610.ed4f4f5` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `css`, `build`, `publicRuntimeConfig` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Middleware (is global `auth.global.ts` ) code : ```typescript export default defineNuxtRouteMiddleware((to, from) => { // return a function 'onGetCookie' with undefined or the value const { onGetCookie } = useCookieManager(); const…

### CASE-6153 · Nuxt SSR request are slower than the client side
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: question/stale/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: 2.14.12 - node: 14.15.4 ### Reproduction I made a sample app : [link] <!-- Link to a minimal test case…

### CASE-6154 · Problem in functional components '_vm._ssrEscape is not a function'
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍4 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: ^2.14.7 - node: 14.15 ### What is the Issue? When I try to use a functional component with ssr nuxt shows…

### CASE-6156 · this.$nuxt.context.error inside the new fetch() hook does not work on SSR
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍9 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Try and catch an error using `this.$nuxt.error()` inside the new fetch() hook. Eg. ``` async fetch() { try { throw new Error("something went wrong!"); } catch (error) { this.$nuxt.context.error({ status: 500, message: "Just a demo error message using $nuxt.context.error" }); } } ``` Check the console.log in the repro, it shows: ``` [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting…

### CASE-6158 · Scoped slots together with async component breaks SSR
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.9.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce If you use scoped slot and it's child, that is async imported, then child content doesn't gets SSR'd. if you remove scoped slot component OR use scoped slot with regular component import then it's SSR'd just fine. ### What is expected ? Expect server rendered content. ### What is actually happening? Content is not server rendered. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link]…

### CASE-6161 · Nuxt meta tags not set on direct access to page Ask Question
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce I am using Nuxt SSR and utilizing the head function to generate the meta tags in a page (product page) where the meta tags will be dynamic based on the product. However, the meta tags aren't generated if I access the page directly and testing the page on SEO checkers result in bad scores since there are no meta tags. If I navigate to the page within the website though, the meta tags are generated perfectly. Why is that? ### What is expected ? Meta tags to be generated in the html if the page is accessed…

### CASE-6162 · Polyfills are not injected to Node.js bundle even when required
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.6.3]([link]) ### Reproduction link [[link] framework].js/blob/v2.6.3/packages/babel-preset-app/src/index.js#L85]([link] framework].js/blob/v2.6.3/packages/babel-preset-app/src/index.js#L85) ### Steps to reproduce 1. Use a JS feature which your Node.js version would need a polyfill for in some page (e.g. [].flatMap for Node 10.x) 2. Run nuxt in development mode 3. Visit the page where you used the new JS feature ### What is expected ? Page is rendered correctly both in SSR and in SPA. ### What is actually happening? You get an error saying whatever new JS function you called…

### CASE-6163 · packages version mismatch: [email] & [email] After Upgrade to Nuxt 2.5.1
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Hello, Upgrading from 2.4.5 to 2.5.1 is producing FATAL errors after running npm run dev: 08:59:22 FATAL Vue packages version mismatch: - [email] - [email] This may cause things to work incorrectly. Make sure to use the same version for both. Vue packages version mismatch: - [email] - [email] This may cause things to work incorrectly. Make sure to use the same version for both. at Object.<anonymous> (node_modules/vue-server-renderer/index.js:8:9) at Module._compile…

### CASE-6166 · Setting `extractCSS` to `true` cause error: `Invalid CSS after "... var cssReload": expected selector, was '= require`
- **Principles**: P-F4 · **Env**: nuxt, vue, webpack
- **Signals**: 👍2 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.0]([link]) ### Reproduction link [CodeSandbox]([link]) ### Steps to reproduce - Create new Nuxt@^2.4.0 - Add `SCSS` support `npm install --save-dev node-sass sass-loader` - Set `extractCSS` to `true` in the `build` property of `nuxt.config.js` - Set an external 'scss' file for 'index.vue' page ### What is expected? To work as expected ### What is actually happening? Error in console and in browser: Module build failed (from ./node_modules/extract-css-chunks-webpack-plugin/dist/loader.js): ModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):…

### CASE-6168 · Nuxt SSR crashes with 200 response code
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v1.4.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. clone repo 2. yarn 3. yarn build 4. yarn start 5. ab -c 2 -n 20000 The STR is not straight forward as I'm only able to reproduce this on a live project I have and running `ab -c 2 -n 20000`. It's only once the server has been hit around 10k times where the bug `Maximum Stack` on `VueComponent.mergeDataFn` is triggered. Once this error is triggered, I can see on the log `statusCode: 500`, however the web server still responds with 200 and shows an error page. ``` { RangeError: Maximum call stack size…

### CASE-6170 · v-model with select and text area issue
- **Principles**: P-F4, P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: In SSR the select fields are not rendered with the selected attribute, then the selected option appears selected after all page load. The same happens with the textarea field, first appears empty and then when the page loads, it shows the content of v-model. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1632">#c1632</a>)</em></sub></div>

### CASE-6172 · Dynamic imports not working in vue-server-renderer
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: I have this bit of code in one of my SSR plugins: ```js let ScrollSnap = null if (process.browser) { (async function () { ScrollSnap = await import('./ScrollSnap') })() } ``` But when running the server, I get this error: ``` [vue-router] Failed to resolve async component default: SyntaxError: Unexpected token import [vue-router] uncaught error during route navigation: pages/index.7e17fc3259340ada06a8.js:244 return import('./ScrollSnap'); ^^^^^^ SyntaxError: Unexpected token import at getCompiledScript (/path/to/project/node_modules/vue-server-renderer/build.js:7714:18) at evaluateModule…

### CASE-6176 · mismatch server-rendered content when filling the store in the nuxtServerInit
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍1 💬9 · closed · labels: 2.x
- **Excerpt**: Hello, I'm trying to prefetch the data on the server side to fill my store. I'm getting the data in the store, but my component won't render and I get a hydration warning. Have any one a solution for this? And why the hydration fails, when I filling the store on the server side? ``` [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render. ``` store/index.js ```js export const…

### CASE-6177 · Optimizing SSR Bundle size
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍12 💬9 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: Hello. This actually is a story behind one of our nuxt based production applications, some workarounds was used to make ssr bundle smaller and much much more faster. All of them are implemented in [nuxt-helpers/optimize.js]([link]) and tested against nuxt 0.9.9. About one week ago just after first deployment, i just figured out that SSR is really slow (~8req/sec with 1 worker) so the first thing i have checked was big ssr bundle size (~800kb), thanks to super useful nuxt `extend` function, i have enabled `BundleAnalyzerPlugin` for server side like this : ```js extend (config, {isServer}) { if…

### CASE-6178 · problem with running the app with nuxt
- **Principles**: P-F4 · **Env**: ios, nuxt, vue, webpack
- **Signals**: 👍0 💬9 · closed · labels: question/2.x
- **Excerpt**: Hi! When I run the [async-data]([link]) as ```npm run dev``` everything works fine. But when I run it as ```nuxt``` I get an error: ``` Vue.js error Error: Cannot find module 'axios' at Function.Module._resolveFilename (module.js:469:15) at Function.Module._load (module.js:417:25) at Module.require (module.js:497:17) at require (internal/module.js:20:19) at Object.<anonymous> (__vue_ssr_bundle__:1056:18) at __webpack_require__ (__vue_ssr_bundle__:21:30) at Object.module.exports.Object.defineProperty.value (__vue_ssr_bundle__:1909:64) at __webpack_require__ (__vue_ssr_bundle__:21:30) at…

### CASE-6180 · Can't start dev server: `BuildMessage: ModuleNotFound resolving "./.nuxt/dev/index.mjs" (entry point)`
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/platform:windows/needs reproduction
- **Excerpt**: ### Environment | | | | -------------------- | ---------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Windows 10.0.26200` | | **CPU** | `Intel(R) Core(TM) Ultra 5 225H (14 cores)` | | **Node.js version** | `v24.9.0` | | **nuxt/cli version** | `3.34.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.4.2` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** | `app`, `compatibilityDate`, `convex`, `css`, `devServer`, `fonts`, `icon`, `modules`, `runtimeConfig`, `ssr`,…

### CASE-6182 · Props modifiers in render functions do not handled properly on SSR
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: upstream
- **Excerpt**: ### Environment - Operating system: Linux 5.0 - Node.js version: v20.19.1 - nuxt/cli version: 3.31.2 - Package manager: pnpm 8.15.6 - Nuxt version: 4.2.2 - Nitro version: 2.12.9 - Builder: vite 7.2.7 - Config: compatibilityDate, devtools - Modules: - ### Reproduction Stackblitz reproduction: [link] 1. Run the reproduction 2. Inspect the rendered html using the browser devtools ### Describe the bug When passing props modifiers such as `^` or `.` to `h()` function, they are not proccessed and rendered as they are. For example is we specify ``` h('div', { '.name': 'some-name', '^width': '100'…

### CASE-6186 · Universal Rendering problem with caching certain pages with queryStrings
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.15.0 - Nuxt Version: 3.19.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: ssr, experimental, sourcemap, primevue, postcss, app, hooks, devServer, modules, googleFonts, devtools, imports, vite, nitro, components, pinia, i18n, runtimeConfig, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction I believe no reprodution is needed I will give details: - go to a page like…

### CASE-6187 · A lazily hydrated component delays hydration across the page
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v22.12.0 - Nuxt Version: 4.1.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, features - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug ``` npm run preview ``` The `<lazy-base-a on-hydrate-visible />` component uses `<base-c/>` internally, and `<base-b/>` also uses `<base-c/>`. As a result, the entire `index.vue` page ends up being hydrated lazily. ###…

### CASE-6190 · The requested module does not provide an export
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v22.9.0 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.7 - Package Manager: [email] - Builder: - - User Config: modules, compatibilityDate, devtools, ssr, devServer, basicAuth, runtimeConfig, app - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug This bug started happening since I upgraded from Nuxt `v3.14.1592` to `v3.16.1` ```ts import mqtt, { MqttClient, type IClientOptions } from 'mqtt'; // Console:…

### CASE-6191 · No api routes after build app
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment i put ssr property to false in the nuxt.config file run nuxi build. No server api routes that are created in nitro plugin that in dev mode work Is need to start something else (other copy of nuxt), another app to serve api routes of spa app like in nuxt 2 was express? ### Reproduction - ### Describe the bug - ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6194 · Route middleware run twice on the server after redirect
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v22.12.0` - Nuxt Version: `3.15.4` - CLI Version: `3.22.2` - Nitro Version: `2.10.4` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Steps: 1. Enter and access [link] The /a link on the homepage has no bugs, because it doesn't involve ssr and runs only in client. 2. Check the server and client logs. Route middleware run twice on the server after redirect. Whether it's the redirect option of…

### CASE-6200 · eager dependency pre-bundling is no longer working
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/bundler:vite
- **Excerpt**: ### Environment ``` Working directory: /home/projects/github-um8mfw-zyx1rr 16:29:50 Nuxt project info: 16:29:50 ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, vite, compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction Link to project with faulty behaviour (version 3.12.3) [link] Link to project with expected (old) behaviour (version 3.5.3) [link] ### Describe the bug…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6102 · Change in Script Order between Nuxt 3.11.2 and Nuxt 3.12.2
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, typescript, vue
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.14.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: runtimeConfig, typescript, ssr, devtools, app, modules, primevue, css, validations, devServer, routeRules - Runtime Modules: [email], @user/[email], @user/test-utils/[email] - Build Modules: - ------------------------------ ### Reproduction To reproduce this problem, you can place the elements in the nuxt.config.ts file as shown in the image below: ``` app: { head: {…

### CASE-6105 · `Failed to execute 'insertBefore' on 'Node':` with useAsyncData and Pre-Rendering
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.11.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, nitro, runtimeConfig, app, modules, postcss, storyblok, image, plausible, sitemap - Runtime Modules: @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Link: [link] I can try to produce a reproduction with Stackblitz if that helps to share the…

### CASE-6106 · Can't set dynamic meta tags with useSeoMeta
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript
- **Signals**: 👍1 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v21.7.1 - Nuxt Version: 3.11.1 - CLI Version: 3.11.0 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: css, extends, modules, stripe, eslint, image, runtimeConfig, imports, ui, devtools, experimental, colorMode - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/motion/[email], [email], [email], @user/[email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug I'm trying to use useSeoMeta to take advantage the benefits of typescript instead of use definePageMeta,…

### CASE-6108 · Cannot navigate from one page Alias to another
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript
- **Signals**: 👍0 💬9 · open · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.12.0 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.9.1 - Package Manager: [email] - Builder: - - User Config: devtools, app, css, modules, runtimeConfig, components, image, directus, headlessui, ui, dayjs, typescript, tiptap - Runtime Modules: @user/[email], @user/[email], [email], [email], [email], @user/[email], @user/[email], @user/[email], @user/motion/[email]-beta.29, @user/[email], [email], @user/[email], [email], [email] - Build Modules: - ------------------------------ ###…

### CASE-6113 · Why does Nuxt3 use the <NuxtLoadingIndicator /> progress bar component not work?
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment "devDependencies": { "@user/devtools": "latest", "nuxt": "^3.8.2", "vue": "^3.3.10", "vue-router": "^4.2.5" }, ### Describe the bug Why does Nuxt3 use the <NuxtLoadingIndicator /> progress bar component not work? ![image]([link] framework]/assets/103110550/243d4bf7-007e-4a3f-bcfd-886c60a3fae1) This progress bar has not been shown, I follow the official writing ### Additional context _No response_ ### Logs _No response_

### CASE-6114 · regeneratorRuntime is not defined
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ``` - Operating System: Darwin - Node Version: v20.8.0 - Nuxt Version: 3.8.0 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: experimental, colorMode, runtimeConfig, app, dev, debug, telemetry, css, plugins, modules, device, gtm, svgo, image, imports, vue, vite, devtools - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ``` ### Reproduction ``` <script lang="ts" setup> const route = useRoute(); const CONTENT_ID = +route.params.id; const {…

### CASE-6116 · Usage of `import.meta` in nuxt modules easily breaks
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript, tailwind, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.16.0` - Nuxt Version: `3.6.5` - CLI Version: `3.9.0` - Nitro Version: `2.6.3` - Package Manager: `[email]` - Builder: `-` - User Config: `srcDir`, `authoringTools`, `typescript`, `app`, `runtimeConfig`, `graphql-client`, `modules`, `image`, `sentry`, `tailwindcss`, `vite`, `build`, `experimental` - Runtime Modules: `nuxt-lodash@^2.5.0`, `@user/tailwindcss@^6.8.0`, `@user/[email]`, `nuxt-graphql-client@^0.2.29`, `nuxt-icon@^0.4.2`, `@user/[email]-rc.3-28294248.a578636` - Build Modules: `-` ### Reproduction ```js //…

### CASE-6119 · sendRedirect() in /server/middleware causing error: [nuxt] [request error] [unhandled] [500] Cannot set headers after they are sent to the client
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript, vite, vue
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.7.3` - CLI Version: `3.8.4` - Nitro Version: `2.6.3` - Package Manager: `[email]` - Builder: `-` - User Config: `modules`, `typescript`, `app`, `css`, `vite`, `prismic`, `i18n`, `image`, `devtools`, `experimental` - Runtime Modules: `@user/[email]`, `@user/[email]-rc.2`, `@user/[email]-rc.4`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link]]]%2Findex.vue,server%2Fmiddleware%2Fredirects.ts Using the reproduction link above: - visit `/old-page` You get an error in the console.…

### CASE-6121 · niro > routeRules > cache > getKey lost in the process of delivery
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.7.0 - CLI Version: 3.7.2 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: nitro - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug I see getKey in nitro document, but in nuxt project the getKey is invalid ![image]([link] framework]/assets/17450339/c04e55b0-2e5c-4fcd-8265-2852e27825e3) ![image]([link] framework]/assets/17450339/3143644f-14a7-4eb7-92ec-d9f14bb495a7) as in my reproduction, the cache file in .nuxt/cache/nitro/routes/my_test should be…

### CASE-6125 · Cannot stringify arbitrary non-POJOs Unexpected response type data Blob { size: 2, type: 'application/xhtml+xml' } !!!
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.6.3 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, devServer, nitro - Runtime Modules: - - Build Modules: - ### Reproduction [link] Run the project and you will see the error message ### Describe the bug API: [link] ![image]([link] framework]/assets/14163944/5fa597bc-df3d-46a2-8956-1ee939e97627) In fact, the API return should be an application/JSON, which actually results in a Blob type. ↓↓↓↓↓ data Blob { size: 2, type: 'application/xhtml+xml' } ![image]([link]…

### CASE-6127 · Components are rendered twice (<component :is> on [...slug].vue)
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍7 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment clean setup on stackblitz ------------------------------ - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.4.3 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] 1. Please open devtools, 2. Click any product on the list 3. Notice there is two console.logs 'render' with two different instances of the same component. Described results on the video below: [link] framework]/assets/7935392/1b308d97-255d-435d-9d5b-439a2d049c1a ### Describe…

### CASE-6129 · Server Memory leaks, high CPU usage - appConfig
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.15.0` - Nuxt Version: `3.2.3` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction I cannot reproduce it in small scale and ofc also cannot share our project code... I hope someone other will have similar problem and be able to reproduce in from scratch. ### Describe the bug ![image]([link]) ![image]([link]) ![image]([link]) ### Additional context We disabled all plugins and unnecessary third party libraries. I was also trying the…

### CASE-6133 · [Vue warn]: Do not use built-in or reserved HTML elements as component id: s
- **Principles**: P-A3, P-H1 · **Env**: vue, nuxt
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x/needs reproduction
- **Excerpt**: ### Environment "nuxt": "^2.15.8", "vue": "^2.6.14", ### Reproduction <img width="1130" alt="image" src="[link]> ### Describe the bug I have deleted all the. vue files and failed to solve this problem. I don't know how to troubleshoot the problem, which file has the problem, and there will be no error in startup. As long as I visit a page, I will be prompted with this error, but the second visit will not occur again. Only the first visit will have this error. <img width="1130" alt="image" src="[link]> ### Additional context _No response_ ### Logs _No response_

### CASE-6135 · Nuxt 3 fails to run fetch or render any components on client side – only works on full page refresh on server
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.19.0` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `sanity`, `privateRuntimeConfig`, `publicRuntimeConfig`, `target`, `image`, `css`, `vite`, `alias` - Runtime Modules: `@user/[email]`, `[email]`, `@user/[email]`, `@user/[email]-27769790.4b27db3` - Build Modules: `-` ### Reproduction As the fetch requires a token to Sanity API, which I am unable to make public, I'm not sure how I can provide a reproduction of this? Happy to give access privately…

### CASE-6138 · Module nuxt-icons is disabled due to incompatibility issues
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `runtimeConfig` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction use `npx nuxi update` to upgrade from RC8 to RC9 Reproduction link: [link] ### Describe the bug After Upgrading from RC8 Nuxt Icon Module are not working anymore. ### Additional context In Node Console ![image]([link]) ![image]([link]) In Browser Console…

### CASE-6139 · Cant set 80 port
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: 3.x/🐛 bug/upstream
- **Excerpt**: ### Environment dev ### Reproduction nuxi dev --port=80 ### Describe the bug After run `nuxi dev --port=80` server starts on 3000 port <img width="809" alt="Screenshot 2022-08-03 at 12 25 03" src="[link]> ### Additional context Other any port works well ### Logs _No response_

### CASE-6141 · Nuxt 3 Module custom layout style issue
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: workaround available/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.18.2` - Nuxt Version: `3.0.0-rc.4-27605536.8c2c80e` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Please see reproduction example here: [link] ### Describe the bug When adding a style block to a custom layout in a Nuxt 3 module, i get the following error: <img width="917" alt="Screen Shot 2022-06-29 at 14 44 59" src="[link]> If I remove the <style> block, it works fine. See here: [link] ### Additional context _No response_ ### Logs _No response_

### CASE-6148 · "nuxi build" on github action lost public's files
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, windows, nuxt, vite
- **Signals**: 👍3 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27304790.cad09fe` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `alias`, `meta`, `css`, `vite`, `publicRuntimeConfig`, `buildModules` - Runtime Modules: `-` - Build Modules: `@user/core/[email]` ### Reproduction None ### Describe the bug ```yml - name: ls web run: | cd packages/web yarn --immutable yarn build ls -l .output/public/_nuxt ``` Public folder ![image]([link]) Github Action ![image]([link]) Windows ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-6149 · Auto import for types like `Ref`
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬9 · closed · labels: ✨ enhancement/types/3.x
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.16.1` - Nuxt Version: `3.0.0-27277498.850ef69` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `env`, `alias`, `srcDir`, `dev`, `build`, `publicRuntimeConfig`, `buildModules`, `css`, `vite` - Runtime Modules: `-` - Build Modules: `@user/core/[email]`, `@user/[email]`, `./app/t5-ui/nuxt` ### Reproduction - ### Describe the bug I want to use `Ref` to type assertions, But: ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-6150 · Unexpected token import in old browser
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬9 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.17.0` - Nuxt Version: `3.0.1-rc.0-27863365.da6fa9a` - Nitro Version: `2.0.0-27860563.409fe2b` - Package Manager: `[email]` - Builder: `vite` - User Config: `vite` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] <img width="486" alt="Screen Shot 2023-01-01 at 02 05 01" src="[link]> [link] ### Describe the bug HTML rendered with perfect but can't do anything in client side even `console.log` not show when button is click ### Additional context _No response_ ### Logs _No response_

### CASE-6152 · Error: Unsupported MIME type: image/x-icon
- **Principles**: P-A3, P-H1 · **Env**: windows, nuxt
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: 2.13.0 - node: 14.15.4 ### Reproduction When I re installed the windows system, I found that I couldn't…

### CASE-6155 · "src" of img returns src="[object Module]" in browser
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍1 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce npm install file-loader to install latest on new create-nuxt-app boilerplate. In Nuxt v2.12.2 The file-loader dependency should not be higher than version 4.1.0, or `<img src="~/assets/images/name.jpg" />` will return src="[object Module]" ### What is expected ? images to load from assets folder ### What is actually happening? "src" of img returns src="[object Module]" in browser <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a>…

### CASE-6175 · extendRoutes doesn't work?
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: nuxt.config.js： `router: { extendRoutes(routes) { routes: [{ path: '/', redirect: '/lines' }] } }` index.vue： ``` <template> <div> <ul class="m-tag"> <nuxt-link :to="item.link" v-for="item in navList" :key="item.title" active-class="act"> {{ item.title }} </nuxt-link> </ul> <nuxt-child/> </div> </template> <script> export default { head () { return { meta: [ { hid: 'description', name: 'description', content: 'My custom description' } ] } }, data () { return { navList: [{ title: 'lines', link: '/lines' }, { title: 'traffic', link: '/traffic' }] } } } </script> ``` ![image]([link]) when I…

### CASE-6183 · Nuxt does not auto-import `const enums` with the same behaviour as an import statement
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue
- **Signals**: 👍1 💬8 · closed · labels: pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Nuxt Version: `4.2.1` - CLI Version: `3.30.0` - Nitro Version: `2.12.9` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Open [link] in your editor so that the [Vue Extension]([link]) can run. You can comment and uncomment L6 in `app.vue` to see the issue. The types are located in `shared/types/enum.ts` so they auto-import by default. <img width="1804" height="338" alt="Image" src="[link] /> <img width="1804" alt="Image" src="[link] /> ###…

### CASE-6184 · Cannot read properties of null (reading 'ce')
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍2 💬8 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Cannot read properties of null (reading 'ce') <img width="1476" height="553" alt="Image" src="[link] /> ### Reproduction when i update nuxt to 4.2.1,4.2.0 works well ### Describe the bug compiler error ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6185 · [v4.1.3]After updating the Nuxt version to 4.1.3, the browser keeps loading indefinitely, and requests remain in a "pending" state.
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬8 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment Operating System: Windows11 Node Version: v22.16.0 Nuxt Version: 4.1.3 Package Manager: [email] ### Reproduction [link] Run `pnpm i` Run `pnpm dev` > On StackBlitz, the issue doesn't seem to reproduce perfectly. Need to download the code locally, run it after starting, and then open it in the browser to reproduce the problem. ### Describe the bug After updating the Nuxt version to `4.1.3`, the browser keeps loading indefinitely, and requests remain in a "pending" state. This bug is triggered when `images` and `useFetch` requests appear simultaneously on the same page. And when…

### CASE-6189 · When using Nuxt layout + ClientOnly, module 'maplibre-gl' errors: "does not provide an export"
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 🔨 p3-minor
- **Excerpt**: ### Environment Working directory: /home/projects/github-4awuuupi nuxi 13:42:34 Nuxt project info: nuxi 13:42:35 ------------------------------ - Operating System: Linux - Node Version: v20.19.1 - Nuxt Version: 3.17.4 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] Open this in a fresh tab, and you should land directly on the error 500 page. <img width="3120" alt="Image" src="[link] /> Test the issue by removing…

### CASE-6196 · Pinia tab is broken in `3.14`
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, ubuntu, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ```` ------------------------------ - Operating System: Linux (Ubuntu 20.04 LTS) - Node Version: v20.12.2 - Nuxt Version: 3.14.159 - CLI Version: 3.15.0 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ```` ### Reproduction [link] ### Describe the bug Since Nuxt `3.14` the Pinia tab in devtools seems to be broken showing `No Data` while this was working in `3.13` Please see the reproduction. Screenshot: ![Image]([link]) ###…

### CASE-6198 · useSEOMeta or useHead, og tag dynamic assigned by requests can't not be fetch by FB or LINE sharing
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment Operating System: Darwin Node Version: v18.14.0 Nuxt Version: 3.11.2 CLI Version: 3.11.1 Nitro Version: 2.9.6 Package Manager: [email] Builder: - User Config: devServer, runtimeConfig, modules, gtag, pinia, piniaPersistedstate, i18n, elementPlus, vant, app, css, alias, vite, nitro, imports Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], [email] Build Modules: - ### Reproduction [link] in LINE tool: [link] in FB tool: [link] Both of tools above can not get the ob:title, og:image for assigned value by useSeoMeta or useHead…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6103 · await with layoutTransition and pageTransition mounted executed twice In a different layout - nuxt 3
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: pending triage/suspense
- **Excerpt**: ### Update The problem was reported more than two months ago!! ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: experimental, hooks, ssr, devtools, nitro, vite, css, pwa, spaLoadingTemplate, app, modules, eslint, i18n - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug In my…

### CASE-6165 · When moving to a new route, transition current view out without delay
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍9 💬9 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### What problem does this feature solve? Currently the navigation behavior with Nuxt is the following: 1. User clicks on a link 2. Loading of new page starts 3. User waits for new page load to complete 4. Route updates 5. Exit transition of current view plays 6. Enter transition of new view plays 7. Navigation is complete This is not ideal UX-wise. Even when I make efforts to make my page quite fast and enable the loading indicator, the load times are inconsistent, and the page feels broken and frozen upon clicking a link as a result. ### What does the proposed changes look like? I think a…

### CASE-6167 · Transition issue when using redirect in validate
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.0.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce If you navigate to `issue` page you can see that next route instantly appears without waiting page transition to finish. The `ok` page is working fine. Also, if you comment out `validate` in `issue` page then transition mode is not broken. So this is somehow related with redirect in validate. ### What is expected ? I expect normal page transition ### What is actually happening? Transition mode is broken. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a…

### CASE-6171 · Route transitions do not work inside nuxt-child
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: Here's the example, [link] I just took the example code from [link] and placed the pages into the /pages/a folder. Then changed links. Then created /pages/a.vue file with the following content: <template> <nuxt-child/> </template> After that page transitions stopped working completely. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1559">#c1559</a>)</em></sub></div>

### CASE-6188 · Chinese Path build error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ubuntu, nuxt, vite, vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment ubuntu25.04 中文版 ### Reproduction null ### Describe the bug I am quite sure this is an issue with Chinese file paths, because I have encountered it before. The solution was to change the path to English, and then the project compiled successfully. ### Additional context _No response_ ### Logs ```shell-script ℹ ✓ 116 modules transformed. 03:01:06 ERROR ✗ Build failed in 898ms 03:01:06 [nuxi 03:01:06] ERROR Nuxt Build Error: [vite:vue] Could not load /home/ogumo/\u6587\u6863/GitHub/fishing-map/pages/index.vue?vue&type=style&index=0&scoped=c48d3806&lang.scss?inline&used: ENOENT:…

### CASE-6192 · Slow Vercel Build - Tailwind >=4.0.10 with Nuxt taking 30+ minutes
- **Principles**: P-D1, P-D2, P-D3 · **Env**: tailwind, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment I raised an issue on Tailwind here [link] This is because when I use the older version of tailwind 4, builds are about 1m30s. But I wanted to raise a quick issue here as @user is really hot on the internals of Nuxt, and knows what is happening in the transformation stage of the Nuxt build. Perhaps an optimisation in how Nuxt is transforming modules could be causing this bug where on Vercel, builds take 30+ minutes. Locally, a builds are fine with all Nuxt and Tailwind versions. ### Reproduction I wish I had more ability to show a reproduction. this is a blank Nuxt project with…

### CASE-6195 · `sass` and `sass-embedded` packages are not detected when using Nuxt Layers
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt 3.15.4 ### Reproduction [link] ### Describe the bug There is a `foo-layer` with two dependencies: `sass` and `gradient-string`. This layer creates two pages `index` and `about` which use both of the packages. Running the `foo-layer` Nuxt app directly works fine. Running the `user-app` Nuxt app shows the error: ``` ERROR Pre-transform error: Preprocessor dependency "sass-embedded" not found. Did you install it? Try npm install -D sass-embedded. 18:17:17 Plugin: vite:css File:…

### CASE-6199 · TransitionGroup hydration mismatch
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt, tailwind, vite, vue
- **Signals**: 👍0 💬8 · closed · labels: 🐛 bug/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.11.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: modulesDir, build, modules, eslint, tailwindcss, vite, css, i18n, compatibilityDate - Runtime Modules: @user/[email], vue3-swatches/nuxt, floating-vue/nuxt, @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug A hydration mismatch occurs inside a TransitionGroup when there is an element…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6104 · iOS white screen while swiping back after scrolling
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, safari, ios, nuxt
- **Signals**: 👍0 💬9 · open · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.10.0` - Nuxt Version: `3.11.2` - CLI Version: `3.11.1` - Nitro Version: `2.9.6` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] [link] ### Describe the bug Let's say I have two pages, page A (/) and page B (/test). I navigate from page A to page B. If I scroll on page B and then try to swipe back using iOS native gesture, the "preview" page during the swipe becomes blank. This can be seen on the latest iOS (17.4.1) in safari browser or…

### CASE-6111 · Invalid regular expression: invalid group specifier name (Safari version <= 16.3)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, nuxt
- **Signals**: 👍5 💬9 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: macOS Monterey (Safari v15.5) - Node Version: v20.9.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.0 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug After upgrading Nuxt from `v3.10.3` to `v3.11.1` I get this error when I try to show the application from a Safari browser with a version <= 16.3. For reproduce the issue I started from the Nuxt 3 base template (who is working) and I added a simple page. It seems like some regular expression…

### CASE-6143 · TypeError: Failed to fetch dynamically imported module _nuxt/login
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, nuxt
- **Signals**: 👍0 💬9 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Production ### Reproduction ### Describe the bug My app on Production is facing many issues `Failed to fetch dynamically imported module` or `403` issue. This is how Sentry log the error: _**Luckily, this error doesn't break the application. My website still runs normally while Chrome's Devtool is logging the error.**_ Have anyone faced the same issue and have idea to fix it? Thank all. ### Additional context _No response_ ### Logs _No response_

### CASE-6144 · useCookie example is misleading
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, nuxt, vite
- **Signals**: 👍9 💬9 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `vite` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] clone this repo ^ ```bash npm install npm run dev ``` browse to `localhost:3000` On Chrome : - Press F12 - Go to the Application tab - In "Storage", click on "Cookies" then "Localhost:3000" There should be a cookie with name "foo" and value "bar", but that's not the case because of the bug explained…

### CASE-6151 · NodeMismatch with iOS and phone numbers
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: safari, ios, nuxt
- **Signals**: 👍0 💬9 · open · labels: 📚 documentation/workaround available
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 --> ### Is your feature request related to a problem? Please describe. Yes. My Nuxt app worked fine on all platforms and browsers except iOS Safari. The page would break. I spent 2 days trying to track down this bug (almost abandoned the project) until I came across the workaround that was (yes, very clearly) stated in the documentation under Concepts -> Server Side Rendering. The issue is that I had a phone number on the page, and iOS Safari converts the phone number into a link, causing a NodeMismatch and breaking the…

### CASE-6157 · windows serverMiddleware HMR edge case
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.12.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Modify a servermiddleware file ### What is expected ? No script crash ### What is actually happening? D:\wamp64\www\...\node_modules\@user\builder\dist\builder.js:6160 for (const entry of dep2Entry[fileName]) { ^ TypeError: dep2Entry[fileName] is not iterable

### CASE-6159 · Possible memory leak
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Clone the repository 2. `yarn install` 3. `sudo yarn dev-debug` _(you could avoid the `sudo` by replacing the port `80` in the `package.json` with a different port number)_ 4. Open your Chrome browser in the address `[link] _(or if you use a different port number open the `[link])_ 5. Open the Chrome `Developer Tools` and click the green `NodeJS` button on the top left corner of the `Developer Tools` ![nodejs.png]([link]) 6.In the `NodeJS Developer Tools` console that will open, click the `Memory…

### CASE-6164 · titleTemplate with arrow function expression produces an error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 72, macos
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.3]([link]) Browser: Chrome 72.0.3626.109 OS: MacOS 10.13.6 High Sierra ### Reproduction link [[link]]([link]) ### Steps to reproduce The following `titleTemplate` arrow function produces an error, see below. ### This does not work ```js titleTemplate: title => (title ? `${title} - ${pkg.name}` : pkg.name), ``` ### This works The only difference is the explicit `return` statement. ```js titleTemplate: title => { return title ? `${title} - ${pkg.name}` : pkg.name }, ``` ### Error ![image]([link]) ### What is expected ? titleTemplate function works ### What is actually…

### CASE-6179 · callOnce doesn't work in mode 'navigation'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/146, safari/537, linux, nuxt, webkit
- **Signals**: 👍3 💬8 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ``` Nuxt project info: | | | | -------------------- | ----------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v22.22.0` | | **nuxt/cli version** | `3.34.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.4.2` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** |…

### CASE-6181 · envars not loading the correct value to runtime config
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/144, safari/537, linux, mac os x, nuxt, webkit
- **Signals**: 👍1 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt project info: | | | | -------------------- | --------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v20.19.1` | | **nuxt/cli version** | `3.33.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.3.0` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` |…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6109 · The api uses mongoose Model.populate() and will report MissingSchemaError: Schema hasn't been registered for model "***" in the product environment.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: workaround available/pending triage/nitro/upstream
- **Excerpt**: ### Environment "nuxt": "^3.10.3", "nuxt-mongoose": "^1.0.5", ### Reproduction "nuxt": "^3.10.3", "nuxt-mongoose": "^1.0.5", ### Describe the bug When I use mongoose Model.populate("***") in the api, it will report MissingSchemaError: Schema hasn't been registered for model "***" ![image]([link] framework]/assets/23719867/45260200-ad93-41c9-8a97-2cc5790980c4) Sorry I can't provide an error example； The same problem in stackoverflow: [link] ### Additional context _No response_ ### Logs _No response_

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6110 · CSS HMR errors from Tailwind arbitrary value classes
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux, tailwind, nuxt
- **Signals**: 👍7 💬9 · closed · labels: pending triage/upstream
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools, modules, tailwindcss - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction [link] ### Describe the bug When an [arbitrary value Tailwind class with whitespace]([link]) is used (e.g. `font-['Times_New_Roman']`), CSS HMR will throw an error on subsequent hard refreshes. I had originally reported this issue in…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-6118 · Nuxt 3.8 can no longer deploy to Cloudflare Pages
- **Principles**: P-A5 · **Env**: opera, nuxt
- **Signals**: 👍13 💬9 · closed · labels: 3.x/pending triage/nitro
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.18.2` - Nuxt Version: `3.8.0` - CLI Version: `3.9.1` - Nitro Version: `2.7.0` - Package Manager: `[email]` - Builder: `-` - User Config: `nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Deploying to Cloudflare Pages worked fine on 3.7.4, but on 3.8 it fails with this error: > Error: Failed to publish your Function. Got error: Error 8000057: Overlapping rules in `_routes.json` are not allowed. Rule "/_nuxt/builds/\*" is overlapped by "/_nuxt/\*". Remove one of the rules to…

### CASE-6193 · Improve support for overlapping dynamic routes with `validate()`
- **Principles**: P-A5, P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬8 · open · labels: upstream
- **Excerpt**: ### Environment Nuxt Version: 3.15.4 ### Reproduction [link] ### Describe the bug [Nuxt documentation]([link]) says that, when returning false in validate, it will check for other possibilities; but this does not happen, we receive a 404 page not found error. <img width="756" alt="Image" src="[link] /> <img width="1611" alt="Image" src="[link] /> <img width="1611" alt="Image" src="[link] /> Am I doing something wrong? <img src="[link] style="max-width: 100%" width="20px">

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6140 · Cannot restart nuxt: The server is not running
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬9 · closed · labels: 3.x/🛠️ dx/bundler:vite/❗ p4-important
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]-20220130.1630` - Builder: `vite` - User Config: `modules`, `nitro`, `buildModules`, `alias`, `runtimeConfig` - Runtime Modules: `~/modules/nuxt-mdg` - Build Modules: `nuxt-windicss@^2.2.8` ### Reproduction 1. yarn dev 2. Change an .env variable while the dev server is running. ### Describe the bug Noticed this error when changing the .env file. ### Additional context _No response_ ### Logs ```shell i .env updated. Restarting nuxt... 12:28:59 ERROR Cannot restart…

### CASE-6160 · Compilation problem does not report correctly when running in Teamcity (& likely other CIs)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍1 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create a default nuxt project and create a broken component - for example importing non-existing component (or download linked CodeSandbox project) 2. Run to check for expected behaviour yarn install && yarn build && echo "should not see this" You will get nuxt fatal error and "should not see this" will not be printed. 3. You can run same project in Teamcity to see build would succeed and no logs printed, but easier is to simulate this by setting env variable, e.g. export BUILD_NUMBER=123 4. Clean up…

### CASE-6197 · Vite SASS modern compiler causes missing sourcefiles issue
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, vite, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/bundler:vite
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v22.1.0 - Nuxt Version: 3.13.0 - CLI Version: 3.13.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, vite - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] 1. yarn && yarn dev 2. Open first page I could reproduce this in dev env only ### Describe the bug If you use new Vite's modern-compiler at the same time as global SCSS variables, Nuxt logs missing sourcemaps to your console. ### Additional context…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6169 · Problems with asyncData on SPA when the route is reused
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - Enter a page with a conditional asyncData and data options - Reenter it ### What is expected ? The asyncData from the old navigation should not be merged on the data when the page is reentered ### What is actually happening? Every time the page is rendered, the async data is being reused. Maybe causing a memory leak and data inconsistency ### Additional comments? A simple page example: ```js export default { data() { return { page_1: false, page_2: false, }; }, asyncData({ route }) { const key =…

### CASE-6173 · possible memory leak dev
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory Started happening on the latest RC8. Happens on hmr rebuild. Sorry but can't provide more detail... I will try as I find more but I wanted to report this. Have not pushed to production yet, so not sure if it occurs but I assume it should not. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1426">#c1426</a>)</em></sub></div>

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6174 · bug - this.$router.push doesn't work for the first click where hash is present
- **Principles**: P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍0 💬9 · closed · labels: 2.x
- **Excerpt**: Reproduction 1. Click on the link on the page with the hash, eg.: ```<nuxt-link :to="`${postLink(post)}#add-comment-form`">``` Page is changing correctly. 2. After that click on the second link, eg.: `<a @user="changeCategory(c)">category</a>` where changeCategory: ```js methods: { changeCategory (cat) { const url = categoryLink(cat) console.log('moving to ', url) this.$router.push({ path: url }) } }, ``` The method is called, the progress bar is animating but the page doesn't change. 3. To change to page I need to click once again on the same link. The bug is only present when the first link…

