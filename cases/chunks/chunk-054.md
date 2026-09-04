# Case Chunk 054 — Round 54

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-6301 · 4.5.1: app.config-declared component variant no longer type-checks (TS2322) — works on 4.5.0, still broken on 4.5.2
- **Principles**: P-A2, P-A4, P-E1, P-E2, P-E4 · **Env**: nuxt, vue
- **Signals**: 👍1 💬7 · closed · labels: types/pending triage/needs reproduction
- **Excerpt**: ### Environment - `nuxt`: 4.5.0 (working) → 4.5.1 / 4.5.2 (broken) - `@user/ui`: 4.10.0 (unchanged across the bump — ruled out as cause, see below) - `vue-tsc` via `nuxt typecheck` - App config declares a custom Nuxt UI variant, e.g.: ```ts // app.config.ts export default defineAppConfig({ ui: { formField: { variants: { orientation: { action: 'flex items-center justify-between gap-4', }, }, }, }, }) ``` ### Bug report On `[email]`, a template usage of the custom variant type-checks fine: ```vue <UFormField orientation="action">...</UFormField> ``` On `[email]` and `4.5.2`, the identical…

### CASE-6329 · Unwanted `div` created for client only pages using `NuxtLayout` + `NuxtPage`
- **Principles**: P-A2, P-A4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: ✨ enhancement/📚 documentation/good first issue/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.14.1592 - CLI Version: 3.17.1 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug With a layout that depends on CSS flexbox, some client only pages are broken because there seems to be a `div` element created by either `NuxtLayout` or `NuxtPage` possibly that is not a flex element. This ruins the page layout for my application.…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6302 · Runtime failure ERR_MODULE_NOT_FOUND with Nuxt 4.5.0
- **Principles**: P-F4 · **Env**: opera, macos, nuxt, vite, typescript
- **Signals**: 👍1 💬7 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment │ │ Operating system macOS 25.3.0 │ │ │ CPU Apple M3 (8 cores) │ │ │ Node.js version v24.13.1 │ │ │ nuxt/cli version 3.37.0 │ │ │ Package manager npm 11.8.0 │ │ │ Nuxt version 4.5.0 │ │ │ Nitro version 2.13.4 │ │ │ Builder vite 8.1.5 │ │ │ Config app, compatibilityDate, components, css, devServer, devtools, experimental, features, │ │ │ hooks, ignore, modules, nitro, runtimeConfig, sourcemap, ssr, telemetry, typescript, vite │ │ │ Modules @user/test-utils/module 4.0.3, @user/nuxt 14.2.1 ### Reproduction I can't provide a reproduction. I'm migrating a huge project from 4.4 to…

### CASE-6307 · useAsyncData returns 500 when ssr is disabled via routeRules
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: 🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ```txt Operating system Windows 10.0.26200 CPU Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz (8 cores) Node.js version v24.11.1 nuxt/cli version 3.33.1 Package manager pnpm 10.27.0 Nuxt version 4.3.1 Nitro version 2.13.1 Builder vite 8.0.0-beta.6 Config compatibilityDate, devtools, routeRules Modules - ``` ### Reproduction [link] ### Describe the bug When disabling SSR for a route using routeRules, useAsyncData results in a 500 error, but only when running nuxt generate. The issue does not occur in nuxt dev or normal SSR builds, and only becomes reproducible when the project is…

### CASE-6308 · Nuxt Links not being handled properly in Nuxt Generate
- **Principles**: P-F4 · **Env**: opera, macos, nuxt
- **Signals**: 👍1 💬7 · closed · labels: pending triage/nitro
- **Excerpt**: ### Environment | | | | -------------------- | -------------------------------------------------------------------- | | **Operating system** | `macOS 25.1.0` | | **CPU** | `Apple M1 Pro (8 cores)` | | **Node.js version** | `v24.11.0` | | **nuxt/cli version** | `3.31.3` | | **Package manager** | `[email]` | | **Nuxt version** | `4.2.2` | | **Nitro version** | `2.12.9` | | **Builder** | `[email]` | | **Config** | `app`, `compatibilityDate`, `debug`, `devtools`, `logLevel`, `ssr` | | **Modules** | `-` | ### Reproduction [link] ### Describe the bug When using a base URL that matches part of a…

### CASE-6309 · Nuxt 3 | useHead - remove link-Tag (for example rel alternate or canonical)
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍1 💬7 · closed · labels: 📚 documentation
- **Excerpt**: ### Environment - NUXT 3.x - Universal App with SSR and CSR. ### Reproduction Install NUXT 3 - build a page A with canonical and alternate hreflang to lang a,b,c - build a page B without canonical and ONLY a alternate hreflang to lang b Now you can see the SSR works as aspected. Now you can see the CSR overwrite the hreflang b url correctly but with useHead the old canonical and hreflang a and c language where not removed. ### Describe the bug We only can add Link Meta-Tags with useHead. We could not remove them. ### Additional context ```javascript const links = [] links.push({ hid:…

### CASE-6312 · [v4.0.2] Error updating to version 4.0.2
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.17.1 - Nuxt Version: 4.0.1 - CLI Version: 3.27.0 - Nitro Version: 2.12.4 - Package Manager: [email] - Builder: - - User Config: app, ssr, buildDir, nitro, runtimeConfig, css, build, modules, vite, plugins, compatibilityDate - Runtime Modules: @user/[email], @user/[email] - Build Modules: - ### Reproduction Download the new version 4.0.2 and when running Nuxt it fails ### Describe the bug [CAUSE] TypeError { stack: 'Package import specifier "#app/entry" is not defined in package ./node_modules/nuxt/package.json imported from…

### CASE-6320 · Update of component prop before hydration causes hydration to fail
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, react
- **Signals**: 👍8 💬7 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment Operating System: Linux Node Version: v20.19.0 Nuxt Version: 3.16.2 CLI Version: 3.24.1 Nitro Version: 2.11.9 Package Manager: [email] Builder: - User Config: compatibilityDate, devtools Runtime Modules: - Build Modules: - ### Reproduction [link] 1. Build stackblitz demo 2. Reload stackblitz preview 3. Press toggle border button one or more times before NuxtWelcome is hydrated (It is hydrated after 2 seconds) 4. Wait for NuxtWelcome to hydrate 5. Now the NuxtWelcome component no longer reacts to prop updates, probably because of failed hydration. ### Describe the bug When…

