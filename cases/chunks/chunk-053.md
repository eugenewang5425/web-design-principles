# Case Chunk 053 — Round 53

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6201 · Nitro server plugin called twice in dev-server with ssr: false
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍1 💬8 · closed · labels: pending triage/🛠️ dx/🐛 bug/nitro/🔨 p3-minor
- **Excerpt**: ### Environment Working directory: /home/projects/nuxt-issues-24871 Nuxt project info: ------------------------------ - Operating System: Linux - Node Version: v18.20.3 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug The plugin init method is called twice after running `npm run dev` (`nuxt dev`). **The error only occurs when running `npm run dev` the second time.** I also noticed,…

### CASE-6202 · `nuxt.options.nitro.publicAssets.push` leads to 404 errors
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage/nitro/upstream
- **Excerpt**: ### Environment ``` Nuxt project info: 22:50:35 ------------------------------ - Operating System: Windows_NT - Node Version: v22.4.1 - Nuxt Version: 3.12.3 - CLI Version: 3.12.0 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: ssr, compatibilityDate, app, css, vite, modules, nitro, eslint, runtimeConfig, content, googleFonts, site, sitemap, linkChecker, commitShaFileGenerator, cname, experimental - Runtime Modules: @user/[email], [email], ~/modules/commit-sha-file-generator, ~/modules/content-downloader, ~/modules/latex-pdf-generator,…

### CASE-6203 · since nuxt 3.12.2: regression generating without pages/index.vue: `Error: [404] Page not found: /`
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍2 💬8 · closed · labels: workaround available/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v22.3.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, runtimeConfig, app, modules, components, generate - Runtime Modules: @user/[email], [email], [email]-rc.17, @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction 1. create a nuxt 3.12.2 project, with a `pages/about.vue` and some hallo-world content (`<template>hello world</template>`) 2. `npm run dev` to verify,…

### CASE-6204 · data-Attribute is not deleted when you go to another page
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: workaround available/pending triage/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v20.11.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug There is something strange. It happens when I move from one page to another page that contains a specific component. Within this component, I give a data-Attribute element, and when I return to the first page and then return, I find that the…

