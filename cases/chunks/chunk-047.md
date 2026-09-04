# Case Chunk 047 — Round 47

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5601 · Hydration mismatch when using the `useId` hook, when using the `app/` router
- **Principles**: P-F4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍45 💬10 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: 8.6.1 Relevant Packages: next: 13.4.12-canary.0 eslint-config-next: 13.4.12 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router ###…

### CASE-5616 · Caching doesn't work
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬10 · closed · labels: examples/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Thu Jan 5 20:48:54 PST 2023; root:xnu-8792.81.2~2/RELEASE_ARM64_T6000 Binaries: Node: 14.18.1 npm: 6.14.15 Yarn: N/A pnpm: N/A Relevant packages: next: 13.1.6 eslint-config-next: 13.1.6 react: 18.2.0 react-dom: 18.2.0 ### Which example does this report relate to? ssr-caching ### What browser are you using? (if relevant) Opera GX ### How are you deploying your application?…

### CASE-5618 · TypeError: Cannot read properties of null (reading 'parentNode')
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍91 💬305 · closed · labels: 3.x/workaround available/🐛 bug/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27389502.88da719` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction use this [sandbox]([link]), Visit `${url}/organization/365824000000000003/template/new` click on the "a" link then the "b" link and this error is thrown: ``` runtime-core.esm-bundler.js:38 [Vue warn]: Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please…

### CASE-5622 · Failed to execute 'appendChild' on 'Node': This node type does not support this method.
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍12 💬106 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [2.6]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Source: [link] Localhost dev is ok, but when `nuxt generate` and deploy to server, it occurs error. Besides, all links cannot click then. ### What is expected ? generate and work. ### What is actually happening? ``` Error: [nuxt] Error while mounting app: HierarchyRequestError: Failed to execute 'appendChild' on 'Node': This node type does not support this method. at 624151740479ce035ad7.js:1 ``` ### more build - ssr - set to false, then localhost develop: ``` Nuxt.js: Loading app... ``` auto refresh and…

### CASE-5637 · Cannot access 'renderer$1' before initialization is:closed
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍11 💬47 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.12.1` - Nuxt Version: `3.4.3` - Nitro Version: `2.3.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `modules`, `schemaOrg`, `windicss`, `build`, `runtimeConfig` - Runtime Modules: `[email]`, `[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction I've run `npx nuxi upgrade --force` as advise on a project previously running Nuxt 3.0.0. ### Describe the bug My previously running site is showing a 500 error, whereas before it was working: ``` Cannot access…

### CASE-5638 · Hot reload is not working
- **Principles**: P-F4 · **Env**: windows, nuxt, vite
- **Signals**: 👍16 💬46 · closed · labels: 3.x/pending triage/platform:windows
- **Excerpt**: Issue[ref]: Changes from code editor is not reflecting on the app, Clearing Cache / Reloading the page manually do work. Issue[ref]- linked: When ever there is an exception , say 500 / module not found, after correcting the code, the page don't reload itself, have to restart server. Files located inside - pages directory, System: windows 10, Nuxi 3.2.0 Nuxt 3.2.0 with Nitro 2.2.1 What i have tried? - Modified nuxt.config.js as per [one of solution]([link]) ``` ssr:false, vite: { server: { watch: { usePolling: true, }, }, }, ``` Demo: [link]

### CASE-5639 · Nuxt development server continiously restarts with `--https`
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍4 💬45 · closed · labels: 3.x/🐛 bug/bundler:vite
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: `Darwin` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-27274229.29599f0` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `publicRuntimeConfig`, `ssr`, `target`, `meta`, `build`, `css`, `buildModules` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ``` ### Describe the bug the development server seems to restart all the time ### Reproduction steps: - install fresh project with `nuxi init` - generate ssl key and certificate - updated dev script to `nuxi dev --host domain.test…

### CASE-5652 · 502 Error deploying Nuxt 3 to Amplify (no such file or directory, open '/static/index.html') - prerender not working
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍3 💬37 · closed · labels: 3.x/pending triage/nitro
- **Excerpt**: ### Environment - Node 18 - Nuxt Version: 3.9.3 - Nitro Version: 2.8.1 - User Config: devtools, modules, runtimeConfig, app, css, routeRules - Runtime Modules: @user/[email], @user/[email] ### Reproduction Deploy a Nuxt 3 App to Amplify following to the letter the instructions in the Nuxt docs : - Connect github repo - Keep the autodetected config for Nuxt - Open the URL provided ### Describe the bug When deploying a Nuxt 3 app on Amplify in SSR mode, and using the default auto detected build settings, the app will be build successfully, but when accessing the app via the subdomain provided…

### CASE-5664 · HMR not working after upgrade from 3.8.1 to 3.9.0
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, webpack, vite, vue
- **Signals**: 👍9 💬30 · closed · labels: pending triage/bundler:vite
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.12.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: devtools, target, ssr, spaLoadingTemplate, $production, routeRules, nitro, render, experimental, webpack, modules, buildModules, runtimeConfig, css, vite, sourcemap, app - Runtime Modules: @user/[email] - Build Modules: @user/[email], floating-vue/nuxt ### Reproduction I've tried to produce a minimal repro and failed. I'm happy to work towards providing one, but I need help understanding how HMR works on…

### CASE-5670 · `useFetch` data return null with mismatching client/request options
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬30 · closed · labels: 📚 documentation/3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-27480123.4c77c88` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ``` ### Reproduction In clean Nuxt project: ```vue <template> <div> <NuxtWelcome /> </div> </template> <script lang="ts" setup> const [{ data: organization }, { data: repos }] = await Promise.all([ useFetch(`[link]), useFetch(`[link]) ]) console.log(organization.value) // null const { data: organization } =…

### CASE-5676 · Nuxt 4.4.4 dev server fails for ssr:false app: Vite Node IPC socket path not configured
- **Principles**: P-F4 · **Env**: macos, nuxt, vite, vue
- **Signals**: 👍58 💬28 · closed · labels: pending triage/nitro/❗ p4-important/possible regression
- **Excerpt**: ## Environment - OS: macOS 26.4.1, Darwin arm64 - Nuxt: 4.4.4 - Nitro: 2.13.4 - Vite: 7.3.2 - Vue: 3.5.33 - @user/cli: 3.35.1 - @user/vite-builder: 4.4.4 - Package manager: npm 11.13.0 - Node: v22.15.0 when running `npm run dev` `nuxi info` did not populate the usual table for this project; it only printed the Nuxt root directory. ## Reproduction I do not have a public minimal reproduction repo yet. I can reproduce this in an app upgraded from Nuxt 4.4.2 to 4.4.4 with `ssr: false` and dev type checking enabled. Relevant config shape: ```ts // nuxt.config.ts export default defineNuxtConfig({…

### CASE-5685 · Error: Failed to download template from registry: fetch failed
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬26 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Mac M2 - Node Version: v18.16.1 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Init new project using Nuxi. `npx nuxi init test` ![Screen Shot 2023-06-28 at 20 10 05 p m]([link] framework]/assets/3856266/584a53e1-e728-48fa-9ecc-9d8d522f8852) ### Describe the bug Impossibility to create a project, the bug is also present when using useFecth with SSR. ### Additional context…

