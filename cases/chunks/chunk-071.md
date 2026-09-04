# Case Chunk 071 — Round 71

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8001 · Cannot set `form` field and immediately submit
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug > Invalid type: Expected File but received undefined ``` [[1,2],{"file":-1},{}] # Request Payload ``` ```svelte <script lang="ts"> import { uploadBinary } from './upload.remote'; let submit: HTMLButtonElement; </script> <form {...uploadBinary} enctype="multipart/form-data"> <input {...uploadBinary.fields.file.as('file')} hidden /> <button bind:this={submit} hidden>Submit</button> </form> <button type="button" onclick={() => { uploadBinary.fields.set({ file: new File([], 'file.txt') }); submit.click(); }}>Set Fields and Immediately Submit</button > <ul> {#each…

### CASE-8002 · Awaiting a query in the top level breaks component binding and crashes the app
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using experimental async and remote functions, if you await a query at the top level of the page and then try to bind to another piece of declared state it crashes the application and fails to load any data. This is true even if you are not binding to any data returned by the remote function. ```svelte <script lang="ts"> import Input from '$lib/input.svelte' import { test } from '$lib/test.remote'; let users = $derived(await test()) let someVal = $state(''); </script> <Input bind:value={someVal} placeholder="Type something..." /> ``` The remote function in question…

### CASE-8006 · Reactive remote form field.value()
- **Principles**: P-G4, P-E3 · **Env**: react, typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem I often use a hidden input field as a backing field for a complex UI control like a date picker. ### Before Field Proxies Previously I'd bind to a rune (acting like a shadow dom to the form) and it all worked as I expect. ```typescript // script const data = $state({name: 'Bob'; birthdate: Date.now()}); ``` ```html <!--- template ---> <input name="category" type="hidden" value={data.birthdate} /> <MyDatePicker bind:value={data.birthdate} /> <p>Debug birthdate: {data.birthdate}</p> ``` ### Attempt After Field Proxies With the new field proxy, I thought I could do away…

### CASE-8008 · Uncaught Error: Invalid path b:firstLog
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug This code here is throwing an error for a `boolean` checkbox which is being provided the name `b:firstLog`. [link] framework]/blob/1ef73e87ccf4200452113cac1655186d1024296d/packages/kit/src/runtime/form-utils.svelte.js#L68-L79 #### Error The error occurs when the checkbox is toggled. ``` Uncaught Error: Invalid path b:firstLog at split_path (form-utils.svelte.js?v=07427efc:66:9) at HTMLFormElement.<anonymous> (form.svelte.js?v=07427efc:415:19) ``` ### Reproduction See the browser console and try toggling the checkbox. [link] ### System Info ``` System: OS: macOS 26.0.1…

