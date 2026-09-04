# Case Chunk 039 — Round 39

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4801 · Inconsistent Error Messaging / Handling in getStaticPaths
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍0 💬51 · open · labels: good first issue
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.0.1: Tue Sep 14 20:56:24 PDT 2021; root:xnu-8019.30.61~4/RELEASE_ARM64_T6000 Binaries: Node: 16.14.2 npm: 8.5.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 12.3.2-canary.22 eslint-config-next: 12.3.1 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Google Chrome (Version 105.0.5195.125 (Official Build) (arm64)) ### How are you deploying your…

### CASE-4802 · Fast refresh not working properly due to page reload when compiling middleware
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, edge, opera, macos, next.js, react
- **Signals**: 👍26 💬50 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome, Safari, Edge ### What operating system are you using? macOS ### How are you deploying your application? next dev ### Describe the Bug Since I don't know the technological background or necessity of the page reload for `middleware`, I'm not sure if that's something that you have to live with when working with `middleware` - but any change, like edits made to react components, often trigger a page reload due to the `middleware` being compiled: > wait -…

### CASE-4804 · Automatic WebFont Optimization does not work
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍21 💬47 · closed · labels: Font (next/font)
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Chrome ### What operating system are you using? macOS BigSur ### How are you deploying your application? Vercel ### Describe the Bug The font style is not inlined even though I added a link to`_document.tsx` in the following format. (I'm sure using the `Head` component exported from `next/document`) ```jsx <Html lang="ja"> <Head> <meta charSet="utf-8" /> <link href="[link] rel="stylesheet" /> </Head> <body> <Main /> <NextScript /> </body> </Html> ``` I forked…

### CASE-4808 · Error: Cannot find module 'react-is' - Production build
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, react, next.js
- **Signals**: 👍14 💬45 · closed · labels: bug/Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome ### What operating system are you using? macOS, M1 ### How are you deploying your application? next start ### Describe the Bug next dev is working as expected. When I run `next build` followed by `next run` and visit the URL, I get the following error in the console and a large part of the application renders blank. <img width="651" alt="image" src="[link]> ### Expected Behavior It probably shouldn't throw this error, unless I'm missing something in my…

### CASE-4811 · [NEXT-1104] NextResponse.rewrite is not forwarding the request body to external hosts in dev
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍21 💬44 · closed · labels: bug/Runtime/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:43 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T8112 Binaries: Node: 19.6.1 npm: 9.4.0 Yarn: N/A pnpm: 7.27.0 Relevant packages: next: 13.2.5-canary.33 eslint-config-next: 13.2.4 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes,…

### CASE-4812 · ERR_ESM_REQUIRE - Webpack 5 config should support ESM packages
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, webpack, next.js
- **Signals**: 👍34 💬44 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? 14.x ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug `p-queue` recently updated to using [ESM modules]([link]), and it looks like some webpack configuration is required to support it. I doubt this is the last time this particular issue will come up. ### Expected Behavior Users should be able to require ESM modules without getting an error. ### To Reproduce Install `[email]`, import it, and try…

### CASE-4813 · locale negotiation is incorrect for i18n routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, windows, next.js
- **Signals**: 👍34 💬44 · open · labels: Internationalization (i18n)
- **Excerpt**: # Bug report ## Describe the bug If I send Accept-Language: "fr-XX,en" and I have available locales fr, en, it should give me fr instead of en (current behavior) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to '...' 2. Click on '....' 3. Scroll down to '....' 4. See error ## Expected behavior Should be routed to fr ## Screenshots If applicable, add screenshots to help explain your problem. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g. chrome, safari] - Version of Next.js: [e.g. 6.0.2] - Version of…

### CASE-4814 · Use relative URLs instead of absolute
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍66 💬44 · closed
- **Excerpt**: There are many tags in the HTML which NextJS generates which contain absolute URLs. For example: ``` href="/_next/blah" ``` I've added selenium + chrome headless testing to my Next project, and it works fine when I test [link] but when I do a `next export`, and then try to to test `file:///home/user/project_dir/out/index.html`, all of those absolute links are broken.I.e, it tries to fetch `file:///_next/blah` instead of: `file:///home/user/project_dir/out/_next/blah`. If I post-edit the generated HTML to make those links relative, then it all works fine. I need to be able to run my tests…

### CASE-4818 · [NEXT-3982] ChunkLoadError: Loading chunk app/layout failed. (timeout: [link])
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera
- **Signals**: 👍32 💬42 · open · labels: bug/Webpack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. clone project 2. npm install 3. npm run dev 4. open the page and you can see chrome console output: Uncaught SyntaxError: Invalid or unexpected token 5. same minutes you can see error:Uncaught ChunkLoadError: Loading chunk app/layout failed. ![image]([link] framework]/assets/150797609/44dd92a7-8502-4889-8cdd-17348caadf23) ### Current vs. Expected behavior 1. First time open the page is error but you refresh page is work! 2. I expected is work all the time ### Provide environment information ```bash Operating System:…

