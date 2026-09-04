# Case Chunk 007 — Round 7

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1601 · [React 19] useTransition()'s pending state does not go back to false (revision 94eed63c49-20240425)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍2 💬9 · closed · labels: Type: Bug/Component: Reconciler/React 19
- **Excerpt**: ## Summary I am excited to start using React v19 as it has so many features and QoL improvements I've been waiting for! There is a bug (new bug comparing to v18.2.0) that I found while reproducing [link]][ref]. When using `useTransition()` with `use()`, `pending` flag of transition correctly becomes `true` in the beginning, but doesn't go back to `false` after transition is complete, which means any pending state artifacts in the UI remain visible. Repository for reproducing: [link] Basic code (since the repo contains more than just this bug): ```ts function SimpleAsyncFlow() { // this state…

### CASE-1609 · Bug: Concurrent mode does not improve page jank
- **Principles**: P-D1, P-D2, P-D3, P-H2, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.0.0 ## Steps To Reproduce 1. Open web page [link] 2. Enter number 2 on the input ## The current behavior Look how the FPS at top left corner decrease to a low number (depending on your CPU, you can increase the list length if you don't see low FPS) ## The expected behavior The FPS remain stable on 60 FPS because rendering of the long list is wrapped in startTransition so React should give preference to not produce page jank. And do the rendering with less priority. Web page is based on this code: [link] I know that using react-virtualized, for example, you can overcome…

### CASE-1620 · Bug: TypeError: Object is not a function or its return value is not iterable (0.0.0-experimental-7b84dbd16)
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: I am playing around with concurrent mode and get this error when calling useTransition. Has this function been removed or renamed? React version: 0.0.0-experimental-7b84dbd16 ## Steps To Reproduce 1. Use unstable_createRoot in index.js to enable concurrent mode 2. import useTransition from react in App.js 2. Try and call useTransition like this const [startTransition, isPending] = useTransition({ timeoutMs: 3000, }); Link to code example: I don't have one ## The current behavior ![image]([link]) ![image]([link]) ## The expected behavior I was trying to test transitions in concurrent mode so I…

### CASE-1621 · Feature request: A useLayoutEffect with read/write batching across a tree
- **Principles**: P-D1, P-D2, P-D3, P-H2, P-H3 · **Env**: unspecified
- **Signals**: 👍37 💬9 · open · labels: Type: Feature Request/Component: Reconciler/Component: Hooks
- **Excerpt**: Today, `useLayoutEffect` can be used for synchronous read/writes across the DOM. ```javascript useLayoutEffect(() => { // Write ref.current.style.transform = "" // Read const box = ref.current.getBoundingClientRect() }) ``` For a single instance of a single component, this works well. But if this code is repeated or reused anywhere in the tree, we trigger [layout thrashing]([link]). The severity of the layout thrashing scales linearly with the number of hooks/components featuring either this code or code like it. Hooks and components are designed to be composable, yet it's this trivial to…

### CASE-1626 · Delay setting useTransition isPending to true until JND
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: Type: Enhancement/Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: **Do you want to request a feature or report a bug?** Maybe a feature? When using Suspense and useTransition, the isPending of useTransition is immediately set to true. I want to show a spinner when a transition is still pending, but showing it immediately results in a flashing spinner when the underlying promise resolves very fast. This is not a nice experience. Is there a useTransition suspense option to delay the isPending indicator? I want to prevent the spinner from showing if the transition completes in for example 100ms.