### CASE-6205 · Navigating from router-view throws Missing required param
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage/pages/upstream/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v20.11.1 - Nuxt Version: 3.11.1 - CLI Version: 3.11.1 - Nitro Version: 2.9.5 - Package Manager: [email] - Builder: - - User Config: ssr, devtools, site, devServer, modules, robots, css, runtimeConfig, vite, app - Runtime Modules: @user/[email], [email], [email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction Honestly i'm not sure how to reproduce it ### Describe the bug When browsing from a route to another i'm getting a…

### CASE-6208 · <select> element shows wrong initial value before hydration when using SSR
- **Principles**: P-F4, P-G4, P-E3 · **Env**: opera, linux, nuxt
- **Signals**: 👍2 💬8 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.9.0 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Before hydration, the value of the <select> appears to be the value of the first option, even if you're explicitely setting it to something else using v-model. After the hydration step, the error is corrected. You can see this by pressing refresh button…

### CASE-6214 · Css `:deep()` selector not working correctly with SSR
- **Principles**: P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/workaround available/🐛 bug/🔨 p3-minor/✨ good reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.9.0` - Nuxt Version: `3.9.1` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction Not working (Nuxt): [link] Working (Vue SSR): [link] ### Describe the bug When using the `:deep` CSS selector, the styles are not applied in the correct order during loading, causing them to be overwritten after the page loads. When I tried reproducing this issue in Vue SSR, it worked correctly. ### Additional context…

### CASE-6220 · Nuxt 3.8 on node 18 fetch on server fails
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Operating System: Linux - Node Version: v18.18.2 - Nuxt Version: 3.8.1 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: app, css, modern, ssr, components, build, modules, legacy, devtools, runtimeConfig, router, experimental - Runtime Modules: @user/[email], @user/[email]-28336957.57c0f74, @user/[email], @user/[email], @user/[email], vue-recaptcha/nuxt, @user/[email], [email] - Build Modules: - ### Reproduction <no response> [node-fetch-native] Failed to fetch: `globalThis.fetch` is not available! 85|roklaFrontEnd | at onError…

### CASE-6222 · Custom Elements defined in isCustomElement configuration, but warning issued when used in h()"
- **Principles**: P-F4 · **Env**: opera, nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.15.0` - Nuxt Version: `3.8.0` - CLI Version: `3.9.1` - Nitro Version: `2.7.2` - Package Manager: `[email]` - Builder: `-` - User Config: `modules`, `experimental`, `ssr`, `vue`, `runtimeConfig` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction - Define a custom element in the nuxt.config.ts file using the isCustomElement configuration. ``` Vue: { compilerOptions: { isCustomElement: (tag) => { return tag === 'mjml' ||…

### CASE-6226 · v-html not getting hydrated/updated on prerendered site
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.20.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.6.0 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Using `v-html` on a prerendered site will result in the html not getting updated after hydration. Here is the example used in the stackblitz: ```js <script setup> const timestamp = ref(); timestamp.value = Date.now(); </script> <template> <div> <div v-html="timestamp" /> {{…

### CASE-6228 · Hydration node mismatch - but client and server is the same
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Docker ### Reproduction [link] ### Describe the bug I created a new nuxt project and used graphql to query for some data. Then I rendered that data in the template. But I am getting a node mismatch error even though I do not see any difference between what the server rendered and what the client rendered. Here is my `ExampleComponent.vue` component: ```js <template> <div class="p-4 border border-dashed m-2 rounded"> <ul v-if="characters?.length"> <li v-for="character in characters" :key="character.id"> {{ character.name }} </li> </ul> <div v-else> Loading... </div> </div>…

### CASE-6229 · Hydration mismatch warning when using a rich-text renderer
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/upstream
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.17.0` - Nuxt Version: `3.2.2` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug Using a rich-text renderer causes an hydration mismatch in nuxt3. It did not happen in nuxt2. Looking at the [source code of the library]([link]), shows that it does nothing special, just renders a series of elements. But the output that the…

### CASE-6230 · Nuxt 3.6 | 3.5.3 - Content + Pages not getting generated routes | Static
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxi 3.5.3 12:10:46 PM 12:10:50 PM 12:10:50 PM Nuxt project info: 12:10:50 PM ------------------------------ - Operating System: Windows_NT - Node Version: v18.11.0 - Nuxt Version: 3.5.3 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: ssr, hooks, vue, nitro, css, vite, postcss, app, modules, content, googleSignIn, runtimeConfig, devtools - Runtime Modules: [email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Continuing the bug reported…

### CASE-6231 · nuxt generate does not render pages since 3.6.0
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: good first issue/3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment LOCAL: - Operating System: `Darwin` - Node Version: `v18.16.1` - Nuxt Version: `3.6.2` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `build`, `css`, `devtools`, `modules`, `ssr` - Runtime Modules: `@user/[email]` - Build Modules: `-` STACKBLITZ: - Operating System: `Linux` - Node Version: `v16.20.0` - Nuxt Version: `3.6.2` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Since `3.6.0`, static pages are not…

### CASE-6234 · ssr: false routes do not render with proper CSS
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.6.0 - Nitro Version: 2.5.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Code is private ### Describe the bug After upgrading from 3.53 to 3.6 all routes that are ssr: false (the default ssr is true) broke and looks like the CSS is not used. If changed to ssr: true, it works well but we need the specific routes to not render on the server. ### Additional context _No…

### CASE-6235 · only null Type is allowed to useAsyncData's default Type
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍0 💬8 · closed · labels: types/3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.14.2 - Nuxt Version: 3.5.2 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: telemetry, ssr, experimental, app, modules, css, imports, build, nitro - Runtime Modules: @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction i tried to reproduction but it doesn't show typescript error ### Describe the bug sorry my english is bad... when i use useAsyncData with default data ``` type User = { name: string auth:…

### CASE-6240 · Page setup and middleware running twice after SSR middleware redirect
- **Principles**: P-F4 · **Env**: nuxt, vite
- **Signals**: 👍7 💬8 · closed · labels: good first issue/3.x/🐛 bug/🔨 p3-minor/✨ good reproduction
- **Excerpt**: ### Environment - Node Version: v16.14.0 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: target, ssr, app, css, build, components, nitro, routeRules, vite, runtimeConfig, plugins, serverHandlers, modules - Runtime Modules: @user/nuxt@^0.4.0 - Build Modules: - ### Reproduction [link] Click in "Click here to hard reload A". Check logs to check when middleware and page setup run. ### Describe the bug With SSR enabled, a request to path `/a` is redirected with a global middleware to path `/b`. Expected behavior: global middleware runs and…

### CASE-6241 · [Bug] Does not provide an export named 'default' (3.4.2)
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, desktop
- **Signals**: 👍4 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxi 3.4.2 8:34:16 PM 8:34:16 PM RootDir: [...]/Desktop/[....] 8:34:16 PM Nuxt project info: (copied to clipboard) 8:34:16 PM ------------------------------ - Operating System: Darwin - Node Version: v16.14.2 - Nuxt Version: 3.4.2 - Nitro Version: 2.3.3 - Package Manager: [email] - Builder: vite - User Config: ssr, target, app, router, css, postcss, plugins, components, vite, modules, runtimeConfig, build, builder - Runtime Modules: @user/[email], [email], [email] - Build Modules: - ------------------------------ ### Reproduction Install version of Nuxt 3.4.2 and try to build…

### CASE-6244 · Nuxt 3 SSR mode, manually refresh the browser page, prompting Cannot read properties of null (reading 'posts'), how to solve this
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v19.4.0` - Nuxt Version: `3.2.3` - Nitro Version: `2.2.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `sitemap`, `css`, `postcss`, `mode`, `ssr` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction ```javascript <script setup> const { tag } = useRoute().params const page = ref(1) const limited = ref(20) const uri = '[link] + tag const { data: tagnames, pending, error, refresh } = await useFetch(uri, { query: { page, limited }, onCompleted: () => { refresh() }, onError: () => {…

### CASE-6246 · 500 error in pnpm monorepo
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, webpack
- **Signals**: 👍1 💬8 · closed · labels: 3.x/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Windows_NT` 00:12:12 - Node Version: `v16.11.1` - Nuxt Version: `3.2.2` - Nitro Version: `-` - Package Manager: `[email]` - Builder: `webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug ## Steps to reproduce ```bash git clone [link] cd axues git checkout ssr pnpm install npm run dev:nuxt # open localhost:3000 ``` I created the project using the following command but got a 500 error on startup. ```bash pnpm dlx nuxi init nuxt ``` I have no idea to this, can anybody help me? source code in…

### CASE-6248 · useFetch not executed on SSR (Using Pinia to handle useFetch)
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.14` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `build`, `postcss`, `modules`, `app`, `css` - Runtime Modules: `@user/[email]`, `@user/[email]-27809804.194d2d6` - Build Modules: `-` ### Reproduction [link]([link]) ### Describe the bug I'm trying to execute a useFetch within a Pinia state function, which works. But is being executed client side, instead of server side. When I click on the button (Login.vue), it does fires useFetch and retrieves the…

### CASE-6249 · can't fetch data on the server, only on client side
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue, tailwind
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `telemetry`, `loading`, `app`, `vue`, `plugins`, `modules`, `tailwindcss`, `vite`, `render`, `runtimeConfig` - Runtime Modules: `@user/[email]` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug I'm upgrading a [pubblic GitHub repo]([link]) (I use that base on a private one, I'm using this one to help me with the project migration)…

### CASE-6254 · Nuxt 3: SSR memory leak in `useHead()` with computed getter on the server
- **Principles**: P-F4, P-F5, P-H3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/🐛 bug/❗ p4-important/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction ```ts <script setup lang="ts"> import { useHead } from '#head'; // ... useHead(() => getMeta(meta.value)); </script> ``` ### Describe the bug Using a computed getter (`() => ...)`) as an argument of the `getHead()` results to memory leak on the server. See also: [link] framework].js[ref]. #### Temporary fix ```ts <script setup lang="ts"> import…

### CASE-6255 · How to not send cookie header
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.16.0` - Nuxt Version: `3.0.0-rc.10` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction - ### Describe the bug I have a backend on django(the same domain but it has /api prefix) and client app on nuxt 3 I need ssr and I run pm2 for client app (just for the sake of ssr and dynamic content) currently when I make request to my backend it sends all cookies I use. (I use cookies with persistedstate) it attaches everything. if I set…

### CASE-6257 · rc.7 fails to build with @user/vue-leaflet 0.6.1 installed
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite, typescript
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v18.1.0` - Nuxt Version: `3.0.0-rc.7` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `css`, `app`, `buildModules`, `components`, `nitro`, `runtimeConfig`, `serverHandlers`, `vite` - Runtime Modules: `-` - Build Modules: `@user/[email]` ### Reproduction package.josn { "private": true, "scripts": { "dev": "nuxi dev --port 8000", "build": "nuxi build ", "start": "cross-env PORT=8000 node .output/server/index.mjs" }, "devDependencies": { "@user/eslint-config-typescript": "^10.0.0", "@user/bcrypt": "^5.0.0",…

### CASE-6258 · Request for more information on static hosting deployments and `.output/public` structure
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, tailwind
- **Signals**: 👍1 💬8 · closed · labels: 📚 documentation/good first issue/3.x
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules`, `css`, `target`, `ssr`, `generate`, `nitro`, `router`, `app`, `tailwindcss`, `sourcemap`, `content` - Runtime Modules: `@user/[email]`, `@user/[email]` - Build Modules: `-` ------------------------------ I'm building a blog using `@user/content`. ### Reproduction I'm generating a fully static output by pre rendering using the `generate` command. `nuxt.config.ts` settings for this are: ```…

### CASE-6259 · Cannot start nuxt: Cannot find module '@user/vite-builder'
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, desktop
- **Signals**: 👍5 💬8 · closed · labels: 3.x/workaround available/🐛 bug
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.6 RootDir: C:\Users\Ilya\Desktop\nuxt-app Nuxt project info: ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `bridge`, `buildModules`, `css`, `windicss`, `build` - Runtime Modules: `-` - Build Modules: `[email]` ------------------------------ ### Reproduction [link] ### Describe the bug ERROR Cannot start nuxt: Cannot find module '@user/vite-builder' Require stack: - C:\Users\Ilya\Desktop\nuxt-app\index.js…

### CASE-6262 · v-if="data.property" in <slot> causes hydration error
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍1 💬8 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.1 13:39:19 RootDir: C:\Users\micro\Prosjekter\plafat 13:39:25 Nuxt project info: 13:39:25 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `target`, `buildModules`, `strapi`, `vue`, `publicRuntimeConfig`, `css`, `vite` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Reproduction Link: [link] Not sure if it shows the problem, as I am unsure how to se the console error log. ###…

### CASE-6270 · nuxt build cant find files
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, webpack, vite, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Nuxt project info: 00:24:59 ------------------------------ - Operating System: `Windows` - Node Version: `v14.17.0` - Nuxt Version: `3-3.0.0-27235973.ad4e2e9` - Package Manager: `npm` - Bundler: `Webpack` - User Config: `debug`, `srcDir`, `ssr`, `head`, `components`, `buildModules`, `router`, `modules`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug nuxt build [vite] Internal server error: Failed to resolve import "icons/logo.svg" from "src\client\components\main\Header.vue". Does the file exist? nuxt config have srcDir:…

### CASE-6273 · Static deployment not working with custom error and preview pages
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬9 · closed · labels: pending triage/2.x
- **Excerpt**: I’m deploying a static site with `target: 'static', ssr: true` to a hosting service. In my app I’ve configured custom error pages layouts/error.vue as well as “live preview” for pages that aren't generated yet (nuxtjs.org/docs/2.x/features/live-preview). In my local environment, everything works fine — when I run `yarn generate` and `yarn start`. I’ve tried to achieve the same behaviour with hosting providers (I’ve tried all "static" services), but with no success. My idea was to define a “Rewrite-Rule” like … ``` /* --> /index.html ``` But then weird things are happening and it does not…

### CASE-6274 · Full-static payload gets mixed up using nested fetch() hooks inside dynamically loaded components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.13.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - Create a page that uses its own fetch() hook - Make that page use a wrapper/builder component which in turn uses dynamic component imports - Make the components imported within the builder use their own fetch() hooks - The data as displayed on the page ([link]) will be offset by one (note this only occurs within the payload eg. after hydration happens! The data on the HTML/no-js version of the page is correct) ### What is expected ? Data is correctly mapped to each individual component ### What is…

### CASE-6275 · [FOUC] Imported CSS in page not included during ssr
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce When we import some css directly in script, or js files from a page, the css will not be included in the server side rendered head. It will only be injected at runtime. It's the same with the extractCss property, the extracted css files are **not** included via link balises. Surprisingly, it works well in layout! We can see that well with generate build and by disabling javascript on the page. ### What is expected ? The included CSS, assets/test.css, should be inlined into the page as a <style> or…

### CASE-6276 · modern client mode behaves differently for including async chunks on initial page load
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce I just stumbled onto something that looks like a bug, but which is actually kind of a feature request which is possible with this "bug" ;). Sounds weird? Yes, let me explain: When including async components on a page, they are included in the page assets via script tag immedeitaly on page load. This is actually a problem for things like "lazy-hydration" ([link]) and there is a open PR to solve this ([link]). While I was looking into this issue, I found out that nuxt does this somehow differently. Even…

### CASE-6280 · plugins setting is invalid in nuxt.config.js
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.6.3]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce #### first step: i created a vue component(name pdf.vue) use the `pdfjs-dist` #### second step: import the plugin ``` import Vue from 'vue' import Pdf from '~/components/Pdf.vue' Vue.component('Pdf', Pdf) ``` #### third step: ``` plugins: [ { src: '~/plugins/pdf', ssr: false } ], ``` ### What is expected ? the pdf component run ### What is actually happening? ``` commons.app.js:9792 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by…

### CASE-6282 · localIdentName didn't change in scss
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.4.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Add custom css module name `loaders.cssModules.localIdentName = '__custom_[name]_[local]'` in extend method in nuxt.config.js 2. Get module rules configuration ```js const index = config.module.rules.findIndex(v => v.test.toString().includes('scss') ) const scssRule = config.module.rules[index] ``` 3. Look in `scssRule.oneOf[0].use[1].options.localIdentName` configuration (you can use console.log) 4. This log will happen several times, but the first one `localIdentName` will be the default which is…

### CASE-6283 · Weird mismatch between client and SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Let the sandbox load Click the "refresh" button within the sandbox preview ### What is expected ? Both loading spinners should be rendered properly, with a radial gradient, on both page loads. ### What is actually happening? The spinners load properly the first time, but then every subsequent load they are broken. ### Additional comments? So this is a weird one. I created 2 spinners to demonstrate the issue in 2 ways. The first spinner uses _uid to make a unique reference to the component. The second…

### CASE-6286 · Duplicated meta tags on SSR
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.2.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Here is how to reproduce from the official template: In `layouts/default.vue` ``` <script> let tags = { meta: [] } export default { name: 'app', head () { tags.meta.push({ property: 'og:url', content: this.$router.history.current.path, hid: 'metaogurl' }) return tags } } </script> ``` Then, refresh your pages several times or navigate through some pages. In your browser's console, run: ``` document.querySelectorAll('meta[property="og:url"]') 1: <meta data-n-head="true" property="og:url" content="/"…

### CASE-6289 · Can't import Nuxt Link in SSR mode
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: question/2.x
- **Excerpt**: I need to import `NuxtLink` in my project; but it doesn't work in Nuxt when it's rendered on the server. My page is ```vue <template> <h1>Hello world!</h1> </template> <script> import NuxtLink from 'nuxt/lib/app/components/nuxt-link' console.log(NuxtLink) </script> ``` It works in SPA mode; but I get the following warning: ``` 17:2-16 "export 'default' (imported as '__vue_script__') was not found in…

### CASE-6292 · [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 📚 documentation/2.x
- **Excerpt**: In Nuxt, if I try to add third party plugin for example vue-date-picker like this ``` <template> <div> <datepicker :readonly="true" format="YYYY-MM-DD"></datepicker> </div> </template> <script> let datepicker = null // The server-side needs a full url to works if (process.browser) { datepicker = require('vue-date-picker').default } export default { components: {datepicker} } </script> ``` DatePicker works perfectly. But the following warning occurs **[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup,…

### CASE-6299 · Gitlab SSR deployment broken: Gitlab enforces trailing slashes
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬7 · closed · labels: pending triage
- **Excerpt**: ### Environment Nuxt project info: | | | | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | **Operating system** | `Linux 7.1.8-200.fc44.x86_64` | | **CPU** | `Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz (8 cores)` | | **Node.js version** | `v22.13.1` | | **nuxt/cli version** | `3.37.0` | | **Package manager** | `[email]` | | **Nuxt version** | `4.5.2` | | **Nitro version** | `2.13.4` | | **Builder** | `[email]` | |…

### CASE-6300 · nuxt build: NUXT_B7021 — client manifest is emitted, then deleted twice (writeManifest + ClientManifestPlugin) on 4.5.2
- **Principles**: P-F4 · **Env**: macos, nuxt, vite, vue
- **Signals**: 👍1 💬7 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Nuxt **4.5.2**, `compatibilityVersion: 5` - Vite **8.2.1**, Vue 3.5.41, `@user/vite-builder` 4.5.2 - pnpm 11.10.0, Node 24.18.0, macOS - Large monorepo app: 13 locales, several hundred nested pages ### Describe the bug `nuxt build` fails during the SSR environment pass: ``` [NUXT_B7021] The client build manifest was expected at <buildDir>/dist/client/manifest.json but was not emitted by the client build. ``` The client environment **does** emit it — it appears in the client build listing at `1,480.48 kB`, at exactly the path the error then reports as missing. The file is…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6206 · auto-imported components not recognised in IDE with script lang="tsx" in SFC
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · open · labels: types/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.15.0` - Nuxt Version: `3.11.1` - CLI Version: `3.11.0` - Nitro Version: `2.9.4` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `ssr`, `modules`, `unpluginHttpsReverseProxy`, `router`, `devServer`, `vite` - Runtime Modules: `@user/[email]`, `@user/[email]`, `unplugin-https-reverse-proxy/nuxt`, `unplugin-icons/nuxt`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction ![image]([link] framework]/assets/15872986/0826170e-b47d-47b4-b174-c75d82468ec1) ![image]([link]…

### CASE-6207 · tsconfig.server.json & VSCode warning "Cannot read file"
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍2 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: **GOAL:** I'm interested in the benefits this doc item talks about, and not having warnings. [link] ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.17.1 - Nuxt Version: 3.10.3 - CLI Version: 3.10.1 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: srcDir, devtools, modules, vite, strapi, css, runtimeConfig, image, future, imports - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction 1 - Create `./server/tsconfig.json` with content…

### CASE-6209 · Nuxt Escalates External Console Log Levels
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt 3.11.1 ### Reproduction When upgrading from Nuxt 3.10.3 to 3.11.0, external logs in dev seem to be escalated. In code, console.log/warn/error seem to be fine. This shows warnings that are supposed to be debug. [link] ### Describe the bug In Nuxt 3.11.0 dev logs seem to be escalated. Logs that were warnings in 3.10.3 are now error. This used to be just a warning in 3.10.3 ![image]([link] framework]/assets/2112282/0275decf-b6fb-4032-915f-9da6f99e9d5c) These weren't even visible in 3.10.3 (they use debug) ![image]([link]…

### CASE-6210 · Bad component types since nuxt `v3.11.0`
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue, tailwind, typescript, vite
- **Signals**: 👍0 💬8 · closed · labels: types/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v21.6.2` - Nuxt Version: `3.11.0` - CLI Version: `3.10.1` - Nitro Version: `2.9.4` - Package Manager: `[email]` - Builder: `-` - User Config: `app`, `css`, `devtools`, `experimental`, `googleFonts`, `i18n`, `image`, `modules`, `nitro`, `pinia`, `primevue`, `runtimeConfig`, `tailwindcss`, `typescript`, `vite` - Runtime Modules: `@user/[email]`, `@user/test-utils/[email]`, `[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction You can reproduce the issue…

### CASE-6211 · @user/nuxt deps error
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment <img width="587" alt="image" src="[link] framework]/assets/4695440/bc827ed3-623d-44f0-ba59-3901602754e5"> ### Reproduction [link] ### Describe the bug <img width="899" alt="image" src="[link] framework]/assets/4695440/b150b362-4578-4511-b973-ebafe2b9d90d"> <img width="1107" alt="image" src="[link] framework]/assets/4695440/d4a52e25-0e82-4906-9e99-4b51b23c28b6"> ### Additional context _No response_ ### Logs _No response_

### CASE-6213 · Nuxt 3.9.2: Unstyled pages rendered briefly with Unocss
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍4 💬8 · closed · labels: 3.x/❗ p4-important
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.18.2 - Nuxt Version: 3.9.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - User Config: devtools, modules, css, sanity, image, components - Runtime Modules: @user/[email], @user/motion/[email], @user/[email], @user/[email], @user/[email], @user/[email] ### Reproduction [link] Go to the follow reproduction, and manually refresh the web container. The page should briefly be unstyled. ### Describe the bug After upgrading to Nuxt `3.9.2` this morning, I notice that all my pages and components become briefly…

### CASE-6216 · errorHandler description is not available in production
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.18.0 - Nuxt Version: 3.9.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: runtimeConfig, modules, image, sitemap, site, colorMode, css, routeRules - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], @user/[email] - Build Modules: - ------------------------------ ### Reproduction // ### Describe the bug When my app is in development, all details are used to create a GitHub issue automatically. However, I am…

### CASE-6217 · Since 3.8.1: "✨ optimized dependencies changed. reloading" keeps showing up repeatedly, forcing me to include all my dependencies in vite.optimizeDeps.include[]
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, vite, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Windows_NT - Node Version: v18.18.2 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: telemetry, experimental, devtools, components, app, nitro, imports, vite, css, modules, pinia, image, proxy, runtimeConfig - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ------------------------------ ``` ### Reproduction Does not work on Stackblitz 🤔 ### Describe the bug Unless I add all my dependencies to,…

### CASE-6218 · Nuxt 3 works fine locally but goes into an infinite loop on the server
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Docker & Kubernetes - Node Version: v18.18.2 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.0 - Package Manager: [email] - Builder: - - User Config: devtools, modules, css, components, plugins, fontLoader, app, runtimeConfig, build, delayHydration - Runtime Modules: @user/[email], @user/[email], [email], [email], @user/[email] - Build Modules: - ### Reproduction Here is the exact structure of the project: [link] ### Describe the bug ![image]([link] framework]/assets/42525116/7950f630-8d75-413e-b0ed-d293f04ebfa8) When I launch the project…

### CASE-6221 · useFetch credentials not work on server
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vue, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ``` - Operating System: Darwin - Node Version: v20.8.0 - Nuxt Version: 3.8.1 - CLI Version: 3.9.1 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: experimental, colorMode, runtimeConfig, app, dev, debug, telemetry, css, plugins, modules, gtm, svgo, image, imports, vue, vite, devtools - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], @user/[email], @user/[email], @user/[email] - Build Modules: - ``` ### Reproduction none ### Describe the bug My plugin init.server.ts for init auth user ``` export default defineNuxtPlugin(async…

### CASE-6225 · Build Fail - Cloudflare Pages
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.15.0 - Nuxt Version: 3.7.3 - CLI Version: 3.8.3 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: runtimeConfig, modules, image, sitemap, jsoneditor, colorMode, css, routeRules, nitro - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], [email], @user/[email]-rc.2-28244125.e6e72be - Build Modules: - ------------------------------ ### Reproduction Tested on new small project working without issue ### Describe the bug 21:06:57.425 |…

### CASE-6227 · [bug]Hydration children mismatch in <ul>: server rendered element contains more child nodes than client vdom.
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt project info: 16:07:28 ------------------------------ - Operating System: Windows_NT - Node Version: v16.16.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: imports, image, runtimeConfig, app, css, typescript, modules, vueuse, colorMode, vite, elementPlus - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email]-rc.1 - Build Modules: - ### Reproduction not ### Describe the bug 我使用ul -li 标签，对li标签进行v-for循环渲染，渲染数据是来自lazy请求，刷新页面这时候浏览器提示 ```js Hydration…

