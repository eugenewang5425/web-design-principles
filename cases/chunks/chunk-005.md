# Case Chunk 005 — Round 5

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1401 · Warning: Did not expect server HTML to contain a <ul> in <div>
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍3 💬12 · closed · labels: Component: DOM/Component: Server Rendering/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I'm using Server Side rendering with `react-loadable` and my home page see this in the browser. The warning test to be a bit different on other pages, but still seems to happen generally. My app is using Grommet in case that matters... When the page renders I see the following in the console: ``` Warning: Did not expect server HTML to contain a <ul> in <div>. warningWithoutStack | @ |…

### CASE-1433 · Bug: Hundreds render of Suspense child with hydration error
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> ## React version: 18.2 ## Description Hello! Found a few problem cases with Suspense, one quite exotic, one easy to reproduce, and in our project I get both at the same time. ### First case - **hundreds render of Suspense child with hydration error**. If wrapped in Suspese component cause hydration error, React will render this component hungreds or event thousands…

### CASE-1448 · Bug: `[email]/server` doesn't export `renderToReadableStream`
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: Maybe I'm misreading the intended usage, but trying to follow [link] let me to this apparent roadblock React version: 18.0.0 ## Steps To Reproduce 1. `import ReactDOMServer from "react-dom/server";` 2. `ReactDOMServer.renderToReadableStream === undefined` <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: <!-- Please provide a CodeSandbox ([link]), a link to a repository on GitHub, or provide a minimal code…

### CASE-1472 · production build + SSR + hooks = error
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** using `useContext` or `useState` hooks in the production version of react throws error [ref] (Hooks can only be called inside the body of a function component) **reproduction** [link] Notice when using the development version it renders as expected. In line 4 change the import to development **What is the expected behavior?** to render without throwing. react/react-dom version `16.8.3`

### CASE-1486 · ReactDOMServer.renderToStaticMarkup gets stuck while trying to render Portals
- **Principles**: P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Difficulty: medium/Component: Server Rendering
- **Excerpt**: Calling `ReactDOMServer.renderToStaticMarkup(elementWithPortal);` gets stuck in a loop while trying to do a static render. Current behavior: The behavior can be seen here: [link] by un-commenting line 58 (warning: this will make your tab freeze) Expected behavior: It should return with results or throw some kind of error if the input is not valid

### CASE-1490 · Unexpected SSR difference warning with SVG <filter> primitives
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: DOM/Component: Server Rendering
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I've started recieving this warning about my SVGs which is using [feGaussianBlur]([link]): `Warning: Expected server HTML to contain a matching <feGaussianBlur> in <filter>.` **What is the expected behavior?** Should be no warnings because there are no difference. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** Such behavior started right after updating to `React 16.0.0-rc.3` and never happened with `React 15.6.1`

### CASE-1492 · componentDidCatch doesn't work in React 16's renderToString
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍9 💬11 · closed
- **Excerpt**: I tried out a simple test case for the new `componentDidCatch` error handling code in React 16 SSR with the following code: ```javascript import React from "react" import { renderToString } from "react-dom/server" class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } componentDidCatch(error, info) { // Display fallback UI console.log("componentDidCatch"); this.setState({ hasError: true }); } render() { if (this.state.hasError) { // You can render any custom fallback UI return <h1>Something went wrong.</h1>; } return…

### CASE-1500 · adler32 function returns incorrect checksum on Opera Presto browser
- **Principles**: P-F4 · **Env**: opera, opera 12
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: I've discovered what seems like a platform bug in the Opera Browser (Presto Engine) which is causing server side rendered components to always be re-rendered because the client's checksum does not match the server rendered checksum. More than 3 addition assignment expressions in a single statement results in an incorrect checksum when the adler32 function is called. Here is a test case that can be used to reproduce the bug: [link] Here is a download link for Opera 12.16 for Mac you could install and run the above test and see it fail: [link] While it's a very old browser, and a fix for it…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1402 · unmountComponentAtNode works async ?
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬12 · closed · labels: Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** i tried to use `ReactDOM.unmountComponentAtNode` and `ReactDOM.render` to manage my multi roots. i found that if i use them in sync code, i get an error just like this when i change route pages: ``` Warning: unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. Instead, have the parent component update its state and rerender in order to…

### CASE-1427 · Why can't we reuse components between renders?
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: Apologies if this is the wrong place to ask the question, but I thought it might be better to have this explained somewhere that wasn't as ephemeral as the IRC channel… Storing an instance and trying to reuse it results in [an error]([link]]/blob/eebcf9f888b8a8fc3ed1f31c2789584a235aa089/src/core/ReactComponent.js#L255-L261): ``` Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing a single component instance in multiple places. ``` Recently, I started wondering, if these are just descriptors, why is that desired behavior? Or is it a…

### CASE-1436 · Bug: Re-rendering nested components breaks event listeners on parent
- **Principles**: P-F5, P-H3 · **Env**: react, mobile
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Re-rendering nested components breaks event-handlers; wrapping handler functions in `useCallback` makes no difference React version: 18.2 Link to code example: [link] _Note: The repro makes use of `Touch` events, so open the Sandbox link on a mobile device_ ## The current behavior `onTouchEnd` does not fire when re-rendering a nested component, even when caching handler-functions with `useCallback` ## The expected behavior Re-rendering a nested component should have no effect on its parent's event-listeners

### CASE-1471 · useEarlyEffect or cancelled render cleanup hook request
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** There is no way to run a side-effect generating hook before the first render. **What is the expected behavior?** For certain platforms (like Meteor) the reactive data access paradigm both runs immediately (data can be available on first render), and sets up side effects for later updates. I'd like to be able to set all that up *before* the first render, instead of waiting a render pass with `useEffect`.…

### CASE-1474 · Old references retained by memoizedProps in fiber
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍6 💬11 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug (or misunderstanding on my part) **What is the current behavior?** Fibers seem to retain stale references to old data via `memoizedProps` / `memoizedState` **Demo:** [link] This demo just puts some big strings in the state (and into the props of a child component). If you click the button it will replace the array of strings with an empty array. At this point if you inspect the memory usage you will see that both `memoizedState` and `memoizedProps` are still holding references to the original array of strings and that memory can't…

