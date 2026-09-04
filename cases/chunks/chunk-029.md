# Case Chunk 029 — Round 29

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3801 · onTouchStart event handler does not work properly on custom elements with display: block
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬3 · closed · labels: bug
- **Excerpt**: **After upgrading to Preact X** `onTouchStart` event handler stopped working on custom elements with `display: block`. Here is code sample: `<custom style={{display: 'block'}} onTouchStart={() => {console.warn('onTouchStart!');}}>Hello, World!</custom>` In devtools Event Listeners I noticed strange event name `TouchStart` (with capital T and S) ![image]([link]) If i change event name to `ontouchstart` it all works fine. example: `<custom style={{display: 'block'}} ontouchstart={() => {console.warn('onTouchStart!');}}>Hello, World!</custom>` What is strange is that such behavior only occurs in…

### CASE-3814 · `componentDidUpdate` affects component state
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** `componentDidUpdate` affects component state **To Reproduce** [link] 1. Open Console, it shows `{ count: null, isLoading: false }` ![image]([link]) 2. Comment the line of `componentDidUpdate`, refresh demo page, in console, it shows `{ count: { value: 10 }, isLoading: false }` ![image]([link]) **Expected behavior** Whether or not there is a `componentDidUpdate` event, the console should be `{ count: { value: 10 }, isLoading: false }`

### CASE-3826 · Loss of SVG context when rendering elements in a portal
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬1 · closed
- **Excerpt**: 👋 hi from Recharts! - [x] Check if updating to the latest Preact version resolves the issue: yes, observed on v10.28.2 **Describe the bug** When rendering SVG elements using `createPortal`, Preact loses the SVG namespace context and renders SVG elements in xhtml context which means they won't render in browser. **To Reproduce** [link] <img width="566" height="350" alt="Image" src="[link] /> Steps to reproduce the behavior: 1. Open stackblitz link, if you see two rectangles then it works, if you see one rectangle then it doesn't 2. Open devtools, inspect the two `<rect>` and run…

### CASE-3828 · iframe is reloaded when siblings before it in a list are removed
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug/reconciler
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Seems similar to [this previously resolved bug]([link]][ref]) Basically if you have a list of nodes with one that renders an iframe anywhere besides the first position, if all of the elements before it are removed the iframe is reloaded on the next render. **To Reproduce** [link] Steps to reproduce the behavior: 1. Go to [link] 2. Click on "Toggle" -- this will remove the test elements from the dom 3. See the iframe reload **Expected behavior** The iframe should not reload

### CASE-3837 · Preact-x React Dev Tools bundle issue with __REACT_DEVTOOLS_GLOBAL_HOOK__
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬1 · closed · labels: bug/has fix
- **Excerpt**: In version `10.0.0-alpha.0` `window.__REACT_DEVTOOLS_GLOBAL_HOOK__` is bundled as `window.t` this obviously causes devtools to never load ![image]([link])

### CASE-3853 · Redefining `batch`, and the concept of a new batched effect
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬30 · closed · labels: question
- **Excerpt**: ### Describe the bug ```js import { createSignal, batch } from "solid-js"; const [count, setCount] = createSignal(0); batch(() => { console.log('set:', setCount(123)); console.log('get:', count()); // logs 0 instead of 123 }); ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue See link ### Expected behavior Reading and writing signals should be atomic operations. ### Screenshots or Videos _No response_ ### Platform n/a ### Additional context I spent a weekend debugging an issue I thought was in LUME, because I never expected reading a signal after setting it…

### CASE-3865 · cannot add 'draggable' attr to img
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: bug
- **Excerpt**: **IMPORTANT: If you have a question or an idea for a new feature use Github Discussions instead** **Describe the bug** this is no effect when adding `draggable` attr to img. **To Reproduce** see [link] **Expected behavior** cannot drag img **Reproduction** ![image]([link])

### CASE-3868 · Delegated events in a Suspense cause resources to refetch on mount (SSR)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: chromium, windows
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: ### Describe the bug When an element with a delegated event handler is present in a Suspense context, firing these events before mount causes all resources to be reran on mount ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open site 2. While it's loading, move the mouse around 3. Notice "fetching......" in client logs ### Expected behavior Firing these events shouldn't refetch all resources ### Screenshots or Videos [link] ### Platform - OS: Windows 11 - Browser: Arc (Chromium) - Version: 134.0.6998.89 ### Additional context I looked around in sources and…

### CASE-3869 · Reactive properties not updating in solid-element custom elements
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: webcomponents
- **Excerpt**: ### Describe the bug I've encountered an issue with `solid-element` where reactive properties are not updating correctly when the Props change. ### Your Example Website or App none ### Steps to Reproduce the Bug or Issue 1. Create a custom element using `solid-element` 2. Import in React project 3. Pass properties via React elements ### Expected behavior Solid components can receive props correctly and reactively ### Screenshots or Videos ``` customElement<{ roomId: string, type: 'push' | 'player' }>( 'cst-live', { roomId: '1', type: 'push' }, LiveMain, ); ``` LiveMain is a solid component,…

### CASE-3870 · solid-styled-components: TypeScript - Base tag props not exposed
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬12 · closed · labels: bug/good first issue/typescript
- **Excerpt**: ## Overview When wrapping with styled, wrapped tag props don't seem to be exposed. --- Example repo: [link] `npm i` and open `src/components/count.tsx` with type linting enabled: ![image]([link]) Thanks!

### CASE-3873 · `createResource` is always in pending state when used with `<Show>` component
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: question
- **Excerpt**: ### Describe the bug The resource remains `pending` even after the fetcher throw an error. With astro it remains `unresolved`: [link] Using only solid-js: [link] Also, the loading state remains `true` and the error state remains `false`. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. create a simple `createResource` 2. throw an error inside it 3. Show the state as `fallback` with `<Show>` component ### Expected behavior With Astro, I expected the `state.error` to be `true` after the fetcher throws an error. ### Screenshots or Videos _No response_ ###…

### CASE-3878 · Shouldn't roots be disposed when their scope function throws?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug When something throws (Directly) inside of a function passed to `createRoot()`, the root that was being created doesn't get disposed. Is this expected? ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the playground link 2. Check the console ### Expected behavior The root should be disposed and "Disposing" should be logged ### Screenshots or Videos _No response_ ### Platform (Irrelevant) ### Additional context _No response_

