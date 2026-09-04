# Case Chunk 049 — Round 49

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5801 · Auto-import of constants broken if they're used as case labels in switch statement in Nuxt 4.5.1
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/150, safari/537, linux, windows, nuxt, webkit
- **Signals**: 👍2 💬15 · closed · labels: workaround available/upstream/possible regression
- **Excerpt**: ### Environment Nuxt project info (from minimal reproduction Stackblitz repo): | | | | -------------------- | --------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v22.22.3` | | **nuxt/cli version** | `3.37.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.5.1` | | **Nitro version** |…

### CASE-5811 · BroadcastChannel.postMessage in useCookie has issue with ProxyObject
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, nuxt, vue
- **Signals**: 👍2 💬15 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Using Nuxt 3 with a forked [composables/cookie.ts from main]([link]). ``` Google Chrome | 113.0.5672.126 (Official Build) (64-bit) -- | -- OS | Linux JavaScript | V8 11.3.244.11 ``` ### Reproduction [link] ### Describe the bug Caused by [link] framework][ref] ``` cookie.ts?t=1687256275358:29 Uncaught (in promise) DOMException: Failed to execute 'postMessage' on 'BroadcastChannel': #<Object> could not be cloned. at callback ([link]) at watch.deep ([link]) at callWithErrorHandling ([link]) ``` If I wrap [`cookie.value`]([link]) in Vue's `toRaw`, the error goes away. I can't find…

### CASE-5813 · Nitro adapter error when deploying app using Netlify-edge preset
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, nuxt, vite
- **Signals**: 👍1 💬15 · closed · labels: 3.x/pending triage/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: nitro, runtimeConfig - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When I deploy to Netlify using the `netlify-edge` preset, I get a 404 error when calling the `server/api/chat.post.js` endpoint. It seems that although the endpoint is reachable, there was something wrong with the Nitro server (404 is very vague error it…

### CASE-5825 · asyncData/fetch + v-html bind performance issue on firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, nuxt
- **Signals**: 👍0 💬15 · closed · labels: stale/pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: v2.13.3 <!-- ex: v2.13.0 --> - node: v14.5.0 <!-- ex: v12.14.0 --> ### Desc - asyncData or fetch…

### CASE-5826 · Don't see the loading / progress bar at the top
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬15 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.9.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce With an installation of nuxt / nuxt-edge, I don't see the loading / progress bar at the top. According to this doc, the loading indicator should be enabled by default, but it isn't. [link] I also tried this in nuxt.config.js: ``` loading: { color: "#f00" }, ``` ### What is expected ? Loading / progress bar indicator should show up ### What is actually happening? It does not. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community…

### CASE-5827 · Assets does not compiled at nuxt-edge:latest
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, nuxt
- **Signals**: 👍0 💬15 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [nuxt-edge]([link]) ### Reproduction link [.](.) ### Steps to reproduce I'm using nuxt-edge version "latest" since I'm re-installed packages (node_modules), this bug showed up. so I'm guessing latest build has this bug ### What is expected ? `~assets/icon.svg` (in style section) should be turn into `data:image/svg+xml;base64 ...)` ### What is actually happening? assets doesn't compiled. for example) background-image: url(/assets/icon.svg) ### Additional comments? Assets compiled with `2.0.0-25468832.6578bd7` not compiled with latest build which `2.0.0-25569931.85a8af5` I'm using…

### CASE-5828 · [edge] <style lang="postcss"> cannot be parsed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vue, nuxt
- **Signals**: 👍0 💬15 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [2.0.0-25396844.0aea0d5]([link] framework].js/releases/tag/2.0.0-25396844.0aea0d5) ### Reproduction link [[link]]([link]) ### Steps to reproduce ``` npm install -g vue-cli vue init nuxt-community/starter-template nuxt-test yarn add nuxt@user:nuxt-edge ``` Add `lang="postcss"` to `./pages/index.vue` `yarn build` ### What is expected ? No error is thrown ### What is actually happening? ``` ERROR in ./pages/index.vue?vue&type=style&index=0&lang=postcss…

### CASE-5836 · v4.3.0: auto key not working (`[useState] key must be a string: undefined`)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/144, safari/537, linux, windows, webkit, nuxt
- **Signals**: 👍3 💬14 · closed · labels: 📚 documentation/workaround available/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment | | | | -------------------- | --------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36` | | **CPU** | `Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz (8 cores)` | | **Node.js version** | `v20.19.1` | | **nuxt/cli version** | `3.32.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.3.0` | | **Nitro version** | `2.13.1` | | **Builder** | `[email]` | | **Config** |…

### CASE-5857 · proxy client headers to useFetch in sider-side
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, nuxt, webpack
- **Signals**: 👍0 💬14 · closed · labels: ✨ enhancement/3.x
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27236898.4a34c2a 18:16:03 RootDir: /home/centos/nuxt3-app/nuxt 18:16:04 Nuxt project info: 18:16:04 ------------------------------ - Operating System: `Linux` - Node Version: `v14.17.6` - Nuxt Version: `3-3.0.0-27236898.4a34c2a` - Package Manager: `npm` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug When I get to the page, useFetch makes an internal call to the /server/api/health.js file However, no client header is present, this is a big problem Chrome request headers :…

### CASE-5880 · 504 (Outdated Optimize Dep) (vue.js, line 0) on Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, safari 17, vue, nuxt
- **Signals**: 👍3 💬13 · closed · labels: 3.x/workaround available/pending triage/bundler:vite/upstream
- **Excerpt**: ### Environment npx nuxi info - Operating System: `Darwin` - Node Version: `v20.10.0` - Nuxt Version: `3.8.2` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` ``` "devDependencies": { "@user/devtools": "latest", "nuxt": "^3.8.2", "vue": "^3.3.10", "vue-router": "^4.2.5" } ``` The browser is Safari 17.1.2 ### Reproduction The issue is present with only the default scaffolding. The following are exhaustive steps to reproduce the issue. Note that this is most likely highly dependent…

### CASE-5888 · @user/kit playground crashes my browser when I open my console - firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, nuxt, vite
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v19.4.0` - Nuxt Version: `3.3.2` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Cannot -- make a @user/kit module using the command ### Describe the bug Build the module, and dev the module, open the playground, then open the console on firefox. It completely freezes the page. You are not able to close the console either. ### Additional context I tested with and…

### CASE-5898 · [edge] vue-style-loader didn't discriminate between server and client
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vue, nuxt
- **Signals**: 👍1 💬13 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [2.0.0-25586998.83d9dc4]([link]) ### Reproduction link [[link]]([link]) ### Reproduction step 1. Flatten the project and start Nuxt 2. Browse the index page after listen success ### What is expected ? "It just works" ### What is actually happening? It will show up this generic error regardlessly on any files that use styling: ``` √ success Nuxt files generated i info Warming up worker pools √ success Worker pools ready × error ReferenceError: document is not defined at addStyle (node_modules/vue-style-loader/lib/addStylesClient.js:120:0) at addStylesToDom…

