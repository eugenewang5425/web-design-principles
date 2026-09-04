# Case Chunk 017 — Round 17

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2601 · state_unsafe_mutation when updating state inside outrostart event
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, svelte, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When updating state inside of an event handler for the `outrostart` event on a node, the following error occurs: ``` Uncaught Svelte error: state_unsafe_mutation Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state` ``` This does not happen if using the `onoutrostart` callback prop, or other transition events/props ### Reproduction [link] You'll see the error when toggling out ### Logs _No response_ ### System Info ```shell System: OS: macOS 15.0.1 CPU: (10) arm64 Apple M1 Max Memory: 157.22…

### CASE-2621 · Svelte 5: WAAPI transitions can be hijacked in many ways, breaking the lifecycle of components
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍6 💬6 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug After looking through [link]][ref] I've done some research and realized that WAAPI may not be the best solution for transitions, at least not yet. The fact that transitions now rely on the finish event of the animation no longer guarantees that the animation will finish after specified duration and allows external libraries break its intended behavior (see example). Even [start isn't guaranteed to start on next frame]([link])). For something as fundamental as transitions which can prevent destruction of an element, relying on a browser feature meant for trivial visual…

### CASE-2623 · Svelte 5: Transition Bug
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Transitions in Svelte 5 fail to render content completely, or if there is a short duration specified, not at all. See the reproduction for an example of the issue. We first started noticing this `5.0.0-next.82` and it wasn't present in `5.0.0-next.81`. The changes in `5.0.0-next.82` don't appear related at first glance, but that's when we started seeing issues in our application fwiw. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.3.1 CPU: (10) arm64 Apple M1 Max Memory: 478.14 MB / 64.00 GB Shell: 5.9 - /bin/zsh Binaries:…

### CASE-2642 · Bug > Transition out / slide uses the OLD height from transition in...
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug The REPL is best, here's my best description When using `transition:slide`, the transition OUT will use the height calculated for the IN transition, even if the element has since changed size. This causes a jump in the OUT animation. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Replicatable with REPL System: OS: macOS 12.3.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 64.07 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.18.1 - ~/.nvm/versions/node/v16.18.1/bin/node npm: 8.19.2 - ~/.nvm/versions/node/v16.18.1/bin/npm…

### CASE-2643 · Bug > Classes aren't updated during tick
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I want to remove, then immediately re-add a `class` in order to trigger a CSS `animation`. I expect `await tick()` to "resolve as soon as any pending state changes have been applied to the DOM" ([via the tutorial]([link])). However this doesn't appear to be the case. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell This, but also the REPL System: OS: macOS 12.3.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 64.07 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.18.1 - ~/.nvm/versions/node/v16.18.1/bin/node npm: 8.19.2 -…

### CASE-2646 · Multiple element transitions in same component fail in 3.50.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera
- **Signals**: 👍10 💬6 · closed
- **Excerpt**: ### Describe the bug Hey everyone, I believe this may be similar or related to: [link]][ref] In short: - When only a single transition is present (fly) the component transition works as expected - When both fly and fade transitions are used, only the fade operates, fly is broken - Unlike other tickets, my issue is related to multiple transitions for multiple elements, but still within a single component You can see this issue visualized in the gifs here. Note the second gif is missing the fly animation: [link] I came across this issue because I have an older version of this component that…

### CASE-2654 · Transition leaves empty style element
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍12 💬6 · closed
- **Excerpt**: ### Describe the bug Introduced in [ref] The current version clears the stylesheet and [removes reference]([link]]/blob/806cba2b755a93ac2b083cf87fb50e8b84947dae/src/runtime/internal/style_manager.ts#L79) to it but leaves the empty style element behind. Every transition creates a new style duplicate. Previous version kept [stylesheet reference]([link]]/blob/1952ea22de02e65552a6261bee431b62760f3b93/src/runtime/internal/style_manager.ts#L34) as a part of the document. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity annoyance

### CASE-2661 · `animate` runs when removing elements
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Docs say > An animation is triggered when the contents of a are re-ordered. Animations **do not run when an element is removed**, only when the each block's data is reordered. Animate directives must be on an element that is an immediate child of a keyed each block. Edit: Ooof, why `a {user-select: none;}` on the website? But that's not true. I'm not sure if this is a regression but I don't remember it ever behaving different (edit: I went backwards via the REPL and it looks like it has never behaved correctly?). But now I'm annoyed enough to create this issue. In the…

### CASE-2666 · Introducing a parameter to allow for horizontal slide transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍10 💬6 · closed · labels: feature request/transition/animation
- **Excerpt**: **Is your feature request related to a problem? Please describe.** The slide transition is great for providing realistic feeling user experiences, because it evokes a sense of space for UI components "sliding" out of the screen. However, at the time of me writing this issue, the slide transition only works vertically, with the item shrinking in the justify-direction of the parent element. With other transitions allowing for parameters to customize transition specific behavior, I wish the slide transition would have an option to change the axis of shrinking. **Describe the solution you'd…

### CASE-2676 · After updating from Svelte 3.20.1 npm run fails "Cannot find module 'typescript'"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** I just was looking to run npm install and get my project updated. I have not used Typescript and have no intention of using Typescript in the foreseeable future on this project. **To Reproduce** Steps to reproduce the behavior: 1. Open existing project folder, type npm update. 2. Installation completes. Svelte now at version 3.28.0 3. Type npm run dev 4. See error ``` [!] (plugin svelte) Error: [svelte-preprocess] Error transforming 'typescript'. Message: Cannot find module 'typescript' Require stack: - /node_modules/svelte-preprocess/dist/transformers/typescript.js -…

### CASE-2690 · Transitions in await create duplicate DOM nodes
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** transitions in await blocks cause duplicate DOM nodes **To Reproduce** Click update a couple times in this [REPL]([link]) **Expected behavior** No duplicate nodes in the DOM

### CASE-2698 · TypeError: Illegal invocation on transition
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: Hi! After bumping Svelte from 3.4.2 a part of my code broke. It's broken for me on both 3.4.3 and 3.4.4. I made a [REPL]([link]) which unfortunately fails to replicate the bug. I do hope, however, that providing my code might help identify the bug. The bug happens when I click on "Expand". The same thing happens if I flip `showForm` to `true` in `Form.svelte` and click "Add" or "Cancel". What happens when I do that in my app, is that the slide out transition works fine, but the slide in of the other part of the if-block in `Form.svelte` doesn't work. Not only does it not slide in, it doesn't…

