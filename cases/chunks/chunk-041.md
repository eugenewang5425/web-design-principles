# Case Chunk 041 — Round 41

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5001 · Next Image does not work properly when used in a horizontally scrolling container
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, android, macos, android 12, next.js, desktop
- **Signals**: 👍0 💬21 · closed · labels: Image (next/image)
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome (Desktop and Android) ### What operating system are you using? macOS Monterey and Android 12 ### How are you deploying your application? Vercel (broken when developing locally with yarn dev as well) ### Describe the Bug There are two issues present: I am using Next Image inside of a horizontally scrolling container and the `lazyBoundary` prop isn't working + on Android Chrome images will permanently disappear once scrolled away from. Firstly, here is a…

### CASE-5002 · swcMinify: true - ReferenceError: Can't find variable: excludeEmptyString
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, opera, macos, next.js
- **Signals**: 👍10 💬21 · closed
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 16.10.0 ### What browser are you using? Safari ### What operating system are you using? MacOS ### How are you deploying your application? Vercel ### Describe the Bug I'm sure its connected to other issues, but thought I'd provide some more context. Setting the swcMinify config to true seems to break something in the runtime as it successfully builds and deploys, but then when navigating to certain pages I get: ``` ReferenceError: Can't find variable: excludeEmptyString matches — string.js:75…

### CASE-5004 · styled-jsx: plugins is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, linux, windows, macos, next.js, desktop
- **Signals**: 👍0 💬21 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.0.9 ### What version of Node.js are you using? 15.11.0 ### What browser are you using? Chrome, Brave, Firefox ### What operating system are you using? Linux, WIndows, MacOS ### How are you deploying your application? next start ### Describe the Bug When trying to set up styled-jsx to work with sass I get the following error ``` event - build page: / wait - compiling... info - Using external babel configuration from /home/m1ck0/Desktop/projects/test-next-style/with-styled-jsx-scss-app/.babelrc error - ./pages/index.js TypeError:…

### CASE-5005 · GetStaticProps returning initial notFound never triggers a rebuild on revalidate with dynamic routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍22 💬21 · closed
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 12.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **How are you deploying your application?** next start **Describe the Bug** If `getStaticProps` returns `notFound: true` in the initial build with a revalidate value, Nextjs never tries to rebuild the page **Expected Behavior** Nextjs should try rebuilding the page instead of assuming permanent 404 **To Reproduce** ```javascript export const getStaticProps = async (props) => { try { const dictionaries =…

### CASE-5009 · The page first (ssr) load has broken css (often but not always)
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, ubuntu, next.js
- **Signals**: 👍24 💬21 · closed
- **Excerpt**: # Bug report ## Describe the bug I'm working on the [link] project, you can see that the css is loaded on the first display, then it disappears (this is maybe too fast in production mode but we see it clearly in dev mode) ## To Reproduce Simply go to [link] and see the broken css, if you click on a link that changes the route, everything start working fine ## Expected behavior ## System information - server OS: ubuntu - Browser (if applies) chrome - Version of Next.js: [e.g. 6.0.2] ## Additional context I referred to the material-ui docs, here are my implementations: _document.js ``` import…

### CASE-5010 · import customized Document from library causes 'Constructor invoked without 'new'' error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, windows, next.js
- **Signals**: 👍11 💬21 · closed
- **Excerpt**: # Bug report 1. Make a library which included a customized Document(_document.js). 1. import the customized Document into another project. throws `TypeError: Class constructor Document cannot be invoked without 'new'` error. There's no error before next9 ## To Reproduce [[link]]([link]) ## Screenshots ![image]([link]) ## System information - OS: [Windows] - Browser (if applies) [chrome,] - Version of Next.js: [9.0.2 and canary]

### CASE-5011 · Script debugging no longer seem to work in Chrome DevTools and VS Code
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, next.js
- **Signals**: 👍22 💬21 · closed · labels: good first issue
- **Excerpt**: Hi Kenneth from VS Code here. We are getting reports that Script debugging no longer works in VS Code, after our users have upgraded to `Next.js 6.0+`. See [link] I just validated this myself with both VS Code and Chrome DevTools, and the issue seems to be that app components no longer are getting exposed by the debugger, which means that Chrome DevTools doesn't list the files under Sources, and VS Code can't map the loaded scripts to the files open inside VS Code. I'm wondering if internals of next.js have changed so you load app scripts in a different way in relation to the main Node…

### CASE-5022 · [NEXT-1336] Cannot run with custom https at localhost
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍9 💬20 · closed · labels: bug/Output/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.0.0: Tue Jun 13 21:16:44 PDT 2023; root:xnu-10002.0.116.505.3~3/RELEASE_ARM64_T6000 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: 8.6.2 Relevant packages: next: 13.4.7 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ###…

### CASE-5023 · Translations not showing on Next Link click using 'en' locale (i18next loses instance) only on Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows, next.js, react
- **Signals**: 👍7 💬20 · closed · labels: bug/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 18.8.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.4.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Internationalization (i18n), Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [link] ### To Reproduce Go to [link] and click on the…

### CASE-5026 · Next 13 - When running turbo, scss stylesheets are not loaded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, next.js, react
- **Signals**: 👍7 💬20 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 16.14.2 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.2-canary.0 eslint-config-next: 13.0.1 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug Scss modules do not appear to be loading under the new turbo The style import always…

### CASE-5027 · eslint not working after updating eslint-config-next to v12.1.1
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, safari, next.js, react
- **Signals**: 👍4 💬20 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Mon Feb 21 20:34:37 PST 2022; root:xnu-8020.101.4~2/RELEASE_X86_64 Binaries: Node: 17.8.0 npm: 8.5.5 Yarn: N/A pnpm: N/A Relevant packages: next: 12.1.1 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Safari Version 15.4 (17613.1.17.1.6) ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug ESLint doesn't work after updating…

### CASE-5028 · Sudden error - Refused to execute script from worker.ts because it's MIME type (video/mp2t) is not executable
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍8 💬20 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 14 ### What browser are you using? chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug I was writing code - plugging around with webworkers. It was literally working perfectly - worker running, hit save, and now Next.js considers the file a (video/mp2t)...wat? I L.I.T.E.R.A.L.L.Y just hit save. No server reboot, config change no nothing. It was working. Here's the worker if anyone smarter than me can identify some magic…

### CASE-5029 · image optimizer returns 400 when path contains unicode characters
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, opera, ubuntu, next.js
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.17.2 ### What browser are you using? firefox ### What operating system are you using? ubuntu ### How are you deploying your application? vercel ### Describe the Bug in a production build, the image optimizer returns with status code 400, and error message "The requested resource isn't a valid image" when the image src contains non-ascii unicode characters. ### Expected Behavior image optimizer should handle paths with all allowed unicode characters ### To Reproduce 1. clone [link] and `yarn…

### CASE-5030 · Webpack 5 breaks dynamic wasm import for SSR
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, opera, windows, webpack, next.js
- **Signals**: 👍10 💬20 · closed · labels: Webpack/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Other ### Describe the Bug Using Webpack 5 breaks dynamic import for WASM modules when using SSR. `ENOENT: no such file or directory, open '...\.next\server\static\wasm` I've provided a minimal reproducible example here: [link] ### Expected Behavior Dynamic import of WASM modules should work for SSR when using Webpack 5. ### To Reproduce Run `npm run build` ```…

