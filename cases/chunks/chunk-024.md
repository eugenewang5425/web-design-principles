# Case Chunk 024 — Round 24

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3301 · Doc examples e2e flakes cause frequent CI failures for aio_e2e2 job
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, linux
- **Signals**: 👍0 💬27 · closed · labels: type: bug/fix/freq3: high
- **Excerpt**: ## Current behavior Frequently occurring flake in the "aio" travis job: ``` 1) Api pages should show classes that implement an interface - Failed: stale element reference: element is not attached to the page document (Session info: chrome=62.0.3202.0) (Driver info: chromedriver=2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform=Linux 4.11.6-041106-generic x86_64) ``` ## Expected behavior no flakes :)

### CASE-3305 · Form data is empty when calling http.post() with ContentType header
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, typescript
- **Signals**: 👍0 💬27 · closed · labels: feature/open for contributions
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> ```typescript var fd = new FormData(); fd.append('field', 'value'); // fires an empty request (in Chrome Developer Tools) this.http.post('[link] fd, {headers:…

### CASE-3307 · date pipe formatter doesn't format minutes and seconds properly in IE 11.0.9600.18350 and Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍18 💬27 · closed · labels: type: bug/fix/area: common/open for contributions/area: i18n/freq2: medium
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When using the date pipe In IE 11.0.9600.18350 with minutes/seconds it shows the whole date instead of the minutes and/or seconds. Examples: Date recieved from service | used binding | result "2016-06-21T10:47:40Z" | {{mydate | date:'HH'}} | ‎12‎:‎00 "2016-06-21T10:47:40Z" | {{mydate | date:'mm'}} | ‎6‎/‎21‎/‎2016‎ ‎12‎:‎47‎:‎40‎ ‎PM "2016-06-21T10:47:40Z" |…

### CASE-3322 · HTML5 Video does not play in Safari iOS with NGSW
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, ios
- **Signals**: 👍12 💬25 · closed · labels: type: bug/fix/freq1: low/area: service-worker
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> ## Current behavior When I add a simple video tag like this : `<video width="400" controls><source src="test2.mp4" type="video/mp4"> Your browser does not support HTML5…

### CASE-3327 · Promise.prototype.then called on incompatible receiver in Chrome 77.0.3865.90
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 77, chrome, angular
- **Signals**: 👍19 💬24 · closed · labels: area: zones
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package zone.js Maybe. ### Is this a regression? Actually angular is not broken, but a browser update broke the frameworks behavior. It's still working in all other browsers except Chrome 77.0.3865.90 ### Description In Chrome 77.0.3865.90 in some case the following error is thrown for Promises around ReadableStream, WritableStream or TransformStream, but I couldn't come up with a simple reproduction. It was working fine until the most recent Chrome patch. ``` TypeError: Method Promise.prototype.then called on incompatible receiver…

### CASE-3328 · HttpClient doesn't throw on observable if Chrome cancels a request
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍40 💬24 · closed · labels: type: bug/fix/freq1: low/area: common/http/state: confirmed/design complexity: low-hanging
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request </code></pre> ## Current behavior <!-- Describe how the issue manifests. --> If Google Chrome cancels a request the…

### CASE-3334 · HTTP throws "_private__.getDOM(...).getCookie is not a function" if used before bootstrap
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, bootstrap
- **Signals**: 👍3 💬24 · closed · labels: type: bug/fix
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** After update to 2.0.0-rc.2 I get this error: ``` // Chrome Uncaught TypeError: Cannot read property 'getCookie' of null // FireFox TypeError: platform_browser_1.__platform_browser_private__.getDOM(...) is null // Safari TypeError: null is not an object (evaluating 'platform_browser_1.__platform_browser_private__.getDOM().getCookie') ``` pointing to second line of…

### CASE-3339 · Devtools tab not showing
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, angular
- **Signals**: 👍6 💬23 · closed · labels: area: devtools
- **Excerpt**: ### Is this a bug report or a feature request? - [X] Bug Report - [ ] Feature Request ### Please provide the steps to reproduce the issue [Bug Report only] I can't see the tab in chrome devtools.. I even assigned a shortcut for it and when I use it I get a dialog that says ``` Angular application running development mode. Open developer tools, and select the Angular tab. ``` But it's still not there ### Please provide the expected behavior vs the actual behavior you encountered [Bug Report only] the tab should show :P

### CASE-3345 · [Chrome 80] open mat-dialog reactive form error: Cannot find control with name
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome 80, chrome 79, react, angular
- **Signals**: 👍36 💬23 · closed · labels: area: forms
- **Excerpt**: I check this bug not happen on chrome 79. but on chrome 80, the first time I open a popup (after reloading the page). The error with occurs: ERROR Error: Cannot find control with name: 'file'. After that I close popup and re-open popup. The issue is resolved Angular version: 8 ![Capture]([link])

### CASE-3348 · Virtual DOM & JSX for enhancing UI rendering speed?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: webview
- **Signals**: 👍8 💬23 · closed · labels: feature/area: core
- **Excerpt**: ## I'm submitting a... [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ X] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ## Current behavior UI rendering speed is not the fastest among the frameworks. It's rather slow when running on java webview, cordova, etc. > Lower render speed > The limited usage of shadow DOM and lack of virtual DOM…

### CASE-3354 · Bug: OnInit not fired when using Safari's back button
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, angular
- **Signals**: 👍24 💬23 · closed
- **Excerpt**: I am using Angular 2.0.0-beta.11 on OS X El Capitan. When Safari's browser history back function is used, `OnInit` does not get fired. It seems to work fine on Chrome. Steps to reproduce: 1) Fire up the official [Tour Of Heroes Demo]([link]) 2) Click on any hero in the dashboard 3) Use the browser back button or click the "back" button in the demo. The dashboard doesn't populate. Related: [ref]

### CASE-3361 · Adding click event handler with capture set to true interferes with click handlers on items generated by NgFor.
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge
- **Signals**: 👍0 💬22 · closed · labels: area: core/P3/needs: clarification
- **Excerpt**: # 🐞 bug report ### Description When adding an event listener for click events onto the document object with capture set to true, there is a strange edge case where the click handler on items generated by an ngFor loop is not called. This only seems to happen when the array is returned from a function (and thus recreated on rerender). This doesn't happen if capture is not set to true. Additionally, it seems to interfere with preventing any default action on those ngFor items, e.g. click on <a [routerLink]="..."> elements will reload the application rather than causing an internal routing…

### CASE-3364 · Angular IVY - Chrome UX Reports URL as SLOW - Main Bundle Size for Mid size applications is still large
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular, desktop, mobile
- **Signals**: 👍24 💬22 · closed · labels: area: core
- **Excerpt**: # 🐞 bug report ### Affected Package Angular 9.0.0-rc.2 ### Is this a regression? <!-- ✍️--> No ### Description I have a mid size app (Mustakbil.com), when I build it for productions the size of my main bundle (es2015) is 1.17Mb. If I use bundle analyzer to explore the main bundle, the size of the Angular related modules is 891kb, rxjs is 105kb, @user is 20kb. ![mustakbil-main-bundle]([link]) For users with fast internet connections and desktop machines it shouldn't be a problem that's why I have a lighthouse score of 100. ![mustakbil-lighthouse]([link]) But for slow mobile devices with slow…

