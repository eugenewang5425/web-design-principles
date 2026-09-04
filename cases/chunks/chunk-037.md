# Case Chunk 037 — Round 37

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4601 · style attribute should not kebab-case variable names
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) any ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour If you put this in playground, you should get a red text twice: ```js import { component$, useStyles$ } from '@user.io/qwik'; export default component$(() => { useStyles$(` .foo { color: var(--myColor); } `) return <> <p class="foo" style={{'--myColor': 'red'}}>Not red</p> <p class="foo" style={'--myColor: red'}>Red!</p> </> }); ``` ### Actual Behaviour you get black text for the first p because the variable name gets…

### CASE-4615 · Dynamic styles are broken: Internal server error: Qrl($) scope is not a function
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos
- **Signals**: 👍2 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.0 ### Operating System (or Browser) macOS ### Node Version (if applicable) 16.x ### Which component is affected? Qwik Runtime ### Expected Behaviour It should parse CSS with variables in the template string. ### Actual Behaviour When you try to use `useStyles$` or `useStylesScoped$` it fails if you put any variable in the string. For example this breaks: ```js const className = "test" const css = `.${className} { background: red; }`; useStyles$(css); ``` with the following error: ```error Qrl($) scope is not a function, but it's capturing local identifiers: className…

### CASE-4657 · Loss of focus when hydration happens
- **Principles**: P-E1, P-E2, P-E4, P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬2 · closed · labels: bug
- **Excerpt**: The simple starter reproduces the problem. When typing the first time in the text input, the focus is lot.

### CASE-4679 · [🐞] v2 module scoped variables are not wrapped in signal
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/optimizer/V2
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug The optimizer should wrap module scoped variables in signal. ```ts /*#__PURE__*/ _jsxSorted(Cmp, { globalObj: globalObj[foo.value] }, { foo: foo }, null, 3, "4e_1", { fileName: "app.tsx", lineNumber: 23, columnNumber: 7 }) ``` The same issue from v1: [link]][ref] ### Reproduction [link] ### Steps to reproduce ```ts export default component$(() => { const foo = useSignal(0) return ( <div> <button onClick$={() => { foo.value === 0 ? foo.value = 1 : foo.value = 0; }}>click</button> <Cmp globalObj={globalObj[foo.value]}…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4602 · Css siblings has issue with a component inline style tag
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour All boxes should be the same height in the example stackblitz. ### Actual Behaviour A style tag is inserted inside one of the <Icon/> components via useStyles$. This can cause css classes that use sibling modifiers to count the style tag as a sibling as shown below. see [link] ### Additional Information Can this issue be fixed by Qwik inserting the style tag into the document head?

### CASE-4603 · New Cookie support doesn't set multiple cookies
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.1 ### Operating System (or Browser) Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour I expect to be able to set/delete multiple cookies at once. ### Actual Behaviour It only sets the last one. ### Additional Information Here is a simple test. Only "test3" will be set. ``` import { RequestHandler } from "@user.io/qwik-city"; export const onGet: RequestHandler = ({ cookie, response }) => { cookie.set("test1", "value3"); cookie.set("test2", "value2"); cookie.set("test3", "value3") return response; }

### CASE-4604 · Extending HTMLAttributes with a non-standard property results in TypeScript error
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, firefox 106, windows, typescript
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Windows 10 Pro 21H2 Firefox 106.0.5 ### Node Version (if applicable) 18.11.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour The `xyz` property introduced in order to use AnimXYZ should not trigger a TypeScript error given the following module augmentation declaration: ```ts // declaration.d.ts import { AriaAttributes, DOMAttributes } from "@user.io/qwik"; declare module '@user.io/qwik' { interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> { xyz?: string | undefined; } } ``` ### Actual Behaviour…

### CASE-4605 · Cookie property doesn't exist in RequestEvent
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Windows, Chrome Version 107.0.5304.88 (64 bits) ### Node Version (if applicable) v16.14.2 ### Which component is affected? Qwik City ### Expected Behaviour Based on the docs from Qwik City, the `RequestHandler` function has to export a `cookie` property in his `RequestEvent` parameter. Ref: [link] ### Actual Behaviour After check the interface from `RequestEvent` I can't find any `cookie` property. I can only get the cookies from `request` headers, which is fine, but I think the `cookie` interface let things more easier to handle. ###…

### CASE-4606 · qwik city: refresh after SPA navigation breaks history
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, chromium
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version latest ### Operating System (or Browser) firefox and chromium ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour When navigating pages in SPA mode using `<Link>`, history navigation should still work after refreshing a page. ### Actual Behaviour After you do an SPA navigation, if you refresh the page, history navigation (back button) no longer works. ### Additional Information Steps to reproduce: 1. Use the Qwik starter. 2. Click the purple button at the bottom, SPA to the `/flower` page. 3. Refresh the page. 4.…

### CASE-4607 · qwik-react: How to use react lazy() and Suspense?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, react
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) macOS, Chrome latest ### Node Version (if applicable) v18.11.0 ### Which component is affected? Qwik React ### Expected Behaviour My react-component import contains the side effect of accessing the window object, so I want to wrap it in a lazy function, so that the doesn't work, I would like to know how to handle this case in qwik? example code ```jsx // integrations/react/lexical.tsx /** @user react */ import { qwikify$ } from "@user.io/qwik-react"; import { Loader, MantineProvider } from "@user/core"; import { lazy, Suspense } from…

### CASE-4608 · Conditionally rendered slots changes scoped style stack
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.12.0 ### Operating System (or Browser) Mac OS 12.5.1, Chrome 106.0.5249.119 ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour When Slots of components are conditionally rendered on the document, the scoped styles stack correctly assigns the consuming component's scoped style class to the slotted elements. ### Actual Behaviour When Slots of components are conditionally rendered on the document, the scoped styles stack fails to assign the correct class to the slotted elements. Instead, it assigns the `scopeId` class…

### CASE-4609 · Failing to build with `build.server`
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: opera, firefox, linux, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Linux / Firefox ### Node Version (if applicable) 18.3 ### Which component is affected? Qwik City ### Expected Behaviour I just used the Basic example from `npm create qwik`, and added the CloudFlare Pages integration. ### Actual Behaviour Then ran `npm run build` and it builds OK, thing is when I run `build.server` it errors with ``` [sigma@user qwik-cf-kv]$ yarn build.server yarn run v1.22.19 $ vite build --ssr src/entry.cloudflare-pages.tsx vite v3.1.7 building SSR bundle for production... ✓ 12 modules transformed.…

### CASE-4610 · Sass attribute selctor does not compile
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox/, chrome, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Firefox/Chrome ### Node Version (if applicable) 18.11.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behavior I installed Sass using the following instructions. [link] Everything has been working fine up until today when I created a simple attribute selector written in scss. The attribute selector is completely ignored. ``` [class^='col-'] { float: left; &:not(:last-child) { margin-right: $gutter-horizontal; } } ``` I would have expected an output such as: ```.row { max-width: 114rem; margin: 0 auto; }…

