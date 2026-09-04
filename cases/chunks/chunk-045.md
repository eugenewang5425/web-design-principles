# Case Chunk 045 — Round 45

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-5401 · Dynamic routes failing in 13.1.2 "Error: invariant: invalid Cache-Control duration provided: 0 < 1"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react
- **Signals**: 👍25 💬12 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.1.3-canary.0 eslint-config-next: 13.0.5 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To…

### CASE-5440 · Cannot use declared variables in import inside dynamic callback
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug I'm currently using `v9.5.0` and when attempting to use a variable defined inside the callback of `dynamic` it throws an error: `ReferenceError: locale is not defined`. Although if I move the variable definition to outside the function it works fine. ## To Reproduce Code snippet: Failed example: ```javascript const DynamicComponent = dynamic( () => { const locale = getUserLocale(); console.log(locale); // It doesn't even reach here ... return import(`~/translations/${locale}.json`) .then(handleFileContent) }, { loading: () => <p>Loading...</p>, ssr: false } )…

### CASE-5450 · Error with Apollo data fetching and Next 9
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍21 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug After upgrading to Next 9, I've encountered an issue when I am trying to use Apollo together with `getInitialProps` on client-side as well (e.g. condition on this [line]([link]) is removed). When clicking between pages, which are trying to fetch data inside `getInitialProps` an error: `Error while running getDataFromTree Invariant Violation: ReactDOMServer does not yet support Suspense.` occurs. ![image]([link]) ## To Reproduce Repo: [link] 1. Start app 2. Open console and click between pages ## Expected behavior Fetch data without the error. ## System…

### CASE-5467 · Docs: local fonts docs incorrectly mention public folder
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: typescript
- **Signals**: 👍4 💬11 · closed · labels: locked
- **Excerpt**: ### What is the documentation issue? The docs for local fonts say: > To use a local font, import your font from next/font/local and specify the src of your local font file in the [public folder]([link]). found here [link] This example shows usage of path defined relative to the public folder. Trying that, I get a "module not found" error. ```typescript const ledDotMatrix = localFont({ src: "./fonts/LED_Dot-Matrix.woff2", display: "swap", variable: "--font-dot-matrix", }); ``` I also tried `/fonts/...`, but same error. ### Is there any context that might help us understand? So I think the…

### CASE-5476 · Empty `NEXT_PUBLIC_*` environment variables are evaluated as `undefined` rather than as empty strings
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera
- **Signals**: 👍9 💬11 · closed · labels: bug/Output/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run `pnpm exec next dev` 2. Observe that the website is displaying `process.env.NEXT_PUBLIC_FOO: undefined`. ### Current vs. Expected behavior I expected `process.env.NEXT_PUBLIC_FOO: ` to be displayed instead, since the `.env` file contains `NEXT_PUBLIC_FOO=`. The environment variable is defined as an empty string, but it's not being evaluated as one. I find it surprising that environment variables that are defined as empty strings be treated as undefined. ### Provide environment information ```bash Operating System:…

### CASE-5488 · Environment variables are loaded twice in `output: standalone`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍6 💬11 · closed · labels: bug/Output/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:19 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T8103 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: 8.6.3 Relevant Packages: next: 13.4.10-canary.6 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A Next.js Config: output: standalone ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Standalone…

### CASE-5492 · NextJS wrongly parses absolute URL when concatenating with .env variable - Unexpected resources are added after top-level domain/server port
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos, react, next.js
- **Signals**: 👍0 💬11 · closed · labels: bug/locked/not stale
- **Excerpt**: ### Provide environment information ```bash // MacOS Ventura 13.2 > next info Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Thu Jan 5 20:48:54 PST 2023; root:xnu-8792.81.2~2/RELEASE_ARM64_T6000 Binaries: Node: 18.13.0 npm: 8.19.3 Yarn: N/A pnpm: N/A Relevant packages: next: 13.2.3 eslint-config-next: 13.2.3 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue company private, sorry =/ ### To Reproduce 1. Create an env variable…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-5402 · ..ReferenceError: self is not defined on edge runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information PS C:\dev\dps\test\my-app> npx next info Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 18.12.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.6 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to reproduction - Issues with a link to complete (but minimal) reproduction code will be…

### CASE-5403 · Random Vercel runtime errors invariant: invalid Cache-Control duration provided: 0 < 1
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, chrome 107, next.js, react
- **Signals**: 👍8 💬12 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 Binaries: Node: 16.18.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.15.0 Relevant packages: next: 13.0.5-canary.2 eslint-config-next: 13.0.4 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 107.0.5304.110 ### How are you deploying your application? (if relevant) Vercel ### Describe…

### CASE-5404 · If the Link tag is used in layout.tsx when the app directory is enabled, an error occurs if an event occurs during page loading.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 107, linux, next.js, react
- **Signals**: 👍12 💬12 · closed · labels: Upstream
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: arm64 Version: [ref] SMP PREEMPT Tue Mar 23 09:24:45 UTC 2021 Binaries: Node: 19.0.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.0.3-canary.3 eslint-config-next: 13.0.1 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 107.0.5304.110 ### How are you deploying your application? (if relevant) local(Docker), codesandbox ### Describe the Bug If the app directory is…

### CASE-5405 · Next.js 13 Using a Loading UI alongside an async Server Component with SCSS module generates a runtime syntax error (unexpected token: string literal)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 106, windows, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 18.12.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.3-canary.2 eslint-config-next: 13.0.2 react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) Firefox 106.0.5 (64-bit) ### How are you deploying your application? (if relevant) next dev ### Describe the Bug In `next dev` mode, when a scss module is imported and its styles are…

### CASE-5408 · Server side page si not generated in lingui example
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: good first issue/examples/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:45:05 PDT 2022; root:xnu-8020.101.4~15/RELEASE_X86_64 Binaries: Node: 16.15.0 npm: 8.5.5 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.7-canary.2 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug I'm using the lingui example: [link]…

### CASE-5410 · Invalid "Native Node.js APIs are not supported in the Edge Runtime" error message
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: Webpack
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 19.6.0: Tue Feb 15 21:39:11 PST 2022; root:xnu-6153.141.59~1/RELEASE_X86_64 Binaries: Node: 16.14.0 npm: 8.3.1 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.1.6-canary.3 react: 18.0.0 react-dom: 18.0.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug When there is a page like the…

### CASE-5411 · next/head order changed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, chrome, next.js, react
- **Signals**: 👍0 💬12 · closed · labels: bug/Script (next/script)/Metadata
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.2.0: Sun Nov 28 20:28:54 PST 2021; root:xnu-8019.61.5~1/RELEASE_X86_64 Binaries: Node: 16.13.0 npm: 8.1.0 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.1.0 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) firefox, chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug If I add a `<Head />` component in…