### CASE-6233 · WebSockets doesnt work correctly when using ngrok for https
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Nuxt project info: ------------------------------ - Operating System: Windows_NT - Node Version: v18.12.1 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, vite - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction 1. Create a nuxt3 project using `npx nuxi@user init {project_name}` 2. Start project. 3. Start node tunnel with ngrok. 4. Load page. 5. See that it is producing an error. ![image]([link] framework]/assets/5083273/12395abb-2c66-47f1-b2ad-bfb20c6f07bc) Example ngrok tunnel…

### CASE-6236 · Nuxt 3.5.1 can not start dev, upgraded from 3.4.3
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite, typescript, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.0 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: app, css, modules, ssr, lodash, pinia, build, typescript, devtools - Runtime Modules: [email], @user/[email], @user/[email], @user/[email] - Build Modules: - ### Reproduction yarn dev ### Describe the bug Cannot start nuxt: Cannot find module '../doc/directives.js' It seems the problem is related to package 'unplugin-vue-router' 0.6.4, once downgraded back to 3.4.3, everything is working properly. ![image]([link]…

### CASE-6237 · Nuxi 3.5.1 error on nuxt prepare Windows 10
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/platform:windows/needs reproduction/closed-by-bot
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ### Reproduction ![image]([link] framework]/assets/45410431/e6752928-6938-4135-b0c0-e18eb2308209) ok, so I'll just `pnpm add @user/devtools -D`, and the result is the same ### Describe the bug I use this command `pnpm dlx nuxi init <project-name>`, then `pnpm i` the devtools error occurs ### Additional context _No response_ ### Logs _No response_

