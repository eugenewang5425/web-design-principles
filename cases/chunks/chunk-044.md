# Case Chunk 044 — Round 44

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5301 · Turbopack tree-shaking generates invalid output for some pages router SSR chunks
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬13 · closed · labels: Output/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Take a look at the linked repository. 1. Build the project - `npm run build` 2. [Copy the standalone files]([link]) so we can run it locally without a CDN - `cp -r .next/static .next/standalone/.next/` 3. Run the standalone artifact - `HOSTNAME=localhost node .next/standalone/server.js` 4. Visit `[link] 5. Observe the 500 Internal server error. ### Current vs. Expected behavior Expected behavior is that the (empty) page loads successfully. The current is that it renders a 500 error page and prints the following into the…

### CASE-5314 · Hooks is `null` on SSR after 13.4.13 and up
- **Principles**: P-F4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍0 💬13 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.6.0: Wed Jul 5 22:21:53 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T6020 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: 1.22.19 pnpm: 8.2.0 Relevant Packages: next: 13.4.20-canary.2 eslint-config-next: 12.3.4 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_…

### CASE-5328 · dynamic import with `suspense:true, ssr:false` causes `The server could not finish this Suspense boundary` error
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬13 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:41 PST 2021; root:xnu-8019.61.5~1/RELEASE_ARM64_T6000 Binaries: Node: 16.14.2 npm: 8.1.4 Yarn: 1.22.1 pnpm: 6.32.4 Relevant packages: next: 12.1.6-canary.16 react: 18.1.0 react-dom: 18.1.0 ``` ### Describe the Bug Using dynamic component import with `{suspense: true, ssr:false}` cause this error: ``` Error: The server could not finish this Suspense boundary,…

### CASE-5358 · next 9.1.3 withRouter passes router=null on SSR
- **Principles**: P-F4 · **Env**: macos, next.js
- **Signals**: 👍6 💬13 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug withRouter passes prop `router: null` to wrapped component whereas in next 9.1.2 it always passed the right object (with query, etc.)) ``` import { withRouter } from "next/router"; const Component = ({router}) => { console.log(router); // will be null on first render return <div>.....</div> } withRouter(Component); ``` ## To Reproduce see component above ## Expected behavior `withRouter` always injects relevant data) ## System information - OS: macOs - Version of Next.js: 9.1.3 ## Additional context This bug was not present in ~~9.1.2~~ 9.1.1. (we skipped…

### CASE-5361 · Async redux thunk in SERVER breaks
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: good first issue
- **Excerpt**: # Examples bug report ## Example name with-redux-thunk ## Describe the bug Async thunk does not work in SSR ## To Reproduce The example repo: [with-redux-thunk]([link]) In the above example, serverRenderClock is synchronous ```synchronous dispatch export const serverRenderClock = isServer => dispatch => { return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() }) } ``` everything work expected, on SSR, the example will render the time on the server However, if we try to make serverRenderClock async, it breaks using below async serverRenderClock ```async dispatch export…

### CASE-5363 · Next runs components multiple times on the serverside.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug Seems like Next SSR creates runs imported modules multiple times, or instantiates components multiple times more than necessary, because I get the following error on the clientside when using `JSS` ([react-jss]([link])): ``` Warning: Prop `className` did not match. Server: "Footer-lowLogo-0-1-63" Client: "Footer-lowLogo-0-1-3" ``` The way JSS generates the `63` in `0-1-63` is that it increments a counter. So obviously on the server side the counter is reaching `63`, while on the client side it is reaching the expected count of `3`. My component modules look…

### CASE-5369 · Loading state shown on SSR despite all required data being prefetched
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: Loading UI and Streaming
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a `page.tsx` and a `loading.tsx` in the App Router 2. Prefetch data in `page.tsx` and use that data to populate the TanStack Query cache 3. Use TanStack Query's `useSuspenseQuery` to consume that data 4. Load the page in the browser ### Current vs. Expected behavior I'd expect the full contents of the page to be shown immediately with no loading state since all data required by the page is prefetched (that is, the TanStack Query cache is already populated with the data it consumes). Instead, I'm seeing a flicker…

### CASE-5386 · Server rendered routes with hashes do not work with browser back/forward navigation
- **Principles**: P-F4 · **Env**: desktop
- **Signals**: 👍15 💬12 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Go to [link] 2. Click on any of the "hashed" routes (located in the right-hand sidebar on desktop screens) 3. Navigate to a different page by clicking on a page route (located in the left-hand sidebar on desktop screens) 4. Click the back button on your browser. The URL changes and the page may scroll, but the page content remains from Step 3. ### Current vs. Expected behavior Currently, the URL changes and the page may scroll, but the page content does not change. I expect the page to navigate back to the previous…

### CASE-5392 · Error: NEXT_DYNAMIC_NO_SSR_CODE
- **Principles**: P-F4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍0 💬12 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 Binaries: Node: 20.3.0 npm: 9.6.7 Yarn: 1.22.19 pnpm: 8.6.3 Relevant Packages: next: 13.4.8-canary.2 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5302 · TypeError: Cannot read properties of null (reading 'useContext') after a fast refresh when using turbo
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍4 💬12 · closed · labels: please add a complete reproduction/Turbopack/linear: turbopack/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The example link is actually a very simple next project created using `npx create-next-app@user`. It is easier to reproduce on a bigger project, so we'll do some extra steps to kinda force it. 1 - Clone and run the project using `yarn dev`. 2- Open [link] 3 - Go to `src/app/page.tsx` and toggle the comment (it can be anything, you just have to trigger the refresh) and save it. 4 - Go to chrome dev tools console and dispatch send some simultaneous request to different paths (the path doesn't need to exist). Ex: ```…

### CASE-5307 · An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js, tailwind
- **Signals**: 👍6 💬13 · closed · labels: examples
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Using : nextjs 14 zod tailwind css shadcn Ui app running on digitalocena ``` ### Which example does this report relate to? Server Side Component Error ### What browser are you using? (if relevant) Microsoft Edge ### How are you deploying your application? (if relevant) Using git action on digital ocean (web app) ### Describe the Bug An error occurred in the Server Components render. The specific message is omitted in production builds to avoid…

### CASE-5309 · Fetch failed loading: GET "[link]
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍3 💬13 · closed · labels: bug
- **Excerpt**: ![Screenshot 2024-05-05 at 17 08 50]([link] framework]/assets/866622/c90ac0ce-0710-40ec-bb64-452a822c3ff2) ![Screenshot 2024-05-05 at 17 09 23]([link] framework]/assets/866622/f7dc7036-870b-403e-a24d-fea70a767d34) ### Link to the code that reproduces this issue [link] ### To Reproduce IMPORTANT: You need to enable "Log XMLHttpRequests" in Google Chrome DevTools Console settings: <img width="552" alt="image" src="[link] framework]/assets/866622/39caed81-fa87-477f-80d0-c901f9cf5553"> 1. npm run dev 2. In Chrome, navigate to [link] 3. Click the "To Blog" link 4. Click the "To Dashboard" link ###…