### CASE-4819 · Runtime Edge throws an "Invariant: Method expects to have requestAsyncStorage, none available"
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, opera, windows, next.js, react, typescript
- **Signals**: 👍31 💬42 · closed · labels: please add a complete reproduction/bug/Metadata/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.16.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.8 eslint-config-next: 13.4.8 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Metadata (metadata, generateMetadata, next/head, head.js), Middleware / Edge (API routes,…

### CASE-4820 · Invalid HMR message..Error: No router instance found. ???
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, next.js
- **Signals**: 👍52 💬42 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 17.0.1 ### What browser are you using? Chrome / Safari ### What operating system are you using? macOS ### How are you deploying your application? dev ### Describe the Bug While loading in locally developed npm packages, I get a weird warning in the console: `[Warning] Invalid HMR message: {"action":"sync","hash":"","warnings":[],"errors":[]} Error: No router instance found. You should only use "next/router" on the client side of your app. ` This current app is a test app that has no router instance…

### CASE-4822 · Slow development with Fast Refresh (10+ seconds)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, linux, next.js, typescript
- **Signals**: 👍5 💬41 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 16.0.0 ### What browser are you using? Chrome ### What operating system are you using? Windows, tested it in both WSL 2 (Linux filesystem) and not with Windows directory filesystem ### How are you deploying your application? Have not deployed it yet, but will with Vercel ### Describe the Bug During the last months, even if I use the `future: { weback5: true }` option in the `next.config.js` file, I get very slow development time (~ 45+ seconds). I use TypeScript, and have enabled the `typescript: {…

### CASE-4824 · Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js, react
- **Signals**: 👍2 💬39 · closed · labels: please add a complete reproduction/bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce try building the app with `npm run build` ### Current vs. Expected behavior **Current Behavior:** When I attempt to build my Next.js application for deployment, the build process fails. The error message indicates that dynamic code evaluation (e.g., 'eval', 'new Function', 'WebAssembly.compile') is not allowed in Edge Runtime. The error seems to originate from the `@user/runtime/regenerator` and `next-auth/react` modules. Here's the error message I received: ``` Failed to compile.…

### CASE-4826 · [NEXT-696] New middleware slows down routing in production
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 103, windows, next.js, react
- **Signals**: 👍20 💬39 · open · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.14.2 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.2.0 eslint-config-next: 12.2.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 103.0.5060.66 ### How are you deploying your application? (if relevant) next start ### Describe the Bug New middleware slows down on routing in production (dev is okay), example code that slows…

### CASE-4827 · Misleading "next-head-count is missing" error for invalid head tags
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍11 💬39 · open · labels: good first issue/Linting/Metadata
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 12.20.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** Vercel **Describe the Bug** When using an unsupported/invalid tag in `next/head`, the console shows an unhelpful `next-head-count is missing` error and the content of `next/head` ends up in the `body` tag. Example: ``` <Head> {/* The following line causes an error */} <html lang="en" /> <title>Demo Page</title> </Head> ``` **Expected Behavior** Next.js should warn…

### CASE-4828 · Next.js not fully functional on Safari for iOS 12
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, ios 12, linux, ios, next.js, react
- **Signals**: 👍13 💬38 · closed
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.1.0 Relevant packages: next: 13.3.1-canary.16 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To Reproduce Access [link] or [link] using Safari on iOS…

### CASE-4830 · with-turbopack occasionally throws "Error during SSR rendering - timed out waiting for the Node.js process to connect" when navigating pages
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, firefox 107, windows, linux, next.js, react
- **Signals**: 👍18 💬38 · closed · labels: examples/Turbopack/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Using Windows 10 with WSL2: ``` Operating System: Platform: linux Arch: x64 Version: [ref] SMP Fri Apr 2 22:23:49 UTC 2021 Binaries: Node: 16.17.1 npm: 8.15.0 Yarn: N/A pnpm: 7.14.0 Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which example does this report relate to? with-turbopack ### What browser are you using? (if relevant) Firefox 107.0b4 ### How are you deploying your application? (if relevant) _No…

### CASE-4831 · Links randomly not working and the Routing system is broken. (Let's Fix it)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, safari, firefox, opera, macos, next.js, mobile, desktop
- **Signals**: 👍9 💬38 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? v12.0.0 ### What browser are you using? Chrome, Safari, Firefox (mobile and desktop) ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Randomly, the links don't work; especially when the link I'm trying to open is more than simple text and images (pages with CSS animations and video). What I have done so far to fix the issue: - Separating all CSS files for each page (A single CSS file caused the javascript to stop working) - Adding…

### CASE-4832 · SVGR fails to load SVGs with Next 11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, webpack, next.js
- **Signals**: 👍116 💬38 · closed
- **Excerpt**: # **UPDATE** ## A temporary solution that seems to work and does not disable Webpack 5 If you find any issues with this solution, please tag me @user to update as appropriate. By @user ```javascript webpack (config) { const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg')) fileLoaderRule.exclude = /\.svg$/ config.module.rules.push({ test: /\.svg$/, loader: require.resolve('@user/webpack') }) return config } ``` --- ### What version of Next.js are you using? Next 11.0.0 ### What version of Node.js are you using? 14.x ### What browser are you using? Chrome,…

### CASE-4833 · Jump link anchors dont work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍12 💬38 · closed · labels: good first issue/Linking and Navigating
- **Excerpt**: # Bug report ## Describe the bug When clicking an anchor tag in a different page with a jump to id tag, it raises an error and doesnt go. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: ` <a className='nav-link' href='[link] > Docs </a> ` ## Expected behavior should redirect to github and scroll to documentation tag ## Screenshots <img width="452" alt="Screenshot 2020-03-16 at 15 13 05" src="[link]> ## System information - Browser (if applies): Chrome - Nextjs version: 9.1.6 ## Additional context I've tried this in another project without nextjs…

### CASE-4836 · Next.js 12.0.2 + Framer 5.0.1 leading to errors in production
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 95, opera, macos, next.js
- **Signals**: 👍16 💬37 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome 95 ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Seeing a `500` application error when deploying app to `Vercel` with the following dependencies: - `next: 12.0.2` - `framer: 5.0.1` App deploys fine with `next: 12.0.1` `Vercel` error logs below: ``` 2021-11-01T16:43:25.167Z 76a0eb5e-e736-404e-b454-15468c5f94c2 ERROR…

### CASE-4837 · Memory leak in Image Optimization
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome, opera, next.js
- **Signals**: 👍33 💬37 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.0.9 ### What version of Node.js are you using? 14.15.5 ### What browser are you using? Chrome ### What operating system are you using? alpine (docker image) ### How are you deploying your application? express server ### Describe the Bug Upgrading from 10.0.7 to 10.0.8 or 10.0.9 results in a server side memory leak when using the <Image /> component. Consumes over 1GB of memory after only 10-20 image optimizations. ### Expected Behavior Memory usage should be normal. ### To Reproduce Import Image from 'next/image' and use it as the the…

### CASE-4838 · Custom loaders are not recognized by next export
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍30 💬37 · closed · labels: good first issue
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** v15.5.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** next export **Describe the Bug** I'm using next/image with a custom loader. The reason for the custom loader is that I've optimised all images on build-time. When I run `next export` I will get this message: > Error: Image Optimization using Next.js' default loader is not compatible with `next export`. > Possible solutions: > - Use `next start`, which starts the…

### CASE-4841 · False positive for `no-document-import-in-page`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍31 💬36 · closed
- **Excerpt**: ### What version of Next.js are you using? 11.1.0 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next start ### Describe the Bug The `@user/next/no-document-import-in-page` ESLint rule displays an error in a custom `_document` if it is located at `pages/_document/index.js`, `pages/_document/index.jsx`, `pages/_document/index.ts`, or `pages/_document/index.tsx`. ### Expected Behavior I expect there to be no ESLint error from the…

### CASE-4845 · Duplication of CSS rules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106, linux, ubuntu, next.js, react
- **Signals**: 👍21 💬35 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Thu Oct 13 08:03:55 UTC 2022 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.13.0 Relevant packages: next: 14.2.0-canary.21 eslint-config-next: 14.1.3 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 106.0.5249.119 ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug Page has different styling depending on HOW…

### CASE-4846 · Next.js 13 - appDir - Error: Unsupported Server Component type: undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106, firefox, windows, next.js, react
- **Signals**: 👍12 💬35 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro for Workstations Binaries: Node: 18.12.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 106.0.5249.119 / Firefox Developer Edition 107.0b5 ### How are you deploying your application? (if relevant) next start, Vercel ([link]) ### Describe the Bug #### This issue only…

### CASE-4847 · `next dev` fails with webpack error when importing functions inside web worker
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, webpack, next.js
- **Signals**: 👍8 💬35 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 10.2.3 ### What version of Node.js are you using? 16.2.0 ### What browser are you using? Firefox ### What operating system are you using? macOS ### How are you deploying your application? next dev ### Describe the Bug Using a web worker, similar to the [with-web-worker]([link] framework]/tree/canary/examples/with-web-worker) example. The web worker file (located under `worker/search.js`) imports functions from another local file like this: ```js import { getIndexRange, getTextItemWithNeighbors } from '../lib/search'; ``` Which then results in the…

### CASE-4848 · With webpack 5 and once deployed, local files are not readable from APIs anymore
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, safari, opera, macos, webpack, next.js
- **Signals**: 👍28 💬35 · closed · labels: Output
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 14.0.0 ### What browser are you using? Chrome,Firefox,Safari ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Since updating to 10.2.0, local files are not accessible from apis anymore once deployed on Vercel. I do not know if it was on purpose, but it used to work fine before upgrading. In both case, an internal server error is returned. After closer inspection of the logs, the error message is as follows: ``` [Error: ENOENT: no…

### CASE-4849 · URL resolution case sensitivity is inconsistent
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍58 💬35 · closed · labels: bug/locked/stale
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14.15.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **How are you deploying your application?** Local **Describe the Bug** *File system routes* [link] -> renders pages/about.js [link] -> 404 not found Result: case sensitive. *Redirects* Using this example: [link] framework]/tree/canary/examples/redirects [link] -> redirects to /about -> renders pages/about.js [link] -> redirects to /about -> renders pages/about.js Result: case insensitive. *Rewrite* Using…

### CASE-4850 · performance.measure() is crashing my route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍21 💬35 · closed · labels: locked
- **Excerpt**: **What version of Next.js are you using?** 10.0.4 **What version of Node.js are you using?** v14.4.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** Vercel **Describe the Bug** I'm building a google oauth flow. I get the oauth menu account list opened, and click on my google account. It redirects back - unsuccessfully, to my app page. I get these errors DOMException: Failed to execute 'measure' on 'Performance': The mark 'beforeRender' does not exist. Uncaught (in promise) Error: Cancel rendering route…

### CASE-4854 · duplicate meta tags in head
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, safari, next.js, react
- **Signals**: 👍26 💬34 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:45:05 PDT 2022; root:xnu-8020.101.4~15/RELEASE_X86_64 Binaries: Node: 14.20.0 npm: 6.14.17 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.2.2 eslint-config-next: 12.0.10 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) chrome, safari ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug…

### CASE-4857 · Babel polyfill doesn't seem to be injected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react
- **Signals**: 👍6 💬34 · closed
- **Excerpt**: I'm trying to support IE11 for my app to fix the error `TypeError: Object doesn't support property or method 'find'` Using next `2.4.6` but also not working on latest beta Added a custom .babelerc together with `babel-preset-env` with the following config: ```json { "presets": [ "es2015", "react", "next/babel", "stage-0", [ "env", { "targets": { "safari": 10, "ie": 11 }, "modules": false, "useBuiltIns": true, "debug": true }] ], } ``` Enabled the debug flag so on startup I get the following log, which seems to mean that the polyfill are added. ``` babel-preset-env: `DEBUG` option Using…

### CASE-4858 · On-Demand Revalidation does not revalidate when using the App Router and deployed to Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍16 💬33 · closed · labels: bug/please verify canary/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 18.15.0 npm: 9.5.0 Yarn: 1.22.19 pnpm: 8.5.1 Relevant packages: next: 13.4.5-canary.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge…

### CASE-4860 · [NEXT-315] NextJs13 - App Dir - Uncaught Error: NEXT_REDIRECT
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows, next.js, react
- **Signals**: 👍17 💬33 · closed · labels: linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Single Language Binaries: Node: 18.5.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.3-canary.0 eslint-config-next: 13.0.2 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Microsoft Edge Version 109.0.1482.0 (Official build) canary (64-bit) ### How are you deploying your application? (if relevant) yarn dev ### Describe the Bug In…

### CASE-4864 · Open graph image. SVG data parsing failed cause unknown token at 1:1
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍17 💬32 · closed · labels: bug/Image (next/image)/Lazy Loading/Runtime
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Self-hosted NGINX server 2. Cloudflare CDN 3. Build app 4. Upload to self host 3. Open Dynamic `opengraph-image.tsx` ```ts /* eslint-disable @user/next/no-img-element */ import supabase from "@/supabase/supabase"; import { ImageResponse } from "next/og"; export const runtime = "edge"; export const dynamic = "force-dynamic"; // Sure, should work without this!!! Temp solution const LOGO = '[link] // Image metadata export const alt = "Alt text"; export const size = { width: 1200, height: 630, }; export const contentType =…

### CASE-4867 · Edge runtime - JavaScript heap out of memory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react, typescript
- **Signals**: 👍23 💬32 · closed · labels: bug/Runtime/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:37 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6000 Binaries: Node: 16.18.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.26.1 Relevant packages: next: 13.4.6-canary.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ###…

### CASE-4868 · srcSet ignores sizes provided
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍24 💬32 · open · labels: Image (next/image)
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Chrome Version 92.0.4515.107 (Official Build) (x86_64) ### What operating system are you using? macOS 11.5 ### How are you deploying your application? Vercel ### Describe the Bug When I supply valid `sizes`, Nextjs ignores the intersection between these sizes and the `deviceSizes` & `imageSizes` contained in the `next.config.js` file. As a result, a file that will only ever appear on-screen at 280px (or 560px @ 2.0 pixel density, or 840px @ 3.0 pixel density)…

### CASE-4869 · Uncaught ReferenceError: dll is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍10 💬32 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report The error `Uncaught ReferenceError: dll_xxxxxx is not defined` it happens a soon as you create a empty project and open it. Please take a look the [following demo project]([link]). It does only happening in Chrome! in FF it's works fine. ``` MacOs Sierra: 10.13.6 Chrome Version: 70.0.3538.102 Node: v10.10.0 NPM: v6.4.1 ``` - Package dependencies: ``` "@user/next-sass": "^1.0.2-canary.0", "babel-polyfill": "^6.26.0", "classnames": "^2.2.6", "cross-fetch": "^2.2.2", "express": "^4.16.4", "fs": "0.0.1-security", "immutable": "^3.8.2", "lodash": "^4.17.10", "next":…

### CASE-4874 · "ENOENT: no such file or directory" - next.js crashes, related to image caching?
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, linux, next.js, react
- **Signals**: 👍31 💬31 · closed · labels: Image (next/image)
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) ``` root@user:/app# npx --no-install next info /bin/sh: 1: pnpm: not found Operating System: Platform: linux Arch: x64 Version: [ref] SMP Debian 4.19.171-2 (2021-01-30) Binaries: Node: 17.4.0 npm: 8.3.1 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.0.10 react: 17.0.2 react-dom: 17.0.2 ``` ### What version of Next.js are you using? 12.0.10 ### What version of Node.js are you using? 17.4.0 ### What browser are you using? Chrome ### What operating system are you using? Debian ### How are you deploying your application? next build…