### CASE-2699 · Animation with delay can lead to outdated css rules
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/stale-bot
- **Excerpt**: I played around with the todo list from the animation tutorial ([link]) and adapted it like so: * Distinguish between adding and removing/checking todos. * For removing/checking todos, add a delay of 200ms to the animation, so it starts only after the transition has finished. * For adding todos, start the animation directly (delay of 0ms) The result seems to work fine: [link] Then I continued playing around and replaced the **delay with an unreasonable huge number** (3s). The behaviour seems very odd when you interact with the todo list before the animation actually starts, **leaving the todo…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-2602 · Docs: Playground snippet demo not showing letters in dark mode
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: documentation
- **Excerpt**: ### Describe the bug As you can see in the following screenshot, it is hard to read letters in the table when using a darkmode. ![image]([link]) ### Reproduction [Demo]([link]) ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2603 · SvelteKit generates inline event handlers for `img` tag causing CSP inline execution issues
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍7 💬6 · open
- **Excerpt**: ### Describe the bug Wrapping an `img` as a Svelte component results in `onload="this.__e=event" onerror="this.__e=event"` generated in HTML output. It causes CSP issue related to inline execution. Below is my `csp` configuration and the error message. ``` csp: { mode: 'auto', directives: { 'script-src': ['self', 'unsafe-eval'] } } ``` ### Reproduction [link] ### Logs ```Shell Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self' 'unsafe-eval' 'nonce-94PQ75nivUUiZFr969Zztg=='". Either the 'unsafe-inline' keyword, a hash…

### CASE-2613 · Svelte 5: Placeholder in select not displayed
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug [demo]([link]) ![image]([link]]/assets/147320/a862c629-fd5d-45a8-b680-76b5da6e3442) As you can see in the above image, a placeholder, "--Please choose an option--" is not displayed when I use a component. Both selects are identical but using component doesn't show the placeholder. Select.svelte ``` <select name="pets" id="pet-select1" {...$$restProps}> <slot></slot> </select> ``` App.svelte ``` <script> import Select from './Select.svelte' </script> <div> <label for="pet-select">Choose a pet 1:</label> <Select> <option value="">--Please choose an option--</option> <option…

### CASE-2618 · Binding scrollY to `svelte:window` causes implicit scrolling to the top of the page
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug In the example from the video, I scroll and then refresh the page. In the case where `scrollY` is bound to `svelte:window`, the page scrolls to the beginning after refresh. If no binding is done, the page does not scroll. Most likely the same thing happens with `scrollX`. [link]]/assets/625005/dc9f4f6e-709e-48a6-97b7-595e1a9c4c89 ### Reproduction [link] ### Logs _No response_ ### System Info ```shell "svelte": "^5.0.0-next.123" ``` ### Severity annoyance

### CASE-2625 · Trying to access a derived value throws
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug In the dialog shown in the video below, the items in the list are from a derived store [link] Not entirely sure what is causing the error, have checked the application code and nothing stood out to me Have kept the reproduction close to the original application code, have just removed the state management library which was being used There are if blocks around each blocks before rendering lists Event handler when clicking 'View more' is `L19` in `src/ThreadChild.svelte` which is created by `L171` in `src/Thread.svelte` ### Reproduction Repo: [link] Stackblitz: [link] ###…

### CASE-2650 · Weird display with array reverse method
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I know that reverse() is array mutable method, but I'm not sure. Is this a bug or not? Why is the display different between these 2 examples? (note the display of original array) [array reverse() in text fragment]([link]) <img width="1624" alt="Screenshot 2565-02-20 at 18 17 41" src="[link]> ### Compare with [weird array reverse in html block element]([link]) <img width="1620" alt="Screenshot 2565-02-20 at 18 22 12" src="[link]> ### Reproduction as shown in the captured screen above ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.2.1 CPU: (12) x64…

### CASE-2653 · Whitespace being trimmed and not complying with HTML spec
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug If I have the following code: ``` <pre style="background-color: #2e3440ff"><code><span class="line"> <span style="color: #81A1C1">local</span><span style="color: #D8DEE9FF"> execute </span><span style="color: #81A1C1">=</span><span style="color: #D8DEE9FF"> vim.</span><span style="color: #D8DEE9">api</span><span style="color: #D8DEE9FF">.</span><span style="color: #D8DEE9">nvim_command</span></span></code></pre> ``` This strips some of the whitespace in svelte: <img width="568" alt="Screen Shot 2022-02-02 at 10 59 37 PM" src="[link]> [link] But this is what I'm expecting…

### CASE-2655 · `Unknown word` error from svelte compiler
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I'm getting an error from the svelte compiler that just says `Unknown word`: <img width="650" alt="Screen Shot 2022-01-15 at 6 33 17 AM" src="[link]> This error does not occur in v3.46.1 but does occur in v3.46.2. This is the output that is generated when I add custom preprocessor at the final step that just prints the markup: ```js function debugPreprocess() { return { markup: async ({ content, filename }) => { console.log(content) return { code: content, map: '' } }, script: () => {}, style: () => {} } } ... const config = { ... preprocess: [ preprocess(),…

### CASE-2674 · [BUG] Dependence of reactivity on the order of declaration
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Reactive statement declaration through $: label before the second reactive statement that changes the first one through function is not reactive; REPL: [link] ![image]([link])

### CASE-2695 · Property "muted" for <audio> and <video>
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍7 💬6 · closed · labels: feature request
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