### CASE-5313 · redirects() in next.config.js is matching paths differently than in previous version
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍1 💬13 · closed · labels: please add a complete reproduction/bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:35 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8103 Binaries: Node: 16.16.0 npm: 8.11.0 Yarn: 1.22.19 pnpm: N/A Relevant Packages: next: 13.4.20-canary.4 eslint-config-next: 13.4.9 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge…

### CASE-5316 · Middleware does not run before cached content is loaded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍6 💬13 · closed · labels: bug/Runtime/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.2.0: Fri Nov 11 02:08:47 PST 2022; root:xnu-8792.61.2~4/RELEASE_X86_64 Binaries: Node: 16.13.2 npm: 8.1.2 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.14-canary.5 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes,…

### CASE-5317 · 500 Internal Server Error with Draft Mode API route using Pages router
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍1 💬13 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.3.0: Wed Jan 5 21:37:58 PST 2022; root:xnu-8019.80.24~20/RELEASE_ARM64_T8101 Binaries: Node: 19.6.1 npm: 9.4.0 Yarn: 1.22.19 pnpm: 8.6.11 Relevant Packages: next: 13.4.13 eslint-config-next: 13.4.13 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API…

### CASE-5319 · Url which contain several locales have strange behaviour
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍8 💬13 · closed · labels: bug/Linking and Navigating/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 21:00:17 PST 2023; root:xnu-8796.101.5~3/RELEASE_X86_64 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: 1.22.11 pnpm: N/A Relevant packages: next: 13.2.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Internationalization (i18n), Middleware / Edge (API routes, runtime), Routing…

### CASE-5320 · middleware rewrite and tailwind.css
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, tailwind, next.js
- **Signals**: 👍2 💬13 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash latest of all ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue none ### To Reproduce create an middleware.ts and make an rewrite if a specific cookie is not there. `let hasCookie = request.cookies.get('access-cookie')?.value if (hasCookie) { console.log('access granted') } else { rewrite to /login } }` ### Describe the Bug The rewrite works,…

### CASE-5321 · Middleware rewrite to edge router handler - Invariant: no match found for request
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, opera, next.js, react
- **Signals**: 👍17 💬13 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 21:00:41 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T8103 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.18 pnpm: 7.29.3 Relevant packages: next: 13.3.1-canary.5 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes,…

### CASE-5323 · Route Handlers Crash with bcrypt
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, ubuntu, next.js, react
- **Signals**: 👍1 💬13 · closed · labels: bug/Webpack/Linking and Navigating
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Mon Feb 27 2023 14:52:57 GMT+0100 (Central European Standard Time) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.2.2-canary.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime) ### Link to the…

### CASE-5324 · Layout shift when routing to different page
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome 107, next.js, react
- **Signals**: 👍1 💬13 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:19:52 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T6000 Binaries: Node: 16.14.2 npm: 8.5.0 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 13.0.6-canary.1 eslint-config-next: 13.0.5 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 107.0.5304.87 ### How are you deploying your application? (if relevant) next dev ###…

### CASE-5325 · Edge runtime giving 500 error on vercel with route groups
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍1 💬13 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.2.0: Sun Oct 16 18:11:16 PDT 2022; root:xnu-8792.60.32.0.1~11/RELEASE_ARM64_T8103 Binaries: Node: 16.17.1 npm: 8.15.0 Yarn: 1.22.18 pnpm: 7.1.0 Relevant packages: next: 13.0.2-canary.0 eslint-config-next: N/A react: N/A react-dom: N/A ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug…

### CASE-5326 · NextJS 13 layout re-render when changing route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge 107, linux, ubuntu, next.js, react
- **Signals**: 👍2 💬13 · closed · labels: Upstream
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref]~18.04.1-Ubuntu SMP Mon Oct 17 11:44:30 UTC 2022 Binaries: Node: 16.18.0 npm: 8.19.2 Yarn: 3.2.4 pnpm: 7.14.1 Relevant packages: next: 13.0.1-canary.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) edge 107.0.1418.26 ### How are you deploying your application? (if relevant) next dev ### Describe the Bug the layout component re-render when…

### CASE-5327 · Middleware fetch requests do not work (POST, GET)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, windows, next.js, react
- **Signals**: 👍7 💬13 · closed · labels: Middleware/locked/not stale
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 16.14.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.2.6-canary.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 104.0.5112.102 ### How are you deploying your application? (if relevant) Other platform (it happens on dev as well) ### Describe the Bug We're trying to use fetch inside middleware.ts, ```…

### CASE-5329 · "ReferenceError: global is not defined" with concurrentFeatures: true and relay.dev
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, next.js
- **Signals**: 👍5 💬13 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? v14.18.0 ### What browser are you using? Firefox ### What operating system are you using? NixOS ### How are you deploying your application? npm run dev ### Describe the Bug I got this error while trying concurrentFeatures with relay.dev. It's fine with `concurrentFeatures: false`. ``` ready - started server on 0.0.0.0:3000, url: [link] info - Loaded env from /home/bbigras/dev/my_test/.env warn - You have enabled experimental feature(s). warn - Experimental features are not covered by semver, and may…

### CASE-5330 · Emitted 'error' event on WriteStream instance
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍1 💬13 · closed · labels: Performance/stale
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? v14.11.0 ### What browser are you using? chrome ### What operating system are you using? windows ### How are you deploying your application? next run build ### Describe the Bug Hi, When making a build for production, I keep getting this error. I never had the issue before upgrading to version 12.0.0. I tried deleting the file, but it only works when the dev server is not running, while it runs I cannot open or delete it and that make every production build fail. ``` info - Creating an optimized…

### CASE-5333 · next/image blur placeholder with conditional rendering is taken down too early in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, opera, windows, next.js
- **Signals**: 👍3 💬13 · closed · labels: Image (next/image)/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 16.9.1 ### What browser are you using? Firefox ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug Observation: * next/image placeholder disappears when image is loading in Firefox * The image placeholder is taken down too early at the image loading phase (even before the image starts loading) * In other words, the `onload/onLoadingComplete` function is fired prematurely and hence the placeholder get unset * This is very obvious when…

