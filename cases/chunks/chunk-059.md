# Case Chunk 059 — Round 59

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6801 · [Bug]: Remix Quickstart extra credit | default form values aren't matching returned value from useLoaderData
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.0.6 ### Steps to Reproduce 1. `npm run dev` 2. Navigate to `/admin` 3. Click on `90s Mixtape` 4. Note the default field values 5. Click on `My First Post` 6. Note that the default field values did not change ### Expected Behavior I would…

### CASE-6818 · Error. Redirects to relative path in the actions are not working, the are made absolute
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.5.1 ### Steps to Reproduce * Create a nested route with a button that calls the action. For instance `/admin/login` * In the action do a redirect with a relative path, for instance `export const action = async () => redirect("relative");` * The redirection is made to "/relative" instead of to `/admin/relative` or `/admin/login/relative` ``` import type { ActionFunction } from "@user/node"; import { redirect } from "@user/node"; import { Form, Link } from "@user/react"; export const action: ActionFunction = async ({ request }) => { return…

### CASE-6822 · [Bug]: Auto submit on select tag
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [x] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 16 ### Steps to Reproduce ``` <fetcher.Form method="get" action="/search" reloadDocument > <select value={initialValue} onChange={() => 'this.form.submit()'} >…

### CASE-6825 · `useFormAction` needs a way to distinguish between layout and index routes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: If you have an action on a parent layout route with a form on the page it works as expected. When you add an index route to the parent, your code breaks because Remix tries to post to the index route now. This happens because `useFormAction` returns a URL that matches both routes. When the form is submitted to that URL Remix takes the leaf route, which used to be the parent route but is now the index route. ## URL search param? Maybe there's a better solution, but I'm thinking `useFormAction` can append a url search param when it needs to disambiguate. We can keep using the normal URL in all…

### CASE-6829 · `useActionData` returning incorrect data
- **Principles**: P-G4, P-E3 · **Env**: macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction 1. Open reproduction [link] 2. Navigate to `/test` route 3. Add a value to the form `text` input 4. Click submit button 5. View data logged in browser console I originally encountered this using the Cloudflare template with `@user/cloudflare`, but I replicated this in the reproduction using `@user/node`. ### System Info ```shell System: OS: macOS 12.6.7 CPU: (4) x64 Intel(R) Core(TM) i5-5350U CPU @ 1.80GHz Memory: 20.57 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 20.14.0 - ~/.nvm/versions/node/v20.14.0/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 10.7.0 -…

### CASE-6841 · CSS Bundle does not work when deployed to Vercel
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.17.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce I've included a git repo where I have done the following: [link] 1. Run `npx create-remix@user` 2. Select Just the basics, Vercel, TypeScript 3. Verify that `root.tsx` contains `...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),` (css-bundle is pre-configured in the default template) 4. Add CSS using an import that depends on the css-bundle 5. Verify your CSS works locally in `npm run dev` 6. Deploy to Vercel 7.…

