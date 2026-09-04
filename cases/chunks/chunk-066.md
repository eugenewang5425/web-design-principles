# Case Chunk 066 — Round 66

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7501 · TypeError: render2 is not a function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: Not sure if this is a bug This is the only difference Production: node version 14.17.0 Dev: node version 14.16.0 When I run npm run build on dev it works but not on a production self hosted server this is what I get ```bash ✓ 76 modules transformed. .svelte-kit/output/server/app.js 501.50kb Run npm run preview to preview your production build locally. > Using @user/adapter-node TypeError: render2 is not a function at Object.handle (file:///home/admin/web/mylastore.com/public_html/.svelte-kit/output/server/app.js:80:26) at respond…

### CASE-7508 · Having a +server.js file caused 405
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍8 💬13 · closed · labels: breaking change
- **Excerpt**: ### Describe the bug I had an on-going issue with meta-tags not rendering on social platforms, as well as possible indexing problems. One of my pages was returning 405- even though there was nothing unusual about it. ``` <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "[link]> <html> <head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head> <body><p>GET method not allowed</p></body> </html> ``` For example: [link] returns 405 [link] worked fine I was using [Facebook debugger]([link]) to test changes I ended up trying different deployment solutions, going…

### CASE-7509 · [vite] ✨ optimized dependencies changed. reloading
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: vite, svelte
- **Signals**: 👍41 💬13 · closed · labels: vite
- **Excerpt**: ### Describe the bug We often face this issue due to a runtime reload caused by Vite optimization. For example, if there is a multi-page form submission wizard where user goes thru multiple routes to reach the end. This sudden reload causes a reload that jumps back to the very first page. This is very frustrating. ### Reproduction I think, while running `npm dev` vite does not pre-optimize all components and modules for the future routes. This is causing the runtime optimization, thus the frustrating reload. ### Logs ```Shell [vite] ✨ new dependencies optimized: svelte-transition [vite] ✨…

### CASE-7510 · `static-adapter` and `vite build --watch` crashes if triggered while building.
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬13 · open · labels: vite/pkg:adapter-static
- **Excerpt**: ### Describe the bug `vite build --watch` crashes the processes due a unhanded error if I save while a build is running when using `static-adapter`. ### Reproduction [link] To reproduce, clone the repo, run `npm run build-watch` and save twice in template file or js file. The expected behavior is rebuild twice, the result is a crash. ### Logs ```Shell ➜ my-app npm run build-watch > [email] build-watch > vite build --watch vite v4.4.9 building SSR bundle for production... watching for file changes... build started... ✓ 72 modules transformed. vite v4.4.9 building for production... ✓ 61 modules…

### CASE-7514 · After SvelteKit 1.0.0-next.397, build hangs without displaying errors
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍8 💬13 · closed · labels: p0-urgent
- **Excerpt**: ### Describe the bug After upgrading to any version of SvelteKit after 1.0.0-next.397, when running `npm run build` (vite build), it gets to a specific point in the process then never completes. No error messages: ```bash % npm run build > [email] build > vite build vite v3.0.4 building for production... ✓ 1737 modules transformed. ``` I am using [email] and @user/[email]-next.85. The version of these packages appears to have no effect on the inability to complete the build. ### Reproduction 1. `git clone [link] 2. `cd shy-svelte` 3. Change version of @[meta framework] to 1.0.0-next.398 in…

### CASE-7522 · Path handling during build with adapter-static
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍8 💬13 · closed
- **Excerpt**: **Describe the bug** Magic happens. Build fails with weird 404 when `paths: { base: "/" }` and there's `<a href="/">`, and creates a directory `buildfavicon.ico` instead of nonexistent file `build/favicon.ico`. <details> <summary><b>Logs</b></summary> ``` yarn run v1.22.10 warning package.json: No license field $ svelte-kit build vite v2.2.4 building for production... ✓ 14 modules transformed. .svelte/output/client/_app/manifest.json 1.18kb .svelte/output/client/_app/pages/index.svelte-31924b7e.js 0.41kb / brotli: 0.26kb .svelte/output/client/_app/layout.svelte-f07a7e7f.js 0.49kb / brotli:…

### CASE-7536 · $env/dynamic/private not getting loaded by vitest and vite-node
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, svelte
- **Signals**: 👍5 💬12 · closed · labels: p3-edge-case/$app/env
- **Excerpt**: ### Describe the bug ## Context This is a followup to [ref]. I began using [`vite-node`]([link]) in order to make my SvelteKit code (which depends on Vite's transforms and plugins) importable to backend/database/sysadmin-related scripts. In particular, I need access to the `$env` store from my shared code. Running my backend scripts with `vite-node` correctly populates `$env/static/private` for those scripts 🙌 ## Problem HOWEVER, confusingly `$env/dynamic/private` is not getting populated through `vite-node`. It ends up being an empty object at runtime even though my `.env` file is set up…

### CASE-7542 · build command fails as of latest release
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: **Describe the bug** The build command refers to something which cannot be found, on a brand new svelte kit project **Logs** ``` ant@user  /tmp/wercel   npm run build  19:27:01 > [email] build /tmp/wercel > svelte-kit build Transforming... ⧗ client ⧗ server Optimizing... ⧗ client ⧗ server (node:1363910) UnhandledPromiseRejectionWarning: Error: Command failed: node /tmp/wercel/node_modules/snowpack/index.bin.js build --mount.src/routes=/_app/routes --mount.src/setup=/_app/setup --out=.svelte/build/unoptimized/server --ssr /bin/sh: 1: node: not found at ChildProcess.exithandler…

### CASE-7545 · SvelteKit 2: Builds fail - Cannot read values from $env/dynamic/private while prerendering (attempted to read env.DATABASE_URL). Use $env/static/private instead
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬11 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Got my project migrated to SvelteKit 2.0 but am now getting this error at the end of the build process... ``` vite v5.0.10 building SSR bundle for production... ✓ 302 modules transformed. vite v5.0.10 building for production... ✓ 978 modules transformed. Generated an empty chunk: "4". [plugin:vite:reporter] (!) /Users/nates/dev/shy-svelte/node_modules/braintree-web/dist/browser/index.js is dynamically imported by /Users/nates/dev/shy-svelte/src/lib/braintree.ts but also statically imported by /Users/nates/dev/shy-svelte/src/lib/braintree.ts, dynamic import will not move…

### CASE-7559 · Break in version 292 in handling local modules
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬11 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug Using version 291, I can build a small sveltekit app that depends on a local module that depends on lodash. Using version 292, I get this error: `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lodash' imported from /repos/personal/sveltekit-292-break/sveltekit-app/.svelte-kit/output/server/entries/pages/index.svelte.js ` ### Reproduction [link] ### Logs ```shell ~/repos/personal/sveltekit-292-break/sveltekit-app % npm run build > [email] build > svelte-kit build vite v2.8.6 building for production... ✓ 16 modules transformed.…

### CASE-7570 · SvelteKit 2 does not transform logical assignments with es2015 target
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍4 💬10 · closed
- **Excerpt**: ### Describe the bug SvelteKit 2 does not seem to transform production code correctly when `build.target` is set to `es2015` in `vite.config.js`. The following error pops up in the console when opening the demo app in a browser that does not support Logical assignments: ```SyntaxError: expected expression, got '='``` This is due to the presence of a `de||=Promise.resolve()` in the built code, even though the build target is set to `es2015`. A fresh vanilla Vite 5 project with `es2015` target does not reproduce this, and works as it should, transforming logical assignments as expected. ###…

### CASE-7585 · Arrays returned by endpoints (page or layout) are transformed into objects
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬10 · closed · labels: documentation/p3-edge-case
- **Excerpt**: ### Describe the bug I have this `+page.svelte`: ```svelte <script lang="ts"> import type { PageData } from './$types'; export let data: PageData; </script> <pre>{JSON.stringify(data, null, 2)}</pre> ``` And this `+page.ts`: ```ts /** @user {import('./$types').PageLoad} */ export function load() { return ['42', '9000']; } ``` In my page, I get this: <img width="144" alt="image" src="[link]> Since layout data are merged into children pages data, I understand that we must work with objects, but I would love to see a note in the docs about this. ### Reproduction [link] ### Logs _No response_ ###…

