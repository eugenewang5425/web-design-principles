# Case Chunk 056 — Round 56

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6501 · useAsyncData returns undefined in SSR when component is used multiple times
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.19.1 - Nuxt Version: 4.2.1 - CLI Version: 3.30.0 - Nitro Version: 2.12.9 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] See the dev server log. If there are no messages like this, just reload the preview, so the SSR will be involved. Client side fetch works always (so also Hydratation mismatch error). ### Describe the bug When useAsyncData is used to fetch data in a component and this component is used multiple times on the page,…

### CASE-6502 · localStorage.getItem is not a function
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬6 · closed · labels: workaround available/pending triage/upstream
- **Excerpt**: ### Environment ```bash ------------------------------ - Operating System: Windows_NT - Node Version: v25.0.0 - Nuxt Version: 4.2.1 - CLI Version: 3.30.0 - Nitro Version: 2.12.9 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr, modules, i18n - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction 1. `git clone [link] 2. `pnpm install` 3. `pnpm dev` ### Describe the bug ```bash ℹ Error: localStorage.getItem is not a function ⁃ at…

### CASE-6512 · use server-fetched data in lazily hydrated components with useAsyncData
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · open · labels: good first issue/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.19.1 - Nuxt Version: 3.17.5 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] Open the browser console and scroll to the bottom of the site, until you see the API-call on the client-side ### Describe the bug When using `useAsyncData` inside a lazily hydrated component, the function from useAsyncData gets called on the client-side again, which makes me think that it is not picking up the…

### CASE-6514 · NuxtRoute doesn't work for extended pages pages:extend
- **Principles**: P-F4 · **Env**: opera, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.14.0` - Nuxt Version: `3.16.2` - CLI Version: `3.25.0` - Nitro Version: `2.11.9` - Package Manager: `[email]` - Builder: `-` - User Config: `ssr`, `devtools`, `modules`, `css`, `app`, `runtimeConfig`, `i18n`, `devServer`, `colorMode`, `compatibilityDate`, `future`, `typescript` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I have custom extended pages which working perfectly fine but…

### CASE-6521 · Using app.baseURL to run a static site in a subfolder does not work.
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, typescript, vue, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v22.14.0 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.8 - Package Manager: [email] - Builder: - - User Config: ssr, nitro, app, devtools, css, components, plugins, imports, hooks, experimental, typescript, sourcemap, vue, vite, build, modules, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Here is my config: export default defineNuxtConfig({ ssr: false, nitro: {…

### CASE-6522 · Pages being hot-reloaded twice
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍1 💬6 · closed · labels: 🛠️ dx/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v23.6.0 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] run with `dev` go to the index page ([link]), update the code, and hot reload will reload/trigger the page twice. ### Describe the bug updating a page causes hotreload to trigger twice, once with macro=true in the url and once without, on a brand new…

### CASE-6525 · WARN force closing dev worker after 5 seconds...
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, tailwind
- **Signals**: 👍1 💬6 · closed · labels: pending triage/nitro/needs reproduction/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.18.0 - Nuxt Version: 3.15.4 - CLI Version: 3.22.4 - Nitro Version: 2.11.1 - Package Manager: [email] - Builder: - - User Config: ssr, routeRules, scripts, vite, modules, headlessui, devtools, css, build, tailwindcss, fonts, icon, i18n, imports, runtimeConfig, compatibilityDate - Runtime Modules: @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Describe the bug At my wits…

### CASE-6528 · Error when disabling ssr
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment **Environment** - Operating System: Windows_NT - Node Version: v20.15.0 - Nuxt Version: 3.15.0 - CLI Version: 3.17.2 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: @user/[email]-alpha.9, @user/[email] - Build Modules: - ### Reproduction src: [link]]([link]) ### Describe the bug ### Describe the bug After disabling scr, an error appears related to the Nuxt build file problem. The error will be presented below. ### Additional context Config nuxt ```typescript // [link] export default defineNuxtConfig({ devtools: {…

### CASE-6529 · Cannot find module .output/server/node_modules/vue/server-renderer/index.mjs
- **Principles**: P-F4 · **Env**: opera, vue, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.20.4 - Nuxt Version: 3.13.0 - CLI Version: 3.16.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Simply start with a fresh project ```shell pnpx nuxi@user init cd nuxt-app pnpm run build node .output/server/index.mjs ``` ### Describe the bug New project build output server was crash when follow the startup cli commends When visit the localhost:3000 it shows with the logs: ```…

### CASE-6537 · Server Component (.server) and NuxtIsland with Slot results in Nuxt Build Error (SSR) - broken since [email]
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬6 · closed · labels: pending triage/server components/possible regression
- **Excerpt**: ### Environment ``` Working directory: /home/projects/gqairmgblw.github 17:37:59 Nuxt project info: 17:37:59 ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.13.2 - CLI Version: 3.14.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction Nuxt 3 minimal reproduction (3.13.2): [link] Last working nuxt version 3.9.1: [link] First broken nuxt version 3.9.2: [link] ### Describe the bug Barebone Nuxt 3 reproduction with `ssr: true`…

### CASE-6540 · __asyncHydrate is not a function
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.11.1 - Nuxt Version: 3.13.0 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction This is happening on any project with nuxt and vue 3.5.0 (released 1h ago) Just `nuxt build` and `node .output/server/index.mjs` and visit the `localhost:3000` ### Describe the bug When running `nuxt build` any page visit is not hydrated on the client, instead there is js error…

### CASE-6542 · In [email] the definePageMeta function is broken
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.16.0` - Nuxt Version: `3.11.2` - CLI Version: `3.12.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction ### [email] [StackBlitz]([link]) ### [email] [StackBlitz]([link]) ### Describe the bug ### [email] When using the `definePageMeta` function, I was able to change the layout on the page. In the example below, the top text is with the `no-auth` layout, and the bottom text is with the `main` page. There is…

