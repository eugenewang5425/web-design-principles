# Case Chunk 042 — Round 42

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5101 · SSR-prefetches with middleware break application between deployments
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍20 💬17 · closed · labels: bug/Linking and Navigating/Runtime/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Build and serve the application the first time 2. Visit the index page 3. While keeping the page open, rebuild and serve the application without making any changes 4. Click on a link on the index page ### Current vs. Expected behavior **Current Behavior:** When a middleware is present, hovering over links to pages with `getServerSideProps`, the client sends `_next/data` requests (which is the intended behavior and that's okay). After the first build, the response also includes Headers to signal the client that the…

### CASE-5115 · Styles not getting applied during SSR.
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍5 💬17 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Not Relevant ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Head component/file (next/head / head.js), Static HTML Export (next export) ### Link to the code that reproduces this issue Just fire up create-next-app on your system. ### To Reproduce Create a fresh nextjs application and run it in either dev or production mode. Styles are not getting applied on the initial server side rendering. ### Describe the…

### CASE-5120 · v12.1.5 regression with apollo client in SSR
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍10 💬17 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Mon Feb 21 20:34:37 PST 2022; root:xnu-8020.101.4~2/RELEASE_X86_64 Binaries: Node: 14.19.1 npm: 6.14.16 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.1.5 react: 17.0.2 react-dom: 17.0.2 ``` ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug we use the classic approach of…

### CASE-5127 · Next >=9.5.4: asPath without trailing slash
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug `asPath` on SSR without trailing slash. ## To Reproduce 1. Go to [link] 2. Click on '/page' or '/page/' 3. See 'asPath is /page/' 4. Reload sandbox browser 5. See 'asPath is /page' (without trailing slash) ## Expected behavior 1. Go to [link] 2. Click on '/page' or '/page/' 3. See 'asPath is /page/' 4. Reload sandbox browser 5. See 'asPath is /page/' (with trailing slash)

### CASE-5128 · When stylesheets are imported into pages/_app.js, the server responds the page without styles
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬17 · closed · labels: good first issue/please verify canary
- **Excerpt**: # Bug report ## Describe the bug When stylesheets are imported into _app.js, on the client side everything looks as expected, but when a first load is done (SSR) the server responds unstyled page. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: ```bash git clone [link] yarn install yarn dev ``` Notice that when a first request is made, the response preview is unstyled. The only way I have found to receive the styled page from the server side is adding the stylesheets in the public folder and adding the links `<link rel="stylesheet"…

### CASE-5132 · Next.js 16: Mismatch in RSC file paths causes 404 errors in static exports
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍12 💬16 · open · labels: Output/Linking and Navigating
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the reproduction repository 2. Run `cd next16` 3. Run `npm install` 4. Run `npm run build` (output: 'export' is already set in next.config.ts) 5. Run `npx serve out` 6. Visit `/next16` in a browser (e.g., [link]), open developer tools and check the console for 404 errors. Click the link to navigate to `/next16/page`, refresh and check if similar errors appears. 7. Run `cd ..` 8. Run `cd next15` 9. Repeat 3~6 ### Current vs. Expected behavior ## Current Behavior (Next.js 16.0.0 ~ 16.1.1 + output: 'export'): When…

### CASE-5148 · Hydration failed because the initial UI does not match what was rendered on the server.Hydration failed because the initial UI does not match what was rendered on the server.Hydration failed because the initial UI does not match what was rendered on the server.
- **Principles**: P-F4 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍6 💬16 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP PREEMPT_DYNAMIC Wed Jan 4 12:14:09 UTC 2023 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: N/A pnpm: 7.24.3 Relevant packages: next: 13.1.2 eslint-config-next: 13.1.2 react: 18.2.0 react-dom: 18.2.0 warn - Latest canary version not detected, detected: "13.1.2", newest: "13.1.3-canary.1". Please try the latest canary version (`npm install next@user`) to confirm the issue still exists before…

### CASE-5170 · IE11 not working after v9.2.1-canary.2 update
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍35 💬16 · closed
- **Excerpt**: # Bug report ## Describe the bug First of all: sorry for posting a boring IE11 issue 😭 After Updating to v9.2.1 our project stoped working on IE11. The pages didnt load as expected and the css wasn't applied correctly. So we went through the canary releases and got to the point, that the changes in v9.2.1-canary.2 cause the behaviour. More specificly the pullrequest "Fix hydration with custom _app and granular chunks [ref]" file "packages/next/build/entries.ts" line 129. ## To Reproduce 1. Go to with-polyfills example 2. Open examples\with-polyfills\client\polyfills.js and add the following…

### CASE-5174 · Store state differs between first and successive ssr in with-redux-saga example
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: good first issue
- **Excerpt**: ## Example name with-redux-saga ## Describe the bug Store state differs between first and second (actually all successive) server-side renders. ## To Reproduce 1. `npx create-next-app --example with-redux-saga with-redux-saga-app` 2. `cd with-redux-saga` 3. `npm install` 4. `npm run dev` 5. Open web browser and check the store value for `placeholderData` (has data) 6. Reload the web browser and check the store value for `placeholderData` (is null) Only solution is to restart the server. ## Expected behaviour I expected placeholderData to have the same value after every browser reload.

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5102 · Module not found: Can't resolve 'next/og'
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍0 💬17 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Deploy it on vercel ### Current vs. Expected behavior <img width="773" alt="image" src="[link] framework]/assets/63142229/e7d1d7e3-015c-4aab-9840-62128880dc45"> ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.0.0: Fri Sep 15 14:42:57 PDT 2023; root:xnu-10002.1.13~1/RELEASE_ARM64_T8112 Binaries: Node: 18.18.0 npm: 10.2.3 Yarn: 1.22.19 pnpm:…

### CASE-5103 · [NextJS 14] AWS Amplify - ReferenceError: Request is not defined
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬17 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Using NextJS 14 - npm run build (success) - launch the app (fails - Request reference error) ### Current vs. Expected behavior I am using AWS Amplify to host my NextJS app; using a custom build image: public.ecr.aws/docker/library/node:20.9.0. Everything works fine with NextJS 13.5.6 but when upgrading to NextJS 14 I encounter an error. When running npm run build, the app compiles successfully but when navigating to the app using my browser it does not work. The AWS amplify logs show this error : ``` class NextRequest…

### CASE-5104 · Request memoization sometimes doesn't work
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍15 💬17 · closed · labels: bug/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link])/layout.tsx:27,1-28,19 ### Description For some reason, request memoization doesn't work for identical requests in the same render pass. > In the examples below, I added logs `react.shared-subset.development.js` to display React's current cache. > > ![image]([link] framework]/assets/10157660/d66a81c6-f6e6-421e-a343-dc2c1e0ab9ee) In the first video, we can see that request memoization works as expected when we start the application and open the page for the first time: [link]…

