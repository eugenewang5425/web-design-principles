# Case Chunk 040 — Round 40

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4901 · NextJS 14 returns fetch failed with UND_ERR_CONNECT_TIMEOUT error on serverless function
- **Principles**: P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍14 💬28 · closed · labels: bug/Runtime/Pages Router/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. From a client-side component, start a fecth POST request to an API endpoint (route handler) on form submission; 2. On an API serverless function realise another fetch POST request to an external API (in my case I used Slack message API); 3. On a production environment hosted on Vercel, around 70% of the requests to Slack are working while another 30% fail returning 500 server error code "UND_ERR_CONNECT_TIMEOUT". Systems: - Next.js v14.1.4 - Errors happen in both Pages and App Router - Could only reproduce on a Prod…

### CASE-4915 · Crash when navigating back to a page using the browser's back button, after the page has been revalidated
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍19 💬27 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce The reproduction is also available at CodeSandbox: [link] 1. Install the repository dependencies with `npm i` and start the dev server with `npm run dev`. 2. Open the root page **/** on the browser. 3. Click the link on the root page, taking you to the **/foo** page. 4. Click the button on the **/foo** page. This submits the form and runs an action that calls `revalidatePath("/", "layout")`. 5. After the form has been submitted succesfully, navigate back to the root page **/** by using the browser's back button. - At this…

### CASE-4929 · AMP: styles missing when importing standard css files in a project using styled components
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍7 💬26 · closed · labels: Pages Router/locked
- **Excerpt**: # Bug report ## Describe the bug When importing standard css files from node modules, e.g.: ```js import 'reset-css/reset.css'; import 'semantic-ui-css/components/form.min.css'; import 'semantic-ui-css/components/message.min.css'; ``` and when you're using styled components, only the styled components remain. The styles of the _normal css files_ imported from node modules disappear / are missing (in the AMP version). ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Use styled components in your project 2. Import css from a lib that doesn't use…

### CASE-4962 · Module incorrectly persists between hot updates (HMR) in the browser
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍57 💬23 · open · labels: bug/Runtime/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the repo, check out the PR's branch. 2. `pnpm install`. 3. `cd examples/with-next`. 4. `pnpm dev` 5. Open the application URL in the browser. 6. Open the DevTools, select the "Console" tab. 7. Click the "Fetch movies" button on the page. See the list of fetched movies (these are coming from mocks). See _a single_ log output from MSW about the intercepted GraphQL query. 8. Go to `src/mocks/handlers.ts`. Change the payload of the `graphql.query()` handler (e.g. remove any word from a movie title). 9. Save the…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4902 · [Turbopack] Warning: Encountered two children with the same key, `0`. Keys should be unique so that components maintain their identity across updates
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍38 💬28 · closed · labels: bug/Turbopack/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. git clone [link] 2. npm install 3. npm run turbo (next dev --turbo) 4. open devtools and you will see the warning ![image]([link] framework]/assets/63774442/889df657-9adf-4893-aa8b-7d9e707884f4) ### Current vs. Expected behavior **Current Behavior:** Showing this warning `app-index.js:31 Warning: Encountered two children with the same key, `0`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported…

### CASE-4903 · calling `redirect()` inside a server component causes flashing UI
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍27 💬28 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. click on the link 2. you will see a blank page while the page is being redirected ### Current vs. Expected behavior You can see in the video below that for server actions it works as expected, the page don't flash while being redirected (this is the desired behavior), while for link it doesn't : [link] framework]/assets/38298743/415037db-31a9-4cde-9b13-4f7c6eb99c3a ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating…

### CASE-4904 · `opengraph-image` and `twitter-image` breaks in dynamic routes
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬28 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] framework][ref] ### To Reproduce Use `opengraph-image.tsx` or `twitter-image.tsx` in any dynamic routes (i.e. `/articles/[slug]` and `/[...slug]`). ### Current vs. Expected behavior Next doesn’t currently consider these routes, but should. > `Error: Catch-all must be the last part of the URL.` From a DX perspective, having these co-located with pages makes perfect sense, but the handling is broken due to ambiguous routing. It’s not clear if a request to `/articles/twitter-image` is to load the Twitter image for `/articles` or an article…

### CASE-4909 · image component in next js is not working in development build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬28 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report image component in next js is not working in development build ## Describe the bug I tried to preview my web app.. in my local machine I was using the image component but the image is not loading in dev. enviroment.but when I ship the final build the images were loading and were there. ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. type yarn next dev in terminal...(it will open dev. build) 2. Click on '[link] 3. See bug ## Expected behavior the images should be displayed ## Screenshots ![Screenshot from 2020-11-12…

### CASE-4910 · Failed to execute 'createElement' on 'Document' | v9.5.4
- **Principles**: P-A3, P-H1 · **Env**: next.js, react
- **Signals**: 👍53 💬28 · closed
- **Excerpt**: # Bug report ## Describe the bug I ran into this error after updating Next.js to version 9.5.4. The problem is that you cannot use React Components inside `Head` in _app.js file. **Minimal Example:** ``` const Metadata = () => ( <> <base href="/" /> <meta name="msapplication-TileColor" content="[ref]" /> {/*...*/} </> ) class NextApp extends App { render() { return ( <> <Head> <title>Next Bug Report</title> {/*Error*/} <Metadata /> </Head> </> ) } } ``` ## To Reproduce Just open the dev server **Reproduction repo:** [next-bug-report]([link]) ## Screenshots ![image]([link]) ## System…

### CASE-4913 · Nextjs includes all client components in the bundle when at least one client component is rendered from a server component (app-folder)
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js
- **Signals**: 👍47 💬27 · open · labels: bug/SWC/Webpack/linear: next
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the app in prod mode (npm run build && npm run start); 2. Open [link] 3. Check the Source of the page. ### Current vs. Expected behavior **Current behavior:** Next.js includes ClientComponent2 in the bundle, even though ServerComponent2 is not used on the current page. **Expected behavior:** Only ClientComponent1 should be included in the bundle. <img width="955" alt="image" src="[link]> ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version…

### CASE-4914 · create-next-app: Build Error using `next dev` v14.2 (`ERR_UNSUPPORTED_ESM_URL_SCHEME`)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍14 💬27 · closed · labels: create-next-app/bug/locked
- **Excerpt**: ### EDIT: [Temporary solution]([link] framework][ref][ref]) EDIT: **Already fixed in v14.2.1** ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a next project using `create-next-app` CLI with v14.2 2. Run in development (`next dev`) 3. Error will show up like this: ![image]([link] framework]/assets/88200096/0f58dfeb-2601-4173-b3bd-f0e75d683488) ### Current vs. Expected behavior Currently, when creating an app using `create-next-app` (default options selected), the build error shows up and throws `ERR_UNSUPPORTED_ESM_URL_SCHEME` The new project should work as…

### CASE-4916 · Next.js App Router doesn't work with google cache ([link])
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍3 💬27 · closed · labels: linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue or a replay of the bug [link] ### To Reproduce Go to cache page [link] and see a lot of errors in devtools ![image]([link] framework]/assets/5382042/406effc3-87e0-46a6-8231-04ab2e22048a) ### Current vs. Expected behavior this not ok behavior only in google cache [link] and see a lot of errors in devtools In real site everything is ok [link] ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash "next": "13.4.7-canary.1" ``` ### Which area(s) are affected?…