### CASE-6845 · CSS Side Effects plugin fails when TypeScript module contains a decorator
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.11.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Reproduction in repo form: [link] 1. Enable the CSS Side Effects Plugin 2. Write a simple CSS file and import it as a side effect to a TypeScript module 3. Add a decorator in the TypeScript module 4. See the following error: ``` ✘ [ERROR] [plugin css-side-effects-plugin] This experimental syntax requires enabling one of the following parser plugin(s): "decorators", "decorators-legacy". (9:0)…

### CASE-6847 · Submit of form made with useFetcher() triggers autoscroll of another component on the same page
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.1 ### Steps to Reproduce Here is the link for reproducing - [Link to the sandbox]([link]). I have an index page with two components - `<TestForm />` and `<Autoscroll />`. Steps: 1. Follow the link I've provided above. 2. When the page has loaded, user will be scrolled down to the `<Autoscroll />` component. This is expected behaviour. 3. Scroll up the form with input field. 4. Fill in the input field. 5. Press submit button. 6. User is scolled down to the `<Autoscroll />` component (this is a bug). ### Expected Behavior I expect the page to be…

### CASE-6851 · useFetcher Form submit reloads page instead of throwing an error
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.4 ### Steps to Reproduce [link] In the example above there is an error in api.jsx because when you submit it is being called client side (?). Because of api.jsx being called client side getData.server.js is not available, which results in an error, but this error is never thrown, instead the page reloads. This bug is related to another issue where the route is not found by remix when you name it api.server.js, also you need a default export component. ### Expected Behavior When you submit the form, I expect an error to be thrown. ### Actual…

### CASE-6854 · [Bug]: loader in a nested route returns `undefined` when a `Form` is submitted in a parent route
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [X] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14.18.1 ### Steps to Reproduce - Open the sandbox 👉 [link] - Navigate to `/cart` page - Click on `submit` button ### Expected Behavior 1. Mutation due to `Form`…

### CASE-6863 · [Bug]: When clicking a SVG element within a button element within a Remix-enhanced Form, the name/value on the button is not submitted
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? dev branch (1.1.3) ### What version of Node are you using? Minimum supported version is 14. 17.4.0 ### Steps to Reproduce Test case: [link] framework][ref] Use a SVG element within a button element within a Remix-enhanced Form (normal HTML…

### CASE-6867 · Unable to gracefully handle the `exceeded upload size` error in uploadHandler
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: ### Reproduction I have a route with a `<Form>` that has a file field. In my action I have the following code: ```ts const contentType = request.headers.get("Content-Type"); if (contentType?.includes("multipart/form-data")) { try { const uploadHandler = unstable_createMemoryUploadHandler({ maxPartSize: 500_000, }); formData = await unstable_parseMultipartFormData(request, uploadHandler); if (!formData) { return json({ error: "Failed to parse form data" }); } const file = formData.get("file"); console.log({ file }); } catch (error: any) { console.error("unstable_parseMultipartFormData",…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6802 · useTransition is only ever `idle`
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I'm on Remix v0.18.x and using `useTransition`. I've put this into my `root.tsx` component: ```tsx const transition = useTransition() React.useEffect(() => { console.log(transition) }) ``` When I load the page initially I get this: ``` {state: "idle", formData: undefined, method: undefined, nextLocation: undefined, type: "idle"} ``` Then I submit a form and I get this: ``` {state: "idle", formData: undefined, method: undefined, nextLocation: undefined, type: "idle"} {state: "idle", formData: undefined, method: undefined, nextLocation: undefined, type: "idle"} {state: "idle", formData:…

### CASE-6805 · Unexpected MPA/Document View Transition Behavior
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: When a Remix app is hydrated with `run`, document view transitions stop working correctly. Reproduction: [link] Demo: [link] Note how whenever I transition from an MPA route to either an SPA route or MPA route, the view transition works correctly and the content crossfades. But transitioning from an SPA route to the other SPA route causes the content to immediately jump without running the view transition. I believe this is because once hydrated, Remix replaces normal document navigations with fetch calls that replace the content of the the document Frame that Remix creates when the page is…

### CASE-6838 · It seems that dynamic import is not working properly
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction > [link] I am using framer motion's [LazyMotion]([link]) to reduce the bundle size. However, it seems that dynamic import is not applied properly when building remix. <img width="954" alt="1" src="[link] framework]/assets/90969158/272a1bad-2512-40a7-98f7-15c832f0db80"> <img width="954" alt="2" src="[link] framework]/assets/90969158/6a0d1fee-7246-45df-9998-1a58eebb7ada"> ```tsx // components/LazyMotion.tsx import { LazyMotion as FramerLazyMotion } from 'framer-motion'; const loadFeatures = () => import('./features').then((mod) => mod.default); export function LazyMotion({…

### CASE-6843 · Remix deferred bug blocks page transition and loaders when doing big data fetches
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.15 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce The core issue, is that `defer` blocks the next page load, if the promise within `defer` consists of multiple fetches requests in a nested route. **Note 1:** Maybe this is expected behavior, and I simply understand the feature poorly. If that's the case, would you please explain what is going on? **Note 2:** [Here]([link]) is an example repo. Let me still go into the code in this issue, too. 1. Create a new remix project. `npx…

### CASE-6872 · [Umbrella] TypeScript Migration (Help wanted!)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍53 💬143 · closed · labels: help wanted/not stale/topic: TypeScript
- **Excerpt**: ## Hello Community! Gatsby is rewriting our core codebase in TypeScript! Checkout the RFC: [ref] We would love love love your help! This work is incredibly important in Gatsby being a stable product and you could be a part of it! We are looking for community members who would be willing to jump into the codebase in transition files from .js to .ts and add the proper typings. We have a few guidelines we are wanting to stick to when doing this: #### Gatsby TS Guidelines - Only use named exports, no export default. - When importing a package, always try to find community maintained types instead…

### CASE-6873 · Errors when processing large(ish) numbers of images with gatsby-plugin-sharp
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍24 💬102 · closed · labels: type: bug/type: upstream
- **Excerpt**: ## Description I'm processing around 1500 images with gatsby-plugin-sharp/gatsby-transformer-sharp and GraphQL, to display with gatsby-image as per [this page in the docs]([link]). For smaller numbers of images I have had no issues, but now that I'm processing 1500 images the build randomly fails with the following error: ``` (sharp:104): GLib-GObject-WARNING **: 09:35:11.293: gtype.c:4265: type id '0' is invalid (sharp:104): GLib-GObject-WARNING **: 09:35:11.293: can't peek value table for type '<invalid>' which is not currently referenced (sharp:104): GLib-GObject-WARNING **: 09:35:11.293:…

### CASE-6874 · [fsevents bug] Stuck at "source and transform nodes" / "createPagesStatefully" on MacOS
- **Principles**: P-D1, P-D2, P-D3, P-C1, P-C2, P-C3 · **Env**: macos
- **Signals**: 👍23 💬99 · closed · labels: type: bug/status: confirmed/topic: cli
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I am working on a theme, local build was working fine with no problems, and recently upgraded all the dependencies to Gatsby 2.14.0 and both `gatsby develop` and `gatsby build` hang at `source and transform nodes` in my local dev environment.…

### CASE-6876 · Build stuck at running jobs (image transformation)
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍19 💬75 · open · labels: type: bug/status: confirmed/topic: media/topic: source-plugins
- **Excerpt**: If you're coming new to this issue, please see this first: [link] framework][ref][ref] --- ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [x] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Gatsby's build process is hanging and not completing. I suspect the issue is with Sharp, as my site has quite a few images, and I saw this brought…

### CASE-6880 · Issues with domready—animation flickering on page load.
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬59 · closed · labels: type: bug/help wanted
- **Excerpt**: I’m having a hard time getting around an issue that I think has to do with `domready`. Each time I load my site ([link]) the plain keyframe CSS animations are being triggered twice, which causes an awkward flickering: [link] Note how this flickering occurs only on server, not on hotloaded localhost. Here’s why I think `domready` might be involved: <img width="1538" alt="screen shot 2017-11-29 at 12 45 03" src="[link]> <img width="1538" alt="screen shot 2017-11-29 at 12 44 50" src="[link]> Has anyone encountered a similar issue?

### CASE-6882 · gatsby-plugin-sharp dependency problem?
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍3 💬53 · closed
- **Excerpt**: * Gatsby version: 1.7.2 * Node.js version: 8.2.1 * OS version: 10.12.16 --- I've ran into a problem after doing a clean install of [this project]([link]). `npm run dev` failed with: ``` ⠂ source and transform .../www/node_modules/bluebird/js/release/async.js:61 fn = function () { throw arg; }; ^ Error: Cannot find module '../build/Release/sharp.node' ``` Looked like a dependency was missing. (I'm not sure why sharp didn't install initially, given it _is_ listed as a dependency of gatsby-plugin-sharp.) Either way, I manually installed it (`npm i --save sharp`) and re-ran `npm run dev`. This…

### CASE-6889 · [gatsby-remark-katex] Doesn’t work with gatsby-plugin-mdx
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍23 💬39 · closed · labels: type: bug/help wanted/status: confirmed/status: awaiting author response/topic: remark/mdx
- **Excerpt**: ## Description I followed [the instructions to install `gatsby-remark-katex`]([link]) on a website using `gatsby-plugin-mdx` and it didn’t work. No errors, no nothing, it just didn’t transform the LaTeX in the Markdown. ### Steps to reproduce In [this zip]([link] framework]/files/4270928/gatsby-remark-katex-with-gatsby-plugin-mdx.zip) there are two projects: **`doesnt-work`:** This is a minimal project to show the issue. To create this project I just followed the instructions to install `gatsby-remark-katex`. **`works`:** This is a workaround I found based on [this comment]([link]…

### CASE-6892 · [1.0] Gatsbygram Error: UNHANDLED REJECTION Invariant Violation: RelayCompilerContext: Duplicate document named `allImages`.
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍0 💬37 · closed · labels: type: bug/help wanted
- **Excerpt**: Gatsbygram is erroring out in the CI and not exiting. The full log is here: [link] ``` npm run build > [email] build C:\projects\gatsby\examples\gatsbygram > gatsby build bin/gatsby: time since started: 0.097 bin/cli: time since started: 0.189 lib/bootstrap/index.js time since started: 1.203 sec open and validate gatsby-config.js: 6.453ms initial loading: 1590.370ms copy gatsby files: 29.342ms initial sourcing and transforming nodes: 534.850ms (node:2552) Warning: No such label 'building schema' for console.timeEnd() createPages: 149.637ms createPagesStatefully: 14.281ms UNHANDLED REJECTION…

### CASE-6899 · [gatsby-transformer-sharp] Transparent PNG image transform to Webp does not create correct image
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: windows
- **Signals**: 👍12 💬34 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description Transparent PNG image transform to Webp does not create correct image. I have tested with the following script ```js const sharp = require("sharp"); sharp("docker.png").webp().toFile("output.webp"); ``` This produce a correct Webp image which make me believe this is a Gatsby problem. ### Steps to reproduce ``` { resolve: "gatsby-remark-images", options: { maxWidth: 1200, withWebp: true, quality: 85, tracedSVG: false, showCaptions: true } } ``` ![]([link]) ### Expected result ![]([link]) ### Actual result ![]([link]) ### Environment ``` System: OS: Windows 10 CPU: (8) x64…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6803 · Running Remix on Cloudflare Workers
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍8 💬6 · closed
- **Excerpt**: What if you could run Remix w/out a server? We can keep the current architecture of Remix, but serve everything out of a service worker instead of our usual server. ## Motivation The main motivation for this right now would be to run Remix in Cloudflare Workers, which is built around the service worker API. The beauty of being able to deploy to Cloudflare Workers is that you can run your entire app at "the edge." One nice side effect of Cloudflare choosing to build Workers using the service worker API is that if we can build Remix to run *there* it *should* be a relatively small jump to run…

### CASE-6804 · Firefox doesn't follow es module imports on transitions? (I think?)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: Need to investigate further and will add more details, but just clicking around the docs page in firefox doesn't work. It imports the entries but then it doesn't follow the imports from there. This is pretty low priority right now for us. We'll be creating a "nomodule" bundle with System.js for browser that don't support es modules, when we're in the think of things there we'll also investigate and fix this. Until then however, if you have any ideas on why firefox won't follow the imports, let us know :)

### CASE-6806 · `defer` does not work on search param navigation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Reproduction [link] 1. Open the stackblitz and notice how `defer`, `<Suspense />` and `<Await />` work as expected 2. Click the button to trigger a search param change 3. Notice how `defer` is not working, and the loader is waiting for promise to resolve. Suspense is not triggering fallback. ### System Info ```shell System: OS: macOS 14.0 CPU: (8) arm64 Apple M1 Memory: 58.84 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.1 - ~/.nvm/versions/node/v20.11.1/bin/node npm: 10.2.4 - ~/.nvm/versions/node/v20.11.1/bin/npm pnpm: 9.1.0 - /opt/homebrew/bin/pnpm Browsers: Chrome:…

### CASE-6807 · 2.7.0 : MUI named import generate error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Reproduction Clone : [link] npm run dev `Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.` ### System Info ```shell System: OS: Windows 11 10.0.22621 CPU: (12) x64 Intel(R) Core(TM) i7-10850H CPU @ 2.70GHz Memory: 16.48 GB / 31.73 GB Binaries: Node: 20.9.0 - ~\AppData\Local\fnm_multishells\26476_1708451566467\node.EXE npm: 10.1.0 - ~\AppData\Local\fnm_multishells\26476_1708451566467\npm.CMD Browsers: Edge: Chromium (121.0.2277.128) Internet Explorer: 11.0.22621.1 npmPackages: @user/dev:…

### CASE-6808 · Collision of versions @user/dom
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Reproduction Clone the repo, install the dependencies and launch the only test to see the behavior [link] ### System Info ```shell System: OS: macOS 13.2.1 CPU: (10) arm64 Apple M2 Pro Memory: 79.00 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 20.2.0 - ~/.local/share/rtx/installs/node/20.2.0/bin/node npm: 9.6.6 - ~/.local/share/rtx/installs/node/20.2.0/bin/npm Browsers: Chrome: 120.0.6099.216 Safari: 16.3 npmPackages: @user/css-bundle: ^2.4.1 => 2.5.0 @user/dev: ^2.4.1 => 2.5.0 @user/node: ^2.4.1 => 2.5.0 @user/react: ^2.4.1 => 2.5.0 @user/serve: ^2.4.1 => 2.5.0 @user/testing:…

### CASE-6809 · Vite: server build errors when importing from *.client.ts with re-exports
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, vite, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Reproduction Repo with reproduction: [link] 1) Clone 2) Run `npm install` 3) Run `npm run build` 4) Build fails. ### System Info ```shell System: OS: Windows 11 10.0.22621 CPU: (16) x64 AMD Ryzen 7 5825U with Radeon Graphics Memory: 14.49 GB / 31.35 GB Binaries: Node: 20.8.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.19 - ~\AppData\Roaming\npm\yarn.CMD npm: 10.1.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Chromium (120.0.2210.91) Internet Explorer: 11.0.22621.1 npmPackages: @user/dev: ^2.4.1 => 2.4.1 @user/node: ^2.4.1 => 2.4.1 @user/react: ^2.4.1 => 2.4.1 @user/serve: ^2.4.1…

