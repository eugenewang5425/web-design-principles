# Case Chunk 043 — Round 43

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5201 · "@user/swc-android-arm64 not accessible from next" when running npm ci in Github Action
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, android, windows, next.js
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug We're using a Github Action to install all depencies using `npm ci` and deploy to Chromatic. However, this Action is failing at the moment with the following error: `npm ERR! @user/swc-android-arm64 not accessible from next` Running `npm ci` on my local machine seems to work fine. I already tried to delete the package-lock.json and…

### CASE-5202 · [middlewares] globalThis and globalThis.CryptoKey is missing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍2 💬15 · closed · labels: bug/Middleware
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? v14.18.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Both Vercel and `next dev` ### Describe the Bug Testing a universal JOSE (JWT/JWK/etc) library on Middlewares I've encountered an issue where the CryptoKey constructor is not exposed via globalThis.CryptoKey. This is the case for all browsers, Deno, and Cloudflare Workers runtimes but not for Middlewares deployed via vercel or running via `next dev`. Not having…

### CASE-5203 · jest-worker breaks building the project with "write EPIPE" error on macOS
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, opera, macos, next.js
- **Signals**: 👍21 💬15 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 16.4.2 ### What browser are you using? Firefox ### What operating system are you using? macOs Big Sur 11.4 (MacBook Pro 15" 2017) ### How are you deploying your application? next build ### Describe the Bug I've decided to move my project on to [email], using macOS for development. When i try building it, i get the following lines: ``` info - Loaded env from /Users/brrrrrr/.env (node:99496) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS…

### CASE-5204 · FOUC on page load with SSR
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, opera, windows, next.js, react
- **Signals**: 👍13 💬15 · closed · labels: bug/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next start ### Describe the Bug After creating a web app with SSR and run on the server, there is a problem with FUOC (Flash Of Unused Content). We're using CSS modules for every React Component (written in SCSS). At the beginning of loading the whole page there's no CSS styles. How can we fix it? To create our own stylesheet from all sass files and put into the…

### CASE-5205 · Segmentation fault occurs when loading PNG, JPG images
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 90, opera, macos, next.js
- **Signals**: 👍13 💬15 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.1.4-canary.17 ### What version of Node.js are you using? 16.0.0 ### What browser are you using? Chrome 90.0.4430.85 ### What operating system are you using? macOS (Apple M1 w/ Big Sur 11.3) ### How are you deploying your application? Local only ### Describe the Bug Starting from a fresh `create-next-app`, I place a PNG or JPG image into the public folder, then add a `<Image src="/myPngImage.png" layout="fill" />` to my `index.js`. After the hot-reload completes, the dev server quits and gives me this error: ```zsh: segmentation fault npm run…

### CASE-5206 · Rewrites are not working for websockets (socket.io)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍20 💬15 · closed · labels: bug/locked
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? v12.13.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next dev (development/local) ### Describe the Bug The rewrite functionality works great, however it appears to not support websockets (more specifically socket.io). Below is my rewrite config: ``` async rewrites() { return [ { source: '/api/:slug*', destination: '[link] }, { source: '/socket.io', destination: '[link] } ] } ``` The fact that websockets are not…

### CASE-5207 · yarn dev crashes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, linux, next.js
- **Signals**: 👍2 💬15 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 15.10.0 ### What browser are you using? Chrome, Firefox, Brave ### What operating system are you using? Linux ### How are you deploying your application? n/a ### Describe the Bug While in development using `yarn dev` process just crashes with this error message ``` .../node_modules/next/dist/server/hot-reloader.js:16 delete _onDemandEntryHandler.entries[page];return;}_onDemandEntryHandler.entries[page].status=_onDemandEntryHandler.BUILDING;const…

