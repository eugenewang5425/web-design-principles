# Case Chunk 015 — Round 15

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2401 · Variable is not reactive in several nested slots
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍12 💬9 · closed
- **Excerpt**: ### Describe the bug For several nested components with slots, the variable stops being reactive. ### Reproduction [link] When you click on the first checkbox, the number `3` does not change to `2` everywhere. The correct functionality is probably dependent on the number of nested slots. ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity annoyance

### CASE-2410 · Broken reactivity when dealing with bindings and exported objects
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** If I have: - a reactive statement that reads an exported object (which ISN'T changing/being reassigned) - a write-only variable inside that statement which is also bound to any property of an HTMLElement Then the reactive statement gets triggered whenever the write-only variable changes because of the bind, even though no other variable that is read by the statement has changed. The same does NOT occur when the variable read by the reactive statement is not exported or is exported but is not an object (for example, a boolean). **To Reproduce** REPL: [link] **Expected…

### CASE-2412 · Volume won't tween
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: bug/temp-stale
- **Excerpt**: Volume won't tween without indirect bindings on `volume` attribute of `<audio/>` element Example that doesn't work: [link] Note how `$volume` is bound with `bind:volume={$volume}` If you do indirect variable assignment, it starts to work: [link] Note the reactive assignment `$: indirect_volume = $volume`. * This also true for the `<video>` tag.

### CASE-2414 · autofocus HTML attribute not working with curly braces JavaScript expression
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: bug/feature request/compiler/temp-stale
- **Excerpt**: **Describe the bug** The `autofocus` HTML attribute is not working with curly braces JavaScript expression **Logs** Please include browser console and server logs around the time this bug occurred. **To Reproduce** Check [this repl ]([link]) and this other [repl]([link]) with a simpler example. Steps to reproduce: Create the following svelte component ``` <script> let autofocus = true </script> input to focus: <input {autofocus}/> ``` **Expected behavior** The autofocus attribute to work as expected **Severity** annoying, there are workarounds to deal with autofoccus programmatically

### CASE-2431 · $props are nor reactive if not declared with $state by caller component (Svelte 5)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: ### Describe the bug When a prop is declared, it is not reactive if the caller component hasn't declared it with $state inside the component the props should be reactive regardless how they are being declared outside of the component this would be consistent with the way props currently work in svelte 4 Rationale: the caller might omit the prop, or pass a value (instead of a variable) or might just not care about the changes the component can make. besides, the component would behave differently (the prop would be reactive or not) depending on how the caller declared the value. I think it…

### CASE-2433 · Svelte v4 components under Svelte v5: Internals leaked through slot variables when defined in component
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug I the library I'm working on, I have a not-so-simple arrangement of components that together form a menu toolbar. The base component provides a named slot with a variable named `setCurrentNode` that, when run (because it is a function), performs the menu navigation. The function really teakes two parameters, but the second parameter is pre-filled by the base component, so the slot looks like this: ```html ... <slot name="node" setCurrentNode={(n) => setCurrentNode(n, parent)}> ... </slot> ... ``` This works as expected in Svelte v4. In Svelte v5-next.166, however, the…

### CASE-2435 · Svelte 5: svelte-ignore not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug It seems like `svelte-ignore` comments are not working since I upgraded to Svelte 5 - `svelte-check` and my IDE are spewing out errors/warnings where there were none before. This may seem like something small but currently it's blocking my CI and I'm not sure how to fix it, this is why it put this severity. ### Reproduction ```html <!-- svelte-ignore a11y-no-static-element-interactions --> <div on:mousedown={...}></div> ``` ### Logs ```shell Warn: `<div>` with a mousedown or mouseup handler must have an ARIA role (svelte) [...] ``` ### System Info ```shell System: OS:…

### CASE-2436 · Svelte 5: Building an app fail when creating stores using `let name = $derived()`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Using `let name = $derived()` on a custom store `store.svelte.ts` file. Will break the build process getting a practically useless message to correct the problem. `RollupError: The left-hand side of an assignment expression must be a variable or a property access` Read reproduction... ### Reproduction Let's create a rune store to easily get the supabase client in any app component: ```ts import { getContext, hasContext, setContext } from 'svelte'; import type { SupabaseClient } from '@user/supabase-js'; import type { Database } from '../types/database.types'; export…

### CASE-2439 · Let the community create custom runes that offer similar ergonomics as Svelte 5's native runes
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vue, react
- **Signals**: 👍18 💬8 · open
- **Excerpt**: ### Describe the problem Both Solid and Vue are known for also using (their own version of) signals as their reactive primitives. Now of course, their signals aren't as ergonomic as Svelte 5's signals, because in Vue one has to access a ref's underlying value with `.value`, and Solid requires one to use function calls. As opposed to Svelte 5, which offers the possibility to simply treat the variables as if they were simply the raw values that one put into `$state()`. However, the fact that both Vue and Solid give the developer direct access to the signals they create, allows those developers…

### CASE-2440 · Uninitialized Variable (converting svelte store to svelte rune)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug ```javascript import { page } from '$app/stores' const pageInfo = $state({ url: { searchParams: [], pathname: '', } }) // setTimeout(() => { page.subscribe(({ url }) => { console.log('<<<', url) pageInfo.url = url }) // }) const data = $derived.by(() => { // does not derive the change. const url = pageInfo.url const query = Object.fromEntries(url?.searchParams || []) return { url, query } }) export default data ``` Error: `Unhandled Promise Rejection: ReferenceError: Cannot access uninitialized variable.` However everything works when `setTimeout` is uncommented (except…

### CASE-2453 · Discrepancy of `<select value>` from `<option selected>`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · open
- **Excerpt**: ### Describe the bug But there is still a problem with changing the value of `<select value={value}>`. 1. If you give focus to `<select>`, and then change the value of `value` using a keyboard shortcut, the highlight changes. But the `<option selected>` does not change. 2. Then when you press the up-down, left-right arrows afterwards, it jumps to the wrong `<option>` as needed. 3. t's like just the `<option selected>` attribute is more important to the up-down, left-right arrows. I'm thinking, isn't this a broader issue of just combining `<select value={value}>` with `<option selected>`? ###…

### CASE-2454 · Fix rvalue error when using arrow functions in {@user}
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When creating a markup variable with {@user}, whose value uses an arrow function in some way (for example, finding an item in an array), Svelte will fail with the error: `Assigning to rvalue (Note that you need plugins to import files that are not JavaScript)` This does not happen in version 3.46.2, but does happen in version 3.46.3. Can be verified by modifying the version string in the reproduction url. There was recently an arrow function related error reported in [ref] - it seems related. ### Reproduction [link] ### Logs ```shell Assigning to rvalue (Note that you…

### CASE-2467 · Elizabot example throws with certain inputs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: bug/site
- **Excerpt**: **Describe the bug** The Elizabot tutorial and example do not work. **Logs** `ReferenceError: assignment to undeclared variable ki` **To Reproduce** Use [link] or [link] and enter the string `I am` and observe that it does not respond. **Expected behavior** Free therapy. **Severity** Oh no my free therapy. **Additional context** This definitely used to work. The `elizabot` dependency has not seen an update in years. I'm not sure what about the bundling process would have caused this. In [the file loaded from unpkg]([link]), `ki` is indeed used without being declared, and I'm not really sure…

### CASE-2478 · Template syntax for each breaks with reserved words as single-item variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

### CASE-2482 · SvelteMap.clear() skips its reactive signal when the map's size is already 0
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: svelte, react
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug SvelteMap.clear() skips its reactive signal when the map's size is already 0. This means any $derived or $effect that depends on the map will not re-run, leaving reactive state stale. This becomes a silent data bug when combined with a non-$state variable that changes in the same batch - there is no other signal to compensate, so the derived is never invalidated. Expected: map.clear() always emits a reactive signal, regardless of current size — consistent with how $state assignments emit signals even when the new value equals the old one. Actual: When map.size === 0,…

### CASE-2484 · state variables not tracked properly in async scope
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: ### Describe the bug Im not sure if this is an intended behaviour or a bug but here's the reproduction: [link] From my understanding (please correct me if im wrong) The `$derived.by` tracking scope is only active while the function is **synchronously** on the call stack. 1. **Start:** `$derived.by` runs the arrow function. 2. **Await:** The function hits `await wait(100)` and **returns a Promise**. 3. **Exit:** The function pops off the stack. **Tracking scope closes.** 4. **Resume:** 100ms later, the function resumes. It reads `count`, but Svelte is no longer watching. But intuitively, i…

### CASE-2489 · Array reactivity is not working correctly
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug An array variable is not reactive when using the variable directly. But the weird thing is, it does work with `$inspect`, but not with `$effect`. ### Reproduction [Playground demo]([link]) ### System Info ```shell Svelte 5.39.5, but every version in 5.x.x has this issue. ``` ### Severity annoyance

### CASE-2492 · Bug: Attachment callback is running before the pending UI update. They should run after any pending UI updates, just like how standalone $effects behave.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · open
- **Excerpt**: ### Describe the bug: Attachment callback is running before the pending UI updates which is an unexpected behaviour / bug. They should run after any pending UI updates, just like how standalone $effects behave. [link] How to reproduce? 1. Play the TicTacToe game in the provided playground link WITH KEYBOARD ONLY until the game is finished (either winning or draw). Manage focus and navigate the focus on the cells using the Tab key and press the Enter key to make a move. 2. After the game is over, navigate to the "Reset History" button by shifting the focus using the Tab key. 3. Press Enter on…

### CASE-2496 · CSS variables should be scoped
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: css
- **Excerpt**: ### Describe the bug When using CSS variables, they are not scoped correctly. Their names should have the component's CSS hash appended to it to avoid scoping issues. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2402 · Is this a bug or is this a feature of Svelte reactivity statements?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte, react
- **Signals**: 👍2 💬9 · closed · labels: conservative reactivity
- **Excerpt**: ### Describe the bug App.svelte: ```js <script> import Child from './Child.svelte'; let data = {}; let dataNew = {}; </script> <Child bind:data bind:dataNew /> ``` Child.svelte: ```js <script> export let data; export let dataNew; $: if (data) { console.log('--- WTF? ---'); } $: if (data) { console.log('--- WTF Trigger ---'); dataNew = {}; } </script> <button on:click={()=>{console.log('Clicked');dataNew=dataNew}}> Click me </button> ``` Output on button click: ``` "Clicked" "--- WTF? ---" "--- WTF Trigger ---" ``` [Related StackOverflow]([link]) It seems that this only happens when passing…

### CASE-2407 · bind:clientWidth doesn't update for resizable element
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** `<textarea bind:clientWidth>` doesn't update `clientWidth` when textarea is resized by user. **To Reproduce** [repl example]([link]) **Expected behavior** On user resize of textarea, I expected the bound value to update. Instead, the values stay stuck at the initial size. **Severity** Low. This is easy to work around, it would just be cleaner if this worked. Or in the alternative, if the documentation made it clear this wouldn't work.

### CASE-2446 · @user not supported in <style> blocks
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍4 💬8 · closed · labels: css
- **Excerpt**: ### Describe the bug Given this style block: ```html <style> @user{ .card{ opacity: 0; height: 0; } } .card { background-color: orange; max-width: max-content; padding: 1rem; border-radius: 1rem; display: grid; margin: auto; transform-origin: bottom; overflow: hidden; transition: opacity 1s, display 1s, height 1s; transition-behavior: allow-discrete; } </style> ``` Svelte outputs the following CSS: ```css @user{}.card.svelte-1xboevw{background-color:orange;max-width:max-content;padding:1rem;border-radius:1rem;display:grid;margin:auto;transform-origin:bottom;overflow:hidden;transition:opacity…

### CASE-2486 · bind:value causes stack overflow on 5.45.3 (in dev) when used with Bun
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I'm in the process of rewriting an app from pure vanilla JS to Svelte. I'm mostly done now, and today I've been moving a bunch of CSS from a single .css file to components. At some point I've noticed that at least two unrelated components are causing a stack overflow: ``` HomeSearch.svelte:92 Uncaught RangeError: Maximum call stack size exceeded in <unknown> in App.svelte at get (HomeSearch.svelte:92:15) at get (HomeSearch.svelte:93:13) at get (HomeSearch.svelte:93:13) at get (HomeSearch.svelte:93:13) at get (HomeSearch.svelte:93:13) at get (HomeSearch.svelte:93:13) at…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2403 · `/* */` comments don't work in inline functions
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, chromium, windows, svelte
- **Signals**: 👍6 💬9 · closed · labels: feature request/PRs welcome
- **Excerpt**: ### Describe the bug "Expected }" syntax error when attempting to use `/*` comments ![image]([link]) ### Reproduction ```svelte <button on:click="{() => {} /* asdf */}" /> ``` ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (6) x64 Intel(R) Core(TM) i5-8600 CPU @ 3.10GHz Memory: 2.71 GB / 15.78 GB Binaries: Node: 16.9.1 - C:\Program Files\nodejs\node.EXE npm: 7.24.1 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome: 99.0.4844.84 Edge: Spartan (44.19041.1266.0), Chromium (99.0.1150.55) Internet Explorer: 11.0.19041.1566 npmPackages: svelte: ^3.47.0 =>…

