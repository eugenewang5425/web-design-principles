# Case Chunk 006 — Round 6

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1501 · Date input with defaultValue regression in 15.2
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, chrome/51, android, webview, react, desktop
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: On Chrome browser or webview on Android, an `<input type="date">` with a defaultValue specified does not show the defaultValue with react 15.2, but it works in 15.1. I've tested on multiple devices, including tablets and phones. My phone has chrome/51.0.2704.81. It works ok on Chrome desktop browser. With React 15.1: ![screenshot_20160708-194606]([link]) With React 15.2 ![screenshot_20160708-194726]([link]) Additionally, if you tap the blank date field, and select the date which is what the defaultValue was set to, it leaves the field blank and no onChange event is triggered. Test case:…

### CASE-1512 · [DevTools Bug] Cannot remove node "1052" because no matching node was found in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍13 💬10 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app Private App ### Repro steps Try to profile, get the error ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 7.0.1-3cde211b0c ### Error message (automated) Cannot remove node "1052" because no matching node was found in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:726672 at p.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:680330) at…

### CASE-1513 · Bug: Hydration issue involving __gchrome_uniqueid on iPad Chrome/Edge browser
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, chrome/, edge, safari, react, ipad
- **Signals**: 👍11 💬10 · open · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> Recreating this issue from [link] as Next team [mentioned this relates more to React's hydration behavior]([link]). React version: 19.1.0 iPad Chrome: 135.0.7049.53 iPad Edge: 134.3124.95 iPad Safari tested without issues. ## Steps To Reproduce See reproduction 1. Start development server 2. Visit development server via iPad Chrome/Edge browser app. <!-- Your bug will…

### CASE-1514 · [DevTools Bug]: Firefox devtools extension doesn't work with React 19
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, react, vite
- **Signals**: 👍17 💬10 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps I am using React 19 for my project and when I tried to access the components and profiler in Firefox. I got the following message: ``` Unsupported React version detected This version of React DevTools supports React DOM v15+ and React Native v61+. In order to use DevTools with an older version of React, you'll need to [install an older version of the extension]([link]). ``` However the same works in Chrome with Devtools version: `6.1.1 (2/7/2025)` I have provided a sample project from the vite react template where this could be reproduced (as I was…

### CASE-1515 · [DevTools Bug]: cannot double click anymore on component name to filter the tree view (in Components tab) (since v6.1.1)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app None ### Repro steps ``` const A = () => { return <div>A</div>; }; const B = () => { return ( <> <div>B</div> <C/> <D/> </> ); }; const C = () => { return <div>C</div>; }; const D = () => { return <div>D</div>; }; function App() { return ( <> <A /> <B /> </> ); } export default App; ``` 1. Open dev tools, Component tab 2. Double click on B: nothing happens ![Image]([link]) With version 6.0.1, double clicking on B filters the tree by showing only B and its direct children ![Image]([link]) Tested on Chrome and Firefox with version 6.1.1 ### How often does this bug happen?…

### CASE-1516 · [DevTools Bug] Cannot add child "301" to parent "155" because parent node was not found in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍2 💬10 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app www.github.com ### Repro steps The error was thrown at chrome-extension://gpphkfbcpidddadnkolkpfckpihlkkil/build/main.js:1:1173126 at v.emit (chrome-extension://gpphkfbcpidddadnkolkpfckpihlkkil/build/main.js:1:1140783) at chrome-extension://gpphkfbcpidddadnkolkpfckpihlkkil/build/main.js:1:1142390 at bridgeListener (chrome-extension://gpphkfbcpidddadnkolkpfckpihlkkil/build/main.js:1:1552662) ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 6.0.1-c7c68ef842 ### Error message (automated)…

### CASE-1525 · [DevTools Bug]: Devtool extension build failing in windows and ubuntu
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, ubuntu, react
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app N/A ### Repro steps Devtools extension is not building in ubuntu and windows Below is the extension build failing in ubuntu even though it says chrome extension has built ![bikid476@user ~_react-1_packages_react-devtools-extensions 8_5_2023 1_40_08 PM]([link]]/assets/72331432/24a2d4bc-5d5b-40e2-8844-b76639b5ae8e) Below is the extension failing in windows ![bikid476@user ~_react-1_packages_react-devtools-extensions 8_5_2023 1_51_08 PM]([link]]/assets/72331432/d1095bfd-772e-4e4b-a794-9cb23ceec235) It just fails with some artifact error! @user 😅 My mac has gone dead and i am…

### CASE-1527 · Bug: Form with name="location" crushes chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, chrome 114, react
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 16.*, 18.* ## Steps To Reproduce 1.Use chrome 114 version 2.Add form with name="location" to jsx 3.Open page ## The current behavior You will get Oh snap error ![image]([link]]/assets/75448378/39e86459-8cd7-4ab3-8ed8-8ab96a95229e) Code example: [link] ## The expected behavior No error

### CASE-1528 · [DevTools Bug] Cannot add node "1751" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍17 💬10 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app local repo ### Repro steps Loading a React component with the React profiler recording enabled ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.6-7f8c501f6 ### Error message (automated) Cannot add node "1751" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:28581:41 at bridge_Bridge.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:26606:22) at…

### CASE-1532 · [DevTools Bug]: Open in editor does not work on Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍4 💬10 · open · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps This happens for any local React App, but I've provided a small CRA in case any automation is done. 1. Visit the locally run app on Firefox Browser. In my case, v101.0.1 (64-bit) 2. Set up open in editor URL in settings, set up open in Editor URL. I used `"vscode://file/{path}"` 3. On the Components pane, select any element in the page 4. Click on "Open in Editor" button Actual result: Nothing happens. The link does not open in my editor Desired result: The link should open in my VSCode editor I think the reason why this is happening is because of a…

### CASE-1534 · Bug: Support ESM for the use-sync-external-store shim
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍12 💬10 · closed · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: use-sync-external-store 1.0.0, 1.1.0 ## Steps To Reproduce 1. open up chrome dev tools ```js >>> var x = await import("[link]) >>> x.useSyncExternalStore undefined ``` <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately…

### CASE-1536 · Error: "Cannot read property 'concat' of undefined"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍1 💬10 · closed · labels: Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: Describe what you were doing when the bug occurred: 1. 2. 3. --------------------------------------------- Please do not remove the text below this line --------------------------------------------- DevTools version: 4.10.1-f160547f47 Call stack: at updateTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19702:53) at getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:19574:26) at ProfilingCache_ProfilingCache.getCommitTree (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:20115:11) at CommitFlamegraphAutoSizer…

### CASE-1539 · Bug: DevTools extension component tree view crashes on empty Suspense element
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, react
- **Signals**: 👍3 💬10 · closed · labels: Type: Bug/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.13.1 (also tested with versions down to 16.9.0) DevTools extension version: 4.8.1 (Firefox), 4.8.0 (Chrome) ## Steps To Reproduce 1. Create a new app using `create-react-app` 2. Replace the contents of `App.js` with this: ```jsx import React, { Suspense } from "react"; function App() { return <Suspense></Suspense>; } export default App; ``` ## The…

### CASE-1541 · Bug: keydown Event - inconsistent behaviour
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: There is inconsistency in Event triggering. Can be observed by testing in Chrome and Firefox. In below code example: In Chrome, On button focus, when "Space" bar keypress, React triggers 1x keydown Event In Firefox, On button focus, when "Space" bar keypress, React triggers 1x keydown Event and 1x click Event [link] React version: 16.2.1 (tested) ## The current behavior Two events fired when keypress, keydown & click ## The expected behavior One event fired, when keypress, keydown React should handle this events exactly same.

### CASE-1545 · How to close the current browser window/tab in React?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 79, windows, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I want to close the current tab or window when the user clicks "Close" button. ```js onClose() { window.opener = null; window.open('', '_self'); window.close(); } ``` I tried the above code, but it's not working. My env is: ``` Windows 10 x64 Chrome 79.0.3945.88 React 16.12.0 ``` Is it supported?

### CASE-1547 · Hotkey for "Select an element in the page to inspect it" in Chrome extension
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍20 💬10 · open · labels: Type: Feature Request/Component: Developer Tools
- **Excerpt**: Reopening [link]]-devtools[ref] as I feel it'd still be a great feature to have. To reiterate, it'd be great to have a hotkey to trigger the "Select an element in the page to inspect it" functionality, similar to how `Ctrl` + `Shift` + `C` triggers Chrome's element inspector mode.

### CASE-1548 · Annoying popup from chrome devtools wrongly telling me I'm using an old version of React
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍3 💬10 · closed · labels: Type: Bug/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: I am given a rather annoying popup message ``` Unsupported React version detected This version of React DevTools supports React DOM v15+ and React Native v61+. In order to use DevTools with an older version of React, you'll need to install an older version of the extension. ``` every single time I want to use devtools. This is NOT correct. I am using React 16.8 with a standard create-react-app build.

### CASE-1553 · Memory referenced by component state is not released when unmounted
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome
- **Signals**: 👍0 💬10 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** [link] (**EDIT:** Updated with a better fiddle.) Use Chrome, open fiddle, click on the date-output a few times so that it refreshes. Each creates a new XTest-object. Use the developer-memory tab in Chrome and record a new Heap Snapshot (for fiddle.jshell.net). If you search for XTest in the snapshot you'll see 3 or so instances. Uncomment the componentWillUnmount-line and retry the same again. There will only be a single XTest allocation as expected. So it seems that references to dead component…

### CASE-1555 · Sometimes controlled email inputs break in Chrome due to punycoding
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** In Chrome, when typing a sharp S (ß, a German letter) in an input field with `type="email"`, it converts the `ß` to `ss` (~~expected~~ unexpected behaviour) and the cursor jumps back to the beginning of the input field (unexpected behaviour). This does only happen if the `ß` is part of the domain. Trying to type `test@userß.de` will end as `.detest@user`: ![Example]([link]) It can be tested with the latest Google Chrome: [link] If you don't have a `ß` on your keyboard, you can reproduce…

### CASE-1564 · Programmatically filled input does not fire onchange event
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome 61, safari 11, macos, react
- **Signals**: 👍2 💬10 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug. **What is the current behavior?** React 15.6.0 generated input *DOES NOT* fire `onchange` event when programmatically filled. ([DEMO]([link])) **What is the expected behavior?** React 15.5.4 generated input *DOES* fire `onchange` event when programmatically filled. ([DEMO]([link])) **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** - The reported bug has been tested in Chrome 61.0.3163.100 and Safari 11.0 on macOS 10.13. Both experience the bug. - The bug…

### CASE-1572 · Strange caret behaviour in text inputs on Chrome desktop
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, react, desktop
- **Signals**: 👍2 💬10 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce it** If you go to Facebook Messenger (or any web app I've found with a React input field) in Chrome and type in the string "flflflflflflfl" and try to move the caret backwards using the arrow keys you will see the problem. The caret "ignores" every other keystroke, and then jumps two places every other keystroke. Backspacing in the middle of the string also produces strange behaviour. Here is a video of the behaviour I get:…

### CASE-1573 · React unable to fully removing select in mobile browsers
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari, ios, react, mobile
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** Please refer to this fiddle: [link] The goal is that when the select does an "onChange" event, the select is removed. However an unexpected thing occurs in mobile (tested in latest iOS on latest mobile chrome and safari). When you select a value, the select is replaced by a standard button that does nothing. But once you tap on the button, the browser brings up the select menu again even though there is no select element there. If you look into the DOM, there is no select element. **What is the…

### CASE-1576 · SVG with xlinkHref breaks tab-key focus on Safari 10
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: safari 10, safari, react
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug report **What is the current behavior?** On Safari 10: Given a document with 2 `input` fields, separated by an `svg` that uses a `xlinkHref`, when focusing the first and pressing the tab key, the focus is not switched to the second input. Instead the address bar or another browser element gets focused. I am not sure if this is an issue with React or with Safari, but I could not reproduce it on Safari without using React, so I am opening this issue here. **If the current behavior is a bug, please provide the steps to reproduce and…

### CASE-1577 · IE Edge: required select boxes with value set on initial render failing validation on submit.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** bug **What is the current behavior?** In IE Edge when rendering a required select box with an initial value set, when trying to submit the form the input will fail validation saying "You must choose an item from the list". **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** 1. Visit [link] in IE Edge. 2. Try to submit form. **What is the expected behavior?** The form should be valid and submit correctly. **Which versions of…

### CASE-1581 · 1000% performance improvement for intensive react apps
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, react
- **Signals**: 👍200 💬10 · closed
- **Excerpt**: I have a real-time redux-react app that is performance critical. I have lot’s of components on the page that may update very frequently. I noticed that some of my animations were running jerkily and general component updates were lagging when lots of actions were being dispatched in a small space of time (say 40 per second). I run a Mac 10.9.5 with the latest chrome. I ran performance diagnostics using the react tools and then optimised my app as much as possible (mainly using shouldComponentUpdate), making sure no time was wasted in unnecessary DOM reconciliation or rendering. But even after…

### CASE-1586 · returning null causes this.getDOMNode() to be null in componentWillUnmount
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I have a container component something like this. ``` var Modal = React.createClass({ render: function() { return (this.props.show ? <ModalInner {...this.props} show={true} /> : null); } }); ``` In the ModalInner component there is a componentWillUnmount which I'm using to destroy the javascript/data from the node, however when props is false and it is suppose to render nothing, this.getDOMNode() is null in componentWillUnmount. The DOM node is still there if I inspect using chrome, but this reference has been lost. If I replace this with `<noscript />` instead of null then it works as…

### CASE-1588 · React broken in Safari 5.1.1
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari 5, safari, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Throws: ``` TypeError: 'undefined' is not a function (evaluating 'RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/)') ``` It appears `.bind` becomes undefined - this occurs only on apps with React, going to other websites shows `.bind` is preserved and not a Safari problem. You can reproduce this by logging into Instagram.com (page fails to render) and the React documentation examples. Instagram fails at a different line, but same problem (`.bind` is undefined)

### CASE-1594 · Bug: profiler incorrectly reports 'The parent component rendered'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, react
- **Signals**: 👍2 💬9 · closed · labels: Component: Developer Tools
- **Excerpt**: React version: 19.0.0 Devtools version: 6.1.2 (5/7/2025) Chrome: 136.0.7103.114 Windows 11 ## Steps To Reproduce 1. Go to this codesandbox link [link] 2. Specifically open the preview in a new tab at [link] otherwise react devtools won't attach 3. Enable "Highlight updates when components render" in react dev tools 4. Click the numbered button to cause a rerender <summary> Full code (click to show) <details> ```tsx import { useState, useRef } from "react"; const Count = () => { const [count, setCount] = useState(0); return <button onClick={() => setCount((c) => c + 1)}>{count}</button>; };…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1502 · TypeError using ReactCSSTransitionGroup
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: React 0.14.8 We see this in browser tests but never manually triggered, so bug is seemingly timing sensitive. ``` Uncaught TypeError: Cannot read property 'classList' of null CSSCore.js:38 CSSCore.addClass @ CSSCore.js:38 React.createClass.flushClassNameQueue @ ReactCSSTransitionGroupChild.js:116 ``` `component.isMounted()` is `true`, but in these cases `ReactDOM.findDOMNode(this)` then returns null here [link]]/blob/master/src/addons/transitions/ReactCSSTransitionGroupChild.js#L116

### CASE-1518 · [React 19] Bug : Weird behavior when changing the order of a list
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Resolution: Stale/React 19
- **Excerpt**: # Explanations : It seems to have some weird behavior introduced in the React 19 RC update. When we iterate over a list to create components and put a unique id as a key, when sorting certain elements are rerendered. Which was not the case in version 18. # The effect : ```js //In each item useEffect(() => { const doc = ref.current; if (!doc) { return; } const timeout = setTimeout(() => { doc.animate( [{ outlineColor: "#d20f39" }, { outlineColor: "transparent" }], { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)", iterations: 2, } ); }, 500); return () => { clearTimeout(timeout); }; },…

### CASE-1535 · Bug: Some transition updates haven't been rendered
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug/React 18
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.0.0 ## Steps To Reproduce 1. Write a react component with the following code: ```jsx import React, { useState, startTransition } from 'react'; export default function App() { const arr = Array(9999).fill(1); const [value, setValue] = useState(0); const handleInputChange = (e) => { console.log(e.target.value); startTransition(() => {…

### CASE-1540 · startTransition bails early
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 0.0.0-experimental-33c3af284 ## Steps To Reproduce Code Sandbox: [link] As you page through the books, you should see the snazzy pink pending indicator which is shown via the pending boolean from useTransition. If you edit one of the books (modify the title, hit save), the list will re-load, and suspend in the process (started with startTransition). Bug…

### CASE-1544 · Bug: useTransition's pending boolean is triggered immediately, even if there's no suspension
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Enhancement/Component: Concurrent Features/Resolution: Backlog
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 241c4467e ## Steps To Reproduce 1. [link] 2. Swap between the two screens by clicking the two buttons 3. Inline loading shows the first time you load screen A. But it also usually shows on subsequent loads, even though there's nothing Suspending <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than…

### CASE-1546 · useTransition - startTransition does not work on React.memo when is SimpleMemoComponent
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Needs Investigation/Component: Concurrent Features
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** useTransition - startTransition do not work on React.memo when is SimpleMemoComponent **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** **What is…

### CASE-1556 · Hooks + animations = how?
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** I doubt it's a bug, so it's either a missing feature or a request for clarification on how to use/not to use hooks. **What is the current behavior?** I'm trying to design an interactive component with animation event listeners. As highlighted by this [issue]([link]][ref]), state updates behave differently when triggered from events than from other sources. In this case I want to use requestAnimationFrame to incrementally update a value using a…

### CASE-1585 · Rework msg for: "Danger: Expected markup to render 15 nodes, but rendered 10" invariant
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Hi, This invariant message does not give great insight of what is happening. @user helped me to find out that this might be related to malformed html content used in `dangerouslySetInnerHTML` and it actually was the case. I use an "autolinker" library that transform text links into html links, and it has a bug that produces malformed HTML content (see [link]) This bug actually broke the whole UI for an user. An unperformant workaround is to parse the string before passing it to React with something like `$("<div>" + autolinkerOutput + "</div>")[0].innerHTML` It seems to me quite common in…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1503 · Number input goes into infinite loop when Chrome debugger on
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: chrome, chrome 49
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Possibly related to: [link]][ref] On Mac, Chrome 49. I have a pretty standard number input like so: `<input type='number' step='0.01' min='0' onChange={someCallback} value={value}/`> When I click the arrow in the input field to change the number, it works properly. However when I open the Chrome inspector and throw a breakpoint somewhere in my rendering flow, I get into an infinite loop where the value of the input field keeps incrementing. It's possible this may be a chrome bug as well. Stack trace showing how it's looping: ![image]([link])