### CASE-8010 · Remote `form` with `.for()` duplicate requests exponentially
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug When I have multiple forms on the same page that submits to the same Remote function, Svelte recommends me to use a `form.for(key)` to distinguish between difference form instances (Don't seem to see docs for this anywhere, but the message is in console.log). ``` Uncaught error: A form object can only be attached to a single `<form>` element. To create multiple instances, use `updateScore.for(key) ``` However, using `.for()` duplicates my request exponentially. First submit sends 1 requests, 2nd submit sends 2 requests, 3rd submits send 4 requests, 4th submit sends 8…

### CASE-8012 · valibots dates not working in new remote functions validation
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I don't know if this is an error on the Valibot site or on the SvelteKit site. But when I try to use a date in my schema for the new build in form validation, I get a type error, and the remote function isn't working. Maybe I overlooked somewhere that some fields (like dates) are not usable in forms, but I looked for it in the validation issue and couldn't find something. Thanks for your help ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: Linux 5.15 Ubuntu 24.04.1 LTS 24.04.1 LTS (Noble Numbat) CPU: (16) x64 AMD Ryzen 7 7700X 8-Core…

### CASE-8023 · adapter-node bug? can't POST long text on deployed app
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hello, I've an unusual behavior/bug while posting a long text in a form, the server times out and never respond nor errors. I've made a simple example to show the problem, however the app works as expected if I run it with `pnpm dev` and also in `pnpm preview` moreover it works deployed with `@user/adapter-vercel `but not with `@user/adapter-node` working deployed adapter-vercel [link] NOT working deployed adapter-node [link] I've tried also to add BODY_SIZE_LIMIT, however changing to any value would not make the server start Error: Invalid BODY_SIZE_LIMIT: ''Infinity','.…

### CASE-8035 · Using svelte-create with Svelte 5 installs next version 1
- **Principles**: P-G4, P-E3 · **Env**: windows, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When you create a new project with create-svelte, it installs `5.0.0-next.1`, and not the next version of `eslint-plugin-svelte` either. ### Reproduction `pnpm create svelte@user` and select the Svelte 5 option. ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (16) x64 Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz Memory: 45.73 GB / 63.93 GB Binaries: Node: 21.4.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.21 - ~\AppData\Local\pnpm\yarn.CMD npm: 9.3.1 - C:\Program Files\nodejs\npm.CMD pnpm: 8.15.5 - ~\AppData\Local\pnpm\pnpm.CMD bun:…

### CASE-8042 · type-aware lints error with default generate eslint config
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug Hello!!! I'm new to svelte, first issue: type-aware lints, when enabled, are not supported out of the box. I also posted about this in the Discord: [link] ### Reproduction Project here: [link] - npm create svelte@user my-app ``` ❯ npm create svelte@user my-app Need to install the following packages: [email] Ok to proceed? (y) y create-svelte version 5.3.3 ┌ Welcome to SvelteKit! │ ◇ Which Svelte app template? │ SvelteKit demo app │ ◇ Add type checking with TypeScript? │ Yes, using TypeScript syntax │ ◇ Select additional options (use arrow keys/space bar) │ Add ESLint for…

### CASE-8045 · Opt-out of `data-svelte-h`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug In the following example, even if the form's default action returns `{ date: new Date() }` - `formArray` is updated and therefore logged in the console. - `<button>` element is not recreated, since it has a `data-svelte-h` attribute. - `<button>` element stays disabled. ```svelte <script lang="ts"> import { enhance } from '$app/forms'; export let form; $: formArray = [form]; $: console.log(formArray); </script> <form method="post" use:enhance on:submit={(e) => { if (e.submitter instanceof HTMLButtonElement) e.submitter.disabled = true; }} > {#if !form || form.date} {#each…

### CASE-8067 · redirect from form action uses POST, not GET
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug The redirect()-method of a form action seems to use POST-Method for the redirected request, which is not, what I need when redirecting to a page. ### Reproduction I am using a login widget on my basic layout. As Actions can only be implemented on +page.server.ts, not on +layout.server.ts, I have created an empty login page that just implements the action. In that action I read the formdata, proceed with the login and redirect to the calling page. ```ts import { base } from "$app/paths"; import { redirect } from "@[meta framework]"; export const actions = { default: async…

### CASE-8069 · Better support for form action redirects inside handle() hook
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the problem I would like to use hooks to handle things like ensuring session validity. This way, I can be sure that security settings are applied sitewide, and not have to remember to apply them in every single form action handler. But hooks don't play nicely with redirects when it's a form action handler. Let's say you have this handler: ```ts // hooks.server.ts export const handle = async () => { if (!isLoggedIn()) { throw redirect(303, '/login'); } }; ``` and these actions: ```ts // +page.server.ts export const actions = { alwaysRedirects: async () => { throw redirect(303,…

### CASE-8080 · 500 internal error using form actions from different directory when calling `fail()` (node.component is not a function)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When i return a `fail()` inside a form action which is in a different directory than the `+page.svelte` itself i throws an error saying `TypeError: node.component is not a function` I have two identical `+page.server.js` files one inside `/routes` and one inside `/routes/auth`. It works as expected when the `+page.server.js` and `+page.svelte` files are inside the same directory. I believe it's because of the url changing after the form submission to `/auth?/login` so it tries to load the `+page.svelte` file from the `/auth` directory which there is not thus throwing the…

### CASE-8094 · Unhelpful error message for `throw invalid()`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug Using `throw invalid()` instead of `return invalid()` in an action displays an unhelpful error message in the server console: `[object Object]` My silly brain decided to spend over an hour trying to debug this without realising I was using `throw` where I needed to use `return` (despite using form actions since it came out). It may be helpful to return a more useful error message so someone else doesn't fall into the same trap. ### Reproduction Press the submit button. Expected: action returns form values to page. Actual: error message in console: [object Object] [link]…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8003 · Remote `query` with `redirect` produce 500 `undefined` error
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: ### Describe the bug Route with remote `query` which has `redirect` results in 500 `undefined` error. [Route]([link]): ```svelte <script lang="ts"> import { verifyUser } from "$lib/remote/auth.remote"; await verifyUser() </script> <p>protected</p> ``` [Remote `query`]([link]): ```ts import { query } from "$app/server"; import { redirect } from "@[meta framework]"; export const verifyUser = query(() => { redirect(307, '/') }) ``` Error: <img width="892" height="357" alt="Image" src="[link] /> ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 26.0 Shell:…

### CASE-8004 · Remote Function code is always bundled to Client
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Even when explicitly disabling the config flags, the remote functions code always gets bundled for the client. Not sure if it's also being served. <img width="1719" height="988" alt="Image" src="[link] /> ### Reproduction [link] > npx vite-bundle-analyzer ### Logs ```Shell ``` ### System Info ```Shell irrelevant ``` ### Severity annoyance ### Additional Information _No response_

### CASE-8009 · Component import unresolved inside boundary
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When you wrap a +page.svelte inside a boundary all of a sudden all component imports break. Quick workaround is to do it inside a +layout.svelte using {@user children?.()}, i don't want to do it in the root of my project though. ### Reproduction [link] It really is just wrapping the entire page with a boundary, now all components are gone. In this example it just kept loading forever, sometimes it doesn't even show the loading snippet (refresh luck). <img width="579" height="853" alt="Image" src="[link] /> ### Logs ```Shell None at runtime, ide gives me the following…

### CASE-8025 · enhanced-img not building <enhanced:img />
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍2 💬4 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug The `@user/enhanced-img` package seems to not be building the `<enhanced:img />` tags into what they are supposed to be built into. Instead they are just staying as the `<enhanced:img />` tags after build resulting in the images not being shown. The package is working when using in a css url (like `url($lib/my-image.png?enhanced`). ### Reproduction [link] Install latest `@user/enhanced-img` Try and use the `<enhanced:img />` tag No image shown, <enhanced:img /> not built into <picture> ... </picture> ### Logs _No response_ ### System Info ```Shell System: OS: Windows 11…

### CASE-8030 · Build fails when `@user/enhanced-img` was installed on ARM CPU but the current environment is x86
- **Principles**: P-A3, P-H1 · **Env**: linux, svelte
- **Signals**: 👍0 💬4 · open · labels: documentation/needs-decision
- **Excerpt**: ### Describe the bug I'm trying to deploy a project with `@user/enhanced-img:0.3.0` to Cloudflare. I ran `npm i -D @user/enhanced-img` on a Mac with an ARM-based architecture. When I deploy to Cloudflare (their architecture is x86) and I get the following error during the SvelteKit build process: ``` 16:11:36.861 | npm ERR! command failed -- | -- 16:11:36.866 | npm ERR! command sh -c node postinstall.js 16:11:36.872 | npm ERR! Error: Cannot find module @user/rollup-linux-x64-gnu. npm has a bug related to optional dependencies ([link]). Please try `npm i` again after removing both…

### CASE-8031 · svelte-package: svelte-5: Using ComponentConstructorOptions in svelte.d.ts after running svelte-package
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: types / typescript/awaiting submitter
- **Excerpt**: ### Describe the bug After running `pnpm package`, and checking a created svelte.d.ts file, it uses `ComponentConstructorOptions` with stroke line on VSCode. 'ComponentConstructorOptions' is deprecated.ts(6385) index.d.ts(3, 5): The declaration was marked as deprecated here. <img width="1066" alt="image" src="[link] framework]/assets/147320/d956307b-b13b-4e4f-bffe-a6ab55d8ce0e"> ### Reproduction Create a sample component, `lib/Mycompo.svelte`: ``` <script lang="ts"> interface Props { firstName: string; lastName: string; } let { firstName, lastName }: Props = $props(); </script> <p> Hello…

### CASE-8032 · Cloudflare's Invocation routes cannot be replaced/extended [adapter-cloudflare]
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug I am experiencing an issue with the `@user/adapter-cloudflare` where the `_routes.json` file I create is not being accepted or used by Cloudflare Pages. Instead, an autogenerated version of `_routes.json` replaces it, preventing the execution of specific Cloudflare Functions. ### Reproduction 1. Create a `_routes.json` file in the root of the Svelte project with the following content: ```json { "version": 1, "description": "Generated by @user/adapter-cloudflare", "routes": [ { "pattern": "/og-image-intro", "custom_domain": false }, { "pattern": "/og-image-coreid/*",…

### CASE-8036 · Custom Element (created by js) doesnt load correctly if pageoption ssr=true and csr=true but if ssr != csr
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug When using CustomElements created by js u cant use them in +page.svelte or +layout.svelte file if the pageoption is `ssr = true` and `csr=true` the default. The CustomElement loads first correctly during ssr but after csr has finished it disappears. How ever when settings ssr=false so that csr=true. It loads correctly. So customelements work for ssr only and for csr only but not when both is activated. See the video for demonstration. [link] framework]/assets/70175424/c35204af-ddd8-4b66-b76f-34bbd7649ef0 ### Reproduction create the sveltekit project with vite ``` npm…

### CASE-8040 · pushState and replaceState throw error in onMount
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍14 💬4 · closed
- **Excerpt**: ### Describe the bug Using `pushState` or `replaceState` in `onMount` throws `Uncaught (in promise) TypeError: root is undefined`. (See reproduction) <img width="741" alt="grafik" src="[link] framework]/assets/61949735/de5196fa-817c-4dfa-b878-01c0f33c9977"> ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.18.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 9.4.2 - /usr/local/bin/npm pnpm: 8.10.5 -…

### CASE-8046 · how to access a rawBody in an endpoint
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link] framework]/discussions/10832 <div type='discussions-op-text'> <sup>Originally posted by **jesuscovam** October 5, 2023</sup> ### Describe the bug To validate a request from stripe, I have to provide them the rawBody of the request, but every try throws an error. <img width="815" alt="Screenshot 2023-10-04 at 5 39 10 p m" src="[link] framework]/assets/46403187/73fee6c3-b551-4fe8-925b-a7a9f24b5d92"> I have tried other solutions that I read in other issues that worked for some users but I couldn't make it work Solution with text: [link] framework][ref][ref] Solution with…

### CASE-8050 · `iframe` inserted into "dynamic" table header
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I made a dynamic table which columns are displayed upon user preference, using stores. When the user choses to display the last column a weird `<iframe>` is inserted in the `<thead>` row elements before the newly displayed `<th>` element. And this, of course, breaks the table flow. ### Reproduction Make a table like the following tree: ```svelte <script> import {showColumnB} from '$lib/stores/preferences'; </script> <table> <thead> <tr> <th>A</th> {#if $showColumnB} <th>B</th> {/if} </tr> </thead> <tbody> <tr> <td>A</td> {#if $showColumnB} <td>B</td> {/if} </tr> </tbody>…