### CASE-3376 · TypeError: $localize is not a function after HMR Component update sent to client(s)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, firefox
- **Signals**: 👍0 💬21 · closed · labels: area: core/core: hot module replacement (HMR)
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? localize, compiler-cli ### Is this a regression? Yes ### Description Afer changes on template, the HMR sent to browser does not load (no changes are reflected) and when navigate from that component to another and then back to the changed one it does not show (it's broken) and there is a error message in the dev console (not in the terminal where ng serve is executed). The error says - "ERROR TypeError: $localize is not a function". I have tested it on edge, chrome and firefox (including private mode) - the error shows on all three of…

### CASE-3383 · Angular http client not working with translation on in IOS chrome browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, ios, angular
- **Signals**: 👍15 💬21 · closed · labels: area: common/http/iOS/P4
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Description I have angular project built in angular 10. I am getting issue in calling api from IOS chrome browser when i turn on google translation from browser. If i do not turn on translation it is giving me correct response for API…

### CASE-3386 · [Animations] toggle state with `display: 'none'` doesn't work on Safari
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari
- **Signals**: 👍27 💬21 · closed · labels: type: bug/fix/area: animations/freq2: medium/P3
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue is caused by package @user/animations ### Is this a regression? <!-- Did this behavior use to work in the…

### CASE-3395 · Observable from window resize event is ignored by change detection in Internet Explorer
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, edge
- **Signals**: 👍0 💬21 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: - **I'm submitting a bug report** - **Current behavior** I have an observable to trace window resize events: `Observable.fromEvent(window, 'resize')`. Than later in the code I subscribe to it and update fields in my component class: ``` resizeEvtObs.subscribe(val => { this.width = val.width; this.height = val.height; }); ``` The fields are bound to the template with interpolation: `Window dimensions: {{ width }} x {{ height }}`. When I run this in Firefox, Chrome or Edge, the binding works perfectly and my page is updated immediately. In Internet Explorer he binding is never updated though. -…

### CASE-3400 · Ivy and AOT Enabled compiles but Chrome console has errors
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular
- **Signals**: 👍4 💬20 · closed · labels: type: bug/fix/needs reproduction/freq3: high/regression
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Description <!-- ✍️--> I'm trying to compile my application in Angular 8.2.14 with enableIvy=true and AOT = true. It compiles successfully, but when i run it Chrome console shows an error. ## 🔥 Exception or Error <pre><code> Unhandled…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3302 · Calling setValidators on a form control when control is nested as a component in form causes ExpressionChangedAfterItHasBeenCheckedError
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬27 · closed · labels: type: bug/fix/freq3: high/area: forms/state: confirmed/design complexity: major
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MIGHT BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a ... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (behavior that used to work and stopped working in a new release) [ X] Bug report <!-- Please search github for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3306 · (AOT bug) Template containing a lot of form controls and compiled with ngc causes webpack builds that are either slow or hang forever
- **Principles**: P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍2 💬27 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting ``` **Current behavior** If you have a lot of form controls in template and compile with AOT, webpack build will hang for a long time or seemingly never complete. In the below demo of the bug, I have 20 form controls on a template, it will take about 2 minutes to build after compile. If you delete 5 of them, it only take 12 seconds to compile. If you have 30 controls in total, it will hang for an extremely long time or never complete. **Expected behavior** It should be…

### CASE-3308 · Dynamically created "input" with type checkbox does not work with ngModel
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍13 💬27 · closed · labels: type: bug/fix/workaround1: obvious/freq1: low/freq2: medium/area: forms
- **Excerpt**: in creating a options list that allows the user to change different settings i found a problem with the type checkbox . take this component ```js (function(app){ app.testing=ng.core.Component({ selector:"testing", template:"<input type='checkbox' [(ngModel)]='testing'/>"+ "<template ngFor #item [ngForOf]='list'>"+ "<input [type]='item.type' [(ngModel)]='item.value'/>"+ "</template>" }).Class({ constructor:[function(){ this.testing=true; this.list=[ {type:"checkbox",value:true}, {type:"text",value:"hello world"} ]; }], }); })(window.app||(window.app={})); ``` because of the ngFor loop…

### CASE-3309 · Bug Report: ɵassertType false positive error in Angular Language Service (newest VS Code extension)
- **Principles**: P-G4, P-E3 · **Env**: angular, react
- **Signals**: 👍28 💬26 · closed · labels: area: language-service
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core, language-service ### Is this a regression? Yes ### Description After the latest update of the Angular Language Service VS Code extension (today), a previously working template now throws the following error: ``` Property 'ɵassertType' does not exist on type 'typeof import(".../node_modules/@user/core/index")'. ``` This occurs on `(keydown)="..."` bindings inside a template of a component that uses `ReactiveFormsModule`. Example: ```html <input matInput formControlName="zaehlerstand" [placeholder]="getPlaceholderValue()"…

