# Case Chunk 003 — Round 3

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1201 · Wrong "Each child should have a key prop" warning with babel-plugin-transform-react-inline-elements
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍6 💬17 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature / Bug **What is the current behavior?** ``` Warning: Each child in an array or iterator should have a unique "key" prop. See [link] for more information. in div in div in LandingPage (created by RouterContext) in Transition (created by CSSTransition) in CSSTransition in div (created by TransitionGroup) in TransitionGroup in AnimateComponentSwap in section in div in div in App (created by inject-App-with-UIStore) in inject-App-with-UIStore (created by RouterContext) in RouterContext (created by Router) in Router in…

### CASE-1229 · An update to the state from `useState` is not registered in event handler `onTransitionEnd`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: Type: Bug/Resolution: Duplicate
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When updating the state from `useState` doesn't actually update the component. In this case it is being updated on an event handler. I used `console.log` to verify that it is being called yet no update in the component is being dispatched. It's like React doesn't register that it wants to update the state. Might want to throw out that I'm new with this React Hooks and it could be something that I'm missing. **If the current behavior is a bug, please provide the steps to reproduce and if possible a…

### CASE-1234 · Further understanding reconciliation
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬16 · closed
- **Excerpt**: One tutorial mentioned that here ``` render3() { if (this.state.showWarning) { return ( <div> <Warning /> <StatefulComponent key="a" /> </div> ); } return ( <div> <StatefulComponent key="a" /> </div> ); } ``` that instance of `<StatefulComponent/> `will be maintained between re renders. I understand this. However let's consider transition from `showWarning= false` and then to `showWarning=true.` This means when `showWarning` became `true`, React checks that previously first child of div was `<StatefulComponent/>`, now it is `<Warning/> `- so why doesn't it unmount the` <StatefulComponent/>`?…

### CASE-1236 · React 15.6 Umbrella
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍37 💬16 · closed · labels: Type: Release
- **Excerpt**: **Update:** We just shipped 15.6.0 of `react` & `react-dom`! :) <s>Still ongoing;</s> - [x] Fixes for `React.addons` and the 15.6.0 release of those modules. - [x] Follow-up work --- ## `React.addons` fixes: - [x] **Create a build step for UMD builds of addons** - [x] Update [deprecation in `prop-types` library]([link]) and check other add-ons for deprecation warnings. Release new versions. ([link]) - [ ] <s>Why doesn’t TransitionGroup have a deprecation warning? Let’s add if we forgot it. Make sure the wording says “moved” since moving is all that happened. - note: we should point to a…

### CASE-1241 · Ship 0.11.2
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: Type: Release
- **Excerpt**: I think we want to get `React.createElement` out there. We can take some ridealongs for new elements or properties or any non-breaking bug fixes. List them if you have them. - [x] [ref] - [x] [ref] - [x] [ref] - [x] [ref] (needs jstransform & esprima bumps - bcc291b5918f62129d8411d5a9d8fdd53d9b5d07 - slightly risky but needed for some tooling)

### CASE-1279 · CSSTransitionGroup transitions don't fire reliably unless `transition` set on -active class
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: Here is an example of how `<ReactCSSTransitionGroup>` is explained in the README: [link] It works. Here is that same example except I've added a `componentDidMount` method that focuses a button within the component being transitioned: [link] Notice how the `enter` transition fails to animate. This is possibly a browser bug but I thought I'd let you know anyway. It's also worth noting that this bug can be worked around by moving the `transition` out of `.example-enter` and into `.example-enter.example-enter-active` like so: [link] Hope this helps improve React :D

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1202 · Doc: State and Lifecycle
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: From doc ([link]) about State and Lifecycle there is this class ``` class Clock extends React.Component { constructor(props) { super(props); this.state = {date: new Date()}; } componentDidMount() { this.timerID = setInterval( () => this.tick(), 1000 ); } componentWillUnmount() { clearInterval(this.timerID); } tick() { this.setState({ date: new Date() }); } render() { return ( <div> <h1>Hello, world!</h1> <h2>It is {this.state.date.toLocaleTimeString()}.</h2> </div> ); } } ReactDOM.render( <Clock />, document.getElementById('root') ); ``` My question is: since setState is asynch can't it…

### CASE-1210 · Bug: in <StrictMode>, useEffect cleanup is called for the second mount, not the first one
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬17 · closed · labels: Status: Unconfirmed
- **Excerpt**: Link to code example: [link] React version: 18.0.0 I have a feeling that this was described one way or another, so I'll keep this one minimalistic and straight to the point. Let's suppose we have some `Disposable` object we want to initialize when component mounts and destroy when component unmounts: ``` let globalCounter = 0; const useCounter = () => { const [counter] = useState(() => globalCounter++); useEffect(() => { return () => { console.log('clean counter', counter); }; }, []); return counter; }; ``` Let's render this component in strict mode, while looking at render/cleanup order…

### CASE-1218 · Bug: Uncaught Error: Unable to find node on an unmounted component in react 17.0.1
- **Principles**: P-F5, P-H3 · **Env**: ios, react
- **Signals**: 👍0 💬16 · closed · labels: Type: Bug/Status: Unconfirmed/Type: Needs Investigation
- **Excerpt**: Hi, I used react-sortable-tree package im my react project in component named Tree: ``` import React, { Component } from "react"; import axios from "axios"; import axios_config from "./axios_config"; import "react-sortable-tree/style.css"; import SortableTree, { } from "react-sortable-tree"; class Tree extends Component { constructor(props) { super(props); this.state = { treeData: [], }; } componentDidMount() { (async () => { axios_config.url = this.props.treeLink; axios_config.data = {}; try { let result = await axios(axios_config); console.log("response from server gotttt...");…

### CASE-1225 · useEffect() parent-child cleanup order
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍7 💬16 · closed · labels: Component: Hooks
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** `useEffect()` runs the returned cleanup function in the wrong order between parents and child components. Say both a parent and a child component use an effect to do initialization when mounted and cleanup when unmounted. The behavior of `useEffect()` will be: 1. parent initialization 1. child initialization 1. parent cleanup 1. child cleanup **What is the expected behavior?** Some type of hook that allows for proper cleanup order: 1. parent initialization 1. child initialization 1. child…

### CASE-1228 · Memory leak - React DOM keeps references to previous states/props/children of component
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍16 💬16 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** ReactDOM keeps references to previous states/props/children when component gets updated. All in all consuming three times as much memory as it really needed. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the…

### CASE-1231 · create-subscription: call getValue in the constructor is too early
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** BUG **What is the current behavior?** [link] I made an example to show the execution order of some lifecycle functions while remounting a component: ``` newComponent.constructor() -> oldComponent.componentWillUnmount() -> newComponent.componentDidMount() ``` `create-subscription` calls `getValue` in `constructor` and save the result to its state. Before `componentDidMount` called, any changes will be ignored. If I remount a component wrapped by…

### CASE-1243 · Unmounting React node
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: Type: Question
- **Excerpt**: I'm trying to unmount a React.js node with `this._rootNodeID` ``` handleClick: function() { React.unmountComponentAtNode(this._rootNodeID) } ``` But it returns `false`. The `handleClick` is fired when I click on an element, and should unmount the root-node. I've tried this as well: ``` React.unmountComponentAtNode($('*[data-reactid="'+this._rootNodeID+'"]')[0]) ``` That selector works with `jQuery.hide()`, but not with unmounting it, while the documentation states it should be a `DOMElement`, like you would use for `React.renderComponent` After a few more tests it turns out it works on some…

### CASE-1252 · Bug: React.StrictMode causes AbortController to cancel
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: Status: Unconfirmed/Resolution: Expected Behavior
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2 ## Steps To Reproduce 1. import a hook that uses AbortController 2. Without React.StrictMode the abort controller aborted = false 3. With React.StrictMode the abort controller gets set to aborted = true ```js const useAbortController = (abortControllerProp, shouldAutoRestart = false) => { const abortController = useRef(abortControllerProp ||…

### CASE-1257 · Bug: the order of effect and cleanup in Parent and Child component is weird
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍6 💬15 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: v16.12.0 ## Steps To Reproduce 1. just as the code example shows: just click the button 6 times respectively and see the console <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code…

### CASE-1268 · Suspense fallback remounts when each child resolves
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: Type: Bug
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Not sure if its a bug or a feature request. **What is the current behavior?** The component given as a fallback to Suspense is remounted each time a lazy child resolves. [link] This example shows how a fallback component, which counts up, is mounted more than once. **What is the expected behavior?** The fallback is mounted once and is only unmounted when all lazy children are resolved. In the example the counter would run up to 9. **Which…

### CASE-1287 · Bug: ESLint rule doesn't catch mistake with non-exhaustive dependencies
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.2 ## Steps To Reproduce 1. Use the `useState()` hook. * For example: `const [count, setCount] = useState(0)` 2. Create a function that directly uses the setter. * For example: `const inc: () => setCount((count) => count + 1)` 3. Witness how the function using the setter is not required to be listed as dependency, leading to soundness issues. * For example: ```jsx const incAndRemember = useCallback(() => { inc(); setLast({ last: inc }); // We might be setting a stale reference here, }, []); // because `inc` doesn't need to be specified here. ``` 4. Behavior in other hooks…

### CASE-1289 · Bug: `useInsertionEffect()` cleanup function does not fire if a component is wrapped in React.lazy
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍4 💬14 · closed · labels: Type: Bug
- **Excerpt**: React version: 18.2.0 ## Reproduction ```ts import { lazy, useState, useInsertionEffect, Suspense } from "react"; export default function App() { const [show, setShow] = useState(false); return ( <div> <Suspense>{show ? <LazyComp2 /> : <LazyComp1 />}</Suspense> <button onClick={() => setShow((s) => !s)}>Toggle</button> </div> ); } const MyComp = () => { useInsertionEffect(() => { console.log("start1"); return () => { console.log("stop1"); }; }, []); }; const MyComp2 = () => { useInsertionEffect(() => { console.log("start2"); return () => { console.log("stop2"); }; }, []); }; const LazyComp1 =…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1203 · Using <input type="file"/> throws SecurityError in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, opera, react
- **Signals**: 👍3 💬17 · closed · labels: Status: Unconfirmed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug. **What is the current behavior?** In development mode Firefox throws exception `SecurityError: The operation is insecure.`. It is thrown from `postMountWrapper` line `node.value = node.value;`. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** Demo: ``` javascript render() { return <input type="file"/>; } ``` **What is the expected behavior?** No exception. **Which versions of React, and which browser / OS are affected…

### CASE-1205 · ensureScrollValueMonitoring issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, react
- **Signals**: 👍3 💬17 · closed
- **Excerpt**: By having our app wrapped with Sentry (error catching service) we've encountered a bug - which may not be React specific but some kind of a workaround for it should be done. With that in mind I'm not sure how to tackle it yet. [link]]/blob/1573baaee8ba1c9cd84145b01effcb5eb80503fb/src/renderers/dom/client/ReactBrowserEventEmitter.js#L363 `TypeError: Cannot use 'in' operator to search for 'pageX' in null` - which occurs during mounting a root component into the DOM (using React 15) It happens really rarely in Chrome (so far caught only there, on versions 49 and 50, both Mac and Windows). With…

### CASE-1206 · Events doesnt work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, webview
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: Is there anything can make click-event not work? I`ve met a problem, every on-click event are not fired when i click it. Those all happened on android webview, and just a few device have this problem. thx for youre help

### CASE-1209 · Detect React DOM element with a wrong attribute name
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬17 · closed · labels: Component: DOM
- **Excerpt**: Dear all, I'm pretty new to React. For some reasons I want to use it without JSX, and I faced an issue I can't resolve: if in the react's element properties you have a `class` key instead of `className` key (for example), in the console you'll see a warning: `Warning: Unknown DOM property class. Did you mean className?`. Okay, I really mean `className`, now how can I find it? I mean where I supposed to look first? In the fb's react plugin for chrome I don't see "wrong" attribute, warning don't give me any stack trace either. If I have a huge DOM it's very hard to go thru it manually, without…

### CASE-1211 · [DevTools Bug]: Consistent memory leak when refreshing on React + non-React websites.
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍1 💬16 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps With Chrome version `121.0.6167.184 (Official Build) (arm64)` React dev tools: `5.0` - `Created from revision 993c4d003 on 12/5/2023.` Repeatedly refreshing `[link] continually leaks memory. ## With React Dev Tools ### Some memory is retained temporarily between refreshes, but notably forcing GC (the trashcan button), never shrinks + each subsequent refresh monotonically increases memory overhead. [link]]/assets/5288805/1cc1b7b4-06c5-4ec9-aaf4-e65c8e40dffc ## Without React Dev Tools ### Forcing GC without react dev tools drops the memory footprint…

### CASE-1219 · Bug: Error loading source maps for devtools extension
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 2, react
- **Signals**: 👍25 💬16 · closed · labels: Type: Bug/Component: Developer Tools/good first issue
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.x.x ## Steps To Reproduce 1. Have latest React devtools installed in Chrome 2. Open console and see warning about failure to load source maps. <img width="1161" alt="Screen Shot 2020-10-22 at 12 12 23 AM" src="[link]> <img width="422" alt="Screen Shot 2020-10-22 at 12 12 53 AM" src="[link]> Looks to be related to [link]][ref] <!-- Your bug will get…

### CASE-1221 · React Developer Tool Is not working in my localhost. It was working fine before.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍5 💬16 · closed
- **Excerpt**: Hi Team I am not able to use the react developer tool extension on my chrome browser, Which was working well before. I have tried by removing and re adding the extension again. Still the problem persists. I have attached a screenshot of the tool Icon on browser. I am very new to react Environment. Appreciate your help here. Thank you. ![image]([link])

### CASE-1227 · [react profiler bug]Error: "getCommitTree(): Unable to reconstruct tree for root "1" and commit 1"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬16 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: <!-- please provide repro information here --> --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.0.2-2bcc6c6 Call stack: at d (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:11:5744) at e.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:11:8526) at Ai (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:56:274200) at Ha (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:43:55890) at bi…

### CASE-1235 · onClick and onChange doesn't fire on radio buttons on iOS
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: ios
- **Signals**: 👍2 💬16 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** onClick and onChange doesn't fire on radio buttons on iOS TypeError: undefined is not an object (evaluating 'descriptor.get.call') **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** ``` <input type="radio" name="vote" value="0" onChange={this._sendVote} /> <input type="radio" name="vote" value="1" onChange={this._sendVote} /> ``` **What is the expected behavior?** onClick and onChange…

### CASE-1237 · React devtools 15.1.0 ctor timer error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬16 · closed · labels: Type: Bug
- **Excerpt**: bug Warning displayed in console about internal error of React performance measurement code. ``` js import React from 'react'; import { render } from 'react-dom'; import Perf from 'react-addons-perf'; import { browserHistory, Router } from 'react-router'; import routes from './routes'; import persist from 'altFlux/persist'; persist('docs'); const target = document.getElementById('app'); Perf.start(); render( <Router routes={routes} history={browserHistory} />, target, () => { Perf.stop(); Perf.printWasted(); } ); ``` ![screen shot 2016-05-23 at 9 21 08 am]([link]) 15.1.0 Google Chrome

### CASE-1240 · React's blur may not have relatedTarget in IE 9-11 where it is supported.
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍15 💬16 · closed · labels: Type: Bug/Browser: IE/Component: DOM
- **Excerpt**: ReactBrowserEventEmitter has some handling for `onBlur` and `onFocus`. See: [link]]/blob/94a3b0f8a304202bb7c4cc32286e404ac3cc9464/src/browser/ReactBrowserEventEmitter.js#L262-L293 React will first check if it can trap `focus` with a capturing event using `addEventListener`. If it can't and the browser supports `focusin` then it will use `focusin`. However there is a problem with this pattern. Internet Explorer implements `relatedTarget` on `focusin` and `focusout` but it does not implement it in `focus` and `blur`. As of IE 9, IE supports addEventListener and trapping capturing events. This…

### CASE-1245 · Bug: Java object is gone Instagram/ Facebook Webview
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, safari, android, webview, react
- **Signals**: 👍6 💬15 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: In Instagram/Facebook in-app browser (WebView), our React web app crashes with error: "Uncaught Error: Java object is gone" This happens when user loads the page after some seconds the error happen. The error does not occur in Chrome/Safari. We traced the crash to `navigationPerformanceLoggerJavascriptInterface.postMessage` Tested on latest versions of Facebook & Instagram on Android. Expected: App should not crash on call. Actual: WebView terminates interaction or throws fatal error.

### CASE-1248 · [DevTools Bug] Cannot add node "1590" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍10 💬15 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Just open web and error show ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.28.5-ef8a840bd ### Error message (automated) Cannot add node "1590" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1125187 at A.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1095954) at…

### CASE-1249 · [DevTools Bug] Commit tree already contains fiber "3289". This is a bug in React DevTools.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍5 💬15 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app no-url.com ### Repro steps Trying to navigate between the graphs. ### How often does this bug happen? Often ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.6-7f8c501f6 ### Error message (automated) Commit tree already contains fiber "3289". This is a bug in React DevTools. ### Error call stack (automated) ```text at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:27498:19) at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:27430:20) at…

### CASE-1250 · [DevTools Bug] Cannot add node "621" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍12 💬15 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Bug report: 1. Clone & run in the local environment. 2. Sign in. 3. Head over to the shop. 4. Add some items to cart. 5. Click on the cart icon. ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.2-1a88fbb67 ### Error message (automated) Cannot add node "621" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:27863:41 at bridge_Bridge.emit…

### CASE-1251 · [DevTools Bug] Element "41" not found
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍7 💬15 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps In branch litmus.tools -> feature/LIT-5: I just run the app and it throws this error. ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.0-bd2ad89a4 ### Error message (automated) Element "41" not found ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:39558:15 ``` ### Error component stack (automated) ```text at InspectedElementContextController…

### CASE-1255 · Error: "Commit tree does not contain fiber "5766". This is a bug in React DevTools."
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬15 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: Describe what you were doing when the bug occurred: 1. Profiling [recharts library]([link]) 2. Filtered on commits greater than 3s 3. Walking through the commits doing a next > next --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.10.1-f160547f47 Call stack: at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19729:21) at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19594:26) at ProfilingCache_ProfilingCache.getCommitTree…

### CASE-1256 · Error: "Cannot read property 'concat' of undefined"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍3 💬15 · closed · labels: Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: Describe what you were doing when the bug occurred: 1. Ran Profiler 2. (Was On Flamegraph) --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.10.0-11a2ae3a0d Call stack: at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19691:53) at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19563:26) at ProfilingCache_ProfilingCache.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20104:11) at…

### CASE-1259 · [DevTools] Cannot type into search box in Firefox when browser find-as-you-type setting enabled
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍0 💬15 · closed · labels: Component: Developer Tools/good first issue (taken)
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** 1. Enable Firefox Preferences > Browsing > Search for text when you start typing <img width="455" alt="Screen Shot 2019-12-26 at 10 56 15 AM" src="[link]> 1. Open React Devtools 1. Note that you can paste text into the search box, but keyboard input will not show any input 1. Disable above setting 1. Note that Devtools search accepts keyboard input **What is the expected behavior?** 1. Components search works regardless of find-as-you-type setting **Which versions of React, and which browser / OS…

### CASE-1260 · Firefox: Autocomplete/Autofill not working
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome
- **Signals**: 👍4 💬15 · closed · labels: Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Firefox doesn’t show any autofill suggestions on an input field with type "text" as soon as you connect the state with the attribute "value" **Reproduce** [link] * Open the provided sandbox example * Write test in both input fields * Press button * Write t in both text fields _Important:_ This works corretly in Chrome but not in Firefox! **What is the expected behavior?** Autofill suggestions should be visible in Firefox too! Autofill is working (FF + Chrome) if value is handled by the browser…

### CASE-1261 · [Concurrent Mode] App stops updating/rendering on inactive tab
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍4 💬15 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** 1. When Concurrent Mode is enabled 2. and the Chrome tab is inactive 3. and a new render happens inside app 4. the app won't render this update until I open the chrome tab. This only happens on Concurrent Mode. I noticed this because I update the document title on a react Context, like this: <img width="140" alt="Screen Shot 2019-09-12 at 23 58 05" src="[link]> and on Concurrent Mode it was never updating when the tab was inactive. Only when I opened the tab. Disabling Concurrent Mode was enough…

### CASE-1264 · Memory leak after removing video elements
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome
- **Signals**: 👍10 💬15 · closed · labels: Type: Needs Investigation
- **Excerpt**: This is a bug report. Seems to be related to [link]][ref] but this clearly affects other browsers than just IE 11. I'm using the latest Google Chrome. **What is the current behavior?** The current behavior is that when you create and remove many video elements, the browser isn't able to garbage collect detached nodes after the video elements have been removed. This will cause a memory leak and eventually crash the browser (if you hit the memory limit) **Sandbox demo**: [link] - I have one button that renders 20 empty video tags and another button to render 20 empty img tags, to show the…