### CASE-4613 · The useLocation().query object values should return string or Array<string>
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version qwik 0.11.0, qwik city 0.0.112 ### Operating System (or Browser) chrome ### Node Version (if applicable) 16.14.2 ### Which component is affected? Qwik City ### Expected Behaviour The url `example.com?brand=amd&brand=intel&category=cpu` contains two "brand" query params and one "category" query param. useLocation().query should return `{ brand: ['amd', 'intel'], category: 'cpu' }` ### Actual Behaviour useLocation().query returns `{ brand: 'intel', category: 'cpu' }`, only returning the last "brand" query param. ### Additional Information demo [link]

### CASE-4614 · Store in Context is not working as expected..
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome/, safari/, firefox
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.0 ### Operating System (or Browser) Chrome/Safari/Firefox ### Node Version (if applicable) 16.x.x ### Which component is affected? Qwik Runtime ### Expected Behaviour When I press the "Increment" button, the increment should be displayed everywhere. [link] ### Actual Behaviour The app returns an error "**Uncaught (in promise) Error: close not found**". ### Additional Information However, if I comment out the < div > in line 49 in the module "router-head", then the app works as intended.

### CASE-4616 · DocumentHead meta, links, and styles break if array push is used
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version qwik 0.11.0, qwik city 0.0.112 ### Operating System (or Browser) chrome ### Node Version (if applicable) stackblitz 16.14.2, local env 18.9.0 ### Which component is affected? Qwik City ### Expected Behaviour Should render meta tags, link tags and styles correctly. ### Actual Behaviour No meta tags are displayed if you array push a tag onto the meta array. Breaks links and styles as well. ```ts export const head: DocumentHead<any> = () => { let meta: DocumentMeta[] = [ { property: 'og:title', content: 'title.........', }, ]; // push breaks meta tags meta.push({ property:…

### CASE-4617 · useClientEffect$ in custom hook breaks
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106, macos
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) MacOS 12.6 - Chrome 106.0.5249.103 ### Node Version (if applicable) v16.13.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour Using a custom hook that wraps `useClientEffect$` multiple times would each work independently In the below example: 1) I expect the first "false" to change to "true" after .5 seconds 2) I expect the second "false" to change to "true" after 1 second ```jsx import { component$, useClientEffect$, useSignal } from "@user.io/qwik"; export function wait(duration: number) { return new…

### CASE-4618 · Ternary operators break template subscriptions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 106
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) Chrome 106 ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour Using a ternary operator in a template should conditionally show/hide content. ### Actual Behaviour The store subscription doesn't work with ternary operators. If you add another subscription next to the ternary operate, both continue to work. ### [Reproduced example]([link]) ### Additional Information _No response_

### CASE-4620 · Endpoint files are being loaded by the browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 105, macos
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) macOS 12.0.1, Chrome 105.0.5195.125 ### Node Version (if applicable) v16.2.0 ### Which component is affected? Qwik City ### Expected Behaviour A file ending in `.ts` should not be downloaded at all as this is not a component. [See docs]([link]) ### Actual Behaviour When navigating, endpoint files are being downloaded by the browser even if they aren't referenced elsewhere in the code. This can cause apps to break if they run code outside of the endpoint function, and of course other implications if the files load on production. ###…

### CASE-4622 · useClientEffect does not seem to work with track until after it is woken up.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/runtime
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour [reproduction]([link]) There is a clock below the fold. Reproduction: click on the "Start clock" button Expectation: the clock's useClientEffect function should run and print out "clock started" in console instead nothing happens. Scroling the clock into view does produce the console.log output. ### Actual Behaviour Nothing happens ### Additional Information _No response_

### CASE-4623 · States are changed is in an un-appropriate manner while slow internet
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) MAC OS - Browser (Chrome) ### Node Version (if applicable) v16.13.1 ### Which component is affected? Qwik Runtime ### Expected Behaviour Need to work fine in low internet mode. e.g. fast/slow 3G. States are changed is in an un-appropriate manner. ### Actual Behaviour States are changed is in an appropriate manner. ### Additional Information When I click on the increment button that time they call the network to fetch `onClick$={() => store.count++}` js chunk file. Due to slow internet is not loaded fast so when users click on the button…

### CASE-4624 · useEndpoint onGet stays on "onPending" step
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos
- **Signals**: 👍5 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) MacOS/Chrome ### Node Version (if applicable) 16.17.0 ### Which component is affected? Qwik City ### Expected Behaviour Promise should be resolved and "onResolved" should be rendered ### Actual Behaviour Resource component stays on "onPending" indefinitely ### Additional Information First tried to implement an actual API call (which works perfectly for routing purposes). When that didn't work, I copied the code from the [documentation]([link]), that also didn't work.

### CASE-4625 · Examples don't load due to cert error from jsdelivr
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version web ### Operating System (or Browser) chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour When I go to [link] it should show an editor ### Actual Behaviour but I see a loading error in my log for [link] The certificate they use is invalid. ### Additional Information _No response_

### CASE-4626 · Navigation broken after page reload
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, windows
- **Signals**: 👍3 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Windows/Chrome 104 & FF 104 ### Node Version (if applicable) 18 ### Which component is affected? Qwik City ### Expected Behaviour - Start a new project with `npm create qwik@user` - Begin dev server with `npm run dev` - Click link to `/flower` - Navigate forward/back with browser buttons successfully - Reload page - Attempt to navigate with browser buttons - Expect they continue to work after reload ### Actual Behaviour - After page reload, navigation fails. The URL is updated but the page is not navigated to. The link is using a…