### CASE-6543 · Building Nuxt with compressPublicAssets fails when in a Bun docker container
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/nitro/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.14.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, modules, shadcn, content, colorMode, googleFonts, monacoEditor, compatibilityDate, nitro - Runtime Modules: @user/[email], [email], @user/[email], [email], @user/[email], @user/[email], [email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction 1. Create some Nuxt projects with some routes 2. In…

### CASE-6548 · 404 NOT FOUND - Failed API calls to the /server directory
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Operating System: Linux Node Version: v18.19.1 Nuxt Version: 3.12.2 CLI Version: 3.12.0 Nitro Version: 2.9.6 Package Manager: [email] Builder: - User Config: devtools, ssr, nitro, target, modules, vuefire, runtimeConfig, buildModules, vuetify, css, build, postcss Runtime Modules: [email], @user/[email], @user/[email], @user/[email], [email] Build Modules: @user/vuetify, @user/[email] ### Reproduction N/A ### Describe the bug i have a nuxt app that uses the nuxt server folder for backend besides using django as well and djaong also used for a small portion of the app. now i…

### CASE-6551 · Dynamic component SSR rendering problem
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.9.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, components - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug The problem only occurs with the production build. If a component is imported dynamically and uses components common to its sub-components (e.g. a composable) and this sub-component is used elsewhere in the code, then SSR rendering of the component no longer occurs. In my example in dev mode, the final…

### CASE-6552 · Wrapping useFetch in a function causes hydration mismatch
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: components, css, devtools, vite - Runtime Modules: - - Build Modules: - ### Reproduction - ### Describe the bug Since recent update, wrapping `useFetch` in a custom function causes hydration mismatch. This doesn't happen if useFetch is in the root of the setup script. I didn't receive this error before upgrading Nuxt today. Previous version I had was `3.11.2`. However I cannot replicate NOT having…

### CASE-6555 · autoImport for utils directory doesn't work correctly.
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.17.1 - Nuxt Version: 3.10.2 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, runtimeConfig, build, devtools, routeRules, modules, vite, css, sourcemap - Runtime Modules: (), @user/[email] - Build Modules: - ------------------------------ ### Reproduction . ### Describe the bug custom components inside components directory are imported automatically but not fuctions in utils directory. ### Additional context _No response_ ### Logs…

### CASE-6563 · useSeoMeta: 'articleTag' just take in account the first item of the array
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍1 💬6 · closed · labels: good first issue/3.x/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v21.5.0` - Nuxt Version: `3.10.1` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `runtimeConfig`, `ssr`, `hooks`, `nitro`, `ignore` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I use the useSeoMeta composable. When I want to populate the 'articleTag' property with an array (e.g. '['foo','bar']), this results in the creation of the same tag, as many times as the length of the array, but always with the same value (the…

### CASE-6568 · NPM Audit: Prototype Pollution in lodash
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍6 💬6 · closed · labels: 3.x
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.10.0 - Nuxt Version: 3.9.3 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, modules, googleFonts - Runtime Modules: @user/[email], @user/[email], [email], [email], @user/[email], [email] - Build Modules: - ### Reproduction npm audit report ### Describe the bug Nuxt v3.9.3 has a dependency on lodash.pick >= 4.0.0 that has a high severity Prototype Pollution vulnerability. ``` # npm audit report lodash.pick >=4.0.0 Severity: high Prototype Pollution in lodash - [link]…

### CASE-6569 · `useCookie` uses old value when using back, then forward button
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬6 · closed · labels: 🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.18.0 - Nuxt Version: 3.9.3 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: modules, ssr, devtools - Runtime Modules: @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug There are two flows how to reproduce the issue: **First flow:** - Change the value of cookie via store (just click the button) - Go though spa to market page and copy link to it - Go though spa to index page back - Paste the link to different page that was copied before and navigate -…

### CASE-6570 · Value dissapeared
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Working directory: C:/dev/hotel-viewer 21:00:40 Nuxt project info: 21:00:40 ------------------------------ - Operating System: Windows_NT - Node Version: v20.10.0 - Nuxt Version: 3.9.3 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, modules, runtimeConfig, colorMode, ssr, app, googleFonts, ui, nitro - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ 👉 Report an issue: [link] framework]/issues/new 21:00:40 👉 Suggest an improvement: [link]…

### CASE-6571 · `<NuxtLayout /> component has not been used.` Warning when using `<ClientOnly>` in `app.vue`
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/🛠️ dx/🐛 bug/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.9.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ```vue <template> <ClientOnly> <NuxtLayout> <NuxtPage /> </NuxtLayout> </ClientOnly> </template> ``` ### Describe the bug When using a `<ClientOnly>` component around the `App.vue` (only SSR the app shell), the NuxtLayout warning will appear even though the component is…

### CASE-6574 · Using method decorators in components results in fatal parse failure
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug There's a fatal parse failure occurring when using method decorators. ### Additional context _No response_ ### Logs _No response_

### CASE-6578 · Server middleware activating on client side
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When client routes are accessed the nitro server middleware is also being executed on first fetch , there is no segregation ### Additional context _No response_ ### Logs _No response_

### CASE-6579 · Loading new changes doesn't work
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Operating System: Darwin Node Version: v20.8.1 Nuxt Version: 3.8.1 CLI Version: 3.9.1 Nitro Version: 2.7.2 Package Manager: [email] Builder: - User Config: ssr, runtimeConfig, app, build, css, imports, modules, postcss, vite, sourcemap, dayjs, googleFonts, loading, loadingIndicator, hooks Runtime Modules: @user/[email], [email], @user/[email], [email], @user/[email] Build Modules: - ### Reproduction I have too many issues to post a minimal repro for everything. ### Describe the bug I can't get reloading to work. Not even HMR, but anything. I make a change to the component, and…

