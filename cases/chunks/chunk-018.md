# Case Chunk 018 — Round 18

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2701 · Svelte adds whitespace to template literals when `dev: false`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: When `dev: false` and Svelte generates template literals to set the innerHTML of an element, it seems to be adding whitespace. Specifically it seems to be aligning the template literal to the indentation level of its parent function in the generated code. If this is a nested function then one or more tabs will be added to the beginning of each line. Example input: ```html <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">thingy</span>(<span class="hljs-params ">str</span>) </span>{ <span class="hljs-keyword">return</span> str.toUpperCase(); } ```…

### CASE-2703 · Bindings don't work inside {#each reactiveThing as thing}
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: In a case like this... ```html {#each filtered as todo} <label class:done={todo.done}> <input type="checkbox" bind:checked={todo.done}> {todo.text} </label> {/each} <p>completed {todos.filter(t => t.done).length} of {todos.length}</p> ``` ...where `filtered` is derived from `todos`, toggling an individual input doesn't affect anything else that depends on `todos`. [Demo here]([link]). That's because this code gets generated: ```js function input_change_handler_1({ todo, each_value, todo_index }) { each_value[todo_index].done = this.checked; $$invalidate('filtered', filtered); } ``` We should…

### CASE-2706 · Cannot specify `form=` attribute on form element
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug/awaiting submitter
- **Excerpt**: Specifying the `form=` attribute on form element results in code that attempts to set the `.form` property on the element, which throws an error as that is read-only. I'm not sure what the desired behavior here is. The immediately obvious path is to just not treat `form=` specially on form elements, and just generate `setAttribute` calls for this. But I don't know whether that's going to do the same thing as having a `form=` attribute on an element in regular old HTML.

### CASE-2711 · Component bindings can't access store
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬6 · closed · labels: bug
- **Excerpt**: In an app with `store` support, any component can do this... ```html <input bind:value=$whatever> ``` ...but this doesn't work: ```html <Widget bind:x=$y/> ``` It just sets `$y` on the parent component, rather than setting `y` on the store.

### CASE-2732 · Destructuring of discriminated unions in the presence of bindable props in Svelte 5
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍6 💬5 · open · labels: types / typescript
- **Excerpt**: ### Describe the problem ## Context At [link]][ref][ref], @user wrote: > In Svelte 5 you can easily do things like discriminated unions... > ``` > <!-- Input.svelte --> > <script lang="ts"> > type Props = { type: 'text'; value: string } | { type: 'number'; value: number }; > let { type, value }: Props = $props(); > </script> > > <script lang="ts"> > import Input from './Input.svelte'; > </script> > > <!-- cool --> > <Input type="text" value="a string" /> > <Input type="number" value={42} /> > > <!-- type error --> > <Input type="number" value="a string" /> > <Input type="text" value={42} /> >…

### CASE-2733 · Migrate script removes JSDoc comments when there are default values
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When running `npx sv migrate svelte-5` JSDoc comments of the following form in a Svelte 4 app ```svelte <script> /** @user {number} [default_value=1] */ export let default_value = 1; /** @user {number} [comment_default_value=1] - This has a comment and an optional value. */ export let comment_default_value = 1; </script> ``` get converted to the following, the comments and default value are not included after the conversion. ```svelte <script> /** * @user {Object} Props * @user {number} [default_value] * @user {number} [comment_default_value] */ /** @user {Props} */ let {…

### CASE-2736 · Using spread syntax '{...rest }' with props doesnt work correctly!
- **Principles**: P-G4, P-E3 · **Env**: opera, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug There is a simple example: ```svelte <script lang="ts"> let value = $state(); </script> <div>Value: {value}</div> <div>Typeof value: {typeof value}</div> <input {value} oninput={(e) => (value = e.target.value)} type="text" /> <input {value} oninput={(e) => (value = e.target.value)} type="text" {...{}} /> <!-- {...{}} diff --> <button onclick={() => (value = '')}>empty string</button> <button onclick={() => (value = undefined)}>undefined</button> <button onclick={() => (value = null)}>null</button> ``` The 2 inputs differ only in the spread operator. In theory, should both…

### CASE-2739 · Form `novalidate` attribute doesn't render when conditional (given a value)
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Adding a `novalidate` attribute to a `<form>` element is not rendering that attribute, unless it's not conditional (no value is given). For example, **this works**: `<form novalidate></form>` ... but this **does not work**: `<form novalidate={true}></form>` ### Reproduction Here's a minimal reproduction using the latest release of Svelte (v5.19.1): [link] ### Logs ```shell ``` ### System Info ```shell System: OS: Linux 4.4 Ubuntu 22.04.5 LTS 22.04.5 LTS (Jammy Jellyfish) CPU: (12) x64 Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz Memory: 13.48 GB / 31.74 GB Container: Yes…

### CASE-2743 · defaultValue is not working in `<input type=text>` when the initial value is null
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Documentation says: > Since 5.6.0, if an `<input>` has a defaultValue, it will revert to that value instead of the empty string when the form is reset. Note that for the initial render the value of the binding takes precedence unless it is null or undefined. [link] But if the initial value of the binding is null nothing is happening. ### Reproduction - open demo from day 4 of Advent of svelte: [link] - set the initial value of `wishlist` to null ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.8 Ubuntu 24.04.1 LTS 24.04.1 LTS (Noble Numbat) CPU: (12)…

### CASE-2788 · Svelte 5: Cannot name a component prop to "class", typescript error TS1005
- **Principles**: P-G4, P-E3 · **Env**: svelte, typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When trying to give a custom component the prop "class", Typescript doesn't like it, probably because class is a reserved word. ### Reproduction ```typescript <script lang="ts"> import type { ChangeEventHandler } from "svelte/elements"; type EelementProps = { class: string, onchange?: ChangeEventHandler<HTMLInputElement>, oninput?: ChangeEventHandler<HTMLInputElement> } let { class, ...rest } = $props<EelementProps>(); // ^^^ ':' expected ts(1005) </script> <input class={`bg-red-500 h-52 ${class}`} {...rest} /> ``` On the REPL the Typescript error is: Unexpected keyword…

### CASE-2789 · `<select bind:value={{an:"object"}}>` doesn't update the selection if the bound object isn't strictly equal to an object in the `<option>`s
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When the bound value of a `<select>` element changes to something that isn't strictly equal (even though it's `string`ly equal) the `<select>` element won't correctly update its value, instead becoming blank. I guess this is probably a feature by design - strictly equal is safer - however it'd be nice to be able to have the select element stringly match the value against the options. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.4 Ubuntu 20.04.6 LTS (Focal Fossa) CPU: (4) x64 Intel(R) Xeon(R) Gold 6342 CPU @ 2.80GHz Memory:…

### CASE-2791 · readonly and disabled prop are treated differently in prop spreading to input elements
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When spreading `{disabled: false}` to a `<input>`, the input is rendered without disabled. When spreading `{readonly: false}` to a `<input>`, the input is rendered as `<input readonly="false">` which causes browsers to render the input as read-only. It's unclear to me why disabled works in this case, and readonly does not. Based on my understanding from [link]][ref], there is a hardcoded list of boolean attributes for which the presence/absence behavior is used. Readonly is included in this list, so there must be something else happening which is causing it to be rendered…

