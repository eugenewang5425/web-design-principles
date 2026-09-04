# Case Chunk 072 — Round 72

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8101 · +layout.svelte <Layout> was created with unknown prop 'data'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I saw following warning in chrome devtools: ``` +layout.svelte <Layout> was created with unknown prop 'data' ``` The code is like this: ``` <script> import {afterUpdate} from 'svelte'; // .. let loginNick afterUpdate(async () => { loginNick = sessionStorage.getItem('nick'); // The warning is on this line, }); </script> ``` Any idea ? ### Reproduction Just add code above, and refresh the page, and in chrome devtools, could see the warning. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.14 Linux Mint 20.1 (Ulyssa) CPU: (8) x64 Intel(R) Core(TM)…

### CASE-8108 · Stuff is not correctly set when a load function returns `error`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, linux
- **Signals**: 👍0 💬4 · closed · labels: help wanted/load / layout
- **Excerpt**: ### Describe the bug When `error` (or `status !== 2xx`) is included in the returned object from a load function inside a route, while also providing a `stuff` object, the `$page.stuff` store is empty. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.18 Arch Linux CPU: (16) x64 AMD Ryzen 7 3700X 8-Core Processor Memory: 23.23 GB / 31.27 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 16.16.0 - ~/.nvm/versions/node/v16.16.0/bin/node npm: 8.14.0 - ~/.nvm/versions/node/v16.16.0/bin/npm Browsers: Firefox: 102.0.1 npmPackages:…

### CASE-8115 · Endpoints / pages being called in Chrome that shouldn't be called while loading page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, safari
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Not 100% sure if i'm doing something wrong but i expect this to be a bug since i can only reproduce it in Chrome and not on any other browser (didn't try Edge). **What is going wrong?** While navigating through my project and loading some pages i see endpoints being called that shouldn't be called. This only happens in Chrome and doesn't happen in Firefox or Safari. Easiest way to explain it is via a screen recording that can be found here, [link] I added a console.log in each endpoint that is called when the endpoint is triggered, while clicking through the site with…

### CASE-8117 · Sveltekit throws developer warning when using correct fetch from load-function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, svelte
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### Describe the bug In [ref] a helper warning was introduced if the `window.fetch` method is used instead of the `fetch` method provided by the load function. However, this warning is logged even though the correct fetch method is used. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.4 CPU: (8) x64 Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz Memory: 21.08 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 8.1.0 - /usr/local/bin/npm Browsers: Brave Browser: 101.1.38.111 Chrome:…

### CASE-8120 · start.js: Unhandled Promise Rejection: SyntaxError: Invalid regular expression: invalid group specifier name
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, firefox, windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Getting the error `Unhandled Promise Rejection: SyntaxError: Invalid regular expression: invalid group specifier name` in Safari only. The homepage loads, but anything beyond that is not working. I have no idea when this started, I am just now to the point where I can start testing other browsers and certainly did not expect this. Works fine in Chrome (Brave) and Firefox. Not able to test windows just yet. I really don't know how to start debugging this so any help, pointers, advice is greatly appreciated! Thanks! ### Reproduction Not likey able to offer any reporoduction…

### CASE-8124 · Docs: Dark mode not working in firefox developer edition
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: firefox, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using Firefox Developer Edition with my systems Dark mode preference, the documentation site is illegible. The text seems to get the color for the dark mode but the background is still white. <img width="1440" alt="Screen Shot 2022-03-07 at 6 46 13 AM" src="[link]> ### Reproduction open up the production docs site in Firefox Developer Edition ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.6 CPU: (8) arm64 Apple M1 Memory: 180.48 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.0 - /usr/local/bin/node Yarn: 1.22.10 -…

### CASE-8126 · An empty stylesheet is appended to the head every time an element with a transition directive is mounted
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, edge, firefox, safari, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have not checked all of the different transitions, but i've set up a minimal project required to reproduce the behaviour. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.4 CPU: (8) x64 Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz Memory: 47.91 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 8.1.0 - /usr/local/bin/npm Browsers: Brave Browser: 98.1.35.100 Chrome: 98.0.4758.80 Edge: 98.0.1108.43 Firefox: 95.0.2 Safari: 14.1.1 ``` ### Severity annoyance ###…

### CASE-8131 · Page refresh loop when browser websocket is disabled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, svelte
- **Signals**: 👍0 💬4 · closed · labels: vite
- **Excerpt**: ### Describe the bug The demo app generated by Sveltekit causes a page refresh loop when accessing the default URL [link] and the webbrowser has websocket disabled. When accessing the URL, it immediately causes many page reloads per second, which can hit a server in performance. Enabling websocket disables this problem in Firefox (latest version). The problem likely also occurs in other browsers when websocket is disabled. A reason why a client may disable websocket, is security. Websocket makes it possible for remote sites to perform local portscans at clients: [link] ### Reproduction…

### CASE-8132 · adapter-cloudflare does not bundle service-worker.js since around next.207 - results in 404 and thus failed SW registration
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍5 💬4 · closed · labels: p2-nice-to-have/service worker/pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug Since around next.207 `adapter-cloudflare` seems not to bundle `service-worker.js` When testing locally, everything seems OK. The SW file is present in the `./svelte-kit/cloudflare` builld folder - as it was with older versions of Sveltekit. When running `npm run preview` the SW is being successfully registered according to Chrome Dev Tools. After deployment to CF, and running the site, the following error shows in the console log: `Uncaught (in promise) TypeError: Failed to register a ServiceWorker for scope ('[link]) with script ('[link]): A bad HTTP response code (404)…

### CASE-8137 · Hashchange event does not trigger.
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, firefox, safari, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hashchange event doesn't want to work with SvelteKit v1.0.0-next.180. Neither `<svelte:window on:hashchange>` nor adding the event listener directly with `window.addEventListener` has any effect. There are no visible errors anywhere. If I use the same in a plain HTML file in a browser, there are no problems triggering the event. Browsers tested: Chrome, Firefox, Safari. ### Reproduction ``` <script> import { onMount } from 'svelte'; const log = () => console.log('hashchange', location.hash); onMount( () => window.addEventListener('hashchange', log ) ); </script>…

### CASE-8140 · XSS using data-url when doing SSR
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, chrome, safari, ios, svelte
- **Signals**: 👍0 💬4 · closed · labels: security
- **Excerpt**: ### Describe the bug It is possible to inject a script tag in `data-url` in the `svelte-data` script tag. E.g. if we have the search term in the query params [link] we can create a malicious term that inject a script tag while SSR. Happens on Firefox, Brave and Chrome, but Safari seems to protect against my POC, however it should be possible to circumvent it in other scenarios. ### Reproduction #### Minimal example ##### term.js ```js export const term = '/asdf?search="></script><script>alert(1)</script><script type="application/json'; ``` ##### index.svelte ```html <script context="module">…

### CASE-8162 · `js.map` files on `master` branch are loading the js files and not the sourcemap files
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Run `pnpm dev` on one of the example projects, open chrome devtools, see the sourcemap loading errors. Then load the sourcemap file URL and notice that the incorrect file is being served: ![image]([link])

### CASE-8171 · Vite dev hangs indefinitely without errors on page with many components and imports
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, vite, svelte
- **Signals**: 👍110 💬192 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I use SvelteKit. I have a somewhat complex page that contains quite a lot of components and imported functions. I had sporadic problems with this page hanging in the browser (both Firefox and Chrome). However, no error or notification in the vite cli. I was usually able to fix this by restarting the dev server several times whether or not in combination with restarting the browser. Other, simpler pages, always just kept working. Restarting my computer always works. In recent days, I have been adding extra functionality, and the more I added, the more often the page kept…

