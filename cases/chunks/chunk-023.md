# Case Chunk 023 — Round 23

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3201 · Form statusChanges with async validators doesn't leave PENDING state
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍41 💬50 · closed · labels: breaking changes/area: forms/state: has PR/state: confirmed/forms: validators
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue is caused by package @user/forms ### Is this a regression? <!-- Did this behavior use to work in the previous…

### CASE-3205 · formControlName could not be used with component transclusion
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍57 💬48 · open · labels: feature/state: Needs Design/freq2: medium/area: forms/feature: under consideration
- **Excerpt**: ``` [x] bug report => search github for a similar issue or PR before submitting ``` Version: 2.4.1 A component with selector parent-component has this: ``` <form [formGroup]="myFormGroup"> <ng-content></ng-content> </div> ``` And it is inserted in another template with: ``` <parent-component> <input formControlName="myControl"> </parent-component> ``` Angular says the control is used without a form.

### CASE-3207 · How to use select/option/NgFor on an array of objects?
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍0 💬47 · closed · labels: feature/effort2: days
- **Excerpt**: I'm having trouble creating a select in Angular2 that is backed by an array of Objects instead of strings. I knew how to do it in AngularJS using ngOptions, but it doesn't seem to work in Angular2 (I'm using alpha 42). In the sample below, I have five selects, but only three of them work. 1. 'Select String' is a simple string-based select, and it works fine. 2. 'Select Object via 2-way binding' was my attempt to use 2-way binding. Unfortunately, it fails in two ways - when the page loads, the select shows the wrong value (foo instead of bar), and when I select an option in the list, the value…

### CASE-3208 · Bug: setting `[disabled]` attribute no longer works with `formControlName`
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍21 💬46 · open · labels: regression/workaround2: non-obvious/area: forms/state: confirmed/forms: directives
- **Excerpt**: ### Command other ### Is this a regression? - [X] Yes, this behavior used to work in the previous version ### The previous version in which this bug was not present was Angular 14 ### Description When upgrading from Angular 14 to Angular 15 the [Disabled] directive of form controls stopped working. Is this a bug or did something change? I'm using version 15.0.2 ### Minimal Reproduction <button type="button" id="btnAddPeopleEditor" class="btn btn-success btn-sm" (click)="addPeople(1)" [disabled]="disabledEditEditor || (habilitarControle(isReadOnly) == 'true')"> Add </button> ### Exception or…

### CASE-3210 · Textarea element in form when binding model has initial state as dirty in IE
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍18 💬45 · closed · labels: type: bug/fix/freq1: low/area: forms/state: confirmed/P4
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Textarea element in form when binding model has initial state as dirty in IE **Expected behavior** Textarea element in form when binding model has initial state as pristine in IE **Minimal reproduction of the problem with instructions** Using ng-form with textarea element and bind model on that textarea…

### CASE-3211 · state of the checkbox not getting updated even after its ng-model value is updated
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍22 💬45 · open · labels: type: bug/fix/workaround1: obvious/freq2: medium/area: forms/state: confirmed
- **Excerpt**: - **I'm submitting a bug for state of the checkbox not getting updated even after its ng-model value is updated** - [ ] bug report **Current behavior** If you try and update the ngModel of a checkbox in say ngModelChange method, the ngModel value is updated but the checkbox still remains in previous state. **Expected/desired behavior** The state of checkbox should change as ngModel value changes. - **What is the motivation / use case for changing the behavior?** I am trying to implement "select all" checkbox through angular 2. I have a list of checkboxes and one select all checkbox. And in my…

### CASE-3212 · Signal Queries are populated before the input have been set on the components
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍15 💬44 · open · labels: area: core/area: forms/state: needs more investigation/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? Don't known / other ### Is this a regression? Yes ### Description Just updated to Angular v19 and started to experience an error. Created an example with as minimal code as possible. Unfortunately it doesn't make too much sense without additional context, but it is what it is. So the setup is the following: - We have a directive that has a required input (`ModelDirective`) - We have a component that queries a `ModelDirective` and uses its required input (`FormFieldComponent`) - We also need to turn that input signal into an rxjs…

### CASE-3216 · Allow host binding to feed inputs to host directives
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍144 💬43 · open · labels: area: core/core: host directives
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description If a directive (let's named it `ReusableDirective`) exposes a required input (`foo`), and is used as a host directive by another directive (`ComposedDirective`), then the compiler forces the composed directive to expose the required input. This is problematic when the whole point of the composed directive is precisely to provide a default or computed value for the required input. For example: ```ts @user({ selector: '[app-reusable]', standalone: true, }) class ReusableDirective { @user({…

### CASE-3218 · ContentChildren doesn't get children created with NgTemplateOutlet
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍141 💬43 · closed · labels: area: core/core: queries/type: use-case/P3
- **Excerpt**: Original title: *ViewChildren doesn't get children created with NgTemplateOutlet* **Please see comments below...** **I'm submitting a ...** ``` [x] bug report ``` **Current behavior** When you use ngTemplateOutlet to render a template passing by input property ViewChildren don't get or don't find in the redered elements. **Expected behavior** I think ViewChildren should get the elements rendered by ngTemplateOutlet. **Minimal reproduction of the problem with instructions** In this [plunkr]([link]), on app.ts file, you can see a `Child` component and a `Parent` component, Parent component has…

### CASE-3219 · Router 3.2.0 - canDeactivate runs only once
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍12 💬43 · closed · labels: type: bug/fix/area: router
- **Excerpt**: let's say you have a confirmation dialog on canDeactivate. if user refuses to leave a form (clicks No), the dialog closes (promise is resolved to false). now, user does the same thing again but canDeactivate doesn't fire anymore. This doesn't happen on 3.1.0.

### CASE-3221 · formGroup disable()/enable() does not work right after init
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍65 💬42 · closed · labels: type: bug/fix/freq2: medium/area: forms/state: has PR/state: confirmed
- **Excerpt**: ## I'm submitting a... <pre><code> [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Current behavior I you create a `formGroup` using `formBuilder.group()` and call` formGroup.disable()` or `formGroup.enable()` right after initialization then it doesn't work. If you call it using `button` or `setTimeout()` then it works. ## Expected behavior Would be nice to be able to disable/enable form right after creation. ## Minimal reproduction of the problem with instructions View: [link] Edit: [link] ## Environment <pre><code>Angular version:…

### CASE-3223 · Can't bind to 'formGroup' since it isn't a known property of 'form'
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬41 · closed
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report [ ] feature request [ ] support request ``` **Current behavior** Simply using the `[formGroup]` directive when everything has been setup properly results in the error above. **Expected behavior** The `formGroup` was one of the most basic directives to use when working with Reactive Forms. It tied a form element to the definition of the form (residing in a component). I expect no error. I've used `[formGroup]` since 2.0.0-RC5 (I think) and [the documentation]([link]) still says it should work like this, but it doesn't. **Minimal reproduction of the…

### CASE-3224 · There is no FormControl instance attached to form control element with name: xxx
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍47 💬41 · open · labels: type: bug/fix/freq2: medium/area: forms/state: confirmed/P3
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> When using ReactiveForms and we override old form group with the new one (using for example `this.form = new FormGroup(...)`) an error occurs (the error is…

### CASE-3229 · Angular's input validation should align with HTML5 validation! (Currently it does not!)
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍63 💬40 · closed · labels: feature/freq2: medium/area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [x] feature request [ ] support request ``` **Current behavior** <!-- Describe how the bug manifests. --> Suppose we have such an input: `<input #nativeControl #ngControl="ngModel" type="number" min="30">` Now if we enter 25 in that box, the `ngControl.valid` property will be `true`, while `nativeControl.validity.valid` will be `false` and `nativeControl.validity.rangeUnderflow` will be `true`. Moreover, if we enter invalid characters (e.g. only dashes) in such a field, `ngControl.valid` property will be `true`. At the same…

### CASE-3232 · extended diagnostic for non-nullable optional is wrong
- **Principles**: P-G4, P-E3 · **Env**: opera, angular
- **Signals**: 👍27 💬39 · closed · labels: area: compiler/P3/bug/compiler: extended diagnostics
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? No ### Description Having the case below produces the warning for optional chain operation. Because of `!` it will always return a boolean to the input. Relates to the new feature [link]][ref] [link]][ref] Also can we have a `angularCompilerOptions` to disable this warnings? First case: ```ts optionalArrayElement: {a: 'value'}[] = []; ``` ```html <button [disabled]="!optionalArrayElement[0]?.a"></button> ``` Second case: ```ts enum MapKeys { A, B } optionalMapElement: {[key: string]: {a: string}} =…

### CASE-3233 · forms: update required validator when input is autofilled
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍57 💬39 · open · labels: type: bug/fix/area: forms/forms: validators/forms: change detection/P5
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🚀 feature request ### Relevant Package <!-- Can you pin-point one or more @user/* packages the are relevant for this feature request? --> <!-- ✍️edit: --> This feature request is for @user/forms ### Description The `RequiredValidator` does not update its…

### CASE-3237 · NgModel works incorrectly when using onPush ChangeDetection strategy
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍79 💬39 · closed · labels: type: bug/fix/freq2: medium/area: forms/state: confirmed/forms: ngModel
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report - related issue [link]][ref], but it's about testing. ``` **Current behavior** I have two components: the first one is a simple child component with some input and basic support of `[ngModel]` directive via `ControlValueAccesor` interface. The second one is a parent component has `onPush` change detection strategy and populates a value into child component via `[ngModel]` directive (right after that it's marked for changes via `ChangeDetectorRef` class). When `[ngModel]` is updated child component still displays an old value in the template while…