### CASE-2697 · Unexpected value for draggable "false" becomes "true"
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Svelte template: ```html <img draggable="false"> ``` ### HTML output: ```html <img draggable="true"> ``` [Svelte REPL example]([link]) ### Expected output: ```html <img draggable="false"> ``` ### A workaround is to write: ```html <img draggable={false}> ``` ### The cause The svelte compiles generates `img0.draggable = "false";` "false" is converted (by the browser) to true, and updates the DOM to `draggable="true"` Svelte should be made aware of attributes like `draggable` and `spellcheck` and convert the string `"false"` to a boolean `false` before setting the property.

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2604 · [Svelte 5]: Comments are converted to props when migrating components
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug This: ```svelte <script lang="ts"> // font weights import type { MouseEventHandler } from 'svelte/elements'; export let semibold = false; export let medium = false; // text overflow export let truncate = false; // whitespace export let preWrap = false; // text transform export let uppercase = false; export let capitalize = false; // font size export let size: '2xs' | 'xs' | 'sm' | 'base' = 'base'; export let color = 'gray-900'; export let testId = 'text'; export let onClick: MouseEventHandler<HTMLSpanElement> | undefined = undefined; $: style2xs = size === '2xs' ?…

### CASE-2664 · Unexpected behaviour with clientWidth and clientHeight bindings?
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug So I'm not exactly sure I understand what's going on but I think this is a bug. So to preface. I noticed this when I had an embedded iframe video player which gave me the unwanted behavior. It restarted playing whenever what element that had clientWidth/Height bound to itself got resized. It doesn't look like the DOM remounts, however it feels like it. Looking at the repl you can see that afterUpdate is callen on every resize. According to the tutorial it says > These bindings are readonly — changing the values of w and h won't have any effect. So just the fact that…

### CASE-2668 · last-child not working
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ```html <ul bind:clientWidth> <li>1</li> <li>2</li> <li>3</li> </ul> ``` ![image]([link]) ### last-child not working ``` ul > li:last-child { // not working } ```

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2605 · `binding_property_non_reactive` false positive when binding to a store array item
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍1 💬6 · open
- **Excerpt**: ### Describe the bug Back in [link]][ref], which was ultimately solved through [link]][ref], there were some false positives when binding to store properties. The PR solved the cases ```svelte <Child bind:value={$a.value} /> <Child bind:value={$b.nested.value} /> ``` but, as it turns out, there is at least one other case, which I hit today when I started migrating my largest Svelte app: ```svelte <script> const store = writable({ list: [{ x: 1 }] }) </script> {#each $store.list as item} <Input bind:value={item.x} /> ^^^^^^^^^^ `bind:value={item.x}` is binding to a non-reactive property…

### CASE-2612 · Svelte 5: Adding local event handler to elements with spread props looks like a pitfall
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · open
- **Excerpt**: ### Describe the bug Imagine that you have a component like this: ```svelte <script> const props = $props(); </script> <input {...props}> ``` Now you want to add some local logic and add an event: ```svelte <input {...props} oninput={() => /* ... */}> ``` This will break all usage sites which also specify `oninput`. In Svelte 3/4 this was never an issue because events were forwarded explicity. The change would just be this: ```diff - <input {...$$restProps} on:input on:...> + <input {...$$restProps} on:input={() => /* ... */} on:input on:...> ``` _I don't think this very good_, and the…

### CASE-2619 · Svelte 5: Two-way-binding of superforms $formData is broken if passed as arg in render snippet
- **Principles**: P-G4, P-E3 · **Env**: svelte, react, typescript
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hi, I can pass the superforms $formData state as arg in the @user formField($formData) snippet. Everthing works so far. The data is displayed correctly in the form. But if I enter a new value for the url field, it is immediately reset to the original value. It looks as if the two-way reactivity is broken in the snippet and the DOM is rerendered with the original values. ### Reproduction Minimal code snippet ```typescript // FormRoot.svelte <script lang="ts"> import { superForm, } from 'sveltekit-superforms' import { valibot, valibotClient } from…

### CASE-2624 · Svelte 5: TypeError: null is not an object (evaluating 'metadata.parent') when assigning value to $bindable
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Everything works as expected, until calling select on a result. I get the error `TypeError: null is not an object (evaluating 'metadata.parent')` from `get_owner` when assigning `place = result`. `console.log`ing result gives me a `Proxy({...result})` Tried with `result.id` and `results.find(...)` but same error, I think its localised to the actual assigning part. ### Reproduction ```javascript <script lang="ts"> let { place = $bindable() }: { place: Place | null } = $props(); let query: string | null = $state(null); let results: Place[] = $state([]); $inspect(place)…

### CASE-2630 · [Svelte 5] Mutating non-bound props lead to undefined behavior (`$binds` rune proposal)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Given a parent: ```svelte <Child {value} /> ``` And a child that can mutate its `value` prop: ```svelte <script> let {value} = $props() $inspect(value) </script> <input bind:value /> ``` Updating the value in the child will skip $inspect but will properly update `value` (see reproduction) The documentation reads > Props cannot be mutated, unless the parent component uses bind:. During development, attempts to mutate props will result in an error. The behavior described above is not raising an error during development. However, I believe this should be enforced at compile…

### CASE-2631 · [Svelte 5] Bindings to nested fields are not immediately reactive when the target is a class field.
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Bindings for nested fields are reactive when the target is a standalone value, but not immediately reactive when the target is a class field. ### Reproduction [REPL]([link]) ```svelte <script> let val = $state({x: {y: ''}}); class Value { x = $state({y: ''}) } const obj = new Value() </script> <div> reactive: <input bind:value={val.x.y} /> {val.x.y}</div> <div>semi-reactive: <input bind:value={obj.x.y} /> {obj.x.y}</div> ``` Note that the 2nd binding is semi-reactive - if you change the value in 2nd input, nothing happens, until you also change the value in the 1st input.…

### CASE-2635 · $lib alias is not being created in .svelte-kit/tsconfig.json
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Hello! Whenever you create a new project using TypeScript and nothing else (but may be happening for other combinations), the generated `tsconfig.json` file does not include `$lib`. ### Reproduction ```ps md SvelteTest cd SvelteTest npm create svelte@user ``` At this point hit ENTER to use the current directory, then select the skeleton option, then select TypeScript, then don't select anything else. ```ps npm i ``` At this point, examine `.svelte-kit/tsconfig.json`: ```json { "compilerOptions": { "paths": {}, "rootDirs": [ "..", "./types" ], "importsNotUsedAsValues":…

### CASE-2636 · Persistent Store Value not being displayed in Select on reload when selecting objects
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Persistent Store value gets updated via `<select>`, and stored also to localStorage, as a persistent store. However, on reload `<select>` shows as empty. Select is selecting from a list of objects. **Issue is with persistent store only** going from: `export const selectedLanguage = persistedStore('selectedLanguage', {language: "arabic", isLatin: false});` to `export const selectedLanguage = writable({language: "arabic", isLatin: false});` works as expected `Issue is with select only`, if adjacent elements using store are are placed right next to select, value is displayed…

### CASE-2637 · Preselect of radio button doesn't work
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When the page of an element is displayed with a form(wich can be modified), the radio button is not preselected (the bind:group doesn't work). After a click on the radio button, it's good again but not a the first time, no preselection possible. Not blocking but it's not usable ### Reproduction Yes ### Logs _No response_ ### System Info ```shell Windows ``` ### Severity annoyance

### CASE-2638 · Getting Uncaught (in promise) TypeError: tr is not a function while form submit
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I have integrated a contact form using svelte. The form is submitted properly from local system and I am able to display all the error and success message. Also the `update()` function is calling properly. **But when I deploy and created a build on AWS CDK (Lambda serverless).** The form is able to submit but `update()` function is working and the success message is showing after the form submit. Here I am using **'@user/adapter-auto'** adapter to deploy it on AWS. I used the same codebase from svelete official doc. Here is my code: ![code_screen]([link]) Here is the form…

### CASE-2641 · Inconsistency between Svelte Repl and actual Svelte
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug So first I though maybe I was doing something wrong (And maybe I am) But I noticed that this works on Svelte Repl but not on Svelte. [link] While that works on Repl and we see the option with id 2 been selected by default, when using the exact same code in Svelte this doesn't happen, and instead `Please select an option...` is selected. This can be solved in Svelte by changing the `bind:value` on the select element to a `bind:this` and the on change using `selectedId.value` to get the newly selected element. Anyone know why this inconsistency happens? (I'm guessing it's…

### CASE-2644 · input vs. Input: Inconsitant one-way binding behaviour
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug In our project, we encountered the problem that input elements show different behavior than our input components when it comes to updating the input value. I have created a small example in REPL to explain the problem. 1. open REPL, then in example 1.... 2. change both input values, for example 'Foobar'. 3. click the button The click handler will do a self assignment of `obj = obj`. I would expect both input fields to display the same value afterwards, but that is not the case. The input element still contains `foobar`, while the input component contains the value of obj…

### CASE-2672 · value for keyed select tag doesn't work when options are updated
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** The selected value is known oncreate, but the <option> values are added later. The selected value isn't set when they are added. This problem is like [ref] but for `value` instead of `bind:value`. **To Reproduce** [link] You will see `three` on the select element **Expected behavior** You should see `two` on the select element **Severity** This is annoying but there is a workaround described on [link]][ref][ref]

### CASE-2675 · Svelte does not update the DOM as expected when binding an input to a reactive/computed property
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍3 💬6 · closed · labels: awaiting submitter/stale-bot
- **Excerpt**: **Describe the bug** Hey guys! I am failing to understand why this tweak to the starter example doesn't "work". Since it feels like it should, I'm filing it as a bug, but it might well just be my lack of understanding (and in that case, my apologies!)! ``` <script lang="ts"> export let name: string; $: title = `Hello, ${name}!` function updateName(e: MouseEvent) { console.log(`Clear name`) name = "" } </script> <main> <h1>{title}</h1> <p>Visit the <a href="[link]>Svelte tutorial</a> to learn how to build Svelte apps.</p> <input bind:value={title} /> <button…

### CASE-2677 · Setting value on input works only first time
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** I have this code: ```svelte <script> let value = "0"; function set() { value = ""; } </script> <div> <input {value} on:input={set} /> </div> ``` It's supposed to clear input each time when user tries to type something. It actually clears input for the first time, but then it stops clearing and user becomes able to type everything he wants. **Logs** No logs were emitted :smile: **To Reproduce** REPL: [link] **Expected behavior** Input must be cleared each time user types something. **Severity** It's kinda annoying. :smile:

### CASE-2682 · binding wrongly invalidates value that doesn't depend on it
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: bug/awaiting submitter/stale-bot
- **Excerpt**: Consider the following : ```html <script> const object = { property : 'string' } $: value = object.property </script> <input bind:value /> ``` svelte rightly compiles it down to : ```js function input_input_handler() { value = this.value; $$invalidate(0, value); } ``` now add a button that mutates `object.property` on click ```html <button on:click={() => (object.property = 'string')}> ``` and svelte will wrongly also invalidate `object` at input ```js function input_input_handler() { value = this.value; ($$invalidate(1, value), $$invalidate(0, object)); } ``` which will in turn trigger the…

### CASE-2683 · Reactivity inconsistent for a reactive reference
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** I have 2 components, a parent and a child. Both lookup an array value in a store. They both do this through a reactive reference. ```html </script> import { fruits, selected } from './store.js' $: selectedFruit = $fruits[$selected] || {}; </script> <input type="text" bind:value={selectedFruit.name} /> ``` The input on the parent component will update the value in the store while the child component does not. **To Reproduce** A full working example of the issue can be found here: [link] **Expected behavior** The expected outcome would either be: 1. For the child component…

### CASE-2684 · <input> elements in an {#if} that depends on the input value do not fire on:input before they disappear
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · open · labels: feature request/temp-stale/documentation
- **Excerpt**: **Describe the bug** When you create an input that can be removed because of an if clause around it that depends on the input value, the last `on:input` event of the <input> is not fired because it seems to disappear too quickly. **Logs** ![Console log showing only three outputs]([link]) **To Reproduce** Minimal example: Remove the text in the input field character by character. For the last input event (the last BackSpace keystroke), no event is fired and `onInput` is not called. [link] **Expected behavior** Before the input field disappears, one last input event is fired and `value: ` is…

### CASE-2688 · Inconsistent behaviour when setting input binding value to `undefined`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: **Describe the bug** The initial rendering of the undefined value results in an empty input. Assigning a bound input value to `undefined` makes the input display the text `undefined`. Not sure if this is a bug, but it the behaviour feels inconsistent. **To Reproduce** Made a small repl: [link] **Expected behavior** The assignment of an undefined value would work like null assignment (input displays empty). Or if this is undesired it would be nice if the initial rendering would also display `undefined` so that its more obvious that assigning undefined values is the wrong thing to do.…

### CASE-2696 · ReferenceError: data is not defined
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: Using `let:data` from a custom component, and then using `data` inside a loop along with `<select bind:value={anything}>` tries to wipe-out `data` too! See the example on the REPL: [link] Invalidation calls are: ```js $$invalidate('selected', selected); $$invalidate('data', data); // `data` is not defined ```

### CASE-2700 · refresh options in select element
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: I have `<select>` input, with selected value binded and populated. When "option" array is loaded via ajax, svelte can't show selected item from list: repl: [[link]]([link])

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2606 · Unused CSS selector "*" when only using root pseudo class selector to set CSS variables
- **Principles**: P-A5, P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍2 💬6 · open
- **Excerpt**: ### Describe the bug A component with a `<style>` block that only uses `:root { }` to specify CSS variables will log a warning for an unused CSS selector: ``` 2:02:11 AM [vite-plugin-svelte] src/lib/component.svelte:89:1 Unused CSS selector "*" ``` It seems like every component's CSS has an implicitly added `* {}` at the bottom of its CSS. All components in my app include the `* {}`. Only the component that uses `<style>` for specifying root vars flags the `* {}` as unused. Somehow the magic behind the scenes `* {}` is flagged as used for any components with CSS selectors and properties. ###…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2607 · Svelte 5: `$inspect` make `$effect` run syncronously
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug If you add an `$inspect` that is listening on a variable that is also listening on an `$effect` the `$effect` is run syncronously instead of the next microtask. ```svelte <script> let count = $state(0); function increment() { count += 1; console.log("in-increment", count); } $effect(() => { console.log("effect", count); }); $inspect(count); </script> <button onclick={increment}> clicks: {count} </button> ``` on click it will log ``` effect 1 update 1 in-increment 1 ``` ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell repl ``` ### Severity…

### CASE-2608 · Svelte 5: using `bind:this` in `$derived`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍0 💬6 · open · labels: documentation
- **Excerpt**: ### Describe the bug ```svelte <script lang="ts"> let a: HTMLParagraphElement; let b: HTMLParagraphElement | undefined = undefined; </script> <p bind:this={a} bind:this={b}></p> ``` ```ts // Variable 'a' is used before being assigned.ts(2454) const a2 = $derived(a.children); // Property 'children' does not exist on type 'never'.ts(2339) const b2 = $derived(b?.children); ``` ```ts // let a2: HTMLCollection $: a2 = a.children; // let b2: HTMLCollection | undefined $: b2 = b?.children; ``` ### Reproduction See above. ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.6.1 CPU:…

### CASE-2614 · false positive a11y warning for label with control inside component
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: a11y
- **Excerpt**: ### Describe the bug The `a11y_label_has_associated_control` warning yields false positives in the case where the control is inside a component: ```svelte <script> import Input from './Input.svelte'; </script> <label> <Input /> </label> ``` We should omit the warning if a component exists inside the label. ### Reproduction [demo]([link]) ### Logs _No response_ ### System Info ```shell next ``` ### Severity annoyance

### CASE-2616 · 5.0.0-next.140 blocks pre-render capabilities of $effect.pre()
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Prior to [ref], `$effect.pre()` could be used to update a variable before the browser rendered it. For instance: ``` <script> let numbers = $state('') $effect.pre(() => { numbers = numbers.replace(/[^0-9]/g, '') }) </script> <input type="text" bind:value={numbers} /> ``` This would prevent non-numeric input, both in the variable, and in the browser UI. The Svelte 4 equivalent was: ``` $: numbers = numbers.replace(/[^0-9]/g, '') ``` But starting in 5.0.0-next.140, non-numeric input will first "flash" in the browser before being removed. This would be expected with…

### CASE-2617 · svelte-ignore regression on Svelte 5
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug With Svelte 4, it was possible to ignore two a11y checks within one comment like this: ```html <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions --> ``` It does not work anymore. To work around, you need to have two html comments: ```html <!-- svelte-ignore a11y_click_events_have_key_events --> <!-- svelte-ignore a11y_no_static_element_interactions --> ``` ### Reproduction 1. Create this component ```html <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions <md-menu-item…

### CASE-2629 · Svelte 5 context module export class with state rune error
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Exporting a class with a state rune from a .svelte file using a context="module" script causes compilation errors in some cases. ![image]([link]]/assets/162224/57954ab9-60c1-458c-8f7e-bf865e0f2d39) ### Reproduction - git clone [link] - cd svelte_5_context_module_bug - npm install - npm run check Error: $state() can only be used as a variable declaration initializer or a class field (svelte) export class Foo { value = $state() } **Additional info:** These are the steps I took: I created a new project using npm create svelte@user my-app Skeleton project Typescript syntax…

### CASE-2634 · `autocomplete="webauthn"` attribute for <input> element causes false positive autocomplete A11y warning
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: linux
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug Using "webauthn" or combinations with "webauthn" as first token ("webauthn username" or "webauthn current-password") on an <input> element causes the false positive A11y warning. Change the order ("username webauthn"/"current-password webauthn") shadows these misbehaviour. The "webauthn" token is required for the "conditional UI" feature: [link] ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.2 Fedora Linux 38 (KDE Plasma) CPU: (16) x64 AMD Ryzen 7 6800HS Creator Edition Memory: 2.56 GB / 13.32 GB Container: Yes Shell: 5.9 -…

### CASE-2639 · Aliases for certain type of key press events
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬6 · closed · labels: a11y
- **Excerpt**: ### Describe the problem I get this a11y message all the time when I put a `on:click` on an element that isn't normally clickable. It says I also need to have a `on:keydown` etc... so if someone is navigating with their keyboard, it will still work. The problem is the code for this is extremely verbose: ```ts on:click={clickHandler} on:keydown={(e:KeyboardEvent) => { if(e.key === 'Enter') return clickHandler(e) }} ``` Yes, it is possible to write an abstraction that would cut down on it a bit, but then everybody's creating different solutions to the same issue. ### Describe the proposed…

### CASE-2645 · Functions in reactive statements do not invalidate variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍11 💬6 · closed
- **Excerpt**: ### Describe the bug If a function is called in a reactive statement `$:` and changes the value of other variables, these variables won't be invalidated and the reactivity chain won't be called for them. If the change is made in place (without calling other functions), it works fine. Not sure why a function call makes that big difference, I wouldn't expect it 😕 Thanks in advance for the help 😄 ### Reproduction The issue is reproduced in the following REPL: [link] The component is a counter and adds one to the `count` variable every time the button is pressed. As soon as the limit (4) is…

### CASE-2648 · Unexpected Reactive Variable Triggered
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When using a `<select>` element with its value binded to a variable, any references to reactive variables as values within an `<option>` element will unexpectedly trigger an update, even though no assignment was made. ### Reproduction **Example 1:** [link] **Example 2:** [link] In both examples, the variable `a` or a iteration of it is referenced as the value of the `<option>` element, but is never assigned - the console log is triggered nonetheless. If the `<select>` element is no longer bound to `b`, the bug disappears. The bug remains whether the `<option>` element…

### CASE-2651 · Add support for "focus-visible"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, svelte
- **Signals**: 👍0 💬6 · open
- **Excerpt**: ### Describe the problem `:focus-visible` pseudo selector throws a console warning when used in style blocks. ``` [vite-plugin-svelte] /.../components.svelte:188:0 Unused CSS selector ".button.focus-visible" ``` The error is coming from vite-plugin-svelte, but I think it is originating in the compiler. Could be wrong. Either way, it's valid CSS that works as expected. But the console is getting a bit noisy. ``` // example: button:focus-visible { outline: blue; } ``` Thanks for your consideration. ### Describe the proposed solution I don't have a deep understanding of the source of the issue,…

### CASE-2652 · Inefficient code created for hydration of static components
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍9 💬6 · closed · labels: perf
- **Excerpt**: ### Describe the bug If there's a big block of static HTML or even the entire component is static, the Svelte compiler still creates a separate variable for every element when `hydratable: true`. Compare to when `hydratable: false` and it will just set the entire block with `innerHTML`. This results in worse time-to-interactive on blogs with large posts using MDSveX, which is a fairly common use case - though this example is a particularly large one. This is yet another reason we would benefit from something like `repair: false`: [link]][ref][ref] ### Reproduction [link] Turn the `hydratable`…

### CASE-2656 · Bug with SSR and Hydration (Probably Caused by `@user`)
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: windows, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Using multiple `{@user variable}` can make SvelteKit behave strangely. Essentially, the application is first SSR rendered into the correct state, then the hydration kicks in and incorrectly mutates the state. This means that the app flickers and that the resulting state is incorrect. ### Reproduction [link] ### Logs ```shell - ``` ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (4) x64 Intel(R) Core(TM) i5-2500K CPU @ 3.30GHz Memory: 1.64 GB / 7.97 GB Binaries: Node: 14.16.0 - C:\Program Files\nodejs\node.EXE npm: 6.14.11 - C:\Program Files\nodejs\npm.CMD…

### CASE-2662 · Reassigning variable used as action should be reactive and destroy old action
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬6 · closed · labels: feature request/compiler
- **Excerpt**: ### Describe the bug When I change a function in `use:action` to something else, destroy neither executes nor adds the other action. Putting an item in `#key` helps. Actually, I'd like to be able to replace a function in `use:action` without a `#key`, because `#key` is a more drastic solution than simply executing `destroy` and adding a new action. ### Reproduction Described example: [link] 1. Click "remove action" in First case - does nothing and should execute `destroy`. 2. Click "remove action" in Second case - When you use `#key`, `destroy` is executed. ### Logs _No response_ ### System…

### CASE-2669 · Unexpected store invalidation inside each block / select tag
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** If you put an array inside a store, then assign an item from that array to a variable and use both in _select_ tag (or very likely in any similar _each_ block) then you will unexpectedly get the store invalidated even though it was not modified during the loop. This causes side-effects which break the functionality (see REPL link below). **To Reproduce** Please see the issue at [link] The first select works fine and allows you to choose any of 2 options. The second select does not allow you to choose another option. It is stuck on "item 2". **Expected behavior** Both…

### CASE-2670 · Axe accessibility issues on Svelte docs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** When running the axe accessibility checker on [the docs]([link]), it identifies multiple accessibility issues: - [ ] [ARIA hidden element must not contain focusable elements]([link]) (91 count). This seems to mostly be on the permalinks next to each heading. Is there a reason we don't want the permalinks accessible to screen readers? I generally think of the W3C specs as having well-thought-through accessibility and [they do not hide permalinks]([link]) from assistive tech. ```html <a href="#aria-hidden" aria-label="Permalink for aria-hidden (state)" title="Permalink for…

### CASE-2671 · value is undefined in select_options and causes error when spreading object into a <select multiple> with bind:this or bind:value
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬6 · closed · labels: bug
- **Excerpt**: ## Describe the bug Various combinations of `{...}` spread and `bind:` together seem to cause the value that gets passed to `select_options` to be `undefined`. I'm not _exactly_ sure what the common thread is between these cases, but the following cases appear to be different manifestations/variations of the same bug. What all of these cases have in common appears to be: - they happen only with `<select multiple>` - they happen when it's trying (in `select_options`) to select the `option`s corresponding to the given array `value` - they have at least 1 spread (`{...something}`) - they have at…

### CASE-2678 · How to reference variable in css ?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Assuming I have the following example code, is there any way I can pass the `bgcolor` to the div and reference it in the css ? ```html <script> let bgcolor = 'red'; </script> <style> .container { background: 'black'; /* Maybe something like this ?? */ /* background: bgcolor; */ } </style> <div class='container' {bgcolor}> Some text here. </div> ``` Also I found that CSS attr() function is not working, is it normal ?? ```html <style> /* styles goes here */ p { color: attr(data-color); } </style> <p data-color='red'>This is a paragraph.</p> ```

### CASE-2680 · Compilation fails when using two bind:this to array/object with same key
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: Compilation fails when using two bind:this to array/object with same key Error msg: `Variable 'xxx' already initialised with a different value` Bug (version 3.20.1) [link] Bug didn't exist in version 3.10.1 (haven't checked other versions tho): [link] Note that this bug occurs when there is more than 1 component, if using 1 component it works. Edit 1: This bug occurs both when using destruction in `each` and without using it