### CASE-8176 · Non-deterministic build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍28 💬42 · closed · labels: bug: upstream/p3-minor-bug/feat: commonjs
- **Excerpt**: ### Describe the bug Executing builds multiple times with the same code generates different hashes. ### Reproduction [link] ### Steps to reproduce Clone the aforementioned repro, install dependencies, and execute `npm run build` multiple times. Verify the hash of the vendor file. ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz Memory: 3.92 GB / 15.76 GB Binaries: Node: 14.21.0 npm: 9.6.7 Browsers: Edge: Spartan (44.19041.1266.0), Chromium (114.0.1823.58) Internet Explorer: 11.0.19041.1566 npmPackages: @user/plugin-legacy:…

### CASE-8177 · App keeps refreshing with log: `Server connection lost polling for restart`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chromium, safari, ios 14, vite, react, typescript
- **Signals**: 👍7 💬41 · closed · labels: pending triage/feat: hmr
- **Excerpt**: ### Describe the bug In certain situation the app keeps refreshing indefinitely giving this log in console: `server connection lost polling for restart`. I'm using vite 2.4.2 with https, react and typescript. ### Reproduction I noticed this happen in this 2 situations: 1. Using Brave with a CORS extension enabled on the page (in my case is CORS Unblock). Weirdly using Chrome with the same Chromium version and same extension doesn't cause the problem 2. Running `vite` with the `--host` flag and accessing it with my phone (Safari on iOS 14) via the shared url: `[link] Removing the https option…

### CASE-8181 · Within a dev container using Docker 26, `vite dev` or `vite preview` cannot be accessed from the host
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, firefox, vite
- **Signals**: 👍11 💬32 · closed · labels: documentation/contribution welcome
- **Excerpt**: ### Describe the bug *I initialy though this was a case of [link] tool][ref][ref], but it seems it is something else, so I am opening another issue.* Using Dev Containers for development, and after upgrading to Docker 26 (from 25) on the host, I am unable to connect to either `vite dev` or `vite preview` server using the default and basic port forwarding feature of the dev containers. By "unable to connect", I mean that the server is launched, however when trying to connect from my host using `[link] either Chromium or Firefox Dev Edition request hangs indefinitely on loading (it stays in…

### CASE-8186 · SSR transformed named imported functions don't work with debuggers "step-into"
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: chrome, vite
- **Signals**: 👍1 💬31 · open · labels: pending triage/feat: sourcemap
- **Excerpt**: ### Describe the bug Originally reported at [link] I think I've seen 2-3 similar reports in the past too. When a file is SSR transformed in Vite, debuggers like Chrome Dev tools and VSCode are unable to ["step into"]([link]) functions that are imported via named imports. In practice this means stopping debugger in line 3 and pressing "step into" button of debuggers in the example below. ```ts 1 | import { add } from "./math.ts"; 2 | 3 | add(1, 2); ``` Debugger should stop at line 1 or 2, but instead it stops at 7. ```ts 1 | export function add(a: number, b: number): number { 2 | if (a === 1)…

### CASE-8189 · Bundle requests twice in Firefox 93 with default polyfillModulePreload enabled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 93, firefox, safari, chrome, vite, vue
- **Signals**: 👍22 💬26 · closed · labels: p4-important
- **Excerpt**: ### Describe the bug I have found that default vite build makes bundle request twice in firefox. ![2021-11-03_02-54]([link]) When I switch off `build.polyfillModulePreload: false` it makes only one request. Why this happens? [Vite docs says]([link]) that polyfill need for firefox and safari, [Can I Use says]([link]) that modulepreload not supported in Firefox. Is this proper polyfill work? There is no problem in Chrome or Safari ### Reproduction ``` pnpm create vite test > vue > vue-ts cd test pnpm install pnpm build pnpm serve ``` Open [link] in Firefox 93.0 (64-bit) Check dev tools F12 ->…

### CASE-8191 · [docs]: pnpm create execution problem
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, vite, vue
- **Signals**: 👍0 💬24 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug use ```shell pnpm create vite my-vue-app -- --template vue ``` result ```shell ERROR ERROR Unknown option: 'template' Did you mean 'test-pattern'? Use "--config.unknown=value" to force an unknown option. ``` ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.22598 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 4.85 GB / 15.75 GB Binaries: Node: 16.9.0 - F:\nodejs\node.EXE Yarn: 1.22.18 - F:\nodejs\yarn.CMD npm: 7.21.1 - F:\nodejs\npm.CMD Browsers: Edge: 44.22598.200.0 Internet Explorer: 11.0.22598.1 ``` ### Used Package Manager…

### CASE-8194 · Page reload on dev server is very slow in large codebase
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, webpack, vite, webkit
- **Signals**: 👍47 💬23 · closed · labels: enhancement/p4-important/performance
- **Excerpt**: ### Describe the bug In issue [link] tool][ref] You've asked to code example, so I've created one: [link] Problem is that when are many components involved, compilation and reload times are very slow, much more than same app built with Webpack. Example app starts up on my computer more than 10 second (I mean app startup in browser, not a HTTP server startup). Reload times are quite long in comparison to even bigger apps built with Webpack There is also Firefox bug I've found that make whole thing worse: [link] It causes that Vite is quite unusable. In Chrome (or other webkit browser)…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-8102 · New Actions type is overly restrictive
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: types / typescript
- **Excerpt**: ### Describe the problem I took a stab at upgrading to SvelteKit post [ref]. There's a fundamental regression of capability with the [Action]([link]) type compared to how POST page endpoints worked previously. Before 5748 landed, the returned body of the POST handler would be layered on top of the body of the GET handler. This allowed the POST handler to influence the rendering of the page component by providing additional data. The [Action]([link]) type allows something similar by returning the `error` value, but it's limited to the `Record<string, string>` type which doesn't allow passing…

### CASE-8182 · There will be temporary vite.config.js.timestamp files that have not been cleaned up
- **Principles**: P-A5 · **Env**: vite
- **Signals**: 👍67 💬34 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I use Ctrl+C to terminate the process of launching vite, I may leave behind the temporary file vite.config.js.timestamp.xxxxx.mjs ![微信图片_20230519153447]([link] tool]/assets/8923027/98c06c95-6fd3-40fe-8334-a23880790efe) By checking the code, I found that the problem may be caused by the **loadConfigFromBundledFile** method in **packages/vite/src/node/config.ts**, for esm. When the temporary file is written locally and the process ends, this issue will be triggered, mainly when dynamicImport is time-consuming I am considering whether it is possible to check and clean…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8103 · Returning location from POST does not set 3xx status code
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When returning a `location` path from a `+page.server.ts` sveltekit set status as 200, and does not perform a redirect. The problem is located in `packages/kit/src/runtime/server/page/index.js` at 81:38 ```ts return redirect_response(status, result.location); ``` where status is not changed from 200 (at 57:5) ```ts let status = 200; ``` I'd be willing to submit a PR to fix this issue. ### Reproduction [link] The page contains two buttons: - Submit form with `throw redirect()` - Submit form with `location` ### Logs _No response_ ### System Info ```shell System: OS: macOS…

### CASE-8109 · [Adapter Netlify] multipart/form-data not supported
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: pkg:adapter-netlify
- **Excerpt**: ### Describe the bug Since updating to Sveltekit v370 and adapter-netlify v68, forms with enctype `multipart/form-data` don't work anymore when deployed to Netlify. Even if no file is sent to the server, a `NotSupportedError` is thrown with the message `multipart/form-data not supported`. This used to work fine, so I don't think the problem is with Netlify (unless they had an update I wasn't aware of). ### Reproduction Repo: [link] Deployed url: [link] Go to the deployed url and submit the form to see the error. ### Logs ```shell { name: "NotSupportedError", message: "multipart/form-data not…

