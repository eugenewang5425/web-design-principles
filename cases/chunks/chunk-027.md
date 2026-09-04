# Case Chunk 027 — Round 27

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3601 · Problem with nested ControlValueAccessor and Validation
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍17 💬14 · open · labels: area: forms/state: confirmed/forms: validators/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? No ### Description In Reactive Forms, if you have two or more nested custom form components that implement ControlValueAccessor and Validator, the outer one doesn't update its validation status until you make a change in the inner component. It seems the validation runs initially only once from the outer component to the inner one, so if the inner component initially is invalid the outer doesn't know anything until the next validation cycle. In the example provided, initially "user-data" is invalid, so…

### CASE-3602 · emitEvent option in forms broken in Angular 12
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: area: forms
- **Excerpt**: # Bug Report ### Affected Package `@user/forms` ### Is this a regression? Yes, it was working for us in ng11 ### Description after upgrading to Angular 12 we started to have a problem with our material date range component. My investigation leads me to using `emitEvent: false` option in (form control).setValue method which now doesn't prevent the event to be emitted. Please see the stackblitz reproduction below. There is a setter ``` private set selectedRange(dateRange: DateRange) { this.dateRangeForm.setValue( { start: dateRange.start, end: dateRange.end }, { emitEvent: false, onlySelf: true…

### CASE-3604 · Improve DX for identifying missing or unused module imports
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍41 💬14 · closed · labels: feature/area: core/area: language-service/core: directive matching/feature: under consideration
- **Excerpt**: # 🚀 feature request ### Relevant Package This feature request is for @user/core or @user/compiler (?) ### Description Angular will currently detect (and complain) if a directive with an input binding exists, but the directive is not known (due to its defining module not being imported): ``` <app-child [myAwesomeDirective]="42"></app-child> ``` However, this doesn't work for directives without an input binding, i.e. ``` <app-child myAwesomeDirective></app-child> ``` The reason for this is – I believe – that `myAwesomeDirective` is treated as an HTML attribute (which makes sense), and HTML…

### CASE-3619 · Control value isn't reset when a control is hidden with *ngIf
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: area: forms
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [X] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior I have a control on the form. Attached to it is a directive *ngIf. I show/hide this control based on a certain expression. When the condition evaluates to true, the control is…

### CASE-3628 · Typescript FunctionComponent
- **Principles**: P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍3 💬16 · closed · labels: types
- **Excerpt**: Hi, maybe I'm missing something but here is the situation. I have a functional component with this signature: ``` javascript const Input : FunctionComponent<Props> = (props: Props) ``` Then using Storybook for Preact I have the following story ``` javascript storiesOf('Input', module) .add('Sample', () => <Input type="text" />) ``` And in this situation I get a typescript validation error with the following message at the story level. `JSX element type 'VNode<{}>' is not a constructor function for JSX elements.` `Type 'VNode<{}>' is missing the following properties from type 'Element':…

### CASE-3638 · Inconsistent `setState` behavior between React and Preact (breaking react-select)
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: compat
- **Excerpt**: I'm using [react-select]([link]) with Preact (+ Preact-compat) and the arrow to open the drop down is not working. This is because of the [following code in React Select]([link]): ```js handleMouseDownOnArrow (event) { // if the event was triggered by a mousedown and not the primary // button, or if the component is disabled, ignore it. if (this.props.disabled || (event.type === 'mousedown' && event.button !== 0)) { return; } // If the menu isn't open, let the event bubble to the main handleMouseDown if (!this.state.isOpen) { this.setState({ isOpen: true, }); } // prevent default event…

### CASE-3643 · Issue with onBlur, onClick and re-rendering events order on mobile browsers
- **Principles**: P-G4, P-E3 · **Env**: react, mobile
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** I have an issue started with v11.10.0 happening on input elements. This happens **only** on mobile browsers. I have an input field and a button. I'm setting a value into react state on the onBlur event of the input, and I expect a re-rendering and the onClick events should read the proper value from the state. After upgrading to version v11.10.0 the order is different: it sets the value into state on the onBlur event, then the onClick happens reading an old value from state, and finally it re-renders.…

### CASE-3645 · Can't implement masked input
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍6 💬11 · closed · labels: needs-more-info
- **Excerpt**: I am trying to use [Rifm.js]([link]) library to create masked input. The library works with React, but fails to work with Preact/compat. The demo is here: [link] Source code: [link]

### CASE-3647 · [10.0.0-alpha.2] Controlled form field rendered incorrectly after user input is "undone" via state
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: I have implemented a somewhat "recalcitrant" form field, which in certain cases refuses to leave itself with the value a user set. This select group is fully "controlled" in that it uses `selected`/`oninput` rather than `defaultSelected`. This usually works except in one case: If, *after* a user selects some other value, the value that I then render happens to be the value the group had *before* they selected, the user's selection is left as-is. E.g. say I have a select box with four options: none/red/green/blue. Whenever the user selects "none" I choose "blue" instead (bear with me; the…

### CASE-3648 · Range Input: Order of Attributes Bug
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: bug/help wanted/beginner-friendly
- **Excerpt**: I stumbled upon a bug while working with Preact today. If you create an input range, the initial render of the slider position may be wrong, depending on the order of the attributes. The `value` attribute needs to be set after `min`/`max`/`step`. If `value` is applied before `min`/`max`/`step` are properly set, the value will be forced to match the default min=0/max=100/step=1 on a slider. E.g. if you create two sliders: ```js // This one renders with the slider at 0 <input type="range" value={0.5} min="0" max="1" step="0.05" /> // This one renders with the slider at 0.5 <input type="range"…

### CASE-3665 · <select> elements aren't selecting a matching value after update
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: bug
- **Excerpt**: preact version: `7.1.0` **Update:** I created a [Codepen demo]([link]) showing the behavior. I have a component that renders three `<select>` elements representing a users Google Analytics account tree structure (accounts > properties > views). When the selected account is updated, the property and view `<select>`s should update accordingly, but in many cases an empty select is displayed. (Note the empty select is never displayed on the initial render, only after user updates). Steps to reproduce: 1) Include the `ViewSelector` component code at the bottom of this issue in a Preact app. 2)…

### CASE-3671 · spellCheck property not working
- **Principles**: P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍0 💬8 · closed · labels: has fix
- **Excerpt**: I am using TypeScript to bundle JSX for use with preact. I noticed that the "spellCheck" property on input elements is not working correctly. `<input spellCheck={false} />` doesn't even render the property in the DOM, `<input spellCheck="false" />` works, but there is a TypeScript error because it doesn't fit the definition.

### CASE-3673 · 'markerWidth' and 'markerHeight' svg attributes getting converted to 'marker-width' and 'marker-height'
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬8 · closed · labels: bug/beginner-friendly
- **Excerpt**: The SVG attributes `markerWidth` and `markerHeight` getting converted to `marker-width` and `marker-height` which are invalid attributes. Input: ``` <marker id="arrow" viewBox="-10 -10 20 20" markerWidth="20" markerHeight="20" /> ``` Preact output: ``` <marker id="arrow" viewBox="-10 -10 20 20" marker-width="20" marker-height="20" /> ```

### CASE-3674 · preact with rollup
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Hi, I have attempted to follow Getting started by doing things from scratch here and run into a problem: [link] My Preact code above seems to render just fine example from getting started: ``` import { h, Component, render } from '[link] // Create your app const app = h('div', null, 'Hello World!'); // Inject your application into the an element with the id `app`. // Make sure that such an element exists in the dom ;) render(app, document.getElementById('app')); ``` but the moment I go to Class form it fails to call render method in App class. That's the state I have left the code in my…