### CASE-3882 · Forwarding ref returns "uninitialized" element
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: enhancement/question
- **Excerpt**: ### Describe the bug I have this component: ```jsx function Div(props) { return ( <div {...props}/> ) } ``` And I use it like this: ```jsx <Div id="hello" ref={el => console.log('id', el.id)}>Div</Div> ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Use the `Div` component and look at the console output. It shows: > id _&lt;empty string&gt;_ ### Expected behavior I expected to have access to the element's attributes, e.g. `id`. Instead, I seem to get default attributes ("" instead of "hello"). ### Screenshots or Videos _No response_ ### Platform - OS:…

### CASE-3885 · Unexpected memo wrap (optimization?) causes a computation to be created outside of createRoot
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug [link] Unfortunately, the playground is not really showing the problem because it uses production solid, I think. But in the output tab you can see the `_$memo` being applied, presumably as an optimization. However, this causes a problem when such prop is used outside of roots, in events etc. It is not reproducible in playground, but this is what I see locally: <img width="716" alt="Image" src="[link] /> ### Your Example Website or App [link] (Edit to fix a typo) ### Steps to Reproduce the Bug or Issue 1. Go to output tab 2. Notice the added `_$memo` ### Expected behavior…

### CASE-3891 · Mutables need batching in some situations
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: ### Describe the bug Mutables behave in unexpected ways in some situations In the cats example, pop() doesn't trigger an update [link] However, if you batch it, it works [link] When doing push() it doesn't need batching and works as expected [link] Lack of batching when in use with reconcile triggers unnecessary re-renders [link] Not sure if this will be related to this, but working with arrays doesn't trigger an update [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - ### Expected behavior - ### Screenshots or Videos - ### Platform - ### Additional…

### CASE-3896 · Unrecoverable Hydration Mismatch for markdown pages
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug When using `.md` file for pages, refreshing the page will cause `Unrecoverable Hydration Mismatch.` error. To be specific, I have a list of markdown files as pages, and a parent page to show all the clickable titles. 1. Accessing the parent page -- no problem. 2. Accessing the son page from the link in the parent page -- no problem. 3. After 2, refreshing the page -- HAVE error. 4. Accessing the link of any son-page directly from the browser -- HAVE error. ## Error screenshot ![image]([link]]/assets/1921878/2f054eb9-d8ea-47f1-a6cd-2f2f5fb570cc)…

### CASE-3897 · Typescript erros in button tag an frame
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬8 · closed · labels: unverified bug
- **Excerpt**: i am getting this typescrip error in a normal button `Property 'forwardRef' does not exist on type 'ButtonHTMLAttributes<HTMLButtonElement>'.` ```jsx <button forwardRef={slider} onMouseMove={handleMove} onMouseUp={handleStopDragging} onMouseDown={handleStartDragging} onMouseLeave={handleStopDragging} class='scroll-horizontal rating__container' > <For each={homeLocale.rating.data}> { (ratingData) => <CardRating rating={ratingData} /> } </For> </button> ``` also in a frame i get this typescript error `Property 'frameborder' does not exist on type 'IframeHTMLAttributes<HTMLIFrameElement>'.`…

### CASE-3899 · Starting from version 1.6.7, webstorm code hints appear abnormal
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: downstream
- **Excerpt**: ### Describe the bug When using version 1.7.0, I found that editing tsx files in webstrom could not trigger code hinting function for html tags, as shown in the figure below. Finally, I rolled back to version 1.6.6, and the code hinting function of html tags was available. Finally, it was confirmed that the code hinting function of html tags in tsx files was unavailable after version 1.6.7. The problem should have occurred on the `types/jsx.d.ts` file of solid. ### Screenshots or Videos #### version: 1.6.7 <img width="803" alt="image"…

### CASE-3900 · An error occurred during hot update!
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When the first startup, everything is well. Click the add button you can see counter change.Click the plus button again after modifying the content of the CounterProvider.tsx file, and nothing will happen on the page ### Your Example Website or App no,only happen when use vite hot update ### Steps to Reproduce the Bug or Issue npm i npm start click the add button, everything goes well modify the content of CounterProvider file, save click add button again, the counter no longer react ### Expected behavior the counter should be normal ### Screenshots or Videos _No…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3802 · [10.0.0-rc1] devtools error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, react
- **Signals**: 👍5 💬3 · closed
- **Excerpt**: Hi there, I upgraded my preact v8 project which i create with preact-boilerplate to Preact X. If I import in index.js: `if (process.env.NODE_ENV === 'development') { require('preact/debug'); }` I tried to use the new upgrade docs, but I got this error: ![image]([link]) In Firefox devtools I got this error: ![image]([link]) The devtools in chrome for react don't start. Is this a bug ? Best regards.

### CASE-3805 · Hoisted/memoized component VNodes without DOM elements should handle all edge cases with unmounting
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge, react
- **Signals**: 👍2 💬3 · closed · labels: bug
- **Excerpt**: Preact X: [link] React: [link]

### CASE-3807 · EDGE + svg + dangerouslySetInnerHTML = void
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍2 💬3 · closed · labels: bug/help wanted
- **Excerpt**: When I use `dangerouslySetInnerHTML` to render `svg` it works everywhere except EDGE. I've created repo with the bug demo: [link] ![]([link]) When I inline the SVG it works fine: ![]([link])

### CASE-3808 · renderComponent() replace (recycled?) child nodes with wrong reference
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: This [pen]([link]) reproduces the bug: click 'Load some data', then click it again. The component renders ``` html <span>Still loading</span> ``` at beginning, then rerenders this(with an error): ``` html <div title="bag"> <!-- base --> <div> <!-- baseParent --> Banana <span class="pull-xs-right">1</span> <!-- initialBase --> </div> <div> Apple <span class="pull-xs-right">1.3</span> </div> </div> ``` The exception occurs at [`baseParent.replaceChild(base, initialBase)`]([link]), subsequent renderings also break. Firefox says: ``` HierarchyRequestError: Node cannot be inserted at the specified…

### CASE-3838 · Input values (and probably other similar edge cases) should diff with an actual value from DOM nodes
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍1 💬1 · closed · labels: bug
- **Excerpt**: Preact X: [link] React: [link]

### CASE-3844 · Boolean values not handled as expected for `popover` prop
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, react
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: **Describe the bug** The latest release adds the `popover` attribute with `boolean` as a supported type (see [link]][ref]). When setting this prop to a boolean value, I'd expect it to add or remove the `popover` attribute, but not set a value, like eg. the `disabled` prop. Instead it adds `popover="true"` or `popover="false"`, stringifying the boolean value, like `aria-` attributes. This results in a warning from Chrome that the value is not allowed. A workaround is to use the values `"auto"` and `undefined` to substitute for boolean true/false. Tested with Preact v10.22.0. **To Reproduce**…

### CASE-3852 · Cannot lazy load images in Firefox or Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, safari
- **Signals**: 👍3 💬32 · closed · labels: bug
- **Excerpt**: ### Describe the bug (I'm putting this first as I think it's important pretext, sincere apologies if this throws anyone off) FireFox and Safari have rather interesting behavior regarding setting the `src` property of an image element, in that the browser will attempt to fetch the media after a microtask, regardless of whether or not the element has been (or will be!) inserted into the DOM. This is rather simple to demonstrate: ```js const img = document.createElement('img'); img.src = '[link] ``` Using the Network pane of a browser's devtools, you'll see the immediate fetch of the image. [FF…

