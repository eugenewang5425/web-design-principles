# Case Chunk 008 — Round 8

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1701 · Bug: Event handlers are not reconciled as expected when conditionally rendering buttons inside a form
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Create a `form` containing two buttons, one of them with `type="submit"` and the other with `type="button"`. Conditionally render one or the other based on state that is mutated by the form's `onSubmit` handler and the `type="button"` `button`'s `onClick` handler. 2. Observe that the `button` with `type="button"`…

### CASE-1712 · Bug: when initialArg changes, useReducer should update the state accordingly
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> **TL;DR**: After the first render, `useReducer` doesn't react to changes in the `initialArg` (second positional) argument. In my opinion, it should update the state accordingly. The actual behaviour in unnecessarily restrictive and forces us to rely on hacks to address the problems it brings. Let's take the example of a form provider, a component that enables us to make…

### CASE-1731 · Bug: functional components are not re-rendered if the provided props look the same
- **Principles**: P-G4, P-E3 · **Env**: opera, ios, react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Expected Behavior
- **Excerpt**: On previous versions of react, functional components were always re-rendered unless they were memoized. With the latest version, if the props do not change the component does not re-render. While this is an improvement in general, there are certain scenarios where you want to force a re-render, for example to react to some user input that does not change the value, but requires to make operations on the dom. A great example is an input field, where you may need to reposition the cursor even if the input content is the same React version: 16.13.0 ## Steps To Reproduce 1. Create a controlled…

### CASE-1733 · Bug: Typing Fast into Controlled Input doesn't change value visually immediately
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> I have a controlled input and when I type slowly, it updates the state and shows the current input value. However, when I start typing fast, I can see the input value updating in the DOM in the developer tools but the input becomes empty visually until I stop typing and then I can see the updated value visually too. I have provided a gif where I start typing fast and…

### CASE-1740 · Bug: Events from an <input> in the <legend> of a disabled <fieldset> get supressed
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Type: Bug/Component: DOM/good first issue (taken)
- **Excerpt**: The closest related issue I could, is somewhat of the inverse of this one: [ref] React version: 16.12 (older versions as well) ## Steps To Reproduce 1. Create a component 2. Add state indicating whether it is enabled or disabled (advised to start as enabled) 3. On render, let the component return a `<fieldset>` with: a `<legend>` containing an `<input>` (checkbox) element, and another form element (`<select>`, `<input>`, `<textarea>`). 4. Add the `disabled` attribute that follows the aforementioned state to the `<fieldset>`. 5. Make the `onChange` event of the `<input>` in the `<fieldset>`…

### CASE-1754 · Cursor Jumping to end in Input if we use toUpperCase() on e.target.value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> Reporting a Bug The current behavior is if we use toUpperCase or toLowerCase in onChange on e.target.value, the cursor is jumping to the end while editing in middle. In Input text using toUpperCase in onChange function on, e.target.value the cursor is jumping to end while updating in the middle The cursor should retain its position `<Input type="text" id="value" height="60px" value={this.state.val} onChange={(e) => { /^[a-zA-Z ]*$/.test(e.target.value) ? this.setState({ val:…

### CASE-1767 · Possible incorrect event.target on number inputs in IE9?
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍4 💬8 · closed · labels: Type: Bug/Browser: IE/Component: DOM
- **Excerpt**: Since React 16.0.0, it looks like there might be a case where `event.target` on a change event in IE9 reports as the window, but I can't reproduce it outside of the DOM test fixtures. *Steps to reproduce* 1. Open this build of the fixtures: [link] in IE9 2. Enter text into an input 3. Observe that the `event.target.value` is the window, as recorded by the fixture I can not reproduce this using the following CodePen: [link] Viewable in IE9 here: [link] Here's a diff of my changes with master: [link]]/compare/master...nhunzaker:ie9-target-issue Any idea what's going on? Here's what I think I…

### CASE-1778 · Recent radio input onChange changes break expected behavior
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍4 💬8 · closed · labels: Component: DOM/Type: Regression
- **Excerpt**: ### Background ### I see from [this issue thread]([ref]) that recent changes were pushed in `15.6.x` that have – to my mind – broken some of the expected behavior when it comes to firing `onChange` events in a group of radio button inputs. I am aware of the conversation in [ref], but the problem it's describing is not exactly the same as this so far as I can tell. Note that the problem I'm about to describe *does not occur* in React <=`15.4.x`. ### Expectations ### We would expect an individual radio button's `onChange` to fire in these two conditions (among others): 1. A radio input is…

### CASE-1780 · input type="number" -> decimal number support
- **Principles**: P-G4, P-E3 · **Env**: react, bootstrap
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Need suggestions / probably Bug ``` <PDInputWrapper controllerId="pdNumeric" labelText={props.label} meta={props.meta} tooltip={props.tooltip}> <InputGroup> <FormControl type="number" step={0.1} value={props.input.value}/> </InputGroup> </PDInputWrapper> ``` I tried ```<input type="number" className="form-control" step="0.1" ``` too I am using `react-bootstrap` and `redux-form` . I tried step={0.1} or step="0.1" Does not work I tried React 15.5.4 , 15.4.0 Posted on here `react-bootstrap` first [link] Is there any bug here ? Any suggestion ?

### CASE-1783 · Showing wrong state value in console
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: I have a **Signup** component which has it's own state defined in constructor. `this.state = { email: '', fullname: '', username: '', gender: '', password: '', cpassword: '' };` This component has the following event listner to update the state `onChange (e) { this.setState( {[e.target.name]: e.target.value} ); //console.log(this.state.gender); }` And in **render()**, I have the following jsx code which will allow user to select his/her gender `<div style={{marginBottom: '25px'}} className={classnames("input-group", {'has-error': errors.gender})}> <div className="btn-group"> <button…

### CASE-1786 · React thinks that my input is readonly but it is not
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I want to report a bug. I have an input the value of which is set from this.state. And this value is manipulated using onKeyDown event. In my console i have the next error: > Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `TimePicker`. > So my input is not readonly it gets edited which means that this error is nonexistent. To reproduce this you could add an `<input />` with…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1702 · Bug: Error message "Uncaught Error: A component suspended while responding to synchronous input." may be misleading
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍12 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce Do anything that triggers the error: > Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition. This seems to occur when a synchronous input causes a component to suspend,…