### CASE-6813 · `defer`/streaming SSR isn’t responding with the fallback UI on iOS Safari
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: safari, ios, webkit
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? v1.14.2 (repro on v1.11) ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Load [link] from [jacob-ebey/stupid-simple-remix-deferred-demo]([link]) (just an example of an easy hosted repro from a contributor) in Safari on iOS. After the initial load, also reload the page a few times. If it helps, I am on the 16.4 beta but have seen this issue for non-beta minor releases since `defer` was introduced. I am able to reproduce it on other WebKit browsers on iOS, with extensions, content blockers…

### CASE-6815 · Uncaught DOMException when in an environment without access to sessionStorage
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍8 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.3 ### Steps to Reproduce 1. Establish an environment where the application does not have access to sessionStorage, such as using a Remix app in a child iframe with a different origin from the parent while the user is using Chrome in Incognito mode with third party cookies blocked. 2. Visit any route within the Remix app and receive `Uncaught DOMException: Failed to read the 'sessionStorage' property from 'Window': Access is denied for this document.` ### Expected Behavior I would expect the app to load, even without access to sessionStorage.…

### CASE-6819 · Basic example Remix 1.3.3 project fails to render with "Error: Invalid hook call" error message
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome 99, macos, typescript
- **Signals**: 👍6 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.3 ### Steps to Reproduce **Environment:** - macOS Monterey 12.1 - Node 16.4.2 - NPM 8.5.0 - Chrome 99 **Steps to reproduce:** Start a new Remix project using `npx create-remix@user ./apps/website` (this was done as part of a Turborepo monorepo setup where the `apps/` directory contains a Strapi admin app, hence the path). Select the following options: ``` ? What type of app do you want to create? Just the basics ? Where do you want to deploy? Choose Remix if you're unsure, it's easy to change deployment targets. Remix App Server ? TypeScript or…

### CASE-6823 · [Bug]: RemixRoute (Safari 14) undefined is not an object (evaluating 'routeModules[id]')
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 14, safari 15, typescript
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 14 & 16 ### Steps to Reproduce 1) `$ npx create-remix@user` 2) Chose express, typescript 3) Install 4) run `$ npm run dev` and `$ npm run start:dev` 5) Open in safari 14.1.1 (Mac Big Sur) Note: Works fine in Safari 15 (Mac Monterey) ### Expected Behavior It loads as expected ### Actual Behavior ![image]([link]) Get above error

### CASE-6830 · Loader request not cancelled when streaming promises Single Fetch
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Reproduction [link] ### System Info ```shell System: OS: macOS 14.3 CPU: (16) arm64 Apple M3 Max Memory: 2.78 GB / 64.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.1 - ~/.nvm/versions/node/v20.11.1/bin/node npm: 10.2.4 - ~/.nvm/versions/node/v20.11.1/bin/npm pnpm: 9.5.0 - ~/.nvm/versions/node/v20.11.1/bin/pnpm Browsers: Chrome: 126.0.6478.183 Safari: 17.3 ``` ### Used Package Manager npm ### Expected Behavior I am encountering issues with Single Fetch when a fetcher is called while a loader is still streaming down deferred promises. If I make the loader/action take arbitrarily long…

### CASE-6832 · using the default .eslintrc.js does not lint any files that exist in .server or .client folders
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction Using the vite template eslint fails to lint any files in app/.client or app/.server ### System Info ```shell System: OS: macOS 14.4 CPU: (10) arm64 Apple M1 Max Memory: 3.00 GB / 64.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.1 - ~/.asdf/installs/nodejs/20.11.1/bin/node npm: 10.2.4 - ~/.asdf/plugins/nodejs/shims/npm pnpm: 8.15.4 - ~/.asdf/installs/nodejs/20.11.1/bin/pnpm Browsers: Chrome: 115.0.5790.114 Safari: 17.4 npmPackages: @user/dev: 2.8.1 => 2.8.1 @user/eslint-config: 2.8.1 => 2.8.1 @user/node: 2.8.1 => 2.8.1 @user/react: 2.8.1 => 2.8.1 @user/serve: 2.8.1 =>…

### CASE-6833 · SSR not working with the new Vite Cloudflare template on Cloudflare Pages
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: safari, macos, vite, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction Go to [link] and check console logs. ### System Info ```shell System: OS: macOS 14.3.1 CPU: (10) arm64 Apple M1 Max Memory: 92.80 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.9.0 - ~/.nvm/versions/node/v20.9.0/bin/node npm: 10.1.0 - ~/.nvm/versions/node/v20.9.0/bin/npm pnpm: 8.15.1 - ~/.nvm/versions/node/v20.9.0/bin/pnpm Browsers: Safari: 17.3.1 npmPackages: @user/cloudflare: ^2.7.2 => 2.7.2 @user/cloudflare-pages: ^2.7.2 => 2.7.2 @user/dev: ^2.7.2 => 2.7.2 @user/react: ^2.7.2 => 2.7.2 vite: ^5.1.0 => 5.1.4 ``` ### Used Package Manager pnpm ### Expected Behavior I…