### CASE-3854 · Requiring "solid-js/web" on electron (with nodeIntegration) makes it think I'm on the server
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron
- **Signals**: 👍2 💬21 · closed · labels: downstream
- **Excerpt**: ### Describe the bug I want to use SolidJS in an Electron. Using `require('solid-js/web').isServer` returns `true`, which means I can't use `render` and other web-related code. I can work-around by requiring `solid-js/web/dist/web.cjs` but seems fragile... ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Inside an electron app with `nodeIntegration: true` try to require `solid-js/web`. The contents of `isServer` is `true` ### Expected behavior I expect `require('solid-js/web')` to always require "web" stuff, or at least have something like…

### CASE-3856 · Spread operator custom function called multiple times
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬17 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug when call spread with custom function, the function is called multiple times, when using version before 1.6.0 it's only run once. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Visit playground 2. Check console ### Expected behavior expected function only run once ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] ### Additional context _No response_

### CASE-3858 · [Astro] `createResource` results get mixed up when rendering server only components with Suspense
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 123, windows
- **Signals**: 👍0 💬14 · closed · labels: bug
- **Excerpt**: ### Describe the bug `resource.data()` is returning data from another resource, in another component ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open Page.tsx 2. See that `pageQuery` resolves to `'pageQuery API response'` in it's fetcher function, but when you check `pageQuery.data()`, it contains `"Component A API response"` ### Expected behavior This text is displayed > pageQuery.data: "pageQuery API response" ### Screenshots or Videos _No response_ ### Platform Windows, Chrome 123 ### Additional context @user: > It appear to happen because the data…

### CASE-3861 · Spread operator props bug 1.6.0
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, windows
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: ### Describe the bug When using a function in the spread object as props, It does not seem to work. See example for a better understanding. This used to work fine before 1.6.0. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Visit website 2. See that "This does not work?" Does not render. ### Expected behavior "This does not work?" should render but it is not. ### Screenshots or Videos _No response_ ### Platform - OS: Windows 11 - Browser: Chrome - Version: 1.6.0 ### Additional context _No response_

### CASE-3862 · <For> doesn't even shallow-diff objects
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: firefox, macos
- **Signals**: 👍0 💬14 · closed · labels: question
- **Excerpt**: ### Describe the bug When using <For> items are rerendered even though the input doesn't change if the value is an object ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to playground [link] 2. Check the console, see that the unchanging elements are being rerendered all the time ### Expected behavior Only the things that actually changed rerender, as per [link] ### Screenshots or Videos _No response_ ### Platform - OS: macOS 12.2 (21D49) - Browser: Firefox - Version: 101.0b9 (64-bit) ### Additional context _No response_

### CASE-3864 · Number input resets when typing period on Firefox 113
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox 113
- **Signals**: 👍1 💬13 · closed · labels: wontfix
- **Excerpt**: ### Describe the bug Number input resets when typing period on Firefox 113. Here is source code for minimal working example: ``` function App() { const [value, setValue] = createSignal(""); return ( <> <input type="number" value={value()} onInput={(event) => setValue(event.currentTarget.value)} /> <div>Current value: "{value()}"</div> </> ) } ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Run minimal working example or [open this page]([link]) 2. Focus on input 3. Type: "4", ".", "2" ### Expected behavior Input value should be "4.2" ### Screenshots or…

### CASE-3866 · Playground doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, desktop
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: In the README I tried the linked Playground: [link] In Chrome on desktop it stops at "Loading..." In Safari on desktop it loads the environment (code editor etc.) but the "Result" tab there stops at "Loading the Playground..."

### CASE-3867 · 2.0.0-rc.5 optimistic store resets when new data arrive
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: firefox, windows
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### Describe the bug Optimistic store that get new data while it already has an override resets it optimistic override revealing that data immediately. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open repro 2. Click button 3. Observe how it goes [1] [1,2] [1] [1,2] instead of just [1] [1,2]. ### Expected behavior The override should remain until the transition settles. ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Browser: Firefox ### Additional context _No response_

### CASE-3871 · mergeProps "assumes" Proxy support is available
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug Given a browser before Proxy is introduced (Chrome < 49) ```js export function mergeProps<T extends unknown[]>(...sources: T): MergeProps<T> { // [breaking && performance] //if (sources.length === 1) return sources[0] as any; let proxy = false; for (let i = 0; i < sources.length; i++) { const s = sources[i]; proxy = proxy || (!!s && $PROXY in (s as object)); sources[i] = typeof s === "function" ? ((proxy = true), createMemo(s as EffectFunction<unknown>)) : s; } if (proxy) { ``` If any of the sources has a function, Proxy will be used, even if the system doesn't support…

### CASE-3875 · HTML Progress Doesn't work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬11 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Works with DOM API: [link] Doesn't work with Solid: [link] Click Make Indeterminate a few times, should be able to toggle on and off, doesnt work on Solid ### Your Example Website or App Above ### Steps to Reproduce the Bug or Issue Click button ### Expected behavior Works like DOM API ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] Latest ### Additional context _No response_

### CASE-3889 · ssr: cannot find module 'path' (tslint)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: firefox, linux
- **Signals**: 👍0 💬9 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug I try to import path in tsx file to run some logic in backend But it returned error cannot find module 'path' (tslint) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue import path in tsx file ### Expected behavior error: cannot find module 'path' (tslint) ### Screenshots or Videos _No response_ ### Platform - OS: Linux - Browser: Firefox ### Additional context _No response_

### CASE-3890 · Video HTML tag shows black screen in iOS safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, safari 2, ios, ios14
- **Signals**: 👍0 💬9 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug with solidjs video shows black screen when I try to stream video from camera. See readme here [link] for details ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open this URL [link] in iOS Safari 2. Click on rectangle with red broder 3. You would see black rectangle ### Expected behavior 1. You would see video instead of black rectangles ### Screenshots or Videos ![]([link]) ### Platform - OS: iOS14 - Browser: Safari - Version: ... ### Additional context _No response_