### CASE-3239 · Getting "control.registerOnChange is not a function" after changing form
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍8 💬38 · closed · labels: type: bug/fix/freq3: high/area: forms/state: confirmed/P3
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> After patching a form of type `FormArray` (`form.patchValue(myArray);`) with `FormGroup` items, `[formGroup]='form'` in my html throws `control.registerOnChange is not a function`. I patch it when I initialize my app and everything works fine but when I change…

### CASE-3246 · HostBinding can't bind to host input property other than `class.`, `attr.` and `style.`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬35 · closed · labels: area: core
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x ] bug report ``` **Current behavior** When binding to a custom input property `acproperty` on the host component using `@user()` I get an error: > Can't bind to 'acproperty' since it isn't a known property of 'a-comp' **Expected behavior** I expect `@user()` decorator to bind to any property on the host component, not just the ones with `class.`, `attr.` and `style.` **Minimal reproduction of the problem with instructions** [Here is the…

### CASE-3253 · @user can select host component as well
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍15 💬34 · closed · labels: type: bug/fix/freq1: low/area: core
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x ] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** `@user` will select the host component if the component selector matches it. ``` <foo the-root> <foo></foo> <foo></foo> <foo></foo> </foo> ``` And for `the-root` ``` @user(FooComponent) foos; assert(foos.length === 4); ``` **Expected/desired behavior** The `foo` host component should not be selected. ``` assert(foos.length === 3); ``` **Reproduction of the…

### CASE-3254 · click event triggers before ng-model changes the value.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍6 💬35 · closed · labels: type: bug/fix/effort1: hours/area: forms
- **Excerpt**: I am doing something like this. `<input [(ng-model)]="item.completed" (click)="completed(i)" type="checkbox">` What i want is the when checkbox is clicked it changes the value of _item.completed_ and then it fires the click event. But what happening is. click events get fired and then ng-model changes the value of item.completed.

### CASE-3258 · Support Input/Output spread
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍255 💬32 · open · labels: feature/area: core/core: inputs / outputs/feature: under consideration
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Currently each Input or Output must be explicitly declared in the component to allow its usage. **Expected behavior** <!-- Describe what the behavior would be…

### CASE-3263 · TypeError: this._validator is not a function
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍19 💬31 · closed · labels: type: bug/fix/freq1: low/area: core/area: forms
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/forms in combination with AOT compilation ### Is this a regression? Yes, the previous version in which this bug was not present was: Angular 8 without AOT. ### Description When binding dynamic validator values to an input via `[maxlength]="maxLength"` if AOT compilation is enabled the validation is attempted before the validator is created. An error is logged to the console: `ERROR TypeError: this._validator is not a function`. ## 🔬 Minimal Reproduction [link] ## 🔥 Exception or Error <pre><code> ERROR TypeError:…

### CASE-3266 · FormGroup reset() doesn't reset custom form control
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍32 💬31 · open · labels: type: bug/fix/freq1: low/area: forms/state: confirmed/forms: ControlValueAccessor
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> Custom form control does not reset when form is reset using the `FormGroup` `reset()` method. The value will clear, but control properties `dirty`,…

### CASE-3267 · Exception/Error In Resolvers (Router) can not be catched in the subscription to "activatedRoute.data"
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍28 💬31 · closed · labels: feature/freq3: high/area: router/feature: under consideration
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [X ] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> I'm using the Router with Resolver interfaces to get some data form a service (backend) before creating a component which will render the data (subscribing to…

### CASE-3269 · feat(forms) support creating arrays with the template-driven-forms approach (NgModelArray?)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍105 💬31 · open · labels: feature/workaround1: obvious/freq2: medium/area: forms/feature: under consideration
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report [x ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Currently we are able to do: ``` html <div ngModelGroup="assignee"> <div class="form-group"> <label>Name</label> <input type="text" class="form-control" name="name" ngModel/> </div> <div class="form-group"> <label>E-Mail</label> <input type="text" class="form-control" name="email" ngModel/> </div> </div> ``` `form.value` would then have an object "assignee" with…

### CASE-3275 · common/http: HttpParams encoding of form data
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍110 💬30 · closed · labels: type: bug/fix/freq1: low/area: common/http
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior <!-- Describe how the issue manifests. --> When using `HttpClient` to send form data using `HttpParams`, a plus sign (+) in a…

### CASE-3279 · regression: signal forms: input of type date isn't required anymore when cleared
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬29 · closed · labels: area: forms/forms: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? forms ### Is this a regression? Yes ### Description Since version 21.2.0, an input of type date in a signal form, when the user erases its day, month or year, keeps its value instead of becoming empty, and becomes invalid with a parse error. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide the exception or error you saw When populating the birth date field and then erasing one or even all of its components (day, month or year), I expect the value to become empty again (or better: null, like when a…

### CASE-3282 · sometime form .get return null
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍29 💬30 · closed · labels: type: bug/fix/regression/area: forms
- **Excerpt**: # 🐞 bug report sometime form .get return null. i have no idea why? for example in my code i just add `withholdingTax.items` in to form and i try to subscribe valueChanges but it said i try to access valueChanges of null value ![valueChangesOfNull1]([link]) ![valueChangesOfNull2]([link]) After i try to find a re-produce step to fix it i found that sometime `form.get` will return null. as you can see in next screenshot line 195 and 199 is same code (`console.log(this.form.get('withholdingTax.items'));` and not touch any controls in the form but result is different…

### CASE-3284 · HttpClient.post body param is not sent correctly when using 'application/x-www-form-urlencoded' content type request header
- **Principles**: P-G4, P-E3 · **Env**: angular
- **Signals**: 👍1 💬29 · closed · labels: area: common/http
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Current behavior <!-- Describe how the issue manifests. --> When sending http post request (using HttpClient) with body data (for example a json object), it looks that Angular send the json object as a "key" of another object. For example, when doing `this.httpClient.post('[link] JSON.stringify({username, password})`, if…

### CASE-3288 · feat(Forms) Expose FormControl errors to parent FormGroup
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍153 💬29 · open · labels: feature/state: Needs Design/freq3: high/area: forms/feature: under consideration
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report [x feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When there are errors in a form group, the formGroup.status is 'INVALID' but the formGroup.errors property is null. ex. ``` formGroup.controls.username.errors: {invalidEmail: true} formGroup.errors: null ``` **Expected/desired behavior** When the validity of a FormControl changes, have the parent FormGroup.errors merged with the errors from the controls. This is…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3202 · Router navigation with lazy loading modules.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍57 💬50 · closed · labels: type: bug/fix/freq3: high/area: router
- **Excerpt**: </code></pre> ## I'm submitting a ... [x] Bug report ## Current behavior Hi, we have a few lazy-loading modules and router's configured like: ``` { path: 'parent', component: Parent, children: [ { path: child1, loadChildren: 'pathToModule1' } { path: child2, loadChildren: 'pathToModule1' } ] } - child1 { path: '', component: Child1 } - child2 { path: '', component: Child2 } ``` So, when i'm on the Child1 a wanna navigate to child 2 with `this.router.navigate(['../child2'], {relativeTo: this.activatedRoute})` And we get **parent/child1/child2** But in cause of empty section added with lazy…

### CASE-3204 · Angular v5.0.0 is not part of the compilation output. Please check the other error messages for details.
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍45 💬49 · closed · labels: type: bug/fix/freq3: high/regression/area: core
- **Excerpt**: ![image]([link]) Angular v4.4.6 upgrade v5.0.0

### CASE-3228 · i18n: document how to lazy load locale data on bootstrap of application
- **Principles**: P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍3 💬40 · open · labels: feature/area: i18n/P3/feature: under consideration
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [x ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3230 · Significant slow down in JIT after upgrading to version 4
- **Principles**: P-A3, P-H1 · **Env**: bootstrap, angular, webpack
- **Signals**: 👍10 💬40 · closed · labels: type: bug/fix/freq4: critical/area: core
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Initial bootstrap time doubled (JIT mode) ### Angular Version 2: ![image]([link]) ### Angular Version 4: ![image]([link]) The `JitCompiler._compileComponents` takes a lot of time. internally looks like generating the source maps is heavy. **Please tell us about your environment:** OSX, webpack 2.2.1, ts…

### CASE-3245 · HTTP_INTERCEPTORS are reset when a lazy loaded module imports another module importing HttpClientModule
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬35 · closed · labels: area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <pre><code>[ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question</code></pre> ## Current behavior The…

### CASE-3251 · Provide a way to clean up the result of a `computed`
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍18 💬34 · open · labels: feature/area: core/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are relevant/related to the feature request? core ### Description Suppose I have some state `imageBlob: Signal<Blob>` and I want some derived state `imageBlobUrl: Signal<string>` using `URL.createBlobURL` (perhaps so I can display it in an `img` element). Naively, I could define `imageBlobUrl` as: ```typescript imageBlobUrl = computed(() => URL.createBlobURL(imageBlob())) ``` However, this would leak the object URLs. Where should I call `URL.revokeObjectURL`? *(`URL.createBlobURL`/`URL.revokeObjectURL` could, of course, be substituted for any resource that needs…

### CASE-3256 · Router: AoT compilation fails when using a function with loadChildren
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍15 💬33 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** In order to enable lazy loading with Webpack 1, a custom `NgModuleFactoryLoader` must be implemented to lazy load routes with `loadChildren`. I've implemented an example loader here. [link] The custom `load` function is being used here: [link] When running `ngc` over the provided repo, an error occurs: `…

### CASE-3261 · Injector is not extended by providers metadata in lazily-loaded component's module
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬31 · closed · labels: regression/area: core/core: di/P2
- **Excerpt**: Common usecase where you want to load component that depends on providers. You have: 1) Lazy loaded component 2) Module in the same file with providers and declaration of Lazy Loaded component [city-quiz.zip]([link]]/files/4230528/city-quiz.zip) 1. npm i 2. ng serve 3. click Start quiz 4. ERROR Error: Uncaught (in promise): NullInjectorError: R3InjectorError(AppModule)[BlackMagic -> BlackMagic -> BlackMagic]: Note: 1) BlackMagic is class provided in QuizCardModule. 2) QuizCardComponent is Lazy loaded component and depends (constructor DI) on BlackMagic 3) QuizCardComponent is lazy loaded in…