### CASE-6322 · EMFILE Error During Development with Nuxt Devtools (3.16 - 3.16.1) - Too Many Open Files
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript, tailwind
- **Signals**: 👍1 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v23.10.0 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.7 - Package Manager: [email] - Builder: - - User Config: future, srcDir, devtools, vite, ssr, typescript, imports, modules, shadcn, tailwindcss, runtimeConfig, compatibilityDate - Runtime Modules: @user/motion/[email], @user/[email], @user/test-utils/[email], @user/[email], @user/[email], [email], [email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: - ------------------------------ ### Reproduction…

### CASE-6323 · Hydration mismatch when using Nuxt Layers
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍5 💬7 · closed · labels: 🐛 bug/❗ p4-important/layers/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.16.1 - CLI Version: 3.23.1 - Nitro Version: 2.11.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, extends - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug After updating to Nuxt 3.16, a hydration mismatch occurs when extending a base project (`base`) in another project (`layer`). The setup consists of: - `base`: Contains common components like `<Header />` and `<Footer />`. -…

### CASE-6333 · Error parsing JavaScript expression: Expecting Unicode escape sequence \uXXXX
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬7 · closed · labels: pending triage/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.10.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, site, hub, devtools, modules, i18n, css, app, alias, content, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Hello. When loading the website through `localhost:3000/` there is no issue. However, if I load the…

### CASE-6334 · relative path not supported for `app.baseURL`
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍4 💬7 · open · labels: good first issue/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.14.0 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, app, compatibilityDate, modules - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When setting `app.baseURL` to `./`, it gets ignored when using `nuxt generate` and the generated links in `dist/index.html` point to `href=/.nuxt/..` instead of `href=./.nuxt/..` ### Additional context I'm using…

### CASE-6336 · NuxtClientFallback renders fallback for all components if one failed, after hydration
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬7 · closed · labels: 🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.11.1 - Nuxt Version: 3.10.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, experimental - Runtime Modules: - - Build Modules: - ### Reproduction [link] I've added 2 pages - `/works` - not using the `ErrorBoundary` wrapper: it behaves correctly :heavy_check_mark: - `/bugs` - using the `ErrorBoundary` wrapper: it reproduces the bug :red_circle: ### Describe the bug When building a wrapper around `NuxtClientFallback` and using it is used in multiple places on one page,…

### CASE-6337 · navigateTo() Server Side
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v22.2.0 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, future, devtools, modules, eslint - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction ```return navigateTo('/)``` ### Describe the bug Hi, When i try return navigateTo('/') from within an api - TS shouts "Cannot find name 'navigateTo'. Did you mean 'navigator'?ts(2552) lib.dom.d.ts(27611, 13): 'navigator' is declared here."…

### CASE-6343 · useHead reactivity fails when value updated in onMounted
- **Principles**: P-F4 · **Env**: opera, linux, react, nuxt
- **Signals**: 👍1 💬7 · closed · labels: 📚 documentation/workaround available/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.9.3 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] ### Describe the bug The following code sets body class on page load (with SSR) but doesn't remove it when the component mounts: ```ts const loading = useState(() => true); useHead({ bodyAttrs: { class: () => (loading.value ? 'yellow' : ''), }, }); onMounted(() => { loading.value = false; }); ``` However, the code starts to work if…

### CASE-6351 · Method not allowed
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍2 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Working directory: C:/dev/hotel-viewer 08:16:49 Nuxt project info: 08:16:49 ------------------------------ - Operating System: Windows_NT - Node Version: v20.10.0 - Nuxt Version: 3.9.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, modules, runtimeConfig, colorMode, ssr, app, googleFonts, ui - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction i've created a folder in `/server/api` directory, with name `/logs`. Added `index.get.ts` file.…

### CASE-6352 · Nuxi crashes on changes - pointer being freed was not allocated
- **Principles**: P-F4 · **Env**: opera, macos, nuxt, vite
- **Signals**: 👍2 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.17.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr, hooks, css, serverHandlers, runtimeConfig, nitro, vite - Runtime Modules: - - Build Modules: - ------------------------------ OS: MACos Sonoma Version 14.1.2 (23B92) NVM: 0.39.7 ### Reproduction I dont know where is the issue coming from to make the reprex for it( the current project is a very big one) ### Describe the bug I ran into this issue regularly on nuxt 3 (nuxi), whenever I change…

### CASE-6356 · nuxt3.8.X + tauri : "Cannot read properties of undefined (reading 'entries')"
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍4 💬7 · closed · labels: 3.x/workaround available/pending triage
- **Excerpt**: ### Environment nuxi info : ``` - Operating System: `Darwin` - Node Version: `v18.18.2` - Nuxt Version: `3.8.2` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `ssr`, `devServer` - Runtime Modules: `-` - Build Modules: `-` ``` tauri info: ``` ✔] Environment - OS: Mac OS 14.1.2 X64 ✔ Xcode Command Line Tools: installed ✔ rustc: 1.74.0 (79e9716c9 2023-11-13) ✔ cargo: 1.74.0 (ecb9851af 2023-10-18) ✔ rustup: 1.26.0 (5af9b9484 2023-04-05) ✔ Rust toolchain: stable-x86_64-apple-darwin (default) - node: 18.18.2 - pnpm: 8.10.5 -…

### CASE-6360 · Server dynamic route matching
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.8.1 - Nuxt Version: 3.8.0 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: yarn@ - Builder: - - User Config: ssr, nitro, experimental, components - Runtime Modules: - - Build Modules: - ### Reproduction server/ &nbsp;&nbsp;&nbsp;&nbsp;api/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[db]/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts…

### CASE-6361 · Client-side only rendering not creating index.html
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: 16:34:14 ------------------------------ - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.8.0 - CLI Version: 3.9.1 - Nitro Version: 2.7.0 - Package Manager: [email] - Builder: - - User Config: devtools, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction export default defineNuxtConfig({ devtools: { enabled: true }, ssr: false }) and then nuxi generate ### Describe the bug The official documentation say: "The nuxi generate command will then output an .output/public/index.html entrypoint and…

### CASE-6364 · 3.7.x Layer could not resolve dependencies
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍4 💬7 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/layers
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.17.1 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: modules, vite, ssr, runtimeConfig - Runtime Modules: @user/[email] - Build Modules: - ------------------------------ ### Reproduction 3.7.4 (not working): [link] 3.6.5 (working): [link] Steps: 1. npm install "base" folder dependencies 2. npm install "project" folder dependencies 3. npm run dev in "project" folder ### Describe the bug I have a "Base" Nuxt project with…

### CASE-6368 · Detect if in CSR or SSR
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: extends, modules, gtag - Runtime Modules: [email] - Build Modules: - ------------------------------ ### Reproduction None needed ### Describe the bug How can i detect in what mode the currect code is being run? (Not in what side) What i want to do is to have a composable for storing a persistent state, but this must correctly choose between Cookie and LocalStorage based on the rendering mode. I…