### CASE-1482 · Document the use of setState in componentWillUnmount
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍6 💬11 · closed · labels: Type: Question
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** Excerpt from documentation: >componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(). [link] The docs don't mention if `setState` can be used in `componentWillUnmount`. Consider the following…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1403 · Select multiple - does not scroll to selected item(items)
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬12 · closed · labels: Type: Bug/Component: DOM/good first issue (taken)
- **Excerpt**: *bug* In react@user we could set "value" or "defaultValue", and selected element scrolled into view. [link] But in react@user this does not work. [link]

### CASE-1409 · Regression: React 16 automatically marks first item of a mutliple select as checked
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Type: Bug/Component: DOM/Type: Regression/good first issue (taken)
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug - Regression **What is the current behavior?** In react 16 when creating a `<select multiple>` the first child `<option>` is automatically getting marked as selected. In React 16 there does not seem to be a way to specify no `<option>` gets selected by default [link] **What is the expected behavior?** In React 15 unless you marked an option to be selected `<option selected>` no options were selected by default. [link] **Which versions of…

### CASE-1412 · Error Rendering Inputs in Separate Window using Portals
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Browser: IE/Component: DOM/Difficulty: medium/Type: Needs Investigation/good first issue
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I am using React's Portals to render react elements in a completely separate (popup) window. When I attempt to render an `<input />` in the popout window, the following error occurs and React fails to render (the window turns white): ```'enumerable' attribute on the property descriptor cannot be set to 'true' on this object``` in react-dom.development.js **What is the expected behavior?** The `<input />` renders correctly in the popout window. **Steps to reproduce:** I have created a repo you can…

### CASE-1415 · Buggy controlled number input on 15.5+
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The following code example works well with `text` input type, but allows inputs like `012` or `0012` to be entered when using the `number` input type. The `console.log` line always runs and shows the right value, and the App state is also correct when checked with React Developer Tools. It's only that the controlled input is not being "controlled" somehow. ``` class App extends Component { constructor() { super() this.state = { value: '', } } handleChange = e => { const value = e.target.value const…

### CASE-1422 · IE10 nativeEvent object missing returnValue for input onChange events
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍0 💬12 · closed · labels: Type: Regression
- **Excerpt**: I just ran into this issue while testing the upgrade from 0.14.8 to 15.2 in IE 10. If preventDefault() or stopPropagation() is called inside the handler for an onChange event of an input control, a "Member not found" exception is thrown. Stepping through the code, it appears that the the nativeObject reference is broken. Accessing most of the properties of the MSEventObj will throw the same exception. I am able to reproduce it with the minimal case below on a clean IE10 Windows7 test VM from Microsoft. Repro Fiddle: [link]

### CASE-1432 · Bug: validateDOMNesting needs to be updated for new customisable form widgets
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍8 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 19.1.0 ## Steps To Reproduce 1. Implement a select box with the new styling API. For example, follow the MDN tutorial, specifically [this point]([link]). Link to code example: (Pure html/css reproduction of `<button>` working inside of `<select>`): [link] ## The current behavior An error in the console: > In HTML, `<button>` cannot be a child of…

### CASE-1434 · Bug: React not defined in TypeScript when importing from npm
- **Principles**: P-G4, P-E3 · **Env**: react, typescript
- **Signals**: 👍1 💬11 · closed · labels: Resolution: Stale
- **Excerpt**: React version: all ## Steps To Reproduce 1. Import React from "npm:react" inside Deno 2. Observe that React is not defined in TypeScript Code example: ```typescript import * as React from "npm:react"; // here React is not defined in typescript, we need to add @user/react /* @user="@user/react" */ import * as React from "npm:react"; ``` ## The current behavior React is not defined in TypeScript when importing it from "npm:react". ## The expected behavior React (and react-dom) should ship with types, at least in a .d.mts form, so that users don't have to bother adding types manually. As…

### CASE-1437 · Bug: missing button data in form when submitted via `formAction`
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬11 · closed · labels: Type: Bug/Component: DOM/React Core Team
- **Excerpt**: When a form action is triggered by a button that is outside the form's tag the button's `name` and `value` is missing from the form data provided to the action. When the button submitting the form is inside the form tag the button's form data is properly surfaced to the action: ![output]([link]]/assets/7158882/5e2fd2c7-3f38-4fc5-ac6e-0cf2de16e3c1) React version: 0.0.0-experimental-2807d781a-20230918 ## Steps To Reproduce 1. Create a form that calls an action when submitted with a button outside the form tag submits the form. The button that submits the form should have the `name` and `value`…

### CASE-1444 · Bug: Replacing a button with a new button type="submit" causes a form to be submitted without pressing the button
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2 ## Steps To Reproduce 1. Create a button `<button type="button">`. 2. On the click even replace the button with a button of type submit `<button type="submit">` 3. The form will be submitted even though the second button was never pressed. <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than…

### CASE-1453 · Bug: radio and checkbox controlled checked property is not updated when browser restores form state
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍4 💬11 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. Add a textbox, two radio buttons (or checkboxes) controlling the `checked` property with state, and a `button[type=submit]`. 2. Check off the second item ("Bananas"). 3. Enter text into the "Your name" textbox. 4. Right click on the tab and duplicate it. Alternative: close + re-open the tab, or navigate away to a different…

### CASE-1458 · Bug: Nested form elements not firing onSubmit
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍11 💬11 · closed · labels: Component: DOM/Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 17.0.1 ## Steps To Reproduce 1. Create a nested form element with an onsubmit handler 2. The onSubmit handler will not be called In the example, click the "Submit child" button and will see the page reload/no console.logs. However, the expected actions occur for both parent and neighbouring forms. Link to code example: [link] ## The current behavior The attached onSubmit handler on a nested form element is not being called/fired. ## The expected behavior Expect the onsubmit handler to be called. I'm aware that nesting forms is not valid - but it was working react 16. I'm hoping…