### CASE-3892 · `createUniqueId` doesn't work with `document.querySelector`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug When querying an element that has an id generated by `createUniqueId` via `document.querySelector` the query fail because of the ":" in the id. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the example link 2. Open the browser console 3. See the error `DOMException: Failed to execute 'querySelector' on 'Document': '#cl:0' is not a valid selector.` ### Expected behavior It should perform the query ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] -…

### CASE-3893 · Solid imports SSR bundle when using `generate: "universal"` in node environment
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: android
- **Signals**: 👍0 💬9 · closed · labels: downstream
- **Excerpt**: **Describe the bug** `babel-preset-solid` pruduces server bundle when using universal renderer. **To Reproduce** Provide a code snippet and steps to reproduce the behavior: You can clone my repo and run with nativescript ('ns run android'). You will see that transpiled universal.js at node_modules has imports from 'solid-js' that referring to `dist/server.js`. [link] **Expected behavior** It should be configurable somehow or browser version should be selected when using `generate: "universal"` **Reproduction** If applicable, add a link to a simple reproduction on a site like [link]…

### CASE-3894 · [Solid Query] Hydration Mismatch error
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome 123, windows
- **Signals**: 👍1 💬8 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug Getting an error: > Error: Hydration Mismatch. Unable to find DOM nodes for hydration key: s00-0-0-0-0-0-0-0-0-1-3 ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open console 2. See Hydration Mismatch Error ### Expected behavior Blank page is displayed, with no errors in console. ### Screenshots or Videos _No response_ ### Platform Windows, Chrome 123 ### Additional context _No response_

### CASE-3898 · Uncaught (in promise) TypeError: Cannot use 'in' operator to search for 'data' in undefined
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, firefox
- **Signals**: 👍0 💬8 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug When server-created `createResource` got read after getting resolved, `Uncaught (in promise) TypeError: Cannot use 'in' operator to search for 'data' in undefined` error happens on the server. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Clone the repo with `feat/ssr-defer` branch 2. `pnpm i`, `pnpm build`, `cd examples/ssr`, `pnpm dev` 3. Open the index route (with Firefox, as mentioned below) 4. Refresh the page until the page is broken. (no content after `Additional data...` fallback goes away) Found that this bug only happens…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3803 · useEffect is not called when tab is not focused
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: I found a difference from react :grimacing:. It looks like Preact isn't calling components' `useEffect` callback when that tab isn't focused. I've been looking into why this is, but I haven't been able to figure it out yet. I created codesandboxes to compare the React and Preact behaviors: [link] [link] [link] [link] How to reproduce the issue with the Preact sandbox: 1. [Open the sandbox link]([link]) 2. Open devtools 3. Refresh the page and as quickly as possible switch away from that tab, before it loads. 4. Wait for ~10 seconds 5. Go back to the tab 6. **Expected behavior** - Preact…

### CASE-3811 · iframe is reloaded, when it's a children props in WrapperComponent, and some siblings before children is removed
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Nearly the same as [link]][ref] But this issue only happends in v10.16.0, works well in 10.15.1 The difference from the old issue is that, I pass this `iframe` element with children props into another `WrapperComponent` And if there is any node removed before the `children`, the `iframe`, which is inside the `children` will get reloaded **To Reproduce** [link] Steps to reproduce the behavior: 1. Go to '[link] 2. Click on Button 'Focus on me' 3. The iframe is getting reloaded when release the button…

### CASE-3815 · null/undefined property logic can result in unexpected behavior with custom elements
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬2 · closed
- **Excerpt**: **Describe the bug** When preact is reconciling vdom to the live dom for a property that's defined on the target element, it goes through this code: <pre> else if ( name !== 'href' && name !== 'list' && name !== 'form' && // Default value in browsers is `-1` and an empty string is // cast to `0` instead name !== 'tabIndex' && name !== 'download' && name in dom ) { try { dom[name] = value == null ? '' : value; // labelled break is 1b smaller here than a return statement (sorry) break o; } catch (e) {} }` </pre> Namely, it coerces null/undefined values to the empty string before doing a…

### CASE-3818 · [10.0.0-rc.1] Component with conditional render result forces remount of siblings
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Codepen: <[link]> Certain wrapping component causes preact to remount all subsequent siblings without calling any lifecycle methods. However, when I inline the same logic (`{this.props.open && <Modal {...this.props} />}`), it works correctly. ```javascript class Wrapper extends React.Component { render() { if (this.props.open) { return <Modal {...this.props} />; } return null; } } ``` From the codepen you can see that the button before the wrapper component preserves focus, but the button after does not. This happens because after unmounting Wrapper and returning focus, preact temporarily…

### CASE-3825 · Input loses focus
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug/compat/has fix
- **Excerpt**: Codepen: [link] (write something in the input box to see the effect) I tested a similar scenario with React and it works correctly. Apparently Preact detaches the text input during reconciliation, losing all focus info.

### CASE-3827 · [preact/compat] ant-design - Focus doesn't shift to Dropdown menu
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬1 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Some time ago I found and reported a bug in antd: [link] Antd maintainers fixed that bug in version 5.6.2. So the bug is no longer reproducible when I use `react`: [link] But when I use `preact`, the bug is still exists: [link] Note: antd fix adds `React.forwartRef` to some component. Maybe this will help to fix the bug [link] **To Reproduce** [link] Steps to reproduce the behavior: 1. Click on the three dot icon to open the menu 2. Try to navigate through the menu using the keyboard, use the arrow…

