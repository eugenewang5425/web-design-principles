# Case Chunk 067 — Round 67

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7601 · Remote Functions: form update clears inputs on second submit
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬9 · open · labels: forms
- **Excerpt**: ### Describe the bug ### 💡 simple case When using a simple remote function form to update data, the first submit or when data changes or triggers validation works as expected. when submitting the same input value, the value is set to an empty string. ### 🤓 more context when client side routing is involved or redirects (server), the state in the client is not reflecting what the remote functions return. often it's the last state or the state when component was first visited. ### 🤷‍♂️ probably skill issues i'm not sure if I just don't get how to correctly use form in an update scenario, so…

### CASE-7602 · Remote form: Coercing checkbox values to number doesn't work
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬9 · open · labels: forms
- **Excerpt**: ### Describe the bug Currently the coersion of checkbox values doesn't consistently work (zod or valibot). Given the following code: ```svelte <!-- src/routes/+page.svelte --> <script lang="ts" module> import * as z from 'zod' import { buyStocks } from './stocks.remote.js' const buyStocksSchema = z.object({ stockIds: z.array(z.coerce.number<string>()).min(1) }) const availableStocks = [ { id: 1, name: 'Google' }, { id: 2, name: 'Amazon' }, { id: 3, name: 'Netflix' }, ] </script> <form {...buyStocks}> <div> {#each availableStocks as stock} <label> <input…

### CASE-7613 · Dev Server endpoint does not send the body of a multipart/form-data request to a FastAPI Endpoint
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I don't know if this is the correct place to post this issue, but when I sent the same form-data using `curl`, the Azure Functions app correctly received and processed the data. The client accepts a file from the user which is then sent to a server end point as `multipart/form-data`. Then, the server attaches the API authentication key to the received `FormData` and forwards it to the Azure Functions app. The problem is when the server sends the request to the Functions App, it does not send the body of the request, causing the functions app to return a `500 Internal…

### CASE-7626 · use:enhance breaks forms that are not method=POST
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug A form with no method (or method=get) cannot have a use:enhance directive. The presence of such a directive causes the form to attempt to submit with a POST, and errors out. ### Reproduction [link] repro should be self-explanatory - type in the box and hit enter. ### Logs ```Shell 500 Unexpected token '<', "<!DOCTYPE "... is not valid JSON SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON at JSON.parse (<anonymous>) at deserialize ([link] framework]/src/runtime/app/forms.js?v=857c15ff:21:22) at HTMLFormElement.handle_submit ([link]…

### CASE-7648 · [Remote Function] form not clear validation error
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug I have a dialog that destroys the form when it closes, but when I reopen it, the validation issues are still there. I expected something like `createPost.fields.reset()` to clear the issues. How can I fully reset the validation state when reopening the dialog? ### Reproduction ``` {#each createPost.fields.content.issues() as issue} <p class="issue">{issue.message}</p> {/each} ``` ### Logs ```Shell ``` ### System Info ```Shell System: OS: Windows 11 10.0.26200 CPU: (12) x64 AMD Ryzen 5 3600 6-Core Processor Memory: 25.31 GB / 47.92 GB Binaries: Node: 24.11.1 - C:\Program…

### CASE-7649 · Form remote function broken if a field name contains dashes
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍1 💬8 · open · labels: forms
- **Excerpt**: ### Describe the bug A field name containing dashes like `my-field-name` causes the form submission to fail. ### Reproduction [link] ### Logs ```Shell Uncaught (in promise) Error: Invalid path field-with-dash at split_path (form-utils.js?v=f53a3d90:74:9) at set_nested_value (form-utils.js?v=f53a3d90:22:19) at convert_formdata (form-utils.js?v=f53a3d90:61:3) at convert (form.svelte.js?v=f53a3d90:90:17) at handle_submit (form.svelte.js?v=f53a3d90:105:17) at HTMLFormElement.<anonymous> (form.svelte.js?v=f53a3d90:295:36) ``` ### System Info ```Shell System: OS: macOS 15.5 CPU: (8) arm64 Apple M2…

### CASE-7664 · Formdata Spanish accents or other special characters don't show up as one would expect
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: blocked by upstream/forms
- **Excerpt**: ### Describe the bug When creating fomData with name fields with accents such as the word "Género", when parsing in the server it shows up as garbled text such as "GÃ©nero". I believe the the behavior would be that it would show up as "Género", but please correct me if I am wrong. ### Reproduction Link to the reproduction below in the following repo: [link] I created a minimal sveltekit repo that has two input fields and a submit button using use:enhance. Once the data is submitted I have. validate action that receives it and upon inspecting the data in the server it can be seen that the…

### CASE-7665 · options.manifest._.nodes[0] is not a function
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug If run `npm run preview` with `prerender = true` on all pages, a "options.manifest._.nodes[0] is not a function" error comes up if request a non-existent page. ### Reproduction 1. `npm create svelte@user my-app && cd my-app && npm install` 2. Select `Skeleton project` 3. `echo "export const prerender = true" > src/routes/+layout.js` 4. `npm run build && npm run preview` 5. Open app in browser and navigate `/123` ### Logs ```Shell TypeError: options.manifest._.nodes[0] is not a function at respond_with_error…

### CASE-7666 · URI decoding of routes does not work except for select few characters
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When there is %-encoded character in pathname decodable by `decodeURI`, server sends 200 response for pages and 404 for static files (+page.js, +page.svelte etc.) ### Reproduction [link] 1. Click on `goto /%5b` 2. Expected: `this is %5b`. Received: glitch, `this is %5b` changes to `500 internal error`. Inside network inspector you can see that `GET /%5b/+page.svelte` fails with 404. ### Logs ```Shell Not found: /src/routes/%5b/+page.svelte Error: Not found: /src/routes/%5b/+page.svelte at resolve…

### CASE-7668 · `Not found: /__data.json` when use form actions with `use:enhance`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍9 💬8 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug I have this code: ```svelte <!-- routes/+page.svelte --> <script> import { enhance } from '$app/forms'; </script> <form method="POST" use:enhance> <input type="text" name="text" id="textid" /> <button type="submit">submit</button> </form> ``` ```js // routes/+page.server.js export const actions = { default: () => { return { success: true }; } }; ``` when I submit the form, the following error occurs: ```bash Not found: /__data.json Error: Not found: /__data.json at resolve (file:///C:/Users/dange/Documents/dev/sveltekit/node_modules/@[meta…

### CASE-7694 · tsconfig.json error: Cannot write file 'src/service-worker.js' because it would overwrite input file
- **Principles**: P-G4, P-E3 · **Env**: vite, typescript
- **Signals**: 👍0 💬8 · closed · labels: types / typescript
- **Excerpt**: **Describe the bug** Reading [the docs about service worker]([link]) I added an empty `service-worker.js` in my `src` dir. I need it empty so vite sees it and produces the code to register it in the final bundle (I will fill in the file afterwards). But now my (default) `tsconfig.json` is complaining with: ``` { "resource": "/c:/kit/tsconfig.json", "owner": "typescript", "severity": 8, "message": "Cannot write file 'c:/kit/src/service-worker.js' because it would overwrite input file.", "source": "ts", "startLineNumber": 1, "startColumn": 1, "endLineNumber": 1, "endColumn": 2 } ``` **Why?**…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7603 · `pnpm build` takes forever then exits with error when `config.kit.prerender.handleHttpError` is set
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hi, I just made a static site and set `config,kit.prerender.handleHttpError` according to the docs. However, the build command takes a lot of time and then just exits with an error (see logs below) ### Reproduction in the root `+layout.svelte`, add the following: ```svelte <svelte:head> <meta property="og:title" content={dynamic_title} /> <meta property="og:description" content={dynamic_desc} /> <meta property="og:url" content={page.url.origin} /> <meta property="og:image" content="{page.url.host}/{a_path_to_svelte_kit_static_content}" /> </svelte:head> ``` Then, my…

