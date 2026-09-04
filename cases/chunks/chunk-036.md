# Case Chunk 036 — Round 36

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4501 · SSR Styling - Flash of unstyled content
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬3 · closed · labels: bug
- **Excerpt**: When page is render in SSR `<style>` tags are inserted with the component. These `<style>` tags need to move to `<head>`. This is done while rendering, but there is a bug where the `<style>` is removed, the browser renders, and then the `<style>` is reinserted. This causes a flash of unstyled content. I think a better way to do this is to just close the stream with this code: ```html <script>document.querySelectorAll('style[q\\:style]').forEach(s => document.head.appendChild(s))</script> ``` The above code will move the styles as soon as the streaming is done, and because the move is done in…

### CASE-4505 · Regression (beta.36): debounced client-side search re-renders a virtualized list with blank rows instead of filtering
- **Principles**: P-F4, P-F5, P-H3, P-G4, P-E3 · **Env**: vite, react
- **Signals**: 👍0 💬2 · open · labels: bug/runtime/needs reproduction
- **Excerpt**: ### Which component is affected? Qwik Runtime (`@user.dev/core`) ### Version Regressed in `2.0.0-beta.36` (works in `2.0.0-beta.35`). `@user.dev/core` + `@user.dev/router` `2.0.0-beta.36`, `@user.dev/optimizer` `2.1.0-beta.5`, Vite 8.0.16, Node 22, dev SSR mode (`vite --mode ssr`). ### Describe the bug A client-side data grid filters its rows reactively from a **debounced search signal**. The chain: `<input onInput$> → localSearch (signal)` → a `useTask$` that `setTimeout`-writes `debouncedSearch (signal)` → a `useComputed$` that filters/sorts/paginates `props.rows` by `debouncedSearch.value`…

### CASE-4507 · QRL chunks fail to load on cold Vite dev SSR requests (beta.35 + Vite 8) — `TypeError: Importing a module script failed` + 504 Outdated Optimize Dep
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬2 · open · labels: bug/runtime/needs reproduction/SSR
- **Excerpt**: ### Which area(s) are affected? `Qwik Runtime`, `Rollup / Vite plugin` ### Describe the bug In Vite dev SSR (`pnpm dev`), the first request to a route that uses `useVisibleTask$` produces `TypeError: Importing a module script failed` on multiple QRL chunks. Subsequent requests succeed. ``` qrl WebVitals_component_useVisibleTask_yn4FTDO7PRs failed to load TypeError: Importing a module script failed. qrl Link_component_useVisibleTask_xKeuRmnoNSA failed to load TypeError: Importing a module script failed. qrl PWAProvider_component_useVisibleTask_PiqqFnaN19Y failed to load TypeError: Importing a…

### CASE-4509 · [🐞] v2: inlined function returning jsx does not render
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · open · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```tsx import { component$ } from '@user.dev/core'; export default component$(() => { return ( <div> <h1>Hello from Qwik!</h1> {() => <div>hiiii</div>} // <-- does not render </div> ); }); ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell ... ``` ### Additional Information In v1 we had an SSR error instead [link]

### CASE-4511 · [🐞] v2: useAsync$/useAsyncComputed$ is not working correctly when using .loading property
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am trying to use useAsync, when I try and use a loading state, and afterwards using the value once ready, Im seeing errors and broken behavior. Thanks ### Reproduction [link] ### Steps to reproduce Enter the repro link, see the error ;) ### System Info ```shell - v2 playground info. ``` ### Additional Information On another note: I also noticed that the useAsync is awaited in SSR. doesnt it beat the point of `.loading`? shouldnt it "stream" the promise to the client and once ready, apply the result in the client? If its…

### CASE-4515 · [🐞] Playground REPL panels disappear if there's a (long enough) SSR error
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug I am recording a clip where I showcase how serialization boundaries work and Playground lets me show the diagnostics side-by-side so it's pretty handy. **The Problem** If I trigger a QRL serialization error, the REPL output/console panels "disappear" but what's actually happening is I think the SSR output becomes too long and pushes the "available space" for the REPL CSS Grid so that dividing it into 3 regions (`1fr 1fr 1fr`) just makes it so the input panel takes up visible screen space, and the actual grid extends beyond…

### CASE-4518 · [🐞] el.addEventListener is not a function [dev mode only]
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/good first issue/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In dev mode with QwikCity|Router, sometimes there's an error `"el.addEventListener is not a function"` The reason is the qwikloader fallback which doesn't put the qwikloader in an IIF and it leaks the const addEventListener 🙈 ### Reproduction n/a ### Steps to reproduce `pnpm dev` in a qwik router app and you'll get it eventually ### System Info ```shell n/a ``` ### Additional Information the fix is to be made in ssr-render in v1 and ssr-container (I think) in v2

### CASE-4519 · Unable to import <SSRStreamBlock> and <SSRStream> components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/PR welcomed/V2
- **Excerpt**: After upgrading to @user.dev/[email]-alpha.9, we can no longer import the <SSRStreamBlock> and <SSRStream> components. Do you plan to bring back support for importing and using these components in Qwik v2?

### CASE-4523 · [🐞] V2 - Button Component ‘disabled’ Prop Not Updating Correctly
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug There is a problem in the new version of v2 (it seems to me that this bug was introduced in alpha 5). As it can be verified in the playground, the Button component does not change its property “disabled” although the parameter that receives from the parent makes that condition change. In short, if in the SSR the button has the disabled set to “true”, then in the client it will never be disabled. If in the SSR the button had the disable set to “false” in the client it can never be changed to disable “true”. This can be seen by…

### CASE-4525 · [has been resolved][🐞]npm dev error ReadableStream is not defined
- **Principles**: P-F4 · **Env**: vite, desktop
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug 1. node 16 2. npm create qwik@user 3. npm install 4. npm start 报错 └─[0] npm start > start > vite --open --mode ssr failed to load config from /Users/zhangxuejie03/Desktop/test/qwik-app/vite.config.ts error when starting dev server: ReferenceError: ReadableStream is not defined at Object.<anonymous> (/Users/zhangxuejie03/Desktop/test/qwik-app/node_modules/undici/lib/web/fetch/webidl.js:471:58) at Module._compile (node:internal/modules/cjs/loader:1198:14) at Object.Module._extensions..js…

### CASE-4587 · [🐞] Out of bounds inflalate access
- **Principles**: P-F4 · **Env**: typescript
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```typescript <table> {items.map((key) => ( <Row key={key} /> ))} </table> ``` The above generates: ```html <table> <!-- qv ... --> <tr>....</tr> <!-- qv ... --> </table> ``` But that is incorrect because `<table>` must have `<tbody>` so the browser does this: ```html <table> <!-- qv ... --> <tbody> <tr>....</tr> <!-- qv ... --> </tbody> </table> ``` the above now breaks the code. The SSR should warn about this situation but it does not. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell n/a…

