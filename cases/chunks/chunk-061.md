# Case Chunk 061 — Round 61

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7001 · StaticQueryHashes not generating
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows
- **Signals**: 👍0 💬18 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: (Continuation from [ref]) Static Query Hashes are not being generated which is causing errors for the build gatsby site. @user gatsby clean hasn't resolved this. ![image]([link]) ``` System: OS: Windows 10 10.0.18362 CPU: (8) x64 Intel(R) Core(TM) i7-3820 CPU @ 3.60GHz Binaries: Node: 12.17.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.4 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 6.14.4 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: 44.18362.449.0 npmPackages: gatsby: ^2.23.12 => 2.24.7 gatsby-image: ^2.4.9 => 2.4.13 gatsby-plugin-manifest: ^2.4.14 => 2.4.19 gatsby-plugin-offline:…

### CASE-7003 · undefined is not an object (evaluating 'r.page')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍4 💬18 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ## Description We run a highly-trafficked Gatsby site in production. Recently, we've begun seeing a _massive_ uptick in these errors reported by our error monitoring tool (Sentry): `undefined is not an object (evaluating 'r.page')`. This happened after we updated Gatsby from `v2.17.7` to `v2.18.17`. You can find a few of the stack traces here: - [link] - [link] - [link] These errors occur exclusively for older versions of Chrome on Windows devices. This would seem to point to a polyfill issue, except for the fact that we cannot reproduce it ourselves and even older Chrome versions still have…

### CASE-7004 · [gatsby-plugin-manifest] Default favicon set doesn't render well (Firefox, retina display)
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, retina
- **Signals**: 👍0 💬18 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When using the default favicon set produced by `gatsby-plugin-manifest`, the icon used by Firefox looks low-res (on my retina Macbook). **Firefox** <img width="157" alt="Screenshot 2019-12-01 at 10 41 38" src="[link]> <img width="314" alt="Screenshot…

### CASE-7005 · :focus not working in safari and firefox....
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, firefox
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: Trying to add some buttons to my site, this time using the `navigate` thing from reach router to create links on the same page, like so: ```jsx <JobButton tabindex="0" onClick={() => {navigate('#office-manager')}} > Office Manager </JobButton> ``` and the links on the same page are working fine. Then I tried to add a `:focus` style in the `styled-component`, like so: ```js const JobButton = styled.button` background: #aaa; border: 1px solid grey; border: none; padding: 0.5rem; margin: 0; :active { background: [ref]; } :focus { background: [ref]; color: white; } ` ``` ...and it's working fine…

### CASE-7009 · Gatsby V4, links for pages don't work on normal browsing but work in incognito mode, devtool and dev/serve mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍2 💬17 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description **UPDATE:** the below issue disappears if I do hard reload on Chrome. But after some time it comes back. So I would like to know what's causing this error to see if I can do anything about it. It started to appear after I upgraded to V4 a…

### CASE-7021 · [Firefox] Unhandled promise rejection TypeError: "this.loadPageDataJson(...).then(...).finally is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, webpack
- **Signals**: 👍4 💬17 · closed · labels: type: bug
- **Excerpt**: ## Description When I run in localhost works ok with all the browsers including Firefox but when it goes to production the Firefox v68.0.1 looks misaligned caused (I guess) for this `.finally` function. ### Steps I tried I tried to use `"gatsby-plugin-compile-es6-packages": "^2.1.0"` to compile es6 features like they are using in [ref] but without luck. Also I tried: ``` exports.modifyWebpackConfig = ({ config, stage }) => { switch (stage) { case "build-javascript": const app = config._config.entry.app; config._config.entry.app = [require.resolve("./polyfills"), app]; break; default: break;…

### CASE-7023 · Blurred image only shown briefly
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, windows
- **Signals**: 👍0 💬17 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I was previously experiencing [ref]. After upgrading to gatsby-remark-images 3.x the situation has improved, but is still not working correctly. The blurred image only appears for a very short amount of time, and then is covered with a blank white rectangle. ### Expected result When I load my page on a slow network connection, I expect the placeholder image to be displayed until the full image has loaded. ### Actual result ![blurUp]([link]) (This GIF is a real-time recording using Firefox's GPRS network throttling preset) ### Environment ``` System: OS: Windows 10 CPU: (16) x64…

### CASE-7030 · Gatsby V3: Error: "performance.mark is not a function" on Safari <= 10.1
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 10
- **Signals**: 👍0 💬16 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Since we migrated to Gatsby V3 from V2 we have seen that a lot of our visitors are getting the following error `performance.mark is not a function` when visiting our site. It seems to be that `performance.mark` was introduced in Safari 10.2 ([link]) ### Reproduction…

### CASE-7036 · Updating `gatsby-plugin-offline` breaks the site
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 81, firefox 76
- **Signals**: 👍2 💬16 · closed · labels: status: needs more info/status: needs reproduction/topic: plugins-PWA
- **Excerpt**: ## Description Yesterday, I updated `gatsby-plugin-offline` from 2.2.6 to 3.2.2. In `gatsby-config.js` the plugin is used with its default options, like so: ``` plugins: [ ... 'gatsby-plugin-offline', ... ], ``` Soon after deploy the website became unavailable after hard-refreshing the page. In Chrome 81 it would say: ``` The site can't be reached The web page at [link]]/ might be temporarily down or it maye have moved permanently to a new web address. ERR_FAILED ``` In Firefox 76 it would say ``` Oops. The site at [link]]/ has experienced a network protocol violation that cannot be repaired.…

### CASE-7050 · Placeholder not completing on Google Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬15 · closed · labels: type: bug/status: needs reproduction/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using Google Chrome, not all images load fully. On any other browser it seems to work fine. This is not always though, it is only on occasion that it doesnt work... ### Reproduction Link [link] - Only seems to trigger on build ###…

### CASE-7065 · Hot Reloading not working on Hello World starter
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍2 💬15 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: ## Description Hot Reloading not working on Hello World starter ### Steps to reproduce Command line: gatsby new hello-world [link] framework]-starter-hello-world#v2 cd hello-world gatsby develop Change content in src/pages/index.js ### Expected result Content change appears in browser ### Actual result Change does not appear, must manually refresh the page to see changes. ### Environment System: OS: Windows 10 CPU: x64 Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz Binaries: npm: 5.6.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: 41.16299.371.0 npmPackages: gatsby: next => 2.0.0-rc.21 error…

### CASE-7072 · Can't scroll using keyboard on Gatsby Docs pages
- **Principles**: P-G1, P-G2, P-G3, P-D4, P-F1, P-F5 · **Env**: chrome, firefox
- **Signals**: 👍5 💬14 · closed · labels: topic: a11y
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Can't scroll Gatsby docs using keyboard (arrow, home/end page up/down) keys while only scrolling with mouse wheel works. This happens in both Chrome & FireFox (latest versions) Refer to `Environment` for version. ### Steps to reproduce 1. Go to either a…