### CASE-1267 · Component does not re-render state variables on update unless placed in span
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, react
- **Signals**: 👍1 💬15 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** - There is an interval timer that updates seconds/minutes/currentCount. - Case 1 only updates seconds and currentCount. - Case 1 does not update minutes correctly. - Case 2 does not update minutes and seconds value on the UI, currentCount is being updated (Browser/Chrome) - React seems to only update the component if the output state value is wrapped in a `<span>` tag. Case 1 `<div><span>{this.state.minutes}/<span>{this.state.seconds}</span></span>x<span>{this.state.currentCount}</span></div>` Case…

### CASE-1274 · Multiple onFocus events fired on single focus in Safari
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: safari, react
- **Signals**: 👍7 💬15 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: I'd like to report a possible bug. 1. Brief description OnFocus synthetic event is fired multiple times on single focus occurrence in Safari. Expected behaviour is for it to be fired only once per focus. 2. Live demo: [link] 3. Minimal steps to reproduce - install create-react-app `$ npm install -g create-react-app` - create an example application `$ create-react-app input-focus-test` `$ cd input-focus-test` - edit application file and add input with onFocus event handler `$ vi src/App.js` ```javascript import React, { Component } from 'react'; import logo from './logo.svg'; import…

### CASE-1275 · IE 11 and Edge no longer prompt to remember password on controlled form
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍0 💬15 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug (regression) IE/Edge **What is the current behavior?** On React > v15.2.0, Edge and IE11 do not prompt the user to save the password for the form **Steps to reproduce** With react 15.1.0: [link] With React 15.2.0: [link] **What is the expected behavior?** The browser prompts the user to save their password for the form **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** React > 15.2.0. It worked in React 15.2.0 IE 11, Edge