### CASE-5412 · Next/Image Onload Event reports zero natural height and width when lazy in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, firefox 97, next.js
- **Signals**: 👍0 💬12 · closed · labels: Image (next/image)/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information next:12.1.1-canary.1 node: v16.13.2 ### What browser are you using? (if relevant) Firefox 97.0.1 ### How are you deploying your application? (if relevant) npm run dev ### Describe the Bug Hello and thanks again for merging my 2nd pull request! Currently I have a strange but annoying issue, not sure if it's only browser related. When I use onLoadingComplete I get wrong naturalWidth and naturalHeight properties, they are both zero or one. That happens currently ONLY in…

### CASE-5413 · Dynamic import named component Typescript error | Dynamic export using Promise resolve results in warning "Did not expect server HTML to contain a ..."
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, linux, typescript, react, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT Thu, 27 Jan 2022 14:18:25 +0000 Binaries: Node: 16.13.2 npm: 8.4.0 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ``` ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 16.13.2 ### What browser are you using? Google Chrome Version 99.0.4844.11 (Official Build) dev (64-bit) ### What operating system are you using? Linux (Arch) ### How are you deploying your application? next…

### CASE-5414 · Custom webpack config doesnt allow importing static assets from css
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, webpack, react, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug/Webpack
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:23 PDT 2021; root:xnu-8019.41.5~1/RELEASE_X86_64 Binaries: Node: 14.18.1 npm: 8.1.3 Yarn: 1.22.5 pnpm: 6.23.2 Relevant packages: next: 12.0.9 react: 18.0.0-rc.0-next-fe905f152-20220107 react-dom: 18.0.0-rc.0-next-fe905f152-20220107 ### What version of Next.js are you using? 12.0.9 ### What version of Node.js are you using? 14.18.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you…

### CASE-5416 · `loadConfig` mutates the `imageConfigDefault` object
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.13.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug Inside of `assignDefaults` function we merge and copy `defaultConfig` with the passed in `config`. ```ts // [link] framework]/blob/v12.0.7/packages/next/server/config.ts#L14 const result = { ...defaultConfig, ...config } ``` Then later mutates `result` by assigning sub-properties. ```ts // [link]…

### CASE-5417 · next/script eslint-plugin-next Cannot read property 'name' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍1 💬12 · closed · labels: good first issue/Linting
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 14.17.5 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next start ### Describe the Bug When I'm using spread operator for `<Script>` tag, I got an error: ``` at \node_modules\@user\eslint-plugin-next\lib\rules\inline-script-id.js:34:43 at Array.some (<anonymous>) at JSXElement (\node_modules\@user\eslint-plugin-next\lib\rules\inline-script-id.js:33:22) at \node_modules\eslint\lib\linter\safe-emitter.js:45:58 at…

### CASE-5418 · Error page if url contains percentage, which happens on redirection with non ascii characters in url
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍2 💬12 · closed · labels: Linking and Navigating/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 12 ### What version of Node.js are you using? 12.22.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug we get 400 Bad request if page contains "%", we also don't get error/issue on terminal it just compiles _error ![image]([link]) This occurs because we are redirecting url's with non ascii characters, our page old-page/à becomes page/%E0 ``` return { redirect: { destination: `/page/${query?.id || ""}`, permanent: false, }, }; ``` I think…

### CASE-5419 · 500 Error can not use getInitialProps with getStaticProps after updated react 18, next 12
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, react, next.js
- **Signals**: 👍1 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.4 ### What version of Node.js are you using? 16.13.0 ### What browser are you using? chrome ### What operating system are you using? macOS ### How are you deploying your application? next dev ### Describe the Bug I updated react to version `0.0.0-experimental-149b420f6-20211119` (I heard it as a newest experimantal version, 18) due to use a suspense for my project. (I don't have a plan to use a server component). So I followed all the steps [React 18]([link]) And also I updated next to v12 But I couldn't get a beta version through `npm install…

### CASE-5420 · [middlewares via Edge Functions] fetch is not complete, runtime is not addressable
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, opera, macos, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug/Runtime
- **Excerpt**: ### What version of Next.js are you using? 12.0.4-canary.15 ### What version of Node.js are you using? v14.18.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug Cloudflare Workers, which powers Edge Functions, has a caveat in the `fetch` implementation. The `referrerPolicy`, `credentials`, and `mode` options cannot be used. When used the code will throw/reject. This is fine in Cloudflare Workers since it's easy to detect that javascript runtime using something along the lines of…

### CASE-5421 · Unable to build app in 12.0.1 with concurrentFeatures enabled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍5 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? Attempted: `v12.0`., `v12.0.2-canary.2` and `v12.0.2-canary.11` ### What version of Node.js are you using? Attempted: node/14.18.1 and node/16.13.0 ### What browser are you using? Chrome (N/A) ### What operating system are you using? macOS Monterey ### How are you deploying your application? Vercel ### Describe the Bug When updating from v12.0.0 to v12.0.1 it broke `next build` and `next dev’. `next lint` still works Looking into the canary versioned packages: "12.0.1-canary.0" - WORKS "v12.0.1-canary.1" - DOES NOT WORK So it could possibly be: [ref]…

### CASE-5422 · Images load correctly when run locally, but give 404 & 'Invalid image parameters' when deployed
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 12.16.1 ### What browser are you using? Chrome ### What operating system are you using? Windows 10 ### How are you deploying your application? Netlify ### Describe the Bug When my project is run locally, the images render correctly, but when it is deployed they are not found. When I open up the network tab, the attempted image retrieval gives a 404 error and opening the URL used to GET the image gives an 'Invalid image parameters' error. Deployment [can be found here]([link]) and error can be seen…

### CASE-5423 · Compiling error: Did you mean to import react/jsx-runtime.js - 11.1
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, react, next.js, webpack
- **Signals**: 👍2 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.0 ### What version of Node.js are you using? 12.22.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? local ### Describe the Bug After upgrading the Next to 11.1.0 isn't more possible to run my application. I'm receiving the error below: ```bash ready - started server on 0.0.0.0:3000, url: [link] info - Loaded env from /Users/candidosg/Documents/Projects/-/.env.local info - Using webpack 5. Reason: Enabled by default [link] event - compiled successfully event -…

### CASE-5424 · Eslint `plugin:@user/next/recommended` does not work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 16.3.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? npm run lint ### Describe the Bug Extending the recommended configuration of next eslint (`plugin:@user/next/recommended` [link]) and executing` npm run lint` does not work correctly the linter. Instead using in extends `next` works as expected. ### Context I have eslint set using Airbnb style rules and I want to add the corresponding style rules to Next.js ```json {…

### CASE-5425 · eslint with nextjs 11 not working when following official blog
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, next.js
- **Signals**: 👍3 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11 ### What version of Node.js are you using? 16.3.0 ### What browser are you using? chrome ### What operating system are you using? ubuntu ### How are you deploying your application? docker ### Describe the Bug the command fails : ```$> npx next lint No such directory exists as the project root: /xxxx/nextjs-blog/lint ``` ### Expected Behavior lintings files ### To Reproduce following the official blog 👍 [link] i run : ``` npx create-next-app nextjs-blog --use-npm --example "[link] cd nextjs-blog npx next lint ``` which gives the error