### CASE-2792 · Form tag wrapping a table body hides the table rows
- **Principles**: P-G4, P-E3 · **Env**: linux
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When using form tag around table rows there is script somewhere that makes all the wrapped rows disappear. Reply includes an each loop but it can be a simple html form with a form tag wrapping the body tr alone. ### Reproduction ([link]) ``` <table> <thead> <tr> <th>ID</th> <th>Color</th> </tr> </thead> <tbody> <form> <tr> <td>1</td> <td>2</td> </tr> </form> </tbody> </table> ``` ### Logs _No response_ ### System Info ```shell System irrelevant, happens in any environment. Locally in linux as well as on the repl as shown in the link. ``` ### Severity annoyance

### CASE-2794 · [Feature]: Support Default Values in Form Controls
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍5 💬5 · closed
- **Excerpt**: ### Describe the problem Unfortunately, as of today, Svelte does not support default values[^1] for form controls. For example, Svelte renders ```svelte <input value="default-value" /> ``` as ```html <input /> ``` ```svelte <textarea>default text</textarea> ``` as ```html <textarea></textarea> ``` and ```svelte <select> <option>1</option> <option selected>2</option> </select> ``` as ```html <select> <option value="1">1</option> <option value="2">2</option> </select> ``` (It's also a little odd that the `value` attribute is added here when it wasn't specified in the HTML. But for now, I'm only…

### CASE-2797 · Unexpected behaviour with `select` tag
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Let's take a look into the [following code]: ```svelte <script lang="ts"> let state = true; async function writeExam() { try { failure(); } catch (error) { alert(error); } } async function failure() { throw new Error("kekw"); } async function test() { await writeExam(); state = true; } </script> <p>State: {state}</p> <label for="">Select 1:</label> <select value={state} on:change={test}> <option value={true}>Option 1</option> <option value={false}>Option 2</option> </select> <br> <label for="">Select 2:</label> <select bind:value={state} on:change={test}> <option…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2702 · Bug with slot props variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: bug
- **Excerpt**: #### Repl [link] #### Problem I try to expose value from `<slot>`, but get `undefined` #### Solving methods 1. Create variable with `export` ```js // Cnt.svelte <script> export let worldText = "world"; </script> ``` 2. Create empty variable and store data later ```js // Cnt.svelte <script> let worldText; worldText = "world" </script> ``` Why I can't declare variable like usually? ``` js let worldText = "world" ```

### CASE-2709 · Documentation: pass environment variables to client-side bundle at runtime
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Hello, I posted this as a question on a related issue thread that's now closed, so re-posting here for visibility. I'll also post to SO. This isn't a bug/issue so much as a question & request for additional documentation. <details> @user I just made my first Svelte app over the weekend, and really liked the experience. One thing I'm curious about, that I wasn't able to figure out with a decent amount of research, is if/how one could pass a runtime env var or similar to a client-side script so it's available in the bundle/browser. This probably isn't considered a "best practice", so maybe…

### CASE-2715 · [Head:svelte] Double scripts appearing in production
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · open · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Hello, I am using <svelte:head> to inject LD+JSON into my HTML. But I noticed in production I have two times the same LD+JSON on every page. Here is how I inject my LD+JSON into my page.svelte : {@user `<script type="application/ld+json">${faqLdJson}</script>`} The faqLDJson is a variable that I create in top of code in a script tag. Best regards ### Reproduction [link] You can access this link and try to look for "BreadcrumbList" you will see that it appears two time. ### Logs ```shell ``` ### System Info ```shell None ``` ### Severity blocking all usage of svelte

### CASE-2721 · await order breaks `bind:`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍8 💬5 · closed
- **Excerpt**: ### Describe the bug If you use `await` in `<script>` before a binded `$state` variable, an error is thrown: ``` Cannot read properties of undefined (reading 'f') ``` For example, this works: ```svelte <script> import Input from './Input.svelte'; let value = $state(0); let data = await fetch('...'); </script> <Input bind:value /> ``` but this throws an error: ```svelte <script> import Input from './Input.svelte'; let data = await fetch('...'); let value = $state(0); </script> <Input bind:value /> ``` ### Reproduction [REPL]([link]) ### Logs ```shell Error: Cannot read properties of undefined…

### CASE-2723 · Incorrect aria-label warning for buttons with a title attribute
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: good first issue/a11y
- **Excerpt**: ### Describe the bug **Expected behavior** The `a11y_consider_explicit_label` warning should not show for a button that has an accessible name. **Actual behavior** When a button has a `title` attribute the `a11y_consider_explicit_label` compiler warning is emitted, even though in this case the title attribute value will be used as the button's accessible name. ### Reproduction ```html <button type="button" title="Example button"> <svg width="40" height="40"><!-- whatever --></svg> </button> ``` In the above example, the button **does** have an accessible name, so the warning is incorrect:…

### CASE-2737 · derived does not update dom
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I've made this simple repl where `result` is constructed from `initial` and `dynamic` variables using `$derived` rune. By clicking the first button `dynamic` changes and thus `result` is also expected to be changed, which it seems to be according to console logs. But dom is not changed until the second button is clicked, explicitly toggling `{#key ...}` around target dom. I am not shure if this is expected behavior or not. If it is i wonder if there is a way to update dom without `{#key ...}` directive. ### Reproduction [link] ### Logs ```shell ``` ### System Info…

### CASE-2746 · Got ``$state(...)` can only be used as a variable declaration initializer or a class field` error in docker build, but not local PC
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug This is a build time error. i found in similar to [link]][ref] . This prevent me from serve it in production. It is so weird that build in my local PC works ```bash npm run dev #works npm run build #works npm run preview #works ``` , but running it in docker is not. My workaround is to copy the build folder from local pc into the docker. ### Reproduction ```Dockerfile # [link] # Use the official Node.js image as the base image FROM node:22-alpine AS builder ARG FONTAWESOME_NPM_AUTH_TOKEN ARG COMMIT_HASH="unknown" ENV COMMIT_HASH=${COMMIT_HASH} WORKDIR /app COPY…

### CASE-2748 · $state() does not update when Set changes (Set.add / Set.delete)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Previously with Svelte 4, a let variable could be a Set and still be reactive, it was just necessary to re-assign its value. Now in Svelte 5, that does not work anymore. ### Reproduction here is a minimal example: ``` <script> // Create a reactive variable using a Set let setVariable = $state(new Set()); // Interval to add to the set every 2 seconds let counter = 0; setInterval(() => { counter++; setVariable.add("hello" + counter); console.log(setVariable); // Log the set contents to see changes setVariable = setVariable; // Even this does not make it reactive }, 2000);…

### CASE-2753 · Migration: type variables from `$$Props` are added as normal props but this means they are not part of `$$restProps` anymore
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug If i have this code ```svelte <script lang="ts"> export let stuff; type $$Props = { stuff: string; other_stuff: number; } </script> {$$restProps.other_stuff} ``` i'm using `$$Props` to give the user a typesafe interface and then i'm using `$$restProps` to access elements of this interface (this is a silly example but imaging something like `$$restProps[event.name]`). However this get's migrated to ```svelte <script lang="ts"> interface Props { [key: string]: any } let { stuff, other_stuff, ...rest }: Props = $props(); </script> {rest.other_stuff} ``` which means the…