### CASE-1276 · <select> onChange not firing when using keyboard
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍0 💬15 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: Hello. On Firefox (v31 and 40 at least) when changing `<select>` values from keyboard `onChange` not firing, actually it fires only on blur: [link] React 15.1.0. thanks!

### CASE-1277 · Perf.print*() method not working in 15.1.0: Cannot read property 'forEach' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍2 💬15 · closed · labels: Type: Bug
- **Excerpt**: After upgrading to 15.1.0 I'm having trouble using the React Perf tools. I've done the following: Added to one of my files: ``` import Perf from 'react-addons-perf'; window.Perf = Perf; ``` I then launch my app in Chrome. Open the Dev Tools and run this in the console: ``` Perf.start(); Perf.stop(); Perf.printWasted(); ``` And I get: ``` TypeError: Cannot read property 'forEach' of undefined getWasted @ 7.7.js:149515 printWasted @ 7.7.js:149666 (anonymous function) @ VM508:1 ``` The failure is on this line: `flushHistory.forEach(function (flush) {`. The same behaviour occurs for all other…

### CASE-1281 · [DevTools Bug]: DevTools in Edge constantly display "Looks like this page doesn't have React, or it hasn't been loaded yet."
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react
- **Signals**: 👍4 💬14 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Run `npm run dev` 2. In Edge, open the DevTools and go to the "Components" or "Profiler" tabs Additionaly when I go back to the "Sources" built-in tabs, it was completly empty like if he crashed. ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) ```text ``` ### Error component stack (automated) ```text ``` ### GitHub query string (automated) ```text ```