### CASE-4923 · generateStaticParams() not detected when using parallel routes / dynamic routes using output: export
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍16 💬26 · closed · labels: bug/Output/linear: next/locked/Parallel & Intercepting Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start application in dev mode (application won't build with the same error) 2. Go to localhost:3000/ 3. Click one of the "images" 4. No modal opens 5. Error happens: ``` Error: Page "/@user/(.)photos/[id]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config. at DevServer.renderToResponseWithComponentsImpl (C:\Users\koenl\Downloads\april\nextgram\node_modules\next\dist\server\base-server.js:1071:27) at process.processTicksAndRejections…

### CASE-4926 · Slower Response Times when updating from 10.0.7 to 10.2.0 or 11.0.1 or 12.0.1 (with Disabled automatic image optimization)
- **Principles**: P-A3, P-H1 · **Env**: opera, next.js, webpack
- **Signals**: 👍16 💬26 · closed · labels: bug/please verify canary
- **Excerpt**: ### What version of Next.js are you using? 10.2.0, 10.2.1-canary.3, 11.0.1, 12.0.1 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? all ### What operating system are you using? all ### How are you deploying your application? own k8s cluster with custom express server ### Describe the Bug When updating from 10.0.7 to 10.2.0 or 10.2.1-canary.3 with webpack 4, response times and getInitialProps render times of real user traffic increase by 8-12%. We are **not** using next.js automatic image optimization at all. Note that for the traffic response time we only…

### CASE-4932 · ImageResponse type error on route after updating to 13.5.1
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬25 · closed · labels: bug/TypeScript/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone repo 2. next build 3. See type error on GET route handler ### Current vs. Expected behavior **Current:** ``` app/api/og/route.tsx Type error: Route "app/api/og/route.tsx" has an invalid export: "Promise<NextResponse<unknown> | ImageResponse>" is not a valid GET return type: Expected "Response | Promise<Response>", got "Promise<NextResponse<unknown> | ImageResponse>". Expected "Promise<Response>", got "Promise<NextResponse<unknown> | ImageResponse>". Expected "Response", got "NextResponse<unknown> |…

### CASE-4942 · image-component.js: deviceSizes.sort() crashes on frozen array in production SSR (Next.js 16)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: next.js
- **Signals**: 👍1 💬24 · open · labels: Image (next/image)
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce This only happens in production SSR (not in next dev). In production, Next.js (via the got library’s deepFreeze) freezes the config object coming from next.config.js. Therefore .sort() throws: TypeError: Cannot assign to read only property '0' of object ### Current vs. Expected behavior Affects Next.js 16.x in production/SSR only (not dev mode) image-component.js line 246: c.deviceSizes.sort(...) mutates in place Line 247: c.qualities?.sort(...) has the same problem Config arrays are frozen in production, so .sort()…

### CASE-4943 · The server using the image component crashed.(Process finished with exit code 0)
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, next.js
- **Signals**: 👍0 💬24 · closed · labels: Image (next/image)/Turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Use Next.js 15.5.2 (Turbopack) 2. Run npm dev 3. You will see: ```console ✓ Starting... ✓ Ready in 3.1s ○ Compiling / ... ✓ Compiled / in 40.4s GET / 200 in 47526ms Process finished with exit code 0 ``` ### Current vs. Expected behavior Show Image. Actual: Crash. ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] ZEN SMP PREEMPT_DYNAMIC Fri, 22 Aug 2025 09:33:53 +0000 Available memory (MB): 5818 Available CPU cores: 2 Binaries: Node: 22.15.1 npm: 11.4.2 Yarn: N/A…

### CASE-4944 · next/image is not working for some images in production
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍9 💬24 · closed · labels: Image (next/image)/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce npm run build npm run start on production these images are staticky on assets folder on project ### Current vs. Expected behavior hi there, in production. i have an issue. image is not generated properly. i have 4 images exactly same in format. but 3 of them are not generated. when i click on image's link its as png. not webp. and the png is not showing anything. image in production: [link] if i change the w in this link it show the image and it downloads the image as webp. [link] sth wrong with cached image or web…

### CASE-4958 · with-ant-design bundle file is too big
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬24 · closed · labels: good first issue/examples
- **Excerpt**: ![image]([link]) ### In the with-ant-design example, i think these file too big for production. Is this a bug? ### Can we optimize it?

### CASE-4960 · The new validator doesn't work with rootDir tsconfig property
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍2 💬23 · open · labels: Output
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. pnpm install 2. pnpm build ### Current vs. Expected behavior The new validator breaks the build when you use rootDir and your sources are not at the top level of the repo. <img width="1556" height="602" alt="Image" src="[link] /> ``` > next build ▲ Next.js 15.5.1-canary.2 Linting and checking validity of types ...Failed to compile. Type error: File 'C:/data/repos/next-validator-rootdir/.next/types/validator.ts' is not under 'rootDir' 'C:/data/repos/next-validator-rootdir/src'. 'rootDir' is expected to contain all…

### CASE-4963 · Investigate memory usage with Image Optimization enabled
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍17 💬23 · open · labels: bug/Image (next/image)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Latest version of Next.js. ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that reproduces this issue or a replay of the bug Reproduction was left out in reports in [ref] ### To Reproduce Unfortunately we haven't received a reproduction of these reports so this needs a reproduction in order to investigate. We'll keep this issue open for the standard 30…

### CASE-4987 · Image optimisation external resource not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬22 · closed
- **Excerpt**: # Bug report ## Describe the bug When optimising images from external sources I get the following error in production: ``` "url" parameter is not allowed ``` ## To Reproduce Images are coming from: `images.example.com` next.config.js has: ``` images: { domains: ["images.example.com"], }, ``` ## Expected behavior The images should also be optimised in production/ from an external source. Inside the PR for optimised images ([link] framework][ref]/files) You can see where the error comes from but I am not sure why it is thrown, I am using a custom server but should not be a problem since it…

### CASE-4996 · Dynamic imports in npm packages leads to hydration error ( broken >= 13.2, works <= 13.1.0)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍9 💬21 · closed · labels: bug/Lazy Loading/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the application in development (next dev) 2. Go to localhost:3000 Leads to the following hydration error: <img width="985" alt="Skärmavbild 2023-09-20 kl 17 48 25" src="[link] framework]/assets/3974008/3d74537b-d38b-4775-9c1f-954f96ddcc87"> Code for the imported package can be found here: [link] ### Current vs. Expected behavior It should be possible to import a component from another npm repo that contains a dynamically loaded component. There should be no hydration errors when doing this (and there should be…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4905 · The usage of NextResponse.json() function leads to the error TypeError: Response.json is not a function. in dev mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows, next.js, react
- **Signals**: 👍0 💬28 · closed · labels: Upstream/bug/Runtime/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Single Language Binaries: Node: 18.2.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.1-canary.12 eslint-config-next: 13.3.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue [link] ### To Reproduce…

### CASE-4906 · Cancel Rendering Route Error when Router Push hash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍11 💬28 · closed · labels: bug/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:37 PDT 2022; root:xnu-8020.121.3~4/RELEASE_ARM64_T6000 Binaries: Node: 16.15.0 npm: 8.5.5 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 12.1.7-canary.26 react: 18.1.0 react-dom: 18.1.0 ``` ### What browser are you using? (if relevant) Google Chrome Version 102.0.5005.61 (Official Build) (arm64) ### How are you deploying your application? (if relevant) Locally…

### CASE-4907 · CSS Modules sometimes don't load when using next/dynamic import
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react, next.js
- **Signals**: 👍54 💬28 · closed · labels: Webpack/locked/CSS
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 20.3.0: Thu Jan 21 00:06:51 PST 2021; root:xnu-7195.81.3~1/RELEASE_ARM64_T8101 Binaries: Node: 14.17.0 npm: 6.14.13 Yarn: 1.22.10 pnpm: N/A Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 14.17 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Vercel ### Describe the Bug…

### CASE-4908 · Error: [object Object] is not a PostCSS plugin
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍11 💬28 · closed · labels: please add a complete reproduction
- **Excerpt**: ### What version of Next.js are you using? 10.2.0 ### What version of Node.js are you using? 12.18.3 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Azure ### Describe the Bug I get build error when run `next build` after updated [email] ### Expected Behavior Build should be done successfuly ### To Reproduce npm i npm run build next.config.js ``` const withPlugins = require('next-compose-plugins'); const withPWA = require('next-pwa'); const withImages = require('next-images'); const withFonts =…

### CASE-4917 · Error: Must use import to load ES Module
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react
- **Signals**: 👍14 💬28 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.2.2 ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Edge ### What operating system are you using? Windows ### How are you deploying your application? local development ### Describe the Bug When importing the `react-konva` package I get this error ``` Server Error Error: Must use import to load ES Module: C:\Users\bucsa\dev\atomic\node_modules\konva\lib\Core.js require() of ES modules is not supported. require() of C:\Users\bucsa\dev\atomic\node_modules\konva\lib\Core.js from…

### CASE-4918 · Warning: Prop `href` did not match. Server: "[link] Client: "/"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, next.js
- **Signals**: 👍19 💬27 · closed
- **Excerpt**: **What version of Next.js are you using?** 10.0.7-canary.8 **What version of Node.js are you using?** 12.16.3 **What browser are you using?** Google Chrome Version 88.0.4324.146 (Official Build) (x86_64) **What operating system are you using?** Mac OS Big Sur 11.1 **How are you deploying your application?** next start **Describe the Bug** With this `next.config.js` ``` module.exports = { i18n: { locales: ['en-US', 'it'], defaultLocale: 'it', domains: [ { domain: 'dev-user.example.com', defaultLocale: 'it', } ] } } ``` And this code: ```javascript <Link href="/"> <a>Just a link</a> </Link> ```…

### CASE-4919 · `Cannot find module 'next/dist/next-server/server/node-polyfill-fetch'` for vercel monorepo serverless functions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, windows
- **Signals**: 👍13 💬27 · closed
- **Excerpt**: # Bug report Hi, first of all love your work! I'm migrating to use the NEW monorepo support for vercel, and although the functions succeed to deploy, I get the following error when invoking it. ## Describe the bug `Cannot find module 'next/dist/next-server/server/node-polyfill-fetch'` ## To Reproduce Reproduction coming ... ## Expected behavior A clear and concise description of what you expected to happen. ## Screenshots If applicable, add screenshots to help explain your problem. ## System information - OS: [e.g. macOS, Windows] - Browser (if applies) [e.g. chrome, safari] - Version of…

### CASE-4924 · Next >12.0.1 causes memory leak after upgrading from Next 11
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome 100, next.js
- **Signals**: 👍6 💬26 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information ```bash $ next info (node:39290) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code. ``` ### What browser are you using? (if relevant) Chrome 100 ### How are you deploying your application? (if relevant) custom express server running on GCP distributed across multiple containers running 1GB memory ### Describe the Bug We're in a…

### CASE-4925 · Next 12 Error ESM in production, works locally
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, next.js, react
- **Signals**: 👍3 💬26 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.0 ### What version of Node.js are you using? v14.17.5 ### What browser are you using? Chrome ### What operating system are you using? Linux PopOS ### How are you deploying your application? Vercel ### Describe the Bug Apparently a conflict with Swiper ESM package. In version 11 of next.js it worked. we import normal: import {Swiper, SwiperSlide} from 'swiper/react'; after upgrading to version 12 of the next, in development it works, but in vercel it doesn't ### Expected Behavior info - Loaded env from /var/task/.env.local…

### CASE-4927 · [i18n] explicit access to /en not redirecting to /
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍58 💬26 · open · labels: bug/Internationalization (i18n)
- **Excerpt**: **What version of Next.js are you using?** 10.0.5 **What version of Node.js are you using?** 14.15.0 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **How are you deploying your application?** next dev (localhost) **Describe the Bug** According to [docs]([link]) when enabling i18n with following config: ``` module.exports = { i18n: { locales: ['en-US', 'fr', 'nl-NL'], defaultLocale: 'en-US', }, } ``` only available URLs should be: ``` /blog /fr/blog /nl-nl/blog ``` but if I try to access page explicitly specifing default locale (i.e. `/en-US`) then…

### CASE-4930 · undefined is not an object (evaluating 'modules[moduleId].call')
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chrome, ios, ios 11, next.js, desktop
- **Signals**: 👍0 💬26 · closed
- **Excerpt**: # Bug report ## Describe the bug When I'm running my next.js website on my local environment (only on local), and I try to access a page other than the homepage on an Apple device (Safari for desktop or anything on iOS), I get this error: `undefined is not an object (evaluating 'modules[moduleId].call')` This is very very very specific as you can see. Actually it doesn't really bother me as it's only hapenning in dev mode. And I don't develop on Apple devices. ## Screenshots ![image-1]([link]) ## System information - OS: iOS 11.4.1 - Browser: Chrome, Safari - Version of Next.js: 6.1.2

### CASE-4933 · Error <Html> should not be imported outside of pages/_document and experimental-edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react, typescript
- **Signals**: 👍10 💬25 · closed · labels: please add a complete reproduction/Runtime/locked/stale
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.16.0 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.8 eslint-config-next: 13.4.8 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.6 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue or a replay of the bug [link] ### To…

### CASE-4934 · Experimental OptimizeCss flag (critters) isn't deferring all css files properly.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍1 💬25 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.3-canary.0 ### What version of Node.js are you using? 16.1.0 ### What browser are you using? chrome (shouldn't matter, the html is what's different) ### What operating system are you using? Windows (I think this could have to do with it) ### How are you deploying your application? Vercel! ### Describe the Bug I'm experimenting by using the new optmizeCss experimental property in the next.config.js (and it's sorta awesome for FCP). Locally, I was able to get my FCP to be the same as TTFB. Hats off to you all! So locally it works great, but when I…

### CASE-4935 · Rust WebAssembly module in an ES module wrapper from wasm-pack fails to load in Next.js
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, macos, next.js, webpack
- **Signals**: 👍24 💬25 · open · labels: bug/Webpack/linear: next
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 14.17.6 ### What browser are you using? Firefox, Chrome ### What operating system are you using? macOS ### How are you deploying your application? Not yet deployed ### Describe the Bug A simple Rust WebAssembly module packaged with its glue code into an ES module with wasm-pack (patched as in [link]) loads and works just fine under webpack, as illustrated in [link] but fails to import under Next.js. This is apparently because Next.js generates the `.wasm` generated at one path but then tries to load…

### CASE-4936 · "Invalid hook call" in 11.1.2
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, opera, windows, next.js, react
- **Signals**: 👍0 💬25 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 14.17.0 ### What browser are you using? Chrome ### What operating system are you using? Windows 10 ### How are you deploying your application? next dev ### Describe the Bug The CSS issue in Windows is cleared up, but this new one appears on any fresh NextJS project: `Server Error Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as…

### CASE-4937 · next/image messing images cache
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍9 💬25 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.1.1 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug In a given moment NextJs overwrites an image cache with another cache and then renders the wrong image ### Expected Behavior Render all images correctly based on SRC attribute ### To Reproduce 1. Clone [link] 2. Start server with `npm run dev` or `yarn dev` 3. Open [link] 4. Delete `/.next/cache/images` 5. Refresh the page 6. Repeat…

### CASE-4938 · AMP First Pages: Could not find files for /xxx in .next/build-manifest.json
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍7 💬25 · closed
- **Excerpt**: # Bug report ## Describe the bug When AMP first pages are accessed, the following error statement outputs. `Could not find files for /xxx in .next/build-manifest.json`. These AMP pages can be viewed. ## To Reproduce 1. cd /zeit/next.js/examples/amp-first 2. npm i 3. npm run build 4. npm run start 5. Go to 'localhost:3000' 6. See following error in your console ``` > next start ready - started server on [link] Could not find files for / in .next/build-manifest.json ``` ## Expected behavior No error outputs. ## Screenshots None. ## System information - OS: macOS - Browser (if applies) Chrome -…

### CASE-4945 · Memory Leak with Next.js's global fetch. Tested against http module
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, next.js
- **Signals**: 👍20 💬25 · closed · labels: bug/Pages Router/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. In one terminal and `cd` into the `/express_server` and run `npm start` 2. In a sperate teminal `cd` in `/next_app` and run `npm run inspect` 3. Using any browser go to either `[link] or `[link] to begin the requests. 4. Then open chrome inspect (`chrome://inspect`) or use any other debugging tools. I believe this is ticket is also relevant - but this repo reproduces it with and avoids it -> [ref] ### Current vs. Expected behavior Next.js's global fetch is holding onto performance metrics or some other data that is…

### CASE-4947 · Package subpath './server.edge' is not defined by "exports"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react
- **Signals**: 👍11 💬24 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Enterprise Binaries: Node: 16.18.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.2-canary.12 eslint-config-next: 13.3.1 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the repository 2. npm install 3. npm run…

### CASE-4949 · Error CSS did not loaded for create-next-app@user --experimental-app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux, ubuntu, next.js, react
- **Signals**: 👍25 💬24 · closed · labels: examples
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Thu Dec 22 2022 19:59:01 GMT+0100 (Central European Standard Time) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.1.0 eslint-config-next: 13.1.0 react: 18.2.0 react-dom: 18.2.0 ### Which example does this report relate to? [link] ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No…

### CASE-4950 · Compiler does not place css @user in own style tags the way babel used to.
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, next.js
- **Signals**: 👍5 💬24 · open · labels: bug/Webpack
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 14.18.1 ### What browser are you using? chrome ### What operating system are you using? mac0s ### How are you deploying your application? vercel ### Describe the Bug I just got bit in the upgrade. In nextjs v10, this is considered valid: ```css * { font-family: "Abril Fatface"; } @user url('[link]); ``` This works because each `@user` statement is wrapped in its own `style` tag. In nextjs v12, `@user` statements **are not** wrapped in their own `style` tag. ### Expected Behavior I expect each `@user`…

### CASE-4951 · `next/image` external domains no longer working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍19 💬24 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 10.1.2 ### What version of Node.js are you using? 15.8.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next dev ### Describe the Bug Since version `10.1.x` the external image domains are no longer working under `next.config.js`. Take the following basic example. ```js module.exports = { images: { domains: ['cdn.sanity.io', 'pbs.twimg.com'], }, }; ``` Error: ``` Error: Invalid src prop ([link]) on `next/image`, hostname "cdn.sanity.io" is not configured under images in…

### CASE-4952 · Slow initial page render
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍47 💬24 · closed · labels: bug/locked
- **Excerpt**: ### What version of Next.js are you using? 10.0.9 ### What version of Node.js are you using? v15.11.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug First render of each page has large TTFB. It can be seen in any example (e.g. api-routes-apollo-server-and-client-auth-app). ``` $ yarn create next-app --example api-routes-apollo-server-and-client-auth $ yarn build $ NODE_ENV=production yarn start ``` First request of localhost:3000/about has TTFB about 1–1.5s. All subsequent…

### CASE-4953 · Any dynamic route renders twice in browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 80, firefox 74, macos, next.js
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: # Bug report ## Describe the bug Any dynamic route is rendered twice in the browser. The entire `<App />` seems to be rendered twice. ## To Reproduce 1. Create route [pid].js in `pages` 2. Add code ```javascript const Page = () => { console.log('rendered') return <div /> } export default Page ``` 3. `npm run dev` 3. Open browser to `localhost:3000/anypage` 4. See 'rendered' printed twice ## Expected behavior Dynamic routes should only render once in the browser like any other page. ## System information macOS 10.15.4 Next.js 9.3.4 Chrome 80.0.3987.163 + Firefox 74.0

### CASE-4954 · JS modules are loaded twice
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 3, chrome, ubuntu, linux, next.js
- **Signals**: 👍1 💬24 · closed
- **Excerpt**: # Bug report ## Describe the bug JS modules seem to be loaded twice ## To Reproduce Steps to reproduce the behavior: 1. Go to '[link] (or your own built site) 2. Click on 'developer console' in e.g. Chrome 3. See Network tab 4. Do a hard refresh (E.g. CTRL + SHIFT + R) 4. Sort resources by name 5. Look at loaded JS modules. They appear twice in the resource list, but are not retrieved from cache ## Expected behavior All required resources to be loaded just once. ## Screenshots ![image]([link]) ## System information - OS: Ubuntu Linux - Browser Chrome - Version of Next.js: 9.1.1 - 9.3.0 ##…

### CASE-4955 · Swipe back on mobile browser with getInitialProps flickers the previous page
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, next.js, mobile
- **Signals**: 👍16 💬24 · open · labels: good first issue/Linking and Navigating
- **Excerpt**: # Bug report ## Describe the bug On mobile browsers (tested with Chrome and Firefox), swiping back or forward on a dynamic page (one that gets data from `getInitialProps`) will sometimes "flash" the previous page while the content is loading. [Here is a video]([link]) that shows the problem. ## To Reproduce 1. Create a next.js app with the following pages: `index.js` ``` import Link from "next/link"; export default function Index() { return ( <div> <p><Link href="data"><a>Link</a></Link></p> </div> ); } ``` `data.js` ``` const Index = props => { return ( <div> <h1>Test mobile back</h1> <ul>…

### CASE-4964 · Dynamic page not updating on subsequent navigations using Link component
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: opera, chrome 112, next.js
- **Signals**: 👍23 💬23 · closed · labels: bug/Linking and Navigating/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Next.js version: next@user Node.js version: 18.13 Operating System: Mac OS 13.3.1 (22E261) Browser: Chrome 112 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Routing (next/router, next/navigation, next/link) ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Hard navigate to: [link] 2. Update the input and click submit (this will save the data to the body.json in root) 3. Click on Home 4. Click on…

### CASE-4966 · Error: invariant: Expected pageData to be a string for app data request but received undefined. This is a bug in Next.js.
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, edge, windows, next.js, react
- **Signals**: 👍10 💬23 · closed · labels: bug/Runtime/Pages Router/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.19.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.2.4 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Data fetching (gS(S)P, getInitialProps), Middleware / Edge (API routes, runtime) ### Link to the code that reproduces this issue I cannot…

### CASE-4968 · Next 13 static page x-vercel-cache is always MISS instead of HIT
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍21 💬23 · closed · labels: bug/please verify canary/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:14:30 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T8103 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.13.4 Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug I moved…

### CASE-4969 · [NEXT-471] Calling cookies.set twice sets only one value, in API route with Edge runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, next.js
- **Signals**: 👍8 💬23 · closed · labels: bug/Runtime/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Not applicable, see reproduction here: [link] ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug Calling "cookies.set" twice on an API route with edge handler runtime will set only one cookie. ### Expected Behavior You'll see one "Set-Cookie" with 2 values, however it should be instead 2 "Set-Cookie" with only one value. Set-Cookie can be repeated as many…

### CASE-4970 · Cannot find name 'StaticImageData'.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍15 💬23 · closed · labels: Image (next/image)/TypeScript
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 & 11.1.3-canary.57 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next build ### Describe the Bug The following error occurs during type checking. ```bash node_modules/next/dist/client/image.d.ts:19:14 - error TS2304: Cannot find name 'StaticImageData'. 19 default: StaticImageData; ~~~~~~~~~~~~~~~ node_modules/next/dist/client/image.d.ts:21:45 - error TS2304: Cannot find name 'StaticImageData'. 21 declare type…

### CASE-4971 · Custom .babelrc file not being loaded after upgrading to Next.js 11
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍5 💬23 · closed · labels: bug/Webpack/locked/stale
- **Excerpt**: ### What version of Next.js are you using? 11.0.1 ### What version of Node.js are you using? 12.16.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? Other platform ### Describe the Bug Before upgrading to Next.js 11, my custom `.babelrc` file (which sits in the project's root directory) would be picked up by and used. When I booted up the project, I would always receive this message: <img width="855" alt="screenshot" src="[link]> However, after upgrading to 11, I no longer get this message when booting up the…

### CASE-4972 · Webp images using next/image are not converted to another format on incompatible browsers
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, opera, macos, ios, next.js
- **Signals**: 👍21 💬23 · closed · labels: Image (next/image)
- **Excerpt**: **What version of Next.js are you using?** 10.0.4 **What version of Node.js are you using?** 12.16.0 **What browser are you using?** Safari <= 13 **What operating system are you using?** MacOS, iOS **How are you deploying your application?** next start, externally hosted assets **Describe the Bug** If you pass an image src which is natively a `webp` to the `next/image` component, it is always served as a webp. Safari versions <= 13 do not include webp support so the image fails to load. The Accept header sent in the request to the `_next/image` endpoint from Safari looks like this: ```…

### CASE-4975 · Turbopack Not Compiling Tailwind CSS Changes in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, tailwind, next.js, typescript
- **Signals**: 👍31 💬22 · closed · labels: Turbopack/linear: turbopack/locked/CSS
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. **Initialize a New Next.js Project:** ```bash npx [email] . ``` 2. **Configure Project Settings:** Respond with **Yes** to all prompts except for customizing the import alias. - **TypeScript:** Yes - **ESLint:** Yes - **Tailwind CSS:** Yes - **`src/` Directory:** Yes - **App Router:** Yes - **Turbopack for Next Dev:** Yes - **Customize Import Alias:** No 3. **Start the Development Server:** ```bash npm run dev ``` 4. **Modify `layout.tsx`:** - **Comment Out Google Fonts:** ```tsx:src/app/layout.tsx // const geistSans =…

### CASE-4976 · navigation delayed for 60 seconds
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: edge, chrome 3
- **Signals**: 👍3 💬22 · closed · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `npm install && npm run build && npm run start` 2. Visit `localhost:3000/en/red` in either edge or chrome 3. Reload the page and immediately (within a few ms) click on the link to blue 4. Notice that the request to fetch the blue page completes, however the hydration does not complete for 60 seconds. Here is a video of the issue, note that I triggered navigation after reloading with ctrl+R: [link] framework]/assets/90681520/7d2e519d-aa6b-43a1-be78-5fbb261bfff2 ### Current vs. Expected behavior When clicking a link that…