### CASE-2755 · Svelte 5 is breaking sites (including the Svelte 5 preview site)
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍3 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug When going to [the svelte 5 preview site]([link]), it flickers and then shows nothing other than a gray screen. When checking devtools, it has this error: ![image]([link]) It also appears to affect other Svelte 5 sites, as shown by @user. ### Reproduction Go to [the Svelte 5 preview site]([link]). ### Logs ```shell class.CTOAjPUp.js:1 Uncaught (in promise) TypeError: Cannot set property width of #<SVGSVGElement> which has only a getter at z (class.CTOAjPUp.js:1:3883) at focus-outside.BZqWhF3q.js:1:1248 at Mt (runtime.CZX3LrFh.js:1:7787) at j (runtime.CZX3LrFh.js:1:8567)…

### CASE-2758 · 5.0.0-next.227: Reading $state in script tags does not return the current value if the variable is not referenced outside of script tags
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug 5.0.0-next.227: Reading $state in script tags does not return the current value if the variable is not referenced outside of script tags Downgrading to 5.0.0-next.226 and it works again. ### Reproduction Reproduction: [link] The number printed to the console is always 0 ... unless the variable is referenced outside of script tag ([link]) Downgrading to 5.0.0-next.225 and it works again, no need to reference the variable outside of script tag ([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.8 KDE neon 6.1 6.0 CPU: (8) x64 11th Gen Intel(R)…

### CASE-2759 · Svelte 5: desync in variable imported into components
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug I don't have much experience with Svelte, so please pardon any inaccuracies in this report. A variable held in a script, imported into two components (parent and child), mutated by a function in the script, which is called by a function in the parent component, which is passed as a prop into the child component and called by another function, will have a different value depending on whether it is the parent component or the child component that accesses it. The REPL showcases the issue quite concisely. Click the button multiple times, and look at the console. The numbers…

### CASE-2765 · Svelte 5: Incorrect IfBlock Start Position in Modern Mode Parsing
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug While experimenting with Svelte v5.0.0-next, I encountered a bug in the `svelte/compiler` `parse` function when parsing in modern mode. The issue arises with the `IfBlock` start position when there is a space between `{` and `#if`. **Code Example:** ```svelte { #if variable} ... {/if} ``` **Parsed Output:** ```json { "type": "IfBlock", "elseif": false, "start": 4, "end": 26, .... } ``` In this example, the `start` position of the `IfBlock` is incorrectly set to `4`. It should be `0` (the position of `{`). **Expected Behavior:** The `start` position should be `0` if there…

### CASE-2767 · Critial: static analyze some.svelte.ts
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍1 💬5 · open · labels: documentation
- **Excerpt**: ### Describe the bug This code throw Error when file named with .ts extention: ```ts class ReactiveRecord { store = $state(null); } export const create = () => { return new ReactiveRecord(); } ``` CompileError: `$state(...)` can only be used as a variable declaration initializer or a class field If the file is named .js, everything is working correctly. ### Reproduction I've been researching the internal files and this is what I found: _svelte\src\compiler\phases\2-analyze:_ ```js function validate_call_expression(node, scope, path) { //... if ( rune === '$state' || rune === '$state.frozen'…

### CASE-2768 · Svelte 4: Changing array does not reavaluate
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I'm not sure if this is a bug or a misunderstand of how things work from my part. So I have an app with an array of elements that comes from the API, since I need to call some functions in the components instances I display them with an `{#each ...}` block and `bind:this={instances[key]}` each instance. Now, the issue is that some event might change those elements completely and instead of having the instances variable with the right new instances I have a [undefined, undefined, null] array. ### Reproduction 1. Open the [REPL: Reproduction]([link]) 1. Open DevTools 1. It…

### CASE-2772 · Svelte 5: (non-state-reference) `moduleVariable` is updated, but is not declared with $state(...)...
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug > `moduleVariable` is updated, but is not declared with $state(...). Changing its value will not correctly trigger updates.(non-state-reference)eslint([svelte/valid-compile]([link])) > > `moduleVariable` is updated, but is not declared with $state(...). Changing its value will not correctly trigger updates.svelte(non-state-reference) Refer to the reproduction below. It's worth noting that this is reported as `error` rather than `warn` in `eslint-svelte`. I don't know why it just shows up as `warn` in the [source]([link]) and `REPL`. In other words, it shows up as a red…

### CASE-2776 · Svelte 5: External $derived variable inside effect/inspect runes causes infinite re-renders
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug The inspect rune in [this example]([link]) causes an `ERR_SVELTE_TOO_MANY_UPDATES` error. The error doesn't happen when the state doesn't include an array, and instead is a primitive (the rest is the same), [example]([link]) ### Reproduction [link] ### Logs _No response_ ### System Info ```shell svelte-5-preview.vercel.app ``` ### Severity annoyance

### CASE-2779 · Svelte 5, an error should be thrown when event isn't defined
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: types / typescript/blocked by upstream
- **Excerpt**: ### Describe the bug When working with children snippets and event bubbling an error should be thrown if event isn't defined. Since I was passing onfocus to the children snippet, the snippet needed to be defined explicitly so that onfocus is defined: ``` <TogglePopover> + {#snippet children(onfocus)} <input type="text" placeholder="Select Search" {onfocus} /> + {/snippet} </TogglePopover> ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell N/A ``` ### Severity annoyance

### CASE-2780 · Incorrect error exporting $derived value from .svelte file
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug The export keyword behaves differently within the script tag, creating an accessor to the exported variable Inside the script tag with context module, it behaves the same way as in any javascript module Within .svelte.js files an error is returned when trying to export a derived variable either using ```js export const derived_value = $derived() // Cannot export derived state ``` or ```js const derived_value = $derived() export { derived_value } // Cannot export derived state ``` Within .svelte files, this error does not occur when doing it this way `export const` But it…

### CASE-2782 · [v5 Runes] Re-assigning `NaN` to an already `NaN` variable triggers update
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug 1. In v5 Runes, re-assigning `NaN` to an already `NaN` variable triggers update 2. Inconsistency between v5 Runes and v5 Classic: In v5 Classic _(and v4)_, re-assigning `NaN` to an already `NaN` variable **doesn't** trigger update ### Reproduction [link] ### Logs _No response_ ### System Info ```shell not needed ``` ### Severity annoyance