### CASE-1707 · Bug: state updates are applied out of order inside useEffect when using Promise.resolve
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍5 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: When two state updates are scheduled within `useEffect`, first one directly and second wrapped inside `Promise.resolve()`, they will be applied out of order. Same behaviour when using `queueMicrotask` instead. `setTimeout(x, 0)` doesn't produce the issue. React version: 18.1.0 This is only happening in Concurrent Mode with `createRoot`. This is based on a real-world scenario arising from certain patterns of usage of `react-query` (which internally calls `Promise.resolve()`) and `useTransition`. ## Steps To Reproduce 1. Open [Codesandbox]([link]) 2. Click the button 3. Watch logs in the…

### CASE-1725 · Design problem in new JSX transformation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: React 17 introduces [a new JSX transform]([link]). I found there is some problem in [the TypeScript implementation]([link]) > Hi! @user I think this is wrong. You should not treat it as a "base" of the import. It should be a fully qualified import specifier. With the current behavior, it is impossible to make it emit like: import { jsx as \_jsx } from "//cdn.example.com/my-jsx-lib/jsx-runtime.js" cause it is not possible to add a ".js" at the end of the import specifier. > This also requires the imported file to name exactly as "jsx-runtime". And @user answered me that: > ...Yeah, so that…

### CASE-1730 · Bug: Updates to keyed lists break FLIP animations when they occur mid-animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.13.1 ## Steps To Reproduce 1. Open code example below 2. Observe animation <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: <!-- Please provide a CodeSandbox…

### CASE-1749 · useTransition does not wait for loading within a new Suspense
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: Type: Needs Investigation/Component: Suspense
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug or clarification. **What is the current behavior?** When `useTransition` renders a new Suspense component which wrap the pending resource, the UI is not suspended. Reproduction: [link] In the provided codesandbox, the first two times you click the Next button the UI is suspended as expected. When you click for the third time, the UI no longer suspended and we can see the "Loading Page 3" text. My introspection of why this is happening is because a new `Suspense` component is rendered, causing the behavior. **What is the expected…

### CASE-1784 · Form submitted on `button[type=button]` click
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** Strange behavior : a form is submitted when I click a `button[type=button]` The following sequence induce this behavior + click on `button[type="button"]` + call setState() + button is transformed into a `button[type=submit]` + the form submission handler is called 🤔 **What is the expected behavior?** A `button[type=button]` is not expected trigger form submit. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** I…

### CASE-1790 · Getting a warning using ReactCSSTransitionGroup in react v15.2.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍5 💬8 · closed · labels: Type: Bug
- **Excerpt**: **Bug** **What is the current behavior?** When using ReactCSSTransitionGroup in react v15.2.0, it warns me about an unknown prop passed to the DOM element created by this component (span) ``` Warning: Unknown prop `transitionAppearTimeout` on <span> tag. Remove this prop from the element. For details, see [link] in span (created by ReactTransitionGroup) in ReactTransitionGroup (created by ReactCSSTransitionGroup) in ReactCSSTransitionGroup (created by Element-panel) in Element-panel (created by Connect(Element-panel)) in Connect(Element-panel) (created by Diagrammer-page) in div (created by…

### CASE-1797 · Convert React class to ES6 class error when use context
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I have a Class A created by createClass, while after I transform it into a ES6 class, I caught an err: ``` //Original class code var A = React.createClass({ childContextTypes: { name: React.PropTypes.string }, getChildContext: function() { return { name: "Jonas" }; }, render: function() { return <B />; } }); // ES6 class class A extends React.Component { childContextTypes: { name: React.PropTypes.string }, getChildContext () { return { name: "Jonas" }; }, render () { return <B />; } } ``` May be something wrong in the childContextTypes defining method?

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1703 · Bug: StrictMode double mounting doesn't clean up effects from first mount
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.1.0 ## Steps To Reproduce 1. Create a react component with a `useState` hook with a lazy initializer that produces a unique result on each invocation. 2. Use that state in an effect and effect cleanup function using the `useEffect` hook. 3. Render the component under strict mode. <!-- Your bug will get fixed much faster if we can run your code and it…

### CASE-1705 · Bug: ErrorBoundary won't caught error in useEffect callback while ErrorBoundary unmount with it's children
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: **18.2.0** ## Steps To Reproduce ```jsx function App() { const [isShow, setIsShow] = React.useState(true); function setError() { setIsShow(false); } return ( <div> {isShow && <PageWrapper />} <div onClick={setError}>setError</div> </div> ); } class PageWrapper extends React.Component { static getDerivedStateFromError() {} componentDidCatch(err) {…

### CASE-1714 · React 18 - Internal React error if throwing on hook cleanup function.
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬8 · open · labels: Type: Bug/Component: Test Renderer
- **Excerpt**: Running the following test: ```javascript import React, { useEffect } from "react"; import { create } from "react-test-renderer"; const Boom = () => { useEffect(() => { return () => { throw new Error("Boom"); }; }, []); return null; }; it("prints an error to the console on next is fine on latest", () => { const res = create(<Boom />); res.unmount(); }); ``` I'll get the following error message: ``` console.error Warning: Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than…

### CASE-1717 · Bug: Rules of Hooks should not allow passing a Hook as a function argument
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · open · labels: Type: Bug/Component: ESLint Rules/Resolution: Backlog
- **Excerpt**: See failing test in [link]][ref]. Even if the PR gets stale, we should implement this check because currently it lets you circumvent the rule.

### CASE-1739 · Bug: Stale state state with combination of a closure fn and memo
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: Before I create a working code example demonstrating the problem, please let me know if it's a known issue (afaik, it's not reported but I am not sure). I am experiencing a stale state issue with combination of hooks, closure fn and memo. Parent component: ``` const [selectedLeftPart, setSelectedLeftPart] = useState< DisconnectedSentencePart | undefined >(undefined) const selectLeftPart = (part: DisconnectedSentencePart) => { // accesses selectedLeftPart console.log(selectedLeftPart) // and also sets it setSelectedLeftPart(part) } return ( <Child selectSentencePart={selectLeftPart} /> ) ```…

### CASE-1745 · React DevTools might retain references to unmounted DOM elements (and their Fibers)
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Component: Developer Tools/Type: Needs Investigation/Partner
- **Excerpt**: ![Screenshot 2019-12-16 10 51 05]([link]) There's seems to be circumstances where unmounted DOM/Fibers are kept alive by React DevTools. They're kept alive in `primaryFibers`: [link]]/blob/34527063083195558f98108cde10b5d6ad0d6865/packages/react-devtools-shared/src/backend/renderer.js#L772 It seems like a WeakSet would be appropriate and would remove the leak. Otherwise we'd need to understand why recordUnmount isn't called. CC @user

