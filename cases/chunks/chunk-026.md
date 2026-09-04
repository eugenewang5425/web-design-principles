# Case Chunk 026 — Round 26

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3501 · Hydration behavior when client and server render different branches of an if-else block
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: area: core/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler ### Is this a regression? No ### Description I don't know how to create a reproduction with SSR on Stackblitz, so please read it first and check the videos - perhaps you'll see what I'm talking about and what could cause that and perhaps it is a duplicate (I tried searching). So, in the template, we have: ```html ... @user (store.$isAuthenticated()) { <div class="nav-btn" (click)="..."> <mat-icon svgIcon="account"/> <span i18n="@user.account" class="btn-label">Account</span> </div> } @user { <div class="nav-btn" (click)="...">…

### CASE-3502 · The upgrade to `19.0.0-next.11` breaks my application
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬16 · closed · labels: area: migrations
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? Yes ### Description When I run: ``` ng update @user/core --next ``` The schematic that removes the `standalone` flag is run automatically. it did break my app by doing this in approximately 24 files: ![Image]([link]) for a reproduction, you can clone the main branch from my samples repo: ~[link] EDIT: Moved into a branch: [link] and run the above upgrade. (btw, a simple search and replace to remove those lines fixes the problem) ### Please provide the environment you discovered this bug in…

### CASE-3505 · Make DevTools usable on virtual desktop without internet connection
- **Principles**: P-A3, P-H1 · **Env**: desktop
- **Signals**: 👍21 💬16 · closed · labels: feature/good first issue/feature: under consideration/area: devtools
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? _No response_ ### Description We would love to use DevTools. But our customer allows development on a virtual desktop without internet connection only. We found a way to install DevTools in this environment but it looks pretty broken, because icons / images are obviously loaded from the web. ![screenshot]([link]) ### Proposed solution Include images instead of loading them via internet ### Alternatives considered At least use alternative texts that are short enough so the layout does not become almost unusable.