### CASE-5105 · next/image not working when using in esm projects
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍1 💬17 · closed · labels: bug/linear: next/locked/Module Resolution
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 18.17.1 npm: 9.6.7 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.20-canary.12 eslint-config-next: 13.4.19 react: 18.2.0 react-dom: 18.2.0 typescript: 5.2.2 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ###…

### CASE-5107 · next/image broken in AWS Amplify for 13.4.13+
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react, typescript
- **Signals**: 👍15 💬17 · closed · labels: bug/Image (next/image)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 18.17.0 npm: 9.8.1 Yarn: 4.0.0-rc.48 pnpm: N/A Relevant Packages: next: 13.4.13 eslint-config-next: 13.4.13 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A note that this is probably not helpful, as it runs locally under this environment I don't have a way to get details on the amplify hosting environment ``` ### Which area(s) of…

### CASE-5118 · [NEXT-811] [appDir] `next/image` with `priority` doesn't generate `<link rel="preload" ...>` tag.
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍17 💬17 · closed · labels: Image (next/image)/Metadata/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:54 PDT 2022; root:xnu-8792.41.9~2/RELEASE_X86_64 Binaries: Node: 18.10.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.13.0 Relevant packages: next: 13.0.5-canary.2 eslint-config-next: 13.0.4 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the…

### CASE-5131 · SCSS modules cannot load images correctly with `next-images` package
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬17 · closed · labels: Upstream
- **Excerpt**: **Update**: Read my other comments below for a more pinpointed problem. # Bug report ## Describe the bug I tried to set a background image in a SCSS module with `background: url("./footer-region-bg.jpg") repeat;` (is in the same directory as the component). But this results in the following when fetching the image. ![image]([link]) This was working with `@user/next-sass`, but it doesn't with the native scss modules. ## To Reproduce Load an Image from the same directory as the component in an SCSS module like mentioned above. Use the native SCSS modules from NextJs. ## Expected behavior The…

### CASE-5134 · Turbopack removes styles from TailwindCSS/DaisyUI
- **Principles**: P-A3, P-H1 · **Env**: opera, tailwind
- **Signals**: 👍30 💬16 · open · labels: Turbopack/linear: turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in dev mode with Turbopack active (next dev --turbopack) ### Current vs. Expected behavior When the application is started with turbopack some styles from DaisyUI are removed. <img width="287" height="216" alt="Image" src="[link] /> But it should look like this <img width="287" height="208" alt="Image" src="[link] /> If you start it without turbopack the styles are normal. The Problem occurs in 15.4.1 in 15.4.0 the styles are normal too. ### Provide environment information ```bash Operating…

### CASE-5138 · Usage of Recoil in Nextjs app (turborepo) induces a TypeError: Cannot destructure property 'ReactCurrentDispatcher.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: bug/Output
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. NPM install globally (so that recoil package is also installed, that is the one causing issue) 2. Navigate to apps/user-app and npm run dev 3. Click localhost:3000 ![image]([link] framework]/assets/59303778/81154a8c-ace2-4b96-9eef-141329b789d2) ![image]([link] framework]/assets/59303778/7786d7c0-1ad8-4d31-b61d-3884b18674c1) ### Current vs. Expected behavior I have added store as package in the turborepo, which contains Recoil as state management. A hook named "useBalance" was added, which returns the state of an…

### CASE-5141 · ImageError: "url" parameter is valid but upstream response is invalid
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: bug/Image (next/image)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] [link] ### To Reproduce 1. pnpm i 2. mkcert localhost (can skip) 3. pnpm dev (this run custom server - web/server.js) ### Current vs. Expected behavior when run without a custom server everything works correctly. But with the custom server, I have an issue ``` web:dev: ⨯ upstream image response failed for /next-js.jpg TypeError: fetch failed web:dev: at Object.fetch (node:internal/deps/undici/undici:11576:11) web:dev: at async globalThis.fetch…

### CASE-5147 · [NEXT-1102] `opengraph-image` is 404 in route group segments, both image and dynamic
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍7 💬16 · closed · labels: Metadata/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 20.6.0: Tue Apr 19 21:04:45 PDT 2022; root:xnu-7195.141.29~1/RELEASE_X86_64 Binaries: Node: 16.19.0 npm: 9.3.1 Yarn: 3.4.1 pnpm: N/A Relevant packages: next: 13.3.1-canary.2 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue…

### CASE-5150 · Next 12.2 ReferenceError: exports is not defined
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍9 💬16 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Next 12.2(-12.2.2) ### Describe the Bug I'm no longer able to import code with `exports` properly in Next 12.2 ### Expected Behavior Next should properly bundle these files ### Link to reproduction [link] ### To Reproduce Pull reproduction repo and try running on Next `12.2.0`, you'll see the following error: <img width="600" alt="image" src="[link]> You can check out the `working` branch, which just has Next `12.1.6`, after installing the older version the…

### CASE-5178 · Sitemap is being generated incorrectly and an error in development also appears when I try to access /sitemap.xml
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: bug/Output/Metadata/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] [link] ### To Reproduce As I said, in development mode, the sitemap gives the following error when I try to access the MY_URL/sitemap.xml route: ![image]([link] framework]/assets/96627244/83ccf42e-3735-4570-a195-3655220eadf9) And the second problem is that in the production version where the sitemap is generated, it is being generated incorrectly, when I had few routes registered there, it generated ok, but now that there are a lot of routes it is getting buggy. Showing the print below [link] ![image]([link]…

### CASE-5187 · npx create-next-app@user creates project that is not working
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍0 💬15 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information npx create-next-app@user ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue ... ### To Reproduce MacBook Pro 2020 Apple M1 Ventura npx create-next-app@user npm run dev (no changes were made) ### Describe the Bug Default page is not working. <img width="411" alt="Screenshot 2023-02-11 at 9 12 18 PM" src="[link]> ### Expected Behavior project to start normally. ### Which browser are…

### CASE-5191 · Output standalone mode not omtimizing images?
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍0 💬15 · closed · labels: Image (next/image)/Output/please verify canary
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Hello, I use [automatically coping traced file]([link]) for deploying my site to ec2 server. I follow this documentation- [link] Here first of all I updated my `next.config.js` file- ``` module.exports = { output: 'standalone', } ``` Then after building I manually copy `static` folder to `standalone/.next/` and also copy `public` folder to `standalone/`. After copying the run `node server.js`. It running successfully. But image optimization not working. In…