### CASE-6580 · Opening Nuxt in a tab while dev server initialization breaks the build with cryptic error until server restarted
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.8.1 - Nuxt Version: 3.8.1 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: ssr, runtimeConfig, app, build, css, imports, modules, postcss, vite, sourcemap, dayjs, googleFonts, loading, loadingIndicator, hooks - Runtime Modules: @user/[email], [email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Honestly I couldn't entirely say. Maybe it's caused by switching back and forth between branches…

### CASE-6584 · vue router doesn't map /public routes during SSR
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt project info: 15:27:50 ------------------------------ - Operating System: Linux - Node Version: v18.12.1 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug `/public` routes can be accessed client-side but not from server-side code ## Repro In the above demo there are 2 pages: `/` and `/b`. The pages are identical: both use `$fetch` to retrieve `/temp.json`. However `/` only…

### CASE-6589 · Cannot properly declare module for docx files
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.7.0 - CLI Version: 3.7.2 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, imports, modules, css, svgo, i18n, headlessui, components, extends, runtimeConfig, linkChecker, googleFonts, build, vite, nitro, app, auth - Runtime Modules: @user/[email], @user/[email], @user/[email]-rc.2, @user/[email]-beta.4, [email], [email], [email], @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: -…

### CASE-6591 · Nuxt 3.7 - Hydration children mismatch in <div>: server rendered element contains more child nodes than client vdom.
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ```` - Operating System: Linux - Node Version: v18.14.2 - Nuxt Version: 3.7.1 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ```` ### Reproduction [link] or [link] ### Describe the bug I started a new Nuxt project, added 1 simple component and I am getting a hydration mismatch in the console. The error does not always appear on the initial load. But if you refresh the page a few times the mismatch error shows up. Sometimes with multiple refreshes it disappears. It is really…

### CASE-6592 · explanation of `200.html` and `404.html`
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬6 · closed · labels: good first issue
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.20.1` - Nuxt Version: `3.6.5` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `nitro`, `app`, `ui`, `devtools`, `typescript`, `vue`, `modules`, `content`, `colorMode`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]-28233674.a2970cb` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Got this config: ```js export default defineNuxtConfig({ nitro: { routeRules: { '/**': { prerender: true }, '/spa': { ssr: false }, }, prerender: { crawlLinks: true, routes: ['/', ],…

### CASE-6593 · `nuxt build --spa` does not work in Nuxt3?
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue, typescript, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment $ npx nuxi info Working directory: D:/workspace/go/src/snowdream.tech/vue-nuxt-element-template 07:10:09 Nuxt project info: 07:10:09 ------------------------------ - Operating System: Windows_NT - Node Version: v19.8.1 - Nuxt Version: 3.7.0 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: ssr, app, runtimeConfig, css, typescript, modules, i18n, vueuse, colorMode, unocss, vite, elementPlus - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email]-rc.4, @user/[email], [email] - Build Modules: -…

### CASE-6600 · Mismatch vnode.children & node.data when use tsx
- **Principles**: P-F4 · **Env**: nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug We will get two warnings like the following logs When we use jsx synax,even and we don't wirte any code that can effect server render: ```tsx import { defineComponent } from 'vue'; export const testComponent = defineComponent( () => { const templateText = 'my text'; return () => <div>hello wrold {templateText}</div>; }, { name: 'test-component', } ); ``` but…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6503 · LayoutTransition causes multiple app renders after an error is triggered.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.12.1 - Nuxt Version: 4.1.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, modules, app - Runtime Modules: @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug In my application, after logging in (Layout: 'auth'), the user is redirected to the homepage (Layout: 'default'). Then, several requests are triggered, and one of the endpoints returned a 500 error. I have global error handling for status code 500, and in the middleware…

### CASE-6510 · Very first layout transition has no 'leave' part when SSR is on
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍1 💬6 · open · labels: workaround available/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.9.0` - Nuxt Version: `3.17.5` - CLI Version: `3.25.1` - Nitro Version: `2.11.13` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools`, `modules`, `app`, `routeRules` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction - clone the reproduction repo: [link] - start dev server - visit the home page rendered in client-side mode `/client` - click the last link "go to contact" - observe: old…

### CASE-6524 · Calls to `navigateTo` with `replace: true` option in middleware lead to losing query parameters (if the path was passed via a string)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: good first issue/🐛 bug/possible regression
- **Excerpt**: ### Environment nuxt >=3.15.0 ### Reproduction In an empty project add such a global middleware: ```typescript export default defineNuxtRouteMiddleware(async (to) => { if (to.path !== '/some-url') { return navigateTo('/some-url?a=b&c=d', { replace: true }) } }) ``` Also add an empty page `/some-url`. Open the root page. You will be redirected to `/some-url`, while `/some-url?a=b&c=d` is expected. ### Describe the bug The bug appeared in the PR [link] framework][ref] and in nuxt 3.15.0. Internally, before performing navigation, nuxt transforms the string which we pass to `navigateTo` and which…

### CASE-6532 · The new version release is missing files and cannot be run directly.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.17.0 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, imports, devServer, colorMode, extends, modules, css, dayjs, elementPlus, runtimeConfig, compatibilityDate, hooks, components - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/auto-animate/[email] - Build Modules: - ------------------------------ 1:55:17 AM 👉 Report an issue: [link]…

### CASE-6538 · Utilizing sass-embedded alongside Vite's css + scss modern-compiler and nuxt generate produces an "empty error" and runs forever
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, vite, nuxt
- **Signals**: 👍2 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.13.2 - CLI Version: 3.14.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] Run `npm run generate` in the terminal ### Describe the bug When configuring Vite to utilize Sass's modern compiler alongside `sass-embedded` as recommended by the [Vite docs]([link]), running the `generate` command while utilizing the `cloudflare-pages-static` build preset results in an error: ``` transforming (27)…

### CASE-6544 · Cannot read properties of undefined (reading 'replace')
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬6 · closed · labels: pending triage/platform:windows/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT (10) - Node Version: v20.15.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: future, compatibilityDate, devtools, modules, app, ui, colorMode, gtag, site, nitro, device - Runtime Modules: @user/auto-animate/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email]-rc.18, @user/[email]-beta.1, [email] - Build Modules: - ### Reproduction This seems to be my machine only for some reason, sorry! ### Describe the bug On running `nuxt dev --open` I get…

### CASE-6564 · Layout transition is not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v16.19.0 - Nuxt Version: 3.10.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, modules, sanity, css, supabase, app, vite - Runtime Modules: @user/[email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug Hello, I'm developing a project with Nuxt 3 and Vue 3 and I'm experiencing an issue with layout transitions: they're not working and the page stays blank. I created a Stackblitz for you to check the issue I'm experiencing: [link] ### Additional…

### CASE-6567 · Transitions on Nested Pages animating wrong container
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: workaround available/pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.9.3 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, pages, css, postcss - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug I'm having an issue with transitions in a nested layout/page situation. There is a homepage that contains a nested layout with `<NuxtPage>` inside. Those nested pages have transitions applied. If you hit the homepage directly, and…