### CASE-5691 · `inlineSSRStyles` option causes duplication of CSS
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍15 💬25 · closed · labels: ❗ p4-important/⚡ performance/✨ good reproduction/inline styles
- **Excerpt**: ### Environment Nuxi 3.6.1 RootDir: /home/projects/github-nk3n5b Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Inlined CSS files are also loaded from `link` tag, which cause duplication of CSS. This problem occurs only if SSR is enabled (after `nuxi build` or `nuxi generate`), doesn't happen in `nuxi dev`. ![screenshot…

### CASE-5692 · Infinite redirect when the url contains ANY "+" character breaking the application
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍4 💬25 · closed · labels: 3.x/🐛 bug/pages/❗ p4-important
- **Excerpt**: Hi guys, first of all thanks for the amazing job in this awesome tool! I'm facing an several issue when the user tries to access the Nuxt application (SSR mode) using an url that contains any "+" character, the application apply an endless 302 redirect breaking all the application. ### Versions - nuxt: [3.0.0-rc.4, 3.0.0-rc.5] - node: [14.17.1, 16.14.2, 16x (Vercel)] ### Reproduction Url to test: [link] Example repo with the error: [link] ### Steps to reproduce Deploy an application on Vercel that contains vue-router (using Nuxt pages), if the application does not contains vue-router it won't…

### CASE-5698 · Optimizing dependencies - Nuxt 3.11.2
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, typescript
- **Signals**: 👍34 💬24 · closed · labels: 3.x/workaround available/🛠️ dx/bundler:vite/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v21.5.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, typescript, modules, imports, css, pinia, runtimeConfig, components, app, eslint, googleFonts - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Since Nuxt 3.11.0 I (and few others on Discord) have…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5602 · not-found.tsx does not work with edge runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react, typescript
- **Signals**: 👍5 💬10 · closed · labels: bug/Linking and Navigating/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 20.3.1 npm: 9.6.7 Yarn: 1.22.19 pnpm: 8.6.3 Relevant Packages: next: 13.4.10-canary.6 eslint-config-next: 13.4.3 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router,…

### CASE-5604 · Unexpected rendering has occurred in Parallel Routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, next.js, react, typescript
- **Signals**: 👍0 💬10 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.16.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.8-canary.8 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.5 Next.js Config: output: N/A ``` ### Which example does this report relate to? none ### What browser are you using? (if relevant) Chrome Version 114.0.5735.198 ### How are you deploying your application? (if…

### CASE-5606 · Web APIs Cache not working in Vercel Edge Middleware – typeof `caches` is `undefined`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react, typescript
- **Signals**: 👍11 💬10 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:37 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6000 Binaries: Node: 16.20.0 npm: 8.19.4 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.4-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.3 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge…

### CASE-5608 · "TypeError: handler is not a function at Server" deploying to Google Cloud Run
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍8 💬10 · closed · labels: bug/Output/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:46 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6020 Binaries: Node: 18.15.0 npm: 9.5.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.1-canary.2 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime), Standalone mode (output:…

### CASE-5615 · TypeError: Load failed
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, next.js, mobile
- **Signals**: 👍23 💬10 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Verify canary release - [ ] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Having Random error in Mobile safari with no extra error details except shown in below image. Browser: Mobile Safari Version:16.3 ![image]([link]) ### Which area(s) of Next.js are affected? (leave empty if unsure) Data fetching (gS(S)P, getInitialProps), Image optimization (next/image, next/legacy/image), Script optimization (next/script) ### Link to the code that reproduces this issue - ### To Reproduce - ### Describe the Bug - Getting 500 Internal server…

### CASE-5617 · [NEXT-705] API routes returning 404 when adding RSC header
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍6 💬10 · closed · labels: bug/linear: next/locked/not stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` npx next info Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:43 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8112 Binaries: Node: 16.18.1 npm: 8.19.2 Yarn: N/A pnpm: 7.26.3 Relevant packages: next: 13.1.7-canary.20 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API…

### CASE-5624 · safari: infinite loop when hot reloading
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, nuxt
- **Signals**: 👍78 💬91 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.2]([link]) (or latest 2.0.0 pre code) ### Steps to reproduce 1. Launch dev server via `yarn dev` (`HOST=0.0.0.0 nuxt`) 2. Load [link] 3. Edit code, any code. Watch the nuxt dev server recompile everything. 4. Reload 5. HMR fails, triggering rapid reloading of the entire page, forever, until Safari kills the tab for excessive CPU usage. 6. The only way to test new code is to close the tab and open a new tab to localhost (and re-open dev console). ### What is expected ? Hot reload to work without forcing me to close the tab and open a new tab every time I change a line of…

### CASE-5626 · WSL: Hot reloading issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍12 💬83 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.6.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1) yarn create nuxt-app test-nuxt-2 --edge yarn create v1.15.2 [1/4] Resolving packages... [2/4] Fetching packages... [3/4] Linking dependencies... [4/4] Building fresh packages... success Installed "[email]" with binaries: - create-nuxt-app > Generating Nuxt.js project in C:\Users\peter\Documents\TestingProject\test-nuxt-2 ? Project name test-nuxt-2 ? Project description My marvelous Nuxt.js project ? Use a custom server framework none ? Choose features to install Progressive Web App (PWA) Support,…

### CASE-5627 · Memory leak on server side
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: opera, chrome, nuxt, vite
- **Signals**: 👍36 💬69 · closed · labels: 3.x/🐛 bug/upstream/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v19.2.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug 1. Build the project. 2. Run it in "inspect" mode (`pnpm start-debug`). 3. Open Chrome Devtools via `chrome://inspect/#devices` in browser. 4. In "Memory" tab take heap snapshot. 5. Run some load testing tool, f.e. Apache Bench: ```sh ab -n 1000 -c 10 [link] ``` 6. Then take another snapshot. 7. Repeat steps 5, 6 few…

### CASE-5628 · Nuxt 2.3.1 modern build issues on IE11/Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, edge 20, nuxt
- **Signals**: 👍0 💬67 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.3.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Open link in either IE or Edge. Open the developer tools and click on console tab. Script error should appear in console. ### What is expected ? IE11/Edge should not have any scripting errors in developer mode Edge 20.x should be served with the modern build ### What is actually happening? IE11/Edge receive a script error which halts the app's progress in loading Edge 20.x gets served the legacy build ### Additional comments? Encountered an issue on Nuxt 2.3.1 around the modern build and IE11/Edge. My…

### CASE-5633 · [edge] Deployment of new version breaking site for live users. ( Loading chunk {n} failed error)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍27 💬49 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [None](None) ### Steps to reproduce This happens on a live site, production deployed not a dev. The sequence of events following: User opened the site home page New version of the app was deployed to web servers User clicked a link to another page within the nuxt SPA User saw Loading chunk {n} failed message instead of the new page content [link] Any site deploy could break the SPA for live users and cause them to need a refresh. This should be handled properly by nuxt, maybe something like automatically…

### CASE-5640 · Homepage doesn't stop loading and none of the nuxt-links are working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍13 💬44 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.9.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Page doesn't stop loading in latest version of nuxt-edge. This wasn't a problem previously, something broke. Screenshot: [link] I tried rerunning ```npm run dev``` and restarting the server a few times. The issue persists. ``` > nuxt --port 3000 ╭─────────────────────────────────────────────╮ │ │ │ Nuxt.js v2.9.0-26104328.b22e0543 │ │ Running in development mode (universal) │ │ │ │ Listening on: [link] │ │ │ ╰─────────────────────────────────────────────╯ ``` Note: even on removing ALL the code from the…