### CASE-5334 · Unable to disable locale routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, next.js, react
- **Signals**: 👍4 💬13 · closed · labels: bug/Internationalization (i18n)/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 15.14.0 ### What browser are you using? Chrome ### What operating system are you using? Ubuntu ### How are you deploying your application? local using next dev ### Describe the Bug I do not want to use locale based routing in my next app. Here's my next.config.js ``` /** @user {import('next').NextConfig} */ module.exports = { reactStrictMode: true, i18n: { locales: ["en"], defaultLocale: "en", localeDetection: false, }, async redirects() { return [ { source: "/", destination: "/test", permanent:…

### CASE-5335 · Next is not recognizing _document.tsx file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js, react
- **Signals**: 👍7 💬13 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next start ### Describe the Bug Here's my `_document.tsx` file ```TS import Document, { Html, Head, Main, NextScript } from 'next/document'; import { ServerStyleSheets, StylesProvider } from '@user/core/styles'; import React from 'react'; export default class MyDocument extends Document { render(): JSX.Element { return ( <Html lang="en"> <Head> <link…

### CASE-5336 · CSS sourceMappingURL is wrong in "productionBrowserSourceMaps: true" mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, next.js
- **Signals**: 👍8 💬13 · closed · labels: bug/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 12.22.1 ### What browser are you using? Chrome ### What operating system are you using? Linux ### How are you deploying your application? next start ### Describe the Bug When I enabled sourceMaps in prod mode: ```javascript // next.config.js module.exports = { productionBrowserSourceMaps: true, } ``` css sourcemaps are broken, because all CSS code is fetch by XHR and inserted to page by `<style>` tag with wring relative `sourceMappingURL` path. Example: Page got this css `[link] with `/*#…

### CASE-5337 · Webpack 5 "Cannot find module" error when specifying paths referencing node_modules in jsconfig.json
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, opera, macos, webpack, next.js
- **Signals**: 👍8 💬13 · closed · labels: bug/Webpack/please verify canary
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.17.3 ### What browser are you using? Chrome, Safari, Firefox ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug We have an application where we have set up our `jsconfig.json` file to have the ability to override individual modules or components from a "core" library (that we also develop and publish). The way we've been doing it looks like this: ```json { "compilerOptions": { "baseUrl": ".", "paths": { "@user/*":…

### CASE-5338 · Hot reload connection can fail on Windows
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 91, chrome 91, opera, windows, next.js, react, vue
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? v14.17.0 ### What browser are you using? Edge 91.0.864.67 - Chrome 91.0.4472.124 ### What operating system are you using? Windows 10 Pro 20H2 ### How are you deploying your application? npm run dev ### Describe the Bug Hot reload / Fast Refresh isn't working. I'm following the next tutorial, so here's my code: npx create-next-app nextjs-blog --use-npm --example "[link] Here [link] it says that the page will live reload, just like react / vue, but it doenst reload. On network tab I see this errors:…

### CASE-5339 · <image/> tag error in version 11.0.0
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬13 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 11.0.0 ### What version of Node.js are you using? v14.15.3 ### What browser are you using? chrome ### What operating system are you using? Windows ### How are you deploying your application? none ### Describe the Bug Hi, I am getting a problem with an <img/> tag when upgrading from 10.2.3 to 11.0.0 while changing nothing in my code. error on the image src ``` Type 'StaticImageData' is not assignable to type 'string'.ts(2322) index.d.ts(2145, 9): The expected type comes from property 'src' which is declared here on type…

### CASE-5340 · msw not being tree shaken from client bundle (dead code elimination bug)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍5 💬13 · closed · labels: good first issue/examples
- **Excerpt**: ### What example does this report relate to? [with-msw]([link] framework]/tree/canary/examples/with-msw) ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug `next build` isn't eliminating this require from the client bundle: ``` // assuming this evaluates to false for production build if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') { require('../mocks') } ``` It bundles msw for the…

### CASE-5342 · Using http instead of https locally with localized domains
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍4 💬13 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.2 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug I have a Next.js application that uses two different domains for different languages. English uses .com and German uses .de. When I upgraded to Next.js 10, I rewrote the entire mechanism to use the built-in localization feature that supports multiple domains out of the box which is absolutely awesome and works like a charm in…

### CASE-5343 · `url()` references in css files do not use `assetPrefix` in transformed urls
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍19 💬13 · closed · labels: bug/not stale
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? npm run dev (with custom express server) ### Describe the Bug Custom `assetPrefix` does not prefix reference urls that have been automatically transformed in css files. If a css file references a font for example, the transformed url font will not use `assetPrefix` even though a proper value for `assetPrefix` has been set The url transformation seems to be happening…

### CASE-5344 · next/link not scrolling to top of page in iOS firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, ios, next.js
- **Signals**: 👍10 💬13 · closed · labels: bug/locked
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.4.0 ### What browser are you using? Firefox ### What operating system are you using? iOS ### How are you deploying your application? Heroku ### Describe the Bug When using Firefox on iOS, next/link doesn't scroll to the top for new pages, and keeps a user scrolled even when passing in the scroll prop, which should be a default regardless. ### Expected Behavior next/link should scroll a user to the top of a new page. ### To Reproduce Use next/link on a physical iOS device while using Firefox. You…

### CASE-5345 · 2 cases where `nonce` isn't applied for Content-Security-Policy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍3 💬13 · closed · labels: bug/please verify canary
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 12.18.2 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 (latest) **How are you deploying your application?** Vercel **Describe the Bug** ## What's the bug? When trying to use a `Content-Security-Policy` with `style-src 'self' 'nonce-r@user'`, there are **2 cases** where the `nonce` is not applied. Because of these, we're forced to relax the `Content-Security-Policy` to use `inline-unsafe`. ### Case 1: `fouc` inline `<style>` tag Not sure what `fouc` is (flash…

### CASE-5346 · with-google-tag-manager: `pageview` event doesn't fire on initial page load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍1 💬13 · closed · labels: examples/locked/stale
- **Excerpt**: **What example does this report relate to?** with-google-tag-manager **What version of Next.js are you using?** 10.0.3 **What version of Node.js are you using?** 10.0.3 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** next start **Describe the Bug** `pageview` event doesn't fire on initial page load, only routchange **Expected Behavior** to be able set up a single tag in GTM to use the "pageview" dataLayer event, however the `routeChangeComplete` only fires on subsequent page views. **To Reproduce** - start…

### CASE-5349 · Seeing a "next-head-count is missing" After upgrading to 10.0.2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, next.js
- **Signals**: 👍4 💬13 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug Seeing a bunch of warnings for `next-head-count is missing` after upgrading to 10.0.2. I am not using a `_document.js` file at all and this cropped up after upgrading. ## To Reproduce 1. Run `npm run dev` 2. Go to [link] 3. Open the browser console, warnings are in the console ## Expected behavior No warnings at all. ## Screenshots ![Screen Shot 2020-11-20 at 10 17 29 AM]([link]) ## System information - OS: [macOS] - Browser (if applies) [e.g. chrome, safari] - Version of Next.js: [e.g. 10.0.2] - Version of Node.js: [e.g. 12.18.3] - Deployment: [vercel]