### CASE-7605 · Typescript error when `resolve` has a query string parameter
- **Principles**: P-A3, P-H1 · **Env**: macos, typescript, svelte, webpack
- **Signals**: 👍4 💬9 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug This is fine: <img width="708" height="166" alt="Image" src="[link] /> This should be fine, but is not: <img width="1488" height="178" alt="Image" src="[link] /> ### Reproduction Use the new `resolve` function with a query string parameter in the first parameter's string. ### Logs ```shell ``` ### System Info ```shell npx envinfo --system --npmPackages svelte,rollup,webpack --binaries --browsers System: OS: macOS 15.5 CPU: (8) arm64 Apple M2 Memory: 227.25 MB / 16.00 GB Shell: 3.7.1 - /Users/m/.local/share/devbox/global/default/.devbox/nix/profile/default/bin/fish…

### CASE-7609 · SvelteKit doesn't work well with Google Tag Manager
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug GTM correctly loads at the beginning <img width="604" alt="Screen Shot 2024-01-28 at 12 39 22" src="[link] framework]/assets/70304839/d15f128a-118b-4a25-a724-7b924f2413b1"> However, it's not able to detect events of clicking on links and can only detect the first form event; any form submits after the first one is not recorded. ### Reproduction [Github Repo]([link]) [sk-gtm-bug.pages.dev]([link]) Summary code: ```ts <script lang="ts"> // @user import { PUBLIC_TAG_ID } from "$env/static/public"; import { onMount } from "svelte"; onMount(() => { window.dataLayer =…

### CASE-7615 · Memory Leak on Fetch from Undici is still present
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: ios, svelte
- **Signals**: 👍0 💬9 · closed · labels: pkg:adapter-node
- **Excerpt**: ### Describe the bug ![image]([link] framework]/assets/37052068/86cc2861-b8eb-4750-86b0-37be2daee681) You will see from this chart that my memory is leaking, and it gradually rises, the dips are from me restarting the server. I have had to install axios and use that instead of the sveltekit and native fetch because undici is being annoying. There was already an issue on this, but it got closed so I am rementioning it here. It appears if you use adapter node ### Reproduction 1. Use adapter node 2. Have somewhere in your code use fetch() api but on the server side, such as on any…

