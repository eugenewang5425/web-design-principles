# Case Chunk 030 — Round 30

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3901 · useContext form population causing Zod form validation to fail
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: downstream
- **Excerpt**: ### Describe the bug Not sure where to post this but it seems to be an issue with ```useContext```, so I am going to make a bug report here first. I am using ```useContext``` with a solidjs storage primitive ```createLocalStorage()```. I am then creating a store ```Provider``` for a form, and then using the provider's values to pre-populate a form text input. I am also using Zod for the validation, which checks whether the form input is empty or not. The strange thing is when the field is populated and the submit button is pressed a validation error is thrown stating that the field cannot be…

### CASE-3909 · The condition of <Show> runs another time unnecessarily when using the function form
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug It looks like the `when` condition of the `<Show>` component is run twice unnecessarily at initialisation when a function as passed as `children`. It is first run when creating the `condition` memo, but then it is run again to be passed as the parameter to the `children` func, instead of passing the `condition` directly to the `children` func. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Use a `<Show>` component (not `keyed`), with function passed as children. The `when` condition is immediately evaluated twice. ### Expected behavior…

### CASE-3912 · Textarea with static value-property does not set its value.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug When setting the value of a textarea with a static string, it does not set the property, while if you set the value while calling a function it does get set. ```tsx function Counter() { const [signal] = createSignal("dynamic"); return ( <> {/* Does not set value */} <textarea value="static" ref={(element) => { console.log("1 static:", element.value); queueMicrotask(() => console.log("2 static:", element.value)); }} /> {/* Sets value */} <textarea value={signal()} ref={(element) => { console.log("1 dynamic:", element.value); queueMicrotask(() => console.log("2 dynamic:",…

### CASE-3917 · <input value={undefined}> shows string "undefined"
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug This is a sequel to [ref], where the same issue occurred with `class`/`className`. ```jsx <input value={undefined}/> ``` compiles to ```js const _el$ = _tmpl$.cloneNode(true); _el$.value = undefined; return _el$; ``` Because of the infinite wisdom of the DOM `.value` interface, this causes the value to be set to the *string* `"undefined"`. 🙁 [Reported on Discord]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [Playground link]([link]) 2. Observe input value. ### Expected behavior I'm not sure there's a clear expectation…

### CASE-3924 · select value is not reflected if the list of options are loaded at a later time
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · open · labels: enhancement
- **Excerpt**: ### Describe the bug I am loading a list of select options from an API so the options get populated a bit after the element is rendered. The value of the select is already set but is not reflected after the list is loaded. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. create a <select> 2. set its value 3. use <For> to populate its options from an array 4. load the array of options using a timeout so that is populated after the render ### Expected behavior I expect the value of the select to be reflect the correct option regardless of when that option is…

### CASE-3934 · InputHTMLAttributes does not have all native input attributes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: typescript
- **Excerpt**: ### Describe the bug The [InputHTMLAttributes interface]([link]]/blob/main/packages/solid/h/jsx-runtime/src/jsx.d.ts#L787) does not have all of the attributes of the native `<input />` element. Specifically it doesn't handle the attributes that depend on the specified input `type`. I initially ran into this bug when using a Kobalte text field input with `type="search"` and adding the `incremental` attribute that is specific to `<input type="search">`. It errors because the solidjs InputHTMLAttributes type does not include incremental. ### Your Example Website or App [link] ### Steps to…

### CASE-3939 · Solid 1.6 mergeProps results in undefined entries
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Describe the bug Updated to Solid 1.6 and found that Solid Select now [breaks]([link]) when relying on default options. It seems `mergeProps` is the cause. For this code: ```jsx const createSelect = (props: CreateSelectProps) => { const config = mergeProps( { multiple: false, disabled: false, optionToValue: (option: Option): SingleValue => option, isOptionDisabled: (option: Option) => false, }, props ); ... ``` In 1.5, `config` would have the defaults for `isOptionDisabled` etc correctly defined. In 1.6 they are now all `undefined` resulting in breaking logic later. ``` CONFIG: Object {…

### CASE-3949 · `force` setState doesn't trigger update inside keyed `For`
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: Reproducible demo: [link] Try edit the inputs with initial value 'hello' and click the button. The input inside keyed `For` doesn't update as expected. ![ezgif-1-6f605588a634]([link])

### CASE-3964 · Events from inside web components with shadow root mode open have wrong target
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I started investigating this issue when I noticed that adding a [SUID]([link]) button to a page caused all [ninja-keys]([link]) hotkeys (including up/down arrows to select commands) to stop working while the ninja-keys menu is open. After stepping through the debugger, the reason is that ninja-keys is a web component and relies on keyboard events from within the menu having a target of the `ninja-keys` component instead of the actual text `input` element inside the menu. However, the SUID button uses solid `onKeyDown` and `onKeyUp`, causing these events to use solid's…

### CASE-3987 · Issues using ref with splitProps
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ```bash Uncaught (in promise) TypeError: Cannot set property ref of #<Object> which has only a getter at ref (Input.tsx?t=1636616602126:76) at assign (dev.js:216) at Object.fn (dev.js:343) at runComputation (dev.js:633) at updateComputation (dev.js:618) at createRenderEffect (dev.js:197) at spreadExpression (dev.js:343) at spread (dev.js:185) at Object.fn (dev.js:526) at runComputation (dev.js:633) ``` Unable to assign to `local.ref` for some reason!? Proxy object? ```bash return _$createComponent(Dynamic, _$mergeProps({ get component() { return tag(); } }, setAttribs() && attributes, {…

