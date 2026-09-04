# Case Chunk 001 — Round 1

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-1001 · "Should not already be working" in Firefox after a breakpoint/alert
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: firefox, chrome, windows, react
- **Signals**: 👍85 💬154 · open · labels: Type: Bug/Difficulty: medium/Type: Needs Investigation/good first issue
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** I'm seeing "Error: Should not already be working" after upgrading to React 16.11 **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** This is exclusively happening on an older version of Chrome, 68.0.3440 on Windows 7 I was unable to reproduce this in a VM environment but our Sentry is getting littered with these errors. I know it's a long shot, but I wasn't able to find any information about this error anywhere, just a…

### CASE-1024 · Rendering all breakpoints on the server and then relying on hydration fixup to prune them is too expensive in 18
- **Principles**: P-A1, P-A4, P-G3, P-F4 · **Env**: react
- **Signals**: 👍0 💬43 · closed · labels: Status: Unconfirmed
- **Excerpt**: We use a library called Fresnel to achieve the following 1. Render markup for all breakpoints on the server and send it down the wire. 2. The browser receives markup with proper media query styling and will immediately start rendering the expected visual result for whatever viewport width the browser is at. 3. When all JS has loaded and React starts the rehydration phase, we query the browser for what breakpoint it’s currently at and then limit the rendered components to the matching media queries. This prevents life-cycle methods from firing in hidden components and unused html being…

### CASE-1032 · Bug: App is unresponsive with React 18
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍0 💬39 · closed · labels: Status: Unconfirmed
- **Excerpt**: Before upgrading to react 18 app was working well but after upgrading this is not responding well React version:18 ## Steps To Reproduce 1. Open the application and wait for 2 sec. then see buttons are not clickable 2. After sometime we will see page unresponsive Link to code example: Deployed URL : [link] ## The current behavior As you can see in the screenshot. ## The expected behavior It should run without lag.

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-1002 · Explore encouraging users to not ship DEV mode to production
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍28 💬143 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Feature **What is the current behavior?** Developers meaning to do the right thing will often accidentally ship DEV mode to production rather than PROD mode. This can have a significant impact on performance. Although DEV->PROD is a one line change, it's something React could explore encouraging. <img src='[link] width='400px'> <img src='[link] width='400px'> There's [great nuance]([link]) here and I know that there's balance to be struck between the overall DX value this brings vs UX. Another challenge is that the change itself is…

### CASE-1003 · [Umbrella] Releasing Suspense
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍628 💬119 · open · labels: Type: Umbrella/React Core Team
- **Excerpt**: Let's use this issue to track the remaining tasks for releasing Suspense to open source. **Last updated: March 24, 2022** **Blog post: [The Plan for React 18]([link])** ## Completed: React 16 - [x] Release `<Suspense>` with `React.lazy` for client-side lazy loading ## Completed: [React 18 Alpha]([link]) - [x] Implement concurrent rendering, which is a prerequisite to everything else. - [x] Fix [fundamental flaws]([link]][ref]) in the concurrency model that made the behavior difficult to understand and caused many bugs. - [x] Rewrite [how React traverses the tree]([link]][ref]) to unblock…

### CASE-1006 · [DevTools Bug]: Blank tools localhost only
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬92 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app google.com ### Repro steps This started after last update 4.20.0 ![image]([link]) ![image]([link]) ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ### Error component stack (automated) _No response_ ### GitHub query string (automated) _No response_

### CASE-1007 · <video /> attribute needed but not guaranteed by React
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍94 💬92 · open · labels: Type: Feature Request/Component: DOM/HTML
- **Excerpt**: As @user [mentioned]([link]), React does not guarantee an *attribute* will be set, so probably this is not a bug. If I understand well, react will ensure the property is set anyway. **Current behaviour** React renders the html `<video />` element without the attribute `muted` when explicitly passed. **Demo time** In [this pen]([link]) I made a simple example setting `muted` to the element and obtaining the result below: ![pen-screen-shot]([link]) Actually the property is set well, since the [original medial file]([link]) has an audio track and in the pen result is muted. **The point** I think…

### CASE-1008 · Bug: Hydration mismatch error due to plugins generating script tag on top
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍107 💬93 · open · labels: Component: Server Rendering/Resolution: Backlog
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.0.0, 18.1.0-next-fc47cb1b6-20220404 (latest version in codesandbox) ## Steps To Reproduce 1. Install a plugin that creates a script tag at the top(ex: [Apollo Client Devtools]([link])) 2. Go to the [demo]([link]) in the [new SSR suspense guide]([link]) 3. Open preview in a new window 4. UI mismatch error occurs at hydration time <img width="600"…

