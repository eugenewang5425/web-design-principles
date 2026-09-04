# Case Chunk 035 — Round 35

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4401 · `Error: Dynamic require of "/inlinedQRL.js" is not supported` when site requested from Netlify Edge Function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, chrome
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version Qwik: 0.9.0, Qwik City 0.0.111 ### Operating System (or Browser) Chrome, mac OS ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour I see a successful deploy in Netlify and can visit my site. ### Actual Behaviour I get an error when visiting my site and the an error in my Edge Function logs: > This edge function has crashed An unhandled error in the function code triggered the following message: > >The deployment failed while serving the request. >Connection details >Netlify internal ID: 01GDNNS55951CJ15AGR0JKZ73E…

### CASE-4404 · useDocument does not return document
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, macos
- **Signals**: 👍0 💬4 · closed · labels: bug/runtime
- **Excerpt**: ### Qwik Version 0.0.100 ### Operating System (or Browser) MacOS 12.5 / Chrome 104.0.5112.79 ### Node Version (if applicable) v16.13.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour In version 0.0.39 I used `useDocument` to retrieve `document.location`. ### Actual Behaviour I upgraded to 0.0.100 and it does not work anymore. Instead, i receive something like this: `{"nodeType":9,"parentElement":null,"ownerDocument":null,":platform:":{"isServer":true}}` ### Additional Information Not sure if this is enough info or properly written. Please let me know what I could provide…

### CASE-4405 · Qwik City - Optional route parameters not working as expected from v0.0.33
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/, firefox
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.42 ### Operating System (or Browser) Chrome/Firefox ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour From the docs: ``` - src/ - routes/ - sku/ - [skuId]/ - index.js # [link] - details.js # [link] ``` ``` [link]] Will match: [link] Will match: [link] [link]]/details Will match: [link] ``` ### Actual Behaviour At the moment the navigation above is not working: always redirects to `index`, and when you navigate to `[link] `skuId` parameter contains all the final segments: `1234/details` **EDIT** The issue…

### CASE-4406 · Change global.css to global.scss loaded from root.tsx not working anymore
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 103, windows, vite, typescript
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) chrome 103 on windows 11 ### Node Version (if applicable) node 18 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour From the qwik starter, the root component loads the global.css styles and the App component like this: ```typescript import { App } from "./components/app/app"; import "./global.css"; export default () => { return ( <html> <head> <meta charSet="utf-8" /> <title>Qwik Blank App</title> </head> <body> <App /> </body> </html> ); }; ``` If I change `import "./global.css";` to `import…

### CASE-4408 · [BUG] There is a debugger
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.36 ### Operating System (or Browser) Windows + Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour To not have a debugger in line: [link] ### Actual Behaviour The apps stops trying to render this logErrorAndStop ### Additional Information _No response_

### CASE-4413 · [🐞] iOS browser back leaving website
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, ios
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/needs reproduction/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug On iOS Chrome, most of the time going back (browser back) actually leaves the whole website. All the SPA routing is skipped. Works much better on Safari ### Reproduction / ### Steps to reproduce _No response_ ### System Info ```shell beta-23 ``` ### Additional Information _No response_

### CASE-4414 · [🐞] v2: `fastInsertBefore` errors in certain navigation scenarios
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ios
- **Signals**: 👍0 💬3 · closed · labels: bug/waiting for user/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Under certain scenarios, navigation through a `<Link>` element throws an error related to the `Node.insertBefore` function inside `fastInsertBefore`. The result is that the navigation does not happen cleanly, and the elements in the resulting page can appear out of order or with incorrect styling. <img width="1236" height="214" alt="Image" src="[link] /> Error in Chrome: ``` Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this…

### CASE-4419 · [🐞] server$ "this" of type RequestEventBase missing "error" fn
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs reproduction
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug server$ "this" doesn't have "error" in type definitions Goals you are trying to achieve: throw this.error(401, "...") It works in runtime. Only type problem ### Reproduction ... ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 15.4.1 CPU: (14) arm64 Apple M4 Pro Memory: 2.50 GB / 48.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.3 - ~/.nvm/versions/node/v21.7.3/bin/node npm: 10.5.0 - ~/.nvm/versions/node/v21.7.3/bin/npm bun: 1.0.13 - ~/.bun/bin/bun Browsers: Chrome: 132.0.6834.111 Edge:…

### CASE-4430 · [🐞] Firefox: navigator.serviceWorker is undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hey, when I visit the page in Firefox private browsing mode, it throws the error: `navigator.serviceWorker is undefined` Apparently service workers are not supported in Firefox's private browsing mode. The counter works like expected, but the error gets printed to the console regardless. - [link] ### Reproduction [link] ### Steps to reproduce 1. `pnpm install` 2. `pnpm build` 3. `pnpm preview` 4. Open [link] in incognito Firefox ### System Info ```shell System: OS: macOS 14.3 CPU: (10) arm64 Apple M1 Pro Memory: 777.31 MB /…

### CASE-4434 · [🐞] Qwik sends server version of components to browser (instead of browser version)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I have a npm package that exports Qwik components. I want to have server, browser and edge versions of each. I use the `exports` key in `package.json` to dictate which one should be used. When importing this package in a Qwik webapp, it will always send the server version of a component to the browser instead of the browser version. ### Reproduction [link] ### Steps to reproduce - pnpm i - cd app - pnpm dev Look at the console logs, and the network tab: `qwik-monorepo-playground/lib/lib/node/index.qwik.mjs` gets…

### CASE-4437 · [🐞] CacheControl s-maxage and stale-while-revalidate not applied on vercel edge
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge, typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Using `cacheControl` in a `RequestHandler`, vercel edge doesn't apply staleWhileRevalidate and sMaxAge properties. [On their docs]([link]): > If you set Cache-Control without a CDN-Cache-Control, the Vercel Edge Network strips s-maxage and stale-while-revalidate from the response before sending it to the browser. To determine if the response was served from the cache, check the [x-vercel-cache]([link]) header in the response. For example, with code from the basic template: ```typescript cacheControl({ // Always serve a…

### CASE-4440 · [🐞] Playing Audio on iOS Devices via onClick$ / QRLs does not work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, ios
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug On iOS devices, auto-playing audio and video+sound in web content is restricted to prevent unexpected data usage. Audio and video playback in iOS Safari requires a direct user action, such as a tap, preventing scripts from auto-playing media without user initiation. The discovery here is that Apple's iOS security measures ALSO PREVENT playing audio / video+audio from a `QRL` because it's not directly wired to the `.play()` call, requiring **TWO taps**. Even something as simple as deferring the play call within a `setTimeout(…

### CASE-4442 · [🐞] Stoybook integration uses inconsistent task name
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge/, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug These are the contents of package.json ``` "build": "qwik build", "build-storybook": "storybook build", "build.client": "vite build", "build.preview": "vite build --ssr src/entry.preview.tsx", "build.server": "vite build -c adapters/vercel-edge/vite.config.ts", "build.types": "tsc --incremental --noEmit", "deploy": "vercel deploy", "dev": "vite --mode ssr", "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force", "fmt": "prettier --write .", "fmt.check": "prettier --check .", "lint": "eslint…

