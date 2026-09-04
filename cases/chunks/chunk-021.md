# Case Chunk 021 — Round 21

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3001 · Error when creating an accessor for an prop
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When creating an accessor to an prop without using `svelte:options`, If you create an accessor for a binded prop using `export` its value becomes an internal function, if you try to export a prop that is used as an object the compiler tries to export using a variable that is never declared ### Reproduction [repl]([link]) ### Logs _No response_ ### System Info ```shell Svelte v5.0.0-next.40 ``` ### Severity annoyance

### CASE-3022 · a11y-no-redundant-roles warning misidentifies an implicit role
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte
- **Signals**: 👍1 💬4 · open · labels: a11y
- **Excerpt**: ### Describe the bug The a11y-no-redundant-roles warning correctly identifies that < a href="[link] role="link"></a > has a redundant role because an anchor tag with an href has an implicit role (link) in HTML5. However, the redundant role warning should not appear when < a role="link"></a > html is used, because HTML5 does not implicitly assign the link role to anchor tags without hrefs. ### Reproduction "< a role="link"></ a>" A11y: Redundant role 'link' svelte(a11y-no-redundant-roles) ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.5.2 CPU: (8) arm64 Apple M1 Memory:…

### CASE-3029 · since svelte 4.0.0, wrong a11y warnings for <summary> element with click handler
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: a11y
- **Excerpt**: ### Describe the bug Adding `on:click` to a `<summary>` element is causing these two warnings: ``` A11y: visible, non-interactive elements with an on:click event must be accompanied by an on:keydown, on:keyup, or on:keypress event. (6:1) A11y: <summary> with click handler must have an ARIA role (6:1) ``` They are both wrong, because `<summary>` is interactive and its default role is `button`: [link] ### Reproduction [link] ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

### CASE-3036 · itemscope are removed from markup
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When createing a div element with the attribute `itemscope`, the attribute `itemscope` is removed from markup and only available as a property. Itemscope as an attrbute is necessary for microdata to work properly. Itemscope is a standard html attribute: [link] ### Reproduction In repl. Set the attribute `itemscope` on the h1-element. Inspect the markup and the attribute is removed. ``` // I stored the element in the variable element console.log(el.itemscope); // true console.log(el.getAttribute('itemscope')); // null ``` We can expand the…

### CASE-3038 · Default ESLint config results in errors when using anything from the global App namespace
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍2 💬4 · open
- **Excerpt**: ### Describe the bug In my `+error.svelte` page I want to import a component, and then pass in the error object. ```svelte <script lang="ts"> import { page } from "$app/stores"; const error = $page.error; </script> <RenderError {error} /> ``` In my `RenderError` component I have this simple variable which triggers an error in ESLint: ```svelte <script lang="ts"> export let error: App.Error; </script> ``` Error: `'App' is not defined. eslint(no-undef)` The `App` namespace is global, but it is not added to the default `.eslintrc.cjs` file when creating a new project. Adding this solves the…

### CASE-3039 · fix a11y: don't destroy/rebuild form elements
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug AFAIK, it is bad for a11y & performance if you destroy then attach a new form element if you just want to change the text label of said element. If you keep the same form element around, the tab focus doesn't get lost. Even the `on:click` function stays the same in the example. ### Reproduction [link] ```svelte {#if user.loggedIn} <button on:click={toggle}> Log out </button> {:else} <button on:click={toggle}> Log in </button> {/if} ``` vs [my proposed]([link]) ```svelte <button on:click={toggle}> {#if user.loggedIn} Log out {:else} Log in {/if} </button> ``` ### Severity…

### CASE-3067 · Slot Forwarding Reactivity
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### Describe the bug When Component A uses a slot from Component B, which forwards the slot to Component C, reactivity breaks if the Component A reassigns a variable that is passed in two separate props to Component B. This is pretty hard to explain abstractly, but is easy to see in the provided reproduction. ### Reproduction shows bug instantly (bug automatically triggered in `onMount`): [link] shows bug on user interaction (clicking the button triggers the bug): [link] This bug is caused by `App` passing `thing` inside the `things` property as well as reassigning `thing` in the…

