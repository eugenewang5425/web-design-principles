# Case Chunk 065 — Round 65

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7401 · smartcrop: bad extract area
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: blocked
- **Excerpt**: ## Description One week ago it used to work normally, then after upgrading to newest gatsby (and plugins) packages I get this error: ``` pogo@user:~/Projects/ivanaart.cz$ gatsby develop success delete html files from previous builds — 0.064 s success open and validate gatsby-config.js — 0.004 s success copy gatsby files — 0.016 s success onPreBootstrap — 0.269 s success source and transform nodes — 0.116 s success building schema — 0.167 s success createLayouts — 0.007 s success createPages — 0.081 s success createPagesStatefully — 0.015 s success onPreExtractQueries — 0.002 s success update…

### CASE-7402 · gatsby-plugin-sass not working with imported sass files that have a property with "url(...)"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: ## Description I have a series of imports of sass files and when I try to compile them with gatsy-plugin-sass I get the following error. ``` These relative modules were not found: * ../../global/fonts/brandonprinted-one-webfont.eot in ./~/css-loader!./~/sass-loader?sourceMap!./src/page-assets/work-ive-done/subpages/web-animations/styles/web-animations.sass ``` I've fixed the issue by copying gatsby-plugin-sass's config to my gatsby-node.js and using [resolve-url-loader]([link]) (see my gatsby-node.js below). I also disabled gatsby-plugin-sass. Should resolve-url-loader be added to…

### CASE-7405 · Image processing
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍40 💬72 · closed
- **Excerpt**: Updated Aug 2023 by @user - this thread has gotten quite long, so I've summarized some key points here. We have some docs on the site ([link]) that share some helpful basics. This issue discusses a potential future implementation within SvelteKit ## Static optimization with an `Image` component Vite's build pipeline will handle assets that you `import`: [link] You can use `vite-imagetools` to transform those images as part of Vite's pipeline. E.g. the most common transform might be to generate avif and webp versions of an image. You can use the `defaultDirectives` option to set a project-wide…

### CASE-7414 · Svelte transition impacts navigation
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍56 💬31 · closed · labels: router
- **Excerpt**: **Describe the bug** If a component used in a route has a transition applied, it will delay navigation and potentially create UI errors. **To Reproduce** In a brand new installation, create a new component e.g. `Linker.svelte` and include it in the `index` route. ```HTML <!-- src/lib/Linker.svelte --> <script> import { fade } from "svelte/transition"; let showImage = false; </script> <div on:mouseenter={() => { showImage = true; }} on:mouseleave={() => { showImage = false; }}> <h1>Wow hi!</h1> <a href="/about">About</a> {#if showImage} <img transition:fade={{ duration: 2000 }} src="[link]…

### CASE-7433 · Missing "vite-manifest.json" file on build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, svelte
- **Signals**: 👍4 💬23 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Building a SvelteKit application on one of my GitLab runners breaks with: `[vite-plugin-svelte-compile] ENOENT: no such file or directory, open '.../.svelte-kit/output/client/vite-manifest.json'` On my local machine, the build is fine. I was curious about the `vite-manifest.json` file, and it looks like it's actually generated: ``` ✓ 1268 modules transformed. .svelte-kit/output/client/_app/version.json 0.03 kB │ gzip: 0.05 kB .svelte-kit/output/client/vite-manifest.json 38.84 kB │ gzip: 2.79 kB ... ``` But if I go inspect that folder after the build is complete, that file…

### CASE-7434 · Support for tools like telefunc
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬23 · closed
- **Excerpt**: ### Describe the bug [Telefunc]([link]) allows simple frontend to backend calls, avoiding direct call to `fetch`. ```ts // The `CreateTodo.telefunc.js` file is not loaded: // Telefunc transforms `*.telefunc.js` imports into a // thin HTTP client. import { onNewTodo } from './CreateTodo.telefunc.js' ... await onNewTodo({ text }) ``` Using telefunc + sveltekit can cause the following issues: - `Cannot import $env/static/private into client-side code` - `Cannot import $lib/server/xyz.telefunc.ts into client-side code` Those errors happen at build time and in dev mode, but in dev mode, switching…

### CASE-7443 · hooks.js example causes a build error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬20 · closed
- **Excerpt**: **Describe the bug** When the following `hooks.js` file exists, `npm run build` throws an error. (However `npm run dev` works without error and the site runs perfectly.) **To Reproduce** 1. Add `src/hooks.js` ```js export async function handle(request, render) { const response = await render(request); return { ...response, headers: { ...response.headers, 'x-custom-header': 'potato' } }; } ``` 2. Run `npm run build`. The command will throw this error: ``` ✓ 38 modules transformed. .svelte/output/server/app.js 193.07kb .svelte/output/server/style.css 7.76kb Run npm start to try your app…

### CASE-7450 · remote function build issues sveltekit @ 2.39.0 and up (tested up to and including 2.42.0)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍1 💬18 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Running `vite build` works in sveltekit @user.38.1 but fails in 2.39.0 -> 2.41.0 versions the issue appears to occur due to changes in [link] framework]/blob/3120d170b157b5a00369b3ee66d3cbe4d3c6fc03/packages/kit/src/exports/vite/index.js These are the errors I am seeing: ``` [plugin vite-plugin-sveltekit-remote] Sourcemap is likely to be incorrect: a plugin (vite-plugin-sveltekit-remote) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help (x4) ``` and ``` node:internal/event_target:1101…

### CASE-7484 · Unable to `build` (or `preview`) a project that runs fine with `dev`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: **Describe the bug** Unable to `build` (or `preview`) a project that runs fine with `dev`. My project (converted from a Svelte / Snowpack project) runs properly with `npm run dev`, but fails when `npm run build`ing using `@user/adapter-static` or when using `npm run preview` with no adapter installed. Minimal demo repo at [link] **Logs** ``` > ~TODO~@user.0.1 build > svelte-kit build vite v2.3.8 building for production... transforming (27) node_modules/@user/piano/build/piano/Salamander.js(node:59986) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field…

### CASE-7494 · Layout with transition not unmounted on navigation
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍5 💬14 · closed · labels: router/blocked by upstream
- **Excerpt**: ### Describe the bug When routing from `/b` to `/` using an anchor element, the `/b/+page.svelte` component does not get unmounted. ```svelte <!-- /routes/b/+layout.svelte --> <script> import { page } from '$app/stores'; import { slide } from 'svelte/transition'; $: isB = $page.url.pathname === '/b'; </script> <slot /> {#if isB} <div transition:slide><a href="/">Home</a></div> {/if} ``` ```svelte <!-- /routes/b/+page.svelte --> <div><a href="/">Home</a></div> ``` - Expected behavior: all `/routes/b` related components should be unmounted. - Actual behavior: the `<div><a…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7403 · Attack vector arising from naive developer use of the `+layout.server.js` tree
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍76 💬100 · open
- **Excerpt**: ### Describe the bug __tldr;__ - The existence of the `+layout.server.js` tree will lead folks to put logic there rather than in `+page.server.js`. - Because SvelteKit decides on the client what to fetch from the tree, there are edge cases where important (e.g., authorization) logic in `+layout.server.js` is skipped. - This may seem a contrived edge case, but it is an attack vector that needs to be addressed through documentation. ------ Consider the following case. (Repo link below) ``` src └── routes └── launch-codes ├── +layout.server.js ├── +page.server.js └── +page.svelte ``` Let's say I…

### CASE-7409 · Scrolling to hash links is broken on Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, macos
- **Signals**: 👍1 💬35 · closed · labels: p1-important/scroll management
- **Excerpt**: ### Describe the bug Clicking a link like [link] should take you to that part of the page. It works in Firefox... <img width="1840" alt="image" src="[link]> ...but not Chrome: <img width="1840" alt="image" src="[link]> ### Reproduction Go to [link] in Chrome ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0.1 CPU: (10) arm64 Apple M1 Max Memory: 69.61 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.1 - ~/.nvm/versions/node/v16.13.1/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.13.1/bin/yarn npm: 8.1.2 - ~/.nvm/versions/node/v16.13.1/bin/npm Browsers: Chrome:…