### CASE-1020 · Bug: `useId()` not working inside `<Suspense>`
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍40 💬47 · closed · labels: Status: Unconfirmed
- **Excerpt**: `useId()` doesn't return a stable ID when used inside `<Suspense>`. ```js function App() { return ( <React.Suspense fallback={<p>I'm lazy loaded...</p>}> <LazyComponent /> </React.Suspense> ) } function LazyComponent() { const id = useId() console.log('id:', id) // The usual `throw promise` technique // ... } ``` Expected behavior: The logged ID `id: :r0:` to stay `:r0:` (i.e. the ID is stable). Current behavior: The logged ID changes: `id: :r0:`, then `id: :r1:`, then `id: :r2:`, etc. React version: `18.1.0`. ## Reproduction See [github.com/brillout/react-bug-useId-suspense]([link]).…

### CASE-1030 · head > meta > content escaping issue
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍44 💬41 · open · labels: Component: Server Rendering/Type: Needs Investigation
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** I'm guessing it's a bug. **What is the current behavior?** The following source code, ```jsx <meta property="og:image" content="[link] /> ``` , is being escaped once server side rendered: ```jsx <meta property="og:image" content="[link]> ``` You can reproduce the behavior like this: ```jsx const React = require("react"); const ReactDOMServer = require("react-dom/server"); const http = require("http"); const doc = React.createElement("html", {…

### CASE-1047 · Bug: Cannot read property 'useState' of null
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍39 💬33 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.2 ## Steps To Reproduce 1. Install a library that doesn't support React 18 (e.g [email]) 2. Try to use useState in a component Link to code example: [link] Note that you can pause the scrim ("video") to edit code and see the result by yourself. ## The current behavior Crashes without a helpful error message ## The expected behavior Should display a…

### CASE-1049 · When using React.lazy will cause the GPU/CPU to run overloaded, and the page is very slow.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬33 · closed · labels: Type: Bug
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** page is very slow. As we can see from this picture, React has been executing a work loop during the rendering suspend. ![image]([link]) ![image]([link]) **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your…

### CASE-1054 · [React 19] prop-types removal alternative / console component trace
- **Principles**: P-A3, P-H1 · **Env**: react, typescript
- **Signals**: 👍9 💬32 · closed · labels: Resolution: Stale/React 19
- **Excerpt**: ## Summary The state of `.propTypes` is a bit unclear. I see: 1. [link] doesn't mention their deprecation but [link] does. Should the two pages by synced? 2. [link] says: <img width="455" alt="image" src="[link]]/assets/3165635/1da94ce8-583d-4c34-bf5c-d358b1bb057f"> But it looks inaccurate, I would expect it says that `React.PropTypes` were deprecated from the source linked. <img width="854" alt="SCR-20240504-buph" src="[link]]/assets/3165635/eeac92b4-b210-43ec-87d1-6cb3c01a2a70"> [Source]([link]) 3. The migration guides encourage to migrate to "TypeScript or another type-checking solution",…

### CASE-1082 · Bug: eslint-plugin-react-hooks has wrong d.ts after upgrade from 5 to 6/7
- **Principles**: P-A3, P-H1 · **Env**: react, typescript
- **Signals**: 👍24 💬26 · closed · labels: Status: Unconfirmed
- **Excerpt**: React version: ## Steps To Reproduce 1. Use `module: nodenext` in TypeScript config 2. create `eslint.config.ts` with using `eslint-plugin-react-hooks` 3. See TypeScript errors about default field in <img width="1042" height="230" alt="Image" src="[link] /> Link to code example: Not provided ## The current behavior Errors in TypeScript ## The expected behavior Suitable declaration files

### CASE-1084 · Bug: Failed to execute 'insertBefore' on 'Node'.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬26 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: I have a react application with the following versions: React version: 18.2.0 React-router-dom: 5.3.3 I have Sentry installed on it to monitor errors. In the development env I don't have this error, but Sentry in production for some time now keeps reporting me the following error. I have more than 300 reports in the last 2 weeks and it didn't happen before. ```bash NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node. ``` ![image]([link]) I have seen that there are other issues related to this such as…

### CASE-1095 · Adding an image tag inside a react component throws error.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬24 · closed · labels: Type: Bug
- **Excerpt**: While working on an app, I was trying to use an image tag, I thought it was something with my setup, but I stripped everything down to zero, as below. **index.html** ``` <!DOCTYPE html> <html lang="en"> <head> </head> <body> <div id="app"></div> </body> <script src="./index_bundle.js"></script> </html> ``` **index.js** ``` import React from 'react'; import ReactDOM from 'react-dom'; ReactDOM.render(<img src={'/img/logo.png'} alt="vb" />, document.getElementById('app')); ``` The image renders properly, but I get an error in console that reads ``` index_bundle.js:659 Uncaught TypeError: Cannot…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-1004 · Make React resilient to DOM mutations from Google Translate
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, react
- **Signals**: 👍188 💬103 · closed · labels: Type: Feature Request/Component: DOM
- **Excerpt**: ## Coming from search? See workaround here: [link]][ref][ref]. And star this issue: [link] **Do you want to request a *feature* or report a *bug*?** Bug, though there's a decent chance it's a Chrome/Google Translate one **What is the current behavior?** When using Google Translate on a page using React 16, a certain code pattern produces a Javascript error (`Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.`) when the rendered content changes. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo…

### CASE-1005 · [DevTools Bug] Element "9" not found | Also "Element "10" not found" / "Element "12" not found"...
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍25 💬102 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps On first load I get multiple Error warnings on all app components from `<Game/>` down. They are identified with different Element numbers but appear to be directed to the same issue "The error was thrown at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:39558:15" If you select 'Begin Game' in app the error in component` <Game />` can be dismissed but new Errors appear on all newly rendered components below (once again all have different Element numbers directed to the same location (../main.js:39558:15) // This is issue is probably…

### CASE-1012 · DevTools: Improve browser extension iframe support
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍51 💬55 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> When react is inside an iframe, chrome extension for react devtools fails to detect react. This is because the extension sets `__REACT_DEVTOOLS_GLOBAL_HOOK__` only on the top level window. Apparently it's possible to have `__REACT_DEVTOOLS_GLOBAL_HOOK__` on iframes too by adding `all_frames: true` in extension…

### CASE-1014 · [DevTools] Manifest version 2 is deprecated
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, chromium 100, react, electron
- **Signals**: 👍0 💬54 · closed · labels: Type: Feature Request/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps Use latest React DevTools with Electron (Chromium) (18.2.0 / Chromium 100) ``` (node:80082) ExtensionLoadWarning: Warnings loading extension at ./node_modules/electron-devtools-vendor/extensions/react-developer-tools: Manifest version 2 is deprecated, and support will be removed in 2023. See [link] for more details. ``` ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools version (automated) _No response_ ### Error message (automated) _No response_ ### Error call stack (automated) _No response_ ###…

### CASE-1019 · React app not rendering in IE11 and below
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, react, webpack
- **Signals**: 👍22 💬49 · closed · labels: Status: Unconfirmed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** BUG **What is the current behavior?** App doesn't render in IE11 and below. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** - Build React app with Webpack - Launch IE11 or below (not an emulator) - You will see a blank screen or half-compiled React app with the following error: ![24f8f6e8-afde-11e6-9a6f-a3cc6355f55c]([link]) **What is the expected behavior?** - To render as it does in Chrome, Firefox, etc. **Which…

### CASE-1021 · Bug: v17 DEV mode slowness during effect traversal
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍2 💬47 · closed · labels: Type: Bug
- **Excerpt**: React version: 17.0.0.rc2 ## Steps To Reproduce 1. Install in dev mode 2. all events, click, onBlur all of them are too slowly every time you click in a input or something freeze the browser And even more if you open the chrome dev tools or others becomes more slow

### CASE-1022 · Bug: DevTools tabs don't show up sometimes in latest release
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 2, opera, macos, react, vue
- **Signals**: 👍58 💬45 · closed · labels: Type: Bug/Component: Developer Tools/Type: Needs Investigation
- **Excerpt**: # Note this issue is due to [CR bug 1085215]([link]) **It is impacting several other popular extensions as well- including React, Redux, Relay, and Vue devtools.** ----- React version: 16.13.1 DevTools version: 4.7.0 (5/18/2020) macOS version: 10.15.4 (19E287) ## Steps To Reproduce 1. Create a new profile in Google Chrome 2. Install the [React Developer Tools]([link]) 3. Go to [link] 4. Open the browser Dev Tools ## Screenshots Not sure this helps, but this is basically what I get after following the aforementioned steps: ![image]([link]) When using Opera the tabs do show up: ![image]([link])…

### CASE-1023 · Not touched, and not clicked component gets a ghost mousedown event
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, edge, ios, android, desktop
- **Signals**: 👍0 💬45 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: The deployed (minimal, trimmed down) app is at: [link] and the entire source code is at: [link] Clicking or touching either square should make the clicked / touched square disappear, but only that square. Everything works as intended on my desktop machine both in Chrome and in Firefox. It also shows the correct behavior in Safari on iOS (and I don't care about IE or Edge). The following triggers the bug in Chrome, either on an Android tablet, or on my desktop machine when emulating a hand-held device. Reload the app, and touch or click the top (blue) square: Both squares disappear, and in the…

### CASE-1031 · React devtools stuck at Loading React Element Tree...
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, ubuntu, react
- **Signals**: 👍25 💬39 · closed · labels: Resolution: Stale
- **Excerpt**: ##### Have tried re-installing both extension and chrome. OS: Ubuntu 20.10 Chrome: 107.0.5304.87 (Official Build) (64-bit) Scenario: Dev tools shows ``` Loading React Element Tree... If this seems stuck, please follow the [troubleshooting instructions]([link]]/tree/main/packages/react-devtools#the-issue-with-chrome-v101-and-earlier-versions). ``` on local development servers.

### CASE-1033 · Use the native `beforeinput` event if it's supported
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, webkit
- **Signals**: 👍102 💬39 · open · labels: Type: Feature Request/Component: DOM
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Improvement. **What is the current behavior?** Right now, the synthetic `onBeforeInput` event is being created based on two other events: - `textInput` when possible—which is in Webkit. - `keypress` as a fallback. But these days in Chrome, Safari and Opera the spec'd `beforeinput` event is available and actually fires. And when it does, it includes other [spec'd properties]([link]) which can be extremely helpful: - `inputType` tells you whether the event is inserting text, replacing text, inserting a line break, etc. -…

### CASE-1034 · [bug] Problems of using react-addons-perf
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬39 · closed · labels: Type: Bug
- **Excerpt**: When trying to use [email] in Google Chrome, it is found that after Perf.start(), error messages displayed Warning: There is an internal error in the React performance measurement code. Did not expect ctor timer to start while componentDidMount timer is still in progress for another instance. Warning: There is an internal error in the React performance measurement code. We did not expect componentDidMount timer to stop while no timer is still in progress for another instance. Please report this as a bug in React. After I typed Perf.stop() and try to use getWasted - this error message…

### CASE-1035 · mouseenter fires on disabled inputs whereas mouseleave does not
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍26 💬39 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: There is an asymmetry to EnterLeave event plugin. Since `mouseenter` is created from the relativeTarget of the `mouseout` event it fires even though the target is disabled. Since the `mouseleave` is the inverse, i.e requires that the disabled element fire a mouseout, it doesn't fire a `mouseleave` for the disabled element. I am pretty sure the correct behavior here is that neither event should fire if its target is disabled, since this mirrors `mouseout`. No idea if none-chrome browsers have the same behavior for which mouse events fire on disabled elements. Additional caveat I just realized,…

### CASE-1037 · MobileSafariClickEventPlugin requires touch events to be initialized
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, mobile
- **Signals**: 👍0 💬39 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: Event do not trigger when node do not have "cursor: pointer" style on it. Here you have an example: [link]

### CASE-1038 · [DevTools Bug]: Error in event handler: Error: Attempting to use a disconnected port object
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, react
- **Signals**: 👍12 💬38 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Create a react app ``` yarn create react-app test-react cd test-react yarn start ``` 2. Create `.env.development` file in root. ``` HTTPS=true PORT=4100 BROWSER=none ``` 3. Visit [link] in Chrome v100.0.4896.127 4. Open React Devtools by inspecting page, some times it shows `Components` tab but in large application it does not show the `Components` tab. If it shows the tab the error message is sent to dev tools every second. 5. See error message in [chrome://extensions/](chrome://extensions/) 6. This is not reproducible in Firefox v99.0.1. ### How…

### CASE-1039 · Bug: element.current.scrollIntoView() not working as expected in chrome.
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: chrome, edge, firefox, react
- **Signals**: 👍20 💬38 · closed · labels: Component: DOM/Status: Unconfirmed/Resolution: Needs More Information/Resolution: Stale
- **Excerpt**: Hey 🙋‍♂️ I have built a simple chatbot using react, and when the user sends a message i want to show the last message in the chatWindow component, so I used the following code: ```js useEffect( function () { if (lastmessageRef.current !== null) { lastmessageRef.current.scrollIntoView() } }, [lastmessageRef] ) ``` It works as expected in edge and Firefox, but on chrome it is behaving weird llink-to-the-chatbot: [link] github-repo-link: [link] Thank you

### CASE-1040 · "NotFoundError: Failed to execute 'removeChild' on 'Node'" when using React.Fragment <></> with Chrome extension which does not modify the DOM tree below the root div of the React app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍37 💬38 · open · labels: Type: Needs Investigation
- **Excerpt**: This has already been discussed before ([ref]), but there wasn't a reproducing example for this kind of issue and I think that my use case is also a bit different. **Do you want to request a *feature* or report a *bug*?** I believe this can be considered a bug. **What is the current behavior?** In order to reproduce this issue using Chrome, you will need to install the following Chrome extension called TransOver: ![Screen Shot 2019-11-03 at 22 51 33]([link]) [link] I use it to translate text on hover. The only thing that this extension does is appending a tooltip with the translated text to…

### CASE-1041 · Suppress "Download the React DevTools" log for a better development experience
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍21 💬37 · open · labels: Type: Feature Request/Component: Developer Tools/good first issue (taken)
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.0.0 ## Steps To Reproduce 1. open a remote debug chrome devtools window 2. the message will show <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: <!-- Please provide…

### CASE-1042 · Bug: React Dev Tools Firefox extension fails to detect React
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, firefox 72, chrome/, chromium, react
- **Signals**: 👍2 💬37 · closed · labels: Component: Developer Tools/Resolution: Stale
- **Excerpt**: React extension version: 4.4.0 ## Steps To Reproduce 1. Install Firefox 72.0.2x64 2. Go to Discordapp.com ## The current behavior Extension reports: _"This page does not appears to be using React"_ ## The expected behavior React is detected (just like it is currently in Chrome/Chromium)

### CASE-1045 · onChange not firing properly in React 15.2.0 + IE11 when paste text into textarea
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍0 💬34 · closed · labels: Type: Bug/Browser: IE
- **Excerpt**: Hello. On IE11/React 15.2.0 when copy/paste data from keyboard to a textarea, onChange not firing, this works fine in Chrome and FF I've included a test link: [link] (a log msg should happen when you copy/paste data into textarea) Thanks!

### CASE-1046 · [DevTools Bug]: Electron support broken in 4.27
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, electron, react
- **Signals**: 👍25 💬33 · open · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: ### Website or app [Electron.js]([link]) ### Repro steps React devtools 4.27 no longer works in Electron[1] because `chrome.scripting` isn't implemented, which it started using due to the manifest v3 upgrade: [link]][ref] When opening React devtools 4.27 in any Electron project (installed with [`electron-devtools-installer]([link]) for example) you'll see that the devtools panel is shown but no React components are ever found. Earlier versions worked well with Electron [1] [link] and [link] ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ###…

### CASE-1048 · [DevTools Bug]: Component tree size too small, components can't be selected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍13 💬33 · closed · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app [link] ### Repro steps 1. Visit reactjs.org 2. Open devtools 3. Open "Components" tab At first the component tree won't appear. Once I'm at the "Components" tab, I then have to also refresh the page to make the tree render. And when it does render, it still doesn't work properly. As a note, this issue started happening after I had to forcibly restart my computer. Since then I have tried reinstalling the extension, restarting Chrome, restarting my pc, all of which haven't worked. I'd like to avoid reinstalling Chrome completely but that's the only thing I haven't yet tried.…

### CASE-1052 · Better SVG Support for namespaced attributes
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, react
- **Signals**: 👍22 💬33 · closed · labels: Type: Bug/SVG
- **Excerpt**: We are trying to use React for a SVG document. But we are facing problems for namespaced attributes. For instance, this element cant be constructed with React: <code> ``` <image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/> ``` </code> We cant build a JSX for a xmlns:xlink attribute. Is there any way to solve this?

### CASE-1055 · Potential performance issues with using forwardRef
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍2 💬32 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug (assuming that a potential drop in perf counts as a "bug") **What is the current behavior?** I've been setting up a rudimentary perf benchmark harness for React-Redux over in [link] , so that we can compare performance between builds of React-Redux as we work on version 6. The harness runs one or more benchmark apps in headless Puppeteer, running them once to capture FPS values and a second time to capture Chrome trace reports automatically. Currently, there's only one benchmark app: a "stock ticker"-type stress test that measures…

### CASE-1060 · Strange second argument passed to event handler (always undefined)
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome 53, windows, react
- **Signals**: 👍1 💬31 · closed · labels: Difficulty: starter
- **Excerpt**: I've found a bug. I've attached event listener with `onClick` property like this: ``` jsx <a href="#" onClick={function (event) { console.log(arguments.length); // prints 2 // arguments[0] = SyntheticEvent - it's ok // arguments[1] = undefined - what is this??? }}>Click me</a> ``` The event listener called with 2 arguments: synthetic event and strange undefined value. I think, normal behavior is when handler called with a _single_ param - event object. Windows 10. Chrome 53. React version - 15.2.0.

### CASE-1061 · Bug: ReactDOM ignores invalid styles (e.g. unquoted font-family)
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: firefox, chrome, react
- **Signals**: 👍0 💬30 · closed · labels: Component: DOM/Resolution: Stale
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 17.0.2 ## Steps To Reproduce 1. Just try to set `fontFamily: "Exo 2"` on styles. [link] - If you chage it to "Exo", the hot reload correctly sets "Exo" fontFamily on the dom. - If you next change again to "Exo 2", it just leaves the dom with the previous value: "Exo" This happens on latest Firefox, Chrome and Brave

### CASE-1062 · Bug - react onClick() doesn't work well on WKWebview - iOS 13
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios 13, react, webview, mobile
- **Signals**: 👍13 💬30 · closed · labels: Browser: Safari/Component: DOM/Type: Needs Investigation
- **Excerpt**: # Context Apple just realeased new version of WKWebview with iOS 13. On my mobile app i don't use react native but pure React / HTML inside a Native Webview. # Problem Touch events don't work well on onClick() since the update. The user has to touch very fast to trigger the onClick(). If the use touches more than 200 / 300 ms it doesn't trigger the onClick() Do you know a way to fix it ? Thanks a lot for your help !

### CASE-1064 · Bug: onBlur is not firing in IOS Chrome when trigger done button
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome, ios, ios 16, android, react, iphone
- **Signals**: 👍4 💬29 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: ### Version - react: 18.2.0 - react-dom: 18.2.0 - test device version: Iphone X(IOS 16.3) ### Sample Code - [link] ### Expectation - Clicking the DONE button on the IOS keyboard, I expected the blur to be triggered by losing focus on the html Input Element. ### Result - The onBlur event is not fired. ### Detailed description: - After the done button on the keypad was clicked, the html was blurred but react's onBlur was not fired - If you apply blur as a native event instead of react onBlur, it works fine. - IOS, Android Other Browsers onBlur was fine. [link] [link] ### The current behavior -…

### CASE-1065 · Bug: React 18 (18.2.0) skips renders in Safari even when props change
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, chrome, react, desktop, mobile
- **Signals**: 👍9 💬29 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: It seems that React 18 in Safari is not rendering every render call when the props have changed. It is possible that I don't understand something about React 18's rendering, however, this is not reproducible in React 17 (or in React 18 without `createRoot`) or in React 18 with Firefox or Chrome, which leads me to think that this is a bug. React version: 18.2.0 ## Steps To Reproduce - a component that uses state to remember previous props - quickly call render on a React18 `createRoot` and view the app in latest Safari (desktop or mobile) - you will see that react sometimes skips renders and…

### CASE-1066 · [DevTools Bug] Cannot add child "1161" to parent "942" because parent node was not found in the Store.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍27 💬29 · open · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app chrome on local host ### Repro steps it happen with every component that i mount <img width="1470" alt="Screenshot 2023-03-23 at 1 04 00 PM" src="[link]> ### How often does this bug happen? Every time ### DevTools package (automated) react-devtools-extensions ### DevTools version (automated) 4.27.2-1a88fbb67 ### Error message (automated) Cannot add child "1161" to parent "942" because parent node was not found in the Store. ### Error call stack (automated) ```text at chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:27939:43 at bridge_Bridge.emit…

### CASE-1069 · Bug: Backspace in input type="number" behaves badly in Blink
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, chrome 51, opera 39, safari 9, firefox 49, react
- **Signals**: 👍4 💬29 · closed · labels: Type: Regression
- **Excerpt**: This appears to have been introduced in a new Chrome version, but I can't find any reference to where. Affected/Tested Browsers (OS X): - Chrome 51.0.2704.106 (64-bit) - Opera 39.0.2256.15 Unaffected Browsers: - Safari 9.1 - Firefox 49 Backspacing in an input element with `value` or `defaultValue` set causes some very odd behavior. Once a decimal point is gone, it can't easily be re-added. Example: ![react-input-bug]([link]) In this example, I simply backspaced twice. On the second backspace, when I expect `3.` to be showing, the input instead reads `3` and the cursor has moved to the…

### CASE-1073 · Bug: DevTools not finding/showing React components
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍0 💬28 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: When I use DevTools to select an element on the page, it can't jump/find it. It also doesn't show it in the Components page. This was checked by finding its parent and checking the children, non of the newly generated ones are there. As a probably related bug Profiler doesn't show/record the changes. React version: 16.13.1 React-dom version: 16.13.1 Parcel: 2.0.0-beta.1 ## Steps To Reproduce 1. Have a parent element 2. Have a child element (A) 3. Using conditional rendering (`condition ? A : B`) "hide" A 4. B now shows 5. Try and select B using Chrome Dev Tools's "Select an element in the…

### CASE-1083 · [DevTools Bug]: "Message length exceeded maximum allowed length" when profiling a complex application
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍32 💬26 · open · labels: Type: Bug/Status: Unconfirmed/Component: Developer Tools
- **Excerpt**: ### Website or app N/A ### Repro steps When profiling a complex, proprietary app, I regularly get an error message, "Message length exceeded maximum allowed length." Steps to reproduce: 1. Within the Dev Tools, go to the Profiler tab. 2. Click the "Start Profiling" button. 3. Let the app run for a bit. Do some things in the app. 4. Click the "Stop Profiling" ("record") button. At this point, the Chrome Dev Tools console logs an error: ``` contentScript.js:116 Uncaught Error: Message length exceeded maximum allowed length. at handleMessageFromPage (contentScript.js:116:10) ``` And the Profiler…

### CASE-1092 · `onMouseLeave` can be unreliable in Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari
- **Signals**: 👍4 💬25 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: See this jsfiddle: [link] In Chrome, as you quickly move your mouse up and down the list, you'll notice that some get stuck in the hover state. This works fine in Safari, and works in Chrome if you use a stable key between the hover states. I think `mouseout` somehow isn't firing if the underlying DOM node is replaced by a new one in the same tick, but it's odd that this is a Chrome-only bug.

### CASE-1098 · [DevTools Bug]: App not recognized in Firefox, but works in Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, firefox 103, react
- **Signals**: 👍0 💬23 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app - ### Repro steps On both Firefox 103 and 104 the react devtools extension says: "This page doesn't appear to be using React". On the most recent version of Chrome it's working just fine. I cannot share the project since it's a private project unfortunately, but I suspect this is a regression introduced with the recent [link]][ref] Especially since the devtools were working perfectly fine until maybe one or two weeks ago. It _does_ work in incognito mode in Firefox. ### How often does this bug happen? Every time ### DevTools package (automated) _No response_ ### DevTools…

### CASE-1100 · Bug: React Dev tools keys not showing last letter in FF
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, react
- **Signals**: 👍0 💬23 · closed · labels: Status: Unconfirmed/Component: Developer Tools/Resolution: Stale
- **Excerpt**: The FireFox dev tools crop off the last letter of the keys in state/props as you can see here. ![Screenshot_2021-03-08_08-13-36]([link]) This doesn't happen in the Chrome extension ![Screenshot_2021-03-08_08-14-18]([link])

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-1009 · Provide a way to handle browser-autocompleted form values on controlled components
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍162 💬88 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: When there's a controlled component for form names that the user has saved in their browser (common with username/password fields), the browser will sometimes render the page with values in those fields without firing onChange events. If the user submits the form, the component state does not reflect what is showing to the user. In experimenting with this, it appears that the data is there on load (tested by logging this.refs.myinput.getDOMNode().value)

### CASE-1011 · Change event fires extra times before IME composition ends
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍39 💬56 · open · labels: Type: Bug/Component: DOM
- **Excerpt**: ### Extra details * Similar discussion with extra details and reproducing analysis: [link]][ref] * Previous attempt to fix it: [link]][ref] (includes some unit tests, but sufficient to be confident in the fix) ------ ### Original Issue When I was trying this [example]([link]) from [link] any Chinese characters inputted by Chinese pinyin input method would fire too many renders like: ![screen shot 2015-05-21 at 14 04 36]([link]) Actually I would expect those not to fire before I confirm the Chinese character. Then I tried another kind of input method - wubi input method, I got this: ![screen…

### CASE-1013 · Error: performUpdateIfNecessary: Unexpected batch number ...
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬55 · closed
- **Excerpt**: # From maintainers: if you have this problem, please see the explanation in [link]][ref][ref]. I am getting a strange error I've never come across. Googling it doesn't help at all. `Error: performUpdateIfNecessary: Unexcpeted batch number (current 36, pending 31)(...)` It has caused me a lot of headaches. I've reverted to 2 days ago and the error persists, even though 2 days ago everything was running smoothly and all tests were passing. I would appreciate any sort of direction as to how I can begin to resolve this bug. My guesses are that it's an error with Redux, Webpack, Redux-Form, or…

### CASE-1015 · OnChange randomly misses keys on IE if typing very quickly
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍11 💬54 · closed · labels: Type: Bug
- **Excerpt**: I have a simple search bar (controlled text input) with autocomplete. When I type text very quickly, I do get onKeyDown events, but every now and then, the corresponding onChange event goes missing. For example, if I type "foobar", the input field may end up showing "foobr". This happens only on IE (tested with IE11 on Windows 7), and I have not seen this on any other browser. Here's a fiddle showing the issue: [link] and a log: ``` keyDown: f keyDown: o change: f render: f change: fo render: fo render: fo keyDown: o keyDown: b change: foo render: foo change: foob render: foob keyDown: a…

### CASE-1017 · Cursor jumps to end of controlled input
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬52 · closed · labels: Resolution: Invalid
- **Excerpt**: When an input element is "controlled" by a model, the cursor will jump to the end of the line on every change. This makes it impossible to edit text that is not at the end of the input. A quick demo: [link] ``` var ExampleApplication = React.createClass({ render: function() { var model = this.props.model; return <input onChange={this.nameChange} value={model.name} />; }, nameChange: function(evt) { this.props.model.name = evt.target.value; } }); var myModel = { name: 'Input is funky' }; setInterval(function() { React.renderComponent( <ExampleApplication model={myModel} />,…

### CASE-1026 · How Much XSS Vulnerability Protection is React Responsible For?
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍20 💬43 · closed
- **Excerpt**: There was a security hack that mentions React here: [link] Ultimately this is a server-side bug and NOT a bug in React itself. This issue is about figuring out if there is something we can do to mitigate issues when you have a JSON parsing bug or some server-side issue. ## isValidElement React is designed to work with plain objects as input, and in fact, we're even getting rid of the `_isReactElement` as a way to verify this. We'll allow any JSON object. IMO, there is no problem with the verification here. All string values are sanitized before inserted into the DOM (except for CSS styles…

### CASE-1027 · Setup CI infra to run DevTools tests against multiple React versions
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬42 · closed · labels: Component: Build Infrastructure/Component: Developer Tools/Resolution: Stale
- **Excerpt**: PR [ref] caused some Suspense-related DevTools regressions (more info available on [ref]) which we did not catch because of the fact that DevTools tests are only run against the version of React in master. We should follow the precedent of the [regression fixtures tests]([link]]/tree/master/fixtures/devtools/regression) and have CI run DevTools tests against multiple React versions, including v15, all v16 minors, and the current HEAD of master branch. Setting this up will involve several things: * Infra to checkout older React packages and run tests against them. * Some form of gating so that…

### CASE-1029 · [React 19] Controlled `<select>` component is subject to automatic form reset
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍49 💬41 · open · labels: Type: Bug/React 19
- **Excerpt**: The controlled component also resets the "select" after the action is triggered. but the "input" component does not. ```jsx "use client"; import { useActionState, useState } from "react"; function add() { return Date.now(); } export default function Page() { const [state, formAction] = useActionState(add, 0); const [name, setName] = useState(""); const [type, setType] = useState("2"); return ( <form action={formAction}> <p>{state}</p> <p> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </p> <p> <select name="gender" value={type} onChange={(e) =>…

### CASE-1053 · input type=range onChange should fire when changing the value using the keyboard arrow keys
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬33 · closed · labels: Type: Bug/Difficulty: starter/Component: DOM

### CASE-1056 · The `defaultValue` of `<select>` may be broken
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍6 💬32 · closed · labels: Component: DOM/Type: Needs Investigation
- **Excerpt**: I would like to report a bug. In re-filing another outstanding bug that was closed despite being reproducible, I decided to create a repro case. Since the repro involves setting `defaultValue` on a `<select>`, I confronted the human inability to remember whether HTML is zero-indexed or one-indexed. Since the repro also involves determining whether a given `<option>` is selectable, I decided to just have a control with four `<option>`s and to select 3, to see which I'd get - the third or the fourth. Joke's on me. I got neither. I got the first selectable `<option>`. [A winner is…

### CASE-1059 · dispatchEvent on input/textarea is ignored
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬31 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** The `dispatchEvent` method has no effect on input/textarea elements. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (template: [link]).** v. 15.5.4: [link] (working) v. 15.6.1: [link] (not working) **What is the expected behavior?** The `dispatchEvent` method results in an event being handled. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous…

### CASE-1063 · Warning is changing a uncontrolled input of type radio to be controlled...
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬30 · closed · labels: Type: Bug
- **Excerpt**: I have this code ``` <input name='test' value={1} type='radio' /> <input name='test' value={2} type='radio' defaultChecked /> ``` [link] And when I click on radio it gives me warning Warning: Test is changing a uncontrolled input of type radio to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: [link] So its not clear why or is it a bug ?

### CASE-1076 · [DevTools Bug] Cannot remove node "612" because no matching node was found in the Store.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬27 · closed · labels: Type: Bug/Status: Unconfirmed/Resolution: Needs More Information/Component: Developer Tools
- **Excerpt**: ### Website or app proprietary ### Repro steps Overall, testing and refactoring of a component containing a formik wrapped form which includes a fieldarray with yup schema. Using VS Code to serve the React js application. Unable to share the repo / website as it is proprietary. Task: Logged in to the app to see the form as the specific user role required to see the component, testing yup schema on formik elements touched property to do some custom error connections in the containing component with React Developer Tools open to the Components view with the console also open. I was verifying…

### CASE-1086 · React DOM crashes when <option> contains three interpolated value if one is a conditional.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍5 💬26 · closed · labels: Type: Bug/Component: DOM/Difficulty: medium/good first issue (taken)
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** React DOM crashes when `<option>` contains three interpolated value if one is a conditional. Reproduction: [link] 1. Change the value of the `<select>` 2. React crashes with `NotFoundError: Node was not found` From what I can tell, the conditional value is necessary, and it must be three interpolated values. **What is the expected behavior?** React should not crash. **Which versions of React, and which…

### CASE-1087 · DOM Fixture Form Coverage: Restored State and Auto-fill
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬26 · closed · labels: Component: Build Infrastructure/Component: DOM/good first issue (taken)/Resolution: Stale
- **Excerpt**: Follow up from [link]][ref]. Presently, we don't have a manual fixture that ensures that form state is captured when the browser provides input on behalf of the user. - [ ] Restored form state - [ ] Autocomplete state **Other notes** As a reference point, I'd like to find some documentation around how restored state works. I think I might be using the wrong search terms. Does anyone have a link handy?

### CASE-1090 · Bug: MessageChannel in Scheduler prevents Jest test from exiting
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬25 · open · labels: Status: Unconfirmed
- **Excerpt**: React version: any Scheduler version: any up to current (0.23.0) ## Steps To Reproduce 1. Create Jest unit test. 2. Select JSDom as test environment so that runtime will not have `setImmediate` function. 3. JSDom still does not implement `MessageChannel` [link] If `MessageChannel` is required to test some important functionality, one can add an implementation from Node.js as recommended in comment [link] ```js window.MessageChannel = require('node:worker_threads').MessageChannel; ``` 4. Add Scheduler or React as a dependency and require it in the test or one of the files under test. 5. Run…

### CASE-1091 · DevTools: Failed to execute 'postMessage' on 'Window': #<HTMLAllCollection> could not be cloned.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬25 · closed · labels: Type: Bug/Component: Developer Tools
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug. **What is the current behavior?** New dev tools are working fine. But I have a particular component that, when it mounts, the dev tools no longer can inspect anything about it. When I select it, the right hand side just says "Loading..." and nothing ever loads. ![interactive]([link]) As you can see from the gif above, before I click on that particular component that seems to break, I have no errors in my console. But as soon as I click on the component that breaks (or any of its children) the number of console errors goes…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-1010 · useReducer's dispatch should return a promise which resolves once its action has been delivered
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍113 💬56 · open · labels: Type: Feature Request/Component: Hooks
- **Excerpt**: (This is a spinoff from [this thread]([link]][ref]).) It's sometimes useful to be able to dispatch an action from within an async function, wait for the action to transform the state, and then use the resulting state to determine possible further async work to do. For this purpose it's possible to define a `useNext` hook which returns a promise of the next value: ```js function useNext(value) { const valueRef = useRef(value); const resolvesRef = useRef([]); useEffect(() => { if (valueRef.current !== value) { for (const resolve of resolvesRef.current) { resolve(value); } resolvesRef.current =…

### CASE-1025 · Cannot use addons.Perf or addons.ReactTransitionGroup in AMD environment with 15.4.1
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍2 💬43 · closed · labels: Type: Regression
- **Excerpt**: I use `react-with-addons` in a RequireJS enviroment. If I try to use `React.addons.Perf`, I get a `ReferenceError: ReactDOM is not defined` from [link]]/blob/15-dev/src/umd/shims/ReactAddonsDOMDependenciesUMDShim.js#L26. This is a regression from 15.3.x.

### CASE-1028 · CSSTransitionGroup buggy due to transition events not firing reliably
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬42 · closed
- **Excerpt**: While trying to convince React to replace DOM nodes in-place (which seems is not supported), I've discovered something that looks like bugs. I've put up a demo on [link] . First of all, if a node gets replaced while animation is progressing, it is not removed. In the demo it means additional lines are created. As soon as the animation completes, the node usually goes away. The second "feature" here is that if you leave that demo running, change to another tab, wait 10 seconds and change back to the tab with the demo running, it will now have accumulated lots of "green items" which are…

### CASE-1070 · onChange handler for radio buttons does not fire according to spec.
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬29 · closed · labels: Type: Bug/Difficulty: starter/Component: DOM
- **Excerpt**: As described on [link] the onChange handler of an input should fire when the checked state changes. However, it actually fires when the radio button is clicked, In other words, it fails to fire when a checked radio button is unchecked (by checking a different radio button), and it fires even without a state change when a checked radio button is clicked. In short, it's missing checked transtions true->false, and it's reporting spurious transitions true->true.

### CASE-1077 · Bug: weird `useTransition` behaviour
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬27 · closed · labels: Status: Unconfirmed
- **Excerpt**: A couple examples of unexpected and seemingly broken `useTransition` behaviour # 1. `useTransition` doesn't work, if the component is suspended before `useTransition` call: **Sandbox:** [link] **Code:** ```js export default function First() { cache.read(); // <-- read from cache first const [startTransition, isPending] = React.unstable_useTransition(config); // <-- call useTransition after const [rev, setRev] = React.useState(0); function reload() { cache.expire(); startTransition(() => { setRev(rev => rev + 1); }); } return ( <div> {isPending ? "Pending" : "Not pending"} <br /> {rev} <br />…

### CASE-1088 · ReactCSSTransitionGroup leaves DOM nodes with both `leave` and `enter` classes
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: opera, react
- **Signals**: 👍0 💬26 · closed
- **Excerpt**: After sequence of fast changes (add/delete operations) nodes under `ReactCSSTransitionGroup` are left stuck with classes `example-leave example-enter-active example-leave-active`. Further state modifications do not change rendered DOM tree. Console has multiple warnings ``` transition(): tried to perform an animation without an animationend or transitionend event after timeout (5000ms). You should either disable this transition in JS or add a CSS animation/transition. ``` Test page: [link] 1. Place cursor in input field 2. Type l then type Backspace very fast 3. Repeat step 2 few times Easily…

### CASE-1089 · [Compiler Bug]: `enableFunctionOutlining` breaks `react-native-reanimated` API callbacks
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬25 · open · labels: Type: Bug/Status: Unconfirmed/Component: React Compiler
- **Excerpt**: ### What kind of issue is this? - [ ] React Compiler core (the JS output is incorrect, or your app works incorrectly after optimization) - [x] babel-plugin-react-compiler (build issue installing or using the Babel plugin) - [ ] eslint-plugin-react-compiler (build issue installing or using the eslint plugin) - [ ] react-compiler-healthcheck (build issue installing or using the healthcheck script) ### Link to repro [link] ### Repro steps Current version the Compiler started to transform `react-native-reanimated` API callbacks too much, breaking the code. I compared it with an older version…

### CASE-1096 · Quick removal and addition of animated CSS class results in no animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍6 💬25 · closed
- **Excerpt**: I am trying to call `setState({ flash: false })` followed by `setState({ flash: 'up' })` which should remove the flash class from the DOM element and add it again, therefore triggering the css animation defined on that class (it only works the first time). This is not working as expected, unless I introduce some timeouts. The first time the class is added, the animation is triggered. But subsequent calls to `componentWillReceiveProps` fail to trigger the animation. I'm not sure if this is an issue with the way React updates the DOM or an inherent limitation of CSS animations. I know React has…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-1016 · [New Docs] Wanted Guides
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍16 💬53 · closed · labels: Difficulty: starter
- **Excerpt**: We revamped the docs, but there are a few guides that are missing and that I think are essential. - [ ] Community section with good resources (e.g. [link]][ref]) - [ ] @user Glossary (similar to "Virtual DOM Terminology" that is now gone, but more friendly. Check [link] for inspiration.) - [ ] Troubleshooting (there are ~5 common issues we should explain right away, like wrong element casing, not loaded DOM container, missing React in scope, etc. See [link] for inspiration) - [ ] Accessibility - [ ] @user Manipulating Children (Using `cloneElement` and `Children` [link]][ref]) - [ ] "Portals"…

### CASE-1018 · React-test-renderer: support for portal
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍45 💬49 · open · labels: Type: Feature Request/Component: Test Renderer/React Core Team
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Report a bug **What is the current behavior?** This test ```javascript import React from 'react'; import { createPortal } from 'react-dom'; import renderer from 'react-test-renderer'; const Drop = () => ( createPortal( <div>hello</div>, this.dropContainer ) ); test('Drop renders', () => { const component = renderer.create( <div> <input /> <Drop /> </div> ); const tree = component.toJSON(); expect(tree).toMatchSnapshot(); }); ``` fails with > Invariant Violation: Drop(...): Nothing was returned from render. This usually means a return…

### CASE-1036 · document is not defined on server
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬39 · closed
- **Excerpt**: I saw there was a bug for this a year ago ([framework][ref]) and it was fixed. I am encountering it now on 0.13.1. I am running react on the server to generate html. On one of my parent components I have a variable whose value cannot be determined until it reaches some child component. So I need to implement some way for a child component to pass back data to its parent. I read [link] and I implemented it: Parent component passes callback function as a prop to child component. Child component calls callback in componentWillMount function (also tested calling callback in getInitialState).…

### CASE-1050 · WIP RFC: Improvements to the "ref" system
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬33 · closed · labels: Component: Component API
- **Excerpt**: This is a formal discussion to talk about the future of refs within React and how we can improve upon them. ## Current Behavior Currently, there are two ways of doing refs in React, string refs and callback refs. ### String refs String refs can be applied to "composite" components that are class components (i.e. `<MyComponent />`) and "host" components (i.e. `<span />`). An example of how this might look like for both types: ```jsx // host components class MyComponent extends React.Component { componentDidMount() { this.refs.input.focus(); } render() { return <div><input ref="input"…

### CASE-1075 · Uncaught Invariant Violation: Must be mounted to trap events when replacing an image with a link to an image
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬28 · closed · labels: Type: Bug/Component: DOM
- **Excerpt**: I'm having a hard time narrowing a repro down for this and there seem to be a lot of required moving parts, so I'll try to give as much information as I can. Relevant snippet of package.json: ``` "react": "15.0.0-rc.2", // repros w/ 0.14.7 as well "react-dom": "15.0.0-rc.2", "react-redux": "4.0.6", "react-router": "2.0.0-rc5", "react-router-redux": "4.0.0-rc.1", "redux": "3.2.1", ``` Our routes look something like this: ``` <Route component={App}> <Route component={LayoutNoFooter}> <Route component={Page2} /> </Route> <Route component={Layout}> <Route component={Page1} /> </Route> </Route>…

### CASE-1079 · State variable not updating in useEffect callback?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍59 💬27 · closed
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug, maybe? Although thinking about it more makes me think I've misunderstood something. **What is the current behavior?** `scroll` state variable updates in rendered output but not inside `handleScroll` event callback. I reckon this might be due to the fact that when `handleScroll` is defined `scroll` is `0`, but `scroll` is defined in the scope above and should be updated when the component is re-rendered. ```jsx import React, { useState, useEffect } from "react"; const Scroller = () => { const [scroll, setScroll] =…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-1043 · Add support for hydrating portals
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍44 💬36 · open · labels: Type: Feature Request
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** Probably bug, but arguably a feature request, I suppose. **What is the current behavior?** I've attempted my best effort at a fiddle that shows off the particular issue. Obviously server side rendering is impossible via JSFiddle, but the markup should be equivalent to having rendered `Test` into a div with id `test-1` during server side render. [link] As seen in the fiddle, an attempt to ReactDOM.hydrate() a portal results in: > `Warning:…

### CASE-1051 · Proposal: ReactDOMServer render to Stream
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍78 💬33 · closed
- **Excerpt**: tl;dr: I'd like to know how much enthusiasm there is on the core React team for accepting a PR with the ability to render markup to a stream. I don't need a guarantee, of course, but I'd like to get an sense if it's something the React team might do before spending a ton of time working on it. ### Background Currently, server rendering is accomplished by `ReactDOMServer.renderToString` or `ReactDOMServer.renderToStaticMarkup`, which are synchronous functions that return a string. The server render methods can be somewhat slow. Large (~500K) web pages can easily take over 100 or 200ms to…

### CASE-1068 · Unexpected warning when hydrating with portal and SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍12 💬29 · open · labels: Type: Bug/Difficulty: medium
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** *bug* **What is the current behavior?** Given the following (simplified) snippet: ```jsx class HoverMenu extends React.Component { render() { if (typeof document === 'undefined') return null const root = document.getElementById('root') return ReactDOM.createPortal(<div>Hello World</div>, root) } } class Para extends React.Component { render() { return ( <span> Some Text <HoverMenu /> </span> ) } } ``` where `div#root` is a valid `div` that exists, the following error is shown when hydrating after SSR: `Warning: Expected server HTML to…

### CASE-1071 · Bug: Uncaught TypeError: Cannot read properties of null (reading 'useContext') when importing react-router-dom
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬28 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: <!-- I have created several react apps and whenever I go to import the react-router-dom by installing using 'npm i react-router-dom', I receive this error 'Uncaught TypeError: Cannot read properties of null (reading 'useContext')' and this one 'Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received'. I have tried several solutions listed online to no avail. I am not breaking the rules of hooks and I do not have multiple or mismatched versions of React. --> React version: ## Steps To Reproduce…

### CASE-1078 · SSR: Cannot set property 'memoizedState' of null
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍16 💬27 · open · labels: Type: Bug
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** A bug? **What is the current behavior?** > Cannot set property 'memoizedState' of null **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem. Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Paste the link to your JSFiddle ([link]) or CodeSandbox ([link]) example below:** ```js const processLink = html => { return…

### CASE-1081 · "Unable to find element with ID" when re-rendering server generated content that contains a style tag
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍24 💬27 · closed · labels: Status: Unconfirmed
- **Excerpt**: **Do you want to request a _feature_ or report a _bug_?** This is a bug. **What is the current behavior?** We server-render a page that has a style tag and the style tag is created using `React.createElement`. When that later gets re-rendered without a `style` element we see an error in the console: ![capture]([link]) Note that this only happens when we server-render that page. If we turn off server rendering the error goes away. The DOM looks like this: ![capture]([link]) The error also goes away if we do: ``` <style dangerouslySetInnerHTML={{__html: children[0]}} /> ``` Instead of: ```…

### CASE-1093 · Bug: `validateDOMNesting` Hydration failed
- **Principles**: P-F4 · **Env**: react, next.js
- **Signals**: 👍5 💬24 · closed · labels: Status: Unconfirmed
- **Excerpt**: Having an invalid DOM structure, normally triggers `validateDOMNesting`, but when combined with SSR, this also triggers `Hydration failed`, and `There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering`. I assume the above is a combination of two things, and error being raised by React, and Next.js not handling it well. ## The React Error, as far as I know React version: 17.0.2, 18.0.0 and 18.1.0. ## The current behaviour In SSR frameworks such as Next.js, an error raises claiming that `Hydration failed…

### CASE-1097 · Bug: New Customizable Select: option containing span, Select containing button causes hydration warning
- **Principles**: P-F4, P-G4, P-E3 · **Env**: chromium 134, react
- **Signals**: 👍32 💬23 · open · labels: Status: Unconfirmed
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> Customizable select elements have received support in Chromium 134: [link] [link] Creating selects with appearance base-select work fine in React, however an error is logged in dev mode in validating DOM nesting. ``` In HTML, <span> cannot be a child of <option>. This will cause a hydration error. ``` and ``` In HTML, <button> cannot be a child of <select>. This will…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-1044 · Can we have React.Children.filter?
- **Principles**: P-D4, P-F1, P-F5 · **Env**: react
- **Signals**: 👍30 💬35 · closed · labels: Type: Feature Request
- **Excerpt**: My use case: wrapping all **non-empty** children into divs. ``` js render() { return ( <div style={rootStyle} onWheel={this.handleWheel}> {Children.map(this.props.children, this.wrapChild)} </div> ); }, wrapChild(child, index) { if (!child) { // I know this is probably wrong kind of comparison; don't care return ( <div style={this.getChildStyle(index)}> {child} </div> ); } }, ``` This is all nice but I also need to know **how many valid children I have wrapped**. `Children.count` will return the number of children including the “empty” children. I want to strip them out. Can we have…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-1057 · TypeError: Cannot read property '_currentElement' of null
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍4 💬32 · closed
- **Excerpt**: # From maintainers: if you have this problem, please see the explanation in [link]][ref][ref]. Test case: [jsFiddle]([link]) The error is in this function, internalInstance is null. ``` js /** * Releases any resources allocated by `mountComponent`. * * @user * @user */ unmountComponent: function(internalInstance) { ReactRef.detachRefs(internalInstance, internalInstance._currentElement); internalInstance.unmountComponent(); } ``` I managed to "fix" the bug by simply checking if internal state is not null but that requires modifying react. Other mentions of this bug are listed below. - [link] -…

### CASE-1058 · useEffect memory leak when setting state in fetch promise
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬31 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Reporting a possible bug **What is the current behavior?** My app renders fine with no errors but I can't seem to figure out why I keep getting this warning: index.js:1446 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in ArtistProfile (at App.js:51) in component (created by Route) api-calls.js (Here's a link): [link] App.js ```javascript class App extends…

### CASE-1067 · setState in useEffect causing a "React state update on an unmounted component" warning
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬29 · closed · labels: Type: Bug
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** The warning is triggered after an intricate sequence of events. I stumbled upon it by accident, assumed it was an error in my code, but then step by step removed everything in my application until I was left with a fairly small bit of code that doesn't seem to be doing anything illegal from the API point of view, yet is triggering a warning. **If the current behavior is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem:** [link] The example is my real…

### CASE-1072 · Bug: React 18 Strict mode does not simulate unsetting and re-setting DOM refs
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍44 💬28 · open · labels: Type: Needs Investigation/React 18
- **Excerpt**: <!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 18.1.0 ## Steps To Reproduce 1. Use `<React.StrictMode>` 2. Set a ref to a JSX element in a component 3. Create a `useLayoutEffect`/`useEffect `in the component where the returned cleanup function console logs the ref 4. Save and refresh the app 5. You should have access to the ref element in the the `useLayoutEffect`/`useEffect `cleanup function during…

### CASE-1074 · a component is mounted twice
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬28 · closed · labels: Type: Needs Investigation/Component: Reconciler/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> ***bug*** **What is the current behavior?** For the same component, `componentDidMount` is called multiple times, without calling `componentWillUnmount` , when using `ReactDOM.unmountComponentAtNode` . You can use the link below to reproduce it: [link] **What is the expected behavior?** `componentWillUnmount` should be called before calling `componentDidMount` again. **Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?** 16.x

### CASE-1080 · nested context does not update any longer
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬27 · closed · labels: Resolution: Needs More Information
- **Excerpt**: **Do you want to request a *feature* or report a *bug*?** Bug **What is the current behavior?** Nested context consumers do not seem to update leaving higher up updates stale: ![context]([link]) [link] **What is the expected behavior?** The critical piece of code that composes multiple consumers is this one: ```jsx let values = [] return [...contextRefs, Wrapped].reduceRight((accumulator, Context, i) => ( <Context.Consumer> {value => { values[i] = value if (accumulator === Wrapped) { let context = mapContextToProps(...values, props) context = typeof context === 'object' ? context : { context…

### CASE-1085 · Event listener leak
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬26 · closed · labels: Type: Needs Investigation/Resolution: Stale
- **Excerpt**: <!-- Note: if the issue is about documentation or the website, please file it at: [link] --> **Do you want to request a *feature* or report a *bug*?** bug **What is the current behavior?** Accumulating listeners after interacting with input elements and then un-mounting them. If the elements are not interacted with the listener is garbage collected correctly. Here is a screenshot of the accumulation in a production build: ![screen shot 2018-05-31 at 5 13 35 pm]([link]) **If the current behaviour is a bug, please provide the steps to reproduce and if possible a minimal demo of the problem.…

### CASE-1099 · Feature request: Consider supporting AbortSignal/AbortController for cleanup
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍17 💬23 · closed · labels: Status: Unconfirmed/Resolution: Stale
- **Excerpt**: Hey, I've recently worked on adding support for `AbortController/AbortSignal` in a bunch of Node.js APIs and some DOM ones and I think it would be really cool if React added support to the web platform's cancellation standard primitive. Basically the ask is: ```js //before useEffect(() => { const ac = new AbortController(); (async () => { const data = await fetch('./api', { signal: ac.signal }).then(x => x.json()); setData(data); })(); return () => ac.abort(); }); //after useEffect(async (signal) => { const data = await fetch('./api', { signal }).then(x => x.json()); setData(data); }); ``` Or…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-1094 · Bug: Devtools' update-notifier usage is overly eager
- **Principles**: P-A5 · **Env**: react
- **Signals**: 👍0 💬24 · closed · labels: Component: Developer Tools/good first issue
- **Excerpt**: When I run the devtools, I get the `update-notifier` message: ``` ╭────────────────────────────────────────╮ │ │ │ Update available 4.4.0 → 4.9.0 │ │ Run npm i react-devtools to update │ │ │ ╰────────────────────────────────────────╯ ``` I appreciate the goal of this message. However, the suggested command to run is incorrect for my repo. We use yarn, not npm. And we use a monorepo. This is confusing for devs who are new to the repo. Would it be possible to suppress the `update-notifier` message? The team that manages usage of react-devtools in our tool chain is happy to stay on top of…