### CASE-5645 · nuxt.js vuex performance compared to vue.js + vuex
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, nuxt, vue
- **Signals**: 👍2 💬39 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.9.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Commits are very slow in nuxt.js vuex compared to plain vue.js + vuex. Example with nuxt.js: [link] Example with vue.js + vuex: [link] Before run please open chrome dev tools first, before each commit there will be console.log message fired. It will be visible how fast is vue.js + vuex commits for 2470 items to commit compared to same amount of commits with same data on nuxt.js vuex. Note: nuxt.js example require to click on the link "Click Me!" to start. While vue.js jsfiddle example require just to…

### CASE-5649 · DevTools failed to parse SourceMap
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 80, bootstrap, vue
- **Signals**: 👍18 💬38 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.11.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Chrome 80.0.3987.87, bootstrap vue starter boilerplate. ``` # install dependencies $ yarn install # serve with hot reload at localhost:3000 $ yarn dev ``` Open the console, reload the page and look for console warnings. ### What is expected ? No console warnings. ### What is actually happening? The following console warnings are shown: ``` DevTools failed to parse SourceMap: [link] DevTools failed to parse SourceMap: [link] ``` ### Additional comments? Probably related to [link] Might be related to…

### CASE-5651 · [Vue Router warn]: No match found for location with path "/.well-known/appspecific/com.chrome.devtools.json"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vue
- **Signals**: 👍32 💬37 · closed · labels: 🍰 p2-nice-to-have
- **Excerpt**: ### Environment I get console warn after upgrade last version 3.17.2 [Vue Router warn]: No match found for location with path "/.well-known/appspecific/com.chrome.devtools.json" ### Reproduction [Vue Router warn]: No match found for location with path "/.well-known/appspecific/com.chrome.devtools.json" ### Describe the bug [Vue Router warn]: No match found for location with path "/.well-known/appspecific/com.chrome.devtools.json" ### Additional context [Vue Router warn]: No match found for location with path "/.well-known/appspecific/com.chrome.devtools.json" ### Logs ```shell-script [Vue…

### CASE-5654 · Nuxt + Cordova
- **Principles**: P-G1, P-G2, P-G3 · **Env**: nuxt, webview
- **Signals**: 👍2 💬36 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: Hello, Since this is my first issue, I feel like I need to thank you guys for this awesome project. Thanks! I'm trying to build a multiplatform project, and Nuxt is my chosen one framework. The only problem I've encountered is when wrapping the static generated content in a webview; it kinda works, but it fails to load some files. Seems to be related with [ref], which was closed using serve as a solution, but can't be applied in this case. Why the serve is needed anyway? This file wasn't supposed to just be static? Or how can I get it working without needing it to be served? Thanks again.…

### CASE-5662 · Nuxt page fn $forceUpdate exists when running in dev mode but not in prod (build, start) [nuxt-edge]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬31 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Hi, please follow reproduction link provided. _) git clone [link] A.1) start the app via `yarn run dev` A.2) open start page, use (click) buttons - in particular top button from layout - '[page.$forceUpdate from layout]' A.3) check console / store / $store.state.random template rendered output A.4) the button from layout '[page.$forceUpdate from layout]' does invoke the $forceUpdate - triggering the page `fetch` method -> store commit -> state change.. B.1) build and start the app in prod mode via `yarn…

### CASE-5668 · slow windows build
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, ios, nuxt, tailwind
- **Signals**: 👍0 💬30 · closed · labels: pending triage/platform:windows/⚡ performance
- **Excerpt**: ### Environment ```json { "dependencies": { "@user/nuxt": "^0.4.6", "axios": "^0.21.1", "js-cookie": "^3.0.1", "mathjs": "^11.3.3", "pinia-plugin-persist": "1.0.0", "qs": "^6.11.0" }, "devDependencies": { "@user/image-edge": "^1.0.0-27913696.5d122a3", "@user/types": "^2.15.8", "@user/google-fonts": "^2.0.0", "@user/jquery": "^3.5.14", "@user/js-cookie": "^3.0.2", "@user/prettier": "^2.7.1", "@user/tailwindcss": "^3.1.0", "autoprefixer": "^10.4.0", "cross-env": "^7.0.3", "nuxt": "^3.1.0", "postcss": "^8.3.11", "prettier": "^2.7.1", "prettier-plugin-tailwindcss": "^0.1.13", "sass": "^1.55.0",…

### CASE-5683 · Unexpected token '...'. Expected a property name in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, webpack
- **Signals**: 👍1 💬27 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.3]([link]) ### Reproduction link [[link]]([link]) [[link]]([link]) ### Steps to reproduce Please help to get clarity of problem. Application falls down at loading ### What is expected ? Safari doesn't support spread in destructuring ### What is actually happening? 1) @user/webpack uses extract-css-chunks-webpack-plugin version 3.3.2 2) extract-css-chunks-webpack-plugin uses normalize-url package 3) normalize-url/index.js has untransposed destruction operator { ...options } 4) If I comment "...options" in file…

### CASE-5686 · Weird glitch on page change (Firefox)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, safari, firefox 58, chrome 64, ubuntu, ios, nuxt
- **Signals**: 👍5 💬26 · closed · labels: pending triage/2.x
- **Excerpt**: ## Issue Description: While building my own website ([link]) I've recognized that when changing pages, the (already loaded) footer will be displayed before the page content kicks in. The glitch does not occur on the first load, only on page change. ## System information: Browser: **Firefox** (tested on version 58.0.1 (64-bit) Ubuntu 17.10), Chrome and iOS Safari ran fine. NuxtJS mode: production mode NuxtJS version: 1.4 (but also occurred on previous versions) ## How does the glitch look like Firefox 58.0.1 (64-bit) Ubuntu 17.10: ![ff]([link]) Chrome 64.0.3282.140 (Official Build) (64-bit)…

### CASE-5689 · Error when opening nuxt3 web link in China's QQ application
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, nuxt, vite, vue, webview
- **Signals**: 👍4 💬25 · closed · labels: 3.x/workaround available/🐛 bug/🍰 p2-nice-to-have
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.9.0 - Nuxt Version: 3.8.1 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: alias, app, spaLoadingTemplate, runtimeConfig, plugins, modules, vant, css, postcss, nitro, vite, vue, telemetry, sourcemap - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction The link I used is [link] ### Describe the bug At present, it is only found that an error will be reported when nuxt3 is opened in QQ's webview. The error message is as shown in the…

