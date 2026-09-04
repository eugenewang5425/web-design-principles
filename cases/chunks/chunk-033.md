# Case Chunk 033 — Round 33

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4201 · [🐞] Running unit tests encountering error after upgrading to 1.2.0
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug After upgrading to **1.2.0**, my company's project pipeline failed with this error <img width="1065" alt="image" src="[link]> I can't reproduce with my Mac M1 locally. I think it has something to do with `sharp` and the `Gitlab` runner OS. The `Gitlab` runner is a `Docker` runner. My company's project uses `yarn` Berry as package manager which I added the same setup in the example repo. ### Reproduction [link] ### Steps to reproduce - Check out the repo, branch `bug/sharp-error-unit-test` - Install deps with `yarn` - Run `yarn…

### CASE-4208 · [🐞] useTask$ not available for import
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When trying to import useTask$ per the documentation, this function does not seem to be available. Should I rely fully on useResource? Love using Qwik btw. 'useTask$' is declared but its value is never read.ts(6133) Module '"@user.io/qwik"' has no exported member 'useTask$'. <img width="891" alt="Screenshot 2022-12-15 at 09 56 20" src="[link]> ### Reproduction npm create qwik@user ### Steps to reproduce import { useTask$ } from "@user.io/qwik"; ### System Info ```shell Apple M1 Arm64 via vsCode ``` ### Additional Information…

### CASE-4213 · [🐞] Qwik's `__image_info` causes 431 error in Vite Dev Server for embed SVGs
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬8 · closed · labels: bug/PR welcomed
- **Excerpt**: EDIT: The bug is that the image size tool requests image sizes that are inline. Probably this isn't even needed, since the browser has the image already and can immediately set the correct size. --- ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug If you have on page SVG's which is inlined into img tag as url: ```tsx <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgLogoSource)}`} /> ``` And SVG has a decent size, in my example it 26kb. This causes Vite dev server to show errors in console: > Server responded with status code 431. See [[link]]([link]).…

### CASE-4217 · [🐞] Resource onPending does not render
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍4 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug &lt;Resource onPending={...} /&gt; not working; onResolved works just fine, I see the eventual result render on screen, but the "loading" message I want to display in the interim is never rendered. <img width="999" alt="Screen Shot 2023-05-24 at 11 43 37 AM" src="[link]> ### Reproduction [link] ### Steps to reproduce Go to repro link (created via qwik.new) and do 'npm run dev' ### System Info ```shell This is my info, but it also happens in qwik.new online environment. System: OS: macOS 12.6.2 CPU: (12) x64 Intel(R) Core(TM)…

### CASE-4218 · [🐞] Dynamic routes return 404s in static html builds
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik-city [routing] ... Or possibly qwik runtime ### Describe the bug I'm building for firebase hosting, so I'm doing static HTML builds. When I have a dynamic route it's returning 404s. When I run the dev server with `npm run dev` they work fine. It doesn't look like it's building the html files for the dynamic routes <img width="735" alt="Screenshot 2023-05-07 at 17 04 30" src="[link]> ### Reproduction [link] ### Steps to reproduce Eg, I have a contact page `routes/contact/index.tsx`. If I make a dynamic route `routes/contact/[test]/index.tsx` which is just…

### CASE-4221 · [🐞] trying to build qwik on windows throws
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug When trying to build qwik I'm getting the following error: ![image]([link]) seems like it's trying to go to the `runtime` dir on the root of the monorepo and not inside qwik city ### Reproduction not relevant ### Steps to reproduce 1. `pnpm install` 2. `pnpm build.platform.copy` 3. `pnpm build` ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (8) x64 Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz Memory: 12.78 GB / 31.87 GB Binaries: Node: 18.7.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.10 - C:\Program…

### CASE-4228 · [🐞] v2 SPA routing broken on deployment with Bun
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: bug/router/needs reproduction/V2
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I updated my page to use the new v2 beta release. It is an SPA, using the `<Link>` component for navigation. This works fine during development, but when I run the built project with Bun, navigation does not work and I get errors like this: <img width="953" height="199" alt="Image" src="[link] /> My quick-fix: Switch to an MPA by using `<a>` instead of `<Link>`. ### Reproduction tbd ### Steps to reproduce I did not have the time yet to boil down the issue. It breaks on my app, but I could not reproduce it on a fresh…

### CASE-4231 · [🐞] Cannot redirect to external URLs in actions
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬7 · open · labels: bug/router/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I was reproducing the repository onto my local repository [link] the only issue that i encounter is ![image]([link]) The authJs integration does something smiliar for the auth flow. The authjs code: [link]]/blob/563ddc512a9dec38194f10914ad5988f523bd71d/packages/qwik-auth/src/index.ts#L61 the lucia code that could work but error: [link] My question is it normal that it 404? if it's normal : error/documentation(how you can redirect to external resource) if its not normal: ???? ### Reproduction [link] ### Steps to…

### CASE-4235 · [🐞] Invalid scheme in redirect_uri for qwik-auth and auth.js
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have a website in a docker container listening on port 3000. I have Nginx as a reverse proxy in front of it. This is my config: ``` server { listen 80; server_name example.com; return 301 [link] } server { gzip on; gzip_vary on; gzip_comp_level 7; gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript text/xml application/xml application/xml+rss application/json; listen 443 http2 ssl; server_name example.com; ssl_certificate…

### CASE-4239 · [🐞]Unable to run development container
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug The project fails to start in the dev container. `cargo install cargo-insta wasm-pack` fails. <img width="1552" alt="スクリーンショット 2023-01-28 11 03 22" src="[link]> <img width="1552" alt="スクリーンショット 2023-01-28 11 03 25" src="[link]> ### Reproduction [link] ### Steps to reproduce Run `Remote-Containers: Open Folder in Container` from the VSCode command palette ### System Info ```shell # Qwik Version latest # Operating System (or Browser) Mac M1 using VSCode # Node Version 16.15.0 ``` ### Additional Information _No response_

### CASE-4248 · [🐞] - Alt+Click doesn't work
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Alt Click broke on some version after beta v8 (it worked on beta 8) 79bb98df-4cbe-48b2-b9f0-cdd28a6d04ba/:19 GET [link] 404 (Not Found) document.addEventListener.capture @ 79bb98df-4cbe-48b2-b9f0-cdd28a6d04ba/:19 <img width="1517" height="698" alt="Image" src="[link] /> ### Reproduction / ### Steps to reproduce _No response_ ### System Info ```shell Branch: v2/build System: OS: macOS 15.6.1 CPU: (14) arm64 Apple M4 Pro Memory: 797.36 MB / 48.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 24.4.1 -…

### CASE-4249 · [🐞] Prefetching not working for Link component on mouseover
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug What im expecting, When we hover on any anchor tag which nagivates to a new page it should fetch all the neccessary js files to render that page instantenously, but here when u visit the site first time (or empty cache and hard reload) ![image]([link]) and hover any link eg Page A and wait 2 sec expecting it to prefetch the client side js and then click it then starts fetching the chunks which takes 1-3sec in some case. In below video when i clear cache and hard reset and click page A it takes some time to navigate and…

