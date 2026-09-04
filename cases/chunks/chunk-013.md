# Case Chunk 013 — Round 13

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2201 · Keyed each does not preserve element (re-create) when reordered
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬23 · open · labels: feature request/temp-stale
- **Excerpt**: **Describe the bug** I try to render a list of input element using keyed each block so that when enter key is pressed when an input is focused it will be swapped with the next input element. Likewise when shift+enter is pressed it will be swapped with the previous input element. Forward swapping works as expected and input keeps the focus. But backwards swap (shift+enter) causes the previous input to be re-created and the focus is lost. I share a sample app written with both Svelte and React. React version work as expected. **Codesandbox Repo** [svelte demo]([link]) [react demo]([link])…

### CASE-2209 · "Batch has scheduled roots" invariant_violation error after updating to 5.55.6
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍8 💬20 · closed
- **Excerpt**: ### Describe the bug Hello! I was noticing some issues with a page on my SvelteKit app that I believe was caused by using the experimental async / remote functions ([link]][ref]). After updating, the issue has worsened and the page is now completely broken, giving `fn is not a function` and then `Svelte error: invariant_violation` in the browser console. ### Reproduction [link] Original project: [link] ### Logs ```shell [Error] TypeError: fn is not a function. (In 'fn()', 'fn' is null) in <unknown> in ToggledContent.svelte in +page.svelte in +layout.svelte in +layout.svelte in root.svelte in…

### CASE-2211 · reactive variable using $state breaks when updated inside #await
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: linux, react, svelte
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: ### Describe the bug I'm trying to migrate a svelte 4 app to version 5 but it seems that updating a variable marked with $state inside an async function called by {#await fn()} breaks the component with no errors in console. ### Reproduction I created a [simple playground]([link]) as you can see there's no output but if you remove `$state('world')` and replace it by `'world'` using the "old way" it works ![image]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.11 Debian GNU/Linux 11 (bullseye) 11 (bullseye) CPU: (14) x64 Intel(R) Core(TM) Ultra 7 165U Memory: 16.04…

### CASE-2212 · Update of $state variable overwrites it instead of update
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬20 · open · labels: documentation
- **Excerpt**: ### Describe the bug Update of $state variable overwrites it instead of update when the state variable was returned by a function. As you can see in the 2nd log line, `count2` is not a state proxy anymore. ``` <script> //App.svelte import { createStore } from './Stores.svelte.js'; let count = $state({}); let count2 = createStore(); console.log('stores', count, count2); count = { some: 'value' }; count2 = { some: 'value' }; console.log('stores after', count, count2); </script> ``` ``` //Stores.svelte.js export function createStore() { let store = $state({}); return store; } ``` ###…

### CASE-2216 · Class state has a fundamental typing flaw
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍13 💬19 · closed · labels: types / typescript
- **Excerpt**: ### Describe the bug Consider the following example: ```ts export class Foo { count: number; // Property 'count' has no initializer and is not definitely assigned in the constructor.(2564) constructor() {}; } ``` In with a Svelte class, there is no way I can find to declare class fields in this way: ```ts export class Foo { count: number; constructor(initialCount) { this.count = $state(initialCount); // `$state(...)` can only be used as a variable declaration initializer or a class field } } ``` Doesn't work, because `$state` can't be used in the constructor. ```ts export class Foo { count:…

### CASE-2218 · [feature] Add `Portal`s to Svelte
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍67 💬19 · open
- **Excerpt**: ### Describe the problem I'm aware that this discussion has been split across a few issues. However, none of those issues have been _explicit_ feature requests for portals. Some issues have been closed early, or been distracted from the original topic, or been too narrow (e.g., `<:Body>` tags). Thus, I'm creating this guy to make a central, focused issue around portals (with new thoughts). The problem that this feature would address is the need for _clean_, _well-supported_ `portal`s in `svelte`. I believe @user caught most of the common use cases in [their comment on another…

### CASE-2225 · Accessibility warnings that rely on event directives are wrong
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍6 💬18 · open · labels: a11y
- **Excerpt**: ### Describe the bug This perfectly legit code... ```svelte <div on:click={handler}><slot/></div> ``` ...produces these a11y errors... ``` A11y: visible, non-interactive elements with an on:click event must be accompanied by an on:keydown, on:keyup, or on:keypress event. svelte(a11y-click-events-have-key-events) A11y: <div> with click handler must have an ARIA role svelte(a11y-no-static-element-interactions) ``` This is wrong in two ways: - Events propagate. Simply attaching an event to a non-interactive element has no effect _in and of itself_ on a11y or the semantics on which AT relies. (If…