### CASE-4627 · useStyles$, useStylesScoped$: style "literal strings" are not hot-reloaded even though page refreshes
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: opera, edge, windows, vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Windows, Edge ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour Expected styles to update when changing them in the code, i.e.: ``` useStylesScoped$(` .header { font-size: 2rem; background: orange; // adding/removing/changing this, for example } `); ``` ### Actual Behaviour The page refreshes but the change is (usually) not reflected in the browser: Somewhat rarely, the page refreshes twice, once on code change and second when I click an interaction/button, and…

### CASE-4628 · [BUG]: Types - Async components do go against `component$` type signature
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 105
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Firefox 105.0 ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour The code should not show any errors. ### Actual Behaviour This component is showing Type errors: ```ts import { component$ } from '@user.io/qwik'; export const App = component$(async () => { return <p>Hello Qwik</p>; }); ``` ``` Argument of type '() => Promise<JSX_2.Element>' is not assignable to parameter of type 'OnRenderFn<{}>'. Type 'Promise<Element>' is missing the following properties from type…

### CASE-4629 · Redirecting from inside an onPost to another route calls the onPost of the second route.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 18 ### Which component is affected? Qwik City ### Expected Behaviour When redirecting using `throw response.redirect('/another-page')` from within an `onPost`, it should redirect to `/another-page` and run the `onGet` method, if present. Not the `onPost` method. ### Actual Behaviour When redirecting using `throw response.redirect('/another-page')` from within an `onPost`, it redirects to `/another-page` and calls the `onPost` method within that route. ### Additional Information Reproducible code:…

### CASE-4630 · useServerMount$ does not work with Link
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, linux
- **Signals**: 👍2 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome on Linux Mint ### Node Version (if applicable) 16.17.0 ### Which component is affected? Qwik City ### Expected Behaviour When Link'ing to a route that has a useServerMount$ defined it will either - execute useServerMount$ if not yet loaded into the browser - ignore useServerMount$ if already in the browser ### Actual Behaviour ![qwik_error]([link]) An error occurs from the debugger saying "Code(22): Components using useServerMount() can only be mounted in the server, if you need your component to be mounted in the client, use…

### CASE-4632 · With a top level parameterised route CSS/assets from `build` fail to load when deployed to Netlify Edge Functions
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version Qwik: 0.9.0, Qwik City 0.0.111 ### Operating System (or Browser) Chrome, mac OS ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour I have a top-level route using a parameter, and a second-level parameterised route too: ``` ❯ tree src/routes/ src/routes/ ├── [from] │ ├── [to] │ │ └── index.tsx │ └── index.tsx ├── index.tsx ├── layout.tsx └── service-worker.ts ``` I'd really like to keep things this way to match URLs of my existing site, e.g. [link] I'd also like static assets like [link] to load. I am using Netlify…

### CASE-4633 · Argument of type '() => Promise<JSX_2.Element>' is not assignable to parameter of type 'OnRenderFn<{}>'. Type 'Promise<Element>' is missing the following properties from type 'JSXNode<any>': type, props, keyts(2345)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Windows 10, Google Chrome ### Node Version (if applicable) v16.16.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour The source is supposed to compile and no errors are supposed to show in the IDE. ### Actual Behaviour Shows the following error. ``` Argument of type '() => Promise<JSX_2.Element>' is not assignable to parameter of type 'OnRenderFn<{}>'. Type 'Promise<Element>' is missing the following properties from type 'JSXNode<any>': type, props, keyts(2345) ``` ![image]([link]) ![image]([link]) ### Additional…

### CASE-4634 · tabindex issue due to incorrect typing?
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour I expect to be able to set a tabindex on an element. ### Actual Behaviour When component is re-rendered the tabindex is removed from the dom. ### Additional Information I believe this is due to an incorrect typing, but I'm not sure if it's another issue. In the jsx-generated.ts file it's typed as `tabIndex` in HTMLAttributes but `tabindex` in SVGAttributes. Notice the capitalization of the `I`. When `tabIndex` is…

### CASE-4635 · public files conflict with dynamic route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, macos
- **Signals**: 👍0 💬2 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version qwik: 0.0.108, qwik-city: 0.0.108 ### Operating System (or Browser) MacOS Monterey 12.3.1 / Chrome 104.0.5112.79 ### Node Version (if applicable) 14.19.1 ### Which component is affected? Qwik City ### Expected Behaviour favicon.ico load from public/favicon.ico ### Actual Behaviour favicon return 404, it's loaded from routes instead of public files ### Additional Information so I make routes like this: - src/routes/[category]/index.tsx - src/routes/index.tsx - src/routes/layout.tsx and it seems favicon default loads from public/favicon.ico, because I have this route…

### CASE-4636 · The useResource$ hook is not fetching the resource properly, causing an error in the edge function. (works locally, but not in deployment via Netlify Edge middleware).
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, opera, ubuntu, linux
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version v0.0.105 (Qwik) and v0.0.104 (Qwik City) ### Operating System (or Browser) Ubuntu Linux, through WSL ### Node Version (if applicable) v18.8.0 ### Which component is affected? Qwik City ### Expected Behaviour The data (that does show up properly at the endpoint by the way) should be loaded into the useResource$ hook instance as expected, and display on the screen. ### Actual Behaviour The resource is constantly in the loading state, and the edge function through netlify displays an error as such: ![image]([link]) The endpoint displays the correct REST data, but it is unable to…

### CASE-4639 · [BUG] State with array don't refresh/rerender in client.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.100 ### Operating System (or Browser) W11 - chrome ### Node Version (if applicable) 16 ### Which component is affected? Qwik Runtime ### Expected Behaviour Update the array in the state and see the changes reflected in HTML ### Actual Behaviour The array is updated in the state, the changes are reflected in the console, but the changes are not reflected in HTML. ### Additional Information [link]

### CASE-4640 · Express: optional parameter breaks everything
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.0.100 ### Operating System (or Browser) Chrome ### Node Version (if applicable) v16 ### Which component is affected? Qwik City ### Expected Behaviour A project folder like this: ``` - routes - [...skuId] - index.tsx ``` should work as in `dev --mode ssr` when an _Express.js_ server is used. ### Actual Behaviour Reproduction: [link]]%2Findex.tsx Stop the Vite server and run: `npm run build && npm run serve` Currently the optional parameter `[...skuId]` _located in the root_ of the `routes `directory cause the following: - The `index` components is called multiple times (see…

### CASE-4641 · [0.0.100] SPA routing where both current and navigated route have use-client-effect results in error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 103
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.100 ### Operating System (or Browser) Fedora 37, Firefox 103 ### Node Version (if applicable) 16.14.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour Routing from page A which uses `useClientEffect$` to page B which also uses `useClientEffect$` should work without issues. ### Actual Behaviour Routing as explained results in following error: ``` GET [link] 405 (Method Not Allowed) useEndpoint_useResource_3SNE8VxnEag @ useendpoint_useresource_3sne8vxneag.js:10 useInvoke @ use-core.js:46 (anonymous) @ qrl-class.js:58 then @ promises.js:19 (anonymous) @…

### CASE-4643 · [CITY-0.0.26] Using Link with a route that includes a parameter cashes Qwik or Vite
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 103, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) Fedora 36, Firefox 103 ### Node Version (if applicable) 16.14.0 ### Which component is affected? Qwik City ### Expected Behaviour To be able to navigate to following route: ```services/[service_id]/edit/index.tsx``` with the following `Link`: ```html <Link href="/services/ID_GOES_HERE/edit">Edit</Link> ``` And not only with: ```html <a href="/services/ID_GOES_HERE/edit">Edit</a> ``` ### Actual Behaviour The introduction of `Link` component is great addition to Qwik City as it means apps that depend on live-connections don't have to…

### CASE-4644 · input field onInput is not working properly
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, chrome, ubuntu
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) Chrome(Ubuntu 20.04) ### Node Version (if applicable) 16.16.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour `onInput` should do what we passed in callback like set the input value in `store`. ### Actual Behaviour onInput is not working as expected .It only log the InputEvent on input text change without any console.log ### Additional Information ```jsx <input type="text" value={store.text} class="bg-gray-700 py-2 px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none rounded-md" onInput$={()=>console.log("hi")}…

### CASE-4645 · [Bug] RTL Support From Html Tag
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version v0.0.34 ### Operating System (or Browser) windows chrome ### Node Version (if applicable) 18.6.0 ### Which component is affected? Qwik City ### Expected Behaviour From root.tsx: By setting Right To Left inside of the Html tag, The page's direction must be RTL ``` export default () => { return ( <Html lang="ar" dir="rtl"> <Head /> <Body /> </Html> ); }; ``` ### Actual Behaviour But the page's direction is still in LTR mode ### Additional Information If I put direction in global.css it's working ``` :root{ direction: rtl; } ``` _No response_