### CASE-8121 · SCSS class renaming does not work for nested classes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug SCSS class names like `.open` within the nested structure ``` <style lang="scss"> .select { &.open { display: block; } } </style> ``` should work when selected individually, such as addressing `open`. ### Reproduction Having a CSS class `open` inside a component that is applied conditionally to a div like ``` <div class="select" class:open={isOpen}> ``` with the SCSS rule ``` <style lang="scss"> .select { &.open { display: block; } } </style> ``` does not work as expected. Adding global like ``` <style lang="scss" global> ``` solves the problem, which suggests that the…

### CASE-8152 · The request url "/service-worker.js" is outside of vite dev server root
- **Principles**: P-G4, P-E3 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** when using svelte-kit vite throws an error. **Logs** ``` 09:42:39 [vite] Internal server error: The request url "/service-worker.js" is outside of vite dev server root "C:/Users/.../test". For security concerns, accessing files outside of workspace root is restricted since Vite v2.3.x. Refer to docs [link] for configurations and more details. ``` **To Reproduce** run `$ npm init svelte@user` select the demo app, no extra features and run `$ npm run dev` **Expected behavior** the error should not exist **Information about your SvelteKit Installation:** <details>…

### CASE-8154 · Error in handle() if Response.body is not string/Buffer
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Error in [`handle()`]([link]) if `Response.body` is not string/Buffer. This might be a simple documentation bug. However, I would like to suggest a related feature: allow `handle()` to return a response like [`load()`]([link]). This would make it easier to do redirects, error pages, and page caching from `handle()`. - Ideally `handle()` could just return a Response that looks like `LoadOutput`. - Perhaps `render()` could detect if the input is more like `{status, error, redirect, maxage}` and render that into an acceptable response. - Or: just expose a utility function…

### CASE-8164 · Using a remote number form field with a default value stops you from completely deleting the field value
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬3 · closed · labels: forms
- **Excerpt**: ### Describe the bug Let's say you have this basic scenario: ```svelte <form {...someForm}> <input {...someForm.fields.someField.as('number', 200)}/> </form> ``` where the field is defined as z.number().optional(). Hitting backspace on that field will start deleting the zeroes until you reach the "2". Trying to delete further will not delete it, but instead "reset" to the default. It only happens with number fields, text fields are ok. There's probably a bug where svelte sees that the number field is undefined and then replaces it with the default value. Not sure when this regression happened…

### CASE-8168 · Routing freezes after visiting page using experimental remote function form function
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬3 · closed
- **Excerpt**: ### Describe the bug When using the new experimental remote function API with the `form` function, the routing eventually stops working after navigating between a remote-function page and other pages. At some point, clicking on internal links only updates the URL in the address bar, but the rendered page does not change anymore (no navigation happens, no errors shown in the UI). This only occurs when there is at least one page that uses the experimental remote function form API. ### Reproduction I’ve created a minimal reproduction repo: [link] 1. Start the dev server ```bash pnpm install pnpm…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8104 · "export const prerender = false" is not working
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug I'm using "plotly.js-finance-dist": "^2.14.0" for plot dashboard in a big app made with sveltekit. Even if I putt in the `+page.js` and `+page.svelte`: ```JS export const prerender = false; ``` If I don't put in response on `hooks.ts`, `npm run dev` throw a error when I access the page with component that plot the dashboard: ```JS const response = await resolve(event, { ssr: false }) ``` If I don't put in prerender on `svelte.config.js`, `npm run build` throw a error when the compiler try to prerender the page: ```JS prerender: { enabled: false } ``` ### Reproduction…

### CASE-8105 · A bad route causes the application to be reloaded, losing all application state
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍2 💬4 · closed · labels: error handling
- **Excerpt**: ### Describe the bug I attempted to find similar issues in the repository apologize if I missed it. Using SSR - When a bad route is encountered, whether or not a __error.svelte page is present or not, it appears that vite disconnects, then reconnects and reloads the application then displays the error page, one obvious side effect is that the content of any stores goes back to their default state. I hope this isn't 'correct' behavior. I tried redirecting in an __error. svelte page in the /routes dir, which worked so far as not displaying the error page, but the app was still re-loaded ( at…

### CASE-8106 · Fetch using `load()` in browser get response body but no response body returned during ssr
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi everyone, i'm developing a sveltekit + laravel 9 app and i came across with a problem while testing ssr in my views. When using the load function in my `index.svelte` the `fetch()` response of my laravel api is only readable from the browser but no from the server while rendering. Entering index page triggers the ssr fisrt dispatch which is correct, because my laravel logs show so: (Data obtained from telescope, a laravel api debugger) SSR api response headers: ``` { "host": "localhost:8000", "connection": "keep-alive", "accept": "application/json", "accept-encoding":…

### CASE-8114 · When using Ionic from CDN: SvelteKit doesn't work with Ionic while Svelte works well.
- **Principles**: P-F4 · **Env**: svelte, next.js, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have tried sveltekit and I love it. The performance is awesome. So I have decided to migrate my site from (Next.js, React.js, Ionic) to (SvelteKit, Svelte, Ionic). Ionic provides the styling and components that are the building blocks of my app. Next.js provides SSR and SSG. Even though Ionic team provide React support, I decided to move my project to Svelte (the reason are well known). I have tried Svelte and it worked well with Ionic (Please check it even here: [svelte dev example]([link])) So Svelte works well with Ionic and the last thing I need is SSR or SSG & SSG…

### CASE-8135 · Dynamic route parameter with SSR using static-adapter
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug Here's the route components I've setup in my app and how I expect the URLs to resolve: ``` /routes/index.svelte -> / (homepage) /routes/blog/index.svelte -> /blog /routes/blog/[slug].svelte -> /blog/post-title-here ``` When I test this locally via `npm run dev` (or build + preview) everything works as expected. I can: 1. I can navigate between paths using UI anchor tags 2. Browse directly to each path in a new tab/window 3. I can refresh the routes and remain on the desired page Unfortunately, when I deploy to my server environment the blog post pages specifically have…

### CASE-8136 · App deployed with adapter-netlify doesn't have access to request headers/cookies
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: pkg:adapter-netlify/p1-important
- **Excerpt**: ### Describe the bug I'm not 100% sure the netlify adapter is to blame here, but I'm not sure how to figure it out who is really. I've created an sveltekit app that defines a `getSession` hook. In there I read the `request.headers.cookie` (regular cookie set using `document.cookie`, not HTTP-only cookies in case it matters) to read the user's preferred language if they've set one and fallback to `request.headers["accept-language"]` if it was never set. The reason is that I want SSR to already render on the right language and avoid the text to show on the wrong language for a split second. It…

### CASE-8141 · Vite deduplication causing problems with non-deterministic asset order
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug Vite (thankfully) deduplicates byte-to-byte equal asset files. In my project I create the assets dynamically with a custom plugin using [`pluginContext.emitFile()`]([link]). However, I heavily use async, so the order of the _emit_ calls is not deterministic, therefore the single file from vite deduplication has different name in client-side and server-side code. And I build with adapter-static, which crawls ssr code, but copies client assets, so it finds a non-existing file. ### Reproduction [link] In plugin.js, the same file is emitted for both imports with different…

### CASE-8143 · request.body is no longer nullish for body-less requests made from load's fetch during SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug As of version `1.0.0-next.151`, `request.body` in the `handle` hook was nullish when the request had no body and was sent via `load`'s `fetch` during SSR from some page. As of version `1.0.0-next.152` ([link] framework][ref]), it is now `Uint8Array(0) []`. This is inconvenient when you want your `handle` hook to call `fetch` to proxy some requests, as you can no longer pass the `request` object as the second argument to `fetch`. ### Reproduction Starting from the sample app, update the `handle` hook as so: ```js export const handle = async ({ request, resolve }) => {…