### CASE-5034 · Error occurs after updating to [email]
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, windows, webpack, next.js
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: # Bug report ## Describe the bug Updating to [email], the error message is : "Uncaught (in promise) TypeError: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ is not a function" ## To Reproduce No reproduction yet. ## Expected behavior It works on [email] ## Screenshots <img width="537" alt="Untitled" src="[link]> ## System information - OS: [e.g. macOS, Windows] win10 - Browser (if applies) [e.g. chrome, safari] chrome@user - Version of Next.js: [e.g. 6.0.2] 12.13.0 & 13.1.0 ## Additional context I'll try to make a reproduction and keep posted.

### CASE-5037 · Slow development with TypeScript
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, typescript, webpack
- **Signals**: 👍13 💬20 · closed
- **Excerpt**: # Bug report ## Describe the bug My problems: - I at least wait 2 - 3 minutes for HMR to refresh content, after code change - I at least wait 1 minute to browse between page transitions (especially dynamic routes) Context: - I work in a monorepo project - I run a custom express server Also: - next-i18next - material-ui - styled-components - apollo graphql client - iTerm with 4 watch modes: Apollo Server, CRA app, shared TS project, NextJS app - Chrome with 20+ tabs What I did so far: - excluded `node-modules` in `tsconfig.json` - removed `fork-ts-checker-webpack-plugin` - added ` typescript:…

### CASE-5049 · Random non-deterministic React hydration error 418 using appDir that only happens on prod Vercel
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, react, next.js
- **Signals**: 👍5 💬19 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 Binaries: Node: 16.18.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.15.0 Relevant packages: next: 13.0.5-canary.2 eslint-config-next: 13.0.4 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug I have…

### CASE-5050 · [NEXT-649] next/future/image parent position warning
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, edge, next.js, react
- **Signals**: 👍15 💬19 · closed · labels: bug/Image (next/image)/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:37 PDT 2022; root:xnu-8020.121.3~4/RELEASE_ARM64_T6000 Binaries: Node: 16.13.1 npm: 8.1.2 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.3.2-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Microsoft Edge Version 105.0.1343.42 (Official build) (arm64) ### How are you deploying your…

### CASE-5051 · Build fails to compile - module not found: can't resolve "child_process" 12.1.6
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, linux, next.js, react
- **Signals**: 👍1 💬19 · closed · labels: Middleware
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref] SMP Wed Mar 2 00:30:59 UTC 2022 Binaries: Node: 14.18.1 npm: 6.14.15 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.6 react: 18.1.0 react-dom: 18.1.0 ### What browser are you using? (if relevant) Firefox ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug In the latest 12.1.6, I can't get my site to compile on Vercel. Everything works fine in previous release. See log…

### CASE-5052 · outputStandalone + serverRuntimeConfig not working as expected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react, next.js
- **Signals**: 👍0 💬19 · closed · labels: bug
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.4.0: Tue Jan 18 13:02:08 PST 2022; root:xnu-8020.100.406.0.1~18/RELEASE_ARM64_T8101 Binaries: Node: 16.13.2 npm: 8.1.2 Yarn: 3.1.1 pnpm: N/A Relevant packages: next: 12.0.10 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.10 ### What version of Node.js are you using? 16.13.2 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Docker ### Describe…

### CASE-5053 · Regression in 12.0.8 for jest: TypeError: require.resolveWeak is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, chromium, windows, react, next.js
- **Signals**: 👍0 💬19 · closed · labels: Webpack/Testing
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 16.8.0 npm: 7.21.0 Yarn: 1.22.10 pnpm: N/A Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 16.8.0 ### What browser are you using? Edge (Chromium) ### What operating system are you using? Windows 11 Enterprise (by the way, why does next info say I am using Windows 10??) ### How are you deploying your application? On Azure App Service as…

### CASE-5054 · Unable to view localhost when "concurrentFeatures" is enabled. Requests are left to time out.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, opera, macos, next.js, react
- **Signals**: 👍2 💬19 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 15.4.0 ### What browser are you using? Safari and Chrome ### What operating system are you using? macOS Big Sur 11.6 ### How are you deploying your application? vercel dev ### Describe the Bug I'm trying to enable server components on a relatively fresh project of mine. I ran `npm install react@user react-dom@user --legacy-peer-deps` and then added the following to my `next.config.js` file: ``` experimental: { concurrentFeatures: true, serverComponents: true } ``` I was then getting the following…

### CASE-5055 · Dev mode keeps refreshing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍2 💬19 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.0 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next dev ### Describe the Bug Regularly I'm working along in dev mode, testing my application, NOT making any changes to the code, when suddenly: > event - build page: /[customer]/[config]/[[...index]] > wait - compiling... > event - compiled successfully ...and now all of my in-memory application state is gone - Context, useState, etc. - and I have to start all…

### CASE-5056 · FOUC only in production on latest Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, firefox 85, opera, chrome, ubuntu, next.js, mobile
- **Signals**: 👍17 💬19 · closed · labels: good first issue/Upstream/bug/locked/stale
- **Excerpt**: **What version of Next.js are you using?** 10.0.7 **What version of Node.js are you using?** 12.8.3 **What browser are you using?** Firefox 85.0.1 (64-bit) **What operating system are you using?** Pop_OS! 20.04 (Ubuntu 20.04) **How are you deploying your application?** Vercel **Describe the Bug** I see a FOUC when accessing [my production deployment]([link]) on Firefox: ![fouc]([link]) It seems to disappear when using Chrome or Firefox on mobile. I also appear to get the same issue [for my portfolio website]([link]) on Firefox: ![fouc-portfolio]([link]) **Expected Behavior** There should be…

### CASE-5060 · Source map error: Error: Invalid URL: (Firefox)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, next.js, webpack, bootstrap
- **Signals**: 👍21 💬19 · closed
- **Excerpt**: # Bug report Navigating to our next.js page in Firefox we recieve the following error in the console: ``` Source map error: Error: Invalid URL: webpack://[name]_[chunkhash]/webpack/bootstrap Resource URL: [link] Source Map URL: dll_01ec57fc9b90d43b98a8.js.map ``` When investigating the file itself i do see a lot of `webpack://[name]_[chunkhash]` here are the first few lines: (Im guessing it shouldn't be like this?) ```…

### CASE-5061 · SSR asPath behavior when mounting app under a path
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, macos, next.js
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: # Bug report ## Describe the bug When [mounting the next.js handler under a path]([link]) `asPath` shows different values on server and browser. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Clone [link] 2. `npm i` 3. `npm run dev` 4. Go to `[link] 5. check the console ## Expected behavior No warnings ## Screenshots ![screen shot 2018-07-17 at 16 25 51]([link]) ## System information - OS: macOS - Browser: chrome - Version of Next.js: 6.1.1

### CASE-5062 · infinite refresh loop and crashes in next.js 16.2.7
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, next.js, react
- **Signals**: 👍15 💬18 · closed
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce In Firefox, pages that use PPR go into an infinite refresh loop. Doesn't seem to happen in 16.2.6 but does in 16.2.7 & 16.2.9 ```jsx // app/page.tsx import { Suspense } from "react"; async function Slow() { await new Promise((resolve) => setTimeout(resolve, 500)); return <div>Loaded</div>; } export default function Page() { return ( <Suspense fallback={<div>Loading...</div>}> <Slow /> </Suspense> ); } ``` ### Current vs. Expected behavior don't expect an infinite reload loop. ### Provide environment information ```bash…

