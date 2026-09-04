# Case Chunk 004 — Round 4

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1301 · 16.8.6: Invariant Violation: Expected subtree parent to be a mounted class component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, webpack
- **Signals**: 👍0 💬14 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Reporting a bug **What is the current behavior?** We received a bug report from Rollbar (what we use to catch and report JS bugs). ``` Invariant Violation: Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue. 1 File "webpack:///./~/react-dom/cjs/react-dom.production.min.js" line 13 col 313 in r 'use strict';var…

### CASE-1312 · Isomorphic Rendering with inserted html broken. (15.0)
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: In React 0.14x and below inserted dom nodes inserted by plugins such as adblock, browser sync, or otherwise were ignored. Now in React 15 these new nodes cause the ``` console index.js:65 Invariant Violation: You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent…

### CASE-1329 · Bug: setState in onFocus breaks onChange event in Concurrent Mode
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug/Component: Concurrent Features
- **Excerpt**: Using concurrent mode on `0.0.0-experimental-7f28234f8` makes `<Checkbox/>` from Baseweb stop firing `onChange` events. Baseweb is a popular set of React components that reflects real world usage patterns such that maybe it should work right off the bat with Concurrent mode. Feel free to close if you're confident this is a userland problem and not a framework problem, but I think this may indicate an incompatibility between Concurrent Mode and Legacy mode that isn't documented or warned about it if so, because `<Checkbox/>` isn't doing anything too fancy and doesn't use deprecated APIs or…

### CASE-1337 · Input type email bug
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬13 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: [link] Open this codepen and paste this "[email] 1" Then press backspace, notice that the focus changes to the beginning of the input.

### CASE-1355 · ReactMount.nodeCache is repopulated with purged nodes that are focused at unmount
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug/Difficulty: starter
- **Excerpt**: If you unmount a currently focused node, `nodeCache` is repopulated after being purged and unless that specific ID is revisited later, it will remain there forever. ~~This is mostly likely due to the focus/selection restoration phase after reconciliation.~~ Repro: [link] (nodeCache is output into the console)

### CASE-1356 · Unexpected behaviour on Input element onKeyPress event
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug
- **Excerpt**: Here's the element I have: React.DOM.input({onKeyPress: this.onKeyPress}); onKeyPress: function(event) { if (event.keyCode === 13) // Enter key event.preventDefault(); } With react 0.10, preventDefault was working. On 0.11, with the focus on the input, pressing enter does a form submit and reloads the page. I've also tried doing the preventDefault on the onKeyDown event with no luck.

### CASE-1366 · [React 19] React warns about "fetchpriority" props
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍5 💬12 · closed · labels: Component: DOM/Resolution: Stale/React 19
- **Excerpt**: ## Summary In 18.2.0, React allowed the `fetchpriority` prop in all lower case, but did not accept camelized `fetchPriority`. Support for the camelized version was added in [ref], but it seems to have broken the lowercased version. This means there is no variant that works in both 18.2 and 18.3 canary/19 beta. Repro: [link] In 18.2.0 `fetchPriority` generates a warning but `fetchpriority` works without warning In 18.3.0-canary and later, `fetchPriority` works but `fetchpriority` generates a warning.

### CASE-1369 · Bug: Stale values returned from useOptimistic when state changes
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍29 💬12 · closed · labels: Status: Unconfirmed
- **Excerpt**: The `optimisticState` returned from `useOptimistic` is stale when the `state` param passed to `useOptimistic` is changed. The change could come from an RSC reponse or from a `setState`. React version: 18.2.0 ## Steps To Reproduce 1. Call `useOptimistic` with a `state` variable 2. Update the value of `state` either via `setState` or any other method that would cause a rerender 3. The initial `state` is returned as the `optimisticState` ![image]([link]]/assets/17943918/84759716-79e1-47f0-b237-b8d68b89014b) Link to code example: [link] I've recreated the bug in a Next project, but the important…

### CASE-1381 · [React 18] Possible Suspense Bug - Thrown error causes corrupted page
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, next.js
- **Signals**: 👍0 💬12 · open · labels: Type: Needs Investigation/React 18
- **Excerpt**: I've found what I think to be a React bug, although it could be something we are doing wrong inside Blitz.js `React 18.0.0-alpha-ed6c091fe-20210701` ## Basic Explanation The position of a top level, unneeded `<Suspense>` component next to an `<ErrorBoundary>` causes odd UI rendering or totally corrupted page. Following are different variations of [this code]([link]) inside `_app.tsx` (which is the same top level root as Next.js) This code in `_app.tsx` causes a totally corrupted page (shows content on page that's no longer managed by React): ```tsx <Suspense fallback="Loading...">…

### CASE-1384 · Bug: CSS variables can't be a space character
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍5 💬12 · open · labels: Type: Bug/Component: DOM/Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: v16/v17 ## Steps To Reproduce 1. [link] 2. Notice the "should be black border" has a pink border 3. Dangerously setting inner HTML works because it doesn't go through reacts `trim()` flow 4. I've tracked the suspect code to here [link]]/blob/6cbb9394d1474e3a728b49dc7f3a11d61a421ce3/packages/react-dom/src/shared/dangerousStyleValue.js#L44 <!-- Your bug…

### CASE-1390 · Bug: onFocus and onBlur has inconsistent batching
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Type: Bug/Component: Concurrent Features
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: `0.0.0-experimental-4c8c98ab9` with concurrent mode. ## Steps To Reproduce 1. In the provided code sandbox, click on a `Todo` component 2. Tab back and forth between the two 3. At inconsistent times, there will be a frame where the focus hasn't left, but the outline isn't rendered. The outline is only drawn when focus is in. Because there is a brief frame…

### CASE-1391 · Bug: Using boolean short circuit to conditionally render a component produces error when variable is undefined.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, bootstrap
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ``` export default function App() { const item = undefined; const Item = () => item && <div>{item.name}</div>; return ( <div> <Item /> </div> ); } ``` In our case, item is initialized from array.find. It is a react-bootstrap NavDropdown.Item with others in a NavDropdown. It produces a white screen in our app rather than the on-screen errors seen in the example, but the javascript console shows the same errors. Changing to ternary `item ? <div>{item.name}</div> : null` works as a workaround. React version: ^16.12.0 Link to code example: [link] ## The current behavior Error Item(...): Nothing…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-1302 · dangerouslySetInnerHTML is left empty on client render on top of bad server markup when rendering HTML
- **Principles**: P-A5, P-G1, P-G2, P-G3, P-F4 · **Env**: edge
- **Signals**: 👍1 💬14 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: This seems to be an edge case of [link]][ref] fixed in [link]][ref]/files. I ran into this when trying to hydrate content rendered with [link] `asHtml` method. **Do you want to request a *feature* or report a *bug*?** Bug? I think. **What is the current behavior?** Current behavior: 1. Server-side stuff comes in from server and contains the things we need 2. Hydration mismatch happens 3. dangerouslySetInnerHTML is called with correct value but an empty string gets rendered instead I tried to replicate the issue on [link] but failed. The following testcase for…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1303 · TypeError: func.apply is not a function / Uncaught TypeError: destroy is not a function
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍17 💬14 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** Doing certain dispatches with redux or other random things cause react to crash. It's working perfectly on react 16.8.0-alpha0 but as soon as I update to alpha 1 it crashes. ``` console.js:59 01:27:08.503 › TypeError: func.apply is not a function at HTMLUnknownElement.callCallback ([link]) at Object.invokeGuardedCallbackDev ([link]) at invokeGuardedCallback ([link]) at safelyCallDestroy ([link]) at commitUnmount ([link]) at commitNestedUnmounts ([link]) at unmountHostComponents ([link]) at…