### CASE-1756 · Issue with useEffect cleanup during react-dom re-render and HMR
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** A bug (I suppose). **What is the current behavior?** I think, the cleanup of `useEffect` isn't firing at proper time when doing a HMR update like this ```js import React from 'react'; import ReactDOM from 'react-dom'; import App from './App'; const mountNode = document.querySelector('#root'); ReactDOM.render(<App />, mountNode); if (module.hot) { module.hot.accept('./App.tsx', () => { const NewApp = require('./App.js').default;…

### CASE-1761 · Proposal: Add top level useMount/useUnmount to improve scannability/prevent fragmentation
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: This is a feature request. The current hooks API provides everything that is necessary to create sophisticated and elegant applications. However, the current api is something of a step backwards in terms of scannability - e.g. Understanding when various code will execute in the component's lifecycle. As a trivial example, suppose I simply want to log some information everytime a component unmounts for some analytics purpose. That's it. Right now, the simple implementation is: ```javascript useEffect(() => { return () => { fetch('some-analytics-api.com'); } }, []) ``` There's no issue with…

### CASE-1762 · "Failed to execute 'removeChild' on 'Node'" error on unmounting React portal with nulled child
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When you render a portal with null child value, if the portal is rendered in first place, then the app crashes and give the message: ```Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.``` But if you put the portal to render after the rest of component content, it works like it should. On a debug i realized that's the other nodes of…

### CASE-1766 · unmount/mount console warning. Changed behaviour from React 15.6
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When migrating our very large codebase from React 15.6 to 16, the following messages started showing in the console: ``` react-dom.development.js:530 Warning: unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. Instead, have the parent component update its state and rerender in order to remove this component. printWarning @ react-dom.development.js:530 warning @ react-dom.development.js:554 unmountComponentAtNode @…

### CASE-1770 · addEventListener not working properly in componentDidUpdate
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Component: DOM/Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug! **What is the current behavior?** When I update event listeners by removing old listeners and adding new ones on an element obtained by React ref in `componentDidUpdate` (React 16.3 alpha), my handlers don't register properly. If I take out the part where I remove listeners, or put the whole thing inside a `setTimeout`, it works fine. **This worked fine when I was doing it in componentWillReceiveProps but I moved this part to componentDidUpdate for React 16.3.** My code is kind of like: ```jsx // does NOT work…

### CASE-1788 · Bug: didPutListener tries to findDOMNode on unmounted component
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug
- **Excerpt**: I believe this is a bug and potentially related to [link]][ref], but the specific details are different enough that I wanted to file a separate issue. Feel free to close if it's the same root cause. I have a repro here: [link] - ClickMe is a component that runs `causeError` on click - `causeError` first renders components of type A and B (let's call them A0 and B0) - B0 has a componentDidMount function that calls setState (comes into play later) - `causeError` then updates A0 with a new prop - A.componentDidUpdate unmounts B0 and mounts a new B, B1 - After `causeError` is all done, React's…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1704 · Bug: React 18 Downloading a file on-demand doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Creating an anchor tag that downloads a file on demand works fine in React 17 but in React 18 it doesn't work In React 18 The first click gives a valid 200 call to get the file and you can view the file in preview on the network tab (devtools) but nothing downloads in downloads The second and subsequent clicks throw a network error/couldn't download in the browser downloads (has successful 200 in network tab) ## Steps To Reproduce Download and run the repos - exactly the same code but different react versions [link] [link] Same behaviour on Chrome and Edge ## The current behavior Fails to…

### CASE-1711 · [DevTools Bug]: Devtools script served over insecure connection causing issues with local https server.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react
- **Signals**: 👍0 💬8 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Hi React Team, I am trying to use the devtools to debug in Safari. I'm working with Apple Pay so I'm using ngrok to create a secure tunnel. When I visit the ngrok domain Safari throws a warning stating: ```[blocked] The page at [link] was not allowed to run insecure content from [link] Repro steps: 1. Clone and install dependencies. 2. Run using ngrok or other method for https. 3. Visit the page using **Safari**. 4. Inspect the page and you'll see the warning. Thank you guys. ### How often does this bug happen? Every time ### DevTools package…

### CASE-1713 · Bug: <picture> fetches both <source> and <img> image in Safari on macOS and iOS
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, firefox, chrome, safari 14, macos, ios, react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ``` <picture> <source srcset="[link] type="image/webp"> <source srcset="[link] type="image/jpg"> <img src="[link]> </picture> ``` Will request **both** `300x300.jpg` and `300x300.webp` when rendered via React and browser is Safari. Will request **only** `300x300.webp` when rendered via React and browser is Firefox or Chrome. Will request **only** `300x300.webp` when normal HTML regardless of browser. Will request **only** `300x300.webp` when HTML is rendered via JS regardless of browser. React version: `17.0.2`, `16.14.0` Browser versions: `Safari 14.1.2 (16611.3.10.1.6) (macOS 11.5.2)`,…

### CASE-1718 · [DevTools Bug]: Profiler freezes when navigating through commits
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Enable chrome://flags/#enable-throttle-display-none-and-visibility-hidden-cross-origin-iframes 1. goto [link] 1. record at least 2 commits via Profiler The larger the component tree the more reliable the crash. When I reduce the component tree in the UI the crash stops at some point. [link] ### How often does this bug happen? Every time ### DevTools package (automated) 1d2528097 ### DevTools version (automated) 4.16 ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No…