### CASE-4646 · Expected TreeShaking but whole library is downlaoded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.37 ### Operating System (or Browser) Mac Chrome ### Node Version (if applicable) 18 ### Which component is affected? Qwik Runtime ### Expected Behaviour When I write `import { randUuid } from @user/falso;` & resume my App, I expect that only the JS-Code of `randUuid` is downloaded in order to perform the operation. ### Actual Behaviour When I write `import { randUuid } from @user/falso;` & resume my App, the whole Library is loaded from the server. [link] ### Additional Information Reproduction ``` git clone [link] cd kanban-board # make sure that Node 18 is installed npm…

### CASE-4647 · useResource$ throws error if executed by track-Function
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.37 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 18 ### Which component is affected? Qwik Runtime ### Expected Behaviour When using `useResource$` with `track`, the code the resource-Function is successfully executed (e.g. reloading data from an API). ### Actual Behaviour An error is thrown: ``` "Code(22): Components using useServerMount() can only be mounted in the server, if you need your component to be mounted in the client, use "useMount$()" instead" ``` ![image]([link]) ### Additional Information ## Reproduction ``` git clone [link] cd…

### CASE-4648 · Qwik Server makes endless API-Requests
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: opera, chrome
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.34 ### Operating System (or Browser) Mac Chrome ### Node Version (if applicable) 16 ### Which component is affected? Qwik Runtime ### Expected Behaviour - When a wrong API-Endpoint is mistakenly used, SSR fails because the Endpoint cannot be reached. ### Actual Behaviour - A previous request that was successful is executed endless times until the server process gets terminated. [link] ### Additional Information ## Reproduction - You can refere to [this video]([link]) ```bash git clone [link] cd kanban-board npm install # Console 1 npm run app:start # Console 2 npm run…

### CASE-4649 · QWIK ERROR Error: server can not rerender
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.34 ### Operating System (or Browser) Windows Chrome ### Node Version (if applicable) 16 ### Which component is affected? Qwik Runtime ### Expected Behaviour Either the server does not an error or an error that helps to resolve the underlying problem. ### Actual Behaviour Server throws an error but the App is running fine. ### Additional Information ## Motivation Currently, I do not understand the Console output of Qwik. To me, it is hard to analyse what I have messed up. Especially the messages `QWIK ERROR Error: server can not rerender` & `QWIK Dropping render. State…

### CASE-4652 · [Alpha]: Context does not work when provided through a provider component using content projection
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, typescript
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.25 ### Operating System (or Browser) Edge ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour I would expect the following to work: ```typescript interface Colors { primary: string; } const ColorContext = createContext<Colors>("colorContext"); const ColorProvider = component$(({ colors: Colors }) => { const state = useStore(colors); useContextProvider(ColorContext, state); return <> <Slot /> </>; }); const Text = component$(() => { const colors = useContext(ColorContext); return <p>Primary color:…

### CASE-4663 · [🐞][Netlify] :: Qwik Edge Functions bundling qwik-city-not-found-paths
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, edge 3
- **Signals**: 👍0 💬1 · open · labels: bug/router
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I created a new qwik app `npm create qwik@user` and then I tried to deploy it to netlify using `npm run qwik add netlify-edge`, once is desployed netlify is throwing this error: ``` 3:17:55 PM: Edge Functions bundling 3:17:55 PM: ──────────────────────────────────────────────────────────────── 3:17:55 PM: ​ 3:17:55 PM: Packaging Edge Functions from .netlify/edge-functions directory: 3:17:55 PM: - entry.netlify-edge 3:17:55 PM: No Edge Functions were found in netlify/edge-functions directory 3:17:56 PM: Failed during stage…

### CASE-4676 · [🐞] The website [link] does not load images
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, ios, ios 18, mobile
- **Signals**: 👍0 💬1 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug <img width="689" height="895" alt="Image" src="[link] /> <img width="1434" height="968" alt="Image" src="[link] /> ![Image]([link]) <img width="844" height="300" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell MacOSX: Chrome Version 140.0.7339.81 (Official Build) (arm64), Safari Version 18.6 (20621.3.11.11.3); iOS: Safari mobile (iOS 18.6.2); By Web service: site-shot. ``` ### Additional Information I apologise, this may not be what you expected, but since…

### CASE-4684 · Regression in handleAttributeBindingDirective: el.setSelectionRange is applied naively
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬35 · closed · labels: bug
- **Excerpt**: Please bear with me as this is the first issue I've ever opened... Unfortunately the fix from PR [ref] has introduced a bug when binding a value to a subset of input types. According to the [MDN page on setSelectionRange()]([link]): >Note that accordingly to the WHATWG forms spec selectionStart, selectionEnd properties and **setSelectionRange method apply only to inputs of types text, search, URL, tel and password**. Chrome, starting from version 33, throws an exception while accessing those properties and method on the rest of input types. For example, on input of type number: "Failed to…

### CASE-4686 · Alpine doesn't work for me on IOS (Safari and chrome)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, edge, ios, android, windows
- **Signals**: 👍2 💬21 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/2805 <div type='discussions-op-text'> <sup>Originally posted by **cluzstudio** April 4, 2022</sup> I have a project with the TALL stack without any extra dependencies, it runs perfectly on Android and Windows, on chrome and edge. But in IOS, Safari or chrome alpine doesn't work for me at all... Any suggestions? **In app layout** ` <script src="//unpkg.com/alpinejs" defer></script> ` ` @user ` -- Content `@user` **Ej. Menu Alpine** `<div x-data="{menu:false}">` ... ` <button type="button" x-on:click="menu=!menu" >` ... ` <div x-cloak x-show="menu" >` ...…

### CASE-4689 · website breaking x-transition bug (update: 1.20.0)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: This post was originally about implementing transition lists ([link]), however, the more I use transition, the more I realise that they are slightly buggy and may need work. I feel like I really good thing to implement is a way of queuing animations so it doesn't happen all at once ([link]) see "in-out" and "out-in". Maybe you can add x-transition to a template tag for this to work. For the bugs that I have come across: 1. Animations will not fire when called too often ([link]) this is happening to me on FireFox, you'll see if you press next often enough the text will disappear. 2. This maybe…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4611 · Always get 404 Not Found when request to the page using curl
- **Principles**: P-A3, P-H1 · **Env**: opera, windows
- **Signals**: 👍2 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Windows 10 ### Node Version (if applicable) v16.18.0 ### Which component is affected? Starters / CLI ### Expected Behaviour It should return HTML by default. ### Actual Behaviour It return HTTP 404. ### Additional Information This is confusing. By default, curl should get HTML page successfully by default. ![image]([link]) Qwik starter's node server handle `Accept: */*` incorrectly. ![image]([link]) Qwik starter's node server handle `Accept: text/html` correctly. ![image]([link])

### CASE-4655 · [BUG] Can't verify on discord.
- **Principles**: P-A3, P-H1 · **Env**: desktop
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: **Describe the bug** Unable to join discord & not sure where will be the best place to ask about it **To Reproduce** Steps to reproduce the behavior: 1. Click on the link to discord & under #verification, I see the following: ![image]([link]) 2. Clicking on the link leads me to the site & I login using discord and see this: ![image]([link]) No idea how to proceed **Expected behavior** A clear and concise description of what you expected to happen. **Screenshots** If applicable, add screenshots to help explain your problem. **Desktop (please complete the following information):** - Version…

