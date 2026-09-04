# Case Chunk 069 — Round 69

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7801 · Error [ERR_MODULE_NOT_FOUND]: Cannot find package '<npm package>' imported from...
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug In my "Minimum reproducible example", I use a bare minimum fresh install of SvelteKit based on the current docs and then add my single server-side page called src/routes/+server.ts. This file uses the "canvas" library to let me draw an image and place some text on it, then render that image out to the client. This must be done server side and it works perfectly fine in development. I've experience on numerous occasions trying to build with SvelteKit, modules not being found despite running the required commands to install them. Clearing NPM cache doesn't help. Dumping and…

### CASE-7802 · +error.svelte isn't utilized when in layout group
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug ![image]([link]) In a formation like that, the root directory of the webpage will follow +page.svelte that exists in the (design) directory, but an error will fail to detect +error.svelte in that same directory and will display the generic one. Curiously so, even if the error is happening in a subdirectory of (design) like posts, it will still fail to detect (design)/+error.svelte and display that. ### Reproduction [Stackblitz test]([link])/+error.svelte) ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.10 Ubuntu 20.04.5 LTS (Focal Fossa) CPU: (16) x64…

### CASE-7806 · Bug: img element not dispatching error events when trying to get a non-existent resource from the same origin
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: support
- **Excerpt**: ### Describe the bug I have the following code in SvelteKit: ```svelte <img src={''} on:error={(e) => console.log('Error', e)} /> ``` The `on:error` event callback is never called. However, if I change the source to `hello-there`, and I refresh the page, I get the following error in the console: `GET [link] 404 (Not Found)`, but the callback is not called. However, if I make a change and let the HMR reload the contents, the error callback is called!! Additionally, if I change the src to another domain, for example, `[link] the error callback is always called, no matter if it's a new page load…

### CASE-7808 · Cannot read properties of undefined (reading 'disable_scroll_handling')
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: vite
- **Excerpt**: ### Describe the bug When I use `afterNavigate`, `beforeNavigate` or `goto` in a `+page` while using the adapter static and the [chunking strategy]([link]) of vite (`splitVendorChunkPlugin`) I get an error `Uncaught TypeError: Cannot read properties of undefined (reading 'disable_scroll_handling')` at runtime. Note: Possible related issue [ref] and [ref] <img width="1536" alt="Capture d’écran 2022-10-28 à 07 23 32" src="[link]> ### Reproduction git clone [link] cd my-app-yolo npm ci npm run build npx serve build ### Logs ```Shell vendor-67141009.js:1 Uncaught TypeError: Cannot read…

### CASE-7825 · Package now compiles Typescript files to CJS instead of ESM
- **Principles**: P-A3, P-H1 · **Env**: typescript, svelte
- **Signals**: 👍0 💬6 · closed · labels: pkg:svelte-package
- **Excerpt**: ### Describe the bug Upgrading from @[meta framework]@user.0.0-next.314 to @[meta framework]@user.0.0-next.315 will change the output of svelte-kit package as follows: ![image]([link]) ![image]([link]) My package is now broken when trying to install in another app (`ReferenceError: exports is not defined` in reference to an action defined in a .js file) if I upgrade SvelteKit and I'm forced to stay .314. ### Reproduction - Clone [link] - `pnpm i` - `pnpm package` - look at any compiled .js filed inside /package - update to @[meta framework]@user.0.0-next.315 or higher - `pnpm i` - `pnpm…

### CASE-7835 · adapter-static: Placing media before srcset in a <source> tag will prevent srcset from being crawled
- **Principles**: P-A3, P-H1 · **Env**: linux, svelte
- **Signals**: 👍0 💬6 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug If the attributes in a `<source>` tag appear like so `<source media="(max-width: 400px)" srcset="/myimage.jpg">` the srcset won't be crawled and the image won't be downloaded. When arranged like this `<source srcset="/myimage.jpg" media="(max-width: 400px)">` it works as expected. ### Reproduction Add a `<source>` tag as mentioned above and run a SvelteKit build with adapter-static configured. Images will not be downloaded as expected. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.10 Alpine Linux CPU: (6) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz…

### CASE-7849 · Vercel deploy error
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: pkg:adapter-vercel
- **Excerpt**: **Describe the bug** I tried to deploy on vercel and get the errors bellow, i tried with project output settings ".svelte", ".svelte-kit", ".vercel_build_output", all same error **Logs** ![image]([link]) `Error: Could not load /vercel/path0/src/lib/Components/Inputs/BaseInput.svelte (imported by src/routes/login/index.svelte): ENOENT: no such file or directory, open '/vercel/path0/src/lib/Components/Inputs/BaseInput.svelte'` **To Reproduce** Deploy project to vercel **Information about your SvelteKit Installation:** "@[meta framework]": "^1.0.0-next.105", "@user/adapter-vercel": "next",

### CASE-7852 · Name Change - app.html to index.html
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### This issue isn't about a bug So the language of the web is HTML right? [A video from Rich Harris]([link]). Then why use `app.html` instead of `index.html`? The first file that beginner developer creates is `index.html` so because of those two reasons I think it's best to change `app.html` to `index.html`. I know that SvelteKit isn't even the beta or alpha (or whatever) release but, in Sapper, the name of the main HTML file is `index.html` so I thought maybe in SvelteKit it's going to be `app.html`. I hope I'm not being ridden by creating such a request.

### CASE-7853 · adapters now require node-fetch to be a dependency of the app
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: **Describe the bug** Unanticipated side-effect of [link] framework][ref] — `node-fetch` isn't available when the app is built on e.g. Netlify: ![image]([link]) We could make it a peer dependency of the adapters, but that would suck. I think it might be better if adapters took responsibility for bundling the output of `svelte-kit build` (with eg. `esbuild` — this functionality could also be exposed via the adapter utils). Then, if we exposed something like `@[meta framework]/install-fetch` for the relevant adapters to use (rather than expecting them to use the correct version of `node-fetch`…

### CASE-7864 · Cannot initialize Sentry in Cloudflare Workers build
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · open · labels: documentation/pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug Added Sentry initialization following the [docs]([link]). ```ts // hooks.server.ts import * as Sentry from '@user/sveltekit'; Sentry.init({}); ``` ``` ▲ [WARNING] Import "init" will always be undefined because there is no matching export in "../node_modules/.pnpm/@[email]@user/node_modules/@user/sveltekit/build/esm/index.worker.js" [import-is-undefined] .svelte-kit/output/server/entries/hooks.server.js:2:7: 2 │ Sentry.init(); ╵ ~~~~ ``` <img width="2470" height="1316" alt="Image" src="[link] /> ### Reproduction - [link] - [link] ### Logs ```Shell ``` ### System Info…

### CASE-7876 · [WARNING] The package "node:async_hooks" wasn't found on the file system but is built into node.
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍3 💬5 · closed · labels: p2-nice-to-have/pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug After upgrading: - sveltekit: 2.19.1 to 2.20.3 - svelte: 5.23.0 to 5.25.6 Cloudflare now complains that "node:async_hooks" is being imported by _worker.js. This notice wasn't there on previous builds/previous versions. ![Image]([link]) ### Reproduction You can create by creating a new Sveltekit project (using npx sv create) and deploying as Cloudflare pages. ### Logs ```Shell ``` ### System Info ```Shell N/A ``` ### Severity annoyance ### Additional Information _No response_

### CASE-7882 · <enhanced:img retina> support
- **Principles**: P-A3, P-H1 · **Env**: retina
- **Signals**: 👍0 💬5 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the problem @user/enhanced-img renders the `img` tag using intrinsic dimensions, which causes incorrect rendering if the image is a 2x retina image. ### Describe the proposed solution I propose a boolean prop, `<enhanced:img retina>` that will set the `img` width/height to the correct logical dimensions: 1/2 the intrinsic dimensions. ### Alternatives considered * CSS styling is not helpful because it puts the burden back on the developer to specify sizes explicitly ### Importance nice to have ### Additional Information Here is a crude patch just to show the essence: ```diff diff…