### CASE-1557 · Pointer Event's aren't registering touch on iOS while using Safari and Chrome
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: safari, chrome, ios, mobile
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** I believe it's a bug. **What is the current behavior?** `onPointerDown` isn't registering when using Chrome and Safari on mobile. When viewing it as mobile within chrome's dev tools it works fine and will log `touch` for `event.pointerType` but on mobile it's unresponsive. * [Codesandbox - logs out `pointerType`]([link]) * [[link]]([link]) **What is the expected behavior?** `this.onPointerDown` should register contact other than just `mouse` events while still covering mouse events. Below is a quick gif showing the correct behavior on…

### CASE-1563 · Non-Passive event warnings when any <select> component is clicked
- **Principles**: P-A1, P-A4, P-G3, P-D4, P-F1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** A bug **What is the current behavior?** The following console warning is emitted every time a `<select>` input is clicked: `[Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive. See [link] **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template for React 16: [link] template for React 15: [link]).** The steps are: 1. In a new tab,…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1504 · <img>-elements alt-attribute should not default to "true" if used without a value
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Consider the following: ``` render: function() { return <img alt src="foo.png" /> } ``` will result in ``` <img alt="true" src="foo.png" data-reactid=".0"> ``` If `foo.png` fails to load, user will be displayed `true` instead of nothing Fiddle: [link] > **alt** > This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet > downloaded. > > > Usage note: Omitting this attribute indicates that the image is a key part of the content, but no textual…

### CASE-1508 · When returning null, <noscript /> tag is always rerendered
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug
- **Excerpt**: tl;dr: If you have a component that returns `null` and it rerenders, the noscript tag is unmounted and a new one is created because shouldUpdateReactComponent gets `<ReactEmptyComponentType />` and `null` and returns false. --- This came out of some internal components that were breaking after the most recent update. I haven't gone to see if this is more widely broken - it might have been before any of the recent updates, just that the empty component is triggering it reliably. I've been some reports of `<img>` having similar weird problems that we couldn't track down. It's use of…

### CASE-1519 · Bug: Images with `loading="lazy"` remounted with react are all loaded
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.3.1 ## Steps To Reproduce Open DevTools Network tab and check "disable cache" to see how much data is requested. 1. Render a long list of `<img>` tags with `loading="lazy"` (placed after the `src` attribute) 2. (only a few top images are loaded, you can see max few hundred kb downloaded) 3. Unrender the list 4. Render the list again 5. (all of them are…

### CASE-1520 · [DevTools Bug]: Phantom re-renders on sibling <label> components
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬10 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Start profiler 2. Input into "Component with state" 3. Both of "ComponentWithState" and "AnotherReactComponent" were re-rendered will be shown in the report but why? ![image]([link]) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1531 · [DevTools Bug]: Hook parsing failed for default Next.js configuration
- **Principles**: P-A3, P-H1 · **Env**: next.js, react
- **Signals**: 👍25 💬10 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Create an instance of the official Next.js blog starter template, e.g. `yarn create next-app --example blog-starter blog-starter` 2. Run `yarn dev` (or equivalent) inside the created project. 3. Go to the webpage (normally `[link]) and open the React devtools 4. Enable 'Always parse hook names from source' in the devtool options 5. Observe the error 'Hook parsing failed': <img width="669" alt="image" src="[link]> Note: Next.js does not allow you to change the source map format (`devtool`) setting so it's rather difficult to work around this issue.…