### CASE-7088 · gatsby.dev connection refused by server
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ## Description gatsby.dev links are not visible ### Steps to reproduce open the link [link] in browser ### Expected result redirect to gatsbyjs manual ### Actual result Error: connection refused by server ### Environment ``` gatsby info --clipboard System: OS: macOS High Sierra 10.13.6 CPU: (8) x64 Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 11.9.0 - /usr/local/bin/node npm: 6.8.0 - /usr/local/bin/npm Languages: Python: 2.7.15 - /usr/local/bin/python Browsers: Chrome: 72.0.3626.121 Safari: 12.0.3 npmGlobalPackages: gatsby-cli: 2.4.9 ```

### CASE-7097 · Redudant service worker bug
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: android, react
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: ![image]([link]) When recharge by gatsby website: Configuration: ``` javascript module.exports = { siteMetadata: { title: 'Gatsby Default Starter', }, plugins: [ 'gatsby-plugin-react-helmet', { resolve: `gatsby-plugin-manifest`, options: { name: "DigitalKeys API Documentation", short_name: "DigitalKeys API", start_url: "/", background_color: "#f7f0eb", theme_color: "#a2466c", display: "minimal-ui", icons: [ { "src": "/favicons/android-icon-36x36.png", "sizes": "36x36", "type": "image/png", "density": "0.75" }, { "src": "/favicons/android-icon-48x48.png", "sizes": "48x48", "type": "image/png",…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7002 · "gatsby-source-graphql" failing
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬18 · closed · labels: type: bug
- **Excerpt**: ## Description When trying to use gatsby-source-graphql and GraphCMS I get a "TypeError: fetcher is not a function" and it doesn't generate any nodes. It appears to be in the gatsby-node.js function inside of gatsby-source-graphql. It has something to do with the introspectSchema call. ### Steps to reproduce Clone this github repo: [link] Try and run "gatsby develop" and you should see error. ### Expected result It should generate nodes and I should see them when I go to localhost:8000/__graphql ### Actual result Seeing error in image below: <img width="662" alt="Screen Shot 2020-04-10 at 12…

### CASE-7006 · ERROR [ref] GRAPHQL There was an error in your GraphQL query
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: stale?/status: needs more info/topic: GraphQL
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description ERROR [ref] GRAPHQL There was an error in your GraphQL query: - Unknown field 'file' on type 'Query'. File: src/components/image.js ### Steps to reproduce After the last error [ref]，I uploaded an image to my contentful Media. The previous bug was fixed,…

### CASE-7007 · 'Using drupal' example not working
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: ## Description Trying to run the "Using drupal" example here - [link] framework]/tree/master/examples/using-drupal ### Environment Gatsby version: 1.1.44 Node.js version: v9.2.0 Operating System: Sierra ### Actual result <img width="1203" alt="screen shot 2018-02-23 at 14 28 31" src="[link]> ![screen shot 2018-02-23 at 14 28 56]([link])

### CASE-7008 · Image processing with wordpress-source-plugin attempts to load a non existent image from a production origin the 404 breaks the build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬17 · closed · labels: type: bug/stale?/topic: source-wordpress
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description We upgraded to Gatsby 4 using Wordpress as a source. The `wordpress-source-plugin` would not allow the site to build, failing on a 404 when trying to reach an image at our production origin. ```bash ERROR UNHANDLED REJECTION Unable to…

### CASE-7012 · [gatsby-plugin-image]: loading=eager causes blurred image in production mode, sharpens after page interaction
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬18 · open · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description The logo image on my website is remaining blurred in production after page load and sharpens after page interaction. This does not occur for any other images that I can see, however I have reproduced it on one other site I manage as well. - Does not…

### CASE-7016 · Netlify fails to create file nodes with remote images
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: type: bug/stale?/status: needs reproduction/topic: media
- **Excerpt**: ## Summary Hi, I've a bug to deploy my Gatsby on Netlify. All works locally but I have this log on Netlify: ``` 12:19:34 PM: Build ready to start 12:19:36 PM: build-image version: 3031d4c9e432fd7016f6279fc9ad706f9205d845 12:19:36 PM: build-image tag: v3.3.17 12:19:36 PM: buildbot version: 1f35b3abd6e2bf5230d8edf68072840fdec1513f 12:19:36 PM: Fetching cached dependencies 12:19:36 PM: Failed to fetch cache, continuing with build 12:19:36 PM: Starting to prepare the repo for build 12:19:36 PM: No cached dependencies found. Cloning fresh repo 12:19:36 PM: git clone [link] 12:19:37 PM: Preparing…

### CASE-7018 · Gatsby stuck on generating image thumbnails
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬17 · closed · labels: type: bug
- **Excerpt**: ### Steps to reproduce - `git clone [link] - `cd ` - `yarn` - `yarn start` ![image]([link]) ### Expected result It finishes and runs ### Actual result It gets stuck, nothing happens ### Environment ``` yarn gatsby info --clipboard Using globally installed version of Yarn yarn run v1.12.1 $ /Users/vjeux/random/excalidraw-blog/node_modules/.bin/gatsby info --clipboard System: OS: macOS Mojave 10.14.6 CPU: (8) x64 Intel(R) Core(TM) i7-4980HQ CPU @ 2.80GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 13.5.0 -…

### CASE-7020 · netlify-identity-widget always included in bundle, adding 166k
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬17 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description `netlify-identity-widget` is always included in the app bundle, despite `gataby-plugin-netlify-cms` being configured not to use it. Even then it shouldn't be included in the app bundle as it is only used on the admin page. Repro based on [gatsby-starter-netlify-cms]([link]): [link] # To replicate 1. `git clone [link] 2. `cd gatsby-netlify-cms-bug-repro` 2. `npm install` 3. `npm build` 4. `npm run report` # Result <img width="979" alt="Screenshot 2019-09-11 at 20 09 47" src="[link]> netlify-identity-widget is included in the app bundle, adding 166k. # Expected…

### CASE-7022 · [gatsby-source-drupal] menu link content isn't displaying parent as expect
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I am seeing a value for the menu link content in the GraphiQL browser as null when I would expect it to be an ID ### Steps to reproduce Browse your menu in GraphiQL when you have a menu on Drupal with nested menu items <img width="1440" alt="Screenshot 2019-06-21 at 17 10 28" src="[link]> ### Expected result According to the JSON:API there should be a string with the ID for nested menu links on the parent value. <img width="581" alt="Screenshot 2019-06-21 at 17 12 08" src="[link]> Should be the string as follows in this instance:…

### CASE-7025 · gatsby-image fluid expects aspectRatio to exist, fails silently(image does not display)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬17 · closed · labels: stale?/type: maintenance
- **Excerpt**: ## Description `gatsby-image` fails to work correctly with fluid image if no `aspectRatio` value is provided due to the calculation expecting it for fluid images and returning NaN instead. ### Steps to reproduce I have used `gatsby-image` with `gatsby-source-contentful` and a graphql query like the following: ```GraphQL const QueryPageService = graphql` query QueryPageService { contentfulPageService { services { media { file { url } fluid(maxWidth: 500){ sizes src srcSet srcWebp srcSetWebp # Below as an alternative will also retrieve aspectRatio #...GatsbyContentfulFluid_withWebp } } } } } `…

