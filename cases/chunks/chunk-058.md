# Case Chunk 058 — Round 58

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6701 · Not firing @user event on img element
- **Principles**: P-A3, P-H1 · **Env**: vue, nuxt
- **Signals**: 👍3 💬6 · closed · labels: pending triage/2.x
- **Excerpt**: ### Version [v2.5.1]([link]) ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create an image element with invalid path (which will produce not found error) 2. Bind a method to @user event ### What is expected ? The method should run ### What is actually happening? Not running ### Additional comments? It's working fine when using Vue directly. <!--cmty--><!--cmty_prevent_hook--> <div align="right"><sub><em>This bug report is available on <a href="[link]>Nuxt</a> community (<a href="[link] framework].js/issues/c9021">#c9021</a>)</em></sub></div>

### CASE-6703 · import_jsx_dev_runtime.jsxDEV is not a function after upgrade to 1.7.0 in Docker Container
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍49 💬59 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.0 ### Steps to Reproduce After upgrading to 1.7.0 and building my docker container, Going to any page yields `import_jsx_dev_runtime.jsxDEV is not a function` on the server, and an error page is rendered. Here is my Docker file that causes it to fail: ``` # Base Node image FROM node:lts-alpine as base # Setup all node_modules FROM base as deps RUN mkdir /app WORKDIR /app ADD package.json ./ ADD yarn.lock ./ RUN yarn install --production=false # Setup production node_modules FROM base as production-deps RUN mkdir /app WORKDIR /app COPY --from=deps…

### CASE-6707 · v2pre ts bug, not happy with typed const arrow functions
- **Principles**: P-A3, P-H1 · **Env**: typescript
- **Signals**: 👍0 💬28 · closed
- **Excerpt**: ### What version of Remix are you using? 2.0.0-pre.2 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Upgrading to v2 release candidate from v1.19.3 is fairly painless on mana.wiki, except for this one weird Typescript error that I don't know what might be the sourced from: ![image]([link] framework]/assets/84349818/fe88e2ea-6050-4029-8938-fdbc273763f8) ```console $ remix dev -c "npm run dev:node" --manual 💿 remix dev info building... X [ERROR] The character ">" is not valid inside a JSX element app/utils/swr-fetchers.ts:25:48:…

### CASE-6713 · HMR not working in `cloudflare-pages` template
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: ### What version of Remix are you using? 1.16.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce 1. `npx create-remix@user --template [link] framework]/tree/templates_v2_dev/templates/cloudflare-pages` 2. `npm run dev` 3. change something in the `/app/routes/_index.tsx` file 4. open console and see: <img width="738" alt="console-error" src="[link] framework]/assets/24757335/47ac2f61-1ca7-4e06-9013-34148873c4e4"> ### Expected Behavior HMR should work after changing the file ### Actual Behavior After changing the file, HMR does not…

### CASE-6716 · [Bug]: Redirecting from an action called using useFetcher does not reload loaders
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬20 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14.8.0 ### Steps to Reproduce 1. From route X, make a HTTP request to a resource route using useFetcher Form. 2. From the action of the resource route, redirect to route Y. ### Expected Behavior Loaders of route Y should be reloaded. ### Actual Behavior Loaders of route Y are not reloaded. [link] In the video: 1. I'm on the route /admin/edit/$slug 2. I delete the post 'Post 3' which calls the resource route /admin/delete/$slug 3. The resource route deletes the post and…

### CASE-6725 · [Vite plugin] Livereload with Tailwind is not working
- **Principles**: P-A3, P-H1 · **Env**: vite, tailwind
- **Signals**: 👍6 💬15 · closed
- **Excerpt**: ### What version of Remix are you using? 2.2.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Just spin up the Vite example and install Tailwind. Here's a public repo with the error: [link] Here's a video of the error: [link] ### Expected Behavior The live reload should work, updating the new tailwind style. ### Actual Behavior I need to reload the page to see the new style applied to the project.

### CASE-6726 · Unstable dev killing pid issue
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### What version of Remix are you using? v1.16.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Unfortunately I do not know the precise reason this happened but here is the image of the issue, Pedro asked me to create an issue ![image]([link] framework]/assets/18480956/47ae9ae8-76c5-43b3-877d-4341b646e2b0) ### Expected Behavior Unstable dev doesn't crash ### Actual Behavior Crashes

### CASE-6729 · Remix server is crashing randomly when rebuilding
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### What version of Remix are you using? 1.8.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Have the server running edit some code, and randomly it crashes. It doesn't happen all the time ![image]([link] framework]/assets/368734/6fd4a105-6720-4d9c-ba8b-4a4ad13ed8c5) ``` GET / 200 - - 570.251 ms info rebuilding... (~ app/components/Nav.tsx) info rebuilt (170ms) /Users/thitemple/src/templecoding-site/node_modules/.pnpm/@[email]@[email]/node_modules/@user/dev/dist/devServer_unstable/proc.js:29 throw new Error(`Failed to kill…

### CASE-6733 · [Bug]: Vercel deployment does not work in monorepo
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬13 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14 ### Steps to Reproduce * Clone this repo – [link] * run `yarn` from the project root * deploy to a vercel server as you normally would with a monorepo ### Expected Behavior It should run fine as if it were not in a monorepo setting ### Actual Behavior This error runs when the project is deployed to vercel. You can see the crash at this url – [link] And see the function log here: ![image]([link]) Additionally it could…

### CASE-6745 · Revalidator causes unrecoverable crash when no network connection
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.17.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce call revalidator.revalidate() when devtools network connection is set to offline (or if deployed, disconnect your actual network somehow) Also check out this PR with exactly these changes made to the remix starter, with error boundaries at 3 levels, none of which catch the error: [link] ### Expected Behavior Maybe crash, but catchable with either error boundaries or regular try/catch. ### Actual Behavior <img width="873" alt="Screen…

### CASE-6752 · [Bug]: Prefetching link doesn't work with relative pathname
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### What version of React Router are you using? 6.13.0 ### Steps to Reproduce Use the `prefetch="render"` with the relative link like `to="../something"`. ### Expected Behavior I would expect the to link to be resolved to the absolute path and used in such a format in the final anchor tag so that the browser can prefetch the link. ### Actual Behavior When using the `Link` or `NavLink` with the relative URL in the `to` property, the prefetching doesn't work and prints a warning in the console: `Tried to prefetch RELATIVE_URL but no routes matched.` <img width="661" alt="Screenshot 2023-08-31…

### CASE-6754 · React Markdown is Broken On Remix
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍16 💬9 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.3 ### Steps to Reproduce - ReactMarkdown component errors out with the following error when deploying to Cloudflare Pages + Remix ![Screenshot 2022-05-07 at 3 27 10 AM]([link]) Steps: 1. Clone this repo: [link] (this repo is Remix barebones TS + Cloudflare Pages starter template) 2. `npm install` and `npm run dev` 3. You'll see this error: <img width="749" alt="Screenshot 2022-05-07 at 3 34 24 AM" src="[link]> It seems like Remix ships wrong node polyfills: [link] ### Expected Behavior ReactMarkdown should work fine ### Actual Behavior It crashes…