### CASE-5196 · NextImage always taking width to shrink images produces blurry result on wide images
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react
- **Signals**: 👍1 💬15 · closed · labels: bug/Image (next/image)/please verify canary
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Single Language Binaries: Node: 17.9.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.1.7-canary.31 react: 18.1.0 react-dom: 18.1.0 ### What browser are you using? (if relevant) Version 104.0.5105.0 (Official Build) canary (64-bit) ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug ![image]([link]) This is a result of hovering over the image link in…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5106 · Internal Server Error on Non-POST w/ Body
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows, next.js, react, typescript
- **Signals**: 👍6 💬17 · closed · labels: bug/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Home Binaries: Node: 20.5.1 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.14-canary.1 eslint-config-next: 13.4.13 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue or a replay of the bug…

### CASE-5108 · Prop `className` did not match between server and client when "use client" and edge runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js, react
- **Signals**: 👍0 💬17 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash next version: 13.4.9 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue or a replay of the bug See "To Reproduce" ### To Reproduce Code: ``` "use client"; import { FC } from "react"; import Link from "next/link"; import { usePathname } from "next/navigation"; import LogoIcon from "icons/logo.svg"; import { Pages } from "constants/pages"; import styles from…

### CASE-5109 · Next.js server returns `connection: close` header for all routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍5 💬17 · closed · labels: bug/Output/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:30 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T8103 Binaries: Node: 20.3.0 npm: 9.6.7 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.7-canary.2 eslint-config-next: 13.4.6 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime),…

### CASE-5110 · [NEXT-1183] compress: false and middleware causes blank page in development
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍16 💬17 · closed · labels: bug/Runtime/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Dec 19 20:44:01 PST 2022; root:xnu-8020.240.18~2/RELEASE_X86_64 Binaries: Node: 16.19.0 npm: 8.19.3 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.3.1-canary.19 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that…

### CASE-5113 · With MSW example: fetch failed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 108, next.js, react
- **Signals**: 👍7 💬17 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ❯ npx --no-install next info Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:45:05 PDT 2022; root:xnu-8020.101.4~15/RELEASE_X86_64 Binaries: Node: 19.3.0 npm: 9.2.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.1.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which example does this report relate to? with-msw ### What browser are you using? (if relevant) Chrome 108.0.5359.124 (Official…

### CASE-5114 · @user/font font-weight not working correctly in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, next.js, react
- **Signals**: 👍6 💬17 · closed · labels: Font (next/font)
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:46:32 PDT 2022; root:xnu-8020.101.4~15/RELEASE_ARM64_T6000 Binaries: Node: 14.19.0 npm: 6.14.16 Yarn: 1.22.17 pnpm: 7.13.2 Relevant packages: next: 13.1.1 eslint-config-next: 13.1.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font) ### Link to the code that reproduces this issue…

### CASE-5116 · `font-weight` rendered differently on Chrome with `@user/font`
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, next.js, react
- **Signals**: 👍2 💬17 · closed · labels: bug/Font (next/font)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: 1.22.19 pnpm: 7.12.0 Relevant packages: next: 13.0.7-canary.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to reproduction - Issues with a link to…

### CASE-5119 · Using `use` in a Server Component freezes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍2 💬17 · open · labels: bug/Linting
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ---->npx --no-install next info Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 Binaries: Node: 16.11.1 npm: 8.18.0 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 13.0.2 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) n/a ###…

### CASE-5121 · Mocking issue when using Jest with the Rust compiler (`next/jest`)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍22 💬17 · closed · labels: SWC/Testing
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 17.2.0 ### What browser are you using? Chrome ### What operating system are you using? macOS 12.0.1 ### How are you deploying your application? Vercel ### Describe the Bug I'm trying to test my Next.js 12 API Routes using Jest with the Rust compiler thanks to `next/jest` (which is amazing). It looks like I can't use any mocking feature, for example a basic `jest.mock()`. When trying to customize a mock in a test, I would get an error similar to: ``` TypeError: mockFn.mockReturnValue is not a function…

### CASE-5122 · change default _next in request path into something custom
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍14 💬17 · closed · labels: bug/locked
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 12.22.7 / 14.17.5 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Local & Docker container ### Describe the Bug The following no longer works in Next.js 12 in combination with [i18n]([link]) Requests for static assets return a 404. ```js module.exports = { assetPrefix: '/docs', rewrites() { return [ { source: '/docs/_next/:path*', destination: '/_next/:path*' } ] } } ``` _Originally posted by @user in [link]…

### CASE-5123 · next/head deduping process can duplicate and overwrite dynamically inserted header tags
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍11 💬17 · closed · labels: bug/Metadata/locked/stale
- **Excerpt**: ### What example does this report relate to? Next/Head ### What version of Next.js are you using? ^11.1.0 ### What version of Node.js are you using? ^15.6.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? AWS EC2 ### Describe the Bug If you have integrations which dynamically add elements to the html document head, if the item added falls into the "old tags" range for the Next/Head implementation, any tags added dynamically will be duplicated because they no longer fall within the "old tags" range.…

### CASE-5124 · `next dev` will not resolve missing routes using yarn 2 zero-install
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, macos, next.js
- **Signals**: 👍13 💬17 · closed · labels: bug/please verify canary
- **Excerpt**: **Next.js version**: 10.0.6 **Node.js version**: v14.15.0 **Browser**: Firefox **OS**: macOS **How are you deploying your application?**: `next dev` Reproduce with a fresh next-app, migrating to yarn 2 with pnp, installing, and starting a dev server: ``` yarn create next-app reproduction cd reproduction yarn set version berry yarn install yarn dev ``` Then navigate to an undefined route, e.g. [link] **Expected Behavior**: The app should render a static 404 error page stating `This page could not be found` **Actual Behavior**: The browser tab spins forever, and the page never resolves.

