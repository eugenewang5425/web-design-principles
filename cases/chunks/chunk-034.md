# Case Chunk 034 — Round 34

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4301 · [🐞] MDX integration from "Qwik Website Guide" is not working
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When following the MDX Guide on [link] the steps are not working. ![image]([link]) ### Reproduction [link] ### Steps to reproduce Open stackblitz from URL and go to /mdx where the example is not working ### System Info ```shell Windows but also stackblitz ``` ### Additional Information _No response_

### CASE-4302 · [🐞] SWC Ecma Parser Fails on Linux but not in Windows or MacOS
- **Principles**: P-A3, P-H1 · **Env**: linux, windows, macos, vite, next.js
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug Vite Plugin Qwik build fails on Linux system but works on Windows and Mac I've been working on a big project migrating from Next.js to Qwik for the last two months. Now when I try to deploy it to Linux servers or to build Alpine/Debian Docker images always it fails with this error message: ![image]([link]) ``` [vite-plugin-qwik] unreachable error during build: RuntimeError: unreachable at smartstring::boxed::BoxedString::ensure_capacity::h34fc41b4d8557adf (wasm://wasm/008dd14e:wasm-function[2006]:0x17778b) at…

### CASE-4310 · [🐞] Issue with IntrinsicElements and no children
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍2 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hi there, we experience an issue with typescript types and can't solve it. We have polymorphic components with dangerouslySetInnerHTML and no children. #### In Version 0.102 With children and no dangerouslySetInnerHTML it is fine, with dangerouslySetInnerHTML only it breaks: <img width="1405" alt="image" src="[link]> ```tsx import type { QwikIntrinsicElements } from '@user.io/qwik'; import { component$, useStylesScoped$ } from '@user.io/qwik'; export default component$( <C extends keyof QwikIntrinsicElements>(props:…

### CASE-4313 · [🐞] JavaScript chunks from third party package cannot be referenced
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When I install my package `@user/qwik`, import it and start the dev server, the chunks referenced in HTML at SSR cannot be loaded. If I navigate client-side, the error does not occur anymore. <img width="861" src="[link]> Furthermore I noticed that if I edit the code in the `node_modules` directory of another package, e.g. `@user/headless`, and insert for example the following code, it can be loaded after restarting the server via the following URL. However, the same does not work for my package. ```js const Button2 = /* @user…

### CASE-4316 · [🐞] Odd render behavior
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬5 · closed · labels: needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm building a form library (inspired by Angular) and have run into a few issues. video: [link] repo: [link] In this example, first refresh the page (within blitzstack) and if you type into the field labeled "Option 0", you will see the hardcoded value "this_breaks!!" be replaced by the input fields value. After you refresh the page (within blitzstack), if you type in the field labeled "Age" first and then into the field labeled "Option 0", it does not replace the hardcoded value. I've been converting an ecommerce site to Qwik…

### CASE-4318 · [🐞]Debounced Input sample crash only if comes back from <Link />
- **Principles**: P-A3, P-H1, P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage/router
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When I use QuickCity with a sample copy paste component It only works if I open the page from url (for ex in my case [link] but if I navigate to the same component from a <Link /> it crashes ``` <Link href='/page6'>Page6</Link> ``` ![image]([link]) one can see it happens here [link] ### Reproduction [link] ### Steps to reproduce create a qwik app with 2 routes routes/index.tsx routes/test/index.tsx in routes/index.tsx route add a link to the page where is the Debounced Input component ex ``` <Link…

### CASE-4328 · [🐞] v2: vite-imagetools images events are not replaced
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug/runtime/V2/IMPORTANT
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I updated to the latest Qwik v2.0.0-beta.27 and noticed that `onClick$` and `onLoad$` handlers no longer work on images imported via `vite-imagetools`. The latest beta version that this worked was 2.0.0-beta.17. The Qwik Logo in the reproduction has an `onClick$` listener attached that should display an alert when clicked. Instead, the Qwik runtime/optimizer fails to replace the `onClick$` attribute and attach the event. ### Reproduction [link] ### Steps to reproduce 1. Clone repository ```sh git clone [link] ``` 2. Install…

### CASE-4329 · [🐞]Input file contains unsupported image format
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug I visited to site of qwik mfe example-[link] in which i am facing issue Input file contains unsupported image format.I cannot see output how qwik mfe is working ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell Browser ``` ### Additional Information _No response_

### CASE-4331 · [🐞] Module "node:module" has been externalized for browser compatibility. Cannot access "node:module.createRequire" in client code.
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬4 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Following this guide [link] got this error. Really nothing outside of what the guide says. Problem happens when you drag and drop something into the section. <img width="1720" height="986" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 15.5 CPU: (10) arm64 Apple M1 Max Memory: 133.81 MB / 64.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.5.0 - /opt/homebrew/bin/node Yarn: 1.22.22 - /opt/homebrew/bin/yarn npm: 11.5.1 - /opt/homebrew/bin/npm…

### CASE-4332 · [🐞] V2 - linting issue with ComputedSignal
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using ComputedSignal insidie $(..) scopes, linter errors. <img width="968" height="233" alt="Image" src="[link] /> ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell - ``` ### Additional Information _No response_

### CASE-4333 · [🐞] Deno Start doesn't work (broken hello world experience)
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug/good first issue/DX/PR welcomed
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug I ran `deno init --npm qwik@user`, choose current directory, Playground App, and git initialization, then got this... Result ────────────────────────────────────────────────╮ │ │ │ 🦄 Success! │ │ │ │ 🤍 Integrations? Add Netlify, Cloudflare, Tailwind... │ │ deno qwik add │ │ │ │ 📄 Relevant docs: │ │ [link] │ │ │ │ 💬 Questions? Start the conversation at: │ │ [link] │ │ [link] │ │ │ │ 👀 Presentations, Podcasts and Videos: │ │ [link] │ │ │ │ 🐰 Next steps: │ │ deno start │ │ │ │ │…

### CASE-4337 · [🐞] qwik add styled-vanilla-extract
- **Principles**: P-A3, P-H1 · **Env**: linux, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I tried to install qwik + install vanilla extract using the command provide in Docs it's not working ![image]([link]) ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 6.6 EndeavourOS CPU: (8) x64 Intel(R) Xeon(R) CPU E3-1270 V2 @ 3.50GHz Memory: 16.16 GB / 31.31 GB Container: Yes Shell: 0.101.0 - /usr/bin/nu Binaries: Node: 23.4.0 - /usr/bin/node npm: 11.0.0 - /usr/bin/npm pnpm: 10.0.0 - /usr/bin/pnpm bun: 1.1.38 - ~/.bun/bin/bun Browsers: Brave Browser:…

### CASE-4339 · [🐞] Can't build with bun
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug I want to build with bun. When I run `bun -b build` or `bun -b preview`, it builds fine, but I get an error when running the built app. ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. Create a qwik app via `bun create qwik@user` 2. Within the app directory run `bun -b preview` ### System Info ```shell System: OS: macOS 15.1 CPU: (11) arm64 Apple M3 Pro Memory: 214.89 MB / 36.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.17.0 - ~/.nvm/versions/node/v20.17.0/bin/node Yarn: 4.1.1 - ~/.volta/bin/yarn…

### CASE-4343 · [🐞] css 404 when vite base set
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug set base:"/book", [link] ![image]([link]]/assets/30745595/a3a10fd3-4b05-40b3-9fe7-706b9195bc64) ### Reproduction [[email]:lontten/d8.git]([link]) ### Steps to reproduce bun create qwik@user bun i set vite base "/book" bun run dev ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (12) x64 Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz Memory: 4.16 GB / 31.82 GB Binaries: Node: 20.12.2 - d:\Program Files\nodejs\node.EXE npm: 10.5.0 - d:\Program Files\nodejs\npm.CMD pnpm: 9.0.6 - d:\Program Files\nodejs\pnpm.CMD bun:…