### CASE-6757 · [Bug]: Cannot find module '~/remix/start' when using pm2 and docker
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `@user/serve` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.8.0 ### Steps to Reproduce came across a weird issue while using pm2 and dockerizing remix app. i am using pm2 docker image, you can find their docs [here]([link]) docker file ```yml FROM keymetrics/pm2:16-alpine WORKDIR /usr/server/app COPY ./packages/remix/package.json ./ RUN pm2 install pm2-server-monit RUN yarn COPY ./packages/remix . CMD [ "pm2-runtime", "start", "ecosystem.config.js" ] ``` pm2…

### CASE-6767 · [Bug]: MultipartFormData
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `@user/node` ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 16.13.1 ### Steps to Reproduce 1) Import the next methods from `remix` or `@user/node`. * `unstable_parseMultipartFormData` * `unstable_createFileUploadHandler` 2) Use those methods into **ActionFunction** to work with a **form multipart** ``` const formData = await unstable_parseMultipartFormData( request, uploadHandler ); ``` 3) Watch the error ![image]([link]) Browser Console: ![image]([link]) 🆘 Note: The…

### CASE-6774 · v1.16.0 SyntaxError: Identifier 'process' has already been declared
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.16.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Not sure the root cause, but this issue is appearing after upgrading Remix from 1.15 to 1.16, no other changes were made. <img width="498" alt="image" src="[link]> <img width="423" alt="image" src="[link]> **Note**: Going through versions and it appears this issue has been occurring since at least `1.16.0-pre.4`. But from that version until earlier versions have this additional error: `Cannot destructure property 'basename' of…

### CASE-6782 · Remix cli seems to be broken
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? latest ### Steps to Reproduce run `npx create-remix@user remix-app` and select the following ```bash ? What type of app do you want to create? Just the basics ? Where do you want to deploy? Choose Remix if you're unsure, it's easy to change deployment targets. Remix App Server ? TypeScript or JavaScript? TypeScript ? Do you want me to run `npm install`? No ``` and it will not even create a simple app and gives me these files/folders: ![image]([link]) Here's the whole folder zipped : [link] I am using npx v7.21.1 ### Expected Behavior The options…

### CASE-6790 · Removing entry.client & entry.server causes remix dev to hang
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? 1.14.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Just testing the ability to use default client/server entry files. When I remove them, Remix installs `isbot` to my dependencies (would be nice to know why, otherwise it may get removed accidentally in the future) and hangs on yarn dev. Here's the console log from when it ran normally, then started failing after removing the client/server files: ![image]([link]) My `entry.client.tsx`: ```js import { RemixBrowser } from '@user/react'…

### CASE-6793 · vercel-plugin-node.build vercel fail to deploy remix
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? ^1.2.3 ### Steps to Reproduce Deploy any remix project using tailwindcss ### Expected Behavior It should deploy seamlessly ### Actual Behavior ![image]([link])

### CASE-6798 · [Bug]: error on vercel adapter when returning a stream
- **Principles**: P-A3, P-H1 · **Env**: react, typescript
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [X] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.3.0 ### Steps to Reproduce Use the following Resource Route to fetch a remote image and return it as a response: ```typescript import { LoaderFunction } from…

### CASE-6799 · [Bug]: Could not locate @user/serve. Please verify you have it installed to use the dev command.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [X] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.0.6 ### What version of Node are you using? Minimum supported version is 14. 14.18.2 ### Steps to Reproduce I used Yarn V2 into a Lerna monorepo, and after make "yarn" on root project i had this message when i tried to launch remix app. <img…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6702 · [Bug]: Style tags disappear from Head during Error/Catch Boundary
- **Principles**: P-F4 · **Env**: react, typescript
- **Signals**: 👍53 💬82 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `remix` (Remix core) - `@user/react` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.13.0 ### Steps to Reproduce Inject style tags into header in `entry.server.tsx` during markup generation. Example: ```typescript let markup = renderToString( <RemixServer context={remixContext} url={request.url} /> ); const html = markup.replace( "<head>", `<head>${getSSRStyles(markup, server)}` ); responseHeaders.set("Content-Type", "text/html"); return new Response("<!DOCTYPE html>" + html, {…

### CASE-6709 · Vite dev server crashes Remix / React when reloading after finding new dependencies to optimize
- **Principles**: P-F4 · **Env**: macos, vite, react
- **Signals**: 👍20 💬26 · closed
- **Excerpt**: ### Reproduction [link] 1. Run the dev server and force clear vite's cache: `npm run dev -- --force` or delete `node_module/.vite` then `npm run dev` 2. Navigate to the index `[link] 3. Directly navigate to `page-two` by typing `[link] in the address bar and hitting enter 4. Vite detects the new dependency (`lodash-es`), runs the optimization and reloads the page which causes it to crash with hydration errors. ### System Info ```shell System: OS: macOS 14.6.1 CPU: (12) arm64 Apple M3 Pro Memory: 68.77 MB / 18.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 21.7.1 - /opt/homebrew/bin/node npm:…

### CASE-6710 · [Bug]: Errors with Styled Components SSR
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍22 💬26 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `@user/react` ### What version of Remix are you using? 1.0.6 ### What version of Node are you using? Minimum supported version is 14. 14 ### Steps to Reproduce [link] 1. Create a new remix project 2. Follow the steps detailed in the docs under [styling: css-in-js]([link]) ### Expected Behavior The client should hydrate the styles from styled-component without errors. ### Actual Behavior The style tag and all the style rules flash onto the screen as plain text before the javascript kicks in and removes them, applying the correct styles. Some content is…

### CASE-6727 · [Bug]: Client-only errors are not handled correctly on initial load. (Infinite loop!)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍8 💬15 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 17.3.0 ### Steps to Reproduce 1. Clone the simple repro case: [link] 2. npm install & npm run dev 3. Click on the /about link and then refresh the page ### Expected Behavior Renders ErrorBoundary. ### Actual Behavior ErrorBoundary mounting errors resulting in an infinite loop. The server correctly renders the page with no error (SSR), but then there's the client-only error during hydration. I'm not sure what exactly happens next, but the whole thing ends up in an infinite…

### CASE-6728 · Inconsistent bundling of css assets between builds (Vite, Stylex)
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Reproduction When using the `?url` import, there seems to be a mismatch between the generated assets, resulting in two identical css files (with different hashes), with the *mismatched* included at the top of the `<head/>`. It's a `vite-plugin-stylex-dev` for StyleX css solution. For some reason I cannot reproduce bug in the sandbox. This happens occasionally between builds, so maybe it's due to some internal Remix caching. When this *mismatch* occurs, this line outputs: ```bash ✓ 1 resource moved from Remix server build to client resources. build/client/assets/index-CiOyfy0p.css ```…

### CASE-6741 · RFC: Static Pages / Browser Only Fetching
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍15 💬11 · closed
- **Excerpt**: Remix is pretty opinionated about always server rendering, but that's not really an opinion, it's just a starting point. Remix's data loading, data mutation, and asset loading conventions around nested routes are useful whether you're server rendering, fetching data clientside only, or static rendering. The following APIs will enable you to easily change which mode your route works with: ## Build-Time Pre-Rendering It seems the thing to do in this space is make up new acronyms. So we'll call this BTPR 😋. Just kidding, we'll just call it pre-rendering. Inside of your remix config, you can…