### CASE-5426 · Next.js i18n routing generates api routes for each locale in Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, macos, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? v14.17.0 ### What browser are you using? firefox / chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug When using internationalization config, Next.js api route serverless function are generated by Vercel with locale prefixes. For example, if you have three locales in your `next.config.js` of 'en', 'fr', and 'de', a single api route `/api/hello` will generate: - `en/api/hello` - `fr/api/hello` - `de/api/hello` This causes issues…

### CASE-5427 · Getting "Error: Cannot find module '/app/.next/server/font-manifest.json'" on production build
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, ubuntu, next.js, webpack
- **Signals**: 👍0 💬12 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 12.20.0 ### What browser are you using? Chrome ### What operating system are you using? Ubuntu ### How are you deploying your application? Code Build ### Describe the Bug I am getting the following error on 10.2, working on 10.1.3 ready - started server on 0.0.0.0:3000, url: [link] info - Using webpack 5. Reason: no next.config.js [link] Error: Cannot find module '/app/.next/server/font-manifest.json' The font-manifest.json does not exist after a build. This happens on a fresh build in our CD…

### CASE-5428 · Issue with backend-side ES6 imports with "type":"module" with an express/nextjs setup
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍14 💬12 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? 15.9.0 ### What browser are you using? Chrome ### What operating system are you using? MacOS ### How are you deploying your application? Running locally via express ### Describe the Bug I have an Express.js server that sets up Next.js, and I want to use ES6 modules with my backend. My package.json has the line `"type": "module"`, which enables ES6 module support in Node.js. Everything is imported fine, but when I try to load a page, I get the following exception: ``` error - Error [ERR_REQUIRE_ESM]:…

### CASE-5429 · Image is missing required "src" property, but stack trace does not inform where
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, opera, linux, next.js
- **Signals**: 👍5 💬12 · closed · labels: Image (next/image)
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? 15.11.0 ### What browser are you using? Firefox ### What operating system are you using? Linux ### How are you deploying your application? next dev ### Describe the Bug Some image in the middle of the hundreds of images I have has an empty src. The error message helps nothing to find this particular image: ``` Error: Image is missing required "src" property. Make sure you pass "src" in props to the `next/image` component. Received: {} at Image…

### CASE-5430 · Firebase - Image Component Images Fail on Read with 500 Error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, next.js
- **Signals**: 👍5 💬12 · closed · labels: good first issue/examples
- **Excerpt**: ### What example does this report relate to? [link] ### What version of Next.js are you using? 10.0.8 ### What version of Node.js are you using? 12.0.0 ### What browser are you using? Chrome ### What operating system are you using? n/a ### How are you deploying your application? Firebase ### Describe the Bug When hosting the example, images do not render and fall back to the alt text instead. They fail with a 500 error that is shown below in repro steps. From what I can tell, the image component is trying to unlink an existing symlink to the cache (assuming to create a new cache entry?) and…

### CASE-5431 · Cache headers on 404 pages with getStaticProps
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍7 💬12 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 14.15.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** Other platform **Describe the Bug** The 404 error page responds with the cache headers `cache-control: s-maxage=31536000, stale-while-revalidate` when the getStaticProps function is exported. This could be a problem when the resource is temporary unavailable. **Expected Behavior** The cache headers for the 404 responses should be `cache-control: public, max-age=0,…

### CASE-5432 · Overwritten Cache-Control headers should include public directive
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, safari, opera, macos, next.js
- **Signals**: 👍13 💬12 · closed · labels: bug/locked/stale
- **Excerpt**: **What version of Next.js are you using?** 10.0.7-canary.3 **What version of Node.js are you using?** 15.7.0 **What browser are you using?** Chrome, Safari, curl **What operating system are you using?** macOS **How are you deploying your application?** next build, next start **Describe the Bug** Cache-Control headers are overwritten to be: `Cache-Control: s-maxage=31536000, stale-while-revalidate`. This header should include the `public` directive so that CDNs will cache the response. As an aside, headers are not overwritten consistently. If I have the following config: ```js //…

### CASE-5433 · Allow scroll-to-top with shallow routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 84, opera, ubuntu, next.js
- **Signals**: 👍7 💬12 · closed · labels: good first issue
- **Excerpt**: **What version of Next.js are you using?** 10.0.6-canary.9 **What version of Node.js are you using?** 14.15.4 **What browser are you using?** Firefox 84 **What operating system are you using?** Ubuntu 20.04 **How are you deploying your application?** Vercel **Describe the Bug** Recently (i think 10.0.6-canary.8) the behavior for shallow routing was changed to *not* scroll-to-top anymore. While this makes sense as a default behavior, it should still be possible to force scrolling by providing `<Link shallow scroll>` or `router.push(path, undefined, { shallow: true, scroll: true )`. **Expected…

### CASE-5434 · Failed to proxy/rewrite self-signed https url
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge 88, opera, macos, next.js
- **Signals**: 👍3 💬12 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 12.20.0 **What browser are you using?** Edge 88.0.705.50 **What operating system are you using?** MacOS 11.0.1 **How are you deploying your application?** next dev **Describe the Bug** Setting environment variable NODE_TLS_REJECT_UNAUTHORIZED=0 does nothing to do with the "rewrites" configuration of next.config.js **Expected Behavior** When NODE_TLS_REJECT_UNAUTHORIZED=0 is set, proxies should not be rejected by "self signed certificate" **To Reproduce** 1. Set rewrites to proxy an self-signed…

### CASE-5435 · next/image does not work with assetPrefix
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 87, opera, macos, next.js
- **Signals**: 👍23 💬12 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14.5.0 **What browser are you using?** Chrome 87 **What operating system are you using?** macOS **How are you deploying your application?** local production build **Describe the Bug** I dug through the docs and found only 1 CDN related config is `assetPrefix`, but `assetPrefix` only redirect js and css files to the CDN server. From what I saw in the next/image RFC, I think it's reasonable to let `next/image` redirect local images to the CDN server. After setting `assetPrefix` in the config file: ```js…

### CASE-5441 · The basePath is repeated twice in URL with query params
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 85, macos, next.js
- **Signals**: 👍15 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug The basePath is repeated twice in URL when we add query parameters. Say we have set `basePath: '/base'` in `next.config.js`, if we enter the `/base?foo=bar`, it changes to the `/base/base?foo=bar`. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Run the [[link]]([link]) 2. Navigate to [[link]]([link]) ## Expected behavior The URL should remain unchanged. I.e. `/base?foo=bar`. ## Screenshots ## System information - OS: macOS 10.14.5 - Browser (if applies) Chrome 85 - Version of Next.js: 9.5.3 - Version of…