### CASE-1723 · Bug: The initial page load fails in IE11 with React 16.14 and above
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, edge, react
- **Signals**: 👍1 💬8 · closed · labels: Type: Bug
- **Excerpt**: I created the simplest *Hello, World!* React application that I can think of. I used CRA. The source code is here: [link] The deployed application is here: [link] The deployed application is what you see in the git repo with React 16.14.0, and that fails in IE11. You see **Hello, World!** if the page is successfully loaded. It works fine in Firefox, Chrome, Edge, etc. but fails to load in IE11. React fails to load, and in the dom explorer I see `<div id="root"></div>`. In the Console I get: ``` SCRIPT5022: Minified React error [ref]; visit…

### CASE-1724 · Bug: Suspense/fallback adds a style display: none !important and this doesn't get removed on IE 11
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: Suspense/fallback wraps the components with `display:none !important` initially and somehow this style doesn't get removed automatically even after the components loads into the DOM on IE 11. Works fine on chrome through. If I manually remove this from the dev tool, you can see it shows up. Seems like this is re-introduced: [link]][ref] React version: 16.12.0 `<Suspense fallback={<CircularProgress />}> <Provider store={store}> <PersistGate loading={<div>Loading...</div>} persistor={persistor}> <Main /> </PersistGate> </Provider> </Suspense> ` ![image]([link])

### CASE-1726 · Error: "Maximum call stack size exceeded" for getCommitTree
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: Describe what you were doing when the bug occurred: 1. Clicking back to go back through the frames following a profile session. I think I got to zero and then clicked it again and then it errored --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.8.2-fed4ae024 Call stack: at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:17661:26) at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:17710:30) at getCommitTree…

### CASE-1729 · Bug: mouseEnter fires twice in react@user
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ubuntu, react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: React version: 0.0.0-f77c7b9d7 Browser: Chrome Version 84.0.4147.105 (Official Build) (64-bit) OS: Ubuntu 18.04.4 LTS ## Steps To Reproduce 1. move mouse over button Link to code example: [link] ## The current behavior `onMouseEnter` fires twice (sometimes it doesn't). ![video capture of repro steps]([link]) ## The expected behavior It fires only once. Same repro with `[email]`: [link]

### CASE-1734 · Bug: ARIA Attribute Reflection
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge 81, chrome 81, safari 13, react
- **Signals**: 👍1 💬8 · closed · labels: Component: DOM/Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: React version: 16.13.1 ## Steps To Reproduce 1. Implement the [gov.uk "breadcrumbs" component]([link]) in React. 2. Use the [ARIA 1.2]([link]) `ariaCurrent` property, as available in Edge 81, Chrome 81, and Safari 13. 3. See warning: ``` Warning: Invalid ARIA attribute `ariaCurrent`. Did you mean `aria-current`? ``` Link to code example: [[link]]([link]) ```jsx function Breadcrumbs() { return ( <ol> <li> <a href="/"> Home </a> </li> <li> <a href="/passports"> Passports, travel and living abroad </a> </li> <li ariaCurrent="page"> Travel abroad </li> </ol> ); } ``` These properties are helpful…

### CASE-1735 · Bug: <iframe /> onLoad is not getting triggered after the reload triggered by moving the DOM Node
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍2 💬8 · open · labels: Type: Needs Investigation
- **Excerpt**: When an `<iframe />` DOM Node is moved to a different place in the tree, Chrome triggers a reload. That reload does not notify event handlers registered via `onLoad=`. In other words: * If there is an event handler registered via `onLoad={myCallback}`, it **will not** be fired. * If there is an event handler registered via `iframe.addEventListener("load", myCallback, false)`, it **will** be fired. React version: 16.13.1 ## Steps To Reproduce Open a code example below and move the iframe **down** using arrow button next to it. [link] ## The current behavior The iframe does not say…

### CASE-1736 · Bug:
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: android, ios, react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: On android using react-devtools we are seeing 2 instances of the app appear. On iOS we see 1. We would like to know if this is a known issue with the devtools or if we are infact seeing 2 instances which is much more concerning but at least we will know that somehow it renders to copies on android. At the moment we're not sure if what we see is real or not. Android ![image]([link]) iOS ![image]([link]) React version: "react": "^16.13.0", "react-native": "0.62.0-rc.5" [email] [email] ## Steps To Reproduce 1. run react-devtools and metro with android build

### CASE-1742 · Bug: Devtools shows Anonymous for memoized function components
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: ![image]([link]) React version: 16.12.0 React dev tools version: 4.4.0 ## Steps To Reproduce 1. create-react-app 2. Render memoized function component 3. Inspect the component with latest React dev tools chrome extension ## The current behavior Component's name in devtools is Anonymous, I've seen adding a displayName work in the past but it does not anymore. ## The expected behavior Name of component in devtools should be the set displayName.

### CASE-1744 · SVG rendering problem
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** SVG is not rendered properly. **What is the expected behavior?** SVG is rendered properly. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** Chrome: latest version. Everything else is below. We have SVG optimizer in our pipeline, but that's clearly not a problem as the sprite I get is completely okay and works properly. I suspect this has something to do with React rendering this SVG because I've tried to load the…

### CASE-1747 · Devtools : highlight box is shown too small.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, chrome 78, react
- **Signals**: 👍1 💬8 · closed · labels: Type: Bug/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** When Chrome devtools is highlighting highlight box is shown too small. ![image]([link]) **What is the expected behavior?** Highlight box is shown actual template size. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** Chrome 78.0.3904.97 React Developer Tools 4.2.0

### CASE-1750 · native img attribute loading="lazy" (chrome new feature).
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: attribute loading="lazy" works on image tag as it should; but in react I should use 'data-loading' or 'custom-loading' otherwise error Property 'loading' does not exist on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>' appears. unfortunately with 'data-loading' or 'custom-loading' not working.

### CASE-1752 · Browser plugin crashing my browser when opening devtools
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, react
- **Signals**: 👍0 💬8 · closed · labels: Component: Developer Tools
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When I open devtools with the React chrome extension enabled my browser crashes (all windows exit). If I disable the extension it devtools opens as expected and works just fine. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React.…

### CASE-1755 · Apparent memory leak using hooks
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge
- **Signals**: 👍1 💬8 · closed · labels: Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Maybe a bug. Maybe I'm just running into a weird edge case. **What is the current behavior?** I have a situation where using a combination of `useEffect`, `useCallback`, and having a function in the actual component render is causing a sort of memory leak. The current render of the component seems to hang on to references of past renders of the component. (more details in the reproduction sample repo) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem.** I think I…

### CASE-1763 · Regression: react-dom 16.5.2+ Tapping outside of an input on iOS12 does not fire onBlur event
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome, ios12, ios, react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Only on iOS, with both chrome and safai, once an input is focused, attempting to tap outside of it to blur the input, focus is kept and the onBlur event is not fired. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the…

### CASE-1764 · Synthetic KeyboardEvent should support KeyboardEvent.code
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍3 💬8 · closed · labels: Type: Feature Request/Component: DOM/good first issue (taken)
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** The current synthetic keyboard event does not support the [`KeyboardEvent.code`]([link]) property. **What is the expected behavior?** The synthetic keyboard event should pass along the [`KeyboardEvent.code`]([link]) property. This is currently in the WD of DOM Events but is part of replacing `keyCode` and `charCode` and is much more consistent and easy to use. This is currently only supported by FF and Chrome ([CanIUse]([link])) so it may be a bit premature to fully integrate. However…

### CASE-1772 · Cursor jumps when backspacing in a number input (with ShadowDOM)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍3 💬8 · closed · labels: Type: Bug/Component: DOM/Difficulty: medium/good first issue
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Number inputs with decimal values in Chrome ShadowDOM do not maintain cursor position as user backspaces in the input field. Super low-quality gif (sorry): <img src="[link]> This issue appears to be similar to the problem here: [link]][ref], but in this case it's only custom elements with a shadow root that exhibit the problem. **If the current behavior is a bug, please provide the steps to reproduce and if…

### CASE-1777 · TypeError: undefined is not an object (evaluating 's.get.call') from input onChange - React 15.6.1 ReactDOM 15.6.0 on Safari 9.1.x
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari 9, safari, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** onChange onKeyUp onKeyDown causes TypeError: undefined is not an object (evaluating 's.get.call') only in Safari. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** [link] **What is the expected behavior?** Component should get event.target.value and then update the state, which in turn re-renders the h1 with new state values. **Which versions of React, and which browser / OS are…

### CASE-1779 · Scrolling gets jammed under specific condittions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: See this fiddle (using chrome): [link] ## The bug This is just a small problem that occurs under very specific conditions. The fiddle shows a scrollable box where half-way down the color of the box is changed from a solid color to a semi-transparent color. When scrolling down (and only down) you will see that it seems to get a little stuck on the way. It becomes much more apparent when using the page down key, where it'll only scroll until the color-change point, and no further, even on repeated pushes of page down. Page up (or going from a semi-transparent color to a solid color) works just…

### CASE-1782 · Bad reading number with digit using ReactJS, NVDA and FireFox
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, react
- **Signals**: 👍0 💬8 · closed · labels: Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** ------ I write application with accessibility using ReactJS. I have a problem with NVDA and FireFox - NVDA can't read number correctly. I've found solution (use setTimeout with 0 delay), but I think, that can do it better. I've created proof of concept to show the problem: [link] **To reproduce - sad path:** Run jsfiddle on FireFox Run NVDA (you can open speech viewer) Click sometimes on Random me! in Not works example Check results - first value will be ok, but next not. Sometimes will be (fe.…

### CASE-1794 · Bug on resolving default props (HTMLAllCollection) + fix
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, firefox/, react
- **Signals**: 👍1 💬8 · closed · labels: Difficulty: starter
- **Excerpt**: **Introduction** I found a bug on resolving default props when component props have property with HTMLAllCollection. React ignores value and uses default value (it should take that collection). isIE9OrLower (look at the end of topic) is simple function to test Internet Explorer in version 9 or lower. Simple use case: `isIE9OrLower() ? "IE9 or lower" : "modern browser ;)"` Chrome/Firefox/modern IE (yeah, i know....) returns HTMLAllColection (as document.all), but old IE returns true. HTMLAllCollection is weird collection: ``` document.all // returns DOM collection typeof document.all //…

