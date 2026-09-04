# Case Chunk 016 — Round 16

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2501 · Warning: Properties of objects and arrays are not reactive unless in runes mode
- **Principles**: P-A3, P-H1 · **Env**: react, svelte
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: ### Describe the bug Hi, I just updated svelte to version 5, and I get this warning ``` Properties of objects and arrays are not reactive unless in runes mode. Changes to this property will not cause the reactive statement to update ``` There is obviously some bug in the analyzer. I do not mutate the object, but read its property <img width="1339" alt="image" src="[link]> ### Reproduction [link] ### Logs _No response_ ### System Info ```shell [email] ``` ### Severity annoyance

### CASE-2508 · Feature: Add bind:unchecked to input boxes of type "checkbox"
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: So, still around my dataview component (table), each column definition object may add the `hidden` property, and if present, the columns is effectively ignored and not rendered. So for user interface purposes, if people are allowed to hide columns, they should also be allowed to show them back. So I figuired the simplest thing would be a dropdown with one checkbox per column. Here it is for the demo's homepage (not yet deployed): ![image]([link]) Simple stuff. The thing, though is that the property is called 'hidden' because it is easier for developers: Most of the time we want the columns…

### CASE-2518 · Svelte 5: onerror event is not called on img element
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬7 · closed · labels: feature request
- **Excerpt**: ### Describe the bug I noticed that the onerror event is not called when using an img element. weirdly it works in the playground so test it on your own machine. ### Reproduction ```svelte <svelte:options runes /> <script lang="ts"> </script> <img src={"asdf"} onerror={() => { console.log("something"); }} /> ``` The onerror event is not called even though a 404 error is thrown ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22621 CPU: (16) x64 12th Gen Intel(R) Core(TM) i7-12650H Memory: 6.72 GB / 15.63 GB Binaries: Node: 18.14.2 - C:\Program Files\nodejs\node.EXE…

### CASE-2522 · `on:input` improper type for TypeScript
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript, svelte
- **Signals**: 👍0 💬7 · closed · labels: types / typescript
- **Excerpt**: ### Problem ![image]([link]]/assets/13215662/96f1d625-bf4e-42ea-bfef-a395da036174) > Property 'data' does not exist on type 'Event & { currentTarget: EventTarget & HTMLInputElement; }'.ts(2339) ### Explanation At while it perfectly works in the browser: ![image]([link]]/assets/13215662/a6293a8c-5ea1-4045-96b2-0b76956cd4a5) And even if I log entire event object `console.log(e)` not just `e.data`, you can clearly see it's `InputEvent`: ![image]([link]]/assets/13215662/899c99cb-2003-47de-9cff-8ae31629ccd9) While in the VSCode typescript is hinting me wrong, assumingly by wrong types Svelte is…

### CASE-2536 · [Site] Contributor's link doesn't match image show
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: site
- **Excerpt**: ### Describe the bug Vising the `Contributors` section of the site and choosing a user may lead you to a profile that isn't from that user. I assume that this has to do with some users not having an image and, due to that, it skips the image but still uses the link for the next image. On the video I'm choosing my own avatar that should direct me to `[link] but instead, it directs me to [link] ![crontributorsSvelte]([link]) This doesn't appear to be an issue locally but currently exists on `master` I'm looking to work on this to get it fixed 😄 ### Reproduction - Open [link] - Scroll to…

### CASE-2537 · Width of img becomes zero when using spread props
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬7 · closed · labels: bug/compiler/runtime
- **Excerpt**: ### Describe the bug When using width attribute along with spread props on img, width is always zero. ``` <img {src} width="100%" alt="Alt text" {...someObject} > ``` The rendered HTML has `width="0"` ### Reproduction [REPL]([link]) REPL uses `$$restProps` but bug occurs with spreading any object. ![image]([link]) ### Logs ```shell None ``` ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (8) x64 Intel(R) Core(TM) i5-8300H CPU @ 2.30GHz Memory: 1.25 GB / 7.85 GB Binaries: Node: 16.6.0 - C:\Program Files\nodejs\node.EXE npm: 7.21.1 - C:\Program Files\nodejs\npm.CMD Browsers:…

### CASE-2539 · Uncaught TypeError: Cannot set property 'value' of undefined
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ## **Update: Read third comment** **Describe the bug** I have an object array, binding it to each block, works well if i input values in any field that is not in the last row if is the first element to be inputed **Logs** ![image]([link]) ![image]([link]) **To Reproduce** [link] [link] **Expected behavior** Expected to correct binding the user input without throwing exception **Information about your Svelte project:** System: OS: Windows 10 10.0.19042 CPU: (6) x64 Intel(R) Core(TM) i5-9500T CPU @ 2.20GHz Memory: 8.62 GB / 15.81 GB Binaries: Node: 14.15.5 - C:\Program Files\nodejs\node.EXE…

### CASE-2548 · svelte component in named slot kills reactivity in unnamed slot
- **Principles**: P-A3, P-H1 · **Env**: svelte, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** If you place svelte component B in component A's named slot then reactivity in component A's unnamed slot stops working. **Logs** See [REPL]([link]) **To Reproduce** Create a component with a named slot and an unnamed slot. Insert another component in the named slot. Put something (e.g. \<img\>) in the unnamed slot that relies on a store (e.g. \<img src={$src}/\>) Changes in the store will not be reflected in the DOM (e.g. src will not change). [REPL link]([link]) **Expected behavior** Reactivity in the unnamed slot should keep working regardless of what is in the named…

### CASE-2553 · Compiler error when referencing import.meta.url in svelte scripts
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** When trying to reference `import.meta.url` in a svelte script, a compiler error is thrown. [import.meta.url]([link]) allows es modules to figure out what their filename/url is. **Logs** <img width="1105" alt="Screen Shot 2020-02-05 at 8 31 06 PM" src="[link]> **To Reproduce** Copy/paste this into the REPL and view the console log error. ```html <script> console.log(import.meta.url); </script> ``` **Expected behavior** Compilation should leave `import.meta.*` alone :) **Severity** This is blocking a proof of concept i'm developing for a svelte static site generator that…

### CASE-2556 · Multiple preprocessors, doesn't get parsed content from previous preprocessor
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: Thanks for an amazing framework that surely will take over the world in the years to come! I'm writing my first Svelte (Sapper) project and want to use two great preprocessors combined: - @user/svelte-preprocess-scss - svelte-image In my rollup.config.js I've defined the preprocess pipeline as such: ```javascript preprocess: [ { style: scss() }, { ...image({ placeholder: 'trace' }) } ] ``` svelte-image uses svelte.process() to parse the content, but fails to do so because unparsed scss remains in the content it receives, even though it's after the scss preprocessor in the pipeline. Have I…

### CASE-2564 · Media Element Binding for set currentTime is unreliable
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: bug
- **Excerpt**: **Describe the bug** The [Media Element Binding]([link]) for setting `bind:currentTime={time}` is unreliable when setting single times. For example a list of video position index markers. Clicking on an index, which sets the **currentTime**, doesn't always set the video position. Where as if I set **currentTime** via the DOM method then it does work every time. **To Reproduce** Here's a couple of examples the issue: [link] [link]