### CASE-6238 · Generic components | Generic type unresolved inside <script>
- **Principles**: P-A3, P-H1 · **Env**: windows, nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment OS: Windows 10 Nuxt: 3.5.1 IDE: VSCode ### Reproduction [link] ### Describe the bug TS marks following code as error - unresolved. ```vue <script setup lang="ts" generic="T"> defineProps<{ data: T[] // unresolved }>(); </script> ``` ![image]([link] framework]/assets/45385480/0bd8555e-f9de-4932-80ce-2336dded8d55) ### Additional context Latest Volar installed Latest Volar TS plugin installed @user TS disabled ### Logs _No response_

### CASE-6239 · `useSeoMeta` doesn't work with reactivity in the server
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, react, nuxt, vite, vue
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v16.14.2 - Nuxt Version: 3.4.3 - Nitro Version: 2.4.0 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link]].vue ### Describe the bug You can open the demo with `Open in New Tab` to easily debug. If you go to the home page, you can see the title & description from the server: <img width="1091" alt="Screenshot 2023-05-10 at 3 38 16 PM" src="[link]…

### CASE-6250 · TypeError: Cannot destructure property 'Server' of '_engineIo.default'
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: pending triage/upstream/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v18.9.0` - Nuxt Version: `3.0.0-rc.13` - Nitro Version: `0.6.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug I'm following the module author guide, I got an error "Cannot destructure property 'Server' of '_engineIo.default'" after running "npm run dev:prepare". Someone also created an issue to socket.io few days ago. [link] <img width="1440" alt="Screenshot…

