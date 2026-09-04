# Case Chunk 031 — Round 31

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4001 · iframe reflective XSS attack
- **Principles**: P-A3, P-H1 · **Env**: macos, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ``` function Test () { let i = 'javascript:alert(1);' return ( <iframe src={i} /> ) } ``` When setting javascript:alert(1) on the iframe's src, an XSS attack will be triggered. This always happens on both the server and client sides. React's setProp handles src and href separately, filtering out this potential risk. I think this risk should be addressed at the framework level. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue View case ### Expected behavior no alert ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS,…

### CASE-4005 · HyperScript engine does not work properly with For
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬4 · closed · labels: bug/alternative templating
- **Excerpt**: ### Describe the bug Function "For" in HyperScript mode loses connection with signals when list changes. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click "add" 2. Click "demo" ![Image]([link]) ### Expected behavior Here is correct behavior using TSX: [link] ![Image]([link]) ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Vivaldi - Version: 7.0.3495.29 ### Additional context I have also checked html`` function, it works as expected ([link]). The closest solution is to wrap children in function ([link]), but in this case Solid…

### CASE-4007 · Objects created in a different window are not reactively wrapped by store
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug If you share a store setter from an iframe to its parent and call it via the parent, objects assigned to the store via this method, will not be reactive. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Share a store setter from an iframe with its parent window 2. Listen to all values inside of the store, e.g. with `createEffect(() => console.log(JSON.stringify(state))` 3. Via the parent window, assign a new object to the store 4. Via the parent window, update a value inside of this new object 5. Notice how this change will not trigger a…

### CASE-4010 · Export types mismatch
- **Principles**: P-A3, P-H1, P-F4 · **Env**: typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I'm using typescript and able to import "effect" from "solid-js/web" ``` import { effect } from "solid-js/web"; effect; ``` If I use it in any way I get "The requested module 'solid-js/web' does not provide an export named 'effect'" error. Seems like types specify this export, but it doesn't actually exist Types: <img width="553" alt="image" src="[link]> ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ``` import { effect } from "solid-js/web"; effect; ``` ### Expected behavior No error or no available export ### Screenshots or Videos <img…

### CASE-4012 · Updating parent component state causes child to lose state
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug The parent component renders a list of buttons (Child) which if clicked displays a dialog. If the child then updates state in the parent, the dialog is closed. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Create a thread 2. Click 'View whole thread' 3. Share a thought 4. Reply to the thought 5. Result: Dialog closes but reopening the dialog, the reply is there 6. Expected result: Dialog does not close ### Expected behavior The dialog should not close when the parent state is updated ### Screenshots or Videos…

### CASE-4016 · Unable to find DOM nodes for hydration key
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When passing SVG component as prop to another component I'm getting `Unable to find DOM nodes for hydration key` issue, ive seen post here some solved `const c = children(() => <span>{props.children}</span>);` but I'm really confused is this the best approach. <img width="1146" alt="image" src="[link]]/assets/36937039/6c346740-4917-4c48-a2e1-50f57fec8e63"> ```tsx import { type JSXElement } from 'solid-js'; export default function Test() { return ( <main> <TextInput iconLeft={<Profile />} /> </main> ); } export const TextInput = (p: { iconLeft?: JSXElement }) => { return…

### CASE-4020 · createRessource and astro: Cannot read properties of undefined (reading 'id')
- **Principles**: P-A3, P-H1, P-F4 · **Env**: linux
- **Signals**: 👍1 💬4 · closed · labels: unverified bug/downstream
- **Excerpt**: ### Describe the bug Not sure if the problem is in astro or solidjs but I can't use createRessource() and astro ssr. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue `pnpm build` breaks after > prerendering static routes ### Expected behavior No error is expected, build should finish. ### Screenshots or Videos _No response_ ### Platform - OS: Linux - Browser: irrelevant - solidjs Version: 1.7.1 ann 1.6.15 - astro: 2.1.9 ### Additional context _No response_

### CASE-4021 · Branching on Effect value and a Selector can break reactivity when Effect value is checked first
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug It seems like the selector is completely ignored by an effect function if it's not evaluated on the first run. In my real use case, I needed an effect that scrolls an item into view when it is selected. This does not make sense to do on the first render, only when menu items are clicked by the user. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Click the buttons [A, B, C, D] ### Expected behavior Additional log entries appear as the createEffect function runs again and again. ### Screenshots or Videos _No response_ ### Platform - OS:…

### CASE-4022 · Web component click events not triggered in Chakra UI's `Modal`
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug My web components work perfectly in my React app. But when I embed it in a Chakra UI `Modal`, all the click events of the web component don't trigger. It's not an issue with Chakra UI because I couldn't reproduce with a "native" web component ([link]) It happens with all the web components created with `customElement` from solid-element ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. The counter outside the modal works well 2. Open the modal 3. Clicks don't work. ### Expected behavior Click events should work. ### Screenshots or Videos…

### CASE-4024 · ssr - inline arrow function in JSX expression errors
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug using an arrow function in a JSX expression errors for "Server side rendering" but not for "Client side rendering" ``` <div> {() => { return "hello"; }} </div> ``` ``` /main.tsx: Property arguments[0] of CallExpression expected node to be of a type ["Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder"] but instead got "BlockStatement" ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ![image]([link]) ### Expected behavior should work like client rendering mode ### Screenshots or Videos _No response_ ### Platform…

### CASE-4025 · store's behave unexpectedly when set to an empty object
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: question
- **Excerpt**: ### Describe the bug Setting a store to an empty object results in no reactive change. [link] I am aware that stores should be used for "fine-grained reactivity" but the click on `set store to {}` and `set store to user: undefined` yielded completely unexpected behavior and thus a bug. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click on `set store user: samuel` 2. click on `set store to {}` ### Expected behavior 1. works as expected 2. expected "store is {}" to be displayed ### Screenshots or Videos _No response_ ### Platform Solid Playground ###…

### CASE-4027 · Leading space is incorrectly replaced in dom elements
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug When a dom element's children consists of a leading space then some dynamic content, the space is removed. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open the playground link ### Expected behavior The space should stay. ### Screenshots or Videos ```css button { white-space: pre; } ``` ```jsx <div><button> {(() => 1)()}</button> - Problem</div> <div><button> {1}</button> - Expected</div> ``` ![image]([link]) ### Platform I've only tested it in the playground. Sorry if this was already fixed. ### Additional context This seems to be a…

### CASE-4029 · splitProps causing hydration error (input placeholder)
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: For this component ```tsx const MyInput = (props) => { const [local, native] = splitProps(props, ["label"]) return <label> <span>{local.label}</span> <input {...native} /> </label>; } ``` If I render it with a placeholder ```tsx <MyInput placeholder="Hello" /> ``` I get this on the ErrorBoundary (yes this is all there is to see) ![image]([link]) ![image]([link]) The server render looks like it works fine and there's no errors in my dev console. Also it looks like this works fine in another SolidJS project I have so it's definitely a solid-start problem.