### CASE-8146 · Plain imported css files and style tags are loaded twice
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Plain css files that are imported in `__layout.svelte` get duplicated in the resulting page. In the demo app `__layout.svelte` contains `import '../app.css'`, but the resulting index html page on the client has two corresponding `<link rel="stylesheet" href="…" />` tags. First comes from the SSR or pre-render, second gets added by the router when client-side javascript takes over. Disabling javascript or using `export const router = false` on the index page gets rid of the second stylesheet. Moving the import from `__layout.svelte` to the `index.svelte` seems to still add…

### CASE-8147 · Missing "./ssr" export in "svelte" package
- **Principles**: P-F4 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I am running svelte-kit dev with the most recent version 1.0.0-146 and I get a weird error which I was not having before. For some reason i cleared node_modules and reinstalled all of them with "npm i" but now it doesn't run anymore. ### Reproduction run "npm run reproduce" my package.json file: ``` { "name": "bot", "scripts": { "prestart": "nvm on && nvm use 14.17.3", "reproduce": "svelte-kit dev", "start": "npm run clean && concurrently -kill-others \"npm run watch:tailwind\" \"svelte-kit dev\"", "watch:tailwind": "postcss src/app.css -o tailwind.css --verbose -w",…

### CASE-8150 · Invalid output and infinite redirect loop with `adapter-static` and `trailingSlash: "always"`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Only `<meta http-equiv="refresh" content="0;url=/test/">` is written to `build/test/index.html` when using static adapter and always trailing slash. **Logs** None, build runs successfully, maybe just that `301 /test -> /test/` is printed during build. **To Reproduce** Use `npm init svelte@user test`, choose skeleton project. Create a page `src/routes/test/index.svelte` with any content (`<p>hello</p>`). Have `svelte.config.js` like this: ```js import adapter from "@user/adapter-static"; /** @user {import('@[meta framework]').Config} */ const config = { kit: { // hydrate…

### CASE-8155 · 404 requesting asset in prerendered page
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** When using adapter-static the application is not building properly when the route component contains the async load function to load the data from JSON file and when a page contains the nested layouts/routes. 1. When using the async load function to load the data from the JSON file 2. When the page contains the nested layouts/routes. 3. While building the nested layout it tries to refer to the favicon.ico in its folder and tries to create the favicon.ico folder. **Logs** 1. This occurs when using SSR options is false in the configuration.…

### CASE-8159 · Error during build
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** Error during build **Logs** ``` [vite]: Rollup failed to resolve import "@[meta framework]/ssr" from ".svelte/build/app.js". This is most likely unintended because it can break your application at runtime. If you do want to externalize this module explicitly add it to `build.rollupOptions.external` > [vite]: Rollup failed to resolve import "@[meta framework]/ssr" from ".svelte/build/app.js". This is most likely unintended because it can break your application at runtime. If you do want to externalize this module explicitly add it to `build.rollupOptions.external` Error:…

### CASE-8163 · Better, more consistent error handling
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: error handling
- **Excerpt**: Different kinds of errors are all lumped in together during SSR, and it makes for a confusing experience. We can divide them into **load errors**, **eval errors**, **render errors** and **runtime errors**. ## Load errors If you try to render a page but the code fails to load (because of a syntax error, for example), you get a generic 'Failed to load [url]: Unexpected token' error with a stack trace that points to kit's innards but gives you no help locating the error. This is rendered inside the `$error.svelte` component (or its placeholder): ``` Error: Failed to load /_app/routes/nope.js:…

### CASE-8165 · <svelte:boundary> not catching SSR errors from remote functions?
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: ### Describe the bug Discord post: [link] I thought PR [link] or [link] framework][ref] was supposed to enable `<svelte:boundary>` to catch errors thrown by remote functions during SSR, but the default SvelteKit error page still shows up instead of my boundary's `failed` snippet. This too doesnt trigger my +error.svelte. Does this only work when SSR is *not* involved? Did I misunderstand or misuse something? Additionally, when the error occurs, the error ends up reflected in `result`, which doesn't seem right. My boundary code: ```html <svelte:boundary> {#snippet failed(error, reset)} <div>…

### CASE-8166 · `form` remote functions with reactive initial values
- **Principles**: P-F4, P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍13 💬3 · closed · labels: forms
- **Excerpt**: ### Describe the bug Suppose I have a form which has initial values dependent on some sort of reactive data. It can be `$state`, `$derived`, etc. I need to have that data in the initial value of some input fields. I want all the fields to be loaded during SSR so that users don't see unloaded fields before hydration, so `$effect` seems to be out of the question. This is what I initially tried: ```svelte <script lang="ts"> import { page } from "$app/state"; import { resolve } from "$app/paths"; import { loadId, sendId } from "../../data.remote"; const idPrefix = $derived(page.params.idPrefix ??…

### CASE-8170 · Prerendered Remote Function failing on SSR in Cloudflare Workers @user/adapter-cloudflare
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬3 · open · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug Prerendered functions don't work with SSR in Cloudflare Workers. When I disable ssr with `export const ssr = false`, the issue no longer persists. ### Reproduction Repository: [link] (build files included) Bug in the wild: [link] 1. Create a remote function (`const testFn = export const testFn = prerender(() => { return "testing"; });`) 2. Call remote function in `src/routes/+page.svelte` with `{await testFn()}` 3. `npm run build && npx wrangler deploy` 4. Go to the site and see 500. Logs below ### Logs ```Shell This is the only relevant log I can find [1;31m[500] GET…

### CASE-8175 · Bundling SSR Modules using CommonJS exports alias results in ReferenceError: exports is not defined
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍84 💬45 · closed · labels: p4-important/feat: ssr
- **Excerpt**: ## Describe the bug When importing an SSR module, if - it uses the `exports` alias instead of `module.exports`, - `ssr.noExternal` is declared with the module Vite is unable to evaluate it. This can also happen with the more common `module.exports`, but seems to not be guaranteed. While this behavior may seem esoteric due to modern proliferation of `module.exports`, this is a feature of Node [since v0.1.16 and has not been deprecated]([link]). In addition, there are instances of various npm modules in the wild which use this method of exporting fields, including, but not limited to: -…

### CASE-8196 · importMetaEnv doesn't work.
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬23 · closed · labels: cannot reproduce
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I used the [intellisense function]([link]) as per the guide, but it doesn't work. `/src/env.d.ts` ```ts interface ImportMetaEnv { VITE_API_TIMEOUT: number, VITE_MOCKUP: boolean } ``` `.env` ``` VITE_API_TIMEOUT=3000 VITE_MOCKUP=true ``` And, when import.meta.env is printed from main.ts to the console... ``` BASE_URL: "/" DEV: true MODE: "development" PROD: false SSR: false VITE_API_TIMEOUT: "3000" VITE_MOCKUP:…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8107 · Docker Environment Variables not fetched by Svelte
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux, svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug svelte build works fine when starting from command line with environment variable, but when placed in a docker container it can't fetch the environment variable ### Reproduction const region = import.meta.env.VITE_REGION || process.env['REGION'] || 'None' gets the appropriate REGION variable In docker container it's always None File is index.svelte of demo counter ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 NixOS 22.11 (Raccoon) 22.11 (Raccoon) CPU: (8) x64 Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz Memory: 23.01 GB / 31.32 GB Container: Yes…