### CASE-1462 · Bug: Form reset lost checkbox onChange event
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍7 💬11 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: Hi, I use checkbox uncontrolled mode, onChange in form reset after, lose onChange. ```js <input type="checkbox" onChange={onChange} /> ``` but use add ref.addEventListener('change', onChange) is ok ```js const checkRef = useRef<HTMLInputElement>(); useEffect(() => { if (checkboxRef) { checkboxRef.current.addEventListener('change', onChange); } }, []); <input type="checkbox" ref="checkboxRef" onChange={onChange} /> ``` React version: 16.13 and old ## Steps To Reproduce 1. checkbox => checked 2. form reset 3. checked => checked Link to code example: [not react is ok]([link]) [reset is lose…

### CASE-1467 · Memoized child of Suspense component doesn't update when Context updates.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: Suspense
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug (I think?) **What is the current behavior?** ```javascript const [value, setValue] = useState("default"); return ( <div className="App"> <input value={value} onChange={e => setValue(e.target.value)} /> <div> <Value.Provider value={value}> <Suspense fallback={<div>loading</div>}> <MemoizedChild /> </Suspense> </Value.Provider> </div> </div> ) ``` When using a memoized functional component (`MemoizedChild` in above example) in conjunction with `Context` as a child of a `React.Suspense` component, there seems to be a bug in which…

### CASE-1473 · Misleading error description when using wrong useRef
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍9 💬11 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: There's a misleading error when using wrong the `useRef` hook. ``` function MyComponent() { let nameRef = useRef(); return ( <div> <input ref="nameRef" type="text" /> </div> ); } ``` See the example here [link] The code above leads to this error `Function components cannot have refs. Did you mean to use React.forwardRef()?`. I'm moving some class components to Hooks, and stumbled upon this, and it took me a while due to the wrong error message.

### CASE-1479 · input[type='number'] value isn't updated
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬11 · open · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** when I enter "01" into input[type=number]，I set the value to 1, but it doesn't work. It still show "01" **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** [link] **What is the expected behavior?** when I enter "01", it should show "1"…

### CASE-1481 · Possible bug in ReactDOM.createPortal when used in a new window
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A bug. **What is the current behavior?** When a `ReactDOM.createPortal` is used in conjunction with a container in another window, the components do not respond to user input until after `setState` or `forceUpdate` are called on the _parent_ component of the portal. I've produced a [CodePen demonstrating the issue]([link]). 1. Click "Open a Portal" – a new window appears with a pair of buttons. 2. Click either button in the new window – nothing happens. 3. Click the "Hack" button in the parent window (which simply calls `setState({})`…

### CASE-1485 · Select warning fires repeatedly
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Difficulty: starter/Component: DOM/good first issue (taken)
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** See fiddle [link] The warning related to the select fires repeatedly. @user tells me it should dedupe, and that this is a bug. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template for React 16: [link] template for React 15: [link]).** See above **What is the expected behavior?** See above **Which versions of…

### CASE-1487 · Difficult to track down the source of a boolean prop warning
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** More of a DX issue, I think. Certainly a frustration in my upgrade. I would not have submitted, but @user [told me thrice]([link]) to do so. **What is the current behavior?** My build _works_, [but is strewn with warnings]([link]) that I would like to fix. Warnings like: ``` Warning: Received `false` for non-boolean attribute `dirty`. If this is expected, cast the value to a string. in div in Unknown (created by Form(Component)) in Form(Component) (created by Connect(Form(Component))) in Connect(Form(Component)) (created by ReduxForm)…

### CASE-1497 · Input with type=radio incorrectly trigger onChange handler
- **Principles**: P-G4, P-E3 · **Env**: ubuntu, react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug
- **Excerpt**: Bug. If I put several input type="radio" with same name (as in jsfiddle example below) onChange handler triggered only once for individual input when mouse click on input happen. ```jsx <input type="radio" name="some" onChange={...} /> <input type="radio" name="some" onChange={...} /> ... ``` Example: [link] Try to click on different radio inputs several times. Next clicks has no console.log output. I expect trigger onChange every time when I click on non-selected radio input. Bug reproduces in several latest versions of React, at least 15.6.0 and 15.6.1. My OS is Ubuntu. I try in latest…

### CASE-1499 · Bug: <input type="number"> resets value if @user or @user is provided
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Demo:** [link] **Problem:** `<input type=number>` resets its value when I type "." instead of default behaviour (trigger input::invalid html5 state). **Source code if demo not available:** ```html <!-- demo.html --> <p><b>Bug:</b></p> <div id="test"></div> <p><b>Normal html5 behavior:</b></p> <div> <input type="number" value="20" /><br/> <input type="number" /> </div> ``` ```css /* demo.css */ input:invalid { outline: 1px solid red; } ``` ```js // demo.js class Test extends React.Component { public state = {value: 11}; render(){ return ( <div> <p>1: <input type="number" defaultValue="10"/>…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1404 · When a node rerenders due to new context api update, its siblings rerender
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Nodes that use new context api force siblings nodes to rerender **What is the expected behavior?** Siblings should not rererender when a node updates due to context updates **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** 16.3.1 Background: i use `react-navigation` with react-native. react-navigation uses the new context-api. `withNavigationFocus`-HOC wraps the component with a `NavigationConsumer`, a context consumer. In…

### CASE-1406 · `priorFocusedElem.focus()` throws in IE11
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Component: DOM/Type: Regression
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** We have an `onClick` handler on an SVG element. The handler sets a state property that causes the element to be hidden (via CSS). This makes IE11 throw on this line: [link]]/blob/52eb59dda2eb0d9afe3a18aacd6142c1d2f7ee25/packages/react-dom/src/client/ReactInputSelection.js#L72 It seems that [ref] removed a try/catch protection for this. I am working around the problem by stubbing focus like this:…

### CASE-1413 · autoFocus doesn't work with SSR in React 16
- **Principles**: P-E1, P-E2, P-E4, P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬12 · closed · labels: Type: Bug/Component: Server Rendering
- **Excerpt**: `<input autoFocus />` works on the client but not when hydrated. That's because this used to be implemented in JS as a special case but `hydrateInstance` doesn't cause a commit effect to be scheduled that can call `.focus()` like `finalizeChildren` does. The question here is, should we even bother implementing this in JS anymore or should we just emit the `autofocus` attribute in SSR and let the browser take care of it.