### CASE-7420 · Defer not working properly when multiple promises are returned
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍2 💬27 · open · labels: pkg:adapter-vercel/pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug I've tryed the new defer api with vercel edge functions and when a single promise is returned it works as intended. However when you return multiple promises things get's messy quickly. For example ```ts const wait = (ms) => new Promise((r) => setTimeout(r, ms)); async function getBlog() { await wait(2000); return 'A cool blog post'; } async function getComments() { await wait(4000); return ['Very cool', 'Super', 'Fantastic']; } async function getRecommended() { await wait(1000); return ['Another post', 'Suh interesting']; } async function getFail() { await wait(8000);…

### CASE-7421 · "Reference Error: Cannot access uninitialized variable" in Safari on MacOS
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-F4 · **Env**: safari, macos, svelte
- **Signals**: 👍9 💬27 · closed · labels: blocked by upstream
- **Excerpt**: ### Describe the bug Safari throws an Exception in [this line]([link] framework]/blob/d3d44ff72cf26f773f82be7c1f692a5ed92a590e/packages/kit/src/runtime/client/client.js#L539) for me. ``` Reference Error: Cannot access uninitialized variable ``` svelte-kit version 1.0.0-next.561 renders the +error.svelte normally ### Reproduction Repository with minimal example: [link] 1. SSR needs to be turned off 2. a svelte module needs to import a module that uses top-level-await to initialize an exported variable ### Logs _No response_ ### System Info I'm running two machines currently, the dev process is…

### CASE-7422 · preload does not work and downloaded twice on firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, vite, svelte
- **Signals**: 👍0 💬27 · closed · labels: vite/p1-important
- **Excerpt**: **Describe the bug** 1. Here is the firefox bug of module preload: [link] i.e. firefox does not support modulepreload. There is a similar issue for sapper, [link] 2. The new vite already has a builtin preload plugin [link] on the client side. It will insert preload links despite [meta framework] also does that: [link] framework]/blob/1007f6730600b3f770c5062d385d539661d6d0c6/packages/kit/src/runtime/server/page/render.js#L104-L106. Links from svelte are like `/./_app/pages/$layout.svelte-3b4aa0d5.js`, but vite checks `/_app/pages/$layout.svelte-3b4aa0d5.js`. So vite does not think the inserted…

### CASE-7423 · SvelteKit + Electron = 💔
- **Principles**: P-G1, P-G2, P-G3 · **Env**: windows, svelte, electron, vite
- **Signals**: 👍4 💬26 · open · labels: documentation
- **Excerpt**: ### Describe the bug There's an issue when working from within ElectronJS, as there are non-web routes involved: they're file-based. For starters, there's one issue inside generated `index.html` file, there's a line like: ```js __sveltekit_wgqb1w = { base: new URL(".", location).pathname.slice(1, -1) }; ``` On Windows, it returns url something like that: ```js '/C:/Users/Jerry/projects/electron-svelte/out/app.asar/.vite' ``` So the fact that it starts from `/C:/` is already an issue since it then return an error: ```txt app.qFRTHcTk.js:7 Error: Not found:…

### CASE-7424 · Mobile iOS Safari Errors - 500: Importing a module script failed.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, ios, svelte, mobile, desktop
- **Signals**: 👍1 💬26 · closed
- **Excerpt**: ### Describe the bug I recently migrated my website from NextJS to SvelteKit. Everything has worked smoothly except for mysterious errors that seem to happen mostly on mobile iOS Safari, but also on desktop Firefox. On Safari, the error is: "500: Importing a module script failed." On Firefox, the error is: "500: error loading dynamically imported module" ![Screenshot 2022-06-15 at 16 26 18]([link]) As you can see, this is so common that a total of 0.6% of visitors are getting a critical error that is severe enough to replace the entire page's content with an error message. On Safari, the…

### CASE-7429 · --https mode causes issues in dev by trying to connect to wss://localhost:24678
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, vite, svelte
- **Signals**: 👍12 💬24 · closed
- **Excerpt**: **Describe the bug** In `--https` mode, the site is served at `[link] and so the Vite websocket connection that is attempted fails, because it tries to make it at `wss://localhost:24678` when it exists at `ws://localhost:24678`. This results in the page being periodically reloaded. **Logs** ``` Firefox can’t establish a connection to the server at wss://localhost:24678/. [vite] server connection lost. polling for restart... client:340:13 [vite] connecting... ``` **To Reproduce** `npx svelte-kit dev --https` Open console and/or network logs and wait. Turn on timestamps on the console to help…

### CASE-7432 · SvelteKit 2: Importing `$env/dynamic/public` in safari causes a `Cannot access uninitialized variable` on hydration
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-F4 · **Env**: safari, svelte
- **Signals**: 👍18 💬23 · closed
- **Excerpt**: ### Describe the bug My company tried upgrading our app to SvelteKit 2, except that using it on Safari would always cause a panic both in dev mode and a production build. SvelteKit 1 still works fine. I was trying to investigate the bug, and was able to reproduce it in dev mode by just importing `$env/dynamic/public` from a layout file more than once. I assume that a production build does some tree shaking or something that prevents it from being reproduced in such a contrived way. ### Reproduction This link should fail on dev mode in Safari with `Cannot access uninitialized variable`. All of…

### CASE-7445 · Some CSS styles not applied with non-zero inlineStyleThreshold since v2.21.3
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, svelte, vite
- **Signals**: 👍3 💬19 · closed
- **Excerpt**: ### Describe the bug Since SvelteKit v2.21.3, when inlineStyleThreshold is set to a non-zero value, some CSS styles are not being applied correctly. ### Reproduction ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.5 CPU: (12) arm64 Apple M3 Pro Memory: 708.78 MB / 36.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.16.0 - ~/.volta/tools/image/node/22.16.0/bin/node npm: 10.9.2 - ~/.volta/tools/image/node/22.16.0/bin/npm Browsers: Chrome: 137.0.7151.69 Safari: 18.5 npmPackages: @user/adapter-node: 5.2.12 => 5.2.12 @[meta framework]: 2.21.4 => 2.21.4 @user/vite-plugin-svelte:…

### CASE-7448 · ssr: false - Breaks all styling
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, safari, macos, svelte, vite
- **Signals**: 👍7 💬19 · closed
- **Excerpt**: **Describe the bug** Styling seems to break when `npm run build && npm start` with `ssr: false`. `npm start dev` appears to be fine. **To Reproduce** `npm init svelte@user` `ssr: false` in svelte.config.cjs `npm run build && npm start` - The output of `npx envinfo --system --npmPackages svelte,@[meta framework],vite --binaries --browsers` ``` System: OS: macOS 11.2.2 CPU: (8) arm64 Apple M1 Memory: 373.28 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 15.12.0 - /opt/homebrew/bin/node npm: 7.6.3 - /opt/homebrew/bin/npm Browsers: Firefox: 87.0 Safari: 14.0.3 Safari Technology Preview: 14.2…

### CASE-7462 · Edge adapter-netlify not providing platform or context object
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬16 · closed · labels: pkg:adapter-netlify
- **Excerpt**: ### Describe the bug Digging into the code for [`adapter-netlify`]([link] framework]/blob/master/packages/adapter-netlify/src/edge.js#L17-L31), it looks like platform and context should be provided on the event from the load function. There is no such object on the event in my [edge functions log]([link]) and the [client]([link]) console. <img width="211" alt="image" src="[link]> Originally I had `adapter-auto` installed and that was causing functions to run in regular the serverless setting and not on the edge network also. I explicitly installed `adapter-netlify` and was able to get it at…

### CASE-7471 · Using fetch to proxy resources fails with net::ERR_CONTENT_DECODING_FAILED error
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome
- **Signals**: 👍5 💬15 · closed · labels: breaking change/fetch-headers/needs-decision
- **Excerpt**: ### Describe the bug With 3rd party cookies soon to be blocked for authentication with Firebase, I was trying to create a hook to proxy the requests to Firebase as described [here]([link]). It's simple to implement, but it leads to errors on the client side (Chrome in my case). Looking at the Network tab in Chrome Dev Tools shows an error in the "Status" column: `(failed)net::ERR_CONTENT_DECODING_FAILED`. I added some debugging info to understand the problem and found a mismatch between the size of the request as reported by Chrome Dev Tools vs the `Content-Length` header in the response to…

### CASE-7473 · I cannot CRUD cookies in sveltekit from another port
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬15 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I cannot CRUD cookies in sveltekit from another port ### Reproduction 1. Clone my repo: `git clone [link] 2. Run: `docker compose up` 3. Go to [link] 4. Fill in the form and click on the Sign up button 5. Open the inspect menu, Go to Application > Cookies > [link] 6. And you won't see the auth cookie their ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (4) x64 Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz Memory: 1.39 GB / 7.91 GB Binaries: Node: 21.6.2 - C:\Program Files\nodejs\node.EXE npm: 10.2.4 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Chromium…