### CASE-4977 · Next 13: Missing Types for generateStaticParams
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍16 💬22 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:19:52 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T6000 Binaries: Node: 16.18.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: 7.13.4 Relevant packages: next: 13.0.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug A…

### CASE-4978 · ENOENT: no such file or directory, stat '/vercel/path0/.vercel/output/functions/_next/data/4btXsoRTcvcyFLza13g3H/index.json.func'
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, next.js
- **Signals**: 👍0 💬22 · closed · labels: please add a complete reproduction/bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ![image]([link]) ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug the file it mentions, I checked it, and it actually exists. ### Expected Behavior Deployment should be successful, or if it's the intended behaviour that index page cannot return 404, it should be documented. ### Link to reproduction [link] ### To Reproduce run 'vercel build' and then run 'vercel…

### CASE-4979 · Supporting Emotion and The Next.js Edge Runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, linux, next.js, react
- **Signals**: 👍1 💬22 · closed · labels: bug/Runtime/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: [ref] SMP PREEMPT_DYNAMIC Fri Jul 22 14:03:36 UTC 2022 Binaries: Node: 16.15.0 npm: 8.5.5 Yarn: N/A pnpm: 7.1.7 Relevant packages: next: 12.2.4-canary.8 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ### Describe the Bug Emotion recently implemented `workers`…

