# Case Chunk 048 — Round 48

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5701 · document `getSSRProps` for directives
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: unspecified
- **Signals**: 👍7 💬24 · closed · labels: 📚 documentation/3.x
- **Excerpt**: I believe the documentation is missing something or there is a bug about getSSRProps: [link] When I copy the content and paste it into `/plugins/focus.ts` or `/plugins/focus.client.ts` (in a project without any directives just with pages) I get the same getSSRProps missing error as anyone above - but the besides the error, it seems to work on most mounted elements. (To check, the `.focus()` changed to `.style.color = 'green'` did its job) _Originally posted by @user in [link] framework].js[ref]

### CASE-5716 · Unhandled error during execution of scheduler flush related to NuxtPage, useAsyncData & refs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍10 💬22 · closed · labels: 3.x/🐛 bug/upstream/🔨 p3-minor/suspense
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.12.1 - Nuxt Version: 3.6.1 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction Reproduction : [link] Steps to reproduce: 1. In a page file, retrieve data using `useAsyncData` and display an array of elements in the template using this data. 2. Assign the array of elements to a ref variable as described in the Vue.js documentation: [link] 3. Display this page in a browser. 4.…

### CASE-5734 · global.URL is missing
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍9 💬20 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Accessing URL object like `new URL('[link]);` anywhere in server side code. ### What is expected ? URL object is accessible globally in server side since it is defined as global interface in node.js. [link] ### What is actually happening? Accessing URL object in server side code causes "ReferenceError URL is not defined". ### Additional comments? It had been accessible before and including v2.3.4. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a…

### CASE-5752 · Usefetch does not return data on full reload of page in docker, but returns data when pages are navigated
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, typescript
- **Signals**: 👍0 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v20.13.1 - Nuxt Version: 3.11.2 - CLI Version: 3.11.1 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: devtools, typescript, devServer, runtimeConfig, modules, shadcn, build, alias, imports, piniaPersistedstate, radash, hooks, routeRules - Runtime Modules: @user/[email], [email], [email], @user/[email], @user/[email], [email] - Build Modules: - ### Reproduction version: '3.8' services: node: build: context: ./docker/node #Needed for bash scripts to access environment variables env_file: - .env volumes: -…

### CASE-5755 · Environment Variable Incorrectly Cast as Number Instead of String inside runtime config
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, nuxt
- **Signals**: 👍9 💬18 · open · labels: workaround available/upstream/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.13.0` - Nuxt Version: `3.8.2` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction - Open your project's .env file. If it doesn't exist, create one in the root directory of your Nuxt.js project. - Add a new environment variable with the specific value 4848e0. Format it as follows: ```makefile NUXT_MY_VAR=4848e0 ``` - Open the nuxt.config.js file in your project. - Add the environment variable to the Nuxt…

### CASE-5761 · Dynamic Components with resolveComponent(variableName) results in Vue warning and not rendering the component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍0 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I try to create dynamic components. for reference I used this nuxt 3 documentation: [link] The component name that is also the filename comes from a variable. When passing that variable into the `resolveComponent` function, the component doesn't get rendered. Instead I get a vue warning: > [Vue warn]: Failed to resolve component: BaseBar > If…

### CASE-5777 · process is not defined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt
- **Signals**: 👍1 💬17 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.7.0]([link]) ### Reproduction link [[link] framework].js/releases/tag/v2.7.0]([link] framework].js/releases/tag/v2.7.0) ### Steps to reproduce - `npm up` to upgrade to nuxt 2.7.0 - have `"@user/dotenv": "^1.3.0",` as dep in your project - have `require('dotenv').config();` in your `nuxt.config.js` file try to use `process.env` variables in your nuxt.config.js, and it'll throw a error ### What is expected ? Ability to access .env variables inside the nuxt app ### What is actually happening? Nuxt app breaks down squawking about the `process` error ### Additional comments?…

### CASE-5794 · Sass Variables not available in pages / layouts / components
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬16 · closed · labels: ✨ enhancement/3.x
- **Excerpt**: ### Environment Nuxt project info: 22:39:51 ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27375427.d07d572` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `components`, `meta`, `css` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction I am trying to load sass from `assets/sass/global.sass`. Add the file and fill it with: ```sass @user "colors" @user "colors" as c body background-color: c.$secondary ``` Add a partical sass file `_colors.sass` and fill it with: ```sass $primary:…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5702 · production build issue with `date-fns`
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬24 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.6-27668034.5232c1b` - Package Manager: `[email]` - Builder: `vite` - User Config: `buildModules`, `modules`, `intlify`, `css`, `colorMode`, `build`, `publicRuntimeConfig`, `meta` - Runtime Modules: `@user/[email]` - Build Modules: `@user/[email]`, `@user/[email]` ### Reproduction [link] [link] This repo is not working when deployed to Netlify [link] ### Describe the bug I have a Nuxt site deployed to Netlify but for over 2 weeks the site can't be reached because it says the following: <img…

### CASE-5704 · mismatching versions of `ohash` lead to hydration failures
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍4 💬23 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v22.11.0` - Nuxt Version: `3.16.0` - CLI Version: `3.23.0` - Nitro Version: `2.11.6` - Package Manager: `[email]` - Builder: `-` - User Config: `vite`, `delayHydration`, `seo`, `site`, `sitemap`, `robots`, `schemaOrg`, `image`, `experimental`, `build`, `compatibilityDate`, `devtools`, `nitro`, `routeRules`, `turnstile`, `runtimeConfig`, `modules`, `app`, `css`, `postcss` - Runtime Modules: `@user/[email]`, `[email]`, `@user/[email]`, `@user/[email]-beta.3`, `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]` - Build…

### CASE-5705 · No error stack trace outside Nuxt context
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍11 💬23 · closed · labels: pending triage/nitro/possible regression
- **Excerpt**: ### Environment In version 3.14.1592 there is no error stack trace. In version 3.13 it was still there. ![Image]([link]) ### Reproduction 1. Expand the project 2. Create a file where to create an error 3. Include the file in app.vue This is reproduced here [link] ### Describe the bug There should be an error message and a stack, but in reality there is only a message. ### Additional context _No response_ ### Logs ```shell-script ERROR [nuxt] [request error] [unhandled] [500] Cannot read properties of undefined (reading 'document') ERROR [nuxt] [request error] [unhandled] [500] [nuxt] A…

### CASE-5706 · Use useCookie to modify the value in one component, but the value in other components is not modified
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍14 💬23 · closed · labels: workaround available/🐛 bug/❗ p4-important/possible regression
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v20.9.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - ### Reproduction When running on my device, the value of useCookie can be modified correctly when I run 'npm run dev', only when I run 'npm run generate', the value of useCookie will not be updated. But in this website, even if I just run 'npm run dev', the value of useCookie will not be updated [link] ### Describe the bug ![image]([link] framework]/assets/74284785/f0c277b6-7f31-4cf7-9eb6-9b3ee2d7dfe9) ### Additional…

### CASE-5708 · Non-relative paths are not allowed when 'baseUrl' is not set. Typescript v5.2.2
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, windows, typescript, nuxt, vite
- **Signals**: 👍8 💬23 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.15.0 - Nuxt Version: 3.7.1 - CLI Version: 3.8.3 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: ssr, modules, ionic, vite - Runtime Modules: @user/[email], [email] - Build Modules: - ### Reproduction Upgrade nuxt project to use `[email]` ### Describe the bug Since upgrading to `[email]` I get the following error in the self-generated `tsconfig.json` ![image]([link] framework]/assets/34715541/4a8e2bc8-674b-4eb7-9755-5ce9bb92855c) ```json { "extends": "./.nuxt/tsconfig.json" } ``` ### Additional…

### CASE-5713 · HMR error when use top level await in page？
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍6 💬22 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ``` ------------------------------ - Operating System: Linux - Node Version: v20.12.1 - Nuxt Version: 4.1.2 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: ssr, compatibilityDate, devtools - Runtime Modules: - - Build Modules: - ------------------------------ ``` ### Reproduction [link] ### Describe the bug <img width="1288" height="766" alt="Image" src="[link] /> I’m seeing an error when I edit code in a page that uses a top-level await in the <script setup>. (I’ve attached a screenshot from when the error occurs after…