### CASE-8138 · Cannot avoid @user/node conflicts with libdom.d.ts
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug @user/node are pulled in via transitive dependencies of `@[meta framework]/types/index.d.ts` The problem is @user/node clobbers some libdom.d.ts definitions with incompatible node variations. ### Reproduction npm install @user/wicg-file-system-access edit the tsconfig.json to add ```"types": ["wicg-file-system-access"],``` edit index.svelte to add ``` <script> /** @user {Promise<any>}*/ let openFile = null; function onOpen() { openFile = doOpenFile(); } async function doOpenFile() { const [handle] = await showOpenFilePicker(); const file = await handle.getFile(); /**…

### CASE-8142 · Svelte overrides (?) loaded JS from `<script>` tag
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Once you load the page you're able to see the styled buttons but they immediately get unstyled [link] Here's my setup ```javascript // __layout.svelte <footer class="footer"> <SocialShare /> </footer> ``` ```html <body> <div id="svelte">%svelte.body%</div> <script async defer src="[link]></script> </body> ``` ```javascript // SocialShare.svelte <a class="github-button" href="[link] data-color-scheme="light" data-size="large" data-show-count="true" aria-label="Follow @user on GitHub">Follow @user</a > <a class="github-button" href="[link] data-color-scheme="light"…

### CASE-8167 · Stability
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍5 💬3 · open
- **Excerpt**: ### Describe the problem Hi! Any chance to see stable, compatible versions of svelte and kit with bug fixes only and the objective to avoid regressions? I love Svelte, I love SvelteKit, but the frequent regressions and unpredictable behaviours are exhausting for a solo developer. Thanks. <3 ### Describe the proposed solution LTS versions of Svelte and SvelteKit, with a fixed timetable. Maintained for maybe 6 months to a year, with a couple of months of overlap between two versions to migrate smoothly. The ability to focus on the apps and websites I'm developing rather than spend lots of time…

### CASE-8172 · TypeError: crypto.hash is not a function
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: windows, react, typescript, vite
- **Signals**: 👍30 💬69 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I simply installed a React TypeScript project using pnpm create vite and tried to run it, but encountered the following error. I'm on a Windows environment and using Node.js version v20.9.0. This issue didn't occur before, so it seems to be related to the recent update to Vite version 7.0. ``` G:\project>pnpm create vite | o Project name: | vite-sample | o Select a framework: | React | o Select a variant: | TypeScript | o Scaffolding project in G:\project\vite-sample... | — Done. Now run: cd vite-sample pnpm install pnpm run dev G:\project>cd vite-sample…

### CASE-8173 · [build] importing from hashed chunks makes caching terribly ineffective
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍51 💬56 · closed · labels: p3-significant/feat: build
- **Excerpt**: # Update I've published a plugin that solves the issue for me: [link] See [link] tool][ref][ref] for example usage in the issue reproduction repository ### Describe the bug Built files import other files which names contain content hash. So if the chunk `A` changes its contents then the output file changes its hash (`A.123.js` becomes `A.234.js`). So if there's other file that imports from `A` chunk then it also changes its contents and hash because `import {...} from 'A.123.js'` becomes `import {...} from 'A.234.js'`. Imagine now that I'm defining an env variable with build time. Main chunk…

### CASE-8178 · Accessing env variables from index.html
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍18 💬37 · closed · labels: enhancement/feat: html
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug I try to insert html tag by environment variable condition and use `vite-plugin-html` for it. But Vite behaviour is weird <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction [link] 1. This code works only in build ```html <% if (import.meta.env.VITE_SHOW_TAG === '1') { %> works <% } %> ``` During…

### CASE-8179 · Can't dynamically import a node module with a variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, vite
- **Signals**: 👍38 💬34 · open · labels: enhancement
- **Excerpt**: ### Describe the bug Hi! I've ran into an issue where I can't import a dependency from node modules with a variable. But without a variable, it works. I also tried using a variable for a "local" import and that also works. I've attached a minimal reproduction, that uses dayjs as an example. ### Reproduction original: [link] vite 5.4.2 (same issue): [link] (check console) ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 13.3 CPU: (8) arm64 Apple M1 Memory: 119.72 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.3.1 - /usr/local/bin/node Yarn: 1.22.19 -…

### CASE-8198 · "document" is not defined for xxxx.wasm?url
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬22 · closed · labels: p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug Hi there, the following error is fired when I use latest version 3.0.9 to compile the following code in production mode: import xxxx from "../../xxx.wasm?url"; The error is as follows. "document" is not defined So I switch back to old version 2.9.x and the error disappear After some investigation, I found it is caused by the changeset: * fix: avoid using `import.meta.url` for relative assets if output is not ESM (fixes [ref]) ([ref]) The following code doesn't check document variable: const getRelativeUrlFromDocument = (relativePath: string, umd = false) => getResolveUrl(…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8110 · New version: Package subpath './vite' is not defined by "exports"
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug As the name implies. I updated the svelte-kit package and now I have to use Vite. Now, I found 1 instructional video online on how to actually transition to the new version. After following it, my package building and dev fails. with the following error: ``` failed to load config from <repo path>/vite.config.js error when starting dev server: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './vite' is not defined by "exports" in <repo path>/node_modules/@[meta framework]/package.json imported from <repo path>/vite.config.js at new NodeError…

### CASE-8112 · svelte-kit preview with --port does not work properly
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: svelte, vite
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug `svelte-kit dev --port 3011` works properly. `svelte-kit preview --port 3011` seems to work properly as far as I read the log. But practically, it run on port 3000. ### Reproduction [link] ### Logs ```shell ~/projects/sveltejs-kit-template-default-shy3hw 3m 41s ❯ npm run build && npm run preview $ svelte-kit build vite v2.9.12 building for production... ✓ 34 modules transformed. .svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg 1.85 KiB .svelte-kit/output/client/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2 15.40 KiB…

### CASE-8119 · kit start mounting wrong node
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug For a number of reasons related to platform integration, nytimes wraps sveltekit html output in a template that will occasionally hoist script tags into the `body` tag: src/hooks.js ```javascript /** @user {import('@[meta framework]').Handle} */ export async function handle({ event, resolve }) { return resolve(event, { transformPage: ({ html }) => { // wraps the output in the nytimes renderer, which sometimes // hoists script tags contained in html out of the generated component html and into the <body> tag. return render_page_in_template(html); }, }); } ``` Since [kit…

### CASE-8133 · Building with adapter-static breaks when adding global stylesheet
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug `svelte-kit build` command fails when prerendering a SvelteKit site via `adapter-static`. Things work as expected in development mode (i.e. when running via `svelte-kit dev` command). Repo: [link] ### Reproduction - git clone [link] - yarn && yarn build ### Logs ```shell yarn run v1.22.17 warning package.json: No license field $ svelte-kit build vite v2.6.14 building for production... ✓ 14 modules transformed. .svelte-kit/output/client/_app/manifest.json 1.21 KiB .svelte-kit/output/client/_app/layout.svelte-39935a5a.js 0.53 KiB / gzip: 0.35 KiB…

### CASE-8134 · mailto links broke with 1.0.0-next.200
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug when running `npm run build` on a [email]-next.200 project, the build fails when processing mailto: links. I think the commit [link] framework]/commit/f12bbcc686829243f111db1b463d4a261fb67c23 (is_root_relative helper) might be related to this issue ### Reproduction [link] [link] ### Logs ```shell ✓ 14 modules transformed. .svelte-kit/output/server/app.js 0.07 KiB .svelte-kit/output/server/chunks/app-15aed414.js 48.53 KiB .svelte-kit/output/server/chunks/layout-16a4b7f3.js 0.23 KiB .svelte-kit/output/server/chunks/error-1cd6baa4.js 0.71 KiB…