### CASE-5070 · Attempted import error: 'webgl-sdf-generator' does not contain a default export (imported as 'createSDFGenerator')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 119, windows, next.js, react, typescript
- **Signals**: 👍20 💬18 · closed · labels: please add a complete reproduction/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.17.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 14.0.4-canary.1 eslint-config-next: 14.0.3 react: 18.2.0 react-dom: 18.2.0 typescript: 5.2.2 Next.js Config: output: N/A ``` ### Which example does this report relate to? there is no ### What browser are you using? (if relevant) Chrome 119.0.6045.160 ### How are you deploying your application? (if…

### CASE-5071 · Array.toSorted, toSliced, toReversed polyfills missing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 15, opera, typescript, next.js
- **Signals**: 👍14 💬18 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. In reproduction template, update typescript to latest - 5.2.2 2. Put following in the Home file: ``` return [3,1,2,4].toSorted().toSpliced(1, 2).toReversed().map(x => <div key={x}>{x}</div>) ``` 3. run app and open it in Safari 15.6 ### Current vs. Expected behavior Expected: ``` 4 1 ``` on the screen Actual: Exception: `.toSorted is not a function` ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System:…

### CASE-5078 · Parent `loading.tsx` UI flashes prior to nested `loading.tsx` UI
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍30 💬18 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Sat Jun 18 17:07:22 PDT 2022; root:xnu-8020.140.41~1/RELEASE_ARM64_T6000 Binaries: Node: 16.14.2 npm: 8.5.0 Yarn: 1.22.19 pnpm: 7.13.4 Relevant packages: next: 13.0.5-canary.4 eslint-config-next: 13.0.5-canary.4 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ###…

### CASE-5079 · Uncaught TypeError: Cannot read properties of undefined (reading 'default') at resolveModuleMetaData
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, firefox, windows, next.js, react
- **Signals**: 👍10 💬18 · closed
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` $ npx --no-install next info Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.18.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.1 eslint-config-next: 12.0.9 react: 18.2.0 react-dom: 18.2.0 warn - Latest canary version not detected, detected: "13.0.1", newest: "13.0.2-canary.2" ``` **Experimental features used:** `appDir` ### What browser are you using? (if relevant) Chrome (107.0.5304.88) / FireFox…

### CASE-5081 · Unable to test middleware with Jest
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, next.js
- **Signals**: 👍3 💬18 · closed · labels: Middleware/Testing
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.13.1 ### What browser are you using? Firefox ### What operating system are you using? Pop!_OS ### How are you deploying your application? Vercel ### Describe the Bug When trying to test `_middleware.js` with Jest, I'm unable to `import { NextResponse } from 'next/server'` without throwing an error `SyntaxError: Unexpected token 'export'` because `next/server` uses `export { NextRequest }` in line 1. ### Expected Behavior I would like to be able to test my `_middleware.js` authentication…

### CASE-5082 · _app.getInitialProps and getStaticProps are being fired for all statically served files while deployed in production on Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬18 · closed · labels: bug/please verify canary
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 14.17.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Hi all, We have an app that uses the following NextJS features: 1. Custom `_app` with `getInitialProps` that fetches some global data from a headless CMS 2. A page template like `[...slug].tsx` 3. The page template above uses `getStaticProps` with `revalidate: XX` and `fallback: true`, and there are about 30 paths output by…

### CASE-5083 · Warnings when debugging in VS Code
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, next.js
- **Signals**: 👍3 💬19 · closed · labels: good first issue/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? v14.16.1 ### What browser are you using? Safari ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Debugging a starter Next.js installation shows several warnings. Even if they are benign, they make it hard to notice other warnings that may appear as the project is developed. VS Code shows the following on the Debug Console: ``` Could not read source map for…

### CASE-5084 · 10.0.8 next/image high memory use
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍9 💬18 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug With v10.0.8 on pages with lots of next/image components seeing much higher memory use compared to 10.0.7. Possibly related to [link] framework][ref] ### Expected Behavior less memory use ### To Reproduce checkout branch `nextjs-leak` [link] run `yarn && yarn build && cd frontend && npx next start` open localhost:3000 and just refresh…

### CASE-5085 · Getting ReactDOMServer does not yet support Suspense error while using styled-components
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, react, next.js
- **Signals**: 👍9 💬18 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 14.4.0 **What browser are you using?** Firefox **What operating system are you using?** Mac **How are you deploying your application?** Heroku **Describe the Bug** I recently updated next-i18next to 8.0.0 and am also using styled components with a custom _document.js as described in the nextjs examples section ([link] framework]/tree/master/examples/with-styled-components). If I load my page index and navigate to another page like /about, everything works fine. If I try to navigate directly to /about,…

### CASE-5086 · Image optimization not kicking in on the server
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍4 💬18 · closed · labels: bug/Image (next/image)
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 15.7.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** Vercel **Describe the Bug** Thanks @user for pointing me here! I recently ran into an issue where the image component image optimization is not kicking in on the "server" (vercel) but is working perfectly when running locally. I added a (running) map image to my website ([link]). It uses the [Mapbox static image API]([link]). The API returns a png so I put the API…

### CASE-5090 · I ran `next build` but it is saying `next command` not found
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, windows, next.js
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: # Bug report ## Describe the bug A clear and concise description of what the bug is. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to '...' 2. Click on '....' 3. Scroll down to '....' 4. See error ## Expected behavior A clear and concise description of what you expected to happen. ## Screenshots If applicable, add screenshots to help explain your problem. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g. chrome, safari] - Version of Next.js: [e.g. 6.0.2] ## Additional context Add any other context about the…

### CASE-5091 · Large _app.js after upgrade to 9.0.7
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, ubuntu, next.js
- **Signals**: 👍16 💬18 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report Just after upgrading to 9.0.7 the _app file got really large (2.4 MB) though nothing in code has changed. By running `yarn:analyze` I see that it's loading all other files imported in sub-components and looks like the code-split is not working. (filename is static/chunks/styles.eaffa8a4b06b647a17c2.js) A clear and concise description of what the bug is. ## System information - OS: ubuntu - Browser: Chrome - Version of Next.js: 9.0.8

### CASE-5096 · Build fails with vanilla-extract and edge runtime
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, opera
- **Signals**: 👍5 💬17 · open · labels: Webpack/Runtime/locked/CSS
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Install dependencies with `pnpm install` 2. Run `pnpm build` 3. The build fails to compile: “Conflict: Multiple assets emit different content to the same filename middleware-manifest.json” <img width="582" alt="Image" src="[link] /> ### Current vs. Expected behavior The expectation is that build succeeds with every run. Currently a clean build fails. ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 24.3.0: Thu Jan 2 20:22:00 PST 2025;…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5003 · Signed images from S3 no longer working with next/image
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍12 💬21 · closed
- **Excerpt**: ### EDIT ~It seems to only be an issue with certain images (these images worked in the prior version of Next.js and still do). These images that error tend to also be the ones which are frequently loaded because of the pages I use to test my platform. Is there a chance something changed with the caching I need to clear (have already wiped `.next` a few times to no avail). As far as I can tell, the images which are erroring are the ones I loaded from the external domain prior to upgrading. One's I did not load prior to upgrading still worked. I have tested in multiple browsers and in incognito…