### CASE-2785 · Svelte 5: compiler may falsy consider variable as non-reactive
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug The compiler may consider the variable non-reactive if no explicit calls of methods. However, an object may have a custom stringification method that reads a signal. Such methods are `toString`, `toJSON`, `valueOf`, and `Symbol.toPrimitive`. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell REL Svelte v5.0.0-next.22 ``` ### Severity annoyance

### CASE-2793 · Svelte 5 [Runes]: getter function with $derived-variable called more than expected
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: runes
- **Excerpt**: ### Describe the bug When $derived variable get returned via a getter function, that getter gets called more times than I'd expect. Although the computation of the $derived variable itself is behaving as expected. ### Reproduction Svelte 5 Preview REPL: [link] Simple CreateCounter Function that creates count-state and double-derived returned through getters ### Logs _No response_ ### System Info ```shell [Svelte 5 preview] ``` ### Severity annoyance

### CASE-2795 · `#each` key is a pitfall
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍8 💬5 · open · labels: compiler
- **Excerpt**: ### Describe the problem Again and again people have issues with `#each` because they insert into/remove from/sort the source array without using a key. Keys are explained both in the docs and the tutorial but maybe Svelte is just *a bit too accessible* because apparently people sometimes read neither. As a result they do not even know about keying. ### Describe the proposed solution I do not have a concrete solution to this but thought about some options: - It could be enforced on the language level, e.g. by always requiring a key. The obvious downside would be that everything gets more…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2704 · Transitions in custom Elements
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬6 · open · labels: bug/custom element
- **Excerpt**: Seems like there is a problem with svelte-transitions in customElements, js works properly, adding css: animation, right before destroy, but there are no visual effects... Seems like it can`t set animation for Shadow CSS.

### CASE-2707 · Keyed each block always includes transitionManager
- **Principles**: P-D1, P-D2, P-D3 · **Env**: edge, svelte
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: So I was digging around in some generated code and I noticed `transitionManager` showing up even when no transitions are being used. After tinkering around for a while I discovered it was adding a key to an each block that was including it in the compiled code. [link] This may be needed for cases beyond transitions and it's just the naming that's throwing me off, but at the very least there are some basic cases where it's being included unnecessarily. I also want to acknowledge that this is prob like 1KB of code minified. So it may not be a concern at all. > p.s. - Svelte is so legit. Thanks…

### CASE-2712 · Svelte strips off @ in keyframes in CSS
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍2 💬6 · closed · labels: bug
- **Excerpt**: One of my users has noticed that the `@user` CSS directive used in animations is being incorrectly stripped by svelte. The resultant CSS has simply `keyframes`, which doesn't work. You can see a (very quick) example of this here: [link]

### CASE-2713 · outro bug
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug An out-only deferred transition crashes when an `{#if}` branch is removed and then restored from an `$effect` during the same update. ### Reproduction ```svelte <script> import { crossfade } from 'svelte/transition'; let visible = $state(true); let restore = $state(false); const [send] = crossfade({}); $effect(() => { if (restore) visible = true; }); </script> <button onclick={() => { visible = false; restore = true; }} > Reproduce </button> {#if visible} <p out:send={{ key: 'item' }}>Deferred outro</p> {/if} ``` [Deferred out transition reset crash [ref]]([link])…

### CASE-2728 · Link translations were NOT applied.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Since the update several komponents makes a wired problem. i can build and everything works. but i got in the consoles sveral times this - on different components. before update no problems there `ℹ [paraglide] Compiling Messagesinto /home/shared/USER/svelte/projects/VENDOR/APP/src/lib/paraglide/ transforming (1) .svelte-kit/generated/server/internal.js[@user/paraglide-sveltekit] Failed to parse /home/shared/USER/svelte/projects/VENDOR/APP/src/routes/+layout.svelte. Link translations were NOT applied. [InternalCompileError: Unexpected token [link]] { code:…

### CASE-2735 · Snippet with conditional transition is not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug For example you have a snippet accepting some boolean value as prop and showing content if this prop is true. Content inside snippet has transition on it. Also the snippet is rendered based on some condition in the parent component. Even the prop you pass to snippet is alway true, the transition does not happen. ### Reproduction Check this playground reproduction [link] [link] ### Logs ```shell ``` ### System Info ```shell - ``` ### Severity annoyance

### CASE-2738 · Svelte 5.1.5 breaking vaul-svelte animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug Svelte 5.1.5 breaks the opening animation for [vaul-svelte]([link]), when 5.0.0-5.1.4 is fine. I don't know if the issue comes from Svelte or Vaul though. References [link] ### Reproduction README demo in 5.1.4: [link] README demo in later versions (latest here): [link] ### Logs ```shell ``` ### System Info ```shell vaul-svelte latest version ``` ### Severity annoyance

### CASE-2756 · Svelte 5: no warning/error on not-in-scope directive
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug In Svelte 4 if you did something like this ```svelte <div transition:nonexistent>cool</div> {#if false} <div use:nonexistent>cool</div> {/if} <div animation:nonexistent></div> ``` you will get a warning for each of this since `nonexistent` is not in scope. While discovering this i actually thought that this should've been an error but @user actually made me discover that svelte allow this because you could have a global function (on the window object). I think we should at least align with Svelte 4 and throw a warning and then decide if we want to make it a breaking…

### CASE-2760 · Animation is not applied inside nested global css selector
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: css
- **Excerpt**: ### Describe the bug Animation is not applied when it is referenced inside global selector which is nested ### Reproduction [Reproduction]([link]) ```css @user scale-ani { from { scale: 0.8; } } /* Works */ :global([data-green]) .box { background: green; animation: scale-ani 2s infinite; } /* Does not work */ :global { [data-blue] .box { background: blue; animation: scale-ani 2s infinite; } } ``` ### Logs _No response_ ### System Info ```shell "svelte": "5.0.0-next.183" ``` ### Severity annoyance

### CASE-2770 · Array access not supported in the `use` or `transition` directives
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug This syntax ```svelte {#each assembly.speakers as speaker, i} <button use:assembly.speakers[i].action>speaker {i}</button> {/each} ``` gets compiled down to ```js $.action(button, ($$node) => assembly["speakers[i]"].action($$node)); ``` so the array access doesn't work. But all the other variations do work so it's a bit confusing / seems like a bug. Same thing for transitions ### Reproduction [link] ### Logs _No response_ ### System Info ```shell preview ``` ### Severity annoyance

### CASE-2771 · Svelte 5: Crossfade playing fallback consistently in some scenarios
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ios, svelte
- **Signals**: 👍1 💬5 · closed · labels: bug/transition/animation
- **Excerpt**: ### Describe the bug The crossfade transition will play the fallback animation in some scenarios, when using svelte 5. There seems to be some pattern to this, but I haven't figured it out entirely. It looks like (to me) it has something to do with the order of which the parent elements are in the DOM. Reordering these elements changes the behavior as well. I have provided some more details in the REPL. ### Reproduction I initially ran into this in a sveltekit project using svelte 5. The outer elements are an array of objects with their inner elements as an array within. [This is a…

### CASE-2777 · Svelte 5: flip reordering animation glitches (REOPEN)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍5 💬5 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug This issue already exited([[ref]]([link]][ref])) and was fixed and closed. **But** the animation glitches are still present and the REPLs in the original issue still have the animation problems mentioned in the issue. ### Reproduction * see the original fixed issue REPLs ### Logs _No response_ ### System Info ```shell REPL - Svelte ``` ### Severity blocking an upgrade

### CASE-2781 · Svelte 5: animate:flip does not work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug animate:flip broken in Svelte 5 ### Reproduction click "add" to add toasts click on toast, to remove adding/removing toasts is without flip-animation Svelte 5: [LINK]([link]) Svelte 4: works: [link] ### Logs _No response_ ### System Info ```shell next.31 ``` ### Severity annoyance

### CASE-2786 · Svelte 5: `flip` reordering causes duplication and glitches
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug Using `animate:flip` in an `#each` and completely reordering the list causes duplicated items and a broken animation (elements leaving the bounds of the list and such). When moving one item to the other end of the list at a time, the animation disappears after having moved all of them. Also, only one item is animated even though all items have to move and thus should be animated. Not sure how this relates to [ref], which also uses transitions. If this is just a special case, feel free to close this as duplicate. ### Reproduction [Svelte 4]([link]) [Svelte 5]([link]) ---…

### CASE-2796 · CSS: transition works in React but not in Svelte
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos, react, svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug I am trying to make a carousel nav dot component but the CSS doesn't seems to work in Svelte ! It works as expected in Vanilla HTML CSS JS and in ReactJS too but sadly I got no luck with Svelte 4.1.2 ### Reproduction WORKS 😄 **React REPL** : [link] **Vanilla REPL**: [link] NO WORK 😢 **Svelte REPL**: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.5 CPU: (4) x64 Intel(R) Core(TM) i5-8210Y CPU @ 1.60GHz Memory: 23.21 MB / 8.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 16.15.1 - ~/.nvm/versions/node/v16.15.1/bin/node Yarn: 3.2.1 -…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2705 · "If" element is not defined, crashing bug
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: I'm not sure how to repro. Hoping it can be figured out looking at the code. **Update:** Got a repro. [link] **Update 2:** Another repro example, with an even more common case. An `each` inside an `if`. [link] **Update 3:** This only seems to affect 2.14.0, not 2.13.5 like I had previously thought. <img width="630" alt="screen shot 2018-10-18 at 9 50 38 am" src="[link]>

### CASE-2717 · Detached DOM subtrees retained after destroy when templates capture multiple nodes (parentNode chains)
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍2 💬5 · open
- **Excerpt**: ### Summary Hi! While working with Svelte 5 in an SPA setup, we noticed **detached DOM nodes accumulating over time** after components are destroyed. In our case, repeatedly mounting/unmounting a component like: ```svelte {#if chatId} <Chat /> {/if} ``` eventually leads to a noticeable number of detached elements (e.g. `HTMLVideoElement`, wrappers, buttons) remaining in memory. After several open/close cycles, this can grow quite large. In heap snapshots, these nodes appear with `detachedness != 0`, often retained via `system / Context` (closure scope). This seems consistent with the behavior…

### CASE-2724 · Component lifecycle timing changed in 5.36 causing subscription overlap issues
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍3 💬5 · open
- **Excerpt**: ### Describe the bug A weird lifetime cycle bug has appeared in v5.36 onwards causing all sort of weird rendering issue in my app. It seems like the unmounting/subscription order for stores has changed causing overlaps and resulting in slowdown and rendering issues in the app. I've created a reproduction that you can check out. Here's a video of how the issue looks like: v5.35 [link] v5.38 [link] ### Reproduction The logs below show the changed order of lifecycle in the new version. ---- There are a few moving parts so I created the repository with the least things I could: [link] To see the…

### CASE-2734 · when ssr is true, img elements that throw 404 halt javascript from kicking in.
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug If you have img elements with wrong src attributes that result in a 404, you can notice that javascript doesn't kick in unless all the img elements are done throwing 404 and since browser request take time, this means your code can take a few seconds to run. ### Reproduction +page.svelte ```svelte <script lang="ts"> console.log("hello"); </script> <img src="some" /> <img src="arbitrary" /> <img src="src" /> <img src="values" /> <img src="that" /> <img src="result" /> <img src="in" /> <img src="404" /> ``` The above code results in the following logs ```plaintext GET…

### CASE-2751 · Svelte 5: perfectly fine code gives `get(...) is undefined` error
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug <img width="1537" alt="image" src="[link]> ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell irrelevant ``` ### Severity annoyance

### CASE-2761 · Production build failure of [email]-next.179 -> [email]-next.182
- **Principles**: P-A3, P-H1, P-F4 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug In production only svelte is attempting to append a child to a text node during hydration. This causes JS to hard crash and the page to fail. This bug did not occur in [email]-next.178 ### Reproduction <img width="841" alt="image" src="[link]> <img width="897" alt="image" src="[link]> The component where this occurs is a simple breadcrumb component ```svelte <svelte:options runes={true} /> <script lang="ts"> const { crumbs = [], }: { crumbs: { name: string; href: string }[]; } = $props(); </script> <div class="text-sm text-gray-500 leading-tight print:hidden…

### CASE-2774 · Svelte 5 SSR: Rendering correctly in CSR only but failing in SSR
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Svelte 5 app using SvelteKit renders correctly with only CSR but fails if SSR is enabled [link]]/assets/55116576/e1a330ca-77c7-4499-baca-ff4c2dc39273 The errors reported in SSR seem to break things completely (unable to submit the input) ### Reproduction Not a minimal reproduction: [link] In the video there is a console log just after `ssrData` which is not present in the reproduction Data loader is here: [link] And used in the component here: - [link] - [link] ### Logs ```shell [Error] ERR_SVELTE_HYDRATION_MISMATCH: Hydration failed because the initial UI does not match…

