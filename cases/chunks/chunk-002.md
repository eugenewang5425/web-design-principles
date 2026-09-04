# Case Chunk 002 — Round 2

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1101 · Bug: react-devtools prints too many logs of WS failed
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍3 💬23 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: Not related ## The current behavior We're following this to set up react-devtools. > If your app is inside an iframe, a Chrome extension, React Native, or in another unusual environment, try the standalone version instead. Chrome apps are currently not inspectable. The standalone version works well, but if the standalone version is not started,…

### CASE-1104 · change event is not fired for input type=date
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome, safari, android, android 5, mobile, desktop
- **Signals**: 👍0 💬23 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: Hello, It seems like change event is not fired for input type=date in mobile Firefox on Android. Please try the following jsFiddle code for example [link] May be I'm doing something wrong? But the above code works well in Chrome, Safari and desktop Firefox but not in mobile Firefox - tested in Firefox v.37.0.1 on Android 5.1 Just in case vanilla JavaScript works well in this case [link] Thank you in advance, Andrei

### CASE-1107 · [DevTools Bug] Cannot add node "909" because a node with that id is already in the Store.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍27 💬22 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app Error ### Repro steps Cannot see ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 6.1.1-44c3d3d665 ### Error message (automated) Cannot add node "909" because a node with that id is already in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1192232 at v.emit (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1160378) at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:1:1161985…

### CASE-1110 · Devtools v4 does not work with Firefox's private window
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, react
- **Signals**: 👍25 💬22 · open · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** * bug * This issue has been reported in [link]]-devtools[ref] **What is the current behavior?** Steps to Reproduce is here: 1. Environments are: 2. Open the page which uses react with a private window. 3. Open Firefox's devtools. Actual Result is: * react devtools' _component_ pane show `Unable to find React on the page.` * From about:debugging, we can see the below messsage: ``` SecurityError: Permission denied to access property "container"…

### CASE-1114 · Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail.null after updating to React 16
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍5 💬22 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Page load throws console error: `Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail.null` ``` // Chrome console 6VM598:27 Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail.null window.console.error @ VM598:27 printWarning @ warning.js:36 warning @ warning.js:60 mountIndeterminateComponent @ react-dom.development.js:10488 beginWork @ react-dom.development.js:10647 performUnitOfWork @…

### CASE-1119 · Bug: <img/> renders twice in firefox with react 18
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, react
- **Signals**: 👍21 💬21 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2.0 ## Steps To Reproduce 1. Insert a tag `<img/>` with src 2. Go to **Firefox** inspect tool to the tab network 3. Reload the page and watch image request in network <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately…

### CASE-1123 · Re-enable context menu options in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍1 💬21 · closed · labels: Component: Developer Tools
- **Excerpt**: [ref] disabled support for "copy to clipboard" and "go to definition" context menu items in Firefox. Use cases - [x] copy to clipboard ([ref]) - [x] jump to element node (blocked by Firefox bugs [1605597]([link]), [1609671]([link]), [1609677]([link])) - [x] jump to function definition (blocked by Firefox bugs [1605597]([link]), [1609671]([link]), [1609677]([link]))

### CASE-1125 · Regression: setValueForStyles throws in Chrome 74 and Firefox 66.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 74, firefox 66, opera, chrome, react
- **Signals**: 👍6 💬21 · closed · labels: Component: DOM
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> CSS standards have changed, meaning that CSSStyleDeclaration's indexer property does not have a setter. This leads to a script error in setValueForStyles around [link]]/blob/21d5f7d32d5becf5c8e986ff0202059be643dc15/packages/react-dom/src/shared/CSSPropertyOperations.js#L82. This was reported to Chrome as [link] and resolved as by-design. Note: This issue is effectively a duplicate of [ref], but I don't think I have permission to reopen that issue to provide more information. REPRO 1: Visit [link]…

### CASE-1128 · Clear button on iOS date input does not return correct event value
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, chrome/, ios, android, ios 10, react
- **Signals**: 👍5 💬21 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Bug** For iOS only. When pressing `clear` on a date input, the `onChange` event is fired but` event.target.value` is showing the original value rather than an empty string. **What is the current behavior?** On Chrome and Android, when the clear button is pressed the onChange event has a value of `''`. On iOS when the clear button is pressed the onChange event has a value of `previousValue`. **Demo** [link] Try on Chrome/Android. Then on iOS. **What is the expected behavior?** Value should be returned an an empty string. **Versions** Affects React 15+ & iOS 10. Unsure of previous versions.

### CASE-1132 · [DevTools Bug]: Components + Profile tabs not showing up in Chrome 99
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 99, chrome
- **Signals**: 👍0 💬20 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Open up Chrome inspector 2. Expect Components + Profile tabs to appear Computer: 2019 MacBook Pro (Intel) Browser: Google Chrome Version 99.0.4844.51 (Official Build) (x86_64) DevTools: 4.24.0 (3/10/2022) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1134 · Edge 18 & IE 11 server mismatch with SVG icons
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge 18, react
- **Signals**: 👍27 💬20 · open · labels: Component: Server Rendering/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** React raises a warning: ![Capture d’écran 2019-03-22 à 00 40 00]([link]) [link] ```jsx import React from "react"; export default () => ( <div> 2 <svg> <path d="M0 0h24v24H0z" /> </svg> </div> ); ``` **What is the expected behavior?** No warning **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** React: 16.8.4 Browser: Edge 18

### CASE-1136 · React 15.6.2 Umbrella
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, safari/, react
- **Signals**: 👍2 💬20 · closed · labels: Type: Release
- **Excerpt**: This is an umbrella issue for fixes that need to be included in the next 15.6 patch release, which should be 15.6.2. ## Commits - [x] [link]][ref] - ChangeEventPlugin.js IE detection is broken on Chrome/Safari/FF etc (PR [link]][ref]) - [ ] No error when element with ref created in another elements constructor in dev environment. (PR [link]][ref]) [link]][ref] - [x] Treat columns property as a unitless number [ref] - [x] move augmentClass definition above SyntheticEvent Proxy replacement [ref] - [x] Use a closure to bind argument to callback in ReactErrorUtils [ref] - [x] Fix uncontrolled…

### CASE-1142 · onClick on mobile not fired
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, android, mobile, desktop
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: I have put together a test case that replicates the issue: [link] On desktop browsers the click handler is triggered correctly, the same code on iOS mobile devices (tested both on simulator and actual devices) does not fire the event. Works fine on android.

### CASE-1143 · Bug: Quickly selecting checkboxes on iOS doesn't work correctly
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3, P-G4, P-E3 · **Env**: safari, chrome, ios, react
- **Signals**: 👍5 💬19 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.0.0 and 17.0.2 ## Steps To Reproduce 1. Open [link] (React 18) in a device running iOS in Safari / Chrome. 2. Quickly tap one checkbox followed by another one. 3. Notice that if you quickly select one checkbox followed by another one, it checks / unchecks the previous checkbox you were on on. Link to code example: React 18.0.0 [Sandbox]([link]), [Preview]([link]) React 17.0.2 [Sandbox]([link]), [Preview]([link]) React 16.4.0 [Sandbox]([link]), [Preview]([link]) ## The current behavior There appears to be some sort of race condition where tapping on a controlled /…