### CASE-5017 · BUG: incorrect url encoding in `<link rel="preload">` for prioritized images
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬20 · open · labels: Image (next/image)/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. build the application 2. start the server 3. visit the provided url 4. right click and select view source code 5. search for the link `rel=preload` of the `imageSrcSet` 6. <img width="825" alt="Screenshot 2024-08-16 at 4 35 25 p m" src="[link]> 7. see the wrong encoding of the `&` it's `&amp;` and should be `&` or `%26` 8. copy the path and concatenate the path with the `localhost:3000` 9. see the error in the browser: `"w" parameter (width) is required` <img width="910" alt="Screenshot 2024-08-16 at 4 34 17 p m"…

### CASE-5018 · Next14. app router with custom sever cannot setAssetPrefix
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬20 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. create a custom app server from `next({ .... })` and express() 2. when app server has prepared, app.setAssetPrefix('[link]) ``` const app = next({ dev, hostname, port }); app.prepare().then(() => { const server = express(); server.all("*", async (req, res) => { try { /** add prefix to assets */ app.setAssetPrefix("[link]); await handle(req, res, parsedUrl); } catch (err) { res.statusCode = 500; res.end("internal server error"); } }); server.listen(port, () => { console.log(`> Ready on [link]); }); }); ``` <img…

### CASE-5019 · Nextjs - Getting the referer as null sometimes when reading from the next headers
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍41 💬20 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. checkout the project 2. npm install 3. npm run dev 4. open the browser on localhost:3000 5. check the referer is printed on the UI sometimes and upon refreshing the browser, we re getting the value as null consistently Working Example <img width="1315" alt="image" src="[link] framework]/assets/32419524/dfc9271d-a16b-4901-8896-d107953b2164"> Not Working Example <img width="1217" alt="image" src="[link] framework]/assets/32419524/1da67b8b-d4a6-4a82-a0e4-9715ec54408d"> ### Current vs. Expected behavior Bug: Referer is…

### CASE-5020 · Cannot find module '@user/third-parties/google' when trying to import GoogleTagManager
- **Principles**: P-A3, P-H1 · **Env**: typescript, next.js
- **Signals**: 👍16 💬20 · closed · labels: bug/TypeScript/locked/Module Resolution
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start application with next dev 2. Check layout.tsx 3. import error `Cannot find module '@user/third-parties/google' or its corresponding type declarations.typescript(2307)` ### Current vs. Expected behavior Expected: import work as intended in documentation [link] Current: import not working ![image]([link] framework]/assets/62075475/6baaf911-5196-4cdd-984c-62c86c306c31) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash…

### CASE-5021 · Building a component library with `tsup` that uses `next/image` breaks when one of the components directly renders `Image` since `13.4.8-canary.9`
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍22 💬20 · closed · labels: Image (next/image)/linear: next/locked/Module Resolution
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash This outputs seems to have issues with pnpm (?) monorepos. I've corrected the versions. Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 18.13.0 npm: 9.3.1 Yarn: 1.22.19 pnpm: 8.6.0 Relevant Packages: next: 13.4.8 <-- I'm definitely using 13.4.9-canary.1 in the app (apps/web). eslint-config-next: N/A react: 18.2.0 react-dom:…

### CASE-5024 · CSP error when using next/image
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍22 💬20 · open · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Sun Nov 6 23:29:57 PST 2022; root:xnu-8020.240.14~1/RELEASE_ARM64_T8101 Binaries: Node: 18.12.1 npm: 9.3.1 Yarn: 3.3.1 pnpm: N/A Relevant packages: next: 13.1.5-canary.2 eslint-config-next: 13.1.4 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that…

### CASE-5031 · `next/image` memory leak?
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍26 💬20 · closed · labels: please add a complete reproduction
- **Excerpt**: Hi, After the first release of our site in production with Next@user (v10.0.2 precisely), we noticed a gradual memory consumption pattern in our servers. **Edit:** worth noting that we've skipped 9.5 and upgraded straight from 9.4. So it could be a 9.5 issue. **Edit:** **maybe not related to Image component**, as we stopped using it, and still notice a gradual increase in memory consumption (which didn't happen before v10). See [this comment](#discussioncomment-144661). **Edit: Jan 8th 2021:** this is definitely related to Image component. We gave it a second chance, but had to rollback due…

### CASE-5041 · Infinite "Compiling" loop with `opengraph-image.tsx` and Turbopack (Next.js 16)
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍9 💬19 · closed · labels: Performance/Turbopack/linear: turbopack/locked/Error Handling
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce To reproduce the problem, simply click the `Issue` link in the **center of the page**. On the loaded page, the Next.js icon will switch to **"Compiling"** and will never exit that state. <img width="1399" height="932" alt="Image" src="[link] /> ### Current vs. Expected behavior When navigating to pages that have an `opengraph-image.tsx` implemented, if any kind of error occurs in the console, Next.js starts **recompiling** `global-error.tsx` **infinitely**. Additionally, this issue also happens when **navigating away from…

### CASE-5045 · Missing prefetch headers in Middleware
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍25 💬19 · closed · labels: bug/Runtime/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Build the application for production <img width="322" alt="CleanShot 2024-03-26 at 13 08 19@user" src="[link] framework]/assets/76673/b64330db-2134-4f9c-8b23-5c3f131e347d"> 2. Run production server <img width="267" alt="CleanShot 2024-03-26 at 13 08 54@user" src="[link] framework]/assets/76673/4fdf9792-df16-4ec2-a524-60e21b75c608"> 3. Inspect the terminal logs when the server starts <img width="630" alt="image" src="[link] framework]/assets/76673/1a13e81b-3251-4d6b-9f48-c3229c7bb74c"> You will notice that as soon as…

### CASE-5047 · OpenGraph images are not statically generated for dynamic routes
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, next.js, react, typescript
- **Signals**: 👍15 💬19 · closed · labels: Output/Metadata/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] ZEN SMP PREEMPT_DYNAMIC Sun, 04 Jun 2023 11:52:10 +0000 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.10 pnpm: 8.6.1 Relevant packages: next: 13.4.5-canary.12 eslint-config-next: 13.4.5 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Metadata (metadata, generateMetadata, next/head,…

### CASE-5048 · 502: BAD_GATEWAY Code: OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍0 💬19 · closed · labels: please add a complete reproduction/bug/Image (next/image)/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.4-canary.0 eslint-config-next: 13.4.3 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 Read more - [link] ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization…

### CASE-5066 · Unable to process favicon
- **Principles**: P-A3, P-H1 · **Env**: opera, linux
- **Signals**: 👍3 💬18 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Place in the app folder the specific favicon.ico I have provided in the codesandbox 2. Run dev with turbo enabled 3. Receive the following error: ``` ⨯ ./app/favicon.ico Processing image failed unable to decode image data Caused by: - failed to fill whole buffer ``` ### Current vs. Expected behavior Would expect the following the favicon to render: ![image]([link]) but instead get: ![image]([link]) ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC…

### CASE-5069 · Standalone export Sharp executable is not present with pnpm
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬18 · closed · labels: bug/Output/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Set output to standalone on next.config.ts 2. npm run build 3. Move to standalone folder to external source for using 4. node server.js 5. Get "Error: 'sharp' is required to be installed in standalone mode for the image optimization to function correctly." 6. Move @user folder from project path node_modules to .next/standalone/node_modules 7. Problem solved ### Current vs. Expected behavior When i build and use export, i get "Error: 'sharp' is required to be installed in standalone mode for the image optimization to…

### CASE-5072 · Crossorigin is added to scripts tags on static generated pages [next version > 13.5.2]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍30 💬18 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Inspect script tags in <head> v13.5.2 example [link] v13.5.3 example [link] ### Current vs. Expected behavior On statically generated pages crossorigin prop is added to script tags in <head> This started happening on versions 13.5.3+ Previous behaviour (v13.5.2): <img width="1248" alt="image" src="[link] framework]/assets/36345162/00ad370e-1302-48e7-b56f-c6054c403e6b"> v13.5.3: <img width="1285" alt="image" src="[link] framework]/assets/36345162/03dbe52a-4d05-4eee-ad1b-64b67ed61a45"> We are using CDN in our app and this…

### CASE-5080 · Next13 <Image> tag not loading external urls in development with app
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍9 💬18 · closed · labels: Image (next/image)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.10 pnpm: N/A Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug…

### CASE-5089 · NextJS 9.3 polyfills on IE11 break application
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬18 · closed
- **Excerpt**: # Bug report ## Describe the bug On NextJS 9.2 I had setup to use `corejs@user` for Polyfills. Reading that NextJS 9.3 does auto-polyfill for IE11 when needed, I removed the custom babel config and it "works" sometimes. I started to get this error in IE11 in some pages: <img width="582" alt="Screen Shot 2020-03-11 at 7 42 32 PM" src="[link]> ## To Reproduce I found out that the global polyfills somehow break some libraries (that maybe come with their own polyfills, I don't know). Also, not sure if NextJS 9.3 uses `corejs@user`. One library that is broken (displays above error in screenshot)…

### CASE-5092 · Module not found: Can't resolve webpack alias
- **Principles**: P-A3, P-H1 · **Env**: macos, webpack, next.js
- **Signals**: 👍6 💬18 · closed
- **Excerpt**: # Bug report ## Describe the bug I experience a problem with webpack aliases. They are not working since I've updated to Next v9. I get the following error: ```bash Module not found: Can't resolve '~/components/nav' in '/Users/jerrygreen/projects/next-test/pages' ``` ## To Reproduce I've made a repo with reproducible bug: [link] Steps to reproduce: ```bash git clone [link] cd next.js-issue8452 yarn open [link] yarn dev ``` ## Expected behavior The repo I've linked should work without bugs ## Screenshots ![image]([link]) ## System information - OS: macos 10.14.5 - Version of Next.js: 9.0.4 ##…

### CASE-5098 · The icon does not appear on the home screen PWA app within startup
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍2 💬17 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce In metadata object the startupImage key does not work. By the way, other keys are works. appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "test title", **startupImage: { url: "/icons/apple-touch-icon.png", },** }, ### Current vs. Expected behavior **Current**: I open my bookmark site app from Home Screen but I see only a white screen without any icon. **Expected**: After adding the image URL it must be as an icon when app openning ### Provide environment information ```bash Operating System:…