### CASE-5357 · Unable to transpile ES6 to ES5 for IE11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, firefox
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug As per my knowledge next/babel in presets should transpile the code for non ES6 supporting browsers. But I can still find arrow functions, class, etc, in my /out folder. Also when I try to deploy this build it only works for chrome but not for IE or older versions of firefox. ## To Reproduce Repo Link: []([link]) Steps to reproduce the behavior, please provide code snippets or a repository: ` 1) git clone [link] nextTranspileIssue 2) cd nextTranspileIssue 3) npm install 4) npm run start ` ## Expected behavior It should produce ES5 transpiled code in out folder…

### CASE-5359 · AMP is not working with Material-UI
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ubuntu, next.js
- **Signals**: 👍1 💬13 · closed · labels: good first issue
- **Excerpt**: # Examples bug report ## Example name [link] ## Describe the bug If you turn on AMP-first on a page, for example on about page: ![image]([link]) You will get error ![image]([link]) ## To Reproduce 1. Follow instructions [link] 2. Enable AMP on page 3. Open it 4. See error ## Expected behavior AMP is working fine with Material UI ## System information - OS: Ubuntu 18.04 - Chrome - Next.js 9.1.1, MaterialUI 4.5.0 ## Additional context It maybe problem with material-ui example or other styling integrations. Here is some similar as I think issues: [link] [link]

### CASE-5362 · NextJS as a kiosk mode (raspberry PI) - Interesting edge case.
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, ios
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report I won't lie, I'm using next in a way that is likely not recommended but I don't think it is an unreasonable use case. Basically a static app (`npm run build && npm run export` exports to hackpack-server/out, which is sync'd to the hackpack - raspberry pi-based device. I'm tasked with setting up a nextJS repo that can be exported via `build + export to SSR build and exported to a completely local pre-built nextJS app which (while mostly offline) pings rest APIs for updating specific pages and components. The kicker: *This is a hardware device* (think gameboy) with hi res screen…

### CASE-5364 · Next doesn't output sw-precache file in development mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, webpack
- **Signals**: 👍1 💬13 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug Next supress the file output from [`sw-precache-webpack-plugin`]([link]) in development mode (in build/production mode it outputs correctly) ## To Reproduce I've made a simplified repository to clone here: [[link]]([link]) After cloning, run it with `npm start` (will start in development mode) ## Expected behavior Next should output the service worker file in `.next/static/sw.js` as descripted [here]([link]) ## System information - OS: `Linux 4.15.0-21deepin-generic [ref] SMP Mon May 21 05:20:09 UTC 2018 x86_64 GNU/Linux` - Browser: `Google Chrome Version…

### CASE-5367 · App Router: root generateMetadata reruns a shared fetch on sibling navigation even when the shared layout UI is preserved
- **Principles**: P-G1, P-G2, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: Linking and Navigating/Metadata
- **Excerpt**: ## Link to the code that reproduces this issue [link] ## To Reproduce 1. Clone the reproduction repo. 2. Run `npm install`. 3. Run `npm run build && npm run start`. 4. Open `[link] 5. Note the latest server log for `[shared-layout] fetch`. 6. Navigate to `/beta` using the in-app link. 7. Observe that `[shared-layout] fetch` runs again. ## Current vs. Expected behavior Current: - The shared layout UI is preserved across sibling navigation. - The root `generateMetadata()` still re-evaluates during that navigation. - Because `generateMetadata()` uses the same shared fetch as the preserved…

### CASE-5368 · Next.js cache is poisoned when notFound() is triggered.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox, safari 3, next.js
- **Signals**: 👍2 💬12 · open · labels: Cache Components/Not Found
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The link of the reproduction codesandbox does not actually trigger the bug. But shows the situation. This is the scenario / bug: 1. I have three playwright e2e tests: a. Go to pokemon detail of bulbasaur b. Go to detail of nonexisting pokemon to test 404 this triggers the notFound() c. create pokemon via form client component which calls a server function that calls updateTags 2. Playwright runs the tests in chrome, firefox and safari 3. The second browser firefox fails the first test "Go to pokemon detail of bulbasaur"…

### CASE-5370 · Route announcer leads to unhandled client-side exception with browser translations
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍1 💬12 · closed · labels: React
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open the code sandbox 2. Open the link of the app in a separate window (translations are not applied in the iframe) 3. Enable translations for the browser (e.g. Google Chrome): a. Click the three-dot menu icon in the upper-right corner of the page. b. Click the Translate option. c. You can then select your desired language to translate the page. 4. Click the button 5. Navigate back 6. Click button again 7. Unhandled client-side exception should be thrown ### Current vs. Expected behavior Current Behavior: A client-side…

### CASE-5378 · Turbopack error on edge runtime(middleware): `Error [TypeError]: _react.default.createContext is not a function`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, react
- **Signals**: 👍2 💬12 · closed · labels: bug/Turbopack/linear: turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the app 2. Open the app in the browser ### Current vs. Expected behavior **Expected:** - Turbopack should be able to build the code without any issue **Current:** - Turbopack throw `Error [TypeError]: _react.default.createContext is not a function` ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.5.0: Wed May 1 20:16:51 PDT 2024; root:xnu-10063.121.3~5/RELEASE_ARM64_T8103 Available memory (MB): 16384 Available CPU cores: 8 Binaries: Node:…

### CASE-5380 · Build failure for edge runtime with libsql
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js
- **Signals**: 👍5 💬12 · closed · labels: bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone [link] 2. pnpm install 3. pnpm build ### Current vs. Expected behavior Build should succeed ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.2.0: Wed Nov 15 21:53:18 PST 2023; root:xnu-10002.61.3~2/RELEASE_ARM64_T6000 Binaries: Node: 20.10.0 npm: 10.2.3 Yarn: 1.22.21 pnpm: 8.11.0 Relevant Packages: next: 14.0.4 eslint-config-next: 14.0.4…