### CASE-1533 · Bug: Uncaught TypeError: Cannot read properties of null (reading 'match')
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: ![image]([link])

### CASE-1549 · React 16.10 broke Next.js/SSR applications
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react, next.js
- **Signals**: 👍24 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** React 16.10.0 has broken all Next.js applications (and potentially other SSR solutions). It appears you cannot `hydrate` in conjunction with a client-side `<Suspense>` component. > Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue. ![image]([link]) **CodeSandbox**: [link] **What is the expected behavior?** Not entirely sure -- I'm opening this issue to discuss. The provided example worked in React 16.9.0 (and prior releases containing…

### CASE-1550 · DevTools: Components tree is sometimes unexpectedly empty after navigation
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬10 · open · labels: Type: Bug/Component: Developer Tools/React Core Team
- **Excerpt**: 1. Open FB page 2. Open Components tab 3. Change address bar to `[link] and press Enter Expected: Components tab gets populated. Actual: <img width="783" alt="Screen Shot 2019-04-23 at 7 27 37 PM" src="[link]> ~~If I **inspect background page**, I see this:~~ (fixed by [ref]) <img width="652" alt="Screen Shot 2019-04-23 at 7 27 12 PM" src="[link]> --- Originally reported by @user via [link]

### CASE-1560 · Cannot read property 'return' of null
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬10 · closed · labels: Type: Bug
- **Excerpt**: Running into a strange issue that i cannot reproduce, it happens when running tests in Karma using `16.3.0-alpha.3` ![image]([link]) The issue is here: [link]]/blob/208b490ed907346ae3e37159535299899f74312d/packages/react-reconciler/src/ReactFiberScheduler.js#L864-L877 My test is throwing an error because of a missing `onChange` handler when rendering a checkbox with `checked` but no handler. What appears to be happening is that `nextUnitOfWork` is not `null` and misses the first branch, `replayUnitOfWork` is run, after which `nextUnitOfWork` _is_ null and `sourceFiber` doesn't exist and so…

### CASE-1578 · basic-jsx-precompile is not working
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Hi, I have downloaded the script from you mentioned starter kit. And then referred those file in index.html. ReactJS components are not rendering.I got one console error. <img width="541" alt="reactissue" src="[link]> I have referred the online link [link]]/tree/master/examples/basic-jsx-precompile I am new to reactJS. Please help me How to resolve this error? Regards, Thangavel E

### CASE-1579 · Clean up top-level event listeners after unmounting all roots
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍5 💬10 · closed · labels: Type: Feature Request/Component: DOM
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Bug - maybe intended behaviour. **What is the current behavior?** _Background_ I have an app that needs to be embedded by other apps (other customers). The idea being "our" react app has its javascript loaded in an iframe, but the "main" window hosts dom elements from the customers and our react app. That bit works fine. As time goes on "our" react UI is no longer needed, and then react root is removed, and the iframe destroyed. These apps are often long lived so there will be times when the react app needs to appear again, and the…

### CASE-1583 · Deferred componentDidMount inside Component Tree
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Feature Request/Component: DOM/Component: Component API/Resolution: Stale
- **Excerpt**: **Problem:** I have DOM Elements outside of main DOM Document, where I want to render my React components. When done, some of the original elements will be mounted into main DOM Document. I need to delay `componentDidMount` and schedule it after components are inside main DOM Document. **Reason:** Mainly because I have some logic inside `componentDidMount` that works with offsets of Element (e.g. controls lazy loading of images). When invoked in seperate DOM, component have wrong idea about where it is on screen. Is it possible with current version of React (or 0.14) to achieve behaviour,…

### CASE-1590 · Bug: React 19.2 flushSync flickers briefly
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed
- **Excerpt**: We’re seeing a **production-only flicker regression for flushSync calls in React 19.2** that does **not** occur in React 19.1. ### Demo Links * **React 19.1 (no flicker):** [[link]]([link]) [source PR]([link]) ![Image]([link]) * **React 19.2 (visible flicker):** [[link]]([link]) [source PR]([link]) ![Image]([link]) Note: performance throttling was enabled here to see flickering more clearly while resize ### What Happens The component relies on `flushSync` inside `useResizeObserver`: [[link]]([link]) On resize, we intentionally trigger synchronous layout updates using flushSync to prevent any…

### CASE-1593 · Bug: The UMD builds for react and react-dom are not building correctly
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 19.2.0 ## Steps To Reproduce 1. Clone the latest project from React Github. 2. Run `yarn` to install dependencies. 3. Run `yarn build react/index,react-dom/index --type=UMD`. <img width="1533" height="343" alt="Image" src="[link] /> <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1505 · Seal pooled events?
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: Difficulty: starter
- **Excerpt**: Kind of related to the old [ref] and [ref], anyone trying to be smart and adding properties to a pooled non-persisted event will cause those to properties to remain in the pool, causing a memory leak of sorts. Could it make sense to `Object.seal(event)` the events, that way we ensure that users can't mess with the event object in bad or unsupported ways. **Should probably do this instead:** [link]][ref][ref]

### CASE-1510 · Error: Invalid target element for this operation -- IE9
- **Principles**: P-F5, P-H3 · **Env**: opera, react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug
- **Excerpt**: ``` rendering React components at document should be able to get root component id for document node. Error: Invalid target element for this operation. rendering React components at document should be able to unmount component from document node. Error: Invalid target element for this operation. rendering React components at document should be able to switch root constructors via state. Error: Invalid target element for this operation. rendering React components at document should be able to switch root constructors. Error: Invalid target element for this operation. rendering React components…