### CASE-7883 · Improve `adapter-cloudflare`'s exclusion logic for prerendered paths
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug ### Problem My app exceeds the 100 combined include & exclude routes allowed by Cloudflare. <img width="999" src="[link]> This is because I prerender various blog routes, such as `/blog/tag/orange`, etc. Theoretically I can adjust the default routes rules: ```js routes: { include: ['/*'], exclude: ['<all>'] }, ``` The approach would be to remove `<all>` and use the individual allowed values but omit `<prerendered>`: ```js routes: { include: ['/*'], exclude: ['<build>', '<files>', '/blog/tag/*'] }, ``` The problem is, _now I'll need to manually update the include array for…

### CASE-7887 · Hidden directories are ignored in `static/`
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug The build process does not copy over hidden directories from `static/`. This prevents adding a `.well-known/` directory in a simple way. ### Reproduction Add a `static/.well-known/` directory with some files in it. ### Logs _No response_ ### System Info ```Shell System: OS: Linux 6.1 Debian GNU/Linux 11 (bullseye) 11 (bullseye) CPU: (4) x64 Intel(R) Core(TM) i5 Memory: 1.25 GB / 7.46 GB Container: Yes Shell: 5.1.4 - /bin/bash Binaries: bun: 1.0.36 - /usr/local/bin/bun npmPackages: @user/adapter-static: ^3.0.1 => 3.0.1 @user/enhanced-img: ^0.2.0 => 0.2.0 @[meta framework]:…

### CASE-7890 · "Unused CSS selector" for selectors prefixed with `img` while using @user/enhanced-img
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug There is a linting warning when adding a CSS selector that includes the `img.foo { ... }` prefix, but it doesn't have such warning when adding a selector that only has the class `.foo { ... }. Here's a visual example: ![image]([link] framework]/assets/1434675/d53760ab-0c40-404a-b98b-2fcd634a2367) ### Reproduction Here's a repro: [link] ### Logs _No response_ ### System Info ```Shell "devDependencies": { "@user/adapter-auto": "^3.0.0", "@user/enhanced-img": "^0.1.8", "@[meta framework]": "^2.0.0", "@user/vite-plugin-svelte": "^3.0.0", "svelte": "^4.2.7", "vite": "^5.0.3" }…

### CASE-7891 · Google Analytics (GA4) not working in SvelteKit 2
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: router
- **Excerpt**: ### Describe the bug Google Analytics (GA4) should automatically collect pageviews based on browser history events. Pre 2.0 SvelteKit projects do this without a problem. Pageviews are triggered automatically by `history.pushState()` on route navigation. In SvelteKit 2 pageviews are no longer triggered on route change, only on a full page refresh. None of the solutions in "SvelteKit & Google Analytics" tutorials, blogs, videos are working at the moment. ### Reproduction Minimal project with a Google Analytics tracking code in `+layout.svelte` and 2 routes to navigate between: [link] ### Logs…

### CASE-7892 · TypeError: Failed to fetch dynamically imported module
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hi, I'm a korean developer. my english is very poor. Please understand. We use sveltekit 2.0 to our admin web page. and deploying by docker, adapter-node. when deploying finished, the user is still using the old version facing that error. we use 'pollInterval' like below. ![image]([link] framework]/assets/65886694/6fb3fa69-1b19-4756-bab5-d5ddec3b50bc) and in our +layout.svelte ![image]([link] framework]/assets/65886694/0074acb0-6974-4d3f-a341-598aacd361a7) but error has orruring. when debugging, updated store not change. We temporarily applied this in hooks.client.js :…

### CASE-7893 · with Vite 5 prerendered pages are missing CSS
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍6 💬5 · closed
- **Excerpt**: ### Describe the bug I am using Kit 2 and Vite 5, when I `build` then `preview` `prerendered` pages are missing CSS lines in HTML when I switch back, to Vite 4.5.0 (still keeping kit 2 changes) there are getting generated. e.g., <img width="1804" alt="image" src="[link] framework]/assets/627951/f2bbc45b-7e14-4d82-96f2-890b8de435f3"> ### Reproduction Repo: [link] to reproduce: 1. upgrade Vite from `4.5.1` to `5.0.10` in `apps/console-fb/package.json` 2. `pnpm i` 3. `turbo build --filter=console-fb` 4. `turbo preview --filter=console-fb` You will get distorted page due to missing CSS ### Logs…

### CASE-7894 · Dynamically import assets in Sveltekit/Vite
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem I'm asking for alternative ways you may know, in SvelteKit/Vite, to get a list of asset files (in this case images) preferably by hitting an API endpoint like `/api/assets/[param]` By using vite's import.meta.glob works only by hard-coding the directory of interest: ``` const my_path = "$lib/assets/*.jpg" const imageModules = import.meta.glob(my_path); // <- This doesn't work ``` `Invalid glob import syntax: Could only use literals` I know this [has been asked before][1] and supposedly [a fix was merged][2] but without using switch statement, this still doesn't work!…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7803 · Accessing the search object in the load function prevent goto navigation
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I'm in a bit of a problem which is super niche but it might be useful for someone else too. Basically in sveltekit-search-params ([link]) i create a store to access the query parameters and you can read and write to them seamlessly. Before 1.0 every time you changed a query parameter it would've pushed a new history entry in the state so i've added the ability to debounce the history entry. However it's very important that the state of the url always match the state of the store. So basically the URL it's always immediately updated with replaceState set to true (so that…

### CASE-7859 · Preloaded redirect results are cached and replayed, causing stale redirects and redirect loops
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: router
- **Excerpt**: ### Describe the bug When a link is data-preloaded (`data-sveltekit-preload-data`, on hover **or** tap) and the target route's `load` returns a `redirect(...)`, the client stores that **redirect result** in its preload cache (`load_cache`). On the subsequent client-side navigation the cached redirect is **replayed without re-running the load**, so the redirect decision is never re-evaluated against current server state. If the redirect target itself redirects back — two routes gating on opposite conditions — the client's redirect-follow recursion never *commits* a page, and `load_cache` is…

### CASE-7874 · Redirect from +layout.server.ts not running redirected pages onMount
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Short; When redirecting from a page to another page and then back quickly it seems onMount does not run again. If i have page1 and in does a `goto("/page2")`, and page2 has does a redirect back to page1 like this `redirect(302, "/page1")` then the onMount of page1 does not run again. Im guessing the redirect is so quick that the unmount probably does not fully happen and so a mount does not happen. Im not sure. But it is causing issues for me as explained below and shown in the stackblitz reproduction. ----- ### Instructions Login page does "goto("/dashboard")" ```ts…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7804 · Headers are not set when ssr = false
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: ready to implement
- **Excerpt**: ### Describe the bug In production build, the headers are not set if `ssr = false` in `+layout.server.ts` ### Reproduction 1. Create SvelteKit skeleton project 2. Set headers in `hooks.server.ts` ```ts export const handle: Handle = async ({ event, resolve }) => { event.setHeaders({ 'x-foo': 'bar', 'cache-control': 'no-store', }) return resolve(event) } ``` 3. Disable SSR in `+layout.server.ts`: ```ts export const ssr = false ``` 4. `pnpm build` 5. `pnpm preview` 6. Get headers (`https -h [link]) 7. Note the missing headers --- See reproduction repo: [link] ### Logs ```Shell ❯ http -h [link]…

### CASE-7807 · svelte-adapter-static: "404 Internal Error" with trailing index.html in URL
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug My app is using `svelte-adapter-static` with the `trailingSlash` option set to `'always'`, so each route is a folder containing its own index.html. I use a static server so no SSR, but `prerender` is set to `true` in `+layout.js`. It works fine when I navigate to `/my-route` or `/my-route/`, however when I explicitly navigate to `/my-route/index.html`, I get a 404 error (from the `start-xxxxxxxx.js` hydration script). Why is that? Because of the way my static server is configured, I usually need to explicitly set the URL with a trailing `index.html`, but it seems to break…