### CASE-4347 · [🐞] Qwik development server is taking up 1 GB of memory
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug <img width="771" alt="2024-05-23 03_06_16-Task Manager - Brave" src="[link]]/assets/71614375/021ff2bd-2a67-4e23-857a-de5e63800a9c"> I have a simple site using Qwik, and when i run `pnpm dev` on my local machine. It will automatically take up 1GB of memory. I am still investigating whether this happens in production too. ### Reproduction null ### Steps to reproduce 1. Have a fair number of pnpm workspaces in your project. 2. Import/Reference them in your `www` and run `pnpm dev` ( you get all this imported into your console -…

### CASE-4352 · [🐞] Pass PropFunction to component does not work in onClick$ event
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I got a Class with some properties, one of then is `props.toast.action.onClick` this props is optional is totally typed. when i fire the toast, the `action.onClick` function is not apearing in the button that is render when the props is passed to the Toaster component: ### The trigger code: ![image]([link]) ## The Toaster component: ![image]([link]) > [!WARNING] > the `onMouseOver$` attribute is to show you that only the `onClick$` attr is not working. The attribute is not even in the html rendered ## HTML OUTPUT: > Notice…

### CASE-4353 · [🐞] When do client side navigation routeLoader$ works fine but its client side useRouteLoader return undefined
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍1 💬4 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug ![Untitled-2023-12-20-1552]([link]) I built an app structure like the image at the top, so when I do a hard refresh or use a simple < a> tag in my sidebar, the (useRouteLoader) in the client returns the data fine. but when I use < Link> tag to navigate the routeLoader server side it runs fine but on the client side of it (userouteLoader) it returns undefined ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 13.6.1 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz…

### CASE-4361 · [🐞] useSignal is not updating when I set it inside onResolved
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm using Context with a signal and a useResource in there, I use the context in my component and then The signal firstAuthor.value is empty even when I've changed it below, which means that is not working, or did I do something wrong? ![image]([link]) ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce `pnpm install` followed by `pnpm dev` ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 5.31 GB / 12.92 GB Binaries: Node:…

### CASE-4362 · [🐞] vite preview fails with vite template starters
- **Principles**: P-A3, P-H1 · **Env**: macos, vite, typescript
- **Signals**: 👍1 💬4 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I created a Qwik Typescript app with `pnpm create vite` the `preview` script doesn't work I have this error in the terminal `TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received null` from this piece of code <img width="1058" alt="Screenshot 2023-07-27 at 23 55 04" src="[link]> ### Reproduction [link] ### Steps to reproduce - run `pnpm create vite` in the terminal - create a Qwik application JS or TS - run `pnpm preview` ### System Info ```shell System: OS: macOS 13.4.1 CPU: (8)…

### CASE-4366 · [🐞] vite incorectly processes `import.meta.env` in examples
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug 1. This line: [link] 2. Generates: ![image]([link]) notice `({})` when it should be `import.meta.env` ### Reproduction [link] ### Steps to reproduce Navigate to: [link] See: ![image]([link]) notice `({})` when it should be `import.meta.env` ### System Info ```shell na ``` ### Additional Information _No response_

### CASE-4369 · [🐞] Refused to apply style from '<URL>' because its MIME type ('text/html') is not a supported stylesheet MIME type
- **Principles**: P-A3, P-H1 · **Env**: linux, tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using Tailwind and changing the folder structure of the initial template, that error appears but the app works well. ![image]([link]) ### Reproduction [link] ### Steps to reproduce To reproduce the error, you must change the name of a component, including its CSS styles, and then move it to another folder. When reloading or restarting the application, the error disappears. I believe it is a hot module replacement error when you mix css modules and tailwind . ### System Info ```shell System: OS: Linux 5.0 undefined CPU:…

### CASE-4381 · [🐞] custom slot props not working on production
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When I tried to make a custom slot by passing it as props it's works on dev but when run preview it doesn't work Run preview/build: <img width="489" alt="Screenshot 2023-01-19 at 2 18 49 PM" src="[link]> Run dev: <img width="488" alt="Screenshot 2023-01-19 at 2 18 20 PM" src="[link]> Notes: it was working before I upgrade to version 0.16.2 (before the upgrade I'm using 0.12.1) ### Reproduction [link] ### Steps to reproduce npm run preview / npm run build ### System Info ```shell System: OS: macOS 13.0 CPU: (8) arm64 Apple M1…

### CASE-4382 · [🐞] [plugin:vite:import-analysis] Failed to resolve import "@user" from "node_modules/@user.io/qwik-city/index.qwik.mjs?v=01f6ba50". Does the file exist?
- **Principles**: P-A3, P-H1 · **Env**: vite, tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug We are getting this error while using Qwik in Storybook, it seems that this `@user` isn't a package in the node_modules! This error happens with every component that uses Qwik city in the storybook. Any thoughts? ![image]([link]) ### Reproduction [link] ### Steps to reproduce - Clone the repo [link] - Go to the Qwik directory `qwik-graphql-tailwind` - Run `yarn` to install the packages - Run `yarn storybook` - Go to any story that uses Qwik city like `Header` or `Issues Tab View` ![image]([link]) Let me know if you…

### CASE-4387 · Css bundles are not preloaded
- **Principles**: P-A3, P-H1 · **Env**: opera, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) browser ### Node Version (if applicable) 16 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour Qwik should preload css bundles. Currently it does not preload them Current head tag for css: ```<link rel="stylesheet" href="/build/q-ee850e53.css">``` ### Actual Behaviour Should preload the css bundles as they are render blocking and can cause CLS issues if not preloaded ``` <link rel="preload" href="/build/q-47ef043c.css" as="style"> <link rel="stylesheet" href="/build/q-47ef043c.css"> ``` ### Additional…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4303 · [🐞] SSR Redirect (from Action) with Query Parameter doesn't work properly.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Hi there, thanks for checking this repro. I'm facing this issue where redirecting to the same page with query params inside a routeAction is not working. You can test this by changing the first select to "Redirect to same page" or "Redirect to test page" (where it works). PS: This is probably related to [link] Thanks! ### Reproduction [link] ### Steps to reproduce 1. npm run dev 2. Change the first select to "Redirect to same page" or "Redirect to test page" and submit to see the difference (also check console logs).…