### CASE-5443 · Microsoft Edge 16-18 missing "flat" polyfill
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge 16, edge 18, edge 17, windows, next.js
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug When loading out Next site with Edge 18, there is a critical `TypeError` stating `Object doesn't support property or method 'flat'` ## To Reproduce 1. Go to [link] in Edge 18 2. Notice the full-screen critical error * View our public sentry issue here: [link] ## Expected behavior This page should load properly like all other browsers were able to ## Screenshots ![image]([link]) ## System information - OS: Windows - Browser: Edge 18, Edge 17, Edge 16 (see [Sentry Issue]([link]) for browser breakdown) - Version of Next.js: 9.3.1 ## Additional context This issue…

### CASE-5444 · 500 Internal Server Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug I'm building up a next.js app with Now and getting a `500 Internal Server Error.` even though the project is building up with no problems, locally and on Now as well. ## To Reproduce I'm not sure how to reproduce the issue, the solution described on [link] does not fix the problem. ## Expected behavior Informative logs since right now it's not showing any error or the issue fixed in case this is a bug. ## System information - OS: macOS - Browser: Chrome - Version of Next.js: 9.2.1 ## next.config.js ``` const withPlugins = require('next-compose-plugins'); const…

### CASE-5447 · ValidationError: Invalid options object. CSS Loader has been initialised using an options object that does not match the API schema
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos, next.js
- **Signals**: 👍5 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug When upgrade to v9.0.7. `css-loader` throw an API schema error. It won't happens in v9.0.6. Seems `minimize` has been removed from the options of `css-loader` (see [here]([link])) ## To Reproduce 1. yarn upgrade next.js@^9.0.7 2. yarn dev ## Expected behavior app compiled success ## Screenshots <img width="984" alt="螢幕快照 2019-09-30 下午1 40 57" src="[link]> ## System information - OS: macOS - Browser: chrome - Version of Next.js: 9.0.7

### CASE-5449 · example with-apollo-auth is broken
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, linux
- **Signals**: 👍0 💬12 · closed · labels: good first issue
- **Excerpt**: # Bug report Missing prop on `withData` ## Describe the bug A clear and concise description of what the bug is. ![image]([link]) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. `yarn dev` 2. Watch the console on canary branch ## Expected behavior To not have a warning. A clear and concise description of what you expected to happen. ## Screenshots ![image]([link]) ## System information - Linux (Manjaro) - Chrome - Node [v11.15.0] ## Additional context Add any other context about the problem here.

### CASE-5451 · nextjs static file not found 404 when using nginx reverse proxy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, windows, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug I am following the guide regarding deploying with nginx reverse proxy. [link] but the static file (css, js) are not found when i access the website from the reverse proxy one. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: Deploying with Nextjs. and Using nginx reverse proxy. ## Expected behavior A clear and concise description of what you expected to happen. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g. chrome, safari] - Version of Next.js: 8.0.4

### CASE-5454 · Links to some pages are hanging on navigation with `next-css` plugin
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍4 💬12 · closed
- **Excerpt**: # Bug report When attempting to navigate to some pages with a simple `<Link href='...'/>`, the page hangs and things break. - Go to [link] - Navigate around using the top nav bar - Go to the footer and click on the three links that contain "API Docs" - Observe the console and network tab ## Expected behavior The navigation should succeed. ## System information - OS: macOS - Browser: Chrome - Version of Next.js: 9@user ## More Information The repo for this website can be found at [link] on the master branch.

### CASE-5457 · SyntaxError: Strict mode does not allow function declarations in a lexically nested statement in IOS 9.x.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 4, safari, ios 9, ios8, ios9, next.js
- **Signals**: 👍15 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug SyntaxError: Strict mode does not allow function declarations in a lexically nested statement in IOS 9.x. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. install next.js 8.1.0 2. build and start server 3. open page in ios8 or ios9 safari 4. See error ## Expected behavior page should work. ## Screenshots ![image]([link]) ![image]([link]) ## System information - OS: ios8, ios9 - Browser: safari - Version of Next.js: 8.1.0

### CASE-5458 · componentDidMount not work on build mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, react, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report The componentDidMount method no execute on production mode ## Describe the bug The method does not run in build mode. In the dev method yes. ## To Reproduce 1. create a page `class Index extends React.Component { componentDidMount() { alert('Hola'); } render() { return 'hello'; } }` 2. execute dev mode and check the alert() 3. execute build and start, after check the alert() 4. componentDidMount not work ## Expected behavior I was waiting for the alert() ## System information - OS: macOS - Browser: chrome - Version of Next.js: 8.0.3 Thanks!

### CASE-5461 · Next.js doesn't work properly in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: When I try to run my next app on Safari, I get this error in the console and it makes the app not function properly. ``` SyntaxError: Unexpected keyword 'const'. Const declarations are not supported in strict mode. ``` ## System information - OS: macOS - Browser: Safari Version 9.1.2 (11601.7.7) - Version of Next.js: 6.1.0 ## Additional context I've searched online and found the same issue with no solution, the only reasonable solution was to use `babel.js - browser targets`, however that breaks the app badly and it doesn't even build.

### CASE-5466 · Latest Safari freezes when opening devtools for projects using webpack
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 18, macos, webpack, next.js, typescript, tailwind
- **Signals**: 👍19 💬11 · closed · labels: Webpack/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] _(this is an unmodified, default next.js app, generated by `npx create-next-app@user`)_ ### To Reproduce 1. Be on latest MacOS Sequoia 15.4 and Safari 18.4 1. Create a new app with `npx create-next-app@user` - I used the following settings. The only setting that seems to matter is that you choose Webpack for the bundler. ``` ✔ What is your project named? … next-bug-safari-deleteme ✔ Would you like to use TypeScript? … Yes ✔ Would you like to use ESLint? … Yes ✔ Would you like to use Tailwind CSS? … Yes ✔ Would you like your code inside a…

### CASE-5477 · Edge runtime causing terser panic due to top level await
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera
- **Signals**: 👍9 💬11 · closed · labels: bug/SWC/Runtime/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run `npm run build` 2. Observe error in console ``` ./node_modules/.prisma/client/wasm-edge-light-loader.js The generated code contains 'async/await' because this module is using "topLevelAwait". However, your target environment does not appear to support 'async/await'. ``` ### Current vs. Expected behavior I expect no error to be thrown ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.4.0: Fri Mar 15 00:12:25 PDT 2024;…

### CASE-5480 · unstable_cache Value Not Revalidating in Edge Runtime within Suspense Boundary on Vercel
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: edge
- **Signals**: 👍6 💬11 · closed · labels: bug/Runtime/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The problem doesn't happen for a local build or development mode 1. Visit this link: [link] 2. There's a problem with the route: [link] It's supposed to fetch the current time and then fetch it again every 10 seconds. Even though the page waits 200ms before showing the time, it doesn't refresh the time after the first 10 seconds have passed. 3. However, on the route: [link] without adding a delay (no 200ms wait time), the time updates correctly every 10 seconds. 4. In contrast, the route: [link] which uses a different…