### CASE-3839 · createRef is not compatible with `preact/debug`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬1 · closed · labels: bug/has fix
- **Excerpt**: Returns this error: ``` Component's "ref" property should be a function, but [object] passed <input type="text" ref="[object Object]" /> Object.options.vnode [link] h [link] ``` The error checking is too strict if debug mode is enabled: [link] Repro code: [link] ```js import { Component, createRef, render } from "preact"; import "preact/debug"; export default class App extends Component { input = createRef(); render() { return ( <div> <input type="text" ref={this.input} /> <button type="button" onClick={this.focus}> Focus </button> </div> ); } focus = () => { this.input.current.focus(); }; }…

### CASE-3841 · Input losing focus
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: Input losing focus after insert elements before it. Example: ```javascript export class TodoList extends Component { state = { todos: [], text: '' }; setText = e => { this.setState({ text: e.target.value }); }; addTodo = (e) => { if (e.keyCode === 13) { let { todos, text } = this.state; todos = todos.concat({ text }); this.setState({ todos, text: '' }); } }; render({ }, { todos, text }) { return ( <div onKeyDown={ this.addTodo }> { todos.map( todo => (<div>{todo.text}</div> )) } <input value={text} onInput={this.setText} /> </div> ); } } ```

### CASE-3846 · "tabIndex" attribute is set to "0" instead of being removed
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬0 · closed · labels: bug
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolve the issue **Describe the bug** Hello! I found an issue with resetting (setting to `undefined`) of the `tabIndex` attribute. If I try to set `undefined` as a value for `tabindex` Preact sets its value to "0" instead of removing the attribute. **To Reproduce** Steps to reproduce the behavior: 1. Go to [link] 2. Open DevTools and check the `tabindex` attribute on the "Test button" node 3. Click on "Switch tabindex" button 4. Check the `tabindex` attribute on the "Test button" node again **Expected behavior** Attribute `tabindex` should…

### CASE-3859 · `createMutable` intensive testing
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍4 💬14 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I've written a mutable primitive for my lib pota, collected tests for it from solid, oby, vue, + additions/variations I made up. I then ran the tests against the implementations on our libs: solid, oby and pota, to highlight the differences and possible bugs. There are 240~ tests, I will list below the failing test for solid, around 35~. "by design" implementation details that fail won't count. 1. object returned by function call in mutable is not observed. [link] - ref 10 mutation: returned object by function call is mutable 2. writing to an object with setter/getter…

### CASE-3860 · Setting properties to the unwrapped value of a store doesn't always propagate into the store
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Describe the bug Let's go through an example. if we define an object on a variable like so: ```javascript let object = {}; ``` And then we pass this value into the `createStore`: ```javascript const [store, setStore] = createStore(object) ``` Now, since Solid does keep the reference to the object intact, such that `unwrap(store) === object` is true, I would expect that if we were to set a value inside of `object` this value would propagate under all circumstances into the store, but there is one where it doesn't. ```javascript setStore('fake item', 'fake id'); object['fake item'] =…

### CASE-3876 · For component does not preserve input focus
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug If you use the For component for iterating over array coming from signal/resource and rendering inputs, focus is lost when source signal/resource si mutated. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue First input is normal and typing inside works as expected. Second row of inputs is rendered by For and focus is lost during typing. Third row of inputs is rendered by Index, focus is not lost, but Index brings its own issues. ### Expected behavior I would expect to not loose focus when typing inside the second row of inputs in the…

### CASE-3880 · Cannot properly bind value to Select when option value comes from a property of an object
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Describe the bug when using a select element and assigning value of options like <option value={Colors.Red}>Red</option> the select will not have the correct value even if the select value is the same as the option value ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. create a <select> 2. give the select a value 3. create 1 or more options elements 4. assign each option element a value from another object like `const Color = {Red:1, Blue:2}` ### Expected behavior As user I expect to be able to bind option values to any value from any variable or object…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3804 · 10.0.0-alpha.0: shouldComponentUpdate blocks updating component as well as render.
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: Example: props is not updated permanently while shouldComponentUpdate returns false ```jsx import { render, Component } from "preact"; class A extends Component { state = { a: 0 }; componentDidMount() { this.setState({ a: 1 }); // update props } render() { return <B a={this.state.a} />; } } class B extends Component { state = { now: "---" }; timer = 0; updateState = () => { this.setState({ now: new Date().toString() }); }; componentDidMount() { this.timer = setInterval(this.updateState, 1000); } componentWillUnmount() { clearInterval(this.timer); } shouldComponentUpdate(nextProps, nextState)…

### CASE-3822 · componentWillUnmount() not called when component is replaced with plain node of same type
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/in X
- **Excerpt**: If a component is replaced with a plain element with the same tag name, the previously rendered element of the component is diffed correctly, but not unmounted. See this [codepen]([link]): ```.js class MyComponent extends Component { componentDidMount() { console.log("Component mounted."); } componentWillUnmount() { console.log("Component unmounted"); } render() { return (<div>My Component</div>); } } // Mount the top-level component to the DOM: var mount = document.getElementById("mount"); render(<MyComponent />, document.body, mount); // When replacing with a non-component with the same //…

### CASE-3824 · Lifecycle methods with preact.render
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug/duplicate
- **Excerpt**: Is it ok that when I replace a component by `preact.render()` lifecycle methods like `componentWillUnmount` are not fired? Let's say we have a component: ```jsx class A extends Component { componentDidMount() { console.log('mount'); } componentWillUnmount() { console.log('unmount'); } render() { return <div>Hello</div>; } } ``` ### In React: ```jsx ReactDOM.render(<A />, document.body.firstChild) // 'mount' ReactDOM.render(<div />, document.body.firstChild) // 'unmount' ReactDOM.render(<A />, document.body.firstChild) // 'mount' ``` 👉 [repl]([link]) ### In Preact: ```jsx render(<A />,…

### CASE-3833 · Strange ref assign order
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: I'm trying to use same `ref` in two conditional rendering components like this. ```javascript function App() { ... return state ? ( <div key="a"> <div ref={ref} /> </div> ) : ( <div key="b"> <div ref={ref} /> </div> ); } ``` When state changes from `true` to `false`, it seems that the first unmounting div's ref assignment happens after the second mounting div, which makes `ref.current = null`. I've created a sandbox to reproduce this issue. [link]

### CASE-3835 · [10.0.0-alpha.4] preact/compat createPortal does not perform like React
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: For preact 8 I successfully used preact-portal to render outside my root node. In preactX, I'd like to switch over to the createPortal() API; but it hasn't worked for me in either X or 8.x. I had enough time today to construct a repo that demonstrates that the portal content does not remove on unmount. you can run the code under either react or preactX and observe the difference. [link]

### CASE-3840 · ComponentWillUnmount throwing error, when refering to a DOM node
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/important
- **Excerpt**: # Description ## 1. When a component is replaced with another one, the DOM is updated, before the `componentWillUnmount` event is called. This prevents the execution of scripts, depending on the DOM Elements of the component. I created an [example]([link]). When you change from the Home tab to another one, you should get an alert, with the result of the shown query. Inside the console, I log the trace of the call. ## 2. Additionally the `componentWillUnmount` is iterated in a top-down approach, so if a child of a component has a `componentWillUnmount` set, it's fired, when the containing…

### CASE-3842 · Race condition causes failure in render queue
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬1 · closed · labels: bug/important
- **Excerpt**: I've got a project where part of my app is structured like the following. That parent object has a onMouseMove handler that calculates new data that is rendered in the children. The children themselves can re-render because it is auto-sizing the rect element to the size of the text element. What is happening, is that very consistently after about 800 mouse events are fired, preact stops calling the render function on my components entirely. I dug around, and it turns out it's because it is hitting this line: [link] When it fails, the component already has the `_dirty` flag set to true, so it…