### CASE-2567 · SSR/DOM whitespace discrepancy
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed · labels: bug/stale-bot
- **Excerpt**: Just noticed this annoying flicker on the homepage: **server rendered** <img width="565" alt="Screen Shot 2019-07-03 at 09 22 17" src="[link]> **hydrated** <img width="556" alt="Screen Shot 2019-07-03 at 09 22 31" src="[link]>

### CASE-2579 · Unactionable state_referenced_locally warning when $state(prop)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I think there is at least one case where having this warning now is actually weird. When you initialize state with something from props I'd argue it is expected by the definition of how both $state rune and JS works, that your value will get out of sync with that prop. So in practice there is no way out of this warning except writing ignore comments above each of such lines. Would it make sense to suppress this case? <img width="694" height="232" alt="Image" src="[link] /> ### Reproduction [REPL]([link]) ### Logs ```shell ``` ### System Info ```shell irrelevant ``` ###…

### CASE-2580 · bug: `page.url` updates on link preload when `compilerOptions.experimental.async` is true
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug This one is really ugly cause it's really not what you'd expect. I'm not really sure what's going on here but as you can see the value updates inside script tags breaking things in unexpected ways. Weirdly enough it doesn't actually update the value in the template. In the video I remove both the experimental.remoteFunctions and experimental.async options but it's isolated to experimental.async. (P.S. Leaving this as an annoyance cause this is experimental but I def couldn't ship with this bug) ### Reproduction [link] [link] ### Logs ```shell ``` ### System Info ```shell…

### CASE-2584 · `await` is not importable because it's a keyword
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug <img width="799" height="760" alt="Image" src="[link] /> If I were to `import { await } from 'svelte/internal/client``, I get a this error: ``` Unexpected reserved word 'await'. (1:9) > 1 | import { await } from 'x'; ``` or ``` x `await` cannot be used as an identifier in an async context ,-[input.ts:1:1] 1 | import { x as await } from 'x'; : ^^^^^ 2 | ``` ### Reproduction Babel: [link] SWC: [link] ESBuild's behavior is a little different: [link] <img width="1140" height="309" alt="Image" src="[link] /> ### Logs ```shell ``` ### System Info doesn't matter ;) keywords…

### CASE-2585 · Event bubbling order not respected when listeners are added both with addEventListener and attributes
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Describe the bug I have found a bug where a button whose listener is assigned with `onpointerdown` attribute is getting the event after the parent div, which has a listener assigned via `addEventListener` in `onMount`. There is no event capturing, so bubbling should work in the correct direction. (button first, div second). In this example, DIV listener callback always gets triggered first: <img width="688" height="273" alt="Image" src="[link] /> ### Reproduction ```html <script> import {onMount} from 'svelte' let elementNames = $state([]) const storeElementName = (e) => {…

### CASE-2588 · The output of element and svelte:element styles are inconsistent
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug <img width="824" alt="Image" src="[link] /> The output of the same styles in `div` and `svelte:element this="div"` is different. Very similar to [link]][ref]. ### Reproduction [Svelte 5.33.18]([link]) ❌ ### Severity annoyance

### CASE-2591 · How to manage the page stack like a native app instead of destroying it.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug ![Image]([link]) ### Reproduction ![Image]([link]) component 发生变化会重新渲染，我希望某个路由回退的时候不重新渲染，如何处理这种问题 ### Logs ```shell ``` ### System Info ```shell . ``` ### Severity annoyance

### CASE-2594 · $effect() with writable store and untrack() causes thousands of updates
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug ![Image]([link]) ```svelte <script lang=ts> import {writable} from "svelte/store"; import {onMount, untrack} from "svelte"; const wrStore = writable({hello: 1, world: 2}); $inspect(wrStore); onMount(() => { $wrStore.hello = 3; // <-- trigger change. }); $effect(() => { $wrStore.hello; // <--- watch this. untrack(() => { $wrStore.world = 4; // <--- only change this. }); }); </script> <h1>Thousands of updates ...</h1> <p>Check the devtools console.</p> ``` ### Reproduction [Link to playground]([link]) ### Logs ```shell ``` ### System Info ```shell Svelte 5.19.4 ``` ###…

### CASE-2596 · The docs $state.raw is incorrect
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug ![image]([link]) ### Reproduction use the version of svelte here my package.json [package.json]([link]) ### Logs ```shell person init {name: 'Heraclitus', age: 49} +page.svelte:35 RUN : person.age += 1; +page.svelte:37 !this will have no effect INCORRECT {name: 'Heraclitus', age: 50} ``` ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz Memory: 16.07 GB / 31.89 GB Binaries: Node: 23.5.0 - C:\Program Files\nodejs\node.EXE npm: 10.9.2 - C:\Program Files\nodejs\npm.CMD pnpm: 9.15.2 - ~\AppData\Local\pnpm\pnpm.EXE…

### CASE-2597 · Second-level function not doing reactive update
- **Principles**: P-A3, P-H1 · **Env**: windows, react, svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Second-level function updates are not triggering reactive update, as it's not wrapped with `$.mutate` by the compiler. Is there a way to manually do `$.mutate`? ```svelte <script lang="ts"> let obj = {count: 0} const increment = () => obj.count++ const helper = (o) => o.count++ </script> <div>count is {obj.count}</div> <button onclick={increment}>+1</button> <button onclick={() => helper(obj)}>+1</button> ``` ![image]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (16) x64 AMD Ryzen 7 7840HS with…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2502 · False positive for "Unused CSS selector"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬7 · closed · labels: bug/css
- **Excerpt**: ### Describe the bug After the upgrade to the stable v5 I'm now getting a few of these false positives, which seem related to the use of the `:has()` pseudo-class in CSS rules, possibly in conjunction with the shorthand class (`.copied` in this repro's case). ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 15.0.1 CPU: (8) arm64 Apple M2 Memory: 109.33 MB / 24.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.17.0 - ~/.local/share/pnpm/node npm: 10.8.2 - ~/.local/share/pnpm/npm pnpm: 9.12.2 - /opt/homebrew/bin/pnpm Browsers: Chrome: 129.0.6668.101 Safari:…

### CASE-2504 · Docs minor issue : onclick - rather than on:click
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, svelte
- **Signals**: 👍0 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug On svelte-omnisite : [Preview]([link]) ![image]([link]) --- It should be *onclick* rather than *on:click* ### Reproduction well this is related to docs : on new svelte website : [link] ### Logs _No response_ ### System Info ```shell System : Chrome Browser ``` ### Severity annoyance

### CASE-2505 · video behavioral differences with svelte 5
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, svelte
- **Signals**: 👍1 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug Using the same svelte 4 code in svelte 5 behaves differently: - `<video muted>` isn't muted in firefox - Video duration is `NaN` when pressing `Toggle video` after playback has started (tested in firefox and chrome) ### Reproduction [Svelte 4]([link]) [Svelte 5]([link]) ### Logs _No response_ ### System Info ```shell latest REPL versions ``` ### Severity annoyance

### CASE-2514 · Svelte code with many function calls crashes on Webkit
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, linux, ubuntu, svelte, webkit
- **Signals**: 👍0 💬7 · open · labels: browser specific
- **Excerpt**: ### Describe the bug If there are too many calls to a function, Epiphany (Gnu Web - Webkit) browser crashes. Chrome and Firefox work ok. I'm starting browser with `cairo` renderer. `WEBKIT_DISABLE_COMPOSITING_MODE=0 EPHY_LOG_MODULES=ephy-window.c EPHY_DEBUG_BREAK=stack WEBKIT_FORCE_SANDBOX=0 GSK_RENDERER=cairo flatpak run --verbose org.gnome.Epiphany` Is there anything on Svelte side that can be done with this? ### Reproduction [link] ### Logs ```shell `(epiphany:2): epiphany-WARNING **: 17:28:51.461: Web process crashed` ``` ### System Info ```shell System: OS: Linux 5.4 Ubuntu 20.04.6 LTS…

### CASE-2527 · the changelog file is not rendered anymore on github
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug It seems the `CHANGELOG.md` file is too big to be rendered: [link]]/blob/master/CHANGELOG.md ![Screenshot_2022-09-11_02-54-20]([link]) Am I the only one who is having this problem? We can always view the raw file, as suggested, but it's much nicer to have the pretty rendered version. ### Reproduction Open [link]]/blob/master/CHANGELOG.md ### Logs _No response_ ### System Info ```shell Chrome, brave, firefox. ``` ### Severity annoyance