### CASE-3081 · SvelteKit: Writable not reacting when it's being set on server side render when JavaScript disabled
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Sorry if I'm doing this wrong, I'm very new. I want page title (<svelte:head><title>) to update and header depending on page_title variable and make sure it renders on server side (for SEO, so no JavaScript). ```html // routes/__layout.svelte <script> import { page_title } from '$lib/title'; </script> <svelte:head> <title>{$page_title+" - Example.com"}</title> </svelte:head> <main><slot /></main> <div>You're currently in {$page_title}</div> ``` ```js // $lib/title.js import { writable } from "svelte/store"; export const page_title = writable(""); ``` ```html // routes/index.svelte <script>…

### CASE-3087 · bind:value invalidates component prop, causing wrong re-render/re-calculation
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** I have a component which accepts an array prop. This component has a variable which is reactively updated with the latest array length value. ``` $: new_size = field.length; ``` Also this variable is bound to the input via bind:value. Each time user is editing input, this invalidates variable *new_size* and *field* (which is component prop and is not updated at all). This leads to incorrect re-render and re-calculation (there are other variables which reactively depends on this prop, and they are updated even if prop actually wasn't changed) **To Reproduce** [link]…

### CASE-3091 · In some circumstances, having an exported property and a {:catch} error variable with the same name can cause weird behavior
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: stale-bot
- **Excerpt**: I encountered an issue which is very hard to reproduce outside of my application. I tried for quite some time now but I had to give up. I hope that the info I can provide is still helpful (the application itself can't be made public unfortunately). I have code like this: ```html <script> export let error export let errDescription import SomeOtherComponent from '.........' import ErrorDisplay from '.........' async function load () { /* ... */ } </script> <SomeOtherComponent> {#await load()} ... {:then} <div>The error text is {error.text + (errDescription ? ` (${errDescription})` : '')}</div>…

### CASE-3093 · Store has `undefined` value on SSR
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: The following code will print `{y: "value", x: "value"}` in the browser console if you run it in the REPL or on Sapper client side, but running it on the server side in Sapper will result in `{ y: undefined, x: 'value' }`. The difference between `x` and `y` is only the assignment to the variable happening separately from the definition. This feels like bug because: * it's not obvious why the store should ever be `undefined` if it's assigned an initial value * i would not expect splitting variable declaration and assignment into two to make any difference in how the code executes ...but it's…

### CASE-3097 · label element does not work correctly
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** In this REPL [link bug]([link]) the **label** elements do not display correctly. The **content** component of the label will automatically resize itself as the width of its parent container shifts. This behavior makes it impossible to put two or more label elements on the same line. **Severity** Without the label element it is impossible to conform to w3c accessibility standards. During early development I can mimic the appearance of using a label radio button combination by ` 1st Hack <input type="radio" name="mode" id="firstHack" checked/> 2nd Hack <input type="radio"…

### CASE-3099 · Unexpected reactive statement call
- **Principles**: P-E1, P-E2, P-E4 · **Env**: ios, react
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: **Describe the bug** There is an unexpected reactive statement call (aka. `$: `) on variable assignment in other conditional reactive statement. This is happening only when there is an assignment inside reactive statement that is expected to be triggered if an exported **object** prop changes (which is also checked in another reactive statement). **To Reproduce** Please check the following repl - [link] It consists of 4 different scenarios inside 4 separate components. Only **TEST 1** fails (check the console output). **Expected behavior** I expect the first reactive statement to not be…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3002 · Item just disappear when finishing with render
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: windows, ios, svelte, iphone
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter/transition/animation
- **Excerpt**: ### Describe the bug I rendering a list of array using #each method and animations, but somehow after finishing the animation, some items just randomly disappear. When running on my windows, everything works fine. But on mac or ios, the items start to disappear. ### Reproduction [link]]/assets/51492960/41f363ee-9077-416b-8a75-f6624a0c1047 [link] [link] ### Logs _No response_ ### System Info ```shell Works fine on: Windows 11, with the same configuration (checkout package.json) Doesn't work on: Macbook Air 2019, Iphone 15 pro. ``` ### Severity blocking all usage of svelte

### CASE-3017 · Svelte 5: select value doesn't match bound value after removing option
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, edge, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When options are rendered from an array via an `#each` loop, and the selected item is removed from the array, no option should be selected since none match the bound value. This works as expected in Svelte 4, but in Svelte 5 an option that doesn't match the bound value incorrectly appears selected. ### Reproduction [Svelte 5 REPL]([link]) [Svelte 4 REPL]([link]) for comparison. I implemented [a test which fails in Svelte 5]([link]) while passing in Svelte 4. ### Logs _No response_ ### System Info ```shell Firefox, Edge ``` ### Severity blocking an upgrade

### CASE-3019 · Svelte 5: Cannot set <details> element to open initially using bind
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I can't set `<details>` element to open initially on svelte 5, but it works correctly on svelte 4. Checkbox element works as usual. ### Reproduction svelte 5: [link] svelte 4: [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (16) x64 AMD Ryzen 7 5700X 8-Core Processor Memory: 22.60 GB / 31.91 GB Binaries: Node: 20.3.1 - C:\Program Files\nodejs\node.EXE npm: 8.19.2 - C:\Program Files\nodejs\npm.CMD pnpm: 8.10.5 - ~\AppData\Roaming\npm\pnpm.CMD Browsers: Edge: Spartan (44.19041.3636.0), Chromium (119.0.2151.58) Internet Explorer:…

### CASE-3026 · svelte 4.0.1 transition, is it a bug?
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ```svelte {#if outter_condition} {#if inner_condition} <div transition:fly={{y: 100}}>Hello world</div> {/if} {/if} ``` If the `inner_condition` change to `true` before the `outter_condition`. The transition will not working. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.4.1 CPU: (4) x64 Intel(R) Core(TM) i5-7267U CPU @ 3.10GHz Memory: 49.99 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.9.1 - /usr/local/bin/node npm: 8.19.1 - /usr/local/bin/npm Browsers: Chrome: 114.0.5735.198 Firefox: 106.0.5 Safari: 16.5.1 ``` ###…

### CASE-3027 · Component doesn't react to object prop property change
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, react
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug My component have an object prop. I need to change that prop's properties from parent. But component doesn't react(change) to that action. I need to change something from child component and only then I see changes ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i3-10105F CPU @ 3.70GHz Memory: 2.72 GB / 7.93 GB Binaries: Node: 18.16.0 - C:\Program Files\nodejs\node.EXE npm: 9.5.1 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (114.0.1823.58)…

### CASE-3035 · One way value binding not working as expected
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug One way value binding not working as expected ### Reproduction Original doc [link] but if you replace with this code below you will get alphabets in the text field which should not be. ``` <script> let value = ''; function handleUpdate(e) { value = e.target.value.replace(/[^0-9]/g, ""); } </script> <input type="text" {value} on:input|preventDefault|stopPropagation={handleUpdate} /> ``` ### Logs _No response_ ### System Info ```shell Debian 11 Firefox & Chrome ``` ### Severity annoyance

### CASE-3041 · Style attribute not rendered if semi colon is in a conditional expression
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chrome/109, safari/537, windows, webkit
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug The REPL below shows it, but let me know if you need any more information. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Latest chrome on windows 11. User agent is: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" ``` ### Severity annoyance

### CASE-3046 · ⚠️ WARN: deprecated [email]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: ### Describe the bug Please use @user/sourcemap-codec instead ### Reproduction pnpm up ### Logs ` WARN deprecated [email]: Please use @user/sourcemap-codec instead` ### System Info ```shell System: OS: macOS 13.2 CPU: (8) arm64 Apple M2 Memory: 95.53 MB / 8.00 GB Shell: 3.5.1 - /opt/homebrew/bin/fish Binaries: Node: 19.3.0 - /opt/homebrew/bin/node npm: 9.2.0 - /opt/homebrew/bin/npm Browsers: Chrome: 108.0.5359.124 Firefox Developer Edition: 109.0 Safari: 16.2 ``` ### Severity annoyance

### CASE-3051 · Inaccurate hover behavior in "Slot props" example (macOS, Chrome)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi, I'm not sure this is the right place for this issue, since it's with one of the [examples]([link]) on the Svelte site. Moving the mouse back and forth over the "Hover over me!" entries causes them to get stuck in a hovered state. ### Reproduction Here's an illustration: [link] It doesn't happen every time, though it's pretty easy to trigger in Chrome by mousing back and forth at a brisk pace. I tested Safari and Firefox and was not able to reproduce it there, so it's possible this only happens with Chrome. ### Logs _No response_ ### System Info ```shell This is on…

### CASE-3053 · Picture tag on:error infinite loop
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hello, trying to add an image error handler with a placeholder to the `picture` tag. Getting infinite loop. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz Memory: 744.88 MB / 15.87 GB Binaries: Node: 16.9.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - ~\AppData\Roaming\npm\yarn.CMD npm: 7.21.1 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (103.0.1264.77) Internet Explorer: 11.0.19041.1566 npmPackages: svelte:…

### CASE-3056 · Passing "null" to on:"eventname" still adds event listener.
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Passing "export let" variable to on: directives still creates event listener. Plain "let" variable works.. But It also doesn't work if I use "on:click|stopPropagation" ### Reproduction This adds event listener. ![image]([link]) This also add event listener.. ![image]([link]) ### Logs _No response_ ### System Info ```shell Mac, Chrome ``` ### Severity annoyance

### CASE-3058 · Unknown prop using export let and export function - error comeback
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, linux
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug It's the same problem: [link]][ref] ### Reproduction This is the REPL from that bug: [link] > If you click on button "toggle modal" in console you should have this warning: > > "<Form> was created with unknown prop 'saveForm'" ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.10 Arch Linux CPU: (4) x64 AMD Athlon(tm) X4 950 Quad Core Processor Memory: 1.73 GB / 15.07 GB Container: Yes Shell: 5.1.8 - /bin/bash Binaries: Node: 16.3.0 - /usr/bin/node Yarn: 1.22.10 - /usr/bin/yarn npm: 7.17.0 - /usr/bin/npm Browsers: Brave Browser: 100.1.37.109 Firefox: 87.0…

### CASE-3059 · crossorigin and src attribute order matter
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 1, macos, svelte
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Describe the bug When rendering an image, the following: ``` <img src="[link] crossorigin="anonymous" alt="Some alt text"> ``` can produce different behaviour to: ``` <img crossorigin="anonymous" src="[link] alt="Some alt text"> ``` Depending on the browser, the first version can cause two requests to be issued for `blah.jpg`: a non-CORS request and then a CORS request. The second version always issues only one request (CORS enabled). ### Reproduction OS: macOS Browser: Safari 1. Go to the Svelte [REPL]([link]) 2. Open the browser’s inspector. 3. Replace the code in the REPL by pasting in…

### CASE-3060 · Impossible to pass key blocks through slots
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, macos
- **Signals**: 👍0 💬4 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug I'm trying to use a key block to rerender a component based on a condition, but I noticed that if a component is nested it looks like it doesn't actually get re-rendered ### Reproduction [link] the behaviour I'm expecting is to get Component3 to log 'mount' when reset changes ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.3 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 16.49 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.2 - /usr/local/bin/node npm: 8.3.1 - /usr/local/bin/npm Browsers: Chrome: 100.0.4896.60 Firefox: 98.0.2…

### CASE-3063 · Transition out breaking array updates with last item
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Removing an item off an array breaks when you have a transition out attribute set on the list item. Strangely however, it seems to break only and only if you remove the last item. This doesn't seem to be an issue removing any other items off the array. Just the last one. My first ever bug report so mind you guys if I didn't put this clear enough! Did my best replicating it on REPL. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Chrome ``` ### Severity annoyance

### CASE-3070 · Setting currentTime for video element not always working while playing (on Firefox)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: firefox
- **Signals**: 👍6 💬4 · open
- **Excerpt**: ### Describe the bug There seems to be a race condition when setting currentTime while it is binded ### Reproduction Use firefox then try to seek while the video is playing. Try to seek multiple times as it might work some of the time. [link] ### Logs _No response_ ### System Info ```shell 3.44.2 ``` ### Severity annoyance

### CASE-3073 · Date input types weirdly when date boundaries are set with spread attributes in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug When date input has directly set minimal date (min={mindatestring}) it behaves nicely. When typing "21" it types 02 then 21. When it is set with {...attributes} where attributes={min:mindatestring} it behaves unexpectedly: typing 21 gives 02 then 01, to type 21 you need to type 221 (so second two doesn't trigger the on:input event, I think). I would expect these two to give the same result. This occurs in the current version 3.42.6, the earliest I found it occur is 3.24.0 and is probably associated with the fix of [link]][ref] ### Reproduction This code has some extra…

### CASE-3076 · Two way binding triggers reactivity twice
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, safari, macos, react, svelte, webpack
- **Signals**: 👍0 💬4 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug When the application is first launched, binding of non-primitive types is triggered twice ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 10.15.6 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 2.11 GB / 16.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 15.9.0 - /usr/local/bin/node npm: 7.5.3 - /usr/local/bin/npm Browsers: Chrome: 92.0.4515.159 Edge: 92.0.902.78 Firefox: 90.0.2 Safari: 13.1.2 npmPackages: svelte: ^3.40.0 => 3.40.1 webpack: ^5.46.0 => 5.46.0 ``` ### Severity annoyance

### CASE-3077 · Hitting the back arrow goes back twice
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, windows
- **Signals**: 👍0 💬4 · closed · labels: site
- **Excerpt**: ### Describe the bug Hitting the back arrow goes back twice ### Reproduction The arrow on the left goes back twice when clicked [link] ![image]([link]) ### Logs _No response_ ### System Info ```shell latest chrome, windows 10. I am unable to replicate this issue now that I'm trying, but I encountered it several times a few minutes ago. Low severity ``` ### Severity annoyance

### CASE-3084 · Slot prop not update when transition finished
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** If a transition happens on an element that contains a slot which has a prop, the slot prop does not properly update if it is rendered again immediately after the transition ends. **To Reproduce** [link] **Expected behavior** It will update slot prop correctly when finish transition. **Information about your Svelte project:** Chrome v91 macOS 10.15.7 Svelte v3.18.2 See REPL **Additional context** There is a similar issue [ref] and [ref] seems to fix this issue but I guess [ref] don't trigger to update slot prop.

### CASE-3086 · Site Tutorial Chapter 17. Compiler warning
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** On the Svelte website Tutorial Chapter 17 both a) and b). The Svelte compiler issues a warning 'Media elements must have a <track kind="captions"/>' child element. **To Reproduce / Context** Macbook Pro Big Sur 11.2.3 Chrome browser Version 87.0.4280.88 (Official Build) (x86_64) Website [link] Chapter 17 Sharing Code and Module Exports ![Screen Shot 2021-04-01 at 16 08 59]([link]) ** Solution ** in repos app-a and app-b AudioPlayer.svelte - Insert child element in the audio element <track kind="captions"/>. as requested by the compiler. ![Screen Shot 2021-04-01 at 17 29…

### CASE-3090 · Can't use slot inside option
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 85, opera, macos, svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** title explains well **To Reproduce** [Example REPL]([link]) **Expected behavior** it should show the component - Your browser and the version: Firefox 85.0.2 - Your operating system: MacOS Big Sur - Svelte version 3.32.3 **Severity** i am trying to make a custom component library and because of this can't make custom `<option />` to add a few features.

### CASE-3092 · Leaflet .getSize() issue with Svelte
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, chrome, svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** When creating a leaflet map, the leaflet `getSize()` function sometimes returns the wrong size within a Svelte app. **To Reproduce** 1. Clone this repo: [link] 2. npm install 3. npm run build 4. npm start in a CHROMIUM-based browser (example: google chrome), open [link] and refresh/hard-refresh a bunch of times until you see the "y" value in the developer console be an unreasonably small (~30 or 40) size. **Expected behavior** - Expected: Size in the developer console should always be the same - Actual: sometimes on new refreshes the y value of the size is not correct (a…

### CASE-3095 · Unexpected behavior with mousewheel events for input type="number"
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5, P-G4, P-E3 · **Env**: chrome, safari, firefox, svelte
- **Signals**: 👍0 💬4 · closed · labels: bug/temp-stale
- **Excerpt**: **Description** Mousewheel does not increment or decrement the number when running the svelte app standalone. But it works fine in the REPL **To Reproduce** This code works fine in the REPL with the mousewheel to increment/decrement the number in the input However, the mousewheel does not work when run locally after downloading the app to my computer and running locally. I have checked on Chrome, Safari, and Firefox ``` <script> let name = 'world'; </script> <h1>Hello {name}!</h1> <input type="number" value=0/> ``` **Workaround** I have found if I bind something to the mousewheel event, it…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3003 · If 'bind:value' is set for 'input type=date', when entering the month/date with the keyboard, if the month/date starts with '0', the year portion of the input is removed.
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug When `bind:value` is applied to `input type=date` and a date is entered with the keyboard, if the month/day starts with `0`, the existing input is lost. Also reproduced in `@user/kit 1.30.3 + svelte 4.2.8`, `@user/kit 2.0.0 + svelte 5.0.0-next.28` ### Reproduction ```shell $ npm create svelte@user my-app ┌ Welcome to SvelteKit! │ ◇ Which Svelte app template? │ Skeleton project │ ◇ Add type checking with TypeScript? │ Yes, using JavaScript with JSDoc comments │ ◇ Select additional options (use arrow keys/space bar) │ none │ └ Your project is ready! $ cd my-app $ npm…

### CASE-3005 · input.value is reverting when wrapped in a slot using $$restProps
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug input.value is reverting when wrapped in a slot using $$restProps like this: ``` <slot wat={{ ...$$restProps }}> </slot> ``` Steps to reproduce in the REPL: * Write any text in the broken input * blur the input * Attempt to write more in the broken input Expected: * You are able to write more text Actual: * You aren't able to write more text I've found I can do a workaround using await tick, which reverts the revert... not great... I've included this example. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity annoyance

### CASE-3006 · Svelte 5: Using input inside button leads to compile error
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The following code, ```svelte <button> <input/> </button> ``` leads to, `</button> attempted to close element that was already automatically closed by <input> ` This code sample might be invalid html but the error also seems to be misleading. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.3 CPU: (12) arm64 Apple M2 Pro Memory: 301.34 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.2.0 - /opt/homebrew/bin/node Yarn: 1.22.21 - /opt/homebrew/bin/yarn npm: 10.2.4 - /opt/homebrew/bin/npm pnpm: 8.11.0 - ~/Library/pnpm/pnpm…

### CASE-3007 · [Svelte 5] `bind:value` not working in `<input type="checkbox"/>` but works in `<input type="text"/>
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Let's say I have an object with reactive props declared in a class: ```js /// state.svelte.js /// export class Todo { done = $state(false); text = $state(""); toggle = () => { this.done = !this.done } constructor(text, done = false){ this.text = text; this.done = done; } } ``` This compiles out correctly to give me getters and setters on the Todo object's `done` and `text` properties. And then I use it like this: ```svelte /// App.svelte /// <svelte:options runes/> <script> import { Todo } from './state.svelte.js' import TodoItem from './Todo.svelte' const todos = [ new…

### CASE-3009 · Svelte 5: bind files no work
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Describe the bug ``` <script> let de = $state([]) </script> <input type="file" bind:files={de}/> ``` give error Failed to set the 'files' property on 'HTMLInputElement': Failed to convert value to 'FileList'. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell - ``` ### Severity annoyance

### CASE-3024 · Spreading attributes (containing value) on <option>, value attribute get's replaced by option's inner text
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Spreading attributes with a `value` attribute on `<option>` elements get's replaced with the option's inner text so the following ```svelte <select> <option {...{ value: 'sms', class: 'option' }}>SMS</option> <option {...{ value: 'email', class: 'option' }}>E-mail</option> <option {...{ value: 'letter', class: 'option' }}>Letter</option> </select> ``` renders as ```html <select> <option value="SMS" class="option">SMS</option> <option value="E-mail" class="option">E-mail</option> <option value="Letter" class="option">Letter</option> </select> ``` When you would expect…

### CASE-3037 · The `bind:value` directive on `<select>` ignores `selected` attribute on `<option>`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug Console output of `$: console.log(question)`: **Actual** 1. `undefined` 2. `{id: 1, text: "Where did you go to school?"}` **Expected** 1. `undefined` 2. `{id: 2, text: "What is your mother's name?"}` The first output correctly is `undefined` since the binding hasn't initialised yet. However, I have specified the `selected` attribute of the second `<option>` element. In vanilla HTML the first declared `<option>` is the default selected value but you can change this by specifying `selected` attribute on another `<option>` element of choice (multiple if you're using a…

### CASE-3044 · Spread attributes reapply on every store update or re-render
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Applying [spread attributes]([link]) to an element during component initialization causes those attributes to get reapplied during any store update or component re-render. Typically this isn't noticeable, but I recently came across this in a somewhat tricky situation where I have a listener on an input element that checks and updates an `$errors` store on blur, causing the `value` of the input element to always reset to its original value as set from a spread attribute. For context, this is about what I have: ```html <script> const { attrs, errors } = sampleForm.init();…

### CASE-3049 · Unexpected 'check' error using named slot: Element implicitly has an 'any' type because ...
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Creating and using a component that takes a typed array as input and exposes this value in a named slot results in an `npm run check` error. I was able to simplify the example to: The Component: ``` <script lang="ts"> export let items: number[]; </script> {#each items as i} <slot name="item" it={i}/> {/each} ``` The component using the component (uncomment the last line to 'fix' the Error) ``` <TestSum items={[1, 2, 3]} let:it={i}> <span slot="item">{i}</span> </TestSum> <!-- this 'solves' the check error --> <!-- {#if false}{#each [] as _}&nbsp;{/each}{/if} --> ``` ###…

### CASE-3050 · Rearranging elements creating strange behaviour
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I can imagine this may be a fringe use case, however I feel like the behaviour I'm expecting would be "normal". Sorry, it's quite hard to explain, but I'll try my best. Apologies and I appreciate your patience :) Simply put when using a store in the creation of a DOM element this creates strange behaviour when trying to rearrange the order of the parent element. Consider the following component `Input.svelte` <script> // elementsStores is just a JSON object of stores for each name e.g. { password: writable({type: "password"}) } import {elementsStores} from…

### CASE-3052 · Select multiple with bind:value throws error
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Using a select multiple with bind:value as shown in the docs here [link] causes a crash of the application ### Reproduction [link] ### Logs ```shell Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'indexOf') at select_options (index.mjs:665:34) at Object.mount [as m] (PropertyPanel.svelte:95:28) at Object.mount [as m] (PropertyPanel.svelte:89:69) at Object.mount [as m] (PropertyPanel.svelte:121:49) at Object.mount [as m] (PropertyPanel.svelte:84:28) at Object.mount [as m] (PropertyPanel.svelte:83:15) at Object.mount [as m]…

### CASE-3061 · Form onSubmit works in desktop but not on mobile.
- **Principles**: P-G4, P-E3 · **Env**: svelte, desktop, mobile
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I have a rough overview of a contact form that i am working on, although mobile form event handlers do not seem to be working but it works fine on desktop. On desktop ``` on:submit|preventDefault={handleSubmit}``` data gets posted as intended but when i test on mobile it does not POST to the server. #### Svelte listening at port: 3000 #### Express Server listening at port: 3001 # I also tried replicating with a different project with [svelte-forms-lib]([link]) form template and POST to the server and i got the same issue. ### Reproduction ```javascript <script lang="ts">…

### CASE-3062 · ParseError: Unexpected end of input
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Compilation error ParseError: Unexpected end of input happens when you have a Svelte component with the following contents: <script lang="ts"> import '../app.css'; </script> <!-- <style lang="scss"> --> <style> /* :global { @user './lib/shared/drawer/Drawer.css'; } */ :global(body) { padding: 1rem; } </style> The issue here is the commented line <!-- style lang="scss"> -->. If this line is removed compilation error is gone. I often comment out parts of markup when working and continously run into this issue. ### Reproduction <script lang="ts"> import '../app.css';…

### CASE-3066 · Store with object doesn't work correctly with checkbox
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If I have a store that uses an object, it doesn't bind to a checkbox correctly. ``` <!--App.svelte--> <script> import {store} from './store.js' $: $store.checked, console.log('store.checked is', $store.checked), console.log('store.clicked is', $store.clicked) const handleCheckboxClick = _ => { $store.clicked = true } </script> <input type="checkbox" on:click={handleCheckboxClick} bind:checked={$store.checked} /> This is a checkbox ``` ``` //store.js import { writable } from "svelte/store"; export const store = writable({checked: false, clicked: false}); // set the default…

### CASE-3088 · Dispatch doesn't work before component is mounted
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Dispatching an event in a reactive statement doesn't work if the component is not yet mounted, see REPL below: [link] It works if I execute both: ``` dispatch('foo', 'hello'); onMount(() => dispatch('foo', 'hello')); ``` Real use case: My input components (e.g. Select, TextInput, ...) receive validation props such as `required={true}`, `minLength={3}`, etc. Those components dispatch error events in case the value is not valid. The value is changed on user input, but as the initial value is passed by the parents, and that the parent might change the value as well as those validation props'…

### CASE-3089 · Inconsistent bind:value behavior between <input/> and <select> on input event
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** on input event triggered by text input - binded value is actual value of input on input event triggered by select - binded value is preceding (old) value of select **To Reproduce** Repl: [link] To reproduce: 1. in console, you see initial data 2. select option opt1, you see 2x initial data (on select input - old data - without opt1 value) 3. type 'a' to text input (new console line - actual data - with 'a' value) 4. select option opt2, you can again see 2x preceding state (on select input - old data - opt1 value) **Expected behavior** Consistent behavior - binded value of…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3004 · Svelte 5: Several circular dependencies in client runtime modules
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍24 💬4 · open · labels: runtime
- **Excerpt**: ### Describe the bug Not a bug, per se, but there are several circular dependencies among various files in the browser runtime. Here are a few that I observed in a project. There may be others that present themselves if you use more of Svelte's runtime. ``` svelte/src/internal/client/each.js -> svelte/src/internal/client/render.js -> svelte/src/internal/client/transitions.js -> svelte/src/internal/client/each.js svelte/src/internal/client/proxy/readonly.js -> svelte/src/internal/client/proxy/proxy.js -> svelte/src/internal/client/proxy/readonly.js svelte/src/internal/client/render.js ->…

### CASE-3013 · Svelte 5: Keyframes list with name that appears elsewhere in `animation:` style rule breaks CSS scoping
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug/compiler/css
- **Excerpt**: ### Describe the bug Svelte 5 can not play CSS animation, because wrong css is generated. generated: `svelte-1f68qn8-animation: 1s linear infinite animation;` but should be: `animation: 1s linear infinite svelte-1f68qn8-animation;` ### Reproduction ``` <span /> <style> @user animation { 0% { transform: scale(1); } 100% { transform: scale(2); } } * { animation: 1s linear infinite animation; display: block; width:40px; height:40px; background:red; border-radius:999px; } </style> ``` CSS output: ``` @user svelte-1f68qn8-animation { 0% { transform: scale(1); } 100% { transform: scale(2); } }…

### CASE-3014 · Svelte 5: exit transition variable is not reactive
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: svelte, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When a element is mounted the transition that is in the out: directive becomes fixed, even if the given value is a state that changes until the element is unmounted ### Reproduction [v4]([link]) [v5]([link]) ### Logs _No response_ ### System Info ```shell App.svelte (Svelte v5.0.0-next.19) ``` ### Severity blocking an upgrade

### CASE-3016 · Svelte 5: Animation flip only works correctly in conjunction with crossfade
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug The flip transition breaks a list if used alone, does not work if used with a transition, and only works correctly if used in conjunction with the crossfade transition ### Reproduction [repl]([link]) ### Logs _No response_ ### System Info ```shell App.svelte (Svelte v5.0.0-next.13) ``` ### Severity blocking an upgrade

### CASE-3021 · Transition inside key block does not run initially
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Consider this code: ```svelte {#if visible} <p in:slide>{message}</p> {/if} ``` When `visible` becomes `true`, the message is shown using the transition. If `message` changes, however, the display is not updated. For that, I need to use a `key` block: ```svelte {#if visible} {#key message} <p in:slide>{message}</p> {/key} {/if} ``` Now, whenever `message` changes, it is transitioned in again. But now there is no transition when `visible` becomes `true`! ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.10 Debian GNU/Linux 12…

### CASE-3023 · Transition not working on double condition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi, The svelte's transition stopped working on double condition. For instance : ```svelte {#if condition1} {#if condition2} <div transition:fly={{ duration: 200, y: '10px', easing: quartIn }}></div> {/if} {/if} ``` doesn't work but : ```svelte {#if condition1} <div transition:fly={{ duration: 200, y: '10px', easing: quartIn }}></div> {/if} ``` works fine. I use svelte 4.0.5 with vite 4.4.2. ### Reproduction ```svelte {#if condition1} {#if condition2} <div transition:fly={{ duration: 200, y: '10px', easing: quartIn }}></div> {/if} {/if} ``` ### Logs ```shell No error…

### CASE-3031 · svelte-migrate errors out
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Tried to run svelte-migrate from package directory in monorepo (packages/svelte) and got this... ```bash % npx svelte-migrate svelte-4 This will update files in the current directory If you're inside a monorepo, don't run this in the root directory, rather run it in all projects independently. Your git working directory is dirty — we recommend committing your changes before running this migration. ✔ Continue? … yes ✔ Which folders should be migrated? › src ✔ Add the `|global` modifier to currently global transitions for backwards compatibility? More info at [link] … no…

### CASE-3045 · Custom elements are not "cleaned up" when the consuming application removes an element.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍3 💬4 · closed · labels: custom element
- **Excerpt**: ### Describe the bug Hey guys, it appears that custom-elements don't get cleaned up fully when a parent application removes them from the DOM. The issue croped up because of a crash in a child component, specifically a modal that is animated in. At first I thought it was just the subscriptions to the stores that weren't being removed appropriately. However, in a more complex example, I have nested components with conditional rendering based on the store value, and this logic still gets executed. At least, I assume so, since the components crashing would not be rendered if said logic wasn't…

### CASE-3048 · Microsoft's license banner in transition/indes.js file
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I'd like to know why there is a Microsoft's license banner/comment in svelte/transition code (prod version available in npm registry). ```js 'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); var easing = require('../easing/index.js'); var internal = require('../internal/index.js'); /*! ***************************************************************************** Copyright (c) Microsoft Corporation. Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted. THE SOFTWARE IS PROVIDED "AS…

### CASE-3064 · When using transitions e.g out/in and dynamically showing an element, svelte leaks infinite style tags
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Using an element that renders based on a variable: ```svelte {#if showDiv} <div out:fly={{x: 7, y: 7, duration: 150}} in:fly={{x: 7, y: 7, duration: 150}}>hi</div> {/if} ``` Every time you toggle showDiv, a style tag is created and then emptied but remains in the DOM indefinitely: ![Screen Shot 2022-01-21 at 4 01 59 PM]([link]) Removing the transitions solves the issue. ### Reproduction EDIT: Reproduced (keep right clicking and see style tags get created and fail to clean up: [link] Too lazy to go and figure out which version broke, but 3.25.x doesn't leak, latest…

### CASE-3065 · Transition not removing extra DOM nodes after completion
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍3 💬4 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug When you have an element with a transition and destroy it, but then recreate it before the transition is done, you can end up with old elements not being removed. ### Reproduction [REPL]([link]) When you type in the input field, the `value` is set to what you typed if the `value` is empty, otherwise the `value` is cleared. Try randomly spamming your keyboard, and a bunch of extra elements should be left there. ### Logs _No response_ ### System Info ```shell System: OS: macOS 10.15.7 CPU: (8) x64 Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz Memory: 1.35 GB / 32.00 GB Shell:…

### CASE-3068 · Erratic spring behaviour
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍6 💬4 · closed
- **Excerpt**: ### Describe the bug If the time between frames is high (i.e. more than a small fraction of a second), it can cause springs to rapidly jump to unexpectedly large or small values. This creates a poor user experience, and can cause error conditions (such as when it wasn't anticipated that an overdamped spring could overshoot the target.) The time between frames can increase for three main reasons: - The computer is under heavy load, and unable to process ticks in a timely fashion - The svelte app is itself running heavy calculations or a garbage collection cycle is occurring which temporarily…

### CASE-3069 · When use slot, #key directive and transition together transition|local doesn't work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug I've wrapped `Container` in `key` directive in order to re-render it under certain condition and passed element with `transition:fade|local` in the slot. Tried to place span in another `.svelte` component and expected, that `local` transition would't be affected by parent's behaviour, but the glitch is still there. It seems like the new instance of a component because of key has already been rendered, but the old one is still there, because of it has been hold by the transition ``` {#key key} <Container> <span transition:fade|local> Error example </span> </Container>…

### CASE-3071 · Allow directives (actions/transitions/animations) to be more dynamic
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, react
- **Signals**: 👍25 💬4 · open · labels: feature request/runtime
- **Excerpt**: ### Describe the problem Svelte encourages reactivity at many levels, but when it comes to actions, transitions, or animations, it's rather static: - you are not allowed to swap out one directive for another at runtime. Doesn't work for actions, does work for transitions/animations only when they are not rendered - you can't conditionally apply a directive by setting it to undefined; it will throw a runtime error - attributes are not always updated, related to [ref] ### Describe the proposed solution Support swapping out directives ### Alternatives considered Workaround code involving `#if`s…

### CASE-3074 · Keyed each blocks with 'transition' not all blocks trigger transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug not all blocks trigger transition when 'top' changed ### Reproduction [link] ### Logs _No response_ ### System Info ```shell 3.42.4 ``` ### Severity annoyance

### CASE-3079 · When triggered again before the end of the animation, there will be unexpected results
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍6 💬4 · open
- **Excerpt**: ### Describe the bug In the official Animations example, if the animation is triggered quickly, it will produce a discontinuous animation ### Reproduction Source Code： [Repl.txt]([link]]/files/6869328/Repl.txt) ![svelteAnimationBug]([link]) ### Logs _No response_ ### System Info ```shell 3.40.1 ``` ### Severity annoyance

### CASE-3080 · Dynamic properties in transition "in" directive not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug When the params passed to "in" transition is changed dynamically, the value is not reflected. The values passed to "out" work fine. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity annoyance [link]

### CASE-3083 · Bug involving transition, value binding and "bind:this"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: **Is this about svelte@user? This project is currently in a pre-release stage and breaking changes may occur at any time. Please do not post any kind of bug reports or questions on GitHub about it.** No, it's about version 3.38.2 **Describe the bug** The reference to a child component is set to `null` after it is transitioned out, replaced by another one, and you interact with that new child. Here is a [REPL]([link]) to try it out. The text at the very bottom indicates whether `childNode` (which is bound to a component via `bind:this`) is `null` or not. The steps to reproduce are: 1. Click…

### CASE-3085 · Component not destroying when using transitions, key block, and inline event handlers
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** Apologies for the long title! I'm having problems with a component not destroying and persisting when being #key'd out if the mouse is over an item that has an out transition AND has an inline on:mouse* function that changes a locally scoped variable. If any of these weirdly specific conditions aren't met then the component will re-key properly. There are no error messages about component not destroying. **To Reproduce** In this REPL, there is a menu. The menu displays an array of values. When a mouse click is triggered from anywhere on the page, the array of values is…

### CASE-3098 · Crossfade transition events does not work as expected
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍10 💬4 · closed · labels: bug/runtime
- **Excerpt**: **Describe the bug** Crossfade does not dispatch `outrostart`. **To Reproduce** [link] **Expected behavior** `introstart` should be dispatched when element is about to appear `introend` should be dispatched when element is fully visible `outrostart` should be dispatched when element is about to disappear `outroend` should be dispatched when element is fully hidden **Information about your Svelte project:** - Svelte version 3.30.0

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3008 · Missing sourcefiles for globals.js and global not defined on browser console
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍0 💬4 · open
- **Excerpt**: ### Describe the bug I was using my application pretty fine, however suddenly it stuck in dev mode. I turned off the ssr and looked the console. There was error regarding to the `global` statement in node-fetch. Then, I looked the vite console and there was a warning: `Sourcemap for "/node_modules/.pnpm/[email]/node_modules/svelte/src/runtime/internal/globals.js" points to missing source files` I think it's related to a package that I am using. That package (@user/client) uses fetch api. However, when I use it whole application gives error and suddenly stops working. You can see it on…

### CASE-3020 · Svelte may be improperly handling `{@user}` expressions when used in `<style>` and `<script>`
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Related to this issue/bug: [link] The **Mitosis** library converts the following [source file]([link]) ```ts interface Props { styles: string; id?: string; } export default function InlinedStyles(props: Props) { return <style innerHTML={props.styles} id={props.id} />; } ``` into the following svelte component ```svelte <script context="module"></script> <script>export let styles; export let id = undefined; </script> <svelte:element this={"sty" + "le"} {id}>{@user styles}</svelte:element> ``` This issue results in CSS output during SSR to improperly render, injecting `<!--…

### CASE-3043 · Component Mount Error in SSR env only in prod build
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I am getting the error: `Uncaught TypeError: Cannot read properties of undefined (reading 'context')` as also reported in issue [ref] but I don't think the cause is the same. The error happens under a very specific set of circumstances and may not be a Svelte issue (might be a NextJS issue), but I was hoping to get clarification if that is the case. Here is the scenario where I see this issue: - Build a JavaScript library using the [Svelte Template]([link]). I know that the template is deprecated, but this library pre-dates Svelte Kit and as far as I am aware this is…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3010 · Svelte 5: template strings with 3+ adjacent interpolatioins causes compilation error
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using Svelte's syntax of template literals, an error occurs if there are 3 or more adjacent interpolations (see repro). Edit: This seems to also happen when there are two sets of adjacent interpolations anywhere in the template as well. ### Reproduction ```html <script lang="ts"> let a = 1; let b = 2; let c = 3; </script> <div class="{a}{b}{c}" /> <img src="{a}{b} hello, world {a}{c}" /> ``` ### Logs ```shell with pnpm: TypeError: Cannot read properties of undefined (reading 'value') at TemplateLiteral…

### CASE-3011 · Svelte 5: `eslint(no-undef)` rule cannot recognize runes such as `$props` and `$state`
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### Describe the bug I'm trying out Svelte 5 with SvelteKit 2 and TypeScript for a toy project with `eslint` and `prettier` configured for linting and formatting respectively. It seems that `eslint` does not recognize the new runes such as `$props` and `$state` even though type declarations exist for them. <img width="617" alt="image" src="[link]]/assets/14833123/fbafc93a-564c-410f-aad8-1c3b647de02d"> For the moment, I am able to get around this issue by configuring globals in `.eslintrc.cjs` but this seems more of a hack than an actual fix. ```js globals: { $state: 'readonly', $props:…

### CASE-3012 · Svelte 5: Can't instantiate a class via $derived when constructor calls a method (which mutates state).
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Here's an example code that causes the error. <img width="1370" alt="image" src="[link]]/assets/2931/aeaef3c1-f4f3-4f74-8be9-7aa1ac2c0e15"> I don't see the eroror, when the class fields are initialized directly in the constructor instead of `init()`. ### Reproduction See this [REPL]([link]) ### Logs _No response_ ### System Info ```shell [email]-next.26 via REPL ``` ### Severity annoyance

### CASE-3015 · Can not pass background image url as inline style to a component if there is whitespace in the filename.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug **This works** ``` <script> let imgUrl = 'src/lib/assets/bg-img.jpeg'; </script> <div class="back" style="background-image: url({imgUrl});"> <h1>Hello world!\&lt;/h1> </div> ``` **But this doesn't** ``` <script> let imgUrl = 'src/lib/assets/bg img.jpeg'; </script> <div class="back" style="background-image: url({imgUrl});"> <h1>Hello world!\&lt;/h1> </div> ``` Both files are in the directory. Please check the reproduction link. I am using the static site generator adapter if that is relevant. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System:…

### CASE-3018 · [v5] unexplainable paranormal activity when destructuring each value with a default
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍2 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug Was toying around with some typescript abominations and ran into a bug that I can't make heads or tails of. Instead of rendering the fallback value as text as its supposed to, it's rendering the function passed to text_effect. The codegen looks fine so no clue what's happening. I tried to dissect it in the debugger and gave up when I encountered this: ![image]([link]]/assets/50981692/7e020d71-e8e7-47f6-895c-ed481697c50d) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell n/a ``` ### Severity blocking an upgrade

### CASE-3032 · Svelte 4 changelog link does not work
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Documentation issue - Svelte 4 Changelog link does not work <img width="996" alt="image" src="[link]]/assets/58837299/205491d1-c51d-4020-b523-4de3fddf6e1f"> ### Reproduction If you click on roadmap on Svelte github page, there is a link for the changelog [link]]/blob/version-4/packages/svelte/CHANGELOG.md <img width="680" alt="image" src="[link]]/assets/58837299/e7c5f0ca-eac4-4cca-b0a4-2a8da1bf8f2d"> which loads error 404 <img width="996" alt="image" src="[link]]/assets/58837299/205491d1-c51d-4020-b523-4de3fddf6e1f"> ### Logs _No response_ ### System Info ```shell NA ```…

### CASE-3033 · if using bind:currentTime and moving the progress bar, the event will be triggered multiple times.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug I used bind:currentTime to listen a `<video>` time-update, when I changed the progress bar of `<video>` (and the `<video>` is paused）, it double triggers events. ![image]([link]]/assets/53885884/39ccc993-a35d-41d8-ad0c-17abda85da3f) If I don't bind the currentTime, each event will only trigger once, which is my expected. ![image]([link]]/assets/53885884/7f339769-15be-4c73-8f42-f5875d6c4081) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

### CASE-3034 · Component styles flicker/blink with SSR mode on
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When applying stylings to components or pages, on SSR mode, first server stylings get rendered, and then client ones. In some cases, when components / pages use more 'dynamic' data like slots, $$restProps with class names, lists, etc., what oddly happens is that there is a 'flicker', where server stylings do not seem to match client ones. Below is a video with two examples of when this happens: [link] ### Reproduction About twenty lines: [link] ### Logs _No response_ ### System Info ```Shell I've spoken to a number of people so I don't think that it is a device-specific…

### CASE-3040 · Unexpected DOM mutations during hydration
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When hydrating a server-side-rendered page, Svelte applies numerous unexpected mutations—mainly removing and adding empty text nodes. The number of mutations seems to grow linearly with the number of components. Here, for example, mutation logs from a bare-bone [link] project: <img width="1630" alt="CleanShot 2023-01-17 at 15 35 17@user" src="[link]> The expected behavior is to observe no mutations, unless something has changed. Please note that the issue I am describing is observed in production build, not only in development (where some mutations are justified). ###…

### CASE-3047 · Svelte compiler parses HTML entity without semicolon
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug When setting a background image using an inline CSS style, Svelte is modifying the URL slightly to prevent it from working. I'm sure the scope of this issue could be more than just background image URLs, but that's where I've been able to reproduce it consistently. From the [REPL]([link]): ```html <div style="background-image: url([link]);"> Doesn't work </div> ``` But as you can see, [accessing the URL directly]([link]) works fine. Looking at the JS output and HTML, it appears Svelte is modifying the URL replacing `&rect` with `▭`. The issue also does not affect all…

### CASE-3055 · node.parentNode is null when detaching using Prism with @user
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When changing the code shown in an {@user ...} element using Prism, it always throws out this error. It happens on the update, when it tries to detach. ![image]([link]) ### Reproduction [link] ### Logs ```shell Uncaught DOMException: The object could not be cloned. srcdoc:145 Uncaught (in promise) TypeError: node.parentNode is null detach about:srcdoc line 92 > eval:57 d about:srcdoc line 92 > eval:124 p about:srcdoc line 92 > eval:119 update about:srcdoc line 92 > eval:2447 update about:srcdoc line 92 > eval:218 flush about:srcdoc line 92 > eval:185 promise…

### CASE-3072 · Blog post repl block failing
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The repl block is failing to initialize in this particular [blog post]([link]) ![image]([link]) ### Reproduction 1. Open [link] 2. Scroll down to the repl block 3. Check that it hangs forever at "loading Svelte compiler" ### Logs ```shell Failed to load resource: the server responded with a status of 404 () compiler.js:1 Uncaught (in promise) DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at '[link] failed to load. at [link] bundler.js:11 Console was cleared bundler.js:11 Uncaught (in promise) ReferenceError: svelte is not defined at…

### CASE-3094 · Reactivity breaks for lazy loaded custom elements
- **Principles**: P-A3, P-H1 · **Env**: react, svelte
- **Signals**: 👍1 💬4 · closed · labels: custom element/stale-bot/temp-stale
- **Excerpt**: **Describe the bug** In our application some components are lazy loaded (using dynamic imports) after their tags have already been stamped in the dom and props have been passed. Using this practice with Svelte custom elements we are facing this issue: * the initial props passed to the element before lazy loading are not set in the custom element, rather Svelte uses the default values defined in the component * the props that were set before the component was loaded stop reacting to changes at all after Svelte custom element is loaded *Example:* The component: ``` <script> export let name =…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3025 · custom-element extend usage import/workflow question
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug i like the idea of the extend function on webcomponents and i found a workflow to be able to import some code in to extend it. it works but but bit weird, is this the desired way? i made small example below to illustrate it this is the most pure solution.. but you could not have the extendWC function and just call `getLetter` there and have no real connection or pure import or what ever.. i intentionally placed svelte:options on top of the file not on the bottom to make it more clear I'm sorry you had to read my rant, just try to help :) ### Reproduction ```…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-3028 · Docs : white text on white BG in examples tab
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The examples section of component composition under Slot props renders white text on a white BG. (Dark mode) ![image]([link]]/assets/88965204/07900202-c504-40f3-a509-80c55e457667) ### Reproduction **Go here** [link] ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-3030 · Image Preloading
- **Principles**: P-A2, P-A4, P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The image is loading before it hydrates in a massive size. I think it has something to do with ssr. Whenever I refresh the bug happens. And I've also realised that it only updates when i move my cursor. [link]]/assets/76092869/faf64120-ba23-44e4-84d0-db9d7cf1db10 ### Reproduction +layout.svelte ``` <nav class="bg-white border-gray-200 dark:bg-gray-900"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" > <a href="/" class="flex items-center"> <img src="/favicon.png" class="h-8 mr-3" alt="Logo" /> <span class="self-center text-2xl…

### CASE-3100 · Whitespace issue in <style> tag
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: svelte, webkit
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hi guys, I have two snippets that are rendering a spinner on the page, the first one works, the second one does not, and it looks like it gets no css applied: - Loader.svelte: ``` <script> </script> <style> .loader { margin: auto; border: 8px solid #f3f3f3; border-top: 8px solid #0047bb; border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite; } @user spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .loader-container{ display: flex; height: -webkit-fill-available; align-items: center; padding-bottom: 10rem; } </style> <div…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3042 · Child inside the `svelte:head` is not removed from DOM when the parent is unmounted
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If the following component is included and subsequently removed, the document head still contains whatever `Child` is. ```svelte <!-- MyComponent.svelte --> <script> import Child from './Child.svelte' </script> <svelte:head> <Child /> </svelte:head> ``` I see a lot of similar bugs in this and Kit's issue history, but this still seems present in the latest release. ### Reproduction [link] Click the button in the REPL to repeatedly add and remove a `Head` element, which has the following HTML: ```html <svelte:head> <Title {title} /> <!-- this contains <title>{title}</title>…

### CASE-3054 · onMount within action will not fire for initially hidden component
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug If `onMount` is invoked from within a `use:action` function, and is declared on a child node within an initially unmounted component, the code within `onMount` will not run when said component is mounted. However, if the component is set to mount when `App.svelte` is mounted, the code within `use:action`'s `onMount` will run, though the returned function intended to be called through `onDestroy` will not run when the component is destroyed. _This issue originates from this [discord thread]([link])_ ### Reproduction [link] ### Logs _No response_ ### System Info ```shell…

### CASE-3078 · Regression introduced in PR [ref]
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug Initializing a component into an unmounted div throws ``` Uncaught TypeError: _a.getElementById is not a function ``` ### Reproduction [link] Click on "Hello World" h1. works in v3.39 The offending lines are ``` const append_styles_to = get_root_for_styles(target); if (!((_a = append_styles_to) === null || _a === void 0 ? void 0 : _a.getElementById(style_sheet_id))) { ``` in svelte/internal/index.mjs (introduced in [ref]) get_root_for_styles does not return document for a detached node ### Logs ```shell Uncaught TypeError: _a.getElementById is not a function at…

### CASE-3082 · onMount unmount callback does not fire off for nested if-block components
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** onMount unmount callback function does not fire off when used for in if-block nested component of unmounted parent (which is mounted in my case by svelte:component, didn't test it out using if-blocks). Referring to the documentation when looking at `onDestroy` it says that it `Schedules a callback to run immediately before the component is unmounted.` but we cannot see unmount callback output anything (as `run immediately before the component is unmounted` implies unmount event) in the REPL logs. Analyzing the output we can see that: - onDestroy callback is not followed…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3057 · Cannot use Tailwind's `@user` on a selector within a media query
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: tailwind, svelte
- **Signals**: 👍7 💬4 · closed
- **Excerpt**: ### Describe the bug It seems that you cannot use the Tailwind `@user` syntax to add styles to a selector that is nested within a media query. An example use-case would be applying a Tailwind background color to the `body` tag for dark mode, which is currently a little challenging since `<svelte:body>` does not accept a `class` attribute. For example, this code causes a build error ```css @user (prefers-color-scheme: dark) { :global(body) { @user bg-gray-900; } } ``` While these are fine ```css @user (prefers-color-scheme: dark) { :global(body) { background: red; } } ``` ```css :global(body)…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3075 · Block-level element bindings not updating when `visibility` is `hidden` or `collapsed` (in Firefox)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: firefox, chrome, edge, windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ### What is expected: * Block-level element bindings (`clientHeight`, `clientWidth`, `offsetHeight`, `offsetWidth`) update regardless of `visibility` & browser. ### What happens instead: * On Firefox (tested on stable 91.0.2 & dev 92.0b9), they update only when `visibility` is not `hidden` or `collapsed`. * On Chrome (tested on stable 92.0.4515.159 & dev 95.0.4630.1) & Edge (tested on stable 93.0.961.38), they update regardless of `visibility`'s value. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (16) x64…

### CASE-3096 · Logic / Keyed each block section of the tutorial is unclear.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, svelte
- **Signals**: 👍0 💬4 · closed · labels: temp-stale
- **Excerpt**: Could someone that is a svelte expert rewrite the wordings or provide a better example in the [Logic / Keyed section of the svelte tutorial]([link])? This tutorial is aimed a beginners with very little JS experience, until this exercise, the tutorial lives up to this claim, but this specific chapter is too ambiguous and confusing. There is even an [answer]([link]) in Stack overflow that is too verbose, but it provides some clarity. The most confusing sentence in this chapter of the tutorial is "notice that it's removing <Thing> components from the end", The slice operation does indeed remove…