### CASE-3262 · Ivy preview report: Error: ASSERTION ERROR: Reached the max number of directives
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬31 · closed · labels: type: bug/fix/freq2: medium/regression/area: core/state: has PR
- **Excerpt**: Hi! Error when click on catalog item... Without Ivy all worked correctly. `Error: ASSERTION ERROR: Reached the max number of directives` ![image]([link]) ![image]([link]) `<app-store-catalog [baseUrl]="'catalog/'"></app-store-catalog>` ``` <div class="catalog"> <div *ngFor="let category of (categories$ | async)" [routerLink]="baseUrl + category.path" class="catalog-module"> <div class="catalog-header">{{category.name}}</div> <div class="catalog-body"> <div class="catalog-img"> <img [src]="category.image"> </div> </div> <div class="catalog-footer">{{category.description}}</div> </div> </div>…

### CASE-3273 · Lazy loading components does not load FormModule/ngModel unable to bind
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬30 · closed · labels: type: bug/fix/freq1: low/area: core/core: NgModule
- **Excerpt**: # 🐞 bug report ### Affected Package IVY/9/RC0 ### Is this a regression? no ### Description I have set up a lazy load for a component as follows in V9 RC0 ``` constructor(private cfr: ComponentFactoryResolver) {} ... @user('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef; ... const {DemoComponent} = await import('../demo/demo.component'); const componentRef = this.viewContainer.createComponent(this.cfr.resolveComponentFactory(DemoComponent)); ``` Which works and gets into the child view ``` <ng-container #viewContainer></ng-container> ``` But if i try and use any…

### CASE-3276 · canDeactivate called with null as component when lazy loading
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬30 · closed · labels: area: router
- **Excerpt**: **I'm submitting a ...** [X ] bug report => search github for a similar issue or PR before submitting **Current behavior** When trying to use a canDeactivate guard with a lazy loaded route, the component parameter is null This might be a regression of [ref] but I have not seen the provider problem **Expected behavior** I expect to be able to get a reference to the lazy loaded component **Minimal reproduction of the problem with instructions** [link] The StartComponent will be lazy loaded as route '' Click the link "Click Me!" to trigger a routing to another component, this also triggers the…

### CASE-3287 · Lazy loading modules with the Router with webpack 2 still not work
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍5 💬29 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** A webpack 2 project as described here: [link] A lazy loading configuration as described here: [link] When clicking an anchor which leads to an lazy loaded module I get this error: > EXCEPTION: Uncaught (in promise): Error: Cannot find module 'app/configuration/configuration.module'. > > Error: Uncaught…

### CASE-3294 · Project no longer compiles after upgrading from 21.2.2 to 21.2.3
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬27 · closed · labels: area: compiler/gemini-triaged
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler-cli ### Is this a regression? Yes ### Description After upgrading my project to version 21.2.3, the compilation fails with the following error. <img width="1103" height="59" alt="Image" src="[link] /> After a few minutes of debugging, I concluded it was caused by the K in this generic. <img width="989" height="159" alt="Image" src="[link] /> Here are two StackBlitz reproductions with the exact same code: 21.2.2 (working) [link] 21.2.3 (broken) [link] ### Please provide a link to a minimal reproduction of the bug [link] ###…

### CASE-3295 · Uncaught ReferenceError: beforeEach is not defined
- **Principles**: P-A3, P-H1 · **Env**: angular
- **Signals**: 👍0 💬27 · closed · labels: area: testing/needs reproduction
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description After updated Angular version 15 to 16.2 while application starting testing.mjs throws error. Uncaught ReferenceError: beforeEach is not defined ![image]([link]]/assets/46883926/ad8a6367-da6c-4740-a7c7-43ab0e13e906) ### Please provide a link to a minimal reproduction of the bug _No response_ ### Please provide the exception or error you saw ```true Uncaught ReferenceError: beforeEach is not defined ``` ### Please provide the environment you discovered this bug in (run `ng version`)…