### CASE-1633 · When calling a useTransition startTransition callback outside of event handlers, isPending is never set to true
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Component: Concurrent Features
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** `isPending` is never set to true when calling `startTransition` within `useEffect`, but it *does* work properly when within a `useLayoutEffect`. [link] Here's the correct behavior (accomplished via `useLayoutEffect`): ![good]([link]) Here's the incorrect behavior (via `useEffect`): ![bad]([link]) Note the difference is that the opacity never changes to 0.4 (which is determined based on the `isPending` state). **What is the expected behavior?** I expect them to both behave the same (at least as far…

### CASE-1652 · Show culprit in `Cannot update during an existing state transition...` ?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: Type: Feature Request/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *Feature.* **What is the current behavior?** We are probably all familiar with the following message. ``` bundle.js:1 Warning: Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`. ``` For those who never came across this message, it can be created simply by mounting the following component. ```js class UpdateDuringRender extends…

### CASE-1660 · External packages not transforming `process.env.NODE_ENV`
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** `process.env.NODE_ENV` checks are being shipped to the browser. **What is the expected behavior?** In React, there is a browserify transform that converts `process.env.NODE_ENV` to the actual environment variable. In `package.json` of React: ``` "browserify": { "transform": [ "loose-envify" ] } ``` **Packages** * [x] prop-types * [x] create-react-class * [x] react-addons-create-fragment * [x] react-transition-group

### CASE-1666 · [bug/breaking change] CSSTransitionGroup in React 15.1
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: I hope this is the correct place to file this issue, its definitely related to the ReactCSSTransitionGroup but it could be also related to React Router. Im using React Router with ReactCSSTransitionGroup in order to provide an animation while the user navigates between routes in my app (for instance to provide a nice fancy login animation). I also use a HOC library I wrote ([redux-auth-wrapper]([link])) to secure my routes with authentication/authorization checks. The HOC performs redirects by using redux state data about user authentication and dispatching redirects (typically via redux…

### CASE-1674 · shallowCompare not set on React.addons (npm version 0.13.3)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: According to the docs for [react-codemod]([link]), React > 0.13.x should include `React.addons.shallowCompare` (which is used by the `PureRenderMixin` transformation) - but when installing `react` from npm this is not the case. In the locally installed react node module `lib/ReactWithAddons` is missing [this line]([link]]/blob/master/src/addons/ReactWithAddons.js#L43). Is the npm package not up to date, or what else is wrong here? If it matters: `react`: `0.13.3` `npm`: `2.12.1` `OSX` (I know this error will go away with `0.14.x`, but we can't really upgrade to that while it's in beta..

### CASE-1682 · Bug: Different Behaivor between useTransition and useDeferredValue
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: i spot the difference in how useTransition and useDeferredValue being interrupted by high priority state when i use useTransition and the transition is on going and trying to update any other state (that's not in transition) it interrupt the Transition as expected but after couple of seconds of constantly update the state the transition somehow block the ui and update the state like it's updated synchronously and here is simple the code: [link] when i click on the Post's tab and then quickly before the transition finished constantly update the counter after couple of seconds the transition…

### CASE-1690 · [Compiler Bug]: react native reanimated shared value mutation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍1 💬8 · open · labels: Type: Bug/Status: Unconfirmed/Component: React Compiler
- **Excerpt**: ### What kind of issue is this? - [ ] React Compiler core (the JS output is incorrect, or your app works incorrectly after optimization) - [ ] babel-plugin-react-compiler (build issue installing or using the Babel plugin) - [X] eslint-plugin-react-compiler (build issue installing or using the eslint plugin) - [X] react-compiler-healthcheck (build issue installing or using the healthcheck script) ### Link to repro [link] ### Repro steps Hi, I'm using polyfill in react native to get the compiler working and noticing that the compiler is complaining about reanimated shared value mutations which…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1602 · Bug: server actions cannot be cancelled or given abort signals
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍17 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.2.0 ## Steps To Reproduce 1. As in [ref], create a server action that has some long-running delay, e.g.: to simulate a large language model call. 2. There is no API on the client or server to trigger cancellation, or to detect or handle the client navigating away from the page. Link to code example: [link] ## The current behavior When a long-running request is fired, the server will complete it regardless of client behavior, e.g.: client hangup. ## The expected behavior An API for server actions to obtain a reference to an AbortController (or similar API) for the request,…

### CASE-1605 · Bug: useRef cleanup in StrictMode refers to second ref twice
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍4 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: I'm trying to create a handle object, add it to the map and use it as ref. All that should happen on component first render when ref.current === null which according to what I read here is the only exception when directly writing to ref from render function is allowed: [link] `Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.` Then I want to cleanup that handle object (remove it from the map) on component unmount.…

### CASE-1624 · Memory leak after component unload
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: React version: 16.13.1 Description Data passed by props after uninstalling a component is still referenced and not GC. ``` import React from 'react'; class App extends React.Component { state = { show: false, userObj: { arr: [] } } onClick = () => { let show = !this.state.show let arr = [] if (show) { for (let i = 0; i < 100000; i++) { arr.push({ name: `rocky_${i}` }) } } this.setState({ show, userObj: { arr } }) } render() { return ( <div className="App"> <div> <button onClick={this.onClick} style={{margin: '10px'}}> {this.state.show ? 'uninstall components' : 'install components'} </button>…

### CASE-1644 · State is not properly cleared in case of broken hooks
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** With one hook rendered wrongly, with a fewer hooks for example, rest of the application is also broken. All due _skipped_ render cleanup phase. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** ```js <AppWithErrorBoundary>…

### CASE-1645 · Unexpected copies of the props object retained in memory with the new hooks API
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍4 💬9 · open · labels: Type: Needs Investigation/Component: Reconciler
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** ```jsx function useCustomHook1() { useEffect(() => { console.log("mounted"); return () => { console.log("unmounted"); }; }, []); } function Test3(props) { useCustomHook1(); useEffect(() => { console.log(props.test); }); return <div onClick={() => console.log(props.test)}>{props.items.length}</div>; } ``` `props` object that were used when component was rendered for the first time is kept alive. Completely…

### CASE-1654 · Disabled button click event propagates in IE11
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Browser: IE/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Clicking a disabled button in IE11 fires a mouse event that bubbles and is caught by parent click event listeners. The event is swallowed/not fired in all other major browsers. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template for React 16: [link] template for React 15: [link]).** [link] **What is the…

### CASE-1661 · document.addEventListener callback cannot update the component
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: This may be a bug. In my simple react-app, inside a component's `componentDidMount() ` I have a ` document.addEventListener('message', function(e) {//callback})` However, the callback of this event listener DOES NOT update the component even after calling `this.setState{states:states}` inside it I can confirm indeed that the callback is fired, but it does not update the component. Is this a bug? What would be a work around for this?

### CASE-1669 · setState( obj, callback) - callback called before state has mutated
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I am fighting what used to be called 'a race condition' - I'm not sure what you guys call it in the React world :) calling this snippet in a component ``` reportArgs: (e) => console.log( 'later: ' + @user.args) sendPrintRequest: (e) => w = @user.url arg = @user.args arg = "komplex string manipulations goes here" @user {wurl: w, args: arg}, console.log 'sooner ' + @user.args setTimeout @user, 5000 ``` proves my point - I trust. Either it is a 'noob observation - go do this instead' or a documentation glitch (as the docs says that the callback is called once the state is mutated) or,…

### CASE-1680 · Bug: resolveLazy catching promises causes race condition with short-lived Suspense-wrapped components
- **Principles**: P-F5, P-H3 · **Env**: react, next.js
- **Signals**: 👍11 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: ## Steps To Reproduce 1. Create a React Server Component with a short async delay (~5ms) wrapped in Suspense 2. Trigger a revalidation (e.g., via revalidatePath() in Next.js) 3. The server sends correct updated data, but the client UI does not update Link to code example: [link] ## The current behavior After calling revalidatePath(), the browser receives the correct Flight data with the updated counter value, but the UI remains stuck showing the old value. This only happens: - In production mode - With short async delays (~5ms) - When the component is wrapped in Suspense [link] The issue was…

### CASE-1685 · Bug:
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: I'm having a very specific issue inside a complex project that I can't give a minimal reproduction example of. Basically I mount a React component using `createRoot(document.getElementByid('...')).render(<MyComponent />` For some reason, `<MyComponent />` can end up being unmounted due to an error in one of its children. I know that description is very vague, but do you have any idea what could cause the root element mounted using `createRoot().render()` to be unmounted? This would be very helpful to try to debug a more precise portion of the code I have. I haven't found anything in the docs…

### CASE-1686 · Bug: performance: `createPortal()` attaches listeners even in contained roots
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: I'm working on a new virtualization engine for the MUI X Data Grid and other components. I was hoping to be able to do some work outside of react for performance reasons, and to tie React in with portals, but the base cost of adding portals is too high for that use-case due to the event listeners that are added on new roots. React version: 19 ## Steps To Reproduce 1. Create a portal inside the app's main root Link to code example: [link] ## The current behavior React attaches event listeners to new portal roots even when the root node is contained by the main app root node. It creates a lot…

### CASE-1698 · eslint react-hooks/rulesOfHooks: add rule to check for non-function return from useEffect
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍4 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Feature request: Could we add an eslint rule to eslint-plugin-react-hooks to show an error when a non-function value is returned from within a `useEffect` call? For the function passed to the `useEffect` hook, valid return statements are: `return;` (no value) `return undefined;` (unnecessarily verbose, but still valid) `return () => { [...cleanup function... ] }` Returning anything else will cause the error: `Uncaught TypeError: destroy is not a function` at runtime. The dev UX of this isn't great, as it can be hard to find the return statement from the backtrace, even with source maps…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1603 · Bug: state update from a rAF in useLayoutEffect not batched when using `createRoot`
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: edge, react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Maybe a weird edge case, but this caused an unexpected visual change in our app when migrating a root from `ReactDOM.render`. React version: 18.2.0 ## Steps To Reproduce 1. Define a component that has some state, and a `useLayoutEffect` that modifies the state in a `requestAnimationFrame` callback. like: ```jsx function App() { const [message, setMessage] = React.useState("Loading..."); React.useLayoutEffect(() => { requestAnimationFrame(() => { setMessage("Ready"); }); }); return <p>{message}</p>; } ``` 2. Mount the component using `ReactDOM.render`, and you will never observe the component…

### CASE-1611 · [DevTools Bug]: console.log crashes when I enable DevTools on Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍6 💬9 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps For checking whenever my project will work correctly, when I run a command `next dev`, errors which are shown below occurred. ![image]([link]) When I pass a first argument which is an **object** to `console.log()`, `console.error()`, `console.warn()`, I can repro the errors. for example, ``` console.log([]); console.error({}); ``` Before a few days, the errors had never occured. When I disable DevTools, the errors calm down. I think, the errors may be caused by the codes which are shown below.…

### CASE-1617 · [DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps not able to see ### How often does this bug happen? Sometimes ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.19.2-20ca9b565 ### Error message (automated) Cannot add node "1" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:25708:41 at bridge_Bridge.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:23923:22) at…

### CASE-1618 · [DevTools Bug] Could not inspect element with id 10
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. `git clone [link] && cd hooks-todo/` 2. `npm i && npm run dev` 3. Open [link] in Chrome, if it wasn't opened automatically 4. Open DevTools 5. Go to Source tab and enable the "Pause on exceptions" icon 6. Go to Components tab (the tab of React DevTools) 7. Click in the components tree on the component `TodoList` ![image]([link]) The Sources tab shows that local variable `visibleTodos`, which is an array, has the numeric value (0 or 1): ![image]([link]) The error message on the screenshot is `TypeError: visibleTodos.map is not a function`, its stack…

### CASE-1622 · Bug: Clicking select elements in Firefox React Devtools settings doesn't open options in detached Firefox Developer Tools window
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: firefox, react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: React version: 16.9 React Developer Tools: 4.8.2 Firefox: 79.0 and 80.0b8 ## Steps To Reproduce 1. go to a webpage using react 2. open firefox developer tools in a detached window 3. go to React Developer Tools "Components" tab 4. open up settings: ![image]([link]) 5. click the "Theme" setting `select` 6. notice options don't open 7. tab to focus "Display density" setting `select` 8. hit spacebar 9. notice options don't open ## The current behavior Clicking `select` elements in the React Developer Tools for Firefox does not open the select options. ## The expected behavior Clicking `select`…

### CASE-1625 · Bug: Firefox: Autocomplete/Autofill still not working
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍2 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Description, steps to reproduce and sandbox example see [ref]! The native autocomplete function from firefox is still not working. This also affects other frameworks (antd, material UI): * [link] * [link] It would be nice if someone of the react community could give it a shot because I think that the native autocomplete is a very important UX feature.

### CASE-1627 · Bug: Devtools in Firefox does not allow adding props or editing props/state/hooks
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome, linux, react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Component: Developer Tools/good first issue
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> Version: - React @ `16.13.1` - Firefox @ `75.0` (version for Manjaro Linux) - DevTools version `4.6.0-6cceaeb67` **IMPORTANT:** I have the same React DevTools version `4.6.0-6cceaeb67` installed in Google Chrome Beta 81 and it's working as expected. ## Steps To Reproduce 1. Open React DevTools Components tab 2. Select a component with props/state 3. Try to add props or…

### CASE-1628 · Bug: React Lazy Suspense with Errorboundary fails on older devices.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, android, react, ipad, iphone, mobile
- **Signals**: 👍1 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: It is standard React Lazy wrapped with suspense that is wrapped with error boundary. I tested it on Windows 10 Chrome. It works. I tested it on iPad Chrome it works. I tested it on Samsung Galaxy m 30s Chrome it works. I tested on iPhone SE Chrome it **fails**. I tested on iPhone 5s Chrome it **fails**. Also my customers have old android phones that is their primary device and it also **fails** on their device. There is no way to find error for **ME** on error boundary. There are no dev tools available on mobile devices and mobile evolution on Windows 10 Chrome always succeeds. But on…

### CASE-1636 · Error: "Could not find node with id "266" in commit tree"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍3 💬9 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: PLEASE INCLUDE REPRO INSTRUCTIONS AND EXAMPLE CODE I got this error when I click 'Ranked'. --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.0.4-3c6a219 Call stack: at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:11:11441 at Map.forEach (<anonymous>) at commitIndex (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:11:11387) at e.getRankedChartData (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:11:11920) at _i…

### CASE-1647 · JAWS reads non-interactive elements as Clickable
- **Principles**: P-G1, P-G2, P-G3 · **Env**: windows, react
- **Signals**: 👍1 💬9 · open · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** 1. I create an app using [create-react-app]([link]) 2. I use JAWS Professional Edition Version 2018 (build 1710.42 ILM) and Internet Explorer 11 on Windows 7 3. I use arrow keys to navigate to paragraph "Edit src/App.js and save to reload." 4. Jaws announces "Edit src/App.js and save to reload. **clickable**" **What is the expected behavior?** This paragraph is non interactive, it should not be announced as clickable. **Which versions of React, and which browser / OS are affected by this issue? Did…

### CASE-1649 · Touch events on non-button elements don't trigger react mouse event handlers on mobile Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react, mobile
- **Signals**: 👍2 💬9 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> Touch events trigger simulated mouse events as described here: [link] I tested this using native event handlers and it worked as described. It also works as described with react event handlers, except for non-button elements on Safari mobile. **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** Touch events on non-button elements: **do not** trigger react mouse event handlers on mobile Safari. **do** trigger react mouse event handlers on mobile…

### CASE-1651 · onMouseDown causes splash on real ios browsers
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, ios, react
- **Signals**: 👍0 💬9 · open · labels: Type: Bug/Browser: Safari/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** unexpected **grey splash** caused by `onMouseDown` on real ios device's browsers, both safari and chrome. [Please checkout this **grey splash** issue first]([link]) I did some trial later, and find out that vanilla html `<button onmousedown="">btn</button>` doesn't cause **grey splash**, but with React's jsx `<button onMouseDown={()=>{}}></button>`, there is a noticeable **grey splash** **What is the…

### CASE-1657 · Click <button type="button"> will submit form
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome 61, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** [link] Click "edit" will submit the form **What is the expected behavior?** Click "edit" should not submit the form **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** Mac OS 10.12.6 Chrome 61.0.3163.79 React 15.6.1 (I tried 15.5.1 also has this issue)

### CASE-1658 · Firefox error: Permission denied to access property "target"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, firefox 54, react
- **Signals**: 👍8 💬9 · closed · labels: Component: DOM/Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** Certain events in Firefox 54.0 trigger the following error: ``` Error: Permission denied to access property "target" at target(~/react/lib/getEventTarget.js:23:0) at getEventTarget(~/react/lib/ReactEventListener.js:58:0) at method(~/react/lib/Transaction.js:138:0) at transaction(~/react/lib/ReactDefaultBatchingStrategy.js:63:0) at batchingStrategy(~/react/lib/ReactUpdates.js:98:0) at ReactUpdates(~/react/lib/ReactEventListener.js:150:0) at func(~/raven-js/src/raven.js:265:0) ``` Note that raven is…

### CASE-1662 · SyntheticEvent.key property is "unidentified" in Safari on Mac OS X
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, chrome, safari 9, mac os x, webkit, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: # BUG ### Current Behavior Using a standard `<input type="number" onKeyDown={ this.myKeyDownEvent } />` with an onKeyDown event, the SyntheticEvent.key property is "unidentified" in Safari, for any key pressed. *_FIDDLE: *_ [link] ### Expected Behavior SyntheticEvent.key should provide the proper values for all standard keyboard inputs (letters, numbers, numberpad, arrows, backspace, etc), as it does in Chrome (since both are webkit-based browsers). ### Version Info - Mac OSX El Capitan - React 15.3.2 - Safari 9.1.3

### CASE-1664 · Click events not being triggered with ios touch devices
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, ios 9, react, desktop, ipad
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Possible bug, I have created this JS Fiddle: [link] On desktop if i click anywhere (on the components or outside of the components) I get the "Clicked!" alert - which is expected, as on mount I have registered the click event `onClick` in the `Hello` component. If I try the same thing on a ios touch device (im using an ipad mini model A1432, ios 9.3.2) The click events are not triggered when i touch the react components (`Hello` and `HelloOther`). But if I touch outside of the components the alert comes up. Whats interesting is that if i add `cursor: pointer;` css to the components they will…

### CASE-1665 · Proposal for an ordered attribute white list, and new property injection types
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I've been working a lot with the `ReactDOMInput` wrapper to fix IE and Chrome bugs and I've noticed that a good portion of the code exists to prevent attributes from being assigned in the wrong order, and for inserting them in a specific way. So that got me curious about benefits centralized, ordered, property assignment might yield. I'm interested in: 1. Eliminating special attribute assigning ordering cases. Like assigning `type` and `step` before `value`. 2. Eliminate _most_ special `value`, `defaultValue`, `checked`, and `defaultChecked` assignment order code. I've been investigating that…

### CASE-1667 · Changing state in onFocus and onChange for a select multiple element does not work in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍2 💬9 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: I want to use a controlled `<select multiple={true} />` component in React. In addition to the value I also want to keep the focused state of the select in the state. To do this, I update the state with `setState` in the `onChange`, `onFocus` and `onBlur` event handlers. Unfortunately there is an issue in Firefox: Firefox will only update the value on a change event after the select has gained focus. This means that a user has to click twice on the select element to change its value when it does not have focus. I would expect the select to gain focus and change the value at the same click. I…

### CASE-1668 · Iframe load event not firing in Chrome and Safari when src is 'about:blank'
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, react, webkit
- **Signals**: 👍7 💬9 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: See: [link] It will not trigger the alert in Chrome and Safari, but it will work in Firefox and even IE8. Is this a React issue or Webkit issue? If it is a Webkit issue, should we "fix it" in React given that we want [consistent events across browsers]([link])? ps: The JSFiddle was based on the isuse [ref].

### CASE-1671 · Form input name='nodeName' breaks onSubmit event handling
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍2 💬9 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: It happened that I stumbled on following edge case. If you add `name='nodeName'` attribute to form's _input_, at some point of React event handling (`ChangeEventPlugin.js: shouldUseChangeEvent()`) it will call: `elem.nodeName && elem.nodeName.toLowerCase()`, but coincidentally `nodeName` property refers to _input_ and invocation fails. Here's a [jsFiddle example]([link])

### CASE-1673 · onTouchStart fire extremely slow in ios9.2'safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios9
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: onTouchStart fire extremely slow in ios9.2'safari.slow then onClick. is this a bug?

### CASE-1677 · Links within SVGs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍0 💬9 · closed · labels: SVG
- **Excerpt**: Clicking `<a>` within SVGs cause issues, in my case missing `<rect>`s. On initial load you ought to see 5 boxes(light brown, red, blue, brown and orange). 1. Click 1. Now its 3 boxes (blue, brown and orange). 2. Click 2. Now its 2 boxes (light brown and red). 3. Again click on 1. 2 boxes :worried: (blue and brown) Where does the orange box disappear to??? :confused: Please note this entire thing is SVG and that the link is actually present in the DOM. It just decided not to show itself. On Firefox, clicking the link, `TypeError: setting a property that has only a getter` is thrown from…

### CASE-1678 · Safari 6 bug: Attempted to assign to readonly property.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 6, safari
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug
- **Excerpt**: Specific to Safari - breaks update.js addon in this place: ``` if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) { nextValue[k] = update(value[k], spec[k]); } ``` can be fixed with ``` if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) { if(!(/string|boolean/i).test(typeof value[k])) { nextValue[k] = update(value[k], spec[k]); } } ```

### CASE-1683 · [DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍17 💬8 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app localhost ### Repro steps messages ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 6.1.5-5d87cd2244 ### Error message (automated) Cannot add node "1" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1236392 at v.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1203447) at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1205054…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1604 · Components and Profiler don't appear in DevTools
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬9 · closed · labels: Resolution: Stale
- **Excerpt**: I tried to disable/enable remove/reinstall the extension to no avail. It does detect websites as using React either in development or production mode, but these tabs don't pop up in DevTools. What is wrong? ![image]([link]]/assets/2313018/6a4888b2-1e8b-4850-8be1-cb2a2222607c)

### CASE-1610 · Bug: TBT of website increased after migrating to react 18
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: After upgrading to react18 total blocking time of website has been increased as per the reports of lighthouse. url used to check performance: [link] Following packages were updated to latest: "react": "^18.2.0", "react-dom": "^18.2.0", "react-redux": "^8.0.2", React version: 18.2.0 ## Steps To Reproduce 1. Update the above mentioned packages to latest. 2. Use react new hydrateRoot api Link to code example: Attaching screenshots for performance analysis: react18: <img width="960" alt="Screenshot 2022-08-04 at 5 16 58 PM" src="[link]> <img width="960" alt="Screenshot 2022-08-04 at 5 17 09 PM"…

### CASE-1612 · Bug: time slice not work in react 18
- **Principles**: P-A3, P-H1, P-H2, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Type: Needs Investigation
- **Excerpt**: in [email], a long task will be sliced multi short task, demo: [link] ![image]([link]) but in [email], it will be only a long task, demo: [link] ![image]([link]) Is it a react18 time slice bug or feature? React version: 16.8.0 & 18.0.0 ## Steps To Reproduce 1. run a example app like below 2. open inspector -> performance, then record and analyze Link to code example: 16.8.0: [link] 18.0.0: [link] ## The current behavior in [email], long task not be sliced ## The expected behavior in [email], long task will be sliced

### CASE-1614 · Bug: TypeError elem.nodeName.toLowerCase is not a function
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · open · labels: Type: Bug/Component: DOM/Status: Unconfirmed
- **Excerpt**: React version: 17 + ## Steps To Reproduce 1.window.nodeName exists and does not have a toLowerCase method 2.an error will be reported when the event is triggered, such as clicking on the page ![image]([link]) [ChangeEventPlugin.js]([link]]/blob/54f785bc51800556dead12aaedf9594b2f15e836/packages/react-dom/src/events/plugins/ChangeEventPlugin.js) ![image]([link])

### CASE-1623 · Bug: Wont set file to state with hooks
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: I'm having an issue where the state is refusing to be set to a file, below is a summarised version of my code ``` let [files, setFiles] = useState([]); const handleFile = (file, index) => { let old = [...files]; old[index] = file; setFiles(old); } <input type="file" accept="image/jpeg,image/jpg" onChange={e => handleFile(e.target.files[0], files.length)} /> ``` I console logged `old` after i set the file to it and i get `[File] 0: File {name:....` so so the array is what i expect but the state wont be set to it, its still an empty array. react version `"react": "^16.13.0",` dependencies list…

### CASE-1629 · Bug: useState won't update ui when FileList type object set
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react, typescript
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: I use useState hook to track files change in html input element. When the file changes, console can output correctly when change event fires. but setFileList not work correctly，useEffect didn't be called and UI did'd be updated. the first time I choose a image works fine, but the second time works not correctly React version:[email] ```typescript const [fileList, setFileList] = useState<FileList | null>() const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => { const { target: { files } } = e setFileList(files) } useEffect(() => { console.log('file list changed: ', fileList)…

### CASE-1630 · Arbitrary log lines may appear in between an error and the subsequent "The above error…" message
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug
- **Excerpt**: React version: 16.12 If one component throws, and one of its siblings logs something else to the console, that sibling's logs appear in between the throwing component and the extra React information about that throw. This is hard to explain in words but easy to explain in code and pictures, so look: Repro: [link] ![image]([link]) The third log line ("The above…") refers to the first ("Uncaught…") but looks like it refers to the second ("Please don't…"). This is confusing when debugging. Instead, I would expect "The above error…" to be right below the uncaught window-level exception we raise.…

### CASE-1635 · Bring back the ability to show props in the tree
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍17 💬9 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature. I would like the ability to see props in the component tree, like in React DevTools version 3, not just in the sidebar. **What is the current behavior?** As of React DevTools 4.0.5, the component tree does not show a component's props: ![image]([link]) **What is the expected behavior?** I would like the ability to toggle an interface more similar to React 3.6.0, where the props were shown in the tree. Please excuse the annotations on the following photo, I'm reusing it from [link]]-devtools[ref]. ![image]([link])…

### CASE-1663 · React fails to update TextNode in IE8
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug **What is the current behavior?** React fails to update text nodes in IE8 **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** This is as close as I could get to a reproduction: [link] I think JSFiddle itself doesn't work in IE8 though, so it's masking the real problem, which you can see here: ![image]([link]) **What is the expected behavior?** DOM updates/doesn't throw error **Which versions of React, and which browser /…

### CASE-1681 · Bug: `react-dom-client.development.js` tries to read `$$typeof` on iframe object
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍11 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: In `ReactFiberPerformanceTrack` it tries to deep read the props in DEV mode, `props` may deeply contains `cross-origin frame` which will cause `SecurityError: Failed to read a named property '$$typeof' from 'Window': Blocked a frame with origin "[link] from accessing a cross-origin frame.` React version: 19.2.0 (I believe the change is introduced in [ref]) ## Steps To Reproduce there are three factors caused this problem 1. deep in props there is a reference to host `window` or `document` object 2. google reCAPTCHA is in use. it mounts a iframe and inject the iframe reference to `document`…

### CASE-1688 · Bug: nested Suspense with lazy children permanently shows fallback
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: **React version: both 18.3.1 and 19.0.0** When creating a `lazy` component in `useMemo`, and rendering inside nested Suspense, the suspense continues to render its `fallback` forever and never mounts the component – even after the component has had time to load. This is reproducible with both 18.3.1 and 19.0.0. May be related to [ref]? ## The current behavior When rendering Suspense in a parent and the lazy component in a child, the lazy component never loads (line 2). However, when the child component additionally wraps its own Suspense, the loading succeeds (lines 1 & 3). <img width="150"…

### CASE-1689 · [React 19] Cannot assign to readonly property
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/React 19
- **Excerpt**: ## Summary <!-- Please provide a CodeSandbox ([link]), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem. You may provide a screenshot of the application if you think it is relevant to your bug report. Here are some tips for providing a minimal example: [link] --> I'm using [link] to use react components. I was trying to upgrade to the latest 19 rc and I started getting getting this error: ![image]([link]]/assets/1192452/c8452687-af93-48cf-a549-5cb20d6354ed) I boiled down the app into just a few file to demonstrate the issue [here]([link]) The…

### CASE-1697 · Bug: In useEffect, why the same state as setState will also be re-rendered?
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Link to code example: [link] React version: 16.8.3 - 18.2.0 ## Steps To Reproduce 1. Open codesandbox 2. Reload and profile 3. Click button ![image]([link]]/assets/68742338/0685f224-514a-436c-ab6b-598bd52768b7) ## The current behavior print `console.log("render", a, b);` twice ## The expected behavior print `console.log("render", a, b);` once Debugging found that the two renders were caused by setA and setB respectively, but the state of setB was the same as last time, why did it cause the render? ![image]([link]]/assets/68742338/60a3b078-17c1-4c87-b63b-c8dd378f2ba8) It seems that fiber.lanes…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1606 · Bug: Native dialog backdrop stylings don't work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, tailwind
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: I will be start by saying, it's wholly possible this is user error, cause I can't find any other reports of this issue by googling, but I cannot get backdrop stylings on native dialogs to render in React. In my work project where I noticed this, there are a lot of variables (tailwindcss, react, next, nx, etc.), but here's the short version: In a simple html page loaded via the `file://` protocol, I can successfully style a `<dialog>` `::backdrop` using inline css, style tags, tailwindcss (loaded via cdn) classes - basically _any_ styling mechanism. It works whether the dialog is triggered by…

### CASE-1631 · Controlled numeric input gets cleared when unfocused
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · open · labels: Type: Bug/Component: DOM/Resolution: Backlog
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** I would like to report a bug. **What is the current behavior?** A numeric input field gets cleared accidentally on several occasions. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:**…

### CASE-1632 · Undo behavior in controlled input doesn't work as expected
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · open · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** 1. Load [link] 1. Focus the first input. 1. Type <kbd>a</kbd>. 1. Press <kbd>Tab</kbd> to focus the second input. 1. Type <kbd>a</kbd>. 1. Use Ctrl/Cmd+Z or Edit->Undo to undo these two changes. Notice that the uncontrollable input change is reverted Notice that the controllable input change is **not** reverted ![undo]([link]) **What is the expected behavior?** uncontrollable & controllable inputs…

### CASE-1637 · Lazy load component with path stored in a variable or prop
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** Error and warning when trying to dynamically `lazy` load a component from a variable or props. ``` Warning: Critical dependency: the request of a dependency is an expression Error: Cannot find module './Button' (anonymous function) .../dynamic-lazy-load/src lazy groupOptions: {} namespace object:5 ``` **Reproduction** In a Codesandbox it seems to be working [link] fine. For some reason in a non codesandboxed environment, I was able to reproduce the issue [here]([link]). **What is the…

### CASE-1639 · eslint-plugin-react-hooks: rule fix drops dots from rest parameters
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Component: ESLint Rules/Resolution: Stale
- **Excerpt**: (Sorry for the multiple edits, but the template really confused me) Bug: When having a variable number of arguments, such as this sample ```js function useSomething(fixedArg, ...args) { //Somewhere inside: return useMemo(() => /* doSomething */, [fixedArg, ...args]) } ``` The eslint plugin fixes it to: ```js function useSomething(fixedArg, ...args) { //Somewhere inside: return useMemo(() => /* doSomething */, [fixedArg, args]) } ``` This is not correct. The dots on the rest of the arguments should not be dropped, as the dependencies to be compared are the contents of that array (the values…

### CASE-1640 · Erroneous useEffect conditional call error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: Type: Needs Investigation/Component: ESLint Rules/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** React gives an error about `useEffect` being called conditionally when it actually isn't. ~~Modifying a local object variable within a loop seems to be triggering it.~~ ``` React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return? react-hooks/rules-of-hooks ``` **Demo** [link]…

### CASE-1641 · Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component.
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react
- **Signals**: 👍2 💬9 · closed · labels: Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I am getting this error: ``` Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See [link] for tips about how to debug and fix this problem. at invariant…

### CASE-1642 · Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Root.js ``` import React from "react"; import { Provider } from "react-redux"; import { Navigator } from "./Navigation/Index"; import { store } from "./Store/Index"; export default class Root extends React.Component { render() { return ( <Provider store={store}> <Navigator /> </Provider> ); } } ``` Store.js ``` import ReduxThunk from "redux-thunk"; import { createStore, applyMiddleware, compose } from…

### CASE-1643 · Hooks error from external component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍14 💬9 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** We are trying to create an external module which will be imported in main app. Here is the module : ```import React, { useState } from 'react'; export const MyHelloComponent = (props) => { const [test, setTest] = useState(); return (<div>Hello</div>); } ``` Importing this simple code into main app gives us the error : > Uncaught Invariant Violation: Hooks can only be called inside the body of a function…

### CASE-1653 · backspace fails to clear values on input type='email'
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬9 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** email input doesn't control for whitespace // possible variation on [Issue 6368]([link]][ref]); however, 6368 shows up at 15.0.0 this bug shows up at 15.2 **If the current behavior is a bug, demo** no bug in React 15.0.0 no bug in React 15.1.0 bug on React 15.2 [React~15 fiddle]([link]) bug on React 16 [React~16 fiddle]([link]) **What is the expected behavior?** When a user presses down the backspace key…

### CASE-1670 · 'Bind' will result in errors in onClick handler
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: If you create any react component, and add this attribute to it: `onClick={this.setState.bind(this, {smKey:smValue} )}` then you click it, it will report an error: > Uncaught Invariant Violation: enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable. but actually it's working, the state will be correctly updated, nothing wrong, just the annoying error. I think this is a bug, but I can not image how could it be, when this can work: `onClick={()=>this.setState({smKey,smValue})}` to me they are exactly the…

### CASE-1676 · Problems with Mocha / Jsdom / React testing
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I'm not entirely sure if what I'm having here is a problem with Mocha or React, but I really need some help figuring out why my tests are failing with what looks like leaks across siloed documents. My test setup is using Mocha, where each individual test spins up a document with jsdom before loading React. I then proceed to run the test of the individual component in each of these separate documents. My tests run fine if I only run a single file at a time, but when I run all tests I get errors like `DOMException: Wrong document` (from jsdom) and `Error: Invariant Violation:…

### CASE-1684 · Bug: same inline styles are considered different by hydration
- **Principles**: P-E1, P-E2, P-E4, P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Hi, I got this error in my console: ``` A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used: - A server/client branch `if (typeof window !== 'undefined')`. - Variable input such as `Date.now()` or `Math.random()` which changes each time it's called. - Date formatting in a user's locale which doesn't match the server. - External changing data without sending a snapshot of it along with the HTML. - Invalid HTML tag nesting. It can also happen if the client has a browser…

### CASE-1693 · Bug: `undefined` within props is not faithfully deserialized from RSC payload
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍5 💬8 · open · labels: Type: Bug/Component: Flight
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: `18.3.0-canary-0cdfef19b-20231211` Related issues: [link]][ref] ## Steps To Reproduce Object variant: 1. Pass a `prop={{ x: undefined }}` from a server component to a client component Array variant: 1. Pass a `prop={[0, undefined, 2]}` from a server component to a client component <!-- Your bug will get fixed much faster if we can run your code and it…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1607 · Bug: lazy + hydrateRoot + sibling = mismatch
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Resolution: Needs More Information/Component: Server Rendering/Resolution: Stale
- **Excerpt**: I'm trying to use React' 18's new APIs to enable server-side suspense, but I'm getting hydration mismatch errors when I try to hydrate components that are wrapped in both `lazy()` <strike>and `<Suspense />`</strike>. React version: 18.2.0 [EDIT] See [updated description / repro below]([ref]) <strike> ## Steps To Reproduce 1. wrap a react component with `lazy` and `Suspense` 2. server-side render it using `renderToPipeableStream` 3. try to hydrate it using `hydrateRoot` 4. look in dev console - notice errors Link to code example: [link] ## The current behavior Hydration fails with the…

### CASE-1608 · Bug: Handle nonce hydration warnings better
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍6 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Create an app with a CSP 2. Server render your app with a `nonce` in script tags and hydrate those tags with or without the nonce prop and observe warnings that insufficiently describe the seriousness of security vulnerabilities and how to fix them. Link to code example: [link] ## The current behavior We get warnings about…

### CASE-1613 · Bug: React 18 hydration mismatch with sync external store
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Expected Behavior
- **Excerpt**: The issue was brought from here [link]][ref][ref] React version: 18.0.0 It is hard to mimic the hydration behavior with client-only code, I tried my best to reproduce the error here: [link] Note about the demo: the error is actually different in the real SSR app (my app). In my app (real SSR), error is `"Warning: Did not expect server HTML to contain a <div> in <main>."` error , while in the demo codesandbox, it is `"This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original…

### CASE-1619 · Bug:
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: hi, how resolve this error Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See [link] for tips about how to debug and fix this problem. React version: 16.13.1 ## Steps To Reproduce 1. 2. <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues…

### CASE-1694 · Bug: possible bug in createPortal - invalid hook calls in micro frontends setup
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce We observe a behaviour that we're not sure if we pushed our architecture little too much or it's an actual bug. Any comments appreciated. The setup is that we have a micro frontend architecture website. Host application is running a react server side rendering with hydration. Some parts of the website are snippets of html…

### CASE-1696 · Bug: form data is lost upon hydration
- **Principles**: P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Related: - [link]][ref] - [link] - [link] <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce Link to code example: [link] Given this component which is used during SSR and then hydrated on the client-side: ```tsx import * as React from 'react'; export const App = () => { const [value, setValue] = React.useState(''); const [, setCount] = React.useState(0); React.useEffect(() =>…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1615 · Bug: console log stopped working for props on 17.0.0
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: Status: Unconfirmed
- **Excerpt**: React version: 17.x.x ## Summary When debugging, I usually place console log directly instead of wrapping it in a function, this used to work for earlier versions than 17. Reading the change log, I didn't see this as a intended change. ## Steps To Reproduce 1. on a input a prop (can be a input onChange), insert console log directly: `<input onChange={console.log} />` Link to code example: [link] ## The current behavior onChange ignores console log ## The expected behavior For the onChange to be printed on the console

### CASE-1616 · Bug: Clicking button type="button" submits form
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Component: DOM
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: tested in `16.13.1`, `17.0.2`, and `18.0.0-beta-a65ceef37-20211130` ## Steps To Reproduce 1. Click a button `type=button` 2. Cause a rerender where that same DOM button will be converted into a button `type=submit` 3. Observe that any form linked to the submit button is submitted, even though the submit button was never clicked Adding a `key` to force a…

### CASE-1634 · hook component can not been clicked in react-dev-tool if you want it works well.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Question/Component: Developer Tools
- **Excerpt**: ### issue type bug ### issue description look at the code blow (it is very very very simple). ```jsx import React, { useState } from 'react'; export default function DemoCounter() { const [fnWrapper] = useState('fn'); const [count, setCount] = useState(0); fnWrapper.__proto__.setCount = s => { setCount(s); } // assign fnWrapper.__proto__.setCount to callSetCount const callSetCount = fnWrapper.__proto__.setCount; return ( <div style={{ border: '1px solid blue', margin: '8px' }}> count: {count} {/* this does not work if I open react-dev-tool and click the dom node */} <input value={count}…

### CASE-1648 · input[type='number'] event.target.value changes to empty string when . or , pressed and onChange not emitted when . and , used
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** onChange event changes value of an input to an empty string when . or , is pressed. Additionally it seems like it doesn't fire onChange after the dot and comma (example 1.234,000) at all **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other…

### CASE-1650 · Submit/Reset inputs lose text when value=undefined.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Type: Regression
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** Creating an `<input type='submit'` with `value={undefined}` results in a button with no text. [link] The same behaviour can be seen with `type='reset'` I have a PR open with a proposed fix. [link]][ref] **What is the expected behavior?** The input should use the browser's default value for the input (Submit for en, etc.). **Which versions of React, and which browser / OS are affected by this issue? Did…

### CASE-1655 · Issue with input[type=number] rendering decimal points
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** I would like to report a bug. **What is the current behavior?** When I use the `<input type=number />`, there is an issue with it displaying one additional decimal point. I noticed that the initial value in state is `1.2`, when I type in a `.` at the end of the input `1.2.` is displayed while the value in state still remains `1.2`. When I type in another `.` at the end, the value disappears and returns an empty string instead. **If the current…

### CASE-1656 · Reset of select ignores defaultValue
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** I report a bug. **What is the current behavior?** When resetting a form which contains a select with a defaultValue, the selected option becomes the first option element in the list, not the one with value=defaultValue. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** I have put a piece of code here : [link] Click on the reset button, which just does a form.reset() on the form. **What is the expected behavior?** I expect…

### CASE-1659 · Do not trigger the change event for the same radio value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Selecting of the same value for the `input[type=radio]` twice in a row results in triggering of change event twice for the same value. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** Open [link] and click twice on any option. As the result you'll see in console that **change** event is triggered each time (even if the changed value is equal to the previous one). For comparison you may…

### CASE-1672 · Controlled Inputs can update out of order, causing cursor jump
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Here is a subtle change introduced when the DOMInput component was switched into the current lighter weight wrappers. In order to ensure that things like: [ref] don't happen. The inputs defer an update until all updates have been flushed when controlled. This gives the incoming props a chance to make it to the component before it inadvertently resets the value to the now, last, `props.value`. Essentially the old `value` is set on the DOM node before the new `value` has a chance to be pushed to the input props, which causes the cursor to jump to the end. This was originally seen and addressed…

### CASE-1679 · React.renderComponentToStaticMarkup doesn't generate selected attributes from value/defaultValue
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug
- **Excerpt**: I'm using static markup for unit testing [newforms]([link]) output and I'd also like to support using it to render forms as static HTML. Adding a `value` or `defaultValue` to a `<select>` doesn't generate static HTML with the appropriate `selected` attributes. However, they do get generated if you manually add them to `<option>` components, but then you get warning messages in the console when using the development build of React. Is it possible to support both use cases without manually setting `selected` attributes, or will I just have to live with the warnings? :) JSFiddle showing…

### CASE-1687 · Bug: Uncontrolled `<input />` element has value attribute removed
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: React 19 ## Steps To Reproduce 1. Pass an `value={undefined}` as a prop to an `<input />` element 2. Observe the DOM and see the `value` attribute is absent <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not…

### CASE-1691 · Bug: optimistic state (useOptimistic) shows both optimistic and returned from server data when running several async actions
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍14 💬8 · open · labels: Type: Needs Investigation/Component: Reconciler/React 19
- **Excerpt**: I have a form with submit button. When I click on the button, I call update optimistic state and update real state as soon as action is finished. When I click on the button 3 times, I will see 6 items in the list for a while. [link]]/assets/9947582/234d8e6c-a69b-429a-bc89-92dc4818f8db React version: - "react": "18.3.0-canary-bb0944fe5-20240313", - "react-dom": "18.3.0-canary-bb0944fe5-20240313" ## Steps To Reproduce 1. Click 3 times on the button Link to repository: [link] Link to sandbox [link] ``` const AddToCartForm = ({ title, addToCart, optimisticAddToCart }: AddToCartFormProps) => {…

### CASE-1692 · Bug: [React Refresh] Unexpected behavior when adding/removing elements prior to uncontrolled inputs
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Component: Fast Refresh
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce [link]]/assets/54008264/94e69206-48a1-4064-a89c-583aadcd8269 1. [link] 2. Enter 1, 2, 3, and 4 respectively in each textbox 3. Comment and uncomment the `<br />` and save ```tsx function App() { return ( <> <div> {/* COMMENT AND UNCOMMENT THIS BR AND SAVE */} <br /> <input type="text" /> <input type="text" /> <input…

### CASE-1695 · Bug: pending attribute from useFormStatus is stuck as "true" when form action takes longer than ~5s to resolve
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬8 · closed · labels: Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: canary ## Steps To Reproduce 1. open example link-This is a demo example from the official website, only the settimeout time has been changed.（form action resolve promise after 10 seconds） 2. click submit button 3. see the button text <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues…

### CASE-1700 · Supporting `Date` objects in `value` for `type=date` input tags
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Stale
- **Excerpt**: Currently, when passing `Date` objects as the `value` parameter, the `Date` object is implicitly converted into a string and the browser can't understand the format. This doesn't set the value in the date picker because of that. See [link] According to [MDN]([link]), the date value should be specially formatted. While this format is the only way in HTML, I think it would be better if react supported passing `Date` objects directly for the `value` parameter instead of the application developer manually converting the `Date` object to a string (which is error prone without a date library). I'm…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-1638 · bug* element.scrollIntoView()
- **Principles**: P-D4, P-F1, P-F5 · **Env**: react
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I am attempting to do `formHandlerRef = React.createRef()` then attach it to an MDB Col as a ref pass this down as props to another component `scrollToFormHandler = () => { const formHandler = this.formHandlerRef.current; formHandler.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); };` and call the function from a child component. **What is the expected behavior?** The intended behavior is when the props function is fired off in the child component (after the formHandler…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-1646 · onMouseEnter does not fire on an underlaying element if an element above is removed
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍6 💬9 · open · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug - I did do some searching around the issues to see if there was a similar/dupe, but I could not find one. **What is the current behavior?** With 2 elements overlaying on top of each other, if the upper element gets removed while the cursor is over both elements, mouse enter never fires on the element below. I compared this to native browser events and the issue does not appear to persist there (native browser events appear to fire mouse enter for the underlying div when the overlaying div gets removed). **If the current behavior is…

### CASE-1699 · Bug: The placeholder is shown on top of the input value.
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, react
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 18.3.xxx ## Steps To Reproduce 1. On chrome canary, go to [link] 2. The placeholder is shown on top of the input value. 😱 <img width="520" alt="image" src="[link]> 3. If you focus the input, the placeholder disappears. 👍 <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-1675 · Changing defaultValue doesn't re-render input, causes hidden state in the db
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I [posted this on StackOverflow]([link]) but the dearth of answers makes me think it might be a bug. Given the following simple code ``` js const {createFactory, createClass, DOM: { label, input, button }} = React; const tester = createFactory(createClass({ render() { return label({} ,`Name: ${this.props.name}` ,input({defaultValue: this.props.name}) ,button({onClick: this.changeName}, "Change") ) }, changeName() { this.setProps({name: "Wilma"}) } }) ) React.render(tester({name: "Fred"}), document.querySelector('body')) ``` clicking the button doesn't re-render the input and it still says…