### CASE-5714 · Development server keeps trying to reach localhost:24678 which doesn't exist
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vue
- **Signals**: 👍8 💬22 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment Nuxt project info: 1:31:40 AM ------------------------------ - Operating System: Windows_NT - Node Version: v20.10.0 - Nuxt Version: 3.11.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: srcDir, serverDir, devtools, css, extends, modules, app, nitro, routeRules, runtimeConfig, image, vue, experimental, fontMetrics, features, vueEmail - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], notivue/nuxt, [email], @user/[email] - Build Modules: -…

### CASE-5717 · Nuxt Installation failed
- **Principles**: P-A3, P-H1 · **Env**: macos, nuxt
- **Signals**: 👍0 💬22 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment macOS Monterey Macbook Air M2 (2022) Node.js v18.13.0 ### Reproduction No production is required I guess. ### Describe the bug Recently I tried to install nuxt, but got an error on installation command `npm install`. Something wrong with the nuxt's package.json . **error message:** No "exports" main defined in ....../node_modules/nuxt/package.json <img width="1470" alt="Screenshot 2023-03-23 at 12 02 00 AM" src="[link]> ### Additional context _No response_ ### Logs _No response_

### CASE-5724 · always some troubles with watch, parcel now that
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍0 💬21 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment bun latest ### Reproduction n/a ### Describe the bug Restarting Nuxt due to error: Error: EINVAL: invalid argument, watch '/home//test/node_modules/nitropack/dist/presets/_nitro/runtime/nitro-dev.mjs' fatal error: all goroutines are asleep - deadlock! goroutine 1 [chan receive]: github.com/evanw/esbuild/internal/helpers.(*ThreadSafeWaitGroup).Wait(...) ### Additional context in dev ![Image]([link])

### CASE-5729 · Need better way to logs error on Server Error page?
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍5 💬21 · closed · labels: question/2.x
- **Excerpt**: All I get is the below image, nothing else. How can I know what went wrong? ![screen shot 2017-11-08 at 2 55 01 pm]([link]) The following is my setup. ```js const cors = require('cors')({ origin: true }) const express = require('express') const functions = require('firebase-functions') const fs = require('fs') const path = require('path') const { Nuxt } = require('nuxt') const nuxtDir = path.resolve('.', 'nuxt') if (fs.existsSync(nuxtDir)) { console.log('Nuxt directory exists.', nuxtDir) } else { console.error('Nuxt directory does not exists.', nuxtDir) } const app = express() const nuxt =…

### CASE-5737 · RangeError: Maximum call stack size exceeded
- **Principles**: P-A3, P-H1, P-F4 · **Env**: nuxt
- **Signals**: 👍1 💬20 · closed · labels: 2.x
- **Excerpt**: I have tested a lot. when I use **asyncData** in my page，visit the page about 20k times (render in SSR). ![image]([link]) the error blow occurred, please help. ![image]([link]) The source code is here ![image]([link]) <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1201">#c1201</a>)</em></sub></div>

### CASE-5740 · Nuxt Layers + Npm Workspaces(Monorepo) Doesn't work only in Dev Mode
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍0 💬19 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v19.3.0` - Nuxt Version: `3.8.0` - CLI Version: `3.9.1` - Nitro Version: `2.7.2` - Package Manager: `[email]` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Here is my monorepo structure: <img width="297" alt="image" src="[link] framework]/assets/29376592/7a1f6640-6b7b-4f63-aa0e-62adce755b01"> I created a monorepo with npm workspaces and extended apps in the portal(main app) thanks to nuxt layers. Everything works as expected in production mode but not in…

### CASE-5741 · /user/ redirect to /user
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍0 💬19 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.15.0 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: runtimeConfig, modules, image, sitemap, jsoneditor, colorMode, css, routeRules - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], [email], [email], @user/[email]-rc.1-28164352.ad7c010 - Build Modules: - ------------------------------ ### Reproduction Not now ### Describe the bug After updating to nuxt 3 3.6.5 from 3.5.* trailingSlash removed. Is there any way to…

### CASE-5742 · Nitro externalized package has incorrect main entry point
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍7 💬19 · closed · labels: 3.x/🐛 bug/nitro/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v18.7.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules` - Runtime Modules: `@user/[email]-27657146.da85542` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug When using `jsonwebtoken` with `@user/image` which both depend on `semver` package, on the build step nitro tries to use the latest version. In the server bundle `main` entry of semver's package.json points to `index.js` but the index file is…

### CASE-5744 · Slow nuxt startup when importing sass file
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍8 💬19 · closed · labels: 3.x/pending triage/🛠️ dx/⚡ performance
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.14.0` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `css` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug I am using Bulma CSS with Nuxt app. When I `@user 'node_modules/bulma/bulma.sass';` in my `'@/assets/main.scss'` file. the nuxt startup becomes too slow. It takes around 20-60 seconds for vite client and server to warm up. ![image]([link]) Currently I have app running with `[email]-27460489.53fbca7` without this issue. ### Additional…

### CASE-5745 · Generated image urls for files in the public directory result in 404's when running the built server.
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍13 💬19 · closed · labels: 3.x/🐛 bug/bundler:vite/upstream
- **Excerpt**: ### Environment #### Local: ------------------------------ - Operating System: `Darwin` - Node Version: `v17.0.1` - Nuxt Version: `3.0.0-27303148.ac98373` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `publicRuntimeConfig`, `meta` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ #### Remote (Slightly older version of nuxt but still has the same problem): ------------------------------ - Operating System: `Linux` - Node Version: `v17.0.1` - Nuxt Version: `3.0.0-27294839.7e5e50b` - Package Manager: `[email]` - Bundler: `Vite` - User Config:…

### CASE-5751 · v4 Types not working in Layers
- **Principles**: P-A3, P-H1 · **Env**: nuxt, vue
- **Signals**: 👍11 💬18 · closed · labels: types/pending triage/layers
- **Excerpt**: ### Environment Nuxt 4.0.1 ### Reproduction [link] Download reproduction (Layer minimal example), and npm install. Check types in `layer1/nuxt.config.ts` or `layer/pages/layer.vue` ### Describe the bug I am not getting any types support when using layers in v4 in vscode (stackbliz is partially working) <img width="532" height="209" alt="Image" src="[link] /> ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-5756 · Getting a new XSRF-Token using useRequestHeaders after updating to Nuxt 3.8.0
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, tailwind
- **Signals**: 👍9 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.6.1` - Nuxt Version: `3.8.0` - CLI Version: `3.9.1` - Nitro Version: `2.7.0` - Package Manager: `[email]` - Builder: `-` - User Config: `modules`, `extends`, `imports`, `colorMode`, `devtools`, `app`, `runtimeConfig`, `routeRules`, `content`, `i18n`, `image`, `googleFonts`, `tailwindcss` - Runtime Modules: `@user/[email]-28293701.a8279d1`, `@user/[email]`, `@user/[email]-rc.5`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction As one needs a working Laravel API as backend to reproduce this, I cannot really…

### CASE-5764 · [nuxt cli, windows 10] Not able to run new project
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬17 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Windows_NT` - Node Version: `v22.16.0` - Nuxt Version: `4.0.0` - CLI Version: `3.26.2` - Nitro Version: `2.12.0` - Package Manager: `[email]` - Builder: `-` - User Config: `compatibilityDate`, `devtools` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction <img width="580" height="771" alt="Image" src="[link] /> ### Describe the bug When opening the client there is an error **Client** <img width="1275" height="428" alt="Image" src="[link] /> **Server** <img width="1066" height="598" alt="Image" src="[link] /> ### Additional context _No response_…

### CASE-5765 · 403 Forbidden
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera, nuxt, typescript
- **Signals**: 👍1 💬17 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v23.10.0` - Nuxt Version: `3.16.2` - CLI Version: `3.24.1` - Nitro Version: `2.11.8` - Package Manager: `[email]` - Builder: `-` - User Config: `extends`, `modules`, `ssr`, `devtools`, `app`, `ui`, `runtimeConfig`, `routeRules`, `sourcemap`, `future`, `compatibilityDate`, `nitro`, `typescript`, `telemetry`, `eslint`, `icon`, `image`, `plausible`, `pwa`, `security`, `turnstile` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `@user/motion/[email]`, `@user/[email]`, `@user/[email]`, `@user/[email]`,…

### CASE-5766 · JS chunks return 404 after every deployment
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt
- **Signals**: 👍0 💬17 · closed · labels: pending triage/needs reproduction/possible regression
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v22.12.0` - Nuxt Version: `3.15.3` - CLI Version: `3.22.5` - Nitro Version: `2.11.6` - Package Manager: `[email]` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction No reproduction ### Describe the bug After every deployment, the website stops working. No refresh or anything works unless I do a hard refresh. The website loads partially and nothing works in this situation. The website is behind Cloudflare but there is no caching in place. <img width="463" alt="Image" src="[link] /> ###…