### CASE-5208 · Bug: Not found routes-manifest.json at deploying by Vercel. v10.0.8
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug When I deploy vercel, I get an error after the build step. I have confirmed that no error occurs in v10.0.7. ``` 23:32:15.953 Traced Next.js server files in: 11311.251ms 23:32:15.958 [Error: ENOENT: no such file or directory, lstat '/.next/routes-manifest.json'] { 23:32:15.958 errno: -2, 23:32:15.958 code: 'ENOENT', 23:32:15.958 syscall:…

### CASE-5209 · Error in ie11 in the dev env after 10.0.5 -> 10.0.6 upgrade. Nextjs with custom server.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, next.js, webpack
- **Signals**: 👍12 💬15 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 14.14.0 **What browser are you using?** ie11, chrome **What operating system are you using?** win7, win10, linux mint **How are you deploying your application?** `next({ dev }).prepare()` **Describe the Bug** After 10.0.5 -> 10.0.6 upgrade I get an error in the dev env: "Error was not caught SyntaxError: invalid character". With next 10.0.5 there is no error in ie11. **Expected Behavior** Work without errors. **To Reproduce** I use custom webpack config in next.config.js: ``` webpack: (config) => {…

### CASE-5210 · Environment variables are in-lined to next.config.js at build time
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome 88, opera, windows, next.js
- **Signals**: 👍24 💬15 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.7-canary.4 **What version of Node.js are you using?** 14.15.4 **What browser are you using?** Chrome 88 **What operating system are you using?** Windows **How are you deploying your application?** next start **Describe the Bug** Environment variables used in `next.config.js` are in-lined at build time, using values from the build environment. This prevents environment specific config being used, such as `rewrites` to an environment specific host. ```js module.exports = { async rewrites() { return [ { source: '/some/api/:path*', destination:…

### CASE-5211 · CORS error fetching CSS on S3 asset host while shallow routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, windows, ubuntu, next.js
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.3 & 10.0.6-canary.7 **What version of Node.js are you using?** v14.15.1 **What browser are you using?** Chrome, Safaro **What operating system are you using?** macOS, Windows, Ubuntu **How are you deploying your application?** next start **Describe the Bug** We host our app on custom EC2 instances, but our assets are deployed to S3 and served using CloudFront. After upgrading to version `10.0.3` we noticed our app does not behave correctly by doing a full page reload instead of just rerendering the changed parts of the page. Tracking down the…

### CASE-5216 · Unexpected onLoad attribute behaviour in next/head
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: firefox
- **Signals**: 👍14 💬15 · closed · labels: good first issue/please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug In my project [`raam`]([link]) I'm tying set `"Inter"` as my font by linking to a stylesheet from Google Fonts. In `Head` (a component that extends `next/head`) I'm using: ```jsx <link rel="preconnect" href="[link] crossOrigin="" /> <link href="[link] rel="stylesheet" /> ``` (note the `preconnect` to the actual font assets, then the `display=swap` which is intended to show the fallback font until the loaded font is swapped in) When I then go to view the page (in Firefox particularly) I see a flash of unstyled/invisible text: [link] ## Screenshots…

### CASE-5221 · After refresh, browser back button is not working.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, next.js
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug After refresh, browser back button is not working. ## To Reproduce It even reproduces on now.sh! 1. Go to [link] 2. Click on top left "pricing" navigation button 3. Browser refresh with `cmd` + `r` 4. Browser back button -> It just stays still. ## Expected behavior It should go back to '/home' ## Screenshots ![Nov-11-2019 17-10-38]([link]) ## System information - OS: macOS Catalina 10.15 - Browser : Chrome(Version 78.0.3904.97 (Official Build) (64-bit)) and safari(Version 13.0.2 (15608.2.30.1.1)) both reproduces this issue. - Version of Next.js: I checked the…

### CASE-5222 · Cant handle static assets with serverless framework
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, next.js
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug I cannot load the assets with a lambda with serverless framework. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to [link] clone 2. yarn 3. yarn (global) add serverless 4. yarn build 5. yarn lambda 6. See error on console or chrome console (assets don't load) ## System information - OS: Windows - Version of Next.js: 8.0.1 ## Additional context In lambda function, i'm doing : ``` app.use("/_next/static", express.static("../static")); app.use("/static", express.static("../static")); ```

### CASE-5224 · _next/static/style.css net::ERR_ABORTED 404 (Not Found)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: # Bug report After update version 7, is not longer working the hot reload. ## Describe the bug Not longer works the hot reload, I force to refresh manually the browser in order to update my scss (I'm using `next-sass`) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. `npm run dev` 2. `open browser with port defined and you will able to show the bug` ## Expected behavior After change my sass files, the browser should update their style properly. ## Screenshots This is the console log of chrome with the error: <img width="827" alt="screen shot…

### CASE-5227 · Error on reloading page in the initial next.js installation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, next.js, react
- **Signals**: 👍11 💬15 · closed
- **Excerpt**: **Describe the bug** I get the following error shown in the console when I reload a page in firefox: `The connection to [link] was interrupted while the page was loading.` This seems to happen even with a new next.js installation. **To Reproduce** - Create a new folder `mkdir nextjs-test` - navigate to the folder and install dependencies `npm install --save next react react-dom` - add the dev script to package.json `"dev": "next"` - create `./pages/index.js` and copy the following code: ```export default () => <div>Welcome to next.js!</div>``` - `npm run dev` and open localhost:3000 in…

### CASE-5229 · [Bug]: Client Component onClick events fail to fire on iOS Safari (Next.js 16.2.1)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, next.js, typescript, react, iphone
- **Signals**: 👍0 💬14 · closed · labels: locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Create a fresh Next.js project using npx [email] Create a simple counter Client Component in the main page: > TypeScript ``` 'use client'; import { useState } from 'react'; export default function Counter() { const [count, setCount] = useState(0); return ( <div> <h1>Count: {count}</h1> <button onClick={() => setCount(count + 1)}> Increment </button> </div> ); } ``` Deploy or run the development server. Open the application using Safari on an iPhone. Tap the "Increment" button. The count remains 0 and does not update. ###…

### CASE-5239 · SVG with icons not updating after change
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome 125, windows
- **Signals**: 👍0 💬14 · closed · labels: bug/Image (next/image)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start application 2. Edit color of icon in `/public/icons.svg` ### Current vs. Expected behavior Current behavior: - Color remains same as before Expected behavior: - Color is changed ### Provide environment information ```bash Windows 11 Chrome 125 nextjs: 13.5.1 - 14.2.3 ``` ### Which area(s) are affected? (Select all that apply) Developer Experience, Image (next/image) ### Which stage(s) are affected? (Select all that apply) next dev (local), next start (local) ### Additional context I have disabled cache in browser…

### CASE-5250 · Response not gzipped if middleware returns NextResponse
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍10 💬14 · closed · labels: bug/Runtime/linear: next/locked/not stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Mon Apr 24 20:52:24 PDT 2023; root:xnu-8796.121.2~5/RELEASE_ARM64_T6000 Binaries: Node: 18.14.1 npm: 9.3.1 Yarn: N/A pnpm: 8.1.0 Relevant packages: next: 13.4.5-canary.7 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5251 · using mongoose in edge runtime, Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react, typescript
- **Signals**: 👍7 💬14 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 18.13.0 npm: 8.19.3 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.3 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the…

### CASE-5252 · Incorrect response status code when using NextResponse.rewrite(url, { status }) in middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍18 💬14 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Mon Apr 24 20:52:24 PDT 2023; root:xnu-8796.121.2~5/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: N/A pnpm: N/A Relevant packages: next: 13.4.4-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5254 · What is the deal with Access-Control-Allow-Origin header for Edge functions?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js
- **Signals**: 👍1 💬14 · closed · labels: bug/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information [blank] ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [blank] ### To Reproduce Try to set `Access-Control-Allow-Origin: *` on an Edge function request. I ended up taking the initiative of publishing the CORS Edge example as [a library]([link]) only to find that also didn't work. ### Describe the Bug No amount of begging and pleading will set the…

### CASE-5256 · [NEXT-647] Throws `Illegal invocation` when I called the edge route handler from the client
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍5 💬14 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Sat Jun 18 17:05:47 PDT 2022; root:xnu-8020.140.41~1/RELEASE_ARM64_T8101 Binaries: Node: 18.14.2 npm: 9.5.0 Yarn: 1.22.10 pnpm: 7.27.1 Relevant packages: next: 13.2.1-canary.0 eslint-config-next: 13.2.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces…

### CASE-5257 · [NEXT-642] `Link` will not respect `basePath` when used in new `app` directory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍1 💬14 · closed · labels: bug/Linking and Navigating/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Thu Jan 5 20:48:54 PST 2023; root:xnu-8792.81.2~2/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 9.4.2 Yarn: N/A pnpm: N/A Relevant packages: next: 13.1.7-canary.7 eslint-config-next: 13.1.6 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5258 · Invariant: attempted to hard navigate to the same URL
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, next.js
- **Signals**: 👍11 💬14 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information node > 14 NextJS 13.1.1 ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [link] CodeSandbox example here just try to visit any 404 URL like /en/reset-password and invariant will trigger ### Describe the Bug Am trying to use a middleware to redirect users using localization middleware Everything works fine until I implement a 404.tsx page which results…

### CASE-5260 · Standalone mode and `experimental-edge` API route shows trace warning
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, linux, ubuntu, next.js, react
- **Signals**: 👍0 💬14 · closed · labels: Output
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Fri Sep 9 09:37:59 UTC 2022 Binaries: Node: 16.14.0 npm: 8.3.1 Yarn: 1.22.19 pnpm: 7.15.0 Relevant packages: next: 13.0.3 eslint-config-next: 13.0.3 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) next build (to test in local) / Vercel + github ### Describe the Bug When I build my app…

### CASE-5261 · App Dir is caching renders even with "dynamic" set to "force-dynamic"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, next.js, react
- **Signals**: 👍1 💬14 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref] SMP Sat Jun 4 00:16:10 CEST 2022 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.1.0 Relevant packages: next: 13.0.2 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) next start ### Describe the Bug When clicking on <Link /> to go to a page that has "dynamic" segment config…

### CASE-5262 · Using ky with edge functions works on prod but fails on local Next.js dev server
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍3 💬14 · closed · labels: bug/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 Binaries: Node: 16.18.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.13.5 Relevant packages: next: 12.3.2-canary.29 eslint-config-next: 12.3.1 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) 106.0.5249.119 ### How are you deploying your application? (if relevant) next dev ### Describe the…

### CASE-5264 · Inline Next/Script only runs on first page load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 103, next.js, react
- **Signals**: 👍8 💬14 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:41 PST 2021; root:xnu-8019.61.5~1/RELEASE_ARM64_T6000 Binaries: Node: 16.13.0 npm: 7.15.1 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.2.3 eslint-config-next: N/A react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Chrome 103.0.5060.134 (Official Build) (arm64) ### How are you deploying your application? (if relevant) _No…

### CASE-5266 · Font Optimization is not fully working
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: opera, chrome 100, next.js, react
- **Signals**: 👍10 💬14 · closed · labels: bug/Font (next/font)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:46:32 PDT 2022; root:xnu-8020.101.4~15/RELEASE_ARM64_T6000 Binaries: Node: 17.8.0 npm: 8.5.5 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.4 react: 18.0.0 react-dom: 18.0.0 ``` ### What browser are you using? (if relevant) Chrome 100.0.4896.60 ### How are you deploying your application? (if relevant) Vercel, Heroku ### Describe the Bug Font Optimization is…

### CASE-5268 · Can't transpile a babel macro project
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬14 · closed · labels: bug
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) `next info` is still not available, but I run `npx envinfo --binaries --system`: ``` System: OS: macOS 12.0.1 CPU: (10) arm64 Apple M1 Pro Memory: 76.88 MB / 32.00 GB Shell: 3.3.1 - /opt/homebrew/bin/fish Binaries: Node: 16.13.1 - ~/.local/share/nvm/v16.13.1/bin/node Yarn: 1.22.17 - /opt/homebrew/bin/yarn npm: 8.1.2 - ~/.local/share/nvm/v16.13.1/bin/npm ``` ### What version of Next.js are you using? 12.0.8-canary.16 ### What version of Node.js are you using? v16.13.1 ### What browser are you using? Chrome ### What operating system are…