### CASE-1145 · Bug: `textarea` inputs in Safari stop accepting input on certain empty lines
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: safari, macos, react
- **Signals**: 👍7 💬19 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: This is a strange one that I honestly couldn't believe wasn't caused by our app, but it turns out I can reproduce it in a minimal fresh React app as well: if you have a `<textarea>` input and you select and delete any line other than the first, second, or last, you cannot type in that input anymore until you leave and refocus it. This is only reproducible in Safari. React version: 18.2.0 Safari version: 17.3 MacOS version: Sonoma 14.3 ## Steps To Reproduce 1. Render a `<textarea>` with four or more lines of initial content 2. Select a line other than the first, second, or last 3. Delete that…

### CASE-1147 · [DevTools Bug] Cannot remove node "XX" because no matching node was found in the Store.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 108, chrome, windows
- **Signals**: 👍35 💬19 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Using next 12.3 and windows 10 chrome 108.0.5359.99 (Official Build) (64-bit) - Open the inspector - Navigate to the components tab. Open it a few times until it displays something. (blank screen issue already logged [ref] ) - eventually it will display the component tree, but after one scroll, it fails with this error: ![image]([link]) Uncaught Error: Cannot remove node "1946" because no matching node was found in the Store. Dismiss The error was thrown at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:27994:43 at…

### CASE-1150 · Bug: React 17.0.0-rc.1 checkboxes and radio groups sometimes fire onChange incorrectly
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, ios, macos, react
- **Signals**: 👍0 💬19 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.0-rc.1 ## Steps To Reproduce 1. Open [link] The issue seems most easily reproducible in iOS Safari, although we were also able to reproduce in Firefox on macOS. 2. Quickly tap or click one checkbox or radio followed by another one. 3. Notice that sometimes the first checkbox is unchecked rather than the second checkbox you tapped on becoming checked.…

### CASE-1151 · Bug: React DevTools throws ReferenceError: regeneratorRuntime is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, webpack
- **Signals**: 👍0 💬19 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: React version: 16.3.1 ## Steps To Reproduce 1. In the Chrome script debugger, enable "Pause on caught exceptions" 2. Open React DevTools in a app that doesn't use babel or webpack 3. ReferenceError: regeneratorRuntime is not defined ## The current behavior ``` ReferenceError: regeneratorRuntime is not defined ``` The source of this error seems to be something like this: ``` try { // add if support for Symbol.iterator is present __webpack_require__(23)(Yallist); } catch (er) {} ``` From `chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js` ## The expected…

### CASE-1156 · eslint-plugin-react-hooks should report errors inside unnamed functions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍1 💬19 · open · labels: Type: Feature Request/Component: Hooks
- **Excerpt**: I want to report a bug for the hooks plugin. **What is the current behavior?** There was no error report after running eslint, but the component failed when running in the browser. From the chrome dev console it reported "Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement." **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Here is a link to the github…

### CASE-1165 · React Dev Tools doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: I have a project based on React JS in the localhost and React Dev Tools doesn't work. I tried all steps from troubleshooting and it didn't help. I am using Chrome Version 116.0.5845.140 ![Screenshot 2023-09-05 at 20 35 01]([link]]/assets/98823823/ccd4140b-6b66-40a6-9ada-d08a09365c02)

### CASE-1172 · React Devtools perf issue with 16.7.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍2 💬18 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When using a component that creates new Date objects inside an interval while having the Devtools extension open, the performance are really slow. With React 16.4.1, I don't have the same issue so it might be related to the Profiler tab (even if it also happen when being on the Elements tab). **Reproduction:** 16.7.0 version with performance issues: [link] 16.4.1 version without perf issues: [link] Open the devtools on the standalone page ([link]) while watching the Chrome task manager and you will…

### CASE-1173 · IE 11 "prompt to remember password" regression bug since 15.2.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬18 · closed · labels: Browser: IE/Component: DOM/Type: Regression/Type: Needs Investigation
- **Excerpt**: ## Note: this issue seems solved for Edge but not for IE 11, see [link]][ref][ref] This issue was [already raised]([link]][ref]), but since it was closed, I'm opening a new one so we can get more traction on this. I'm still having this issue with both IE and Edge: Works with 15.1.0: [link] Doesn't work with 15.2.0: [link] Doesn't work with 15.6.2: [link] Doesn't work with 16.3.1: [link] In order to test this effectively, you have to follow a few steps: ### Using Edge, go to **Settings** >> **View Advanced Settings**, under **Privacy and Services** - make sure you have **Offer to save…