### CASE-6586 · page:transition:start hook not being called?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: 📚 documentation
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.7.3 - CLI Version: 3.9.0 - Nitro Version: 2.6.4-28243740.058bacf - Package Manager: [email] - Builder: - - User Config: app, site, typescript, devtools, modules, nitro, devServer, runtimeConfig, build, imports, css, pinia, piniaPersistedstate, i18n, device - Runtime Modules: @user/[email], @user/[email], @user/[email]-rc.4, @user/[email]-beta.31, @user/[email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction [link] ### Describe the bug page:transition:start hook not…

### CASE-6599 · Missing loading Indicator when navigating to nested page
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍2 💬6 · closed · labels: 🐛 bug/🔨 p3-minor/suspense
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr - Runtime Modules: - - Build Modules: - ### Reproduction [link] Click on the "to level 2" link. ### Describe the bug While using the Nuxt 3 framework, I have encountered an issue where the loading indicator is missing when navigating directly to a nested page if the parent page contains an asynchronous component. **Expected Behavior:** When transitioning from the parent page to the nested page, a loading indicator should…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6504 · Error page does not replace previous custom layout on client-side navigation
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment - Operating System: `Linux (WSL2)` - Node Version: `v22.17.0` - Nuxt Version: `3.19.2` - CLI Version: `3.28.0` - Nitro Version: `2.12.6` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools`, `app`, `ssr`, `nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When navigating to a non-existent page with `<NuxtLink />` from a page that uses a custom layout, the error page incorrectly renders over the previous page's layout. A full page refresh is required for it to display correctly. ![Image]([link])…

### CASE-6505 · exported utils not visible inside `<template>`
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v24.4.1 - Nuxt Version: 4.0.3 - CLI Version: 3.28.0 - Nitro Version: 2.12.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug As per the title, the exported utilities are not visible inside `<template>` but it is on `<script>` <img width="796" height="290" alt="Image" src="[link] /> ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6507 · Cant use #shared inside the shared folder
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment <img width="1128" height="382" alt="Image" src="[link] /> ### Reproduction Just try to import the #shared alias inside the shared folder. [link]]([link]) ### Describe the bug Hi, cant use the #shared alias in the shared directory. But works okey in the server folder. <img width="1085" height="320" alt="Image" src="[link] /> <img width="1050" height="382" alt="Image" src="[link] /> My nuxt.config.ts: ``` // [link] import { fileURLToPath, URL } from 'node:url'; export default defineNuxtConfig({ compatibilityDate: '2025-07-15', devtools: { enabled: false }, app: { head: { title:…

### CASE-6508 · Error: Builder returned invalid routes: ["Route at index 21 has invalid `src` regular expression \"^/?(?<404>.+)$\"."]
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment Deploying a Nuxt 4 to vercel error during build command. ### Reproduction [link] ### Describe the bug When building and dev in local environment, its running perfectly fine. But when deploying to vercel, this error is showing up during build command. <img width="1572" height="815" alt="Image" src="[link] /> ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6509 · Error when opening .vue files with Vue VS Code extension: "Write global types file failed"
- **Principles**: P-A3, P-H1 · **Env**: opera, vue, nuxt, vite
- **Signals**: 👍1 💬6 · closed · labels: pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment ``` ~~~~@~~~ % npx nuxt info Working directory: XXXXXXXXXXXXXXXX nuxi 12:04:32 AM Nuxt project info: (copied to clipboard) nuxi 12:04:32 AM ------------------------------ - Operating System: Darwin - Node Version: v23.11.0 - Nuxt Version: 4.0.0 - CLI Version: 3.26.2 - Nitro Version: 2.12.0 - Package Manager: [email] - Builder: - - User Config: app, runtimeConfig, nitro, vite, css, build, compatibilityDate - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction <img width="1014" height="88" alt="Image" src="[link] /> ``` Write global types…

### CASE-6511 · Bug: `vite.esbuild.drop: ['console']` incorrectly removes console logs in development mode
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v22.14.0` - Nuxt Version: `3.17.5` - CLI Version: `3.25.1` - Nitro Version: `2.11.12` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools`, `vite`, `nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction I have prepared a minimal reproduction on [this repo]([link]). 1. Clone [this repo]([link]) 2. Run `pnpm i && pnpm dev` Current Behavior Open the application in your browser and inspect the developer console. There is no text output to the console. ![Image]([link])…

### CASE-6516 · Nitro Server Plugin Visiting Counter Issue with useStorage
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.14.0 - Nuxt Version: 3.17.2 - CLI Version: 3.25.0 - Nitro Version: 2.11.11 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, nitro, modules, ssr - Runtime Modules: [email] - Build Modules: - ### Reproduction Visiting the API endpoint: - [link] - [link] Make the counter increased only once due to `server: false` for `useFetch` and `ssr: false` in `nuxt.config.ts`. ![image]([link]) ![image]([link]) ### Describe the bug But on the home page it's increased twice for unknown reason: - [link] - [link]…

### CASE-6517 · custom routes added are erased after HMR
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, typescript, vite
- **Signals**: 👍0 💬6 · closed · labels: good first issue/pages/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v20.15.1` - Nuxt Version: `3.17.2` - CLI Version: `3.25.0` - Nitro Version: `2.11.11` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `future`, `typescript`, `imports`, `modules`, `formkit`, `snakewareCloud`, `runtimeConfig`, `css`, `image`, `$production`, `$development`, `sourcemap`, `compatibilityDate`, `vite`, `googleFonts` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/nuxt/[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction This is…

### CASE-6518 · The 'ignore' configuration not working as expected in 'future.compatibilityVersion: 4'
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.19.1 - Nuxt Version: 3.17.0 - CLI Version: 3.25.0 - Nitro Version: 2.11.10 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, future, ignore - Runtime Modules: - - Build Modules: - ### Reproduction [[link]]([link]) ### Describe the bug As shown in the example configuration, I want to exclude specific directories during compilation, but the directory can still be accessed after compilation. ![Image]([link]) ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6520 · The css file packaged by nuxt was not imported into the page correctly
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: (copied to clipboard) nuxi 18:57:09 ------------------------------ - Operating System: Windows_NT - Node Version: v22.14.0 - Nuxt Version: 3.16.2 - CLI Version: 3.25.0 - Nitro Version: 2.11.9 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction I just created a new nuxt project ### Describe the bug ![Image]([link]) ![Image]([link]) ![Image]([link]) I first tried packaging. Each page has a separate css generation, but the page wasn't…

### CASE-6530 · nuxt3 top level await error
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.18.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction codesandbox reproduction url: [link] ### Describe the bug i just want to use sync require a module，bug nuxt3 default use type module. buy it tips some error when i use await import, like this. ![Image]([link]) but !!!, In fact, I just wrote a pure node example, which can achieve the above functions without error. ![Image]([link]) It runs perfectly…

### CASE-6531 · ENOENT: no such file or directory, open '/__skip_vite/shop/_nuxt/pages/shop/[slug].vue'
- **Principles**: P-A3, P-H1 · **Env**: vite, nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt 3.14.1592 with Nitro 2.10.4 Mac M4 ### Reproduction npx nuxi upgrade yarn yarn dev ### Describe the bug When i start a dev session with 'yarn dev' i see this Error message as popup-overlay "ENOENT: no such file or directory, open '/__skip_vite/shop/_nuxt/pages/shop/[slug].vue' and i have no clue what it means. the directory pages/shop/[slug].vue exists. Maybe someone can help me. I'm running out of ideas :( Thank you guys in advance. Nuxt is great. Cheers Adrian ![Image]([link]) ![Image]([link]) ### Additional context _No response_ ### Logs ```shell-script ➜ fring…

### CASE-6535 · bug: `process.stdout.isTTY` not set
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.13.2 - CLI Version: 3.14.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug Nuxt's' logging setup does not set `process.stdout.isTTY`. This makes 3rd party logging libs like `effect/Logger` not work properly: [link] This is the result when running `node -e 'console.log(process.stdout.isTTY)'` in vanilla node: ![Image]([link]) Example diff between Nuxt and for example Next: ![Image]([link]) ###…

### CASE-6536 · Icons not rendering on production build when mounting
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ![Image]([link]) ### Environment Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v20.15.1 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: experimental, runtimeConfig, build, devtools, nitro, routeRules, plugins, modules, eslint, pinia, site, delayHydration, i18n, icon, app, content, svgo, sitemap, googleFonts, image, mdc, htmlValidator, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email],…

### CASE-6541 · Nuxt Layers are sharing their config
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.17.1 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, extends, runtimeConfig, modules, pinia, imports, app, css, postcss, image, basicAuth - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction workspace layer's `nuxt.config.ts` : ```typescript import Aura from '@user/themes/aura'; export default defineNuxtConfig({ modules:…

### CASE-6545 · useFetch not deduplicating requests that return an error like 404, 401 etc.
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.4.1 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction I've setup a repository with the minimal code here: [link] If StackBlitz is easier, I could also create a reproduction there but I thought it was easier to test in a 'real browser'. ### Describe the bug I'm currently refactoring my code to correctly use the useFetch composable (according to the amazing video: [link]). I…

### CASE-6546 · Issue with useSeoMeta - og:image Not Displayed on Facebook Messenger and WhatsApp
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v22.2.0 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, runtimeConfig, css, modules, plugins, googleFonts, pinia, colorMode, postcss, router, vite, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], [email], [email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction 1. Set up a Nuxt 3 project with SSR enabled. 2. Create a…

### CASE-6550 · Built app behaves differently than in dev mode
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.12.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug I have created a `<TypedField>` component to provide correct typing for `field.state.value` property when used. to test that the typing works, you can add `age: 2` to the `defaultValues' ![image]([link]…

### CASE-6553 · When the nuxt.config.ts is updated, the reload is very slow.
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, tailwind
- **Signals**: 👍1 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.14.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: css, extends, modules, i18n, site, sitemap, ogImage, linkChecker, seoExperiments, seo, cookieControl, sanctum, bugsnag, image, runtimeConfig, imports, ui, devtools, experimental, colorMode, tailwindcss, sourcemap - Runtime Modules: @user/[email], @user/[email], @user/motion/[email], [email], [email], [email], @user/[email], [email], @user/[email], [email], @user/[email]-rc.10, [email], @user/[email] -…

### CASE-6554 · 在文件内容没有变化的情况下，每次打包出来的构建产物javascript文件的hash值都不一致
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Operating System: Linux Node Version: v20.13.0 Nuxt Version: ^3.11.1 CLI Version: 3.11.1 Nitro Version: 2.9.5 Package Manager: [email] Builder: - Build Modules: ["@user/nuxt", "@user/nuxt", "@user/nuxt"] ### Reproduction - ### Describe the bug 在文件内容没有变化的情况下，每次执行`nuxt build`,打包出来的js文件hash值都不一致，这导致我在使用docker进行多实例部署时，每个镜像中的构建产物名称不同，用户在请求js资源时，部分资源出现请求404的情况。 <img width="982" alt="企业微信截图_520b0515-691e-4383-904d-6f95669464ab" src="[link] framework]/assets/39828701/be384327-c93a-4ea9-8c90-9280238ba4b8"> ![企业微信截图_581c9e05-599b-4f42-a1db-565f3446d589]([link]…

### CASE-6556 · [nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Find out more at `[link]
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment "nuxt": "3.11.2" ### Reproduction [link] ### Describe the bug I introduced a composables method in plugins, which simulates asynchronous requests, but after an asynchronous request, an error will be reported. <img width="1099" alt="Snipaste_2024-05-16_01-03-30" src="[link] framework]/assets/42968962/574546b5-732e-4e5e-9dcf-f6df8735fd73"> ### Additional context _No response_ ### Logs _No response_

### CASE-6557 · Selective client in a v-for generates many client component references
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍1 💬6 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/server components
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.12.2` - Nuxt Version: `3.11.2` - CLI Version: `3.11.1` - Nitro Version: `2.9.6` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `experimental` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug ![image]([link] framework]/assets/1218730/9de60bc0-f6a9-4294-8276-5383cd4f607c) Cycling through a server component which contains a client component selectively hydrated breaks the page in the way which is shown above. The moveTeleport function fails with this error: Uncaught…

### CASE-6560 · routeRules are undefined in production
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/nitro/upstream/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v21.6.1 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.5 - Package Manager: [email] - Builder: - - User Config: runtimeConfig, sourcemap, vite, app, css, modules, i18n, alias, auth, build, site, schemaOrg, ogImage, sitemap, devtools - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email]-rc.10 - Build Modules: - ------------------------------ ### Reproduction Indeterministic behavior only in production build on Azure app service :( following…

### CASE-6561 · misconfigured to not serve the file with HTTP Response Header "Content-Encoding: gzip" present.
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/nitro
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v20.9.0 - Nuxt Version: 3.11.1 - CLI Version: 3.11.0 - Nitro Version: 2.9.4 - Package Manager: [email] ### Reproduction ![image]([link] framework]/assets/74284785/8c20941f-0e79-4234-8bb3-cadef7191838) ### Describe the bug In the development environment when I request a .gz file placed in the public folder, it fails to load the file correctly, the response header is missing "Content-Encoding: gzip", this problem was in the previous version of nuxt 3.10.3 Will not appear. Because this .gz file resource is on the development server…

### CASE-6562 · v3.11.0 causes Error: ENOENT: no such file or directory, access '/var/folders/0d...' when 500
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript
- **Signals**: 👍5 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.11.0 - Nuxt Version: 3.11.0 - CLI Version: 3.10.1 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools, nitro, modules, plugins, css, extends, typescript, image - Runtime Modules: @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Unfortunately I cannot upload a repo, due to it being an in-house project for a client. However. I am using Directus and Nuxt, I get data from Directus as usual with a function. I created a test…

### CASE-6566 · window.onload not running
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment 3.x ### Reproduction pro ### Describe the bug ![image]([link] framework]/assets/52190592/6146221b-d71c-431f-aa67-f9853fc29e28) ### Additional context _No response_ ### Logs _No response_

### CASE-6572 · appManifest causing non-deterministic build
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite, typescript, tailwind
- **Signals**: 👍6 💬6 · closed · labels: 3.x/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: telemetry, nitro, extends, image, modules, pwa, vite, postcss, build, sourcemap, runtimeConfig, typescript, app, tailwindcss, experimental, features, delayHydration - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Keep appManifest: true (by default) ### Describe the bug…

### CASE-6575 · Issues deploying Nuxt3 with SSR to Netlify functions
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ❯ pnpm nuxi info [2:27:16 PM] Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: sourcemap, typescript, postcss, build, app, runtimeConfig, extends, css, components, nitro, routeRules, modules, devServer, devtools, experimental, gtag, directus, ui, colorMode, image, googleFonts, site, ogImage, sitemap - Runtime Modules: [email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email],…

### CASE-6581 · `addImports` does not support `.` in from
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬6 · closed · labels: 3.x/workaround available/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.16.1` - Nuxt Version: `3.6.2` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `modules`, `build`, `auth`, `i18n`, `css`, `postcss`, `imports` - Runtime Modules: `[email]`, `@user/[email]-beta.13`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]-beta.5`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction <img width="245" alt="image" src="[link] framework]/assets/9151572/f1ad24f6-e247-4c34-8fdf-c814ee57b659"> Add any import with a `.` in…

### CASE-6582 · [webpack-builder] Unable to use the out-of-the-box support for jsx syntax
- **Principles**: P-A3, P-H1 · **Env**: webpack, nuxt, react
- **Signals**: 👍0 💬6 · closed · labels: 3.x/workaround available/🐛 bug/bundler:webpack/🔨 p3-minor
- **Excerpt**: ### Environment Nuxt 3.8.0 ### Reproduction Just use nuxt 3.8.0 and try using jsx syntax through a layout or some component. [link] ### Describe the bug The jsx tags such as div and img are not being compiled into corresponding HTML elements. I used jsx inside script with setup attribute and lang=“jsx” ### Additional context message: 'React is not defined' _No response_ ### Logs _No response_

### CASE-6583 · nuxt.config.ts添加app:{baseURL:"v2"}在最新版本中启动项目后不会默认在端口号后边添加v2，只会显示http:localhost:3000
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage/cli
- **Excerpt**: ### Environment development ### Reproduction ![Uploading image.png…]() ### Describe the bug nux3 的v3.7.4版本中，在nuxt.config.ts中添加配置app，然后在app中添加一个配置项baseURL:"v2"，然后启动命令后，ip和端口号后边不会默认添加v2，期望是[link] 但是实际显示的是[link] ### Additional context _No response_ ### Logs _No response_

### CASE-6585 · useSeoMeta does not set values on SSR when using reactive syntax
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, react, nuxt
- **Signals**: 👍2 💬6 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ![image]([link] framework]/assets/12992802/b88b4038-55e4-41bf-a9cf-48efb40b32f4) ### Describe the bug - When using the reactive syntax (() =>) useSeoMeta does not set the proper meta tags on SSR. - By right clicking and viewing the page source, you can see…

### CASE-6588 · The error occurs when I go to the third level child page, then back to the second and then go to the page with await inside
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍12 💬6 · closed · labels: 🔨 p3-minor/suspense
- **Excerpt**: The error occurs when I go to the third level child page, then back to the second and then go to the page with await inside Reproduction: [[link]]([link]) Instructions for reproducing the bug: 1. INDEX PAGE must be initial 2. Go to SETTING/PROJECT PAGE 3. Go to SETTING/PROJECT/CREATE PAGE 4. Go to SETTING/PROJECT PAGE 5. Go to WAITING PAGE 6. Look in console (error due to waiting) Errors in console: Uncaught (in promise) TypeError: Cannot read properties of null (reading 'namespaceURI') Uncaught (in promise) TypeError: Cannot read properties of null (reading 'exposed') <img width="647"…

### CASE-6595 · Hydration error, rogue <span> being rendered
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, typescript
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.12.1 - Nuxt Version: 3.7.0 - CLI Version: 3.7.0 - Nitro Version: 2.6.1 - Package Manager: [email] - Builder: - - User Config: alias, devtools, modules, content, runtimeConfig, imports, typescript - Runtime Modules: @user/content - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug I get a consistent Hydration error for a very simple template (repro link above). The error is: ![image]([link] framework]/assets/41394833/3b569f9b-6573-4a38-aea4-a0f62f5686d1)…

### CASE-6596 · Nitro prerender does not crawl through all the links in vue files.
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, vue, nuxt, vite, tailwind
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.17.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: app, devtools, ssr, nitro, pages, debug, gtm, runtimeConfig, build, logLevel, components, modules, swiper, css, eslint, googleFonts, tailwindcss, experimental, image, vite - Runtime Modules: @user/[email], @user/[email], [email], @user/[email]-rc.1, @user/[email], @user/[email], @user/[email] ### Reproduction This is re-producible only when you build the app with nuxi generate command. **I have output directory setup in…

### CASE-6598 · [feature request] improved error pages while developing
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍4 💬6 · closed · labels: 🛠️ dx
- **Excerpt**: ### Describe the feature The DX for error page during development could be improved. For example, here's a screenshot wrangler error when using `wrangler dev` ![image]([link] framework]/assets/13395944/78042eb5-399c-4e5f-834f-f3fe23408fa3) This is done using [youch]([link]), which severals projects are using: wrangler, adonis, Nuxt 2 ... It would be great if we could implement something similar while keeping the Nuxt 3 looks style wise. Maybe we could re-use the nuxt [devtools]([link]) styles for maximum consistency. Tagging @user in case you have some neat design ideas. Due to the way h3 ->…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6506 · updating useNuxtApp().payload.state will break all other useState states
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera, nuxt, typescript
- **Signals**: 👍1 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.17.0 - Nuxt Version: 4.0.3 - CLI Version: 3.27.0 - Nitro Version: 2.12.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr, routeRules - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug When adding a middleware that sets a variable to useNuxtApp().payload.state, for example: ```typescript export default defineNuxtRouteMiddleware((to) => { let userAgent; if (import.meta.server) { userAgent = useRequestHeaders()['user-agent'] || ''; } else { userAgent =…

### CASE-6515 · Double onMounted Global Middleware, Pinia/ State, Dynamic Component Rendering
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.12.0 - Nuxt Version: 3.15.0 - CLI Version: 3.25.0 - Nitro Version: 2.11.9 - Package Manager: [email] - Builder: - - User Config: ssr, modules, components, pinia, compatibilityDate - Runtime Modules: @user/[email] - Build Modules: - ### Reproduction [link] Index -> ListingPage = 1 onMounted ListingPage -> ViewPage = 2 onMounted ViewPage -> ListingPage = 2 onMounted ### Describe the bug Trying to run requests through the same Nuxt "catch all route" and dynamically render different components based on the result of a state variable.…

### CASE-6523 · With bun work but with pnpm samefull-hois false no
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt, vite, vue
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ERROR Nuxt Build Error: [vite:css] [sass] Error: Can't find stylesheet to import. nuxi ╷ 1 │ ┌ @user 'vuetify' with ( 2 │ │ // Global Vuetify SASS variable overrides. For example: 3 │ │ // $utilities: false, 9 │ └ ) ╵ ../../../../../../../assets/scss/globals.scss 1:1 root stylesheet file: //test/assets/scss/globals.scss ### Reproduction ERROR Nuxt Build Error: [vite:css] [sass] Error: Can't find stylesheet to import. nuxi 8:40:10 AM ╷ 1 │ ┌ @user 'vuetify' with ( 2 │ │ // Global Vuetify SASS variable overrides. For example: 3 │ │ // $utilities: false, 9 │ └ ) ╵…

### CASE-6594 · Incorrect types of auto-imports in modules
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, typescript, tailwind, vue, vite
- **Signals**: 👍0 💬6 · closed · labels: good first issue/types/3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.5.1 - Nuxt Version: 3.7.0 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: modules, auth, security, typescript, devtools, i18n, postcss, tailwindcss, vue, vite - Runtime Modules: [email], @user/[email], @user/[email], [email], @user/[email], @user/[email]-rc.4 - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug There are missing types from auto-imports, and that the ref, $fetch, or other variables are being…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6513 · useCookie reactivity problem with Firefox browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, react, nuxt
- **Signals**: 👍2 💬6 · closed · labels: workaround available/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v22.13.0 - Nuxt Version: 3.17.5 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] You need to run the code locally, the cookie behavior is strange in StackBlitz. ### Describe the bug In Firefox, a watcher on `useCookie` is not executed after the cookie has been set via `setCookie` from a server route. If you try the same steps below…

### CASE-6519 · Double View Transition in Safari
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, safari 18, nuxt
- **Signals**: 👍0 💬6 · closed · labels: good first issue/🐛 bug/🍰 p2-nice-to-have
- **Excerpt**: ### Reproduction Trigger a swipe back gesture in Safari with any [View Transition]([link]): [link] ### Describe the bug The new View Transition API became available in Safari 18. However, Safari’s default swipe gesture for back and forward navigation triggers the animation after the page swipe gesture, causing a double transition effect. [This blog post]([link]) highlights this issue and provides a workaround for Turbo. It would be great if a similar fix could be implemented for Nuxt, by detecting swipe gestures user-agent transition and disabling the transition in such cases.

### CASE-6539 · Nuxt build shows blank page on latest Chrome
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, opera, nuxt, vite
- **Signals**: 👍1 💬6 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.4.0 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: app, plugins, modules, gtag, ssr, pwa, css, postcss, runtimeConfig, pinia, vite - Runtime Modules: @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction github repo: [link] Build and serve the assets, the page shows blank on latest Chrome (129.0.6668.59) . No such issue on older version Chrome. And when enter a wrong route ,it will shows "not found" page normally. Everything works fine…

### CASE-6547 · Not scrolling to top on navigation (Firefox, scroll-behavior: smooth)
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: firefox, nuxt, vue
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt 3 ### Reproduction **Repository**: [link] **package.json:** ``` { "name": "nuxt-app", "private": true, "type": "module", "scripts": { "build": "nuxt build", "dev": "nuxt dev", "generate": "nuxt generate", "preview": "nuxt preview", "postinstall": "nuxt prepare" }, "dependencies": { "nuxt": "^3.12.4", "vue": "latest" } } ``` **nuxt.config.js** ``` export default defineNuxtConfig({ compatibilityDate: '2024-04-03', devtools: { enabled: true }, css: [ '~/assets/global.css' ] }) ``` ### Describe the bug Reporting the same issue in Nuxt 3. In our project we have footer element…

### CASE-6549 · Lighthouse report with a very long "Render Delay" time.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: opera, chrome, windows, nuxt, mobile
- **Signals**: 👍1 💬6 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.18.2 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, compatibilityDate - Runtime Modules: - - Build Modules: - ### Reproduction 1. create a new project: npx nuxi@user init nuxt_test 2. start the project by "npm run dev" 3. Open the project at Chrome and run lighthouse and select "Device" with "Mobile" ### Describe the bug In Performance item, the "Largest Contentful Paint" is very large with a very long "Render Delay" time. ![无标题]([link]…

### CASE-6558 · ReportingObserver [deprecation]: Unload event listeners are deprecated and will be removed
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, nuxt
- **Signals**: 👍1 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment Production ### Reproduction I'm getting deprecation warnings about the `unload` event listeners. Upon further investigation it seems that there's an unload event listener triggered on each page when looking at the inspecter in Chrome ### Describe the bug Nuxt JS is throwing core code deprecation warnings: > ReportingObserver [deprecation]: Unload event listeners are deprecated and will be removed I think this might be something related to core code that may need to be addressed as this is going to be fully deprecated at Q4 2024,. ### Additional context ![Screenshot 2024-05-10…

### CASE-6565 · Warning for `NuxtPage` absence is always shown if `setPageLayout` is called in middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, nuxt
- **Signals**: 👍1 💬6 · closed · labels: 3.x/pending triage/🛠️ dx
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v21.5.0` - Nuxt Version: `3.10.0` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` But I believe this bug happens in all environments. ### Reproduction Original reproduction by @user [link] Minimal reproduction by me [link] ### Describe the bug This issue is an edge case which was not tested in [ref]. With the `content.global.ts`, which dynamically changes layout, the warning message is always shown. Without the…

### CASE-6576 · Error when building with a module for Edge Network services (cloudflare pages, vercel): RollupError: "toPath" is not exported.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, ubuntu, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Working directory: /home/tawing-ubuntu/work/aceeagle/nuxt-tawing-supabase 5:50:11 AM Nuxt project info: 5:50:11 AM ------------------------------ - Operating System: Linux - Node Version: v20.10.0 - Nuxt Version: 3.8.0 - CLI Version: 3.10.0 - Nitro Version: 2.7.0 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] **Will work.** - npm run dev:build -- --preset=vercel - npm run dev:build -- --preset=node-serve # **Will have `RollupError: "toPath" is not exported.` errors** - npm…

### CASE-6577 · [Feature Request] Use the new browser Navigation API to show a native loading indicator when navigating
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍12 💬6 · open · labels: good first issue/upstream/🍰 p2-nice-to-have
- **Excerpt**: ### Describe the feature There is a new Navigation API for browsers which can trigger native browser loading indicator when navigating between SPA pages. This adds a nice native feel for SPA navigation. Currently Nuxt has the `<NuxtLoadingIndicator />` component that shows the loading bar at the top but I think if we combine that with this native loading indicator feature we can really make great UX. Yes, this is bleeding edge feature not currently supported everywhere but I think it would be nice to still give users the option to use this new feature _**IF their browser supports it.**_ Docs:…

### CASE-6590 · [Nuxt 3.7.2] Error: Cannot read properties of undefined (reading 'use')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, ubuntu, nuxt
- **Signals**: 👍4 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment System: OS: Linux 5.15 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish) CPU: (24) x64 AMD Ryzen 9 3900X 12-Core Processor Memory: 20.00 GB / 23.44 GB Container: Yes Shell: 5.8.1 - /usr/bin/zsh Binaries: Node: 18.15.0 - ~/.nvm/versions/node/v18.15.0/bin/node Browsers: Chrome: 111.0.5563.64 ### Reproduction [link] ### Describe the bug When running [pinia-plugin-persistedstate]([link]) with Nuxt 3.7.2, an error occurs: ``` [nuxt] [request error] [unhandled] [500] Cannot read properties of undefined (reading 'use') at eval (./node_modules/@user/nuxt/dist/runtime/plugin.mjs:10:9)…

### CASE-6597 · Error: PostCSS plugin postcss-import requires PostCSS 8.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, chromium, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/2.x/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment ``` System: OS: Windows 10 10.0.19045 CPU: (12) x64 AMD Ryzen 5 3600 6-Core Processor Memory: 6.46 GB / 15.95 GB Binaries: Node: 16.18.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - C:\Program Files\nodejs\yarn.CMD npm: 9.6.7 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome: 116.0.5845.97 Edge: Spartan (44.19041.1266.0), Chromium (115.0.1901.203) Internet Explorer: 11.0.19041.1566 npmPackages: @user/components: 2.2.1 => 2.2.1 @user/content: 1.15.1 => 1.15.1 nuxt: 2.17.1 => 2.17.1 ``` ### Reproduction Just running `npm run dev` reproduces the error for me. ### Describe…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6526 · [de:translated] payload.json and meta json file preloaded but not used within a few seconds
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: nuxt, tailwind, vite
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment My nuxt config: ``` import tailwindcss from "@user/vite"; export default defineNuxtConfig({ app: { head: { charset: 'utf-8', viewport: 'width=device-width, initial-scale=1', title: 'Florian Strasser', htmlAttrs: { lang: 'de' }, meta: [ { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'description', content: '' }, { name: 'theme-color', content: '#0C1B14' }, { name: 'format-detection', content: 'telephone=no' }, { name: 'google-site-verification', content: 'rFXmUstLa2IsWqAB7pBC0erTzfV5SBDTQiBuykWbj5g' } ], link: [ { rel:…

### CASE-6533 · Nuxt does not fully prefetch the page with all its data (only .vue file)
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, linux, ubuntu, nuxt, vue
- **Signals**: 👍1 💬6 · open · labels: good first issue/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ```` ------------------------------ - Operating System: Linux (Ubuntu 24.04 LTS) - Node Version: v22 - Nuxt Version: - - CLI Version: 3.15.0 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ```` ### Reproduction [link] ### Describe the bug Nuxt by default has page prefetching on "visibility". It means when a NuxtLink is visible in the viewport, Nuxt will prefetch the page in the background. Nice! But it seems to only prefetch the ".vue" file and not the data. For example, if I…

### CASE-6573 · [Nuxt 3.9.0] dev server crashes hard when there is an optimize dep for vite that isn't installed
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, tailwind
- **Signals**: 👍2 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: 10:10:31 AM ------------------------------ - Operating System: Linux - Node Version: v20.10.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: modules, devtools, runtimeConfig, experimental, viewport, app, $production, site, sitemap, routeRules, router, image, svgo, content, components, tailwindcss, vite, nitro, gsap - Runtime Modules: @user/[email], @user/[email], [email], [email], @user/[email], @user/[email], @user/[email], @user/[email]-beta.51 - Build Modules: -…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6527 · SWR is not running in the background
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment > Add cache headers to the server response and cache it on the server or reverse proxy for a configurable TTL (time to live). The node-server preset of Nitro is able to cache the full response. When the TTL expired, the cached response will be sent while the page **will be regenerated in the background**. If true is used, a stale-while-revalidate header is added without a MaxAge. The documentation says that swr mode refreshes the page in the background, but this is not the case for me. I set swr for five minutes, and it turns out that if the page has not been cached, the first…

### CASE-6559 · On route update, page component is unmounted instead of being updated
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬6 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug On route param update (e.g. /route/1 to /route/2), the target component is unmounted and mounted again instead of just being updated. This used to work with Nuxt 2. ### Additional context _No response_ ### Logs _No response_

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-6534 · Scrol-to-top doesn't affect pages in nested layouts
- **Principles**: P-D4, P-F1, P-F5 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬6 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.10.0 - Nuxt Version: 3.13.2 - CLI Version: 3.13.2 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, app, colorMode, devtools, extends, i18n - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction When the layout is full screen without global scrolling, nested pages do not respect routers' `scrollTo` position from the plugin. ### Describe the bug How do you force scroll-to-top on nested pages? Widely suggested an…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6587 · error caught during app initialization Error: Page not found: /xxxx
- **Principles**: P-G4, P-E3 · **Env**: nuxt, vue
- **Signals**: 👍2 💬6 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment "nuxt": "^3.7.3" ### Reproduction [link] ### Describe the bug I created an error.vue page, but when I input a non-existent route, such as/kkl, the browser's console outputs an error message: error caution during app initialization Error: Page not found:/kkl. The entire page is blank ### Additional context _No response_ ### Logs _No response_

