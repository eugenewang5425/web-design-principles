# Case Chunk 068 — Round 68

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7701 · Remote form() result persists after navigation
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari, macos
- **Signals**: 👍16 💬7 · open · labels: forms
- **Excerpt**: ### Describe the bug The docs state that `form()` result values are [ephemeral]([link]) and "will vanish if you navigate away", but they actually persist when returning to the page. ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.5 CPU: (8) arm64 Apple M2 Memory: 80.34 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.12.0 - ~/.nvm/versions/node/v22.12.0/bin/node npm: 9.6.4 - /opt/homebrew/bin/npm pnpm: 10.18.3 - /opt/homebrew/bin/pnpm bun: 1.3.0 - ~/.bun/bin/bun Browsers: Chrome: 141.0.7390.108 Safari: 18.5 npmPackages: @user/adapter-auto:…

### CASE-7706 · FOUC in SPA on (re)load.
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, ios 18, windows, mobile, iphone
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug There is a jarring style transition if: - Kit in SPA mode. - Root +template loads CSS file. ### Reproduction 1. (Re)load [link] in (mobile browser) 2. Notice header starts black and flashes to red color. 3. Repo: [link] ### System Info - iPhone 13 mini with iOS 18.1.1 - mobile Safari ```Shell System: OS: Windows 11 10.0.22631 CPU: (8) x64 Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz Memory: 11.28 GB / 23.86 GB Binaries: Node: 22.12.0 - V:\scoop\apps\nodejs-lts\current\node.EXE npm: 10.9.0 - V:\scoop\apps\nodejs-lts\current\npm.CMD pnpm: 9.13.2 - V:\pnpm-home\pnpm.CMD…

### CASE-7716 · Duplicate CSS rules after build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Hello everyone! I'm building a personal blog and for for some reason the link tags containing css files are duplicated in production only. In dev mode everything looks fine. For this reason, every style is duplicated. I've created a repo and added only @user/adapter-static and the issue remained. Thanks in advance. ### Reproduction [link] - Build the package - Serve the static files generated on the build directory - Open the example in a browser (tested with firefox and chrome) and inspect the orange title - The CSS rule `background: orange;` is shown twice…

### CASE-7724 · Could not to use relative asset URL
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, electron, svelte, desktop
- **Signals**: 👍1 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug For my use case, I need the asset path to be relative (without a leading slash). Why? In case of a Chrome Extension or a bundled Desktop App like Electron, the assets need to be loaded without serving from a web server. Thus requires the paths to be relative. Currently, `%sveltekit.head%` produces absolute `<link ...>` such as: ```html <link rel="modulepreload" href="/_app/immutable/start-be880a54.js"> <link rel="modulepreload" href="/_app/immutable/chunks/index-7f3551f2.js"> <link rel="modulepreload" href="/_app/immutable/chunks/singletons-c1916556.js"> ``` I need these…

### CASE-7725 · `kit.svelte.dev` showcase links redirect to home page on iOS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, svelte
- **Signals**: 👍3 💬7 · closed
- **Excerpt**: ### Describe the bug Clicking on a showcase website link in the home page of `kit.svelte.dev` opens a new tab to the SvelteKit home page on iOS devices. This only happens to any `<a>` elements on the page with the `target=_blank` attribute. After some dismantling, I've tracked down the issue to [this line of CSS]([link] framework]/blob/154ee7440fe9bad408b454e5dbf77d016f882874/sites/kit.svelte.dev/src/routes/home/Features.svelte#L60) (yes, I'm also confused.). Removing it seems to fix the problem. I'm not sure exactly why it's causing this behaviour and why it's not reproducible anywhere else…

### CASE-7728 · css not loading/loading too late (SASS)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, linux, ubuntu
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Repro: [link] you will fiind out css being not loaded until CTRL + F5, or loaded incompletely Have this issue only ini PRODUCTION or preview mode Tested on chrome and firefox ### Reproduction I don't know i'm only one experiencing this. Similar issue: [link] framework][ref] ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.15 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish) CPU: (12) x64 AMD Ryzen 5 5600H with Radeon Graphics Memory: 2.95 GB / 15.48 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 18.10.0 -…

### CASE-7729 · "TypeError: Request3 is not a constructor" upgrading `adapter-netlify` from 76 to 77 - Resolved: esbuild does not work on Netlify, do not enable in netlify.toml or use netlify edge
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I upgraded my SK version from 510 to 561 and adapter from 72 to 89 ([link]) and it started reporting a `TypeError: Request3 is not a constructor` error: ![image]([link]) (you can see the preview here [link]) causing all renders to 500. this **doesnt happen in dev, only prod.** ### Reproduction [link] i am debugging in [link] ### Logs ```Shell Nov 28, 12:38:24 PM: b5dfe38e ERROR TypeError: Request3 is not a constructor at file:///var/task/.netlify/functions-internal/render.mjs:24273:22 at new Promise (<anonymous>) at fetch3…

### CASE-7732 · Bug on build with adapter netlify
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: edge, vite
- **Signals**: 👍0 💬7 · closed · labels: pkg:adapter-vercel/pkg:adapter-netlify/p1-important
- **Excerpt**: ### Describe the bug It doesn't build with the new version of adapter netlify. It's when building with edge functions that made a bug on build, building with classical functions still works ### Reproduction Use there version ``` "@user/adapter-netlify": "1.0.0-next.73", "@[meta framework]": "1.0.0-next.445", ``` Add this config to netlify adapter ``` adapter: adapter({ edge: true }) ``` And run `yarn build` or `npm run build`. ### Logs ```shell ❯ npm run build > [email] build > vite build vite v3.0.9 building for production... ✓ 196 modules transformed.…

### CASE-7740 · Sveltekit broken on iOS 13: [Error] SyntaxError: Unexpected token '.' promiseReactionJob
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios 13, ios13, svelte, react, iphone
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: ### Describe the bug Running a Svelte Kit project on an iPhone running iOS13, as soon as the page loads and error appears on the console and JS execution is interrupted: ``` [Error] SyntaxError: Unexpected token '.' promiseReactionJob ``` ### Reproduction - On a brand new install of svelte kit with `npm init svelte` - Happens on both skeleton and demo app equally - No type checking, linting, formatting or browser test added - Run (localhost:3000) - Open on iPhone with iOS 13 (try with iPhone Simulator) Expected: App runs normally, no errors. What actually happens: Error on console. And…

### CASE-7746 · SvelteKit reloads pages and clears form data on mobile
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: ios, svelte, mobile, iphone, desktop
- **Signals**: 👍1 💬7 · open · labels: vite/blocked by upstream/p2-nice-to-have
- **Excerpt**: ### Describe the bug I have an issue on mobile (iOS/iPhone). I'm developing a form that has text inputs. If I enter some data and swipe to a different app for a short while, when I swipe back to the SvelteKit app, it refreshes the page and clears all the form inputs. Just tested and this even happens if I simply add an input the index.svelte of the skeleton app after a fresh SvelteKit install. This does not seem to happen with Svelte apps. Only SvelteKit apps. Mobile ONLY! Desktop apps are fine ### Reproduction Install the skeleton SvelteKit app. Add an input to the index.svelte page. Run the…

### CASE-7751 · From `1.0.0-next.211` errors and pages reloads
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug From `1.0.0-next.211` on each navigation click there are errors in the console and automatic reload of the page and then that page works and the same happens for subsequent pages. ### System Info ```shell System: OS: Windows 10 10.0.19044 Binaries: Node: 16.13.1 - C:\Program Files\nodejs\node.EXE npm: 8.3.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (96.0.1054.62) Internet Explorer: 11.0.19041.1202 ``` ### Severity blocking all usage of SvelteKit