### CASE-5484 · Custom server + App router doesn't run in dev mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react, webpack
- **Signals**: 👍2 💬11 · closed · labels: bug/Output/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce 1. `npx create-next-app@user` 2. Install canary `npm i next@user` 3. Add custom server ([link]) 4. Switch dev script to use `node server.js` 5. Run `npm run dev` ### Current vs. Expected behavior App should work. What happens? ``` ❯ npm run dev > [email] dev > node server.js ✓ ready > Ready on [link] ○ compiling /page ... X Error: Cannot find module 'react-server-dom-webpack/client.edge' Require stack: -…

### CASE-5489 · Using middleware with compress: false will result in empty page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux, next.js, react, typescript
- **Signals**: 👍16 💬11 · closed · labels: bug/Runtime
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 18.14.2 npm: 9.5.0 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.4-canary.10 eslint-config-next: 13.4.1 react: 18.2.0 react-dom: 18.2.0 typescript: 5.0.4 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue or a replay of the bug…

### CASE-5490 · Safari 12-13 broken due to "Can't find variable: BigInt"
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari 12, opera, next.js, react, typescript
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [ ] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.4.0: Mon Mar 6 20:59:28 PST 2023; root:xnu-8796.101.5~3/RELEASE_ARM64_T6000 Binaries: Node: 16.20.0 npm: 8.19.4 Yarn: 1.22.19 pnpm: 7.29.3 Relevant packages: next: 13.4.3-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: 4.9.5 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that…

### CASE-5491 · [NEXT-1162] Prefixing the default locale with middleware does not work on deployed vercel build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍15 💬11 · closed · labels: bug/Linking and Navigating/Runtime/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:42:11 PST 2023; root:xnu-8792.81.3~2/RELEASE_X86_64 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.18 pnpm: 8.3.1 Relevant packages: next: 13.3.5-canary.5 eslint-config-next: 13.3.1 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime), Routing (next/router,…

### CASE-5493 · [NEXT-541] Search params are concatenated to request pathname in RSC request.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍2 💬11 · closed · labels: Linking and Navigating/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Thu Jan 5 20:50:36 PST 2023; root:xnu-8792.81.2~2/RELEASE_ARM64_T6020 Binaries: Node: 19.5.0 npm: 9.3.1 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.1.7-canary.11 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime) ### Link to…

### CASE-5495 · [NEXT-667] Next 13 + Tailwind hot-reload of classes doesn't work in Firefox Browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, tailwind, next.js, react
- **Signals**: 👍12 💬11 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 19.3.0 pnpm: N/A Relevant packages: next: 13.1.2-canary.2 // Canary 3 and 4 wouldn't render a page for me, so I couldn't try with those. Have heard this issue from others as well though. eslint-config-next: 13.1.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue…

### CASE-5496 · diffrent behaviors for browsers when page is restored from bfcache
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, safari 16, chrome, next.js, react, desktop
- **Signals**: 👍13 💬11 · closed · labels: examples/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:54 PDT 2022; root:xnu-8792.41.9~2/RELEASE_X86_64 Binaries: Node: 16.19.0 npm: 8.19.3 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### Which example does this report relate to? using-router ### What browser are you using? (if relevant) desktop safari 16.1(18614.2.9.1.12), desktop chrome…

### CASE-5498 · Application error: a client-side exception has occurred (see the browser console for more information).
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍9 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:54 PDT 2022; root:xnu-8792.41.9~2/RELEASE_X86_64 Binaries: Node: 16.18.1 npm: 8.19.2 Yarn: N/A pnpm: 7.18.0 Relevant packages: next: 13.0.7-canary.1 eslint-config-next: 13.0.6 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Data fetching (gS(S)P, getInitialProps), Middleware / Edge (API routes, runtime) ###…

### CASE-5499 · 37-5b82c79181d94cdf.js:1 Uncaught (in promise) TypeError: number 0 is not iterable (cannot read property Symbol(Symbol.iterator))
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 105, next.js, react
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Binaries: Node: 16.17.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.3.1 eslint-config-next: 12.3.1 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) chrome 105.0.5195.127 ### How are you deploying your application? (if relevant) next start,vercel, netlify ### Describe the Bug When i use `next start` or use vercel/netlify to deploy my website,i got an error in console. ![image]([link]) ![image]([link]) When i switch…

### CASE-5500 · SSG with rewrite not getting passed page props for second rerender client side
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, next.js, react
- **Signals**: 👍0 💬11 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.6.0: Sat Jun 18 17:07:25 PDT 2022; root:xnu-8020.140.41~1/RELEASE_X86_64 Binaries: Node: 14.19.1 npm: 8.10.0 Yarn: 1.22.19 pnpm: 6.32.11 Relevant packages: next: 12.2.6-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 104.0.5112.79 ### How are you deploying your application? (if relevant) vercel ### Describe the…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-5406 · DehydratedState type error
- **Principles**: P-F4 · **Env**: next.js, react
- **Signals**: 👍11 💬12 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in the latest Next.js canary release "next": "12.2.5" Works "next": "^12.2.5" Fails "next": "latest" Fails (12.3.0) ### Provide environment information Binaries: Node: 17.6.0 npm: 8.5.1 Yarn: 1.22.10 pnpm: N/A Relevant packages: next: 12.2.5 eslint-config-next: 12.2.5 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) Amplify deploying SSR build using "next build" ### Describe the Bug Type error created when trying to reference…

### CASE-5407 · Triggering `validateDOMNesting` causes `Hydration failed`
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍1 💬12 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ```shell Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.4.0: Fri Mar 18 00:46:32 PDT 2022; root:xnu-8020.101.4~15/RELEASE_ARM64_T6000 Binaries: Node: 16.9.0 npm: 7.21.1 Yarn: 1.22.17 pnpm: N/A Relevant packages: next: 12.1.7-canary.3 react: 18.1.0 react-dom: 18.1.0 ``` ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug Any invalid DOM…

### CASE-5437 · Context declared in _app undefined during SSR in dev
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍6 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug Running into basically this issue [ref] here _sometimes_, only in dev. It's a fresh app, not much happening as of yet. A single context provider wrapping `Component` in app, and a index page using the context through a custom hook. The contexts initial value is null, but its filled through the provider. The custom hook throws on empty context value. ## To Reproduce Repo: [link] Steps to reproduce the behavior, please provide code snippets or a repository: 1. Check that repo out (branch `next`) 2. `yarn dev` 3. click the link in the console to localhost:3000 4.…

### CASE-5446 · Nextjs causing hard refresh when i click in the Link
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍8 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug I have an app react using CRA, and I am trying to turn it into an SSR app using next. So, since there is little, the only things I changed were: - getInitialProps instead of useEffect and useState - Link from "next / link" instead of using react router dom But when I click on the link, I get hard refresh. Here is what is generating the link: <Link href={post.meta.slug}> <a>{post.title}</a> </Link>; I also tried with `href={post.meta.slug} as={post.meta.slug}`. In my pages directory i have: - index.jsx - [slug].jsx And this is how I get the post in…