### CASE-4597 · [🐞] client navigation and useResource has side effects that can cause Qwik runtime errors
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug The stackblitz example illustrates it better can be explained, but AFAICT the `useResource` `onReolved` data seems to reset to undefined when the page goes away from a SSR state to a client navigation (either via `Link` or `useNavigate`) which causes the current page component to first be loaded client side in order to re-render with this **new** state before rendering the target page component. This has some side effects as some guards are then required for cases that normally cannot happen, like this data being…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4502 · HMR doesn't work on `npm run dev.ssr`
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, windows, vite
- **Signals**: 👍3 💬3 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) Windows / Chrome ### Node Version (if applicable) 16.13.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour I expect to have hot module reloading (or at least an update) when I run `npm run dev` which in turn runs `npm run dev.ssr` If I run `npm run dev.client` which just runs `vite`, it does work... ### Actual Behaviour Auto-reload doesn't work, I need to refresh the browser manually to see updates ### Additional Information _No response_

### CASE-4503 · Serving locally built SSR from the starter app produces an error
- **Principles**: P-G1, P-G2, P-G3, P-F4, P-G4, P-E3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.25 ### Operating System (or Browser) Windows / Chrome (incognito) ### Node Version (if applicable) 16.13.0 ### Which component is affected? Starters / CLI ### Expected Behaviour I expect the binding to work and no error being shown in the console ### Actual Behaviour STEPS TO REPRODUCE: 1. `npm run build.ssr` 2. `npm run serve` 3. Change the input box value from "world" to "world1" 4. See an error in the console (and no binding happenning = value of world below doesn't change) - ``` Failed to load module script: Expected a JavaScript module script but the server responded…

### CASE-4513 · [🐞]Netlify deployment fails with Bun: `SyntaxError: Unexpected token ':'` during "Edge Functions bundling"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬2 · open · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ### Bug Description Hello, I am trying to deploy my Qwik project to Netlify using the Netlify Edge adapter. When I run the deployment command (`bun run deploy`), the build fails on Netlify with an internal error during the "Edge Functions bundling" step. The reported error is a `SyntaxError: Unexpected token ':'`, which seems to originate from the Edge Functions manifest validation process by Netlify's bundler (`@user/edge-bundler`), specifically when using `ajv` for schema validation. ### Reproduction Steps to reproduce the…

### CASE-4520 · [🐞] v2 Route loader is executed on wrong route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, typescript, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/router/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Route loader is defined in test route but gets executed when going back to homepage ### Reproduction [link] ### Steps to reproduce 1. Go to test route (consle log is: route loader 1) 2. Go to homepage (console log is: route loader 2) ### System Info ```shell System: OS: macOS 15.3.2 CPU: (10) arm64 Apple M4 Memory: 140.34 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.14.0 - /usr/local/bin/node npm: 11.1.0 - /usr/local/bin/npm Browsers: Chrome: 134.0.6998.166 Safari: 18.3.1 npmPackages: typescript: 5.4.5 => 5.4.5 vite:…

### CASE-4534 · [🐞] qwik.dev home page doesn't load the content
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, mobile
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug 1. Go to [qwik.dev]([link]) 2. Scroll down 3. Showcase/Qwik media, etc content are missing. 4. On mobile you can load those sections with a few clicks. ![qwik dev]([link]) ### Reproduction [link] ### Steps to reproduce Gif is attached to the bug description ### System Info ```shell MacOs,Chrome Version 123.0.6312.87 (Official Build) (x86_64) ``` ### Additional Information _No response_

### CASE-4535 · [🐞] View transition and scroll restore conflicts
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome
- **Signals**: 👍1 💬2 · closed · labels: bug/waiting for user/needs triage/needs reproduction
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Not sure what the issue is yet but it's alluded to in this issue (my comment): [link] Essentially, every SPA navigate in Qwik City automatically invokes a view transition (it's enabled by default) unless the QwikCity component's `viewTransition` prop is explicitly set to `false`. However, view transitions are effectively disabled by some CSS Manu originally added. When that CSS was removed, the scroll restore tests failed, suggesting that even Chrome's basic view transition effect somehow clashes with scroll restore. I think…

### CASE-4537 · [🐞] ERR_TOO_MANY_REDIRECTS – Redirect loop on qwik.dev
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍3 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Website ### Describe the bug Visiting [link] results in a redirect loop. :( ![screenshot]([link]) [link] is working fine. ### Reproduction [link] ### Steps to reproduce `curl -I [link] ``` HTTP/2 308 date: Wed, 20 Mar 2024 13:55:11 GMT location: [link] ``` ### System Info ```shell System: OS: macOS 14.4 CPU: (10) arm64 Apple M1 Max Memory: 2.51 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.1 - /opt/homebrew/bin/node Yarn: 1.22.22 - /opt/homebrew/bin/yarn npm: 10.5.0 - /opt/homebrew/bin/npm Browsers: Chrome: 123.0.6312.58 Safari: 17.4 ```

### CASE-4539 · [🐞] ALT+CLICK doesnt work on windows but works on linux
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, linux, desktop
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug npm or pnpm create qwik@user pnpm or npm dev ALT + CLICK on any elemnent nothing happens this error on chrome console appears `Not allowed to load local resource: file:///C:/Users/ayoub/Desktop/playing-around/qwik-app/src/components/starter/hero/hero.tsx:10:12` tried it in multiple windows machine same issue, ona new laptop that was sealed, same issue on my work desktop as well same issue, so far i tried it in 4 different machines and all have that issue my friend who has a dual boot system with windows and linux, it works for…

### CASE-4540 · [🐞] RouteAction submitted programmatically not working in a vercel edge environment
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hello all! while in development, defining a simple route action and call it programmatically works as expected, also during local preview with production build. But when is deployed, the action is fired (I've double checked it using console and the Vercel's log viewer), but the code inside does not run. No matter what type, I can see the POST triggered by the button, the 200 response but no data manipulation by the code. In my simple reproduction below I've used a console log to mimic the situation, and in the actual…

### CASE-4549 · [🐞] cli: stange glitch in list
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug [link] ### Reproduction Run `pnpm qwik add` ### Steps to reproduce - Create new qwik project - Run `pnpm qwik add` ### System Info ```shell System: OS: macOS 14.0 CPU: (8) arm64 Apple M1 Memory: 122.22 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.16.0 - ~/.nvm/versions/node/v18.16.0/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v18.16.0/bin/yarn npm: 9.5.1 - ~/.nvm/versions/node/v18.16.0/bin/npm pnpm: 8.6.12 - ~/Library/pnpm/pnpm Browsers: Chrome: 118.0.5993.88 Safari: 17.0 ``` ### Additional Information It selects…

### CASE-4550 · [🐞] qwik new CamelCaseComponent exported component becomes Camelcasecomponent
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬2 · closed · labels: bug/starters/PR welcomed
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug I created a new component using `qwik new` and I lost camelcase in the Props and export declaration. ### Reproduction n/a ### Steps to reproduce just use qwik new. ### System Info ```shell System: OS: macOS 12.6.6 CPU: (8) arm64 Apple M1 Pro Memory: 79.23 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.14.2 - ~/.nvm/versions/node/v16.14.2/bin/node npm: 8.5.0 - ~/.nvm/versions/node/v16.14.2/bin/npm Browsers: Chrome: 117.0.5938.149 Safari: 16.5 npmPackages: @user.io/qwik: ^1.2.13 => 1.2.13 @user.io/qwik-city: ^1.2.13…