### CASE-4875 · Node.js v17.0.0 - Error starting project in development mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 94, opera, windows, next.js, webpack
- **Signals**: 👍13 💬31 · closed · labels: Webpack
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 17.0.0 ### What browser are you using? Chrome 94.0.4606.81 ### What operating system are you using? Windows 10 ### How are you deploying your application? / ### Describe the Bug After updating Node.js to the new version, when starting the project in development mode, the following error is obtained in the terminal. ```sh > [email] dev > next dev ready - started server on 0.0.0.0:3000, url: [link] info - Using webpack 5. Reason: Enabled by default [link] Error: error:0308010C:digital envelope…

### CASE-4876 · [NextJS11] Styled Components and Material Ui Styles stopped displaying after upgrade to NextJS 11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, opera, windows, next.js
- **Signals**: 👍7 💬31 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.0 ### What version of Node.js are you using? 14.0.0 ### What browser are you using? Chrome, Edge ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug Just updated to NextJS 11 and the styles stopped working all of a sudden. They render for a second and immediately disappear, like a short flash of the right styles and gone. Making a change in the editor temporarily returns the styles but on a fresh reload they never appear. It looks like this:…

### CASE-4879 · NextJS 14 forced to use swc and cannot switch to babel anymore.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, android, next.js
- **Signals**: 👍3 💬30 · closed · labels: create-next-app/bug/SWC/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `create-next-app` in termux. 2. run dev. 3. create `.babelrc`/`babel.config.js` and use presets "next/babel". ### Current vs. Expected behavior [SWC]([link]) does support Android arm64, but somehow swc in nextjs cannot support it, i always switch to babel for workaround, but now i cant switch to use babel. ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: android Arch: arm64 Version: [ref] SMP…