### CASE-8054 · awaiting goto() same page in load causes duplicate #if content
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug Having this in a client-side load function (e.g. to clear query params): ``` await goto(`${url.pathname}`, { replaceState: true }); ``` leads to duplicate content in `{#if}`'s when the condition becomes `true` at runtime. E.g. ``` <script> let yep = false; </script> <button on:click={() => yep = true}>Show</button> {#if yep} Yeho {/if} ``` ![image]([link] framework]/assets/12587509/d9d3552e-0467-4468-930d-c38ebae9e19c) ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5825U with Radeon…

### CASE-8055 · Couldn't deploy to Github pages
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I wanted to deploy a simple portfolio app in github pages, but got this error. GET [link] net::ERR_ABORTED 404 Added base URL, used the right adapter but still same issue ![image]([link] framework]/assets/46109601/f76122d1-8498-45a9-b260-69f294e1ffae) ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.22621 CPU: (12) x64 12th Gen Intel(R) Core(TM) i5-12400 Memory: 8.57 GB / 15.78 GB Binaries: Node: 20.4.0 - C:\Program Files\nodejs\node.EXE npm: 9.7.2 - C:\Program Files\nodejs\npm.CMD pnpm: 8.6.9 -…

### CASE-8056 · Index page trailing slash 200
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Index page returns 200 on homepage with trailing slash. ### Reproduction [link] ![image]([link] framework]/assets/33694447/33bb26cb-99f9-450e-9657-bb3bc8f84772) ### Logs _No response_ ### System Info ```Shell any ``` ### Severity annoyance ### Additional Information _No response_

### CASE-8059 · Using adapter-static and trailingSlash='always' in svelte.config.js doesn't work when using group layouts
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When: * Using adapter-static * and setting `trailingSlash: 'always'` inside the adapter settings in svelte.config.js * and using [group layouts]([link]) ![image]([link] framework]/assets/344481/829887f1-16b1-4c5b-9318-1c0bed1ab574) And: * running `npm run build` Then: * route pages are still generated as `/a.html` instead of the expected `/a/index.html` . * Using the screenshot above, the build generates `privacy.html` and `terms.html` instead of `privacy/index.html` and `terms/index.html` This is confusing because the [adapter-static]([link]) docs say that this should…

### CASE-8061 · npx svelte-migrate svelte-4 broken
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When I run the migrate script `npx svelte-migrate svelte-4` on my SvelteKit project I get an error. ![image]([link] framework]/assets/30938967/5e6f8b68-5349-47d4-abf2-a8eeab64c5bb) ### Reproduction Git repo: [link] ### Logs ```Shell PS C:\projects\private\reitzner.at> npx svelte-migrate svelte-4 You must specify one of the following migrations: routes ``` ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (16) x64 AMD Ryzen 7 PRO 5850U with Radeon Graphics Memory: 13.25 GB / 31.56 GB Binaries: Node: 18.14.0 -…

### CASE-8066 · {@user string} loses content during client site hydration
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: p3-edge-case
- **Excerpt**: ### Describe the bug In my svelte-kit project, the pages are generated via markdown files. The frontmatter sometimes includes fields that contain markdown like the text field [here]([link]) which is converted into an HTML string in `+page.server.ts` and then sent to `+page.svelte` and rendered inside the components via using `{@user text}` as done [here]([link]) When I visit the page it first renders all the contents of the HTML string then later on when it hydrates some of the contents get hidden as shown in the video here: [link] ### Reproduction ~~Repo link: [link] Visit [link] and the try…

### CASE-8068 · [Docker/SvelteKit] Cross-site post form submissions are forbidden
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I was working with SvelteKit and I got an issue of cross-site post from submission are forbidden, I was setting up SvelteKit with Django along with Docker. Below is my code for `Dockerfile` ``` # frontend_aiweb_storm/Dockerfile # Use the official Node.js image as the base image FROM node:18.1.0 # Set the working directory WORKDIR /app # Copy package.json and package-lock.json COPY package*.json ./ # Install dependencies RUN if [ "$PRODUCTION" = "true" ]; then \ npm ci --production; \ else \ npm ci; \ fi # Copy the rest of the application code COPY . . RUN if […

### CASE-8072 · automatic type safety for load function not working for +page@.svelte pages
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug any +page.svelte page get the type of the data prop automatically ([link]) but it doesn't seem to work for +page@.svelte pages (that is, pages that break out of the layout hierarchy) ![image]([link]) ### Reproduction github repo with the issue: [link] you can open it in gitpod with: [link] steps: - create a new svelte-kit project with ts support - create file `/src/routes/sub/+page.ts` ``` export const load = async() => { return { name: 'sas', surname: 'open' } } ``` - create file `/src/routes/+page.svelte` (data type is correctly inferred) ``` <script lang="ts"> export…

### CASE-8078 · load event should check event source
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug any img element e.g `<img src="demo-path/demo.jpg"/>` can be captured by `event.params` in `load` function in `routes/[key1]/[key2]+page.svelte` ``` html ... <img src="demo-path/demo.jpg"/> ... ``` in `routes/[key1]/[key2]+page.ts` ``` typescript export const load: LayoutLoad = async (event) => { console.log(event.params) // { key1: 'demo-path', key2: 'demo.jpg' } } ``` event source should be limited to only `a` ### Reproduction any simple code like above ### Logs _No response_ ### System Info ```Shell Binaries: Node: 18.2.0 - /usr/local/bin/node Yarn: 1.22.18 -…

### CASE-8085 · Type error when click preloaded url link 1.0.0-next.565 / 567
- **Principles**: P-A3, P-H1 · **Env**: linux, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have a few links preloaded, but when I click con them, goes to the URL but browser console shows me an error: ![image]([link]) ![image]([link]) ![image]([link]) ### Reproduction ```svelte <script> import { preloadData } from '$app/navigation'; </script> <li ...... on:click={() => { if (button.url) { goto(button.url); } }} on:mouseenter={() => { if (button.url) preloadData(button.url); }} > ``` ### Logs _No response_ ### System Info ```Shell System: OS: Linux 3.10 CentOS Linux 7 (Core) CPU: (4) x64 Intel Xeon Processor (Skylake, IBRS) Memory: 1.52 GB / 15.51 GB…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8005 · Remote functions: Build fails with shared variables from <script module>
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · open · labels: vite
- **Excerpt**: ### Describe the bug As i've mentioned in [link] framework][ref][ref], when you share a validation schema (or something else) from a `<script module>` in `routes/+page.svelte` with your `routes/login.remote.js` the build will fail because the order of declarations is wrong in the output files of `.svelte-kit/`. For example in my case the output looked like this: ```js import { z as attributes } from "./index.js"; import "@[meta framework]/internal/server"; import "./utils.js"; import "@[meta framework]"; import { f as form } from "./query.js"; import * as z from "zod"; import {…

### CASE-8014 · `+server.ts` route inside `.well-known` is not type-checked
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: types / typescript
- **Excerpt**: ### Describe the bug I have a `+server.ts` file here `src/routes/(search_engines)/.well-known/assetlinks.json/+server.ts`. It's contents are not correctly typechecked. Neither by my LSP, nor by `pnpm run check`. --- As you can see inside my editor it does not interpret the contents correctly. Which is weird, because inside the "neighbouring file" `src/routes/(search_engines)/robots.txt/+server.ts` everything is typechecked as expected. <img width="449" height="55" alt="Image" src="[link] /> Not only imports are affected, but also pain syntax errors, such as using a variable that was never…

### CASE-8024 · SvelteKit `alias` config option does not properly generate `tsconfig` entries for directories containing `.`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug For example: ```js import adapter from '@user/adapter-auto'; import path from 'path'; import preprocess from 'svelte-preprocess'; /** @user {import('@[meta framework]').Config} */ const config = { // Consult [link] // for more information about preprocessors preprocess: [preprocess()], kit: { adapter: adapter(), alias: { $test: path.resolve('./tes.t'), $lib: path.resolve('./src/lib') } } }; export default config; ``` generates `.svelte-kit/tsconfig.json` with missing `/*` variant for the `$test` alias: ``` { "compilerOptions": { "paths": { "$test": [ "../tes.t" ], "$lib":…