### CASE-2405 · Cursor jumps to end in search box in Safari
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, svelte
- **Signals**: 👍0 💬9 · open · labels: bug/compiler
- **Excerpt**: ### Describe the bug The cursor in a search box (`input[type="search"]`) with a two-way value binding jumps to the end when typing in Safari. I don't know my way around the Svelte code base, but looking at previous cursor issues, I think `'search`' would have to be added to the `if` condition [here]([link]]/blob/fc4797c6f84cf299117243e7193bf77d96914e85/src/compiler/compile/render_dom/wrappers/Element/Attribute.ts#L207). ### Reproduction ```svelte <script> let foo: string = ''; </script> <input type="search" bind:value={foo}> ``` [link] ### Logs _No response_ ### System Info ```shell n/a ```…

### CASE-2408 · Cannot read property 'splice' of undefined
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, chrome, svelte
- **Signals**: 👍0 💬9 · closed · labels: bug/compiler
- **Excerpt**: **Describe the bug** I extracted a very simplified version from our code base: [link] I'm not sure what more to describe. Svelte crashes. Some weird edge case with nested `{#each}` and `input[radio]` I guess. **Logs** Chrome: ``` VM154:657 Uncaught (in promise) TypeError: Cannot read property 'splice' of undefined at Object.destroy [as d] (eval at handle_message (VM153 about:srcdoc:13), <anonymous>:657:80) at destroy_each (eval at handle_message (VM153 about:srcdoc:13), <anonymous>:48:31) at Object.destroy [as d] (eval at handle_message (VM153 about:srcdoc:13), <anonymous>:583:8) at…