### CASE-5269 · Issue with `asPath` when using `getStaticProps` and redirects
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬14 · closed · labels: bug/Internationalization (i18n)
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Verel ### Describe the Bug When using redirects in `next.config.js` and trying to output `router.asPath` in a dynamic route that is using `getStaticProps` and `getStaticPaths`, we are getting a `Warning: Text content did not match. Server: "/test-static/123" Client: "/test-statique/123"` message in the console. This is not an issue when using `getServerSideProps`.…

### CASE-5270 · NextJS Deployment Build Issue - Amplify, Netlify, Vercel | NX Monorepo
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, next.js
- **Signals**: 👍2 💬14 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.5 (Tested from 12.0.1 to 12.0.5 & canary versions) ### What version of Node.js are you using? v16.2.0 (Used > 12.2 as well when searching for the bug) ### What browser are you using? Chrome ### What operating system are you using? Ubuntu 20 ### How are you deploying your application? AWS Amplify | Custom Amplify build script that utilizes NX npm package for building. ### Describe the Bug For the last 20 days or so I've been stuck trying to deploy my application to AWS Amplify. I've contacted the AWS support team, spoken to members of the Amplify…

### CASE-5271 · [12.0.4-canary.2], Preact - Local dev server fails with Error: Cannot find module 'scheduler/package.json'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, react, next.js
- **Signals**: 👍18 💬14 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.4-canaray.2 to 12.0.4-canaray.4 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? chrome ### What operating system are you using? macOS ### How are you deploying your application? . ### Describe the Bug Local dev server stops with an error: `Error: Cannot find module 'scheduler/package.json'`. I assume this comes in relation with the recent changes in [this line in webocket-config.js]([link]). I believe we `scheduler` must be removed from `topLevelFrameworkPaths` to make it work correctly. Complete error: ```…

### CASE-5272 · The edge functions are crashing when deployed to Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, opera, macos, next.js
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### What version of Next.js are you using? 12.0.3 ### What version of Node.js are you using? 14.18.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug The edge functions are crashing when deployed to Vercel > This is the error TypeError: (intermediate value)(intermediate value).push(...) is not a function at Object.<anonymous> ### Expected Behavior The edge function should redirect to the login page if the cookie is not found ### To Reproduce create _middleware.tsx file and add the…

### CASE-5274 · Rewrites with i18n
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, windows, linux, next.js
- **Signals**: 👍10 💬14 · closed · labels: Linking and Navigating/Internationalization (i18n)
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 and 11.1.3-canary.14 ### What version of Node.js are you using? 14 and 16 ### What browser are you using? Chrome Firefox Insomnia ### What operating system are you using? Windows, Linux ### How are you deploying your application? Vercel ### Describe the Bug It seems that we cant run POST requests while using i18n on the latest version (it was working on 11.0.x and 11.1.0 but not 11.1.1+) - I tried running my request without i18n and it worked - I tried running my request with i18n but it stopped working - I tried adding/removing the basePath…

### CASE-5275 · Next.js 11 issue with styled components
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, ubuntu, next.js
- **Signals**: 👍7 💬14 · closed · labels: examples/bug
- **Excerpt**: ### What example does this report relate to? with-styled-components ### What version of Next.js are you using? 11 (from installation section) ### What version of Node.js are you using? 15.14 ### What browser are you using? Chrome ### What operating system are you using? macOS, Ubuntu 20.04 ### How are you deploying your application? Vercel, Docker ### Describe the Bug I described bug in styled-components repo, please check here - [link] ### Expected Behavior Work stably, display styles correctly. ### To Reproduce Create a couple of next.js pages and try to navigate between them.

### CASE-5276 · HTML lang attribute updated by nextjs even if i18n.localeDetection is disabled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, opera, macos, windows, next.js
- **Signals**: 👍0 💬14 · closed · labels: bug/please verify canary
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 14 ### What browser are you using? Chrome, Firefox, Safari ### What operating system are you using? macOs, Windows ### How are you deploying your application? next start ### Describe the Bug When `i18n` is configured in `next.config.js` with the `localeDetection` property set to false, the next/router is overriding the `html` tags `lang` attribute that I set from an incoming request cookie. ### Expected Behavior Next.js should not be updating the `lang` attribute when `localeDetection` is set to…

### CASE-5277 · Parsing error: Cannot find module 'next/babel'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, next.js
- **Signals**: 👍8 💬14 · closed
- **Excerpt**: ### What version of Next.js are you using? 11.0.0 ### What version of Node.js are you using? 14.0.0 ### What browser are you using? Safari ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug every file underlines imports and aslant gives me this message: Parsing error: Cannot find module 'next/babel' ### Expected Behavior nextjs 10 didn't show this message ### To Reproduce just import something into any file in nextjs 11