### CASE-4559 · [🐞] Docs: conflicting ctrl+k shortcut
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, edge, firefox
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Playground ### Describe the bug In the Qwik docs, there is a keyboard binding for `ctrl+k` that brings up the search box, but it also conflicts with the default browser behavior of focusing on the browser search/url bar. It would be nice to remove the default behavior and autofocus the docs search widget. ### Reproduction [link] ### Steps to reproduce Open docs press `ctrl+k` ### System Info ```shell Chrome, Edge, Firefox ``` ### Additional Information _No response_

### CASE-4562 · [🐞] Internal assert when SSR rendering <Link> inside a <div> container
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When rendering a `<Link>` element inside a `<div>` container, the following error occurs when clicking on the link : `Error: Internal assert, this is likely caused by a bug in Qwik: close not found` ### Reproduction [link] ### Steps to reproduce 1. Open the devtools console 2. Click on the 'Flower App' link 3. Assert will trigger ### System Info ```shell I'm on Windows and using Chrome ``` ### Additional Information _No response_

### CASE-4563 · [🐞] Initial value of range input is incorrect when step is specified after value in the component
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Looks like there's a bit of an edge case where the prop order between `value` and `step` on an `<input type='range'>` can cause differing behavior. In this case, the slider is reset to an incorrect value unexpectedly. ### Reproduction [Playground]([link]) ### Steps to reproduce 1. Open the playground 2. See that both sliders are in the halfway position. 3. Click "Toggle" 4. The sliders will disappear and reappear 5. One slider has been incorrectly "rounded" to the end of the input, the other is fine. The only difference…

### CASE-4564 · [🐞] Image constantly has zero height on conditional rendering
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If image is rendered in a condition, it has zero height and width ### Reproduction [link] ### Steps to reproduce Please click on Show slider button. I expect image with predefined src is rendered, but it is not. It has zero height and width as an img attribute. ### System Info ```shell chrome "@user.io/qwik": "^1.1.4", "@user.io/qwik-city": "^1.1.4", ``` ### Additional Information _No response_

### CASE-4566 · [🐞] `pnpm deploy` after configuring `pnpm qwik add vercel-edge` fails with error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug ```powershell > pnpm qwik add vercel-edge > pnpm build > pnpm deploy ERR_PNPM_CANNOT_DEPLOY A deploy is only possible from inside a workspace ``` ### Reproduction [link] ### Steps to reproduce ```powershell > pnpm qwik add vercel-edge > pnpm build > pnpm deploy ``` ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (8) x64 Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz Memory: 499.02 MB / 15.77 GB Binaries: Node: 20.1.0 - C:\Program Files\nodejs\node.EXE Yarn: 3.5.1 - C:\Program Files\nodejs\yarn.CMD npm: 9.6.4 -…

### CASE-4567 · [🐞] Wrong recommendation for Vercel Integration
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug Adding Vercel integrations through `pnpm qwik add vercel-edge` gives the following output ```powershell ◇ What integration would you like to add? │ Adapter: Vercel Edge │ ◇ 👻 Ready? Add vercel-edge to your app? │ │ 🐬 Modify │ - package.json │ - .gitignore │ - README.md │ │ 🌟 Create │ - adapters\vercel-edge\vite.config.ts │ - src\entry.vercel-edge.tsx │ │ 🐳 Overwrite │ - vercel.json │ │ - vercel ^29.1.1 │ │ 📜 New pnpm script: │ - pnpm build.server │ - pnpm deploy │ ◇ Ready to apply the vercel-edge updates to your app? │…

### CASE-4568 · [🐞] drop event not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug drag and drop doesn't work because of a few things. * drop event is not firing off * dataTransfer api doesn't work without drop and dragstart * it seems like you need to active all events before it will work so maybe an issue with qwikLoader? * you have to use `ref` and not `event.target` This is likely an issue with async functions and dataTransfer needs to be available synchronously. ### Reproduction [link] ### Steps to reproduce stackblitz. use html drag and drop api ### System Info ```shell chrome ``` ### Additional…

### CASE-4572 · [🐞]Starter app doesn't work on Windows.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I also bumbed into this problem [[ref]]([link]) run the following command: `pnpm init qwik@user cd qwik-app pnpm install pnpm start ` I didn't get an error during that process. I opened [link] in Microsoft Edge Version 108.0.1462.42 The I got a blank webpage I found the following errors in the developer console: ![image]([link]) and `vite build` ![image]([link]) ### Reproduction N/A ### Steps to reproduce _No response_ ### System Info ```shell Windows 10 Node version 16.15.0 npm version 7.1.5 Microsoft Edge Version…

### CASE-4582 · [🐞] Server function in useTask$ causes error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍2 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I'm trying to use a server function in a `useTask$` hook. I get this error: > Error: Dynamic require of "null.js" is not supported ### Reproduction [link] ### Steps to reproduce uncomment the useTask$ hook and notice the build error. ### System Info ```shell System: OS: macOS 13.2.1 CPU: (12) arm64 Apple M2 Pro Memory: 160.48 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 19.5.0 - /opt/homebrew/bin/node Yarn: 3.3.1 - /opt/homebrew/bin/yarn npm: 9.3.1 - /opt/homebrew/bin/npm Browsers: Chrome: 110.0.5481.177…

### CASE-4585 · [🐞] Deprecated useClientEffect$ not working, but useBrowserVisibleTask$ does work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos
- **Signals**: 👍0 💬2 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Deprecated useClientEffect$ not working, but useBrowserVisibleTask$ does work. Please see loom of issue: [HERE]([link]) [link] [link] ### Reproduction [link] ### Steps to reproduce Run the stackBlitz or repo locally. ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M1 Memory: 90.50 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 19.4.0 - ~/.nvm/versions/node/v19.4.0/bin/node npm: 9.2.0 - ~/.nvm/versions/node/v19.4.0/bin/npm Browsers: Chrome: 110.0.5481.100 Firefox Developer Edition: 110.0 Safari: 16.2…

### CASE-4593 · [🐞] Vercel Edge Adapter breaks build - Cannot bundle Node.js built-in "events" imported by Nodemailer
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug - I'm trying to build my locally with Vercel Edge adapter installed and `nodemailer` dependency installed which is used only within `onPost` but receiving the following error: ``` [commonjs--resolver] Cannot bundle Node.js built-in "events" imported from "node_modules/nodemailer/lib/smtp-transport/index.js". Consider disabling ssr.noExternal or remove the built-in dependency. ``` I tried to set `ssr.noExternal` in `vite.config.ts` but didn't work. ### Reproduction [link] ### Steps to reproduce Run `npm install`…

