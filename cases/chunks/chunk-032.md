# Case Chunk 032 — Round 32

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4101 · Wrong types for `latest` resource field
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬1 · closed · labels: typescript
- **Excerpt**: ### Describe the bug At the moment latest is `latest: T | undefined` However, If we have the case, when we have an initial value (`someFetcher` returns list): `const [listResource] = createResource(() => someFetcher, { initialValue: [] });` We have never have the case when `listResource.latest` is `undefined` ### Your Example Website or App - ### Steps to Reproduce the Bug or Issue - ### Expected behavior `latest` should have type `T` when there's `initialValue` ### Screenshots or Videos _No response_ ### Platform - ### Additional context _No response_

### CASE-4102 · createSelector breaks with "undefined"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: ### Describe the bug When using createSelector() with `undefined`, a selector looking for undefined stays active even after the value that is being watched is changed ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. click the top two buttons. notice how only one can be active at a time 2. click the bottom button. it works correctly 3. click one of the top two buttons again. notice how the bottom button continues to say "true" ### Expected behavior All three buttons would behave the same, where clicking any one turns off all the others ### Screenshots or Videos…

### CASE-4105 · <Dynamic {...rest} /> spreads not reactive
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: [link] test button should update img src but no

### CASE-4106 · Bug(solid-element): duplicate content after re-connect the custom element
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: This bug is easy to reproduce with the [example]([link]) just select the custom element, remove it, and re-add it to the dom (by js or by `cmd + z`), the content will be doubled. ![image]([link])

### CASE-4109 · Invalid `class` property value generated during server side rendering - missing a space
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug When using both class and classList in a certain order the SSR'd output doesn't have a space between them ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to [link] 2. Click on output and select server side rendering ``` return _$ssr(_tmpl$, _$ssrHydrationKey(), `depict-placeholder${_$escape(props.class, true) || ""}`); ``` ### Expected behavior ``` return _$ssr(_tmpl$, _$ssrHydrationKey(), `depict-placeholder ${_$escape(props.class, true) || ""}`); ``` (There should be a space after `depict-placeholder` ### Screenshots or Videos _No…

### CASE-4110 · Maximum call stack size exceeded in Suspense error handling on the server
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug If an accessed resource throws an error during SSR, Suspense will go into an infinite loop trying to handle it. This issue only exists in versions `>=1.6.13` so most likely this is a regression caused by this commit: 60f8624db81e5491bdd3f4b69870899976212941 I think I know where the problem is, so I'll try to make a PR ![image]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. `pnpm i` to install deps 2. `pnpm dev` to run the server script 3. look at the error message ### Expected behavior The error should be able to be handled by an…

### CASE-4112 · splitProps doesn't track conditionally added props
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug when props are conditionally added splitProps doesn't seem to track it, even though Object.keys(props) correctly logs the change. Shouldn't it use createEffect under the hood? ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to the link 2. click on the counter 3. observer console logs -> Object.keys correctly logs changing keys inside props object, but "split others change" doesn't log newly added props ### Expected behavior Expect "split others change" to log newly added / removed props ### Screenshots or Videos _No response_ ###…

### CASE-4113 · [Version 1.6.4] Broke compatibility with nodejs 14
- **Principles**: P-A3, P-H1 · **Env**: ios, linux
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug This commit broke compatibility with nodejs 14 : [link]]/commit/a42a5f6e7150a981a979f84c2745a4a4ba03f6ec ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue You can check Zodios build here : [link] ### Expected behavior Should build. Just replace : ```ts proxy ||= !!s && $PROXY in (s as object); ``` with ```ts proxy = proxy || !!s && $PROXY in (s as object); ``` ### Screenshots or Videos And here is the bug i see while building with nodejs 14 (still in maintenance support) : ![image]([link]) ### Platform - OS: Linux - Browser: Node - Version: 14…

### CASE-4115 · ErrorBoundary doesn't render fallback for errors thrown with `runWithOwner`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug When I throw an error inside `runWithOwner`, seems like the error is caught and sent to the ErrorBoundary but the fallback is never rendered. And on subsequent errors thrown, the error is not even caught and thrown in the console. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to playground link 2. Click the Button ### Expected behavior The ErrorBoundary should render the fallback when the button is clicked ### Screenshots or Videos _No response_ ### Platform - Any, even Solid playground - Version ^1.4 ### Additional context _No…

### CASE-4116 · createMutable store triggers effect twice on a single property change. (store spread in effect)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug changing a mutable store property, runs the effect twice instead of once. ```html import { createEffect } from "solid-js"; import { createMutable } from "solid-js/store"; const store = createMutable({ a:1 }); createEffect(() => { console.log({ ...store }); }); setTimeout(() => { store.a = 333; }, 3000); ``` ![image]([link]) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue see playground ### Expected behavior changing a single prop of a store should trigger effect once.

### CASE-4126 · [🐞] image optimizer with imagetools in cloudflare addressed wrong srcset
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬29 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In cloudflare, I see in the build logs that build directory webp images are being built correct in "build/q-[hash].webp", but in browser, developer tools says srcset ist set to "/assets/[filename]-[hash].webp". dev and preview have no problem with it. example here (Demo app): [link] ![image]([link]]/assets/13683303/85beecca-432c-48ac-abcf-07656264cd47) ![image]([link]]/assets/13683303/61655694-5332-4848-af18-dee9dd8e3551) ### Reproduction [link] ### Steps to reproduce cloudflare build ### System Info ```shell System: OS:…

### CASE-4127 · [🐞]Store array update does not rerender list
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬28 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug There is a problem with rendering updated values using list { store.array.map } I can change values only one or twice, depending on code usage after that any further modification is not updating values visually, **however store values are changed** I've created thread on discord [link] I managed to find a solution and it's working but it should be used this way As you can see on the image store.values are different than those that are visible using .map ![problem]([link]) As i mentioned earlier 1 or 2 operations are displayed…

### CASE-4136 · [🐞] Cannot access `$routeLoader$` const before initialization in `npm run preview`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬20 · closed · labels: docs/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug # I am doing… ```shell npm run preview ``` # What I expect is Preview of production server to run successfully to conduct E2E testing with `playwright test`. # What's actually happening Unable to load any route because of the following error: <img width="480" alt="image" src="[link]> Error is happening because in `entry.preview.mjs`, usage of [`routeLoader$`]([link]) happened before its declaration as a `const`. See screenshots of prettified build file below: Usage happened at line 3865: <img width="729" alt="image"…

### CASE-4140 · [🐞] npm run build.server not working as expected
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬17 · closed · labels: bug/DX
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I created a new app with `npm create qwik@user` Add static adapter `npm run qwik add static` Add route `apple` in `src` <img width="371" height="168" alt="Image" src="[link] /> Then run `npm run build.server` Folder `apple` is missing in `dist` <img width="1031" height="367" alt="Image" src="[link] /> This behavior happens most of the time i build. ### Reproduction [link] ### Steps to reproduce run `npm run build.server` ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (12) x64 11th Gen Intel(R) Core(TM)…