### CASE-5767 · Nuxt 3.13.2: nuxt generate build hydration completed but contains mismatches errors
- **Principles**: P-A3, P-H1, P-F4 · **Env**: nuxt, tailwind
- **Signals**: 👍1 💬17 · closed · labels: pending triage/possible regression
- **Excerpt**: I develop a website that runs with Nuxt 3.13.2, DaisyUI and TailwindCSS with bunch of nuxt modules, kindly please check the package.json details below: ``` { "name": "the-website", "private": true, "type": "module", "scripts": { "build": "nuxt build", "dev": "nuxt dev", "generate": "nuxt generate --modern", "preview": "nuxt preview", "postinstall": "nuxt prepare" }, "dependencies": { "@user/image": "^1.8.1", "@user/google-fonts": "^3.2.0", "@user/i18n": "^8.3.3", "@user/seo": "^2.0.0-rc.15", "@user/tailwindcss": "^6.12.0", "@user/nuxt": "^4.13.2", "@user/yup": "^4.13.2", "@user/core":…

### CASE-5768 · warning about 'Calling 'useRoute' within middleware may lead to misleading results' when it is in the '<script setup>' of the SFC component
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, nuxt, vue, vite
- **Signals**: 👍1 💬17 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v22.8.0 - Nuxt Version: 3.13.1 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: compatibilityDate, devServer, devtools, srcDir, imports, modules, pinia, eslint, vueQuery, site, sitemap, ogImage, schemaOrg, features, sourcemap, build, vite, experimental, runtimeConfig - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email], @user/[email]-rc.21 - Build Modules: - ### Reproduction ```bash git clone [link] && cd open-tbm git checkout…

### CASE-5770 · NuxtPage doesn`t work in Nuxt 3.7.3
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, tailwind, vue, vite
- **Signals**: 👍3 💬17 · closed · labels: 3.x/🐛 bug/❗ p4-important
- **Excerpt**: ### Environment `------------------------------ - Operating System: Darwin - Node Version: v19.9.0 - Nuxt Version: 3.7.3 - CLI Version: 3.8.3 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: experimental, runtimeConfig, app, dev, debug, telemetry, css, plugins, modules, tailwindcss, image, imports, vue, vite - Runtime Modules: @user/[email], @user/[email], [email], @user/[email]-rc.2-28244125.e6e72be, @user/[email] - Build Modules: - ------------------------------ 👉 Report an issue: [link] framework]/issues/new 5:33:40 PM 👉 Suggest an improvement: [link]…

### CASE-5771 · [request error] [unhandled] [500] fetch failed
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬17 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.5.0` - Nuxt Version: `3.6.5` - Nitro Version: `2.5.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `devtools`, `modules`, `routeRules`, `colorMode`, `runtimeConfig`, `app`, `imports`, `i18n`, `content`, `image`, `veeValidate`, `ui`, `googleFonts` - Runtime Modules: `@user/[email]`, `@user/[email]-beta.13`, `@user/[email]`, `@user/[email]-rc.1`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Create a routeRule like this: ``` export default defineNuxtConfig({ routeRules: { '/api/v1/**': {…

### CASE-5772 · `run` is extremely slow after upgrade 3.5.1 from 3.5.0 with Window Os
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍8 💬17 · closed · labels: 3.x/workaround available/pending triage/🐛 bug/platform:windows
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v16.14.0 - Nuxt Version: 3.5.1 - Nitro Version: 2.4.1 - Package Manager: [email] - Builder: vite - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction none ### Describe the bug `run` is very slow after upgrading to v3.5.1 from v3.5.0. I tried it with `Window` and `Mac` both and only with `Window` os gets slow after upgrading to nuxt v3.5.1. ![image]([link] framework]/assets/77711322/81a644fe-c2c5-4d91-b3c7-8446da5f1688) ![image]([link]…

### CASE-5784 · Drastic increase in build and warm up times when upgrading to 3.9.0
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍1 💬16 · closed · labels: 3.x/pending triage/bundler:vite/upstream/needs reproduction
- **Excerpt**: ### Environment ``` - Operating System: Windows_NT - Node Version: v18.18.2 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: telemetry, experimental, devtools, components, app, nitro, imports, vite, css, modules, pinia, image, proxy, runtimeConfig - Runtime Modules: @user/[email], @user/[email], [email], @user/[email], @user/[email] - Build Modules: - ``` ### Reproduction I tried, but it does not really show with an empty project 🤔 3.8.2 [link] 3.9.0 [link] ### Describe the bug My (large) project: 3.8.2: ![image]([link]…

### CASE-5787 · Cannot add template inside `pages:extend` hook
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: pending triage
- **Excerpt**: ### Environment Stackblitz ### Reproduction [link] ### Describe the bug Template added inside `extendPages` is not generated. ![image]([link] framework]/assets/73709188/040b22cd-c475-467b-bd71-4877ebb330dd) As you can see from the image, the templates have already been generated before the `pages:extend` hook is called. ### Additional context _No response_ ### Logs _No response_

### CASE-5795 · [worker] definePageMeta is not defined
- **Principles**: P-A3, P-H1 · **Env**: opera, nuxt, vite
- **Signals**: 👍0 💬16 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-27385496.7a1cf62` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `head`, `css`, `build` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction [link] ### Describe the bug Instructions from official Nuxt3 tutorial can't be executed ![image]([link]) ### Additional context Check out this topic: [link] Any of flows: 1. Having 'pages' folder and no lock.json/node_modules -> installing -> running (after clone) 2. Having 'pages' folder, deleting lock.json/node_modules -> installing ->…

### CASE-5796 · Nuxt 2.7.0 raises ERROR The "path" argument must be of type string. Received type undefined
- **Principles**: P-A3, P-H1 · **Env**: nuxt, typescript
- **Signals**: 👍0 💬16 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ## Off-topic I cannot access [link] It does not work for me at all. <img width="1041" alt="Снимок экрана 2019-05-14 в 17 47 05" src="[link]> That's why I post it as-is. ## On topic I try to upgrade to the latest `Nuxt`, I use [link] ``` » npm run dev > [email] dev /Users/sobolev/Documents/github/timeless_is > cross-env NODE_ENV=development nuxt ╭─────────────────────────────────────────────╮ │ │ │ Nuxt.js v2.7.0 │ │ Running in development mode (universal) │ │ TypeScript support is enabled │ │ │ │ Listening on: [link] │ │ │ ╰─────────────────────────────────────────────╯ ℹ Preparing project…

### CASE-5798 · How to package the CSS file into a separate file
- **Principles**: P-A3, P-H1 · **Env**: nuxt
- **Signals**: 👍4 💬16 · closed · labels: question/2.x
- **Excerpt**: ![image]([link]) ![image]([link]) the above configuration does not take effect <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c1366">#c1366</a>)</em></sub></div>

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5703 · Build fails with `Unexpected character #` in `node-fetch-native`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍23 💬24 · closed · labels: 2.x/🐛 bug/❗ p4-important
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt-edge: 2.16.0-27720022.54e852f - node: v16.17.0 ### Reproduction <!-- Link to a minimal test case based on…

### CASE-5707 · Workaround for rollup dependency (FreeBSD)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, linux, nuxt
- **Signals**: 👍0 💬23 · closed · labels: pending triage/upstream
- **Excerpt**: ### Environment FreeBSD 13.2-RELEASE ### Reproduction npx nuxi@user init <project-name> ### Describe the bug Unexpected dependency. I've been using Nuxt on FreeBSD without this error and look to find workarounds e.g. is @user/wasm-node a viable option, and how to do that? ### Additional context ``` ERROR Your current platform "freebsd" and architecture "x64" combination is not yet supported by the native Rollup build. Please use the WASM build "@user/wasm-node" instead. The following platform-architecture combinations are supported: android-arm android-arm64 darwin-arm64 darwin-x64 linux-arm…