### CASE-3299 · Service worker doesn't support seeking in videos
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬27 · open · labels: type: bug/fix/open for contributions/freq2: medium/workaround2: non-obvious/area: service-worker
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [x] Feature request (not sure, maybe this is more a feature request?) </code></pre> ## Current behavior If you `ng run app:build:production` and your pwa comes with a `<video>` element where you also utilize seeking (setting `currentTime` depending on…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3203 · bug(forms) Initial select option set to null not working on IE/Edge
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge
- **Signals**: 👍9 💬50 · closed · labels: type: bug/fix/freq3: high/area: forms
- **Excerpt**: **I'm submitting a ...** ``` [x ] bug report [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When setting the initial value of a `<select>` control to either null or undefined, the rendered `<select>` element displays the first `<option>`. **Expected/desired behavior** If the value of the Control is set to null, undefined or to a value not found in the list of options, the rendered element should displays an empty select. **Reproduction of the problem** Here is a plnkr:…

### CASE-3209 · Binding on input [type] is broken
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍101 💬46 · open · labels: feature/state: blocked/freq2: medium/area: forms/feature: under consideration
- **Excerpt**: **I'm submitting a ...** ``` [x] bug report => search github for a similar issue or PR before submitting ``` **Current behavior** Try to bind the `type` attribute of input: ```js // in Class inputType="number" // in html <input [type]="inputType" formControlName="integerB" /> ``` Initially, the value is presented as number when doing `form.value`: ```js {"integerB": 5} ``` Now, try to change the input's value. **Its type has changed to string:** ```js {"integerB": "5"} ``` while it seems the html attributes haven't changed: ```html // chrome dev console <input formcontrolname="integerB"…

### CASE-3222 · beta.1 ngModel/ngModelChange not working on select element in FireFox 43.0.4
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox 43, firefox, angular
- **Signals**: 👍9 💬42 · closed · labels: type: bug/fix/effort1: hours/area: forms
- **Excerpt**: I'm seeing an issue in `beta.1` that appears to be a regression from `beta.0`. `ngModel/ngModelChange` don't appear to work at all in Firefox, at least on selects. Here's a [plunkr demo]([link]). You'll notice if you change the script src's to beta.0, the selects work as expected. Is there a breaking change that I'm missing? I don't see anything about `ngModel/ngModelChange` in the [changelog]([link]]/blob/master/CHANGELOG.md[ref]-beta1-catamorphic-involution-2016-01-08). ``` import {Component} from 'angular2/core'; @user({ selector: 'my-app', template: ` <h1>ngModel/ngModelChange not working…

### CASE-3227 · Bug router angular v5.2.4+ with cordova (BrowserAnimationsModule bug)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: android, angular
- **Signals**: 👍21 💬40 · closed · labels: type: bug/fix/area: animations/freq2: medium/P4/needs: clarification
- **Excerpt**: This bug was introduced in version 5.2.4. The hardware back button (navigate back) breaks the page, sometimes crashing the application when changing routes. This bug doesn't happens in v5.2.3 and before. Obs: only happens if including cordova.js inside index.html Steps: **Install cordova clone project: [link] **Connect android device** npm install ng build cordova platform add android cordova run android **Navigate a little Press phone hardware backbutton**

### CASE-3236 · Large Angular App is very slow in IE11, runs fine in Chrome or Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, windows, angular
- **Signals**: 👍25 💬39 · closed · labels: type: bug/fix/area: performance/freq1: low/area: core/risk: low
- **Excerpt**: **Current behavior** App is very slow in IE11. The initial app load takes up to 40 seconds. **Expected behavior** We should have speed closer to Chrome or Firefox, not 2-3 times slower. **Minimal reproduction of the problem with instructions** <!-- I would not be able to share the project because it is build by the company I am working for **What is the motivation / use case for changing the behavior?** Production migration of the application **Please tell us about your environment:** <!-- Operating system, IDE, package manager, HTTP server, ... --> Windows 7, Webstorm, gulp build, no lazy…