### CASE-7616 · "500 Internal Error" in Vercel.
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have a basic Sveltekit app using Pocketbase as a backend/db. I am using form actions to register and login users, which seems to be working ok. However, when trying to load data from pocketbase using +page.svelte/+page.ts and the load function, everything works perfectly in a dev server, but throws "500 Internal Error" when deployed to Vercel Here is the code to +page.svelte and +page.ts ![image]([link] framework]/assets/61082194/6d34ec3e-6ab2-4d62-8922-248f899dba71) On the left is the dev server, on the right is Vercel (prod), before user is logged in: ![image]([link]…

### CASE-7617 · adapter-cloudflare generates very inefficient _routes.json which hits rules limits
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬9 · closed · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug `@user/adapter-cloudflare` generates a quite inefficient `_routes.json` while cloudflare pages can only handle up to 100 rules. This ends up with this kind of warning: ``` Function includes/excludes exceeds _routes.json limits (see [link]). Dropping 67 exclude rules — this will cause unnecessary function invocations. ``` For instance, the below directory structure: ``` static/images/{a,b,c,d,e}.png static/fonts/{a,b,c,d,e}.otf ... ``` will list individual files and result into the below `_routes.json` exclude ``` images/a.png ... images/e.png fonts/a.otf ... fonts/e.otf…

### CASE-7619 · adapter-cloudflare ignores `_redirects` config for cloudflare pages
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍5 💬9 · closed · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug Cloudflare provides functionality to handle redirects using `_redirects` config file ([doc]([link])) When you try to use Cloudflare pages redirects with svelte kit project, then Cloudflare redirects are ignored. It seems that __routes config, generated by sveltekit covers all routes with * <img width="458" alt="image" src="[link]> ``` "include": [ "/*" ], ``` It means that all requests handled by worker script, before being passed to redirect. Proposed solution: add contents of _redirects to exclude section, like static assets. ### Reproduction Sorry, but I can't provide…

### CASE-7622 · tailwindcss css output don't being putted inside ./package/
- **Principles**: P-A3, P-H1 · **Env**: tailwind, svelte
- **Signals**: 👍3 💬9 · open · labels: documentation/pkg:svelte-package
- **Excerpt**: ### Describe the bug basically, I was creating a simple library with sveltekit and using tailwindcss. the problem is when I do "npm run build" it creates the files correctly but when i do npm install of the same file. the component don't have any CSS applied to it. ### Reproduction my npm package: [link] my GitHub repo: [link] example of the error: [link] what should output: ![image]([link]) what is wrong: ![image]([link]) another info is that tailwind works fine in dev mode "npm run dev", but when build don't work fine. how make also the css being exported with the component library? ###…

### CASE-7633 · Pipedrive webform not working
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hey guys I've got a prob here. So I'm going to include a Pipedrive web form on my landing page. This is the code snippet given by Pipedrive. However, it's not rendering most of the time and it shows "canceled" in the console. So I tried to use iframe instead of div, and it renders properly every time. But one prob now is I wanna redirect to another page after the user submits the form. If I use an iframe to render out the webform, it only redirects to a new page in the iframe but not the whole page. I wonder if there's any way to solve this? *The code works properly in…

### CASE-7638 · [bug] `params` value incorrectly shows static asset
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the bug Hello, I have a route structure like this `/[lang]/[offline_id]` When I log contents of `load({params})` I get `favicon.png` as a value during link navigation between `/[lang]` and `/[lang]/[offline_id]`. ![image]([link]) ### Reproduction [link] start project, click link, see result in terminal ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz Memory: 5.24 GB / 15.87 GB Binaries: Node: 14.16.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.12…

### CASE-7640 · Prefetch broken — `Cannot read property 'load' of undefined`
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍1 💬9 · closed · labels: p1-important/prefetch
- **Excerpt**: **Describe the bug** Trying to `prefetch` a route programatically errors when trying to call `load` on the prefetched route **Logs** <img width="719" alt="Screen Shot 2021-05-31 at 10 59 26 AM" src="[link]> **To Reproduce** Call `prefetch` on a route if `browser` is true ```js if (browser) { prefetch('/some-route') } ``` **Expected behavior** Prefetch should work... **Information about your SvelteKit Installation:** <details> <summary>Diagnostics</summary> ``` System: OS: macOS 11.2.1 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz Memory: 684.30 MB / 16.00 GB Shell: 5.7.1 -…

### CASE-7652 · Processing the same image in multiple places causes strange errors (`enhanced-img`)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug When processing the same image in multiple places, there's some racey behavior causing strange and misleading errors. The likelihood of the issue occurring seems proportional to the number of instances, with 7 or so seeming to guarantee it. ### Reproduction I'm not sharing my reproduction publicly as it uses an image of me, but I have shared it internally with the maintainers. [link] If you're looking to test this yourself: - Create a SvelteKit app - Set up `enhanced-img` - Add 7 or so identical `enhanced-img` elements - Have them reference a large image. I'm not sure if…

### CASE-7656 · enhanced:img, imagetools, Sharp, and incorrectly rotated images
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug This is a bit tricky. It isn't a bug with enhanced:img, but I do think it might be enhanced:img's _problem_ as the behavior is unexpected. I apologize if you'd rather have this as a feature request. You may have noticed when using enhanced:img that some processed images get rotated for some reason. The underlying reason is not with imagetools—as discovered in an [issue on the imagetools repo]([link])—but with Sharp. However, the owner of the Sharp repo [maintains that this is the expected behavior]([link]), which seems pretty reasonable. Summary: Some images are rotated…

### CASE-7658 · Upgrading to Kit 2 it throws with `Cannot find module 'graphql-request/build/esm/types' or its corresponding type declarations.ts (2307)`
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug Upgrading today from `"@[meta framework]": "1.30.0"` to `"@[meta framework]": "2.0.0"` and deleting `node_modules` and `package-lock.json`, if I run `npm install` on typescript check I get: ![image]([link]) `Cannot find module 'graphql-request/build/esm/types' or its corresponding type declarations.ts (2307)` Why? Maybe some issue with package.json `exports`? ```json "exports": { ".": { "require": { "types": "./build/cjs/index.d.ts", "default": "./build/cjs/index.js" }, "import": { "types": "./build/esm/index.d.ts", "default": "./build/esm/index.js" } } }, "types":…

### CASE-7660 · Prerender does not work properly after the optional parameter path.
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug I started writing code with the following structure. ![image]([link] framework]/assets/10890178/d38e16c2-85f4-4ce8-89c7-1e8395debf5b) And when I did `npm run build` I got the following error: ``` Error: The following routes were marked as prerenderable, but were not prerendered because they were not found while crawling your app: - /[[lang=locale]]/(app), - /[[lang=locale]]/(app)/about, - /[[lang=locale]]/(auth)/account-recovery, - /[[lang=locale]]/(app)/contact, - /[[lang=locale]]/(app)/dashboard, - /[[lang=locale]]/(auth)/login ``` I started svelte for the first time…

### CASE-7661 · `entries` does not work reliable in `+server.js` files
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: ready to implement
- **Excerpt**: ### Describe the bug The newly introduced [`entries`-export]([link]) are currently only documented for `+page.server.js` and `+page.js`, but I tried them also in a `+server.js` file and the export get's picked up, which is great. But there are 2 issues: 1. tooling thinks that `entries` can't be exported in a `+server.js` file: ![image]([link]) 2. the route parameter placeholder does not get replaced correctly: for the file `routes/lang/[language].json/+server.js` I need to return `{ language : 'en.json' }` and not just `{ language : 'en' }` (without `'.json'` at the end). This one is a…

### CASE-7663 · Vercel deploy error, 30 min ago it was working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug ![image]([link]) can't deply to vercel, previous successful deployments throw error when redeployed. adapter-vercel installed directly works ### Reproduction - ### Logs _No response_ ### System Info ```Shell vercel cloud ``` ### Severity blocking an upgrade ### Additional Information _No response_

### CASE-7672 · Crashing when calling fetch
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug ![image]([link]) And the code : ```svelte <script lang="ts" context="module"> import {route} from "../../Backend/api"; import {customers} from "../../lib/store"; export async function load({fetch}) { const response = await fetch(route('/customers')); customers.set(response.ok && (await response.json())); return { status: response.status, } } </script> <slot/> ``` ### Reproduction Juste use fetch inside a load function. ### Logs ```shell terminated TypeError: terminated at Fetch.onAborted…

### CASE-7676 · Adapter-static not putting CSS referenced assets in the right place
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug Resources linked to from CSS (i.e. `background-image: url(...)`) are not found after building a SvelteKit site with adapter-static. The following works in vite (`npm run dev`) but not after building the site. One could work around it with absolute URLs, yet it's pretty annoying with many assets. ### Reproduction Create these files: - A random image at `static/wallpaper.jpg` - A component `src/lib/components/something.svelte`: ```svelte <div class="paper">something</div> <style lang="postcss"> .paper { background-image: url(./wallpaper.jpg) } </style> ``` - Use the…

### CASE-7679 · adapter-static 1.0.0-next.28 ignores svelte.config.js kit.paths.base for static assets
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug Images for a website generated by adapter-static are not loading because the site does not run off of the website root. Relevant part of svelte.config.js... ```javascript kit: { adapter: adapter({ pages: 'public', assets: 'public' }), paths: { base: '/front-end/example-svelte' } } ``` Did an `npm run build` and deployed the content to GitLab Pages. The site was generally functional but gave 404s for every image in my assets folder. The browser tried to load these from the root website instead of /front-end/example-svelte. This is what was created in /public/index.html…

### CASE-7682 · Build process stops at rendering chunks
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍1 💬8 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug I'm not really sure if that's Vite or Sveltekit issue, so i've decided to post here. My project works fine in dev mode, but i cannot build it. I've tried multiple adapters, node versions, sveltekit versions and few other things. Every time build halts at 'rendering chunks'. <img width="267" alt="image" src="[link]> I've created really minimal repo to reproduce the bug. Probably it's something that more experienced developer will solve in a blink of an eye (and here i am 4th hour trying to fix it xD). Let me know if I could provide any more details. I couldn't find a way…

### CASE-7683 · Colors blinking on page load (Windicss)
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug Colors blinking on page load only on production, I make some custom colors with Windicss (to css vars) ![image]([link]) The blinking time increase in a UI library that I'm developing :( - Live demo: [link] - Repo: [link] ### Reproduction - Create a new sveltekit project - Install Windicss - Add some custom colors to css vars ([link]) - Fill css vars programmatically (from style attribute) - Build and run as production ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.13 Ubuntu 21.10 21.10 (Impish Indri) CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @…

### CASE-7684 · Web components and SSR
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: ### Describe the problem Our `adapter-node` SvelteKit app is using a [web components]([link]) library (build with [Stencil]([link])) to have a common design over multiple applications. When we include this components in our SvelteKit application without SSR or prerendering everything works fine. When we activate SSR or prerendering we have massive layout shifts. The components are not visible when the page is loaded. The components will appear a few seconds later which leads to that layout shifts. ### Describe the proposed solution One solution would be to migrate the library to svelte.…

### CASE-7686 · No loader is configured for ".svelte"
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬8 · closed · labels: vite
- **Excerpt**: ### Describe the bug I'm getting the error shown below on the image when I run command `npm run dev` after creating project with `npm init svelte@user` on windows 10 ![image]([link]) ### Reproduction 1. run `npm init svelte@user` 2. Run `npm install` 3. run `npm run dev` 4. get this error ![image]([link]) ### Logs _No response_ ### System Info ```shell windows 10 ``` ### Severity blocking all usage of SvelteKit ### Additional Information _No response_

### CASE-7692 · Hash collision with fetch body in load
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Describe the bug** When `fetch` is called with a body in `load`, the resulting `svelte-data` in the server-rendered HTML uses a 32-bit hash of the body to associate the responses with the requests. Hash collisions might end up being a problem. They will not happen often, but that might just make it harder to debug once one eventually happens. The result of the client-side `fetch` for the second request will be a copy of the result for the first one. **Logs** N/A **To Reproduce** Clone [link] and run it. Observe the result: ![image]([link]) **Expected behavior** The "Expected" and "Actual"…

### CASE-7697 · docs: `2.69.1` does not show up in the GitHub releases page
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the problem [@[meta framework]@user.69.1]([link] framework]/releases/tag/%40sveltejs%2Fkit%402.69.1) - it is a fix related release THIS IS NOT A BUG IN SVELTE-KIT. This is information for those who are not subscribed to GitHub releases and is accessing the [releases page]([link] framework]/releases) directly. I don't know what the problem or cause is: - release CI (might need to take a look) - new GitHub web (it has been renewal-ed) --- It appears on the landing page sidebar with the `Latest` badge: <img width="500" height="272" alt="Image" src="[link] /> But not in the releases…

### CASE-7698 · [[email]] Crash on start
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬7 · closed · labels: pkg:adapter-node/p1-important
- **Excerpt**: ### Describe the bug Crash on start after an update from v5.5.4 to v5.5.5 of the adapter-node package. <img width="964" height="67" alt="Image" src="[link] /> Deployed in a docker container with a node:26-alpine image ### Reproduction N/A ### Logs ```Shell N/A ``` ### System Info ```Shell N/A ``` ### Severity blocking an upgrade ### Additional Information N/A

### CASE-7699 · Cannot use `$env/dynamic` in Cloudflare Workers
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬7 · closed · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug Dynamic environment modules cannot be used in Cloudflare Workers, which does not seem to be documented. ```ts import { env } from '$env/dynamic/private'; env.PRIVATE_DYNAMIC_VAR; // undefined ``` ### Reproduction - [link] - [link] ```jsonc // expected { "PRIVATE_DYNAMIC_VAR": "4", "PRIVATE_STATIC_VAR": "2", "PUBLIC_DYNAMIC_VAR": "3", "PUBLIC_STATIC_VAR": "1" } ``` <img width="1826" height="1387" alt="Image" src="[link] /> <img width="1697" height="769" alt="Image" src="[link] /> ### Logs ```Shell ``` ### System Info ```Shell System: OS: Windows 11 10.0.26200 CPU: (8) x64…