### CASE-1538 · Bug: Memory Leak - React state in portals is not garbage collected after portal is unmounted
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬10 · closed · labels: Status: Unconfirmed
- **Excerpt**: We are seeing an issue with portals where references to React state are retained after a portal component is unmounted. This can cause nasty memory leaks if React state is holding a lot of memory. The memory does seem to get reclaimed if you render the same portal again but our app is seeing an issue where this memory is never reclaimed and it accumulates over time. I am still attempting to come up with a minimum repro case for the really bad accumulation but the minimum repro case in Codepen seems to at least show that memory is not reclaimed after unmounting. This also seems to happen only…

### CASE-1596 · [React 19] Bug: optimisticState is updated with both new state and optimisticValue in useOptimistic
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬9 · closed · labels: Resolution: Stale/React 19
- **Excerpt**: Using the react Example given for useOptimistic hook in docs, an update in state passed to the hook should directly reset the optimisticState in one render. Instead 1. It calls the updaterFn first, updates the optimisticState using new state and optimisticValue during one render cycle resets optimisticState with new State in another render cycle. 2. As a result, both the new state and optimisticValue is rendered. Tried this in 20x slowdown [link] **React version**: 19 **Steps To Reproduce** 1. Throttle CPU to 20x slowdown 2. Type some input in text box and press submit 3. See that the…