### CASE-4031 · Html entities not converting
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I create a componant that passes some text with some html entity like `&amp;`. The `&amp;` does not converted into & - it remains as is. ### Your Example Website or App n/a ### Steps to Reproduce the Bug or Issue ``` // file_a.ts =========================== <Button text='&amp; text' /> // button.ts =========================== interface Props { text: string; } export default (props: Props) => ( <div> <a href="#">{props.text}</a> </div> ); ``` ### Expected behavior n/a ### Screenshots or Videos _No response_ ### Platform solidjs 1.4.4 ### Additional context _No response_

### CASE-4032 · Non-delegated event listeners are not removed when spreading reactive props
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug When spreading reactive props, non-delegatable event listeners are attached via `element.addEventListener`, but are not removed when the props change. ### Your Example Website or App [link] Better example: [link] ### Steps to Reproduce the Bug or Issue 1. Hover on the button, `Hovered` is logged one time. 2. Click on the button to change the count. 3. Hover on the button again, `Hovered` is logged two times. ### Expected behavior The old event listener should be removed when it is no longer present in props. ### Screenshots or Videos _No response_ ### Platform - OS:…

### CASE-4038 · Infinite loop
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: The following example leads to an infinite loop between `liftComputation` and `applyUpstreamUpdates`: ```javascript import { createState, onCleanup } from 'solid-js'; import { render } from 'solid-js/dom'; const App = () => { const [state, setState] = createState({a: false, b: false, c: false}); return <div> <button onClick={() => setState({b: true})}>Click me</button> <span>{state.a ? 'a' : state.b ? 'b' : state.c ? 'c' : 'fallback'}</span> </div>; } render(App, document.body); ``` <img width="1392" alt="Screenshot 2020-03-01 at 16 53 33" src="[link]>

### CASE-4046 · no exported member named 'generateHydrationScript'
- **Principles**: P-A3, P-H1, P-F4 · **Env**: macos
- **Signals**: 👍0 💬3 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug TS2724: 'solid-js/web/types' has no exported member named 'generateHydrationScript'. Did you mean 'getHydrationScript'? Also i found it in `solid-js/web/types/server.d.ts` but it has no exported in `solid-js/web/types/index.d.ts` And `package.json` is: ```json { "types": "types/index.d.ts", } ``` ### Your Example Website or App none ### Steps to Reproduce the Bug or Issue none ### Expected behavior I can found `generateHydrationScript` in default types. ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Node ### Additional context _No response_

### CASE-4050 · createEffect doesn't fire again on changes (but createMemo works as expected with same callback)
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬3 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug I was trying to use this hook, but it only fired once. I was using signal inside, which changes for sure (because I tested it with createMemo). ### Your Example Website or App - ### Steps to Reproduce the Bug or Issue 1. Create some signal 2. Use it in createEffect using console.log to print signal value 3. You will see printed msg in console only once, no matter how many times signal changes ### Expected behavior As in docs :) ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Browser: Brave - Version: 1.39.22 ### Additional context _No response_

### CASE-4051 · createResource onHydrated option not called during hydration
- **Principles**: P-A3, P-H1, P-F4 · **Env**: linux
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug The onHydrated option in createResource is not called during hydration. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Setup solid with ssr (e.g. using solid-start) 2. Change a route and add a createResource using the `onHydrated` option 3. Open up the route in the browser 4. onHydrated will not be called during client hydration ### Expected behavior The onHydrated option in createResource should be called during hydration (if I understand the usecase for this option properly) ### Screenshots or Videos [link] ### Platform - OS: [Linux] -…

### CASE-4054 · Accessing e.target.value on input onChange event causes Typescript Error
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍2 💬3 · closed · labels: typescript
- **Excerpt**: **Describe the bug** Typescript errors when using `event.target.value` value on input/textarea/select/etc. html elements. **To Reproduce** Just open a Typescirpt solidjs project and write a input handler; ``` <input onChange={e => setInputName(e.target.value)} /> ``` **Expected behavior** No type erros expected. **Reproduction** [link] ![image]([link])

### CASE-4068 · Stores on the server aren't proxies
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Both `createMutable` and `createStore` pass through the `state` object input as the returned value on the server. ![image]([link]]/assets/24491503/8a045986-3865-4c17-9395-951c679431e7) This leads to referential and proxy checks to behave differently on client and server. ```ts const [state, setState] = createStore({}) // CLIENT | SERVER state === unwrap(state) // false | true $TRACK in state // true | false $RAW in state // true | false $PROXY in state // true | false state[$PROXY] // (proxy) | undefined state[$RAW] // (object) | undefined ``` This is probably intentional…

### CASE-4073 · Effects that dispose their owner can continue to fire
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: linux, react
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug An effect which calls dispose of its owning root will continue to fire if `onCleanup` in the same root accesses something reactive. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click the button once. 2. Click the button again and look at the console, previous effects which should be dispose will still fire. 3. Continue clicking and the effects will keep stacking up. ### Expected behavior I would expect what I do in the `onCleanup` function not to affect disposal. ### Screenshots or Videos _No response_ ### Platform - OS: Linux -…

### CASE-4078 · `each` nextSibling error
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Not sure if it's a biggie but a node seems to be undefined sometimes when randomly shuffling the list in each. Creates this error. <img width="553" alt="Screen Shot 2019-05-17 at 5 44 31 PM" src="[link]> Check the dev tools here, [link]

### CASE-4080 · spellcheck HTMLAttribute has incorrect type
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug I tried to remove spell checking from a HTML form by applying the spellcheck='false' attribute which is a string value in the HTML spec. Solid JS expects a boolean causing a type error. When I tried with the boolean, which satisfied the type error, it didn't apply the spell checking to the form. [link] <img width="323" alt="Image" src="[link] /> ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Create a HTML form 2. add the spellcheck='false' attribute 3. See type error in code 4. try the boolean approach like the type expects 5. add a…

### CASE-4082 · [Bug] Repeated call syntax in JSX breaks reactivity
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug/compilation
- **Excerpt**: ### Describe the bug Having `someSignal()()` inside JSX breaks reactivity. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click the first counter a few times to make it different than the second counter 2. Toggle between the counters using the third button ### Expected behavior I expect `Result (broken)` to match `Result (works)`. ### Screenshots or Videos _No response_ ### Platform All ### Additional context Discussion on discord [link]