### CASE-4656 · Implement Isolate concept to allow multiple Qwik apps to coexist on same page (support lazy loading / routing)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/enhancement/runtime
- **Excerpt**: # Isolate The working name for the feature: `Isolate` (Open to discussion) # Mental Model - Isolate creates an island where serialization (`<script type="qwik/json">...</script>`) is independent from other Isolates on the page - When Isolates serialize/deserialize they do so independently from other Isolates - Caveat: In some cases, the parent isolate may be forced to deserialize in order to share object references # Serialization format ```html <html> <body> <button q:obj="myState" on:click="./chunk-a#click[0]">click me!</button> <div q:isolate> <button q:obj="otherState"…

### CASE-4658 · [🐞] [V2] Image exports with extra query parameters don't resolve properly on SPA / HMR update
- **Principles**: P-A3, P-H1 · **Env**: linux, vite
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug [ref] was fixed but another error popped up as of beta 36 and 37 ``` 3:31:45 p.m. [vite] Internal server error: Failed to resolve import "virtual:/run/media/sab/DataLinux/Projects/saboooor/acornmc.org/src/components/images/docs.png.qwik.jsx?jsx=&format=avif&w=1280%3B1920%3B2560%3B3840" from "virtual:/run/media/sab/DataLinux/Projects/saboooor/acornmc.org/src/components/images/docs.png.qwik.jsx?jsx=&format=avif&w=1280%3B1920%3B2560%3B3840". Does the file exist? Plugin: vite:import-analysis File:…

### CASE-4659 · [🐞]: Footer gets cut-off on the page
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug The footer gets cut-off and does not render properly / completely. <img width="2239" height="438" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce - Head to the home page and scroll over to the bottom - It can also be seen on the Ecosystem and Blog tabs ### System Info ```shell System: OS: Linux 6.12 Debian GNU/Linux 13 (trixie) 13 (trixie) CPU: (16) x64 12th Gen Intel(R) Core(TM) i5-1240P Memory: 8.29 GB / 15.35 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 20.20.0 - /usr/bin/node…

### CASE-4664 · [🐞] : Cloudflare Pages: Image hash mismatch between build output and rendered srcset
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When deploying a Qwik app to **Cloudflare Pages**, the generated image hash in `dist/assets` does not match the hash referenced in the rendered HTML `srcset`. Example from build output: ``` dist/assets/Bruzt34q-babypool.webp 23.44 kB ``` But rendered HTML contains: ```html <img decoding="async" loading="lazy" alt="babypool logo" srcset="/assets/Bo0RkHqG-babypool.webp 400w" width="400" height="500" class="logo-img" q:key="a9_0" /> ``` Notice: * Built asset: `Bruzt34q-babypool.webp` * HTML reference: `Bo0RkHqG-babypool.webp` The…

### CASE-4666 · [🐞]How to set q-data.json? The URL returned by v={hash} does not include this hash
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · open · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug <img width="948" height="248" alt="Image" src="[link] /> This will cause the browser address on the redirect page to display this hash ### Reproduction / ### Steps to reproduce useVisibleTask$(() => { if (typeof window !== 'undefined') { const hash = document.documentElement.getAttribute('q:manifest-hash'); const _fetch = window.fetch; window.fetch = function fetch(...args) { if (typeof args[0] === 'string' && args[0].endsWith('q-data.json')) { args[0] += `?v=${hash}`; } return _fetch.apply(this, args); }; } }); ### System…

### CASE-4678 · [🐞] v2 useTask executed for wrong path
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug After some SPA navigation task is executed for wrong path Example: <img width="888" height="892" alt="Image" src="[link] /> Probably related to useLocation() hook and store. Store effects should goes through scheduler and it should fix the issue. This is waiting for the scheduler rewrite ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell - ``` ### Additional Information _No response_

### CASE-4680 · [🐞] Unintended debugger statement in logErrorAndStop causes execution to pause
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hi team 👋, While using the library, I noticed that the logErrorAndStop function includes a debugger statement on [line 24]([link]]/blob/376aea1e18b718115a7caef007d54d70f9d30ca4/packages/qwik/src/core/util/log.ts#L14-L26), which causes execution to halt whenever devtools are attached — even if the consumer is not intending to debug the library itself. <img width="771" alt="Image" src="[link] /> I’d like to know if this was added intentionally and, if so, what the purpose is. Is there a specific debugging use case this supports…

### CASE-4695 · $nextTick doesnt work properly
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Here's codepen i created to illustrate the issue: [link] I created list of images and initialized slider script **swiper** on it. So far so good. Then I swap these images and need re-initialize slider so it is displayed correctly. I attached updating slider to button in codepen example. I used `$nextTick`, so slider updates only after now images are inserted. But id does not seems to work. I need to click button two times in order to make it work.

### CASE-4700 · x-text doesn't work with SVG elements
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I have an SVG image that is embedded in an HTML page inside an Alpine component. As part of the SVG there's a text element that I would like to bind to some Alpine data. Unfortunately, `x-text` does not seem to work for SVG elements. [Example]([link]) I believe this is because [`x-text`tries to set `.innerText` on the element]([link]]/blob/master/src/directives/text.js#L7), but SVG elements, or at least `<text>` don't have an `.innerText` attribute. Something like this could work: ```diff - el.innerText = output + if (el.hasAttribute('innerText') { + el.innerText = output; + } else if…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-4612 · Google font on library starter makes it flasky
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, chromium, windows
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.1 ### Operating System (or Browser) Windows Chromium ### Node Version (if applicable) > 15 ### Which component is affected? Starters / CLI ### Expected Behaviour qwik quick! Qwik app is delayed by an connexion to google fonts but this fonts is not used! ### Actual Behaviour ![qwik-font-family]([link]) ### Additional Information performances after change ![qwik-font-family-without]([link]) Here the changes made: ![qwik-font-family-without___change]([link]) I don't understand the necessity of this font that is not used anywhere as far I looked...

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4619 · Build fails when passing manualchunks to vite
- **Principles**: P-F4 · **Env**: opera, macos, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) macOS Monterey 12.5 ### Node Version (if applicable) 18.1.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour The script `npm run build.preview` should succeed. Reproducible example: [link] (This application is created by `npm create qwik@user`). ### Actual Behaviour When running `vite build --ssr src/entry.preview.tsx` ```sh Invalid value for option "output.inlineDynamicImports" - multiple inputs are not supported when "output.inlineDynamicImports" is true. ``` ### Additional Information Similar issue…

### CASE-4621 · Invalid `manifest` in SSR render is silently ignored
- **Principles**: P-F4 · **Env**: opera, macos
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) macOS ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour When passing an invalid `manifest` to the `renderToStream` function, an error should be thrown or warning logged. ### Actual Behaviour When passing an invalid `manifest` to the `renderToStream` function, no error or warning is logged. Instead it is silently ignored and the SSR render eventually throws a `QWIK ERROR Code(31)` (which is a symbol mapping error). ### Additional Information _No response_

### CASE-4637 · SSR build should use prod mode in build
- **Principles**: P-F4 · **Env**: opera, vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.101 ### Operating System (or Browser) all ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour When building for production using the vite plugin, the SSR build executes in dev mode. While we still want the ssr build to not be minified by default, it's very costly to have qDev enabled. ### Actual Behaviour in prod mode qDev === false ### Additional Information _No response_

### CASE-4638 · QwikCity scaffold for Cloudflare Pages isn't properly hosting pages
- **Principles**: P-F4 · **Env**: opera, windows, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.0.100 ### Operating System (or Browser) Windows ### Node Version (if applicable) 16.13.2 ### Which component is affected? Qwik City ### Expected Behaviour Cloudflare Pages should host static pages. But it is unable to find the server directory from the default scaffolded [[page]].ts ### Actual Behaviour You'll see below that vite builds the server directory properly; however, it's unable to find that file in the cloudflare function ``` 2022-08-20T16:18:12.803262Z 2022-08-20T16:18:12.803491Z > build.ssr 2022-08-20T16:18:12.803682Z > vite build --ssr src/entry.cloudflare.tsx…