### CASE-2409 · ‘<audio>‘ tag bound to a svelte store not working as expected in iOS Safari...
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, android, svelte, webkit, desktop
- **Signals**: 👍0 💬9 · closed · labels: awaiting submitter/stale-bot/temp-stale
- **Excerpt**: # Describe the bug I have a REPL that works perfectly with no errors in all desktop browsers, but breaks in iOS Safari (and all other browsers I've tested on iOS, because Apple requires all iOS browsers to use webkit as the rendering engine). Another svelte user on the discord confirmed that the REPL also worked fine with no issues on their Android phone. Here is a link to the REPL in question: [link] I really hope this is just my mistake and not something that svelte is doing wrong, as the fix would be much faster to come. I have asked on discord a few times and nobody that I've talked to…

### CASE-2415 · Element resize listening via <iframe> breaks on destruction
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: webkit
- **Signals**: 👍1 💬9 · closed · labels: feature request
- **Excerpt**: **Describe the bug** We run in an embedded browser that uses an older version of WebKit and have run into a bug in 3.21.0, likely due to [ref] which fixed [ref]. When destroying elements that use `bind:width`, `bind:height`, etc we get a JS error in the returned unsubscription function from `listen()`. [link]]/blob/b3364424d7d454640045f352314eec63b73bf040/src/runtime/internal/dom.ts#L60-L63 It can't call `node.removeEventListener` because the `iframe.contentWindow` used to set up the listener previously has already been set to `null` by the `<iframe>` being detached from the DOM.…

### CASE-2416 · Destructuring a store object retuns the whole store if the property does not exist
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 71, opera, windows, svelte, webpack
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: **Describe the bug** When destructuring a store, the whole store object is returned if the property does not exist: `$: ({shouldBeUndefined} = $store);` It works if used with an existing property, i.e.: `$: ({existingProperty, shouldBeUndefined} = $store);` **To Reproduce** You can find the REPL [here]([link]) **Information about your Svelte project:** - Your browser and the version: Firefox 71 - Your operating system: Windows 10 - Svelte version : 3.16.7 - Whether your project uses Webpack or Rollup : Rollup **Severity** Annoying Thanks!

### CASE-2420 · Hydration crashes in if branch for undefined data
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: safari, svelte, webview
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### Describe the bug Hydration can crash at [link]]/blob/018996c1677e17857c404df33c8035a1a0c8b42e/packages/svelte/src/internal/client/dom/blocks/if.js#L65 because data is undefined. When browser extension (or browser itself in some cases*) modifies the DOM content before the hydration executes, the value of `data` can become undefined. The result is that the whole page disappears which is unacceptable. Adding a check for undefined here fixes the issue but I am not certain what would be the desired value in this case. *Safari WebView for example can detect some content as being telephone…

### CASE-2421 · A <select> can now include rich HTML content
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome 135, svelte
- **Signals**: 👍21 💬8 · closed
- **Excerpt**: ### Describe the bug Before you could customize a `<select>`, if you put things like an image or SVG into the `<option>` element, the browser would ignore them, but Svelte throws an error: ![Image]([link]) With the release of Chrome 135, [the `<select>` element can now be customized using CSS]([link]) and [supports rich HTML content]([link]). Browsers that implement `appearance: base-select` will eventually support this feature. ### Reproduction This [custom select example]([link]) is valid in Chrome 135 and later versions. ### Logs ```shell ``` ### System Info ```shell n/a ``` ### Severity…

### CASE-2423 · Cannot set properties of null (setting 'currentTime'), when transition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 131, svelte
- **Signals**: 👍0 💬8 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug When playing audio HTML element with binded currentTime value becomes hidden with transition, the Svelte still tries to set the value of the now missing property (while animated), which results in an error Cannot set properties of null. ### Reproduction Full example: [REPL]([link]) Press play and then hide the player ### Logs ```shell ``` ### System Info ```shell Chrome 131 ``` ### Severity annoyance

### CASE-2432 · Bad compilation of valid Svelte 4 components under Svelte 5
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, macos, svelte
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Describe the bug Repo is here [link] Deploy it to Vercel, and you'll see these errors <img width="751" alt="image" src="[link]]/assets/11261266/b3b67bfc-79f3-43bc-9b5c-fdd0f95725b1"> --- If you check the git history, commit `1c2912b229c7a4efbb41f444e3ee7584f7d7ced5` imports adapter-vercel in order to set edge runtime settings. If you revert that commit, then the deployment suddenly works. So it looks like adapter-vercel is doing something weird. ### Reproduction See above ### Logs ```shell n/a ``` ### System Info ```shell System: OS: macOS 14.4.1 CPU: (16) x64 Intel(R) Core(TM) i9-9980HK…

### CASE-2443 · [Svelte 5] bind:this on components not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug 'undefined' is logged with the following: [link] ### Reproduction * app.svelte ``` <script> import Demo from "./Demo.svelte"; let elDemo; function show() { console.log(elDemo); } </script> <div> <Demo width="100" bind:this={elDemo}></Demo> <button onclick={show}> show </button> </div> ``` * Demo.svelte ``` <script> let { name ="world" } = $props(); </script> <div>hello, {name}!</div> ``` ### Logs ``` shell undefined xN ``` ### System Info ```shell MacOS/Chrome ``` ### Severity blocking an upgrade

### CASE-2445 · onDestroy recreates binded property item in array that has been spliced
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 117, svelte
- **Signals**: 👍0 💬8 · open
- **Excerpt**: ### Describe the bug When using array.slice to remove a item from a list, the item is recreated by onDestroy on sub component that have the property binded to it. ### Reproduction I created a small project to reproduce the error, click on any button to remove an item, the result is a looping: [link] ### Logs _No response_ ### System Info ```shell Svelte 3.59.2, Chrome 117 ``` ### Severity annoyance

### CASE-2461 · svelte.dev is broken on Safari: Assets are not being loaded
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <img width="1440" alt="Screenshot 2021-01-14 at 2 49 03 PM" src="[link]> **Describe the bug** [svelte.dev]([link]) site is broken on Safari. From the console, it seems that the asset loading is broken. The console shows following error for many assets. **Logs** ``` [Error] FetchEvent.respondWith received an error: Returned response is null. [Error] Cannot load [link] [Error] Failed to load resource: FetchEvent.respondWith received an error: Returned response is null. (global.css, line 0) ``` **To Reproduce** - Go to [svelte.dev]([link]) using Safari (I'm on Version 14.0.2 (16610.3.7.1.9)) -…

### CASE-2466 · Reset form and onClick conflict
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome 84, opera, svelte, webpack
- **Signals**: 👍1 💬8 · closed · labels: awaiting submitter/stale-bot
- **Excerpt**: **Describe the bug** If button has type "reset" and "on:click" handler, the form is not reset. Only the click event handler is executed. **To Reproduce** [link] **Expected behavior** The form is reset and the onclick event is triggered calling the defined function **Information about your Svelte project:** - Your browser and the version: Chrome 84 - Your operating system: OSX 10.15.5 - Svelte version Svelte v3.24.0 - Whether your project uses Webpack or Rollup -> Rollup

### CASE-2471 · Radio button group only renders correctly when using keyed #each
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, ios, svelte
- **Signals**: 👍2 💬8 · closed · labels: bug/feature request
- **Excerpt**: **Describe the bug** If a radio input group is setup with a filter, the radio button doesn't show as selected upon filtering, unless a keyed `{#each}` is used. See REPL for example: [link] ![image]([link]) **Expected behavior** Upon filtering "bob", "bobby" should be selected. Or svelte could warn about these scenarios, if possible, and instruct to use a keyed each. And svelte could fallback to re-rendering entire each block or something so that it at least gets rendered correctly. But not sure on internals...so. **Information about your Svelte project:** - Chrome Version 79.0.3945.88…