### CASE-7475 · Enable package-provided routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍37 💬15 · open · labels: router
- **Excerpt**: ### Describe the problem Please bear with me for a minute, explaining the rationale requires a bit of context. I'm working on a (FOSS) SvelteKit-based ebook library app. It is built to run on all platforms SvelteKit supports, with platform-specific integrations being used where possible. If you'd be running it on Cloudflare, for example, the Cloudflare R2 bucket integration will be used for storage; if running on Node, it will use the local filesystem. On a platform like Netlify, which has support for edge functions, book metadata parsing will run on the edge; whereas on other platforms,…

### CASE-7487 · SvelteKitError: Not found: /.well-known/appspecific/com.chrome.devtools.json
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍25 💬14 · closed
- **Excerpt**: ### Describe the bug I'm suddently getting this in my terminal during dev mode. No idea what's caused it or whether it's actually impacting anything. I am reading a value from localStorage in my root +layout.json file, but that's the only interaction with localstorage in the app, other than setting that value on user sign in. Best of luck... SvelteKitError: Not found: /.well-known/appspecific/com.chrome.devtools.json at resolve (C:\devprojects\learning\pwa-ktt\node_modules\@user\kit\src\runtime\server\respond.js:582:13) at…

### CASE-7489 · Streaming promises broken on Safari (due to Safari not rendering incomplete response)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, svelte
- **Signals**: 👍3 💬14 · open · labels: blocked by upstream/load / layout
- **Excerpt**: ### Describe the bug [Streaming promises]([link]), i.e., returning a nested promise in a server-side data loader, doesn't work properly in Safari. I believe the way SvelteKit attempts to accomplish this is by first sending the initial HTML document, keeping the connection alive, and then finally ending the response with another script tag that patches the previously sent HTML. However, this would rely on the browser starting to render the document before the response is fully received, which is not something that should be taken for granted — Safari, for example, does not do this, and waits…

### CASE-7491 · Deploying to Azure App Service
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows
- **Signals**: 👍2 💬14 · open · labels: documentation
- **Excerpt**: ### Describe the bug I have deployed application using adapter-static. Faced the below error ![image]([link]) ### Reproduction adapter-static generated some build files and deploy to the Azure app service (enabled fallback to generate html file) ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz Memory: 553.89 MB / 7.75 GB Binaries: Node: 18.15.0 - C:\Program Files\nodejs\node.EXE npm: 9.5.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1023.0), Chromium (112.0.1722.39) Internet…

### CASE-7499 · `ReferenceError: Cannot access uninitialized variable` on Safari
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: safari, chrome, macos, svelte
- **Signals**: 👍9 💬14 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Running Svelte Kit app using `> svelte-kit dev --port 3001` works in Chrome but throws the following error only in Safari: ``` ReferenceError: Cannot access uninitialized variable. ``` Issue is in `async _load_node({ status, error, module, page, stuff }) {}` in _.svelte-kit/dev/runtime/internal/start.js_ ![image]([link]) For some reason, Safari doesn't like the fact that the variable is named `module` and further thinks it's undefined? ### Reproduction Any svelte-kit boilerplate. ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0.1 CPU: (10) arm64…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7404 · Not found /_app/immutable/assets/xxx
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍24 💬82 · open
- **Excerpt**: ### Describe the bug We're hosting sveltekit with SSR in a Docker container that's hosted in azure. We have datadog to track errors and we tend to see about 3 to 30 of these 404's a day on our small-medium site. We played around with azure cdn cache, but when we enabled this, the errors really came to show, so we disabled the azure cache. When doing so, it went back to it's normal occurance. This issue is the same as this question posted a while ago; [link] framework]/discussions/7057 Example error for a 404 asset: ``` Error: Not found: /_app/immutable/assets/_layout-c5c8ebf1.css at resolve…

### CASE-7407 · Redirects in `load` functions break when running client-side
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍22 💬41 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug There appears to be no way to use the new redirect method and disable SSR globally. ### Reproduction 1. Create a new skeleton project 2. Create `src/routes/page.ts` with the contents: ```ts import { redirect } from "@[meta framework]"; export function load() { throw redirect(307, "/about") } ``` 3. Create `src/hooks.ts` with the contents: ```ts import type { Handle } from '@[meta framework]' export const handle: Handle = async ({ event, resolve }) => { return resolve(event, { ssr: false }) } ``` 4. Navigating to root now results in an error page, with the redirect class…

### CASE-7415 · Hydration failing with DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method.
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍16 💬29 · closed · labels: svelte 5
- **Excerpt**: ### Describe the bug When using a sveltekit project with the new svelte 5 preview, I'm getting a hydration error when trying to pass child elements. This error occurs both when using `<slot/>` and `{@user children()}`. This only seems to occur if a few conditions hold: - The child elements contain one of `td`, `tr`, `th`, `tbody`, `tr`, `thead` and you render the child elements in a `#each` block - You nest a svelte component within itself (e.g. `<Div><Div>hi</Div></Div>`) ### Reproduction Here's a stackblitz reproduction of the problem: [link] After opening the stackblitz link, open devtools…

### CASE-7427 · SSR rendered page retains old store value in dev mode
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬24 · closed · labels: documentation/ready to implement
- **Excerpt**: ### Describe the bug Steps: 1. Start dev server 2. Initialize and export a store with value 0 3. Import the store in a page 4. Set store value in the page to 1 5. Open the page for the **first time** 6. As expected the page renders store value 1, not 0 7. Deactivate/remove code from step 4 8. Refresh the page 9. Page now renders store value 1 (shortly, SSR cached?) which is then hydrated/updated client side to value 0 Workaround: Restart the dev server, the SSR rendered page no longer has value 1 but value 0 Question: Is this intended/expected behavior, is it configurable or a bug in vite or…

### CASE-7431 · Avoid loading `+page.js`/`+layout.js` files on server in SPA mode
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍1 💬23 · closed
- **Excerpt**: ### Describe the bug Even though I did everything the docs provide in order to disable any form of server side rendering or static site generation, the dev server tries to execute my code on the server. ### Reproduction ```bash npm create svelte@user my-app cd my-app npm install ``` Edit `src/routes/+layout.ts` according to [link] ```ts export const ssr = false; export const prerender = false; ``` Edit `svelte.config.js` according to [link] ```js import adapter from '@user/adapter-static'; import { vitePreprocess } from '@user/vite-plugin-svelte'; /** @user {import('@[meta…

### CASE-7442 · CORS errors during server rendering
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍9 💬20 · open · labels: documentation
- **Excerpt**: ### Describe the bug When fetching an endpoint using CORS from a `+page.js` file, SvelteKit throws a CORS error when trying to render the page on the server, such as during development mode or prerendering for production. CORS doesn't seem to make sense in this context, since the fetch request is being performed on the server, which has no origin. This seems related to [link] framework][ref], but that issue involved `+page.server.js` files. In this issue, we want to perform the fetch on the client AND the server (during SSR/prerendering). ### Reproduction [link] Using the client-side…

### CASE-7447 · unexpected behavior when run `npm run dev` after set config.paths.base in svelte.config.js
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬19 · closed
- **Excerpt**: ### Describe the bug After set config as following in svelte.config.js: ``` /** @user {import('@[meta framework]').Config} */ import node from '@user/adapter-node'; const config = { kit: { // hydrate the <div id="svelte"> element in src/app.html target: '#svelte', adapter: node({ // default options are shown out: 'build', precompress: false, env: { host: 'HOST', port: 'PORT' } }), paths: { assets: '', base: '/testdir' } } }; export default config; ``` 1. Run `npm run dev`: In `[link] I got the following: ``` Error: Not found: at resolve…

### CASE-7453 · bug(netlify): Package subpath './hooks' is not defined by "exports"
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬18 · closed · labels: pkg:adapter-netlify/p1-important
- **Excerpt**: ### Describe the bug Sveltekit app having version "svelte": "^3.44.0" works perfectly locally but showing "errorMessage":"Package subpath './ssr' is not defined by \"exports\" in /var/task/node_modules/@[meta framework]/package.json" when deployed to production on netlify. I have tried both auto-adapter and explicit netlify adapter but the error persists. ### Reproduction Repo link: [link] ### Logs ```shell {"errorType":"Error","errorMessage":"Package subpath './ssr' is not defined by \"exports\" in /var/task/node_modules/@[meta framework]/package.json","trace":["Error…