### CASE-4880 · error TypeError: Cannot read properties of undefined (reading '') when using Next.js runtime edge on turborepo or Nx
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react, typescript
- **Signals**: 👍26 💬30 · open · labels: Runtime/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.16.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.13-canary.13 eslint-config-next: 13.4.1 react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router, Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue or a replay…

### CASE-4884 · using revalidatePath but getting error for revalidateTag just in vercel not in local
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, ubuntu, next.js, react, typescript
- **Signals**: 👍0 💬30 · closed · labels: please add a complete reproduction/bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Tue Apr 18 08:53:12 UTC 2023 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: 8.5.1 Relevant packages: next: 13.4.3-canary.1 eslint-config-next: 13.3.2 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [link] ### To…

### CASE-4886 · Next.js application showcases intermittent slow responses, in Google Cloud Run instance running, from 30 seconds up to more than 1 minute
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍0 💬30 · closed · labels: Runtime/Pages Router/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:37 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6000 Binaries: Node: 16.18.1 npm: 8.19.2 Yarn: N/A pnpm: N/A Relevant packages: next: 12.3.0 eslint-config-next: 12.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Data fetching (gS(S)P, getInitialProps), Middleware / Edge (API routes,…

### CASE-4889 · CSS modules duplicated when used with `next/dynamic`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍47 💬30 · open · labels: Lazy Loading/CSS
- **Excerpt**: ### What version of Next.js are you using? 10.2.2 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug When using `next/dynamic` with CSS modules, we've found that CSS can be re-inserted (duplicated) In our scenario, we have a simple `<Text />` component that is already in use throughout the application. When we used `<Text />` in a new component that was dynamically imported, styles for `<Text />` were re-inserted. These styles were…

### CASE-4890 · npm run build hangs forever
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, windows, next.js
- **Signals**: 👍14 💬30 · closed
- **Excerpt**: # Bug report ## Describe the bug npm run build with invokes 'next build' is hanging forever. ## To Reproduce Cannot specify steps to reproduce because it suddenly not ## Expected behavior It should build normally so that I can run npm start. ## Screenshots If applicable, add screenshots to help explain your problem. ![image]([link]) ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g. chrome, safari] - Version of Next.js: [e.g. 6.0.2] ## Additional context Add any other context about the problem here.

### CASE-4892 · ^11.1.2 - Using cdn for assets results in CORS error only for some css files not all
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍9 💬29 · closed · labels: bug/locked/stale
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) "next": "^11.1.2", ### What version of Next.js are you using? "next": "^11.1.2", ### What version of Node.js are you using? 15.0.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start in aws ### Describe the Bug I am deploying my nextjs application in a single ec2 instance in aws. I deploy the next assets _next/static in a s3 bucket, and they are served via cloudfront in next.config.js i put correctly assetPrefix to my cdn: NOTE: I replaced client…

### CASE-4893 · next/script using beforeInteractive strategy don't work with alert
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍4 💬29 · closed · labels: Script (next/script)
- **Excerpt**: ### What version of Next.js are you using? 11.0.0 ### What version of Node.js are you using? 14.17.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug When I try to add next/script into "_document" or "_app" files calling a inline alert function, don't work using beforeInteractive strategy, but when I don't explicitly inform a strategy value, it works. ![image]([link]) ### Expected Behavior Should work with beforeInteractive strategy inside _document.js or _app.js. ### To Reproduce…

### CASE-4894 · Some examples don't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js, webpack
- **Signals**: 👍1 💬29 · closed · labels: examples/bug
- **Excerpt**: ### What example does this report relate to? See list below ### What version of Next.js are you using? latest ### What version of Node.js are you using? 14.x ### What browser are you using? Chrome ### What operating system are you using? MacOS ### How are you deploying your application? / ### Describe the Bug While testing all examples for [this]([link] framework][ref]) PR, I ran into a few examples that didn't work. Here's a list: - [ ] with-webpack-bundle-size-analyzer - see [ref] - [x] with-webassembly (fixed in [ref]) - see [ref] - [x] with-i18n-next-intl (fixed in [ref]) -…