### CASE-8027 · weird behaviour with json imports
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If a json is imported with a name which is as same as a variable name used in a function and a proxy is created from the json, It is somehow being overwritten. If I use the structured clone of the json while creating the proxy the issue doesn't occur. ### Reproduction [stackblitz]([link]) ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.2.3 -…

### CASE-8043 · Service worker base path is not available in development
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When developing a service worker in sveltekit, importing the `base` variable from the `$service-worker` produces an error when running in dev mode, but it works when running in production. ### Reproduction [link] ### Logs ```Shell [vite] connecting... service-worker.js:6 Uncaught SyntaxError: The requested module '/@user/__x00__virtual:$service-worker' does not provide an export named 'base' (at service-worker.js:6:10) localhost/:1 Uncaught (in promise) TypeError: Failed to register a ServiceWorker for scope ('[link]) with script ('[link]): ServiceWorker script evaluation…

### CASE-8063 · Error "--use-openssl-ca is not allowed in NODE_OPTIONS" after upgrade 1.15.2->1.18.0
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug Project that compiles fine with @[meta framework] 1.15.2 and ``` NODE_OPTIONS=--use-openssl-ca ``` present in environment (required for custom npm package registry to work), after upgrading kit to 1.18.0 with ``` npm update --save @[meta framework] ``` throws an error ``` [vite-plugin-sveltekit-compile] Initiated Worker with invalid NODE_OPTIONS env variable: --use-openssl-ca is not allowed in NODE_OPTIONS ✓ built in 8.82s error during build: Error [PLUGIN_ERROR]: Initiated Worker with invalid NODE_OPTIONS env variable: --use-openssl-ca is not allowed in NODE_OPTIONS at…

### CASE-8070 · jsx support
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug In the script tag I imported a component and saved it in a variable. Syntax error was reported ### Reproduction ``` <script> import { page } from '$app/stores'; import '../app.css'; import SettingsIcon from '~icons/material-symbols/settings'; const routes = [ { id: '/', name: 'Home' }, { id: '/about', name: 'About' }, { id: '/settings', name: 'Settings', icon: <SettingsIcon /> } ]; </script> ``` ### Logs _No response_ ### System Info ```Shell System: OS: macOS 13.2.1 CPU: (8) arm64 Apple M1 Memory: 106.91 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.19.1 -…

### CASE-8075 · Usage of process.env with $env module is unclear
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript, svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the problem The documentation for the `$env` modules seems to focus on using `.env` files. [link] - There is a small mention that `process.env` can be used in the _static_ module [here in the tutorial]([link]), but this doesn't really work with typescript. - There's a bit in the Node Adapter docs that says `$env` [doesn't work _in production_]([link]). I'm also not sure "static" is where that should be. I want to use `process.env.X` dynamically. Additionally, If I don't have a `.env` file I _think_ the `$env` module is not even generated, so that fails in `svelte-check`. It would…

### CASE-8076 · `process.env` overwritten with `{ SVELTEKIT_FORK: true }` on Netlify
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Ever since version 1.3.1 the entirety of `process.env` is being overwritten with an object containing a single key, `{ SVELTEKIT_FORK: true }`. Using SvelteKit's `$env/static/private` handling works, but process.env is still totally overwritten. I'm not sure if this is by design. ### Reproduction [link] This repo does not show the entire `process.env` being overwritten, probably due to the different functioning of WebContainers to Netlify's environment. You can still notice env variables being overwritten by changing between versions 1.3.0 and 1.3.1. v1.3.0: ```…

### CASE-8089 · Add variables that contain URls
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the problem When building your app, at some point you might wanna move a page to a different URL. But at that point you could already have dozens of links pointing to that page with the given static URL. Example: We have the Login Page in `/Account/Login` and we have set dozens of links all over the Webapp like that: `<a href="/Account/Login">Login</a>` Now, we want to move the Login page to this URL: `/Account/User/Login`. Now its a mess, all the links are broken and we have to fix em manually. ### Describe the proposed solution Add the feature to add a `const` that we can…

### CASE-8090 · Form submission cannot be resolved - regression introduced between 1.0.0-next.519 (working) and 1.0.0-next.522 (broken)
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug **TLDR;** I have tracked down a breaking change when I updated my SvelteKit dependency from `1.0.0-next.519` (working) to `1.0.0-next.522` (broken). I have `+page.server.ts` that exports both a `load` handler and a default `actions` handler. When I POST to the action, I get a 404 page with the message `Function not found...`. The logs complain of `Missing form submission function handler` as it iterates through different variants of the endpoint. Issue is still happening with the latest SvelteKit version (`1.0.0-next.525`). **Here are the specifics:** I have an action…

### CASE-8093 · Build error after upgrading SvelteKit from [ref] to [ref]: Cannot access 'x' before initialization
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: vite/blocked by upstream
- **Excerpt**: ### Describe the bug This appears to be a circular dependency, but it isn't (at least not in the source code). However, while building the app after upgrading from `[ref]` to `[ref]`, a circular dependency occurs. After many hours of debugging and pulling out my hair, I realized that this occurs only when a hook imports one of the variables—removing the `import` from the hook causes the project to build successfully. As the reproduced example below shows, the variables involved were not interdependent. This is the error I get: ```sh…

### CASE-8095 · After setting in form action value of `event.locals.user` should be accessible in `load()` or not yet implemented ?
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I'm not sure if it not yet implemented or it's a bug. It was mentioned here: [link] framework]/discussions/5875#discussioncomment-3540263 ``` + // success case + event.locals.user = user; // so we can read it in `load` ``` ### Reproduction ```svelte // +page.svelte <script> import { enhance } from '$app/forms'; import { invalidateAll } from '$app/navigation'; export let data; </script> <h3>{data.timestamp.toISOString()}</h3> <form method="post" action="/" use:enhance={() => { return ({ form, result }) => { if (result.type === 'success') { form.reset(); invalidateAll(); }…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8007 · Failures after the recent update
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug Hi Team, We are seeing failures in our builds after the recent package update. Here is the below error: ``` [ref] 11.46 node_modules/@[meta framework]/src/runtime/form-utils.svelte.js (6:9): "untrack" is not exported by "node_modules/svelte/src/runtime/ssr.js", imported by "node_modules/@[meta framework]/src/runtime/form-utils.svelte.js". 11.46 file: /usr/src/app/.latitude/app/node_modules/@[meta framework]/src/runtime/form-utils.svelte.js:6:9 [ref] 11.46 [ref] 11.46 4: [ref] 11.46 5: import { DEV } from 'esm-env'; [ref] 11.46 6: import { untrack } from 'svelte'; [ref]…

### CASE-8011 · Simultaneously `isRemoteRequest: false` and `route.id: null` in remote function during SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed · labels: needs-decision
- **Excerpt**: ### Describe the bug When you call a remote function during SSR, the `event.isRemoteRequest` is false, but the `route.id` is still null. Probably either `event.isRemoteRequest` should be `true` if it's not part of the same request, or `route.id` should match the `route.id` from the page request. ### Reproduction You'll notice in the console that the hook shows a `route.id` of `/(home)` and the remote function shows a `route.id` of null. However, both show `isRemoteRequest` is false. [link])%2Ftest.remote.js ### Logs If the URL was `/test`, you'd see: ```shell hook:isRemoteRequest false…

### CASE-8013 · `RemoteFunction.enhance` callback type mismatch
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: types / typescript
- **Excerpt**: ### Describe the bug The documentation [shows using an async callback]([link]) but [the types don't]([link] framework]/blob/main/packages/kit/types/index.d.ts#L1695-L1702) The callback passed into `enhance` should return `(Promise<void> | void)`. ### Reproduction - ### Logs ```Shell - ``` ### System Info ```Shell - ``` ### Severity annoyance ### Additional Information -