### CASE-5712 · HMR does not pick up updates to data
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, linux, nuxt, vite
- **Signals**: 👍0 💬23 · closed · labels: 3.x/workaround available/🛠️ dx/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment Running on WSL but have had the same issue in a containerized application.. Tested in latest Firefox and Chrome with identical results. Nuxt CLI v3.0.0-27288761.d3fb512 RootDir: ... Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-27288761.d3fb512` - Package Manager: `[email]` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ![repro]([link]) ### Describe the bug Updated data is not picked up by HMR. Updating the…

### CASE-5721 · [edge] html minify issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍3 💬22 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [edge]([link] framework].js/releases/tag/edge) ### Reproduction link [[link]]([link]) ### Steps to reproduce See [link] framework].js[ref][ref] ### What is expected ? HTML minify work fine. ### What is actually happening? It report error. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c7197">#c7197</a>)</em></sub></div>

### CASE-5727 · nuxt-edge latest crashes during build when used as express middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt
- **Signals**: 👍0 💬21 · closed · labels: pending triage/2.x
- **Excerpt**: cmty.app is not available (crashes) and times out, so, I'm leaving the issue here Problem: Nuxt fails to compile code when run as express middleware. What is expected: That it compiles and runs the code as it used to with version `2.0.0-25564786.b4d81dc`. What does it do: It fails to compile, please see error message below I have been using nuxt-edge for several months, updating to the latest version as it becomes available, but the last few versions have brought in a bug. The last version that everything compiles with is `2.0.0-25564786.b4d81dc`. If I install this version then without making…

### CASE-5730 · `entryImportMap` Failed to find a valid digest in the integrity attribute
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, safari, nuxt
- **Signals**: 👍19 💬20 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ------------------------------ - Nuxt Version: 4.1.2 ------------------------------ ### Reproduction - ### Describe the bug Failed to find a valid digest in the 'integrity' attribute for resource '[link] with computed SHA-384 integrity 'xBIudfkVkGKemQ5krLETsP8rpyEg97VDA7HctIzgdnTtoaRvTl6oYE5iCrzfVY5W'. The resource has been blocked. Uncaught (in promise) TypeError: Failed to fetch dynamically imported module: [link] ### Additional context After deployment of a website, I received these errors in the console. Out of Firefox, Chrome, Safari, Brave, the Brave browser was the only…

### CASE-5748 · NUXT takes a long time to build (up to 6 minutes!)
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: edge, nuxt, vue, react
- **Signals**: 👍0 💬19 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce The moment I start importing my template to NUXT, the build process (npm run dev ) start slowing down from 5s up to 6 minutes! which makes it impossible to use! I tried separating the code (Header, Body and Footer) with less than 500 lines in each vue component but that did not help with the build process. I also have tried the new build nuxt-edge without luck, same behavior. ### What is expected ? faster build times, it should not take more than few seconds to build. I'm using the same theme with react…

### CASE-5749 · [edge] nuxt generate error with mini-css-extract-plugin
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, nuxt, vue, webpack, desktop
- **Signals**: 👍0 💬19 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [2.0]([link] framework].js/releases/tag/2.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce npm uninstall nuxt npm i --save nuxt-edge npm run generate ``` /Users/dev/Desktop/antilophia-vue/node_modules/mini-css-extract-plugin/dist/index.js:26 const { Template, util: { createHash } } = _webpack2.default; ^ TypeError: Cannot destructure property `createHash` of 'undefined' or 'null'. at Object.<anonymous> (/Users/developer2/Desktop/antilophia-vue/node_modules/mini-css-extract-plugin/dist/index.js:26:44) at Module._compile (module.js:649:30) at…

### CASE-5758 · How can I set headers for resources in the public folder?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, nuxt, vite
- **Signals**: 👍1 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Darwin - Node Version: v18.16.1 - Nuxt Version: 3.6.2 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: devtools, modules, css, app, routeRules, security, vite - Runtime Modules: @user/[email], @user/[email], [email] - Build Modules: - ------------------------------ ### Reproduction / ### Describe the bug Hello! I have a nuxt 3 app and when a certain 'boot' button is clicked a synth.worker.js file is loaded from my nuxt public folder. However, the file is not being loaded, in google chrome dev…

### CASE-5780 · Help Needed : Loading order incorrect with prefetch and preload, delayed boot time
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, nuxt
- **Signals**: 👍0 💬17 · closed · labels: 2.x
- **Excerpt**: Hey there. While i'm globally satisfied with Nuxt performance, I'm always trying to achieve a quicker first display for the user. I noticed quite a delay when coming with a slow network connexion, so I tried to analyse the asset loading using google chrome. here is my discoveries : ![waterfall]([link]) and the Associated DOM <img width="769" alt="capture d ecran 2017-09-21 a 14 12 56" src="[link]> This is the loading waterfall called just after a request made to a "profession" page, served through SSR. You can see the loading order has a few faults : - Vendor, app and manifest are loading…

### CASE-5789 · Error on using postcss
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, nuxt
- **Signals**: 👍0 💬16 · closed · labels: 2.x/🐛 bug/bundler:webpack
- **Excerpt**: ### Environment System: OS: Windows 10 10.0.19044 CPU: (8) x64 Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz Memory: 690.30 MB / 15.78 GB Binaries: Node: 16.15.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.23.0-20220130.1630 - ~\AppData\Roaming\npm\yarn.CMD npm: 8.11.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (108.0.1462.76) Internet Explorer: 11.0.19041.1566 ### Reproduction - ### Describe the bug This bug happened in the first installation of "nuxt": "^2.15.8" project, also in my old projects after reinstalling the packages. I tried several different…

### CASE-5797 · Is there a way to control the nuxt cache when deploying?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: nuxt, vue, webview
- **Signals**: 👍11 💬16 · closed · labels: 2.x
- **Excerpt**: Hi. When using Nuxt, I ask questions. When I distribute the site that I have built, it is not working properly due to a cache problem. There are two cases below. Is there any way to solve them? 1. If built, the file names of js and css will be renamed to hash values, but it was not reflected by viewing old cache in browser. 2. Create applications using vue-native webview The webview in the application looked up the old cache. To apply the changed js, css, how do I remove the cache from the past? I would appreciate it if you could show me how to clearly manage the cache. <!--cmty--> <div…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5709 · Cannot find package @user/shared
- **Principles**: P-F4 · **Env**: windows, linux, nuxt
- **Signals**: 👍0 💬23 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment CentOS 7 nodejs-16.20.2 [email] ### Reproduction Unable to reproduce ### Describe the bug My project has been upgraded from nuxt3.3 to 3.65. I have no problem debugging and starting index.mjs in windows, but the following exception will be thrown whenever I visit the home page on the Linux server ``` [nuxt] [request error] [unhandled] [500] Cannot find package '@user/shared' imported from /root/mqingmo/.output/server/node_modules/@user/ssr/dist/index.mjs at new NodeError (node:internal/errors:387:5) at packageResolve (node:internal/modules/esm/resolve:852:9) at moduleResolve…

### CASE-5710 · Body is unusable (undici)
- **Principles**: P-F4 · **Env**: opera, nuxt, vite, typescript, tailwind
- **Signals**: 👍21 💬23 · closed · labels: 3.x/workaround available/upstream
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v18.13.0` - Nuxt Version: `3.2.0` - Nitro Version: `2.2.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `modules`, `ssr`, `tailwindcss`, `css`, `build`, `runtimeConfig`, `vite`, `hooks` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Sorry about this section, I have this error on different Nuxt 3 repositories with nothing much in common. Maybe just the tailwind module but that's it. I can not always reproduce it, however I observe a specific…

### CASE-5718 · [Vue warn]: Hydration node mismatch:
- **Principles**: P-F4 · **Env**: opera, linux, vue, nuxt, vite
- **Signals**: 👍1 💬26 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Node Version: `v14.18.1` - Nuxt Version: `3.0.0-27243104.5e903ae` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `meta`, `buildModules` - Runtime Modules: `-` - Build Modules: `[email]` ------------------------------ ### Describe the bug A warning occurs in console when i add a `@user` attribute in html tag ``` [Vue warn]: Hydration node mismatch: - Client vnode: i - Server rendered DOM: <svg xmlns="[link] width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"…