### CASE-1304 · Simultaneous key events in effect handled out of order
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: Type: Feature Request/Resolution: Backlog
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** I have an app that's registering event listeners for `window`'s key events (via `useEffect`). Those event listeners are triggering state updates (via `useState`). I think I have found a bug where simultaneous key events occurring in the same frame (whether down or up) will be handled out of order, causing state to becoming out of sync. Take the following simple app ([link]). I've kept this as keyup only for simplicity. ``` function App() { const [keys, setKeys] = useState([]);…

### CASE-1315 · React fails to unmount component from within event handler
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬14 · closed · labels: Type: Bug/Type: Feature Request
- **Excerpt**: Hi, When trying to unmount my whole app, I got some error. > Uncaught TypeError: Cannot read property 'firstChild' of undefined > ReactMount.js:606ReactMount.findComponentRoot > ReactMount.js:606ReactMount.findReactNodeByID ReactMount.js:552getNode > ReactMount.js:128executeDispatch EventPluginUtils.js:109SimpleEventPlugin.executeDispatch > SimpleEventPlugin.js:305forEachEventDispatch EventPluginUtils.js:95executeDispatchesInOrder > EventPluginUtils.js:119executeDispatchesAndRelease EventPluginHub.js:46forEachAccumulated > forEachAccumulated.js:25EventPluginHub.processEventQueue >…

### CASE-1334 · Password input type causes memory leak
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍11 💬13 · open · labels: Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** *Bug* **What is the current behavior?** An `<input type="password"/>` causes a memory leak. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** You can recreate the behavior by visiting…

### CASE-1341 · onChange doesn't fire if a capture-phase document listener for the underlying native event calls setState()
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** Checkbox not fires onChange for controlled component, it somehow related to global event listeners with setState, see sandbox example. **What is the expected behavior?** Checkbox should fire onChange handler **Broken example with REACT 16:** [link] **Working example with REACT 15 version:** [link]

### CASE-1347 · React 16 bug? Warning: Can only update a mounted or mounting component.
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬13 · closed · labels: Status: Unconfirmed
- **Excerpt**: I'm trying to run this snippet: ``` class Container extends React.Component { constructor() { super(); ​ this.state = { text: '...', }; } ​ componentDidMount() { fetch(urlThatReturnsSomeText) .then(res => res.text()) .then(text => this.setState({ text })); } ​ render() { return <div>{this.state.text}</div>; } } ``` It causes the warning. I noticed, that `setState` triggers `componentWillUnmount` hook in React 16. Hooks are consoled in the next order: ``` componentWillMount componentDidMount componentWillMount componentWillUnmount componentDidMount ``` In previous version component only was…

### CASE-1379 · Bug: componentWillUnmount is called twice
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍6 💬12 · closed · labels: Type: Bug/React 18
- **Excerpt**: React version: 18.0.0 ## Steps To Reproduce `componentWillUnmount` is called twice upon toggling the rendered component. Even when **StrictMode** is disabled Link to code example: [link] ## The current behavior After upgrading to react 18 we've seen some different behavior in a conditionally rendered, lazy class component. In the provided code example the class component is rendered first. After the first toggle, the class component's componentWillUnmount is called twice. Subsequent toggle calls correctly lead to a single componentWillUnmount invocation. This does only seem to affect the…

### CASE-1383 · Bug:
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: When an asynchronous request is made in useEffect, a warning may appear when updating the state Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. First, if the asynchronous request does not return to the switch page, a warning will appear at the top. At this time, you can find a way to cancel the asynchronous request in the return function; The second method: after the asynchronous request returns, the state will be…

### CASE-1399 · use-subscription causes UI tearing in some random cases
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Referring to [this twitter conversation]([link]), it seems that `use-subscription` can cause "UI tearing" in some random cases due to a (possible) race condition w.r.t. the combination of `subscribe` and `getCurrentValue` in internal usage. Here is a minimalistic application demonstrating the behaviour: [link] **What is the expected behavior?** I'd expect counters in the example application to *always*…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1305 · crossOrigin attribute needs to be applied before <img src> attribute
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬14 · closed · labels: Component: DOM/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** React doesn't handle changing the crossOrigin attribute properly **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** ### Same img going from **no**…