### CASE-8020 · Spreading props on an anchor tag, `base` becomes "." on the browser
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When spreading any object on an anchor tag that uses `base` (from `$app/paths`) as part of the URL, `base` becomes `"."` in the browser after hydration. So with something like this: ```svelte <script> import { base } from "$app/paths"; const someObject = {}; </script> <a href="{base}/some/path" {...someObject}>Inspect me</a> ``` The href of the anchor tag will be `"./some/page"`. However, by just removing `{...someObject}` from the anchor tag, it works as expected. ### Reproduction [link] (just inspect the links, or click twice on the broken link to trigger a 404). ###…

### CASE-8022 · Setting `trailingSlash = "always"` in layout with a `srr = false` page causes 404 errors in prod
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have a project using `adapter-static`. I've set up the following in my `src/+layout.server.js` file: ```js export const prerender = true; export const trailingSlash = "always"; ``` (Unfortunately the hosting setup I'm using requires `trailingSlash` set to `"always"`) If I have a route `src/foo/+page.svelte` that isn't able to be server side rendered, creating a `src/foo/+page.js` file and filling it with: ```js export const ssr = false; ``` will work fine in dev. But in prod (or using Vite's preview mode) the page 404s. The network inspector says it's failing to fetch…

### CASE-8033 · adapter-node upgrade lead to Memory Leak on SSR
- **Principles**: P-F4, P-F5, P-H3 · **Env**: macos, svelte
- **Signals**: 👍0 💬4 · closed · labels: pkg:adapter-node/awaiting submitter
- **Excerpt**: ### Describe the bug We are observing memory leak in our code after upgrading to svelte kit 2. On further investigation found out the leak is coming from the fetch function (part of event object and not global fetch) used in load function of page.ts. To validate the fact we used global fetch and saw no memory leak. ### Reproduction 1) Create new svelte-kit project using this command => npm create svelte@user my-app 2) call an api in load function in one of the page.ts using load fetch and not global fetch ### Logs ```Shell N.A ``` ### System Info ```Shell System: OS: macOS 12.1 CPU: (10)…

### CASE-8038 · Error importing $env/static/private in hooks.server/index.ts in dev mode
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Importing from `$env/static/private` inside a file within a `src/hooks.server/` folder results in an incorrect error in dev mode: Internal server error: Cannot import $env/static/private into client-side code At that point, the page has already been SSR rendered. No client-side code is attempting to import the env value. The app builds and runs fine. And if `src/hooks.server.ts` is used, it works correctly in dev mode too. But using `src/hooks.server/index.ts` (which you may do if you have multiple hooks for instance) triggers the error. It also seems like other…

### CASE-8044 · SPA Mode: Redirect from +layout.ts doesn't work on 404
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: ready to implement
- **Excerpt**: ### Describe the bug With the following conditions: - SPA mode enabled (ssr = false in +layout.ts) - A redirect from the load function in +layout.ts - An unknown route (e.g. '/bad_route`) Expected Behavior: It either redirects or the error page shows up. Actual Behavior: Neither the error page nor the redirect works. Instead nothing loads at all. ## Notes In the actual case where I encountered this, the redirect was to a login page when we detect that the user is not logged in. This behavior happens either on initial load or from a client-side navigation, but only when SSR is disabled. The…

### CASE-8047 · async errors report the wrong location during SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: error handling/vite
- **Excerpt**: ### Describe the bug I've been suffering from incorrect error locations for a long time and was very excited about [ref] and version 1.25.1. However, it seems to be about server rendering and some IDE, and not related to errors in code executed in ```hooks.server.js```. Even in a ```stackblitz``` environment, the phenomenon is well reproduced. In the project I linked there is only a 2 line difference, but it is not consistent at all. Sometimes it is smaller than it actually is, but most of the time they report a larger number. I keep the asynchronous infinite loop executed in…

### CASE-8062 · When using `adapter-static` for prerender, an error occurs if `+layout.server.ts` file exists.
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using `adapter-static` for prerender, an error occurs if `+layout.server.ts` file exists. This error occurs when certain pages exist only conditionally. By the way, `+layout.server.ts` file is needed to crawl in ssr when prerender is executed with i18n applied. Can this problem be resolved? ### Reproduction 1. checkout [link] 2. npm i 3. npm run docker-build 4. npm run docker-preview 5. view [link] -----> 200 ok 6. view [link] ----> error 7. view [link] ----> error 8. view [link] ----> 404 ### Logs _No response_ ### System Info ```Shell System: OS: macOS 12.3 CPU:…

### CASE-8065 · Declarative shadow DOM reacts strangely in sveltekit
- **Principles**: P-F4 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug Tried using declarative shadow DOM in sveltekit and it does not seem to support it. Firstly `<template>` tags are stripped from output so had to work around by using `<svelte:element this="template">` but even then the hydration cycle results in a flash and DOM nodes being replicated. ### Reproduction - [link] Navigate to shadow dom page (refresh browser to get server rendered content), and inspecting the DOM will show that shadow dom has been created but template has been re-rendered via sveltekit hydration. Particularly noticeable when using external css file, results…

### CASE-8071 · Vite 4.2 causes change in SSR behaviour
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed · labels: vite
- **Excerpt**: ### Describe the bug Since the update to vite `4.2`, it seems that the way modules are loaded with SSR has changed. In the attached example, the `+layout.svelte` file contains a guard so that it is only rendered on the client. The relevant `+page.svelte` includes an import to a 3rd party module which uses `window`. This is obviously not present for SSR. On Vite `4.1` the guard prevents the page from being rendered and so the offending module is never loaded. On Vite `4.2` the module is loaded regardless. ### Reproduction A reproduction of the issue can be found at [link] To reproduce: - Clone…

### CASE-8074 · External JS not loaded blocking in <svelte:head> on client-side nav
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug During SSR, putting an external script in `<svelte:head>`... ```svelte <svelte:head> <script src="[link]></script> </svelte:head> ``` ...then calling it in onMount... ```svelte import {onMount} from 'svelte'; let message = '...' onMount(() => { if (Stripe) { message = 'Stripe() is available!' } }) ``` ...works great. However, when you use client-side nav and open the page, the `Stripe` object isn't available during `onMount`. Is this intended behavior? I'd expect that blocking JS scripts in <head> should work the same in SSR and client-side nav. ### Reproduction [Here's a…

### CASE-8083 · failed to start dev server
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I created the project when the version of kit was 1.0.0-next.577 and leave the version of kit set to 'next' in package.json. And I cannot start the dev server today and got below error message ``` failed to load config from /home/raymc/projects/upwork/citynetnews/vite.config.js error when starting dev server: file:///home/node_modules/.pnpm/@[email][email][email]/node_modules/@[meta framework]/src/exports/vite/dev/index.js:6 import { isCSSRequest } from 'vite'; SyntaxError: The requested module 'vite' does not provide an export named 'isCSSRequest' at…

### CASE-8086 · Inconsistent order of global styles
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · open · labels: documentation
- **Excerpt**: ### Describe the bug There seems to be an inconsistency in the ordering that stylesheets are applied to the document, depending on whether a page is accessed via client-side routing from another page, or via server rendering the page directly. I'm not sure if I'm doing something wrong, but I shouldn't expect final stylesheet ordering to depend on page access order, right? In my [project]([link]) I'm getting this discrepancy only in a production build, everything seems ok when running `vite dev`. ### Reproduction [link] Added `src/routes/about/styles.css` and a rule to `src/routes/styles.css`.…

### CASE-8092 · SvelteKit restores removed or modified url hash after load function
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍4 💬4 · open · labels: router
- **Excerpt**: ### Describe the bug I am building a SvelteKit SPA app that is using Authorization Code Flow with PKCE with Keycloak. I want to handle the auth redirect in the `load()` function of the root `+layout.js` file. During auth handling, Keycloak JS SDK removes the hash from the url. The problem is that SvelteKit restores the hash after `load()` function and the rendered url has the auth redirect hash visible. See the repro below. ### Reproduction `+layout.js` ```js export const ssr = false; /** @user {import('./$types').LayoutLoad} */ export async function load() { console.log('[+layout.js] before…

### CASE-8096 · `fetch` broken in SSR on Cloudflare Pages
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Attempting to `fetch` from +page.ts fails. The original error I came across said `Failed to get the 'credentials' property on 'Request': the property is not implemented.` I posted about this in the Cloudflare Discord and the finger was pointed at [link] framework][ref]/files. In the [original issue]([link] framework][ref]) it was stated "At the time this hack was added, the workers runtime didn't support the credentials header set on a request - this looks to be support now" but the Cloudflare people on the Discord don't agree with this. I made a minimal test repo,…