### CASE-1286 · Bug: Source is not showing in 5.0.2
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 122, edge 122
- **Signals**: 👍1 💬14 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ## Stand DevTools version: 5.0.2-47cf347e4 Chrome 122.0.6261.129 x64, Edge 122.0.2365.80 x64 ## Propblem In the DevTools -> Components -> source. The path to the bundle.js file is specified. #### v5.0.2 ![image]([link]]/assets/144036324/19ae23ca-0b5c-4e22-b2fb-20e69b8de53e) ![image]([link]]/assets/144036324/5a31c30f-3729-40fa-a580-12546cd66945) ![image]([link]]/assets/144036324/68806261-1588-4821-9787-e17aa2a10f0a) ![image]([link]]/assets/144036324/cea28611-acfe-4e69-acbb-0cf8ff409af2) #### v5.0.0 ![image]([link]]/assets/144036324/c363f00d-eedd-4f84-bc1d-dd6e027a55c4)…

### CASE-1293 · Bug: unable to see the components in the components tab
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍2 💬14 · closed · labels: Status: Unconfirmed/Component: Fast Refresh
- **Excerpt**: Installed the react development tools to chrome Version 89.0.4389.114 (Official Build) (64-bit) Open my development version of my react app localhost:3000 with several components and I see the react icon ![image]([link]) Go to the inspect and component to and nothing is showing ![image]([link]) I'm using this chode [link] and when you open this in chrome it works. I open it from localhost and it does not work. ![image]([link]) "react": "16.8.6", "react-dom": "16.8.6", "react-scripts": "^4.0.3" npm --version 7.6.3 nodejs v14.16.0 ## Steps To Reproduce 1. 2. <!-- Your bug will get fixed much…