### CASE-5899 · [edge] Extract CSS into one single file does not work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍2 💬13 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version 2.0.0-25390984.952dfe0 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Clone the repo 2. Install packages with `npm i` 3. Run `npm run build` Related test: [link] framework].js/blob/dev/test/fixtures/extract-css/extract-css.test.js ### What is expected ? CSS will be extracted and merged into one single file ### What is actually happening? CSS is extracted but not merged into a single file. <!--cmty--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link]…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5802 · HMR broken with custom domain since Vite v5.4.12 / v6
- **Principles**: P-F4 · **Env**: opera, vite, nuxt
- **Signals**: 👍5 💬15 · closed · labels: ✨ enhancement/📚 documentation/good first issue/bundler:vite
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.18.0 - Nuxt Version: 3.14.1592 - CLI Version: 3.20.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: ssr, extends, modules, devtools, spaLoadingTemplate, runtimeConfig, colorMode, ui, css, app, routeRules, $production, $development, sourcemap, sentry, compatibilityDate - Runtime Modules: @user/nuxt/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction 1. Use a custom domain for development (e.g., `myproject.local`) 2. Update Vite to…

### CASE-5807 · When I use the element-plus framework, the script information returned by the request is displayed on the page
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬15 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Working directory: ~/project/SASS Nuxt project info: (copied to clipboard) ------------------------------ - Operating System: Darwin - Node Version: v18.18.2 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, devServer, ssr, vite - Runtime Modules: - - Build Modules: - ------------------------------ 👉 Report an issue: [link] framework]/issues/new 👉 Suggest an improvement: [link] framework]/discussions/new 👉 Read documentation: [link] ### Reproduction I didn't have this problem previewing in…

### CASE-5808 · useCookie does not set cookie
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍1 💬15 · closed · labels: 📚 documentation/good first issue/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction This reproduction requires an external navigation, at least as far as I can tell. So the first environment is hosted here: [link] The second is hosted here: [link] ### Describe the bug Clicking the first link will cause nuxt to use `useCookie`, set a value to the cookie and then navigate…

### CASE-5816 · data fetched again on client when inside an async component
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍9 💬15 · closed · labels: workaround available/🐛 bug/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v18.12.1` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug In my nuxt3 application (CMS) i notice that sometime query are run twice on SSR I make a simple repro with the structure of the application When query are run in deep level module loaded dynamicaly useAsyncData of the module run twice Two query are…

### CASE-5819 · RC6/RC10 cannot build project after some updates
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬15 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Before update: - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.6` - Nitro Version: `0.4.24` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `css`, `buildModules`, `runtimeConfig`, `build`, `components`, `meta`, `vite` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]` After update: - Operating System: `Darwin` - Node Version: `v16.15.1` - Nuxt Version: `3.0.0-rc.10` - Nitro Version: `0.5.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `css`, `buildModules`, `runtimeConfig`,…