### CASE-1306 · Expected subtree parent to be a mounted class component
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬14 · closed · labels: Resolution: Needs More Information
- **Excerpt**: Hi, Getting this error when trying to mount my component: ![image]([link]) The Component with the tooltip seems to be working fine on its own. when I tried to mount it as a child in this FeedCard it causes the crash. Code: FeedCard: ``` import React, { Component } from 'react'; import PropTypes from 'prop-types'; import { ListItem, Person, StayIndicator } from '@user/atomic-design/dist/v2/components'; import FeedCardInfo from './FeedCardInfo'; class FeedCard extends Component { render() { const { isSelected } = this.props; return ( <ListItem dense className="bg-hover-white flex-column px-3…

### CASE-1317 · [DevTools Bug]: React Profiler reports higher hook numbers than shown in Components
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍19 💬13 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps - Clone the [link] repository - Switch to the branch called `day5` - `cd widgets-editor && yarn && yarn start` - An app will open. Reproduce the following interaction & record a Profiler trace: [link]]/assets/2953267/fe0eb272-d136-44a6-bfe0-4f1b20ff27de - Find the first render of the `ResizableComponent` component in the trace - Observe React Profiler reporting “hook 32 changed” whereas the Components pane reporting only 30 hooks in the component (as in the video) Sorry for not having a minimal repro! I was only able to reproduce this in big apps like…

### CASE-1331 · Can't import image dynamically in reactjs
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> Hi, I have a problem to import an image dynamically. I have a code like this: `console.log(require("./img/item.png"));` and I want to do this: ``` let url = "./img/item.png"; console.log(require(url)); ``` And it doesn't work I dont know why? Can someone help me? Thank you!

### CASE-1340 · onChange doesn't fire if input re-renders due to a setState() in a non-React capture phase listener
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍10 💬13 · open · labels: Type: Bug/Component: DOM/React Core Team
- **Excerpt**: Extracting from [link]][ref]. This issue has always been in React. I can reproduce it up to React 0.11. However **it's probably extremely rare in practice and isn't worth fixing**. I'm just filing this for posterity. Here is a minimal example. ```js class App extends React.Component { state = {value: ''} handleChange = (e) => { this.setState({ value: e.target.value }); } componentDidMount() { document.addEventListener( "input", () => { // COMMENT OUT THIS LINE TO FIX: this.setState({}); }, true ); } render() { return ( <div> <input value={this.state.value} onChange={this.handleChange} />…

### CASE-1346 · Support srcObject attribute for video element
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍31 💬13 · closed · labels: Type: Feature Request/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** feature **What is the current behavior?** currently you cannot set the srcObject for a video. You get an error: ``` Warning: React does not recognize the `srcObject` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `srcobject` instead. If you accidentally passed it from a parent component, remove it from the DOM element. ``` **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar…

### CASE-1358 · Bug: [19.2.0] Streaming scripts injected in `onAllReady` in `renderToPipeableStream` and `prerenderToNodeStream`
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍12 💬12 · open · labels: Status: Unconfirmed
- **Excerpt**: When using [`renderToPipeableStream` with `onAllReady`]([link]), while also using [lazy loading components with React.lazy]([link]), React is injecting streaming scripts and hidden HTML elements into the resulting HTML. [React recommends using `onAllReady` for crawlers]([link]), like SEO crawlers, logically, but this new behaviour injects scripts and hidden HTML elements, impacting negatively in SEO scores. References: - [link] - [link] This same issue also occurs with the [`prerenderToNodeStream` API]([link]) React version: 19.2.0 React DOM version: 19.2.0 ## Steps To Reproduce <details>…

### CASE-1362 · Bug: JSX SVG Typescript type error: missing 'slot' attribute
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍4 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ![Image]([link])

### CASE-1364 · Bug: Conditionally rendering a lazy loaded component only after the parent node is attached causes infinite loop
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬12 · closed · labels: Resolution: Expected Behavior
- **Excerpt**: React version: 18.3.1 and [19.0.0-rc-b57d2823-20240822]([link]) ## Steps To Reproduce 1. Create a component that renders the children inside a `<div>`, but only after it has obtained reference to that div (via putting the div node into a state) 2. Pass a lazy loaded component as children So basically something like: ```jsx import { Suspense, lazy, useState } from 'react'; const LazyLoadedComponent = lazy( () => new Promise((resolve) => { setTimeout( () => resolve({ default: () => <div>Lazy loaded component</div>, }), 500, ); }), ); const RenderAfterMount = (props) => { const [node, setNode] =…

### CASE-1365 · [React 19] useEffect does not re-fire on hot reload with React 19 and vite
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍17 💬12 · closed · labels: Type: Bug/React 19
- **Excerpt**: In prior versions of react, saving a file will trigger the components `useEffect` hooks to run. This does not work for react 19. This applies to both [@user/plugin-react-swc]([link]) and [@user/plugin-react]([link]) Repo: [link] Steps to reproduce: - npm i - npm run dev - open repo and press save in App.tsx - console.log will not fire after pressing save - npm i react@user react-dom@user - npm run dev - press save in App.tsx - console.log will fire Video reproduction: [link] Notes: I previously opened a ticket here but it is perhaps an issue with react 19: [link]

### CASE-1370 · Bug: Minified React error [ref] | createRoot(...): Target container is not a DOM element.
- **Principles**: P-A3, P-H1 · **Env**: react, vite, tailwind
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed
- **Excerpt**: createRoot(...): Target container is not a DOM element. This issue keeps showing up but I've made sure I'm using the correct DOM element which comes from the vite+react boilerplate! (root) ![image]([link]]/assets/78984964/01afca24-73c4-416f-b605-51252991d8b5) ![image]([link]]/assets/78984964/20ea5e3f-0d72-48b5-92f7-a53b6f5b616e) ![image]([link]]/assets/78984964/e49bcb0d-c62c-46ad-ab8e-fc835406c3b7) React version: ## Steps To Reproduce 1. Deploy vite+react+tailwind framework as indicated in tailwindcss website: [link] Link to code example: [link] ## The current behavior message shows up…

### CASE-1385 · Bug: devtools: throws JSON.parse exception.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ![image]([link]) React version: ^17.0.1 ## Steps To Reproduce 1. it's just starts throwing error, and i do not remember is this was before. I'll be glad to give you more info but i don't know where to search for any about this.

### CASE-1389 · Bug: "Unspecified error" some of the time in IE11 in iframe
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬12 · closed · labels: Type: Bug/Component: DOM/good first issue (taken)
- **Excerpt**: React version: 16.12 ## Steps To Reproduce 1. Open [link] in IE11 2. Wait for the application to load in the iframe ## The current behavior Sometimes an "Unspecified error" will appear in the console and the viewer in the iframe won't load ![image]([link]) Unfortunately it is not 100% reproducible. Sometimes the error won't occur. I'm also having trouble creating a minimal sample to reproduce this. ## The expected behavior There is no error. ## Investigation The relevant line in the callstack where the error is occurring is here…

### CASE-1392 · Bug: react-hooks/exhaustive-deps lint rule not working as expected
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed
- **Excerpt**: This issue is related to the `react-hooks/exhaustive-deps` not detecting a reasonable case of warnings regarding missing dependencies. ![image]([link]) The App contains two Children (One is the "increment" button where clicking on it will increment the value and the other child have an alert button to show the current value) while showing the current value also in the Parent component. React version: 16.12.0 ## Steps To Reproduce 1. Go to the CodeSandbox below. 2. Click on "increment" button to update the value multiple times. 3. Click on the "Alert Current Value" to alert the recent value…

### CASE-1394 · Bug: Nested SuspenseList may display fallbacks while the component is loaded on re-render
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬12 · open · labels: Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> **React version:** 0.0.0-experimental-e5d06e34b Hoping this can be helpful for you. Here is what looks to be a bug with concurrent mode and nested SuspenseList. ## Steps To Reproduce _In concurrent mode only_ 0. Setup Let's suppose we have three components `<A />` (**not** lazy loaded), `<B />` (**not** lazy loaded) and `<C />` (lazy loaded). In other words: ```jsx…

### CASE-1397 · img onLoad does not always fire in react 18
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍5 💬12 · closed · labels: Type: Needs Investigation/React 18
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** `<img onLoad={fn} />` does not always trigger `fn` when rendered using createRoot if it has siblings which are heavy to render (I think?). **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1307 · Microdata HTML attributes are camelCase in server render
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍3 💬14 · closed · labels: Type: Regression
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** ReactDOM render methods (renderToStaticMarkup, renderToString, etc) generate camelCase microdata attributes. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** [link] **What is the expected behavior?** Microdata attributes should be…

### CASE-1308 · False positive warning about style mismatch when hydrating server markup in IE11
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬14 · closed · labels: Type: Bug/Browser: IE/Difficulty: medium/Component: Server Rendering/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug? (not a biggy - not sure if IE11 is support for development) **What is the current behavior?** IE11 seems to always throw a warning for hydration failures eg > **Warning: Prop `style` did not match. Server: "text-decoration: none;" Client: "text-decoration:none"** Note: there is a space between the colon and none from Server, Client has no space **If the current behavior is a bug, please provide the steps to reproduce and if possible a…

### CASE-1309 · Expose key for helper libraries
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** You can't access this.props.key / this.key **What is the expected behavior?** We have a use case where we hydrate/dehydrate certain components for an HMR plugin we've developed internally. But, when HMR'ing a file, we often need to access things within loops, and rehydrate the right data. Right now, we have to add a secondary key to everything, but this is only for our development tool. If we had access to keys, this would be trivial to implement. It's also *impossible* to implement with a…

### CASE-1318 · Bug: putting promise into JSX will cause hydration issue
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.3.0-canary-5dd35968b-20231201 ## Steps To Reproduce 1. clone [link] 2. pnpm install && pnpm run dev Link to code example: ```js import { Component } from '@/components/component' export default function Home () { const delayedMessage = new Promise((resolve) => { setTimeout(() => resolve('Hello from server!'), 2000) }) return ( <main> <div> <Component…

### CASE-1322 · Bug: Incorrect Hydration Mismatch Detection during Suspense - "Hydration failed because the initial UI does not match what was rendered on the server."
- **Principles**: P-F4 · **Env**: react, next.js
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug/React 18
- **Excerpt**: React version: 18.0.0 ## Steps To Reproduce 1. Add a Suspense Boundary 2. Add a **component that will suspend** to load some data (faked). 3. Render at least one **sibling component** _after_ the suspending component. 3. Render server-side using renderToPipeableStream() 4. Render client-side using hydrateRoot() __Reproductions in CodeSandbox:__ - [Reproduction 1]([link]) with Next.js [Edit]([link]) - [Reproduction 2]([link]) using renderToPipeableStream (based on [example demo]([link])) ````jsx <> <h4>This headline hydrates fine. </h4> <SomethingA />{/* Will suspend on client and server */}…

### CASE-1323 · Bug: Nested ReactDOMServer.renderToString calls cause React hooks to throw invalid hook exception
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬13 · open · labels: Type: Bug/Component: Server Rendering/Type: Needs Investigation
- **Excerpt**: When you make a nested ReactDOMServer.renderToString call (i.e. call ReactDOMServer.renderToString from within a component rendered using ReactDOMServer.renderToString), you can not use any hooks after the second call. Custom hooks work, but React hooks throw a invalid hook call error. Not sure if this is an acceptable use case for ReactDOMServer, this is how a current project is setup, I am just making some additional hook calls and encountered this error. I have replicated the issue on a fresh React app with nothing else. React version: 17.0.2 ## Steps To Reproduce 1. Createa a component,…

### CASE-1338 · React.createContext with SSR leads to concurrency problems in environments with co-routines
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬13 · closed
- **Excerpt**: First some context: i am using react SSR with meteor. Meteor uses node-fibers (co-routines, see [link]), which enables async code to run synchronously without async/await or generators. So i think that React.renderToString could be interrupted by other code and this leads to the problem, but i am totally unsure. Given the following code: ``` const MyContext = React.createContext(); const AppContent = () => ( <MyContext.Consumer> {props => <SomeComponent {...props} />} </MyContext.Consumer> ) const App = props => ( <MyContext.Provider value={props}> <AppContent /> </MyContext.Provider> ) ```…

### CASE-1339 · Schedule, SSR, window.addEventListener is not a function
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍5 💬13 · closed · labels: Type: Regression
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** window.addEventListener is not a function in node_modules/schedule/cjs/schedule.development.js:366:10 **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example…

### CASE-1342 · How to traverse the React tree?
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍4 💬13 · closed
- **Excerpt**: I would like to propose to add a `walkTree` method in React. Today a lot of libraries relies on walking the React tree for SSR. It is used to preload data, styles or whatever. I am asking because I found a [bug in Loadable Components]([link]) and I fixed it, but [the bug is also in React Apollo]([link]) and probably in other libraries that use this strategy. I have several questions: - Is `walkTree` the good strategy? If not can you tell me how to do it? - If `walkTree` is the good strategy, could you maintain it and expose it in React or another package?

### CASE-1367 · Bug: Hydration error due to <button>
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: ## is there any way to fix this issue Unhandled Runtime Error Error: Hydration failed because the initial UI does not match what was rendered on the server. See more info here: [link] In HTML, <button> cannot be a descendant of <button>. This will cause a hydration error. <button> ^^^^^^^^ <_c> <button> ^^^^^^^^ <!-- Your bug will get fixed much faster if…

### CASE-1376 · Bug: Support nonce for streaming scripts
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Have a server-rendered React app with a CSP that specifies a nonce for scripts 2. Try to use suspense + streaming ## The current behavior As noted in @user's [comment]([link]][ref][ref]), nonce support should be added to the scripts that React injects for suspense + streaming. That doesn't appear to be happening. I can't…

### CASE-1380 · Bug: `suppressHydrationWarning` is not taken into account in production builds in React 18
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Type: Bug
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18 ## Steps To Reproduce 1. Clone [link] 2. run: npm install 3. run: npm build 4. run: npm run start-example-build 5. Go to the following URL: [link] 6. Open the console log: no errors 7. Kill the app, and update the react and react-dom package to version 18.0 8. Re-run steps 2 to 5 9. Open the console log: lots of hydration errors #[425]([link]),…

### CASE-1387 · Bug: hydrating fails with nested paragraph and dangerouslySetInnerHTML
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍4 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.13.1 ## Steps To Reproduce 1. Use the `dangerouslySetInnerHTML` on a `p` element where the `__html` contains a `<p>` tag 2. Server-side render this component and try to hydrate Link to code example: ```html <!doctype html> <html> <head> <script crossorigin src="[link]></script> <script crossorigin src="[link]></script> </head> <body> <!-- Pretend for…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1310 · input autoFocus causes focus to be emitted before ref
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍6 💬14 · open · labels: Type: Bug/Component: DOM/Difficulty: challenging
- **Excerpt**: [link] Can reproduce on Chrome, but not in IE11.

### CASE-1311 · Edge: File input inside a label keeps reopening the file explorer window
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** I want to report a bug. **What is the current behavior?** When using a `<input type="file">` inside a `<label>` on MS Edge, the file explorer window keeps reopening. When this happens, the only way to close Edge is by killing the process. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** Place a `<input type="file">` inside a `<label>`, like this: [link] **What is the expected behavior?** When the file explorer window is…

### CASE-1316 · [DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍8 💬13 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app local repo ### Repro steps just loaded the local react app ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 5.3.1-ccb20cb88b ### Error message (automated) Cannot add node "1" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1172435 at v.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1141877) at…

### CASE-1319 · [DevTools Bug]: TypeError: Cannot read properties of undefined (reading 'forEach')
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app the NextJS App in development phase ### Repro steps On refreshing the web pages error being shown sometimes <img width="722" alt="image" src="[link]]/assets/56193250/bc3e26a3-243b-4e02-8d45-7c2f4a838323"> ### How often does this bug happen? Sometimes ### DevTools package (automated) _No response_ ### DevTools version (automated) 4.28.0 (7/10/2023) ### Error message (automated) TypeError: Cannot read properties of undefined (reading 'forEach') ### Error call stack (automated) ```text setup chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/backendManager.js (4073:17)…

### CASE-1320 · [DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, react
- **Signals**: 👍18 💬13 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app running react app ### Repro steps i just made a basic portfolio app on react app and suddenly this bug showed up, and i cant seem to access the localhost link in any browser beside Firefox ### How often does this bug happen? Often ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.8-2468a8735 ### Error message (automated) Cannot add node "1" because a node with that id is already in the Store. ### Error call stack (automated) ```text emit@user://961fb755-5a59-4c1c-943c-029f7cf6279b/build/main.js:27059:22…

### CASE-1321 · Bug: Big text is breaking right side of div
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, macos, react
- **Signals**: 👍0 💬13 · closed · labels: Status: Unconfirmed
- **Excerpt**: When rendering a huge text inside a div, this text start to break the div even if it has styles to configure the word-wrap, word-break and display. The same behavior isn't observed when using pure HTML markup. React version: 18.2.0 Chrome: Version 109.0.5414.119 (Official Build) (x86_64) macOS ## Steps To Reproduce 1. Create a variable with at least 10.000 chars 2.Scroll to see it breaking the div at right <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately…

### CASE-1324 · [DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, windows, react
- **Signals**: 👍11 💬13 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Go to any site built with React.js 2. Open the React Devtools from the firefox developer tools window. 3. There will be an empty component when **Components** tab is selected 4. Now refresh the page to see the component tree getting populated inside the **Components** tab. Windows Version - Windows 10 21H1 Firefox Version - v90.0.2 (64-bit) Attaching a GIF of the issue while visiting reactjs.org - ![O7VSagSc5l]([link]) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No…

### CASE-1325 · [DevTools Bug] Cannot remove node "30123" because no matching node was found in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍16 💬13 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Go to this [GetStream.io demo app]([link]) 2. Open React dev tools 3. Send a message in the app 4. Error ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.13.5-0ae5290b54 ### Error message (automated) Cannot remove node "30123" because no matching node was found in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:21178:43 at bridge_Bridge.emit…

### CASE-1327 · Bug: onLoadStart is not passed to img
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, react
- **Signals**: 👍11 💬13 · closed · labels: Component: DOM/Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Although it seem a valid event, and it works using vanilla HTML/JS (at least **Firefox**, Chrome still have an open bug [link]), it seems that using and `onLoadStart` event on an `img` is not working in react. React version: 17.0.0 ## Steps To Reproduce 1. With **Firefox** open browser development tools 2. Disable browser's cache 3. Using Firefox go to [link] 4. Check the console Link to code example: [link] ## The current behavior The console shown: ``` Vanilla img loading Vanilla img loaded React img loaded ``` Seems that the `onLoadStart` is not working. ## The expected behavior The…

### CASE-1328 · Bug: React DevTools failing silently on Debian
- **Principles**: P-G1, P-G2, P-G3 · **Env**: linux, react, electron
- **Signals**: 👍1 💬13 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: <!-- React DevTools fails silently and cannot launch on Linux because of Electron version > 5 and the sandbox issue --> React version: react-devtools v4.9.0 ## Steps To Reproduce 1. On debian, install react-devtools as a dev dependency in your project or globally 2. try and run npx react-devtools or just react-devtools <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> ## The current behavior The command fails silently and nothing…

### CASE-1332 · Chrome Extension Background Page and useEffect Not Triggered
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍3 💬13 · closed · labels: Type: Bug/Type: Regression/Component: Scheduler
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** When using `useEffect` from a background page in a chrome extension the body of the effect isnt triggered. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem.** See the demo project here: [link] **What is the expected behavior?** `useEffect` should be triggered **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** It stopped working somewhere between react 16.8…

### CASE-1336 · useEffect is broken for React Native with JSC
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, android, react
- **Signals**: 👍3 💬13 · closed · labels: Type: Bug/Component: Hooks
- **Excerpt**: As reported in open source ([framework]-native[ref]), the `useEffect` hook is broken for React Native when using JavaScriptCore (which affects both iOS and Android). This is because the [`setTimeout` branch of `scheduler`]([link]]/blob/c2a2d8a539bf02e40c43d36adc2826e228f30955/packages/scheduler/src/Scheduler.js#L463-L495) specifies a [5000ms delay]([link]]/blob/c2a2d8a539bf02e40c43d36adc2826e228f30955/packages/scheduler/src/Scheduler.js#L483). This 5000ms is _supposed to be the maximum expiration time_, but in this fork it _ends up being the minimum callback time_ (unless another state update…

### CASE-1343 · Password field causes memory leak in production builds
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍1 💬13 · closed · labels: Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** *Bug* **What is the current behavior?** We're noticing that password-type input fields (as well as their wrapping parents) remain as detached DOM elements when conditionally being rendered and removed from the DOM. This issue seems to be occurring across several applications using React 16, include a newly created app from `Create React App`, and we're able to produce Chrome memory heap snapshots in all of these environments to demonstrate this…

### CASE-1344 · Refs Must Have Owner Warning
- **Principles**: P-G1, P-G2, P-G3 · **Env**: windows, react, electron
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ** Reporting a bug The problem I'm having is in the interplay of several packages but I feel that the only package actually doing something wrong here is react. Versions: - react 16.2.0 (also happened with 15.something) - node.js 7.9 (electron 1.7.10) - windows 10 ** Current behavior I get the error message from here [link] although none of the three explanations is true. Actually react _is_ loaded twice but it's the same version and there is little I can do to prevent it. What happens, as far as I can understand is this: my application imports react from in two ways * application -> react *…

### CASE-1350 · dangerouslySetInnerHTML not working in SVG elements on Edge browser
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: This appears to be a bug in React with the Microsoft Edge browser. This was previously a bug in older Internet Explorer browsers as well, but appears to have been fixed by [ref] – unfortunately the fix did not resolve the issue in Edge. I modified the codepen from the original issue to use React 15.3.0, which includes the above-referenced pull request, and demonstrates the bug in Edge: [link] Here is the output of that Codepen in IE 11 – this is the expected behavior as `innerHTML` is not available in Internet Explorer, yet React 15.3 is still able to function: ![image]([link]) And here is…

### CASE-1352 · Selects with a lot of default values aren't running efficiently.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: An app I'm building requires a `select` with a lot of `option`s, and they are all checked by default. There appears to be an issue with React's performance for this situation. [Here's a JSFiddle.]([link]) It builds a `select` with 500 options, all selected, and takes over a second to run on my computer. If you remove `defaultValues`, you can see that it runs almost instantly. And if you set it to 5000 options, it takes over 2 minutes to run for me. The problem appears to get exponentially worse the more selected options you have. I realize that this is an edge case, but it also seems like a…

### CASE-1353 · React fails to render SVG children in Edge/IE
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: edge/, react
- **Signals**: 👍0 💬13 · closed · labels: SVG
- **Excerpt**: Here's a [gist]([link]) that illustrates the issue. `index.html` will work as expected (rendering a red circle) in most browsers. If you run the `phantom-run.js` script in PhantomJS 2.0 (assuming you have the page hosted at `localhost:3000`), however, it throws this error: > Error: Invariant Violation: findComponentRoot(..., .0): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a `<tbody>` when using tables, nesting tags like `<form>`, `<p>`, or `<a>`, or using non-SVG elements in an `<svg>` parent. Try inspecting…

### CASE-1354 · MozMacOSXFontSmoothing is rendered incorrectly
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: firefox, macos, webkit, react
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug
- **Excerpt**: The Firefox equivalent of `-webkit-font-smoothing` is `-moz-mac-osx-font-smoothing`. React's serialization of this style prop is incorrect (`-moz-mac-o-s-x-font-smoothing`). See this fiddle in firefox: [link] If the initial state is supposed to enable font smoothing (via innerHTML) it breaks, but subsequent updates (which use the DOM API) work.

### CASE-1360 · Bug: Chrome autofill made the text field can't select
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, macos, react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17, 18, 19 (didn't test older version) Additional info ``` Google Chrome: 133.0.6943.142 (Official Build) (x86_64) OS: macOS Version 12.6 (Build 21G115) ``` ## Steps To Reproduce 1. Create the new project with any build tool or framework 2. Create the component with this content ```jsx import { useState } from 'react' const LoginForm = () => { const…

### CASE-1361 · Bug: Support command event
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, edge, firefox 144, safari 26, react
- **Signals**: 👍37 💬12 · open · labels: Status: Unconfirmed
- **Excerpt**: `command` and `commandfor` [attributes]([link]) were recently added to the HTML spec, along with a new [`command` event]([link]). This is supported in Chrome/Edge since [version 135]([link]), [Firefox 144]([link]) and [Safari 26.2]([link]). See MDN for a list of the valid commands - the `command` event should fire for all these commands. React version: 19 ## Steps To Reproduce 1. Include the following markup ```jsx <button command="toggle-popover" commandfor="popover">Toggle popover</button> <div onCommand={handleCommand} popover="auto" id="popover">popover content</div> ``` 2. Define the…

### CASE-1373 · [DevTools Bug] Cannot remove node "226752" because no matching node was found in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍9 💬12 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps [link] ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.6-7f8c501f6 ### Error message (automated) Cannot remove node "226752" because no matching node was found in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:28710:43 at bridge_Bridge.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:26606:22) at…

### CASE-1374 · [DevTools Bug]: provide an icon to Edge devtools?
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: edge, edge 2, react
- **Signals**: 👍0 💬12 · closed · labels: Type: Feature Request/Status: Unconfirmed/Component: Developer Tools/good first issue
- **Excerpt**: ### Website or app Website: [link] ### Repro steps 1. open developer tools in Edge 2. go to settings -> experiment -> enable Focus Mode -> reload DevTools 3. we can see the react extension is loaded as below in devtools: ![image]([link]) 4. since the react extension doesn't provide the icon when it's created, devtools fallback to use the default icon to represent the extension. However, we've received couple of requests from users that they'd like to see the icon in the panel. for instance: ![image]([link]) Wondering if it's possible to provide an icon to Edge in the…

### CASE-1375 · Bug: input type=date clears on Firefox when invalid date is typed
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, macos, react
- **Signals**: 👍2 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: If you input incorrect value in date input on Firefox, the whole input clears. I've prepared a sandbox: [link] . If you input `0` into any part (day, month, year) of the field, it goes to empty state. React version: 18.2.0 Firefox: 110.0 macOS ## Steps To Reproduce 1. Fill date input with correct value 2. Enter `0` into it 3. The whole field clears Link to code example: [link] ## The current behavior The field clears ## The expected behavior The field should behave the same as uncontrolled HTML input behaves (specifically, Firefox fills the date part with zeroes).

### CASE-1378 · Bug: beforeInput event doesn't fire when input is replacing previous text
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, macos, react
- **Signals**: 👍0 💬12 · open · labels: Component: DOM/Status: Unconfirmed/Difficulty: medium/Type: Needs Investigation/good first issue (taken)
- **Excerpt**: There is a strange React bug where the `beforeinput` event does not fire but only on Firefox (v99). React version: 17.0.2 ## Steps To Reproduce There are two ways I have found to reproduce this bug and both involve a scenario where the `beforeInput` event is replacing the previous text and both are only problematic on Firefox when the events are triggered via React rendered input. ### MacOS Popup 1. (Using MacOS (v12.1) and a Firefox browser). When focused in a browser input, hold down the "a" key (or any standard english character with a latin accented variation) and wait for the accent…

### CASE-1382 · [DevTools Bug] Children cannot be added or removed during a reorder operation.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, react
- **Signals**: 👍11 💬12 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Click next day button or prev day button 2. Normally there are only three column for three days but you can see the fragment of other column with error message. ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.13.5-0ae5290b54 ### Error message (automated) Children cannot be added or removed during a reorder operation. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:21301:41 at bridge_Bridge.emit…

### CASE-1388 · Bug: Infinite iterator in props causes crash in react-dev-tools
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍0 💬12 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: React version: Any React Developer Tools: 4.8.2 ## Steps To Reproduce 1. create and render a Component which contains infinite iterator ```js function* makeCounter() { let c = 0; while (true) { yield c++; } } const counter = makeCounter(); const Sample = () => <Component counter={counter} />; ``` 2. open chrome devtools and select this component with React Dev Tools (Components tab) 3. crashes after few seconds Link to code example: [link] ## The current behavior The page crashes due to devtools crash. ## The expected behavior devtools doesn't crash. This is because ReactDevTools is trying to…

### CASE-1393 · Bug: rules-of-hooks should support hooks inside top-level IIFEs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: React version: **v16.13.1** eslint-plugin-react-hooks version: **v3.0.0** ## Steps To Reproduce 1. Write something like this: ```js const Component = () => { (() => { useState (); })() }; ``` 2. Run the `rules-of-hooks` linter rules on it. ## The current behavior Those linter rules will complain that the `useState` hook is being called inside a callback. ## The expected behavior Those linter rules should be a little smarter and ignore this kind of top-level IIFE "callback", since if I'm understanding things correctly it's completely safe to call hooks this way. This is a bit of an edge case,…

### CASE-1395 · [react-devtools-extensions] Bug: Uncaught TypeError: Cannot read property 'sub' of undefined when navigating to plain-text pages
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: chrome, chromium, ubuntu, react
- **Signals**: 👍2 💬12 · closed · labels: Type: Bug/Component: Developer Tools/good first issue (taken)
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React Developer Tools: 4.4.0 f749045a5 (1/3/2020) from chrome webstore Chromium: 81.0.4024.0 snapshot Ubuntu: 18.04 ## Steps To Reproduce 1. Open chrome with React Developer Tools installed 2. Open developer console 3. In console settings (cogwheel in console's top right corner) check "Preserve log" checkbox (to make sure that the log is not overwritten on navigation)…

### CASE-1398 · React devtools blank (standalone version)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: ios, react
- **Signals**: 👍8 💬12 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** 1. Open iOS simulator 2. turn on debugging 3. open react-devtools 4. refresh…

### CASE-1400 · Controlled input makes browser not saving submitted value (for autocomplete)
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome, windows
- **Signals**: 👍19 💬12 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Bug** (behaves different per browser, but generally inconsistent to uncontrolled inputs) **Current behavior** Reproduce with [link] 1. Type `a` in *name* field, and `b` in *uncontrolled* field. 2. Submit. 3. Re-run the fiddle. 4. Focus input fields to see if browser "saves" previous input. **Expected behavior** Browser provides `a` suggestion for *name* and `b` for *uncontrolled* field. Controlled and uncontrolled elements should behave the same. **Actual result** Uncontrolled input has `b` suggestion, but controlled input (*name*) has **no** suggestion. Tested on Windows 7, Google Chrome…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1313 · Input type 'email' as controlled component does not control white spaces
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍6 💬14 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: A controlled input filed of type email behave differently from a controlled field of type text. If you manage a controlled input field of type email, the actual state and the rendered DOM are different if the user digit spaces, e.g. ' '. With an input element like this: `<input type="text" value={'stringFromTheState'} />` if you try to digit letters or spaces, you will always get rendered the string 'stringFromTheState'. With an input element like this: `<input type="email" value={'stringFromTheState'} />` if you try to digit letters you will always get rendered the string…

### CASE-1314 · Select option empty value regression in 15.0.0-rc.1
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: Type: Bug/Difficulty: starter/Type: Regression
- **Excerpt**: React 0.14.7: `<option value="">empty</option>` emits empty string on change [link] React 15.0.0-rc.1`<option value="">empty</option>` emits string with value "empty" on change [link] This is because React 15.0.0-rc.1 cuts off `value=""` from option tag

### CASE-1335 · Cannot type Chinese in `<input />` under controlled mode + ReactDom 16.8.2
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍26 💬13 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Cannot type Chinese in `<input />` under controlled mode when using react-dom 16.8.2 via CND **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:**…

### CASE-1345 · Number input gets cleared when typing period as decimal mark
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** My OS and browser are configured to a locale that uses comma as the decimal mark (Finland for those interested). In the codepen below when I accidentally type a period after some number the whole input gets cleared. This is somehow related to the parent component's state being updated because if the `defaultValue` prop is removed from the `<Input>` component the input doesn't get cleared. **If the current…

### CASE-1348 · Number input not firing onChange
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: I don\`t know if it is bug or feature, but since you put into input with type number two minuses it will stop calling `onChange` callback, but value inside input will change **React 15.4.2** **Browser Version 60.0.3112.90 (Official Build) (64-bit)**

### CASE-1349 · Show a warning when value is provided to a checkbox input
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: Type: Enhancement/Component: DOM/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** A checkbox input can have a `value` prop which is most likely ignored (it should be `checked`). **What is the expected behavior?** I think we should throw a warning if a user provides a `value` instead of `checked` to a `<input type="checkbox" />`.

### CASE-1351 · Warning when changing the type and value of an input field
- **Principles**: P-G4, P-E3 · **Env**: opera
- **Signals**: 👍0 💬13 · closed · labels: Type: Bug
- **Excerpt**: In my render method I have something like ``` <input type={dynamicTypeValue} value={dynamicValue} /> ``` If I first render this input as a number, (e.g. `dynamicTypeValue = 'number'; dynamicValue = 5`) but then change the input to a string: (`dynamicTypeValue = 'string'; dynamicValue = '01/01/2016'`) I get a warning that the new value is not a valid number: ``` The specified value "01/01/2000" is not a valid number. The value must match to the following regular expression: -?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)? DOMPropertyOperations.js:142 The specified value "01/01/2012" is not a valid…

### CASE-1363 · Bug: pre-trigger form submit in multistep form
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: There is multistep form with 3 steps: 1st, 2nd steps don't contain forms and 3rd contains. There is general submit button for all steps: it is located outside steps and connected with 3rd form by its id (button has "form" attribute with the same id as form). Value for button "form" attribute is changing depending on active step. React version: 18.2.0 ## Steps To Reproduce 1. Open sandbox console 2. Click submit button 2 times in order to transit to 3rd step 3. See that onSubmit handler has already fired Link to code example: [link] ## The current behavior Form of 3rd step has submitted…

### CASE-1371 · Bug: React breaks HTMLInputElement.prototype.value interceptions
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Create a React application with an input element of type 'text' 2. With another script that runs **after react-dom**, intercept the calls to HTMLInputElement.prototype.value, which runs a piece of code X whenever someone accesses an input value 3. Access the input element `.value` The piece of code X, added in step 2, does…

### CASE-1386 · Bug: false warnings for controlled form inputs
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬12 · closed · labels: Resolution: Needs More Information
- **Excerpt**: There are plenty of issues opened for this but they're from like, 1995 so I thought it was best to not ping a thousand people with a comment. I've tried a handful of different approaches to this problem, including an uncontrolled approach which results in the same error. The form itself works fine but the console error grinds my gears. React version: 17.0.1 ## Steps To Reproduce 1. create a form as per example ```js const [date, setDate] = useState(d); const [time, setTime] = useState(t); function handler_onChange(event) { if (event.target.type === 'date') { setDate(event.target.value) } else…

### CASE-1396 · Input nodes leaked by the browser retain React fibers
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬12 · open · labels: Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** 🐛 **What is the current behavior?** Browsers retain references to inputs in their undo stacks, which in turn retain React fibers (including `memoizedProps`) See [link] **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** [link] **What is the expected behavior?** Although the…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1326 · Bug: memory leak in useReducer
- **Principles**: P-A1, P-A4, P-G3, P-F5, P-H3 · **Env**: opera, react
- **Signals**: 👍1 💬13 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 17.0.2 When using `React.useReducer()` and a new action is pushed, but the reducer returns the current state, the operation is queued in a pending queue. But if the component isn't re-rendered for other reasons, it will never start work on that pending queue. This can potentially rack up a huge list of `pending.next.next.next.next...` ## Steps To Reproduce 1. [link] 2. click increment a few times 2. place a breakpoint in react-dom.development.js line 16072, click increment, that should hit the break point, then expand queue.pending.next.next.next and see they are unique…

### CASE-1368 · Bug: useReducer triggers reducer one more time in React 18 Responsive Mode
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.x.x ## Steps To Reproduce ```ts import { useReducer } from "react"; function reducer(state, action) { console.log(action.type); } const initialState = { name: "Taylor", age: 42 }; export default function Form() { const [state, dispatch] = useReducer(reducer, initialState); function handleClick() { dispatch({ type: "click" }); } function…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1330 · Bug: startTransition suspends immediately when useLayoutEffect is present
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 0.0.0-experimental-f42431abe Please note that I do realize my repro steps are poor at best. I'm *not* filing this issue in hopes of support; I'm only filing this issue to provide one more datum point to help diagnose what I believe to be a bug, which I'm assuming you'll see more reports of. ## Steps To Reproduce tl;dr - there are some circumstances when a…

### CASE-1359 · Bug: Temporal objects (from temporal-polyfill, at least) can't be passed to a client component from server component
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍24 💬12 · open · labels: Status: Unconfirmed
- **Excerpt**: Using temporal-polyfill, you can't pass temporal instants (presumably any temporal objects) from a RSC to a client component. I understand this is probably expected and correct, but it is a major pain point as JS transitions to using Temporal for Dates. This may only be a limitation of temporal-polyfill and not actual Temporal, but I wanted to get the official feedback on whether this is expected React version: 19.1 ## Steps To Reproduce 1. Install temporal-polyfill 2. Instantiate Temporal.Now.instant() (for example) in a RSC and pass in props to a client component ## The current behavior ```…

### CASE-1377 · Bug: `startTransition` not working with `useSyncExternalStore`
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: react
- **Signals**: 👍1 💬12 · closed · labels: Status: Unconfirmed/Component: Concurrent Features
- **Excerpt**: SSR content shows a fallback during hydration if there has been an update to an external state, even if wrapped with `startTransition`. React version: 18.2.0 ## Steps To Reproduce 1. Create a basic SSRed React application that would have suspensible content. 2. Create an external store and read its values using `useSyncExternalStore` in the same component which has suspensible content. 3. Update this external store on the application mount(while hydrating), and wrap this update with `startTransition`; Link to code example: [link] ## The current behavior The content shows a fallback while the…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-1333 · Custom theme in React DevTools v4
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: Component: Developer Tools
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A missing feature in React DevTools v4. **What is the current behavior?** There isn't a menu for using a custom theme. Compare the old version: ![custom-theme]([link]) With the new one: ![image]([link]) I cannot find an option to customize the theme in any of the new sections. **What is the expected behavior?** A way to customize the theme colors (e.g. similar to the previous version). **Which versions of React Dev Tools are you using?** v4

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-1357 · Bug: Fallback image unnecessarily downloaded in `<picture>` element on Safari
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, safari 18, safari 3, macos, react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: When a <picture> element with a fallback image is rendered by React, Safari downloads both the fallback image and the correct image from the <source> element. This issue occurs only in Safari and results in the fallback image being downloaded unnecessarily. Reproduced on macOS Safari 18.6 React version: 19.2.0 ## Steps To Reproduce 1. Add the following tags inside a React component JSX : ``` <picture> <source media="(min-width:650px)" srcSet="[link] /> <source media="(min-width:465px)" srcSet="[link] /> <img src="[link] alt="Flowers" /> </picture> ``` 2. Open the app on Safari 3. Observe that…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-1372 · Bug: SSR: "Text content did not match" for inline CSS in style element
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: When using Server Side Rendering for the complete document (as suggested [in the docs]([link])), and having inline css that contains quotes (`"`, `'`) in a style element: ``` function App() { return <html> <head> <style>body { font-family: "Comic Sans"; }</style> </head> </html>; } ``` The quotes are encoded by `react-dom/server` as `&quot;`, and client-side hydration chokes: ``` Warning: Text content did not match. Server: "body { font-family: &quot;Comic Sans&quot;; }" Client: "body { font-family: "Comic Sans"; }" at style at head at html at App2 printWarning @ bundle.js:2426 ``` React…