### CASE-6369 · nuxt generate command takes lot of memory
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.17.0` - Nuxt Version: `3.6.5` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `plugins`, `app`, `postcss`, `runtimeConfig`, `modules`, `graphqlMiddleware`, `vite`, `nitro`, `experimental`, `ssr`, `vue`, `schemaOrg` - Runtime Modules: `[email]`, `@user/[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction I've created a small application that shows the problem with keeping memory for long time: [link] Please see it's README file where I put more description than…

### CASE-6373 · [Layers] `#imports` keeps old state even if there are changes in extended project.
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/layers
- **Excerpt**: ### Environment `ssr: false` I don't think it's related to `nuxt` version ### Reproduction Only during development ### Describe the bug Have two projects. One extends other. Parent and Child projects with each own `.nuxt`. 1. Add function with export in Parent project. `import.d.ts` of Parent updates. 2. Try to call that function in Child. But `#imports` of Child project keep old state, and Child project can't see that function, even if it's possible to call it. It's also related to classes. When one class is written in Parent project and it's used in Child project, and I add new property to…

### CASE-6374 · fsevents EBADPLATFORM error
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍0 💬7 · closed · labels: 3.x/workaround available/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v16.20.0 - Nuxt Version: 3.5.3 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: typescript, ssr, nitro, runtimeConfig, modules, i18n, pinia, gtag, css, build, vite, hooks, app - Runtime Modules: @user/[email], @user/[email]-beta.12, [email] - Build Modules: - ------------------------------ ### Reproduction _No reproduction link_ ### Describe the bug I upgraded Nuxt to the latest version, and I get an error when deploying on Firebase. ### Additional context _No response_…

### CASE-6375 · [Bug][3.5.0] Pinia store not persisting to client-side
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍0 💬7 · closed · labels: 3.x/workaround available/pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.5.0` - Nitro Version: `2.4.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `cwa`, `extends`, `srcDir`, `typescript` - Runtime Modules: `[email]` - Build Modules: `-` ### Reproduction I'm not sure how to make a minimal reproduction right now, but it is apparent in my module. Using 3.4.* I have my store data populated on server-side and shows on client side. When upgrading to 3.5.0 the SSR shows the data and then disappears on client-side ### Describe the bug As described…

### CASE-6378 · ssr: true with dynamic routes does not throw 404 correctly
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v16.16.0 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: ssr, runtimeConfig, css, postcss, modules, hooks - Runtime Modules: @user/[email], @user/[email] - Build Modules: - ### Reproduction n/a ### Describe the bug When generating a static site with ssr: true, navigating to a non existing slug page does not throw a correct 404, and instead tries to make a client call to fetch the page data ./nuxt.config.ts: `export default defineNuxtConfig({ ssr: true, nitro: { prerender: {…

### CASE-6379 · My project with nuxt 3 is not loading on the server side
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `windicss`, `build`, `buildModules`, `modules`, `experimental`, `components`, `vite`, `runtimeConfig`, `vueuse` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]`, `[email]`, `@user/[email]-28002839.c6a7c9b` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction [link] The reproduction is the same as the previous problem…

### CASE-6384 · server return type error
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.13.0` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `nitro`, `ssr`, `modules`, `app` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug server return type why add `SerializeObject` ? 接口返回类型为什么要添加 `SerializeObject` ? ### Additional context _No response_ ### Logs _No response_

### CASE-6385 · "Hydration text mismatch" when using `useFetch` and `computed`
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.17.0` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules` - Runtime Modules: `@user/[email]` - Build Modules: `-` (Running on codesandbox.io) ### Reproduction [link] ### Describe the bug Using a computed value in the template which accesses data from a `useFetch` (without top-level await) leads to a hydration mismatch error. ### Additional context It seems like this only happens if the computed value is also accessed somewhere else in the `<script setup>` tag.…

### CASE-6386 · useFetch ssr not working when use same function in page setup and click event on an element after upgrade nuxt to 3.2.2 from 3.0.0
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v18.13.0` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `buildModules`, `pwa`, `css`, `purgecss`, `vite`, `nitro`, `runtimeConfig`, `experimental`, `app`, `sourcemap` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `@user/[email]`, `[email]` ------------------------------ ### Reproduction I have a home page and I want to call two fetch requests and pass the results to a component.…

### CASE-6387 · Simple page hydration problem
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v18.14.1` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug I'm trying to print the page title in every page in a div inside the default layout The title is obviously set in the page during the setup What happens is on client the title is not rendered leading in a "Hydration text content mismatch" ### Additional…

### CASE-6388 · antdv [Vue warn]: Hydration node mismatch
- **Principles**: P-F4 · **Env**: opera, vue, nuxt, vite, typescript
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ``` - Operating System: `Darwin` - Node Version: `v18.14.0` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `telemetry`, `experimental`, `app`, `css`, `alias`, `build`, `postcss`, `modules`, `components`, `vite` - Runtime Modules: `-` - Build Modules: `-` ``` ### Reproduction [link] open console and `hover` dropdown ### Describe the bug When using both antdv and nuxt3, an error ` Hydration node mismatch` is generated [link] ### Additional context _No response_ ### Logs ```shell-script…

### CASE-6390 · Get formData in server api from front call and send it as it is to external API
- **Principles**: P-F4, P-G4, P-E3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍4 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.16.0` - Nuxt Version: `3.2.0` - Nitro Version: `2.2.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `css`, `app` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Send formData multipart with file to server api (ssr) then try to send this formData to external api ### Describe the bug We don't know how to pass the file or the multipatr form to external api form example send file to api, retrieve it and send it ### Additional context we try with readBody (no file retrieved) we try const…

### CASE-6391 · useState + component + layout create hydration node mismatch
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v17.3.0` - Nuxt Version: `3.1.2` - Nitro Version: `2.1.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug When combined using ```useState``` in ```Component``` in ```layout```, nuxt respond a warning. The server side did not create the component when ```v-if="true"``` in the page in this case. ``` runtime-core.esm-bundler.js:40 [Vue warn]: Hydration node mismatch: -…

### CASE-6392 · Hydration node mismatch in 3.1.0
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v19.2.0` - Nuxt Version: `3.1.0` - Nitro Version: `2.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `css`, `components`, `alias`, `modules`, `colorMode` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction [codesandbox]([link]) ### Describe the bug ``` [Vue warn]: Hydration children mismatch in <div>: server rendered element contains fewer child nodes than client vdom. at <Spin> at <Index…

### CASE-6393 · devProxy not work
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/nitro/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `ssr`, `nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug i'm use ssr mode。and i want proxy client and sever side request to another server。here is my config of `nuxt.config.ts`，but now it not work。and if i want Authorization for my request both client and server side only in dev mode? ``` // [link] export default defineNuxtConfig({ runtimeConfig: {…