### CASE-4445 · [🐞]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, linux
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am trying to build a login system with login modal. Having state declared using qwik context. But it is not updating the modal to be hidden when clicked on close button ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 6.2 Pop!_OS 22.04 LTS CPU: (8) x64 Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz Memory: 1021.59 MB / 7.59 GB Container: Yes Shell: 3.3.1 - /usr/bin/fish Binaries: Node: 18.16.0 - /usr/bin/node npm: 9.6.7 - /usr/bin/npm Browsers: Firefox: 113.0.2 npmPackages:…

### CASE-4446 · [🐞] QwikKeyboardEvent missing isComposing property
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I think this is an issue of missing type definition ### Reproduction [link] ### Steps to reproduce ```tsx <textarea onKeyDown$={(evt, el) => { console.log(evt.isComposing) // false or true }} /> ``` ### System Info ```shell System: OS: macOS 13.3.1 CPU: (10) arm64 Apple M1 Pro Memory: 5.63 GB / 32.00 GB Shell: 3.6.1 - /opt/homebrew/bin/fish Binaries: Node: 20.1.0 - /opt/homebrew/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 9.6.4 - /opt/homebrew/bin/npm Browsers: Chrome: 113.0.5672.126 Safari: 16.4 npmPackages:…

### CASE-4448 · [🐞] Signals in ternary causing elements to rerender that shouldn't
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug - open stackblitz. - click button multiple times. - see elements between signals get rerendered. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell stackblitz -- and -- System: OS: Windows 10 10.0.19045 CPU: (20) x64 12th Gen Intel(R) Core(TM) i9-12900HK Memory: 11.21 GB / 31.68 GB Binaries: Node: 18.15.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm: 9.6.6 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium…

### CASE-4464 · [🐞] Odd render behavior (reactivity)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, react
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug It seems some useStore values don't update the dom correctly / consistently. video: [link] repo: [link] ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell stackblitz -- or -- System: OS: Windows 10 10.0.19045 CPU: (20) x64 12th Gen Intel(R) Core(TM) i9-12900HK Memory: 13.29 GB / 31.68 GB Binaries: Node: 18.12.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm: 8.19.2 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium…

### CASE-4478 · [🐞] Vercel Adaptor | Root-level dynamic route intercepts static files
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug ## I am doing In the `routes` directory of my project I have a folder `[username]` with an `index.tsx` file that has an `onGet` handler as well as a default component. ## What I expect is Any file served in the public folder (images, favicon, manifest.json, etc) does not trigger dynamic routing. ## What's actually happening is Files like images are requested, but rather than the file being served, the edge middleware is intercepting and treating it like a dynamically routed page. Ex: "www.website.com/favicon.ico" is…

### CASE-4480 · after link navigation useResource cause an error Invoking 'use*()' method outside of invocation context
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Mac OS 12.6.1 google chrome 104.0.5112.101 ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour executing useResource on the server or on client ### Actual Behaviour at the first request of the page on which the useResource is used, everything works correctly, but if we go to a page that uses useResource from another page by Link it will cause an error: ```console Code(14): Invoking 'use*()' method outside of invocation context. Error: Code(14): Invoking 'use*()' method…

### CASE-4481 · Array change in store does not cause re-render
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, safari, chrome
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Safari and Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour If a store is initialized with 'recursive', and you update an array of objects with a new array that has completely different items, that change should be reflected. ### Actual Behaviour Changes are not reflected in child components, but they are reflected in the parent component. ### Additional Information I tried setting the array by spreading `state.someArray = [...newValues];`, but that didn't work.…

### CASE-4482 · Conditional rendering with React integration components not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, linux, react, typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Arch Linux, Firefox, Brave ### Node Version (if applicable) 18.2.0 ### Which component is affected? Qwik React ### Expected Behaviour When using a React Component created with the `qwikify$()` function and conditionally rendering this component, different components should render based on a change of state. ```typescript /** @user react */ import { qwikify$ } from '@user.io/qwik-react'; import { DotsThree, DotsThreeVertical } from 'phosphor-react'; export const DotsThreeIcon = qwikify$(DotsThree); export const DotsThreeVerticalIcon =…

### CASE-4483 · 404 Static Routes
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, edge
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.2 ### Operating System (or Browser) Brave ### Node Version (if applicable) 16.18.1 ### Which component is affected? Qwik City 0.0.122 ### Expected Behaviour Resources in `/public` should be served. ### Actual Behaviour Receive 404 when trying to access resources in `/public`. See the results [here]([link]). For example, there should be an image at [link] ### Additional Information I am using Netlify Edge function. This previously worked in 0.12.1. I rolled back to 0.12.1 and it still worked. <details><summary>Netlify build log:</summary> <pre> 8:13:44 AM: Build ready to…

### CASE-4485 · Three.js canvas blank on demo with no error message
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, react
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) chrome ### Node Version (if applicable) 18.9.0 ### Which component is affected? Qwik React ### Expected Behaviour The demo page for qwik/react mother of all demos does not render any three.js components. ### Actual Behaviour Qwik should render and show the three js component ### Additional Information In my project I attempted to convert a react three fiber project to qwik. I was un successful because I would only get a blank canvas. I ran this demo and still get a white blank canvas: [link]

### CASE-4486 · useResource$ doesn't abort async operation when tracked state changes during SSR
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Chrome, OSX ### Node Version (if applicable) 16 ### Which component is affected? Qwik Runtime ### Expected Behaviour Expect a `useResource$` hook to cancel any requests if the tracked store changes during SSR and re-execute the request. ### Actual Behaviour The `useResource$` hook only cancels requests on the client. During SSR the hook always waits for the `useResource$` to completely finish before executing again. ### Additional Information [Reproduced here]([link])

### CASE-4492 · `base` props isn't used in CSS link
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version v0.10.0 ### Operating System (or Browser) macOs + Chrome ### Node Version (if applicable) v18.10.0 ### Which component is affected? Qwik City ### Expected Behaviour if I set the `base` parameter, it should be used in the css link ### Actual Behaviour `return renderToStream(<Root />, { [...] base: '[link] [...] });` <img width="483" alt="Screenshot" src="[link]> ### Additional Information _No response_

### CASE-4493 · Dynamic routing doesn't work when using trailing slashes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) FireFox v105.0 ### Node Version (if applicable) Node v16.17.1 ### Which component is affected? Qwik City ### Expected Behaviour When pressing the browser back button, QwikCity should update the DOM with the correct page. ### Actual Behaviour The URL changes, but the DOM doesn't update with the correct page. For example, given that routing is structured like so: ``` routes └── projects ├── [id] | └── index.tsx └── index.tsx ``` When navigating from `/projects/123/` back to `/projects/` the page isn't updated. ### Additional Information…