### CASE-4895 · 10.0.8: Env variables redefined within next.config.js are undefined in dev mode
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, safari, opera, macos, next.js
- **Signals**: 👍18 💬29 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.15.1 ### What browser are you using? Tested in Firefox and Safari ### What operating system are you using? macOS Big Sur 11.2.1 ### How are you deploying your application? yarn dev, yarn build && yarn start ### Describe the Bug Environment variables defined in `next.config.js` return undefined in page components when on dev mode (yarn dev). But running the same project on production (yarn build && yarn start) the env variables work as expected. ### Expected Behavior If env variables are set in an…

### CASE-4899 · Memory leak when refreshing during rebuild
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: firefox 52, next.js
- **Signals**: 👍4 💬30 · closed · labels: please add a complete reproduction
- **Excerpt**: Sometimes when I modify a file, and next.js is rebuilding, and then quickly move to the browser and refresh the page, the browser's memory quickly goes up until the computer freezes. Browser: Firefox 52.0 Next version: [email]-beta.38

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4803 · Hot Reloading not working in Next.js 9 using custom routing, styled components and withApollo example
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍18 💬50 · closed · labels: good first issue/locked/stale
- **Excerpt**: # Bug report We are running `"dev": "cross-env NODE_ENV=development babel-node src/server.js",` to start nextjs in dev mode from our server.js file We see the compiled successfully message when making changes to the pages/components folder ![image]([link]) but we do not see any changes or renders on the page until we refresh the page ``` import express from "express"; import "isomorphic-fetch"; import next from "next"; import projectConfig from "./config"; import { initializeApollo } from "./lib/nextApollo"; import gql from "graphql-tag"; const compression = require("compression"); const…

### CASE-4807 · Image component does not work with Storybook
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍51 💬46 · closed
- **Excerpt**: # Bug report ## Describe the bug using `next/image` component in storybook throw Error. ## To Reproduce 1. Set up with-storybook example `yarn create next-app --example with-storybook with-storybook-app` 2. Create new story using `next/image` ```image.stories.js import Image from 'next/image' import React from 'react' export default { title: 'Image' } // image url const url = '[link] export const withNextImage = () => ( <Image src={url} width={100} height={100} /> ) ``` 3. Start storybook ## Expected behavior show Image without Error as plane image tag do. ## Screenshots ![image]([link]) ##…

### CASE-4815 · react-pagination (and possibly other libs) render incorrectly on PROD only
- **Principles**: P-A3, P-H1 · **Env**: react, next.js
- **Signals**: 👍19 💬43 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. setup ``` yarn install yarn build yarn start ``` 2. open page ### Current vs. Expected behavior Current (13.5.4): ![image]([link] framework]/assets/9255607/47b57252-f269-403f-825b-61957047c7c4) browser console: ``` (react-paginate): The pageCount prop value provided is not an integer (undefined). Did you forget a Math.ceil()? ``` Expected (13.5.1): ![image]([link] framework]/assets/9255607/62a5d32a-5e82-45f1-b6f1-5e48222bb88f) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary…

### CASE-4816 · Error: Cannot find module 'next/dist/compiled/jest-worker' - On Docker
- **Principles**: P-A3, P-H1 · **Env**: next.js, webpack
- **Signals**: 👍48 💬43 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Error: Cannot find module 'next/dist/compiled/jest-worker' Require stack: - /app/node_modules/next/dist/server/lib/squoosh/main.js - /app/node_modules/next/dist/server/image-optimizer.js - /app/node_modules/next/dist/server/next-server.js - /app/server.js at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1026:15) at Function.mod._resolveFilename (/app/node_modules/next/dist/build/webpack/require-hook.js:23:32) at…

### CASE-4817 · Next.js 13 next/image `blurDataURL` not working without base64 Data URL
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react
- **Signals**: 👍34 💬43 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Single Language Binaries: Node: 16.13.2 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) vercel ### Describe the Bug next/image blur placeholder not working in both development and production. Demo:…

### CASE-4821 · _next/image 404 on next build && next export
- **Principles**: P-A3, P-H1 · **Env**: macos, next.js
- **Signals**: 👍80 💬42 · closed
- **Excerpt**: # Bug report ## Describe the bug Images are 404 on next build && next export. Works properly next build && next start ## To Reproduce 1. npx create-next-app --example image-component image-app 2. cd image-app 3. npx next build && npx next export && cd out && npx serve 4. visit localhost:5000 ## Screenshots ![image]([link]) ## System information - OS: macOS Mojave - Version of Next.js: [e.g. 10.0.0] - Version of Node.js: [e.g. 12.18.4]

### CASE-4829 · Another Memory Leak in `next/image`
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: opera, next.js, react
- **Signals**: 👍27 💬38 · open · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.2.0: Fri Nov 11 02:03:51 PST 2022; root:xnu-8792.61.2~4/RELEASE_ARM64_T6000 Binaries: Node: 19.0.1 npm: 9.2.0 Yarn: 1.22.19 pnpm: 7.21.0 Relevant packages: next: 13.1.1 eslint-config-next: 13.1.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that…

### CASE-4839 · Form inputs reset after submission in Next.js 15 when using server actions
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍3 💬36 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the app by running npm run dev 2. Open the app in the browser at [link] 3. Fill in the form and click the submit button 4. Result: the form is emptied after the submit. All input is lost. ### Current vs. Expected behavior I expect the form to contain the original data, since I am not resetting the form or redirecting. This is important in case of form validation errors (which I didn't include to keep the code simple). Before submit: <img width="239" alt="image" src="[link]> Server console output: ``` submitForm…

### CASE-4840 · React does not recognize the `fetchPriority` prop on a DOM element.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍48 💬36 · closed · labels: bug/Image (next/image)/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce npm install jest ### Current vs. Expected behavior ``` jest console.error Warning: React does not recognize the `fetchPriority` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fetchpriority` instead. If you accidentally passed it from a parent component, remove it from the DOM element. at img at /Users/USER/source_code/fetch-priority-reproducer/node_modules/next/src/client/image-component.tsx:212:5 at…

### CASE-4852 · Using Undici as node fetch polyfill causes fetch failed
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍19 💬34 · closed · labels: bug/Pages Router
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Data fetching (gS(S)P, getInitialProps) ### Link to the code that reproduces this issue [link] framework]/blob/e601a3b53292278e1b7d1ef1f692ed340ef8be10/packages/next/src/server/node-polyfill-fetch.ts#L6 ### To Reproduce Ensure project is using serverless functions that are from the frankfurt network (so far I know this one causes the problem, but maybe others do as well) <img…

### CASE-4856 · Generated static files html files have wrong assets paths
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍10 💬34 · closed
- **Excerpt**: # Bug report ## Describe the bug I'm tried to generate a static site with Next js `v9.0.2` and got assets linking by default to `/_next/static/something/something.js`. But by default build and export create a folder `.next`. I think its related to: [link] ## To Reproduce 1. Create a static page 2. Build it 3. Open the html page generated 4. See the source of every script inside the html page ## Expected behavior Generated path should begin with `./next/` ## Screenshots <img width="739" alt="Screen Shot 2019-07-29 at 12 25 54" src="[link]> ## System information - OS: macOS - Version of…