### CASE-5459 · Router context breaking change in v8.0.0-canary.6
- **Principles**: P-F4 · **Env**: react, next.js
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug The `next/router` migration to `React.createContext` in [link] (Next.js v8.0.0-canary.6) is a breaking change for the GraphQL SSR related examples such as [`with-graphql-react`]([link]) and probably [`with-apollo`]([link]). ## To Reproduce In the [`with-graphql-react`]([link]) example, update the `next` dependency to `8.0.0-canary.6` and replace the contents of `pages/index.js` with: ```jsx import { Query } from 'graphql-react' import { RouterContext } from 'next/router' export default () => ( <RouterContext.Consumer> {router => { console.log(router) return…

### CASE-5462 · Webpack plugin (Sentry's) breaks client side app
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: I'm trying to upload sourcemaps to sentry using their `sentry-webpack-plugin` and everything seams to be working fine, except that when I enable the plugin the app stop working on the client side. The SSR works, the scripts src points to the right paths and you can see the right content on those path. But the app doesn't work (it reload everything on each click). If I disable the plugin everything starts working again… I've set a minimal repo from a clean copy of one of next's examples and it happens there too, does someone know why this can be happening? You can find the test repo here:…

### CASE-5463 · Error: Invalid Build File Hash
- **Principles**: P-F4 · **Env**: typescript, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I find [issue[ref]]([link]) of this repository, but I can't repair this bug. I use Google Cloud AppEngine with multiple instances. First I change BUILD_ID (compile with typescript to dist directory), this is OK: `"create-build-id": "node -e \"process.stdout.write(require('./package.json').version)\" > dist/.next/BUILD_ID;"` No success. I try repair with [Handle-BUILD_ID-Mismatch-Error]([link]) No success. Error is in only Next.js 3.x in version 2.x is everything okay. Error stack trace: `Error: Invalid Build File Hash(330ff6344cd3331927cdad0f77db8688) for chunk: app.js at…

### CASE-5479 · allow empty array for generateStaticParams
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍27 💬11 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. See that the file in `app/foo/[slug]/page.tsx` has a `generateStaticParams` function that returns an empty array, and there are two possible ways to build the app, one with `output: 'export'` (`npm run build:export`) and one with `output: undefined` (`npm run build:ssr`) 2. Try `npm run build:export` and see that it fails with the error message: ``` Error: Page "/foo/[slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config. ``` ### Current vs. Expected behavior It is a real use case…

### CASE-5482 · Uncaught Error: Minified React error [ref], [ref], [ref] and [ref] in production
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍24 💬11 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Standard next application 2. `/app/page.tsx` ``` export default function XXX() { return [`Service\n and protection`, `Help when\n you need it`, `Complimentary\n member benefits`] } ``` ### Current vs. Expected behavior Local next dev or local next build / next start work fine, logs are clear. When deployed to vercel, this shits the bed with errors like `Uncaught Error: Minified React error [ref], [ref], [ref] and [ref]` Which are * Unknown root exit status. * Text content does not match server-rendered HTML. *…

### CASE-5483 · Loading page mismatch in app router directory
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍10 💬11 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce In app directory the current folder structure the issue being produced is: ``` |── app └── blog ├── loading.tsx ├── page.tsx └── [slug] ├── loading.tsx ├── page.tsx ``` when im opening /blog/singleton the loading of [slug]/loading isn't showing instead it shows /blog/loading, I noticed a glitch between those loadings. ### Current vs. Expected behavior Expected behavior should be the loading of current file needs to be displayed instated of parent directory loading page. ### Verify canary release - [x] I verified that the…

### CASE-5497 · (AppDir) Hydration error in dev mode when using inline <script /> tag
- **Principles**: P-F4 · **Env**: opera, next.js, react
- **Signals**: 👍2 💬11 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: 1.22.19 pnpm: 6.28.0 Relevant packages: next: 13.1.1 eslint-config-next: 11.0.1 react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link]…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-5409 · Storybook example is broken on Next 12.1.5
- **Principles**: P-A3, P-H1 · **Env**: windows, next.js
- **Signals**: 👍2 💬12 · closed · labels: examples/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information `Windows 10 - 64bit` with `npm@user`. The issue probably exists on all environments. ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug `next/image` changes in `12.1.5` broke static image imports of the [Storybook example]([link] framework]/tree/canary/examples/with-storybook). `Failed to parse src "static/media/public/nyan-cat.png" on `next/image`, if using relative…

### CASE-5436 · Router push basePath ignored
- **Principles**: P-A3, P-H1, P-F4 · **Env**: windows, next.js
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug We are using basePath for our frontend and when calling Router.push() the basePath is ignored. This seems to only be an issues in a docker image. ## Expected behavior Calling router.push("/ac") with basePath "/resource-finder" in config it should redirect to "/resource-finder/ac". ## System information - OS: Windows - Version of Next.js: 10.0.2-canary.12 - Version of Node.js: 15.1.0 ## Additional context I already opened a ticket for same behavior with SSR [ref]

### CASE-5438 · ESM in .mjs files cause a dev mode runtime error
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍31 💬12 · closed · labels: good first issue/Webpack/locked
- **Excerpt**: # Bug report ## Describe the bug Importing a project ESM `.mjs` file (the [Node.js standard file extension for ESM]([link])) in a page file causes a runtime error, but only in dev mode: > Unhandled Runtime Error > ReferenceError: module is not defined <img width="636" alt="Screen Shot 2020-10-12 at 1 44 24 pm" src="[link]> Here is the call stack: <img width="803" alt="Screen Shot 2020-10-12 at 1 45 02 pm" src="[link]> ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Create a basic Next.js project. 2. Create a `config.mjs` file containing: ```js…

### CASE-5442 · does not compile material-ui correctly
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: good first issue
- **Excerpt**: # Bug report ![image]([link]) ## Describe the bug Material-UI uses popper.js for all of its popovers. When these are used inside next we are getting the above error. This seems to be an issue with how next has its compilation setup. When I do the same code in a create react app setup I do not have this issue. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: [link] 1. run app 2. click in search input 3. See error in console for comparison here is the same code inside a create react app [link] ## Expected behavior Expect it to be able to run without…

### CASE-5448 · Const must be initialized, IE11
- **Principles**: P-A3, P-H1 · **Env**: macos, next.js
- **Signals**: 👍1 💬12 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug IE11 errors on the file [link] returning a `Const must be initialized`. Seems as though this issue has come up in the past - [link] ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Create a fresh Next.js instance 2. Create a page in pages directory 3. Open IE11 4. See error in console ## Expected behavior Return no error. ## Screenshots <img width="340" alt="image" src="[link]> <img width="870" alt="image" src="[link]> ## System information - OS: macOS 10.14.6 (running BrowserStack) - Browser: IE11 - Version of…