### CASE-5125 · Next 10.0.6 with webpack 5 & custom server throws `Cannot read property 'replace' of undefined`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 88, opera, macos, webpack, next.js
- **Signals**: 👍17 💬17 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 12.18.3 **What browser are you using?** Chrome 88 **What operating system are you using?** macOS **How are you deploying your application?** other **Describe the Bug** I have a custom express server. I'm using webpack 5 (via yarn resolutions) I've updated to next 10.0.6, and starting in dev mode throws ``` info - Using external babel configuration from /Users/****/Projects/node/****/packages/renderers/front/babel.config.js HookWebpackError: Cannot read property 'replace' of undefined at…

### CASE-5129 · apple-app-site-association static file is triggering dynamic routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, next.js
- **Signals**: 👍0 💬17 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug In our /public folder we have a file called `apple-app-site-association` that is used for deep linking with iOS, etc. We also have a dynamic route setup that looks like this /[slug]/[id] When on an iOS device safari looks for this static file `apple-app-site-association` but for some reason it's still triggering Next.js routing. This is then causing the slug to be `apple-app-site-association` and trying to then make an API call with that filename value as the string. We've recently upgraded to the latest version of Next.js and it has only recently happened…

### CASE-5130 · Using writeHead to redirect in `getServerSideProps` fails on Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari
- **Signals**: 👍1 💬17 · closed
- **Excerpt**: # Bug report ## Describe the bug Using a Next `Link` component to route to a page where there is a check to see if a cookie is defined, and if so to redirect the user seems to fail on Safari. ```js // login.js export async function getServerSideProps(ctx) { // Nookies parse cookies function to get the current cookies const cookies = parseCookies(ctx); if (cookies.token) { ctx.res.writeHead(303, { Location: "/admin" }); ctx.res.end(); } return { props: {} }; } ``` The `Link` component points to `/login` and is in the global navigation. It seems that clicking on this on Safari changes the…

### CASE-5133 · Memory leak with axios and AbortSignal in middleware in next >=15.4
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, ios
- **Signals**: 👍2 💬16 · open · labels: Middleware
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run `npm install` 2. Build the next app: `npm run build` 3. Run the mock server in a separate terminal window: `node mockServer.js` 4. Start the next app: `npm run start` 5. Make many requests (I do 1,000) to a single page 6. Take a heap snapshot using `kill -USR2 <next-server PID>`. You can find the `PID` by running `ps aux | grep "next-server (v15.5.5)"` 7. Open the heap snapshot in chrome dev tools and look for increasing memory 8. Repeat steps 5-7 with all other pages. You will notice that `/middleware/axios` is…

### CASE-5137 · Middleware can't detect image requests
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍5 💬16 · closed · labels: bug/Middleware/Image (next/image)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in dev mode (npm run dev) 2. Check for the console to see if middleware pathname _next/image exist ### Current vs. Expected behavior After running the application I expected to see a log message that shows image requests but only pathnames listed is; ⚠️ /vercel.svg ⚠️ /_next/static/css/app/layout.css ⚠️ /_next/static/chunks/webpack.js ⚠️ /next.svg ⚠️ /_next/static/chunks/main-app.js ⚠️ /_next/static/chunks/app-pages-internals.js ⚠️ /_next/static/chunks/app/page.js ⚠️ /favicon.ico /_next/image is…

### CASE-5139 · Font preload not working as expected
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera
- **Signals**: 👍8 💬16 · closed · labels: bug/Font (next/font)
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce npm run build npm run start Navigate to localhost:3000 in dev tools in Chrome and observe the absence of a preload for the fonts in the initial HTML response ### Current vs. Expected behavior Expected Both the Google and Local fonts should have a link rel preload in the first HTML sent back from the server Actual Neither font has a preload entry in the first HTML sent back from the server and they aren't downloaded until the CSS references them. ### Provide environment information ```bash Operating System: Platform: win32…

### CASE-5140 · [MAJOR BUG] Next/link forces scroll to top of {children} of layout
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 1, opera, windows, next.js
- **Signals**: 👍12 💬16 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Issue reproduced on Chrome 1. Start app (npm run dev) 2. Click links ### Current vs. Expected behavior Current: The link brings you to a page, and scrolls to beginning of {children}, not to top of page. Expected: Always brings you to top of opened page. ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: Windows Arch: x86 Version: Windows 10 latest Binaries: Node: 21.4.0 npm: 10.1.0 Yarn: N/A pnpm: N/A…

### CASE-5142 · InternalError: too much recursion on Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, next.js
- **Signals**: 👍3 💬16 · closed · labels: create-next-app/bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Install depedencies. 2. Run the `dev` task. 3. Open [link] in Firefox (I'm using 118.0.2, which should be latest) ### Current vs. Expected behavior Following the steps above, without touching any code from the reproduction example, you will see an `InternalError: too much recursion` like the one screenshotted below: ![InternalError: too much recursion]([link] framework]/assets/147034745/f466d451-f502-45f0-b1c2-f0f13b84946a) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary…

### CASE-5143 · Router.push does not support UC browser or QQ browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍5 💬16 · closed · labels: bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open the [Codesandbox]([link]) 2. Copy the [Link]([link]) to uc browser 3. Click the "click to other page" button 4. Screen show Errors 5. error show <code>undefined is not an object (evaluating 'stream.getReader')</code> ### Current vs. Expected behavior ### Current Behavior The "click to other page" button is not working but screen show errors . ### Expected Behavior it will navigation to test page. When open the link in chrome, it will be ok. ### Verify canary release - [X] I verified that the issue exists in the…

### CASE-5146 · [NEXT-1032] A Node.js API is used (process.turbopack at line: 47) which is not supported in the Edge Runtime.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍33 💬16 · closed · labels: bug/Runtime/Turbopack/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:43 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8112 Binaries: Node: 19.7.0 npm: 9.5.0 Yarn: 3.5.0 pnpm: N/A Relevant packages: next: 13.3.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this…

### CASE-5149 · /basePath redirects to root in NextJS 13 (appDir)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 106, next.js, react
- **Signals**: 👍30 💬16 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:19:52 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T6000 Binaries: Node: 16.14.0 npm: 8.3.1 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Firefox 106.0.1 ### How are you deploying your application? (if relevant) _No response_ ### Describe the…

### CASE-5151 · router.asPath shows homepage as "/index" and excludes query string
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, next.js
- **Signals**: 👍6 💬16 · closed · labels: Linking and Navigating
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Standard Vercel env (nextjs auto-detected) ### What browser are you using? (if relevant) Chrome, Safari, all the same result ### How are you deploying your application? (if relevant) Vercel on push ### Describe the Bug Part 1. When using router.asPath on Vercel, it'll return "/index" for the homepage "/" route. Part 2. Also, when using query strings in the url i.e. "/zzz=1", it'll also return just "/index" **To observe this behaviour, look at source via "View Page…

### CASE-5152 · `outputStandalone` option does not include public directory in monorepo setup
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chromium, edge, linux, ubuntu, react, next.js
- **Signals**: 👍0 💬16 · closed · labels: Output
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Fri Nov 26 16:13:00 UTC 2021 Binaries: Node: 16.12.0 npm: 8.1.0 Yarn: 1.22.15 pnpm: N/A Relevant packages: next: 12.0.9 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.9 ### What version of Node.js are you using? 16.12.0 ### What browser are you using? Chromium Edge ### What operating system are you using? Linux ### How are you deploying your application? next build with `outputStandalone: true` ### Describe the Bug `outputStandalone`…

### CASE-5153 · Script component results in different attributes based on the strategy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react, next.js
- **Signals**: 👍2 💬16 · closed · labels: bug/Script (next/script)/locked/stale
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) next info output: ``` Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 20.6.0: Wed Nov 10 22:23:07 PST 2021; root:xnu-7195.141.14~1/RELEASE_X86_64 Binaries: Node: 16.13.0 npm: 8.1.0 Yarn: 1.22.11 pnpm: 6.24.2 Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ``` ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next…