### CASE-6747 · Suspense hydration error on server navigation
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍12 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.14.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Run [link] A gitpod link is provided so you don't have to clone and set it up yourself. You can submit the form and see the expected behavour working. Then change the `<Form>` on routes/index.tsx to use `reloadDocument` and try again to see the bug. ```xml <Form method="post" reloadDocument> <button type="submit"> Start long-running process </button> </Form> ``` ### Expected Behavior If I navigate to a page that uses a deferred loader…

### CASE-6748 · `defer` never resolving when hydration errors are present
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍17 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.11.0 ### Steps to Reproduce This simple page causes the issue to occur on my end: ``` import { defer } from '@user/node' import { Await, useLoaderData } from '@user/react' import { Suspense } from 'react' export const loader = async () => { const longRunningPromise = new Promise((resolve) => { setTimeout( () => resolve({ result: 42 }), 2000 ) }) return defer({ fastData: "I'm already here", longRunningPromise }) } export default function Page() { const data = useLoaderData() return ( <div> Available on first render: {data.fastData} <Suspense…

### CASE-6761 · Possible MetaFunction bug
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 2.0.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce ### The problem: When passing the meta function an array for it to return, and one of the objects in the array has the property: "tagName: 'link'", it causes an hydration error. ### Steps to Reproduce I tried creating a fork with a test to produce the bug: [link] But the test passes... However, when I created (what I believe to be) the exact same setup in stackblitz, the error appears: [link] **How to see the error:** - Open the…

### CASE-6764 · Server crash on multipart file upload containing apostrophe or semicolon
- **Principles**: P-F4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.2 ### Steps to Reproduce 1. Create a file called `something ' something.png` or `something ; something.png` (file extension doesn't really matter 2. Upload the file to a Remix app - I've used the code in the official doc to create a simple `uploadHandler` leveraging `unstable_parseMultipartFormData` ### Expected Behavior The file is successfully uploaded ### Actual Behavior The server crashes with the following error ``` Error: malformed content-disposition header: mismatched quotations in `form-data; name="file-upload"; filename="something '…

### CASE-6772 · Hydration failed because the initial UI does not match what was rendered on the server
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 2.1.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce 1. Open my website. 2. The error pops in console. 3. SEO is dead. 4. Search bots see zero text content. I understand this is not an issue with Remix, but I am using Remix and I have no clue on how to deal with this. What is not the same between server and client? How to troubleshoot it? I'm stuck. I have no browser extensions. Removed them all for the test. I have no locale specifics like dates or other. The Google Tag and Meta Pixel…

### CASE-6778 · Rendering hours from datetime breaks styled components
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.3 ### Steps to Reproduce - Install styled components - Build something highly visible in styled components just so it's easier to see it break - Render hours, eg: ``` const now = new Date(); const hr = now.getHours(); ... return (<p>{hr}</p>) ``` - Deploy to something like Vercel or set local dev environment to UTC time before starting up your Remix app ### Expected Behavior Styled components doesn't break. ### Actual Behavior Styled components breaks with error: "Remix Hydration failed: UI on server and client do not match". @user and I suspect…

### CASE-6787 · ErrorBoundary broken after 2.4.0 upgrade
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Reproduction I have a /404 route that catches any invalid routes from a user and it should trigger the `errorBoundary`. Since upgrading to remix 2.4.0 and greater, the error boundaries appear to have a hydration issue or atleast lack their styling. This happens whenever a loader is responsible for triggering a error boundary. Client side errors that trigger the error boundary do not have this problem. **route general setup:** ``` export const loader: LoaderFunction = ({ request }) => { throw new Response('Page Not Found', { status: 404, statusText: `error`, }); }; export const…

### CASE-6797 · [Bug]: "Warning: Did not expect server HTML to contain a <script> in <html>."
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍6 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. v17.3.0 ### Steps to Reproduce 1. clone [email]:leveluptuts/remix-for-everyone.git 1. open 8HittingAnApi 1. npm i 1. npm run dev See console in browser ### Expected…

### CASE-6800 · [Bug]: Expected server HTML to contain a matching <script> in <body>.
- **Principles**: P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [X] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.0.6 ### What version of Node are you using? Minimum supported version is 14. 14.17 ### Steps to Reproduce 1. Start a new remix project 2. Select architect deployment target 3. Run npm run dev & arc sandbox 4. Sometimes the following error…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6704 · Identifier 'React' has already been declared with multiple external libraries
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍8 💬43 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.1 ### Steps to Reproduce More Details: React Version: 18 Yarn - Install remix for cloudflare pages setup - Add libraries like (react-spring, framer-motion, react-hook/mouse-postion) - Use them (simple import is enough) ### Expected Behavior Application/Website loads correctly when running `wrangler pages dev ./public` and `remix watch` ### Actual Behavior Website loads, shows for a few ms, then breaks. Console sends multiple errors: ``` Uncaught SyntaxError: Identifier 'React' has already been declared ``` ``` Uncaught Error: Cannot initialize…

### CASE-6705 · Add `useScrollRestoration`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍9 💬37 · closed
- **Excerpt**: Browsers have built-in scroll restoration for both document transitions and history push/pop events. However, for history events the behavior is *synchronous*: as soon as the event fires, the browser tries to restore the scroll position. This means your data on both pop *and push* events needs to be synchronous as well. This is, of course, not realistic. These are all typical bugs around scroll position with client routed SPAs 1. The scroll position stays at the bottom of a new page after a link is clicked 2. The scroll position changes to the top of the old page before the data loads for the…

### CASE-6760 · Pre-transform error: Server-only module referenced by client
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, react, vite
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.18.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 9.4.2 - /usr/local/bin/npm pnpm: 8.10.5 - /usr/local/bin/pnpm npmPackages: @user/css-bundle: * => 2.4.1 @user/dev: * => 2.4.1 @user/node: * => 2.4.1 @user/react: * => 2.4.1 @user/serve: * => 2.4.1 vite: ^5.0.10 => 5.0.10 ``` ### Used Package Manager npm ### Expected Behavior There should be no error when running with `npm run…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6706 · [Bug]: TypeError: Cannot read properties of undefined (reading 'root')
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍18 💬34 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `remix` (Remix core) ### What version of Remix are you using? "remix": "^1.1.3", ### What version of Node are you using? Minimum supported version is 14. v16.4.2 ### Steps to Reproduce I was just trying to follow the first tutorial, and right after the part when you create the posts .md files everything was working ok. But after you add the code mentioned in the tutorial: ``` import path from 'path'; import fs from 'fs/promises'; import parseFrontMatter from 'front-matter'; import invariant from 'tiny-invariant'; export type Post = { slug: string;…

### CASE-6711 · Environment variables on Cloudflare Pages
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍3 💬24 · closed
- **Excerpt**: ### What version of Remix are you using? 1.18.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce I try accessing env vars following instructions from the [docs]([link]): ```typescript export const loader = async ({ context }: LoaderArgs) => { console.log(context.SOME_SECRET); }; ``` This didn't work, and debugging led me to realise that I could find env vars under `context.env.SOME_SECRET` instead. I considered just submitting a PR to the docs page, but I'm not sure if there's other changes required and thought it'd be better to…