### CASE-1597 · Bug: Detached Elements Observed When Toggling Content with ReactDOM.createPortal()
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: We observed a possible memory leak when using `ReactDOM.createPortal()` to render components. The issue occurs when toggling the portal content between a `RadioGroup` and the text `Loading...`. If the `RadioGroup` is interacted with before toggling, some DOM elements are not properly cleaned up, leaving detached nodes in memory. However, if no interaction happens with the `RadioGroup`, the content toggles without any memory issues. React version: 18.3.1 ## Steps To Reproduce 1. Visit the [JSFiddle example]([link]). 2. Click on the Load Content button to render the `RadioGroup`. 3. Interact…

### CASE-1600 · Bug: onChange is not triggered when the 'input' event listener changes the target's value.
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍7 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.3.1 ## Steps To Reproduce 1. Create a root component. 2. Insert an input tag that contains an `onChange` prop. 3. Call `useRef` to get the input. 4. In a `useEffect` call, add an event listener with "input" as the listener. 5. Observe how the `onChange` prop will not be triggered. [Link to code example]([link]) [Vanilla JavaScript example]([link]) ### Current Behavior After typing some characters into the input, the `input` event listener is triggered, changing the `target.value` property. However, for some reason, the `onChange` prop is not being triggered. If we comment…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1506 · Target value sometimes undefined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: I loop my product list with map() and create a react component for each item. ``` javascript var ProductListItem = React.createClass({ handleEvent: function(e) { console.log(e.target.value); }, render: function() { return ( <tr> <th>{this.props.id}</th> <th>{this.props.name}</th> <th>{this.props.quantity}</th> <th> <button type="button" className="btn btn-default btn-sm" value={this.props.id} onClick={this.handleEvent}> <span className="glyphicon glyphicon-search" aria-hidden="true"></span> </button> </th> </tr> ); } }); ``` When I click on the button sometimes the e.target.value is defined…

### CASE-1509 · Invariant Violation: ..... This probably means the DOM was unexpectedly mutated (e.g. by the browser).
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: I'm getting a whole bunch of errors, starting with: `Danger: Discarding unexpected node: ...` ... finishing with `Uncaught Error: Invariant Violation: findComponentRoot(..., .r[129yk].[3].[0].[1].[0].[2].[1]): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g. by the browser).` By changing `React.DOM.p` (widgets/settings_login.js line 34): [link] to `React.DOM.div` this problem goes completely away. The problem is cross-browser. ## Steps to reproduce Checkout: [link] cd lostd-app/src python -m SimpleHTTPServer (Maybe you don't even need this, and it'll work…

### CASE-1529 · Bug: autoFocus cannot be used with an anchor (link)
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Render an anchor / link (`<a>` tag) with `autoFocus`. Link to code example: [link] Compare with [link] and [link] which demonstrates autofocus with a `<a>` tag in plain HTML. ## The current behavior autoFocus is ignored on `a` elements; it apparently only works on buttons, inputs, selects, and textareas. ## The expected…

### CASE-1537 · Bug: react-hooks/exhaustive-deps false positive on TypeScript generic type variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, typescript
- **Signals**: 👍8 💬10 · closed · labels: Type: Bug/Component: ESLint Rules
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.13.1 ## Steps To Reproduce 1. Use type generics in a useEffect. <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Code example: ```TypeScript function useBug<T>(): void { useEffect(() => {…

### CASE-1542 · Bug: IE11 throws error Assignment to read-only properties is not allowed in strict mode
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Browser: IE/Status: Unconfirmed
- **Excerpt**: When working in development mode in IE11 error is thrown in file react-dom.development.js line 185. Error: "Assignment to read-only properties is not allowed in strict mode" window.event is readOnly variable and IE11 is strict about it. ![image]([link]) React version: 16.13.0 In production build there is no error as this code block is not included.