### CASE-5154 · Fast refresh errors in next 12.0.8
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, macos, react, next.js
- **Signals**: 👍0 💬16 · closed · labels: bug
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:54 PST 2021; root:xnu-8019.61.5~1/RELEASE_X86_64 Binaries: Node: 14.17.6 npm: 6.14.15 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? Microsoft Edge dev ### What operating system are you using? macOS Monterey v12.1 ### How are you deploying your application? Vercel…

### CASE-5155 · next/script does not trigger onLoad callback when used with beforeInteractive strategy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, next.js
- **Signals**: 👍8 💬16 · closed · labels: bug/Script (next/script)/please verify canary
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) _No response_ ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 14.15 ### What browser are you using? Chrome ### What operating system are you using? Linux ### How are you deploying your application? next dev ### Describe the Bug According to the [docs]([link]), `onLoad` callback of `next/script` component can be used either with `beforeInteractive` and `afterInteractive` strategies. But when using with `beforeInteractive` strategy, `onLoad` callback never gets called. ### Expected Behavior…

### CASE-5156 · SyntaxError: Unexpected token 'export'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍1 💬16 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 12.22.0 ### What browser are you using? Chrome @user ### What operating system are you using? Windows 10 ### How are you deploying your application? Manual ### Describe the Bug Nextjs is failing on build of a third party package. The third party package is using ES6 syntax for exports. ``` export { Root } from "./.internal/core/Root"; ^^^^^^ SyntaxError: Unexpected token 'export' at wrapSafe (internal/modules/cjs/loader.js:915:16) at Module._compile (internal/modules/cjs/loader.js:963:27) at…

### CASE-5157 · TypeError: comments.map is not a function (Unhandled Runtime Error)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍1 💬16 · closed · labels: examples
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? local ### Describe the Bug Followed the instructions here: [link] framework]/tree/canary/examples/blog-with-comment Ran it. On one of the posts under /posts (for example, posts/prancing-pony), wait a few seconds after the post loads. The following error appears, Unhandled Runtime Error TypeError: comments.map is not a function Source .next\static\chunks\main.js…

### CASE-5158 · next/script onLoad run once per cache Key (id, src)
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍5 💬16 · closed · labels: Script (next/script)
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 14.18.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? codesandbox ### Describe the Bug When using more than one `Script` with same `id` or `src`, only first script that complete load trigger the `onLoad` prop. Same problem happens using one `Script` but after unmount and remount, for example when navigating throughout client-side router the `onLoad` will not be called. @user ### Expected Behavior `Script` component…

### CASE-5159 · `eval` not allowed in Middleware pages/foo/_middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍2 💬16 · closed · labels: bug/Middleware
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? not deployed, tested on localhost ### Describe the Bug Whenever I try to use the module `jsonwebtoken` inside a middleware, I got the following warnings on the console: ``` warn - ./node_modules/events/events.js `eval` not allowed in Middleware pages/foo/_middleware ./node_modules/function-bind/implementation.js `eval` not allowed in Middleware pages/foo/_middleware…

### CASE-5160 · CSS @user url for loading fonts doesnt work
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: firefox, chrome, opera, windows, next.js
- **Signals**: 👍6 💬16 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 17.0.1 ### What browser are you using? Firefox, Chrome ### What operating system are you using? Windows 10 ### How are you deploying your application? next start ### Describe the Bug App.scss: `@user url('[link]);` Loading the font with next dev works but not with next build (next start). Tested with `optimizeFonts: false` but with same result. ### Expected Behavior In next 11.0.1 the font was imported correctly ### To Reproduce Inside App.scss `@user url('[link]);` 1. next build 2. next start

### CASE-5161 · v12.0.1 error: not implemented: regenerator: complex pattern in catch clause
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, next.js
- **Signals**: 👍4 💬16 · closed · labels: SWC
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 14.15.0 ### What browser are you using? chrome ### What operating system are you using? mac ### How are you deploying your application? NODE_OPTIONS='--inspect' next dev ### Describe the Bug I got this error `thread '<unnamed>' panicked at 'not implemented: regenerator: complex pattern in catch clause', /Users/runner/.cargo/registry/src/github.com-1ecc6299db9ec823/swc_ecma_transforms_compat-0.47.1/src/es2015/regenerator/case.rs:1232:30` after upgrade from v11 to v12 ### Expected Behavior it should…

### CASE-5162 · swcMinify: true leads to "Expected ident" Webpack/Terser error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, webpack, next.js
- **Signals**: 👍0 💬16 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### What version of Next.js are you using? 11.1.3-canary.81 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Firefox ### What operating system are you using? macOS ### How are you deploying your application? next dev/next build/Vercel ### Describe the Bug I opted into the SWC compiler ~~and am getting this error when I try to run `yarn build`:~~ Now, I'm getting an issue with Terser, that seems to go away when I remove `swcMinify: true` from my `next.config.js` ``` info - Creating an optimized production build Failed to compile.…

### CASE-5163 · TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, ubuntu, react, webpack, next.js
- **Signals**: 👍1 💬16 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 15.4.0 ### What browser are you using? Edge ### What operating system are you using? Ubuntu 20.04 (WSL2) ### How are you deploying your application? Heroku ### Describe the Bug Upon initialising the app with create-next-app and running the app in development it just errors out to this ` TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function ` ### Expected Behavior The expected behavior is to view the index page after initializing the app and running in dev mode.…

### CASE-5164 · Web Workers are broken in Next.js 11
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍6 💬16 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 11 ### What version of Node.js are you using? v14.16.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug WebWorker behavior with Next.js 11 is highly volatile with several different errors occurring when importing them. ImportScripts also fails inside the workers. The project as-is worked fine with Next.js 10.2.3. ![image]([link]) ### Expected Behavior WebWorker works as expected. ### To Reproduce The default example for Web Workers is broken…

### CASE-5165 · SRS Caching - The caching stopped working after updating the NextJs version
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬16 · closed · labels: examples/bug/please verify canary
- **Excerpt**: ### What example does this report relate to? srs-caching ### What version of Next.js are you using? 10.2.1 ### What version of Node.js are you using? 14.15.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Custom server - Express ### Describe the Bug The caching stopped working after upgrading from version 10.2.0 to 10.2.1, and there are ajax calls that never finish, although the page loads. Also, there is an unhandled server-side exception: ``` (node:2028) UnhandledPromiseRejectionWarning: TypeError: argument…