### CASE-1798 · Checksum issue with encoded characters in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, firefox, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: We've recently started seeing issues with checksums on server rendered markup. Even though both the client and server are encoding the characters correctly, ReactMount is triggering a checksum warning and replacing the DOM. It seems Chrome may have changed its behavior with innerHTML/outerHTML and returns the encoded character rather than the encoding and causes the comparison to be incorrect. I do not see the issue in Firefox. `React.renderToString(<div>What's up</div>);` correctly renders to `<div>What&#x27;s up</div>`, but `React.render(<div>What's up</div>);` over the same DOM shows…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1706 · Bug: onBlur event does not fire if loss of focus occurred due to element being removed by react
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: onBlur event does not fire if loss of focus occurred due to element being removed by react under certain circumstances - behaviour is not consistent. Link to code example 18.3.0-next-32baab38f-20220811: [link] Link to code example 18.0.0-fc46dba67-20220329: [link] Focus outside container: ![image]([link]) Button has focus: ![image]([link]) Button clicked - resulting in react removing it from DOM ∴ focus is lost from container - but react does not fire onBlur event: ![image]([link]) React versions: 18.3.0-next-32baab38f-20220811, 18.0.0-fc46dba67-20220329 ## Steps To Reproduce See code example…

### CASE-1709 · Bug: infinite function component rendering with lazy loading
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Question/Status: Unconfirmed
- **Excerpt**: Unexpected behavior (infinite function component rendering) when lazy loading component with string interpolation (reactive variable state) React version: 18.0.0 rc3 ## Steps To Reproduce 1. Not working: ```javascript import { lazy } from 'react'; export default ({ langauge }) => { const Privacy = lazy(() => import(`./Privacy-${langauge}.jsx`)); return <Privacy />; }; ``` 2. working: ```javascript import { lazy } from 'react'; const PrivacyPT = lazy(() => import(`./Privacy-pt.jsx`)); const PrivacyES = lazy(() => import(`./Privacy-es.jsx`)); const PrivacyEN = lazy(() =>…

### CASE-1727 · Bug: Behavior of onFocus event in React 17 is counterintuitive
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Component: DOM/Status: Unconfirmed
- **Excerpt**: React version: 17.0.0-rc.1 ## Steps To Reproduce [link] 1. Click on the input element 2. Notice that only "focusin on div" is logged, not "focus on input" ## The current behavior In React 17 RC, `onFocus` on a child element is never called if a parent element calls `stopPropagation` on the native event first. In React 16 `onFocus` was fired as expected. This affected the way the [FocusScope]([link]) component is implemented in React Aria, which uses native `focusin` event handlers and relies on browser bubbling behavior. I believe this is happening because React is now listening using a…

### CASE-1741 · Bug: button onFocus not called when focus() called from useEffect cleanup
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍8 💬8 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.12.0 ## Steps To Reproduce 1. Have a `<button/>` HTML element with `onFocus` event handler defined ``` <button ref={btnRef} onFocus={() => console.log("I'm in focus")}>Focus Target</button> ``` 2. Have another component with `useEffect` cleanup code which will call `focus()` ``` React.useEffect(() => { const ref = btnRef.current; // btnRef is a ref to…