### CASE-1419 · String refs cause incorrect warning in ReactTestRenderer
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: If you attach a `ref` to an element using a string (`ref='foo'`) and use `ReactTestRenderer` you get the `"Stateless function components cannot be given refs"` warning See [link]][ref][ref] This is because `getPublicInstance` returns `null` and `attachRef` requires that the instance be non-null in the warning invariant. I think we can either return a simple instance instead of `null` or use some additional check in `attachRef` to see if we're dealing with `ReactTestRenderer`. The first option seems reasonable, given the comment in the current code: ``` js…

### CASE-1423 · Warn if calling setState in getChildContext
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Difficulty: starter
- **Excerpt**: This code causes a maximum call stack: ``` getChildContext() { this.setState({ foo: 'bar', }); return { foo: this.state.foo, }; } ``` These sort of errors are hard to track down as the stack trace is deep in react. Is this a place we can give a user an invariant to let them know what they did wrong?

### CASE-1424 · Invariant Violation: setEnabled(...): Cannot toggle event listening in a Worker thread.
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I'm trying to create a unit test for a simple React view using TestUtils. I have the following: React 0.10.0 (very old I know) jsdom 6.5.1 mocha 2.3.3 Node.js 4.1.1 This is my view: ``` javascript var React = require('react'); var StudentNameView = React.createClass({ render: function() { return React.DOM.div({ id: 'name-container', children: [ React.DOM.p({ children: 'Enter your name' }), React.DOM.input({ id: 'nameInput', onChange: this.props.nameChanged }), React.DOM.button({ id: 'doneButton', children: 'DONE' }) ] }) } }); module.exports = StudentNameView; ``` And this is my current…

### CASE-1428 · Changing node type breaks invariant
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: This example: ``` <html> <head> <script type="text/javascript" src="[link]></script> </head> <body> <div id="example"></div> <script type="text/javascript"> var FailingComponent = React.createClass({ getInitialState: function() { return {selecting: false} }, handleAddClick: function(e) { this.setState({selecting: true}); }, render: function() { if (this.state.selecting) { // This will cause Invariant violation return React.DOM.input(null, '') } else { return React.DOM.div({onClick: this.handleAddClick}, "Press me"); } } }); React.renderComponent(FailingComponent(),…

### CASE-1443 · Bug: `onBlur` is not called when a focused element is unmounted
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍5 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Go to [link] 2. Click on the button 3. Notice that there is no console output when the button is unmounted Link to code example: [link] ## The current behavior When a focused element is unmounted `onBlur` is never called. ## The expected behavior Using vanilla HTML+JS when a focused DOM element is removed, the `blur` event…

### CASE-1449 · Bug: unmount component with creating element JSX variable
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react, typescript
- **Signals**: 👍1 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. type and run below code example 2. click change button <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: [link] ```typescript const A =…

### CASE-1456 · Bug: React roots are announced as clickable to screen readers
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍9 💬11 · closed · labels: Component: DOM/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.1 ## Steps To Reproduce 1. Activate your screen reader 1. I used [NVDA]([link]), but [JAWS]([link]) would also work 1. This will not work with VoiceOver because it does not have the same heuristic about elements with click handlers 2. Go to a page that has one or more React 17 root nodes. For example: [link] 3. Use the regular navigation of your…

### CASE-1461 · Bug: React-17.0.0-rc.0 react-reconciler focusedInstanceHandle crash
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: i tried testing the rc with react-three-fiber, it crashed. so tried with a super reduced minimal renderer, here's the link for testing it: [link] change the color in line 13 from hotpink to something else and it crashes the reconciler <img width="735" alt="Screenshot 2020-08-11 at 00 12 46" src="[link]> going through the stack trace it passes `focusedInstanceHandle` to `doesFiberContain`, but it is undefined ```jsx function commitBeforeMutationEffects() { ... if (doesFiberContain(nextEffect, focusedInstanceHandle)) { ``` this now causes trouble in `doesFiberContain` which checks against null,…

### CASE-1470 · DevTools: Ability to save inspected values as global variable (as it was in previous version)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: Type: Feature Request/Component: Developer Tools/Resolution: Stale
- **Excerpt**: Hi, I really like new dev tools (4.0.5), but I would like to request one useful feature. In previous version it was possible to save inspected value (prop/state/context) and its parts as a global variable using context menu->store as global variable, so it can be easily be accessed through console using `$tmp{n}`. In current version this is behaviour was replaced be creating new "bug" button which will just print all values in console. Unfortunately it's hard to navigate through this object, because $_ in console will return undefined. And in order to access it you need to expand group, find…

### CASE-1476 · Autofocus Text puts cursor at end instead of beginning
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬11 · open · labels: Component: DOM/Type: Regression
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** In React 16, a text input with a value and autofocus will set the cursor at the _end_ of the input. `<input autoFocus={true} type="text" defaultValue="4444" />` **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** See the React 16 repro here:…

### CASE-1477 · .currentDispatcher gets set to null when calling ReactDOMServer from ReactDOM
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Needs Investigation/Component: Hooks
- **Excerpt**: I happened to notice that React will throw `Hooks can only be called inside the body of a function component` if a sibling element calls `ReactDOMServer.renderToStaticMarkup`. I have a [fiddle]([link]) that shows this behavior (I think you need to manually open your console to see the error). If you wrap the sibling element in a component or even just assign it a variable, this issue does not occur. It's easy to get around and is a pretty specific bug, but why might this be happening?

### CASE-1484 · React does not call onBlur callback
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬11 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** **Bug** **What is the current behavior?** When input control becomes disabled, React does not call onBlur callback **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal [link] **What is the expected behavior?** 1. Focus on input element 2. Press Enter button (it makes input disabled) 3. `Blur counter` and `Native blur counter` should be equal.