### CASE-1174 · Possible regression in dev mode in v16.3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, vite
- **Signals**: 👍0 💬18 · closed · labels: Type: Regression/Type: Needs Investigation
- **Excerpt**: [This example]([link]) presents a huge performance drop between React 16.2 and React 16.3. In investigated it and noticed several things: - Perfomance drop is only visible using development bundle - This is not related to styled-components (a simple div presents the same problem) - I tried to investigate in performance tab of Chrome dev tools and I noticed that I get React measures even without "?react_perf" - React Tree Reconciliation seems very long, do not know why It is not a big problem for me, but it looks weird, so I decided to [share it on Twitter]([link]), then @user [invited me to…

### CASE-1184 · [DevTools Bug]: shows "This page doesn't appear to be using React" for every react website on Firefox 115.0.2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 115, windows, react
- **Signals**: 👍0 💬17 · open · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app all of them and also localhost. [link] for example ### Repro steps 1. open any website made with React 2. Click on the extension icon OS: Windows 10 Browser: Firefox 115.0.2 (64-bit) DevTools: 4.27.8 ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1188 · [DevTools Bug]: Chrome extension's settings reset after every reload
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, chrome 95
- **Signals**: 👍1 💬17 · open · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app Chrome 95.0.4638.69 (Official Build) (64-bit), DevTools version 4.21.0-2f8f60ca8 ### Repro steps 1. Open Chrome dev tools 2. Switch to Components or Profiler tab 3. Select settings and change for example "Highlight updates when components render." 4. Reload window 5. Get back to settings - checbox is not checked. Expected behavior is to preserve settings forever (local storage?) or at least between reloads. ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message…

### CASE-1190 · Bug: setState updater called but not rendered, in Safari, in concurrent mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, firefox, react, mobile
- **Signals**: 👍0 💬17 · closed · labels: Type: Bug/Browser: Safari/React 18
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.0.0-alpha-9175f4d15-20210928 ## Steps To Reproduce Minimal reproduction in [this codesandbox]([link]). This issue only appears in Safari, including mobile Safari. It works fine in Chrome and Firefox. In order to reproduce, you'll need to: 0. Render the app with `createRoot` in the latest 18.0 alpha 1. Within an element's `ref` function, append an…

### CASE-1192 · Bug: React onMouseEnter, onMouseOver and onMouseLeave not firing as expected (Chrome)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍5 💬17 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React is not firing onMouseLeave, onMouseOver, onMouseEnter events on images.(Chrome) React version: 17.0.1 Code example: ![carbon]([link]) ## The current behavior Only changing the state when clicked ## The expected behavior Changing the state when hovered

### CASE-1196 · Bug: React Developer Tools conflicts with Firefox sass sourcemaps on webpack
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, firefox 2, react, webpack
- **Signals**: 👍0 💬17 · closed · labels: Status: Unconfirmed/Resolution: Needs More Information
- **Excerpt**: The React Developer Tools add-on conflicts with Firefox source maps displaying just `inline` for all sass partials, works on Google Chrome. When the add-on is disabled it all works fine again. React version: 16.13.0 Firefox version: 74 ## Steps To Reproduce 1. Use `style-loader`, `css-loader` and `sass-loader` with the add-on enabled on Firefox 2. Open Firefox Inspector, the source maps file name displays `inline` ``` module: { rules: [ { test: /\.scss$/, include, use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] } ] } ``` ## The current behavior It displays `inline:` for…

### CASE-1197 · Devtools tabs should not appear in chrome-extension pages when using react-devtools as an entry point
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍0 💬17 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The React devtools tabs in Chrome devtools can be displayed in extension pages, even though modifying extensions in other extensions is not supported by Chrome, and React devtools are therefore broken. ![image]([link]) ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1102 · setState hook inside useEffect can cause unavoidable warning Can't perform a React state update
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍5 💬23 · closed · labels: Type: Question
- **Excerpt**: **BUG** **What is the current behavior?** Example: [link] clicking on OK button cause `Warning: Can't perform a React state update on an unmounted component.` The problem that unsubscribe is called during B event `setVisible(v => false);` call, see logs: ``` SET VISIBLE BEFORE UNSUBSCRIBE Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in Child (created by Holder) SET VISIBLE AFTER ``` In our case we have this even…

### CASE-1111 · Memory leak on React > 16.2.5
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍19 💬22 · closed · labels: Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Possible bug, or unexpected change in internal behavior **What is the current behavior?** We are seeing a substantial memory leak in our codebase in versions of React > 16.5.2. Bisecting the issue, it seemed to appear at commit 7bee9fbdd49aa5b9365a94b0ddf6db04bc1bf51c. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your…

### CASE-1113 · React16 dev memory leak on render with event listeners
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍5 💬22 · closed · labels: Resolution: Needs More Information
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Using React16 dev, it appears around 8 event listeners are added every time a component is rerendered. They occasionally get garbage collected, but if you're listening to events that happen a lot (scroll, fast typing, etc) it can slow down and kill the tab you're using. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get…

### CASE-1126 · unmount an empty component is breaking with ReactDOM portals
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬21 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When unmounting a component that has a child being rendered under a different parent (with portals), react is throwing an error **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem:** [link] **What is the expected behavior?** Component should unmount normally **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** 16.8.1 Issue also happens with 16.7.0 ([link]) The…

### CASE-1141 · Triggering events on real DOM nodes doesn't trigger synthetic events
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: From Twitter: [link] When using PhantomJS for testing browser interaction, often times what seems to happen is that values get changed directly on the DOM elements and then the 'change' event is triggered on the element. Because of this, interacting with ReactJS elements through PhantomJS and through jQuery doesn't work for some interactive elements like `<input>` and `<select>`. Of course, the easiest solution is to take the real elements that are mounted and attach event listeners to them like `$(this.MyRef.getDOMNode()).on(EVENT, CALLBACK)`, but it isn't the most pleasant experience. Is…

### CASE-1149 · Bug: useEffect Timing changes depending on if Portal was rendered
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍19 💬19 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: This is a weird one. Basically, if you add an event listener to the document in an effect that was triggered by an event. e.g. `click` toggles some state, which triggers an effect, which adds a `click` handler to the document. In the normal case the new event handler will "miss" the triggering event, e.g. the added click handler won't respond to the click event that triggered it being added (omg). HOWEVER, if you render a portal first, the timing changes slightly and the added event handler will see the current event. React version: 17 ## Steps To Reproduce [link] 1. Click the "show Message"…

### CASE-1153 · Memory Leak - React DOM keeps references to stale child components when using the Container/Pure component pattern
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍26 💬19 · closed
- **Excerpt**: **Do you want to request a feature or report a bug?** Report a bug. **What is the current behavior?** ReactDOM keeps references to previous states/props/children when component gets updated. All in all consuming three times as much memory as it really needed. We are seeing this as a significant issue when using Redux and container components. When our container componet(that is connected to redux store) passes props to the child components, and then the redux store updates. The child component props are being stranded in the dom with old reference(seen in the heap after forcing a garbage…

### CASE-1170 · useDeferredValue does not abort running reconcile work for stale value
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍11 💬18 · closed · labels: Type: Bug/Component: Concurrent Features
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** **bug** **What is the current behavior?** When useDeferredValue value is updated while the previous reconcile work is still running, The previous reconcile work is not aborted, and the new work is queued after it. **repro:** Based on useDeferredValue example, [link] For better reproducibility i've made it to run longer using using `timeoutMs: 30000` + `while (performance.now() - now < 100) {` ) and i've added an indicator value: `Time since…

### CASE-1179 · Bind DOM event handlers to the component instance
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: `[email]-x` gives us possibility to use JavaScript prototype based inheritance instead of using `React.createClass` method. The only problem that it brings is the need to explicitly bind DOM event handlers to the component, since React's autobinding works only for classes declared with `createClass`. At the same time it looks weird. Even if native DOM event listeners work in the same manner, I don't think, that it is a good example to follow. Please notice, native DOM APIs were introduced "thousands years ago" :) Don't get me wrong, but I don't see any usecases where event handler should be…

### CASE-1191 · Bug: Radio/Checkbox inputs not triggered when setting state in listener on a parent element
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬17 · open · labels: Type: Bug/Component: DOM/Status: Unconfirmed
- **Excerpt**: Hello I wanted to highlight a div after clicking on it (and hide the highlight after clicking anywhere else). So in componentDidMount, I added two event listeners (on the div and on the window object). The problem is kind of wild: when I use setState in a listener added in componentDidMount, radio buttons are not triggered. When the listener does not use setState or uses setTimeout(() => this.setState(...), 0), radio buttons works expectedly. When creating a code example, I also tried checkboxes, and they do not work as well. BUT, for example, button inputs work expectedly. React version:…

### CASE-1194 · Bug: ...TypeError: destroy is not a function...from commitHookEffectListUnmount()
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Needs Investigation
- **Excerpt**: This error pops up whenever I save to refresh (fast refresh)...it goes away when I make a different change only to re-appear in the next other change. appear-disappear-appear... ```sh Unhandled Runtime Error TypeError: destroy is not a function Call Stack commitHookEffectListUnmount node_modules/react-dom/cjs/react-dom.development.js (19710:0) commitPassiveHookEffects /_next/static/chunks/main.js (40064:11) HTMLUnknownElement.callCallback node_modules/react-dom/cjs/react-dom.development.js (188:0) Object.invokeGuardedCallbackDev /_next/static/chunks/main.js (20533:16) invokeGuardedCallback…

### CASE-1200 · [Umbrella] Memory Leaks
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍39 💬17 · open · labels: React Core Team
- **Excerpt**: This issue is a summary of issues mentioned in [link]][ref]. There are many different ways to create memory leaks with React since we give you access to the imperative power to do so. Most should be dealt with by clean up / unmount functions. Some could be pure React bugs. Some could be related to the lack of clean up of render phase effects. Others could be related to leaks that exists but the way React works makes them larger than they otherwise would've. # Resolved - [x] Land [link]][ref] What patterns are actually covered? It can cut down on a potentially larger leak but is that the whole…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1103 · No blur event fired when button is disabled/removed
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍15 💬23 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** When a focussed button becomes disabled, React does not dispatch a blur event. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** 1. Attach a blur event to a button 2. Focus the button 3. Make the button disabled or remove it from the DOM **What is the expected behavior?** A blur event will be dispatched. **Which versions of React, and which browser / OS are affected by this issue? Did…

### CASE-1105 · Error: Invariant Violation: ReactMount: Two valid but unequal nodes with the same `data-reactid`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬23 · closed · labels: Type: Bug
- **Excerpt**: **TL;DR fix** [Load `polymer.js first]([link]][ref][ref]) --- Probably related to [ref] When a `select` or `input[type="checkbox"]` is rendered inside an unwrapped Polymer element's child node, the following error is thrown: ``` Error: Invariant Violation: ReactMount: Two valid but unequal nodes with the same `data-reactid` ``` I would imagine that radio buttons, etc. would also throw. I am not sure if this is an actual bug or a limitation of React and the ShadowDOM/Polymer. But the error message is... not exactly helpful in determining what to do. I wrote a simple JSBin that demonstrates the…

### CASE-1108 · Bug: autoFocus broken inside <dialog />
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍46 💬22 · open · labels: Type: Bug
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17 and 18.0.0-rc.0-next-27b569969-20220211 ## Steps To Reproduce 1. render `<input /><input autoFocus />` inside `<dialog />` 2. execute the `showModal()` method of the dialog 3. you will notice that react will not set focus to the correct input element ![DialogAutoFocus]([link]) <!-- Your bug will get fixed much faster if we can run your code and it…

### CASE-1117 · Invariant Violation: setEnabled(), was asked to report immediately.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: I'm trying out the testUtils and some things are breaking. On node `0.11.12`: **STDOUT:** ``` ~/Code/tests ❯ mocha test ․․ 1 passing (125ms) 1 failing 1) test our tests should render a label: Error: Invariant Violation: setEnabled(...): Cannot toggle event listening in a Worker thread. This is likely a bug in the framework. Please report immediately. at invariant (/home/yoshua/Code/tests/node_modules/react/lib/invariant.js:52:19) at Object.merge.setEnabled (/home/yoshua/Code/tests/node_modules/react/lib/ReactEventEmitter.js:206:46) at ReactReconcileTransaction.EVENT_SUPPRESSION.initialize…

### CASE-1129 · Invoking renderToStaticMarkup in render() causes refs to break
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬21 · closed · labels: Type: Bug/Component: Core Utilities
- **Excerpt**: Demonstrated at [link] open the error console and you should see this: ``` Uncaught Error: Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref. ``` --- ``` js var Bug = React.createClass({ render: function() { var html = React.renderToStaticMarkup(React.DOM.img()); return React.DOM.div({ ref: 'ref' }, html); } });…

### CASE-1135 · [lerna] Invariant Violation: Hooks can only be called inside the body of a function component.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍14 💬20 · closed
- **Excerpt**: Hello, I have an error regarding hooks in a lerna architecture project where we import a ux lib made of style component inside a react project. If component are host in the same app, error is not thrown. **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** An error is thrown: ``` Invariant Violation: Hooks can only be called inside the body of a function component. ([link]) at invariant ([link]) at resolveDispatcher ([link]) at useRef ([link]) at useStateWithGetter ([link]) at useField ([link]) at [link] at renderWithHooks ([link]) at…

### CASE-1140 · Multiple React instances per DOM (when using AMD for example)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: When using AMD, a component might use React as a dependency. This poses a problem when another instance of React has already manipulated the DOM. The wrong events get fired, or ID collisions occur (_Invariant Violation: ReactMount: Two valid but unequal nodes with the same `data-reactid`: .0_). jsbin here: [link] SO here for internet points: [link] Google Group post here: [link]

### CASE-1152 · Bug: Unexpected warning in react-hooks/exhaustive-deps using optional chaining operator
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, react
- **Signals**: 👍9 💬19 · closed · labels: Type: Bug/Component: ESLint Rules
- **Excerpt**: When the optional chaining operator (`?.`) is used inside a hook **and the variable is already listed in the dependencies** `eslint-plugin-react-hooks` reports an unexpected "missing dependency" warning. Replacing `?.` with `.` produces the expected behaviour: the warning is no longer reported. I would expect that the optional chaining operator (`?.`) be handled as normal property access (`.`) **in the context of this validation**. React version: 16.13.1 eslint-plugin-react-hooks version: 4.0.2 ## Steps To Reproduce Notice that `foo` is both referenced inside the code in `useEffect` and is…

### CASE-1157 · findDOMNode() throws inside Suspense
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍7 💬19 · closed · labels: Type: Bug/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I have a component which listens for resize events (via a BlueprintJS ResizeSensor). When loading a component dynamically with `lazy` / `Suspense`, an exception occurs as the resize sensor appears to be unmounted: ``` Uncaught Error: Unable to find node on an unmounted component. at invariant (29.chunk.js:86295) at findCurrentFiberUsingSlowPath (29.chunk.js:90628) at findCurrentHostFiber (29.chunk.js:90640)…

### CASE-1166 · Strict effects can break focus restoration
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬18 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: This isn't necessarily a bug in React's implementation, but a symptom caused by strict effects. It is pretty common to need to restore focus to another element when a component unmounts. For example, a dialog component would need to restore focus to the element that opened it for proper keyboard accessibility. When StrictMode is enabled, components are "mounted" twice such that their effects and cleanup functions are executed, but the component isn't actually removed from the DOM in this process. If a component moves focus in its effect cleanup function, this has user visible consequences and…

### CASE-1171 · useEffect: separate refreshing dependencies from running effect
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Looking for a clarification. --- `useEffect` assumes a connection between a change in dependencies and the effect running. Following the exhaustive dependencies rule, I'm running into quite a few cases where I'm stuck in a confusing middle space. For example: ``` useEffect(() => { if (thisCommentId === focusedCommentId && isCommentCollapsed) setIsCommentCollapsed(false) }, [focusedCommentId, thisCommentId, isCommentCollapsed, setIsCommentCollapsed]) ``` The idea here: a comment is specified as "focused" in some higher-level state, when…

### CASE-1180 · noscript contents cause invariant violation
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: When using server rendering, putting an `<img>` in a `<noscript>` seems to invariably cause an invariant violation (it can't find the image). I believe this is because, to the JS enabled browser, the noscript content looks like CDATA. This can be worked around by using `dangerouslySetInnerHTML` to actually set the contents to an HTML string, however, you can't nest components with this approach.

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1106 · Iframe's reinitialise when moving down within a group of components
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed · labels: Type: Bug/Component: DOM/Resolution: Unsolved
- **Excerpt**: When moving a component with an iframe down within a group of components it reinitialises the iframe. The iframe only reinitialises when moving down, moving upward seems to work fine. Example: [link]

### CASE-1122 · Bug: Cannot read property 'isCollapsed' of undefined/Some Components Missing in DevTools/Blank tab
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬21 · closed · labels: Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: I cannot view all of my components in the Components tab. Sometimes none. It has been occurring all morning and I do not know how to rectify this. I cannot search for the components by name either. It is not there. When I was attempting to highlight a component to see its props value, I got the below message after clicking on it to see if that would help as nothing was showing. ![image]([link]) React version: ## Steps To Reproduce 1. Start React App. 2. Open Dev Tools. 3. Go on Components tab. 4. Click on Component that is not displayed in dev tools Component tab. 5. Error message from above.…

### CASE-1124 · Unable to eliminate 'Each child in a list should have a unique "key" prop' warning.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍11 💬21 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature / Bug **What is the current behavior?** I am use Lists(Material-UI components) render nav. But 'Each child in a list should have a unique "key" prop' warning always appears. ![image]([link]) I am pretty sure that the key attribute has been added for List and ListItem under each map, and the value is unique. This is code: ``` import React from 'react'; import { List, ListItem, ListItemText } from '@user/core'; const data = [ { id: '1', caption: 'Index', }, { id: '2', caption: 'About', }, ... ]; class BWKNav extends…

### CASE-1131 · Bug: iframe `src` attribute set incorrectly in jsx
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬20 · closed · labels: Status: Unconfirmed
- **Excerpt**: My MWE is a very simple iframe: ```jsx <iframe src="[link]></iframe> ``` This works just fine (full `iframe` code below). If I wrap the `src` attribute's value in curly braces (code below), I get the following: ```jsx <iframe src={"[link]></iframe> ``` ![image]([link]) ![image]([link]) The actual `iframe` content is [an embedded Powerpoint presentation]([link]): ```jsx <iframe src="[link] width="476px" height="288px" frameBorder="0"> </iframe> ``` React version: ## Steps To Reproduce 1. Open [this Stackblitz]([link]). You should not be able to see the embedded Powerpoint content, but the…

### CASE-1133 · Bug: [eslint-plugin-react-hooks] - exhaustive-deps autofix not working after 2.4.0
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍13 💬20 · closed · labels: Status: Unconfirmed
- **Excerpt**: Hi there, after upgrading to the latest version the autofix does not automatically includes the missing deps, is this the expected behavior? I didn't find any release notes of the lib so I couldn't check if that was expected, also, I'd say, if done on purpose, this change should be on a major version, shouldn't it? ## The current behavior 2.4.0 or above Some deps are missing. ![image]([link]) Quick fix shows: ![image]([link]) `eslint --fix` shows: ![image]([link]) But code is not being updated, although if I manually click it add the missing deps. ## Expected behavior, 2.3.0 Noticed it shows…

### CASE-1144 · [React 19] Upgrading React causes infinite refetching
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍18 💬19 · open · labels: React 19
- **Excerpt**: ## Summary The reproduction is using Relay, but I came as this seems closer to a bug in React than Relay. [link] With this basic setup, using `useLazyLoadQuery` with `network-only` to make a new `fetch()` call on render. The code works fine in v18, but after upgrading to v19, it starts remounting an element infinitely. - [React v18]([link]): No issues - [React v19]([link]): No differences, but the children including the suspense boundary is unexpectedly unmounted, resulting in an infinite refetch loop. - [React v19 workaround 1]([link]): Removing `<StrictMode>` seems to solve the issue. -…

### CASE-1148 · Bug: "The above error…" should appear after the error message but appears before (for some errors)
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍8 💬19 · open · labels: Type: Bug/Size: Medium
- **Excerpt**: React version: both latest (17.0.2) and next (18.0.0-alpha-9c8161ba8-20211028) ## Steps To Reproduce 1. Render `<input>hello</input>` to trigger the "input is a void element tag" error Link to code example: [link] ## The current behavior Two log lines appear: 1. "The above error occurred in the \<input> component" 2. "input is a void element tag" ![image]([link]) ## The expected behavior They should be in the other order: 1. "input is a void element tag" 2. "The above error occurred in the \<input> component" This problem doesn't occur in the same way if a component throws an error.…

### CASE-1154 · [React DevTools] Bug: Cannot update a component from inside the function body of a different component.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬19 · closed · labels: Status: Unconfirmed
- **Excerpt**: After updating React to 16.13, I am receiving this error, which is pretty cryptic and only occurs on that update (16.12 works fine) <img width="639" alt="Screen Shot 2020-02-27 at 5 07 33 PM" src="[link]> Demo can be found here: [link]

### CASE-1163 · Bug: unexpected Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`.
- **Principles**: P-A3, P-H1 · **Env**: react, typescript
- **Signals**: 👍4 💬18 · closed · labels: Resolution: Support Redirect
- **Excerpt**: I didn't use `act` in `react-dom/test-utils` but I got the following warning : Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See [link] for more info. React version:18.3.1 ## Steps To Reproduce 1.run `npx create-react-app test --template typescript` 2.run `cd test` 3.run `npm run test` 4.press `a` <img width="935" alt="image" src="[link]]/assets/90126412/be7dc826-3ac3-4717-9bc7-61a04091c70d">

### CASE-1164 · After react devtools version 5.0, when you click Open in editor, you cannot jump to the line of the file corresponding to vscode
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬18 · closed · labels: Resolution: Stale
- **Excerpt**: ![image]([link]]/assets/24632656/7fcee041-8881-4bc1-b645-d96861c7c002)