### CASE-1554 · [eslint-plugin-react-hooks] invariants, conditional calls and exhaustive deps
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Component: ESLint Rules/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Not sure. Either feature to allow invariant conditional calls to hooks or bug in exhaustive deps in which case [ref] might be more appropriate. **What is the current behavior?** ```js function makeStyles(stylesObjectOrCreator) { const listenToTheme = typeof stylesObjectOrCreator === "function"; const noopTheme = {}; return function useStyles() { const theme = listenToTheme ? React.useContext(ThemeContext) : noopTheme; // ^^^ [eslint] [...] is called conditionally const styles = React.useMemo( () => { if (listenToTheme) {…

### CASE-1569 · Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** I think this is most probably is a Bug index.js:946 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in. How ever i have exported All component properly // Forms.js import React from 'react' import ReactDOM from 'react-dom'; export default class App extends React.Component{ render(){ return ( <div> <ul> <li>Home</li> </ul> {this.props.children} </div>…

### CASE-1570 · Scoping of render() under TypeScript (and maybe ES6)
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *Bug* **What is the current behavior?** This code throws `Warning: setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op.` ``` export class Test extends React.Component<any, any> { static propTypes = {}; state = {test: ''}; onChange = (event: any): void => { this.setState({test: this.state.test}); }; render() { return ( <input type='text' value={this.state.test} placeholder='test' onChange={this.onChange} /> ); } } ``` This variation does not;…

### CASE-1571 · Textarea placeholder isn't shown in IE 11 being rendered using React
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** Textarea does not display placeholder text initially. The placeholder text is only shown after focus and focus-away. Ie11 only. Works on all other browsers I believe, go figure. I believe this issue [was solved before but seems to have come back]([link]][ref]). PR that originally fixed the issue: [link]][ref] **What is the expected…

### CASE-1574 · Need way to receive and pass down all context (regardless of contextTypes/childContextTypes)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** A component can only access via this.context anything defined in childContextTypes of the parent and contextTypes of the child **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** N/A **What is the expected behavior?** Would like a way to take all the context available regardless of contextTypes and also pass down, via context, variables not defined in childContextTypes - similar to…

### CASE-1584 · "Invariant Violation: ReactMount: Two valid but unequal nodes with the same `data-reactid`"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, bootstrap
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I'm trying to display a dropdown menu composed of `ul`, `li` and `a` (similar to the one from bootstrap). A `PluginList` element is used to generate a dropdown menu from a store. But the browser is not correctly parsing/outputting the HTML. Everytime I click on an item, I got the error: `Uncaught Error: Invariant Violation: ReactMount: Two valid but unequal nodes with the same`data-reactid`: .0.0.0.0.7.1.$=15:0.0`. This bug is probably related to [ref], but I can't find any solution :sweat: I'using react 0.13.3 and I also tested with the latest master. #### HTML DOM View: ![screen shot…

### CASE-1587 · Nashorn Server Side Rendering - null is not a function in <eval> at line number 6621
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Hello to the React team ! I'm poking around ReactJS with server side rendering on Nashorn and I keep getting a very annoying problem. The whole code is here: [link] And the single JSX file is [link] The faulting code is the options in the select: ``` <div> <div> <span>Sort by</span> <select name="orderBy" onChange={this.handleOrderByChange}> /* remove option to remove this error: TypeError: null is not a function in at line number 6621 */ <option key="orderby-price" value="price">price</option> <option key="orderby-variation" value="variation">variation</option> <option key="orderby-symbol"…

### CASE-1591 · Bug: re-ordering components with stable keys invalidates refs/state, since 19.0.0
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: I've tested with 18.3.1, 19.0.0, and 19.1.1. I build a modular synth application which uses the Web Audio API. Since it's possible for synth patches to grow quite large, I memoize the ordered list of modules for the sake of having a sensible keyboard navigation order. This means that the order of rendered modules can change. Up until React 18.3.1, this changing order of rendered modules was not causing any issues. I make sure to use stable unique identifiers as keys when rendering, so components' internal state remains stable as the modules are dragged around the canvas. Here's a snippet of…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-1507 · Can we still use "owner-based" context? or do "context forwarding" ?
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A5 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: I mean we still can (in 0.13) with a warning but it will probably not be possible in the future. I use a Tooltip positionning library but it does only accept raw html strings. I want to be able to render React content inside the tooltips after the lib has positionned them (generally in <body>). It works fine with `renderStaticMarkup`. There is no parent/child relationship between the tooltipable content and the tooltip (it often causes troubles with z-index: we generally want the tooltips to overflow) My code looks like: ``` var WithTooltip = React.createClass({ componentDidMount: function()…

### CASE-1517 · [React 19] Regression when using `createPortal` with DOM element created by `dangerouslySetInnerHTML`
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍4 💬10 · closed · labels: Resolution: Stale/React 19
- **Excerpt**: In React 18, it was possible to use `createPortal` with a DOM element created by `dangerouslySetInnerHTML`. Example (adapted from [this Stack Overflow answer]([link])): ```tsx import { useCallback, useState } from "react"; import { createPortal } from "react-dom"; export default function App() { const htmlFromElsewhere = `foo <span class="portal-container"></span> bar`; return <InnerHtmlWithPortals html={htmlFromElsewhere} /> } function InnerHtmlWithPortals({ html }: { html: string }) { const [portalContainer, setPortalContainer] = useState<Element | null>(null) const refCallback =…

### CASE-1522 · [DevTools Bug]: There is a problem with the scrollbar in [link]
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps in Learn react section below there are various headings like- describing the ui ,adding intereactivity when select one of them then scrollbar appears when try to hold this scrollbar is gets hide and when hover away from this scrollbar is reapears. ![Screenshot (25)]([link]]/assets/39050816/f38c8878-ed5e-4885-a6d6-daac5d6e43a7) ![Screenshot (24)]([link]]/assets/39050816/65dff2da-11ad-403c-a353-76a932ebcbb0) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ###…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1511 · Bug: Hydration mismatch on `<script defer>` rendered inside `<head>`
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍2 💬10 · open · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 19.2.4 Any app that contains a `<script defer>`, will cause hydration errors. It is ["not recommended"]([link]) in React, but it either shouldn't cause errors or the docs should explicitly say to not use it. Possibly related to: - [link]][ref] ## Steps To Reproduce 1. Create a React app that contains a `<script src="foo" defer />` 2. Save it to an HTML…