### CASE-8097 · Can't seem to disable SSR compilation
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Yesterday, I was able to avoid SSR compilation with the following code in `hooks.js`: ``` export async function handle({ event, resolve }) { return resolve(event, { ssr: false }); } ``` Then, late last night I updated to `next` and had to move the `prerender` default out to `+layout.js` so I thought I was having a problem relating to [link] framework][ref] ... but whatever the cause, files that don't compile in a node environment are being compiled as though I have SSR enabled and I think they shouldn't be. ### Reproduction Here is the smallest repro I could make: [link]…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8015 · Chrome Devtools data appears in `params` in load
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Not sure how this happens, but it seems that the chrome devtools stuff causes the load to re-run...? [link] ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.5 CPU: (8) x64 Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz Memory: 54.04 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.14.0 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 10.9.2 - /usr/local/bin/npm pnpm: 10.3.0 - /usr/local/bin/pnpm bun: 1.0.0 - ~/.bun/bin/bun Browsers: Brave Browser: 136.1.78.97 Chrome: 137.0.7151.69 Safari: 18.5 npmPackages:…

### CASE-8017 · [v2.20.0] Build fails with adapter-vercel and edge runtime
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, linux, svelte
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug In version 2.20.0, using adapter-vercel with the `runtime: 'edge'` option, the build fails with the following error: ``` Top-level await is not available in the configured target environment ("es2020") ``` ### Reproduction Go to [link] and run `npm run build`. Removing `runtime: 'edge'` fixes it, as well as reverting to sveltekit version 2.19.2. ### Logs ```Shell ``` ### System Info ```Shell System: OS: Linux 5.0 undefined CPU: (6) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 - /usr/local/bin/node…

### CASE-8019 · Streaming on iOS Safari mobile in portraite mode broken?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, svelte, mobile, iphone, ipad
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Description: I have noticed a strange bug with SvelteKit’s streaming functionality. My app uses streaming as described in the [SvelteKit documentation]([link]). However, recently, streaming of the rest of the page stopped working in Safari on an iPhone SE when in portrait mode. If I switch to landscape mode, streaming start to work as expected. The issue also does not occur on an iPad—everything functions correctly there. This used to work fine before, so something has changed. I am using the latest iOS and Safari mobile. Reproduction Steps: - Open this page in Safari on…

### CASE-8021 · import { dev } from '$app/environment' is incorrectly true when NODE_ENV='test'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug import { dev } from '$app/environment' is incorrectly true when NODE_ENV='test' It breaks certain aspects of testing when underling code relies on value of `dev` to be false during tests. ### Reproduction In any playwright test assert `dev` to be false - it will fail. ### Logs ```Shell ``` ### System Info ```Shell System: OS: Windows 11 10.0.26100 CPU: (8) x64 Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz Memory: 3.01 GB / 15.75 GB Binaries: Node: 20.10.0 - C:\nodejs\node.EXE npm: 10.2.3 - C:\nodejs\npm.CMD pnpm: 9.15.1 - node_modules\.bin\pnpm.CMD Browsers: Edge: Chromium…

### CASE-8026 · `TypeError: Failed to fetch` from `navigate`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Captured in Sentry. I'm not sure what the cause is - is this expected behaviour? <img width="839" alt="image" src="[link]> ### Reproduction Not sure how to reproduce ### Logs _No response_ ### System Info ```Shell System: OS: macOS 15.0.1 CPU: (8) arm64 Apple M1 Pro Memory: 73.28 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.0 - ~/.nvm/versions/node/v20.11.0/bin/node npm: 10.2.4 - ~/.nvm/versions/node/v20.11.0/bin/npm pnpm: 9.7.0 - /opt/homebrew/bin/pnpm bun: 1.0.0 - ~/.bun/bin/bun Browsers: Brave Browser: 130.1.71.114 Chrome: 130.0.6723.70 Edge: 130.0.2849.56…

### CASE-8034 · Email validator on $page.form is outdated or just wrong
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Email validator returns incorrect email error on valid emails. This is valid email address: `[email]` and your system marks it as incorrect. `{"email":"[email]","incorrect":true}` ### Reproduction Simple HTML form with email input type ### Logs _No response_ ### System Info ```Shell System: OS: macOS 14.4.1 CPU: (12) arm64 Apple M2 Max Memory: 2.80 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.3 - ~/.nvm/versions/node/v21.7.3/bin/node npm: 10.5.0 - ~/.nvm/versions/node/v21.7.3/bin/npm pnpm: 8.9.0 - /opt/homebrew/bin/pnpm Browsers: Chrome: 123.0.6312.124 Safari:…

### CASE-8037 · Automatically disable +layout.server.ts and server.ts for static sites
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-F4 · **Env**: ios, android, vite, svelte
- **Signals**: 👍1 💬4 · open
- **Excerpt**: ### Describe the bug I'm writing on code base to rule them all (Capacitor SPA (iOS + Android) & Web SSR) I do the following in the config ``` import { vitePreprocess } from "@user/vite-plugin-svelte"; import adapterNode from "@user/adapter-node"; import adapterStatic from "@user/adapter-static"; // Determine the mode - this can be set as an environment variable or changed manually const BUILD_MODE = process.env.BUILD_MODE || "SSR"; // default to SSR, change to 'SPA' for SPA mode let adapterOptions = {}; // Switch depending on the mode if (BUILD_MODE === "SPA") { adapterOptions = { pages:…

### CASE-8049 · sveltekit crashes on startup using node.js 18.17.1 and latest pnpm/yarn
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug ![image]([link] framework]/assets/122984423/f6257644-b6e6-453d-970e-58e6ff30e03a) ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz Memory: 3.81 GB / 7.89 GB Binaries: Node: 18.17.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm: 9.6.7 - C:\Program Files\nodejs\npm.CMD pnpm: 8.7.0 - C:\Program Files\nodejs\pnpm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (116.0.1938.62) Internet Explorer: 11.0.19041.1566…

### CASE-8053 · Anchor with #hash not showing :target CSS after history.back()
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox 116, linux
- **Signals**: 👍0 💬4 · closed · labels: wontfix/router
- **Excerpt**: ### Describe the bug 1. Goto `/#target` 2. Goto `/temp` 3. Return to the previous page 4. URL is `/#target` and the `#target:target` styles are not shown. In this state, clicking `<a href="#target">` should show `#target:target` styles, but it does not. ### Reproduction [link] ### System Info - Chrome 버전 115.0.5790.170(공식 빌드) (arm64) - Firefox 116.0.2 (64-비트) ```Shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 16.20.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 9.4.2 -…