### CASE-6398 · Hydration text content mismatch
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` ### Reproduction ```js <script setup lang="ts"> const randomNumber: number = Math.floor(Math.random() * 1000000000); </script> <template> <p>{{ randomNumber }}</p> </template> ``` ### Describe the bug Hydration text content mismatch in <p>: - Client: 807910065 - Server: 36586442 ### Additional context During development we had to implement number generator in order to create _unique_ ID (reproduction is simplified, but it still shows the same error). However, every time we use it, we get server/client mismatch as described…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6303 · The error overlay reports incorrectly identify the source of the error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/150, safari/537, linux, windows, nuxt, webkit
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Environment ~/projects/xorijywwyq.github ❯ npx nuxt info │ ● Nuxt root directory: /home/projects/xorijywwyq.github │ Nuxt project info: | | | | -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v22.22.3` | | **nuxt/cli version** | `3.35.2` | |…

### CASE-6316 · 4.0.0-alpha, spa mode: chrome request JS modules twice with prefetch <link>.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v23.11.1 - Nuxt Version: 4.0.0-alpha.1 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: nitro, experimental, future - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction minimal reproduction: [link] screenshot of the double-requests: ![Image]([link]) ### Describe the bug In spa mode, the JS files requested again and again. in my project it was twice (one for prefetch, one for use). In the reproduction, even more. In my…

### CASE-6330 · Page refresh bug
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt, vue, tailwind
- **Signals**: 👍0 💬7 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment *package.json* ```js { "name": "nuxt-app", "private": true, "type": "module", "scripts": { "build": "nuxt build", "dev": "nuxt dev", "generate": "nuxt generate", "preview": "nuxt preview", "postinstall": "nuxt prepare" }, "dependencies": { "@user/nuxt": "^0.1.2", "@user/core": "^12.0.0", "@user/nuxt": "^12.0.0", "nuxt": "^3.14.1592", "vue": "latest", "vue-router": "latest" }, "devDependencies": { "@user/devtools": "npm:@user/devtools-edge@user", "@user/tailwindcss": "^6.12.2", "@user/client": "^6.0.1", "prisma": "^6.0.1" } } ``` ### Reproduction [link] ### Describe the bug I…

### CASE-6338 · `useFetch` will be http 400 when navigate from different layout page in old browser and ios app(alipay/qq)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 56, ios, linux, android, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.9.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, app, modules, legacy, experimental - Runtime Modules: [email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When this issue ([ref]) was closed, i have try the latest version. I'm trying to polyfill the old browser(use [nuxt-vite-legacy]([link]), my old browser is android chrome 56), but found an another bug: > 'when…

### CASE-6345 · generate bug
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i3-10100F CPU @ 3.60GHz Memory: 8.10 GB / 15.93 GB Binaries: Node: 20.11.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - F:\Other\nodejs\global\yarn.CMD npm: 10.2.4 - C:\Program Files\nodejs\npm.CMD pnpm: 8.6.0 - F:\Other\nodejs\global\pnpm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (117.0.2045.36) Internet Explorer: 11.0.19041.1566 ### Reproduction [link] ### Describe the bug my test site:[link] When I use the npm run generate,cdn prefix of //, the example. {. build: {. publicPath:…

### CASE-6347 · nuxt doesn't respect vite.server.hmr config
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, android, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.11.1 - Nuxt Version: 3.10.2 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction ```ts // [link] export default defineNuxtConfig({ devtools: { enabled: true }, devServer: { port: 3002, }, vite: { server: { hmr: { host: '192.168.50.44', port: 3001, } }, }, }) ``` the vite.server.hmr config is just ignored (nuxt keep doing hmr via port 3002 on localhost) ### Describe the bug on proxied environment like in tauri android it fail…

### CASE-6367 · Dynamic attributes are not rendered correctly on Firefox after page refresh
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Darwin - Node Version: v19.8.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction [[link]]([link]) ### Describe the bug If an attribute is toggled dynamically, on first-page load it is rendered correctly and works as expected. After a full page refresh, the attribute is not rendered correctly anymore. ### Steps to reproduce 1. Open Firefox and visit the [reproduction]([link]) 2.…

### CASE-6371 · Provide option for trailing slash handling like in nuxt2, also to avoid double-redirects with nginx default settings
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.16.1` - Nuxt Version: `3.6.3` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `devtools`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction #### trailing-slash-redirect-test [link] - clone this repository to your local drive - `pnpm install` - `pnpm run generate` - `docker run -v ./dist:/usr/share/nginx/html:ro -v ./nginx.conf:/etc/nginx/conf.d/default.conf:ro -p 3000:80 nginx:latest` - navigate to `http:/localhost:3000/test` with chrome devtools > network tab open ###…

### CASE-6382 · scrollBehavior does not scrollToTop between regular and nested page
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: chrome, firefox, safari, macos, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment System: OS: macOS 13.2.1 CPU: (8) arm64 Apple M1 Pro Memory: 69.81 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.19.1 - ~/.nvm/versions/node/v16.19.1/bin/node Yarn: 1.22.19 - ~/www/showbizz/frontend/node_modules/.bin/yarn npm: 8.19.3 - ~/.nvm/versions/node/v16.19.1/bin/npm Browsers: Chrome: 111.0.5563.64 Chrome Canary: 113.0.5665.2 Firefox: 110.0.1 Safari: 16.3 Safari Technology Preview: 16.4 npmPackages: nuxt: ^2.15.8 => 2.16.3 ### Reproduction Coming ### Describe the bug A) When navigating between sibblings nested pages, Nuxt should not scrollToTop. This is…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6304 · Cannot find module with typecheck
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: types/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment nuxt 4.4.4 ### Reproduction no ### Describe the bug A clean Nuxt project, create a new file app/pages/index.vue Then run the command npx nuxt typecheck An error appears <img width="1163" height="299" alt="Image" src="[link] /> ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-6305 · Unable to Import Images inside NuxtPage
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment | | | | -------------------- | --------------------------------- | | **Operating system** | `macOS 24.6.0` | | **CPU** | `Apple M1 Pro (8 cores)` | | **nuxt/cli version** | `3.34.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.4.2` | | **Nitro version** | `2.13.2` | | **Builder** | `[email]` | | **Config** | `compatibilityDate`, `devtools` | | **Modules** | `-` | ### Reproduction Repo: [link] 1. Run `nuxt dev` 2. Open [link] ### Describe the bug The following error will appear on screen once the repo steps are completed: ``` 500 Internal Server Error Failed to…