### CASE-3507 · What's a reasonable expectation of angular performance?
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍9 💬16 · closed · labels: area: performance/needs reproduction
- **Excerpt**: So my app is slow. That slow part consists of iteration over medium complex components with another bunch of nested components inside ![image]([link]) Trying to render more than one of these started to add up a LOT of scripting time, up to the point where trying to render 10 of them caused 30 second freeze. The first and biggest culprit I found was @user/flex-layout, which, as you know, if you managed to click [deep enough]([link]) inside the wiki can not handle more than a hundred of grids (since I used it inside like 10 of the nested components inside it easily added up to that critical…

### CASE-3530 · Router: Use '**' wildcard as catch-all to lazy loaded module with child routes
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬16 · closed · labels: type: bug/fix/freq3: high/area: router
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** The `'**'` catch-all definition lazily loads the module, however it does not properly handle the child routes. **Expected behavior** Lazy load the module and properly handle all the child routes. The catch-all `'**'` lazily loaded module could either define more `'**'` catch-all's with other lazy loaded…

### CASE-3539 · Alpha35: Empty event expression produce cryptic error
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: type: bug/fix/effort1: hours/open for contributions
- **Excerpt**: Related: [ref] (should be fixed together) I have a template with the following element: ``` html <input type="file" id="picture" accept="image/*" (change)="onFileSelected(f, $event)" (fileread)> ``` On alpha 33 it worked great. On alpha35 it produces the following runtime error: ``` EXCEPTION: TypeError: Cannot set property 'lastInBinding' of undefined angular2.js:13030 STACKTRACE: angular2.js:13030 TypeError: Cannot set property 'lastInBinding' of undefined at Function.execute._ConvertAstIntoProtoRecords.create ([link]) at [link] at Array.map (native) at createEventRecords ([link]) at…

### CASE-3541 · valueAccessor is null in NgModel
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · open · labels: area: forms
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description We are using template driven forms and until now we could get `valueAccessor` from injected `NgModel`. ```ts @user(NgModel, {descendants: true}) public inputs: QueryList<NgModel>; public ngAfterContentInit(): void { // array of nulls const accessors = this.inputs.map((control) => control.valueAccessor); } ``` <img width="812" height="684" alt="Image" src="[link] /> ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you…

### CASE-3549 · UI Loading twice when using SSR with default angular 17 app
- **Principles**: P-A3, P-H1, P-F4 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: needs reproduction
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core, platform-browser, platform-server ### Is this a regression? No ### Description 1. Created a new angular 17 app (my-app) with all default 2. npm run build 3. npm run "serve:ssr:my-app" Code attached for reference The UI show show the component twice along with CSS rendered as plain text on the UI. ![image]([link]]/assets/33697366/86f0de7e-9880-413a-a899-6a0b195064cd) ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw _No response_ ### Please provide the…

### CASE-3550 · [platform-server] SSR for Standalone Component: bootstrapApplication have memory leaks
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: bootstrap, angular
- **Signals**: 👍0 💬15 · closed · labels: memory leak/area: server/state: has PR/P2/bug
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? platform-server ### Is this a regression? No ### Description # ngModule version I clone the Angular Universal repo version from angular: - checkout master then: `pnpm install` - `pnpm dev:ssr` to serve - `nodemon --inspect=localhost:9236 dist/server/main.js` to inspect Then I start it and make a heap snapshot. it's fine. Open dev tools for Node.js to inspect, Go to memory tab, search `module` keyword ![image]([link]) first-time load home page: ![image]([link]) load home page at second time: ![image]([link]) load home page at 20th times:…

### CASE-3553 · Default encapsulation doesn't work after init in boostrapModule
- **Principles**: P-A3, P-H1 · **Env**: bootstrap, angular
- **Signals**: 👍0 💬15 · closed · labels: area: core/core: CSS encapsulation/core: bootstrap/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description ```ts const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppBrowserModule, { defaultEncapsulation: ViewEncapsulation.ShadowDom }); ``` find `example-avatar` ![image]([link]) ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true I expect behavior to change encapsulation! ``` ### Please provide the environment you discovered this bug in (run `ng version`) ```true Angular 9 Node.js 16 npm 6 ``` ###…

### CASE-3556 · Lighthouse "Best Practices" issue with zone.js
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍1 💬15 · closed · labels: area: zones
- **Excerpt**: # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> The issue is caused by zone.js ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> not applicable ### Description `polyfills.ts` contains: ```javascript import 'zone.js/dist/zone'; // Included with Angular CLI. ``` When running lighthouse on my app, I see this: <img width="725" alt="Screen Shot 2020-10-28 at 9 13 11 PM" src="[link]> grepping though all the files that `polyfills.ts` pulls in, only zone.js uses unload. The details of the…

### CASE-3557 · zone.js can't patch XHR requests on IE11
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: area: zones/type: confusing
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package [email] ### Is this a regression? Yes, the previous version in which this bug was not present was: 0.10.3 ### Description This error occurs on IE11 when zone.js tries to patch any XHR requests. ## 🔬 Minimal Reproduction ## 🔥 Exception or Error Error message is <pre><code> "Invalid calling object" </code></pre> Stacktrace <pre><code> at scheduleTask ([link]) at scheduleTask ([link]) at onScheduleTask ([link]) at scheduleTask ([link]) </code></pre> ![image]([link]) ![image]([link]) ![image]([link]) ## 🌍 Your Environment…

### CASE-3559 · lvy:Library build by angular-cli can not tree shaking in apps
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: type: bug/fix/effort1: hours/freq2: medium/workaround2: non-obvious/target: patch
- **Excerpt**: # 🐞 bug report ### Affected Package @user/cli ### Is this a regression? it can not work in ng8 also, but i try to ask if it can work in ng9 or not ### Description A library build by angular-cli, improt a module or declare a component of the library into a app, then build the app with aot, the whole library code gets into bundle, the tree shaking did not work ## 🔬 Minimal Reproduction [link] ## 🔥 Exception or Error In the demo i use the library jigsaw([link]) which build by angular-cli ![image]([link]) and i import the module `JigsawButtonModule` which just has the component `JigsawButton`…

### CASE-3572 · Components and modules exported from shared modules with forRoot option not available in lazy loaded module
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬15 · closed
- **Excerpt**: [ X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see **Current behavior** I am exporting CommonModule from '@user/core', some reusable custom components and custom services from SharedModule as static forRoot : ModuleWithProviders. I am importing SharedModule in AppModule by calling forRoot function. Now all the modules and components exported by SharedModule is available in AppModule and i am able use it in AppComponent. But when i try to import and use the same modules…

### CASE-3581 · ShadowCss.shimCssText slow after RC6 update
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍2 💬15 · closed · labels: area: performance/area: core
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** [link]]/blob/38069aba35ac2914bb0a366036271a1388f7c275/modules/%40angular/compiler/src/shadow_css.ts#L151 The above line takes a few hundred milliseconds to run. See the attached JS profile: <details> ![screen shot 2016-09-06 at 14 18 05]([link]) </details> If we include images as data urls in the css…

### CASE-3582 · RC.5 problem about combining @user with <router-outlet></router-outlet>
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬15 · closed
- **Excerpt**: First of all,I want to say I read the document in official website,and I try to simulate it in my project but failed. Here's my code structure. ![image]([link]) app.routes.ts ``` import {provideRouter, RouterConfig, RouterModule} from '@user/router'; import {wechatRoutes} from "./wechat/wechat.routes"; export const routes:RouterConfig = [ ...wechatRoutes, {path: '', redirectTo: '/wechat'} ]; export const appRouting = RouterModule.forRoot(routes); ``` app.module.ts ``` import {NgModule} from '@user/core'; import {BrowserModule} from '@user/platform-browser'; import {AppComponent} from…

### CASE-3595 · Official tutorial issue - Image missing in examples
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: area: dev-infra/P2
- **Excerpt**: ### Describe the problem that you experienced The official tutorial shows that we can copy/paste into the ```db.json``` file... But you are copy/pasting the this.baseUrl which doesn't work when you get the code from the json-server. ### Enter the URL of the topic with the problem [link] ### Describe what you were looking for in the documentation _No response_ ### Describe the actions that led you to experience the problem _No response_ ### Describe what you want to experience that would fix the problem _No response_ ### Add a screenshot if that helps illustrate the problem <img width="900"…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3503 · Nested computed signals have glitchy behavior due to garbage collection of WeakRef dependencies
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬16 · closed · labels: area: core/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description There are many reasons you may end up with nested `computed()` signals, which could be deliberate or unintentionally. In the simplest form I'm talking about this, where a `computed` is created inside a computation and the value is accessed. Importantly, notice that `outerComputed` doesn't directly have a dependency on `counter`. const outerComputed = computed(() => { const innerComputed = computed(() => { return counter() % 5 == 0; }); return innerComputed(); }); Developers are most…

### CASE-3504 · Wrong FormControl type inference when created with FormBuild through group() with Validators and an array as value
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬16 · closed · labels: area: forms/state: confirmed/P2/bug/forms: strictly typed
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? No ### Description When creating a FormGroup with the new ng14 FormBuilder, if you try to add a control with both array value and validator(s) the infered type for this control become wrong. It seems the validator(s) are considered as value so we get a bad union typing. ```ts /** * Wrong type! * FormGroup<{ * test: FormControl<number[] | ((control: AbstractControl<any, any>) => ValidationErrors | null)>; * }> */ const form = fb.nonNullable.group({ test: [[1,2,3], Validators.required] }) ``` If you use the…

### CASE-3506 · Angular issue with removing duplicated elements when moved around in DOM
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: needs reproduction/area: core
- **Excerpt**: # Error Report #### Angular issue with removing duplicated elements when moved around in DOM ## Questions Please fill out answers to these questions, it'll help us figure out why things are going wrong. - **What did you do?** * I hit the remove button in my custom made dropdown this dropdown is not ```html <select> <options></options> <options></options> <options></options> </select> ``` it's ```html <div> <a>Select Item</a> <a>1</a> <a>2...</a> </div> ``` * the orgignal element was ```<a>Select Item</a>``` and directives were use to create the dropdown feature * I hit the remove button to…

### CASE-3510 · FormControlDirective and FormControlName do not call setDisabledState on ControlValueAcessor instances when the CVA is added and is enabled
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬16 · closed · labels: type: bug/fix/area: forms/state: has PR/state: confirmed/P2
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> @user/forms ### Is this a regression? Not that I know of. ### Description When you add a CVA to a form via the FormControlDirective…

### CASE-3511 · I can't create dynamic FormGroup manually
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍7 💬16 · closed · labels: area: forms
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 I can't create dynamic form group manually but when i form builder it's working fine 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue is caused by package @user/.... ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> <!-- ✍️--> Yes, the previous version in which this bug was not present was: .... ### Description this code…

### CASE-3518 · ngIf not working with material md-select within router (4.3.6 x, 4.3.5 o)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: area: common
- **Excerpt**: I think this does not need any plunkr code works fine with 4.3.5

### CASE-3520 · Regression caused by the min/max validators in 4.2.0
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍14 💬16 · closed · labels: type: bug/fix/regression/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [ ] feature request [ ] support request ``` **Current behavior** Version 4.2.0 introduces [min and max validators]([link]]/commit/81925fa66d2c930f68d3b6dd084c954ea1bab6b6). The issue arises when a custom component has `min` | `max` input property and that component implements `ControlValueAccessor` and is registered as a validator (custom validation logic requirements). When the user wraps that component in a `FormGroup` the default `min|max` validators are always triggered and there is no way of instructing them that my…

### CASE-3521 · Use more than one CustomValueAcessor in one Input field
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬16 · closed · labels: area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I have created 2 directives with a CustomValueAcessor, and when I use them in an <input type="number"> field I got the following error: > Error: Uncaught (in promise): Error: More than one custom…

### CASE-3524 · Property 'controls' does not exist on type 'AbstractControl'
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a** ``` [x] bug report ``` **Current behavior** As there's no clean access to the `FormGroup`' controls, currently there's a `ng build -prod` error related to types when you try to access the `.controls` property, and `AbstractControl` does not have that property: ``` ERROR in ng:///path/to/app/my/custom.component.html (7,10): Property 'controls' does not exist on type 'AbstractControl'. ``` [link]]/blob/4.0.0/packages/forms/src/model.ts#L834 where I have a form with…

### CASE-3529 · FormsModule: untouched text input is not pristine in IE 11
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When showing a form in IE 11 with an input field, the initial state of the field is not pristine, leading to error messages being shown to the user before he touched the field. **Expected behavior** The field state should be pristine until the user first entered and removed some text. This works fine in…

### CASE-3532 · NumberValueAccessor not exported from @user/forms
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: feature/freq1: low/area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Having a `<input type="number">` field in your template causes AoT compilation to fail with a ``` 40% building modules 251/311 modules 60 active…

### CASE-3538 · validator with access to another control
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: area: forms
- **Excerpt**: I was just testing the validators this morning and I created a simple validator that tests for the equality of values from two controls: ``` js import {provide, Directive, Attribute, Input} from 'angular2/core'; import {NG_VALIDATORS, Control, Validators, Validator} from 'angular2/common'; import {isPresent} from '../../common/lang'; @user({ selector: '[equal-to][ng-control],[equal-to][ng-form-control],[equal-to][ng-model]', providers: [ provide(NG_VALIDATORS, { useExisting: EqualToValidator, multi: true }) ] }) export class EqualToValidator implements Validator { @user('equalTo') target:…

### CASE-3542 · signal forms: string | null type is giving compile error, type errors while using it with primeng components
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍14 💬15 · open · labels: area: forms/forms: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler, forms ### Is this a regression? Yes ### Description Form data type like this was working earlier, but now it gives type error: ```ts interface LoginData { email: string | null; password: string | null; rememberMe: boolean; } ``` Form: ```ts loginModel = signal<LoginData>({ email: null, password: null, rememberMe: false, }); loginForm = form(this.loginModel); ``` ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true [ERROR] TS2322: Type '`0x${string}` |…

### CASE-3544 · multiple ng-content throws error in template
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: core: content projection/needs: clarification/area: docs
- **Excerpt**: ### Describe the problem that you experienced The documentation for ng-content shows it set up as follows: ``` <!-- Component template --> <div class="card-shadow"> <ng-content select="card-title"></ng-content> <div class="card-divider"></div> <ng-content select="card-body"></ng-content> </div> ``` And to use the above component like so: ``` <!-- Using the component --> <custom-card> <card-title>Hello</card-title> <card-body>Welcome to the example</card-body> </custom-card> ``` when I've tried this in my ow project (and using the above code as well as my own) the component using the component…

### CASE-3545 · TestBed bindings not working & flaky
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: area: testing/area: core
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description - in test when using `inputBinding` test are failing(Error: NG0950: Input "form" is required but no value is available yet.) - when I use `fixture.componentRef.setInput('form', form);` then it works ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Error: NG0950: Input "form" is required but no value is available yet. Find more at [link] error properties: Object({ code: -950 }) at…

### CASE-3554 · Change detection is not fired on forms updates when using the `OnPush` strategy.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍11 💬15 · open · labels: area: forms/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? No ### Description Everything can found here : [link] Explanation : When using an async validator with a delayed observable, in a reactive form, with the change detection set to OnPush, the UI does not get updated after the validator has ended its call. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true No exception, no error, just the UI not updating correctly ``` ### Please provide the environment you discovered this bug in (run…

### CASE-3555 · ng 11: patchValue, valueChanges & async pipe
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍2 💬15 · closed · labels: needs reproduction/area: forms
- **Excerpt**: # 🐞 bug report I don't know if this is a bug or feature. * I have AbstractControl for the input field on which I want to listen to valueChanges with async pipe. * It works fine if user write to the input field async pipe work * If I programatacly patch value then async pipe doesn't work * code ts: ```typescript searchForm: FormGroup; ... ngOnInit(): void { this.initSearchForm(); this.navigateBack = this.route.snapshot.queryParams.back; if (this.navigateBack && this.navigateBack === 'true') { this.orgCtrl.patchValue(null); // this.orgCtrl.setValue(this.orgStorage.getSearchKey(), { emitEvent:…

### CASE-3558 · ERROR in TypeError: Cannot read property 'flags' of undefined
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍16 💬15 · closed
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package Unknown，Just upgrade form 9.1.4 to 9.1.5. ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> <!-- ✍️--> Yes, the previous version in which this bug was not present was: .... ###…

### CASE-3561 · ReactiveForms formGroup.reset doesn't set value to default
- **Principles**: P-G4, P-E3 · **Env**: react, angular
- **Signals**: 👍0 💬15 · closed · labels: area: forms
- **Excerpt**: # 🐞 bug report ### Affected Package @user/forms ### Is this a regression? No. ### Description `formGroup.reset()` can accept an object with values of form controls to reset them to. When setting value for `<input type="date"/>` it doesn't work. ## 🔬 Minimal Reproduction [link] Click `reset form` and the default value will not be applied. As a side note: when you manually change the value and then click `reset` it will fall back to default value, but if you click it again it will remove input value. ## 🌍 Your Environment **Angular Version:** <pre><code> Angular CLI: 7.3.5 Node: 10.10.0 OS:…

### CASE-3564 · HttpClient POST withCredentials=true does not send cookies with Content-Type=application/json
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍15 💬15 · closed · labels: needs reproduction
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> ## Current behavior HttpClient POST with Content-Type="application/x-www-form-urlencoded",…

### CASE-3568 · NgModel convert model to string, when input[type] doesn't number.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: area: forms
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3569 · ReactiveForms
- **Principles**: P-G4, P-E3 · **Env**: react, angular
- **Signals**: 👍0 💬15 · closed · labels: type: bug/fix/area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a bug** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** i have read Doc about reactive form, after i did a demo,i found a bug about formArry and i user Angular2.2.4. ```<div class="container"> <form [formGroup]="$form"> <div formArrayName="formItems"…

### CASE-3573 · New change detection strategy onPushStrict
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍31 💬15 · closed · labels: feature/area: core/core: change detection/feature: under consideration
- **Excerpt**: **I'm submitting a ...** ``` [ ] bug report [X] feature request [ ] support request ``` **Current behavior** We only have two change detection strategies: `Default` and `OnPush` - OnPush doesn't trigger change detection if no input changed - If something changed inside of this component change detection runs for whole application - To prevent this we have to set OnPush for EVERY other component ![current]([link]) **Expected behavior** New strategy 'onPushStrict' (working title) OR default behavior if component has not output's: - Don't trigger change detection if no input changed (same as…

### CASE-3578 · feature request: mark component @user as required (vs none if not required)
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: ``` [ ] bug report => search github for a similar issue or PR before submitting [x ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** no way to enforce which are a component's required interface **Expected behavior** get a TypeScript error that component is not satisfying it's minimum interface ti work **What is the motivation / use case for changing the behavior?** I have a VERY complex component with 6 inpits, yet only 1 input is required for it to work with no errors. If I…

### CASE-3579 · Angular 2.0.0 generates invalid Content-Type header for multipart/form-data requests if a default Content-Type header is configured
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍1 💬15 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** If defaultOptions with header Content-Type is set for http, firing a post request with a FormData body and with header Content-Type null or "" leads to the generation of a corrupt Content-Type header. The Content-Header includes a comma: `content-type:, multipart/form-data;…

### CASE-3580 · A required checkbox should always be invalid if unchecked
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬15 · closed · labels: type: bug/fix/freq3: high/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Given an `<input type="checkbox">` with the `required` attribute, `ngModel` correctly considers it invalid to start with. Checking it correctly makes it valid, but after unchecking it it's still valid. **Expected behavior** A required checkbox should always be invalid if it's not checked. **Reproduction…

### CASE-3583 · Bug(forms): Two formControlName bound to same FormControl are not updated without ngModel
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬15 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x ] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Consider this template: ``` <form [formGroup]="form"> <input type="text" formControlName="control"/> <input type="text" formControlName="control"/> ... ``` I have 2 inputs bound to the same FormControl. I'm not using `ngModel` input of `formControlName` directive. When I enter something in one control, another control is not updated and debugging shows that…

### CASE-3591 · Add WritableComputed to allow computed with write operations
- **Principles**: P-G4, P-E3 · **Env**: opera
- **Signals**: 👍7 💬14 · closed · labels: area: core/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? core ### Description Revival with use case of [ref] Currently `signal` produces a writable signal. Currently `computed` produces a non writable signal. What I am missing is a `writableComputed`. Use case example: I have a required input called `value` but inside the component I can edit this value without affecting the outside. At the end an apply button is clicked and I emit the new value via an output. Something like this: ```ts class Test { value = input.required<string>(); tempValue = signal(/*??*/); commit =…

### CASE-3593 · Allow specifying "equal" function for signal based inputs.
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍44 💬14 · open · labels: area: core/core: inputs / outputs/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? core ### Description Currently we have a lodash deep equals on our signals that are bound to an input setter like ```typescript _message = signal({} as Message, { equal: isEqual }); @user({ required: true }) set message(value: Message) { this._message.set(value); } ``` We could not find a way to do the same with a signal based input. ### Proposed solution Allow setting an equal function on signal based inputs. ### Alternatives considered Maybe we are getting this whole thing wrong?

### CASE-3596 · `@user`/`@user` Control Flow
- **Principles**: P-G4, P-E3 · **Env**: angular, typescript
- **Signals**: 👍42 💬14 · closed · labels: area: core/core: error handling
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? common, compiler-cli, compiler, core ### Description tl;dr: I am proposing a new `@user`/`@user` [control flow]([link]]/discussions/50719) to catch errors that occur in Angular component's `constructor` method. ```html @user { <error-throwing-component/> } @user (e: any) { <handle-error [error]="e"/> } ``` _**A longer-form blog post explaining this problem and the solution can be found here**_: [[link]]([link]) # The problem When rendering the following: ```typescript import 'zone.js/dist/zone'; import {…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3508 · platform-server - Changes introduced in 10.0.0-next.8 to convert relative URLs to absolute URLs breaks SSR
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: needs reproduction/area: server
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/platform-server ### Is this a regression? Yes, the previous version in which this bug was not present was: 10.0.0-next.6 ### Description I recently updated my app from Angular `10.0.0-next.6` to `10.0.0-rc.0`, after which I noticed strange behavior in SSR requests. After the update it broke the SSR for my app. I downgraded `@user/platform-server` to `10.0.0-next.6` and everything started working fine. I have an http interceptor, which: 1. Converts the request url from relative to absolute urls in `intercept` method of…

### CASE-3526 · Custom Http not working with SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: type: bug/fix/area: server
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When you create custom `Http` it is working in browser, but when you use it in NodeJs environment while rendering on server it never performs `HttpRequest`. **Expected behavior** Custom `Http` should work on browser or server side. **Minimal reproduction of the problem with instructions** [link] You can…

### CASE-3546 · Certain `@user` values can mimic internal data structure, breaking basic runtime logic
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍2 💬15 · closed · labels: area: core/state: has PR/P2/bug
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description Before hydration and using signals my code worked. I refactored it to use signals and incremental hydration and it broke. The error message was not really meaningful: `Cannot add property i18nNodes, object is not extensible` I use [apollo-angular]([link]) which freezes every object in its state and results. The state cannot be modified. ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Cannot add…

### CASE-3547 · Angular 17: If SSR is enabled, The route is loaded before guard returns a boolean (returning Observable<boolean> | Promise<boolean>)
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: needs reproduction
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? router ### Is this a regression? Yes ### Description I added "canActivate" to route but it still loads (like jumps on the screen) before guard redirects to another route (when user is not authorised). when I disabled "ssr" and "prerender", it doesn't happens. ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw _No response_ ### Please provide the environment you discovered this bug in (run `ng version`) _No response_ ### Anything else? _No response_

### CASE-3548 · Memory leakage in SSR while using native node fetch
- **Principles**: P-F4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍6 💬15 · closed · labels: memory leak/area: zones/area: server/area: common/http/state: has PR
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? ssr ### Is this a regression? Yes ### Description After upgrading our enterprise application to NG17, we also enabled native fetch on SSR using `withFetch()`. Once after deployment of the upgraded application we encountered permanent memory increase and finally the application restarting due to OOM. After investigating it became obvious that the heap space size only got exceeded when using native node fetch. Removing `withFetch()` fixed the problem. Below find a screeshot from Datadog monitoring, which nicely shows what happened over the…

### CASE-3552 · Angular SSR cannot use ESM modules (Domino compatibility issue)
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: area: server/P2/bug
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description I just created a fresh Angular universal app using Angular cli. it just works fine. however, when I just add `"type": "module"` to `package.json` and serve again (with or without rebuilding the app again) it fails with the error `Strict mode code may not include a with statement` **reproduction steps** 1- create a new Angular universal app `ng new example && cd example && ng add @user/express-engine` 2- run `npm start` -> `npm run build:ssr && npm run serve:ssr` (suceesed) 3- add `"type":…

### CASE-3590 · Memory leak via TRACKED_LVIEWS with SSR
- **Principles**: P-F4, P-F5, P-H3 · **Env**: angular
- **Signals**: 👍0 💬14 · closed · labels: memory leak/area: core/area: server/state: has PR
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core, platform-server ### Is this a regression? I don't know ### Description I'm investigating a Node.js memory leak in our Angular Universal app. Looking at the heap snapshots, I see that over time, the global TRACKED_LVIEWS map keeps accumulating entries. I don't have a clear repro at this point, but it seems that it happens when the server processes multiple requests (i.e renders multiple documents) at the same time All retained LViews are root entries (`lview[1].type` is 0). ### Please provide a link to a minimal reproduction of the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3509 · Entry point 'xxx' contains deep imports into 'yyy'
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍10 💬16 · closed
- **Excerpt**: # 🐞 bug report ### Is this a regression? Yes, the previous version in which this bug was not present was: 8.2.14 ### Description Multiple warnings like "Entry point 'devextreme-angular/...' contains deep imports into '/node_modules/devextreme/...'. This is probably not a problem, but may cause the compilation of entry points to be out of order." occur when building an Angular v9 project with Ivy enabled. ## 🔬 Minimal Reproduction [[link]]([link]) npm install ng build ## 🌍 Your Environment <pre><code> Angular CLI: 9.0.3 Node: 13.9.0 OS: win32 x64 Angular: 9.0.2 ... animations, common,…

### CASE-3512 · 9.0.0-rc.5: angular/compiler and angular/compiler-cli throw errors when running ngcc
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍3 💬16 · closed · labels: type: bug/fix/needs reproduction
- **Excerpt**: ### Affected Package **@user/compiler @user/compiler-cli** ### Is this a regression? Yes ### Description When @user/compiler is on `9.0.0-rc.5` when running `yarn ngcc` I'm getting the compile error. There is also another compile error when @user/compiler-cli is on `9.0.0-rc.5` ## 🔥 Exception or Error When @user/compiler is on `9.0.0-rc.5` <pre><code> Compiling @user/cdk/keycodes : es2015 as esm2015 Compiling @user/animations : fesm5 as esm5 Compiling @user/animations : fesm2015 as esm2015 Compiling @user/animations : esm5 as esm5 Compiling @user/animations : esm2015 as esm2015 Compiling…

### CASE-3515 · [Animations, Angular 5] Nested [@user] fires when parent trigger is executed. Animation executes before its turn
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍1 💬16 · closed · labels: type: bug/fix/area: animations/freq1: low/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ X ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3516 · compiler-cli: lowering_expression transformer does not handle forwardRef like function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍9 💬16 · closed · labels: type: bug/fix/freq2: medium/area: compiler
- **Excerpt**: ```ts @user({ selector: 'app-test-component', templateUrl: './test-component.component.html', styleUrls: ['./test-component.component.css'] }) export class TestComponentComponent { prop: string; } export function MyPropDecorator(value: any) { return (target: Object, key: string) => { } } export class MyClass { @user(() => TestComponentComponent) prop: string; } ``` ```bash SHLASSAF-M-4099:testproj shlomiassaf$ ng build --aot --build-optimizer Date: 2017-11-06T04:02:00.134Z Hash: 957bab95fbd81c3b3b0f Time: 3658ms chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry]…

### CASE-3517 · Angular 4 - Import BrowserAnimationsModule or NoopAnimationsModule in production mode
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍10 💬16 · closed · labels: type: bug/fix/area: animations/freq1: low/P3
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ x ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3519 · NgFor with animations displays incorrectly if NgFor array elements are reordered in-place
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍28 💬16 · closed · labels: type: bug/fix/area: animations/hotlist: components team/freq3: high/P2
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3523 · Leave animation not running in a nested animation of a child component
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍31 💬16 · closed · labels: type: bug/fix/area: animations/freq3: high/P3
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** I have 2 components (1 parent, 1 child) which should be running 2 different animations at the same time when something triggers in the parent component. The child component is adding an element to the DOM in this case and the enter animation for this element is running fine. When the animation is running…

### CASE-3525 · [4.0.0-rc.5] Animate programmatically
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: type: bug/fix/area: animations/freq2: medium/P4
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Ways to animate apart from Component declarations don't work. **Expected behavior** <!-- Describe what the behavior would be without the bug. --> Run…

### CASE-3528 · 4.0.0-Rc.1 AnimationsModule not found / exported in @user/animations
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: type: bug/fix
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Followed changelog instructions to upgrade to 4.0.0-rc.1 with the extra step of including the new animations package. >>If you rely on Animations you’ll also…

### CASE-3540 · Upgrade zone.js => WAS: Heavy CPU usage over time with Zone and requestAnimationFrame
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: type: bug/fix/effort1: hours
- **Excerpt**: I have a "game" that manages its own time loop using requestAnimationFrame. I have ported it to angular2, and it works really well except that I experience pretty severely degraded performance over time. When I capture CPU profiles Zone ends up replacing the idle time that was there when the page loaded. I'm not sure what to make of it, but it's very easy to reproduce--just open the page and take a profile, then wait a minute and take another profile. Example: [link]

### CASE-3565 · getAnimationStyle causes exceptions in older browsers
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍16 💬15 · closed · labels: type: bug/fix/area: animations/freq3: high/regression/state: has PR
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3586 · Angular 2 and IE9 requestAnimationFrame error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: type: bug/fix/area: animations
- **Excerpt**: I followed the [quickstart]([link]), and now that it's working fine, the only browser so far I've found it not working in, is IE9. Full log: ``` HTML1300: Navigation occurred. localhost:3000 EXCEPTION: Error during instantiation of function BrowserDetails() {! (Token Promise<ComponentRef> -> function DynamicComponentLoader() {} -> function Compiler() {} -> function RuntimeCompiler() { -> function ProtoViewFactory(_renderer, _platformPipes, _directiveResolver, _viewResolver, _pipeResolver, _appId) { -> function Renderer() {} -> function DomRenderer() { -> function…

### CASE-3594 · Multiple CSS Animations are not prefixed during build
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍12 💬14 · closed · labels: area: compiler
- **Excerpt**: ### Command build, serve ### Is this a regression? - [ ] Yes, this behavior used to work in the previous version ### The previous version in which this bug was not present was unknown ### Description I use Angular 16.2 and wanted to add multiple CSS animations to one of my CSS rules. It seems only the first animation name is prefixed properly, the following ones are not. This only applies to the production build: `ng build` or `ng s -c production`. Normal `ng serve` works fine. `ng s`: ![image]([link]]-cli/assets/22824759/4f15914e-670d-4c3c-a6e5-a42750aa7e94) All animations are applied…

### CASE-3599 · Keyframe scoping fails in combination with scss mixins
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍1 💬14 · open · labels: area: compiler
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? No ### Description There was a new feature introduced in Angular 15 about keyframes. I observed that keyframes inside a SCSS mixin will not get the elements scope as a prefix and thus never run. This only happens if the styling is delivered from a library. Example code: ``` div { height:100px; width: 200px; background: red; @user motion { animation: change-color 4s .2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards; } } @user change-color { from { background-color: blue; } to {…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-3513 · style.grid-template-columns inline binding doesn't work
- **Principles**: P-A2, P-A4 · **Env**: angular
- **Signals**: 👍6 💬16 · closed · labels: type: bug/fix/freq1: low/area: core/core: styling bindings/core: sanitization
- **Excerpt**: # 🐞 bug report ### Description style.grid-template-columns inline binding doesn't work ``` <div class="grid" [style.grid-template-columns]="'repeat(5, 1fr)'"> <div>test</div> <div>test</div> <div>test</div> <div>test</div> <div>test</div> </div> ``` ## 🔬 Minimal Reproduction [link] ## 🌍 Your Environment **Angular Version:** <pre><code>7.1.4</code></pre> **Anything else relevant?** It works by using ngStyle like `[ngStyle]="{ 'grid-template-columns': 'repeat(5, 1fr)'} `

### CASE-3574 · Picture tag doesn't work if inside angular app
- **Principles**: P-A2, P-A4, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍7 💬15 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** `<picture>` tag can have multiple images defined. Browser chooses which one to load based on media queries and your browser's size. An example would be: ``` <picture> <source media="(min-width: 1280px)" srcset="[link]> <source media="(min-width: 1024px)" srcset="[link]> <source media="(min-width:…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3514 · Error upgrading to Angular 6: Cannot redeclare block-scoped variable 'ngDevMode'
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍3 💬16 · closed
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> Just update angular from 5.2 to 6.0.3 following [angular]([link]) but if I try to serve the application I have this error: > ERROR in…

### CASE-3543 · [Field] Directive does not allow binding to [type] or [invalid] properties
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: angular, typescript
- **Signals**: 👍5 💬15 · closed · labels: area: forms/forms: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? Yes ### Description When trying to bind to a [type] property or a [invalid] property and using the [field] directive, Angular throws a typescript error. My existing code uses an environment variable to use 'text' when doing local development, but 'password' when deployed. ```ts <input id="password" [field]="loginForm.password" [type]="environment.PASSWORD_TYPE" [invalid]="loginForm.password().invalid()" /> ``` I'm using PrimeNg inputText which expects an [invalid] input to control its styles. ```ts <input…

### CASE-3575 · [BUG] Template vars in conditional expressions don't work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍0 💬15 · closed · labels: needs reproduction
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> When using template variables in condition expressions for directive Angular2 does not work. **Expected behavior** I expect it to know trigger the "hidden" class when the route is activated => to be able to use template variables in the conditional statements of…

### CASE-3576 · .focus() method on FormControl or access to native HTML element
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍15 💬15 · closed · labels: feature/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** There seems to be no way to focus a FormControl. **Expected behavior** FormControl provides a *.focus()* instance method, or access to the native HTML element. **What is the motivation / use case for changing the behavior?** To give input focus to a control when it is invalid, as in the following…

### CASE-3584 · Add support for adding/removing aria and other attributes as validation is added/removed in the code when using the Reactive Forms (previously model-driven forms) approach
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍8 💬15 · closed · labels: feature/area: forms/Accessibility/feature: under consideration
- **Excerpt**: - **I'm submitting a ...** - [ ] bug report - [x] feature request - [ ] support request => Please do not submit support request here, see note at the top of this template. **Current behavior** When using the reactive forms/model-driven approach, the validation rules for HTML input elements are defined in the component class, not the HTML as attributes. This is great in that the validation can be tailored to different user types or application state. For example, a field is required for normal users but not required for admin users. However, we lose some built-in browser functionality when…

### CASE-3589 · `typeof` does not narrow in templates
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript, angular
- **Signals**: 👍0 💬14 · closed · labels: area: compiler/compiler: template type-checking/state: blocked on upstream
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler ### Is this a regression? Yes ### Description I am using @user (with the same behavior observed for *ngIf) to check a variable’s type. While the TypeScript linter accepts this type check without issues, the Angular compiler (ng build and ng serve) fails to compile. However, if I replace the inline type check with a TypeScript type-guarding function, everything works as expected. I don’t see a clear difference between the two approaches, so I suspect this might be a bug. ### Please provide a link to a minimal reproduction of the…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3522 · bug(error-logger): `console.error` may be undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android 5
- **Signals**: 👍1 💬16 · closed · labels: type: bug/fix/needs reproduction/freq1: low/area: core/core: error handling
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** On a Galaxy S4 device (running Android 5.0.1), in a web application using ionic, *sometimes*, it would throw the following error: > ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'apply' of undefined(…)defaultErrorLogger This error originates from:…

### CASE-3527 · bypassSecurityTrustStyle gives error on Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari
- **Signals**: 👍0 💬16 · closed · labels: type: bug/fix/freq2: medium/area: core/core: sanitization/P3
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Gives an error: ``` inline template:1:28 caused by: Attempted to assign to readonly property. ``` **Expected behavior** <!-- Describe what the behavior would…

### CASE-3533 · Emulated ViewEncapsulation issue with CSS pseudo classes on :host
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: webkit
- **Signals**: 👍4 💬16 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> When Encapsulation is enabled for a component, CSS pseudo class `:host::-webkit-input-placeholder` and perhaps every pseudo class applied to :host is…

### CASE-3534 · [Safari only] Invalid argument for pipe 'DatePipe' - Safari cannot parse Date offsets
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome
- **Signals**: 👍11 💬16 · closed · labels: type: bug/fix/area: common/area: i18n/freq1: low
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Error shows up, only on **Safari** `(Version 10.0 (11602.1.50.0.10))` ![screen shot 2016-10-17 at 01 10 54]([link]) **Expected behavior** <!-- Describe what the behavior would be without the bug. --> Expected no error to show up. **Google Chrome** works fine **Minimal reproduction of…

### CASE-3536 · Angular2: ReferenceError in Internet Explorer 11 - Symbol is undefined.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, angular
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: I followed the quickstart on [link] in VS2015 and it works fine in IE Edge and Google Chrome, but not in IE11 (Version: 11.162.10586.0) I'm using Angular2 beta 13. IE 11 gives the following error: { [functions]: , **proto**: { }, description: "undefined", message: "", name: "Error", number: NaN, originalErr: { [functions]: , **proto**: { }, description: "'Symbol' is undefined", message: "'Symbol' is undefined", name: "ReferenceError", number: -2146823279, stack: "ReferenceError: 'Symbol' is undefined at getSymbolIterator ([link]) at Anonymous function ([link]) at Anonymous function ([link])…

### CASE-3560 · memory leak with angular animation
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: chrome, angular
- **Signals**: 👍15 💬15 · closed · labels: type: bug/fix/area: animations/freq2: medium/memory leak/state: needs more investigation
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Description <!-- ✍️--> When using *ngIf to hide element which contains another element with angular animation trigger, appearing DOM nodes that garbage cleaner can`t remove. I inspect amount of DOM nodes by chrome performance monitor. In…

### CASE-3563 · HTTP 503 in Chrome -- angular.io is currently unable to handle this request.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, angular
- **Signals**: 👍0 💬15 · closed · labels: type: bug/fix
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [X] Other... Please describe: Frequent 503 when attempting to access angular.io docs over the last week </code></pre> ## Current behavior Randomly, angular.io docs will stop working from…

### CASE-3566 · Service worker updates do not work on latest chrome (Chrome 66.0.3359.117 )
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chrome 66, angular
- **Signals**: 👍10 💬15 · closed · labels: type: bug/fix/freq2: medium/area: service-worker
- **Excerpt**: I generated empty angular application via ng new appName --service-worker and implemented swUpdate: <pre><code> export class AppComponent { title = 'test'; constructor(private swUpdate: SwUpdate) { } ngOnInit() { if (this.swUpdate.isEnabled) { this.swUpdate.available.subscribe(() => { console.log("New version available."); if(confirm("New version available. Load New Version?")) { window.location.reload(); } }); } } } </code></pre> ![2018-04-24_1901]([link]) When service worker detects new version and I reload a page (via confim ok of F5) then I see an exception in console:…

### CASE-3571 · Animations not working on Firefox 53, error
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: firefox 53, firefox, chrome, safari, macos, angular
- **Signals**: 👍10 💬15 · closed · labels: type: bug/fix/area: animations/freq2: medium/browser: firefox/P3
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Trying to use the Angular 4 animations on Firefox returns an error. This behavior is not present on Chrome, Safari (MacOS) ![image]([link]) **Expected…

### CASE-3577 · Angular2 is not compatible with the stock browser of the Android 4.1.1 and 4.2 and 4.2.2 and 4.3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android 4, angular
- **Signals**: 👍1 💬15 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [X] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When I try to load my website(not public yet) on the stock browser of the Android 4.1.1 or 4.2 or 4.2.2 or 4.3 system, the site is not finishing the loading. It's even better that the browser is crashing when visiting [link] and selecting the Features menu item. **Expected behavior** Sites loads just…

### CASE-3585 · angular2 app extremely slow with 1000+ router-links
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, linux, windows, angular
- **Signals**: 👍2 💬15 · closed
- **Excerpt**: Try my little test app here: [link] This app does nearly nothing. Click on any link and the browser will hang for a couple of seconds, even on fast hardware. I tested it with Firefox and Chrome on Linux, IE11 and Firefox on Windows. I added a similar long list of links to the hero demo plnkr: [link] This is only slow on IE11.

### CASE-3592 · Angular DevTools not available - Firefox Developer Edition
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, windows, angular
- **Signals**: 👍18 💬14 · closed · labels: area: devtools
- **Excerpt**: ### Is this a bug report or a feature request? - [X] Bug Report - [ ] Feature Request ### Please provide the steps to reproduce the issue [Bug Report only] When I follow the link to install the Angular DevTools on [[link]]([link]). I get redirected correctly ([[link]]([link])) but it can't find the extension or rather it doesn't exist. I'm using Firefox Developer Edition version 125.0b6 on a Windows 11 machine and I'm from Switzerland (I don't know if it's a region problem). When I search for the extension the normal way I don't get a result. ### Please provide the expected behavior vs the…

### CASE-3597 · mobile nav dropdown items are hidden on ios mobile browsers
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ios, angular, mobile
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description when a users opens the panel on ios they should see the menu items the user is not seeing the menu items ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true show me how to do debugger in ios and I will attempt ``` ### Please provide the environment you discovered this bug in (run `ng version`) ```true @user/architect 0.1600.0 @user/build-angular 16.0.0 @user/core 16.0.0 @user/schematics 16.0.0 @user/angular 16.0.0…

### CASE-3600 · Animations not working on iOS 12 / 13: animate is undefined
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: ios 12, ios, angular
- **Signals**: 👍3 💬14 · closed
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations ### Is this a regression? Yes ### Description I have found a regression in Angular animations v13.2.2 for users using iOS v13 and older versions. Please find the stack trace attached. ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Error: D.animate is not a function. (In 'D.animate(P,Y)', 'D.animate' is undefined) _triggerWebAnimation@...:1:1039926 _buildPlayer@...:1:1039652 play@...:1:1040066 play@...:1:1034903 ...:1:1031449 forEach@[native…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3531 · Add scroll events to Angular.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3, P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬16 · closed · labels: feature/area: core
- **Excerpt**: [ ] bug report [x] feature request [ ] support request **Current behavior** <!-- Describe how the bug manifests. --> I've done a research to find a functionality within Angular 2 framework to detect the vertical position of the scroll bar so I can trigger animations in certain breakpoints, but the only [helpful solution]([link]) was a work around using Renderer class. here is the code (toggle 'shrink' variable to active after 75px scrolled): ``` constructor(private renderer: Renderer) { this.renderer.listenGlobal('window', 'scroll', (event) => { this.shrink = (event.pageY>75 ? 'active' :…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3535 · [beta.16 regression/testing] Scheduler / tick not working for code with multiple async-events
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍18 💬16 · closed · labels: area: testing
- **Excerpt**: **IMPORTANT**: This repository's issues are reserved for feature requests and bug reports. Do not submit support requests here, see [link]]/blob/master/CONTRIBUTING.md#question. This is pretty hard to describe, but I'm basically testing the typical Typeahead-Example everybody demonstrates. So this is my controller-code: ``` ts searchTerm = new Control(); ngOnInit() { this.searchTerm.valueChanges .do((val)=> console.log("Before debounce", val)) .debounceTime(200) .do((val)=> console.log("After Debounce", val)) .switchMap((term :string) => { return this.taskService.findTasks({'q': term})})…

### CASE-3537 · Rx debounceTime doesn't work.
- **Principles**: P-F5, P-H3 · **Env**: opera, typescript, angular
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: I have modified example from here [link] -> [link] It works as expected. I have created service that should only notify after 1.5s after scroll end and it is never fired. ``` typeScript import {EventEmitter} from 'angular2/core'; import 'rxjs/add/operator/debounceTime.js'; export class ScrollService { scrolled = new EventEmitter().debounceTime(1500); } ``` using service from another component ``` html <holder (scroll)="scrollService.scrolled.next()"></holder> ``` If I replace `debounceTime` by `throttleTime` events are fired fine but I need debounce behavior not the throttle one. I think…

### CASE-3567 · Feature Request: debounce in ngModelOptions
- **Principles**: P-F5, P-H3 · **Env**: angular
- **Signals**: 👍45 💬15 · open · labels: feature/effort2: days/state: Needs Design/freq2: medium/area: forms
- **Excerpt**: [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ x] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior No support for `debounce` in `ngModelOptions` ## Expected behavior Angular doesn't yet support `debounce` `ngModelOption` on inputs. I would like to know what is the logic behind not implementing the same with…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3551 · NgForOf incorrect behaviour with array of strings and inputs
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: angular
- **Signals**: 👍1 💬15 · closed · labels: area: common/area: core/area: forms/core: ng-template and *microsyntax/core: change detection
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? common ### Is this a regression? No ### Description The `ngForOf` directive has strange behaviour when rendering inputs linked to an array of strings. At first glance it looks like it makes your cursor jump around, but putting breakpoints on lines `9598` (`refreshView(tView, lView, templateFn, context);`) and `9602` (`rendererFactory.end();`) of `@user/core/fesm2015/core.mjs`, you can see that Angular is actually generating a new input, causing the list to grow and other inputs to move, and then deleting another input. This does not seem…

### CASE-3588 · @user() doesn't work correctly
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: WRONG: [link] Right: [link] In this example, component 'C' cannot reach its ancestor 'A'. Our actual use-case is this: ``` html <ion-nav-viewport> <ion-nav-dynamic-component *for="component of navStack" [component]="component"> <ion-view> <ion-toolbar> ``` `ion-toolbar` needs to inject the ancestor `ion-nav-viewport` to check if the nav stack has length greater than 0. If so, it will show the back button, and when back is clicked pop the nav stack.

### CASE-3598 · Angular DevTools causes Chrome to lock up when using Okta SSO
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, windows, angular
- **Signals**: 👍13 💬14 · closed · labels: area: devtools
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? Yes ### Description When logging into sites using Okta SSO with Angular DevTools extension enabled, Chrome will lock up indefinitely. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw ```true I did not see an error or exception. The Okta login freezes on "One moment please..." screen and all Chrome windows/tabs become unresponsive. ``` ### Please provide the environment you discovered this bug in (run `ng version`) ```true…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-3562 · HttpClient sends the wrong Accept header
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · open · labels: type: bug/fix/breaking changes/freq1: low/area: common/http/state: confirmed
- **Excerpt**: # 🐞 bug report ### Affected Package @user/common/http ### Is this a regression? Not sure ### Description The `get<T>` method on an HttpClient will send the following Accept header with a request if you do not override it: `Accept: application/json, text/plain, */*` This suggests that it is OK if the server responds with text/plain (i.e., not JSON). However, if the server responds with something similar to this (truncated), you will get an error. <pre><code>Content-Type: text/plain; charset=utf-8 59fb693e0302a519e0974379 </pre></code> Clearly text/plain is not a valid response type, and the…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3570 · [animations] Missing Support for SVG-related Animations
- **Principles**: P-A5, P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍28 💬15 · closed · labels: feature/area: animations/freq1: low/P4/feature: under consideration
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** The [Angular documentation]([link]) states: > Since Angular's animation support builds on top of Web Animations, you can animate any property that the browser considers animatable. This includes positions, sizes, transforms, colors, borders, and many others. The W3C maintains a list of animatable…

## layout-perf — Layout Performance 布局性能 · principles: P-H2, P-H3

### CASE-3587 · Implement element size/position/visible event or a general read/write queue again
- **Principles**: P-H2, P-H3 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: feature/effort3: weeks
- **Excerpt**: ## Purpose A component should be able to read its size and react to it. This is hard because we have to wait until DOM is fully rendered before causing layout and reading its position. (Additionally the browser does not have a resize event on elements) ## Mental Model A component can register a `size` host event which the framework will call: 1. On initial render of the component to supply the initial size information. 2. When component size changes. Component may change size due to: 1. Window resize 2. Changes to DOM rendering (ie text gets longer cause reflow.) ## Algorithm 1. dirty check…