### CASE-7587 · Non-production builds still builds production SSR bundles
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug I'm trying to set up a dev/staging build step in my deploy pipeline, but can't convince Svelte Kit to produce a correct build. Not being able to do so means I can't add `noindex` tags to my pages, and dev sites could leak into search engines. ### Reproduction Run `npm run build` on [link] ### Logs ```shell ❯ npm run build $ vite build --mode testing vite v3.0.0 building for testing... ✓ 34 modules transformed. .svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg 1.85 KiB…

### CASE-7591 · Error when evaluating SSR module /src/routes/__layout.svelte
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬10 · closed · labels: vite
- **Excerpt**: ### Describe the bug New error showing up 99% of the time now, and no idea what causes it to work once and a while. package.json is there.... ``` marcgodard@user:~/Documents/GitHub/gs-web$ npm run dev > [email] dev > svelte-kit dev Pre-bundling dependencies: svelte svelte/store svelte-intl-precompile svelte/transition @user/client (...and 15 more) (this will be run only when your dependencies or config have changed) SvelteKit v1.0.0-next.260 local: [link] network: not exposed Use --host to expose server to other devices on this network 4:31:00 PM [vite] Error when evaluating SSR module…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7502 · Dynamic imports fail to load in dev SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: **Describe the bug** When importing modules dynamically in a page's `load` function, it only works when the import is a static string *and* using single/double quotes (not backticks). However, they work in production. It works client-side in dev as well. **Logs** No logs other than the error itself (check the stack trace) **To Reproduce** Add this to any route component or download this repro [link] ```js <script context="module"> export async function load({ page }) { await import("../lib/Template.svelte"); // works await import(`../lib/Template.svelte`); // does not work (note the…

### CASE-7503 · Hydration issue when rendering dynamic head element
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: **Describe the bug** When using the `@user/adapter-static` and appending a script tag with **application/ld+json** type to <svelte:head>, it won't show up in the build version of your site/app. It shows up correctly when you're developing, but `npm run build` loses it from head tag. Code sample: ``` <script> const item_title = 'Hello world!'; const schema = { "@user": "[link] "@user": "Article", "@user": item_title }; </script> <svelte:head> {@user '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'} </svelte:head> ``` **To Reproduce** Append script tag with…

### CASE-7512 · Unable to entirely disable prerendering
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍3 💬13 · closed
- **Excerpt**: ### Describe the bug Hi, Forgive me if I've missed something! I'd like to run SvelteKit as a SSR-and-CSR solution, with no build-time prerendering. From the docs, I can [disable prerendering routes]([link]) by adding a `export const prerender = false;` annotation to the top-level `+layout.js`. This seems to work. I can also prevent the build process from crawling for entries to prerender (`svelte.config.js`): ``` // Disable prerendering, as this is a dynamic app prerender: { crawl: false, entries: [], }, ``` However, despite these two settings, I am still seeing an attempt to prerender when I…

### CASE-7513 · Cannot read properties of undefined (reading 'disable_scroll_handling')
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬13 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug Just appeared out of nowhere and bricked the whole app, won't go away no matter what. Tried deleting node_modules + .svelte-kit then reinstall and still there. ```txt navigation.js?v=92264f1c:16 Uncaught TypeError: Cannot read properties of undefined (reading 'disable_scroll_handling') at navigation.js?v=92264f1c:16:11 Fails on: export const disableScrollHandling = ssr ? guard('disableScrollHandling') : client.disable_scroll_handling; <--- with message: Uncaught TypeError: Cannot read properties of undefined (reading 'disable_scroll_handling') ``` ### Reproduction…