### CASE-7700 · Image without `?enhanced` fails only in production and not development
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, svelte
- **Signals**: 👍1 💬7 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug Build created with @user/enhanced-img and rolldown-vite (or vite 8@user) is failing to run. ### Reproduction ```svelte <script> import MyImage from '$lib/assets/tama66-typewriter-8622984_1280.jpg'; </script> <h1>Welcome to SvelteKit</h1> <p>Visit <a href="[link]>svelte.dev/docs/kit</a> to read the documentation</p> <enhanced:img src={MyImage} alt="Typewriter by the window" /> ``` [[link]]([link]) - install build - run `pnpm build` or `npm build` - run `pnpm preview` or `npm preview` ### Logs ```Shell ``` ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (8)…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7604 · Could not get the request store (Async SSR bug)
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the bug I'm trying the async SSR without the `<svelte:boundary>`. In my remote function, it is throwing this error. ``` file:///Users/sillvva/Projects/ddal-svelte/node_modules/.pnpm/@[email]@[email]@[email]@user/node_modules/@[meta framework]/src/exports/internal/event.js:48 throw new Error('Could not get the request store. This is an internal error.'); ^ Error: Could not get the request store. This is an internal error. at get_request_store (file:///Users/sillvva/Projects/ddal-svelte/node_modules/.pnpm/@[email]@[email]@[email]@user/node_modules/@[meta…

### CASE-7606 · Running tests with a fresh bootstrapped app yields error
- **Principles**: P-F4 · **Env**: bootstrap, svelte, typescript, vite
- **Signals**: 👍5 💬9 · closed
- **Excerpt**: ### Describe the bug When runnning test in a newly bootstrapped app, I get: ``` Error when evaluating SSR module /node_modules/@[meta framework]/src/runtime/server/index.js: Cannot read properties of undefined (reading 'wrapDynamicImport') ``` The tests still run and pass. ### Reproduction ``` npx sv create broken [y] Svelte library (setup with svelte-package to help correctly package your library) [y] Yes, using TypeScript syntax What would you like to add to your project? (use arrow keys / space bar) │ ◼ prettier (formatter - [link]) │ ◼ eslint (linter - [link]) │ ◼ vitest (unit testing -…

### CASE-7618 · adapter-static SPA build output includes server / ssr css files
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍8 💬9 · closed
- **Excerpt**: ### Describe the bug Hi, Building an SPA using svelte kit, `adapter-static`, `ssr = false`, `csr = true`, `prerender == false`, results in both the server / ssr `.css` and client-side `.css` files to be written to `build/_app/immutable/assets/`. I would expect the server css not to be there, given the intention of creating an SPA. This effectively doubles the amount of CSS that will be embedded into the resources of a non-nodejs binary (e.g golang/rust binary) that serves the SPA files. It would be great if the server files are not written to the build folder, to avoid removing them after…

### CASE-7628 · Issue with reduxtool kit and adapter-static to build SSG
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: vite
- **Excerpt**: ### Describe the bug it works on SSR and CSR, but SSG doesn't, when I config to build SSG, it logs errors about reduxtoolkit TypeError: configureStore is not a function at file:///.../my-app/.svelte-kit/output/server/entries/pages/_layout.svelte.js:41:15 at ModuleJob.run (node:internal/modules/esm/module_job:193:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:533:24) at async Module.component (file:///my-app/.svelte-kit/output/server/nodes/0.js:4:39) at async Promise.all (index 0) at async render_response…

### CASE-7629 · Page/layout load functions running twice on initial page load
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: documentation
- **Excerpt**: ### Describe the bug This is either a "feature" request or an issue with the docs. On initial page load (server-side navigation), page and layout load functions run once during SSR (server) and once before hydration. I'm sure this is intended behavior but I don't see why it is. This blocks the hydration process, and if load functions can return different results, the page will look/act different before and after hydration. Initial page load are part of server side navigation and not client side navigation, so one would think that load functions will only run once in the server and reuse that…

### CASE-7634 · Enforce that endpoint responses can be serialized
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug When using page endpoints, the JSON output of the request isn't serialized before passing it to the component/load(), causing the SSR version of these pages to be different than the client rendered version. To extend this, you can pass any value through the endpoint, including functions and classes (these ones wont pass type checking), and it will be passed as props to the ssr component. ### Reproduction Repo: [link] - [Direct link to endpoint]([link]) - [Direct link to page component]([link]) ### Logs ```shell [no relevant logs] ``` ### System Info ```shell System: OS:…

### CASE-7641 · Post request via fetch gets overriden/replaced in `load()`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬9 · closed
- **Excerpt**: **Describe the bug** Two parallel (?) fetch POST requests (one from $layout.svelte, and one from index.svelte) with different contents end up having the same response on the client side. **Logs** nothing interesting happening in the logs **To Reproduce** I set up a repro repository here [link] which loads two festival objects from a graphQL api. One Festival is called "First Festival", the other "Another Festival". The SSR implementation seems to work as there is a short flash of the "Another Festival" title on page refresh. But it get's replaced on the client with "First Festival". What i…

### CASE-7645 · prerender remote functions fail under SSR when behind AWS ALB OIDC auth, but query remote functions do not
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬8 · open · labels: adapters - general
- **Excerpt**: ### Describe the bug Hi! I think I have run into a pretty weird issue with SvelteKit remote functions and I am trying to figure out whether this is expected behavior or if I have found a bug. I am building an internal web app for a large company, and they want to deploy it to AWS ECS in a Docker container, then put AWS ALB OIDC auth in front of it so employees can log in with their Microsoft account. Everything was working fine at first, even with SSR enabled. Database queries work, there are no OIDC problems, and the app behaves normally. Then some pages started throwing 500 internal server…

### CASE-7646 · Running Unit Tests on a New Project give an " transport was disconnected, cannot call "fetchModule" error
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍15 💬8 · closed
- **Excerpt**: ### Describe the bug I've created a brand new Svelte Project. Before I make any changes, I run `npm run test` and am getting this error: > 12:55:39 PM [vite] (ssr) Error when evaluating SSR module /@user/C:/Projects/blog/svelte-test-2/node_modules/@[meta framework]/src/runtime/server/index.js: transport was disconnected, cannot call "fetchModule" at reviveInvokeError (file:///C:/Projects/blog/svelte-test-2/node_modules/vite/dist/node/module-runner.js:475:14) at Object.invoke (file:///C:/Projects/blog/svelte-test-2/node_modules/vite/dist/node/module-runner.js:549:11) at async…

### CASE-7650 · Spurious/outdated warning with async SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬8 · open · labels: svelte 5
- **Excerpt**: ### Describe the bug SvelteKit has the following warning ([source]([link] framework]/blob/7fe38957490feb018e6d8df4d71b5a9b29487ca4/packages/kit/src/runtime/server/page/render.js#L195)): > Avoid calling `fetch` eagerly during server-side rendering — put your `fetch` calls inside `onMount` or a `load` function instead While I'm not certain about the original context this warning was added under, I'm assuming it was because the fetch result would simply be lost during SSR, resulting in a wasted call. With async SSR I don't believe this warning should be emitted as long as the fetch called is…

### CASE-7651 · 2.21.0 -> 2.21.1 breaks `deno task build`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### Describe the bug Just started a new project with `"@[meta framework]": "2.21.1",`, which causes `deno task build` to break. Downgrading to `2.21.0` works. Hoping the regression can be identified while the release is fresh. ### Reproduction With a new skeleton project: ##### Works ``` deno add npm:@[meta framework]@user.21.0 -D deno task build ``` ##### Breaks ``` deno add npm:@[meta framework]@user.21.1 -D deno task build ``` ### Logs ```Shell liam@user ~/w/p/project (master) [1]> deno task build Task build vite build vite v6.3.5 building SSR bundle for production... ✔ [paraglide-js]…