### CASE-5820 · externalVue : does not send vue/server-renderer/index.js to .output
- **Principles**: P-F4 · **Env**: opera, windows, vue, nuxt, vite
- **Signals**: 👍2 💬15 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-rc.9` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] [link] ### Describe the bug Hi 👋 this is a VERY strange issue that happens when having externalVue set to `true`. Vue use `require()` to require `vue/server-renderer` but the index.js file is missing in `.output\server\node_modules\vue\server-renderer` , the mjs version is present .…

### CASE-5829 · Accessing the current domain name client side and in SSR, consistently?
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬15 · closed · labels: 2.x
- **Excerpt**: Hi there. I've just started a new app that runs with a wildcard subdomain. So, I'm going to be rendering `foo.com`, `bar.foo.com`, and many many other subdomains pointing to the _same_ nuxt.js server instance. I'm looking for a way for my most root-y of `pages`, `index.vue`, to be able to distinguish if it's running on the main domain `foo.com`, or if it's on one of our zillions of subdomains. I understand that `created` is the best lifecycle event to grab this info, but obviously `window.location` only exists on the client side. I cannot, for the life of me, figure out how I might…

### CASE-5844 · `refreshNuxtData` doesn't re-fetch data when `useAsyncData`/`useFetch` (with `getCachedData`) are not in scope
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍11 💬14 · closed · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v21.5.0 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, modules, imports, shadcn - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], [email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug 1. Open the reproduction. 2. Click "add new user", the new user is added to the 'SidebarUsers' component (refreshNuxtData triggers the re-fetch…

### CASE-5847 · Nuxt 3 caching with ISR/SWR does not work as expected on Netlify
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍10 💬14 · closed · labels: 3.x/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.0 - Nuxt Version: 3.9.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, routeRules - Runtime Modules: - - Build Modules: - ### Reproduction The issues described can be viewed on this deployment: [link] Currently it is deployed without Nitro preset. ### Describe the bug I have a minimal Nuxt 3 app with different pages set up to use different rendering modes: [link] nuxt.config is as following: ```javascript export default defineNuxtConfig({ ssr: true, routeRules: {…

### CASE-5848 · Adding node polyfills to nuxt
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍2 💬14 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.10.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, vite - Runtime Modules: - - Build Modules: - ### Reproduction Repro: 1. [vite-vue]([link]) 2. [vite-nuxt]([link]) (SPA) Both cases use vite 5.x (nuxt 3.9.0) ### Describe the bug Hi! I am trying to integrate the following authentication library [@user/modal]([link]) into my nuxt app. Despite being distributed as a "browser" library... it requires adding a few [polyfills]([link]) in order to…

### CASE-5849 · useFetch dosn't work on initial page load
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬14 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ```bash - Operating System: Linux - Node Version: v16.15.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: app, typescript, ssr, css, build, vue, vite, modules, snipcart, plugins, components, runtimeConfig, sourcemap - Runtime Modules: @user/[email] - Build Modules: - ``` ### Reproduction I don't have a reproduction link, but below is a simple code snippet of what I do inside `pages/index.vue`. I also tried `cache: 'no-cache'` or setting a key `key: String(Math.random),`, none of this worked for me. But I remember, that…

### CASE-5852 · Build/Preview broken after switching to 3.3.2
- **Principles**: P-F4 · **Env**: opera, vue, nuxt, vite
- **Signals**: 👍1 💬14 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: Seems to be a problem with latest unstorage build: 1.4.1 Latest version 3.3.1 (using unstorage 1.4.0) worked fine. ``` Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/tom/projects/sfxcode/vue/nuxt3-primevue-starter/.output/server/node_modules/unstorage/drivers/overlay.mjs' imported from /Users/tom/projects/sfxcode/vue/nuxt3-primevue-starter/.output/server/index.mjs ``` - Operating System: `Darwin` - Node Version: `v18.15.0` - Nuxt Version: `3.3.2` - Nitro Version: `2.3.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `runtimeConfig`, `modules`, `content`,…

### CASE-5854 · v3.0.0-rc.12 - Google Firebase functions no longer generated by Nitro
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍4 💬14 · closed · labels: 3.x/🐛 bug/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `ssr`, `nitro`, `app` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]-27719579.87dcdf2` - Build Modules: `-` ------------------------------ ### Reproduction . ### Describe the bug I am hosting my Nuxt project on Google Firebase. Since upgrading to v3.0.0-rc.12, `npx nuxi build` no longer generates functions properly in…

### CASE-5859 · Hydration error with scoped slots and component discovery (async components)
- **Principles**: P-F4, P-G4, P-E3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬14 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Versions - nuxt: ^2.14.12 - node: v14.15.4 ### Reproduction Hello everyone and thank you in advance. I have a strange issue that I don't really understand what's the problem and how to deal with it. I have installed a fresh nuxt ssr project. I'm getting the following warning `[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.` I have three simple components: `Form`,…

### CASE-5860 · 当开发模式为production时且mode:universal时，刷新页面会The client-side rendered virtual DOM tree is not matching server-rendered content.
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬14 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: <!-- ex: v2.13.0 --> - node: <!-- ex: v12.14.0 --> ### Reproduction <!-- Link to a minimal test case…

### CASE-5861 · Optimizing CSS delivery for better page speed performance
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍16 💬14 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### What problem does this feature solve? Currently, there are 2 ways to use css in Nuxtjs while in production `universal` mode. 1. Delivering CSS with Components 2. Using `extractCSS` which generates external CSS file for each component Current methods have below drawbacks. **1st method:** This adds all the CSS in every SSR request and adds KBs (~100KB). Usually our 40-60% servers are being used due to bots which will be executed by SSR. This CSS includes the CSS we defined in `nuxt.config.js` in `css` block and the component `style` element. **2nd method** This creates tiny ~1-5kb CSS files…

### CASE-5862 · Cannot read property toLowerCase of undefined
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬14 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Sorry for no repo as I'm not sure what is causing this but I'l do my best to explain what I found out This issue is caused by the ssr trying to render the page and finding a comment block ![brave_2uQ9VVuJnD.png]([link]) ![brave_n8Yrq1ABy1.png]([link]) This comment appears under the __nuxt div: ![brave_EerK58t9i3.png]([link]) I have no idea why is this comment showing up there. This is a random issue, as removing node modules and package.lock then reinstalling (might) fix this, or it might not, it might…

### CASE-5865 · How to use vanilla JS library with Nuxt?
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬14 · closed · labels: 2.x
- **Excerpt**: Hello. Find very hard to make some vanilla js libs work with Nuxt. Now struggling with this [link] Can somebody help me? This is not working ``` if (process.browser) { require('tippy.js') } export default { mounted () { tippy('.btn') } } ``` A couple other options doesn't work too. How to make this awesome library make work with Nuxt? It's working with non SSR Vue app like a charm. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1264">#c1264</a>)</em></sub></div>

### CASE-5867 · Memory leak in Nuxt 3 SSR with Pinia stores, Axios interceptors, watch and computed
- **Principles**: P-F4, P-F5, P-H3 · **Env**: ios, nuxt, vue, vite
- **Signals**: 👍1 💬13 · closed · labels: pending triage/needs reproduction
- **Excerpt**: <h1>🐛 Memory leak in Nuxt 3 SSR with Pinia stores and Axios interceptors under sustained load</h1> <h2>Environment</h2> <table> <thead> <tr> <th>Package</th> <th>Version</th> </tr> </thead> <tbody> <tr> <td><strong>Nuxt</strong></td> <td>3.2.3</td> </tr> <tr> <td><strong>Vue</strong></td> <td>3.2.37</td> </tr> <tr> <td><strong>Pinia</strong></td> <td>2.0.23 (with @user/nuxt 0.4.7)</td> </tr> <tr> <td><strong>Axios</strong></td> <td>0.27.2</td> </tr> <tr> <td><strong>Node</strong></td> <td>18.x</td> </tr> <tr> <td><strong>Vite</strong></td> <td>3.0.4</td> </tr> <tr>…

### CASE-5871 · After Nuxt version update, virtual file system URL encoding causes 404 errors when accessing app through Apache proxy
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬13 · closed · labels: pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v20.11.1` - Nuxt Version: `3.15.4` - CLI Version: `3.21.1` - Nitro Version: `2.10.4` - Package Manager: `[email]` - Builder: `-` - User Config: `debug`, `dev`, `app`, `devtools`, `ssr`, `security`, `runtimeConfig`, `build`, `modules`, `imports`, `plugins`, `css`, `alias`, `routeRules`, `server`, `devServer`, `vite`, `compatibilityDate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `[email]` - Build Modules: `-` - Apache Version: `2.4.51` ### Reproduction [link] ### Describe the bug After…

### CASE-5872 · lazysizes.client.js running on server
- **Principles**: P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬13 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Darwin - Node Version: v18.18.2 - Nuxt Version: 3.13.0 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: unknown - Builder: - - User Config: ssr, nitro, compatibilityDate, devtools, app, modules, runtimeConfig, plugins, hooks, sitemap - Runtime Modules: [email], @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction ``` import lazySizes from 'lazysizes' import 'lazysizes/plugins/parent-fit/ls.parent-fit' export default defineNuxtPlugin(() => { lazySizes.init() }) ```…

### CASE-5873 · RollupError: [plugin impound] This module cannot be imported in server runtime.
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript
- **Signals**: 👍2 💬13 · closed · labels: pending triage/nitro/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.15.1` - Nuxt Version: `3.13.1` - CLI Version: `3.8.4` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `pinia`, `experimental`, `build`, `components`, `app`, `css`, `imports`, `modules`, `veeValidate`, `security`, `routeRules`, `nitro`, `sourcemap`, `vite`, `ssr`, `runtimeConfig`, `devtools`, `typescript`, `compatibilityDate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]-rc.3`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction…

### CASE-5874 · Error 500 when building Nuxt 3.12.4 after upgrading from 2.17.3
- **Principles**: P-F4 · **Env**: opera, ios, nuxt, webpack
- **Signals**: 👍0 💬13 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment Previous version: - Operating System: Darwin - Node Version: v21.7.1 - Nuxt Version: 2.17.3 - CLI Version: 3.12.0 - Nitro Version: - - Package Manager: [email] - Builder: webpack - User Config: target, ssr, generate, head, css, plugins, components, buildModules, modules, sitemap, robots, sentry, axios, build, router, publicRuntimeConfig, graphql, hooks, storybook, ignore - Runtime Modules: @user/[email], [email], [email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: @user/[email], @user/[email], @user/[email], @user/[email], @/modules/generator Current…

### CASE-5881 · ssr模式下，useFetch在页面刷新后获取的数据为null
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, vue
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment 1. Operating System:window10 2. Node Version: v18.17.1 3. Nuxt Version: 3.6.5 5. Package Manager: [email] 6. Builder: vite 7. User Config: app, components, runtimeConfig, modules, pinia, vite, css, alias, experimental 8. Runtime Modules: @user/[email] 9. Build Modules: - ### Reproduction 在setup中使用useFetch获取数据，项目刚启动完成后能正常拿到数据，但是在浏览器地址手动输入地址刷新页面后useFetch此时获取到的数据为null ### Describe the bug 在setup中使用useFetch获取数据，项目刚启动完成后能正常拿到数据，但是在浏览器地址手动输入地址刷新页面后useFetch此时获取到的数据为null ~~~vue <template> <!-- 路由出口 --> <NuxtPage></NuxtPage> </template> <script setup lang="ts"> const { data } = await…

### CASE-5883 · 3.7.0 – Fresh install: "[request error] [unhandled] [500] entry is not a function"
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.17.0` - Nuxt Version: `3.6.5` - CLI Version: `3.7.2` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` However, my package.json says Nuxt Version: `3.7.0` ### Reproduction npx nuxi@user init my-app cd my-app npm run dev ### Describe the bug From a new install, Nuxt is unable to launch. The error screen shows: 500 entry is not a function ### Additional context _No response_ ### Logs ```shell-script at __vite_ssr_exports__.default…

### CASE-5884 · Class extends value undefined is not a constructor or null
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬13 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v16.20.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr, spaLoadingTemplate, app, css, modules, gtag, googleFonts - Runtime Modules: @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ### Reproduction 1. I Install the google-auth-library in nuxtjs 3 with vite 2. then i make the separate helper call spreadsheet.ts for calling the method when i need it 3. this my inside spreadsheet.ts ![code]([link]…

### CASE-5890 · Hydration issue with Netlify deployments
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍0 💬13 · closed · labels: 3.x/workaround available/🐛 bug/nitro/bundler:vite
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.5 15:54:14 RootDir: /home/sfrede/Sites/SabineHugo/Website 15:54:15 Nuxt project info: 15:54:15 ------------------------------ - Operating System: `Linux` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.5` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `modules`, `typescript`, `app`, `content` - Runtime Modules: `@user/[email]-27630041.9582f8c`, `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction A regular deploy on Netlify. ### Describe the bug I realized at some point that my deploy previews on…

### CASE-5893 · Nuxt not creating routes and not detecting changes in pages directory?
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27338323.1e98259` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction 1. Followed **README.md** installation guide with npm. 2. Created **pages** folder 3. Created **index.vue** in /pages 4. Changed **index.vue** to **home.vue** ### Describe the bug nuxt is not creating routes i think? ### Additional context const __vite_ssr_import_6__ = await __vite_ssr_import__("/@user/__x00__virtual:C:/Users/BUGA/Documents/VSCODE/Web…

### CASE-5894 · pass on cookies from server-side API calls on SSR response
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍3 💬13 · closed · labels: ✨ enhancement/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27333874.279bfdc` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Currently no reproduction link is up to date with the latest version of Nuxt3 so I can't help you ### Describe the bug Hello Nuxt 3 ! I have a problem, I try to make a session manager with redis (like express-session) but here I will try to make it in h3/nitro version, I don't know if it is…

### CASE-5895 · Hydration Error at use teleport
- **Principles**: P-F4, P-F5, P-H3 · **Env**: opera, nuxt, vue
- **Signals**: 👍4 💬13 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment * node: LTS * nuxt: latest ### Reproduction [link] ### Describe the bug Hello 😀 Hydration error occurs when using teleport in nuxt3. I inserted a teleport target in app.vue and it works normally until code movement. However, since hydration mismatch occurs, the function of the code to be teleported cannot operate normally. ### Additional context _No response_ ### Logs ```shell [Vue warn]: Hydration children mismatch in <div>: server rendered element contains fewer child nodes than client vdom. at <Example> at <Index onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined >…

### CASE-5897 · router.base value with Extended unicode (åäö) fails
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬13 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.1]([link]) ### Steps to reproduce `yarn create nuxt-app test_nuxt && cd test_nuxt` (I selected express and not much else) Drop ```router: { base: "/%C3%B6l/", }``` intro you nuxt config. start a dev server. go to [link] ### What is expected ? I expect the site to load properly from the /öl url. ### What is actually happening? you may see the page blink and disappear with a DOM tree mismatch hydration error in the console. mode: 'spa' doesn't work at all (it can't find the page). base addresses without weird characters work fine. my live nuxt site running at [link] exhibits…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5803 · Global types as generic type parameter in `defineProps` causing an exception
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt
- **Signals**: 👍3 💬15 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.9.0 - Nuxt Version: 3.13.2 - CLI Version: 3.15.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ### Reproduction You can add any global accessible type or interface into a `defineProps` generic type parameter like `defineProps<GlobalType>` and it will drop the exception: `ERROR Pre-transform error: [@user/compiler-sfc] Unresolvable type reference or unsupported built-in utility type`. I've created a minimal setup in a CodeSandbox where the problem is…

### CASE-5810 · Javascript Hooks Page Transition on Nuxt 3 does not work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬15 · closed · labels: 📚 documentation/good first issue/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.12.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [StackBlitz Link]([link]) and [Github Link]([link]) ### Describe the bug Hello, I got an error with the nuxt page transition and the javascript Hooks, I have the exact same code that in the doc here : [link] I don't really know what I'm doing wrong, if anyone does I'd love to know. I've tried…

### CASE-5812 · useRoute providing incorrect data when used in a layout
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt, vite, typescript, vue
- **Signals**: 👍5 💬15 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.16.0` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `modules`, `sanity`, `googleFonts`, `sitemap`, `nitro` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]-1`, `[email]`, `[email]`, `@user/[email]`, `[email]`, `@user/vue-transitions/[email]`, `[email]` - Build Modules: `-` ### Reproduction Sorry, but I couldn't get folder based page routing to work on StackBlitz and CodeSandbox is not working. (please provide some guidance if…

### CASE-5824 · Transitions cannot be applied to child <NuxtPage> routes by any method
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍9 💬15 · open · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `app` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Link to the StackBlitz minimal project: [[link]]([link]) ### Describe the bug There is no way to apply transitions to nested <NuxtPage> routes. When transitioning between other root level "sibling" pages, page transitions are applied. When navigating to any nested route with another…

### CASE-5832 · About how to use keep-alive in Nuxt.js
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍5 💬15 · closed · labels: 2.x
- **Excerpt**: Fisrtly, Forgive my English is not very good. I use keep-alive tag in default.vue, but it doesn't work. `default.vue:` ``` <template> <div> <keep-alive> <nuxt></nuxt> </keep-alive> </div> </template> ``` At last, I find it can work after add a code in nuxt-child.js line65. `nuxt/lib/app/components/nuxt-child.js:` ``` return h('transition', { props: transitionProps, on: listeners }, [ h('keep-alive', [ h('router-view', data) ]) ]) ``` You can judge keep-alive based on the configuration of nuxt.config.js. `result` ![image]([link]) If you doesn't need `keep-alive`, you can add `deactivated` in…

### CASE-5833 · flowtype support
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬15 · closed · labels: good first issue/2.x
- **Excerpt**: I'm trying to include flowtype support in my app, but its throwing error and so far i have been unable to solve the issue. P.S. I do have a vue.js project with this exact same config and it works. ``` .babelrc { "presets": [ ["env", { "modules": false }], "stage-2", ["es2015", {"modules": false }], "flow-vue" ], "plugins": [ "transform-runtime", "babel-plugin-transform-class-properties", "syntax-flow", "babel-plugin-transform-flow-strip-types" ], "comments": false } ``` ``` .eslintrc.js // [link] module.exports = { root: true, parserOptions: { parser: 'babel-eslint', sourceType: 'module' },…

### CASE-5834 · specific transitions for different route within page component
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬15 · closed · labels: 2.x
- **Excerpt**: since theres no direct access to "this" in the transition object / js hooksof a page, is it even possible to create custom enter and leave transitions with javascript hooks instead of css, or different transition names? i'm doing this with plain vue.js this way: `router-view.view(ref='page')` then: ``` enter (el, done) { this.$refs.page.enter ? this.$refs.page.enter(el, done) : TweenLite.from(el, 0.5, { alpha: 0, onComplete: done() }) } ``` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link]…

### CASE-5838 · Nuxt 3.16.2: Pre-transform error: orgTransform.apply is not a function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍2 💬14 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v22.14.0` - Nuxt Version: `3.16.2` - CLI Version: `3.24.1` - Nitro Version: `2.11.9` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `build`, `experimental`, `components`, `css`, `vite`, `vue`, `runtimeConfig`, `routeRules`, `i18n`, `devServer`, `modules`, `vitalizer`, `imports`, `svgo`, `plugins`, `compatibilityDate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `[email]`, `floating-vue/[email]` - Build…

### CASE-5839 · Page scroll to top before transition has started using NuxtPage transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬14 · closed · labels: pending triage/🔨 p3-minor/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.16.2 - CLI Version: 3.24.0 - Nitro Version: 2.11.8 - Package Manager: [email] - Builder: - - User Config: devtools, compatibilityDate, app - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Create new project Setup pages Set NuxtPage transitions to : `<nuxt-page :transition="{ name: 'page-fade', mode: 'out-in', }" /> ` Make pages taller than screen height Change page using nuxt link ### Describe the bug [Reproduction / Stackblitz]([link])…

### CASE-5842 · [ERR_MODULE_NOT_FOUND]: Cannot find module after running production app
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, nuxt, vite, typescript, tailwind, vue
- **Signals**: 👍2 💬14 · closed · labels: pending triage/nitro/upstream/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.20.2` - Nuxt Version: `3.12.3` - CLI Version: `3.12.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `css`, `vite`, `modules`, `build`, `typescript`, `vcalendar`, `tailwindcss`, `imports`, `app`, `content`, `routeRules`, `colorMode`, `pwa`, `site`, `sitemap`, `ogImage`, `compatibilityDate` - Runtime Modules: `@user/[email]`, `@user/[email]`, `radix-vue/nuxt`, `[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/vue-transitions/[email]`,…

### CASE-5856 · WARN [SSR] Error transforming on windows
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍3 💬14 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.11.0` - Nuxt Version: `3.0.0-27257216.f5aea9f` - Package Manager: `npm` - Bundler: `Vite` - User Config: `vite`, `build` - Runtime Modules: `-` - Build Modules: `-` ### Describe the bug WARN [SSR] Error transforming ./node_modules/hookable/dist/index.mjs: Error: Missing "./dist/index.mjs" export in "hookable" package WARN [SSR] Error transforming ./node_modules/vue/server-renderer/index.js: Error: Missing "./server-renderer/index.js" export in "vue" package WARN [SSR] Error transforming…

### CASE-5866 · How to use JSX from vue plugin?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬14 · closed · labels: question/2.x
- **Excerpt**: Hello. I'm trying to use `vue-tables-2` plugin, it uses JSX in your own templates. _packages.json_ ```javascript { //... "dependencies": { "babel-helper-vue-jsx-merge-props": "^2.0.2", "babel-plugin-syntax-jsx": "^6.18.0", "babel-plugin-transform-vue-jsx": "^3.3.0", "nuxt": "latest", "vue-tables-2": "^0.2.77" }, //... } ``` _nuxt.config.js_ ```javascript module.exports = { build: { vendor: ['vue-tables-2'], babel: { plugins: ['transform-vue-jsx'] } }, plugins: ['~plugins/vue-tables-2'], //... } ``` _plugins/vue-tables-2.js_ ```javascript import Vue from 'vue' import VueTables from…

### CASE-5870 · 💥 Nuxt Page Transition causes a Flash / Blank when navigating — possible layout/rendering issue
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vue
- **Signals**: 👍1 💬13 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ## Description Hi, I’m working on a Nuxt 3 project deployed on Vercel. I’m experiencing an unwanted **white flash** or **layout flicker** on navigation between pages, especially when using `<NuxtLink>` inside the navbar. The transition feels broken or unpolished. I already use default Nuxt page transitions like this: ```css .page-enter-active, .page-leave-active { transition: all 0.4s; } .page-enter-from, .page-leave-to { opacity: 0; filter: blur(1rem); } ``` My app layout includes the navbar and footer outside of `<NuxtPage />` like this: ```vue <template> <NuxtLoadingIndicator /> <AppNavbar…

### CASE-5891 · Title breaking during page transitions
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍2 💬13 · closed · labels: 3.x/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `buildModules`, `schemaOrg`, `image`, `colorMode`, `css`, `pwa`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]-27628766.3629b9a`, `@user/[email]`, `@user/[email]`, `[email]-beta.3` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction [Stackblitz Repo Link]([link]) ### Describe the bug Hello 👋, I noticed that the title of my pages…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5804 · runtimeConfig is Undefined v3.13.0
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, typescript, tailwind, vite
- **Signals**: 👍0 💬15 · closed · labels: pending triage/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.11.0 - Nuxt Version: 3.13.0 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: devtools, experimental, sourcemap, ssr, typescript, app, modules, tailwindcss, image, svgo, googleFonts, i18n, runtimeConfig, vite - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email], @user/test-utils/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Im…

### CASE-5805 · Potential Memory Leak
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: opera, nuxt
- **Signals**: 👍0 💬15 · closed · labels: pending triage/needs reproduction/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.7.0` - Nuxt Version: `3.13.0` - CLI Version: `3.13.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Fresh nuxt 3.13.0 install via npx i tried different node versions like all major version, it is literally happening on every node version. when running with node --inspect .output/server/index.mjs ### Describe the bug Memory Leaking with SSR enabled when doing `ab -n 100 -c 50 "[link] <img…

### CASE-5806 · 3.10.x: `nuxt build` creates vue files in `.nuxt/dist/server/_nuxt` folder
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue, vite
- **Signals**: 👍0 💬15 · closed · labels: 3.x/🐛 bug/bundler:vite/🔨 p3-minor/inline styles
- **Excerpt**: ### Environment ``` - Operating System: Darwin - Node Version: v21.2.0 - Nuxt Version: 3.10.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, css, modules, runtimeConfig, image, build, i18n, ignore, nitro, routeRules, security, vite - Runtime Modules: @user/[email], @user/[email], [email], [email] - Build Modules: - ``` ### Reproduction - ### Describe the bug With `3.10.0` and `3.10.1` I get an error at the end of `nuxt build`: `ERROR RollupError: At least one <template> or <script> is required in a single file component`, with…

### CASE-5809 · Styles defined in layout omitted from the server-rendered HTML, when Client- and Lazy component use the same package in their code
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬15 · closed · labels: 3.x/workaround available/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment ``` [1:52:12 PM] Nuxi 3.6.5 [1:52:12 PM] [1:52:12 PM] RootDir: /home/freek/projects/the-july-frontend [1:52:12 PM] Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v18.16.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: extends, telemetry, ssr, fontMetrics, nitro, routeRules, runtimeConfig, build, modules, image, components, bugsnag, devtools, i18n, pwa, app, dnGraphqlClient, vite, plugins - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email],…

### CASE-5814 · nuxt3.4.1 Object literal may only specify known properties, and 'srcDir' does not exist in type 'NuxtConfig'.
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍2 💬15 · closed · labels: types/3.x/pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.13.0 - Nuxt Version: 3.4.1 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: srcDir, build, imports, apollo, modules, hooks - Runtime Modules: [email], @user/[email]-alpha.5, @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] Clone the project then pnpm i pnpm dev open file nuxt.config.ts no errors yet. on nuxt 3.3.2 nuxt upgrade --force then pnpm dev check nuxt.config.ts <img width="1101" alt="image" src="[link]> error on nuxt 3.4.1…

### CASE-5815 · Can't use dependencies in nuxt layers
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, webpack
- **Signals**: 👍12 💬15 · closed · labels: 3.x/🐛 bug/❗ p4-important/layers
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.19.0` - Nuxt Version: `^3.2.3` - Nitro Version: `-` - Package Manager: `[email]` - Builder: `webpack` - User Config: `ssr`, `extends` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [dayjs-in-nuxt-layer-reporoduction.zip]([link] framework]/files/10882990/dayjs-in-nuxt-layer-reporoduction.zip) In `./nuxt-project`: ```bash yarn && yarn dev ``` ![image]([link]) ### Describe the bug Can't use dependencies in package layer. So far I've noticed that the…