### CASE-5166 · Content Security Policy failure caused by is-generator-function dependency
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, next.js
- **Signals**: 👍8 💬16 · closed · labels: bug/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.1.2 ### What version of Node.js are you using? 15.12.0 ### What browser are you using? Firefox ### What operating system are you using? macOS ### How are you deploying your application? Other ### Describe the Bug "Content Security Policy: The page’s settings blocked the loading of a resource at eval (“script-src”)." Caused by `is-generator-function`. Output of `npm why is-generator-function`: ``` [email] node_modules/is-generator-function is-generator-function@"^1.0.7" from [email] node_modules/util util@"^0.12.0" from [email] node_modules/assert…

### CASE-5167 · Error: Route did not complete loading: /projects
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍18 💬16 · closed
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14.15.0 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **How are you deploying your application?** Vercel **Describe the Bug** I am trying to build a simple route for my portfolio. The route is '/projects'. I've added a projects.js file in the pages directory with the logical code and when I use next/link for client side transition, I get an error: Route did not complete loading: "projects". When I use regular anchor tag for routing, there is no issue.…

### CASE-5168 · Cannot destructure property `publicRuntimeConfig` of 'undefined' or 'null'. (v9.5.0)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍17 💬16 · closed · labels: good first issue/locked
- **Excerpt**: # Bug report After upgrading from 9.4.4 to 9.5.0 I get an error after building (in dev mode all works fine): ``` Cannot destructure property `publicRuntimeConfig` of 'undefined' or 'null'. ``` # Code: ```js import getConfig from "next/config"; const { publicRuntimeConfig } = getConfig() ``` ## System information - OS: macOS - Browser: chrome - Version of Next.js: 9.5.0

### CASE-5169 · Next.js is stuck compiling
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍0 💬16 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug When I start my express server, which implements next, I navigate to a page and it starts compiling it as usual. It then proceeds stay there and never completes compiling. This happens when in dev mode. ## To Reproduce Repo: [link] Steps to reproduce the behavior, please provide code snippets or a repository: 1. `npm i` 2. `npm run dev` 3. load URL output at bottom `[link] 4. See build stuck ## Expected behavior Expect the compile to finish and the page to be built ## System information - OS: macOS - Browser: chrome, FF - Version of Next.js: [email] ##…

### CASE-5173 · [HMR] is extremely slow after v8.1.1-canary.25 update
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, windows, next.js
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: # Bug report ## Describe the bug for 8.1.1-canary.24 release, HMR takes about 0.2 seconds on my 2016 MacBook pro. for 8.1.1-canary.25~28 release, HMR takes about 1.0+ second on my 2016 MacBook pro. ## To Reproduce 1. install [email]-canary.25+ 2. start server 3. trigger HMR by adding any content ## Expected behavior HMR should stay fast. ## System information - OS: [e.g. macOS, Windows] macOS - Browser (if applies) [e.g. chrome, safari] : CHROME - Version of Next.js: [e.g. 6.0.2]: 8.11-canary.25 ## Additional context Add any other context about the problem here.

### CASE-5180 · Unhandled Runtime Error：ChunkLoadError: Loading chunk app/layout failed.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍8 💬15 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1、clone project 2、pnpm install 3、pnpm run dev 4、open the page and you can see chrome console output: Uncaught SyntaxError: Invalid or unexpected token 5、same minutes you can see error:Uncaught ChunkLoadError: Loading chunk app/layout failed. <img width="998" alt="image" src="[link] framework]/assets/4385154/37de7c45-c9dc-442d-9360-e7c69d66f949"> ### Current vs. Expected behavior 1、First time open the page is error but you refresh page is work! 2、I expected is work all the time ### Provide environment information ```bash…

### CASE-5183 · Internationalization and not-found page not render
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, next.js, react, typescript
- **Signals**: 👍0 💬15 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.17.1 npm: N/A Yarn: N/A pnpm: 8.6.7 Relevant Packages: next: 13.4.20-canary.26 eslint-config-next: 13.4.10 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which example does this report relate to? app-dir-i18n-routing ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant)…

### CASE-5184 · Api route req on close event not triggered when request is cancelled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, next.js, react, typescript
- **Signals**: 👍2 💬15 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 18.14.2 npm: 9.5.0 Yarn: 1.22.19 pnpm: N/A Relevant Packages: next: 13.4.10-canary.8 eslint-config-next: 13.4.8 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this…

### CASE-5185 · AppRouter Suspense not working in Safari on Mac or iOS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, ios, macos, next.js
- **Signals**: 👍18 💬15 · closed · labels: Upstream
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash macOS Ventura 13.4.1 Safari Version 16.5.1 (18615.2.9.11.7) ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce Open the app in Chrome `[link] Observe that the page is rendered quickly and "Loading car..." is displayed until the car has loaded Open the app in Safari `[link] Observe that the page does not render until the car…

### CASE-5186 · using lodash-es & pnpm & turberepo(monorepo), Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react, typescript
- **Signals**: 👍1 💬15 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Sat Jun 18 17:07:22 PDT 2022; root:xnu-8020.140.41~1/RELEASE_ARM64_T6000 Binaries: Node: 18.15.0 npm: 9.5.0 Yarn: 1.22.19 pnpm: 7.32.4 Relevant packages: next: 13.4.6 eslint-config-next: 13.4.3 react: 18.2.0 react-dom: 18.2.0 typescript: 4.8.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5189 · SVGs (specifically Lottie file SVG json) not rendering properly in 13.0.3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, next.js, react
- **Signals**: 👍15 💬15 · closed
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 16.17.1 npm: 8.15.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.0.3 eslint-config-next: 13.0.3 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Firefox ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug After…

### CASE-5190 · (improve error message) Error: Functions cannot be passed directly to Client Components because they're not serializable.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍1 💬15 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:22 PDT 2022; root:xnu-8020.121.3~4/RELEASE_X86_64 Binaries: Node: 16.17.1 npm: 8.15.0 Yarn: N/A pnpm: 7.13.6 Relevant packages: next: 13.0.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug Using…

### CASE-5192 · Error code: 5 on Chrome for Mac
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos, next.js
- **Signals**: 👍4 💬15 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information OS: MacOs Catalina OS version: 10.15.7 Browser: Google Chrome Browser version: 104.0.5112.101 Next.js version: 12.1.6 ### What browser are you using? (if relevant) Google Chrome ### How are you deploying your application? (if relevant) Plesk ### Describe the Bug Error code: 5 shows when I go through the app I'm building. This error only shows for google chrome for Mac ![image]([link]) ### Expected Behavior I expect that the website works fine for all…