### CASE-7655 · The `base` path from `$app/paths` differs between SSR and client using the default config
- **Principles**: P-F4 · **Env**: typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug With no config added to a newly created skeleton project, the value of the `base` path from `$app/paths` is `'.'` during SSR and `''` on the client. This can cause bugs and hydration issues when the markup branches. A workaround: ```ts const actual_base = base === '.' ? '' : base; ``` The type of `base` is `"" | /${string}` causing the above to error in TypeScript: ```ts const actual_base = (base as any) === '.' ? '' : base; ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell Node: 22.3.0 npm: 10.8.1 npmPackages: @user/adapter-auto: ^3.0.0 => 3.2.2…

### CASE-7659 · Unexpected import behaviour in "non-ssr" routes
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: documentation
- **Excerpt**: ### Describe the bug The Bug (or maybe a documentation issue?): I've exported `ssr=false` in my root +layout. If I import (via statement/top-level) in any sub-route's +page.js/.ts a dependency that uses at the top level a browser API (more precise: any none-node API), the build failing "evaluating SSR" with an error: ``` ReferenceError [Error]: (the unknown API) is not defined ``` I expected, that SSR should be turned off for the page.js/.ts in that case :thinking: ### Reproduction Here you can find a prepared example for this miss-behaviour: [link] At the end, it's pretty easy to replicate:…

### CASE-7673 · Differing behavior of exception in shadow endpoint vs ssr
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: error handling/p1-important/breaking change
- **Excerpt**: ### Describe the bug In hooks.js I wrap the `await resolve(event)` in a try/catch in order to do things like rollback a DB transaction. This works fine when the exception is thrown from the shadow endpoint but the exception fails to bubble up to `handle()` when the same page is rendered on the server. ### Reproduction ```js // hooks.js export const handle = async ({ event, resolve }) => { let response try { response = await resolve(event); } catch (err) { console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@') console.log(err) throw err } } ``` ```js // routes/endpoint.js export const…

### CASE-7674 · user-agent header always the same in cloudflare pages
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When deploying to cloudflare pages, the "user-agent" header in the Handle Hook seems to always have the same value. It works as expected while running in dev or preview in local. It tried disabling prerendering and disabling ssr but it changes nothing. I don't even know if the problem is comming from the cloudflare adapter, cloudflare itself, or sveltekit ### Reproduction hooks.ts ```js export const handle = async ({ event, resolve }) => { if (event.request.headers.has("user-agent")) { event.locals.userAgent = event.request.headers.get("user-agent"); } return await…

### CASE-7675 · Error when using `Vite`'s native WebAssebmly imports
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: vite
- **Excerpt**: ### Describe the bug According to [vite's docs]([link]), one should be able to import a "*.wasm" file directly, and call an init function, as such: ```js import init from "./path/to/wasm.wasm"; await init(); ``` If one call's `.toString()` on the init function, we can see the expected function declaration and body: ``` opts => __vite_ssr_import_0__.default(opts, "/path/to/wasm.wasm") ``` However, when run in SSR as follows: ```js if (!browser) { await init(); } ``` I get a runtime error from node which is down below in the `logs` section. I am trying to find a way of running WASM in both SSR…

### CASE-7685 · Allow endpoints to respond with a route instead and pass along a POJO to that route
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the problem Doing any form of SSR friendly form validation / error handling is currently unnecessarily complex and difficult to do. Take this simple form... ```svelte <!-- src/routes/foo/bar/form.svelte --> <form action="/foo/bar/form" method="post"> <input name="email" id="email" /> <input name="password" id="password" /> <button type="submit">Submit</button> </form> ``` ... that POSTs to this simple endpoint for example: ```javascript // src/routes/foo/bar/form.js /** @user {import('@[meta framework]').RequestHandler} */ export async function post({ body }) { const email =…

### CASE-7687 · [Version 1.0.0-next.165] Error when evaluating SSR module in dev
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### Describe the bug With version 1.0.0-next.165 of Sveltekit installed, I get several Vite SSR errors (`[vite] Error when evaluating SSR module`). The package that seems to be problematic is `@user/svelte`. Here is the error log I get: ``` 9:47:17 AM [vite] Error when evaluating SSR module /node_modules/@user/svelte/lib/index.js: ReferenceError: exports is not defined at /node_modules/@user/svelte/lib/index.js:2:23 at instantiateModule (C:\Work\sveltekit-dev-ssr-bug\node_modules\vite\dist\node\chunks\dep-63d4bd14.js:75119:15) Line must be greater than or equal to 1, got 0 TypeError: Line…

### CASE-7696 · Every SSR request 500s with "Cannot read properties of undefined (reading 'updated')" at app/state/client.js when using $app/state
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ## Describe the bug Every server-rendered request crashes with a 500 under `vite dev` on any app that imports from `$app/state` (e.g. just `page`), starting somewhere between `@[meta framework]@user.52.0` and `2.57.1`, and still present in the latest `2.70.2`. ``` TypeError: Cannot read properties of undefined (reading 'updated') at node_modules/@[meta framework]/src/runtime/app/state/client.js:71:16 at async ESModulesEvaluator.runInlinedModule (.../vite/dist/node/module-runner.js:1062:5) at async SSRCompatModuleRunner.directRequest (.../vite/dist/node/module-runner.js:1284:61) at async…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7607 · Redirect returning a JSON on specific accept header
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug under very specific circumstances, the [`redirect` function]([link]) will not actually use the 302 code and `Location` header: 1. it is a form action handler 2. the accept header is `{}, */*`, where `{}` is anything other than `text/html` (like `image/jpeg`, `application/x-ms-application`) ### Reproduction see [the repo]([link]) ### Logs ```Shell curl [link] -X POST -H 'Accept: image/jpeg, */*' -H "Cookie: kit.session=truncated" -H 'Origin: [link] -H 'Referer: [link] -H 'Content-Type: application/x-www-form-urlencoded' -v * Host localhost:5173 was resolved. * IPv6: ::1 *…

### CASE-7611 · Incorrect Paths for Font Assets in Vite 5 Build Output
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite, bootstrap, svelte
- **Signals**: 👍14 💬9 · closed · labels: vite
- **Excerpt**: ### Describe the bug Paths for font assets are incorrect in build output. For example: In vite 4: `/_app/immutable/assets/font.woff2` (correct) In vite 5: `/_app/immutable/assets/nodes/font.woff2` (incorrect) Note the added `nodes` directory. The actual font file still lives at `/_app/immutable/assets/` and not in `nodes`. This nested `nodes` folder seems to be new in vite 5, it now hosts all the built css. ### Reproduction Please clone this repo [link] (bootstrapped with `npm create svelte@user`) and follow the steps below 1. Install dependencies `pnpm install` 3. Build `pnpm build` 4.…

### CASE-7667 · Breaking change occurred between "@user/adapter-auto" .84 and .85 - Missing references
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Error during build occurs: node_modules/ajv-dist/dist/ajv7.min.js" points to missing source files When you fall back to .84 the problem is resolved. Looks as if there is invalid JSON parse package error in module ajv. ### Reproduction "devDependencies": { "@user/adapter-auto": "1.0.0-next.84", "@[meta framework]": "1.0.0-next.526", "@user/typography": "0.5.7", "autoprefixer": "10.4.13", "daisyui": "2.36.0", "date-picker-svelte": "2.2.1", "eslint": "8.24.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-svelte3": "^4.0.0", "postcss": "^8.4.18", "prettier": "^2.6.2",…