### CASE-5383 · Cannot catch an error when calling a server action
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍7 💬12 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `npm i`. 2. `npm t` will reproduce it automatically. To reproduce it manually go to the next step. 3. `npm run dev`. 4. Open `[link] in Firefox. 5. Open the dev tools, and click on request blocking. 6. Add `localhost` as blocking pattern. 7. Click the button on the page. ### Current vs. Expected behavior * **Expected:** Nothing happens (as there is [a catch clause]([link])). * **Actual:** A client error next message is displayed. In version `14.0.1` the catch clause is run, from `14.0.2` on it isn't. ### Verify canary…

### CASE-5394 · NextResponse.rewrite is not forwarding the request body to external hosts in dev when headers are modified in middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js
- **Signals**: 👍20 💬12 · closed · labels: bug/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Reproducable in canary with a jest test. Occurs beginning from Next 13.3 and all versions after that. ONLY AN ISSUE IN DEV MODE ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue or a replay of the bug [link] framework][ref] ### To Reproduce Create a middleware endpoint and Rewrite the response to an external API. Copy and modify the headers…

### CASE-5395 · Rewrites from next.config.js are double proxied in Next >=13.3.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, ubuntu, next.js, react, typescript
- **Signals**: 👍3 💬12 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash next info Operating System: Platform: linux Arch: x64 Version: [ref]~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Tue Apr 18 17:40:00 UTC 2 Binaries: Node: 18.15.0 npm: 9.5.0 Yarn: 1.22.15 pnpm: N/A Relevant packages: next: 13.4.3-canary.2 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces…

### CASE-5397 · Middleware and custom server randomly causes `uncaughtException` `error: aborted` when work with nginx using `error_page`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍7 💬12 · open · labels: bug/Runtime/not stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.3.0: Wed Jan 5 21:37:58 PST 2022; root:xnu-8019.80.24~20/RELEASE_ARM64_T8101 Binaries: Node: 16.13.1 npm: 8.1.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.2-canary.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5398 · Vercel's edge runtime responds with 500 Internal Server Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍10 💬12 · closed · labels: bug/Linking and Navigating/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:35 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8103 Binaries: Node: 16.13.2 npm: 8.1.2 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 13.3.0 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime),…

### CASE-5399 · [NEXT-1028] App directory: Next 13.3.x redirect() to page with dynamic data causes fetch to fail in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, linux, next.js, react
- **Signals**: 👍5 💬12 · closed · labels: linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 18.14.2 npm: 9.5.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.3.1-canary.5 eslint-config-next: 13.2.4 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce - Using Next 13.3.x - In…

### CASE-5400 · 502 TOO_MANY_FORKS on next/data JSON with middleware and fallback: false
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows, next.js, react
- **Signals**: 👍7 💬12 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 18.13.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.2.5-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Data fetching (gS(S)P, getInitialProps), Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [link] ### To Reproduce *…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5303 · Compound components cause "React.jsx: type is invalid -- expected a string or a class/function"
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬13 · closed · labels: locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Two "ways to break": First: 1. Start the app using `npm run dev`. 2. Uncomment `"use client"` in `components/Compound/index.tsx`. 3. Broken Second: 1. Start the app using `npm run dev`. 2. Uncomment EDS' `<Table>` and `<Table.Body>`-code in `app/page.tsx`. 3. Broken Video showing: [link] ### Current vs. Expected behavior For some reason, compound components "randomly" break when used in conjunction with `"use client"`-components within server-side pages. Expectation: No error, just works. ### Provide environment…

### CASE-5305 · FFMpeg Wasm lib not loading with turbopack dev enabled.
- **Principles**: P-A3, P-H1 · **Env**: opera, linux
- **Signals**: 👍3 💬13 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run the application using next dev with --turbopack flag enabled. 2. Check the browser preview. If library loaded, that will print "ffmpeg Loaded" else will print "ffmpeg not loaded" (for debug purpose only). ### Current vs. Expected behavior **Current Behaviour** - FFMpeg lib not loading with --turbopack flag enabled **Expected Behaviour** - Should work with that flag also. Happening with other wasm lib too - imagemagick wasm etc. ### Provide environment information ```bash Operating System: Platform: linux Arch: x64…

### CASE-5322 · Metadata API Not Working
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍0 💬13 · closed · labels: please add a complete reproduction/bug/Metadata
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash I have added the Metadata OG in the page.tsx the content of the data and not showing on any of the OG Checkers. ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Metadata (metadata, generateMetadata, next/head, head.js) ### Link to the code that reproduces this issue [link] ### To Reproduce - Add the OG Image and MetaTags - Push it to test URL - And open [link] to check the MetaTags ### Describe the…

### CASE-5351 · v 10 - low Largest Content Painting score with new Image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report I had an issue with LCP on previous versions and was eagerly waiting the `Image` feature. I was expecting issue to disappear with the new `Image` component, but not so. ## Describe the bug The page has only one image, a 2Kb png before any optimization by `Image`. I mean, I am not talking here about any huge hero image. This is as small/light as it gets. ## To Reproduce <Image src="/images/main-logo.png" alt="quiamo logo" className={classes.branding} width="180" height="60" loading="eager" priority /> 1. Go to `[link] 2. Enter `[link] 3. choose`Germany` as test location 4. See…

### CASE-5353 · problem with Router.push using hash
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, next.js
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug In my case when i change only hash url using `Router.push(localhost:3000/#change)` coming from `localhost:3000` all stylesheets reload again causing the screen blink and a error in browser console. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Checkout [link] 2. All instructions on readme file. ## Screenshots ![image]([link]) ## System information - OS: Ubuntu 20.04 - Version of Next.js: 9.5.3-canary.6 or higher - Version of Node.js: v12.13.1

### CASE-5355 · In IE11, repeat polyfill seems to fail when uncaught exception is thrown
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍1 💬13 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug When testing in IE, I get a white screen when an uncaught exception is thrown rather than the standard error message page or something more user friendly. ## To Reproduce 1. yarn create next-app 2. Add a `throw new Error('boom')` to the top of pages/index.js 3. `yarn dev` 4. Observe the difference between IE11 and other browsers ## Expected behavior IE11 should have the same behavior for this case as other browsers ## Screenshots <img width="1026" alt="Screen Shot 2020-03-25 at 4 47 29 PM" src="[link]> ## System information - OS: Windows 81 - Browser IE11 -…

### CASE-5356 · How do I use bootstrap in Next.js?
- **Principles**: P-A3, P-H1 · **Env**: bootstrap, next.js
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug I have some designs in html which uses bootstrap and I try to make them dynamic using nextjs. When I convert html to tsx (basically renaming class attributes to className) there doesnt seem to be any problem untill I add bootstrap which requires jquery. I also include jquery but bootstrap cannot find jquery in nextjs context for some reason. ## To Reproduce - import jquery - import bootstrap.min.css - import bootsrap - internal server error ## Expected behavior Things to run ## Screenshots ![image]([link]) ![image]([link]) ![image]([link]) ## System…

### CASE-5365 · HMR with TypeScript causes infinite reloading loops
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: - [x] I have searched the [issues]([link]) of this repository and believe that this is not a duplicate. 👋 Hey everyone, I've been using next with TypeScript (was 6.0 canary, now with 6.0.1 canary) and HMR has been causing quite a lot of issues. I created an example repo to showcase it: nextjs-typescript-hrm-bug-example Basically the default setup for HRM in nextjs means that making a change in a `*.tsx` file would cause an infinite loop with these errors <img width="1091" alt="screen shot 2018-05-06 at 4 08 44 pm" src="[link]> Which you need to kill the server to stop. In making the example…