### CASE-4305 · [🐞] `useServerData(key)` doesn't return anything after qwik-city navigation
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug `useServerData(key)` doesn't return the data after a qwik-city navigation, both in dev and preview ### Reproduction [link] ### Steps to reproduce - npm install - npm run start or npm run preview - on homepage, click on [`go to /serverdata using <Link href="/serverdata"/>`]([link]) or button **expectation:** shows serverData added in [entry.ssr.ts]([link]) **what happens:** no data is shown it does work on initial load or when using an `<a />` to do the navigation, ### System Info ```shell System: OS: macOS 13.4 CPU: (10) arm64…

### CASE-4315 · [🐞] Custom srcDir is not used with optimizer / vite plugins
- **Principles**: P-F4 · **Env**: vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Rollup / Qwik City / Vite plugin / Optimizer? ### Describe the bug When specifying a custom source directory, qwik city seems to find the routes, but qwik vite fails. I am setting the paths based on the configuration options: ```typescript qwikCity({ routesDir: './source/routes' }) qwikVite({ srcDir: './source' }) ``` Alongside the tsconfig: ```json5 { // ... "includes": ["source"] // ... } ``` Exact error thrown: ``` $ vite --open --mode ssr error when starting dev server: Error: Qwik srcDir "/home/projects/qwik-starter-hwtvkx/src" not found. at…

### CASE-4320 · Adaptor : Static build fail on windows
- **Principles**: P-F4, P-G4, P-E3 · **Env**: opera, windows, vite
- **Signals**: 👍1 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) win11 ### Node Version (if applicable) _No response_ ### Which component is affected? Starters / CLI ### Expected Behaviour not sure why the build fail because absolute path on windows...below are my static vite config ``` import { staticAdaptor } from '@user.io/qwik-city/adaptors/static/vite'; import { extendConfig } from '@user.io/qwik-city/vite'; import baseConfig from '../../vite.config'; export default extendConfig(baseConfig, () => { return { build: { ssr: true, rollupOptions: { input: ['@user'], }, }, plugins: [ staticAdaptor({…