### CASE-5818 · new nitro devProxy not working
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬15 · closed · labels: 3.x/pending triage/nitro
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `experimental`, `css`, `colorMode`, `nitro` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug i'm always get 404 in proxy url ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-5821 · Firebase tools 10.9.x deploy failed
- **Principles**: P-A3, P-H1 · **Env**: windows, nuxt
- **Signals**: 👍10 💬15 · closed · labels: 3.x/nitro/upstream
- **Excerpt**: ### Environment Nuxt v3.0.0-rc.3 Node Version: v16.15.0 Firebase Tools 10.9.2(or 10.9.0 -) Windows 11 wsl or Docker image [andreysenov/firebase-tools@user]([link]) ### Reproduction [npx nuxi init nuxt-app]([link]) && [Nitro Firebase]([link]) ### Describe the bug Firebase tools version 10.9.x `firebase deploy` or `firebase emulators:start` failed. Successful deployment with version 10.7.0,10.8.0 ### Additional context _No response_ ### Logs ```shell $ firebase emulators:start i emulators: Starting emulators: functions, hosting ⚠ functions: The following emulators are not running, calls to…

### CASE-5830 · layouts and double initialize component
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍0 💬15 · closed · labels: 2.x
- **Excerpt**: Hi! I use latest nuxt and i have problem with double initialize component which rendering in layout . I have layout named "main" and default route ("/") which must rendered in the "main layouts" using component "logreg.vue". When default route rendering i see 3 initialization logreg.vue component. <img width="813" alt="screen shot 2017-11-02 at 22 21 32" src="[link]> layouts/main.vue <img width="875" alt="screen shot 2017-11-02 at 22 26 33" src="[link]> pages/index.vue <img width="1432" alt="screen shot 2017-11-02 at 22 27 32" src="[link]> result after loading page <img width="680"…

