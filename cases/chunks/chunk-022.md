# Case Chunk 022 — Round 22

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-3101 · Styling removed when opening dev tools in Brave browser
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: stale-bot/temp-stale
- **Excerpt**: **Describe the bug** In the Brave browser opening the dev tools causes all styling to be removed. To keep it simple I just copied a code snippet from the [svelte examples]([link]) to make sure it wasn't just me doing something stupid. I'm using the rollup template as described in the getting started. I replaced the very basic App.svelte with: ```html <style> p { color: purple; font-family: 'Comic Sans MS', cursive; font-size: 2em; } </style> <p>Styled!</p> ``` Then I run `npm run dev` and see this: ![image]([link]) Great. Then I open dev tools and see this: ![image]([link]) I'm using the…

### CASE-3104 · Cannot use HTML entities bigger than FFFF (&#xFFFF;)
- **Principles**: P-B1, P-B2, P-B3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed · labels: awaiting submitter/stale-bot/temp-stale
- **Excerpt**: I am using custom svg font to display icons, but it doesn't render correctly when codepoints are bigger than 0xFFFF. This works: ```svelte <span class='ico'>&#xE806;<span> ``` This doesn't ```svelte <span class='ico'>&#xF0141;</span> ``` When I inject the icon HTML Entity (&#xF0141;) in index.html or from browser, it works fine. Plus, ```console.log(span.innerHTML.codePointAt(0)) //returns 0``` I have work around which I don't want to use ```svelte <span class='ico'>{'\u{F0141}'}</span> ```

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3102 · Element/component binding returns null in slot with transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/temp-stale
- **Excerpt**: **Describe the bug** If anything changes in the wrapper component with a slot or the slot content at any time after transition, the reference to the slot content will be `null`. **To Reproduce** [REPL]([link]). Here we have a wrapper component. Think of it as a generic modal component, that provides you with a slot and decides when we need to show it. If we have a reference to the slotted component/element, we'll lose it as soon as the state of the slot OR the wrapper inner data will be changed. If you push on "trigger animation" button, the data will be recreated (using `{#key}` directive)…

### CASE-3107 · CSS and Svelte Treat Transition Easing Differently
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** I'm not sure if this can be called a bug necessarily but CSS and Svelte treat easing on transitions differently. As someone with animation background, I would consider CSS's way to be the intuitive one: An ease out curve in CSS eases the end of the animation when you're hiding and showing something as opposed to Svelte's ease out curve, which eases the end of the animation when a DOM element is rendered, and eases the start of the animation when a DOM element stops being rendered. **To Reproduce** [link] **Expected behavior** I expect Svelte's transition easing curves to…

### CASE-3108 · Values in an outro transition are sometimes determined at render time
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · open · labels: stale-bot
- **Excerpt**: **Describe the bug** Values in an outro (`out:`) transition are sometimes determined at render time, rather than at transition time. More specifically, this happens when the the outro is on elements in an `#each` block. I have determined that this is indeed the case by putting logs in the svelte transition code. **To Reproduce** A REPL of the bug can be found here: [link] While normal behavior can be found here: [link] **Expected behavior** In the bug repl, the outro transition should always match the `outX` variable, which is set to a negative value when "next" is clicked, and a positive…

### CASE-3112 · Variable toggled during transition doesn't update from within {#if}
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: ## Description A variable that's toggled on a `transition event` within an `{#if}` statement falls out of sync. - Within an `{#if}` statement, I have an element with `transition:fade`. - There are several transition events firing on this element. These events update a variable while the element transitions, in particular `on:outrostart` and `on:outroend`. - These variables update normally outside the `{#if}` statement, but not within it, thus they become out of sync. ## To Reproduce Here it is inside of a [REPL]([link]) ## Expected behavior Given the class directive on line 20 of the REPL and…

### CASE-3129 · crossfade Fluid page transitions scroll offset calculation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** Following the page transition guide by @user [link] Transition support is great however on scrolling down the page with a transition element set to a lower section of the page you will get ghosting of the transition element - where you can see the transition element twice with the offset between the transition elements based of the scroll offset. **Logs** Please include browser console and server logs around the time this bug occurred. n/a no error logs **To Reproduce** clone [link] push transition elements down on one of the pages add a set of breaks <br />.. until…

### CASE-3130 · Instrumented `$foo= bar;` doesn't need to update `$foo` variable
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed · labels: bug/compiler/temp-stale
- **Excerpt**: `$foo = bar;` currently results in `set_store_value(foo, $foo = bar);`, but this `$foo = ` is unnecessary, as `set_store_value` will result in the relevant subscription being synchronously called anyway. The `$foo = ` in the compiled code is even a bit misleading in cases (such as tweened and spring stores) where calling `.set()` on the store doesn't actually immediately update it to that value.

### CASE-3131 · #each with animate: doesn't allow comments
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬4 · closed · labels: feature request
- **Excerpt**: **Describe the bug** The combination of #each and the animate directive doesn't allow comments. **To Reproduce** See [link] There will be an error message at the bottom. If the comment is deleted, the error goes away. **Expected behavior** Comments should be ignored and not cause an error. **Severity** This prevents documenting some code.

### CASE-3138 · Transition "race" bug
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ![bug1]([link]) [REPL]([link]) The sidebar flickers when closing (first load only). If I increase the modal's transition duration (which causes it to resemble a race-condition bug) or remove the transition, the bug ceases. Priority: low

### CASE-3154 · {#await} blocks always cause transitionManager to be included
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: (Splitting this off from [ref] and closing that one, because they're kind of separate issues.) If a component uses `{#await}` blocks, `transitionManager` will always be included, even if there are no transitions.

### CASE-3155 · Transitions inside components
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Transitions works great in regular markup, but doesn't seem to have any effect inside a component, [like this basic repro illustrates]([link]). I apologize if this is the intended behavior, but I could only find information about putting a transition on the actual component itself.

### CASE-3157 · Transitions broken in version 1.43.0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: Maybe it's related to the work on [ref] None of the transitions work anymore, and we get an error from rollup `Cannot read property 'snippet' of undefined` [This]([link]) is a link directly from the [user guide examples for transitions]([link]) You will see the error as soon as you open the example in the REPL.

### CASE-3177 · Force Pipe To Be Called
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍50 💬92 · closed · labels: feature/area: core/core: change detection/core: pipes/feature: under consideration
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Currently I have a stateful pipe that wraps a service and subscribes to an observable, and then stores the value and returns it every time the pipe's transform function is called. The issue is that I have to make the pipe impure and so it gets called on each change detection cycle. **Expected behavior**…

### CASE-3183 · Using platform server, lazy loaded component flickers as the browser renders the application
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍17 💬65 · closed · labels: area: server
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [] feature request ``` **Current behavior** Platform server fully renders a lazy module, and the view on the browser is changed several times: 1. The html rendered on the server is shown. 2. As the application starts to bootstrap, the page is shown without the lazy loaded component. 3. As the chunk is downloaded, the lazy loaded component is rendered. In case of a heavy chunk, or alternatively a slow connection, it looks like the application flickers on the transition…

### CASE-3184 · Huge performance drop after upgrade to Angular 11
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍47 💬64 · closed · labels: area: performance/area: core/needs: clarification
- **Excerpt**: # 🐞 bug report ### Affected Package Hard to point, one of: ``` "@user/animations": "^11.1.2", "@user/common": "^11.1.2", "@user/compiler": "^11.1.2", "@user/core": "^11.1.2", "@user/forms": "^11.1.2", "@user/platform-browser": "^11.1.2", "@user/platform-browser-dynamic": "^11.1.2", "@user/router": "^11.1.2", "@user/upgrade": "11.1.2", ``` ### Is this a regression? Yes ### Description After the upgrade from Angular 9 to 11 we find out that performance of component creation has declined. In our automated tests we get creation times doubled in almost every complex component. Results can be…

### CASE-3197 · BrowserAnimationsModule not detected even after Import
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍37 💬52 · closed · labels: type: bug/fix/area: animations/freq3: high/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3103 · x3dom and svelte almost but don't quite play nice together
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, svelte
- **Signals**: 👍0 💬4 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** on:click events ( and maybe others ) seem to damage the lifecycle of x3dom objects ![image]([link]) **Logs** [link] This is the stack trace I get from chrome devtools ``` x3dom.js:3219 Uncaught (in promise) TypeError: Cannot read property '_listeners' of undefined at HTMLUnknownElement.domNode.removeEventListener (x3dom.js:3219) at eval (eval at handle_message (VM4701 about:srcdoc:13), <anonymous>:56:27) at eval (eval at handle_message (VM4701 about:srcdoc:13), <anonymous>:300:13) at Object.destroy [as d] (eval at handle_message (VM4701 about:srcdoc:13),…

### CASE-3106 · Bound value on required input sets :invalid state in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, firefox 78, svelte
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: **Describe the bug** When binding an empty (`undefined` or `null`) value to an input `:invalid` style state is triggered on initial load in Firefox. It looks like this was fixed in [link]][ref] but seems to be broken again. **To Reproduce** Works in version 3.9.0 [REPL]([link]) But not in latest version [REPL]([link]) **Information about your Svelte project:** Firefox 78.0.2 **Severity** It's a little annoying, I can work around it by not using the required field or simply accepting the red border for now though.

### CASE-3114 · Firefox : input value doesn't dynamically update
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: firefox, chrome, chromium, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Below is the REPL for a salary component which get comma separated every time user inputs REPL: [link] This feature works in Chrome browser but doesn't work in Firefox Does not work - **FF v76.0.1 (64-bit)** Works - **Chrome v81.0.4044.138 (Official Build) (64-bit)** Works - **Brave Version 1.8.90 Chromium: 81.0.4044.129 (Official Build) (64-bit)** Svelte version: >=3.12.1 OS version: ![image]([link]) **Logs** No Logs, No errors **To Reproduce** REPL: [link] **Expected behavior** Should work across all browsers.

### CASE-3116 · Destroy not performed on inner created component as part of outer component destroy
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 80, firefox, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Created components (instantiated with `new MyComponent({target})`) are left out from destroy graph. **To Reproduce** 1. Run REPL [link] 2. Make REPL console visible. 3. Click button *Destroy Outer1* -> As expected, `onDestroy` callbacks of both Outer1 and its Inner called. 4. Click button *Destroy Outer2*. **Expected behavior** When Outer2 destroyed, it's Inner instance is also destroyed. **Actual behavior** Outer2 destroyed only. Its Inner left hanging in memory. **Information about your Svelte project:** - Your browser and the version: Chrome 80.0.3987.163, Firefox…

### CASE-3118 · Animation `on:introend` not immediate
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** When using both the `in:draw` and `in:fly` animations, an event is registered `on:introend`. After specifying 5 seconds of animation time, I would expect the `on:introend` to be called immediately. However, this is not the case. There is around a 400 ms delay in the call, which is really high. **Logs** Here is a Chrome profile view showing the animation executed for around 5,000 ms, but the image is not "filled in" until after ~400 ms: <img width="1552" alt="Screen Shot 2020-04-10 at 4 53 30 PM" src="[link]> **To Reproduce** To reproduce, simply clone the following…

### CASE-3120 · SyntaxError: missing formal parameter (Firefox)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, svelte, tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: **Describe the bug** The svelte title is replaced by `500` and I have this error on the console: ``` SyntaxError: missing formal parameter ``` **Logs** Please include browser console and server logs around the time this bug occurred. **To Reproduce** To help us help you, if you've found a bug please consider the following: * Create a svelte template * Require the tailwind default config (this produce the bug): ```javascript const { colors, boxShadow, fontFamily, fontSize, opacity, } = require('tailwindcss/defaultTheme'); ``` You can also checkout this public MR: [link] **Expected behavior**…

### CASE-3126 · Webpack magic-comments doesn't work with svelte 3.17
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 77, windows, webpack, svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: **Describe the bug** I was using in component the following code: ``` def grid = import(/* webpackChunkName: "mychunk" */ 'myModule); ``` this code lazy-load a javascript module, and tells webpack to use a specific name for the generated chunk. It worked in svelte 3.12, however Svelte 3.17 removes the comment when generating javascript. **To Reproduce** [link] **Expected behavior** The commentaries are not removed by svelte. **Information about your Svelte project:** - Chrome 77 - Windows 7 - Svelte 3.17.1 - Webpack

### CASE-3127 · Your example does not work on HP in Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, safari 13, macos, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Your example does not work on HP in Safari. There is "loading Svelte compiler..." or "fetching [link] all the time. **Logs** nothing special in console **To Reproduce** Use Safari and go to [link] **Expected behavior** Display content of example in Result tab **Stacktraces** no **Information about your Svelte project:** - Safari 13.0.4 (15608.4.9.1.3) - macOS Catalina 10.15.2 (19C57) <img width="855" alt="Snímek obrazovky 2020-01-10 v 11 44 31" src="[link]>

### CASE-3133 · HTML5 Touch API support (drag & drop for mobiles/tablets)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome78, android, svelte, mobile, desktop
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Is your feature request related to a problem? Please describe.** See [link] This example does not work on mobile devices and tablets (e.g. android chrome78+ The comment [link] suggests that the HTML5 Touch API is not - or at least not properly - supported on svelte. **Describe the solution you'd like** A support for drag&drop using draggable elements as in [link] **Describe alternatives you've considered** I can only write that drag&drop implemented via svelte works perfectly on desktops. And vanilla js solutions work perfectly on desktop & mobiles unless written in svelte. This brings me…

### CASE-3137 · npx degit sveltejs/template <app> fails to load content in brave browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, chromium, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Svelte boilerplate that is been created with `npx degit sveltejs/template <app>` fails to load in brave browser tho it works as expected in safari and firefox. **Logs** `Uncaught SyntaxError: Unexpected token '<'` **To Reproduce** ``` npx degit sveltejs/template my-svelte-project cd my-svelte-project npm install npm run dev ``` and try to load it with brave browser. **Information about your Svelte project:** - Brave Version 0.69.132 Chromium: 77.0.3865.90 (Official Build) (64-bit) - Mac OS 10.15 - Svelte version 3.12.1 - Project uses Rollup **Addisional Info** App will…

### CASE-3141 · Cursor misbehaviour in Safari's <input> controls
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, chrome, firefox, edge
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: **Describe the bug** In Safari (12.1.2), when adding an `<input>` control with manual two-way binding - by using an 'on:input' handler for instance - changing the contents of the `<input>` control at any point other than the end of the word causes the cursor to jump to the end of the control. This does not happen in Chrome (76.0.3809.100) or Firefox (68.0.2). I have not been able to test Edge yet. **To Reproduce** Check out this minimal REPL - [link] In Safari (12.1.2), select the input control in the middle and make any sort of edit. Notice how the cursor jumps to the end of the input…

### CASE-3147 · Input cursor jumping on Safari 12.1.1 still not working
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari 12, safari, ios, desktop
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: The bug [ref] still not work on release 3.6.5 The problem is still the same and behave the same on REPL Tested in Safari 12.1.1 desktop and Safari iOS Problems are for input type=text and type=password

### CASE-3166 · REPL not working in Safari
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: If I go to [link] in Safari (10.0.1) on Mac, the select element for selection of code example (Hello world etc.) does not work. It works fine in Chrome.

### CASE-3171 · After upgrading to Angular 8, production builds can't load: Failed to load module script: The server responded with a non-JavaScript MIME type of "text/plain". Strict MIME type checking is enforced for module scripts per HTML spec.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, angular
- **Signals**: 👍62 💬130 · closed · labels: area: core/hotlist: devrel/type: confusing
- **Excerpt**: # 🐞 bug report ### Affected Package Angular 8 ### Is this a regression? YES ### Description My production distribution is being served from Azure Blob Storage static site. Is it possible that serving from the static site is causing this error? **This issue happens in Chrome but not Edge.** After upgrading to Angular 8, production builds can't load. Browser console error: Failed to load module script: The server responded with a non-JavaScript MIME type of "text/plain". Strict MIME type checking is enforced for module scripts per HTML spec. ## 🔬 Minimal Reproduction Upgrade an Angular 7 app…

### CASE-3173 · FetchEvent.respondWith error iOS/iPadOS 16.4+
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, angular, ipad, iphone
- **Signals**: 👍1 💬120 · closed · labels: area: service-worker/iOS/P1/bug
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? service-worker ### Is this a regression? Yes ### Description I run an Angular application with version 14.2, and I encouter problems with Safari on iPhones and iPads running 16.4 or higher. The issue I'm having is that my application sometimes (really sometimes) shows the white page of death and sometimes Safari shows the Error: 'FetchEvent.respondWith received an error: TypeError: Internal error' without any further information. The app uses the angular service worker (for PWA support) and from what I have read on earlier issues with…

### CASE-3181 · Issues with the ECMAScript Internationalization API
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, desktop, mobile
- **Signals**: 👍18 💬73 · closed · labels: type: bug/fix/area: common/effort2: days/state: Needs Design/breaking changes
- **Excerpt**: Running unit tests in non-Chrome browsers raised some doubts about this API which is currently used in the Date and Currency pipes. To start with, it is not supported in all Safari versions (desktop and mobile) and older browsers: [link] [link] Then, on browsers which support it, the result doesn't match what Chrome does. On Firefox, one of the test fires this 2 years old bug: [link] On IE11, most tests are failing due to discrepancies in output (formatting, white space, special chars,etc). At the end of the day, it seems only reliable in Chrome, but it is also difficult to polyfill. So, if…

### CASE-3182 · HttpClient fails to parse an empty 200 response in IE11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox
- **Signals**: 👍47 💬66 · closed · labels: type: bug/fix/freq1: low/area: common/http
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior The [HttpClient]([link]) throws an error "_Http failure during parsing for ..._" in the case of an empty 200 response in IE11. The issue is not reproducible in Chrome and Firefox. Setting a _responseType_ option to "_text_" helps to resolve the issue. ##…

### CASE-3189 · Number input fires valueChanges twice
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react, angular
- **Signals**: 👍56 💬59 · closed · labels: type: bug/fix/freq3: high/area: forms
- **Excerpt**: May be bug. ReactiveFormsModule. Input with type "number" fires valueChanges event twice when changed from browser. I expect it to fire valueChanges once. Here is a plunkr example: [link] I use ngrx/store to manage state and subscribe my store to valueCahnges observable. When I change value of input, reducers fires twice. It is not optimal, I suppose. Angular version: 2.1.0 Browser: Chrome

### CASE-3191 · Unable to view AngularJS 2.0 Beta 1 in Internet Explorer: The use of a keyword for an identifier is invalid
- **Principles**: P-G1, P-G2, P-G3 · **Env**: angular
- **Signals**: 👍0 💬59 · closed · labels: type: bug/fix/effort1: hours
- **Excerpt**: I am unable to render AngularJS 2.0 Beta 1 in Internet Explore. I have stripped down a page to as small as possible and can reproduce the issue where all I have as an empty app component that references an html page. Downgrading to Angular JS 2.0 Beta 0 resolves the issue. Below is the stack trace of the error: HTML1300: Navigation occurred. File: localhost:8000 EXCEPTION: SyntaxError: The use of a keyword for an identifier is invalid EXCEPTION: SyntaxError: The use of a keyword for an identifier is invalid STACKTRACE: SyntaxError: The use of a keyword for an identifier is invalid at…

### CASE-3192 · Cannot run angular 2+ from file:/// - looks like 'base href="/"' is the issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, angular
- **Signals**: 👍0 💬58 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Windows development PC ng new test-local cd test-local ng serve See content of index.html and no errors in the console in chrome on [link] ng build Navigate…

### CASE-3196 · Http response do not include headers
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍7 💬53 · closed
- **Excerpt**: Maybe i am doing something wrong but when i make a request with Http i can see on the Network tab on chrome that the response include a custom header called 'Authorization' used to refresh the JWT. But when i try to access the response.headers it prints empty on the console. ``` return this.http.request(req).map((res: Response) => console.log(res.headers.values())); ``` ![image]([link]) the same behaviour when printing keys(). the request headers, on the other hand, do print all the custom headers i add to the request.

### CASE-3199 · Service worker 6.x does not work correctly in Edge and Samsung Internet on Android
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, android
- **Signals**: 👍21 💬51 · closed · labels: type: bug/fix/open for contributions/freq2: medium/workaround2: non-obvious/area: service-worker
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3200 · *ngFor Performance Issues on IE 11 and Microsoft Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, firefox, opera
- **Signals**: 👍31 💬51 · closed · labels: type: bug/fix/area: performance/freq4: critical/area: core
- **Excerpt**: The performance of *ngFor is very slow on IE as compared to Chrome, Firefox and Opera. The below plunker loops through over 1500 items using *ngFor, it takes less than a second in other browsers whereas it takes several seconds in IE 11 and Microsoft Edge. [link] The code is constantly calling isNan function in es6-shim.js. The problem seems to be due to the reason that set and get functions of the polyfill are extremely slow (compared to their native counterparts) and take most of the time. Please have a look at [link] and the accepted answer. This performance issue is also noticeable on…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3105 · Unable to start an expression with '/'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: temp-stale/documentation
- **Excerpt**: **Describe the bug** Using a regex in an expression lead to parsing error: ``` Unexpected block closing tag 100: <div>{ /^[A-Za-z ]+$/.test('Some String value') ? 'foo' : 'bar' }</div> ^ ``` that's because the parser treat `{ /` as the closing of the logic block, eg: `{/if}`. parsing the mustache as expression should have higher priority than parsing it as a closing logic block, eg: `{/if}`, `{/await}` or `{/each}`. **Severity** A workaround is to not start the expression with `/`, replace it with a variable if possible, for the example above a workaround would be: ```svelte <script> let…

### CASE-3109 · Checkboxes update bound variables AFTER on:change handler is called
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** On a checkbox, during the call of the event handler set in on:change, the variable bound with `bind:checked={variable}` has the old value. **To Reproduce** See [link] and look at the console output. It's `true` when it should be `false` and `false` when it should be `true`.

### CASE-3113 · Tweened store updates with 0 duration leave store in corrupted state
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** When a `tweened` store is changed with a `duration : 0` set it early-outs and immediately sets the value after [ref], but that PR missed an important detail. When the store *is tweening*, it needs to have the `value` variable updated each time it's set like it does for the early-out if `value == null`. The change [ref] doesn't do that, so whenever that codepath is taken `value` gets out of date and any later tweens are broken. `value === null` path [link]]/blob/c9020d35b7ca52b381a9afd9d50206ba42fc13bc/src/runtime/motion/tweened.ts#L79-L82 `duration === 0` path…

### CASE-3117 · Svelte store conditional auto subscription
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte, react
- **Signals**: 👍1 💬4 · closed · labels: temp-stale/documentation
- **Excerpt**: ### Reproduction steps: - go to REPL here: [link] - open the console - uncomment line 27 (`$: canSubscribe && $store`) **Expected**: I thought that the `$store` can subscribe (with the `$:`) **only** if `canSubscribe` is true. The question is: **Why `$store` subscribe if `canSubscribe` is false?** Am I wrong? I need it because in my real project I'm using [link] and I can do this: ```svelte $: canRender && $books.then(data => {... here I use Svelte reactivity to watch for some variables...}) ``` But I need to wait for `canRender` before subscribe `$books`.

### CASE-3121 · Select with export options[] is being processed twice at startup and for every change in a reactive stament
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter/stale-bot
- **Excerpt**: **Describe the bug** TL;DR See the Repl, should be self-explainatory if you change an options and see the console. I wanted to make a Select component with reactive declarations to filter the options[] provided.. But the reactive declarations with the options[], are called every time the select's bind:value changes, the options are not changing. why it it called more than once? **To Reproduce** [REPL]([link]) **Expected behavior** Reactive stament should only be recalled if any variable it "watches" changes. **Severity** Low, but if i provide a lof of options in the array, it slows the UI to…

### CASE-3124 · Issue with #each after upgrade from 3.15.0+
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: temp-stale
- **Excerpt**: **Describe the bug** >Background: >Creating SPA with simple menu navigation. The nav bar is represented by a list of strings and there an onclick handler on each label on the nav bar. In an attempt to fix an another issue where data on fetch would not propagate changes onto the page I upgraded to 3.18.0 as per a suggestion. On initial load the nav bar properly displays the string labels. Clicking on any of the labels on the nav bar causes this error `Cannot read property 'length' of undefined`, meaning that the variable navLabels is somehow undefined. Console log of the value of the navLabels…

### CASE-3125 · :global(...) .child selector is given svelte- suffix if there is a variable class name in the html
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: If there is an element with a `class={someVariable}` attribute in the markup, `:global(body) .className` child selectors get suffixed, and therefore don't apply to child components. For example, if you have a parent component that applies a "theme" class to its top-level element, and has child selectors to style matching elements within all its child components depending on the theme, it doesn't work if the theme class is a variable (but does if it's hard-coded as e.g. `<div class="purple">`. (The variable class is what's relevant - any element with a non-hard-coded class name in the parent…

### CASE-3128 · Slot is not updated properly
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬4 · closed · labels: bug
- **Excerpt**: **Describe the bug** `create_default_slot` is generated with newer assigned `current` variable. **To Reproduce** REPL: [link] Select at least 2 times, `span` updates, `img` not. ```js <span>img id:{ item.id }</span> <img src={ item.url } alt={ item.id }> ``` **Investigation** <details> <summary>Investigation</summary> If `current` is `undefined`, `img_src_value =` and `img_alt_value =` are not assigned ```js // (2:0) <Nested items={ items.filter(item => item.author === value) } let:item> function create_default_slot(ctx) { ... let current; ... p(ctx, dirty) { if ((!current || dirty & /*item*/…

### CASE-3132 · bind:offsetWidth causes accessibility failure
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** When using `bind:offsetWidth` on an element, an <object> element is added to the dom, but does not include any accessibility information. **To Reproduce** Add `bind:offsetWidth` to any element **Expected behavior** The element should be rendered in an accessible way. Likely the most desirable behavior is to render the element with role="none". Here's the failure message I'm getting > Element does not have text that is visible to screen readers > aria-label attribute does not exist or is empty > aria-labelledby attribute does not exist, references elements that do not…

### CASE-3135 · HTML comment causes misaligned sourcemap
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: In our project we should add license headers to source files, but when I did that in our first `.svelte` file, I experienced the generated sourcemap is incorrect and it ignores the comments. It makes the debugging more difficult and the test coverage result is useless as well. Svelte version: `3.14.0` Example `.svelte` source: ``` <!-- Some comment and more and more details --> <script> const test = () => { console.log('test'); } </script> ``` When I want to debug `test` variable it points to the 2. line of the `.svelte` file. This tool can help to visualize source map: [link] If I add the…

### CASE-3136 · Fix a11y issues in docs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/temp-stale/documentation
- **Excerpt**: [link] > a:focus { outline: none; } > > This makes it impossible to see which element is currently focussed. > Starting from there you could try yourself to navigate through the site with the keyboard only. > > I've also seen onClick Events on li-Elements. They can't be focused by the Tab-Key.

### CASE-3139 · SSR: writable store set in component does not update `$store` variable
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: bug
- **Excerpt**: Here is the repro. [link] You have to look at the SSR output to see the issue, since the repl does not render SSR. Notice that `$name` is defined before `name.set('Joe')` & is not updated afterwards. This causes the SSR to render the state from the previous request. ```js /* App.svelte generated by Svelte v3.12.1 */ import { create_ssr_component, escape, get_store_value } from "svelte/internal"; import { writable, get } from "svelte/store" const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => { let $name; const name = writable('Peter'); $name = get_store_value(name)…

### CASE-3140 · {@user text} Inserts DOM nodes in the wrong order
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** Using `{@user someVar}` to surround content with tags results in improper rendering of DOM nodes. This occurs whether the content is static, slotted, or comes from a variable substitution. **To Reproduce** [link] **Expected behavior** Using the REPL as example, should render: ``` <a href="#home" target="_blank" class="cursor-pointer"><h1>...</h1></a> <a href="#home" target="_blank" class="cursor-pointer">regular text surrounded by html tags</a> <a href="#home" target="_blank" class="cursor-pointer">text from a variable</a> ``` Instead, renders: ``` <a href="#home"…

### CASE-3143 · Observable-as-store error on reassignment
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: **Describe the bug** Reassigning an observable-as-store variable results in an error `$$unsubscribe_NAMEHERE is not a function`. It appears that currently observables can be used only in certain undocumented restricted ways, perhaps only as long as such variables are never reassigned? **To Reproduce** [link] ``` <script> import { of } from 'rxjs'; let myObs = of([1, 2, 3, 4, 5]); myObs = of([6, 7, 8, 9, 10]); </script> {$myObs} ``` **Expected behavior** Runs without error. **Severity** It's not severe at all if you never use RxJS, but it's a pretty significant restriction if you do (!).…

### CASE-3146 · Cannot access 'variable_name' before initialization
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: awaiting submitter
- **Excerpt**: I'm running into this issue. Is this a bug? Is using `let` for reactive variables not allowed? [link]

### CASE-3149 · Media API rough edges
- **Principles**: P-E1, P-E2, P-E4 · **Env**: edge, svelte, react
- **Signals**: 👍0 💬4 · closed · labels: stale-bot/temp-stale
- **Excerpt**: Hi, trying to play around Svelte, I'm having an issue with the media elements bindings, specifically `buffered`. REPL repro: [link] Basically my issue is that I'm trying to setup a reactive variable that depends on the `buffered` property, but that fails on load, because `buffered` is not yet instantiated? (maybe?) Like this (variables initialized outside the block): ```js $: { progressBarPercent = (currentTime / duration) * 100; loadedPercent = buffered.end(buffered.length - 1) / duration; } ``` On my machine I'm getting a: `proxy.js:135 TypeError: Cannot read property 'end' of undefined`…

### CASE-3150 · v3 compiler logical error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: `function dom(component, options)` has logical error in `if (variable && variable.hoistable || variable.global || variable.module)` it should be `if (variable && (variable.hoistable || variable.global || variable.module))` otherwise it would throw an error when variable is undefined.

### CASE-3168 · Batch has scheduled roots
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍8 💬4 · closed
- **Excerpt**: ### Describe the bug I got the following message and I'm following the instructions, no idea what really went wrong. The site is otherwise working fine. ``` An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app — please open an issue at [link]], citing the following message: "Batch has scheduled roots" [link] ``` ### Reproduction Frankly I don't really know what happened. This happened when I opened the /sandbox page in this repo: [link] ### Logs ```shell This was logged right before in the browser console: [svelte]…

### CASE-3186 · *Blocking Issue*: Change detection after error creating infinite loop
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍69 💬61 · open · labels: type: bug/fix/freq2: medium/area: core/core: change detection/core: error handling
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Possibly relates to [ref] and [ref]. Since the change to continue change detection after an error (4.1.1), I'm getting an infinite loop of errors if there's a problem with template parsing (such as a bound variable doesn't exist). It causes the browser to completely hang, and the browser process must be…

### CASE-3194 · Service worker Invariant violated (initialize): latest hash null
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍4 💬56 · closed · labels: type: bug/fix/freq2: medium/area: service-worker
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3198 · error TS2451: Cannot redeclare block-scoped variable 'ngDevMode'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍42 💬51 · closed · labels: needs reproduction/area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3110 · <Select> does not show the correct initial option if <options> are loaded asynchronously
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** I have a use case where `<select>` options are loaded from the backend, but the selected value is loaded earlier. It seems that when the `<options>` are rendered, the first option is displayed even if another is selected. **Logs** N/A **To Reproduce** [link] **Expected behavior** When loading the repl, the selected value should be _BAR_ according to `value = 2` **Stacktraces** N/A **Information about your Svelte project:** Svelte version: 3.23.2 **Severity** Blocking

### CASE-3119 · Two-way binding + reactive declaration behaviour differs between objects and strings
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I *think* this might be a bug, but I'm not sure. It could be by design. I'm attempting to build a "ComboBox" (a.k.a "typeahead" or "autocomplete") component. The kind of component where a user can start typing into an input field, and a list of matches/suggestions appears. The user may continue typing, or they may choose a suggestion from the list. The component has internal state (`value`) that can potentially update in two ways, either: 1. directly by user input (typing), or 2. indirectly by selecting an item from the list To account for this, I initially tried having `value` be both a…

### CASE-3122 · `$props is not defined` thrown with dynamic type-attribute "workaround"
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug/awaiting submitter
- **Excerpt**: **Prologue** With Svelte, it's somewhat cumbersome to create a typical `<TextField>` or `<Input>` -component with a dynamic attribute for `type`. A workaround is required to get two-way bindings working, and the first one I found was the one being used at [c0bra/svelma]([link]): ```svelte <script> export let value; const onInput = e => { value = e.target.value $$props.value = value } </script> <input on:input={onInput}/> ``` **Describe the bug** The pattern described above worked fine in Svelte `3.10.0` and earlier, but with `3.10.1` and later, an error is thrown on every `input`-event: ```…

### CASE-3134 · datalist element handling of value attribute
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: bug/temp-stale
- **Excerpt**: **Describe the bug** `<datalist>` gets rendered oddly since it renders both the option's value and the inner text of the option element. (this is a browser thing which seems pretty terrible but nothing can be done about that). It appears that [Attribute.ts[ref]]([link]]/blob/ca6c01d11f3c4d8cd62374857f40b8be1c3aff3b/src/compiler/compile/render_dom/wrappers/Element/Attribute.ts#L80) is treating `<datalist>` `<option>` elements the same as for `<select>` and is **requiring** that a `value` attribute be present on it. This kind of limits the usability since you cannot have separate label/value…

### CASE-3142 · Context API doesn't work for custom elements
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍6 💬4 · closed · labels: bug/custom element
- **Excerpt**: When compiling to custom elements, getContext returns undefined ```javascript // Select.svelte import { setContext } from 'svelte' setContext('select', { selected: 'one' }) // SelectOption.svelte import { getContext } from 'svelte' const { selected } = getContext('select') // undefined ```

### CASE-3151 · V3 Store only updateable by one component.
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Steps to reproduce: 1. Create a svelte v3 store with a writable e.g. `export const user = writable({username:'bob'})` 2. Create an App.html that imports this user, and bind something to it e.g an h4 3. Create a MyComponent.html that imports this user, and bind something to it e.g an h4. 4. Add an input on either the App or the MyComponent e.g. `<input bind:value={$user.username}/>` 5. Run, and enter a new value in the input. Observe that the value of the h4 is only updated in the component that holds the input (either App or MyComponent). Is this a Bug or Feature?

### CASE-3153 · Setting a value on input overrides binding
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: [REPL]([link]): ```html <label> <input type=checkbox on:input="set({a: !a})" bind:checked="b"> toggle a and b using input event (fails) </label> <label> <input type=checkbox on:change="set({c: !c})" bind:checked="d"> toggle c and d using change event (fails) </label> ``` Clicking the first checkbox toggles `a` but doesn't alter the `checked` state (and with it, `b`) because the `input` event fires before the `change` event.

### CASE-3156 · set() inside set() can cause unnecessary re-renders
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Stumbled upon this bug while putting together an example for [this question]([link]). [REPL]([link]): ```html <p>rendered {{count}} times</p> <label> <input type='number' bind:value=width> width </label> <label> <input type='number' bind:value=height> height </label> <!-- clicking this button should only result in one render, even though we're setting two properties --> <button on:click='set({ width: 200, height: 200 })'>reset width and height</button> <canvas ref:canvas :width :height style='display: block;'/> <script> export default { computed: { props: (width, height) => ({ width, height…

### CASE-3158 · Tries to set computed properties, leading to errors in dev mode
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: This REPL [link] It tries to set the value of a computed property `available_roles` in the generated code. While it works in the REPL, when you try to run it locally in `dev` mode, it throws errors `Cannot set read-only property 'available_roles'` on the console and causes unpredictable behaviour. This does not happen when the `bind:value` in the `<select>` element is not a nested peoperty (i.e does not contain a dot `.` )

### CASE-3159 · input[type=range] + bind + ie11
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: It appears that bind applied to range inputs does not work on ie11. `on:change` does work though. [link]

### CASE-3161 · For input[type=number] bound value not equal event value
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

### CASE-3162 · <textarea value='{{foo}}'> doesn't work
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: [Repro here]([link]) — the generated code is wrong: ```diff if ( textarea_value_value !== ( textarea_value_value = state.foo ) ) { - setAttribute( textarea, 'value', textarea_value_value ); + textarea.value = textarea_value_value; } ```

### CASE-3167 · CSS seems like it could be smaller
- **Principles**: P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Currently the outputted CSS contains line breaks and new lines, could we minify this? Example: Input: ``` <style> h1 { color: pink; } </style> ``` Output: ``` style.textContent = " \n h1[svelte-2687689114], [svelte-2687689114] h1 {\n color: pink;\n }\n"; ```

### CASE-3175 · HttpParameterCodec improperly encodes special characters like '+' and '='
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍122 💬112 · open · labels: breaking changes/freq2: medium/area: common/http/state: has PR/risk: high
- **Excerpt**: **I'm submitting a ...** ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Code exemple ``` let body = new URLSearchParams(); for (let i in values) { body.set(i, values[i]); } let options = RequestOptions(); options.headers.append('Content-Type', 'application/x-www-form-urlencoded') return this.http.post(uri, body, options).then(); [...] ``` If `values[i]` has a '+' character in it, then it is…

### CASE-3179 · RC6 Forms: disabled attribute cannot be set dynamically anymore
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍48 💬74 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a bug/feature request** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Have a look at that, (demo: [link]): ``` @user({ selector: 'my-app', providers: [], template: ` <div [formGroup]="form"> <input formControlName="first" [disabled]="isDisabled"> </div> `, directives: [] }) export class App { isDisabled = true form = new FormGroup({ 'first': new…

### CASE-3187 · ExpressionChangedAfterItHasBeenCheckedError when reading form validity properties when validity changes during template execution
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍96 💬60 · open · labels: type: bug/fix/freq2: medium/area: forms/state: confirmed/P4
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code>[x] Bug report </code></pre> ## Current behavior If you have a composite form control (think a `<my-address [formControl]="address"></my-address>` component), if the internal form has a dynamic validator (i.e. `[required]="isUSA"`), the control will throw an `ExpressionChangedAfterItHasBeenCheckedError` error when the validator (in this…

### CASE-3188 · Reactive Form change through ControlValueAccessor doesn't update view
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍62 💬59 · closed · labels: type: bug/fix/needs reproduction/freq3: high/area: forms/forms: ControlValueAccessor
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When updating a value through a form field that uses the formControl directive, the view isn't updated. When, say, two fields hold the same form control, changing one does NOT change the other. This **does happen** when using NgModel, and **does happen** when calling `formControl.setValue(newVal)`…

### CASE-3190 · Allow template-driven form inputs across a component hierarchy to register with a single parent form.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍60 💬59 · closed · labels: feature/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report [x ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Using the new form API, if a parent component has a `<form>` tag, and child components have `<input>` tags using the [(ngModel)] directive, then input components will not be registered with the parent form. **Expected/desired behavior** If a parent component has a form containing child components with ngModel-bound input components in their template, then these…

### CASE-3195 · Async validators can sometimes cause form validity status to be stuck as 'PENDING'
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍41 💬55 · closed · labels: type: bug/fix/freq2: medium/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Async validation can sometimes hang form validity status. Returned `Promise`s and `Observable`s are sometimes "ignored" and thus, the form is never marked as valid. **Expected behavior** The underlying async objects would have to be resolved properly and form validity status must update properly.…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3111 · @user url('font_url') in a child component does not work
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: feature request/awaiting submitter/stale-bot
- **Excerpt**: **Describe the bug** Using @user url('font_cdn_url') in a child component doesn't bubble up to the top of bundle.css. According to [this stackoverflow explanation]([link]) @user only works if it precedes all rules. **Logs** **To Reproduce** I tried to reproduce the bug in REPL, but found that REPL allows @user url('font_cdn_ur') to work in a child component Here's my attempt to reproduce the bug: (not successful) [link] **Expected behavior** I expect when svelte compiles my project, all the @user in <styles></style> of any child component bubble up to the top of bundle.css **Information about…

### CASE-3165 · How to render HTML encoded content
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: This seems like maybe a bug with the docs in that there isn't an example of this (that I've found at least). Sorry if it belongs on stackoverflow... Please see this repl example: [link] What is the best approach for rendering that link as HTML?

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3115 · preserveWhitespace strips prefix space
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: compiler
- **Excerpt**: **Describe the bug** The compiler option `preserveWhitespace: true` strips prefix space: ```html <h1> Hello {name}!</h1> ``` **To Reproduce** See [this repo]([link]). With [minimal changes]([link]) from the svelte/template. This is [my output with missing prefix space]([link]). **Expected behavior** Keep the prefix whitespace in the SSR. **Information about your Svelte project:** svelte-3.21.0 & rollup.

### CASE-3144 · Default slot not working when using named slot in SSR
- **Principles**: P-F4 · **Env**: svelte
- **Signals**: 👍2 💬4 · closed · labels: bug
- **Excerpt**: <!-- Thanks for raising an issue! (For *questions*, we recommend instead using [link] and adding the 'svelte' tag.) To help us help you, if you've found a bug please consider the following: * If you can demonstrate the bug using [link] please do. * If that's not possible, we recommend creating a small repo that illustrates the problem. * Make sure you include information about the browser, and which version of Svelte you're using Reproductions should be small, self-contained, correct examples – [link] Occasionally, this won't be possible, and that's fine – we still appreciate you raising the…

### CASE-3148 · Inconsistency in SSR boolean and null attributes when using spread syntax
- **Principles**: P-F4, P-G4, P-E3 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: ```html <input type="text" disabled={true}/> <input type="text" {...{disabled:true}}/> <input type="text" disabled={1}/> <input type="text" {...{disabled:1}}/> <input type="text" value={null}/> <input type="text" {...{value:null}}/> ``` will render ```html <input type="text" disabled> <input type="text" disabled disabled="true"> <input type="text" disabled> <input type="text" disabled="1"> <input type="text"> <input type="text" value="null"> ``` The duplication on line two could also be seen in REPL with: ```html <script> import { spread } from "svelte/internal" </script>…

### CASE-3163 · !doctype causes an error
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Currently, `<!DOCTYPE html>` raises an error (`!DOCTYPE was left open`). This is probably only relevant to SSR. (REPL)[[link]]

### CASE-3170 · feat(DomRenderer): allow partial DOM hydration from pre-rendered content
- **Principles**: P-F4 · **Env**: angular, bootstrap
- **Signals**: 👍162 💬189 · closed · labels: feature/state: Needs Design/area: server/feature: under consideration
- **Excerpt**: I'm recapping a discussion I just had with @user and @user. This is mostly Tobias' design. <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] feature request ``` **Current behavior** <!-- Describe how the bug manifests. --> Typically when a page is pre-rendered, such as with Universal, the Angular application bootstraps in the browser, then blows away the pre-rendered content, and replaces it with newly created nodes. The DOM tree that is pre-rendered is often very similar, or identical…

### CASE-3185 · Angular SSR not updating dynamic meta tags and content received from API
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬62 · closed · labels: needs reproduction/area: server
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? platform-server ### Is this a regression? Yes ### Description I'm working on an Angular SSR application and I'm facing a problem when updating Open Graph meta tags after receiving content from the API, as in another component that updates directly (without consuming the API) there is no problem. Although when viewing elements in the page source code, all meta tags are updated. The problem is that when sharing, they don't show the updated meta tags. After I updated to Angular 17 it stopped working, but I'm not sure, because it was in some…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3123 · #if not disposing child element when going from true => false (occurs intermittently)
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Description** I'm building an image viewer in svelte and have an issue that's stumped me. Every once in a while, when an {#if} block switches from truthy to falsy, the element inside is not disposed in the html. This is occurring inside a modal component that sets it's component to null when it closes. Works 90% of the time, but every once in a while, the element stays on the page despite it's condition being falsy. This is the relevant code: ```html <script> ... const open = ( NewComponent, newProps = {}, style = { bg: {}, window: {}, content: {} } ) => { Component = NewComponent; props =…

### CASE-3164 · Rendering components in other documents
- **Principles**: P-A3, P-H1 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Hello! First of all, thank you for releasing this project and the time that's been invested in it! I am amazed by it's pure awesomeness and I am sure it will spark a revolution in the frontend frameworks landscape! I have started to use Svelte in a production app and I am *very* satisfied with it's capabilities and performance. One of my app's requirements is to render bits of UI in dynamically created iframes, so they can be overlayed over a customer's website and not be affected by the existing css and scripts (I can't wait for native custom elements browser support!). The problem is that…

### CASE-3172 · Entry Components of a Lazy Loaded NgModule are not available outside the Module
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍212 💬122 · closed · labels: feature/area: core
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [X] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` Follow-up issue for [ref] as requested by @user **Current behavior** `entryComponents` of a lazy loaded NgModule cannot be rendered using `ComponentFactoryResolver`. Error message: `No component factory found for {{entryComponent}}` **Expected behavior** `entryComponents` should be available just like if the module is…

### CASE-3174 · Lazy load auxilary
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍96 💬113 · closed · labels: type: bug/fix/freq3: high/area: router
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x] bug report => search github for a similar issue or PR before submitting [ x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** **Expected/desired behavior** **Reproduction of the problem** If the current behavior is a bug or you can illustrate your feature request better with an example, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (you can use this template as a…

### CASE-3176 · MODULE_INITIALIZER like APP_INITIALIZER
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍222 💬105 · closed · labels: feature/area: core/core: NgModule/feature: under consideration
- **Excerpt**: ## I'm submitting a ... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search github for a similar issue or PR before submitting --> [X] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> I was wondering if like APP_INITIALIZER a MODULE_INITIALIZER can be implemented. I have a scenario where multiple lazy load modules exist. Each…

### CASE-3178 · Angular 2 lazy load error when loading class module within a bundle
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬80 · closed
- **Excerpt**: Hi! I'm using RC5 and when using lazy load with a bundle I get a `Cannot find 'default' in name_of_the_bundle'` This is the routing ``` import { Routes, RouterModule } from '@user/router'; const routes: Routes = [ { path: '', redirectTo: 'main', pathMatch: 'full' }, { path: 'moduleA', loadChildren: 'moduleA.bundle.js' } ]; export const routing = RouterModule.forRoot(routes); ``` and this is the module ``` import { NgModule } from '@user/core'; import { routing } from './moduleA.routing'; import { ModuleAComponent } from './'; @user({ imports: [ routing ], declarations: [ ModuleAComponent ] })…

### CASE-3180 · Ergonomic component-level code splitting and lazy loading
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍79 💬73 · closed · labels: feature/area: core/feature: under consideration
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [X] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3193 · Lazy loaded module in named outlet throws error
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍120 💬58 · closed · labels: type: bug/fix/freq1: low/area: router/state: confirmed/router: aux routes
- **Excerpt**: [x] bug report [ ] feature request [ ] support request **Current behavior** Navigating to route with lazy loaded module in named outlet throws error: > Uncaught (in promise): TypeError: Cannot read property 'routes' of undefined **Expected behavior** Navigating to route with lazy loaded module in named outlet without errors. **Minimal reproduction of the problem with instructions** When I have configured my routes with named outlet and want to have lazy loaded module in that outlet. ```TypeScript export const routes: Routes = [ { path: '', component: AppComponent, children: [ { path: '',…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3145 · Rendering breaks in 3.6.6 and 3.6.7
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I can't provide a repro just yet, but I thought I'd report this bug immediately as it seems kinda bad. After upgrading from `3.6.5` to `3.6.7`, components don't get removed from DOM when they should. For example, a modal just stays on top of the page when it should have been removed on navigation. I tested at which release did the issue begin occurring, and it seems `3.6.6` introduced this behavior.

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3152 · Event handler removed after callback fails
- **Principles**: P-F5, P-H3 · **Env**: windows
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Hello, I found what I think is a bug. I listen to windows keyup events in a child component, so I can add and remove this component in a #if block (because my component is kind of a lightbox slideshow so most of the time it is not visible, so I want the event listeners to be removed). In the parent component, I listen to the events fired by the child and handle them with a method. What I found is that if the method throws an exception, the event handler of the parent will not be called anymore, but the child one still will be. [Here is an REPL demo]([link]). Steps to reproduce : 1. Go to the…

### CASE-3160 · Call ondestroy before cleanup
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed · labels: bug
- **Excerpt**: So that `this.refs` is still populated, etc. From [this Gitter convo]([link]]?at=5963505876a757f808f5cc29)

### CASE-3169 · Memory leak from changing mounted component's props
- **Principles**: P-F5, P-H3 · **Env**: macos, svelte
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Describe the bug Changing the props of a mounted component following the guide at [link] seems to increase the memory usage without it ever being released. This affects SvelteKit navigation as we set new props on every navigation. ### Reproduction [link] Instructions are in the README.md Memory leak still happens even when commenting out the `<Counter>` component ### Logs ```shell ``` ### System Info ```shell System: OS: macOS 26.3.1 CPU: (8) arm64 Apple M1 Pro Memory: 124.92 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.22.0 - /Users/teeming/Library/pnpm/node Yarn: 3.2.3 -…

