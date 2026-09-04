# Case Chunk 025 — Round 25

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3401 · Angular 9.x Polyfills - Lighthouse Error - Does not use passive listeners to improve scrolling performance
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular
- **Signals**: 👍2 💬20 · closed
- **Excerpt**: # 🐞 bug report ### Affected Package Angular 9.x pollyfills ### Is this a regression? I am not sure, I previously had score of 100 on Lighthouse in Chrome Dev tools, but recently it started displaying this error when I run audit for the website. It could a regression or may be the new version of Lighthouse just started reporting it. ### Description When I run Audit for my website in Lighthouse in Chrome Dev tools, it displays below error: `Does not use passive listeners to improve scrolling performance` and points to pollyfills file (`/polyfills-es2015.5715214….js(www.1eent.com) | line: 0`)…

### CASE-3411 · Disabled input considered as invalid in dynamic form
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, angular
- **Signals**: 👍3 💬20 · closed
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report [ ] feature request [ ] support request ``` **Current behavior** If you create a disabled field in a formGroup, even with no validators, the control for this field will be invalid. **Expected behavior** The control should be valid since the field's property can't be changed (the field is disabled, it's only shown for read-only informations). **Reproduction of the problem** [link] **What is the motivation / use case for changing the behavior?** **Please tell us about your environment:** - **Angular version:** 2.0.0-rc.6 - **Browser:** Chrome…

### CASE-3418 · Angular 16 @user('window:beforeunload', ['$event']) is not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chromium, chrome/, edge, angular
- **Signals**: 👍1 💬19 · closed · labels: area: core/core: host and host bindings
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Zone.js ### Is this a regression? No ### Description After migration from 15.2.10 to 16.2.* (tried 16.2.3 and 16.2.9) the working approach with showing the default browser preventing reload popup is not working any more. ![image]([link]]/assets/12762343/9f19298b-538c-4a39-bc7c-42a7ba62c366) Working minimalistic solution (Angular 15) [link] The same solution with Angular 16 (not working) [link] ### Step to reproduce - open [link] with Chromium based browser (Chrome/Edge) - wait until the app is built - open console - click between the…

### CASE-3423 · Uncaught ReferenceError: __importDefault is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari
- **Signals**: 👍10 💬19 · closed · labels: type: bug/fix/freq2: medium/area: compiler
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/...."9.0.0-next.2" ### Is this a regression? Yes, the previous version in which this bug was not present was: @user/...."8.0.0" ### Description App compiles with `ng serve` but is not being loaded in the browser with the above error referring to a line in the components metadata: ` templateUrl: './login.component.html',` ## 🔬 Minimal Reproduction [[link]]([link]) ## 🔥 Exception or Error <pre><code> (In Chrome: )Uncaught ReferenceError: __importDefault is not defined </code></pre> <pre><code> (In Safari: )…

### CASE-3427 · checkBindingNoChanges() attempting to check an index that does not exist
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍11 💬19 · closed · labels: area: core
- **Excerpt**: ## I'm submitting a... <pre><code> [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Minimal reproduction of the problem with instructions @user was kind enough to provide a repro case at [link] which is similar to what I'm seeing (the error seems limited to cases where visibility of a component is toggled). To see the error: 1. Open the above Plunker 2. Open the Chrome console 3. Press "Open OK" to see that the overlay appears when it is opened with a direct function call 4. Press "Open Appear Error" to see the `Cannot read property…

### CASE-3428 · Internet Explorer shows white screen
- **Principles**: P-G1, P-G2, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3440 · npm link doesn't work with angular2 packages
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular, webpack
- **Signals**: 👍9 💬19 · closed · labels: area: build & ci/area: packaging
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I have module A. I run `npm link` in that folder. I have module B. I run 'npm link A` in that folder. I import module A into module B. Webpack build runs without errors. But I get error in the Chrome: compiler.umd.js?9df7:14126 Uncaught Error: Unexpected value 'A' imported by the module 'B' **Expected…

### CASE-3449 · Multi data providers do not work correctly on safari 15.5
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 15, chrome, angular
- **Signals**: 👍0 💬18 · closed · labels: needs reproduction
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? router ### Is this a regression? I don't know that. ### Description On my [website]([link]) Angular calls two data providers like this: ```ts const routes: Routes = [ { path: '', component: PostComponent, resolve: { result1: ApiPostLeadResolver, result2: ApiPostBodyResolver, }, }; ``` In Google Chrome this code works correctly and in console you can see this two requests, but in Safari 15.5, Angular 13.3.8 calls only `ApiPostLeadResolver` and incorrectly set the result to `this.activatedRoute.snapshot.data.result2`. ### Please provide a…

### CASE-3450 · DOM Nodes Not Being Released - Possible Memory Leak
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3, P-H2 · **Env**: chrome
- **Signals**: 👍0 💬18 · closed · labels: memory leak/area: core/core: performance
- **Excerpt**: # 🐞 bug report ### Description I'm noticing DOM nodes are not being released when I enter a text-input value into a form and navigate away from the page. On larger projects with many elements on the page, the app gets laggy over time and memory usage continually increases. It is also evident in an app with the simplest form if you watch the performance monitor and do a performance recording in Chrome. I'm thinking this is a bug, but I'd love feedback if I'm doing something wrong or if there's a workaround. In my example app, if you repeatedly navigate back and forth between the Home page and…

### CASE-3454 · Service Worker Push requestSubscription error on SAFARI 12
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 12, safari
- **Signals**: 👍0 💬18 · closed · labels: type: bug/fix/area: service-worker/state: confirmed/browser: safari/P3
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/service-worker ### Is this a regression? I don't know ### Description The swPush requestSubscription break on SAFARI browser ## 🔬 Minimal Reproduction ```javascript import { Optional, Injectable } from '@user/core'; import { HttpClient } from '@user/common/http'; import { SwPush } from '@user/service-worker'; import { Observable } from 'rxjs'; import { environment } from '../../environments/environment'; import { PushNotification } from './notification'; @user({ providedIn: 'root' }) export class NotificationService {…