### CASE-5455 · [Next 9.0.0] req/res are undefined in getInitialProps in _document.js
- **Principles**: P-A3, P-H1 · **Env**: macos, linux
- **Signals**: 👍6 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug After having upgraded to v9 this morning we noticed that CSP was failing. Upon further investigation, it turned out that `ctx.req` and `ctx.res` were returning `undefined` in `_document.js` (or .ts) when calling `getInitialProps`. This has been reproduced by combining the basic custom-document example as well as the custom-server example. ## To Reproduce [link] ## Expected behavior `req` and `res` should have content. ## Screenshots Server logs: ![image]([link]) ## System information - OS: MacOS / Linux (codesandbox + node:10-alpine tested) - server-side issue…

### CASE-5460 · Dependencies specified in _app are duplicated in other pages.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug Dependencies not properly shared across pages and _app.js ## To Reproduce Create a number of pages. Add a module to _app.js. Increase the number of times a module is included from once to N times, track progress Takes at least 2 pages for a dep included in _app.js to be factored out. ## Expected behavior Once a module has been included in _app, it should never be packed again. ## Screenshots In a 4 page + _app + _document app // _app only (_app.js includes Auth) <img width="555" alt="screen shot 2018-12-19 at 1 29 25 pm" src="[link]> // 1 page (_app.js +…

### CASE-5464 · notFound function does not render not-found page and instead causes page crash (App Router, Next 16)
- **Principles**: P-A3, P-H1 · **Env**: macos, next.js, react
- **Signals**: 👍2 💬11 · closed · labels: locked/Error Handling/Dynamic Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Navigate to [link] 2. Go to a non existent category page (ex. [link]) 3. You will see the page crash with the message <img width="3416" height="1614" alt="Image" src="[link] /> ### Current vs. Expected behavior current: the site crashed. and you will see this message "Application Error" expected: see the content of the defined NotFound page ### Provide environment information ```bash Next.js: 16.x (also reproducible on latest canary) React: 19.x Router: App Router Node.js: 22.x Package manager: pnpm OS: macOS (also…

### CASE-5465 · HEAD requests for Next.js image return 400 Bad Request when image is not yet cached
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍9 💬11 · closed · labels: Image (next/image)/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ## Description When making a HEAD request to an image served via the Next.js Image Optimizer (/_next/image) before the image is cached, the server returns 400 Bad Request. - **On Next.js 15.3.x:** - A first HEAD request poisoned the cache by storing an empty file, causing subsequent GET requests to return an empty response. - **On Next.js 15.5.x:** - The cache poisoning seems fixed (no empty files are written). - However, the first uncached HEAD request still fails with 400 Bad Request. - Only after a GET request succeeds and the image is…

### CASE-5468 · Issues with Handling File Inputs and Image Previews in Next.js 15 Form Actions
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: next.js, react
- **Signals**: 👍2 💬11 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce **Minimal Reproducible Example:** *Client Component (`Home.tsx`):* ```tsx "use client"; import { useActionState } from "react"; import { useState } from "react"; import sendDataAction, { State } from "./action"; import Image from "next/image"; export default function Home() { const [state, formAction, pending] = useActionState<State, FormData>( sendDataAction, null ); const [selectedImages, setSelectedImages] = useState<File[]>([]); const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => { if…

### CASE-5471 · Error next js 15 image component
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍3 💬11 · closed · labels: bug/Image (next/image)
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Codesandbox link: [link] Github link: [link] I don't know why, but on Codesandbox everything worked fine for me, you should run this locally. ![image]([link]) ### Current vs. Expected behavior If you use the Next Image component, some random images will return a 500 error. However, if you render the same image with an img tag, it will work fine. ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Binaries: Node: 20.11.1 npm: 10.5.0 Relevant Packages: next: 15.0.1 eslint-config-next:…

### CASE-5472 · Error: headers was called outside a request scope, when using Authjs v5.0.0-beta.19 and next dev --turbo
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍2 💬11 · closed · labels: bug/Turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce Hi, I'm bringing this issue [link] to here as its related to turbopack. <img width="972" alt="image" src="[link]> ### Current vs. Expected behavior Expected behavior should be to work, as it does when there is no --turbo flag. ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 23.6.0: Mon Jul 29 21:14:21 PDT 2024; root:xnu-10063.141.2~1/RELEASE_ARM64_T8103 Available memory (MB): 16384 Available CPU cores: 8 Binaries: Node: 22.0.0 npm: 10.5.1 Yarn:…

### CASE-5473 · Next.js removes css modules causing unstyled pages in production
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍12 💬11 · closed · labels: bug/Lazy Loading/Pages Router/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open a page that shows a component which is **normally loaded and lazy loaded** at the same time. 2. Use the pages router to do a client-side navigation to a page where the component is **only lazy loaded**. 3. The CSS is missing and the lazy loaded component is shown unstyled Reproduction steps using the provided CodeSandbox: 1. Open the reproduction: [link] 2. Observe that the lazy-loaded Star component on the home page is **styled** ![styled star]([link]) 3. Navigate to the about page (/about-us) 4. Reload 5. Click…

### CASE-5474 · Localized Sitemap Does Not Work
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍11 💬11 · closed · labels: Internationalization (i18n)/Metadata/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start application with pnpm run dev or pnpm run dev --turbo (issue is present in both). 2. In the URL of the browser, go to sitemap.xml page by writing /sitemap.xml STORY: When creating sitemap.ts and using [this same code from docs]([link]), this is the result I get: ![image]([link]) I have searched through GitHub issues and found [link] framework][ref], and there it is mentioned that you should use Next 14.2, but I already use the latest version of Next.js (details below), and this means it is still not fixed. ###…

### CASE-5475 · npm run dev never finish to compile
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍0 💬11 · closed · labels: create-next-app/bug/Script (next/script)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce This is happening everywhere on my computer, doesn't matter if it's an old or new project. I just create a new folder, run: ``` npx create-next-app@user npm run dev ``` it will show: ``` dev > next dev ▲ Next.js 14.2.3 - Local: [link] ✓ Starting... ✓ Ready in 3.5s ``` And that's all, never move forward to the Compiling process [Link with a video]([link]) ### Current vs. Expected behavior it should compile the site and leave it ready to run on localhost:3000 ### Provide environment information ```bash MAC Os Sonoma 14.5…

### CASE-5481 · style is not applied in index.html by output:'export'
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍2 💬11 · closed · labels: bug/locked/stale
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. I created a next 14 project : npx create-next-app@user 2. I wanted to use its static mode by adding : const nextConfig = { output: 'export', } module.exports = nextConfig 3. Then I run yarn build and see the out folder 4. When I opened the index.html file in out folder the styles (tailwind) did not apply 5. I had some errors in console like: Access to CSS stylesheet at 'file:///_next/static/css/d9c1932c9f423671.css' from origin 'null' 6. and this is the output without style <img width="520" alt="image (1)" src="[link]…

### CASE-5485 · Blur placeholder of `next/image` is still visible after the image is loaded
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍18 💬11 · open · labels: Image (next/image)/linear: next/not stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 18.6.0 npm: 8.13.2 Yarn: 1.22.18 pnpm: 8.6.7 Relevant Packages: next: 13.4.13-canary.6 eslint-config-next: 13.4.9 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image…