### CASE-3250 · All Angular 2 apps broken in Internet Explorer 11 after beta.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: angular
- **Signals**: 👍3 💬35 · closed
- **Excerpt**: All Angular beta.1 - beta.6 applications crash in **Internet Explorer 11** Last working version was beta.0. Looks like they die in `TemplateCompiler`. Messages vary: - `SyntaxError: The use of a keyword for an identifier is invalid` - `SyntaxError: Expected ';'` StackTrace seems always the same: ``` SyntaxError: ... at evalExpression ([link]) at TemplateCompiler.prototype._createViewFactoryRuntime ([link]) ... ``` Try **_any of the sample applications**_ in the documentation including QuickStart. All of them are shimmed for IE11 Plunkers crash too. Try the [QuickStart]([link]) or [Template…

### CASE-3255 · Default @user/pwa install doesn't pass Chrome 89 offline support detection
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 89, chrome, chrome 93, angular
- **Signals**: 👍42 💬33 · closed · labels: type: bug/fix/area: service-worker/state: confirmed/P3
- **Excerpt**: # 🐞 bug report ### Affected Package @user/pwa ### Is this a regression? No, I think it's because of Chrome's update: [link] ### Description When creating an Angular app with PWA support, the default template doesn't pass Chrome's "offline support" detection anymore. So that apps created this way won't be installable in a near future (starting with Chrome 93) ## 🔬 Minimal Reproduction Just create the default template app: <pre><code> $ ng new template-angular $ cd template-angular $ ng add @user/pwa --project template-angular $ ng build --prod </code></pre> Code: [link] Hosted result: [link]…

### CASE-3257 · Angular 4.0.0 animations
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 56, edge, angular
- **Signals**: 👍3 💬32 · closed · labels: area: animations/regression
- **Excerpt**: [[link]]([link]) Angular version: 4.0.X Browser: [Chrome 56 | Edge ] The animations in Angular2 ![Angular2]([link]) [GIF]([link]) But there's something wrong after upgrade to Angular4 ![Angular4]([link]) [GIF]([link]) src / app / todolist / todolist.component.ts ``` @user({ selector: 'cs-todolist', templateUrl: './todolist.component.html', changeDetection: ChangeDetectionStrategy.OnPush, animations: [ trigger('shrinkOut', [ state('in', style({})), transition('* => void', [ style({ height: '*', opacity: 1 }), animate(1000, style({ height: 0, opacity: 0 })) ]), transition('void => *', [ style({…

### CASE-3259 · Custom elements that extends existing elements does not upgrade in template on Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, angular
- **Signals**: 👍27 💬32 · closed · labels: type: bug/fix/feature/freq1: low/area: core/state: confirmed
- **Excerpt**: I try to use a custom elements in my Angular 2 template, if my custom element extends an existing elements. It would not got upgraded. Please check my [plnkr]([link]) for detail. This problem is only on Chrome because it has native support for custom elements. Latest Firefox and Safari does not have any problem as custom-elements ployfills kicks in. My investigation show that it is related to DomRenderer.prototype.createElement function. If you want to create an custom elements that extends existing element, you need to call `var xFooButton = document.createElement('button', 'x-foo-button');`…

### CASE-3270 · CSP in chrome app with angular 2
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, angular
- **Signals**: 👍1 💬31 · closed · labels: type: bug/fix/effort2: days
- **Excerpt**: i have rewrite the example given on angular.io and after building the project and launch it as a chrome app i have some trouble with csp... here is my pubspec.yaml ``` yaml name: angula2_example version: 0.0.1 environment: sdk: '>=1.0.0 <2.0.0' dependencies: angular2: 2.0.0-beta.0 browser: ^0.10.0 chrome: 0.8.0 dart_to_js_script_rewriter: ^0.1.0 transformers: - angular2: entry_points: web/main.dart - dart_to_js_script_rewriter - chrome - $dart2js: csp: true ``` my manifest.json : ``` json { "name": "Angular2 example", "version": "1", "manifest_version": 2, "minimum_chrome_version": "31",…

### CASE-3271 · The service worker v.20.2.0 freezes the browsers, works correctly with v20.1.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 139
- **Signals**: 👍22 💬30 · closed · labels: area: service-worker/needs: clarification
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? service-worker ### Is this a regression? No ### Description The issue is quite simple, and also easy to reproduce: the new implementations on v20.2 added to the service worker cause abnormal behavior, blocking the site from loading, especially during a page refresh. How to reproduce: 1. ng new application-name 2. ng add @user/pwa 3. ng serve -c=production 4. Open browser (Chrome 139.0.7258.155 on my side) and hit the refresh button 5. The browser is loading infinitely ### Please provide a link to a minimal reproduction of the bug _No…

### CASE-3278 · Select field in Safari displays option but does not set value when default value is null
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, firefox
- **Signals**: 👍21 💬30 · closed · labels: type: bug/fix/freq2: medium/area: forms/state: confirmed/browser: safari
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** This happens with the Internet Explorer and older versions of Firefox (does happen in version 40, does not happen in version 50): When no default value (or explicitly null) is set for a select field's form control, the first option is displayed in the UI but not set as value in the corresponding…

### CASE-3281 · __ngContext__ magnifies native Chrome memory leaks
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: chrome, angular
- **Signals**: 👍31 💬29 · closed · labels: memory leak/area: core/P3
- **Excerpt**: # 🐞 bug report ### Affected Package > @user/[email] ### Is this a regression? No. ### Description Small memory leaks become large leaks when Angular monkey patches `__ngContext__` onto dom. For example, take this [issue]([link]). After typing into textareas, the issue leads to detached HTMLTextAreaElements because of the native undo stack. #### It is a small leak that has nothing to do with Angular. It is only a few KBs: ![image]([link]) #### But, with Angular components in the mix, those KBs become MBs: ![image]([link]) #### It looks like `__ngContext__`, retains almost _everything_, even…

### CASE-3292 · iOS 11.3 new service worker safari hangs on image upload
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: safari, ios 11, angular, webpack, typescript
- **Signals**: 👍12 💬28 · closed · labels: type: bug/fix/freq1: low/area: service-worker
- **Excerpt**: Build: Angular CLI: 1.7.3 Node: 8.1.4 OS: darwin x64 Angular: 5.2.9 ... animations, common, compiler, compiler-cli, core, forms ... http, language-service, platform-browser ... platform-browser-dynamic, router, service-worker @user/cdk: 5.2.4 @user/cli: 1.7.3 @user/flex-layout: 5.0.0-beta.14 @user/material: 5.2.4 @user/build-optimizer: 0.3.2 @user/core: 0.3.2 @user/schematics: 0.3.2 @user/json-schema: 1.2.0 @user/webpack: 1.10.2 @user/angular: 0.3.2 @user/package-update: 0.3.2 typescript: 2.7.2 webpack: 3.11.0 New Safari Experimental service worker is on by default and works fine as long as…

### CASE-3296 · @user/localize should not depend on @user/compiler
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍6 💬27 · closed · labels: refactoring/area: i18n/area: server
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? localize ### Is this a regression? No ### Description Currently `@user/localize` depends on `@user/compiler` [link]]/blob/main/packages/localize/src/utils/src/messages.ts#L8 `@user/complier` is a huge package that does not execute outside of `node.js`. For this reason, it is not possible to use it with edge functions. ### Please provide a link to a minimal reproduction of the bug [link]]/blob/main/packages/localize/src/utils/src/messages.ts#L8 ### Please provide the exception or error you saw ```true `@user/compiler` can not be loaded at…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3206 · Allow Custom CSS Variables in [ngStyle]
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍97 💬48 · closed · labels: feature/area: security
- **Excerpt**: This could be both a bug or a feature request … **Current behavior** When binding a custom CSS variable via `[style.--feat-image]=...'` or `[ngStyle]=“{‘--feat-image’: … }”` the property is ignored by angular and not bound. I assume there is a whitelist for certain (CSS) properties, which does not include possible CSS variables yet. **Expected/desired behavior** The value should be bound. If a whitelist of properties is needed, one fix could be to allow any property starting with --. More information about CSS variables here: [link] **Please tell us about your environment:** - **Angular…

### CASE-3225 · signals: TypeScript and nullability
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍157 💬40 · open · labels: area: core/cross-cutting: types/core: reactivity/cross-cutting: signals
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core, Don't known / other ### Is this a regression? No ### Description The current implementation of signals uses a function to access the value, and TypeScript has issues with type guards in that case: ```ts const count = signal(null as null | number); const total: number = count() !== null ? count() : 0; // Error: Type `number | null` is not assignable to type `number` ``` This can be workaround by storing the value in a temporary variable or with an explicit cast, but this could be a bit cumbersome, as I imagine the same would happen…

### CASE-3238 · Suggestion: Create an API on FormControl to focus the input
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: angular
- **Signals**: 👍283 💬38 · open · labels: feature/area: forms/feature: under consideration
- **Excerpt**: # 🚀 feature request ### Relevant Package This feature request is for @user/forms ### Description The FormControl class does not have a FOCUS method. ### Describe the solution you'd like Create an API on FormControl that would easily allow the input to be focused without having to resort to bringing in Renderer or ElementRef. ### Describe alternatives you've considered [link]][ref] [link]][ref] The best response for the Angular team is as follows: >We’re trying to keep our forms modules light and fast, and so it’s important to balance additions to the API with keeping the bundle size…

### CASE-3241 · ES6 template literal expressions not working past v9
- **Principles**: P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍1 💬36 · closed · labels: type: bug/fix/freq1: low/regression/state: has PR/area: compiler
- **Excerpt**: # 🐞 bug report ### Is this a regression? <!-- Did this behavior use to work in the previous version? --> <!-- ✍️--> Yes, the previous version in which this bug was not present was: ^8 ### Description <!-- ✍️--> Using a template literal expression used to work until Angular 9, for as long as the template lived in the TS source not in HTML (_obviously_). Since Angular 9 that does not work any longer in one scenario. I am mostly focusing on library builds here: **Working** - build library with Angular 9 Ivy & serve the Angular 9 application - build library with Angular 8 View Engine & serve the…

### CASE-3242 · Cannot bind template reference variables to ngModel in new forms in rc2
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬36 · closed · labels: area: forms
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report [x] feature request ``` **Current behavior** When using the new forms with rc2 binding a template reference variable to `ngModel` doesn't work as described in the [new form proposal]([link]). The error I'm getting is: ``` EXCEPTION: Error: Uncaught (in promise): Template parse errors: There is no directive with "exportAs" set to "ngModel" (" type="text" class="form-control" formControlName="email" [(ngModel)]="admin.email" [ERROR ->]#email="ngModel"> <div *ngIf="loginForm.hasError('required', 'email') && email.touched" c"):…

### CASE-3247 · Renderer2 and setting focus
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍11 💬35 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x ] feature request ``` I am using the now deprecated Renderer and trying to replace it with Renderer2. With the old Renderer I could set focus using: this.renderer.invokeElementMethod(this.editInput.nativeElement, 'focus'); But the new Renderer2 seems to have no way to set focus. Hence, I would like such a feature or (if such a capability exist) to have it documented.

### CASE-3248 · Suggestion: Create an API on FormControl to focus the input
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍73 💬35 · closed · labels: feature/area: forms
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Suggestion** Create an API on FormControl that would easily allow the input to be focused without having to resort to bringing in Renderer or ElementRef. **What is the motivation / use case for changing the behavior?**…

### CASE-3252 · ComponentFactoryResolver - No component factory found for "MyComponent"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬34 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [x ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** We used the DynamicComponentLoader in order to create components dynamically based on their Type. We also needed to provide specific list of Provider for our component. All this worked like a charm. We have a (list) of pagePanel components that have this template: ``` template: ` <div role="pagepanel"…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3213 · Add value change options to ControlValueAccessor writeValue and onChange
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍31 💬44 · open · labels: feature/freq2: medium/area: forms/feature: under consideration
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [x] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior A component that implements `ControlValueAccessor` and transforms values to stay in bounds cannot respect `{ emitEvent: false…

### CASE-3214 · No provider for AnimationEngine! is thrown after switch from 5.0.0-rc.1 to 5.0.0-rc.5
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬44 · closed · labels: regression/area: core
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior The error: ``` ERROR { Error: StaticInjectorError[AnimationEngine]: StaticInjectorError[AnimationEngine]: NullInjectorError: No provider for AnimationEngine! at _NullInjector.get…

### CASE-3220 · @user/animations needs Element.prototype.matches polyfill, not documented.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍11 💬42 · closed · labels: type: bug/fix/area: animations/freq2: medium/P4
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> ## Current behavior When using the dependency @user/animations in my project, the Application stops working in IE11. There are no specific…

### CASE-3231 · @user and @user annotations are not carried from subclasses
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍25 💬40 · closed · labels: type: bug/fix
- **Excerpt**: It would be nice if `@user` and `@user` annotations are carried from subclassed components. Currently this doesn't work with Transformers because it only looks at the local file. I'm guessing we may not need to parse the Subclass directly, but might be able to look up the information that is saved from it's parent.

### CASE-3234 · router-outlet is appending rather than replacing when using BrowserAnimationsModule
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬39 · closed · labels: type: bug/fix/area: animations/freq1: low/area: router/state: confirmed
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3235 · ɵDomAnimationEngine and ɵNoopAnimationEngine module missing in animations 4.2.1
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍27 💬39 · closed
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** After upgrading `platform-browser` and `animations` to 4.2.1 I get the following error ``` WARNING in ./~/@user/platform-browser/@user/platform-browser/animations.es5.js 329:2-21 "export…

### CASE-3240 · Child routes disappear immediately instead of playing :leave animation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍26 💬37 · closed · labels: type: bug/fix/area: animations/freq2: medium/P3
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Child routes disappear immediately without playing animations when the parent route changes. **Expected behavior** Either all child routes play their :leave animation, or child routes don't get…

### CASE-3249 · Angular 2 RC 4 New Animations not supported in Directives
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍71 💬35 · closed · labels: feature/area: animations/effort2: days/freq3: high/workaround2: non-obvious
- **Excerpt**: Hi, It seems that in current release we can add animations to components only and cannot define them as directives. I mean: **the below works** ``` @user({ selector: "animate-demo", animations: [ trigger('openClose', [ state('closed, void', style({ height: "0px" })), state('open', style({ height: "*" })), transition("* => *", animate(200)) ]) ] }) ``` **Whereas the below doesn't work:** ``` @user({ selector: "animate-demo", animations: [ trigger('openClose', [ state('closed, void', style({ height: "0px" })), state('open', style({ height: "*" })), transition("* => *", animate(200)) ]) ] }) ```…

### CASE-3264 · [Animations, Angular 5] inner element is not animated
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍20 💬31 · closed · labels: type: bug/fix/area: animations/freq3: high/P4
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3265 · [Animation] In Angular4, leave (* -> void) animation doesn't fire when element is destroyed by ngIf value change
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍14 💬31 · closed · labels: area: animations
- **Excerpt**: <!-- IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION WE MIGHT CLOSE YOUR ISSUE WITHOUT INVESTIGATING --> **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** <!-- Describe how the bug manifests. --> I have a component with an ngIf. When the ngIf is set to true, the enter animation (void -> \*\) fires. When the ngIf is set to false, the leave animation…

### CASE-3272 · IVY: animation performance issues, on :enter trigger
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, angular
- **Signals**: 👍0 💬30 · closed · labels: area: performance/needs reproduction
- **Excerpt**: # 🐞 bug report ### Affected Package probably one of these `@user/core` `@user/animations` `@user/common` ### Is this a regression? Yes it is much more fluent with less FPS drops during animations in version 8. ### Description When new part of template is added using `ngIf` animation framerates drops much more drastically than in previous version of *Angular*. This happens also when animating route, so it means any new template, component is added using `ViewContainerRef`. Here are measured results, same page same operation, top is v9.0.0-rc.11 IVY, bottom v8.2.0: ![problem]([link]) ## 🔬…

### CASE-3274 · `animateChild` does not work when used in router transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬30 · closed · labels: type: bug/fix/area: animations/freq3: high/state: needs more investigation/P3
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 🐞 bug report ### Affected Package <!-- Can you pin-point one or more @user/* packages as the source of the bug? --> <!-- ✍️edit: --> The issue is caused by package @user/animations ### Is this a regression? <!-- Did this behavior use to work in the…

### CASE-3277 · Animations causing problems with SSR: document is not defined
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍19 💬30 · closed · labels: type: bug/fix/area: animations/area: server
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [x] bug report => search github for a similar issue or PR before submitting [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** When i use animations in HTML, SSR crashes. I have my animation defined and used in html like this ```html <div [@user]></div> ``` I have browser module which imports `import {BrowserAnimationsModule} from '@user/platform-browser/animations';` I received error on server Error: Found the synthetic…

### CASE-3283 · Possibility to have a loop animation, using triggers. [Feature Request]
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍22 💬29 · closed · labels: feature/area: animations/freq1: low/P4/feature: under consideration
- **Excerpt**: Hello i`m trying to make a loop animation with full control using triggers, right now theres no easy way to make it, only a few possibles work arounds. ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [X] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question…

### CASE-3285 · BrowserAnimationsModule prevents Angular to recover from an error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍18 💬29 · closed · labels: area: animations/freq3: high
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [X] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior A component throws a runtime error when the model and the template are not compatible. For example: <div>{{foo[barr]}}</div>…

### CASE-3286 · can't get animation working with ng4 and lazy loading
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: angular
- **Signals**: 👍2 💬29 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ x] bug report => search github for a similar issue or PR before submitting (or maybe I missed something :/ ) [ ] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** Animation working in main module but not in lazy loaded module. **Expected behavior** work everywhere if I load animation module in a shared module. **Minimal reproduction of the problem with instructions** Can't get Angular4 to work with lazy loading and animation. So…

### CASE-3291 · Angular Service worker incorrectly intercepting http redirects (302)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: angular
- **Signals**: 👍0 💬28 · closed · labels: type: bug/fix/needs reproduction/area: service-worker
- **Excerpt**: Hello, i work on with angular pwa project with spring-boot back end. In my project, i am using Angular and Spring boot. My service worker is generating by Angular when i build my project. I use external service (auth2) and my back-end redirecting to login page when session times out. This works perfectly fine without the service worker enabled, however with the service worker this fails. To my observation, the mode of the Request is changed from navigate to cors. i see that in request headers Without SW: Sec-Fetch-Dest: document Sec-Fetch-Mode: navigate With SW: Sec-Fetch-Dest: empty…

### CASE-3293 · Generics do not correctly infer in template pipe usage
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍43 💬28 · closed · labels: type: bug/fix/freq3: high/area: language-service/P3
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> </code></pre> ## Current behavior Please take a look at the minimal example below: ```typescript @user({name: 'map'}) export class MapPipe implements PipeTransform { transform<T, R>(value: T[], func: (value: T) => R): R[] { return value ? value.map(func) : []; } } // the component interface InData { foo: string; } interface OutData { bar: string; } @user({ selector: 'app-test', template: ` <span *ngFor="let item of…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3215 · IE 11 Memory Leaking on Browser Reload
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍14 💬44 · closed · labels: type: bug/fix/area: performance/freq2: medium/memory leak/area: core
- **Excerpt**: <!-- PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION. ISSUES MISSING IMPORTANT INFORMATION MIGHT BE CLOSED WITHOUT INVESTIGATION. --> ## I'm submitting a ... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search github for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see…

### CASE-3243 · Proposal: declaring rate-limited event handlers (debounce, throttle)
- **Principles**: P-F5, P-H3 · **Env**: typescript
- **Signals**: 👍12 💬36 · closed · labels: feature/effort1: hours/state: Needs Design/hotlist: components team/area: core
- **Excerpt**: It's very common to need to rate-limit DOM events that fire too quickly, such as `scroll` or `mousemove` for performance reasons. In the ES5 world, it is very easy to create this kind of handler. For example, if you were using underscore: ``` html <widget (movemove)="checkHoverPosition($event)"> ``` ``` js Widget.prototype.checkHoverPosition = _.debounce(function(event) { // ... }, 300); ``` However, in ES6 / TypeScript, the `class` syntax does not have a way to define a method based on the output of some function like this. You can still use the ES5 syntax, but that totally kills the hip…

### CASE-3297 · tick and fakeAsync doesn't work well in Angular 13 with rxjs 7 debounceTime
- **Principles**: P-F5, P-H3 · **Env**: opera, angular
- **Signals**: 👍48 💬27 · closed · labels: area: testing/area: zones/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? core ### Is this a regression? Yes ### Description I upgraded to angular 13 and then tried upgrading rxjs to 7. The problem is it seems rxjs has changed the way the debounceTime operator works: [link] Because of this a lot of my tests now fail because the fakeasync scope and debounceTime don't work well when the debounceTime is set up outside of a fakeAsync scope. If you run the test in this file: [link] the first test passes and the second fails. ### Please provide a link to a minimal reproduction of the bug [link] ### Please provide…

### CASE-3300 · Unit testing component with debounceTime rxjs operator is way too hard
- **Principles**: P-F5, P-H3 · **Env**: opera
- **Signals**: 👍9 💬27 · closed · labels: feature/area: testing
- **Excerpt**: ## I'm submitting a... <!-- Check one of the following options with "x" --> <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [ ] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Performance issue [x] Feature request [x] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question [ ] Other... Please describe: </code></pre> ``` it('should autocomplete schools', fakeAsync(() => { spectator.click('eb-select2');…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3217 · Angular 5 - "Error: Cannot activate an already activated outlet" when named outlets are used in children
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: angular
- **Signals**: 👍35 💬43 · closed · labels: type: bug/fix/freq2: medium/area: router/state: confirmed/router: aux routes
- **Excerpt**: ## I'm submitting a... <pre><code> [ ] Regression (a behavior that used to work and stopped working in a new release) [x] Bug report <!-- Please search GitHub for a similar issue or PR before submitting --> [ ] Feature request [ ] Documentation issue or request [ ] Support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question </code></pre> ## Current behavior As stated [here on stackoverflow]([link]) when you have a routing configuration like: ``` export const routes = [ { path: '', component: IndexComponent, children: [ { path: 'home',…

### CASE-3226 · Ivy: Render HTML from String / dynamic rendering
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: angular
- **Signals**: 👍52 💬40 · open · labels: feature/area: core/area: compiler/feature: under consideration/compiler: jit
- **Excerpt**: ### Which @user/* package(s) are relevant/releated to the feature request? compiler, core, platform-browser-dynamic, platform-browser ### Description As far as I know the old aproach was to inject the JITCompiler and use it to render your HTML in an anonymous component. This worked so far. I use editable HTML in DB which uses key features as substituting variables and directives like *ngIf or *ngSwitch. Which does not work anymore in production mode (Angular 12.x) I browsed stackoverflow and other forums to find an workarround for this and these are not working anymore (like loading the…

### CASE-3280 · Error: Argument at index 2 of UMD factory call is not a `require` call with a single string argument
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: opera, angular
- **Signals**: 👍4 💬29 · closed · labels: type: bug/fix/regression/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler, upgrade ### Is this a regression? Yes ### Description Hi Team, After upgrade our existing project from angular 12 to 13, It starting throwing error and stucked at generating browser application bundle phase. Please find the error below: ``` Error: Argument at index 2 of UMD factory call is not a `require` call with a single string argument: factory(require('@user/core'),require('@user/common'),exports, require('@user/core'), require('perfect-scrollbar'), require('rxjs'), require('rxjs/operators'), require('@user/common')) at…

### CASE-3290 · False positive warnings about not animatable properties
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬28 · closed · labels: area: animations/P3
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? animations ### Is this a regression? No ### Description There was already a fix for this warnings on [ref] but it didn't fix all the false positives. For example with this code I get warnings. ``` export const collapse: AnimationTriggerMetadata = trigger('collapseAnimation', [ state('expanded', style({ height: '*', visibility: 'visible' })), state('hidden', style({ height: 0, overflow: 'hidden', borderTopWidth: '0', visibility: 'hidden' })), transition('expanded => hidden', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3244 · Impacting issues preventing to use Angular client Hydration in production
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍6 💬35 · closed · labels: needs reproduction/area: core/core: hydration
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? platform-browser ### Is this a regression? Yes ### Description Hello Angular team, in the past weeks i spent quite some time in preparing our enterprise application being ready to make use of Angular Client Hydration feature, which is a real great effort in improving SSR-based application performance. But unfortunately, I encountered several issues, I partially could manage to overcome, but some of them are so serious, that finally we decided, to not continue with enabling hydration in a production environment! First, I've to say, that…

### CASE-3298 · platform-server errors with ivy-ngcc - UMD module - Angular 9.0.0-rc.7
- **Principles**: P-F4 · **Env**: angular
- **Signals**: 👍0 💬27 · closed · labels: type: bug/fix/freq2: medium/regression/state: has PR
- **Excerpt**: # 🐞 bug report ### Affected Package The issue is caused by package @user/platform-server ### Is this a regression? Yes, the previous version in which this bug was not present was: @user/[email]-rc.6 ### Description When trying to compile my application with Ivy, I get errors on ivy ngcc for platform-server when compiling for umd bundles (for SSR) ## 🔬 Minimal Reproduction Update any project to latest version of Angular (9.0.0-rc.7). Add following config to `angular.json`: ``` "server": { "builder": "@user/build-angular:server", "options": { "outputPath": "dist-server", "main":…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3260 · Ugly Overlapping Texts
- **Principles**: P-A5 · **Env**: angular
- **Signals**: 👍0 💬31 · closed · labels: open for contributions/P3
- **Excerpt**: <!--🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅 Oh hi there! 😄 To expedite issue processing please search open and closed issues before submitting a new one. Existing issues often contain information about workarounds, resolution, or progress updates. 🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅🔅--> # 📚 Docs Bug Report ### Description Your documentation in the actual website, particularly in `/docs`, the texts are overlapping. This will be a great issue for you because `Angular` is, as we all know, a front-end framework. ## 🔬 Minimal Reproduction ###…

### CASE-3289 · Since 18.1.0 ngtypecheck refrence is present in compiled ts files
- **Principles**: P-A5 · **Env**: angular, react
- **Signals**: 👍14 💬28 · closed · labels: state: has PR/area: compiler
- **Excerpt**: ### Which @user/* package(s) are the source of the bug? compiler-cli ### Is this a regression? Yes ### Description Hi, Today we are using Angular 18 along with cli & compiler in versions: 18.0.7 & 18.0.6 and no issues. We have a project with several libraries and build is made without issues. We updated to latest versions 18.1.0 and now builds of libraries react diferently, we have in some of them ngTypeCheck on top of compiled files, for example here in a public-api.dt.ts: ` /// <reference path="public-api.ngtypecheck.d.ts" /> ` This add made other builds depending on this library to fail as…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-3268 · Ability to check for previous route with router.events.subscribe
- **Principles**: P-D4, P-F1, P-F5 · **Env**: unspecified
- **Signals**: 👍1 💬31 · closed
- **Excerpt**: **I'm submitting a ...** (check one with "x") ``` [ ] bug report => search github for a similar issue or PR before submitting [X] feature request [ ] support request => Please do not submit support request here, instead see [link]]/blob/master/CONTRIBUTING.md#question ``` **Current behavior** The NavigationStart event object only returns the target url. **Expected/desired behavior** Have the event also return the previous url **What is the motivation / use case for changing the behavior?** I am having to call window.scrollTo(0,0) on every route call so that the new route doesn't load at a…