### CASE-1168 · Bug: Detached DOM nodes exist when component is unmounted
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬18 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: I've written a simple React APP which contains 2 buttons, one is to increase the count number trigger the child component to create a table element with some random numbers, another is to toggle mount/unmount status of the child component. I found that just a simply mount the component then unmount it which leaves detached DOM nodes in memory profiling. Following below steps: 1. Click regen button 2. Click toggle button ![image]([link]) but if I mount and unmount the component again by adding 3, 4 steps below: 1. Click regen button 2. Click toggle button 3. Click toggle button 4. Click toggle…

### CASE-1169 · Bug: Horrifying performance in React experimental
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬18 · closed · labels: Status: Unconfirmed
- **Excerpt**: React version: 0.0.0-experimental-33c3af284 Tested: 0.0.0-experimental-e5d06e34b is okay, 0.0.0-experimental-33c3af284 is broken ## Steps To Reproduce 1. It's in a complicated application so not sure how to reproduce 2. If the React team has an interest in it, I will try to provide it. React-experimental took 14 seconds to handle a button click ![image]([link])

### CASE-1181 · [React 19] React-Dom bundle increase 200kb
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: React 19
- **Excerpt**: ## Summary <!-- Please provide a CodeSandbox ([link]), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem. You may provide a screenshot of the application if you think it is relevant to your bug report. Here are some tips for providing a minimal example: [link] --> ## Using React 18 <img width="1153" alt="image" src="[link]]/assets/58261676/d9d73fb7-f4bb-4cae-9a7d-19cf0bce7bca"> <img width="796" alt="image" src="[link]]/assets/58261676/2d024945-39f4-4e0d-baec-60a56d791445"> ## Useing React19 After Using React@user, the react dom bundle changed to…