### CASE-2227 · Switch statements [enhancement]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬18 · closed
- **Excerpt**: It would be nice to have a {{#switch (VARIABLE-NAME) }} tag with complementary {{case (VALUE)}} tags. I would like to use it in a SPA rather than a number of {{if}} {{elseif}} tags. <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of…

### CASE-2231 · Svmigrate deletes styles and replaces with `/*$$__STYLE_CONTENT__$$*/`
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬17 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Deleted all my styles and output `/*$$__STYLE_CONTENT__$$*/` ![image]([link]) ### Reproduction I ran `npx sv migrate svelte-5` I had a file with an "error" due to having a `<tr>` inside a `<table>`. I understand <tbody> and <thead> are technically correct, but 1) This shouldn't break the entire file and migration script. 2) Nearly all browsers will insert the tbody anyway / figure out how to render the table. I've been developing websites for a decade and it's never shown up as much as an a11y warning on lighthouse, let alone an actual a11y problem or fail for browser…

### CASE-2236 · Application won't compile - "cannot read property 'n' of undefined" since 3.16.1
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍5 💬17 · closed · labels: bug
- **Excerpt**: **Describe the bug** Upgrading an existing app to Svelte 3.16.1 causes client compilation to fail with the error `Cannot read property 'n' of undefined`. I'm the second person to see this in the discord, it seems. I don't know where the error comes from or what the causes is (but I do see that the variable `n` is used a lot in recent Svelte commits - [link]]/commit/bb5cf9ada7706fed9bb86467d2ae78c76f88b9d0). **Logs** ant@user  ~/Projects/beyonk-dashboard   master ●  npm run dev > [email] dev /home/ant/Projects/beyonk-dashboard > PORT=1233 NODE_CONFIG_ENV=${NODE_ENV} sapper dev ✗ client…

### CASE-2242 · Svelte 5: `{#if}` blocks are not tree shaken... shook?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍4 💬16 · closed
- **Excerpt**: ### Describe the bug It can be useful to have parts of a component only render during development, this can be achieved via build-time constants or e.g. SvelteKit's static env variable replacement. Unfortunately, the structure of Svelte 5's output prevents tools like Rollup from making these optimizations. This leads to unnecessary code being included in the production build and potentially private internals being leaked. ### Reproduction ```svelte <script> import DebugTools from './DebugTools.svelte'; </script> Visible text {#if false} DEBUG MODE <DebugTools /> {/if} ``` ```svelte <!--…

### CASE-2249 · Plugin svelte: A11y: on:blur must be used instead of on:change, unless absolutely necessary and it causes no negative consequences for keyboard only or screen reader users.
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍14 💬16 · closed · labels: feature request/compiler
- **Excerpt**: I recently updated Svelte to latest version and this warning started to show up. So I decided to try that out, change the `on:change` on some selects to `on:blur`, but they stopped working. It's only after I click away from the select that the event gets triggered, simply selecting the option doesn't do it. I know I can simply ignore these, but I wanted to see if I can actually go ahead with this recommendation, maybe I'm doing something wrong. Thanks!

### CASE-2258 · `$state(...)` can only be used as a variable declaration initializer or a class field
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, vite
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### Describe the bug When I use any rune within a class in a file suffixed with `.svelte.ts`, I get compile errors while running vitest. However, I don't get compile errors while running `pnpm dev` or `pnpm build`. There may be something with vitest that doesn't know the new syntax; just a guess since this is experimental. I am currently using runes in abstract and concrete classes. I tried installing version `4.0.0-next.6` of the `@user/vite-plugin-svelte`, but that didn't change anything. I am currently on version `5.0.0-next.221` of Svelte. I am using Svelte Kit version `2.0.0` The…

### CASE-2269 · Bug SSR "Cannot access 'x' before initialization" with reactive let + autosubscribe
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react, svelte
- **Signals**: 👍7 💬15 · closed · labels: bug
- **Excerpt**: **Describe the bug** With SSR, this code: ~~~html <script> $: x = {} </script> {$x} ~~~ compiles to this: ~~~js // ... $x = get_store_value(x); let x = {} // ... ~~~ `x` is used before it is declared, and so it crashes. (It does not work with an actual store either.) **To Reproduce** [link] (see ssr JS output) **Expected behavior** Same behavior as non SSR. **Information about your Svelte project:** - Svelte version 3.12.1 - REPL **Severity** Annoyance. The error mentioned in the title easily worked around by declaring the `let` variable outside of the reactive block: ~~~js let x = {} $: x =…

### CASE-2274 · Spreading in the template isn't a potentially reactive operation
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, react, svelte
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug ```svelte <span>{ [...array] }</span> ``` is compiled as static text when the variable isn't marked as reactive. Though I doubt people use it in the prod (at least it should be `array.join(", ")`), they can do it during development. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell Svelte 5.1.2 ``` ### Severity annoyance

### CASE-2275 · Svelte 5: Can not reassign $derived variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug Can not reassign $derived variable ### Reproduction let tacheinput= $state(") let title = $derived("Todo App:" +tacheinput) title = "my new title" // not work ### Logs _No response_ ### System Info ```shell not usefull ``` ### Severity blocking all usage of svelte

### CASE-2276 · svelte 5 bug: class getters rerun when non-dependent state updates
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, svelte, react
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug If you have a class with a method and a getter, whenever a non-dependent state changes outside of the class, the getter will rerun but the method won't. I don't expect the getter to rerun if it doesn't doesn't access any reactive state from inside the getter. A class method doesn't rerun unless it accesses a reactive variable inside that changed. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.3 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 3.94 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.12.2 -…

### CASE-2285 · `bind:value` on a customizable `<select>` with a `<button>`/`<selectedcontent>` trigger resets the selection to `""`
- **Principles**: P-E1, P-E2, P-E4, P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬13 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug When a `<select>` uses the customizable-select API (`appearance: base-select`) and contains the author trigger `<button><selectedcontent></selectedcontent></button>`, adding `bind:value` breaks option selection. Clicking an option fires `change`, but the select's value reads as `""` instead of the chosen option, so the bound variable never updates and the UI snaps back to the placeholder. The bug requires the combination of `bind:value` and the author `<button>` trigger. Removing either one fixes it. Confirmed that it's not SSR/hydration-related (it reproduces identically…

### CASE-2293 · Get rid of "A11y: Avoid using autofocus" warning
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍67 💬13 · closed
- **Excerpt**: ### Describe the bug Let's call this warning for what it is - a bug. `autofocus` is 100% legitimate feature of HTML5, and just because it can be abused it shouldn't be triggering warnings. Just some of many websites that use `autofocus`: * google.com * bing.com * yahoo.com Warning on something that is key feature a lot of major websites use makes no sense. The alternative of focusing the main input with js is not an improvement at all. I'm not the first person affected. This has been raised many times in the past, and unreasonably closed without fixing. Warning systems are useless if most of…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2202 · Dynamic loading of cdn-hosted Svelte 5 component
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍5 💬22 · open
- **Excerpt**: ### Describe the bug Hi team, I am not sure whether this is a bug, not supported or me not having proper configuration. I hope that you or someone is able to help me with clarification. The requirement I am trying to satisfy is externally compiled and hosted Svelte widgets that can be loaded into my SvelteKit app but when I try to dynamically import and load the Svelte widgets, I get the following error. <img width="975" alt="image" src="[link]> I can see that the dynamically loaded component taps into the svelte runtime within the sveltekit project, so I got that going for me :) Looking…

### CASE-2204 · Support custom element with nested components without errors
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍31 💬23 · closed · labels: custom element/popular
- **Excerpt**: I have only **1 customElement** and inside it there are several internal components of the Svelte. These internal/nested components cannot be 1 web component. By setting the **customElement** option in the `rollup`, he forced me to put `<svelte:options tag={null} />` on all internal components, but that seems to be wrong, as they should not be 1 `customElement`. After setting up, I'm getting the following errors for internal components marked as `tag={null}`: ![image]([link])

### CASE-2205 · Dynamic components
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍29 💬22 · closed
- **Excerpt**: This idea isn't at all fleshed out, but it's something that's come up a few times. Occasionally it's useful to create nested components dynamically: ```html <!-- this... --> <[CurrentRoute]/> <!-- ...instead of this: --> {{#if route === 'home'}} <Home/> {{elseif route === 'about'}} <About/> {{elseif ...}} <-- ... --> {{/if}} ``` The same idea could be used for e.g. lazy-loading components: ```html <LazyLoad src='./SomeComponent.html'> <p>loading, please wait...</p> </LazyLoad> ``` ```html <!-- LazyLoad.html --> {{#if Component}} <[Component]/> {{else}} {{yield}} {{/if}} <script> export…

### CASE-2208 · Svelte 5 Hydration mismatch (with adapter-static)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: ### Describe the bug Using Svelte 5 with my unchanged (working) Svelte(Kit) Application throws an error. Not sure how to explain what happens, but a clue could be that I use adapter static? ![image]([link]]/assets/895085/92308193-4840-401c-985c-d9de570f7c62) ### Reproduction I dont have the time at the moment to produce a clean reproduction scenario, hopefully there are enough clues from the screenshot. Maybe I just needed to update some of the related packages? ### Logs ```shell [svelte] hydration_mismatchHydration failed because the initial UI does not match what was rendered on the server…

### CASE-2221 · Store is not being updated synchronously / store value is incorrect
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬19 · open · labels: bug
- **Excerpt**: **Describe the bug** Store value is not up-to-date if using a `$` subscription inside a subscription function. **To Reproduce** 1. Open [this REPL]([link]). 2. Open your browser console. 3. Click on "Increment" a few times. 4. Click on "Cause reset". 5. Check your console. For a real life example look at [this REPL]([link]). ![image]([link]) **Expected behavior** Value should be in sync. **Severity** Blocking

### CASE-2223 · Massive perf drop in probably 5.41.1
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬18 · closed · labels: perf
- **Excerpt**: ### Describe the bug After recent upgrade from 5.19.12 to 5.41.1 I found our app is freezing to multiple seconds (got as much as 5s in some cases) when I click through UI. <img width="1095" height="570" alt="Image" src="[link] /> ### Reproduction I am not yet sure how to make a reproduction for it outside our code, but I think the problem is important enough to start discussion about it and iterate on the findings. What I know so far: 1. We are not using async 2. It seems like the regression appears in 5.41.1. I can't say for sure, because I don't quite know a specific set of steps that lead…

### CASE-2230 · Component & file names comment markup is missing in svelte v5
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍10 💬17 · open
- **Excerpt**: ### Describe the bug In svelte v4, the markup in dev mode would contain the file name & components names in the html markup as comments. Here's a screenshot: ![image]([link]) But in svelte v5, the markup now omits the file name & comment names in dev mode, making it hard to parse the markup in large apps. ![image]([link]) ### Reproduction For v4: [link] For v5: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 15.2 CPU: (8) arm64 Apple M1 Pro Memory: 123.53 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.0 - ~/.nvm/versions/node/v20.11.0/bin/node npm: 10.2.4 -…

### CASE-2239 · Collection of bugs with async svelte & bits-ui & more (in a more "complex app")
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍7 💬16 · closed
- **Excerpt**: ### Describe the bug I mostly explain things in [this video]([link]). TLDR; it is about issues with async waterfalls, components like dialogs or dropdowns not working, hydration mismatches and more. ### Reproduction Here is the repo (the most up to date is on the dev branch): [link] ### Logs ```shell [svelte] hydration_mismatchHydration failed because the initial UI does not match what was rendered on the server[link] warn @ client.js?v=a27e462a:3196 hydration_mismatch @ chunk-S6PZDPR6.js?v=a27e462a:90 read_hydration_instruction @ chunk-RTJCWWVW.js?v=a27e462a:4200 update_branch @…

### CASE-2254 · Newline in child element text causes parse error in Svelte 5.17.4
- **Principles**: P-A3, P-H1 · **Env**: windows, svelte, vite
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### Describe the bug Starting with Svelte 5.17.4, there is a parse error when the text passed as a child element contains a newline. Occurring on Windows using VS Code in runes mode. ![image]([link]) ### Reproduction Attaching images and uploading with "txt" extension as uploading "svelte" files isn't supported. ![image]([link]) ![image]([link]) [CustomDiv.txt]([link]) [CustomPanel.txt]([link]) [package.json]([link]) ### Logs ```shell PS C:\cr-bitbucket\RMP Platform Scala\w2e-svelte\svelteui> npm run dev > [email] dev > vite dev VITE v6.0.7 ready in 4361 ms ➜ press h + enter to show help…

### CASE-2260 · Svelte Deeply nested SVG's cause lag
- **Principles**: P-A3, P-H1 · **Env**: macos, svelte
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: ### Describe the bug When SVG elements are rendered to the page it causes a big performance slow down. Parsing the HTML happens instantly, but then there is a presentation delay of over 500 ms ![image]([link]) ![image]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.4.1 CPU: (10) arm64 Apple M2 Pro Memory: 167.08 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.2 - /opt/homebrew/bin/node Yarn: 1.22.21 - ~/.nvm/versions/node/v18.16.1/bin/yarn npm: 10.6.0 - /opt/homebrew/bin/npm pnpm: 8.14.1 - ~/.nvm/versions/node/v18.16.1/bin/pnpm…

### CASE-2271 · (0 , reaction.fn) is not a function in update_reaction
- **Principles**: P-A3, P-H1 · **Env**: react, svelte
- **Signals**: 👍0 💬14 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug After we've updated to the latest 5.34.3 from 5.33.19 we are getting lots of the following errors. Unfortunately we haven't been able to understand what is leading to this and the error stacks in our error collecting system are limited to the ones on the screenshot. I know that reproduction would be much better than a screenshot, but hopefully knowing what changed between versions and having context about svelte internals could still help you guess what it could be connected to. <img width="1323" alt="Image" src="[link] /> ### Reproduction Have no idea even where to begin…

### CASE-2272 · hydration_html_changed bug
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug "If the {@user ...} value changes between the server and the client, it will not be repaired during hydration, i.e. the server value will be kept. That’s because change detection during hydration is expensive and usually unnecessary." This is just plain wrong. Especially when using adapter-static, where ssr pages reflect the data fetched at build time. There's also a real life situation where an ssr page would use mp4 with plain html5 video tags and the client-side version would be videojs and m3u8 streams. Or ssr pages might contain separate images instead of…

### CASE-2281 · Unrecoverable error in <Root>
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬14 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** After updating to 3.38 I am seeing errors in the console, downgrading to 3.37 seems to resolve the issue **Logs** <img width="1504" alt="Screenshot 2021-05-01 at 09 58 02" src="[link]> **To Reproduce** Happens in my svelteKit project on initial load

### CASE-2284 · Whitespace Bug
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬14 · closed · labels: awaiting submitter
- **Excerpt**: I know I can resolve this by modifying the build js file but wondering how I can avoid this weird whitespace from occurring. [link] <img width="171" alt="Screen Shot 2019-07-08 at 9 08 51 PM" src="[link]>

### CASE-2286 · Parts of application infrequently broken after v5.43.12
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: ### Describe the bug This PR seems to have introduced _something_ that breaks our app: [link]][ref] (we checked every single version from v5.42.0) I'm not sure what happens, but we have a table with multiple component. Clicking on the component causes it to toggle from "preview" to "input" mode, and when we do this enough times the components start freezing. Difficult to explain, but here's a video showing how it stops working: [link] One last thing i have to get off my chest: I am starting to get trust-issues with Svelte upgrades. We have been affected 4 different times the last months due…

### CASE-2289 · `" "` (space) in text nodes replaced with `""` (null string) in each blocks ([email]-next.97+)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### Describe the bug If you have a component that creates a bunch of text nodes via an `{#each}` loop, on HMR the spaces between those nodes disappear (see video). On page refresh the spaces come back, so this appears to be an HMR problem. [link]]/assets/28758057/f283a4de-93cb-4594-80e2-adfc93cd395e I tested Svelte versions and found that this issue started in `[email]-next.97`. Summary of tested versions (✅ means it worked as expected, ❌ means the issue was observed): - ❌ 5.0.0-next.150 - ❌ 5.0.0-next.100 - ❌ 5.0.0-next.97 - ✅ 5.0.0-next.96 - ✅ 5.0.0-next.95 - ✅ 5.0.0-next.93 - ✅…

### CASE-2294 · The offsetHeight of the element wrapping the local image is equal to 0
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ## version: "svelte": "^3.31.1", **Describe the bug** The offsetHeight of the element wrapping the local image is equal to 0 ```html <script> import { onMount } from "svelte"; export let plugins = [ { icon: "./assets/wifi.png" }, { icon: "[link] }, ]; let liOrigin = {}; let lis = []; onMount(() => { // I'm sure local images exist // Local image bug, Web image ok liOrigin.height = lis[0].offsetHeight; console.log(liOrigin); // lis[0] // liOrigin.height 0 /////////////////////////////////// bug // lis[1] // liOrigin.height 502 }); </script> <ul> {#each plugins as item, i} <li…

### CASE-2297 · [5.41.2] $inspect updates give negative feeling due to UpdatedAtError
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: ### Describe the problem <img width="752" height="200" alt="Image" src="[link] /> Screenshot shows just a simple boolean state toggle with `$inspect`. I've no idea how `UpdatedAtError` update was considered to be a nice addition but it gives a feeling you did something wrong or you have an error. Every time I see it I just want to remove `$inspect` to not see a message with `Error` in it. Quite often `$inspect` is used for some debugging and seeing a message with error is not what you expect. ### Describe the proposed solution Add a way to have `$inspect` without this `UpdatedAtError`, just…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2203 · Svelte 5: Transition easing functions aren't reversed during out transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬22 · closed
- **Excerpt**: ### Describe the bug Take `cubicOut` as an example; in Svelte 4, this is what it looks like (see [REPL]([link])): [link]]/assets/26527405/dc433001-5f1e-4eb6-b026-f7b59c78847a Nice and graceful. Now, in Svelte 5, however, the same exact code yields a very different "out" transition (see [REPL]([link])): [link]]/assets/26527405/da717577-c571-4fe9-8fe7-7e7895cf2dc4 Which fails to reverse the easing, and thereby creates a jarring look; this is presumably because internally [`Animation.reverse()`]([link]) is being called for the out transition, which results in the latter type of "reversing". But…

### CASE-2217 · An element that uses the animate directive must be the immediate child of a keyed each block
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍64 💬19 · open · labels: transition/animation
- **Excerpt**: ### Describe the problem The animate directive is only allowed to an immediate child of a keyed each block. ```svelte {#each todos.filter(t => !t.done) as todo (todo.id)} <label animate:flip>{todo.description}</label> {/each} ``` As soon as the child might become more complex, the child element might be wrapped in its own component. That breaks the animate directive with the well known error message. ```svelte {#each todos.filter(t => !t.done) as todo (todo.id)} <Todo {todo} /> {/each} ``` So from a developer experience perspective, this should be possible as well because inside that…

### CASE-2220 · Error: offset is longer than source length w/ Svelte v3.38.3
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍3 💬19 · open · labels: bug/compiler
- **Excerpt**: Since the update to the latest Svelte version (3.38.3) an error is thrown from Vite when a request comes in. **Logs** ```shell $ svelte-kit dev --port 8000 SvelteKit v1.0.0-next.116 local: [link] network: not exposed Use --host to expose server to other devices on this network offset is longer than source length! Error: offset is longer than source length! at numberToPos (/<path/to/the/project>/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:4234:15) at formatError (/<path/to/the/project>/node_modules/vite/dist/node/chunks/dep-0ed4fbc0.js:44611:24) at TransformContext.error…

### CASE-2226 · flip animation broken in 3.15.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬18 · closed · labels: perf
- **Excerpt**: See this REPL: [link] Note that it is using version 3.14.1 of Svelte. Click the add button a few times. Now toggle the "Horizontal" checkbox. Notice how the buttons gracefully slide between being stacked vertically and being laid out horizontally. Now change the version at the end of the REPL URL to 3.15.0 or higher. Repeat the steps to exercise the UI. Notice that it is no longer graceful. In fact, which switching from horizontal to vertical you have to wait a couple of seconds for the buttons to reappear. So I think something about the flip animation was broken in a commit that went into…

### CASE-2237 · Babel/Buble transformation doesn't appear to work.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: I've got a feeling that somewhere in the stack of svelte/rollup/babel, something has broken quite severely. I'm not sure exactly where, but I'm seeing it here (with all three combined), so I'm raising it here. I'm noticing that in my production components, the ES6 code inside the svelte components is not being converted to ES5 by babel. The problem can be reproduced by looking at the svelte examples, which also has an issue raised about this: [[link]]([link]) Has something changed recently where babel can no longer transform the javascript code in a svelte component? This issue is quite…

### CASE-2243 · Svelte 5 memory leak after transitions
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Describe the bug Transitions in Svelte 5 causes memory leaks by holding onto the DOM nodes indefinitely. <img width="1340" alt="image" src="[link]> Also I found [this PR]([link]][ref]) which seems to be fixing a similar problem back in 2022 and [this issue]([link]][ref]), that reports something similar for version 4. In our case we are writing highly interactive real-time SPA, which means that user will go between screens a lot and will keep tab open for days, which gets amount of detached nodes to hundreds of thousands or maybe even millions. I can get from 1k to 20k nodes in a minute.…

### CASE-2246 · Svelte 4.0.0 custom-element build bundle size is way larger than Svelte 3.58.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, bootstrap
- **Signals**: 👍2 💬16 · open · labels: custom element
- **Excerpt**: ### Describe the bug I created a plugin as a custom element with **Svelte 3** it was generating a small bundle size around `70kb` but after migration to **Svelte 4** its now around `120kb`, that's almost double the size .. nothing changed at all just svelte version. I provided a quick example from svelte's own examples that's generating `22.67kb` with **Svelte 3** and `27.21kb` with **Svelte 4** .. and added sass support and imported a few sass modules from bootstrap just for testing purposes. ### Reproduction [REPL]([link]) ### Logs ```shell Svelte 3: ✓ 8 modules transformed. dist/index.html…

### CASE-2248 · Preprocessing tries to process style string within script section
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬16 · open · labels: feature request/awaiting submitter/stale-bot
- **Excerpt**: **Describe the bug** I have a component which generates a small bit of HTML which is injected into an `iframe`. The HTML contains a `style` section which the preprocessing tries to transform, yielding a parser error because there are interpolated values in it. (Accidentally opened this issue in `svelte-preprocess` first: [link]]-preprocess[ref] The problem is in the [wrapper code][code-ref] though.) **To Reproduce** A component like this will cause the error: ```svelte <script> function getItemHtml(html) { const style = window.getComputedStyle(document.documentElement); const background =…

### CASE-2250 · Tell custom transitions if they're in or out
- **Principles**: P-D1, P-D2, P-D3, P-H2, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬16 · closed · labels: feature request/stale-bot/temp-stale
- **Excerpt**: **Is your feature request related to a problem? Please describe.** We did some work recently to replace the default transitions with custom ones to avoid the injection/removal of custom `@user` rules into a stylesheet every time we run a svelte transition. It causes at least one full-page repaint every time, which for game UI is real rough. Our custom transitions don't use `css` or `tick`, they mostly take the params and apply them to elements using inline `style` attributes and predefined keyframe animations. That part is all working great. The challenge is that our custom transitions,…

### CASE-2251 · Increase elements when using a combination of await block and transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍10 💬16 · closed · labels: bug/temp-stale
- **Excerpt**: I get a strange behavior when I use a transition in a await block. I write a sample repl script. when you click next button, a inner element increase. [REPL]([link])

### CASE-2263 · Bug: "Out" transition blocks component from unmounting indefinitely, caused by update to store
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍3 💬15 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug Discovered this while making my own app which has a global array of objects as state. I noticed that my elements weren't unmounting due to {#if} statements as I was used to, and narrowed it down to it being due to transitions. It's a bit strange to explain, but I tried my best isolating the bug. ### Reproduction [link] **Notes:** The bug goes away when you remove the out transition (in Comp) The bug does not happen if you inlined the Comp component into App.svelte This is one of several transition bugs I've run into while using Svelte and I have to say, it really makes it…

### CASE-2265 · The Svelte "customElement" feature is not production ready yet !
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍36 💬15 · closed
- **Excerpt**: ### Describe the problem I spent 2 weeks trying to port my project from setencil to svelte only to find out that the "customElement" feature is not ready for productive use at the current state. Don't get me wrong svelte is a nice tool for a lot of projects but the "Web Component" feature is obviously *experimental* and that should be definitely mentioned in the docs to prevent frustrated developers. \ **Blocker Issues:** - Nested slots are never rendered | [ref] - Nested components can't display styles | [ref] - :global(...) styles not working | [ref] - Transitions do not work in custom…

### CASE-2268 · Store updates break transitions and components
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍15 💬15 · closed · labels: bug
- **Excerpt**: **Describe the bug** Components with an out:[transition] and a store subscription don't get destroyed if the store is updated while out:[transition] is in progress. **To Reproduce** [link] 1. Create a store 2. Subscribe to it in component A 3. Create an element with ``out:fade`` in component A 4. Destroy component A and trigger a store update before the animation has completed Result: component A never got destroyed. **Expected behavior** Components should be destroyed **Severity** Very. It breaks apps without a single warning or error. This means that the more complex/nested your app is, the…

### CASE-2278 · Transition ends too soon / "jumps" near end of transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug Using a transition on an element (tested on `<div />`, `<span />`, `<p />` and `<h1 />` elements) shows a "jump" at the end of the transition, with or without an easing function. Tested with existing and new, fresh projects. Problem occurs in both. [link]]/assets/46247153/71220be3-0643-4d4e-8556-1a780f735c9e ## FIX (Found by @user): > I have a fix! I don't entirely understand why, but if you alter the transition to start at an opacity other than 0, then everything works correctly: > `transition:fly={{ y: -150, duration: 1550, delay: 3000, opacity:0.0001 }}` > > Adding a…

### CASE-2282 · Transitions on WebComponents not working
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍2 💬14 · closed
- **Excerpt**: **Describe the bug** When you define a transition on an element that is a customElement (web component) the transitions animations dont show since the css for the animation are not applied **Logs** It fails silently **To Reproduce** Check repo but is just the transition example made web component [link] Or just ``` <script> import { fade } from 'svelte/transition'; let visible = true; </script> <svelte:options tag="test-transitions" /> <label> <input type="checkbox" bind:checked={visible}> visible </label> {#if visible} <p transition:fade="{{ duration: 3000 }}"> Fades in and out not working…

### CASE-2291 · Svelte 5: Multiple item `crossfade` is buggy
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍3 💬13 · open · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug When multiple items change their position at the same time, `crossfade` can misbehave. Items can transition to nowhere and transition in from locations where no items can ever be. The issue happens with or without `animate:flip`, the reproduction example uses it to show how it ideally should look, as this works in Svelte 4. A secondary issue would be what happens when multiple such transitions are triggered in quick succession. In Svelte 4 the layout can break completely (elements settle in the wrong locations), in Svelte 5 the position resets to the correct target after…

### CASE-2295 · Svelte component bundled with outros throws at runtime
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍6 💬13 · closed · labels: stale-bot/temp-stale/transition/animation
- **Excerpt**: **Describe the bug** When bundling a Svelte component into a module, then loading it dynamically, the `outros` function is missing and this causes a runtime error when the component is scheduled to unload. **To Reproduce** I created a live demo here: [link] The source is here: [link] [link] The issue I see is rooted here on the generated code: [link] ``` ... let outros; function transition_in(block, local) { if (block && block.i) { outroing.delete(block); block.i(local); } } const null_transition = { duration: 0 }; function create_out_transition(node, fn, params) { let config = fn(node,…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2206 · memory leak: detached nodes are kept when using transitions
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome 132, svelte
- **Signals**: 👍1 💬21 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug When using transitions something isn't cleaned up properly resulting in detached nodes memory leak. <img width="2332" alt="Image" src="[link] /> This was already fixed once in [link]][ref], so seems to be a regression due to some changes. I am wondering if it's even possible to have a test or something for it to prevent future regressions. ### Reproduction [REPL]([link]) 1. Take snapshot 2. Click button multiple times 3. Take snapshot again 4. Repeat and observe h1 leaking ### Logs ```shell ``` ### System Info ```shell Chrome 132.0.6834.160 (Official Build) (arm64) Svelte…

### CASE-2207 · Svelte 5: Chrome: svelte-select list is not opened on the first click (same code of Svelte 4)
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox 126, chrome 125, svelte
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: **Firefox 126 works. Chrome 125 doesn't.** The same code on Svelte 4: [link] and on Svelte `5.0.0-next.136`: [link] **In the Svelte 5 the first click on the select doesn't open the list.** --- I already opened [link] ### Severity blocking an upgrade

### CASE-2222 · Dimension bindings intermittently add inline style="position:relative;" in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, firefox 75, windows, svelte
- **Signals**: 👍6 💬19 · closed · labels: documentation
- **Excerpt**: Using dimension bindings on an element will sometimes add an inline style `position:relative;` in Firefox. This overrides any other CSS positioning that may be defined on the element. The problem doesn't happen in Chrome. The code below (borrowed from [w3schools.com]([link])) reproduces the problem on my system roughly 50% of the time (although you may have to reload 10-20 times to see it, maybe due to page caching). I'm using Svelte 3.22.1 with Rollup, Firefox 75, Windows 10. The inner div should be positioned to the right side of the outer div. When Svelte sometimes gives it…

### CASE-2235 · Svelte 5: Deeply nested state doesn't re-render when looping
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: ### Describe the bug It seems that when looping through a deeply nested object, svelte doesn't re-render when looping through object. No errors are thrown in the logs which makes me think this may be a bug. ### Reproduction [Repl]([link]) Click the update button and observe that the JSON.stringify correctly shows the update, but the each block isn't updated with the new value. Note: I'm using the $inspect to force the compiler to svelte 5 mode. Without it, it works as expected. ### Logs _No response_ ### System Info ```shell Browser: Edge ``` ### Severity blocking all usage of svelte

### CASE-2244 · Svelte5 Svg namespace component path not rendering
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬16 · closed · labels: bug
- **Excerpt**: ### Describe the bug svg element doesnt show/ not visible and when using dev tools is not recognized as svg element ### Reproduction [link] ### Logs _No response_ ### System Info ```shell edge browser, repl ``` ### Severity blocking an upgrade

### CASE-2259 · Svelte 5: Incorrect Server Output for `$effect.root`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 17, ios, svelte
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: ### Describe the bug On the server, `$effect.root` should return a noop function, but it returns `undefined` because the function is immediately invoked. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Safari 17.4 iOS ``` ### Severity annoyance

### CASE-2261 · Svelte 5: Doesn't work on iOS 15.0
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: ios 15, svelte, iphone
- **Signals**: 👍1 💬15 · closed · labels: bug/runtime/browser specific
- **Excerpt**: ### Describe the bug I tried to render a simple "Hello" world with Svelte 5 using SvelteKit on iOS 15.0 and page is blank and get a hydration error: <img width="739" alt="Screenshot 2024-02-08 at 4 22 46 PM" src="[link]]/assets/589410/2f29d1a5-d6dd-4def-b61d-47d14278570c"> I also tried using Astro to not just blame SvelteKit and still get the error: <img width="725" alt="Screenshot 2024-02-08 at 4 38 22 PM" src="[link]]/assets/589410/8a244d57-500d-45ce-9ece-a1df9c22aa82"> ### Reproduction Open Svelte 5 app (develop & preview) on an iPhone 6s on iOS 15 Simulator and open page ### Logs _No…

### CASE-2264 · Binding bug after fixing [[ref]]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍0 💬15 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug After the correction [[ref]]([link]][ref] ), it is now impossible to bind functions to an object ### Reproduction this is on [3.54.0]([link]) this is on [3.53.1]([link]) ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.0.1 CPU: (8) arm64 Apple M1 Pro Memory: 319.53 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.5.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.12.1 - /usr/local/bin/npm Browsers: Chrome: 108.0.5359.98 Firefox: 106.0.5 Safari: 16.1 npmPackages: svelte: 3.54.0 => 3.54.0 ``` ### Severity blocking all usage of…

### CASE-2266 · Transitions don't work on table row addition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, svelte
- **Signals**: 👍6 💬15 · closed · labels: bug/temp-stale
- **Excerpt**: **Describe the bug** When I add a row to a table, even when the table has `transition:` set, it just pops in ignoring the transition. Oddly, it works on removing the row. **Logs** No logs. **To Reproduce** Reproducible bug: [link] Based on demo: [link] which uses `divs` **Expected behavior** Transitions should work on both adding a removing a table row. **Information about your Svelte project:** - Your browser and the version: Google Chrome Version 83.0.4103.61 (Official Build) (64-bit) - Svelte version 3.23 repl, none **Severity** Not much, it's just some coolness in transitions with adding.…

### CASE-2267 · Event is not dispatched after component is loaded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, react, svelte
- **Signals**: 👍2 💬15 · closed · labels: temp-stale/documentation
- **Excerpt**: **Describe the bug** Event from component is not dispatched (from reactive function) after component is loaded. **To Reproduce** [link] **Expected behavior** Event is dispatched after component is loaded. **Information about your Svelte project:** - Your browser and the version: Google Chrome | 80.0.3987.87 (Official Build) (64-bit) - Your operating system: Ubuntu 18.04.4 LTS - Svelte version: 3.19.1 **Severity** **Low**, I think. **Additional context** When I call dispatch in the `setTimeout()` with zero delay then it's working corectlly. If this is desired behaviour then I think it's…

### CASE-2277 · svelte 5.0.0-next.97 hydration regression
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox, svelte, react
- **Signals**: 👍3 💬14 · closed
- **Excerpt**: ### Describe the bug SSR renders fine, upon doing hydration in the browser ``` Uncaught (in promise) TypeError: tooltip is undefined ``` is being thrown during hydration in `[email]-next.97`, the previous version `[email]-next.96` works ### Reproduction [link] ```sh bun i ``` ```sh bun dev ``` ### Logs ```shell Firefox: ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match what was rendered on the server. TypeError: tooltip is undefined setArrow6 ctx.js:40 Tooltip_arrow tooltip-arrow.svelte:9 effect2 hmr.js:36 execute_reaction_fn runtime.js:246 execute_effect…

### CASE-2280 · The muted attribute does not render in the video tag
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: safari, svelte
- **Signals**: 👍18 💬14 · closed
- **Excerpt**: ### Describe the bug The muted attribute does not render in the video tag which prevents autoplay on Safari when using client side routing. Info from @user >svelte properly sets video.muted = true, and that does mute the video, the JS property that controls the muted attribute is confusingly video.defaultMuted instead [link] [link] tl;dr this attribute needs special case handling in svelte core also notable is that SSR svelte properly renders the muted attribute because it uses string concat, but DOM svelte does not ### Reproduction - Create a video tag with ` muted` and `autoplay`…

### CASE-2287 · Events firing multiple times when toggling large DOM change
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍3 💬13 · closed
- **Excerpt**: ### Describe the bug In my application, I am toggling parts of DOM based on user action, typically click. This may be category toggle that shows a list of items and the DOM is behind {#if ...}...{/if}, or popup, which I mount dynamically with mount(). I have noticed that sometimes events fire multiple times. Or at least that's what I think is happening. Typically that means that you click the button that should mount popup, and the popup is mounted 2 or 3 times. Or category doesn't toggle properly and it needs few clicks. ### Reproduction This seems to be happening only in Firefox, from what…

### CASE-2288 · push on reactive variable triggers as many updates as there are elements in the appended array
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### Describe the bug Unexpectedly push triggers as many updates as there are elements in the appended array. ``` const src = $state([0]) const push = () => arr.push(...[1,2,3]) $inspect(src) // update Array [ 0, 1 ] // update Array(3) [ 0, 1, 2 ] // update Array(4) [ 0, 1, 2, 3 ] ``` I think it is definitely a bug. ### Reproduction [link] Results can be seen in the console ### System Info ```shell Chrome, Firefox ``` ### Severity annoyance

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2210 · Svelte 5: Preserve local state during HMR
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍44 💬20 · open · labels: feature request
- **Excerpt**: ### Describe the bug With a brand new SvelteKit project with Svelte 5, I realized that all my states are reset whenever HMR updates Whenever I change anything in the HTML part of a Svelte file, HMR kicks in and resets all my `$state`, which makes it very cumbersome to develop a large and complex form I read that earlier version support directives such as `@user:keep-all` or `preserveLocalState`, but according to [link] these are outdated and no longer used So I am unsure what to do now to preserve states between HMR reloads - is this a bug or a feature request? ### Reproduction Reproduction…

### CASE-2213 · select option with default selection.... broken in 3.42?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: ### Describe the bug This looks to work in 3.41 and before but breaks at 3.42 or newer. Docs don't mention it at all so it is hard to trouble shoot. ### Reproduction Run this code. ```svelte <script> let options = [ { id: "4", value: "2019" }, { id: "3", value: "2018" }, { id: "2", value: "2017" }, { id: "1", value: "2016" }, ]; let selected = { id: "2", value: "2018" }; </script> <select bind:value={selected}> {#each options as option} <option value={option} selected={selected.id === option.id}>{option.value}</option> {/each} </select> <p> Selected {JSON.stringify(selected)} </p> ``` ###…

### CASE-2233 · False positive `ownership_invalid_binding`?
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍11 💬17 · closed · labels: bug/awaiting submitter
- **Excerpt**: ### Describe the bug I'm getting the following message, telling me to consider `bind:` between the two components. However, I am, in fact, binding between the two. ![CleanShot 2024-10-14 at 22 02 50@user]([link]) ### Reproduction [link] ### Logs ```shell [svelte] ownership_invalid_bindingsrc/lib/calendar-with-select.svelte passed a value to node_modules/.pnpm/[email][email]-next.265/node_modules/bits-ui/dist/bits/calendar/components/calendar.svelte with `bind:`, but the value is owned by…

### CASE-2234 · Svelte 5: dispatched "native named" events not reaching handler
- **Principles**: P-G4, P-E3 · **Env**: macos, svelte
- **Signals**: 👍0 💬17 · closed · labels: documentation
- **Excerpt**: ### Describe the bug Manually dispatched events with names matching native events don't reach handlers when new `on...` syntax is used vs when older `on:...` syntax is used. ### Reproduction Click button, 3 events are raised (and also raise if the input is typed in + left): [link] Press migrate to switch to runes syntax. Now only the `custom` event reaches the handler. i.e. switching from `on:input` to `oninput` stops the event handler firing for manually dispatched events. ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.5 CPU: (10) arm64 Apple M1 Pro Memory: 197.67 MB /…

### CASE-2245 · [Svelte 5] Runes ($effect, $derived) don't work as expected when values are nested inside an object.
- **Principles**: P-G4, P-E3 · **Env**: svelte, react
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Describe the bug When the state is an object, setting up reactive dependencies within the object is cumbersome / doesn't work as expected ### Reproduction Svelte-4 syntax - small, readable, and works as expected. [REPL]([link]) ```svelte <script> let note = {contents: 'Without Runes :)', lowercased: ''}; $: note.lowercased = note.contents.toLowerCase(); </script> <input bind:value={note.contents} /> <pre>{JSON.stringify(note, null, 2)}</pre> ``` -- -- Svelte-5 syntax - doesn't work: `ERR_SVELTE_TOO_MANY_UPDATES` [REPL]([link]) ```svelte <script> let note = $state({contents: 'With Runes…

### CASE-2255 · Svelte 5: runes-mode compiler validation errors throw "undefined"
- **Principles**: P-G4, P-E3 · **Env**: svelte, vite
- **Signals**: 👍4 💬15 · closed
- **Excerpt**: ### Describe the bug I just noticed that any plain `on…="…"` attributes (e.g. `onclick="…"`) in component html will break the build if there are still [deprecated]([link]) `on:…` (e.g. `on:click="…"`) attributes present in the same file, but with an obscure error message: ``` error during build: undefined ``` A fix of course is to only use exclusively the new or deprecated syntax -- but I guess there is some compiler problem or at least an opportunity for a better error message :) This might be a fix for [ref]. ### Reproduction ``` $ npm create vite@user ✔ Select a framework: › Svelte ✔…

### CASE-2283 · Uncaught (in promise) TypeError: Illegal constructor at new SvelteElement (index.mjs:1381)
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬14 · closed · labels: custom element
- **Excerpt**: **Describe the bug** [Dec, 18, 2019] Uncaught promise when registering a custom element using the latest sapper, svelte, nodeJS, and rollup stack using the following statements. <svelte:options tag="parlax-background" /> & rollup.config.js export default { client: { input: config.client.input(), output: config.client.output(), plugins: [ replace({...}) svelte({ dev: !production, customElement: true, // and tried also with customElement: { tag: "my-element"} hydratable: true, emitCss: true ** I want to mention that I had tested on a fresh project **Logs** [Client Side] => Uncaught (in promise)…

### CASE-2298 · There is no value attribute on the <input> tag in the DOM tree.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug [link] We pass the value from the store into the child component, but in the DOM tree, as you can see, the <input> tag does not have a value attribute. ### Reproduction Need to add a value attribute to a tag ### Logs ```shell ``` ### System Info ```shell Browsers ``` ### Severity annoyance

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2214 · Hydration clobbers input into form
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬20 · closed · labels: bug
- **Excerpt**: If your form has just been server rendered and you initial bind the values to empty string, when a user starts to enter data into the form it will get clobbered by hydration. You can disable the inputs until the page hydrates, but I like my site(s) to be snappy and don't want to block the form out until hydration, admittedly its not an eternity, but its enough for me to drag it to the table. RH has indicated that if this were standard behaviour some use cases would present weird / unsuitable UX experience, for example typing into a search input doesn't result in the autocomplete dropdown…

### CASE-2215 · hydration takes way too long
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I noticed my codebase's hmr not working as fast as before so after checking previous versions to see whether I'm hallucinating or not, I figured out that for some reason from version 5.17.5 forward the hmr takes 3 or more seconds, depending on how many instances of a component where rendered, to kick in. The delay duration goes up for each components instance that is rendered. Unfortunately I was unable to find the exact reason why this is happening; Taking away props passed to components reduces the delay of hmr But I don't think its any single prop that is responsible.…

### CASE-2219 · `{@user}` hydration in head duplicates elements
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬19 · closed · labels: bug
- **Excerpt**: ### Describe the bug `@user` markup in `head` is being rendered twice. I also noticed that `HTML_TAG_END` is occurring before `HTML_TAG_START`, which seems backwards. I believe that @user tried to implement / fix this in [link]][ref], but it looks like there may be a kink to work out still ### Reproduction Add this code to a SvelteKit app: ``` <script> const item_title = 'Hello world!'; const schema = { "@user": "[link] "@user": "Article", "@user": item_title }; </script> <svelte:head> {@user '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'} </svelte:head> ``` It…

### CASE-2224 · SvelteKit apps do not work in the Steam in-game overlay browser
- **Principles**: P-F4 · **Env**: windows, svelte
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: ### Describe the bug Various parts of svelte applications do not work in the Steam in-game overlay browser. Several apps I've tested fail to hydrate correctly with and without kit. The svelte-4 demo app navigation does not work. I have tested on both Windows and Mac. It's inconsistent, as the sveltekit docs seem to work fine. It's extremely difficult to debug as the browser provides no developer tools, and there are [many possible user agents]([link]). I am building something that needs to work in the overlay browser, so this is fully blocking. ### Reproduction 1. Create a new svelte-4 demo…

### CASE-2228 · bug: <svelte:boundary> is not working on SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬17 · closed · labels: documentation
- **Excerpt**: ### Describe the bug The `<svelte:boundary>` do nothing on SSR ! On the [REPL]([link]) we can see that code like this : ```svelte <svelte:boundary> template {#snippet failed()} error {/snippet} </svelte:boundary> ``` Will generate this server code : ```js { function failed($$payload) { $$payload.out += `<!---->error`; } $$payload.out += `<!---->template`; } ``` The template is written, but there no try/catch and the `failed()` snippet is never caller when an error occurs in the template ! Actually this will produce an HTTP 500 error :( I think it should render the `failed()` snippet…

### CASE-2241 · CSR/Hydratation
- **Principles**: P-F4 · **Env**: linux
- **Signals**: 👍0 💬16 · closed · labels: documentation
- **Excerpt**: ### Describe the bug When using SSR + CSR i observer the hydratation always happen even if nothing change, i mean my data are refreshed, that cause a trouble when i use middle service between the server and the client (a translation service) so after the html content being translated (nothing else change) the data back to the original language. More details can be found here => [link] ### Reproduction Is not related to code ### Logs _No response_ ### System Info ```shell System: OS: Linux 4.19 Debian GNU/Linux 10 (buster) 10 (buster) CPU: (8) x64 Intel Core Processor (Haswell, no TSX) Memory:…

### CASE-2247 · Duplication of elements on hydration in Svelte 3.38.0
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍3 💬16 · closed · labels: bug
- **Excerpt**: **Describe the bug** Under certain conditions, hydration appends elements to the DOM alongside prerendered parts, leading to element duplication. This seems to specifically affect routes/components using `svelte:head` and depends heavily on components’ structure. There is no duplication after navigating away and coming back. This behaviour is almost certainly introduced by a recent change in Svelte, but it doesn’t seem to affect much beyond SvelteKit (obviously not REPL, but also not Sapper), so may warrant a look at this side. **To Reproduce** Clone and run the demo: [link] **Expected…

### CASE-2257 · Svelte 5 next.179+: SSR regression with web components
- **Principles**: P-F4 · **Env**: linux, svelte
- **Signals**: 👍0 💬15 · open
- **Excerpt**: ### Describe the bug Facing Uncaught (in promise) HierarchyRequestError: Failed to execute 'appendChild' on 'Node': This node type does not support this method. when style element is included as first child of custom element ### Reproduction [here]([link]) ### Logs ```shell Uncaught (in promise) HierarchyRequestError: Failed to execute 'appendChild' on 'Node': This node type does not support this method. ``` ### System Info ```shell stackblitz System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node:…

### CASE-2262 · scoped style doesn't work if compile component with css option 'none'
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬15 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug As [ref] said: > When hydrating SSR components, the styles are commonly already generated and there is no need to generate it again for the client side bundle. However, `{css:"none"}` does not work well with scoped styles. ### Reproduction Currently, the [REPL]([link]) doesn't support `none` (and I created a PR to support it [link]). Let's just consider the following code snippet: ```svelte <div> red </div> <style> div { color: red } </style> ``` We can compile this code using `{generate: "dom", css: "external"}` to obtain two output that are used for CSR: ```css /*…

### CASE-2273 · `<!>` is not valid XHTML regression in Svelte 5
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug Svelte 4 could be used on XHTML documents. With Svelte 5, this seems to be no longer the case. One issue is that `<!>` is used as a hydration marker in Svelte 5. HTML fragments containing this marker can then be passed to `create_fragment_from_html` in **reconciler.js**: ``` export function create_fragment_from_html(html) { var elem = document.createElement('template'); elem.innerHTML = html; return elem.content; } ``` This then fails when trying to assign the HTML fragment to the `element.innerHTML` with the error message that the fragment is not valid XML. The only…

### CASE-2279 · <select> element has wrong initial value in SSR
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍17 💬14 · closed
- **Excerpt**: ### Describe the bug When using code like the following, the SSR output does not generate the `selected` attribute on the `<option>` corresponding to the value. This means that the initial displayed value is incorrect until hydration takes place. The behavior is similar when just using `value` instead of `bind:value`. In that case SSR generates a `value` attribute on the `select`, but the browser doesn't honor it. ```svelte <script> let theValue = 'def'; </script> <select bind:value={theValue}> <option>abc</option> <option>def</option> </select> ``` I've worked around this in my own project…

### CASE-2290 · [email]-next.97 Hydration mismatch error with pnpm dev but not pnpm build && pnpm preview
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍1 💬13 · closed
- **Excerpt**: ### Describe the bug `[email]-next.96` was working with `pnpm dev`. After upgrading to `next.97`, `pnpm dev` returns the following errors. ``` ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match what was rendered on the server. DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method. Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'type') ``` I can still `build` and `preview` and it works fine. ### Reproduction ``` git clone [email]:shinokada/runatics.git cd runatics pnpm update pnpm i…

### CASE-2292 · svelte-check/typescript detecting type mismatch where there shouldn't be one
- **Principles**: P-F4 · **Env**: svelte, typescript
- **Signals**: 👍3 💬13 · closed · labels: help wanted/types / typescript
- **Excerpt**: ### Describe the bug `svelte-check`/typescript detecting mismatch where there shouldn't be one ### Reproduction ```svelte <script lang="ts"> import { createEventDispatcher } from "svelte"; /** */ type T = $$Generic; /** */ const dispatch = createEventDispatcher<{ change: T }>(); export let value: T; /** */ function test(): void { dispatch("change", value); } </script> ``` ### Logs ```shell Error: Argument of type '["resolved", T]' is not assignable to parameter of type '[T] extends [never] ? [type: "resolved", parameter?: null | undefined, options?: DispatchOptions | undefined] : null extends…

### CASE-2299 · Excessive hydration markers on Svelte 5
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍12 💬12 · open
- **Excerpt**: ### Describe the bug After updating our template to Svelte 5 we are seeing an excessive amount of hydration markers, way more than in a default SvelteKit project. Our CMS has a hard limit on the size of the HTML strings — before gzip — and with so many markers it is easy to surpass it and be blocked from publishing. With adapter-static, a minimal Svelte 4 HTML payload is 5.7kb. With the same code, a Svelte 5 payload is 6.8kb, an increase of 18%. This change also makes debugging on the browser inspector very difficult. We observe roughly 25 hydration markers between each node. In a baseline…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2229 · Strange cleanup bug when using {#each} block
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: bug
- **Excerpt**: ### Describe the bug I don't know if this relates directly to the use of `createSubscriber` or not. I have a class that uses this function. The class takes some options that can only be set during construction, so the *consumer* of the class uses a `$derived` to construct a new instance every time the desired options change. The store contains an array. I don't know if other types of data trigger this issue, or not, but array is what I have at work, so the reproduction uses an array. Just by using an `{#each}` block to iterate the contents of the store is enough to make the previous store…

### CASE-2240 · State is undefined in cleanup functions when component is recreated with `{#key}`
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Describe the bug State becomes undefined in component cleanup functions (both `onMount` return functions and `onDestroy` callbacks) when the component is recreated using a `{#key}` block. ### Reproduction ```svelte // App.svelte <script> import { onMount } from 'svelte' import Component from './Component.svelte' let key = $state(0) onMount(() => { key = 1 }) </script> {#key key} <Component /> {/key} ``` ```svelte // Component.svelte <script> import { onMount } from 'svelte' let intervalId = $state() onMount(() => { intervalId = setInterval(() => {}, 1000) return () => { if (intervalId ===…

### CASE-2253 · Widen getAbortSignal to also be tied to component lifecycle
- **Principles**: P-F5, P-H3 · **Env**: ios, svelte
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### Describe the problem Whenever you make async requests to backend in your components you also need to remember to abort them. Otherwise resources won't be cleared immediately on the component destruction, but rather will wait until the request is finished. In certain scenarios that could even introduce a memory leak. For the sake of future examples let's imagine that we have some wrapper functions for `fetch` for improved DX - `post` and `get`. Currently the solution is to do the following: ```svelte <script> const ctrl = new AbortController() onDestroy(() => ctrl.abort()) let s = $state()…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-2232 · Svelte 5: onMount accepts async function, $effect does not
- **Principles**: P-C1, P-C2, P-C3 · **Env**: svelte
- **Signals**: 👍1 💬17 · open · labels: types / typescript
- **Excerpt**: ### Describe the bug In most cases, I'm trying to replace onMount with $effect, which seems to be the better way to go. However, $effect doesn't allow an async function: ``` <script lang="ts"> import type { Snippet } from 'svelte' interface Props { theme: string children?: Snippet } let { theme, children }: Props = $props() $effect(async () => { await import(`@user/themes/${theme}.scss`) }) </script> {@user children?.()} ``` Tying Error: ``` Argument of type '() => Promise<void>' is not assignable to parameter of type '() => void | (() => void)'. Type 'Promise<void>' is not assignable to type…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2238 · Website becomes unresponsive after initial render after `5.53.7`
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍2 💬16 · closed
- **Excerpt**: ### Describe the bug I'm opening this issue based on the comment in [link]][ref][ref] Basically, after updating from `5.53.7` to any of the newer versions, my entire application becomes unresponsive. Its really hard to pinpoint what is causing the issue, as there is no error being thrown, the page just loads (partially), and all selects or navigation buttons don't do anything. I understand a GH issue without reproduction is not very useful, but as it looks like I'm not the only one running into this, I would like to post one anyways to gather information about it so we can hopefully make a…

### CASE-2256 · `SvelteDate` reactivity issue
- **Principles**: P-A1, P-A4, P-G3 · **Env**: svelte, react
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: ### Describe the bug In a previous issue [ref], I discovered a caching problem which was fixed in 210. Now after updating I am having a similar issue. After some trials, this seems to have been introduced from 246 to 247 and exists in the latest 262. ### Reproduction 1. Open the [REPL]([link]) and click the button. The text in the button should become unresponsive after a few clicks. 2. The issues disappears when the `{date.getMonth() == 1}` expression is moved away from the `class:`, e.g. having the expression as text will not trigger the issue. 3. Having just `{date}` as the button text is…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2252 · RFC: Scoped Style Attribute
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍13 💬16 · closed
- **Excerpt**: _If this is the wrong place for this -- sorry! StackOverflow didn't seem like the right place to me._ Currently, the inclusion of _any_ CSS within a `style` tag is considered scoped. The only way out of this is to wrap your selector(s) in `:global()`. This, however, gets to be fairly verbose when you want to wrap _all_ selectors on the page. ```html <style> :global(.foo) { text-align: center; } :global(.foo span) { font-size: 80%; } :global(.foo em) { color: pink; } .bar { text-align: right; } </style> <!-- unscoped: ".foo *" --> <!-- scoped: ".bar" --> ``` Arguably, the appeal of SFCs is…

### CASE-2270 · $$host (or some way to access custom element instance)
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍32 💬15 · closed · labels: feature request/custom element/popular
- **Excerpt**: From [this Stack Overflow question]([link]) — it might be nice if there was a way to get a reference to the host element, when compiling to custom elements (i.e. the `<my-thing>` for `tag="my-thing"`). Following the precedent set by `$$props`, we could add a `$$host` value. The main question is what should happen when *not* compiling as a custom element — error? or reference to the instance (which we've resisted thus far, because 99% of the time when someone wants that reference it's to do something inadvisable)?

### CASE-2296 · bind:clientWidth doesn't work in sandbox
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: feature request
- **Excerpt**: [REPL]([link]). Resizing the viewer window doesn't change anything.

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-2300 · Performance: dropped frames on reactive graph updates
- **Principles**: P-H2, P-H3 · **Env**: react, svelte
- **Signals**: 👍0 💬12 · closed · labels: perf
- **Excerpt**: ### Describe the bug We are developing a highly interactive application that displays a lot of interconnected data on the screen simultaneously. That's why our reactive graph is somewhat deep. Mostly Svelte is working amazingly for us and performance is great! However we've found one case where updating the graph taking so long, that our app start dropping frames. All the following flamecharts are taken on a 4x CPU slowdown. That's to emulate more realistic user device as well as to make problems more visible. However without throttling there are occasional frame drops as well. Here is a pick…