### CASE-8057 · Prerender not crawling dynamic route when it is the entrypoint
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When prerendering a dynamic route, all links to said route are crawled and their corresponding pages rendered. If the links to these dynamic routes are only present within the dynamic route itself, it is not crawled. This of course makes sense; if no outside links point into the dynamic route, why render any of it? There is an edge case however, when the dynamic route is the only route in the application, such as when using an optional slug: ``` routes/ ├─ [[slug]]/ │ ├─ +page.svelte ``` In this scenario, when rendering the page normally, the default route `/` loads…

### CASE-8058 · Forms don't work on localhost with adblock enabled
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using a form on localhost with uBlock origin a popular adblocker enabled the behavior is very strange, it appends the forms fields to the url and causes a page reload, and never triggers the method in the forms on:submit|preventDefault={handleSubmit} [link] But when deployed to prod with vercel or disabling ad blocker the form works as expected where the input is not added to the url and page does not hard reload So the issue is only present on localhost chrome with ad blocker enabled ``` <script lang="ts"> import { goto } from '$app/navigation'; import { onMount }…

### CASE-8060 · Middle-clicking hash links may not jump
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 114, chromium 114, firefox 114, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Middle-clicking hash links on [link] may sometimes not jump to the hash. ### Reproduction Go to [kit.svelte.dev/docs/errors]([link]). Middle-click on the first two hash links, "Error" and "type safety". The "Error" link will, but the "type safety" link will not jump to the hash in the new tab, in these browsers: * Chrome 114.0.5735.**133** * Chromium 114.0.5735.**133** (tested with fresh installs) It will jump in these browsers: * Firefox 114.0.2 (fresh install) * Ungoogled Chromium 114.0.5735.**106** (though I am not 100% sure if it did all the time, see below).…

### CASE-8064 · 500 Error when fetching the head of a Kit project
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, safari, macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Vercel returns `x-vercel-error: INTERNAL_SERVER_ERROR` when fetching the head of a Svelte Kit site, like so: - `curl -I [link] this is a Rich Harris project - `curl -I [link] one of mine - `curl -I [link] a blank kit project a made and deployed ([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: macOS 13.4 CPU: (10) arm64 Apple M1 Max Memory: 474.59 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.16.0 - /opt/homebrew/bin/node npm: 9.6.5 - /opt/homebrew/bin/npm Browsers: Firefox: 112.0.2 Safari: 16.5 ``` ### Severity serious,…

### CASE-8073 · `$page.url.hash` is not updated.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, svelte
- **Signals**: 👍0 💬4 · closed · labels: low hanging fruit/ready to implement
- **Excerpt**: ### Describe the bug When the URL hash value is changed using the address bar, the `$page` store is not updated. ### Reproduction Checked on Chrome, Firefox, and Safari. Reference 'System Info' for version numbers. ```svelte <script> import { page } from '$app/stores'; $: console.log($page.url.hash); </script> <svelte:window on:hashchange={() => { console.log($page.url.hash, 'store'); console.log(window.location.hash, 'location') }} /> <a href="[ref]">[ref]</a> ``` 1. Load the page 2. Click the anchor element. 3. Replace `[ref]` with `[ref]` in the address bar. 4. Check the console. ```html…

### CASE-8077 · v1.3.1 brakes cloudflare 404 page
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug After upgrade from `1.3.0` to `1.3.1`, instead of 404 error code, 500 is fired. ### Reproduction <img width="1728" alt="Screenshot 2023-01-27 at 13 35 17" src="[link]> This error is fired from JS redirect. After page refresh it becomes 404 correctly. [link] - direct is `404`, but from search form is `500`. ### Logs _No response_ ### System Info ```Shell System: OS: macOS 13.1 CPU: (10) arm64 Apple M1 Pro Memory: 61.38 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 19.4.0 - /opt/homebrew/bin/node npm: 9.2.0 - /opt/homebrew/bin/npm Browsers: Chrome: 109.0.5414.119…

### CASE-8081 · ReferenceError - Can't find variable: IntersectionObserver
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug I am running the latest version of SvelteKit and I have errors showing up in Sentry for Intersection Observer from users running old Safari versions. The line that causes the error is likely in this file, line 1154: [link] framework]/blob/master/packages/kit/src/runtime/client/client.js Here's the browser support for Intersection Observer: [link] A guard clause that says "if (typeof IntersectionObserver !== 'undefined') {" would probably suffice to prevent this error. ### Reproduction I'm unable to replicate this myself in Browserstack but I'm getting several of these…

### CASE-8082 · Video player persists state between pages
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, linux, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Title explains it, even when setting a different source, the html is updated but the player just keeps playing the old video when navigating to other pages. ### Reproduction [link] live demo: [link] ### Logs _No response_ ### System Info ```Shell System: OS: Linux 6.0 undefined CPU: (16) x64 AMD Ryzen 7 PRO 6850U with Radeon Graphics Memory: 17.69 GB / 30.13 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 19.3.0 - /usr/bin/node npm: 8.19.2 - /usr/bin/npm Browsers: Firefox: 108.0.1 ``` ### Severity blocking all usage of SvelteKit ### Additional Information…

### CASE-8084 · Prettier doesn't work with pnpm
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Prettier doesn't format svelte files when using pnpm. ### Reproduction Skeleton project created today using `pnpm create svelte@user my-app` ### Logs _No response_ ### System Info ```Shell System: OS: Windows 10 10.0.19044 CPU: (2) x64 Intel(R) Celeron(R) CPU N2830 @ 2.16GHz Memory: 548.25 MB / 3.89 GB Binaries: Node: 16.17.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm: 8.15.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (107.0.1418.62) Internet Explorer: 11.0.19041.1566 npmPackages:…

### CASE-8087 · `adapter-static` and nonprerendered `+layout/page.server.js` files
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍4 💬4 · open · labels: documentation
- **Excerpt**: ### Describe the bug Hey folks, I ran into a bit of an edge-case recently while trying to make a hybrid web + Tauri application (web uses `adapter-node`, Tauri creates an SPA using `adapter-static`). If there exists a `+page.server.js` or `+layout.server.js` file that exports a `load()` function, running the SPA via a basic web server will throw a 500 internal error, complaining that `/__data.json` cannot be found. I'm curious if this is an intended bug or if there is a workaround to it. <img width="461" alt="image" src="[link]> <img width="314" alt="image" src="[link]> ### Reproduction 1.…

### CASE-8088 · why vscode shortened div tag on save
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, react, svelte, electron
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When I write this `<div></div>` and press save, vscode turn it to `<div/>` is there option to stop this behavior. I don't have this problem when developing react and nextjs app. This must be Svelte setting about eslint or prettier. ### Reproduction just make a file and write `<div></div>` then press save ### Logs _No response_ ### System Info ```Shell mac os 13.0 vscode Version: 1.63.2 Commit: 899d46d82c4c95423fb7e10e68eba52050e30ba3 Date: 2021-12-15T09:38:17.605Z (11 mos ago) Electron: 13.5.2 Chromium: 91.0.4472.164 Node.js: 14.16.0 V8: 9.1.269.39-electron.0 OS: Darwin…

### CASE-8091 · Cannot host static build (built used `adapter-static`) on nginx docker container, while `run preview` works as expected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug This (see Reproduction) work as expected atfer `npm run build && pnpm run preview --host $MYIP --port 3000`, while when I copy `build` folder and then run `docker run --rm -it -d --name nginx -v /path/to/build:/usr/share/nginx/html -p 80:80 nginx` browser displays `500 Internal Error` and I got on Chrome console: `SyntaxError: Unexpected token '<', "<html> <h"... is not valid JSON at JSON.parse (<anonymous>) ...` ### Reproduction ```js // svelte.config.js import adapter from "@user/adapter-static"; export default { kit: { adapter: adapter({ fallback: "index.html", }),…

### CASE-8098 · Cache problem with client-side navigation: the response is now __data.js instead of __data.json
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### Describe the bug I believe the recent change where client-side navigation responds with __data.js instead of __data.json can be problematic. I have Cloudflare on my site and I just realized that the __data.js files that are returned when navigating between pages are being cached on the edge and possibly also in the browser cache. I don't have any custom page rules for .js files in Cloudflare, this is the default behavior. In some cases, the "age" in the response headers is showing very high numbers, much higher than what I have in my s-max-age cache-control headers in hooks.js (which used…

### CASE-8099 · Vercel edge functions producing a null error from @[meta framework] next.433
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: ### Describe the bug @[meta framework] next.433 (this PR: [link] framework][ref]) seems to have introduced a bug with Vercel edge functions. The edge functions consistently crash ### Reproduction 1. kit 433 with Vercel edge functions: [link] _this has an error_ 3. kit 433 without edge functions: [link] _this works_ 5. kit downgraded to 432 with Vercel edge functions: [link] _this works_ ### Logs (These are from Vercel's function logs) ```shell TypeError: Cannot read properties of null (reading 'handleError') at ../../../../.svelte-kit/output/server/index.js:2455:27 at…

### CASE-8100 · Components are rendered twice within sveltekit.head
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have a component `Meta.svelte` which is rendered within `+layout.svelte`. On page load (and SSR) the tags are rendered correctly, but on JS page navigation the tags are duplicated (which in Chrome means the second `<title>` is ignored) ```+layout.svelte <svelte:head> <Meta /> </svelte:head> ``` ```Meta.svelte <script> import { page } from '$app/stores'; let title; let description; $: { $page; title = Math.random(); description = Math.random(); } </script> <title>{title}</title> <meta name="description" content={description} /> ``` ### Reproduction Made a demo app [link]…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8016 · Using `$env/dynamic/private` in top level might result in build error
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F4 · **Env**: vite
- **Signals**: 👍4 💬4 · open · labels: $app/env
- **Excerpt**: ### Describe the bug When reading environment variable in global scope, and the environment variable doesn't exists, it errors out during build time: ```js import { env } from "$env/dynamic/private"; if (!env.API_URL) { throw new Error('API_URL is not defined in the environment variables'); } export const load = async ({ }) => { console.log('Loading page...'); } ``` output of `vite build`: ``` vite v6.3.5 building SSR bundle for production... ✓ 174 modules transformed. node:internal/event_target:1101 process.nextTick(() => { throw err; }); ^ Error: API_URL is not defined in the environment…

### CASE-8029 · SvelteKit concatenates pages instead of swapping them on navigation
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍3 💬4 · closed · labels: svelte
- **Excerpt**: ### Describe the bug When navigating from page A to another, if a Tiptap textfield is _focused_, SvelteKit completely breaks. Instead of swapping the page, the new page is simply concatenated with the current page. If this text field is not focused, the pages get concatenated only until the `out` transitions present in page A finish. ### Reproduction 1. Open this [SvelteLab]([link]) 2. Go to child page 3. Go back (<kbd>Alt</kbd> + <kbd>&larr;</kbd>) 4. **(1)** Why do the pages get concatenated for the duration of the transition? 5. Go to child page again 6. Click in the middle of the black…

### CASE-8052 · Elements with a global transition in an {:else if} block are not being removed from the DOM on page URL change
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug We encountered a hard-to reproduce issue combining multiple factors that resulted in elements not being removed from the DOM after a transition ends: - The element needs to be the child of another element in an `{:else if}` (in the main branch of an `{#if}`, everything works correctly) - The element needs to have a global transition - Both the transition and the if need to be triggered on page change See the reproduction below. ## Expected After the transition ends, we end up on the new page and nothing from the old page remains in the DOM. ## Actual After the transition…

### CASE-8079 · `?used` in asset urls
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed · labels: vite/service worker
- **Excerpt**: ### Describe the bug if you import a CSS file URL like this ```js import lightCssUrl from "./style.css?url"; ``` the value is `.../assets/style-hash.css?used` instead of `.../assets/style-hash.css` this `?used` is not in the URL in `build` from `$service-worker` so when you cache your CSS file doesn't benefit from your service worker ### Reproduction [link] Notice the CSS is not going through the service worker ![image]([link]) ### Logs ```Shell $ vite build vite v4.0.3 building for production... ✓ 41 modules transformed. 5:20:26 PM [vite-plugin-svelte] dom compile done. package files time…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8018 · Prefetch destroying page group layout #Sveltekit
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Prefetching a group layout on link hover breaks the current group layout. ### Reproduction Here's a git link to a mini reproduction : [link] I have an app where let's say I have 2 main group layouts: - `(marketing)` - `(app)` containing a page `/app` Let's say `body` is set to scroll in `(marketing)` and `overflow:none` in `(app)`. > I am being simplistic here, the difference are def deeper then this, and for us at least, they touch on different `CSS`, that is context specific. Let's say in my marketing site, I have a link (`a` tag) that points to `/app`. I noticed that…

### CASE-8041 · Site: cannot click on scroll bar on large screens in docs
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome, edge, windows
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug inside [link] on a large screen the 'ON THIS PAGE' section seems to cause you to not be able to click on the scroll bar. ![Grabación-2023-12-14-124808]([link] framework]/assets/64056830/35470cbf-6259-4336-88d3-e7981424fd0f) ### Reproduction none ### Logs _No response_ ### System Info ```Shell windows 11 Chrome Versión 120.0.6099.109 Edge Versión 120.0.2210.61 ``` ### Severity serious, but I can work around it ### Additional Information _No response_

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-8028 · Update for runes dependant on PageData object fired for old component, after navigating with newly loaded data.
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍9 💬4 · open · labels: svelte 5
- **Excerpt**: ### Describe the bug When we have a rune dependent on the PageData object, after navigation it updates for the component that is being unmounted; however, it uses the new PageData object already for the old page. This causes some undefined errors in my case. Tested with $derived and $inspect runes. ### Reproduction I've created simple stackblitz repro repo. It's only two pages with links to each other and load function returning object. For each click on the link we are getting "TypeError: Cannot read properties of undefined". stackblitz: [link] ### Logs ```Shell From my repro repo: init test…