### CASE-2528 · Bug Missing "./types/runtime/internal/lifecycle" export in "svelte" package
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I started to play around with Svelte rendering graph nodes and edges using SVG, but something gone wrong or svelte may not been displaying a clear error message [line of the file and repository that occurs the error]([link]) I just imported the [edge component]([link]) to my Node component and that error started to pop up: ### Reproduction the file being imported in the component: [link] the component that importing the Bug [link] ### Logs ```shell "./types/runtime/internal/lifecycle" export in "svelte" package Error: Missing "./types/runtime/internal/lifecycle" export in…

### CASE-2532 · Invalid hydration in IE11
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug IE11 is not hydrated correctly ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.2 CPU: (10) arm64 Apple M1 Pro Memory: 1.75 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.2 - /opt/homebrew/opt/node@user/bin/node Yarn: 1.22.17 - /opt/homebrew/bin/yarn npm: 8.1.2 - /opt/homebrew/opt/node@user/bin/npm Watchman: 2021.12.20.00 - /opt/homebrew/bin/watchman Browsers: Brave Browser: 97.1.34.80 Chrome: 97.0.4692.99 Chrome Canary: 99.0.4840.0 Firefox: 96.0.1 Safari: 15.3 Safari Technology Preview: 15.4 npmPackages: svelte:…

### CASE-2535 · bind does not work with actions in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome, safari
- **Signals**: 👍0 💬7 · open
- **Excerpt**: ### Describe the bug When using an action on an input component in Firefox, where the input component has a bound value, the value does not properly get set. Edit: ITenthusiasm has noticed the issue is due to position of the `bind:` and `use:` attributes. Does not work: ``` <input bind:value use:format={cardNumber} maxlength="19" /> ``` Works: ``` <input use:format={cardNumber} bind:value maxlength="19" /> ``` ### Reproduction [link] To replicate the issue: * Load FireFox (works OK on Chrome and Safari) and go to [link] * Move the `bind:value` attribute to be the first attribute in the…