### CASE-3313 · Forms should throw error if two or more NgModels appear in form with the same name
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍11 💬26 · closed · labels: feature/freq1: low/area: forms/state: has PR/good first issue
- **Excerpt**: [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question **Current behavior** Currently there is no error or warning if two form controls have the same name: ``` <input name="entireStateCoverage" type="checkbox" [(ngModel)]="item.entireStateCoverage"> <input name="entireStateCoverage" type="checkbox" [(ngModel)]="item.active"> ``` **Expected behavior** Forms should throw error if duplicate names are detected. **What is the motivation…

### CASE-3314 · AbstractControl enable/disable does not pass emitEvent to this._updateAncestors()
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍30 💬26 · closed · labels: type: bug/fix/freq2: medium/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request ``` **Current behavior** Enabling/disabling `AbstractControl` descendant emits new value in `valueChanges` stream regardless value of `emitEvent` passed in object as parameter of `enable()` / `disable()`. **Expected behavior** No new object emitted by valueChanges. **Minimal reproduction of the problem with instructions** Create form with 2 controls. Subscribe to form valueChanges stream. In this function disable second control…

### CASE-3315 · It seems that ng-content replacement does not work for elements selected by element name, after RC6
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍5 💬26 · closed
- **Excerpt**: ``` [x ] bug report ``` **Current behavior** It seems that ng-content replacement behaviour is broken on RC-6 for elements selected by element name, for example: ``` <ng-content select="element-name"></ng-content> ``` But works for ``` <ng-content select=".class-name"></ng-content> ``` Sample error message: ``` 'modal-content' is not a known element: 1. If 'modal-content' is an Angular component, then verify that it is part of this module. 2. If 'modal-content' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@user.schema' of this component to suppress this message. ("-modal…

### CASE-3316 · Order of ngModel & onModelChange
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍43 💬26 · open · labels: workaround1: obvious/freq1: low/area: core/core: inputs / outputs/type: confusing
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Currently the order of `(ngModelChange)` and `[(ngModel)]` on an input element matters. In the following case the `ngModelChange` callback is called before `ngModel` updates the value of model: ``` <select (ngModelChange)="onModelChange()" [(ngModel)]="hero.name" > <option>Dexter</option>…

### CASE-3320 · NG0600: Writing to signals is not allowed in a `computed` thrown by window.blur
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬25 · closed · labels: hotlist: error messages/area: core/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description According to this documentation ([link]) I've created a Angular service telling me the current AppState. Now that I've reworked it to use a Signal (instead of an RxJs BehaviorSubject) I've got an `NG0600: Writing to signals is not allowed in a `computed`` error. I could have broken it down to the following min repro: ``` @user({ selector: 'app-root', standalone: true, template: ` <form [formGroup]="signInForm"> <button [disabled]="signInForm.disabled" (click)="signIn()"> HIT ME </button>…

### CASE-3323 · Bug (?) - ReactiveForms > FormArray, trackBy index > removeAt & subscriptions
- **Principles**: P-G4, P-E3 · **Env**: react, angular
- **Signals**: 👍0 💬25 · open · labels: freq2: medium/area: forms/type: confusing/forms: Controls API/P3
- **Excerpt**: Hi Angular, I think i found a [x] bug, but I'm not sure. I have a large Reactive Form, with a FormArray.. and I trackBy index. Each FormGroup in the array has subscriptions like: ``` // get the rides so we can iterate over them get myRides(): FormArray { return this.ridesForm.get('rides') as FormArray; }; ``` ``` trackByFn(index, item) { return index; // or item.id } ``` ``` // each ride that is added has subscriptions subscribeChanges(ride: FormGroup){ ride['dateSub$'] = ride.get('date').valueChanges.subscribe(val => { }); ride['distanceSub$'] =…

### CASE-3324 · ChangeDetectionStrategy.OnPush not running properly with @user modified programmatically (outside of a template binding)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬25 · closed · labels: type: bug/fix/freq1: low/area: core/core: inputs / outputs/core: change detection
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Current behavior <!-- Describe how the issue manifests. --> I'm trying to set an Input property of a component which is projected into another one. I tried, for performance reasons, to use _ChangeDetectionStrategy.OnPush_ on the child…

### CASE-3331 · Update `FormBuilder#control()` to support `AbstractControlOptions` as 2nd parameter
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍47 💬24 · closed · labels: type: bug/fix/workaround1: obvious/freq2: medium/area: forms
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x ] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request </code></pre> ## Current behavior In 5.x version `AbstractControlOptions` has been added as parameter to `FormControl` constructor. `FormBuilder#control()` method should create new control by provided configuration. Currently signature/input parameters do not match `FormControl`. ## Expected behavior ``` control( formState: any = null, validatorOrOpts?:…

### CASE-3332 · [Proposal] Defining non-singleton services or component's service
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍31 💬24 · closed · labels: feature/area: core/core: di/feature: under consideration
- **Excerpt**: ## Context So I found a nice way to compose my Directives/Components. I use a service that's not part of any module but just defined at Directive/Component level. Here is an example : ```ts @user({ providers: [ NgrxService ] }) export class MyComponent { constructor( @user() private ngrx: NgrxService) { } } ``` So `NgrxService` is not meant to be a singleton service but rather a way to compose my Component with reusable code. The service look like this : ```ts @user() export class NgrxService { constructor(private store: Store, private cdr: ChangeDetectionRef) { } select() { ... } dispatch()…

### CASE-3340 · Proposition: Alternative, Simplified Forms API
- **Principles**: P-G4, P-E3 · **Env**: angular, react
- **Signals**: 👍70 💬23 · closed · labels: area: forms
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? _No response_ ### Description **Update:** I have an (almost complete) implementation of this proposition: [link] with some API differences that I've made along the way. I realize this might not be the "standard" feature request, but I'm not sure of a better place to share it and start a serious discussion. Angular's `ReactiveForms` module has revolutionized the way we think and work with form management. However, after around 5 years of working with it, and in lights of the recent changes going around in the Angular…

### CASE-3343 · Angular 9 during language build causes "No translation found for "<ID>" (" {$ICU} ").
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬23 · closed · labels: type: bug/fix/area: i18n/state: has PR
- **Excerpt**: # 🐞 bug report ### Affected Package With Ivy disabled the language build succeeds ### Is this a regression? Yes, this error started appearing after our upgrade from 8.2 to 9.1.1. Disabling Ivy is our current workaround. ### Description The issue only appears to affect translations that make use of the ICU select format. After further testing it seems that ivy doesn't like it when a value is passed to a component via Input(). ``` <!-- app.component.html --> <app-boolean-translation [value]="value"></app-boolean-translation> ``` ``` // app.component.ts import { Component } from '@user/core';…

### CASE-3349 · Error when attempting to bind to component properties initialized outside constructor with TS 2.5
- **Principles**: P-G4, P-E3 · **Env**: angular, typescript
- **Signals**: 👍2 💬23 · closed · labels: type: bug/fix/freq2: medium/area: core
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report [ ] Feature request [ ] Documentation issue or request [ ] Support request </code></pre> ## Current behavior Angular 5.0.0-rc.1 throws "TypeError: e.component.newUser is undefined" when running the following component (after AoT compilation): ```typescript import {Component} from '@user/core'; @user({ template: ` <form> <input name="name" [(ngModel)]="newUser.fullName"/> </form>`, }) export class RegisterComponent { public newUser = { fullName: '' }; } ``` ##…

### CASE-3351 · Update DOM when changing template in reactive form fails
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬23 · open · labels: type: bug/fix/freq3: high/area: forms/state: confirmed/P3
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Changing a reactive form template fails. When replacing the form, it throws an error: `Error in ./App class App - inline template:0:6 caused by: control.registerOnChange is not a function` **Expected behavior** <!-- Describe what the behavior would be without…

### CASE-3359 · Support `input()`, `output()` and `model()` in Angular elements
- **Principles**: P-G4, P-E3 · **Env**: angular, typescript
- **Signals**: 👍39 💬22 · closed · labels: area: core/area: elements/core: inputs / outputs/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description lets suppose we have this component : ```typescript @user({standalone: true, ...]) export class ToBeAWebComponent { anInput = input<string>(); } ``` by using the @user/elements package I can export that component as a web-component named : to-be-a-web-component. ```javascript const wc = document.querySelector("to-be-a-web-component"); wc.anInput = "aValue"; // this will create a bug and change the type of anInput from InputSignal to string. // and if the input value is referenced in the…

### CASE-3363 · ngcc with preserveWhitespaces
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬22 · closed · labels: type: bug/fix/freq1: low/state: needs eng input
- **Excerpt**: I'm using Angular 9 with Ivy to compile my app. This app uses a bunch of libs which it compiles using ngcc form View Engine to Ivy. I want those libs to be compiled by ngcc with preserveWhitespaces: true, currently this does not happen. I tried setting preserveWhitespaces in tsconfig of my project, but it does not work. When those libs are used as they are without ngcc compilation I get preserveWhitespaces correctly respected.

### CASE-3371 · Angular2 model-driven forms and prepopulated values
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬22 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I have an app that I built for rc.1 that I'm now upgrading to rc.3, and the new forms module. I've been ripping my hair out beacuse of it, and decided to see if anyone had any ideas what I'm doing wrong. Basically I'm building the form like this (fb is an instance of FormBuilder): ``` this.form = fb.group({ client_id: ['Customer',…

### CASE-3372 · Test with Router injected - Cannot resolve all parameters for 'Router'
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: I have a component with the following constructor: ``` constructor( private _router: Router, private dispatcher: Observer<Action>, fb: FormBuilder ) { ... } ``` And if I run project everything works. But I need tests for it so here they are: ``` import { it, inject, injectAsync, beforeEachProviders, TestComponentBuilder } from "angular2/testing"; import {provide} from "angular2/core"; import {FormBuilder} from 'angular2/common'; import {Subject} from 'rxjs/Subject'; import {Router, RouteParams} from 'angular2/router'; // other imports ... describe("SomeInfoEdit form", () => { const actions =…

### CASE-3394 · With new forms api, can't add inputs from child components without adding additional form tags
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬21 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") - [x] bug report **Current behavior** With the new forms api, can't load input from child component without including an additional forms tag. Will get error >VM65345 angular2-polyfills.js:487Unhandled Promise rejection: Template parse errors: No provider for ControlContainer **Expected/desired behavior** Should be able to load inputs from child component without adding additional form tags. **Reproduction of the problem** [link] **Please tell us about your environment:** - **Angular version:** 2.0.0-rc.2 - **Browser:** [all ] - **Language:**…

### CASE-3397 · Using userResource and @user some conditions dom does not render
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? common ### Is this a regression? No ### Description ``` import {Component, signal} from '@user/core'; import {httpResource} from '@user/common/http'; import {FormsModule} from '@user/forms'; @user({ selector: 'index-item', imports: [ FormsModule ], template: ` <input type="number" [(ngModel)]="userId"> @user (userResource.isLoading()) { <span>loading...</span> } @user { <span>Complete！</span> @user (userResource.value().code) { <span>data Length:{{ userResource.value().data.length }}</span> } } ` }) export class Item { userId =…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3303 · [4.0.0-rc.3]: Animations easing not working at all
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍2 💬27 · closed · labels: type: bug/fix/area: animations/regression
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Easing doesn't work. I'm using cubic-bezier in my angular app, but i get a linear ease. **Expected behavior** That easing works just like ng2. **Minimal reproduction of the problem with instructions**…

### CASE-3304 · NoOpAnimationDriver error with ng-xi18n
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬27 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** ng-xi18n with angular 2.4.0 fails with exception `Error: Error encountered resolving symbol values statically. Calling function 'NoOpAnimationDriver'`. Builds fine with ng build --prod or ng serve. **Expected behavior** Extract xlf without errors **Please tell us about your environment:** angular-cli:…

### CASE-3311 · 10.1.0 i18n compilation error: Localized bundle generation failed: Cannot read property 'value' of undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬26 · closed · labels: type: bug/fix/area: i18n/needs reproduction
- **Excerpt**: # 🐞 bug report ### Affected Package Angular 10.1.0 ### Is this a regression? Yes, no issues with 10.0.x (all of them) ### Description Upgrading our project to 10.1.0 `ng update @user/core @user/cli --force` No issues, upgrade goes through without issues. However, when doing a production build I get this error: `Localized bundle generation failed: Cannot read property 'value' of undefined` I am using i18n with 3 languages. ## 🌍 Your Environment **Angular Version:** <pre><code> Angular CLI: 10.0.8 Node: 12.13.1 OS: darwin x64 Angular: 10.1.0 ... animations, common, compiler, compiler-cli,…

### CASE-3312 · Can't pass parameters in template to animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬26 · closed · labels: type: bug/fix/area: animations/freq1: low/P4
- **Excerpt**: I have written a small animation which doesn't do much my-animations.ts ``` export const leavingTowardsTop = trigger('leavingTowardsTop', [ transition(':leave', [ style({position: 'relative'}), animate("250ms ease-in", keyframes([ style({top: 0}), style({top: "{{topPixels}}"}) ])) ], {params : { topPixels: "-3000px" }}) ]) ``` I have registered the animation in a component and in its template I am trying to do : ` <div [@user]="{params : { topPixels: '-30px' }}"> ` which works but ignore the specified value for topPixels (so it still takes -3000) I also tried : `[@user]="{ pixels: '-30px' }"`…

### CASE-3321 · Ivy preview report: error TS-996002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍9 💬25 · closed
- **Excerpt**: Hi! I try to build another compex project with Ivy and get an error: ``` ERROR in node_modules/ng6-breadcrumbs/lib/breadcrumbs.module.d.ts(1,22): error TS-996002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class ``` ![image]([link]) All libs from NPM: [link] ``` Angular CLI: 8.0.0 Node: 11.14.0 OS: win32 x64 Angular: 8.1.0-next.1 ... animations, common, compiler, compiler-cli, core, forms ... language-service, platform-browser, platform-browser-dynamic ... router, service-worker Package Version…

### CASE-3338 · Infinite loop in shared.ts
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬23 · closed · labels: area: animations/P4
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations ### Is this a regression? ~No~ Yes ### Description Due to an extremely unlikely (but not too unlikely!) coincidence, the Angular animation module stucked in an infinite loop. This occured inside `containsElement(elm1, elm2)`: [link]]/blob/18.1.3/packages/animations/browser/src/render/shared.ts#L204 because of how `getParentElement(element)` is implemented: [link]]/blob/18.1.3/packages/animations/browser/src/render/shared.ts#L159. There are just [3 relevant files]([link]) in the linked repository. The rest was generated with…

### CASE-3344 · Angular IVY Animation issue - element is not getting removed
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍6 💬23 · closed · labels: type: bug/fix/area: animations/freq2: medium/regression/state: confirmed
- **Excerpt**: # 🐞 bug report ### Affected Package Angular animations in combination with IVY, and maybe some other stuff mixed in. Unkown because unable to reproduce in stackblitz. ### Is this a regression? Yeah, sort of, I don't have the issue pre-IVY ### Description ![image]([link]) ![image]([link]) 2 screenshots above. The first one has this as DOM: ![image]([link]) the class combination-container can only happen once (it's in an *ngIf). But in combination with ![image]([link]) it seems that somehow, the previous elements are not removed. I've tried my best to reproduce the situation in a stackblitz:…

### CASE-3350 · Router Animation query empty list error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed · labels: type: bug/fix/area: animations/freq2: medium/regression/area: router
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> ``` Errors `query(":enter")` returned zero elements. (Use `query(":enter", { optional: true })` if you wish to allow this.) `query(":leave")` returned zero elements. (Use `query(":leave", { optional: true })` if you wish to allow this.) ``` **Expected behavior**…

### CASE-3353 · bug(testing) ngOnChanges not called for component initialized via TestComponentBuilder
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍35 💬23 · closed · labels: area: testing
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When creating a component via TestComponentBuilder the ngOnChanges-Callback is not executed. Having a component like this: ``` ts export class TimePickerComponent { @user("time") private timeString = ""; ngOnInit() { console.log("init") } ngOnChanges(changes) { console.log("changes"); //do some transformation on the timeString- inputbinding } } ... } ``` And…

### CASE-3360 · Animation skips state transition triggered by RouterOutlet deactivate=>activate
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬22 · closed · labels: area: animations/area: router/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations, router ### Is this a regression? No ### Description Not sure if a feature request or a bug. If you change the value of the property bound to an animation trigger using `activate` and `deactivate` `RouterOutlet`'s outputs, on route navigations where `deactivate` is immediately followed by an `activate` event, the first state change `whatever=>deactivated` gets ignored by animation. I suppose it's due to the async nature of the trigger. In fact turning the outputs property assignments into async makes things work as expected…

### CASE-3369 · RC4. Animation. void => * animation is not fired on component detach
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬22 · closed · labels: feature/area: animations/effort2: days/workaround4: none
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** It looks like \* => void animation is not fired when I try to detach a component through ViewContainerRef.detach(). I have the following animation defined for my component: ``` trigger("appear", [ transition('* => void', [ style({ opacity: 1 }), animate(".2s cubic-bezier(0.25, 0.8, 0.25, 1)", style({opacity: 0})) ]), transition('void => *', [ style({opacity: 0}),…

### CASE-3378 · Cannot set signal input in tests with non-standard setup (Stackblitz/Jest preset without JIT transform) - NG0303
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬21 · closed · labels: area: core/core: inputs / outputs/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description In unit tests using this function to set signal based inputs ``` fixture = TestBed.createComponent(ParagraphBlockComponent); component = fixture.componentInstance; fixture.componentRef.setInput('title', 'my title'); ``` results in error `NG0303: Can't set value of the 'title' input on the 'ParagraphBlockComponent' component. Make sure that the 'title' property is annotated with @user() or a mapped @user('title') exists.` this is the component: ``` @user({ standalone: true, selector:…

### CASE-3388 · [@user/animations] ViewEncapsulation.ShadowDom breaks Angular Animations
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍22 💬21 · closed · labels: type: bug/fix/area: animations/freq3: high/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3389 · bug happened when animations work with ng-content
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍25 💬21 · closed · labels: type: bug/fix/area: animations/freq2: medium/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3390 · Leave animation triggers child ngOnDestroy immediately
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍37 💬21 · closed · labels: type: bug/fix/area: animations/freq2: medium/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3399 · Performance issue
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: area: performance/area: animations/state: has PR
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations ### Is this a regression? No ### Description When doing some performance debugging in our application I noticed that around 1/3 of the time to process our components is used by a single function related to animations. [link]]/blob/4c778cdb28de128c6ddecd2fd6cb6257d675500b/packages/animations/browser/src/render/transition_animation_engine.ts#L855 If you look at my performance profile you can see that the anonymous function marked in red (and the ones next to it) is calling `_balanceNamespaceList` and it takes almost a third of…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3310 · TypeError when hydration is enabled (hostElement.hasAttribute is not a function)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬26 · closed · labels: area: core/state: has PR/P2/bug/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? No ### Description When adding provideClientHydration() to my app.module.ts, the render()-Method breaks with the error ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true TypeError: hostElement.hasAttribute is not a function at annotateForHydration (/Users/jko13/GIT/storefront/dist/storefront/server/main.js:1:2881506) at /Users/jko13/GIT/storefront/dist/storefront/server/main.js:1:3491908 at Generator.next…

### CASE-3341 · ng-template gets rendered twice during hydration (when anchor comment node is not projected)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍14 💬23 · closed · labels: area: core/state: has PR/P4/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? platform-browser ### Is this a regression? No ### Description when hydration is enabled and a component uses `ngTemplateOutlet` to render a template passed from a parent e.g. via `ContentChild` then its getting rendered twice for the duration of the hydration. So it looks the like this if 'abc' is the template content received from server `abc` during hydration `abc abc` <-- this looks sometimes a bit ugly after hydration `abc` So is it possible that the passed template gets just once rendered during the hydration process? The relevant…

### CASE-3358 · Incremental Hydration throws error - Cannot read properties of undefined (reading 'p') on Client Side Navigation to this page
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬22 · closed · labels: area: core/state: has PR/P2/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description When using Incremental Hydration, the below code works but subsequent code throws error on client side navigation to this page from another page: This works: ``` @user (pageHeading() && !isLoggedIn()) { @user(hydrate when isLoggedIn()) { <div class="mat-card p15 pb7 mb10"> <h1 class="mb10">{{pageHeading()}}</h1> <p class="mb10 paragraph">{{pageDescription()}}</p> </div> } } ``` This doesn't work: ``` @user(hydrate when isLoggedIn()) { @user (pageHeading() && !isLoggedIn()) { <div…

### CASE-3380 · Angular hydration (SSR) for components that use i18n blocks is skipped
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍29 💬21 · closed · labels: area: i18n/area: core/P3/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? localize ### Is this a regression? No ### Description The benefits of hydration are completely ignored for i18n sites. Most of the content is skipped by hydration and re-rendered ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Each component with : `` i18n="@@user" `` is ignored by hydratation ``` ### Please provide the environment you discovered this bug in (run `ng version`) ```true @user/cli: "^16.1.0" @user/core: "^16.1.1" Node: v18.13.0 ``` ###…

### CASE-3384 · NodeInvocationException: Uncaught (in promise): Error: Injector has already been destroyed. Error: Injector has already been destroyed.
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬21 · closed · labels: needs reproduction/area: core/needs: clarification
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/platform-server ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> Yes, the previous version in which this bug was not present was: 8 ### Description I am using Angular Universal with .net core 2.2 and after migrating to Angular 9 I have this weird issue that on first website load (it does not matter what page) the SSR works perfectly but after navigation to another page and then refreshing I get this error, if I refresh again the websites work without SSR. removing the **Destroy**…

### CASE-3396 · Pipes break when used in a ng-switch-default
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍10 💬21 · closed · labels: type: bug/fix/area: common
- **Excerpt**: When using a custom pipe inside of an `ng-switch-default` the pipe breaks with the exception: ``` EXCEPTION: TypeError: Cannot read property 'constructor' of undefined in [null] TypeError: Cannot read property 'constructor' of undefined at Object.implementsOnDestroy ([link]) at Function.ChangeDetectionUtil.callPipeOnDestroy ([link]) at AbstractChangeDetector.ChangeDetector_Hello_5.dehydrateDirectives (eval at <anonymous> ([link]), <anonymous>:93:49) at AbstractChangeDetector.dehydrate ([link]) at AppViewManagerUtils.dehydrateView ([link]) at AppViewManager_._viewDehydrateRecurse ([link]) at…

### CASE-3398 · provideClientHydration does not wait for a waterfall of requests for caching
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: needs reproduction/area: core/area: common/http/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? common ### Is this a regression? No ### Description So the way that our application works, we kind of have a waterfall of requests due to needing to visit multiple sources for some information: - A) go to CMS to get list of campaigns for guest users - B) go to API to fetch information about those campaigns - C) go back to CMS to fetch the content for the bonuses associated with those campaigns (interpolation purposes etc) So you end up with requests like so: ``` A..... B..... C......... (fully ready) ``` Obviously we have caching within…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3317 · ViewContainerRef strange behavior for createComponent
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬26 · closed
- **Excerpt**: - **I'm submitting a strange behavior for ViewContainerRef.createComponent.** - [x ] bug report - [ ] feature request - [ ] support request => Please do not submit support request here, see note at the top of this template. **Current behavior** When want to create component in current component container like this component is rendered outside container of current component: this.componentResolver.resolveComponent(SampleComponent).then((factory) => { console.log(this.viewContainerRef); this.viewContainerRef.createComponent(factory); }); Result: ![image]([link]) **Expected/desired behavior**…

### CASE-3325 · Router links in `@user` blocks not having correct relative route
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬24 · closed · labels: area: router/area: core/state: has PR/core: di/P2
- **Excerpt**: ### Is this a regression? - [X] Yes, this behavior used to work in the previous version ### The previous version in which this bug was not present was 17.2.1 ### Description A RouterLink with a route of `./` should route to the activated route. (eg. `<a [routerLink]="'./'" >Link One</a>`). But when it is in a defer block, and it is a sibling of a component that imports from material it routes to the app root. So ` @user(on timer(1000)) { <has-material/> <a [routerLink]="'./'" >Link One</a> }` routes to the root. ![image]([link]) ### Reproduction StackBlitz link: [link] Steps to reproduce: 1.…

### CASE-3326 · Defer syntax doesn't create lazy chunks when component imported from a barrel
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍14 💬24 · closed · labels: area: core/core: defer/area: docs
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler ### Is this a regression? No ### Description When using the new defer syntax with component imported from a barrel file (like a `index.ts` with re-exports) the expected lazy-loaded chunks are not created. Instead, the component is included in the main bundle, which contradicts the intended lazy loading behavior. ### Steps to Reproduce - Create two components - Create index.ts file which re-exports them both - Import both components to the parent using index.ts file - Add both components to the imports section of parent component…

### CASE-3329 · google bot indexes 404 pages on angular.io
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬24 · closed · labels: type: bug/fix/freq2: medium
- **Excerpt**: [link] <img width="852" alt="screen shot 2018-01-04 at 1 21 34 pm" src="[link]> Most of these pages should have a redirect setup to a correct page or should return HTTP 404 to signal that the page doesn't exist (dgeni knows about all the urls, so we can generate firebase config that will do this for us).

### CASE-3336 · ViewEncapsulation not working on nested components with ng-content
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: I'm not actually sure what is causing the problem, but I have two components - list-cmp - list-item-cmp both have only `ng-content` inside them, and I'm using it like this ``` <list-cmp> <list-item-cmp> <a href="">whatever</a> </list-item-cmp> </list-cmp> ``` when I try to style the anchor with `styles` on `list-item-cmp`, it doesn't work ![image]([link]) [link] is it a bug, is it by design?

### CASE-3342 · Images aren't getting cached by service worker
- **Principles**: P-A3, P-H1 · **Env**: windows, linux, macos
- **Signals**: 👍2 💬23 · closed · labels: area: service-worker
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION YOUR ISSUE MIGHT BE CLOSED WITHOUT INVESTIGATING --> ### Bug Report or Feature Request (mark with an `x`) ``` - [x] bug report -> please search issues before submitting - [ ] feature request ``` ### Command (mark with an `x`) ``` - [ ] new - [x] build - [ ] serve - [ ] test - [ ] e2e - [ ] generate - [ ] add - [ ] update - [ ] lint - [ ] xi18n - [ ] run - [ ] config - [ ] help - [ ] version - [ ] doc ``` ### Versions <!-- Output from: `node --version`, `npm --version` and `ng --version`. Windows (7/8/10). Linux (incl. distribution). macOS…

### CASE-3347 · Lazy load auxilary [ref]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍18 💬23 · closed · labels: type: bug/fix/freq3: high/area: router/state: confirmed/router: aux routes
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3356 · [src] attribute the first time it calls to an undefined endpoint
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed · labels: type: bug/fix/effort2: days
- **Excerpt**: GET [link] 404 (Not Found) ``` html <img [src]="data.avatar_url" width="100" height="100"/> ``` ``` js this.data = {}; http.get('[link]).toRx().map(res => res.json()).subscribe(response => this.data = response); ```

### CASE-3357 · AOT builds with TypeScript 5.6 or later are slower in Angular 19
- **Principles**: P-A3, P-H1 · **Env**: typescript, angular
- **Signals**: 👍17 💬22 · open · labels: area: performance/regression/area: compiler/state: blocked on upstream
- **Excerpt**: ### Command serve ### Is this a regression? - [x] Yes, this behavior used to work in the previous version ### The previous version in which this bug was not present was 18.0.1 ### Description After upgrading my project from Angular 18 to Angular 19 using ng update, I've noticed a significant performance degradation with ng serve. Previously, rebuilds were much faster, but now they take up to 10 seconds or more. ![Image]([link]) ![Image]([link]) ### Minimal Reproduction [link] I made the repo public until the issue got resolved, its a close source project for my company Please check the…

### CASE-3362 · 10.1.0 Router empty path regression
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍2 💬22 · closed · labels: type: bug/fix/freq2: medium/regression/area: router/router: lazy loading
- **Excerpt**: # 🐞 bug report ### Summary Upgrading to Angular 10.1.0 does not stop routing on the first matching route entry. ### Is this a regression? Yes, this used to work in all previous versions of Angular (from v2 onwards). ### Description Previous versions of Angular allowed routes to be defined in a prioritized order. As per the screenshot below, we direct the route to specific module if a path is provided, however if no path is provided, we route to the main application module. ![image]([link]) It appears that V10.1.0 now triggers the last path (the one highlighted in the screenshot above) even…

### CASE-3373 · [Bug][V2] Currency pipe :symbolDisplay true not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬22 · closed · labels: type: bug/fix/area: i18n
- **Excerpt**: I'm using the currency pipe with beta.0, and with the following code inside ionic 2: > ``` > <ion-card-content> > Total: {{ total | currency:'COP':true }} > </ion-card-content> > ``` The output should be `Total: $ 110,000` but the actual output is this: ![image]([link])

### CASE-3374 · ng serve warning: Angular detected an incompatible configuration, which causes duplicate serialization of the server-side application state.
- **Principles**: P-A3, P-H1 · **Env**: angular, typescript
- **Signals**: 👍6 💬21 · closed · labels: regression/area: server
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? platform-server ### Is this a regression? Yes ### Description I occassionally see this warning in the terminal when running `ng serve` (Angular 20.1.x and latest 20.2.0). <img width="1506" height="235" alt="Image" src="[link] /> The warning doesn't seem to cause harm but the source of the issue is not very clear, since we don't have `ServerModule` anywhere in the code, and our `app.config.server.ts` is the standard/simple: ```typescript import { ApplicationConfig, mergeApplicationConfig } from '@user/core'; import {…

### CASE-3375 · Resource `hasValue()` is false for a moment when using TransferState cached data, causing hydration to fail
- **Principles**: P-A3, P-H1, P-F4 · **Env**: ios
- **Signals**: 👍2 💬21 · closed · labels: area: core/state: confirmed/core: hydration/cross-cutting: resource
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description A minimal reproduction demonstrating hydration issues when using @user and @user blocks with the control flow syntax. The app fetches Pokemon data (httpClient + rxResource + transfer state enabled) and displays three scenarios: 1) Works: Uses separate @user blocks - hydration works correctly <img width="1026" height="293" alt="Image" src="[link] /> 2) Broken: Uses @user/@user blocks - hydration fails <img width="1026" height="293" alt="Image" src="[link] /> 3) Broken: Uses @user/@user…

### CASE-3377 · Seeing detached elements in a memory snapshot when I navigate from one route to another
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: angular
- **Signals**: 👍0 💬21 · closed · labels: needs reproduction/memory leak/area: devtools
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? router ### Is this a regression? No ### Description I am using Angular router module and trying to fix a memory leak problem. In a sample application, I have 2 routes and I am in Page1. Once I click anywhere in Page1 component and go to Page2 via routerLink, I can see Page1 component as a detached element in memory snapshot. This is a screenshot. ![Image]([link]) I am in test-2 page now but can see app-test1 component is detached. I tried in different Angular versions (12, 16, 19) and the behavior was exactly same. Of course, I don't…

### CASE-3382 · lazy load from ngComponentOutlet is broken after v12
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed
- **Excerpt**: <!-- Oh hi there! To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. --> # Bug Report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- edit: --> The issue is caused by package @user/core ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> <!-- edit: --> Yes, the previous version in which this bug was not present was: v11 ### Description <!-- edit: --> We have…

### CASE-3387 · Angular upgrade to version 7 lazy loaded module cannot be found
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍4 💬21 · closed · labels: area: router
- **Excerpt**: **Bug, feature request, or proposal:** After upgrading to angular 7, I received an error saying that the after login module is not being found to be loaded lazily. #### What is the expected behavior? To upgrade to angular 7 without changing anything in codes and scripts regarding module and routing files. #### What is the current behavior? Error at the console after clicking on Login, that the module is not found, despite that it was working in the previous version (Angular 6). #### What are the steps to reproduce? [link] #### Is there anything else we should know? **UPDATE On my question** I…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3318 · Async event subscriber not updating UI after async call
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍11 💬26 · closed
- **Excerpt**: I have (essentially) the following code in a component of my app: ``` public ngOnInit() { this.thing.changed.subscribe(() => this.update()); } public async update() { try { this.a = 1; this.b = await this.dataService.getAsync(); this.c = 2; } catch (error) { // blah } } ``` The TypeScript is being compiled to ES6 then run through Babel for ES5 (as TypeScript can't compile to ES5 with async/await yet). The UI is displaying variables `a`, `b`, and `c`. When the `changed` event is raised by the `thing` service, variable `a` is correctly displayed as `1`, but `b` and `c` do not update in the UI.…

### CASE-3319 · Use of local template variable within a *ngIf
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍30 💬26 · closed · labels: type: bug/fix
- **Excerpt**: Hi, With the beta 0, with a template like that: ``` <input #test *ngIf="isVisible"> <button (click)="focusInput(test)" *ngIf="isVisible">Focus it</button> ``` Even if boolValue is true (the input will be visible), test will be "undefined" in the click handler. The only "fix" someone gave me was to make a directive to autofocus. The problem that everytime I will need to access a field that may be hidden by a \* [embedded template], I won't be able to use it, even if in plain javascript I could test if its value was defined or not. Plunker link: [link] Is this a "bug" or an expected behaviour?…

### CASE-3337 · hmr causes element disappear
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍10 💬23 · open · labels: area: core/core: hot module replacement (HMR)
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? No ### Description After upgrading to 19.1, template change keeps causing strange behaviors: - binding stops until I resize the browser window (variable binding with checkbox on the page for example) - my change simply does not appear not even a total page reload until I restart ng server - element disappear after any change happening on template ex. a nested component inside the template just disappears after I made tiny change on the template to trigger a hmr I had to use `no-hmr` ng server…

### CASE-3346 · routerLink directive always makes element focusable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍16 💬23 · open · labels: freq2: medium/area: router/router: directives/P4/bug
- **Excerpt**: # 🐞 bug report ### Affected Package @user/router ### Description Issue [link]][ref] requests that the `routerLink`-directive should automatically add `tabindex` on the target element if not already present (implemented via [link]][ref]). I understand that this behavior might be convinient in some cases, but it should still be configurable. For example, in order to implement a custom menu widget it's a good practice that the focus always stays on the surrounding element (e.g. `<nav>`) while the user selects the target menu item with the arrow keys. Right now, implementing this in a clean and…

### CASE-3352 · NG 2.1.2 Error 'There is no directive with "exportAs" set to "ngModel"'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [X] bug report [ ] feature request [ ] support request ``` **Current behavior** <!-- Describe how the bug manifests. --> With the latest stable version of Angular2, the forms module loaded, an error is thrown when attempting to use ngModel. What's odd here is ngForm is found and works fine. It's not until I attempt to use ngModel as a variable does this error get thrown. ``` zone.js:355 Unhandled Promise rejection: Template parse errors:…

### CASE-3366 · CLI: 8.3.0 + iVY = ERROR in Error: Cannot assign to a reference or variable!
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬22 · closed · labels: type: bug/fix/freq3: high/area: compiler
- **Excerpt**: # 🐞 Bug report <!-- Can you pin-point the command or commands that are effected by this bug? --> <!-- ✍️edit: --> ``` - [ ] new - [ X ] build - [ ] serve - [ ] test - [ ] e2e - [ ] generate - [ ] add - [ ] update - [ ] lint - [ ] xi18n - [ ] run - [ ] config - [ ] help - [ ] version - [ ] doc ``` ### Description I updated my CLI and enabled IVY, but when I'm building the error mentioned below. I checked several things I found on the internet, example of the links below: [link] [link] And the problem, which is not pointing the location of the error, if there is error. Because it started this…

### CASE-3385 · angular 9 / Ivy => async 'as' leads to error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍1 💬21 · closed · labels: area: core/core: binding & interpolation
- **Excerpt**: # 🐞 bug report ### Affected Package [link] ### Is this a regression? Yes, the previous version in which this bug was not present is angular8@user. ### Description ```html <div id="app" *ngIf="(applicationsList$ | async) as applicationsList"> <app-search-filter [(applicationsList)]="applicationsList"></app-search-filter> </div> ``` `yarn start` Error : `Property 'applicationsList' does not exist on type 'ChildComponent'. Did you mean 'applicationsList$'?` **Disabling Ivy** leads to `ERROR in Cannot assign value "$event" to template variable "applicationsList". Template variables are…

### CASE-3391 · Variable change in observable subscription doesn't trigger change detection
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬21 · closed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3392 · Feature request: ngBeforeDestroy
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍120 💬21 · open · labels: feature/area: core/core: lifecycle hooks/feature: under consideration
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [X] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When ngOnDestroy is called, the element is already removed from the DOM. **Expected behavior** Before ngOnDestroy and before removing from DOM, ngBeforeDestroy would get called. **What is the motivation / use case for changing the behavior?** I have a list of items. When the currently focused one is…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3330 · Memory leak when FormControlName created/destroyed few times
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍50 💬24 · closed · labels: type: bug/fix/freq2: medium/memory leak/area: forms/state: confirmed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3333 · Error during cleanup of component: Display error too
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍34 💬24 · closed · labels: type: bug/fix/area: testing/freq3: high/P3
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [X] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** In TestBed.resetTestingModule() an error may occur. The error is not logged to the console, only the component that failed to be destroyed is logged. **Expected behavior** The console.error at this line [link]]/blob/master/packages/core/testing/src/test_bed.ts#L252 will also log the error. **What is the…

### CASE-3355 · [testing] valueChanges-Event of Control is not executed when dispatching Event for Input-Field
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍10 💬23 · closed · labels: type: bug/fix/area: testing/effort1: hours/freq1: low/P4
- **Excerpt**: - **What is the current behavior?** I want to Unit Test my Typeahead component that is configured as followed: ``` html <input type="text" #query class="form-control" id="searchField" [ngFormControl]="searchTerm"> ``` ``` ts searchTerm = new Control(); ngOnInit() { Observable.merge( Observable.of(""), this.searchTerm.valueChanges.debounceTime(500)) .switchMap((term :string) => this.taskService.findTasks({'q': term})) .subscribe(); } ``` Trying to unit test the form like this: ``` ts iit('should execute a Typeahead-Search', <any> fakeAsync(() => { fixture.detectChanges(); let taskList =…

### CASE-3367 · Router - Clarify params subscription behavior when deactivating a route
- **Principles**: P-F5, P-H3 · **Env**: opera, angular
- **Signals**: 👍42 💬22 · closed · labels: freq3: high/area: router/P4
- **Excerpt**: ``` [ x ] bug report ``` **Current behavior** This is a quote from the official documentation - > The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so you don't need to unsubscribe from the route params Observable. The subscription is still active. **Expected behavior** Angular should unsubscribe from the params observable when the component destroyed. ( or change the documentation ) **Minimal reproduction of the problem with instructions** You can test this behavior with the `delay` operator. ```ts @user({ ... }) export class TestComponent…

### CASE-3393 · Forms: Property does not exist on type AbstractControl
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report ``` **Current behavior** When trying to detect valueChanges in a form field it only works when I reference the field in one way, not in the way I would normally use it. My form setup: ``` this.myForm = formBuilder.group({ myfield: ['', Validators.required] }); ``` This is not working: ``` this.myForm.controls.myfield.valueChanges .debounceTime(400) .subscribe(term => { console.log(term); }); ``` The error I'm getting: `error TS2339: Property 'myfield' does not exist on type '{ [key: string]: AbstractControl; }'.` This however is…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3335 · Angular 2.0.0-rc.1 no longer exports BrowserDomAdapter
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular
- **Signals**: 👍5 💬24 · closed · labels: type: bug/fix
- **Excerpt**: Prior to Angular 2.0.0-rc.0, it was possible to import and use BrowserDomAdapter in the application. Seems like it is no longer exported from @user/platform-browser. Is this intentional or a bug? Originally, I asked the question on StackOverflow: [link] Is there an API that should be used instead?

### CASE-3368 · Cannot find name 'Iterable'.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular
- **Signals**: 👍0 💬22 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x ] bug report ``` **Current behavior** I recently upgraded my angular 2 project to 4.0.0-beta.8. But when I try to compile, it throws below error: **node_modules/@user/core/src/change_detection/differs/iterable_differs.d.ts(15,48): error TS2304: Cannot find name 'Iterable'.** I have also seen a question with similar error on stackoverflow but no one has responded yet. [link]

### CASE-3370 · @user not working on @user properties
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍15 💬22 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report [ ] feature request [ ] support request ``` **Current behavior** When defining a @user on an attribute directive referring to an @user property of the host component, it does not update the host property after changing the value. **Expected/desired behavior** @user should probably apply to all properties of the host, including @user properties. **Reproduction of the problem** Plunker: [[link]]([link]) Stackoverflow question and answer with solution using a template reference variable: [[link]]([link]) **What is the expected behavior?** In the…

### CASE-3381 · Components not being garbage collected by browser, causing major memory leak
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍10 💬21 · closed · labels: memory leak/area: core
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't know / other ### Is this a regression? No ### Description **Stack Overflow Post**: [link] **Summary**: - when a component gets created with *ngIf="true" or with ViewContainerRef.createComponent(componentFactory: ComponentFactory<C>), and then destroyed, with *ngIf="false" or with ViewContainerRef.clear(), the component stays in memory, and can't be garbage collected by the browser - this causes a significant memory leak (especially in larger apps that use many nested components) - this is a tricky bug because: - if you download the…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3365 · ivy throw [tagName] is not a known element
- **Principles**: P-A1, P-A4, P-G3 · **Env**: angular
- **Signals**: 👍5 💬22 · closed · labels: type: bug/fix/regression/area: core
- **Excerpt**: # 🐞 bug report ### Affected Package I think, the issue is caused by package `@user/core` ### Is this a regression? Yes, it works in `ViewEngine` ### Description In angular v9 rc1 enable ivy with certain 3th party lib throw `* is not known element` ## 🔬 Minimal Reproduction One line repro : `git clone [link] && cd ivy-tag-is-not-a-known-element && npm i && ng s -o` Compilation/serve is OK, but at runtime (open dev tools) error is: ## 🔥 Exception or Error <pre><code> core.js:6068 ERROR Error: 'tree-viewport' is not a known element: 1. If 'tree-viewport' is an Angular component, then verify…

### CASE-3379 · For loops in new control flow are extremely slow and taking much more memory than ngFor
- **Principles**: P-A1, P-A4, P-G3 · **Env**: angular
- **Signals**: 👍0 💬21 · closed · labels: needs reproduction/area: core/core: control flow
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description I recently upgraded an Angular app to new control flow. All I did was: 1. Run automatic migration 2. Fix components where the migration didn't properly updated the code to the new syntax On few components where we have large lists with infinite scroll, the app becomes very unresponsive as soon as we start loding more data to the list and list becomes large. This was working perfectly with old ngFor syntax. I have tried it with inline list as well as moving list to a seperate component…