### CASE-5831 · [Bug] Pages mount twice
- **Principles**: P-A3, P-H1, P-F4 · **Env**: nuxt, vue
- **Signals**: 👍3 💬15 · closed · labels: 2.x
- **Excerpt**: In the "spa mode" with a "custom layout" pages will be mounted twice! <img width="1053" alt="screen shot 2017-10-06 at 7 09 18 pm" src="[link]> In a fresh clone of nuxt.js, I just added this line in nuxt.config.js to use spa mode: `mode: 'spa',` then I created a custom layout ('layouts/custom.vue') with the exact contents of the default layout ('layouts/default.vue'), and I used the custom layout in "pages/index.vue" This bug only exists in SPA mode with a custom layout. But in SSR mode or with the default layout it works fine. <!--cmty--><!--cmty_prevent_hook--> <div…

### CASE-5841 · Property '$route' does not exist on type
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue
- **Signals**: 👍10 💬14 · closed · labels: types/🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.12.1 - Nuxt Version: 3.12.4 - CLI Version: 3.12.0 - Nitro Version: - - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devServer, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Within the template of a Vue component, using `$route`, `$router` will report a type error. I tried restarting vscode and the extension and still got an error. ![image]([link]) ![image]([link]) ### Additional context _No…

### CASE-5843 · reduce likelihood of chunk hash changes when changing code
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite, webpack
- **Signals**: 👍1 💬14 · closed · labels: good first issue/🍰 p2-nice-to-have/⚡ performance
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.18.2 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: vite - User Config: ssr, logLevel, builder, sourcemap, vite, buildId, telemetry, nitro, experimental, dir, devtools, hooks, app, css, plugins, i18n, modules, sentry, webpack, image, eslint, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - Vite config: ``` vite: { build: { rollupOptions: { output: { chunkFileNames: '_nuxt/chunk/[hash].js', entryFileNames:…

### CASE-5845 · `useRuntimeConfig()` returns `NitroRuntimeConfig` and does not include keys defined in `nuxi.config.ts`
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬14 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.12.1 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.9.1 - Package Manager: [email] - Builder: - - User Config: devtools, runtimeConfig - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [CodeSandbox]([link]) ### Describe the bug The return value of the `useRuntimeConfig` hook does not include the keys defined in `nuxt.config.ts` on the server, while they are present on the client, even the private keys are included. ### Additional context <img…

### CASE-5846 · Hydration mismatch for `useId`
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, tailwind
- **Signals**: 👍5 💬14 · closed · labels: 3.x/pending triage/nitro/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.17.1 - Nuxt Version: 3.10.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: nitro, devtools, experimental, runtimeConfig, components, app, css, modules, shadcn, tailwindcss, image, imports, build - Runtime Modules: [email], [email], @user/[email], @user/[email], @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction ![Screenshot 2024-02-13 at 01 33 16]([link] framework]/assets/4516973/d115889c-6bac-47d6-bc56-536466b652c9) ### Describe the bug I got this warn…

### CASE-5850 · Some files were not copied to .output/server/node_modules during build
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬14 · closed · labels: 3.x/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.16.1 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: modules, colorMode - Runtime Modules: @user/[email], [email], @user/[email] - Build Modules: - ### Reproduction [link] Steps: ```shell npm run build ``` ```shell npm run preview ``` visit /api/icons ### Describe the bug no such file or directory, open '/home/projects/nuxt-starter-amtrbm/.output/server/node_modules/@user/json/collections.json ![image]([link] framework]/assets/6902417/a55211e6-9525-4ec5-a6b0-fa5f5c213b7e)…

### CASE-5851 · Webpack error on video tag display with require on src
- **Principles**: P-A3, P-H1 · **Env**: opera, webpack, nuxt
- **Signals**: 👍3 💬14 · closed · labels: good first issue/2.x/🐛 bug/bundler:webpack
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v19.7.0 - Nuxt Version: 2.16.3 - Nitro Version: - - Package Manager: [email] - Builder: webpack - User Config: head, css, plugins, components, buildModules, modules, devMiddleware, build - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction load a video tag in a page with a video loaded with require on src ### Describe the bug video don't load and a message error occur ### Additional context _No response_ ### Logs ```shell-script ERROR context.outputFileSystem.lstat is…