### CASE-7762 · error: Big integer literals are not available in the configured target environment ("chrome61", "edge18", "es2019", "firefox60", "safari11")
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome61, edge18, firefox60, safari11, svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: **Describe the bug** During build it throws with: `error: Big integer literals are not available in the configured target environment ("chrome61", "edge18", "es2019", "firefox60", "safari11")` **To Reproduce** A new svelte@user init app and a minimal Getting started code from [link] _(I know, but I don't have time right now for a new repo)_ **Expected behavior** I can build. Can I change the target it detects? Can I remove that "es2019" for example? **Stacktraces** <details> <summary>Stack trace</summary> ``` > Transform failed with 2 errors: pages\players\index.svelte-e4c16403.js:4121:23:…

### CASE-7771 · Reference Error: Cannot access 'component' before initialization
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: safari 26
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Been getting this error when traversing to a new page with the latest (2.50.2) release. Does not happen on 2.50.1 or earlier. These may be red herrings: but I've only seen it happen (although pretty reliably) with Safari 26 (after a cache clear) and when navigating to a larger / more complex page. Only happens the first time visiting the page and doesn't seem to happen when you hover long enough over the link to preload everything. Since this looks to be some kind of race condition, it may be effecting other browsers but the race is just more difficult to produce. ###…

### CASE-7787 · Safari issue when ssr is false
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-F4 · **Env**: safari, safari 16, macos, svelte
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### Describe the bug In a simple SvelteKit skeleton project with a single library added and where SSR is disabled, Safari fails with `Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable.`. Other browsers tested had no issues. ### Reproduction Please refer to [link] and run with `npm run dev`. In `src/routes/+layout.ts`, when `export const ssr = false` is set, Safari fails with `Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable.` ### Logs _No response_ ### System Info ```Shell macOS, Safari 16.6 ``` ### Severity blocking all usage…

### CASE-7792 · U+FFFD (REPLACEMENT CHARACTER) in text
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Across multiple versions of svelte kit, multiple sites, and a period of over a year, I noticed that some characters in the text will be replaced with � (U+FFFD REPLACEMENT CHARACTER). I tried to inspect the response, but chrome dev tools says "No data found ..." ![image]([link] framework]/assets/1473102/3fa563bc-8a98-4e78-acae-92173e9c8c7b) Reloading fixes ### Reproduction tbd ### Logs _No response_ ### System Info ```Shell tbd ``` ### Severity serious, but I can work around it ### Additional Information _No response_

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7702 · docs: `defaultChecked` should not be used with form remote functions
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, linux, svelte
- **Signals**: 👍0 💬7 · open · labels: documentation/forms
- **Excerpt**: ### Describe the bug ```svelte <script lang="ts"> import { FormSchema } from './ids'; import { addId } from './ids.remote'; </script> <form {...addId.preflight(FormSchema)}> <fieldset> {#each ['windows', 'mac', 'linux'] as os, index} <label> <!-- windows is not checked --> <input {...addId.fields.operatingSystem.as('radio', os)} defaultChecked={!index} /> {os} </label> {/each} </fieldset> <fieldset> {#each ['windows', 'mac', 'linux'] as os, index} <label> <!-- windows is checked --> <input type="radio" name="os" value={os} defaultChecked={!index} /> {os} </label> {/each} </fieldset> </form>…

### CASE-7710 · `use:enhance` doesnt mirror native form behaviour for default values
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬7 · closed · labels: svelte/forms
- **Excerpt**: ### Describe the bug ```svelte <form method="post" use:enhance> <input type="text" value="text" /> <button>submit</button> </form> ``` ## Expected `on:submit`, input resets back to `"text"` ## Actual `on:submit`, input resets to `""` ## Possible workaround ### with two way binding ```svelte <script> let value = "text" </script> <form method="post" use:enhance={({ formElement })=>{ return (async( {update} )=>{ await update() value = 'text' }) }}> <input type="text" bind:value/> <button>submit</button> </form> ``` This works but only if the input value has changed, otherwise, it resets to `""`.…

### CASE-7712 · Named Form Action executes twice and fails with `TypeError: The body has already been consumed.` for `await request.formData()`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I am using a named action on the route `/connections/new` which has a form with action `?/getAuthURL`. The method: ``` export const actions = { getAuthURL: async ({ request, locals, cookies }) => { const values = await request.formData(); const loginType: FormDataEntryValue | null = values.get('loginType'); const apiVersion: FormDataEntryValue | null = values.get('apiVersion'); . . // `urlToRespond` is generated by Salesforce connected app authorization . redirect(303, urlToRespond) // I even tried to use a simple object return, but it still fails. /* return {…

### CASE-7723 · `use:enhance` resets form data between repeated submits
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Submitting the same form content when using `use:enhance` results in form fields being cleared between submits. ### Reproduction [link] 1. Install ``` git clone [link] npm install npm run dev ``` 2. Browse to `[link] 3. Enter `hello` in first field, `world` in second field. 4. Press `Submit`. 5. `hello world` is printed underneath the form. First field contains `hello`, second field contains `world`. Server prints: ```js { first: 'hello', last: 'world' } ``` 6. Press `Submit`. 7. `hello world` is printed underneath the form. Fields are now empty. Server prints: ```js {…

### CASE-7736 · Formdata send by Sveltekit Endpoint is send by plain/text with no data
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍14 💬7 · closed · labels: blocked by upstream
- **Excerpt**: ### Describe the bug SvelteKit: If you try to send a POST Request from **Server-to-Server** with **FormData** the request will fail. Sveltekits `fetch()` does not set content-type multipart/form-data. The Request will be text/plain and no Formdata will be submitted This probably relates to [ref] [ref] **I tried my best and created an Express Server and a Sveltekit App (see below) for debugging.** ```ts export const POST: RequestHandler = async ({ request }) => { // const formDataSendbyFrontend = await request.formData(); const demoData = new FormData(); demoData.append('data', "lorem ipsum");…

### CASE-7752 · `svelte-kit package` cannot include `goto` function from `$app/navigation`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬7 · closed · labels: documentation/pkg:svelte-package
- **Excerpt**: ### Describe the bug When creating a component library with Svelte Kit and packaging it using `svelte-kit package`, you cannot include other functions, specificlly tested with `goto`. One of my components that will be exported was using the `goto` function from kit. It was a select element that modified a url query parameter, and then used the `goto` function to rerun the `load` function. Everything works just fine in dev. I import the `Select` component I created into my project. However, when the app is build and I run `svelte-kit preview`, the `goto` function no longer works. Both the one…

### CASE-7765 · Remote function form type-checking does not work with `union`
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬6 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug Related to [link] framework][ref] -- it seems like this was fixed for `fields.set(...)` but not for spreading fields into form inputs? In the below example, I can't spread `fields.a` without TypeScript complaining on 3.0.0-next.25 (or even on 2.57.1, the release following the fix). As in the original issue, `'a' in submitForm.fields` is always `false`, so that can't be used to silence it. Please let me know if I'm just misunderstanding something (sorry if so), that tends to be the case in my experience... ### Reproduction data.remote.ts: ```ts import { form } from…

### CASE-7768 · Chaining a $derived that depends on an awaited remote function in the script tag may cause it to rerun (practically) infinitely
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · open · labels: svelte 5
- **Excerpt**: ### Describe the bug Say you have something like: ```svelte <script lang="ts"> import { getData, subData } from '$lib/rem/data.remote'; const mappedData = $derived(mapData(await getData({ dummyFilters: '' }))); function mapData(d: { test: string }[]) { console.log('mapping ran'); return d.map((item) => ({ ...item, mapped: true })); } </script> <form {...subData}> <input {...subData.fields.fData.as('text')}/> <button type="submit">Submit</button> </form> <ul> {#each mappedData as item} <li>{item.test} - {item.mapped}</li> {/each} </ul> ``` Straightforward scenario, just a remote query that…

### CASE-7772 · Remote function form enhance submit function does not throw error on client side
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: documentation
- **Excerpt**: ### Describe the bug The submit() function returned by form.enhance() never throws/rejects when invalid is used. This makes try/catch unusable for error handling. submit() always resolves. ### Reproduction [link] ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.6.1 CPU: (10) arm64 Apple M1 Pro Memory: 74.75 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.11.1 - /Users/batuhandemir/.nvm/versions/node/v24.11.1/bin/node npm: 11.6.2 - /Users/batuhandemir/.nvm/versions/node/v24.11.1/bin/npm pnpm: 10.24.0 - /Users/batuhandemir/Library/pnpm/pnpm bun: 1.1.29 -…