### CASE-1746 · Rendering a `String` class instance in an expression renders each letter as a text node
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** If you attempt to render a `String` in an expression, it will render each letter as a child node. From an accessibility standpoint, this does matter. A screen reader like Apple's VoiceOver utility will attempt to read every text node, meaning that it will attempt to read each letter. This would mean an impacted experience for blind users. From a display perspective, this doesn't matter, because…

### CASE-1748 · React forces component to un-mount and mount when it should only update it
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Seems to me to be a bug ( maybe not a bug) **What is the current behavior?** The WrapAndRenderChildren component is being unmounted and mounted, so does the From hence when changing the input value (which in turn sets the state) the input is rerendered and loses focus. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle…

### CASE-1753 · react-hooks/exhaustive-deps, React.useCallback has an unnecessary dependency. Keying off of related values
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug? -ish **What is the current behavior?** If you add a deps list state variable but don't use it directly, you get a warning. **What is the expected behavior?** deps list allows you to provide sensitivity to a change, it should not be required to use the value that changed. Possibly this warning should have the message changed to a "if you know what you're doing" type message, such as "you may have left this in by mistake" **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions…

### CASE-1757 · Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **NOT A DUPLICATE** **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** package.json dependencies: ``` "dependencies": { "@user/core": "^4.0.0-alpha.8", "@user/icons": "^4.0.0-alpha.8", "@user/styles": "^4.0.0-alpha.8", "@user/next-typescript": "^1.1.1", "next": "^8.1.0", "react": "^16.8.6", "react-dom": "^16.8.6" }, "devDependencies": { "@user/next": "^8.0.3", "@user/react": "^16.8.13", "@user/react-dom": "^16.8.4", "@user/styled-jsx": "^2.2.8", "typescript": "^3.4.3" } ``` index.tsx: ``` import React, { useContext } from "react"; import { Store }…

### CASE-1758 · Combination of componentDidCatch and hooks throws "Should have a queue. This is likely a bug in React."
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍12 💬8 · closed · labels: Type: Bug/Component: Hooks
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** If a component with hooks throws an error in its render function *after* the hooks have been defined, and that render error is caught via a `componentDidCatch` in a parent component, any subsequent components will have their hook order jumbled up on the next render. This results in the app crashing with an **"Uncaught Invariant Violation: Should have a queue. This is likely a bug in React. Please file an issue."** error (or different messages depending on the specific hooks used) **If the current…

### CASE-1765 · If console.error throws while reporting an error, React can enter an invalid internal state
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When `ReactFiberScheduler` exceeds the update count and throws the `Maximum update depth exceeded.` invariant, it did not update `nestedUpdateCount` (leaving it in a "dirty" state). This has been fixed in this PR yet to be released: [link]][ref]/files#diff-24152ba0b2ac251decb6a12f41bdf116R1478 But out of interest + further concern, I [began to explore]([link]][ref][ref]) some concerns around whether ReactDOM (Fiber really) maintaining some "state" and in fact, being left dirty in at least some…

### CASE-1768 · Elements loose focus when moving to or from a portal
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Type: Feature Request
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Perhaps a bug, but could also be seen as a feature **What is the current behavior?** When you move an element to a portal through `ReactDOM.createPortal` the element looses focus if it had focus. If the element gains focus while in a portal, when moving out of the portal it looses focus. **What is the expected behavior?** I would have expected React to maintain focus of the element when moving in or out of a portal **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of…

### CASE-1771 · autofocus attr not included in button element when rendered
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** `autoFocus` prop on `<button />` component is not rendered to the DOM. According to MDN autofocus is a valid attr for the button element. [link] **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template for React 16: [link] template for React 15: [link]).** [link] **What is the expected behavior?** autofocus attr…

### CASE-1774 · Add hooks to ReactDOMServer to support caching
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Feature Request/Component: Server Rendering
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** feature **What is the current behavior?** react-dom SSR performance could be improved using server-side cache, but currently the ReactPartialRenderer is currently not accessible from the `react-dom` package. **Desired behavior** On the **server** only, it would be nice if _plugins_ could be used to improve render performance. Currently the only way to do this would be to externally maintain a renderer implementation. However, the `ReactPartialRenderer` already contains all the behavior required to support plugins - with a little…

### CASE-1781 · Ref is not passed through a HOC
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬8 · closed · labels: Resolution: Duplicate
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** The parent component of a child component wrapped in a HOC cannot assign a ref attribute to the child component. The ref attribute instead refers to the HOC. In order for the parent component to reference the child component, it must use some of the below popular workarounds: onRef prop [link] innerRef prop [link] getInstance func [link] **What is the expected behavior?** In accordance with the decorator pattern, a child wrapped with a HOC should not be less accessible than a child not wrapped…

### CASE-1785 · Invariant Violation when rendering using both ReactDOM and ReactDOMServer
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react
- **Signals**: 👍7 💬8 · closed · labels: Type: Bug
- **Excerpt**: Using both ReactDOM.render and ReactDOMServer.render(\w+) causes an invariant violation in React 15.4.1. See console on [link] There is: ```javascript react-dom.js:18121 Warning: Exception thrown by hook while handling onSetChildren: Invariant Violation: Item must have been set Invariant Violation: Item must have been set at invariant ([link]) ``` Notice that I render completely different components with each of the render methods. Some criteria have to be met for the warning to show, like at least two nested components. To me it seems like the ReactDOMServer is messing with itemMap in the…

### CASE-1789 · Error in production but not in devlopment.
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I've no idea about this error only occured in production version Is there anything wrong? Many thanks! Here are some of the information: ![image]([link]) Uncaught Invariant Violation: Minified React error [ref]; visit [link] for the full message or use the non-minified dev environment for full errors and additional helpful warnings.reactProdInvariant @ app.fbd84ee….js:245 addComponentAsRefTo @ app.fbd84ee….js:56072 attachRef @ app.fbd84ee….js:56292 ReactRef.attachRefs @ app.fbd84ee….js:56311 attachRefs @ app.fbd84ee….js:5030 notifyAll @ app.fbd84ee….js:18972 close @ app.fbd84ee….js:56181…