### CASE-5372 · Client Component is rendering at server side on app dir even with "use client"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬12 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Please refer this [stackblitz demo]([link]) DemoComponent is marked client component using "use client" which is using localStorage of browser window object DemoComponent is imported inside RootLayout ( a server component) ### Current vs. Expected behavior Demo component should works fine with localStorage as it's marked as client component but it's run at server side throws error with dev build , terminal throws error as below ![image]([link]) When run production build it's failed with below error ![image]([link]) Dev…

### CASE-5373 · @user on CSS file not working when i use Turbopack
- **Principles**: P-A3, P-H1 · **Env**: opera, tailwind
- **Signals**: 👍3 💬12 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce I'm trying to import radix colors on my css file in a new Next 15 Project, but is not working (when i disable turbopack works fine): When there's just the colors: ![image]([link]) The error on compile is: "./src/app/globals.css:42:2 Module not found: Can't resolve '@user/colors/violet-dark-alpha'" When i have Tailwind at the top: ![image]([link]) The error changes to: ![image]([link]) ### Current vs. Expected behavior Without turbopack works fine: ![image]([link]) ### Provide environment information ```bash Operating…

### CASE-5374 · Domain routing i18n adds default locale to link href's
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: bug/Linking and Navigating/Internationalization (i18n)/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The codesandbox is a simplified setup of our site and config. This should be run with domain routing. ### Current vs. Expected behavior In the example code, the link components that are resolved on the server, get the default locale as an infix. An example of where this happens is on [diamondsbyme.com/rings/]([link]). The menu and product links are structured as a relative link with the locale, even if it is the default locale (en) for that domain, resulting in the link being `[link] <img width="1279" alt="image"…

### CASE-5376 · Parallel server action calls
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍32 💬12 · open · labels: create-next-app/bug/Performance/linear: next/Parallel & Intercepting Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. start the application 2. click start button 3. see console logs come out as ABAB on the server side with two post requests, and on the client side it taking 2 seconds instead of one even though using promise.all ### Current vs. Expected behavior Current behavior of nextjs server actions are they are executed in sequential fashion, however there is no flag or option or a config to let them be executed in parallel. Causing them to block some ux. For example for ai image generation, you'd have to wait for the last call to…

### CASE-5377 · HMR doesn't work in server component with <Link> or/and <Image> when css.module is imported.
- **Principles**: P-A3, P-H1 · **Env**: opera, windows
- **Signals**: 👍1 💬12 · closed · labels: bug/Webpack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. npm i 2. npm run dev 3. comment/uncomment any css property in file: src/app/components/component/component.module.scss 4. see full page reload ### Current vs. Expected behavior currently - HMR doesn't work with scss module when server compoennt contains <Link> or <Image> components expected bahaviour = opposed behaviour ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Home Single Language Binaries: Node: 20.10.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages:…