### CASE-5487 · next/image preload not working as expected in AppDir. Affecting LCP and FP. Order of preload is different than page-dir.
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, react, typescript
- **Signals**: 👍2 💬11 · closed · labels: Image (next/image)/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:19 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T8103 Binaries: Node: 16.20.0 npm: 8.19.4 Yarn: 1.22.19 pnpm: 8.6.0 Relevant Packages: next: 13.4.11 eslint-config-next: 13.4.11 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-5415 · Sourcemaps stop working due to multiline comment + CRLF line endings
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-E1, P-E2, P-E4 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍0 💬12 · closed · labels: SWC/locked
- **Excerpt**: ### What version of Next.js are you using? Happens in at least 12.0.0, 12.0.7, 12.0.8-canary.5 and 12.0.8-canary.8. ### What version of Node.js are you using? 16.13.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? next dev ### Describe the Bug When my function has a multiline comment, sourcemaps break. I can't set a breakpoint on the first `console.log` and the variables in "Scope" make no sense: ![image]([link]) ### Expected Behavior I expected the same behavior as when the multiline comment is removed, so…

### CASE-5452 · API routes getting 405: Method Not Allowed for API routes
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report ## Bug Description 405: Method Not Allowed, if trying POST using APIs Route ## To Reproduce **mock.js files** - this file under pages/apis ``` function Endpoint(req, res) { if(req.method === "POST"){ res.json({ message: 'POST Hello Everyone!' }); }else{ res.json({ message: 'ELSE Hello Everyone!' }); } } export default Endpoint; ``` Am getting response as below upon hitting **[link] :- ``` <!DOCTYPE html> <html> <head> <link rel="shortcut icon" type="image/x-icon" href="/static/images/logo_transparent_favi.png"/> <meta name="viewport"…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-5439 · Multiple Optional Catchall Routes with overlapping patterns fails to correctly fall-back in dev mode
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍4 💬12 · closed · labels: good first issue/Linking and Navigating/locked/stale
- **Excerpt**: # Bug report ## Describe the bug While next is in dev mode, it fails to build appropriate catchall route when multiple catchalls exist with overlapping patterns. For example, a page at `pages/[[...foo]].js/` will not be built if `pages/[bar]/[[...bazz.js]]` exists, until first navigating to the homepage `/` to force a build of `[[...foo]]` ## To Reproduce Created an example branch with this behavior [link] Repro steps are located in [link] 1. `npx next dev` 2. *First* visit /foo/root 3. Observe 404 4. visit / 5. Observe page renders, [[...slug]] builds 6. visit /foo/root 7. Observe page now…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-5445 · global css in _app throwing error
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug When importing a file from `_app.tsx`, an error is thrown and the page fails to render >index.js:1 Error was not caught TypeError: Cannot read property 'parentNode' of null > at Object.push../src/pages/font.css.options.insert (font.css?2cd5:11) > at insertStyleElement (injectStylesIntoStyleTag.js:122) > at addStyle (injectStylesIntoStyleTag.js:219) > at addStylesToDom (injectStylesIntoStyleTag.js:94) > at push../node_modules/style->loader/dist/runtime/injectStylesIntoStyleTag.js.module.exports (injectStylesIntoStyleTag.js:251) > at Object../src/pages/font.css…

### CASE-5486 · next/font/google failed to download `Overpass`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux, next.js, react
- **Signals**: 👍1 💬11 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]-Microsoft Fri Jan 01 08:00:00 PST 2016 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 3.2.4 pnpm: N/A Relevant packages: next: 13.3.4 eslint-config-next: 13.4.3 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (next/font) ### Link to the code that reproduces this issue or a replay of the bug N/A ### To Reproduce Load a font…

### CASE-5494 · Error occurs in @user/font when setting up a monorepo using yarn berry (pnp) and yarn workspace.
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:30 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T8103 Binaries: Node: 16.19.0 npm: 8.19.2 Yarn: 3.4.1 pnpm: N/A Relevant packages: next: 13.1.7-canary.5 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font) ### Link to the code that reproduces this issue…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-5453 · [Next 9] Importing react-dom would bloat the bundle size
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: # Bug report ## Describe the bug Importing react-dom in a page or in one of its dependent component will cause react-dom.production.min.js to be included in the page bundle, adding about 32K gzipped size to a page. This is pretty common, examples: - ReactDOM.createPortal - `react-transition-group` also imports `react-dom` ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to 'pages/any-page.js' 2. Add `import ReactDOM from 'react-dom';` 3. In the render function, do `console.log(ReactDOM)`. Just to use that dependency. 4. Production build the…

### CASE-5456 · Inline style
- **Principles**: P-D1, P-D2, P-D3 · **Env**: mobile
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: # Bug report `index.js:1 Warning: Prop `style` did not match. Server: "height:80px;margin-left:4vw;cursor:pointer;width:auto;margin-top:0px;transition:all .2s ease-in-out" Client: "height:30px;margin-left:4vw;cursor:pointer;width:auto;margin-top:6px;transition:all .2s ease-in-out"` ## Describe the bug Every style changes, I have this **Warning**. Cases that I need to change my style? Mobile view or detecting scroll. ## To Reproduce Steps to reproduce the behaviour, please provide code snippets or a repository: 1. Go to *Define a Style* 2. Change dynamically the style 4. See error ## Expected…

### CASE-5478 · Docs: How to migrate from async router.push to new `next/navigation` push method
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍23 💬11 · open
- **Excerpt**: ### What is the improvement or update you wish to see? The new router in `next/navigation` no longer returns a promise from the `push` method. From what I've been able to understand, this is so that it can work with the `startTransition` feature of React, but the Next docs don't contain any information about this or how to successfully replace any functionality that was relying on "awaiting" a router.push call ### Is there any context that might help us understand? The docs for the push method are currently one sentence here: [link] The migration guide does not mention the fact that the…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-5469 · Dynamic Sitemap throwing 404 error on Nextjs 15
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬11 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce I have created a dynamic sitemap for my Nextjs 15 app in the following path: src > app > sitemap.ts I have created the sitemap according to the example quoted in the Nextjs documentation: [link] Here's the code: ``` import prisma from "@/lib/prisma"; import type { MetadataRoute } from "next"; export const revalidate = 86400; export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const data = await prisma.post.findMany({ select: { slug: true, }, }); const posts = data.map((item) => ({ url:…

### CASE-5470 · Conditionally Rendering Form Component Causes Server Action Error
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug/Runtime/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce I attached the CodeSandbox for a minimal reproduction. I am purposely calling the action from onSubmit so that I can do both client-side and server-side validation. I removed explicit validation parts as it reproduces without it. ``` <form ref={formRef} action={formAction} onSubmit={() => { formRef.current?.submit(); }} > <div> <label htmlFor="email">Your email</label> <input id="email" name="email" type="email" required /> </div> <button type="submit">Reset password</button> </form> ``` In my reproduction, I have 2…

