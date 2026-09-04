# Case Chunk 057 — Round 57

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6601 · useSeoMeta or useHead with ssr:false
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr, vite, app, css, modules, build, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction Hard to put a reproduction link as it requires to be deployed, but you can use my app link instead [link] ### Describe the bug On my app specific to this page [link] I added the code to add some meta tags ``` const config = useRuntimeConfig() useSeoMeta({ title: 'View…

### CASE-6604 · cdnURL from nuxt.config.ts doesnt show up in nuxt.options.app property in a module
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs details
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.17.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, ssr, app, modules, pwa - Runtime Modules: ~/modules/cdn-url-repro/index.js - Build Modules: - ### Reproduction [link] ### Describe the bug When accessing the cdnURL property, we notice that the value is empty. ### Additional context _No response_ ### Logs _No response_

### CASE-6606 · Top-level await in layout breaks hydration in Nuxt 3.6
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍5 💬6 · closed · labels: 3.x/❗ p4-important/suspense
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.20.0` - Nuxt Version: `3.6.2` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [Here's a reproduction of the bug running on Nuxt 3.6.2]([link]). And for comparison [here's the same reproduction running on Nuxt 3.5.3]([link]) and the bug isn't there. ### Describe the bug Starting in Nuxt 3.6, using top-level await in a layout causes the hydration to fail because `nuxt.isHydration` is set to `false` before the hydration has…

### CASE-6607 · ERROR [unhandledRejection] require() of ES Module
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, tailwind
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.17.0 - Nuxt Version: 3.5.3 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: modules, buildModules, colorMode, ssr, pwa, tailwindcss, css, postcss, devtools - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email]-rc.1-28126030.07836ae - Build Modules: @user/[email] ### Reproduction at Object.<anonymous> (node_modules/ansi-align/index.js:3:21) at async Promise.all (index 0) at async normalizedModule (node_modules/@user/kit/dist/index.mjs:2140:17) at…

### CASE-6609 · missing css stylesheets in production build
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍10 💬6 · closed · labels: 3.x/workaround available/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.0 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: css, devtools, experimental, modules, postcss - Runtime Modules: @user/[email]-beta.12 - Build Modules: - ### Reproduction repo: [link] follow the steps in [link] the readme also mentions 3 workarounds - setting `experimental: { inlineSSRStyles: false }` in `nuxt.config.ts` - deleting `i18n.config.ts` (may be related to [link]) - downgrading to v3.5.3 ### Describe the bug css stylesheets are not included in a production…

### CASE-6610 · When ssr: false, baseURL is not set to _nuxt folder after build. Can not find /_nuxt/ files
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/nitro/upstream
- **Excerpt**: ### Environment ``` - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: ssr, app - Runtime Modules: - - Build Modules: - ``` It repeats on 3.5.3 too. ### Reproduction Project: [link] Build with nuxt generate: [link] ### Describe the bug When using `nuxt generate` with `ssr: false`, with different `baseURL`, entry files from` /_nuxt/` are lost. Modifying `app.buildAssetsDir` didn't help. ### Additional context It may not depend on ssr ### Logs ```shell-script Failed to load resource: the…

### CASE-6611 · spaLoadingTemplate = false is not honored
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v16.15.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: ssr, modules, nitro, spaLoadingTemplate, app, i18n, alias, vite, css, postcss, build - Runtime Modules: @user/[email]-beta.9-f64c966, @user/[email]-beta.9 - Build Modules: - ------------------------------ ### Reproduction In nuxt.config.ts set spaLoadingTemplate: false ssr:false ### Describe the bug The spaloading page is shown even when spaLoadingTemplate is set to false ### Additional context…

### CASE-6612 · createError() always shows full-screen error.vue even without fatal: true
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.14.0 - Nuxt Version: 3.5.3 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite 11:49:48 AM - User Config: css, app, build, runtimeConfig, vue, ssr, nitro, routeRules, vite, experimental, devtools ### Reproduction Just throwing an error with createError in a client plugin ### Describe the bug Trying to throw a non fatal error I can access in the app with useError(), but it always renders the error.vue component. `throw createError({message: 'non fatal error'})` ### Additional context _No response_ ### Logs _No response_