### CASE-4494 · useEndpoint returns undefined data after client-side navigation
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: opera, firefox, ubuntu
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Ubuntu/Firefox ### Node Version (if applicable) 18.7.0 ### Which component is affected? Qwik City ### Expected Behaviour In my Qwik City project, if I use `<Link>` to navigate from a page with an `onGet` (let's call it the "dynamic" page), to one without an `onGet` (static), I would expect that even if we need to "render" the dynamic page to do unmount effects or something like that, the useEndpoint result should return the actual data that was loaded initially. ### Actual Behaviour I'm seeing that the the component for the dynamic page…

### CASE-4495 · useClientEffect$ console.log is not printing in browser console.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour When using useClientEffect$ i would assume that it would run in browser console as only browser needs to execute the code. ### Actual Behaviour When using useClientEffect$ console.log is not printing in browser console. ### Additional Information <img width="772" alt="Screenshot 2022-09-23 at 8 29 23 AM" src="[link]> Below is my code i am using ```tsx ## For fancy-name import { component$, Slot, useClientEffect$, } from…

### CASE-4497 · DocumentHead - title is not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik City ### Expected Behaviour When using DocumentHead and setting title page title should be updated to the title string ### Actual Behaviour When using DocumentHead and setting title page is not working. ### Additional Information ` import { component$, useClientEffect$, useStore, } from "@user.io/qwik"; import type { DocumentHead } from "@user.io/qwik-city"; export default component$(() => { const store = useStore({ count: 1, start: false, });…

### CASE-4499 · js files load slowly when dynamic route exists
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, macos
- **Signals**: 👍1 💬3 · closed · labels: bug/waiting for user/needs reproduction
- **Excerpt**: ### Qwik Version qwik: 0.0.108, qwik-city: 0.0.108 ### Operating System (or Browser) MacOS Monterey 12.3.1 / Chrome 104.0.5112.79 ### Node Version (if applicable) 14.19.1 ### Which component is affected? Qwik City ### Expected Behaviour js files load fast around 10ms ### Actual Behaviour js files load slowly around 900ms ### Additional Information so I make routes like this: src/routes/[category]/index.tsx src/routes/index.tsx src/routes/layout.tsx when i have dynamic route "[category]/index.tsx" it makes js files load slowly, maybe it hit [category]/index.tsx instead or not included to build…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4402 · Fetching component fails
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: opera, react
- **Signals**: 👍0 💬4 · closed · labels: DX
- **Excerpt**: ### Qwik Version v0.9.0 ### Operating System (or Browser) Mac Brave ### Node Version (if applicable) v16.17.0 ### Which component is affected? Qwik React ### Expected Behaviour When I click on the icon it switched from the `eyeShow` image to the `eyeHide` image and the input type switched from a `password` to a `text`. ### Actual Behaviour It crashed with this error. ``` Failed to fetch dynamically imported module: [link] ``` ### Additional Information Here is a minimal [repo]([link]) built with `npm create qwik@user` to see the error.

### CASE-4417 · [🐞] [v2] enabling SSG in the dev-server stops images from emitting
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬3 · open · labels: bug/router
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When adding the node adapter to the starters testing dev-server, the frontpage image tests fail, because the images generated by vite-imagetools are no longer under dist/assets ### Reproduction [link]]/blob/aad9ef68913a8db3e939b121cb6bcae8ee205c8f/starters/dev-server.ts#L153-L172 ### Steps to reproduce uncomment the lines and run `pnpm serve`, then go to the qwikrouter-test and notice the broken images. Not sure if this happens in v1 as well. ### System Info ```shell v2 ``` ### Additional Information _No response_

### CASE-4426 · [🐞] New child added cannot access to parent context
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug We noticed a bug by rendering a new element under a parent with context. Qwik try to render the new element, it throws an error telling us he cannot access to the parent context : <img width="1726" alt="image" src="[link]> Here is the corresponding code : Parent wrapper ```tsx import { component$, createContextId, Slot, useContextProvider, useStore } from "@user.io/qwik"; export const WrapperContext = createContextId<{ active: boolean }>('FLOWBITE_QWIK_WRAPPER_CONTEXT') export const Wrapper = component$(() => {…

### CASE-4427 · [🐞] [Website] 500 - Cannot communicate with REPL service worker
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍1 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug I am trying to see the runnable examples in the website but most of them if not all of them are returning this in the consoles, and nothing loads... > 500 - Cannot communicate with REPL service worker - [link] ![image]([link]) It would be expectable to have the runnable examples working and readily available instead. ### Reproduction [link] ### Steps to reproduce Just visit the link and the examples should act up ### System Info ```shell System: OS: Windows 11 10.0.22635 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @…

### CASE-4432 · [🐞]why the index.html file isn't being created. after using npm run build in qwik project?
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I try to build a project. using npm run build. I expected to create index.html file in dist or build folder, however the actual result did not include the index.html. ![image]([link]) ### Reproduction none ### Steps to reproduce _No response_ ### System Info ```shell npx ``` ### Additional Information _No response_

### CASE-4447 · [🐞] QwikCity not found pages throw error in production with fastify
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Hey, I hope you're doing well. I may have encountered an issue with the boostraped project. Run `npm create qwik@user`, then `npm run qwik add` and `npm run build`. Run `npm run serve` and open a page that does not exist. For example `localhost:3000/1`. You'll get: ![image]([link]) Setting the ORIGIN previously doesn't work: ![image]([link]) I've tried setting it in multiple ways, making sure the host is always matching the origin: ```javascript await fastify.listen({ port: PORT, host: 'localhost' }); ``` And I'm…

### CASE-4450 · [🐞] [integrations, vitest] Watchmode does not recognize component's template changes
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug - When I test a Component and edit the JSX-Template to make a red test green, the test still fails - After restarting vitest the test is green. - 🎥 [See the video for a detailed explanation]([link]) ### Reproduction [link] ### Steps to reproduce Same setup like in [link] ``` git clonse [link] cd qwik-qwikify-mui- pnpm install pnpm test.unit # The test fails, it is expected # Open a 2nd terminal session and run git checkout test-passes # the test still fails, but should pass # Vitest will rerun the test, but the test will be…

### CASE-4451 · [🐞] 404 page not working with fastify ssr
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I've added in the Fastify integration and after building then running `npm run deploy` either locally or on my final deployed server I get an Internal Server Error when accessing any page that doesn't exist. I don't have any custom 404 page, also this works fine when running `npm run dev` i just see the default 404 page. ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. go to stack blitz demo 2. navigate to a route that doesn't exist to trigger a 404 3. see error ### System Info…

### CASE-4455 · [🐞] Fresh repo with "npm create qwik@user" crashes on `pnpm build`
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug - run `npm create qwik@user` - cd to directory - `pnpm install` - `pnpm build` I get an `exit code 1` without any details: <img width="364" alt="CleanShot 2023-03-25 at 13 43 14@user" src="[link]> Note that `pnpm dev`, and all other `pnpm build.*` commands seem to work fine ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.1 CPU: (10) arm64 Apple M1 Max Memory: 79.20 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.4.0 - ~/.asdf/installs/nodejs/17.4.0/bin/node…