### CASE-4594 · [🐞] Cloudflare build breaks with Prisma
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I have created a GitHub project where one branch uses Express and another (default branch) the Cloudflare integration. Both branches have Prisma as a dependency. `npm run build` works without any issues with Express but fails with ```bash ".prisma/client/edge" is imported by ".prisma/client/edge?commonjs-external", but could not be resolved – treating it as an external dependency. error during build: TypeError [PLUGIN_ERROR]: Invalid module ".prisma/client/edge" is not a valid package name imported from…

### CASE-4598 · Qwik + React + MUI - checkboxes are not updating on state change
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, react
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 16.6.0 ### Which component is affected? Qwik React ### Expected Behaviour React MUI checkboxes should react as the Qwik ones. There is another thing on React MUI usage - we could have API to provide React elements like: `secondaryAction` for the [link] component. Using Qwik we can't provide there the React component because then Qwik starts to complain and we can't provide there a React component as then Qwik starts to complain. ### Actual Behaviour Hi Qwik community! Stackblitz example: [link]…

### CASE-4599 · Link component throws an error if the immediate child directory of route is dynamic
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 107, windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.0.123 ### Operating System (or Browser) Windows 10 Pro 21H2 Firefox 107 ### Node Version (if applicable) 18.11.0 ### Which component is affected? Qwik City ### Expected Behaviour Link component with `href="/flower"` should correctly navigate on click. ### Actual Behaviour On hovering over or clicking the link, the following error is produced in the browser console: `Uncaught (in promise) TypeError: error loading dynamically imported module` ### Additional Information Minimal reproduction: [link] Reverting qwik-city to 0.0.122 or nesting the directory one level lower under a…

### CASE-4600 · useServerMount is executed on the client side after navigation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Mac OS 12.6.1 google chrome 104.0.5112.101 ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour useSrverMount is executed only on the server and is not sent to the client side, after navigating from another page, useServerMount is executed only on the server ### Actual Behaviour at the first request of the page on which the useServerMount is used, everything works correctly. however, if we use the link component leading to another page and also return to the page using…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4504 · [🐞] [V2] Image exports don't resolve properly on SPA / HMR update
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug [ref] issue still persists ``` 4:49:29 p.m. [vite] Internal server error: Failed to resolve import "virtual:/home/sab/qwik-app/src/media/thunder.png.qwik.jsx?jsx=" from "virtual:/home/sab/qwik-app/src/media/thunder.png.qwik.jsx?jsx=". Does the file exist? Plugin: vite:import-analysis File: virtual:/home/sab/qwik-app/src/media/thunder.png.qwik.jsx?jsx=:1:0 1 | import { srcSet, width, height } from "/home/sab/qwik-app/src/media/thunder.png?format=webp&quality=75&w=200%3B400%3B... | ^ 2 | import toImg from…

### CASE-4510 · [🐞] Dev SSR renders broken `<link>` href for virtual CSS modules (missing `/@user/` prefix)
- **Principles**: P-A3, P-H1, P-F4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/optimizer/SSR
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug When a Vite plugin injects a virtual CSS module import (e.g. `import "virtual:my-plugin:foo.css"`), the dev SSR renders a `<link>` tag with the raw virtual module ID as the href: ```html <link rel="stylesheet" href="/virtual:my-plugin:/src/routes/index.tsx.css"> ``` This returns a 404 because Vite's dev server serves virtual modules under the `/@user/` prefix. The correct href should be: ```html <link rel="stylesheet" href="/@user/virtual:my-plugin:/src/routes/index.tsx.css"> ``` <img width="1416" height="1050"…

### CASE-4514 · [🐞] [v2] Error raised when a prop is used to conditionally select class, only when there are more than 6 classes on both sides of condition.
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When a prop is used to conditionally select a class, the following error is raised: `TypeError: can't access property "startsWith", key is undefined` <img width="634" height="210" alt="Image" src="[link] /> But it only happens after the condition was changed one or two times. It seems that classes are still computed correctly, though. I tried to reproduce it in a fresh project, it fails similarly but with a different error: `can't access property 0, vNode is undefined` <img width="1879" height="940" alt="Image" src="[link] />…

### CASE-4521 · [🐞]Specify the vite.config.ts output content, the packaged code has problems
- **Principles**: P-A3, P-H1 · **Env**: linux, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug ![Image]([link]) **Browser refresh the picture path is like this** ![Image]([link]) **This is the picture of the route jump.** ![Image]([link]) **Another problem is that I modified the output path after the budget, but there is still a js path that has not changed. It seems that there is no place to modify this path.** ### Reproduction [link] ### Steps to reproduce run npm build run node server/entry.express ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @…

### CASE-4522 · [🐞] V2 Error using Tasks
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬2 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug With this example, [link] with version 2 does not work <img width="1439" alt="Screenshot 2025-01-15 at 23 53 40" src="[link] /> ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 15.0 CPU: (10) arm64 Apple M2 Pro Memory: 142.47 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.0 - ~/.nvm/versions/node/v20.11.0/bin/node npm: 10.2.4 - ~/.nvm/versions/node/v20.11.0/bin/npm pnpm: 9.14.2 - ~/Library/pnpm/pnpm bun: 1.1.36 - ~/.bun/bin/bun Browsers: Brave Browser: 131.1.73.101…

### CASE-4527 · [🐞] @user/qwik package does not correctly register routes
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When trying to use the `@user/qwik` package, routes are not getting registered which causes auth redirects to fail with the error `/api/auth/signin` not found. ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. Create a new Qwik app 2. Add auth 3. Convert to using `@user/core` instead of `@user.io/qwik-auth` in `[email]`. 4. Add an onRequest handler to redirect if a user is unauthenticated ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0…

### CASE-4528 · [📖] Unable to load image asset
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/docs
- **Excerpt**: ### Issue When visiting [link] one of the images is not loading properly (refer to the screenshot below). ![image]([link]]/assets/74030149/d466c542-0166-4cb3-a20f-e90b98163ca5) If you try to access the image URL ([link]), it shows an error message stating ``` The image “[link] cannot be displayed because it contains errors. ```

### CASE-4529 · [🐞] 1.5.5 unicode problem
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hello, I noticed a problem with unicode encoding in the update. You can see for yourself, have a look at the site. <img width="466" alt="Screenshot 2024-05-22 at 03 00 37" src="[link]]/assets/4470015/bf5c8786-2db5-45d0-b892-9f5170b28fd0"> <img width="623" alt="Screenshot 2024-05-22 at 03 04 27" src="[link]]/assets/4470015/e0b63aa5-c35d-4393-a35a-1d02b40f7ffb"> I noticed that this problem occurs in production, in development the characters are encoded as expected. ### Reproduction [link] ### Steps to reproduce _No response_ ###…

### CASE-4530 · [🐞] lib mode do not respect custom lib.entry in vite config
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug When you try to overwrite the entrypoints in vite.config.ts file in lib mode, the optimizer just replace your specified entrypoint for the default, disrespecting the one you specified. I take a look to the optimizer.js file and the error occurs in here `line 1870`: <img width="1408" alt="image" src="[link]]/assets/51871681/fbb6b604-3c9e-4dcc-93b2-07d2f013421c"> ### Reproduction [link] ### Steps to reproduce - create a qwik component library project - edit vite config file and add a custom lib.entry object or array…

### CASE-4543 · [🐞] computed signals do not get serialized with refs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug It seems that Qwik does not register when the computed signal should be serialized. According to wout, this might be fixed in v2? <img width="830" alt="image" src="[link]> ### Reproduction [link] ### Steps to reproduce Load playground Click on the button ### System Info ```shell N / A ``` ### Additional Information _No response_