### CASE-5100 · Custom error.tsx page is not rendered for dynamic routes using generateStaticParams / ISR in app router. Pages router 500.tsx is rendered instead
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍24 💬17 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Install dependencies with `npm install` 2. Build the application with `npm run build` 3. Start the application `npm start` 4. Navigate to `localhost:3000/test` ### Current vs. Expected behavior If you use `generateStaticParams` inside a dynamic route like `[slug]/page.tsx`, none of the custom `error.tsx/global-error.tsx` pages will be displayed in case of an error. What you'll see instead is the NextJS inbuilt error page <img width="276" alt="image" src="[link]…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5006 · Upgrading to Next.js 10 and React 17 - Webpack build fails with `pragma has been set but pragmaFrag has not been set`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: next.js, react, webpack
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: # Bug report ## Describe the bug ``` error - ./src/components/errors/ErrorDebug.tsx Error: /Users/vadorequest/dev/next-right-now/src/components/errors/ErrorDebug.tsx: transform-react-jsx: pragma has been set but pragmaFrag has not been set Error: Cannot find module '/Users/vadorequest/dev/next-right-now/.next/server/pages-manifest.json' Require stack: - /Users/vadorequest/dev/next-right-now/node_modules/next/dist/next-server/server/require.js - /Users/vadorequest/dev/next-right-now/node_modules/next/dist/next-server/server/load-components.js -…

### CASE-5032 · Can't build app with 9.4.0 when using custom babel config
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍3 💬20 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug Since v9.3.7-canary.17 I can't build my app. It builds forever. When I remove the custom `.babelrc` it works fine again. ```js { "presets": [ [ "next/babel", { "styled-jsx": { "plugins": ["styled-jsx-plugin-sass", "styled-jsx-plugin-postcss"] } } ] ], "plugins": [ ["macros"], [ "module-resolver", { "root": ["./"], "alias": { "~": "./" } } ], [ "@user/plugin-transform-react-jsx", { "pragmaFrag": "React.Fragment" } ] ] } ```

### CASE-5039 · Fails to Compile styled-components that use Props
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍2 💬20 · closed
- **Excerpt**: <!-- Checked checkbox should look like this: [x] --> - [x] I have searched the [issues]([link]) of this repository and believe that this is not a duplicate. ## Expected Behavior I had a simple working styled-components header inside a Next@user website: ``` h1 { cursor: pointer; ${props => (props.primary && 'font-size: 6rem;') || 'font-size: 2rem;'} line-height: 1.1; margin-bottom: 1rem; transform: skewY(-2deg); } ``` This is based on the documentation for styled-components at: [link] ## Current Behavior Upgrading to next@user resulted in the following error message: ``` Module build failed:…

### CASE-5040 · TransitionGroup addon causes "Only a ReactOwner can have refs"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: With a help of @user ([link]), I minimized the reproduction of the bug we encounter in [ref] and [ref]. Here is the `pages/index.js`: ```jsx import React from 'react' import TransitionGroup from 'react-addons-transition-group' class Test extends React.Component { render() { return <div ref={woop => console.log(woop)} />; } } export default class App extends React.Component { render() { return <div> <TransitionGroup> <Test key="test-1" ref={test => console.log(test)} /> </TransitionGroup> </div> } } ``` Once you open the page, you will get the following in your browser console: ``` Warning:…