### CASE-5379 · Unable to parse config export in source file
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬12 · closed · labels: bug/Runtime/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce export matcher config from middleware like this: ```ts export const config = { matcher: [ /* * Match all request paths except for the ones starting with: * - api (API routes) * - monitoring (sentry tunnel route) * - _next/static (static files) * - _next/image (image optimization files) * - favicon.ico (favicon file) * - sitemap.xml (sitemap file) * - robots.txt (robots file) * - manifest.webmanifest (manifest file) * - icon (icons) */ { source:…

### CASE-5381 · Cannot find module 'sharp'
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍4 💬12 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. deploy the project to Vercel 2. open deployed app and notice that the image is not loading 3. check Vercel Logs to see the error. ### Current vs. Expected behavior I already had a similar issue reported here: [link] framework][ref]# That was fixed but I'm now having the same issue again when updating sharp from `0.32.6` to `0.33.0`. The issue happens only once the app is deployed to Vercel: [link] ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide…

### CASE-5384 · Generating incorrect paths on assembly
- **Principles**: P-A3, P-H1 · **Env**: windows, linux, desktop
- **Signals**: 👍18 💬13 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Build your next application on Windows (npm run build) 2. Build the docker image (for example, ``docker build --pull --rm -f "Dockerfile" -t nexttest:latest "."``) 3. Run the docker image on a Linux machine, or on Docker desktop. ### Current vs. Expected behavior The user gets an internal error 500 when visiting your website. You get "Error: Cannot find module 'next/dist\client\components\static-generation-async-storage-external.js'" on server logs. The specifics can be found in [this discussion]([link]…

### CASE-5385 · Error: The render was aborted by the server without a reason.
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍8 💬12 · closed · labels: create-next-app/bug/not stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Link to the code that reproduces this issue To Reproduce image codesandbox - [link] github repository - [link] Current vs. Expected behavior Current behavior I have this error Expected behavior No error at all (because it useless error - it tells me nothing to do or how to fix it - so that's spam) Or something that fix this error and as result issue will not appears again Verify canary release I verified that the issue exists in the latest Next.js canary release Provide environment information Operating System: Platform:…

### CASE-5387 · transpilePackages doesn't tree-shake barrel export in turborepo
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍22 💬12 · closed · labels: bug/SWC
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. clone the repository and run `yarn build` in the root repository ### Current vs. Expected behavior Following the steps from the previous section, I expected the build output to be very light for the / (home page), something like : `λ / 137 B 79.4 kB`. However I instead saw : `λ / 13.7 kB 92.9 kB` Three tabs opened, in the `client.html` one, I clicked the left drawer, chose `app/page` as the chunk to explore and saw packages that aren't used: <img width="1479" alt="CleanShot 2023-09-25 at 11 05 52@user" src="[link]…

### CASE-5390 · Unable to upload images (using uploadthing api) in production website (live site in vercel)
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, ubuntu, next.js, react, typescript
- **Signals**: 👍0 💬12 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP PREEMPT_DYNAMIC Wed Jul 12 22:39:51 UTC 2023 Binaries: Node: 20.3.1 npm: 9.6.7 Yarn: 1.22.19 pnpm: N/A Relevant Packages: next: 13.4.19 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Routing (next/router, next/navigation, next/link) ### Link to the code that…

### CASE-5391 · Image Type Error In Github Actions
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍9 💬12 · closed · labels: bug/Image (next/image)/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:23 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6020 Binaries: Node: 20.1.0 npm: 9.6.4 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.14-canary.2 eslint-config-next: 13.4.13 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link…

### CASE-5393 · Image 组件 height不生效
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Education Binaries: Node: 18.12.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.1 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce ```js { imgsPath.map(item => <div className="max-h-72">…

### CASE-5396 · Images are loaded based on bandwidth
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: bug/Image (next/image)/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Binaries: Node: 16.17.0 npm: 8.15.0 Relevant packages: next: 13.4.1 eslint-config-next: 13.0.3 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that reproduces this issue [link] ### To Reproduce Open Developer tools on Network tab and you can see which images are loaded on first…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5304 · Route "/" used `crypto.randomUUID()` outside of `"use cache"` and without explicitly calling `await connection()` beforehand.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows
- **Signals**: 👍16 💬13 · closed · labels: bug/Cache Components
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Fill the env variables 2. Run pnpm run dev:turbo 3. Open localhost:3000 ### Current vs. Expected behavior I think this shouldn't happen because i don't use any crypto.randomUUID() in my project or at least in my code i don't know if it happens in the node_modules but i think yes. It should work well. I only get some Cosmos DB data... ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Pro Available memory (MB): 16088 Available CPU cores: 16 Binaries: Node: 20.15.1…

### CASE-5312 · AWS ECS Docker deploy not working due to HOSTNAME env variable being overridden
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js, react, typescript
- **Signals**: 👍4 💬13 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [ ] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.5.6 eslint-config-next: 13.0.4 react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.3 Next.js Config: output: standalone ``` ### Which example does this report relate to? with-docker ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug [ref] allowed the user to specify a…

### CASE-5360 · Document that runtime configuration can't be used with prerendering
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js, react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug When I set the value of a `publicRuntimeConfig` property from an environment variable, it is `undefined` when buiding and starting a production bundle. It worked fine with Next.js v8. ## To Reproduce **package.json** ``` "scripts": { "build": "next build", "dev": "TEST_ENV='a value' next", "start": "TEST_ENV='a value' next start" }, "dependencies": { "next": "^9.0.0", "react": "^16.8.6", "react-dom": "^16.8.6" }, "devDependencies": { "@user/core": "^7.5.0" } ``` **.babelrc** ``` { "presets": [ "next/babel" ] } ``` **next.config.js** ``` module.exports = {…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5306 · [turbopack] emotion transform plugin drop `config.import_map` needlessly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, next.js, react, typescript
- **Signals**: 👍0 💬13 · closed · labels: Turbopack/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Sun Aug 6 20:05:33 UTC 2023 Available memory (MB): 4102 Available CPU cores: 2 Binaries: Node: 20.11.1 npm: 10.2.4 Yarn: 1.22.19 pnpm: 8.15.4 Relevant Packages: next: 14.2.15 // Latest available version is detected (14.2.15). eslint-config-next: 14.2.1 react: 18.2.0 react-dom: 18.2.0 typescript: 5.4.5 Next.js Config: output: N/A ``` ### Which example does this report…

### CASE-5350 · Codemods skipping with no reason given
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬13 · closed · labels: good first issue
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report ## Describe the bug Trying to run the name-default-component codemod but it's just skipping all my files. ## To Reproduce Clone `[link] cd into `frontend/src/components/templates` run `codemod name-default-component` ## Expected behavior The components to be transformed into export default function X() ... ## Screenshots ``` ❯ codemod name-default-component --force WARNING: Git directory is not clean. Forcibly…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5308 · testProxy breaks next/font
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux
- **Signals**: 👍22 💬13 · closed · labels: bug/Font (next/font)/Testing/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Add a font like IBM Plex Mono from `next/font` to a component (this works) 2. Set experimental option `testProxy` to true in next.config.js ### Current vs. Expected behavior The text is supposed to be rendered in IBM Plex Mono. Instead, next/font was unable to load the font from Google due to an "invalid header check". ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Sun Aug 6 20:05:33 UTC 2023 Available memory (MB): 4102 Available CPU cores: 2…

### CASE-5318 · Link is truncated in the middle
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍0 💬13 · closed · labels: linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 18.16.1 npm: 9.5.1 Yarn: 1.22.17 pnpm: 8.6.5 Relevant Packages: next: 13.4.9 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: export ``` ### Which example does this report relate to? with-static-export ### What browser are you…

### CASE-5371 · "Error while requesting resource" with `next/font/google` using `next dev --turbopack`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍7 💬12 · closed · labels: Turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Using a computer configured with a MITM HTTPS proxy (ie. a corporate security tool): 1. Start the application (next dev) 2. Go to [link] ### Current vs. Expected behavior Expected: page renders with google font Actual: error. ``` ⨯ [next]/internal/font/google/geist_e531dabc.module.css:8:9 Module not found: Can't resolve '@user/turbopack-next/internal/font/google/font' 6 | font-display: swap; 7 | src: url(@user/turbopack-next/internal/font/google/font?{%22url%22:%22[link]) format('woff2'); > 8 | unicode-range: U+0100-02BA,…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5310 · Calling revalidatePath() or revalidateTag() in Server Actions triggered by Intercepting Routes breaks routing
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬13 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Steps to reproduce bugs 1 and 2: 1. Visit [link] 2. Fill in the **name** input text at **Default children slot box**. 3. Click the **Submit** button below the input field. 4. It works as expected. The **Submit** button changes to **Submitting...** and after 3 seconds it changes back to **Submit**, and we can see the Server Action's response. 5. Click **Nav to /foo** to visit the Intercepting Route **/foo**. Navigating to it works as expected, i.e., you'll see **/src/app/@user/(.)foo/page.tsx** content at the **intercept…

### CASE-5311 · revalidatePath with nextConfig.trailingSlash [true], not working correctly on Vercel deployment
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍9 💬13 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. yarn build > yarn start 2. Go to "/form" 3. Check the checkbox if you want revalidatePath function to revalidate path with trailingSlash end or not 4. Click "submit" button 5. Go to "/time" to check the result you can try this link > [link] ### Current vs. Expected behavior ### Current **nextConfig.trailingSlash : true** - not revalidate Full Route Cache , Data cache or ISR ### Expected **nextConfig.trailingSlash : true** - will revalidate Full Route Cache , Data cache or ISR ### Verify canary release - [X] I verified…

### CASE-5352 · deploying to Vercel causes conditional statements to evaluate incorrectly
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug When rendering a page using Incremental Static Regeneration a *conditional statement is erroneously applied to the wrong element. *I'm referring to conditional rendering expressions of the following form: ```jsx <div> {true && <div />} <div /> </div> ``` ## To Reproduce 1. go to my repo, [link] 2. clone it, `npm install`, and *`npm run dev` 3. inspect element 4. you'll see the following, which is correct: ```html <div> <div class="SHOW"></div> </div> ``` 5. deploy the repo to Vercel 6. go to the deployed site 7. inspect element 8. you'll see the following,…

### CASE-5375 · app router does not resolve routes according to `generateStaticParams` constraints
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. click on "post 2" → it's a post 1. click on "post 1" → it's a post 1. click on "page 2" → **it's a post** 1. click on "page 1" → **it's a post** ### Current vs. Expected behavior the "pages" urls should resolve with the page route, not the post route. ### Provide environment information ```bash irrelevant, happens in stackblitz too. ``` ### Which area(s) are affected? (Select all that apply) Not sure ### Which stage(s) are affected? (Select all that apply) next dev (local) ### Additional context _No response_

### CASE-5382 · Reading search params through useSearchParams() hook causes multiple reenders
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Go to: [link] 2. Open the console 3. Change the select value 4. Check the reenders in console ### Current vs. Expected behavior Following the steps above, it should render only 1 time after updated. It is reender like 300-400 times. [link] framework]/assets/53458125/78477ffd-8ace-4816-9782-6201c465bb7d ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro…

### CASE-5389 · Jest cannot test form actions
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, next.js, react, typescript
- **Signals**: 👍17 💬12 · closed · labels: bug/Testing/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Thu Jul 27 20:01:18 UTC 2023 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: N/A Relevant Packages: next: 13.4.10 eslint-config-next: 13.4.10 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: standalone ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Jest (next/jest) ### Link to the code that reproduces this issue or a…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5315 · Cache revalidation requests cause DOMException [AbortError] due to AbortController reuse
- **Principles**: P-F5, P-H3 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍5 💬13 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:19 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T8103 Binaries: Node: 18.17.1 npm: 9.8.1 Yarn: 1.22.19 pnpm: 8.6.1 Relevant Packages: next: 13.4.16-canary.1 eslint-config-next: 13.4.12 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) caching, data…

### CASE-5347 · NextJS 10 breaks tests by throwing warnings for components using next/link
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍25 💬13 · closed
- **Excerpt**: # Bug report ## Describe the bug Minimal code to replicate: [link] We have a simple component includes a next/link. We have tests that will render the component, and assert various things (assertions omitted in the sample code). This works fine in NextJS 9.5.6. When upgrading to NextJS 10, these tests start throwing the following two warnings: 1. Warning: An update to Link inside a test was not wrapped in act(...). [etc.] 2. Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all…

### CASE-5366 · router.replace/push restores stale query parameters from router cache in static exports (Next 16.2.0+ regression)
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍28 💬12 · closed · labels: Runtime/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `pnpm install && pnpm run build && pnpm run start` 2. Open [link] directly in browser (full page load) 3. Click "router.push('/page-b')" button — navigates to /page-b 4. Click "router.replace('/page-a')" button 5. Observe: URL becomes /page-a?foo=bar&test=true instead of /page-a Summary | Scenario | 16.1.6 | 16.2.1 | |---|---|---| | Visit `/page-a?q=1` → `router.push("/page-b")` → `router.replace("/page-a")` | params cleared: `/page-a` | **params restored from cache**: `/page-a?q=1` | ### Current vs. Expected behavior…

### CASE-5388 · ERR_INVALID_ARG_TYPE when closing app
- **Principles**: P-F5, P-H3 · **Env**: next.js, bootstrap
- **Signals**: 👍5 💬12 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce When i do CTRL + C to close app i get this error, this started happening with `13.5.1` ``` ▲ Next.js 13.5.1 - Local: [link] - Experiments (use at your own risk): · externalDir ✓ Ready in 748ms ^CTypeError [ERR_INVALID_ARG_TYPE]: The "code" argument must be of type number. Received type string ('SIGINT') at process.set [as exitCode] (node:internal/bootstrap/node:123:9) at process.exit (node:internal/process/per_thread:188:24) at process.cleanup…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5331 · [DEBUG-error] Shifting breakpoints
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍9 💬13 · closed · labels: SWC
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? v14.18.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next dev ### Describe the Bug When debugging in VS Code, breakpoints are shifted if template literals occur before these points along with a new line Example - normal work in Next.js version 11.1.2: ```js try { const { id = null, record = null } = req.query; // const timestamp = new Date(); [*]--> const t = ` ok - ${id} `; [*]--> return res.end(t); } catch…

### CASE-5341 · Type '"fill"' is not assignable to type '"fixed" | "intrinsic" | "responsive" | undefined'.
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 16.1.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug I am using a simple `next/image` component: ```js import Image, { ImageProps } from 'next/image' export const Img = ({ className = '', ...props }: ImageProps) => ( <div className="unset-img full-bleed"> <Image className={`${className} custom-img`} layout="fill" {...props} /> </div> ) ``` I get red-squiggly lines on `layout` saying: >…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-5332 · SWC Linux packages not installed in Alpine 3.14 arm64 environment
- **Principles**: P-A5 · **Env**: opera, linux, next.js, desktop
- **Signals**: 👍7 💬13 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.0 ### What version of Node.js are you using? v16.11.1 ### What browser are you using? n/a ### What operating system are you using? Alpine 3.14 (arm64) ### How are you deploying your application? n/a ### Describe the Bug After installing [email] I got the "SWC failed to load" error described in [link] I'm running Node v16.11.1 on Alpine 3.14 (on top of Docker for Desktop, Apple M1). It seems that some of the `@user/swc-linux-*` packages are marked incorrectly as Darwin packages. As a result none of the `@user/swc-*` packages was downloaded. For…

### CASE-5348 · Using next/image with priority property and cloudinary loader config, adds space on top of every image on mobile.
- **Principles**: P-A5, P-A3, P-H1 · **Env**: mobile
- **Signals**: 👍0 💬13 · closed · labels: bug/Image (next/image)
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report ## Describe the bug It renders an additional space on top of every image on **mobile** when using `next/image` with `priority` property and cloudinary loader config. ## To Reproduce [CodeSandbox]([link]) 1. Configure loader in `next.config.js` as written below. 2. Render Image using `next/image` with priority property above the fold and another image without priority property, below the fold. 3. **On mobile**,…

### CASE-5354 · Default fetch polyfill breaks ky-universal
- **Principles**: P-A5 · **Env**: macos, next.js
- **Signals**: 👍7 💬13 · closed
- **Excerpt**: # Bug report I use [`ky-universal`]([link]), which is built on top of `node-fetch`. After upgrading to Next.js 9.4, it has started throwing `"Only absolute URLs are supported"` errors on the Node.js side, even though an absolute URL is set and it works on Next.js 9.3.x. ## To Reproduce 1. Use [`ky-universal`]([link]) in a Next.js project to make a request on the server side. 2. Watch it throw a `"Only absolute URLs are supported"` error. ## Expected behavior Shouldn't throw an error, and should work like it did in Next.js 9.3.x. ## System information - OS: macOS - Version of Next.js: 9.4.0 -…