### CASE-4456 · [🐞] npm create qwik@user freezes for 1 minute without any UI update
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug After the "Happy Coding" message, the CLI froze for 55 seconds without any indication as to what is going on. <img width="504" alt="CleanShot 2023-03-25 at 13 29 12@user" src="[link]> ### Reproduction N/A ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.1 CPU: (10) arm64 Apple M1 Max Memory: 823.56 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.4.0 - ~/.asdf/installs/nodejs/17.4.0/bin/node Yarn: 1.22.15 - ~/.asdf/installs/nodejs/17.4.0/bin/yarn npm: 8.3.1 -…

### CASE-4463 · [🐞] action$ value only displays after submitting form more than once (dev mode only)
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug The first time you submit a form in dev mode with `<Form />` or `run();`, it doesn't display the value returned by the action$. If you submit the form again (without reloading the page) it will display the value. If you submit an action$ with a standard html `<form>`, it works fine. video: [link] I couldn't figure out how to submit forms with stackblitz but I included it for the example code I made. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045…

### CASE-4479 · [🐞] Assets in qwik city are loaded from a page's folder name instead of public
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When I use an asset from the public folder in a page, e. g.: `<img src="favicon.svg" />` in the flower page from the qwik starter script, I get an error in the browser, that the resource was not found in that directory: `GET [link] 404 (Not Found)` I'm using qwik 0.14.1 and and qwik-city 0.0.127 ### Reproduction [link] ### Steps to reproduce I used the starter script: `npm create qwik@user` and added in the flower page an image element, so the flower page looks like this: ```html <> <img src="favicon.svg" /> <!-- <-…

### CASE-4488 · Using the static adaptor AND setting a `basePathname` in qwik city does not generate .html files
- **Principles**: P-A3, P-H1 · **Env**: opera, ubuntu
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Ubuntu 20.04 (WSL 2) ### Node Version (if applicable) 18.7.0 ### Which component is affected? Qwik City ### Expected Behaviour The command "npm run build" should produce `.html` files in the dist directory with the `basePathname` prefixed to the paths within said `.html` files. ### Actual Behaviour No `.html` files are generated in the dist folder. ![image]([link]) ### Additional Information It works as expected if `basePathname` in `qwikCity` is not set.

### CASE-4496 · Parent component not consistently rendering children on store state changes
- **Principles**: P-A3, P-H1 · **Env**: opera, react
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Brave on Mac 12.5 Monterey ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour Parent component (Modal) should consistently render its children (Modal content) when store state changes. ### Actual Behaviour The first time I click to open the modal, it will display the slotted children but after closing it and reopening, it will not. Just got started with Qwik yesterday, so maybe this is some kind of gotcha that I missed in the docs. I'm coming from react/next <img…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4403 · SSR | OnGet | UseEndpoint.resolved
- **Principles**: P-F4 · **Env**: opera, desktop, mobile
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version "@user.io/qwik": "0.0.105", ### Operating System (or Browser) all ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour Previously this problem has not been solved ES: Anteriormente este problema no ha podido ser resuelto ### Actual Behaviour We want to render according to the header of the request two different components (for example), one for desktop and one for mobile, by default in the store we mark to render the mobile, this causes a choice issue on desktop devices due to the order of execution. Given the: 1.…

### CASE-4415 · [🐞] V2 Issue - Components that dont return ui during SSR phase wont trigger task/resource hooks.
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Im trying to migrate to v2, and I have a component that doesnt render any ui during SSR phase. it messes up the useVisibleTask and/or useResource(..), they won't trigger anymore in this specific case. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 26.1 CPU: (8) arm64 Apple M1 Pro Memory: 66.36 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.9.0 - /Users/omerprizner/.nvm/versions/node/v24.9.0/bin/node npm: 11.6.0 -…

### CASE-4418 · [🐞] undici v7 uses node:sqlite built in module -> qwik apps not using node 22 can't start
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/DX
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug starters ship with `undici: "*"`. This breaks qwik apps when serving them with `node server/entry.express.js` and `ssr.noExternal:true` if not on node v22 because previous versions don't have the builtin sqlite module. ### Reproduction 🙅‍♂️ ### Steps to reproduce Serve with `node server/entry.express.js` and `ssr.noExternal:true` ### System Info ```shell 🙅‍♂️ ``` ### Additional Information Workarounds are either: - upgrade node to 22 - downgrade undici to 6.21.3 - `ssr.external: ["undici"]` We might want to set undici to…

### CASE-4420 · [🐞] Containers do not work sometimes
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to work with containers to support microfrontend application, I'm using `gioboa/qwik-microfrontends` approach (the the issue is here) [link] which relies on `SSRStreamBlock` and `SSRStream` component to fetch remote containers, but it doesn't work all the time (it works when it is rendered at the server only) ### Reproduction [link] ### Steps to reproduce to replicate the error run `pnpm dev` and visit `localhost:12340` the resultant DOM is ```html <!-- does not work --> <div q:shadowroot> <template>...</template>…

### CASE-4423 · [🐞] Tagged function depending on condition of the signal value causes SSR error
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug May be relating to [ref] It causes SSR error if there is a tagged function in the JSX that is depending on a condition of the signal value like this: ```tsx <div>{counter.value > 0 ? "hello" : t`world`}</div> ``` Where the `counter` is a signal number and the `t` is the tagged function. ### Reproduction [link] ### Steps to reproduce Please visit the link above and see the SSR error is happening. If you remove the condition and just place sololy the tagged function, the error would not occur. ### System Info ```shell System:…

### CASE-4429 · [🐞] There are some tests is weird
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug [link] ```jsx <Link id="issue2890-link-1" href="/qwikcity-test/issue2890/b/?query=123" > /b/?query=123 </Link> ``` entry.ssr.tsx ```js import { renderToStream, type RenderToStreamOptions, } from "@user.io/qwik/server"; import { manifest } from "@user"; import Root from "./root"; export default function (opts: RenderToStreamOptions) { return renderToStream(<Root />, { manifest, base: "/qwikcity-test/build/", ...opts, }); } ``` Every test has the **base** URL added manually in the QwikCity test, but in the real scenario, the…

### CASE-4444 · [🐞]
- **Principles**: P-F4 · **Env**: windows, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug // How to reproduce? use create qwik@user npm start pnpm start yarn start on windows 11 fresh install : it dosen't run correctly.. > my-qwik-basic-starter@ start C:\Coding\Qwik\KemoTVT > vite --open --mode ssr Error: The specified module could not be found. \\?\C:\Coding\Qwik\KemoTVT\node_modules\.pnpm\@[email]@user.22.1\node_modules\@user.io\qwik\bindings\qwik.win32-x64-msvc.node at Module._extensions..node (node:internal/modules/cjs/loader:1340:18) at Module.load (node:internal/modules/cjs/loader:1119:32) at Module._load…