### CASE-3851 · render() can fail to unmount top-level components
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug/important/has fix
- **Excerpt**: As found by @user 🙇

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3806 · Rerender Issue with React Leaflet In IE.
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍0 💬3 · closed · labels: bug/duplicate
- **Excerpt**: I used the following code in Preact. ``` import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet' import { h, Component } from "preact"; import "leaflet/dist/leaflet.css"; export default class SimpleExample extends Component { constructor() { super() this.state = { lat: 51.505, lng: -0.09, zoom: 13 } } render() { const position = [this.state.lat, this.state.lng]; return ( <Map center={position} zoom={this.state.zoom}> <TileLayer attribution='&copy; <a href="[link]>OpenStreetMap</a> contributors' url='[link] /> <ZoomControl position="topright" /> <Marker…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3809 · diffAttributes() skips updates in some cases
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug/important/has fix
- **Excerpt**: The DOM properties "min" and "max" of the input element are initialized as empty strings. Since [diffAttributes() uses weak comparison]([link]) when checking the new value against the old it fails to update either min or max when 0 is passed as value.

### CASE-3812 · [regression] Preact 10.14.0 breaks selection offset on controlled text inputs
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬2 · closed · labels: bug/compat
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue __(it does not)__ **Describe the bug** A clear and concise description of what the bug is. After upgrading to Preact 10.14.0, for controlled text inputs, the selection is reset in certain cases. **To Reproduce** Steps to reproduce the behavior: 1. Go to [link] 2. Click on the text input box (after waiting for it to render) 3. Type "abc" 4. Move the cursor between "a" and "b" 5. Press Backspace **Expected behavior** What should have happened when following the steps above? The "a" should be deleted leaving "bc" but with…

### CASE-3813 · 'Typing Events' documentation example doesn't work anymore
- **Principles**: P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍3 💬2 · closed · labels: types
- **Excerpt**: In the [Typing Events documentation]([link]), it shows using a typed `this` parameter, but when I test that approach, it results in a TypeScript error: [Example on the TypeScript playground]([link]). I suspect the documentation is just a bit out of date relative to the current version of Preact, which uses `JSX.TargetedEvent`. (I have to admit being uncertain enough of how to type event objects -- particularly ones for `input` or `change` -- that I've [asked a question on SO about it]([link]).) Related issues: [ref], [ref] Here's the code from the documentation: ```lang-typescript export…

### CASE-3816 · Preact/compat - StrictMode should call shouldComponentUpdate twice in DEV
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: wontfix/debug
- **Excerpt**: ### Reproduction * Preact [link] * React [link] ### Steps to reproduce Type "a" in the email input. ### Expected Behavior Console log shows the value "a" twice. ### Actual Behavior Console log shows the value "a" once. ### Note React added this change in the following PR: [link]