### CASE-4341 · [🐞] Cannot read properties of null (reading 'useContext')
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug Hello There 👋🏾 I keep getting the error ```bash Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See [link] for tips about how to debug and fix this problem. Warning: Invalid hook call. Hooks can only be called inside of the body of a…

### CASE-4354 · [🐞] Context gets removed too eagerly
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When an app doesn't use context during SSR but uses it after resume, the context is not available ### Reproduction [link] ### Steps to reproduce Click the "crash" button. You'll see that the $context$ for the parent has not been filled in. ### System Info ```shell see playground, it crashes in all versions of qwik (for 1.1.5 you'll have to switch to production build) ``` ### Additional Information _No response_

### CASE-4357 · [🐞] Context+hidden slot breaks SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When SSR renders a child into a parent that doesn't render a Slot, it will not see the parent's context. On the client it's not a problem. ### Reproduction [link] ### Steps to reproduce - remove the second `open` in the playground. The context is now the one from the top parent - remove the first `open` in the playground. SSR will crash. ### System Info ```shell qwik v1.2.12 ``` ### Additional Information working on a fix playground code: ```tsx import { component$, useSignal, Slot, useContextProvider, useContext,…

### CASE-4365 · [🐞] Document head/title set from inside a component does not work in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I made quite significant progress in developing a big app with custom dynamic routing and then met an obstacle with setting document head/title/og-meta. Now I'm stuck and not sure what is better - write a custom qwik-city following [link] or dive into qwik-city source code. I created a separate repo demonstrating the problem, [link] - It has just a single route, `routes/[...path]/index.tsx`. - The root is wrapped with `HeadStore` component which defines a head context. Since it's the root-most, any other component has…

### CASE-4371 · [🐞]While run by adding lottie or Rive - Runtime error - "__vite_ssr_import_3__.useClientEffectQrl is not a function"
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug While adding lottie or Rive Runtime error - "__vite_ssr_import_3__.useClientEffectQrl is not a function" Error occurs Only above qwik version - 0.25.0 ### Reproduction npm install --save qwik-lottie ### Steps to reproduce Install Lottie / Rive 1.npm install --save qwik-lottie 2.Add the code import { component$, useStore } from '@user.io/qwik'; import { QwikLottie } from 'qwik-lottie'; export default component$(() => { const store = useStore({ options: { path: '[link] }, }); return ( <div> <QwikLottie options={store.options} />…

### CASE-4372 · [🐞]I used ant design with qwik,but it can't work
- **Principles**: P-F4 · **Env**: react, vite, mobile
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug 上午11:04:54 [vite] Error when evaluating SSR module D:/2023/qwik/qwik-app/src/routes/demo/ant/index.tsx: failed to import "/src/routes/demo/ant/ant.tsx" |- D:\2023\qwik\qwik-app\node_modules\antd-mobile\cjs\global\global.css:1 :root { ^ SyntaxError: Unexpected token ':' at Object.compileFunction (node:vm:352:18) at wrapSafe (node:internal/modules/cjs/loader:1031:15) at Module._compile (node:internal/modules/cjs/loader:1065:27) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10) at Module.load…

### CASE-4374 · [🐞] useOn does not work in dev mode
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am using the `useOn` hook in a component while running in dev mode (no SSR, using `vite --mode dev`). I expect it to work like normal/SSR mode and trigger the callback function when the event is triggered, but this doesn't happen. I notice that in SSR, where things work as expected, `on:click=...` gets added to the element, but in dev mode, there is no `on:click`. ### Reproduction [link] ### Steps to reproduce To see this work, run `npm run start` in the stackblitz. To see it break, run `vite --mode dev`. ### System Info…

### CASE-4384 · [🐞] React component hydrates even though it shouldn't
- **Principles**: P-F4 · **Env**: linux, react
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When conditionally rendering any component and passing an object prop to another react component the react component gets hydrated when it should not. ### Reproduction [link] ### Steps to reproduce Click Button 1 See Button 3 hydrate when it shoudn't. The props are not changing and Button 3 hasn't been clicked. ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 16.14.2 - /usr/local/bin/node Yarn: 1.22.19…

### CASE-4385 · [🐞] Async Signals not re-rendering SSR / Or, update signal docs to require await SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Signal changes *(that are observed)* do not trigger re-renders before SSR completes. This occurs **when signal changes happen asynchronously**. *`doSomething` returns a promise to `useServerMount$` allowing it to complete. But then, the signal **DOES** execute asynchronously before SSR completes. It seems this should trigger a re-render.* **If this is not a bug**, then signal documentation should be updated to always require an `await` in SSR contexts. ### Reproduction [link] ### Steps to reproduce See Stackblitz to add /…

### CASE-4396 · resource.state is stuck to pending after ssr
- **Principles**: P-F4 · **Env**: opera
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.0 ### Operating System (or Browser) Chorme 105 ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour `resource.state` should be `resolved` on page load ### Actual Behaviour `resource.state` is `pending` and never switches to `resolved` ### Additional Information I've created a repro here --> [link]

### CASE-4400 · [DOCS] useStyles SSR inaccuracy?
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: docs
- **Excerpt**: I'm reading the tutorial for styles and following along in the example DOM and I see that (as I would expect) components that use `useStyles` emit their style just in front of their DOM node. However, in [the text]([link]) it states that SSR puts the styles in head. This is incorrect, right? It's only when toggling the Child component, and inserting the Child's style into HEAD, that the Sibling's style also gets moved into HEAD.

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4304 · [🐞] Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function - Chrome 117
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 117, chrome
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Thanks: First, this is my fav framework. Lots more videos to come soon on YT. Issue: Just launched a Qwik instance on the new Chrome browser version 117 (Github url provided). No modifications have been made to the default installation. When checking the console on Chrom 117, I get the following errors on running in dev mode: Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function at isAllowedPropertyValue (lockdown-install.js:1:53384) at isAllowedProperty (lockdown-install.js:1:53807) at…

### CASE-4311 · [🐞] Production build downloads additional ~50kB
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Every project built with Qwik downloads 2 additional files (~50kB), even if it only contains simple text. ![obraz]([link]) ### Reproduction [link] ### Steps to reproduce 1. Download stackblitz project 2. Build and run 3. Check network tab ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5800X 8-Core Processor Memory: 18.29 GB / 31.93 GB Binaries: Node: 18.12.1 - ~\AppData\Local\pnpm\node.EXE npm: 8.19.2 - ~\AppData\Local\pnpm\npm.CMD Browsers: Edge: Spartan (44.22621.1413.0), Chromium…

### CASE-4317 · [🐞] Light mode code blocks
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome
- **Signals**: 👍1 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug ![Screen Shot 2023-02-07 at 9 14 12 PM]([link]) ### Reproduction [link] ### Steps to reproduce Use light mode and look at code block in the docs ### System Info ```shell Mac M1 in Chrome browser ``` ### Additional Information _No response_

### CASE-4321 · React Components and React Libraries doesn't work as expected sometimes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, react
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.0.111 ### Operating System (or Browser) Edge ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik React ### Expected Behaviour When using a simple component like Material UI Button, it's visible and clickable. But on click, it doesn't give any effect like it usually gives. ### Actual Behaviour On click, it doesn't give any effect. Also tried ```: client``` option, but still, UI doesn't update accordingly on :hover and :active events. ### Additional Information _No response_

### CASE-4322 · Qwik City: QWIK ERROR Cannot read `map` (Link with Resource Component )
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Windows 11 WSL2 (Google Chrome) ### Node Version (if applicable) v16.17.0 ### Which component is affected? Qwik City ### Expected Behaviour Should be able to switch pages and not return an error. ### Actual Behaviour Unable to switch to page (stuck) and returns error message in console: `QWIK ERROR Cannot read properties of undefined (reading 'map') TypeError: Cannot read properties of undefined (reading 'map')` ### Additional Information The Resource component has a problem mapping an array in onResolved, this problem occurs only when…

### CASE-4323 · Adding npm run qwik add qwik-react is breaking the app right now
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, react, vite
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Windows and Chrome ### Node Version (if applicable) 16+ ### Which component is affected? Qwik React ### Expected Behaviour ` npm run qwik add qwik-react` was working very well for me previously ### Actual Behaviour But now its giving the following error the moment I add this command ` npm run qwik add qwik-react` and everything crashes. ```bash 4:13:11 am [vite] Internal server error: module is not defined at /node_modules/react/index.js:2:0 at instantiateModule…

### CASE-4325 · The modified style cannot be hot updated. The service must be restarted
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, vite
- **Signals**: 👍2 💬5 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.107 ### Operating System (or Browser) Mac os chrome 104.0.5112.79 (arm64) ### Node Version (if applicable) v16.13.2 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour The modified style should be hot updated ### Actual Behaviour The modified style cannot be hot updated. The service must be restarted ### Additional Information _No response_

### CASE-4326 · [Bug] Failed to fetch dynamically imported module
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: opera, chrome, macos
- **Signals**: 👍3 💬5 · closed · labels: bug/runtime
- **Excerpt**: ### Qwik Version 0.0.29 ### Operating System (or Browser) macOs + Chrome ### Node Version (if applicable) v18.4.0 ### Which component is affected? Qwik City ### Expected Behaviour Application loads correctly the resources ### Actual Behaviour I run this [repo]([link]) with _npm run dev.ssr_ and works good with @user.io/qwik-city _"0.0.26"_ <img width="647" alt="Screenshot 2022-08-02 at 21 23 09" src="[link]> but if I upgrade to **"0.0.29"** I've got these errors in network chrome tab <img width="566" alt="Screenshot 2022-08-02 at 21 24 46" src="[link]> <img width="565" alt="Screenshot…

### CASE-4345 · [🐞] TextEncoderStream polyfill breaks resumability
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, ios
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In qwik-city 1.5.5 new [TextEncoderStream polyfill]([link]][ref]) was introduced. When deployed to Cloudflare useLexicalScope might return undefined for signals in some weird scenarios. Or qrls might stop working or anything else due to errors during resumability on client. I assume it occurs due to encoding issues, for example with new TextEncoderStream containers have `class="qc�"` when in 1.5.4 `class="qc📦"`. Some other symbols might also be corrupted, so qwik can't resume containers in edge cases. Issue might not be…

### CASE-4346 · [🐞] the Source wasn't match code
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬4 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug the Source wasn't match real code. ![image]([link]]/assets/27261522/66805e6d-8b07-46db-bd30-35ff13280d10) ### Reproduction [link] ### Steps to reproduce [link] ### System Info ```shell System: OS: macOS 14.1.1 CPU: (8) arm64 Apple M1 Memory: 88.52 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.1 - ~/.nvm/versions/node/v21.7.1/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.5.0 - ~/.nvm/versions/node/v21.7.1/bin/npm pnpm: 8.15.5 - ~/.nvm/versions/node/v21.7.1/bin/pnpm Browsers: Chrome: 125.0.6422.142 Safari: 17.1…

### CASE-4348 · [🐞] prisma integration
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug i am using prisma but it is not working ![image]([link]]/assets/55093625/fe5b414a-933b-4539-bbfa-7576c32a573b) ### Reproduction [link] ### Steps to reproduce npm run qwik add prisma npm run build ### System Info ```shell qwik chrome ``` ### Additional Information _No response_