### CASE-7456 · Type reflection issues
- **Principles**: P-F4 · **Env**: typescript, svelte
- **Signals**: 👍0 💬18 · closed · labels: types / typescript/vite
- **Excerpt**: **Describe the bug** Typescript metadata reflection does not seem to work at all. At first I thought it was related to the graphql adder, but it turns out that type-graphql works perfectly fine outside of sveltekit in an api folder served by `vercel dev`. This is not a permanent solution though considering there are existing issues pertaining to MIME types: [ref]. **Logs** This is produced in both the response and the dev console (not browser). ```bug Error when evaluating SSR module /src/resolvers/user.ts: Error: Unable to infer GraphQL type from TypeScript reflection system. You need to…

### CASE-7458 · Load's fetch re-requests data on every route change with prerendered pages
- **Principles**: P-F4, P-H2, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: documentation
- **Excerpt**: ### Describe the bug If I understand correctly, using the `fetch` implementation provided by `load` on a prerendered route should effectively just hydrate the page with JSON fetched during build, unless the request is different than it was on the server. Initial page loads suggest this is happening, but on every route change `fetch` is called again, and it's not consistently cached, resulting in laggy navigation on a fully prerendered site. ### Reproduction - Branch of website this is occurring on: [link] - Data fetching function: [link] - Example simple route: [link] - Repro in staging:…

### CASE-7459 · `getSession()` does not get called on page load. should warn user
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍5 💬17 · closed · labels: help wanted/p2-nice-to-have
- **Excerpt**: ### Describe the bug Unfortunately, I haven't been able to get our sveltekit app to work in production past [email] and [email] Since the ssr was always somewhat flunky with our - aside from the login page- completely private app we previously disabled it via the config and on all update attempts in the handle hook. Now, the issue is always the same, everything runs fine locally, until it gets deployed, where you can't get past the login screen anymore, since the session never gets populated. I recently found out that the issue seems to lie somewhere within adapter-node, since running `dev`…

### CASE-7464 · Missing "." export in "@[meta framework]" package
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍5 💬16 · closed
- **Excerpt**: ### Describe the bug When issue `npm run build` get this error ### Reproduction `npm run build` My svelte.config.js ```javascript import preprocess from 'svelte-preprocess'; const config = { kit: { amp: false, appDir: '_app', files: { assets: 'static', //hooks: 'src/hooks', lib: 'src/lib', routes: 'src/routes', serviceWorker: 'src/service-worker.ts', template: 'src/app.html' }, floc: false, hydrate: true, package: { files: { exclude: ['**/*.test.ts'] } }, prerender: { crawl: true, enabled: true, onError: 'continue', pages: ['*'] }, router: true, ssr: true, target: '#svelte', trailingSlash:…

### CASE-7465 · Firebase v9 is not working with Svelte Kit since 1.0.0-next.116
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬16 · closed · labels: vite
- **Excerpt**: **Describe the bug** Since Svelte Kit 1.0.0-next.116, Firebase v9.0.0-beta.6 is not working. **Logs** With Svelte Kit 1.0.0-next.115 19:18:36 [vite] new dependencies found: firebase/app, updating... [Function: initializeApp] 19:18:37 [vite] ✨ dependencies updated, reloading page... With Svelte Kit 1.0.0-next.116 and last version 19:32:27 [vite] Error when evaluating SSR module /node_modules/firebase/app/dist/index.cjs.js: ReferenceError: exports is not defined at eval (/node_modules/firebase/app/dist/index.cjs.js:5:23) at instantiateModule…

### CASE-7466 · Repeated errors from [vite] after `pnpm init svelte@user my-app` (2.0.0-next.55): Error when evaluating SSR module `cookie`: ReferenceError: exports is not defined
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍1 💬16 · closed
- **Excerpt**: **Describe the bug** Repeated errors from [vite] after fresh install `pnpm init svelte@user my-app` `create-svelte` package version: `2.0.0-next.55` ``` Error when evaluating SSR module /node_modules/.pnpm/[email]/node_modules/cookie/index.js: ReferenceError: exports is not defined ``` **Logs** ``` 11:41:24 PM [vite] Error when evaluating SSR module /node_modules/.pnpm/[email]/node_modules/cookie/index.js: ReferenceError: exports is not defined at /node_modules/.pnpm/[email]/node_modules/cookie/index.js:15:1 at instantiateModule…

### CASE-7469 · SSR Error: "Cannot read properties of undefined (reading 'wrapDynamicImport')" with Vite 7
- **Principles**: P-F4 · **Env**: vite, svelte, tailwind
- **Signals**: 👍10 💬15 · closed
- **Excerpt**: ### Describe the bug When running `svelte-check` or `vitest` in a SvelteKit project using Vite 7, a persistent SSR error occurs deep inside the SvelteKit runtime. This appears to happen during SSR module evaluation. Simultaneously, a Tailwind CSS error `Cannot apply unknown utility class` is thrown, likely as a symptom of the unstable build state caused by the SSR error. The issue persists despite ensuring compatible dependencies, performing a full clean reinstall (`rm -rf node_modules`, `rm package-lock.json`, `npm cache clean`), and correcting the Vite plugin order. ### Reproduction…

### CASE-7488 · Server asset path mismatch when running `vite preview`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬14 · closed · labels: vite/pkg:adapter-node/breaking change/needs-decision
- **Excerpt**: ### Describe the bug Typically, we're suppose to access a server asset by joining `process.cwd()` and the path of the asset imported and handled by Vite. ```js // +page.server.js import path from 'node:path'; import fs from 'node:fs'; import text_file from './file.txt'; export async function load() { // we can get the absolute path with `process.cwd()` const filepath = path.join(process.cwd(), text_file); const text = fs.readFileSync(filepath, { encoding: 'utf-8' }); return { text }; } ``` However, this doesn't work when running `vite preview` or `node build` with the Node adapter. ```js //…

### CASE-7490 · Wrong line numbers in stacktraces in dev mode on console, in IntelliJ/WebStorm and VSCode
- **Principles**: P-F4 · **Env**: svelte, vite, typescript
- **Signals**: 👍7 💬14 · closed · labels: error handling
- **Excerpt**: ### Describe the bug In Dev mode, SvelteKit modifies the line numbers of server stacktraces by calling `fix_stack_trace()`, which in turn calls `vite.ssrRewriteStacktrace(stack)`. This is done by wrapping the Error object in a Proxy (method `handle_error_and_jsonify()` in `kit/src/runtime/server/utils.js`). This works in _some_ environments, e.g. StackBlitz, but not on the console or IntelliJ/WebStore or VSCode. ### Reproduction 1. Create a new SvelteKit demo app with Typescript: ``` npm create svelte@user my-app cd my-app npm install ``` 2. Add one file `src/routes/+page.server.ts` with the…

### CASE-7496 · In adapter-netlify split:true config is breaking SSR and other things.
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬14 · closed · labels: pkg:adapter-netlify/breaking change
- **Excerpt**: ### Describe the bug When `split: true` is enabled in the `svelte.config.js` for `adapter-netlify`, SSR routes when navigated to with client side navigation gets a 404. The endpoint route will work on refresh, but the todo page goes to a Netlify 404 page does not exist skipping the `__error.svelte` route. ### Reproduction Repo of demo app with `adapter-netlify`: [link] Preview deploy of site with `split: false` and `__error.svelte` working: [link] Preview deploy of site with `split: true` and `__error.svelte` not catching on /todos refresh: [link] ### Logs ```shell `GET /endpoint/__data.json…

### CASE-7500 · use `document.currentScript` instead of `target` option
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the problem This is a super niche problem to have, but it's one I've faced on two recent projects. Currently, SvelteKit knows which bit of markup to hydrate because of tight coupling between the config... [link] framework]/blob/446c3469276d37190f6d783fddf12575372cae8e/packages/create-svelte/templates/skeleton/svelte.config.js#L12... and the app template: [link] framework]/blob/446c3469276d37190f6d783fddf12575372cae8e/packages/create-svelte/templates/skeleton/src/app.html#L10 The tight coupling is unfortunate in any case, but where this gets really tricky is if you're using…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7406 · `<Form>`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍110 💬52 · closed · labels: breaking change/size:large
- **Excerpt**: ### Describe the problem Best practices around form data are slightly annoying — we want to encourage the use of native `<form>` behaviour as far as possible (accessible, works without JS, etc) but the best UX involves optimistic updates, pending states, and client-controlled navigation. So far our best attempt at squaring this circle is the `enhance` action [found in the project template]([link] framework]/blob/f2d64256aecc7419ed6a8d424ef00686dbf8b33a/packages/create-svelte/templates/default/src/lib/form.ts). It's a decent start, but aside from being tucked away in an example rather than…

### CASE-7440 · Environment variables in Svelte templates don't work with `npm run build`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍9 💬21 · closed · labels: vite
- **Excerpt**: First of all, thank you for the great work on SvelteKit. I migrated my blog today without too many problems, the docs, the migration guide and examples were a great help. I just stumbled upon this problem. **Describe the bug** It seems like we can't use environment variables (e.g. `import.meta.env.MODE`) in a (production) build while there are also styles defined in the same route/component. It does however work when I start the server and open the app with `npm run dev` I also tried to follow the [vite docs]([link]), but sadly with the same outcome. **Logs** ``` $ svelte-kit build vite…

### CASE-7444 · Add a more straightforward method of opting dynamic explicit environment variables out of build-time validation
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed
- **Excerpt**: ### Describe the problem With the current method of defining environment variables, dynamic variables are not validated at build time. This is common and expected behavior across a wide variety of frameworks going back decades. The new "explicit environment variables" has gone a different route, stating that variables *must* have a value at build time. The logic here seems to be that if a dynamic variable is used in a static capacity, it will need a value. This is not unintuitive -- what is the point of differentiating static and dynamic variables if dynamic variables will be treated just…

### CASE-7454 · Env variables are not accessed by vite in PROD
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍8 💬18 · closed
- **Excerpt**: ### Describe the bug I am using the docker image for the production build. I have set my environment variables in docker and they are accessible by using `env`. But when I build the app these are not accessed by Vite. Please help me here! ### Reproduction Create Svelte kit app by started. - create the docker image - Create the env variables in the docker system. - use the VITE_ as a prefix. ### Logs _No response_ ### System Info ```shell Undefined ``` ### Severity blocking all usage of SvelteKit ### Additional Information _No response_

### CASE-7457 · RollupError: "AUTH_SECRET" is not exported by "virtual:$env/static/private", imported by "src/hooks.server.ts"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: ### Describe the bug 9: import { 10: AUTH_SECRET, ^ 11: KEYCLOAK_ID, 12: KEYCLOAK_SECRET, error during build: RollupError: "AUTH_SECRET" is not exported by "virtual:$env/static/private", imported by "src/hooks.server.ts". at error (file:///drone/src/node_modules/vite/node_modules/rollup/dist/es/shared/parseAst.js:337:30) at Module.error (file:///drone/src/node_modules/vite/node_modules/rollup/dist/es/shared/node-entry.js:12738:16) at Module.traceVariable (file:///drone/src/node_modules/vite/node_modules/rollup/dist/es/shared/node-entry.js:13175:29) at ModuleScope.findVariable…

### CASE-7463 · Unable to use undeclared static environment variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Describe the bug I try to import an environment variable from `$env/static/public` not present in any `.env` file or environment and get an error. I do not know how the internals work, but the exported variables seems to be collected only from the environment and not from usages. I filed this issue because Svelte Kits behaviour differs from Vite's `loadEnv` function, which allows me to use unknown variable names. ### Reproduction [link] Stackblitz does not load the `.env` file (but I include it here anyways): [link] ### Logs ```shell The error message differs between my local machine: 500…

### CASE-7474 · $env/dynamic/public becomes $env/static/public for pre-rendered pages, breaking app and exposing information
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬15 · closed · labels: $app/env
- **Excerpt**: ### Describe the bug The docs for `$env/dynamic/public` state: > This module provides access to **runtime environment variables**, as **defined by the platform you're running on**. For pre-rendered pages though, this is incorrect and misleading. They actually behave more like `$env/static/public` with values coming from build-time `.env` files used. Not only does this risk exposing information that wasn't _intended_ to be exposed but the behavior of the app becomes indeterminate because the values used in the app depend on the order of page navigation. As an example, I'm using…

### CASE-7476 · Unable to perform Vitest integrations tests using $env/dynamic/private
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍2 💬15 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug I finally got around to migrating away from `import.meta.env.*` for all of my environment variables and onto the SvelteKit-recommended `$end/dynamic|static/public|private`. I had a number of integration tests I had written in `vitest` that are now breaking with the following error: ``` FAIL tests/integration/hooks.test.ts [ tests/integration/hooks.test.ts ] Error: Cannot import $env/dynamic/private into client-side code ❯ Context.load node_modules/@[meta framework]/src/exports/vite/index.js:304:12 ❯ Object.load node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:40201:46 ❯…

### CASE-7478 · `$app/environment.browser` isn't reliable for libraries (packaging)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍3 💬15 · closed · labels: pkg:svelte-package
- **Excerpt**: ### Describe the bug Every Svelte UI library that want to check if the current environment is the server or the client, uses often the variable [`$app/environment.browser`]([link]). While it's the recommended way for SvelteKit normal application, this is problematic when the library do `svelte-kit package`, to get the library compiled output. Any project using a UI library that written in SvelteKit, exported via `svelte-kit package`, and use the `browser` variable, will fail to be used in Svelte projects that are outside the SvelteKit environment (e.g. in REPL), since the output still use the…

### CASE-7481 · Use `.ts` extension when creating Playwright config for TypeScript projects
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍3 💬15 · closed · labels: help wanted
- **Excerpt**: ### Describe the bug I've seen a few reports of this. It appears to have been a known issue when the feature was added: [link] framework][ref][ref] I saw that someone fixed it by prefixing with some environment variable. Unforunately, I can't find what that was at the moment ### Reproduction Create TypeScript + Playwright project from wizard ### Logs _No response_ ### System Info ```shell latest ``` ### Severity serious, but I can work around it ### Additional Information _No response_

### CASE-7482 · [security] files outside of ./static are served publicly in dev mode
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍0 💬15 · closed · labels: vite/security/blocked by upstream
- **Excerpt**: ### Describe the bug Unexpected behaviour / Security vunerabilty. Files inside the root directory (outside of the static directory) are exposed to anyone via URLs. Users may have secrets, & keys in their root directory, which should NOT be visible to anyone viewing from the web ### Reproduction 1. Create a fresh sveltekit install 2. run `npm run dev` 3. goto `localhost:3000/svelte.config.js` -> This file should not be accessible. ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.5.2 CPU: (8) arm64 Apple M1 Memory: 169.05 MB / 8.00 GB Shell: 5.8 - /bin/zsh Binaries: Node:…

### CASE-7498 · Hash links to new pages don't focus the correct element
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍0 💬14 · closed · labels: help wanted/p2-nice-to-have
- **Excerpt**: ### Describe the bug If you click a link like `<a href="#foo">`, the browser will focus an element like `<h2 id="foo">`, which in effect (since `<h2>` elements aren't typically focusable) actually means that pressing `Tab` will focus the next focusable element _after_ the `<h2>`. But if you click a link like `<a href="/other#foo">`, SvelteKit will navigate to `/other` and scroll to `#foo`, but it won't focus the element. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0.1 CPU: (10) arm64 Apple M1 Max Memory: 79.22 MB / 32.00 GB Shell: 5.8 -…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7408 · Cross-site POST form submissions are forbidden
- **Principles**: P-G4, P-E3 · **Env**: linux
- **Signals**: 👍14 💬38 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I'm getting an error message about a cross-site request when submitting a form to a relative URL that's handled by an endpoint on the same server. The error only occurs when running the production build with the node-adapter, not with the dev server. ### Reproduction [link] ### Logs ```shell Cross-site POST form submissions are forbidden ``` ### System Info ```shell System: OS: Linux 5.19 Pop!_OS 22.04 LTS CPU: (12) x64 Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz Memory: 4.55 GB / 15.35 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 18.7.0 -…

### CASE-7416 · `use:enhance` resets form even if `form.x` values used for populating it
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬28 · closed · labels: forms/ready to implement
- **Excerpt**: My understanding is the form will take any values that are set by the server; if I remove `use:enhance` from [the form in this repo]([link]), I get the same values after POST that I do before. But adding `use:enhance` changes this behaviour. What am I missing here? _Originally posted by @user in [link] framework][ref][ref]_ Not sure what's the best way to respond here. One way would be to check the `form` value that is returned, and if it contains any keys, assume it may be used for form data, and don't reset in that case. It's an imperfect solution but probably the best we can do. (It's also…

### CASE-7417 · Provide access to history state
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍21 💬28 · closed · labels: p1-important
- **Excerpt**: ### Describe the problem There are a number of cases where it's valuable to be able to read and write state associated with a particular history entry. For example, since there's no concept of bfcache when doing client-side navigation, things like scroll position (for elements other than the body) and form element values are discarded. Associating user-controlled state with history entries would also make it possible to do things like history-controlled modals, as described in [link] framework][ref][ref]. ### Describe the proposed solution When creating a new history entry with…

### CASE-7428 · Rename `invalid` to... something else?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬24 · closed · labels: breaking change/low hanging fruit
- **Excerpt**: ### Describe the problem One side-note from [ref]: `invalid(422, {...})` is natural, but `invalid(500, {...})` — which you need to do in order to show inline error UI along with repopulated form values — feels a bit weird. The error isn't that the data was invalid, it's that something went wrong on the back end. ### Describe the proposed solution Rename it to something that covers both 4xx and 5xx errors: * `fail(status, data)` * `failed(status, data)` * `nope(status, data)` Suggestions welcome. (Note that we can't `return error(status, data)` because `data` must conform to `App.Error` in…

### CASE-7436 · Weird issue(s) with fetch from endpoint and multipart file content
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: ### Describe the bug After NPM update have some issues with uploading multipart form content including a file. This used to work fine. Now get MultipartParser.end(): stream ended unexpectedly when trying the same code in a js endpoint. Also after this error repeated actions seem not to forward the multipart form data ### Reproduction Just do form submit with multipart content to a js endpoint. Try to forward that to another server like [[link]]([link]) mentioned here. ` export async function post({ url,request, event,locals}) { const data= await request.formData(); const nftsReq = await…

### CASE-7437 · Remote Forms not handling null values
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍5 💬21 · closed · labels: types / typescript/forms
- **Excerpt**: ### Describe the bug If a schema that allows for null values is being used to validate a remote form input, the function type overloads cannot match the type properly. ### Reproduction [link] Run the `svelte-kit sync && svelte-check --tsconfig ./tsconfig.json` command on the terminal to view the type error. ### Logs ```Shell Error: No overload matches this call. Overload 1 of 3, '(validate: "unchecked", fn: (data: RemoteFormInput, issue: Record<string | number, any>) => unknown): RemoteForm<RemoteFormInput, unknown>', gave the following error. Argument of type 'ZodObject<{ nullable:…

### CASE-7439 · return fail() fails with Error: Data returned from action inside / is not serializable: Cannot stringify arbitrary non-POJOs
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: ### Describe the bug As of sveltekit 1.0.13, returning a fail() object from an Action fails with the following error when using `npm run dev` ``` Error: Data returned from action inside / is not serializable: Cannot stringify arbitrary non-POJOs ``` Everything worked fine in 1.0.12. Also works as expected using `npm run build` / `npm run preview` ### Reproduction `+page.server.js` ```javascript import { fail } from '@[meta framework]'; /** @user {import('./$types').Actions} */ export const actions = { test: async () => { return fail(500); }, }; ``` `+page.svelte` ```html <form method="POST"…

### CASE-7449 · Preloading query with page param on hover breaks the app
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍18 💬18 · closed
- **Excerpt**: ### Describe the bug I display a simple list of products ``` //+page.svelte {#each await getProducts() as product (product.id)} <a href="/{product.id}"> ... </a> {/each} //data.remote.ts export const getProducts = query(async () => { const products = db.select().from(product); return products; }); ``` that links to /[id] route, +page.svelte has top level await with remote query that gets product by id ``` //+page.svelte <script lang="ts"> import { page } from '$app/state'; import { getProduct } from './data.remote'; </script> <pre>{JSON.stringify(await getProduct(page.params.id!), null,…

### CASE-7451 · `applyAction` should navigate to action if action is different from current route
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: documentation/forms
- **Excerpt**: ### Describe the bug If a form has an action to another route and you use enhance as per doc it doesn't automatically navigate to the new route. But from the doc it seems like using `applyAction` should apply the default browser behavior. This doesn't seem to be the case: the action gets called but the routing doesn't happen. ### Reproduction 1. Go to [link] 1. Try to submit the form 1. Observe that the navigation doesn't happen 1. Try to remove the use:enhance 1. Submit the form 1. Observe that the browser correctly redirect there ### Logs _No response_ ### System Info ```Shell System: OS:…

### CASE-7452 · Module '"@[meta framework]"' declares 'RequestEvent' locally, but it is not exported
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍4 💬18 · closed · labels: types / typescript/help wanted
- **Excerpt**: ### Describe the bug Getting a TypeScript warning `Module '"@[meta framework]"' declares 'RequestEvent' locally, but it is not exported` for this line of code... ```typescript import type { RequestEvent } from '@[meta framework]' ``` Why do I need it? I have two functions in my hooks.ts called from handle() that pass the event as a parameter... ```typescript // Attach authorization to each server request (role may have changed) async function attachUserToRequest(sessionId: string, event: RequestEvent) { const sql = `SELECT * FROM get_session($1);` const { rows } = await query(sql,…

### CASE-7455 · Netlify Adapter: Netlify Forms don't work
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬18 · closed · labels: pkg:adapter-netlify
- **Excerpt**: **Describe the bug** [Netlify Forms]([link]) don't work in a Svelte component if setup with [this approach]([link]) and using the [Netlify adapter]([link] framework]/tree/master/packages/adapter-netlify). _Edit: For a workaround/fix see the comment below [link] framework][ref][ref]_ **To Reproduce** 1. Setup a Netlify Form as described [here]([link]) and more specifically [here]([link]): * Create a Netlify "form detection helper". Something like: ```html <!-- "/static/netlify-form-helper.html" --> <form name="test" netlify netlify-honeypot="bot-field" hidden> <input type="text" name="name" />…

### CASE-7460 · HTML rendered from the server is cut off
- **Principles**: P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍13 💬16 · closed
- **Excerpt**: ### Describe the bug Suddenly today I started having an issue with some pages on my site where the HTML delivered from the server is cut off at some random place. This causes the footer of my site to not render and some scripts not to load, so javascript powered features like my search form are not working. When I do "View Page Source" it shows that the HTML delivered isn't complete. It's missing a big part of the footer and all the code that shows below it. The site is hosted on Vercel. I already tried updating to the latest SvelteKit and latest Vite. The site is part of a Turborepo monorepo…

### CASE-7461 · redirect to form action pathname
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Describe the bug ```html <form action="/signin" use:enhance>...</form> ``` Lets assume this form lives inside `src/routes/+layout.svelte` and mirrors the form inside `src/routes/signin/+page.svelte`. With js disabled, we get redirected to `/signin` and the formdata is correctly populated. If js is enabled, we stay at the route we are currently at. This is inconsistent, the browser should go to `/signin`. ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.15 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish) CPU: (12) x64 AMD Ryzen 5 5600X 6-Core…