### CASE-1294 · Bug: Safari div contentEditable，onMouseUp trigger before onMouseDown
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react
- **Signals**: 👍0 💬14 · closed · labels: Browser: Safari/Status: Unconfirmed/Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: React version: 17.0.1 ## Steps To Reproduce 1. Mac OS Big Sur version 11.2，Safari version 14.0.3 2. set div contentEditable 3. div addEventListener onMouseUp and onMouseDown 4. onMouseUp trigger before onMouseDown <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: ``` <div onMouseDown={() => {console.log('mouse down')}} onMouseUp={() => {console.log('mouse up')}} suppressContentEditableWarning…

### CASE-1295 · Bug: Disabled button state update prevents `scrollIntoView`
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: chrome/, react
- **Signals**: 👍10 💬14 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: I have a `button` that triggers `scrollIntoView` for a node when clicked. It also updates some state which subsequently disables that button in certain cases. If the button becomes disabled, the `scrollIntoView` execution aborts. This seems to only happen in Chrome/Brave. React version: 17.0.1 ## Steps To Reproduce See steps to reproduce in sandbox. [link] ## The current behavior Described above. ## The expected behavior The state update should not prevent `scrollIntoView`.

### CASE-1297 · Bug: Typeerror: ReactDOM.createRoot(container) is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, react, typescript
- **Signals**: 👍0 💬14 · closed · labels: Status: Unconfirmed
- **Excerpt**: ReactDOM.createRoot is not a function React & ReactDOM version:^0.0.0-experimental-33c3af284 ## Steps To Reproduce 1. npx create-react-app my-app --template typescript 2. cd my-app && yarn upgrade react@user react-dom@user 3. refrence types in react-app-env.d.ts `/// <reference types="react-scripts" /> /// <reference types="react/experimental" /> /// <reference types="react-dom/experimental" />` [Github Repo to reproduce]([link]) Additional Info: OS: Windows 10 Browser: Chrome ## The current behavior no ui renders instead following error occurs:- TypeError:…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1204 · <select> behaviour should be consistent with DOM when <option>s values are identical
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍5 💬17 · closed
- **Excerpt**: This is created as opposite to [ref]. There is a bug in React and it should be fixed to match DOM behaviour instead of solution proposed in [ref]. See [link]][ref][ref]

### CASE-1213 · Bug: Select when passed a value as Prop errors with a suggestion to pass readOnly
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: Component: DOM
- **Excerpt**: Seems weird when we try to use a `select` component, and pass a value as a prop, it prompts with the error to either set `onChange` or `readOnly`. the `readOnly` at the last seems misleading since the `select` component does not have a `readOnly` prop, unlike inputs which do have a `readOnly` attribute. **SELECT PROPS** [link] seems an easy fix would be to check if the mounted component is a `select` component and then conditionally just change the error message, though would need to add tests to support the same. [link]]/assets/72331432/12674152-7d57-4d98-99e6-635577b31bfe cc @user…

### CASE-1214 · Bug: Popover API not supported
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍18 💬16 · closed · labels: Component: DOM
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> About this API: [link] React version: any ## Steps To Reproduce ```jsx <div popover id="my-popover"> Greetings, one and all! </div> <button popovertarget="my-popover" popovertargetaction="show"> Open Popover </button> <input type="button" popovertarget="my-popover" popovertargetaction="hide" value="Close Popover" /> ``` <!-- Your bug will get fixed much faster if we can…

### CASE-1215 · Bug:
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬16 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> State change and event trigger not behaving as expected. React version: 18.2.0 ## Steps To Reproduce 1. Create the component - code below. ``` import { useState } from "react"; export default function App() { const [clicked, setClicked] = useState(false); return ( <form onSubmit={(e) => { e.preventDefault(); console.log("form submitted!"); }} > {!clicked ? ( <button…

### CASE-1224 · DevTools: showing wrong state
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍7 💬16 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Visual bug: showing wrong state; so user cant use devtools for debugging **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** [link] [link] 1) Open [link] 2) Open browser dev tools 3) select "Components", click on "App", expand…

### CASE-1226 · Input type="number" fields don't call onChange
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬16 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** `<input type="number">` fields do not call onChange, and ignore their controlled value if text is entered into them. Upon a number being entered, they start to use onChange correctly. **What is the expected behavior?** In the following example, either the input should not allow non-numeric values at all OR it should call onChange on every value change. Instead, typing any alphabetic character is rendered in…

### CASE-1238 · submit() on form element doesn't trigger onSubmit
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍16 💬16 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug **What is the current behavior?** If I have a ref to the `form` DOM element and call `submit()` on it, it does not trigger the `onSubmit` callback. Repro: [link] In the above fiddle, if you hit `<enter>` in the input, it properly calls the `onSubmit` (alerts). If you click the button, which calls `this._form.submit()`, it does not. **What is the expected behavior?** `form.submit()` should trigger `onSubmit` **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?**…

### CASE-1239 · Can't update defaultChecked/defaultValue.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: Difficulty: starter
- **Excerpt**: When I rerender a component with "defaultChecked" or "defaultValue" react fails to update the "value" and "checked" attribute accordingly. Before you say "use a controlled input" I would argue that this is a bug as it basically disallows uncontrolled forms with "reset" buttons. (It will always reset to whatever the initial default value was).

### CASE-1265 · controlled input cursor jumps to end (again)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬15 · closed · labels: Type: Regression
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** when typing in a controlled input, the cursor always jumps to the end. This was an old issue that seems to have resurfaced. [this code pen]([link]) used in the docs [here]([link]) has the problem in all browsers as far as I have been able to test. **What is the expected behavior?** because we are using the state to update the component as soon as it's changed, the input element should be able to keep the…