### CASE-5278 · Unintended page refresh with webpack5
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, webpack, next.js
- **Signals**: 👍5 💬14 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 12.14.1 ### What browser are you using? Chrome ### What operating system are you using? macOS 11.2.3 ### How are you deploying your application? debug mode(next dev) ### Describe the Bug When I turn on webpack5 and call internal api(/api/*) from page after first render, the page refreshes and logs `Refreshing page data due to server-side change`. after refreshing once, it works fine as webpack4. ### Expected Behavior The page should not refresh on api call after first render. ### To Reproduce ```tsx…

### CASE-5279 · Stale data in the with-Apollo example setup using getServerSideProps
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬14 · closed · labels: good first issue/examples/please verify canary
- **Excerpt**: ### What example does this report relate to? with-Apollo ### What version of Next.js are you using? 10.0.0 ### What version of Node.js are you using? 10.14.2 ### What browser are you using? chrome ### What operating system are you using? macOS ### How are you deploying your application? Other platform ### Describe the Bug The Apollo client query response is stale when used in getServerSideProps. I think the issue is caused because of the usage of the line below this comment reference doesn't create a new client instead uses the existing one. [link]…

### CASE-5280 · Fastify: next.js attempts (and fails) to consume a request body that's already been consumed by Fastify
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍1 💬14 · closed · labels: good first issue/examples/locked/stale
- **Excerpt**: **NOTE: this description was updated on Dec 14th, 2022 to reflect modern repro details** ### What version of Next.js are you using? 13.0.6 ### What version of Node.js are you using? 16.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? custom server (fastify 4.10.2) ### Describe the Bug When using Fastify as a custom web server, performing a `POST` to a Next.js `/api` route results in a `400 Invalid body` response. ### Expected Behavior The API handler is allowed to process the request. ### To Reproduce 1.…

### CASE-5281 · missing postcss dependency on build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 90, opera, macos, next.js
- **Signals**: 👍10 💬14 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? v14.15.1 ### What browser are you using? Chrome 90 ### What operating system are you using? macOS 10.15.7 ### How are you deploying your application? next build and start on my local development env ### Describe the Bug Upgrading from 10.1.1 to 10.2.0 in our package.json and running npm install. we get the following dependency error on running `next build` - ```Failed to compile. info - Loaded env from /Users/tso987/Projects/standard-pdp-ui/.env.production info - Loaded env from…

### CASE-5282 · Building the application for production fails with collocated tests when using webpack 5.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, webpack, next.js
- **Signals**: 👍13 💬14 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? none ### Describe the Bug Given: - Tests are collocated - `webpack.IgnorePlugin` is used to exclude test files from build - Webpack 5 usage is enabled Building the application for production fails: ```bash > [email] build > next build info - Using webpack 5. Reason: future.webpack5 option enabled [link] info - Checking validity of types info - Creating an optimized…

### CASE-5283 · Is next-less deprecated or not?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍9 💬14 · closed · labels: examples/bug/please verify canary
- **Excerpt**: ### What example does this report relate to? with-next-less ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.4.0 ### What browser are you using? Chrome ### What operating system are you using? macOS Big Sur ### How are you deploying your application? I'm not ### Describe the Bug The next-plugins repository has been deprecated, so I cannot create an issue in that repository, but this example is using a plugin from that repository. Is there a newer alternative to that plugin? I'm getting an error that's blocking me and I'm just not sure where to…

### CASE-5284 · Confused about usage of process.env
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, opera, windows, next.js
- **Signals**: 👍7 💬14 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14 **What browser are you using?** Firefox **What operating system are you using?** Windows **How are you deploying your application?** cross-env NODE_ENV=production node server.js **Describe the Bug** I'm very confused about the use of process.env. Variables. (Here in the docs)[[link]] it says 'In order to keep server-only secrets safe, Next.js replaces process.env.* with the correct values at build time.' However looking into my docker container (or the locally compiled code) in the .next folder i…

### CASE-5285 · redirects don't work properly with i18n and basepath
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍26 💬14 · open · labels: bug/Internationalization (i18n)
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 12.16.1 **What browser are you using?** Chrome **What operating system are you using?** Windows **How are you deploying your application?** docker / k8s **Describe the Bug** I'm developing a `nextjs` app that should be deployed at `/my-base-path`. I wanted to redirect `/` to `/my-base-path`, and I setup `next.config.js` accordingly: ```js const basePath = '/my-base-path'; const nextConfig = { basePath, env: { BASE_PATH: basePath, }, redirects: async () => ([ { source: '/', destination: basePath,…

### CASE-5287 · [with-react-intl]: polyfills don't seem to work on first page load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react
- **Signals**: 👍1 💬14 · closed · labels: examples/locked/stale
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report ## Describe the bug I pulled down the [with-react-intl example]([link] framework]/tree/canary/examples/with-react-intl) to test it out in Safari with the [ListFormat]([link]) polyfill added into the polyfills.ts file (following the same format as the rest). I had been trying to integrate the polyfills (with ListFormat) into a separate proprietary app but it was not working for me... so that's when I decided to…

### CASE-5293 · Browser show error when i use next.js running yarn dev.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, macos, next.js
- **Signals**: 👍1 💬14 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe I build new next-app and input yarn dev,but next run failed. ## To Reproduce Browser show those errer: > Uncaught TypeError: Cannot read property 'forEach' of undefined > Uncaught ReferenceError: $RefreshSig$ is not defined ## System information - macOS, - chrome - Version of Next.js: 9.4.4 - Version of Node.js: 12.16.3 ## Additional context What should i do?

### CASE-5296 · Edge 18 window fully reloads or fails to redirect to another page.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 18
- **Signals**: 👍0 💬14 · closed · labels: Upstream
- **Excerpt**: # Bug report ## Describe the bug If you use `styled-jsx` and have nested media rules in the css, then in Edge 18, the browser window fully reloads or fails to redirect to another page. ## To Reproduce I created an [example repository]([link]) using the `npx create-next-app command`. In the [example repository]([link]), I have added a couple of simple pages and links to them in `<Nav />`. The links are made using the `<Link />` component from `next/link`. There are nested media expressions in the `<Nav />` component. To reproduce bug, you need to: 1. Open home page. 2. Try clicking the Boo or…

### CASE-5299 · Statically imported image in Next 16.2 (Pages Router) breaks ‎`next dev` in Safari 26.4
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 26, macos
- **Signals**: 👍1 💬13 · closed · labels: Image (next/image)/Turbopack/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the app in development mode with ‎`next dev`. 2. Open the app in Safari 26.4 on macOS Sequoia. 3. The page immediately crashes with the runtime error: > Runtime Error Image with src "/_next/static/media/image.3_pmqoemjixc0.png?ts=..." is using a query string which is not configured in images.localPatterns. ### Current vs. Expected behavior Current behavior: In Safari 26.4, a statically imported image used with the Pages Router in Next 16.2.1-canary.13 crashes the page in development with an error about a query…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5212 · i18n support is not compatible with next export. (SSR - NextJS 10)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍5 💬15 · closed · labels: bug
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # i18n support is not compatible with next export. ## NextJS dont run the deploy with i18n Im using nextJS 10, and the main reason that i choose next 10, is that i can do SSR and use the i18n. [Internationalized Routing]([link] ) its a new next js 10 feature and have a page only to tha feature. But when im gonna do a deploy, this error appears: **i18n support is not compatible with next export.** Theres nothing about this in…