### CASE-5193 · next/image won't convert images to webp
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, windows, next.js, react
- **Signals**: 👍0 💬15 · closed · labels: bug/Image (next/image)/please verify canary
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 16.15.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.2.2 eslint-config-next: 12.2.2 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome Version 103.0.5060.114 (Official Build) (64-bit) ### How are you deploying your application? (if relevant) GitHub deployment to Netlify ### Describe the Bug I'm trying to use next/image to…

### CASE-5194 · [NEXT-906] Licensing: 12.2.0 bundles MPL-licensed `edge-runtime`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react
- **Signals**: 👍0 💬15 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ❯ npx --no-install next info Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 16.15.1 npm: 8.13.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 12.2.1-canary.5 eslint-config-next: 12.2.0 react: 16.14.0 react-dom: 16.14.0 ### What browser are you using? (if relevant) n/a ### How are you deploying your application? (if relevant) n/a ### Describe the Bug [ref] introduced new bundled dependencies on `edge-runtime`…

### CASE-5195 · Failed to load SWC binary for linux/x64
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome 102, linux, next.js, react
- **Signals**: 👍6 💬15 · closed
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref] SMP Fri Dec 18 16:34:56 UTC 2020 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: N/A pnpm: 7.4.0 Relevant packages: next: 12.2.1 eslint-config-next: 12.2.0 react: 17.0.2 react-dom: 16.14.0 ### What browser are you using? (if relevant) Chrome 102 ### How are you deploying your application? (if relevant) next start ### Describe the Bug my project in gitlab-ci(image: node:lts-buster) buid my app. run `next…

### CASE-5197 · Next.js throws an exception when running in 3rd party iframe
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, next.js
- **Signals**: 👍0 💬15 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Running the suggested commands failed to produce an output in the sandbox I have created to reproduce the issue. However, perhaps the relevant parameters can be looked up in the sandbox itself: [link] It's a clean template running the latest version of Next.js. ### What browser are you using? (if relevant) Chrome (latest version) - 3rd party cookies disabled ### How are you deploying your application? (if relevant) next dev ### Describe the Bug My example reproduces…

### CASE-5198 · 500 Error - "static responses cannot be piped. This is a bug in Next.js"
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍4 💬15 · closed · labels: bug/locked
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) _No response_ ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 14.15.0 ### What browser are you using? Chrome ### What operating system are you using? MacOS ### How are you deploying your application? Custom server/Other platform ### Describe the Bug Experiencing intermittent 500s in production across all SSG pages with revalidation. When checking server logs, found this errror: ``` Error: invariant: static responses cannot be piped. This is a bug in Next.js at RenderResult.pipe…

### CASE-5199 · getServerSideProps, There is a problem sending the request. Page stuck
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 12.0.2 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next start ### Describe the Bug ![image]([link]) Why is the server request page stuck and the client request normal ### Expected Behavior ![image]([link]) Why is the server request page stuck and the client request normal ### To Reproduce ![image]([link]) Why is the server request page stuck and the client request normal

### CASE-5200 · middleware rewrite to a SSR page ignored
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍3 💬15 · closed · labels: bug/Middleware
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 14 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Rewrites in middleware only work if the URL is to an SSG page. When the rewritten URL points to an SSR or ISR page, it is ignored and works like `NextResponse.next()`. It does not show the content of the rewritten URL. Am I not supposed to rewrite to an ISR or SSR page? ### Expected Behavior /hello to rewrite to /bye should show the content of…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5111 · Viewport height changes upon clicking the page
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, windows, next.js, react
- **Signals**: 👍0 💬17 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.15.0 npm: N/A Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.2.5-canary.27 eslint-config-next: 13.2.4 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To Reproduce This can be reproduced from the base `npx create-next-app@user` app as…

### CASE-5175 · SSR issue with dynamic responsive elements
- **Principles**: P-A1, P-A4, P-G3, P-F4 · **Env**: react, bootstrap, next.js
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!--- Provide a general summary of the issue in the Title above --> I'm using reactstrap (bootstrap) together with [react-responsive]([link]) for my site's responsive layout. There is no problem when I'm using reactstrap alone. However, when I mix react-responsive into the pages to show certain components only at certain screen breakpoints, I'm getting the following error in the browser console: > `main.js:4530 Warning: Expected server HTML to contain a matching <div> in <div>.` <!-- Thank you very much for contributing to Next.js by creating an issue! ❤️ To avoid duplicate issues we ask you…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5112 · Dynamic routing fails in production v.13.1.2 (Error: invariant: invalid Cache-Control duration provided: 0 < 1)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react
- **Signals**: 👍12 💬17 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:05 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8101 Binaries: Node: 16.17.1 npm: 8.15.0 Yarn: 1.22.11 pnpm: N/A Relevant packages: next: 13.1.2 eslint-config-next: 13.0.4 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue /// ### To Reproduce -…

### CASE-5145 · Global variable not preserved in app directory on hot/full reload (dev mode)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, next.js, react, typescript
- **Signals**: 👍22 💬16 · closed · labels: linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.1.0 Relevant Packages: next: 13.4.9-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue or a…

### CASE-5172 · My .env variables just don't work!
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: # Bug report every `.env` variable fails to show up even by using `process.env.VARIABLE` clause. ## To Reproduce - `next.config.js`: ``` const withCSS = require('@user/next-css'); const withSass = require('@user/next-sass') const { parsed: localEnv } = require('dotenv').config() const webpack = require('webpack') module.exports = withSass({ webpack(config) { config.plugins.push(new webpack.EnvironmentPlugin(localEnv)) config.plugins.push( new webpack.ProvidePlugin({ '$': 'jquery', 'jQuery': 'jquery', }) ) return config } }) ``` - `constants.js`: ``` export const BACKEND_SERVER =…

### CASE-5179 · Not working with Yarn pnpm strategy
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍15 💬15 · open · labels: bug/Runtime/Module Resolution
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Run `yarn dev` in the linked repo root, then open the app at localhost:3000. This will trigger the following error: > Error: Invariant: Expected relative import to start with "next/", found "package/dist/server/future/route-modules/pages/module.compiled" at [Symbol.replace] (<anonymous>) at String.replaceAll (<anonymous>) <img width="1110" alt="Screenshot 2024-05-14 at 2 01 12 PM" src="[link] framework]/assets/81224/04baa13c-67a8-4669-894d-9583d66a2057"> ### Current vs. Expected behavior Next works fine when using the…