### CASE-4145 · [🐞] PrefetchServiceWorker throws `insufficient resources` when navigating while prefetching
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug While the PrefetchServiceWorker prefetches the graph, if you interact/navigate to a new page which triggers another prefetch, the browsers throws errors with insufficient resources. Please see the below video. [link]]/assets/5979984/b38f056e-8baf-48b8-999d-33a63282dfe8 ### Reproduction [link] ### Steps to reproduce `$ ./generate.sh` `$ pnpm i` `$ pnpm preview` Click on the `page` link before the graph finishes prefetching and see 404s thrown. ### System Info ```shell n/a ``` ### Additional Information _No response_

### CASE-4147 · [🐞] Auth.js signIn works in dev but not in production ( cloud run) - CSRF check failed.
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬15 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Auth sign in with github/google works perfectly on dev but when hosted on cloud run there is an error on csrf 403 CSRF check failed. Cross-site POST form submissions are forbidden. The request origin "null" does not match the server origin "[link] ![image]([link]) , "@user.io/qwik": "^1.2.6", , "@user.io/qwik-city": "^1.2.6", const signIn = useAuthSignin Sign in form ![image]([link]) ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 13.4.1 CPU: (8) x64 Intel(R) Core(TM)…

### CASE-4151 · [🐞] SPA reload randomly fails to update the values loaded by the `routeLoader$`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I am making app that uses `routeLoader$` for loading dynamic data. I found the SPA reload sometimes fails to update the data like this. [link] Note that the 3rd reload (around 0:07 at the video) trigger the call of the route loader and logged the count at server side but doesn't change the values in client side. The next click updates the values but doesn't trigger the call. I expected the each reload can update the value. ### Reproduction [link] ### Steps to reproduce Please clone the repo above and ```sh pnpm i pnpm…

### CASE-4159 · [🐞] The behaviour of the cache has changed 1.5.0 (cloudflare)
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug After upgrading from 1.4.5 to 1.5.0 version, the cache stopped working as intended on cloudflare pages. **Headers** - 1.4.5 with **HIT** [link] <img width="538" alt="Screenshot 2024-03-05 at 01 19 37" src="[link]> **Headers** - 1.5.0 [link] <img width="530" alt="Screenshot 2024-03-05 at 01 21 40" src="[link]> An example of code that doesn't work as intended. ``` export const onGet: RequestHandler = async ({ cacheControl }) => { cacheControl({ staleWhileRevalidate: 60 * 60 * 24 * 7, maxAge: 10, sMaxAge: 15, }); }; ```…

### CASE-4161 · [🐞] firebase: deploy issue
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: bug/good first issue/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I followed the instructions from [link] I publish the empty site template to my firebase hosting account. The site shows up fine on the correct url. But, (of course there was a but coming) Some pages to not render if I look in the browser debug console I see some errors of invalid urls for dependencies. As seen in the attached screen shot <img width="956" alt="Errors" src="[link]> ### Reproduction [link] ### Steps to reproduce npm create qwik@user npm install npm run qwik add leaflet-map npm run qwik add firebase npm run build…

### CASE-4164 · [🐞] action$ multipart/form-data breaks production build
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug User cannot upload file with multipart/form-data in production environment using `Form` and `action$`. Expected: User is able to upload files with multipart/form-data in production environment. Here's the offending code snippet. The following in `useSubmit` should convert the `Blob` to an `ArrayBuffer`, then pass to the `sharp` library to optimize and output an image file in the file directory on the server. This works in development, but not production because `form` errors in production. ``` export const useSubmit =…

### CASE-4168 · [🐞] v2 Proxy on client side, [Getter/Setter] and array in object not working for routeLoader
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: bug/waiting for user/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug On server everything logs as expected, but when navigation on client (or using useVIsibleTask) I get following console logs: On server: `serverFunction { test: [Getter/Setter] }` On client: proxy object <img width="350" alt="Image" src="[link] /> ### Reproduction [link] ### Steps to reproduce Repro: - Checkout branch km/client-side-getter-setter - npm i - Look at the correct console log in the server console - Navigate to any test route - Navigate back to homepage - Look at the incorrect console log in server and client…

### CASE-4170 · [🐞] Getting "Failed to construct 'URL': Invalid URL" on nx monorepo on dev serve
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍3 💬12 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In dev mode, running `nx serve` command, when hovering the button I get the following error `Failed to construct 'URL': Invalid URL. ` ![Screenshot 2024-06-29 at 01 04 01]([link]]/assets/126238538/feac96e2-6a7a-4ba5-bde9-e333b2ea1986) ### Reproduction [link] ### Steps to reproduce Run `npm install` and `npx nx serve todo` ### System Info ```shell System: OS: macOS 14.4.1 CPU: (10) arm64 Apple M1 Pro Memory: 49.16 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.1 - ~/.volta/tools/image/node/20.11.1/bin/node Yarn:…

### CASE-4175 · [🐞] Route loader dropping query params on static builds used in hybrid mobile apps
- **Principles**: P-A3, P-H1, P-F4 · **Env**: mobile
- **Signals**: 👍1 💬11 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug Route loader logic is dropping query params on static builds, but is working correctly on SSR builds. It is necessary to return the query string consistently in both SSR and Static builds to support hybrid mobile apps. This was working but broke in a recent qwik release. ### Reproduction [link] ### Steps to reproduce using the sample repo: ```shell pnpm i pnpm build pnpm serve ``` Hover over the link on the home page and inspect the network results. The query string is dropped. ![image]([link]) Now, compare this to an…

### CASE-4181 · [🐞] `useTask$` doesn't behave the same with Link navigation
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug AFAIK, `useTask$` should run in the same deterministic way whether it's server rendered or client rendered. But it doesn't run in the same order when it runs during client side rendering (using `Link` or "show/hide" logic) ### Reproduction [link] ### Steps to reproduce 1. Click on `Page 1 - Go here first` ![image]([link]) 2. Look at the right order of tabs index numbers - ![image]([link]) 3. Click on the link `Page 2 - Click Here` ![image]([link]) 4. Click on the only link on the page ![image]([link]) 5. Look at the wrong…

### CASE-4182 · [🐞] dev build randomly fail
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍2 💬11 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug <img width="910" alt="Screen Shot 2023-01-17 at 14 06 23" src="[link]> ``` 2:05:44 PM [vite] Internal server error: Cannot read properties of null (reading 'useQwikCityEnv') File: /Users/.../node_modules/.pnpm/@[email]/node_modules/@user.io/qwik-city/index.qwik.mjs:276:14 274| }; 275| const QwikCityProvider = /* @user */ componentQrl(inlinedQrl(() => { 276| const env = useQwikCityEnv(); | ^ 277| if (!env?.params) 278| throw new Error(`Missing Qwik City Env Data`); at QwikCityProvider_component_TxCFOy819ag…

### CASE-4185 · [🐞] video tags trigger resize event
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ### Description When adding a simple `<video>` tag to my Qwik app, the Qwik framework triggers a `resize` event unexpectedly. I can listen to this event using the following code block: ```js useOnDocument( "resize", $(() => { console.log("RESIZE----"); }) ); ``` However, when I try to listen for the `resize` event using pure JavaScript in a simple `index.html` file, I do not observe the same behavior (as expected). ### Steps to Reproduce 1. Clone the repository: [qwik-video-tag-demo]([link]) 2. Navigate to the `qwik-app`…