### CASE-2681 · undefined value on input and other elements
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬6 · closed · labels: bug/compiler
- **Excerpt**: **Describe the bug** The value prop behaves differently in various situations. Suppose we have a variable `let value = undefined`. If you use it on an input element with two-way binding `<input bind:value />`, the value is not set (this is the correct behavior, it got fixed in [link]][ref]). If you use it on an input element like this: `<input {value} />`, the input elements value property is set to the string 'undefined' (not the attribute). If you use it on any other element, like: `<option {value} />`, the value attribute is set to "undefined". **To Reproduce** [link] **Expected behavior**…

### CASE-2685 · on:click "Cannot read property 'apply' of undefined"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: **Describe the bug** Click handler throws an exception if handler function is stored as a variable **and** that variable is set somewhere in the `<script>` section. We found this while attempting to fix [ref] via PR [ref]. **To Reproduce** See repl: [link] The exceptions started occurring from `v3.13.0` onward. Using same repl with older compiler produces expected results (no exceptions): [link] **Expected behavior** Click event shouldn't do anything (i.e. no exception). **Severity** Low; though it does violate the expectations for events on normal DOM elements. **Additional context**…

### CASE-2687 · Svelte generates code referencing undefined variables like div_nodes
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: Hi. I'm trying to use ESLint on the final IIFE `.js` that Svelte generates, in order to get the `no-undef` lint (usage of undefined variable). <details> <summary>.eslintrc.js</summary> ```js module.exports = { parserOptions: { ecmaVersion: 2019, sourceType: 'module', }, env: { es6: true, browser: true, node: true, }, plugins: [ 'svelte3', '@user/eslint-plugin' ], overrides: [ { files: ['**/*.svelte'], processor: 'svelte3/svelte3', extends: "eslint:recommended", }, { files: ['**/*.js'], rules: { "no-undef": "warn", }, }, ], } ``` </details> This gives me: ```text /path/to/bundle.js 1668:43…