### CASE-4250 · 🐞 Significant performance issue when loading Qwik pages using 4g Slow on basic interactions
- **Principles**: P-A3, P-H1 · **Env**: mobile
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have noticed that there's a problem with the way Qwik currently tries to lazy load scripts. It seems to be bundling way more into a streamed (on demand) script than it should. When you run this simulating 4G Slow (which is most of Australian mobile internet at best) it's clear that the delays on very basic user interactions are simply unacceptable, and there's no visual indicator anything is happening. ### Reproduction [link] ### Steps to reproduce 1. Go to the reproduction URL 2. In dev tools - change network speed to 4G…

### CASE-4266 · [🐞] Out-of-sync Stale Code running on server after code edits & auto-recompile / Stop and Restart required after each edit
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: macos, vite
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin -- Qwik Runtime HMR ### Describe the bug The server not reloading recompiled utility function used by `server$`. Maybe this is a vite, HMR, or my misunderstanding in how to properly write `server$` code. I am also seeing a similar issue with styles not updating. See project and loom video: [HERE]([link]) ### Reproduction [link] ### Steps to reproduce Clone `[link] run and click. ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M1 Memory: 87.09 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 19.4.0 -…

### CASE-4268 · [📖] [🐞] Resource Not Found - Docs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Suggestion Hi, Awesome work with the framework. I was trying to learn qwik, but I'm seeing many links in the docs lead to a 404. I added the bug emoji because I think this is a bug with the docs website eg: - [link] - [link] The source of these links is the [FAQ Page]([link]) <img width="1190" alt="image" src="[link]>

### CASE-4283 · [📖] [v2] the api docs use the wrong package names
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · open · labels: docs/PR welcomed
- **Excerpt**: ### Suggestion <img width="721" height="423" alt="Image" src="[link] /> the package names on the v2 docs are the names of the directories. The detailed entries are not the actual package names, e.g. `@user.dev/qwik` instead of `@user.dev/core`. [link] `scripts/api-docs.ts` on the build/v2 branch needs to be changed so that it has an extra translatation between the directory name and the package name.

### CASE-4287 · [🐞] deno + qwik .tsx: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: waiting for user/missing info
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug [link] forked from [link] Tutorial: [Build Qwik with Deno]([link]). Video tutorial: :tv: [Build Instantly Loading Apps with Deno and Qwik | Deno | YT]([link]) `tsconfig.json`: ```json "jsx": "react-jsx", "jsxImportSource": "@user.io/qwik", ``` VS Code shows error `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists` when open `src/routes/index.tsx`. **Screenshots** ![Image]([link]) ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell vscode: 1.93.1, deno:…

### CASE-4292 · [🐞] SSG and deploy to Github pages - issue with base urls: service-worker.js etc.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I am trying to deploy a QwikCity app tp Github pages, SSG works and deploy works however it seems like base urls and relative paths are not considered when registering service workers or including scripts/manifest/favicon. Here's the base QwikCity installation in a repo with pages enabled: [link] Screenshot of the GH Pages settings: <img width="840" alt="Screenshot 2024-06-30 at 13 42 14" src="[link]]/assets/300232/138d34e6-2f36-4b52-bc45-7f52147d593d"> I'm expecting service worker import to consider the settings…

### CASE-4293 · [🐞] onSubmit$ / onSubmitComplete$ signature broken?
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍2 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The signature seems to be broken. At least for default usage like this: ```tsx <Form action={action} onSubmit$={() => { console.log('Test'); }} > <input type="text" name="text" required class={styles.input} /> <button type="submit"> Add item </button> </Form> ``` <img width="653" alt="image" src="[link]]/assets/3037096/c6834d8d-8ad2-4456-bcc7-b6369dc7c2c5"> ### Reproduction [link] ### Steps to reproduce Open stackblitz and go to the starter todo list on the bottom. Code works, typescript cries like a baby. ### System Info…

### CASE-4298 · [🐞] Qwik server crashes when entering multiple slashes at the end of a home route
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If you enter several slashes at the end of the home page route and than press the Enter key, Qwik server will crash with an error: ``` { TypeError [ERR_INVALID_URL]: Invalid URL at __node_internal_ ([link]) at Object.<anonymous> ([link]) at new URL ([link]) at eval (file:///home/projects/vitejs-vite-dcpt7f/node_modules/@user.io/qwik/optimizer.mjs:2625:15) { input: '//', code: 'ERR_INVALID_URL' } ``` <img width="800" alt="image" src="[link]> ### Reproduction [link] ### Steps to reproduce 1. Run npm install && npm run dev. 2.…