### CASE-4650 · [BUG] CSS styles from `global.css` not applied in any starter
- **Principles**: P-F4 · **Env**: opera, chromium 103, linux
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.30 ### Operating System (or Browser) Linux 5.18.6, Chromium 103.0.5060.53 ### Node Version (if applicable) 18.3.0 ### Which component is affected? Starters / CLI ### Expected Behaviour The global styles should be applied, in both, DEV and SSR builds ### Actual Behaviour The styles are never added to the websites. They only seem to be applied when loaded e. g. via useStyles$. ### Additional Information A workaround seems to add the styles to a `component$` using `useStyles$`, which is also how it currently works in the `packages/docs` project: ```ts import styles from…

### CASE-4651 · [BUG] CSS styles from `global.css` not applied in any starter
- **Principles**: P-F4 · **Env**: opera, chromium 102, linux
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.26 ### Operating System (or Browser) Linux 5.18.1, Chromium 102.0.5005.115 ### Node Version (if applicable) 18.3.0 ### Which component is affected? Starters / CLI ### Expected Behaviour The global styles should be applied, in both, DEV and SSR builds ### Actual Behaviour The styles are never added to the websites. They only seem to be applied when loaded e. g. via `useStyles$`. ### Additional Information A workaround seems to add the styles to a `component$` using `useStyles$`, which is also how it currently works in the `packages/docs` project: ```tsx import styles from…

### CASE-4653 · [BUG] Dev SSR script fails in Qwik City Starter
- **Principles**: P-F4 · **Env**: opera, linux, vite
- **Signals**: 👍3 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.21 ### Operating System (or Browser) Linux ### Node Version (if applicable) v16.3.0 ### Which component is affected? Starters / CLI ### Expected Behaviour `npm run dev.ssr` runs the dev server in ssr mode. ### Actual Behaviour The script fails with the following stack trace: ``` 8:37:13 PM [vite] Internal server error: Duplicate implementations of "JSXNodeImpl" found at isJSXNode (../../../dist-dev/tsc-out/packages/qwik/src/core/util/qdev.js:2394:19) at processNode (../../../dist-dev/tsc-out/packages/qwik/src/core/util/qdev.js:2364:9) at processNode…

### CASE-4654 · Typescript issue with Cloudflare Pages
- **Principles**: P-F4 · **Env**: opera, macos, typescript, vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.21-0 ### Operating System (or Browser) MacOS ### Node Version (if applicable) v18.2.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour - Qwik plugin registers with Vite with no issues. - No errors from IDE. ### Actual Behaviour - Plugin runs fine. - However, when using Cloudflare Pages, the plugin registration looks like this: ```js qwikVite({ ssr: { outFile: join(__dirname, "functions", "[[path.js]]"), }, }), ``` - Because the types for `qwikVite` only include an outDir, not an outFile, there's a red line and VSCode gives errors about…

### CASE-4660 · [🐞] v2: Inline qwikloader is emitted inside an open `<svg>` (foreign content), so the script never executes and `q:container` stays `"paused"`
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬1 · closed · labels: bug/runtime/SSR
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In Qwik v2 dev SSR, `SSRContainer.openElement` inlines the `<script id="qwikloader">` tag as soon as the buffered response crosses 30 KB. The check does not consider the current element-frame stack, so when the threshold is crossed while the writer is inside an open `<svg>` (or `<math>`) subtree, the script is written into that subtree. The browser then parses it in HTML5 foreign-content mode, where XML element rules apply inside `<svg>`/`<math>`. The qwikloader source contains substrings like `for(let e=0;e<t.length;e++)`,…

### CASE-4662 · RedirectMessage rethrown before headersSent check crashes Vite dev middleware (router 2.0-beta.32)
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬1 · open · labels: bug/router/V2
- **Excerpt**: ## Summary In `@user.dev/[email]-beta.32`, the node middleware rethrows `RedirectMessage` (an `AbortMessage` subclass) before checking `headersSent`. `RedirectMessage` has no `.message`/`.stack`, so when it propagates to Vite's `viteErrorMiddleware`, `stripVTControlCharacters(undefined)` crashes with `TypeError [ERR_INVALID_ARG_TYPE]`. ## Repro Any `throw redirect(302, '/foo')` in a `routeAction$` or `onRequest$` during `vite --mode ssr`. Example: a successful POST to `/auth/login/` that redirects on success. ## Expected Qwik already sent the 302 response (stream closed) — the middleware…

### CASE-4671 · [🐞] Tailwind - HTML rules do not allow '<script>' at this location
- **Principles**: P-F4 · **Env**: tailwind
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am inserting Tailwind inside globalCss file. I am importing this css file (using ?inline) inside root.tsx using "useStyles$(globalStyles);" This throws an error: QWIK ERROR Code(Q12): SsrError(tag): HTML rules do not allow '<script>' at this location. (The HTML parser will try to recover by auto-closing or inserting additional tags which will confuse Qwik when it resumes.) Offending tag: <script> Existing tag context: <html> [html content] -> <head>, <body> <script> <= is not allowed as a child of html content. HTML rules do…

### CASE-4677 · [🐞] v2: ownerDocument is null during deserialization
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When clicking the "Next" button in a user created pagination component, a runtime error occurs during text node inflation: ## Root Cause The error occurs in Qwik's `vnode_ensureTextInflated` function when trying to access `parentNode.ownerDocument` during DOM deserialization. The `ownerDocument` property is null when the pagination state changes. ## Environment - Qwik v2.0.0-beta.7 - Package Manager: pnpm - SSR mode (`pnpm dev` runs with `--mode ssr`) - Pagination component with conditional rendering and text content ## Core…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4631 · Prevent Default is broken
- **Principles**: P-G4, P-E3 · **Env**: opera, linux
- **Signals**: 👍2 💬2 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Debian Linux ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour Using preventDefault:submit should prevent a form submission. ### Actual Behaviour It doesn't. ### Additional Information [link]