### CASE-2775 · Each blocks not rerendering
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In the dialog shown in the video below, when a new reply is submitted, the card show rerender to show the 'View more' button and the input field should be cleared [link] Not entirely sure what is causing the error, have checked the application code and nothing stood out to me Have kept the reproduction close to the original application code, have just removed the state management library which was being used There is a check to see if `replyTo` has a value Event handler for replying is `L75` in `src/Thread.svelte` ### Reproduction Repo: [link] Stackblitz: [link] ### Logs…

### CASE-2783 · Svelte does not recognize popover types/properties inside template
- **Principles**: P-A3, P-H1 · **Env**: svelte, typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Try to use [popover]([link]) and observe that no types are incorrect even though typescript lib.dom.d.ts has definitions for it. ```svelte <div popover /> ``` <img width="550" alt="image" src="[link]]/assets/8914032/09166847-18be-4572-b8d3-992d6f472279"> Try to add popover property and observe that its value is set as attribute instead of property. ```svelte <button popoverTargetElement={popoverElement} /> ``` ### Reproduction [Reproduction]([link]) ```svelte <script> let target = $state(); let popover = $state() const workaround = (node) => { node.popoverTargetElement =…

### CASE-2798 · bug: 🐛 bind numeric inputs takes "e" as a valid input and "." leads to "null"
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I've been learning svelte through the great [learn.svelte.dev/numeric-inputs]([link]), and when I was playing with number input binding, I found out that despite what the docs says: > With bind:value, Svelte takes care of it for you 1. It actually takes `e` character which it shouldn't. 🐛 ![image]([link]]/assets/59599950/9d5c7ee8-e5c0-44d8-8533-58b61ff8cfca) I've tried to track it inside of the svelte core, but couldn't make it. ![image]([link]]/assets/59599950/12567513-b62f-4052-b8e5-df50f43e1f09) 2. "." leads to "null" 🐛…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2708 · Conditional elements inside <svelte:head> throw console errors on hydration.
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍5 💬6 · closed · labels: bug
- **Excerpt**: At least two types of tags are throwing errors when included conditionally: link and meta. This only seems to be an issue when using Sapper. With Svelte alone and no server-side rendering, the problem doesn't occur. See this repo and specifically lines 2-4 of [the Layout.html file]([link]). The conditional is the only thing added to the Sapper template. The error thrown is: > TypeError: Failed to execute 'insertBefore' on 'Node': parameter 1 is not of type 'Node'.