### CASE-3680 · `select` value update fails when set to a newly added `option` simultaneously
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Imagine you have a `select` element and its `option` elements in different Preact components, both subscribed to the same signal (or reading from the same context). ```jsx const Options = () => items.value.map((item) => ( <option key={item.id} value={item.id}> {item.id} </option> )); const Select = ({ children }) => { const selectedItem = items.value.find((item) => item.selected).id; return <select value={selectedItem}>{children}</select>; }; <Select> <Options /> </Select> ``` If you try to add a new…

### CASE-3685 · onCompositionStart, onCompositionEnd, and onCompositionUpdate are bound to the wrong case-sensitive event name.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Reproduction ### Steps to reproduce - Add an onCompositionStart to a Preact dom element - Try using an input method on that input, making sure to start a composition. ### Expected Behavior The onCompositionStart handler should be called. ### Actual Behavior The onCompositionStart handler doesn't get called because Preact binds it to `"CompositionStart"` rather than `"compositionstart"` The same applies for `"compositionend"` and `"compositionupdate"`.

### CASE-3687 · IE11 throws on input type="date"
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: bug/beginner-friendly
- **Excerpt**: Reported via slack: >charlie 9:56 PM going for a good head scratcher.. If I I have <input type="date" /> IE11 just breaks with a "Error: Invalid argument." error (changing the type to text brings it back to life). Fine in 8. While the type isn't supported, I'd expect IE to just gracefully degrade back to a text input. Had a quick look into it and IE 11 throws when you try to use the setter directly with a value it doesn't support. ```js // Throws input.type = "date"; // Works input.setAttribute("type", "date"); ```

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3603 · More infos/tutorials about Protractor and e2e tests
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: # 📚 Docs or angular.io bug report ### Description Hello Angular team :). First I want to thank you about your amazing work with Angular ! Today I want to learn how to use e2e tests in my NG projects but it's very hard to found good resources. Your website explains very well how to unit test but not how to e2e test. There are several questions asked on stackoverflow but there are mostly related to angularJS. ## 🔬 Minimal Reproduction ### What's the affected URL? [link] ### Reproduction Steps <!-- If applicable please list the steps to take to reproduce the issue --> None, there isn't any e2e…