### CASE-4089 · PatternSVGAttributes is missing 'href' attribute
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug The SVG 'pattern' element accepts an `href` property for a background image; however this property is missing from the TypeScript type definitions. ### Your Example Website or App n/a ### Steps to Reproduce the Bug or Issue Try to compile the following JSX: ```tsx <pattern href="#someid" /> ``` The compiler will complain. ### Expected behavior Should be able to create a pattern element with an href. ### Screenshots or Videos _No response_ ### Platform n/a ### Additional context _No response_

### CASE-4091 · UI disappears + hydration warnings, with nested components and spreading props
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug On initial page load, nested children disappear and a hydration warning occurs when (all) props are spread, there's 1+ "non-spread" props and `props.children` is used. UI also happens in a prod build (but no hydration warning in console). Possibly related to [ref] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Run `npm run dev` 2. Visit the index route, and the page will show `TEXT` for a bit before it disappears. ### Expected behavior UI should not disappear, and there shouldn't be a hydration warning. ### Screenshots or Videos _No…

### CASE-4092 · `batch` and `runWithOwner` messes with catching errors by ErrorBoundary
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬1 · closed
- **Excerpt**: ### Describe the bug If throwing an error in an async callback, one needs to wrap it in `runWithOwner` so that `ErrorBoundary` is able to catch it. But when it happens inside `batch` as well, the error isn't getting caught. Not only that, but since solid's primitives were used, it beaks solid execution as well instead of just letting the callback fail. ```ts batch(() => runWithOwner(owner, () => { throw new Error("Batch and Throw in owner"); })) ``` This is possible because `runUpdates` has a code branch where `fn` is executed without being wrapped in `try catch`. ![image]([link]) ### Your…

### CASE-4093 · `splitProps` is broken in 1.6.6
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug `splitProps` returns undefined properties in SolidJS v1.6.6 ([link]). The same example it works in SolidJS v1.6.5 ([link]). ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ```ts import { mergeProps, splitProps } from 'solid-js'; export default function App() { const inProps: { a?: any; b?: any } = mergeProps(() => ({})); const [props] = splitProps(inProps, ['a', 'b']); const keys = Object.keys(props); return <div>{JSON.stringify(keys)}</div>; } ``` renders `['a', 'b']` ### Expected behavior `[]` ### Screenshots or Videos _No response_ ###…

### CASE-4094 · `Portal` is overriding the lazy loaded sibling after hydration under specific conditions
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug If I use a component like below inside a `For`, after hydration it renders the Portal but not the lazy component. That bug is hard to reproduce because it happens only when: using a fragment element, a portal and a lazy component inside a `For` component. See the reproduction to see it happen. ```jsx <> <Lazy /> <Portal>Portal</Portal> </> ``` The workaround is to use a div instead a fragment, or wrap either the portal or the lazy component in a div. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Create a lazy component 2. Create a…

### CASE-4097 · TypeError: getHydrationScript is not a function
- **Principles**: P-A3, P-H1, P-F4 · **Env**: windows, typescript
- **Signals**: 👍0 💬1 · closed · labels: bug/typescript
- **Excerpt**: ### Describe the bug Running the following script during SSG/SSR produces `TypeError: getHydrationScript is not a function` since 1.5.x. ```typescript const { renderToStringAsync, getHydrationScript } = await import("solid-js/web") ``` It used to work in 1.4.x with `generateHydrationScript`. Maybe someone has an idea. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. `npm install` 2. `npm run build:ssg` ### Expected behavior no error fdm ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Version: 1.5.1 ### Additional context _No response_

### CASE-4100 · batch() does not work with multiple Array.splice operations
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug Using `<For>` on an array and updating that array inside a `batch()` throws errors indicating that `<For>` tries to render an `undefined` item. It looks a bit like [ref] where it creates "holes" in the array. Applying multiple `splice` on the same array without `batch` works fine. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue See the Codepen. If you remove the `batch` call on line 21 then everything works fine. ### Expected behavior Multiple `splice` calls on the same array should work inside a `batch`. ### Screenshots or Videos _No…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4002 · `on:*` with `...props` override not working
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I understood the last passed prop win on multiple identical props passed. But it does not work for something like `on:change` [See play here]([link]) I think in `CompA` the `on:change` should be overwritten with the passed function. Yet **both** are triggered! In `CompB` the explicit `??` assign overwrites as expected. Am I misunderstanding something or is this a bug? ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue <details> import { render } from "solid-js/web"; const hi=()=>console.log(11); const CompA=(props)=><input on:change={hi}…

### CASE-4006 · Regression: `event.target.value` is `undefined` in Solid 1.9.x using web components
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: webcomponents
- **Excerpt**: ### Describe the bug This repository uses Solid alongside Web Components (specifically from `@user/web`). Everything worked correctly in Solid 1.8.x, but after upgrading to Solid 1.9.x, `event.target.value` consistently logs as `undefined` when typing into the input field. Reverting back to `[email]` makes the behavior return to normal, suggesting a regression in newer releases. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ## Steps to Reproduce 1. Clone this repo and run `npm install`. 2. Run `npm run dev` to start the development server. 3. Open the…

### CASE-4015 · Resource refetch when source is falsy
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I'm creating a resource that is triggered on user input and is quite fallible (requesting camera access). I want to refetch the resource when the user clicks. My first inclination was to use the `refetch` method. However I don't want the resource to be fetched immediately. I figured that a fasly source would let me choose when to fetch, however this doesn't work. I think it's counter-intuitive that `refetch` is conditional instead of an override. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. `const [value, { refetch }] =…

### CASE-4017 · The module can't be synchronously required in CJS modules when using modern `moduleResolution`s
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/PRs Welcome
- **Excerpt**: ### Describe the bug [link]]/commit/93d44d45f1607871334d4c4ed637a780736445a4 fixed the types visibility issue reported by me here: [link]][ref] but it didn't quite fix in full how this package can be required at type level The input code: ```ts // @user: node16 // @user: commonjs import {} from 'solid-js' // types: 1.7.7 ``` results in ``` The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("solid-js")' call instead. To convert this file…

### CASE-4018 · Web component props are set before constructor call
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug Not sure this is a bug or expected behavior, but I did not find any documentation about it. When rendering a web component in solid, the web component properties are set before its constructor call. If the web component defines getter/setter functions with the same name as the props, these are somehow overwritten when the props are set during render and cause the setter not to work. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the playground link 2. Type into the input field Note: because customElements.define can't be called…

### CASE-4033 · Using a store with a list, a selected element among this list cause elements from the list to be overriden
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **IMPORTANT: If you have a question or an idea for a new feature use Github Discussions instead** **Describe the bug** Code is better than a thousand word: [link] (sometimes the browser view fail and you have to refresh the embedded browser window 1-2 times. Not sure why it has a hard time finding the solid dep. I used one of the examples ) i have a store with: -elments (array of basic element with a unique id property) -selectedId used to set which element you wand to select -selectedElement set with an effect when selectedId change to the matching element in the elements array. i select an…