### CASE-7819 · import jquery in layout file, get error
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: ### Describe the bug When import jquery in `__layout.svelte` via `import * as j$ from 'jquery'`, get error: ``` TypeError: __vite_ssr_import_3__ is not a function at eval (/src/routes/__layout.svelte:31:18) at Object.$$render (/mnt/star/workplace/jetbrains/webstorm_workplace/go-fit-web/node_modules/.pnpm/[email]/node_modules/svelte/internal/index.js:1758:22) at eval (/.svelte-kit/generated/root.svelte:50:126) at $$render (/mnt/star/workplace/jetbrains/webstorm_workplace/go-fit-web/node_modules/.pnpm/[email]/node_modules/svelte/internal/index.js:1758:22) at Object.render…

### CASE-7821 · FOUC during SSR in production builds
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I am running into an issue where during SSR in production builds some css doesn't get applied on the server. Any styles that are not inline or defined with <style> tags in the svelte components are affected. i.e. the following pattern: ``` src/app.css .some-class { background-color: red; } ``` And then imported like: ``` src/__layout.svelte <script> import "../app.css"; <--- Doesn't work </script> <p class="some-class">Some text</p> <--- Will be unstyled on SSR, but look correct during CSR (and when running the dev server) <slot /> <style global> @user '../app.css'; <---…

### CASE-7826 · URI Encoding inconsistent between SSR and Browser routers
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug A reasonable user would expect the SvelteKit router to behave the same way in the ssr and browser contexts, regarding uri encoding in route params. This currently isn't the case. Sample below demonstrates main issue, but also note this inconsistency appears in load functions too, depending if they are run in ssr or browser side ### Reproduction ``` git clone [link] cd sveltekit-url-params-encoding-issue npm i npm run dev ``` Open browser to `[link] and click the demo links in the list on the bottom of the page to see some examples of how decoding is inconsistent. ### Logs…

### CASE-7827 · `browser.hydrate: false` breaks client-side router
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍6 💬6 · closed
- **Excerpt**: ### Describe the bug Setting `browser.hydrate` to `false` renders the client-side router unusable whilst not disabling it. This results in the following behaviour: 1. Link gets clicked 2. URL in address bar changes 3. Content of page stays unchanged Setting `export const hydrate = false` on a page does interestingly not break the router. ### Reproduction [🚩 Link to a demo]([link]) 1. Start the dev server and click on the links to observe the broken router 2. Comment the `browser: { hydrate: false },` line in `svelte.config.js` and restart the dev server to see the router working again. ###…