### CASE-8144 · Anchor hrefs inside SVG elements not getting handled properly by router
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed · labels: router/p2-nice-to-have
- **Excerpt**: ### Describe the bug Anchor tags inside SVG elements cause a TypeError in the router, and fall through to browser navigation. This results in a full page load. The issue seems to be that SVG elements are SVGAnimatedStrings, and the href attribute is returned as an object. I have resolved this issue locally by checking if the element is an SVG, and if so, accessing a.href.baseVal, and including document.baseURI in the URL constructor. This has to be done inside the "click" event handler and the trigger_prefetch function. I'm happy to submit a PR if this solution is acceptable. ### Reproduction…

### CASE-8156 · hooks.js warning in console when building
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** ``` $ npm run build --verbose ... vite v2.1.5 building SSR bundle for production...en Completed in 3ms 'getContext' is not exported by '.svelte/build/hooks.js'leted in 3ms 'getSession' is not exported by '.svelte/build/hooks.js' 'handle' is not exported by '.svelte/build/hooks.js' ✓ 14 modules transformed. .svelte/output/server/app.js 72.24kb ``` Happens with the `static` and `node` adapters. **Expected behavior** No errors. **Information about your SvelteKit Installation:** All libraries are up-to-date (kit @ .73). **Severity** Annoying and may be indicative of a bug in…

### CASE-8157 · Fetch is not defined with adapter-static and firebase
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** We were using adapter-static. After we added firebase functions, there is an error when running `npm run build:static`. The error says: `ReferenceError: fetch is not defined` **Logs** ``` Running 'npm run build:static': > [email] build:static /workspace/source > ADAPTER=@user/adapter-static OPTIONS={} npm run build > [email] build /workspace/source > svelte-kit build vite v2.1.4 building for production... transforming... warn - Tailwind is not purging unused styles because no template paths have been provided. warn - If you have manually configured PurgeCSS outside of…

### CASE-8158 · CSS for $error.svelte not built, not applied
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: **Describe the bug** When building for production, the error page will show without any styling. **Logs** ``` $ svelte-kit build vite v2.1.5 building for production... transforming... ✓ 44 modules transformed. rendering chunks... .svelte/output/client/_app/manifest.json 0.93kb .svelte/output/client/_app/pages/index.svelte-8aa39352.js 1.17kb / brotli: 0.53kb .svelte/output/client/_app/chunks/vendor-63a63977.js 5.26kb / brotli: 2.06kb .svelte/output/client/_app/assets/pages/index.svelte-608e5fe0.css 0.34kb / brotli: 0.15kb .svelte/output/client/_app/start-ba42d67b.js 16.15kb / brotli: 5.52kb…

### CASE-8161 · SEO Support LD+JSON in head
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** When inserting structured information, for SEO purpose, into the head of a page in `ld+json` format, this is not possible. Instead, by omitting the type of the script, this renders with no visible error. **Logs** The error I get from `vite` in my browser ``` Cannot find module './transformers/ld+json' ``` **To Reproduce** I'm using the latest available version of `kit`. Simply add to one of the pages the following snippet ``` <svelte:head> <script type="application/ld+json"> { "@user": "[link] "@user": "Product", "name": "", "description": "", "image": "", "brand": "" }…

### CASE-8187 · Cannot read properties of undefined (reading 'isSelfAccepting')
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍8 💬27 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Occasionally requests are failing with an error: ``` 35a0d891 > TypeError: Cannot read properties of undefined (reading 'isSelfAccepting') 35a0d891 > at TransformContext.transform (file:///Users/gajus/Developer/contra/gaia/node_modules/.pnpm/[email]@[email]@user.62.0/node_modules/vite/dist/node/chunks/dep-d305c21f.js:41735:43) 35a0d891 > at process.processTicksAndRejections (node:internal/process/task_queues:95:5) 35a0d891 > at async Object.transform…

### CASE-8199 · `new URL(foo, import.meta.url)` doesn't work when dependency was optimized
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍41 💬22 · closed · labels: p2-edge-case/feat: deps optimizer
- **Excerpt**: ### Describe the bug Now, i use [wasm-pack]([link]) for build WASM file and WASM with JavaScript glue layer like [this]([link])。 The glue layer code contains below code ```js if (typeof input === 'undefined') { 165 | input = new URL('color_thief_wasm_bg.wasm', import.meta.url); 166 | } ``` In Vite, after esbuild optimize third party, `import.meta.url` cannot be optimize succeed. Ref [Vite Docs]([link]), even if set `build.target` to `es2020` is still the problem After preprocess `node_modules/color-thief-wasm-web/color_thief_wasm.js` will be transform to…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8111 · Image imports do not work with base path set
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed · labels: paths.base
- **Excerpt**: ### Describe the bug Importing resources based on URL does not work if a base path is set in SvelteKit. This includes the explicit URL import (`import Image from './image.png?url'`) as well as the implicit import for image files (`import Image from './image.png'`). No errors are produced in logs, the returned URL just happens to result in a 404. ### Reproduction [link] 1. Create a SvelteKit project, responding "No" to all options 2. Add an image to `src/routes` (Named "thinking-orange.png" in repro) 3. Add to `src/routes/index.svelte` ``` <script> import src from './thinking-orange.png?url'…

### CASE-8113 · __layout props update on every route change
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: load / layout
- **Excerpt**: ### Describe the bug Not sure if this is a bug or should just be a discussion, but it was a surprise. When loading some data _once_ in a parent __layout I expected that data to then remain static. But the props appear to be re-assigned on every navigation, even for querystring parameter changes. This plays havoc with any `use:actions` which think things have been updated when they haven't (which may contain image gallery layout code, canvas setup etc... that I only want to re-run when the data actually changes) ### Reproduction Simplified example to show the behavior: [link] Run the project…

### CASE-8116 · Create blank layout on sub-page not working
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have a plain sub-page with zero layout for print purposes. Now I upgraded to the latest SvelteKit version and followed the [SvelteKit named layouts]([link]) documentation, but I am not able to remove the root layout. I tried - empty (`<slot />` only) `__layout-test.svelte` and `[email]` - empty (`<slot />` only) `__layout.svelte` - empty (`<slot />` only) `[email]` <img width="668" alt="SvelteKit-named-layouts" src="[link]> Maybe the documentation is not quit clear on how to just get a blank layout. ### Reproduction Create [SvelteKit demo app]([link]) and try to reset…

### CASE-8118 · Styles flash when using CSS Modules in the development environment
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬4 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug Styles flash when using CSS Modules in the development environment . I found that in inlineStyle, the style of CSS Module was not inserted correctly, and the [object object] was incorrectly spliced. You You can view source code by running the local environment (yarn dev). ![image]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.3.1 CPU: (10) arm64 Apple M1 Pro Memory: 475.19 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.15.0 - /usr/local/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 8.5.5 -…

### CASE-8122 · Page sends "accept: '*/*'" to page endpoint, but really only accepts 'application/json'
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: p1-important/breaking change/low hanging fruit
- **Excerpt**: ### Describe the bug The page endpoint are a great way to reduce coding. But the headers sent seem not to be set correctly. When a page is loaded the first time from the server, the endpoint seems to be called twice: ``` headers {} headers { accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8', 'accept-language': 'de,de-DE;q=0.8,en-US;q=0.5,en;q=0.3', 'content-length': '0', host: 'localhost:3000', origin: '[link] referer: '[link] 'upgrade-insecure-requests': '1' } ``` Every additional navigation (SPA mode) to the page results in: ``` headers {…