### CASE-8048 · memory leak in adapter node with unresolved promises
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍6 💬4 · open · labels: pkg:adapter-node
- **Excerpt**: ### Describe the bug Rendering a page that depends on a never-solving promise leaks memory. Svelte seems to keep handlers around for the resolution of promises even after the page has been fully rendered and served to the client, preventing the js engine from freeing the associated memory. ### Reproduction [link] ## `+page.svelte` ```svelte <script> import c from './const'; </script> {#await c.waitForMe()} <p>loading...</p> {:then x} <p>loaded {x}!</p> {:catch error} <p style="color: red">{error.message}</p> {/await} ``` ### `const.js` ```js class MyClass { constructor() { this.x =…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8039 · Unnecessary error during build
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hello Have `fonts` in static folder, need use it in `.svelte` file. ```css src: url("./fonts/OpenSans-Italic.woff2") format("woff2"); ``` This style work in `dev` and `build` mode, but in `build` have error: ``` ./fonts/OpenSans-Regular.woff2 referenced in path/src/routes/+page.svelte?svelte&type=style&lang.css didn't resolve at build time, it will remain unchanged to be resolved at runtime ``` That is, everything works correctly, but with an error. Absolute paths work without error. Not sure this is problem SvelteKit or Vite and don`t now how check it, but don't see this…

### CASE-8051 · preload fonts by default
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍5 💬4 · open · labels: needs-decision
- **Excerpt**: ### Describe the problem According to [link] framework][ref], @user said we don't preload fonts by default because they may be imported but not used on a page. Though I'm not sure that's a great reason for us to not do it by default as that seems like the user has coded things incorrectly in that case ### Describe the proposed solution Maybe Vite could issue a warning for fonts that are imported, but never used if we really care about detecting that ### Alternatives considered _No response_ ### Importance nice to have ### Additional Information Font preloading sometimes doesn't work before…