### CASE-6256 · [nuxt] [request error] [unhandled] [500] [vite-node] Failed to load
- **Principles**: P-A3, P-H1 · **Env**: windows, nuxt, vite, typescript, tailwind
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment windows 10 node v16.17.0 nuxt 3.0.0.rc9 ### Reproduction [link] ### Describe the bug Global introduction of css styles leads to error reporting ### Additional context my config： `export default defineNuxtConfig({ modules: ['@user/color-mode'], srcDir: 'src', alias: { '@': '/src' }, typescript: { strict: true }, css: [ '@/assets/css/index.scss' ], postcss: { plugins: { tailwindcss: {}, }, }, vite: { css: { preprocessorOptions: { scss: { quietDeps: true, additionalData: '' } } } } })` ![image]([link]) ### Logs ```shell [nuxt] [request error] [unhandled] [500] [vite-node] Failed…

### CASE-6263 · HMR broken when using ClientOnly component
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍1 💬8 · closed · labels: 3.x/🐛 bug/components/🔨 p3-minor
- **Excerpt**: ### Environment See reproduction... ### Reproduction StackBlitz: [link] ### Describe the bug I can only partially reproduce this bug. If you look at the StackBlitz and open `pages/index.vue`, there is a `<ClientOnly>` component with a paragraph and a custom component inside. If you change the text in the paragraph that says CHANGE THIS TEXT (or anything inside the `<ClientOnly>` component) to trigger an HMR update the custom component disappears and it will be gone until you reload the page. The reproduction doesn't show any errors or warnings but in my project I get such warnings: <img…

### CASE-6265 · hydration error with JSX + spaces
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27319101.3e82f0f RootDir: /home/projects/github-l11tqv Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v14.16.0` - Nuxt Version: `3.0.0-27319101.3e82f0f` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug this is something wrong in nuxt with jsx when i render a var ![image]([link]) ![image]([link]) ### Additional context _No response_ ### Logs _No response_

### CASE-6267 · bug on server/api side.
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: opera, ios, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/🐛 bug/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-27257216.f5aea9f` - Package Manager: `npm` - Bundler: `Vite` - User Config: `vite`, `build` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug bug only on dev mode. build woking fine. i have next method. axios.post("/api/upload", formData, { headers: { "Content-Type": "multipart/form-data", }, }); formData have binary data. on server const uploadFolder = path.resolve('images') const form = formidable.IncomingForm();…

### CASE-6268 · Bug in Docs Module Overview
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment N/A ### Reproduction visit any module in [link] ### Describe the bug ### (it's in every module, wasn't like this yesterday) <img width="847" alt="Screenshot 2022-12-29 at 12 13 39 PM" src="[link]> <img width="849" alt="Screenshot 2022-12-29 at 12 13 57 PM" src="[link]> ### Additional context I posted the same issue to the modules repo [link] but got no response so decided I'd try my luck here, sorry if it's the wrong place ### Logs _No response_