### CASE-2722 · `lifecycle_outside_component` error in rollup/rolldown SSR build
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍5 💬5 · open
- **Excerpt**: ### Describe the bug Since `[email]`, when building a component that uses `setContext` with Rolldown (or Rollup) for SSR, the build succeeds but the component throws a `lifecycle_outside_component` error at runtime. This error occurs when trying to render the component server-side with `render` from `svelte/server`. This is a regression that started in Svelte 5.39.0 - downgrading to 5.38.0 resolves the issue. This was probably introduced in [ref] ### Reproduction repo: [link] - install `svelte@>=5.39.0` - create a component that uses `setContext` - bundle it with Rollup or Rolldown…

### CASE-2727 · Hydration crashes when using app via Google Translate (or many other HTML whitespace manipulations)
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When visiting a non trivial Svelte 5 page using [Google Translate]([link]) the correct content flashes before turning into a blank page. The reason is, that Google Translate inserts whitespace into the DOM. This breaks critical assumptions within the hydration logic. In my case a component tried to access `$.child(x)` while `hydration_node.nodeType === TEXT_NODE`. Which lead to **Uncaught (in promise) DOMException: Node.appendChild: Cannot add children to a Text**. This issue is closely related to [[ref]]([link]][ref]), but was not fixed by [PR [ref]]([link]][ref]). ###…

### CASE-2740 · Can't disable hydration warning
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I cannot seem to disable the hydration warning. I have tried: ```html <!-- svelte-ignore hydration_html_changed hydration_mismatch --> ``` before the problematic line. Also the compile option: ```ts compilerOptions: { warningFilter: (warning) => warning.code !== 'hydration_mismatch' } ``` And no avail. This says I should be able to use `svelte-ignore`. [link] ### Reproduction My basic repo example uses the `hydration_mismatch` error, but it also seems to be a problem with `hydration_html_changed`. [link] I can't post a REPL since it doesn't support TS nor SvelteKit.…

### CASE-2747 · Dynamic component throws during ssr
- **Principles**: P-F4 · **Env**: linux, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I'm trying to load a component dynamically ```svelte <script> let Terminal = $state(); $effect(() => { import("./terminal.svelte").then((module) => { Terminal = module.default }) }) </script> <Terminal /> ``` During ssr on it throws the error `TypeError: Terminal is not a function`.The only way to fix this would be to check first with an if block or turn of ssr, both of which are annoying. ### Reproduction [Reproduction]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.8 Linux Mint 22 (Wilma) CPU: (4) x64 Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz…