### CASE-8123 · Lighthouse performance test fails
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi, I have been noticing that on the pages I build with Sveltekit the Lighthouse performance test is not working. It always shows the error NO_FCP (First Content Paint). At first I thought it could be my fault for using lazy loading in some sections of the page ([link]) but in others I don't do it and it keeps happening ([link]). In both I create a small delay in the rendering to show the page with a fade in but that has never given me problems using other frameworks or creating static web pages in a vanilla way. Both use prerender. Is this a known problem? Thanks in…

### CASE-8125 · SvelteKit & AMP
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Hello, I have a 500 error on the documentation. [[link]]([link]) ### Reproduction 1. [link] 2. ![image]([link]) 3. ![image]([link]) ### Logs _No response_ ### System Info ```shell nada. ``` ### Severity annoyance

### CASE-8127 · [link] 500s out with an "Unexpected token < in JSON at position 0"
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug Navigating to [link] gives a 500 error: "Unexpected token < in JSON at position 0". Yikes indeed. ![image]([link]) Also affects old navigation schema, for instance: [link] Looks like it's a combination of the new docs refactor and the new automatic shadow endpoint system thinking its going to receive a JSON file and getting something else instead... ### Reproduction Go to [link] or [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.13 Linux Mint 20.3 (Una) CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz Memory: 601.65 MB / 15.38 GB Browsers:…

### CASE-8128 · Shadow endpoint -- issue rendering with no get endpoint
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍14 💬4 · closed
- **Excerpt**: ### Describe the bug When using the new shadow endpoints, it seems it is required to define a `get` endpoint so that sveltekit renders the page (even if no data needs to be loaded and passed down to the page). Not providing any `get` endpoints returns a 405 error. <img width="1054" alt="Screenshot 2022-02-07 at 16 03 25" src="[link]> Providing an empty `get` function solves this problem. ```javascript export async function get() { return { body: { } }; } ``` It would be interesting not to have to provide an empty `get` function. ### Reproduction Minimal reproduction can be found here: [link]…

### CASE-8129 · Reset layouts still inherit their parents' styles
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug __layout.reset.svelte does not reset the style stack ### Reproduction **/src/routes/__layout.svelte** ```svelte <h1>Root layout</h1> <slot/> <style> :global(html) { background: skyblue } </style> ``` **/src/routes/nested/__layout(.reset)?.svelte** ```svelte <h1>Nested layout</h1> <slot/> ``` Without .reset: ![image]([link]) With .reset: ![image]([link]) (It should not have the blue background) ### Logs _No response_ ### System Info ```shell devDependencies: '@user/adapter-auto': 1.0.0-next.17 '@[meta framework]': [email] svelte: 3.46.3 ``` ### Severity annoyance ###…

### CASE-8139 · import {Device} from "@user/voice-sdk" not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: vite
- **Excerpt**: ### Describe the bug import {Device} from "@user/voice-sdk" not working, output from web show the following result: <img width="1368" alt="Screenshot 2021-10-03 at 00 02 52" src="[link]> ### Reproduction - npm install @user/voice-sdk --save - import { Device } from '@user/voice-sdk'; ### Logs ```shell 500 inherits is not a function. (In 'inherits(MediaDevicesShim, EventTarget)', 'inherits' is undefined) node_modules/@user/voice-sdk/es5/twilio/shims/mediadevices.js@[link] __require@[link] node_modules/@user/voice-sdk/es5/twilio/audiohelper.js@[link] __require@[link]…

### CASE-8145 · Using GoTrue library in Sveltekit gives this error: GoTrue is not a constructor
- **Principles**: P-A3, P-H1 · **Env**: svelte, vue, webpack
- **Signals**: 👍0 💬4 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug Using the GoTrue library in a sveltekit project gives the following error when running npm run build: > GoTrue is not a constructor TypeError: GoTrue is not a constructor In development mode (npm run dev) it works correctly. The issue doesn't come from the library because it work in other projects built with vuejs and webpack. ### Reproduction GitHub repo: [link] ### Logs ```shell 6:09:17 PM: Build ready to start 6:09:19 PM: build-image version: c6001ed68662a13e5deb24abec2b46058c58248a 6:09:19 PM: build-image tag: v3.9.0 6:09:19 PM: buildbot version:…

### CASE-8149 · prerendering does not crawl imported images outside of pages
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: p2-nice-to-have
- **Excerpt**: **Describe the bug** `routes/todos/index.json.ts` imports an image. When using `@user/adapter-static`, `npm run build` produces a 404 error **Logs** > 404 /_app/assets/industry_1.166d527b.png (linked from /todos) **To Reproduce** Checkout [link] An image was added to the todos tab as shown below `src/routes/todos/index.json.ts` ```ts import welcomeImg from '$lib/images/home/industry_1.png'; .... export const get: RequestHandler<Locals> = async (request) => { .... return { body: { welcomeImg } } ``` `src/routes/todos/index.svelte` ```svelte .... <img src={welcomeImg} /> ..... ``` **Expected…

### CASE-8151 · Unable to npm run dev [vite] Internal server error: The request url "/service-worker.js" is outside of vite dev server root
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** This warning pops up when trying to npm run dev **To Reproduce** Installed sveltekit, netlify adapter and ran npm run dev just that. <img width="730" alt="bugg" src="[link]>