### CASE-3820 · 10.0.0-alpha.1 - <select> value is ignored
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: The `value` prop of a `<select>` seems to be ignored with 10.0.0-alpha.1. In this example, the initial state should be used to select the second option on mounting. Instead the first option is selected. ```jsx import { Component, render } from "preact"; class App extends Component { state = { text: "B" }; render() { return ( <div> {this.state.text} <select onChange={e => this.setState({ text: e.target.value }) } value={this.state.text} > <option value="A">Option A</option> <option value="B">Option B</option> <option value="C">Option C</option> </select> </div> ); } } render(<App />,…

### CASE-3823 · ref() called only once with a DOM element on conditional rendering
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬2 · closed · labels: bug/The Wreckoning/in X
- **Excerpt**: I'm trying to get a reference to an input displayed in a modal dialog in an app that looks more or less like this: ```jsx class App extends Component { render() { const { open } = this.state return ( <div> { // ... more code } { open ? ( <Overlay> <input type="file" ref={this.refInput} /> </Overlay> ) : null } { // ... more code } </div> ) } refInput = (el) => { console.log('refInput', el) } } ``` When the `open` flag is set to `true` for the first time, the `refInput` is called with a DOM element as expected. Now, when the `open` flag is set to `false`, the `refInput` is called with `null` -…

### CASE-3830 · Regex used to convert oninput to oninputcapture is too broad
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬1 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** The change in [link]][ref] was intended to convert oninput to oninputCapture. However, because it is using /^oninput/, it actually ends up converting oninput* to oninputCapture. This breaks functionality for custom elements that might be exposing CustomEvents that happen to start with "input". i.e. `<my-custom-element oninputAction={...}/> ` used to call addEventListener('inputAction', ...), but will now add a capture listener for the 'input' event. **To Reproduce** See above. **Expected behavior**…

### CASE-3845 · `defaultValue` incorrectly (?) diffed against prerendered HTML
- **Principles**: P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍2 💬0 · closed · labels: bug
- **Excerpt**: - [X] Check if updating to the latest Preact version resolves the issue ## Describe the bug Rendering an input with `defaultValue` set runs into a bit of an issue with prerendered HTML as the HTML element will have `value` set (sincce there's no `defaultValue` attribute), but when Preact goes to diff it against the corresponding JS, it will clear out `value` and set `defaultValue` on the element. If only `defaultValue` were set this wouldn't be an issue, but explicitly clearing out `value` means `defaultValue` doesn't do much of anything (to my knowledge). Fiddled with it a bit, but haven't…

### CASE-3849 · [State Hooks] Should not re-render when the input value is same
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬0 · closed · labels: bug/beginner-friendly
- **Excerpt**: React docs said <[link]>: ``` Bailing out of a state update If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.) ``` Preact: [link] React: [link]

### CASE-3874 · Issue with form DOM
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### Describe the bug I am unable to add a div when I have a form who is parent. Uncaught TypeError: can't access property "firstChild", _el$4 is null Settings index.tsx:14 Settings index.tsx:40 HMRComp @user:25 untrack dev.js:435 HMRComp @user:25 runComputation dev.js:691 updateComputation dev.js:674 createMemo dev.js:251 HMRComp @user:22 c dev.js:545 untrack dev.js:435 c dev.js:541 runComputation dev.js:691 updateComputation dev.js:674 devComponent dev.js:552 createComponent dev.js:1263 App App.tsx:8 HMRComp @user:25 untrack dev.js:435 HMRComp @user:25 runComputation dev.js:691…

### CASE-3877 · Passing props to dynamic/injected children (conditionally?)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: question
- **Excerpt**: **Describe the bug** Not clear from docs how to pass attributes such as a ref to multiple (or conditional) children ```tsx import { render, } from "solid-js/web"; function CounterContainer(props) { // how do I pass header into my Header child? how do I pass select props into all children? // using For? return ( <div class="container"> {props.children} </div> ); } function Header(props) { return <h2>{props.header}</h2>; } function App() { return ( <> <CounterContainer header="my header"><Header /></CounterContainer> </> ); } render(() => <App />, document.getElementById("app")); ``` Is it…

### CASE-3881 · Spreads: Property new/old value equality check isn't done against the DOM value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug If, on the playgrround example, the line containing the spread gets removed, the `value` property of the input field will be assigned as follows: ```js _$effect(() => _el$.value = get()); ``` This will have the desired effect. If the spread line doesn't get removed the `value` property will be setted like this: ```js _$spread(_el$, _$mergeProps({ get value() { return get(); } }, {}), false, false); ``` The `spread()` function sets properties of elements using `assignProp()`, which won't change the value of the property on the actual element if its old value is the same as…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3810 · RFC: Hydration 2.0
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍12 💬2 · closed · labels: feature request
- **Excerpt**: With Streaming Server Side Chunks as well as rendering to string asynchronously becoming more popular it's becoming apparent that our hydration algorithm isn't quite sufficient anymore. There's a set way in which it will behave well for these resumed hydration cases but a lot of innocent-looking footguns that can lead to opting out of hydration or in some cases UI bugs. The goal of hydration is to re-use the HTML that is returned to us from the server and just attach the event-listeners so the UI is usable to the consumer again, this is the case for simple full-on hydration. We later on…

### CASE-3834 · Summoning the holy 2-phase commit renderer
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍9 💬1 · open · labels: 2-phase-commit
- **Excerpt**: _This is more a less a scratchpad of random thoughts and experiments related to that so far. I thought it'd be cool to do a bit more work in the open :tada:_ ## Motivation We've been talking a lot internally about possible directions we could explore when it comes to our renderer. One of those paths that has come up from time to time is to split rendering into 2 distinct phases: Diff and Commit. Currently our renderer applies the changes as they are diffed. Make no mistake, this has worked really great for us so far! With concepts like `Suspense` and `Progressive Hydration` there is a need to…

### CASE-3843 · Rendering alternate high-order child may immediately unmount the new child
- **Principles**: P-F4, P-F5, P-H3 · **Env**: react, webpack
- **Signals**: 👍0 💬1 · closed · labels: bug/has fix
- **Excerpt**: Migrating from developit/preact-boilerplate[ref] - this is noticed when a route component is hot-reloaded using Webpack HMR and `preact-router`. Since the route is a high-order child of `Router` and generally returns the same `nodeName` from `render()`, the recycler attempts to reclaim the previous `base` element, despite it having been just reassigned as the `base` of the newly rendered replacement component. This bug was introduced in `6.0.0` as part of work to optimize initial rendering when picking up from SSR. /cc @user

### CASE-3850 · 10.0.0-alpha.2 - Hydrate leaves class empty when using className
- **Principles**: P-F4 · **Env**: ios
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: When doing SSR I found that all class attributes on my elements are empty once JS loads. It happens with both the `hydrate` and `render` function when there's already something in the DOM. When using `class` instead of `className` it works! See the [codesandbox]([link]) for multiple scenarios (when it works and when it doesn't).

### CASE-3855 · SSR: Cannot read properties of undefined (reading 'cloneNode') because getNextElement() is called without arguments
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug Hi, I'm working on getting SSR and hydration to work... I'm not using `solid-start` because I have my own simple project for doing SSG only and for learning purposes. I started over and over again with like 4 to 5 attempts but always end up with the same error and now I think it's less likely that it's only me doing something wrong here...? What I actually do is building and bundling code using `esbuild`, and of course with a Babel approach using `esbuild-plugin-solid` to make sure the JSX and SSR/DOM code generation works correctly... (the dependency uses standard solid…

### CASE-3857 · [SSR] Seroval can't serialize axios error in createResource and breaks the app
- **Principles**: P-F4 · **Env**: ios
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### Describe the bug When `createResource` throws some specific error (in this case it's axios error) that seroval can't handle, the app gets broken with the following error message: "Error: Cannot serialize function without reference ID." ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 0. This bugs can only be reproduced when using SSR. 1. Go to the terminal and observe the described error message. ### Expected behavior `createResource` should be able to handle any error no matter the type and what place this error was thrown from. If the error can't be…

### CASE-3863 · [Bug?]: Hydration error when Element is passed as a prop
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 When passing an element as a prop, and then conditionally rendering it, Solid fails to hydrate due to key mismatch. Example: ```tsx // Parent <Show when={!!props.slot}><div class="p-2">{props.slot}</div></Show> // usage <Parent slot={<Child />} /> ``` ### Expected behavior 🤔 No hydration failure. ### Steps to reproduce 🕹 Steps: 1. Create element that renders `<>{props.slot}</>` 2. Get hydration failure [link] ### Context 🔦 _No response_ ### Your…

### CASE-3872 · [Bug?]: hydration mismatch on ssr, and nested ternaries in jsx with objects or signals
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 With SSR, this gives a hydration error: ```tsx export default function App() { const obj1 = { prop: true, }; const obj2 = { prop: true, }; return <>{obj1.prop ? obj2.prop ? <div>Output</div> : <></> : <></>}</>; } ``` The error also exist with signals instead of plain objects ```tsx import { createSignal } from 'solid-js'; export default function App() { const [signal1, setSignal1] = createSignal(true); const [signal2, setSignal2] = createSignal(true);…

### CASE-3879 · Data is being refetched on the client when the user interacts during streaming SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: ### Describe the bug Here in this example, I'm performing streaming SSR with `renderToStream()`, fetching data using `createResource`, and using `<Suspense>` to display a fallback placeholder. I want to test `Progressive Rendering` with solidjs. While the page is loading and rendering, the server is fetching the data, the client displays the `Loading ...`, we click on the `counter` button and it's interactive already. But after the server finishes fetching the data, the `Loading ...` (Suspense boundary) disappears, and then the client starts fetching that data again. There may currently be…

### CASE-3883 · Hydration warnings rendering table
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug I'm rendering an HTML table, using a bunch of thin wrapper components ("Table" vs "table"). I'm getting a large number of hydration errors - basically one for every table cell. In fact, if you run this code, you'll see the correct table briefly for a moment, and then about 100ms later it gets blanked out. Client-side rendering works fine. I've winnowed down the wrappers as much as I can, there is nothing particularly special or weird about them. The only code that is left in each wrapper is the code to forward the class name from the wrapper to the native element, and the…

### CASE-3887 · NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node [ref]
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: ### Describe the bug Here's a reproducer [link] In the reproducer I've made two success samples demonstrating the same library succeeding with a little source code modification even when both source code samples are correct, This is an error with solidjs itself. You'll notice that If you put text or any element above the errored component the error goes away, I've demonstrated that using a success file. The error only occurs in ssr mode ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue `yarn install` the repo `yarn run start` the repo navigate to `error` page…

### CASE-3888 · Async results do not update state when SSR+Streaming
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the bug My local state object, created with `createStore()` is not being updated consistently when async content is streamed to the client. Note, the issue is only present if content is streamed, normal SSR will not have the issue. (More details in the readme of the example repo). ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. pnpm install 2. pnpm build 3. pnpm start 4. Wait a few seconds for the stream to resolve 5. Note the input fields are updated with the results of the api call, but the "Hello ..." and "Your id is ..." text is not updated.…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3817 · Uncontrolled textarea
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬2 · closed · labels: bug/has fix
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: 🗣 For help with Preact, ask on Slack: [link] ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> this issue kinda like [ref] same code, you can not clear the value of textarea under preact, but react can React - ✅ [link] Preact - ❌ [link]…

### CASE-3848 · Preact compat leaks class properties in components
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍3 💬0 · closed
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: 🗣 For help with Preact, ask on Slack: [link] ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> ### Reproduction I made a codesandbox for preact-compat: [link] <!-- If possible, please provide a CodeSandbox/Codepen that demonstrates the…

### CASE-3895 · el.clientWidth returns 0 in ref function.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: chrome 120, windows
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug There is a [code snippets.]([link]) When I try to get dom clientWidth in ref function. I found it always return 0. Is the ref function called in a wrong time or I use it in a wrong way? Thanks for help. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Waiting for the log called in ref function. It shows 0. ### Expected behavior I expected el.clientWidth return the div's clientWidth as it shows but i got 0. ### Platform OS: Windows11 Browser: Chrome 120.0.6099.130 SolidJS Version: 1.8.8 ### Additional context _No response_

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3819 · [10.0.0-beta.2] preact/compat createPortal does not perform like React
- **Principles**: P-A5, P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬2 · closed · labels: bug
- **Excerpt**: Since [ref] got fixed; I figured I'd give it another try. Hit this snag, the empty portal render leaves behind the same not-unmounted portal render as the not rendered version did. I updated my github example to demonstrate: [link]

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3821 · 10.0.0-alpha.0 - Returning undefined redraws the component tree
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: Thank you for the exciting major release! I've noticed a behavior difference between Preact 8 and X. In Preact 8, returning nothing (undefined) from a render method bails with no noticeable negatives. [link] In Preact X, doing the same thing redraws the component tree (made visible with a CSS animation). [link] Strangely, moving the component that returns undefined to the bottom of the markup in Preact X hides the issue. [link]

### CASE-3829 · @user/plugin-transform-react-jsx-source warning appears regardless of configuration
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍8 💬1 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Throwing an error within a Preact application with `preact/debug` enabled always logs the following warning in the dev console: ``` Add @user/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons. ``` Adding `@user/plugin-transform-react-jsx-source` to my babel configuration does not stop the warning. This warning is logged from [here]([link]]/blob/master/debug/src/component-stack.js#L92-L94)…

### CASE-3831 · Issue with CSSTransition from react-transition-group in production build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue. **Describe the bug:** Hello, I'm unable to solve issue with `CSSTransition` from [react-transition-group]([link]). While using dev-server, everything works as expected. When Preact App is built, [react-transition-group]([link]) is not triggering enter transition (although I can see same classes on element as with dev-server), while exit transition works as expected. Possible duplicate of [link]][ref], which is nearly 3 years old. Thanks. **To Reproduce:** ```tsx /* transition.tsx */ import { FunctionalComponent, h } from…

### CASE-3832 · options.requestAnimationFrame signature is incorrect
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript
- **Signals**: 👍2 💬1 · closed · labels: types/pr-welcome
- **Excerpt**: I am using **preact** in a _TypeScript_ project. According to the [guide]([link]), the **options.requestAnimationFrame** signature is `(callback: () => void) => void`. However, in the _index.d.ts_ file, **options.requestAnimationFrame** is declared as ``` interface Options { ... requestAnimationFrame?: typeof requestAnimationFrame; ... } ``` where the signature match the one from the default [requestAnimationFrame]([link]). In the current case, it looks like `(time: number) => number`. I would like to know which signature **options.requestAnimationFrame** should be. To me, `(callback: () =>…

### CASE-3836 · [Compat] 10.0.0-alpha.0 - Component.prototype.isReactComponent is undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: It looks like the `isReactComponent` property is missing from the new `compat` bundle, so I'm unable to run components that use `react-transition-group` because of the dependency on `react-lifecycles-compat` which will error out if it cannot find a React component: [link] Even though `isReactComponent` is not part of the public API it should probably be added back for compat. To resolve this we could probably copy from the existing `preact-compat`: [link]

### CASE-3847 · New JSX runtime includes ref attributes in the DOM
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍2 💬0 · closed
- **Excerpt**: Versions: [email] @user/[email] @user/[email] ### Reproduction ```js import {render} from "preact"; import {useRef} from "preact/hooks"; const MyComponent = () => { const myRef = useRef(null); return <div ref={myRef}>Look for ref in the DOM</div>; } render(<MyComponent/>, document.getElementById('root')); ``` See complete example at: [link] ### Steps to reproduce 1. Run the example making sure it uses the new JSX transform: ```js presets: [ ['@user/react', {useBuiltIns: true, runtime: 'automatic'}], ], ``` 2. Open the browser development tools and look for the `div` generated by the…

### CASE-3884 · Using transitions with suspense and @user/solid-query breaks reactivity.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: ### Describe the bug Using an asynchronous resource with a transition & suspense results in parts of the UI using the "new" state where others are stuck with the old one. However, it gets even worse if you don't use the `isTransitioning` accessor from `useTransition`, in which case the suspended view never resolves. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Issue A: 1. Click on the 'Show' button and wait for the promise to resolve 2. See that the button still states `Show`, however it should display `Hide` Issue B: 1. Comment out line 40: `…

### CASE-3886 · createMemo sometimes returns undefined when called during a transition
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: macos
- **Signals**: 👍1 💬9 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug In some cases, `createMemo` is returning `undefined` during navigation transitions. We've observed this mainly from using Kobalte components in our main route that gets navigated to after signing in, which happens in a transition. I don't have a small reproduction yet but will try put one together eventually. ### Your Example Website or App todo ### Steps to Reproduce the Bug or Issue todo ### Expected behavior The result of the memo should be calculated and returned instead of undefined ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: N/A -…