### CASE-7680 · [bug?] Shadow Endpoints fails to hydrate big data sent to their matching page because it is truncated. causing SyntaxError: Unexpected end of JSON input
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1, P-F4 · **Env**: macos, vite, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug i originally came to this issue when trying to use shadow endpoints for the first time: ![image]([link]) EDIT: there are more discovery points in subsequent comments below. ### Reproduction [link] `npm run dev` and go to the /about endpoint ### Logs ```shell 9:03:33 PM [vite] hmr update /src/routes/about.svelte ``` ### System Info this is my mac envinfo since stackblitz doesnt seem to be able to run envinfo ```shell System: OS: macOS 11.4 CPU: (8) x64 Apple M1 Memory: 51.47 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.4.1 - /usr/local/bin/node Yarn: 1.22.10 -…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7608 · Interaction with Vite `transformIndexHtml` plugin
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug I'm not sure if this is desired or not or a documentation thing. For some reason Vite [`transformIndexHtml`]([link]) plugins do not run. ### Reproduction Just paste this inside a `vite.config.ts` ```ts import { sveltekit } from '@[meta framework]/vite'; import { defineConfig, type Plugin } from 'vite'; const htmlPlugin = () => { console.log('plugin init'); return { name: 'html-transform', transformIndexHtml(html) { console.log('plugin transform'); // Never runs return html.replace(/<title>(.*?)<\/title>/, `<title>Title replaced!</title>`); } } satisfies Plugin; }; export…

### CASE-7610 · Leaflet not working with vite-plugin-sveltekit 3.0
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug Line 556 in leaflet.css is giving error vite-plugin-sveltekit filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678); Adding double quotes did not help. Error went away but map tiles are not displayed correctly. ### Reproduction [link] ### Logs ```Shell 675 | 676 | -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)"; 677 | filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678); ^ 678 | }…

### CASE-7635 · Build fails to resolve "exports" field
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, svelte
- **Signals**: 👍0 💬9 · closed · labels: vite
- **Excerpt**: ### Describe the bug The dependency in question is [`@user/free-solid-svg-icons`]([link]) although it might apply to others as well. It provides both CJS and ESM files and it has a exports field in the package.json linking to each. The dev mode works fine so does a [`vite build` by itself]([link]). ### Reproduction [link] Run `npm run build` in the terminal ### Logs ```shell vite v2.8.6 building for production... ✓ 14 modules transformed. .svelte-kit/output/client/_app/manifest.json 1.15 KiB .svelte-kit/output/client/_app/start-0bcdba7f.js 22.21 KiB / gzip: 8.36 KiB…

### CASE-7637 · fix the flaky tests
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows
- **Signals**: 👍0 💬9 · closed · labels: tests
- **Excerpt**: ### Describe the bug The tests that routinely fail on Windows — 'prefetches programmatically' and 'url-supplied anchor is ignored with onMount()' spring to mind — are a real nuisance. Getting these to pass reliably is probably the single biggest contribution someone could make relative to the development effort involved (though having said that, I've tried and failed) ### Reproduction Open a random PR and look at the checks ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance ### Additional Information _No response_

### CASE-7671 · Can't build if the base is changed
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: vite, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug It doesn't seem possible to build the project if the base is different from `/`. ```javascript /** @user {import('@[meta framework]').Config} */ const config = { preprocess: preprocess(), kit: { adapter: adapter(), paths: { base: '/second-base' } } }; ``` ### Reproduction [link] ### Logs ```shell ❯ npm run build $ vite build vite v2.9.14 building for production... ✓ 34 modules transformed. .svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg 1.85 KiB .svelte-kit/output/client/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2 15.40…

### CASE-7690 · File not found when building
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Describe the bug** The build does not run properly, error: no such file or directory **Logs** ``` ❯ npm run build > [email] build /home/sovlookup/桌面/新建文件夹 (2)/midway-svelte > svelte-kit build vite v2.3.7 building for production... ✓ 92 modules transformed. build/manifest.json 1.56kb build/layout.svelte-646c1d37.js 0.49kb / brotli: 0.29kb build/error.svelte-71b8bb5c.js 1.19kb / brotli: 0.57kb build/pages/index.svelte-a4c45f6d.js 1.16kb / brotli: 0.57kb build/assets/start-a8cd1609.css 0.16kb / brotli: 0.10kb build/chunks/vendor-f965f831.js 18.55kb / brotli: 6.31kb…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7612 · Sveltekit dynamic public environment variable import fails in Vitest
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍12 💬9 · closed · labels: $app/env
- **Excerpt**: ### Describe the bug Attempted import: ```ts // place files you want to import through the `$lib` alias in this folder. import { env } from '$env/dynamic/private'; import { env as publicEnv } from '$env/dynamic/public'; ``` Error during Vitest (`npm run test`): ```ts FAIL src/index.test.ts [ src/index.test.ts ] TypeError: Cannot read properties of undefined (reading 'env') ❯ $env/dynamic/public:1:40 ❯ src/lib/index.ts:2:31 1| // place files you want to import through the `$lib` alias in this folder. 2| import { env } from '$env/dynamic/private'; | ^ 3| import { env as publicEnv } from…

### CASE-7620 · Page Refresh (F5) results in empty store value
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug It has to do something with stores, on initial loading the store is set and can be subscribed, when i refresh the page, the same method results in an undefined: ``` const unsubscribe = userdata.subscribe(async (value) => { user = value; }); console.log(user); ``` on first loading of the page (or when i navigate somewhere and then come back) the user variable holds the correct data. if i hit refresh, the user variable is empty. ### Reproduction example REPL: [link] (REPL is svelte, but since i cannot refresh in REPL anyway that shouldn't be in issue) ### System Info…

### CASE-7621 · adapter-static: control “`route.html` or `route/index.html`” output separately from `trailingSlash` option
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍9 💬9 · open · labels: p2-nice-to-have
- **Excerpt**: ### Describe the problem I’m generating a static site that I’m putting in an Amazon S3 bucket where it gets served by CDN. My app has a file path like this: ```shell src/routes/foo/+page.js src/routes/foo/+page.svelte ``` 1. When I build the site, I want this output as `build/foo/index.html`. 2. I want it accessible to my users at `/foo`, with no trailing slash. My understanding of the docs is that the only option I have to influence this is `export const trailingSlash` in my `src/routes/+layout.js` file. If I use either `export const trailingSlash = 'never'` or `'ignore'`, the build command…

### CASE-7624 · Can't build with staging environment variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍1 💬9 · closed · labels: p2-nice-to-have/$app/env
- **Excerpt**: ### Describe the bug I am trying to build an app with staging environment variables (`.env.staging`). However, I am always getting the environment variables listed in `.env.production`. ### Reproduction Run the following: ``` npm run build -- --mode staging ``` Or update `mode` in `vite.config`: ``` const config = { plugins: [sveltekit()], mode: "staging" }; ``` And then run `npm run build` When building with either of these approaches, I can see a message saying `vite v4.0.3 building for staging...`. However, when I open `/build/index.html` (I'm using SPA mode), I can see that the…

### CASE-7625 · Pass 'Authorization' header to next authorized page, no use of cookies
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the problem Hi, I'm curious if it's possible. After successful redirect to say `/admin` page where there is a menu of linked subpages and click on each link will cause subpage receive 'Authorization' request header accessible in `load()` BUT without use of `cookies` ? ### Describe the proposed solution I'm stuck. ### Alternatives considered _No response_ ### Importance nice to have ### Additional Information _No response_