### CASE-2766 · Svelte 5: CSS custom property wrapper is implemented incorrectly
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug This will sound like a rather niche and inconsequential issue, but it relates to some of the current work around making hydration more efficient. When you create a component with CSS custom properties... ```svelte <Foo --bar="baz" /> ``` ...the following JavaScript is generated: ```js $.css_props(node, true, () => ({ "--bar": "baz" }), ($$node) => Foo($$node, {})); ``` If the component is dynamic... ```svelte <svelte:component this={Foo} --bar="baz" /> ``` ...you get this: ```js $.component(node, () => Foo, ($$component) => { $.css_props(node, true, () => ({ "--bar":…

### CASE-2790 · Comments in the code can cause the build to deadlock.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug an empty javascript comment block `/**/` can cause the svelte compiler to lock up. ### Reproduction URL edit to add simplified reproductions: - [link] - [link] original: [link] ### Reproduction 1) If you run `npm run build -- -d`, the build will complete successfully. 2) If you remove the block comment on line 180 of Counter.svelte and run the same command again, the build will deadlock after ssr compile. 3) The cause is that if you change the last block comment on line 179. add an additional block comment or input something in comment, the build will complete…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2710 · font face ignored when compiled via Component.render()?
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍4 💬6 · closed · labels: bug
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2714 · $derived on a class instance returns a stale value after the effect that incidentally owned it at construction is destroyed
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug A $derived declared as a class field is "owned" by whatever effect happens to be active when the instance is constructed (derived.parent = active_effect). If that instance outlives the effect, e.g. a long-lived model object that was new'd inside a component which later unmounts, the derived is frozen to its last value and never recomputes again, even though its $state dependencies keep changing. This is a regression introduced in 5.55.3 by [ref]; pinning to 5.55.2 restores correct behavior. The trap is that the owning effect is non-deterministic and semantically…

### CASE-2716 · Stale $derived value in $effect cleanup
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Some weird combination of `$derived` and `$effect` produces stale derived values on effect cleanup Below I've provided as minimal reproduction as I could conjure - I've discovered it while implementing an abstraction for async derived state in our app (we're not using experimental await in derived syntax) where we rely on `createSubscriber` to setup an effect watching a derived promise to set the state on promise resolution. `createSubscriber` seems to be the only way in user land to have an effect running inside a derived. Bug was discovered on version `5.47.1` but is…

### CASE-2741 · `bind:this` produces unwanted read of `$props` during unmount
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: linux, react, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug reproduction: click on `Del` button to get an error in console expected: no error Current behavior is understandable from reactive system point of view, but I was very surprised as a consumer of a library that uses code like in the `Input.svelte` component. ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 6.6 cpe:/o:nixos:nixos:24.11 24.11 (Vicuna) CPU: (12) x64 Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz Memory: 8.79 GB / 15.56 GB Container: Yes Shell: 5.9 - /run/current-system/sw/bin/zsh Binaries: Node: 22.10.0 -…

### CASE-2752 · Svelte 5: detached nodes memory leak
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the bug Detached DOM nodes are leaking when using signals and as a result event listeners and other memory resulting in huge memory leaks over time. ### Reproduction Somehow I can't get this leak to happen in the playground, so please try reproduction in my repo. Here is the code (also in the repo [link]): ``` <script> let counter = $state(0); let show = $state(false); </script> <div>Count: {counter}</div> <button onclick={() => (show = !show)}>Toggle</button> {#if show} <button onclick={() => { counter += 1; }} > Increment </button> {/if} ``` ### Steps 1. `npm run build && npm…

### CASE-2754 · Svelte 5 unused $state memory leak
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the bug In a drag and drop library, where elements can be moved between nested components, be added and deleted, a lot of components might be generated with a lot of state needing to be passed around. It might be convenient to have a factory that mounts the elements with a new local state to pass around. When doing so, one might expect that upon: - Unmounting the component, - The state not being referenced anywhere else, that the state and it's event listeners to be garbage collectable. This... unfortunately is a footgun. From what I understand, the $state wraps the object in a…

### CASE-2763 · next.168 broke unmounting content in my app
- **Principles**: P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug things work with 167, after upgrading to 168 the following: ```svelte {#if showingNoteSelector} <Overlay onclose={closeNoteSelector} blur={true}> <NoteSelector {switchToCommandPalette} openNote={onOpenNote} createNote={onCreateNote} deleteNote={onDeleteNote} /> </Overlay> {/if} ``` stops working i.e. when `showingNoteSelector` goes from `false` to `true`, it does render the content as expected. Going from `true` to `false` doesn't unmount the Overlay. I have: ``` $effect(() => { console.log("showingNoteSelector changed to:", showingNoteSelector); }); ``` so I can tell…

### CASE-2764 · Svelte 5: problems unmounting elements from the dom inside an each block
- **Principles**: P-F5, P-H3 · **Env**: linux, svelte
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### Describe the bug This happens from next.168 and I can't reproduce it without kit. Opening StackBlitz you'll see that the element are correctly added to the DOM when we click open but they are not removed when we click close ### Reproduction [StackBlitz]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (6) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.2.3 - /usr/local/bin/npm pnpm: 8.15.6 - /usr/local/bin/pnpm…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2718 · non_reactive_update incorrectly flags SvelteSet and SvelteMap when mutated through binding
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, react, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug The non_reactive_update warning incorrectly flags SvelteSet and SvelteMap (from svelte/reactivity) as non-reactive when they are mutated by external functions, such as a binding. ### Reproduction playground: [link] note that `foo` is squigglied. ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 26.1 CPU: (16) arm64 Apple M4 Max Memory: 68.96 GB / 128.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 25.2.1 - /opt/homebrew/bin/node npm: 11.6.2 - /opt/homebrew/bin/npm Browsers: Chrome: 144.0.7559.97 Firefox: 147.0 Safari: 26.1 ``` ### Severity annoyance

### CASE-2726 · Bug: Async + View Transitions slows down page navigation
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox
- **Signals**: 👍11 💬5 · closed
- **Excerpt**: ### Describe the bug If you configure your external layout to enable the view transition api ([doc]([link])) and you have the async experimental flag turned on, the navigation between pages becomes really slow even if you don't have any data loading. ### Reproduction [stackblitz]([link]) Just comment out the `document.startViewTransition` call in the external layout or turn off the experimental async flag to have the navigation working as expected ### System Info ```shell It "works" on firefox because it doesn't support view transitions ``` ### Severity ~~blocking an upgrade~~ blocking the…

### CASE-2729 · handler_element undefined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, svelte
- **Signals**: 👍0 💬5 · open · labels: awaiting submitter
- **Excerpt**: ### Describe the bug Seeing error logs for `Uncaught TypeError: Cannot read properties of undefined (reading 'ownerDocument')` because it looks like `handle_event_propagation` is being called while the handler_element is undefined. The code in question is here [link]]/blob/main/packages/svelte/src/internal/client/dom/elements/events.js#L151 This is somehow connected to the user having the jam.dev Chrome extension enabled but I am not sure how the two are intersecting. <img width="1241" alt="Image" src="[link] /> ### Reproduction So far not able to catch this in a REPL. ### Logs ```shell…

### CASE-2730 · Reactive bug with bind: triggering multiple reactions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, windows, react, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I am using a svelte store with a file state.svelte.ts and it seems when any state in there changes it is causing rerender off all components that use any piece of that state instead of just rerendering the component that is using the changed piece of state. This feels like a bug and I was able to replicate it to show you. Let me know why this behaviour is happening and how to get around it. ### Reproduction You can find a REPL here that shows this behavior, check the console logs: [link] ### System Info ```shell Windows, Firefox ``` ### Severity annoyance

### CASE-2731 · Changed $state randomly doesn't update the UI
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: safari, ios
- **Signals**: 👍0 💬5 · open · labels: awaiting submitter
- **Excerpt**: ### Describe the bug I have a piece of html below ("totalWin" is a piece of $state on the "bet"-object) and most of the time the value updates as expected: ``` <div class="flex flex-col justify-center items-center"> <div> Test </div> <div class={`text-xl font-normal`} > {currency.formatCurrency(bet.totalWin)} </div> </div> ``` But sometimes (randomly?) it doesn't reflect the new value of "totalWin" state (on iOS Safari). I debugged this and removed more and more code until I found what caused it. If I instead change to the code to below it works always (the only changed thing is that I…

### CASE-2742 · Illegal invocation with snippet & action
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Faced `TypeError: Illegal invocation` when trying to implement use:action, i don't know if it is a bug or an intended behavior ### Reproduction managed to create repl: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.4.1 CPU: (8) arm64 Apple M1 Pro Memory: 155.20 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.7.0 - /opt/homebrew/bin/node npm: 10.8.2 - /opt/homebrew/bin/npm pnpm: 9.14.2 - ~/Library/pnpm/pnpm bun: 1.1.3 - ~/.bun/bin/bun Browsers: Chrome: 131.0.6778.109 Safari: 17.4.1 npmPackages: svelte: ^5.12.0 => 5.12.0 ``` ### Severity…

### CASE-2744 · Svelte's usage of the `:where` CSS selector breaks sites in Safari 12 and 13
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 12, safari, svelte
- **Signals**: 👍2 💬5 · open · labels: css
- **Excerpt**: ### Describe the bug Svelte uses the `:where` CSS selector when you use a CSS selector like `li.main-menu:hover ul`. Svelte turns that into `.main-menu.svelte-13eihuy:hover ul:where(.svelte-13eihuy)`. This `:where` selector has only been added to Safari in version 14. The fix is to change `li.main-menu:hover ul` into `li.main-menu:hover :global(ul)`, but this is not obvious and you won't notice that your CSS doesn't work in older browsers unless you specifically test your site in them. Now obviously I know that Safari 12 and 13 are quite old, but aren't they supported by Svelte? What is the…

### CASE-2745 · Legacy #await problem
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug Await block unexpectedly evaluates expression upon state changes in legacy mode. Expected behavior is to only have the expression evaluated when its variables change. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (16) x64 Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz Memory: 9.01 GB / 25.53 GB Binaries: Node: 18.12.1 - C:\Program Files\nodejs\node.EXE npm: 9.1.3 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Chromium (130.0.2849.80) Internet Explorer: 11.0.19041.4355 npmPackages: rollup: ^4.22.4 => 4.27.3…

### CASE-2749 · Pushing to a bind:group array doesn't update checkboxes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug I would expect 2nd checkbox to be checked in UI, attaching link to playground for references ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 14.6.1 CPU: (8) arm64 Apple M1 Memory: 47.88 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 16.14.2 - ~/.nvm/versions/node/v16.14.2/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.5.0 - ~/.nvm/versions/node/v16.14.2/bin/npm Browsers: Chrome: 130.0.6723.60 Safari: 17.6 ``` ### Severity annoyance

### CASE-2750 · Destructuring with fallback and then reassigning in `{#each}` is broken
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, ios, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug In non-runes mode, destructuring an object with a fallback and then assigning to that variable in a callback does not seem to mutate it. When the button is clicked in the REPL, this is the output: ``` 1 false 2 false ``` It should be: ``` 1 false 2 true ``` ### Reproduction [REPL]([link]) ### Logs _No response_ ### System Info ```shell REPL, Svelte 5.0.5, Firefox iOS ``` ### Severity annoyance

### CASE-2762 · Svelte 5: Transition does not work in snippet
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: edge, chromium, windows, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Transition does not work in Svelte 5 snippet. However, this used to work in Svelte 4 `slot`. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (8) x64 Intel(R) Core(TM) i3-10100F CPU @ 3.60GHz Memory: 4.70 GB / 15.94 GB Binaries: Node: 22.4.0 - ~\scoop\apps\nodejs\current\node.EXE npm: 10.8.1 - ~\scoop\apps\nodejs\current\bin\npm.CMD bun: 1.1.18 - ~\scoop\shims\bun.EXE Browsers: Edge: Chromium (126.0.2592.87) Internet Explorer: 11.0.22621.3527 npmPackages: svelte: ^5.0.0-next.175 => 5.0.0-next.175 ``` ###…

### CASE-2769 · Svelte 5: `<img loading="lazy">` loads eagerly in Firefox (regression)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chromium, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Setting `loading="lazy"` on an `<img>` element in a Svelte 5 component does not affect a change when viewed in Firefox, and the image is still loaded eagerly. This appears to be a regression from Svelte 4, where the attribute correctly makes the images load lazily. Chromium-based browsers appear unaffected based on a very quick test. On my machine, Svelte 4: ![image]([link]]/assets/118788705/3031f965-1cba-4c7b-8568-9c26fc4d0777) Svelte 5: ![image]([link]]/assets/118788705/cbba114d-5e80-44a9-aace-dfa45690e550) This may or may not be connected to one of the reported Firefox…

### CASE-2778 · REPL login to save isn't working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, mobile
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When you click the login to save button a popup opens, instantly closes and the login is not completed ### Reproduction [[link]]([link]) Click the log in to save button ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx Memory: 3.93 GB / 9.88 GB Binaries: Node: 20.11.0 - C:\Program Files\nodejs\node.EXE npm: 10.3.0 - C:\Program Files\nodejs\npm.CMD pnpm: 8.14.1 - ~\AppData\Roaming\npm\pnpm.CMD Browsers: Edge: Chromium (121.0.2277.98) Internet Explorer: 11.0.19041.3636 ``` ###…

### CASE-2784 · Running many animations on timer when the tab is in background causes a memory leak
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: chrome, chrome 120
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter/transition/animation
- **Excerpt**: ### Describe the bug Probably because Chrome throttles timers/rendering when tab is not active. ### Reproduction Run many e.g. flip animations when the browser tab is not active and it eventually crashes. Probably all animation functions should check for `document.visibilityState === 'visible'` before they are run, this will save CPU and memory when tabs are not active. ### Logs _No response_ ### System Info ```shell Chrome 120 ``` ### Severity annoyance

### CASE-2787 · Svelte 5: SyntaxError: Unexpected token 'class'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Exporting class prop throws an error. No error in Svelte 4 with the same code. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 13.6.1 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 276.70 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.9.0 - ~/n/bin/node npm: 10.1.0 - ~/n/bin/npm Browsers: Chrome: 119.0.6045.199 Safari: 17.1.2 npmPackages: svelte: ^5.0.0-next.18 => 5.0.0-next.18 ``` ### Severity annoyance

### CASE-2799 · docs: tutorial/context-api not loading
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬5 · closed · labels: site
- **Excerpt**: ### Describe the bug doc [link] not loading ### Reproduction <img width="1440" alt="image" src="[link]]/assets/19618730/29d70b99-f9a7-4b38-a9e1-623ba0e5c7ed"> ### Logs ```shell Could not load [link]] (imported by ./mapbox.js): Cannot find "/[object Object]" in [email] ``` ### System Info ```shell Google Chrome Version 113.0.5672.126 (Official Build) (arm64) ``` ### Severity annoyance

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2719 · bind:clientWidth does not update when scrollBar appears/disappears
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, svelte
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug Svelte internally uses a border-box ResizeObserver for bindings to clientWidth. Since the border-box size does not change when a scrollbar appears due to overflow, the clientWidth binding is never updated even when it should be. Same issue would occur for clientHeight and a horizontal scrollbar. ### Reproduction [link] ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (12) x64 13th Gen Intel(R) Core(TM) i5-1345U Memory: 14.52 GB / 31.66 GB Binaries: Node: 24.11.1 - C:\Program Files\nodejs\node.EXE npm: 11.7.0 - C:\ProgramData\npm\npm\npm.CMD bun: 1.2.18 -…

### CASE-2720 · Exception thrown in hydratable promise crashes entire node process
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Hey, thanks for launching the new hydratable feature! We're already taking advantage of it here at Stack Overflow. We've noticed one problem with the current implementation though. If a promise rejects (eg. through a thrown exception), hydratable reasonably fails to serialize the Error object returned by the promise. However, it then throws an exception outside of the promise chain. This causes the entire node process to crash since I _think_ the exception was thrown in a background thread, not the main thread. cc @user @user @user I'm happy to open a PR to help fix this,…

### CASE-2800 · v4 site polish
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: windows, linux, vite
- **Signals**: 👍0 💬5 · closed · labels: site
- **Excerpt**: ### Describe the bug - [x] update renderer ([link]][ref]) - [ ] ensure text in buttons on homepage hero is vertically centered - [ ] can't switch tabs on [link] - [ ] [link] - [x] [link] - [x] check that migration guide code blocks render well for everyone after renderer is updated - [ ] do something scroll bar on windows/linux on accessibility warnings page. e.g. hide as vite does - [ ] remove glow on aside/highlight blocks - [x] test that deep links scroll properly after renderer is updated - [x] search needs to scroll to selected item. it's currently going to top of page - [x] remove text…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-2725 · Feature Request: Official Recommended Global Request Cache Pattern in Svelte
- **Principles**: P-D4, P-F1, P-F5 · **Env**: svelte, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem While building apps with Svelte 5, I’ve often run into the need to share and reuse the state of async requests (data, loading, error) across multiple components — similar to how React Query or SWR work in React. As far as I know, there isn’t an official or idiomatic pattern in Svelte for implementing a global request cache. This often leads developers (myself included) to reinvent the wheel, usually borrowing patterns from React that don’t feel quite natural in Svelte. I’m aware of TanStack Query for Svelte, but it seems to have several issues with Svelte 5 and…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2757 · CSS zoom on grid breaks flip
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍2 💬5 · open · labels: transition/animation
- **Excerpt**: ### Describe the bug Setting the [CSS zoom property]([link]) to a number other than `1` on a grid container with children with `animate:flip` causes the flip animations to originate from incorrect positions. While I'm personally unfamiliar with Svelte's source code, I'd imagine this is a bug with the flip animation's origin position calculation not accounting for the zoom. Please let me know if you need any more detail. Additionally, if you can point me to where this calculation is done in the code, I can take a shot at implementing a fix. Thank you! ### Reproduction REPL: [link] In this…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2773 · Enabling Controlled Components pattern on native components
- **Principles**: P-A5 · **Env**: react, svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the problem Not sure if this is really a feature request, but I haven't found anything that would lead me to think that it's a bug. Coming from React, I'm used to the Controlled Component pattern, which is one of the most crucial concepts to build a safe and comprehensible state. It seems to me that this pattern does not apply to native components (div, a, p...) in Svelte, and I cannot find a standard way to implement it. On top of that, the API native components provide us with make it seem that it's the case but it's not. For example, consider this: ```svelte <script> let…