### CASE-4349 · [🐞] Build static with custom origin protocol is broken
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug [THIS LINE]([link]) of code results in broken custom protocols in static builds. Fixing this is required for our CapacitorJS integration to support the custom protocol on iOS `capacitor://`. Currently it prefixes `[link] and then includes the protocol within the path. We should also figure out how to include a test case for this. 🤔 Cc: @user ### Reproduction [link] ### Steps to reproduce Build static with: ```ts import { staticAdapter } from '@user.io/qwik-city/adapters/static/vite'; import { extendConfig } from…

### CASE-4351 · [🐞] Signals don't trigger rerender with some problematic JSX markup
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I was randomly writing some edge case code (orphaned signals in this case) to see what happens when I first encountered this bug. Trying to reproduce the bug in the playground later revealed that this bug depends on the returned JSX markup. In the following reproduction, `app.tsx` exports two components `V1` and `V2`, which have different JSX markup (`V1`'s children are nested in extra `p`'s) but are otherwise the same. **Expected behavior**: apart from the visual differences (from not having extra `p`'s), both components…

### CASE-4358 · [🐞] Prefetched files with no-cache headers are re-fetched again
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I'm building my application for production and if I visit a Cloudflare Pages deployed application and sit there for a few seconds and then click a link, there's a moment of lag whilst it downloads the required bundle and executes it. Example of 200ms download by the SW after clicking a button: ![image]([link]) Here are the timings of the download: ![image]([link]) If I look at Cache Storage in chrome, I can see the code was already prefetched as expected: ![image]([link]) And if I look inside that cache entry I can see…

### CASE-4360 · [🐞] QwikLoader missing in Storybook
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍0 💬4 · closed · labels: bug/docs
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug it seems useVisibleTask$ not working (the code inside is not executed) but useTask$ is working ### Reproduction [link] ### Steps to reproduce pnpm install && pnpm dev ### System Info ```shell System: OS: macOS 13.0 CPU: (8) arm64 Apple M1 Memory: 38.41 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.17.0 - ~/.nvm/versions/node/v16.17.0/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v16.17.0/bin/yarn npm: 8.15.0 - ~/.nvm/versions/node/v16.17.0/bin/npm pnpm: 8.6.3 - ~/.nvm/versions/node/v16.17.0/bin/pnpm Browsers: Chrome:…

### CASE-4364 · [🐞]Qwik Sandbox 404 - [link]
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, ubuntu
- **Signals**: 👍2 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When you go to Qwik Sandbox the App tab shows a 404 error using Firefox. ![image]([link]) ### Reproduction [link] ### Steps to reproduce Click on Qwik Sandbox ### System Info ```shell Ubuntu, Firefox v115 ``` ### Additional Information _No response_

### CASE-4373 · [🐞] qwik rendering issue caused by chrome extension
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I came a across an issue where the chrome extension Dashlane (a password manager) prepends inputs with an element to assist with autocompleting, which causes some rendering issues. While I understand a 3rd party extension modifying the page isn't Qwik's fault. I wanted to bring it to your attention because there could be other extensions (related or unrelated to Dashlane) that do something similar and break the users page. ### Reproduction [link] ### Steps to reproduce I split the demo into 2 parts. First half is the bug…

### CASE-4380 · [🐞]useResource$() can't be used without <Resource /> else it Crash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug **UPDATE I try this in a new SlackBlitz and with Brave and Firefox in other machine and the error doesn't appear, tomorrow I will try in the _other laptop that has the problem_ to try to recreate the problem, until that please try it , or please ignore, sorry but I can't delete the issue** When I try in a naife way to use `useResource$()` without use `<Resource />` in same page it crashes **what I try to do is a request to a external api** to get one primitive value, and this response primitive is just to check if a token is…

### CASE-4386 · Drop Event Files List is always empty after optimized
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, safari
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Chrome / Safari (Mac) ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour On drop event, the `event.dataTransfer.files` should contain list of dropped files. Code: ```javascript import { component$ } from '@user.io/qwik'; export default component$(() => { return <div preventdefault:dragover preventdefault:drop onDrop$={event => console.log(event.dataTransfer.files.length)} >Drop File Here</div>; }); ``` ### Actual Behaviour The list is always empty (size = 0) ###…

### CASE-4388 · <Link/> inside of <Resource/>: QWIK ERROR can't access property "href", thing is undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, linux, typescript
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Mozilla Firefox Developer Edition for Arch Linux 107.0b9 (64bit) ### Node Version (if applicable) 19.0.1 ### Which component is affected? Qwik Runtime ### Expected Behaviour I expect Link to work. ### Actual Behaviour It doesn't work. Here is the error: [link] ### Additional Information ```typescript interface Stuff { href: string } export default component$(() => { const endpoint = useEndpoint<Stuff>() return <Resource value={endpoint} onResolved={(thing) => <Link href={thing.href}>Click me</Link>}/> }); export const onGet:…

### CASE-4389 · Uncaught (in promise) Error: close not found
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Chrome(Mac OS Ventura) ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour onChange$ = { <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange$={ (event) => { store.credentials.username = (event.target as HTMLInputElement).value; } } /> } Expecting the store value to be updated ### Actual Behaviour Uncaught (in promise) Error: close not found at findClose (virtual-element.js:286:11) at…

### CASE-4390 · Express Adaptor not working
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: opera, chrome, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) WSL2, Chrome ### Node Version (if applicable) 19.0.1 ### Which component is affected? Qwik City ### Expected Behaviour After adding the express server adaptor via "yarn qwik add" and "yarn build.server" and "yarn serve" should be successful. ### Actual Behaviour yarn run v1.22.4 $ vite build -c adaptors/express/vite.config.ts vite v3.2.1 building SSR bundle for production... ✓ 17 modules transformed. server/entry.express.mjs 9.37 KiB server/@user.mjs 9.52 KiB server/entry.ssr.mjs 2.81 KiB server/assets/index.qwik.75699133.mjs 5.36 KiB…

### CASE-4392 · Vite server proxy does not work with Qwik-city / Qwik plugins
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Chrome 106.0.5249.119 (Official Build) (arm64) ### Node Version (if applicable) v18.11.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour To enable same-origin cookies to an existing api backend, a proxy is necessary. All suggested techniques/workarounds have been tried without success. Please see [Discord Thread]([link]) summary. ### Actual Behaviour Proxy does not forward and same-origin is not possible. ### Additional Information Vite server proxy works **without** plugins: ``` export default…

### CASE-4393 · No netlify edge function deployed with default project
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: edge, opera, chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour a netlify edge function is deployed ### Actual Behaviour ![image]([link]) ### Additional Information There's no endpoint accessible/available after netlify deploy - adapter is installed

### CASE-4394 · MDX / SSR can't load a component?
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Mac / Chrome ### Node Version (if applicable) 16.15.0 ### Which component is affected? Qwik City ### Expected Behaviour I'd expect a component that uses a `useResource$` to be able to be rendered in MDX and use SSR. I took this example from the docs: [link] I created a `widgets` called `github` and tried to use it in an MDX file. ```mdx import Github from '../../widgets/github' Hello world! The goal of this doc is for it to have a component that uses `useResource$` to fetch some data. <Github/> ``` ### Actual Behaviour ``` failed to…