### CASE-4186 · [🐞] After Integrating Builder.io
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ![image]([link]]/assets/26248740/528468d6-8c01-4a73-ae48-50e58094f05d) I'm using npm run dev command. Completely New Project. ### Reproduction none ### Steps to reproduce New Project. Integrate Builder.io npm run dev command. ### System Info ```shell { "name": "my-qwik-site-with-visual-cms", "description": "Site integrated with Builder.io for visual editing", "engines": { "node": "^18.17.0 || ^20.3.0 || >=21.0.0" }, "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime", "private": true,…

### CASE-4187 · [🐞] Stragen Behavior with Docker and csrf-protection
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I build a Docker container with Express once I publish my container to PROD the images and Videos do not get showed. Locally during it works followings things work: - Fonts - Images - svg - Videos Tested with qwik preview, pnpm run dev & docker run. After Deployment only following things work: - Fonts - svg Videos and Images are missing. I did try to turn off the csrf-protection to see if that is the issue but it seems not to work. I will attach two images to compare. <img width="199" alt="Bildschirmfoto…

### CASE-4189 · [🐞] Bundle size regression for Qwik 0.21.0
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In the latest version of Qwik, `0.21.0`, there is quite a lot of eagerly loaded Javascript that was not present in version `0.20.1`. I'm not quite sure where this is coming from, but it is quite a regression for the same app. In the screenshot below, the window on the left is running the starter app on the old version, and the window on the right the latest version. Notice the difference in JS loaded in the Network tab. ![image]([link]) ### Reproduction `pnpm create qwik@user` ### Steps to reproduce Run `pnpm create [email]`…

### CASE-4194 · [🐞] Qwik server$ throws 500 error [Firebase deployment]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to use server$. It looks like the deserializer ([link]]/blob/7ed839f4cc1aa8cba1833d811a82d8a62d5865cf/packages/qwik-city/middleware/request-handler/request-event.ts#L329) gets from request.text() an empty string ''. Which then translates to an error. From the request side it looks like the json has valid data {"_entry":"3","_objs":["\u0002_#s_vZ1JDpk0Fwo","tool","pexels-jang-‘s-:fallen_leaf:-2664216.jpg",["0","1","2"]]} for some reason it doesn't work. Example code: ```ts //server side export const getSignedImageUrl…

### CASE-4196 · [🐞] service-worker.js pre-populates the cache for some bundles that are not present on the current page
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug This is a bug first encountered in Qwik UI in preview and prod. It seems to me to be a build issue, not sure if it's Rollup, Vite or the optimizer. When our application has multiple entry files and multiple context providers, it seems that the service worker starts fetching and pre-populating the cache for some bundles that are not needed on the page. <img width="1470" alt="image" src="[link]]/assets/45822175/2e7af80a-7121-4bb6-8c10-f8855dc77e2f"> As showcased in the screenshot, I understand that the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4103 · Child described as a function is invoked one extra time
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: **Describe the bug** Child described as a function (not wrapped in a div) being invoked an extra time when another child from children's array is removed **To Reproduce** - Go here [link] - open console - click "Add child" - observe double logging of "My mask initiated" ![image]([link]) Explanation: I have a TransitionContainer (yes, I know there's already a library for that), that takes in a child -> animates it by wrapping in Animate -> removes a previous child somewhere mid animation. If Animate returns a function (ex: `return <>{transitioned() ? 'this' : 'that'</>`), then upon removing…