### CASE-5719 · Wrong layoutName
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍5 💬22 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.13.0]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Go to an error page (ex: [link]), open your debug console, click on home link, see wrong layout. Do hard refresh (F5), layoutName is good now (SSR ok)... It can be related to [link] framework].js[ref], [link] framework].js[ref].... ### What is expected ? layoutName should be : `front` ### What is actually happening? layoutName value is: `default`, it displays `default` layout instead of `front` layout ### Additional comments? I use layoutName in order to stylize, it's a very big issue which break all…

### CASE-5720 · Trackback for errors during SSR shows "Missing stack frames"
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍5 💬22 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.10.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Just open the reproduction link... OR 1. Cause an error in a component which means the SSR of a page will fail (see example) 2. Navigate to the dev server URL fresh (i.e. not open already) 3. You see the following error page, but the stack trace says "Missing stack frames" and some of the file names and line numbers are not showing correctly either 4. Looking at the terminal too, the information emitted does not give any reference to a line number either ![SSR Fail 2.png]([link])…

### CASE-5723 · Nuxt upgrade from 3.17.5 to 3.17.6 causing 500 "Unable to find global scope" with plugins
- **Principles**: P-F4 · **Env**: opera, linux, ios, nuxt
- **Signals**: 👍16 💬21 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.19.3 - Nuxt Version: 3.17.6 - CLI Version: 3.25.1 - Nitro Version: 2.11.13 - Package Manager: [email] - Builder: - - User Config: - - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Upgrading a Nuxt project from 3.17.5 to 3.17.6 is causing plugin / SSR issues - e.g. for swagger-client "Unable to find global scope" (reproduction above is just creating a plugin and importing the package) also got errors from axios plugin - but im…

### CASE-5725 · WARN [nuxt] Expected @user/schema to be at least 3.12.2 but got 3.11.2
- **Principles**: P-F4 · **Env**: opera, nuxt, vue, vite, typescript
- **Signals**: 👍1 💬21 · closed · labels: pending triage/needs reproduction
- **Excerpt**: ### Environment ``` Nuxt project info: (copied to clipboard) 12:34:33 PM ------------------------------ - Operating System: Darwin - Node Version: v20.14.0 - Nuxt Version: 3.12.2 - CLI Version: 3.12.0 - Nitro Version: 2.9.6 - Package Manager: [email] - Builder: - - User Config: ssr, app, telemetry, experimental, build, modules, dir, components, vueuse, runtimeConfig, css, vite, nitro, routeRules, typescript, hooks, devtools, testUtils, imports - Runtime Modules: @user/test-utils/[email], @user/[email], @user/[email], @user/[email], @user/[email], @/modules/iconica, @/modules/fontagon,…

### CASE-5726 · Vite SSR dev bundler transpile error by using firebase-admin sdk
- **Principles**: P-F4 · **Env**: opera, vite, nuxt
- **Signals**: 👍4 💬21 · closed · labels: 3.x/pending triage/bundler:vite
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.13.0` - Nuxt Version: `3.0.0-rc.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Use the firebase-admin sdk with latest version of nuxt rc1: [link] ### Describe the bug This bug seems to be related to this fix: [link] ### Additional context _No response_ ### Logs ```shell [nuxt] [request error] Cannot read properties of undefined (reading 'SDK_VERSION') at $id_9d001d45…

### CASE-5732 · Nuxt3 Entry.js tagName.toLowerCase() Error
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍3 💬20 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v18.18.2 - Nuxt Version: 3.7.4 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: - - User Config: ssr, nitro, devtools, modules, plugins, app, build, vite, runtimeConfig, site, sitemap, robots - Runtime Modules: @user/[email], @user/[email], [email], [email] - Build Modules: - ### Reproduction Sorry, I can't share code due to corporate law. :) ### Describe the bug When I go to the home page of my website for no reason, I get this error and that's why some of my components are not loaded. When I look at…