### CASE-4545 · [🐞] qwik.new error: Input file contains unsupported image format
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The stackblitz qwik.new instance throws an error on startup: Input file contains unsupported image format ``` Input file contains unsupported image format Stack trace at _napi_create_error (/home/projects/qwik-starter/node_modules/sharp/build/Release/sharp-emscripten-wasm32.node.js:5768:14) at <anonymous> (Napi) at invoke_viii (/home/projects/qwik-starter/node_modules/sharp/build/Release/sharp-emscripten-wasm32.node.js:7836:27) at <anonymous> (MetadataWorker) at <anonymous> (Napi) at invoke_ii…

### CASE-4546 · [🐞] Imported image causes onclick$ to duplicate like crazy
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I recently changed my `<img />` to imported image tags, e.g `<ImportedImage />`, in which I found this weird behaviour. On the image there is a click-listener which works properly when it's just an img tag, but when its the imported image tag, the `onClick$` gets fired an amount of times more for each click. So first click its fired once, then twice, then maybe 5, then 10 etc. In the example below, clicking on the left button 5 times then the right one 5 times causes it to fire 70-100 times. Depends on how fast you click for…

### CASE-4547 · [🐞] Creating a thumbnail slider with two Swipers does not work
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I want to create a thumbnail slider in which thumbnails are shown at the bottom in smaller sizes and on click of each thumbnail the main slider shows that image in a bigger size. Basically, I want to create [this]([link]) using Swiper. I use `onSwiper` from the thumbnail Swiper to get the instance. Then I want to pass it to the main Swiper. And in this step it does not work no matter what I do. ### Reproduction [link] ### Steps to reproduce - Create a new Qwik project - Create a thumbnails Swiper - Creat ea main Swiper - Try…

### CASE-4551 · Image Optimizer warning when using SVG from public folder (unnecessary?)[🐞]
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I am using SVG images served from the public folder. I expected to use them in an image tag without any lint warinings. Actually, I get a lint warning: ``` /home/projects/qwik-starter-qzsaky/src/routes/index.tsx 8:37 warning Local images can be optimized by importing using ESM, like this: import ImgQwik from '~/media/logo/qwik.svg?jsx'; <ImgQwik /> See [link] qwik/jsx-img ✖ 1 problem (0 errors, 1 warning) ``` I may be missing something, but I don't think the image optimizer provides any benefit for SVG images, and…

### CASE-4554 · [🐞] `_getInfo(originalSrc)` fails to fetch the image size if using self-signed cert.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug I am testing my app at local environment with self-signed cert. I have placed an `<img>` tag with static images located under the `./public/` and then the error caused even if the cert is installed as trusted. ``` GET [link] net::ERR_ABORTED 500 ``` It seemed the `_getInfo()` in `optimizer/src/plugins/image-size-runtime.html` failed to fetch the image size because of the cert issue which might be relating with configuration of the `undici`. ### Reproduction couldn't provide because relating with the cert issue. ###…

### CASE-4555 · [🐞] Redirects don't work with queries on routeAction$
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, svelte
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I expect to be redirected to the query of my form, but it doesn't work, I use sveltekit and it works well I expect the same of Qwik ![image]([link]) ### Reproduction [link] ### Steps to reproduce `pnpm install` followed by `pnpm dev` ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 5.83 GB / 12.92 GB Binaries: Node: 18.16.0 - C:\Program Files\nodejs\node.EXE npm: 9.6.7 - C:\Program Files\nodejs\npm.CMD pnpm: 8.6.5 - ~\AppData\Local\pnpm\pnpm.EXE…

### CASE-4557 · [🐞] CLS warning is incorrectly styled.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug [link] <img width="553" alt="image" src="[link]> The text `CLS 0.008` is incorrectly styled to be `position: absolute`, resulting it being fixed on the page, when the page is scrolled. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell na ``` ### Additional Information _No response_

### CASE-4558 · [🐞] React components hydrating when they shouldn't
- **Principles**: P-A3, P-H1, P-F4 · **Env**: linux, react
- **Signals**: 👍0 💬2 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug React components are hydrating when they shouldn't be. Even if there is no hydration strategy specified they are still getting hydrated under certain circumstances. One of these is SPA navigation, however I believe there to be others I've just had a hard time minimally reproducing other cases. ### Reproduction [link] ### Steps to reproduce Click the block on the header Click the image for a blog post See that the react button is hydrated and is showing visible ### System Info ```shell System: OS: Linux 5.15 Debian GNU/Linux 11…

### CASE-4560 · [🐞] Error when using <Form /> component
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: windows, macos
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Error when using the Form component without an Action ![image]([link]) ![image]([link]) OS: Windows 11 & macOS 12.6.7 Qwik version: 1.2.3 Qwik City version: 1.2.3 ### Reproduction [link] ### Steps to reproduce Run `pnpm install` followed by `pnpm dev` and then we go to `[link] we need to click the button `Siguientes` and reload the page and occurs the error ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5800H with Radeon Graphics Memory: 4.98 GB / 12.92 GB Binaries: Node: 18.16.0 -…

### CASE-4561 · [🐞] CLI - Some integrations do not work
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: macos, tailwind
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug Some integrations do not work on new version 1.2.0 Tailwind Postcss Example tailwind: ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce Run `npm run qwik add tailwind` or select after run `npm run qwik add tailwind` ### System Info ```shell System: OS: macOS 13.4.1 CPU: (10) arm64 Apple M1 Max Memory: 4.23 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.12.1 - ~/.nvm/versions/node/v18.12.1/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.19.2 - ~/.nvm/versions/node/v18.12.1/bin/npm…

### CASE-4569 · [🐞] ESLint rules do not point to their docs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If an ESLint rule finds an issue, it will have a URL that points to `[link] instead of a more specific URL: <img width="956" alt="CleanShot 2023-05-07 at 13 43 06@user" src="[link]> [link] ### Reproduction N/A ### Steps to reproduce [link] ### System Info ```shell N/A ``` ### Additional Information I'm not sure what the best URL is for this particular eslint rule, but also some other rules also don't point to docs that explain valid/invalid code: [link] [link]

### CASE-4571 · [🐞] Qwik ESLint plugin recently triggered a strange error
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik ESLint ### Describe the bug The Qwik ESLint plugin recently (v0.103.0) throws the following error: `Calling use* methods in non-root component.` Is this a bug? Technically, my approach is not a problem. If this rule remains as it is, I will need to update the Modular Forms documentation. <img width="964" alt="Screenshot 2023-04-20 at 14 42 19" src="[link]> ### Reproduction [link] ### Steps to reproduce Is ESLint executed in StackBlitz? If not, the project must be run locally in VS Code. ### System Info ```shell I think that this information is not…