### CASE-5073 · Unhandled Runtime Error Error: Expected a suspended thenable. This is a bug in React. Please file an issue.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, next.js, tailwind, typescript
- **Signals**: 👍36 💬18 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash - node 16.15.0 - package.json { // ... "dependencies": { "@user/node": "20.1.4", "@user/react": "18.2.6", "@user/react-dom": "18.2.4", "autoprefixer": "10.4.14", "eslint": "8.40.0", "eslint-config-next": "13.4.2", "next": "13.4.2", "postcss": "8.4.23", "react": "18.2.0", "react-dom": "18.2.0", "tailwindcss": "3.3.2", "typescript": "5.0.4", "tailwindcss-animate": "^1.0.5" }, "devDependencies": { "@user/eslint-plugin": "^5.57.1", "@user/parser":…

### CASE-5088 · Sass loader cannot resolve modules from Yarn v2 PNP
- **Principles**: P-D1, P-D2, P-D3 · **Env**: next.js
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: # Bug report ## Describe the bug Next.js does not resolve SCSS that is imported by my dependencies: 1. `styles/home.module.scss` uses `@user/elevation` (this works fine). 2. `@user/elevation` uses `@user/animation` (this fails). ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. First, clone [this repository]([link]) and CD inside: ``` $ git clone [link] $ cd with-sass/ ``` 2. Then, make sure you have [Yarn installed]([link]) then run: ``` $ yarn ``` 3. Finally, start the development server by running: ``` $ yarn dev ``` ### Error You'll notice…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5007 · Not working with PNPM
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍14 💬21 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug I tried using Next.js with Rush.js which is a tool that helps developers create and maintain monorepo projects. It has support for NPM, Yarn and PNPM. I tried using with PNPM cause it's really good compared to Yarn and NPM but I was surprised that it wasn't working with Next.js. Next.js is working only with Yarn and NPM and it appears that Next.js's server-renderer bundler is not correctly externalizing modules with PNPM. ## To Reproduce [link] You can clone the repository and follow the readme. There's also a `yarn` branch with a working example. ## Expected…

### CASE-5008 · Next 9 Routing: Requested and resolved page mismatch
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬21 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug We encountered an [error]([link]) that isn't especially actionable as a consumer. It would be helpful to either provide more context in the error so it's easier to understand what went wrong, or make the error explain more what we need to do to solve the problem. It appears to have happened when trying to route `/.` with Next 9 routing in SSR, though I cannot seem to reproduce it. We have a corresponding `/index` page as well as a `/[foo]` page if that's of any help. I'll try to collect more information if it happens again, but I thought it'd be good to know…

### CASE-5033 · Built-in CSS Module Support Not Injecting *.module.css styling during SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍11 💬20 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug The new built-in css module support does not work during SSR, at least not without further configuration that I'm not aware of. Once the page is loaded client side, the styles are injected for the component and everything looks as it should. I checked the html using Postman http client and noticed that there's no `<style></style>` element injected in the `<head />` element. However, after the page loads in a browser, that `<style></style>` element is injected with the expected scoped css. I tried the basic example from the blog post, and it worked. However,…

### CASE-5038 · ref doesn't work with dynamically imported components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍10 💬20 · closed
- **Excerpt**: # Bug report ## Describe the bug When a component is wrapped in `next/dynamic` the passed `ref` should be a ref to the imported component, not an instance of `NoSsr` or `LoadableComponent` ## To Reproduce 1. Import a component using `next/dynamic` 2. Use said component in `render` passing a `ref` (use a function to received the ref) Result: the function is called with either a `NoSSR` component or a `LoadableComponent` instead of an instance of the component imported in step 1 ## Expected behavior The function gets called with an instance of the dynamically loaded component ## System…

### CASE-5057 · Ensure Next.js is correctly respecting `NODE_ENV`
- **Principles**: P-F4 · **Env**: next.js, webpack
- **Signals**: 👍7 💬19 · closed · labels: bug/Webpack
- **Excerpt**: Next.js should unconditionally use `NODE_ENV=development` and `NODE_ENV=production` for `next dev` and `next build` respectively in the following areas: - [ ] `.env.*` loading - [ ] Client-side bundle inlining - [ ] Server-render time - [x] `next/babel` plugin internal mode ([ref]) - [x] Webpack mode ([ref]) The only way to read a "misconfigured" `NODE_ENV` (e.g. `NODE_ENV=staging`) should be in `next.config.js`. This is only allowed for backwards compatibility. I _believe_ we also have to allow it to override what Babel "env" is loaded. I don't feel strongly about this. Next 11 should…

### CASE-5074 · Using dompurify with SSR or Server Component fails with webpack error
- **Principles**: P-F4 · **Env**: opera, linux, webpack, next.js, react
- **Signals**: 👍0 💬18 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.1.0 Relevant packages: next: 13.2.4-canary.5 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open the CodeSandbox above,…

### CASE-5075 · cache: "no-store" option to make page SSR causes error on build
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍19 💬18 · closed · labels: locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:39:35 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8103 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.2.4-canary.1 eslint-config-next: 13.1.6 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Data fetching (gS(S)P,…

### CASE-5077 · (AppDir) 🙏🏻 Don't show a warning when when attributes are dynamically added to the <html> tag before hydration
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍6 💬18 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: 1.22.19 pnpm: 6.28.0 Relevant packages: next: 13.1.1 eslint-config-next: 11.0.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link]…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5012 · Using styled-jsx in a variable throws warning "Received `true` for a non-boolean attribute `jsx`"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬21 · closed
- **Excerpt**: - [x] I have searched the [issues]([link]) of this repository and believe that this is not a duplicate. I wanted to move styled-jsx code to a dedicated variable and then inject it into the `render()` method like this: ```jsx const divstyle = ( <style jsx>{` div { color: red; } `} </style> ); ``` ```jsx return ( <div> <div>foo</div> {divstyle} </div> ); ``` This will inject the style into the DOM but not scoped. In console I see this error: ``` Warning: Received `true` for a non-boolean attribute `jsx`. If you want to write it to the DOM, pass a string instead: jsx="true" or…

### CASE-5059 · Built-in Sass Support for Global Stylesheets (Variables/Mixins.scss)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬19 · closed
- **Excerpt**: # Bug report ## Describe the bug I have included my global.scss, mixins.scss and variables.scss to the _app.js file like mentioned in the documentations [link] but the problem I am facing is that I can leverage of the mixins or variables globally from the different components (*.module.scss) files. How can I make that happen? I have removed the @user/next-css and @user/next-scss per the documentations to just use the built in scss support. This is hte error I am getting: > [ error ] ./styles/_global.scss…

### CASE-5076 · Error: invariant: dynamic responses cannot be unchunked
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js
- **Signals**: 👍10 💬18 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information A next 13 production build hosted on GCP Kubernetes ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue it's a private repository and I cannot share the code. I think it should be easily reproducible ### To Reproduce Just run the latest Nextjs 13 on production ### Describe the Bug Hello, I have recently installed the latest next 13 ("next": "13.1.4"), and ran it on production…

### CASE-5093 · `next build` fails while prerendering internal /_global-error route that does not exist in the app
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js, typescript
- **Signals**: 👍3 💬17 · open · labels: create-next-app
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. run: pnpx next build ### Current vs. Expected behavior I expected the build to be successful, but instead I got: ▲ Next.js 16.1.1 (Turbopack) Creating an optimized production build ... ✓ Compiled successfully in 1622.4ms ✓ Finished TypeScript in 1291.8ms ✓ Collecting page data using 7 workers in 344.7ms Error occurred prerendering page "/_global-error". Read more: [link] Error [InvariantError]: Invariant: Expected workUnitAsyncStorage to have a store. This is a bug in Next.js. at M…

### CASE-5094 · sassOptions additionalData not working as expected - "Can't find stylesheet to import."
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍10 💬17 · closed · labels: linear: next/CSS
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the applicaiton `npm run dev` 2. You should be faced with the following error: ``` ## Error Type Build Error ## Error Message Error evaluating Node.js code ## Build Output ./ui/TestComponent.module.scss Error evaluating Node.js code Error: Can't find stylesheet to import. ╷ 1 │ @user "variables" as *; │ ^^^^^^^^^^^^^^^^^^^^^ ╵ ui/TestComponent.module.scss 1:1 root stylesheet Caused by: Error: Can't find stylesheet to import. ╷ 1 │ @user "variables" as *; │ ^^^^^^^^^^^^^^^^^^^^^ ╵ ui/TestComponent.module.scss 1:1…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5013 · Using `next/font` results in `Font loader calls must be assigned to a const` in Pages Router
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera
- **Signals**: 👍11 💬20 · open · labels: Turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `npm install` 2. `npm run dev` 3. Error ### Current vs. Expected behavior I don't expect an error ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 24.6.0: Mon Jul 14 11:30:29 PDT 2025; root:xnu-11417.140.69~1/RELEASE_ARM64_T6000 Available memory (MB): 32768 Available CPU cores: 10 Binaries: Node: 24.11.1 npm: 11.6.2 Yarn: 1.22.19 pnpm: 9.6.0 Relevant Packages: next: 16.0.7 // Latest available version is detected (16.0.7). eslint-config-next: N/A…

### CASE-5025 · next/font bug when code is instrumented
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍9 💬20 · closed · labels: bug/SWC/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.2.0: Fri Nov 11 02:03:51 PST 2022; root:xnu-8792.61.2~4/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: N/A pnpm: N/A Relevant packages: next: 13.1.1 eslint-config-next: 13.1.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font), SWC transpilation ### Link to the code that reproduces…