### CASE-6311 · Prerender 404 error if initial route has custom path
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment "nuxt": "^4.2.0", "vue": "^3.5.22", "vue-router": "^4.6.3" (got no output from command on stackblitz 🤔) ### Reproduction [link] ### Describe the bug When running `pnpm nuxt generate`, a 404 error will be thrown if you have one route (or the index route) which has a path defined using `definePageMeta({ path: '/custom-path' })`. In the case of the reproduction I have `app/pages/my-page.vue`, which has a custom path `/some-other-page`. But running generate will try to prerender the file based route of `/my-page`. <img width="646" height="234" alt="Image" src="[link] /> ###…

### CASE-6315 · Nested catch-all routes flattened instead of grouped as children after upgrading from Nuxt 3.15.4 to 3.17.5
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, tailwind, vite, vue
- **Signals**: 👍1 💬7 · closed · labels: good first issue/pages
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v22.13.1` - Nuxt Version: `3.17.4` - CLI Version: `3.25.1` - Nitro Version: `2.11.12` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `colorMode`, `compatibilityDate`, `experimental`, `routeRules`, `app`, `icon`, `modules`, `fonts`, `image`, `tailwindcss`, `gtm`, `router`, `components`, `srcDir`, `schemaOrg`, `runtimeConfig`, `build`, `nitro`, `vite`, `headlessui`, `imports`, `$production` - Runtime Modules: `./src/modules/logger/module`, `./src/modules/error-pages/module`, `floating-vue/[email]`,…

### CASE-6317 · Nuxt 3.17.4 - useAsyncData is caching parameters
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, typescript, vue
- **Signals**: 👍2 💬7 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.15.0 - Nuxt Version: 3.17.4 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: extends, imports, runtimeConfig, sourcemap, vite, app, schemaOrg, routeRules, typescript, modules, components, vueuse, i18n, nitro, unocss, router, image, cachingHeaders, testUtils, telemetry, molliePaymentsComponents, algolia, gtm, storybook, experimental, security, compatibilityDate - Runtime Modules: [email], @user/[email], @user/[email], @user/[email]-canary-20240304085919, @user/[email], [email],…

### CASE-6319 · Configuration file ignore is not effective.
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue
- **Signals**: 👍2 💬7 · closed · labels: 🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.18.2 - Nuxt Version: 3.16.2 - CLI Version: 3.25.0 - Nitro Version: 2.11.9 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ignore - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction npm create nuxt@user After initialization, the test results ![Image]([link]) ![Image]([link]) ### Describe the bug In nuxt.config.ts, the ignore property is configured to ignore the specific route file test/index.vue. After running pnpm generate, the…

### CASE-6321 · automatically dedupe asyncdata on server
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, typescript
- **Signals**: 👍0 💬7 · closed · labels: 🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v22.14.0` - Nuxt Version: `3.16.1` - CLI Version: `3.23.1` - Nitro Version: `2.11.8` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Hi, I was watching a video by Alexander Lichter about caching API calls in Nuxt and decided to test this approach in my Nuxt app. I copied and pasted the code exactly as shown: ```typescript const { data } = await useFetch<any>('[link] { headers: { Accept: 'application/json', },…

### CASE-6324 · Request waterfall flow
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ![Image]([link]) local dev env ### Reproduction null ### Describe the bug Local development, with the integration of element plus, found that the startup was particularly slow. It was discovered that requests were made to files in node_modules, causing a waterfall of requests. The development experience was particularly poor, and I am not sure if it is a problem with element plus in Nuxt, Vite, or Nuxt modules - Nuxt3 is developed locally, without any optimization of the modules in Node.js? Or is there no optimization for the underlying Vite in local development? - I connected…

### CASE-6325 · Nuxt 3 vite optimizeDeps does not work with Nuxt modules/plugins
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍8 💬7 · closed · labels: pending triage/bundler:vite
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.20.4 - Nuxt Version: 3.11.2 (note: tried with 3.15.4 - same issue) - CLI Version: 3.21.1 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: modules, experimental, routeRules, runtimeConfig, devtools, image, vite, build, nitro, i18n, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], \@user\test-lib\src\test-module.ts - Build Modules: - ### Reproduction Steps: 1. Clone [link] 2. run `cd ./app && npm ci && npm run dev` 3. open [link] in browser 4. open…

### CASE-6327 · Typescript does not correctly recognize the return type of $fetch and useFetch
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, typescript, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v22.11.0 - Nuxt Version: 3.15.4 - CLI Version: 3.21.1 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, future, devtools, components, vite, modules, colorMode, css, icon - Runtime Modules: [email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction ![Image]([link]) ![Image]([link]) ![Image]([link]) ### Describe the bug Inside a function, the return type of a data…

### CASE-6328 · New `shared` folder breaking change
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: good first issue/❗ p4-important/possible regression
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.15.1 - CLI Version: 3.20.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction Hi Nuxt team! I've encountered an issue while upgrading my company's large production project from Nuxt version 3.12.2 to 3.15.1. After hours of troubleshooting, I finally identified the cause of the problem, thanks to @user's [video]([link]). The issue…

### CASE-6332 · Cannot augment types for server in authoring a module, `addTypeTemplate` does not work for Nitro side
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt
- **Signals**: 👍9 💬7 · closed · labels: types/🐛 bug/nitro/kit
- **Excerpt**: ### Environment On Stackblitz: - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.13.2 - CLI Version: 3.15.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: [email] - Build Modules: - ### Reproduction [link] ### Describe the bug I am authoring a module and have two `d.ts` files where I augment types from Nuxt Auth Utils and Nitro (specifically H3 context) by using `addTypeTemplate`: `runtime/auth.d.ts` ```ts declare module '#auth-utils' { interface User { id: string; role: string; email: string; name: string; image?:…

### CASE-6339 · Cannot deploy to cloudflare pages
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, tailwind
- **Signals**: 👍1 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.14.0 - Nuxt Version: 3.12.1 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: css, extends, modules, site, sitemap, ogImage, linkChecker, seoExperiments, seo, cookieControl, sanctum, bugsnag, eslint, image, runtimeConfig, imports, ui, devtools, experimental, colorMode, tailwindcss - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/motion/[email], [email], [email], [email], @user/[email], [email], @user/[email], [email],…

### CASE-6340 · Nuxt 3 Dev build time is very slow in WSL 2 Linux Ubuntu ~ ranging up to 30 seconds just to refresh changes
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, ubuntu, nuxt, vite, typescript
- **Signals**: 👍0 💬7 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: 12:46:45 PM ------------------------------ - Operating System: Linux - Node Version: v21.7.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, spaLoadingTemplate, ignore, vite, modules, colorMode, runtimeConfig, typescript, nitro, image, $development, postcss, i18n, sourcemap - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ 👉 Report an issue: [link] framework]/issues/new 12:46:45 PM 👉 Suggest an…

### CASE-6346 · When opening a page of nuxt3 in a qq app window on an apple phone, it reports 500 error code
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, typescript, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.18.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, app, sourcemap, typescript, modules, site, css, imports, legacy, vite, nitro, runtimeConfig, image - Runtime Modules: [email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ### Reproduction uconf.com ### Describe the bug ![500]([link] framework]/assets/151698067/1d0ee828-01a3-499e-895b-590a6d709c53) When opening a page of…

### CASE-6348 · Types Error for types exported from external libraries.
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬7 · closed · labels: types/3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.9.0 - Nuxt Version: 3.10.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, experimental, runtimeConfig, app, modules, fontLoader, css, vite, typescript, i18n, nuxt-jsonld, primevue, image - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], [email], [email], @user/[email], [email] - Build Modules: - ### Reproduction [link] ### Describe the bug After updating Nuxt to the latest…

### CASE-6349 · failed to resolve "extends":"./.nuxt/tsconfig.json"
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: types/pending triage/layers
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.10.0 - Nuxt Version: 3.9.3 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [demo]([link]) ### Describe the bug layer have tsconfig: ``` { // [link] "extends": "./.nuxt/tsconfig.json" } ``` when i have error.vue file in layer, will show error: ![image]([link] framework]/assets/9149999/85471807-b790-49c7-86b1-fbd6efa8a3b8) ### Additional context Original discussion here： [link] framework][ref][ref] ### Logs _No response_

### CASE-6353 · Fast Navigation on SSG Initial Page Load Causes Nuxt to Rerun Asyncdata and Not Load payload.json
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT but has happened on multiple systems - Node Version: v18.19.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: build, nitro, runtimeConfig, modules, plugins, gtm, lazyLoad, $meta, dayjs, css, vite - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ### Reproduction Will provide asap - I'm wrapping up a big project and will need to jury rig a solution around this first. Expect it by 1/6/2024. ###…

### CASE-6355 · Why do I get `error.value.statusCode` does not exists and how to solve?
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, modules, ui, runtimeConfig, css, site, linkChecker, sitemap, colorMode, ogImage, vite, devtools - Runtime Modules: @user/[email], @user/[email]-beta.50 - Build Modules: - ------------------------------ ### Reproduction - Create a nuxt project - Create a composable like this one ```ts export async function fetchRepoBySlug(slug: string) { const config = useRuntimeConfig()…

### CASE-6357 · How to obtain the response header for page URL requests?
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment export default defineEventHandler((event) => { console.log('New request: ' + event.node.req.url) console.log('New request: ' + event.node.res.getHeaderNames()) }) I tried using the defineEventHandler API, but I couldn't get the response header, event. node. res. getHeaderNames(). I want the response header for the page URL. How do I get it? for example ![image]([link] framework]/assets/117260282/4c68024d-79c0-41dc-96a1-5d2bd341b802) ### Reproduction [link] ### Describe the bug I'm not sure how to obtain the response header for page URL requests in nuxt3 ### Additional context…

### CASE-6359 · nuxt3 useHead title String Escape
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment nuxt : 3.6.5 ### Reproduction [[link] view](view-source:[link]) ![image]([link] framework]/assets/117260282/e6367868-376b-4561-99c7-713aa6fe9f6a) ### Describe the bug I used useHead to add webpage SEO tags, but as long as the symbol of the title tag is escaped. You can view the title and meta tags in the link to reproduce bugs ### Additional context _No response_ ### Logs _No response_

### CASE-6363 · All components are loaded at once in development mode
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.18.1 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: app, buildDir, runtimeConfig, imports, css, components, alias, modules, auth, image, googleFonts, colorMode - Runtime Modules: @user/[email], @user/[email], [email], @/modules/google-fonts/module, @user/[email]-rc.3, @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug 1. Created some custom components in the…

### CASE-6365 · increased render blocking queue from nuxt 3.6.5 to 3.7
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, typescript, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction/⚡ performance/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.10.0 - Nuxt Version: 3.7.0 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: modules, site, sitemap, robots, ogImage, linkChecker, head, routeRules, extends, typescript, sourcemap, devServer, htmlValidator, image, runtimeConfig, schemaOrg, nitro, appConfig, ignore, hooks, css, vite - Runtime Modules: @user/[email], @user/[email], @user/[email]-rc.1-28164352.ad7c010, @user/motion/[email], [email] - Build Modules: - ------------------------------ ###…

### CASE-6366 · Error on image compression in public directory with AWS-Preset
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/nitro
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.17.1` - Nuxt Version: `3.7.0` - CLI Version: `3.7.0` - Nitro Version: `2.6.1` - Package Manager: `[email]` - Builder: `-` - User Config: `nitro` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] -> Open this stackblitz -> Go to /icon.png ### Describe the bug All .png or .jpg files in public directory are broken when you build your app with AWS-Preset. ### Additional context This issue can be related to this pull request: [link] ### Logs _No response_

### CASE-6370 · H3error at Module.createError when fetching data using useAsyncData
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ----------------------------- - Operating System: Linux - Node Version: v18.16.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: app, vite, runtimeConfig, css, modules, strapi, i18n, image - Runtime Modules: @user/[email]-beta.13, @user/[email], @user/[email]-rc.1-28164235.9cba5d4 - Build Modules: - ------------------------------ ### Reproduction (---) ### Describe the bug I have a Nuxt project which fetches data from a Strapi CMS also running locally. The following code is an example of how I am fetching data for a page:…

### CASE-6372 · Error during `nuxi generate` in link[href] with data url containing slashes
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: good first issue/3.x/pending triage/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.2 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Running `nuxi generate` raises an error when a project contains a HTML snippet like below. ```html <link rel="icon" href="data:image/png;base64,aaa//bbbbbb/ccc"> ``` In this reproduction, nitro recognize `/ccc` as a linked page path by mistake. Route `/ccc` doesn't exist so it…

### CASE-6377 · Memory leak in Nuxt 2 website
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: opera, linux, nuxt, webpack
- **Signals**: 👍0 💬7 · closed · labels: pending triage/2.x/⚡ performance
- **Excerpt**: ### Environment RootDir: /home/projects/github-rdczqk 3:04:22 PM Nuxt project info: 3:04:22 PM ------------------------------ - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 2.16.3 - Nitro Version: - - Package Manager: [email] - Builder: webpack - User Config: server, ssr, optimization, modules, chakra, crawler, head, publicRuntimeConfig, privateRuntimeConfig, image, router, loading, css, plugins, components, buildModules, sitemap, build, i18n - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules:…

### CASE-6380 · Nuxt3 Error Log Line of Code doesn't match actual line of code
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍5 💬7 · open · labels: 🛠️ dx/nitro/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v18.15.0` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `mode`, `ssr`, `app`, `runtimeConfig`, `modules`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug If there is an error in your code it is very difficult to find the exact line of code causing the issue, look at this simple example: <img width="438" alt="errortestingFile" src="[link]> If I run that file and open the console I…

### CASE-6383 · [nuxt] [layer] cannot build layer when <picture> <source> srcset uses image from public/ folder
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: 3.x/pending triage/layers
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v18.13.0` - Nuxt Version: `3.3.1` - Nitro Version: `2.3.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `alias` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Add some image to `public/` folder, and then use that in any component (for example: `public/img/something.png` ``` <template> <section> <h1>Hello World!</h1> <picture> <source srcset="/img/something.png" type="image/png" > <img src="/img/something.png"> </picture> </section>…

### CASE-6389 · TypeScript kinda broken in 3.2.0 with Volar
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, typescript, nuxt, vite, tailwind
- **Signals**: 👍3 💬7 · closed · labels: 3.x/workaround available/❗ p4-important
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.14.0` - Nuxt Version: `3.2.0` - Nitro Version: `2.2.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `modules`, `runtimeConfig`, `ssr`, `tailwindcss`, `typescript`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Reproduction not applicable. ### Describe the bug When upgrading from v3.1.2 to v3.2.0, TypeScript seems to be broken when used in VS Code + Volar v1.0.24. v3.1.2 (correct) <img width="705" alt="Screenshot…

### CASE-6394 · docs: plugins/ directory are auto-registered? why
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 📚 documentation/good first issue/3.x
- **Excerpt**: ### Environment no ### Reproduction All plugins in your plugins/ directory are auto-registered, so you should not add them to your nuxt.config separately. But in [Nuxt Configuration Reference]([link]), all demo is in the `plugins` directory. ---- <img width="807" alt="image" src="[link]> [link] ### Describe the bug documentation is unclear ### Additional context _No response_ ### Logs _No response_

### CASE-6395 · ERROR [commonjs--resolver]
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.18.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `buildModules`, `modules`, `http`, `strapi`, `i18n`, `runtimeConfig` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]-alpha.1` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction ![image]([link]) ### Describe the bug when i run `nuxi build` occurred this error , but when i run `nuxi dev ` is OK `ERROR`…

### CASE-6400 · [DOCS] NuxtLayout warn vs documentation
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Oficial page - [link] Local env is: > Nuxt 3.0.0-rc.12 with Nitro 0.6.0 ### Reproduction [link] ### Describe the bug App.vue have issue on declared way to use layouts: > You can use <NuxtLayout /> component to activate default layout on **_app.vue_** or error.vue. And in app get this message: ` WARN Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application.Consider removing <NuxtLayout> from app.vue and using it in your pages.` ### Additional context `App.vue` ```js <template> <NuxtLayout> <NuxtPage /> </NuxtLayout> </template> ``` ### Logs _No…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6306 · The requested module '/_nuxt/composables/x.ts?t=1772618481096' does not provide an export named 'xx' (at xxx.ts)
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: nuxt, webpack
- **Signals**: 👍1 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment | **Node.js version** | `v22.14.0` | | **nuxt/cli version** | `3.33.1` | | **Package manager** | `[email]` | | **Nuxt version** | `4.3.1` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** | `app`, `build`, `compatibilityDate`, `css`, `devServer`, `gtag`, `hooks`, `modules`, `routeRules`, `router`, `runtimeConfig`, `ssr`, `webpack` | | **Modules** | `@user/[email]`, `@user/[email]`, `[email]`, `[email]`, `@user/[email]` | ### Reproduction ``` // models/test.ts export default class Test { // variable named same with composables exported function…

### CASE-6326 · Nuxt state not propagating correctly on SSR page
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.15.4 - CLI Version: 3.21.1 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, ssr, pages - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When using useState in a SSR env, the state doesn't seem to populate across components before page generation. ### Additional context In my demo environment, I set a test variable and the app root, and try to reference…

### CASE-6358 · Auto import doesn't work when exported variable and type share the same name.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, typescript, vue
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.17.1` - Nuxt Version: `3.8.2` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `typescript`, `imports` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction 1. clone repo [link] 2. run `npm i` -> `npx nuxt typecheck` Expected Result: no TS errors Actual Result: there is 1 TS error ``` components/WithTSError.vue:8:10 - error TS2749: 'TestEnum' refers to a value, but is being used as a type here. Did you mean 'typeof TestEnum'? 8 const a: TestEnum =…

### CASE-6376 · Build files environment variable or option
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: question/🍰 p2-nice-to-have
- **Excerpt**: ### Describe the feature Hello there, I am a NixOS ([link]) developer and we package sometimes software that uses Nuxt as a server runtime, unfortunately, because we enforce scoping and many things, we cannot guarantee that `.nuxt` is in the same current working directory, it is often locked in a immutable folder. Therefore, we are always stuck whenever we want to run `nuxt start`, could there be a Nuxt environment variable to redirect the build files somewhere else? Thank you! ### Additional information - [X] Would you be willing to help implement this feature? - [ ] Could this feature be…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6310 · nuxt3 build proxy ?
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍1 💬7 · closed · labels: pending triage/nitro
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v22.14.0 - Nuxt Version: 3.17.5 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: devtools, app, runtimeConfig, vite, modules, stylelint, dayjs, eslint, css, fonts, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction my nuxt.config.ts ``` export default defineNuxtConfig({ devtools: { enabled: false, }, app: { rootId: 'app', head: { meta: [ { name: 'viewport', content:…

### CASE-6381 · npx nuxi build fails random with @user/splide/dist/css/themes/splide-default.min.css
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, linux, nuxt, vite, tailwind
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v18.15.0` - Nuxt Version: `3.3.1` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `srcDir`, `modules`, `tailwindcss`, `vite`, `i18n`, `nitro`, `schemaOrg`, `telemetry`, `algolia`, `head`, `auth`, `viewport`, `css`, `build`, `runtimeConfig` - Runtime Modules: `genesis-design-system/nuxt`, `@user/[email]`, `@user/[email]`, `[email]`, `[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `[email]`, `@user/[email]`, `@user/[email]-beta.10`, `@user/[email]` - Build Modules: `-` ### Reproduction…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6313 · staleMaxAge not setting TTL
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: Hi, When I set {maxAge: 3600, swr: false} I see in my redis an TTL of 3600. When i remove the swr and replace it with {staleMaxAge: 86400} the TTL is removed so my redis keeps growing and growing. I don't know if this is indended behaviour or not. Is there something I do wrong? I would like to keep the cache in redis for a day, but recache it after an hour (swr). We have lots of pages (200k+) and to keep them all in memory forever is a bit much.

### CASE-6314 · `useFetch` stale key with `watch: false` and `execute()` (manual mode)
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: opera, linux, nuxt, vite, typescript, react
- **Signals**: 👍2 💬7 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v23.5.0 - Nuxt Version: 4.0.0-alpha.2 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: modules, pages, dir, vite, typescript - Runtime Modules: () - Build Modules: - ------------------------------ ### Reproduction Stackblitz: [link] 1. fill first input 2. submit first 3. second component gets data too [link] 1. `pnpm test:runtime composables` ### Describe the bug If we set the watch to false, the auto key is not reactive. This is an (expected (?))…

### CASE-6342 · Potential memory leak on fresh nuxt 3 install
- **Principles**: P-F5, P-H3 · **Env**: opera, windows, nuxt
- **Signals**: 👍1 💬7 · closed · labels: 3.x/pending triage/⚡ performance
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.11.1 - CLI Version: 3.11.0 - Nitro Version: 2.9.4 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction 1) Do a fresh install of nuxt. 2) Add this file to the plugins folder ``` process.lastRequestMemoryUsed = -1; process.requestsServed = 0; export default defineNuxtPlugin((nuxtApp) => { nuxtApp.hook('app:rendered', (renderContext) => { // Force Garbage Collection for…

### CASE-6350 · Memory leak when generating many pages
- **Principles**: P-F5, P-H3 · **Env**: opera, nuxt
- **Signals**: 👍6 💬7 · closed · labels: 3.x/🐛 bug/nitro/🔨 p3-minor/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.5.0` - Nuxt Version: `3.9.3` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When there are many pages, Nuxt generates all pages one after another, memory usage always grows and eventually Node crashes with error about missing memory. Demo repository has about 65k pages, generates using basic loops: - main page -> links for all directories - `/[dir]/` -> directories,…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6318 · `Cannot read properties of undefined (reading 'split')` when prerendering
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt, typescript, vite
- **Signals**: 👍0 💬7 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.15.1` - Nuxt Version: `3.17.4` - CLI Version: `3.25.1` - Nitro Version: `2.11.12` - Package Manager: `[email]` - Builder: `-` - User Config: `ssr`, `css`, `modules`, `runtimeConfig`, `app`, `imports`, `devtools`, `formkit`, `i18n`, `typescript`, `build`, `eslint`, `vite`, `compatibilityDate` - Runtime Modules: `@user/auto-animate/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Unfortunately, I have no clue ### Describe the bug I…

### CASE-6331 · Pre-transform error: Failed to parse source for import analysis because the content contains invalid JS syntax
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.0 - Nuxt Version: 3.13.2 - CLI Version: 3.15.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction nuxt cli (fresh build) ### Describe the bug Recently I noticed that an error is displayed in a clean build, at the bottom I posted a screenshot of the spam error ### Additional context ![Image]([link]) ### Logs _No response_

### CASE-6335 · Page Transition with javascript hooks not working properly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.9.0` - Nuxt Version: `3.12.4` - CLI Version: `3.12.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `app`, `devtools`, `css`, `components`, `modules`, `pinia`, `build`, `runtimeConfig`, `compatibilityDate` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When I use a javascript hook to trigger my transition page, before triggering the output transition, the page instantly scrolls upwards. ### Additional context _No response_ ### Logs…

### CASE-6341 · Nuxt Build Error (RegExp.prototype.exec)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, typescript
- **Signals**: 👍0 💬7 · closed · labels: pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Darwin - Node Version: v20.11.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, modules, css, app, router, auth, devServer, robots, colorMode, pinia, build, typescript, piniaPersistedstate, hooks, site, sitemap, nitro, runtimeConfig, features - Runtime Modules: [email], @user/[email], @user/auto-animate/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], v-wave/nuxt, @user/[email], @user/[email]-rc.10,…

### CASE-6344 · Some thing wrong with a autoplay <video> in the <NuxtLayout>
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍1 💬7 · closed · labels: workaround available/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `-` - CLI Version: `3.10.1` - Nitro Version: `-` - Package Manager: `unknown` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I want the video to loop automaticall. But I open the /index page, when I change to the /video, the video won't autoplay, if you refresh the page , it will be ok. I find when I remove the </NuxtLayout name="default">' or pageTransition (in nuxt.config.ts), everything returns to normal. ### Additional context…

### CASE-6397 · Reactivity Transform
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment client and server ### Reproduction null ### Describe the bug Reactivity Transform id not working anywhere in Nuxt? ``` <script setup> let x = $ref(30) console.log(x) </script> ``` nuxt throw error 500 "$ref not define" ### Additional context _No response_ ### Logs _No response_

### CASE-6399 · Issue with serving static file html with public dir after rc13
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, nuxt, vite, vue, typescript
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `extends`, `meta`, `runtimeConfig`, `modules`, `unocss`, `vueuse`, `ssr`, `pageTransition`, `vue`, `nitro`, `sourcemap`, `vite`, `build`, `typescript` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction 1. Create stand alone html file with resources inside `public/magic` dir 2. Use the created html file in i frame inside any component of page…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6354 · [Nuxt 3.9] - Hydration STYLE mismatch
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment Nuxt 3.9 ### Reproduction I tried to upgrade from 3.8.2 to 3.9 using ```nuxi upgrade``` ### Describe the bug I've run into issue that was not present in 3.8.2: Hydration **style** mismatch on < div class...>​…​</div>​ // etc, replaced upon pasting - rendered on server: style="font-size:16px;--spacing:12px;" - expected on client: style="font-size: 16px; --spacing: 12px" What's even more weird is that these properties actually comes from simple props with default values: (Component simplified for showcase) ```js withDefaults(defineProps<Props>(), { width: 16, spacing: 12, });…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6362 · input Use v-model bidirectional binding hot update exception
- **Principles**: P-G4, P-E3 · **Env**: opera, nuxt
- **Signals**: 👍0 💬7 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.16.0 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug input Use v-model two-way binding, when change the v-model to :value, the two-way binding is still effective, need to refresh the page, then it will be normal. ### Logs _No response_

### CASE-6396 · useFetch automatic request after first request
- **Principles**: P-G4, P-E3 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍6 💬7 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.3` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `postcss`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug I have created a separate component for an input field, which is structured as follows: ```vue components/form/app/TextField.vue <template> <div> <label v-if="label" :for="name" class="block text-sm pl-0.5"> {{ label }} <span…