### CASE-5700 · Nuxt 3 not working on iOS <= 12
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, ios, ios 12, nuxt, vite
- **Signals**: 👍1 💬24 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.20.1` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Created a [minimal reproduction on stackblitz]([link]), while the problem is, that stackblitz (and codesandbox) does not work on iOS (12). So I hope this is not a problem! But basically all you need to do is installing Nuxt 3 and open the page with an iOS device on iOS 12 or below. In the stackblitz example above, I’ve created this simple counter…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5603 · `minimumCacheTtl` option in `next.config` does not work when deployed on Vercel, but works locally (next build + next start)
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍1 💬10 · closed · labels: Image (next/image)/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Sun Nov 6 23:31:13 PST 2022; root:xnu-8020.240.14~1/RELEASE_ARM64_T6000 Binaries: Node: 16.14.2 npm: 8.5.0 Yarn: 1.22.18 pnpm: 7.25.1 Relevant Packages: next: 13.4.10-canary.3 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization…

### CASE-5607 · [NEXT-1204] `opengraph-image` can't be used to accept params in catch-all routes (`Error: Catch-all must be the last part of the URL.`)
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍1 💬10 · closed · labels: bug/Metadata/Runtime/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 20.1.0 npm: 9.6.4 Yarn: N/A pnpm: 8.5.0 Relevant packages: next: 13.4.1 eslint-config-next: 13.4.1 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Metadata (metadata, generateMetadata, next/head,…

### CASE-5610 · Next beta app directory - random problem with local Images
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍0 💬10 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Docker image from latest Next example ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue It's random ### To Reproduce No way to reproduce. ### Describe the Bug I have random problem with next images served from public directory. Currently i'm using latest v13.3.1 with beta App directory - but i had the same problem on all v13.3.1 canary versions. It's random -…

### CASE-5613 · [NEXT-943] Broken shimmer effect in next/image
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react
- **Signals**: 👍8 💬10 · closed · labels: Image (next/image)/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.19.0 npm: N/A Yarn: N/A pnpm: 7.29.0 Relevant packages: next: 13.2.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that reproduces this issue [link]…

### CASE-5614 · [NEXT-878] False positive image size warning for non-integer width/height
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍1 💬10 · closed · labels: bug/Image (next/image)/not stale
- **Excerpt**: ### Verify canary release * [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: linux Arch: x64 Version: [ref]~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb 17 15:17:25 UTC 2 Binaries: Node: 16.19.1 npm: 8.19.3 Yarn: N/A pnpm: N/A Relevant packages: next: 13.2.5-canary.8 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that reproduces this issue…

### CASE-5619 · Build and dev mode are slow and got errors in logs when importing Vuetify 3 with Vite-plugin-vuetify
- **Principles**: P-A3, P-H1 · **Env**: opera, vue, vite, nuxt
- **Signals**: 👍21 💬126 · closed · labels: pending triage/bundler:vite/upstream/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.10.0` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `runtimeConfig`, `build`, `vite`, `imports`, `modules` - Runtime Modules: `()`, `@user/[email]` - Build Modules: `-` ### Reproduction Here the link of the stackblitz: [link] I tried to clean and keep only the concerned code. Below, the code that make the bug: nuxt-config.ts <img width="576" alt="image" src="[link]> ### Describe the bug Hello, i have this logs on dev mode and build time, from rc-11 to…

### CASE-5621 · Failed to fetch dynamically imported module "/_nuxt/OpeningHours.CTqYYKGj.js"
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍16 💬108 · closed · labels: ✨ enhancement/good first issue/3.x/pending triage/🍰 p2-nice-to-have
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v21.6.1 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.5 - Package Manager: [email] - Builder: - - User Config: runtimeConfig, sourcemap, app, css, modules, i18n, alias, auth, build, site, schemaOrg, ogImage, sitemap, devtools - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email]-rc.10 - Build Modules: - ------------------------------ ### Reproduction This is an indeterministic bug in production, I cannot find commonalities when it occurs. Apple…

### CASE-5625 · Assets with dynamic names are not resolved
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍63 💬84 · closed · labels: 🛠️ dx
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug If you have an image referencing a dynamic asset, e.g. ```vue <template> <img :src="`~/assets/${dynamic_image_name}`" alt="Discover Nuxt 3" /> </template> <script setup lang="ts"> const dynamic_image_name = 'zero-config.svg'; </script> ``` then this is rendered as ```html <img src="~/assets/zero-config.svg" alt="Discover Nuxt 3"> ``` without…

### CASE-5632 · useFetch memory leak
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍7 💬55 · closed · labels: workaround available/upstream/⚡ performance
- **Excerpt**: node v20.19.2 nuxt v3.17.4 pnpm v9.12.2 Hello. I am in complete despair, I do not know where to find advice on how this can happen... My project is quite large, but I've never done load testing before. I don't have enough information why I get such a memory leak during load testing... `artillery quick --count 20 --num 10 [link] ![Image]([link]) Can you tell me what to do in such cases? I clean the trash and compare snapshots. I see a lot of new compiled code in memory, fetch objects and functions, in testing I only knock on the main door, there is only 1 useFetch method, and this key is also…

### CASE-5634 · too many open files on build
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, bootstrap, vue
- **Signals**: 👍4 💬48 · closed · labels: 3.x/pending triage/upstream/platform:windows
- **Excerpt**: ### Environment - Operating System: `Windows 11` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `runtimeConfig`, `modules`, `routeRules`, `css`, `build`, `vite`, `i18n` - Runtime Modules: `@user/[email]-beta.7`, `@user/[email]`, `@user/[email]-27840416.dc1ed65`, `@user/[email]`, `[email]`, `bootstrap-vue-3/nuxt` - Build Modules: `-` ### Reproduction N/a ### Describe the bug When trying to build the project this error occurs ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-5636 · [zh:translated] Building Nuxt Nitro server (preset: node-server, compatibility date: 2025-02-23) is Very Slow
- **Principles**: P-A3, P-H1 · **Env**: windows, nuxt
- **Signals**: 👍8 💬47 · closed · labels: nitro/upstream
- **Excerpt**: ### Environment windows11 node 18.20.1 nuxt: 3.10.3 ### Reproduction ![Image]([link]) ### Describe the bug 打包过慢 ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-5641 · 'setupDevtoolsPlugin' is not exported by `unenv`
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍4 💬43 · closed · labels: 3.x/🐛 bug/nitro
- **Excerpt**: ### Environment NUXT 3 : 3.0.0-27497374.59593a0 NODE : 16.4.2 pnpm": "^6.32.3" ### Reproduction . ### Describe the bug when normaly build its fine. <img width="870" alt="image" src="[link]> ### Additional context my nuxt config not set preset. when im build NITRO_PRESET=cloudflare pnpm build. ### Logs Error like this: ``` ERROR Rollup error: 'setupDevtoolsPlugin' is not exported by node_modules/.pnpm/[email]/node_modules/unenv/runtime/mock/proxy.mjs, imported by node_modules/.pnpm/[email]/node_modules/pinia/dist/pinia.mjs ERROR 'setupDevtoolsPlugin' is not exported by…

### CASE-5644 · Nuxt 3 prefetch all assets from every pages and every layouts.
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍46 💬39 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.0 Nuxt project info: ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `css` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] Also we have qa version of our project here: [link] ### Describe the bug Nuxt after build prefetch all the assets like CSS, fonts, media, imgs from all the pages and all the layouts. As you can see in the repo example you have `/pageA` which implement `layout-a`, with some video in the…