### CASE-1266 · useImperativeHandle behaves as if inputs are [] by default
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬15 · closed · labels: Type: Bug/Component: Hooks
- **Excerpt**: useImperativeHandle have bug in 16.8.1 if you want to access any state will get the initial state not current state but in 16.8.0-alpha.1 it work good You can see here [link] open console when you change input value will get the currently value in console but if you clicked button get value from ref will get initial value (e) If you try same here [link] with 16.8.0-alpha.1 when clicked button get currently value

### CASE-1269 · Number input breaks when letter "e" is entered
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍13 💬15 · open · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** input[type=number] only allows entering numbers and letter "e" in the input. Native "input" input event is called for both numbers and the letter "e". With React the `onChange` event is only called for numbers. There's no way to catch "e" with `onChange`. The "e" is even being filled when the input is controlled. The only way I can think of to work around this bug right now is to use `onKeyDown` and…

### CASE-1270 · `onChange` event doesn't trigger when direclty clicking on the maximum `input[type=range]` value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬15 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** When you directly after the loading choose the maximum value on the input type range, the event isn't fire with an onChange. The event is fire when it's not the maximum value of the input. Sandbox: [link] Click on the maximum (right) of the input of type range. There is no message on the console and the displayed value doesn't change as expected Click on a other value on the input, a message is displayed…

### CASE-1272 · Children of option tags flattened when select has value
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: Type: Bug/Difficulty: medium/Component: Server Rendering/good first issue
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When the following is rendered to string using ReactDOM: ```jsx <select value=""><option>a ({`b`})</option></select> ``` I get ```html <select data-reactroot=""><option>a (b)</option></select> ``` When hydrating the above code, I get this warning: Warning: Text content did not match. Server: "a (b)" Client: "a (" Fiddle: [link] **What is the expected behavior?** I should get: ```html <select data-reactroot=""><option>a (<!-- -->b<!-- -->)</option></select> ``` **Which versions of React, and which…

### CASE-1282 · Bug: formMethod specified on the submit button doesn't override the method from useFormStatus.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍4 💬14 · open · labels: Status: Unconfirmed
- **Excerpt**: React version: 19.1 When using formMethod on a submit button (<button type="submit" formMethod={"post"}> or <input type="submit" formMethod={"post"}>), it should override the parent form's method. However, it does not. ## Steps To Reproduce 1. Open example (link below) 2. Click to any "Submit button" 3. under the text input field will "method" will be shown. Link to code example: [link] ## The current behavior Displayed method: dialog ## The expected behavior Displayed method: post

### CASE-1283 · [React 19] useFormStatus() pending doesn't work with Select component
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍7 💬14 · closed · labels: Resolution: Stale/React 19
- **Excerpt**: ## Summary I recently upgraded to NextJS 15 and I have noticed that react-dom's useFormStatus is no longer working when the Select component is included in the form. I don't know if this is a shadcn/ui issue, a NextJS issue, or an underlying react-dom issue. My suspicion is it's a problem with how react-dom is handling forms that contain elements that have their own javascript involved (the shadcn/ui `Input` works fine, but the `Select` and `InputOTP` components don't. Those components have their own javascript involved (the Select handles popovers and the InputOTP handles keypresses to move…

### CASE-1285 · Bug: useFormStatus pending state is reset when component state is updated
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍14 💬14 · closed · labels: Type: Bug/React 19
- **Excerpt**: If you have a component that relies on the `pending` return value of `useFormStatus`, the `pending` state will incorrectly reset to `false` if the component is updated due to a `useState` update. This does not happen if the `useState` hook is placed in a child component. React version: 19.0.0-rc-512b09b2-20240718 ## Steps To Reproduce [codesandbox.io/p/sandbox/react-useformstatus-pending-reset-on-unrelated-state-update-m59zw8]([link]) 1. Create a react app that uses form actions (this uses NextJS starter code) 2. Have the form action delay for a set period of time before resolving 3. Create a…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1207 · findComponentRoot(): Unable to find element error thrown from ReactDOM.findDOMNode called from componentWillMount on new renders
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Difficulty: starter
- **Excerpt**: I recently ran into this error after updating to 0.14.0-beta3 from alpha3. ``` Uncaught Error: Invariant Violation: findComponentRoot(..., .j0tmgd5jpc.2.$main.0.0.1): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID ``. ``` After a pile of hunting, thinking it might be related to some other changes I made (I didn't test this component right…

### CASE-1208 · Wrong context warning? - 'Warning: owner-based and parent-based contexts differ'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: IMO: the warning ... ``` Warning: owner-based and parent-based contexts differ (values: `context value` vs `undefined`) for key (foo) while mounting Child (see: [link]) ``` ... in the following code is wrong. In the code, I define a root component with a context value. The root component show two different children dependent on a state variable. When the root switched from one child to another, the warning is shown. Example on jsFiddle: [link] Run tested with React v0.13.1. ``` JS var Root = React.createClass({ childContextTypes: { foo: React.PropTypes.string }, getChildContext: function() {…

### CASE-1216 · Bug: Memory leak in react while focusing input elements
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬16 · open · labels: Type: Bug
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> I 've noticed that having an `input` element focused and unmounting its owner component doesn't actually free up this component from the js heap , I 've created this simple blnkr to demonstarate this which add a dummy `X` to a ref inside a component that has an input element React version: 17.0.2 ## Steps To Reproduce 1. Go to this [plnkr]([link]) 2. Click Tab Two 3.…

### CASE-1230 · Cannot shallow render a component containing hooks
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍21 💬16 · closed · labels: Component: Test Renderer/Component: Hooks
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** An error is thrown: Invariant Violation: Hooks can only be called inside the body of a function component. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link])…

### CASE-1233 · React onBlur events not firing during unmount
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍21 💬16 · open · labels: Type: Bug/Component: DOM/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** If a DOM element rendered by a React component has focus, and the React component unmounts, the React `onBlur` event does not fire on parent DOM elements. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** [link] **What is the expected…

### CASE-1246 · [React 19] aria attributes on custom elements behave maybe incorrectly
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍7 💬15 · open · labels: React 19
- **Excerpt**: ## Summary In [React 18]([link]), passing `aria-disabled={true}` to a custom element serialized that value as "true". That seemed good and as far as I can tell worked as expected. In [React 19]([link]), that same code adds the `aria-disabled` attribute, but doesn't set it to anything. That doesn't work as well. It appears to me (although I'm not certain) that it breaks accessibility for these custom elements. It definitely breaks `@user/jest-dom`'s `toBeChecked` matcher with `aria-checked` ([link]). For these aria attributes that require strings instead of booleans to function properly, is…