### CASE-4123 · Suspending child also suspends parent outside Suspense
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ```js function Suspend(props) { console.log('rendered'); onMount(() => { console.log('mounted'); props.onMount(); }); onCleanup(() => { console.log('cleaned up'); props.onCleanup(); }); return null; } export default function PageLoader(props) { const [suspending, setSuspending] = createSignal(false); createEffect(() => { console.log('Suspending:', suspending()); }); return ( <> <Suspense fallback={( <Suspend onMount={() => setSuspending(true)} onCleanup={() => setSuspending(false)} /> )} > {props.children} </Suspense> <Transition show={suspending()} class="fixed inset-0 bg-white w-screen…

### CASE-4129 · [🐞] Dynamic class change doesn't work in version "@user.io/qwik" 1.2.14, but works in version 1.2.13
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬25 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Code bellow works fine on version ...13, but not in version ...14 **Qwik 14 doesn't change class on click, but only on page referesh** ``` export const NavLink = component$<LinkProps>((props) => { const location = useLocation(); const pathname = location.url.pathname; return ( <> <li> <Link {...props} class={[ props.class as string, "block rounded py-2 pl-3 pr-4 transition-[hover] hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:p-0 lg:hover:bg-transparent…

### CASE-4146 · [🐞] Can't build project via `bun run --bun`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍2 💬15 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I've been trying to build a project using Bun's [feature]([link]) that allows to replace Node.js binary for a command. However, while Qwik has adapter for Bun's http server, it does not seem to have a full support for bun, because when I'm trying to build my project like this I get following error: ``` $ bun run --bun tsc --incremental --noEmit --pretty $ bun run --bun vite build vite v5.1.4 building for production... ✓ 0 modules transformed. x Build failed in 4ms error during build: Error: [vite-plugin-qwik] Not…

### CASE-4152 · [🐞] SyntaxError: The requested module `[email]` does not provide an export named 'renderToString'
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am testing out `qwik-react` with `framer-motion` and i am having issues. So, i tried creating a new project, integrated react with `pnpm qwik add react`. Then i am getting this error while trying to move the `mui slider` on the `/react` route ```bash QWIK ERROR The requested module '/node_modules/.pnpm/[email]@user.2.0/node_modules/react-dom/server.browser.js?v=af3b17de' does not provide an export named 'renderToString' SyntaxError: The requested module…

### CASE-4197 · [🐞] SSG with empty appdoesn't work
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The output of `npm run build.server` is: ``` % npm run build.server on main -1- > build.server > vite build -c adapters/static/vite.config.ts vite v5.1.4 building SSR bundle for production... ✓ 14 modules transformed. server/@user.js 0.20 kB server/entry.ssr.js 33.75 kB server/q-BSB6CXrI.js 71.17 kB ✓ built in 1.28s Starting Qwik City SSG... Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build. Error during SSG Ne is not…

### CASE-4199 · [🐞] conditional rendering around Slot causes browser rerender of slot contents
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug By placing a component inside the layout.tsx file after the slot, visible via a signal value a rerender of the entire slot takes place You can play it back by clicking on the switch at the top right of the header. Once the kitten appears click again to make it disappear and you will notice that the get resume button, in the hero section, will do the entry animation, this means that the component has been reloaded. layout.tsx code below: ``` export default component$(() => { const show = useSignal(false); return ( <> <Header…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-4104 · image element inside svg "Template html does not match input"
- **Principles**: P-A2, P-A4, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬1 · closed · labels: bug
- **Excerpt**: This is impossible to do: ``` const SomeUI = (props) => { return ( <> <svg style="display: flex; flex-grow: 1; background: white;"> <image src="some.svg"/> </svg> </> ); }; ``` The error: ``` Template html does not match input: <svg style="display: flex; flex-grow: 1; background: white;"><image src="some.svg"></image></svg> <svg style="display: flex; flex-grow: 1; background: white;"><image src="some.svg"></svg> ``` **Expected behavior** The generated html would have the closing tag for the "image" element when inside the "svg" element so it matches what the web-browser changes the html to…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4107 · Top-level For errors with lit but not with hyperscript
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬1 · closed · labels: bug
- **Excerpt**: [link] ```js import { createState, onCleanup } from "solid-js"; import { render, For } from "solid-js/dom"; import h from "solid-js/h"; import html from "solid-js/html"; const App = () => { const [state, setState] = createState({ list: [] }), timer = setInterval(() => setState("list", c => c + [1]), 1000); onCleanup(() => clearInterval(timer)); // works: /* prettier-ignore */ return html`<div><${For} each=(${() => state.list})>${x => html`<p>x</p>`}<//></div>`; // works: return h(For, { each: () => state.list }, x => h("p", x)); // doesn't work: /* prettier-ignore */ return html`<${For}…

### CASE-4117 · `onCleanup` not working in `For` loop Components when using `Suspense` (Causing memory leak)
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug For some reason, When trying to use `onCleanup` inside `For` loop components and using `Suspense` makes the `onCleanup` never run. This also causes memory leaks to happen. Please see the Stackblitz for better understanding. ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Open the console. 2. Switch between channels and see that nothing is getting logged. 3. Comment out the code for `Suspense` in `Messages.jsx` at line 34 4. Reload the page (Required) 5. Switch between channels again and see that `"clean"` is getting logged as it should.…

### CASE-4172 · [🐞] useTask$/useVisibleTask$ produce unexpected behavior
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The behavior I'm seeing is that a server-side useTask$ is running, but the changes are not being applied to the rendered HTML that is sent to the client. The cleanup callback is also being called immediately which seems unintended. More detail in the repro steps. ### Reproduction [link] ### Steps to reproduce 1. Open the StackBlitz 2. Start the server (`npm run preview`) 3. Open the site 4. See that the status is `init` rather than `mounted`. 5. See that using `<Link>` to navigate away does not switch to the `unmounted` status…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4108 · [JSX] [bug] `prop:foo={123}` compiles the value `123` into a string `"123"`.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug Given a JSX expression like this one: ```jsx <c-e prop:someProp={456} /> ``` the `prop:someProp` gets compiled into: ```js _el$.someProp = "456"; ``` ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. visit that playground link 2. see console 3. see output tab ### Expected behavior Expected output: ```js _el$.someProp = 456; ``` ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] ### Additional context _No response_

### CASE-4114 · Children and spreading `hydrate` bug
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: firefox, linux
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug Maybe closely related to [ref]. Console gives ``` Uncaught TypeError: node.setAttribute is not a function ``` Happens on `hydrate`. Current workaround: Wrap the element that use spread props [email] [email] ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Go to my example 2. Open console devtools ### Expected behavior No error ### Screenshots or Videos _No response_ ### Platform - OS: Linux - Browser: Firefox - Version: 102 ### Additional context _No response_

### CASE-4122 · Context can't read falsy values
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, firefox, macos, windows, linux, react
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug Context can't read falsy values since it's checking the result of the lookup with `||`. [link]]/blob/20cb1528e6fc35a7e899fb93598c61806b42f162/packages/solid/src/reactive/signal.ts#L1093 ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue Go to [link] ### Expected behavior Falsy values should be read. ### Screenshots or Videos _No response_ ### Platform - OS: [e.g. macOS, Windows, Linux] - Browser: [e.g. Chrome, Safari, Firefox] - Version: [e.g. 91.1] ### Additional context _No response_

### CASE-4128 · [🐞] Path Resolution Issue: '~/' Prefix Not Resolving Modules Properly
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows
- **Signals**: 👍1 💬26 · closed · labels: bug/good first issue/waiting for user/PR welcomed/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am running npm start for the first time, What i expect is the first renfer of Qwik. What actually happening is ![image]([link]) ### Reproduction [link] ### Steps to reproduce Create the Basic app template followed by npm install and finally npm start ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz Memory: 2.11 GB / 7.85 GB Binaries: Node: 18.17.1 - C:\Program Files\nodejs\node.EXE npm: 9.8.1 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan…

### CASE-4130 · [🐞] Cannot use environment variables in Auth plugin on Vercel Edge Functions
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: edge
- **Signals**: 👍2 💬25 · closed · labels: waiting for user/router
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug `env.get()` is not able to read enviroment variables set in Vercel's UI. I only tested this in `serverAuth$`, the `qwik-auth` helper method. Not sure what the scope is exactly. I also tested `process.env` while I was at it and it prints nothing in Vercel, but loads of stuff in my local machine (although that might be intended by Vercel and/or QwikCity). ### Reproduction [link] ### Steps to reproduce - npm create qwik@user - pnpm install - pnpm qwik add auth - pnpm qwik add vercel-edge - add `if (!env.get("AUTH_SECRET"))…

### CASE-4132 · [🐞] 1.8.0 regressions (slow service worker and larger app)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 127, firefox 127
- **Signals**: 👍2 💬21 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I tried to update to qwik from 1.7.2 to 1.8.0 today (no other deps were updated). TLDR: In my opinion it seems like the service worker is loading too much unrelated code on some interactions. - I'm getting up to 2.5 second delays on chrome 127 (6 seconds on firefox 127) for files to load from the service worker when interacting with an "add to cart" button on the page. If the service worker is enabled and i click the button, 132 requests and 103kb is loaded in the network tab. If I disable the service worker completely and…

### CASE-4133 · [🐞]Building Prisma with Vercel-Edge generates compile errors
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍1 💬21 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I created the starter app and added two integrations: Prisma and Vercel-Edge. Here is the sequence: - added Prisma integration, generated the Prisma client, and ran the sample - everything worked fine, locally. - added Vercel-Edige integration and ran 'pnpm run build'. Build FAILS with this error: - .prisma/client/index-browser" is imported by ".prisma/client/index-browser?commonjs-external", but could not be resolved – treating it as an external dependency. error during build: TypeError [PLUGIN_ERROR]: Invalid module…

### CASE-4134 · Context in Layouts
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox
- **Signals**: 👍2 💬21 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) W10 / Firefox ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour I expected the consumption of a context to work fine within a route given a layout wrapped in a provider. ### Actual Behaviour I get the following error: > Code(13): Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider() ### Additional Information I've pushed a fresh Qwik City install in an example repo, then [applied the simplest…

### CASE-4139 · [🐞] Click-to-Source not working on Windows
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍21 💬18 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The Click-to-Source debug feature stopped working for me a few weeks ago. If I try to click an element with `alt+click` I get a chrome console error ```Not allowed to load local resource: file:///C:/_work/websites/qwik-error/src/routes/layout.tsx:21:9``` and it doesn't open the file in vscode. It works with stackblitz but not on my local machine. I'm on Windows 10. ### Reproduction n/a ### Steps to reproduce pnpm create qwik pnpm dev try to Alt-click something see error in chrome console ### System Info ```shell System: OS:…

### CASE-4141 · [🐞] Qwik - Build is Aggressively Treeshaking with Firebase
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, vite
- **Signals**: 👍0 💬17 · open
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I've been working with the Firebase team to get Firebase working on Edge functions. [link] Firebase now works on ever single Framework, even in Edge Environments (Bun, Deno, Cloudflare)... except on Qwik. ### Reproduction [link] ### Steps to reproduce Here is issue on Firebase with deployment instructions: [link] **Repo:** [GitHub]([link]) **Demo with error:** [Vercel Edge]([link]) ### System Info ```shell Vercel Edge (no way to currently test this on Vercel Functions as there is not a Plugin) ``` ### Additional…

### CASE-4156 · [Bug] scss with Qwik starter and ssr is broken
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: opera, chrome, macos, vite
- **Signals**: 👍0 💬14 · closed · labels: bug
- **Excerpt**: ### Qwik Version v0.0.34 ### Operating System (or Browser) macOs + Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour scss styles loaded correctly ### Actual Behaviour 1. `npm init qwik@user` 2. Choose Starter, Express and add Prettier 3. `cd qwik-app` 4. `npm install` 5. `npm install sass` <-- UPDATE 6. add .mytitle { color: red; } inside global.css 7. add `mytitle` class to h1 selector inside `app.tsx` 8. rename global.css to global.scss 9. fix global.css import inside root.tsx 10. run `npm run dev.ssr` and…

### CASE-4157 · [🐞] ~300ms "Element render delay", qwik is waiting for assets download before rendering HTML (see [link] to reproduce).
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬13 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In Chrome Developer Tools -> Performance tab I have noticed that there is a ~300ms "Element render delay" in my project(and confirmed this also happens on [link] homepage) where qwik seems to wait while its first bunch of assets are downloaded(few initial js, css, fonts and bundle-graph.json). Screenshots from qwik.dev, showing the issue: <img width="1561" height="749" alt="Image" src="[link] /> The waiting gap is in the "Element render delay" from "Finish loading"(after "Parse HTML") <img width="540" height="173" alt="Image"…

### CASE-4163 · [🐞] Can't set multiple Set-Cookie Headers (Middleware)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, vite
- **Signals**: 👍0 💬13 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I'm setting multiple cookies in a single request. I'm using the azure swa middleware to create an azure function. The problem is that chrome, edge, firefox etc. can't parse multiple cookies from a single set-cookie header, so these browsers will only set one cookie and not all. Vite did return a set-cookie for each cookie, so I didn't find the bug before nearly going live. I already found the problem in the code. It's the mergeHeadersCookie function in the request-handler middleware, it uses the header append function.…

### CASE-4166 · Slot fallback not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 104, macos, typescript
- **Signals**: 👍0 💬13 · closed · labels: bug
- **Excerpt**: ### Qwik Version qwik: 0.0.101, qwik-city: 0.0.101 ### Operating System (or Browser) MacOS Monterey 12.3.1 / Chrome 104.0.5112.79 ### Node Version (if applicable) 14.19.1 ### Which component is affected? Qwik Runtime ### Expected Behaviour Fallback slot showing ### Actual Behaviour Fallback slot not showing ### Additional Information on typescript error: Type '{ children: string; name: string; }' is not assignable to type 'IntrinsicAttributes & { name?: string; }'. Property 'children' does not exist on type 'IntrinsicAttributes & { name?: string; }'.(2322) also tried it on the playground and…

### CASE-4167 · Inputs lose state on quick interactions (or on slow networks)
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: opera, chrome, chromium, macos, ubuntu
- **Signals**: 👍0 💬13 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.42 ### Operating System (or Browser) macOS Monterey (Chrome v.104) and Ubuntu 20.04 LTS (Chromium v.104) ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour When interacting with inputs the text typed into them should persist but if the user is fast enough and the network is slow the text can actually be completely (or partially) removed. ### Actual Behaviour You can see in this [stackblitz reproduction]([link]) that if you type quickly enough in the first input and switch into the second and keep typing, the…

### CASE-4169 · [🐞] Script 0:0 in Safari Mobile
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, linux, mobile
- **Signals**: 👍0 💬12 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug My website constantly crashes in Safari Mobile. We used `eruda` and found out that we get these errors in the console: ``` Error: Script error. at :0:0 ``` I checked the `view source` and realized that do have empty `<script` tags. For example: <script on-document:qcinit="q-Ct-gw6dj.js#s_Zo4wsVM0Ivk" on-document:qinit="[ref]" q:key="BV_1"></script> I don't know if they are commented out or not. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 6.8 Debian GNU/Linux 12…

### CASE-4171 · [🐞] incompatibility of 1.3..4 with undici 6.3.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬12 · closed · labels: bug/DX
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug version 1.3.4 do not work with undici 6.3.0. It works with undici 5.28.2. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (4) x64 Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz Memory: 1.00 GB / 7.86 GB Binaries: Node: 20.10.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 10.2.3 - C:\Program Files\nodejs\npm.CMD pnpm: 8.14.0 - ~\AppData\Local\pnpm\pnpm.EXE Browsers: Edge: Chromium (120.0.2210.121) Internet…

### CASE-4173 · [🐞] Build with Prisma and Netlify adapter FAILS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, edge/, vite
- **Signals**: 👍0 💬12 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I added Prisma in endpoints and tried fetching data with it. The build fails with Netlify with the following error: ``` Packaging Edge Functions from .netlify/edge-functions directory: - entry.netlify-edge error: Uncaught (in promise) Error: Relative import path ".prisma/client/index-browser" not prefixed with / or ./ or ../ and not in import map from "file:///root/.netlify/edge-functions/entry.netlify-edge/assets/@user.js" ``` ### Reproduction NA ### Steps to reproduce _No response_ ### System Info ```shell NA…

### CASE-4178 · [🐞] If you set trailingSlash: false, after packaging, index.html will not appear
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, macos
- **Signals**: 👍3 💬11 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If you set trailingSlash: false, after packaging, index.html will not appear ![image]([link]) ### Reproduction yarn create qwik@user ### Steps to reproduce trailingSlash: false yarn build ### System Info ```shell System: OS: macOS 12.5 CPU: (8) x64 Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz Memory: 23.00 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 18.16.0 - /usr/local/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 9.5.1 - /usr/local/bin/npm pnpm: 7.5.2 - /usr/local/bin/pnpm Browsers: Chrome: 115.0.5790.102 Edge:…

### CASE-4183 · CSS included using useStylesScoped$ disappears after re-rendering
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: opera, chrome
- **Signals**: 👍0 💬11 · closed · labels: bug/needs reproduction
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour Provided the following code : ```jsx export const myComponent = component$((props: MyComponentProps) => { useStylesScoped$(`{ ul.show { position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px); } }`) const store = useStore({ open: false }); return ( <> <button onClick$={() => store.open = !store.open}>Push me</button> <ul class={`${store.open ? 'show' : ''}`}></ul> </>); ``` I'm…

### CASE-4190 · [🐞] Problems with typescript decorators (Unexpected token `@`.)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, typescript, vite
- **Signals**: 👍4 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug So I wanted to build classic website like in PHP/NextJS, no edge functions etc. and I wanted to use TypeORM and I was meet with error which said: ``[plugin:vite-plugin-qwik] Unexpected token `@`. Expected this, import, async, function, [ for array literal, { for object literal, @ for decorator, function, class, null, true, false, number, bigint, string, regexp, ` for template literal, (, or an identifier`` which I guess is because of TypeORM uses decorators, At first after some googling internet said it may be…

### CASE-4191 · creating an onGet in a layout and an index file collide with each other.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos
- **Signals**: 👍1 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome / MacOS ### Node Version (if applicable) 16.13.2 ### Which component is affected? Qwik City ### Expected Behaviour when specifying multiple nested `onGet` calls between `layout.tsx` and `index.tsx` files I'd expect them all to resolve with their specified resource data. ### Actual Behaviour when specifying multiple nested `onGet` calls between `layout.tsx` and `index.tsx` files they seem to all resolve to the leaf layout/index that had an `onGet` defined. ### Additional Information if this is as designed, that's fine, but I'm not…

### CASE-4192 · Routing to a component with `onPost` is causing server dependencies to be loaded into the client
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍6 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 18 ### Which component is affected? Qwik City ### Expected Behaviour When using the `<Link />` component to route to another component that has `onPost` (or any other `on___` methods) defined, the libraries imported and utilized within `onPost` _should not_ be imported into the client. ### Actual Behaviour When using the `<Link />` component to route to another component that has `onPost` (or any other `on___` methods) defined, the libraries imported and utilized within `onPost` _are_ imported…

### CASE-4193 · Out of bounds inflate access. Close not found.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.107 ### Operating System (or Browser) Windows / Chrome ### Node Version (if applicable) 16.13.1 ### Which component is affected? Qwik Runtime ### Expected Behaviour I created a qwik city basic project and added a basic component for testing called user menu. ``` ts //usermenu.tsx import { component$, useStore } from "@user.io/qwik"; export const UserMenu = component$(() => { const store = useStore({isOpen: false}); return ( <div> <button onClick$={() => (store.isOpen = !store.isOpen)}> User User </button> {store.isOpen && <span>User Menu is open!</span> } </div> ); });…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4111 · New state field of createResource returns inconsited values on server & client (resolved vs ready)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: It seems there are some small inconsistencies in the `state` values of `createResource()` between server and client. While the `client` returns the `state: ready` when the resource is available, the `server` returns `state: resolved` See the corresponding lines I could find in the solid server: [link]]/blob/53db3f0facad88748900ca1acdabdeeb8675feeb/packages/solid/src/server/rendering.ts#L392 [link]]/blob/53db3f0facad88748900ca1acdabdeeb8675feeb/packages/solid/src/server/rendering.ts#L425

### CASE-4118 · Text node inside a fragment causes weird behavior with SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug Placing text nodes inside a fragment without any wrapping elements causes some weird behaviors like not being cleaned up when the component gets disposed (not sure that's the one happening, but it looks like) ### Your Example Website or App [link] ### Steps to Reproduce the Bug or Issue 1. Clone the repository, `yarn`, `yarn dev`. 2. Launch the page by clicking on the URL printed on the console. 3. Click the link on the page. 4. Text node `Bar` remains. 5. (Open `pages/index.page.jsx`, wrap `Bar` in elements like `<span>`, reload and confirm that the bug is gone) ###…

### CASE-4120 · Suspense cancellation issue with stream SSR
- **Principles**: P-F4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug It seams that the hydration of suspended components does not get cancelled when the component is unmounted before the loading is completed. This leads to additional DOM fragments if for example a page navigation occurs. ### Your Example Website or App stream ssr example in solid repo [link]]/tree/main/packages/solid-ssr ### Steps to Reproduce the Bug or Issue - Build and start the stream SSR example of this repo with `lerna run start:example:stream`. - Navigate to [link] - Quickly click on the "Home" navigation tab before the entire content is loaded. - The resulted page…

### CASE-4121 · <Dynamic /> is Unescaped in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug This code will spit out unescaped html with SSR. Client rendering (or post-hydrated client rendering) writes text. ```tsx <Dynamic component="p">{"<script>alert('hi');</script>"}</Dynamic> ``` ### Your Example Website or App I was prerendering some SSG locally in this case. ### Steps to Reproduce the Bug or Issue I used `renderToStringAsync` on the above jsx and got the unexpected output. ### Expected behavior I would expect this to escape from the server or at least behave consistently with client rendering behavior (though i do think this is a very sharp sword if it…

### CASE-4137 · [📖] Docs and error message: SSR should warn when changing rendered state
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When a store is initialized in a parent component on the server side and the state is read in the JSX area, Qwik "places" a subscription on the state. If now in the same process in the JSX area an inline-component is included on the server side, which in turn contains a normal component and the state of the store is changed in it via `useTask$`, Qwik does not subsequently update the subscription in the parent element. In simple words: In the following reproduction Qwik places a subscription on the `form.field.active` signal in…

### CASE-4138 · [🐞] Context does not exist after SSR and navigating to a new page using <Link>
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug After providing a context from the root component, it no longer exists when navigating to a new page. The following error is thrown: ``` Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider() '...' Error: Code(13): Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider() ``` ### Reproduction [link] ### Steps to reproduce - Provide a context on the root component (or from within a…

### CASE-4142 · [🐞] Vercel build fails with mongodb - Cannot bundle Node.js built-in "stream"
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬16 · closed · labels: bug/good first issue/needs reproduction/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I'm trying to use Atlas (using the `mongodb` npm package) with my vercel qwik.js app but am getting this error on build in vercel, so I think vercel can handle using the MongoDB package. It works fine locally. ``` [commonjs] Cannot bundle Node.js built-in "stream" imported from "node_modules/.pnpm/[email]/node_modules/mongodb/lib/cursor/abstract_cursor.js". Consider disabling ssr.noExternal or remove the built-in dependency. ``` I have enabled the Vercel-Atlas integration and have also managed to deploy the…

### CASE-4150 · [🐞] Code(13): Actual value for useContext(button-context) can not be found, make sure some ancestor component has set a value using useContextProvider()
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/runtime/DX/V2/blocked by another PR
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I get an error on the client when using the Context API, when I want to update a signal from a child. See the repro to understand. The error looks like: `Error: Code(13): Actual value for useContext(button-context) can not be found, make sure some ancestor component has set a value using useContextProvider(). In the browser make sure that the context was used during SSR so its state was serialized.` ### Reproduction [link] ### Steps to reproduce Open the Repro url above: There is 2 examples. 1. Open the browser console 2.…

### CASE-4153 · [🐞] inconsistent rendering between SSR and CSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/good first issue/runtime/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug SSR interprets `<button disabled={''}>` as disabled but CSR interprets it as NOT disabled. ### Reproduction [link] ### Steps to reproduce Click on the toggle button and observe that the target button disabled does not correctly follow from SSR. ### System Info ```shell n/a ``` ### Additional Information _No response_

### CASE-4158 · [🐞] SSG disables SPA navigation
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: bug/router/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug SSG should just be like a pre-cached SSR, but when visiting SSG pages, Link does not cause SPA navigation. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell v2 but probably v1 too ``` ### Additional Information _No response_

### CASE-4179 · [🐞] context change in useTask$ not rendering
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm building a Tab list with this API : ```jsx export default component$(() => { return ( <TabGroup> <Tab label="Label">Some content in the panel</Tab> </TabGroup> ); }); ``` The labels in Tab update a context in the TabGroup to display the list of labels. It works well with `useVisibleTask$` but not with `useTask$`, so it means rendering on the browser instead of pure HTML from SSR. Here is the code : ```jsx const TabsContext = createContextId<any>('TabsContext'); export const TabGroup = component$(() => { const tabs =…

### CASE-4198 · [🐞] Usage of globalAction$ on SSR streaming is not supported
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · open · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I'm building an app with multiple parts that stream server-side rendering (SSR) fragments, each with a component called `globalAction$` inside. Here's the hitch: when this global action tries to do its thing, it redirects requests to the main app host instead of sticking to its own turf. I took a peek and it looks like this hiccup might be because the global action uses `useLocation` to figure out where it's supposed to be, but it's not properly using the fragment's specific `q:base`. Weirdly, other components like…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4119 · Inconsistent Treatment of `undefined` in SSR
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug
- **Excerpt**: ### Describe the bug Attributes with an `undefined` runtime value are treated differently in SSR than they are in client rendering. In client rendering, attributes are completely removed when the value is `undefined` but in SSR, sometimes the attribute is serialized with `""` and sometimes its serialized as _string_ `"undefined"`. In my particular example, I'm using `aria-describedby`, where a valid ID is required (and in my particular case, isn't known until the client hydrates so SSR _without_ the attribute is desirable). ### Your Example Website or App [link] ### Steps to Reproduce the Bug…

### CASE-4124 · Missing onFocusIn and onFocusOut JSX types.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬0 · closed · labels: bug/typescript
- **Excerpt**: **IMPORTANT: If you have a question or an idea for a new feature use Github Discussions instead** **Describe the bug** Solid JSX declaration doesn't include onFocusIn and onFocusOut event types. Note that event itself works fine, it is even delagated, just types are wrong. **To Reproduce** ```tsx <button onFocusIn={onFocusInHandler}></button> ``` ``` (JSX attribute) onFocusIn: () => void Type '{ children: number; type: "button"; onClick: () => number; onFocusIn: () => void; }' is not assignable to type 'ButtonHTMLAttributes<HTMLButtonElement>'. Property 'onFocusIn' does not exist on type…

### CASE-4174 · [🐞] getting CORS while using express adapter with server$ in production build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍7 💬12 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug im trying to use server$ with express adapter then it always getting CORS error it probably because whenever securityMiddleware method [link] checking it returns http instead of https some user also get this error in discord [here]([link]), i've also saw in express adapter vite config you can basically set origin url but i trying to add environment variable URL with no luck [link] because with cloudflare pages its all fine using server$ in the cloudflare adapter that are also has origin url setting here: [link] this is…

### CASE-4177 · [🐞] Computed unmount & component unmount race condition issue
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: typescript
- **Signals**: 👍3 💬11 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug This bug is about the incorrect order of evaluation/unmounting computed variables and unmounting the component itself. Suppose, we have a dynamic route `[...path]` which loads different components depending on the `path` variable. Then, the global store is populated with different data depending on the `path`. The minimal demo app has the following store: ```typescript export enum DataType { empty = 'empty', first = 'first', second = 'second' } export type FirstData = { key1: { key1: string } } export type SecondData = { key2:…

### CASE-4188 · [🐞] aria-current not updating
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm building a `PageLink` component that set `aria-current` to page when the current page is the one described by the href. It works well except that the first anchor is not updated on page change. I suppose it has to do with the `useLocation`, but I'm not sure. ```jsx import { component$, Slot, useComputed$ } from '@user.io/qwik'; import { useLocation, Link } from '@user.io/qwik-city'; import type { LinkProps } from '@user.io/qwik-city'; const normalize = (pathname: string) => { return pathname[pathname.length - 1] === '/' ?…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4125 · [vite] Internal server error: Failed to load PostCSS config
- **Principles**: P-G4, P-E3 · **Env**: opera, vite, tailwind
- **Signals**: 👍5 💬46 · closed · labels: bug
- **Excerpt**: ### Qwik Version "@user.io/qwik": "0.0.38", "@user.io/qwik-city": "0.0.23" ### Operating System (or Browser) Win10 ### Node Version (if applicable) 16.13.1 (Currently using 64-bit executable) ### Which component is affected? Starters / CLI ### Expected Behaviour Opening the initial page in the browser ### Actual Behaviour Steps to reproduce from the terminal: 1. npm init qwik@user 2. Select a name to the project 3. Select starter: Qwik city 4. Select server: Cloudflare Pages 5. Select features: Prettier, Tailwindcss 6. Move to the project folder 7. Run npm install 8. Run npm start ###…

### CASE-4131 · [🐞] `pnpm create qwik@user` asks to install dependencies but does not install them
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍1 💬23 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Let's create a Qwik App ✨ (v1.1.1) │ ◇ Where would you like to create your new project? (Use '.' or './' for current directory) │ ./qwik-app │ ● Creating new project in D:\Source\qwik-app ... 🐇 │ ◇ Select a starter │ Basic App (QwikCity) │ ◇ Would you like to install pnpm dependencies? │ Yes │ ◇ Initialize a new git repository? │ Yes │ ◇ Created App 🐰 │ ◇ Git initialized 🎲 │ ◇ Failed to install dependencies 📋 ### Reproduction [link] ### Steps to reproduce pnpm create qwik@user ### System Info ```shell System: OS: Windows…

### CASE-4143 · [🐞] bind:value is broken when part of props spreading
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬16 · closed · labels: bug/runtime/DX
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If I define: ``` const Input = component$((props: any) => { return <input {...props} />; }); ``` That doesn't work to set `bind:value={xxx}` on `Input`. But this implementation does work: ``` const FixedInput = component$(({ "bind:value": bindValue, ...rest }: any) => { return <input {...rest} bind:value={bindValue} />; }); ``` ### Reproduction [link] ### Steps to reproduce - Type some text under Test 1/Test 2 and see they don't work - Test 3 works, it uses a native `<input>` - Test 4 works, it has a manual property set for…

### CASE-4144 · Qwik City Netlify starter does not build
- **Principles**: P-G4, P-E3 · **Env**: opera, ubuntu
- **Signals**: 👍1 💬16 · closed · labels: bug/router
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) Ubuntu 22.04.1 ### Node Version (if applicable) v16.15.0 ### Which component is affected? Starters / CLI ### Expected Behaviour 1. `npm init qwik@user` - select Qwik City with Netlify 2. npm install 3. npm build - current build throw error, and I manually fixed errors following [ref] 4. deploy to netlify Expected: should show the initial start example following ### Actual Behaviour Netlify site shows "TypeError: Cannot read properties of undefined (reading 'write')" on the page, with a 500 HTTP error when fetching `/` ### Additional…

### CASE-4149 · [🐞] Removing in a list of input remove the last input
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When working with a list of input bound to a `useStore` removing one item from the list always remove the last ```jsx export default component$(() => { const form = useStore<{ list: string[] }>({ list: [], }); return ( <form> <ul> {form.list.map((_, i) => ( <li key={i}> <input value={form.list[i]} /> <button type="button" onClick$={() => form.list.splice(i, 1)}> Remove </button> </li> ))} </ul> <button type="button" onClick$={() => form.list.push('')}> Add </button> </form> ); }); ``` I believe the error comes from `key={i}`.…

### CASE-4154 · [🐞] Static pages - q-data.json 405 error
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I am creating a web page and I am trying to make a login form. On localhost it works correctly, but when I try it on cloudflare pages, it doesn't work. I am using cloudflare-pages, prisma and static site generator adapters. The error is that when submitting the form, it tries to access the ``q-data.json`` file using POST method, and this returns a 405 status code, however, when trying to access this file using GET method it does not give an error. ### Reproduction [link] ### Steps to reproduce Go to [link] and try to…

### CASE-4160 · [🐞] <input /> Values received by server are out of sync with client.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug It took me awhile to find out how to recreate this issue. But there's something odd about how actions receive data. They are often out of sync with what's on the client. I have also noticed that after client-side navigation Qwik will strip value attributes out of <input /> HTML. But the form still sends a potentially out-of-date value to the server. When submitting this form, I see three network calls: 1. [link] the payload has signalValue as "world", this is also the fetch that throws the redirect. 2. [link] This looks…

### CASE-4162 · [🐞] "Missing Object ID for captured object" error when using useComputed$ with mutable props
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have an `<Icon>` component that modifies the `props` in a `useComputed$` and spreads the result in an `<i>` element. I expect this to work (it was working in v1.2.6) but I get a "QWIK ERROR Error: Code(27): Missing Object ID for captured object" instead. I'm not sure what the exact problem is but I've managed to replicate it in a simpler form that doesn't represent the actual real-world use case. From what I can tell the replication requires: (1) mapping over an array, (2) accessing the entire `props` object (i.e. not just a…

### CASE-4165 · [🐞] Cross-site form submission incorrect origin match error
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime/city ### Describe the bug On my local dev environment (eg: [link]) when I submit a form using `action$` I get error "Cross-site POST form submissions are forbidden". If I console log `request.headers.get('origin')` and `url.origin` within the `securityMiddleware` function [link] `request.headers.get('origin')` returns the correct https url [link] and `url.origin` returns incorrect http url [link] Example component ```tsx import { component$ } from '@user.io/qwik'; import { action$ } from '@user.io/qwik-city'; export const signinAction =…

### CASE-4176 · [🐞] Stores without writers don't get serialized
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: bug/waiting for team/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have a component that renders search results. The search results will be rendered as list items that will have a onclick$ event handler attached. ``` return ( <> <button onClick$={()=> searchResults.value = [...searchResults.value, "Item x"] }>Simulate search</button> <p>Search results</p> <ul> {searchResults.value.map((album) => ( <li><span onClick$={ () => addToCart(album)}>Click to add to cart</span></li> ))} </ul> <input id="removeMeAndResultsCannotBeAdded" hidden="hidden" onClick$={()=>addToCart("dummy") }/> </> ); ```…

### CASE-4180 · [🐞] strange behaviour: Code(3): Only primitive and object literals can be serialized
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬11 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Expecting not to get an Code(3) Only primitive and object literals can be serialized error I am attaching qwik-city route example file: It contains one input field and form validation hook. In the file there are 5 commented examples of different combinations when I get or don't get mentioned error. Combinations are - custom Input component - translation function hook - form validation hook, ### Reproduction [link] ### Steps to reproduce comment example with no error and uncomment other examples ### System Info ```shell System:…

### CASE-4184 · [🐞]React Integration issues -
- **Principles**: P-G4, P-E3 · **Env**: react, vite
- **Signals**: 👍0 💬10 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug I am integrating React to use @user/react-components. 1- building the project shows 2000+ messages from node_modules @user+matrials on "use client" was ignored. 2- can not start the project hence errors in src/integrations/react/mui.tsx - but can workaround it 3- Add ESM package of @user/react-components and use Input module errs on runtime trying to use CommonJS -> Error: ```[vite] Named export 'Input' not found. The requested module '@user/react-components' is a CommonJS module, which may not support all module.exports as…

### CASE-4195 · [🐞]Form gets checkbox data
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug The form uses action to submit multiple CheckBox data and cannot obtain the data array. Only a single CheckBox data can be obtained ### Reproduction [link] ### Steps to reproduce pnpm run dev ### System Info ```shell System: OS: macOS 14.4.1 CPU: (8) arm64 Apple M1 Memory: 82.20 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.12.2 - /opt/homebrew/opt/node@user/bin/node Yarn: 1.22.22 - /opt/homebrew/opt/node@user/bin/yarn npm: 10.5.0 - /opt/homebrew/opt/node@user/bin/npm pnpm: 9.0.6 -…

### CASE-4200 · [🐞] How to create a Form in Qwik to be deployed in Vercel?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I have created a minimal reproduction in a [Qwik empty project]([link]), using the static adapter. Take a look first: [Github Project Repository]([link]) [Vercel Project]([link]) Get Code ``` git clone [link] cd ./qwik-ssg-modular-forms pnpm i pnpm run start ``` Take into account I am trying to build just a simple Form in Qwik. I just need to sent it, that's because I am using my keys to access Mongo Or Supabase. ### Reproduction [link] ### Steps to reproduce Follow those steps to create [Qwik empty project]([link]),…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-4135 · [✨] stopPropagation:{eventName}
- **Principles**: P-A5 · **Env**: unspecified
- **Signals**: 👍1 💬20 · closed · labels: enhancement/needs triage
- **Excerpt**: ### Is your feature request related to a problem? I want to implement a card and like button positioned absolute on top of it. When a user clicks on the card body, a details drawer appears on the screen. But if the user clicks the button, a backend request is called. [link] ### Describe the solution you'd like I want to have stopPropagation:{eventName} attribute similar to preventDefault:{eventName}. ### Describe alternatives you've considered 1. useVisibleTask$ - Doesn't work :( Why? [link] 2. [Event target]([link]) - Current solution [link] ### Additional context _No response_

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-4148 · [🐞] useVisibleTask$() maybe the cause of flickering (dark mode) after the first render
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: bug/waiting for team
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Upon page load, the code checks localStorage for a dark mode flag. This check must be executed in the browser. If the flag is not set, the system theme mode is evaluated and the flag is set accordingly for the next time. As the default mode is the light mode, the useVisibleTask$() function only runs after the page has rendered with a white background. This function then switches the theme to dark, resulting in a flicker on the initial load. The following code block shows the implementation of the useVisibleTask$() function in…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4155 · [🐞] Cannot use bootstrap css/sass
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: macos, bootstrap, vite
- **Signals**: 👍1 💬14 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug I can't use bootstrap sass. I get the following error, ``` [plugin:vite:css] [sass] Undefined variable. ╷ 2 │ @user $breakpoint in map-keys($grid-breakpoints) { │ ^^^^^^^^^^^^^^^^^ ╵ node_modules/bootstrap/scss/utilities/_api.scss 2:31 root stylesheet ``` ### Reproduction [link] ### Steps to reproduce Run ``` npm install npm run dev ``` ### System Info ```shell System: OS: macOS 13.1 CPU: (10) arm64 Apple M1 Pro Memory: 92.16 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.18.0 - /opt/homebrew/opt/node@user/bin/node…