### CASE-4980 · SSG pages re-render if middleware is being used
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 103, windows, next.js, react
- **Signals**: 👍12 💬22 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 14.18.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.2.1-canary.2 eslint-config-next: 12.2.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 103.0.5060.66 ### How are you deploying your application? (if relevant) next start, Vercel ### Describe the Bug By using the new stable middleware.js at the root of the project, all…

### CASE-4981 · Webp image with alpha channel is converted to jpeg image that has a black color for the alpha instead of being a transparent png
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, safari 13, windows, macos, next.js, react
- **Signals**: 👍20 💬22 · open · labels: Image (next/image)
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 14.17.6 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.1.2-canary.1 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Safari 13.1 (on macOS Catalina) through BrowserStack ### How are you deploying your application? (if relevant) next start, Vercel ### Describe the Bug After the implementation of the next/image webp convertion in `[email]` (see…

### CASE-4982 · next/image does not work with CDN
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, windows, linux, react, next.js
- **Signals**: 👍25 💬22 · closed · labels: bug/Image (next/image)
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.13.0 npm: 8.1.0 Yarn: N/A pnpm: N/A Relevant packages: next: 12.0.8 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8 ### What version of Node.js are you using? 16.3.0 ### What browser are you using? Chrome ### What operating system are you using? Windows, Linux ### How are you deploying your application? Other platform ### Describe the Bug The issue relates to a [previous bug]([link] framework][ref]), but that case…