### CASE-4395 · useStylesScoped$ not working with interpolated strings
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: opera, chrome, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version v0.11.0 ### Operating System (or Browser) macOS (Brave, Chrome) ### Node Version (if applicable) 16.13.0 ### Which component is affected? Qwik Optimizer (rust) ### Expected Behaviour The program should compile correctly when using interpolated strings ### Actual Behaviour The program throws an error ``` [vite] Internal server error: Qrl($) scope is not a function, but it's capturing local identifiers: elevation ``` ### Additional Information Some context for debugging: I created a simple component like this ``` export const Button = component$() => { const theme =…

### CASE-4399 · "build.target = es2015" show "uncaught SyntaxError: Unexpected token 'export' (at service-worker.js:1:2509)"
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome 104
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) Mac os chrome 104.0.5112.79 (arm64) ### Node Version (if applicable) v16.13.2 ### Which component is affected? Qwik City ### Expected Behaviour No error reporting ### Actual Behaviour Uncaught SyntaxError: Unexpected token 'export' (at service-worker.js:1:2509)__ <img width="836" alt="image" src="[link]> ### Additional Information ```bash git clone [email]:lzxb/qwik-demo.git git checkout bugfix-service-worker yarn yarn preview ```

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-4306 · defaultPrevented is still false even after setting preventdefault:wheel to true on input element
- **Principles**: P-D4, P-F1, P-F5, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ```typescript <input type="number" name="amount" preventdefault:wheel={true} /> ``` I'm triying to disable the scroll wheel changing the number in an input number field. But defaultPrevented is still false even after setting preventdefault:wheel to true on input element How is preventdefault:wheel supposed to behave? Using `onWheel$` doesn't work either

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4307 · [🐞] [integrations, vitest] Test fails when use qwik city Form component
- **Principles**: P-G4, P-E3 · **Env**: windows, vite
- **Signals**: 👍1 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Unit Testing fails when you test a component with the qwik city Form component. ### Reproduction [link] ### Steps to reproduce - Create a qwik component. - Use the qwik city Form component inside your custom component. - Run the test (e.g. "Should have 2 inputs to email and password" ~ "Should have a form tag"). - Check the console errors. ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (12) x64 12th Gen Intel(R) Core(TM) i5-12450H Memory: 2.00 GB / 7.73 GB Binaries: Node: 18.16.0 -…

### CASE-4309 · [🐞] Using `globalAction$`/`routeAction$` on a `Form` element triggers page reload on submit
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I have a little "Newsletter Subscribe" Form that has a single email input field. On submit the `globalAction$`/`routeAction$` calls a fetch function (one with `GET`and one via `POST`) to subscribe the email to our newsletter list. Locally this is working fine, even with `npm run build && npm run deploy` with the express adapter. But once deployed to the production server the page reloads on submit. The origin is set in the `express/vite.config.ts` and i explicitly set `reloadDocument` to false. Here is the component:…