### CASE-6834 · useFetcher data inconsistency when implementing optimistic UI on an action that redirects
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, react
- **Signals**: 👍6 💬4 · closed
- **Excerpt**: ### Reproduction [link] Context and reproduction steps are included ### System Info ```shell System: OS: macOS 14.2 CPU: (10) arm64 Apple M1 Pro Memory: 4.62 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.12.1 - ~/.nvm/versions/node/v18.12.1/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v18.12.1/bin/yarn npm: 8.19.2 - ~/.nvm/versions/node/v18.12.1/bin/npm Browsers: Brave Browser: 107.1.45.133 Chrome: 121.0.6167.139 Safari: 17.2 npmPackages: @user/css-bundle: ^2.6.0 => 2.6.0 @user/dev: ^2.6.0 => 2.6.0 @user/node: ^2.6.0 => 2.6.0 @user/react: ^2.6.0 => 2.6.0 @user/serve: ^2.6.0 => 2.6.0…

### CASE-6837 · Remix v-2.2.0 and above are not working smoothly with LazyLoading using npm package 'react-lazy-load-image-component' .
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, ubuntu, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction . ### System Info ```shell System - Ubuntu 22 Browser - Chrome ``` ### Used Package Manager npm ### Expected Behavior Actual image should be loaded when rendering for the first time instead of placeholder image. ### Actual Behavior I was using 'react-lazy-load-image-component' for loading images in Remix. But after upgrading my Remix app to version 2.2.0. I faced issue in which when my page renders for the first time then it shows only the placeholder image of LazyLoadingComponent instead of actual image. I tested and found that the issue arises when @user/react is upgraded…

### CASE-6842 · Submitting empty `Form` on chrome throws error
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.16.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce 1. Create a Remix App 2. Create a form with no input but a submit button 3. click the submit button Or you can see this [reproduction app]([link]). Notice when the checkbox is checked submitting works fine, but when its unchecked, it fails to submit and crashes. This only happens on Chrome, it works fine on Firefox. Also using `form.submit` still works, `form.requestSubmit` or normal submit causes the crash to happen. ### Expected…

### CASE-6846 · Race condition in <Form /> with Firefox
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3, P-G4, P-E3 · **Env**: firefox
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.8.0 ### Steps to Reproduce - clone the minimal repro case: [link] - create a [github oauth app]([link]) - make sure the field Authorization callback URL is set to `[link] - generate a new client secret for this oauth app and copy the id & the secret into `the .env` file - run the app - sign in with github - this will take you through github's approval screen and then it redirects you back to the app - sign out - sign in again with github - this time, it doesnt go through github's approval screen and the app will never authenticate you At this point,…

### CASE-6848 · npx create-remix@user + basic = wrong template
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.5 ### Steps to Reproduce Hi guys, I just created an application using `npx create-remix@user`, selected "Just the basics" and got this: <img width="1792" alt="image" src="[link]> Searching for "Safari doesn't support requestIdleCallback", I founded inside chakra-ui template. This is the log ```sh ▲ remix-course npx create-remix@user ? Where would you like to create your app? backoffice ? What type of app do you want to create? Just the basics ? Where do you want to deploy? Choose Remix App Server if you're unsure; it's easy to change deployment…

### CASE-6859 · [Bug]: Routing does not work on some versions of firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, typescript
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? create-remix@user ### Steps to Reproduce Create an app using create-remix@user Use Remix App Server when asked Add a route with a link to a css stylesheet > app/routes/bug.tsx ```typescript export let links = () => { return [{ rel:"stylesheet", href: "" }] } export default function BuggyRoute() { return <h1>This page triggers the bug</h1> } ``` In the example, no stylesheet is provided, the presence of the <link> tag is actually sufficient to reproduce the bug Add a link to the new page > app/root.tsx ```jsx ... <li> <Link to="/">Home</Link> </li> <li>…

### CASE-6860 · [enhancement] Edge case for loader refetch errors (offline mode?)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, safari
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: Ok, this one's tricky and I'm not sure what do about it. I got an email from one of my users with a situation they ran into on my site: > I just recently pulled up a ton of blog posts to read offline on a flight which worked just fine...until I scrolled to the bottom of the page. Here is an example of the error: > > 500 - Oh no, something did not go well. > "/blog/how-to-give-rendering-control-to-users-with-prop-getters" is currently not working. So sorry. > > Context: > - I loaded up a bunch of blog posts pre-flight in Safari > - Turned off Wifi > - Verified I still could access the…

### CASE-6861 · Unable to build remix while using absolute paths outside of the `app` directory with custom routes in `vite.config.ts`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Reproduction - Stackblitz: [link] (I use yarn berry so you might have to clone the repo) - Github Repo: [link] ### System Info ```shell System: OS: macOS 14.6.1 CPU: (10) arm64 Apple M1 Pro Memory: 166.48 MB / 32.00 GB Shell: 3.2.57 - /bin/bash Binaries: Node: 22.1.0 - ~/.nvm/versions/node/v22.1.0/bin/node Yarn: 4.5.0 - ~/.nvm/versions/node/v22.1.0/bin/yarn npm: 10.7.0 - ~/.nvm/versions/node/v22.1.0/bin/npm Watchman: 2022.08.22.00 - /usr/local/bin/watchman Browsers: Brave Browser: 126.1.67.134 Chrome: 129.0.6668.58 Safari: 17.6 ``` ### Used Package Manager yarn ### Expected Behavior I'm…

### CASE-6862 · View transitions are not triggered on action redirect
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: chrome, macos
- **Signals**: 👍8 💬3 · closed
- **Excerpt**: ### Reproduction 1. Go to [link] 2. Click Submit (view transition doesn't work) Changing the `Form` to `<Form action="/redirect" method="POST" unstable_viewTransition>` does work as expected. ### System Info ```shell System: OS: macOS 14.2.1 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 18.22 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.10.0 - ~/.nvm/versions/node/v20.10.0/bin/node Yarn: 1.22.19 - ~/.yarn/bin/yarn npm: 10.2.3 - ~/.nvm/versions/node/v20.10.0/bin/npm pnpm: 8.15.4 - ~/Library/pnpm/pnpm bun: 1.0.11 - ~/.bun/bin/bun Browsers: Chrome: 122.0.6261.128…

### CASE-6866 · BUG: useId generates duplicate IDs on initial render (ssr)
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, safari, macos
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: ### Reproduction Steps To Reproduce : -- To see the error : [link] -- Or go to [link] and disable JS -- The duplicated ids will be found on avatars ### System Info ```shell System: OS: macOS 14.0 Shell: 5.9 - /bin/zsh Binaries: Node: 20.12.2 - ~/.nvm/versions/node/v20.12.2/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 10.5.0 - ~/.nvm/versions/node/v20.12.2/bin/npm Browsers: Chrome: 127.0.6533.99 Safari: 17.0 npmPackages: @user/css-bundle: ^2.9.1 => 2.9.1 @user/dev: ^2.9.1 => 2.9.1 @user/eslint-config: ^2.9.1 => 2.9.1 @user/express: ^2.9.1 => 2.9.1 @user/node: ^2.9.1 => 2.9.1…