### CASE-7468 · Select Elements Don't Update When Value Changes
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬15 · closed · labels: forms
- **Excerpt**: ### Describe the bug I have a query which loads some data that is then used as defaults for a form. ```typescript import { form, query } from '$app/server'; import { type } from 'arktype'; export const getFormDefaults = query(() => ({ colour: 'green', opacity: 0.5 })); const TestFormSchema = type({ colour: '"red" | "green" | "blue"', opacity: 'number' }); export const testForm = form(TestFormSchema, async (data) => { console.log('Your favourite colour is:', data.colour); console.log('Your chosen opacity is:', data.opacity); }); ``` When I have a `select` element, whenever I attempt to change…

### CASE-7472 · `$page.state` is lost after page refresh
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍20 💬15 · closed · labels: router
- **Excerpt**: ### Describe the bug When refreshing a page (or submitting a form) with a `PageState`, the `PageState` is lost. However, when checking the `history.state['sveltekit:states']`, we see that the expected state is still attached to the current history entry. ### Reproduction The following +page.svelte demonstrates the issue: ``` <script lang="ts"> import { browser } from '$app/environment' import { replaceState } from '$app/navigation' import { page } from '$app/stores' let historyState = browser && history.state['sveltekit:states'] </script> <div>App PageState: {$page.state.filter}</div>…