### CASE-4573 · [🐞] `renderToString` not working on client side in `preview` mode
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍1 💬2 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug using qwik 0.101.0, latest version as of writting `renderToString` works in `npm run dev` but not `npm run preview` can' t reproduce on stackblitz because `npm run preview` crashes there 1. what is the recommended way to get html representation of jsx nodes? 2. if I'd like to do a PR, where should I change to fix this issue? <img width="777" alt="image" src="[link]> <img width="1099" alt="image" src="[link]> <img width="1244" alt="image" src="[link]> the code was something like ```typescript renderToString(<>...<div>some</div>…

### CASE-4576 · [🐞] HTML nesting error should not crash server
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ![image]([link]) ### Reproduction n/a ### Steps to reproduce creat invalid HTML (like `<p><div/></p>`) ### System Info ```shell na ``` ### Additional Information _No response_

### CASE-4581 · [🐞] Applied too strict HTML spec to vite dev server
- **Principles**: P-A3, P-H1 · **Env**: linux, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm writing ordinary MDX files, but vite dev says my code violates HTML spec and refused to render. ``` # Hello world ~~This is should be deleted~~ ``` ![image]([link]) However, vite build just works. I think the spec is too strict for me, but how can i disable it? ### Reproduction [link] ### Steps to reproduce Just visit `/issue` page. ### System Info ```shell System: OS: Linux 6.2 Arch Linux CPU: (16) x64 AMD Ryzen 7 4800H with Radeon Graphics Memory: 8.72 GB / 15.00 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries:…

### CASE-4584 · [🐞] `basePathname` is not working with Qwik City (0.2.1 & 0.3.0) dev server
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I have a `basePathname` defined in the `qwikCity` options in `vite.config.ts`. I expect visiting the dev server with the base pathname will load my app but I just get a 404 page instead. The built express server seems to still function properly. ### Reproduction [link] ### Steps to reproduce <img width="600" alt="image" src="[link]> 1. Add a `basePathname: 'foo'` option to the `qwikCity` middleware in `vite.config.ts`. 2. Start the vite dev server 3. Try to go to `[link] You should get a 404 ### System Info ```shell…