### CASE-7773 · Remote Functions: Refreshed queries that throw a `redirect` fail
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬6 · open · labels: forms/needs-decision
- **Excerpt**: ### Describe the bug Refreshed queries that throw a redirect (while being refreshed inside of a `form` remote function) cause a `500: Failed to execute remote function` error on the client, and an uncaught redirect error (`[500] POST / Error: {"status":307,"location":"/reset"}`) on the server. ### Reproduction 1. [Visit the StackBlitz repro]([link]) or run `git clone [link] 2. `pnpm install && pnpm dev` 3. navigate to `/` and increment the `count` to be greater than 5 ### Logs ```Shell [500] POST / Error: {"status":307,"location":"/reset"} at coalesce_to_error…

### CASE-7774 · Allow old thrown errors to coexist better with remote function error handling
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the problem i can't seem to get the error message of a remote async function to the frontend, when it throws an error. [e.g. in an async onclick handler on a button in +page.svelte] try { await submit(); // trigger the remote function, here a form() } catch (error) { toast.error(error?.message || 'Oh no! Something went wrong'); } Never displays the error message thrown on the backend. ### Describe the proposed solution Enhancement: I would like to be able to optionally use thrown errors on the backend remote function instead of returning a result object. This allows me to simply…

### CASE-7775 · Remote form function ignores destructuring `value` from a field on svelte component properties
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Trust me, the title is about as simple as I could make it. Granted this may be a huge skill issue on my part, but here's the scenario I have: I want to use remote functions, the `form` one in particular, with the remoteFn.fields.some_field on an input field. The catch is that I want the `value` itself to be managed directly by me, but still use all the other features of spreading the remote form field on the `<input>`. My actual use case is having an input field with a drop-down of available options, let's say... city names. The user can type in a search query that…

### CASE-7777 · State referenced in `onblur` handler is undefined after navigation with async load
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Relevant issues: - [link] - [link] Relevant fixes: - [link] - [link] It seems like this bug occurs when: 1. Some state is returned in a load method 2. This load method has an await (e.g. fetching data remotely) 3. The blur method is triggered from an input when navigating with the back/forward keys in the browser I'm not really sure what the correct "mental model" is of this behaviour - but my two cents is that it feels wrong. It's really difficult to spot, as there's no typing that tells me that this can happen. The generated type-definition of `let { data } = $props()`…

### CASE-7794 · Form action with server streaming promise
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug First of all, im not sure if it is a bug, but I didnt find any other place to post this, so I'm sorry about that. If you are working with streaming every time you submit the form actions the route is invalidated. Im wondering if it is a bug or is something that I don't understand about the form actions or the streaming with promise. ### Reproduction Create a project using sveltekit, on the routes create a **+page.svelte** with the following content. ``` <script> import { enhance } from "$app/forms"; /** @user {import('./$types').PageData} */ export let data; </script>…

### CASE-7795 · The request url is outside of Vite serving allow list.
- **Principles**: P-G4, P-E3 · **Env**: vite, svelte, typescript
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Describe the bug After initializing a new SvelteKit Skeleton, project, and running `npm run dev -- --open`, if you open the site, you'll get the following message: `The request url "path/to/project/node_modules/@[meta framework]/src/runtime/client/start.js" is outside of Vite serving allow list.` Every time you click on a hyperlink you get this message again. Also it seems to block certain SvelteKit featues like preload data. ### Reproduction - create a new SvelteKit Project using `npm create svelte@user test-project`. Select Skeleton, Typescript and no options. - `cd test-project` - `npm…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7703 · View transitions are broken with `experimental: "async"` enabled
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍5 💬7 · closed · labels: svelte 5
- **Excerpt**: ### Describe the bug When the `compilerOptions.experimental.async` option is set to `true` in the `svelte.config.js` file, there appears to be a regression with view transitions, where the default behavior of a fade transition between page navigations does not occur. Instead, when clicked on an anchor tag to navigate, the previous page hangs for a few seconds — with nothing on the page interactive — and the next page appears suddenly, with no transition. This behavior occurs both for brand new and existing SvelteKit applications. Removing the experimental flag solves the problem, but I would…

### CASE-7704 · enhanced-img is no longer a Svelte preprocessor, breaking compatibility with mdsvex
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug Hi! In 0.4, `@user/enhanced-img` [was built as a Svelte preprocessor]([link] framework]/blob/2129e0b9f799764400030270692b0c0a2dbbbdb5/packages/enhanced-img/src/index.js#L41), allowing it to run after mdsvex transformations. Starting in 0.5, [this is no longer the case]([link] framework]/blob/b1b7b537762cf251c526a0043d2d7d8d34a6823d/packages/enhanced-img/src/index.js#L12), it's a generic Vite plugin. This is an issue as `@user/enhanced-img` now parses all Svelte code, including .svx files, by itself through [svelte-parse-markup]([link]), which does not have preprocessing…

### CASE-7705 · SvelteKit Page Load for Local Markdown Posts Returning Error
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug ``` [vite] Error when evaluating SSR module /src/routes/+page.ts: |- RollupError: The left-hand side of an assignment expression must be a variable or a property access. at getRollupError (file:///Users/maclong/.config/blog/node_modules/rollup/dist/es/shared/parseAst.js:396:41) at convertProgram (file:///Users/maclong/.config/blog/node_modules/rollup/dist/es/shared/parseAst.js:1084:26) at parseAstAsync (file:///Users/maclong/.config/blog/node_modules/rollup/dist/es/shared/parseAst.js:2070:106) at async ssrTransformScript…

### CASE-7711 · Svelte cannot produe safe CSP for default build / any inline styles
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍20 💬7 · open
- **Excerpt**: ### Describe the bug Hello and thank you all for making and maintaining Svelte ❤️ This is related to [ref], but that seems to be specifically targeted at the animations API, whereas I am talking about a broader issue. In the `svelte.config.js` file, when you define the Content Security Policy `script-src: 'self'`, and try to build your project with inline scripts, Svelte is fairly good at detecting the inline scripts and adding hashes to the CSP to make sure they can be loaded in the browser. On the other hand, if you define `style-src: 'self'`, it does not seem like Svelte makes any effort…

### CASE-7721 · Subscribing to `$page` in layout and using `transition` causes page to not be cleared on navigation
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬7 · closed · labels: blocked by upstream
- **Excerpt**: ### Describe the bug Having a route with $page access in the layout, and the use of a transition on the page, causes the page to not be cleared on navigation. [Video.webm]([link]) ### Reproduction ![image]([link]) In this file structure we have a / page and a /app page. The /app page has a layout which accesses the $page store, while the page itself has a transition on an element. The / page is juat a button to the /app page. /app +layout.svelte ```html <script lang="ts"> import { page } from '$app/stores'; // this $page results in the page not being removed after navigation $page; </script>…

### CASE-7727 · Page transitions in layout don't works well using the `page` store
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍5 💬7 · closed
- **Excerpt**: ### Describe the bug We all like Svelte transitions, and some of us are using them for page transitions. A good repo. example for page transitions [is this one]([link]), by basically doing something like this code in the main layout: ```svelte {#key pathname} <div in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}> <slot /> </div> {/key} ``` The repo. I mentioned, is passing the pathname in the `load` function of the layout, so in their code, `pathname` equals to `data.pathname`. The disatvantage of this method, is that the main layout load function will be…

### CASE-7730 · Option to disable special handling of `url.startsWith(event.url.origin)` in provided fetch
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the problem SvelteKit's `fetch` gives special treatment to request URLs beginning with `event.url.origin`, this causes problems when paired with a reverse proxy that uses path prefixes to separate frontend/backend. example: `/api/* -> localhost:4000` `* -> localhost:4001` SvelteKit will turn a request to `[link] into `/api/foo` because of this transformation code. This causes rather difficult to debug errors where under certain failure circumstances (unmatched path param is my example) SvelteKit's fetch manipulation causes unrelated fetch queries to fail. This is not reproducible…