### CASE-7516 · @user/adapter-vercel 1.0.0-next.51 breaks production project
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍8 💬13 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug The "start" method goes from... ```js start({ target: document.querySelector('[data-hydrate="16zlsws"]').parentNode, paths: {"base":"","assets":""}, session: {}, route: true, spa: false, trailing_slash: "never", hydrate: { status: 200, error: null, nodes: [ import("/_app/pages/__layout.svelte-f2210a94.js"), import("/_app/pages/index.svelte-61687a47.js") ], params: {}, routeId: "" } }); ``` ...to... ```js start({ target: document.querySelector('[data-hydrate="2eq20f"]').parentNode, paths: {"base":"","assets":""}, session: {token:void 0}, route: true, spa: false,…

### CASE-7519 · `$page.url.pathname` represented as "//prerender/" when building using the static adapter
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍4 💬13 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug Using the latest versions: - @[meta framework] version 1.0.0-next.211 - @user/adapter-static version 1.0.0-next.24 In development, `$page.url.pathname` in `routes/index.svelte` will correctly be displayed as "/". However, when building for production using the static adapter, the same route is represented as "//prerender/". Inspecting `build/index.html`, the markup has the correct "/" but the script that hydrates the markup has the following: ```js <script type="module"> import { start } from "/_app/start-40ff21d5.js"; start({ target: document.querySelector("#svelte"),…

### CASE-7521 · Error "`new URL(url, import.meta.url)` is not supported in SSR." with ssr: false & adapter-static
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍6 💬13 · closed · labels: vite
- **Excerpt**: ### Describe the bug I'm trying to get sveltekit to work with wasm. (Built with wasm-pack). It works fine in the development environment, but I get an error only when building. ```bash vite v2.4.1 building SSR bundle for production... ... Error: `new URL(url, import.meta.url)` is not supported in SSR. ``` Looking at the error log, it appears that the js-script generated by wasm-pack is SSR-bundled, even though it is run only on the client side. What I've tried: - set `ssr: false` in `svelte.config.js` - use `@user/adapter-static` and [spa-mode]([link]…

### CASE-7529 · Remote function errors don't render +error routes during SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍10 💬12 · closed
- **Excerpt**: ### Describe the bug HTTP errors thrown in remote functions (using the `error()` helper) are not handled consistently between client rendering and SSR. If a remote function throws an HTTP error during SSR (eg: when called in a `+page.server.ts`) the appropriate `+error.svelte` route isn't rendered, triggering the static HTML fallback error page instead. If you disable SSR, and trigger the same error, the appropriate error boundary/route is used, as if the error occurred in the caller. I believe this is the correct behaviour, or at least I hope it is, because it makes remote functions far more…

### CASE-7534 · Incorrect Paths generated when using `paths.relative: true` in SPAs
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: ### Describe the bug As suggested in [ref], I attempted to use `kit.paths.relative: true` to enable my Single Page Application (SPA) to load from any path. However, upon building the application, I noticed that the output in the `build` folder contains only absolute paths. This issue only occurs when `ssr = false` and there are no pre-rendered pages. If there is at least one pre-rendered page, the paths are indeed relative (`./` on the scripts, and `base: new URL(".", location).pathname.slice(0, -1)`). My use case is somewhat specialized: I am attempting to build a [Twitch Extension]([link]),…

### CASE-7537 · PageData types don't update to reflect changes to load function(s)
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: ### Describe the bug Having a `+page.server.ts` load function with no `+page.ts` load function results in `PageData` being `any` Making changes to `+page.ts` load function means the `PageData` types lag and mismatch. ### Reproduction Just add and remove some static props to the `load` function return object. ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.5 CPU: (6) x64 Intel(R) Core(TM) i5-8500B CPU @ 3.00GHz Memory: 1.56 GB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.14.0 - /usr/local/bin/node npm: 8.3.1 - /usr/local/bin/npm Browsers: Brave Browser:…

### CASE-7540 · Failed to fetch dynamically imported module
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug Hi, we are using SvelteKit on production for a while now and recently added Sentry to monitor errors. Some of our settings: * SSR: `off` * Pre-render: `disabled` * adapter: `static` * hosting: `netlify` * it's a SPA (we have `fallback` to `index.html`) The error log looks something like this: `Failed to fetch dynamically imported module: [link]>/_app/pages/index.svelte-91a57275.js` And the odd thing is that it does not happen on any particular route and not always, but often enough. ### Reproduction It is not reproducible on development and it happens randomly. Probably…

### CASE-7543 · docs: update Cloudflare deployment guide
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬11 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Recommend `nodejs_compat` flag instead of putting it in the troubleshooting section. Related: - [link] framework][ref] ``` Svelte error: async_local_storage_unavailable The node API `AsyncLocalStorage` is not available, but is required to use async server rendering. [link] ``` Guide users to set the `compatibility_date` to the current date. [Reference]([link]) > When you start your project, you should always set `compatibility_date` to the current date. ```jsonc { "name": "<any-name-you-want>", "main": ".svelte-kit/cloudflare/_worker.js", "compatibility_date":…

### CASE-7555 · There should be an adapter for sandboxed SSR.
- **Principles**: P-F4 · **Env**: svelte, vue
- **Signals**: 👍25 💬11 · closed
- **Excerpt**: ### Describe the problem Related discussion: [link] framework]/discussions/4339 File-based stores in sveltekit are basically unusable since they leak state across SSR requests. This is a major flaw in the design of SvelteKit and makes it practically unusable compared to other frameworks. ### Describe the proposed solution I have experience playing around with Vue's sand-boxing system that they use to isolate module state from each other using [node's vm features]([link]). I would be happy to collaborate with someone, with the goal of creating a svelte kit adapter to achieve this. Using stores…

### CASE-7560 · Issues with some modules ?
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬11 · closed · labels: vite
- **Excerpt**: **Describe the bug** When I import `@user/bignumber` in a page I get the following error when loading the page : ``` 500 Cannot read property 'BN' of undefined TypeError: Cannot read property 'BN' of undefined at ../src.ts/bignumber.ts:12:18 at instantiateModule (C:\dev\wighawag\test-svelte-kit\node_modules\vite\dist\node\chunks\dep-6e02b235.js:69027:166) ``` **Logs** browser : ``` GET [link] 500 (Internal Server Error) ``` cli: ``` [vite] Error when evaluating SSR module /node_modules/@user/bignumber/lib.esm/bignumber.js: TypeError: Cannot read property 'BN' of undefined at…

### CASE-7561 · ReferenceError: require is not defined
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍13 💬11 · closed · labels: vite
- **Excerpt**: **Describe the bug** [vite] Error when evaluating SSR module /node_modules/gray-matter/index.js: ReferenceError: require is not defined **Logs** ``` 11:13:27 ├F10: AM┤ [vite] Error when evaluating SSR module /node_modules/gray-matter/index.js: ReferenceError: require is not defined at /node_modules/gray-matter/index.js:3:12 at instantiateModule (D:\learn\svelte\svelte-kit-demo\node_modules\vite\dist\node\chunks\dep-efe32886.js:68893:166) 11:13:51 ├F10: AM┤ [vite] Error when evaluating SSR module /node_modules/highlight.js/lib/index.js: ReferenceError: require is not defined at…

### CASE-7565 · Error when evaluating SSR module - "exports is not defined"
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍3 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug After upgrading to [@[meta framework]@user.21.3]([link] framework]/releases/tag/%40sveltejs%2Fkit%402.21.3) I get an `exports is not defined` error for every route. See logs for further details. ### Reproduction - ### Logs ```Shell [vite] (ssr) Error when evaluating SSR module /src/routes/[[loc]]/dashboard/+page.server.ts: exports is not defined at eval (eval at runInlinedModule (file:///home/.../node_modules/.pnpm/[email]@[email]@[email]@[email]/node_modules/vite/dist/node/module-runner.js:1062:11), <anonymous>:3:36) at ESModulesEvaluator.runInlinedModule…

### CASE-7589 · Vite plugin has missing CSS
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Not sure what I'm doing wrong here, but I have a Vite plugin that uses the `svelte.compile` API to generate a component, which all works fine serverside and clientside, except that on the serverside the CSS is missing. If you don't hydrate or you turn off JS in the browser, the style never appears. Otherwise it does appear after a flash. ### Reproduction Repro: git clone [email]:johnnysprinkles/repro.git git checkout vite_plugin_missing_css npm i npm run build npm run preview (The code I added is all in one commit, [link]) I added a "star" component that has some styled…

### CASE-7590 · fetch() unexpected behavor when encountering a CORS issue on client side
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬10 · closed · labels: breaking change
- **Excerpt**: ### Describe the bug If SvelteKit's `fetch()` is called against a URL that causes a CORS error in a web browser, the resulting behaviour might be unexpected for a developer. The behaviour is also naturally different on client-side and server-side rendering, where SSR `fetch()` does not suffer from CORS issues. - A CORS error does not return a response in `fetch()` but throws an exception. Developers relying on `response.ok` pattern to check the validity of the `fetch` result are caught off guard. - This is a tough nut to crack, because it is rooted deeply in the web browser security model. -…

### CASE-7595 · Layout Stack not Fully Reset for src/routes/__layout.svelte
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug According to the official sveltekit documentation, adding __layout.reset.svelte inside a nested folder should reset layout stack and prevent inheriting from upper level layouts. Unfortunately, the browser is receiving some logs from the **module context** of `__src/routes/__layout.svelte`. ssr logs are clean and not affected. ### Reproduction - [[link]]([link]) - the expected behavior is: `src/routes/login/__layout.reset.svelte` should reset `src/routes/__layout.svelte`. - after visiting `localhost:3000/login`, you'll notice the log from the module context of…

### CASE-7597 · Request: an adapter between static and nodejs
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Describe the solution you'd like** I have been playing with the static adapter and find it great for simple sites (like my blog), but I think there is a need for an adapter that provides complete client-side (read: no SSR at all) SvelteKit applications while supporting actual Svelte functionality. For example, the documentation says: > In other words, any app that involves user sessions or authentication is *not* a candidate for `adapter-static`, even if individual pages within and app *are* suitable for prerendering. I *think* that this is because `adapter-static` is essentially running in…

### CASE-7600 · handleFetch hook receive empty event object after 2.31.0 sveltekit upgrade
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug handleFetch hook receive empty event object after 2.31.0 sveltekit upgrade. For ssr http calls handleFetch act as an http interceptor and we add auth details via event object . But after the upgrade the ssr calls started to throw 401 as auth details were empty in the event object as event object itself was coming empty. ### Reproduction ``` export const handleFetch = (async ({ event, request, fetch }) => { const { token } = event.locals; const cookieString = event.request.headers.get('cookie') || ''; const headers = getDefaultHeaders(request.url, cookieString, token,…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7504 · Spreading `form.fields.foo.as("select")` onto a `Select` component does not work
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍5 💬13 · open · labels: forms
- **Excerpt**: ### Describe the bug This does not work. Changing the value in the `Select` component does not update `createForm.fields.foo.value()`. ```svelte <Select.Root {...createForm.fields.foo.as("select")} type="single"> <Select.Trigger> {createForm.fields.foo.value()} </Select.Trigger> <Select.Content> <Select.Item value="1">1</Select.Item> <Select.Item value="2">2</Select.Item> <Select.Item value="3">3</Select.Item> </Select.Content> </Select.Root> ``` Maybe it's because `bind` is not being used on `value`, but why then does `<select {...createForm.fields.foo.as("select")}>` work without `bind`? If…

### CASE-7505 · nullable in form remote function
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: ### Describe the bug I form function like: ``` import { form } from '$app/server'; import * as v from 'valibot'; export const productForm = form( v.object({ email: v.nullable(v.pipe(v.string(), v.email())) }), async (data) => { console.log('Form data received:', data); return { success: true, data }; } ); ``` but i get type error if i use nullable. **without nullable everything is fine**: ``` No overload matches this call. Overload 1 of 3, '(validate: "unchecked", fn: (data: RemoteFormInput, invalid: Invalid<RemoteFormInput>) => unknown): RemoteForm<RemoteFormInput, unknown>', gave the…

### CASE-7517 · adapter static+endpoint / adapter static + refresh page
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: ### Describe the bug after last npm update after run build everythink is ok on npm run preview but if if deploy my site on hosting and refresh any not main page i got 403/404 also i need POST method on my form with endpoint and after run build on run preview its ok, but after deploy i got 404 on my index.json.js, index.js, api/, api/index.json etc have no idea what to do help pls ### Reproduction npm init svelte@user my-app // select test app cd my-app npm install npm run dev -- --open npm i @user/adapter-static change adapter on svelteconfig npm run build npm run preview - everythink is ok…

### CASE-7526 · Refreshing an upstream remote query doesn't refresh the dependent queries
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬12 · open
- **Excerpt**: ### Describe the bug If I have a remote query like this: ```ts export const get_foo = query(async () => { const foo = db.get_foo(); return foo; }); ``` And then I have another remote query that depends on`get_foo()`: ```ts export const get_bar = query(async () => { const foo = await get_foo(); const bar = db.get_bar(foo); return bar; }); ``` If I refresh the `get_foo()` query value, `get_bar()` is not automatically refreshed. ```ts export const set_foo = form( v.object({ foo: v.string() }), async ({ foo }) => { await db.set_foo(foo); get_foo().set(foo); // I would expect this to automatically…

### CASE-7530 · pushState/replaceState don't trigger beforeNavigate
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬12 · closed · labels: router/breaking change
- **Excerpt**: ### Describe the bug I just started using pushState/replaceState and realized that they don't trigger beforeNavigate, and so I cannot ask the user to confirm before navigating away from a modal form. I have a rather big webapp that will need to have complex forms in modals. Users definitely want to be asked for confirmation before losing complex form state. ### Reproduction This modal will ask for confirmation when clicking the cancel button, but not on pressing back in the browser: [link] There's a beforeNavigate that should be showing the confirmation, but it isn't called. ### Logs _No…

### CASE-7547 · Form action stalls while awaiting formData for certain requests
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍6 💬11 · closed · labels: forms
- **Excerpt**: ### Describe the bug I managed to capture a formData post request that causes an action handler's `event.request.formData()` promise to never resolve. This appears to be platform dependent, as it does not reproduce when running on my MacBook. ### Reproduction 1. Clone [link] 2. `npm install` 3. `npm run dev` In another terminal: 1. Inspect the contents of `repro.sh` (it's a curl request that posts to `[link] with the headers and body that seem to reproduce this problem) 2. Execute `./repro.sh` Bug: The request hangs, never generating a reply (neither success nor error) Comparison: 1. Change…

### CASE-7554 · New `use:enhance` is good thing, but boilerplatish... can we reduce boilerplate and redesign it?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug Old `use:enhance`'s handler: ```js const result = ({ form }) => form.reset(); ``` New `use:enhance`'s handler... same logic (reseting form after successful submit): ```js function add({ form }) { return (result) => { if (result.type === 'success') { form.reset(); invalidateAll(); } } } ``` This is really big increase of LOCs (from 1 to 8). Yes, new `use:enhance` is more powerfull, but still I think we can do it much better without making it powerless. ### Reproduction 1. `npm create svelte && npm i` 2. in `./src/routes/todos/+page.svelte` try to extract `use:enhance`'s…

### CASE-7578 · GET form triggers an entire page reload if rendered outside of SvelteKit's root
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed · labels: documentation
- **Excerpt**: ### Describe the bug If a form is rendered outside of SvelteKit's content, and triggers a navigation, the entire page reloads. This might seem like an absurd thing to care about, but a search form inside of a modal, rendered in a portal is a reasonably common occurrence, and exactly how I discovered this. Incidentally, form *actions* appear to work fine. You can post from a form rendered in a portal, and the invalidation appears to work correctly, without the full reload ### Reproduction [link] First textbox is rendered inside of SvelteKit, and works correctly. Second one is rendered in a…

### CASE-7579 · +server.ts API endpoint fails to parse body
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍3 💬10 · closed · labels: p0-urgent
- **Excerpt**: ### Describe the bug The only file new file in the blank svelte-kit project is the `+server.ts` located in `src/routes/api/+server.ts`. It just echoes the incoming JSON. Hitting `[link] (with `content-type` and `accept` headers set to `application/json` and body `{ "sample": "test"}` ) will return `HTTP 400 Bad request` -> and the request never hits the API endpoint. If I remove the content-type and accept headers it will enter the API endpoint but it would error out on `await request.json()` with: ``` Unexpected end of JSON input SyntaxError: Unexpected end of JSON input ``` It might be a…

### CASE-7581 · actions: generated `Action` type is unknown and `export let form` is not populated
- **Principles**: P-G4, P-E3 · **Env**: typescript, svelte
- **Signals**: 👍2 💬10 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug Not sure whether this is just me missing something. But a couple of things seem not to be working in a route with actions. In the page component: 1. The generated `ActionData` type seems stubbornly `unknown`. I tried restarting the typescript and svelte language servers, stopping and restarting `npm run dev`, `npm run check` and restarting VSCode, all to no avail. 2. The `export let form: ActionData` never seems to get populated after an invalid submission. ~~The form does work when it is valid, however.~~ The action does work as I wrote it, however, redirecting on…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7506 · skip optimizing `enhanced-img` in dev mode
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the problem Currently, any `<enhanced:img>` tags that are initialized with the component will have their images loaded before the component's own JavaScript. This means that the page is completely unresponsive until the very last image finishes loading. Combine this with prerendering and the user will be shown a completely-rendered page with buttons and everything - but clicking a button will do nothing because that one image way off the bottom of the screen hasn't finished loading yet. Delaying the creation of the `<enhanced:img>` tag solves this problem. For example, by placing…

### CASE-7566 · If page doesn't change, contents of props.data coming from the server load function will not update
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, windows
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug Data coming from the load function isn't responsive and it won't trigger update even if it changes. I can track it with $effect or obtain it manually using a button click for example, but the data won't be updated. This is making passing data between server load function and client impossible. ### Reproduction [link] Why would I need to create such a link that prevents default behavior? Because it opens a preview modal on normal click, but opens a page on ctrl click (in a new tab). ### Logs ```Shell ``` ### System Info ```Shell Windows 10, Chrome ``` ### Severity blocking…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7507 · SvelteKit Dev Server Infinite Loading
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬13 · closed · labels: vite
- **Excerpt**: ### Describe the bug When running the sveltekit application, the appllication running at `localhost:5173/` will infinitely load, even after all elements and network events have finished. ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Windows 11 10.0.22631 CPU: (16) x64 AMD Ryzen 9 7940HS w/ Radeon 780M Graphics Memory: 4.20 GB / 15.21 GB Binaries: Node: 20.11.1 - C:\Program Files\nodejs\node.EXE npm: 10.5.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Chromium (122.0.2365.92) Internet Explorer: 11.0.22621.1 npmPackages: @user/adapter-auto: ^3.1.1 =>…

### CASE-7515 · ESLint complains of unresolved when using $lib alias.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍1 💬13 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When using the $lib alias, ESLint complains. See `import/no-unresolved` ### Reproduction Create a `$lib` alias for your `lib` folder and import from there with ESLint set up. ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (8) x64 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz Memory: 4.28 GB / 15.65 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE npm: 8.1.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (103.0.1264.49) Internet Explorer: 11.0.19041.1566 npmPackages:…

### CASE-7535 · preloaded with link preload was not used within a few seconds. Warning
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, linux
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug On a Site build via @user/adapter-static Firefox puts strange warnings into the console. The resource at URL preloaded with link preload was not used within a few seconds. Make sure all attributes of the preload tag are set correctly. URL means usually something like: [link]]/_app/immutable/chunks/1-b645c4a1.js At first glance, this only seems to relate to files in the "_app/immutable" folder Browser: Firefox: 106.0.5 (64-Bit) OS: Linux Mint 21 The strange thing is, that Chrome does not do this. this is my package.json. [package.json.txt]([link]…

### CASE-7541 · If pollInterval detects a new version and I click on a not existent link it redirects sine fine
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, svelte
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug After [link] framework][ref] if I have an app with `adapter-static` with this config: ```ts version: { name: Date.now().toString(), pollInterval: 5 * 1000, } ``` if the polling detects the update and I click on a link for a page which doesn't exists instead of rendering the `__error.svelte` page it keeps in an infinite redirect. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19044 Binaries: Node: 16.14.0 - C:\Program Files\nodejs\node.EXE npm: 8.5.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan…

### CASE-7550 · Clicking hash link twice on Firefox breaks back navigation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, macos, desktop
- **Signals**: 👍1 💬11 · closed · labels: ready to implement
- **Excerpt**: ### Describe the bug This issue only occurs when using the desktop Firefox browser. Clicking a hash link twice then navigating to a new page causes the browser back navigation to change the URL but no navigation occurs. ### Reproduction [link] 1. Preview the website in a desktop Firefox browser. 3. On the same page, click the "Go to footer" hash link twice. 4. Navigate to a different page. 5. Press the browser back button. 6. The browser does not navigate back but the URL changes. ### Logs _No response_ ### System Info ```Shell System: OS: macOS 13.2 CPU: (8) arm64 Apple M1 Pro Memory: 3.76…

### CASE-7553 · Meta duplicate
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬11 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug Meta duplicate is back ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz Memory: 2.39 GB / 15.87 GB Binaries: Node: 16.0.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.10.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (107.0.1418.26) Internet Explorer: 11.0.19041.1566 npmPackages: @user/adapter-auto: next => 1.0.0-next.86 @user/adapter-vercel: ^1.0.0-next.81 => 1.0.0-next.81…

### CASE-7556 · SvelteKit doesn't support older browsers in development mode due to nullish coalescing operator usage in @[meta framework]/assets/client/start.js
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, firefox, android, svelte, mobile
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug See [link] framework]/blob/master/packages/kit/src/runtime/client/client.js where these two features are used: * Nullish coalescing operator - [link] * Optional chaining - [link] This is very problematic because browsers for mobile added support very late: * Chrome for Android supports it since April 27, 2022. * Firefox for Android support it since May 3, 2022. ### Reproduction - ### Logs _No response_ ### System Info ```shell - ``` ### Severity annoyance ### Additional Information _No response_

### CASE-7557 · app.d.ts and eslint 'App' is not defined.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, linux
- **Signals**: 👍0 💬11 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I am using App in this way, App.Stuff['some']. The problem is that when I run lint it does not recognize App. ![image]([link]) ### Reproduction 'App' is not defined ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 Kali GNU/Linux Rolling 2022.2 CPU: (8) x64 Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz Memory: 8.99 GB / 14.97 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 18.1.0 - ~/.nvm/versions/node/v18.1.0/bin/node Yarn: 1.22.18 - ~/.nvm/versions/node/v18.1.0/bin/yarn npm: 8.8.0 - ~/.nvm/versions/node/v18.1.0/bin/npm Browsers: Chrome:…

### CASE-7564 · Adding or deleting multiple cookies with the same name only modifies the last one
- **Principles**: P-G1, P-G2, P-G3 · **Env**: svelte, electron
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug When I try to set or delete multiple cookies that share the same name (but exist on different paths) using the `event.cookies` API, then only the last call is retained. I have found no work-around within SvelteKit, because the `event.setHeaders` API states: > You cannot add a `set-cookie` header with `setHeaders` — use the [cookies](vscode-file://vscode-app/nix/store/8bva31ihh6d877wqjp3f6scwnv8r99y9-vscodium-1.97.2.25045/lib/vscode/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) API instead. ### Reproduction A Server Load function like the following…

### CASE-7573 · Swipe to navigate back on iOS causes flicker of current page when `load` performs asynchronous work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: ios
- **Signals**: 👍12 💬10 · open
- **Excerpt**: ### Describe the bug Setup: using `adapter-node`, you have two pages that both have a `load` function, regardless of if it's in a `+page.(js/ts)` or `+page.server.(js/ts)`, and the load functions are not synchronous. You navigate from page A to page B, and then from page B, you swipe "back", to navigate back to page A. Initially, page A is shown, but it will flicker back to page B while the load function for page A is re-running. Below is an image of what happens visually, using the iOS simulator to demonstrate. [link] framework]/assets/5247826/9d65011e-aef0-4018-b580-21b513effa65 In this…

### CASE-7575 · Snapshots are not restored when navigating routes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, macos
- **Signals**: 👍9 💬10 · open
- **Excerpt**: ### Describe the bug The repro uses example code from [link] Refreshing the browser _does_ trigger a restore, but following links does not. ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: macOS 13.3 CPU: (8) arm64 Apple M1 Memory: 388.70 MB / 16.00 GB Shell: 3.6.0 - /opt/homebrew/bin/fish Binaries: Node: 18.14.2 - ~/Library/Caches/fnm_multishells/5166_1677921066571/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 9.5.0 - ~/Library/Caches/fnm_multishells/5166_1677921066571/bin/npm Browsers: Chrome: 110.0.5481.177 Firefox: 110.0.1 Firefox Developer…

### CASE-7580 · The new cookies API doesn't actually set cookies in Safari?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug I've migrated to SvelteKit 1.0.0-next.475 and its new cookies API, and logging into my website no longer works, cookies are no longer set at all. ### Reproduction [link] On the homepage I show the token which is stored in a cookie, which of course defaults to `undefined`. There is a link to a login page, which has a login button. This does a request to a local endpoint, which sets a cookie. It then redirects you back to the homepage, and that token should now be updated. In reality the token is still undefined, and looking at the cookies in the storage inspector, there is…

### CASE-7583 · Navigation protocol checks are breaking Tauri apps
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, svelte, desktop
- **Signals**: 👍4 💬10 · closed
- **Excerpt**: ### Describe the bug [Tauri]([link]) is an Electron alternative for bundling web content into a desktop application. When built, the release apps use `tauri:` as the internal URL protocol. Because of a [recent SvelteKit PR]([link] framework][ref]), navigation causes a complete page refresh instead of the expected routing. ### Reproduction Create a SvelteKit + Tauri app with any SvelteKit version after or including [1.0.0-next.398]([link] framework]/releases/tag/%40sveltejs%2Fkit%401.0.0-next.398). Navigation causes a complete page refresh. (Manual navigation using `goto` still works…

### CASE-7588 · Netlify Identity not working when using Edge Functions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, firefox, svelte, vite
- **Signals**: 👍0 💬10 · closed · labels: pkg:adapter-netlify
- **Excerpt**: ### Describe the bug When using `adapter-netlify` and enabling the experimental Edge Functions, Netlify Identity doesn't work. The `[link] path gets a 404 from SvelteKit, but it should be handled by Netlify (or at least I think so). Using the adapter without the Edge Functions enabled doesn't break Netlify Identity. ### Reproduction [Stackblitz fork]([link]). 1. Create a project on Netlify. 2. Enable [Identity]([link]) and [Git Gateway]([link]). 3. Try to login at /admin (or invite yourself and try to accept the invite) ### Logs ```shell The Firefox browser console shows `[XHR] GET [link]…

### CASE-7593 · Endpoints /.well-known/* are not included
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, ios, linux
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: ### Describe the bug We are hosting some endpoints under the `/.well-known/` path prefix, this prefix is quite standard and enforced by Android et iOS domain checks. During the "adapt" phase, endpoint files are not copied by the builder `writeServer()` funnction. Paths starting with a dot are explicitly [filtered out]([link] framework]/blob/master/packages/kit/src/core/adapt/builder.js#L138-L142). ### Reproduction I created a reproduction app there [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.16 Arch Linux CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7511 · fetch from *.svelte (e.g. in button click) triggers repeated console warning not to use window.fetch
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍5 💬13 · closed
- **Excerpt**: ### Describe the bug Since some recent sveltekit versions I am getting repeatedly the following developer warning in the browser console: Loading /api/test?id=123 using `window.fetch`. For best results, use the `fetch` that is passed to your `load` function: [link] This is triggered by a simple fetch('/api/test') from +page.svelte, *after* page load, so to reproduce place such a fetch() call in to a button click. I am facing the exact same issue as in the mentioned in this stackoverflow link: [link] Sidenote: Other than stated on stackoverflow, changing the GET request into PUT does not avoid…

### CASE-7520 · URL encode references to JS files with brackets
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: linux, svelte
- **Signals**: 👍1 💬13 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug Filenames containing brackets `[]` are allowed on all major file systems, but not in URLs. Files, which are compiled from pages with dynamic parameters, cannot be correctly referenced by JAVA-based frameworks or servers, because they apply RFC3986 very strictly. For more context, see [this Stack Overflow comment]([link]) and [this Quarkus issue]([link]). ### Reproduction Repository: [repro-quarkus-sveltekit-badrequest]([link]) For reproduction, you will need Java 11. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.12 Arch Linux CPU: (8) x64 Intel(R)…

### CASE-7524 · Optional params/zero-length rest routes
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: next.js, svelte
- **Signals**: 👍20 💬13 · closed · labels: router
- **Excerpt**: Via [this Stack Overflow question]([link]). It would be nice if there was a way to do optional parameters — e.g. `/foo`, `/fr/foo` and `/ca/fr/foo` all resolving to the same page component (where `fr` is a named `lang` parameter and `ca` is a named `country` parameter). @user from the Next.js team had a neat idea — we could mark optional parameters with double brackets: `routes/[[country]]/[[lang]]/foo.svelte` At the same time, it might be nice if `routes/[...parts]/foo.svelte` matched all those pathnames. At present it will match `/fr/foo` and `/ca/fr/foo` but not `/foo`.

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7518 · Automated deployments of the kit example app (i.e. vercel, netlify, cloudflare) fail with 50x
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬13 · closed · labels: help wanted/p1-important
- **Excerpt**: ### Describe the bug Looking for guidance on how to deploy to Cloudflare. Tried the 'official' example deployment from "kit/packages/create-svelte/templates/default". All 3 targets produce one or another 50x code on execution and fail correct function when manipulating TODO's. Console Logs below, server logs not accessible to me. - cloudflare 500's when attempting to modify the done state of a todo - netlify 502's on opening the .../todos route - vercel 500's on attempting to add a todo ### Reproduction No special setup required. Simply browse to one of the links below, open browser console…

### CASE-7528 · Remote Function Form typechecking does not work with `variant` / `discriminatedUnion`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍1 💬12 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug Hi, in my schema, I depend on valibot's `variant` (I believe that is [Zod's `discriminatedUnion`]([link])) quite a lot. This allows you to define conditions (if the user has selected type a earlier, ask for email, otherwise ask for telefone). ~~However, this does not work on the frontend. Or maybe I'm just doing it wrong?~~ EDIT: It actually does work on the frontend if you do `myForm.fields.myField.value == "type1"` in the condition, but TypeScript complains (see below). ### Reproduction [link] ~~I'd expect that those properties either always exist or exist…

### CASE-7531 · Sveltekit 2 + adapter-node 2 unable to disable prerender, '$env/dynamic/private' used in hooks.server.ts
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍9 💬12 · closed
- **Excerpt**: ### Describe the bug Migration to SvelteKit 2, updated adapter-node to v2. Modified src/routes/+layout.server.ts to `export const prerender = false;` and added `config.kit.prerender.crawl = false` and `config.kit.prerender.entries` = [] to the svelte config. Importing a dynamic `$env/dynamic/private` in hooks.server.ts because the variable is optional (typically use dynamic variables for items not strictly sensitive, e.g. username, hosts, ids, where the default value is committed to the repo). ``` import { env } from '$env/dynamic/private'; export const DBHOST = env.DBHOST || '[link] ```…

### CASE-7538 · $env/static/private can be imported in client modules
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug If I understood correctly, mechanisms should be in place that prevent $env/static/private to be imported in client modules (like routes). However, this does not seem to be the case. I can import from $env/static/private and the variables get transpiled into the client side javascript modules. My excuses if this feature is not yet supposed to work. ### Reproduction A simple repo showing the issue: [link] [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 8.81 GB / 31.81 GB…

### CASE-7544 · page.url not reactive on the new $app/state module.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte, typescript
- **Signals**: 👍5 💬11 · closed
- **Excerpt**: ### Describe the bug When you try to hear for changes on `page.url` using `$derived` it won't work. For example If ones has a `+page.svelte` that wants the value of a `searchParams` like this: ```typescript const currentPage = $derived(page.url.searchParams.get("page") || ""); ``` And then you update the `searchParams` using `goto`: ```typescript const { url } = page; url.searchParams.set('page', newPage); goto(url, { replaceState: true, noScroll: true, keepFocus: true, invalidateAll: true }) ``` The value of `currentPage` won't be updated it. I tried multiple combinations of this, and the…

### CASE-7548 · When setting prerender to auto, $env/dynamic/public contains build-time environment variables
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed · labels: $app/env
- **Excerpt**: ### Describe the bug `$env/dynamic/public` is supposed to contain the environment variables set at runtime. However, when setting `export const prerender = 'auto'`, it contains static build-time environment variable values instead. ### Reproduction ### `src/routes/+page.js` ```svelte export const prerender = 'auto'; export const ssr = false; ``` ### `src/routes/+page.svelte` ```svelte <script> import { env } from '$env/dynamic/public'; </script> {JSON.stringify(env)} ``` ### build & run ``` /tmp/bug-env-app via  v16.20.2 ❯ PUBLIC_XXX='I am the build-time value' npm run build [...] ✓ built in…

### CASE-7562 · manage focus, and use aria-live to announce navigation
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: [link] basically. There are two separate issues to consider in order to make client-side routing accessible: ## 1. Managing focus In a server-rendered app, any time you navigate to a page, the `<body>` is focused. In Sapper and SvelteKit apps, we blur the current `activeElement` upon navigation, but this doesn't actually _reset_ the focus, which is what we need — it just removes it temporarily. As soon as you press the tab key (or shift-tab), focus moves to the element after (or before) whichever element was focused prior to the navigation, assuming it still exists in the DOM. This is not…

### CASE-7563 · Client runtime error `Cannot read properties of undefined (reading 'env')` after upgrade to `@[meta framework]@user.37.x` (adapter-node, runtime YAML envs)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍7 💬10 · closed · labels: pkg:adapter-node
- **Excerpt**: ### Describe the bug ## Summary After upgrading from: - `@[meta framework]@user.27.0` → `@[meta framework]@user.37.0` - Edit: the errors appear on `2.36.3`, up until `2.36.2` there are no errors my production app (built with `adapter-node` and deployed to GCP, where runtime env vars are passed via YAML) throws a client-side runtime error: ```typescript TypeError: Cannot read properties of undefined (reading 'env') ``` This error **only** appears in the production deployment that uses runtime YAML-injected environment variables (Cloud Run/GCP) and when running the docker container using…

### CASE-7572 · Reassigning variables/reactive declarations breaks reactivity on other instances of the component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hi, I have a `PostMenu` component attached to a list of posts (via for loop), and the component has a reactive like button that updates with on:click. But the problem is that when there are multiple instances of the same component the reactivity breaks on all of them except the last one that stays reactive. ### Reproduction Repo [link] precisely `src/routes/(app)/app/+page.svelte` and `src/lib/components/PostMenu.svelte` - `npm run dev` - go to the route where the component is initialized `/app` - list more than 1 post element (This should break reactivity on all…

### CASE-7574 · Textfield is empty after form submit with use:enhance
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍4 💬10 · closed · labels: p3-edge-case/forms/ready to implement
- **Excerpt**: ### Describe the bug I am using a form to save some string into the db. When the form loads, the load function supplies the old string from db. After sending the form (with use:enhance) the textarea is empty. What else: -> without use:enhance it works as intended -> the variable holds the correct content -> an input type=text showed the same behaviour ### Reproduction ```svelte <script lang="ts"> import { enhance } from '$app/forms'; export let data; let content = ""; // When setting content directly, each keystroke triggers the content setting. You cannot type. This way, the reactive //…

### CASE-7596 · explicit config of adapter to null result to error `Cannot read property 'adapt' of null`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: wontfix
- **Excerpt**: **Describe the bug** Let say I use env variable to decide what adapter to use and as default value I want to use null (which is default value by documentation), when I set explicitly adapter to null in config, it throws error: **Logs** ``` Cannot read property 'adapt' of null TypeError: Cannot read property 'adapt' of null at Object.validate (file:///mnt/sda1/Programovanie/test/node_modules/@[meta framework]/dist/cli.js:181:48) at validate (file:///mnt/sda1/Programovanie/test/node_modules/@[meta framework]/dist/cli.js:583:28) at validate…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7523 · Make cache headers configurable for contents of `static`
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: **Describe the bug** Cache Headers for images in the static folder are set to `public,max-age=0,must-revalidate`. This happens even in production builds (`svelte-kit build, svelte-kit start`). **Logs** ![image]([link]) **To Reproduce** Prepared a example repo. [link] **Expected behavior** As far as i understand the code, cache headers should be set to immutable. Am i missing something here? **Thanks for the great work guys. Keep it up!** ![PixelPepeFedora]([link])

### CASE-7527 · LazyFile not usable with zod z.file() validator in remote "form" function data in dockerised environment
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬12 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I am testing out remote funcions 'form' function with an input zod schema for validating the form data like this: ```typescript //auth.ts export const registerForm = z .object({ email: z.email(), firstName: z.string().nonempty(), lastName: z.string().nonempty(), password: z.string().min(MINIMUM_PASSWORD_LENGTH).max(MAXIMUM_PASSWORD_LENGTH), passwordConfirm: z.string(), avatar: z.file().max(5_000_000).mime(["image/png", "image/jpeg"]) }) .refine((data) => data.password === data.passwordConfirm, "Passwords do not match"); ``` Which is used like this: ```typescript…

### CASE-7532 · Cannot access '<Function name>' before initialization
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed · labels: blocked by upstream
- **Excerpt**: ### Describe the bug The app builds fine, but if two routes use the same *.svg asset and the same function from $lib I get the error that the function can't be accessed before initialization. ### Reproduction #### Repo [link] #### Files src - lib/ - api.ts - circle.svg - routes/ - +page.svelte - one/ - +page.svelte - two/ - +page.svelte > routes/+page.svelte ``` <a href="/one">one</a> <a href="/two">two</a> ``` > routes/one/+page.svelte ``` <script lang="ts"> import circle from '$lib/circle.svg'; import { getURL } from '$lib/api'; getURL(); </script> <img src={circle} alt="circle" width="35"…

### CASE-7533 · Testing Cloudflare Bindings locally
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬12 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Hello. I'm facing a problem which is related to Cloudflare Bindings when using SvelteKit. The [documentation on bindings]([link]) is rather vague. There is a note at the end stating: ![image]([link] framework]/assets/17788124/13548bc4-0e3f-44ee-bc27-952cdf8017c9) Assuming I'm on right track, `wrangler` can be used to serve SvelteKit in development locally as: > `wrangler pages dev -- npm run dev` It will proxy request to SvelteKit. However, to include the binding, I can use (_for example KV_): > `wrangler pages dev --kv=TODO -- npm run dev` I states : > Your worker has…

### CASE-7539 · Assets are not included for the server (adapter-node)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍8 💬12 · closed · labels: vite/ready to implement
- **Excerpt**: ### Describe the bug # Bug If you import an image on the server (e.g. in an endpoint), the file path will point to a non-existent file. ``` js import Image from '$lib/svelte-welcome.webp'; console.log(Image); // /_app/immutable/assets/svelte-welcome-c18bcf5a.webp ``` When looking in `/build/client/_app/immutable/assets` folder, the file is not included. # Use case 1. I am using `node-canvas` on the server and in this case, I need to place an image on the canvas, so I need the image path 2. This is not an asset that I want to share publically, which is why I don't want to have it in the…

### CASE-7546 · `@user/enhanced-img` causes a coredump
- **Principles**: P-A3, P-H1 · **Env**: linux, svelte
- **Signals**: 👍2 💬11 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Using `@user/enhanced-img` causes the server to fail with this message: ``` munmap_chunk(): invalid pointer [1] 341224 IOT instruction (core dumped) pnpm dev ``` ### Reproduction - Install a fresh version of sveltekit, then add `@user/enhanced-img` and set it up as described [in the docs]([link]). - Run `pnpm run dev`. - Browse [link] - Watch the terminal for the error. ### Logs _No response_ ### System Info ```Shell System: OS: Linux 6.6 Arch Linux CPU: (8) x64 Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz Memory: 5.85 GB / 15.58 GB Container: Yes Shell: 5.9 - /usr/bin/zsh…

### CASE-7549 · Sveltekit demo project deployed to Heroku gives HTTP 416, when using Linkedin Post Inspector
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed · labels: pkg:adapter-node
- **Excerpt**: ### Describe the bug Prerendered pages deployed to Heroku with the `@user/adapter-node` gives 416 error: <img width="1256" alt="Screenshot 2023-03-28 at 21 10 20" src="[link]> ### Reproduction To reproduce this issue, I created [this]([link]) repo. it's deployed to [this]([link]) Heroku app. Try to use the LinkedIn post inspector for the about pre-rendered [route]([link]), and you get the HTTP 416 error. ### Logs ```Shell The heroku app just give the following logs: 2023-03-28T19:12:10.014096+00:00 heroku[router]: at=info method=GET path="/about" host=linkedin-test.herokuapp.com…

### CASE-7551 · Support CSP `require-trusted-types-for`
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍5 💬11 · closed · labels: p3-edge-case/ready to implement
- **Excerpt**: ### Describe the problem Even though `require-trusted-types-for` seems to be present in the list of CSP directives in the configuration, setting it (to `script`, which is its only value) will actually cause SvelteKit to fail to function properly: ![image]([link]) ### Describe the proposed solution I don't know much about this directive but it seems like what is assigned to `innerHTML` properties and whatnot, must be a special "trusted" type — see [this article]([link]). SvelteKit (or probably Svelte, more specifically) does do a lot of these things (e.g. changing `innerHTML` properties and so…

### CASE-7558 · HTTP 403 response with valid route component called `tests.svelte` in dev
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬11 · closed · labels: vite/p2-nice-to-have
- **Excerpt**: ### Describe the bug With a route component called `tests.svelte`, I'm seeing the following warning **in dev only**. <img width="662" alt="image" src="[link]> When I run this in Stackblitz or similar, I don't see this issue when I hit the `/tests` route directly, but in a brand-new local SvelteKit project (either the skeleton or the demo), I see it. The other slightly strange thing is that when I click through a link to this route from an index page, the page renders as expected, no errors at all. When I reload `/tests`, this error shows. Bug could be in vite's dev server rather than…

### CASE-7567 · Uncaught (in promise) Svelte error: effect_orphan `$effect.pre` can only be used inside an effect (e.g. during component initialisation)
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug ![Image]([link]) Root refers to this: ```svelte <!-- This file is generated by @[meta framework] — do not edit it! --> <svelte:options runes={true} /> <script> import { setContext, onMount, tick } from 'svelte'; import { browser } from '$app/environment'; // stores let { stores, page, constructors, components = [], form, data_0 = null, data_1 = null } = $props(); if (!browser) { setContext('__svelte__', stores); } if (browser) { $effect.pre(() => stores.page.set(page)); } else { stores.page.set(page); } $effect(() => {…

### CASE-7571 · `<picture />` elements generated by `@user/enhanced-img` cannot be styled
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍19 💬10 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the problem Classes/styles applied to `<enhanced:img />` elements are applied to the contained `<img />` element, not the outer container. This makes grid/flex layouts hard to manage without a wrapper element. ```html <enhanced:img class="grid-item" /> ``` becomes ```html <picture> <img class="grid-item" /> </picture> ``` ### Describe the proposed solution The `<picture />` element could be marked as `display: contents`, or maybe classes/styles could be applied to the `<picture />`. The example above could become either ```html <picture style="display:contents"> <img…

### CASE-7576 · (Better) Node.js builtin emulation for client-side JS
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬10 · open · labels: documentation
- **Excerpt**: ### Describe the problem I've found many NPM packages that almost work in SvelteKit client-side JS, but their access to node builtins like `process` and `buffer` results in errors. For example: - `ReferenceError: process is not defined` ([json-schema-to-zod]([link])) - `ReferenceError: process is not defined` ([google-photos-album-image-url-fetch]([link])) - `Module "path" has been externalized for browser compatibility. Cannot access "path.extname" in client code.` ([gphotos-scraper]([link])) There is a work-around for these errors, but it's neither obvious nor simple: - [Fix for local dev…

### CASE-7582 · Regression in @user/adapter-auto from v0.66 to v0.67 on Netlify (adapter-netlify version from v72 to v73): The package "esbuild-linux-64" could not be found, and is needed by esbuild.
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I updated `@user/adapter-auto` from 66 to 71 and my build went from working to failling: [sw-yx/swyxkit@`8ffe753` ([ref])]([link]) ![image]([link]) I then reverted versions from 71 all the way back down to 67 and 66 and the only working version was 66 (corresponding adapter netlify version is going from 72 (working) to 73 (not working). <details> <summary> it seems that when upgrading to those versions, a bunch of transitive esbuild linux dependencies get deleted and this is the cause of the error </summary> ![image]([link]) </details> ### Reproduction [link] not a…

### CASE-7584 · +page.server.js no longer uses/respects setHeaders
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬10 · closed
- **Excerpt**: ### Describe the bug Since [this commit]([link] framework]/commit/c530d33793a228fac684c71ed7926e6217101a90) the `+page.server.js` endpoints return a js file rather than json. This js file response no longer uses the headers set with the `setHeaders` function. This means we can't use cache-control etc. ### Reproduction To reproduce, hover over the 'TODOS' menu item and observer the '__data.js' response headers. There should be a header as defined in `routes/todos/+page.server.js`; [link] <img width="1224" alt="Screenshot 2022-08-31 at 17 29 32" src="[link]> ### Logs _No response_ ### System…

### CASE-7586 · Static Adapter not generating index.html with proper script links for GH-pages deploy
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have been trying to get a portfolio using svelte to deploy to GH-pages and no matter what configuration I use in the adapter I can't get it to load the .js files on the deployed site post build. The index.html generated in the build has /_app/immutable/{generatedfile}.js as failing to load. ### Reproduction I was able to reproduce the bug with a skeleton svelte app that I added two dummy pages and only the dependencies needed to use the static adapter. I am seeing the same results. See screenshots below: index.html generated from build ![image]([link]) svelte.config.js…

### CASE-7594 · [BUG]: svelte-store state is saved and shared between browsers
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug I really don't know how to describe the bug or how it even works... or maybe I was even doing this the wrong way but... svelte-store states are shared between browsers so I assume that it's saved in the server and it's returning it every response... it's hard for me to explain as I don't really know how SvelteKit works under-the-hood (**BTW: We should document that**)... I've uploaded a video the shows the problem... [WARNING: Tagged as mature because video is full of light flashes (FOUC)]([link]) ### Reproduction [link] ### Logs ```shell no errors on browser console, and…

### CASE-7598 · 7x build times compared to Sapper spent on logging link response codes
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: **Describe the bug** Build times increased 7x from Sapper to SvelteKit with adapter static. **To Reproduce** Using ```json "@user/adapter-static": "^1.0.0-next.11", "@[meta framework]": "^1.0.0-next.109", ``` I ran `svelte-kit build --debug` and noticed that the vast majority of that time seems to be spent checking the response code (or some other tasks) for every image on the site (see build log below). The site is hosted on Netlify with [public deploy logs]([link]) and [open source]([link]) in case that helps. **Expected behavior** SvelteKit should take roughly the same time as Sapper to…

### CASE-7599 · img on:error not fired
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Describe the bug** If img cannot be loaded - on:error is not fired, refresh page is not helping. If modify code and let hmr update page contains img with on:error - error is fired. **Logs** **To Reproduce** [[link]]([link]) **Expected behavior** on:error must be fired. **Stacktraces** **Information about your SvelteKit Installation:** ``` System: OS: Windows 10 10.0.17763 CPU: (12) x64 AMD Ryzen 5 2600 Six-Core Processor Memory: 12.90 GB / 15.93 GB Binaries: Node: 14.16.0 - d:\portable\node\node.EXE npm: 6.14.11 - d:\portable\node\npm.CMD npmPackages: @[meta framework]: next =>…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7525 · query.live connections are only released by garbage collection
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍3 💬12 · open
- **Excerpt**: ### Describe the bug A `query.live` connection cannot be closed from app code: the proxy exposes `reconnect()` but no `disconnect()`/`close()`. This presents an issue, because browsers cap HTTP/1.1 at ~6 connections per origin. Dev servers are also usually using HTTP/1.1 and hence limited to HTTP/1.1, so it's relatively easy to reproduce. I have one page with 5 live queries and another with 1 — navigating through both leaves 6 zombie streams from unmounted components, and the SPA deadlocks until a full refresh or the eventual garbage collection. The fix already exists: the inner `LiveQuery`…

### CASE-7552 · Docs clarification for form action errors
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the problem The docs around form actions, in particular errors therein, might be incomplete or incorrect. The bullets in [this section]([link]) imply that an error in a form action, with or without progressive enhancement, will trigger the nearest error boundary. This seems like extremely questionable design, since it would cause existing UI to unmount, and show an error screen if a form failed to post, rather than just showing the existing UI, along with an error message of some sort. Fortunately I've been unable to actually cause this to happen, which makes me hope perhaps the…

### CASE-7577 · Memory leak if add external fetch inside load function
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: blocked by upstream
- **Excerpt**: ### Describe the bug Very fast memory leak, basically we hold all response strings and all fetch data from remote servers. It seems like because we have circular links for abort callback inside node-fetch(it uses WeakRef and etc, but it's not working). ![изображение]([link]) ![изображение]([link]) ### Reproduction Create a new test project from the starter and add into +layout.server.js the load function: ``` import { error } from '@[meta framework]'; /** @user {import('./$types').LayoutServerLoad} */ export async function load({ fetch }) { let res; try { res = await fetch( `[link] {…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-7568 · docs: Setting up client global state
- **Principles**: P-A5 · **Env**: react, svelte
- **Signals**: 👍14 💬10 · open · labels: documentation
- **Excerpt**: ### Describe the bug Setting up client global state is a footgun. (see [link] framework]/discussions/4339). Almost 3 years and users are still confused about how to do it safely. I want to add this pattern to the docs. This should also help clear up confusion around [server shared state]([link]). On top of that, it resolves optimistic UI issues mentioned in [link] framework][ref]. To summarize, this pattern provides a state that can be updated from the server and the client, is in sync across child components, has type safety and is safe from data leaks. ```ts // ReactiveState.svelte.js…

### CASE-7569 · Contents of div containing %sveltekit.body% no longer replaced in SvelteKit 2.5.5
- **Principles**: P-A5, P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, typescript
- **Signals**: 👍1 💬10 · closed · labels: breaking change
- **Excerpt**: ### Describe the bug I have an SPA mode app using adapter-static. My `app.html` file contains the following inside the `<body>` tag: ```html <div style="display: contents"> <div class="loading-animation"> <div></div> <div></div> </div> %sveltekit.body% </div> ``` Up to SvelteKit 2.5.4, the `loading-animation` div was removed from the DOM when the SvelteKit app finishes loading. However, this no longer works in SvelteKit 2.5.5, and the loading animation continues to display on top of the loaded app. ### Reproduction My top-level `+layout.ts` file contains: ```typescript export const ssr =…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7592 · `vite.moduleGraph.safeModulesPath` contents are... weird
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite, svelte
- **Signals**: 👍0 💬10 · closed · labels: vite
- **Excerpt**: ### Describe the bug This is a bit of an odd one — it's not causing any problems per se, and the fault _probably_ lies with Vite, but I haven't succeeded in reproducing it in Vite without Kit, so I'm raising it here instead. Vite's `moduleGraph` has a `safeModulesPath` set of paths that (I think) have been determined to be safe to serve. But the paths are truncated. When I log them out, a typical list looks like this: ```json [ "elte-kit/dev/generated/root.svelte", "elte-kit/dev/generated/manifest.js", "e_modules/.vite/svelte.js", "elte-kit/dev/runtime/chunks/utils.js",…