### CASE-7830 · Make it clearer when client-side load is re-fetching data because the server-side load didn't use its wrapped fetch function
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the problem When using an external SDK in a `load` function without telling it what `fetch` to use (or if it doesn't have the ability to be told what `fetch` to use), the network response is not serialized into the server-rendered DOM, and on the client-side, the browser's native `fetch` doesn't know to first look for these serialized responses before making a network call. This results in degraded performance, because the same request is then performed again in the browser. The solution here is for people to call the SDK on the server in an endpoint (preferably a shadow endpoint…

### CASE-7837 · bug: Invalid Url on fetch in a store when first loading the page
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Svelte store fails to fetch from /api/test.json when accessing a page. When prefixing url endpoint with [link] i can get it to work on npm run dev but this does not work when building and previewing We're trying to build a setup with SSR I've found another example of a user with similar problem here [link] ### Reproduction Create endpoint that returns json ///api/test.json.js export async function get({ params }) { return { body: { message: 'Looks good from up here' } }; } Create store that fetches data from endpoint. Ive tried many things here // stores/testStore.js…

### CASE-7839 · Infinite recursion when fetch with relative path in load function
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug This happens when the `paths.base` option is specified. And the load function in the `__layout.svelte` uses the `loadInput.fetch` to load external resources with a relative path (relative to root). But not when it's a full url with a hostname. Because the SSR server presumes the route is not external it started another response cycle. Then it would hit the `__layout.svelte` again. Although it also happens if the fetching target is not external. But that's expected. Maybe we can have a similar check like the redirect loop detection. But I think it's also ok without it. The…

### CASE-7841 · SSR error details are dropped when not of type `Error`
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed · labels: error handling
- **Excerpt**: ### Describe the bug SSR errors are being swallowed in next133 Maybe the upgrade of Vite or `vite-plugin-svelte` did it? [link] framework]/blob/master/packages/kit/CHANGELOG.md[ref]-next133 ### Reproduction Checkout repo in [link] framework][ref] ### Logs ```shell I get terribly unhelpful message "500" in browser and nothing in console ``` ### System Info ```shell next133 ``` ### Severity blocking an upgrade ### Additional Information _No response_

### CASE-7842 · Fetch crashes in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I have `/`, a page that automatically fetches the endpoint `/api/categories/2`. This completely breaks SSR fetch. Error included in logs ### Reproduction 1. Use @[meta framework]@user (1.0.0-next.131 and 1.0.0-next.133 tested) 2. Fetch an endpoint from a page from SSR 3. 'Enjoy'? ### Logs ```shell TypeError [ERR_INVALID_URL]: Invalid URL at new NodeError (node:internal/errors:363:5) at onParseError (node:internal/url:536:9) at new URL (node:internal/url:612:5) at new Request (file:///mnt/dev/hamza/node_modules/@[meta framework]/dist/install-fetch.js:1239:16) at…

### CASE-7843 · Firebase SDK 9 won't build with `adapter-static`
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When trying to use Firebase SDK 9, as per the recommendations on SvelteKit docs, the library initially will not work. One can make it work by adding `vite.ssr.external: ["firebase"]`. However, this only works for `dev`, and trying to run `npm run build` with `adapter` set to `adapter-static`, gives the error described in the `logs` section below. ### Reproduction To reproduce: 1. Initialize SvelteKit: ``` npm init svelte@user firebase-app ``` 2. Add firebase 9 SDK ``` npm i [email]-beta.6 ``` 3. In any page or component, try the following: ```javascript import {…

### CASE-7844 · Node adapter build works differently for node build vs npm run preview
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When building a project with `npm run build` using the `@user/adapter-node` adapter it predefines the routes according to its initial attempt at hitting them. When it hits private routes which return a 401, it throws an error. So I removed this auth checker function from the hooks.js file in order to have the build run successfully, but now whenever I'm fetching page on initial load (SSR) it comes back with /undefined and thus sveltekit throws a 404 for /undefined route. The web app works fine once hydrated, so going to links on browser works as expected but refreshing…

### CASE-7856 · Cannot find package '...' imported from on netlify deployment
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed · labels: pkg:adapter-netlify
- **Excerpt**: **Describe the bug** I am trying to write to faunaDB on a netlify hosted application. I added faunadb to my dependencies: ```json "dependencies": { "faunadb": "^4.1.3" } ``` I also tried different Settings within vite: ```js vite: { ssr: { noExternal: Object.keys(pkg.dependencies || {}), } } ``` But this leads me to the following error: ``` Cannot read property 'custom' of undefined TypeError: Cannot read property 'custom' of undefined at file:///home/alex/dev/testApp/.svelte/output/server/app.js:2825:50 ``` ```js var customInspect = nodeUtil && nodeUtil.inspect.custom; ``` So if I left the…

### CASE-7857 · SSR fetch without "res.json()" makes client call endpoint again
- **Principles**: P-F4 · **Env**: macos, svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: **Describe the bug** If not calling `res.json()` in the `load()` function, the `svelte-data`-script is not added during SSR, so the client will also do the same fetch. **Logs** -- **To Reproduce** ```html <script context="module"> export async function load({ fetch }) { const res = await fetch('/ping.json'); res.json(); // When commenting out this line, client will also fetch return {}; } </script> <h1>Ping</h1> ``` **Expected behavior** The client wouldn't do the fetch again **Information about your SvelteKit Installation:** <details> <summary>Diagnostics</summary> ``` System: OS: macOS…

### CASE-7858 · ssr : false - server still tries to render components
- **Principles**: P-F4 · **Env**: vite, svelte, webpack, desktop
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: **Describe the bug** I can't use libraries like Quill which manipulates the DOM outside of onMount function when ssr : false **Logs** 18:53:37 [vite] Error when evaluating SSR module C:\Users\Bastien\Desktop\svelte-spa\src\routes\index.svelte: ReferenceError: document is not defined at Object.<anonymous> (C:\Users\Bastien\Desktop\svelte-spa\node_modules\quill\dist\quill.js:7661:12) at __webpack_require__ (C:\Users\Bastien\Desktop\svelte-spa\node_modules\quill\dist\quill.js:36:30) at Object.<anonymous> (C:\Users\Bastien\Desktop\svelte-spa\node_modules\quill\dist\quill.js:1030:1) at…

### CASE-7860 · [Perf] Poor dev server SSR loading time when calling the same remote query in a big loop
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I have a page to view and edit accounting transactions for my company. A particular transaction has over 700 entries, displayed in an `#each` loop. Most of the entries are hidden with pagination and css, however I still keep them in the DOM because they contain remote form inputs. Each entry component calls the same remote query to retrieve its data. It takes about 20 sec for the dev server to SSR the page (observed in the devtool network tab) and another 4 sec for it to fully render. ```html <script lang="ts"> //+page.svelte import { getTransaction } from…

### CASE-7862 · Remote functions fire during hydration with placeholder `page.url`, causing wrong server-side route resolution
- **Principles**: P-F4 · **Env**: react, svelte
- **Signals**: 👍0 💬5 · open
- **Excerpt**: A remote query invoked from a `$derived` (or any synchronously-evaluated reactive scope) during the initial hydration of a page can fire **before** SvelteKit has assigned the real URL to `page.url`. At that moment `page.url` is still the placeholder `new URL('a:')`, whose `pathname` is the empty string `""`. The client helper `get_remote_request_headers` (in `runtime/client/remote-functions/shared.svelte.js`) sends `page.url.pathname` as the `x-sveltekit-pathname` header. The server's `respond.js` then does: ```js url.pathname = request.headers.get('x-sveltekit-pathname') ?? base; ``` …and…

### CASE-7870 · regression: `#await` block does not resolve `Promise` from `+page.server.ts` if loader contains another `await`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I have a page whose `+page.server.ts` contains two calls to my database; one to get SEO data to be used inside `<svelte:head>`, and another to be displayed on the page. The former is awaited inside the loader function, returning just a string, which is then passed along to the client/SSR. The latter, though, is not awaited inside the loader, and so its promise is passed along to the `+page.svelte` file to be awaited inside an `{#await}` block. Starting with SvelteKit version 2.37.1 (probably after this PR: [link] framework][ref]), there appears to be a regression where…

### CASE-7875 · The client-side bundles export CSR-disabled paths in the client nodes
- **Principles**: P-F4 · **Env**: typescript, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I've been trying really hard to eliminate certain route content from the client chunks completely when using @user/adapter-node via what I imagine, are traditional means of achieving this: ```typescript // +layout.server.ts export const prerender = false; export const csr = false; export const ssr = true; ``` My use-case is very basic: there's set of routes that should only be available from certain subnets, however because all the resources are bundled by Svelte-Kit during compilation, there's still chunks remaining in `client/_app/immutable/nodes/` giving away the…

### CASE-7878 · Hydration issue when loading HTML content from the server
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Following [this issue]([link]) and advice from @user, I'm posting the issue here. I want to load HTML content from the server (initially supabase but I framed the issue) and display it on the page. If I don't encapsulate the content in a `{@user ...}` it logically shows as plain text, but when I add it doesn't show and I get a `hydration_html_changed` issue. ### Reproduction I tried to set a REPL but `$app`does not compile ``` <!-- +page.server.js --> export async function load({ url }) { return { personalMessage: '<h1>personalMessage</h1>' }; } ``` ``` <!-- +page.svelte…

### CASE-7881 · bind:value on input type="color" causes hydration missmatch and other errors in Svelte 5
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: awaiting submitter/svelte 5
- **Excerpt**: ### Describe the bug Trying to bind:value of a color input in svelte 5 creates a hydration mismatch. In svelte 4, we can have a simple component that binds the value and uses it in the style attribute of an div: ``` <script lang="ts"> let color = '#ff3e00'; </script> <input type="color" bind:value={color} /> <div style="background-color: {color}">Hello world!</div> ``` Using this exact code in a fresh svelte5 project crashes the app with the error: `TypeError: element2.getAttribute is not a function` Removing the div brings the color picker back with a warning of a Hydration Missmatch ###…

### CASE-7896 · Unable to use WebAssembly.instantiateStreaming with event fetch inside load
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In SSR mode Svelte does not permit to use the global fetch, so I am trying to use the event fetch to fetch a WASM module and pass it into WebAssembly.instantiateStreaming. But it seems that a Response from the event fetch has some incompatibilities with the Node.js Response. Svelte/Vite/Node.js in dev mode logs the following: ``` TypeError [ERR_INVALID_ARG_TYPE]: The "source" argument must be an instance of Response or an Promise resolving to Response. Received an instance of Response at new NodeError (node:internal/errors:405:5) at node:internal/wasm_web_api:24:13 at…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7805 · SPA won't run when using guarded browser functions inside +layout.ts/+page.ts
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug The gist of the issue is that a properly configured SK SPA application that uses browser API code inside of a `+layout.ts/+page.ts` file breaks `npm run dev` and `npm run preview` even when the browser code is guarded by the `building` variable. I've been running into this issue since updating to v1.0 of SK and I belive it has to do with this change: [link] framework]/discussions/7716 I have a settings store that is backed by localStorage that I import pretty much everywhere. When trying to build I get the following error: ```…

### CASE-7811 · A way to validate things on server initialization
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the problem Related to [ref]. In other server solutions, a common pattern is check for the presence of necessary environment variables on startup, for the purposes of showing a friendly error message. For example: ```ts const { DATABASE_URI } = process.env; if (DATABASE_URI === undefined || DATABASE_URI === "") { console.error( 'The "DATABASE_URI" environment variable is not set. This is necessary in order for the server to function.', ); console.error( 'If you are deploying to Node, did you forget to copy the ".env.example" file to ".env" and fill in the values?', );…

### CASE-7812 · Error: url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Once I updated the latest svelte-kit version and above (x > `@[meta framework]@user.0.0-next.405`) I am getting the following error when I just try to use the `url` in the load function. As you can see from the repro I don't even try to access the `url.hash` but it still reports as it's illegal to do it. See the contents of `+layout.js`. ### Reproduction [link] ### Logs ```shell url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component. Error: url.hash is inaccessible from load. Consider accessing hash from the…

### CASE-7813 · git commit message with reserved word cannot build in GitLab CI
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed · labels: blocked by upstream/p3-edge-case/$app/env
- **Excerpt**: ### Describe the bug OK here's a weirdo one. I build my project using `yarn build` (`vite build`) in GitLab CI, then rsync the compiled bundle/code to my server that's running a simple node server (i.e. I'm using adapter-node), and then GitLab CI then restarts the service on the remote. I am actually writing this because I've updated Kit to the very latest today, and I had to re-work how I was using environment variables (I shifted from import.meta.env to $env/static/public and $env/static/private). My commit message was then something like "refactor to remove import.meta.env" -- but GitLab…

### CASE-7814 · Private `.env` variables are accessible in client-side code
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍3 💬6 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug Variables defined in a `.env` under a name that is not prefixed with `kit.env.publicPrefix` are still available in client-side code. ### Reproduction ```html <!-- Some page.svelte or layout.svelte file --> <script> import { A_PRIVATE_VAR } from '$env/static/private'; console.log(A_PRIVATE_VAR); </script> ... ``` ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.6.8 CPU: (8) x64 Intel(R) Core(TM) i7-4850HQ CPU @ 2.30GHz Memory: 227.32 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.8.0 - /usr/local/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm:…

### CASE-7828 · CI on Windows sometimes timeout
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows
- **Signals**: 👍0 💬6 · closed · labels: tests
- **Excerpt**: ### Describe the bug For example, below both CI failed these tests on windows, but it succeeded on one side but failed on the other. > 1) [dev+js] › test\test.js:242:2 › Scrolling › app-supplied scroll and focus work on direct page load > 2) [dev+js] › test\test.js:633:2 › Encoded paths › visits a route with non-ASCII character [Fake Success] [link] framework]/runs/5324276886?check_suite_focus=true [Failed] [link] framework]/runs/5325501189?check_suite_focus=true As well as fixing these tests, we need to fix it that CI should fail if CI fails in the middle of the process. ### Reproduction N/A…

### CASE-7840 · `query` accessible from page store during prerendering, but shouldn't be
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, svelte, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Building with `sveltejs/adapter-static` does not give me the correct query. `svelte-kit dev` and `svelte-kit preview` work fine. However, if I build with `@user/adapter-static`, I don't get the correct query parameters. Especially after a reload. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell ❯ npx envinfo --system --binaries --browsers --npmPackages "{svelte,@user/*,vite}" System: OS: Windows 10 10.0.19042 CPU: (12) x64 AMD Ryzen 5 2600 Six-Core Processor Memory: 8.18 GB / 15.93 GB Binaries: Node: 14.17.0 - C:\Program Files\nodejs\node.EXE Yarn:…

### CASE-7846 · Documentation should clarify that server state is not automatically per-request
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: documentation
- **Excerpt**: **Describe the bug** External variables, stores and other states processed during Load functions will keep in memory references that will remain upon all visitors of the website that is handled by the same server node instance. This happens with "svelte-kit dev" "svelte-kit preview" and in production, at least tested in Netlify. I think this issue comes from the assumption than node SSR is running clean on each instance. **To Reproduce** Use this basic demo repo [link] run `npm run dev` and go to `localhost:3000/todos`. There is a further red text block explaining what happens there reload…

### CASE-7847 · Component variables aren't re-initiated when navigating to a different slug
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍8 💬6 · closed
- **Excerpt**: **Describe the bug** When navigating between slugs via links or by triggering `goto()`, component variables aren't re-initialized, leading to bugs. Navigating directly to the pages via the browser's address bar does have the expected result. **To Reproduce** Here's a simple component that shows the issue: ```HTML <!-- src/routes/test/[slug].svelte --> <script context="module"> export async function load({ page, fetch, session, context }) { return { props: { currentSlug: page.params.slug } }; } </script> <script> import { goto } from '$app/navigation'; export let currentSlug; let currentValue…

### CASE-7850 · ReferenceError: Can't find variable: process
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** After a few days of development on one single page (with many components) and building a production version (**built version is working perfectly**), I'm unable to open just this exact page **in the `dev` mode only** with following errors in any browser: **Logs** Page itself: ``` 500 Can't find variable: process [link] [link] [link] [link] [link] [link] module code@[link] evaluate@[native code] moduleEvaluation@[native code] moduleEvaluation@[native code] moduleEvaluation@[native code] [native code] promiseReactionJobWithoutPromise@[native code] promiseReactionJob@[native…

### CASE-7851 · Invalid code is generated when using environment variables
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: svelte, vite
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: **Describe the bug** This bug is on an intersection of Svelte and Vite and I don't know how SvelteKit plays with all of this, but I'll report here. When using environment variables, they are statically replaced in production builds by Vite. However, some intermediate files generated by Svelte contain these variable names also in CSS source map strings, and this replacement breaks it and produces invalid code like this: (lines wrapped manually for readability - on the third line is the offending replacement) ```js const css = { code: "h1.svelte-zynv6f{font-size:0.9em}", map:…

### CASE-7863 · fields.value() returning undefined when input_value is passed to .as()
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: linux
- **Signals**: 👍1 💬5 · closed · labels: forms
- **Excerpt**: ### Describe the bug When calling `fields.name.as('text', 'default')`, the `input_value` was used as a display fallback in the returned props but was never accessible to `fields.name.value()`, which returned `undefined` until the user interacted with the input. ### Reproduction [link] ``` <form {...test_form}> // displays 'default text' <input {...test_form.fields.name.as('text', 'default text')} /> // not displaying 'default text' <p>{test_form.fields.name.value()}</p> </form> ``` ### Logs ```Shell ``` ### System Info ```Shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM)…

### CASE-7867 · Does not run dev with Tauri and UnoCSS
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug Receive `Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable.` from `kit/src/client/client.js:358` with scaffolding Tauri app with Svelte and UnoCSS. Though it works in browser and when built. <img width="598" height="230" alt="Image" src="[link] /> EDIT: App works with SSR turned on. I guess the workaround can be turning SSR on during DEV and off during PROD. ### Reproduction - `bun create tauri-app` with Svelte - `bun i unocss` - add unocss` to vite plugins config - `bun tauri dev` ### Logs ```Shell ``` ### System Info ```Shell System: OS:…

### CASE-7872 · resolve() lacks a trailing slash when using trailingSlash = always
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug The following code no longer works when using `resolve()` for `href` and `export const trailingSlash = 'always';`. I was using `base` before but it is now being deprecated. ``` js <Link href={resolve('/dashboard/settings/')} label="SETTINGS" /> ``` `resolve()` always gets rid of the trailing slash **link.svelte component:** ``` svelte <script> import { page } from '$app/stores'; let { href, label } = $props(); </script> <a href={href} class="header-button font-medium" class:selected-link={$page.url.pathname === href} aria-label={label}> {label} </a> ```…

### CASE-7873 · Tailwinds Hot Reload not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug start a new project and setup Svelte normally, but when I am using tailwindcss text-red-600 nothing happen in browser just plain without style. Welcome to SvelteKit Visit [svelte.dev/docs/kit]([link]) to read the documentation, try to reinstall and remove same result happen, somebody can help with his ??? ### Reproduction . ├── README.md ├── node_modules │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── @user │ ├── acorn │ ├── aria-query │ ├── axobject-query │ ├── chokidar │ ├── chownr │ ├── clsx │ ├── cookie │ ├──…

### CASE-7886 · Each block doesn't work and crash all app when parameter is not iterable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem Some times I get the wrong data and then the whole app crashes cause each block doesn't work with something that is not iterable(object, null, undefined, number, etc.). I cannot even logout cause my code runs after mount. And I should {#if isIterable} or {#if exist} or {#if exist || iterable} checks everywhere even if I not consider login logout case. There is {:else} which works only when it is empty array. And I cannot use await blocks cause many times there is no promise and etc or promise result binds to specific variable which goes to other each block in…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7809 · Incorrect content-type parsing in actions
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari
- **Signals**: 👍0 💬6 · closed · labels: forms
- **Excerpt**: ### Describe the bug When using a simple fetch to an endpoint like so: ``` fetch('/login', {method: "POST", body: new URLSearchParams('key', 'value')}) ``` This is sent by Chrome and Safari as a POST request with the following content-type header: ``` Content-Type: application/x-www-form-urlencoded;charset=UTF-8 ``` But [link] framework]/blob/master/packages/kit/src/runtime/server/page/actions.js checks the content-type value by splitting on `; ` (note the space). Therefore I cannot use the above fetch call because the endpoint returns: > Actions expect form-encoded data (received…

### CASE-7810 · Vercel edge middleware breaks endpoints
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍2 💬6 · closed · labels: pkg:adapter-vercel
- **Excerpt**: ### Describe the bug [Vercel edge middleware]([link]) breaks endpoints. Tested with server less and edge functions which both result in a 404 when called. Vercel logs show that 2 edge functions are generated, one for the SvelteKit endpoint and one for the edge middleware. Middleware works as expected adding a `x-from-middleware` header to each response. ### Reproduction Github reproduction repo: [link] Production link: [link] ### Logs ```shell [11:44:36.857] Cloning github.com/dennisregalado/sveltekit-edge-middlware-bug (Branch: main, Commit: ad3241d) [11:44:37.094] Cloning completed:…

### CASE-7823 · Asset extension matching not consistent between DEV and PREVIEW
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Preview build of sveltekit doesn't match asset paths the same way as dev build. ### Reproduction Put let's say image.PNG inside of static then in index.svelte `<img src="/image.png" />` and let's run npm run dev, then run build and preview and the image won't be displayed anymore. ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19041 CPU: (6) x64 Intel(R) Core(TM) i5-8600K CPU @ 3.60GHz Memory: 6.21 GB / 15.94 GB Binaries: Node: 16.15.0 - C:\Program Files\nodejs\node.EXE npm: 8.8.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan…

### CASE-7824 · `/_app/version.json` is marked `immutable` and cached forever
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, chrome, mobile
- **Signals**: 👍0 💬6 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug As mentioned in [link] framework][ref][ref], I suspect recent changes to the way that `/_app/version.json` is served have caused it to be treated as a static asset. ### Reproduction See this simple repro: [link] The offending network requests are visible every 10 seconds: <details> <summary>Example request</summary> ``` curl '[link] \ -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"' \ -H 'pragma: no-cache' \ -H 'cache-control: no-cache' \ -H 'Referer: [link] \ -H 'sec-ch-ua-mobile: ?0' \ -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac…

### CASE-7834 · SvelteKit not working on mobile phone default browser (non chrome) but Svelte only is working.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte, mobile
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug SvelteKit not working property on mobile default browser (non chrome), and working as expected on chrome. Svelte still working on same device & browser. So I think the problem is in svelte-kit, but I still don't know the exact issue. Any guidance? Is there any way to make it work since my user mostly using their default browser without installing chrome? Perhaps install some polyfills needed? This is a real blocker to use svelte kit since I can't force all users to use chrome and not using their default browser. ### Reproduction [link] This is the steps i take to create…

### CASE-7836 · Images from static not displayed sometimes netlify adapter
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, linux
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug My logo keeps disappearing at random times, it's an svg in the static folder ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Linux 5.10.60-1-MANJARO x86_64 21.1.1 Pahvo System: OS: Linux 5.10 Manjaro Linux CPU: (4) x64 Intel(R) Core(TM) i5-3320M CPU @ 2.60GHz Memory: 139.75 MB / 3.55 GB Container: Yes Shell: 5.8 - /bin/zsh Binaries: Node: 16.7.0 - /usr/bin/node Yarn: 1.22.11 - /usr/bin/yarn npm: 7.21.0 - /usr/bin/npm Browsers: Brave Browser: unknown Firefox: 91.0.2 ``` ### Severity serious, but I can work around it ### Additional Information _No…

### CASE-7848 · `svelte-kit dev --host` inside a docker container causes constant refreshes when loaded in browser on host machine
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, chrome, svelte, typescript
- **Signals**: 👍6 💬6 · closed · labels: documentation
- **Excerpt**: **Describe the bug** Running `yarn dev --host` inside a docker container causes the page to constantly refresh when loaded in a browser on the host machine. **Logs** No server logs showed up, but in the console in the browser, it looked like there was a web socket issue - potentially related to HMR? I recorded the console in Safari below, but I noticed the same issue whether I opened it in Safari, Firefox, or Chrome. *Safari* [link] *Chrome* [link] **To Reproduce** Start a basic svelte-kit project, using the SvelteKit demo app, no Typescript, no ESLint, and no Prettier: ```sh npm init…

### CASE-7879 · Handle cases when location.protocol is `about:` or `data:`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: svelte, webview
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the problem I am using svelte in several embedded webviews. I used to have to run a static file server before `bundleStrategy: 'inline'` became available [yesterday]([link]). Normally (if we click this html file) the url will start with `file://`, and everything works fine. But In the webview implementation I use the url is a data url, and hydration always fails because of: ``` Uncaught TypeError: Failed to construct 'URL': Invalid URL at data:text/html;chars…8L2h0bWw+Cg==:16:13 ``` In another case, I want to parse metadata from an url using an iframe, but sveltekit apps always…

### CASE-7889 · Svelte 5: afterNavigate doesn't run after opening a page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, svelte
- **Signals**: 👍0 💬5 · closed · labels: svelte 5
- **Excerpt**: ### Describe the bug afterNavigate doesn't seem to run after component mounts when using Svelte 5 with Svelte Kit. ### Reproduction [Svelte 5 + Svelte Kit issue]([link]) [Svelte 4 + Svelte Kit works fine]([link]) ### Logs _No response_ ### System Info ```Shell System: OS: macOS 14.3 CPU: (12) arm64 Apple M2 Pro Memory: 721.33 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.2.0 - /opt/homebrew/bin/node Yarn: 1.22.21 - /opt/homebrew/bin/yarn npm: 10.2.4 - /opt/homebrew/bin/npm pnpm: 8.11.0 - ~/Library/pnpm/pnpm bun: 1.0.25 - ~/.bun/bin/bun Browsers: Chrome: 121.0.6167.139 Chrome Canary:…

### CASE-7895 · Layout renders twice when a div tag is used with `{@user}`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, macos, svelte
- **Signals**: 👍2 💬5 · open
- **Excerpt**: ### Describe the bug The layout seems to be rendering both on the client and server when using a div tag from raw html. ### Reproduction ``` git clone [link] cd sveltekit-double-layout-render-issue npm install npm run dev ``` ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.4 CPU: (8) arm64 Apple M1 Memory: 86.77 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.0.0 - ~/.nvm/versions/node/v18.0.0/bin/node Yarn: 1.22.18 - /usr/local/bin/yarn npm: 8.6.0 - ~/.nvm/versions/node/v18.0.0/bin/npm Browsers: Brave Browser: 103.1.41.96 Chrome: 103.0.5060.114 Firefox: 102.0.1…

### CASE-7899 · When any component is blocked by an Ad Blocker all functionallity is killed
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, chrome, safari
- **Signals**: 👍3 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When any component is blocked by an Ad Blocker the whole site crashes and any functionality seizes to function. The error reads `TypeError: error loading dynamically imported module`. ``` TypeError: error loading dynamically imported module app.js:18:41 handleError [link] handle_error [link] framework]/src/runtime/client/client.js?v=f589e44a:1313 _hydrate [link] framework]/src/runtime/client/client.js?v=f589e44a:1787 ``` I am using uBlock Origin on FireFox and Chrome. We've had other reports from this happening using AdBlock on Chrome. On Safari the issue seemed to be…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7815 · Build fails after upgrading to vite > 2.9.0
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug It's expect to build the project when, in a dependency, I export a svelte component, and then import that component. However the build fails with this error: ``` 500 Unknown file extension ".svelte" for /home/projects/vitejs-vite-14hxgx/node_modules/@user/theme/src/footer/Footer.svelte TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".svelte" for /home/projects/vitejs-vite-14hxgx/node_modules/@user/theme/src/footer/Footer.svelte at get ([link]) at instantiateModule…

### CASE-7831 · Router changes the URL prematurely
- **Principles**: P-C1, P-C2, P-C3 · **Env**: svelte
- **Signals**: 👍7 💬6 · closed · labels: router
- **Excerpt**: ### Describe the bug When using links within the SvelteKit app, the URL gets updated immediately, even though the underlying page is still loading. In this simple demonstration the second-page loads for 1s, but the URL is updated a immediately: ![CleanShot 2021-11-23 at 14 09 45]([link]) This is unconventional and results in asynchrony between the URL and the page content. For contrast, here is what happens when clicking on the second link with rel="external", which triggers normal browser behavior: ![CleanShot 2021-11-23 at 14 10 35]([link]) Here you can see that both the URL and the page…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7816 · onDestroy not called after goto
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### Describe the bug `onDestroy` not called if the template has a transition based on a `store` variable that gets assigned to after calling `goto`. In our real scenario it was caused by a programming error, but the cause was hard to track down because of multiple layers of derivations. Not sure if there's ever a valid reason for this situation, but confusing if you make the same mistake. ### Reproduction 1. Clone [link] 2. `npm run dev -- --open` 3. Click "Go to page 2" 4. "pages pile up one after the other on the bottom as I continue navigating back and forth, with no page ever…

### CASE-7820 · sveltekit fails to automatically generate CSP hashes for inline styles
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬6 · open
- **Excerpt**: ### Describe the bug When using transitions, it seems svelte adds inline styles to the html but then sveltekit fails to automatically add a hash for it causing errors in the browser. ![20220616_222841]([link]) This is what my svelte.config.js has under CSP: ![20220616_223031]([link]) And this is the piece of code that adds inline styles: ![20220616_222924]([link]) Only way to get it working is to add the hash myself to the CSP but that's lame. ![20220616_223045]([link]) Am I doing something wrong? Or is it broken? ### Reproduction Add a transition to your app and then set CSP for style-src to…

### CASE-7829 · error: Unterminated string literal
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: ### Describe the bug Using script shortcut `//` results to `error: Unterminated string literal` on building. ### Reproduction ``` <svelte:head> <script src="//cdn.jsdelivr.net/npm/sweetalert2@user"></script> </svelte:head> ``` ### Logs ```shell Note: This logs are from Bitbucket Pipeline. Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification ✓ 308 modules transformed. rendering chunks... .svelte-kit/output/client/_app/assets/fira-mono-greek-400-normal-a8be01ce.woff2 10.27 KiB…

### CASE-7838 · Build fails when importing firebase firestore
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: ### Describe the bug When working with firebase firestore, `pnpm build` fails with the following error. ``` ~/reproduce/vite-firebase-error │ on master pnpm build ✔ > [email] build /home/jakub/reproduce/vite-firebase-error > svelte-kit build vite v2.6.7 building for production... transforming (45) node_modules/.pnpm/@[email]/node_modules/@user/webchannel-wrapper/dist/index.esm2017.js5:14:51 PM [vite-plugin-svelte] The following packages did not export their `package.json` file so we could not check the "svelte" field. If you had difficulties importing svelte components from a package, then…

### CASE-7845 · `Svelte:head` issue, app does not compile
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** When I include `<svelte:head>` within the index.svelte the compiler gives `Cannot find module './transformers/module' Require stack: - D:\GitHub\brgrz\sl-bugs\handler-violations\node_modules\svelte-preprocess\dist\autoProcess.js - D:\GitHub\brgrz\sl-bugs\handler-violations\node_modules\svelte-preprocess\dist\index.js` **To Reproduce** Create new empty (skeleton) SvelteKit app. Add `<svelte:head>` to the index.svelte component and include some JS or CSS links (from CDN for example). The app won't run (500 error) with the above description. **Expected behavior** The app…

### CASE-7854 · Circular dependencies cause `svelte-kit dev` to freeze
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: I'm building a custom plugin to do some AST transforms on some files in sveltekit for i18n. It seems to work fine when I run `npm run build` followed by `npm run start`, but when I run `npm run dev` (which runs `svelte-kit dev`) the app never loads and yet I see no errors, neither in the browser nor in the console, so it's hard to track what's not working. To reproduce it, just clone [link] checkout commit #9fcf85eecaa, install dependencies and run `npm run dev`. You can also run `npm run build && npm run start` for comparison, as that works fine. Something might be failing during SSR but not…

### CASE-7888 · Vite plugins run twice per build
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed · labels: vite
- **Excerpt**: ### Describe the bug I hope to package the files in the build folder into a zip file after the project is built. Currently, the build function triggers twice (client & server), resulting in the generation of two zip files. How can I trigger the compression command after the entire Svelte project is built? ### Reproduction svelte ```js // +layout.js export const ssr = false; ``` vite config ```js plugins: [ sveltekit(), zipPack({ inDir: 'build', outDir: 'build-zip', outFileName }) ], ``` ### Logs ```Shell output "Creating zip archive" 2 times ✓ 808 modules transformed.…

### CASE-7900 · Build fail on `@user/adapter-cloudflare`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Our project hosted on vercel. We decide move to cloudflare. We checked docs([link] [link]) and install adapter and try to build(`"build": "CF_PAGES=1 vite build"`) But build occur error and logs(see attached logs). In my opinion, the compiler can't compile the ts. ### Reproduction install @user/adapter-cloudflare and build(`"build": "CF_PAGES=1 vite build"`) ### Logs ```Shell npm run build > [email] build > CF_PAGES=1 vite build vite v4.0.4 building SSR bundle for production... ✓ 1 modules transformed. [vite-plugin-svelte] /src/routes/+layout.svelte:7:13 Unexpected token…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7817 · Vulnerability: Memory Overflow when sending big files
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: # UPDATE I updated the title and added some more information on the importance of this issue here: [link] framework][ref][ref] ### Describe the bug ### ⚠ Disclaimer **First of all** I'm not a native english speaker so please forgive my sometimes bad english! ❤ **Second of all** I'm not entirely sure if this issue belongs to ``[meta framework]`` or more to ``[meta framework]/adapter-node`` but as they both are on the same repository I'm posting this issue here anyway. **Third of all** I know there may be people saying this is more of a feature request than a bug. But in my opinion it's a bug…

### CASE-7885 · Scrollbar is not scrolling the Page
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D4, P-F5 · **Env**: windows, svelte
- **Signals**: 👍0 💬5 · closed · labels: documentation
- **Excerpt**: ### Describe the bug I am having a bad user experience on the SvelteKit Documentation Page. The scroller here-- [link] is not scrolling the Page. It's as if it responds to just mouse wheel. Unfortunately, my mouse wheel is bad, so I'm struggling to scroll up and down on the Page. Please, can this be worked on? -- so that it will be easy to scroll the Pages of the Documentation? Regards. ### Reproduction Just go to the SvelteKit page and try to scroll the page with the scrollbar ### Logs _No response_ ### System Info ```Shell Windows 10 ``` ### Severity annoyance ### Additional Information _No…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-7818 · Key block with transition breaks client side routing
- **Principles**: P-A5, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Using a key block with transitions (e.g. fade) will break client side routing, producing non-deterministic artifacting, including: route contents being displayed together (stacked on top of each other) and ghost key blocks (i.e. the starting, invisible versions of the fades) I am guessing this happens because we are swapping routes mid-key-block-transition, and the client side routing conflicts with whatever code is running key block transitions? [link] The effect gets worse as you have more key blocks [link] I ran into this while making a feed of auto-advancing carousels…

### CASE-7855 · `npm run dev` serves entire project directory
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: vite
- **Excerpt**: **Describe the bug** When I run `npm run dev`, the entire project directory is included and served as static assets. For instance, I can go to [link] and get a prompt to download this file. (The regular static assets are routed and served correctly -- this is something extra on top of that.) **To Reproduce** - Initialize a project with `npm init svelte@user` - Run `npm run dev` - Attempt to access any file relative to the project root through the server, e.g. [link] **Expected behavior** The project root is *not* served as static assets. **Information about your SvelteKit Installation:**…

### CASE-7897 · Cookies not sent with server side fetch to same origin
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hi, i have a simple svelte kit app, and a backend with django. Both are behind the same origin, thanks to a Caddy reverse proxy, pointing `/api/` to django, and `/dash/` to caddy. I made a `handleFetch` function to point requests made to the backend directly to the local django url. However, this code in my `+layout.server.ts` : ```ts import type { LayoutServerLoad } from './$types'; import { redirect } from '@[meta framework]'; export const load = (async ({ fetch, url, cookies }) => { let user: any; let r = await fetch("/api/v1/home") console.log(cookies.getAll()) // Do…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7822 · Rename `LoadInput` to `LoadEvent`
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug The endpoint's `get` function doesn't have type for input arguments. In javascript you can use the [generated types]([link]), but that's not possible with typescript. So the whole object or individual keys should be able to type. Example: ```ts export async function get({ params }: ThereIsNoTypeAvailable): Promise<RequestHandlerOutput> {} ``` ```ts export async function get({ params }: { params: ThereIsNoTypeAvailable }): Promise<RequestHandlerOutput> {} ``` The output is fine, `RequestHandlerOutput` is available and we can use it. Yeah, you can type a function expression…

### CASE-7861 · Using a default optional string with an optional remote form field gives type error
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug If I have something like `<input {...myForm.someField.as('text', someOptionalDefault)/>`, where someField is a z.string().optional(); I'll get a type error: ``` Svelte: Argument of type ['text', string | undefined] is not assignable to parameter of type [type: 'text'] | [type: 'text', value: string | (string & {})] Type ['text', string | undefined] is not assignable to type [type: 'text', value: string | (string & {})] Type at position 1 in source is not compatible with type at position 1 in target. Type string | undefined is not assignable to type string | (string & {})…

### CASE-7865 · Remote form function with data-sveltekit-preload-data="hover" setting is breaking navigation
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug A simple two route app with remote form functions and the data-sveltekit-preload-data set to "hover" breaks the browser hyperlink navigation between the two routes. ### Reproduction Here's StackBlitz repo [link] Navigate to "Login" -> "Register" -> "Login" You will find that the URL switches to /auth/login but the page does not to refresh. If I force refresh the browser once and then use the links it seems to be working. Also, notice that this only works if I set the data-sveltekit-preload-data="off" on the links. ### Logs ```Shell ``` ### System Info ```Shell "@[meta…

### CASE-7866 · My payment providers is getting `403 Forbidden: Cross-site POST form submissions are forbidden`. trustedOrigins not helping.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open · labels: needs-decision
- **Excerpt**: ### Describe the bug My payment providers is getting `403 Forbidden: Cross-site POST form submissions are forbidden` when making their success callback to my site after a payment. trustedOrigins not helping as my payment provider doesn't set headers.origin, which is the only thing trustedOrigins checks as far as I can see. The payment provider sets their hostname in referrer instead. So a fix would be to add a check for headers.referrer here too: [link] framework]/blob/9909a2975436fb6d8d629d4469441666d5e38d7d/packages/kit/src/runtime/server/respond.js#L78 ### Reproduction Derp. Is this even…

### CASE-7868 · Field value retrieved from `form()` is initially empty
- **Principles**: P-G4, P-E3 · **Env**: windows, svelte
- **Signals**: 👍1 💬5 · open · labels: forms
- **Excerpt**: Update: Seems to apply to all form fields. ```svelte <script lang="ts"> import { addId } from './ids.remote'; console.log(addId.fields.checkbox.value()); console.log(addId.fields.checkbox.set(true)); </script> <input {...addId.fields.checkbox.as('checkbox')} /> ``` Logs on both the server and the client: ``` undefined true ``` ### Describe the bug Despite `windows` being visually selected in the `<select>`, the `os.value()` starts of as an empty string. ```svelte <script lang="ts"> import { FormSchema, osArray } from './ids'; import { addId } from './ids.remote'; </script> <form…

### CASE-7869 · Spamming mutations can cause issues with withOverride
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬5 · open · labels: forms
- **Excerpt**: ### Describe the bug I'm running into a strange issue with the withOverride function. After submitting the form, it looks like the old object state is still being used instead of the updated one. The behavior is inconsistent — sometimes the list updates as expected, and sometimes it seems to reuse the previous state. It only happens on my computer, not on SvelteLab. [link] ### Reproduction Here’s the repo: [link] It’s strange because the exact same repo doesn’t reproduce the bug on SvelteLab: [link] ```ts <script lang="ts"> import { createTodo, deleteTodo, getTodos } from './todos.remote';…

### CASE-7871 · Zod coerce does not work with remote function form
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed · labels: documentation
- **Excerpt**: ### Describe the bug The example from the documentation (changed to zod instead of valibot): ``` import { z } from 'zod'; import { form } from '$app/server'; export const setCount = form( v.object({ // Zod: count: z.coerce.number() }), async ({ count }) => { // ... } ); ``` Gives the following typescript error in my editor (VS Code): ``` No overload matches this call. Overload 1 of 3, '(validate: "unchecked", fn: (data: RemoteFormInput) => unknown): RemoteForm<RemoteFormInput, unknown>', gave the following error. Argument of type 'ZodObject<{ count: ZodCoercedNumber<unknown>; }, $strip>' is…

### CASE-7877 · Form actions do not work with node server in bun
- **Principles**: P-G4, P-E3 · **Env**: linux, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug when running the node server with bun, form actions never return and the post request never finishes, I have tested with all dependencies updated and a drizzle orm newer than what sv installs (in addition to what is normally installed) ### Reproduction create a new svelte project with lucia and drizzle (database does not matter) that uses the node server adapter, build the project and try and run it with `ORIGIN=[link] bun run --bun ./build`, the form actions in the lucia demo never return ### Logs ```Shell ``` ### System Info ```Shell System: OS: Linux 6.13 Arch Linux…

### CASE-7884 · When omitting $types, the type assigned to page load differs from PageLoad
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍1 💬5 · open · labels: types / typescript
- **Excerpt**: ### Describe the bug When [omitting `$types`]([link]) from `+page.ts`, the return type of the `load` doesn't seem to be checked correctly. When typed as `PageLoad`, required properties in `PageData` which aren't present in the return type cause a type error. If the types are omitted (as described in [the blog post]([link])), the type error no longer occurs. ### Reproduction 1. Run `npm create svelte@user repro && cd repro && npm install` (select "Skeleton project", "Yes, using TypeScript syntax", and no additions). 2. Run `npm run check` — no errors or warnings, yet. 3. Edit `src/app.d.ts`;…

### CASE-7898 · Cannot use import statement outside a module: blocking package upgrade
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Cannot use Firelord in a Sveltekit project but can use it in a pure Svelte-only (not Sveltekit) project. Since Firelord works with pure Svelte, React and a few other frameworks this clearly seems like a blocking Sveltekit issue -- most likely blocking a few libraries, not just Firelord. ### Reproduction Reproduction steps: - Repo: [link] - `npm i && npm run dev` Alternative: - `npm create svelte@user` (select Skeleton app) - `npm i [email]` - Add the following to your `+page.svelte` file: ``` <script lang="ts"> import { getFirelord } from 'firelordjs'; </script> ```…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7832 · `app.html` doesn't respect base path setting
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### Describe the bug The skeleton template creates an `app.html` file that contains: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8" /> <link rel="icon" href="/favicon.png" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> %svelte.head% </head> <body> <div id="svelte">%svelte.body%</div> </body> </html> ``` Setting a base path using [this setting]([link]) breaks the favicon because it's hardcoded to use the root path (`[link]), not the base (`[link]). This is even more troublesome after adding a global stylesheet. The only alternative I've found…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-7833 · An unexpected error caused by a CSS class
- **Principles**: P-A2, P-A4, P-D1, P-D2, P-D3 · **Env**: windows
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Good morning, I am getting very rare error with one-block css. It turns out that when I go to my "projects" web section, it slows down and takes a long time to load the page. Once loaded the project cards also take time to show the animations when making a hover. The console does not throw errors but I identified what it is. It's because of using a display: grid in my css classes. Why could this be happening? ### Reproduction [link] ### Logs ```shell The editor and browser console does not throw me an error ``` ### System Info ```shell System: OS: Windows 10 10.0.19042…

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-7880 · 'Uncaught TypeError: Illegal Invocation' when root layout contains body tag
- **Principles**: P-H2, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug Recently I migrated an old app (Sveltekit 1/ Svelte 3) to Svelte 5 via the migration scripts. That worked great for the most part, but my app would no longer work correctly. It rendered the page initially but quickly repainted it completely blank. In the console it printed the error "Uncaught TypeError: Illegal Invocation" (see logs). I found the fix/workaround in a [Reddit Thread]([link]) that had the same issue: a wrapping `<body>` tag inside the root layout `+layout.svelte` was causing the issue. Removing this wrapping body element fixed the issue. The issue occurs…

