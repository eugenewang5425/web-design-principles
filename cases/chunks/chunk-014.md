# Case Chunk 014 — Round 14

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2301 · From [email] a lot of `reactive_declaration_non_reactive_property` warnings
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍6 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug From [email] I get a lot (I mean A LOT) of these warnings in browser console: ``` A `$:` statement (node_modules/​.pnpm/​[email]/​node_modules/​svelte-select/​Select.svelte:197:4) read reactive state that was not visible to the compiler. Updates to this state will not cause the statement to re-run. The behaviour of this code will change if you migrate it to runes mode ``` We are all waiting for svelte-select to upgrade but in the mean time I would like to not have all these warning in the console which also hide the warnings or real errors. ### Reproduction [link] ###…

### CASE-2302 · state_unsafe_mutation when an error happened inside the ":then" block
- **Principles**: P-G4, P-E3 · **Env**: linux, svelte
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug It seems like Svelte gets stuck in an effect state. ### Reproduction [link] Type something in the text input ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 Manjaro Linux CPU: (12) x64 AMD Ryzen 5 5600G with Radeon Graphics Memory: 10.44 GB / 30.70 GB Container: Yes Shell: 5.9 - /bin/zsh Binaries: Node: 22.6.0 - /usr/bin/node npm: 10.8.2 - /usr/bin/npm bun: 1.1.24 - /usr/bin/bun Browsers: Brave Browser: 128.1.69.160 npmPackages: svelte: ^5.1.11 => 5.1.11 ``` ### Severity annoyance

### CASE-2313 · What is the best practice to use Svelte with Katex load-time rendering?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug My app has a component that adds or subtracts an input slider upon a button click. This worked fine, until, elsewhere in the document I added `$ ... $` strings, and then used the Katex auto-render script: ```html <script defer src="[link] integrity="sha384-pK1WpvzWVBQiP0/GjnvRxV4mOb0oxFuyRxJlk6vVw146n3egcN5C925NCP7a7BY8" crossorigin="anonymous"></script> <script defer src="[link] integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossorigin="anonymous"></script> ``` to convert these into `<span> ... </span>` DOM subtrees. The conversion…

### CASE-2324 · Partial components
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍3 💬11 · open
- **Excerpt**: ### Describe the bug Components in Svelte 5 are functions so it should be pretty straight forward to make a curried (partial) component (with some props pre-populated). Doing the below implementation works perfectly for the component creation. However the `partial` components do not react for props changes (change the size in the `input`). Where is the problem? ```svelte <!-- Button.svelte --> <script> let { children, color, size } = $props(); </script> <button style:border-width={size + "px"} style:border-color={color}>{@user children()}</button> ``` ```ts // buttons.ts import type {…

### CASE-2327 · state_referenced_locally warning when trying to store an initial value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬11 · closed
- **Excerpt**: ### Describe the bug Not sure if i am using runes as it should be, but I get : `State referenced in its own scope will never update. Did you mean to reference it inside a closure? (state_referenced_locally)` when trying to store an initial value from a state ```javascript const { path } = $props() const form = getFormContext() const field = $derived(form.useField(path)) // access some usefull methods here depending on the path prop const initialValue = field.value // <— warning here ``` ```javascript const initialValue = $state.snapshot(field.value) // <— warning also ``` I know…

### CASE-2330 · <input type="reset" /> clears form instead of respecting values
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬11 · closed
- **Excerpt**: ### Describe the bug Using `<input type="reset" />` on a form with hardcoded values clears the form when it shouldn't. ### Reproduction Repl here: [link] Form is reset, but values shouldn't change. See [link] ### Logs _No response_ ### System Info ```shell repl ``` ### Severity annoyance

### CASE-2335 · Updating a contenteditable w/ on:input function is prepending, not replacing, if initial value is empty
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug/temp-stale
- **Excerpt**: **Describe the bug** Sorry for the mouthful of a title. Showing is often easier than telling: [link] If the initial value is empty, typing into the contenteditable div causes the value to be prepended with the previous value after each keystroke (instead of replaced). Eg typing "Hello" nets a value of: HelloHelloHellHelHeH This does not happen if a) the initial value of the field is non-empty or b) after you complete that initial input, you select all the garbage text, delete it, and re-enter new text. **Expected behavior** The value of the element's innerText should reflect exactly what is…

### CASE-2342 · Experimental Async with preload and conditional bind:this kills reactivity
- **Principles**: P-G4, P-E3 · **Env**: windows, react
- **Signals**: 👍6 💬10 · closed
- **Excerpt**: ### Describe the bug With hover preloading on and async enabled, it seems that conditional `bind:this` can somehow break reactivity for the application. Minimal repro below. The select box uses the `bind:this` for absolutely nothing in the repro, but it still breaks. Remove the `bind:this`, disable preloading, or disable async and things behave as expected. ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (32) x64 AMD Ryzen 9 5950X 16-Core Processor Memory: 31.45 GB / 63.89 GB Binaries: Node: 22.12.0 - C:\nvm4w\nodejs\node.EXE npm:…

### CASE-2349 · Svelte 5: binding_property_non_reactive when binding to a writable store
- **Principles**: P-G4, P-E3 · **Env**: opera, windows, svelte, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug ``` const store = writable({ count: 0 }) let rune = $state({ count: 0 }) ``` ``` <Child bind:form={$store} /> <Child bind:form={rune} /> ``` I would expect the binding to both the store and rune to operate the same in this scenario. It does not however. If `<Child />` contains `<input type="number" bind:value={form.count} />`, the version passing a writable store will warn "binding_property_non_reactive" and changes will not trigger UI changes. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (20) x64 13th Gen…

### CASE-2353 · Svelte 5: Nested form control bindings causes runtime error
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed · labels: documentation
- **Excerpt**: ### Describe the bug When binding to inputs in nested forms, the binding fails and a runtime error is thrown: ```html <form> <form> <input bind:value /> </form> </form> ``` Although nested forms are not valid according to the HTML spec, the error should be either friendlier or not throw at all since it worked just fine in Svelte 4. ### Reproduction [link] ### Logs ```shell Cannot read properties of null (reading 'addEventListener') in App.svelte ``` ### System Info ```shell running Svelte compiler version 5.0.0-next.151 ``` ### Severity blocking an upgrade

### CASE-2358 · Dot and comma separators are inconsistent in input type=number
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug When typing in a number input, if you use a dot instead of a comma, the value of the input becomes `null` at the time of entering the dot. However, this behavior is not observed when using a comma. Example: `5.` => null `5,` => 5 ### Reproduction [link] ### Logs _No response_ ### System Info ```shell - ``` ### Severity annoyance

### CASE-2359 · Incorrect validation for void svelte:element content presence
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: ### Describe the bug with the fix for [[ref]]([link]][ref]) in 3.48.0 there was a new validation included which doesn't work correctly. The validation prevents content inside a void <svelte:element> and produces `<svelte:element this="input"> is self-closing and cannot have content.` if there is any content in the tag, including conditional ones, making it impossible to create universal code which dynamically contain content. For example this code is now considered invalid: ``` <svelte:element this={tag.type}> {#if tag.type !== 'input'}{tag.content}{/if} </svelte:element> ``` although the…

### CASE-2368 · Two-way binding on:change and bind:value inconsistency depending on definition order
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬10 · closed · labels: temp-stale/documentation
- **Excerpt**: **Describe the bug** If you define an on:change attribute before a bind:value attribute, the on:change handler doesn't work. **To Reproduce** This REPL shows how it should work. [link] Swap lines 44 and 45 around. The input boxes will stop updating when the select is changed. **Expected behavior** It shouldn't matter whether you define the event handler before the bind. **Severity** Maybe this is expected behaviour, but I couldn't see anything obvious in the docs to explain it.