### CASE-4036 · Extra whitespace breaking babel-plugin-jsx-dom-expressions
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Code I'm writing: ```js import { createResource } from 'solid-js'; import { For } from 'solid-js/dom'; export function AudioOutputSelector(props) { return ( <select> <For each={props.devices} fallback={<div>test</div>}> {_ => <option value={_.deviceId}>{_.label}</option>} </For> </select> ); } ``` ``` [!] (plugin babel) TypeError: /Users/omni/Documents/git/Akk/components/AudioOutputSelector.js: Cannot read property 'text' of null components/AudioOutputSelector.js TypeError: /Users/omni/Documents/git/Akk/components/AudioOutputSelector.js: Cannot read property 'text' of null at…

### CASE-4060 · `novalidate={true}` fails silently
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug There are three ways to enable the `novalidate` behavior on a form: 1. `<form noValidate={true}>` (this sets the property) 2. `<form novalidate={true}>` (this sets an attribute to true) 3. `<form novalidate>` (this sets an attribute via the template) 1 and 3 work as expected and disable form validation. 2 does not. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Add `novalidate={true}` to a form. ```jsx <form novalidate={true} onSubmit={console.log}> <input id="foo" required /> <input type="submit" /> </form> ``` Validation will still occur…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-4003 · Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug I'm creating a DND library on top of dnd-kit/dom and have run into this issue. By nature, sorting libraries use optimistic updates in the DOM tree to perform updates on the fly. Once complete, I need to sync the current DOM order with the order in my data. Sometimes this works well, but other times Solid tries to sort nodes that were already sorted by the optimistic DND update. In some cases, it even throws the error: `Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.` ### Your Example Website or…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4004 · Slow img component rendering in Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug In Safari, the construction of img components with dynamic src attributes is extremely slow. It has nothing to do with `load=lazy` or `decode=async`. I can confirm that the lazy loading behaviour is correct. It's just that `setAttribute` on img src itself is slow in magnitude compared with other browsers. Related (somehow): [ref] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click "Switch" 2. Wait for at least 5 seconds. ### Expected behavior I expect all the `<img>` components to be mounted in less than 1s (~2ms per `<img>`) as in…

### CASE-4014 · SVG fragments do not render when using html tagged template literals
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, linux
- **Signals**: 👍0 💬4 · closed · labels: enhancement/alternative templating
- **Excerpt**: ### Describe the bug When using solid-js with tagged template literals (using the html tag from solid-js/html), components that contains SVG fragments do not render when added in the context of an SVG. This behavior is different when using JSX, which works as expected. Here are the examples: JSX: [link] HTTL: [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. ### Expected behavior Should render SVG fragments onto page. ### Screenshots or Videos _No response_ ### Platform OS: Linux Browser: Firefox, Chrome ### Additional context _No response_

### CASE-4023 · solid-js/html gives error when parsing a string to html
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug ```js let output = "<div>Hi</div>" let node = html`${output}` console.log(node) ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue go to that playground link and run the code ### Expected behavior it should print a node like this ![image]([link]) ### Screenshots or Videos Got this error ![image]([link]) ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] ### Additional context _No response_

### CASE-4026 · Infinite loop when this appears anywhere in DOM: <form><input id='host' /></form>
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, firefox, macos
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ### Describe the bug when I put this example snippet anywhere, it starts an infinite loop: ``` <form> <input id='name' /> <input id='host' /> </form> ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - go to [link] - paste this anywhere into JSX ``` <form> <input id='name' /> <input id='host' /> </form> ``` - focus one of rendered input fields ### Expected behavior should not fall into infinite loop ### Screenshots or Videos [link] ### Platform - OS: macOS - Browser: Chrome, Firefox - Version: latest ### Additional context the loop here: [link] I think it…

### CASE-4028 · Resource's error won't be set if used in createRenderEffect
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If a resource is used in createRenderEffect, it's error will not be set if the resource fetcher throws: ```javascript const [res] = createResource(async () => { throw 'test' }) createRenderEffect(() => console.log(res())) ``` Wondering if this is an issue or an expected behavior... Thanks! ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Run the example ### Expected behavior The result panel should show "test" instead of "loading" ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Firefox - Version: 106.0.1 ###…

### CASE-4030 · classList not working when use splitProps for class
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, chrome104, firefox103, windows
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug The following code will not work for classList passed to props. ```tsx const [local, other] = splitProps(props, ['class']) return <div {...other} class={`${local.class} other-class`} /> ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue None ### Expected behavior classList will works ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Browser: Chrome, Firefox - Version: Windows10, Chrome104, Firefox103 ### Additional context _No response_

### CASE-4035 · Issue when component named Switch
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: ios
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: I am using app created by `solid-scripts` I created a component named `Switch` basically a `button` with some iOS UI. I renamed to `ButtonSwitch` then it works, I have checked and am sure I use my `Switch` instead of one from `solid` ![image]([link])

### CASE-4064 · Possible hydration error causing double renders
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, linux
- **Signals**: 👍2 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug This happens only with `renderStream`. It looks like hydration script inserts a new element instead of hydrating. You will see the element rendered twice instead of once. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to stackblitz 2. Refresh page 3. You will see the element rendered twice ### Expected behavior I expect it to render only once ### Screenshots or Videos _No response_ ### Platform - OS: Linux - Browser: Chrome - Version: 119 ### Additional context It works fine if you don't use control flow elements ```ts // Works fine…

### CASE-4067 · Resource can be `ready` but also return `undefined`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Please take a look at this example: [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue In the `createEffect`, the type of `shouldBeUndefinedButItsNot` is `number`, but console writes `undefined` on first run. You might need to refresh for the console to capture the initial `undefined`. ### Expected behavior I'm expecting the resource to not be `ready` unless there is a `number` ready. ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1]…