### CASE-1795 · bug componentWillUnmount is called before componentDidMount
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: `React 0.14.3` `componentWillUnmount` is called before `componentDidMount`, but this must be impossible. As additional check: calling `findDomNode` inside `componentDidMount` causes `Invariant Violation: findDOMNode was called on an unmounted component`. code example and output [jsbin example]([link]) ``` javascript import React, { Component } from 'react'; import { render, findDOMNode } from 'react-dom'; let buggyUid_ = 0; class BuggyBehavior extends Component { constructor() { super(); this.buggy = buggyUid_++; } componentDidMount() { console.log('didMount', this.buggy); findDOMNode(this);…

### CASE-1796 · componentDidUpdate fires before references are triggered or associated
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Type: Question
- **Excerpt**: So, I feel like componentDidUpdate and references are executing in the wrong order. Background: I'm working on a situation where you're in a list of input fields, with a blank row of fields at the bottom. When you press enter in any field, it moves your focus to the next one by talking to a register which keeps track of all the fields and their positions. Shift+enter goes in reverse as well. If you press enter on the final field, it kicks off a Flux like action which results in the next blank field being rendered, and then I want to move focus to that row. So I set up a callback that will…

### CASE-1799 · Add warnings on incorrect casing of event handler properties
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Difficulty: starter
- **Excerpt**: Hi, React currently warns about incorrect casing of properties like `tabIndex`. However, it doesn't warn about this problem on event handlers, like `onKeyDown`. Being used to the "html way" of writing those attributes, I often wrote something like `onKeydown`. Sadly, attached event handlers were not called, but I didn't get any warning from React, and it took me quite some time to find my mistake. You can see an example here: [link] Just focus on an element, and try to press a key.

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1708 · Bug: Using lerna-managed react projects, an error is reported after ssr is enabled and packaged
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. yarn install 2. yarn build:admin-react 3. node server2 <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: [link] <!-- Please provide a…

### CASE-1715 · Bug: dom.br can't accept empty Fragments as children
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: When rendering a dom.br(), React will fail if you use a Fragment which has no children. React version: 17.0.1 ## Steps To Reproduce 1. Using the React UMD distribution in a browser 2. ReactDOMServer.renderToStaticMarkup(ReactDOMFactories.br({}, React.createElement(React.Fragment, {}))) throws ## The current behavior React fails to render, even though the dom.br in fact has no children ## The expected behavior React should at least be able to see through arrays and Fragments when performing this check. Ideally even custom components that ultimately do not render any DOM would also be…

### CASE-1722 · Powerful Feature - SSR async fetching for resources via lifecycle method
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍3 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: When doing SSR it's very hard to fetch resources that are dynamic, and while you have been trying to introduce the quite complex suspense API, I had to come with a simpler solution for my use case. Simply adding a lifecycle method that executes only during SSR via react-dom, that is async (which makes the whole renderToString) method async indeed; which allows to update the initial state, it's extremely simple, and it works (I have tested it). Let me make an example to illustrate this further suppose we have a component named `ResourceFetcher` which does what it claims and fetches a resource,…

### CASE-1759 · Extra attribute "class" warning on hydrate
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug, most likely. Or at least explanation why I get a warning and help fixing it. **What is the current behavior?** I've got a really simple app that's SSR'd: ```jsx export const App = () => ( <div className={styles.container}>Hello world!</div> ); ``` immediately when rendering it, I get a warning in console: ``` Warning: Extra attributes from the server: class ``` that really doesn't make sense to me, because once you renderToString(), the…

### CASE-1760 · contextType apparently not working in dev mode server side rendering
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Component: Component API
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Crash during server render due to `this.context` being undefined. Bug only happens in SSR, and only in dev mode react. Issue appears neither in browser renders, nor in production mode server renders. note: Using [link] for c# server-side rendering, with bundled-in version of react disabled (so using the same version of react as the client bundle) (simplified) application structure ``` // root component…

### CASE-1769 · server side react-dom render hrefLang as hrefLang
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** react-dom/server render "hrefLang" as "hrefLang" **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem:** [link] **What is the expected behavior?** Render "hrefLang" attribute as "hreflang" on server-side. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** 16.0.0 - 16.4.0 Works in 15.6.2

### CASE-1773 · hydrating a component with `dangerouslySetInnerHTML` and `toString` causes a warning, and the component to not render
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍11 💬8 · closed · labels: Type: Bug/Component: Server Rendering
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** When hydrating a pre-rendered component that uses `dangerouslySetInnerHTML`, + an object with a `toString` method, we get a warning such as: ``` Warning: Did not expect server HTML to contain the text node "Bonjour" in <p>. ``` The component will also appear blank. This is noteworthy since: - The markup returned by `render` appears to be correct, meaning: - The markup that an SSR server returns is correct - The markup that appears on page if we just use `render` on the client, without SSR is…

### CASE-1775 · React 16 client side render doesn't update DOM's style that comes from SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** React 16 client-side-render have a problem, it can not update the DOM's style, but it can update the prop. More detail on repo below. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template for React 16: [link] template for React 15: [link]).** I created a repo for this [link] **What is the expected behavior?** Update DOM's style correctly. **Which versions of React, and which browser / OS are affected…