### CASE-7642 · Explicit environment variables validates non-static variables at build time
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug Explicit environment variables validates all defined variables at build time, including variables that are not `static`. This can lead to errors when e.g. secrets are left empty. ```js // env.js import { defineEnvVars } from "@[meta framework]/hooks" export const variables = defineEnvVars({ SECRET: {} }) ``` ``` # .env.production SECRET=# don't put secrets in here ``` As a possible workaround, an optional standard schema can be used at build time: ```js // env.js import { defineEnvVars } from "@[meta framework]/hooks" import { optional, pipe, string, nonEmpty } from…

### CASE-7647 · Hovering over the link applies CSS effects
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · open · labels: router/needs-decision
- **Excerpt**: ### Describe the bug ## Summary Hovering a link of a page which imports CSS file with css variables, override current page css variable. We have this issue since version [@user.48.0]([link] framework]/releases/tag/%40sveltejs%2Fkit%402.48.0). ## Details `+layout.svelte` in each sub routes, import a different css for each different css variable. (In use case, each sub directory have different own brand color). CSS is stored in `/static` folder and import like ``` <svelte:head> <link href="./sub_a.css" rel="stylesheet" /> </svelte:head> ``` When hover a link to page, preload data is triggered.…

### CASE-7662 · Presence of live region may be confusing for screen reader users
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue, react, svelte
- **Signals**: 👍0 💬8 · open · labels: router
- **Excerpt**: ### Describe the problem We got some feedback in [link] from a screen reader user who was confused why the page's title appeared at the bottom of the page. > Error when switching pages: When switching back and forth from the homepage to any pages like about or contact, I always have the phenomenon that the title is displayed at the bottom of the page when browsing with a screen reader. That is, when switching between pages, the title will display in the footer, not elsewhere. This is not the case with vue and react. Specifically, when I visit the website svelte.dev or any other website…

### CASE-7669 · Access route result in Not Found during dev when the route is encoded URI
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: router
- **Excerpt**: ### Describe the bug Routing result is Not Found if the route is encoded URI during dev server. eg: With route `src/routes/%E5%88%9D%E3%82%81/+page.svelte` when navigating to `[link] ```sh Not found: /src/routes/%E5%88%9D%E3%82%81/+page.svelte Error: Not found: /src/routes/%E5%88%9D%E3%82%81/+page.svelte ``` However, preview works as expected. After `pnpm build && pnpm preview`, the route `[link] is accessible. For the reference: > encodeURI('初め') => '%E5%88%9D%E3%82%81' ### Reproduction [link] To Reproduce: 1. Create a route with encoded URI. eg: `src/routes/%E5%88%9D%E3%82%81/+page.svelte`.…

### CASE-7670 · "Cannot import $env/static/private.js into client-side code" when importing from a common functions file
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍3 💬8 · closed · labels: documentation/$app/env
- **Excerpt**: ### Describe the bug This seems like a bug even though it could be the desired behaviour, but here I go: Having a file `functions.js` including two functions: 1. fetchAPI` that supposedly fetches data from an API and requires access to `API_TOKEN` (a private and sensitive environment variable) 2. `multiply` that just takes 2 parameters and returns a number, without access to the env variable It then fire this error: ``` Cannot import $env/static/private.js into client-side code: - src/routes/+page.svelte - src/functions.ts - $env/static/private.js ``` If you comment the lines 2 and 8 of…

### CASE-7681 · Environment variables on `process.env` sometimes not available in hooks.js in local dev
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍4 💬8 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug I'm looking to use the `handle` hook to add authentication and authorization middleware to my API routes, however the variables needed to verify user JWT's are _sometimes_ not available when the hook runs, but _only_ in local development. In my experience these variables were available just once after upgrading dependencies to use Vite 2.7.1, however on subsequent attempts/restarts of the dev server these variables were no longer available and thus all API attempts would be unauthorized. I've attempted to remove the `.svelte-kit` directory, node_modules, lockfile, and…

### CASE-7689 · Handler violations, browser freezes when using Web Components
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Describe the bug** I think this is a bug with Kit when using Shoelace web components but I am unsure where this stems from. The issue does not happen when using regular Svelte, even with Svelte REPL I'm unable to reproduce this issue. I have thoroughly described the issue here [link] where the author of the Shoelace web components library replied with some notes. I am unsure how to debug this. Maybe someone can help? But I can say the issue (handler violations) occur constantly. The browser would freeze for up to 10 seconds with a Verbose console log message like `[Violation] 'focusin'…

### CASE-7693 · Identifier '__awaiter' has already been declared
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍0 💬8 · closed · labels: types / typescript
- **Excerpt**: **Describe the bug** Having multiple `script` tags with `async` functions in them results in the error: ``` [rollup-plugin-dynamic-import-variables] Identifier '__awaiter' has already been declared (26:9) ``` **Logs** N/A **To Reproduce** ```svelte <script context="module" lang="ts"> async function fnA() {} </script> <script lang="ts"> async function fnB() {} </script> <h1>This breaks</h1> ``` **Expected behavior** I expect the page to build and render. **Stacktraces** N/A **Information about your SvelteKit Installation:** <details> <summary>Diagnostics</summary> ``` System: OS: macOS 11.3.1…

### CASE-7695 · env.js and secret management tools
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Since upgrading to Sveltekit 3 and using secret management tools like Infisical I keep getting HMR issues with env.js. Is it imperative with this upgrade that I need to use this new file ? or can I remove it and bypass it completely ? ### Reproduction Use a secret mgmt tool like Infisical to store you secrets. Try to use the new env.js file. On code changes you'll get various HMR problems and the env variable names will be printed in the browser window. Currently I keep having to restart my server each time to fix the problem. ### Logs ```Shell ``` ### System Info…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7614 · Client does not hydrate in Safari when accessed over network due to a "Unhandled Promise Rejection"
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: safari, vite
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the bug When you `npm run dev --host` the client does not hydrate due to the error shown in the logs section of this issue. It appears to happen whenever you access the site over the network. Locally it all works fine. ### Reproduction It should work with any new initialised project. 1. `npm run dev --host` 2. Open the link on another device using the Safari browser. It also happens when I download this project and run it locally: [link] ### Logs ```Shell [Info] Successfully preconnected to [link] [Info] Successfully preconnected to [link] [Debug] [vite] connecting... (client,…

### CASE-7623 · Client error only in Safari, `Cannot access uninitialized variable.`
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, react
- **Signals**: 👍9 💬9 · open
- **Excerpt**: ### Describe the bug Was instructed to create a new issue with repro from convo in [ref]. ### Reproduction [link] ### Logs ```Shell [Error] ReferenceError: Cannot access uninitialized variable. handleError (client-manifest.js:16) handle_error (client.js:1692) (anonymous function) (client.js:1630) asyncFunctionResume (anonymous function) promiseReactionJobWithoutPromise promiseReactionJob [Error] Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable. (anonymous function) (start.js:38) asyncFunctionResume (anonymous function) promiseReactionJobWithoutPromise…

### CASE-7627 · re mounting glitch (css animation re run)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox, edge, windows, svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug # Intro animations are run twice / unnecessary re mount of certain nodes? I am not sure what causes the re-mount to happen, but the order (and or structure) of nodes in +layout.svelte seems to be important. ### Reproduction 1.) Run reprod locally [reprod repo]([link]) 2.) Reload (multiple times) in Firefox. Edge for some reason "hides" the issue somewhat (still visible but hard to catch). ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19044 CPU: (16) x64 AMD Ryzen 7 3700X 8-Core Processor Memory: 52.32 GB / 63.92 GB Binaries: Node: 16.17.0 -…

### CASE-7630 · `cookies` API not working in some cases
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome
- **Signals**: 👍1 💬9 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug When either of the below cookie removal methods are used, Firefox warns the `Cookie <name> has been rejected because it is already expired` and it never removes the cookie. Chrome never removes the cookie either. The workaround is to use `cookies.set()`, in the `DELETE` method, and pass both `path` and `sameSite` options to reflect values of the existing cookie. I include `path: '/',` when creating the cookie in `POST`, because without it, the path would be set to `/api`. ### Reproduction [link] In a `api/cookie/+server.js` file: 1. create a cookie in a POST request using…

### CASE-7631 · Loading module from “[link] was blocked because of a disallowed MIME type (“text/html”).
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, safari, macos
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Loading module from “[link] was blocked because of a disallowed MIME type (“text/html”). ### Reproduction open devtools on [link] code: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.0 CPU: (8) arm64 Apple M2 Memory: 64.70 MB / 8.00 GB Shell: 3.5.1 - /opt/homebrew/bin/fish Binaries: Node: 18.8.0 - /opt/homebrew/bin/node npm: 8.18.0 - /opt/homebrew/bin/npm Browsers: Firefox Developer Edition: 105.0 Safari: 16.1 ``` ### Severity serious, but I can work around it ### Additional Information _No response_

### CASE-7632 · dynamic env is an empty object in production when using `config.kit.env.dir`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, linux
- **Signals**: 👍0 💬9 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug `config.kit.env.dir`, introduced in [link] framework][ref], only works in dev. In dev, correct env is logged to console. In prod, empty object is logged to console. Minimal reproduction below. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.18 Pop!_OS 22.04 LTS CPU: (24) x64 12th Gen Intel(R) Core(TM) i9-12900K Memory: 16.68 GB / 31.13 GB Container: Yes Shell: 5.8.1 - /usr/bin/zsh Binaries: Node: 18.3.0 - ~/.local/share/pnpm/node Yarn: 1.22.19 - ~/.local/share/pnpm/yarn npm: 8.11.0 - ~/.local/share/pnpm/npm Browsers: Chrome:…