### CASE-4861 · Image Component doesn't forwardsRef
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍54 💬33 · closed
- **Excerpt**: # Bug report ## Describe the bug Refs aren't properly supported in Image. ``` import React, { useState, useCallback } from 'react' import Image from 'next/image' const NextImage = ({ src }) => { const [width, setWidth] = useState(0) const [height, setHeight] = useState(0) const ref = useCallback((node) => { console.log(node) }, []) return <Image ref={ref} src={src} width={width} height={height} /> } ``` This code shows that Image does not forwardRef to img DOM element. ## To Reproduce 1. Add Image component to your page 2. Add ref via `useCallback` hook 3. Try to do something within callback…

### CASE-4862 · CORS error fetching external CSS on 9.5.3
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍16 💬33 · closed
- **Excerpt**: # Bug report ## Describe the bug After upgrading to `[email]`, the initial load of our page throws when requesting CSS from our CDN. ## To Reproduce 1. Create an app with a stylesheet, css or scss. 2. Import that stylesheet into a component as a module. 3. Build and upload your assets to a CDN using `assetPrefix` in `next.config.js`. Deploy your app and run in production mode. 4. Notice that your initial page load throws with a CORS error. ## Expected behavior Preloading css should work cross domain or it should fail gracefully. ## Screenshots Developer Tools: ![image]([link]) Elements View:…

### CASE-4871 · [NextJS 14.1.0] TypeError: Cannot read properties of undefined (reading 'call')
- **Principles**: P-A3, P-H1 · **Env**: opera, windows
- **Signals**: 👍10 💬31 · open · labels: bug/Linking and Navigating/Lazy Loading/Runtime/Pages Router
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce - Clone the provided repository - Run `yarn install && yarn dev` - Browse to [[link]]([link]) ### Current vs. Expected behavior After doing all the reproduction steps, you will see the **error**. As you can see, I have already applied the suggested fix for `[email]-canary.51` ![image]([link] framework]/assets/1437205/43964f5f-19cc-4ed0-8f2c-f9601845490a) ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Pro Binaries: Node: 20.11.0 npm: N/A Yarn: N/A pnpm: N/A…