### CASE-4452 · [🐞] The specified module could not be found - qwik.win32-x64-msvc.node
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug **Describe the bug** After I run the command "npm create qwik@user" and install node_modules. I'm getting errors after running "npm start". ``` PS D:\work\qwik\qwik-app> npm start > [email] start > vite --open --mode ssr Error: The specified module could not be found. \\?\D:\work\qwik\qwik-app\node_modules\@user.io\qwik\bindings\qwik.win32-x64-msvc.node at Module._extensions..node (node:internal/modules/cjs/loader:1338:18) at Module.load (node:internal/modules/cjs/loader:1117:32) at Module._load…

### CASE-4457 · [🐞] Unable to deploy project to Vercel when path to client and server are specified
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When specifying the client and server paths in the qwikVite configuration, an error is encountered that prevents the application from building properly. The error occurs when the `client` and `ssr` options are specified with their respective outDir paths. For example, if the configuration looks like this: ```js // vite.config.js qwikVite({ client: { outDir: '.other_folder/client', }, ssr: { outDir: '.other_folder/server', }, }) ``` The error occurs when attempting to building the application using `build.client` and then…

### CASE-4459 · [🐞] qwik-react client:signal directive not working
- **Principles**: P-F4 · **Env**: macos, react
- **Signals**: 👍2 💬3 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug Setting a signal to trigger React hydration is not working. ### Reproduction [link] ### Steps to reproduce Try clicking the button in the demo repo - the value of the signal changes but the component does not render. ### System Info ```shell System: OS: macOS 13.1 CPU: (10) arm64 Apple M1 Max Memory: 48.61 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.18.0 - ~/Library/Caches/fnm_multishells/99978_1678031038873/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v14.21.3/bin/yarn npm: 8.19.2 -…