### CASE-1263 · Invariant Violation: Minified React error [ref]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍6 💬15 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** **What is the expected behavior?** **Which versions of React, and which browser / OS are affected by…

### CASE-1284 · [React 19] [bug] SVG with dangerouslySetInnerHTML content does not trigger first click
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍12 💬14 · closed · labels: Type: Bug/React 19
- **Excerpt**: ## Summary Hi all, Here is the scenario that we found out while testing with both the latest rc and the beta that works correctly with React 18. We have an SVG element that does not trigger its first click if it is focusable (or positioned inside a focusable element) that changes some state on focus. **Steps to reproduce:** Open the Stackblitz example and open its console Click 1 time on the triangle svg element **Expected**: 'svg click' message is logged **Current**: no message is logged (On the second and all next clicks the message is shown as expected - only the first click is not…

### CASE-1291 · Bug: `onBlur` called in wrong order if another element receives focus
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 17.0.2 ## Steps To Reproduce 1. With the input focused, press <kbd>TAB</kbd> to focus the button 2. Press <kbd>Shift</kbd> + <kbd>TAB</kbd> to go back to the input 3. Observe the console Link to code example: [link] ## The current behavior When the button is blurred, the value of `childRef` is null inside the `onBlur` callback. From my investigation, I noticed that `onBlur` is being called after unmount (causing the ref to be null). If `inputRef.current.focus()` is commented it gets called before unmount, not causing the bug. Also, forwarding the ref to an DOM element instead…

### CASE-1300 · TypeError: Assignment to constant variable.
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** TypeError: Assignment to constant variable. ![image]([link]) System: OSX npm: 6.10.2 node: v10.13.0 react: 16.8.6

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1212 · Bug: Random preloads added for images
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍4 💬16 · closed · labels: React 19
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.3.0-canary-c29ca23af-20231205 ## Steps To Reproduce 1. Render SSR app that has images in its tree using renderToString or renderToPipeableStream <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not…

### CASE-1220 · Bug: Unexpected debugger statement in DevTools (solved)
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍84 💬16 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> Looks like you forgot about the debugger inside the react_devtools_backend.js. React dev tools version: 4.8.0 ## Steps To Reproduce 1. Update (or install) the latest version of devtools 2. Open devtools 3. The code will be stopped on the debugger inside react_devtools_backend.js ![IMAGE 2020-07-10 13:43:52]([link]) ## The current behavior If I open devtools with react…

### CASE-1232 · React depends on an older version of core-js, breaking the usage with the new babel
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬16 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** React is relying on an older version of core-js which goes in conflict with the newer beta version of babel. ![image]([link]) The older version gets installed instead of the newer, so it results in errors like ![image]([link]) **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** React v16.4.0

### CASE-1242 · <video/> 'autoplay' attribute
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬16 · closed
- **Excerpt**: Is there a reason why `<video ... autoplay />` does not work in React. Or I am doing something wrong?

### CASE-1244 · Bug: React 19 renderToString() injects <link rel="preload"> for all <img> tags
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍15 💬15 · open · labels: Status: Unconfirmed
- **Excerpt**: Running ``` import { renderToString } from "react-dom/server"; let str = renderToString(<img src="my/image.png" />); console.log(str); ``` unexpectedly produces the html string: ``` <link rel="preload" as="image" href="my/image.png"/><img src="my/image.png"/> ``` which I'd expect to only occur when I explicitly ask for one via the preload() API. I can't see anywhere in the documentation that suggests that preload links are auto injected based on the simple presence of an img tag, and it seems like surprising behavior. React version: 19.1.1 ## Steps To Reproduce 1. Run the sandbox or the code…

### CASE-1247 · Bug: Nested lazy components cause rerendering
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬15 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: This is a duplicate of [link]][ref], which was closed without response. We're noticing this issue at scale, and it's fairly pronounced, with hundreds of rapid re-renders triggered by a single lazy component. I've forked the replication from original issue to demonstrate that this is still an issue in React 19: [link] ## The current behavior The lazy parent component renders multiple times: <img width="181" alt="Screenshot 2024-05-23 at 10 54 06 AM" src="[link]]/assets/4248263/482a32b0-d1e0-4220-a2db-33a5e0cb9254"> (In our environment, we've seen the number of re-renders proliferate to the…

### CASE-1254 · Bug: "Cannot read property 'length' of undefined" in areHookInputsEqual
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬15 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce When testing my component where I'm using this usecallback hook. I'm getting the error. ``` const getUrlWithPrefix = useCallback( (href: string) => { let url = href; // logic return url; }, [prefix], ); ``` ![image]([link]) When I dug a little in the callstack I found that it's linked to the code here:…

### CASE-1262 · useEffect fails to fire when hosted in display:none iFrame
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍6 💬15 · closed · labels: Type: Bug
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug starting at React version 16.9.0 **What is the current behavior?** React version 16.8.6: If a react app was hosted in an iFrame and that iFrame was in a `display:none` style, the `useEffect` hook would trigger. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React.…

### CASE-1273 · inline style with decimal numbers
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬15 · closed · labels: Type: Bug/Difficulty: starter/Component: DOM/good first issue (taken)
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** If the style prop is passed a decimal number, react converts the dot in a comma, resulting in an invalid css value. I suspect this might be due to my locale being different from english, but the behavior should be the same irregardless of the user's locale (and the conversion is correct if I use `String(12.34)`) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem** [link] <img width="150" alt="schermata 2017-11-12 alle 12 12 46"…

### CASE-1280 · IFrame onLoad event with React
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬15 · closed · labels: Type: Bug
- **Excerpt**: I have the following iframe element rendered in one of my React components: ``` html <iframe ref="iframe" src={this.props.url} width="100%" height="100%" frameBorder="0"></iframe> ``` I have tried adding `onLoad` event as well as attaching `onload` directly to DOM like so: ``` js this.refs.iframe.getDOMNode().setAttribute('onload', this.getUrl); ``` Where `getUrl` is the function of my React component: ``` js getUrl: function() { var path = this.refs.iframe.getDOMNode().contentWindow.location.pathname; console.log(path); }, ``` Except that won't work. if I set attribute to `"getUrl()"` -…