### CASE-6269 · require is not defined in ES module scope
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27245975.d1214c9` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `buildModules`, `build` - Runtime Modules: `-` - Build Modules: `@user/[email]` ------------------------------ ### Describe the bug [link] <img width="1249" alt="CleanShot 2021-10-21 at 14 36 57@user" src="[link]> ### Reproduction [link] ### Additional context _No response_ ### Logs ```shell require is not defined in ES module scope, you can use import instead at $id_5e685441…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6212 · NuxtLink external / internal logic issues
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, nuxt
- **Signals**: 👍11 💬8 · closed · labels: 🔨 p3-minor
- **Excerpt**: ### Environment ----------------------------- - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.10.0 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: app, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug :information_source: Still thinking through this issue and how to best articulate the higher level problems. ## Several edge cases Within the `NuxtLink` component, we have several bugs related to how "external" links are treated. Within the…

### CASE-6215 · Middleware will not fire after going back in browser history in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, safari 17, macos, nuxt, vue
- **Signals**: 👍1 💬8 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.5.1 - Nuxt Version: 3.9.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools, pages - Runtime Modules: - - Build Modules: - ### Reproduction Reproduction repo: [link] ```bash # install deps npm install # build app npm run build # start production build npm run preview ``` ### Describe the bug In Safari (macOS 14.2.1, Safari 17.2.1): *Given* ```vue <!-- /pages/index.vue --> <template> <div> <h1>Home Page</h1> <NuxtLink to="/hidden-feature">The Hidden Feature</NuxtLink>…

### CASE-6224 · Error on Vercel Edge function after upgrade to 3.7.4
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, nuxt, tailwind, vue
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage/upstream/needs reproduction
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.18.0 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: nitro, devtools, experimental, modules, googleFonts, tailwindcss, vue - Runtime Modules: @user/[email], @user/[email]-rc.1, @user/[email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug After upgrading Nuxt to version 3.7.4, the following error occurs when deploying to Vercel Edge: ` Error: The Edge Function "__nitro" is referencing unsupported modules index.mjs: fs, path` ###…

### CASE-6232 · Memory Leak when integrating Vuetify
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: opera, chrome, vue, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.16.1 - Nuxt Version: 3.5.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: css, build, vite, hooks - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug When accessed multiple times, the memory consumption is raising without ever being freed by the gc process. ### Additional context Running: 1. yarn build 2. node --inspect .output/server/index.mjs 3. going to chrome://inspect (or pretty much any inspector)…

### CASE-6243 · When the version is upgraded to the latest one, there is no problem in local operation. However, after deploying pm2 online and refreshing the page on the real computer, the following error occasionally appears. There is no problem in wechat internal browser and safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, safari, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment Nuxt3.3.0 ### Reproduction When the version is upgraded to the latest one, there is no problem in local operation. However, after deploying pm2 online and refreshing the page on the real computer, the following error occasionally appears. There is no problem in wechat internal browser and safari ### Describe the bug When the version is upgraded to the latest one, there is no problem in local operation. However, after deploying pm2 online and refreshing the page on the real computer, the following error occasionally appears. There is no problem in wechat internal browser and…

### CASE-6245 · TypeError: Cannot read properties of undefined (reading 'postcss') at Processor.normalize
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, nuxt, tailwind
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Environment ``` System: OS: macOS 12.6.2 CPU: (10) arm64 Apple M1 Pro Memory: 126.39 MB / 16.00 GB Shell: 3.5.1 - /opt/homebrew/bin/fish Binaries: Node: 16.19.0 - ~/.nvm/versions/node/v16.19.0/bin/node Yarn: 1.22.19 - ~/.yarn/bin/yarn npm: 8.19.3 - ~/.nvm/versions/node/v16.19.0/bin/npm Browsers: Chrome: 111.0.5563.64 Safari: 16.2 npmPackages: @user/image: ^0.7.1 => 0.7.1 nuxt: ^2.16.1 => 2.16.2 ``` ### Reproduction I apologise for not providing a minimal reproduction... Issue depends on two private repos. I created a tailwindcss plugin that I import in my nuxt app as an npm dependency.…

### CASE-6251 · rc.12 build and preview server always show ERR_CONNECTION_RESET when visited using chrome browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, nuxt, vite
- **Signals**: 👍1 💬8 · closed · labels: 3.x/pending triage/platform:windows
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.12` - Nitro Version: `0.6.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction create a new nuxt rc12 project npx nuxi init nuxt-rc12 build and preview yarn run build yarn run preview ### Describe the bug visit localhost:3000 using chrome browser it cannot reach the page and show ERR_CONNECTION_RESET and no error & any message on the server terminal i had try to deploy the build server to azure app service which is…

### CASE-6252 · Calling setPageLayout() before page mount does not render properly
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, linux, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment Output of `npx nuxi info` from the provided StackBlitz (although I have also locally tested this with a recent edge release). RootDir: /home/projects/github-t7y38h Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction See this Stackblitz: [link] ### Describe the bug Calling `setPageLayout()` directly during the page…

### CASE-6266 · Tried to install Nuxt3 using the documentation site, failed. because of schema-edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, nuxt, webpack
- **Signals**: 👍10 💬8 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v14.18.1` - Nuxt Version: `latest` - Package Manager: `[email]` - Bundler: `Webpack` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction It's easy, go here: [link] run `npx nuxi init .` then `npm install` and it failed. ### Describe the bug ``` npm ERR! code ETARGET npm ERR! notarget No matching version found for @user/[email]-27291865.d68318f. npm ERR! notarget In most cases you or one of your dependencies are requesting npm ERR! notarget a…

### CASE-6271 · dev server is not using port from options
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍9 💬8 · closed · labels: 3.x/🐛 bug/cli
- **Excerpt**: <!-- Please carefully read the contribution docs before creating a bug report 👉 [link] Please use the code sandbox template below to create a minimal reproduction 👉 [link] --> ### Environment <!-- You can use `npx nuxi info` to fill this section --> ``` nuxi dev ``` "nuxt-edge": "^2.16.0-27226092.034b9901" "@user/bridge": "npm:@user/bridge-edge" ### Describe the bug and expected behavior I provided server host and port (8080) but nuxt opens server on still localhost:3000 (other options (head, proxy or i18n) is working fine) <!-- A clear and concise description of what the bug is. --> ###…

### CASE-6277 · Nuxt generate --modern + `for await of` usage doesn't work in Microsoft Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍1 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.10.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce I used `yarn create nuxt-app` and added this code: ```javascript export default { data() { return { values: [] }; }, async created() { for await (const value of this.asyncIterable()) { this.values.push(value); } }, methods: { async *asyncIterable() { for (let i = 0; i < 10; i++) { yield Promise.resolve(i); } } } }; ``` I built with/without modern flag and deployed to netlify: `nuxt generate --modern` = [link] `nuxt generate` = [link] Go to both sites in Microsoft Edge. The first has a console error…

### CASE-6278 · Nuxt.js should handle "back" swipe gesture by default
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: edge, safari/, ios, nuxt, vue, webview
- **Signals**: 👍10 💬8 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### What problem does this feature solve? I'm unsure if this is a feature request or a bug report: when navigating back with the left swipe gesture on iOS devices, the previous route is re-rendered before the new one is rendered. See explanation and demo below. ~~I'm experiencing what's described in [this Vue.js plugin]([link]) (which I couldn't get to work with Nuxt.js):~~ > ~~You can swipe with edge gesture in iOS Safari/WKWebview/Wechat. The page will trigger `history.back()/history.forward()` after the page is sliding finished. then the transition animation of router will still…

### CASE-6287 · Out of memory error building with new nuxt-edge 2.0.0-25465851.937ce61
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 2, macos, nuxt
- **Signals**: 👍1 💬8 · closed · labels: 2.x
- **Excerpt**: Hi **My system:** MacBook Pro 15 16gb memory macOs High Sierra Node version 9.11.1 I have an express app that uses Nuxt as the last middleware. With version 2.0.0-25452542.7f9d16c (dated 2018-05-24) my app was compiling and running successfully. With the latest version 2.0.0-25465851.937ce61 (dated 2018-06-02) it crashes with the error below. ``` ● client █████████████████████████ building modules (24%) 120/132 modules 12 act ive node_modules/core-js/library/modules/_iter-define.js # # Fatal error in , line 0 # API fatal error handler returned after process out of memory # ``` Used memory at…

### CASE-6290 · RangeError: Array size is not a small enough positive integer on iOS browsers after now deploy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, android, nuxt, vue, desktop
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: My project is working well on desktop browsers, but when I deploy through zeit's now, some of my click events are broken on all iOS browsers and I am able to see this error in the console (using browserstack). Everything works as it should on Android browsers. Any help/direction on this issue would be appreciated. I'm using "nuxtjs/apollo": "^3.0.4" and "apollo-client": "^2.2.5". Here is part of my nuxt.config.js: ``` build: { maxChunkSize: 300000, extend (config) { if (process.client) { config.module.rules.push({ enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude:…

### CASE-6295 · SSR only serves static page, never hydrates in IE11.
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, safari, firefox, edge, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: I'm running a basic nuxt.js website, works perfect on Chrome, Safari, Firefox and Edge. One issue: On IE11, it seems to only serve the static page, and the javascript bundle never hydrates the static page. Any insight into how I might get around this issue? Should I look into generating a static site or??? <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c582">#c582</a>)</em></sub></div>

### CASE-6298 · render issue on mobile safari
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, chrome, firefox, ios, nuxt, vue, mobile, iphone
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: Hi, Thanks for the awesome work, I was playing around nuxt.js, although its still lack of documents, its still works nice. I ran into this problem on iOS safari, not sure if it is a bug. this is my layout default.vue ``` <template lang="pug"> #wrapper transition(name="fade", mode="out-in") #notify(v-if="notifyMessage") .restrict.notify-box {{notifyMessage}} my-header main#main nuxt my-footer </template> ``` I tried on my OSX Sierra with chrome, firefox and safari, iphone 6 10.2 with Chrome, page renderer in the tag 'nuxt' without any problem. but when using the default safari on iOS, the…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6219 · Adding a watched file in module: changing the file causes server to restart but still getting old contents
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt
- **Signals**: 👍0 💬8 · open · labels: pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] - Run the app The console logs: `data: change me` - Modify the `data` variable in `helloData.ts` and save Nuxt server restarts and the console logs the same thing: `data: change me` **expected behavior**: After changing the `data` variable and saving, the console should log…