### CASE-6615 · npm run generate stopped generating index.html
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` (11) - Node Version: `v18.16.0` - Nuxt Version: `3.3.2` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `pages`, `ssr`, `debug`, `dev`, `modules`, `pwa`, `app`, `vue`, `ignore` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction project is pretty big and huge parts of code may not be shared, not sure how to create a reproduction. ### Describe the bug Since yesterday when running npm run generate, nuxt will…

### CASE-6616 · useFetch/createError causing [Vue warn] on error in SSR/production
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍5 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.5.2 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug When using "throw createError" on a failed useFetch an error it causes a Vue warn on the server. It only happens after build/preview, _not_ in dev mode, and only on the initial SSR request. To reproduce - build - preview - goto/refresh [link] - "[Vue warn]: Component <Anonymous> is missing template or render function." shows up in the…

### CASE-6621 · After update to Nuxt 3.5.0 after run npm i Cannot read properties of undefined (reading 'replace')
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, tailwind
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.14.2 - Nuxt Version: 3.5.0 - Nitro Version: - - Package Manager: [email] - Builder: vite - User Config: ssr, components, modules, pinia, svgo, css, tailwindcss - Runtime Modules: @user/[email], @user/[email]-beta.12, [email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Run ``npx nuxi upgrade --force``, and after I got a lot of error. Then delete node_modules and run `npm i` and have error. ### Describe the bug Bug after npm i command. ###…

### CASE-6625 · Fake [Vue warn]: Hydration text mismatch with nuxi dev
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: meta, routeRules, runtimeConfig, pages, css, components, modules, content, i18n - Runtime Modules: @user/[email], @user/[email]-beta.11 - Build Modules: - ------------------------------ ### Reproduction A minimal reproduction is not possible because it requires to update the repo to reproduce. ### Describe the bug When developing, every time I make a change, the preview reloads showing a fake…

### CASE-6628 · Nuxt 3.4.0 with pinia
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Windows_NT - Node Version: v16.20.0 - Nuxt Version: 3.4.0 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: typescript, ssr, modules - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction [link] ### Describe the bug `npm run dev` gets error: ``` pinia was called with no active Pinia. Did you forget to install pinia? const pinia = createPinia() app.use(pinia) This will fail in production. ``` ### Additional context _No response_ ### Logs _No…

### CASE-6633 · The requested module '/_nuxt/node_modules/.vite/deps/vue.js does not provide an export named 'Component'
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `runtimeConfig`, `experimental`, `app`, `nitro`, `css`, `vite`, `modules`, `apiParty` - Runtime Modules: `[email]`, `@user/[email]-27954023.4cee565`, `[email]` - Build Modules: `-` ### Reproduction Sorry i can't give u links on project ### Describe the bug When i update 3.1.2 on 3.2.0 i have error The requested module '/_nuxt/node_modules/.vite/deps/vue.js?v=f21a0b11' does not provide an export named…

### CASE-6634 · navigateTo result to a promise error
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript, bootstrap, vue, mobile
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxi 3.2.0 10:58:43 10:58:43 RootDir: /home/dev/Github/Delyss/delyss-mobile 10:58:43 Nuxt project info: 10:58:43 ------------------------------ - Operating System: `Linux` - Node Version: `v18.13.0` - Nuxt Version: `3.2.0` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `typescript`, `head`, `css`, `vite`, `modules`, `i18n`, `server`, `runtimeConfig` - Runtime Modules: `@user/[email]-beta.9`, `@user/[email]`, `bootstrap-vue-3/nuxt`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction I'm not able to…

### CASE-6637 · `useFetch` cannot fetch files from `public` folder during SSR
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍6 💬6 · closed · labels: 3.x/workaround available/pending triage/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug When trying to fetch files from public, e.g. `/my-data.json`, `useFetch` will throw a 404 on server-side but will work fine on client-side. Example: `useFetch('/my-data.json')` Expected: It should find the file during SSR already. ### Additional context…

### CASE-6639 · Start wrong port number
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows - Node Version: v18.0.0 - Nuxt Version: 3.0.0-rc.12 - Package Manager: [email] - Builder: vite - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ### Reproduction - ### Describe the bug I want set the project to start on port `3000`, but boot on a different port. Then I checked that the port I wanted to start was not occupied. I'm sure this port is not occupied. This my config: ```typescript export default defineNuxtConfig({ ssr:…

### CASE-6643 · defineNuxtComponent doesn't support layout property
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.17.1` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `build`, `modules`, `buildModules` - Runtime Modules: `@user/[email]-beta.11` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction Try using different layout on the page: ``` <script lang="ts"> export default defineNuxtComponent({ layout: 'admin', }) </script> ``` ### Describe the bug Hi, I'm migrating the project on options API to Nuxt 3, and looks like `layout` option doesn't work…

### CASE-6644 · 404 Cannot find any route matching
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍5 💬6 · closed · labels: 3.x/🛠️ dx/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `ssr` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug Server api routes that `return undefined` or nothing at all will run, but the server will return an error that does not help finding the issue: ```ts export default defineEventHandler(async (event) => { try {…

### CASE-6645 · Generation with SSR produces incorrect markup.
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxi 3.0.0-rc.12 00:36:52 RootDir: /Users/d/Repositories/nuxt-debug/nuxt-app 00:36:53 Nuxt project info: (copied to clipboard) 00:36:53 ------------------------------ - Operating System: `Darwin` - Node Version: `v18.11.0` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `target` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug There are only 2 pages. When using `npm run dev` both are rendered and both client-side navigation and URL…

### CASE-6651 · Autoimported components (~~/.nuxt/components) are not reliable code-wise
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ➜ npx nuxi info Nuxi 3.0.0-rc.9 11:55:40 RootDir: /Users/angurias/Developer/helium/sp-product-frontend-2 11:55:42 Nuxt project info: 11:55:42 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `typescript`, `srcDir`, `modules`, `css` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction - Have lots of components - Try to import lots of components (not necessarily all of…

### CASE-6652 · change vite.server.port not work
- **Principles**: P-F4 · **Env**: opera, vite, nuxt
- **Signals**: 👍0 💬6 · closed · labels: ✨ enhancement/3.x/🍰 p2-nice-to-have
- **Excerpt**: ### Environment Nuxt project info: 18:48:43 ------------------------------ - Operating System: `Darwin` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.9` - Nitro Version: `0.5.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias`, `ssr`, `vite` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction 1. git clone [link] 2. change nuxt.config.ts, set vite.server.port=3001 3. npm run dev ### Describe the bug always use port 3000 & _nuxt (hmr.path) ### Additional context _No response_ ### Logs _No response_

### CASE-6653 · Cannot find module '.output/server/node_modules/pinia/dist/pinia.mjs' after RC9
- **Principles**: P-F4 · **Env**: opera, ios, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Operating System: `Darwin` Node Version: `v14.19.3` Nuxt Version: 3.0.0-rc.9 Nitro Version: 0.5.0 Package Manager: [email] Builder: vite User Config: nitro Runtime Modules: - Build Modules: - ### Reproduction Run any nuxt v3 project with the pinia package.json ```json "dependencies": { "@user/nuxt": "^0.4.1", "@user/qs": "^6.9.7", "axios": "^0.27.2", "pinia": "^2.0.21", "qs": "^6.10.3" }, "devDependencies": { "@user/eslint-config": "0.25.2", "@user/vue3-ssr": "^0.15.10", "@user/nuxt3": "^0.2.3", "@user/color-mode": "3.1.4", "@user/mockjs": "^1.0.6", "@user/qs": "^6.9.7",…

### CASE-6659 · nuxt3 static mode runtime server fallbacks to index.html
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `target`, `generate`, `modules`, `css`, `vite`, `intlify`, `runtimeConfig`, `app`, `nitro` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction [link] `npm run generate` `npm run preview` - navigate to `/get-started` path - see the blinking `hello from root/index` or view the source code, isnt the source code from…

### CASE-6660 · Duplicated path prefix with static rendering and RC6
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment ----------------------------- - Operating System: `Linux` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.6-27641313.416f98b` - Package Manager: `[email]` - Builder: `vite` - User Config: `srcDir`, `ssr`, `app`, `publicRuntimeConfig`, `nitro`, `alias`, `typescript`, `hooks`, `build`, `css`, `buildModules`, `telemetry`, `intlify`, `dayjs`, `vite` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` ------------------------------ ### Reproduction Run a static build with : nuxi generate ### Describe the bug Duplicated…

### CASE-6662 · Route Middleware does not get triggered if its defined inside layout
- **Principles**: P-F4 · **Env**: vite, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `ssr`, `vite`, `plugins`, `css` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction StackBlitz URL: [link] ### Describe the bug middlewares are working for pages, but not for layouts see stackblitz. ``` definePageMeta({ middleware: ["somelayout"] }) ``` If you use this code inside an page, it works. But if you use it inside an layout, and an page uses that layout it does not get triggered. This functionality actually works in Nuxt2 ###…

### CASE-6663 · inject `<script>` in rendered HTML when `ssr: false`
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍9 💬6 · closed · labels: ✨ enhancement/3.x/workaround available/🍰 p2-nice-to-have
- **Excerpt**: ### Environment Nuxt project info: 11:29:52 ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `modules`, `ssr`, `app`, `css`, `vite` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug As described here: [link] I need to inject a script in the `<head>` tag, to be able to set some runtime configuration on the global `window` object. I'm injecting the script using the…

### CASE-6664 · Setting route.meta.layout causes a flash of the default layout when server rendering
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v14.19.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [Minimal reproduction repo]([link]) I tried recreating it in CodeSandbox but had issues with `route.meta.layout` working at all, it seemed to take no effect, hence the GitHub link above. The bug can be reproduced in both development and production using the standard commands. Visiting the /test route…

### CASE-6669 · Vue-demi not working with prerendering (nuxi generate)
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite, tailwind
- **Signals**: 👍2 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `target`, `bridge`, `vite`, `alias`, `nitro`, `ssr`, `meta`, `css`, `tailwindcss`, `modules`, `watch`, `runtimeConfig`, `build`, `storybook` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] (not sure if this really reproduces the error, I'm currently on a low-memory machine and nuxi generate on stackblitz fails with out of memory). [link] ### Describe the bug 1. Set `ssr: true` and…

### CASE-6670 · Support router in hash mode (spa)
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍3 💬6 · closed · labels: ✨ enhancement/3.x/pages/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.19.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `typescript` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction - ### Describe the bug How to config nuxt 3 router to use [hash-mode]([link])? I know the docs is not finished yet, so I searched the source code, but it seems there is no way to use the `createWebHashHistory` [link] ### Additional context _No response_ ### Logs _No response_

### CASE-6674 · The requested module does not provide an export named 'meta'
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27375427.d07d572` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `ssr`, `vite`, `css`, `target`, `head`, `buildModules`, `stories`, `telemetry` - Runtime Modules: `-` - Build Modules: `~/lib/module.js` ------------------------------ ### Reproduction Use `extendPages` with or without providing meta, and this error will be encountered. ```js extendPages({ name: 'myRoute, path: `/myRoute`, file: myRouteComponent, // export default { render () { ... } } meta:…

### CASE-6679 · Trying configure reouter.scrollBehavior
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27313139.1c88580 21:40:20 RootDir: C:\Users\SuPP\Documents\Code\santrek-review 21:40:25 Nuxt project info: 21:40:25 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27313139.1c88580` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `publicRuntimeConfig`, `modern`, `ssr`, `css`, `build`, `meta` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [Play Demo]([link]) ### Describe the bug Cant configure router.scrollBehavior for navigate on the page. ### Additional context _No…

### CASE-6681 · nuxt 2 or vue 2 plugins not install
- **Principles**: P-F4 · **Env**: nuxt, vue, react
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment client ### Reproduction [link] ### Describe the bug every time I try to add a plugin that belongs to nuxt2 or vue2, I encounter the below error `Cannot read properties of undefined (reading '_c') ` below is the complete error log when I try to add[ @user/vue-it-bigger]([link]) ``` Cannot read properties of undefined (reading '_c') at Proxy.t2 ([link]) at renderComponentRoot ([link]) at hydrateSubTree ([link]) at ReactiveEffect.componentUpdateFn [as fn] ([link]) at ReactiveEffect.run ([link]) at instance.update ([link]) at setupRenderEffect ([link]) at mountComponent ([link])…

### CASE-6684 · Register vue components in plugin are not working on SSR
- **Principles**: P-F4 · **Env**: opera, macos, vue, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment Operating System: macOS Node Version: v16.19.0 Nuxt Version: Nuxt 3.0.1-rc.0-27894335.0db3c63 Nitro Version: Nitro 2.0.0-27897925.b91db6f Builder: vite ### Reproduction [link] ### Describe the bug Vue Component that are register over plugin are not working on SSR (Hydration Missmatch) By adding the import in the app.vue it will work on SSR `<script lang="ts" setup> import { FontAwesomeIcon } from '@user/vue-fontawesome'; </script>` ### Additional context _No response_ ### Logs ```shell [Vue warn]: Hydration node mismatch: Client vnode: svg Server rendered DOM: <div>​</div>​ at…

### CASE-6688 · Hydration stop working when `target: static` and url contain non-ascii char
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: v2.15.8 - node: v12.19.0 ### Reproduction Check [this repo]([link]) for example code & detail reproduce…

### CASE-6694 · SSR not working on export.exclude routes
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Versions - nuxt: v2.13.3 - node: v12.14.0 <details open> <summary>Additional Details</summary> I am missing something about export.fallback ? nuxt.config.js: ``` mode: 'universal', target: 'static', export: { exclude: [ /^\/admin/, // path starts with /admin ], } ``` index route return : `<html data-n-head-ssr>` /admin route return : `<html>` [dist folder]([link]) </details> ### What is Expected? www.website.com/admin will serve fully html content (SSR not SSG because route excluded from be pre-generated) ### What is actually happening? looks like www.website.com/admin serve SPA version…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6602 · Plugin Registration Order with layers
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍3 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/layers
- **Excerpt**: ### Describe the feature ## The Environment 3 layers 1. @user/docus 2. @user/qs-docu-tool (with i18n, vuetify, mermaid and stuff) 3. app layer > the app you are working on ![image]([link] framework]/assets/53934248/714a2eba-eb31-4b7a-85b3-0273f31666d6) Clarification about layers shown in the image - `@user/qs-docu-tool` extends from `@user/docus`, - the app extends from `@user/qs-docu-tool` ## the challenge I want to access i18n in my plugin carousel of the app layer. I cant, since the plugins of @user/qs-docu-tool are loaded afterward. I tried both, setup plugins just by name and with number…

### CASE-6603 · Element missing end tag in <NuxtWelcome /> component after recent update.
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍4 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Somewhat surprising it hasn't been noticed yet but this bug is occurring in the StackBlitz environment linked on the [Installation page]([link]) in Nuxt's documentation [link] ![image]([link] framework]/assets/17751995/5c2393ea-e251-4c02-b25e-fa4a55d4ce6a) and locally when I attempt to do the…

### CASE-6605 · external script doesn't always loads when we navigate between components nuxt 3
- **Principles**: P-A3, P-H1 · **Env**: nuxt, tailwind, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment nuxt 3, tailwind.css ### Reproduction ![image]([link] framework]/assets/17316135/7fb73313-773a-4e98-9e40-d34dcd3bd415) ### Describe the bug external script doesn't always loads when we navigate between components nuxt 3 , i have created component dashboard/index.vue added this code ```` <template> <div> <div id="highchart-1" class="rounded-lg"></div> </div> </template> <script setup> useHead({ script: [ { src: '[link] type: 'text/javascript', async: true, body: true }, ], }); onMounted(() => { initializeChart(); }); const initializeChart = () => {…

### CASE-6608 · Cannot find module `pinia\dist\pinia.prod.cjs` when using npm package that exports pinia store only when deployed to vercel
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.12.0 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: app, build, css, devtools, modules, runtimeConfig, typescript, vite - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction public npm package: [link] public github repo: [link] To reproduce the error, fork [link] and deploy to vercel. I already deployed vue3-nuxt-demo to vercel so you can see the error if you go to [link] ![image]([link]…

### CASE-6613 · clearError only runs in vue part, not in node
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment [link] ### Reproduction When i launch the app, it goes to '/' that produces an error. In error page we return to /ok page, and the error disapears. But if you push CTRL + F5 many times, raises ![image]([link] framework]/assets/77386602/7a8ec245-aa93-4920-b308-6e459d1692b0) caught SyntaxError: Invalid or unexpected token In our project (not in stackblitz), when we clearError we can navigate correctly, but when we refresh the page with F5, the error is cached. ### Describe the bug It seems that clearError only clear error in vue part, not in node part ### Additional context _No…

### CASE-6617 · Memory leak
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment nuxt 2.16 ### Reproduction Simply run nuxt app and run a load test on it. We observe increasing memory consumption ### Describe the bug There seems to be large memory consumption here. <img width="1158" alt="image" src="[link] framework]/assets/133934820/b6708db2-799d-4e39-8e60-67a68937b3af"> <img width="1161" alt="image" src="[link] framework]/assets/133934820/c8918af4-ccd6-4fef-9afe-3c49fc4b0d1a"> ### Additional context _No response_ ### Logs _No response_

### CASE-6618 · renderJsonPayloads causes Cannot stringify arbitrary non-POJOs error
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v16.14.0 - Nuxt Version: 3.5.0 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: typescript, app, ssr, experimental, routeRules, postcss, css, modules, sitemap, image, unocss, runtimeConfig, vite, build - Runtime Modules: [email], @user/[email], @user/[email]-28059208.2abef1b, [email], @user/[email], @user/[email], @user/[email], @user/[email], () - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Same as [link] framework][ref].…

### CASE-6619 · antdv [Vue warn]: Hydration node mismatch
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, vue, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.14.1 - Nuxt Version: 3.4.0 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: modules, runtimeConfig, css, build, vite - Runtime Modules: @user/[email] - Build Modules: - ### Reproduction ![image]([link] framework]/assets/52020723/74591e29-b495-4fc4-9269-2f18d454ba6c) <img width="1462" alt="image" src="[link] framework]/assets/52020723/c84e8e29-3d44-424f-82ca-4cf71a1feef0"> ### Describe the bug It seems that the a-carousel component has not been properly parsed on the server. I attempted to configure…

### CASE-6620 · ERROR Failed to resolve import "fsevents" from "node_modules\.cache\vite\client\deps\chunk-MXLRMPOP.js?v=9e530d8b". Does the file exist? (x6)
- **Principles**: P-A3, P-H1 · **Env**: vite, nuxt, tailwind
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment "@user/nuxt": "^1.0.5", "@user/tailwindcss": "^6.7.0", "@user/nuxt": "^0.4.11", "@user/node": "^18", "@user/core": "^10.1.2", "@user/nuxt": "^10.1.2", "element-plus": "^2.3.4", "nuxt": "^3.5.0", "nuxt-icon": "^0.4.0", "pinia": "^2.1.3", "prettier": "3.0.0-alpha.7-for-vscode", "prettier-plugin-tailwindcss": "^0.3.0", "sass": "^1.62.1" ### Reproduction // nuxt.config.ts modules: [ "@user/nuxt", "@user/tailwindcss", "@user/nuxt", "@user/nuxt", "nuxt-icon", ], These modules need to be installed ### Describe the bug ![image]([link]…

### CASE-6622 · Vue 3.3 components highlighting
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vue, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Editor: VSCode ------------------------------ - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.4.3 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [Reproduction]([link]) ### Describe the bug After upgrading to Vue 3.3 IDE (VSCode) does not recognise (highlight) components in template and "go by reference" (`ctrl + click`) is unavailable now. ![image]([link] framework]/assets/45385480/38a93ea4-3a06-466b-af80-02466b66a022) This is a…

### CASE-6626 · nuxt3 打包后 组件的样式会重复加载 也没办法 提取页面的样式到独立文件上不利于SEO
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment "nuxt": "^3.3.3", ### Reproduction <img width="359" alt="image" src="[link]> ### Describe the bug ![Uploading image.png…]() ### Additional context _No response_ ### Logs _No response_

### CASE-6627 · Hydration mismatch when custom element contains child node
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v19.8.1` - Nuxt Version: `3.4.1` - Nitro Version: `2.3.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `vue` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug If I have a custom element that has a child node, I get an hydration mismatch. ![image]([link]) This reproducer configures a custom element [`my-component`]([link]) (using [a nitro hook]([link] framework][ref][ref])) and [uses it]([link]). The custom element renders a red block on the client side. Interestingly this does…

### CASE-6630 · The requested module '/_nuxt/node_modules/.vite/deps/vue.js' does not provide an export named 'Component'
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍3 💬6 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.3.2` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug After updating to version 3.3.2 I get this error when using npm module: ![image]([link]) Module repository: [link] With Nuxt version 3.1.* it works fine: [link] ### Additional context _No response_ ### Logs _No response_

### CASE-6636 · Symptoms of server rendering when adding plugins without server or client prefixes
- **Principles**: P-A3, P-H1, P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - nuxt: 3.1.1 - node: v16.13.1 - package manager: yarn 1.22.11 ### Reproduction [link] From the repository above `yarn install` `yarn dev` <img width="143" alt="image" src="[link]> Click Nuxtlink (one, two) in the header to move the page ### Describe the bug When adding a plugin without a server or client prefix, the server renders it unconditionally when routing and moving. Is this intended? (For example, plugins/cookies.ts instead of plugins/cookies.server.ts.) ### Additional context _No response_ ### Logs _No response_

### CASE-6642 · ERROR Cannot start nuxt: Cannot destructure property 'Server' of '_engineIo.default' as it is undefined.
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.18.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Create a module for socket.io and import it into the nuxt.config.ts file. ![image]([link]) ![image]([link]) ### Describe the bug When trying to import module with socket configured, the nuxt server crashes and throw the error ""ERROR Cannot start nuxt: Cannot destructure property…

### CASE-6647 · rc.12 useLazyAsyncData refresh() hangs when called during script setup on subsequent page visit
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍4 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.18.0` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `buildModules` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction 1. Clone issue repo ``` git clone [link] ``` 2. Install app ``` cd nuxt3rc12-datafetch yarn install ``` 3. Run dev server ``` yarn run dev ``` 4. Go to localhost:3000. The page fetches a random dog image. 5. Click on the page 2 link to open the second page. 6.…

### CASE-6650 · Css fails after packaging
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: 3.x/workaround available/🐛 bug/🔨 p3-minor
- **Excerpt**: after building， Inconsistent css property selectors <img width="588" alt="image" src="[link]> <img width="810" alt="image" src="[link]>

### CASE-6654 · cannot read properties of null (reading 'setupContext')
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment live ### Reproduction ![image]([link]) ### Describe the bug when I upgrade the version to rc-8, I can start the app local successfully. and build also is succeed. but when I start the built files on live, the error is coming out. ### Additional context _No response_ ### Logs _No response_

### CASE-6656 · error using <center> and content querying
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment / Reproduction First, create a new project with content extension: ```bash npx nuxi init bug -t content cd bug npm install && npm run dev ``` Create `pages/x.vue` (this is just a random name): ```vue <script setup> const { data } = await useAsyncData('home', () => queryContent('/').findOne()) </script> <template> <h1>this works</h1> <div> <h1>this works</h1> </div> <center> <h1>this does not work. Remove the center block to make it work</h1> </center> {{ data }} </template> ``` video [link] ### Describe the bug i get this error When adding a center 'block': ``` 500 Invalid…

### CASE-6661 · ERROR [nuxt] [request error] Invalid value used as weak map key (Vuetify elements)
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `buildDir`, `srcDir`, `css`, `typescript`, `build`, `modules`, `runtimeConfig` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction <img width="1242" alt="image" src="[link]> ### Describe the bug Running nuxi generate produces ERROR [nuxt] [request error] Invalid value used as weak map key issue is probably related to [link] I also believe that this…

### CASE-6665 · Nuxt 3 Vite server proxy does not work after build
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite, typescript, vue
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `components`, `buildModules`, `typescript`, `css`, `plugins`, `unocss`, `runtimeConfig`, `vueuse`, `vite`, `build`, `nitro` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]`, `@user/[email]` ------------------------------ ### Reproduction **nuxt.config.ts** `vite: { server: { proxy: { "/proxy_path": { target: "[link] changeOrigin: true }, } }` <img width="373" alt="Screen Shot…

### CASE-6666 · Take commented out code as import
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v14.17.4` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `components`, `srcDir`, `buildModules`, `css`, `build`, `alias`, `meta`, `app`, `vite`, `router`, `typescript`, `runtimeConfig`, `modules`, `sitemap` - Runtime Modules: `~/modules/sitemap` - Build Modules: `@user/[email] ### Reproduction N/A ### Describe the bug I commented out this function in composables/utils.ts ![image]([link]) However, it seems like Nuxt still takes it as an import (composables auto imports). After I delete the…

### CASE-6668 · All examples look the same
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment I am attempting to work on this example web site: [link] All examples display the default welcome site. This also happens if you run the examples locally. Cheers ### Reproduction Go to e.e. the [components examples]([link]) ### Describe the bug All components examples show a default page EDIT: ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-6673 · Build failed canot resolve public image
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/bundler:vite/upstream
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: latest - node: 16.11 ### Reproduction [link] <!-- Link to a minimal test case based on one of: - A fork…

### CASE-6675 · cannot find module ".nuxt/server/index.mjs"
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vite, desktop
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ![image]([link]) ### Reproduction Used "npx nuxi init nuxt3-app" command ### Describe the bug i get stuck in the loading page with the error log , i tried to set vite to false in the nuxt.config.ts but same ### Additional context _No response_ ### Logs ```shell Nuxt CLI v3.0.0-27369360.33ebb01 22:08:24 22:08:25 > Local: [link] > Network: [link] i Vite warmed up in 2050ms 22:08:35 √ Vite server built in 3328ms 22:08:37 √ Nitro built in 380 ms 22:08:37 ERROR [worker] Cannot find module 'C:\Users\karim\desktop\apps\shippify\.nuxt\server\index.mjs' imported from…

### CASE-6680 · Nuxi: ERROR Invalid template name: undefined
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, webpack
- **Signals**: 👍2 💬6 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment machine 1: - Operating System: `Darwin` - Node Version: `v16.12.0` - Nuxt Version: `0.0.0` - Package Manager: `unknown` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` machine 2: <img width="583" alt="Screenshot 2021-10-24 at 15 17 16" src="[link]> ### Describe the bug Hello I'm unable to init a nuxt3 project, I get the error: ``` bash ERROR Invalid template name: undefined ``` I tried on another machine with node@user and I'm getting the same error ### Reproduction Simply run: `npx nuxi init app-test` ### Additional context _No response_…

### CASE-6682 · Documentation is not very clear regarding static site generation in Nuxt 3
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍5 💬6 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.19.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `routeRules` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug The Nuxt 3 documentation regarding Nuxt 3 states that static site generation should be as simple as setting `ssr: false`, using `nuxi generate` and potentially using `routeRules`. Despite doing this, the site doesn't seem to be rendering statically. ![image]([link]) This is my Nuxt config: ```ts export…

### CASE-6683 · `$fetch` on `localhost` fails while `127.0.0.1` is fine
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ## Reproduction With a REST API running on `localhost`: 1. Call it by using `$fetch` on `127.0.0.1`. It returns successfully, with the API showing a request in its logs: ```vue <script> export default defineComponent({ async setup() { await $fetch("[link]); }, }); </script> ``` ![image]([link]) 2. Call it by using `$fetch` on `localhost`. It returns `500 fetch…

### CASE-6686 · build Error：Could not resolve './use-prevent-globalThis' from ./use-prevent-globalThis?commonjs-external
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍3 💬6 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.18.0` - Nuxt Version: `3-3.0.0-27235989.d52b1e8` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `meta`, `alias`, `css`, `vite` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug build error `Could not resolve './use-prevent-globalThis' from ./use-prevent-globalThis?commonjs-external ` ![image]([link]) ### Reproduction [link] 这个项目在我这边build也报同样错误 ### Additional context _No response_ ### Logs _No response_

### CASE-6695 · Changing image bundle filenames doesn't work
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [2.9.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce [link]]([link] framework].js/issues/c59 "nuxt.js - Dash in layout filenames") filenames: { chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[chunkhash].js', img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]' }, chunk file names as updated but not img file names. Thanks. ### What is expected ? The img bundle filenames should be updated ### What is actually happening? It's not updated

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6614 · Define environment variable after npm build and before npm start
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.14.0 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: runtimeConfig, typescript, css, build, routeRules, vite, modules, gtm, devtools - Runtime Modules: @user/[email], [email], [email], [email], (), @user/[email], @user/[email], @user/[email]-beta.12 - Build Modules: - ------------------------------ ### Reproduction [link] run npm build and the npm start (see package.json start script) ### Describe the bug The documentation [link] says that we can…

### CASE-6632 · Auto import attempted for linked library
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬6 · open · labels: workaround available/🛠️ dx/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.19.0` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `devServer`, `css`, `modules`, `alias`, `vite` - Runtime Modules: `@user/[email]-beta.10` - Build Modules: `-` ------------------------------ ### Reproduction [link] Some notes: * The Library defines a variable 'h' in it's file (also works with the other auto-imported names, but due to minify, 'h' was the first one I found) * That variable may not be defined directly as `var h`, so…

### CASE-6648 · Nuxt 3: SSR `computed()` memory leak, because the ` isInSSRComponentSetup` variable is set to `false` on the server
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍1 💬6 · closed · labels: 3.x/🐛 bug/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction ```ts <script setup lang="ts"> import { computed } from 'vue'; // ... debugger; const result = computed(() => processor(props.input)); </script> ``` Then run with debugger, and step into `computed()` function, you will see the `isInSSRComponentSetup` variable is set to `false` on the server. ![image]([link]) ### Describe the bug Nuxt 3 SSR is…

### CASE-6655 · resolveComponent() not working, when variable is passed to it
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug Here comes a weird one. 🤪 I guess this code describes the problem quite well: ```js <script setup> const thisIsWorking = resolveComponent('FooBar'); const componentName = 'FooBar'; const thisIsNotWorking = resolveComponent(componentName); const thisIsAlsoNotWorking =…

### CASE-6672 · Lasted version of Nuxt not able to run in a container
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 📚 documentation/3.x/nitro
- **Excerpt**: ### Environment ~/website$ npx nuxi info Nuxt CLI v3.0.0-27415326.3c563fa 18:46:07 RootDir: /home/xxxx/website 18:46:08 Nuxt project info: 18:46:08 ------------------------------ - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.0.0-27415326.3c563fa - Package Manager: [email] - Bundler: Vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction If a project with one of the latest versions of nuxt is built and containerized into a docker container, the server will not be accessible. But if you use an older version of Nuxt,…

### CASE-6689 · Static error page (fullstatic or hybrid)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍13 💬6 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### Problem I've been trying for a few days to generate a fullstatic nuxt build with a 404 page. It seems for me that the most reliable way to do this was only with the fallback site option. My main problem with this fallback option is that the build turns the error page into a complete SPA page (with all client-side store and asyncData requests). In my case the API of the backend is not public accessible and the page need to be load data for the footer and header via a store. All of [these]([link] framework].js[ref]) workarounds not working or send request on client-side. Working with a…

### CASE-6691 · Proper documentation or blog for Nuxt production level set up
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt, tailwind
- **Signals**: 👍0 💬6 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: I am trying to create a boilerplate for nuxt projects with e2e testing with cypress, and unit testing, tailwind etc. with all the things that are present in this repository. [link] But, there were few issues with the existing project and this is not working with the latest version of cypress and few other packages. But While doing so, I am facing few issues while writing unit tests with jest. Few of them are - Unable to import dynamic imports of nuxt components in the unit tests. It is saying like unknown component. - Variables like $router are not available. For example, I am using this in…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6623 · $route updated too early when switching page
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🛠️ dx/🍰 p2-nice-to-have/suspense
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.4.3 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] 1. Click "Open in new tab" 2. Open dev tools 3. Click "bar" in the top menu 4. See Vue warnings in console ### Describe the bug When a page is switched with `<nuxt-link>`, `$route` updates too early (before the old page unmounts). This leads to a whole bunch of bugs unless specifically treated. In this reproduction, it emits Vue warnings when switching from…

### CASE-6631 · Seems to have a memory leek
- **Principles**: P-F5, P-H3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `extends` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction A normal repo [link] The working CI [link] A repo with potential memory leaks [link] The broken CI [link] ### Describe the bug Hello, Since I update to Docus 1.9.9 and to Nuxt 3.3.1, I noticed a huge usage of ram. With the normal repo, my computer use up to 1.5Go of RAM but with the broken repo, I use up to 3Go (and the GitHub…

### CASE-6641 · keep-alive calls unmount a component when I change a page but does not call mount when I return back
- **Principles**: P-F5, P-H3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment Nuxt Version: 3.0.0 ### Reproduction [link] npm i npm run dev Click on page 1 then page 3 (you will see mounted text in the console ) then page 4 (you will see unmounted in the console) then page 3 - the component doesn't call mounеed even though the unmounted hook was called We have a problem with devextreme-vue components because they clean all content on the unmounted hook. And components need mounted hook to be called ### Describe the bug We have a problem with devextreme-vue components because they clean all content on the unmounted hook. And components need mounted hook…

### CASE-6687 · Memory leak, JS out of memory in production
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 Hello i am using Nuxt.js 2.15.8, i am facing issues with memory leak in production, i tried to search and tackle the problem with no apparent findings. The thing is initially i suspected it's the app code itself, but two different apps are having the same issue which i can deduce it's happening within Nuxt.js itself or some dependency is what is causing it, perhaps @user/i18n? I am not sure about this, anyone has any insight what is causing it? I am afraid i have to ditch Nuxt.js completely because it's causing me…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-6624 · `scrollToTop: true` doesn't work for nested pages
- **Principles**: P-D4, P-F1, P-F5 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍3 💬6 · closed · labels: good first issue/3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug 1. Go to the "Account" page 2. Scroll a little 3. Go to the "Address" page The page should scroll to the top, because it is specified in `definePageMeta`. But it doesn't. If change the condition in [link] framework]/blob/main/packages/nuxt/src/pages/runtime/router.options.ts#L21 to: ```ts if (!position && from && to && (to.meta.scrollToTop…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-6629 · class of Html different between input and render
- **Principles**: P-C1, P-C2, P-C3, P-G4, P-E3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/upstream
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.3.3` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug The rendered class is not the same as the class I passed in the Html tag. I set default value of theme to **dark** ==> class of Html is **dark** When I set the value of theme in onMounted to **light** ==> class of Html is **dark light** ###…

### CASE-6693 · Nuxt adding vuetify-theme-stylesheet on page with vuetifymodule.
- **Principles**: P-C1, P-C2, P-C3 · **Env**: nuxt, vue
- **Signals**: 👍2 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: v2.14.1 - node: v12.18.3 ### Reproduction ![style tag here]([link]) <!-- Link to a minimal test case…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6635 · Onclick will not work if certain files are in the plugin folder
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🛠️ dx/🔨 p3-minor
- **Excerpt**: ### Environment I am running windows 10 and using firefox Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Create a vue page with a `@user` function on it that does something Install `@user/vue` using: ``` yarn add @user/vue graphql # or npm install --save @user/vue graphql ``` Next make a urql.js in plugin with this:…

### CASE-6638 · @user/kit version does not allow same versioning as @user/test-utils-edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Nuxt 3 defined the packages `@user/kit` and `@user/schema` as `3.0.0` When using the recommended package for testing `@user/test-utils-edge` - this package specifies: ``` "@user/kit": "npm:@user/[email]-rc.0-27838671.5f935aa" "@user/schema": "npm:@user/[email]-rc.0-27838671.5f935aa" ``` ### Describe the bug I get type mis-matches for `NuxtModule`…

### CASE-6646 · Cannot use 'in' operator to search for 'Symbol(h3ParsedBody)' in undefined Vercel serveless function
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-F4 · **Env**: opera, edge, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `unknown` - Builder: `vite` - User Config: `ssr`, `runtimeConfig`, `modules`, `strapi`, `vite`, `css`, `build`, `serverHandlers` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction Reproduction: [link] Steps to reproduce: - Deploy repo to Vercel using the env variable: NITRO_PRESET=vercel-edge; - Do a simple form submit; - Check Vercel Functions…

### CASE-6649 · Starting in https with a custom host uses untrusted certs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction N/A ### Describe the bug When running in https with a custom host, the used certificates are untrusted, resulting in Chrome blocking the page and there's no way to trust the certificate either. For now, I'll still use openssl to generate my own, which work fine (but you need to…

### CASE-6658 · Error when using `vue-i18n` after upgrading to `v3.0.0-rc.7`: The requested module 'unenv/runtime/mock/proxy-cjs' is a CommonJS module
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, vue, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.7` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `vite` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When I run `yarn build` and then to check out the result, I get the error shown below. This happens both locally with `yarn preview` and when I deploy to Vercel. I have tried it both with v3.0.0-rc.7` and the edge channel. ``` [nuxt] [request error] [unhandled] [500] Named export 'setupDevtoolsPlugin' not found. The…

### CASE-6692 · <nuxt-link> doesn't work in iOS Safari Nuxt v2.8.1
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, nuxt, vue, iphone
- **Signals**: 👍0 💬6 · closed · labels: stale/pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: 2.8.1 - node: 10.16.0 - vue-awesome-swiper: 3.1.3 - iOS: 13.7 (iPhone 8) [Sample Code]([link]) <!--…

### CASE-6698 · Executing npm run dev with nuxt-edge running throws a few warnings in the console
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce This happens when you run nuxt-edge only....NOT 2.8.1 Executing ```npm run dev``` with nuxt-edge running throws a few warnings in the console. THis is merely an annoyance, and not a blocker, but thought I'd be worth reporting. ### What is expected ? No errors or warnings in the console should be seen. ### What is actually happening? See logs attached. Note that no pages are loaded. This is right on a fresh build by calling ```npm run dev```. ╭─────────────────────────────────────────────╮ │ │ │ Nuxt.js…

### CASE-6699 · latest version of nuxt-edge breaks webpack build (css-loader issue)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt, webpack, vue
- **Signals**: 👍2 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.9.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce git clone [link] cd nuxt-css-loader-failure git checkout nuxt-edge-2.9.0-26026572.fc5502cd yarn yarn build ### What is expected ? no error ### What is actually happening? ERROR in ./pages/index.vue?vue&type=style&index=0&id=f6a825ce&lang=scss&scoped=true&…

### CASE-6700 · Can't prevent middle click to open href in new tab
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce ``` <template><a href="[link] @user.prevent @user.middle.prevent.stop="goto" >Should not open with middle click</a> <script> methiods:{ goto(e){ e.preventDefault(); return false } ``` ### What is expected ? should block middle click from opening in new tab ### What is actually happening? Chrome opens link in new tab. ### Additional comments? Left click works correctly (is blocking with .prevent). Middle isn't; <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6640 · Select box with v-model updates lazy when mounting the component
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ``` ### Reproduction Here is a minimal reproduction: [[link]]([link]) ### Describe the bug `v-model` is behaving weirdly when a value is already set while mounting the component. In the following example the select box initially shows option `A` then the Component re-renders and shows the correct…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6657 · Vite plugins (transforms) not run in SSR
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, vite, nuxt, vue
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.8-27673198.b4bea51` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug Seems like Vite transforms are not run in SSR in development mode, leading to a blink on these transforms while developing / booting the server. ### Additional context Not sure about transforms outside of Vue SFCs, but this one specifically occurs in <style>…

### CASE-6671 · `addRouterMiddleware` is not working with `@user/nuxt3`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-27495046.0d5ec20` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `buildModules`, `pageTransition`, `typescript`, `intlify` - Runtime Modules: `-` - Build Modules: `@user/[email]` ### Reproduction [link] ### Describe the bug When adding a global middleware from plugin, it doesn't trigger in the first page hit with @user/nuxt3 module installed. ### Additional context _No response_ ### Logs _No response_

### CASE-6676 · [SSR] Error transforming C:/XXXXXXXXXXXXXX/node_modules/nuxt3/dist/app/bootstrap.mjs: Faile d to resolve import "#build/plugins" from "node_modules\nuxt3\dist\app\bootstrap.mjs". Does the file exist?
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, windows, nuxt, bootstrap, vite
- **Signals**: 👍5 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27367970.e0fec80 16:20:55 Nuxt project info: 16:20:58 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27367970.e0fec80` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Clean installation of the nuxt 3 ### Describe the bug [SSR] Error transforming C:/xxx/node_modules/nuxt3/dist/app/bootstrap.mjs: Faile d to resolve import "#build/plugins" from "node_modules\nuxt3\dist\app\bootstrap.mjs".…

### CASE-6677 · playground fails with `vite: false`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, nuxt, vue, webpack
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🐛 bug/needs reproduction
- **Excerpt**: Error: ``` ERROR in ./node_modules/@user/ui/dist/components/NuxtExampleLayout.vue?vue&type=template&id=1165068e&ts=true Module parse failed: Unexpected token (8:30) File was processed with these loaders: * ./node_modules/unplugin/dist/webpack/loaders/transform.js * ./node_modules/unplugin/dist/webpack/loaders/transform.js * ./node_modules/vue-loader/dist/templateLoader.js * ./node_modules/vue-loader/dist/index.js * ./node_modules/unplugin/dist/webpack/loaders/transform.js You may need an additional loader to handle the result of these loaders. | | > export function ssrRender(_ctx: any,_push:…

### CASE-6678 · transition-group has no class or data attribute
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27319101.3e82f0f` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug transition-group with `tag` don't have classes, also it don't includes data-element, classes and data attribute only shows after changing transition-group property on hot reload but after refresh or in build-start it doesn't work ![obraz]([link]) ### Additional context…

### CASE-6685 · Don't work with class-style component
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: windows, vue, nuxt
- **Signals**: 👍2 💬6 · closed · labels: 3.x/🐛 bug/bundler:vite/upstream
- **Excerpt**: ### Environment - OS Windows 10 - node.js v14.18.0 ### Describe the bug ``` <template> <div> Hello World </div> </template> <script lang="ts"> import { Vue } from 'vue-class-component' export default class IndexPage extends Vue { // } </script> ``` error ``` runtime-core.esm-bundler.js:6568 [Vue warn]: Component is missing template or render function. at <Anonymous onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > key="/" > at <BaseTransition mode="out-in" appear=false persisted=false ... > at <Transition name="page" mode="out-in" > at <NuxtLayout key=0 name=undefined > at…

### CASE-6696 · Transition function doesn't have access to data object variables
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.9.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Load up the sandbox URL. 2. Get it to build the project with the settings and transition property. 3. See that the transition property function is unable to access `hasSwipeSpeed` ### What is expected ? I should be able to access the variables within data from the transition property somehow. ### What is actually happening? I get an error, and am unable to access the variables within data from the transition property function. ### Additional comments? Not entirely sure of the best way to access my…

### CASE-6697 · global transition-duration causes route/title change delay
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.9.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Navigate between the pages by pressing the button 2. After 2-3 times the title change in the tab is delayed 3. Continue navigating between the pages and keep focus on the tab ### What is expected ? 1. No route/title change delay 2. No fallback to default title ### What is actually happening? 1. Route/title change is affected by global `transition-duration` 2. Default title visible in tab between change ### Additional comments? Caused by: ``` *, ::before, ::after { transition-duration: 250ms; } ```…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6667 · Cannot hit debug breakpoints on webstorm
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍5 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Nuxt project info: 10:03:26 ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `components`, `hooks`, `serverMiddleware` - Runtime Modules: `-` - Build Modules: `-` - IDE: WebStorm/PhpStorm ------------------------------ ### Reproduction `tsconfig.json` ```json { // [link] "extends": "./.nuxt/tsconfig.json" } ``` `nuxt.config.ts` ```ts import {defineNuxtConfig} from 'nuxt' import path from "path"; // [link] const nuxtConfig = defineNuxtConfig({…

### CASE-6690 · Local External Js from assets, not working.
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: I Have this in my `nuxt.config.js` and I have my js files inside `assets/js/*.js` folder. ```js head: { title: 'diamond-motor-corp-web', meta: [ { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' } ], link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '~/assets/images/favicon-icon/apple-touch-icon-144-precomposed.png' }, { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href:…