### CASE-6714 · Uncaught ReferenceError: process is not defined | Using env variables with Vite
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬22 · closed
- **Excerpt**: ### Reproduction I checked the console and the only error I have is this: ``` Uncaught ReferenceError: process is not defined at node_modules/util/util.js (@user.js?v=2071f225:764:5) at __require (chunk-WXXH56N5.js?v=2071f225:12:50) at node_modules/stream-slice/index.js (@user.js?v=2071f225:5672:16) at __require (chunk-WXXH56N5.js?v=2071f225:12:50) at node_modules/@user/node/dist/upload/fileUploadHandler.js (@user.js?v=2071f225:5869:23) at __require (chunk-WXXH56N5.js?v=2071f225:12:50) at node_modules/@user/node/dist/index.js (@user.js?v=2071f225:6057:29) at __require…

### CASE-6719 · Error: Expected a Response to be returned from queryRoute
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬19 · closed
- **Excerpt**: ### What version of Remix are you using? 1.8.0 ### Steps to Reproduce I'm downloading an image from S3 with a resource route and I get Error: Expected a Response to be returned from queryRoute. This doesn't happen in 1.7.6. ### Expected Behavior Get image ### Actual Behavior ``` GET /assets/images/[AWSIMAGEKEY]?w=768&format=webp 500 - - 563.637 ms The following error is a bug in Remix; please open an issue! [link] framework]/issues/new Error: Expected a Response to be returned from queryRoute at Object.invariant [as default]…

### CASE-6730 · useLoaderData<typeof loader>() returns incorrect type
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.5 ### Steps to Reproduce In the following code, the events variable has the wrong type: ```tsx import { json } from "@user/node" import { useLoaderData } from "@user/react" import type { Event } from "@user/client" import { getEvents } from "~/models/events.server" export const loader = async () => json({ events: await getEvents() }) const Events = () => { const { events } = useLoaderData<typeof loader>() return ( <> <h1>Events</h1> {events.map(event => <Event key={event.id} event={event} />)} </> ) } const Event = ({ event }: { event: Event }) =>…

### CASE-6731 · [Bug]: Cannot add hash to redirect url
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ### Which Remix packages are impacted? - `remix` (Remix core) ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 16.13.0 ### Steps to Reproduce Add a hash to your loader function or action function redirect. It never reaches the url bar. ```typescript export const loader = () => { return redirect('/#hash'); } ``` ### Expected Behavior The hash that is added to the redirect url should take effect in the browser and be accessible via the `useLocation` hook. ### Actual Behavior The hash never makes it to the browser and cannot…

### CASE-6734 · [Bug]: `process` is not defined when build with cloudflare pages
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [X] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? "@user/cloudflare-pages": "^1.1.1" ### What version of Node are you using? Minimum supported version is 14. 17.2 ### Steps to Reproduce [link] ```ts /** * Get the value from an environment variable and throw a * MissingEnvironmentError…

### CASE-6735 · [Bug]: Error "process is not defined" when accessing environment variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: ### What version of Remix are you using? 1,1,1 ### What version of Node are you using? Minimum supported version is 14. 14.16.1 ### Steps to Reproduce 1. Add environment variables to .bash_profile file: (i.e. `export BASE_URL="[link] 2. Open project and create a utility / helper file, and add a method like this: In helpers.js: ``` // Note that this method is not a function component, but rather, a simple file containing helper functions export const getBaseUrl = () => { return process.env.BASE_URL } ``` RESULT: I get the following error: "process is not defined". However, `process` is defined…

### CASE-6737 · Vite: `process.env` variables are not working inside loader
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: ### What version of Remix are you using? 2.2.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Define custom environment variable on .env file: ```text TEST="Custom value" REMIX_TEST="Custom value" VITE_TEST="Custom value" ``` On root.tsx add loader ```javascript export const loader: LoaderFunction = async (args) => { console.log(process.env.TEST) // outputs undefined console.log(process.env.REMIX_TEST) // outputs undefined console.log(import.meta.env.VITE_TEST) // outputs Custom value return { test: process.env.TEST, // outputs…

### CASE-6738 · Dynamic route not working with optional segment
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### What version of Remix are you using? 1.15.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce [link] ### Expected Behavior ($lang)/$pid.tsx should match with and without the optional $lang parameter ### Actual Behavior The $pid.tsx route will only be accessible using /something/test /test for example will not be matched

### CASE-6740 · [Bug]: Environment Variable Configuration on the Official Guides Not Working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍19 💬11 · closed
- **Excerpt**: ### What version of Remix are you using? 1.0.6 ### What version of Node are you using? Minimum supported version is 14. 14.17.6 ### Steps to Reproduce 1. install dotenv package using npm. 2. create .env file and add variable. 3. add the following script to the package.json => "dev": "node -r dotenv/config node_modules/.bin/remix dev", 4. run "npm run dev" ### Expected Behavior The environment variables should be loaded without any errors thrown in the console. ### Actual Behavior After I run the script, I get the following error message in the console. --- basedir=$(dirname "$(echo "$0" | sed…

### CASE-6749 · Live reload doesn't work with a custom Express setup
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍5 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.5.1 ### Steps to Reproduce Create a new Remix app and configure a custom Express server as described in [this example]([link] framework]/tree/main/examples/socket.io). Run the development server and change some code. See the error in the browser console about not being able to connect to port 8002 and see no live reloading happen. Terminate the development server and restart it, this time with an explicitly set environment variable, `REMIX_DEV_SERVER_WS_PORT=8002`. See no errors in the console and see live reloading happen upon code changes. ###…

### CASE-6771 · Loader error on data request proxying raw fetch response
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Reproduction [link] ```shell npm ci npm run dev ``` 1. Point your browser to [link] 2. Click on the `Movies` tab. App navigates to [link] However it crashes with error: `TypeError: immutable`. 3. Refresh the browser without changing the URL. Page refreshes correctly showing a list of movies. This indicates that the loader is reading the `API_URL` environment variable correctly for full page render, however when navigating from page to page, it can't read the environment variable. This problem does not exist in production mode. See prod deployment at [link] ### System Info ```shell System:…

### CASE-6777 · Incorrect types for loaders that return optional properties
- **Principles**: P-E1, P-E2, P-E4 · **Env**: typescript
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? v1.6.5 ### Steps to Reproduce Simple reproduction in the [Typescript playground]([link]) 1. return an object from a loader with keys that may be optional/undefined 2. attempt to infer the type of the object using `useLoaderData<typeof loader>` 3. typescript can be made to think that a variable containing `undefined` is of type `string` rather than `string | undefined` ### Expected Behavior optional properties should be considered potentially undefined when returned from `useLoaderData` - even though `JSON.parse` will never include an `undefined` value,…