### CASE-5646 · Nested page scroll behavior
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍4 💬38 · open · labels: good first issue/pages/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.18.0 - Nuxt Version: 3.16.2 - CLI Version: 3.24.0 - Nitro Version: 2.11.8 - Package Manager: [email] - Builder: - - User Config: modules, $development, devtools, app, css, runtimeConfig, future, compatibilityDate, vite, postcss, eslint, i18n, image, prismic, scripts - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link]].vue ### Describe the bug…

### CASE-5647 · Warning from NuxtLayout: Your project has layouts but the `<NuxtLayout />` component has not been used.
- **Principles**: P-A3, P-H1 · **Env**: nuxt, typescript, vue
- **Signals**: 👍43 💬38 · closed · labels: 3.x/🔨 p3-minor
- **Excerpt**: ### Environment package.json `{ "nuxt": "^3.9.0", "typescript": "^5.2.2", "vue": "3.4.0-rc.3", "vue-router": "latest" }` ### Reproduction I upgraded Nuxt from `3.8.2` to `3.9.0` ### Describe the bug I upgraded to the latest Nuxt version (3.9.0), Vue (3.4.0-rc.3), and the latest vue-router, but I'm getting a warning. ![image]([link] framework]/assets/29808554/d996f7e2-2cec-4ee5-9025-8d2de349d115) There's no error, but rather annoying. ### Additional context Only my `app.vue` file contains `<NuxtLayout>` component. Here is my `app.vue` file: ![image]([link]…

### CASE-5648 · require is not defined
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vue, nuxt
- **Signals**: 👍2 💬38 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment latest versions ### Reproduction ` <img :src="require('~/assets/image.png')">` anywhere in vue component. ### Describe the bug require is not defined when using it such as.... ` <img :src="require('~/assets/image.png')">` ### Additional context _No response_ ### Logs ```shell at $id_9513b4f8 (file://./.nuxt/dist/server/server.mjs:10135:22) at __instantiateModule__ (file://./.nuxt/dist/server/server.mjs:10596:9) at __ssrLoadModule__ (file://./.nuxt/dist/server/server.mjs:10543:25) at ssrImport (file://./.nuxt/dist/server/server.mjs:10568:13) at $id_45a9f067…

### CASE-5659 · [v4.1.3] rolldown-vite: Nuxt does not initialize correctly
- **Principles**: P-A3, P-H1 · **Env**: vite, nuxt
- **Signals**: 👍17 💬32 · closed · labels: workaround available/possible regression/bundler:rolldown-vite
- **Excerpt**: ### Environment Seems to be broken? It only returns: `Working directory: /home/projects/owailojmxz.github ` <img width="397" height="63" alt="Image" src="[link] /> ### Reproduction [link] ### Describe the bug Hello, after updating to v4.1.3 my project using rolldown-vite does not fully initialize anymore. If I open a page in the browser the normal console logs like "Suspense is a experimental feature" and the Nuxt dev tools init message never appear. Also custom plugins are never triggered. Instead I only see this warning: ```terminal The resource [link] was preloaded using link preload but…

### CASE-5660 · SSR memory leak in Nuxt 4.2.2 - request context not released (useAsyncData, Vue Router)
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: opera, linux, nuxt, vue, vite, typescript, tailwind
- **Signals**: 👍3 💬31 · closed · labels: pending triage/upstream/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: Linux (Google Cloud Run) - Node Version: v24 - nuxt/cli version: 3.32.0 - Package manager: npm - Nuxt Version: 4.2.2 - Nitro Version: 2.12.9 - Builder: vite 7.3.0 - Config: $development, $env, $production, app, compatibilityDate, components, content, css, devServer, devtools, eslint, experimental, image, modules, nitro, pages, routeRules, runtimeConfig, scripts, typescript, vite - Modules: @user/nuxt 14.1.0, @user/image 2.0.0, @user/tailwindcss 6.14.0, @user/test-utils/module 3.20.1, @user/content 3.8.0, @user/eslint 1.10.0, @user/scripts 0.13.1, @user/icon…

### CASE-5661 · Memory Leak on route navigation
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍11 💬31 · closed · labels: 🐛 bug/upstream/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug repeatedly switch tabs from e.g. `get started` to `guide` and watch the memory increase. Fresh load ![image]([link]) After 30 swaps ![image]([link]) ### Additional context For bigger pages this results in 100s of leaked MBs within only a handful of route…

### CASE-5665 · Error after upgrading to Nuxt 3.8.2: `[ERROR] No matching export in "node_modules/.pnpm/[email]/node_modules/unicorn-magic/default.js" for import "toPath"`
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, tailwind
- **Signals**: 👍1 💬30 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment ```bash Working directory: /home/stefano/Sviluppo/Personali/nuxt-storyblok-starter 12:05:18 Nuxt project info: 12:05:18 ------------------------------ - Operating System: Linux - Node Version: v18.18.2 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.0 - Package Manager: [email] - Builder: - - User Config: css, modules, extends, runtimeConfig, image, storyblok, tailwindcss, veeValidate, gtm, app, build - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build…

### CASE-5666 · [vite-node] [ERR_LOAD_URL] ..vue error in dev mode (Docker only)
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, vite, vue, nuxt
- **Signals**: 👍30 💬30 · closed · labels: 3.x/workaround available/🐛 bug/bundler:vite
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.15.0 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] Please read Readme.md in this repo before you launch it. ### Describe the bug The only thing I did - executed nuxi upgrade to upgrade from 3.4.1 to 3.4.2, then I've started to face this error when I launch project (dev mode only) ![image]([link]) I've tried to clear .nuxt folders and do clean…

### CASE-5667 · defineNuxtConfig types are not correct in WebStorm
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍4 💬30 · closed · labels: types/3.x/pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.12.1 - Nuxt Version: 3.4.0 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - WebStorm version: 2023.1 ### Reproduction Can be reproduced with any Nuxt project, even with default template. ### Describe the bug That's what webstorm offers me as an autocomplete in the config. ![image]([link]) So, adding any property other than _modules_ or _telemetry_ leads to an TS error: ![image]([link]) I guess it's not WebStorm issue, because Nuxt is the first package…

### CASE-5671 · Image assets imported relatively in components are not processed properly
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍7 💬30 · closed · labels: 3.x/🐛 bug/bundler:vite/❗ p4-important
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27386759.b449d0b` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I am trying to put the image assets in the components path (next to the .vue component files) and try to use them by a relative path like `<img src="./play.svg" />`, the assets are not loaded properly in `nuxi build`, though they work well in `nuxi dev`. ### Additional context _No response_ ### Logs _No response_

### CASE-5674 · RangeError maximum calls stack size exceeded
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬30 · closed · labels: 2.x
- **Excerpt**: I keep getting this error after the app runs for a while only on one page the others are almost the same code but works fine <img width="538" alt="screen shot 2017-07-02 at 06 48 08" src="[link]> please help <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c880">#c880</a>)</em></sub></div>

### CASE-5678 · Cannot start application, Nuxt loading node modules from incorrect directory
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬28 · closed · labels: 3.x/🐛 bug/bundler:vite
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v17.9.0` - Nuxt Version: `3.0.0-rc.10` - Nitro Version: `0.5.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction npx nuxi init nuxt-app npm i npm run dev ### Describe the bug Immediately hit with "Cannot find package '@user/server-renderer' imported from /Users/marco/node_modules/vue/server-renderer/index.mjs" I've tried installing multiple times but no luck so far. ### Additional context <img…