### CASE-4070 · Can't have a key named "toString" in a store
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Hello! A key named `toString` in a store returns `"[object Undefined]"` when it is accessed. Minimally-reproducible example: [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue [link] ### Expected behavior Should match Javascript behavior: ``` const myobj = {toString: {some:'data'}} myobj.toString => {some: 'data'} ``` ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Chrome - Version: 1.7.1 ### Additional context _No response_

### CASE-4087 · [Firefox] Render into iframe.contentDocument has bad behavior
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug Long story short, it seems that memoized tags are somehow broken when rendering directly into an iframe. It works on initial render, but once a signal updates something they become stringified, displaying as `[object Text][object HTMLDivElement]` etc. Just a guess, but Is it possible there's an `instanceof Element` somewhere? My understanding is that iframes have different instances of a lot of the common root classes so instanceof won't work as expected across the iframe boundary ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - Open [link]…

### CASE-4098 · Portal doesn't respect mount
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, linux
- **Signals**: 👍0 💬1 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug The doc is not clear on this and the lack of jsdoc makes hard to understand what exactly mount should be doing here. But I can't get Portal to respect the container I want to place it on. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. You can check out the example app ### Expected behavior The portal content to be placed inside mount element ### Screenshots or Videos _No response_ ### Platform - OS: linux - Browser: firefox - Version: 1.3 - 1.4 ### Additional context _No response_

### CASE-4099 · `createResource` does not catch falsy errors
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, windows
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug Like [ref], `createResource` also does not correctly handle falsy errors. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - ### Expected behavior Falsy errors should still be errors. ### Screenshots or Videos _No response_ ### Platform - OS: Windows 10 21H1 - Browser: Firefox - Version: 100.0.2 ### Additional context FWIW [ref] can be implemented in a non-breaking way if `resource.error` is always a truthy type when there is an error (e.g. by wrapping non-errors in errors).

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4008 · `<Show when={JSX.Element} />` breaks SSR (causes Hydration Errors)
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Whenever a piece of code that looks like this is written, and you actually pass a JSX in there. It throws a hydration error. <img width="449" alt="image" src="[link]> <img width="1023" alt="image" src="[link]> <br /> <br /> Afaik in React, I can do this since`JSX.Element | undefined` (or `React.ReactNode`) can technically be a true-sy a value, right? Other solution I tried is to wrap the `JSX.Element` variable with `Boolean(_props.title)` (but this does not work). But then again I might be wrong, feel free to correct me if there is a more correct approach to checking if a…

### CASE-4034 · Binding a context to a component is not working correctly?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: question
- **Excerpt**: ### Describe the bug I noticed the following situation. There is a context, there is a root component, and there is a component that will be nested in the root. The entire application is wrapped in a context, but before placing the nested component, the context value needs to be updated, so we wrap it again. The component does not output directly via JSX, but via a variable (signal). And here I found three different behaviors: 1. Through the onMount hook In this case, the nested component is rendered with the "old" context value (from the root component), that is, the "wrapper" is ignored;…

### CASE-4057 · Solid-styled-components passing data-attributes fails
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: Sandbox: [link] There seems to be an issue when trying to pass data-attributes through solid-styled-components. It should be able to pass valid HTML attributes eg. data-*, aria-* etc... down to the html. On the sandbox it throws an error whereas, running the code locally, no errors that thrown just the data attributes are stripped

### CASE-4058 · Import Components and Dot Notation
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: I've run into an issue importing objects which contain components and subsequently rendering those components using JSX and dot notation (eg. `<MyComponents.Foo />`). If `MyComponents` is being imported from another file, this will fail with an error `MyComponents is not defined`. If `MyComponents` is a variable within that file, everything works fine. Note this only presents as a runtime error, TypeScript is perfectly happy with it. [Here]([link]) is an example of the issue, some things that work and some that do not. Normally this is not a problem, I generally only include a single…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4009 · Astro not detecting Solid JSX transform when used with Custom Element
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: unverified bug/webcomponents
- **Excerpt**: ### Describe the bug ```bash WaitingListForm-ydmxd16g.js:1044 Uncaught TypeError: ComponentType is not a function at WaitingListForm-ydmxd16g.js:1044:20 at updateFn (WaitingListForm-ydmxd16g.js:12:38) at runUpdates (WaitingListForm-ydmxd16g.js:321:17) at createRoot (WaitingListForm-ydmxd16g.js:16:12) at WaitingListForm-ydmxd16g.js:1037:12 at CustomElement.connectedCallback (WaitingListForm-ydmxd16g.js:682:11) at WaitingListForm-ydmxd16g.js:747:20 at customElement (WaitingListForm-ydmxd16g.js:1054:30) at WaitingListForm.js:50:1 ``` ### Your Example Website or App…

### CASE-4011 · JSX does not wait for transitions to complete when using a ternary in a prop value
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When using a ternary expression as part of a prop value in JSX, transitions do not seem to work properly. The DOM is updated immediately, instead of waiting until all resources in the transition are resolved. When not using a ternary, or moving it to a derived signal outside of the JSX, the transition works correctly. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click the 'Increment' button a few times to see how the rendered counts change. 2. Under 'Without ternary', the counts are updated in sync, and the transition works as…

### CASE-4037 · JSX transformation issue
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: I was playing around with Solid today, and ran into an issue with the given JSX: ```jsx import { render } from "solid-js/dom"; function Link({ children, href, className, }) { return ( <a href={href || "#"} className={className}> {children} </a> ); } function Component() { return ( <div> <Link>new</Link> {" | "} <Link>comments</Link> {" | "} <Link>show</Link> {" | "} <Link>ask</Link> {" | "} <Link>jobs</Link> {" | "} <Link>submit</Link> </div> ); } render(() => <Component />, root); ``` The error is `Uncaught TypeError: Cannot read property 'nextSibling' of null`. I assume it's because your…

### CASE-4039 · <Show /> throws an error with typescript
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Show component doesn't appear to work well with [email] Its types are defined to return children | undefined based on `when` condition like: ```ts export declare function Show<T>(props: { when: boolean; fallback?: T; transform?: (mapped: () => T | undefined, source: () => boolean) => () => T | undefined; children: T; }): () => T | undefined; ``` but when its used as a JSX element inside a warpper ```jsx <div className={wrapperStyles}> <Show when={(state.showButton)}> <button className={buttonStyles}>Add item</button> </Show> </div> ``` it appears to throw this error trace at `<Show>`. ``` JSX…

### CASE-4040 · Transform Error when trailing space in Custom Component: Property value expected type of boolean but got undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug/compilation
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 `export default function SVGTEST() { let isUpperCase = false; const a = "ok"; return (<text>{isUpperCase ? a : a.toLocaleUpperCase()} </text>) } ` An error occurs when there is a space between the closing curly brace `}` and the closing tag `</text>` at the end of the code, as in: `} </text>` However, the error disappears if the space is removed, as in: `}</text>` 22:36:11 [vite] Internal server error:…

### CASE-4043 · Bug with Transitions Show vs {cond && <Comp/>}
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug Adding this here just so it doesn't get missed in 2.0 or 2.x milestone if we're beyond 2.0 planning already, understand things are hectic with transition to basing on Astro at the moment. This is bug with transitions where using {cond && <Comp/>} behaves differently Show, the first doesn't use a transition (thus showing Suspense fallback) whilst the later does. Verified by modderme123 on discord [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Run both variants ### Expected behavior Expect Suspense fallback to never show as wrapped in…

### CASE-4047 · Solid 1.6 spread/deproxification behaviour breaking solid-dnd drag handlers
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug The changes in Solid 1.6 handling of spread/deproxification break previously working assignement of event listeners to elements in solid-dnd. This code now fails to update the element with the appropriate event listeners once they are defined: ```js const Draggable = () => { const draggable = createDraggable(1); return ( <div ref={draggable.ref} style={transformStyle(draggable.transform)} class="draggable-container" > <div class="content">Draggable</div> <div class="handle" {...draggable.dragActivators}> // <--- this no longer works as before ✪ </div> </div> ); }; ```…

### CASE-4065 · JSX types for SVG elements (`SVGElementTags`) wrongly use runtime DOM element types instead of attributes
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍0 💬2 · closed · labels: bug/typescript
- **Excerpt**: ### Describe the bug As part of an SVG element I was building with `solid`, I wanted to use an [`<feDropShadow>`]([link]) element like this: ```html <feDropShadow in='SourceGraphic' dx='0.2' dy='0.4' stdDeviation='0.2' /> ``` only to find out that TypeScript was complaining about `dx` and `dy` having wrong types, expecting an object of the shape [`SVGAnimatedNumber`]([link]). And that's because `feDropShadow` is defined as `Partial<SVGFEDropShadowElement>` in interface `SVGElementTags`, in file `solid-js/types/jsx.d.ts` The issue here is that [`SVGFEDropShadowElement`]([link]), defined in…

### CASE-4081 · External source will rerun disposed inTransition computation function if there is a suspense context
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug We setup a simplified repro here: [link] Setup solid with an external source. A memo returns a signal value. We call an `inTransition` trigger to simulate an external dependency being invalidated while we are in a transition. This will dispose the inTransition computation. After this, we start another transition, and update the signal which invalidates the memo. Since we are in a transition, we attempt to track the disposed autorun, throwing an error. For this to repro, there needs to be a suspense context. `startTransition()` checks for the existence of a suspense before…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4013 · Laggy Performance
- **Principles**: P-A1, P-A4, P-G3, P-F5, P-H3, P-H2 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When I call move or zoom on the map it start to lag. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ```ts import { Title } from "@user/meta"; import ControlUI from "~/components/ControlUI"; import useMap, { buildMap } from "~/components/useMap"; import * as L from 'leaflet'; import supabase from "~/lib/supabase"; import { Suspense, createEffect, onMount } from "solid-js"; function debounce(func: Function, delay: number) { let timeoutId: ReturnType<typeof setTimeout>; return function (...args: any[]) { clearTimeout(timeoutId); timeoutId =…

### CASE-4090 · Exception thrown in batch() after await inside createEffect leaves the app unresponsive.
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug Similar to [ref], but now inside a createEffect. When we have a batch() call which throws an exception after an await, then the app remains unresponsive. This happens with or without the batch call being wrapped inside runWithOwner. The same code without batch() runs fine. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click on the button. The button count becomes '1' and the message gets updated to 'Dummy error runWithOwnerOnly' 2. Click on the button again. The button count becomes '2' but the message is not updated. 3. The app is now…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4019 · Hydration doesn't see the DOM diff
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Hi, I ran into issue with solidjs `hydrate()`, it doesn't see changes in the DOM between server/client render. I use 2 IoC containers (inversifyjs) and code see the changes (createEffect, createMemo), but hydrate() doesn't update the DOM. I've created a minimal repro without inversifyjs: If I `render()` same code, I see right DOM, but hydrate() doesn't see the diff: ![render]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. git clone [link] 2. cd solidjs-repro 3. npm install 4. npm run dev --- see the gif ### Expected behavior As a…

### CASE-4041 · [Bug?]: SuspenseList hydration error
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 Using `<SuspenseList>` causes hydration error. Not sure if this is a SolidStart issue. ### Expected behavior 🤔 It should control order suspense are revealed. ### Steps to reproduce 🕹 [link] ```tsx import { Suspense, SuspenseList, createResource } from 'solid-js'; export default function Home() { const [data] = createResource(() => ['red', 'blue', 'green']); return ( <SuspenseList revealOrder="forwards"> <Suspense> {/* Text node works */} {/* {data()} */}…

### CASE-4044 · Bug [babel-plugin-jsx-dom-expressions?]: rendering updates from signals can error for children of a fragment
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug The bug appears to be related to how fragments are hydrated after ssr, and presents when updating a signal under certain conditions. After a signal update causes a re-render of the jsx containing a call, if the call has: - a ___fragment for a direct parent___ (which can only occur at the top level), - ___has at least 1 sibling tag___ - and ___has a text character on the same line as the call___ the initial view of the call persists and instead of being replaced, the updated value is appended, sometimes to the line, sometimes to the end of the container. ### Your Example…

### CASE-4048 · Hydration bug with children and spread props after updating to v1.5
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug It seems hydration is broken using this pattern: ```js const [l, p] = splitProps(props, ["children"]); <div {...p}> {l.children} <div></div> </div> ``` Error: `TypeError: Cannot read properties of null (reading 'nextSibling')` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Run npm run dev 2. See console error 3. Notice that component is throwing an error that is being handled by `ErrorBoundary` ### Expected behavior Component not throwing an error after hydration. It should render the same way it came from the server. ### Screenshots or…

### CASE-4049 · Hydration bug when signal is not wrapped in a DOM element
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug I used solid-start to write this simple counter component. In combination with hydration, the assignment to the dom element seems broken: ```tsx import { createSignal } from "solid-js"; export default function Home() { const [count, setCount] = createSignal(0); return ( <> {count()} <button type="button" onclick={() => setCount(count() + 1)}> up </button> </> ); } ``` When I click the button, the initial value of `0` stays visible on the page. Next to the `0`, a `1` gets displayed. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. generate…

### CASE-4052 · Rehydration: Component built by createGlobalStyles not included in template
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: unverified bug
- **Excerpt**: Select "Client side rendering with hydration" in playground. Discussed in `solid-start` discord channel. [link]

### CASE-4053 · "computations created outside a `createRoot` or `render`" in vite-plugin-ssr example
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: **Describe the bug** When you run the solid example for the [vite-plugin-ssr]([link]) plugin, a warning: _"computations created outside a `createRoot` or `render` will never be disposed"_ appears in the console, but everything seems to work. Link to example: [link] **To Reproduce** 1. git clone [link] 2. cd vite-plugin-ssr/examples/solid/ 3. npm install 4. npm run dev 5. Follow the localhost:3000 in the browser **The file in which the `render` function is used:** [link] or [link]

### CASE-4055 · bug: some exposed types/interfaces are not exported by `solid-js`
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/typescript
- **Excerpt**: **Describe the bug** Currently, `solid-js` does not export all of the type definitions / interfaces used by exported functions. This forces the end user to manually recreate the type/interface (by reviewing source code) if they need access to the type. The most egregious example of this is `PropsWithChildren`, but there are others. **To Reproduce** Some of the types/interfaces which are not exported but which are exposed by exported functions are: - `PropsWithChildren` - `GraphRecord` - `SuspenseContextType` - `ResourceReturn` - `MatchProps` - `HydrationContext` - `SharedConfig` **Expected…

### CASE-4056 · Missing "type" field in package.json
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: I've been toying around with SSR and found an issue: When running server as an ES module, since `solid` and its subpackages don't include `type: "module"` in their package.json files, node recognizes them as CommonJS modules. This makes using named imports from solid throw errors like ``` SyntaxError: Named export 'ssr' not found. The requested module 'solid-js/web' is a CommonJS module, which may not support all module.exports as named exports. ``` Judging by `.js` and `.cjs` pairs in the [`exports` field]([link]), I guess treating `.js` files as ES modules was the intention, but this…

### CASE-4059 · `renderToStringAsync` with `NoHydration` and nested resources + `Suspense` boundaries triggers resource collision
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Suppose you have the following `Post` component, which uses a resource to load a user: ```jsx async function loadPost(id) { await new Promise((resolve) => setTimeout(resolve, 10)); return { id, userId: 'alice', content: 'Hello world', }; } export function Post(props) { const [post] = createResource( () => props.id, (postId) => loadPost(postId), ); return ( <div> <Suspense> <User id={post()?.userId} /> </Suspense> <span>Post: {post()?.content}</span> </div> ); } ``` The User component in turn loads data via a resource and renders that: ```jsx async function loadUser(id) {…

### CASE-4061 · Style attribute client vs server rendering inconsistency
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug The following JSX: ```tsx <button style={{ 'background-color': count() ? "white" : '', color: count() ? "black" : null, display: count() ? "block" : undefined, }} /> ``` compiles to the following SSR code: ```js var _v$ = count() ? "white" : '', _v$2 = count() ? "black" : null, _v$3 = count() ? "block" : undefined; _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$.style.setProperty("background-color", _v$) : _el$.style.removeProperty("background-color")); _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$.style.setProperty("color", _v$2) : _el$.style.removeProperty("color"));…

### CASE-4062 · [Bug?]: Hydration Mismatch when resource resolves immediately on next tick
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 When you wrap a server function with `cache`, and then use it in a component, without calling it in `route load`, it will result in a `Hydration Mismatch` unless you set `deferStream` to true. Example (failing) code, (with ssr: true): ```tsx const randomNumber = async () => Math.random() const loadRandomNumber = cache(async function() { "use server" const number = await randomNumber() console.log(number) return number; }, "random") export default function…

### CASE-4063 · `class` prop clobbers `classList` attribute on client render
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug ```jsx const CoolButton = props => <button {...props} classList={{ foo: true, ...props.classList }}/> export default () => <> <CoolButton>Foo</CoolButton> <CoolButton class="bar">Foo</CoolButton> </> ``` The first button has the `foo` class (as expected). The second button only has the `bar` class (unexpected). This behavior does not match server render where everything works as expected. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Visit the playground link. 2. Observe the preview. ### Expected behavior Should match the behavior of…

### CASE-4066 · [SSR] Lazy components get duplicated if their dependencies have changed during loading
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug The main idea here is that if you change the value (signal or reactive property, whatever is reactive) your lazy component is dependent on **during** its loading, then you'll end up with a duplicate. So if your lazy component takes 500ms to be loaded then changing the dependency within the first 500ms reproduces this bug. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue [Repro already has this covered, just follow the link above and check out the output] 0. This bugs can only be reproduced when using SSR. 1. Create a memo that returns lazy…

### CASE-4069 · Strange Hydration bug
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Hi, I am sorry in advance, I can not build a nice reproduction, but maybe someone has an idea. I updated to the newest solid-js version `1.5.7` -> `1.7.3`. Testing the code, hydration suddenly failed with `Cannot read properties of null (reading 'nextSibling')`. This is the error: ``` p.js:1 Uncaught TypeError: Cannot read properties of null (reading 'nextSibling') at get children [as children] (app.js:1:50283) at Object.fn (app.js:1:10267) at Da (app.js:1:4751) at Rn (app.js:1:4692) at Q (app.js:1:1284) at Wa (app.js:1:10208) at app.js:1:8367 at _e (app.js:1:2879) at w…

### CASE-4072 · SSR render issue `!!function()`
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Seeing this behavior when starting from bare template. Also tried updating to latest versions but same... ```js export default function Home() { const alwaysFalse = () => false; return (<> <h4>Inspect data-value on these paragraphs while refreshing the page...</h4> <p data-value={alwaysFalse()}>Server correctly renders data-value="false"</p> <p data-value={!!alwaysFalse()}>Server incorrectly renders data-value="true" - then updates client-side</p> </> ); } ``` Suggestion [on discord]([link]) in might be related to ` !!__vite_ssr_import_2__.escape(alwaysFalse, true), false)` not calling the…

### CASE-4074 · Hydrated components cannot receive render props from spread object
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug Hello there! We had a user open an issue ([[ref]]([link])) on [`withastro/astro`]([link]) but it appears to be an upstream issue with Solid's hydration logic. I was able to reproduce the issue in a new SolidStart app. This issue only seems to appear during hydration, not when using pure client-side rendering. > Spreading props into a child component behaves oddly. If one of those props is inlined into the JSX as string content, then nothing will appear. ```jsx import { createMutable } from 'solid-js/store'; function SpreadComp(props) { return ( <div…

### CASE-4075 · Spread of `class` and `classList` Do Not Appear to Work in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug When using both `class` and `classList` props in a spread manner, SSR seems to produce invalid serialization of the `class` attribute on the wire. ```jsx function MyDiv(props) { return <div {...props}>{props.children}</div>; } <MyDiv class="outer" classList={{ inner: value() }}>hi solid!</MyDiv> ``` when `value()` is truthy i would expect `class="outer inner"` and when `value()` is falsy i would expect `class="outer"` but the actual output over the wire is `class="outer" class=" inner"` when its truthy for instance. As far as i can tell, this is a quirk of `ssrSpread` in…

### CASE-4083 · [Bug?]: multiple hydration errors with createResource
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 I have found two reproducible hydration errors that may or may not be related to each other, not sure: 1. Interacting with the page before streaming resources are completed leads to hydration errors on stream complete. ![2024-01-24 13 40 45]([link]]-start/assets/847542/d3df0679-efbc-4ea3-857b-f4585aaf85f3) 2. Multiple streaming resources can lead to hydration errors (intermittent) --- I have also reproduced issue number 1 with just solid (no solid-start),…