### CASE-2689 · Spread Props in Component removes Reactivity
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, react, svelte
- **Signals**: 👍8 💬6 · closed · labels: bug
- **Excerpt**: **Describe the bug** Using the spread operator in a #each loop in variable deconstruction and use the spread props feature along side other explicit props, makes the explicit props not reactive. **Logs** See REPL **To Reproduce** [link] There is a comment in the FieldSet.svelte component indicating how to remove the {...props} from being adding props to the component. Removing that will make reactivity work again. To see it work properly, you can set this to version 3.6.7 **Expected behavior** I expected to be able to use spread props along side explicit props and that everything is reactive.…

### CASE-2691 · Unexpected Update Calls
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: **Describe the bug** `beforeUpdate` is called twice when using `bind:this` to the same variable in logic blocks. Even though `afterUpdate` is schedule to be called after the last `beforeUpdate` it isn't **UPDATE:** Exists even if bound to two different variables **Logs** REPL log ``` > Before null > After <button class="ui button"> > Before <button class="ui button"> ``` **To Reproduce** [link] (same variables) [link] (different variables) **Expected behavior** If a single cycle isn't achieved, it should complete the cycle ``` > Before null > After <button class="ui button"> > Before <button…

### CASE-2692 · Infinite loop with {#async}
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** `{#async}` block causes an infinite loop, like so: 1. Call a function `func` in `{#await func()}` 2. Inside function `func`, assign to a variable outside of the function's scope 3. Use that variable inside the `{:then}` block 4. `func()` will now be called in an infinite loop. **To Reproduce** 1. Go to: [link] 2. Open your console. **Expected behavior** - Async function to be called once **Severity** Well our users don't like their browsers in infinite loops.

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2609 · Error when appending hydration error to head.
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When attempting to append a hydration error to the head in the `print_error` function. sometimes the payload is of an incorrect shape leading to an exception. I added a `console.log({payload});` directly above ``payload.head.out += `<script>console.error(${JSON.stringify(message)})</script>`;`` and included the logs. you can see when the error is thrown payout is a string "hr" instead of the expected object. I can also say this isnt new, its been happening for months, but with HMR i have been able to ignore it since this page isn't a landing page its hardly ever hit with…

### CASE-2628 · Hydration markers inside JSON-LD script tag break it
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug # JSON-LD script issue I want to have a JSON-LD script in the head of my page. I'm using the `<svelte:head>` and `<svelte:element>` tags to do this. Basic example in the [`src/routes/+page.svelte`]([link]) file. ```svelte <script> const json_ld = { '@user': '[link] '@user': 'Organization', name: 'Your Organization Name', url: '[link] logo: '[link] }; </script> <svelte:head> <svelte:element this="script" type="application/ld+json"> {@user JSON.stringify(json_ld)} </svelte:element> </svelte:head> <h1>Welcome to SvelteKit</h1> <p> Visit <a href="[link]>kit.svelte.dev</a> to…

### CASE-2663 · @user directive hydration bug
- **Principles**: P-F4 · **Env**: linux, svelte
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Describe the bug This bug is difficult to describe in prose, I recommend looking at the reproduction first. When a `{@user myContent}` directive is used after two conditions `{#if}`, the content isn't rendered on the client-side. The content is still rendered on the server causing the content to blink. As showed in the reproduction, the issue only arise when the `myContent` isn't wrapped in html tags, which is normally supported in svelte. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.11 Pop!_OS 21.04 CPU: (8) x64 Intel(R) Core(TM) i7-8550U…

### CASE-2667 · Wrong server-side rendering of attributes when value is `true`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** When passing a `true` value to a custom data attribute (e.g. `data-active`) in SSR, it renders `data-active=""`. **To Reproduce** ```svelte <script> let content = true; </script> <div data-active={content}></div> ``` **Expected behavior** I'm only expecting an attribute to be rendered as `attr=""` when the value passed to it is `true` if it's a boolean attribute. In the case of any other attribute, `attr="true"` should be rendered instead (as it is when using DOM rendering). **Stacktraces** It's easy to see the origin of the problem, at…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2610 · Determine if empty, null or undefined children is passed
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Hi guys. Would like to know if this is an expected behavior of `children` in svelte 5. Given the code below ```svelte <!-- error-message.svelte --> <script lang="ts"> import type { SvelteHTMLElements } from 'svelte/elements'; import { twMerge } from 'tailwind-merge'; let { class: className, children, ...props }: SvelteHTMLElements['div'] = $props(); </script> {#if children} <div class={twMerge('mt-1.5 block font-roboto text-xs text-[rgba(255,37,37,0.70)]', className)} {...props} > {@user children()} </div> {/if} <!-- login.svelte --> <FormGroup> <FormLabel…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-2611 · Svelte 5: The `on` function types do not allow it to be used with `MediaQueryList`
- **Principles**: P-A2, P-A4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter/types / typescript
- **Excerpt**: ### Describe the bug Related to [link]][ref] If this is a deliberate limitation, it's worth mentioning it in the [documentation]([link]). Otherwise, it should be possible to use on with objects other than `HTMLElement`. ### Reproduction ``` <script lang="ts"> import {on} from 'svelte/events' $effect(() => { const matchMedia = window.matchMedia('(min-width: 1024px)') on(// <<< Argument of type 'MediaQueryList' is not assignable to parameter of type 'HTMLElement'. matchMedia, 'change', (event: MediaQueryListEvent) => { console.log(event) }, ) }) </script> ``` [link] <img width="856" alt="image"…

### CASE-2693 · Lobotomized owl CSS selector broken
- **Principles**: P-A2, P-A4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: I like to use a pattern of a CSS flex-box with whildren evenly spaced using the [lobotomized owl]([link]) selector. My CSS looks like this: ```css .user-section { display: flex; } .user-section > * + * { margin-left: 4px; } ``` Svelte compiles it into this: ```css .user-section.svelte-1aasoha { display: flex } .user-section>*+.svelte-1aasoha { margin-left: 4px } ``` The right eye of the owl is replaced with the unique Svelte-generated selector id for the flexbox. I expected the unique id to be appended to the flexbox selector before the `>` part of the selector. Is the id just naively…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2615 · Anchor Tags Triggering Old URLs in Android Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, android, ios 15, desktop
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug [link]]/assets/27078637/f9a35e91-198d-4fd5-9ef0-0861e4b74af5 I used a translator for this. Regarding relative paths `../`, `./` and absolute path `/`: Sometimes, `page.url.pathname` fetches an old path. I'm not sure how to reproduce this issue accurately. (Code is included) Occurrences: - This issue occurs in Android Chrome when navigating to parent directories using anchor tags. Non-occurrences: - This issue does not appear in desktop browsers (Edge, Chrome). - No such symptoms have been observed in iOS 15.4. ### Reproduction [link] ### Logs _No response_ ### System Info…

### CASE-2620 · Using `this` alias breaks reactivity
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When using an alias for `this` in a Class with runes, setting a state using the alias breaks the signal. ### Reproduction [REPL]([link]) Try to undo something on the 2nd example ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.4 CPU: (8) arm64 Apple M2 Memory: 86.95 MB / 24.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.6.2 - /usr/local/bin/node npm: 10.2.4 - /usr/local/bin/npm pnpm: 8.15.4 - /usr/local/bin/pnpm bun: 1.0.29 - ~/.bun/bin/bun Browsers: Safari: 16.5 ``` ### Severity annoyance

### CASE-2622 · Svelte 5: Adding a delay param to svelte transitions causes the node to immediately appear for the duration of the delay
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, svelte
- **Signals**: 👍9 💬6 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug Adding a delay param to svelte transitions in svelte 5 causes the node to immediately appear for the duration of the delay. After this period the node disappears and starts its transition. Removing the delay param fixes this issue. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Browser: Chrome Version 123.0.6312.122 (Official Build) (arm64), m1 mac Locally: "svelte": "5.0.0-next.110" ``` ### Severity blocking an upgrade

### CASE-2626 · trying to render a derived value throws
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, macos
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug - create a thread - view the thread - share a thought (A) - reply to the thought - reply to main thread - click 'View whole thread' on `A` - result: an error is thrown console logging shows that there is a value <img width="1440" alt="image" src="[link]]/assets/55116576/b6878a6d-a446-4b7c-9756-524584fdc465"> see: [link] ### Reproduction see: [link] ### Logs ```shell [Error] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'ctx[2].children') flush (chunk-J6N3ENYP.js:1322) ``` ### System Info ```shell tested on Safari, macOS Sonoma ``` ###…

### CASE-2627 · Svelte 5 ($state): reference by name in an object's method skips proxy and reactivity
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, macos, svelte, react
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Using reference by name in methods of a `$state` object will skip proxy and reactivity. If methods can't use a reference by name, this severely limits usability beyond >1 level down. ### Reproduction [Svelte 5 Repl Link]([link]) ### Logs _No response_ ### System Info ```shell System: OS: macOS 10.15.7 CPU: (6) x64 Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz Memory: 8.77 GB / 40.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 20.11.0 - /usr/local/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 7.10.0 - ~/node_modules/.bin/npm Browsers: Chrome: 121.0.6167.85 Firefox: 121.0.1…

### CASE-2632 · fix `::selection` in chrome
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬6 · open · labels: documentation
- **Excerpt**: ### Describe the bug I'm tiered of re-writing and reporting the same issue to multiple services about the use of root variables inside of `::selection` So i'm just going to link to same github issue that explains it: [link] [link] it's very annoying to not be able to select anything. ### Reproduction always in chrome with exp flag. ### Logs _No response_ ### System Info ```shell chrome ``` ### Severity annoyance

### CASE-2633 · $: reactive statement ignored during beforeUpdate
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, react
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Describe the bug $: reactive statements are ignored if values are modified in beforeUpdate. ### Reproduction Solve [link] and add ``` $: { console.log("autoscroll", autoscroll) } ``` You'll see that nothing will be logged. If you add some variable changes like ``` let st = true $: { console.log("autoscroll", autoscroll) st = !st } ``` you'll see they don't change ### Logs _No response_ ### System Info ```shell [link] on Chrome ``` ### Severity Pretty serious bug

### CASE-2640 · Danger suggestion in basic recommendations
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, safari 16, svelte
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When you have `<video>` tag in your component we have suggestion to add `<track>` inside as recommended. But from [support table at MDN]([link]) you can find that Safari doesn't support `<track>` Actually WebRTC video doesn't work in safari if you have `<track>` inside. ### Reproduction Unfortunately don't have now. Already fixed on prod ### Expected behaviour Remove that recommendation, or say that it's dangerous to use it in svelte. ### System Info - OS: Safari 16 ### Which package is the issue about? svelte-check ### Additional Information, eg. Screenshots _No response_

### CASE-2649 · `{@user ...}` tag is populated too late
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬6 · open · labels: compiler
- **Excerpt**: ### Describe the bug Bear with me, this is a bit of an edge case. If you have code like [this]([link])... ```svelte <script> let h = 0; const html = '<div style="height: 50vh"></div><div style="height: 100vh; background: salmon"><h3 id="foo">this should be at the top of the page</h3></div>'; </script> <div bind:clientHeight={h} /><main>{@user html}</main> ``` it will compile with `hydratable: true` to this: ```js /* omitted */ l(nodes) { div = claim_element(nodes, "DIV", {}); children(div).forEach(detach); main = claim_element(nodes, "MAIN", {}); var main_nodes = children(main);…

### CASE-2658 · Store object binding on component
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Binding nested object of a store -on component- causes an extra reactivity call (at initialization once) Ver: 3.44.3 ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Microsoft Edge Version 89.0.774.63 (Official build) (64-bit) ``` ### Severity blocking all usage of svelte

### CASE-2659 · <iframe on:load> does not trigger in all browsers
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chromium, linux, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug iframes should trigger the [onload event]([link]) when they are finished loading, however in at least some browsers, an event handler for that event fails to trigger. I have tested the following configurations: - Linux, Firefox, Svelte: works - Linux, Chromium, Svelte: doesn't work - Linux, Firefox, SvelteKit: doesn't work - Linux, Chromium, SvelteKit: doesn't work The results were the same using `npm run dev` and `npm run start`/`npm run preview`, and also in the Svelte REPL. I'm holding back on also reporting in the SvelteKit repo, as I was able to reproduce this using…

### CASE-2660 · Svelte bind:this does not give proper working inside onMount body
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: windows, svelte, webkit
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug After importing Svelte component manually, there are issues retrieving the HTML element with the 'bind:this' binding. After using it inside the onMount function body, the page should be fully loaded and the value 'should' be available. After using a setTimeout block, the issue seems to be resolved. Issue found after using svelte extension; [link] Seems broken from version=3.18.2 ### Reproduction [link] ![image]([link]) ### Logs _No response_ ### System Info ```shell [link] version=3.44.1 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)…

### CASE-2665 · transition flickers because delay is applied too late
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 90, svelte
- **Signals**: 👍0 💬6 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** I played around with the [Animations]([link]) example from Svelte Society's [Cheatsheet]([link]) and I noticed a flickering in the animation. It seems the animation starts, and only after it started it applies the delay causing it to stop again. [link] If the delay is deleted, the jitter is gone. [link] **To Reproduce** 1. Open [Animations]([link]). 2. Click "Cycle". Notice the flickering. 3. Delete the delay in L9. 4. Click "Cycle". Notice the flickering is gone. **Expected behavior** No flickering. **Information about your Svelte project:** - Browser: Chrome 90.0 - OS:…

### CASE-2673 · Handling of @user in textarea tags
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox 82, chrome 86, opera, windows, svelte, webpack
- **Signals**: 👍0 💬6 · open · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** Svelte compiler fails to handle {@user} inside `<textarea>` tags **Logs** No output in browser console. Compiler throws error `Unexpected character '@' (7:11)` **To Reproduce** [link] **Expected behavior** The compiler compiles the code successfully, the output `<textarea>` contains the child HTML elements in the string. **Stacktraces** N/A **Information about your Svelte project:** - Your browser and the version: Firefox 82, Chrome 86 (doesn't matter) - Your operating system: Windows 10 (doesn't matter) - Svelte version: 3.29.4 - Whether your project uses Webpack or…

### CASE-2679 · Events happen in a different order in Chrome vs Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox
- **Signals**: 👍3 💬6 · closed · labels: awaiting submitter/stale-bot/temp-stale
- **Excerpt**: **Describe the bug** In an input with a `bind:value` and an `on:input`, the binding is updated before the input event handler fires in Chrome. In Firefox, it's the other way around. This can lead to observable discrepancies. Via [link] **To Reproduce** TODO simplify this REPL [link] **Expected behavior** Both should log 'a' then 'b' *or* both should log 'b' then 'a' (not actually sure which off the top of my head) **Severity** Medium-rare

### CASE-2686 · {#if} inside {#await} doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 70, linux, svelte
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: **Describe the bug** Having an `{#if}` inside of an `{#await}` using a resolved object from `{:then}` fails. **Logs** `ReferenceError: object is not defined` **To Reproduce** [link] **Expected behavior** it should render the if block **Information about your Svelte project:** - Firefox 70.0.1 - Manjaro GNU/Linux - 3.16.0 **Severity** It is blocking my app from upgrading.

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2647 · Binding to store on select element doesn't work with on:input event.
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬6 · open · labels: browser specific
- **Excerpt**: ### Describe the bug In the event listener of input event of select which bind to store value, if the value of the same store but different property was changed, the bind itself doesn't work at all. 1. Create a store with object: i.e. `const s = writable({a:0, b: 0})` 2. Create a `<select>` element with `bind:value={$s.a}` and `on:input={()=>$s.b++}`. 3. Change select element's value. It won't change the `$s.a` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.5 CPU: (20) arm64 Apple M1 Ultra Memory: 46.50 GB / 128.00 GB Shell: 5.8.1 - /bin/zsh…

### CASE-2694 · Audio elements not unmounted correctly in tutorial?
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug/stale-bot
- **Excerpt**: Just making a note of something that got flagged up in Discord: > I noticed something while going through the Svelte Tutorial and I am not sure if it is a bug, or by design. In the section called Module Content | Sharing Code [link] There are a few audio players. > After going through that tutorial and on to the next one, I wanted to turn my music back on, so I pressed the play button on my Keyboard (Using iMac with the apple keyboard.) The odd thing was, that it happened to resume playing from the audio components that previously had been loaded in the Svelte Tutorial page. > Is this by…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2657 · Abuse of Javascript implicit type conversion in compiled code
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug Here `dirty` is an array: [link]]/blob/5a8851436fd881f894e6eaab9f46d92340e12111/src/runtime/internal/scheduler.ts#L104 And it's used like `$$self.$$.dirty & 1` here: [link]]/blob/ebaa891e69c184cf44c0fcd54984ec84d13236fa/test/js/samples/reactive-values-non-topologically-ordered/expected.js#L14 ### Reproduction See tests in links above. Use a breakpoint on the line with `$$self.$$.dirty` to confrim this issue. Debugger is kind of ununsable on REPL. ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