### CASE-1488 · Loosen up type requirements for event handlers
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍7 💬11 · closed · labels: Type: Feature Request/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** When adding event handlers, it is common practice to do something like: ```js const MyButton = ({ canClick, onClick }) => <div onClick={canClick && onClick}></div> ``` This was fine in React 15.x, but in 16 it reports a warning, which is technically correct: > Expected `onClick` listener to be a function, instead got a value of `boolean` type. However, this now forces you to use the more verbose variant: ```js const MyButton = ({ canClick, onClick }) => <div onClick={(canClick && onClick) ?…

### CASE-1494 · TestUtils.Simulate.{event}(compositeInstance) should throw early
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Difficulty: starter
- **Excerpt**: With the help of `node debug` I found this bug: ``` exception in node_modules/react-dom/lib/ReactDOMComponentTree.js:113 TypeError: Cannot read property '__reactInternalInstance$3isc485qtdibe29' of undefined 111 */ 112 function getClosestInstanceFromNode(node) { >113 if (node[internalInstanceKey]) { 114 return node[internalInstanceKey]; 115 } ``` you're not testing against undefined variables here and also before calling that `getClosestInstanceFromNode` function. Initially reported in [link]][ref], trying to find out what's wrong here. Backtrace is ``` [ref] ReactDOMComponentTree.js:113:11…

### CASE-1495 · Fiber infinite recursion in mounting lifecycle
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug
- **Excerpt**: here is an app [link] There is intentionally a bug in this app: the App component returns `<Demo setVariables={v=>this.setState(..)} variables={..} />` and `Demo` calls `setVariables` in componentDidMount and componentWillReceiveProps (it shouldn't, this is bad user code). What this issue raises is a regression behaviour in React 16 compared to 15. in React 15 : it renders but you directly get a `Uncaught RangeError: Maximum call stack size exceeded`. in React 16 : nothing renders, the app never loads and the browser is spinning forever! I think React is stuck in an infinite recursion. I…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1405 · "is" on <button> causes "className" to translate to "classname" not "class"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** If you add the 'is' attribute to a button element in JSX, along with a "className" attribute, the "className" is translated to "classname" instead of "class". this causes most css-in-js engines to fail to style the button as well as keeping CSS from styling it. For using it within a Chromecast sender app, it breaks the behavior in that Chrome is looking for. Replication case: [link] - courtesy of the material-ui team, who found that they can't fix it because it isn't something they triggered.…

### CASE-1407 · `TypeError: 'undefined' is not a function (evaluating 'n.startsWith(e)')` & `React` & `AntD`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, firefox, react
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: # `TypeError: 'undefined' is not a function (evaluating 'n.startsWith(e)')` & `React` & `AntD` report a *bug*? > `TypeError: 'undefined' is not a function (evaluating 'n.startsWith(e)')` **What is the current behavior?** Safari browser can't run my app, while Chrome browser & FireFox browser both OK. **What is the expected behavior?** It should be running in all main modern browsers.

### CASE-1408 · Remote form submission via dispatchEvent broken in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, edge, ios, react
- **Signals**: 👍0 💬12 · closed · labels: Component: DOM/Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The following does not result in `onSubmit` being called (_only in Firefox_): ```jsx document .getElementById("exampleForm") .dispatchEvent(new Event("submit"))} ``` [![Edit 🏁 React Final Form - External Submit Button]([link])]([link]) ☝️ Click the "External Submit via `document.getElementById()` button. One of the things I love about React is how it smooths out the browser idiosyncrasies that plagued web development for so many years. It's rare to find an edge case like this. However, this is a…

### CASE-1411 · Problem when input type changes from email to text
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍0 💬12 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When an input field changes from "email" to "text", an exception TypeError will be thrown from setSelection. ![Screenshot]([link]) **Reproduction** See here: [link] **What is the expected behavior?** It should not crash because of an uncaught exception **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** master ([link]]/commit/4ca7855ca062d5d7dfca83c86acf46731e1e57ef) Firefox This would be my proposed change to fix the issue:…

### CASE-1416 · `time` element is unrecognized - v16.0.0-alpha.13
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug? **What is the current behavior?** `<time>` tag is incorrectly reported as an invalid HTML element on Chrome Version 59.0.3071.115 [link] ![screen shot 2017-07-20 at 8 22 27 am]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** [link] **What is the expected behavior?** Similar to React 15, `<time>` tag should be a valid HTML element. **Which versions of React, and which browser / OS are affected by this issue?**…

### CASE-1417 · Regression: onChange doesn't fire with defaultChecked and radio inputs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍16 💬12 · closed · labels: Type: Regression
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** In React 15.6.1, this behaviour is changed; In 15.5.4, it fires the change event reliably. 15.6.1 - [link] 15.5.4 - [link] You'll need to have the console open to get the debugger statement. In 15.6.1, the first change fires, but all subsequent changes do not fire. In 15.5.4, all changes fire. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** React 15.6.1 vs React 15.5.4; Chrome latest stable.

### CASE-1418 · Object tags fatally crash React apps in Chrome 56 and above (node cache issue)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 56, chrome, chromium, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: Since the recent update to Chrome in the Canary and Beta branches, React apps which contain an object tag fail fatally (rendering is halted due to internal exception). This is because it seems the chromium devs have altered the following: ``` let foo = document.createElement('object'); foo.test = 5; // foo.test is undefined here in Chome 56 (beta) ``` The reason this kills react is [this line]([link]]/blob/aca2e0403691a2842d4a9d8964c9b1016e248b6a/src/renderers/dom/shared/ReactDOMComponentTree.js#L60). We try stick some arbitrary object onto the end of the element (a cached HTMLElement ->…

### CASE-1421 · Controlled input with type=email produces console warnings with Chrome 52
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome 52, react
- **Signals**: 👍16 💬12 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug **What is the current behavior?** Chrome 52 OSX produces console warnings with React-controlled `<input type="email">` fields: `The specified value "foo" is not a valid email address.` <img width="521" alt="screen shot 2016-08-12 at 4 10 08 pm" src="[link]> **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** [link] ``` js class App extends React.Component { constructor() { super(); this.state = {value: ''}; } render() {…

### CASE-1425 · Chromium chokes on SVG interaction
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chromium, chrome
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: (**[edit-2]**) The particular SVG sub-issue related in this intial post is solved; there is a different SVG issue related in post (this thread) July 15/16. I should have opened a different issue, even though both relate to Chrome and SVG, they are not the same issue. (**[edit-1]** Findings: It is SVG related , sort of . When doing variable assignments from a function from within `render`, the return values may be parsed into span elements, which, when inside SVG, logically cause blow-up. So, generally, the issue now is how to generally still be able to compute usefull things from within…

### CASE-1431 · react devtools version for firefox is outdated
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome, react
- **Signals**: 👍4 💬11 · open · labels: Status: Unconfirmed
- **Excerpt**: <img width="1002" height="626" alt="Image" src="[link] /> <img width="1354" height="562" alt="Image" src="[link] /> [devtool 7.0.0 was released on 2025-10-06 on chrome]([link]). two weeks have passed but [firefox react devtools version is still stuck on 6.1.1]([link])

### CASE-1435 · [DevTools Bug]: Excessive CPU Usage
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍3 💬11 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app Happens even after all tabs are closed ### Repro steps I don't have clear repro steps yet. Occasionally I will notice that Chrome is using 170%-200% CPU. I close *all* my tabs, and it continues. Then I open the extensions management page and disable react devtools. This immediately fixes the problem. Re-enabling the extension does not re-engage the high cpu issue. ### How often does this bug happen? Sometimes ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack…

### CASE-1440 · [DevTools Bug]: DevTools settings are not being saved in the Edge browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Open DevTools 2. Click View Settings 3. Change one of the options 4. Refresh page 5. No option is being saved ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1441 · Bug: onError acts differently to onerror in Vanilla HTML
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍3 💬11 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: onError acts differently on `<picture>`, `<source>`, `<img>` in React than in vanilla HTML. React version: 18.2.0 Chrome version: 108 ## Steps To Reproduce 1. Create an HTML `<picture>` with a `<source>` with a bad URL. Add an onerror function on the `<picture>`, `<source>` and backup `<img>` tags. The `<img>` onerror will fire. 2. Create a React `<picture>` with a `<source> `with a bad URL. Add an onError function on the `<picture>`, `<source>` and backup `<img>` tags. The `<img>` AND `<picture>` onErrors will fire. Link to code example: Vanilla Example (check console): [link] React Example…

### CASE-1442 · [DevTools Bug]: Components Tab does not show up
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍2 💬11 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Visit website 2. Open dev tools This happens on [link] but I first noticed in on a personal project (localhost). When I open the dev tools, the CPU goes up. At first, the Components tab does not show up. After a loooooong time, it does show up, however when I click on it nothing renders inside. ![Screenshot 2022-12-05 at 12 42 04]([link]) I don't know if it's the newest Chrome version or the newest extension version that's causing it. ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version…

### CASE-1445 · [DevTools Bug] Children cannot be added or removed during a reorder operation.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: opera, chrome, react
- **Signals**: 👍6 💬11 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Select a palette 2. Select to color to view shades 3. Go back to the colors with the navigation arrow ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.25.0-336ac8ceb ### Error message (automated) Children cannot be added or removed during a reorder operation. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:26848:41 at bridge_Bridge.emit…

### CASE-1447 · [DevTools Bug] Cannot remove node "276" because no matching node was found in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍2 💬11 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps I am trying save a randomly generated set of colors with matching countries as an object in the local storage from a context So it doesn't change colors after a manual refresh ### How often does this bug happen? Only once ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.24.6-ca7a38ae4 ### Error message (automated) Cannot remove node "276" because no matching node was found in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:26518:43 at…

### CASE-1450 · Reset button on iOS time input does not return correct event value
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, ios, react
- **Signals**: 👍0 💬11 · open · labels: Type: Bug
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: React 17.0.2 IOS version: 14+ ## Bug For iOS(Safari and Chrom). The reset button function does not work on the time input: If I change time to 00:31, reset directly, the time jumps back to 00:30, but the computer still shows 00:31. When pressing reset on a time input, the onChange event is not fired. ![reset]([link]) <!-- Your bug will get fixed much…

### CASE-1452 · [DevTools Bug] Could not inspect element with id "219". Error thrown:Cached data for element "219" not found
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app employer-test.apna.co ### Repro steps The error occurred at InspectedElementContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:37563:3) at Suspense at ErrorBoundary_ErrorBoundary (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:36097:5) at div at InspectedElementErrorBoundaryWrapper (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:36542:3) at NativeStyleContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:38972:3) at div at div at OwnersListContextController…

### CASE-1454 · Bug: onClick handler not called on mobile Safari / iPhone
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, react, mobile, iphone
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: DOM/Type: Needs Investigation
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. Add onClick event to any element 2. Test that onClick is working on mobile device <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: <!--…

### CASE-1464 · DevTools Profiler: "getCommitTree(): Unable to reconstruct tree for root "…" and commit …"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: Describe what you were doing when the bug occurred: 1. 2. 3. --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.4.0-f749045a5 Call stack: at N (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:40:154255) at e.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:40:157019) at yl (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:40:320890) at ei (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:32:58864) at Mi…

### CASE-1466 · Firefox (Developer Edition) React DevTools fails to show state when using useState hook
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: firefox, chrome, react
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: in Chrome, when inspecting a component with useState hooks, one can view the current state key/values in the wrappedComponent object of the hooks section of Components React Devtools, inside of Unmount. When inspecting the same component in Firefox, all i see is wrappedComponent -> Unmount -> wrappedHook -> Effect. Can someone clarify why? Screenshots upon request! Thanks!

### CASE-1480 · Safari will yell if using createRef + createElement + console.log(ref.current)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** It's a safari strange behavior. **What is the current behavior?** Please see this minimum example using safari. [![Edit 13o48j80z4]([link])]([link]) ```javascript import { render } from 'react-dom'; import React, { Component } from 'react'; class App extends Component { constructor(props) { super(props); this.ref = React.createRef(); } componentDidMount() { console.log(this.ref.current); } render() { return <div ref={this.ref} />; } } render(<App />, document.getElementById('root')); ``` Safari will yell me this ![image]([link]) ```…

### CASE-1483 · TypeError: CSS2Properties doesn’t have an indexed property setter for ‘0’ - Firefox Quantum
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, react
- **Signals**: 👍0 💬11 · closed · labels: Resolution: Needs More Information
- **Excerpt**: React v16.2.0 ReactDom V 16.2.0 Report a *bug* Any component that uses inline styles, fails in Firefox Quantum 57.0.1 (64 Bit) ``` const styled = Object.assign({}, { width: `${percent}%`, }); <div className="progress-bar"> <div className="bar" style={styled} /> </div> ``` If you only use classNames - then everything works as expected - (even wrapping the styles in an Object.assign - as shown above, does not fix this issue) The code fails in React.Dom in the following function: ``` function setValueForStyles(node, styles, getStack) { var style = node.style; for (var styleName in styles) { if…

### CASE-1489 · [Feature request] Disable the "unrecognized tag" warning in React 16 but only for specific tags.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *Feature* **What is the current behavior?** In Firefox the `dialog` element is not implemented. We use a polyfill to be able to support it. Everything works well. But React warns that the `dialog` element is unrecognized, and this on each page load, which is quite useless (for this specific case). I would like the possibility to disable the warning but only for some elements. So the utility of this warning remains when the developer mistype the component name. **What is the expected behavior?** Once we specified which tag are…

### CASE-1491 · In react 15.6 and greater (safari only), onChange does not fire for input boxes when using sendkeys in the test automation framework selenium
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, chrome, react
- **Signals**: 👍1 💬11 · closed · labels: Component: DOM/Type: Regression
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** I believe this is a bug that was introduced in version 15.6. It also exists in the latest tagged version. (v16.0.0-rc.2) **What is the current behavior?** When running functional tests using selenium and the safari web driver ([link]), using the "sendKeys" method doesn't trigger an onChange event of an input field. This appears to be safari only, however, I've only tested in Chrome and Safari. The result is the the app doesn't see the text in the form input fields. (In our case, we can't log in when running our automation tests,…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-1410 · expose component methods
- **Principles**: P-D4, P-F1, P-F5 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** request a feature **What is the current behavior?** methods of components cannot be exposed **What is the expected behavior?** I would like to be able to expose methods of a component so it can be used from a container component, it can be done through an attribute similar to 'ref', like for example 'expose' For example, imagine a have a car component and a wheel component, the car would like to rotate the wheels using a method that the wheels expose to the cars Something like: ``` class Car extends Component { constructor(props) {…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1414 · Using setState inside a "function as child component" generates a warning about functions not being valid children
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Reporting a **bug**. **What is the current behavior?** _Context: React Native app, but the error isn't related to the renderer_ I'm using a handcrafted `<Fetch path="/api/route" render={this.renderChildren} />` component which fetches data and passes it to a ''function as child component", which is rendered. However when using `setState` to save the call result, I get a pretty interesting error as you can see: <img width="418" alt="screenshot of the code leading to the error" src="[link]> 👇 gives you 👇 <img width="418"…

### CASE-1420 · Bug when using React in .net's WebBrowser
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: We use React for our web application and it works well. But also we have some Office add-ins that use `System.Windows.Forms.WebBrowser`, and the problem occurs in these add-ins. When we try to show `select` tag application show script error like this: ![image]([link]) When we go to the mentioned line of code we see the following: ``` javascript var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) { if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object'…

### CASE-1438 · Bug: Resetting the value comes from dynamic `defaultValue` of `<input type="search" />` won't trigger `onChange`
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Open the reproduction below. 2. Waiting for `Hello, World` to show up in the input. 3. Do not input/delete anything in the input. Just click the `X` button of the `<input type="search" />`: <img width="433" alt="image" src="[link]]/assets/40715044/8605002f-b0b0-489e-a16e-b56d3658948e"> Link to code example: [link] ## The…

### CASE-1439 · Bug: link order been messed up after upgrade to next version
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: the link order inside head element has been messed up after upgrade to next version React version: 18.3.0-next-c8369527e-20230420 ## Steps To Reproduce 1. clone the code example 2. follow the readme Link to code example: [link] ## The current behavior the link order is ![image]([link]) ## The expected behavior the link order should be ![image]([link])

### CASE-1446 · [DevTools Bug]: With [email] and PnP and [email], `yarn react-devtools` fails to start
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬11 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. In project using [email] and PnP (`yarn set version berry`) 2. `yarn add -D react-devtools` 3. `yarn react-devtools` 4. See error <img width="372" alt="Screen Shot 2022-06-07 at 09 55 59" src="[link]> ``` Uncaught Exception: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined at validateString (internal/validators.js:120:11) at Object.normalize (path.js:1005:5) at contains (/Users/zw/Project/.pnp.cjs:40645:18) at Object.ppath.contains (/Users/zw/Project/.pnp.cjs:40659:32) at isPathIgnored…

### CASE-1455 · Bug: Lazy loading a component throws Unchaught undefined
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬11 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. Upgrade from React 16 to React 17 (react and react-dom both to 17.0.2) 2. Do not touch the source code besides upgrading react versions <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately…

### CASE-1457 · Bug: conditionally using suspense with a fallback on server side causes hydration warnings
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍1 💬11 · closed · labels: Status: Unconfirmed/Component: Server Rendering/Resolution: Expected Behavior
- **Excerpt**: Conditionally using `Suspense` with a fallback on the server side causes incorrect hydration warnings React version: 17.0.1 ## Steps to reproduce 1. Try to hydrate a `<Suspense>` component with a fallback Link to code example: [link] ## The current behavior It produces incorrect hydration warnings <img width="474" alt="Warning: Did not expect server HTML to contain a <p> in <div>." src="[link]> ## The expected behavior It should not produce hydration warnings...? Maybe...? I know it's a bit of a whacky use of suspense but the reason we're doing that is because it's pretty trivial to have all…

### CASE-1459 · Bug: Event Capture does not work in video environment
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: This is related to [link]][ref]. It seems that the problem still exists. React version: 17.0.0-rc.0 ## Steps To Reproduce 1. Copy [link] and replace App.js in Create React App. 2. Name a video file IMG_2313.mp4, and put it under public directory. 3. npm start Another example: 1. Copy [link] and replace App.js in Create React App. 2. npm i react-player 3. npm start ## The current behavior If you click on the video control, such as play button, the click event is not captured, ## The expected behavior If you click on the video control, such as play button, the click event should be captured.

### CASE-1465 · Allow load information from my component
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Resolution: Duplicate/Component: Developer Tools
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Its a bug **What is the current behavior?** **Im trying to watch all the properties in the tab components but it get stuck when I click in a component from my project, I´ve tried this in all my repositories and i get the same problem.** ![image]([link]) **What is the expected behavior?** its supposed to show al the info from my component **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous…

### CASE-1475 · Portals created dynamically exist outside of main tree
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When using a library that creates provided React Components dynamically and renders them using Portals then the components are rendered as expected, but exist outside of the main react tree. See screenshot here: ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code…

### CASE-1478 · Forward ref bug with latest React version
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When a error boundary components catches error and we do a setState, the refs in forwardRef break. I have attached an image where this error occurs at the bottom of this post to assist. I struggled to find the root of the problem and we have an internal task open to try and fix the code if possible and make a PR for React. I could not find the same code as what shows in screenshot. I am probably not understanding the code right. **What is the expected behavior?** ForwardRef should work with our…

### CASE-1493 · Uncaught TypeError: this.updater.enqueueCallback is not a function when using setState callback
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬11 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug on a beta version. **What is the current behavior?** ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** In my Component, I used a pretty simple piece of code: ```js doSomeMore = () => { // Do stuff } doSomething = (value) => { this.setState({ value }, this.doSomeMore ); } ``` firing doSomething() causes this error. **What is the expected behavior?** I expect this.doSomeMore function to be called after…

### CASE-1498 · onLoad not working on <svg /> tags
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: It seems that the `onLoad` attribute doesn't work on `<svg>` tags as it does on `<img />` tags... Could you add support for `onLoad` on `<svg />` ?

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1426 · Making React warn the user when `createElement` is called with `undefined` for the `type` argument
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: Component: Core Utilities
- **Excerpt**: I spent the last hour trying to fix an issue that was caused by me trying to render a `CSSTransitionGroup` when the actual variable was undefined. The root cause was me misinterpreting that `require("react/addons")` would return the whole `React` instead of just `React.addons` (which is my bad), but the error itself and the stack trace were extremely cryptic and it took me a while to even get a clue that the reason why it wasn't working was that I was just trying to render an undefined type. This is the actual exception: ``` Uncaught TypeError: Cannot read property 'defaultProps' of undefined…

### CASE-1451 · Bug: Incorrect escaping inside `style` tags
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: react
- **Signals**: 👍2 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> In general, only backslashes escape things in CSS, while HTML entities are only treated by CSS as plain text. Despite this, `ReactDOMServer.renderToString` escapes HTML special characters (e.g. `&`, `<`, `>`, `"`, `'`) into HTML entities (e.g. `&amp;`, `&lt`, etc.) that are inside a `style` element, even if it makes the stylesheet invalid or transforms it to be…

### CASE-1463 · Bug: cursor jumps to end of controlled <input> tag when value is modified
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬11 · closed · labels: Status: Unconfirmed
- **Excerpt**: React version: 16.13.1 ## Steps To Reproduce 1. Make an `<input>` tag controlled, by setting its `value` in response to `onChange` 2. Apply a transformation to the value (for example, replace spaces with underscores) 3. Move cursor to the middle of the text and edit it Link to code example: [link] Adapted from CodePen example ([link]) on [link] ## The current behavior If the transformation changes the value, the cursor is moved to the end of the input. ## The expected behavior Cursor should remain at the original position if possible (this is the behaviour of the `TextInput` component in…

### CASE-1468 · why setState in useLayoutEffect forces useEffects to run before paint?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** A bug, but more likely a question. **What is the expected behavior?** I have some pretty intense computations in `useEffect`. And also some trivial animations in `useLayoutEffect`. What I expect of react is to let me paint a page based on what I specified in layout effects. Once it's done it can go on run effects. **What is the current behavior?** What actually happens is if I change state inside layoutEffect, every single effect is run, and…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1429 · Bug: Inefficient Regular Expression Complexity in react
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ### Summary A Regular Expression Denial of Service (ReDoS) vulnerability was identified in Facebook React within the react-devtools-shared package. The issue exists in the backend/utils.js component, specifically within the regular expressions used for parsing at lines 368, 369, 381, and 417. By providing a specially crafted input string to the DevTools backend, an attacker or a malicious website being inspected can trigger catastrophic backtracking. This leads to excessive CPU consumption and causes the browser tab or the DevTools process to become unresponsive, resulting in a Denial of…

### CASE-1460 · Bug: SVG foreignObject misplaced on browser zoom in React app
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome/84, safari/537, mac os x, react, webkit
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.13.1 User Agent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36` ## Steps To Reproduce 1. Hover over the red circle in the codesandbox. Notice that the Popover comes up above the circle 2. Now, use `CMD/Ctrl` + `+` to zoom the sandbox. Notice how the Popover is displaced 3.…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-1430 · Bug: react-hooks/set-state-in-effect: false-positive with ternary
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, react
- **Signals**: 👍1 💬11 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: [email], [email] ## Steps To Reproduce ```tsx function getWidth(el: HTMLElement) { return el.clientWidth; } function Component({value}: {value: string}) { const [width, setWidth] = useState(0); const ref = useRef<HTMLDivElement>(null); useEffect(() => { setWidth(ref.current ? getWidth(ref.current) : 0); // ^^^^^^^^^^^^ Avoid calling setState() directly within an effect }, [value]); return <div ref={ref}>{value}{width}</div>; } ``` Changing the line to `setWidth(getWidth(ref.current));` makes the error go away, so it seems the presence of the ternary operator is confusing the…

### CASE-1469 · Devtools scrollbars should be dark in dark mode
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, chrome 77, windows, react
- **Signals**: 👍1 💬11 · closed · labels: Component: Developer Tools/good first issue (taken)/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When Chrome Devtools are in "dark mode", all the standard panels have a dark scrollbar: ![]([link]) However, the React Devtools still show a light scrollbar: ![]([link]) **What is the expected behavior?** Scrollbars should be styled similarly to the standard panels **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** Any React version Chrome 77.0 Windows 10, version 1903. Note: How to enable dark mode: ![]([link]) ![]([link])

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-1496 · Multiple clicks needed for non-anchor element onClick with padding in Safari
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3 · **Env**: safari, mobile, desktop
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** In mobile safari and some versions of desktop safari `onClick` on any non-anchor element requires two click to trigger if * the element contains multiple comment/text nodes AND * the clicks are on the second or later text nodes AND EITHER * the element has padding AND the element is **not** set to, or natively, `display: inline` * OR the element has `display: flex` (thanks @user) It can be worked around by either * not having padding on the element OR * ensuring that the element contains only one…