### CASE-4983 · Error nextjs 12 css url data:image/svg+xml.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, opera, macos, next.js
- **Signals**: 👍15 💬22 · closed · labels: bug
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 16.2.0 ### What browser are you using? Safari ### What operating system are you using? macOS ### How are you deploying your application? next build ### Describe the Bug in css file ```css background-image:…

### CASE-4984 · PWA not working in production
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍7 💬22 · closed · labels: good first issue/examples
- **Excerpt**: ### What version of Next.js are you using? 12.0.1 ### What version of Node.js are you using? 14.17.4 ### What browser are you using? Chrome ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug I implemented PWA using `next-pwa` in my application, and went through all the necessary steps. ( creating service worker, next-config file, etc ). Everything looks fine in development - "**Install app**" option pops up . But in production it just seems to disappear, and not even shows the install option ### Expected Behavior PWA pop-up…

### CASE-4998 · Disabling useFileSystemPublicRoutes prevents rendering of dynamic routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, safari, next.js, react
- **Signals**: 👍3 💬21 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:19:52 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T6000 Binaries: Node: 16.15.1 npm: 8.11.0 Yarn: N/A pnpm: N/A Relevant packages: next: 12.3.1 eslint-config-next: N/A react: 17.0.2 react-dom: 17.0.2 ``` ### What browser are you using? (if relevant) Chrome, Safari ### How are you deploying your application? (if relevant) Custom Server ### Describe the…

### CASE-4999 · [[email]-canary.17 + [email]-rc.3] The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, next.js, react
- **Signals**: 👍0 💬21 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.4.0: Mon Feb 21 20:34:37 PST 2022; root:xnu-8020.101.4~2/RELEASE_X86_64 Binaries: Node: 16.13.1 npm: 8.1.2 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.1-canary.17 react: 18.0.0-rc.3 react-dom: 18.0.0-rc.3 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) next dev ### Describe the Bug The `[email]-canary.17` and…

### CASE-5000 · Middleware `NextResponse.rewrite` 404ing when rewriting "/" with another route when deployed to Vercel
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, linux, windows, react, next.js
- **Signals**: 👍3 💬21 · closed · labels: bug/Middleware
- **Excerpt**: ### Run `next info` (available from version 12.0.8 and up) Operating System: Platform: linux Arch: x64 Version: [ref] SMP Mon Oct 18 19:27:44 UTC 2021 Binaries: Node: 14.18.0 npm: 6.14.15 Yarn: 1.22.17 pnpm: 6.24.4 Relevant packages: next: 12.0.8-canary.18 react: 17.0.2 react-dom: 17.0.2 ### What version of Next.js are you using? 12.0.8-canary.18 ### What version of Node.js are you using? 14.18.0 ### What browser are you using? Firefox ### What operating system are you using? Windows ### How are you deploying your application? Vercel ### Describe the Bug Using middleware, NextResponse.rewrite…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4911 · Router.beforePopState not firing
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍8 💬28 · closed
- **Excerpt**: # Bug report I'm unable to get beforePopState trigger. ## Describe the bug As above. Never seems to trigger. ## To Reproduce As described in [ref], after it was closed, this seems to be broken again. I'm at 6.1.1-canary-2. I'm using the example from the readme.md in my _app.js (in componentDidMount()). Successfully using Router.events though. UPDATE: Put this in _app.js (from readme.md): ``` Router.beforePopState(({ url, as, options }) => { console.log('state popped') if (as !== "/" || as !== "/other") { // SSR-render the specified location. (Should 404) window.location.href = as; return…

### CASE-4928 · Pages with utf-8 name don't work properly under SSR
- **Principles**: P-F4 · **Env**: windows
- **Signals**: 👍36 💬26 · open
- **Excerpt**: # Bug report Pages with utf-8 non-ASCII characters in their name don't work properly under SSR ## Describe the bug Pages with utf-8 non-ASCII characters in their name work just fine with client-side navigation, but when rendered on server side return "404 This page could not be found." ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Create page 'pages/тест.js' 2. Navigate to [link] 4. See error "404 This page could not be found." ## Expected behavior I'm expecting to see page 'pages/тест.js' rendered ## System information - OS: Windows -…

### CASE-4939 · Documentation's Multi Zones example bugs on SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬25 · closed
- **Excerpt**: # Bug report I was having routing issues in my application after implementing Multi Zones. I went back to the docs' example and noticed the bug was also there. I hosted it on Now using the exact same example as the docs: [link] I'm not savvy enough to understand the origin of the bug. Where is this coming from? ## Describe the bug Visiting the link [[link]]([link]) fails when request from the browser. It works only when navigating to it client-side (Next Link) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Go to '[[link]]([link])' 2. See a…

### CASE-4940 · with-redux-persist SSR issue
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍8 💬25 · closed
- **Excerpt**: # Example bug report ## Example name with-redux-persist ## Describe the bug A clear and concise description of what the bug is. Implementing `with-redux-persist` leads to HTML elements missing from the page source. ## To Reproduce 1. In _app.js 2. Wrap the components with `<Provider>` and `<PersistGate>` `_app.js` ```JSX render() { const { Component, pageProps, reduxStore } = this.props; return ( <Container> <AppPageHead /> <GlobalStyle /> <Provider store={reduxStore}> <PersistGate loading={null} persistor={this.persistor}> <Layout> <Component {...pageProps} {...this.state} /> </Layout>…

### CASE-4956 · Invalid hook call. Hooks can only be called inside of the body of a function component.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍14 💬24 · closed
- **Excerpt**: # Bug report ## Describe the bug Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See [link] for tips about how to debug and fix this problem. ## To Reproduce <details> <summary>Details</summary> So the error points on this code ``` static async getInitialProps (ctx) { const sheet = new ServerStyleSheet() const…

### CASE-4992 · Hydration error when using Turbopack with dynamically imported named exports.
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍0 💬21 · closed · labels: bug/Lazy Loading/Turbopack/Pages Router/linear: turbopack
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Clone the reproduction repository: ```bash git clone [link] ``` 2. Install dependencies using pnpm: ```bash pnpm install ``` 3. Run the development server with Turbopack: ```bash pnpm dev:turbo ``` 4. Observe the console for hydration issues. ### Current vs. Expected behavior **Current Behavior:** - Webpack (pnpm dev): The application runs without issues, and both dynamically imported components (direct import and named export import) render as expected. - Turbopack (pnpm dev:turbo): The component that uses a named…

### CASE-4994 · App router: Content flickering with React.createContext and next/dynamic for SSG/SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍23 💬21 · closed · labels: bug/Lazy Loading/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Refresh the page 2. Notice that the right block with Client component and RSC inside noticeably flickers ### Current vs. Expected behavior When using `next/dynamic` with React.createContext, I expect that it will work the same way as without React.createContext. Please pay attention that initial request with html correctly contains all the needed html. Provider's rerender (recreating of the `value` object prop) then causes that flickering. [link] framework]/assets/102147606/165d4731-c2e4-4eb1-94f7-1f6d42898d75 ###…

### CASE-4995 · `suppressHydrationWarning` not working as expected for app router
- **Principles**: P-F4 · **Env**: opera, next.js
- **Signals**: 👍33 💬21 · closed · labels: React
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `npm install` 2. `npm run dev` 3. Open [link] in browser ### Current vs. Expected behavior Actual result: "Hello Server" is displayed Expected result: "Hello Client" is displayed ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 20.6.0: Thu Jul 6 22:12:47 PDT 2023; root:xnu-7195.141.49.702.12~1/RELEASE_ARM64_T8101 Binaries: Node: 18.17.0 npm: 9.6.7…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4912 · with-jest example doesnt work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬28 · closed
- **Excerpt**: when i run test from npm scripts i have error ``` C:\with-jest-app\jest.setup.js:1 ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { configure } from 'enzyme'; ^ SyntaxError: Unexpected token { at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:316:17) ``` | Tech | Version | |---------|---------| | next | 5.1.0 | | node | 10.0.0 |

### CASE-4920 · Compilation error - transform-react-jsx: pragma has been set but pragmaFrag has not been set
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, webpack
- **Signals**: 👍20 💬27 · closed
- **Excerpt**: # Bug report ## Describe the bug My build on Zeit is erroring with the following stack trace: ``` 17:35:38.096 Creating an optimized production build... 17:35:38.601 [webpack] Building release "1.0.0-beta.1_zBuNtNkFEHR1aBTmOhBpQ" 17:35:55.427 Failed to compile. 17:35:55.428 ./src/pages/_error.tsx 17:35:55.428 Error: /zeit/198ac8ea/src/pages/_error.tsx: transform-react-jsx: pragma has been set but pragmaFrag has not been set 17:35:55.428 > Build error occurred 17:35:55.429 Error: > Build failed because of webpack errors 17:35:55.429 at build…

### CASE-4957 · Decorators don't work in with-typescript example.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript, next.js, react
- **Signals**: 👍13 💬24 · closed
- **Excerpt**: # Examples bug report ## Example name with-typescript ## Describe the bug If I start using decorators, next.js throws an error to ask to add `@user/plugin-proposal-decorators`. And, it throws same error even after I add the plugin. ``` Syntax Error: 6 | } 7 | > 8 | @user | ^ 9 | export default class IndexPage extends React.Component{ 10 | render () { 11 | return <div> Add @user/plugin-proposal-decorators ([link]) to the 'plugins' section of your Babel config to enable transformation ``` ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Set…

### CASE-4959 · Better JSX
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: `JSX` as used with most `React` projects comes with a very obscure situation The following doesn't work: ``` js export default () => <div /> ``` You need to `import React from 'react'` so that the JSX transformation to `React.createElement`, which appears nowhere in the source, works. How do we fix this? - Perhaps transform to `Next.createElement` which invokes the right adapter ([ref]). Downside: extra invocation - Switch to a JSX compilation that uses plain JavaScript objects and hope that React adopts it (and perhaps other adapters ([ref]))

### CASE-4989 · Migrate from core-js@user to core-js@user in Babel config
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍27 💬22 · closed
- **Excerpt**: # Feature request ## Is your feature request related to a problem? Please describe. core-js@user has been released in March 2019, adding a lot of new features. It's a great time to revamp the Babel config provided by Next. ## Describe the solution you'd like A modern-ish approach to configure Babel. ## Describe alternatives you've considered Got rid of `next/babel` preset in custom Babel config, adding everything by hand. ## Additional context So, I had this quite straightforward Babel config (`.babelrc`) for ages: ``` { "plugins": [ "@user/plugin-transform-flow-strip-types",…

### CASE-4990 · Next v6 page transition error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍12 💬22 · closed
- **Excerpt**: After upgrading to next 6.0.0, when running Next in dev mode, page transitions sometimes get stuck rendering the current page rather than rendering the next page. - [x] I have searched the [issues]([link]) of this repository and believe that this is not a duplicate. ## Expected Behavior When clicking a `<Link />` in dev mode, after the page bundle builds, the client should navigate to the linked page. The behavior is inconsistent and I have not been able to reproduce this issue when the page is already built. ## Current Behavior After the next page bundle builds, the client re-renders the…

### CASE-4993 · [Bug] [Lottie + Tailwind + NextJS 14] Loading.tsx page not displaying Lottie animations
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, tailwind, next.js, react, typescript
- **Signals**: 👍3 💬21 · closed · labels: examples
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Available memory (MB): 16240 Available CPU cores: 16 Binaries: Node: 18.20.2 npm: N/A Yarn: N/A pnpm: N/A Relevant Packages: next: 14.2.4 // Latest available version is detected (14.2.4). eslint-config-next: 14.2.4 react: 18.3.1 react-dom: 18.3.1 typescript: 5.5.3 Next.js Config: output: N/A ``` ### Which example does this report relate to? with-tailwindcss ### What browser are you…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4921 · `next/og` cause memory leak in production standalone build
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍13 💬26 · closed · labels: bug/Image (next/image)/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. build project 2. run as standalone build `node server.js` 3. open `/og` 4. open devtools and force refresh the page(ignore cache) more times. 5. watch the system monitor, and the next app memory usage is increasing. The initial memory usage about to 50M, and refresh `/og` about 10 times, got 300M ![CleanShot 2024-05-07 at 8 26 37@user]([link] framework]/assets/41265413/a5596f61-dac7-465a-8885-b6b219e8d749) ![CleanShot 2024-05-07 at 8 30 54@user]([link] framework]/assets/41265413/a466bd3e-6146-49c3-bc89-95ce3053eb10) I…

### CASE-4931 · Memory Leak with node 22 (also 20, 24) + fetch + Next 16.0.1 + `output: standalone`
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍35 💬25 · closed · labels: Runtime/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Run `pnpm install` 2. In `src/app/page.tsx`, replace `"[link] with some JSON endpoint. I didn't want to put someone's URL here as to not DDOS them haha. Preferably one where you are not rate limited. You can probably separately set up a seperate folder with an [`express`]([link]) (or similar) API endpoint that returns a large JSON payload as to not DOS anyone. As to not pollute the test, it may be best for you to not make this JSON endpoint in this example Next repo itself (this may not make a difference though tbf) 3.…

### CASE-4991 · `use cache: private` not working during client-side navigation
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍28 💬21 · open · labels: linear: next/Cache Components
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Create a cached function with "use cache: private" that uses cookies(): ```tsx // lib/user.ts import { cookies } from "next/headers"; import { cacheTag, cacheLife } from "next/cache"; export async function getUser() { "use cache: private"; cacheTag(`userdata`); cacheLife({ stale: 30 }); const sessionId = (await cookies()).get('session-id')?.value || 'guest' console.log("Fetching user data"); // This logs on every navigation await new Promise((resolve) => setTimeout(resolve, 5000)); const timestamp = new…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-4922 · Error [ERR_UNSUPPORTED_ESM_URL_SCHEME] on Windows Using [npm run dev]
- **Principles**: P-B1, P-B2, P-B3 · **Env**: windows, next.js
- **Signals**: 👍23 💬26 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1- Clone the project: [link] "v14.2.0" 2- npm run dev ### Current vs. Expected behavior After I did (npx create-next-app@user) and tried to run the project with (npm run dev)... I expected to see the default homepage of next.js, But It tells me: An error occurred in next/font. Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'd:' at throwIfUnsupportedURLScheme…

### CASE-4961 · Next.js 15 stable codemod has now caused my local font imports to produce hydration errors
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: opera, next.js
- **Signals**: 👍2 💬23 · closed · labels: bug/Font (next/font)/locked
- **Excerpt**: I've updated the repo, simplified it, and created easy steps to reproduce this issue based off @user feedback. I'm editing the original comment here below to reflect all that. ### Link to the code that reproduces this issue [link] ### To Reproduce 1. `git clone [link] 1. `cd trisanity-test` 1. `npm i` 1. `npm run dev` The hydration errors: ![CleanShot 2024-10-23 at 14 32 29@user]([link]) ### Current vs. Expected behavior Current behaviour: a working app with hydration errors Expected behaviour: a working app without hydration errors ### Provide environment information ```bash Operating…

### CASE-4997 · `@user/font` does not work in custom `pages/_document`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍7 💬21 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 21.6.0: Mon Aug 22 20:19:52 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T6000 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.1.2-canary.8 eslint-config-next: 13.1.2 react: 18.2.0 react-dom: 18.2.0 warn - Latest canary version not detected, detected: "13.1.2-canary.8", newest: "13.1.2". Please try the latest canary version (`npm install…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-4941 · Duplicate <meta name="viewport"> if the custom one is defined in _document.js
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3 · **Env**: next.js, mobile
- **Signals**: 👍24 💬25 · closed
- **Excerpt**: # Bug report I recently upgraded to the latest canary and noticed horizontal scrolling on some mobile devices. As it turned out, this was caused by [ref] (cc @user). Although the default new value of `viewport` is inserted only when there is no custom one, this logic did not work for me, because my custom `viewport` tag was in `_document.js` and not inside `<Head />`. ``` <meta name="viewport" content="width=device-width" /> ``` Moving the tag into `<Head />` solved the issue, but it took a while to investigate. ## Expected behavior It'd be great if Next.js searched for `<meta name="viewport"…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4946 · Meta theme-color is missing in the html, while meta viewport value is incorrect
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍4 💬24 · closed · labels: bug/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1/ run `next dev` ### Current vs. Expected behavior - log show ```powershell ⚠ Unsupported metadata themeColor is configured in metadata export. Please move it to viewport export instead. ⚠ Unsupported metadata viewport is configured in metadata export. Please move it to viewport export instead. ``` those 2 meta field didn't rendered to the html - change the code move themeColor and viewport option to viewport export: ```ts export const viewport: Viewport = { themeColor: '#996c254d', width: '1024' } ``` those 2 meta field…

### CASE-4948 · [NEXT-517] Breakpoint not getting hit in VSCode with Next.js debugger config
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, windows, next.js, react
- **Signals**: 👍6 💬24 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.14.2 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.1.7-canary.7 eslint-config-next: 13.1.6 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To Reproduce !!!!!!!!!!!!!!!!!!!!! You should be using node v 16.14.2 !!!!!!!!!!!!!!!!!!!!…

### CASE-4986 · next/image resize not working as expected
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬22 · closed
- **Excerpt**: # Bug report ## Describe the bug First of all thanks for all the efforts building up to the 10.0.0 release! 💪 I've been experimenting with the `next/image` `<Image />` component to do some auto optimisations for the images on my blog. Unfortunately I quickly ran into some resizing issues. When I resize my viewport to be smaller than the image I would expect the image to resize automatically to a smaller variation but it doesn't. ## To Reproduce Unsure how to reproduce since it might be user error. I'm experimenting with some basic examples like: ```js <Image src="/avatar.png" alt="avatar"…

### CASE-4988 · Multiple viewport meta tags
- **Principles**: P-A1, P-A4, P-G3 · **Env**: next.js
- **Signals**: 👍0 💬22 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug Custom viewport meta tags in the `_document.js` page are ignored by the browser because next.js pushes it's own viewport meta tag without checking if any exists already. As a result, we end up with this: ```html <head> ... <meta name="viewport" content="viewport-fit=cover"/> <!-- ignored 🤕 --> ... <meta name="viewport" content="width=device-width" /> ... </head> ``` I could trace the problem down to this part of the code: [link] ## To Reproduce 1. Define a viewport meta tag in the `_document.js` page. 2. Open any page of your app and look for `<meta…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-4965 · next/server ImageResponse throws `Error: Expected <div> to have explicit "display: flex"...` when mixing variables and text
- **Principles**: P-A2, P-A4, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: opera, windows, next.js, react
- **Signals**: 👍8 💬22 · open · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 16.13.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.1-canary.4 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Deploy [the mentioned repo]([link]) to Vercel or locally with `npm run…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4967 · Standalone build does not include server-side variables from `.env.local`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js, react
- **Signals**: 👍18 💬23 · closed · labels: bug/Output
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.2.0: Fri Nov 11 02:04:44 PST 2022; root:xnu-8792.61.2~4/RELEASE_ARM64_T8103 Binaries: Node: 18.13.0 npm: 8.19.3 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.1.7-canary.28 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Standalone mode (output: "standalone") ### Link to the code that reproduces…

### CASE-4973 · Misleading documentation: variables in .env and .env.test are not being loaded in test environment
- **Principles**: P-E1, P-E2, P-E4 · **Env**: next.js
- **Signals**: 👍3 💬23 · closed · labels: please verify canary
- **Excerpt**: # Bug report ## Describe the bug According to [these docs]([link]): > Next.js allows you to set defaults in `.env` (all environments) [Further down on the same page]([link]): > Apart from `development` and `production` environments, there is a 3rd option available: `test`. In the same way you can set defaults for development or production environments, you can do the same with `.env.test` file for testing environment But variables in `.env` and `.env.test` are not being loaded when running tests. ## To Reproduce Basic setup and `.env`: 1. `create-next-app -e with-jest` and enter a name 2. `cd…

### CASE-4974 · Regression: Since 15.3 environment variables are not available in client components using standalone output mode
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍12 💬22 · open · labels: Output/Dynamic Routes
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Build the application using the `build` command. 2. Run the output with `node .next/standalone/server.js`. ### Current vs. Expected behavior Client components can’t seem to access environment variables that I’m 100% sure are defined (other components can access them just fine). I’d expect them to be able to access `NEXT_PUBLIC_*` environment variables. Let’s refer to my `MOCK_ENV_VAR` environment variable: - I’ve set it in the environment where the process is running. - I’ve set both `MOCK_ENV_VAR` and…

### CASE-4985 · Improve with-apollo example to more closely align to Next.js standards
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, next.js
- **Signals**: 👍6 💬22 · closed · labels: examples/bug
- **Excerpt**: **What example does this report relate to?** with-apollo **What version of Next.js are you using?** latest **What version of Node.js are you using?** latest **What browser are you using?** any **What operating system are you using?** any **How are you deploying your application?** any **Describe the Bug** The current `with-apollo` example fetches data and adds it to the cache, but never returns that data inside `getStaticPaths` / `getSeverSideProps`. ```js await apolloClient.query({ query: ALL_POSTS_QUERY, variables: allPostsQueryVars }) ``` **Expected Behavior** All other usage of…