### CASE-5735 · [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside, or missing . Bailing hydration and performing full client-side render.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vue, nuxt
- **Signals**: 👍0 💬20 · closed · labels: 2.x
- **Excerpt**: | 0down votefavorite | [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside, or missing . Bailing hydration and performing full client-side render. -- | -- | -- ``` <template lang="pug"> div header h1 project news line nav nuxt-link(to='/') home nuxt-link(to='/about') about nuxt-link(to='/contacts') call me .wrapper form(@user="postMesseage") section.container md-input-container label With label md-input(placeholder='Head', v-model="name", type='text', )…

### CASE-5739 · SSR in Netlify not workin after upgrading to v3.14.1592
- **Principles**: P-F4 · **Env**: opera, linux, nuxt
- **Signals**: 👍4 💬19 · closed · labels: pending triage/nitro/upstream/possible regression
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v20.18.0 - Nuxt Version: 3.14.1592 - CLI Version: 3.16.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [v3.14]([link]) [v3.13]([link]) ### Describe the bug Server shows blank page after upgrading to nuxt 3.14 [v3.14]([link]) [v3.13]([link]) ### Additional context _No response_ ### Logs ```shell-script ```

### CASE-5743 · 'nuxt dev' breaks on a fresh install with ssr: false
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍16 💬19 · closed · labels: 3.x/🐛 bug/nitro/platform:windows
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.13.1` - Nuxt Version: `3.0.0-rc.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug `nuxt dev` is looking for `.nuxt/dist/server/server.mjs` which does not get created when `ssr: false` is on, so it crashes. Workaround: - remove `ssr: false` - run `nuxt dev` - be happy its working (server.mjs got created) - add `ssr: false` again - `nuxt dev` is still…

### CASE-5750 · Nuxt 4.4.7 node-server output packages incomplete [email]
- **Principles**: P-F4 · **Env**: nuxt
- **Signals**: 👍17 💬18 · closed · labels: pending triage/❗ p4-important/possible regression
- **Excerpt**: ### Environment - Nuxt version: `4.4.7` - Nitro preset: `node-server` - Package manager: `[email]` - Runtime: Node `v22.22.3` - Deployment: built on server, run with `node .output/server/index.mjs` via PM2 ### Describe the bug - [link] After upgrading to Nuxt `4.4.7`, the production server build completes successfully, but the deployed app returns a runtime 500 on SSR requests. Runtime error: ```text Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/home/stir-project/htdocs/releases/20260602185622/.output/server/node_modules/unhead/dist/server.mjs' imported from…

### CASE-5753 · Fetch.mjs not automatically generating by Nuxt 3 when running npm run dev
- **Principles**: P-F4 · **Env**: opera, nuxt, vue, tailwind
- **Signals**: 👍0 💬18 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v20.7.0` - Nuxt Version: `3.10.0` - CLI Version: `3.10.0` - Nitro Version: `2.8.1` - Package Manager: `[email]` - Builder: `-` - User Config: `devtools`, `css`, `build`, `modules`, `primevue`, `googleFonts`, `runtimeConfig`, `tailwindcss`, `ssr`, `app`, `vue`, `postcss`, `alias` - Runtime Modules: `@user/[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction I believe minimal reproduction not necessary (let me know if not!) ### Describe the bug Receiving the following error despite updating to Nuxt 3 and…

### CASE-5754 · Problem with TypeScript module imports from pages within a multi-module Nuxt.js application (maybe ts alias problem 🤷‍♂️)
- **Principles**: P-F4 · **Env**: opera, windows, typescript, nuxt, vite
- **Signals**: 👍0 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.18.0 - Nuxt Version: 3.9.1 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: css, app, ssr, runtimeConfig, modules, imports, vite, nitro - Runtime Modules: @user/[email], @user/[email], @user/[email]-beta.13 - Build Modules: - ### Reproduction [codesandbox.io/p/devbox/eloquent-chatelet-gdvcy3]([link]) --- Unfortunately, due to confidential elements of the project, providing a public repository is not possible. However, I'll guide you on creating a simplified reproduction…

### CASE-5759 · Missing "./server-renderer" specifier in "vue" package
- **Principles**: P-F4 · **Env**: opera, vue, nuxt, vite, typescript
- **Signals**: 👍5 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v14.18.1` - Nuxt Version: `3.2.1` - Nitro Version: `2.2.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `typescript`, `modules`, `build`, `runtimeConfig`, `pwa`, `imports` - Runtime Modules: `@user/[email]`, `@user/[email]`, `@user/[email]`, `[email]` - Build Modules: `-` ### Reproduction run `yarn build` command ### Describe the bug Getting "Missing "./server-renderer" specifier in "vue" package" on build process ### Additional context Everything is fine on Nuxt 3.1.1. Started to get the error on 3.2.0 and 3.2.1…

### CASE-5760 · Dynamic routes break when deploying built nuxt 3 app (boiler plate)
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, vue
- **Signals**: 👍1 💬18 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.11` - Nitro Version: `0.5.4` - Package Manager: `[email]` - Builder: `vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction I created a boiler plate nuxt 3 project like so: `npx nuxi init test-build` `cd test-build` `npm i` I then made a few small changes. In nuxt.config.js, I added: `ssr: false` I also added a pages folder, with a structure like so: `pages/products/[id].vue` Inside that file, I put:…

### CASE-5762 · create a component library
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍3 💬18 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.8.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce Right now it's not possible to create a library package for nuxt that utilizes all features like SSR, critical CSS injection and so on. I've created a demo repo to show how far I got and opened a question over here: [link] framework].js/issues/c9554. I would consider it as bug, but if it's more like a feature request, please change the request. I guess the right way to go would be find a way to load a Vue JSON Bundle ([link]) and allow a library to provide this json file. ### What is expected ? Let me…

### CASE-5763 · "#app/entry" is not defined in package when using nuxt 4.0.2 onwards
- **Principles**: P-F4 · **Env**: opera, macos, nuxt, vite
- **Signals**: 👍9 💬17 · closed · labels: 🍰 p2-nice-to-have/possible regression
- **Excerpt**: ### Environment Operating System: MacOS Node Version: v22.17.1 Nuxt Version: 4.0.3 ### Reproduction [link] ### Describe the bug When upgrading from nuxt 4.0.1 to 4.0.3 I noticed that a new error started appearing on the application start, after trying to change all the nuxt config I noticed the problem came from this vite configuration that we were using because of an issue while upgrading a previous version of nuxt as can be seen here: [link] framework][ref] ``` vite: { // Once vite/nitro/rollup fixes [link] framework][ref] we can remove the ssr: noExternal ssr: { noExternal: true, }, }, ```…

### CASE-5769 · With keepalive, page is not unmounted when layout is changed
- **Principles**: P-F4, P-F5, P-H3 · **Env**: opera, linux, nuxt, vue
- **Signals**: 👍13 💬17 · closed · labels: pending triage/pages/upstream/suspense
- **Excerpt**: ### Environment ------------------------------ - Operating System: Linux - Node Version: v18.18.0 - Nuxt Version: 3.10.3 - Vue Version: 3.4.9 - CLI Version: 3.10.1 - Nitro Version: 2.9.3 - Package Manager: [email] - Builder: - - User Config: ssr - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction I have created three times the almost same application: * two layouts: `DefaultLayout` and `CustomLayout` * two pages: `HomePage` and `TestPage` * Configured that `HomePage` uses the `DefaultLayout` and the `TestPage` the `CustomLayout` * Configured `keepalive` at…

### CASE-5773 · Cannot find 'node-fetch-native/dist/polyfill.mjs' with production build
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍4 💬17 · closed · labels: 3.x/workaround available/🐛 bug/nitro/upstream
- **Excerpt**: ### Environment Nuxi 3.0.0-rc.12-27729267.0640a6c ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.12-27729267.0640a6c` - Nitro Version: `0.5.4-27726613.640c2b7` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `app`, `css`, `buildModules`, `build`, `nitro`, `runtimeConfig` - Runtime Modules: `-` - Build Modules: `[email]` ------------------------------ ### Reproduction I can provide a reproduction if required ... but this seems to be happening on both rc-11, rc-12 and latest ... ### Describe the bug After…

### CASE-5774 · Cannot convert undefined or null to object in vue-server-renderer
- **Principles**: P-F4 · **Env**: vue, nuxt
- **Signals**: 👍11 💬17 · closed · labels: stale/pending triage/2.x
- **Excerpt**: <!-- 💚 Thanks for your time to make Nuxt better with your feedbacks 💚 **IMPORTANT** Before reporting a bug: - Please make sure that you have read through Nuxt.js documentation: [link] - If issue is related to a module please create the issue in corresponding repository - Ensure using latest version of nuxt dependencies using `yarn upgrade nuxt` or `npm upgrade nuxt` 👍 A properly detailed bug report can save a LOT of time and help fixing issues as soon as possible. --> ### Versions - nuxt: v2.14.7 - node: v10.21.0 ### Reproduction I have no idea how to reproduce this sadly, it just occurs…

### CASE-5779 · 'window is not defined' when importing ScrollMagic
- **Principles**: P-F4 · **Env**: nuxt, vue
- **Signals**: 👍0 💬17 · closed · labels: 2.x
- **Excerpt**: I am trying to import ScrollMagic, but receiving the much known `window is not defined`. As i understand i need to import the library as a plugin and switch off SSR, but unfortunately this is not working. `plugins/scrollmagic.js` ``` import ScrollMagic from 'scrollmagic' export default ScrollMagic ``` `nuxt.config.js` ``` plugins: [ { src: '~/plugins/scrollmagic', ssr: false } ], ``` `views/test-component.vue` ``` <script> import ScrollMagic from '~/plugins/scrollmagic' export default { } </script> ``` error: > [vue-router] Failed to resolve async component default: ReferenceError: window is…

### CASE-5781 · build static html
- **Principles**: P-F4 · **Env**: opera, macos, nuxt, vite
- **Signals**: 👍2 💬16 · closed · labels: pending triage
- **Excerpt**: ### Environment - Operating system macOS 24.0.0 - CPU Apple M1 Pro (8 cores) - Node.js version v20.19.5 - nuxt/cli version 3.31.3 - Package manager npm 10.8.2 - Nuxt version 4.2.2 - Nitro version 2.12.9 - Builder vite 7.3.0 - Config alias, app, compatibilityDate, css, devServer, devtools, hooks, i18n, modules, nitro, pages, plugins, postcss, runtimeConfig, ssr, vite - Modules @user/eslint 1.12.1, @user/hints 1.0.0-alpha.5, @user/scripts 0.13.2, @user/test-utils 3.21.0, @user/i18n 10.2.1, @user/nuxt 1.0.7, @user/nuxt 0.11.3, pinia-plugin-persistedstate/nuxt 4.7.1 ### Reproduction [link] ###…

### CASE-5782 · HMR broke in v3.18.0 when using TailwindCSS + Layers
- **Principles**: P-F4 · **Env**: opera, windows, tailwind, nuxt, vite, vue
- **Signals**: 👍7 💬16 · closed · labels: pending triage/layers
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v22.14.0 - Nuxt Version: 3.17.7 - CLI Version: 3.28.0 - Nitro Version: 2.12.6 - Package Manager: [email] - Builder: - - User Config: extends, telemetry, ssr, future, compatibilityDate, vite, css, devtools, experimental - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction [link] ### Describe the bug Steps to reproduce: 1. Clone repo 2. `pnpm i` 3. `pnpm dev` 4. Open `localhost:3000` 5. Open `AnalyticsGrid.vue`, and modify the file html. 6. HMR will not work 7. Change nuxt version to `3.17.7` 8.…

### CASE-5785 · Nuxt can't start the app in production on windows
- **Principles**: P-F4 · **Env**: opera, windows, nuxt
- **Signals**: 👍0 💬16 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment ------------------------------ - Operating System: Windows_NT - Node Version: v18.16.0 - Nuxt Version: 3.8.0 - CLI Version: 3.10.0 - Nitro Version: 2.7.2 - Package Manager: [email] - Builder: - - User Config: devtools - Runtime Modules: - - Build Modules: - ------------------------------ ### Reproduction 1. Create a new project using `npx nuxi@user init NuxtTest` (doesn't matter which package manager) 2. Build the app 3. Run the app 4. Go to localhost:3000 5. Receive error For reference: [link] ### Describe the bug There appears to be an issue with the `server-renderer` module…

### CASE-5786 · useSeoMeta doesn't change the source code of the page
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, typescript
- **Signals**: 👍0 💬16 · closed · labels: 3.x/🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Windows_NT - Node Version: v18.17.1 - Nuxt Version: 3.7.3 - CLI Version: 3.9.0 - Nitro Version: 2.6.3 - Package Manager: [email] - Builder: vite - User Config: srcDir, ssr, builder, vite, app, css, typescript, components - Runtime Modules: - - Build Modules: - ### Reproduction These reproductions are the same. If you are using stackblitz, make sure you open the reproduction in a new tab to be able to check the source code [link] [link] ### Describe the bug useSeoMeta and useHead composables are not changing the source code of the page. When the page loads,…

### CASE-5788 · Upgrading to nuxt 3.5.0 breaks router.js
- **Principles**: P-F4 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬16 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment - Operating System: `Darwin` - Node Version: `v16.19.0` - Nuxt Version: `3.4.3` - Nitro Version: `2.4.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `app`, `modules`, `ssr`, `css`, `unocss`, `build`, `runtimeConfig`, `sourcemap` - Runtime Modules: `[email]`, `@user/[email]`, `@user/[email]` - Build Modules: `-` ### Reproduction Upgrading the nuxt 3.4.3 to 3.5.0, changing in the package.json manually or doing the nuxi upgrade --force code. ### Describe the bug After making the upgrade and running pnpm run dev, the page breaks, showing these error: Uncaught…

### CASE-5790 · Static and SWR rendering not working
- **Principles**: P-F4 · **Env**: opera, linux, nuxt, vite, vue
- **Signals**: 👍0 💬16 · closed · labels: 3.x/🐛 bug/nitro/❗ p4-important
- **Excerpt**: ### Environment Nuxi 3.1.2 RootDir: /home/projects/nuxt-starter-nltug8 Nuxt project info: ------------------------------ - Operating System: `Linux` - Node Version: `v16.14.2` - Nuxt Version: `3.1.2` - Nitro Version: `2.1.1` - Package Manager: `[email]` - Builder: `vite` - User Config: `routeRules` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] ### Describe the bug I created 4 pages, each of them showing `new Date()`: * spa.vue * ssr.vue * static.vue * swr.vue I created the following routeRules: ``` export default defineNuxtConfig({…

### CASE-5791 · Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
- **Principles**: P-F4 · **Env**: opera, linux, ubuntu, nuxt, vite, vue
- **Signals**: 👍12 💬16 · closed · labels: 3.x/pending triage/needs reproduction
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Linux` - Description: Ubuntu 20.04.5 LTS - Release: 20.04 - Node Version: `v16.18.0` - Nuxt Version: `3.0.0` - Nitro Version: `1.0.0` - Package Manager: `[email]` - Builder: `vite` - User Config: `css`, `ssr`, `app`, `postcss` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction Created an error.vue page [like this]([link]) ``` <template> <div> <div class="container max-w-200"> <h1>{{ error.message }}</h1> There was an error 😱 <br /> <button @user="handleError">Clear error</button> <br…

### CASE-5792 · [nuxt] [request error] Directory import '...\.output\server\node_modules\@user\client\core' is not supported resolving ES modul es imported from ...\.output\server\chunks\server.mjs Did you mean to import @user/client/core/index.js?
- **Principles**: P-F4 · **Env**: opera, windows, nuxt, vite, desktop
- **Signals**: 👍2 💬16 · closed · labels: 3.x/pending triage
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-rc.3 14:35:02 RootDir: C:\Users\Ilya\Desktop\nuxt-app 14:35:06 Nuxt project info: 14:35:06 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.15.0` - Nuxt Version: `3.0.0-rc.3` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Reproduction [link] [link] yarn build yarn start ### Describe the bug Apollo Client doesnt work in a BUILD with SSR: true. In DEV or SSR off its ok. [nuxt] [request error] Directory import…

### CASE-5793 · setting `global` in `vite.define` breaks build
- **Principles**: P-F4 · **Env**: opera, vite, nuxt, typescript
- **Signals**: 👍0 💬16 · closed · labels: 3.x/upstream
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v16.14.2` - Nuxt Version: `3.0.0-rc.2` - Package Manager: `[email]` - Builder: `vite` - User Config: `ssr`, `runtimeConfig`, `typescript`, `css`, `buildModules`, `alias` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `@user/[email]` ------------------------------ ### Reproduction Simply set these settings, and execute `npx nuxi generate` or `nuxi build`. ```ts // nuxt.config.ts export default defineConfig({ // ... alias: { // ... './runtimeConfig': './runtimeConfig.browser', }, vite: { //…

### CASE-5799 · Analyze possible memory leaks
- **Principles**: P-F4, P-F5, P-H3 · **Env**: nuxt, vue
- **Signals**: 👍6 💬16 · closed · labels: good first issue/2.x
- **Excerpt**: As of some users are reporting memory leaks in their production environment, I've opened this issue trying to help investigate (possible?) memory leaks causing from Nuxt or SSR engine of vue.js. We may resolve problems before stable 1.0.0 release, but it needs users contribution to help to test different conditions and to provide reports & heap dumps. (Related to [ref] [ref] [ref] [ref]) # Testing Environment It may be better to create a new and clean repository to prevent side-effects of using third-party plugins such as lodash. (they may have memory leaks too) - **[Important]** Using…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5711 · assets in css include '__NUXT_BASE__' prefix in production build
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, nuxt, vite
- **Signals**: 👍1 💬23 · closed · labels: 3.x/🐛 bug/bundler:vite/❗ p4-important
- **Excerpt**: ### Environment ------------------------------ - Operating System: `Darwin` - Node Version: `v17.3.1` - Nuxt Version: `3.0.0-27375427.d07d572` - Package Manager: `[email]-rc.10` - Bundler: `Vite` - User Config: `publicRuntimeConfig`, `privateRuntimeConfig`, `buildModules`, `css`, `vite`, `unocss` - Runtime Modules: `-` - Build Modules: `@user/[email]`, `unplugin-icons/nuxt`, `@user/[email]` ------------------------------ ### Reproduction ... ### Describe the bug I suspect this may be related to nuxt/framework[ref]. It only affects `yarn build`. ``` css @user { font-family:…

### CASE-5736 · Preloading hashed, static assets with rel="preload"
- **Principles**: P-B1, P-B2, P-B3 · **Env**: nuxt
- **Signals**: 👍0 💬20 · closed · labels: 2.x
- **Excerpt**: Hey there, I wanted to add a `link` tag with `rel="preload"` for two fonts that I am using, so that the priority in which they are loaded is higher (especially when coming from a ServiceWorker, since they are currently prioritized as **lowest** — which slows down things). I added this to my `nuxt.config.js` inside the `link` array, where all other `link`s are: ``` { rel: 'preload', as: 'font', crossorigin: 'crossorigin', type: 'font/woff2', href: 'fonts/ApercuPro.woff2' } ``` The problem I am experiencing is that the preloaded font is now being loaded **twice**, once the hashed version, the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5715 · Pages are rendered outside the layout when page transitions are enabled
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, tailwind
- **Signals**: 👍0 💬22 · closed · labels: 3.x/workaround available/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v21.1.0 - Nuxt Version: 3.8.2 - CLI Version: 3.10.0 - Nitro Version: 2.8.1 - Package Manager: [email] - Builder: - - User Config: app, modules, build, plugins, directus, css, i18n, shadcn, tailwindcss, gsap - Runtime Modules: [email], @user/[email]-rc.7, @user/[email], [email], [email], @user/[email] - Build Modules: - ### Reproduction [link] ### Describe the bug This behavior appeared recently, when navigating from one page to another with page transitions enabled and a layout such as: ``` <AppNavbar /> <slot /> <AppFooter /> ```…

### CASE-5722 · Pre-transform error: Failed to resolve import "#app-manifest"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍0 💬21 · closed · labels: pending triage/possible regression
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v20.19.5` - Nuxt Version: `3.20.0` - CLI Version: `3.29.3` - Nitro Version: `2.12.9` - Package Manager: `[email]` - Builder: `-` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ### Reproduction i upgrade from 3.19.2 to 3.20.0 when i run dev throws this error [7:02:03] ERROR Pre-transform error: Failed to resolve import "#app-manifest" from "../../node_modules/nuxt/dist/app/composables/manifest.js?v=d10770aa". Does the file exist? Plugin: vite:import-analysis File:…

### CASE-5731 · Layout Transitions break scroll position on route change and browser forward/back
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, nuxt
- **Signals**: 👍7 💬20 · closed · labels: 🐛 bug/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Darwin - Node Version: v20.10.0 - Nuxt Version: 3.13.1 - CLI Version: 3.13.1 - Nitro Version: 2.9.7 - Package Manager: [email] - Builder: - - User Config: app, compatibilityDate, devtools - Runtime Modules: - - Build Modules: - Affects every single version of Nuxt 3 – this has never worked. In Nuxt 2 it was perfect. ### Reproduction [link] ### Describe the bug Layout transitions are not retaining correct scroll position. Page transitions do. Navigate from the about page to the home page here, the home page is already partially scrolled: [link] I can provide…

### CASE-5733 · Nuxt3 - Transition appear Flag not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, nuxt, vite
- **Signals**: 👍1 💬20 · closed · labels: 3.x/🐛 bug/upstream
- **Excerpt**: ### Environment - Operating System: `Linux` - Node Version: `v16.17.0` - Nuxt Version: `3.0.0-rc.8` - Package Manager: `[email]` - Builder: `vite` - User Config: `modules` - Runtime Modules: `@user/[email]` - Build Modules: `-` ### Reproduction **Repo** [link] **Live Sample** [link] ### Describe the bug As mentioned in discussion [ref] there is an issue with the appear flag in the using transition, transition group and page transition. In the live sample you'll see that the first load the page doesn't appear. If you navigate you'll see the fade out/in transition between pages working as…

### CASE-5738 · vite dep optimisation not working for aliases within `.c12` layer
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, vite, nuxt
- **Signals**: 👍0 💬19 · closed · labels: workaround available/pending triage/bundler:vite/upstream
- **Excerpt**: ## Environment Nuxt 3.15.4 - Windows 11 ## Reproduction See [link] framework][ref][ref] ## Describe the bug Steps to reproduce: 1. Create an empty directory 2. `npm i erudit` — this will install my layer as dependency 3. Run `npx erudit-cli dev` (or `build`) It will prepare the directory (create `.erudit/[meta framework].config.ts` file) and call `nuxi` to launch the Nuxt Layer. Then it creates error messages (but the site is still available): ``` ERROR Pre-transform error: [@user/compiler-sfc] Failed to resolve import source "@user/scripts/preview/display". 17:11:59…

### CASE-5776 · Layout transitions (layoutTransition) javascript hooks
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, nuxt
- **Signals**: 👍8 💬17 · closed · labels: ✨ enhancement/2.x
- **Excerpt**: ### What problem does this feature solve? When I change route page and new page has another layout, I need vue transition hooks, to detect and handle it (in my case - I update store state in `beforeLeave`/`afterEnter` hooks) Vue transition hooks: [link] I tried write `transition`/`layoutTransition` inside layouts, but it doesn't work. UPD: tried in nuxt.config - same result ``` layoutTransition: { beforeEnter: function () { debugger } } ``` #### Nuxt version: 2.8.1 ### What does the proposed changes look like? Same what you did here: [link] framework].js[ref] But for layouts <!--cmty--> <div…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5728 · nuxt-link prevents correct native scaling of inline svg (also ignores other styling)
- **Principles**: P-A1, P-A4, P-G3 · **Env**: nuxt
- **Signals**: 👍1 💬21 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v1.4.0]([link] framework].js/releases/tag/v1.4.0) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Use an svg that stretches across the whole viewport width and scales with it. See the reproduction repo 2. Spin up project 3. Open browser window larger than 1680px wide 4. Click normal link to have expected behaviour 5. Click nuxt-link to have actual behaviour 6. Svg gets no longer scaled to viewport width (also background does no longer change?) ### What is expected ? ![2018-04-26 20.07.02.gif]([link]) ### What is actually happening? ![2018-04-26…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-5746 · Nuxt 3 - fresh install on Windows - cannot find module
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, windows, nuxt, vite
- **Signals**: 👍10 💬19 · closed · labels: 3.x/🐛 bug
- **Excerpt**: ### Environment Nuxt CLI v3.0.0-27243104.5e903ae 10:48:58 RootDir: c:\testing\nuxt3-app 10:49:00 Nuxt project info: 10:49:00 ------------------------------ - Operating System: `Windows_NT` - Node Version: `v16.11.1` - Nuxt Version: `3.0.0-27243104.5e903ae` - Package Manager: `Yarn` - Bundler: `Vite` - User Config: `-` - Runtime Modules: `-` - Build Modules: `-` ------------------------------ ### Describe the bug Nuxt CLI reports it cannot find module, the web page is stuck on "Starting nuxt..." with NuxtJS logo and light/dark mode flashing background. ### Reproduction Followed the New project…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5747 · Memory leak in dev mode using Vuetify
- **Principles**: P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬19 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.9.2]([link]) ### Steps to reproduce Just install dependencies and run yarn dev and open the URL in browser, Refresh the page couple of time, or wait for couple of seconds. The dev server should crash because of out of memory error. ### What is expected ? Just run it as dev, and wait for a couple of seconds. and also observe Memory use. After a couple of seconds of running the dev server, You'll see the following error: ``` <--- Last few GCs ---> io[3240:0x39a8ba0] 42966 ms: Mark-sweep 2048.2 (2066.7) -> 2047.0 (2069.7) MB, 1503.6 / 0.0 ms (+ 0.4 ms in 84 steps since start of…