### CASE-4873 · [NEXT-1089] Custom fonts in `ImageResponse` not working in App Dir
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍15 💬31 · closed · labels: Metadata/Pages Router/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:30 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T8103 Binaries: Node: 18.12.0 npm: 8.19.2 Yarn: 1.22.18 pnpm: 7.25.1 Relevant packages: next: 13.3.1-canary.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Data fetching (gS(S)P,…

### CASE-4877 · [Regression] Image optimizer fails to serve images on routes requiring autorization
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬30 · closed · labels: Image (next/image)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Enable `corepack` if not already enabled 2. Install packages `yarn install` 3. Build using `yarn build` 4. Build docker image `docker build . -t my-tag` 5. Run docker image `docker run -p 3000:3000 my-tag` 5. Open [link] 6. Log in with _any_ credentials (resolver doesn't check them) a. Notice console output from the server: `The requested resource isn't a valid image for /us.png received null` If `docker` isn't available you can replace steps 4-5 with 1. Copy public folder and static resource to standalone server `cp…

### CASE-4887 · Image not working on production
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, next.js, react
- **Signals**: 👍43 💬30 · closed · labels: bug/Image (next/image)/Testing/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Fri Jan 27 02:56:13 UTC 2023 Binaries: Node: 16.15.0 npm: 8.18.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.3.1-canary.0 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image), Jest (next/jest) ### Link to the code that reproduces this issue [link] ### To…

### CASE-4888 · next/image not properly sizing images
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react
- **Signals**: 👍48 💬30 · closed · labels: Image (next/image)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Thu Sep 29 20:12:57 PDT 2022; root:xnu-8020.240.7~1/RELEASE_X86_64 Binaries: Node: 18.12.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.0.8-canary.2 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that…

### CASE-4898 · Polyfills necessary/Browser support?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬29 · closed
- **Excerpt**: In testing in IE11, errors throw because there is no support in that browser for Array.prototype.find, Array.prototype.includes, or Object.assign. I was adding polyfills one-by-one as the error messages popped up, so it could go beyond these three. I just gave up at that point. Alternatively, I haven't seen any browser support list, so I don't know for a fact that this is a bug, but I'm assuming you want to support at least IE11. ![image]([link]) ![image]([link]) ![image]([link])

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4805 · Image component `sizes` property does not work
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍16 💬47 · closed
- **Excerpt**: # Bug report ## Describe the bug When using the Image component, the `sizes` property doesn't work as described in the docs. When using the Image component, the image is resized to match the container width which is size of the `width` attributes that we passed, or fit 100% of the viewport if the image is larger than the screen, ignoring the `sizes` attribute completely. Example of code: ```js <Image width="800px" height="456.8px" sizes="(max-width: 500px) 100px" src="/next.png" alt="Next.js" /> ``` ## To Reproduce I created a codesandbox example with the exact problem: 1. Go to [link] 2.…

### CASE-4842 · Duplicate meta tags when using Head both in custom document and page
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍5 💬36 · closed
- **Excerpt**: # Bug report **Edit +++ ON HOLD** I just had a lightbulb moment. I will post my discovery/misunderstanding in the next few hours. This ticket can probably be closed then, but I have to test my new theory first… ## Describe the bug Multiple (duplicate) meta tags such as `charSet` and `viewport` are rendered in `<head>` section of the HTML output when the `<Head>` component is used in both a custom `_document` and a page file. Even relying on the default injection of `<meta charSet="utf-8"/>` (i.e. not specifying that tag at all) results in having two of the same tags in the output HTML, one…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-4806 · Pages render without styles for a brief second
- **Principles**: P-B1, P-B2, P-B3 · **Env**: ubuntu
- **Signals**: 👍8 💬47 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug Pages render without any styles for a brief second before the CSS is loaded: ![Jul-29-2020 20-54-52]([link]) This only happens in production. In development everything is fine and pages render perfectly styled immediately. ## To Reproduce I try to load some global styles in `_app.tsx` like: ```tsx // _app.tsx import '../assets/styles/global.scss'; const MyApp = () => { ... } export default MyApp; ``` ```SCSS // global.scss @user system-font() { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",…

### CASE-4851 · Could not use relative URLs with "next/font"
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, windows, next.js, react, typescript
- **Signals**: 👍34 💬34 · open · labels: bug/Font (next/font)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Enterprise Binaries: Node: 20.3.1 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.8-canary.13 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: export ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (next/font) ### Link to the code that reproduces this issue or a replay of the bug npx…

### CASE-4872 · [NEXT-1103] Cannot read properties of null (reading 'useState') with Context Wrapper
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍5 💬31 · closed · labels: please add a complete reproduction/Pages Router/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 21:00:41 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T8103 Binaries: Node: 19.1.0 npm: 8.19.3 Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.1-canary.11 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Data fetching (gS(S)P, getInitialProps)…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-4809 · Build warnings with MUI - barrel_optimize
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, linux, next.js
- **Signals**: 👍115 💬44 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the Repo 2. Run `npm i && npm run build` -- Also you can create the warning from MUI template. 1. Download MUI template with Nextjs-pages: [link] 2. Add this line to `index.tsx` ```const theme = useTheme();``` 3. Run `npm run build` ### Current vs. Expected behavior Build should be completed without warnings. ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4810 · [NEXT-1152] TypeError: Cannot read properties of null (reading 'useContext') [Next js 13.4.1 throwing this error while using framer motion]
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, next.js, react
- **Signals**: 👍21 💬44 · closed · labels: please add a complete reproduction/bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 20.6.0: Wed Jan 12 22:22:42 PST 2022; root:xnu-7195.141.19~2/RELEASE_X86_64 Binaries: Node: 20.1.0 npm: 9.6.6 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 13.4.1 eslint-config-next: 13.4.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue none ### To…

### CASE-4825 · Next.js 13: SWC Emotion Transform Plugin Breaks with root layout Server Component in `app/`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍63 💬39 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Thu Oct 27 2022 20:19:36 GMT+0200 (Central European Summer Time) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.0.1-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4823 · Standalone output + outputFileTracingExcludes: RangeError: Maximum call stack size exceeded
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍7 💬40 · closed · labels: bug/Output/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce I have a couple medium-sized Next projects, one pages and one app router. My output bundle contains many dev dependencies like webpack and sass and esbuild. I tried adding patterns to remove them using: ```ts outputFileTracingExcludes: { "*": [ "node_modules/@user*", "node_modules/sass*", ] } ``` and many variants thereof. This works okay but if I do ```ts outputFileTracingExcludes: { "*": [ "node_modules/@user*", "node_modules/sass*", "node_modules/webpack*", ] } ``` Then I get this error: ``` > [email] build…

### CASE-4834 · Accessing environment variables in browser
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍5 💬38 · closed
- **Excerpt**: I'm aware that secrets shouldn't be leaked in the browser ([link]), but it would be good to have access to some environment variables, e.g a remote graphql endpoint URL in my case. How can environment variables be accessed? A naive `process.env.MY_VAR` doesn't work.

### CASE-4844 · On Vercel: On demand revalidation doesn't work for pages that are pre-rendered during build time
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍16 💬35 · closed · labels: locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] [link] ### To Reproduce **Deploy the project to Vercel and set this environment variables**: Env | Description | Example | --- | --- | --- | NEXT_PUBLIC_SITE_URL | Necessary for internal api fetch | [link] | CACHE_METHOD | Determines the cache method | `fetch` or `fetch_isr` or `fetch_no_force` or `unstable_cache` or `unstable_cache_isr` | RENDER_LOG | Display custom logs in dashboard or console | `true` or `false` | Special logs that are generated by RENDER_LOG are formatted like this: "### --- HH:mm:ss --- Log Text" and can be found in…

### CASE-4853 · [NEXT-644] cookies broke on 13.2.1 Invariant: Method expects to have requestAsyncStorage, none available
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍26 💬34 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Fri Feb 24 2023 12:23:18 GMT+0200 (Eastern European Standard Time) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.2.1 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue…

### CASE-4866 · Public files not accessible on i18n domains
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍11 💬32 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.6.0: Wed Jul 5 22:22:05 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T6000 Binaries: Node: 20.2.0 npm: 9.6.4 Yarn: 1.22.19 pnpm: 8.7.0 Relevant Packages: next: 13.4.20-canary.12 eslint-config-next: 13.4.19 react: 18.2.0 react-dom: 18.2.0 typescript: 5.2.2 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure)…

### CASE-4881 · Custom process.env variables not available in docker standalone output
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍42 💬30 · closed · labels: bug/Output/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:21:34 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T8112 Binaries: Node: 18.16.0 npm: 9.6.7 Yarn: 1.22.19 pnpm: 8.6.2 Relevant Packages: next: 13.4.13-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A Next.js Config: output: standalone ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router,…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4835 · Route handler always returns `X-Vercel-Cache: STALE`
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍3 💬37 · closed · labels: bug/Pages Router/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] Route handler example: [link] ### To Reproduce 1. Start the application in production mode 2. Visit [link] 3. Inspect the response headers and verify that first visit has `x-nextjs-cache: MISS` 4. Visit [link] 5. Inspect the response headers and verify that first visit has `x-nextjs-cache: HIT` 6. Deploy to Vercel 7. Visit [link] 8. Inspect the response headers and verify that it has always `X-Vercel-Cache: STALE` ### Current vs. Expected behavior Currently always `X-Vercel-Cache: STALE` is returned. Expected is `X-Vercel-Cache: MISS` on…

### CASE-4896 · Nextjs custom server typescript memory leak...
- **Principles**: P-F5, P-H3 · **Env**: typescript, webpack
- **Signals**: 👍0 💬29 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug memory leak. On my server i have rest api that handles requests coming from getInitialProps. The server sometimes uses apollo-fetch to get data from other api. emotion js is used for styling. That's mainly what the app does. I am running another service with nodejs and have no issues at all. I followed the examples but couldn't fix the memory leak. While inspecting the memory leak, I could only see webpack strings growing. ## To Reproduce Create custom server with typescript. Use apollo fetch Use emotion Use mongoose Use lru-cache ... ## Expected behavior…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4843 · 404 page isn't server rendered when using notFound()
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍28 💬35 · open · labels: bug/Linking and Navigating
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a new project using `npx create-next-app@user` 2. Create a page that uses the `notFound()` function. 3. Go to that page and see the response in dev tools - Here the Body is only scripts (Client rendered) 4. Go to a different page that doesn't exist and see the response in dev tools - Here the body will be rendered (Server rendered) Example for the `page.tsx`: ```tsx import { notFound } from "next/navigation"; export default function Page() { notFound(); } ``` ### Current vs. Expected behavior ## Expected I…

### CASE-4855 · Development server has a flash of unstyled content (FOUC)
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍22 💬34 · closed
- **Excerpt**: # Bug report ## Describe the bug A clear and concise description of what the bug is. When using Next.js, it appears that the CSS isn't fully hydrated into the `<head>` when the `<div id="__next">` element first becomes visible. This causes a flash of unstyled content (or FOUC) when running our development server. It seems like it's fine in production though (which seems strange to me). ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Clone [this repository]([link]) by running: ``` $ git clone [link] ``` 2. Install our dependencies (more details…

### CASE-4859 · [NEXT-855] [AppDir] Interacting with Client Component before page fully load cause Hydration failed error.
- **Principles**: P-F4 · **Env**: opera, linux, next.js, react
- **Signals**: 👍11 💬33 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref] SMP Wed Nov 23 01:01:46 UTC 2022 Binaries: Node: 16.13.0 npm: 8.1.0 Yarn: N/A pnpm: 7.25.1 Relevant packages: next: 13.1.3-canary.5 eslint-config-next: 13.1.3-canary.5 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue NA ### To Reproduce Create a new app: `pnpm dlx…

### CASE-4863 · Nested dynamic components produce a react warning
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍13 💬33 · closed
- **Excerpt**: # Bug report ## Describe the bug I have a dynamic component loading another dynamic component. Both chunks get correctly loaded by `react-lodable` _before_ `main.js` is loaded (so chunk reporting is working as expected). However, the inner component generates a warning: ``` Warning: Expected server HTML to contain a matching <p> in <div>. ``` The content doesn't flash (I assume because the component has already been requested, so the "loading" state only lasts a few milliseconds), but the warning still indicates that something went wrong. ## To Reproduce I updated my proof of concept: [link]…

### CASE-4865 · Custom server renderToHTML does not work with next 13.4
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍31 💬32 · closed · labels: locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] [link] ### To Reproduce 1. Start a new nextjs project with `npx create-next-app@user` 2. Add a server.js ``` const { createServer } = require('http'); const { parse } = require('url'); const next = require('next'); const dev = process.env.NODE_ENV !== "production"; const hostname = 'localhost'; const port = process.env.PORT || 3001; // when using middleware `hostname` and `port` must be provided below const app = next({ hostname, port, dev }); const handle = app.getRequestHandler(); app.prepare().then(() => {…