### CASE-8160 · Dependencies being eagerly executed due to default noExternal value
- **Principles**: P-A3, P-H1, P-F4 · **Env**: windows, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** OnMount running serverside with Node Adapter and SSR. This leads to a client-side lib being dynamically imported on the server. **Logs** ![image]([link]) **To Reproduce** ``` git clone [link] . yarn install yarn run build yarn run start ``` **Expected behavior** The SSR should build and run normally. What actually happens is that the SSR tries to render OnMount on the server, causing a client-side library to throw an error **Information about your SvelteKit Installation:** ``` System: OS: Windows 10 10.0.19042 CPU: (8) x64 Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz Memory:…

### CASE-8174 · Scripts set in manualChunks are loaded directly in front page, instead to be lazy loaded when needed
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍47 💬51 · closed
- **Excerpt**: ### Describe the bug To manage well the bundle, I am setting the packages into manualChunks e.g.: The package fabric is used only in the admin area of my app, that is why I don't need it to be loaded directly in the front page. **If I don't set** it in manualChunks, it works good and it will not be loaded in the front page, but my chunks then are too large, because vite place it automatically together with others in a huge backend chunk. Then as soon I open the backend it lazy loads all the other chunks, including the one that contains fabric. So this is the expected behavior. If I set it in…

### CASE-8184 · library mode can't extract static assets
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍83 💬32 · open · labels: pending triage/feat: library mode
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug while in library mode, exec `yarn build`, the static assets is inline into css file, but what i want is to remain assets alone. ### Reproduction 1. yarn create @user/app vite-demo --template react 2. replace `img` with `div` in `App.tsx`, and remove `src` attribute ```html <div className="App-logo" /> ``` 3. add `background-image: url(facivon.svg)` for `.App-logo` classname in `App.css` ```css .App-logo {…

### CASE-8185 · Server Proxy Urls Don't Respect changeOrigin Setting in Vite Config in Version 7.2.2
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍6 💬31 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug After upgrading to 7.2.2 the redirect from our IDP no longer works. I'm getting a 404 after a POST request is made to [link] <img width="937" height="281" alt="Image" src="[link] /> I can't provide a reproduction as it requires authenticating against an IDP. Currently using 7.1.12. Switching to any 7.2 version results in this issue. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 26.1 CPU: (14) arm64 Apple M3 Max Memory: 1.20 GB / 36.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.17.0 -…

### CASE-8188 · "Component is missing template or render function" after HMR
- **Principles**: P-A3, P-H1 · **Env**: vite, vue, typescript
- **Signals**: 👍9 💬27 · closed · labels: cannot reproduce
- **Excerpt**: ## Describe the bug When using Vite with Vue 3, regularly a component update will cause the component to vanish from the browser page and the following error will be presented: "Component is missing template or render function". This can be caused by a change as small as adding whitespace to the script block. ![image]([link]) I have noticed that the issue is present across all components for me, whether they use object syntax, composition API, or the new `<script setup>` block. I am using TypeScript exclusively, but the root component (`App.vue` from the standard init script) also had the…

### CASE-8192 · Unable to the run vue app with latest vite version 2.9.0 and above
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬24 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hello team, I've created a latest vue project using below command, `npm init vue@user` and project was created, in the latest code vite version installed as "vite": "^2.9.5". I tried all the versions from 2.9.0 to 2.9.6, but didn't worked. When run the below command, `npm run dev` I'm getting bellow error, ![image]([link]) I tried all the below versions. I got the same above error, ![image]([link]) But when I build the application it is working fine. like, `npm run build` Finally I downgraded the vite version to **("vite": "2.8.6")**, the app is working properly like,…

### CASE-8193 · Assets with a dynamic URL are ignored
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍13 💬24 · closed · labels: enhancement
- **Excerpt**: **Is your feature request related to a problem? Please describe.** When something like `<img src=example.png>` is used in a Vue template, `vite build` handles it by copying the PNG file into the `dist` directory with a hash in the filename etc. However this doesn’t happen when the image filename is dynamic. For example: ```html <ul> <li v-for="item in items"> <img v-bind:src="`icons/${item.slug}.png`" /> {{ item.name }} </li> </ul> ``` The `src` attribute in the browser’s DOM are exactly the result of template interpolation, which works out with Vite’s own development server but not in…

### CASE-8195 · v2.6.X打包是在rendering chunks 卡住
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬23 · closed · labels: bug: upstream/has workaround
- **Excerpt**: ### Describe the bug 使用2.6.x版本打包时 在 rendering chunks 卡住 内存占用突然变得很高 然后就降低了 然后一直卡住 ![image]([link]) ### Reproduction 。。。 ### System Info ```shell 。。。。 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite issue and not a…

### CASE-8197 · `require is not defined` when importing a node_module that imports a CSS file
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍5 💬23 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug When importing a react component that imports a CSS file, vite fails with the message: > Uncaught ReferenceError: require is not defined If you dig into the stack trace, you'll see that the `require` statement is from an imported `.css` file (line 8 in this image): ![Screen Shot 2021-05-13 at 2 09 02 PM]([link]) This issue: - Does not occur when running with create-react-app or storybook - Occurs with any NPM…

### CASE-8200 · `Cannot set properties of undefined` Type Error for React Moment package
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍1 💬22 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug I'm migrating one of our projects at my company to Vite from CRA, and I see the following error in the console when I navigate to the locally hosted application in my browser: ![image]([link]) See also the log file: [localhost-1647615535049.log]([link] tool]/files/8305439/localhost-1647615535049.log) Needless to say, this wasn't an issue when we were using CRA. I've tried a number of work arounds myself, but to no avail. Happy to share if they're of interest. Would love to find a fix for this as CRA is painfully slow for running a local development environment and…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8130 · Static build fails when a `<link>` has an external URL
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug A static build fails when `<head>` contains a stylesheet `<link>` that has an external url. Example is the line `<link rel="stylesheet" href="/webjars/mdi__font/5.8.55/css/materialdesignicons.min.css">` below: ```html <!DOCTYPE html> <!-- app.html --> <html lang="en"> <head> <meta charset="utf-8" /> <meta name="description" content="Svelte demo app" /> <link rel="icon" href="%svelte.assets%/favicon.png" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="stylesheet" href="/webjars/mdi__font/5.8.55/css/materialdesignicons.min.css">…

### CASE-8148 · prerendering tries to crawl data-ci-src attribute in addition to src and fails
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: help wanted
- **Excerpt**: **Describe the bug** I'm using a responsive image library where you set `<img data-ci-src="myimage.png"/>` which is then later translated to `src` in the client based on viewport size and other params. This work fine in dev mode but apparently, adapter-static is validating the `data-ci-src` attribute on build which always fails with a 404 because the src path is relative and will be something like `[link] after the translation. The files referenced in `data-ci-src` don't actually exist in my sveltekit project. If I comment out the `data-ci-src` attribute in the `<img>` tag, it works. Sounds…

### CASE-8180 · Vite generates multiple copies of the same stylesheet
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍14 💬33 · closed · labels: pending triage/feat: css
- **Excerpt**: ### Describe the bug I am using the following vite config option to make global styles available in React components without requirement of usage of "@user '../../syles/main" in each component file: ``` css: { preprocessorOptions: { scss: { additionalData: ` @user "./src/styles/main"; ` } } } ``` it comes from [link] tool][ref] My main.scss looks like: ``` @user "./node_modules/normalize.css/normalize"; @user 'fonts'; @user 'colors'; @user 'breakpoints'; @user 'animations'; @user 'layers'; ``` where fonts, colors, breakpoints, animations, layers include global variables. It works fine in part…

### CASE-8183 · Missing/broken sourcemaps for JS modules w/ imports when used with Vue
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vue, vite
- **Signals**: 👍6 💬32 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I originally reported this to JetBrains, and they seem to think it's an issue caused by sourcemaps not being generated by Vite. The same project moved over, running, and debugging on Vue-CLI does not have this issue and breakpoints are hit in the correct file. [link] IntelliJ/WebStorm/VSCode seems to be unable to properly debug local JavaScript files when debugging JS modules imported into Vue components in a Vite project. If you import a regular JS module into your component which itself has an import IJ/WS/VSC is unable to properly map the local .js file to the remote…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8153 · The navigation announcer's CSS could be inlined
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** Production build generates a `start-[hash].css` file with the following content: ```css #svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px} ``` This file is included in built HTML, but is not required by the application. **To Reproduce** 1. Init svelte kit skeleton 2. Build **Expected behavior** Only the files needed for the application should be in the resulting build. <details> <summary>npmPackages</summary> @[meta framework]: next => 1.0.0-next.102 svelte:…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-8169 · Memory leak freezes app when changing routes while remote queries are in flight
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Describe the bug Here's my fictional setup: - 3 routes: 1. three individual boundaries, each with the same component (different props) which in turn loads data via remote query() 2. same components with same props, but wrapped in just one boundary 3. simple no-data route for testing - remote query function is artificially delayed by 2 seconds When I navigate to the first page, wait for all 3 queries to resolve, then switch to the second route, the data is not fetched again. This seems to be as designed, remote queries are cached. However, if I visit the first route (with 3 boundaries),…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8190 · CSS imported to JS using ?inline contain JS code for URL handling instead of actual URLs when built for production
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍0 💬25 · open · labels: p2-edge-case
- **Excerpt**: ### Describe the bug One of our project which works fine with Vite 2.x has code like ``` import previewHacks from './preview-hacks.css?inline'; injectGlobalCss(previewHacks.toString()); ``` where `preview-hacks.css` contains ``` @user url('line-awesome/dist/line-awesome/css/line-awesome.min.css'); ``` The `line-awesome.min.css` file contains ``` @user{ font-family:'Line Awesome Brands'; font-style:normal; font-weight:400; font-display:auto; src:url(../fonts/la-brands-400.eot); src:url(../fonts/la-brands-400.eot?#iefix) format("embedded-opentype"),url(../fonts/la-brands-400.woff2)…