### CASE-7636 · A shadow hangs over svelte kit
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, svelte, mobile
- **Signals**: 👍3 💬9 · closed
- **Excerpt**: ### Describe the bug If you go to the docs on mobile there is a small gradient shadow at the bottom of the screen. ### Reproduction [link] ![173FB862-0CB0-4347-BF57-80C59178BC63]([link]) ### Logs ```shell Are you ok ``` ### System Info ```shell iOS Safari ``` ### Severity annoyance ### Additional Information Why do you ask so much of me

### CASE-7639 · Transition cleanup happens too early if Kit is already running
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: chrome, macos, svelte
- **Signals**: 👍1 💬9 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug On Chrome, if Svelte is already loaded on the page and refreshed (and sometimes routed to), any in: transition triggered by onMount will remove the animation before fully transitioned, causing the transition to jump to its final state. [link] ### Reproduction [[link]]([link]) [[link]]([link]) ### Logs _No response_ ### System Info ```shell System: OS: macOS Mojave 10.14.6 CPU: (8) x64 Intel(R) Core(TM) i7-8557U CPU @ 1.70GHz Memory: 52.05 MB / 16.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 14.15.1 - /usr/local/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 6.14.8 -…

### CASE-7644 · NS_ERROR_CORRUPTED_CONTENT with kit 2.65.0
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chromium, firefox, svelte, typescript, vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug After upgrading sveltekit to 2.65.0, my website get broken with the following errors: - NS_ERROR_CORRUPTED_CONTENT after entering the URL - Loading module from “[link] was blocked because of a disallowed MIME type (“text/html”) if using a link Tested with Chromium and Firefox. At compilation time, no error, no warning. ### Reproduction ```Shell npx sv create kitissue # select SvelteKit minimal, Typescript, none, npm cd kitissue vim vite.config.ts # add the line: paths: { relative: false } npm run build npm run preview # open the browser, you see the issue in DevTool…

### CASE-7653 · HMR does not work in Brave browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hot Module Reloading does not work in the Brave browser normal tabs. However, it does work in Chrome and in Brave in private tabs. Not really a big issue, just a bit annoying. The issue is probably caused by trying to construct a websocket on ws://localhost:undefined/ (see logs), which should have probably been localhost:5173. ### Reproduction cleared browser cache on localhost:5173 $pnpx sv create $pnpm dev --open open localhost:5173 in private tab too edit +page.svelte and save result: page in private tab changes instantly, in the normal tab it doesn't. (it does after…

### CASE-7677 · Page endpoint without a GET handler causes client-side navigation to hang
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍0 💬8 · closed · labels: help wanted/p1-important
- **Excerpt**: ### Describe the bug If a page has an endpoint without a `get` handler, client-side navigation hands indefinitely ### Reproduction Go to [link] click the `ABOUT` link in the nav ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.0.1 CPU: (10) arm64 Apple M1 Max Memory: 169.98 MB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.1 - ~/.nvm/versions/node/v16.13.1/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.13.1/bin/yarn npm: 8.1.2 - ~/.nvm/versions/node/v16.13.1/bin/npm Browsers: Chrome: 98.0.4758.109 Firefox: 97.0.1 Safari: 15.1 npmPackages: svelte: ^3.43.0 =>…

### CASE-7678 · Page scrolls down on load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, vite
- **Signals**: 👍0 💬8 · closed · labels: help wanted/p2-nice-to-have
- **Excerpt**: ### Describe the bug When the page loads, the window scrolls down to the first element. This means that the `margin-top` applied above the first element is skipped over. ### Reproduction [link] Use `npm run dev` and open the page. The text will appear at the top of the screen, with the `margin-top` scrolled up above the top of the screen. Appears to only happen in Safari. ### Logs ```shell [Log] [vite] connecting... (client, line 184) [Log] [vite] connected. (client, line 211) ``` ### System Info ```shell z System: OS: macOS 12.3 CPU: (8) arm64 Apple M1 Memory: 111.86 MB / 8.00 GB Shell: 5.8…

### CASE-7688 · 500: Module "stream" has been externalized for browser compatibility
- **Principles**: P-G1, P-G2, P-G3 · **Env**: macos, webkit
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug I'm trying to setup a authenticated connection to Firebase using WebKit. The below code "works" in a sense that I receive the data from Firebase Realtime Database as expected. ### Reproduction Here's a sample code in which you need to provide your Google credentials [[link]]([link]) ### Logs ```shell 500: Module "stream" has been externalized for browser compatibility ``` ### System Info ```shell System: OS: macOS 10.15.7 CPU: (4) x64 Intel(R) Core(TM) i7-7660U CPU @ 2.50GHz Memory: 965.53 MB / 16.00 GB Shell: 5.0.18 - /usr/local/bin/bash Binaries: Node: 16.4.2 -…

### CASE-7691 · Starting dev server for first time throws 408 timeouts on initial fetch to populate readable store - restart dev server and it goes away
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 14, chrome 92, macos, svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: **Environment** SvelteKit v1.0.0-next.144 Svelte 3.42.1 OS: macOS 11.5.1 Browser: Safari 14.1.2 and Chrome 92 **Describe the bug** If I bump any dependencies then run `npm install && npm run dev -- --open`, I get HTTP 408 errors when my readable stores are created via GETs to my API (same project - not external). If I immediately do a Ctrl-C and restart the dev server, the errors go away. **Logs (showing the errors then the errors going away after restarting dev server)** > % npm run dev -- --open > > > [email]-1 dev > > svelte-kit dev "--open" > > > SvelteKit v1.0.0-next.144 > > local:…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-7643 · Replace Polka in adapter-node with a maintained web server
- **Principles**: P-A5, P-A2, P-A4 · **Env**: svelte
- **Signals**: 👍10 💬8 · closed · labels: pkg:adapter-node/needs-decision
- **Excerpt**: ### Describe the problem `@user/adapter-node` builds on top of [Polka]([link]) as its underlying web server. Polka appears to have stalled as a project, which is a concern for a server that powers production SvelteKit deployments. Evidence of the maintenance gap: - The latest release on npm is `0.5.2`, published 2024-09-19 — roughly 21 months ago with no new release since. - There are currently ~24 open issues and 8 open pull requests on the repo, several of which have sat untouched for years (e.g. [link] [link] [link]). - Open PRs include fixes and type improvements relevant to a server…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7654 · Importing CSS file in route applies it on hover, and the style is not cleaned up when navigating away from the route
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍3 💬8 · open · labels: documentation/vite
- **Excerpt**: ### Describe the bug If you do something like `import '$lib/layout1.css';` in a +layout or +page, the CSS is incorrectly applied on hover (probably due to the preload functionality). Additionally when navigating away from the route, the style tag is not properly unmounted, leaving the CSS in place. For reference, I also included a css import using svelte-preprocess, which shows that scoped CSS does work as intended. This is a question that has come up many times in the Svelte Discord, and is usually unexpected by the user. [link] ### Reproduction [link] npm i && npm run dev ### Logs ```Shell…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-7657 · Hydration Mismatch Bug / Svelte 5
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: svelte, webkit
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have this Bug in svelte 5, without any indications on how to fix it: ```html <div aria-expanded="true" tabindex="-1" style="box-sizing: border-box; min-width: 0px; min-height: 0px; outline-width: 0px; flex: 0 0 auto; color: rgb(227, 227, 227); font-family: monospace; font-size: 11px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal;…