### CASE-5853 · useFetch auto-refreshes when parameters change, even with no watch source
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬14 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v19.5.0` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `runtimeConfig`, `content`, `image`, `googleFonts` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]-27968280.9739e4d` - Build Modules: `-` ### Reproduction ```javascript const saveScheduleAPICall = await useLazyFetch('/api/saveSchedule', { method: 'POST', immediate: false, server: false, headers: { authtoken: process.client && localStorage.getItem('authtoken') }, body: { events:…

### CASE-5858 · `nuxt generate` is missing
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬14 · closed · labels: ✨ enhancement/3.x/cli
- **Excerpt**: <!-- Please carefully read the contribution docs before creating a bug report 👉 [link] Please use the code sandbox template below to create a minimal reproduction 👉 [link] --> ### Environment Latest main branch ### Describe the bug and expected behavior ![image]([link]) Meanwhile setting `target: 'static` in `nuxt.config.ts` with `nuxt build` will pass but does not generate the dist. ### Steps to reproduce <!-- Steps to reproduce the behavior: 1. Go to '...' 2. Click on '....' 3. Scroll down to '....' 4. See error --> ### Additional context <!-- If applicable, add any other context about…

### CASE-5868 · HMR is crashing after updating from NUXT3 to NUXT4
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍2 💬13 · closed · labels: pending triage/platform:windows/needs reproduction/possible regression
- **Excerpt**: ### Environment PS C:\Me\Projects\retrack> npx nuxt info Working directory: C:/Me/Projects/retrack nuxi 5:02:23 PM Nuxt project info: (copied to clipboard) nuxi 5:02:24 PM ------------------------------ - Operating System: Windows_NT - Node Version: v20.17.0 - Nuxt Version: 4.1.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, build, css, vite, fonts, runtimeConfig, modules, experimental, tiptap, app, image, routeRules - Runtime Modules: @user/[email], @user/[email], @user/[email], [email], @user/[email],…