### CASE-3459 · animations: safari not animating back from the current state, but briefly jumping to the initial state
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: safari, chrome 61, safari 11, chrome, angular
- **Signals**: 👍3 💬18 · closed · labels: type: bug/fix/area: animations
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Bug report </code></pre> ## Minimal reproduction of the problem with instructions Check [link] in Chrome 61+ and in Safari 11+ or check this video [![]([link])]([link] "Chrome vs Safari") (related issue, using the same code [link]][ref]) ## Environment <pre><code> Angular version: 5.0.0-x Browser: Chrome, Safari </code></pre> cc @user

### CASE-3471 · [Bug] Animation API error in Safari, undefined.
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: safari, chrome, mobile
- **Signals**: 👍0 💬18 · closed · labels: type: bug/fix/area: animations/needs reproduction
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report ``` **Current behavior** The same animation works ok on chrome, but the animation breaks on safari, be it mobile or pc browser, currently using `web-animations-js` polyfill. ![image]([link]) <!-- **Reproduction of the problem** If the current behavior is a bug or you can illustrate your feature request better with an example, please provide the steps to reproduce and if possible a minimal demo of the problem via [link] or similar (you can use this template as a starting point: [link]). --> **Please tell us about your…

### CASE-3490 · Issue in RegularExpression of compiler.es5.js
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, angular
- **Signals**: 👍2 💬17 · closed · labels: type: bug/fix/regression/area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x ] Bug report </code></pre> ## Current behavior When compiling the code with angular 4.4.4 RegularExpression error occurs with compiler.es5.js in Chrome. Works for FireFox and IE **ERROR** ``` Uncaught SyntaxError: Invalid regular expression: /[^ áš€á Žâ€€-â€Š â€¯âŸã€€ ]/: Range out of order in character class at new RegExp (<anonymous>)…

### CASE-3495 · Internet Explorer 11 Datepipe
- **Principles**: P-G1, P-G2, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Submitting valid dates to the DatePipe will return an exception: ORIGINAL EXCEPTION: Invalid argument '2016-07-19 16:00:00' for pipe 'function DatePipe() {' **Expected/desired behavior** Datepipe working as expected **Reproduction of the problem** If the current behavior is a bug or you can illustrate your feature request better with an example, please provide the…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3402 · Unexpected behavior for providedIn services in TestBed
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍29 💬20 · closed · labels: feature/area: testing/freq3: high/P4/feature: under consideration
- **Excerpt**: `providedIn` has brought a lot of goodies into the Angular world, especially for lazy loaded modules configurations. BUT... On the testing side, it's current behavior is confusing and unwanted for isolation. <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a…

### CASE-3409 · Jsonp error `Uncaught ReferenceError: __ng_jsonp____req0_finished is not defined` after [link]][ref]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬20 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> hello, after upgrade to 2.4.6, I get `Uncaught ReferenceError: __ng_jsonp____req0_finished is not defined` as [link]][ref][ref] ![image]([link]) **Plunkr**…

### CASE-3415 · Control flow with defer inside does not clean up before httpClient ends its request
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed · labels: area: core/needs: clarification/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description Hi. I noticed that defer's @user block is not cleaned up before HttpClient completes its request. In v17 it doesn't wait for it. Demo video: [link] Full component code which reproduces the issue: ```ts import {Component, inject, PLATFORM_ID, signal} from '@user/core'; import {HttpClient} from "@user/common/http"; import {isPlatformServer} from "@user/common"; import {LoggedCmp} from "./logged-cmp"; import {TestCmp} from "./test-cmp"; import {User} from "./types"; @user({ selector:…

### CASE-3420 · Elements lazy load make unable to use providers in modules
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬19 · open · labels: type: bug/fix/workaround2: non-obvious/area: elements/state: confirmed/P3
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> The issue is caused by package @user/elements. ### Is this a regression? <!-- Did this behavior use to work in the previous version? -->…

### CASE-3421 · A9 - IE11 mixes up i18n units when lazy loaded
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬19 · closed · labels: type: bug/fix/area: i18n/needs reproduction/state: needs doc team review
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package @user/localize? (still unclear what the culprit is) ### Is this a regression? Yes, this was working in A8 ### Description We are experiencing a regression in IE11 after upgrade to A9. A somewhat complex page consisting…

### CASE-3424 · Can't resolve all parameters for ApplicationModule: (?).
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: type: bug/fix/area: core
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Description This is my github sample repository [ [[link]]]([link]) which has simple image as a template. when i try to run this in a stacblitz sample it throws this error: > Unhandled Promise rejection: > Can't resolve all parameters…

### CASE-3435 · angular2 router dose not work when “loadChildren” loading modules
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍4 💬19 · closed · labels: type: bug/fix/needs reproduction/area: router
- **Excerpt**: I have a router definition like this: ``` const routes: Routes = [ { "path": "member", "loadChildren": "app/member/member.module#MemberModule" }, { "path": "", "loadChildren": "app/video/video.module#VideoModule" }, { "path": "**", "redirectTo": "" } ] ``` MemberRouter definition like this: ``` const routes: Routes = [ { "path": "order", "component": MemberComponent, "loadChildren": "app/member/order/order.module#OrderModule" }, { "path": "", "component": MemberComponent, "loadChildren": "app/member/index/index.module#IndexModule" } ] ``` OrderRouter definition like this: ``` const routes:…

### CASE-3443 · Using module.id with component makes it not load
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: I am trying the 'hero' example on angular.io and using JSPM to load my scripts (non-bundled). To get relative urls for my templates, i tried the method in [ref] and added `moduleId: module.id` to my component. ``` import {Component} from 'angular2/core'; import {Hero} from "./hero"; @user({ selector: 'my-hero-detail', inputs: ['hero'], moduleId: module.id, templateUrl:'heroes.html' }) ``` However, doing so and then running the app, makes the html stuck at 'Loading...' with no errors in the console. Screenshot: <img width="232" alt="angular_2_quickstart" src="[link]>