### CASE-5220 · Router.query is empty on subsequent client navigation events
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍6 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug Using Next 9's routing solution for a Universal App, "router.query" for post-SSR client-side navigation is never populated even if `asPath` contains a query string for any of the following router access methods: ``` import { SingletonRouter, useRouter, withRouter } from 'next/router'; ``` ## To Reproduce Perform an initial navigation to `/search?term=hello`, the server rendered page's router information contains a populated "query": ``` const router = useRouter(); console.log({ router }); // asPath: "/search?term=hello", pathname: "/search", query: { term:…

### CASE-5223 · getInitialProps that with dynamic import, ssr is ok, but has error in client side
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: # Bug report ## getInitialProps that with dynamic import, ssr is ok, but have errors in client side **pages/index.js** import React from "react"; import dynamic from "next/dynamic"; class Index extends React.Component { static async getInitialProps() { return { Hello: dynamic(import("../components/hello")) }; } constructor(props) { super(props); console.log("props:", props); } render() { const { Hello } = this.props; console.log(this.props); return ( <div> <Hello /> </div> ); } } export default Index;` **components/hello.js** export default class hello extends React.Component{ render () {…

### CASE-5225 · Custom componentDidCatch does not work during SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍20 💬15 · closed · labels: Upstream
- **Excerpt**: # Bug report ## Describe the bug It looks like [React Error Boundaries]([link]) are ignored during SSR, which makes it impossible to use components with `componentDidCatch` lifecycle methods. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Clone MWE from [kachkaev/next-component-did-catch-mwe]([link]) 2. `yarn` 3. `yarn build && yarn start` (using production mode) 4. go to [link] 5. click _open a page that contains something broken_ to go to [link] 6. observe `Cannot read property '42' of undefined` triggered from `SomethingBroken` and handled…

### CASE-5228 · Styled Components fail to SSR on first render
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍5 💬15 · closed
- **Excerpt**: I'm am using `styled-components` in **Next.js**. When I deploy the app, the first time the UI is rendered, it is unstyled. Only after a refresh does the SSR styles come through and persist. **Implementation based on:** [link] _Anyone have ideas?_ I'm stumped atm :( [link] <!-- Thank you very much for contributing to Next.js by creating an issue! ❤️ To avoid duplicate issues we ask you to check off the following list --> <!-- Checked checkbox should look like this: [x] --> - [x] I have searched the [issues]([link]) of this repository and believe that this is not a duplicate. ## Expected…

### CASE-5231 · Form field hydration glitch with Turbopack in production build
- **Principles**: P-F4, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍0 💬14 · closed · labels: Turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Render an `<input>` on a page that has enough JavaScript to create a significant delay before rendering 2. With Turbopack enabled (as is the default in the Next.js 16), run `npm run build && npm run start`. (The bug does _not_ occur in dev mode.) 3. Load the page and try typing in the `<input>` before hydration occurs. This glitch occurs in both the Pages Router and the App Router. ### Current vs. Expected behavior When hydration occurs, whatever you typed in the `<input>` is lost. This suggests that something went…

### CASE-5248 · asPath on the server does not match the requested URL (custom server)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍6 💬14 · closed · labels: bug/Pages Router
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce 1. Start application on development (yarn serve) 2. Open [link] 3. Get an error ### Current vs. Expected behavior ### Current: When I go to the page [link] I get the error `"Error: The text content does not match the HTML displayed by the server"` because the asPath on the server is not match request URL (and doesn't match router.asPath from useRouter) ``` Unhandled Runtime Error Error: Text content does not match server-rendered HTML. Warning: Text content did not match. Server: "/" Client:…

### CASE-5298 · FOUC: SSR Broken for styled-jsx components from external module
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍6 💬14 · closed
- **Excerpt**: # Bug report When importing a component from an external npm module ssr of styled-jsx styles is broken ## Describe the bug I checked a lot of older issues that where quite similar, but non of them got me a solution. Our shared component-library is using styled-jsx as a peerDep as described in mutiple issues. So there is no possibility of a version missmatch. Example that shows the issue: [link] ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Create a next app 2. Add a module with styled-jsx components in it 3. Use the component somewhere 4.…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5213 · Image component isn't fluid
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍34 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug The Image component wrapper has a fixed width and can't be changed. ## To Reproduce I created a codesandbox to illustrate the issue. [link] This is a really common layout, images in columns. They have a final width but they should still be fluid. If I remove the `width` and `height` props then the `Image` component will use the `deviceSizes` setting which is not ideal as those are generic. ## Expected behavior I was wondering if we could turn that fixed size off as the padding on the internal wrapper already takes care of maintaining the image ratio. ##…

### CASE-5219 · Intercom widget confuses HeadManager
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug I have integrated Intercom using more or less the example code from [link] Everything works as expected but after opening the intercom widget (i.e. lazyLoading the intercom widget library), I receive this error message in the JavaScript console of my browser: ``` head-manager.js:67 Uncaught (in promise) TypeError: Cannot read property 'tagName' of null at HeadManager.updateElements (head-manager.js:67) at head-manager.js:35 at Array.forEach (<anonymous>) at HeadManager.doUpdateHead (head-manager.js:34) at head-manager.js:19 ``` The reason is the following: I…

### CASE-5233 · reading closure values from server action fails if a lambda is defined inside the action
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍1 💬14 · closed · labels: locked/Server Actions
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. start the dev server (bun dev or npm run dev) 2. open localhost:3000 3. click on submit button ### Current vs. Expected behavior ## current behavior: It thows a `ReferenceError: someValueFromRender is not defined` ![Image]([link]) ## expected behavior server action can access and log the value "someValueFromRender" ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 24.4.0: Tue Mar 4 21:05:34 PST 2025;…

### CASE-5234 · Next 15.2 development performance regression
- **Principles**: P-A3, P-H1 · **Env**: react, next.js
- **Signals**: 👍33 💬14 · closed · labels: Performance/linear: next/locked/React
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce - `pnpm i` - `pnpm dev` Click on some of the buttons and observe performance. There's a lag to the action. - Revert `next` in `package.json` to `15.1.7` - `pnpm i` - `pnpm dev` The buttons are noticeably more performant. ### Current vs. Expected behavior There should not be a performance regression? Using the React dev tools profiler, we can see the difference (this is a slice that shows the render time for clicking one of the buttons): **Next.js 15.1.7** ![Image]([link]) **Next.js 15.2.1** ![Image]([link]) ### Provide…

### CASE-5240 · Parallel Routes cause redundant RSC fetches on navigation
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬14 · closed · labels: bug/Linking and Navigating/Parallel & Intercepting Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create production build of the application (`bun run build && bun start`) or navigate to [link] 2. Click on one of the cards in the bottom half of the page ### Current vs. Expected behavior **Current Behavior** If you open the Network tab in DevTools, when you click a card you will see 21 fetches for the current route (with different `?_rsc=` params), which I believe correspond to the 21 different parallel slots in the layout. ![image]([link] framework]/assets/85196623/7e465ec1-47d3-4d2d-b83e-119f91d0f58a) Maybe this…

### CASE-5242 · Video.js in App Route - window is not defined
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. pnpm build 2. pnpm start ### Current vs. Expected behavior **Current** Catch `Uncaught Error: Uncaught ReferenceError: window is not defined` in console and not work video.js Cloned an example from a folder [[link] framework]/tree/canary/examples/with-videojs](examples/with-videojs) and ported to App Router I get an error when using `App Router` in `14.1.0` (latest), but if I change the version to `^13.5.6` - Video.js worked. **Expected** Video.js libraries initialized and mount component similar like previous major…

### CASE-5244 · Bundle size increased by ~5% after 13.4.19
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬14 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Recently I found that after only updating nextjs, the bundle size has increased quite a bit for what is only a minor version bump. The following screenshots were after a fresh install Not sure where to go from here, would like to find out what causes the increase in size. ### Current vs. Expected behavior 13.4.19: <img width="500" alt="Screenshot 2023-10-20 at 10 03 18" src="[link] framework]/assets/33485182/d8a8b708-9491-41d7-9a3d-0df78471fd75"> 13.5.7-canary.11: <img width="480" alt="Screenshot 2023-10-20 at 10 03 49"…

### CASE-5245 · next/dynamic behavior breaking in nextjs 13.5 while using package pdfjs-dist
- **Principles**: P-A3, P-H1, P-F4 · **Env**: opera
- **Signals**: 👍6 💬14 · closed · labels: bug/Lazy Loading/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Visit the url above 2. Notice the following error ![image]([link] framework]/assets/12589797/c1a1c8e2-85b0-48ce-8305-4a7ed2cae3aa) ### Current vs. Expected behavior I have a component that depends on `pdfjs-dist` to do some in browser pdf operations. First I create a base component with `use client;` and then in another wrapper component I import it dynamically with ssr false, and that wrapped component gets used everywhere else. ```ts import dynamic from "next/dynamic"; export const PdfUpload = dynamic(() =>…

### CASE-5246 · Error: ServerContext: [context] already defined
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍1 💬14 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in development by running `npm run dev` 2. Observe the text under the Next.js logo ("Hello from Server Context!") 3. Refresh the page with `⌘+R` or otherwise ### Current vs. Expected behavior **Expected behaviour** Page renders again as before. **Current behaviour** The following error message, that will only be reset by restarting the development server: <img width="971" alt="image" src="[link] framework]/assets/10454463/bcc4b51f-8631-4f14-bb08-d7a46b84c2cb"> ``` Uncaught Error: ServerContext:…

### CASE-5247 · `Image` component does not work with https `next dev`
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍0 💬14 · closed · labels: bug/Image (next/image)/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the example repo 2. Run `pnpm i` 3. Run `pnpm dev` 4. Open `[link] in browser ### Current vs. Expected behavior Current result: Banner is not visible Expected result: Banner is visible ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.6.0: Wed Jul 5 22:22:05 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T6000 Binaries: Node: 18.18.0 npm:…

### CASE-5273 · data-url in scss breaks with nextjs 12.0.3
- **Principles**: P-A3, P-H1 · **Env**: opera, ubuntu, next.js
- **Signals**: 👍25 💬14 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.3-canary.9 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? doesn't matter ### What operating system are you using? Ubuntu 21.04 ### How are you deploying your application? doesn't matter ### Describe the Bug Data Urls in scss don't work anymore with [email] ```scss body { background: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='40px' height='40px' viewBox='0 0 40 40' version='1.1' xmlns='[link] xmlns:xlink='[link] with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg…

### CASE-5286 · Next js <Image> tag with url at build time Fails to load the image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: bug
- **Excerpt**: NextJs tag with CDN URL gives 404 after the production build is taken "next": "^10.0.3", <img width="1142" alt="Screenshot 2020-12-28 at 1 10 19 PM" src="[link]>

### CASE-5288 · Basepath not working with public folder
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report Basepath not working with public folder ## Describe the bug Basepath not working with public folder, the project go to production in a subfolder: igtown. basePath: '/igtown' if set basepath in next.config.js and export in prod, the images in public folder go to 404. link and file js working finally. ## System information - Version of Next.js: 10.0.3 - Version of Node.js: [e.g. 12.0.0] - Deployment: next export

### CASE-5292 · Code elimination broken for module that exports frontend and Node.js
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, next.js
- **Signals**: 👍18 💬14 · closed · labels: locked
- **Excerpt**: # Bug report ## Describe the bug The code elimination is broken, if you import from a file, which exports both frontend and Node.js code. ## To Reproduce Clone and run: [link] ## Expected behavior The code elimination should sort out the frontend and Node.js code correctly. ## Screenshots ![image]([link]) ## System information - OS: Ubuntu 20 - Version of Next.js: 9.5.2 - Version of Node.js: 14.8.0 ## Additional context This is an isolated reproduction of a problem a Prisma user hit with running Prisma Client in `getStaticProps` [link]

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5214 · [Bug] eval-source-maps are failing for dynamic routes and don't map properly
- **Principles**: P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍3 💬15 · closed · labels: Upstream
- **Excerpt**: # Bug report Sourcemaps are not being generated properly from next.js ## Describe the bug Sourcemaps don't generate the correct `sources` path because it truncates dynamic paths (e.g [id]) ## To Reproduce 1. Clone next.js and go to [link] framework]/tree/master/examples/dynamic-routing (master branch or 9.5) 2. install dependencies, then run `yarn|npm run dev` 3. go to localhost and click "first post" 4. Now go into the `.next` folder, server -> pages -> post -> [id].js 5. Search for `/***/ "./pages/post/[id]/index.js":` 6. Select the base64 content and run `pbpaste | base64 -D` on the…

### CASE-5237 · HookWebpackError - cssnano-simple - layers with the same name build error
- **Principles**: P-B1, P-B2, P-B3 · **Env**: webpack, react
- **Signals**: 👍0 💬14 · closed · labels: bug/Output/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce ``` git clone [email]:ktabors/nextjs-layer-bug.git cd nextjs-layer-bug yarn install yarn build ``` The project was stripped to nextjs and react. The index.js imports the styles from a css file with the above CSS. ### Current vs. Expected behavior **Current:** When building a project the following CSS layers cause cssnano to throw an error. CSS: ``` @user b { ._5-enzrfpb:lang(ar) { font-family: myriad-arabic; } } @user b; ``` The error: ``` HookWebpackError: Cannot read properties of undefined (reading 'length') at…

### CASE-5238 · `next/font` no longer works with "Inter" and "slnt" axes enabled
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍8 💬14 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce clone repo, install deps, run `pnpm run build`. see error message: ``` Failed to fetch `Inter` from Google Fonts.} Failed to fetch font `Inter`. URL: [link] Please check if the network is available. Retrying 1/3... Failed to fetch font `Inter`. URL: [link] Please check if the network is available. Retrying 2/3... Failed to fetch font `Inter`. URL: [link] Please check if the network is available. Retrying 3/3... Error [NextFontError]: Failed to fetch font `Inter`. URL: [link] Please check if the network is available. ```…

### CASE-5253 · redux context in root layout not applying to sub page layouts
- **Principles**: P-B1, P-B2, P-B3 · **Env**: next.js
- **Signals**: 👍0 💬14 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash nextjs latest / stable ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) layouts / app router ### Link to the code that reproduces this issue [link] ### To Reproduce create sub page layouts that uses redux with redux context wrapping children in root layout. ### Describe the Bug for context, I am using this repo to get redux up and running my app router/ next 13 stable project: [link] issue: I have context wrapped in root…

### CASE-5259 · Getting error invalid type: string "--roboto" only when using Turbo mode
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍6 💬14 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:54 PDT 2022; root:xnu-8792.41.9~2/RELEASE_X86_64 Binaries: Node: 18.3.0 npm: 8.11.0 Yarn: 3.3.1 pnpm: N/A Relevant packages: next: 13.1.1-canary.1 eslint-config-next: 13.1.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font), Turbopack (--turbo) ### Link to the code that reproduces…

### CASE-5265 · Font optimization corrupts Google Fonts link
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, windows, next.js, react
- **Signals**: 👍15 💬14 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 14.17.4 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.1.6-canary.9 react: 18.1.0 react-dom: 18.1.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug [Font optimization]([link]) function corrupts font link and does not convert `<link>` fully into `<style>` tag. Therefore,…

### CASE-5267 · Docs: Official Documentation For Custom Fonts
- **Principles**: P-B1, P-B2, P-B3 · **Env**: next.js
- **Signals**: 👍8 💬14 · closed · labels: locked
- **Excerpt**: ### What is the improvement or update you wish to see? Official documentation on how to deal with custom fonts should be listed within the Font Optimization page at the very top and it should very clearly explain how I can best use custom fonts on my Next.js application. ### Is there any context that might help us understand? Here's the journey for me, today: I google: "Next.js custom font" and am given this as the top result: [link] I happen to know that this only works for Google fonts, but somebody else might not. They'll be very confused until they scroll _very_ far down the page to see a…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-5215 · Scrolling happens when user returns to a page with hash using browser back button
- **Principles**: P-A5, P-D4, P-F1, P-F5 · **Env**: unspecified
- **Signals**: 👍7 💬15 · open · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug When user returns to a page which have url with hash (e.g. `[link]) from another page, unexpected scrolling to the anchor element happen. It seems `componentDidUpdate` of Container triggers `scrollToHash` even when one returns by clicking browser back button. ([link] framework]/blob/v9.4.4/packages/next/client/index.js#L135-L137) ## To Reproduce Example repo: [link] 1. `git clone [email]:monae/nextjs-scrolltohash-bug.git` and `npm run dev`. 2. Click on 'Open the test page without hash'. You are on top of the page. 3. Scroll down and click on 'Open another…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5217 · Having the package dotenv installed breaks 9.4.0 .env features
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, next.js
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ## Describe the bug When the `dotenv` package is installed the new .env features of 9.4.0 don't work: all variables are undefined. ## To Reproduce [link] ^ Remove `dotenv` and it will work as expected ## System information - OS: Windows - Version of Next.js: 9.4.0 - Version of Node.js: 12.16.3 --- Sidenote: regardless of the bug this release kicks ass, great work!

### CASE-5218 · Global Sass imports don't work when you use variables, mixins, functions, etc!
- **Principles**: P-E1, P-E2, P-E4 · **Env**: nuxt, next.js
- **Signals**: 👍6 💬15 · closed
- **Excerpt**: I've been working in `Gatsby` for a while, and recently did a project in `Nuxt.js`, and I'd love to compare and hope for a similar feature in `Next.js`. I recently read the blog about Sass imports in version 9.3 and I thought now would be a great time to test out Next.js with a new project. **I would love to know if this is a bug that's getting fixed, or there are similar "community" packages that solve this problem, and/or if Next.js will implement this in the future ever?** # Bug report Global imports for Sass work via `pages/_app.js`, but the Sass mixins, variables, functions, etc don't…

### CASE-5236 · Source map error when accessing .env variables
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: opera, windows
- **Signals**: 👍13 💬14 · closed · labels: bug/Webpack/Runtime/Turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. npm run dev 2. go to /page1 3. reload the page 4. get an error ### Current vs. Expected behavior Expected: accessing .env variables without errors. Current: console error every time you try to access .env vars. ![image]([link]) ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Available memory (MB): 16349 Available CPU cores: 4 Binaries: Node: 23.0.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 15.0.2-canary.6 // Latest available version is detected…

### CASE-5243 · Tree-shaking/Code splitting doesn't with react-aria-components
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍5 💬14 · closed · labels: bug/locked
- **Excerpt**: ### Discussed in [link] framework]/discussions/60206 <div type='discussions-op-text'> <sup>Originally posted by **IonelLupu** January 4, 2024</sup> ### Summary We started to use [react-aria-components]([link]) in our NextJS project and we encountered something strange: when using just a simple `<Button>` from **_react-aria-components_**, the entire 140kb+ **_react-aria-components_** package is imported in the app as seen in the [next-bundle-analyzer]([link] framework]/tree/canary/packages/next-bundle-analyzer) report below: ![image]([link]…

### CASE-5255 · [NEXT-733] global-error.tsx issues
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, next.js, react
- **Signals**: 👍3 💬14 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.17.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.2.2-canary.3 eslint-config-next: 13.2.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce 1.) Add a .env file with these variables: NEXTAUTH_URL=[link]…

### CASE-5263 · Invariant: attempted to hard navigate to the same URL (Rewrites inside next.config.mjs)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, next.js, react
- **Signals**: 👍8 💬14 · open · labels: bug
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Deployed to Vercel ```Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.13.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.2.6-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) Not relevant ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug When creating rewrites from next.config.mjs, that include a trailing…

### CASE-5290 · Using `vc dev` .env has higher priority than .env.local
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: # Bug report ## Describe the bug Doc states the following: > In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment. > > Next.js allows you to set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment). > > **.env.local always overrides the defaults set.** Creating `.env` and `.env.local` setting the same `TEST` env variable and `console.log` shows that `.env` is actually overriding `.env.local` ## To…

### CASE-5291 · The test NODE_ENV isn't being set properly
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js
- **Signals**: 👍11 💬14 · closed · labels: Testing/please verify canary
- **Excerpt**: # Bug report ## Describe the bug Currently, Next.js only supports three different values for `process.env.NODE_ENV` (as documented [here]([link])): `development`, `production`, and `test`. When running `NODE_ENV='test' next build`, Next.js loads the right `.env.test` files but fails to properly replace `process.env.NODE_ENV` references with `test` (instead of `production`). Previous issues (e.g. [ref], [ref]) have requested support for more environment variables. **This is not what this issue is about.** This is an issue with behaviour that Next.js has already documented as supported (e.g.…

### CASE-5297 · Routing isn't screen-reader accessible?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js
- **Signals**: 👍21 💬14 · closed
- **Excerpt**: # Bug report I was browsing my next.js app with voiceover on, and noticed that client-side route changes aren't announced or even noticed by the screen reader. This is kind of alarming, since I've been using it in production on the assumption that the routing was accessible (my bad, was confusing with gatsby's use of reach-router). I don't see many other references to "accessible routing" or "screen readers" in the issue history or documentation. ## To Reproduce With voiceover (perhaps other screen readers too) on, click a next/link. ## Expected behavior Focus should move to the top of the…

### CASE-5300 · cacheComponents breaks React Portal cleanup — portaled content stays stuck after route change
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍13 💬13 · closed · labels: linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the repo linked above and run `npm install`. 2. Start the app with `npm run dev`. 3. Open the Home page (`/`) — you’ll see 4 dropdown menus, each using a different implementation: - Radix UI / shadcn dropdown - Raw React portal example - React Aria popover - Headless UI popover 4. Open any of the dropdowns/popovers. 5. Inside each one, click the link that navigates to `/dashboard`. 6. After navigation, notice that the portaled content remains visible on the new route and doesn’t go away until you refresh the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5226 · Flow Type Error with Next.js 6
- **Principles**: P-D1, P-D2, P-D3 · **Env**: next.js, react
- **Signals**: 👍19 💬15 · closed
- **Excerpt**: # Bug report ## Describe the bug When components with flow types are used the pages using those components throw an "Unexpected token" error due to `type`. ### Packages: * babel/preset-flow * flow-bin ### .babelrc * *babel/preset-flow* in in `presets` * *babel/plugin-transform-flow-strip-types* in `plugins`. ## To Reproduce 1. `git clone [email]:bryanterrell/hello-next-flow.git` 2. `cd hello-next-flow` 3. `npm i` 4. `npm run dev` 5. Open [link] in browser & click *Go to About Page* 6. Error is produced: ``` Syntax Error: Unexpected token, expected ";" (3:5) 1 | import * as React from "react";…

### CASE-5235 · Docs: search dialog background transition bug
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: locked/Improvement
- **Excerpt**: ### What is the documentation issue? 1. open the search dialog 2. dialog background goes black then suddenly transparent ### Is there any context that might help us understand? [link] ### Does the docs page already exist? Please link to it. [link]

### CASE-5249 · Transition between locales on Dynamic Routes preserve default locale in getServerSideProps
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, next.js, react, typescript
- **Signals**: 👍8 💬14 · closed · labels: examples/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.14.0 npm: 9.3.1 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.13 eslint-config-next: 13.4.3 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which example does this report relate to? Internationalization (i18n) / getServerSideProps / Pages router ```js const { locale, pathname, asPath, query, replace } = useRouter(); const changeLocale =…

### CASE-5289 · CSS is reset on route change in production build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: next.js
- **Signals**: 👍9 💬14 · closed · labels: Webpack
- **Excerpt**: # Bug report ## Describe the bug When you navigate to a different route in Next.js 10.0.0 module specific css is reset. This is problematic, because I keep the component mounted for a bit longer to do some animations with `framer-motion`. In Next.js 9 this was not an issue. Edit: By the comments it seems like this bug first occured in 9.5.5 ## To Reproduce Here is a very basic example. If you run the app in dev mode it works fine, but the production build doesn't. The css is immediately removed if you click on the link. [link] Source code: [link] To keep the page component mounted until the…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5230 · zlib memory leak Node.js 24
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍12 💬14 · closed · labels: Performance/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Use Node.js version 24.13.0 2. npm run build 3. NODE_OPTIONS=--inspect ./node_modules/.bin/next start 4. Follow [link] 5. Call GC & make memory snapshot 6. Run snippet in browser console: ```js const ATTEMPT_COUNT = 50 const ATTEMPT_TIMEOUT_MS = 10 const REQUEST_COUNT = 10 const REQUEST_TIMEOUT_MS = 500 for await (const attemptIndex of Array.from({ length: ATTEMPT_COUNT }).keys()) { for (const requestIndex of Array.from({ length: REQUEST_COUNT }).keys()) { fetch('[link] { signal:…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-5232 · Memory leak on async calls in dev server
- **Principles**: P-C1, P-C2, P-C3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬14 · open · labels: Route Handlers
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1.Start the server with npm run dev. 2.Open the following link in your browser: [link] 3.After a while, the server crashes while GC logs are being printed. ### Current vs. Expected behavior It appears that a memory leak occurs only in the development server when calling async functions from route.ts. Running a large number of async functions in a loop results in a steady increase in heap usage over time. In contrast, there is no such issue in the production build. I noticed that when running the development server for an…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5241 · New ESLint "flat" configuration file does not work with `next/core-web-vitals`
- **Principles**: P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍46 💬14 · closed · labels: bug/Linting/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run `npm run dev` and observe the error showing that `...compat.extends("next/core-web-vitals")` does not work. ### Current vs. Expected behavior **Current behavior:** It is impossible to use the [new ESLint "flat config"]([link]) in a Next.js project (due to `next/core-web-vitals`). **Expected behavior:** It should work. ### Which area(s) are affected? (Select all that apply) ESLint (eslint-config-next) ### Additional context In case it is not clear, I have imported `...compat.extends("next/core-web-vitals")` in…

### CASE-5295 · styles flickering in dev with tailwind + css modules
- **Principles**: P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍14 💬14 · closed · labels: type: next
- **Excerpt**: # Bug report ## Describe the bug I'm using tailwindcss with css modules and I notice that the first time the page loads, all my styles are not loaded. Trying to figure it put what was happening, I run the tailwindcss example and added a style from a css module and it happens there too, even when built for prod. ## To Reproduce Run the example from [link] Add a `index.module.css` file with some style add the styles form the css module in the `index.js` page ## Expected behavior Without the use of the css modules, all styles are loaded fine the first time, without flickering. Same behavior is…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5294 · CSR (client side transition) not working on 404 pages
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: # Bug report ## Describe the bug Using a Link to go to a 404 page doesn't work. The link is unresponsive, nothing happens on the browser. You can reproduce this at [link] and click on the `This is a client-side navigation (CSR)` link. Note that using `This is a normal navigation` link works as expected, but it uses a `<a>` link instead. ## To Reproduce 1. Use `<Link>` from `next/link` with href to a non-existing page 2. Try to click on it ## Expected behavior The link should redirect to a 404 page. ## Screenshots Video at [link] ## Additional context Reproduced on v9.4.1 to v9.4.4