### CASE-2540 · Reactive selected attribute of option element on Firefox not working in specific conditions
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react, svelte
- **Signals**: 👍1 💬7 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** When a reactive `selected` attribute is used to select a default option in a \<select> element, but the options are populated via a Promise resolving with an array of objects, and an extra option is added outside of the {#await} tag, the default option fails to select on Firefox. **Logs** N/A **To Reproduce** Minimal reproduction here: [link] **Expected behavior** The default option should select in all browsers. **Stacktraces** N/A **Information about your Svelte project:** N/A - Easily reproduced in Firefox browsers, not project-specific, see above REPL **Severity**…

### CASE-2545 · At docs page, anchor links are not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, linux
- **Signals**: 👍0 💬7 · closed · labels: bug/site
- **Excerpt**: Opening [link] goes back to the top of the page on Chrome (85.0.4183.102). On Firefox (80.0.1) the page becomes completely white. Tested on linux.

### CASE-2549 · InputOutputToggle doesn't completely hide the browser checkbox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari/604, webkit, mobile
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** The `InputOutputToggle` component doesn't completely hide the browser checkbox on mobile safari, there are still parts of the checkbox that are visible which results in `InputOutputToggle` looking weird. The rectangle is only visible when the checkbox in its off state. ![toggle]([link]) Version: `AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1`

### CASE-2550 · use-directives are called multiple times when elements inside a keyed block are reordered
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: **Description of the bug** - When attaching "use" directives inside a keyed block, they are called again (without being destroyed) if the elements of the block are reordered. **To Reproduce** - This REPL reproduces the issue: [link] **Expected behavior** - Directives should be called only once when the component is mounted. - Alternatively, if the element is remounted, "destroy" should be called beforehand (e.g. to free previously created resources). **Information about the Svelte project:** - Svelte version: 3.20.1 (bundled with Rollup) - Browser: (latest) Chrome on MacOS **Severity** -…

### CASE-2551 · Top-level raw `{@user}` hydrated incorrectly
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox 74, windows, svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: **Describe the bug** Components containing a raw `{@user}` tag at the top level are hydrated incorrectly - the existing HTML is not removed. **Logs** None. **To Reproduce** Attempt to hydrate a component containing a top-level `{@user}` tag against some existing HTML. **Expected behavior** The existing HTML should be replaced, but it is not. **Stacktraces** None **Information about your Svelte project:** - Firefox 74 - Windows 10 - Svelte 3.19.2 - Rollup **Severity** Inconvenient. For my case, I can wrap it in another element without affecting much. **Additional context** There appears to be…

### CASE-2558 · Component name "Block" throws error during compilation.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 78, macos, svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** The component name "Block" seems to throwing the Svelte compiler off. ```html <script> import Block from "./Block.svelte" </script> <Block>my block</Block> ``` results in the error: ``` Identifier 'block' has already been declared (Note that you need plugins to import files that are not JavaScript) ``` But simply changing the component name `import Blocky from "./Block.svelte" //path is the same` works. Also, using the `Block` component more than once get's rid of the error. [link] **Information about your Svelte project:** - Chrome 78 - MacOS - Svelte 3.12.1 - Rollup used

### CASE-2566 · Running newly created project yields "Error: empty response" when visiting localhost:5000
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: ## Issue Running newly created project yields *"Error: empty response"* when visiting localhost:5000. **Steps to reproduce:** 1) Clone sveltejs template: `$ npx degit sveltejs/template hello-world` 2) `$ cd hello-world` into the newly created project folder 3) Install dependencies `$ npm install` | `$ yarn` 4) Try to run project: `$ yarn dev` 5) Receive error in Chrome when reaching localhost:5000: ``` The page doesn't work localhost did not send any data ERR_EMPTY_RESPONSE ```

### CASE-2569 · REPL doesn't work in Firefox 66
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 66
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: No idea why [link]

### CASE-2570 · Transitions are not working on Chrome 38 and lower (v2)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 38
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: I don't know what exactly happens, but I've got a bug report from one of my users. So, I tried to reproduce that bug using [Browserstack]([link]) and found out that seems component's `oncreate` life-cycle method not called in some cases without any errors in console. Besides REPL is not working completely. Any ideas?

### CASE-2573 · custom element throws Failed to construct HTMLElement error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, svelte, angular
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ## Problem statement I'm trying to use a svelte custom element in an angular app through **SystemJS** but I'm getting following error - <details> <summary>Error in console</summary> <pre> Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function. at new MyThing (:5000/svelte/bundle.js:208) at HTMLDocument.createElement (<anonymous>:1:1545) </pre> </details> ### Versions **Svelte** - latest through degit (`degit sveltejs/template my-app`) **Browsers** - Latest Chrome and Opera ## Reproduction [link] Setup…

### CASE-2575 · <a> tags cannot be self-closing
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: Just encountered an interesting bug. The Svelte SSR compiler uses self-closing tags for elements without children: ```html <div/> <!-- equivalent to <div></div> --> ``` But that doesn't work with some elements: ```html <a href='[link]> <p>this will be included in the link!</p> ``` It needs to be `<a ...></a>` instead. Empty anchor tags is a bit of an edge case, but it should still be handled. Am wondering which other elements can't use self-closing tags though. A quick Google doesn't yield anything interesting – does anyone out there know the answer? Or should we just always use closing tags…

### CASE-2583 · Modifying bound state in oninput handler no longer works in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, firefox 141, windows, svelte
- **Signals**: 👍0 💬6 · closed · labels: bug/browser specific
- **Excerpt**: ### Describe the bug I recently tried updating our app to the latest version of Svelte, and noticed that our formatted inputs no longer work for Firefox users. The inputs work as expected through Svelte 5.35.7, but starting in Svelte 5.36.0 what is displayed in the input no longer matches the bound Svelte state. Are we doing something wrong here? If there isn't a simple workaround this blocks us from upgrading Svelte. ### Reproduction [link] Last version that worked: [link] ### Logs ```shell ``` ### System Info ```shell Windows 11, Firefox 141 ``` ### Severity blocking an upgrade

### CASE-2593 · autofocus is not working on input rerender in Chrome and Firefox
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome, firefox, safari, firefox 135, chrome 133, safari 18, svelte
- **Signals**: 👍0 💬6 · open
- **Excerpt**: ### Describe the bug If you have an input and then rerender your view with another autofocused input, then autofocus does not seem to work. I see this bug in Chrome and Firefox, but in Safari it seems to work fine. ### Reproduction Just click button multiple times in this [REPL]([link]). ```svelte <script> let input = $state(0) </script> <button onclick={() => (input++)}>click</button> {#key input} <input type="text" placeholder={input} autofocus /> {/key} ``` ### System Info ```shell Firefox 135.0 (20250130195129) Chrome 133.0.6943.53 (Official Build) (arm64) Safari 18.3 (20620.2.4.11.5) ```…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2503 · Snippet doesn't satisfy the Snippet type, apparently
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript, svelte, vite
- **Signals**: 👍10 💬7 · open · labels: types / typescript
- **Excerpt**: ### Describe the bug In a class, I have the following overload: ```typescript show(content: string | Snippet): void; ``` This is a SvelteKit project that produces an NPM library package. When the project is built, the `dist` folder contains: ```typescript show(content: string | Snippet): void; ``` Great so far. Now the class is imported in a Vite + Svelte project by importing it from the built NPM package. The importer declares the following snippet: ```svelte {#snippet overlay()} <Spinner text="Loading..." variant="primary" /> {/snippet} ``` Then, this snippet is used in a call to `show()`:…

### CASE-2506 · Effects require explicit property access to track properties of objects that are $state
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I found out about this one while troubleshooting a different ongoing problem I have with reactivity being lost in $state in classes. I guess the above is unimportant. Anyway: The REPL demonstrates that the effect of the variable `x` doesn't run on changes of `x.a`. To make it run, the effect's code must explicitly read `x.a`. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity blocking an upgrade

### CASE-2510 · Setting a store to `undefined` and then trying to use it in a rune throws `state_unsafe_mutation` error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Previously, in Svelte 4, you used to be able to set a variable to `undefined` and later set it to a store and meanwhile use it in reactive statements. While not ideal, this used to work. In svelte 5 if you do something similar it'll throw the `state_unsafe_mutation` error. See reproduction below. It's probably right to error in this case, but the error is very misleading we spent hours trying to track it down yesterday :sweat_smile: Maybe for some context, our before / after: **Before** ```js const prs = $derived($hostedListingServiceStore?.prs); const listedPr =…

### CASE-2519 · Reactivity not working for object member variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug "$:" can't listen to object member variable change, what is the correct approach ### Reproduction <script> class temp{ constructor(){ this.active_in = 0; setTimeout(()=> this.active_in = 12, 3000) } } let temp_obj = new temp(); $: chek = (temp_obj.active_in) </script> <p> {chek} </p> ### Logs _No response_ ### System Info ```shell .. ``` ### Severity annoyance

### CASE-2520 · Keyed #each breaks reactivity using $state rune
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: ### Describe the bug With Svelte 5 runes, a keyed `#each` breaks reactivity under certain circumstances when a non-keyed `#each` works correctly. This prevents me from using keyed `#each`. I’ve been trying to narrow the circumstances down for you but this is as narrow as I can get it: Reactivity breaks when the loop references variables that were declared with the `$state` rune, _and_ are dependent on data from another reactive variable. For example, if the `items` variable is a copy of the `data.items` prop (which is reactive): ```js const { data } = $props(); let items =…

### CASE-2521 · Svelte 5: Reactivity bug with spread operator
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos, svelte, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Spreading an object with reactive props doesn't work as expected. ```svelte <script> let pressed = $state(false); const props = { get "aria-pressed"() { return pressed; }, onclick: () => { pressed = !pressed; } } </script> <!-- "aria-pressed" is not reactive --> <button {...props}> {pressed ? "On" : "Off"} </button> ``` ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell Macbook Pro 2020 Intel i5, macOS 14.2 ``` ### Severity annoyance

### CASE-2530 · camelCased variable names are not reactive.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍0 💬7 · closed · labels: custom element
- **Excerpt**: ### Describe the bug Hello. This is my first bug report ever on github, so if I`m doing it wrong please excuse me. It seems that svelte is not handling very well the camelCased variables. ``` <svelte:options tag='test-a'/> <script> export let variableName = "world"; </script> <main> <h1>Hello {variableName}!</h1> //Hello world! </main> ``` but, when I use the element like ``` <test-a id = 'test-a' variableName = 'test'> </test-a> ``` I expected "Hello test!", but it stays on "Hello world!" and on the console window we have a message > < test-a > was created with unknown prop variableName…

### CASE-2533 · passing props to unnamed slot when there are more than 1 slots passes the variable to the wrong slot
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug when having a named slot and an unnamed slot, passing a variable to the unnamed slot provides it to the first slot and not necessarily the unnamed one ### Reproduction [link] ### Logs _No response_ ### System Info ```shell was able to reproduce in repl ``` ### Severity annoyance

### CASE-2534 · object on right side of = operant in reactive statement is updated, when variable on left side is changed by bind:value, while variable doesn't change
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, react
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: ### Describe the bug ```html <script> let bar = {a:"hello"} $: foo = bar.a; $: console.log(`bar updated ${bar.a}`); </script> bar: <input type="text" bind:value={bar.a}/> <br> foo: <input type="text" bind:value={foo}/> ``` change `foo` (type something to input foo), it will update `bar.a`, `foo` is blocked, will not change text in input. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell REPL ``` ### Severity annoyance

### CASE-2538 · `a11y-label-has-associated-control` error for control inside of component
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍4 💬7 · closed · labels: feature request/stale-bot
- **Excerpt**: ### Describe the bug The `a11y-label-has-associated-control` linting error is raised whenever a nested control is contained in a child component. For example, if you have a custom component, `TextInput`, which renders an `<input />`, then this produces the "no associated control" error. ```html <label> A label <TextInput /> </label> ``` This issue is similar to [ref], where this error is generated if the input is inside a conditional statement. ### Reproduction This REPL demonstrates the issue: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 11.1 CPU: (6) x64 Intel(R)…

### CASE-2546 · Question: Reactivity not triggering when variable changed in a function ?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: EDIT: I just realized this actually reproduces in REPL, so here I go writing this up again... I have a problem I can't seem to figure out and I am not quite sure where to look so I am bit lost. Let's assume I have something like this: [link] You can see that changing the "value" prop of the Comp.svelte instance: 1. triggers the reactive statement if condition which then calls `updateInputValue(value)` 2. that then sets the `inputValue`... 3. ... and NOTHING. The reactive statement `validate(inputValue)` is never executed. When I omit the `updateInputValue(value)` call in the reactive if…

### CASE-2554 · Show Source of Reactivity
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: Is there a way to show the source of a reactive execution? For example, if I has this: ```js $: console.log("myvar = ",myvar); ``` can I somehow show for each output to the log a stack trace of what caused the variable to change? ------ Before filing an issue we'd appreciate it if you could take a moment to ensure there isn't already an open issue or pull-request. ----- If there's an existing issue, please add a :+1: reaction to the description of the issue. One way we prioritize issues is by the number of :+1: reactions on their descriptions. Please DO NOT add `+1` or :+1: comments. ###…

### CASE-2568 · Reactive assignment doesn't work when dependent variable is hidden in function
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬7 · closed · labels: site/temp-stale
- **Excerpt**: [Broken or unsupported]([link]) [Working]([link]) For more enhanced or reusable calculations it would be nice to be able to wrap the reactive assignements inside functions. I didn't find any information about this limitation in the tutorial or the documentation but maybe I missed it.

### CASE-2571 · (v2 vs. v3) No access to variables or `this` in imported functions.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: This came up from a question about the ability to access `this` in v2, but there's no comparable way in v3 (as far as I can tell). Concrete comparison: ## v2 [link] vs. ## v3 (broken) [link] We can fix it with stores: [link] Or a rather convoluted methodology: [link] But these solutions are not as self-containing as v2 was. What's missing is DRY importable functionality that can act on the component itself, and not external stores.

### CASE-2590 · Snippets derived from dynamic variables render even when null/undefined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍2 💬6 · open
- **Excerpt**: ### Describe the bug When using the `{@user}` tag with snippets derived from dynamic variables (like `$props` or `$state`), the snippets are always rendered even when the variable is null or undefined. This causes unexpected behavior and potential errors in the application, as empty snippets are being rendered instead of being ignored. When a snippet is `null`, `undefined` or empty (`''`), the `{@user}` tag should not attempt to render it, similar to how other reactive values work in Svelte. The documentation suggests using optional chaining {@user snippet?.()} as a workaround, but this…

### CASE-2592 · SvelteSet is not reactive
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I am not sure, if this is intended, but to me this behavior is very strange: - create a variable with the state rune and a SvelteMap as value - add a react rune to trigger some side effects. The changes will not be tracked, but if you wrap it with Array.from, it will. ``` <script> import { SvelteSet } from "svelte/reactivity" let fruits = $state(new SvelteSet(['foo', 'bar'])) /* does not work */ $effect(() => { console.log("effect", fruits) }); /* works */ $effect(() => { console.log("effect with Array", Array.from(fruits)) }); </script> <h1>Hello…

### CASE-2600 · Svelte 5.1.13: Reassigning store leads to `undefined`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug Svelte 5.1.13, probably [ref], introduced a regression in the store API, breaking my Sveltia UI library and [Sveltia CMS]([link]). I had to downgrade to 5.1.12 to get rid of the error. After creating a store with `writable` and reassigning a new store to the variable, the store changes to `undefined`. [My code]([link]) ### Reproduction REPL: [Svelte 5.1.12]([link]) / [Svelte 5.1.13]([link]) In Svelte 5.1.13, the console says world if you uncomment `style = writable('svelte');` An interesting thing is the problem can be reproduced even before the `init` function is called.…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2507 · Svelte 5: input bind:files has visually no two-way-binding
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug DOC: [link] > bind:files is now a two-way binding. As such, when setting a value, it needs to be either falsy (null or undefined) or of type FileList. But... nothing happen visually if I set files to null Internally, here is `elem.value = ''` required, or something ### Reproduction Here is not working example: [LINK]([link]) Here is working example with workaround: [LINK]([link]) ### Logs _No response_ ### System Info ```shell 5.0.0-next.244 ``` ### Severity annoyance

### CASE-2509 · CustomElement $effect caused due to props read
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug Reading sub-component's prop in eventListener causes sub-component's $effect getting triggered. ```svelte <script lang='ts'> $host().addEventListener('change', () => { $host().querySelectorAll('my-custom-element').forEach((el: any) => { // Simple read causes $effect to trigger el.value; }); }) </script> ``` See Reproduction for detail. ### Reproduction [link] Typing in the first input, it triggers the $effect of itself, that's good. While then type in the second, it triggers the $effect of both itself and the first one. Then type in the third one, it triggers all the…

### CASE-2513 · `bind` updates are too late
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug For consistency we could expect `bind`ings to be in sync with the property and to be able to see this in callbacks. In the current implementation the `bind_checked`'s `change` event fires after the `click` event so it's out of sync ### Reproduction In the second input the callback can access the updated state. This seems more consistent. Should `bind` behave like this? [link] ### Logs _No response_ ### System Info ```shell preview ``` ### Severity annoyance

### CASE-2524 · `@user` tag renders input to previous `@user` tag
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I am trying to make a toolbar programatically, which would load the elements from an object. Each element from the toolbar has a different icon, but from what it seems, only the first one being referenced gets shown. Here is the `Toolbar.svelte` component code ```svelte <script lang="ts"> import type { UIDeviceType } from "../../types/device.ts"; const icons = import.meta.glob('../../icons/*.svg', { as: 'raw', eager: true }); const deviceTypes: UIDeviceType[] = [ { label: "Network Devices", icon: "router", devices: [ { label: "Router", icon: "router" }, { label: "Switch",…

### CASE-2526 · `input type="number"` bindings can be `null` and `undefined`
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬7 · open
- **Excerpt**: ### Describe the bug The documentation says: > If the input is empty or invalid (in the case of `type="number"`), the value is `undefined`. When the value is initialized, it is indeed `undefined`. However, when later emptying the input, it becomes `null`. In previous versions it did become `undefined` - [link]][ref] seems to be what changed it in order to fix a warning. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 10.15.7 CPU: (8) x64 Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz Memory: 1.92 GB / 32.00 GB Shell: 3.5.1 - /usr/local/bin/fish Binaries:…

### CASE-2552 · Weird input validation breakage when using $$props
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** When passing down _unknown_ props using `$$props`, like so (Svelma does this, maybe other component libs too?) ```svelte <script> // SvelteInput.svelte export let value; $: props = omit($$props, 'value'); </script> <input type="text" bind:value {...props}/> ``` ...the standard HTML input validation fails when using `minlength`, like so ```html <SvelteInput required minlength="5" bind:value={val}/> ``` The produced HTML seems fine, the input element has both `required` and `minlength="5"` set, but the validation doesn't kick in if the input has fewer than 5 characters. If…

### CASE-2555 · Pattern attribute on input is missing in browser
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** Pattern attribute on inputs gets dropped. While it does work in svelte REPL. **To Reproduce** SomeComponent.svelte: ```svelte <script> import { writable } from "svelte/store"; const password = writable(""); const pattern = ".{6,}"; </script> <input bind:value={$password} type="text" name="password" autocomplete="password" placeholder="password pattern={pattern} required /> <!-- ParseError: Unexpected token --> <input bind:value={$password} type="text" name="password" autocomplete="password" placeholder="password pattern=".{6,}" required /> ``` rollup.config.js: ```js…

### CASE-2557 · Having issues with preventDefualt and form validations.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** I'm not sure if this is a bug, or if I'm working this solution the wrong way. What I'm experiencing is that the form submission gets locked, when I set a custom validation. In this case my three validations are a pattern, required feilds and then a custom validation that the two fields equal (pretty standard create password setup). *** Updated with REPL from below [link] ``` Steps to reproduce (need to be done exact): 1. click into Password 1 box, enter a strong password - Testing0!0101 2. tab into Password 2 box, enter a different password = testing0!0101 3. press enter…

### CASE-2559 · Reactivity in on:submit is not working as expected
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** I am not seeing my error message when I click the button with an empty input field. **To Reproduce** First REPL where you see the expected behavior: [link] Load the page, hit the button, see the error message Second REPL that shows how I actually want my code to be: [link] Load the page, hit the button, no error message. Type in the input, the error message shows up **Expected behavior** The second REPL should work. Alternatively, if I could somehow bind the `this` for the `on:submit` function would that make this problem go away (e.g. is the static fn callstack somehow…

### CASE-2560 · @user Select component fails after upgrade to 3.13.0.-alpha.2 (works in alpha.1)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** @user provides an `enhanced` select component which uses html to show the list of available options rather than the standard select type options. These menu options display correctly against Svelte `3.13.0-alpha.1` but disappear during the call to `flush()` when the page is being updated against Svelte `3.13.0-alpha.2`. Please see [issue raised against @user]([link]) for some screenshots **Logs** Nothing shown in browser console. Please advise on how to capture server logs if these are required. **To Reproduce** - Repl [showing the issue]([link]) against `3.13.0.-alpha.2`…

### CASE-2561 · Spread properties on inputs have unexpected readonly attributes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: **Describe the bug** Spread properties on `<input>` tags can have an unexpected behavior on readonly attributes. If a tag has `readonly={false}` along with a spread, then the readonly attribute is included in the tag as `readonly="false"`. This results in a readonly input. **To Reproduce** [link] ```html <script> let props = { type: 'text' } let value ='foo' let disabled = false let readonly = false </script> <div> Example A: Attribute is readonly="false"<br> <input {...props} bind:value {disabled} {readonly}> </div> <div> Example B: The readonly attribute is omitted<br> <input type="text"…

### CASE-2562 · Loss of reactivity or I can't cook Svelte
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍0 💬7 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** In an attempt to use the flux approach in one of the projects, it turned out that reactivity is lost in certain cases. I may not be using Svelte correctly, but I think it's a bug. **To Reproduce** There are comments in the example ([REPL]([link])). ```javascript <script> // dispatcher.filter calls the update method at items import { items, dispatcher } from './store.js'; let searchQuery = '' // bound to the input field /* In this sequence, reactivity does not work: */ $: list = $items.filter(item => item.active) $: dispatcher.filter(searchQuery) // set after list /* It…

### CASE-2578 · v5.45.3 breaks using prop inside $state (state_referenced_locally error)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug ```svelte <script> import Form from './Form.svelte' let client = $state({ name: 'Bob', cats: [ { name: 'Milli'} ] }) </script> <Form {client} /> ``` ```svelte <script> const { client } = $props() let cats = $state( client.cats.map((cat) => ({ ...cat, _id: Math.random(), })), ) </script> {#each cats as cat (cat._id)} {cat.name} {/each} ``` This used to be a perfectly fine use of Svelte, but now Svelte won't compile because it doesn't like the use of `client` inside `$state` (throws a state_referenced_locally error) Not shown above (but added to reproduction below), later…

### CASE-2586 · `<select>` doesn't respect `selected` attribute when spreading props
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: p0
- **Excerpt**: ### Describe the bug When you have a basic select tag, and give it an {...others} spread (like it's in a component and receives some properties), it will no longer show any option, regardless of it having the 'selected' property or not. I linked the playground repro, but just to have it here as well, because it's so simple to visualize: ```svelte <script> let others = {onclick: ()=> console.log('aaa')} </script> <select> <option>o1</option> <option selected>o2</option> </select> <select {...others}> <option>o1</option> <option selected>o2</option> </select> ``` First select will have 'o2'…

### CASE-2587 · "Legend" element inside "optgroup" Svelte5+Svelte Language Server
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: good first issue/help wanted
- **Excerpt**: ### Describe the bug I get a Runtime error when inseritng an <legend&gt; tag inside <optgroup&gt; inside of an <select&gt; element. As far as i've read on MDN, this is valid HTML. Doing: {@user "<legend&gt;Mamma Mia</legend&gt;"} the browser doesn't "repair" the legend element. ### Reproduction [link] ### Logs ```shell ``` ### System Info ```shell Any ``` ### Severity annoyance

### CASE-2589 · `select` with reactive `disabled` attribute hides the binded `value`
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Might relate to: [link]][ref]. After upgrading to `5.33.5` `select` with `disabled` state behaves unexpectedly. When setting `disabled` attribute to `select` component (just a wrapper around `select` element), then the binded `value` suddenly disappears. ### While reproducing the issue I figured out few things: - `select` has to be in separated file as component to reproduce it - if you remove the bind `bind:value` and change it to `value={value}` inside select component, it works - when I remove `disabled` prop from select component, it works ### Reproduction ### Broken…

### CASE-2595 · Unable to handle bound getter/setter errors
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I noticed when you throw an error via a setter, then bind an input to it, that error is not treated as a UI/rendering/effect error; using `+error.svelte` or `<svelte:boundary>` to try and catch the error does not result in anything happening. Instead, the error is logged to the console as "uncaught", and everything continues like nothing went wrong. —except it doesn't; some related event handlers/effects silently fail. While I can appreciate that a getter/setter error isn't strictly UI/rendering/effect related, leaving the app in a half-working/UB state is a poor…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2511 · Svelte 5: `{@user someVar}` Does not hydrate after SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Using `{@user someVar}` in Svelte 5, I noticed that hydration does not overwrite the SSR value. For example (and this is in the reproduction repo), consider this component in a SvelteKit app: ```svelte <script> import { browser } from "$app/environment" const renderLocation = browser ? "In browser" : "On server" </script> <h1>Welcome to SvelteKit</h1> Standard: {renderLocation} <br /> @user: {@user renderLocation} ``` I would expect that after hydration, the page would say: ``` <h1>Welcome to SvelteKit</h1> Standard: In browser <br /> @user: In browser ``` But instead, it…

### CASE-2517 · Svelte 5: component hydration not repairing/removing target child elements
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: documentation
- **Excerpt**: ### Describe the bug As per the [v4 Client API docs]([link]), a component can be created with the `hydrate: true` option to repair and remove existing child elements of the target. The [v5 breaking changes docs]([link]) state that the compiler option `hydratable` has bees removed and all components are now hydrated and components are now created with `createRoot` or `mount`. Neither of these functions accept `hydrate: true` as an option. When using `createRoot` or `mount` in v5, child elements of target are left unchanged. The expected behaviour is that of v4 (with `hydrate: true`) and DOM…

### CASE-2525 · Svelte 5: Assignment to a private non-reactive property of a class in a .svelte.ts file will throw an error
- **Principles**: P-F4 · **Env**: svelte, react, vite
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug 1- create a .svelte.ts or .svelte.js file 2- create a class with a private non-reactive property (doesn't matter if it's initialized or not) 3- assign a value to the private (in the constructor or in a method) 4- import the class into a svelte file and initialize it A compilation error is thrown ``` [vite] Error when evaluating SSR module /src/routes/+page.svelte: failed to import "/src/routes/test.svelte.ts" |- TypeError: Cannot read properties of undefined (reading 'includes') at validate_assignment…

### CASE-2563 · onDestroy doesn't work in Component Lib in ssr mode
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** I am making a component lib. In one component (ssr mode) I was using onDestroy (imported from svelte) which called get_current_component().$$.on_destroy.push(fn); where it said on_destroy is undefined. I guess that is a bug? If I'm abusing the use of generate ssr then that would be an explanation of undefined behavior. **To Reproduce** Try creating a component lib (one output contains "generate": "ssr", while client output "hydratable": true) and import the lib into your sapper project. component lib's package.json "main" points to the ssr lib while "browser" points to…

### CASE-2572 · SSR boolean attributes
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: Svelte doesn't render boolean attributes properly on the server side. For instance, for a button ``` <button :disabled>Hello</button> ``` This will render (when disabled = false) ``` <button disabled="false"></button> ``` which means the button actually is disabled [Here's a gist]([link]) with an example and the ssr code it generates.

### CASE-2577 · `<textarea>` value handling inconsistencies
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug There are some inconsistencies in how `value` / `defaultValue` are handled with `<textarea>`. Maybe that should be unified. ### Reproduction ```svelte <textarea value="hi"></textarea> <textarea value={'hi'}></textarea> <textarea defaultValue="hi"></textarea> <textarea defaultValue={'hi'}></textarea> ``` [Playground]([link]) Where the `textarea` gets a value: | Case | CSR | SSR | | ------------------------------------------- | --- | --- | | `<textarea value="hi"></textarea>` | ❌ | ✔️ | | `<textarea value={'hi'}></textarea>` | ✔️ | ✔️ | | `<textarea…

### CASE-2599 · TypeError: next_sibling is null during hydration
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug When certain component is SSR-ed, I get a type error during hydration (see logs section). Minimal reproduction I could make looks like this: ```svelte <script> let { name, remaining } = $props(); </script> <span> <span>{name}</span>{remaining >= 2 ? ',' : ''} </span> ``` The problem is caused by spacing between `</span>` and `{`. When I make the following change, the error no longer occurs: ```diff - <span>{name}</span>{remaining >= 2 ? ',' : ''} + <span>{name}</span> {remaining >= 2 ? ',' : ''} ``` This crash causes Svelte to remove everything from DOM. Page that was…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2512 · Low quality animation example
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug The animation example at [link] is of low quality and fails on double and triple click. Personally, I think non-additive FLIP is bollocks and a bigger problem, but I'm not going to tell you how to animate like I tried to tell Apple and the W3C. ### Reproduction Click rapidly, as seen in the following video: [link] [link] ### Logs _No response_ ### System Info ```shell The video was recorded using Brave browser but I don’t think it matters. ``` ### Severity annoyance

### CASE-2515 · `spring` performs differently on displays with different refresh rates
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug After creating an element with `spring` stores used for coordinates, testing the animation on different displays results in a noticeably different animation. My animation on an m1 pro MacBook pro 120hz display: [link]]/assets/66829812/6eb6c1ba-8beb-46da-9fcb-81a950e02e54 The same animation on a 60hz external display: [link]]/assets/66829812/3f98b357-36b5-4aab-a6fe-04600c09d028 The same animation on the 60hz display resolves much slower. ### Reproduction I found this REPL online, where the same behavior can be observed when testing on both a 60hz and a 160hz display [link]…

### CASE-2523 · Svelte 5: Element being re-mounted when input transition is changed within an #if block
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: edge, svelte
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug If an element inside an #if block has its intro transition changed after being mounted (either with the in: or transition: directive) the intro transition is executed again and the action also runs again (but only the first time the transition changes after the element is mounted) ![msedge_6SQGpCIBMi]([link]]/assets/84819630/008a4ae6-5680-4c18-ace1-e569dec005f9) ### Reproduction [Reproduction]([link]) ### Logs _No response_ ### System Info ```shell App.svelte (Svelte v5.0.0-next.25) ``` ### Severity blocking an upgrade

### CASE-2529 · A rotated element's crossfade animation goes in wrong direction
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬7 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug An element with a css transform rotation will move in the wrong direction when transitioning using `crossfade`. The result is that the illusion (of one element moving from one place to the other) breaks, and instead it looks like two separate elements appearing from and disappearing into different locations. I love the `crossfade` feature :heart:. I'll just have to avoid using it with rotated elements until this is fixed. ### Reproduction [link] By removing the rotation from the css transform, everything looks normal again: [link] ### Logs _No response_ ### System Info…

### CASE-2541 · Bug of local transition with keyed clause
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍6 💬7 · closed
- **Excerpt**: Is this about svelte@user? This project is currently in a pre-release stage and breaking changes may occur at any time. Please do not post any kind of bug reports or questions on GitHub about it. No **Describe the bug** When using the `{#key }` clause, the local transitions do not work well. **To Reproduce** [link] **Expected behavior** In the provided REPL, the expected behavior is for the items to enter and exit in a smooth manner, with or without local modifier. It only happens with the keyed clause, and works well with an `{#each }` clause: [link] **Information about your Svelte…

### CASE-2542 · if_block0.p is not a function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: **Describe the bug** This Bug appears in Version 3.29.6 I assume that this is the breaking change: [link]][ref] I have this code: ```html {#if fetching} <li transition:slide|local> <svg class=spinner viewBox="0 0 50 50"> <circle cx=25 cy=25 r=20 fill=none stroke-width=5/> </svg> </li> {:else if query && !data.length && !error} <div class=no-results>لا نتائج</div> {/if} {#if error} <div class=no-results>حدثت مشكلة في البحث، حاول لاحقًا</div> {/if} ``` And removing `<li transition:slide|local>` fixes it. **Logs** When running the code and the if statement is triggered I get this error in…

### CASE-2543 · Fly transition jumps when element is translated
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: bug
- **Excerpt**: **Describe the bug** If you translate an element with a fly transition applied to it, the transition can "jump" and not be smooth. This mainly seems to occur if you change the translation amount after transitioning the element in and out once. Here's a GIF of the issue in action. You'll notice that it is smooth at first, but the second transition (after translating the element) starts by abruptly jumping to the right. ![fly]([link]) **To Reproduce** 1. Trigger a fly transition in and out on an element. 2. Translate the element 3. Trigger the transition again. You'll notice a "jump" at the…

### CASE-2547 · Slot having stale state if transition is reversed midway
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: opera
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **Describe the bug** Slot content seems to have stale state if the component were to be destroyed, but the transition was reversed midway. **To Reproduce** [REPL]([link]). I apologize if the example is excessive, I just tried to recreate the components from my app as close as possible. My case: 1. I have an array of stuff in a store 2. I want to open a single item in a modal. The modal is a component with a default slot, that basically handles the transition of the modal wrapper based on a boolean prop 3. in this modal I will perform some async operations and then delete the item from the…

### CASE-2565 · Transitions break basic functionality
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬7 · closed · labels: bug
- **Excerpt**: Sorry for the vague title. It's late. Using transitions seems to break basic functionality in some circumstances. By basic functionality I mean a simple `if` clause in the template, like so: ``` {#if condition} <Child/> {/if} ``` ...where the `<Child/>` is using transitions. Reproduction: [link] ### Instructions (also included in the REPL): 1. Click the button to show the child component 2. Write something in the input to reveal (with an animation) the close-button 3. Click the close button and observe how the app breaks (not closing the child component)

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2516 · Svelte 5: Cannot use :global() with CSS nesting
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍2 💬7 · closed · labels: bug/css
- **Excerpt**: ### Describe the bug A compiler error is thrown when using a nested CSS selector with `:global()`. The nested version of `div :global(.b)` throws an error, whereas the non-nested version doesn't throw an error. ### Reproduction [REPL link]([link]) Steps: 1. Create a component with the following source code: ```HTML <div> <div class="a">Normal nesting works</div> <div class="b">Nesting with :global doesn't work</div> <div class="c">Non-nested selector with :global works</div> </div> <style> div { font-family: monospace; .a { color: blue; } :global(.b) { color: red; } } div :global(.c) { color:…

### CASE-2598 · Error Failed To Load Config In Creating New Project With TypeScript
- **Principles**: P-B1, P-B2, P-B3 · **Env**: typescript, tailwind, svelte, vite
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug I created a new project using npx sv create, choosing the barebone template with TypeScript, Tailwind CSS, Tailwind Typography, Tailwind Forms, and the NPM package manager. Then I encountered this error when running npm run dev. WARNING] Cannot find base config file "./.svelte-kit/tsconfig.json" [tsconfig.json] ``` tsconfig.json:2:12: 2 │ "extends": "./.svelte-kit/tsconfig.json", ╵ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ failed to load config from D:\svelte\test\vite.config.ts error when starting dev server: Error [ERR_MODULE_NOT_FOUND]: Cannot find module…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2531 · Background video not auto playing on mobile iOS safari browser used svelte to build the website
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, ios, svelte, mobile, ipad
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Video tag no auto play on page load only in `iOS` mobile environment. I have not checked on `iPad`, it does play on `Macbook air` I have followed everything mentioned by [Delivering Video Content for Safari]([link]) It is an `MP4` file format as suggested `<video autoplay playsinline>` I though early on that this might be a programming issue so raised the issue stackoverflow as well [Background video not auto playing on safari browser used svelte to build the website]([link]) Used `muted` as well the `mp4` file has `no audio`. `<video autoplay playsinline muted>` Many…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2544 · Non-scrollable element with `bind:clientHeight` and `z-index` (iOS 14)
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: ios 14, ios
- **Signals**: 👍4 💬7 · closed · labels: awaiting submitter
- **Excerpt**: **Describe the bug** Using `bind:clientHeight` on an element with `z-index` prevents that element's contents from being scrolled on iOS 14. On previous versions of iOS and on other OS's, this bug does not appear. The iframe added by `add_resize_listener` specifies a `z-index` that is 1 less than the element's `z-index`, as well as `pointer-events: none`. Perhaps this is connected... **Logs** N/A **To Reproduce** I've made a small REPL with a simplified version of the environment this occurred in for us at [Playpilot]([link]) (in our top navigation): [link] **Expected behavior** The `z-index`…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2574 · Runtime error with nested components, {{#if}}s, and {{yield}}
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: Very similar to [link]][ref] - observed in Svelte 1.22.3. I got a reproduction in the REPL [here]([link]) but then downloaded it locally to fiddle with it some more, so you can find an even slimmer reproduction in [link] When the state changes and causes some elements to be cleaned up, an error is thrown `Uncaught TypeError: Cannot read property 'unmount' of null` Seems to happen when there is a loop that contains a component with `{{yield}}` inside of an `{{#if}}` block, but only when there is another Svelte component nested inside of the `yield`ing component.

### CASE-2576 · Should component.mount be part of the public API?
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: I actually missed this when it was introduced – slaps self on wrist for not paying close enough attention to [link]][ref] – but via [ref] I just realised we now have a `component.mount(node)` method. Obviously we need that for nested components, since `mount` happens at a separate time to initialisation, but should it be a public method (as opposed to e.g. an undocumented private `_mount` method)? My instinct is that it shouldn't, because once you have `mount`, you kind of have to have `unmount` (which is different from `teardown`, but in a slightly confusing way), adding additional code to…

### CASE-2581 · event.stopPropagation() does not work when nested element within event using onMount()
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug event.stopPropagation() appears to not work when an outer element has an event listener added via `onMount() `and an inner element has an event listener added via `onclick()` Stop propagation works when using <code>on:click</code> but does not work for <code>onclick</code> The expected behavior is that `onclick()` should stop propagation, the same as `on:click()` did. ### Reproduction Example: [link] If you click on the outer element (i.e. the "count" text) it adds 2. If you click on the inner element (i.e. the number) it should add 1. But because stopPropagation() does…

### CASE-2582 · Unmount performance regression since 5.36.0
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬6 · closed · labels: perf
- **Excerpt**: ### Describe the bug I noticed a significant increase in unmout time (during component replacement) after switching to Svelte 5.36.0 (`experimental.async` disabled), from 55 ms to 8.5 seconds for the dev server and up to 3 seconds for the production build. Perhaps this is related to [link]][ref] but i don't use stores at all. ### Reproduction 1. Open [SJSF playground]([link]) 2. Pick any other example (I chose `single` in my measurements) Performance traces for versions 5.35.7 and 5.38.3 from the dev server: - [Trace-5.35.7.json]([link]) - [Trace-5.38.3.json]([link]) ### Logs ```shell ``` ###…