### CASE-7477 · `cookies.delete` not working when using form `enhance`
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍1 💬15 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Using `enhance` on a `<form>` and throwing `redirect` in the form action causes `cookies.delete` to not work in the page server load function. ### Reproduction [link] Reproduction: 1. Click the enhanced form button. 2. User is redirected. 3. Cookie is not deleted. Expected: 1. Click the enhanced form button. 2. User is redirected. 3. Cookie is deleted in `+page.server` ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.5.1 CPU: (8) arm64 Apple M1 Pro Memory: 1.56 GB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.17.0 -…

### CASE-7483 · Rethink or clarify when `load` runs
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍27 💬15 · closed · labels: p1-important/breaking change/load / layout
- **Excerpt**: ### Describe the bug The docs say: >A component that defines a page or a layout can export a load function that runs before the component is created. But I don't think that is when `load` runs? I think `load` is reactive to its input parameters and runs everytime they change This is confusing to people. E.g. they don't expect it to run when `$session` changes [link] framework][ref]. Also, sometimes `load` in your layout will run whenever the path changes and sometimes it will load only when the page first loads, which is super hard to discover. This also leads to weird workarounds like…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7410 · Memory leak?
- **Principles**: P-F5, P-H3 · **Env**: svelte, typescript
- **Signals**: 👍8 💬34 · closed
- **Excerpt**: ### Describe the bug I am seeing the memory usage of my SvelteKit app, running with the Node adapter, going up and up. I'm not sure how the server's memory usage can keep increasing, all the svelte stores for example are only used in the browser, and other than that the server requests should be stateless, right? ![Screenshot_2023-03-05_at_11 47 49]([link]) ![Screenshot 2023-03-16 at 09 12 14]([link]) See [link] for a discussion about this. ### Reproduction As far as I know, any project will show this problem. Create a new skeleton project. No need to add TypeScript, Prettier, ESLint or…