### CASE-1521 · Bug: Using useSyncExternalStore with SSR and no getServerSnapshot results in error
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬10 · closed · labels: Resolution: Stale
- **Excerpt**: React version: 18.2.0 ## Steps To Reproduce 1. Use useSyncExternalStore and omit the third argument 2. Server render this and observe the error Link to code example: [link] ```js import {useSyncExternalStore, Suspense, createElement} from 'react' import * as ReactDOMServer from 'react-dom/server' const mediaQuery = '(max-width: 600px)' function getSnapshot() { return window.matchMedia(mediaQuery).matches } function subscribe(callback) { const mediaQueryList = window.matchMedia(mediaQuery) mediaQueryList.addEventListener('change', callback) return () => {…

### CASE-1530 · Bug: React 18 is not able to suppressHydrationWarning
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍15 💬10 · closed · labels: Resolution: Wontfix/Status: Unconfirmed/Component: Server Rendering
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. clone [link] 2. `cd` to both `shw-17` and `shw-18` directories and install with: `yarn` 3. Run `yarn dev` to run both nextjs servers on different ports. 4. Go to the one running React 17 - you should not get the hydration warning. 5. Go to the one running React 18 - you should get the hydration warning. <!-- Your bug will…

### CASE-1551 · event.stopPropagation doesnt work for components hydrated inside a content-editable div
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** Stoppropagation doesn't work in case a component is hydrated inside a content-editable div…

