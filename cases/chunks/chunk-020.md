# Case Chunk 020 — Round 20

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2901 · SVG data attributes cause error in Edge
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: Hi, This example does not work in Edge: [link] The problem was the attribute `data-name`. By removing it, I got the component to work in Edge. The error it gave was "Cannot set name on undefined or null reference". TLDR: SVGs in components with data-xxx attributes seem to not work in Edge. See here for why: [[link]]([link]) ``` <p class="footer-text"> <svg class="footer-cart" xmlns="[link] data-name="This attribute destroyed X-mas!" viewBox="0 0 55.8 48.6"> <title> cart_outline </title> <path class="cls-1" d="M54.8 16.3H13.6a1 1 0 0 1 0-2H54.8a1 1 0 1 1 0 2Z" ></path> <path class="cls-1"…

### CASE-2916 · Update from Svelte 5.43.3 to latest one (5.43.10) causing freezes on load data re-render (#each)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When my data gets rendered and it contains animate:flip it's causing this error: Invalid keyframe value for property transform: matrix(1, 0, 0, 1, 0, 18) translate(NaNpx, NaNpx) scale(NaN, NaN) Here's the repo: [link] It actually freezes whole website causing me to not be able to click anywhere and eventually chrome will just asks if i want to wait or shut it off, but even after I removed the animate:flip there's still issue with the freezing. I don't know what's going on under the hood really, but this code wasn't causing issues in the Svelte 5.43.3 PS: Never written an…

### CASE-2919 · Using a $state variable in an inner object of derived strips reactivity
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, safari, macos, react, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hello, It appears that when creating an object with $derived that contains an inner object where a field is from a $state variable, the access is no longer reactive. ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 14.6.1 CPU: (16) arm64 Apple M3 Max Memory: 30.92 GB / 128.00 GB Shell: 4.0.2 - /opt/homebrew/Cellar/fish/4.0.2/bin/fish Binaries: Node: 24.1.0 - /opt/homebrew/bin/node npm: 11.3.0 - /opt/homebrew/bin/npm pnpm: 10.15.1 - /opt/homebrew/bin/pnpm Browsers: Chrome: 140.0.7339.133 Safari: 17.6 npmPackages: svelte: ^5.39.3 =>…

### CASE-2922 · Using spread props with range input breaks reactivity
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Using spread props breaks the reactivity of the `step` attribute. This may be a part of a larger issue, although I could not find a duplicate issue that matches. You can fix it by wrapping the input in `{#key step}`. ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell Binaries: Node: 22.13.0 - C:\Program Files\nodejs\node.EXE pnpm: 10.13.1 - ~\AppData\Local\pnpm\pnpm.CMD Browsers: Chrome: 138.0.7204.158 npmPackages: svelte: ^5.36.13 => 5.36.16 ``` ### Severity annoyance

### CASE-2938 · False positive ownership_invalid_binding?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug I've encountered the ownership_invalid_binding warning while working on a Svelte 5 project. Reading the [documentation]([link]) was not helpful in fixing this issue. Can you help me? ### Reproduction [REPL]([link]) ### Logs ```shell ``` ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (18) x64 Intel(R) Core(TM) Ultra 5 125H Memory: 4.40 GB / 15.74 GB Binaries: Node: 22.11.0 - C:\Program Files\nodejs\node.EXE npm: 10.9.0 - ~\AppData\Roaming\npm\npm.CMD Browsers: Edge: Chromium (131.0.2903.99), ChromiumDev (133.0.3014.0) Internet Explorer: 11.0.26100.1882 ```…

### CASE-2941 · $inspect shows empty state object using Classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬4 · open · labels: documentation
- **Excerpt**: ### Describe the bug If a Class contains only $state runes, e.g. ``` class A { sa = $state('$inspect shows empty') } export const a = new A() ``` $inspect shows an empty obj. Whereas if it contains methods, etc., $inspect has more information. Is this expected? ### Reproduction [Playground]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.26100 Binaries: Node: 22.11.0 - C:\Program Files\nodejs\node.EXE npm: 10.9.0 - C:\Program Files\nodejs\npm.CMD pnpm: 9.15.3 - C:\Program Files\nodejs\pnpm.CMD Browsers: Edge: Chromium (131.0.2903.86) Internet Explorer:…

### CASE-2953 · Svelte 5: `import.meta.env` crashes app if `meta` prop exists
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug In Svelte 5, using `import.meta.env` crashes the application if there is a prop named `meta` in the component. The same issue happens with `import.meta.glob`. Firefox says: `Uncaught (in promise) TypeError: import.meta is not a function` Chrome says: `Uncaught (in promise) TypeError: (intermediate value) is not a function` When this error happens, my SvelteKit site shows a blank page. ### Reproduction REPL: [v4.2.19]([link]) / [v5.1.13]([link]) This is a minimum version of my `<MetaTags>` component. With Svelte 4, REPL says just `undefined` but that’s fine, my code has no…

### CASE-2957 · Svelte 5: async function attached to an element inside `each` call breaks updates and fails to `reconcile` [Adobe UXP]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug I have several sets of actions designed as tabs. Inside one of tabs there is a set of elements with `onclick` actions that call an inner async Photopshop API function. The set is rendered with `{#each}` block. After the click the action is performed OK, the result is returned, but tab switching breaks. From that moment on the call to `each` in `reconsile` cannot find `get_key` function. ### Reproduction It's rather an edge case, because I could only replicate it in Adobe UXP environment and only when an async action in question is a call to Adobe Photopshop host API, and…

### CASE-2958 · `transition:` and indexed `{#each}` block race condition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: edge
- **Signals**: 👍0 💬4 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug I found a very weird edge case that only seems to happen when a lot of unusual conditions align (indexed each, transitions, timings, focus...). Here is a very minimal "autocomplete" implementation: <img src="[link] alt="" width="200"/> When one suggestion is clicked, new suggestions appear by calling this replacement snippet `list.set(['three', 'four'])` **expected:** <img src="[link] alt="" width="200"/> **actual:** <img src="[link] alt="" width="200"/> Old suggestions are not properly removed from the DOM ### Reproduction [link] Very small changes can make it work…

### CASE-2961 · [Svelte 5] get_setters: proto is null (Firefox)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Firstly, I'm not 100% sure if this combination of libraries is supported (svelte 4 libs in svelte 5). I tried to reproduce it in a normal svelte project, but I wasn't able to reproduce it there. I'm currently working on porting a browser extension over to svelte 5. In the final testing phase, I noticed that the Firefox version couldn't render any components. The chrome version worked just fine. I'm using [wxt]([link]) as the browser extension framework and [shadcn-svelte]([link]) and [lucide icon]([link]) for basic components/icons. All of them are still using svelte 4.…

### CASE-2964 · Element resize listening via <iframe> causes cryptic SecurityErrors
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, svelte, webkit, mobile
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug I am encountering this error in my Sentry logs: ``` SecurityError: Blocked a frame with origin "[link] from accessing a cross-origin frame. Protocols, domains, and ports must match. ``` A snapshot of the error is available [here.]([link]) Here's what I've found so far: - It's linked to the `<iframe>` resize listeners used by Svelte. - It only seems to occur in Webkit-based browsers (Safari, Mobile Safari, etc.). - No clear indication of the cause, as an iframe with `about:blank` as `src` should adhere to the same-origin policy and avoid CSP errors. [Link to the relevant…

### CASE-2965 · Button has to be tapped twice on iOS (svelte5)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox/, chrome, ios, windows, svelte
- **Signals**: 👍0 💬4 · closed · labels: browser specific/blocked by upstream
- **Excerpt**: ### Describe the bug This is a very strange bug. The script below does not fire `on:click` when tapping "Button 1" on Safari on iOS. Only when tapping a second time the assigned alert message pops up. The Problem does NOT occur if ANY of the following conditions is met: * one of the `div`s which are enclosing "Button 2" is removed * I move to svelte 4 * The `on:click` of Button 2 is removed * Another OS is used (tested in Windows Firefox/Chrome) ### Reproduction unfortunately the problem is not reproducable on svelte-5-preview.vercel.app. But the Problem can be easily reproduced by starting a…

### CASE-2979 · "node is null" when manipulating an array state in a Snippet
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug When re-arranging an array state which is displayed inside an {#each} block via a snippet it does trigger an error saying "node is null". The bug disappear if I remove the key parameter in the each block or if I don't use the snippet. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.4 CPU: (12) arm64 Apple M2 Max Memory: 8.70 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.6.1 - ~/.nvm/versions/node/v20.6.1/bin/node npm: 10.1.0 - ~/.nvm/versions/node/v20.6.1/bin/npm bun: 1.1.13 - ~/.bun/bin/bun Browsers: Chrome:…

### CASE-2982 · Reactivity not working on safari v12.5.7
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, ios, react, svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug (re-opening of [link] because it was misunderstood and incorrectly transferred to sveltejs/learn.svelte.dev). Variables do not update and no reactivity-related feature works, on ios safari with software version 12.5.7. By not working I mean nothing changes when the variables are supposed to update. Here is a screen recording of the behaviour on ipod. The button flashing is when I clicked on the button: ```svelte <script> let count = 0; function increment() { count += 1; } </script> <button on:click={increment}> Clicked {count} {count === 1 ? 'time' : 'times'} </button>…

### CASE-2992 · [svelte 5]: `value` should be assigned and cleared here
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox, svelte
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug I'm trying Svelte 5 for the first time today. [This is a reproduction of this issue]([link]). **PLEASE USE CHROME** since Firefox does not emit `onchange` event. As you can see if I select a date from the picker the `{value}` is not assigned and the same if I press the "Clear" button. Why? ### Severity blocking an upgrade

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2902 · Potentially catch input type assignment for older browsers?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: The new input types are great for progressive enhancement in HTML because if an old browser doesn't support them it just renders a `type="text"` input, which is perfect. Unfortunately, doing this doesn't work in svelte because (at least in IE9) the `input.type = 'search'` assignment will throw an error. If it doesn't make things too filthy it might be nice to try to catch this assignment and fall back to text, but I totally understand if this is considered out of scope and not worth doing. ![inputtypesearch]([link]) As always, thank you for everything!

### CASE-2915 · Css attribute pruning is not case insensitive
- **Principles**: P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed · labels: css
- **Excerpt**: ### Describe the bug ```svelte <script lang="ts"> import { logout } from "./logout.remote"; </script> <!-- Adding this form element --> <form {...logout}></form> <!-- 1. Does not add `svelte-*` class name in build output --> <form method="GET"> <h1>Hello, World!</h1> </form> <style lang="postcss"> /* 2. Disables the following warning: */ /* Unused CSS selector "form[method="get"] :global" */ form[method="get"] :global { h1 { color: red; } } </style> ``` In `vite preview`, the markup is: ```html <form method="POST" action="?/remote=" class="svelte-1uha8ag"></form> <form method="GET"><h1>Hello,…

### CASE-2918 · Function bindings broken in async component
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Since 5.43.0 function bindings are throwing various errors in async components. ### Reproduction [REPL]([link]) ```svelte <script> await 1; let value = $state(''); function getValue() { return value } function setValue(v) { value = v } </script> <input bind:value={getValue, setValue} /> ``` ### Logs ```shell Cannot read properties of undefined (reading 'f') in <unknown> in __wrapper.svelte ``` ### System Info ```shell Svelte playground ``` ### Severity blocking an upgrade

### CASE-2921 · When not in runes mode, updates to runes in another file that reference a dynamic Svelte component don't work
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug We have a class (call it FormManager) in a .svelte.js file. The class has a $derived field which indicates the component for the "current step" of the form. ```typescript import Step1 from './Step1.svelte'; import Step2 from './Step2.svelte'; export class FormManager { steps = $state([ Step1, Step2 ]) currentIndex = $state(0) CurrentComponent = $derived(this.steps[this.currentIndex]) } ``` We have another component which renders the current step: ```svelte <script> import { getContext } from 'svelte'; let manager = getContext('formManager'); </script> <p>Step…

### CASE-2924 · input bind doesn't work as expected since 5.36.0
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug There is a number input where the minimum and maximum values limit the number. When the user enters a number less or greater than the limits, the value will be set to the minimum or maximum value. It works fine in versions 5.35.6 and earlier. ### Reproduction It works fine here: [link] But it failing here: [link] ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 15.5 CPU: (14) arm64 Apple M3 Max Memory: 143.45 MB / 36.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.14.0 - ~/.nvm/versions/node/v22.14.0/bin/node npm: 10.9.2 -…

### CASE-2928 · Cannot spread class instances as props
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Since Svelte pushes for the use of JS classes, it seems like I would also want to be able to spread them as I do with objects. Currently, it just doesn't work. There are workarounds, such as arrow functions or `.bind(this)` (examples in the REPL). Would like clarification on whether any of these methods are recommended. ```svelte <script> import Child from './Child.svelte' class Counter { count = $state(0) constructor(input) { this.count = input } onAdd() { this.count++ } } const counter2 = new Counter(0) </script> <h2>❌ spread props</h2> <Child {...counter2} /> <hr />…

### CASE-2929 · Reactivity inside $effect is confusing
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug $effect not executes. ### Reproduction ```svelte <script> let form = $state({ name: "", }); $effect(() => { setTimeout(() => console.log($state.snapshot(form))) }); </script> <input type="text" bind:value={form.name} /> ``` ### Logs ```shell ``` ### System Info ```shell It's executed on Svelte Playground. ``` ### Severity annoyance

### CASE-2934 · onchange doesnt fire when onchange and onkeydown used together for an input
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When I use onchange and onkeydown together in react, both onchange and onkeydown fire but in svelte onchange is firing only if I click outside of the input element. ### Reproduction [svelte demo]([link]) [react demo]([link]) ### Logs ```shell ``` ### System Info ```shell svelte repl ``` ### Severity annoyance

### CASE-2936 · Read-only bindings require getter function, even though it should be irrelevant
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬4 · open
- **Excerpt**: ### Describe the bug E.g. you will need something like ```js <input bind:this={() => {}, input => { ... }} /> ``` Maybe `bind:this={null, input => { ... }}` or some other flavor should be possible? ### Reproduction ```svelte <script> let value = $state(); $inspect(value); </script> <input value="test" bind:this={null, e => value = e.value} /> ``` [Playground]([link]) ### Logs ```shell ``` ### System Info ```shell REPL ``` ### Severity annoyance

### CASE-2939 · Svelte 5.19.5 breaks reactivity, Svelte 5.19.4 works fine
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug In Svelte 5.19.4 reactivity works fine, but in 5.19.5 it's failing. [link] vs [link] ### Reproduction [link] Use case: Typing login name and password enables Login button. In Svelte 5.19.5 it doesn't work: When I enter the login name and password, the Login button remains disabled. After I select the login name input field and type it again, the Login button becomes enabled. Expected: When I enter the login name and password, the Login button becomes enabled. It works fine in Svelte 5.19.4 ### Logs ```shell ``` ### System Info ```shell Svelte Playground ``` ### Severity…

### CASE-2940 · Unable to make `...rest` prop bindable
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug As per [this documentation]([link]), I am trying to create a wrapper around a `<select>` element, but unlike the examples, I want to forward the bindable-ness of the values to the inner component. However, when I try to bind to any attributes in `...rest`, I get the warning: `Cannot use 'bind:' with this property. It is declared as non-bindable inside the component. To mark a property as bindable: 'let { value = $bindable() } = $props()'ts(2322)`. When I try to write `...rest = $bindable()`, I get a number of errors: * `Unexpected token [link] * `A rest element cannot…

### CASE-2942 · Improve documentation or example for `vitest`
- **Principles**: P-G4, P-E3 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug The documentation describes how to use runes in a `vitest` (see [link]([link])). However it isn't very obvious how to get the example working because the sources of `multiplier.svelte` and `multiplier.svelte.ts` are missing. With the help of @user [discord]([link]) the following seems to work: ```ts <script lang="ts"> // file: src/routes/multiplier.svelte import { multiplier } from "./multiplier.svelte.js"; let { a, b }: { a: number; b: number } = $props(); </script> <h1>Multiplier</h1> <p> <input type="number" bind:value={a} /> x <input type="number" bind:value={b} /> =…

### CASE-2946 · `bind:value` with function bindings don't work well with the input caret when value is changed in set
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Not sure if this is a bug, but it's a bit annoying. Consider this scenario: - the original value from an `<input type="text">` is changed in `set` (as in the example from the [docs]([link])), - the caret is not at the end Then after `set` is called, the caret will be positioned at the end. The expectation here would be to have a "on-the-fly correction" of the value being typed. The caret should not change position. ### Reproduction Minimal example here: [link] Type any lowercase letter the beginning. After that I would expect that the caret would be at second position…

### CASE-2951 · No known conditions for "./elements" specifier in "svelte" package
- **Principles**: P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍2 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Utilizing the svelte 5 i receive ths error when i run "pn dev" in my bash. I received the suggestion of a dwongrade for Svelte 4. Would it help? ### Reproduction ``` No known conditions for "./elements" specifier in "svelte" package [plugin vite:dep-scan] script:/myProject/src/lib/components/Input.svelte?id=0:19:7: 19 │ import 'svelte/elements' ╵ ~~~~~~~~~~~~~~~~~ This error came from the "onResolve" callback registered here: node_modules/.pnpm/[email]/node_modules/esbuild/lib/main.js:1150:20: 1150 │ let promise = setup({ ╵ ^ ``` ### Logs _No response_ ### System Info…

### CASE-2963 · Migration of certain reactive blocks results in infinite loop
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug ```svelte <script> let number = 0; let changes = 0; $: number, changes++; </script> Number: <input type='number' bind:value={number}><br> Changes: {changes} ``` migrates to ```svelte <script> import { run } from 'svelte/legacy'; let number = $state(0); let changes = $state(0); run(() => { number, changes++; }); </script> Number: <input type='number' bind:value={number}><br> Changes: {changes} ``` which results in an infinite loop since `changes` is both read from and written to in the `run()` block. A better thing to migrate to in this case would be `number, untrack(() =>…

### CASE-2974 · White spaces in code highlights are not always preserved
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When trying to highlight a string containing a `<script>` tag, the whitespaces are **not always** preserved. The advices from [ref] don't work either Input ```js <Highlight code={` <script lang="ts"> let count = $state(0); function inc(){ count++; } function dec(){ count--; } </script>`} ``` Output ``` <script lang="ts">let count = $state(0); function inc(){ count++; } function dec(){ count--; } </script> ``` ### Edit I have no clue what triggers this, toggling the component just above impacts how white space is managed in the highlight: [link] ### Reproduction I didn't…

### CASE-2978 · Svelte 5: <select>s don't properly set their initial value if the option value is an object
- **Principles**: P-G4, P-E3 · **Env**: linux, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If you have a `<select>` with option values set up as objects, it works fine unless you have some initial state set up, in which case it just defaults to selecting nothing. ### Reproduction [link to repl]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.9 Crystal Linux CPU: (16) x64 AMD Ryzen 7 7840HS w/ Radeon 780M Graphics Memory: 14.12 GB / 27.21 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 22.3.0 - /usr/bin/node npm: 10.8.1 - /usr/bin/npm pnpm: 9.4.0 - /usr/bin/pnpm bun: 1.1.17 - /usr/bin/bun ``` ### Severity annoyance

### CASE-2984 · Svelte 5: confusing behaviour with syntactically invalid attribute expressions
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug Given input like this (note the extra `}` characters)... ```svelte <button onclick={() => console.log('hello')}} another={'hello'}} > click </button> ``` ...Svelte thinks the attribute is a string rather than an invalid expression. In the first case, it results in an error: > Event attribute must be a JavaScript expression, not a string In the second, it turns it into a string, incorrectly. ### Reproduction [link]([link]) ### Logs _No response_ ### System Info ```shell next ``` ### Severity annoyance

### CASE-2985 · Svelte 5: setting input value to an object property, updating a store, and using the store value in the template causes input to be reset
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Certain combinations stop the input value being set (or cause it to be re-set). Svelte 5 in native or Svelte 4 compatibility mode. Removing the `<p>{$count}</p>` makes the input work Removing the `on:input={() => count.update(x => x + 1)}` makes the input work Changing the `value={obj.value}` to use a local string value makes it work Note: `bind:` is not used for input value ### Reproduction Type into the input box. Note the text entered is not registered. Weirdest ... use `on:input={() => count.set(0)}` and it works, but use `on:input={() => count.set(1)}` (or any other…

### CASE-2993 · Svelte 5: Bug - $state is not properly updated when another $state is modified inside class
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I am trying to create a form validator, and I encountered a bug when it does not change the $state of `values` on **the first keypress** inside `<CustomInput/>` This is smallest code that reproduce that bug: ```svelte <script> import CustomInput from './Input.svelte'; class Form { values = $state({name:''}); errors = $state({}); getProps(name) { return { oninput: (e) => { this.errors[name] = "something" }, error: this.errors[name], }; } } let form = new Form(); </script> <CustomInput bind:value={form.values.name} {...form.getProps('name')} /> ``` ```svelte <!--…

### CASE-2998 · Svelte 5: bind:group causes a crash on svelte:element with `this="input"`
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When using a svelte:element with its `this` set to "input" bind:group crashes with the error `'group' binding can only be used with <input>`. I also just realized that throwing an error is overreacting and causes unsolvable issues. for example imagine you have a dynamic component that uses svelte:element, and then you are trying to forward props like "group" that is bindable; this is impossible since svelte:element doesn't allow that unless its `this` is set to an element like "input" explicitly; If I only wanted to use an input element then why would I even use…

### CASE-3000 · Svelte 5: cmdk-sv started breaking on 5.0.0-next.55
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug somehow i cant use [link] on latest version 5.0.0-next.55 since it was working with 5.0.0-next.53 i think i should raise it here or probably just need to update that lib ### Reproduction 1. start a svelte 5.0.0-next.55 and download npm install cmdk-sv ``` <script lang="ts"> import { Command } from 'cmdk-sv'; </script> <Command.Root label="Command Menu"> <Command.Input /> <Command.List> <Command.Empty>No results found.</Command.Empty> <Command.Group heading="Letters"> <Command.Item>a</Command.Item> <Command.Item>b</Command.Item> <Command.Separator />…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2903 · Backtick/grave (`) in component breaks SSR render method
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: When a backtick/grave accent is used in a component, and one uses `generate: 'ssr'`, the output function breaks due to the `render()` method using backticks to allow for a multi-line string. This also appears to fail with the HTML escaped representation of the grave (`&[ref];`) as svelte evaluates it back to a backtick. Smallest failing example: ```html <code> const url = `${protocol}://duckduckgo.com` </code> <!-- OR --> <code> const url = &[ref];${protocol}://duckduckgo.com&[ref]; </code> ``` Output: ```js MyComponent.render = function ( root, options ) { root = root || {}; return…

### CASE-2905 · `preserveWhitespace: true` emits a duplicate `children` property, silently discarding an explicit `{#snippet children}`
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Under `preserveWhitespace: true`, the whitespace surrounding a `{#snippet}` inside a component tag is serialized as *implicit* default-slot content. That emits a spurious `children` property into the component's props object — and when the component also has an explicit `{#snippet children}`, a **duplicate `children` key**. Being the later key in the same object literal it wins, so the explicit snippet is silently discarded and the component renders the whitespace instead. The failure is silent: no warning, no runtime error, no hydration mismatch — the subtree simply…

### CASE-2913 · Falsy component produces Internal error
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Although Svelte documentation [states]([link]) that a falsy value is acceptable and the component simply doesn't render, in SvelteKit a falsy value results in an error. ### Reproduction [link] +page.svelte ```svelte <script> let Component = $state(); </script> <h1>Falsy component test</h1> <Component/> ``` Console: ```bash [500] GET / TypeError: Component is not a function at eval (src/routes/+page.svelte:19:4) at Renderer.child (node_modules/svelte/src/internal/server/renderer.js:198:18) at Renderer.component (node_modules/svelte/src/internal/server/renderer.js:223:22)…

### CASE-2917 · Bug Report: Namespace import (`import * as X`) breaks hydration
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍3 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When importing for example Bits-UI components via a namespace import like: ```ts import * as Sheet from '$lib/components/ui/sheet'; ``` any attempt to render a component (for example `Sheet.Root`) causes SvelteKit to fail hydration. The component is treated as `null`, which leads to a hydration mismatch. Using named imports fixes the issue: ```ts import { Root as SheetRoot, Trigger as SheetTrigger, Content as SheetContent } from '$lib/components/ui/sheet'; ``` **Expected behavior** Namespace imports should be fully supported and should not result in invalid component…

### CASE-2925 · 🐛 Bug Report: `$state(await ...)` causes component hydration failures and breaks parent contexts
- **Principles**: P-F4 · **Env**: macos, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug 🐛 Bug Report: `$state(await ...)` causes component hydration failures and breaks parent contexts ### **Environment** - **Svelte version**: `[link] (Svelte 5 pre-release) - **SvelteKit version**: `[link] - **Browser**: [Your browser] - **OS**: macOS ### **Description** Using `await` inside `$state()` causes hydration mismatches that break parent component contexts, leading to undefined CSS custom properties in floating UI components and broken component state across navigation. ### Reproduction ### **Steps to Reproduce** 1. Create a layout with a provider context (e.g.,…

### CASE-2947 · svelte:element this={"script"} hydration_mismatch
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug Hydration_mismatch error appears to be related to `<svelte:element this={"script"} type="application/ld+json">` ### Reproduction default sv blank project, no addons ```html <!-- +page.svelte --> <svelte:head> <title>Expect flash</title> <svelte:element this={"script"} type="application/ld+json"> {"{}"} </svelte:element> </svelte:head> <div> Expect page to flash then no css. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut magni aperiam quod, adipisci quas temporibus atque voluptas quis magnam repudiandae? Laborum deserunt magni error quos modi eaque,…

### CASE-2981 · hydrate and mount error out in browser, saying 'hydrate(...)' is not available on the server
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have a .js file which I am sending to the browser to do hydration. It looks something like ``` import { hydrate } from 'svelte'; async function hyd() { const path = window.location.pathname; const importComponent = routes[path] || routes['/']; const { default: Component } = await importComponent(); const app = hydrate(Component, { target: document.getElementById('content'), hydrate: true // Enable hydration }); } hyd(); ``` I am bundling it with rollup, where my config looks like: ``` const browserScriptsForAddingInteractivityToSSRPages = { input:…

### CASE-2989 · TS doesn't compile
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug upgrading sveltekit project to use latest vite-plugin-svelte ts files do not compile ### Reproduction run repo locally, and get build errors ``` Error when evaluating SSR module /src/lib/components/index.ts: failed to import "/src/lib/components/Form.svelte" |- CompileError: Unexpected token `}`. Did you mean `&rbrace;` or `{"}"}`? at e (file:///workspaces/Finanzen/node_modules/.pnpm/[email]-next.126/node_modules/svelte/src/compiler/errors.js:56:8) at Module.js_parse_error…

### CASE-2990 · [Svelte 5.0.0-next.121 + Bits-UI] Blank UI and SSR issues
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I'm not quite sure what happens, but using bits-ui + [email]-next.121 starts breaking while with 5.0.0-next.120 it works. [link]]/assets/12464600/18b8454e-ee79-458d-99c2-43a15b2cdc09 ### Reproduction [link] ### Logs ```shell [svelte] hydration_mismatchHydration failed because the initial UI does not match what was rendered on the server ``` ``` Uncaught (in promise) TypeError: Cannot destructure property 'elements' of 'getCtx9(...)' as it is undefined. at Menu_trigger (bits-ui.js?v=7b87a2de:28631:21) at Object.fn (chunk-PDGKK6TR.js?v=7b87a2de:136:44) at…

### CASE-2995 · Svelte 5: Beta.83 broke ssr = false in Svelte Kit
- **Principles**: P-F4 · **Env**: svelte, react
- **Signals**: 👍11 💬4 · closed
- **Excerpt**: ### Describe the bug After upgrading, any +page.server.ts that's using `ssr = false` breaks with this error in the browser. ``` chunk-PTS77Q44.js?v=2fd6e186:254 Uncaught (in promise) TypeError: Cannot read properties of null (reading '0') at Module.first_child (chunk-PTS77Q44.js?v=2fd6e186:254:13) at Root (root.svelte:39:21) at chunk-FX7V52GR.js?v=2fd6e186:970:5 at execute_reaction_fn (chunk-PTS77Q44.js?v=2fd6e186:1120:15) at execute_effect (chunk-PTS77Q44.js?v=2fd6e186:1240:22) at schedule_effect (chunk-PTS77Q44.js?v=2fd6e186:1302:7) at create_effect (chunk-PTS77Q44.js?v=2fd6e186:406:5) at…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2904 · Doesn't like commented out CSS
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: It appears that commented out CSS causes problems ... I.e. ```css /* table { }*/ td { font-size: 14px; font-family: Arial; } ``` The Arial/14px doesn't work unless I delete the table class.

### CASE-2912 · `toStore` and reactive variables (legacy)
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · open · labels: documentation
- **Excerpt**: ### Describe the bug Stores created with `toStore` show inconsistent behaviour when passed as a prop togther with and without the state it was initialized with. ```svelte <!-- Parent --> <!-- If use the input we will observe no reactivity in the child component. --> <script> import { toStore } from "svelte/store" import Child from './Component.svelte' let state = $state({ nested: "Nested Text" }) </script> <p>Change me: <input bind:value={state.nested} /></p> <Child store={toStore(() => state)} {state}></Child> <!-- Child --> <!-- However if we uncomment the commented out code in the child…

### CASE-2926 · Reactivity issue in v5.36.0
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: macos, react, svelte
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug After upgrading from v5.35.7 to v5.36 - I'm getting many similar issues related to reactive variables not updating input values. Reactive variables (`$state`, `$bindable`) when bound to input value, and updated programmatically are not updating input values. When the same value is printed in a div - it is updated correctly. e.g.: ```svelte {value} <!-- this updates --> <input bind:value /> <!-- this doesn't --> ``` see example in the link below. ### Reproduction [link] ### Logs ```shell no errors ``` ### System Info ```shell System: OS: macOS 15.5 CPU: (12) arm64 Apple M4…

### CASE-2930 · $effect runs before $effect.pre
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug The parent's `$effect` runs before its `$effect.pre`, when the child component inserts a new input and shifts focus, which triggers `expanded` change in the parent. ```svelte <script> let expanded = $state(false); $effect(() => { expanded; console.log("run effect", expanded); }); $effect.pre(() => { expanded; console.log("run pre-effect", expanded); }); let inputBar; $effect(() => { if (expanded && inputBar) setTimeout(() => inputBar.focus(), 400); }); import Component from "./Component.svelte"; </script> {#if expanded} <input bind:this={inputBar} onblur={() => (expanded…

### CASE-2948 · Local styles aren't scoped when nested
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug/css
- **Excerpt**: ### Describe the bug Say I have an element in a component that needs to depend on its parent's state. I might write something like this: ```svelte <div class="tint"></div> <style> :global(*):hover > .tint { opacity: 0.08; } </style> ``` Now let's say I want to also account for focus. To prevent repetition, I might nest my styles: ```svelte <div class="tint"></div> <style> :global(*) { &:hover > .tint { opacity: 0.08; } &:focus-visible > .tint { opacity: 0.12; } } </style> ``` However, Svelte outputs CSS that works differently across these cases. It works correctly for the first one by…

### CASE-2954 · Incorrect CSS Output for :not() Selector
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍4 💬4 · closed · labels: css
- **Excerpt**: ### Describe the bug In the following example, the `&:not([aria-expanded])` selector does not get applied. ```html <script> import Item from "./Item.svelte"; </script> <div> <Item class="item">Item</Item> </div> <style> :global(.item) { border: 1px solid; &:not([aria-expanded]) { border-style: dashed; } } </style> ``` This is due to a bug in the CSS output. ```css .item { border: 1px solid; &:not(/* (unused) [aria-expanded]*/) { border-style: dashed; } } ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Not necessary ``` ### Severity annoyance

### CASE-2955 · Svelte 5 backwards compatibility: Assigning store from props to local variable does not update subscribers
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug We have the following situation: Component receives a store via prop `a`. The component also has a local variable `b` which is assigned the value of `a` in response to some event. However when this happens anything that accesses `$b` does not get updated. I've simplified the situation in the repl linked below and what stood out to me is that `b` is not initialized as `$.mutable_state()`. So this might be less about stores and more about `b` not being detected as mutable. Interestingly it works within a single component. --- In our real world example we receive an…

### CASE-2959 · Svelte5 5: VSCode Migrator adding $state rune to bind:this variables
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug Have component that binds textarea to variable for use on afterMount ``` <script lang="ts"> import { onMount } from 'svelte' export let autofocus = false let textarea: HTMLTextAreaElement onMount(() => { if (autofocus) { textarea.focus() } }) </script> <textarea bind:this={textarea}></textarea> ``` This is being converted into this: ``` <script lang="ts"> import { onMount } from 'svelte' interface Props { autofocus?: boolean; } let { autofocus = false }: Props = $props(); let textarea: HTMLTextAreaElement = $state() onMount(() => { if (autofocus) { textarea.focus() } })…

### CASE-2967 · Identifier has alreay been declared error when naming a type the same as a variable in svelte5 script
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug cant have smae name as variable ... after using [@user/[email]-next.6]([link]) ``` src/routes/+page.svelte:4:12 Identifier 'data' has already been declared src/routes/+page.svelte:4:12 2 | import Counter from '$lib/Counter.svelte'; 3 | type data = {} 4 | export let data; ^ 5 | </script> ``` ### Reproduction URL ``` <script lang="ts"> import Counter from '$lib/Counter.svelte'; type data = {} export let data; </script> ``` <h1>Hello {data.name}!</h1> <Counter count={5} /> ### Reproduction [link]([link]) ### Logs ```shell - ``` ### System Info ```shell - ```

### CASE-2972 · `untrack` not working as expected in `derived.by`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug I have a variable which i conditionally want to change or not. If some condition is true i don't want the value to be updated. Without using untrack it makes sense a recursion occurs, because of the self reference. But i would have expected untrack to stop the recursion. ```js let count = $state(0); let disabled = $state(false); let even = $derived.by(() => { if (disabled) return untrack(() => even); return count % 2 === 0; }) ``` Is this a bug or am I missing something? ### Reproduction [link] Click a few times on the button or just press Disable then an error `Error:…

### CASE-2973 · Svelte 5: Some boolean attributes are incorrectly rendered with `<svelte:element>`.
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug Related to [link]][ref] and [link]][ref]. [link]][ref]/files#diff-87ec8cbb1aa898b9a6bc0e9dde2e355df357844becd562b80386d0bf4713b57fR344-R345 - there are other HTMLElement properties. Here's a possibly incomplete list: * [autofocus]([link]) * [draggable]([link]) * [hidden]([link]) * [inert]([link]) * [isContentEditable]([link]) (the related HTML attribute `contenteditable` has more values) * [spellcheck]([link]) * [translate]([link]) Either way, new properties / attributes will be added over time. ### Reproduction [Reproduction link]([link]) <img width="1548" alt="image"…

### CASE-2977 · Add input validation to binded variable
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem ### The issue: Values bound to input elements have different behavior regarding validation. A variable bound to an input of type "number" can return a number or null while all other input types return a string --- ### Examples Given the following code ```svelte <script lang="ts"> type Nullable<T> = T | null | undefined; let textValue: Nullable<string> = $state(''); let textErrorMessage: string = $derived(textValue === null ? 'Incorrect format' : ''); let numberValue: Nullable<number> = $state(0); let numberErrorMessage: string = $derived(numberValue === null ? 'Not a…

### CASE-2986 · svelte(a11y-label-has-associated-control) shows incorrectly when using render snippet
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug The warning `A form label must be associated with a control(a11y_label_has_associated_control)(svelte/valid-compile` shows up even when the label has a render children inside. ```svelte <label> <span>{label}</span> {@user children?.()} </label> ``` ### Reproduction [link] ```svelte <script lang="ts"> import type { Snippet } from 'svelte'; interface Props { label: string, children?: Snippet } let { label, children }: Props = $props(); </script> <label> <span>{label}</span> {@user children?.()} </label> ``` ### Logs _No response_ ### System Info ```shell "svelte":…

### CASE-2991 · Svelte 5: change in DOM update behavior
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug DOM updates don't complete. My understanding is that Svelte 5, in non-runes mode, should behave like Svelte 4 but it only works when runes are used OR the variable is defined with $: syntax. Some existing code will cease functioning when updated. ### Reproduction Svelte 4: [link] Svelte 5: [link] Note the Svelte 5 version doesn't render 'hello' Svelte 5 + Runes: [link] Svelte 5 + $: syntax: [link] The problem with the $: fix is that it can introduce other incorrect behaviour by triggering an unintended re-assignment, if the initial value depended on other variables. ###…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2906 · Docs: clarify that bare `{const}` is not reactive, unlike the `{@user}` it replaces
- **Principles**: P-A5 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The [declaration-tags docs]([link]) say `{@user ...}` is legacy and to use `{const ...}` instead, but don't mention that the two behave differently. `{@user x = e}` was reactive — a `$derived` behind the scenes, the same way `{count}` updates in the template. A bare `{const x = e}` is not: it behaves like a `const` in `<script>`, evaluated once. So a `{@user}` → `{const}` rename silently drops reactivity — no compile or type error, the UI just stops updating — until it's rewritten as `{const x = $derived(e)}`. The page never says this, and its only bare-`{const}` example…

### CASE-2931 · stopPropagation does not work in Svelte 5 vs. works in Svelte 4
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi, I have a large element as a background that simulates an endless area. On top of that, individual rectangles shall be arranged by the user by dragging them. The drag handler from use-gesture handles the large element and for the individual rectangles (divs) a pointerdown handler was created, that captures the pointerdown element, sets that element into "moving" state and stops the propagation of the pointerdown event, so that the drag handler never sees it and does not start a drag event. This works in Svelte 4 but in Svelte 5 it no longer does. I DO use the new…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2907 · Async `$effect.root()`
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬4 · open
- **Excerpt**: ### Describe the problem I just realised there's no way (that I can tell) to achieve async svelte outside a component. I'd like to be able to do something like so: ```js const cleanup = await $effect.root(async () => { const data = $derived(await getData()) $effect(() => doSomethingWith(data)) }) // ... cleanup() ``` This came to mind since SvelteKit remote functions [can no longer be called at top-level]([link]), and `$effect.root()` felt like the obvious solution, but it doesn't work. ### Importance nice to have

### CASE-2910 · General reactivity issues
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug I have an example repro where I have state that is derived from another, in a debounced manner. I also have a condition that depends on a remote function `query` promise loading, its results, and said derived state. I've put that condition in a derived, and have an #if block with it. I can inspect and see that the condition changes, but the template is not consequently updated. ### Reproduction [link] Type text in the search bar. Wait a bit. Type again, without deleting the previous text. You'll see that the error does not get updated in the template as it should. ###…

### CASE-2943 · Snippets using props will error if rendered outside the component after its unmounted
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug We're trying to upgrade to Svelte 5 at my company, but we ran into this bug when trying to migrate our portals implementation. In short, the goal with portals is to allow a child component to insert one of its elements into an element of another component via an imported reference, instead of prop drilling. I'll spare you the other details and get right into the issue. **This is the bug:** First we have a file with an exported object containing a snippet: ```javascript // portals.svelte.js export let headerPortal = $state({ snippet: null }); ``` And our `App.svelte`…

### CASE-2994 · Runes + async: add (or document) idiomatic way to work with async functions and runes
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍16 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the problem In my Svelte 4 app, I keep all the logic inside stores and away from components. I found this approach to be more predictable and bug-free. [Here is an example of a derived store that updates whenever the user changes the settings]([link]), that relies on `derived(v, (v, set) => { ... })`. I don't understand how to rewrite this using runes. Using `$effect` to synchronize state this way seems like an anti-pattern, not to mention the fact that since my state logic is outside the component tree, and I'd have to manage cleanup myself with `$effect.root`. I've searched…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2908 · Add support for Map.getOrInsert and Map.getOrInsertComputed to SvelteMap
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript, react
- **Signals**: 👍7 💬4 · closed
- **Excerpt**: ### Describe the problem Upsert proposal [has reached stage 4]([link]), is now [included in esnext by typescript 6]([link])) and [supported by all major browsers]([link]). <img width="1188" height="233" alt="Image" src="[link] /> It [doesn't work]([link]) in SvelteMap out of the box ```svelte <script> import { SvelteMap } from 'svelte/reactivity' const map = new SvelteMap([[1, 'hello']]) const click = () => { map.getOrInsert(1, 'world') } </script> <button onclick={click}> {map.get(1)} </button> ``` For us it's a common pattern to do in our caches and we have to wrap it in `untrack`…

### CASE-2914 · <video> attribute not rendering muted attribute
- **Principles**: P-A3, P-H1 · **Env**: ios, svelte, mobile
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug In some scenarios this may be a serious problem, because videos without muted attribute rendered in HTML may fail to autoplay on mobile devices. ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell Svelte 5.45.6 ``` ### Severity annoyance

### CASE-2944 · Performance: `O(n^2)` time-complexity with `remove_reactions`
- **Principles**: P-A3, P-H1 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · closed · labels: perf
- **Excerpt**: ### Describe the bug I'm building a sort of very custom use-case AI dataset editor which involves rendering approximately ~80k DOM nodes. Occasionally, a full re-render is required, which leads to `remove_reactions` getting called for each "cell" in my grid I am rendering. `remove_reactions` calls `remove_reaction` `n` times, which itself, performs an `indexOf` on the dependencies, leading to terribly slow re-renders. ![image]([link]) ## Code responsible: [link]]/blob/f7f87dcc3db76987b301d8ced0ef4669f2be53ac/packages/svelte/src/internal/client/runtime.js#L440-L493 ### Reproduction ... ###…

### CASE-2950 · Svelte 5 runtime crash inside each block
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug In our crashlog system I can see the following error <img width="1305" alt="image" src="[link]> ### Reproduction Unfortunately I am unable to figure out what exactly is causing this. Will come back with repro if will catch it. But maybe someone from the maintainers could make a good guess out of the stack trace from the above. ### Logs _No response_ ### System Info ```shell Svelte 5.2.7 ``` ### Severity annoyance

### CASE-2956 · Multiple content placeholders snippet in +layout.svelte not working
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Multiple content placeholders as shown in documentation is not working as expected in +layout.svelte ![image]([link]) ![image]([link]) ### Reproduction -- ### Logs _No response_ ### System Info ```shell -- ``` ### Severity annoyance

### CASE-2960 · Svelte 5: Types are always required for snippet props if Typescript is used in any component.
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I've created a Svelte 5 project and enabled typescript. However, I'm not using `lang="ts"` in every `<script>` block. Some components' types are unimportant or can be fully inferred. Unfortunately, this one doesn't compile: ```svelte <script> let {whom} = $props(); </script> <p>Hello, {@user whom()}.</p> ``` Here's a screenshot of the error. ![image]([link]) If I fully type everything, it works: ```svelte <script lang="ts"> import type { Snippet } from 'svelte'; let {whom}: {whom: Snippet} = $props(); </script> <p>Hello, {@user whom()}.</p> ``` That's a lot of extra…

### CASE-2968 · New root component doesn't work with Map
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ![image]([link]) root component doesn't allow using map, works with object and key but Map is more performant for lookups. ### Reproduction make a map that can return a svelte component then call with new dynamic element <map.get(key) /> ### Logs _No response_ ### System Info ```shell svelte 5 ``` ### Severity annoyance

### CASE-2969 · Svelte 5 Reactivity issue with Svelte 4 code
- **Principles**: P-A3, P-H1 · **Env**: svelte, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Repro: [link] Run the app. You should see some colored boxes. As you hover over the colored boxes you should see the block of text slide around. <img width="144" alt="image" src="[link]> Instead, the text will slide once, the first time you hover over a box. Then it'll "get stuck." You can refresh the page, and (carefully) hover over a different box. You'll see the text moves to a different location, and then get stuck. There's two ways you can fix this, which should hopefully help pinpoint where the bug is. Option 1: Go into the Content component, and swap these two…

### CASE-2976 · [next.180] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'target.querySelector')
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Apologies in advance for the suboptimal repro, just started noticing this error and rendering issue when doing a client-side navigate to a page that renders `<Select>` from the `svelte-select` lib (ships its own CSS). When doing an SSR while on the target page, there is no error, so it appears to only happen when doing a client-side navigate from a page that doesn't render `<Select>` to a page that does. ### Reproduction <img width="1720" alt="image" src="[link]]/assets/92698/a3cab6bd-27e4-4f5a-9ae2-bc0d8300c61b"> ### Logs _No response_ ### System Info ```shell System:…

### CASE-2980 · [svelte5] use $state infinite loop bug > effect_update_depth_exceeded
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug my code is a loop bug when using the state function. this is code is "[link] migrate rune test mode. ![image]([link]]/assets/32185134/1c1f3d1d-1b41-46d8-b2a7-e9061452d57e) ``` ModalLib.svelte let modalState = $state(defaultState); //[WARING REPL LOOP] ``` ![image]([link]]/assets/32185134/381286eb-8625-45e0-b850-7c7acbbe26c7) ```ModalLib.svelte let modalState = defaultState; // no problem but, $state waring tooltip open ``` ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Genuine Intel(R) CPU…

### CASE-2997 · Svelte 5: svelte:element with `this` set to "textarea" has weird content and if any children are passed then a hydration error is caused.
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If you try to render a svelte:element with its `this` set to "textarea" you will notice that it has some weird content inside of it by default, and If you decide to pass any content or value to the <textarea> then a hydration error is caused which is probably because of the existence of the weird content that I just mentioned ### Reproduction ```svelte <svelte:options runes /> <script lang="ts"> </script> <svelte:element this="textarea"></svelte:element> ``` The above code will create a <textarea> like the bellow image in the DOM.…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2909 · ERROR in node:async_hooks Module build failed: UnhandledSchemeError: Reading from "node:async_hooks" is not handled by plugins (Unhandled scheme).
- **Principles**: P-D1, P-D2, P-D3, P-C1, P-C2, P-C3 · **Env**: svelte, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I am using Svelte in a local development environment for a WordPress site. On dev and build commands using Webpack 5 and Svelte 5, this error appears, and the build fails: ``` ERROR in node:async_hooks Module build failed: UnhandledSchemeError: Reading from "node:async_hooks" is not handled by plugins (Unhandled scheme). Webpack supports "data:" and "file:" URIs by default. You may need an additional plugin to handle "node:" URIs. at C:\xampp\htdocs\dev\transition65\wp-content\themes\theme-dev\node_modules\webpack\lib\NormalModule.js:1064:13 at Hook.eval [as callAsync]…

### CASE-2920 · $effect.pre doesn't have the previous snapshot of an element
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, react, vue
- **Signals**: 👍4 💬4 · open
- **Excerpt**: ### Describe the bug According to the official svelte docs, `$effect.pre` is used to run code _before_ the DOM updates, but for some reason it doesn't work consistently. This problem exists in ALL versions of svelte 5, even earlier than that in svelte 4. I'm trying to bring React Motion (formerly framer motion) to svelte, and for layout changes, for the react lib, the DOM is measured in the `getSnapshotBeforeUpdate` lifecycle method. For the Vue lib, the DOM is measured in the `onBeforeUpdate` lifecycle hook. Depending on state change, the previous state of the element is supposed to be…

### CASE-2923 · [hmr] async infinite loading
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug after i saved file with an {@user await tranform(state) } , it started calling transform lots of times due to HMR ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell 5.36.15 ``` ### Severity annoyance

### CASE-2927 · Transitions created by a transition function don't reverse correctly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍0 💬4 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug If a transition, created by a transition function, is quickly reversed, animation breaks. ### Reproduction 1. go to [link] 2. click toggle, wait for the box to start sliding down 3. click toggle again quickly the box should slide up and down smoothly, but it currently doesn't. ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 15.5 CPU: (12) arm64 Apple M2 Pro Memory: 60.95 MB / 32.00 GB Shell: 4.0.2 - /run/current-system/sw/bin/fish Binaries: Node: 24.1.0 - /nix/store/2q5an9rpdq4vhc5ag04ajxnzxxqsqchq-nodejs-24.1.0/bin/node npm: 11.3.0 -…

### CASE-2945 · Illegal invocation on:click in #each
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I'm building search drop-downs, and encounter the error "Uncaught TypeError: Illegal invocation" when clicking in the list. The list's array - users - is generated dynamicaly from an API call response. ### Reproduction ``` function addOwnership({ payload }: { payload: SelectedOwnershipsOptions }): void { ... }; {#if panelVisibility} <div transition:fade={{ duration: 220 }} > {#each users as { userId, username, verified, avatar, role, ownership, skills } (userId)} <button on:click|preventDefault={() => addOwnership({ userId, username, verified, role, ownership })} >…

### CASE-2952 · Compiler output bloat
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: perf
- **Excerpt**: ### Describe the bug My site outputs something like this: ``` var picture_1 = $.child(a_2); var source_3 = $.child(picture_1); var source_4 = $.sibling(source_3); var source_5 = $.sibling(source_4); var img_2 = $.sibling(source_5); ``` After being built with `@user/adapter-netlify`, it is transformed to: ``` var picture_1 = child(a_1); var source_3 = child(picture_1); var source_4 = sibling(source_3); var source_5 = sibling(source_4); sibling(source_5); ``` There's multiple problems here. The first is that this DOM walking code is inefficient. E.g. these lines: ``` var source_4 =…

### CASE-2962 · Rapidly toggling element with out: transition causes incorrect node removal
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When an element with a seperate `in:` and `out:` transition (or just an `out:` transition) is rapidly toggled in a short period (as in, hidden due to state-based `{#if condition}` being briefly false, and then shown due to being true), it is incorrectly removed from the document after the intro animation finishes. If there is no `in:`, the outro animation plays instead and the element is hidden, despite the `{#if ...}` being true. I've run into this when attempting to handle Form Actions from SvelteKit, with something like `{#if form?.error}`. If the form is re-submitted…

### CASE-2970 · Svelte 4/5: Children/slot rerenders DOM when moved
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬4 · open
- **Excerpt**: ### Describe the bug When doing a conditional wrapping like so: ```svelte {#if wrap} <div> {@user children()} </div> {:else} {@user children()} {/if} ``` When the `wrap` variable changes, all the children are rerendered. Meaning all the DOM nodes inside are recreated, even though they themselves have not changed. This could cause performance issues and inconsistency. For example, it triggers all the transitions again. It would be really nice if when children/slot moves in markup, Svelte would also **move** the corresponding DOM node instead of creating a new one (which is exactly the same). I…

### CASE-2971 · Svelte 5: using `var` with `$state` is brittle
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug State declarations are transformed thusly: ```diff -let count = $state(0); +let count = $.source(0); ``` If we tried to `console.log(count)` before the declaration, we would get a TDZ error: > Can't access lexical declaration 'count' before initialization But if it's a `var` instead, we don't — instead we try to `get(undefined)`. ```diff -console.log(count); +console.log($.get(count)); ``` This errors with > signal is undefined which is cryptic and unhelpful. Possible remedies: 1. add a `if (signal === undefined) return signal` to the top of `get`…

### CASE-2975 · Nested animate acts weirdly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows
- **Signals**: 👍0 💬4 · open · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Basically the movement isn't as it should be when you have nested animate you may ask why nested animate? well for a grid list with columns you need to animate the columns and rows like in the repo ### Reproduction [repo]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (12) x64 AMD Ryzen 5 7600X 6-Core Processor Memory: 21.29 GB / 31.22 GB Binaries: Node: 20.13.1 - C:\Program Files\nodejs\node.EXE npm: 10.5.2 - C:\Program Files\nodejs\npm.CMD pnpm: 9.1.3 - ~\AppData\Local\pnpm\pnpm.EXE bun: 1.1.9 - ~\.bun\bin\bun.EXE…

### CASE-2983 · Transitions not working at all
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Svelte transitions are not working at all using the official Svelte template. I've tried using a bunch of different transitions, messing around with the parameters, removing all CSS that could affect this, and still nothing. ``` <script> import { fade } from "svelte/transition"; </script> <main> <h1 transition:fade>Hello World!</h1> <p> Visit the <a href="[link]>Svelte tutorial</a> to learn how to build Svelte apps. </p> </main> <style> main { text-align: center; padding: 1em; max-width: 240px; margin: 0 auto; } h1 { color: #ff3e00; text-transform: uppercase; font-size:…

### CASE-2987 · missing type of HTMLAttribute
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The following code works but svelte-check generates an error: 1- The error message Error: Object literal may only specify known properties, and '"onmouseover"' does not exist in type 'HTMLProps<"img", HTMLAttributes<any>>'. (ts) style="width: 9em; display: inline-block; transition: transform 0.5s;" onmouseover="this.style.transform = 'scale(1.25)'" onmouseout="this.style.transform = 'scale(1.0)'" 2- The svelte code: Attributes of the HTML tag img: src="{base}/favicon.svg" style="width: 9em; display: inline-block; transition: transform 0.5s;"…

### CASE-2988 · Transitions not working properly in Svelte 5.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍7 💬4 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug I have a menu for navigating between pages. Inside each page, I have a transition. In [Svelte 4]([link]), this is okay and working, but in [Svelte 5]([link]), it doesn't work. If we use the `{#key $page.url.pathname }` block as a solution in [Svelte 4]([link]) works as expected, but if we navigate between subpath (navigating between settings in the example) in [Svelte 5]([link]) looks like the animations runs globally. I tried to avoid this using `transition:fly|local={ ... }` but no difference. ### Reproduction Svelte 4 transitions (working): [link] Svelte 5 transitions…

### CASE-2996 · Flip animation positions element incorrectly when transitioning out with scale transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug When the `flip` animation is used in conjunction with the `scale` transition, the element's original position isn't preserved while transitioning out. It looks like the correct translation is applied with an inline `transform` style, but it's being overridden by a `transform` style that's applied by the CSS animation that's created for the transition; the `transform` in the animation rule only includes `scale` and not `translate`, so the translation is wiped out. ### Reproduction Minimally reproduced here: [link] To reproduce: 1. Add some items. 2. Remove any item except…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2911 · Browser lockup with LayerChart geo text example
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug In LayerChart, the following code ([full example]([link])) has worked up until `[email]`, but started raising `effect_update_depth_exceeded` errors since `5.35.4`, and fully locks up the browser since `5.38.9` (including the latest `5.48.4`) ```svelte <GeoPath geojson={feature}> {#snippet children({ geoPath })} {@user [x, y] = geoPath?.centroid(feature) ?? []} <!-- Locks up the browser --> <Text {x} {y} value={feature.properties.name} textAnchor="middle" verticalAnchor="middle" style="font-size: 8px" /> {/snippet} </GeoPath> ``` ### Reproduction - [5.35.3]([link]) - last…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2932 · CSS pseudo selector + nested CSS media query break in build mode
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Media queries nested inside a pseudo selector seem to work as-expected in dev, but break in build mode. Contrived example: ```svelte <div></div> <style> div::after { content: 'red pls'; @user screen { background: red; } } </style> ``` I'd expect the `::after` pseudo element to have a red background when viewed on the web. While in dev mode, this works as expected. But `vite build` produces this output: ```css div.svelte-19hj1kk:after { content: "red pls';" } @user screen { { background: red } } ``` Expected output instead is: ```css div.svelte-19hj1kk:after { content:…

### CASE-2935 · Issue about derived reactivity since @user.24
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Using SvelteKit. All dependencies all up to date. Usage: I created a filter bar containing several widgets; only one can be open at a time (so that when I click on a widget, the old widget closes; if I click on the same widget, it closes). Everything worked fine before [email], but since this update, the derived widget no longer seems to be responsive. This is my filterBarUtils.svelte.ts ```ts // the current opened widget name let currentEditing: string | null = $state(null); // I call this function for every widget export function buildWidgetEditingToggle (widget:…

### CASE-2937 · Svelte 5 - VSCode Debugger reading rune values
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug Hello, I use VS Code and run `npm run dev` in the `Debug: JavaScript Debug Terminal` as suggested for Svelte. This has been working really well until now, but lately with my migration to Svelte 5 I have the following problem: ### Reproduction I have a `.svelte` file that has something like: ```typescript interface Props { queryState?: Partial<QueryState> } let { queryState = $bindable({}), }: Props = $props() ``` if I have a breakpoint to be able to see the value of `queryState`, I cannot do this in Svelte 5 but rather get: ```typescript queryState ƒ (value, mutation) {…

### CASE-2966 · [Bug] preventing brower zoom in svelte5 using `onwheel`
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-D4, P-F1, P-F5 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug svelte5 `onwheel` breaks **e.preventDefault**. use `on:wheel` as quick workaround, but linter will nag. ### Reproduction [link] ### Logs Console Error: `Unable to preventDefault inside passive event listener invocation.` ### System Info ```shell Chrome ``` ### Severity blocking an upgrade

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2933 · Styles get delayed
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug Hello everyone I came across strange behavior. I have a subtree that rendered conditionally. If some element has bind:clientWidth in the subtree then styles get delayed. How it can be seen. We can set transition property for opacity in conditional rendered component, set initial opacity as 0 and see when its mounted transition happens from 1 to 0. It happens only for the first mount for next ones everything works fine. Its worth to mention that svelte is located in shadowDom ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell Chrome Version…

### CASE-2949 · transition:slide does not apply overflow:hidden in Safari (Svelte 5 only)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, svelte
- **Signals**: 👍0 💬4 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug After migrating to Svelte 5, all my "slide" transitions overflow their inner content in Safari. [link] In the code for the slide transition, there is an 'overflow: hidden' css that's supposed to be applied (and it does in all browsers when using Svelte 4, and in all browsers except Safari when using Svelte 5). [link]]/blob/4c4f18b24c644f7e17cd9fea7fde777f3324e206/packages/svelte/src/transition/index.js#L126 I can finish my upgrade by adding `overflow-hidden` to all the places I use this transition at (and test them manually), but I feel like this should have just worked…

### CASE-2999 · `bind:clientWidth={w}` updates `w` too late
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Given code like this... ```svelte <script> let w = 0; let h = 0; let div; $: { console.log(!!div, w, h); } </script> <div bind:this={div} bind:clientWidth={w} bind:clientHeight={h} class="box"></div> <style> .box { width: 100px; height: 100px; background: #ff3e00; } </style> ``` ...[Svelte 4 will log the following]([link]): ``` false 0 0 true 100 100 ``` [Svelte 5 will log this instead]([link]): ``` false 0 0 true 0 0 true 100 100 ``` Using `$state` and `$effect`, [we get this result]([link]): ``` true 0 0 false 100 100 ``` That `true 0 0`, when the element binding exists…

