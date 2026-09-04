# Case Chunk 019 — Round 19

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2801 · Checkbox with bind:checked and on:input - on:input callback sees old checked value
- **Principles**: P-G4, P-E3 · **Env**: linux, ubuntu
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When using `bind:checked` and `on:input` callback: `<input type="checkbox" bind:checked on:input="{() => console.log('New value:', checked)}"/>` In the callback the function still see the old value. Expected: The function see updated value. ### Reproduction See the console output - it shows the opposite value than it should. [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.15 Ubuntu 20.04.6 LTS (Focal Fossa) CPU: (12) x64 AMD Ryzen 5 5600H with Radeon Graphics Memory: 41.21 GB / 62.67 GB Container: Yes Shell: 5.0.17 - /bin/bash Binaries: Node:…

### CASE-2813 · Svelte Runtime Error when rendering `innerHTML` with `@user`
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug A Svelte Runtime Error occurs when updating a value with the `innerHTML` of a `contenteditable` element and rendering it with `{@user value}`. My goal is to sync the content of the `contenteditable` div with a global store that stores the `innerHTML` of the div element. ### Reproduction [link] Step 1: input a letter into the `contenteditable` field (it will duplicate the letter) Step 2: Clear the input field Now the error appears in the console ### Logs ```shell Error: Uncaught (in promise): Cannot read properties of null (reading 'removeChild') ``` ``` ### System Info…

### CASE-2818 · Esoteric bug regarding <input> and $$restProps
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### Describe the bug When... 1. There is an array of _objects_ iterated with a keyed `{#each}` block 2. ...and the `{#each}` loop contains a component with an `<input>` element 3. ...with a value from _objects'_ property 4. ...and uses `$$restProps` 6. ...and then the array items are rearranged 7. ...the inputs lose their values, values becoming `undefined` **This is best explained with a reproduction. Just open the repro and click on the arrows.** Funnily enough, the bug disappears when using `<textarea>`. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell Bug is…

### CASE-2822 · A component wrapping a custom element is not rendered into a slot correctly
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: custom element/documentation
- **Excerpt**: ### Describe the bug See the link to the REPL below... I have two components, Input and Icon, which both wrap imported custom elements: - `Icon.svelte` is a wrapper for [ui5-icon]([link]) and simply forwards a `name` attribute. - `Input.svelte` is a wrapper for [ui5-input]([link]). Input.svelte forwards one named slots of ui5-input: `icon`. In my main component, `App.svelte`, I use `Input.svelte` twice. Both times I try to set an icon to the input by using the `icon` slot. When I fill the slot with `ui5-icon` directly, that works fine. But when I try the same with the `Icon.svelte` component,…

### CASE-2832 · ParseError: Unexpected end of input
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬5 · open
- **Excerpt**: ### Describe the bug Compilation error `ParseError: Unexpected end of input` happens when you have a Svelte component with the following contents: ``` <script lang="ts"> import '../app.css'; </script> <!-- <style lang="scss"> --> <style> /* :global { @user './lib/shared/drawer/Drawer.css'; } */ :global(body) { padding: 1rem; } </style> ``` The issue here is the commented line `<!-- style lang="scss"> -->`. If this line is removed compilation error is gone. I often comment out parts of markup when working and continously run into this issue. ### Reproduction <script lang="ts"> import…

### CASE-2833 · Number Input coercion causing issues with negative input
- **Principles**: P-G4, P-E3 · **Env**: linux
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug If you set up a one-way bound number input, highlighting and replacing text in the input field does not work. The first press of "-" results in the value being replaced with `0` A workaround is to use non-number inputs, but this removes a lot of the default browser behaviour (e.g. keyboard, mouse events incrementing the value), so is far from ideal. ### Reproduction [REPL]([link]) to reproduce, highlight the text in the input, and press `-` ### Logs _No response_ ### System Info ```shell System: OS: Linux 5.10 Manjaro Linux CPU: (8) x64 Intel(R) Core(TM) i5-8250U CPU @…

### CASE-2840 · on:input events behave inconsistently between pressing different keys or the same key twice
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** `on:input` behaves differently depending on whether the same key is pressed repeatedly, or different keys are pressed. See the example in "to reproduce" section. This code should only allow one character in the input box, the final character the user types. This code works as expected if the user types something like "ABC", the input value is set to "C", but "ABB" leaves "BB" in the input box. **To Reproduce** [link] <script> let char = '' const setChar = (e) => char = e.data </script> <input type='text' value={char} on:input={setChar}> **Expected behavior** Each time a…

### CASE-2860 · Error binding value to select with multiple attribute and $$restProps
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** After upgrading to Svelte 3.24.0, seeing `undefined is not an object (evaluating 'value.indexOf')` when binding value to select with multiple attribute _and_ using `$$restProps`. **To Reproduce** [link] ``` <script> export let value = ''; </script> <select {...$$restProps} bind:value multiple > <slot /> </select> ``` **Additional context** Seems to be coming from here: [link]]/blob/ce3d0461e9d6b38605f7e067feb3391686fc15ec/src/runtime/internal/dom.ts#L229

### CASE-2866 · Name collision in each disables binding
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** Name collision between expression name and property name in destructed object disables bind to work on that property ``` {#each a as { a }} <input bind:value={a} /> {/each} ``` **To Reproduce** [link] **Expected behavior** Property inside an object should change when input changed **Information about your Svelte project:** - Svelte version 3.21.0 **Severity** Annoying. Of course that applieable in very small cases but i think it should work **Workaround** Renaming the property name fix problem ``` {#each a as { a: b }} <input bind:value={b} /> {/each} ``` Would work

### CASE-2885 · Two-way binding for a component makes two updates in a reactive block if `bind:value=<object>`
- **Principles**: P-G4, P-E3 · **Env**: react, svelte
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: Primitive types and bindings in native `<input>` work fine. See [REPL]([link]). I added `<svelte:options immutable={true}/>` and the problem has gone. However I see inconsistent behaviour for `<Custom bind:value={object.prop}/>` and `<input bind:value={object.prop}/>` when `immutable` is false. Is this a bug?