### CASE-4084 · [Bug?]: Hydration not fired with cascading deferStream
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 I have an app shell, with menu and footer navigation which are loaded using `createAsync` they `deferStream`. My page content is also loaded via an API with `createAsync` in a route. It `deferStream`. Representation: ``` - app.tsx - RootContexts.tsx <— 2 createAsync deferStream - PageCom - index.tsx (route) <— 1 createAsync deferStream ``` If index.tsx has `deferStream` at the same time that upper component RootContexts has deferStream, hydration does not…

### CASE-4085 · [SSR] Hydration mismatch when createResource throws an error
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug When `createResource` throws an error (e.g. rejects a promise), the hydration mismatch error is thrown. Another thing to notice here: there's no hydration mismatch if `createResource` throws an error without a promise (e.g. without `async`). It feels like the behavior should be unified no matter whether it returns a promise or not. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 0. This bugs can only be reproduced when using SSR. 1. Go to the console and observe the hydration mismatch error. ### Expected behavior There should be no error…

### CASE-4086 · SSR Context with store not displaying reactive value
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug I have a context that uses a store with an object and retrieve by keys, with the value updated on mount. The displayed values are not updated when this is the first page loaded. Using `console.log` in the effects show the correct state. Navigating from another page to this page works. Doing the same without context works and `ssr: false` works. ```tsx // context type Data = { [k: string]: { email: string; } | null; }; const [data, setData] = createStore<Data>({ jeff: null, }); onMount(() => { setData('jeff', { email: '[email]', }); }); ``` ```tsx const { data } =…

### CASE-4088 · After version 1.6.13 (DOM expressions 0.35.19), hydration markers like <!> are showing up in fragments
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug After [this]([link]) change to DOM expressions, any fragments with dynamic data are being separated by `<!>` when compiling with hydration turned on. This means that processing of that fragment via (for example) the `children` helper will pick up those text elements. This is a breaking change from earlier versions of solid, and is an inconsistency when compiling with hydration vs. without. For example, ```javascript <> {props.string1} {props.string2} </> ``` Will produce an array of `[string1, '<!>', string2]` with hydration turned on when read externally. When hydration…

### CASE-4095 · Spreading children in SSR is rendered first before the parent
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug Given the following code: ```js <a {...props} /> ``` Solid generates the following SSR code: ```js ssrElement('a', {...props}, undefined, true) ``` which has a problem: spreading evaluates all getters, in which case since `children` is compiled into a getter, `children` is rendered earlier than the container, which causes hydration keys to be in incorrect order where the parent doesn't gets the last iteration of the hydration key instead of receiving the first iteration. Example failing key sequence ``` Current value 0-0-0-0-0-0 X4 // DocumentHead Current value 0-0-0-0-1…