### CASE-1562 · Hydration warning with code splitting and server side rendering
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug maybe? **What is the current behavior?** When Server side rendering is enabled on the server side along with code splitting on the client side the app throws a warning ``` vendors.741d122c240b5639589c.js:701 Warning: Did not expect server HTML to contain a <div> in <div>. printWarning @ vendors.741d122c240b5639589c.js:701 warning @ vendors.741d122c240b5639589c.js:725 warnForDeletedHydratableElement @ vendors.741d122c240b5639589c.js:20946 didNotHydrateInstance @ vendors.741d122c240b5639589c.js:31362 deleteHydratableInstance @…

### CASE-1580 · Escaped ampersands in query params within src/href attributes
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Ampersands in query params within src/href attributes are being escaped** Currently, all attributes are sanitized for the browser using [`escapeTextContentForBrowser`]([link]]/blob/67f8524e88abbf1ac0fd86d38a0477d11fbc7b3e/src/renderers/dom/shared/escapeTextContentForBrowser.js). However, in the case of `src` or `href` attributes, this will escape `&` within query parameters. **Example** ``` js ReactDOMServer.renderToStaticMarkup(<a href="[link] />); // => <a href="[link]></a> ``` The attribute name is available until calling…

### CASE-1589 · Bug: React 19 does not attach custom element event listeners during hydration
- **Principles**: P-F4, P-F5, P-H3 · **Env**: react, next.js
- **Signals**: 👍2 💬9 · open · labels: Status: Unconfirmed
- **Excerpt**: When hydrating server-rendered markup, React does not attach event listeners for custom element events that have been configured on the custom element using the React's `on<custom event name>` prop syntax. The event handler is only attached after the first client render, not during hydration. This issue affects all React SSR frameworks like Next.js (linking a related issue from Next.js: [link] - note that the issue is on React side). React version: 19.2.3 ## Steps To Reproduce 1. Open the CodeSandbox example. 2. Click the first "Emit custom event" button. 2. Click the second "Emit custom…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1523 · Bug: Can't send ArrayBuffer to Server Action despite react.dev saying so
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍13 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Can't send ArrayBuffer to Server Action despite [react.dev]([link]) saying that you can. I'm not sure if this is an error or my part or the documentation. I retrieved the arrayBuffer from file of formData, then pass it through the parameter of the Server Action. It seems like it doesn't get sent to the server because it can't be parsed due to ArrayBuffer being serializable but not iterable. However this is somewhat confusing because you can attach File in FormData in the form of Blob and send it to the Server Action. I understand that FormData is [handled…

### CASE-1524 · Feature Request: Support the `defaultSelected` Property for Rendered `<option>` Elements
- **Principles**: P-G4, P-E3 · **Env**: vue, react
- **Signals**: 👍1 💬10 · closed · labels: Resolution: Stale
- **Excerpt**: ## The Problem The browser's _only_ reliable way of identifying default values for `select` elements is the `selected` attribute (which controls the `defaultSelected` property). And default values are very important. Particularly, they're important if you need the ability to 1) [`Reset`]([link]) a form's values or 2) Track the dirty/clean state of form fields (a very common use case in forms). Using native browser features, tracking dirty fields is possible with [pure HTML+JS]([link]) and with other frameworks like [Solid.js]([link]) and [Vue]([link]). However, [React]([link]) does not…

### CASE-1526 · Bug: unable to set value on hidden input
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍4 💬10 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.2.0 ## Steps To Reproduce 1. Create a `ref` to an uncontrolled hidden input 2. Update the value of the hidden input via the `ref` on some event (for example based on the value of another input, triggered by the `onChange` event) 3. Update the dom view via a state change 4. Get the value of the hidden input via the `ref` There seems to have been a similar situation with `react-hook-form` (which I however am not using): * [link] * [link] * [link] The error only happens when the dom view is refreshed via a state change: the new value in the hidden input does not persist a…

### CASE-1543 · Bug: hook return setter losts its effect when assign it to some obj after click its dom node in react-dev-tool
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Status: Unconfirmed
- **Excerpt**: React version: 16.12.0 ## description hook return setter to lost its effect when assign it to some obj after click its dom node in react-dev-tool. [prev closed issue]([link]][ref]) ## Steps To Reproduce 1. open react-dev-tool 2. click the dom node in the panel 3. input content at input box1 or input box2 [here is online demo]([link]) Link to code example: ```js import React, { useState, useCallback, useRef } from "react"; const fnWrapper = { setCount: () => {} }; export default function DemoCounter() { console.log("render DemoCounter"); const m = useState(0); const f = useRef(null); // this…

### CASE-1552 · Field type="email" with multiple attribute cursor jumps to start
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍5 💬10 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** While adding multiple comma separated email addresses the cursor will jump to te beginning the input field. First i thought it was a [Formik]([link]) issue, but it seems to be a React one. Example pure React: [link] Example React with Formik: [link] MDN docs: [link] **What is the expected behavior?** Cursor stays on current position. **Which versions of React, and which browser / OS are affected by this…

### CASE-1558 · Cursor jumps to end of input when onChange doesn't call setState
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬10 · closed · labels: Type: Feature Request/Component: DOM/Resolution: Stale
- **Excerpt**: [Edit]: **I'm asking for a feature**. **Current Behaviour** An input `onChange` function that returns a value equalling the prior value causes the cursor to jump to the end of the input. This is the same as [this comment from [ref]]([link]][ref][ref]) formally raised as a feature request. Repro sandbox: [link] That same code: ```javascript import React from "react"; import { render } from "react-dom"; class Input extends React.Component { state = { value: "TypeANumber" }; onChange = e => { let nextValue = e.target.value; if (/[0-9]/.test(nextValue)) { nextValue = this.state.value; }…

### CASE-1559 · Issues with ReactControlledValuePropTypes
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Feature Request
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** See below. **What is the current behavior?** 1. (Bug / Inconsistency) ```jsx <input type="radio" checked={false} /> ``` No Warning. 2. (Feature Request) ```jsx <input type="radio" checked={true} onChange={undefined} /> ``` `Warning: Failed prop type: You provided a 'checked' prop to a form field without an 'onChange' handler. This will render a read-only field. If the field should be mutable use 'defaultChecked'. Otherwise, set either 'onChange' or 'readOnly'.'` 3. (Bug?) ```jsx <select value="foo" readOnly={true}>...</select> ``` No…

### CASE-1561 · Why I can't set value for selects programatically in React? How to do it?
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Here is how I can set selects using pure JS. Plain, simple and effective: ``` <select id="mySelect"> <option value="1">1<option> <option value="2">2<option> </select> $("#mySelect").value = '1' ``` Not with React. This approach for some reason doesn't work in React. Select values are not updated. Why? How can I do in React? I have a usual DOM `<form>` with a `[reset]` button. On click `reset` the default browser behavior is to clear all form fields. Why I can't set select after it? ``` onReset(ev) { // First I update state. // And AFTER the DOM has been updated, I want to set selects…

### CASE-1565 · Feature request: Support server-side rendering of non-standard DOM attribute names (eg. AMP's [prop]="value")
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍9 💬10 · closed · labels: Type: Feature Request
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Request a feature I am working on project to build AMP page with React Server Side Rendering. I am having an issue to add custom attribute to built-in AMP element. In order to be able to use [amp-bind]([link]) we need to be able to output “bindings”, which are special attributes of the form `[attribute]`, eg. `[slide]="selectedSlide"`. ``` <amp-carousel layout={layout} height={height} width={width} [slide]={slide} > ... </amp-carousel> ``` Here is AMP carousel example that work with [amp-bind]([link]). **What is the current behavior?**…

### CASE-1566 · Bug: react-dom still contains reference to React.PropTypes
- **Principles**: P-G4, P-E3 · **Env**: react, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: React sends out a deprecation warning about using React.PropTypes, and the stack trace points to React-Dom. Because of our webpack config, im not 100% sure where it is, but here are the surrounding lines of code: See the onChange key. ```javascript var propTypes = { value: function (props, propName, componentName) { if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) { return null; } return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field…

### CASE-1567 · Controlled input allows dot
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** React allows a dot in a controlled input that doesn't allow changing the value, if the value set as a prop is a number. If it's a string the issue is not present. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** [link] In this example the first input allows a dot, even though the code doesn't allow changes. The second input doesn't allow the dot. **What is the expected behavior?** The…

### CASE-1568 · 15.5 addon bugs
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: This release has been a bit rocky. 😛 I'm keeping track of known issues to fix them up together in the next patch. - [x] Expose `unstable_batchedUpdates` on shallow renderer ([link]][ref]), needed for Enzyme ([link]) - [x] Create Fragment CommonJS entry point is messed up ([link]][ref], [link]][ref]) - [x] CRC package misses dependency on `object-assign` - [x] Some CommonJS addons inline fbjs unnecessary - [x] UMD files contain `process` shim - [x] UMD files aren't envified - [x] LinkedInput UMD is broken - [x] Release `linked-input` - [x] prop-types is missing LICENSE and PATENT file - [x]…

### CASE-1575 · onChange event not getting triggered via selenium clear()
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬10 · closed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** Possible bug **What is the current behavior?** according to selenium spec and based on issues reported the `.clear()` method triggers an DOM onChange event [spec]([link]), [issue]([link]) However, when using clear, my input onChange handler is not being triggered, in the browser I can see the input as empty **What is the expected behavior?** expect onChange handler to trigger **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** using React 15.2 - reproduced on both…

### CASE-1582 · The selected attribute for <option> tags are not rendered correctly
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: This will cause Selenium tests to fail when using getFirstSelectedOption() to find the selected item with the Java API. This seems to affect at least 0.12 and forward. This example should set the selected attribute on the selected option-tag. ``` import React from 'react'; import ReactDOM from 'react-dom'; var App = React.createClass({ getInitialState: function() { return { value: "a" }; }, onChange: function (event) { this.setState({value: event.target.value}); }, render: function () { return <div> <select value={this.state.value} onChange={this.onChange}> <option value="a">a</option>…

### CASE-1595 · [Compiler Bug]: Compiler assumes all functions returned from hooks are pure
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: Type: Bug/Status: Unconfirmed/Component: React Compiler
- **Excerpt**: ### What kind of issue is this? - [x] React Compiler core (the JS output is incorrect, or your app works incorrectly after optimization) - [ ] babel-plugin-react-compiler (build issue installing or using the Babel plugin) - [ ] eslint-plugin-react-compiler (build issue installing or using the eslint plugin) - [ ] react-compiler-healthcheck (build issue installing or using the healthcheck script) ### Link to repro [link] ### Repro steps The playground link is a **very** simplified example of a form using the [react-hook-form]([link]) library. The component is supposed to output the live value…

### CASE-1598 · [DevTools Bug]: Copy to clipboard doesn't work
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Open the devtools to the Components tab 2. Select a component. I used the first Context.Provider, but I suspect it doesn't matter. 3. In the `props` panel, click the top-right "copy to clipboard" icon. 4. Observe what gets put into the clipboard. ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string…

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-1592 · Bug: [React 19] Suspense fallback with periodic state updates causes suspense children with slow render functions to never show
- **Principles**: P-H2, P-H3 · **Env**: react
- **Signals**: 👍6 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 19.1.0 ## Steps To Reproduce 1. Go to the example project. 2. Tweak the compute iterations (simulating a slow render function) to a sufficiently large number. Link to code example: [link] Reproduced here: ``` import React, { useState, useEffect, use } from 'react'; const LOADING_UPDATE_INTERVAL = 10; // Setting this value to a large number such that…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-1599 · Bug: Inconsistent styles between client-side and server-side routing
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.2.0 This may be verging into undefined behavior, but there seems to be a slight discrepancy when it comes to applying ill-formed CSS styles to a React element. For instance, say we had the following JSX: ```tsx <div style={{ backgroundColor: "orange; font-size: 40px;", color: "blue" }}>Hello World</div> ``` When the JSX is server rendered, it produces mostly the "expected" HTML: ```html <div style="background-color:orange; font-size: 40px;;color:blue">Hello World</div> ``` However, when the JSX is rendered from client-side routing, it strips the ill-formed style from the…