### CASE-7757 · adapter-netlify: should it be possible to build/deploy from CLI?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed · labels: pkg:adapter-netlify
- **Excerpt**: **Describe the bug** When using the `adapter-netlify` adapter in my project, none of the svelte-kit nor netlify CLI build commands work. However when the project is pushed to github, netlify is able to build and run the app. Locally there appears to be an error originating from within the `adapter-netlify` codebase... **Logs** ``` npm run build > [email] build /Projects/myproject > svelte-kit build vite v2.3.4 building for production... ✓ 15 modules transformed. .svelte-kit/output/client/_app/manifest.json 1.48kb .svelte-kit/output/client/_app/layout.svelte-73d54427.js 0.49kb / brotli: 0.29kb…

### CASE-7758 · adapter-static `fallback` page not generated when `prerender.enabled` is `false`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite, svelte
- **Signals**: 👍5 💬7 · closed · labels: p1-important
- **Excerpt**: **Describe the bug** Using the adapter static in "SPA" configuration doesn't output any html entry point even though the build completes without errors. All other bundled assets are created as far as i can tell. `/build` contains ``` /_app |--/assets |--/chunks |--/pages |--...misc.js _redirects ``` **Logs** Build completes successfully with logs ending in ``` vite v2.3.3 building SSR bundle for production... ✓ 38 modules transformed. .svelte-kit/output/server/app.js 396.41kb Run npm run preview to preview your production build locally. > Using @user/adapter-static ✔ done ✨ Done in 3.72s. ```…

### CASE-7761 · [env] env file working properly, But build reported an error.
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬7 · closed · labels: vite
- **Excerpt**: Describe the bug: Use env files .env ``` VITE_SVELTEKIT_FILEPATH=[link] VITE_SVELTEKIT_API_PATH=[link] ``` working properly in `dev`。 but on build throw error. <details> <summary>Stack trace</summary> vite v2.2.4 building SSR bundle for production...<br/> ✓ 8 modules transformed. <br/> [rollup-plugin-dynamic-import-variables] Unexpected token (6:247) <br/> file: xxxxx <br/> > Unexpected token (6:247) <br/> SyntaxError: Unexpected token (6:247)<br/> </details> <details> <summary>the file</summary> <script> await fetch( <br/> `${<br/> import.meta.env.VITE_SVELTEKIT_API_PATH<br/>…

### CASE-7769 · Remote function query does not update when using schema transforms
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Hi! I started experiencing some issues of queries not updating when I call `.updates()` on them and after a lot of testing I found the cause. If you use a schema that transforms the input (like valibot's `v.transform()`) sveltekit fails to update the query, I assume because the backend sends to the frontend the transformed input and the frontend tries to find the query instance that has that input but it can't cause it was transformed. If you remove the `v.transform` it works as it should. I'm not sure if this a known issue, couldn't find anything about this. Let me know…

### CASE-7781 · Build error "Unexpected character '�'" with SvelteKit 2.21.3
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug When I run `pnpm build` on my local machine I get this: ``` vite v6.3.5 building SSR bundle for production... ✓ 1524 modules transformed. ✗ Build failed in 3.02s error during build: [commonjs--resolver] node_modules/.pnpm/[email]/node_modules/fsevents/fsevents.node (1:0): Unexpected character '�' (Note that you need plugins to import files that are not JavaScript) file: /Users/kevin/Workspace/sr/www.soundradix.com/node_modules/.pnpm/[email]/node_modules/fsevents/fsevents.node:1:0…

### CASE-7790 · @user/enhanced-img doesn't work on GitHub Actions
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍1 💬6 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug When building a SvelteKit project using `@user/enhanced-img` on GitHub, the build logs show the following message: `@user/enhanced-img: vite-imagetools is not installed. Skipping build-time optimizations` This results in images not being transformed and thus missing in the build output. I've tried adding `vite-imagetools` as a direct dependency with no luck. I've also been sure to keep the lockfile in sync with package.json. ### Reproduction To reproduce, build a SvelteKit project using `@user/enhanced-img` with GitHub Actions. Here are my config files:…

### CASE-7799 · New error for vite-plugin-fonts starting with SvelteKit 1.11.0
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug With [`@[meta framework]@user.11.0`]([link] framework]/releases/tag/%40sveltejs%2Fkit%401.11.0) and above, `npm run dev` is throwing a new Internal Server Error regarding [`vite-plugin-fonts`]([link]): ```sh Internal server error: Failed to load url /@user/fonts.css?inline= (resolved id: /@user/fonts.css?inline=). Does the file exist? at loadAndTransform (file:///Users/brev/src/@user/issue-sveltekit-vite-font-error/node_modules/.pnpm/[email]/node_modules/vite/dist/node/chunks/dep-c167897e.js:41081:21) ``` The error disappears when downgrading to [`@[meta…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7707 · Change the name of the special `fetch` function
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the problem Since `fetch` from the [Fetch API]([link]) is a global variable, using the exact same name for the special context-specific SvelteKit `fetch` is error prone and unfriendly to beginners. For example, say you meant to write the following code in `routes/+page.server.ts`: ```ts export const load: PageServerLoad = ({ fetch }) => { fetch('example.com'); }; ``` But instead, you accidentally wrote the code as such: ```ts export const load: PageServerLoad = () => { fetch('example.com'); }; ``` The compiler will not complain, and you will be none the wiser about anything being…

### CASE-7708 · Dynamically enhanced images have srcset with only 2 variants
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · open · labels: documentation/pkg:enhanced-img
- **Excerpt**: ### Describe the bug Hey 👋 I can't figure out how to dynamically enhance images properly. I've added `?enhanced` part and images are processed into different formats. However, `srcset` has only 2 variants: ```svelte <script lang="ts"> import bostonOverviewImage from '$lib/assets/images/boston-overview.jpg?enhanced' </script> <enhanced:img src={bostonOverviewImage} class="image" alt="boston overview" sizes="(width >= 700px) 500px, 100px" /> ``` Images have different formats but `srcset` with 2 variants: <img width="701" alt="image" src="[link]…

### CASE-7717 · Body autofocus on route-change does not bring screen-reader (VO) to top if clicked-link is still on page
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · open · labels: router
- **Excerpt**: ### Describe the bug When I use VoiceOver to navigate via a link that remains on the page after the route-change, then that link remains selected by VoiceOver (even though the page-title is correctly announced and keyboard-tabbing correctly starts from the top of the page). Here is a video demonstrating this behavior (from this site: [link]): [link] framework]/assets/44578578/edc49d9b-ed1e-4879-81ac-392768d45958 ### Reproduction [link] I started with a "skeleton" project via CLI, and added the bare minimum to reproduce the behavior. In case it helps, here is the diff with that extra bare…

### CASE-7718 · Rollup failed to resolve import "$env/static/public" in web workers
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍6 💬7 · closed · labels: vite/$app/env
- **Excerpt**: ### Describe the bug When importing env variables from a web worker, the project fails to build (it works in dev mode). ``` error during build: Error: [vite]: Rollup failed to resolve import "$env/static/public" from "~/my-app/src/lib/test.worker.ts". ``` ### Reproduction > src/lib/test.worker.ts ```javascript import {} from '$env/static/public'; ``` > src/routes/+page.svelte ```javascript <script> import TestWorker from '$lib/test.worker?worker'; </script> ``` ### Logs ```Shell Error: [vite]: Rollup failed to resolve import "$env/static/public" from "~/my-app/src/lib/test.worker.ts". ``` ###…

### CASE-7726 · Environment variables not included after running adapter-node build using node build/index.js
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍1 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug When creating a project setting env vars and accessing them via $env/dynamic/private. The env vars appear fine when running `npm run dev` and running `npm run preview` after build, but are not accessible when running the app using `node build/index.js`. I provided a minimal repo for reproduction. ### Reproduction [link] ### Logs _No response_ ### System Info ```Shell System: OS: macOS 12.6 CPU: (8) x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz Memory: 974.33 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.8.0 - ~/.nvm/versions/node/v18.8.0/bin/node Yarn: 1.22.15…

### CASE-7734 · Dynamic environment variables undefined during SSR on Windows (*not* fixed by [ref])
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: windows, linux
- **Signals**: 👍0 💬7 · closed · labels: windows/p1-important/$app/env
- **Excerpt**: ### Describe the bug I already mentioned it in [link] framework][ref][ref] but it might get lost. On Windows, the `env`-export of $env/dynamic/private and $env/dynamic/public is always an empty object. This issue was present on Linux, too, but [ref] apparently fixed it there (available since next.418). It did not, however, fix it for Windows. Related: [ref], [ref] ### Reproduction Repro [link] The repo should be rather self explanatory - the page uses private and public, dynamic and static environment variables. Static environment variables work fine both on Windows and Linux, dynamic…

### CASE-7735 · Tailwindcss conflicts with new env handling
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I'm using tailwind and have the following app.css: ```css @user base; @user components; @user utilities; @user base { @user { font-family: 'Oswald'; src: url(/fonts/oswald/Oswald-VariableFont_wght.woff2) format('woff2'), url(/fonts/oswald/Oswald-VariableFont_wght.ttf) format('truetype'); font-display: swap; } } ``` Now all layouts that import the css file throw this error: ``` Error: Cannot import $env/static/private.js into client-side code: - src/routes/[email] - src/app.css - src/init/index.ts - src/lib/import/afterbuy-import-jobs.ts -…

### CASE-7739 · Vite Plugin: emitted files don't show up in the build output
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I am currently writing a plugin that is supposed to generate the manifest and images needed for a pwa, and the user can bring their own service worker, in order to be as customisable as possible. The icons are resized into a bunch of different variants and then emitted using `emitFiles`. Prior function doesn't give any errors and returns an resolveId that resolves to a valid URL. Everything seems to work, but in the end, nothing turns up in the build output, and when requesting `_app/manifest.webmanifest` or any of the images the server responds with the 404 page. I have…

### CASE-7745 · window bind:scrollY not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I'm trying to bind the scrollY value like shown in the tutorials solution: [link] But the variable to which I bind the scrollY value, does not change on scroll. The code I used is shown below. ### Reproduction Make a svelte route component with the following code: ``` <script> let y; $: console.log(y); </script> <svelte:window bind:scrollY={y}/> <div style="height: 300rem;" class="mt-64">{y}</div> ``` The displayed `y`does not change as expected. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.16 undefined CPU: (4) x64 Intel(R) Core(TM) i3-6100T CPU @…

### CASE-7749 · Store doesn't update properly when switching pages
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I've noticed an issue while working on a project in the latest version of SvelteKit. I have a navbar on my site with a background color I'm dynamically setting with a css variable and a svelte writable string store. In my code, I'm setting the color on mount (there's no change if I set the color where the logo flag is being set ``` import dayjs from 'dayjs'; import JsBarcode from 'jsbarcode'; import { onMount } from 'svelte'; import { showLogo, color } from '$lib/components/navbar/navbarStores'; // ..field setups showLogo.set(true); onMount(() => { // ..other page load…

### CASE-7760 · Make static adapter truly static
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I'm not sure if it's a missing feature, an intended "feature" or just a bug. Basically, I have a website with some dynamic pages (slugs) that I know at compile time. I want to generate the static pages and make them accessible via a traditional hosting (e.g. apache webserver). The use case is a blog, where I have dynamic slugs that are fetched at build time and used to generate static pages. The problem is, though, the pages are not generated, instead are left dynamic when using the `static adapter` and thus, navigating…

### CASE-7778 · resolve() expects 2 arguments
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍8 💬6 · closed
- **Excerpt**: ### Describe the bug Hello, I started getting the [`svelte/no-navigation-without-resolve`]([link]) lint warning, and I changed all instances to use `resolve()`, but now I'm getting a type error when I use it in a template: ``` Error: Expected 2 arguments, but got 1. (js) <li class="nav-item"> <a class="nav-link" aria-current="page" href={resolve('/')}>Home</a> </li> ``` ### Reproduction Example code: ```html <script> import { resolve } from '$app/paths'; </script> <header> <nav> <ul> <li class="nav-item"> <a class="nav-link" aria-current="page" href={resolve('/')}>Home</a> </li> </ul> </nav>…

### CASE-7791 · Cannot access Cloudflare KV variables on platform.env
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows, svelte
- **Signals**: 👍0 💬6 · closed · labels: documentation/pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug I am currently trying to deploy a sveltekit website with Cloudflare workers using Cloudflare KV. I've followed this guide [link] I tried building with `@user/adapter-cloudflare:2.3.3` and that works fine, however event?.platform?.env does not contain Cloudflare KV_1. ### Reproduction Here is a minimal reproduction [link] Just clone, insert your Cloudflare details and try it. When logging the event in hooks, it will not display the KV_1 namespace. ### System Info ```Shell System: OS: Windows 10 10.0.19045 CPU: (6) x64 Intel(R) Core(TM) i5-8600K CPU @ 3.60GHz Memory: 5.76…

### CASE-7793 · Sveltekit always writes production env variables inside index.html
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I am really struggeling to get the `mode` flag to work for different builds for different environments (dev, staging, test, production). The build always ends up with using the variables from the `env.production` file. ### Reproduction I have the following structure: .env-file ``` PUBLIC_API=env ``` .env.staging ``` PUBLIC_API=staging ``` .env.production ``` PUBLIC_API=production ``` package.json ``` "build:staging": "vite build --mode staging", ``` ### Logs ```Shell No matter what if I run the command `npm run build:staging` vite is telling me that it is using the mode…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7709 · #svelte-announcer triggers CSP violation
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍7 💬7 · closed
- **Excerpt**: ### Describe the bug When creating a new Sveltekit project from the demo template and configuring CSP rules that disallows inline styles you get a CSP violation on the #svelte-announcer element which is using inline styles without a nonce. ### Reproduction [link] 1. Clone the repo 2. Run `npm run build && npm run preview` 3. Open the site and you'll see these errors attached as screenshots ![image]([link] framework]/assets/163637/696ea6ba-c5fd-48c2-ae86-f245d55e6beb) ![image]([link] framework]/assets/163637/867ba984-8f5d-4580-afd3-7022dadff112) The only thing changed from the demo project is…

### CASE-7713 · adapter-netlify - ReferenceError - Headers is not defined
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: pkg:adapter-netlify
- **Excerpt**: ### Describe the bug When deploying to Netlify I am receiving the following error in production: ![image]([link] framework]/assets/85003930/7b94c08d-b333-40f5-bd57-abb9ecf5ca9c) It appears to be coming from this `to_request` function here: [link] framework]/blob/87da73e361070071b01fc459c5639d26baab34f5/packages/adapter-netlify/src/serverless.js#L62 ### Reproduction I have a few sites deployed with SvelteKit and Netlify but only one of them is throwing this error for some reason, even though they are all on the same versions. This is the site causing the issue: [link] ### Logs _No response_…

### CASE-7714 · vscode cannot read correctly files
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug <img width="506" alt="Screenshot 2023-12-23 at 16 09 23" src="[link]> ### Reproduction open last sveltekit2 project in vscode and try to import something ### Logs _No response_ ### System Info ```shell macOS, VScode ``` ### Severity blocking an upgrade

### CASE-7719 · Inconsistent media URLs
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug When importing a media asset and trying to prefix its path with another domain name, I am running into inconsistencies in how SvelteKit works. +page.svelte ``` <script lang="ts"> import image from "$lib/assets/image.jpg"; import Image from "$lib/Image.svelte"; </script> <img src={image} alt="kitten" /> <Image src={image} alt="kitten" /> ``` Image.svelte ``` <script lang="ts"> export let src: string; export let alt = ""; const mediaUrl = "[link] function media(path: string) { console.log(path); if (path.startsWith("http")) { return path; } else { return…

### CASE-7722 · beforeNavigate doesn't trigger default browser behaviour as-per the docs
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬7 · closed · labels: breaking change/needs-decision
- **Excerpt**: ### Describe the bug A follow-up from [ref]. The [beforeNavigate documentation]([link]) states that: > "calling cancel will trigger the native browser unload confirmation dialog. In these cases, navigation.willUnload is true." When linking to an external site, we're told that `{ ... navigation.willUnload: true }`, but the native browser unload confirmation dialog doesn't appear as expected. ### Reproduction [link] - reproduction [link] - walkthrough video (1m 45s) ### Logs _No response_ ### System Info ```Shell System: OS: macOS 12.3.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz…

### CASE-7731 · `invalidate('...')` doesn't work after navigating to a page with parameters
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: documentation/breaking change
- **Excerpt**: ### Describe the bug Repro: [link] It seems like having a route with params (e.g. `routes/whatever/[id]`) along with a load function that have `depends(...)` doesn't work as expected, when you navigate to that page with the client-side router, and then run `invalidate('...')`, it won't work. Very weird. I'm pretty confident this is a bug. ### Reproduction - Clone [link] - Run and open the app (the home page) in the browser - Open the console, run `invalidate('user')`. You'll see that the layout's load function gets re-run, as expected: ![image]([link]) - Now, click on the link in the home…

### CASE-7733 · Relative asset paths broke usage of imagetools
- **Principles**: P-A3, P-H1 · **Env**: vite, svelte
- **Signals**: 👍15 💬7 · closed · labels: vite/p1-important/paths.base
- **Excerpt**: ### Describe the bug The relative asset paths for the static adapter do not work when I use vite imagetools. The resulting paths are always starting with `./_app/...` instead of `/_app/...`. So the images are only working on the root path and don't load on any subpage. I'm not sure whether this has to be adopted in image tools or if there should be an option in svelte kit to disable that behavior. Maybe both. In general, I think relative paths are great and would love to have this feature work with imagetools. Breaking PR in Svelte Kit: [link] framework][ref] Coresponding Issue in imagetools:…

### CASE-7737 · CSS property with "image-set" value is silently removed from inline style
- **Principles**: P-A3, P-H1 · **Env**: linux, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug A "background-image" property as described above is completely removed from the output. No warnings or error messages. ### Reproduction See the modified "h2" tag in index.svelte and compare to generated HTML. background-image is completely gone. Attribute is kept if just set to url("..."). [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (4) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 16.14.2 - /usr/local/bin/node Yarn: 1.22.10 - /bin/yarn npm: 7.17.0 - /bin/npm…

### CASE-7738 · Invalid request body
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I upgraded svelte-kit to its latest version today. I configured my project to use the new vite.config.js setup, however now "Invalid request body" is the only response I get in the browser for all routes (except proxy rules). It's occurring while using the default starter/skeleton project as well. <img width="1440" alt="Screen Shot 2022-07-05 at 6 23 32 PM" src="[link]> <img width="1440" alt="Screen Shot 2022-07-05 at 6 23 51 PM" src="[link]> There are no errors reported in the terminal. Configured server proxy rules do resolve. ### Reproduction npm create svelte my-app…

### CASE-7744 · Endpoints can not handle '=' in cookies
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: p2-nice-to-have/contributions-welcome
- **Excerpt**: ### Describe the bug If you set a cookie that contains a '=' inside the handle hook and then hit an endpoint a second (broken) cookie is written. For example setting `testCookie={"key1":"value1,"key2":"value=2","key3":"value3"}; Path=/; HttpOnly; SameSite=Lax` and then hitting an endpoint will make your cookies look like this: <img width="453" alt="image" src="[link]> If you then got to page thats not the root page and reload the page the original cookie is set two times (one correct and one broken version): <img width="516" alt="image" src="[link]> These broken cookies can potentially crash…

### CASE-7748 · Using `sequence` means I need to include `@[meta framework]` in my Node Docker image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: pkg:adapter-node/breaking change
- **Excerpt**: ### Describe the problem I noticed when trying to slim down my Docker images that if I kept only the runtime dependencies after building (which I list in `dependencies` and install with `npm ci --only=prod`) my container would immediately crash because it `Cannot find package '@[meta framework]' imported from /usr/srv/build/server/app.js`. It turns out that when you use `sequence()` for hooks, the generated `app.js` file includes `import { sequence } from '@[meta framework]/hooks`. ### Describe the proposed solution I'm not sure how, but it would be nice if we copied over the relevant code…

### CASE-7750 · Static adapter does not honor base path for static files
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: ### Describe the bug 1. Create a project with a static adapter. 2. Add this to the config: `paths: { base: '/apath'}` 3. Build the project 4. Preview the project 5. Note that any files in `static` folder are resolved at the root and ignore the base path. i.e. `localhost:3000/img.png` instead of the expected `localhost:3000/apath/img.png` I would expect the base path to be honored across the board and not just for js/css files. ### Reproduction NOTE: I'm not sure if this is a bug or static files intentionally must always resolve to the root. If this is expected behavior I'll change this to a…

### CASE-7779 · `page.params` in subroute has type of root route instead
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍8 💬6 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug Hey, just after updating I noticed this problem, the `page.params` object has the type `LayoutParams<"/">` instead of the correct route. <img width="766" height="222" alt="Image" src="[link] /> This problem occurs in multiple subroutes of mine. This above example is in `src/routes/(app)/(online)/admin/issues/[issue_id]/+page.svelte`. ### Reproduction -- ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 15.5 CPU: (20) x64 Intel(R) Xeon(R) W-2150B CPU @ 3.00GHz Memory: 3.88 GB / 64.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 24.5.0 - /usr/local/bin/node…

### CASE-7780 · Internal Server Error with adapter-cloudflare v.7.1.0
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: pkg:adapter-cloudflare
- **Excerpt**: ### Describe the bug On my site (a rather larger project so can't really reproduce easily) when updating to adapter-cloudflare v7.1.0, I get this error on the build: <img width="2020" height="912" alt="Image" src="[link] /> It's all working well on v7.0.5. Just v7.1.0 introduces this Internal Server Error. No specific error in the CF Pages functions logs 🤔 just a 500 error. ### Reproduction Just use adapter-cloudflare v7.1.0 ### Logs ```Shell ``` ### System Info ```Shell System: OS: macOS 15.5 CPU: (12) arm64 Apple M2 Max Memory: 313.09 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node:…

### CASE-7782 · `enhanced-img` `snippet test(src: string)` results in "TypeError: Cannot read properties of undefined (reading 'src')"
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍0 💬6 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug ```svelte // This works ✅ <enhanced:img src="./image.jpg" /> // This does NOT ❌ {#snippet imgSnip(src: string)} <enhanced:img {src} /> {/snippet} {@user imgSnip("./image.jpg")} // Neither does this... <enhanced:img src={"./image.jpg"} /> ``` ### Reproduction Please see above. ### Logs The error during `pnpm run dev` reads: ``` TypeError: Cannot read properties of undefined (reading 'src') ``` ### System Info ```Shell System: OS: macOS 15.2 CPU: (20) x64 Intel(R) Xeon(R) W-2150B CPU @ 3.00GHz Memory: 123.22 MB / 64.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 23.5.0 -…

### CASE-7783 · Unclear documentation with `output.bundleStrategy === 'inline'` and `router.type === 'hash'`
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Perhaps I'm missing something obvious here, but attempting to use `bundleStrategy: inline` with `adapter-static` in a fresh SvelteKit skeleton project produces the following errors: <img width="1452" alt="errors" src="[link] /> My configuration is ```js import adapter from '@user/adapter-static'; /** @user {import('@[meta framework]').Config} */ const config = { kit: { adapter: adapter({ pages: 'build', assets: 'build', fallback: 'index.html' }), output: { bundleStrategy: 'inline' } } }; export default config; ``` ### Reproduction Use `npx sv create ...` and modify the…

### CASE-7784 · enhanced-img cache is too sticky
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬6 · open · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug If I have `<enhanced:img alt="..." src="./foo.png">`, and update `foo.png`, the page doesn't update. I have to nuke the cache with `rm -rf node_modules/.vite` and restart the dev server ### Reproduction later ### Logs _No response_ ### System Info ```Shell latest ``` ### Severity annoyance ### Additional Information _No response_

### CASE-7785 · Svelte 5 ecosystem CI is failing
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: svelte 5
- **Excerpt**: ### Describe the bug ![Screenshot from 2024-09-18 10-43-48]([link]) I don't understand why this is failing though ![Screenshot from 2024-09-18 10-43-18]([link]) I should also note that `TemplateNode` is declared in the types twice. Once in the root of the types as a non-exported type and once exported from `'svelte/types/compiler/interfaces'` ### Reproduction Upgrade `enhanced-img` to the latest Svelte 5 and run `pnpm check` ### Logs _No response_ ### System Info ```Shell `main` ``` ### Severity blocking an upgrade ### Additional Information Should have been fixed with [link] but for some…

### CASE-7788 · ESLint v9 config type error
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: pkg:create-svelte/blocked by upstream
- **Excerpt**: ### Describe the bug - [link] framework][ref] - [link] framework][ref] <img width="1112" alt="image" src="[link] framework]/assets/47051820/900bac44-855e-407b-ba93-50104e8961de"> ``` Type '({ readonly rules: Readonly<RulesRecord>; } | { plugins: { readonly svelte: Plugin; }; files?: undefined; languageOptions?: undefined; rules?: undefined; processor?: undefined; } | ... 4 more ... | Config)[]' is not assignable to type 'FlatConfig<RulesRecord>[]'. Type '{ readonly rules: Readonly<RulesRecord>; } | { plugins: { readonly svelte: Plugin; }; files?: undefined; languageOptions?: undefined;…

### CASE-7789 · @user/enhanced-img shows the same image if file name is the same
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: pkg:enhanced-img
- **Excerpt**: ### Describe the bug If we place two images in two different routes and name the files the same, `<enhanced:img src="./image.png" />` on every page will show us the same image. ### Reproduction Assume structure: ``` /routes/dir/one/+page.svelte /routes/dir/one/image.png /routes/dir/two/+page.svelte /routes/dir/two/image.png ``` **one/image.png** and **two/image.png** are two different images, different files. In every +page.svelte we place: `<enhanced:img src="./image.png" />` Of course, every enhanced:img has its own image file, but something goes wrong and both pages show the same image The…

### CASE-7797 · Unable to get Facebook Open Graph meta tags to work in Sveltekit for routes other than home '/'
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug The Facebook meta tags work fine on the homepage and a preview is generated along with the `og:image`. However, when trying with individual blog article pages, the preview is not generated. `[link] is used for this testing. When I try to navigate to routes such as `/blog` and `/blog/title`, the Facebook Open Graph Debugger does not see them. ### Reproduction *(actual page data omitted for simplicity)* The following is my `+page.svelte`: ```svelte <!--src/routes/blog/[slug]/+page.svelte--> <script> import { PUBLIC_API_URL } from '$env/static/public'; import moment from…

### CASE-7800 · Adapter-static not applying CSS on index page
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: documentation
- **Excerpt**: ### Describe the bug This is what I expect: ![image]([link]) But when I upload it to [Github pages]([link]), the index page has no CSS applied to it: ![image]([link]) The strange thing is that CSS get applies correctly on other pages, only the index page (i.e. from ` src/+page.svelte`) has this problem. Even stranger is if I click a link to go to another page, and then click a link coming back to the index page, the CSS will be applied! You can see this on my [demo pages]([link]). Can anyone explains why this is happening? The build produce no error of course. It is the final result that is…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7715 · The `link` HTTP header in SSR breaks the import maps
- **Principles**: P-F4 · **Env**: linux
- **Signals**: 👍4 💬7 · open
- **Excerpt**: ### Describe the bug I'm using node adaptor and I found when doing SSR, the server adds a [link]([link]) HTPP header to indicate the browser to preload things. However, I'm using [import maps]([link]) as well. According to the standard, the import map must be declared and processed before any <script> elements, so those scripts preloaded in the link header break my import maps. ### Reproduction [link] The problem only exists in production build. ### Logs _No response_ ### System Info ```Shell System: OS: Linux 6.6 Arch Linux CPU: (14) x64 AMD Ryzen 7 5800X 8-Core Processor Memory: 24.67 GB /…

### CASE-7741 · When deploying adapter-vercel, in prod "/__data.json" is not found if hook has ssr=false
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed · labels: p1-important
- **Excerpt**: ### Describe the bug Some routes of a adapter-vercel fail only in production with `Failed to load data` due to path `/__data.json` returning 404 in the vercel deploy. It took me a long time to realize this happens only with ssr=false in a hook: ``` export const handle = async ({ event, resolve }) => { return await resolve(event, {ssr: false}); }; ``` Maybe I'm doing something really dumb, but it took me many hours to narrow down this unexpected behaviour to the ssr=false option. What was really confusing is that in my original app not only everything works fine in development and preview, but…

### CASE-7743 · Can't `location.assign(url)` in `load()` function: throws `Illegal invocation`
- **Principles**: P-F4 · **Env**: angular, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I have a fallthrough route, which I want to _always be server-rendered_. The use-case is that we're migrating from Angular to SvelteKit, and any pages which SvelteKit doesn't recognise should: - if invoked client-side, reload the URL to force a SSR - return a page which boots AngularJS, with no hydration or SvelteKit router - this ensures that only AngularJS is running in the browser, as SvelteKit will not send any of its own JS with the SSR response The fix for [this issue]([link] framework][ref]) (PR [here]([link] framework][ref])) introduced a `Proxy` wrapper for the…

### CASE-7747 · esbuild: Unterminated string literal when building SSR bundle
- **Principles**: P-F4 · **Env**: edge
- **Signals**: 👍0 💬7 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug This is an issue that first appeared for me 2 days ago, where all builds would fail because of a seemingly incomplete import statement in one specific file, where no such import statement existed. This could be fixed by deleting the file, starting the devserver, then adding the file back in while it's running. This workaround, however as far as I know, is not practical when deploying to Vercel in this case, as it would probably take a script to run the dev server with the file deleted, then subsequently readding it. To the best of my knowledge, this does not have anything…

### CASE-7753 · Error when evaluating SSR module (Unexpected token 'export') in DEV
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬7 · closed · labels: vite/p3-edge-case
- **Excerpt**: ### Describe the bug When I run `pnpm run dev` and load some page I've got an error in console: ``` 3:53:23 PM [vite] Error when evaluating SSR module /.svelte-kit/dev/runtime/internal/singletons.js: SyntaxError: Unexpected token 'export' at new AsyncFunction (<anonymous>) at instantiateModule (/home/www/sources/node_modules/.pnpm/[email]@user.43.5/node_modules/vite/dist/node/chunks/dep-e0fe87f8.js:66543:28) 3:53:23 PM [vite] Error when evaluating SSR module /.svelte-kit/dev/runtime/app/navigation.js: SyntaxError: Unexpected token 'export' at new AsyncFunction (<anonymous>) at…

### CASE-7754 · svelte:head tags outside __layout not included in SSR output
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: ### Describe the bug The contents of `<svelte:head>` are only server-side rendered if they are defined inside `__layout.svelte` For many very common reasons, I would like to define custom meta tags on a per-route basis. For example I'd like OpenGraph/twitter meta tags that correspond to the content on the page. However, when specifying these tags inside `<svelte:head>` in a specific route, they are only injected into `<head>` of the document on the client-side. This defeats the entire purpose of these tags which are fetched by social networks and search engine spiders which typically won't…

### CASE-7755 · Fallthrough routes (2 routes with slugs on same level) Regression issue .137
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I cannot make a route fallthough when in SSR, this works as expected when client is navigating This also affects when I export with static-adapter as all these routes return 500 ### Reproduction This issue only appears in SSR mode, I reproduce by going to the route in question and refreshing (F5) I have 2 routes: src/routes/[legal]/index.svelte src/routes/[page]/index.svelte I manually check in my load function inside src/routes/[legal]/index.svelte `if (!validRoute) return` But this never reaches the load function in src/routes/[page]/index.svelte I see a 500 Internal…

### CASE-7756 · Invalid Url on fetch in a store when first loading the page
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** Fetch in a custom store rejects with a `TypeError [ERR_INVALID_URL]: Invalid URL: /api/user.json` when first loading the page from the server. Once the svelte app is hydrated and navigating between pages, the error does not happen and the store works fine. **Logs** The `console.error` from the rejection with stack. ``` TypeError [ERR_INVALID_URL]: Invalid URL: /api/user.json ``` *The custom store:* ```ts import { derived, writable } from 'svelte/store'; import { session } from '$app/stores'; function createUserStore() { // User const {subscribe} = derived(session,…

### CASE-7759 · Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: lodash-es\lodash.js
- **Principles**: P-F4, P-F5, P-H3 · **Env**: vite, svelte
- **Signals**: 👍0 💬7 · closed · labels: vite
- **Excerpt**: **Describe the bug** I'm trying to use `lodash-es` like this: ```js import { debounce } from 'lodash-es' //...debounce using it ``` but I'm getting the below error. **Logs** ``` 1:37:22 AM [vite] Error when evaluating SSR module /src/routes/players/_cmp/SearchBar.svelte: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: C:\kit\node_modules\lodash-es\lodash.js require() of ES modules is not supported. require() of C:\kit\node_modules\lodash-es\lodash.js from C:\kit\node_modules\vite\dist\node\chunks\dep-e9a16784.js is an ES module file as it is a .js file whose nearest parent…

### CASE-7764 · External components not correctly compiled in SSR mode
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: It seems that external components (installed to `node_modules`) do not correctly work with Kit. We end up trying to run a browser-compiled version of them as part of the SSR code, which results in the runtime `is not a valid SSR component` error. The issue does not seem to be that Kit and/or Snowpack is not correctly resolving `pkg.svelte`. It appears to be finding the correct component file to compile, and it is compiling it, but it's compiling it in DOM mode when it ought to be compiling it in SSR mode. I haven't made any real progress on determining whether this is a Kit bug or a Snowpack…

### CASE-7767 · Invalid destructuring assignment target (at form.svelte.js …)
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍4 💬6 · closed
- **Excerpt**: ### Describe the bug Seemingly without any reason few hours back svelte-kit app which uses async & remote functions started to throw `Invalid destructuring assignment target (at form.svelte.js?v=712c42f9:342:69)` in client side while ssr works. Also `npm run preview` works just fine. ``` js export default defineConfig({ plugins: [ sveltekit({ compilerOptions: { … experimental: { async: true } }, … experimental: { remoteFunctions: true } }) ] }); ``` ### Reproduction [link] (tested on node 24 and 26) npm run dev ### Logs ```Shell SyntaxError: Invalid destructuring assignment target (at…

### CASE-7770 · `page.params` undefined inside `<svelte:boundary>` when ancestor has top-level await
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug `page.params` from `$app/state` is `undefined` inside `<svelte:boundary>` during hydration when an ancestor component has top-level `await`, even though it's correctly defined outside the boundary in the same component. ### Reproduction **Layout with Sidebar component:** ```svelte <!-- src/routes/[tenant]/+layout.svelte --> <script> import Sidebar from '$lib/sidebar.svelte'; </script> <Sidebar /> <main>{@user children()}</main> ``` **Sidebar with top-level await (no boundary):** ```svelte <!-- src/lib/sidebar.svelte --> <script> import { queryMe } from…

### CASE-7776 · Async SSR and client-side navigation causes elements to persist
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍8 💬6 · closed · labels: svelte 5
- **Excerpt**: ### Describe the bug It seems like an async component that is SSR-ed causes all the elements below it to persist after client-side navigation. Not sure if this is an issue with Svelte or SvelteKit. ### Reproduction [link] 1. Run `npm run build && npm run preview` 2. Click on the navigation link to `/about` 3. Observe that the paragraph from the home page persists in the new page ### Logs ```Shell ``` ### System Info ```Shell stackblitz ``` ### Severity blocking an upgrade ### Additional Information _No response_

### CASE-7786 · SvelteKit security model doesn't cover +page.svelte content
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬6 · open · labels: documentation
- **Excerpt**: ### Describe the problem SvelteKit allows you to _visually_ deny access to a route using [server hooks]([link]), but the compiled `+page.svelte`'s filename is always public as `.svelte-kit/output/client/_app/immutable/entry` has import references to all routes' bundles. This can leak internal API calls and DOM content on the supposedly-private route which is harmful for my blog use-case where I'd like to have truly private posts[^1]. It is also misleading for the developer who may not telepathically intuit the SvelteKit hydration model. [^1]: Which I want to be able to just write in Svelte so…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7720 · @user/[email] make memory leak
- **Principles**: P-F5, P-H3 · **Env**: linux, ubuntu
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug Basically, every 5min, I have an extra 100mb to the process. Originally I thought about `undici` lib same as last time [ref] but seems like now times it's something new. ### Reproduction I have a load on the production server for the node project. If it's will not an obvious reason I will try to make a reproduction. But seems like will be simpler to bisect changes. ### Logs _No response_ ### System Info ```Shell System: OS: Linux 5.4 Ubuntu 20.04.5 LTS (Focal Fossa) CPU: (12) x64 AMD Ryzen 5 3600 6-Core Processor Memory: 36.95 GB / 62.81 GB Container: Yes Shell: 5.0.17 -…

### CASE-7763 · Headers cleanup
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: Headers type is defined in three places: - SvelteKit - Node.js - `node-fetch` We try to pass these around interchangeably, but that's almost certainly broken since it may be a `string | string[]` in Node.js, but not in the other two places. I believe that Node.js has defined headers correctly ~~while the other two are broken. There's actually an open issue for this in the `node-fetch` repo [link] Unfortunately, I'm not quite sure what to do about this as long as that issue remains open~~ I think it's also possible that `fetch` headers are different than generic request headers? In which case,…

### CASE-7798 · 'typeof TableSearch__SvelteComponent_' is not assignable of type 'Constructor<SvelteComponentDev>'
- **Principles**: P-F5, P-H3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Not sure what is going on and I can't find any similar errors in recent history on Github or Discord. When I am trying to render a Svelte component for testing following @user/svelte I am getting this crazy Typescript error but the test seem to be functioning fine. It seems to want to be of type SvelteConponentDev but if I try to use `as typeof SvelteConponentDev` I get an error saying it's already typed. Can anyone advise me if this is a mistake on my part or a bug that has just sprung up? ### Reproduction ```Typescript import { render, fireEvent, cleanup } from…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7742 · sveltekit d3 problems / shows unexpected behavior for bind:clientWidth and bind:clientHeight compared to a normal svelte project
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Trying to use d3 with sveltekit I stumbled upon unexpected behavior. For demo purposes I took the svelte project [`simple-svelt-chart`]([link]) and migrated it into a simple sveltekit project [`simple-svelt-chart-kit`]([link]). Doing so it shows strange behaviors regarding the calculated **_width_** and **_height_**. Contrary to a simple svelte project it won't get calculated at render time but later. I created 2 branches with partly solutions that are still faulty / defective. In the branch "solution/unconditionalRendering" it renders the graph (unconditionally if width…

### CASE-7796 · Back Button does not scroll to the correct position
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: firefox, chrome, svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug In all tested browsers (Firefox, Chrome) the back button does not restore the scroll position of the previous page, when it is an internal link. ### Reproduction * Go to [link] * Scroll down, click on "NEXT: Svelte components" * Click on the browser back button As a result we navigate back to the page where we came from, but the scroll position is not restored. For comparision, on the same page, click on the external "Stack Overflow" or "Discord Chatroom" link and navigate back. The scroll position will be restored. ### Logs _No response_ ### System Info ```Shell System:…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-7766 · SvelteKit 3 migration blocked for sites using Superforms
- **Principles**: P-A2, P-A4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Superforms' peer dependency range doesn't yet include SvelteKit 3 (see #[695]([link])), which means any site using Superforms can't upgrade past SvelteKit 2.x. This is currently blocking us from migrating. I understand a full SvelteKit 3 migration for Superforms may take some time, so as a possible stopgap: would a "legacy mode" that keeps supporting $app/stores be feasible? That could let dependent projects upgrade to SvelteKit 3 now and adopt Superforms' full SvelteKit 3 support later, without blocking on this issue. Happy to help test or contribute if that's useful.…