### CASE-4096 · `textContent` fails on hydration if initial value is empty
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug When hydrating an element that uses `textContent` to set its text, an error is thrown if the initial value is an empty string (or any nullish value). This seems to be because it is looking for a text node in the HTML that is sent to the client, but there is no initial text node that it can find. This doesn't happen if you just put the string contents as a child of the node. `TypeError: Cannot set properties of null (setting 'data')` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Run `turbo dev` 2. Observe that an empty button appears on…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4042 · Attempting to access a stale value from <Show> that could possibly be undefined.
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬3 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug Hi peeps, I have a rather complex application with many stores and recently have this issue. `Attempting to access a stale value from <Show> that could possibly be undefined. This may occur because you are reading the accessor returned from the component at a time where it has already been unmounted. We recommend cleaning up any stale timers or async, or reading from the initial condition.` I know where I set the store that causes the issue, but I don't know which `<Show />` throws the actual error. It would be helpful if solid can show me where the issue is so that debug…

### CASE-4045 · props.children displays a stale item when used in an HTML literal template
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Describe the bug The demo has two identical parent components - one uses JSX, the other html literal template. Both of them have a <Dynamic> child. The problem is that the parent using html literal shows a stale item. Just click a few times between the **Child1** and **Child2** buttons to toggle the component used in <Dynamic> and you'll see it. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Click on Child1 and then on Child2. Notice that there are now two children in the parent using the HTML literal template. ### Expected behavior The JSX and the html…