### CASE-5757 · Deploys to netlify break after upgrading to 3.6.x
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, nuxt, vite, typescript
- **Signals**: 👍5 💬18 · closed · labels: 3.x/nitro/upstream
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.16.1 - Nuxt Version: 3.6.5 - Nitro Version: 2.5.2 - Package Manager: [email] - Builder: vite - User Config: components, modules, colorMode, googleFonts, build, typescript, vite - Runtime Modules: @user/[email], @user/[email], @user/[email], @user/[email]-rc.1-28164352.ad7c010, @user/[email], @user/[email] - Build Modules: - ### Reproduction [Repo with cleaned up branch]([link]) Branch `cleanup` is as far as I could make it while still reproducing the issue. ### Describe the bug When upgrading from Nuxt 3.5.3 to Nuxt 3.6.5 (also…

### CASE-5775 · nuxt memory leak
- **Principles**: P-F5, P-H3 · **Env**: nuxt, typescript
- **Signals**: 👍6 💬17 · closed · labels: stale/pending triage/2.x
- **Excerpt**: ### Version [v2.12.2]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. npx create-nuxt-app with typescript 2. docker-compose up -d 3. docker stats to display memory container is being used 4. use apache benchmark request to nuxt app with command ```ab -n 500 -c 5 -t 30 "[link] ### What is expected ? memory is free ### What is actually happening? after request memory is not free. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link]…