### CASE-4300 · [🐞] `.env.local` is not loaded in production mode
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I am using fastify adapter for production. In dev or preview mode, the env vars in `.env` are correctly loaded. But the production mode runs without the env vars in the `.env.local` file. I have built the production image using docker like this: ```Dockerfile FROM node:alpine AS base RUN corepack enable RUN mkdir /app WORKDIR /app COPY package.json pnpm-lock.yaml ./ COPY server ./server COPY dist ./dist COPY .env .env.local COPY node_modules ./node_modules ENV NODE_ENV=production EXPOSE 3000 ENTRYPOINT ["pnpm"] CMD ["serve"]…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4202 · [🐞] value attribute is remove on SPA navigation
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I've got something like that : ```jsx const Slider = component$((props: SliderProps) => { return <input type="range" min={props.min} max={props.max} name={props.name} value={props.value}/> }) ``` When I log the input after navigation with : - anchor: I see the value in the tag (alongside qwik properties). ![anchor navigation]([link]) - Link : I only see type, min, max & name, but something else ![SPA navigation]([link]) As you can see the `value` attribute has been removed. This is an issue when I use `form.reset()`. With the…

### CASE-4204 · [🐞] Qwik fails to prefetch leading to input delay
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬9 · closed · labels: bug/waiting for user
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have been running into this issue since around v0.18.0 and have spent maybe 20+ hours trying to work out what has been going on. Qwik fails to preload the Javascript which leads to an interaction delay. This only occurs on the first load. It works perfectly fine after the service worker has cached the file. I have provided a reproduction which shows the issue. [link] ### Reproduction [link] ### Steps to reproduce pnpm install pnpm build pnpm run deploy Once deployed, click the green square. This will load instantly as it…

### CASE-4206 · [🐞] useComputed returns Signal<Promise<string>> while it should return Signal<string>
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm creating an autocomplete component with a custom `display$` function to display the selected value as a string. I use `useComputed$` to trigger the `display$` function when the form's value has changed (when the option has been clicked. The issue is that `useComputed$` returns `Readonly<Signal<Promise<string>>>` instead of `Readonly<Signal<string>>` ```jsx interface AutocompleteProps<T = any> { display$: QRL<(value: T) => string>; } export const Autocomplete = component$((props: AutocompleteProps) => { const value =…

### CASE-4207 · [🐞] Internal server error: multipart/form-data not supported when using <Form>
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: bug/router
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When I write an action to submit a form like the example given on the official website, here is my code ```ts import { component$ } from "@user.io/qwik"; import { action$, Form, z, zod$ } from "@user.io/qwik-city"; export const useSubmit = action$( (form) => { console.log(form); }, zod$({ name: z.string(), email: z.string().email(), }) ); export default component$(() => { const action = useSubmit(); return ( <div> <Form action={action}> <label> Name <input type="text" name="name" /> </label> <label> Email <input…

### CASE-4219 · [🐞] server actions can't test in stackblitz.com
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug Doing: Trying to test the behaviour of server actions using Qwik Starters. And `run()` the action when a button is clicked. Expect: No problems happen. Happening: ``` ErrorResponse: Cross-site POST form submissions are forbidden at error (file:///home/projects/qwik-starter-3dlk16/node_modules/@user.io/qwik-city/vite/index.cjs:24019:14) at securityMiddleware (file:///home/projects/qwik-starter-3dlk16/node_modules/@user.io/qwik-city/vite/index.cjs:23773:11) at Object.next…

### CASE-4229 · [🐞] v2 Signal returns a Proxy on deserialization
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug In v2, Signal returns a Proxy which are not transferable: ```jsx export default component$(() => { const searchSignal = useSignal(''); const typesSignal = useSignal([]); useTask$(({ track }) => { const search = track(searchSignal); const types = track(typesSignal); worker.postMessage({ search, types }); // Not Working }); return <input bind:value={searchSignal} /> }) ``` The main problem for me are: 1. There is no way to know this is a Proxy 2. It's not a Proxy anymore once we change the value in the browser 3. We don't have…

### CASE-4232 · [🐞] Weird location.hash / window.history behaviour
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/runtime/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ## Issue Overview This report outlines an observed inconsistency in the behavior of the `<a>` and Qwik `Link` elements when used for scrolling to a target element in a Qwik application. The behavior varies between local and [Stackblitz]([link]) environments, and also changes after a `routeAction$` is invoked upon form submission. ## `<a>` Element Behavior The `<a>` element initially performs as expected, scrolling to the target element and opening the `details` element that contains the target when clicked. However, after a…

### CASE-4241 · [🐞]Issue with qwik city 0.1.0-beta9 action$
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug THE CONTEXT There are two routes, the root route, and the other route. There is "database" which is just an array of strings inside of src/data.ts On the root route there is a form which if you type into it and submit, it adds the text to the "database" and then redirects you to the other route. On the other route it shows you each item in the "database" as well as a form which you can use to add text to the "database". THE PROBLEM From the root route you can successfully use the form and get redirected to the other…

### CASE-4252 · [🐞] 1.7.0 routeAction$ zod$ no longer supports flattened arguments (programmatic submission with ProseMirror/JSON fields)
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug A recently released change to how the `zod$` types, causes my previously compiling TypeScript to break, and I don't know how to fix my code without managing the validation entirely within every routeAction$ which accepts rich-text. I depended on Zod flattening the errors, because I am using ProseMirror to prepare JSON that is submitted into the form. In this case, I am submitting programmatically the JSON value of my rich-text editors. But, the types are implemented in such a way that assumes that every property (recursively)…

### CASE-4258 · [🐞]An error in the docs
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug There is an error in the following code, the code is form here: [link] ![Snipaste_2023-11-16_22-06-58]([link]) I copied the code in the red box into vscode , it has an error: ``` Type 'number' is not assignable to type 'string'. ``` And command `npm run qwik add prisma` would generate this code, so the two places need to be corrected. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell Type 'number' is not assignable to type 'string'. ``` ### Additional Information _No response_

### CASE-4260 · [🐞] Props spreading (e.g. <input {...props} />) Typescript incompatibility
- **Principles**: P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to deal with props spreading so I can make the API of my components more flexible. Example: ``` type Props = { text: string; } & HTMLAttributes<HTMLButtonElement> const MyButton = component$(({ text, ...props }: Props) => { return <button {...props}>{text}</button> }); ``` In React you can do something like this (repo: [link]): ``` type Props = { text: string; } & ButtonHTMLAttributes<HTMLButtonElement> ``` but not in Qwik. You can see in the reproduction playground that everything works in general, except…

### CASE-4267 · [🐞] Cannot deploy to Vercel or Netlify with qwik-city 0.1.0-beta9
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug If you do a pnpm create qwik@user fill out the prompts cd into the directory and then do pnpm qwik add and select netlify (or vecel) then deploy, everything works fine. However if you go to your package.json and bump to "@user.io/qwik-city": "0.1.0-beta9" do a pnpm install and then redeploy things fail. You see TypeError: method.toUppercase is not a function using Netlify and TypeError: e.toUppercase is not a function using Vercel ### Reproduction [link] ### Steps to reproduce 1. `pnpm create qwik@user` 2. `cd…

### CASE-4286 · [🐞] Spread Operator in Qwik Does Not Trigger Reactive Updates for Props
- **Principles**: P-G4, P-E3 · **Env**: opera, react
- **Signals**: 👍0 💬5 · closed · labels: bug/runtime
- **Excerpt**: ### Which component is affected? Qwik React ### Describe the bug In Qwik, when spreading an object `({...state.helloProps}`) into a component's props, the UI does not update when the object properties change. The workaround requires forcing updates by using a unique `key` (e.g., `JSON.stringify(state.helloProps)`) to ensure the component re-renders. This issue occurs because Qwik does not track object property changes inside the spread operator unless the reference itself changes. ### Reproduction [link] ### Steps to reproduce 1. Run the provided Qwik component. 2. Type into the input field…

### CASE-4289 · [🐞] V2 - Exporting a useStore and a component$ causes the useStore to lose its “this”
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If a hook returns a useStore and a component$, and the useStore uses function to access “this”, the “this” is undefined. ### Reproduction [link] ### Steps to reproduce If you click on the “submit” button, you will see an error, since the “this” in the “onSubmit” of the “useStore” is “undefined”. On the other hand, if in the “useForm”, you remove the export of the “Form” component, the error disappears. ### System Info ```shell npmPackages: @user.dev/core: 2.0.0-alpha.2 @user.dev/router: 2.0.0-alpha.2 typescript: 5.7.2 undici:…

### CASE-4291 · [🐞] Internal assert, this is likely caused by a bug in Qwik: If qSerialize is true then fnStr must be provided.
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When i try to reload the /search page using simple Form component i am getting error ``` QWIK ERROR Internal assert, this is likely caused by a bug in Qwik: If qSerialize is true then fnStr must be provided. Error: Internal assert, this is likely caused by a bug in Qwik: If qSerialize is true then fnStr must be provided. ``` ### Reproduction [link] ### Steps to reproduce Reload the /search page ### System Info ```shell System: OS: macOS 14.5 CPU: (8) arm64 Apple M1 Memory: 81.13 MB / 8.00 GB Shell: 5.9 - /bin/zsh Binaries:…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4203 · [🐞] VSC and Webstorm emmets autocompletes for react
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, react
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug an example is i would do `div.name` what i would expect is a `<div class="name"></div>` but what comes up is `<div className="name"></div>` the react way i tried both webstorm and vsc and both have this issue ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 10 10.0.22621 CPU: (4) x64 AMD Ryzen 3 3200G with Radeon Vega Graphics Memory: 5.19 GB / 15.91 GB Binaries: Node: 18.15.0 - C:\Program Files\nodejs\node.EXE npm: 9.5.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge:…

### CASE-4205 · [🐞] useSignal update within useResource$ causes serialize/DOM mismatch
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome
- **Signals**: 👍0 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug If you update the value of a signal inside useResource$, the new value will be serialised with the DOM, but the DOM isn't actually updated. This is a fairly minimal example to show the problem which I'm seeing inside useResource$. I've also got another problem with useTask$ updating a signal and not seeing it update within the DOM from the browser side. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell Browser: Chrome v111 ``` ### Additional Information I notice the same thing with…

### CASE-4209 · Production build has broken pseudo-selectors, but is fine on dev
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: opera, firefox, ubuntu, vite
- **Signals**: 👍2 💬9 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Ubuntu/Firefox ### Node Version (if applicable) 18 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour The correct behavior is exhibited using `npm run dev`: scoped.css ``` span::before { content: " not "; user-select: all; } ``` index.tsx ``` import { component$, useStylesScoped$ } from "@user.io/qwik"; import styles from "./scoped.css?inline"; export default component$(() => { useStylesScoped$(styles); return <div>This is <span>broken.</span></div>; }); ``` Generated style: ``` span.⭐️iizyr0-0::before {…

### CASE-4210 · Starter app doesn't work on Windows.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍3 💬9 · closed · labels: bug/starters
- **Excerpt**: I am using Windows 10 version 21H2 Node version 16.14.0 npm version 8.3.1 I ran the following command ```bash npm init qwik@user ``` Then I chose default options (pressed enter) Then ```bash cd qwik-app npm install npm start ``` I didn't get an error during that process. I opened [link] in Google Chrome Version 99.0.4844.51 (Official Build) (64-bit) The I got a blank webpage I found the following errors in the chrome's developer console: ``` GET [link] net::ERR_ABORTED 404 (Not Found) (anonymous) @ main.tsx:4 qrlImport @ qrl.public.js:21 (anonymous) @ component.public.js:305 Promise.then…

### CASE-4222 · Static files cannot be generated using useEndpoint
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.14.0 ### Operating System (or Browser) chrome ### Node Version (if applicable) Node.js v17.6.0 ### Which component is affected? Qwik City ### Expected Behaviour After upgrading qwik-city 0.0.122 to 0.0.124 ### Actual Behaviour 0.0.124 cloudflare-pages cannot generate static files using useEndpoint ### Additional Information _No response_

### CASE-4224 · `basePathname` and static generation not works
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 105, macos, vite
- **Signals**: 👍2 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) macOS 12.5.1/ Chrome 105 ### Node Version (if applicable) 16.17.0 ### Which component is affected? Qwik City ### Expected Behaviour I want to generate whole static files in directory which I set `basePathname` ### Actual Behaviour I've tried to use static generation for GitHub Pages. I set `origin: '[link] in `src/entry.static.tsx` and `qwikCity({basePathname: '/{repo-name}/'})` in `vite.config.ts`. So then I `run npm run build && npm run ssg` but no output any html file in dist dir. Just qwikCity() is works fine. ### Additional…

### CASE-4242 · useHook is not working in arrow function context
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, windows
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) Edge Windows ### Node Version (if applicable) 16 ### Which component is affected? Qwik Runtime ### Expected Behaviour According to the [documentation]([link]), any `useHook` should be able to run in a arrow function context inside a component. ### Actual Behaviour When using a hook inside an arrow function context I get the error: ``` Code(20): use- method must be called only at the root level of a component$() ``` Here is a simple reproduction: [link] ### Additional Information _No response_

### CASE-4243 · The contents of `useServerMount$()` are bundled with client side JS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍1 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome ### Node Version (if applicable) 18 ### Which component is affected? Qwik Optimizer (rust) ### Expected Behaviour When you run `npm run build`, the contents of the `useServerMount$()` hook should not be present in the bundles created for the client side. The contents should only be present in the Node bundle. ### Actual Behaviour When you run `npm run build`, the contents of the `useServerMount$()` are present in the client side JS bundles. ### Additional Information You can reproduce here: [link] Stop the server when it boots up…

### CASE-4244 · Unable to use `useContext()` in `<Global/>` component
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, chrome
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.107 ### Operating System (or Browser) Mac os (chrome) ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour # What I'm trying to do I tried to keep this repo as minimal as possible so it would be easier to focus on the bug. Nevertheless, let me explain what I'm trying to achieve. I want to use clientside routing so I'm not using QwikCity. I want my components to be able to set the title. Let's say we have a detail user page. That component should set the title to `<title>Details of John Doe</title>`. Since the…

### CASE-4245 · Deployed site missing UserContext
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, linux
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.38 ### Operating System (or Browser) Debian Linux ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik City ### Expected Behaviour A deployed site should work like any other site. ### Actual Behaviour The screen is blank and there are errors in the Netlify edge function logs. This seems to be the issue Ryan and Manu hit on the Qwik City stream. ### Additional Information The followng errors are logged in the Netlify edge function logs: 10:41:16 AM: QWIK ERROR Error: Missing Qwik City User Context 10:41:16 AM: QWIK ERROR Error: Code(13): not…

### CASE-4251 · [🐞] unocss no work when bun run serve
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug unocss can work when bun run dev, but when bun run serve unocss no work ### Reproduction [link] ### Steps to reproduce bun i bun run build bun run serve ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (12) x64 Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz Memory: 8.93 GB / 31.82 GB Binaries: Node: 20.12.2 - d:\Program Files\nodejs\node.EXE npm: 10.5.0 - d:\Program Files\nodejs\npm.CMD pnpm: 9.0.6 - d:\Program Files\nodejs\pnpm.CMD bun: 1.1.20 - ~\.bun\bin\bun.EXE Browsers: Edge: Chromium (126.0.2592.102) Internet…

### CASE-4257 · [🐞] SSG (vercel edge) using node dependencies
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, vite
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug I'm using Qwik with the Vercel Edge adapter and basically all my routes are now being generated using SSG. Now, I want to use a library that has a node dependency during the SSG process, but the vercel edge adapter throws an error during the build because it uses `ssr.noExternal: true` as a hardcoded value. The error: ``` [commonjs--resolver] Cannot bundle Node.js built-in "stream" imported from "node_modules/reading-time/lib/stream.js". Consider disabling ssr.noExternal or remove the built-in dependency. file:…

### CASE-4259 · [🐞] Qwik runtime importing from wrong q:base origin after user interaction in cross-origin container
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Hello, We are excited to use Qwik Containers to create a Cross-Origin Micro Frontend, but we are seeing that the Qwik runtime is not importing from the specified q:base origin after user interaction. As shown in [the qwik containers documentation]([link]), we are inserting a Cross-Origin Qwik Container: ![Screenshot 2023-08-28 at 4 18 28 PM]([link]) Steps to reproduce 1. Load minimal reproduction in Chrome: [link] 2. Scroll down to pagination section at bottom of page 3. Click on Page 2 Expected behavior 1. All JS should load…

### CASE-4262 · Property onLoad$ of img tag not working with browser cache
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome
- **Signals**: 👍1 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have a simple component with a jsx img tag where I use the onLoad$ property to render conditionally depending on whether the image is loaded or not. The issue is that when the image is cached in the browser the property doesn't work. In a browser with "private window" tab and cache off it works perfectly. This happens in both Firefox and Chrome If it helps i leave the code. ``` import { component$, useSignal, useTask$ } from "@user.io/qwik"; interface Props { id: number | string; size?: number; backImg?: boolean; isVisible?:…

### CASE-4271 · [🐞] Prefetch doesn't work in production!
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug I build my qwik app with SSG adapter and deployed it to the cloudflare pages. I expected the next page will be prefetched when I hover the "Link". But it wasn't prefetched at all. <img width="1171" alt="image" src="[link]> However, in development environment(`npm run dev`), it was prefetched well. ### Reproduction [link] ### Steps to reproduce 1. Open the chrome dev tool network tab. 2. Hover the link. 3. Check the network tab. ### System Info ```shell System: OS: macOS 13.0.1 CPU: (10) arm64 Apple M1 Pro Memory: 10.83…

### CASE-4272 · Child component not re-rendering when passed `props.property` assigned to `const`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.13.3 ### Operating System (or Browser) OSX, Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour See: [link] Given these three components: ``` export const ItemValueComponent = component$<{ item: string }>(({ item }) => { return <span>{item}</span>; }); export const ItemComponent = component$<{ item: string }>((props) => { const item = props.item; return ( <div> Expected: {item}, Actual: <ItemValueComponent item={item} /> </div> ); }); export const ItemComponent2 = component$<{ item: string }>(({ item })…

### CASE-4273 · Build error after adding express adaptor
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.12.1 ### Operating System (or Browser) Chrome ### Node Version (if applicable) v16.15.1 ### Which component is affected? Qwik City ### Expected Behaviour After adding the express server adaptor via "npm run qwik add" building the project should be successful. ### Actual Behaviour The build fails with the follwing error: error during build: Error [PLUGIN_ERROR]: Only URLs with a scheme in: file, data are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:' at new NodeError (node:internal/errors:372:5) at…

### CASE-4274 · elm is undefined error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, chrome
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version qwik: 0.9.0 & 0.11.1, qwik-city: 0.0.111 ### Operating System (or Browser) Mac OS, Firefox & Chrome ### Node Version (if applicable) v16.17.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour `/routes/repro/index.tsx` ```tsx import { component$, useStore } from "@user.io/qwik"; export const Text = component$(() => <div>Text</div>); export default component$(() => { const store = useStore({ showExample: false }); return ( <div> <p> <ul> <li>list item</li> </ul> </p> <Text /> <Text /> <button onClick$={() => (store.showExample = true)}> onclick render error…

### CASE-4275 · Can not render web components
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos, vite
- **Signals**: 👍3 💬6 · closed · labels: bug/needs triage/needs reproduction
- **Excerpt**: ### Qwik Version 0.10.0 ### Operating System (or Browser) MacOS Chrome ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour Should render Webcomponents exported as ES6 modules [link] ### Actual Behaviour Throws: ```sh [vite] Internal server error: `line` must be greater than 0 (lines start at line 1) at originalPositionFor$1 (file:///Users/.../node_modules/vite/dist/node/chunks/dep-a713b95d.js:10041:19) at file:///Users/.../node_modules/vite/dist/node/chunks/dep-a713b95d.js:53241:25 at String.replace (<anonymous>) at…

### CASE-4276 · Resource remains onPending when running npm run preview
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows
- **Signals**: 👍5 💬6 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.9.0 ### Operating System (or Browser) Chrome / Windows 10 ### Node Version (if applicable) 16.14.0 ### Which component is affected? Qwik Runtime ### Expected Behaviour When using the endpoint `/city`, the Resource resolves as expected when I run npm run start. In this instance the database information populates the page as expected. I expect this would also occur as well when doing `npm run preview` I'm mostly following this example and adding the code from mysql2: [link] ### Actual Behaviour When running in preview the endpoint remains onPending when running npm run…

### CASE-4278 · QWIK WARN Can not rerender in server platform
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, macos
- **Signals**: 👍0 💬6 · closed · labels: bug/runtime
- **Excerpt**: ### Qwik Version Qwik 0.0.100 - Qwik City 0.0.101 ### Operating System (or Browser) macOs + Chrome ### Node Version (if applicable) v18.4.0 ### Which component is affected? Qwik City ### Expected Behaviour In the previous Qwik/Qwik City version when I update the state inside of useMount, Qwik rerender the DOM ### Actual Behaviour Here a repo that show the error [link] If I change useMount with useClientEffect works but this is not a valid solution because I need useMount hook ### Additional Information _No response_

### CASE-4279 · Editor on example page is broken
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chromium, safari, macos
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Qwik Version latest ### Operating System (or Browser) MacOS Monterey (12.3.1 [21E258]) ### Node Version (if applicable) _No response_ ### Which component is affected? Starters / CLI ### Expected Behaviour - Go to `[link] (or any example) - Editor should have full height ### Actual Behaviour Editor is limited to a very small container ### Additional Information ![image]([link]) Browser: Brave Version 1.42.88 Chromium: 104.0.5112.81 (Official Build) (arm64), Safari (15.4 [17613.1.17.1.13]) Sorry, I did not know which `affected component` I should pick, so I went with Starters/CLI kind…

### CASE-4280 · Support for (S)CSS modules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 103, windows, vite, typescript
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.39 ### Operating System (or Browser) chrome 103 on windows 11 ### Node Version (if applicable) node 18 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour If I import a SCSS module like this: ```typescript import { component$, Host } from '@user.io/qwik'; import classes from './greet.module.scss'; export const Greet = component$(() => { return ( <Host> <div>Hello <span class={classes.pink}>pink</span>!</div> </Host> ); }); ``` The class name should be applied to the DOM element AND the styles should be appended to the page (if sass is…

### CASE-4288 · [🐞] can't use qwik Devtools
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ![image]([link]) ### Reproduction don't need ### Steps to reproduce _No response_ ### System Info ```shell mac Chrome ``` ### Additional Information _No response_

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4211 · TodoMVC Express Starter appears to be broken
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍3 💬9 · closed · labels: bug
- **Excerpt**: A fresh install of the TodoMVC example doesn't appear to be working properly. The header doesn't render and I get the following error in dev: ``` Error: failed to load module for ssr: /src/components/header/h_header_header.js at instantiateModule (/Users/ryancarniato/Development/examples/qwik-todomvc/node_modules/vite/dist/node/chunks/dep-f5552faa.js:60025:15) Error: failed to load module for ssr: /src/components/footer/h_footer_footer.js at instantiateModule (/Users/ryancarniato/Development/examples/qwik-todomvc/node_modules/vite/dist/node/chunks/dep-f5552faa.js:60025:15) ``` Steps to…

### CASE-4214 · [🐞] Scroll Position doesn't reset to 0 when it was triggered by SSR / Form Submit Redirection.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When anyone submits a form, and the action does throw/return a redirection then the redirection happens correctly but the scroll position doesn't get reset to 0 in the new page. ### Reproduction [link] ### Steps to reproduce - pnpm install - pnpm start - Now scroll to the footer. - Now see above the footer there's a form. - Submit the form. - The bug: Page stays at the footer. ### System Info ```shell System: OS: macOS 13.5.1 CPU: (16) x64 ************ 8-Core Processor Memory: 207.31 MB / 32.00 GB Shell: 5.9 - /bin/zsh…

### CASE-4215 · [🐞] Error when PandaCSS integration is added to a Qwik library
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug i am doing a new library of Qwik components im expected to add any integration such pandacss to an qwik library ### Reproduction [link] ### Steps to reproduce `npm create qwik library test-library-adding-pandacss` `npm install` `npm run qwik add pandacss` change postcss.config.js to postcss.cjs `npm run dev` Getting error regarding to vite-plugin-macro --- `> [email] dev > vite --mode ssr VITE v4.4.7 ready in 840 ms ➜ Local: [link] ➜ Network: use --host to expose ➜ press h to show help ``` node:internal/process/promises:288…

### CASE-4220 · [🐞] Error on running the application in `deploy` mode
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I'm trying to move some components to separate component libraries outside of the main src directory. The goal is to create an application by micro frontend structure. The problem is under building in SSR mode for production and running the application in `deploy` mode on the express adapter. Everything is running when the application is running by `vite` but when it comes to running by `node` with `npm run deploy` command, there is an error: `Error: Optimizer should replace all usages of $() with some special syntax. If you…

### CASE-4225 · [🐞] Embedding qwik: Click handlers not firing for single-file embeddable widget
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I’m using Qwik as a __client-only, single-file embeddable widget__ (no SSR, no Qwik City). The idea is: - Build a single IIFE bundle (e.g. `qwik-widget.single.js`) - Expose `window.QwikWidget.mount(target, props)` - Mount into arbitrary `<div>`s on any HTML page the issue is that click handlers are not firing. What would be the proper way of building a embeddable qwik widget/element? ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell Qwik: `@user.io/[email]` Bundler: Vite `7.1.11` ``` ###…

### CASE-4227 · [🐞] [v2] Context breaks when using higher order components in CSR
- **Principles**: P-F4 · **Env**: macos
- **Signals**: 👍0 💬7 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using CSR and context, where a component relies on a lower level primitive / component that also uses context, nothing is rendered and we see Qwik Error 8. SSR this behavior works. For example, say you have a Checklist component that uses context, and each Checklist item returns a checkbox that uses context, then that behavior is broken in CSR. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 15.6.1 CPU: (16) arm64 Apple M4 Max Memory: 442.55 MB / 48.00 GB Shell: 5.9…

### CASE-4230 · [📖] CSS Modules and useStyles$() hook approach incompatibility
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: bug/runtime/V2
- **Excerpt**: ### Suggestion Original docs URL are: [link] [link] The context: 1. We have several Qwik repositories - UI Kit and SSR application. 2. We build the UI Kit using Vite with separate index (.js, .css) files for each components to support further tree-shaking in the SSR application. 3. Then we use these builded files in the SSR application and link styles using the useStyles$() hook to support tree-shaking. Because if we import only pure CSS modules without processing it with useStyles$() hook, we will get one large CSS file bundled, which is not good for a large amount of CSS code (currently we…

### CASE-4236 · [🐞] Elements processed out of order with no SSR
- **Principles**: P-F4 · **Env**: ios, vite
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When I run `pnpm vite` and view the page as defined below I see `2, 3, 1` printed to the browser console. However when I run `pnpm vite --mode ssr` and view the page I see `1, 2, 3` printed to the server console. If you add additional children it just trickles down, the FIRST is always executed LAST in non-ssr. In the DOM it appears in the correct order in both scenerios. This makes component testing challenging when you are expecting a precise ordering. ```tsx import { component$ } from '@user.io/qwik'; const Child =…

### CASE-4254 · Link is broken [📖]
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: docs
- **Excerpt**: ### Suggestion On [this page]([link]), the link in the following block of text leads to a 404. ``` The following is an SSR portal implementation using Qwik City. If you are using multiple frontend frameworks alongside Qwik, you may prefer a [React-like portal implementation]([link]). ```

### CASE-4256 · [🐞] Error: Actions can not be invoked within the server during SSR.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍1 💬6 · closed · labels: enhancement/router/DX/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When attempting to vitest a component that invokes a `routeAction$` I'm getting the error: ``` Error: Actions can not be invoked within the server during SSR. Action.run() can only be called on the browser, for example when a user clicks a button, or submits a form. at Proxy.routeActionQrl_action_submit_A5bZC7WO00A ``` I thought that vitest would render using the node environment and thus SSR and I could mock out the HTTP API call that my action is ultimately making. This is not the case though and I can't find any good…

### CASE-4269 · [🐞] Inconsistent handling of some (pseudo)boolean attributes like draggable in SSR vs CSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug A link with `draggable="false"` correctly renders with `draggable="false"` in SSR but renders as `draggable="true"` in CSR. A link with `draggable={false}` incorrectly renders with no `draggable` attribute in SSR but renders correctly as `draggable="false"` in CSR. Not only is this confusing behavior, as a result there is no way to render consistently in both SSR and CSR. I understand that boolean attributes usually render with "truthy" values, however in this case the issue is that `draggable` is not actually a boolean…

### CASE-4270 · [🐞] CloudFlare minimization eats qwik comments
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug CloudFlare deploys can turn on HTML minification quite easily and this strips the qwik comments, leading to weird errors. ### Reproduction [link] ### Steps to reproduce Deploy to CF. Follow the wizard. Accept the proposed speedups. ### System Info ```shell any ``` ### Additional Information I think it would be possible to fix this by keeping the information aside during SSR until a DOM node is emitted. E.g. given this playground: ```tsx import { component$ } from '@user.io/qwik'; export const P = component$(({deep}) => {…

### CASE-4277 · Cannot bundle Node.js built-in "node:http", due to node-fetch dep
- **Principles**: P-F4 · **Env**: opera, vite
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version v0.9.0 ### Operating System (or Browser) OSX ### Node Version (if applicable) v16.3.0 ### Which component is affected? Qwik Rollup / Vite plugin ### Expected Behaviour The preview command builds and previews the application ### Actual Behaviour The preview command fails with ```bash [commonjs--resolver] Cannot bundle Node.js built-in "node:http" imported from "node_modules/node-fetch/src/index.js". Consider disabling ssr.noExternal or remove the built-in dependency. error during build: Error: Cannot bundle Node.js built-in "node:http" imported from…

### CASE-4281 · dev.ssr script failing in QwikCity starter
- **Principles**: P-F4 · **Env**: opera, macos
- **Signals**: 👍2 💬6 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.25 ### Operating System (or Browser) MacOS 11.6 ### Node Version (if applicable) 16.14.0 ### Which component is affected? Qwik City ### Expected Behaviour Running `yarn dev.ssr` in a recently created QwikCity starter should work. ### Actual Behaviour Fails with error: ``` Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/lucis/personal/repro-problem/node_modules/@user.io/qwik-city/pages/jobs/index.js' imported from /Users/lucis/personal/repro-problem/node_modules/@user.io/qwik-city/dist/index.cjs ``` ### Additional Information ## How to reproduce 1. Run `npm init…

### CASE-4290 · SSG not using client side navigation[🐞]
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When using a server adapter (I have tested express, fastify, bun, deno) and using SSG the following happens. When initially opening a pre generated page and clicking a link the new page is completely reloaded, even though I am using the Link from qwik-city. Client side navigation works however when I open a SSR page or navigated to the pre generated page on the client. Checking the network tab(need to check preserve log) it seems like a js file is loaded after clicking the link but a normal navigation loading the entire…

### CASE-4294 · [🐞]Error: Code(13): Actual value for useContext() can not be found...
- **Principles**: P-F4 · **Env**: linux
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Attempting to show a component client side only - no SSR The component calls `useLocation` Qwik thows an error: Error: Code(13): Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider() ### Reproduction [link] ### Steps to reproduce 1. Run `npm install && npm run dev` 2. Make sure you can see the console for the running app 3. Click the "Show Component" button 4. See error in console ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4212 · [🐞] server build should detect when client build is missing or out of date
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: bug/DX/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I have created route blogs/[id]/ and generating static pages via build.server command. The code looks the following ```ts import { component$ } from "@user.io/qwik"; import { Link, type StaticGenerateHandler, useLocation, type DocumentHead, } from "@user.io/qwik-city"; import Blog from "~/components/layout/utils/blog"; import { PageTransition } from "~/components/layout/utils/Pagetransition"; import data from "../../../../data/blog.json"; const perpage = 2; export default component$(() => { const location = useLocation();…

### CASE-4226 · [🐞] v2: useNavigate transition timeouts
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows
- **Signals**: 👍1 💬7 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug while using button with useNavigate The app sort of hangs. it Runs all the tasks on the new route as if navigation has happened but the DOM update doesn't happen instantly and instead I get the following error in console: > Uncaught (in promise) TimeoutError: Transition was aborted because of timeout in DOM update [link] ### Reproduction [link] ### Steps to reproduce - npm install - npm run dev - open the link for the app - navigate using buttons ### System Info ```shell System: OS: Windows 11 10.0.26200 CPU: (16) x64…

### CASE-4233 · [🐞] Cannot use node.js module inside Endpoint because of rollup compilation error
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: vite
- **Signals**: 👍0 💬7 · closed · labels: bug/waiting for user/needs triage
- **Excerpt**: ### Which component is affected? Qwik Rollup / Vite plugin ### Describe the bug When i import the [Resvg]([link]) module into my Endpoint, I get the error ``` vite v5.1.4 building SSR bundle for production... ✓ 24 modules transformed. x Build failed in 1.55s error during build: RollupError: [commonjs--resolver] Cannot bundle Node.js built-in "fs" imported from "src/routes/api/open-graph/generate-og-image.ts". Consider disabling ssr.noExternal or remove the built-in dependency. at getRollupEror (file:///Users/jappy/code/fpv-drone.info/node_modules/rollup/dist/es/shared/parseAst.js:375:41) at…

### CASE-4246 · Extra style recalculation on Qwik start
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug/waiting for user/runtime/V2
- **Excerpt**: When we load our app, we see that Qwik runtime (at least on v2) causes unnecessary style recalculation, which slightly degrates performance on low-end devices. This might be caused by two core functions: * `$hoistStyles$` * `script.setAttribute('type', 'x-qwik/vnode')` call in `attachVnodeDataAndRefs` function We can deal with style hoisting by moving our CSS into CSS modules or global styles, however, qwik router provides its own inline stylesheet for view transitions, which still affected by style hoisting. Maybe it’s possible to provide option for router to not insert inline styles? Or run…

### CASE-4247 · [🐞] SSR build emits wrong image asset hashes due to vite-imagetools cache re-encoding
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: vite
- **Signals**: 👍2 💬6 · closed · labels: bug/router/needs reproduction/SSR
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When `qwik build` runs the client and SSR Vite builds sequentially, images imported with `?jsx` get different content hashes in the SSR bundle vs the client bundle. This causes broken images during server-side rendering — the SSR HTML references asset URLs that don't exist in `dist/assets/`. **What happens:** 1. `build.client` (first Vite build) processes images through `vite-imagetools`/sharp, writes transformed images to the imagetools cache (`node_modules/.cache/imagetools/`), and emits assets to `dist/assets/` with…

### CASE-4255 · [🐞] Qwik + Astro, useVisibleTask$ does not work when using VT
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using useVisibleTask$ in a Qwik component, if <ViewTransition/> is set, useVisibleTask$ is not executed on page transitions in qwikdev/astro. track, etc. will not work as well. Please let me know if there is any workaround🙏 Thanks. ## code ```tsx import { component$, useVisibleTask$ } from "@user.io/qwik"; export default component$(() => { // Not executed when transitioned by ViewTransition useVisibleTask$(() => { console.log("useVisibleTask$"); }); return /* .... */ }); ``` ## packages ```json "dependencies": {…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4216 · [🐞] CLI - Build script silences failed steps when running with Yarn
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: bug/good first issue/PR welcomed
- **Excerpt**: ### Which component is affected? Starters / CLI ### Describe the bug If you use Yarn, running the `yarn build` command while there are (for example) linting issues will prematurely exit the process without printing anything about why it failed. ### Reproduction [link] ### Steps to reproduce * Make a compiling but invalid change in a file (e.g. declare an unused variable in `src/root.tsx`) * Run `yarn build` * The command will fail without printing any valuable information on what failed Here's an example: ``` $ yarn build ............ .::: :--------:. .:::: .:-------:. .:::::. .:-------.…

### CASE-4223 · Variables are not correctly hoisted in Qwik's lexical scope
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: bug/needs triage
- **Excerpt**: ### Qwik Version 0.11.1 ### Which component is affected? Qwik Optimizer (rust) (I think) ### Expected Behaviour In javascripts variables get hoisted, so in my components I would expect to be able to access variables in any part of the code as long as they belong to the same scope, see this [simple react example]([link]). There the `decreaseCounter` function can access the `counter` (and also the `setCounter`) variable because it is being hoisted. ### Actual Behaviour It seems like Qwik doesn't apply such hoisting causing runtime errors, for example see this analogous [qwik example]([link])…

### CASE-4234 · React Intergration not working [🐞]
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik ### Describe the bug I'm on qwik latest version and the react intergration is not working, here is an video: [link] code of `src/react/index.tsx` ``` import { component$, useSignal } from "@user.io/qwik"; import type { DocumentHead } from "@user.io/qwik-city"; import { ReactPage } from "~/integrations/react/React"; export default component$(() => { const show = useSignal(false); const count = useSignal(0); const variant = useSignal<"contained" | "outlined" | "text">("contained"); return ( <> <h1>Qwik/React mother of all demos</h1> <ReactPage client:idle/>…

### CASE-4237 · [🐞] Custom onClick$, onMouseOver$, etc. do not work with <Link /> component
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug If a custom `onClick$` event is added, it will be ingnored as it will be overridden by the current [`<Link />`]([link]) implementation. The same is probably true for `onMouseOver$`, `onFocus$` and `onQVisible$`. ### Reproduction [link] ### Steps to reproduce Click on the `<Link />` and `<button />` and check the logs. ### System Info ```shell I think that this information is not relevant here. ``` ### Additional Information _No response_

### CASE-4238 · [🐞] env arg of loader$ is lacking .env variables at the first time after run dev server
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug When the first access to dev server, `env` of `loader$(({env}) => { ... }` is not filled with values of `.env`. After the second time the `env` is filled expectedly. ### Reproduction [link] ### Steps to reproduce I am sorry the reproduction code above is not working because the environment is old then there's no `env` arg. ### System Info ```shell System: OS: macOS 13.1 CPU: (8) arm64 Apple M2 Memory: 63.28 MB / 24.00 GB Shell: 3.5.1 - /opt/homebrew/bin/fish Binaries: Node: 19.5.0 - /opt/homebrew/bin/node Yarn: 1.22.19…

### CASE-4240 · [🐞] Static assets not available via direct URL in dev mode
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik City (routing) ### Describe the bug ### Abstract I've run into an issue where all public path files are inaccessible (result in 404 or hang) with the default npm create qwik@user template. This includes files such as robots.txt, but favicon.svg and manifest.json seem to be working fine. I've tried the different modes, and production and preview mode seem to result in the public paths being accessible. But this isn't the case for the ssr and dev modes. ### Attempted Remedies Files retrieved via relative URL in code, or in requests from pages work as…

### CASE-4253 · [🐞] args of the `component$` are not mutable.
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: macos
- **Signals**: 👍0 💬6 · closed · labels: enhancement/DX/types/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug The props of the `component$` are given as the args of the QRL, so they should be mutable, but they are declared as `const` to be immutable through the `useLexicalScope`. This makes mismatch. So if I try to change the value of the args, it causes `TypeError: Assignment to constant variable.` even if there's no error in compile time. ### Reproduction [link] ### Steps to reproduce Please see the link above. ### System Info ```shell System: OS: macOS 14.4.1 CPU: (8) arm64 Apple M2 Memory: 93.02 MB / 24.00 GB Shell: 3.6.1 -…

### CASE-4261 · routeAction$ manage same-name inputs
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed · labels: waiting for user
- **Excerpt**: In HTML it is valid to send FormData containing multiple values for the same name. ```html <form> <input name="yo" value="1"> <input name="yo" value="2"> </form> ``` There is a bug with `routeAction$` for receiving formdata like this that leads to data loss because only the latest value is accessible in the event handler ```js routeAction$(async (data) => { console.log(data) return { success: true, }; }); ``` The current returned value from `console.log(data)` is `{ yo: '2' }`. As you can see, this is missing the value `'1'`. If we log `await requestEvent.request.formData()`, we can still see…

### CASE-4264 · [🐞] QWIK WARN JSX is receiving duplicated props (class).
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug "QWIK WARN msg This is likely because you are spreading {...props}, make sure the props you are spreading are not already defined in the JSX." Why such general warning if it is not an issue? Why should I not override props or attributes with new props? ### Reproduction none ### Steps to reproduce `ts export const SearchIcon = component$((props: Props) => { return ( <svg xmlns="[link] viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5" {...props} > <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5…

### CASE-4265 · [🐞] async useTask$ and updating signal within does not trigger DOM updates
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬6 · closed · labels: bug/waiting for user/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I've got a list of people that I load once in the server with useTask$ and then trigger re-fetches in the browser using a reactive variables store. Upon triggering another fetch, I'm setting loading.value to true, fetching more people and then setting loading.value to false. These loading.value updates don't update the DOM in either a useTask$ or useVisibleTask$. ### Reproduction [link] ### Steps to reproduce 1) Open the stackblitz 2) Click "Load more" on either useTask$ or useVisibleTask$ 3) Notice how "Loading: false" never…

### CASE-4282 · onFocusIn$ / onFocusin$ doesn't work, likely due to spelling mismatch
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: opera
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: ### Qwik Version 0.0.20-7 ### Operating System (or Browser) OSX ### Node Version (if applicable) _No response_ ### Which component is affected? Qwik Runtime ### Expected Behaviour `onFocusIn$` works ### Actual Behaviour It doesn't. ### Additional Information I suspect this is because of a capitalization mismatch: `onFocusIn$` in `manifest.ts` `onFocusin$` in `jsx-qwik-attributes.ts` The `I` is cap in one, lowercase in the other. From a few spot checks, it appears the spelling usually exactly matches between various references to an event. I'm happy to do a PR, ideally if I knew: Which…

### CASE-4299 · [🐞] Production Build with Qwik Framework - Uncaught TypeError
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ## Description I am currently developing a web3 app using Qwik as the framework. I have encountered a peculiar issue related to the production build when creating the `defaultWagmiConfig`. It seems to be a problem with the minification process, as everything works fine when running with `npm run dev`. ## Issue The following error is thrown: ``` Uncaught (in promise) TypeError: b is not a function at f ((index):4:143) ``` Upon investigation, it appears that the variable `b` is undefined and not being initialized. It is created…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-4263 · [🐞] Stylies not working for table tags.
- **Principles**: P-A2, P-A4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug Styling is not working for table tags in the component library starter in vs-code, but styles working in stackblitz template. ### Stackblitz(working) [link] ### Steps to reproduce ```ts // src/components/TableHead.tsx import { component$, useStylesScoped$ } from '@user.io/qwik'; export const TableHead = component$(() => { useStylesScoped$(AppCSS); return ( <thead class='head-cont'> <tr> <td class='cell'> head </td> ) })} </tr> </thead> ); }); export const AppCSS = ` .head-cont { display: flex; width: 100%; padding: 3px; }…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4284 · [🐞] Materialize error: missing element
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/V2
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug An issue reported by @user ``` Uncaught (in promise) Error: Code(Q44): Materialize error: missing element: {1||627A`7232]7231=389@useré, Canada>7212<2400[7230^8727|q:type|C} 55 51 createAndLogError log.js:42 logErrorAndStop log.js:15 qError error.js:78 materializeFromVNodeData vnode.js:1500 processVNodeData vnode.js:1285 materializeFromVNodeData vnode.js:1494 materialize vnode.js:1029 vnode_materialize vnode.js:998 ensureMaterialized vnode.js:1050 clearAllEffects signal-cleanup.js:11 cleanup vnode-diff.js:1066 cleanup…

### CASE-4285 · [🐞]Maybe more friendly UX when useTask throws an error
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍2 💬5 · closed · labels: bug/good first issue/DX/PR welcomed
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug ```js useTask$(({ cleanup }) => { const handleKeyPress = (e) => { if (e.key === "`" && e.metaKey) { state.isOpen.value = !state.isOpen.value; } if (e.key === "Escape" && state.isOpen.value) { state.isOpen.value = false; } }; const handleClickOutside = (e) => { if (state.isOpen.value && panelRef.value && !panelRef.value.contains(e.target)) { state.isOpen.value = false; } }; if (!isBrowser) return; window.addEventListener("keydown", handleKeyPress); window.addEventListener("mousedown", handleClickOutside); cleanup(() => {…

### CASE-4295 · [🐞] All bundles get prefetched with full priority in PrefetchServiceWorker resulting in error ERR_INSUFFICIENT_RESOURCES
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/missing info
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug When using the PrefetchServiceWorker, the service worker prefetches all bundles with full priority. This results in all requests running in parallel without being throttled by `$maxPrefetchRequests$`. In an app with more than ~600 bundles, many of the prefetch requests will throw an error `Failed to fetch` with `(failed)net::ERR_INSUFFICIENT_RESOURCES` ### Reproduction [link] ### Steps to reproduce Clone the reproduction url and run these commands: `$ ./generate.sh` `$ pnpm i` `$ pnpm build` Preview the app: `$ pnpm preview`…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-4296 · insights typo in tailwind
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: this has been like this for months... since it hasn't been fixed I assume it doesn't affect anything but... I copy paste this alot 😭 pretty sure its `overflow` not `verflow` [link]]/blob/0b8410bd58dfb6fddbb3105d50a0c85041ee8c0f/packages/insights/src/components/avatar/index.tsx#L21

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4297 · [🐞] Extremely unpleasant jumps and flashes for a simple HTML input
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/needs triage
- **Excerpt**: ### Which component is affected? Qwik Runtime ### Describe the bug I was creating a login form with Qwik. I had to do some validation. I ended up with a very jumpy and flashy field that was not responsive to some characters. This is how it looks: [Video]([link]) ### Reproduction [link] ### Steps to reproduce 1- Create a Qwik project 2- Paste this code: ``` const phone = useSignal(''); const isPhoneEmpty = useComputed$(() => phone.value?.trim() === ''); const isPhoneInvalid = useSignal( () => phone.value?.trim() !== '' && phone.value.length != 11 ); return ( <> <input value={phone.value}…