### CASE-5036 · Serverless, treeshaking
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍5 💬20 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug Currently, if the next build is targeted to serverless, the resulting files don't go through tree shaking. ## To Reproduce Checkout this repo: [link] Just install and build the project, if you inspect the resulting index.js file, you'll see that it has 1mb and contains all of the icons from font-awesome ## Expected behavior The only icon that should appear there is the one I've imported, it shouldn't include unused code. ## Additional context For me, this is resulting in each page of my app having 16mb, more than 500mb for the entire app and 120mb zipped,…

### CASE-5044 · Next/font does not work with Turbopack in a containerized development environment
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: opera, linux
- **Signals**: 👍14 💬19 · closed · labels: bug/Font (next/font)/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Run these commands to build the image and launch the app: ``` docker build -t next-font-bug . docker run -p 3000:3000 next-font-bug ``` ### Current vs. Expected behavior Current behavior: ``` ⚠ [next]/internal/font/google/inter_59dee874.module.css Error while requesting resource There was an issue establishing a connection while requesting [link] ``` Expected: load up the Google Font correctly. ### Provide environment information ```bash Operating System: Platform: linux Arch: arm64 Version: [ref] SMP Sun Jun 23 23:24:08…

### CASE-5068 · `next/font` interferes with header links from middleware.
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍10 💬18 · closed · labels: Middleware/Internationalization (i18n)/Metadata/Font (next/font)/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `pnpm i && pnpm run dev` 2. Reload `[link] in a browser. 3. Check the response header links in dev tools. **Examples:** - ✅ Last working release (NextJS 14.3.0-canary.42): [link] - 🙅🏻 First broken release (NextJS 14.3.0-canary.43): [link] - ✅ Working without `next/font` (NextJS 15.0.0-rc.0): [link] ### Current vs. Expected behavior The `next-intl` library's middleware injects "alternate" links into the response header for SEO purposes. At the same time, `next/font` injects "preload" header links into the response…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5014 · Memory leak during load tests in dynamic rendering mode
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍10 💬20 · open · labels: Dynamic Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone repository (I prepared a small test repository that reproduces this issue): [link] 2. To trigger the problem, run `./run_next.sh` in a terminal — this starts Next in production mode. 3. Install Rust — it’s required to run the performance test: [link] 4. In a second terminal run `./run_goose_attack_api.sh`. You only need Rust installed locally because the load tests are written in Rust. When I run this test on my MacBook the test finishes in about one minute. It executes 40,000 requests. After the test finishes,…

### CASE-5063 · Memory leak causing OOM still occurs in Next.js 16.0.10 (also tested with 16.0.1) when using output: standalone with fetch requests.
- **Principles**: P-F5, P-H3 · **Env**: linux, next.js
- **Signals**: 👍6 💬18 · closed · labels: Performance/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a Next.js app with `output: 'standalone'` 2. Make fetch requests to an external API 3. With just 2 requests per second, OOM occurs after a few minutes ### Current vs. Expected behavior - **Current**: Memory continuously grows until OOM after ~2 requests/second. GC cannot release the memory. - **Expected**: Memory should stabilize, GC should work properly, no OOM. ### Provide environment information ```bash - Platform: Linux - Node: v22.16.0 - Next.js: 16.0.10 - output: standalone - Router: App Router ``` ###…

### CASE-5099 · Intercepting Routes do not close on navigation with `router.push` or `<Link>` in Next.js
- **Principles**: P-F5, P-H3 · **Env**: next.js
- **Signals**: 👍3 💬17 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Steps to reproduce the behavior: 1. Set up an Intercepting Route in a Next.js application. 2. Navigate to the page that triggers the Intercepting Route. 3. From the Intercepting Route, use `router.push('/')` or a `<Link href={'/'}>` element to navigate back to the home page. 4. Notice that the Intercepting Route does not close or unmount as expected. [link] framework]/assets/74847198/ec0a21cf-3d34-4c5d-9e64-4d53bf45c88e ### Current vs. Expected behavior **Current Behavior:** When navigating away from an Intercepting Route…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5015 · next/navigation router.push does not fully navigate
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍9 💬20 · closed · labels: Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] (Note: This code does not manage to reproduce the issue, but is as close as I get making a minimal example of what our codebase does) ### To Reproduce 1. Run form submission 2. Form submission calls server actions with data 3. Server actions use `revalidatePath` on certain pages to ensure that user navigation to these pages will have fresh data 4. Upon successful server action calls call `router.push` 5. Observe RSC calls in network tab 6. Nothing happens ### Current vs. Expected behavior Current: User is not redirected to desired page…

### CASE-5035 · Upgrading next from 9.0.6 to 9.1.1 brakes a validator in "cssnano-preset-simple" and avoid build and start
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: # Bug report ## Describe the bug Hi everyone, I tried to upgrade next from `9.0.6` to `9.1.1` and it brakes a validator in `cssnano-preset-simple`: ``` TypeError [ERR_INVALID_ARG_TYPE]: The "id" argument must be of type string. Received type object at validateString (internal/validators.js:125:11) at Module.require (internal/modules/cjs/loader.js:632:3) at require (internal/modules/cjs/helpers.js:22:18) at Object.loadQueries (~/node_modules/cssnano-preset-simple/dist/index.js:1:192617) at Function.select (~/node_modules/cssnano-preset-simple/dist/index.js:1:737843) at…