### CASE-5869 · useAsyncData with same key on two different pages does not refresh when switching pages
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍2 💬13 · open · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.18.0 - Nuxt Version: 3.17.1 - CLI Version: 3.25.1 - Nitro Version: 2.11.12 - Package Manager: [email] - Builder: - - User Config: modules, $development, devtools, app, css, runtimeConfig, routeRules, future, compatibilityDate, vite, postcss, eslint, i18n, image, prismic, scripts - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe…

### CASE-5875 · HMR is broken for a simple skeleton app
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬13 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.0.0` - Nuxt Version: `3.12.3` - CLI Version: `3.12.0` - Nitro Version: `2.9.7` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `modules`, `compatibilityDate` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction the app is generated with this command: `npx nuxi init -t ui <app>` I added an `about` page ![image]([link]) Then added a `<NuxtLink>` to `about` page in `app.vue` ![image]([link]) ### Describe the bug first of all, hmr is not working, I see nothing in the `/about` route.…

### CASE-5879 · [DX] Type inference in VSCode is completely broken on version 3.8.1 / 3.8.2
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬13 · closed · labels: types/3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ``` Working directory: /Users/michael/Developer/kinandconscious/kindandconscious-nuxt3 11:46:21 AM Nuxt project info: (copied to clipboard) 11:46:21 AM ------------------------------ - Operating System: Darwin - Node Version: v20.9.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: ssr, app, css, image, modules, routeRules, robots, runtimeConfig, site, sourcemap, windicss - Runtime Modules: @user/[email], [email], [email], [email], @user/[email], @user/[email] - Build Modules: -…

### CASE-5882 · Nuxt >=3.6.5 : Cannot find module and RollupError: Could not resolve
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, linux, nuxt, vite
- **Signals**: 👍0 💬13 · closed · labels: 3.x/workaround available/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: ### Environment My local ------------------------------ - Operating System: Windows_NT - Node Version: v18.17.1 - Nuxt Version: 3.7.0 - CLI Version: 3.7.3 - Nitro Version: 2.6.2 - Package Manager: [email] - Builder: - - User Config: modules, image, vite, extends, experimental, routeRules, nitro, sitemap, css, runtimeConfig, devtools - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email]-rc.1, [email] - Build Modules: - ------------------------------ Reproduction ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 -…

### CASE-5885 · Nuxt Layers - array duplicity within app.config.ts
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍2 💬13 · closed · labels: pending triage/layers
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.5.2 - Nitro Version: 2.4.1 - Package Manager: unknown - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction [link] Stackblitz uses pnpm older pnpm, so the `install` fails, but feel free to clone it, or just go through the code, it's very minimalist ### Describe the bug I am facing 2 issues when using this architecture ![image]([link] framework]/assets/17269309/063dc89d-a946-4889-b369-c9a04279d635) ###…

### CASE-5886 · document enabling `defineModel` in 3.5 version
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍4 💬13 · closed · labels: 📚 documentation/good first issue/3.x
- **Excerpt**: ### Environment Nuxt project info: 22:04:49 ------------------------------ - Operating System: Windows_NT - Node Version: v18.13.0 - Nuxt Version: 3.5.0 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: srcDir, css, modules, app, experimental, runtimeConfig, postcss, typescript - Runtime Modules: [email], @user/[email], [email] - Build Modules: - ------------------------------ ### Reproduction - ### Describe the bug defineModel not working in 3.5 version and i dont see the way i could turn it on There is also this warning in the console ![image]([link]…

### CASE-5887 · TS Error with auto-imports from composables and utils in Vue Template after 3.3
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vue, nuxt, vite
- **Signals**: 👍6 💬13 · closed · labels: 3.x/workaround available/upstream
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.4.3 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: experimental, modules, colorMode - Runtime Modules: @user/[email], @user/[email], [email], [email], @user/[email], @user/[email]-28020728.5df24eb, @user/[email] - Build Modules: - ### Reproduction ![image]([link] framework]/assets/111127651/51f17cc2-4624-4240-bcc3-d8d225045052) This error doesn't seem to be reproducible on Stackblitz so I have included a [github repo]([link]) ### Describe the bug When functions are…

### CASE-5889 · vite fs access can conflict with api/page routes (`/app`, `/error`, etc.)
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬13 · closed · labels: 3.x/🐛 bug/bundler:vite/🔨 p3-minor
- **Excerpt**: After delete .lock file and update dependencies got in console: <img width="662" alt="image" src="[link]> 1) old .lock [link] 2) new .lock [link] Vite .lock changes [link] **On server side is ok.** Maybe this bug need post to vite issue, but i not sure.

### CASE-5892 · ERR_UNSUPPORTED_ESM_URL_SCHEME
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, vite, typescript, vue
- **Signals**: 👍1 💬13 · closed · labels: 3.x/pending triage/platform:windows
- **Excerpt**: ### Environment $ npx nuxi info npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead. Nuxt CLI v3.0.0-rc.6 RootDir: C:\DATA\Work Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `typescript`, `vite`, `modules`, `build`, `css`, `i18n`, `image`, `server` - Runtime Modules: `vite-plugin-vue-type-imports/nuxt`, `@user/[email]`, `@user/[email]-alpha.0-27644818.4f1d945`, `@user/[email]`,…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5817 · Dynamic component imports doesn't work
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍8 💬15 · closed
- **Excerpt**: Hi. I have this component provider, just for dynamic component imports. ```vue <template> <component :is="componentLoader" /> </template> <script setup lang="ts"> import { defineProps, defineAsyncComponent } from 'vue'; interface Props { component: { module: string; file: string; }; } const props = defineProps<Props>(); const componentLoader = defineAsyncComponent({ loader: () => import(`./modules/${props.component.module}/components/${props.component.file}`), delay: 100, }); </script> ``` Initialization looks like that. ```vue <template> <component-provider :component="form" /> </template>…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5822 · nuxt-link does not resolve inside an as prop
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬16 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-27501460.04a72f8` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `buildModules`, `vite`, `build` - Runtime Modules: `-` - Build Modules: `@user/[email]` ### Reproduction Code: ```vue <DisclosureButton as="nuxt-link" to="/dashboard" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"> Go to dashboard </DisclosureButton> ``` HTML: ```html <nuxt-link disabled="false" to="/dashboard" class="block px-4 py-2 text-base font-medium…