### CASE-3453 · Service worker does not update response headers
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍1 💬18 · closed · labels: area: service-worker
- **Excerpt**: # 🐞 bug report ### Affected Package @user/pwa @user/service-worker ### Is this a regression? No ### Description Response headers are not updated when service worker updates assets. ## 🔬 Minimal Reproduction Example with CSP header: 1. Add restricting Content Security Policy header on production server, like `img-src 'self'` 2. Add a violation to the restriction in you app (link to an image on different host) 3. Open angular PWA enabled application and ensure that CSP blocks that violation (in production) 4. Change CSP policy on the server to allow image requests to that host `img-src 'self'…

### CASE-3458 · routerLinkActive + OnPush + lazy routes = strange behavior
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍15 💬18 · closed · labels: type: bug/fix/freq2: medium/regression/area: router/state: has PR
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [X ] Regression (a behavior that used to work and stopped working in a new release) [X ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior When using the `routerLinkActive` directive inside a component that is using `ChangeDetectionStrategy.OnPush` and lazy loaded…

### CASE-3460 · Angular is complaining about dataUrl with SVG image to be unsafe
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍32 💬18 · closed · labels: type: bug/fix/freq2: medium/area: core/state: confirmed/core: sanitization
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior When using `<img src="{{item.image}}" alt=""/>`and the item.image is set to `dataUrl` containing a valid SVG image Angular is complaining with the following: `WARNING: sanitizing unsafe URL value data:image(...)` and then the image won't load: `GET…

### CASE-3461 · router CanLoad Route guard broken for common use case
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍7 💬18 · closed · labels: feature/freq2: medium/area: router/router: guards/resolvers
- **Excerpt**: there is an issue filed but it is listed as a feature request and i think it needs to be more of a priotity: [link]][ref] **I'm submitting a ...** (check one with "x") ``` [ x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** an angular app has a feature module that should be lazy loaded , a CanLoad guard needs to deal with the use case that the caller is not yet authenticated and needs to get a token…

### CASE-3466 · New tab opened with target="_blank" is throwing HTTP Status 404 error
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: **Current behavior** <!-- Describe how the bug manifests. --> opening new tab is throwing HTTP Status 404 error on page. Below given is the html template code <a class="left-header-images-link" routerLink="/test" target="_blank"> Found below error in browser console **"Failed to load resource: the server responded with a status of 404 (Not Found)"** **Expected behavior** It should not throw error and new tab should be loaded as per component template **Minimal reproduction of the problem with instructions** <!-- If the current behavior is a bug or you can illustrate your feature request…

### CASE-3467 · Router event lazy loaded route
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> If a route is lazy loaded using a [preloading strategy]([link]), there is currently no way of knowing _when_ the route is loaded. **Expected behavior** <!--…

### CASE-3474 · ViewEncapsulation.None styles bleed into ViewEncapsulation.Native components when siblings
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬18 · open · labels: type: bug/fix/freq1: low/area: core/core: CSS encapsulation/P3
- **Excerpt**: When there are sibling components, one with ViewEncapsulation.Native and the other with ViewEncapsulation.None, the styles that any component stylings are being appended to the shadow root of the one component set to Native. ~~Plunker: [link] **Updated Stackblitz**: [link] <img width="491" alt="screen shot 2015-11-01 at 9 58 03 pm" src="[link]> A component set to Native should not adopt the rest of the CSS rules from non-Native components. In the screenshot of the rendered DOM, the last three style elements are appended to the end of the shadow root, but they are actually declared in the…

### CASE-3475 · Targeting child elements in CSS breaks outside of library
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬17 · closed · labels: area: core/gemini-triaged
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? No ### Description I've got an angular workspace with a library and an app. Inside the library I've got a component which uses content projection with ng-content. In the CSS I target the children - in this case LI - within the host selector. <img width="811" height="709" alt="Image" src="[link] /> Inside the library this works, but when I use it inside the app these styles are not applied. When I check the generated styles I see they are generated but the **attribute selector for the LI is…

### CASE-3476 · @user(ID of IDs; track ID) and NG0956 - provide a way to prevent warning when tracking by item is legit scenario
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍38 💬17 · open · labels: area: core/core: control flow
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description We are rendering nodes: ``` @user(id of ids; track id) { <node [id]="id"/> } ``` <img width="581" alt="image" src="[link]]/assets/10418323/37f12438-3772-427d-85ac-9a9763f209d1"> But we are getting NG0956 warning: `...and make sure that it uniquely identifies items in a collection` I understood is it usually not good idea to track collection nodes by themselves. However, this is exception, because collection is list of IDs of the nodes and "ID" is unique identifier of the node. Please…

### CASE-3477 · Unable to deserialize cloned data during `Components in Angular` tutorial
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: ### Describe the problem that you experienced `Components in Angular` tutorial is broken for me: [link] Other pages of the tutorial seem to be working though? ### Enter the URL of the topic with the problem [link] ### Describe what you were looking for in the documentation _No response_ ### Describe the actions that led you to experience the problem _No response_ ### Describe what you want to experience that would fix the problem _No response_ ### Add a screenshot if that helps illustrate the problem <img width="960" alt="Screenshot 2024-05-28 at 1 57 54 PM"…

### CASE-3482 · `isDevMode` not working in library: "cannot enable prod mode after platform setup"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: area: core/core: bootstrap/P4
- **Excerpt**: # 🚀 feature request ### Relevant Package <!-- Can you pin-point one or more @user/* packages the are relevant for this feature request? --> This feature request is for @user/core ### Description <!-- ✍️--> A clear and concise description of the problem or missing capability... Yeah, here is the problem. I have multi project: ![image]([link]) And then instead of having 2 * 4 = 8 enviroment file duplicate for firebase information: ![image]([link]) I really want to create only one module like this to easy import firebase module once (instead of 4 times): ![image]([link]) but since `isDevMode`…

### CASE-3486 · Treeshakeable Injector resolution logic doesn't work in a lazy loaded scenario
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍11 💬17 · closed · labels: type: bug/fix/freq3: high/area: core
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> ## Current behavior When combining lazy-loading via the Router + the v6 `providedIn:…