### CASE-6260 · Data not accessible through 'head' method in defineNuxtComponent
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 📚 documentation/3.x
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v15.5.0` - Nuxt Version: `3.0.0-rc.6` - Package Manager: `[email]` - Builder: `vite` - User Config: `head`, `modules`, `buildModules`, `css`, `build` - Runtime Modules: `@user/motion/[email]-beta.18`, `@user/[email]` - Build Modules: `-` ### Reproduction [link] ### Describe the bug The title is not filled with the variable, but it works when applying a title without variable. ### Additional context _No response_ ### Logs _No response_

### CASE-6285 · Dynamic store has undefined state
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.3.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce - Check out the Reproduction Link - In `dynamic-store/dynamic.js` is a `console.log(state)` - On initial page load you will see the state is filled (logged on console) - Navigate to "About" with the Nuxt-Link and back to the Homepage - Now the State of the dynamic registered store is `undefined` ### What is expected ? I would expect that the dynamic registered Vuex Store would be accessible without errors. ### What is actually happening? An error is thrown because the state of the dynamic registered…

### CASE-6288 · After using router.push\replace asyncData not called on new page
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce [link] - if you go index page u will see render error due to undefined variable. But index page only do router.push to /page2. If u go directly to [link] all renders fine. ### What is expected ? asyncData called and variable resolved so no error happened like when page accessed directly without router.push ### What is actually happening? render error due to undefined variable that should come from asyncData <!--cmty--><!--cmty_prevent_hook--> <div…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6223 · Error on keywords that shouldn't be unknown
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v21.0.0 - Nuxt Version: 3.8.0 - CLI Version: 3.9.1 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: devtools, router, alias, image, modules, imports, routeRules, nitro, experimental, app - Runtime Modules: @user/[email], @user/[email]-rc.3-28271297.f1bc89f, @user/auto-animate/[email], @user/[email] - Build Modules: - ### Reproduction ![PostCSS Issue with Nuxt 3]([link] framework]/assets/111882496/fa905385-9f6c-44e8-8fd7-2b80137bd5d4) ***Unfortunately, the error is not a constant one, as it happens to…

### CASE-6253 · Layout slots not working in default layout
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt, vue
- **Signals**: 👍2 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt 3.0.0-rc.11 ### Reproduction StackBlitz: [link] ### Describe the bug Layout slots not working with default layout, generate error (see reproduction): ``` Error: Codegen node is missing for element/if/for node. Apply appropriate transforms first. ``` Note the use of `app.vue`. Explicitly using `<NuxtLayout>` with `layout: false` in page meta works but leads to full re-render of the layout and kinda defies the purpose of a default layout. Not sure if I'm doing something wrong with the setup, but following the docs, the code in the repro should work. Also, best in terms of…

### CASE-6291 · maxChunkSize used in build will break whole app
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: Iv tried to use ``` maxChunkSize: 300000 ``` works in Dev while prod build stuck at loading animation with this message in browser console: ``` The resource *******_nuxt/20.d4716bb72467de4f83eb.js was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it wasn't preloaded for nothing. ``` <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c2346">#c2346</a>)</em></sub></div>