### CASE-5680 · App crash on fast navigation
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍1 💬27 · closed · labels: good first issue/❗ p4-important
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.4.1 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction [link] Nuxt 4 reproduction: [link] Demo with multiple pages and simulated asynchronous API requests via setTimeout. 1. Open min reproduction 2. Repeatedly quickly click the navigation buttons to switch between pages 3. The application stops responding Video how reproduction: [Record.webm]([link]) ### Describe the bug The…

### CASE-5681 · Failed CSS preloads shouldn't throw errors
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍17 💬27 · closed · labels: 🐛 bug/bundler:vite/upstream
- **Excerpt**: ### Describe the feature Currently in Nuxt 3 if a browser cannot load a CSS file that's loaded via JS it throws an error and the error page is shown. `Error Unable to preload CSS for [link] ![image]([link] framework]/assets/2112282/9e9070eb-605b-499e-8315-397fda7a4aa1) This page has a scoped style that's included in the page. ![image]([link] framework]/assets/2112282/801b268b-16c3-4736-b4d6-8d81a9456927) I don't know if this issue is just for page CSS files or what, but I can say that failure to load CSS files should not throw errors. The browser is able to render a page with missing assets…

### CASE-5682 · spaces/special characters in complete project path cause `ERR_INVALID_URL_SCHEME` vite error
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite, nuxt
- **Signals**: 👍19 💬27 · closed · labels: 3.x/workaround available/platform:windows/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction ![image]([link]) ### Describe the bug Error when I use run dev ### Additional context _No response_ ### Logs ```shell 500 [vite-node] [ERR_INVALID_URL_SCHEME] /node_modules/ufo/dist/index.mjs at /node_modules/ufo/dist/index.mjs ```

### CASE-5684 · A refresh bug about nuxt and iframe
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬27 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [nuxt-test.zip]([link] framework].js/files/1936662/nuxt-test.zip) ### Steps to reproduce I found a very strange bug If I visit the page in the iframe When you refresh again, the server will be stuck The installation code is as follows ```shell cd nuxt-test npm i npm run dev ``` However, just put the 143 line comment in /page/index.vue and restart it will not be stuck. ```js this.addClickTab('/test-4') ``` How to solve this flush stuck bug <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This…

### CASE-5690 · IDE types are broken after upgrade to 3.6.0 when using Docker (and WSL Webstorm)
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍21 💬25 · closed · labels: types/3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.1 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction [link] 1. Run `docker-compose up` 2. Open app.vue with IDE and look at the imports 3. Run `sudo yarn dev` (as Docker probably broke file system perms if you are not Mac user) 4. Look at the fixed imports (using VS Code or non-WSL Webstorm) ### Describe the bug Before Nuxt 3.5.3 update tsconfig paths were generated relatively to current directory ![image]([link]…

### CASE-5694 · Lock dir not cleaned on compromised lock & fatal error lock is already released
- **Principles**: P-A3, P-H1 · **Env**: nuxt, webpack
- **Signals**: 👍21 💬25 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link] framework].js]([link] framework].js) ### Steps to reproduce - Start a build that takes some time to finish - run: `touch -t 200012311800 ./node_modules/.cache/nuxt/build-lock-*.lock` - wait for the `Unable to update lock` warning to be displayed - this appears to only ever show between webpack builds (eg when a Client/Modern/Server finishes) ![image]([link]) - wait for the build to finish ![image]([link]) ### What is expected ? Only the warning should be displayed. Not sure why the trace is showing, probably consola feature? ### What…

### CASE-5696 · Cannot find module './moment-timezone' after upgrading to v3.15.3
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite, tailwind, vue
- **Signals**: 👍8 💬24 · closed · labels: good first issue/workaround available/🐛 bug/bundler:vite/❗ p4-important
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v23.1.0 - Nuxt Version: 3.15.3 - CLI Version: 3.20.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: future, srcDir, components, devtools, features, app, experimental, dev, ssr, dir, imports, alias, vite, runtimeConfig, css, modules, dayjs, security, googleFonts, piniaPersistedstate, nitro, elementPlus, image, lodash, tailwindcss, postcss, build, hooks, compatibilityDate - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], radix-vue/[email], [email], [email], [email], [email], [email],…

### CASE-5697 · Use of definePageMeta
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬24 · closed · labels: pending triage/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Nuxt project info: 11:06:34 ------------------------------ - Operating System: Windows_NT - Node Version: v18.17.0 - Nuxt Version: 3.15.0 - CLI Version: 3.17.2 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Using validate in definePageMeta to get a property in the route's params throws an error. ### Describe the bug Using validate in definePageMeta to get a property in the route's params throws an error. For Example: ![Image]([link]) A 500 error will…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5605 · Font Awesome Fix for Next, Stops Loading Custom SCSS
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍0 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.5.0: Mon Apr 24 20:51:50 PDT 2023; root:xnu-8796.121.2~5/RELEASE_X86_64 Binaries: Node: 16.14.0 npm: 8.10.0 Yarn: 1.22.19 pnpm: 6.11.0 Relevant packages: next: 13.4.7-canary.1 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces…

### CASE-5609 · How to load properly the "Local fonts" formats?
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍10 💬10 · closed · labels: bug/Font (next/font)/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 21:01:02 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T8112 Binaries: Node: 18.15.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.3.4 eslint-config-next: 13.3.4 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (next/font) ### Link to the code that reproduces this…

### CASE-5612 · Module not found: Can't resolve './_next/static/media/b1db3e28af9ef94a-s.woff2' After set assetPrefix to '.',
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬10 · closed · labels: bug/Font (next/font)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash ❯ pnpm next info Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 19.6.0: Sun Nov 14 19:58:51 PST 2021; root:xnu-6153.141.50~1/RELEASE_X86_64 Binaries: Node: 16.18.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.17.1 Relevant packages: next: 13.2.4 eslint-config-next: 13.2.4 react: 18.2.0 react-dom: 18.2.0 warn - Latest canary version not detected, detected: "13.2.4", newest: "13.2.5-canary.20". Please try the latest canary version…

### CASE-5693 · corrupted and missing assets in built vite app ('Failed to decode downloaded font')
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: opera, vite, nuxt
- **Signals**: 👍1 💬25 · closed · labels: 3.x/🐛 bug/bundler:vite/🔥 p5-urgent
- **Excerpt**: > Have same issue ![image]([link]) ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.2` - Nuxt Version: `3.0.0-27383920.81ee59c` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ The last release 3.0.0-27383920.81ee59c fixed the problem with images in /assets loaded from css url() now loaded correctly, but remains an issue with fonts loaded from /assets in css @user, i attach a screenshot of it: (Failed to decode downloaded font: / Failed to load response data) Fonts…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5611 · Memory leak on Next 13.3.0 on production
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍1 💬10 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Wed Mar 30 15:54:22 UTC 2022 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.3.0 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue - ### To Reproduce - Deploy an app using `next start` - Fetch data from…

### CASE-5630 · Memory leak in Vue
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, vue, nuxt
- **Signals**: 👍9 💬58 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.19.0 - Nuxt Version: 4.2.0 - CLI Version: 3.29.3 - Nitro Version: 2.12.9 - Package Manager: [[email]](mailto:[email]) - Builder: - - User Config: compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ### Reproduction [[link]]([link]) ### Describe the bug After upgrading our app from 4.1.3 to 4.2.0 it started to consume a lot of memory until it crashes. It seems to me like the issue is caused by `useFetch` / `useAsyncData` and the recent addition of signals. ### Additional context To isolate the issue I created a…

### CASE-5635 · nuxt generate memory leak
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍6 💬48 · closed · labels: pending triage/2.x
- **Excerpt**: ### Versions - nuxt: 2.14.1 - node: v14.7.0 ### Reproduction I'm using `nuxt generate` with the memory benchmarking from [link] framework].js[ref][ref]. I've reduced the generate.concurrency down to 1 and I can see in the logs that after "Generating pages with full static mode" it start's going through my pages and the heap memory just keeps on growing. After about 100 pages generated it runs out of heap memory `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`. I'm using 3GB of heap memory with `node --max_old_space_size=3072…