### CASE-6868 · `remix dev --debug` isn't accessible from outside Docker
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome
- **Signals**: 👍3 💬2 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.5 ### Steps to Reproduce - Start a dev server with `remix dev --debug` inside a docker container - Try to access it (from VSCode or Chrome Inspector) with the printed address ### Expected Behavior The inspector should be attached ### Actual Behavior The inspector doesn't attach I think it's because the host is `127.0.0.1` by default (and not configurable) which doesn't work well with Docker, [see this SO answer]([link]). It should either be `0.0.0.0` by default, or be configurable the way Nodejs debugger CLI is, like this: `node…

### CASE-6870 · Error / page resources for / not found. Not rendering React
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, react, mobile
- **Signals**: 👍34 💬175 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I'm having multiple Bugsnag reports from Safari and Mobile Safari (various versions and browsers) of this error in `.cache/production-app.js` in `publicLoader.loadPage`: ![Capture d'écran 2019-11-19 12 20 44]([link]) ### Steps to reproduce I don't see this Error in my macOS Safari. Website is [link] ### Expected result No error ### Actual result An error ### Environment ``` System: OS: macOS 10.14.6 CPU: (8) x64 Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz Shell: 5.3 - /bin/zsh Binaries: Node: 10.15.3 - ~/.nvm/versions/node/v10.15.3/bin/node Yarn: 1.19.0 - /usr/local/bin/yarn npm:…

### CASE-6871 · [gatsby-source-wordpress] Large WordPress site causing extremely slow build time (stuck at 'source and transform nodes')
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, safari, macos
- **Signals**: 👍19 💬156 · closed
- **Excerpt**: ## Description `gatsby develop` hangs on `source and transform nodes` after querying a large WordPress installation (~9000 posts, ~35 pages). Is there any guides as to what's too big for Gatsby to handle in this regards? ### Environment ``` System: OS: macOS High Sierra 10.13.6 CPU: x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 8.10.0 - ~/n/bin/node Yarn: 1.5.1 - ~/n/bin/yarn npm: 5.6.0 - ~/n/bin/npm Browsers: Chrome: 67.0.3396.99 Safari: 11.1.2 npmPackages: gatsby: ^1.9.273 => 1.9.273 gatsby-image: ^1.0.54 => 1.0.54 gatsby-link: ^1.6.45 => 1.6.45…

### CASE-6875 · Loading chunks while a new release is deployed
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍49 💬86 · closed · labels: type: bug/status: confirmed/topic: webpack/babel
- **Excerpt**: ### Description I think there is a structural issue with the lazy loading of page chunks. I came across various `ChunkLoadError`s in Sentry reports, and just now it happened to me in Chrome, and it happened when I had loaded a page, then deployed a new version (via Netlify), and then tried to navigate to another page without a full page reload: the new deployed chunks have different paths, so the Gatsby Links can't find the ones it knew... throwing 404s and resulting in not being able to navigate! ### Steps to reproduce You can easily reproduce this by deploying, going to the website,…

### CASE-6877 · Unknown type "ContentfulFixed". Did you mean "ContentfulBlogPost", "ContentfulContentType", or "ContentfulBlogPostEdge"?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍7 💬69 · closed · labels: type: bug/status: needs reproduction/topic: GraphQL
- **Excerpt**: ## ERROR [ref] GRAPHQL I'm trying to fetch my blogs from contentful and it's giving me a weird error. The only reason I am opening this issue is because the error told me to so. This is what the error said: Error: The result of this StaticQuery could not be fetched. "This is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in [link] framework]/issues" gatsby info output: System: OS: Windows 10 CPU: (8) x64 Intel(R) Core(TM) i7-3632QM CPU @ 2.20GHz Binaries: npm: 6.9.0 - C:\Program Files\nodejs\npm.CMD Languages: Python: 3.7.2 Browsers: Edge: 44.18362.1.0…

### CASE-6878 · Docs enhancement - add a copy button to code examples
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍11 💬66 · closed · labels: type: documentation
- **Excerpt**: ## Summary Code examples in tutorials, READme files, and guides could use a copy button so people don't miss a single thing when they copy code. ## Motivation When we did a Gatsby workshop a while ago, many workshop attendees' computer screens didn't show backtics very clearly and they missed copying them a lot. Another related issue brought up by @user is that when copying code from Firefox to VS code (and Notepad ++), the code ended up having two carriage returns added to the top and bottom. This actually mattered for a markdown file, it appears. ## Acceptance criteria (by @user) - As a…

### CASE-6883 · gatsby-plugin-sharp: WorkerError @user.6.27
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, linux, ubuntu, mobile
- **Signals**: 👍19 💬47 · closed · labels: type: bug
- **Excerpt**: ## Description Error processing a .png file when running `gatsby develop` ### Steps to reproduce Upgrading gatsby-plugin-sharp to version 2.6.27 ### Expected result Images would be queried as expected ### Actual result ![image]([link]) ### Environment System: OS: Linux 5.4 Ubuntu 20.04.1 LTS (Focal Fossa) CPU: (8) x64 AMD Ryzen 7 2700U with Radeon Vega Mobile Gfx Shell: 5.0.17 - /bin/bash Binaries: Node: 12.16.1 - ~/.nvm/versions/node/v12.16.1/bin/node Yarn: 1.22.4 - /usr/bin/yarn npm: 6.13.4 - ~/.nvm/versions/node/v12.16.1/bin/npm Languages: Python: 2.7.18 - /usr/bin/python Browsers: Chrome:…

### CASE-6887 · SecurityError: The operation is insecure in Firefox Developer edition
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox, react
- **Signals**: 👍26 💬41 · open · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description With gatsby develop and Firefox Developer Edition (latest version, 69.07b), firefox throws a security error exception when `app.js` checks `if (`serviceWorker` in navigator)`, and hence the app cannot be used: ![SecurityError]([link]) ### Steps to reproduce 1. Install firefox developer edition 2. Run gatsby develop on any gatsby project (no offline plugin nor anything sw-related) ### Expected result You see the website and can develop it normally. ### Actual result You get the error above and hence cannot do anything (the error triggers the react overlay error and does not let…

### CASE-6891 · [gatsby-plugin-offline] ServiceWorker registration causes a quick blank page on website loading/refresh
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react
- **Signals**: 👍20 💬38 · closed · labels: type: bug/topic: plugins-PWA
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description In a project using the gatsby-offline-plugin, in production (gatsby build), when you access or refresh a page, you'll get a quick blank page instead of the styled HTML from the React's render. Disabling the ServiceWorker from Chrome's DevTools (bypass for…

### CASE-6893 · The placeholder image in "gatsby-image" does not fade on Safari, again
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari
- **Signals**: 👍3 💬36 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: This issue was fixed some time ago ([link] framework][ref]), but it seems to have crept up again. You can see it by visiting [link] on Safari. The placeholder does not fade in, it just disappears. Let me know if you need more context!

### CASE-6895 · MS Edge/IE11 gatsby-link navigation fails (in built site only)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge/, edge
- **Signals**: 👍0 💬36 · closed
- **Excerpt**: I was having this issue with my site Iv'e built with gatsby where links are _very_ buggy in Edge. I've been trying to figure out whether it's some issue with my local config or a bug in gatsby. (I'm confused because the gatsby-default-starter demo doesn't exhibit the issue). I completely wiped my node modules, ungraded to latest node LTS, then installed gatsby-cli and did a gatsby new test, and the resulting site is still giving me the errors. > HTTP404: NOT FOUND Iv'e tested in all the other modern browsers and haven't seen any issues like this. I have a copy producing the errors in Edge at…