### CASE-7419 · Blocked migration to SvelteKit 2 - Out of memory & explosion in compilation time
- **Principles**: P-F5, P-H3 · **Env**: svelte, vite
- **Signals**: 👍0 💬27 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug We have decided to try migrating our relatively large app to SvelteKit 2 (dashboard with tons of components and [internal] dependencies). Unfortunately, we have to give up upgrading. The amount of memory required for the build process has doubled. We now need a server with 12GB of RAM at least to compile. Worse, the compilation time has exploded now (about 30x longer on Apple M1 Pro). This is extremely expensive. The reasons are not SvelteKit per se, we think. But rather Vite: vitejs/vite[ref] It might be that Vite 5 has more memory leaks. For now, we are continuing with…

### CASE-7479 · After upgrading to Vite 3 and with latest SvelteKit `process.env.NODE_ENV` is not replaced anymore
- **Principles**: P-F5, P-H3 · **Env**: vite, svelte
- **Signals**: 👍3 💬15 · closed · labels: awaiting submitter/service worker
- **Excerpt**: ### Describe the bug I was using `"@[meta framework]": "1.0.0-next.370"` and `"vite": "2.9.14"`. After the upgrade to `"@[meta framework]": "1.0.0-next.391"` and `"vite": "3.0.2"` I'm having issue with `service-worker.ts` which has this code in it: ```ts /// <reference lib="webworker" /> import { precacheAndRoute, createHandlerBoundToURL, cleanupOutdatedCaches, } from "workbox-precaching"; import { NavigationRoute, registerRoute } from "workbox-routing"; import { build, files, version } from "$service-worker"; const worker = self as unknown as ServiceWorkerGlobalScope;…

### CASE-7480 · Build Fails During (Due To?) Log Cleanup Added in @user/[email]-next.63
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: pkg:adapter-vercel
- **Excerpt**: ### Describe the bug Using @user/[email]-next.63, I can build a pnpm monorepo (using turborepo) locally, but deployment to Vercel fails with a cryptic error: ``` [23:17:49.972] @user/web:build: Run npm run preview to preview your production build locally. [23:17:49.979] @user/web:build: [23:17:49.979] @user/web:build: > Using @user/adapter-vercel [23:17:52.958] @user/web:build: [31merror during build: [23:17:52.958] @user/web:build: Error: Failed to parse /usr/bin/ldd as script: [23:17:52.959] @user/web:build: Unexpected character ' ' (1:1) [23:17:52.959] @user/web:build: at Object.analyze…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7411 · Flash of unstyled content in dev mode
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍43 💬34 · closed · labels: vite
- **Excerpt**: **Describe the bug** Css feels wierd while reload in dev environment. Works fine with build output **To Reproduce** Using below dependencies: "@user/adapter-node": "next", "@[meta framework]": "next", "svelte": "^3.29.0", "vite": "^2.1.0" **Video** [link]

### CASE-7413 · [Issue] Cannot redefine property: crypto
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍15 💬32 · closed
- **Excerpt**: ### possible solution [link] framework][ref][ref] ### Describe the bug When I create a new project in svelte using these commands: ``` npm create svelte@user my-app cd my-app npm install npm run dev -- --open ``` I get this issue | ![image]([link] framework]/assets/29038590/e2bf17fa-ba8c-441d-aac1-ad5267d3ff8e) ### Reproduction When I create a new project in svelte using these commands: ``` npm create svelte@user my-app cd my-app npm install npm run dev -- --open ``` ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.22621 CPU: (12) x64 AMD Ryzen 5 4600H with Radeon…

### CASE-7418 · [2.61.0] Stale/cached version of remote function data on page change
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: macos
- **Signals**: 👍0 💬27 · open
- **Excerpt**: ### Describe the bug Starting from 2.61.0 remote functions don't always re-run on page change which results in stale/cached data. In [reproduction repo]([link]) there is [cars page]([link]) with a single remote function. When page is changed, sometimes this remote function re-runs, sometimes it doesn't. Quick video: [link] This behavior is inconsistent, sometimes it doesn't re-fetch data, sometimes it does (at 29s of video) ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.7.5 Binaries: Node: 26.1.0 -…

### CASE-7425 · Getting 404 error during "npm run build", but not "npm run dev" (simple static adapter website)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍4 💬25 · closed · labels: help wanted/pkg:adapter-static/p3-edge-case
- **Excerpt**: ### Describe the bug After a recent npm update (which I'm assuming updated Svelte, but correct me if I'm wrong), I've started getting a 404 error when attempting to do a release build. It doesn't happen when I do a preview build (see attached image). My site is a very simple static webpage (using adapter-static). No stub routing, no spaces in image filenames, etc. <img width="810" alt="Screenshot 2021-12-01 154845" src="[link]> ### Reproduction See files I've attached here. Since this error occurs at build time (and not during website usage), I'm not sure how to respond to this. My website is…

### CASE-7426 · Cannot pass "src" as prop while using @user/enhanced-img
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍17 💬24 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug I wanted to created a simple hero component where I would pass the hero image dynamically, but I got error if **enhanced:img** used instead of **img**: `TypeError: Cannot read properties of undefined (reading 'src')` Code provided at "Reproduction" working correctly if I use simple img tag. ### Reproduction **You need a JPG image named innerhero.jpg at /src/img/ folder** **+page.svelte** ``` <script> import Hero from '$lib/template/Hero.svelte'; </script> <Hero backgroundImage="$lib/img/innerhero.jpg" /> ``` **Hero.svelte** ``` <script> export let backgroundImage;…

### CASE-7430 · Upgrade from 2.22.5 to 2.23.0 breaks with "Cannot read properties of undefined (reading 'data')"
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍6 💬23 · closed
- **Excerpt**: ### Describe the bug I after noticing some javascript features where breaking in the production deployment. I rolled back everthing and started upgrading packages one by one until I saw that 2.22.5 -> 2.23.0 introduced this change. I get: `TypeError: Cannot read properties of undefined (reading 'data')` <img width="637" height="608" alt="Image" src="[link] /> Other deps include: ``` "@user/vite-plugin-svelte": "^6.1.1", "svelte": "^5.38.0", "vite": "^7.1.1", ``` I would really appreciate a tip about what changed as I have not been able to track down the issue. It is a private repo but I can…

### CASE-7435 · Cannot read properties of undefined (reading 'universal')
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: ### Describe the bug We got the following alert in Sentry: <img width="1324" alt="image" src="[link] framework]/assets/48158184/9305fcdd-6198-4608-b51f-cd5c34934092"> ### Reproduction Not sure what is triggering this, if you give me a direction i can try to create a repro. ### Logs _No response_ ### System Info ```Shell System: OS: macOS 14.5 CPU: (8) arm64 Apple M1 Pro Memory: 121.86 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.0 - ~/.nvm/versions/node/v20.11.0/bin/node npm: 10.2.4 - ~/.nvm/versions/node/v20.11.0/bin/npm pnpm: 9.1.1 - /opt/homebrew/bin/pnpm bun: 1.0.0 -…