### CASE-4586 · [🐞] Uncaught (in promise) Error: Dynamic require of "/src/_system__component_div_button_onclick_1_klwtplosxd8.js" is not supported
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug the BUG is not 100% reproducible, keep the server running and edit the code then let vite auto refresh the page increases the likelihood of the BUG, I attached the stackblitz link but I can't reliably reproduce it there `npx envinfo --system --npmPackages '{vite,undici,@user.io/*}' --binaries --browsers` shows that I should be using the same environment with stackblitz, which also should be the latest version as of writing ![image]([link]) the BUG happens when I click the buttons, then the lambda in `onClick$={...}` should be…

### CASE-4589 · [🐞] incorrect lint error: must have one root element.
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```typescript function LintError() { return ( <div> {[].map((text) => true ? <a>text</a> : text == "\n" ? <br /> : <span>{text}</span> )} </div> ); } ``` ![image]([link]) ### Reproduction linter not part of stackblitz ### Steps to reproduce ```typescript function LintError() { return ( <div> {[].map((text) => true ? <a>text</a> : text == "\n" ? <br /> : <span>{text}</span> )} </div> ); } ``` ### System Info ```shell any ``` ### Additional Information _No response_

### CASE-4590 · [🐞] unresolved type QwikManifest in Basic app
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬2 · closed · labels: bug/DX
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce 1. `pnpm create qwik@user` ``` 🐰 Let's create a Qwik app 🐇 v0.16.2 ✔ Where would you like to create your new project? … npm-demo ✔ Select a starter › Basic App (QwikCity) ✔ Would you like to install pnpm dependencies? … no ``` 2. `cd npm-demo && npm install` 3. You can see that `manifest` in `entry.ssr.tsx` resolved to type any ### System Info ```shell System: OS: macOS 11.6.8 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 752.60…

### CASE-4592 · [🐞] Cloud run adaptor is not available in `qwik-city/adaptors`
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug When adding Google Cloud Run adaptor with `yarn` following the doc [link] the generated file `vite.config.ts` complains that `import { cloudRunAdaptor } from '@user.io/qwik-city/adaptors/cloud-run';` doesn't exist which leads to build failure. Here is the screenshot of my `node_modules` <img width="361" alt="image" src="[link]> This error occurs from the `latest` tag to `beta` tag of `qwik-city` ### Reproduction [link] ### Steps to reproduce Run `npm run qwik add cloud-run` and observe errors. ### System Info ```shell…

### CASE-4595 · [🐞] no secondary navbar on docs on mobile
- **Principles**: P-A3, P-H1 · **Env**: mobile
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Now there's no way to get to the second menu navbar to navigate with on mobile devices ### Reproduction [link] ### Steps to reproduce open link and use mobile emulation ### System Info ```shell not relevant ``` ### Additional Information ![image]([link])

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-4506 · Cramped emojis and text on Sandbox
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs reproduction/styling
- **Excerpt**: The emojis and text lack spacing between them, making them look awkward. I think we can benefit from adding some space. <div style="max-height: 500px; overflow-y: auto;"> <img width="445" height="1061" alt="Image" src="[link] /> </div>

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4508 · [🐞] v2: Vite 8 and <Form> component throws error in production build
- **Principles**: P-G4, P-E3 · **Env**: linux, vite
- **Signals**: 👍1 💬2 · open · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Using a `<Form>` element with v2 and vite 8.0.3 throws "QRLs can not be dynamically resolved, because it does not have a chunk path _run Error: Code(Q14): QRLs can not be dynamically resolved, because it does not have a chunk path" error at runtime and crash the process ### Reproduction [link] ### Steps to reproduce it should run it by default but: 1. npm install 2. npm run build 3. node ./server/entry.node-server.js ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz…

### CASE-4517 · [🐞] onSubmit$ form handler not preventing default
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The `onSubmit$` event handler on a `form` is not respecting `preventDefault`. For example, in the form below: ```jsx <form onSubmit$={$((event) => { event.preventDefault(); console.log('default prevented'); })} > <button type="submit">Hello World</button> </form> ``` ## Expected Results The form should not be submitted and the console should print "default prevented". ## Actual Results The form is submitted, the default action on the event is never prevented, and nothing is printed to the console. ### Reproduction [link] ###…

### CASE-4536 · [🐞] Qwik Form resets translated strings on submit to original language (qwik-speak)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When submitting a form, the translated strings are reset to the original language (dev/prod) or are empty (in preview mode). This happens using qwik-speak for i18n and with both vanilla forms and modular-forms augmented forms. It seems as almost the entire page's components code is reloaded when submitting a form, see: [link] ### Reproduction [link] ### Steps to reproduce yarn install yarn run dev go to index choose either modular-forms or vanilla form hit submit see German change to English ### System Info ```shell latest ```…

### CASE-4541 · [🐞] useStyles$/useStylesScoped$ duplicates CSS in bundle
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug When a style is added via `useStyles$` or `useStylesScoped$` it gets added to the final HTML template in the form of (scoped) styles in style tags, as expected. However, it also is given a separate symbol and bundled by the optimizer. I have not verified this on a larger project, but on simple projects it gets included in one of the first loaded bundles. As for as I can tell, these duplicated styles have no function in styling the page. I expect that no duplicates styles are included in the optimized production…

### CASE-4542 · [🐞] requestEvent.request.formData() in routeAction$
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Can't access to requestEvent.request.formData() in routeAction$ This throws the error `[vite] Internal server error: The body has already been consumed.` `import { component$ } from "@user.io/qwik";` `import { Form, routeAction$ } from "@user.io/qwik-city";` `export const useUploadFileAction = routeAction$(async (data, requestEvent) => {` ` const formData = await requestEvent.request.formData();` ` console.log(formData);` `});` `export default component$(() => {` ` const useAction = useUploadFileAction();` ` return (` ` <Form…

### CASE-4544 · [🐞] routeLoader$ is not being called in navigation event
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm using Prisma in the routeLoader, one for edit and one for read, after storing the value in the edit component `import { component$, useStore, useSignal, noSerialize, useVisibleTask$, type NoSerialize, } from "@user.io/qwik"; import { Form, routeAction$, routeLoader$, useNavigate } from "@user.io/qwik-city"; import { PrismaClient } from "@user/client"; import * as MonacoE from "monaco-editor"; import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"; import jsonWorker from…

### CASE-4548 · [🐞] Exclusive Props type breaks HTMLAttributes?
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug # What I need? I am trying to create a simple wrapper component over two HTML elements. These are `<input>` and `<textarea>`, it's something I successfully did in the past with React and some other framework. But I can't get Qwik to **type safely** let me do this. The concept is simple, I have a TSX component that can be either one of the two elements mentioned above. This is decided through a `multiline` prop. According to the types I will write below, this prop can either be always `true` or not be defined at all. If true…

### CASE-4556 · [🐞] State Not Refreshing/Updating Inside Form Action Callback
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I want to show a loading indicator when the form is submitted using routeAction as follows but it seems the state is not updating even though the callback gets called after the submission is completed. ```typescript export default component$(() => { const action = useFormSubmitAction(); const processing = useSignal(0); return ( <article class="glass"> <Form action={action} onSubmit$={()=>{ processing.value = 1; }} onSubmitCompleted$={(d)=>{ console.log("submission done"); processing.value = 0; }} spaReset > <div class="flex">…

### CASE-4580 · [🐞] Component not re-rendering when props change
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Expected behaviour: `<ProductList>` component should is re-rendered when props (`sortedProducts`) change. Current behaviour: `<ProductList>` component should is not re-rendered when props (`sortedProducts`) change, therefore products remain in the same order. ### Reproduction [link] ### Steps to reproduce 1. Open dropdown 2. Select new sort option 3. Product list is not re-rendered ### System Info ```shell System: OS: macOS 13.1 CPU: (10) arm64 Apple M1 Pro Memory: 9.38 GB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node:…

### CASE-4588 · [🐞] Qwik 0.17.3 showing 404 page after initial setup
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug So i just follow the [ tutorial ]([link]) and just after that i got a 404 screen. check the [stackblitz]([link]) ### Reproduction [link] ### Steps to reproduce Ways to reproduce the problem: - Just run `yarn create qwik` - Select Basic App - Install Dependecies - run `yarn start` ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (12) x64 12th Gen Intel(R) Core(TM) i5-12400F Memory: 929.55 MB / 15.82 GB Binaries: Node: 18.8.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files\nodejs\yarn.CMD npm:…

### CASE-4591 · [🐞] Issue with new loader$ and $action API
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I'm testing out the new server actions API with `loader$` and `action$` but ran into some strange behavior. I created a very simple example here [link] To set the context There is a list of items A form with an input and button which adds your item to the list of items If you click an item it takes you to the page for that item There you can either clear your selection or delete the item This seems to work on first glance however if you perform the following steps you get a bug. 1. Click bob 2. Click delete (this…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4512 · [🐞] V2: prop spread logic broken / changed in CSR
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug It seems that cursors has changed the rendering in CSR mode, causing existing logic that would synchronoize with polymorphic components to break. ### Reproduction [link] ### Steps to reproduce # Reproduction steps 1. Run `pnpm install` 2. Run `pnpm dev` 3. Open [link] 4. Click on CSR Route link 5. Inspect the DOM of the Title text 6. Notice there is no `aria-labelledby` attribute on the root element 7. Change the qwik version to 2.0.0-beta.16 in package.json and run `pnpm install` 8. Run `pnpm dev` 9. Open [link] 10. Click on…

### CASE-4524 · [🐞] Qwik removing nested form tag
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug Nested <form> tags are removed from the template. In this example, the <form> inside a <dialog> element will not be in the final HTML ... ```tsx export default component$(() => { const dialogId = useId(); const open = $(() => { const dialog = document.getElementById(dialogId) as HTMLDialogElement; dialog.showModal(); }); return ( <form preventdefault:submit> <button type="button" onClick$={open} aria-controls={dialogId}> Open Dialog </button> <dialog id={dialogId}> <form method="dialog" stoppropagation:submit> {/*…

### CASE-4531 · [🐞] Modular Forms input loses focus when projected
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: linux
- **Signals**: 👍0 💬2 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug On first page load the input loses its focus when it is projected inside a component. It works when it isn't projected or when it is, only without a state showing in the template. View the reproduction. ### Reproduction [link] ### Steps to reproduce Make sure to refresh page on every input try ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (2) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.18.0 - /usr/local/bin/node Yarn: 1.22.19 -…

### CASE-4574 · [🐞] Can't useStyle$ where the styles are a variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I would like a component to apply global styles using a string value at runtime. Something like this: ` export const StyleView = component$((props) => { useStyles$(props.styles); return null; }); ` However, this throws the error `[vite] Internal server error: Qrl($) scope is not a function, but it's capturing local identifiers: styles Plugin: vite-plugin-qwik` Other suggestions for achieving my goal would also be appreciated. ### Reproduction [link] ### Steps to reproduce Navigate to the /styleTest route in the StackBlitz. ###…

### CASE-4579 · [🐞] Variables only used by onRequest aren't removed on dev server, throws an error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug Qwik loads constant values in files even if they're only used by an onRequest. This causes an error in the browser. For example a `[email]` file: ```ts import { type RequestHandler } from "@user.io/qwik-city"; const HEADERS: Record<string, string> = { "All-My-Headers": process.env.MY_VARIABLE!, }; export const onRequest: RequestHandler = ({ headers }) => { for (const key in HEADERS) { headers.set(key, HEADERS[key]); } }; ``` `process` is not available in the browser and will throw an error. This is awkward to work…

### CASE-4583 · [🐞] `qwik-dom` does not support newer CSS properties
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The `qwik-dom` package is using an old list of CSS attributes, meaning that newer attributes such as `aspect-ratio` cannot be used. ### Reproduction [link] ### Steps to reproduce Run test. Observe failures. Notes: - Setting the `aspect-ratio` directly in the style string does add it to the HTML, but it is not accessible on `element.style` - Setting it on the DOM object is silently ignored The code in question: ```tsx const { screen, render } = await createDOM(); await render(<div />); const div = screen.querySelector("div");…

### CASE-4596 · [🐞] typed context - using same name for interface and variable causes "not serializable" error
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍2 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug This occurred when defining typed context and using same name for the variable and interface. Using type variable instead of interfaces seems to bypass the issue. ### Reproduction [link] ### Steps to reproduce Define a typed context with same variable and interface name: ```typescript export interface MyContext {} const MyContext = createContext<MyContext>('my-context'); ``` Reference context in onClick$: ```typescript const state = useContext(MyContext); return <button onClick$={() => state}>click me</button> ``` Run…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4516 · [🐞] rendering of qwik container on the client leads to an unresponsive ui
- **Principles**: P-A1, P-A4, P-G3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have a host qwik-city application and the container qwik app. I wanna embed on the client side a qwik container to the host, but receive an unexpected behaviour. Here is how things work with the host and the container: 1. user opens page 2. start of rendering host application 3. host application comes across the qwik-container and sends request to its ssr server 4. fetch qwik-container HTML and embed it to the host 5. send to the user combined HTML with host and container UI and scripts And it works fine, until we have an…

### CASE-4526 · [🐞] Bootstrap does not work when imported as sass
- **Principles**: P-A1, P-A4, P-G3 · **Env**: bootstrap, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I am setting up a fresh qwik project using `pnpm create qwik@user`, then adding bootstrap using `pnpm run qwik add bootstrap`. Finally, I am changing the generated import of `boostrap.min.css` to `node_modules/bootstrap/scss/bootstrap.scss?inline`. Importing bootstrap scss would enable customization and usage of the provided utilities (e.g. breakpoints) which I don't get when using the css import. However, when I start the app and navigate to /bootstrap, I am getting an error overlay complaining about missing…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4532 · [🐞] SSG in fresh project not working
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug When running SSG on a fresh qwik project, I immediately run into errors: ``` $ npm run build.server ✓ 34 modules transformed. server/build/q-YWg4fP5u.css 3.68 kB server/entry.ssr.js 18.62 kB server/@user.js 21.16 kB server/q-SuYaUqWW.js 84.01 kB ✓ built in 6.25s Starting Qwik City SSG... Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build. ``` Then three errors occur: ``` Error during SSG Oe is not iterable (cannot…

### CASE-4533 · [🐞] Getting props/restProps inside component$() and turning them into signal doesn't seem to work like expected.
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage/missing info
- **Excerpt**: ### Which component is affected? Qwik Optimizer (rust) ### Describe the bug # Describe Below is the code snippet I wrote for changing aria-busy on an interval and inside the `<Button></Button>` reading that aria-busy turning it to a `Signal` to add transitions using `useTransition` hook. ```tsx import { component$, useSignal, useVisibleTask$, Slot, type PropsOf, type Signal } from '@user.io/qwik'; export default component$(() => { const ariaBusy = useSignal<boolean>(); useVisibleTask$(({ cleanup, track }) => { track(() => ariaBusy.value); const interval = setInterval(() => { ariaBusy.value =…

### CASE-4552 · [🐞] qwik optimizer vite plugin should probably use rollup cache internally
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug The playground wasn't working because rollup was using cached versions of transformed files, which meant that between invocations, the `(ssr)transformedOutputs` maps weren't populated. See [link] So probably the vite plugin should use the rollup cache instead of having internal Map()s ### Reproduction just the playground :) ### Steps to reproduce _No response_ ### System Info ```shell n/a ``` ### Additional Information _No response_

### CASE-4570 · [🐞] Could not resolve entry_QwikCityProvider.js when build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I build project on windows 10 and use command: `pnpm build`. Error log happens: ``` vite v4.3.2 building for production... ✓ 10 modules transformed. ✓ built in 1.56s Could not resolve "./entry_QwikCityProvider.js" from "node_modules/.pnpm/@[email]@[email]/node_modules/@user.io/qwik-city/index.qwik.mjs" file: C:/Projects/frontend/node_modules/.pnpm/@[email]@[email]/node_modules/@user.io/qwik-city/index.qwik.mjs error during build: RollupError: Could not resolve "./entry_QwikCityProvider.js" from…

### CASE-4575 · [🐞] Error: R] Missing "./adaptors/express/vite" specifier in "@user.io/qwik-city" package [plugin externalize-deps]
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug A website that was being built with previous versions is not built anymore when upgraded to Qwik 0.100.0. This is the complete log: ``` > build > qwik build ............ .::: :--------:. .:::: .:-------:. .:::::. .:-------. ::::::. .:------. ::::::. :-----: ::::::. .:-----. :::::::. .-----. ::::::::.. ---:. .:::::::::. :-:. ..:::::::::::: ...:::: npm run build.types npm run build.client npm run build.server npm run lint > build.client > vite build vite v4.2.1 building for production... transforming... ✓ 416 modules…

### CASE-4578 · [🐞] Unwanted transition in MDX pages
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When navigating through MDX pages, previous page's elements does not fully cleared and cause some unwanted element transitions. ### Reproduction [link] ### Steps to reproduce The reproduction contains two MDX pages with following code ```jsx // page A mdx <div class="w-16 h-16 bg-red-500 transition-all"></div> ``` ```jsx // page B mdx <div class="w-32 h-32 bg-green-500 transition-all"></div> ``` These two page is totally independent, so when navigating pages we should remove first page's elements and then insert second page's…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4538 · [🐞] onClick$ not always fired
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When dealing with the `onClick$` event I am expecting that the code is always executed. Looks like there's some racing codition between the default behaviour of anchor's click and the `onClick$` event itself. ### Reproduction [link] ### Steps to reproduce 1. Start the app with `yarn start` 2. Open developer tools 3. Click the custom anchor I added to the page 4. The `onClick$` event isn't fired 5. Change the `onClick$` event for the other simple one. There's also a race condition even with this simples use case. Sometimes it…

### CASE-4565 · [🐞] Reactivity is broken when using props spreading combined with useResource$
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Something weird is happening when passing a resolved resource value as a prop to a component, which passes it as a prop to another component that is using props spreading. Seems like some sort of race condition because adding a delay fixes the problem. ### Reproduction [link] ### Steps to reproduce 1. Open the stackblitz 2. Run the server (dev or preview) 3. See that the two buttons are disabled and say "Text is empty" 4. Type into the text box 5. See that the buttons both now say "Example button" 6. However, the first button…

### CASE-4577 · [🐞] onInput$ event listener is added several times
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When a component is re-rendered, the `onInput$` event listener is added each time without overwriting or removing the old one. This results in the event listener being executed 6 times after the component has been re-rendered 5 times. ### Reproduction [link] ### Steps to reproduce 1. Open StackBlitz link and wait until preview is displayed 2. Enter something in the input element 3. Check the `onInput$` counter Normally, the counter should be at 5 after 5 inputs. However, the counter is at 15. ### System Info ```shell I think…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-4553 · [🐞] Limit on dynamic routes does not work
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬2 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Good morning, I was configuring the dynamic routes theme of my project along with establishing a limit route, as could be done in previous versions and unfortunately I see that it does not work, that it does not correctly detect that limit. It is true that I see in the documentation that this option is no longer described, perhaps it has been removed and I have not realized it, it would be a shame if it were removed, it seemed super useful to me. What happens is that if I have a structure like this: ### Reproduction…