### CASE-6294 · Transition on Error page doesn't work.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: I tried to add `transition(name="page", mode="out-in")` (pug) on both - Error and Default layout, but it doesn't help. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This question is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c848">#c848</a>)</em></sub></div>

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6242 · The title tag is after the meta tag !!!
- **Principles**: P-A1, P-A4, P-G3, P-F4 · **Env**: linux, windows, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x/needs reproduction
- **Excerpt**: ### Environment nuxt: "nuxt": "^2.4.0", linux-centos 7.x or windows 11 ### Reproduction you can see here: [link] ### Describe the bug 1.we found the title tag is after the meta tag, so ite maked TDK wrong! 2.check source-code,it show that ``` <html> <body> <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1"> <meta data-n-head="ssr" data-hid="description" name="description" content="mmmmmm"> <title>xxx</title> </body> </html> ``` we can see title label is aftered the description label,i try many nuxt2.x verson but it doesnot work. 3.wish ``` <title>xxx</title>…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-6247 · bug: `extend` theme-config from node module with `defineEventHandler`
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬8 · closed · labels: 3.x/🐛 bug/🔨 p3-minor/layers
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.9.0` - Nuxt Version: `3.0.1-rc.0-27821553.ab125bd` - Nitro Version: `1.0.0-27809308.dc3383b` - Package Manager: `[email]` - Builder: `vite` - User Config: `extends`, `unocss` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug When I extend the my private npm package theme-config and it has custom server endpoints -- I get a an error saying `defineEventHandler is not defined`. ### Additional context Looking further into the `index.mjs` ``` js import { eventHandler, setHeaders, sendRedirect…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6261 · V-calendar
- **Principles**: P-G4, P-E3 · **Env**: nuxt, vue
- **Signals**: 👍0 💬8 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment yarn add v-calendar@user ### Reproduction yarn add v-calendar@user ### Describe the bug I`m use [this]([link]) component My plugin v-calendar.client.ts ``` import { Calendar, DatePicker, SetupCalendar } from 'v-calendar'; import 'v-calendar/dist/style.css'; export default defineNuxtPlugin(nuxtApp => { nuxtApp.vueApp.use(SetupCalendar, {}); // Use the components nuxtApp.vueApp.component('Calendar', Calendar); nuxtApp.vueApp.component('DatePicker', DatePicker); }); ``` Use component v-calendar on my page ``` <date-picker v-model="form.date" mode="date"> <template v-slot="{…

### CASE-6279 · asyncData is missing the `query` object on nuxt generate
- **Principles**: P-G4, P-E3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce This is the [source]([link]) for the demo. When the project is generated into a static build using `NODE_ENV=production npx nuxt generate`, the `query` object is missing from the `asyncData` method. In the example provided, it expects to capture `?value=123` and put the `123` in the input element. This works during development but not once it's build to a static site. Working demo here: [link] The object is entirely missing from the context argument. ### What is expected ? To have `query` injected as…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6264 · memory leak with `useHead`
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍5 💬8 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Netlify lambda ### Reproduction [link] -> Bridge [link] -> Nuxt3 1) create a netlify site for each 2) take a peek at function/server log 3) hit some random slugs to generate pages via on demand builder (e.g.: your-netlify-handle.netlify.app/1, your-netlify-hande.netlify.app/2 ### Describe the bug Nuxt3 is better than bridge, but it seems like there is some sort of memory leak. Lambda's memory keeps raising every time you invoke a new web page (already invoked ones are cached via on demand builders). In a big website we've made with bridge, lambda crashes every once in a while…

### CASE-6281 · upgrade nuxt.js from v.1.4.5 to v2.4.5 and the setInterval problem
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### What problem does this feature solve? The purpose of this issue is mostly to document my issue and help people in the future tackle the situation by documentation and/or suggestions. I had a project on v1.4.5 for a while and tried to upgrade to v2.4.5. Upon doing this my `nuxt generate` hung with the following warning ``` ╭─────────────────────────────────────────────────────────────────────────────────╮ │ │ │ ⚠ Nuxt Warning │ │ │ │ The command 'nuxt generate' finished but did not exit after 5s │ │ This is most likely not caused by a bug in Nuxt.js │ │ Make sure to cleanup all timers and…

### CASE-6284 · memory leak in asyncData on client-side
- **Principles**: P-F5, P-H3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: <!-- 🚨 IMPORTANT 🚨 Please use the following link to create a new issue: - 🚨 Bug report - [link] - 🙋 Feature request - [link] - ❗️ All other issues - [link] If your issue was not created using the app above, **it will be closed immediately**. --> ### index.vue ```vue <template> <section class="container"> <nuxt-link to="/test">test</nuxt-link> </section> </template> <script> import Logo from '~/components/Logo.vue' export default { components: { Logo }, async asyncData() { return {} } } </script> ``` ### test.vue ```vue <template> <div> <h1>test</h1> <nuxt-link to="/">home</nuxt-link>…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6272 · Relative URLs in CSS are converted to absolute even when build.publicPath is relative
- **Principles**: P-B1, P-B2, P-B3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: pending triage/2.x
- **Excerpt**: ### Versions - nuxt: 2.15.7 - node: v14.17.0 ### Reproduction 1. Reference a resource, e.g. a font using a relative URL in your CSS, e.g. ``` @user { font-family: "Open Sans"; font-style: normal; font-display: swap; font-weight: bold; src: url("./Open_Sans-700-latin20.woff2") format("woff2"); } ``` 2. Set up your site for static hosting (i.e. nuxt.config `target: 'static'`) 3. Use a relative path in nuxt.config's build.publicPath: ``` build: { publicPath: "./_nuxt" } ``` 4. Run `nuxt generate` 5. Upload your `dist/` directory to a subdirectory in a web server, e.g. [link] 6. Observe the the…

### CASE-6293 · [css-loader] Problem with static files
- **Principles**: P-B1, P-B2, P-B3 · **Env**: nuxt
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: Hi, I have a code: ``` @user { font-family: icomoon; src: url('/fonts/icomoon/icomoon.woff2') format('woff2'); font-weight: normal; font-style: normal; } ``` After I updated Nuxt from 0.10.6 to rc5 I got an error:(before update it works) ``` in…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6296 · Nuxt.js program in Linux memory overflow problem
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, linux, ubuntu, nuxt
- **Signals**: 👍0 💬8 · closed · labels: question/2.x
- **Excerpt**: I used Nuxt.js to build my blog application, deployed in linux, the memory used is too high. My server using ubuntu operating system, 1g memory, I use pm2 persistent node application. I deploy my project every time, you can see the memory is normal, about 80m or so, After a period of time, the memory will soar to more than 500m, the final memory overflow, resulting in server crashes, When I found that memory usage up to 90% of the time, I kill off the nuxt process, pm2 immediately restart it, then returned to normal I am curious, why is my memory usage going up all the time? [my nuxt.js…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-6297 · 'scrollToTop' not working
- **Principles**: P-D4, P-F1, P-F5 · **Env**: vue, nuxt
- **Signals**: 👍0 💬8 · closed · labels: 2.x
- **Excerpt**: When navigating between the pages it seems to always maintain the same position as before. I've set 'scrollToTop: true' for all pages (even though that is done by default), and for my dynamic page that loads data from the vuex store. The router setup looks as follows ```js export default new Router({ mode: 'history', base: '/', linkActiveClass: 'nuxt-link-active', scrollBehavior, routes: [ { path: "/", component: _628e917c, name: "index" }, { path: "/studio", component: _e2b616c8, name: "studio" }, { path: "/contact", component: _2afe8d6c, name: "contact" }, { path: "/:projects/:slug?",…