### CASE-4071 · onCleanup not always called on the server
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug When a resource is created outside of the `<Suspense>` boundary that wraps its data access, the first such resource will not have related `onCleanup` functions triggered on the server (only the first resource created this way). Kind of nuanced, and there seems to be some other strange but related behavior at play here as well. Easier to show with some examples. Here's our resource helper - it just creates and returns a new resource, and registers an `onCleanup` function: [link] A `DataComp` component that does not include it's own suspense boundary: [link] A…

### CASE-4076 · Directives on a button call onCleanup too early if class is using signal
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Describe the bug I'm using ref={myDirective} instead of use:myDirective because dealing with directives in TS is painful. It worked well for me so far. However, I have noticed weird conditional behavior where onCleanup is called way too early. If I use smth like `<button class={signal() && 'myClass'}` ref={myDirective} />`, onCleanup is called on button click/mount. (It seems that it's called onClick in the playground example and as soon as it mounts locally for me). If I don't use signal in the class, it works as expected. Same behavior when i use `class` or `classList` ### Your Example…

### CASE-4077 · Combining control flow operators
- **Principles**: P-F5, P-H3 · **Env**: opera
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Does Solid support combining control flow operators? I can't get it to work, not sure what I'm doing wrong. I removed code bit by bit and I think this example captures where the error occurs: ``` import { createState, createRoot, onCleanup } from 'solid-js' const CountingComponent = () => { const [state, setState] = createState({ counter: 0, data: [1, 2, 3], flag: 3 }); const interval = setInterval(() => { setState({ counter: state.counter + 1, flag: state.counter % 3 }) }, 1000); onCleanup(() => clearInterval(interval)); return ( <$ each={state.data} > <> <$ when={state.flag === 1}> <div>…

### CASE-4079 · Can't use Date Object in state?
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Hello, for some reason this simple code (I use your Counter example) throw error when I'm trying to use Date Object method from Solidjs state: ```jsx <html> <head> <script src="[link]></script> <script src="[link]></script> <script type='text/solid'> const { createRoot, createState, onCleanup } = Solid; const App = () => { const [state, setState] = createState({ counter: 0, dateTime: new Date() }), timer = setInterval(() => setState({ counter: state.counter + 1 }), 1000); onCleanup(() => clearInterval(timer)); return <div>{( state.counter.toString() + ' ' + state.dateTime.toString() )}</div>…