### CASE-4878 · ReferenceError: e is not defined error occurs when running next dev --turbo
- **Principles**: P-F4 · **Env**: opera, next.js
- **Signals**: 👍20 💬30 · closed · labels: Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce When using` next dev --turbo` with a Next.js application, the following error message appears: ```sh ReferenceError: e is not defined at Module.Kind (/path/to/.next/server/chunks/ssr/node_modules_xyz.js:1376:18) at Kind (turbopack://[project]/node_modules/@user/core/src/gql.ts:84:30) ... ``` The application works without issues when running the `next dev` command. ### Current vs. Expected behavior bug screenshot: ![スクリーンショット 2024-11-03 12 36 54]([link]) ### Provide environment information ```bash Operating System:…

### CASE-4882 · Production Fatal Error
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍2 💬30 · closed · labels: please add a complete reproduction/bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash at validateURL (/app/node_modules/.pnpm/[email]-canary.3_@[email][email]@[email]/node_modules/next/dist/server/app-render/validate-url.js:24:19) at renderToHTMLOrFlight (/app/node_modules/.pnpm/[email]-canary.3_@[email][email]@[email]/node_modules/next/dist/server/app-render/app-render.js:102:51) at NextNodeServer.renderHTMLImpl (/app/node_modules/.pnpm/[email]-canary.3_@[email][email]@[email]/node_modules/next/dist/server/next-server.js:694:20) at…

### CASE-4883 · Any <Script /> with strategy="beforeInteractive" in RootLayout causes hydration errors
- **Principles**: P-F4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍27 💬30 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Mon Apr 24 20:52:24 PDT 2023; root:xnu-8796.121.2~5/RELEASE_ARM64_T6000 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: N/A pnpm: N/A Relevant packages: next: 13.4.6-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Script optimization…

### CASE-4891 · Hydration failure with `useId()` and AG Grid Enterprise
- **Principles**: P-F4 · **Env**: opera
- **Signals**: 👍59 💬29 · closed · labels: linear: next/locked/React
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in development, or build and run the server 2. Open the index page 3. In case the error doesn't appear, refresh it 4. Remove line 7 in `Component.jsx` 5. Refresh the page to see that the error is gone ### Current vs. Expected behavior Hydration fails, because `useId()` returns `_R_clrlb_` on the server and `_R_4lrlb_` on the client. ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 25.0.0: Mon Aug 25 21:16:39 PDT 2025;…

### CASE-4897 · After client side render following SSR, the rendered html is out of sync with the react tree.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍16 💬29 · closed
- **Excerpt**: # Bug report ## Describe the bug We request the page, and initially it looks fine. It appears server side hydration is working as expected. But a second or so later, after React initialises on the client, some html ends up rendered in the wrong place (sometimes randomly inside sibling elements). The page source html is correct, so it must be rendering okay on the server. The react tree itself, and where it says the html is, is in line with what we would expect. However the html itself is wrong, and out of sync with the react tree shown in the dev tools. Forcing a re-render in the dev tools…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4870 · TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_1__.useActionState) is not a function or its return value is not iterable While using the example it the docs for useActionState.
- **Principles**: P-G4, P-E3 · **Env**: react, webpack
- **Signals**: 👍13 💬31 · closed · labels: bug/Webpack/TypeScript/Documentation/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Use example for useActionState on next docs. 2. Start dev server 3. go to localhost:3000 4. error on loading ### Current vs. Expected behavior Expected behavior was that I was to follow this example on the next documentation:[link] and I was going to be able to pass a message from the action to the form using useActionSate. the error I'm in countering is TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_1__.useActionState) is not a function or its return value is not iterable ### Provide environment information ```bash {…

### CASE-4885 · [NEXT-1167] Server Actions 405 "Method Not Allowed" when using generateStaticParams
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, next.js, react
- **Signals**: 👍51 💬30 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Wed, 26 Apr 2023 20:50:14 +0000 Binaries: Node: 18.16.0 npm: 9.5.1 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.1 eslint-config-next: 13.0.6-canary.1 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) ~~_No response_~~ Server actions. It seems like server actions wasn't part of the issue form dropdown earlier…

### CASE-4900 · Turbopack: Bun APIs don't work with next
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬28 · closed · labels: Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Start the app with `bun run --bun dev --turbo pack` and use the form the api route should fail to compile even though I'm using bun and have bun types installed ### Current vs. Expected behavior I expect this to just use the bun runtime and compile and work simply work but throws this error Error: ``` ✓ Compiled /api/s3write in 377ms ⨯ ./app/api/s3write/route.ts:2:1 Module not found: Can't resolve 'bun' 1 | // app/api/s3write/route.ts > 2 | import { S3Client } from "bun"; | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 3 | import {…