### CASE-1776 · React 16 fails to rehydrate noscripts
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍14 💬8 · closed · labels: Type: Bug/Component: Server Rendering
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** As of React 16, `<noscript dangerouslySetInnerHTML={...} />`s are not properly rehydrated. Equivalent code works in React 15. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** Consider the following server-side code: ```js const React = require('react'); const ReactDOMServer = require('react-dom/server'); class Main extends React.Component { render() { const component =…

### CASE-1792 · setState in componentWillMount causes TypeError when rendering with renderToString and preceded by a component that renders with renderToString
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍2 💬8 · closed · labels: Type: Bug
- **Excerpt**: Calling `setState` in `componentWillMount` of a component causes the error ``` TypeError: Cannot read property '_currentElement' of null at ReactCompositeComponentMixin._updateRenderedComponent ``` when rendering server-side with `ReactDOMServer.renderToString` and preceded by a component that renders content using `ReactDOMServer.renderToString` or `ReactDOMServer.renderToStaticMarkup`. Causes TypeError with 0.14.8 and 15.0.0-rc.2: [link] Works with 0.13: [link]

### CASE-1793 · renderToString() fails to terminate comment node
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug
- **Excerpt**: Run this: ``` js let html = renderToString(<div>foo</div>) ``` Get this: ``` <div data-reactroot="" data-reactid="1" data-react-checksum="-1450897250">foo</div> ``` Not sure if this is a bug but I thought `data-reactid` and friends are gone in `v15`, no? Also when testing `v15` with an old project using `v0.14.7` - which has a much complex scenario, `renderToString()` returned following causing a blank page: ``` <!-- react-empty: 1 -- data-react-checksum="1336804998"> ``` Just wondering is the behavior for server rendering changing in `v15`? Thanks.

### CASE-1800 · Vue is not catching errors on server side in SSR when using async child setup
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍0 💬34 · closed · labels: scope: ssr/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.13 ### Link to minimal reproduction [Vue SFC Playground]([link]) ### Steps to reproduce Just open a link and you will see errors when SSR is ON. When SSR is OFF everything works as expected. Also, commeting the line with top-level await (making `Comp.vue` a sync component) will also work fine both with and without SSR. ### What is expected? In SSR mode the page is expected to be blank white for 1 second and then display error message from `App.vue`. This works as expected with SSR turned off. Basically `onErrorCaptured` should be triggered, child setup and `<template>`…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1710 · Bug: Error: Should have a queue. This is likely a bug in React. Please file an issue.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: Hello, I am getting an error (tried also with the latest version 17.0.2) Error: Should have a queue. This is likely a bug in React. Please file an issue. ![image]([link])

### CASE-1716 · [DevTools Bug]: Emoji as visual helper produce strange symbole
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Emoji seem supported but produce strange symbole ![image]([link]) To test emoji on Window Os, use `[win]+[.]` 🟩 ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1719 · Bug: Where did the components tree go in the new version?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps in this image below I can't seem to find the old components tree, it used to be in this empty upper half, now all I can see it rendered by, so was it removed or is there something wrong with my extension ? ![image]([link]) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1720 · Bug: im using axios to make a post call to get bearer token. this is working fine in postman but getting CORS error while doing from react
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: ios, react
- **Signals**: 👍1 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: ![image]([link]) React version: ## Steps To Reproduce const postData = { client_id: aad.ClientI, scope: aad.Scope, client_secret: aad.ClientSecre, grant_type: 'client_credentials' }; axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; axios .post(aad.AuthLoginUrl, JSON.stringify(postData)) .then(response => { console.log(response.data); }) .catch(error => { console.log(error); }); ## The current behavior Access to XMLHttpRequest at '[link] from origin '[link] has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested…

### CASE-1721 · Bug: Error message prints "Warning: ..." instead of "Error: ..."
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍6 💬8 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: ## Steps To Reproduce 1. Go at [link] and type something in the Tool ID field. This reproduces one of these errors-warnings.. 2. Take a look in the console and you will see an Error but.. a Warning, or Error (in fact it's considered to be an error)... , which is simply confusing. ![image]([link]) <!-- Your bug will get fixed much faster if we can run your…

### CASE-1728 · Bug: Blocking mode and events are broken (probably) for Material UI Rating component (example)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Resolution: Duplicate/Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: React version: `0.0.0-experimental-94c0244ba` ## Steps To Reproduce ```js import React from "react"; import Rating from "@user/lab/Rating"; import "./styles.css"; export default function App() { const [rating, setRating] = React.useState(null); return ( <div> Example <Rating name="rating" size="large" value={rating} onChange={(event, newValue) => { console.log(`change rating: ${newValue}`); setRating(newValue); }} /> </div> ); } ReactDOM .unstable_createBlockingRoot(document.querySelector('#app'), { hydrate: false, }) .render( <App /> ) ; ``` # Live Example [link] # Video (describe where is a…

### CASE-1732 · Bug: lighthouse performance metrics going down with rendering this.props.children
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: React version: 16.12.0 ## Steps To Reproduce Just use this.props.children which render all the components. But in the lighthouse it highlighted that it occupies javascript main thread execution. ## The current behavior Performance metrics impacted ## The expected behavior it should not block the main thread execution ![image]([link])

### CASE-1737 · Bug: componentDidMount fires before lazy-loaded components are mounted
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: In a component with child components that are lazy loaded using React.lazy, the component's componendDidMount() callback is fired before the lazy-loaded children are loaded/mounted. This makes it very difficult to perform logic on child components (eg. calling a component method via a ref, using ReactDOM.findDOMNode on the children, etc.) in componentDidMount. This all obviously works fine with components that are synchronously loaded but makes it very difficult to migrate an existing React application using synchronously loaded components to one that leverages React.lazy. This behavior is…

### CASE-1738 · Bug: DevTools failed to parse SourceMap of extensions
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: Status: Unconfirmed
- **Excerpt**: I am getting a lot of these errors/warnings in my console. Why is DevTools trying to get source maps for extensions? Using the latest React Dev Tools extension (2.17.0) and React (16.9.12) ![image]([link]) ## The current behavior Getting lots of unrelated warnings ## The expected behavior No warnings related to extension source maps should be created.

### CASE-1743 · Can't change title of react app for social sharing
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug (or a misunderstanding on my part) **What is the current behavior?** Even after I set the title of my react app, when sending the website url in a text the title still shows up as "React App" (I'm expecting it to be "Stamper") ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have…

### CASE-1751 · React Hooks don't work inside function without export default.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Hello, I'm trying to call the useContext hook inside a function and I get the following error ![image]([link]). This is the code that I'm trying to make it work using hooks. ` import {MaterialUIComponentsNavigation} from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation'; import {authRoles} from 'app/auth'; import React, {useContext, useState} from "react"; import TextContext from "../TextContext"; export function NavigationConfig () { const test = useContext(TextContext); console.log("Navigation",test) return test; } ` And for a reason or another if I change the…

### CASE-1787 · Bug with embedded slides/iframe on mobile
- **Principles**: P-A3, P-H1 · **Env**: react, mobile
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** bug **What is the current behavior?** Google slides doesn't show full screen mode button. The allowFullscreen attribute is set to a truthy value. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** [link] **What is the expected behavior?** I expect the slide to display full screen on mobile. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** I am trying…

### CASE-1791 · Composition type compoent
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I write this [BaseInput]([link]), some code from `draft-js`, problem here: when you click `set another value` button, the input didn't change. And I know I shouldn't use defaultValue in `BaseInput` component, But if not, the compostion type doesn't work correct. And I browser document again, really don't know how to do it. Have any idea? [BaseInput]([link]) ## Update: change `defaultValue` to `value`: You can see effect here: [demo video]([link])