### CASE-5642 · Possible memory leak with nuxt-link and/or router-link
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬43 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.10.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Run the codesandbox demo Click on an item in the list on the left pane try scrolling down immediately, the browser has frozen The url does not change immediately try clicking multiple items and scroll up and down and you ll observe the LAG ![nuxt_bug.gif]([link]) ### What is expected ? The item gets selected immediately. The scroll does not lag, On selecting the child view the url changes rapidly. The app should not FREEZE. ### What is actually happening? In the build version, the app freezes depending…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5620 · dynamic runtime environment variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: ios, nuxt
- **Signals**: 👍96 💬119 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: While striving for immutable build artifacts we came across some possible improvement points. First let me explain the motivation behind "immutable build artifact". Alongside of the stages like e,g, DEV, TEST, QA, UAT, PROD the configuration changes, as an example nuxt-axios API_URL and API_BROWSER_URL. Ideally this can be injected by env vars, which pretty much fits the kubernetes way of dealing with configuration. Presently a work-around can be achieved with help of [link] which does a decent job in providing needed injection mechanism. The down-side is that no nuxt-plugin by default goes…

### CASE-5650 · anchors do not work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍18 💬38 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1) click anchored link 2) scroll back up 3) click same anchored link => nothing happens ### What is expected ? working anchors accessible from any page (same or different) ### What is actually happening? no navigation is perfomed <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c8910">#c8910</a>)</em></sub></div> ### Additionnal comment default `scrollBehavior` does not allow to reach…

### CASE-5658 · PUT, PATCH, and DELETE requests
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite, tailwind, typescript
- **Signals**: 👍16 💬33 · closed · labels: types/3.x/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.18.1` - Nuxt Version: `3.2.0` - Nitro Version: `2.2.1` - Package Manager: `npm@` - Builder: `vite` - User Config: `runtimeConfig`, `modules`, `tailwindcss`, `nitro`, `app`, `typescript`, `routeRules` - Runtime Modules: `@user/[email]`, `[email]` - Build Modules: `-` ------------------------------ ### Reproduction I have a variable defined like `const method = someBooleanCheck ? "PATCH": "PUT";` I use it as `await useFetch("/api/fileName", { method: method, body: { some: data} });` [[link]]([link])…

### CASE-5672 · Pages are fully re-rendered when just query string changes - focus on active element lost
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬30 · closed · labels: question/2.x
- **Excerpt**: ### Version ```>= 1.0-rc0``` ### Reproduction links [link] [link] [link] ### Steps to reproduce Load the page above, and start typing into the search field. The input element is set to trigger an update of the query string on keypress. ### What is expected? You should be able to continue typing after the first character, and the query string url should continue updating with what you type. ### What is actually happening? After every keypress, the form field loses focus and you have to click inside again to be able to type the next character. Additionally, if the typing is done on the about…

### CASE-5677 · Unable to serve static files after build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬29 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `build`, `runtimeConfig` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction - ### Describe the bug Files which are added to .output/public after the build process are not accessible (already discussed here [ref]). ### Additional context _No response_ ### Logs _No response_

### CASE-5688 · env property fails in docker environment
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬26 · closed · labels: 2.x
- **Excerpt**: Nuxt can't seem to pull environment variables from within a docker environment. When following [this]([link]) example, the baseUrl defaults to the empty string while running in a node docker environment (node:latest docker image), whereas it populated with said env variable if running on a non-containerized host. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c538">#c538</a>)</em></sub></div>

### CASE-5695 · Middleware Ajax Request doesn't send up cookies?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬25 · closed · labels: 2.x
- **Excerpt**: Hello everyone! I'm absolutely loving using nuxtjs for my vue app. It's been awesome so far. Thanks for the hard work! I seem to have run into a bug or maybe I'm misunderstanding how the middlewares should work. The documentation indicates that I can return a promise in a middleware. Here's what my middleware looks like. I'm using secure cookies in my app which are not accessible via JavaScript, so, the only way to check if a user is authenticated is by hitting the server. This midleware will check the authentication using my vuex method `getSignedInUser`. ```javascript // Middleware export…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5623 · Mounted twice when layout change
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍11 💬103 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.6.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Simply click on button named "Mounted triggered twice, see console" and see in console. (reproducable only with css:false for transition) ### What is expected ? mounted once ### What is actually happening? mounted twice ### Additional comments? The bug is still present on last release 2.7.1 It can be fixed quickly ? it's really a brake on client-side performance. (Related : [link] framework].js[ref]) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a…

### CASE-5629 · onMounted hook running before DOM is available
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍42 💬66 · closed · labels: 3.x/upstream
- **Excerpt**: # Workarounds until this is fixed in [link]) you can use: * [disable transitions per page]([link] framework][ref][ref]) * or [disable transitions globally]([link] framework][ref][ref]) * or if you **need** transitions then use [this composable ]([link] framework][ref][ref]) * (not recommended) use a setTimeout <hr> ### Describe the bug The screenshot below says it all. On first load (refresh) everything is fine and I'm able to run `querySelector` and access the DOM just fine. However if I navigate to a different route then come back I get `null`. ``` vue <template> <div class="first"> Hello…

### CASE-5631 · scrollBehavior Glitches
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, nuxt
- **Signals**: 👍6 💬58 · closed · labels: 2.x
- **Excerpt**: Hi. We have various issues reported for `scrollBehavior` not behaving as desired. Maybe use-cases differ but almost all of them are related to the same known issue and we are aware and plan to help fixing it. Please don't make/reopen duplicated issues as there is enough info about the problem.It just makes the process harder. As of always contributions and PRs are appreciated to both `vue-router` and `nuxt` for possible fixes. ### vue-router - Handle scrollBehaviour with transitions (vuejs/vue-router[ref]) - Another detail of scrollBehavior wrapped in transition(vuejs/vue-router[ref]) -…

### CASE-5643 · Failed to resolve import "#app-manifest"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, macos, nuxt
- **Signals**: 👍64 💬41 · closed · labels: workaround available/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment * Operating System: macOS Sonoma 14.7.1 * Node Version: v20.9.0 * Nuxt Version: 3.15.0 * CLI Version: 3.17.2 * Nitro Version: 2.10.4 * Package Manager: [email] * Builder: - * User Config: default * Runtime Modules: [email], @user/[email], @user/[email], @user/[email] * Build Modules: - ### Reproduction 1. Create empty folder 2. Init simple nuxt-app with `npx nuxi@user init .` 3. `npm install` 4. `npm run dev` ### Describe the bug ``` [7:51:14 PM] ERROR Pre-transform error: Failed to resolve import "#app-manifest" from…

