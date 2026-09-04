# Case Chunk 046 — Round 46

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5501 · Rewrites not working in dev server client side navigation in Next.js 12.2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 101, next.js, react
- **Signals**: 👍10 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:37 PDT 2022; root:xnu-8020.121.3~4/RELEASE_ARM64_T6000 Binaries: Node: 16.13.2 npm: 8.1.2 Yarn: 1.22.15 pnpm: 6.11.0 Relevant packages: next: 12.2.1-canary.2 eslint-config-next: 12.2.0 react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) Firefox 101.0.1 ### How are you deploying your application? (if relevant) next dev ###…

### CASE-5506 · [NEXT-369] Fast refresh doesn't work when importing function with capitalized name
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 99, next.js, react
- **Signals**: 👍0 💬11 · closed · labels: bug/Webpack/linear: next/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Mon Feb 21 20:34:37 PST 2022; root:xnu-8020.101.4~2/RELEASE_X86_64 Binaries: Node: 16.14.0 npm: 8.3.1 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.1-canary.17 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Chrome 99.0.4844.83 (Official) (x86_64) ### How are you deploying your application? (if relevant) Not relevant ### Describe the Bug I think…

### CASE-5507 · EACCES: permission denied, mkdir '../../dist'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, next.js, react
- **Signals**: 👍2 💬11 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ``` $ npx --no-install next info /bin/sh: 1: yarn: not found Operating System: Platform: linux Arch: x64 Version: [ref] SMP Wed Aug 25 23:20:18 UTC 2021 Binaries: Node: 16.13.1 npm: 8.5.1 Yarn: N/A pnpm: 6.31.0 Relevant packages: next: 12.1.0 react: 17.0.2 react-dom: 17.0.2 ``` ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) nx.dev ### Describe the Bug when run command `npx nx run blog:serve` I get the…

### CASE-5508 · getServerSideProps BUG， In particular, I hope the official answer and solution
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, next.js
- **Signals**: 👍0 💬11 · closed · labels: Linking and Navigating/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information No response ### What browser are you using? (if relevant) chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug // The longer the getserversideprops request takes, the more it will get stuck when the previous page returns // Leave a question, why push to the next page? When the browser comes back, it will be executed here // This will cause the page data to refresh when I return, which is not what I want ### Expected…

### CASE-5509 · "To use middleware you must provide a `hostname` and `port` to the Next.js Server" Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, ubuntu, next.js, react
- **Signals**: 👍1 💬11 · closed · labels: please add a complete reproduction/Middleware
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Thu Jan 13 18:22:13 UTC 2022 Binaries: Node: 14.19.0 npm: 8.4.0 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.0.10 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.10 ### What version of Node.js are you using? 14.19.0 ### What browser are you using? Chrome ### What operating system are you using? Ubuntu ### How are you deploying your application? next start ### Describe the Bug I have a `_middleware.ts` file for my protected…