### CASE-6783 · Bug: `Form` and `useSubmit` doesn't respect HTML form grouping syntax `key[]`
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: Just raising this as a bug from the discussion last week with @user [(Discord link)]([link]) TLDR: FormData is converted to SearchParams: ``` let body = new URLSearchParams(); for (let [key, value] of formData) { invariant( typeof value === "string", "File inputs are not supported right now" ); body.set(key, value); } ``` This breaks the html standard process of grouping fields with `[]` keys: ``` <Form method="post"> <input name="keys[]" type="input" defaultValue="1"/> <input name="keys[]" type="input" defaultValue="2"/> <input name="keys[]" type="input" defaultValue="3"/> <button…

### CASE-6785 · Environment Variables Not Working After Project Build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Reproduction Description: I am facing an issue where environment variables defined in the .env file at the project root are not working after building the project. Steps to Reproduce: **Define environment variables in a .env file at the project root:** ``` PORT=3000 MONGODB_URI=xyz ``` **Configure dotenv in vite.config.js as follows:** ``` import dotenv from "dotenv"; import path from "path"; // dotenv.config({ path: "./.env" }); dotenv.config({ path: path.join(process.cwd(), "/.env") }); declare module "@user/node" { interface Future { v3_singleFetch: true; } } ``` Build the project. ###…

### CASE-6789 · Infinite loop when using fetcher.load in latest Remix releases
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? 1.14.0 (also on 1.15) ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce **1.)** Create a resource-route (or any loader) that returns anything. In this case I'm returning `json({hello: 'world'})` **2.)** In any route, create a state variable to track to see if it has been invoked. For example ```js let fetcher = useFetcher(); const [shouldCallResourceRoute, setShouldCallResourceRoute] = useState(true); useEffect(() => { if (shouldCallResourceRoute) { setShouldCallResourceRoute(false); // this…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6708 · [Single Fetch] Root did not complete. This is a bug in React.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, vite
- **Signals**: 👍21 💬27 · closed
- **Excerpt**: ### Reproduction Sadly I don't have a reproduction because i received the errors in Sentry and it mostly happened in Instagram browser and sometimes chrome. However i enabled single fetch by updating `vite.config.ts` and then adding `nonce` to `RemixServer`. That's all. Then i started seeing errors in sentry saying `Root did not complete. This is a bug in React.`. It happened on multiple pages like `login` and some others. This is a production environment with thousands of visitors every day, it's hard to pinpoint why it happened. My react version is `18.3.1` ### System Info ```shell System:…

### CASE-6712 · [React 18] hydrateRoot(document, <RemixBrowser />) causes app crash with any scripts that modified DOM before hydration
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, react
- **Signals**: 👍18 💬24 · closed
- **Excerpt**: ### What version of Remix are you using? the main branch of remix (hash a759affafe30c8df27e36f6253a1d9a574ebf18d) ### Steps to Reproduce Install the Dark Reader Chrome Extension: [link] 1. Checkout the remix repo (this repo.) 2. Run `yarn playground:new` 3. After finishing, run `yarn dev` in the newly created playground folder, `yarn watch` in the root of remix ### Expected Behavior should see Remix Playground, Sign up / Log In buttons with Dark Reader able to run ### Actual Behavior The playground loads for a sec, then when React does hydrateRoot, it fails to load if the Dark Reader Chrome…

### CASE-6723 · All client side javascript fails to run on non ES-2020 compliant browsers (PRODUCTION only)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 12, typescript
- **Signals**: 👍4 💬17 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.3 ### Steps to Reproduce npx create-remix@user (with typescript, remix app server) remix build (Must be a production build. Development doesn't have the problem) start Go to localhost:3000 using a non ES-2020 compliant browser (I'm using Safari 12.5) Check the js console and you will see errors ### Expected Behavior Client side JavaScript should run without syntax errors on browsers that don't support ES-2020 ### Actual Behavior **ALL** Client side JavaScript fails to run. Safari 12.5 reports Syntax error: Unexpected token '?' It appears that the…

### CASE-6736 · Dev server not working properly on Safari browser
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos
- **Signals**: 👍21 💬11 · closed
- **Excerpt**: ### Reproduction - Initialize any remix template - Start dev server and open it inside Safari - Update the `routes/_index.tsx` (add any html element) - Refresh the dev site on Safari ### System Info ```shell System: OS: macOS 14.5 CPU: (10) arm64 Apple M2 Pro Memory: 95.53 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.10.0 - /opt/homebrew/opt/nvm/versions/node/v20.10.0/bin/node Yarn: 1.22.22 - /opt/homebrew/bin/yarn npm: 10.2.3 - /opt/homebrew/opt/nvm/versions/node/v20.10.0/bin/npm bun: 1.1.13 - /opt/homebrew/bin/bun Watchman: 2024.06.24.00 - /opt/homebrew/bin/watchman ``` ### Used…

### CASE-6750 · Single Fetch Issues
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Note: I'm still working on the migration/testing, so I kept this title vague for now in case I come across other problems. ### Reproduction [link] ### System Info ```shell Vite: 5.2.10 Remix: 2.9.1 System: OS: macOS 14.4.1 CPU: (10) arm64 Apple M2 Pro Memory: 80.28 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.12.2 - /opt/n/bin/node npm: 10.5.0 - /opt/n/bin/npm pnpm: 8.15.7 - /opt/homebrew/bin/pnpm Watchman: 2024.04.08.00 - /opt/homebrew/bin/watchman Browsers: Chrome: 124.0.6367.78 Safari: 17.4.1 ``` ### Used Package Manager pnpm ### Expected Behavior Happy to split this out into…

### CASE-6759 · Material UI breaks Remix SPA build (but works fine in regular Remix apps)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Reproduction Clone [link] and follow steps to reproduce described in the README.md file. ### System Info ```shell System: OS: macOS 13.6.6 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 4.37 GB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 20.11.1 - ~/.nvm/versions/node/v20.11.1/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v18.16.0/bin/yarn npm: 10.2.4 - ~/.nvm/versions/node/v20.11.1/bin/npm pnpm: 8.14.0 - /usr/local/bin/pnpm Browsers: Brave Browser: 124.1.65.126 Chrome: 126.0.6478.61 Safari: 16.6 npmPackages: @user/dev: ^2.9.2 => 2.9.2 @user/node: ^2.9.2 => 2.9.2…

### CASE-6779 · Console error: WebSocket connection to 'ws://localhost:53317/socket' failed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.3.1 ### Steps to Reproduce - Generate a new remix app and npm run dev - Add these scripts and relevant node packages (concurrently, sass) `"dev": "concurrently \"npm run dev:generate-css\" \"remix dev\"", "dev:generate-css": "sass --watch ./app/scss:app/css", ` - Create a folder at /app/scss - Start the dev server, go to localhost, and open the console in Chrome's inspector - Whilst the app is running, create a .scss file under app/scss - Check the console in Chrome's inspector to see the error and broken livereolad ### Expected Behavior No errors…