### CASE-5058 · Tailwind CSS base utilities not applied to production builds for TypeScript projects
- **Principles**: P-G4, P-E3 · **Env**: tailwind, typescript, next.js, react
- **Signals**: 👍1 💬19 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug Production builds of Next.js do not apply the base Tailwind utilities in the static build if any components in the `pages/` directory imports any external TypeScript components (such as `components/nav.tsx`), the build only apply the styling added into the ## To Reproduce 1. Create a new NextJS project using `yarn create next-app project-name` 1. Select `with-tailwindcss` example project 1. Add required TypeScript dependencies `yarn add --dev typescript @user/react @user/node` 1. Rename `components/nav.js` to `components/nav.tsx` 1. Run `yarn run build && yarn…

### CASE-5064 · formData with app router: Upload error: TypeError: Failed to parse body as FormData.
- **Principles**: P-G4, P-E3 · **Env**: ios
- **Signals**: 👍4 💬18 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce i am uploading a file using axios in a client side component in this way: ``` const options: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } }; const { data } = await axios.post<{ success: boolean; }>( '/api/upload', formData, options ); ``` in the **/api/upload** route i have the following code: ``` export async function POST(request: NextRequest) { try { console.log('in post'); let formData = await request.formData(); console.log('formData', formData); const file = formData.get('file') as File;…

### CASE-5067 · Docs: Creating new Next.js project with TypeScript does not add TypeScript lint rules
- **Principles**: P-G4, P-E3 · **Env**: next.js, typescript
- **Signals**: 👍10 💬18 · closed · labels: Documentation/locked
- **Excerpt**: ### What is the documentation issue? On the ESLint page of the documentation there is a section named TypeScript. It says that when creating a new project set up to use TypeScript, it should add TypeScript-specific lint rules and the content of the .eslintrc.json file should look like this: ``` { "extends": ["next/core-web-vitals", "next/typescript"] } ``` However, when I create a new Next.js project by running `npx create-next-app@user` and select the option to use TypeScript in the prompts that follow, it does not add the TypeScript lint rules and the .eslintrc.json file looks like this:…

### CASE-5097 · revalidateTag doesn't work after page navigation
- **Principles**: P-G4, P-E3 · **Env**: opera
- **Signals**: 👍0 💬17 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the app 2. On the main page submit the form. POST route handler has a 5 seconds timeout 3. Navigate to the blank page from the header, wait for the response to finish 4. Navigate back to the main page ### Current vs. Expected behavior On navigate back to the main page i expect to see updated data. ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.4.0: Fri Mar 15 00:10:42 PDT 2024; root:xnu-10063.101.17~1/RELEASE_ARM64_T6000 Available…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5016 · Error: Failed to find Server Action "84c...c2". This request might be from an older or newer deployment. Original error: Cannot read properties of undefined (reading 'workers')
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍4 💬20 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Deploy repro repo to Heroku app: `heroku git:remote -a [your-app]` and `git push heroku main` 2. Test that it works and keep this tab open (do not refresh) 3. Make an insignificant change (i.e. modify the readme or add a space) 4. deploy to heroku again `git push heroku main` 5. Do not refresh tab from step 2! 6. After successful deploy, test the app. The server action is now unresponsive. 7. Look into logs and see something like this: ``` 2024-09-18T19:54:44.246958+00:00 app[web.1]: Error: Failed to find Server Action…

### CASE-5042 · Next.js v15.2 creates a lot of fake scripts for server components with the same source map which breaks JS debuggers
- **Principles**: P-A1, P-A4, P-G3 · **Env**: next.js
- **Signals**: 👍22 💬19 · open · labels: linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in dev mode (either `next dev` or `next dev --turbopack`) 2. Set a breakpoint on [`app/page.tsx:3`]([link]) (on the `console.log`) 3. Start debugging in a browser ### Current vs. Expected behavior ### Expected behavior The debugger will stop in `app/page.tsx` only once (at the breakpoint on line 3). After resuming the code, the debugger will not stop. ### Actual behavior The debugger stops at [`app/page.tsx:3`]([link]), but after resume it stops at random locations in the same file. ### Provide…

### CASE-5043 · [Windows] Server-side debugger doesn't stop in breakpoints after v15.0.3-canary.7
- **Principles**: P-A1, P-A4, P-G3 · **Env**: windows, next.js
- **Signals**: 👍2 💬19 · closed · labels: bug/Turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open in VSCode 2. Go to `Run and Debug` and execute the `Next.js: debug server-side` 3. Set a breakpoint in `src/app/page.tsx` 4. Visit [link] You'll see that the debugger doesn't stop in the breakpoint in Windows. Now, if you go to `package.json` and remove `--turbopack` from the `dev` script and try the steps above again, you'll see that the debugger is able to stop in the breakpoint correctly. This happens after [email]-canary.7 This has been tested also in 15.2.2 and it still doesn't work. ### Current vs. Expected…

### CASE-5046 · Missing source maps break client-side debugging under VSCode
- **Principles**: P-A1, P-A4, P-G3 · **Env**: next.js
- **Signals**: 👍0 💬19 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application with `npm run dev` 2. In vscode, set a breakpoint at line 6 of `page.tsx` 3. Start a debugging session 4. Refresh page ### Current vs. Expected behavior Current behaviour: - breakpoint goes gray (ignored) - debug console say some source maps file are missing (see attachment) [dbconsole.txt]([link] framework]/files/12870120/dbconsole.txt) Expected: - hit the breakpoint and let you debug the app ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ###…

### CASE-5065 · Cannot debug Next15 using turbopack on windows
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: opera, windows, webpack
- **Signals**: 👍8 💬18 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Install dependencies 2. Select "turbo" in "Run and Debug" menu 3. Select "Browser Debug" in running bar and this error message will appear: ![image]([link]) 4. When select "webpack" in "Run and Debug" menu and look for "Browser Debug" the error doesnt appear and any breakpoint works. ### Current vs. Expected behavior Are expected to debug works like webpack. ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Home Single Language Available memory (MB): 32453…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-5087 · Inline styles in Next 10 don't work with strict Content-Security-Policy
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍18 💬18 · closed
- **Excerpt**: # Bug report ## Describe the bug Recent versions of Next are using inline styles, which break our apps because we block `style-src: unsafe-inline` in our `Content-Security-Policy` header. In fact, the default behaviour of any CSP is to block unsafe inline styles. While the risk may be less than with unsafe inline scripts, there is still a risk: see [this StackOverflow answer]([link]). We have extremely high security requirements at my company so it's not really a matter of easily being able to disable `unsafe-inline`, and I'm aware that the future intention is to move more of the styling…

### CASE-5095 · Next.js 16 entering an incorrect URL will cause a memory overflow and restart
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: next.js
- **Signals**: 👍4 💬17 · closed · labels: Not Found
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in development (next dev) 2. Enter the URL of the app router that does not exist on the browser 3. Next.js Dev Tools displays Compiling until the memory overflows and the system restarts. ### Current vs. Expected behavior 1. Enter the correct URL in the browser and the program will run normally 2. If you enter the wrong URL in the browser, Next.js Dev Tools displays Compiling until the memory overflows and the system restarts. The terminal and browser are stuck during compilation. ### Provide…