### CASE-3657 · Uncaught Error: Component's "only-when-overflow" property should be a function, but got [boolean] instead
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** I'm using a custom web component called `my-tooltip` and there's a boolean attribute called `only-when-overflow`.When using the `only-when-overflow` attribute i'm getting the below error. ``` Uncaught Error: Component's "only-when-overflow" property should be a function, but got [boolean] instead <my-tooltip only-when-overflow="true" for="a1a1">..</my-tooltip> ``` **To Reproduce** We usually use a attribute which starts with `on` to handle events eg: `onClick, onKeyPress` which requires function. Here…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3605 · HTTP Module using wrong Content-Type for multipart/form-data
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, angular, webkit
- **Signals**: 👍0 💬14 · closed · labels: area: common/http/P4
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is is affecting package @user/common/http ### Is this a regression? Not sure, only tested on Angular version 9.1.7 ### Description Currently trying to upload a large file from Angular v9.1.7 to a Django API. I've been receiving the following error: `Multipart form parse error - Invalid boundary in multipart: None` Chrome's dev tools request header shows: `Content-Type: multipart/form-data` But should resemble the following: `Content-Type: multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL` See the full discussion for this issue…

### CASE-3609 · Uncaught SyntaxError: Unexpected token '<' error after redirect to Angular PWA site after every new deployment
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, angular
- **Signals**: 👍0 💬14 · closed · labels: area: service-worker
- **Excerpt**: # 🐞 bug report @user/pwa ### Description After every new deployment on production environment, we are facing Unexpected token error after being redirected from Authentication server ## 🔬 Minimal Reproduction (Error Screenshot) ![image]([link]) ## 🔥 Exception or Error <pre><code> Uncaught SyntaxError: Unexpected token '<' </code></pre> ## 🌍 Your Environment Angular v8 Browser: Chrome: Version 73.0.3683.103 (Offizieller Build) (64-Bit)

### CASE-3611 · Zone: No change detection after Electron (popup)menu events in Angular/cli project
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, angular
- **Signals**: 👍0 💬14 · closed · labels: area: zones
- **Excerpt**: # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> The issue resurfaces when using package @user/cli ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> I don't know, I have never used angular-cli before. However, it **does** work in Angular projects created without @user/cli, but not in projects generated using 'ng new' ### Description Change detection does not work in native Electron (popup)menus events when project is created using 'ng new'. The issue is the same as…

### CASE-3613 · Angular.io website not loading on chrome 56 on ios 9.3.5
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 56, ios 9, angular
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3614 · aio: ux problem with interaction of site search field and browser search field
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, desktop
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix/freq2: medium
- **Excerpt**: ## Current behavior Chrome search on width screen >1280 overlaps search. ## Expected behavior The search should be visible. The SearchBar should not be right aligned. Browser: - [ X] Chrome (desktop) version XX ![image]([link])

### CASE-3616 · Safari 10.1.2, localhost:4200 results in ReferenceError: Can't find variable: SockJS
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari 10
- **Signals**: 👍6 💬14 · closed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3617 · Angular restarts unexpectedly only in Chrome Browsers (all versions)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular
- **Signals**: 👍2 💬14 · closed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3624 · App keeps re rendering causing chrome to crash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, webpack
- **Signals**: 👍0 💬19 · closed · labels: needs-more-info
- **Excerpt**: We have a medium React application and planning to port it to preact libs uses - React, Redux and React Native Web, webpack and babel config i have added the following config ``` const commonResolveBlock = { alias: { "react-native$": "react-native-web/dist/index.js", // we use React Native Web 'victory-native': 'victory', 'react$': 'preact/compat', "react-dom$": "preact/compat", "react-dom/unstable-native-dependencies$": "preact-responder-event-plugin" }, }; ``` Post that i have disabled hot reload as React Hot reload has some problem with preact. > The app is compiling fine without any…

### CASE-3625 · Random wrong DOM elements order
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox
- **Signals**: 👍3 💬17 · closed
- **Excerpt**: Hi there, I'm seeing incorrect ordering of DOM elements in Firefox on Mac when rendering the below component. It's being rendered inside a Suspense and a fragment if this helps. ```jsx const CookieWidget = ({ type = "banner", location = "bottom", onAccept = noop, backdrop = false, ...props }) => { const [Widget, widgetProps] = useCookieWidget(type, location); return ( <> {!!backdrop && <Backdrop show />} <Widget {...props} {...widgetProps} onAccept={onAccept} /> </> ); }; ``` This is the screenshot from rendered DOM elements: ![image]([link]) They should be rendered the other way around, the…

### CASE-3627 · [Bug] fail to render DOM correctly for component with key
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬17 · closed · labels: bug
- **Excerpt**: 1. Render [VNode 1, VNode 2, VNode 3] 2. Update props and render [VNode 1, VNode 2, VNode 4] 3. Result in DOM [VNode 4] only All VNodes have unique key Remove key will work Real life example: [link] 1. install the extension (npm install, npm install -g gulp, gulp dev, load __dev in chrome extension manager) 2. Open one folder in the root (let call it folder X) 3. Open a folder inside that folder X 4. Open another folder inside folder X 5. That "another folder" will be the only folder on the right, search field and the root folder will be removed

### CASE-3633 · Possible memory leak
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍0 💬14 · closed · labels: 11.x
- **Excerpt**: **Describe the bug** When i use preact with a virtualized list, I found memroy not gabage collected. this may cased by a chrome issue: The MouseEventManager keeps removed DOM nodes alive until subsequent click [link] if there is no click event for a while , (such as scrolling infinite card list ), the memory usage grows until next click.

### CASE-3634 · Errors thrown in `render()` swallowed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari
- **Signals**: 👍0 💬14 · closed · labels: has fix
- **Excerpt**: Since `Promise.resolve().then(...)` is used for deferring to another tick, any errors thrown inside `render () { ... }` gets silently thrown away. At least in Safari TP 15, I think that some other browsers reports unhandled rejections. This is very unintuitive when developing since there is no way to see what went wrong.

### CASE-3636 · Preact + media-chrome: Props are not passed correctly
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue (using Preact v10.13.1) **Describe the bug** When using Preact with react components in `media-chrome` package, the props are not passed to the component correctly. For example, the rates for `MediaPlaybackButton` couldn't be set correctly. (it works correctly when using React) **To Reproduce** StackBlitz: [link] Steps to reproduce the behavior: 1. Click on playback rate button "1x" 2. The next rate is "1.2x" **Expected behavior** What should have happened when following the steps above? - The next playback rate is…

### CASE-3649 · Element.remove() is unsupported in Internet Explorer
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: While testing **8.0-beta** in IE11 I've run into a problem in `unmountComponent()` calling `.remove()` on `base`: [link] Changing that line to: ```js base.parentNode.removeChild(base); ``` ...fixes the problem. I'm not sure if 8.0 is supposed to support IE, but worth keeping in mind.

### CASE-3652 · Preact onClick events working with delay in iOS webview on iPhones
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, android, ios 16, react, webview, iphone, mobile
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: **Click events working with delay in latest iOS webview applications running on PREACT version 10.13.1** I have created a application in preact that runs in webview inside native mobile applications. The click events of my code are not working correctly os iPhones however, working fine on all android devices. I tested the behaviour in 3 different iOS versions 16.5.1, 16.6.1 and iOS 16.7 but didn't work on any. My code is simple preact click event handler on a `div`. ``` const ProfileComponent = ({ clickEventHandler, title }) => { return <div onClick={clickEventHandler && clickEventHandler}>…

### CASE-3655 · Preact routing doesn't work well with Gatsby
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ## Description When I click on link (Gatsby Link component), URL in searchbar is changing, but page doesn't change ### Steps to reproduce - Install Preact (using official plugin [instruction]([link])) - Use a Link component on the page - Run build command - Click on the link ### Expected result URL changes and new page appears. ### Actual result Page remains, but you'll get a new URL. ### Environment ``` System: OS: Windows 10 CPU: (4) x64 Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz Binaries: npm: 6.9.0 - C:\Program Files\nodejs\npm.CMD Languages: Python: 2.7.16 Browsers: Edge: 44.18362.329.0…

### CASE-3662 · React DevTools doesn't work with 'preact/debug' included with Preact X
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬9 · closed · labels: needs-more-info
- **Excerpt**: React DevTools doesn't work with Preact X (10.0.0-rc.0). I imported 'preact/debug' but React doesn't appear in Chrome devtools, and extension says that "This page doesn’t appear to be using React. " I've tried both `import 'preact/debug'` in my index.js and `require('preact/debug')`, but none of these ways have taken any effect. I import `preact/debug` before `preact`, as it said in docs.

### CASE-3672 · An effect that inserts iframes may run twice in Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chrome, react
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Reproduction Here's a codesandbox showing a Preact effect running twice in Safari: [link] | Chrome result | Safari result | | ----- | ----- | | <img width="477" alt="safari-duplicate-effects - CodeSandbox 2020-11-04 12-58-32" src="[link]> | <img width="447" alt="safari-duplicate-effects - CodeSandbox 2020-11-04 13-00-00" src="[link]> | The root cause appears to be Safari running pending promises when an iframe is inserted into the DOM. You can verify by running this code in Safari's dev console: ``` // Inserting a div results in panda/monkey defer =…

### CASE-3678 · lose focus after inputing one key in newitem input box with firefox browser
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, chrome, linux
- **Signals**: 👍0 💬8 · closed · labels: bug/help wanted
- **Excerpt**: open [link] in Firefox Browser (ESR 38.5.0 for Linux) and check adding item of the example, after inputing any key, the focus will lose. But it works well without the same issue in Chrome Browser.

### CASE-3679 · VNode leak using Context
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** This is a followup to another leak: VNode leak in Context · Issue [ref] · [framework]. There is a VNode memory leak occurring when using Context Provider with state updates. After clicking a button that triggers a state change, the previous VNode hierarchy is still retained in memory, which can be observed in Chrome Dev Tools. This results in duplicate VNodes including 2 `<button>`s, 2 `<App>`s, 2 `<Context>`s, 2 `<RouterContent>`s and 2 Text nodes (both the old and new text content). **To Reproduce**…

### CASE-3692 · `onBeforeInput` needs to be monkey patched
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, react
- **Signals**: 👍4 💬7 · closed · labels: bug/compat
- **Excerpt**: Although it is part of the spec the `beforeinput` event is only available in Chrome at the time of this writing. Neither Firefox nor Safari or IE implement it. But although Chrome has it, it seems to have issues because it can't be prevented. This breaks the popular [slate-react]([link]) bindings for the `slate` rich-text-editor component. We need to normalize the event in compat. There are a few hints on how to do so in the [react code base]([link]), but they're somewhat outdated and we need to reassess the current support status in browsers.

### CASE-3697 · component including '<Provider>' (preact-redux) replaced while rendering with merge
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, react
- **Signals**: 👍0 💬7 · closed · labels: bug/has fix
- **Excerpt**: This issue might related to [ref] and [ref] or might be an issue to [preact-redux]([link]). dependence: - [email] - [email] - [email] - [email] environment: - Chrome Version 52 Here is the example: ``` html <body> <!-- render from server --> <div id="container">${ssrHtml}</div> </body> ``` ``` jsx class ChildComponent extends Component { render() { return <div>child</div>; } } const Child = connect(reducer)(ChildComponent); class App extends Component { render() { return (<div id="my-app"> <Provider store={store}> <Child /> </Provider> </div>); } } // delay 7s to see what happen while…

### CASE-3699 · Rendering components with identical children into the same parent container breaks
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍0 💬7 · closed · labels: bug/important
- **Excerpt**: If you try to render two different components into the same parent container multiple times with shared child components the browser will throw an error: `Uncaught HierarchyRequestError: Failed to execute 'replaceChild' on 'Node': The new child element contains the parent.` ``` "preact": "4.6.2", "preact-render-to-string": "2.4.0" ``` `Chrome Version 50.0.2661.75 (64-bit)` This is easier to explain with some code: ``` JavaScript class Intro extends Component { render(props) { return (<span>Hello</span>) } } ``` ``` JavaScript class Index extends Component { render(props) { return ( <div>…

### CASE-3700 · preact/compat: requestAnimationFrame works not the same way as in React 19
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Apparently rendering works differently in react and preact in relation to `requestAnimationFrame` In Firefox `requestAnimationFrame` with `useLayoutEffect` works not the same way as in React 19 Here is a demo of problem: [link] There is no same problem with React 18/19 **To Reproduce** Here is an example repo with simple modal component with implemented open/close transitions: [link] Opening transition is not working in Firefox with `preact/compat` - there is no transition visually. By process of…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3606 · Enabled Ivy and postinstall:"ngcc", facing build duplicate identifier issue for ngx-monaco-editor anf ngx-img-cropper
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 I have upgraded angular to 9. Trying to add new Ivy feature, but I am facing duplicate identifier issue for ngx-monaco-editor and ngx-img-cropper and sometimes for ag-grid-community. The issue occures when adding "ngcc" in postinstall script. This issue is getting while building using ng build. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package ngx-monaco-editor ngx-img-cropper ag-grid-community. ### Is this a regression? No ### Description I have upgraded angular to 9.…

### CASE-3607 · images not rendering in Property Binding example
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix/freq1: low/state: has PR
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 📚 Docs or angular.io bug report ### Description In Template Syntax, the Property Binding example images (in the StackBlitz example) aren't rendering. ## 🔬 Minimal Reproduction ### What's the affected URL?** [link] ### Reproduction Steps** <!-- If…

### CASE-3612 · docs(start): StackBlitz devDependencies are listing previous Angular version
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix/feature/freq1: low/state: needs eng input/P4
- **Excerpt**: # 📚 Docs or angular.io bug report ### Description The `devDependencies` in `package.json` in the Getting started guide are listing Angular version 7. ## 🔬 Minimal Reproduction ### What's the affected URL?** - [link] - [link] ### Reproduction Steps** Click the _Click here to create a new project in StackBlitz._ link. ![image]([link]) ### Expected vs Actual Behavior** Expected Angular version 8 in `devDependencies` in `package.json`. Instead, I got version 7: ``` { "name": "gaarjjedxev.angular", "version": "0.0.0", "private": true, "dependencies": { "rxjs": "6.5.2", "tslib": "1.10.0",…

### CASE-3621 · preact ignores/rewrites <img> dimensions?
- **Principles**: P-A3, P-H1 · **Env**: react, webpack
- **Signals**: 👍0 💬28 · closed
- **Excerpt**: I have a React-managed page with some 175+ images, and after switching from `react` to `preact-compat` (using the webpack alias solution) *all* my images come out as `<img src="..." width="0" height="0">` in the DOM, despite having defined dimensions in the JSX source code (e.g. `<img src="..." width="100px" height="50px"/>` etc) - is there any reason why it does this? Because that seems like a pretty crazy bug.

### CASE-3622 · Error: Hook can only be invoked from render methods.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍6 💬23 · closed · labels: has fix
- **Excerpt**: **Describe the bug** I upgraded to nextjs v12 and got this error: `Error: Hook can only be invoked from render methods.` ![image]([link]) The error gets thrown on every other react hook as well. **To Reproduce** store.js ```js import { createContext } from "preact"; import { useReducer, useContext } from "preact/hooks"; const reducer = (state, action) => { switch (action.type) { case "filter": return { ...state, filter: action.data }; default: return; } }; const initialState = { filter: { category: null }, }; const StoreContext = createContext(initialState); export function…

### CASE-3635 · Render problem since Preact 10.28.0
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: compat
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Some render behavior become strange since Preact 10.28.0. It all works with older versions. ![Image]([link]) *Element disappear when slide list fastly with Preact 10.28.0* ![Image]([link]) *All works with Preact 10.27.2* **To Reproduce** Here are two codepen examples which has only version difference [All works with Preact 10.27.2]([link]) [Element disappear when slide list fastly with Preact 10.28.0]([link]) I’d be glad to help diagnose and debug the problem, with my respect for your team’s work!

### CASE-3642 · [preact/compat] @user/react-tooltip immediately hide tooltip after hover on element
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: compat
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Radix tooltips immediately closing after hover on element <img width="639" alt="CleanShot 2022-11-18 at 16 34 03@user" src="[link]> ![CleanShot 2022-11-18 at 16 37 17]([link]) **To Reproduce** [link] Steps to reproduce the behavior: 1. Hover on button 2. You will see that tooltip will be visible for just a moment **Expected behavior** Expected that tooltip will be visible all time when cursor is hover button

### CASE-3644 · CSS Attribute Selector Not Working Correctly with Value, Different React/Preact Behavior
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: bug
- **Excerpt**: preact 10.5.7 ### Reproduction [Minimal Reproduction Repo]([link]) To reproduce, clone the minimal repo, install dependencies, then run `npm run watch` to start a local development server. You can switch the build from Preact to React by commenting out two lines in `rollup.config.js` to compare and constrast behaviors between the two. ```javascript alias({ entries: [ { find: 'react', replacement: 'preact/compat' }, // comment out this line to see the React version { find: 'react-dom', replacement: 'preact/compat' }, // and this one ], }), ``` [I made a small video to compare the two in…

### CASE-3646 · TypeError: Cannot read property 'getChildContext' of undefined when trying to switch to Preact existing project (with redux)
- **Principles**: P-A3, P-H1 · **Env**: react, webpack
- **Signals**: 👍10 💬11 · closed
- **Excerpt**: Ahoy. I am currently trying to switch existing project (react v16.8 + react-redux v7.1) to preact (trying v10) by using `preact` & `preact/compat` aliases in webpack config. And encountering next problem on application start -> ```JavaScript TypeError: Cannot read property 'getChildContext' of undefined ``` caused by usage of `Provider` component (from `react-redux`). <img width="785" alt="Screenshot 2019-10-30 at 17 01 21" src="[link]> Code itself -> ```JavaScript import React from 'react'; import { Provider } from 'react-redux'; import { PersistGate } from 'redux-persist/integration/react';…

### CASE-3658 · useId spews out identical ids
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: preact 10.11.2 preact-compat 3.19.0 ```javascript const C1 = () => { const id = useId(); return <h2> {id} </h2>; }; const App = () => { return ( <> <h1> TEST </h1> <div> <C1 /> </div> <div> <C1 /> </div> </> ); }; ``` ![image]([link]) [link]

### CASE-3660 · Suspense: DOMException: Failed to execute 'insertBefore' on 'Node'
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** If there are multiple components that suspended at the same time and tried to resolve at the same time, there's a chance that only one of the components will successfully re-render while the rest stays in their fallback state. I'm not sure the specificity but I think one of the reasons is that Preact fails to match the component vdom to the actual dom node. Once it fails to resolve, it throws this error: ![image]([link]) This may also happen if one of the components, that isn't suspending, updates…

### CASE-3661 · Children rendered in the wrong order unless both of them are always rendered
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Reproduction I was unable to make a repro unfortunately. ### Steps to reproduce I'll start with a video to make this clearer, basically I'm toggling a component ("Viewbar") in an app and when that component becomes rendered after it has been non-rendered (return `null`) it becomes rendered in the wrong position: [link] - This bug is not present when using React. - I can't reproduce it just by toggling one of two child components in a codepen. - Not even when managing the state for that with the state management [library]([link]) that I use in the app. Any ideas on how to debug this? I'm…

### CASE-3664 · window.addEventListener("scroll"... doesn't work
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I noticed this problem while using react-infinite and then I tried it in the [REPL]([link]), I added the following line to the default example: `window.addEventListener("scroll",()=>alert("hi"));` The listener is registered ![image]([link]) But it does nothing.

### CASE-3669 · 10.18.2 regression: Cannot read properties of undefined
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬8 · closed · labels: bug
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Our dashboard starts fails when upgrading from 18.1 to 18.2. Looks like suspense boundary regressions. I haven't got an easy repro or capacity to find one right now, just opening for visibility on the issue. <img width="827" alt="Screenshot 2023-11-06 at 13 23 22" src="[link]]/assets/44890343/51f226d5-df37-4b69-ba81-02dcd641a4e6">

### CASE-3676 · DOM trees not reconciling (because different attribute order?)
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: bug/help wanted/feedback needed
- **Excerpt**: My app is a tree structure that expands/collapses, or a row can be highlighted when clicked on. Let's the say the tree looks like this (just four rows) ![image]([link]) ...and I click on the top item. This sets that to 'current' and a render cycle is triggered. **95% of the time, the item will just be selected. But very rarely it will clone the whole tree!** ![image]([link]) At this point the app is broken. Clicking on the bottom tree will fire a click event, but select the item in the top version of the tree. I'm guessing this is a reconciliation issue; if I look at the two DOM trees, I…

### CASE-3677 · Strange issue with elements swiping their positions before first re-render.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬8 · closed · labels: bug/important/has fix
- **Excerpt**: I'll try to explain deeply. Somehow I don't see why this is happening. **"preact": "^5.1.0-beta.26"** This is how it looks like in the code: (file SexSelect.js) ![image]([link]) This is what happens when rendering: [link] The thing is - everything is ok when I'm using bin: [link] Also, I'm using preact-router, but this is one Page Component so I don't think it's really that important.

### CASE-3682 · Duplicated useId values
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Sometimes useId() values are duplicated. I saw this strange behavior in @user/react components. Headlessui uses useId only when available (to support React 17). In development I use React 17 and everything looks normal, but in production I'm switching React to Preact 10.11.1 and see this in some situations <img width="692" alt="image" src="[link]> As you can see values are duplicated. I can confirm that is it issue in Preact, not headlessui, because it works when headlessui not using useId hook. It is…

### CASE-3683 · Possibly broken importless JSX runtime
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** I can't manage to make importless JSX work. **To Reproduce** Open the following project: [asd.zip]([link]]/files/7538933/asd.zip). <img width="1728" alt="Screen Shot 2021-11-15 at 13 20 26" src="[link]> **Expected behavior** My understanding is that by configuring TS this way, as the docs say, I wouldn't need to import preact or h everywhere, but unless I uncomment the `import 'preact';` line I get the following error: `Cannot find module 'preact/jsx-runtime' or its corresponding type declarations.`.…

### CASE-3694 · Unable to set a property with `false` value
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍4 💬7 · closed · labels: bug
- **Excerpt**: I have a problem with `draggable` property which might be `true` by default, e.g. on `<img>`. Problem is with this line: [link] if I set property to `false` preact adds it and then immediately removed via `removeAttribute`. The workaround is to use `0`, e.g. `draggable={0}` this way it isn't being caught by the problematic line and is converted to `false` to property assign by the browser.

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3608 · IVY: Server side rendering error
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: needs reproduction/regression/area: server
- **Excerpt**: # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue is caused by package @user/.... `@user/core` `@user/platform-server` ### Is this a regression? Do not know. ### Description When running server side rendering with IVY and Angular 9 it fails with error. >TypeError: Cannot create property 'tView' on boolean 'true' ## 🔬 Minimal Reproduction > `git clone [link] > `git checkout ivy/1.0` > `npm install` > `npm run build:ssr` > `npm run server` > open browser at `[link] ## 🔥 Exception or Error…

### CASE-3626 · [typescript] React.ReactElement type is not compatible with Preact and prevents interoperability with React
- **Principles**: P-F4 · **Env**: opera, typescript, react
- **Signals**: 👍21 💬17 · closed · labels: 8.x
- **Excerpt**: There is a type mismatch between `React.ReactElement` and `preact.VNode` that prevents usage of typescript/react code with typescript/preact. While the code below compiles and works without an issue, Typescript typechecking fails. ### Reproduction ```typescript import type React from 'react' import { FunctionalComponent, h } from 'preact' const ReactFCInterlop: React.FC = () => { return <span>hello</span> } const Home: FunctionalComponent = () => { return ( <div> <ReactFCInterlop /> // this fails to typecheck </div> ) } export default Home ``` This results in the following typescript error:…

### CASE-3632 · Uncaught DOMException when having `<!DOCTYPE html>` and setting the `parentDom` to `document` when rendering
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬14 · closed · labels: enhancement/compat/workaround/known issue/11.x
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** If we have `<!DOCTYPE html>` in our HTML document where we use Preact, and try to render or hydrate a component in the `document`, we get an Uncaught DOMException error, and the component does not render/hydrate. Although, it'll be fine if we remove `<!DOCTYPE html>`. This is very a strange behavior. **To Reproduce** ```html <!DOCTYPE html> <html> <body> </body> </html> <script type="module"> import { h, Component, render } from '[link] const app = h('html', null, h('body', null, h('h1', null, 'Hello…

### CASE-3656 · Preact X, Preact render to string & Styled Components
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: Hey, I'm trying to get `[email]` to work with `[email]-alpha.2` and `preact-render-to-string`. But I'm always getting an error saying that `react` could not be found. Not sure if this is a bug or my configuration is wrong. **Steps:** 1. Check sandbox on [link] **Expected Result:** - Renders `h1` tag - Writes stylesheets into console **Actual Result:** > Could not find dependency: 'react' relative to '/node_modules/styled-components/dist/styled-components.browser.cjs.js' Styled Components Doc on SSR: [link]

### CASE-3659 · Render not updating DOM more than once given replacement with differences.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Scenario: 1. SSRing a trivial page (via `preact-render-to-string` in Deno). 2. A JS script with a single call to `hydrate` the `Index` component is requested, bundled by the server, and served. 3. The document `body` is hydrated given the `Index` component. 4. A websocket is opened with the server and when any changes are made to any `tsx` file, it sends a message to the client (browser). 5. The browser dynamically imports `Index` and the `render` function. 6. The `Index.tsx` file is requested, bundled with preact and with the `render` function re-exported from the bundle, and served. 7. The…

### CASE-3666 · unexpect `class` rendered with merge
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: bug
- **Excerpt**: I used [preact-render-to-string]([link]) as a server-side rendering tool and rerender on the client-side with merge. ``` jsx import { h, render, Component } from 'preact'; /** @user h */ class Cmp extends Component { render() { return <p id="cmp" className="my-cmp">Cmp</p>; } } class App extends Component { render() { return (<div id="my-app"> <p id="before">Before</p> <Cmp /> <p id="after-1">After1</p> <p id="after-2">After2</p> <p id="after-3">After3</p> </div>); } } ``` - server-side rendering ``` jsx import { h } from 'preact'; import render from 'preact-render-to-string'; const ssrHtml =…

### CASE-3668 · TypeError: ReactDOMServer.renderToReadableStream is not a function
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: compat
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Hi! I'm trying to update [link] to the latest Preact version (10.25.2) and I got a `TypeError: ReactDOMServer.renderToReadableStream is not a function` when I try to load any page. Not sure how helpful it is, but here's the stack trace: <details><summary>Stack trace</summary> ``` Server Error TypeError: ReactDOMServer.renderToReadableStream is not a function This error happened while generating the page. Any console logs will be displayed in the terminal window. Call Stack Object.renderToInitialStream…

### CASE-3670 · Suspense rendering problems with Next.js
- **Principles**: P-F4 · **Env**: next.js, react
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue Using Next.js (SSR) -> package.json: ``` "next": "12.1.2", "next-plugin-preact": "3.0.6", "preact": "10.7.0", "preact-render-to-string": "5.1.20", "react": "npm:@user/[email]", "react-dom": "npm:@user/[email]", ``` **Describe the bug** Note the different html elements, styles applied on them and how they get rendered. The `Content` component just does a SWR api call with 2s sleep so suspense can get triggered. `isClient` is used to use suspense once on the client since (afaik) Suspense does not work on the server. 1. Same…

### CASE-3684 · 10.5.13 breaks something in compat/server.mjs (vs. 10.5.12)
- **Principles**: P-F4 · **Env**: react, webpack
- **Signals**: 👍3 💬7 · closed
- **Excerpt**: When I upgrade npm packages in my project, preact 10.5.13 breaks my webpack build with this error: ERROR in ./node_modules/preact/compat/server.mjs 1:0-4:33 Can't reexport the named export 'renderToString' from non EcmaScript module (only default export is available) @ ./node_modules/@user/react-ssr/lib/react-ssr.esm.js @ ./node_modules/react-apollo/lib/react-apollo.esm.js @ ... Downgrading to preact 10.5.12 fixes the issue... so something is broken in 10.5.13?!

### CASE-3690 · v10.0.0-rc.0 invalid WeakMap key in devtools
- **Principles**: P-F4 · **Env**: webpack, react
- **Signals**: 👍0 💬7 · closed · labels: needs-more-info
- **Excerpt**: I've added this to webpack config: ``` resolve: { alias: { react: 'preact/compat', 'react-dom': 'preact/compat', 'create-react-class': 'preact/compat/lib/create-react-class', 'react-dom-factories': 'preact/compat/lib/react-dom-factories', }, }, ``` Local build works. Publish to now worked, but SSR fails. Now logs contain: ``` module initialization error: Error You can add this by using "npm install --save preact-render-to-string@user". at Object.aDp2 (/var/task/page.js:46:22061) at __webpack_require__ (/var/task/page.js:1:339) ``` I've installed "preact-render-to-string": "^5.0.5" , and now…

### CASE-3698 · Unexpected appendChild of text nodes during render with merge
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬7 · closed · labels: bug/has fix/feedback needed
- **Excerpt**: I'm currently working on a Preact app with server rendering. So, I use `render()` with the third argument `root.lastChild`. As I render the same data on client and server, I expect this render to do nothing to real DOM nodes, except attaching events. But I see `appendChild` in the call tree. As a result, first rendering on client takes longer than expected (and longer than alternative libraries). Naive debugging lead to a conclusion that this happens to text nodes. Looks like text node is not considered an existing child during diffing. Before I go deeper into debugging, I'd like to know if…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3610 · Footer not working correctly
- **Principles**: P-A1, P-A4, P-G3 · **Env**: desktop
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix/P5
- **Excerpt**: # 🐞 bug report ### Description Go to [link] then the footer is not working responsively. ## 🔬 Minimal Reproduction ![Desktop screenshot (9)]([link]) The side menu is coming above the footer componenet **Anything else relevant?** Related issues: - [ref] - [ref]

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3615 · Get rid of RxJs
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍28 💬14 · closed
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [x] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior Please take a look at this expression and try to explain why it leads to memory leak: <code> this.store.select(gT).filter(n =>…

### CASE-3618 · DomEventPlugin forces event handlers to run in Angular Zone
- **Principles**: P-F5, P-H3 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: type: bug/fix/regression/area: zones
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [X] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior In [ref] the DomEventsPlugin was changed to bypass Zone.js when adding event listeners. This improves performance when…

### CASE-3630 · Diff behaviour not as expected - preact unmounting then remounting the same DOM nodes even when there is a key
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: bug/help wanted
- **Excerpt**: I have found that preact is unecessarily tearing down and rebuilding `DOM` nodes even when a key is used ([example codepen]([link])) In this case even though the key is supplied almost all of the DOM nodes are being removed and then added again even though only three are changed **EDIT** TO be clear it is expected that the components are being rerendered, but the issue is that all of the `DOM` nodes (not virtual dom) are being removed and then re-added again (before changing the document): ![screen shot 2018-03-31 at 9 31 36 pm]([link]) (after changing the document): ![screen shot 2018-03-31…

### CASE-3631 · inconsistency during unmount
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: bug/compat
- **Excerpt**: Hey, there is an inconsistency during `componentDidUnmount`, most of the time `this.nextBase` is populated but sometimes `this.base` will and `this.nextBase` is null don't have a repro yet, it happens in many places in my app and in different components could be the cause of this is similar as the one that prevented me from using any version from beta19+ will provide a repro if I manage to figure out how to break it outside of my app

### CASE-3639 · Recycling issues when rerendering
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: The Wreckoning
- **Excerpt**: Hi, maybe it's not a bug at all, but I have some strange behavior in my project. I wasn't able t reproduce it in jsfiddle so here's what I've discovered so far: I have a button with attached `onClick` handler. When component containing this `button` is unmounted `button` HTMLElement got 'recycled' by [link] ``` (nodes[name] || (nodes[name] = [])).push(node); ``` then when another instance of same component is mounted this `button` HTMLElement is getting back in [link] ``` node = nodes[name] && nodes[name].pop() ``` It has event handler `onClick` attached from previous use. Actually it's not…

### CASE-3640 · Unmounting a tree of components
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: Hi, Today I came about an issue that if I remove a tree of components/elements only the top one will get the `componentWillUnmount`/`componentDidUnmount` called I guess this could happen because components get cached and reused later, tho because of this nested components cannot cleanup timers or dispose of unnecessary resources maybe [link] should be `deepHook` instead of just `hook`? Thanks for any help!

### CASE-3641 · VNode leak in Context
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **Title:** Memory leak in Context providers - old component instances not disposed during re-renders - [ ] Check if updating to the latest Preact version resolves the issue Tested with preact11 beta, same issue. **Describe the bug** Context provider components are not properly disposed of when their state updates, causing a memory leak where multiple component instances accumulate in memory. Each state update should properly clean up the previous Context provider component instance, but instead old instances persist with their associated hooks, vnodes, and DOM references. This occurs with…

### CASE-3675 · Cryptic error when using preact/compat
- **Principles**: P-F5, P-H3 · **Env**: react, webpack
- **Signals**: 👍0 💬8 · closed · labels: 2-phase-commit
- **Excerpt**: I just tried to use `preact/compat` on my quite complex project. It was using Preact 8.x before, but when hooks came out we decided to temporarily move back to React. I basically just installed the new preact version and aliased it through `webpack` and then ran my app again. It partially renders and I'm afraid this might have something to do with the partial support for `<Suspense />`, but I'm getting this cryptic error: ``` Uncaught (in promise) TypeError: Cannot read property '__c' of null at Object.MOxe.preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount (hooks.module.js:1) at D…

### CASE-3681 · Fragments cause memory leak
- **Principles**: P-F5, P-H3 · **Env**: react, vite
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Wrapping component expressions in a Fragment causes a memory leak. [link]][ref] also concerns a possible memory leak, but it may be unrelated. **To Reproduce** ```js <!-- no memory leak -->> <div>{state}</div> <> <!-- memory leak --> <div>{state}</div> </> ``` I reproduced the issue [here]([link]) by initializing the vite preact starter template and wrapping the top level component in `<></>`. To make the memory leak obvious, I added some fluff (a bunch of divs) so that the memory piles up quickly,…

### CASE-3688 · Preact debug over-stating `Can't call "this.setState" on an unmounted component. `
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬7 · closed · labels: bug
- **Excerpt**: I'm not sure if this is actually and issue of if its an implementation error on my part. I have a functional component that has an open state trigger. ```tsx interface AccordianProps { class?: string; label: string; children: ComponentChildren; } interface AccordianState { isOpen: boolean; } export class Accordian extends Component<AccordianProps, AccordianState> { public state = { isOpen: false, } public render ({ label, children, ...props }: AccordianProps, { isOpen }: AccordianState): VNode { return ( <div class={`${style.accordian} ${props.class ? props.class : ''}`}> <div…

### CASE-3691 · Detail view not unmounted correctly in People demo
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: I think the newly added demo is not working correctly, the remove contact button doesn't remove the contact profile!?

### CASE-3693 · Null reference scenario with unkeyed children
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/duplicate
- **Excerpt**: I found a problem with using `ref` on unkeyed children. You can observe the problem here: [link] Open the console and click Toggle. You'll see that the final dom reference being passed is `null`, which is wrong because the referenced div is still there. In the example, the first child is conditionally rendered and the second child is using a `ref`. On click, the state changes and the first child is unmounted. The ref callback is called two times in wrong order, so the final reference value is null. ``` { header && <div className="header">Header</div> } <div ref={c=>{ console.log(c); }}>…

### CASE-3696 · componentWillUnmount failing to fire
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/has fix
- **Excerpt**: `componentWillUnmount` isn't called if: - The component in question is within another element in the render - The render changes to a component, rather than a regular element Pop this in the repl: ``` js export default class Foo extends Component { constructor(...args) { super(...args); this.state = {showTests: true}; } componentDidMount() { setTimeout(() => { this.setState({showTests: false}); }, 2000); } render({ }, { showTests }) { if (!showTests) return <AnotherTest/>; return ( <div> <Test/> </div> ); } } class Test extends Component { componentDidMount() { console.log('test mount'); }…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3620 · Infinite loop when upgrading to 5.7.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬35 · closed · labels: bug/compat/important/feedback needed
- **Excerpt**: My app just keeps re-rendering the first component when I upgraded to 5.7.0, while any previous versions (5.6.0 down to 5.1.0-beta at least) works fine. My app uses redux dispatching and some custom transitions modeled after reacts transition groups but it seems like a pretty big regression since they work nicely in older versions.

### CASE-3637 · onAnimationEnd event not firing
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: Perhaps a regression with preact 10, or perhaps intended behavior? Prior to 10 `onAnimationEnd` would fire the end event when an animation ends... which no longer happens. Test case of it failing to alert here [link] ~ temp (or real) fix was to use lowercase onanimationend

### CASE-3651 · Fragment induced memory leak if not keyed and state change triggered by context
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: - [ X ] Check if updating to the latest Preact version resolves the issue It does not resolve the issue **Describe the bug** When a parent component undergoes state transitions due to context changes, and it returns a fragment which bounds two or more child components that are themselves modified by changes in different parts of the context (so keying the fragment makes no sense), memory will leak and the heap will ultimately fill up and throw an error **To Reproduce** Instructions on how to reproduce and a demonstration of the memory leak are available in the following repo: [link] Steps to…

### CASE-3654 · Replacing import { h } with React doesn't work in jest tests
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Steps to reproduce: 1. `$ preact create default preact` (preact-cli v2.2.1) `cd ./preact` 2. `npm i -D @user/plugin-transform-react-jsx` 3. Update **package.json** ``` "jest": { ... "moduleNameMapper": { "react": "preact/compat", "react-dom/test-utils": "preact/test-utils", "react-dom": "preact/compat" } } ``` 4. in **header.test.js** replace `import { h } from 'preact'` with `import React from 'react'` 5. in **.babelrc** add ``` plugins: [ ['@user/plugin-transform-react-jsx', { "pragma": "h", "pragmaFrag": "Fragment" }] ] ``` **FAIL tests/header.test.js** ● Test suite failed to run…

### CASE-3689 · react-transition-group "-enter(-active)" doesn't work with Preact X
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, typescript
- **Signals**: 👍1 💬7 · closed · labels: 2-phase-commit/after X
- **Excerpt**: `react-transition-group` is partially not working with Preact X. I've created a Preact project with `preact-cli` by `preact create typescript test (--yarn)` (with typescript template), installed `preact@user` and upgraded other packages: ``` $ yarn add preact@user $ yarn upgrade $ yarn remove preact-router $ yarn add react-router react-router-dom @user/react-router @user/react-router-dom $ yarn add react-transition-group @user/react-transition-group ``` After replacing `preact-router` by `react-router(-dom)`, I've changed some codes accordingly. app.tsx: ```ts import { Component, h } from…

### CASE-3695 · CSS transition group elements children are absorbed if using dangerouslySetInnerHTML
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: in X
- **Excerpt**: Adding an issue for [link] Example of the bug from that issue: [link]

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3623 · Input loses focus when conditionally rerendering other divs
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: has fix
- **Excerpt**: I've set up this [JS fiddle]([link]) to demonstrate the behavior I'm seeing. Basically when I render this code: ``` <section> { phone && !App.isValidPhoneNumber(phone) ? <div>Invalid Phone Number</div> : null } <input value={phone} onInput={this.linkState('phone')} /> { /* Weird: if you remove the line below, there's no error... */ } <div>Phone: {phone}</div> </section> ``` As soon as the state changes such that the first line's condition becomes true, the input loses focus. Is this a bug or expected behavior? **Update:** Added GIF to illustrate behavior. ![feb-09-2017 09-06-08]([link])…

### CASE-3650 · dangerouslySetInnerHTML doesn't work on SVG tag
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Hey @user! This property should work on svg tags, isn't? I'm trying to use it to generate SVG sprites: ``` js const SvgIcon = ({ id, label }) => { const props = { className: 'icon', 'aria-hidden': true, 'aria-label': label, dangerouslySetInnerHTML: { __html: `<use xlink:href="/svg/icons.svg#${id}" />` } } return <svg {...props} /> } ``` But `use` tag is not being inserted inside of `svg` :(

### CASE-3653 · Focus is lost during list re-order
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue (latest is still impacted) **Describe the bug** Focus is lost during list re-order. When a list re-renders, if the focused item is moved to later in the source order, it loses focus. **To Reproduce** As shown in this [Code Sandbox]([link]) If a list is re-ordered: focus is properly preserved when moving up in the source order, but not down in the source order. (All items have keys that are stable and not indexed based) ![preact-reorder-focus-bug]([link]) Steps to reproduce the behavior: 1. Go to [the Code Sandbox]([link])…

### CASE-3663 · Latest release is completely broken
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍4 💬9 · closed
- **Excerpt**: It looks like there was an update to the minification script which caused all variables to be renamed, which probably was to save some extra bytes in the package. However, it renamed all the exports, and it also renamed "exports" as well, so now the package exports an empty object, which causes anything using preact to fail completely. Here's how the main export looks, built from the latest release directly: ![]([link]) For now, we are pinning to `8.2.7`, which fixes the problem. Probably something should be done about this quickly, as it's a fairly critical issue.

### CASE-3667 · Compatibility issues with Base-UI (shadcn/ui) components when using preact/compat
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: question
- **Excerpt**: I’m experiencing compatibility issues when using Preact with preact/compat together with Base-UI (used by shadcn/ui). **Describe the bug** Some headless components like DropdownMenu and Dialog (likely other portal/overlay/focus-related components) either don’t work or crash at runtime when interacting with them (open/close, outside click, focus handling), When I try to close the dialog by clicking the backdrop I get an error: ``` Uncaught TypeError: parent.contains is not a function ``` When i try to open dropdown menu I get an error: ``` TypeError: cutout?.getBoundingClientRect is not a…

### CASE-3686 · Focus displacement when components are added to a list above
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Reproduction I've created a small sample that appears to me to have a focus handling bug. [link] ```ts import { render } from "preact"; import { useState, useCallback, useRef } from "preact/hooks"; function App() { const boxNum = useRef(1); const [boxes, setBoxes] = useState([1]); const boxComponents = boxes.map(num => { return <div>box</div>; }); const onAddBoxToEnd = useCallback(() => { boxNum.current++; setBoxes(boxes => [...boxes, boxNum.current]); }, []); const onAddBoxToFront = useCallback(() => { boxNum.current++; setBoxes(boxes => [boxNum.current, ...boxes]); }, []); return (…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-3629 · diff breaks when render() swaps nodeName (affects preact-router)
- **Principles**: P-C1, P-C2, P-C3, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬16 · closed · labels: has fix
- **Excerpt**: The bug occurs when the render method of one components directly returns another component whose root tag changes (e.g. triggered by some external event). Running example: [link] After clicking the "Switch to 1" button, the initial render works, but switching back breaks. Comp1 gets unmounted, but the Switcher doesn't redraw properly. Contrast this with the version where the root element of the component (Comp1) doesn't change: [link] Wrapping the element returned by the Switcher in a div is a workaround: [link] Note that this breaks preact-route, when routed components dynamically change…