### CASE-5835 · "SyntaxError: Unexpected token <" on external Vue component
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬15 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: I've followed the instructions in the documentation, and I run into the same issue as [ref]. I've done some testing, but can't nail down what the issue is (the error is exactly the same as the closed issue). Here is the steps I've taken: 1. vue init nuxt/starter test 2. cd test 3. npm install 4. npm install --save bulma font-awesome node-sass sass-loader vue-bulma-breadcrumb (verified pre-processor instructions from [link]) 5. Added `{ src: 'bulma', lang: 'sass' }` as shown in [link] 6. `npm run dev` Everything works fine. 7. Modify default layout to `import Breadcrumb from…

### CASE-5863 · SASS: tilde package reference is broken on SSR
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬14 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.1.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Install nuxt-fonts-test and switch between my master (Nuxt 2.1) and nuxt-142 (Nuxt 1.4.2) branch to see the error. ### What is expected ? The font of a NPM Module (in this example node_modules/test/Charmonman.ttf) are included and after a nuxt generate in the dist folder ### What is actually happening? Error Message "SyntaxError: Invalid or unexpected token" on nuxt and nuxt generate. ### Additional comments? Since Nuxt 2.0 it isn't possible to use an NPM package as a style library with fonts. The…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5823 · Can't use is="NuxtLink" with component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬15 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.2` - Nuxt Version: `3.0.0-27468803.23e7afb` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction `<component is="NuxtLink" to="/">Example</component>` Generate this html: `<nuxtlink to="/">Example</nuxtlink>` Expected html: `<a aria-current="page" href="/" class="router-link-active router-link-exact-active">Example</a>` ### Describe the bug Usage of `<component is="NuxtLink"…

### CASE-5840 · baseURL doesn't always work correctly
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬14 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v22.12.0 - Nuxt Version: 3.15.1 - CLI Version: 3.20.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devtools, css, modules, postcss, vue, ssr, graphql-client - Runtime Modules: [email] - Build Modules: - ### Reproduction npx nuxi init nuxt-app cd nuxt-app npm install NUXT_APP_BASE_URL=/foo npm run build --nitro-preset cloudflare_pages If I use the old NITRO_PRESET environment variable rather than the new ʼ—-nitro-presetʼ then baseURL is always just '/'. So using --nitro-preset does…

### CASE-5877 · Cloudflare Pages Environment Variables not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Cloudflare Pages ### Reproduction [link] ### Describe the bug When deploying a Nuxt3 project to Cloudflare Pages with default configuration, the environment variables are not working. They are always empty, even when set in Cloudflare. To reproduce the issue you can clone the repo above, deploy it to cloudflare pages, set the `NUXT_SECRET_KEY` environment to anything you want and once deployed visit `/api/test`. There you will see that an empty string is returned instead of the value you entered in your cloudflare dashboard. ### Additional context _No response_ ### Logs _No…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5837 · EffectScope memory leak in Nuxt 4, when Vue setup blocks have `await` calls in them
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt, vue, typescript, vite
- **Signals**: 👍6 💬14 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v22.14.0` - Nuxt Version: `4.0.3` - CLI Version: `3.28.0` - Nitro Version: `2.12.4` - Package Manager: `[email]` - Builder: `-` - User Config: `modulesDir`, `typescript`, `modules`, `runtimeConfig`, `experimental`, `alias`, `vite`, `routeRules`, `nitro`, `build`, `prometheus`, `features` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `~/lib/core/nuxt-modules/apollo/module.ts`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction I've already spent a half a day fixing this in…

### CASE-5878 · Using http-proxy-middleware with asyncContext causes memory leak
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬13 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.10.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, experimental - Runtime Modules: - - Build Modules: - ### Reproduction [link] 1. Install deps with `yarn` command 2. Execute `yarn build && yarn start` 3. Open inspector, proceed to memory page 4. Take a snapshot 5. Make tons of request to proxy /api/ok, for example, `siege -c 10 [link] 6. Take another snapshot 7. Disable asyncContext: true and repeat steps 2-6 With asyncContext (30k req):…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-5855 · different default scrollBehavior that resets page scroll on navigation
- **Principles**: P-D4, P-F1, P-F5, P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬14 · closed · labels: ✨ enhancement/3.x/pages
- **Excerpt**: ### Environment ``` - Operating System: `Darwin` - Node Version: `v17.3.1` - Nuxt Version: `3.0.0-27369360.33ebb01` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `vite`, `ssr` - Runtime Modules: `-` - Build Modules: `-` ``` ### Reproduction No reproduction needed imo ### Describe the bug When navigating using a `<NuxtLink to="/othePage" />` the page scroll is not resetting. In other words, the page does not `scrollToTop` on route change ### Additional context _No response_ ### Logs _No response_

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-5864 · [Help needed] Page not found "/" route
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: vue, nuxt
- **Signals**: 👍0 💬14 · closed · labels: 2.x
- **Excerpt**: First off, sorry if this is in the wrong place. [I tried StackOverflow first but got no interest. ]([link]) I'm trying to set up a VueJS app using Nuxt for server-side rendering. However, after deployment to my server the index.vue is returning a 404 Page not found error. This doesn't happen when running on my development machine, and still happens even if run in Development mode on my server. All other routes work, and getting to the index route from within the app itself works fine. It just doesn't load when refreshed. Eg: `[link] Doesn't work `[link] Works fine My pages folder currently…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-5876 · Body style background image does not update when theme changes
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: opera, nuxt, typescript
- **Signals**: 👍0 💬13 · closed · labels: 🐛 bug/upstream/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v21.6.2` - Nuxt Version: `3.11.1` - CLI Version: `3.11.1` - Nitro Version: `2.9.5` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `typescript`, `srcDir`, `modules`, `i18n`, `app`, `runtimeConfig` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction ```ts const colorMode = useColorMode(); useHead({ bodyAttrs: { class: computed(() => { if(colorMode.value=== 'light'){ return "bg-fixed" }else if(colorMode.value==="dark"){…

### CASE-5896 · Vuetify custom theme ignored by Nuxt
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬13 · closed · labels: question/pending triage/2.x
- **Excerpt**: ### Version [v2.6.0]([link]) ### Reproduction link [[link] framework].js/issues/]([link] framework].js/issues/) ### Steps to reproduce I am using Nuxt.js with Vuetify.js where I want to change the default theme colors. I created a file: **~/plugins/vuetify.js** to change the default primary color to red. Here is its content: ``` import Vue from 'vue' import Vuetify from 'vuetify' Vue.use(Vuetify, { theme: { primary: '#ff0000' } }) ``` In nuxt.config.js I asked Nuxt.js to use this plugin: ``` export default { plugins: ['~/plugins/vuetify'] } ``` ### What is expected ? Calling primary must…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5900 · Breakpoints doesn't work in vscode debugger
- **Principles**: P-A1, P-A4, P-G3 · **Env**: nuxt
- **Signals**: 👍7 💬13 · closed · labels: stale/2.x
- **Excerpt**: I'm using this command to debug nuxt server store ```json "debug": "node --inspect-brk=9229 node_modules/nuxt/bin/nuxt", ``` and in vs code i'll attach it when it runs ```json { "type": "node", "request": "attach", "name": "Attach", "port": 9229, "protocol": "inspector", "restart": true, "sourceMaps": true } ``` seems breakpoints doesn't work and grayed out turned sourceMaps on too <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c2374">#c2374</a>)</em></sub></div>