### CASE-5653 · Page dom refreshed Before transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ios
- **Signals**: 👍0 💬36 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.3.4]([link] framework].js/releases/tag/v2.3.4) ### Reproduction link [[link]]([link]) ### Steps to reproduce I am not sure if it is a bug or just my mistake. The reproduction simulate chaining a state with fetch, like in a app with axios. 1. Run the example 2. Click `Start` <- transition is ok 3. Click `Next 1` <- starts blinking etc You will see a color blink. Because the store/page is refreshed before the transition starts. So first the color is changing to new value, then the transition is starting. Check the console output. ### What is expected ? afterLeave... Before…

### CASE-5657 · Babel transform plugin not working within NuxtJS
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt
- **Signals**: 👍0 💬34 · closed · labels: 📚 documentation/stale/2.x
- **Excerpt**: Hello, I'm trying to use the newly approved to Stage-1 pipeline operator in a project. [link] [link] I have the following ```javascript babel: { "presets": [ "es2015", "stage-2" ], "plugins": [ "espower", "transform-runtime", "transform-pipeline" ] } ``` in nuxt.config.js, .babelrc (without the "babel" key), and package.json. Yet I'm still getting "Syntax Error: Unexpected Token" Any advise on how to get this working with Nuxt would be appreciated. I've tried restarting the server. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a…

### CASE-5663 · Pre-transform error: Failed to resolve import "#build/route-rules.mjs"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, macos, nuxt
- **Signals**: 👍11 💬30 · closed · labels: pending triage/nitro/needs reproduction/possible regression
- **Excerpt**: ### Environment | | | | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `macOS 25.1.0` | | **CPU** | `Apple M4 (10 cores)` | | **Node.js version** | `v22.20.0` | | **nuxt/cli version** | `3.32.0` | | **Package manager** | `[email]` | | **Nuxt version** | `3.21.0` | | **Nitro version** | `2.12.9` | | **Builder** | `[email]` | | **Config** | `app`, `compatibilityDate`, `css`,…

### CASE-5673 · Generate static site with local CMS not working after deploy
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍2 💬30 · closed · labels: 2.x
- **Excerpt**: So I'm trying to use Nuxt with a local install of Craft CMS to generate a static site (and eventually a headless CMS). It works just fine locally... because it has access to the local API endpoints on my machine. `nuxt generate` works too, as it can reach the API, however, when I deploy the static output from the `/dist` folder, my links between pages fail because it's still trying to hit my local API. I though that the `nuxt generate` would inject the necessary data for that page, and I could still use the nice "SPA" style page transitions, but with all static content (maybe I'm wrong…

### CASE-5675 · Nuxt 3, sourcemap points to missing file warning, when using external script files in vue template.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt, vue, vite
- **Signals**: 👍15 💬29 · closed · labels: 🛠️ dx/bundler:vite/🍰 p2-nice-to-have/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.13.2` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `privateRuntimeConfig`, `publicRuntimeConfig`, `pageTransition`, `css`, `app`, `algolia`, `components`, `router`, `modules`, `build`, `vite`, `hooks`, `nitro` - Runtime Modules: `@user/[email]`, `~/modules/sitemap`, `@user/[email]`, `~/modules/robots`, `~/modules/staticWebApp` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When using external script files it gives an warning pr. import in my solution:…

### CASE-5679 · [SSR] Error transforming app.vue: Cannot read properties of undefined (reading 'uid')
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: linux, vue, nuxt, vite
- **Signals**: 👍6 💬28 · closed · labels: 3.x/🐛 bug/bundler:vite/upstream
- **Excerpt**: I've been getting strange warnings tonight on fresh Nuxt3 projects, both on OSX and Linux. The warnings look like the following: ``` WARN [SSR] Error transforming .../testing/app.vue: Cannot read properties of undefined (reading 'uid') at Object.statSync (node_modules/graceful-fs/polyfills.js:313:17) at isDirectory (node_modules/resolve/lib/sync.js:22:23) at loadNodeModulesSync (node_modules/resolve/lib/sync.js:191:17) at Function.resolveSync [as sync] (node_modules/resolve/lib/sync.js:98:17) at resolveFrom$3 (node_modules/vite/dist/node/chunks/dep-76613303.js:3911:29) at resolvePackageData…

### CASE-5687 · Velocity.js doesn't work as ssr: false plugin, how to use it?
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬26 · closed · labels: 2.x
- **Excerpt**: I have a plugin ```js import Velocity from 'velocity-animate' export { Velocity } ``` Using it with `ssr: false` Then import it in component as `import Velocity from '~/plugins/velocity'` I got an error in console ``` [vue-router] Failed to resolve async component default: ReferenceError: window is not defined [vue-router] uncaught error during route navigation: ReferenceError: window is not defined ``` And in browser ``` Cannot read property 'options' of undefined ``` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a>…

### CASE-5699 · Slow dev startup on Windows
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍14 💬24 · closed · labels: pending triage/platform:windows/possible regression
- **Excerpt**: ### Environment Nuxt project info: 12:44:36 ------------------------------ - Operating System: Windows_NT - Node Version: v18.18.0 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: modules, vue, experimental, pinia, piniaPersistedstate, css, colorMode, nitro, app, devtools - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/auto-animate/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-5655 · IISNode hosting
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: nuxt
- **Signals**: 👍0 💬35 · closed · labels: 2.x
- **Excerpt**: Hi, I maybe doing something wrong here, but the nuxt route does not seem to work in iisnode. using the nuxt/express example i configured it for iisnode, but it is returning a 404 when i browse to the / route [Stackoverflow Question]([link]) Thanks Shay <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c411">#c411</a>)</em></sub></div>

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-5656 · scrollToTop not working for `_slug` style routes
- **Principles**: P-D4, P-F1, P-F5 · **Env**: unspecified
- **Signals**: 👍2 💬34 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.5]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce If you run `yarn dev` and navigate to the `blog` route, then click a blog post, then scroll to the bottom, and click one of the next/previous links, you will notice it will drop you at the same scroll position as the post you navigated from, rather than resetting the scroll position. You can also see this reproduced, without needing to pull down code if you go to [link] and click the next/previous links at the bottom. ### What is expected ? `scrollToTop` should be respected and the scroll position…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5669 · shows type error on nuxt.config.ts for app meta, plugins, css, build, vite
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍8 💬30 · closed · labels: types/3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Operating System: Windows_NT Node Version: v18.0.0 Nuxt Version: 3.3.3 Nitro Version: 2.3.2 Package Manager: [email] Builder: vite ### Reproduction [link] ### Describe the bug with default nuxt 3.3.3 setup or upgraded version shows type error in nuxt,config.ts. - *** This type error shows on minimal setup: Argument of type '{ app: { head: { charset: string; viewport: string; }; }; }' is not assignable to parameter of type 'NuxtConfig'. Object literal may only specify known properties, and 'app' does not exist in type 'NuxtConfig'.ts(2345) - *** Extending config also shows type…