### CASE-4461 · [🐞] UseResource throwing error on SSR for Qwik Endpoint (Relative Endpoint Only)
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug **Scenario:** Use `useResource` to fetch data with all the states and use Qwik endpoints as well. **Relative URLs:** If I query using: `/api/products` on the client end it works. On SSR (first-time load) it throws the error `Failed to parse URL...` **Absolute URLs:** If I use the API URL as: `[link] it's working on both the client and server. ### Reproduction [link] ### Steps to reproduce As above ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M1 Memory: 107.91 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh…

### CASE-4462 · [🐞] (loaders) Locale bug introduced in unreleased version
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Inside a loader I was extracting `({ pathname, locale })` and then calling it like `locale('en')`, (to then retrieve it inside entry.ssr.tsx). It was working fine but one of the latest changes introduced a bug and now dev server doesn't even start: ``` Internal server error: Cannot assign to read only property 'Symbol(RequestEvLocale)' of object '#<Object>' 16 | locale(language) | ^ ``` Commenting that function call makes the error dissapear. The type says: ```ts /** * Which locale the content is in. * * The locale…

### CASE-4465 · [🐞] Build failing in newer versions.
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When building the server for a project with oidc-client-ts, the following error occurs, which didn't occur in prior versions. ``` [commonjs--resolver] Cannot bundle Node.js built-in "crypto" imported from "../node_modules/.pnpm/[email]/node_modules/crypto-js/core.js". Consider disabling ssr.noExternal or remove the built-in dependency. ``` ### Reproduction . ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 13.2 CPU: (8) arm64 Apple M1 Memory: 47.05 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh…

### CASE-4467 · [🐞] __vite_ssr_import_0__.loaderQrl is not a function
- **Principles**: P-F4 · **Env**: linux, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to use `loader$` based on the [unpublished docs]([link]), and I get this error: > __vite_ssr_import_0__.loaderQrl is not a function I used your `qwik.new` started template, I upgraded it to Qwik 0.17.4 (and qwik-city and other libraries) and I simply added a loader function to the `index.tsx` page. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (4) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh…

### CASE-4468 · [🐞] Qwik CLI creates a project with blank pages
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug The home page ([link]) and flower page ([link]) in the basic app starter template are blank in Qwik v0.17.0. It prints a warning in the console as well: ``` $ npm start > start > vite --open --mode ssr VITE v4.1.0 ready in 588 ms ➜ Local: [link] ➜ Network: use --host to expose ➜ press h to show help QWIK WARN Duplicate implementations of "JSXNode" found ``` ### Reproduction npm create qwik@user ### Steps to reproduce 1. `npm create qwik@user` (v0.17.0) 2. Select the Basic App starter template and install the dependencies. 3.…

### CASE-4470 · [🐞] `import.meta.env.DEV` doesn't treeshake imports
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug `import.meta.env.DEV` will successfully treeshake code, however, it will still leave unused imports. This will cause an error if those imports arent included in the production dependencies, which means we need to necessarily include dev dependencies. For example, adding the following to the `entry.ssr.tsx` file will require `dotenv` to be a production dependency ```ts import { config } from 'dotenv' if (import.meta.env.DEV) { config() } ``` ### Reproduction . ### Steps to reproduce Add the following code to the…

### CASE-4473 · [🐞] No way to easily access unknown cookie names SSR for parsing
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Currently, there does not appear to be an easy way to get **ALL** cookies from the request event. This is required if the server does not know the exact names of cookies and needs to parse through them. There is no documentation how to access all cookies. The obvious approach (`const requestCookies = event.cookie[Symbol('request-cookies')];`) does not seem to work, and further is likely to break with future changes to core. The best alternative seems to be overly complex and not straight forward. Here is my workaround:…

### CASE-4475 · [🐞] qwik-react errors on hydration & long initial load times running dev script | "vite --mode ssr"
- **Principles**: P-F4 · **Env**: react, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug - qwik-react app from latest - running in development mode - when pulling up pages without react component, the app loads quickly - with react elements on the page, load times after dev are considerably longer - hydration on react elements is not always consistent, often causing errors on the first interaction / signal - then working thereafter. ### Reproduction [link] ### Steps to reproduce 1. Run `npm install` then `npm run dev` **expected behavior** - the app loads in the browser within a reasonable amount of time, or gives…

### CASE-4484 · Error: spawn xdg-open ENOENT
- **Principles**: P-F4 · **Env**: opera, linux, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Debian GNU/Linux 11 (bullseye) ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour `npm run dev` or `npm start` should work ### Actual Behaviour running `npm run dev` or `npm start` causes this error: ``` > start > vite --open --mode ssr node:events:505 throw er; // Unhandled 'error' event ^ Error: spawn xdg-open ENOENT at Process.ChildProcess._handle.onexit (node:internal/child_process:283:19) at onErrorNT (node:internal/child_process:478:16) at…

### CASE-4489 · Dynamic route abc.dev goes to 404
- **Principles**: P-F4 · **Env**: opera
- **Signals**: 👍0 💬3 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Mac ### Node Version (if applicable) v16.14.2 ### Which component is affected? Qwik City ### Expected Behaviour When I click on a dynamic link it routes to the page. ### Actual Behaviour Dynamic route "abc.dev" returns 404 when clicked locally, on [link] it routes the user to the page but on refresh, it return 404. 2 bugs: - on SSR, /abc.dev does not work - when you go back with browser back, the 404 page sticks around ### Additional Information [link]]%2Findex.tsx

### CASE-4491 · Netlify adapter does not respect entry.ssr settings
- **Principles**: P-F4 · **Env**: opera
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) OSX 12.6 / any browser ### Node Version (if applicable) 16.13.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour html `lang` attribute is also present when using netlify adapter ### Actual Behaviour html `lang` attribute is missing when netlify adapter is present ### Additional Information steps to repro: 1. create a new app 2. add netlify adapter 3. open `entry.ssr.tsx` file 4. change content to: ``` export default function (opts: RenderToStreamOptions) { return renderToStream(<Root />, { manifest,…

### CASE-4500 · Internal server error: Objects are not valid as a React child
- **Principles**: P-F4 · **Env**: opera, chromium 104, linux, react
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.105 ### Operating System (or Browser) Chromium 104.0.5112.79 Arch Linux ### Node Version (if applicable) 16.16.0 (I've also tried 14.20.0 and 16.0.0) ### Which component is affected? Qwik React ### Expected Behaviour I just created a simple component with `qwikify$()` and expected it to work like a normal qwik component: ```tsx export const Hello = qwikify$(() => <div>hello from react</div>); export default component$(() => { return ( <div> <Hello client:visible /> </div> ); }); ``` ### Actual Behaviour When I start the dev server with `npm run dev.ssr` I get this error:…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4407 · Qwik City Cloudflare starter does not build
- **Principles**: P-G4, P-E3 · **Env**: opera
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) Win11 ### Node Version (if applicable) 18.6.0 ### Which component is affected? Starters / CLI ### Expected Behaviour * `npm init qwik@user` - select Qwik City with Cloudflare deployment * `npm install` * `npm run build` Expected: build without errors ### Actual Behaviour Partial output: ``` src/entry.cloudflare.tsx:6:25 - error TS2304: Cannot find name 'PagesFunction'. 6 export const onRequest: PagesFunction = async ({ request, next, waitUntil }) => { ~~~~~~~~~~~~~ ``` ``` src/entry.cloudflare.tsx:28:33 - error TS2345: Argument of type…

### CASE-4412 · [🐞] V2: Crashes with "Missing child" when browser extensions inject DOM nodes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/needs reproduction/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When a browser extension (e.g. a password manager like Proton Pass) injects DOM elements into a form containing `<input type="password">`, Qwik's vnode system throws an unrecoverable assertion error on the first user interaction (click + keypress). ```ts QWIK ERROR Internal assert, this is likely caused by a bug in Qwik: Missing child. at assertDefined at vnode_getVNodeForChildNode at vnode_locate at DomContainer.vNodeLocate at DomContainer.ensureProjectionResolved at materializeFromVNodeData at ensureMaterialized at…

### CASE-4416 · [🐞]Qwik v2: interactive element does not update multiple array items; only one item toggles per click
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Toggling "Select all" on a list backed by an array updates only one item per click. Repeated clicks progress through the array; once all are selected, further clicks toggle only the first item. ### Reproduction [link] ### Steps to reproduce 1. Run `pnpm install` 2. Run `pnpm dev` 3. Navigate to `[link] 4. Click the "Select all" trigger repeatedly. 5. Observe that only one array element updates per click. ### Expected One click updates all items in the array to the target state (all selected or all deselected). ### Actual Only…

### CASE-4421 · [🐞]The element has no supported sources.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am trying to play audio on button click. The audio click is working alright, but I am getting this error, each time i click (yet the audio is working fine) Here is the snippet: ```ts const audioUrl = new URL('./cash.mp3', import.meta.url).href const audio = useSignal<HTMLAudioElement | undefined>() //... <audio ref={v => audio.value = v} src={audioUrl} autoplay={true} /> <input type="range" id="snap" min={1} max={5} step={1} //@user onClick$={async (v) => { priceValue.value = Number(v.target?.value) as number; await…

### CASE-4422 · [🐞] V2 - QWIK ERROR when using a value of useSignal or useStore in an Intl
- **Principles**: P-G4, P-E3 · **Env**: typescript, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug For some reason, passing the value `formatter.format(price.value)` to the input, generates a `QWIK ERROR` If `price.value` is replaced by a fixed value, for example `23000` the error disappears. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell npmPackages: @user.dev/core: 2.0.0-alpha.3 @user.dev/router: 2.0.0-alpha.3 typescript: 5.7.2 undici: 7.0.0 vite: 6.0.1 ``` ### Additional Information _No response_

### CASE-4424 · [🐞] Wrong children type of textarea
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug textarea tag support string as children (see [mdn]([link])), but qwik throws this error : ``` 'textarea' components don't accept text as child elements. Text in JSX has the type 'string', but the expected type of 'children' is 'undefined'. ``` ### Reproduction [link] ### Steps to reproduce Add `<textarea>Not Working</textarea>` to you template ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (32) x64 AMD Ryzen 9 7950X3D 16-Core Processor Memory: 15.77 GB / 31.18 GB Binaries: Node: 22.8.0 -…

### CASE-4428 · [🐞] data is not persisted in `action.formData`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug From the documentation: [link] > The `action.formData` is especially useful for retaining user-filled form data even after a page refresh. This enables a seamless SPA experience, even with JS disabled. This suggests, there is some kind of data persistence, after I refresh the page, the value does not populate, even if I navigate from the router back and forth, data is also gone. Any help would be greatly appreciated. Thank you. ### Reproduction [link] ### Steps to reproduce 1. Run `npm install` followed by `npm run dev`…

### CASE-4431 · [🐞] `useContextProvider()`: Does not accept strings as input types.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to pass a scoped context to a few children to be able to determine the children size based on the context. ### Reproduction (currently impossible due to blockages by my company. If required I can get one whenever I get home) ### Steps to reproduce My Structure looks a bit like this: ```tsx type ButtonSize = "small" | "normal" | "large"; const buttonSizeContext = createContextId<ButtonSize>("MyApp.ButtonSizeContext"); const Button = component$(() => { return ( <button/> ); }); const ButtonGroup = component$(() => {…

### CASE-4433 · [🐞] Issue with list item keys not updating in DOM
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am experiencing an issue where list items are not updating correctly in the DOM when using the Qwik framework. Despite using unique keys for each list item, the changes are not reflected in the rendered output. The `key` attribute seems to be ignored, and instead, I see `data-qwik-inspector` attributes with no `q:key` present in the `<li>` tags. ### Reproduction [link] ### Steps to reproduce 1. Use the button to add the input field's text to the list. 2. Observe that the list in the DOM does not contain q:key which force the…

### CASE-4438 · [🐞] broken link when use action.submit() then nav("somelink")
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug [Repo]([link]) The repo above is a reproduction of the none working navigation. Explanation about the broken link: When use useNavigate and routeAction together on the same button the navigation not working although the job of action.submit() was finish. Two state when the link not working: 1. when navigate from one page to another using Link/useNavigate then try click on the link (in the repo I color this button red). If you refresh the page the red link going to work. But 2. if you try to write something in the input…

### CASE-4443 · [🐞] qwik-auth - AuthJS is not calling https on prod
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm using AuthJS for a Google, Github, and custom credentials provider on my qwik app, locally everything works as expected, however, on prod/staging the application is calling my SignIn providers as a simple HTTP call instead of HTTPS (even Custom Credentials as well) on an HTTPS server. I tried many possible configurations on the form submission and links with no success, at this point, I believe is something related to the serverAuth$ from the '@user.io/qwik-auth' implementation. Any light that you could throw me would much…

### CASE-4454 · [🐞] Named Slot not projected inside a child component
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm building a form field component with named Slot to put specific content at a specific place, but named Slot are not projected through child component: ```jsx import { Slot, component$ } from '@user.io/qwik'; const FormField = component$(() => { return ( <div class="field"> <Slot name="label" /> <div class="input-container"> <Slot name="prefix" /> <Slot /> <Slot name="suffix" /> </div> </div> ); }); export const Suffix = component$(() => <p q:slot="suffix" class="suffix"><Slot /></p>); export default component$(() => {…

### CASE-4458 · [🐞] server$ silently fails
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```tsx import { component$ } from "@user.io/qwik"; import { routeLoader$, Form, routeAction$, server$, } from "@user.io/qwik-city"; const useDadJoke = routeLoader$(async () => { const response = await fetch("[link] { headers: { Accept: "application/json" }, }); return (await response.json()) as { id: string; status: number; joke: string; }; }); const useJokeVoteAction = routeAction$((props) => { console.log("VOTE", props); }); export default component$(() => { const dadJokeSignal = useDadJoke(); const favoriteJokeAction =…

### CASE-4460 · [🐞] qwik-auth: ambiguous indirect export: parse
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I expect to be redirected to a login form or something. ``` QWIK ERROR ambiguous indirect export: parse log.js:9:12 logError log.js:9 renderMarked notify-render.js:169 scheduleFrame/containerState.$renderPromise$< notify-render.js:101 nextTick platform.js:42 (Async: setTimeout handler) nextTick platform.js:41 nextTick platform.js:40 scheduleFrame notify-render.js:101 notifyWatch notify-render.js:96 notifyChange notify-render.js:27 $notifySubs$ common.js:287 set value signal.js:69 routeActionQrl_action_X5cKKrhH8rs…

### CASE-4471 · `action$` never `isPending`
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍3 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City ### Describe the bug Hi! I'm playing with `action$`s and am finding that my action is never marked as `isPending`, so I can't handle loading states in my UI. I see `{ isPending: false}` on both the server and client, but never `{ isPending: true }`. Am I missing something? ### Reproduction [link] ### Steps to reproduce 1. Create an `action$` 2. Consume it using `action.use()` 3. Pass it to a `Form` component as the `action` prop 4. Submit the form 5. Verify `action.isPending` is never `true` ### System Info ```shell System: OS: macOS 13.1 CPU: (8)…

### CASE-4472 · [🐞] Tracked properties do not trigger updates for useResource$
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ``` Typescript Components that take props in the form below do not trigger a re-run of useResource$ when their arguments change export default component$(({ arg=0 }: CompProps) => { const resource: ResourceReturn<number> = useResource$(async (ctx) => { ctx.track(() => arg); console.log("Comp2 use resource run"); return await some_function(arg); }); ``` ### Reproduction [link] ### Steps to reproduce Clone the github repo and npm run dev, or visit a playground demonstration below. [Playground Instance]([link]) ### System Info…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4409 · [BUG] [0.0.26] How is preventdefault:* supposed to behave?
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: docs
- **Excerpt**: As I'm looking into component-based routing ([ref]) that behaves as SPA (Component would be used as page content and it would replace portion of the current view) and MPA (Accessing the page through a route should also work), I found the following snippet in the served source: ```js element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault(); ``` First, I couldn't find any reference to this in the docs. Second, using it on a link (anchor element) actually worked and made the link stale and doesn't navigate to the page in `href`. However, adding `preventdefault:click` to link…

### CASE-4453 · [🐞] Cookies return stale values server-side
- **Principles**: P-F5, P-H3 · **Env**: typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When updating a cookie, it does not persist its value within the same execution cycle. Reading it immediately after being set returns a stale value server-side. ### Reproduction Add `onRequest` to Qwik-Starter ### Steps to reproduce In Qwik-starter add this code: ```typescript export const onRequest = (event: RequestEvent) => { let cookieValue: any = event.cookie.get("qwik-cookie")?.json(); console.log("cookie value on entry =", cookieValue); let message: string; // SET TO FOO message = "foo";…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-4410 · [DOCS] Index page styles may be broken?
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: docs
- **Excerpt**: > [link] ![image]([link]) This low-contrast text colors are intended? BTW, since it seems that [link] redirects to [link] . Is this index page not to be public?

### CASE-4449 · [🐞] DocumentMeta should support media property
- **Principles**: P-C1, P-C2, P-C3 · **Env**: typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I want to add the `theme-color` meta tag on my index.html with a specific color depending on `prefere-color-scheme`. It should looks like that in the end : ```html <meta name="theme-color" media="(prefers-color-scheme: light)" content="LIGHT_COLOR" /> <meta name="theme-color" media="(prefers-color-scheme: dark)" content="DARK_COLOR" /> ``` But the `DocumentMeta` interface doesn't support `media` ### Reproduction N/A ### Steps to reproduce This displays an error ```typescript export const head: DocumentHead = { meta: [ { name:…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4411 · [🐞] v2: Optimizer's `transform_props_destructuring` mis-rewrites plain helper arrows, breaking dev SSR and production
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug The optimizer's `transform_props_destructuring` pass treats **any** arrow function with a single destructured parameter and a `return` statement as a Qwik inline component, regardless of whether the function actually is one. The pass renames the parameter to `_rawProps` and rewrites identifier **reads** of the destructured names to `_rawProps.<name>` — but it does not rewrite the LHS of assignments. When the function body reassigns the destructured binding (a common pattern in plain helpers that default an optional…

### CASE-4436 · [🐞] build script stuck after '✓ Built client modules' in adapters/static
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug pnpm run build.types pnpm run build.client pnpm run build.server pnpm run lint > my-qwik-basic-starter@ build.client /qwik-app > vite build vite v4.4.7 building for production... ✓ 45 modules transformed. dist/q-manifest.json 20.89 kB │ gzip: 4.22 kB dist/build/q-a14a9229.css 6.16 kB │ gzip: 1.81 kB dist/build/q-e6a2989e.js 0.13 kB │ gzip: 0.12 kB dist/build/q-a66fa7f5.js 0.13 kB │ gzip: 0.13 kB dist/build/q-22bb215a.js 0.21 kB │ gzip: 0.16 kB dist/build/q-d710e8c5.js 0.29 kB │ gzip: 0.21 kB dist/build/q-1783ee57.js 0.31 kB │…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4425 · [🐞] `qwik-build` loses environment variables during parallel builds
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs reproduction
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug I am running parallel `qwik builds` via `concurrently "PUBLIC_A=1 qwik build" "PUBLIC_A=2 qwik build"`. I'm expecting my build output to have `PUBLIC_A` be `1` and `2` for the first and second builds respectively. Instead, `PUBLIC_A` is `1` for the first build's client, then `2` for all subsequent builds (e.g. first build's server build). It appears that in `run-build-command.ts` calls `execaCommand`, the spawned instance uses the latest environment variable values instead of the current process's values. ### Reproduction…

### CASE-4466 · [🐞] Pages like rss.xml are not generated in SSG
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Some pages like index.html, the `route` variable (`inside loadStaticRoute()`) outputs this: ```js [ /^\/$/, [ [Function (anonymous)] ], undefined, '/', [ 'q-ae15263a.js' ] ] ``` but others like rss.xml, sitemap.xml, manifest.webmanifest, etc, outputs this: ```js [ /^\/manifest\.webmanifest$/, [ [Function (anonymous)] ], undefined, '/manifest.webmanifest', [] ] ``` Because the last part, the symbol `q-thing` is empty, the page is not included in SSG. ### Reproduction [link] ### Steps to reproduce npm run build ### System Info…

### CASE-4469 · [🐞] loader$ yields TS4023: Exported variable has or is using name 'ServerLoader' from external module
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When using the new `loader$` like: ```typescript import { loader$ } from '@user.io/qwik-city' export const myContent = loader$(() => myData) ``` The exported data loader is yielding a typescript warning: ``` TS4023: Exported variable 'myContent' has or is using name 'ServerLoader' from external module ``` The cure for this is usually straightforward; it just needs the type declared: ```typescript export const myContent: ServerLoader<MyType> = loader$(() => myData) ``` However, this is impossible because `ServerLoader`…

### CASE-4477 · [🐞]useSignal only triggers a re-render if its value is compared, but not when read
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The attached stackblitz example switches themes by updating vanilla-extract variables. There is no reason to compare the signal value, only consume it. However, without a comparison a re-render never happens. Is a signal value comparison required to trigger a re-render, or is this a misunderstanding of how `useSignal` is used? ### Reproduction [link] ### Steps to reproduce **LINE 23 WORKS:** `<div className={theme.value || theme.value}>` **LINE 24 DOES NOT WORK:** `<div className={theme.value}>` [In StackBlitz, comment line 23…

### CASE-4487 · Accessibility issue related HTML element
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) OSX ### Node Version (if applicable) 16 ### Which component is affected? Qwik City ### Expected Behaviour Add `lang` attribute on `html` tag. ### Actual Behaviour `html` tag element does not have `lang` attribute. The only way to add it is on `body` tag which means it's not a standard and affects PageSpeed Accessibility indicator. ### Additional Information As you can see PageSpeed complains about it. ![Screenshot 2022-11-04 at 09 25 27]([link]) I tried to identify where Qwik generate `html` in order to contribute with fix, but I won't…

### CASE-4490 · No File Endpoints are generated when `qwik build`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version v0.12.1 ### Operating System (or Browser) Arch Linux ### Node Version (if applicable) v19.0.0 ### Which component is affected? Qwik City ### Expected Behaviour `qwik build` should generate file endpoints. (Added ssg via `qwik add`) ### Actual Behaviour No endpoint file generated, otherwise normal. Currently, `test.json` is only accessible in dev mode. ### Additional Information - [email] (adaptor) reproduction: [link] - [email] (entry) reproduction: [link]

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4435 · [🐞] Link prefetch does not prefetch on mobile after SPA navigation
- **Principles**: P-A1, P-A4, P-G3 · **Env**: mobile
- **Signals**: 👍1 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug `<Link prefetch>`'s current implementation is to: (**1**) prefetch on hover; and (**2**), if the viewport is smaller than 520px, prefetch on:qvisible. I'm not 100% sure why, but no `<Link prefetch>` present on the page, either in the layout.tsx or in index.tsx will prefetch the links available on the viewport after SPA navigation. I think the problem is that the current implementation relies on the qvisible event, and this event is only fired on first page load when the element appears in the viewport for the first time, but…

### CASE-4474 · [🐞] Debugging Qwik code from VSCode does not seem to respect source files
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug Clicking on the line in VSCode to attach the breakpoint results in different file showing up when the. breakpoint hits. 1. the fact that breakpoint worked means some sourcemaps are working 2. the fatt that VSCode is confused means something is still missing. [link] ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell VSCode ``` ### Additional Information _No response_

### CASE-4476 · [🐞] [plugin:vite:css] [sass] This file is already being loaded.
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug When I made the project responsive, I always started getting this error after I upgraded the version. I using scss in the project. **The error i got** <img width="468" alt="Screen Shot 2022-12-04 at 16 37 36" src="[link]> **package.json** <img width="372" alt="Screen Shot 2022-12-04 at 16 42 02" src="[link]> **vite.config.ts** <img width="636" alt="Screen Shot 2022-12-04 at 16 45 27" src="[link]> ### Reproduction Error vite ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 12.6 CPU:…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-4439 · [🐞] Qwik City Form trigger routeLoader$
- **Principles**: P-A2, P-A4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Each time qwik city `Form` is submitted `routeLoader$` is triggered. ### Reproduction [link] ### Steps to reproduce ``` import { component$ } from '@user.io/qwik'; import { routeLoader$, Form } from '@user.io/qwik-city'; export const useServerTimeLoader = routeLoader$(async () => { console.log('triggered'); }); export default component$(() => { return ( <Form class="m-4 flex items-center"> <button type="submit" class="mx-4 h-[52px] items-center"> Use Action Test </button> </Form> ); }); ``` ### System Info ```shell…

### CASE-4498 · Dynamic require of "/inlinedQRL.js" is not supported
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3 · **Env**: opera, chrome 105, windows
- **Signals**: 👍0 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Windows 11 / Chrome 105.0 ### Node Version (if applicable) 16.13 ### Which component is affected? Qwik Runtime ### Expected Behaviour A successful build and preview. ### Actual Behaviour When a CSS file is empty, throws an exception when running `npm run preview` #### Code ```tsx import { component$, useStylesScoped$ } from '@user.io/qwik'; import { QwikLogo } from '../icons/qwik'; import styles from './header.css?inline'; export default component$(() => { useStylesScoped$(styles); return ( <header class={'flex items-center…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-4441 · [🐞] Production build step error with Modular Forms in Qwik v1.2.X
- **Principles**: P-A5, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬3 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Since Qwik v1.2.X, an error occurs when running `pnpm preview` when using `formAction$` which is built on top of Qwik's `globalActionQrl`. Issue with info at Modular Forms: [link] <img width="726" alt="Screenshot 2023-07-13 at 13 55 51" src="[link]> <img width="533" alt="Screenshot 2023-07-13 at 13 55 40" src="[link]> ### Reproduction [link] ### Steps to reproduce 1. Clone project 2. Make sure that Qwik v1.1.5 is used 3. Run `pnpm preview` 4. Everything should work 5. Upgrade zu Qwik v1.2.X 6. Run `pnpm preview` 7. TypeError:…