### CASE-2472 · Programmatic input into a text field doesn't update the binding
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: **Describe the bug** Can't quite figure out if this is desirable behaviour or not (and I couldn't find a previous issue for it), but it looks like when you paste into (or use Javascript to set the value of) a bound field, the binding does not get updated. This is troublesome when considering a login field where a password-store like 1Password or LastPass or Chrome Autofill is used. **To Reproduce** I've reproduced the issue here. [link] **Expected behavior** I expect changing a field's value to update any bindings it has. **Information about your Svelte project:** - Svelte any including…

### CASE-2475 · outtroBlock issue causes dynamic components with each block to not be destroyed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: My app seems to be running into this edge case. I don't yet have an isolated reproduction of the issue, but I do have some generated output that has the bug with the fix. This causes the issue. The problem is `each_blocks[i]` is set to null & outroBlock is called two times. The first invocation does not have the `fn` argument and the second invocation does (however, `each_blocks[i]` is `null`). ```javascript function outroBlock(i, detach, fn) { if (each_blocks[i]) { each_blocks[i].o(function () { if (detach) { each_blocks[i].d(detach) each_blocks[i] = null } if (fn) { fn() } }) } } ``` This…

### CASE-2480 · experimental.async: "Batch has scheduled roots" when a sibling mutates shared $state during a suspense-resolution flush
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, svelte
- **Signals**: 👍2 💬7 · open
- **Excerpt**: > _Full disclosure: the debugging here was largely done by Claude, reviewed by me (an experienced backend SWE who doesn't know Svelte internals deeply). The bug is real and reproducible._ ## Update — root cause found + minimal repro My original report blamed SvelteKit **remote functions** + `bits-ui`. After extensive bisection those turned out to be **red herrings**. The real trigger is much smaller, and there is now a **dependency-free, pure-Svelte reproduction**: ### ▶ [link] ```bash pnpm install && pnpm dev # open in Firefox or Chrome, reload a few times ``` ## Summary Under…

### CASE-2485 · SvelteKit Hydration Mismatch Safari Mobile Browser (work around included)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: safari, svelte, mobile, iphone, ipad
- **Signals**: 👍4 💬7 · open
- **Excerpt**: ### Describe the bug All, I've been pounding my head for the last 10 hours on why my SSR hydration fails but only on the iphone/ipad and no where else! TLDR; Apple has this cool new feature that will automatically detect numbers that they THINK are phone numbers into an <a href="tel:XYZ>{number}</a>. This will fail hydration and give a mismatch. Proof: Normal browser output <img width="656" height="628" alt="Image" src="[link] /> Safari Iphone Output <img width="610" height="224" alt="Image" src="[link] /> ### Reproduction To reproduct this just make a new sveltekit applicaiton and return a…

### CASE-2488 · `<svelte:element>` behavior differs from using a tag literal
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, svelte
- **Signals**: 👍0 💬7 · open
- **Excerpt**: ### Describe the bug I wanted to create a reproduction of a browser bug in isolation, but then realized the problem only occurs when using `<svelte:element this={"h3"}>` instead of `<h3>`. Could this potentially be due to a Svelte bug? More context: [link] ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 26.1 CPU: (8) arm64 Apple M2 Memory: 176.28 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.11.1 - /Users/michael/.nvm/versions/node/v24.11.1/bin/node npm: 11.6.2 - /Users/michael/.nvm/versions/node/v24.11.1/bin/npm Browsers: Chrome:…

### CASE-2490 · Firefox does not clear $state variables upon refresh
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, chrome, edge, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Hi all, I have a svelte/svelte kit application in which users can fill in a form by inputting data in various fields. The fields can be text area, radio button or check boxes. I recently migrated from Svelte 4 to 5 and I am experiencing a strange bug that seems to only affect Firefox (works fine with Chrome and Edge). The variables declared with $state used for keeping track of the user inputs are not "cleared" upon refreshing the page. This leads to discrepancies between the data displayed to the user and the data coming from the database. **Background on the…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2404 · set_custom_element_data: Cannot use 'in' operator to search for 'item' in undefined
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, svelte
- **Signals**: 👍5 💬9 · open · labels: custom element
- **Excerpt**: ### Describe the bug After upgrading from 3.44.2 to 3.44.3 one of the components I work on has broken with this error. We use svelte to output custom elements. ### Reproduction [link] ### Logs ```shell Uncaught TypeError: Cannot use 'in' operator to search for 'item' in undefined ``` ![image]([link]) ```js function set_custom_element_data(node, prop, value) { if (prop in node) { node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value; } else { attr(node, prop, value); } } ``` ### System Info ```shell System: OS: macOS 11.6 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @…

### CASE-2430 · Svelte 5 : important recent regression with DexieJs LiveQuery that stopped working
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Describe the bug I recently tried to upgrade my svelte 5 installation (it used to work fine with a previous version of svelte 5), and now I'm basically unable to use Dexie.js as `liveQuery` just outputs an undefined value if I refresh the page, until I write to the database. This happens even on trivial repositories (I just copied the quickstart of Dexie.js). Since an image is worth a thousand words: ![Peek 08-07-2024 09-41]([link]]/assets/2164118/a3f50080-a09c-40b0-9623-47047656df0b) ### Reproduction Clone [link] start with `npm run dev -- --open`, add a new friend, refresh the page: the…

### CASE-2449 · Some features to add for sveltekit
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the problem Some must-have features: - Add support for third-party APIs: I regret not being able to integrate advanced features like video call or voice chat, voice search to my website because it lacks APIs with libraries, I think improve. - - Source management libraries are required: this is very important for zoning new and old code to make code management easier. - Add the feature to customize the layout by drag and drop: Editing the layout will be easier when it can be dragged and dropped and it will generate the same code as on the ide, ie can design the interface through…

### CASE-2451 · Binded volume parameter returning undefined
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬8 · closed · labels: bug/media elements
- **Excerpt**: ### Describe the bug When using `bind:volume` on video (did not test on audio track), it returns undefined instead of a number from 0-1. ### Reproduction REPL for reproduction based on media element bindings tutorial REPL: [link] ^ Click on video and check console, you can keep clicking to see that it only returns undefined. Tutorial: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.0 CPU: (8) arm64 Apple M1 Memory: 687.88 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.0.0 - /usr/local/bin/node Yarn: 1.22.19 - ~/.yarn/bin/yarn npm: 8.6.0 -…

### CASE-2494 · `custom_element_props_identifier` warning appearing in non-custom elements
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I'm extending the base HTML elements by adding styles but exposing their base properties and using rest props, but since I updated from `5.32.1` to `5.33.13` the `custom_element_props_identifier` is showing up in all components even when I'm NOT using `<svelte:options customElement />` at any part of my application. Compilation works, but is annoying to see the warning when I'm not even using that feature. ### Alert on VS Code <img width="1443" alt="Image" src="[link] /> ### Reproduction ### Alert on VS Code <img width="1443" alt="Image" src="[link] /> ### Component Code…

### CASE-2495 · `$effect` not working in tests, but `$derived` does
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I'm having this weird issue where `$effect` is not working in tests. Interestingly, `$derived` does work, which means Svelte is not compiling in SSR mode. For example, in this test: ```ts let num = $state(0) let doubled = $derived(num * 2) num = 5 expect(doubled).toBe(10) $effect.root(() => { let a = 0 $effect(() => { a = 5 }) flushSync() expect(a).toBe(5) }) ``` it errors at the very end: `expected +0 to be 5`, but [it should work]([link]). Here's my Vite config: ```ts export default defineConfig({ plugins: [ enhancedImages(), sveltekit(), ... ], test: { include:…

### CASE-2497 · Svelte scoped global styles do not work
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · open · labels: documentation
- **Excerpt**: ### Describe the bug As discussed in this [closed feature request]([link]][ref]), the newly introduced scoped global styles do not work in most cases because of CSS specificity. Because of CSS specificity if an element has more classes than another then it takes precedence when being rendered. So if in one of my +page.svelte files I want to edit an element to make it work perfectly for that page I will usually add a class to it (in most of my pages I have special cases that need custom styles). ![image]([link]) However as you can see my custom styles are being ignored in favour of the global…

### CASE-2499 · svelte 5 props not recogonised by vscode
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug <img width="789" alt="Screenshot 2024-11-11 at 9 23 49 PM" src="[link]> Why is that even though i have installed everything props are giving error in vscode.. but output is fine in browser. I dont want to use typescript. ### Reproduction Just trying to use let { data, header, row } = $props(); from parent ### Logs _No response_ ### System Info ```shell mac os , vscode ``` ### Severity annoyance

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2406 · onDestroy hook not called on SSR since version 3.39.0 in production mode
- **Principles**: P-F4 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬9 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug According [documentation]([link]) onDestroy hook must be called on server when component is destroyed. It looks like since version 3.39.0 it never gets called. ### Reproduction Clone repo: [link] then install dependencies and build. Start project ```npm run start```, go to main page and check terminal output (there are no console here). If svelte is downgraded to 3.38.3 this will work fine and the [onDestroy hook]([link]) will be called. ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.8 Ubuntu 20.04.2 LTS (Focal Fossa) Binaries: Node: 16.6.1 -…

### CASE-2424 · Empty comment in HTML breaks hydration
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬8 · open
- **Excerpt**: ### Describe the bug ## The Problem I'm trying to implement a manual hydration for some parts of my application. Which means I need to render components to a string and pass them to `@user` to avoid Svelte hydrating this parts of my application automatically. E.g. ```svelte <script> import { render } from "svelte/server"; </script> <!-- svelte-ignore hydration_html_changed --> {@user import.meta.env.SSR ? render(someComponent).body : " "} ``` The problem is that `render(someComponent).body` contains empty comments (`<!---->`) for its future hydration. And you get a mismatch because these…

### CASE-2425 · <svelte:element> hydration is broken in with SvelteKit
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬8 · open · labels: documentation
- **Excerpt**: ### Describe the bug I'm not sure if this should be in Svelte or Kit repo, but since it appeared with Svelte 5, i'm posting it here. `<svelte:element>` is not properly hydrated when using SSR with SvelteKit. With the following code, the page should render a `button` once hydrated: - it does with Svelte 4 - it does not with Svelte 5 ```svelte <script> import { browser } from '$app/environment'; $: t = browser ? 'button' : 'div'; $: console.log('T', t); </script> <svelte:element this={t}>{t}</svelte:element> ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS:…

### CASE-2498 · Svelte 5: hydration doesn't repair changing attributes from server to client (even in legacy mode)
- **Principles**: P-F4 · **Env**: linux, svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug Something like this ```svelte <script lang="ts"> import {browser} from "$app/environment"; </script> <div title={browser ? "client": "server"}>div</div> ``` should output ```html <div title="client">div</div> ``` after hydration (at least in legacy mode) but it doesn't because the attribute is inlined and the div is not marked as dynamic. ### Reproduction [repl]([link]) 1. open the main page 2. check the html ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2411 · svelte fails to parse valid CSS
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **Describe the bug** svelte css parser fails to consider valid css which include backslash **Logs** from [link] : ``` $ rollup -c src/main.js → public/build/bundle.js... [!] (plugin svelte) ParseError: RightParenthesis is expected src\Tailwindcss.svelte 70535: transition-delay:1000ms 70536: } 70537: }</style> ^ ParseError: RightParenthesis is expected at error (C:\dev\projects\wighawag\a17t-svelte-test\node_modules\svelte\src\compiler\utils\error.ts:25:16) at Parser$1.error (C:\dev\projects\wighawag\a17t-svelte-test\node_modules\svelte\src\compiler\parse\index.ts:93:3) at Object.read_style…

### CASE-2418 · Pseudo element selectors with nested @user don't build correctly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug Hi, When you have a nested `@user` inside a pseudo-element selector, it works in development but doesn't work after the build, the CSS build output is wrong. Here is an example: ```svelte <script> let element; </script> <button onclick={() => element.showModal()}>open</button> <dialog bind:this={element}> test </dialog> <style> dialog { margin: auto; } dialog::backdrop { background: #2E368C7F; transition: opacity 1s ease-in; @user { opacity: 0; } } </style> ``` Here is the CSS output (after build): ```css…

### CASE-2427 · Svelte 5: nested transition is buggy
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug One transition inside other transition do not work correct - when {if} block is used. Similar code work with Svelte 4. ### Reproduction What should happen, if you click button: 1) a overlay should fade smoothly 2) a panel should fly smoothly But only fade works. Panel do not fly. Open Overlay.svelte and remove {#if} block - but do not remove {@user} Now, this happens: -fade do not animate smoothly -but panel fly as expected [LINK]([link]) ### Logs _No response_ ### System Info ```shell 5.0.0-next.221 ``` ### Severity annoyance

### CASE-2429 · Svelte 5: intro transition doesn't work in dev mode
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, svelte
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Describe the bug When in dev mode, intro transition doesn't trigger. But once the project is built, it correctly triggers. ### Reproduction Clone [link] Run `pnpm dev`. Click the toggle button. The red box should fade in, but it currently doesn't. I didn't add `intro: true` since it's now the default. ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.5 CPU: (12) arm64 Apple M2 Pro Memory: 53.69 MB / 32.00 GB Shell: 3.7.1 - /run/current-system/sw/bin/fish Binaries: Node: 18.19.1 - /etc/profiles/per-user/hgl/bin/node npm: 10.2.4 - /etc/profiles/per-user/hgl/bin/npm pnpm:…

### CASE-2434 · SVGs with animateTransform lag for an extremely long time when embedded
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, windows, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug SVG elements inline inside svelte files with <animateTransform> will lag a lot before starting. Reproduced locally in dev, with build and in production website, on win10 and linux ### Reproduction [link] ```svelte <script> let name = 'world'; </script> <svg xmlns="[link] viewBox="0 0 16 16"> <path d="m8 16v-16" fill="none" stroke="#EAB308"> <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="12s" repeatCount="indefinite" /> </path> </svg> <h1>Hello {name}!</h1> ``` ### Logs ```shell N/A ``` ### System Info ```shell System: OS: Windows…

### CASE-2437 · Svelte 5: "in" transition not firing in dev/hmr mode but works fine when the app is built
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, tailwind
- **Signals**: 👍7 💬8 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug There's something wonky going on in 5.0.0-next.104, where, _in some cases_, the "in" half of a transition controlled by an if block does not occur in dev mode. That is, the transition function is not even called. This seems to occur when the transition is defined in a separate component, like this: ```svelte <!--+page.svelte--> {#if someState } <ComponentWithTranstion/> {/if} ``` Whereas this... ```svelte <!--+page.svelte--> {#if someState } <div class="bg-pink-300 p-4 text-purple-800" transition:fade|global={{ duration: 500 }}> Tailwind on vacay in Ibiza </div> {/if} ```…

### CASE-2444 · Transitions not working correctly on Svelte next
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug There is a bug present in the latest next version, ^5.0.0-next.25 Here, on Svelte 4, the transition works correctly : [link] But with Svelte 5.0.0-next.25, it doesn't work anymore : [link] I took this example from here : [link] And here is the github repo of [link] where the bug is present: [link] I believe it comes from the transition's parameters not being reactive when those parameters are updated ### Reproduction [link] ### Logs _No response_ ### System Info ```shell npmPackages: svelte: ^5.0.0-next.25 => 5.0.0-next.25 ``` ### Severity blocking an upgrade

### CASE-2452 · low level component access for library authors
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the problem Right now it is not possible to create "low level" components such as [reach ui]([link]), the [nextjs image]([link]) or [radix ui]([link]) These types of components are vital to increase accessibility and usage of best practices on the web. The biggest roadblocks I've had so far were these: - `class=""` doesn't work with svelte's style scoping, so components can't be styled from the outside - `on:click` you have to forward each event manually, which isn't practical - `in:` `transition:` etc. don't work at all and an alternative syntax is needed for animations ###…

### CASE-2460 · bind:this on a transitioned element in an #each block does not properly update the bound array
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** When you dynamically bind elements in an `#each` block to an array, and those elements have a transition on them, the bound array is not kept in sync when elements are removed. This effectively means I cannot use `bind:this` in an each block if elements will be removed and I want to transition them out. **Logs** n/a **To Reproduce** [REPL]([link]) The above REPL renders an array (`vals`) with four items and a button to remove each item. Each `<li>` is dynamically bound to an element in the `items` array. The `items` array is rendered below the list to illustrate what…

### CASE-2463 · #each block doesn't change when a new state is triggered by a transitioning component inside an #if condition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬8 · closed · labels: bug
- **Excerpt**: **Describe the bug** `#each` block doesn't change when a new state is triggered by a transitioning component. The weird glitch is happening when the `#each` block is placed inside an `#if` in combination with a transitioning component and Promise loaded items. **To Reproduce** Please check the following repl - [link] Click on "Show menu" and then "Clear items". The items array is reasigned (eg. `items = []`), but the `#each` block doesn't reflect the change. **Expected behavior** The `#each` block to properly reflect the iterated array state and to be not affected by the transitions of…

### CASE-2468 · CSS transition not working as expected in keyed each block
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍3 💬8 · closed · labels: stale-bot
- **Excerpt**: ```js let bar = [{}, null,]; ``` ```svelte <div class=foo> {#each bar as b, i(b)} {#if b} <div class=bar style='left:{50*i}%;' /> {/if} {/each} </div> ``` ```css .foo { position: absolute; } .bar { position: relative; background: red; transition: 1s } ``` This basic setup places a `div.bar` element with a red background in a `div.foo` container, positioned depending on its index in the javascript `bar` array. Because it has a `transition` css propery set, the `div.bar` element should be animated when its corresponding object in the javascript `bar` array changes position. **Behaviour** When…

### CASE-2469 · Callback when Promises finish resolving or rejecting
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I'm building a router for svelte, where I'd like to know when the initial promises have resolved so I can transition the page with the data already present. **Describe the solution you'd like** Currently I do something like this: ```js const component = new Component({ target: document.querySelector('.app') || document.body, hydrate: true, props: props }) Promise.all(component.$$.ctx).then(done => { console.log('resolved', done) }) ``` This totally works, but I don't think `$$` is public API. **Describe alternatives you've…

### CASE-2473 · Transition prevents {#if}{:else}{/if} from being exclusive
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍10 💬8 · closed · labels: bug
- **Excerpt**: **Describe the bug** A transition deep within some components makes both the true and false parts of an if/else render on the page. **To Reproduce** 1. Go to <[link]> 2. Click the three things it tells you to click 3. See that the blue and purple (if and else parts of the if/else in App.svelte) are both showing If you remove `transition:slide` from `Scaffold.svelte` the problem is no longer there. **Expected behavior** I expect either the true or the false sections of the if statement to show, not both at the same time. **Information about your Svelte project:** - Your browser and the…

### CASE-2477 · Transitions/animations brain dump
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: Fair warning: this will be a long rambly issue. I just want to get this stuff out of my head and into a place where the missing pieces will hopefully be a bit clearer. Svelte's transition system is powerful, but only applies to a fairly narrow range of problems. (There are also some outstanding issues that need to be resolved one way or another — [ref], [ref], [ref] and [ref], which is related to [ref], spring readily to mind.) We don't have a good way to achieve certain effects that are rightly gaining in popularity among web developers. Most of what I'm about to describe is almost certainly…

### CASE-2481 · 5.55.3: $derived first-read in out: transition returns UNINITIALIZED, crashes outro (now with REPL/Playground link)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug [following is created by Opus 4.7, hope that's fine, feel free to remove and/or request more info] After upgrading from 5.55.2 to 5.55.3, a document-level click handler that calls store.set([]) no longer clears items rendered by a sibling {#each $store as item} block. The store write executes (verified by store.subscribe logging and by later reads), but the {#each} doesn't re-render, so the previously rendered DOM nodes stay visible. Identical code is fine on 5.55.2, broken on 5.55.3, nothing else changed. Bisect 5.25.8 ✓ → 5.40.0 ✓ → 5.47.0 ✓ → 5.51.0 ✓ → 5.53.0 ✓ →…

### CASE-2483 · Possible regression introduced in 5.52+
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍3 💬7 · closed
- **Excerpt**: ### Describe the bug Starting from Svelte v5.52.0, I am noticing an error relating to Rollup. ``` RollupError: Parse failure: Expected '{', got '(' At file: /node_modules/layerchart/dist/utils/scales.svelte.js:138:30 at getRollupError (file:///.../node_modules/rollup/dist/es/shared/parseAst.js:401:41) at convertProgram (file:///.../node_modules/rollup/dist/es/shared/parseAst.js:1098:26) at parseAstAsync (file:///.../node_modules/rollup/dist/es/shared/parseAst.js:2084:106) at async ssrTransformScript (file:///.../node_modules/vite/dist/node/chunks/config.js:15374:9) at async loadAndTransform…

### CASE-2487 · flip/crossfade animation regression in 5.43.8
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬7 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug Observe how new items are sliding from the top. In the 5.43.7 they are just added at the bottom. [link] ### Reproduction Compare 5.43.7 and 5.43.8 in the [REPL]([link]) ### Logs ```shell ``` ### System Info ```shell irrelevant ``` ### Severity blocking an upgrade

### CASE-2493 · Destructuring $state array causes build to error
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: svelte, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Array destructuring from $state causes the build to error. This was working in 5.33.4 but is broken in the latest 5.33.14 ### Reproduction Include the line `let [level, custom] = $state([10, "Admin"])` in a Svelte file in your project and then attempt to build. Or: Repo: [link] Install project and execute `npm run build` ### Logs ```shell PS C:\Users\Admin\Documents\Web Projects\sveltekit-unexpected-ident> npm run build > [email] build > vite build vite v6.3.5 building SSR bundle for production... ✓ 15 modules transformed. ✗ Build failed in 69ms error during build:…

### CASE-2500 · Slide transition throws a "Invalid keyframe value for property height" warning since Svelte 5
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍16 💬7 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug Using Svelte 4 and before, this REPL custom Accordion with a slide effect was working perfectly. Since Svelte 5, it throws a warning: > Invalid keyframe value for property height: NaNpx I like the approach of this accordion using `{#key isOpen}` as it re-runs the transition and also keeps the content in the DOM, only playing with CSS to hide the content when closed. I haven't made this REPL but adapted it to a similar component in my codebase. ### Reproduction REPL with Svelte 5 (and the warning): [link] REPL with Svelte 4 (and no warning): [link] ### Logs ```shell >…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2413 · <input type='number' /> value isn't parsed as a number when `type='number'` attribute is spread instead of being explicitly written
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **Describe the bug** An input like `<input type='number' />` will parse the value as a number, however if you were to spread the `type='number'` onto the input it will be parsed as a string instead **Logs** N/A **To Reproduce** [link] **Expected behavior** Regardless of spreading the `type='number'` attribute or explicitly defining it, both should result in the value being parsed as a number. **Stacktraces** N/A **Information about your Svelte project:** REPL link uses v3.23.2 **Severity** There is a work around, and that's to explicitly put the `type='number'` attribute. It's just annoying…

### CASE-2428 · HMR fails on next.179 and above
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug The component dissapears after making any changes. ### Reproduction ```html <script lang='ts'> // +page.svelte import Input from "$lib/components/input.svelte" </script> <Input /> ``` ```html <!-- $lib/components/input.svelte --> <input /> <div>1</div> ``` To reproduce simply add or remove a div in the component and the component will dissapear and need to be reloaded manually. ### Logs _No response_ ### System Info ```shell vscode, next.179 and above ``` ### Severity annoyance

### CASE-2438 · Svelte 5: svelte:element with its `this` set to `input` or `textarea` doesn't call their actions
- **Principles**: P-G4, P-E3 · **Env**: windows, svelte
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug following this issue ([ref]), actions also do not work on a `svelte:element` with its `this` set to `input` or `textarea`. ### Reproduction // +page.svelte ```svelte <svelte:options runes /> <script lang="ts"> function action(node: HTMLInputElement) { console.log('hello'); } </script> <svelte:element this="input" use:action></svelte:element> ``` ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (16) x64 12th Gen Intel(R) Core(TM) i7-12650H Memory: 6.69 GB / 15.63 GB Binaries: Node: 18.14.2 - C:\Program Files\nodejs\node.EXE npm: 9.7.1…

### CASE-2447 · Runes: `get`/`set` syntax / creating reactive `#each` items sucks
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍8 💬8 · closed · labels: runes
- **Excerpt**: ### Describe the problem I just wanted to port a simple to-do sort of demo to runes but it was more difficult than expected and the end result is more verbose than a "Svelte" component should be. Of course I might be doing something wrong. First naive approach was just one state: ```svelte <script> let todos = $state([ { text: 'Item 1', done: false }, { text: 'Item 2', done: false }, ]); const remaining = $derived(todos.filter(x => x.done == false)); </script> {#each todos as todo} <div> <input type="checkbox" bind:checked={todo.done} /> <input bind:value={todo.text} /> </div> {/each} ...…

### CASE-2448 · Input type="range" value is not updated properly on load
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug On the first show (when page is loaded), the slider is not updated if used in this form: ``` <input type="range" {value} min="100" max="200" step="1"/><br/> ``` When value within slider is bound: ``` Slider bound: <input type="range" bind:value min="100" max="200" step="1"/> ``` It behaves correctly. When value is changed, it is also updated correctly, the problem is only in initial show. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 Ubuntu 20.04.6 LTS (Focal Fossa) CPU: (12) x64 AMD Ryzen 5 5600H with Radeon Graphics…

### CASE-2456 · <select> selected option disappears on clone
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Since svelte handles select value internaly, value disappears when node is cloned with `Node.cloneNode()` because there is no option element having `selected` attribute and cloned select is not managed by svelte. It happened to me when using svelte-dnd-action library which clones node for dragged element. Not sure if this is bug, however maybe svelte should at least allow to set selected attribute manually? ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Not system related ``` ### Severity annoyance

### CASE-2458 · Why is binding with child components rendering two times on the first load?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Describe the bug Why do I get two times the `console.log()`? ### Reproduction [link] - App.svelte: ```svelte <script> import Child from './Child.svelte' let filter = { value: "hello world" } $: console.log(filter) </script> <h2>Parent:</h2> {filter.value} <input bind:value={filter.value}> <br><br> <h2>Child:</h2> <Child bind:filter /> ``` - Child.svelte: ```svelte <script> export let filter = undefined </script> <input bind:value={filter.value}> ``` ### Severity performances penalty

### CASE-2459 · GetContext breaks when imported
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug GetContext works inside HTML ```html <script> import { setContext, getContext } from 'svelte' setContext('myClass', 'green') </script> color1: {getContext('myClass')} <br /> color2: <input value={getContext('myClass')} /> ``` However, if I import this from another file, `value` is `undefined`. ### Reproduction [link] [link] ### Logs _No response_ ### System Info ```shell Svelte: 3.38.3 System: Svelte REPL ``` ### Severity annoyance

### CASE-2464 · Bind to a Map() Object not possible
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍12 💬8 · open · labels: temp-stale
- **Excerpt**: **Describe the bug** I am not sure if this should work or if it's a feature request in the end. It is easily possible to bind to a normal Object `{}` with "keys", but it seems not to be possible if i have a Map object. I have tried to simplify the repl as much as possible. Works: ```svelte const id = 1; const obj = {}; obj[id] = {x: 0, y: 0}; ... <input type="range" min="0" max="100" bind:value={obj[id].x} /> ```` Does not work: ```svelte const map = new Map(); map.set(id, {x: 50, y: 50}); ... <input type="range" min="0" max="100" bind:value={map.get(id).x} /> ```` Full repl see link. **To…

### CASE-2474 · bind:value for keyed select tag doesn't work when options are updated
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬8 · closed · labels: bug
- **Excerpt**: The selected value is known oncreate, but the `<option>` values are added later. The selected value isn't set when they are added. [link] Looks like it's related/similar to [ref] [ref] [ref]

### CASE-2479 · Unable to add attribute without a value using templates
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: It is entirely possible I am missing something very obvious, but I can’t seem to figure out how to render a `<select>` menu and add a selected attribute for the selected option. I tried using this but it gives a syntax error ```html <option value="b"{{#if (val == 'b') }} selected{{/if}}>b</option> ``` [link] --- I also tried using a ternary as described in [ref], but that too gives a syntax error ```html <option value="b"{{ (val == 'b') ? ' selected' : '' }}>b</option> ``` --- The only way I could get it to work was doing this: ```html <option value="b" selected="{{ (val == 'b') ? ' selected'…

### CASE-2491 · Incorrectly triggered `node_invalid_placement` error when `<button>` is first child of `<select>`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug According to MDN documentation for styling `<select>` elements ([link]([link])), a first-child `<button>` is allowed in modern browsers as a means to style the element, and is progressively enhanced / ignored when unsupported. However, putting HTML akin to the example in the MDN, where a `<select>` has a single `<button>` as the first child, triggers `node_invalid_placement` compiler error. ### Reproduction Put the following HTML in any Svelte file: ``` <select> <!-- Select button --> <button> <selectedcontent></selectedcontent> </button> <option…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2417 · CSS minification broken in 3.13
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: **Describe the bug** The simple CSS minification that the compiler once performed on component styles seems to have largely stopped working. **Logs** N/A **To Reproduce** ```svelte <div>Hey</div> <style> div { font-size: 200%; color: red; } </style> ``` **Expected behavior** The styles this produces should continue to be lightly minified - whitespace should be removed, semicolons right before closing braces should be removed, etc. This stopped working between 3.12.1 and 3.13.0. **Stacktraces** N/A **Information about your Svelte project:** 3.15.0, but present since 3.13.0. **Severity** Fairly…

### CASE-2455 · CSS validation: `:global(...) must contain a single selector` error when using Svelte with Tailwind
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug not that i demand Svelte to be compatible with Tailwind Typography but... its gonna be popular and i figure it might raise something that is worth tackling. a popular way of including Tailwind is by including it inside of a layout component: ```html <style global lang="postcss"> @user base; @user components; @user utilities; </style> ``` this wraps ALL THE THINGS in :global. this is not good for something like Tailwind, because this happens with Tailwind's popular typography plugin: ```css :global(.prose) :global(:where(ul) :global(ul), :global(ul) :global(ol),…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2419 · Cannot call `unmount` method with using Attachment and $state
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬8 · closed · labels: good first issue
- **Excerpt**: ### Describe the bug In Attachment, mount component programmatically like below. ```ts const attachement: Attachement<HTMLElement> = (element) => { let componentInstance = $state<ReturnType<typeof mount>>(); const target = document.createElement('div'); componentInstance = mount(Component, { target }); // if use component instance with $state, cannnot call unmount. // const componentInstance = mount(Component, { target }); // This is works return () => { console.log('hidden attachement'); if (componentInstance) { // This warning appears in console on calling this. // // [svelte]…

### CASE-2422 · Build error / TypeError: [vite-plugin-svelte-module] Cannot read properties of undefined (reading 'some')
- **Principles**: P-F5, P-H3 · **Env**: edge, vite, svelte
- **Signals**: 👍3 💬8 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I was trying to integrate svelte with phoenix liveview and initially there were no issues. However after upgrading from [email] -> [email] I get the below error when trying to build. Downgrading to [email] successfully builds. ### Reproduction ```svelte import Counter from "./pages/Counter.svelte"; import Ledgers from "./pages/Ledgers.svelte"; import { mount, unmount } from "svelte"; const components = { Counter, Ledgers }; function parsedProps(el) { const props = el.getAttribute("data-props"); return props ? JSON.parse(props) : {}; } const Hooks = {}; Hooks.SvelteHook =…

### CASE-2441 · svelte 5: stale reactive prop
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Describe the bug The prop is not updated even though it is changed and triggers rerender. ### Reproduction Please look at `src/lib/components/Toolbar.svelte` and `src/routes/+page.svelte`. [Reproduction]([link]) Other relevant files: - `src/lib/use-machine.svelte.ts` - `src/lib/use-service.svelte.ts` - `src/lib/use-snapshot.svelte.ts` Steps: 1. Open browser console 2. Click the alpha channel input that has the value of 1 3. Observe the inspection logs on the console 4. Notice that `machine.state` log is correctly updated but `state` log is not but also has updated label Expected behavior:…

### CASE-2450 · await blocks unnecessarily unmount and remount their children when the promise changes
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: ### Describe the bug When the promise of an `{#await ... }` block changes from a resolved Promise to another resolved Promise, svelte unnecessarily unmounts and then remounts all the contents of the "then" fragment of the await block. ### Reproduction [link] ```svelte <script> import ShowValue from "./ShowValue.svelte" const promise_a = Promise.resolve('a') const promise_b = Promise.resolve('b') let current_promise = promise_a; </script> {#await current_promise then value} <ShowValue {value} /> {/await} <button on:click={()=>{current_promise = promise_a}}>Show Promise A</button> <button…

### CASE-2470 · Add support for keyboard and mouse button modifiers for the on: directive.
- **Principles**: P-F5, P-H3 · **Env**: vue, svelte
- **Signals**: 👍10 💬8 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** I am coming from Vue.js and really like Svelte and the concepts it promotes. One feature that Vue offers that I have become spoiled by, however, is their "Key" and "Mouse Button" modifiers for event listeners. I have noticed that Svelte also has modifiers for the `on:` directive. Which is coded like: `on:eventname|modifiers={handler}`. This is [documented on svelte.dev]([link]). This is great; but when listening for keyboard or mouse-specific events like `keyup`, `keydown`, or `middle` (a mouse button modifier); Vue goes the…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2426 · [feat] Props data checker/converter
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte
- **Signals**: 👍2 💬8 · open
- **Excerpt**: ### Describe the problem Sometimes it can be useful to validate or convert the value of a prop before using it. Some examples : * convert a string to another type (eg: number). * replace incorrect values ​​with a default value. * respect other criteria such as a min/max. * I want to use a different type internally an externally (ex date string format and Date object) And of course I would like to keep this responsive and recheck the prop every time it is changed from outside --- Currently I see two way to do this. --- 1. If the prop is read-only, I can use a **$derived()** state : ```svelte…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2442 · Svelte 5: `animate:flip` can cause transition glitches and overlapping on outro
- **Principles**: P-A5, P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: ### Describe the bug When using transitions like `fly` in combination with the `flip` animation, the transitions can be adversely affected. - When multiple transitions are activated at the same time, previous transitions can stutter and end up transitioning to the wrong location. After the transitions has finished the elements will snap into the correct place, however. - Adjacent elements that transition out at the same time, will collapse into the same position and outro from there. E.g. three items will all outro from the position of the first item. (This issue already exists in Svelte 4,…

### CASE-2457 · Crossfade opacity is incorrect
- **Principles**: P-A5, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬8 · open · labels: bug/runtime/transition/animation
- **Excerpt**: ### Describe the bug When using `crossfade` to transition between two elements, the `in` element goes from 0 to `o` (where `o` is the natural opacity) while the `out` element goes from `o` to 0. The result is that at the midpoint, the combined opacity is less than either element's natural opacity. In the common case where both elements have a natural opacity of 1, the combined opacity at the midpoint is 1 - 0.5^2 = 0.75. This can be solved with a quadratic blending formula with special handling for the common case (which is complicated by the need to know which element is on top of the…

### CASE-2476 · Put the documentation in this repo
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: It has, err... become apparent that I am bad at keeping documentation up to date. On top of that, we currently have no way of versioning documentation. This applies to both Svelte and Sapper. There is an obvious solution: Docs should live in this repo. PRs for new features should not be accepted until documentation is brought up to date. All we really need to figure out (I think? maybe I'm wrong and this whole thing is a bad idea?) are the mechanics of actually updating the sites with the new docs. If anyone has any pointers on good pre-existing solutions to this problem, sound off.

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-2462 · Media query with calc in does not compile
- **Principles**: P-A2, P-A4, P-A1, P-G3 · **Env**: windows
- **Signals**: 👍2 💬8 · closed · labels: bug/temp-stale
- **Excerpt**: **Description** When placing a calc inside of a media query you get a compiler error. **To Reproduce** This repl contains an example of the bug. [link] This results in compiler error. `@user screen and (min-width: calc(100px - 10px)) { h1 { color: green; } }` **Intended behavior** This works with normal css so it should produce valid css instead of throwing an error System: OS: Windows 10 10.0.18363 CPU: (16) x64 AMD Ryzen 7 2700X Eight-Core Processor Memory: 7.15 GB / 15.94 GB Binaries: Node: 14.8.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.4 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.7…

### CASE-2465 · Component should be able to iterate over child components in `<slot />`.
- **Principles**: P-A2, P-A4 · **Env**: svelte
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: Similar issues have been raised and they have been closed, but I'm going to try this again because I believe a lot of people would also love to see this feature. A svelte component should be able to iterate over child components in `<slot />`. **Is your feature request related to a problem? Please describe.** I constantly get hit by this problem when I want to create a component used for layout purposes. This type of component is solely for creating a specific layout, so it does not care what child component it has. You can think of a relationship between flex container and flex items. [ref]…