### CASE-3988 · Input element readonly attribute works strangely
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: Example: [link] In type definition we have two names: readonly and readOnly. readonly always fails to work. But readOnly works with true or null values (for removeAttribute). For example, disabled attribute works fine with boolean signal. For readonly need convert: readOnly={readonly() ? true : null}. When server side rendered readOnly={false} will return readonly="" attribute and it will always be readonly input. 1. Maybe there is an error in the definition that readOnly is a BooleanAttribute? 2. Why we need two attributes readonly and readOnly? Thanks.

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3902 · hydration crash with npm "Cannot read properties of null (reading 'nextSibling')"
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug SolidJS hydration seems to behave differently with npm and pnpm, leading to a crash with npm but not with pnpm. The bug was originally filed at [link] Any Zag component crashes during hydration but not when client-side rendered only via `render()`. Efforts to reproduce the issue yielded that running the repro with npm crashes while pnpm does not. ``` Uncaught (in promise) TypeError: Cannot read properties of null (reading 'nextSibling') at index.page.tsx:14:3 at Checkbox (index.page.tsx:20:34) at @user:10:42 at untrack (chunk-CGI4PW6R.js?v=14626c3e:447:12) at Object.fn…

### CASE-3908 · Hydration bug in v1.9.5
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the bug I was working on some SSR stuff for Tanstack Start for Solid and noticed our hydration logic worked for solidjs version 1.9.4 but didn't work in 1.9.5. This only affected the prod build and worked fine in dev. Either our logic is relying on something that changed or there is a bug here. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - git clone - pnpm i - pnpm build:all - cd e2e/solid-start/server-functions/ - downgrade solid in package.json - pnpm build - pnpm start - go to [link] - test clicking on the button ### Expected behavior Before…

### CASE-3911 · Hydration bug with `<Dynamic>`
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug I'm server rendering an application and hydrating it. When the hydration happens, I get the error `TypeError: e is not a function`; with the source maps, I found its root at `solid-js/web/dist/web.js:741:12`; see just below. One important note: full client side rendering works, and the received HTML blob is also valid. I.e. the `<Dynamic>` component is finely rendered on the server, finely rendered on the client in a `render()`, but fails to pick up the SSR-ed component in `hydrate()`. ```js 736 function getNextElement(template) { 737 let node, 738 key, 739 hydrating =…

### CASE-3914 · Hydration error for rendered Elements that aren't inserted in the DOM during server rendering
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug SolidJS produces hydration errors when resolving children that aren't attached to the DOM. Picture this: ```tsx const Component = (props) => { const resolvedChildren = children(() => props.children) return <Show when={false}>{resolvedChildren()}</Show> } ``` Here, the children resolve but aren't attached to the actual DOM and it throws a hydration error. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. pnpm install 2. pnpm dev 3. go to localhost:3000 4. see hydration error ### Expected behavior This shouldn't throw a hydation error. ###…

### CASE-3916 · data-hk attribute varies for lazy / async components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: downstream
- **Excerpt**: ### Describe the bug `data-hk` (usually) contains the same values for SSR-rendered pages which do not contain lazy or async components when rendered with renderToStringAsync. On pages which contain lazy or async components the IDs can vary greatly, usually by growing in size on each page refresh. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Clone the example repo and run `npm run dev` (unfortunately this does not run in Stackblitz) 2. View the page source when viewing `/` in your browser and refresh the view source page a bunch of times. Notice that the…

### CASE-3923 · Hydration error upon wrapper not rendering children (e.g. when wrapper returns `null`)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Rendering this with SSR: ```jsx function Page() { return ( <> <Head> <span>Hello</span> </Head> </> ); } function Head({ children }) { return null } ``` Leads to an hydration error: ``` renderPageClientSide.js?v=893d3cd7:200 Error: Hydration Mismatch. Unable to find DOM nodes for hydration key: 000021030 at getNextElement (chunk-JDADEQKQ.js?v=893d3cd7:361:37) at get children (+Page.tsx:15:12) at Head2 (+Page.tsx:22:17) at @user:25:42 at untrack (chunk-MLLIFDXK.js?v=893d3cd7:442:12) at HMRComp.createMemo.name [as fn] (@user:25:28) at runComputation…

### CASE-3927 · [ssr]: Spreading `readOnly: false` on input applies `readonly`
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Duplicates - [X] I have searched the existing issues ### Latest version - [X] I have tested the latest version ### Current behavior 😯 During SSR, spreading `<input {...{ readOnly: false }} />` results in the underlying input getting the `readonly` property. Here's what it looks like: ```html <input readonly="false"> ``` ### Expected behavior 🤔 I expect it to be the same as applying `<input readOnly={false} />` which completely skips add `readonly` property ### Steps to reproduce 🕹 Steps: 1. Visit [link] 2. Notice the use of spread `readOnly: false` 3. Try to edit the input that says…

### CASE-3940 · isServer returns false on the server with Deno
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug I've been using SolidJS together with Deno successfully, I just use hyper DOM expressions instead of JSX and I think I even prefer it like this. However, I was trying out the new ssr capabilities and noticed that the `isServer` function returns false even when I run it on Deno. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Run the following script like this `deno run bug.js`: ``` // bug.js import h from '[link] import {renderToString,isServer} from '[link] console.log(isServer) console.log(renderToString(()=>h('h1', 'Hello'))) ``` ###…

### CASE-3941 · Dynamic throws error on hydration if it is shown on client but hidden on server
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug For most elements, if you hydrate them but they were never rendered on the server, they just do a client-side render. However, `Dynamic` just crashes if it tries to render during hydration but never server-rendered. This can happen with a `Show` component like so: ```javascript <Show when={!isServer}> <Dynamic component="div">Test</Dynamic> </Show> ``` `TypeError: Cannot read properties of undefined (reading 'cloneNode')` Replacing that `Dynamic` with a simple div (or any other component/element) will cause it to work correctly. ### Your Example Website or App [link] ###…

### CASE-3948 · Make babel-preset-solid error if its version does not match solid-js?
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: question
- **Excerpt**: Just ran into a hair-raising bug caused by mismatched versions, which is my fault, but it would be nice for `babel-preset-solid` to error if the two aren't at the same version. (Namely `[email]` was subtly broken with `[email]`)

### CASE-3953 · 2.0.0-beta.31 | `createProjection` `ssrSource:client` leaks initial value on initial render.
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug a `createProjection` or `createStore` with ssrSource `client` will render the initial value client side before the store or projection is resolved. if the ssrSource is `server` or `hydration` the client will be pending where the store is read with `client` the store can be read with the initially seeded value. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue ```tsx const v = createProjection(async () => { await new Promise(r => setTimeout(r, 3000)) return { a: 1 } }, { a: "Initial Value" }, { ssrSource: ssrSource } ) ``` ```tsx return (…

### CASE-3959 · Universal renderer: `lazy()` automatically inserts an empty text node, which may or may not be supported by the underlying renderer
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open · labels: documentation
- **Excerpt**: ### Describe the bug This is a regression caused by [link]]/commit/c8fe58e9d259e463def62535f6d23454d4f30cee as far as I can tell, specifically [packages/solid/src/render/component.ts line 381]([link]]/commit/c8fe58e9d259e463def62535f6d23454d4f30cee#diff-2dfe8baae4d70b8ddc9b85568d1fbbb2b9626d9fe11154d0c4f902d43fee5d1eR381) ```tsx return createMemo(() => (Comp = comp()) ? untrack(() => { if ("_SOLID_DEV_") Object.assign(Comp!, { [$DEVCOMP]: true }); if (!ctx || sharedConfig.done) return Comp!(props); const c = sharedConfig.context; setHydrateContext(ctx); const r = Comp!(props);…

### CASE-3971 · Accessing children prop outside of JSX triggers hydration warning
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Per title - receive hydration warnings when accessing the children prop in any way (besides rendering props.children of course) in SSR context. ```tsx export const Stack: ParentComponent = (props) => { // Accessing children in any way (even just a console.log) causes hydration warning console.log(props.children); return props.children; }; ``` For context, I came across this while trying to create a "stack" component that injects a divider element between children (simplified below): ```tsx export const Stack: ParentComponent = (props) => { return ( <For…

### CASE-3973 · Solid-Start SSR 'v' Client Side
- **Principles**: P-F4 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: unverified bug
- **Excerpt**: ### Describe the bug Back to playing with SolidJS, and noticed Solid Start, nice!!,.. Looking very promising. Not sure if this is a Solid or Vite bug or even `solid-icons`, but while browsing some Solid repo's I noticed `solid-icons`, I thought could I make it so that I could see all the icons in a pack. Nice simple project, not very reactive I know, but very useful to see what's in the pack.. So I did -> ``` import * as aiIcons from "solid-icons/ai"; ``` And then to render them all I could do -> ``` <> { Object.entries(aiIcons).map(r => { const [name, Icon] = r; return <><span style={{…

### CASE-3989 · Hydration fails with use of `Dynamic` and fragments
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: **Describe the bug** Hello, I am working on this PR for Astro regarding the Solid renderer: [link] Currently it is using `render` to replace its children but I am trying to use `hydrate`. I've encountered two issues with it and I don't know if anyone here would have an idea of why they're happening: 1. If the parent component is a fragment with more than one children, the component does not get hydrated at all. 2. If there's a `Dynamic` component anywhere it fails with `Uncaught (in promise) TypeError: can't access property "length", current is undefined` from `insertExpression…

### CASE-3991 · navigate() from flight-data consumer can silently drop a relative-Location redirect (reliable with absolute URLs)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ## Summary A `redirect()` thrown (or returned) from a server-function **action** with a **relative** target (`Location: /`) sometimes fails to navigate at all on the client — no error, no console output, no URL change — while the action response itself is perfectly valid and the single-flight query cache still updates. Sending the identical redirect as a **same-origin absolute URL** (`Location: [link]) navigates reliably 100% of the time. Versions: - `@user/[email]-next.18` - `@user/[email]-rc.3` - Solid `2.0.0-rc.3` (streaming SSR) ## Reproduction A login/register/logout implemented as a…

### CASE-3992 · createMemo(fn, { transparent: true }) during hydration shifts sibling hydration ids → unclaimed DOM + REACTIVITY_HALTED
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: A memo created with the (internal) `{ transparent: true }` option inside a component while `sharedConfig.hydrating` is true causes every element AFTER the creating component to fail its claim: ``` Hydration tag mismatch for key "2": expected <pre> but found [object HTMLElement] [REACTIVITY_HALTED] ... TypeError: Cannot read properties of null (reading 'nextSibling') Hydration completed with 1 unclaimed server-rendered node(s): <pre _hk="3" ...> ``` The unclaimed nodes stay visible but no client scope owns them — bindings in them are permanently dead. In an app the failure is silent-but-fatal:…

### CASE-3993 · NodeJS OOM crashes with Solid V2 when ssr: true
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug OOM crash, when ssr: true, see below. It doesn't seem to crash if ssr: false. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Clone this: [github.com/Ciantic/test...]([link]) 2. pnpm run build, pnpm run serve 3. Navigate to [localhost:4173/blog/asdfadsf]([link]) or [link] and it freezes and crashes ```bash ➜ test-blog git:(main) ✗ $ pnpm run serve $ vite preview ➜ Local: [link] ➜ Network: use --host to expose ➜ press h + enter to show help <--- Last few GCs ---> [819888:0x55d5203a9000] 32831 ms: Scavenge (interleaved) 4051.7 (4104.2) ->…

### CASE-3996 · 2.0.0-beta.14 SSR with async data causes hydration mismatch, duplicate DOM elements
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When rendering multiple components in SSR using Solid 2.0 beta that use `createMemo` (returning a promise) wrapped in a `<Loading>` boundary, with the promises being hydrated by Tanstack router, the server outputs ~~duplicated HTML blocks~~ async components correctly but on client, there's a hydration mismatch and a component gets rendered twice. The event handlers for the first 2 blocks aren't hydrated as well. I think this is Solid's issue, not Tanstack's (Tanstack just uses Solid's renderToStream for SSR and seroval for router data hydration I guess?), so I'm opening…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3903 · When I quickly click the button to increase to about 30, the page starts to get stuck
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug When I quickly click the button to increase to about 30, the page starts to get stuck doc: [link] codesandbox: [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. quickly click the button to increase to about 30 ### Expected behavior The page will render normally when I click the button quickly ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Chrome - Version: 1.4.1 ### Additional context _No response_

### CASE-3905 · `Dynamic` error in ssr mode
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬8 · closed · labels: question
- **Excerpt**: ### Describe the bug Hi, I'm creating a css in js tool, the spa performs well, the development mode is normal under ssr rendering, and the build appears after `Cannot read properties of undefined (reading 'cloneNode')` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue yarn build yarn server ### Expected behavior Expect no error ### Screenshots or Videos <img width="1191" alt="image" src="[link]> ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] ### Additional context _No response_

### CASE-3915 · Firefox: noscript tag escaping child elements on hydration
- **Principles**: P-G1, P-G2, P-G3, P-F4, P-G4, P-E3 · **Env**: firefox
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug Child elements within `<noscript>` are escaped on hydration causing a mis-match from the HTML spit-out from SSR. ### Your Example Website or App Not Applicable ### Steps to Reproduce the Bug or Issue 1. Create a fresh SSR app. 2. Put a `<noscript>` tag with some elements inside. ```jsx <noscript><strong>大丈夫</strong></noscript> ``` The browser (with JS enabled) will spit out: ``` Uncaught The browser resolved template HTML does not match JSX input: <noscript>&lt;strong&gt;大丈夫&lt;/strong&gt;</noscript> <noscript><strong>大丈夫</strong></noscript>. Is your HTML properly formed?…

### CASE-3920 · JSX `popover={true}` sets invalid HTML attribute
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, typescript
- **Signals**: 👍2 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Setting `popover={true}` in your JSX will generate `popover="true"` in the HTML. This sort of works in most browsers, but it is invalid and can cause Chrome (with SSR-generated HTML at least) and other tools to complain. Per [link] the only valid values for `popover` are `""` (same as `"auto"`) , `"manual"`, `"auto"`, and `"hint"` (experimental) . However, the [TypeScript definitions for this attribute]([link]) are `boolean | "manual" | "auto" | undefined`, and setting it to a boolean gives you values of `"true"` and `"false"` instead of `""` or unsetting it. ### Your…

### CASE-3922 · `onclick="alert(1)"` works on `<button>` but not on `<Dynamic component="button">`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬6 · closed · labels: compilation
- **Excerpt**: ### Describe the bug `onclick="alert(1)"` works on `<button>` but not on `<Dynamic component="button">` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue One of the two buttons doesn't show an alert. ### Expected behavior I would expect both buttons to have the same behaviour. ### Screenshots or Videos _No response_ ### Platform macOS, chrome, solid 1.8.21 ### Additional context _No response_

### CASE-3925 · Support 'passive' option on event listeners
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5, P-H3 · **Env**: chrome, react
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Most DOM events are not passive by default, but some are ( wheel, scroll, ..) . see [link] And it is not consistent among major Browsers. Should Solids JSX support explicit passive options for event listeners ? See how React addressed this issue: [link] and the resolution: [link] ### Steps to Reproduce the Bug or Issue see example on [SolidJS Playground]([link]) and below: (update Sep 2024: on chrome the playground doesn't show the bug anymore) ```jsx import { render } from "solid-js/web"; import { onMount } from "solid-js"; function Counter() { const wheel =…

### CASE-3926 · Universal Renderer's cleanup method doesn't remove existing node
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F5, P-H3 · **Env**: firefox, windows
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Universal Renderer's cleanup method (the return value of `render` function) doesn't remove the existing node, which is inconvenient for using HMR. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. See the rendered result. ### Expected behavior I ran the cleanup method and I expected the node to be removed. ### Screenshots or Videos ![image]([link]]/assets/68762426/800c49be-0669-4824-811e-a560451f42bc) ### Platform - OS: Windows 11 - Browser: Firefox - Version: 115 ### Additional context I am using solid-js for Firefox XUL, non-standard…

### CASE-3928 · When using a "computed key" in classList, a following `class` declaration overwrites the classes set by `classList`
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, macos, react
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug `classList` doesn't work when used together with `class`, even when `classList` is not reactive, if the object looks like this `{ ["test"]: true }` instead of `{ test: true }` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [link] 2. See `class-2` being logged to the console ### Expected behavior 1. `class-1` being logged to the console ### Screenshots or Videos _No response_ ### Platform - OS: macOS 14 - Browser: Latest FirefoxDeveloperEdition ### Additional context _No response_

### CASE-3929 · [html] Unable to use a `<template>` element in `html` template
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬6 · closed · labels: enhancement/alternative templating
- **Excerpt**: ### Describe the bug This causes an error: ```js import html from 'solid-js/html' html` <div> <template> <h1>Example</h1> </template> </div> ` ``` Error: ``` Uncaught TypeError: Cannot read properties of null (reading 'firstChild') ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue see console ### Expected behavior expect to use a `<template>` element like normal HTML ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Chrome - Version: 1.8.5 ### Additional context _No response_

### CASE-3932 · useContext seems unexpectedly slow (with just about ~100 useContext calls)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, mobile
- **Signals**: 👍3 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I feel like I have a rather average use case, a home page with ~50 cells of content, each making calls to the shared `AppContext` using `useContext`. Now a full reload on my M1 Mac takes ~90-120ms on an M1 Macbook, on a Samsung Phone about 6-10x that long. At this point using react-router to re-render pages on the client feels sluggish to mobile users. Now, when looking at the Performance in chrome, I can see that: localhost:3000 full homepage reload, 124ms, of which 18.9% (25.9ms) is the `lookup`. Deployed prod site , 92ms total, of which 9% ~ 9ms is 'le' which looks…

### CASE-3933 · 1.7 JSX template error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍2 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug The new shorter template strings seem to have some edge cases to polish. Here is one that [worked in 1.6]([link]) But [doesn't work in 1.7]([link]) ```ts <div> <span> <a>link</a> </span> <span>text</span> <span>{fn()}</span> </div> ``` in 1.6 it compiled to something like this: <details> <summary>Code snippet</summary> ```ts const _tmpl$ = /*#__PURE__*/template(`<div><span><a>link</a></span><span>text</span><span></span></div>`, 10); const fn = () => ''; const Content = () => { return (() => { const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 =…

### CASE-3937 · When Google Translate is enabled on a website, SolidJS can't update some of the DOM
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the bug - I go on a Swedish website that uses SolidJS under the hood. - I don't speak Swedish, so the built-in Google Translate feature of Chrome kicks in and translates the website I'm on. - As soon as the translation is enabled, some of the information on the page is off. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [link] 2. Export the project as a .zip. 3. Unzip the project. 4. Go to the folder. 5. `yarn`. 6. `yarn start`. 7. Go to [link] using Chrome. 8. Observe the counters going up. 9. Enable the Google Translate translation. 10.…

### CASE-3938 · Setter of object as prop in component not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, windows
- **Signals**: 👍0 💬6 · closed · labels: downstream
- **Excerpt**: ### Describe the bug - edit: Setter<boolean> works fine - setHuman: Setter<Human> not working ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. click edit 2. in input form change name 3. click confirm button ### Expected behavior Setter works for all types not just for boolean ### Screenshots or Videos _No response_ ### Platform - OS: [Windows] - Browser: [Chrome] - Version: [e.g. 107.1] ### Additional context _No response_

### CASE-3945 · Children introspection (with children helper) not working correctly with SSR
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: edge, windows
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug I am using the children helper to introspect and wrap children elements. When using SSR (in solid-start), I am finding that the children fail to render. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Clone [link] 2. Run `npm install` and `npm run dev` 3. Open the browser to localhost:3000 ### Expected behavior I expected the children to render in SSR. They did not. ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Browser: Edge - Version: 100.0.1185.44 (Official build) (64-bit) ### Additional context This was…

### CASE-3947 · Solid attaches `Symbol(state-node)` and `Symbol(state-proxy)` properties to objects which are unrelated to SolidJS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: ubuntu, webpack, electron, typescript
- **Signals**: 👍0 💬6 · closed · labels: question
- **Excerpt**: **Describe the bug** During the course of migrating from Webpack 4 -> 5, a mysterious bug appeared in my appeared which I believe originates from SolidJS. I am using Electron 12.0.0, Node 14.16.0, and SolidJS 0.18.14 with TypeScript 4.2.3 on Ubuntu 20.04. Here is how I tracked the bug to SolidJS: * I have a regular object called `currentFile` whose keys/values were chosen manually and consist only of strings / numbers * I pass the `currentFile` object an argument to Electron's [`ipcRenderer.invoke()`]([link]) function, which uses the [Structured Clone Algorithm]([link]) to send the object…

### CASE-3956 · inconsistent errors with order of props (or w/ spread) for an input type=file
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, chrome
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug The order of props or assign via spread matters for an input of type file! solid breaks with cryptic error message on Firefox: `Uncaught DOMException: An attempt was made to use an object that is not, or is no longer, usable` Chrome is a bit more specific but the cause is probably still wrong: `Uncaught InvalidStateError: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue change in the…

### CASE-3960 · Invalid JSX code generation when nesting `<a>` elements
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, ios, linux
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In certain scenarios the code generated from JSX is incorrect. It tries to use `nextSibling` when the object has no sibling which causes null pointer exceptions (undefined) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the playground provided ### Expected behaviour When JSX that is forbidden/invalid is transpiled/transformed an error should be thrown (compile time) that enables the user to fix his JSX. ### Platform - OS: Linux - Browser: Chrome - Version: 126.0.6478.126 ### Additional context [link]]-start[ref]

### CASE-3961 · Solidjs cannot update a dom correctly in the Chrome for iOS browser
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ios
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I found that in the Chrome for iOS browser, this browser can automatically add some html(**_chrome_annotation_**) tag to some specific texts. it causing some part of the DOM structure changed. when solid try to update the content inside this tag, it won't work, but work correctly in other browser and the Chrome for PC. ![image]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open the code sandbox in the Chrome for IOS browser. 2. Click the button to "Open in the new Tab" . <img width="884" alt="image" src="[link]> 3. You will see…

### CASE-3965 · createEffect is not triggered when children change
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug In the example, there are two Child components, one of which passes the Signal directly, and the other Signal is contained in the div. When the button is clicked, createEffec in the Child component is only activated once ### Your Example Website or App [example]([link]) ### Steps to Reproduce the Bug or Issue just click the button,then see the console. ### Expected behavior How can createEffect be triggered when the sigal in the div changes and why ### Screenshots or Videos _No response_ ### Platform - OS: [macOS] - Browser: [Chrome, Safari, Firefox] - Version: [1.0.0]…

### CASE-3967 · Portal component's wrapper div cannot be styled
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍1 💬5 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I'm using the `Portal` component for a toast element where I noticed that the wrapper `div` element is messing up the styles of the elements. I know that this `div` is required, but is it possible to at least add the ability to add the `class` attribute for this element for these edge cases? ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the [StackBlitz]([link]) demo 2. Click the button to show the toast 3. You will see that the styles are messed up 4. If you inspect the elements and manually remove the wrapping `div` the layout…

### CASE-3969 · Value of `<select>` is set before the children are created when using spread
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: edge, windows
- **Signals**: 👍1 💬5 · open · labels: enhancement
- **Excerpt**: ### Describe the bug When using spread on a select element the value will be set before the children are created and this will cause the value to be set to an empty string (this is a browser behavior because no option match). ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open the example 2. Look at the result ### Expected behavior The second and third select boxes should have the same option selected. ### Screenshots or Videos _No response_ ### Platform - OS: Windows - Browser: Edge - Version: 113 ### Additional context _No response_

### CASE-3975 · Dynamic component not pass props to children
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Dynamic component not pass someProps to `props.children` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. We have two button 2. Add second button through Dynamic component and add `variant="outline"` in Dropdown.jsx 3. Fail! We don't see `variant="outline"` Button ### Expected behavior As a user, I expected merge props to Button component in Dropdown component with Dynamic component and see Outline Button ### Screenshots or Videos _No response_ ### Platform - OS: macOS - Browser: Chrome - Version: 109 - Solidjs: 1.6.10 ### Additional…

### CASE-3984 · Double click event cannot be monitored normally
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome, macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Binding a double-click event to a DOM has no effect ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1.Input content 2.enter 3.click 本地单击保存 4.has result 5.click 本地双击保存 5.no result ### Expected behavior I hope his double click event is valid ### Screenshots or Videos _No response_ ### Platform - OS: [ macOS] - Browser: [Chrome] - Version: [98.0.4758.109] ### Additional context _No response_

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3904 · SolidJs JSX types are incorrect when running TypeScript to `nodenext` or `node16` module resolution
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Describe the bug TypeScript version 4.7 allows users to specify module resolution as `nodenext` or `node16`. When specified module resolution will use `node`'s ESM resolution. Enabling this flag in a Solid Js project will result in type errors being report: ![image]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Create start solid template: `npx degit solidjs/templates/ts my-app` 2. Update `moduleResolution` field in `tsconfig` to be `nodenext` or `node16` 3. Install dependencies 4. View any `.tsx` file, and you will see type errors ### Expected…

### CASE-3906 · observable -> Cannot read property 'isStopped' of undefined
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **Describe the bug** try to use solidjs's `observable` and rxjs's `from` operator for converting a signal to stream, but got a little error。 It looks like solid’s `observable` cant adapt rxjs's observable interface。 ![image]([link]) ![image]([link]) **To Reproduce** just run the following code ```tsx import { from, Observable } from "rxjs"; import { observable, createSignal, onMount } from "solid-js"; function App() { const [getText, setText] = createSignal("Hello Solid"); onMount(() => { setInterval(() => { setText(new Date().toLocaleTimeString()); }, 1000); }); // workaround new…

### CASE-3910 · The component is initialized inexplicably
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/compilation
- **Excerpt**: ### Describe the bug I have a Tooltip component, when clicked, it should show the content, but instead of showing the content, it reinitialized. My original code was quite complex, and I spent most of the day looking for specific bug causes. I ended up with a minimal example that could be reproduce this bug. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. go to [link] 2. click text ### Expected behavior Once the tooltip is clicked, the content should be displayed instead of reinitialized. ### Screenshots or Videos <img width="1711" alt="截屏2025-01-10 10 10 08"…

### CASE-3918 · solid 0.26 breaks the buttons and breaks tracking of the props in `createComputed`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: question
- **Excerpt**: **IMPORTANT: If you have a question or an idea for a new feature use Github Discussions instead** **Describe the bug** 0.26 breaks two things in [solid-simple-table]([link]), which I don't know how to fix - it has broken the sort functionality. The buttons had onclick callbacks that used to sort <details> <summary>image</summary> Now: ![solid]([link]) Previously: ![Simple table demo]([link]) </details> - it has broken updating the rows whenever `props.rows` changes. [I was using `createComputed`]([link]) which used to call `setRows` to update the `rows.props`. But this doesn't seem to work…

### CASE-3919 · `2.0.0-beta.3` `onSettled` in `onSettled` does not execute silently
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug when using nested onSettled inside the app, the inner onSettled does not run when using it outside the app both inner and outer are run ``` onSettled(()=>{ onSettled(()=>{ alert("This block does not run" } }) ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue . ### Expected behavior nested onSettled should run, or fail, should not silently be ignored. ### Screenshots or Videos <img width="1519" height="574" alt="Image" src="[link] /> ### Platform . ### Additional context _No response_

### CASE-3921 · img tags lose props on nested components
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: webcomponents
- **Excerpt**: ### Describe the bug I have some some images with like: ```html <img class="flex-shrink-0 mx-auto rounded-full w-32 h-32" is="img-cache" expire="86400" url="[link] width="100" height="100" alt="" /> ``` one script I use which will run as custom element and is included globaly via index.tsx change the prop `url` to `src` which will be the cached image as database64 string like: ```html <img class="flex-shrink-0 mx-auto rounded-full w-32 h-32" is="img-cache" expire="86400" url="[link] width="100" height="100" alt=""…

### CASE-3931 · Solid-start incompatible with ag-grid-solid: The requested module 'solid-js/web' does not provide an export named 'className'
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug Trying to use AgGrid inside solidjs by: ``` import AgGridSolid from "ag-grid-solid"; ``` When refreshing my `customModule.jsx`, the main webpage shows the error. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue - `npm init solid@user` - `npm install ag-grid-solid` - `npm run dev` to start the engine -- everything works correctly - add `import AgGridSolid from "ag-grid-solid";` to `src/routes/index.jsx` - got the errror: ![image]([link]]/assets/1921878/6dcbe131-0c94-48e6-9a59-889ca1362ca4) ### Expected behavior Everything should be imported…

### CASE-3935 · inconsistent owner in Component function (production vs development build) result in out of order onCleanup
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · open · labels: bug/PRs Welcome
- **Excerpt**: ### Describe the bug A component function owner is different between a dev and prod build ```jsx function MyComponent(){ getOwner() // <-- this is different between prod/dev builds. // in prod the owner is of the parent, in dev it is a new owner scope. return <></> } ``` this inconsistency causes unexpected behavior, for example when using solid's `onCleanup` primitive [dev build playground]([link]) ![image]([link]) [production build playground]([link]) ![image]([link]) note: production build is working as designed, it is dev that alters the expectations ### Your Example Website or App . ###…

### CASE-3942 · Importing Solid.js (and Preact) from unpkg, jspm, ESM.sh, and skypack CDNs
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Currently Solid is not importable via JSPM or UNPKG. This also happens to any packages using a similar package layout as Solid.js or [Preact]([link]). These two import examples don't work: - **JSPM:** [link] - **UNPKG:** [link] These ones work though: - **Skypack:** [link] - **ESM.sh:** [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open one of the non-working links 2. notice in console the browser was unable to load the ES modules ### Expected behavior Solid should be importable with all ES module CDNs. ### Screenshots or Videos…

### CASE-3943 · Calling unwrap on a Solid store returns extra metadata
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Calling `unwrap` on a Solid store returns an object that is decorated with extraneous metadata that is unimportant for the end-programmer. Here's a [minimal repro]([link]) with a screenshot attached to demonstrate: <img width="642" alt="Screen Shot 2022-07-09 at 6 30 52 PM" src="[link]> If possible, I'd like the returned object to not include the symbol or have a second argument flag, e.g. `deep: boolean`, for `unwrap` API so that metadata is cleared. This is simply a quality of life feature but it would make debugging Solid stores easier without the need to call…

### CASE-3944 · Issue rendering with Fragment <></> ( out of order rendering / parse error )
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug **WORLD**Hello . Incorrect rendering order [link] ```html <div> Hello <><b>{'WORLD'}</b></>. </div> ``` ![image]([link]) ----- [link] ```html <div> <div> <>{"WORLD"}</> </div> </div> ``` ``` /main.tsx: Property arguments[0] of CallExpression expected node to be of a type ["Expression","SpreadElement","JSXNamespacedName","ArgumentPlaceholder"] but instead got undefined ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue see repro in playground. ### Expected behavior content of fragment should render in order. Hello **World**. and should not…

### CASE-3946 · generateHydrationScript not working
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: unverified bug
- **Excerpt**: **Describe the bug** Hello there! I am trying make use of SolidJS's async SSR and `generateHydrationScript` does not seem to be working. **To Reproduce** 1. The HTML has an `<esi>` tag that gets replaced with the HTML from the JSX below (which is working as intended) 🍾 <details> <summary>Code</summary> - Page HTML <img width="821" alt="Screenshot 2022-02-04 at 19 01 50" src="[link]> - JSX Component <img width="545" alt="Screenshot 2022-02-04 at 18 50 51" src="[link]> - Returned stringed HTML <img width="486" alt="Screenshot 2022-02-04 at 18 51 01" src="[link]> </details> 2. The page HTML…

### CASE-3952 · 2.0.0 | slow and steady wins the race
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug updating store ~4000 times, 2 keys at a time takes ~3s to complete ```tsx import { createStore, flush } from "solid-js" const COUNT = 4000 const [store, setStore] = createStore({}) const start = performance.now() for ( let i = 1; i < COUNT; i++ ) { setStore(store => { store[i - 1] = false store[i] = true }) flush() } console.log( (performance.now() - start).toFixed(3), "ms" ) ``` hot path <img width="804" height="688" alt="Image" src="[link] /> similar code in solid 1.x takes few ms for 100,000 updates [link] ```tsx import { render } from 'solid-js/web'; import {…

### CASE-3957 · Tagged template function doesn't trigger rerender
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug _No response_ ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue _No response_ ### Expected behavior [link] ### Screenshots or Videos _No response_ ### Platform Playground ### Additional context _No response_

### CASE-3966 · Streaming ErrorBoundaries where Boundary is flushed before error cause Hydration Mismatch Error
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug I don't know what causes it. I could reproduce it in stackblitz. This is a very strange hydration error. While this happens everytime in stackblitz, we get this error only like 40% of the time in our project. We have to constantly refresh in order to get this error. Makes it very hard to understand what is the root cause. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to stackblitz 2. Open console 3. See the error ### Expected behavior I expect not to have hydration error in this simple example ### Screenshots or Videos _No response_…

### CASE-3972 · Operation with && in event handlers via props causes the 'outside a createRoot' error
- **Principles**: P-A3, P-H1 · **Env**: opera, macos
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug It was suggested that the Discord support thread I raised should be logged as an issue, so here goes: Why does button 1 generate a warning? Doesn't it just evaluate to boolean anyways? ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Click button 1, check out the console warning. ### Expected behavior No warning. ### Screenshots or Videos _No response_ ### Platform MacOS, all browsers ### Additional context _No response_

### CASE-3976 · Hydration key warning when using JSX prop multiple times
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug When using a component passed through props inside a `classList`, causes a warning about hydration keys. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. start the project `npm run dev` 2. open the console 3. refresh the page 4. see the warnings about hydration key on console ### Expected behavior As a user, I expect to not see hydration warnings. ### Screenshots or Videos _No response_ ### Platform solid-js 1.6.9 ### Additional context _No response_

### CASE-3980 · Arrays in createSignal not updating in the view
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: question
- **Excerpt**: ### Describe the bug I am having trouble displaying the array signal updates using `<For>` control flow. In the console log, I can see the changes, but in the browser, they don't appear. See example in solid playground ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Change the unit input 2. Watch the changes in the `console.log` and the browser. ### Expected behavior Both items should be updated ### Screenshots or Videos _No response_ ### Platform Solid Playground ### Additional context _No response_

### CASE-3981 · Uncaught Error after enabling scheduling
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug I have tried enabling the scheduling in the solid implementation of the last UI benchmark: [link] ```ts import { enableScheduling } from "solid-js" enableScheduling() ``` But it broke the application — after I tried to type in the input, the console was spammed by this error: ![image]([link]) I've recreated the breaking benchmark here: [link] This demo seems to be working fine though after updating: [link] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Try typing in the input 2. Open the console to see errors ### Expected behavior…

### CASE-3982 · Support spreading `null` or `undefined` props
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬5 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug Spreading `null` or `undefined` props gives runtime errors. While it is not exactly the same, such situation is usually supported in places like plain object or `React`. It might be nice if `Solid` provides similar behavior. Additional consideration: support full native spreading JS object with `boolean`, `number`, etc. ? ### Your Example Website or App N/A ### Steps to Reproduce the Bug or Issue N/A ### Expected behavior Spreading `null` or `undefined` props shouldn't throw exceptions. ### Screenshots or Videos _No response_ ### Platform N/A ### Additional context…

### CASE-3994 · 2.0.0-beta.15 | Error thrown by async read in <Loading> is not captured by a wrapping <Errored>
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug Error thrown by async read in <Loading> is not captured by a wrapping <Errored> <img width="482" height="589" alt="Image" src="[link] /> ```tsx <div> A <Loading fallback={()=>"Loading...1"}> <Errored fallback={()=>"Error 1"}>{asyncMemo()}</Errored> </Loading> </div> <hr /> <div> B <Errored fallback={()=>"Error 2"}> <Loading fallback={()=>"Loading...2"}> {asyncMemo()} </Loading> </Errored> </div> ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue case 2 is a control case, where both cases actually works more as expected and shows the errored…

### CASE-3995 · 2.0.0-beta.14 store not becomming pending when update is held back by action
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug When a update to a store is held back by a async update it does not become pending. While investigating [link]][ref] I found that non optimistic store doesn't report pending at all. Not on the modified property or other properties. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open repro 2. Click button 3. Observe no pending indicator appear ### Expected behavior The entire store should report pending during the update or at least the changed property depending on if the other bug is a bug or expected behavior. ### Screenshots or Videos…

### CASE-3997 · Solid v2.0.0-beta.10 refresh() does not catch NotReadyError
- **Principles**: P-A3, P-H1 · **Env**: chromium, linux
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the bug Calling `refresh(optimistic)` throws an error that comes from a NotReadyError from calling count() that should have been filtered out. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the page 2. Cllck on the button 3. Check error in console ### Expected behavior NotReadyError should be filtered out ### Screenshots or Videos _No response_ ### Platform - OS: aarch64 Linux - Browser: Chromium - Version: 147.0.7727.101 ### Additional context _No response_

### CASE-3998 · `2.0.0-beta-4` inconsistent stores read after write
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug setting store values inconsistent value reads after set # Case A [link] setting existing keys reflect right away <img width="733" height="460" alt="Image" src="[link] /> # Case B setting a new key is not reflected, even with flush [link] <img width="756" height="497" alt="Image" src="[link] /> # Case C settign a new key is reflected with flush only when there is also an effect [link] <img width="651" height="519" alt="Image" src="[link] /> ### Your Example Website or App . ### Steps to Reproduce the Bug or Issue . ### Expected behavior consistency ### Screenshots or…

### CASE-4000 · Optional type property `children` for <For> and <Show> is typed as required.
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬4 · closed · labels: typescript/unverified bug
- **Excerpt**: ### Describe the bug Typescript type explicitly defines property children as required when [it's not required]([link]). Illegal according to the typescript type: ``` <For each={props.groups}> {group => ( ``` Has to be: ``` <For each={props.groups} children={(group: AddressTotalsGroup): JSX.Element => ( ``` <img width="870" height="435" alt="Image" src="[link] /> and <img width="868" height="374" alt="Image" src="[link] /> ### Your Example Website or App n/a ### Steps to Reproduce the Bug or Issue . ### Expected behavior Type linter not erroring on valid component property constraints. ###…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3907 · 2.0.0-beta.15 Many hydration bugs
- **Principles**: P-D1, P-D2, P-D3, P-F4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the bug Bug 1: Plain simple hydration issue. Try clicking Refreshing several times. Bug 2: JSX syntax `{data().value && <h4>{data().value}</h4>}` causes bug in `createMemo` order. `keyFn` memo returns an object instead of the path string. See console logs. Bug 3: `Loading > Errored > Nested` async memo causes the page to load forever. `SSR stream transform exceeded maximum lifetime (120000ms), forcing cleanup` Bug 4: `createEffect` on async memo causes the page to load forever. Bug 5: Reusing promise stored in global cache doesn't work. Bug 6: Rendering `{data()}` where data() is…

### CASE-3913 · Stale read from <Show> under a transition
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍4 💬7 · closed · labels: bug
- **Excerpt**: ### Describe the bug I'm encountering `Stale read from <Show>` while a transition is happening. I'm not sure exactly what the problem is, but I created a simple reproduction. I'm not reading the signal in a callback or in async code, which is why it is confusing to me. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Click the counter and move the mouse at the same time ### Expected behavior I expect to see the tooltip instead (some text and coordinates). You can see it by holding the mouse still after click. ### Workaround Write the code without using the…

### CASE-3990 · 2.0.0-rc.4: flush() guard trips from the asyncWrite write-back on a screen with several async memos (no minimal reproduction)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug On `2.0.0-rc.4`, the dev build throws `Potential Infinite Loop Detected.` from the `flush()` guard while a browser sits on one screen of our app. The page keeps working. The error reaches `window.onerror`, which is how our end-to-end suite catches it. The guard is `flush()` counting its own iterations, in `@user/signals` `dist/dev.js` around line 1882: ```js let count = 0; while (scheduled$1 || activeTransition) { if (++count === 1e5) throw new Error("Potential Infinite Loop Detected."); globalQueue.flush(); } ``` So something reschedules work 100,000 times inside one…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3930 · When using the result of `<Index>` or `indexArray` in a `createComputed`, cleanups aren't run
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When using indexArray and lengthening the array from within the looping function the function for certain items is re-executed without the previous one being cleaned up. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [link] 2. Make the code execute (click refresh) 3. Check console 4. Note how indexes 1-3 are repeated and <b>no cleanups are ran</b> ``` We mapped over 0 We mapped over 1 We mapped over 2 We mapped over 3 We mapped over 0 We mapped over 1 We mapped over 2 We mapped over 3 ``` ### Expected behavior 1. Items aren't…

### CASE-3955 · 2.0.0-beta.2 onCleanup never runs from inside of ref callback
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug ```ts export default function App() { const [toggle, setToggle] = createSignal(0); return ( <div> <Show when={toggle()}> <div ref={(el) => { console.log("start") onCleanup(() => { console.log("end") }) }}>TEXT</div> </Show> <button onClick={() => setToggle(v => v ^ 1)}> Toggle: {toggle()} </button> </div> ); } ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue When you click a button in the reproducer you should only see "start" but no "end" If you switch to the 1.9 version there it will all be ok ### Expected behavior . ### Screenshots or…

### CASE-3968 · onCleanup gets latest value of tracked signal instead of previous value
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When accessing a tracked signal during onCleanup, the value received is the latest value of the signal (the new value that the developer sent to the signal setter and that triggered the reactive loop). I don't know if it makes sense, but I imagine the developers will expect the value of the signal to be the previous value when accessed during clean-up step (for example if the signal is the resource to clean-up). Take this small code example: ```javascript const [target, setTarget] = createSignal(/* some thing target to be install at each value change */); createEffect(()…

### CASE-3974 · Order of onCleanup makes it difficult to properly cleanup services dependent on each other
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍2 💬5 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I wrote a few services and designed them so my construction functions returned the service and a `dispose` function. And then I called `dispose` inside my component's `onCleanup` method. But then I realized I wasn't using the platform to its fullest glory and decided to put `onCleanup` methods inside those services so all the cleanup would happen automatically. But from experimentation it doesn't work as I expect. In particular if I instantiate service A, B, and C, in that order, where C depends on B and B depends on A, the cleanup functions run in the order A then B then…

### CASE-3985 · `Show` with a callback with no params is getting re-computed
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug `Show` with a callback with no params is getting re-computed if a signal used in `when` is also used before or after with jsx expression `{signal()}` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the linked playground 2. Click the button a few times. The inner function creation should log and should not log any further 3. Un-comment line 12 or 20 4. Click the button again a couple times. There'll be create, cleanup logs whenever the button is clicked ### Expected behavior Step 4 should behave the same as Step 2 ### Screenshots or…

### CASE-3999 · `2.0.0-beta.4` onSettled async callback prevents a component from unmounting
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug If an async function is passed to `onSettled()` the function is called correctly when the component mounts, but when the component is supposed to be unmounted, an error about "call not being a function" prevents it from unmounting. My guess is that solid is getting the Promise as a return value from the function call and assuming it is the clean-up function. Later when it tries to call the Promise as a typical callback, it fails. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. go to [link] 2. click the [SUBMIT] button which should unmount…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3936 · HTML entities not being parsed when attribute value is not literal
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Describe the bug I'm working on migrating my code from React to Solid, and I have a text input field whose "placeholder" attribute is `"Search&hellip;"`. In React, this renders as `"Search..."`, but in Solid it renders as `"Search&hellip;"`. This works correctly if I use a string literal on the input element, but it does not work if I pass the placeholder in as a variable. Specifically: ```ts <input type="text" onClick={increment} placeholder="Search&hellip;" /> // Works <input type="text" onClick={increment} placeholder={"Search&hellip;"} /> // Does not ``` ### Your Example Website or…

### CASE-3950 · Parcel integration problem, r is not defined
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: Hey there, long time lurker of your project here. First and foremost, I'd like to congratulate you on Solid Js and your other related project. I'd like to try your library on a side project of mine and for such little experiments, I like to tool around with [parcel]([link]) as my bundler. For some reasons that I are too advanced for me I believe, it seems like parcel interfere with the way solid is expecting the code to look like. Declaring a node directly in a variable works, but declaring a functional component doesn't seem to work. ```js import { r } from 'solid-js/dom'; // work const…

### CASE-3958 · context from the parent web-component is not shared to its children | solid-element
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/webcomponents
- **Excerpt**: ### Describe the bug For Solid Hack 2024, I experimented with the `solid-element` API to convert Solid components into web components. I attempted to create a ShadCN-based web component library, aiming to make it particularly useful for the HTMX community. I saw this as a strong use case for Solid.js. I tried porting an `Accordion` component to a web component, so that end-users could use it like this: ```html <accordion class="w-full" collapsible> <accordion-item value="item-1"> <accordion-trigger>Is it accessible?</accordion-trigger> <accordion-content>Yes. It adheres to the WAI-ARIA design…

### CASE-3963 · SVG attribute stdDeviation changes to lowercase when used with a reactive variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When I create an SVG element of type `feDropShadow` in JSX and its `stdDeviation` attribute is linked to a signal or a store, the property is generated entirely in lowercase (`stddeviation`) instead of keeping its initial case, making this property inactive. For example with the following code : ```jsx export default function ExampleSvg() { const [stdDev, setStdDev] = createSignal(0); return ( <div> <svg width="200" height="200"> <defs> <filter id="shadow-2"> <feDropShadow dx="4" dy="8" stdDeviation={stdDev()} /> </filter> </defs> <circle cx="50%" cy="50%" r="80"…

### CASE-3970 · Sibling Shows unexpectedly trigger blur on sibling
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug When a (focusable) element is flanked by a Show component on either side, a signal triggering both Show components to true will cause the focusable element to lose focus. Proximally this is caused by the reconcileArray logic using `replaceChild` rather than an insertion method (replacing the focusable element with one of the newly visible Shows, before putting the focusable element back in the DOM). This results in a `blur` event being fired at the focusable element (and no subsequent `.focus` event for it to regain focus). ### Your Example Website or App [link] ### Steps…

### CASE-3978 · Events are not attaching in SSR mode
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3, P-F4 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When we are using SSR the code generated is without event handlers. ```typescript import { useStyletron } from '@user/solid-styletron'; import Search from '../../../../icons/search.svg'; export function Searchbar() { const [css, $theme] = useStyletron(); let searchInputRef: HTMLInputElement | null = null; function onSearchTap() { searchInputRef?.focus(); } return ( <form class={css({ display: 'flex', alignItems: 'center', backgroundColor: $theme.tokens.Search.backgroundColor, height: '34px', })} > <input type="search" placeholder="Search..." ref={(ref) => (searchInputRef…

### CASE-3979 · JSX.CSSProperties rejecting CSS variables in compile time
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed · labels: typescript
- **Excerpt**: ### Describe the bug JSX.CSSProperties not working with CSS variables (custom properties) eg. `<div style={{'--foo': 'bar'}}></div>` It is valid and should pass. However typescript is rejecting the code because `JSX.CSSProperties` rejects it. ### Your Example Website or App [CSS custom properties]([link]) ### Steps to Reproduce the Bug or Issue `<div style={{'--foo': 'bar'}}></div>` Typescript rejects the code above. ### Expected behavior It should compile. ### Screenshots or Videos _No response_ ### Platform - OS: Any - Browser: (compile time/TypeScript) - Version: solid 1.5.1, typescript…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3951 · 2.0.0-rc.3 | Updates in Document.jsx won't HRM update
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D4, P-F5 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug Might seem as a silly issue, but any updates on Document.jsx won't hot reload the module. I've added some Tailwind classes on <html> and they only show up in my running app when I manually refresh. The same goes for adding/removing DOM elements, such as an <h1> inside the <body>. ### Your Example Website or App solid 2.0 rc-3 ### Steps to Reproduce the Bug or Issue Install solid 2.0 rc-3 (or 4) and try and edit Document.jsx: ```html <html lang="en" class="bg-slate-900 overscroll-x-none overflow-x-hidden sm:overscroll-contain scroll-smooth"> <head> <meta charset="utf-8" />…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3954 · 2.0.0-beta.14 - `refresh()` does not coalesce: overlapping actions trigger N redundant fetches
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: # `refresh()` does not coalesce: overlapping actions trigger N redundant fetches ## Summary When N actions overlap and each calls `refresh(sameResource)` after their async work, the resource is recomputed N times instead of once. There's no built-in way to express "refresh this resource at most once per tick," so consumers end up hand-rolling `inflight` counters or composing `onSettled` with userland microtask coalescers. ## Versions `@user/[email]-beta.14` ## Reproduction ```js import { action, flush, createRoot, createMemo, refresh, createEffect, onSettled } from "@user/signals"; const…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-3962 · [SSR/Astro] DOM Not Updated from State by Client Updates onMount
- **Principles**: P-C1, P-C2, P-C3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the bug When SSRing with state and that state is updated on the client immediately/onMount, the new value is not reflected in the DOM. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Using my example which demos a simple theme toggle defaulting to 'dark' mode... 1. Click the toggle to change the state to 'light' mode. 2. Reload the page 3. Observe page reflects 'light' mode (because store subscriber is changing this) but controls show the 'dark' mode. a. Press the button to console log state which shows store actually holds 'light' ### Expected…

### CASE-3977 · Hydration issue when Dynamic Component have wrapped children
- **Principles**: P-C1, P-C2, P-C3, P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ```ts ...$theme.typography.LabelSmall, })} > {props.$startEnhancer && ( <div class={css({ marginRight: props.children ? $theme.sizing.scale400 : 0, display: 'flex', alignItems: 'center', placeContent: 'center', })} > {props.$startEnhancer()} </div> )} <span>{props.children}</span> {props.$endEnhancer && ( ``` If I am wrapping the component inside of the span then it is having some hydration issue. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Create a dynamic component with SSR 2. Pass dynamic value 3.…

### CASE-3983 · class={undefined} becomes class="undefined"
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Describe the bug `<div class={undefined}/>` renders as `<div class="undefined"></div>`. Or more precisely, it compiles to `_el$.className = undefined;` which is equivalent to `_el$.className = "undefined";` apparently. By contrast, `<div foo={undefined}/>` renders as `<div/>`. Or more precisely, it compiles to `setAttribute(_el$, "foo", undefined);` which is equivalent to removing the attribute. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [link] 2. Inspect the button element 3. Observe attributes ### Expected behavior I expect `<div…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-3986 · Switch statement does not match more than once when a selector is referenced more than once in a classList
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug When a selector is referenced more than once in a classList, Switch statements that match it, only do so once. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Define some classes ```css button { display: block; } .red { background-color: #ff3e00; color: white; } .bold { font-weight: 700; } ``` 2. create a selector and toggle those classes in a classList referencing the selector more than once ```tsx const buttons = ["Foo", "Bar", "Baz"] const [current, setCurrent] = createSignal(1); const isCurrent = createSelector(current) ... <For…