### CASE-3500 · Problem with new project scaffolding and standalone being default to true
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? Yes ### Description I don't know if this is a problem with Angular or the Angular Language Service - or maybe something else. But when you do `ng create test-app` with Angular v19.0.0 and open up `app.component.ts` I am being told that: ``` 'imports' is only valid on a component that is standalone.(-992010) app.component.ts(10, 14): Did you forget to add 'standalone: true' to this @user? ``` Reference image: ![Image]([link]) It compiles just fine, but the error throws you off :) Can be fixed…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3403 · Class methods are lost when passing in obj as component input
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3412 · Enable partial form components using reactive form directives
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍12 💬20 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** A component can only use form reactive directives such as `formControlName` or `formGroupName` when its template contains the `formGroup` directive. Otherwise, the directives will fail to resolve `ControlContainer`. This happens because the directives specify the `@user` metadata on `ControlContainer`. The only workaround I could find is to inject the ancestor's…

### CASE-3413 · form controls and content projection
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬20 · closed · labels: area: forms
- **Excerpt**: - **I'm submitting a ...** - [x] feature request When you try to use `ngControl` or `ngControlGroup` inside a child component template, or/and inside `<ng-content>` / `<template>` it doesn't work. Probably because its scope is somehow limited to it's direct parent, and thus can't find that is on the parent directive `[ngFormModel]`. This makes it really hard to create some dynamic forms. The whole usecase is: my form model shape looks like this ``` javascript { contents: ControlGroup({ title: ControlGroup({ en: ControlGroup({ id: Control(), content: Control() }) }) }) } ``` and I'm…

### CASE-3414 · Passing values between components, ng-control, ngFormModel and ng-model
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: type: bug/fix/effort1: hours
- **Excerpt**: 1) Could I do something like this? ``` js @user({selector: 'input-text', properties: ['controlPath: control', 'value: data']}) @user({ template: ` <div class="form-group"> <label [attr.for]="controlPath">{{controlPath | uppercase}}</label> <input type="text" class="form-control" [id]="controlPath" [(ng-control)]="controlPath" [placeholder]="controlPath" [(ng-model)]="value"> <show-error control="{{controlPath}}" [errors]="['required']"></show-error> </div> `, directives: [ShowError, FORM_DIRECTIVES] }) class InputText { controlPath: string; value: string; constructor() { } } ``` ``` js…

### CASE-3416 · NG8011: Node matches the X slot of the Y component, but will not be projected into the specific slot because the surrounding @user has more than one node at its root.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍21 💬19 · open · labels: area: core/area: compiler/core: control flow
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler ### Is this a regression? Yes ### Description I have the following code which causes a warning during compilation, but the warning suggests fixes that don't apply to the code in question. ```html <mat-form-field subscriptSizing="dynamic"> <mat-label>Phone Number</mat-label> <input matInput [formControl]="form.controls.phoneNumber" required type="tel" /> @user (form.controls.phoneNumber.hasError('isPhoneNumber')) { <mat-error>Must be a valid U.S. phone number</mat-error> } </mat-form-field> ``` This caused the following compiler…

### CASE-3417 · @user(A && B) {} should be the same as @user (A) { @user(B) {}} but is not
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍16 💬19 · open · labels: area: core/core: content projection/core: control flow
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description @user(A && B) {} should be the same as @user (A) { @user(B) {}} but is not I wanted to work with angular material form-field. I tried to condition mat-errors. I wrote a first @user to test if the field is touched or not and inside several @user to test the different error cases. expected : as usual a beautiful mat-error design Result : the mat-error is not displayed as expected. No design for him. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the…

### CASE-3422 · OnPush strategy and Observable Input
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: area: core
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/core ### Is this a regression? Don't think that is a regression ### Description I'm trying to pass an observable from a parent component, using OnPush strategy, to a child. First value of this observable is undefined, then later, on ngOnInit, I create the observable with a dummy value => I though that the ngOnChanges of the child component would be triggered because moving from undefined to an observable instance is a reference change, but not. When removing the change strategy on the parent, the child's ngOnChanges is…

### CASE-3429 · ngSubmit when built with --prod flag not preventing form default behavior
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬19 · closed · labels: area: core/area: forms
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request </code></pre> ## Current behavior I've bumped in some strange error working on my project. When I build it with --prod flag, (submit) and (ngSubmit) in my forms just stop preventing default form behavior and page reloads after submition. Also, passing event and preventing it in…

### CASE-3432 · FormGroup.disable() and FormGroup.enable() do not allow resetting disabled state.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍33 💬19 · closed · labels: feature/freq2: medium/area: forms/P4/feature: under consideration
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior When dealing with an ngForm, I want to disable all included controls so users cannot modify them, e.g. during submit. ``` <form (ngSubmit)="onSubmit()" #form="ngForm"> <input [disabled]="disabled"> <input disabled="true"> <!-- always disabled --> </form>…

### CASE-3434 · Reactive Forms: modifying a FormArray does not flip dirty switch
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍12 💬19 · closed · labels: area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When you add or remove `FormGroup` items to or from a `FormArray`, it does not cause the form to become dirty. **Expected behavior** The root `FormGroup` of a form should be in the dirty state after…

### CASE-3436 · @user @user cannot set @user of @user
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍52 💬19 · closed · labels: hotlist: error messages/freq2: medium/area: core/core: inputs / outputs/core: host and host bindings
- **Excerpt**: **I'm submitting a bug** ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** This is an issue similar to [ref]. There seems to be a problem whereby an `@user` cannot set an `@user` input property. Meaning if you apply a directive to the component's tag and have said directive set the component's input property using an `@user` it throws the following error: `Can't bind to 'X' since it isn't a known…