### CASE-6784 · 404 error when navigating with <Link> and v3_lazyRouteDiscovery on Vercel when using different runtimes per route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Reproduction 1. Deploy the following git repo to Vercel: [link] 2. Observe 404 error when clicking on "Navigate to About page and observe 404 error!" from index page. Notes: - Problem exists when switching from edge to node and vice versa - v3_lazyRouteDiscovery must be enabled (bug vanishes when disabled) - No problem when hitting the route directly. ### System Info ```shell remix 2.15.3, deployed to Vercel, node 22 ``` ### Used Package Manager npm ### Expected Behavior No 404 error when using <Link> ### Actual Behavior 404 error when using <Link> and v3_lazyRouteDiscovery

### CASE-6786 · Version 2.14.0 breaks vite builds
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, edge, chromium, linux, windows, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Reproduction - Update remix to 2.14.0 - Add a script in package.json `"build": "vite build && vite build --ssr"` - run `npm run build` ### System Info ```shell Issue happens on our `Amazon Linux 2023/6.2.2` instance as well as on my local window 10 machine: System: OS: Windows 10 10.0.19045 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 7.60 GB / 23.88 GB Binaries: Node: 20.12.2 - C:\Program Files\nodejs\node.EXE npm: 10.5.0 - C:\Program Files\nodejs\npm.CMD Browsers: Chrome: 130.0.6723.117 Edge: Chromium (127.0.2651.105) Internet Explorer: 11.0.19041.4355 npmPackages:…

### CASE-6791 · Firefox - prop mismatch between server and client
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-F4 · **Env**: firefox, chrome
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.6 ### Steps to Reproduce [link] - open codepen in new window - when reloading the codepen (in a new window) in Firefox with a primed cache, you'll see the error: ![image]([link]) - when bypassing the cache (shift+reload), there are no errors, and the page renders as expected. - interestingly, this seems to only happen in Firefox, chrome acts as expected regardless of the cache. ### Expected Behavior props should match on client and server ### Actual Behavior `Warning: Prop "disabled" did not match. Server: "null" Client: "true"`

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-6715 · [ERROR] Could not resolve "fs/promises"
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍22 💬22 · closed
- **Excerpt**: ### What version of Remix are you using? Remix - Cloudflare workers @ latest ### Steps to Reproduce Hello, i'm trying to learn react and remix altogheter, I came across an error, trying to pass a multipart form from frontend to backend via form and action. As i try to import unstable_createMemoryUploadHandler it throws an error related to FS/Promises ``` node_modules/@user/node/upload/fileUploadHandler.js:17:23: 17 │ var promises = require('fs/promises'); The package "fs/promises" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use "platform:…

### CASE-6717 · [Bug]: Larger files are not readable via UploadHandler
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍21 💬20 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [X] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.1.0 ### Steps to Reproduce Upload a file using the `Form` component. Add a custom `UploadHandler`: ```ts export const action: ActionFunction = async ({ request…

### CASE-6720 · [Bug]: PrismaClient execution fails on @user/cloudflare-workers
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍13 💬19 · closed
- **Excerpt**: ### What version of Remix are you using? 1.0.4 ### Steps to Reproduce 1. Use create-remix to create a project. Select Cloudflare Workers at that time. 2. Install and build prisma. 3. Write `new PrismaClient()` in the `loader` or in [app/utils/db.server.ts]([link]). 4. Start up miniflare with `yarn start`. ### Expected Behavior `new PrismaClient()` should run without problems. ### Actual Behavior ``` $ yarn start yarn run v1.22.17 $ miniflare --build-command "npm run dev:worker" --watch > dev:worker > esbuild --define:process.env.NODE_ENV='"development"' --bundle --sourcemap --outdir=dist…

### CASE-6724 · Cannot redirect to different app on same domain from loader function
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ### What version of Remix are you using? 1.5.1 ### Steps to Reproduce I have a Remix Form that submits a `GET` request to a UI-route's loader function, which can either return a JSON object or redirect the user to different places depending on the value of a query parameter. For instance, these are the 2 only properties that I set on my Remix Form: ```tsx <Form method="get" action="/product-A">...</Form> ``` Let's say the domain of my application is `mywebsite.com`, and when the form is submitted the query looks like this: `mywebsite.com/product-A?area=11103`. The loader function has 3…

### CASE-6732 · [Bug]: Compiling Cloudflare Worker results in error from Wrangler
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍3 💬13 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.13.1 ### Steps to Reproduce Create a new Remix `npx create-remix@user` and select "Cloudflare Pages" / "TypeScript" / "Run npm". Run `npm run dev` to start the dev server. ### Expected Behavior The dev server starts without any errors. ### Actual Behavior An error occurs: ``` ... > remix watch Watching Remix app in development mode... Compiling worker to "/var/folders/5w/rj0_j25j70g2_qcfpnr8w6m40000gn/T/functionsWorker.js"... ✘ [ERROR] Expected ";" but found ":"…

### CASE-6742 · Fetcher data missing when JavaScript is not enabled
- **Principles**: P-G4, P-E3 · **Env**: linux, react, vite
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### Reproduction [link] [link] ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (5) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.18.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.2.3 - /usr/local/bin/npm pnpm: 8.15.3 - /usr/local/bin/pnpm npmPackages: @user/dev: * => 2.8.0 @user/node: * => 2.8.0 @user/react: * => 2.8.0 @user/serve: * => 2.8.0 vite: ^5.1.0 => 5.1.5 ``` ### Used Package Manager npm ### Expected Behavior If a fetcher.Form is submitted without JavaScript, the form data should be…

### CASE-6744 · Fetcher stuck in "loading" state when using `Await` with `Promise.all`
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍8 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.19.3 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Here's a reproduction on CodeSandbox: <[link]> - Use `<Await>` with `Promise.all` to await multiple promises from deferred loader(s). - Submit a form with `useFetcher`. ```tsx import { defer } from "@user/node"; import { Await, useFetcher, useLoaderData } from "@user/react"; import { Suspense, useMemo } from "react"; function wait(timeMs: number) { return new Promise<void>((resolve) => setTimeout(resolve, timeMs)); } export async…

### CASE-6746 · Express/Typescript template fails to start
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ### What version of Remix are you using? 1.15.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce `npx create-remix@user`, select express adapter, select Typescript, run `npm run dev` ### Expected Behavior The dev server to startup ### Actual Behavior ``` [nodemon] starting `cross-env NODE_ENV=production node ./server.js --require dotenv/config ./server.js` node:internal/modules/cjs/loader:1078 throw err; ^ Error: Cannot find module '/.../my-remix-app/server.js' at Module._resolveFilename (node:internal/modules/cjs/loader:1075:15)…

### CASE-6753 · npm run dev not working when generating the project using the indie stack
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: ### What version of Remix are you using? latest ### Steps to Reproduce Following the docs located [here]([link]) 1. Copy full command: `npx create-remix --template remix-run/indie-stack blog-tutorial` 2. Run it in either Powershell or Git Bash - Select Typescript at first prompt - Select yes when prompted for running `npm isntall` or not Wait for it to successfully finish installing the needed requirements. 3. cd into `blog-tutorial/` directory 4. run `npm run dev` ### Expected Behavior Local development server spawns at localhost:3000 ### Actual Behavior Following error is received: ```…