### CASE-4642 · srcDir option from QwikVitePluginOptions is ignored (qwikVite configuration)
- **Principles**: P-G4, P-E3 · **Env**: opera, vite
- **Signals**: 👍3 💬2 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.0.41 ### Operating System (or Browser) Node ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour I may be missing something, but I think `srcDir` option passed to `qwikVite` plugin is not working. If I set it like this: ```js qwikVite({ srcDir: './src/components', }), ``` And then I move `./src/root.tsx` to `./src/components/Root.tsx`, I get this error: ``` [vite-plugin-qwik] Qwik input "......./qwik/blog/src/root.tsx" not found. ``` So I was thinking that maybe this root.tsx was hardcoded. And yes…

### CASE-4669 · [🐞] V2 cursors: inconsistent state changes for multiple items
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬1 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When multiple actions are performed on several instances via context, the item state is inconsistent ### Reproduction [link] ### Steps to reproduce # Reproduction Steps: 1. Run `pnpm install` 2. Run `pnpm dev` 3. Open [[link]]([link]) in your browser 4. Click the Select All checkbox (top level) 5. Notice how all get checked 6. Uncheck the Select All checkbox 7. Notice how only one of the items get unchecked, and it's at random. ## Expected Output Clicking the Select All checkbox should check all items, and unclicking it should…

### CASE-4670 · [🐞] Change input value from "something" to undefined sets the value as "null"
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/good first issue/runtime/PR welcomed/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If you set the value of an input from string to undefined, "null" be written ### Reproduction [link] ### Steps to reproduce Initial value is undefiend 1. Click the first button to set it to 'cool' 2. Click the second button to set it to undefined The value will be null ### System Info ```shell not applicable ``` ### Additional Information _No response_

### CASE-4675 · [🐞] Using “routeLoader$” inside a “hook” breaks re-rendering.
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If “routerLoader$” is used within a hook, and there is a state change that causes a re-render, this re-render is not completed, meaning the UI does not change. ### Reproduction [link] ### Steps to reproduce - Enter 3 in the input field. You will see that although the list refreshes in the console, it does not refresh in the UI. - Comment out line 50, repeat step 1, and see that it now works. ### System Info ```shell System: OS: macOS 26.0 CPU: (8) arm64 Apple M2 Memory: 251.47 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries:…

### CASE-4687 · [Bug] x-for should generate valid/compliant html when used on elements such as lists, tables, selects etc
- **Principles**: P-G4, P-E3 · **Env**: vue, react
- **Signals**: 👍4 💬19 · closed
- **Excerpt**: Currently the `x-for` directive requires you to wrap the element in a `<template>` tag, however, this produces invalid HTML when used with `<ul>`, `<ol>`,`<table>`, `<select>` etc etc. As the HTML spec say only `<li>` elements can live within a ol, or ul - they cannot accept `<template>` (which also messes up css like first-child) E.g. you're required to do.. ```html <ul> <template x-for="item in items"> <li x-text="item"></li> </template> </ul> ``` This obviously isn't valid, although Vue/React/etc can get around this by their virtual dom as they remove the `<template>` tags during rendering…

### CASE-4692 · Nested component is re-initialised when LiveView Assigns is updated
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I wasn't sure if I should file this as a bug or even if this belongs in the Alpine repo - it's an Alpine behaviour that's caused by a LiveView update. Apologies if this doesn't belong here 😅. Here goes... I'm currently writing an emoji lookup feature for my textarea. When you type the `:` character, you'll see a lookup menu 😸. As you type each character, it'll filter the list. On my search page (which has one Alpine component), this works fine. On my main data entry page, the lookup disappears and works intermittently: ![ezgif com-gif-maker (1)]([link]) I've figured out that this is a…

### CASE-4696 · x-model not working on file upload
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: enhancement
- **Excerpt**: This is not working: ```html <div x-data="{ fileName: '' }"> <input type="file" x-model="fileName"> <span x-text="fileName"></span> </div> ``` I have to use something like this instead: ```html <div x-data="{ fileName: '' }"> <input type="file" x-ref="file" @user="fileName = $refs.file.value"> <span x-text="fileName"></span> </div> ```

### CASE-4699 · Unable to x-model a disabled option within a select element
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I often use disabled options in select elements as placeholders, but I can't get that to work with Alpine. I'm not sure if this is a bug or intentional. ### Example [link] ### Expected behaviour The disable option (Choose an option) should be selected ### Current behaviour The first option (Option one) is selected ### Notes I've included an example without Alpine that demonstrates the browser native behaviour that I'd expect to be replicated in Alpine.

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4661 · [🐞] useVisibleTask$ on SPA with intersection calls right away
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ## `useVisibleTask$` with `intersection-observer` strategy fires immediately during SPA navigation ### Describe the bug `useVisibleTask$` with the default `intersection-observer` strategy does not respect visibility during SPA (client-side) navigation. Once the task's code has been downloaded, it executes immediately after render — even if the element is not visible in the viewport. This only happens during SPA page transitions. On SSR → resume, the behavior is correct: the qwikloader sets up an `IntersectionObserver` via the…

### CASE-4672 · [🐞] v2: server-timing is missing in local SSR server
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/router/V2
- **Excerpt**: ### Which component is affected? Qwik Router ### Describe the bug Before updating to v2, we've been using the Server-Timing data to gauge the performance of tasks running inside routeLoaders$ After updating we noticed that they were missing. After adding breakpoints inside request-handler/index.mjs I could see this snippet of state: <img width="1198" height="718" alt="Image" src="[link] /> serverRequestEv.mode is now "server" instead of "dev" for whatever reason. If I do a find/replace for "dev" checks and swap them to "server" just so it all passes and runs, I can see the server-timing…

### CASE-4674 · [🐞] [v2] Props should be reactive
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug We’re using Qwik 2 beta 10 for building our app and stumbled with the following issue (see repro link). If we pass `image` prop of `<ResponsiveImage>` component as `generateImage(props.data)` expression, none of `useTask` or `useComputed` of `ResponsiveImage` are updated (computed is updated only once when client-side components are loaded). But if we pass `image` as computed signal, everything works as expected. After debugging, I found out that `task` callback of `useTask` expects a signal to be read to create effect…