### CASE-6896 · SSL errors when using `gatsby develop --https`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, safari
- **Signals**: 👍8 💬35 · closed · labels: type: bug/status: confirmed/topic: cli
- **Excerpt**: ## Description When running `gatsby develop --https` both with without `--cert-file`/`--key-file` SSL does not work in Firefox, Chrome or Safari (screenshots below). ### Steps to reproduce 1. I've created a minimal reproduction in [link] This is based off the default starter with the latest version of Gatsby. 2. `npm install` 3. `npm run start:devcert` this starts the local dev server and automatically creates SSL certs. 4. Observe failures. 5. Install [`mkcert`]([link]), for Mac this means: * `brew install mkcert` * `brew install nss` * `mkcert install` * `mkcert localhost` 6. `npm run…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6810 · `create-remix` CLI tool fails 403 when executed on VPN network
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? Latest ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Try to run any of the variations of `create-remix` when on VPN (ex: you're on the work office WIFI) > npx create-remix@user --template pcattori/remix-template-vite > npx create-remix@user --template [meta framework]/templates/express ## Example Reporoduction 1. ❌ Ran command while connected to VPN / corporate network 2. ✅ Changed to my phone's hotspot connection (also works at home on my wifi) & it works <img width="895" alt="image"…

### CASE-6811 · remix --port argument is not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.18.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce ``` ./node_mobules/.bin/remix dev --port 4001 ``` ### Expected Behavior Dev server will start on port 4001 ### Actual Behavior Dev server starts on port 3000 --- This option is mentioned in the docs: [link] But it seems to take no effect At the same time, setting `PORT` as an env variable works: ``` PORT=4001 ./node_mobules/.bin/remix dev ```

### CASE-6827 · Context: no shadowing across different component types
- **Principles**: P-E1, P-E2, P-E4 · **Env**: chrome, react, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: While porting [monochrome]([link])'s React/Vue wrappers to Remix 3.0.0-beta.0, I hit a friction point with `handle.context` that's worth flagging because it diverges from React in a non-obvious way. ## What I expected In React, multiple components can re-provide the **same** context, and consumers always see the closest provider's value. This is the standard "compound component" pattern (Base UI, Headless UI, React Aria all use it). For example, a `Menu` where both `Root` and `Group` provide a "menu scope" context: ```tsx // React: one context, two providers, closest wins automatically const…

### CASE-6828 · Navigation fails due to missing manifest (fog of war enabled)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction In our codebase we have the following (buggy) component ```ts function TabsView() { const navigate = useNavigate(); const location = useLocation(); const activeTab = location.pathname.includes("/archived") ? tabNames.archived : tabNames.active; const tabIndex = tabs.findIndex((tab) => tab.label === activeTab); function handleTabsChange(index: number) { const tab = tabs[index]?.label; invariant(tab, `Invalid tab index: ${index}`); const pathname = tab === tabNames.active ? "/conversations" : "/conversations/archived"; navigate(pathname); } return ( <Tabs index={tabIndex}…

### CASE-6849 · Fly.io template broken / Fly can't use `remix serve`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.3 ### Steps to Reproduce `npx create-remix@user` Install the basic Fly template, and follow normal `flyctl launch` steps to deploy a new fly instance. ### Expected Behavior Deployment should work without any updates to the template ### Actual Behavior Due to [this PR]([link] framework][ref]) the `HOST` environment variable is now reserved by `@user/dev` and `@user/serve`. This means you can no longer run `"start": "remix-serve build"` on a fly instance, as the `HOST` variable on your fly instance will cause remix-serve to fail:…

### CASE-6894 · a11y issues: page nav doesn't trigger assistive tech
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍11 💬36 · closed · labels: type: bug
- **Excerpt**: ## Description Right now, using assistive tech to navigate between pages works, but doesn't announce that the user has reached the next page. This is confusing, so we should find a way to mimic standard navigation behavior when using `gatsby-link` for navigation. Thanks to @user for pointing this out! Here were a few suggestions he came up with: - Focus the page after routing - Use ARIA live regions - Use a Service Worker to simulate server routing, but with less lag - This seems like the least desirable options, since it would require a full page re-render for all navigation; if someone…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6812 · CSS bundle gives hydration error on remix 1.16 with css modules
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.16 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce - Create a new app using npx create-remix@user that uses `cssBundleHref` by default - Create a component that uses a css module. e.g. ```tsx import css from './button.module.css' export function Button() { return <button className={css.button}>text</button> } ``` - Serve the app - Make a change in the css module file - Observe app being rebuild and page reloaded - Changes are visible however the app is logging the following error to the…

### CASE-6826 · Bug: client runtime reads `window.navigation` unguarded, so hydration dies on browsers without the Navigation API
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Versions:** `[email]-beta.5`, `@user/[email]` ## What happens `run()` calls `startNavigationListener()`, which reads `window.navigation` with no feature check: ```ts // packages/ui/src/runtime/navigation.ts export function startNavigationListenerImpl(signal, options) { let navigation = window.navigation navigation.updateCurrentEntry({ state: { target: undefined, src: window.location.href, resetScroll: true, $rmx: true }, }) ... } ``` On a browser without the Navigation API this throws synchronously: ``` TypeError: Cannot read properties of undefined (reading 'updateCurrentEntry') //…

### CASE-6835 · Vite for windows - local dev bundling broken
- **Principles**: P-F4 · **Env**: windows, macos, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction I've been unable to reproduce it outside of my project, I'm not sure what is different but I've spent about a day trying to debug and reproduce the issue. At this point I am just opening a bug report to try get some advice on how I can debug the issue, ideas or even can jump on a call to debug it. The problem is on Windows (the project works fine on MacOS) that Vite is fetching server modules from the browser. Here is my Vite plugin configuration. ``` ssr: { noExternal: ['@user/*'], }, plugins: [ tsconfigPaths(), remix({ serverModuleFormat: 'cjs', ignoredRouteFiles: ['**/*'],…

### CASE-6853 · [Bug]: invalid document id in url throws error in SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? latest ### What version of Node are you using? Minimum supported version is 14. 16 ### Steps to Reproduce Make a new remix app, start dev server, then append an id to the url #foo and it will throw an error on refresh. ### Expected Behavior no…

### CASE-6855 · [Bug]: Warning: Did not expect server HTML to contain a <div> in <html>.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14 ### Steps to Reproduce - Install the [10ten Japanese Reader]([link]) extension - Run `npx create-remix@user <project-name>` - Choose any template - Install the…

### CASE-6858 · [Bug]: `reloadDocument` prop on `Form` does not mimic browser behavior
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.0.6 ### What version of Node are you using? Minimum supported version is 14. 17.1.0 ### Steps to Reproduce 1. [Clone my reproduction repository]([link]) 2. `npm install` 3. `npm run dev` 4. Open the browser DevTools Network tab 5. Submit the form ( request is a `POST` ) 6. See the error show up 7. Refresh the page ( request is a `POST` ) 8. See the error be present still on the page ( as the `POST` was retried ) 9. Enable JS on the page by setting `hydrate` to `true` in `app/routes/index.tsx` 10. Submit the form ( request is a `POST` ) 11. See the…

### CASE-6886 · StaticQuery silently fails when used inside wrapRootElement and wrapPageElement
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍23 💬46 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description Using a `StaticQuery` in a a component inside `wrapRootElement` or `wrapPageElement` results in _Loading (StaticQuery)_ both for `gatsby-node.js` and `gatsby-ssr.js`. ### Steps to reproduce Using this wrapRootElement implementation the issue appears: ```js import React from 'react' import { graphql, StaticQuery } from 'gatsby' export const…

### CASE-6900 · Using <StrictMode /> causes error in console: `Warning: Unsafe lifecycle methods were found within a strict-mode tree`
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬34 · closed · labels: type: bug/type: upstream
- **Excerpt**: I'm using gatsby as example environment for new google maps api, and I need to test it with SSR, but at the same time I need to test it in strict mode, but instead of showing me errors in my own code, it errors out on `gatsby's` code. ``` Warning: Unsafe lifecycle methods were found within a strict-mode tree: in StrictMode (at pages/index.js:66) in IndexPage (created by PageRenderer) in PageRenderer (created by JSONStore) in JSONStore (created by EnsureResources) in ScrollContext (created by EnsureResources) in RouteUpdates (created by EnsureResources) in EnsureResources (created by…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6814 · Visual Bug on docs website
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? Does not matter ### Steps to Reproduce Go to [link] You can see `unstable_parseMultipartFormData` getting `overflow` > NOTE: My viewport width is 1536 ![image]([link]) ### Expected Behavior Not getting overflow ### Actual Behavior Getting overflow ![image]([link])

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6816 · wrong `globals.d.ts` path in `remix.env.d.ts` @user/node 1.6.2
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.2 ### Steps to Reproduce 1. Run `npx create-remix@user`. 2. Select `Just the basics` / `Vercel` / `TypeScript`. 3. Install dependencies. (`npm` or `yarn`) 4. see `remix.env.d.ts` file. ### Expected Behavior ```ts /// <reference types="@user/dev" /> /// <reference types="@user/node/globals" /> ``` no error in this `remix.env.d.ts`. ### Actual Behavior but not found `"@user/node/globals"` ![image]([link]) To avoid the error, I tried to something: **1. change path** @user/node/globals -> @user/node/dists/globals ```ts /// <reference types="@user/dev"…

### CASE-6817 · <Scripts crossOrigin /> doesn't work for when hosting the app's JS assets on a different CDN server
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.1 ### Steps to Reproduce Try to host public/build assets in a CDN by passing the right CDN prefix to `publicPath` in your remix.config.js Sample: remix.config.js <img width="470" alt="image" src="[link]> And now when the scripts are loaded via `<Scripts crossOrigin/>` in `root.tsx` file, the scripts fail to load with `CORS Error` <img width="1772" alt="image" src="[link]> <img width="1697" alt="image" src="[link]> As per the docs here [link] the above settings should work when scripts are hosted on another server than the app, screenshot of the…

### CASE-6820 · LiveReload rendering nothing on server but a component on client
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.3 ### Steps to Reproduce We discovered this in the indie stack, I fixed it by adding `cross-env NODE_ENV=development` to the `remix dev` command, but you can quickly reproduce this by initializing the indie stack with the commit before my fix: ``` npx create-remix@user --template=[link] live-reload-bug # install deps cd ./live-reload-bug npm run dev ``` Open the app and you'll see the error: <img width="623" alt="image" src="[link]> ### Expected Behavior We expect that during development the LiveReload will render the script necessary to hook up…

### CASE-6824 · [Bug]: TS error in `remix.env.d.ts` file on a fresh scaffolded remix app
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `@user/node` ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 17.4.0 ### Steps to Reproduce - npx create-remix@user - install packages - open `remix.env.d.ts` : a TS error is highlighted - also, run `./node_modules/.bin/tsc --noEmit -p tsconfig.json` : same error on the console <img width="1440" alt="CleanShot 2022-01-28 at 14 10 04@user" src="[link]> ### Expected Behavior No TS errors on a fresh scaffolded remix app ### Actual Behavior ``` ~/tmp/my-remix-app ❯…

### CASE-6831 · Node Fetch: Cannot cancel a stream that already has a reader
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction ```tsx export const loader: LoaderFunction = async ({ context, request }) => { const controller = new AbortController() fetch('[link] { signal: controller.signal, }) controller.abort() return defer({ }) } ``` ### System Info ```shell node v18.12.0 remix-run/node 1.15.0 ``` ### Used Package Manager pnpm ### Expected Behavior The fetch request can be cancelled normally, but an error was caught in the catch. ### Actual Behavior [[ref]]([link] framework]/discussions/9216) I used fetch in Remix, but encountered the following issue： <img width="668" alt="image" src="[link]…

### CASE-6836 · [Vulnerability] es-lint-config: [email] dependency [email] contains memory leak
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vulnerability in dependency es-lint Glob version is outdated using inflight dependency that contains memory leak. Rimraf version should be set to 5.0.5 to in package flat-cache to resolve. package [remix-eslint-config]([link] framework]/tree/main/packages/remix-eslint-config) <img width="291" alt="Screenshot 2023-12-12 at 4 40 30 PM" src="[link] framework]/assets/71095829/d4cb9219-6afb-4eb7-9150-7d742ce76649"> [snyk]([link]) #[link]

### CASE-6839 · Remix Vite cannot run with pnpm on Windows
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Reproduction Clone this [repo]([link]), then run `pnpm i`. Finally, execute `pnpm run build` in the workspace package. ### System Info ```shell System: OS: Windows 11 10.0.22631 CPU: (32) x64 AMD Ryzen 9 5950X 16-Core Processor Memory: 41.94 GB / 79.93 GB Binaries: Node: 18.12.1 - ~\scoop\apps\volta\current\appdata\tools\image\node\18.12.1\node.EXE Yarn: 1.22.18 - ~\scoop\apps\volta\current\appdata\tools\image\yarn\1.22.18\bin\yarn.CMD npm: 9.6.1 - ~\scoop\apps\volta\current\appdata\tools\image\npm\9.6.1\bin\npm.CMD pnpm: 8.9.0 - ~\scoop\apps\volta\current\appdata\bin\pnpm.EXE Browsers:…

### CASE-6844 · Tailwind class with image url as arbitrary value breaks the server
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.14.3 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce 1. `npx create-remix@user`` 2. [Install tailwind]([link]) 3. Adding `// bg-[url('${icon}')]` to _index.tsx, even if inside comments, results in an error only recoverable by deleting the "build" and ".cache" folders and restarting the server. [StackBlitz]([link]) ### Expected Behavior Server to continue running ### Actual Behavior The server breaks with this error: ```log ✘ [ERROR] [plugin css-file] Build failed with 1 error:…

### CASE-6850 · Fails To Create Remix App
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? create-remix@user ### Steps to Reproduce 1. Run `npx create-remix@user`. 2. Enter a directory name, in my case - `web` or `./web` both fail. 3. Select `Just the basics`. 4. Select any option. In my case - `Remix App Server` (tried express too, to no avail). 5. Enter yes or no to run npm install, doesn't matter. ### Expected Behavior It should create a remix app in the web directory. ### Actual Behavior Fails to create the app and exits with the error - `filePath.replaceAll is not a function`. Refer to screenshot attached. <img width="1270"…

### CASE-6852 · Sometimes page returns 404 or bad JS is generated after rebuild
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.3. ### Steps to Reproduce I'm not sure - this only happens on my very slow laptop and I can't reliably reproduce it ### Expected Behavior Rebuild works normally and the page is shown on reload ### Actual Behavior ![image]([link]) I know this isn't a great bug report but I'm honestly not sure how to troubleshoot this / gather info

### CASE-6879 · Gatsby build on Netlify fails(Image generation): Command did not finish within the time limit
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍13 💬59 · closed · labels: type: bug
- **Excerpt**: ## Description The build on Netlify fails with error: `Command did not finish within the time limit.` When I run a local build the build is much faster. ### Steps to reproduce Running `gatsby build` on Netlify ### Expected result The build should succeed in a reasonable amount of time, just like when running the build locally: Build log: ``` success open and validate gatsby-config — 0.010 s success load plugins — 0.172 s success onPreInit — 0.469 s success delete html and css files from previous builds — 0.005 s success initialize cache — 0.007 s success copy gatsby files — 0.039 s success…

### CASE-6881 · gatsby-wordpress-source image localFile null / if i add new Image somewhere on the page another Posts Image localFile becomes null
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬53 · closed · labels: type: bug/help wanted/status: confirmed/topic: source-wordpress
- **Excerpt**: ## Description I have a several custom post types which have either an repeater for images or a featured image. Until a random lower amount of posts ~20 everything seems fine but than if i add new images to the page like for example in my projects post, the localfile for another post not related to the one becomes null. i could not detect any pattern for that. it seems random and looks like there is just certain space / limit available and if that space is full new localFile items override the old ones. i tried deleting .cache and public and reuploading the images but no effect. when i check…

### CASE-6884 · updating gatsby-plugin-sharp from 2.8.0 to 2.9.0 breaks build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬46 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: ## Description ``` error pngload: non-recoverable state pngload: non-recoverable state vips2png: unable to write to target target Error: pngload: non-recoverable state pngload: non-recoverable state vips2png: unable to write to target target not finished run page queries - 1.474s not finished Generating image thumbnails - 1.299s error Command failed with exit code 1. ``` I can up- and downgrade repeatedly. v2.8.0 always works, v2.9.0 always errors. ### Steps to reproduce This is a complex app. I have no idea if this happens generally. 1. clone [link] 1. check that gatsby-plugin-sharp is set…

### CASE-6885 · [gatsby-source-medium] Plugin fails due to new medium cloudflare ddos prevention
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬46 · closed · labels: help wanted/stale?/type: upstream
- **Excerpt**: ## Description Due to medium integrating cloudflares anti ddos protection recaptcha the [gatsy-source-medium]([link]) plugin now works sporadically and fails builds. This is a new feature they've just implemented so nothing that the plugin has done wrong of course! Just something that needs to be worked around ![image]([link]) ### Possible way to fix __Cloudscraper__ ~~I've not come across an issue like this before but a bit of research has led me to [cloudscraper]([link]) which reports that it can bypass the cloudflare screen on a node process.~~ ~~Happy to take work on a PR to get this…

### CASE-6890 · Error with Suspense and lazy loading with gatbsy 4.23.1 and react 18.2 on build
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍3 💬38 · closed · labels: type: bug/status: confirmed/topic: core
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I am unable to use `<Suspense>` and lazy loading with gatsbyjs `4.23.1` and react `18.2.0`. The problem arises with the build and in dev mode with `DEV_SSR` flag. The error I get is: `Uncaught Error: The server did not finish this Suspense…

### CASE-6898 · Gatsby 3: gatsby-plugin-image partially rerendering images
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬34 · closed · labels: type: bug/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description We migrated to gatsby3 and to the new gatsby-plugin-image. Everything works fine except the following issue: There is 48 cards with GatsbyImage component. The cards with the images are rendered just fine, but after clicking sort by, the page is…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6821 · Locally hosted fonts not working
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.3 ### Steps to Reproduce 1. Download this repo: [link] 2. Run `npm run start` and `npm run dev` 3. Go to localhost:3333 4. See that the Nunito font is not applied to the body, h1, and p elements. ### Expected Behavior For the elements to appear with the Nunito font. ### Actual Behavior The elements appear with the system fallback fonts. I'm not sure if this is the same as [link] framework][ref] - but this is using the Architect starter so thought it might be a different problem. I saw this discussion in Discord, but don't think I'm doing quite the…

### CASE-6888 · gatsby develop is not working after npm install
- **Principles**: P-B1, P-B2, P-B3 · **Env**: react
- **Signals**: 👍6 💬40 · closed · labels: type: bug/help wanted
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description I was following tutorial at [link] but `gatsby develop` is not working as expected after the below `npm install` command ```npm npm install --save gatsby-plugin-typography react-typography typography ``` `gatsby develop` command work as expected before the above command. I am getting the below error when I run `gatsby develop` command ```…

### CASE-6897 · How to self-host fonts?
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍10 💬35 · closed
- **Excerpt**: Self-hosting fonts included in [link] is working great for me. However, I'm having trouble self-hosting other fonts. Following the advice of @user in [this issue]([link] framework][ref]), I created a `./src/fonts/` directory and put the font files there. I then imported the font files in `src/layouts/index.js` like this: ```js import '../fonts/font-file.woff2' import '../fonts/font-file.woff' ``` I'm expecting to see the files copied to the `./public/` directory, but that isn't happening. Am I doing something wrong?

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6840 · MaxListenersExceededWarning after upgrading to Remix v1.18.0
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? v1.18.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce I don't know how to reproduce unfortunately. I only upgraded Remix and suddenly this issue is starting to pop up. ``` (node:6176) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 SIGINT listeners added to [process]. Use emitter.setMaxListeners() to increase limit (Use `node --trace-warnings ...` to show where the warning was created) ``` This seems to only happen when running the dev mode, not after building…

### CASE-6857 · useFetcher load() shows confusing message when invoked improperly
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14.18.2 ### Steps to Reproduce ```tsx // routes/index.tsx import { useFetcher } from "remix"; export default function Index() { const fetcher = useFetcher(); fetcher.load("/data"); if (!fetcher.data) return null; return <div>{JSON.stringify(fetcher.data)}</div> } ``` ### Expected Behavior Error that hints the incorrect usage of `fetcher.load()`. This code is taken from the [example docs]([link]). Addressed in #[ref] ### Actual Behavior `ReferenceError: AbortController is not…

### CASE-6865 · [Bug]: filewatcher creates dead css files with tailwind
- **Principles**: P-F5, P-H3 · **Env**: tailwind
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### What version of Remix are you using? 1.0.6 ### Steps to Reproduce 1. Create a new project with `npx create-remix@user` 2. Follow the steps in [styling]([link]) to integrate Tailwind 3. Start dev server with `npm run dev` 4. Add some styles in `routes/index.tsx` e.g. `className="py-4"` and save 5. Repeat adding different styles. Not confirmed: This also happens to js files in public/build/*. ### Expected Behavior I expect Remix creates only one css file for `index.tsx` in` build/_assets/*` or cleanup old files. ### Actual Behavior On every change Tailwind is made in `tailwind.css` when a…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-6856 · `useFetcher` breaks the client side routing
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. v14.15.4 ### Steps to Reproduce I created an abstraction for remix themes ([link]) and in the theme provider I used useFetcher which caused the page to be reloaded each time I clicked to links. I replaced useFetcher with a simple fetch and now is working as expected. What might be wrong here ? [link] ``` ### Expected Behavior `useFetcher` won't break the client side routing. ### Actual Behavior `useFetcher` breaks the client side routing. Every link reloads the page.

### CASE-6864 · [Bug]: Route link function not called (and CSS not loaded) when page loads after POST-ing to itself
- **Principles**: P-C1, P-C2, P-C3 · **Env**: react
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.13.1 ### Steps to Reproduce CodeSandbox is here: [link] MVP repo is here: [link] **The context**: I'm trying to set a theme toggle on each page in a Remix…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6869 · ESM Module Error using [email]
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.2 ### Steps to Reproduce See [link] ### Expected Behavior Correctly start the app and show a flow diagram. I tried to import the module as described in the docs: [link] Configured remix to bundle dependencies on server: ``` /** * @user {import('@user/dev/config').AppConfig} */ module.exports = { appDirectory: 'app', browserBuildDirectory: 'public/build', publicPath: '/build/', serverBuildDirectory: 'build', devServerPort: 8002, serverDependenciesToBundle: [ 'react-flow-renderer', 'd3-zoom', 'd3-dispatch', 'd3-drag', 'd3-selection',…