### CASE-3438 · AbstractControl.markAs* asymmetry is confusing, limiting
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬19 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [x] feature request ``` **Current behavior** There are `markAs` methods that can manipulate a form's internal validation state. These are highly useful. However, they propagate to children only sometimes. The following methods also mark their children: `markAsUnTouched` `markAsPristine` These methods do **not** mark their children: `markAsTouched` `markAsDirty` I'm not even sure what this method is for... `markAsPending` **Expected behavior** All methods to mark validation should interact with their groups either always or…

### CASE-3439 · Binding to [name] on radio inputs does not provide browser-default tab interaction
- **Principles**: P-G4, P-E3 · **Env**: ios
- **Signals**: 👍8 💬19 · open · labels: type: bug/fix/freq2: medium/workaround2: non-obvious/area: forms/state: confirmed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting ``` **Current behavior** When the the `name` attribute of a radio input is bound using `[name]='name'`, it appears that the actual name attribute is not set with the bound value. This causes incorrect tab behavior for groups of radios. If I have a component with 3 radios, and repeat that component 3 times, then all 9 radios behave as if they had the same name (they collectively act as a single tab stop, and the arrow keys can be used to navigate between all 9 when any…

### CASE-3447 · Angular Elements: Can't access input property's value inside ngOnInit() after compiling the web component
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍3 💬18 · open · labels: area: elements
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? elements ### Is this a regression? No ### Description I am creating a web component using Angular Elements 15, and it seems that when I pass a property to my web component, the property returns undefined in the ngOnInit and ngAfterViewInit hooks. I also noticed that ngAfterViewChecked() runs several times (for the very basic component in the reproduction link below) with the value of the property being undefined. I am wondering if this is expected behavior and if so, when do we know for sure that we can access a custom element's Input()…

### CASE-3448 · Form control value is null when initialized with undefined
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍37 💬18 · open · labels: area: forms/P3/bug/forms: strictly typed/canonical
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? No ### Description When you initialize a `FormControl` with an `undefined` value (initial state) the `FormControl#value` is null. The value is `null` instead of `undefined` to be short ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true If you try to do test something like the test will fail // control was initialized with undefined expect(control.value).toBe(undefined) // <-- in fact, this is null ``` ### Please provide the…

### CASE-3463 · VALID Not Found From Import After Updating to Angular 4
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ X ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> After updating to Angular 4 when importing VALID from `import from "@user/form/src/model ` I get > ERROR in ./src/app/contract/contract.component.ts > Module…

### CASE-3464 · Language Service: Identifier 'valid' is not defined. 'NgForm' does not contain such a member
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬18 · closed · labels: type: bug/fix/area: language-service
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** If you open documentation for `NgForm` [link] you will see example: ```typescript @user({ selector: 'example-app', template: ` <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate> <input name="first" ngModel required #first="ngModel"> <input name="last" ngModel> <button>Submit</button> </form> <p>First…

### CASE-3465 · How to prevent IE11/10/9 from triggering automatically input validation?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬18 · closed · labels: type: bug/fix/freq2: medium/area: forms/state: confirmed/P4
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> `<md-dialog-content>` `<form [formGroup]="privilegeForm">` `<md-input-container class="account-login-material" style="width: 100%">` `<input mdInput required…

### CASE-3468 · Reactive forms - can't add additional data with FormArray
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬18 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** ``` [ x ] bug report => search github for a similar issue or PR before submitting [ x ] feature request ``` **Current behavior** When working with FormArray, there is no way to add additional data to the markup. **Expected behavior** We need a way to add additional data to the markup. **What is the motivation / use case for changing the behavior?** The best example is labels for checkboxes and radio buttons. ```ts @user({ selector: 'my-app', template: ` <form [formGroup]="checkboxGroup"> <div formArrayName="food"> <div *ngFor="let control of foodArray.controls; let…

### CASE-3473 · Backspace and delete keys on input text doesn't update model on IE9.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: type: bug/fix/freq2: medium/area: core/workaround2: non-obvious/state: confirmed

### CASE-3480 · Using ngIf, DOM nodes cannot be garbage collected because of form control
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍14 💬17 · closed · labels: type: bug/fix/memory leak/area: forms/state: confirmed/P3
- **Excerpt**: # 🐞 bug report ### Is this a regression? No ### Description Not sure if I am using this in the wrong way. I get a leak when I switch a container (using ngIf) which has reference to form control inside it. I provided a stackblitz for reproducing the issue. I also provided a stackblitz where I remove the control from the form group when I toggle the container. That resolves the issue but is that what I am expected to do or how do I go about this? ## 🔬 Minimal Reproduction To reproduce: [link] Example where I remove the form control on every toggle: [link] ## 🔥 Exception or Error The full…

### CASE-3481 · Dynamic imports not working for libraries
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: area: core/core: dynamic view creation/type: use-case
- **Excerpt**: # 🐞 bug report ### Is this a regression? No. New thing ### Description Dynamic imports works ok in the application but when you try to use them inside sharable library to cover more advance usecases, I cant seems to make it work. Let's say you want to use this simplified component that can accepts path to import and component name you want to insert this instantiated component to the view: ```html <m-renderer [name]="'MyInputComponent'" [path]="'@user/ui-lib'"> </m-renderer> ``` or ```html <m-renderer [name]="'MatInput'" [path]="'@user/material/input'"> </m-renderer> ``` Simple usecase to…

### CASE-3487 · Text not displaying after form fields
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior In the attached project, the login page contains some text in a span tag with a class of error. This uses {{errorMessage}}…

### CASE-3489 · [Proposal] Initial / Original value API for AbstractControl
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍41 💬17 · closed · labels: feature/state: Needs Design/area: forms/feature: under consideration
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [x] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior Right now form controls do not remember its original value. ## Expected behavior FormControl, FormGroup. FormArray: * has property `readonly original: any` _holding original value_…

### CASE-3493 · Error: No provider for FormControl
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬17 · closed · labels: needs reproduction/area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When my directive constructor injects `NgForm`, it throws `Error: No provider for NgControl!` **Expected behavior** It's working when I using Angular 4.0. So my directive can refer to the form control…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3404 · ExpressionChangedAfterItHasBeenCheckedError - HostBinding and Animations `.done`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍11 💬20 · closed · labels: type: bug/fix/area: animations/freq3: high/P3
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior When I am using `HostBinding` and Animation `.done` and I update an property that is being using in HostBinding I am getting…

### CASE-3405 · Animations: animateChild() not working correctly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍9 💬20 · closed · labels: area: animations/regression
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior This bug war not present in Angular 4.2.0-rc.1. But it appears with any newer version. Test setup contains two components. The parent component is created and destroyed by *ngIf.…

### CASE-3407 · AoT "function calls are not supported" error with exported animation function
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬20 · closed · labels: type: bug/fix/freq4: critical/area: core
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Currently I'm getting an error of the form: ``` ERROR in Error encountered resolving symbol values statically. Calling function 'rotate', function calls are…

### CASE-3408 · BrowserAnimationsModule not available via barrel / public api
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I'm using SystemJS and [link] and I can't import BrowserAnimationsModule. Import: `import { BrowserAnimationsModule } from '@user/platform-browser/typings/animations';` Error: ``` VM686:2 GET [link]…

### CASE-3431 · bug(animations): Cannot read property insertNode of undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed · labels: type: bug/fix/area: animations/regression
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3441 · Dart angular transformer hangs
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, angular
- **Signals**: 👍0 💬19 · closed
- **Excerpt**: This happens after upgrading to b15, prior versions run just fine. It is a closed source project, and other ng2 projects do run fine in b15. When I fire up pub serve, it loads the angular 2 transformers, and they just hang up without any output whatsoever. I can best describe it as if a Future never completes and the transformer is just waiting forever. This is with Windows 10 Sdk 1.15.0 Angular 2 b15

### CASE-3445 · `(animate.leave)` doesn't work on host
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: area: core/core: animations
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations ### Is this a regression? No ### Description Self-explanatory. Open and close the popup, the "leave" animation doesn't work. I'm trying to avoid adding unnecessary wrapping `@user` in Popup component (as I do [here]([link])) to achieve pretty basic goal of creating a wrapping component with enter/leave animations, which the component's host doesn't know anything about. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the environment you discovered this bug in (run `ng version`) ```true…

### CASE-3451 · Enter and leave animations don't behave as expected with parent-child relationships
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍7 💬18 · closed · labels: type: bug/fix/area: animations/freq3: high/P3
- **Excerpt**: # 🐞 Bug report ### Affected Package @user/animation or @user/core ### Is this a regression? I've made a Stackblitz with Angular 9, 8 and 7. All versions have this problem. ### Description There is a problem when you nest a component with an :enter and :leave animation inside a parent which is conditionally visible using *ngIf. When the parent is visible for the first time there is no issue. Once you trigger the parent to leave and enter again, the child will not be visible. It looks like the leave animation of the child gets triggered when the parent leaves but the enter animation isn't…

### CASE-3455 · Angular 6 Animation is not working in IE
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍7 💬18 · closed · labels: type: bug/fix/area: animations/freq2: medium/regression
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3470 · Testability remains unstable when using requestAnimationFrame - ngZone will always have pending macro tasks
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍8 💬18 · closed · labels: type: bug/fix/needs reproduction/freq1: low/area: zones/P3
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> The testability service will remain unstable when using requestAnimationFrame. The zone will always have pending macro tasks which leaves testability in an…

### CASE-3483 · Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value for '@user': 'undefined'. Current value: 'NewAnimationName'.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍21 💬17 · closed · labels: type: bug/fix/area: animations/freq2: medium/area: router/state: confirmed
- **Excerpt**: [RouteAnimationError.zip]([link]]/files/4361634/RouteAnimationError.zip) <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> Not clear. Possibly @user/animations or…

### CASE-3484 · docs: clarify ivy breaking change for `ngFor` and `<select>` with animations and no `trackBy`
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: angular
- **Signals**: 👍3 💬17 · closed · labels: area: core
- **Excerpt**: # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue seems to be related to package @user/platform-browser ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> <!-- ✍️--> Yes, the previous version in which this bug was not present was: v8.* (8.2.14) ### Description Upgrading to Angular v9 broke the functionality of `<select>` for us. The `*ngFor` directive we use for populating it with `<option>` elements now all of the sudden re-renders items if you simply refresh…

### CASE-3485 · bug(animations): Element rendered twice when animated
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍10 💬17 · closed · labels: type: bug/fix/area: animations/freq2: medium/P4
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3488 · BUG: Animations cause tests to fail on PhantomJs after upgrade to ng5
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍8 💬17 · closed · labels: type: bug/fix/area: animations/freq2: medium
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior After upgrade to Angular 5 tests keeps failing on animations with following error. ``` Error: The animation trigger "flyInOut"…

### CASE-3491 · Route Transition no longer working if loaded component has animation trigger
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍9 💬17 · closed · labels: type: bug/fix/area: animations/freq2: medium/P3
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request </code></pre> ## Current behavior Navigating between components using animations on route changes causes the newly loaded component to not display and to have a display:none; style if the component also has an animation trigger defined (even if not used). Animations between other components are working as expected however simply adding…

### CASE-3492 · ServerModule + NoopAnimationsModule - Cannot read property 'display' of undefined at cloakElement
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍19 💬17 · closed · labels: type: bug/fix/freq2: medium/area: server
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3494 · From/To Keyframes animations break theirself and the router
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍4 💬17 · closed · labels: type: bug/fix/area: animations/needs reproduction/freq1: low
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Angular fails to execute Web Animations API if you use from/to keyframes. I've found something [here]([link]), but I don't know how I could make use of what is…

### CASE-3498 · The `animate.enter` animation won't run with CSS transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: area: core/core: animations
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description The `animate.enter="fade-in"` animation will not run, and will be permanently stuck "not running" when using CSS `transition`. I think `transition` is supposed to be supported (even though "transforms" is used instead of "transitions" in the paragraph below). > ... You can define enter animations using CSS classes with either **transforms** or keyframe animations. > \- [link] The root cause for this is that compared to a keyframe animation, for `transitionstart` to _"run"_, the class must…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3406 · RouteReuseStrategy components are not destroyed even if shouldDetach is true and shouldReuseRoute is false
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍7 💬20 · closed · labels: area: router
- **Excerpt**: **I'm submitting a ...** ``` [ x ] bug report ``` **Current behavior** I am using a specific RouteReuseStrategy where the master page of certain master-detail views should be reused. All other views are not reused. Those other views are indeed not being reused, but they should be destroyed. This does not happen and ngOnDestoy() is never called for those views/components or their child components. But I do need these components to destroy properly in order to perform some cleanup work. **Expected behavior** The component and its children of a route that is not being reused should be destroyed…

### CASE-3457 · feat(service-worker): add staleWhileRevalidate strategy
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍9 💬18 · closed · labels: feature/freq1: low/area: service-worker
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [x] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3499 · JavaScript heap out of memory when using cleanup-unused-imports
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍18 💬16 · closed · labels: area: migrations
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description Every time I execute the `ng generate @user/core:cleanup-unused-imports` schematic on my project, I get a "FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory" Is it possible to add a parameter to make it run on a folder level like the control flow schematic? ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Preparing analysis for projects/first-app/tsconfig.app.json…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3410 · Metadata version changed to 2 in 2.2.2, breaking consumers with older versions
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍12 💬20 · closed · labels: regression
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report [ ] feature request [ ] support request ``` **Current behavior** Metadata built with Angular >= 2.2.2 comes out with version 2 due to dddbb1c1cb08115f339e34487774c85a3c6493f3. An application with Angular <= 2.2.1 won't be able to consume this metadata, throwing the following error: ``` Error: Metadata version mismatch for module /home/local/TELERIK/tsonev/gitlab/angular-aot/node_modules/@user/kendo-angular-buttons/dist/es/button.service.d.ts, found version 2, expected 1 at StaticReflector.getModuleMetadata…

### CASE-3419 · [zone.js] Node > 16.17.1: Method Promise.prototype.then called on incompatible receiver
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍8 💬19 · closed · labels: area: zones/P3
- **Excerpt**: Prerendering throws an error when used with a Node version > 16.17.1 # 🐞 Bug report #### What modules are related to this issue? <!-- ✍️edit: --> - [x] builders - [ ] common - [ ] express-engine ### Is this a regression? <!-- Did this behavior used to work in the previous version? --> Yes, the previous version in which this bug was not present was: 14.x ## 🔬 Minimal Reproduction Create a new v15 CLI workspace, add SSR and run prerendering: ```bash npx -p @user/cli@user ng new testproject --routing --style=css cd testproject npm run ng -- add @user/express-engine@user npm run ng -- run…

### CASE-3425 · bug(elements): importing `createCustomElement` breaks SSR
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍3 💬19 · closed · labels: type: bug/fix/freq1: low/area: server/area: elements/state: confirmed
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Current behavior <!-- Describe how the issue manifests. --> Importing `createCustomElement` throws an error during angular universal server side rendering. Note: it appears that simply importing the function throws the error. Currently, even the following code throws an error during SSR: ``` import {createCustomElement} from '@user/elements'; . . . export class AppModule { constructor() { if (false as…

### CASE-3430 · Angular 5.0.0 AoT style generation spends 2 minutes on a `replace` call
- **Principles**: P-F4 · **Env**: angular, typescript
- **Signals**: 👍0 💬19 · closed · labels: type: bug/fix/area: performance/freq2: medium/area: core
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report [ ] Feature request [ ] Documentation issue or request </code></pre> ## Current behavior Following the steps suggested in the CLI (except for using Typescript 2.5.3 instead of 2.4.x), our project takes around 128 seconds on the 4rd rebuild with AoT enabled. Looking at the CPU profile, we can see that almost 2 minutes are spent doing a `replace` in `StyleCompiler._codegenStyles` (more specifically, `processRules`) which indicates that something is going very…

### CASE-3446 · App With Incremental Hydration Randomly throwing Error on Client Side navigation after upgrading to 19.0.0-rc.1: Cannot read properties of null (reading 'lView')
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: area: core/core: incremental hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description After upgrading to `19.0.0-rc.1`, applicaiton with Incremental Hydration ranomly throws below error on client side navigation: ``` ERROR TypeError: Cannot read properties of null (reading 'lView') at triggerAndWaitForCompletion (core.mjs:23653:53) at core.mjs:37397:9 at Generator.next (<anonymous>) at chunk-4MWRP73S.js?v=556a462a:76:61 at new ZoneAwarePromise (zone.js:2702:25) at __async (chunk-4MWRP73S.js?v=556a462a:60:10) at fetchAndRenderDeferBlock (core.mjs:37396:53) at…

### CASE-3456 · Universal not rendering due to 'Http failure response for (unknown url): 0 Unknown Error',
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬18 · closed
- **Excerpt**: I did at one point have ssr working but somewhere along the line it's broken and I just can't find what's causing the error. There are no errors client side and it renders fine but server side I get the following error which is preventing it rendering server side. My issue is that it's a large app I a just can't pinpoint where the issue is. ``` HttpErrorResponse { headers: HttpHeaders { normalizedNames: Map {}, lazyUpdate: null, headers: Map {} }, status: 0, statusText: 'Unknown Error', url: null, ok: false, name: 'HttpErrorResponse', message: 'Http failure response for (unknown url): 0…

### CASE-3478 · Connecting to websocket leaves app in unstable state
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: area: core/area: zones/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description When Hydration is being used and websockets (repro is using socket.io) are being connected to the client never becomes stable thus hydration never occurs. For a while now we have always not initialized websockets while on the server (using `isPlatformBrowser(PLATFORM_ID)`) because they completely hang the universal server (I now understand this is because the `ApplicationRef` does not become stable) but now when using hydration, hydration never occurs for the same reason just not on the…

### CASE-3479 · Rehydration doesn't work with throw error `el.setAttribute is not a function` in Angular 16 rc.1
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬17 · closed · labels: area: core/state: has PR/P2/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description When we enable `provideClientHydration(withNoHttpTransferCache())` option in AppModule and check ssr hydration result, I got some error which is unhandled by NG0XXX error code. I don't know how to reproduce this error in stackblitz yet. But hope it could be helpful if we provide callstack for error message first. Here is the error callstack. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true re.mjs:10057 ERROR…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3426 · TS2451: Cannot redeclare block-scoped variable 'ngDevMode'.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍11 💬19 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3433 · Bad failure mode when missing module import for router destination
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed · labels: type: bug/fix/hotlist: error messages/freq4: critical/area: router/area: core
- **Excerpt**: ### Problem When routing to a component where its NgModule is not imported, the application fails in an unexpected way (that is, it _should_ fail, but in a more expected way). Ultimately this is a case of bad error reporting. ### Reproduction [link] * Clone the repo * `npm i` * `ng serve --aot` * Visit [link] and click the "Other page" link ### Current behavior In this production, you will see the error `No provider for FocusOriginMonitor!`. The provider is missing because `MdCheckbox` injects `FocusOriginMonitor`, but the `MdCheckboxModule` was never imported anyway (even transitively). ###…

### CASE-3437 · i18n: support variables as translation key
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍16 💬19 · closed · labels: feature/area: i18n
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I currently can't find a way to use variable values as translation keys. I'm basically trying to do something like this: ``` <select id="state" name="state" [(ngModel)]="task.state" class="form-control"> <option *ngFor="let state of states" [value]="state" i18n> {{state}} </option> </select> ``` where…

### CASE-3444 · using @user in TS throws an error during compilation
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: type: bug/fix/effort1: hours
- **Excerpt**: It looks like if I use the `@user` on a class constructor: ``` js constructor(@user('tabindex') tabindex: string) {} ``` it causes the TS compiler to throw a semantic error: ``` sh src/app/components/checkbox/checkbox.ts(63,14): error TS1239: Unable to resolve signature of parameter decorator when called as an expression. Supplied parameters do not match any signature of call target. ```

### CASE-3462 · Accessibility Audit of Angular.io - Homepage only
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3, P-B1, P-B2, P-B3 · **Env**: angular
- **Signals**: 👍7 💬18 · closed
- **Excerpt**: I was asked by the Angular team to do an accessibility audit of the new [Angular.io]([link]). Here is the initial **bug report:** ## **Color Contrast** For font-sizes under 18px, the [contrast ratio]([link]) must be 4.5:1 to be visible. For large/bold text, it can be 3:1. The text and links in the footer would benefit from a darker background, or bold text / larger font size so they are more legible to people with low vision. And yes, there are low-vision web developers! ### 21 Color Contrast Violations - DEVIntersection Europe Register Button: `Element has insufficient color contrast of 1.38…

### CASE-3469 · Allow child components of a `changeDetection: OnPush` host to have `Default` change detection
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬18 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Child components of a `changeDetection: ChangeDetectionStrategy.OnPush` can't go back to `ChangeDetectionStrategy.Default`. Plunkr: [link] ![image]([link]) One root component with `ChangeDetectionStrategy.OnPush` + three child components that have an asynchronous interval that changes its variable…

### CASE-3496 · Angular 2.0 should have a (documented) a11y story.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍0 💬17 · closed · labels: feature/effort3: weeks
- **Excerpt**: In Angular 1.0 Dart, it was necessary to add all kind of wild hacks to get this support, e.g. ``` dart class MaterialRadioButton { @user void attach() { _disposer.addDisposable(node.onClick.listen((_) => changeSelection())); _disposer.addDisposable(node.onKeyDown.listen(handleKeyDown)); // outline for keyboard navigation _disposer.addDisposable(node.onKeyUp.listen((KeyboardEvent keyEvent) { if (keyEvent.keyCode == KeyCode.TAB) { _ngElement.removeClass("mouse"); } })); _disposer.addDisposable(node.onMouseDown.listen((_) { _ngElement.addClass("mouse"); })); // add subs for propper group control…

### CASE-3497 · Syntax error with Angular Language Service VSCode extension
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍3 💬16 · closed · labels: area: vscode-extension
- **Excerpt**: ### Is this a bug report or a feature request? - [x] Bug Report - [ ] Feature Request ### Please provide the steps to reproduce the issue [Bug Report only] - Use VSCode extension "Angular Language Service" - Create an application in Angular 18 - Create a somehow complete standalone component (with imported moduls and variables used in templates) - Constat ### Please provide the expected behavior vs the actual behavior you encountered [Bug Report only] Expected : Correct validation of template syntax. Current : Uncorrects errors (does not prevent compilation) ### Please provide a screenshot if…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-3442 · [question] Support for image/font relative paths in css
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍16 💬19 · closed · labels: type: bug/fix/freq2: medium/area: core
- **Excerpt**: I found a few very old issues about this, but the code seems to have been refactored a lot since. ([ref]) I couldn't find any support for this any more. Example: ``` project │ app.js └───components ├───my-component │ │ my-component.ts │ │ my-component.css │ │ image.jpg ``` my-component.css ``` div { background: url('image.jpg') } ``` Since the css is put into style tags, the browser assumes it's relative to the root, not the `my-component.css` file (or to `my-component.ts` if it's inlined). Also, the host may be different - the files could be served from different domain, and expect the image…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-3452 · 9.0.0-rc.8 build failed
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: type: bug/fix/needs reproduction
- **Excerpt**: # 🐞 bug report ### Affected Package @user/compiler": "9.0.0-rc.8 ### Is this a regression? Yes, the previous version(9.0.0-rc.7) in which this bug was not present was: .... ### Description Not building anymore ## 🔬 Minimal Reproduction Issues that don't have enough info and can't be reproduced will be closed. You can read more about issue submission guidelines here: [link]]/blob/master/CONTRIBUTING.md#-submitting-an-issue --> ## 🔥 Exception or Error <pre><code> WARNING in Entry point 'ng-ace-editor' contains deep imports into 'node_modules/brace/theme/monokai'. This is probably not a…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3472 · Angular2 routing - broken back button in OS X Safari - Version 9.1 (11601.5.17.1)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: safari, chrome, angular
- **Signals**: 👍12 💬18 · closed
- **Excerpt**: The demo uses a simple Quiz application (just the routing part). Steps to reproduce - 1. Start the quiz 2. Navigate forward 3. Click the back button and notice that the component does not render properly See Plunker - [link] **Current behavior** - usage of the browser's back button does not cause component to re-render properly **Expected/desired behavior** - usage of the browser's back button _does_ cause the component to re-render properly (see Google Chrome behavior for expected behavior) **Other information** I also posted a [question to Stack Overflow]([link]) about this for additional…