### CASE-4693 · Invalid multiple element root error on IE11
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I'm not sure if I am doing something wrong, but for some reason every `x-for` on IE causes the following warning to be shown in the console even though I only have one child node in my loop. The error is not displayed in Chrome. ``` Alpine: <template> tag with [x-for] encountered with multiple element roots. Make sure <template> only has a single child node. ``` I can replicate the problem even with a very basic application like this: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" />…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4665 · [🐞] v2: `cleanup` from `useVisibleTask$` does not run when navigating away from a route with a `layout.tsx`
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug A route that has any `layout.tsx` file, will not run any `cleanup` function from `useVisibleTask$`. Given 2 simple routes: `src/routes/index.tsx` ```tsx import { component$, useVisibleTask$ } from "@user.dev/core"; import { Link } from "@user.dev/router"; export default component$(() => { useVisibleTask$(({ cleanup }) => { console.log("entry /"); cleanup(() => {console.log("cleanup /")}); return () => {console.log("return /")}; }); return ( <div> <p>You are in /</p> <Link href={`/foo/`}> <button>To Foo</button> </Link>…

### CASE-4681 · [🐞] `useDebouncer$` from docs has broken types
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · open · labels: bug/types/PR welcomed
- **Excerpt**: ### Describe the bug in [qwik's docs there is a page that generously shares code for a `useDebouncer$` hook ]([link])that works fine, but has broken type definitions, causing it to break the application in the moment of build here is the debouncer code: ```tsx export const useDebouncerQrl = <A extends readonly unknown[], R>( fn: QRL<(...args: A) => R>, delay: number, ): QRL<(...args: A) => void> => { const timeoutId = useSignal<number>(); return $((...args: A): void => { window.clearTimeout(timeoutId.value); timeoutId.value = window.setTimeout((): void => { void fn(...args); }, delay); }); };…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4667 · [🐞] bind:value on jsxSorted props
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug This code will not get bind:value transformed because `_jsxSorted` doesn't do that: ```tsx import { component$, useSignal } from '@user.dev/core'; export default component$(() => { const Cmp = Math.random() >= 0.5 ? 'button' : 'input' const sig = useSignal(0) return ( <div> <Cmp bind:value={sig} /> </div> ); }); ``` This gets transformed to ```js import { _jsxSorted } from "@user.dev/core"; import { useSignal } from "@user.dev/core"; export const app_component_QbmWc3TlyqA = ()=>{ const Cmp = Math.random() >= 0.5 ? 'button' :…

### CASE-4668 · [🐞] 'origin' does not exist in type 'QwikCityBunOptions'
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```js // Create the Qwik City Bun middleware const { router, notFound, staticFile } = createQwikCity({ render, qwikCityPlan, static: { cacheControl: "public, max-age=31536000, immutable", }, origin: process.env.ORIGIN, }); ``` bun run build ```shell transforming (150) node_modules/zod/dist/esm/v3/errors.jssrc/entry.bun.ts:23:3 - error TS2353: Object literal may only specify known properties, and 'origin' does not exist in type 'QwikCityBunOptions'. 23 origin: process.env.ORIGIN, ~~~~~~ Found 1 error in src/entry.bun.ts:23 ```…

### CASE-4673 · [🐞] v2: useTask$ async callback doesn't block rendering
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In v1, awaiting a useTask$ callback blocks renderings until resolved [link] In v2, awaiting a useTask$ callback blocks rendering until resolved **only the first time** [link] ### Reproduction See playground above ### Steps to reproduce See playground above ### System Info ```shell v2 ``` ### Additional Information This is blocking new ViewTransition API for v2: [link]]-evolution/discussions/315

### CASE-4682 · [🐞][v2] viewtransition support missing
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬1 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug the merge from main to v2 did not include the viewtransition work because it needs to be added in the new DOM renderer and there's no test ### Reproduction n/a ### Steps to reproduce _No response_ ### System Info ```shell n/a ``` ### Additional Information cc @user

### CASE-4683 · Stopped working on IE11
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬37 · closed
- **Excerpt**: Hello, It seems that after the transition to rollup and newer features, alpinejs is not working in IE11 with the current polyfills. I am getting the error: ``` Expected ')' ``` at this line in `utils.js` ``` export function walkSkippingNestedComponents(el, callback, isRoot = true) { ``` I then tested on a branch after the transition to rollup (1.1.3) and got it to work by changing babel.config.js to the following ``` module.exports = { presets: [ [ "@user/preset-env", { targets: { browsers: "> 0.5%, ie >= 11" }, modules: false, spec: true, useBuiltIns: "usage", forceAllTransforms: true,…

### CASE-4688 · What is the Best Way to Ensure Idempotent Transformations?
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬18 · closed · labels: bug
- **Excerpt**: My project is using Alpine, Rails, and Turbolinks in Rails. I'm using **x-for** to create img nodes for each image source in an array. ``` <template x-for="(imgSrc, index) in items" :key="index"> <img :src="imgSrc" /> </template> ``` When I navigate to the page, the above code inserts image nodes for a carousel as expected. However, when navigating away, Turbolinks saves a copy of the transformed page to its cache. I then press the Back button and Turbolinks restores the page (and all previously inserted nodes) from the cache and **the above code inserts a second set of image nodes again.**…

### CASE-4690 · Transition animation using x-cloak
- **Principles**: P-D1, P-D2, P-D3 · **Env**: tailwind
- **Signals**: 👍1 💬16 · closed
- **Excerpt**: Firstly, thanks for the awesome library! I've very much been enjoying using it alongside Phoenix LiveView and TailwindCSS. I noticed an interesting bug when using `x-cloak` along with transitions. The problem being that the animation would only occur the second time around and after. The first time around the text would just appear with no animation. The fix is to add `style="display: none;"` to the markup and the animation would then occur the first time as well. For example, I am creating a pricing page with a monthly/yearly price toggle. The following code would omit the first animation:…

### CASE-4691 · x-show with x-transition with quick event may have weird behavior
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: bug
- **Excerpt**: If you fire fast events to show/hide elements with x-transition it ends up hiding. (sorry if it's too vague, i made a jsfiddle to help understand) [link] If you see this fiddle example and move the mouse hover/out the button quickly you may reproduce the error.

### CASE-4694 · $nextTick vs x-transition
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: I have a modal that I'm fading in with an x-transition. I also want to focus it, so I tried writing `this.$nextTick(()=> { this.$refs.content.focus(); });`, but that doesn't work because the transition hasn't finished yet when $nextTick fires. Is there a way for $nextTick to deal with this, or do I just have to use window.setTimeout and keep it in sync with the length of the transition manually?

### CASE-4698 · `x-bind:class` not working in combination with class
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I'm pretty sure it's not a bug because in another project I have this working perfectly fine so don't mind me creating a bug report. As mentioned when using `x-bind:class` in combination with just class an error occurs and it fails to combine them. HTML: ```html <div class="ml-auto h-5 w-5 transform" x-bind:class="{ 'rotate-90': expanded }" > <i class="fas fa-chevron-right"></i> </div> ``` Error: ![image]([link]) Alpine JS version: 2.8.2

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-4685 · Any way to access $dispatch and other magic properties in "function components" ?
- **Principles**: P-D4, P-F1, P-F5, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬25 · closed
- **Excerpt**: Basically, I'm doing a tabs "plugin" and need to use `tab.scrollIntoView()`, but I can't use it as is, as alpine still has the `tab` element hidden (`x-show`'d out). I'm currently using a `setTimeout` but I feel it should/could be cleaner ```html <div x-data="{tabs: tabs('tab1')}">...</div> ``` ```javascript function tabs(initialTab) { return { current: initialTab select(tab) { // tab is a dom element // I'm using id to progressively enhance from anchor links // and limit markup duplication this.current = tab.id // I want to do something like this $nextTick(() => tab.scrollIntoView({behavior:…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-4697 · x-collapse overflow hidden
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬10 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/2207 <div type='discussions-op-text'> <sup>Originally posted by **reefki** October 10, 2021</sup> When using `x-collapse` I found that it adds `overflow: hidden;` style to the element even when it on collapsed state. I know that it's really necessary to get a smooth transition but it makes a little mess with my dropdown inside that being chopped due to the `overflow: hidden;`. I think it's better to use `overflow: initial;` when the element not expanded and change it back to `overflow: hidden;` when starting the transition and when the element collapsed. I…