### CASE-1183 · [DevTools Bug]: React devtool is not there in codesandbox
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps I was following the react.dev docs I was at tic tac toe chapter and doing my code stuff in codesandbox as per document i triggered an issue that react devtools is not there in code sandbox <img width="754" alt="Screenshot 2023-11-28 at 9 25 29 AM" src="[link]]/assets/40708551/5d83861d-426b-4326-93ad-40a2927d8228"> ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error…

### CASE-1186 · Bug / Docs / Question: Handling interrupted suspense boundaries
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: Status: Unconfirmed
- **Excerpt**: In a world where portions of the component tree can hydrate and become intractable with child components still being suspended, does documentation / guidance exist on how to handle these cases? Example: [link] Green: Hydrated Red: Suspended ![image]([link]) Clicking either of the "Link" elements in the hydrated portion of the page, this will trigger a re-render and causes the suspense boundary to receive an update before it finishes: [link] This isn't an issue in terms of app functionality as implemented as I was under the assumption parent updates from interactive components would be…

### CASE-1187 · [DevTools Bug]: Uncaught TypeError: hook.sub is not a function
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app New project created by CRA ### Repro steps 1. create a new project by CRA on mac os Monterey v12.4; 2. import 'react-devtools' at first line of `src/index.tsx`; 3. sudo npm i --location=global react-devtools; 4. npx react-devtools; 5. in my raect app console run `t=document.createElement('script'); t.type='text/javascript'; t.src='[link] document.head.prepend(t)`; 6. Uncaught TypeError: hook.sub is not a function, below are some screenshots. <img width="659" alt="error" src="[link]> <img width="647" alt="location" src="[link]> ### How often does this bug happen? Every time…