### CASE-6755 · action formData not working as expected with modals.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.1 ### Steps to Reproduce Build a multi-form route but with each form rendered in a modal pop-up. Reproduction: [link] The work around is to pass an hidden `input` that holds the value and name of the `button`. Workaround: [link] ### Expected Behavior When building a form within a modal. I would expect formData to have the same shape as it would without the modal. ```sh formData: { email: '[email]', _action: 'send' } ``` ### Actual Behavior The formData loses the value for the button. ```sh formData: { email: '[email]' } ```

### CASE-6756 · [Bug]: Error: Route "routes/__login" does not have an action, but you are trying to submit to it.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 16 ### Steps to Reproduce I have this hierarchy ``` app/ ├── routes/ │ ├── __login/ │ │ ├── index.jsx │ │ ├── login-redirect.jsx │ │ ├── magic.jsx │ ├── __login.jsx └── root.tsx ``` in the `index.jsx` I have a simple `Form` with only email input, when it's filled up I send a magic link from inside my `action` function for now it's ```jsx import { Form } from "remix"; export const action = async ({ request })…

### CASE-6758 · [Bug]: No hot reload when serving with netlify
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬9 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [ ] `remix` (Remix core) - [X] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [X] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.0.6 ### Steps to Reproduce Init a project and select Netlify as the deployment ### Expected Behavior Start the Netlify dev server and remix and have the page reload on file saves ### Actual Behavior Browser has to be manually refreshed to…

### CASE-6762 · Yet another Yarn 3 PNP issue
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 1.17.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce I started with the supposedly simple requirement, to share some TS code between two Remix apps. While I was successful at doing this quite easily, my problems started when I wanted to share a dependency (`remix-validated-form`) between the app and the library. I have created a minimal repository showing the different behavior between yarn 1, yarn 3 with node-modules and yarn 3 pnp, here: [link] `main` branch is yarn 1 and there are…

### CASE-6765 · Occasional error when reading session data from file system
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.5 ### Steps to Reproduce 1. Use file session storage (`createFileSessionStorage`) 2. Create a large amount of session data (>1MB), saved and read each page load. 3. Visit lots of pages quickly. ### Expected Behavior No errors. ### Actual Behavior Occasionally, the page fails to load: ``` SyntaxError: Unexpected end of JSON input at JSON.parse (<anonymous>) at readData (/srv/app/node_modules/@user/node/dist/sessions/fileStorage.js:91:28) at getSession (/srv/app/node_modules/@user/server-runtime/dist/sessions.js:113:25) at loader10…

### CASE-6766 · [Bug]: Remix tutorial: link not working with version 1.1.3
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 14.16.1 ### Steps to Reproduce 1. `npx create-remix@user` (this should get you the version 1.1.3) 2. select all default options to `Remix App Server`, `TypeScript`, `run npm install` 3. run `npm run postinstall` 4. following the tutorial @ [link] add a link to Posts in `root.tsx` ``` <Link to="/posts">Posts</Link> ``` 5. in the **routes** folder, create a **posts** folder and in it, an **index.tsx** file. The content of the file should be a simple function: ``` export…

### CASE-6768 · [Bug]: Cannot use name="attributes" for select items.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 17.4.0 ### Steps to Reproduce Include the following code in a page ``` <Form> <select name="attributes"> <option key="bar" value="bar">Bar</option> </select> </Form> ``` Execute the page with the `<Scripts />` tag enabled. ### Expected Behavior Display select box with one argument. ### Actual Behavior The browser gets stuck in an error logging loop. The start of my error log is here: [error.txt]([link] framework]/files/7897771/error.txt)

### CASE-6769 · [Bug]: Live reload does not work with Netlify starter
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍5 💬8 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [X] `@user/netlify` - [ ] `@user/node` - [X] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.0.4 ### Steps to Reproduce Create the app with `npx create-remix@user` and select Netlify. ### Expected Behavior Content should be changed ### Actual Behavior The content has not changed

### CASE-6770 · data utility does not pass types the same as json
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Reproduction Follow [react-router docs on Form Validation]([link]) Notice that the types of `useFetcher().data` (or `useActionData` if you use that instead) are `any` instead of including `errors` as was done with `json` This issue is also described in [this discussion]([link]) When attempting to do a reproduction in [[integration/bug-report-test.ts]([link] framework]/blob/dev/integration/bug-report-test.ts)]([link] framework]/blob/dev/integration/bug-report-test.ts) I noticed that is still using `json` instead of `data` even though `json` is marked as deprecated ### System Info ```shell…

### CASE-6773 · HMR not working with CloudFlare Workers template
- **Principles**: P-G4, P-E3 · **Env**: typescript
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.19.3 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce 1. Run `npx create-remix@user` 2. Define a location 3. Select `Just basics` 4. Where do you want to deploy? Choose `Cloudflare Workers` 5. TypeScript or JavaScript?: Choose `TypeScript` 6. Do you want me to run `npm install`?: Choose `yes` 7. After installation run the app with `npm run dev` 8. Introduce a change and navigate to: `[link] for checking the changes ### Expected Behavior After introducing a change in the codebase, HMR…

### CASE-6776 · <Form> submitter is serialized out of tree order
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.2 ### Steps to Reproduce 1. Make a `<Form>` like so: ```jsx <Form> <button type="submit" name="foo" value="override">Override</button> <input type="hidden" name="foo" value="default" /> </Form> ``` 2. Click the "Override" button ### Expected Behavior The form fields should be serialized in tree order, i.e. `foo=override&foo=default` (as is the case with a vanilla `<form>`). See [Constructing the form data set]([link]) in the HTML spec. Submitted fields should be sent in the order they appear in the DOM, including the `submitter` (i.e. the submit…

### CASE-6780 · Deployment to Vercel is broken
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.4.3 ### Steps to Reproduce - Create a new Remix App with `npx create-remix@user` - Select "Just the basics" and "Vercel" - Push to a Github repo, deploy to Vercel with "Remix" preset ### Expected Behavior - Project builds and deploys without issues ### Actual Behavior - Project apparently builds without issues - Visiting the deploy will throw the default Vercel 404: ![404]([link]) - Trying to view the deploy Function Logs will show "**No Serverless Functions**": ![sf]([link]) - The deploy source output has no "**api**" folder: ![outerr]([link]) This…

### CASE-6781 · useFetcher() submit doesn't work with an object of type FormData
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.3 ### Steps to Reproduce 1. Create a Form component 2. `onSubmit` get the form element and `const formData = new FormData(form);` 3. Then add anything `formData.set('hello', 'world');` 4. Then `fetcher.submit(formData)` And you'll notice we never arrive in the action handler. If I pass the form element directly to `submit`, then it works as expected. ### Expected Behavior Since the submit function's signature accepts a FormData object, I expect it to call my action handler. ### Actual Behavior Does nothing. No error. No logs. All I see is that the…

### CASE-6792 · Remix's <Form> doesn't respect <button> formMethod attribute
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? 1.7.2 ### Steps to Reproduce Reproduction: [link] 1. Click Get for Remix Form, see console log -> GET 2. Click Get for Regular form, see console log -> GET 3. Click Post for Regular form, see console log -> POST 4. Click Post for Remix Form, see console log -> GET. **This is wrong** ### Expected Behavior Remix's `<Form>` should respect the child `<button>`'s `formMethod` attribute, allowing multiple buttons with different formMethods inside one form ### Actual Behavior Remix Form ignores formMethod and treats all buttons as GET

### CASE-6794 · [Bug]: Posting to / with `useFetcher().Form` tries to post to index route, instead of the root route.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. v17.1.0 ### Steps to Reproduce Repository: [link] `useFetcher().Form` with `action="/"` or no action when rendered in root route, tries to post to `routes/index`…

### CASE-6795 · [Bug]: Remix `parseMultiPartFormData` argument bug
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [X] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.3 ### What version of Node are you using? Minimum supported version is 14. 15 ### Steps to Reproduce - Import `unstable_parseMultiPartFormData` from "@user/node/formData" - Submit a form that has `input type="file"` - Create an…

### CASE-6796 · [Bug]: useSumit causes rerender multiple times.
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [x] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 16.13.0 ### Steps to Reproduce Please find the [sandbox link here]([link]) Whenever I use the `useSubmit` or `useFetcher` hook and submit a form the entire…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-6718 · [Bug]: font files are not moved to `_assets` directory on build
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍20 💬20 · closed
- **Excerpt**: ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14.18.1 ### Steps to Reproduce [Example on stackblitz.com]([link]) 1. Run `yarn create remix` to create a new remix project. 2. Install a fontsource package in this project, e.g: `yarn add @user/aguafina-script` 3. Create the main style sheet: [(source)]([link]) ```css /* app/styles/main.css */ body { font-family: "Aguafina Script"; } ``` 4. Add the font style sheet and the main style sheet to `root.tsx`: [(source)]([link]) ```tsx // ... import fontStyleUrl from…