### CASE-7438 · Bad publish in @user/[email] breaking all builds (Netlify Vercel etc)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬21 · closed · labels: p0-urgent
- **Excerpt**: ### Describe the bug fyi @user - [link] framework][ref] broke adapter-netlify because the index.js stopped being published. see below --- noticed my builds started failing 1hr after adapter-netlify 1.0.2 was published adapter-auto gave this error: ![image]([link]) then installing adapter-netlify gave this: ![image]([link]) ### Reproduction [link] ### Logs ```Shell first 6:34:11 PM: found 0 vulnerabilities 6:34:11 PM: error during build: 6:34:11 PM: Error: Could not install @user/adapter-netlify. Please install it yourself by adding it to your package.json's devDependencies and try building…

### CASE-7441 · Building with Vite 8 Hangs Completely on Linux
- **Principles**: P-A3, P-H1 · **Env**: linux, vite, svelte
- **Signals**: 👍1 💬20 · closed · labels: vite/awaiting submitter
- **Excerpt**: ### Describe the bug As title describes, buidling with Vite 8 hands completely on Linux. Previously this worked on Mac and Linux with Vite 7 fine. Locally on Mac it correctly builds in 30 seconds (amazing, down from 5-10 minutes). But, it hangs in CI on Linux and a local docker image on Linux. There is no failure message, even with debugging enabled, it truly just hangs halfway through logging about SvelteKit warnings. ### Reproduction Difficult to reproduce from our complex private repo. ### Logs ```Shell n/a ``` ### System Info ```Shell node:22 docker image ``` ### Severity blocking an…

### CASE-7467 · `@user/enhanced-img` causes extremely slow new/first time build for projects w/ large number of images
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬15 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug See [ref] last comment. I can unfortunately not give solid information on reproducing this and reluctantly submit this issue as a result. My initial reason is to warn anyone off of upgrading to `vite@user` and `@user/enhanced-img` if you have a working build now as somewhere there is a blockage that will cause your build to grind for 5+ minutes. What is worse for me rolling back whatever I previously updated does not fix the issue. I am sure I am overlooking something obvious but the only way to get back a working build is to manually copy back `node_modules` from a…

### CASE-7470 · Remote Functions don't work in node_modules
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍2 💬15 · closed · labels: needs-decision
- **Excerpt**: ### Describe the bug I want to define shared remote functions in a package of my monorepo. However, they can only live in `src/lib` and `src/routes` [here]([link] framework][ref]/files#diff-653370423b9a0841282afcdad180799d38d4ca992953eb8947610a64b11f6911R478). ### Reproduction N/A ### Logs ```Shell ``` ### System Info ```Shell System: OS: Linux 6.13 Fedora Linux 41 (Forty One) CPU: (24) x64 AMD Ryzen 9 7900 12-Core Processor Memory: 16.46 GB / 30.48 GB Container: Yes Shell: 3.7.1 - /bin/fish Binaries: Node: 22.15.1 - ~/.volta/tools/image/node/22.15.1/bin/node Yarn: 4.1.1 -…

### CASE-7485 · Unable to navigate to non-root routes by links
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: **Describe the bug** When navigating to a page that isn't `/`(e.g `/blog` and `/works`) using links, the page being rendered is the `$error` one. But you can navigate to `/` perfectly well. Also, if this error shows up and you reload the page, the page renders fine, but then if you navigate to any non-`/` page and come back, its again `$error` **Logs** Screenshot ![image]([link]) Text: ```txt <$error> received an unexpected slot "default". $error.svelte? [sm]:6 <$error> was created with unknown prop 'blogsList' ``` **To Reproduce** Repro: [link] Run `npm run dev` Then visit `/` on localhost…

### CASE-7486 · `@user/enhanced-img` 0.9.0 causes build to slow down 10x
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍6 💬14 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug Upgrading from `@user/[email]` to `@user/[email]` causes the build process to progress extremely slowly (literally from around 1 minute to 14 minutes) on a site that has hundreds of images all using `<enhanced:img>`. The build process especially hangs at `node_modules/svelte/src/internal/client/warnings.js` for several minutes. I have tried several times now with recent sveltekit updates and have to always roll back to `0.8.5` ### Reproduction Really wish I knew how to setup a repo for this, how do I install `enhanced-img` in sveltelab or other place with hundreds of…

### CASE-7492 · Svelte lib folder isn't output on build (with Vite)
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬14 · closed · labels: awaiting submitter/support
- **Excerpt**: ### Describe the bug The Svelte lib folder isn't outputed on build (with Vite). In fact, all my assets in that folder are output directly in the assets folder (output/client/_app/immutable/assets) So the images can't be get when I need them. ### Reproduction Get all my files in $lib folder with this function: ``` export const get = async () => { const allimgsf = import.meta.glob('$lib/*.png'); const iterableImages = Object.entries(allimgsf); const allimgs = await Promise.all( iterableImages.map(async ([path, resolver]) => { // @user const imgPath = path.slice(1, -3); return { path: imgPath,…

### CASE-7493 · adapter-node: file uploads > 512KB are broken
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug It is not possible to upload images of 2MB or larger (probably even larger than 512KB) even when setting `BODY_SIZE_LIMIT=10000000`. ### Reproduction [link] To reproduce 1. `pnpm install` 2. `pnpm build` 3. `pnpm serve` 4. open the browser at [link] 5. upload an image between 3 and 9 MB, e.g. [link] (large resolution) ### Expected you should see log output in the console of the server stating that the file is being saved to `/tmp/upload.jpg`. ### Actual console shows nothing and server just sits there hanging. The POST in the browser never completes. ### Logs ```Shell N/A…

### CASE-7495 · `import.meta.env` undefined after upgrade from 405 to 432
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬14 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug `import.meta.env` is undefined after upgrading to v432, causing vitest to fail. <img width="695" alt="image" src="[link]> ### Reproduction PR of the upgrade branch. Only contains changes for the upgrade. - [link] (Closed with @user's fix) - [link] ### Logs ```shell ❯ node_modules/@[meta framework]/src/runtime/app/env.js:4:41 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ FAIL src/lib/util/serde.test.ts [ src/lib/util/serde.test.ts ] 2| * @user {import('$app/env').browser} 3| */ 4| export const browser =…

### CASE-7497 · Cannot run `npm ci --prod` with adapter-node
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬14 · closed · labels: pkg:create-svelte/p1-important
- **Excerpt**: ### Describe the bug adapter-node says that `npm ci --prod` should be used to run the build. However, this command fails ### Reproduction `npm ci --prod` ### Logs ```shell > [email] prepare > svelte-kit sync sh: svelte-kit: not found npm ERR! code 127 npm ERR! path /app npm ERR! command failed npm ERR! command sh -c svelte-kit sync npm ERR! A complete log of this run can be found in: npm ERR! /root/.npm/_logs/2022-04-10T11_03_37_215Z-debug.log The command '/bin/sh -c npm ci --prod' returned a non-zero code: 127 ``` ### System Info ``` Docker image node:16-alpine ``` ### Severity serious, but…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7412 · Server assets cannot be read on the server after build
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬32 · closed · labels: pkg:adapter-vercel
- **Excerpt**: ### Describe the bug Sveletekit PdfMake font import works fine locally but crushes when deployed to vercel ### Reproduction this is the code: ``` const fonts: TFontDictionary = { Futura: { // FuturaPTBook.otf // FuturaPTCondBold.otf normal: `./static/fonts/FuturaPTBook.otf`, bold: `./static/fonts/FuturaPTBold.otf` } }; const printer = new PdfPrinter(fonts); ``` i also created a fonts folder a the same place where the file exists and i imported the fonts using `import normal from "./fonts/FuturaPTBook.otf";` and i did this: ![Screenshot from 2023-08-21 18-09-25]([link]…

### CASE-7446 · [hooks] `sequence` helper function doesn't account for `preload`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed
- **Excerpt**: ### Describe the bug The [`sequence`]([link]) helper funciton doesn't seem to call the `preload` function specified in [`handle`]([link]) hooks. ### Reproduction [Reproduction on StackBlitz]([link]) Please find the `hooks.server.js` file as such: ```js import { sequence } from '@[meta framework]/hooks'; const preloadFonts = async ({ event, resolve }) => await resolve(event, { preload: ({ type, path }) => { if (type === 'font') { console.log(type, path); return true; } return false; } }); export const handle = sequence(preloadFonts); // export const handle = preloadFonts; ``` Run `npm run…