### CASE-5510 · `Cannot find module` error when package directory name ends with `next`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react, next.js
- **Signals**: 👍0 💬11 · closed · labels: Webpack/locked
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:24 PDT 2021; root:xnu-8019.41.5~1/RELEASE_ARM64_T8101 Binaries: Node: 17.0.1 npm: 8.1.0 Yarn: 1.22.10 pnpm: N/A Relevant packages: next: 12.0.10 react: 17.0.2 react-dom: 17.0.2 ``` ### What version of Next.js are you using? 12.0.10 ### What version of Node.js are you using? 17.0.1 ### What browser are you using? Chrome ### What operating system are you using? macOS Monterey 12.0.1 ### How are you deploying your application? Local…

### CASE-5511 · React.lazy() content HTML does not get included in SSG output
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:54 PST 2021; root:xnu-8019.61.5~1/RELEASE_X86_64 Binaries: Node: 16.13.0 npm: 8.1.0 Yarn: 1.22.0 pnpm: N/A Relevant packages: next: 12.0.10 react: 0.0.0-experimental-fa816be7f-20220128 react-dom: 0.0.0-experimental-fa816be7f-20220128 ### What version of Next.js are you using? 12.0.10 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you…

### CASE-5512 · Shallow Routing incorrectly recreate/remount component (lose state)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍15 💬11 · closed · labels: bug/locked/stale
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) _No response_ ### What version of Next.js are you using? 12.0.8 (also tried with 11.1.3) ### What version of Node.js are you using? 16.5.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start, Netlify ### Describe the Bug First shallow routing after redirect from another page will incorrectly remount component (any component state will be reset). Subsequent shallow routing within the same page works as expected (keeping component state). ###…

### CASE-5513 · Pages show 500 error on Vercel, on Netlify they work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, react, next.js
- **Signals**: 👍0 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT Sun Sep 19 21:31:53 UTC 2021 Binaries: Node: 17.2.0 npm: 8.1.4 Yarn: N/A pnpm: 6.24.2 Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 17.2.0 ### What browser are you using? Edge ### What operating system are you using? Linux Manjaro ### How are you deploying your application? Vercel ### Describe the Bug The repo when deployed to Vercel does 500 errors, the…

### CASE-5514 · Unable to run builds localy with 12.0.8 on WSL2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 97, opera, ubuntu, windows, next.js
- **Signals**: 👍1 💬11 · closed · labels: Image (next/image)/Webpack/locked/stale
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) _No response_ ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.13.1 ### What browser are you using? Chrome 97 ### What operating system are you using? WSL2 Ubuntu 20.04 under Windows 10 Pro 21H2 19044.1466 ### How are you deploying your application? Heroku ### Describe the Bug I am unable to create production builds with `npm run build` since I upgraded to 12.0.8: ``` glob error [Error: EMFILE: too many open files, scandir…

### CASE-5515 · Problem reading CSS files with webpack
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, webpack, next.js, typescript
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.13.1 ### What browser are you using? Firefox ### What operating system are you using? Linux ### How are you deploying your application? Vercel ### Describe the Bug I am using NextJS with typescript. I created app with ```npx create-next-app@user --ts some-project```. Whenever I run ``` npm run dev``` it throws an error like this ```bash error -…

### CASE-5516 · 4% increase in bundle size from next 11.1.2 to 12.0.7
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍4 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 14.15.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug We have been struggling with our bundle size and put a huge effort into making it as small as possible Going from Next v. 11.1.2 to 12.0.7 means an increase in bundlesize from 127Kb to 132 kb. This is before and after from next build: ``` Page Size First Load JS ├ /_app 0 B 75.8 kB ├ ● /[...slug] (ISR: 3600 Seconds) (122414 ms) 14.1 kB…

### CASE-5517 · Image do not show AWS S3 images - "url" parameter is valid but upstream response is invalid
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, linux, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug/Image (next/image)
- **Excerpt**: ### What version of Next.js are you using? 12.0.2, 12.0.7 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome ### What operating system are you using? Linux ### How are you deploying your application? next start ### Describe the Bug Possible duplication of [link] framework][ref] Showing protected images from AWS S3 resulting with error: `"url" parameter is valid but upstream response is invalid` The s3 bucket policy: ``` { "Version": "2012-10-17", "Id": "http referer policy example", "Statement": [ { "Sid": "Allow get requests originating from domainss",…

### CASE-5518 · next/router throws error on valid web archive links
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, safari/, edge, opera, next.js
- **Signals**: 👍1 💬11 · closed · labels: good first issue/Linking and Navigating
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? It happens server-side and in Chrome/Safari/Mozilla and Edge ### What operating system are you using? debian ### How are you deploying your application? next build && next start ### Describe the Bug When passing a valid url like e.g. [`[link]]([link]) as `href` attribute for an `next/link` element, `next/router` throws the following warning: ``` Invalid href passed to next/router: [link] repeated forward-slashes (//) or backslashes \ are not valid in the href…

### CASE-5519 · TypeError on production server (ERR_INVALID_ARG_TYPE)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍1 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? Chrome (it doesn't matter) ### What operating system are you using? macOS ### How are you deploying your application? elastic beanstalk ### Describe the Bug Running `next start` after a successful build, the following error happens. Only happens on server-side rendered pages, as client-side rendered pages and navigation work as usual. ``` TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array.…

### CASE-5520 · Next 12 Runtime TypeError: Class constructors cannot be invoked without 'new'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 96, opera, macos, next.js
- **Signals**: 👍0 💬11 · closed · labels: SWC
- **Excerpt**: ### What version of Next.js are you using? 12.0.2 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? Chrome 96 ### What operating system are you using? MacOS ### How are you deploying your application? next start ### Describe the Bug While updating my application from next 11 to 12 I ran into a runtime issue which I'm guessing is originating from the switch to SWC (?). I'm extending a Class and instantiating it, leading to a runtime error: ```javascript Unhandled Runtime Error TypeError: Class constructors cannot be invoked without 'new' pages/index.tsx (7:15)…

### CASE-5521 · V12.0.1 URL Import - `Cannot find module or type declarations` when deploying to Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari/, chrome, opera, linux, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? v14.17.6 ### What browser are you using? Safari/Chrome ### What operating system are you using? Linux ### How are you deploying your application? Vercel ### Describe the Bug Importing Confetti and rendering in a simple application, works perfectly on dev server when running `next dev` error shows in IDE and when deploying to Vercel. Full error message: ``` Type error: Cannot find module '[link] or its corresponding type declarations. ``` ### Expected Behavior Deploy to work without issue. ### To…

### CASE-5522 · Server functions not working on Vercel on V. 12
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, opera, macos, next.js
- **Signals**: 👍2 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 14 with yarn workspaces ### What browser are you using? Firefox ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug After upgrading to v. 12.0.1 from 11, I'm seeing the following error on server-rendered pages or API endpoints: ``` 2021-10-29T06:41:38.719Z 1b7c44bd-4566-4e9b-9bb6-4815b987e8ed ERROR Error: Cannot find module '/var/task/node_modules/next/dist/server/next.js'. Please verify that the package.json has a valid "main" entry…

### CASE-5523 · Compiler fails on local environment - JavaScript heap out of memory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, next.js
- **Signals**: 👍8 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 17.0.1 ### What browser are you using? Chrome, latest ### What operating system are you using? Mac ### How are you deploying your application? next start ### Describe the Bug Basically in the title. When I upgraded to the new Next.js version, when I try to load any page on localhost, the following stack trace occurs. I tried this with node from nvm, version 14, 16 and 17. Worth noting I am working on a M1 13 inch MacbookPro. Stack trace: ``` <--- Last few GCs ---> [9544:0x158008000] 43409 ms:…

### CASE-5524 · [[email]] API route 500'ing in production, works locally
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, opera, windows, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.0 ### What version of Node.js are you using? 14.18.0 ### What browser are you using? Firefox ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug I have a few api routes, and one of them is failing in production builds, but works fine locally. They work fine in previous stable version of next, 11.1.x. ![image]([link]) ``` Uncaught (in promise) Error: An error has occured: 500 e useReviews.ts:32 l runtime.js:63 _invoke runtime.js:293 S runtime.js:118 Babel 6 w useReviews.ts:21 c…

### CASE-5526 · Different query params in getStaticProps cause ignore cache
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Hello, when I enter in my application like `[link] then I receive a cached page (I'm using ISR), the code: ``` // File: pages/offer/[id]/index.js export async function getStaticPaths() { return { paths: [], fallback: true, }; } export async function getStaticProps(context) { const { offer } = await getOffer(context.params.id); return {…

### CASE-5527 · `next/export` will not work with `Image` when using `unoptimized`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍1 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.15.5 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next export ### Describe the Bug When running `next export` using the `Image` from `next/image`, I set the `unoptimized` prop on `Image`, but still get the following error meaning I cannot export my app. ``` Error: Image Optimization using Next.js' default loader is not compatible with `next export`. Possible solutions: - Use `next start` to run a server, which…

### CASE-5528 · next/script in _app.js creates duplicate script tags in document after moving between pages
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, next.js
- **Signals**: 👍3 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 16.1.0 ### What browser are you using? Chrome, Safari ### What operating system are you using? macOS ### How are you deploying your application? next export ### Describe the Bug When I add inline script tags to `_app.js` they are then added to the document and ran multiple times when navigating between pages. This is causing problems with GTM as it's throwing errors that it has already been registered. ### Expected Behavior There should only be one script tag in the document per `next/script` and it…

### CASE-5530 · squoosh crash on static import png
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, next.js
- **Signals**: 👍7 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 14.15.0 ### What browser are you using? firefox ### What operating system are you using? linux ### How are you deploying your application? other ### Describe the Bug static import of png: ``` Error: `unwrap_throw` failed at <anonymous>:wasm-function[168]:0x165c5 at decode (<anonymous>:wasm-function[7]:0x9e7c) ``` $ grep unwrap_throw -r node_modules binary file: node_modules/next/dist/next-server/server/lib/squoosh/png/squoosh_png_bg.wasm binary file:…

### CASE-5531 · Next 11 breaks styled-components: Prop `className` did not match
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍5 💬11 · closed · labels: bug/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 11.0.0-canary.6 ### What version of Node.js are you using? 14.x ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug After updating to Next 11, all of the projects that use `styled-components` started throwing an error. It's not component specific. Disable the first, and the second styled component fails. It looks like whatever styled-components uses as the seed for its hashing mechanism got busted in the new release. I'm filing it here first,…

### CASE-5532 · TypeError: Cannot read property 'theme' of undefined
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, firefox, opera, tailwind, next.js
- **Signals**: 👍15 💬11 · closed · labels: good first issue/examples
- **Excerpt**: ### What example does this report relate to? with-tailwindcss-emotion ### What version of Next.js are you using? 11 | 10.2.3 ### What version of Node.js are you using? 14.17.1 ### What browser are you using? Chrome & Firefox ### What operating system are you using? Win 10 ### How are you deploying your application? n/a ### Describe the Bug Running "npm run dev" results in `TypeError: Cannot read property 'theme' of undefined` ### Expected Behavior Running "npm run dev" starts up the application without errors ### To Reproduce Following the instructions, I ran `npx create-next-app --example…

### CASE-5533 · Slow page reload running in development
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍20 💬11 · closed · labels: good first issue/bug/locked
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? n/a ### Describe the Bug When running `npm run dev` if you reload the page (refresh) a few times, after about the 5th refresh the load time gets very slow and almost unusable. ### Expected Behavior Refresh should be less than a few seconds. ### To Reproduce `npx create-next-app app` `cd app` `npm run dev` Refresh the page 5-10 times.

### CASE-5534 · Font render worst on production with inline fonts optimization on Windows
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍7 💬11 · closed · labels: Font (next/font)/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 12.21.0 ### What browser are you using? Chrome ### What operating system are you using? Windows 10 ### How are you deploying your application? Self hosted ### Describe the Bug Hi, I'm using the Lato web fonts from Google and it render differently in production when next.js use the new inline optimization. These the differences: development ![1]([link]) production ![2]([link]) I saw that in development the downloaded font has this address: [link] and in production it use this one: [link] ### Expected…

### CASE-5535 · Dynamic API routes : explicilty requesting url with dynamic slug as [slug]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, ubuntu, next.js
- **Signals**: 👍2 💬11 · closed · labels: Linking and Navigating
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? v12.16.3 ### What browser are you using? Firefox ### What operating system are you using? Ubuntu ### How are you deploying your application? next dev ### Describe the Bug When requesting a url with a dynamic segment (ex : `/my/path/[slug]`) with that slug not being replaced by anything (ex : `[link]]`), I got the following error : `The provided `href` (/my/path/[slug]?) value is missing query values (slug) to be interpolated properly. Read more: [link] ### Expected Behavior To behave as if the slug…

### CASE-5537 · Error occurred prerendering page "/500"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, next.js
- **Signals**: 👍24 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.0.9 ### What version of Node.js are you using? 12.16.3 ### What browser are you using? Chrome ### What operating system are you using? Linux Mint ### How are you deploying your application? next start ### Describe the Bug After upgrading to next 10.0.9 (I was using 10.0.5) during the build phase it is trying to create a 500 page I suppose. In my application it's not possible, I've a complex `_app.getInitialProps` so I tried to create a 500.js ([link] framework][ref]). It's still trying to create a 500 page, my static 500.js is ignored. ###…

### CASE-5538 · Hot Module Reloading not working for 10.0.6 and above including 10.0.8
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js, react
- **Signals**: 👍3 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? npm run dev ### Describe the Bug Hot module reloading doesn't work. A hard refresh of the browser is required for any changes to be reflected. There aren't any issues with v10.0.5 and below. One major difference that does stand out between this version and the next is an upgrade from React v16 -> v17 ### Expected Behavior When I save a file, the changes should be…

### CASE-5539 · [Deprecation] SharedArrayBuffer will require cross-origin isolation as of M91, around May 2021
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14.15.0 **What browser are you using?** Google Chrome Version 90.0.4400.8 (Official Build) dev (64-bit) **What operating system are you using?** Windows 10 **How are you deploying your application?** `npm run dev` (`npx next dev`) **Describe the Bug** I get this warning in the console: ``` scheduler.development.js:298 [Deprecation] SharedArrayBuffer will require cross-origin isolation as of M91, around May 2021. See [link] for more details. ``` ![console warning]([link]) **Expected Behavior** No…

### CASE-5540 · Hostname is not configured under images in your `next.config.js` when running tests with Jest
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, ubuntu, next.js
- **Signals**: 👍16 💬11 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.2 **What version of Node.js are you using?** 14.2.0 **What browser are you using?** Chrome **What operating system are you using?** Ubuntu **How are you deploying your application?** next start **Describe the Bug** When using Jest to test a component that uses `Image` from `next/image` you will get an error that your src prop hostname is not configured under images in your `next.config.js` even if you have mocked the config to include the domain. **Expected Behavior** Jest mocking should work. **To Reproduce** Testing this component:…

### CASE-5542 · next/image - onLoad event work incorrect
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 87, macos, windows
- **Signals**: 👍6 💬11 · closed · labels: bug
- **Excerpt**: # Bug report ## Describe the bug **onLoad** event on image fires not when user scroll until image, but when page loads, so that's impossible to add any spinner to **next/image** ## To Reproduce Add next/image component with onLoad event to long page bottom and just reload page, after page load you will see onLoad runs without scroll ## Expected behavior onLoad should work when image on user view port i think, or maybe there is should be onRender method for that. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) chrome 87.0.4280.88 (Official Build) (64-bit) - Version of…

### CASE-5546 · next/image webp not falling back for some unsupported browser
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: ios 11, iphone
- **Signals**: 👍9 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug next/image (WebP) not falling back to .jpg/.png for unsupported browser. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. git clone [Image Component Example]([link] framework]/tree/canary/examples/image-component) 2. npm run dev 3. Use iphone to access [link] (same network) ## Expected behavior Should be able to fall back to show vercel.png instead of a blank area. ## Screenshots If applicable, add screenshots to help explain your problem. **iPhone6 iOS 11** ![iPhone6]([link]) **iPhone11 iOS 11**…

### CASE-5547 · next/image is not a drop-in replacement for the <img> tag
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, macos, next.js
- **Signals**: 👍9 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug While the Next 10 blog post states that next/image is a drop-in replacement for the &lt;img&gt; tag, this is not the case for many layouts. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. See [link] ## Expected behavior The layout should remain the same before and after switching from &lt;img&gt; to next/image. ## Screenshots ![image]([link]) ## System information - OS: macOS - Browser (if applies) Chrome and Firefox, but problem is independent of browser - Version of Next.js: 10 - Version of Node.js: v14.9.0

### CASE-5549 · Get react-refresh-utils/runtime.js Error:react-refresh-runtime.development.js:465 Uncaught TypeError: Cannot read property 'forEach' of undefined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, chrome 84, react, next.js
- **Signals**: 👍0 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug I am ready to set up next.js by `npx create-next-app` and `yarn run dev`,howerver I got a js error in chrome,while it works well in firefox. what happend ???? ## Screenshots ![image]([link]) ## Dependency ```json { "name": "blog", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "test": "echo \"Error: no test specified\" && exit 1" }, "keywords": [], "author": "", "license": "ISC", "dependencies": { "next": "^9.5.1", "react": "^16.13.1", "react-dom": "^16.13.1" } } ``` - win64 - node 12.3.0 - Chrome 84.0.4147.105（正式版本） （64 位）

### CASE-5559 · "Module parse failed" running next dev in 8.1.1-canary.28
- **Principles**: P-G1, P-G2, P-G3 · **Env**: typescript
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug Running `next dev` in my project is causing a `Module parse failed: Unexpected token` error when trying to compile `next/dist/client/next-dev.js`: ``` Module parse failed: Unexpected token (19:6) You may need an appropriate loader to handle this file type. | | > import('./noop'); // Support EventSource on Internet Explorer 11 | | if (!window.EventSource) { ``` ## To Reproduce My babel configuration is: ``` { presets: [ [ 'next/babel', { 'preset-env': { useBuiltIns: 'usage', }, }, ], '@user/preset-typescript' ], plugins: [ ['@user/plugin-proposal-decorators', {…

### CASE-5561 · Image Events aren't fired
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ubuntu, react, next.js
- **Signals**: 👍13 💬11 · closed · labels: Upstream
- **Excerpt**: # Bug report ## Describe the bug No image event handlers are fired. I can't see the output in the console. When I try it with [plain]([link]) react it works. ## To Reproduce Try the snippet in any component. ```jsx <img src="[link] onError={() => { console.log('#############Error##############') }} onLoad={() => { console.log('#############Load##############') }} /> ``` or [this]([link]) component. ## Expected behavior onLoad or OnError should be executed ## System information - OS: Ubuntu - Browser chrome - Version of Next.js: 8.0.4

### CASE-5562 · Next/link triggers [HMR] bundle rebuilding but does not change page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍9 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## To Reproduce I'm working on reproducing, but next.js provides zero information about what's happening, so it's nearly impossible for me to actually identify where the problem is. All I know is that my code isn't working. ## Expected behavior Clicking this component should redirect to the about page. ``` <Link href="/about">About</Link> ``` A meta issue: If it does not redirect to the about page, next.js should provide some debug output to explain why it's not working. It's hard to isolate a bug when the entire HMR system is blackboxed. ## System information - macOS - chrome -…

### CASE-5563 · Memory leaks
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome, macos
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug We have some problem on our server. After some time of execution we have an out of memory error on our 3Go AWS server. So I tried to log on my computer. I launch refresh of the home page every 5 seconds to see if the memory increase. Here is the memory evolution : ![image]([link]) ![image]([link]) Here is the statistics just after nextjs server was launch : ![image]([link]) Statistics on last snpashot ![image]([link]) Any idea ? I don't know where to look for debugging this... Thanks ! ## System information - OS: macOS - Browser (if applies): Chrome - Version…

### CASE-5565 · Error: Cannot find module '.next\server\pages-manifest.json'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 6
- **Signals**: 👍6 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug When starting in prod mode (doing `next build` and `npm start`), this error occurs when I try to navigate to the page in the browser. When run 'next build && next export', this error occurs immediately. ## To Reproduce 1. Clone the [repo ]([link]) 2. Run `yarn install` 3. Run `next build` 4. Run `yarn start` or 'npm run start' / Run the 'start' script of package.json 5. Go to localhost:8000 in Chrome 6. Error appear in the console where you ran step 4 ## Screenshots ``` Error: Cannot find module 'C:\...\.next\server\pages-manifest.json' at…

### CASE-5566 · Bug in Resetting the Form DOM on Browser Back/Forth
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, next.js, react
- **Signals**: 👍3 💬11 · closed · labels: good first issue/locked
- **Excerpt**: # Bug report ## Describe the bug In Chrome, when page navigating back/forth to a next.js page that contains a form with previously selected radio and select values, these selected values are still shown, but do not match the react component state. This leads to business logic errors, since the fields are expected to be empty or set to some other initial values. In a create-react-app this works fine, so I guess it has something to do with how next.js handles the `popstate` event. ## To Reproduce I have created a full example repo here: [link] 1. Create a new next app using `npx create-next-app…

### CASE-5567 · next (7+) webpack bootstrap file interrupts workers load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, chrome 69, macos, windows, webpack, bootstrap, next.js
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report When loading any web worker with Next 7+ (at least), it crashes. ## Describe the bug any non-window entity (Service Worker, Web Worker etc) still gets `var parentHotUpdateCallback = window["webpackHotUpdate"];` inside it. this causes crash with `Uncaught ReferenceError: window is not defined` error during bootstrap in dev mode ## To Reproduce use [link] ## Expected behavior workers working ## System information - OS: [e.g. macOS, Windows] Windows - Browser (if applies) [e.g. chrome, safari] Chrome 69 - Version of Next.js: [e.g. 6.0.2] 7.0.0, 7.0.1-beta.0

### CASE-5569 · svg-components example fails with latest babel-plugin-inline-react-svg
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 67, macos, react, next.js
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: # Examples bug report ## Example name svg-components ## Describe the bug Example does not work with `^0.2.0` which currently resolves to `0.5.2` ``` Module parse failed: Unexpected token (39:6) You may need an appropriate loader to handle this file type. ``` ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Run the example with the latest version of `babel-plugin-inline-react-svg` ## Expected behavior It should work ## System information - OS: macOS 10.13.4 - Browser: Chrome 67 - Version of Next.js: 6.0.3 ## Workaround Downgrade to…

### CASE-5580 · Buffer polyfill not work on ios lower then 14
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, ios, linux, next.js
- **Signals**: 👍0 💬10 · closed · labels: bug/Webpack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Add something with Buffer on client side Try open page on IOS lower then 14 Console report the error: ![image]([link] framework]/assets/17552716/6c7b4b77-3c57-4c4f-a397-5d1a0f3696cb) ### Current vs. Expected behavior The polyfill should work on versions supported by Next.js. ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Fri Apr 2 22:23:49 UTC 2021 Available memory (MB): 15701 Available CPU cores: 8 Binaries: Node: 20.13.1 npm: 10.5.2 Yarn: 1.22.22 pnpm: N/A…

### CASE-5582 · Edge Runtime and AWS SDK credentials
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, typescript
- **Signals**: 👍10 💬10 · closed · labels: bug/Middleware/Runtime/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce For example, if I want to get a variable from AWS Systems Manager Parameter Store, I can use this code: ```typescript import {NextResponse} from 'next/server' import {SSMClient, GetParameterCommand} from '@user/client-ssm' export async function middleware() { const ssm = new SSMClient({region: 'us-east-1'}) const command = new GetParameterCommand({Name: 'put-some-variable-here'}) const response = await ssm.send(command) console.log(response) return NextResponse.next() } export const config = { matcher: ['/:path*'] } ```…

### CASE-5588 · instrumentation.ts runtime showing as "edge" even when default runtime is supposed to be "nodejs" in local
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍1 💬10 · closed · labels: bug/Runtime/Instrumentation
- **Excerpt**: [Link to the code that reproduces this issue]([link]) ### To Reproduce 1. Create an instrumentation.ts file 2. Above register(), add console.log("instrumentation runtime", process.env.NEXT_RUNTIME); ### Current vs. Expected behavior Current behaviour: console shows: `instrumentation runtime edge` Expected behaviour: console shows: `instrumentation runtime nodejs` I would assume that the default runtime (nodejs) would be used if not specified, [as shown in the docs]([link]) I had to add `export const runtime ='nodejs'` to force the instrumentation.ts file to run in the nodejs environment…

### CASE-5592 · [Supabase][cookies] Cannot read properties of undefined (reading 'name')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, linux, next.js, react, typescript
- **Signals**: 👍4 💬10 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Thu, 02 Nov 2023 12:57:06 +0000 Binaries: Node: 20.9.0 npm: 10.2.3 Yarn: N/A pnpm: N/A Relevant Packages: next: 14.0.2-canary.11 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 Next.js Config: output: N/A ``` ### Which example does this report relate to? with-supabase ### What browser are you using? (if relevant) Mozilla Firefox for Arch Linux…

### CASE-5599 · doesnt work with Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, windows, next.js
- **Signals**: 👍2 💬10 · closed · labels: bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce visit that website: [link] blank screen. open console and see: ~~~ TypeError: e is undefined NextJS 11 [framework-63157d71ad419e09.js:9:69810]([link]) Uncaught TypeError: e is undefined NextJS 11 [main-c59a42b9e9a6f445.js:1:11213]([link]) ~~~ ### Current vs. Expected behavior ! ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Windows ``` ### Which area(s) are affected? (Select all that apply) Not sure…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5502 · Standalone output does not load runtimeConfig from environment variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react
- **Signals**: 👍4 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:45:05 PDT 2022; root:xnu-8020.101.4~15/RELEASE_X86_64 Binaries: Node: 18.2.0 npm: 8.9.0 Yarn: 1.22.18 pnpm: 7.3.0 Relevant packages: next: 12.2.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) Docker with `node…

### CASE-5550 · [Example] with-sentry-simple fails to upload sourcemap on Vercel
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug The [with-sentry-simple]([link]) example results in a build failure when trying to push sourcemaps by using @user/webpack-plugin ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Reproduce example in [with-sentry-simple]([link]) 2. Make sure to specify SENTRY_ORG, SENTRY_PROJECT and SENTRY_AUTH_TOKEN environment variables on Vercel Vercel build output shows the following: ``` 22:00:59.955 Failed to compile. 22:00:59.955 Sentry CLI Plugin: Unable to determine version. Make sure to include `release` option or use…

### CASE-5551 · SASS :export does not work with built-in SASS support throwing 'Selector ":export" is not pure'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍19 💬11 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug I use `:export` syntax to export variables from scss files and import them in JS. This worked great with next-sass, but does not even compile with the built-in SASS support. ## To Reproduce in `Component.jsx`: ``` import colors from './component.module.scss' ``` `component.module.scss`: ``` :export { white: #ffffff; black: [ref]; } ``` ## Expected behavior `colors` in `Component.jsx` should be an object that looks something like this: ``` { white: "#ffffff", black: "[ref]" } ``` ## Actual behavior It does not compile the scss file and throws: ```…

### CASE-5553 · Global scss variable
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍17 💬11 · closed
- **Excerpt**: # Bug report Sass variables in global file aren't visible in .module scss files. ## To Reproduce 1. clone - [link] 2. npm i 3. npm run dev ``` SassError: Undefined variable. ╷ 3 │ color: $blue; ``` ## Screenshots <img width="811" alt="Screen Shot 2020-03-26 at 18 15 59" src="[link]> ## System information - Version of Next.js: 9.3.1

### CASE-5571 · Turbopack enabled apps fail to hydrate with a JS runtime error on Pale Moon browser
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: next.js
- **Signals**: 👍1 💬10 · open · labels: Turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open any turbopack nextjs app in [Palemoon]([link]) (e.g. [link] ) 2. Observe whether the app hydrates and has any errors ### Current vs. Expected behavior Expected the app to hydrate without errors. But the app doesn't hydrated because of the turbopack runtime error: ``` Error: Invariant: Expected document.currentScript to be a <script> element. Received null instead. This is a bug in Next.js. ``` ### Provide environment information ```bash npx next info /bin/sh: yarn: command not found /bin/sh: pnpm: command not…

### CASE-5579 · Not seeing not-found page on production deployment with dynamicParams = false
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug/not stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The app needs one env variable NEXT_PUBLIC_DOMAIN="[link] on local or your domain if you deploy it. Run on localhost and you will see urls like: /this-does-not-exist/page-d showing the not found page as they should. Deploy on Vercel and the same ulrs do not show the not-found page. Deploy on Netlify and the same urls show the not found page. ### Current vs. Expected behavior Current: url /this-does-not-exist/page-d does not show the not-found page when deployed on Vercel Expected: to see the not-found page since I use…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5503 · Middleware rewrite doesn't take `searchParams` when target page is a non-SSR page.
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:54 PST 2021; root:xnu-8019.61.5~1/RELEASE_X86_64 Binaries: Node: 17.8.0 npm: 8.5.5 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.6 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug The `searchParams` is not taken when target…

### CASE-5548 · Inconsistent CSS between dev and build
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug When using the "Built-in CSS support", the ordering of the CSS classes (and number of times a class is declared) is not consistent between development and production. Because of this, you can see some CSS styling "pop" around when navigating between pages. I believe the order is correct in SSR, but not in the client-side loaded bundles (as more CSS is loaded asynchronously, the ordering is lost and duplicated styles are loaded) ## To Reproduce Just run `next build`, the issue seems to be out-of-the-box with CSS modules? ## Expected behavior The resulting CSS…

### CASE-5554 · SSR breaks with Material UI && Styled Components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug Material UI has FOUC when used with Styled Components beta v5.0.8 ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Edit your document.js to ```js import { ServerStyleSheet } from 'styled-components' import { ServerStyleSheets } from '@user/styles' ... static async getInitialProps(ctx: DocumentContext) { const sheets = new ServerStyleSheets() const sheet = new ServerStyleSheet() const originalRenderPage = ctx.renderPage try { ctx.renderPage = () => originalRenderPage({ enhanceApp: App => props => ({…

### CASE-5556 · with-apollo-auth: getDataFromTree returns an error during SSR with useRouter hook
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍19 💬11 · closed
- **Excerpt**: # Error while running `getDataFromTree` TypeError: Cannot read property 'query' of null ## Describe the bug I tried to use latest dynamic router functionality next to apollo client (just updated next version in `with-apollo-auth` example). When I use `useRouter` hook and trying to load page via visiting dynamic page directly from browser (not via client routing) I get an error `Error while running `getDataFromTree` TypeError: Cannot read property 'query' of null`. If I use `withRouter` hoc - everything is ok! ## To Reproduce ```ts // Route like: /users/[user].tsx import React from 'react';…

### CASE-5590 · @user/speed-insights/next creates hydration errors
- **Principles**: P-F4 · **Env**: opera, windows, next.js
- **Signals**: 👍0 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Deploy the app on vercel 2. Go to the website and look at the logs ### Current vs. Expected behavior Expected: No console errors Current: Hydration errors in console ([418 ]([link])& [423]([link])) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 11 Pro Binaries: Node: 21.1.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 14.0.4-canary.47…

### CASE-5597 · app-router ssr=false NEXT_DYNAMIC_NO_SSR_CODE
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬10 · closed · labels: bug/Lazy Loading/locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce ## For Pages Router 1. clone `with-dynamic-import` and run it ```bash npx create-next-app@user reproduction-app -e with-dynamic-import cd reproduction-app npm run dev ``` open `pages/index.tsx`, add `ssr: false` to `const DynamicComponent1 = dynamic(() => import('../components/hello1'))` like `const DynamicComponent1 = dynamic(() => import('../components/hello1'), { ssr: false })`, the same of other dynamic import component. then visit `localhost:3000`, it's working and all seems ok ## For App…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5504 · Nextjs failing to load normal images from cloudinary without priority flag
- **Principles**: P-A3, P-H1 · **Env**: next.js, tailwind
- **Signals**: 👍0 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information **next.config.js** swcMinify: true, images: { domains: ['images.unsplash.com', 'tailwindui.com', 'res.cloudinary.com'], loader: 'cloudinary', path: '[link] }, ### What browser are you using? (if relevant) All browsers ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug My app uses cloudinary images as CDN and I use next/image for image optimization. It seems like that next.image is having some issue when being deployed on…

### CASE-5525 · Next build does not work on macOS
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.3-canary.15 ### What version of Node.js are you using? 12,14,16 ### What browser are you using? Brave ### What operating system are you using? macOs ### How are you deploying your application? Vercel ### Describe the Bug When every i try to build or try to run my project it breaks immediately giving me this error `ode:internal/modules/cjs/loader:940 const err = new Error(message); ^ Error: Cannot find module './blocks/images' Require stack:` and when i see the path it tells that has the missing thing it does miss it it is in…

### CASE-5536 · Race condition with Image Loader makes it unusable in a production environment
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: opera, next.js
- **Signals**: 👍14 💬11 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.0.9 ### What version of Node.js are you using? v12.19.0, v14.16.0 ### What browser are you using? Any browser ### What operating system are you using? Any OS ### How are you deploying your application? AWS ### Describe the Bug The default image loader at present seems to suffer from a race condition. Unfortunately this issue has now meant that for us, the pretty awesome functionality, cannot be used at all. Assuming the image cache does not contain the given image, when making a request the loader will go off and do it's thing and then return the…

### CASE-5541 · Multiple issues related to ii18n (redirects, localeDetection)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: next.config.js: ``` module.exports = { trailingSlash: true, i18n: { locales: ["en", "de"], defaultLocale: "en", }, async redirects() { return [ { source: "/en/:path*", destination: "/:path*", permanent: true, }, ]; }, } ``` **1st Issue** the issue I mentioned in [ref] is still not working for me (upgraded to 10.0.4). only the issue related to the trailingSlash seems to be fixed for me. Examples: - I go to **/en/**, I am not redirected to **/**, instead I stay on **/en/** - I go to **/en/some-page/**, I am not redirected to **/some-page/**, instead I stay on **/en/some-page/** <img width="558"…

### CASE-5543 · Next/image on Vercel can't fetch external image from not-secured site.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬11 · closed · labels: Image (next/image)
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report ## Describe the bug Next/image broken when I deployed to Vercel. The error message is 500 - `INTERNAL_UNEXPECTED_ERROR `. For the recap, I'm developing a mini site powered with self-hosted Strapi for the backend. The backend is hosted with a self-signed certificate (not secure), that's why I need to run Next app with `NODE_TLS_REJECT_UNAUTHORIZED='0'` command. It's run on my local development but broken in…

### CASE-5544 · Images optimizations crash
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬11 · closed · labels: Image (next/image)
- **Excerpt**: # Bug report ``` event - compiled successfully event - build page: /blog wait - compiling... event - build page: /next/dist/pages/_error event - compiled successfully dyld: lazy symbol binding failed: Symbol not found: _g_once_impl Referenced from: /Users/screamz/js-dev/perso/web-apps/coding-spark/node_modules/sharp/build/Release/sharp.node Expected in: /Users/screamz/js-dev/perso/web-apps/coding-spark/node_modules/optimized-images-loader/node_modules/sharp/build/Release/../../vendor/lib/libvips.42.dylib dyld: Symbol not found: _g_once_impl Referenced from:…

### CASE-5545 · Image component doesn't load with Concurrent Mode
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug The`next/image` component doesn't work with React's Concurrent Mode (I'm aware that Concurrent Mode is experimental) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. `yarn create next-app` 2. change the `<img />` at the bottom of `pages/index.js` to `<Image layout='fill' />` 3. `yarn dev`: there's a big Vercel logo across the page 4. enable concurrent mode: ```js /* next.config.js */ module.exports = { experimental: { reactMode: 'concurrent', }, }; ``` 5. `yarn dev`: the logo is gone! this definitely is a…

### CASE-5557 · Build size regression from "8.1.1-canary.53" to "8.1.1-canary.54"
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report Page size increased significantly when running 'next build' ## Describe the bug For the same repo, 'next build' display output for 8.1.1-canary.53: <img width="360" alt="Screen Shot 2019-06-22 at 12 26 41 PM" src="[link]> and after running 'next build' with for 8.1.1-canary.54: <img width="360" alt="Screen Shot 2019-06-22 at 12 26 32 PM" src="[link]> no other changes have been made... ## To Reproduce run 'next build' on the same repo, with 8.1.1-canary.54 ## System information - macOS 10.14.5 - NextJS 8.1.1-canary.54

### CASE-5558 · Nested pages not loading static files using HOC
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug The static images in my layout file (Navbar & Footer) will not get loaded when exporting html and navigating into a nested page (pages/products/test.js). But they are loaded when navigating into files directly (pages/*.js). ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Install freshly NextJS 2. Create Layout HOC 3. next build && next export && serve -p 8080 4. localhost:8080 //Images loaded 5. localhost:8080/products/test // HOC images missing **components/Layout.js** ``` const withLayout = Content => {…

### CASE-5560 · Next 8.1.0 doesn't server-side render
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍4 💬11 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug After upgrade Nextjs from 8.0.4 to 8.1.0, it doesn't server-side render anymore. It's become client-side render apps instead. But the weird thing is the redux store + styled-components are server-side render correctly. But the site content doesn't server-side render. ## To Reproduce Using Nextjs 8.1.0 -> Build -> Running apps -> See the result! ## Expected behavior The apps should server-side rendered. ## Screenshots ![image]([link]) The entry `<div id="_next">` should not be an empty div. ## System information - OS: Linux Server (node:8.12.0-alpine image) -…

### CASE-5564 · use antd-mobile don't to do "next export"
- **Principles**: P-A3, P-H1 · **Env**: macos, windows, mobile
- **Signals**: 👍0 💬11 · closed · labels: good first issue/examples
- **Excerpt**: # Bug report use antd-mobile don't to do "next export" ## Describe the bug use antd-mobile don't to do "next export" ![image]([link]) A clear and concise description of what the bug is. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to '...' 2. Click on '....' 3. Scroll down to '....' 4. See error ## Expected behavior A clear and concise description of what you expected to happen. ## Screenshots If applicable, add screenshots to help explain your problem. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g.…

### CASE-5568 · Dynamic import is loading all dependency even it's lazy loaded. Next 7.0.0
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: # Bug report ## Describe the bug on "next": "^7.0.0", dynamic import is importing ALL of the module that is supposed to lazy loaded. unlike "next": "^6.1.2", the module is correctly loaded on demand. ## To Reproduce ``` import dynamic from "next/dynamic"; const TextSideSlider: any = dynamic( import(/* webpackChunkName: 'TextSideSlider' */"./TextSideSlider") as any, ); ``` this component is used only on route /b. But, on route /a it's already loaded. ## Expected behavior Dynamic imported module loaded when it's needed. like on next 6.1.2. ## Screenshots "next": "^6.1.2" on route /a…

### CASE-5572 · Next.js 16: file uploads via Server Actions lose file on first call when using proxy.ts (dev only; mp3/mp4)
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍7 💬10 · closed · labels: Middleware/locked/Server Actions
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run next dev. 2. Select a file. 3. Click Upload. 4. Check the terminal — the file is missing on the first attempt. 5. Click Upload again. 6. The terminal now logs the file. ### Current vs. Expected behavior In development mode, when ‎`proxy.ts` is configured, the first call to a server action that uploads an mp3/mp4 results in the uploaded file being missing or empty. Subsequent calls work. Image uploads do not exhibit this problem. Expected: All file types (including mp3/mp4) should be consistently available to server…

### CASE-5574 · Server action with redirect to external URL returns undefined to client
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬10 · closed · labels: bug/Linking and Navigating/Runtime
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone repo, install, `npm dev` 2. Open browser & console 3. Click button that calls action with relative URL redirect, note that the action result isn't logged (expected) 4. Click buttons that calls action with redirect to external URL, return value is logged as `undefined` ![image]([link]) ### Current vs. Expected behavior **Current** Server actions that redirect to external URLs return `undefined` to the client component, even if the action itself returns a real value **Expected** Server actions with redirects behave…

### CASE-5575 · Dynamic Layout with Suspense hangs after 2nd navigation in Next 15
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce ```bash npm install npm run dev ``` ## To Reproduce Navigate to [[link]]([link]) 1. "Now Page" loads fine initially 2. Click "Home Page" 3. Click "Now Page", it is stuck at the suspense and never makes the API call [Video of bug starting from Now Page]([link]) **If you start at the Home Page things work fine** Navigate to [[link]]([link]) 1. Click on "Now Page", it works 2. Click on "Home Page" 3. Click on "Now Page" again, it works [Video of things working starting from Home Page]([link]) ### Current vs. Expected…

### CASE-5577 · Docs: Scroll Restoration broken
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍6 💬10 · closed · labels: Linking and Navigating
- **Excerpt**: ### What is the documentation issue? When navigating through the Next.js documentation, there's an issue with the back button functionality that might be a bug in the APP router ## Steps to Reproduce 1. Go to [link] 2. Click on "Fetch API" in the content 3. Click on "Fetch API Reference" 4. Use the browser's back button [link] ### Is there any context that might help us understand? This video was recorded in Brave ### Does the docs page already exist? Please link to it. [link]

### CASE-5581 · [backport request] Backport fix of an already-fixed bug of next-swc
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug/SWC/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce just open the [stackblize online reproduce]([link]) ### Current vs. Expected behavior ```ts class Father { static instance = {}; static register() { return (target) => { class Wrapper extends target { constructor(props) { super({ ...props, }); } } this.instance = new Wrapper(); }; } private _a = 1; constructor() { this._a = 2; } } @user.register() class Son {} console.log(Father.instance._a); // 1, but why ??? ``` <img width="1509" alt="image" src="[link] framework]/assets/41773861/903141ec-3e34-47ee-bcf0-ae6268490979">…

### CASE-5585 · nextjs v14.2 cause errors on build
- **Principles**: P-A3, P-H1 · **Env**: opera, linux
- **Signals**: 👍2 💬10 · closed · labels: bug/Output/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Start the application for creating build `npm run build`. The build fails with the following errors: ![image]([link] framework]/assets/100783701/40b1b69a-f4ac-402b-9abb-bb14f5e0c719) (in codesandbox just open `build` tab to see an error) ### Current vs. Expected behavior I'm expecting building app without any errors, as it was the case on nextjs v14.1.4 ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]~1711393930~22.04~331756a SMP PREEMPT_DYNAMIC Mon M Available memory…

### CASE-5586 · Discrepancy in searchParams between server and client after clicking `Link`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone reproduction repo, run `pnpm install` and `pnpm dev` (or `pnpm build; pnpm start`). 1. Navigate to [link] in a new tab. Observe this page (no issues so far): <img width=371 src=[link] framework]/assets/608862/e1b58713-0464-45a9-ac14-05a2db62503a> 1. Click on `<Link />` components at the bottom of the page, observe changes in displayed values for `a` and `b`. All good still. [link] framework]/assets/608862/996ad1dc-442b-48d4-b08d-01251bac21b3 1. Navigate to a link that takes you to `/`, i.e. that unsets _both_ `a`…

### CASE-5589 · BUG: Can't load node-addon like @user/image in appDir api route
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍3 💬10 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. clone and run the repo 2. upload a image to `/image` will see the error in console ### Current vs. Expected behavior Currently the rust node addon could not be loaded correctly when using `route.ts` in App Router. ![CleanShot 2023-12-15 at 16 53 27@user]([link] framework]/assets/15878786/97145d05-b208-4281-b71e-d682211cb776) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64…

### CASE-5591 · Server Action Hydration issue
- **Principles**: P-A3, P-H1, P-F4 · **Env**: next.js
- **Signals**: 👍0 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Server Action Hydration issue in page under dynamic routes HTML from server: ![image]([link] framework]/assets/52459940/a6bdf03e-d8b3-4af3-b2a5-ac52f9a902e4) HTML After Hydration ![image]([link] framework]/assets/52459940/827cf8fe-a8ed-4f4d-a68d-b028636a97a5) ### Current vs. Expected behavior Current Behavoir: ![image]([link] framework]/assets/52459940/074ab2fd-694c-439c-bf2e-6b4ae1296dd5) Expected behavior No hydration error warning ### Verify canary release - [X] I verified that the issue exists in the latest Next.js…