### CASE-4312 · [🐞] bind:value doesn't work with useTask$ on the same signal
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug **2-way binding seems to not work correctly** Changing the value of a signal in a `useTask$` that is used with`bind:value`, doesn't work. A common use case is clamping a number between a maximum and minimum value. For example, the useTask$ below won't run at all when editing the input value: ```tsx export default component$(() => { const signal = useSignal<string | undefined>(); useTask$(({ track }) => { // this doesn't run when editing the input track(signal); signal.value = "A"; }); return ( <> {signal.value} <input…

### CASE-4314 · [🐞] routeAction$ behavior different from action$
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug (Sorry for this minimal report I can provide more information if necessary) I upgraded to the latest version of qwik (0.2.1) and qwikcity (0.5.2) and changed the action$ to routeAction$ but the functionality I had originally is lost. ## example ```jsx export const useLoginUser = routeAction$(async (data) => { console.log("This doesn't show up anywhere") }) export default component$(() => { const action = useLoginUser(); return ( <Form action={action}> {/* ... Inputs here and stuff ... */} <button>Submit</button> </Form>…

### CASE-4324 · No choice for quik-city on npm create
- **Principles**: P-G4, P-E3 · **Env**: opera, linux
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Linux (Mint) ### Node Version (if applicable) 16 ### Which component is affected? Qwik City ### Expected Behaviour I am typing the following at my terminal: npm create qwik@user and expecting a choice of 'starter' which includes qwik-city 🐰 Let's create a Qwik app 🐇 v0.9.0 ✔ Where would you like to create your new project? … demo ? Select a starter › (use ↓↑ arrows, hit enter) ❯ Qwik City = File based routing and MDX support Blank Library ### Actual Behaviour 🐰 Let's create a Qwik app 🐇 v0.9.0 ✔ Where would you like to create your…

### CASE-4334 · [🐞] flowbite qwik input not working with modular form
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```tsx import { $, component$, QRL } from "@user.io/qwik"; import { Input, Button } from "flowbite-qwik" import { // routeAction$, routeLoader$, } from '@user.io/qwik-city'; import { formAction$, type InitialValues, SubmitHandler, useForm, valiForm$ } from '@user/qwik' import * as v from 'valibot'; import { createToken } from "~/lib/auth"; const LoginSchema = v.object({ email: v.pipe( v.string(), v.nonEmpty('Please enter your email.'), v.email('The email address is badly formatted.'), ), password: v.pipe( v.string(),…

### CASE-4342 · [🐞] Incorrect starting value of select tag with bind:value
- **Principles**: P-G4, P-E3 · **Env**: linux
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using `bind:value` with a select tag, the value of the select is always the first option on initial render, regardless of the value of the signal passed to it. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.2.3 - /usr/local/bin/npm pnpm: 8.15.6 -…

### CASE-4355 · [🐞] Client-side navigation does not work for node adapters
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I am trying to deploy my Qwik app to a node adapter in a docker container that runs behind an SSL proxy. When using `Link`s or programmatic routing (e.g. in qwik-auth), or form submission the client console outputs `Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'nodeType')` or similar messages, all pointing to things being undefined. All this works in dev. The root cause might be an error in the deployment, but neither the error messages nor the documentation is of any help to find the…

### CASE-4356 · [🐞] routeAction$ broken in Bun adapter
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: bug/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When using the Bun adapter, whenever you try to capture a `Form` using a `routeAction$`, it fails, giving the following error. This only occurs using `bun run serve`. The dev server works fine. ```ts Error: NOTCONN 1014 | var parseRequest = async (request, sharedMap, qwikSerializer) => { 1015 | var _a2; 1016 | const req = request.clone(); 1017 | const type = ((_a2 = request.headers.get("content-type")) == null ? void 0 : _a2.split(/[;,]/, 1)[0].trim()) ?? ""; 1018 | if (type === "application/x-www-form-urlencoded" ||…

### CASE-4370 · [🐞] Reactivity is broken when comparing multiple signals in a ternary
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime (or maybe Optimizer) ### Describe the bug There appears to be some issues with reactivity in the following case: ### Reproduction [Playground]([link]) ### Steps to reproduce 1. Type "foo" in the first input field 2. Type "foo" in the second input field 3. See that "No collision" is displayed in the even though the two values are equal 4. Type "bar" in the second field 5. Type "bar" in the first field (order matters) 6. See that "Collision detected" is now shown 7. Type "baz" in the second field 8. See that "Collision detected" is still shown even…

### CASE-4376 · [🐞] Discrepency between submitting Form with JS and native.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```tsx <Form action={favoriteJokeAction}> <input type="hidden" name="jokeID" value={dadJokeSignal.value.id} /> <button name="vote" value="up"> 👍 </button> <button name="vote" value="down"> 👎 </button> </Form> ``` In the above code when clicking 👍 (or 👎) the submitted form should contain `vote=up` (or `vote=down`). This is the case for native submission when JS is disabled. In emulated submission with JS enable the button value is not sent (is missing) ### Reproduction stackblitz has problems with actions. ### Steps to…

### CASE-4377 · [🐞] actions from the Form are vanished in the history.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When to make a search form with the form component, it seemed there is no way to record the action in the browser history. Suppose a man has searched words "Foo", "Bar" and then "Baz" and wanted to back to the result of "Foo". But if he clicked the back button then the browser shows the page everything has not happened yet. I am wondering on it is designed behavior or a bug. ### Reproduction [link] ### Steps to reproduce Please go to the reproduction link and click the `Open in New Tab` button at the top rigth corner.…

### CASE-4378 · [🐞] Index route `/` 404s on 0.17.3 when installed with Qwik City
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I am following the Qwik "Getting Started" documentation. I follow the standard installation flow, i.e. ```shell npm create qwik@user ... Select a starter > Basic App (QwikCity) ... ``` and execute `npm run start` after dependencies are installed. I expect to see the "Welcome to Qwik" screen when viewing `locahost:5173`. Instead, I see a 404 page. Repeating the above steps, subbing `npm create [email]` for `...@user`, results in my expected outcome. ### Reproduction [link] ### Steps to reproduce Run `npm create…

### CASE-4379 · [🐞] server actions can't run inside useClientEffect$ in preview mode
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug **Doing**: I am using server actions inside `useClientEffect$(() => ...)` like this, ```ts export const User = action$(signIn); export default component$(() => { ... const getUser = User.use(); useClientEffect$(() => { const form = new FormData(); form.append('userId', userId); getUser.run(form).then((res) => ...); ``` and it works correctly in dev mode, so then I am trying to build it for preview mode. **Expect**: It succeeds. **Happening**: `npm run build` said: ``` error Identifier ("getUser") can not be captured…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4308 · [🐞] scss imports dont work well
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: vite, desktop
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug i am importing some mixins and variables in main.scss but i get this error in my scss file. looks like the order of imports in scss is not correct, or vite with qwik dont work well with this type of scss. also the styles load well just is the modal error that i get from qwik vite i think, if you run pnpm build also fail the build because this error ```js [sass] Undefined mixin. ╷ 3 │ ┌ @user responsive(desktop) 4 │ │ { 5 │ │ font-size: 75%; 6 │ └ } ╵ src\global\style\base\_base.scss 3:3 root stylesheet ``` ###…

### CASE-4336 · [🐞] v2 Duplicate q:key Attributes on Sibling Component$ Instances Cause DOM Failures
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/waiting for user/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When multiple non-conditionally rendered component$ instances are placed inside a <div>, each instance receives an identical q:key attribute in the rendered DOM. This duplication leads to various failures, such as buttons becoming unresponsive and hover effects not working. ### Reproduction Missing ### Steps to reproduce - Create a <div> container. - Render several component$ instances as children of the <div> (without any conditional rendering). - Inspect the DOM to observe that all component$ instances have the same q:key…

### CASE-4368 · [🐞] async useVisibleTask$ blocks all other task execution and UI updates
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have been using visible tasks like useEffect in React, where I may have an async function doing lots of things. I noticed long periods of time where my app was "frozen" - the UI not responsive, other tasks not running, etc It turns out that an async visible task blocks _everything_ from executing (other tasks, state changes, UI updates, etc) until done. This bit me fairly severely, and if it is intentional it was unintuitive and (from what I can tell) undocumented For instance, in the following code: ```tsx import {…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-4319 · Scope styling anchor elements rendered from <Link>
- **Principles**: P-A2, P-A4, P-A3, P-H1 · **Env**: opera, linux
- **Signals**: 👍2 💬5 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.12.1 / 0.0.118 ### Operating System (or Browser) Linux ### Node Version (if applicable) 19 ### Which component is affected? Qwik City ### Expected Behaviour ```tsx <Link href="/"> <img src="/icon.svg" /> </Link> ``` inside a component that uses `useStylesScoped$` with this CSS ```css a { display: flex; } ``` renders this scoped CSS: ```css a.⭐️rwl3jt-0 { display: flex; } ``` Anchor tags should have a scoped class applied and the anchor element should get a `display: flex;` ```html <a href="/" preventdefault:click="" on:click="..." on:mouseover="..." on:qvisible="..."…

### CASE-4367 · [🐞] Error `The requested module ... does not provide an export named default` thrown when setting store value
- **Principles**: P-A2, P-A4, P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have a component where I create a store using `useStore`. When I set the value of one of the properties in the store using an event handler, I receive the following error: <img width="660" alt="image" src="[link]> <div aria-expanded="true" tabindex="-1" style="box-sizing: border-box; min-width: 0px; min-height: 0px; flex: 0 0 auto; color: rgb(189, 198, 207); font-family: menlo, monospace; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal;…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4327 · Input in basic starter loses focus after loading script
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬5 · closed · labels: bug
- **Excerpt**: Hi, First of all, thanks for building this very exciting piece of technology :) I'm just trying the [simple starter ]([link]) and I think there is something that's not working as intended. When I first start typing something in the text field it loses focus almost immediately (when the script finishes loading?). But this doesn't happen re-focusing and typing again, check my short video for demonstration. This is surely not the intended behaviour? [link]

### CASE-4335 · [🐞] v2 Error TS4023 when building types
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using ```ts imageAttributes?: PropsOf<'image'>; pictureAttributes?: PropsOf<'picture'>; ``` I get the following error when I build types (tsc -b): For picture: `error TS4023: Exported variable 'Homepage' has or is using name 'HTMLElementAttrs' from external module "/Users/kosta/Documents/qwik-2-test/node_modules/@user.dev/core/dist/core-internal" but cannot be named.` For image: `error TS4023: Exported variable 'Homepage' has or is using name 'SVGProps' from external module…

### CASE-4340 · [🐞] Website - Environment Variable Page is 404
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍0 💬4 · closed · labels: bug/docs/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug We are seeing links to a 404 page from environment variable search. [link] ![Screenshot 2024-09-16 at 10 55 48 AM]([link]) ### Reproduction [link] ### Steps to reproduce 0. [link] 1. Search for "env" 2. Click on variable links 3. See 404 page ![Screenshot 2024-09-16 at 10 58 17 AM]([link]) ### System Info ```shell System: OS: macOS 14.6.1 CPU: (12) arm64 Apple M2 Pro Memory: 55.52 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.1 - /opt/homebrew/bin/node npm: 10.5.0 - /opt/homebrew/bin/npm pnpm: 9.10.0 -…

### CASE-4350 · [📖] Conflicting links and entries in API reference page
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/docs/good first issue/DX/PR welcomed
- **Excerpt**: ### Suggestion A number of API reference links and entries with same or similar name, or names with special characters, are broken. Affected entries in `qwik` are: * broken links in the [index page]([link]) * variable `_qrlSync`: expected to point to`#_qrlsync` but actually to `#qrlsync` * variable `$`: has no fragment at all * variable `component$`: links to type alias `Component` * namespace `h`: links to function `h` * type alias `NoSerialize`: links to variable `noSerialize` * type alias `QRL`: links to variable `qrl` * interface `UseSignal`: links to variable `useSignal` * variable…

### CASE-4359 · [🐞] is not defined error when i used dynamic generated color variables
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to lazily load some CSS variables (mostly colors) to be used by Tailwind CSS: its sample of this pure CSS file that import from external file and added in route-head.tsx (/src/components/router-head/route-head.tsx): ``` :root { --color1: #ff0000; --color2: #594c3e; } ``` This is part of my tailwind.config.js file: ``` theme: { extend: { colors: { custom: { color1: 'var(--color-1)' } }, ``` And this is the colors.css file that is loaded when page loads in production. It's not part of the build: ``` :root { --color-1:…

### CASE-4375 · [🐞] Async update to signal does not update Slot content of custom component, only native element
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm fetching data async and updating the state of a button to show that it's loading. When onClick$, I'm setting the loading signal to true and then updating tracked variables to trigger another API call. After 2 seconds of loading, loading is set back to false. Updates: ```jsx <button onClick$={() => { loading.value = true; variables.count = variables.count + 1; }}>{loading.value ? 'Loading...' : 'Load more'}</button> ``` Does not update (capital B, custom component): ```jsx <Button onClick$={() => { loading.value = true;…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4330 · [🐞] [v2] task callback should wait for async cleanups to resolve
- **Principles**: P-F5, P-H3 · **Env**: opera
- **Signals**: 👍0 💬4 · closed · labels: bug/runtime/V2/IMPORTANT
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Currently task callback doesn't wait for cleanup operation to resolves, this can be an issue if you have async cleanup. In my case, the cleanup sends a message to a webworker to terminate current process before creating a new instance. But there is a race condition now making it fails in some cases. ```js useVisibleTask$(({ task, cleanup }) => { track(change); worker.createInstance(); cleanup(async () => { await worker.terminate(); }) }) ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4338 · [🐞] Build of supabase-auth-helpers-qwik fails because of TS type error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, desktop
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When I run pnpm build.local during build this error appears: `> [email] build /Users/nemanjamiljkovic/Desktop/qwik/packages/supabase-auth-helpers-qwik > vite build --mode lib vite v5.3.5 building for lib... ✓ 3 modules transformed. lib/index.qwik.mjs 2.80 kB │ gzip: 0.85 kB lib/index.qwik.cjs 2.96 kB │ gzip: 0.89 kB ✓ built in 42ms ⚛️ supabase-auth-helpers-qwik packages/docs/src/repl/worker/repl-dependencies.ts:51:3 - error TS2740: Type '{ isServer: true; isBrowser: false; isDev: false; }' is missing the following properties…

### CASE-4383 · [🐞] Hydration mismatch when using multiple Framer-motion animated components
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: macos, react
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug I'm using framer motion to create Layout animation. But when using multiple `qwikify$-ed` components, I got hydration mismatch error. But that's not happening when only using ( hydrating ) 1 component. But the error is gone in production build tho. <img width="1095" alt="Screenshot 2023-01-16 at 10 08 08 PM" src="[link]> ### Reproduction [link] ### Steps to reproduce * Run npm install and npm run dev. * Wait for the components to be hydrated. * Then, check console. ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64…

### CASE-4391 · qwik-city uses node-fetch when fetch is missing, not undici
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) any ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Problem I noticed that Qwik-city [adds node-fetch as a global]([link]) if it's missing, which is fine. However, in Node 18, global fetch is implemented by [undici]([link]), which is a little different, mostly around streams: It uses web streams (just like browsers) instead of node streams, and that means that if you get a stream from undici fetch you might have to transform it to a node stream (using [stream.Readable.fromWeb]([link])). So,…

### CASE-4397 · yarn serve issue (/basic & /documentation-site)
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: opera, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 🌎 Qwik v0.11.0-dev20221013112145 ### Operating System (or Browser) Apple M1 Pro, darwin/arm64 ### Node Version (if applicable) node v18.3.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour [link] & [link] - should display the homepage ### Actual Behaviour [link] ``` GET /basic/ [basic build/ssr] vite v3.1.7 building for development... ✓ 32 modules transformed. dist/q-manifest.json 8.51 KiB dist/build/root.js 0.04 KiB / gzip: 0.06 KiB dist/build/@user.js 0.75 KiB / gzip: 0.32 KiB dist/build/layout.js 0.48 KiB / gzip: 0.33 KiB dist/build/index.js 0.56 KiB /…

### CASE-4398 · setting innerHTML
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, macos
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) macOS 12.6 ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour In my use case, I get markdown data from an endpoint and want to show it as HTML. Common approaches like ```tsx // code to fetch markdown data, transform and sanitize to HTML // ... return <> <p innerHTML={sanitzedHtml}></p> <p dangerouslySetInnerHTML={{__html: sanitizedHtml}}></p> </> ``` do not work. Is this use case supported, and if not, is there a workaround? Thank you! ### Actual Behaviour Couldn't find any…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-4344 · [🐞] Strange types issue when building components
- **Principles**: P-A5, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬4 · closed · labels: bug/needs triage/types/PR welcomed/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Building one component on top of another gives strange typescript issues: ``` type InputProps = PropsOf<"input">; export const InputBase = component$<InputProps>((props) => { return <input {...props} />; }); ``` Error - Types of property bind:checked'' are incompatible - Type 'Signal<boolean | undefined>' is not assignable to type 'never' ``` export const InputWrapper = component$<InputProps>((props) => { return <InputBase autoComplete="email" {...props} />; }); ``` While this works fine ``` export const InputWrapper2 =…

### CASE-4363 · [📖] Adding information about the 'default' keyword in the docs
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: docs/good first issue
- **Excerpt**: ### Suggestion **Issue I faced** While I was working I skipped the default keyword in my component and it was not working. It took me a while to figure out that default keyword is a must in Qwik components. **Suggestion** It would be helpful if there was some information on the use and logic behind the 'default' keyword in the docs.