### CASE-6788 · Assets referenced within linked style sheets vanish when dev rebuilds
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: ### What version of Remix are you using? 1.18.1 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Minimal reproducing example: [link] 1. Create a Remix project. 2. Add a [regular style sheet]([link]) that itself refers to an asset such as an image or a font. For example: ```css .airplane { width: 400px; height: 400px; background-image: url('./airplane.jpg'); } ``` 3. Import the style sheet in the root module: ```tsx import styles from './style.css'; export const links: LinksFunction = () => [ { rel: "stylesheet", href: styles }, ];…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-6721 · Vite plugin: Outdated Optimize Dep errors
- **Principles**: P-A5, P-G1, P-G2, P-G3 · **Env**: safari, chrome, macos, vite
- **Signals**: 👍16 💬18 · closed
- **Excerpt**: ### Reproduction I don't think a StackBlitz is appropriate in this case, here's a repo — [link] make sure to switch to the `remix-vite` branch. It's built on top of your latest Vite template, with added login & logout logic via cookie session storage because I was initially trying to reproduce a logout bug that I was experiencing in Safari (but not in Chrome!) in my app after upgrading to the Vite plugin. I wasn't able to reproduce that particular one, but I decided to leave in the complexity because I think it's useful for a bug I'm reporting. ### System Info ```shell System: OS: macOS…

### CASE-6722 · [Bug]: File Upload API is incomplete/not working
- **Principles**: P-A5 · **Env**: react
- **Signals**: 👍9 💬18 · closed
- **Excerpt**: ### Which Remix packages are impacted? - [X] `remix` (Remix core) - [ ] `create-remix` - [ ] `@user/architect` - [ ] `@user/cloudflare-workers` - [ ] `@user/dev` - [ ] `@user/express` - [ ] `@user/netlify` - [ ] `@user/node` - [ ] `@user/react` - [ ] `@user/serve` - [ ] `@user/server-runtime` - [ ] `@user/vercel` ### What version of Remix are you using? 1.1.1 ### What version of Node are you using? Minimum supported version is 14. 14 ### Steps to Reproduce The `parseMultipartFormData`, `createMemoryUploadHandler`, and `createFileUploadHandler` are all still behind the `unstable_` prefix. If…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6739 · Infinite-scrolling example not working using the scrollbar
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### What version of Remix are you using? 1.6.4 ### Steps to Reproduce Open `examples/infinte-scrolling` and select `page/simple`. ### Expected Behavior When I scroll by grabbing scroll bar to bottom I should see all the elements loaded. ### Actual Behavior Elements displays as `Nothing to see here...` ![Screen Shot 2022-08-01 at 10 13 51]([link]) I think you might want to change: ``` const rowVirtualizer = useVirtual({ size: data.totalItems, parentRef, estimateSize: useCallback(() => 35, []), initialRect: { width: 0, height: 800 }, }); ``` to ``` const rowVirtualizer = useVirtual({ size:…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6743 · Vite: incorrect sourcemaps off by a couple lines
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite
- **Signals**: 👍6 💬10 · closed
- **Excerpt**: ### Reproduction - `npx create-remix@user --template [meta framework]/templates/unstable-vite` - Add a `console.log` in `app/routes/_index.tsx` in the module scope above the `default` component export - Go to app in browser, open up console, and click on link to `_index.tsx` for the logged message - Taken to incorrect line within the component instead of the `console.log` line Additionally, if `loader` is added above `console.log`, seems to also offset the sourcemap for the `console.log` to the last line of the `loader`. Clicking on a line to add a breakpoints now also sometimes sets the…

### CASE-6751 · Issue with VSCode Breakpoints Not Working in Frontend Development Using Express + Remix
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Reproduction ## Description ### Problem Summary While developing the frontend using Express and Remix, breakpoints set in VSCode during debugging do not halt the code execution. ## Reproduction Steps 1. Run `npx create-remix@user --template [meta framework]/templates/express` to install Express and Remix. 2. Prepare the following launch.json in the .vscode folder: ```json { "version": "0.2.0", "configurations": [ { "type": "node", "request": "launch", "name": "Launch Remix Dev", "runtimeExecutable": "npm", "runtimeArgs": ["run", "dev"], "console": "integratedTerminal",…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6763 · Deffered API (fullstack remix) - AbortController is not defined at new DeferredData
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Remix are you using? - deferred (beta) Can someone else download the stackblitz code (click the cloud icon in the top right to download) and see if this code crashes for you? Stabkblitz URL: [link] ``` "@user/node": "deferred", "@user/react": "deferred", "@user/serve": "deferred", "@user/dev": "deferred", ``` ### Steps to Reproduce 1. **🚧 Download the stackblitz to your local computer** (it doesn't crash on stackblitz) 2. Visit the `/about` route & the page will throw an Application Error ![CleanShot 2022-11-23 at 18 17 18@user]([link]) ``` ReferenceError: AbortController…

### CASE-6775 · Session docs should be clearer on potential race condition pitfalls when committing session in nested routes
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍11 💬7 · closed
- **Excerpt**: ### What version of Remix are you using? 1.14.0 ### Are all your remix dependencies & dev-dependencies using the same version? - [X] Yes ### Steps to Reproduce Take this example scenario. You have this route setup: ``` root - index - api/login ``` In `root`'s `loader`, you consume a flash message from the session and commit it. In `index` you consume an unrelated flash message from the session and commit it. In `api/login`'s `action` you write a flash message saying the user has been logged in. What you end up with now is a race condition where, after logging in, both index and root are…