### CASE-1198 · Wrong warning message is shown
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Enhancement/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** BUG **What is the current behavior?** Wrong warning message is shown ![image]([link]) ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** github file: [github…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1109 · Inspector doesn't work on my site
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬22 · closed · labels: Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Ask for assistance or report a bug (not sure) **Steps to reproduce** - In dev tools, select "Components" tab - Select the inspector tool in the top-left - Click on an element in the page **What is the current behavior?** Component names are shown as I mouse over them, but the Components tab does not reveal the selected element **What is the expected behavior?** The selected element should be revealed in the Components tab **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of…

### CASE-1115 · A number input will always have left pad 0 though parseFloat value in onChange
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍27 💬22 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** I have a number input with defalut value 0 and in onChange function I'll parse value to float to avoid invalid input, but I'll always get left pad 0 on input UI. But in previouse version, my code works. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** <input type="number" value={this.state.value} onChange={e=>this.setState({value: parseFloat(e.target.value)? parseFloat(e.target.value)…

### CASE-1159 · [RFC] Testing Browser Compatibility
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍10 💬19 · closed
- **Excerpt**: Testing browser quirks is challenging. What if we set up a page or site local to the React repository that made it easier to isolate browser differences and document known issues: For example: [link] We could start with some of the outstanding input issues (like [link]][ref]), and work our way backward to historical decision points for adding additional rules to support specific browsers. Speaking with @user and @user about this. We see a couple of outstanding tasks: - [x] Add a page/site local to the React repository that includes test cases for reproducing specific browser quirks - [x] Make…

### CASE-1160 · Changing an array in a state does not update component
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: ``` coffee ... getInitialState: -> selected: [] _renderSelect: (cellData, cellDataKey, rowData, index) -> <input type='checkbox' checked={@user.selected[index]} /> _onRowSingleClick: (target, index) -> selected = @user.selected.slice() selected[index] = !selected[index] @user(selected: selected) ``` Here you go. When I alter the selected state of a certain row (negate it), the checkbox is not being updated. Why? Is this a bug or am I doing something wrong here?

### CASE-1162 · Bug: select field value resets to the first option after form submission with `useActionState`
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍25 💬18 · closed · labels: Status: Unconfirmed
- **Excerpt**: When using a `<select>` field within a form that uses `useActionState`, the selected value resets to the first option after the form is submitted, even though the value should persist as `defaultValue` is set. This behavior occurs only with the `<select>` field; other form fields (e.g., text inputs) retain their values correctly after submission. React version: 19 ## Steps To Reproduce 1. Select 2 or 3 from the `select` field 2. Press the button to submit the form Link to code example: [link] ## The current behavior After submission, the selected value resets to the first option (value='1').…

### CASE-1175 · Incorrect data in compositionend event when typing Korean on IE11
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: To reproduce: * In IE11 (on Win7 or Win10) go to [link] * Open the Developer console. * Switch to the Microsoft Korean IME (standard settings) and switch to Korean input. * Put the cursor in the contenteditable div and type `여름.` (on a QWERTY keyboard this is typed as `dufma.`). * Do the same for the input field. Result: in the developer console a list of composition events and the contents of the data attribute is logged. However, the data of the first `compositionend` event is wrong. It should be 여, not 여르. See screenshot below. ![selection_329]([link]) You can see that this is wrong by…

### CASE-1177 · Controlled number input doesn't handle e, - and . properly
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬18 · closed · labels: Type: Bug/Resolution: Wontfix
- **Excerpt**: A controlled number input, without a corresponding `setState` function, still allows `e`, `-` and `.` to be entered (and numbers can be inputted afterwards). I could be incorrect but I don't believe this is the desired behavior. [Here's a JSFiddle]([link]) demonstrating the issue.

### CASE-1178 · onChange doesn't work on IE for type=range
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: Component: DOM
- **Excerpt**: I don't know yet if I'm a newbie or it is a bug but `onChange` event on `<input type="range">` doesn't work on IE (even 11). Here an example of my code: ``` javascript <input onChange={this.changeVolume} onMouseUp={this.changeVolume} ref="volumeSlider" type="range" min={0} max={1} step={.1} value={this.state.volume} title="Sound" /> ``` Yes, I use `onMouseUp` as crap patch.

### CASE-1195 · Bug: manually created 'change' events via new Event() don't trigger React event handlers
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬17 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ## Description: Manually created events created via `new Event` and emitted from a hidden input work great for `'input'` events, they bubble as expected and can be caught via `onInput` handlers, but using `'change'` events this way doesn't work -- `onChange` handlers are never called. The vanilla JS `'change'` events do bubble normally and can be caught by parents with vanilla JS listeners ( using `addEventListener`), but the React `onChange` listeners don't register anything. I've created a codepen to demonstrate a minimal case for this via console logging. See repro steps below and code…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1112 · Question: Building react with sourcemaps
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍11 💬22 · closed
- **Excerpt**: How do I build react with source maps? I am in `master` branch with the latest code. I tried setting rollup config to `sourcemap: true` and setting `"sourceMaps": true` in .babalrc. I am getting the following error. `Sourcemap is likely to be incorrect: a plugin was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help` I want to generate source maps so that I can set breakpoints in the actual es6 package code and step through it.

### CASE-1120 · [DevTools Bug]: Component tree panel becomes unresponsive after clicking on a few components
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-G4, P-E3 · **Env**: chrome, chrome 100, react
- **Signals**: 👍9 💬21 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app Multiple; but you can check at [link] ### Repro steps 1. Access a website in Chrome that uses React. 2. Open Chrome Developer Tools 3. Open the React Developer Tools Components tab/panel 4. Click on 5 - 10 components in the component tree individually to inspect them Notes: - This started happening on all React-based websites after updating to Chrome Version 102.0.5005.61 on my work MacBook (x86_64) and my personal MacBook (arm64). Reverting back to Chrome 100 seems to help. - I had a co-worker test as well, with the same result. - You can still select individual components…

### CASE-1189 · `useEffect` can be synchronous?
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍8 💬17 · closed · labels: Status: Unconfirmed
- **Excerpt**: Hi legends, My mental model of `useEffect` is that schedules an asynchronous task to be executed after rendering > Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect. > → [link] > > _Implies that `useLayoutEffect` is **synchronous** and `useEffect` is…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1116 · Incorrect "unable to reuse markup" warning message
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: React 0.13 improved warning message when it fails to reuse server rendered markup and now shows the exact incorrect part. But it shows wrong part if there are text nodes containing some html-escaped chars (single quotes, double quotes etc.) somewhere before this incorrect part. For example, React shows this message... ``` (client) sxg4h94hs.2.1.0.1">{&quot;Hi!&quot; (server) sxg4h94hs.2.1.0.1">"Hi!" ``` ...but this part is ok. The problematic markup (which actually renders differently on client and server) is located after this place in DOM. If i remove `"Hi!"` text from the rendered markup,…

### CASE-1121 · [DevTools Bug] Crash when inspecting component using a hook that returns a Proxy
- **Principles**: P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬21 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Provided is a code sandbox with a very simplified version of the code which triggered this bug. 1. Open the code sandbox app in a new window 2. Open developer tools 3. Select the "Components" tab 4. Click on the "App" component Observe that devtools crashed, and the console prints out an error similar to this: ``` Uncaught TypeError: [Symbol.iterator]() returned a non-object value formatDataForPreview moz-extension://739d174b-7aaa-4387-b750-af9bc181bf82/build/react_devtools_backend.js:849 dehydrate…

### CASE-1158 · Need a hook for hydration mismatch
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍3 💬19 · closed · labels: Type: Feature Request/Component: Server Rendering
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** feature **What is the current behavior?** In React 16, the `data-react-checksum` attribute was removed from the server rendered markup. In previous versions, we used this attribute to beacon checksum mismatches to our log servers to be notified of production issues. With the attribute removed, we have no mechanism to determine if a checksum mismatch occurred. I'm aware that checksum issues no longer cause the entire DOM to re-render, however, it is still important that we know when they do occur. A typical use case is when we display…

### CASE-1185 · Bug: Reconciler cannot handle Declarative Shadow DOM (DSD)
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍18 💬17 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: The reconciler does not ignore `<template shadowRoot="open">` but handles them like a normal HostElement. In reality, as soon as the closing template tag is parsed, the component is replaced in the DOM by `#shadow-root (open)` See: [link] React version: 18.2.0 ## Steps To Reproduce I tried this with NextJS 13.1.6, which uses react 18.2.0 and react-dom 18.2.0. In the end the component is rendered server side and hydrated in the frontend. 1. Add the following html code to your component ```html <div> <template shadowrootmode="open"> <button type="button"> <slot></slot> </button> </template> My…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1118 · Bug: [React 19.1/19.2] useEffect does not run after changed dependencies due to startTransition
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬21 · open · labels: Status: Unconfirmed
- **Excerpt**: React version: 19.1.0/19.2.0 useEffect does not run after changed dependencies, due to startTransition. ## Steps To Reproduce 1. Open the [StackBlitz reproduction]([link]) 2. open the terminal 3. `npm install` 4. `npm run start` or `npm run start:dev` 5. Open the browser Developer Tools 6. Select Console tab from the Developer Tools 7. Load/reload the StackBlitz preview page 8. Watch the Developer Tools console logs. Link to code reproductions: - [StackBlitz]([link]) ## The current behavior File `src/main.hooks.ts` contains an hook named `useData`. Inside this hook, the `useEffect` at line…

### CASE-1137 · Upgrading to React v15.2.0 causes my development build to crash IE9
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍2 💬20 · closed · labels: Browser: IE/Type: Regression
- **Excerpt**: My application crashes IE9 when I upgrade to React v15.2.0! It works fine with v15.1.0 and all earlier versions. My diff looks like this ``` package.json - "react-addons-perf": "15.1.0", + "react-addons-perf": "15.2.0", - "react-addons-shallow-compare": "15.1.0", + "react-addons-shallow-compare": "15.2.0", - "react-addons-test-utils": "15.1.0", + "react-addons-test-utils": "15.2.0", - "react": "15.1.0", + "react": "15.2.0", - "react-addons-css-transition-group": "15.1.0", + "react-addons-css-transition-group": "15.2.0", - "react-addons-transition-group": "15.1.0", +…

### CASE-1146 · Bug: useTransition and uSES do not work together, uT is not resilient to amount-of-render
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍5 💬19 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: React version: 18.2.0 ## Steps To Reproduce We learn that components should not rely on render. But useTransition does seem to rely on it. If we wrap a set into a useTransition: ```jsx const [pending, start] = useTransition() ... start(() => set("foo")) ``` everything that now suspends because of it is marked as a transition, it will not go into suspense fallback but instead `pending` will be true. ✅ But if the suspending component, for whatever reason, happens to render again while still in suspense, giving react the same promise that it already has, then it will unpend because that render…

### CASE-1193 · Bug: new jsx transform production
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Needs Investigation
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version:16.14.0 ## Steps To Reproduce I config our monorepo project to support new JSX transform anything work find on development mode but when creating a build after run project this error printed on browser console. ``` react-dom.production.min.js:209 ReferenceError: _jsxs is not defined at _ (index.tsx:12) at Jo (react-dom.production.min.js:153) at Ou…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-1127 · Limitations of React.createContext
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍0 💬21 · closed · labels: Type: Question
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** feature **What is the current behavior?** The current behavior requires end users to use `createContext` in the module scope. To my understanding, it's not currently possible to use a default value derived from the state of a component (a stateful Provider in my case). This [StackOverflow post]([link]) hits the issue right on IMO. I feel like this is the classic use case for replacing Redux, and it doesn't work out of the box with static types. I think it's quite telling that `react-redux` is doing something similar [here]([link]) in…

### CASE-1161 · onClick broken on iOS.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, ios
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: iOS Safari really doesn't want you clicking anything that's not an `<a>` tag. This is a known issue: [link] The way you fix this is by putting an empty "onclick" attribute on nodes you wish to emit click events. Yep. So presumably: ``` div({onClick: function(){alert('clicked');}}, 'click me'); ``` should emit: ``` <div onclick>click me</div> ``` on iOS. Ensuring that the click event is actually reachable from an iOS device. As the stack overflow link points out, this is also an issue for `<label>` elements associated with `<input>` elements. In order to behave as a clickable label, they must…

### CASE-1176 · Textarea placeholder isn't shown in IE 11 being rendered using React
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: Nikolai Mavrenkov already created a good description of the problem on Stack Overflow: [link] I just can confirm it breaks in IE11, but works in IE10 (and other browsers) with React v15.0.2.

### CASE-1199 · Read latest state value in event handler
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Type: Question
- **Excerpt**: I have this question I could have asked on Stack overflow, but I think it is more suitable for people from react team or more experienced users. So I will give it a try to ask it here. Imagine I have event handler below where I **want to read latest state value and do something with it (however, not do a new `setState`)**: onClick(){ let data = this.state.data; API.makeRequest("URL", data); } [Here][1] Dan Abramov says it is safe to read state in event handler (in the sense it will be up to date). However he says this applies to react 16. Otherwise he suggests to use functional `setState` to…

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-1130 · Why is react so slow rendering 900 items? (with jsfiddle)
- **Principles**: P-H2, P-H3 · **Env**: react
- **Signals**: 👍3 💬21 · closed · labels: Type: Question
- **Excerpt**: Hi guys, I'm evaluating react.js (considering using it in some projects) but I'm having trouble rendering a simple list with 910 elements, since it takes almost 4 seconds. This is not a complex markup (just a couple of div tags), actually it's an existing app simplification. I tried this using just underscore.js and it took 500ms!! Jsfiddle: - using JSX: [link] - without JSX: [link] What am I doing wrong? Cheers, Vasco Pessanha

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-1138 · Warn when using overlapping styles (e.g. border and borderBottom)
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: Type: Bug/Component: DOM/HTML/good first issue (taken)
- **Excerpt**: # This "good first bug" is taken by @user. Don't work on it unless that's you! This has been discussed a few times before but I don’t think there was any conclusion, and PRs intending to solve the issue were not merged for various reasons. I would like to close those PRs as outdated, and reboot the discussion about this. Performance considered, the conclusion from @user and @user seems to be: > We should consider not allowing conflicting style rules at all. — [link]][ref][ref] > IMHO, all things considered it's better to just disallow overlapping and warn in dev. — [link]][ref][ref] Radium by…

### CASE-1155 · Is it possible to share contexts between renderers?
- **Principles**: P-A5 · **Env**: react
- **Signals**: 👍21 💬19 · open · labels: Type: Enhancement/Component: Reconciler
- **Excerpt**: **What is the current behavior?** Hey 👋 I maintain [react-pdf]([link]). Thanks for your awesome work and making `react-reconciler` for us to use! I've got many issues lately regarding context not working on my library and when doing tests I found out that context values aren't shared between renderers. This makes it impossible to share state such as themes, i18n, redux and more. As a bit of context, React-pdf is not a primary renderer, and as such, when used in the browser it runs on top of react-dom. I found the `isPrimaryRenderer` reconciler option that's supposed to be used for "multiple…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-1139 · ES6 onScroll never fires
- **Principles**: P-D4, P-F1, P-F5 · **Env**: react
- **Signals**: 👍6 💬20 · closed
- **Excerpt**: I've been trying this out and I can't seem to get it working. ``` javascript export default class MyPage extends React.Component { render () { return <div className='page-wrapper' onWheel={(e)=>console.log('WHEEL!!',e)} onScroll={(e)=>console.log('SCROLL!!',e)}> {... my page content ...} </div>; } } ``` the onWheel fires normally, but the onScroll is not firing. I dunno if I'm missing something or this is a bug. Thanks!

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-1167 · [DevTools Bug]: Warnings are too "loud", mislabeled and make console difficult to use
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍22 💬18 · open · labels: Type: Bug/Status: Unconfirmed
- **Excerpt**: ### Website or app [link] ### Repro steps It's not causing this in the codesandbox probably due to some flag missing, but locally in dev I've been getting the following when a stray prop is passed to a dom elem as an attribute (_NB this output is **truncated**, this isn't even the whole message_): ![Screen Shot 2022-10-07 at 10 39 51 AM]([link]) ## Problems with the current logging approach 1. **This floods the console and pushes all other messages out of screen, making debugging difficult.** This is the main issue. 2. The severity/"loudness" of this log message is out of proportion to the…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-1182 · Bug: Error in the react web page. (Go full-stack with a framework)
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬17 · closed · labels: Status: Unconfirmed
- **Excerpt**: There is a colour-sensitive error on the Home page of the [react.dev](React) web page. <img width="928" alt="Screenshot 2023-12-08 200854" src="[link]]/assets/108126089/375e7378-66e8-44cc-81f5-beada37124c3"> <img width="935" alt="image" src="[link]]/assets/108126089/557763c6-ad6b-4cc0-94e5-5960f8aca6d1"> As shown in the picture both light /Dark modes of the web page have the same error in the conference dropdown menu. React version: website ## Steps To Reproduce 1. Go to react.dev 2. Go to the "Go full-stack with a framework" section 3. Find the demo page of the conference site 4. select the…