### CASE-5778 · How do i fix Nuxt Warning 'nuxt build finished but did not exit after 5s'?
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍3 💬17 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.6.3]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce i thinks it happen when migrate to nuxt 2.x version from any version ### What is expected ? not appearing ⚠ Nuxt Warning ### What is actually happening? ╭───────────────────────────╮ │ │ │ ⚠ Nuxt Warning │ │ │ │ The command 'nuxt build' finished but did not exit after 5s │ │ │ │ This is most likely not caused by a bug in Nuxt.js │ │ │ │ Make sure to cleanup all timers and listeners you or your │ │ plugins/modules start. │ │ Nuxt.js will now force exit │ │ │ │ DeprecationWarning: Starting with Nuxt…

### CASE-5800 · Memory leak
- **Principles**: P-F5, P-H3 · **Env**: nuxt
- **Signals**: 👍0 💬16 · closed · labels: 2.x
- **Excerpt**: when use loadtest -n 2000 [link] test the node server (run by pm2 start npm -i max --name "nuxt" -- start), i find Memory leak, by the static resource have worked on nginx server , for more time the node server droped. omg^^^^^^^ <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt.js</a> community (<a href="[link] framework].js/issues/c570">#c570</a>)</em></sub></div>

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5783 · ERROR [worker reload] [worker init] /home/luckyloo/WebstormProjects/SurfMarket/.nuxt/dev/index.mjs failed 11:42:28 AM
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, nuxt
- **Signals**: 👍1 💬16 · closed · labels: 🛠️ dx/nitro/🔨 p3-minor
- **Excerpt**: ### Environment - Operating System: Linux - Node Version: v18.1.0 - Nuxt Version: 3.14.159 - CLI Version: 3.15.0 - Nitro Version: 2.10.4 - Package Manager: [email] - Builder: - - User Config: default - Runtime Modules: - - Build Modules: - ### Reproduction ``` import bcrypt from 'bcrypt'; import { pool } from '~/server/db'; export default defineEventHandler(async (event) => { const { username, password } = await readBody(event); // Validate input if (!username || !password) { throw createError({ statusCode: 400, message: 'Username and password are required', }); } try { // Check if the…