### CASE-2887 · Excessive invalidation in ArrowFunctionExpression results in infinite loop
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: Bit of strange one, but here is a repro: [link] (Note: will likely cause an infinite loop) Here is the input: ```html <script> const a = Promise.resolve('a'); let b = Promise.resolve('b'); let a_value, b_value; $: a.then(value => a_value = value); $: b.then(value => b_value = value); $: b.then(value => { b_value = value }); </script> ``` and here is the relevant output: ```js function instance($$self, $$props, $$invalidate) { const a = Promise.resolve('a'); let b = Promise.resolve('b'); let a_value, b_value; $$self.$$.update = ($$dirty = { b: 1 }) => { if ($$dirty.b) { b.then(value => { const…

### CASE-2890 · conditional "maxlength" attribute for the input
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hi team! I want to implement conditional `maxlength` attribute in the `input` based on my helper. How can I do it? Here a repl with different `maxlength` values (null, undefinded, empty string etc): [link] Is it bug? Or may be I've missed something. **workaround** from @user : ```js helpers: { maxLen() { return 524288; //[link] } } ```

### CASE-2895 · Cannot bind to checked value for radio inputs
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Applies to all 2.* versions of Svelte The following code fails to compile with error: `Could not load ./App.html: 'checked' binding can only be used with <input type="checkbox">` [link] indicates this is still supported functionality Code to repro ``` <input bind:checked=a type=radio> ```

### CASE-2899 · Text that looks like snippet references is not escaped
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: Compiling a component containing `[✂]` or any of several other things that confuse the snippet regexes causes an exception, and if you compile something containing a string that actually looks like a snippet reference (`[✂123-456✂]`) it'll attempt to grab that snippet. If we actually escaped the relevant text when it appeared in the input component, we could also safely use a less obscure pattern for it, if so desired. Pretty low probability that anyone would bump into this without looking for it, but I wanted to have a ticket, however low priority it may be.

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2802 · Bug report: no error when using `@user` variable before initialization
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · open · labels: bug/compiler
- **Excerpt**: ### Describe the bug I was trying to include a space after a comma in an if-statement. Consider this repro: ```svelte <script> const length = 10; </script> {#each { length } as _, i} {@user nth = i + 1} {nth}{#if nth !== length}, {/if} {/each} ``` [REPL]([link]) I did want the space to be a breaking space, so `&nbsp;` wouldn't work here. I tried `&[ref];` which I believe is the equivalent code for a traditional breaking space, but that did not work either. (e.g. `{nth}{#if nth !== length},&[ref];{/if}`). Finally, I did something accidentally and reordered the two lines inside the enclosing…

### CASE-2804 · Reactive variable not updating as expected when assigned to store value
- **Principles**: P-E1, P-E2, P-E4 · **Env**: linux, react
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug Reactive variables assigned to the value of a store do not correctly update if the reactive declaration is defined in the code before the store value itself is changed. The store value itself does change, but reactivity is never triggered for any variable reacting to changes in the store value. The strangest thing is that the where the directly reactive statement is defined changes the semantics of the code. Reproducing this bug is very simple, see the attached REPL. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Linux 4.18 CentOS…

### CASE-2805 · Binding causes extra reactive call in child
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍0 💬5 · closed · labels: conservative reactivity
- **Excerpt**: ### Describe the bug When a reactive statement is triggered in a child component, if another non-primitive dependency of that statement is bound to the parent component, the reactive statement will be run an extra time. Ran into this when trying to use the Broadcast Channel API to sync bound Svelte variables across tabs. The extra call would cause infinite loops in sending messages between tabs. Similar to [ref] but without the slot. One workaround is to add `<svelte:options immutable/>` to the child component. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System:…

### CASE-2806 · Variable event names
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem Correct me if I'm wrong but I don't think there is a way around hard coding event names. It would be nice to be able to use variables as event names. This way, if I ever want to change the event name, it would be a relatively trivial thing to do. ### Describe the proposed solution Perhaps you could wrap event names in curly braces. For example: `Button.svelte` ```html <script context="module"> export const MY_CUSTOM_EVENT = 'MyCustomEvent' </script> <script> import {createEventDispatcher } from 'svelte'; const dispatch = createEventDispatcher(); const clickHandler =…

### CASE-2807 · `a11y-mouse-events-have-key-events` warning when using focusin/focusout
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug I get an IDE warning for `a11y-mouse-events-have-key-events` when using `mouseover` and `mouseout` events along with `focusin` and `focusout`. In my opinion they should be treated the same as `focus` and `blur` for the purpose of this warning. ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.6 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 28.23 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.17.0 - ~/.nvm/versions/node/v16.17.0/bin/node npm: 8.15.0 - ~/.nvm/versions/node/v16.17.0/bin/npm Browsers:…

### CASE-2819 · Using a ref inside a {#key} block turns it undefined or null
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When I use a `{#key}` block that has a reactive variable from a store (let's call it `someVar`), my binding for a component will get lost. On initial render this variable is bound and I can interact with my component. But when `someVar` changes, I cannot longer use the component, the binding turns `undefined` or `null`. Is this intended? Or is there a workaround? When I just put the component outside that block it will work, but will cause me some "flickering" in the UI that I want to prevent. ### Reproduction This this [REPL]([link]). ### Logs This is a dialog component…

### CASE-2821 · Reactivity not applying to action parameters
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Sorry if this is a dupe or expected behavior... I know that reactivity isn't supposed to transcend function calls, so people add extra params to the function calls (needed or not) to indicate they should be reactive. It's just about the name of the variable being present at the original site. So here I have an example of an action that mutates a local state variable, and I was expecting reactivity to trigger based on my referencing the name of the variable in the `use:recordWidth={container}` part. See repl here: [link] I'd expect the see the width of the element printed…

### CASE-2824 · Empty CSS variables are incorrectly minified
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, tailwind
- **Signals**: 👍0 💬5 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug This is valid CSS: ``` .my-class { --my-var: ; } ``` Importantly, the value of the variable is a single space character. SvelteKit is minifying this CSS (in development and production) to this: ``` .my-class { --my-var:; } ``` This is syntactically invalid and breaks the semantics of the original CSS. Unfortunately this breaks compatibility with Tailwind CSS, as we rely on empty variables to make certain types of styles composable, which you can read about in this blog post if would like a deeper explanation: [link] esbuild _used_ to have the same bug but it was fixed a…

### CASE-2834 · <select> doesn't update selected value when options change
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Consider this example: ```svelte <script> let value = 'foo'; let options = {}; function loadOptions() { options = { '': 'Please choose...', foo: 'Foo', bar: 'Bar', baz: 'Baz', }; } </script> <select {value}> {#each Object.entries(options) as [key, value] (key)} <option value={key}> {value} </option> {/each} </select> <button on:click={loadOptions}> Load options </button> ``` The `value` of `<select>` is set to the local `value` variable which can only hold `"foo"`. The options of the `<select>` are loaded dynamically (here simulated with a button). When you press the…

### CASE-2835 · Is there any way to force mark a variable as dirty?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem Here's a very simplified version. Component has url, and if it changes, it triggers fetch promise etc. But there are cases where it needs to refresh even when that url did not actually change. I thought I could mark `url` as dirty by `url = url` as this works for arrays/objects, and then all reactive statements which depend on url would trigger, getting the whole cascade going. It looks like it doesn't work for strings, and that's very surprising. This code in REPL: ``` <script> let url = 'world'; $: contents = `{${url}: ${Math.random()}}` function refresh() { url =…

### CASE-2839 · Inplace increment decrement assign not handled correctly inside #each
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** Increment inside a #each block is broken. The variable is not incremented **To Reproduce** [link] **Expected behavior** Increment the variable n inside the #each block **Information about your Svelte project:** REPL 3.38.2 **Severity** After some fiddling around i think this issue is serious.

### CASE-2844 · Input element doesn't update with 1-way bind to value prop
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍1 💬5 · open · labels: temp-stale
- **Excerpt**: ## Is this about svelte@user? This project is currently in a pre-release stage and breaking changes may occur at any time. Please do not post any kind of bug reports or questions on GitHub about it. **Describe the bug** When updating a variable via event value from on:input, and then 1-way binding the value of the <input/> element to the variable, it would be expected that when the variable updates, so does the input value. **Logs** N/A **To Reproduce** REPL link: [link] **Expected behavior** The input updates when the variable bound to value changes **Stacktraces** N/A **Information about…

### CASE-2845 · {} in an attribute list causes the compiler/linter to crash instead of producing a meaningful error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera
- **Signals**: 👍0 💬5 · closed · labels: feature request
- **Excerpt**: **Describe the bug** `{}` in an attribute list causes the compiler/linter to crash instead of producing a meaningful error. **To Reproduce** ```html <span {}></span> ``` [link] The result is an exception `TypeError: Cannot read property 'length' of null` which doesn't really indicate what happened and where (in VSCode this shows at (1, 1)). **Expected behavior** A meaningful error like `Variable name or spread operator expected`. **Stacktraces** <details> <summary>Stack trace</summary> bundler.js:11 TypeError: Cannot read property 'length' of null at read_attribute (compiler.js:16002) at tag…

### CASE-2849 · Paused binding on audio not working correctly
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍5 💬5 · closed · labels: stale-bot/temp-stale
- **Excerpt**: ## Paused binding on audio not working correctly **Describe the bug** The binding for paused on audio elements gives the wrong results in the following two cases: - On mounting the audio element, the binding remains undefined until manually paused or unpaused, while the real property on the DOM is true. - On changing the src attribute if the element is currently playing, the actual element will pause and its paused property on the DOM is set to true, but the binding remains false. **To Reproduce** [Svelte REPL]([link]) **Expected behavior** The bound variable remains bound and synced to the…

### CASE-2854 · Importing a library in a svelte component causes issues
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** I am using typescript and compiling a small routing library with Rollup which I'm writing out of educational perspective. When I try to import the parser library that I intend to use, it doesn't seem to work from within a component. ``` <script lang="ts"> import { urlListener } from './../stores/url-listener.ts' // works for local files import * as RouteParser from '@user/route-parser' // this one fails. const parser = RouteParser.RouteParser(r); ``` **Logs** The browser gives me a routeParser not defined error (there is no such variable in my code): ``` main.ts:6…

### CASE-2855 · a11y gives img alt warnings when it shouldn't
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** The following repl gives a warning about the 'alt' attribute on the img. [link] I think it is a unfair warning as there is no way to describe what this image is without the use of the word 'picture' without using too many unnecessary other words. **Logs** None **To Reproduce** [link] **Expected behavior** I expect svelte to make exceptions in situations like a profile picture, an image that shows someone printing an image described as 'someone printing a picture or image', etc. I should not have to add a ignore warning for these cases. Not ever, really. **Information…

### CASE-2856 · Warnings: Add info if warning can be ignored
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed · labels: compiler
- **Excerpt**: **Is your feature request related to a problem? Please describe.** Over at the [language-tools]([link]) repo we get bug reports that people cannot disable warnings. Most can be disabled, but some apparently can't. This is the most recent issue where someone asks how to disable the warnings for unused selectors: [link] . According to [this PR]([link]][ref]) it should be possible to silence errors / prevent the compiler from returning them by adding a `svelte-ignore` comment above it, for example `<!-- svelte-ignore some-a11y-warning-code -->`. **Describe the solution you'd like** I would like…

### CASE-2858 · Order matters defining transitive dependencies using reactive statement using functions
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: **Describe the bug** If I define a transitive dependency using two reactive statements, like this: ```javascript $: sum_2 = parseInt(sum_1) + 1 // ok, no matter the order! -> first command $: sum_1 = parseInt(sum_0) + 1 // ok, no matter the order! -> second command ``` (sum_1 depends on sum_0, and sum_2 depends on sum_1) It works ok, no matter in which order I define them But if I do the same calling functions, the order DOES matter, and the sum_2 variable is NOT updated: ```javascript const update_sum_1 = () => sum_1 = parseInt(sum_0) + 1 const update_sum_2 = () => sum_2 = parseInt(sum_1) +…

### CASE-2859 · Input binding wrongly triggers reactivity of a variable used in it's bind path computation
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** When we bind an input to a object property, and if we use an expression to compute that property name, binding not only triggers reactivity of containing object, but also other other objects used in it's property-path computation. For example, if we say `<input bind:value={form[schema.name]}>`, changing input not only triggers reactivity over `form` object, but also on `schema` object used in property name computation. And if we declare to reset `form` on `schema` change, that will be mis-triggered on value change to above binding, and effectively resets form, and binding…

### CASE-2867 · Compiler error in 3.20.0 with certain slot usage
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** As of 3.20.0, the compiler is now throwing an exception when compiling certain slot usages. **Logs** Compile time exception: `Variable 't' already initialised with a different value` **To Reproduce** ```svelte <slot> <div title={foo}>foo</div> <div>bar</div> </slot> ``` **Expected behavior** This compiles without an exception. **Stacktraces** <details> <summary>Stack trace</summary> ``` Error: Variable 't' already initialised with a different value at Block$1.add_variable (.../src/compiler/compile/render_dom/Block.ts:210:10) at Block$1.add_element…

### CASE-2869 · Wrong order of execution for reactive variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: bug/awaiting submitter/temp-stale
- **Excerpt**: When I assign a value from a standard variable to a reactive variable, accessing the reactive variable afterwards results in an "uninitialized error". For example: ```javascript let val = "onion"; $: gold = val; console.log("gold", gold); ``` Generates: ```javascript let val = "onion"; function instance($$self) { console.log("gold", gold); // this comes before let gold; $: gold = val; return []; } ``` Which results in a `Cannot access 'gold' before initialization` error. I would expect it to generate: ```javascript let val = "onion"; function instance($$self) { let gold; $: gold = val;…

### CASE-2875 · Compound operators don't work in reactive statements
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, react
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** Compound operators don't work in reactive statements, I suspect this has to do with the fact that there are no variables the assignment depends on. So it is not run when the value of the left hand side of the operator changes. **To Reproduce** [REPL]([link]) **Expected behavior** In the REPL example when clicking the button the first time count should be 2 and after pressing the button a second time the count should be 6. **Severity** Slightly annoying but easily worked around by not using compound operators.

### CASE-2881 · Cycle detection is broken
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍2 💬5 · closed · labels: bug
- **Excerpt**: I sometimes get a cycle detection error when there is no cycle. There are diamonds in the graph but no cycles, and statement order in the source code matters, i.e. sometimes re-ordering the reactive statements in the code doesn't give a cycle error. **To Reproduce** [link] **Expected behavior** No cycle detection bug error for any variant of this problem **Severity** I cannot use Svelte when it is giving spurious and incorrect error messages.

### CASE-2884 · Function hoisting is too aggressive
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/temp-stale
- **Excerpt**: Functions that contain instance data are hoisted; see [REPL]([link]). Note that the DOM update code is generated even though the variable never gets invalidated. Tangentially related to [ref].

### CASE-2886 · Cannot type decimal point if value bound to array element
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: For [this snippet of code]([link]): ```html <script> let array = [0], variable = 0; </script> <label> You cannot type a decimal point in this:<br> <input type=number step=0.01 bind:value={array[0]}> </label> <label> ...But you can if you bind it to a variable instead:<br> <input type=number step=0.01 bind:value={variable}> </label> ``` I can only type a decimal point in the second input, not in the first. Somehow binding the value to an array elements breaks things. Being able to bind values to an array is useful for calculating averages, sums, etc. If anyone knows a workaround for now,…

### CASE-2889 · Reactive declarations can not depend on const "variables" (svelte v3)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: This is in svelte version 3. Reactive declarations can not depend on const "variables", even though the variable is declared as `const`, its properties can still change. ```html // This works <script> let obj = { prop: 10 } $: reactiveDecl = obj.prop; </script> <h1>{reactiveDecl}</h1> ``` vs ```html // Error "Invalid reactive declaration — must depend on local state ..." <script> const obj = { prop: 10 } $: reactiveDecl = obj.prop; </script> <h1>{reactiveDecl}</h1> ```

### CASE-2891 · Hydrating element removes every other attribute
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: I'm new to Svelte so it's entirely possible i'm missing something basic. I'm seeing some weird behavior around the hydration feature. Attributes on the element being hydrated are removed and I'm not sure why. For example, given this markup: ```html <span id="rehydrateContainer"> <button data-track-id="123" class="button button--small" id="button" role="button" disabled>content</button> </span> ``` and this component: ```html <button on:click="set({ count: count + 1 })"> {text} {count} </button> <script> export default { oncreate() { this.set({ count: 0 }); } }; </script> ``` the hydrated dom…

### CASE-2896 · Using #each blocks with variables defined in runtime
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Case 1 - local variables** Each blocks doesn't work with variables defined in runtime (not defined early in data): **[REPL issue]([link])** This is ok, because when we are working with local variables, we just need to set it in data and voilà: **[REPL solution]([link])** **Case 2 - store variables** But the same situation becomes harder with store ($) variables. To make it work, we need to set the variable in store before the component is rendered: **[REPL working with store]([link])** I think that this is trickier/complicated, because in a multi-component app, a component may not know if…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2803 · input color displays a warning in Chrome console
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox
- **Signals**: 👍7 💬5 · closed
- **Excerpt**: ### Describe the bug When adding an input color such as: ``` <input type="color" value="[ref]" /> ``` there is a warning poping in the Chrome console (doing fine in Firefox): ``` The specified value "" does not conform to the required format. The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers. index.mjs:582 ``` I reported this issue because someone reported it in my library project: [link] ### Reproduction This is **not** hapenning on a REPL and has only been reproduced on a fresh SK project: [link] ### Logs ```shell index.mjs:582 The specified value "" does not…

### CASE-2809 · On:mouseenter and on:mouseleave not working in brave browser.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬5 · open
- **Excerpt**: ### Describe the bug The below code works perfectly in google chrome, but not in the brave browser. The events are only fired once the mouse is clicked. ``` <style> main { width: 100px; height: 100px; background-color: [ref]; } </style> <main on:mouseenter={() => console.log('enter')} on:mouseleave={() => console.log('leave')} > </main> ``` ### Reproduction Clone the following repo, run the server with `npm run dev`, then open the local host instance in both brave and chrome, open the console, and hover over the black box. You should see how chrome prints to console but brave doesn't. [link]…

### CASE-2810 · Error: "You are assigning to a const" when swapping array elements using destructuring assignment
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug As of Svelte `3.52.0` I'm getting this compiler error, `You are assigning to a const`, when swapping array elements using destructuring assignment: ```js const arr = [1, 2]; [arr[0], arr[1]] = [arr[1], arr[0]]; ^ (error here) ``` ### Reproduction [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (8) x64 Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz Memory: 5.20 GB / 15.75 GB Binaries: Node: 16.16.0 - ~\AppData\Local\nvs\default\node.EXE npm: 8.11.0 - ~\AppData\Local\nvs\default\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0),…

### CASE-2815 · Await blocks not behaving as expected
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ubuntu
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter
- **Excerpt**: ### Describe the bug At random times, await blocks bugs and show the double number of columns in a table. This persists after the data is loaded. ![image]([link]) The behaviour seems to reproduce in production only, but not for now in local development servers. Maybe something with cache?? ### Reproduction 1. Build the application 2. Start application 3. Access the application throw a browser (ie: Chrome) 4. Refresh the browser 5. Wait for data updates. ![image]([link]) ### Logs ```shell Both server and browser console logs show no errors. ``` ### System Info User context: ```shell Ubuntu…

### CASE-2817 · infinite loop w/ async statements in afterUpdate
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬5 · closed · labels: conservative reactivity
- **Excerpt**: ### Describe the bug When using promise based functions (in my case, fetching data from Firebase) in the afterUpdate hook, an infinite update loop is triggered. ### Reproduction afterUpdate: Bug: [repl]([link]) ### Logs _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (16) x64 Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz Memory: 23.21 GB / 31.92 GB Binaries: Node: 14.17.3 - C:\Program Files\nodejs\node.EXE npm: 6.14.13 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (103.0.1264.71) Internet Explorer: 11.0.19041.1566 npmPackages:…

### CASE-2825 · kit.svelte.dev raises 500 error instead of 404
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, svelte
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the bug I followed a link from an external site to: [link] and got the ugly: 500: Unexpected token < in JSON at position 0 The correct URL should be [link] , where is where the link in the masthead ultimately takes you, but the URL of the link is '/docs' <a sveltekit:prefetch="" href="/docs" class="svelte-pg3cgb" aria-current="true">Docs</a> ### Reproduction [click this link]([link]) ### Logs _No response_ ### System Info ```shell chrome browser ``` ### Severity annoyance

### CASE-2827 · State is changed from full-width characters to half-width, but not re-render on Chrome
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug ```svelte <script> let emailValue = '' const emailBlurHandler = () => { emailValue = emailValue.replace(/[！-～]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) - 0xfee0) }) } </script> <div> <form> <label for="email">E-Mail</label> <div> <input type="email" bind:value="{emailValue}" on:blur="{emailBlurHandler}" /> </div> </form> </div> ``` With this code, if enter the following content in the E-MAIL field, it will not be re-render."**ｃｏｍ**" is full-width. **email@user.ｃｏｍ** If enter the following content, it will be re-render."**ｅｍａｉｌ**" & "**ｃｏｍ**" is…

### CASE-2829 · Flip animation does not make changes in interactive tutorial.
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox, chromium, ubuntu
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In this example [link] transition animation between lists is the same without "animation:flip" and with it. ### Reproduction Visit [link] page, try to press "Show me/Reset" and move todos between lists, there is no difference in transition animation ### Logs ### System Info ```shell Ubuntu 20.04, Firefox, Chromium ``` ### Severity annoyance

### CASE-2831 · Uncaught TypeError: node.parentNode is null
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug See: [link] ### Reproduction Can't save my REPL right now due to: [link] ### Logs _No response_ ### System Info ```shell System: OS: macOS 12.1 CPU: (8) x64 Intel(R) Core(TM) i7-4980HQ CPU @ 2.80GHz Memory: 1.34 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.1 - /usr/local/Cellar/node@user/16.13.1/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 8.1.2 - /usr/local/Cellar/node@user/16.13.1/bin/npm Browsers: Brave Browser: 95.1.31.91 Chrome: 96.0.4664.110 Firefox: 95.0 Safari: 15.2 npmPackages: @user/kit: ^1.0.0-next.196 => 1.0.0-next.202 svelte: ^3.44.2 =>…

### CASE-2838 · svelte crashes chrome
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, chromium, svelte
- **Signals**: 👍0 💬5 · closed · labels: awaiting submitter/stale-bot
- **Excerpt**: ### Describe the bug I am assigning conditional classes with a button to toggle it, after a few toggles the browser crashes, I was on a chromium browser and switched to chrome (both stable releases and updated) here is my code the conditional styles ``` <a id="continue" href={cont ? '#' : ''} class="rounded-full p-1 transition duration-150 {cont ? "cursor-pointer text-purple-dark hover:bg-purple-lighter active:bg-purple-dark active:text-purple-lighter" : "cursor-not-allowed text-purple-light"}"> <svg xmlns="[link] class="transition-all rounded-full w-12 h-12 fill-current" viewBox="0 0 24 24"…

### CASE-2842 · </textarea> with the closing angle bracket at a new line gives error
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, opera, linux, svelte, webpack
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** `</textarea>` with the closing angle bracket at a new line gives error. **Logs** ``` Unexpected end of input (2:1) ``` **To Reproduce** ``` html <textarea>test</textarea > ``` **Expected behavior** Does not give error. **Stacktraces** (None) **Information about your Svelte project:** - Your browser and the version: Firefox Nightly 2021-05-01 - Your operating system: Arch Linux - Svelte version: 3.38.1 - Whether your project uses Webpack or Rollup: Maybe unrelated, since it reproduces on REPL. **Severity** Not much, but it conflicts with my `prettier` configurations…

### CASE-2850 · Input is marked as invalid for inital null value
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox 83, svelte
- **Signals**: 👍0 💬5 · closed · labels: bug/temp-stale
- **Excerpt**: It seems Svelte 3.23.0 introduced a regression. When binding a variable that is initially null to a text input, the input is now marked as an invalid (I'm on Firefox 83.0). Working example: [link] Not working: [link]

### CASE-2852 · Inconsistent bind:clientHeight value on component instantiation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 87, firefox 84
- **Signals**: 👍0 💬5 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** When a DOM element's parent's height is based on window's innerHeight, the bind:clientHeight of the child element sometimes won't reflect the latest value when instantiated. **To Reproduce** [link] Refreshing the page yields inconsistent results. Sometimes the values match, sometimes it reflects the child height before the parent's was updated. [Example GIF]([link]). Reproduced on Chrome 87, Firefox 84 **Expected behavior** I expect the child's bind:clientHeight to reflect the latest value of the node. **Severity** Annoyance: there are some workarounds like adding some…

### CASE-2853 · Binding DOM nodes when looping over data that depends on a store causes infinite loop.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬5 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** Binding DOM nodes in a loop is causing infinite updates thus hanging the component if the data iterated over depends on a store. **Logs** No logs as the bug hangs the browser instance. **To Reproduce** Uncomment line 20. [link] **Expected behavior** A reference to a DOM node from each item.node. **Stacktraces** NA **Information about your Svelte project:** - Microsoft Edge Version 85.0.564.63 - Win10 Pro - Svelte 3.29.0 - Rollup **Severity** I'm using stores (via context) to share component states to child components to keep inter-component dependencies as loose as…

### CASE-2861 · Reassigning $$props to another variable and using the spread operator casues issues with input's
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, firefox 79, linux, svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** If you reassign $$props to another variable and use it with the spread operator on two or more inputs, typing into one clears the value from the other. Only the displayed value is cleared, any bound variables retain the correct value. **To Reproduce** [link] Type something in each input box and observe the behaviour for the top two. Typing in one clears the other. **Expected behavior** Previously to v3.24.0, it was possible to use $$props this way without any issue. **Information about your Svelte project:** Firefox 79b, Arch Linux, Svelte 3.24.0, rollup **Severity** This…

### CASE-2864 · Checkbox UI can get out of sync with svelte state (minor and workaroundable)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 81, opera, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** I kept the REPL as simple as possible, but fwiw, the issue came up for me when I had a parent checkbox whose state is determined by children checkboxes' states. i.e., parent is checked if all children checked, indeterminate if some checked, un-checked if none checked. **To Reproduce** [link] **Expected behavior** Svelte output keeps checkbox's `checked` and `indeterminate` state to what state value says it should be. **Information about your Svelte project:** - browser and the version: Chrome 81 - operating system: win10 - Svelte version 3.22.2 **Severity** minor--can…

### CASE-2870 · svelte.dev can't be reached
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, chromium, opera, ios, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** The [Svelte.dev]([link]) website can ***not*** be reached on: - **Chrome** _(Version 79.0.3945.88)_ - **Safari** _(Version 13.0.1)_ - **Firefox Quantum** _(Version 69.0.3)_ - **Brave** _(Version 1.1.23 Chromium: 79.0.3945.88)_ It ***was*** successful on: - **Safari** _(iOS)_ - **Chrome** _(iOS)_ - **DuckDuckGo** _(iOS)_ - **Opera** _(Version: 63.0.3368.94)_ **To Reproduce** Navigate to the site from one of the listed browsers. **Expected behavior** The site loads.

### CASE-2873 · Double bind and reactivity
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox 69, react, svelte
- **Signals**: 👍0 💬5 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** I cannot bind to a variable twice, i.e. with more than one component. **Logs** No relevant logs. See REPL. **To Reproduce** See the REPL [link] There is a value, `obj`. It is bound to two components, `Proc1` and `Proc2`. `Proc1` checks if `obj` is defined. If not, set it to a value (20). `Proc2` checks if `obj` is defined. If it is, add to it's value (+30). **Expected behavior** I should get 50, but I get 20. i.e. the second component's reactive statement is not being called. **Stacktraces** N/A **Information about your Svelte project:** Firefox 69.0.3 Window 10 Svelte…

### CASE-2878 · Transitioning when slot element changes does not update slot element
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, windows, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** If a transition happens on an element that contains a slot, the slot does not properly update if it is rendered again immediately after the transition ends. **To Reproduce** [link] In the repl, 1. is an example of this bug, 2. is an example showing how if the component is transitioned out completely then the slot is updated properly. **Expected behavior** In the repl, 1. should fade out "Foo" and fade in "Bar" rather than fade out "Foo" and fade in "Foo". **Information about your Svelte project:** Chrome v76 Windows 10 Svelte v3.12.0 See REPL **Severity** Not too…

### CASE-2879 · Can't open the nav menu on an iPhone
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, ios, iphone
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** On [link] if the device is small enough the nav bar turns into a dropdown menu. On Android devices, tapping the menu opens it. On iOS, tapping it immediately clicks the currently visible link, which means you don't go anywhere. **Severity** Kinda bad honestly

### CASE-2880 · slot let:name value changes not propagating through inner slots
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 76, react, svelte
- **Signals**: 👍7 💬5 · closed · labels: bug
- **Excerpt**: When using the slot:let directive to receive a value, changes to that value are not reactive inside nested slots. e.g. `<Outer let:count={count}> <Inner> Inner Count = {count} </Inner> Outer Count = {count} </Outer>` When `count` changes, only the "Outer Count" text is updated. [link] I would expect that both "Outer Count" and "Inner Count" text would be updated. _May_ be related to [link]][ref] I don't know the inner workings well enough yet to be sure. Tested in * Chrome 76.0.3809.100 * Svelte 3.9.1 (repl) Severity would seem relatively high as I'm not sure how you would easily correct the…

### CASE-2882 · Svelte click or loading not working MS Edge.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I'm enjoying rewriteing me site in Svelte but I have a big issue that might be a show stopper :-/ Demo example: [link] Clicking or page loading is not working in Edge at all. Also, locally when clicking anything without <a> element on:click or standard onclick isn't doing anything with MS Edge. (Running in VM) Any ideas?

### CASE-2883 · bind:files doesn't work on safari. But works in chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, svelte
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

### CASE-2888 · Cannot set initial data to the scrollY property of <svelte:window> element
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome 74, safari 12, firefox 66, svelte
- **Signals**: 👍2 💬5 · closed · labels: stale-bot/temp-stale/documentation
- **Excerpt**: Trying to set some initial data to the `scrollY` property of `<svelte:window>` element doesn't seem to be working. If I bind the `scrollY` property to a variable and log that variable, it starts with the correct value, then immediately updates to zero. Is this a bug or am I missing something? [link] Tested with Chrome 74, Safari 12.1 and Firefox 66.

### CASE-2892 · A weird input selection bug in Safari
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: safari, chrome, firefox
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: [REPL reproduction]([link]) In Safari (not Chrome or Firefox), whenever `set` is called, the selection in the focused input is reset, even if the value you're `set`ting is unrelated to the input.

### CASE-2897 · Two-way binding select does not allow for dynamic multiple attribute
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox 60, chromium 59, electron
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: The two-way binding on multiple select elements don't take a dynamically set `multiple`-attribute into consideration. Maybe this is as intended, in which case it appears to be missing from the documentation (or I simply overlooked it). A [simple REPL]([link]) to demonstrate the behavior. Short examples: - Works: `<select bind:value multiple>` - Doesn't: `<select bind:value :multiple>` - Doesn't:`<select bind:value multiple="{{ multiple }}">` As for browsers, the behavior is consistent across browsers, tested in Firefox 60, Brave 0.21, Electron 1.8.3 (Chromium 59)

### CASE-2898 · Initial Data for Bound Required Input Fields is 'undefined'
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: I believe this is a bug, but it may be a request for more documentation. Apologies if I'm posting this in the wrong spot. Two-way binding an input field causes browsers to display the text `'undefined'`. In the [Two-Way Binding]([link]) section of the documentation, readers are provided [an example of form handling in Svelte in the REPL]([link]). In the example, the input field's initial value is `'undefined'`. I sought to work around the problem by providing default data (in this case, an empty string). Unfortunately, this causes a different problem: Firefox sets input fields to the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2808 · Transitions causing error thrown: Cannot read properties of null (reading 'p')
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: transition/animation
- **Excerpt**: ### Describe the bug I'm aware a REPL would be helpful, but I couldn't reproduce the issue in the REPL, even though trying for several hours. So, posting this here with the best details I can give: A fade-transition in a deeply nested component caused `Uncaught (in promise) TypeError: Cannot read properties of null (reading 'p')` when attempting to navigate to another page on our app. The error-causing-transition is inside a `Card`-component, repeated within a `{#each}` block inside a larger `Page`-component. _Relevant part of the `Card` -component:_ ```svelte <div class="carousel"> <div…

### CASE-2811 · animate directive with duration:0 should be completely disabled / Programmatically disable animate directive
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: transition/animation
- **Excerpt**: ### Describe the problem When using animate directive I want to be able to programmatically disable it. Using duration:0 or even swapping the animate function with an empty one does not completely disable it: ``` import { flip } from 'svelte/animate'; $: Flip = animate? flip : () => { return {}}; // tried with null / undefined with no luck ``` You can see in the video that, when using these strategies, there is still something going on that produces a jump when scrolling. [link] ### Describe the proposed solution Completely disable animate directive when there is no animation to play. ###…

### CASE-2828 · @user clashes with animate
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug [Very cool that `{@user}` is out now]([link]]/blob/4ae20d7fdfa66cefafbf205b41b5bc41bf05c427/CHANGELOG.md[ref])! Thanks again to @user in [ref]! 👍 There's a problem using it together with `animate`. The following snippet raises ```txt An element that uses the animate directive must be the sole child of a keyed each block ``` ```svelte <script> import { flip } from 'svelte/animate' const indices = [...Array(10).keys()] </script> {#each indices as idx (idx)} {@user idxp1 = idx + 1} <li animate:flip> {idxp1} </li> {/each} ``` ### Reproduction [REPL]([link]) ### Logs _No…

### CASE-2830 · Support multiple independent compiled apps on same browser page: a platform use case w/ PR
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug/runtime
- **Excerpt**: ### Describe the problem I am releasing a significant Svelte component library for [Foundry VTT]([link]). Foundry VTT is a virtual tabletop for role playing games with an open 3rd party developer API. A couple thousand developers are producing module / game system additions to Foundry and Svelte definitely has a place to bring a considerably better UI development experience. For Svelte to work well on this platform multiple independent compiled Svelte apps need to run on the same browser page. The general problem is that presently there is a small conflict regarding styles / transitions in…

### CASE-2847 · Transition delay is cached and does not apply until after the next run
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** After a transition has already been triggered, changing the delay of a transition does not take effect until after the transition has been triggered at least once. **To Reproduce** REPL: [link] 1. Click `Menu` several times to toggle the default transition. **IMPORTANT:** The bug requires triggering the transition at least once before the delay is cached. 2. Click `Set Delay to 1s`, the `delay` variable is now set to `1000`. 3. Click `Menu` to toggle the transition, delay has not taken effect. 4. Click `Menu` to toggle the transition, delay now takes effect. 5. Click `Set…

### CASE-2848 · Example "Svg/Bar chart" broken when padding.top/bottom changed
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬5 · closed · labels: temp-stale/documentation
- **Excerpt**: Low priority, no impact on production. In this example: [link] If you change `padding.top` or `padding.bottom` (particularly when they are not equal), the chart will be drawn incorrectly. To reproduce, set `padding.top = 60`, and see the following results: ![image]([link]) My fixes are to remove all references to padding.top / padding.bottom in the SVG rendering code, since these have already been taken into account in the yScale function. So replace: ``` <!-- y axis --> <g class="axis y-axis" transform="translate(0,{padding.top})"> {#each yTicks as tick} <g class="tick tick-{tick}"…

### CASE-2851 · DOM replacement breaks when a component child is in the middle of an out animation
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: **Describe the bug** There's a race condition when you replace a component that has a child with an out transition that is currently running, svelte dies. In production, we see the old component stay on the page _in addition to_ the component replacing it, and we don't see any console errors on this (with svelte 3.29.4). In REPL there's an exception and JS dies. **Logs** `Uncaught (in promise): if_block.p is not a function` (only in REPL, version 3.31.0) **To Reproduce** [link] **Expected behavior** Out transition of the child would be killed, the whole component would be replaced.…

### CASE-2857 · Transitions do not update when they are parameterized by store value
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: **Describe the bug** Based on the Svelte tutorial, I expected that if I specify a transition like `out:fly="{{ x: $shift_right*800 }}` (where `$shift_right` is either +1 or -1), and I call `shift_right.set(-1)` before the out transition is triggered, I should be able to change the direction that the element flies out. **To Reproduce** Take a look at this REPL: [link] Use the arrows to shift left and right. If you press a particular direction repeatedly (e.g., right/right/right) it works as expected. But when you alternate between right and left (e.g., right/left/right/left), the direction of…

### CASE-2868 · Event bindings on animate directive
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍27 💬5 · open · labels: feature request/temp-stale
- **Excerpt**: It would be nice to be able to bind events on the `animate:*` directive, much like the one that are available with the [transition directive]([link]) (`introstart`, `introend,` `outrostart`, `outroend`). This feature would be useful in order to prevent other changes to the current component state while an animation is occuring, as a component update during an animation can make it glitch. I think two events named `animstart` and `animend` would be appropriate. In the meantime, is there a way to emulate this feature with what svelte already offers ?

### CASE-2871 · Transition + slots + #if
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug/temp-stale
- **Excerpt**: **Describe the bug** If we update state while transition, #if statement inside transition element doesn't work with slots properly **To Reproduce** 1. open [REPL example]([link]) 2. Click once on TOGGLE button 3. Slot elements inside element without transition works good. With transition - not 4. `setTimeout` just emulates state change close to transition end. **Expected behavior** With and without transition slots should work good

### CASE-2872 · Possible 3.13.0 issue around fragments
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** Upon updating to 3.13.0 I'm now seeing the following error, which seems to be related to transitions and slots (possibly) **Logs** `Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'intro.$$.fragment')` **To Reproduce** [link] **Stacktraces** If you have a stack trace to include, we recommend putting inside a `<details>` block for the sake of the thread's readability: <details> <summary>Stack trace</summary> [Error] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'intro.$$.fragment') intro (Anonymous Script 3…

### CASE-2894 · Using promises causes error with transpiled code in IE11
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: IE is throwing an error on transpiled code. I'm using the svelte loader with webpack. Package versions: ``` "svelte": "^2.9.3", "svelte-transitions": "^1.2.0", "webpack": "^4.8.3", "svelte-loader": "^2.9.1", ``` One of my components looks like this: ```html {#if splicePromise} {#await splicePromise} <div class="loading loading-lg">Loading...</div> {:catch error} <p>Something went wrong...</p> {/await} {/if} ``` I'm loading it like this: `import Graphfrom 'svelte-loader!./Graph/Graph.html';` Hereis what the output from the compiled component looks like: <details> <summary>Transpiled code…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2812 · <link> and <meta> inside <svelte:head> are duplicated in SSR generated HTML when bind:value is present
- **Principles**: P-F4 · **Env**: svelte, vite
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug See title and reproduction. ### Reproduction #### Steps Create app: _src/routes/+page.svelte_ ``` <svelte:head> <link rel="canonical" href="/test"> <meta name="description" content="test"> </svelte:head> <script> import Foo from '$lib/Foo.svelte' let bar </script> <Foo bind:bar/> ``` _src/lib/Foo.svelte_ ``` <script> export let bar = null </script> ``` _svelte.config.js_ ``` import adapter from '@user/adapter-node' /** @user {import('@user/kit').Config} */ const config = { kit: { adapter: adapter(), } } export default config ``` _vite.config.js_ ``` import { sveltekit }…

### CASE-2820 · getContext is undefined when called inside an element attribute.
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I have some text put into the context of a page. When reading it with `getContext` in a child component into the href of a link, the value is `undefined`. The SSR handles it as expected but in the client it becomes `undefined` (only during hydration I think, not sure). Note that it is only undefined when called inside an href or other html attribute. When called as part of some text it is the expected value. ### Reproduction [link] ### Logs ```shell Server logs example example Browser logs Test.svelte? [sm]:5 example Test.svelte? [sm]:5 undefined ``` ### System Info…

### CASE-2841 · Nodes appear out of order on hydration with 3.38.1
- **Principles**: P-F4 · **Env**: macos, svelte
- **Signals**: 👍7 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** On hydration, nodes containing {braced expressions} have their children rendered out of order. Note that it’s reproducible with 3.38.1. **To Reproduce** The quickest way, probably: [link] Otherwise, putting an expression and a `span` under a common parent seems to reliably trigger this behaviour. Something like `<p>{1} 2 <span>3</span></p>` will hydrate into ‘13 2 ’. **Expected behavior** The order of nodes should be preserved in hydration. **Information about your Svelte project:** <details> <summary>envinfo</summary> System: OS: macOS 11.2.3 CPU: (4) x64 Intel(R)…

### CASE-2862 · Nested component reactive updates causes UI blocking
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬5 · closed · labels: stale-bot
- **Excerpt**: Not really sure if this is a question or a bug. Here's the repro: [link] The `flush()` call is blocking the UI when then "Click Me" button is pressed (not the profile from the repro above but profiling it should yield similar results): ![]([link]) For my use case the initial load did not cause a UI block, but it seems like in the REPL it also blocks during initial load. Is there a good way to manage these UI-blocking calls so they're less... blocking? Maybe virtual lists is the answer but I don't know how that works with SEO since I'm not currently using an SSR solution.

### CASE-2863 · SSR components not correctly updating bindings
- **Principles**: P-F4 · **Env**: react, svelte
- **Signals**: 👍1 💬5 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** 1) When using bind:property within an SSR component, the parent component is not notified of reactive assignments. 2) The change notification also seems to be incorrect for simple property assignments. Notably, bindings are only updated where no initial value was supplied, even if the child component overrides it with a simple assignment. **Logs** N/A **To Reproduce** See the following repl for a contrived reproduction. (Note that since the REPL isn't running SSR, reading the code will have to suffice). [link] 1) See the below snippet from the Outer.svelte SSR code:…

### CASE-2876 · Using the context API in standalone components loaded at runtime returns undefined
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍0 💬5 · closed · labels: stale-bot/documentation
- **Excerpt**: Edit: I've found this issue too, which I think looks like the same problem I'm describing here: [link]][ref] **Describe the bug** I'm trying to build a system that loads external standalone components at runtime, and I want to use the `getContext` and `setContext` functions to share a store between all of the components. I'm using webpack to build the main application which contains an `App` component that serves as the root of the application, and then I'm using a completely separate project to build another external standalone component (both an SSR version and a DOM versions), which I then…

### CASE-2900 · Issues with new entity escaping behavior
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: The new entity escaping in 1.51 introduced a couple of issues: - Compiling `<div>'foo'<bar/></div>` results in code that renders `&#[ref];foo&#[ref];`. There's obviously something going on with the sigil escaping here. Either it never gets unescaped, or it's getting escaped an additional time before getting unescaped. - Non-top-level `<style>` and `<script>` elements (which are useful when using SSR to render an entire document) are rendered back into the document with entities escaped, which breaks a bunch of stuff. Also an existing problem from before 1.51: Non-top-level `<style>` and…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2814 · Clearing bind:this array race condition?
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the bug Clearing a bind:this array results in the array being leftover with nulls for each item it used to have. This may be some sort of race condition. I observed adding a timeout to the Clear which reversed the log order. ``` <button on:click="{()=> { items = []; setTimeout(() => { elements = []; }, 0); }}"> Clear </button> ``` ``` (3) [ null ,null ,null ] (0) [ ] ``` ### Reproduction [link] ### Logs ```shell Logging the array will show 2 entries. The first item is what I would have expected the result to be, but it was left with 3 null items from what it used to have instead.…

### CASE-2836 · Subscription prop not waiting to subscribe till mounted
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/compiler
- **Excerpt**: ### Describe the bug If a component receives a store as a prop, it is immediately trying to subscribe to the store and access it's value even if the component is rendered conditionally (see first REPL below) Related, if a component is rendered within a slot of another component conditionally (ex. a View within a Drawer), this appears to be handled correctly on initial mount, but the View is unexpectedly receiving the updated state before it has been unmounted (see second REPL below). I believe these are related, but if not, I can open the second as a separate issue. It was my original issue…

### CASE-2877 · Store's user-supplied unsubscribe function not called on unsubscribe
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** If a store is created with a function as a second argument, that function is called when the subscriber count goes from zero to one. In theory, the function returned from *that* function is called when the subscriber count goes from one to zero. It doesn't. **To Reproduce** [link] **Expected behavior** When `visible` becomes false, an alert should appear. **Severity** It's not great, though in practice it probably only means the occasional memory leak.

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2816 · Passed down class contains no css-rules and is recognized by compiler as unused, "Unused CSS selector" warning in console
- **Principles**: P-A3, P-H1 · **Env**: chromium, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When composing svelte components, a class passed from parent-component to child-component as a prop is - successfully passed as a prop - contains no css-rules - recognized as unused by compiler <img width="1512" alt="image" src="[link]> ### Reproduction ### basic, no-code reproduction - open [link] in Chromium based browser ### manual reproduction 1. follow the "getting started" guide at [link] 2. write 2 svelte-components ``` /** child-component, child.svelte */ <script> let className; export { className as class }; </script> <div class={ className }>some content</div>…

### CASE-2823 · In the video tag, the muted binding does not work 100%
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬5 · closed · labels: media elements
- **Excerpt**: ### Describe the bug I have an accordeon which I can open and close. When it is open, a slider with a video is visible. The video is set to autoplay and should be muted. When I open the accordeon the first time, the video is playing and muted. When I close it and reopen it, the sound is playing. Here is a link: [[link]]([link]) –––––––– I know that this has been mentioned here before and I went through all the reports here. In one report it says that I should use the TICK event. But I do not really understand of how this should work. –––––––– Thank you! I love Svelte! ### Reproduction Here is…

### CASE-2826 · whitespace and !important token valid in css custom properties but not in svelte
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug ``` h1 { --foo: ; color: var(--foo) blue; } h2 { --foo: !important; color: green var(--foo); } ``` When I read this article [The CSS Custom Property Toggle Trick]([link]), I am trying to use whitespace in css custom properties with svetle, it say "invalid value", but it should be valid according to W3C custom properties specification. **Ref:** [[link]]([link]) <img width="822" alt="Screenshot 2565-01-16 at 18 01 19" src="[link]> <img width="785" alt="Screenshot 2565-01-16 at 18 06 53" src="[link]> ### Reproduction [svelte REPL: [link]]([link]) [codepen: [link]]([link])…

### CASE-2893 · Style property used together with a spread property assigns to a read-only property
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: [REPL]([link]) ```html <div {style} {...attrs}></div> ``` Generates a update function as: ```js p: function update(changed, ctx) { setAttributes(div, getSpreadUpdate(div_levels, [ (changed.style) && { style: ctx.style }, (changed.attrs) && ctx.attrs, { class: "svelte-ajb4ym" } ])); }, ``` The `setAttribute` finds the `style` property in the `node` and tries to overwrite it: ![image]([link]) If you remove the `{...attrs}`, it generates as: ```js p: function update(changed, ctx) { if (changed.style) { div.style.cssText = ctx.style; } }, ```

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-2837 · Incorrect Scroll Behavior of Dynamically Rendered Component in Chrome
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3, P-G2 · **Env**: chrome, firefox, windows
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When scrolling down with the scrollbar handle of a component who's content is dynamically rendered based on scroll position, the scroll handle moves faster than the user's mouse. ### Reproduction [link] [link] Ensure viewport height is greater than 550px, as the effect is minimized with smaller viewport heights. Click the scrollbar handle and drag down. Observe position of scrollbar compared to mouse pointer. Does not happen in Firefox: 89.0.2(64-bit) Does not happen in Vanilla JS ([link]). [link] ### Logs _No response_ ### System Info ```shell System: OS: Windows 10…

### CASE-2843 · Transition `out` leaves invisible elements in the DOM after reassignment
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍1 💬5 · closed · labels: stale-bot
- **Excerpt**: **Describe the bug** The bug comes out then I use the `out:<any_svelte_transition>` in a list of items (`{#each}...{/each}`). When I reassign the array that I loop through with `each` and the data comes from a `Promise` and the data 'arrives' earlier then the `out` animation finishes, the previous data won't get removed from the DOM, it's going to be hidden, but it takes up the space unnecessarily. ![image]([link]) **To Reproduce** To reproduce try the example in this repl: [link] - Click on filter and you can see the overflow is still there and if you ispect the list container, you can see…

### CASE-2874 · Reactivity of dynamic <svelte:component> props
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **Describe the bug** Spread props seem to loose reactivity when used in conjunction with dynamic component. First reported on stack overflow: [link] **To Reproduce** [link] **Expected behavior** I was expecting the `Main` component to start with rendring the `Banner` component, and then the `Header` component. when the timeout expires. - Svelte version (Please check you can reproduce the issue with the latest release!) Cf. REPL. **Severity** Not a big issue, the switching I want can be done with if/then/else. That is actually what I do right now. But it would be pretty cool if you could…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2846 · Changing list with flip and scale animations causes overlap
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox 85, chrome 88, opera, linux, svelte, webkit
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ## Describe the bug When changing a list in a particular way, items with both `flip` animations and `scale` transitions position on top of each other: ![Screenshot_2021-02-16 Svelte REPL]([link]) ## To Reproduce [link] ## Expected behavior The elements are positioned next to each other, like what happens when the delay on line 7 is increased to 300ms: ![Screenshot_2021-02-16 Svelte REPL(1)]([link]) ## Information about your Svelte project - Firefox 85.0.2, Chrome 88.0.4324.150, WebKitGTK 2.30.5 - Your operating system: Arch Linux - Svelte version: 3.32.1, 3.32.3 - Whether your project uses…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-2865 · `<meta>` tag get svelte- classname when `:root` selector is defined
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** When I used `:root` selector in a svelte component using `<style>`, `<meta>` in `<svelte:head />` tag will get a svelte generated classname. While I can just move `:root` selector to other place, I'm not sure if it's expected behavior. ```svelte <style> :root { font-size: 14px; --color: #aaa; } </style> <svelte:head> <meta property="description" content="hello world" /> </svelte:head> <p> hello world </p> ``` **To Reproduce** [repl]([link]) 1. open inspector 2. check head, you'll find something like `<meta property="description" content="hello world"…