### CASE-5182 · TypeError: Cannot read properties of undefined (reading 'current') when adding `--turbo`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍5 💬15 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Fill in the `RESEND_API_KEY`, `RESEND_EMAIL_FROM`, and `RESEND_EMAIL_TO` environment variables in `.env` file 2. Start the application without turbo and attempt to use the contact form (works perfectly fine) 3. Add `--turbo` to your dev script in `package.json`, attempt to use the form (and see it logging out the error) ### Current vs. Expected behavior Expecting no errors when submitting a form using Resend and `--turbo` ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5117 · Dynamic "import" creates a race condition with initial load requests
- **Principles**: P-F5, P-H3 · **Env**: opera, next.js, react
- **Signals**: 👍11 💬17 · open · labels: Upstream/examples/not stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information > This issue is not related to the precise Next version but rather to the `with-msw` example code. Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Wed Aug 10 14:28:23 PDT 2022; root:xnu-8020.141.5~2/RELEASE_ARM64_T6000 Binaries: Node: 16.13.2 npm: 8.1.2 Yarn: 1.22.17 pnpm: 7.4.0 Relevant packages: next: 12.3.4 eslint-config-next: N/A react: 17.0.2 react-dom: 17.0.2 ### Which example does this report relate to? with-msw…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5126 · React 17: Property expression of JSXExpressionContainer expected node to be of a type ["Expression","JSXEmptyExpression"] but instead got undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, next.js
- **Signals**: 👍5 💬17 · closed
- **Excerpt**: # Bug report ## Describe the bug In a Next.js project using styled-jsx I get the following error across different components that create a <style jsx> tag to generate CSS selectors within template literals (or import such styles from a separate file): ``` Property expression of JSXExpressionContainer expected node to be of a type ["Expression","JSXEmptyExpression"] but instead got undefined ``` The error appears as soon as I update react and react-dom to 17.0.0 and might be related to the new JSX transform in React v17. ## Expected behavior It renders the component as expected without any…

### CASE-5177 · `useTransition` stuck in loading state when using `router.refresh()` after calling a server action
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍12 💬15 · closed · labels: linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. build the application as the issue only occurs on the built version: `pnpm run build` 2. serve the application: `pnpm run start` 3. go to [link] in a browser 4. click on the "trigger action" button 5. see the button being stuck in `loading...` state and the render date not being updated If the button is not stuck, click on it a few times. If still not, re-start the application and try again. If not, add more `<BigBlock />` in the page as it seems like the more blocks we add, the more likely the issue is to occur ###…

### CASE-5188 · Babel TypeScript transformer does not support satisfies operator
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, ubuntu, typescript, next.js, react
- **Signals**: 👍44 💬15 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Wed Dec 07 2022 11:10:08 GMT+0300 (Москва, стандартное время) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.0.7-canary.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To Reproduce `npm run dev`…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5135 · Turbopack error when using roboto flex font
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, windows
- **Signals**: 👍1 💬16 · closed · labels: Font (next/font)/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Start dev server and open page in browser ### Current vs. Expected behavior Current: gives error 500 when following is present. Error happens when constant is assigned. Other fonts from roboto family work ```js import { Roboto_Flex } from 'next/font/google' const robotoFlex = Roboto_Flex({ subsets: ['latin'], }) ``` Expected: works with this font ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Available memory (MB): 32720 Available CPU cores: 12 Binaries:…

### CASE-5144 · Next.js Build fails on Vercel when using TailwindCSS
- **Principles**: P-B1, P-B2, P-B3 · **Env**: next.js, tailwind
- **Signals**: 👍0 💬16 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash This is happening within Vercel Environment ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (next/font) ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce Builds Locally Work but on Vercel Fail. Reproduction: Simply trigger Build on Vercel ### Describe the Bug Vercel Build Fails with Log below ``` [22:36:31] Running build in Washington, D.C., USA (East) – iad1…

### CASE-5171 · options has an unknown property 'localIdentName'
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed · labels: Upstream
- **Excerpt**: # Bug report ## Describe the bug next.config.js ``` module.exports = withCSS(withSass({ cssModules: true, cssLoaderOptions: { importLoaders: 1, localIdentName: "[local]___[hash:base64:5]", }, webpack(config) { HACK_removeMinimizeOptionFromCssLoaders(config); config.module.rules.push({ test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, use: { loader: 'url-loader', options: { limit: 100000 } } }) // config.module.rules.push({ // test: /\.scss$/, // use: [ // ] // }) return config }, sassLoaderOptions: { sourceMap: true } })); ``` A clear and concise description of what the bug is. <img…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5136 · Unable to install major packages with Next.js 15 and React 19 RC
- **Principles**: P-G4, P-E3 · **Env**: next.js, react
- **Signals**: 👍8 💬16 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open sample repro at [link] (or create a starter app with `create-next-app`) 2. Run `npm i @user/material` or `npm i react-hook-form` in the console 3. Observe the following errors: ```shell ❯ npm i @user/material npm ERR! code ERESOLVE npm ERR! ERESOLVE unable to resolve dependency tree npm ERR! npm ERR! While resolving: undefined@user npm ERR! Found: [email]-rc-02c0e824-20241028 npm ERR! node_modules/react npm ERR! react@"19.0.0-rc-02c0e824-20241028" from the root project npm ERR! npm ERR! Could not resolve…

### CASE-5181 · Issues with Default Language Routing and Router Interceptor in Next.js /app Directory (i18n)
- **Principles**: P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍0 💬15 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce ## Scenario 1: Non-default Language Selection (Works as Expected) - **Action**: Select a non-default language (any language other than English `en`). - **Action**: Click on a test page. - **Expected Behavior**: The modal page is displayed correctly, as intercepted from the route. No issues are observed. ## Scenario 2: Default Language Selection and Inconsistency - **Action**: Select the default `en` language. - **Action**: Click on a test page. - **Initial Behavior**: The modal test page appears correctly the first time…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-5176 · React attempted to reuse markup in a container but the checksum was invalid
- **Principles**: P-A2, P-A4 · **Env**: react, next.js
- **Signals**: 👍0 💬16 · closed · labels: Upstream
- **Excerpt**: When I use `styled-component` feature `extend` with `next.js` <!-- BUG TEMPLATE --> ## Version next.js: 3.0.0-beta13 styled-component: 2.0.1 ## Steps to reproduce I have `UL` component ```js const UL = styled.ul` padding: 0; margin: 0; list-style-type: none; outline: none; `; ``` `ListNave` component ```js const ListNav = UL.extend` position: absolute; right: 0; display: flex; align-items: center; height: 100%; `; ``` usage: ```js <ListNav> <li>a</li> <li>b</li> <li>c</li> </ListNav> ``` ## Expected Behavior No warning ```bash Warning: React attempted to reuse markup in a container but the…