### CASE-7027 · [gatsby-source-filysystem] Video files created several times
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed
- **Excerpt**: <!-- If you're reading this... it means that you want to contribute to the project! Awesome and thanks! To make it easier for us to help you — please follow the suggested format below (as it makes sense). Useful Links: - Documentation: [link] - How to Contribute: [link] - How to File an Issue: [link] - Become a Sponsor: [link] Before opening a new issue, please search existing issues ([link] framework]/issues) to double-check your issue isn't already known. --> ## Description After I run `gatsby build` I found myself with a `public` folder of 2go for a website that has *only* 100Mo of assets.…

### CASE-7028 · gatsby-source-contentful not downloading images with downloadLocal true
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬16 · closed · labels: type: bug/topic: source-contentful
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description There seems to be an issue with downloading images from contentful to local if `downloadLocal` is `true`. So this config seems to have bugs: ``` { resolve: `gatsby-source-contentful`, options: { spaceId: `1234`, accessToken: "1234",…

### CASE-7029 · Node manifest file paths aren't created correctly
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬16 · closed · labels: type: bug/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Report from Disco <img width="1022" alt="Screen Shot 2021-10-30 at 10 45 33 AM" src="[link]> rd ### Reproduction Link n/a ### Steps to Reproduce n/a ### Expected Result n/a ### Actual Result n/a ### Environment ```shell windows ``` ###…

### CASE-7031 · Error when using StaticImage componenet
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: type: bug/stale?/topic: media/status: needs core review
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues And existing Discussions: [link] framework]/discussions --> ## Description Got this error when using StaticImage ``` Failed to validate error [Error [ValidationError]: "error" must be of type object] { _original: { context: { sourceMessage: 'Error loading image [link]…

### CASE-7032 · ERR_SSL_PROTOCOL_ERROR when using `gatsby develop --https`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬16 · closed · labels: type: bug/topic: core
- **Excerpt**: ## Description When using `gatsby develop --https`, I see a lot of `ERR_SSL_PROTOCOL_ERROR` errors in the console, for what seems to be `socket.io` related requests. I am using the (currently) latest version of Gatsby. ![image]([link]) It happens about every 5 seconds, which makes it annoying to use the console to debug other things. The page seems to work fine, and HMR works without issues too, regardless of the errors. ### Steps to reproduce Go to this repo and follow the instructions: [link] Alternatively, run this in an existing Gatsby project: 1. Run `gatsby develop --https` 2. Open the…

### CASE-7034 · RangeError: Maximum call stack size exceeded - map-pages-to-static-query-hashes.js
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬16 · closed · labels: type: bug
- **Excerpt**: I already tried everything :( From reset and remove `/node_modules` folder, the `package-lock.json` – as well as update `gatsby-cli`, and all my packages. I'm stuck with this error that appears just before the development build process (that remains successful just for a bit) : ![image]([link]) Here's the shell output: ```shell ERROR Maximum call stack size exceeded RangeError: Maximum call stack size exceeded - map-pages-to-static-query-hashes.js:73 getDepsFn [myfoldername]/[gatsby]/dist/utils/map-pages-to-static-query-hashes.js:73:23 - map-pages-to-static-query-hashes.js:111 getDepsFn…

### CASE-7035 · Error thrown when using the Gatsby CLI after install - "Error: Cannot find module 'detect-port'"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍11 💬16 · closed · labels: type: bug
- **Excerpt**: ## Description When I installed the gatsby CLI, I was unable to run it; it throws this exception in the command line: ![image]([link]) This is only resolveable by globally installing `detect-port`, at which point everything is fine. Perhaps a missing dependency that wasn't included? ### Steps to reproduce 1. Install `gatsby-cli` globally. 2. Try to create a new site with the Gatsby CLI per the tutorial (or run `gatsby -v` - any command will cause the failure it seems) 3. The above error is spat out ### Expected result What should happen? It should not throw ### Actual result It throws an…

### CASE-7037 · createRemoteFileNode crashes when url doesn't have an extension
- **Principles**: P-A3, P-H1 · **Env**: linux
- **Signals**: 👍1 💬16 · closed · labels: type: bug/help wanted/topic: source-plugins
- **Excerpt**: ## Description calling `createRemoteFileNode` with an url (<[link]>) without an extension crashes. ``` Unexpected error value: "failed to process [link] ENOENT: no such file or directory, stat '.../.cache/gatsby-source-filesystem/7a1221ea4c61551f928908dd873a3738/300x300'" ``` I think it has something to do with how the caching is handled. ### Steps to reproduce 1. use `createRemoteFileNode` to create remote file nodes from an url without an ext 2. use the remote file node in eg. sharp-image 3. the first build goes through 4. all builds afterwards crash ### Environment ``` System: OS: Linux…

### CASE-7040 · Upgrading to Gatsby 2.19.x breaks existing queries
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ## Description I'm trying to test out Gatsby Builds which requires updating to the latest Gatsby and Sharp, and it also seem we need a more current gatsby-source-contentful. When I do this all our queries have an additional id added to the query, at each level. This breaks the queries, as an example: > Fields "items" conflict because subfields "id" conflict because they return conflicting types ID! and String. Use different aliases on the fields to fetch both if this was intentional. <img width="960" alt="Screenshot 2020-01-28 at 11 06 35" src="[link]> However, when I look at the source code…

### CASE-7041 · gatsby-remark-images error if using markdownCaptions: true
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬16 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description There seems to have been a regression and an error similar to the one reported in [ref] and fixed in [ref] is effected if `markdownCaptions: true` is specified in the `gatsby-remark-images` configuration within `gatsby-config.js` The error is the same,…

### CASE-7043 · gatsby-plugin-mdx gives "TypeError: createTypes is not a function"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: ## Description After installing the gatsby-plugin-mdx following instructions, it throws errors when starting. ### Expected result Shouldn't give errors and able to render .mdx files. ### Actual result <img width="585" alt="Screen Shot 2019-09-19 at 12 29 19 AM" src="[link]>

### CASE-7045 · GraphQL, allFile or file queries that work in gatsby develop don't work in gatsby serve
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ## EDIT What I see is that what is not working are the queries that look for files (`allFile` and `file` queries), while they work when under `gatsby develop` they don't retrieve the content when under `gatsby build => serve`. So what does it mean? allFile and file are sort-of forbidden queries? Or have I to modify them somethow? ## Summary While in develop everything works, in serve the images are not showing up ## Relevant information I'm using gatsby-images, where I have access to images through graphQL, and then try to insert a simple `<Img />` that works when developing, but not when…

### CASE-7047 · [question] Importing all images from a folder
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: This is a question and not an issue. First of all, thanks to the creator and to all the contributors for this awesome project. I recently started working as a freelance and I'm moving to Gatsby for all my static websites project. I'm trying to recursively importing all the images from a specific folder. Since I'm new to Gatsby and I'm not so skilled in Webpack, my idea was to use the `gatsby-source-filesystem` to retrieve all the images from a specific folder and then mapping them to my webpage: ```js const IndexPage = ({ data }) => { console.log(data); return ( <div> <h1>Hi people</h1>…

### CASE-7048 · MaxListenersExceededWarning errors with gatsby-plugin-image StaticImage with placeholder
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬15 · closed · labels: type: bug/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description A console error occurs on develop and build when using `StaticImage` from `gatsby-plugin-image` with a `placeholder` attribute, [e.g:]([link]) ```jsx <StaticImage src="../images/photo-1.jpg" alt="" placeholder="blurred" /> ``` --- * Using…

### CASE-7049 · [gatsby-plugin-image] Images flickering on route change using GatsbyImage
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When moving from one page to another any images that are rendered using `GatsbyImage` from `gatsby-plugin-image` will briefly flicker/blink. I have created a minimal reproduction of this which can be found attached to this issue alongside…

### CASE-7054 · It takes 8 hours to run Gatsby Develop + Drupal 8 store (40 000 products)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: topic: performance/topic: source-drupal/type: feature or enhancement
- **Excerpt**: ## Summary Hello, I have website built on Headless Drupal 8 with around 30 000 products (+10 000 out of stock) I started with building frontend on Gatsby without connecting to my Drupal 8 backend when I tried to connect it using gatsby-source-drupal plugin a lot of different problems started to show up. Each product have 5 images so in total there should be around 200 000 images ### Basic example 1. Javascript out of heap error - when reaching 2 GB (solved) by adding new command in package.json "heavyload": "node --max-old-space-size=14192 ./node_modules/gatsby/dist/bin/gatsby.js develop" and…

### CASE-7055 · [gatsby-source-filesystem] pluging breaks building schema step
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬15 · closed · labels: stale?/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description After adding `gatsby-source-filesystem`: ```javascript { resolve: `gatsby-source-filesystem`, options: { name: `images`, path: `${__dirname}/src/images/`, }, }, ``` to the `gatsby-config.js` Gatsby `develop` & `build` break. Error: ``` Error:…

### CASE-7058 · node_module transpile causing errors in develop mode
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description Upgrading my Gatsby site (and all official Gatsby plugins) from `2.10.0` to `2.13.51` is causing my dependencies to not be read correctly. Not sure if this is related to [link] framework]/blob/master/packages/gatsby/CHANGELOG.md[ref]-2019-07-02 Steps below (Broken example has issue) have nothing but official plugins updated. [Diff of branches]([link]) ### Steps to reproduce #### Working example 1. Clone [link] 1. Run with `yarn develop` 1. Interact with <img width="214" alt="Screen Shot 2019-08-05 at 4 38 08 PM" src="[link]> to open offcanvas and view articles. ** Note my…

### CASE-7059 · [gatsby-plugin-layout] plugin not holding state consistently
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug/stale?/status: needs core review
- **Excerpt**: ### Description `gatsby-plugin-layout` is unmounting and rerendering when using a programmatic navigate between pages. In my layouts/index.js file I am using a useState hook like `const [time] = useState(Date.now())` and can observe that occasionally the layout component is rerendered causing the time to be altered. Demonstration: In cases when the bug occurs and state is lost, the time would progress: ![image]([link]) In cases when the bug does not occur and state is maintaned, the time would not progress: ![image]([link]) This is absolutely not desirable as the intention is use the plugin…

### CASE-7064 · `gatsby build` vs `gatsby develop` - conditional props behave unexpectedly
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ## Summary Query string / URL parameters for conditionally styling placeholder in `gatsby-image` component, works in development(`gatsby develop` but not always production(`gatsby build`)? ## Relevant information ```JSX const Placeholder = ({data , location }) => { const params = qs.parse(location.search, { ignoreQueryPrefix: true }); const base42_data = { galleryTall: data.galleryTall, galleryWide: data.galleryWide, galleryBig: data.galleryBig, galleryNormal: data.galleryNormal } const base42webp_data = { galleryTall: data.galleryTall_base64webp, galleryWide: data.galleryWide_base64webp,…

### CASE-7067 · Gatsby ignores custom html.js and static files
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: Hello! I have a strange issue. I tried to modify the hmtl.js file. I copied over to src/html.js and added my code (I try to get outdatebrowser into the build [link]). But Gatsby seems to ignore the file. The custom code doesn't appear in the header and body. Maybe a related issue I have as well is that Gatsby is not copying over my static files from src/static to the public folder (for example a video in src/static/videos/vid1.mp4). Is this a known issue or do I do something wrong? Cheers, Dominik from rocket.works

### CASE-7068 · After updating, get error "Expected positive integer for width but received 0 of type number" during IMAGE_CDN jobs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description We have a fairly large Wordpress site (several thousand images), that we have built using `gatsby-source-wordpress` since 2020. Recently, we updated the WPGatsby plugin, and have also needed to update the site accordingly, to ensure it can…

### CASE-7069 · "Sorting on fields that need arguments to resolve is deprecated" warning
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: type: bug/status: needs reproduction/topic: GraphQL
- **Excerpt**: ## Description If I create a node field using `createNodeField` from a node value: ``` exports.onCreateNode = async ({node, actions: {createNodeField}}) => { if (node.internal.type === "MarkdownRemark") { createNodeField({ node, name: "template", value: node.frontmatter.template, }) } } ``` Then I want to use this field to group my nodes ``` query MyQuery { allMarkdownRemark { group(field: fields___template) { fieldValue totalCount } } } ``` There is the following warning <img width="751" alt="Screenshot 2020-12-09 at 17 19 30" src="[link]> If I use the original data (which is the same),…

### CASE-7070 · [gatsby-remark-images] Captions affecting styles of blog posts when using mdx
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬14 · closed · labels: type: bug/stale?/topic: remark/mdx
- **Excerpt**: ## Description When using `gatsby-plugin-mdx` with `gatsby-remark-images`, some components in the mdx are not styled as expected while others are. This only occurs when `showCaptions` is set to `true` and the page with the MDX is accessed directly rather than through Gatsby's `Link` component. ### Steps to reproduce Example repo: [link] ``` npm install npm run build gatsby serve ``` Go to `localhost:9000`, click the `Go to post` link to go to the blog post. You should see all the paragraphs are red. If you reload the page, some of the paragraphs are no longer styled as per the components prop…

### CASE-7073 · Website crashes while deploying !!!! WorkerError: Processing [Image Name]
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍3 💬14 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: When I deploy my website, it crashes while processing an image, I never had this kind of error before, it just spawned out of the blue gatsby build ``` > [email] develop D:\ByrdByte Project\byrdbyte-landing-develop > cross-env GATSBY_GRAPHQL_IDE=playground gatsby develop success open and validate gatsby-configs - 0.090s ERROR [ref] Your plugins must export known APIs from their gatsby-node.js. See [link] for the list of Gatsby node APIs. - The plugin [email] is using the API "modifyWebpackConfig" which is not a known API. Some of the following may help fix the error(s): - Rename…

### CASE-7074 · GraphQL Query Options Reference: 404 on Links to CodeSandBox -> Keep Example running
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: type: bug/status: needs more info/status: confirmed
- **Excerpt**: ## Description Links to CodeSandBox getting 404, when CodeSandBox App suspends. the app should restarted. ### Steps to reproduce - open [link] - look at iframes - or open one of the queries ([basic query]([link])) ### Expected result - i should see the GraphiQL Explorer ### Actual result - i get an 404 in iFrames - the GraphQL endpoint [link] is not available: 404 ### Workaround - i can "restart" the app with going to [link] where i see an deploy script and later the example website. - now i can reload the docs and see the examples ### Note - i think now you can not see the error because the…

### CASE-7076 · Images render blurred when deploying gatsby site to Github Pages
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬14 · closed · labels: status: needs reproduction
- **Excerpt**: Locally, my website works well with `gatsby develop`, but but as soon as i try to deploy my website to github-pages, images render blurred and sidebar links ar not working and redirecting wrongly. Anyway i want to fix the first issue about Images problem because i have png and gif. but they brook. ![image]([link])

### CASE-7078 · Navigating to other pages is causing app crash [Tested with latest version of gatsby (2.21.1) also]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: status: needs more info/status: needs reproduction
- **Excerpt**: Since last 2 weeks, my app in prod crashes for just no reason when I navigate. It does not happen every time of navigation but on random pages. I've noticed that pages that call data from server on initial load are prone to crash. The log when app crashes can be seen in the console image as below. I'm really stranded here as I need to launch my app but facing this issue. ![image]([link])

### CASE-7079 · Mapped data passing same value to gatsby-link prop
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: status: needs reproduction/status: awaiting author response
- **Excerpt**: Hey all, first time post here i hope it's allowed/i'm doing it right. Anyways I'm mapping over some data (3 image slides i have stored in a headless cms). I am passing the returned data into slide component, and from there its being passed down to a button component, which is just a 'gatsby-link'. The mapped data contains a "page_link", among other things that should be different for each slide. However, for some reason, the same "page_link" is being passed down to each button, even though they should all be different. I am logging my data in the console and can confirm that each array i am…

### CASE-7083 · Find linked file node issue
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬14 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description <img width="1440" alt="屏幕快照 2019-07-14 21 53 19" src="[link]> ### Steps to reproduce create an image field by: ```js createNodeField({ node, name: 'cover', value: node.frontmatter.cover }) ``` In fact, `frontmatter.cover` and `fields.cover` are just aliases. ### Environment System: OS: macOS 10.14.5 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 10.16.0 - ~/.nvm/versions/node/v10.16.0/bin/node Yarn: 1.16.0 - ~/.config/yarn/bin/yarn npm: 6.9.0 - ~/.nvm/versions/node/v10.16.0/bin/npm Languages: Python: 2.7.16 -…

### CASE-7085 · Images disappeared after update
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬14 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description <img width="1279" alt="Screenshot 2019-06-11 at 17 39 03" src="[link]> <img width="1279" alt="Screenshot 2019-06-11 at 17 43 58" src="[link]> I've noticed on several instances, where I'm using `[email] -> [email]` and `[email] -> [email]`, that Webp images disappeared, after an update this morning. First I thought this will sort itself out, because it might be a caching issue, but then I realized all images (png) on [link] are missing too. [Another example]([link]). I can pin back the issue to the following commit: [link] Could this be related to [link] framework][ref], @user ?…

### CASE-7087 · Infamous GraphQL Error Field "image" must not have a selection since type "String" has no subfields.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description The way gatsby is handling images is definitely a bug, I confirmed again today, it throws error randomly. I have experienced same source code compiling successfully and running the develop server, while 9/10 times it throws an error. Programmatically I…

### CASE-7089 · GatsbyGram PageRenderer is glitchy
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description [link] loads beautifully, but cloning this repo and running it locally produces glitchy loading/rerendering of components/images. ### Steps to reproduce With a fresh repo, navigate to gatsbygram, and run with `npm start`. Visit the page on the browser and…

### CASE-7090 · Gatsby image sharp tracedSVG misalignment when cropped
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug/help wanted/status: confirmed/topic: media
- **Excerpt**: ## Description TracedSVG image placeholders are not aligned to the original image when cropped. It looks like this was reported already [here]([link] framework][ref]) 4 months ago, but the original poster didn't provide a reproducible demo and the issue was closed. He/she explains the issue very well. I'm providing a demo. ### Steps to reproduce Website that demos the problem: [link] Source for the demo: [link] ### Expected result Expected placeholder to be aligned. ### Actual result Actually placeholder was not aligned.

### CASE-7091 · CSS order messed up after build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬14 · closed · labels: type: bug/stale?
- **Excerpt**: Hi everyone, I have an issue where my css is either missing or order is messed up after I build. For example: This is the development one. <img width="386" alt="screen shot 2018-11-06 at 12 26 42 pm" src="[link]> And this is one after I build <img width="387" alt="screen shot 2018-11-06 at 12 26 56 pm" src="[link]> My way of working is I use traditional way of writing in CSS file and import './index.css' into my component. Is there anything I can do to fix this? Thank you!

### CASE-7092 · [Question] Timeout on Netlify build pipeline possibly caused by regression?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: ## Description Hi, I'm running into a nasty timeout bug on Netlify build pipeline. Site is small enough (~10 pages) that it's definitely not an issue with actual build time. Some background: My site was initally build with Gatsby v2-beta38. Upgrade and migrating to official v2 result in timeout. (More info on the exact buggy version below) ### What I've tried: - Local Gatsby build command works fine. - Running Netlify build-image `test-build` script does not result in timeout - Manually start the image and run build command also works fine - Only happen with Gatsby. Test with other static…

### CASE-7094 · Anchor links don't work in develop
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug/help wanted
- **Excerpt**: I have an element with the id `hash` on [my page]([link]): ``` <h1 id="hash">Headline with #hash</h1> ``` When running `gatsby develop`, opening a new browser window and accessing `[link] I expect the page to jump to the element with the corresponding id `hash`. It doesn't: ![image]([link]) Only when I either * open just `[link] and then add `#hash` to the URL in the browser address bar and hit "Enter" or * run `gatsby build` and then open `[link] the page jumps to the element as expected: ![image]([link]) Repo here: [link]

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7010 · Gatsby develop and build hang on source and transform nodes stage on large CSV file with extremely high ram usage
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: type: bug/help wanted/topic: plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using gatsby build or gatsby develop with the plugin gatsby-transformer-csv with a largeish csv file ~16'000 rows it hangs on the 'source and transform nodes' stage seemingly indefinitely. Also the nodejs process is using…

### CASE-7015 · High Severity vulnerability in gatsby-transformer-remark
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬17 · closed · labels: type: bug/topic: remark/mdx
- **Excerpt**: gatsby-transformer-remark is currently pulling in remark ^10..0.0, remark-parse ^6.0.3, and mdast-util-to-hast ^3.0.4, all of which depend on [email] which has a Regex Denial of Service vulnerability: [link] This is resulting in Gatsby being blocked by my company's automatic vulnerability scanners. mdast-util-to-hast has remediated the issue in 7.0.0. remark has remediated the issue in 13.0.0. remark-parse has remediated the issue in 9.0.0.

### CASE-7019 · Option to skip creating parent-child link in gatsby-transformer-* plugins
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: topic: performance
- **Excerpt**: ## Summary I'd like to add support for a plugin option to skip creating parent-child link in `gatsby-transformer-json`. Currently `gatsby-transformer-json` creates a link between the parent node (mostly a file node created by `gatsby-source-filesystem`, but this could be any node created by any source plugin). This is done by [calling `createParentChildLink`]([link] framework]/blob/fb2fb41b3cf4093b30b94c980881c2d9cc44a43d/packages/gatsby-transformer-json/src/gatsby-node.js#L34) after creating the JSON node. ### Motivation I have about 145k JSON nodes (split across multiple files). When I run…

### CASE-7026 · improve documentation for using Gatsby with Markdown
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬17 · closed · labels: type: documentation
- **Excerpt**: _note to future readers: original title of this issue was: Completely unable to debug graphql query variable when using `gatsby-transformer-remark` and `createPages`. This then changed once i solved it and we got to discussing better docs_ _first of all, i love gatsby, and please dont read my comments below as criticism! was just frustrated that i couldnt get this basic thing to work and i think we could talk abit about how to make the gatsby-to-graphql connection less "magical"_ ## Description Following the basic `gatsby-transformer-remark` blogpost instructions doesn't work. The immediate…

### CASE-7033 · Gatsby Develop hangs using iTerm2, resizing fixes it
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬16 · closed · labels: type: bug/topic: cli
- **Excerpt**: ## Description When I run `yarn develop`, the process hangs at `source and transform nodes`. When I resize my terminal, everything starts running again smoothly. So I need to hit the command and keep changing my terminal width to actually get to the end of building. ![image]([link]) ### Steps to reproduce Run `yarn develop` Wait until it hangs at `source and transform nodes` Resize iTerm2 See everything continue smoothly [This is the project I'm working on at the moment.]([link]) ### Expected result Run `yarn develop` See everything continue smoothly ### Environment System: OS: macOS 10.15.7…

### CASE-7038 · gatsby-transformer-sharp 2.3.15 regression: You can't use childImageSharp together with
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍16 💬16 · closed · labels: type: bug
- **Excerpt**: ## Description [email] (released a few hours ago) introduced a regression where it warns for any file types (even supported ones). See [link] framework][ref] The regression is caused by using a [`default export`]([link] framework][ref]/files#diff-6ffe62631f12defe74d8bf931540b5e8R10), but importing the file using `require` (without using `.default`). When looking over the codebase it is a mix of `import`, `default export`, `export`, `module.exports` and `require`. Is the preferred coding style documented somewhere? ### Steps to reproduce 1) `yarn add [email]` 2) Then run a build using…

### CASE-7042 · All node removal in LokiJS takes a very long time (affects page creation and already cached builds)
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: type: bug
- **Excerpt**: ## Description I've been experiencing random major slowdowns of `Source and transform nodes` that don't appear to conform to the other posted issues. After managing to get it reproduced with the debugger running - I've found that deleting stale nodes from LokiJS is the cause of the slowdown. When a large number of nodes become stale, this will take a very very long time, about 120ms per node. When there are 20000 stale nodes, this easily adds up to ~2400s. This is about the amount of time I'm seeing this step take whenever stale nodes need cleaning up. If there are a lot of stale nodes, would…

### CASE-7046 · [docs] Improve documentation for plugin authors
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬16 · closed · labels: type: documentation
- **Excerpt**: Currently, the documentation for plugin authors is pretty sparse. On the [contributing page]([link]), there's a single paragraph, and the [plugins]([link]) section of the docs is super high-level. ## What I'm proposing in the short term The docs should be updated to: - [x] Explain naming conventions for plugins (e.g. when should I use `gatsby-plugin-*` vs `gatsby-transformer-*`?) - [x] Explicitly explain what files can be contained in a plugin, and which APIs are available to plugins - [ ] Create a boilerplate to create a consistent Gatsby plugin README experience ## What I'm proposing in the…

### CASE-7061 · [gatsby-transformer-remark] query on markdownRemark no longer returns added fields
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When doing a query on markdownRemark, fields added using createNodeFields are not present. This occurs only after running `npm audit fix`, updating the gatsby package from 2.0.91 to 2.3.36 - gatsby-transformer-remark was unchanged from 2.2.0. With the…

### CASE-7071 · gatsby-cli: Cannot find module "@user/mdx"
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍9 💬14 · closed · labels: type: bug/status: confirmed/topic: cli
- **Excerpt**: ## Description I recently performed an 'npm install gatsby-cli' after it was reporting being out of date. After the update, all builds (both build and develop) are failing with the following message. ```shell verbose running command: develop internal/modules/cjs/loader.js:895 throw err; ^ Error: Cannot find module '@user/mdx' Require stack: - /usr/local/lib/node_modules/gatsby-cli/node_modules/gatsby-recipes/dist/transform-recipe-mdx.js - /usr/local/lib/node_modules/gatsby-cli/node_modules/gatsby-recipes/dist/renderer/index.js -…

### CASE-7081 · gatsby-plugin-emotion with custom ThemeProvider not injecting on SSR
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description [link] has `gatsby-plugin-emotion` along with a custom Cache and ThemeProvider in both `gatsby-browser` and `gatsby-ssr`. Production builds and hard-refreshing an article page (since the homepage has some animations that hide things by default) such as [link] shows a flash of unstyled content when it all be inlined. Only the `<Global />` styles are inlined; which is not what is described from the plugin features. ### Minimal reproduction [link] ### Steps to reproduce ☝️ Example repo and production version to reproduce is available above. ### Expected result All styles should be…

### CASE-7084 · excerpt(pruneLength: 120) returning entire article
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍0 💬14 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description ``` { markdownRemark(fields: {slug: {eq: "slug-here"}}) { id excerpt(pruneLength: 120) } } ``` returns entire post; not trimmed to 120 characters. ### Steps to reproduce MarkdownRemark is returning entire article for excerpt field. Was previously running `"gatsby-transformer-remark": "2.3.12",` with it working fine, but upgrading to `"gatsby-transformer-remark": "2.5.0",` has the issue. ### Expected result Return trimmed excerpt. ### Actual result Returned entire article. ### Environment ``` System: OS: macOS 10.14.5 CPU: x64 Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz Shell:…

### CASE-7098 · gatsby-source-contentful fails to transform content
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed
- **Excerpt**: <!-- If you're reading this... it means that you want to contribute to the project! Awesome and thanks! To make it easier for us to help you — please follow the suggested format below (as it makes sense). Useful Links: - Documentation: [link] - How to Contribute: [link] - Become a Sponsor: [link] Before opening a new issue, please search existing issues ([link] framework]/issues) to double-check your issue isn't already known. --> ## Description The issue is that when importing contentful from my space we get the error `Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ `. However, there is no…

### CASE-7100 · Graph fails to query images
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬13 · closed · labels: type: bug/stale?/type: upstream/topic: remark/mdx
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description A project that uses Netlify CMS with `gatsby-transformer-remark` and the community plugin `gatsby-remark-relative-images` which worked perfectly in Gatsby 3 now gets `null` on Gatsby 4 after a cache has been built. Netlify builds exhibit…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7011 · Setting cropFocus to attention or entropy crashes Gatsby
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬17 · closed · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description You can set custom cropFocus strategies with gatsby-plugin-image (see [link]) This generally works fine but if you try to set it to `entropy` or `attention` it fails with this error: ``` error converting image Processing…

### CASE-7051 · graphql: custom fields not accessible to userland resolvers
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug/status: confirmed/topic: GraphQL/topic: DX
- **Excerpt**: ## Description Hi team, i'm trying to create a nested set of routes from articles sourced from Shopify and it looks like some of the curly braces magic isn't quite working as i'd hoped ### Steps to reproduce This is my dir structure on disk ```sh src |-- pages |-- {shopifyArticle.blog__title} // => this is a dir not a file FYI |-- {shopifyArticle.title}.tsx ``` This will result in pages being correctly created and can be seen on the "Gatsby.js development 404 page" and by visiting the url. So... the pages are definitely there. However from a page query or a `useStaticQuery` When i attempt to…

### CASE-7052 · bug(gatsby-source-shopify): "Error: Invariant Violation: Encountered an error trying to infer a GraphQL type for: `products___NODE`. There is no corresponding node with the `id` field matching"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍10 💬15 · closed · labels: type: bug/topic: source-shopify
- **Excerpt**: Hi, I'm attempting to build an ecommerce with gatsby using gatsby-source-shopify I'm seeing console error - Error: Invariant Violation: Encountered an error trying to infer a GraphQL type for: `products___NODE`. There is no corresponding node with the `id` field matching: I'm seeing the error on both command "gatsby develop" and "gatsby build" I found the previous issue[ref] but couldn't understand how it solved. From gatsby-source-shopify docs. there's no clear instructions on how to expose metafield to the Shopify Storefront API from gatsby side or config. I opened as a bug issue because…

### CASE-7062 · "The result of this StaticQuery could not be fetched" when calling useStaticQuery within a custom hook and declaring the query in the usage of the custom hook
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍5 💬15 · closed · labels: stale?/status: awaiting author response
- **Excerpt**: ## Description Executing `gatsby build` throws the following error: ``` The result of this StaticQuery could not be fetched. This is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in [link] framework]/issues ``` when using a custom hook that uses `useStaticQuery`, and passes the `query` parameter as a variable, as opposed to [the example in the docs][0], which inlines the query in the `useStaticQuery` call. An example of a custom hook which causes this behavior is: ```javascript export const useHelloWorld = query => useStaticQuery(query) .allFile…

### CASE-7075 · Gatsby-Image rendering in low quality
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug/stale?/topic: frontend
- **Excerpt**: ## Description Hi all! I have a problem with the gatsby-image plugin. I hope you can help me because I looked everywhere and I can't find the solution. When I run the project using gatsby develop I see the images correctly and in good quality, whether they are static or fluid, but when I deploy the images are totally out of focus, pixelated as you will see in the image that I copy below, even up to I started a new project from scratch with the default project that comes with gatsby and the problem continues. I would really appreciate your help with this problem that is driving me totally…

### CASE-7082 · Field with `resolve` (using custom Node interface) doesn't appear in filtering
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: ## Description When adding a `resolve` on a field that extends a custom Interface, the field isn't accessible for filtering: [link] ![image]([link]) With the title - which comes from the frontmatter - it works: ![image]([link]) ### Steps to reproduce Clone [link] and run `yarn workspace emma develop` and see the individual project pages not working. ### Expected result Filterable by slug. --- As per Slack discussion with @user

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7013 · TimeoutError: Timeout awaiting 'request' for 30000ms
- **Principles**: P-C1, P-C2, P-C3 · **Env**: macos
- **Signals**: 👍0 💬17 · closed · labels: type: bug/status: needs more info/not stale/topic: source-wordpress
- **Excerpt**: ## Description After upgrading to Gatsby v3, gatsby-source-wordpress v5, and all other dependencies that need upgrading I'm now always having this error when downloading media item. It's always a different media every time. ### Steps to reproduce Clone the gatsby-starter-default theme and download latest version of gatsby-source-wordpress. You can clone this repo for minimal reproduction: [link] then run gatsby-develop ### Expected result It will run like it used to before. ### Actual result Failing to process media items. ### Environment System: OS: macOS 10.15.2 CPU: (4) x64 Intel(R)…

### CASE-7017 · Error running yarn install + gatsby build. ERROR [ref] PLUGIN. Error while running the createPages lifecycle: Reducers may not dispatch actions.
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍5 💬17 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Since today 2nd July 16:00 CET when trying to run yarn install + gatsby build with gatsby 2.6.7 the following error is outputted. Codebase was not changed. ERROR [ref] PLUGIN "gatsby-theme-style-guide" threw an error while running the createPages…

### CASE-7044 · Queries from unused themes cause "gatsby develop" to fail
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬16 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: ## Description Queries from themes that aren't being used cause an app to fail. It's sort of an abrupt experience to have installing a package make your app crash when it isn't configured. I'm not sure if we should check to make sure a theme is being used or if we should error in a more friendly way that says to configure the theme or use it. ### Steps to reproduce ``` gatsby new my-themed-blog [link] framework]-starter-blog-theme cd my-theme-blog yarn add gatsby-theme-documentation yarn start ``` ### Expected result The blog theme runs unaffected by the docs theme which isn't configured. ###…

### CASE-7060 · Unable to use html.js present in theme package from example site
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I've created a custom html.js in gatsby-theme-minimal package and am trying to see it's effect on the example site created. When running `yarn workspace gatsby-theme-minimal develop` for theme workspace, custom html.js seems to loaded, but when running…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7014 · Links causing re-render on hover after Query on Demand patch.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍15 💬17 · closed · labels: type: bug/topic: DX
- **Excerpt**: ## Description After a recent update, my Links now cause re-renders of the components they are inside of on the initial hover of the Link component. I know this is an error that has sprung after after the inclusion of the query on demand changes, and replacing Links with hrefs on a tags does rectify the problem. Ive managed to reproduce the problem in a simplified form, and have narrowed the issue down to how the Link tag behaves with URLS leading to generated pages. My assumption is that this is behavior caused by how the Link component's onHover functionality is routing to the graphcms…

### CASE-7066 · Opting out of date auto-inferring?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: I'm loading data from Markdown files and in my frontmatter I have some date fields. I've got some dates with no known day; just YYYY-MM (which is a perfectly valid ISO date form). Others are just a year. Others are a full date. All are timezoneless. But no JS date-handling library I'm aware of actually knows how to properly handle incomplete dates. They all treat them like the first of the month or first of the year. I want to handle these dates in my template, with different behaviour depending on the resolution of the date. So I want to get them as is. But when I load the data via GraphQL…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7024 · [gatsby-image] Add art direction
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-A3, P-H1 · **Env**: chrome, safari
- **Signals**: 👍2 💬17 · closed · labels: type: bug/stale?
- **Excerpt**: ## Summary [Art direction]([link]) refers to serving different source images at different breakpoints, in order to show users a different crop or image depending on their screen size. ### CSS `display: none` ❌ While art direction can be approximated from CSS using media queries and `display: none`, browsers (at least Chrome and Safari) will still load an image that has `display: none`. This is suboptimal from a performance and user-experience perspective. **Art Direction Loading Example:** [link] ### HTML `<picture>` and `<source>` ✅ A better way to accomplish art direction is by using a…

### CASE-7063 · Bug? Browser always loads the largest possible image
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ## Description I noticed that my browser is always loading the largest possible images, regardless of viewport width and the fact that smaller images would be available in `srcset`. I believe there is a bug in the code which is generating `sizes` (which is supposed to tell the browser how to use the `srcset`). Or am I using gatsby-image somehow incorrectly? I couldn't find any documentation related to issues with `srcset` or `sizes`. ### Steps to reproduce I created a website to demo the problem: [link] It also has a more detailed explanation. Source for the demo is here: [link] ### Expected…

### CASE-7086 · Wrong className assegnation on build project
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬14 · closed · labels: stale?
- **Excerpt**: ## Description During checking the media query with `react-responsive` when I build the project gatsby assigned to a div a wrong className , taked form the div above the wrong one. that's from the index.js ``` [...] <div className="home-last"> <h3 className="title-separator">{"Gli ultimi Annunci"}</h3> <UltimiAnnunci /> <div className="scopritutti"> <Link to={"/ricerca"}> <button className="control button">{`Scopri tutti gli annunci`}</button> </Link> </div> </div> [...] ``` from UltimiAnnunci.js ``` import React from "react"; import { StaticQuery, graphql } from "gatsby"; import GridCarousel…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7039 · global-styles plugin doesn't work well alongside the sass-plugin
- **Principles**: P-B1, P-B2, P-B3, P-F4 · **Env**: bootstrap
- **Signals**: 👍0 💬16 · closed
- **Excerpt**: ## Summary I'm trying to use the `gatsby-plugin-global-styles` to re-order the css link tags so they come __before__ the style tag added by `gatsby-plugin-typography`, but it seems they don't play along well (or maybe I'm missing something?). I followed the instructions but when I import the `scss` file, something in gatsby (I couldn't find out what yet) just injects them to the bottom of the header tag, always. It doesn't matter if I use this plugin or try to re-order the typography header component in `gatsby-ssr.js`. So, my sass styles are loaded lastly (in this case `Bootstrap 4`) and…

### CASE-7095 · [v2] CSS (via Sass) inlined in different locations between develop and build
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬14 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description Using `typography.js` and `gatsby-plugin-sass` (and associated libraries of each), the css is "blobbed" after `typography` in develop and inlined before `typography` in build. This means the look of the website changes from develop to build. Images below (obviously more drastic with more css being moved around). develop: ![develop]([link]) build: ![build]([link]) ### Steps to reproduce [Super basic repro available here.]([link]) ### Expected result The look website end result in v1 matched what I am seeing in develop in v2 so I would expect that `typography` would be listed in…

### CASE-7096 · gatsby-plugin-typography breaks site in IE11?
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed · labels: type: bug/stale?/status: awaiting author response
- **Excerpt**: The default Gatsby starter works great in IE11. However, after installing gatsby-plugin-typography I get the following error in the browser console and the app fails: > Object doesn't support property or method 'assign' The same error occurs for starters that use typography.js by default like the [blog starter]([link] framework]-starter-blog). I even get this error in the console when I visit the Gatsby documentation site (which presumably uses typography.js). I've tried adding babel-polyfill using [this method]([link] framework][ref][ref]) but this didn't seem to make a difference. In any…

### CASE-7099 · gatsby develop throws error on Gatsby.js Tutorial Part Two
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: After I successfully finished Part One of the Tutorial, I got stuck at the first steps of Part Two. First, I executed `gatsby new tutorial-part-two [link] framework]-starter-hello-world ` and `npm install --save gatsby-plugin-typography`, then I created the `gatsby-config.js` as it is instructed in the tutorial. After that I tried to execute `gatsby develop` but it didn't work. This is the error stacktrace: ```` tutorial-part-two ⍉ ➜ gatsby develop module.js:472 throw err; ^ Error: Cannot find module 'gatsby/dist/utils/develop' at Function.Module._resolveFilename (module.js:470:15) at…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7053 · 404 page keeps a stale location.pathname from build time
- **Principles**: P-F4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬15 · closed · labels: type: bug
- **Excerpt**: ## Description On Gatsby sites, navigating directly to a nonexistant page results in a `location` object with stale values. The location isn't rehydrated, and retains its values from build time. For instance, `location.pathname` will always read `404.html`. This is not an issue when clicking a bad internal link / using client-side routing. It only occurs on direct navigation. ### Steps to reproduce - Navigate directly to [link] - Inspect the link under "Check if the link works on my old website" Source for this page: [link] ### Expected result - "old website" should link to…

### CASE-7056 · Gatsby build failing if you reference navigator at all during SSR: "navigator" is not available during server side rendering
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍5 💬15 · closed · labels: type: upstream
- **Excerpt**: ## Description It looks like the latest version of gatsby (**2.17.7**) is throwing errors during build time if you reference "navigator" at all (regardless of usage). I have been using gatsby and aws-amplify together for a while now, but I recently started receiving build errors after upgrading gatsby. ### Steps to reproduce I would include a repository, but I would have to expose my AWS credentials in order for anyone to actually be able to run the code. I believe this issue is pretty straight forward and not aws-amplify specific, but please correct me if I'm wrong! To reproduce this error:…

### CASE-7077 · [gatsby-plugin-styled-components]: Plugin not working properly with styled components v5 with SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬14 · closed · labels: type: bug/topic: plugins-styling
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Using the newest version of `[email]` with `[email]` (any `5.x` version) renders no CSS created with `createGlobalStyles` to the `<head>`. It works only with JavaScript enabled. I upgraded from `[email]` with the same plugin version and it stopped…

### CASE-7080 · styled-components v5 global styles is not inlined
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍4 💬14 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Looks like styled-components v5 global styles injection is not working with gatsby 2.18.12 and gatsby-plugin-styled-components 3.1.17. I have same gatsby-browser and gatsby-ssr ```jsx import React from "react" import { createGlobalStyle } from…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7057 · weird issue with React state update on unmounted component (in GatsbyReporter?)
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬15 · closed · labels: stale?
- **Excerpt**: ## Description install and setup `[email]` on a new site. `gatsby-develop` and get this: ``` success open and validate gatsby-configs - 0.094 s Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your app lication. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method. in GatsbyReporter error Command failed with exit code 1. info Visit [link] for documentation about this command. ``` no idea what causes it, `DEBUG=* gatsby develop` shows nothing of note. why does a warning cause error with exit…

### CASE-7093 · wrapPageElement doesn't seem to work as expected in V2
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬14 · closed · labels: type: bug
- **Excerpt**: ## Description I use wrapPageElement API hook as described in the docs to have persistent page elements. ### Steps to reproduce My gatsby-browser.js looks like this: ```js const React = require("react"); const Layout = require("components/Layout").default; exports.wrapPageElement = ({ element, props }) => ( <Layout {...props}>{element}</Layout> ); ``` Layout.js extends PureComponent and implements a PoseGroup in its render method, while keeping the main navigation and footer persistent. ### Expected result Page content mounts / unmounts as a child of the PoseGroup, main navigation and footer…