### CASE-1292 · [DevTools Bug]: Context & useContext，some child component don‘t rerender，but highlight！
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps # Bug Desc: Context & useContext，some child component don‘t rerender，but highlight！ 1. Open React Devtools 2. ![image]([link]) open highlight 3. click app button and watch highlight ![image]([link]) 4. The child1 component don’t useContext and don‘t rerender，but highlight，when child2 update context. ![image]([link]) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ###…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1217 · Bug: Streamed hydration hangs when consecutive Suspense boundaries suspend during streaming
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: Status: Unconfirmed/Type: Needs Investigation
- **Excerpt**: When streaming from the server, I've encountered a bug where client-side hydration with `hydrateRoot()` will seemingly "pause" and never complete, leaving html tags with `hidden` and `id` attributes hanging around. Any user events cause [this error]([link]][ref][ref]) to show, likely because the app still thinks it's in the middle of hydrating. Interestingly enough, if you switch the promise timeouts in `routeConfig` so that `post` resolves earlier than `posts`, then you will not have this issue. So to summarize for this example: if only one boundary suspends, all is well, but if two…

### CASE-1223 · Script tags are rendered inconsistently between client and server (html-encoded on server)
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** Server-rendered script tags are html-encoded. Client-rendered script tags are not. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** 1.…

### CASE-1253 · Bug: `hydrateRoot().render` causes error, even though the #root's HTML from the server coincides the component
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: Status: Unconfirmed
- **Excerpt**: From react 18.1 docs: > React expects that the rendered content is identical between the server and the client. It can patch up differences in text content, but you should treat mismatches as bugs and fix them. In development mode, React warns about mismatches during hydration. But when `render()` function is called for the hydrated root, the error occures: ``` This root received an early update, before anything was able hydrate. Switched the entire root to client rendering. ``` Root contains the same HTML as should be rendered by React React & React DOM version: 18.1.0 ## Steps To Reproduce…

### CASE-1258 · hydrate SVG error: Expected server HTML to contain a matching <clipPath> in <svg>
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍2 💬15 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** It seems like `ReactDOM.hydrate` doesn't play nice with certain kinds of inline SVGs. Specifically ones that have `clipPath`s When nextjs tries calling hydrate on a page with one of these SVGs, the offending part of the svg flashes quickly then react throws this error to the console. ``` Expected server HTML to contain a matching <clipPath> in <svg>. ``` I have a very small example of this happening here [link] The strange part is when next builds the site statically it all works. I originally…

### CASE-1278 · SSR should not warn about onscroll
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: Difficulty: starter
- **Excerpt**: Ref: [link]][ref][ref] It's a little surprising that the codepath is even being hit, maybe that's a bug too, but there should clearly be some sort of `if` check in that area.

### CASE-1288 · Bug: hydration is blocking for components inside Suspense boundary
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: Resolution: Stale/Resolution: Expected Behavior
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce Link to code example: [link] The app renders two `Expensive` components outside of `Suspense` and another two inside of `Suspense`. Each `Expensive` component takes 500ms to render. `shared/Expensive.tsx`: ```tsx import * as React from 'react'; export const Expensive = () => { const end = Date.now() + 500; while (Date.now() <…

### CASE-1290 · Bug: Context provider updates forcing Suspense fallback on hydration
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍8 💬14 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.1.0 ## Steps To Reproduce 1. Set up a ContextProvider and pass object as value (not-memoized) 2. Wrap the ContextProvider around a Suspense boundary 3. In a component, outside of the Suspense boundary, update the context value inside of a useEffect 4. Notice that the de-hydrated suspense content rendered by the server now switches back to the fallback…

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-1222 · Bug: Excessive cpu usage of the page when react-devtools is active
- **Principles**: P-H2, P-H3 · **Env**: react
- **Signals**: 👍2 💬16 · closed · labels: Type: Bug/Component: Developer Tools/good first issue
- **Excerpt**: When option "Highlight updates when components render" is activated the whole page repaints in rapid succession after the components state has been changed. It causes 100% CPU usage by the browser and unpleasant DX due low fps. React version: 16.12.0 DevTools version 4.4.0-f749045a5 The sequance of actions is important: 1. Open react application 2. Open react-devtools 3. Check option "Highlight updates when components render" in react-devtools settings 4. Change the internal state of a component 5. In activity monitor there will be 100% cpu usage of the page, or check option "Paint flashing"…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1271 · When running npm start to run react app, the browser shows page unresponsive
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, react
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Yes **What is the current behavior?** When I start create-react-app by running npm start, the browser gives me "Aw -snap, something went wrong". Although, I do not get any error. It is running on chrome very slowly, and it does not show anything. **What is the expected behavior?** I should see the main page. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** I am using react: "react-dom": "^16.2.0", "react": "^16.2.0", Something I want to say is I have yarn-lock…

### CASE-1296 · Bug: <img> within a <picture> is being requested twice in Firefox
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: firefox, firefox 84, chrome
- **Signals**: 👍2 💬14 · closed · labels: Component: DOM/Status: Unconfirmed/Resolution: Stale
- **Excerpt**: When I have an `<img>` within a `<picture>` element, e.g for implementing [responsive images]([link]), then Firefox requests that image file twice. Some of the times the first request to the image will stop with an `NS_BINDING_ABORTED`, it'll always return receive 0 bytes, and the server will log a 499 response (client closed request) or a 200. Removing the `<picture>` element and simply leaving `<img>` in the JSX, solves the problem, but of course I do need the `<picture>`. This happens in Firefox 84 and 85 (private mode, no extensions), and does not happen in Chrome. An important detail is…

### CASE-1298 · window.print() crashes if a 'print' event listener causes a rerender (Chrome, DEV-mode only)
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍3 💬14 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** Programmatically calling window.print() can cause React to report strange errors before crashing under certain circumstances. The trigger *seems to be* a call to print() that results in a React state change somewhere (which, in Chrome, seems to happen because the print preview it shows can cause media query events, which can be hooked up to calls to a setState function). This does not always happen, however--as shown in the example if the code is not called from in a setTimeout it doesn't…

### CASE-1299 · Dev tools does not respect zoom level on firefox OSX
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-E1, P-E2, P-E4 · **Env**: firefox, react
- **Signals**: 👍2 💬14 · closed · labels: Type: Bug/Component: Developer Tools/good first issue
- **Excerpt**: Currently when using the react dev tools on Firefox OSX, I am unable to change the current zoom level. The default zoom level is quite small so even with good eyesight, I struggle to read it on a high resolution display. It is possible to adjust the zoom level of the Firefox dev tools as a whole, by focusing the panel and using CMD +/-. However the React dev tools does not respect this and has no option to switch the zoom level manually. As a result, the react dev tools extension is unusable on Firefox. I would imagine this is a bigger issue for anyone with poor eyesight. Can we please add…