### CASE-5593 · TypeError: Cannot read properties of undefined (reading 'toLowerCase')
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, next.js
- **Signals**: 👍1 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Run `npm run build` ### Current vs. Expected behavior Node 21: ![image]([link] framework]/assets/87252943/53e9033f-9af6-48f8-a038-bf44a577bd1f) Node 18: ![image]([link] framework]/assets/87252943/ced5cad2-3317-4f07-a47d-c08ace475880) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Sun, 15 Oct 2023 18:38:43 +0000 Binaries: Node: 21.0.0 npm: 10.2.0…

### CASE-5595 · Wrong import with prisma client and nextJest config
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍1 💬10 · closed · labels: bug/SWC/Testing/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Install dependencies 2. Run `yarn test` ### Current vs. Expected behavior Fails with the following error, reporting an import from `./client/client`, while the source file only has `./client`; ![image]([link] framework]/assets/5079334/c078d118-be87-4c84-8bf6-0a0e743157a8) ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.0.0: Fri Sep 15 14:41:34…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5505 · Next/Jest : Cannot override transformIgnorePatterns
- **Principles**: P-D1, P-D2, P-D3 · **Env**: next.js
- **Signals**: 👍2 💬11 · closed · labels: bug/Testing
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Relevant in any environment ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug The way `next/jest` is implemented, ([See here]([link] framework]/blob/canary/packages/next/build/jest/jest.ts#L124)), there is no way to force jest to transpile modules inside node_modules. When trying to import node_modules who need to be transpiled (e.g the openlayers module `ol`), jest…

### CASE-5583 · /manifest.webmanifest not cached by browser and reloaded on every page transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍14 💬10 · open · labels: bug/Metadata
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. npm run dev 2. navigate between pages 3. manifest.webmanifest is loaded on every page ### Current vs. Expected behavior Ideally a hash would be added to the manifest URL (current first): ```HTML <link rel="manifest" href="/manifest.webmanifest"> <link rel="manifest" href="/manifest.webmanifest?hash"> ``` This allows using immutable versions of the manifest. In addition the cache-control value should be modified (current first): ``` public, max-age=0, must-revalidate public, max-age=31536000, immutable ``` ### Provide…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5529 · Image not showing
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: chrome, edge, firefox, opera, windows, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? ^11.0.1 ### What version of Node.js are you using? v14.17.1 ### What browser are you using? Chrome , Edge, Firefox ### What operating system are you using? Windows 10 ### How are you deploying your application? Vercel ### Describe the Bug Image is not showing. if I use layout="responsive" property. ### Expected Behavior Image should be show responsively. ### To Reproduce I don't know.

### CASE-5570 · async getInitialProps on Layout not working
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Hi, Can layout and children component both be async, I am trying out but it seems that only children component getInitialProps is getting called. Please verfiy. ./components/layout.js ``` export default class Layout extends React.Component { static async getInitialProps (props) { const headerResponse = await fetch(someapi) console.log(headerResponse) return {...props, headerData: "headerResponse"} } render() { const {headerData, children} = this.props return ( <div> <Head> <title>Next js test</title> <meta charSet='utf-8' /> <meta name='viewport' content='initial-scale=1.0,…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-5552 · Sass @user statements don't work
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬11 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug A clear and concise description of what the bug is. In my `global.scss` file that is imported by `src/pages/_app.tsx`: ```sass @user '@user/textfield/mdc-text-field'; @user '@user/select/mdc-select'; body { margin: 0; padding: 0; outline: 0; overflow-x: hidden; } ``` Those `@user` statements fail however because the default `sass-loader` cannot find those stylesheets: ``` [ error ] ./src/pages/global.scss…

### CASE-5555 · Next 9: The server never responds when there's no pages in the directory like the tutorial suggests
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: # Description Based on a new [Stack Overflow question]([link]), I decided to try the ["Getting started"]([link]) of Next (which I never did after more than a year working with it). # To reproduce Follow the steps of [the tutorial]([link]) closely ([documentation source file]([link])) > To start, create a sample project by running the following commands: > > ```bash > mkdir hello-next > cd hello-next > npm init -y > npm install --save react react-dom next > mkdir pages > ``` > > Then open the "package.json" in the hello-next directory and add the following NPM script. > > ```json > "scripts":…

### CASE-5600 · Pages route suddenly fails with Headers Overflow Error.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍3 💬10 · closed · labels: please add a complete reproduction/Upstream/bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:19 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T8103 Binaries: Node: 18.16.1 npm: 9.7.2 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.19 eslint-config-next: 13.4.19 react: 18.2.0 react-dom: 18.2.0 typescript: 5.2.2 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App Router ### Link to the code…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5573 · Error: Failed to load font file, Unknown font format when using next/font/local
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, windows, react
- **Signals**: 👍0 💬10 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application "npm run dev" 2. Errors "Failed to load font file: (path) Unknown font format" will appear in console ### Current vs. Expected behavior Expect no errors ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Available memory (MB): 16244 Available CPU cores: 12 Binaries: Node: 23.4.0 npm: 10.9.2 Yarn: N/A pnpm: N/A Relevant Packages: next: 15.1.1 // Latest available version is detected (15.1.1). eslint-config-next: N/A react: 19.0.0…

### CASE-5576 · Fonts from next/font/google stopped working suddenly on localhost (dev mode)
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍4 💬10 · closed · labels: please add a complete reproduction/examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 24.0.0: Mon Aug 12 20:54:26 PDT 2024; root:xnu-11215.1.10~2/RELEASE_ARM64_T8112 Binaries: Node: 20.12.2 npm: 10.5.0 Yarn: 4.1.1 pnpm: N/A Relevant Packages: next: 14.1.0 eslint-config-next: 14.2.5 react: 18.3.1 react-dom: 18.3.1 typescript: 5.3.3 Next.js Config: output: N/A ``` ### Which example does this report relate to? no ### What browser are you using? (if relevant) _No…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5578 · TypeError: Cannot read properties of null (reading 'useContext')
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, react, webpack
- **Signals**: 👍13 💬10 · closed · labels: bug/Webpack/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. npm install 2. next build ### Current vs. Expected behavior Error occurred prerendering page "/". Read more: [link] TypeError: Cannot read properties of null (reading 'useContext') > Export encountered errors on following paths: /_error: /404 /_error: /500 /_not-found /favicon.ico/route: /favicon.ico /page: / ### Provide environment information ```bash operating system: windows node version: v20.9.0 next version: 14.2.5 react version: @user.3.1 ``` ### Which area(s) are affected? (Select all that apply) Webpack ###…

### CASE-5587 · nextJS API route.ts stuck on await request.formData()
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬10 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Upload a multipart form data and wait on it. This works locally, but when you deploy it to Vercel, it just hangs. If you switch to JSON instead of multipart form data, it works fine. So its not an issue of the bytes taking too long in flight. ### Current vs. Expected behavior I expected the `await request.formData()` to take as long as a similarly sized `request.json()`, but it regularly times out. ### Provide environment information ```bash Downloading registry.npmjs.org/next/14.1.4: 20.77 MB/20.77 MB, done Downloading…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-5584 · Mismatch of names in grid-template-areas and grid-area across different css modules with --turbo
- **Principles**: P-A2, P-A4, P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬10 · closed · labels: bug/Turbopack/linear: turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start dev server with --turbo flag 2. Observe devtools for different names of grid areas in grid and in cards, incorrect visuals ### Current vs. Expected behavior Expected: areas have same name in grid and cards Current: area names mismatch. Grid will append its module name to grid-template-area, but card will append its module name to grid-area. Since they are different names, browser will not put cards into grid correctly. Example of area name in grid: ![image]([link]…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-5594 · App router time base revalidation failure
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍19 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Build the application (yarn build) 2. Start the production server (yarn start) 3. Refresh the page a bunch of times 4. Open a private tab or a new browser (bypass cache) 5. Check the result ### Current vs. Expected behavior The result should be revalidated based on: ``` export const revalidate = 1 ``` but after some refreshes, it stops updating and returns a totally empty page. If it is stale in your current tab, try it in another browser or a private tab to bypass the browser cache and you'll see the empty page rather…

### CASE-5598 · Server running out of memory with 13.4.19
- **Principles**: P-F5, P-H3 · **Env**: opera, next.js
- **Signals**: 👍2 💬10 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] framework] ### To Reproduce Still having `Server running out of memory` issue on 13.4.19 with App Router. Nextjs team what are you doing to fix this? Its been really long and still there are issue with this. How are you testing your version when you say App Router is stable but clearly its not... ### Current vs. Expected behavior Don't have memory leak issues ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-5596 · CSS "@user <file> layer()" isn't working
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, next.js
- **Signals**: 👍30 💬10 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a file with some CSS declarations, e.g. theme.css 2. In another CSS file used in the app (e.g. `global.css`) add `@user './theme.css' layer(theme)` 3. Start the app if it's not already running ### Current vs. Expected behavior Expected behaviour: All styles from `theme.css` are applied. Actual behaviour: No styles from `theme.css` are applied. ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System:…