### CASE-2375 · For input numbers we should use null instead undefined in toNumber
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed · labels: bug
- **Excerpt**: If you return undefined it became the problem for some situations like this (we can't set undefined back): [link] by the standard, the "number input" can contain numbers or empty and empty here is an empty string or null. [link]

### CASE-2397 · `<input type="date">` (and derived) external `.value` mutation doesn't update effects
- **Principles**: P-G4, P-E3 · **Env**: edge
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug `<input type="date">` (and derived) external `value` mutation doesn't update effects ### Reproduction 1. Open [REPL]([link]) 2. Open Browser Inspector 3. Acknowledge input element to the debugger (`CTRL + SHIFT + C`, then click on input element) 4. Inspector Console: input `document.getElementById("test").value = "2024-01-07"` Input element bound state `value` (which is also privately stored as input element property `__value`) didn't get updated ### Logs _No response_ ### System Info ```shell Not needed ``` ### Severity annoyance

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2303 · Size regression from Svelte 4
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug My site at [link] actually grows in size when migrating from 4.2.18 to 5.0.0-next.233. Svelte 4: chunks - 38,059 bytes entry - 6,079 bytes nodes - 61,245 bytes Svelte 5: chunks - 47,499 bytes entry - 5,255 bytes nodes - 61,206 bytes I believe this is primarily triggered in my case by the site having 25 instances of `@user/enhanced-img` though I'm not sure that's necessary to hit this. Inlining the `srcset` during template creation would reduce the HTML creation portion of the compiled JS from 21K to 6.8K (this is not the whole script - i.e. it excludes Svelte's runtime,…

### CASE-2304 · When SSR output starts with a comment, hydration fails
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug Since next.179, when the SSR output starts with a comment (for example because the root block is an if-block, resulting in `<!--[-->` as the first node in the SSR output), hydration fails. Does not happen in next.178 ### Reproduction Here is a minimal reproduction in the REPL: [link] I've done some digging, and it seems that in next.178 the `append` is called, which is no-op during hydration. In next.179, the `child` function is called, which tries to append a node to the comment node. next.178: ![image]([link]) next.179: ![image]([link]) ### Logs _No response_ ### System…

### CASE-2308 · Tailwind @user breaks with Svelte 5 (alpha 57)
- **Principles**: P-A3, P-H1 · **Env**: tailwind, svelte
- **Signals**: 👍15 💬12 · closed · labels: documentation/css
- **Excerpt**: ### Describe the bug Video shows it best; starting with alpha 57 the tailwind @user rule breaks (specifically with darkmode): [link]]/assets/153018600/4eaa759a-044e-4c34-811c-b5648374924d ### Reproduction [SvelteLab]([link]) ### Logs _No response_ ### System Info ```shell Svelte v5.0.0-next.57 (breaks) Svelte v5.0.0-next.56 (works) ``` ### Severity annoyance

### CASE-2311 · Svelte 5: Inaccurate source maps when `lang="ts"` is enabled
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍1 💬12 · open · labels: bug/awaiting submitter
- **Excerpt**: ### Describe the bug Source maps are seemingly inaccurate when `lang="ts"` is enabled on the `<script>` tag. This _only_ occurs when using TS in Svelte 5. Removing `lang="ts"` fixes the issue. When presented with the following Svelte code: ![img]([link]) Errors locations are accurate in the IDE (as shown above), but are off in both the terminal output, and the error page. ![img]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 Ubuntu 20.04.5 LTS (Focal Fossa) CPU: (24) x64 AMD Ryzen 9 5900X 12-Core Processor Memory: 7.95 GB / 31.30 GB…

### CASE-2314 · [svelte-native] broken custom components with 'src' attribute
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug This commit [link]]/commit/ecbd96af95eddf7d53d24fa78aeb5818f2cf71b9 broke [svelte-native]([link]). The reason is that we dont have `a` element. I think the handle of `src` attribute should not happen on `foreign` namespace. ### Reproduction create a simple `svelte-native` project with a listview and `image` component (which has a `src` attribute). It will crash as you scroll with that error: ``` System.err: Calling js method onBindViewHolder failed System.err: TypeError: No known component for element a. System.err: System.err: StackTrace: System.err: createElement(file:…

### CASE-2322 · Performance regressions (`5.36.0+` and `5.40.0+`)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍6 💬11 · open · labels: perf
- **Excerpt**: ### Describe the bug In async Svelte versions (`5.36.0+`) there have been some significant performance regressions (`~8x`) when rendering many LayerChart charts. While some subsequent versions have made progress to restore some performance, the more recent releases (`5.40.0+`) have gotten much worse (`~27x`). Below is rendering 20 `BarChart` instances on different Svelte versions: version | average | screenshot | REPL --- | --- | --- | --- `5.35.0` (baseline) | `~600ms` | <img width="3298" height="2086" alt="Image" src="[link] /> | [REPL]([link]) `5.39.0` | `~5300ms` | <img width="3298"…

### CASE-2323 · No more node content in 5.34.4
- **Principles**: P-A3, P-H1 · **Env**: svelte, vite, tailwind
- **Signals**: 👍2 💬11 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I've updated to 5.34.4 and suddenly all of my nodes are missing their content. Inspect Element just shows `<!--->`. Like, my app is _almost_ blank. Most elements are there but images and aren't. I can't see any console logs that seem related. Unfortunately I can't give a repro or paste the logs. This is my svelte.config.js: ```js export default { preprocess: vitePreprocess(), compilerOptions: { modernAst: true, // removing this line doesn't fix the issue }, }; ``` And vite.config.ts: ```js export default defineConfig(() => { return { plugins: [tailwindcss(), svelte()],…

### CASE-2326 · Svelte stripping classes
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I am using Astro + Svelte. If I use the client:load directive then my components classes are stripped during rendering. Instead of class="xyz" it renders to just "class". The only way I have found to fix this is to use the client:only directive but that adds unnecessary cls. I was unable to reproduce this issue even after taking the exact code I was using for my component with the exact packages and versions. There are screenshots explaining the issue that can be found here [link] ### Reproduction [link] ### Logs ```shell There is no error message or anything appearing in…

### CASE-2334 · Binding to store value properties causes addition change per binding
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬11 · closed
- **Excerpt**: **Describe the bug** When binding to a property of a store value, the value is updated / changed (subscribe called) for each bind statement, instead of just once for the initialization. **To Reproduce** REPL: [link] ![image]([link]) In the REPL, I would expect "pagination changed!" to be logged once when initialized, but it is being logged 3 times (2 additional times due to each `bind:`). After the initial 3, only a single subscribe is called when changing anything on the store, as expected. **Expected behavior** I would expect a single call to `subscribe` on initialization, instead of ```1 +…

### CASE-2336 · destroy function returned from onMount is not called if onMount is passed an async function
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Describe the bug** What I need is to use `async-await` in `onMount()`. _Or maybe you can suggest me what is wrong and what I can use alternatively._ **To Reproduce** 1. go here: [link] 1. open the console 1. click on the button 1. you should see messages: `"Mounting..."` and `"A lot of background work..."` 1. if you click again the destroy message is not written **WHY?** Did `onMount()` recognizes the promise? Should it? **Expected behavior** I need that `async` behavior because I need to wait for `function lazyLoading()` before rendering the `Child` component. **Is there an alternative way…

### CASE-2346 · Svelte 5 Typescript compiler type checking error TS2739
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte, typescript
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug This involves migration of a project to svelte 5. When Typescript compilation occurs after migration of components, the following type check error happens. Svelte 4 did not have this error and all the props were strictly verified. ![Image]([link]) ### Reproduction - Clone [link] - Run npm i - Run npx tsc --noEmit Another related issue for reference [link]][ref] ### Logs ```shell ``` ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (16) x64 AMD Ryzen 7 9800X3D 8-Core Processor Memory: 20.82 GB / 31.02 GB Binaries: Node: 22.13.1 - C:\Program…

### CASE-2348 · [Svelte 5] Invalid CSS generated from Tailwind class names including `[&` and `url(`
- **Principles**: P-A3, P-H1 · **Env**: svelte, tailwind, vite
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter/css
- **Excerpt**: ### Describe the bug `@user/vite@user` gives Vite error if `[&_div]:flex` class name and `url()` from a Tailwind plugin exists in app together. >Note: I first opened an issue about this on Tailwind repo, [link] but apparently the issue is from how Svelte 5 compiles the class names, not from Tailwind. ✅ Having a Tailwind plugin like this works as expected ```js export default ({ addComponents }) => { addComponents({ ".circlemask": { "mask-image": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='[link] fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e\")"…

### CASE-2354 · Svelte 5: Why is this object a Proxy only when the `page` field is 1?
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug _I'm opening this issue here because I think is a Svelte issue._ Steps to reproduce: 1. Open [the reproduction]([link]) 1. Open the browser console 1. When the project starts it will errors with: ``` Uncaught (in promise) DOMException: Failed to execute 'put' on 'IDBObjectStore': #<Object> could not be cloned. ``` ![image]([link]]/assets/41120635/042075ba-195a-4068-9ea3-c99d5e416532) This is happening because IndexedDB cannot serialize and persist a Proxy object which is `pagination` in this case. **But...** 1. If you click on "Next" button the pagination changes from…

### CASE-2356 · Add missing fetchpriority property to img on html element
- **Principles**: P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the problem Here the bug: ```html Object literal may only specify known properties, and 'fetchpriority' does not exist in type 'HTMLProps<"img", HTMLAttributes<any>>'. ``` ### Describe the proposed solution Just add the missing peace? 😆 ### Alternatives considered I actually don't have enough knowledge to think of an alternative solution 🥹. Hope anyone can help. ### Importance would make my life easier

### CASE-2363 · Inconsistent spacing between two copies of same code
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍3 💬10 · closed · labels: bug
- **Excerpt**: **Describe the bug** Spaces are added to the Svelte output causing the rendered text not to appear as expected (for example, looping over and outputting characters in a string). **To Reproduce** REPL: [link] ```js <script> let name = 'Hello world'; </script> {#each name as character} <span> {#if character == "l"} A {:else} B {/if} </span> {/each} {#each name as character} <span> {#if character == "l"} A {:else} B {/if} </span> {/each} ``` <img width="344" alt="Screen Shot 2021-03-22 at 11 22 35 PM" src="[link]> **Expected behavior** There should be no spaces in the output. - Your browser and…

### CASE-2382 · `bind:this` on `<img>` element doesn't trigger reactivity
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react, svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When using `bind:this` on an image element, there's no way to use Svelte's native reactivity for that element. Neither `$derived`, `$derived.by` or `$effect` does work. Only option is to use a workaround techniques, like using the `onload` event listener. ### Expected behavior Once the image loads, trigger Svelte reactivity. --- **_Edit:_** After playing some more with this, `bind:contentRect` also isn't reactive as it should be. When I start scaling an element (for example the said image), the bound state value of this element doesn't change. I again have to track the…

### CASE-2384 · 5.19.1 breaks untrack
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug Our app becomes broken after update to 5.19.1 perhaps due to [link]][ref] <img width="451" alt="Image" src="[link] /> ### Reproduction UPDATE: [REPL]([link]) Works fine for me if I switch to 5.19.0 ### Logs ```shell ``` ### System Info ```shell Svelte 5.19.1 ``` ### Severity annoyance

### CASE-2388 · SvelteKit build error with incorrect message, unable to use decorators
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte, bootstrap, typescript, vite
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug I bootstrapped an app with `sv create`, choosing the `minimal` setup with TypeScript. It is giving me an incorrect error message that tells me I'm doing what it says I should be doing: <img width="955" alt="Screenshot 2024-11-03 at 8 37 46 PM" src="[link]> ### Reproduction [link] (commit `f4cbe816ad3d0bb10449964ad0fa0e137cfcbf5e`) ```sh git clone [email]:trusktr/sveltekit-[ref].git cd sveltekit-[ref] git checkout f4cbe816ad3d0bb10449964ad0fa0e137cfcbf5e npm ci npm run build ``` ### Logs ```shell > vite build vite v5.4.10 building SSR bundle for production... ✓ 38 modules…

### CASE-2396 · Svelte 5 (alpha 62) nukes my SvelteKit app in DEV 💣
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Title says it all ... but here is a video * video starts with working case (alpha 61) and breaks with upgrade to alpha 62 (in dev ... works in prod) [link]]/assets/153018600/01245996-d6ef-472e-a537-c8d221411ac1 ### Reproduction See video attached ### Logs _No response_ ### System Info ```shell Svelte v5.0.0-next.62 (breaks) Svelte v5.0.0-next.61 (works) ``` ### Severity annoyance

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2305 · Uneasy bouncing in `transition:slide`
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬12 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug Check the REPL. This issues can be reproduced in Svelte4/5. <details><summary>source code</summary> ```svelte <script> import { slide } from 'svelte/transition'; let visible1 = true; let visible2 = true; let visible3 = true; </script> <label> <input type="checkbox" bind:checked={visible1} /> bounce on "in" </label> <label> <input type="checkbox" bind:checked={visible2} /> bounce on "out" </label> <label> <input type="checkbox" bind:checked={visible3} /> Normal and smooth </label> <div class="div1"> {#if visible1} <div transition:slide style="background-color: orangered;">…

### CASE-2306 · Svelte 5 watch derived change and run view-transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, svelte
- **Signals**: 👍2 💬12 · open
- **Excerpt**: ### Describe the bug I make this simple product filter on top there is slider to filter products by price. I want to run view-transition when derived is changed. I dont know how to do it or how to even watch for derived change. ### Reproduction [Code example]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz Memory: 2.29 GB / 15.94 GB Binaries: Node: 21.5.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.21 - C:\Program Files\nodejs\yarn.CMD npm: 10.2.4 - C:\Program Files\nodejs\npm.CMD pnpm: 8.15.4 -…

### CASE-2309 · getContext doesn't work inside derived
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug In Svelte 3/4 it is possible to create a derived state from a context, in Svelte 5 this is no longer possible because derived states are only computed when read Svelte 5 manages to get around this in non-runes mode by transforming computed states into assignments using $effect.pre on the client and normal assignments on the server But in runes mode there is no simple way to solve the problem, since $effect is not executed on the server ### Reproduction [repl]([link]) ### Logs _No response_ ### System Info ```shell Svelte v5.0.0-next.54 ``` ### Severity blocking an upgrade

### CASE-2312 · Transitions on 3.50.0 don't act the same as 3.49.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍16 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug On a simple "router" using different `Page` components wrapped with a `PageTransition` component, the transition with Svelte 3.50.0 does not seem to act the same as before. The leaving `Page` component goes out without a transition and then the new one comes with the transition. As it works with the same exact code on 3.49.0, I believe this is a bug, unless I missed something on the changelog. ### Reproduction Example with Svelte 3.49.0 with transition working as expected: [link] Same exact example with Svelte 3.50.0, but not acting as wanted this time: [link] ### Logs…

### CASE-2333 · {#key} doesn't destroy old components when a transition started
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍4 💬11 · closed
- **Excerpt**: **Describe the bug** A` {#key}` block should destroy the component of the previous key. This works most of the time, but when an intro is started the components is not destroyed or removed from the dom. **To reproduce:** Minimal example to reproduce the bug: ```html <!-- App.svelte --> <script> import Child from './Child.svelte' let index = 0 </script> {#key index} <Child on:click={() => {index++}} /> {/key} <!-- Child.svelte --> <script> import { fade } from 'svelte/transition' import { createEventDispatcher } from 'svelte' const dispatch = createEventDispatcher() let visible = false…

### CASE-2337 · Nested Transitions NOT Honored
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, svelte
- **Signals**: 👍3 💬11 · closed · labels: bug/temp-stale
- **Excerpt**: I believe I have discovered an issue where Nested Transitions are not operating correctly. **Component**: I have a simple TreeView component ([see code here]([link])). - Each node in the tree is powered through a recursion on itself (via the `<svelte:self>` element). - The expansion state of each node is retained _(through a simple ModuleScoped state)_, so collapsing a parent does not loose the expansion of it's children _(when the parent is re-expanded)_. - The expansion/contraction of each node is animated through the standard `slide` svelte transition **Issue**: The **issue** I am seeing…

### CASE-2339 · $destroy don't play outro transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍7 💬11 · closed · labels: feature request/temp-stale
- **Excerpt**: **Describe the bug** When call $destroy of a component instance, the dom node is removed imediatly without play outro transition. **Logs** nothing **To Reproduce** [link] **Expected behavior** Play outro transition before remove.

### CASE-2343 · Transition regression since v5.38.2
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, svelte
- **Signals**: 👍4 💬10 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug Starting in 5.38.2, exit transitions are no longer being applied under certain conditions while _enter_ transitions are working as expected. Reproduction below. ### Reproduction The following StackBlitz repro is pinned to 5.38.1, if you open and close the popover, you'll notice the enter and exit transitions are applied as expected. If you bump the Svelte version to 5.38.2, you'll notice the transition is only applied during entrance, but not exit. [link] ### Logs ```shell ``` ### System Info ```shell (StackBlitz env) System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R)…

### CASE-2344 · state changes in `onoutrostart` are not working
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug Title says it all, here is an example: ```svelte <!-- Parent --> <script> import Component from "./Component.svelte" let visible = $state(true) </script> <input type="checkbox" bind:checked={visible} /> {#if visible} <Component /> {/if} ``` ```svelte <!-- Child Component --> <script lang="ts"> import { fly } from "svelte/transition" let status = $state("idle") $inspect(status) </script> <p transition:fly={{ y: 20, duration: 300 }} onoutrostart={() => (status = 'outro')}>status: {status}</p> ``` ### What happens - `status` is updated by the `onoutrostart` listener -…

### CASE-2347 · Fade-in transition showing flash of visible content before fading in
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, svelte
- **Signals**: 👍0 💬10 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug In Svelte 5 (doesn't happen in Svelte 4) when you have an element that fades in with a Svelte transition there will be a flash of content before it disappears and then the fade-in happens as normal. Possibly related to [link]][ref] Am I doing something wrong, or is this an actual bug? It only started happening in my project after upgrading to Svelte 5. ### Reproduction REPL [link] Click Start (the flash should happen _almost_ always) ### Logs _No response_ ### System Info ```shell System: OS: macOS 15.1.1 CPU: (10) arm64 Apple M1 Max Memory: 58.11 MB / 32.00 GB Shell: 5.9…

### CASE-2360 · Transition within component prevents component unmount
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: svelte, react
- **Signals**: 👍0 💬10 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug It seems that a transition on an element within a component can prevent the component from destroying, if the element is transitioned in right before unmount. I noted some existing issues with similar symptoms but the conditions seemed quite different to me so I opted to open a new issue - hope that's okay. _BTW going through the Svelte tutorials blew my mind just as much as React did when I first learned it. It will be hard to go back to a React project now. Thank you for all your hard work!_ ❤️ ### Reproduction I've tried to demonstrate and describe the issue in detail…

### CASE-2372 · Remaining tutorial issues
- **Principles**: P-D1, P-D2, P-D3 · **Env**: edge, svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Post-[ref], a few tutorial-related items still outstanding: ## Blog posts * [ ] 'Svelte for new developers' assuming no knowledge beyond HTML, CSS and JS (i.e. CLI, Node and npm, degit, build tools) * [ ] How to set up an editor for syntax highlighting. ## Remaining chapters ### Stores * [x] custom stores * [x] `bind:value={$foo}` * [x] `$foo += 1` (if we implement it) * [ ] ~~Adapting Immer, Redux, Microstates, xstate etc~~ ### Transitions * [x] Local transitions ### Animations * [x] `animate:flip` ### use: directive * [ ] `use:foo={bar}` (struggling to think of a non-contrived use case)…

### CASE-2385 · `Spring` isn't deeply reactive (`target` cannot be mutated)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬9 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug I have something like this in my app: ```ts export class BrokenCounter { #spring = new Spring({ value: 0 }); get count() { return this.#spring.current.value } incr() { this.#spring.target.value++ } decr() { this.#spring.target.value-- } } ``` **Rather than re-assigning `target` to a new object, I directly mutate the `target` object.** Doing `target.value++` instead of `target = { value: target.value + 1 }` causes the `Spring` to "miss" the update. It surprised me because I assumed `target` would be proxied by the `Spring` (to make it deeply reactive), just like `$state`.…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2307 · reactive state seems broken
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: edge, react, svelte
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Describe the bug I have a calendar component that use a reactive variable $state to track month to display and updating its value used to work for transitioning component to next month and previous month but now it does not, it takes two clicks of button to modify and the second time it has changed the value two times too so the effect is skipping a month. ### Reproduction I'll make a reproduction when I get time, ... ### Logs _No response_ ### System Info ```shell svelte-motion edge ``` ### Severity blocking an upgrade

### CASE-2316 · Audio Element Bindings Working Unreliably in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, firefox 3, svelte
- **Signals**: 👍1 💬12 · open · labels: stale-bot
- **Excerpt**: **Describe the bug** When (1) Server-side rendering and (2) Browsing in firefox, Svelte fails to set bindings for values that are initialized to a value on page reload. For instance, with code like ``` <audio ... bind:duration={myDuration} /> ``` if `myDuration` is initialized to 0, then it will remain zero indefinitely. **Logs** N/A **To Reproduce** A repo reproducing this issue is here: [link] I used sapper to get SSR to work easily, but I suspect this is a svelte issue. To run follow the readme or: 1. npm i && npm run dev 2. Navigate to localhost:3000 in Firefox 3. Reload the page and…

### CASE-2317 · Default value not working in select
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, windows
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: The default select value is not applied to the select widget. ```js <script> var users = { 1: {name: "aaa"}, 2: {name: "bbb"}, 3: {name: "ccc"}, }; var user_id=2; </script> <select value={user_id}> {#each Object.entries(users) as [k, v]} <option value={k}>{v.name}</option> {/each} </select> ``` [link] I expect bbb to be selected. Chrome Version 83.0.4103.116 (Official Build) (64-bit) Windows 7 It's strange, not too severe. If I change the type of `user_id` to string it works, but why should I?

### CASE-2332 · Unexpected / uneccessary store.set calls when binding values from a store
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, electron
- **Signals**: 👍3 💬11 · closed · labels: conservative reactivity
- **Excerpt**: **Describe the bug** When you `bind:` values from a store inside `#each` it will call `set` for every iterated item for no reason. I'm using this pattern a lot where I have a store (that is backed by `sessionStorage`, synced via `BroadcastChannel` and persisted via `fetch()`). I love how I can pass values from inside a store around, then child components can update them and everything magically works across windows and is persisted between app restarts (Electron). But I've just ran into an edge case where I'm seeing a lot of completely unnecessary calls to `set`, causing pointless disk and…

### CASE-2352 · Svelte 5: Dynamically rendered string renders incorrectly on iOS WebKit if it contains a link
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, svelte, webkit, mobile, iphone
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: ### Describe the bug This one is really weird. Discovered in [link] This issue happens when you dynamically render a sting containing a link in Svelte 5. ```svelte <script> const str = "before Github.com after" </script> <p>{str}</p> ``` If you open this page on a browser on iOS that is _not Safari_, (eg Arc Mobile or an in-app browser) and reload the page it will render the following: ``` before Github.com afterGithub.com after ``` The link + the remaining string after it is duplicated. This only happens on Svelte 5 ### Reproduction Repo: [link] Run the site & open it on your iPhone using a…

### CASE-2355 · Black screen with Edge browser.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, firefox, chrome, svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug I don't understand why when I visit the examples page in the modal part, when I see tabs of different codes the screen goes black, but that doesn't happen to me with Firefox or Chrome. but sometimes work,but usually not working :( [link] ### Reproduction my test in this video ,public link [link] and [link] [link] When I click on modal.svelte or any other console tab: "JS or CSS output . The screen goes bla ### Logs _No response_ ### System Info ```shell Microsoft edge Versión 120.0.2210.121 (Compilación oficial) (64 bits) ``` ### Severity blocking all usage of examples…

### CASE-2361 · {#key} not working inside {#each}/{#if}
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, windows
- **Signals**: 👍3 💬10 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug {#key} and its body that work doesn't work inside {#each} block. I want to display the duration passed every second by calculation instead of assigning a value to an object in an array and triggering update with assignment. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.18363 CPU: (8) x64 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz Memory: 6.11 GB / 11.90 GB Binaries: Node: 14.16.0 - D:\Program Files\nodejs\node.EXE npm: 6.14.11 - D:\Program Files\nodejs\npm.CMD Browsers: Chrome: 91.0.4472.164 Edge: Spartan…

### CASE-2364 · Animate breaks when used along with fly transition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 52, firefox 48, chrome, svelte
- **Signals**: 👍1 💬10 · closed · labels: bug
- **Excerpt**: **Describe the bug** The `flip` animation and `fly` transition break when used together, not sure which one is causing the other to break however. **Logs** Console is clear **To Reproduce** REPL: [link] In the REPL, repeatedly click on `next` (fast) and this happens ![Screen Shot 2021-02-18 at 10 50 27 PM]([link]) **Expected behavior** With regards to the above screenshot, it's supposed to look something like this ![Screen Shot 2021-02-18 at 10 50 33 PM]([link]) **Information about your Svelte project:** - Your browser and the version: (e.x. Chrome 52.1, Firefox 48.0, IE 10): **Chrome…

### CASE-2366 · Can't replace top-level HTML element when hydrating
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, firefox, svelte
- **Signals**: 👍0 💬10 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** If you try to replace the `<html>` wrapper during hydration, it throws errors on line 179 of `svelte/internal/index.mjs` because it can't insertBefore the top-level document. I'm trying to use an entrypoint in this format: ```js new App({ target: document, hydrate: true }); ``` **Logs** - Chrome: `DOMException: Failed to execute 'insertBefore' on 'Node': Only one element on document allowed.` - Firefox: `DOMException: Node.insertBefore: Cannot have more than one Element child of a Document` **To Reproduce** Unfortunately I don't think I can use the [repl]([link]) to…

### CASE-2367 · transition:slide looks different (buggy) on Safari
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, chrome, firefox, windows, ipad
- **Signals**: 👍14 💬10 · open · labels: bug
- **Excerpt**: **Describe the bug** I am using transition:slide in order to slide in a div element after the user presses the button with the arrow pointing down. With Chrome and Firefox on Windows it looks perfect, however on Safari (iPadOS) the inner contents overlap with the button during the transition. Or to be more precise, the inner elements of #lookupAreaContent do not follow the behavior of #lookupAreaContent itself. **To Reproduce** Simplified version: ```html <div> {#if v_lookupArea} <div id="lookupAreaContent" transition:slide> <div> <a href="[link] target="_blank">test 1.</a> </div> <div> <a…

### CASE-2369 · draw transition creates visual artifact at the end of a path
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox 74, chrome 80, svelte
- **Signals**: 👍0 💬10 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** In some cases, the `draw` transition creates in some cases a small flickering point at the end of a path. The SVG I based this off of was exported from Affinity Designer (an Illustrator competitor), introducing a number of matrix transforms into the export. **To Reproduce** [link] **Information about your Svelte project:** - this appears in both Firefox 74 and Chrome 80 - this appears in Svelte 3.19.2 **Severity** I was experimenting w/ this approach for a work project. It's not a dealbreaker per se, but I might be disinclined to attempt this particular approach –…

### CASE-2370 · Infinite loop while binding an array to a child component
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, firefox, svelte
- **Signals**: 👍0 💬10 · closed · labels: feature request
- **Excerpt**: **Describe the bug** I have two components : ***Cpn.svelte*** ``` <script> export let items = []; </script> ``` and a consumer : ``` <script> import Cpn from './Cpn'; let items = [] </script> <Cpn {items} bind:items/> ``` this consumer has a "bug" : it injects {items} and creates a binding with items. However svelte doesn't output any warning, and the generated code has an infinite loop when the component is rendered. It "worked" in svelte 3.12 The bug is not really in svelte but in my code, however it's a "hard to debug" case, because chrome/firefox just crash every time the component is…

### CASE-2371 · bind:offsetHeight doesn't update in certain cases
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, safari, svelte
- **Signals**: 👍4 💬10 · closed · labels: bug/good first issue
- **Excerpt**: **Describe the bug** In Chrome, using `bind:offsetHeight` on a component that immediately changes size does not trigger a change in the `offsetHeight` variable: [link] This does not seem to happen in Firefox or Safari, but it does happen in Chrome. **To Reproduce** [link] **Expected behavior** `offsetHeight` should be something close to `800` (in the example above) **Notes** Is there a reason Svelte doesn't attempt to use a ResizeObserver for resize detection?

### CASE-2377 · todomvc is not working on old Android device
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: android, android 4
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: [link] is not working on my Android 4.0.3 and is shown as follows: ![image]([link]) I don't know which information should I deliver to help debugging.

### CASE-2390 · Modal Dialog Backdrop lost on re-render
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 17, chrome, svelte
- **Signals**: 👍1 💬9 · open
- **Excerpt**: ### Describe the bug When using "#each" block and then re-order the items of the array, if we have a "dialog" element open as modal inside a row, and if the items goes to a lower index, the "::backdrop" psudo element get lost. Notice that "::backdrop" psudo element is not get lost if the new index is higher. I tried it with Svelte 5 and I noticed that it happens the other way round. (the index lower and higher) ### Reproduction I made a Repl to demonstrate the issue: Issue on Svelte 4 and 3: [link] Issue On Svlelte 5: [link] ### Logs _No response_ ### System Info ```shell Safari 17.1 / Chrome…

### CASE-2393 · Svelte 5 (5.0.0-next.167): Upgrading to the latest Svelte 5 breaks SvelteKit routing
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, svelte
- **Signals**: 👍18 💬9 · closed
- **Excerpt**: ### Describe the bug Page content is not rendered when going to the next page [link]]/assets/625005/d31d9059-9aab-47c9-8f75-fa94ff4f95d0 ### Reproduction * [Svelte 5.0.0-next.167]([link]) 🔴 * [Svelte 5.0.0-next.166]([link]) 🟢 ### Logs _No response_ ### System Info ```shell Binaries: Node: 20.10.0 - /usr/local/bin/node npm: 10.2.3 - /usr/local/bin/npm Browsers: Chrome: 126.0.6478.127 Chrome Canary: 128.0.6566.0 Firefox Nightly: 124.0a1 Safari: 17.5 npmPackages: svelte: 5.0.0-next.167 => 5.0.0-next.167 ``` ### Severity blocking an upgrade

### CASE-2394 · Svelte 5: Components in #if blocks don't trigger their $effect rune
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, svelte
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I encapsulated a component by an #if block and the component is not rendered, because of a "false" condition. The $effect rune is not triggered even when the data changed. Is this a wanted behavior? Is there a workaround for this? ### Reproduction If needed, I can create a reproduction but should be straightforward. ### Logs _No response_ ### System Info ```shell Arch, Firefox (or any other browser) ``` ### Severity blocking an upgrade

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2310 · Svelte 5: Every property inside a derived object will elicit a reaction even if the property that was changed wasn't them
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: ### Describe the bug There is a problem with the Svelte 5 runes equality check when deriving new objects from other $state variables or objects. If a new $derived object uses another $state's values inside of it, then changing one property from the main $state variable or object they were derived from causes all the other properties to elicit a reaction. What I mean is that for example any function using any of the properties from the derived object will be called again if one of the properties from the object they were derived from changes even though that property wasn't what they were…

### CASE-2315 · Binding in slotted compoment triggers reactive statements twice
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: **Describe the bug** When a variable is bound to a slotted component, changing that variable within the slotted component causes any reactive statements inside the slotted component to trigger twice. **To Reproduce** [link] **Expected behavior** Pressing the "Update x" button should cause only one `console.log` call, which is what happens when the `<Wrapper>` is removed. **Severity** Low — can work around this by using a [store]([link]) instead of binding.

### CASE-2321 · Stats TODOs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬12 · closed · labels: bug/feature request/awaiting submitter
- **Excerpt**: There are several things we would like to have exposed in `stats`. The idea is to keep this list updated as new things arise. - [ ] All the `export`ed stuff on the component - and whether each is a module or an instance export - and whether each is a `let` or a `const`/`function` - [ ] What variables have been implicitly declared by the framework (`$store` stuff, maybe other stuff as well later), and whether each one should be writable in user code. (Maybe we don't need to say whether each is writable, if we will have it be a compiler error from Svelte itself to try and write to them?) - [ ]…

### CASE-2325 · TS doesn't understand `mount()` return type
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, webpack
- **Signals**: 👍0 💬11 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug If I assign the result of `mount(Foo)` to a variable typed `Foo`, TS gets confused and emits: >TS2322: Type '{ $on?(type: string, callback: (e: any) => void): () => void; $set?(props: Partial<Record<string, any>>): void; } & Record<string, any>' is not assignable to type 'Comp | undefined'. Nevertheless, `svelte-check` finds no errors and my editor understands the return type of `mount(Foo)` is `Foo`. It is only TS compilation via webpack that is problematic. ### Reproduction ```ts new class { private foo?: Foo; constructor() { this.foo = mount(Foo, {target:…

### CASE-2328 · Unexpected behaviour with `$state.frozen()` and `$bindable()`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug When binding a variable declared with `$state.frozen` to a child component, reassigning the prop in the child component throws an error. The child component wraps it in a Proxy object, which is incompatible with `$state.frozen`. ``` Error: state_frozen_invalid_argument The argument to `$state.frozen(...)` cannot be an object created with `$state(...)`. You should create a copy of it first, for example with `$state.snapshot` ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Svelte 5.0.0-next.216 ``` ### Severity annoyance

### CASE-2338 · Does not update binded number input field with trailing zeros
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: **Describe the bug** If you bind a value to an input a number input field that has a trailing zero on it. Then update the value, the value in the number input field will not change. **Logs** No bug logs. **To Reproduce** [link] 1. Create a number input field and bind and bind a variable to it. 2. Create a button with an on click event that will change the number variable. 3. Type in the input box 14.10 4. Click the button. 5. The variable changes but the number input box does not. ![Bug-Does-Not-Update-Number-Inputs-with-Trailing-Zeros-•-REPL-•-Svelte]([link]) **Expected behavior** That the…

### CASE-2340 · Slot renders 'undefined' when passed an undefined variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Describe the bug** Passing an undefined variable to a component that uses `<slot/>` renders `undefined` **To Reproduce** [link] **Expected behavior** Nothing is render in the slot. This matches the behaviour of passing nothing like `<Component></Component>` **Severity** Not critical but it forces you user of the component to ensure the property passed is initialised rather than the component internally controlling this.

### CASE-2345 · Inconsistent ownership warning
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: ### Discussed in [link]]/discussions/15481 <div type='discussions-op-text'> <sup>Originally posted by **midzelis** March 9, 2025</sup> Is this a bug or inconsistent behavior? [link] When passing a class with `$state` to a component with bindable, if the component binds to a nested property, an ownership failure is logged. However, if the component directly binds to a $state variable then no ownership failure is logged. Playground link shows bug by default. Open console under result in playground to see console logs. In playground, the rendering/output still worked - however, in my complex…

### CASE-2350 · Svelte 5: Typescript error on custom radio due to bind:group not being bindable
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬10 · open
- **Excerpt**: ### Describe the bug When writing a custom radio input component that passes ...rest to the rendered input element, callers get a typescript error for bind:group not being bindable. This makes it impossible to create a custom radio component without re-implementing all of group behavior. HTMLInputAttributes in svelte/elements lists 'bind:group'. Attempted workaround [ref]: Added group as a local $props() variable in CustomRadio, and binding to the input element, but group is not a property on HTMLInputAttributes. Attempted workaround [ref]: Added "bind:group": group as a local $props()…

### CASE-2357 · A11y: noninteractive element cannot have positive tabIndex value when using tabindex="0"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux
- **Signals**: 👍9 💬10 · open · labels: awaiting submitter/a11y
- **Excerpt**: ### Describe the bug I don't really know where to post this bug but I keep getting the same warning when using tabindex="0": ![20221015_104155]([link]) ![20221015_104249]([link]) If you know where I should report this bug, let me know! ### Reproduction Add a tabindex="0" to any div element and see for yourself :) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.0 Arch Linux CPU: (8) x64 Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz Memory: 29.44 GB / 31.31 GB Container: Yes Shell: 5.1.16 - /bin/bash Binaries: Node: 18.11.0 - /usr/bin/node Yarn: 1.22.19 - /usr/bin/yarn npm:…

### CASE-2362 · First option in select dropdown appears selected when no option matches the bound value
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Describe the bug** When a select dropdown value is bound to a component variable, and this variable doesn't match any of the options in the dropdown, Svelte shows the first option as selected rather than blank. This causes bugs/unexpected behavior when the form is submitted (the submitted value doesn't match what the user sees). **To Reproduce** [link] **Expected behavior** No option should be selected when none of the options match the bound value. Uncomment the two `setTimeout` calls in the above REPL to see the expected behavior. **Information about your Svelte project:** - Browser:…

### CASE-2373 · Cannot set property 'subscribable' of undefined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: This happens when referencing a non existent store. The error does not contain any sign of where it is thrown which means it takes a lot of time to fix. One workaround is to open compiler.js:22884 and add `if (!variable) console.log('subscribable', name, this.file)`. Error is thrown here: [link]]/blob/716e0df910fd7ca7eae9ae4f50691e962d6eee7d/src/compile/Component.ts#L193 Stack trace <details> <summary>Cannot set property 'subscribable' of undefined</summary> at Component.add_reference (/Users/thomas/projects/ga/node_modules/svelte/compiler.js:22884:40) at Object.enter…

### CASE-2378 · bind:value on plain <input> with $state stops updating template (regression in 5.53.7+)
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug `$state` reactivity is completely broken when used with `bind:value` on a plain `<input>`. The bound variable updates in JavaScript (verified via `console.log`), but the template never re-renders. **Works in:** 5.53.6 **Broken in:** 5.53.7+ (likely [ref] "simplify scheduling logic" or [ref]) We verified this in CI: pinning `[email]` makes our E2E tests pass. Bumping to `5.53.10` breaks them. Same code, same CI environment, only difference is the Svelte version. ### Reproduction The simplest possible Svelte 5 code fails: ```svelte <script lang="ts"> let value = $state('');…

### CASE-2381 · Updating from 5.36.10 to 5.36.12 causes everything to become laggy.
- **Principles**: P-E1, P-E2, P-E4, P-H2, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: perf
- **Excerpt**: ### Describe the bug After updating past [[email]]([link]]/releases/tag/svelte%405.36.10) interaction with the page, such as opening or closing a Drawer or dragging it around, which rely on updating a CSS variable and onpointermove event become laggy and the console logs setTimeout or blur violation where their handlers took too long to run and when checking the chunk location they point to a dequeue function. It's worth noting that my experimental flag for the new async stuff is false, and I'm not using it. ### Reproduction Unfortunately, I'm unable to reproduce it in a meaningful way since…

### CASE-2387 · how can I send getter setter to bind from a variable?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug This is allowed and good: [link] need a way to use the similar thing to the following variable on bind: ``` const checked = { get: () => { return flag == 'YES'; }, set: (isChecked) => { flag = isChecked ? 'YES' : 'NO' } }; ``` ### Reproduction [svelte playground]([link]) ### Logs _No response_ ### System Info ```shell svelte dev tutorial ``` ### Severity annoyance

### CASE-2389 · Uncaught Svelte error state_unsafe_mutation with a $state boolean variable
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍9 💬9 · closed · labels: bug
- **Excerpt**: ### Describe the bug Hi, I have a problem using a variable `let show = $state<boolean>(false);` in an input property where I want to change a customElement component to show in order to display it. Now I have created a test environment where I rebuilt the same structure as in my real project but simplified it for this issue. I develop customElements for a lib which I use in my project. Currently I try to refactor all my components from svelte 3 or 4 into the new svelte 5 world. :) ### Reproduction Example Repo where the error occurs: [link] The error occurs in this file on line 16:…

### CASE-2395 · Svelte version @user.0.0-next.140 breaks Svelte-dnd-action
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: ### Describe the bug Svelte version @user.0.0-next.140 breaks svelte-dnd-action ([github repo](isaacHagoel/svelte-dnd-action), [npm]([link])) Downgrading to version @user.0.0-next-139 make it work again ### Reproduction [link] The code is based on svelte-dnd-action's [basic example]([link]) with the following changes: - the `items` variable is declared with `$state` to make it reactive like how it would in Svelte 4. - `on:*` directives changed to `on*` properties ### Logs ```shell chunk-SPBQG5KN.js?v=9ad32f8b:813 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading…

### CASE-2399 · Input resets when page fully loads
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬9 · closed · labels: bug
- **Excerpt**: ### Describe the bug If you load a page which contains an `input` element with value binded to a variable, the `input` will reset all the user edits when page load finishes. ``` # Timeline - Page starts loading - `input` becomes visible on screen - user edits the `input` to some value - Page finishes loading. Edits are gone. ``` I'm not sure if this falls exactly into svelte-kit and will this be considered a bug or not. But it sure is little annoying sometimes. ### Reproduction Repo: [link] Video: [link] Snippet: ```svelte <script lang="ts"> let a = "234" </script> <input bind:value={a}> ```…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2318 · Crossfade page transitions not clearing prior page
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, mobile
- **Signals**: 👍0 💬12 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** The prior page during crossfade transition is not cleared ~~when service workers/caching is enabled if you interact between pages during the crossfade animation transition period.~~ This creates overlapping pages - attached screenshot below. It is possible to create multiple overlapping pages that have not been correctly cleared. ~~If service workers/cache is disabled then I am unable to replicate the issue and the transitions work fine from my mobile.~~ Using Chrome Version 79.0.3945.130 Following the page transition guide by @user [link] **Logs** n/a no error logs **To…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2319 · Wrong {#if} {:else} with context_overflow (this.context.length > 31)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome 52, firefox 48, chrome, opera, ubuntu, linux, windows, svelte
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: **Describe the bug** `if` directive doesn't work as expected if context_overflow (this.context.length > 31) **To Reproduce** [link] **Expected behavior** You should see `true` two times **Information about your Svelte project:** - Your browser and the version: (e.x. Chrome 52.1, Firefox 48.0, IE 10) FF, Chrome - Your operating system: (e.x. OS X 10, Ubuntu Linux 19.10, Windows XP, etc) Mac - Svelte version (Please check you can reproduce the issue with the latest release!) 3.17.0 - Whether your project uses Webpack or Rollup both reproduce bug **Severity** blocking an upgrade to Svelte with…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2320 · Timezone mismatch between SSR and client rendering
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍11 💬12 · closed · labels: site
- **Excerpt**: **Describe the bug** On [link] the server renders UTC timestamps, but the client renders local timestamps **To Reproduce** [link] **Expected behavior** No visible flickering as the times update **Severity** Low. I'm curious if there's a general solution to this (do HTTP requests include information about the user's timezone?)

### CASE-2329 · Svelte 5: ERR_SVELTE_HYDRATION_MISMATCH using bun
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug ```bash (index):27 ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match what was rendered on the server. Error: this={...} of <svelte:component> should specify a Svelte component.``` when running `bun dev` using `npm run dev` no hydration errors ### Reproduction [link] ### Logs ```shell (index):27 ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match what was rendered on the server. Error: this={...} of <svelte:component> should specify a Svelte component. at Module.validate_dynamic_component…

### CASE-2331 · Buggy @user tag on page load/refresh
- **Principles**: P-F4 · **Env**: linux
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: ### Describe the bug The @user tag is buggy on initial page load/refresh. For example, in the reproduction repo ([link]), we have `const a = 1, b = 2, c = 3` and `{a} {@user b} {c}`. The SSR rendered page correctly shows `123` but upon page load and hydration it becomes `13` instead. On HMR it then works as intended, and certain combination of text around those tags could lead it to work as well, but other times it doesn't. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.11 Pop!_OS 20.04 LTS CPU: (4) x64 Intel(R) Core(TM) i5-6500 CPU @ 3.20GHz…

### CASE-2351 · Svelte 4 and 5 adds spaces between html elements when mounting components through JavaScript
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬10 · open
- **Excerpt**: ### Describe the bug I was initially working in Svelte 4, trying to mount components via JS like so: ```svelte new MyComponent({ target: container, hydrate: false }); ``` But when I started looking at `container`'s innerHTML after mounting the component, I would see spaces being added in between the elements of the component, even though there shouldn't have been any (or I at least think so). For example, I would have the following component: ```svelte <script> const data = { content: 'hello', lang: 'js' }; </script> <div>{data.lang}</div> <div>{@user data.content}</div> ``` and the innerHTML…

### CASE-2379 · Could not resolve "node:crypto" when bundling for ssr without nodejs platform
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug I'm trying to build a svelte bundle (with esbuild) for server side rendering which runs on a runtime that is not nodejs and thus has no implementation for `node:crypto`. I'm getting an error saying `Could not resolve "node:crypto"`. This issue seems to have appeared with version `5.46.0`. It seems to be related to this [link]]/blob/0c7f815143c878d4c2819e45e5f2992da1209f63/packages/svelte/src/internal/server/crypto.js#L14-L16 ### Reproduction Full reproduction here [link] ### Logs ```shell make build npx vite build --logLevel=info --outDir=dist/server --emptyOutDir=true…

### CASE-2380 · `hydration_mismatch` when `pending` snippet is passed as prop to `<svelte:boundary>`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the bug `hydration_mismatch` error shows up when passing the `pending` snippet as a prop to `<svelte:boundary>` instead of as a child. I.e. this works ```svelte <svelte:boundary> {@user _ = await new Promise((r) => setTimeout(r, 2000))} <p>Content has now loaded</p> {#snippet pending()} loading... {/snippet} </svelte:boundary> ``` While this _does not_ ```svelte {#snippet pending()} loading... {/snippet} <svelte:boundary {pending}> {@user _ = await new Promise((r) => setTimeout(r, 2000))} <p>Content has now loaded</p> </svelte:boundary> ``` Furthermore. The latter briefly shows…

### CASE-2386 · Typing $props makes Vite crash
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍5 💬9 · closed
- **Excerpt**: ### Describe the bug I have yet to pinpoint the exact version that causes this bug, but it's present in the latest version, when creating a new app with `npx sv create`. Any kind of types declared for $props makes Vite crash. ### Reproduction Works: ``` <script lang="ts"> import '../app.css'; let { children } = $props(); </script> {@user children()} ``` Doesn't work: ``` <script lang="ts"> import type { Snippet } from 'svelte'; import '../app.css'; let { children }: { children: Snippet } = $props(); </script> {@user children()} ``` ### Logs ```shell 2:06:00 p.m. [vite] (ssr) Error when…

### CASE-2391 · Hydration regression between 224 and 225
- **Principles**: P-F4 · **Env**: opera, svelte, react
- **Signals**: 👍0 💬9 · closed · labels: bug/awaiting submitter
- **Excerpt**: ### Describe the bug Hey! I found a regression between two Svelte 5 previews. The following code produces an SSR hydration error in Svelte 5-225: ```svelte <!-- Card.svelte --> <script lang="ts"> import type { Snippet } from "svelte"; const { header, children }: { header?: Snippet; children: Snippet } = $props(); </script> <div class="card"> {@user header?.()} <div class="body"> {@user children()} </div> </div> ``` Stacktrace ``` Uncaught (in promise) DOMException: Node.appendChild: Cannot add children to a Text child operations.js:101 Card Card.svelte:34 effect2 hmr.js:47 update_reaction…

### CASE-2398 · SSR hydration bug with @user and localStorage
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Describe the bug I have a custom Table.svelte component that renders a table given an array of column definitions and an array of row data objects. This Table component supports sorting by clicking on the headers of the column and it saves that sort preference in localStorage. When this component hydrates on the client you will see the table update to sort properly based on the last saved settings in localStorage. This is expected and works fine unless: If any of the cells render using {@user cellValue}, the client-side sort will not update that column on initial render. This will leave…

### CASE-2400 · {@user} tag is broken during hydration
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍7 💬9 · closed
- **Excerpt**: ### Describe the bug There is some weird behaviour with the {@user} tag when: - `ssr` is `true` - the value used in the {@user} tag is updated during component initialization in the browser - the {@user} tag has text or element siblings I have created a minimal repro (see below). Here's code that causes the weird behaviour: ```svelte <script> import { browser } from "$app/environment"; let greeting = "You should not see me after hydration..."; /** * Using the onMount approach will fix the issue, * so it seems like there is something wrong * in the component initialization */ // import {…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2341 · [5.55.3] `derived_inert` warnings
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍4 💬10 · closed
- **Excerpt**: ### Describe the bug I got a bunch of this warning when updated Svelte to 5.55.3. This is caused by some weird interactions between a couple of `shadcn-svelte`, `bits-ui`, `svelte-sonner` components and `page.url`. Created a reproduction as requested by @user. ### Reproduction [link] ### Logs ```shell [svelte] derived_inert Reading a derived belonging to a now-destroyed effect may result in stale values ``` ### System Info ```shell [email] [email] ``` ### Severity annoyance

### CASE-2365 · WIP 5944 Fix race condition: is Svelte generated code for on:load listener in wrong order?
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬10 · closed · labels: stale-bot/temp-stale
- **Excerpt**: there are many reasons to load an external js script (like stripe, mapbox, gpt tag, ... scripts), rather than bundle it with one's own code, [link] something like this indeed works in Svelte REPL but seems doing nothing in Sapper, I copied this sample code [link] to an exactly same page in Sapper, the `on:load={initializeRemarkable}` is not called <script src="[link] on:load={initializeRemarkable}></script>

### CASE-2376 · Event delegation (e.g. for click listeners)
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: perf
- **Excerpt**: I brought up in the Gitter today that it might be nice to have built-in support for [event delegation]([link]). For instance, if I have a list of 1000 buttons, I don't necessarily want to add 1000 click listeners to each one – I can just add one to the parent and let the event bubble up. Presumably this has a perf benefit. But of course... all perf benefits should be investigated and measured. So I whipped up [a quick benchmark to test this out]([link]). This benchmark creates a list of _n_ buttons and then measures the time to add the necessary event listeners, with and without delegation.…

### CASE-2383 · `stopPropagation` on parent breaks all event listeners of same type for children
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug Using `stopPropagation` on a parent element to create a boundary for event bubbling causes all of the event handlers for that event type (when attached directly with the `onevent` attribute) on children of that element to stop working. This behavior only exists when using the Svelte 5 syntax for attaching events to elements (e.g. using `on:event` works, but `onevent` does not). ### Reproduction ```svelte <script> function onClick() { console.log('CLICKED') } function stopPropagation(el, type) { el.addEventListener(type, event => event.stopPropagation()) } </script> <div>…

### CASE-2392 · components still not unmounted
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug Same as [link]][ref] [link]][ref] [link]][ref] ### Reproduction [link] please go to the sysadmin subfolder This happens when a +layout.server.ts is present. Delete it, and it works ### Logs _No response_ ### System Info ```shell next.169 ``` ### Severity blocking all usage of svelte

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2374 · Data or Store references are not updated correctly inside directive
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Consider the following example: ``` <ul> {#each plans as plan, idx} <li on:click="changePlan(idx)" class:selected="planIdx == idx">{plan.title}</li> {/each} </ul> <script> export default { data() { return { planIdx: 0, plans: [{ title: "Plan 1" }, { title: "Plan 2" }] }; }, methods: { changePlan(idx) { console.log("changing plan to", idx); this.set({planIdx: idx}); } } } </script> <style> .selected { font-weight: bold; } </style> ``` After clicking on `Plan2`, it should be highlighted, but it is not. Tested with `2.13.15` and `2.14.2`. The above example uses `data` but the same bug is found…

