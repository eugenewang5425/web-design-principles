# Case Chunk 063 — Round 63

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7201 · [using-page-transitions] Scrolls to top before animating
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬11 · closed · labels: type: bug/status: confirmed
- **Excerpt**: On the `using-page-transitions` example, the page scrolls to top just before fade-out animations starts. If you have a long page, and click a link to trigger a route change, it immediately scrolls to top of the current page, then the fade-out animation begins, then the new page loads in. I see the `gatsby-react-router-scroll` is a gatsby dependency - is there a way to pass a timeout so you don't get that page flash? This behaviour can be checked here [link]

### CASE-7202 · source and transform nodes never ends for me.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬11 · closed · labels: type: bug
- **Excerpt**: Hello - [link] framework]/tree/master/www I am setting up this directory locally. I am using these 2 commands. yarn install --> it runs successfully yarn run develop --> but it stucks at "source and transform nodes" , it never ends for me. i have been waiting for long hours.

### CASE-7207 · [gatsby-source-medium] TypeError: Cannot read property 'filter' of undefined
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬11 · closed · labels: type: bug
- **Excerpt**: I'm trying to use `gatsby-source-medium` with a user account. Publications work fine, but I get an error with user accounts. The API response doesn't seem to possess `payload.posts`, which `gatsby-source-medium` expects. `gatsby develop` outputs the following: ```sh success delete html files from previous builds — 0.012 s success open and validate gatsby-config.js — 0.005 s success copy gatsby files — 0.024 s success onPreBootstrap — 0.018 s ⠄ source and transform nodesTypeError: Cannot read property 'filter' of undefined at…

### CASE-7211 · Node.js v18 support
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When trying to run gatsby with Node.js 18 which is now current and will later this year transform into a new LTS release it get following error... Is looks for me like the problem is "lmdb" dependency but from [lmdb-js issue]([link]) the…

### CASE-7223 · Callback already called
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: duplicate
- **Excerpt**: ## Description I cannot build my gatsby page. I get: ```bash $ yarn build yarn run v1.22.4 $ gatsby build success open and validate gatsby-configs - 0.082s success load plugins - 3.474s success onPreInit - 0.055s success delete html and css files from previous builds - 0.015s success initialize cache - 0.018s success copy gatsby files - 0.024s success onPreBootstrap - 0.006s success createSchemaCustomization - 0.009s success Checking for changed pages - 0.002s success source and transform nodes - 0.200s success building schema - 0.290s success createPages - 0.003s success Checking for changed…

### CASE-7225 · ERROR [ref] GRAPHQL: Type inference not working for gatsby >= 2.21.3
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed/topic: GraphQL/status: needs core review
- **Excerpt**: ## Description After updating to gatsby version `>=2.21.3`, `gatsby develop` throws many errors of type `ERROR [ref] GRAPHQL`: There was an error in your GraphQL query during step "extract queries from components". Interestingly, `gatbsy build` works as expected. ### Steps to reproduce ``` $ git clone -b issue-gatsby-23633 [link] $ cd gatsby-starter-try-ghost $ yarn $ gatsby develop ``` Error log starting here: ``` success run queries - 0.717s - 28/28 39.08/s warn Plugin `gatsby-transformer-rehype` tried to define the GraphQL type ERROR [ref] GRAPHQL There was an error in your GraphQL query:…

### CASE-7231 · babel-preset-gatsby not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬10 · closed · labels: status: needs reproduction
- **Excerpt**: When trying to build I get: ``` ⟩ ./node_modules/.bin/gatsby build success delete html and css files from previous builds — 0.018 s success open and validate gatsby-config — 0.008 s success copy gatsby files — 0.016 s success onPreBootstrap — 0.236 s success source and transform nodes — 0.158 s success building schema — 0.417 s success createLayouts — 0.013 s success createPages — 0.052 s success createPagesStatefully — 0.018 s success onPreExtractQueries — 0.001 s success update schema — 0.156 s success extract queries from components — 0.067 s success run graphql queries — 0.267 s success…

### CASE-7247 · Fetching wordpress__wp_me, wordpress__wp_settings, wordpress__acf_options,
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: maintenance
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description Getting the following errors while fetching, there are several topics about this subject but none of them come up with a right answer. What can I do to remove these errors while fetching? `=== [ Fetching wordpress__wp_me ] === [link] ⠈ source and transform nodesThe server response was "401 Unauthorized" Inner exception message : "Je bent…

### CASE-7251 · [gatsby-transformer-sqip] - current state & todo
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬10 · closed · labels: stale?
- **Excerpt**: This issue gathers all information about the current state of the [SQIP]([link]) implementation in Gatsby. It is a follow up to [ref]. **First of all:** It got merged, a very first version is published and can already be used in your website. 🎉 Wanna see it in action? [Click here for the demo]([link]) ## What is SQIP? It is a svg based implementation of low quality image previews ([LQIP]([link])) > What? I understand nothing An algorithm calculates a primitive representation of your images based on simple shapes like circles, ellipses, triangles and more. These will be embedded in your…

### CASE-7254 · gatsby-plugin-remark throws errors
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Hi! I've been trying Gatsby for my new static website/blog and I can't make the remark plugin working 😞 I've tried to compile the ```using-remark``` example but it seems broken. Here is the output of the generation with the lastest gatsby version available on npm: (the first build loop infinitily at ```run graphql queries``` and after <ctrl-c> and relaunching, it gives me this error). ``` ➜ npm run build > [email] build /tmp/gatsby/examples/using-remark > gatsby build success open and validate gatsby-config.js — 0.004 s success copy gatsby files — 0.035 s success source and transform nodes —…

### CASE-7272 · "Found X changed pages" on every build even if files not changing, triggering query rebuild. Getting all the time `verbose Found ${totalPages} changed pages` when using `gatsby-transformer-remark` plugin
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: type: bug/stale?/status: needs more info
- **Excerpt**: ## Description I see this all the time I run `gatsby build`. ![image]([link]) ### Steps to reproduce - Install a brand new gatsby with no extra features - Install `gatsby-transformer-remark` gatsby-config.js ``` module.exports = { plugins: [ { resolve: `gatsby-transformer-remark`, options: {}, }, ], } ``` gatsby-node.js ``` exports.createPages = async ({actions, graphql}) => { const {createPage} = actions createPage({ path: `/404/`, component: require.resolve(`./ErrorPage.tsx`), context: {}, }) } ``` ErrorPage.tsx ``` import * as React from 'react' const NotFound = () => { return…

### CASE-7274 · (gatsby-transformer-remark): Cache - transform changes are not refreshed if content isn't changed
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: type: bug/stale?/status: confirmed/topic: DX
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When using `gatsby-remark-embed-snippet` (or any other plugin that read other file as remark transform) changes are not shown. Not even after restart. I have to clean the cache or change the related `md` file where I want to see these changes. ### Steps…

### CASE-7277 · [gatsby-image] Placeholder flicker/transition when image is cached by browser
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍4 💬9 · closed · labels: type: bug/topic: media
- **Excerpt**: ## Description Using a placeholder such as base64 is nice to have for first retrieval of assets. However when they are cached this results in: - Brief flicker during hydration due to inlined placeholder. - When navigating to a page with an image if no hit within the internal `gatsby-image` cache: - Brief flicker for lazy loading via Intersection Observer. - Transition triggered for native lazy loading. It's a minor UX issue, but it would be nice to smooth these out. ## Examples ![base64_flash_bug]([link]) [link] ## Related [link] [link] framework][ref] [link] framework][ref][ref] [link]…

### CASE-7279 · [gatsby-plugin-mdx] timeToRead is wrong for Chinese/Japanese texts
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: stale?/type: feature or enhancement
- **Excerpt**: ## Summary There is a great PR handling `timeToRead` for Chinese/Japanese input in PR [ref] on `gatsby-transformer-remark`. However, this PR does not support mdx. It would be great `gatsby-plugin-mdx` handle Chines/Japanese similarly. ### Basic Example An example similar to [ref], but using starter with mdx. ### Motivation This feature provides more accurate `timeToRead` field for Chinese/Japanese body for project using mdx.

### CASE-7289 · gatsby-transformer-react-docgen fails on hot reloads
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description The development build keeps crashing when changes are saved in components that seem to have an mdx file associated with it, or at least that seems to be when it fails the most. When the build goes to rebuild, it returns the following error (detailed…

### CASE-7294 · emacs autosave files cause builds to fail
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: stale?
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description `gatsby build` will hang indefinitely at the "Source and transform nodes" step when there is an emacs autosave file for a md file imported using gatsby-source-filesystem. Emacs autosave files have the same filename as the edited file but prefixed with…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7203 · gatsby-plugin-sharp doesn't work (v2.0rc0)
- **Principles**: P-A3, P-H1 · **Env**: edge, macos
- **Signals**: 👍1 💬11 · closed · labels: stale?/status: needs more info
- **Excerpt**: ## Description ``` GraphQL Error Unknown field `childImageSharp` on type `File` ``` The imageSharp attributes are not showing up in my schema even though the plugin is defined in `gatsby-config.js` and is loaded, this query shows the plugin: ``` query { allSitePlugin { edges { node { id name } } } } ``` ### Steps to reproduce Created a new project with v2.0rc0 and the 2.0 starter. ### Environment System: OS: macOS 10.14 CPU: x64 Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz Shell: 2.3.1 - /usr/local/bin/fish Binaries: Node: 10.3.0 - /usr/local/bin/node Yarn: 1.9.4 - ~/.yarn/bin/yarn npm: 6.3.0 -…

### CASE-7205 · [source-contentful] Issue with multiple asset references
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ## Description I have a field in Contentful that references multiple assets. Querying the data with graphQL works fine. My first render displays the assets correctly on the page. The issue: Once I trigger a rerender of the react component, the array that contained the images is empty! So the page shows the images. After navigating to a different page and back (i.e. the router rerenders the page with the images), the images are gone. If I log the array, it contains the images only on first render (I have to stringify the array to log it). Any idea how to solve this? It looks like a bug to me.…

### CASE-7206 · [gatsby-source-contentful] Markdown editor image link formatting issue
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Gatsby: 1.8.11 Node: 8.9.1 OS: MacOS High Sierra This is a strange bug and the errors in my terminal were not helpful at all. I finally found the issue to be the way links are used within Contentful's markdown editor. I received the error if links are formatted as normal Markdown links. `[This is a link]([link])` But I did not get the error if links are reference style `[This is a link][1]` `[1]: [link] **Error in console** ``` success delete html files from previous builds — 0.014 s success open and validate gatsby-config.js — 0.006 s success copy gatsby files — 0.102 s success…

### CASE-7209 · framework-[contenthash].js includes react-dom-server when using gatsby-plugin-image
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using `GatsbyImage` from `gatsby-plugin-image`, the `framework-[contenthash].js` is getting bloated by including `react-dom/server`: ![Screenshot 2022-12-16 at 12 26 25]([link]) This comes from a change at [link] framework][ref] from…

### CASE-7210 · Generating development JavaScript bundle failed (WebPack & gatsby-plugin-image)
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When I run `gatsby develop` I get the following error message: ``` ERROR [ref] WEBPACK Generating development JavaScript bundle failed No element indexed by 0 File: node_modules/gatsby-plugin-image/dist/gatsby-image.browser.modern.js…

### CASE-7212 · gatsby-source-contentful Cannot read properties of null (reading 'url')
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed/topic: source-contentful/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I've run into another breaking issue with gatsby-source-contentful. It seems to relate to the changes made for the Image CDN beta and likely is related to our locale setup. I've created a reproduction. The Contentful configuration is…

### CASE-7220 · Gatsby Plugin Manifest lacking clarity -> causing error
- **Principles**: P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍0 💬10 · closed · labels: type: documentation/stale?/status: needs more info
- **Excerpt**: ## Summary The [gatsby-manifest-plugin]([link]) documentation for generating icons is unclear. ``` icon: `src/images/favion.svg`, // This path is relative to the root of the site. icons: [ { src: `src/images/favicon--short.svg`, sizes: `192x192`, type: `image/png`, }, ], ``` I have added the above code to the `gatsby-config.js`. However when running `gatsby develop` or `gatsby build` the terminal throws the following error. ``` error "gatsby-plugin-manifest" threw an error while running the onPostBootstrap lifecycle: ENOENT: no such file or directory, mkdir 'public/src/images' 303 | 304 | if…

### CASE-7224 · XMLHttpRequest CORS SOCKET.IO
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed · labels: type: bug/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description It appears this messages in dev tools: ![image]([link]) Access to XMLHttpRequest at '[link] from origin '[link] has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the…

### CASE-7227 · How would I take an image from Cloudinary, to Netlify CMS, into a gatsby-image element?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: stale?/topic: media
- **Excerpt**: Hi! Thanks in advance for your attention to this novice question. ## Summary I'm fairly new to Gatsby and web development as a whole, and probably just need to talk through a problem I'm having trouble with. What I'm trying to accomplish is to make use of `gatsby-image` with images that are stored in Cloudinary, that are referenced in markdown files created by Netlify CMS. I'm using `gatsby-image` in order to take advantage of the lazy loading capabilities, Netlify CMS because I'm interested in using it to make a blog, portfolio, or storefront page, and then Cloudinary because it's presented…

### CASE-7229 · Inline images from markdown are showing blur.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: ## Description Hey folks, I recently moved my blog to Gatsby, and here I am using Netlify as my CMS, the images which I added via Netlify CMS inline in Markdown aren't showing up properly, instead, it is appearing blurred the live URL of the same is here [Demo]([link]) ### Steps to reproduce Here I am attaching my repo to reproduce this issue **[REPO LINK]([link])** 1. Clone this repo 2. Install the dependencies and gatsby develop 3. Feel free to fork the repo for testing with Netlify CMS (for testing). ### Expected result The images should appear clear in the blog detail page which is…

### CASE-7230 · gatsby develop ERROR [ref] PLUGIN ERROR [ref] WEBPACK ERROR [ref] GRAPHQL
- **Principles**: P-A3, P-H1, P-F4, P-G4, P-E3 · **Env**: webpack
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: ## Description ERROR [ref] PLUGIN Error: Input file contains unsupported image format ERROR Failed to retrieve metadata from image /Users/alexey.ivanov/Documents/gatsby-wordpress/src/images/gatsby-astronaut.png Input file contains unsupported image format ERROR [ref] WEBPACK Generating SSR bundle failed [BABEL] /Users/alexey.ivanov/Documents/gatsby-wordpress/.cache/develop-static-entry.js: No "exports" main resolved in /Users/alexey.ivanov/Documents/gatsby-wordpress/node_modules/@user/helper-compilation-targets/package.json ### Steps to reproduce gatsby develop ### Expected result Generated…

### CASE-7232 · Using gatsby-plugin-mdx with gatsby-remark-images and gatsby-remark-autolink-headers doesn't work
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description I have read the issue described in [ref] but I seem to have a slightly different use case, and can't get the workaround to work for myself. Basically, the site has switched from MD to MDX, but when I use the workaround of renaming `gatsbyRemarkPlugins` as just `plugins`, the autolink headers vanish and don't appear when you hover on a title and images do not load at all. If I leave the plugins section named as `gatsbyRemarkPlugins`, images load twice, once blurry and once properly and the auto link icons show permanently next to headers, and scroll incorrectly when you click…

### CASE-7235 · [gatsby-remark-images] Blurred image does not disappear on initial page load in development mode
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description [gatsby-remark-images] does not hide the blurred image on initial page load in development mode ### Steps to reproduce Demo: - Repo: [link] - Netlify: [link] (note that the bug is not reproducible here as it only affects development mode) Note that this bug only appears in development mode (`gatsby develop`), not in production (`gatsby build && gatsby serve`) 1. Clone the repo and run `gatsby develop` 2. Click on "Hello world" to view the test blog post 3. Note that when the image is loaded, the blurred image behind it disappears with opacity set to 0 (as expected) 4. Refresh…

### CASE-7237 · Memory leak whilst generating image thumbnails in a Circle CI Build
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍15 💬10 · closed · labels: type: bug/stale?
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description In CircleCI during the build process while generating image thumbnails, the console "freezes" and after some time a memory leak message is displayed: ``` UNHANDLED EXCEPTION spawn ENOMEM ``` My main suspicion is that something is not respecting the…

### CASE-7240 · Querying GraphQL in 404 page not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I'm getting error when running `gatsby build` for a second time (with cache present). It happens only when I query image in 404 page. ### Steps to reproduce 1. Fork this sandbox [link] where I replaced `404.js` page content with content from…

### CASE-7241 · Images are broken in build version and console has errors like 'Missing resources for /'
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍10 💬10 · closed · labels: stale?
- **Excerpt**: On [link] everything works properly but after deploy build version all images just displays with blur effect and blur doesn't disappear at all <img width="467" alt="blur" src="[link]> Also console has these errors('Missing resources'): <img width="295" alt="errors" src="[link]> <!-- Provide as much useful information as you can --> ### Environment (if relevant) System: OS: macOS 10.14.4 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 8.12.0 - /usr/local/bin/node Yarn: 1.13.0 - /usr/local/bin/yarn npm: 6.9.0 - /usr/local/bin/npm Languages:…

### CASE-7242 · childImageSharp is null when using allMarkdownRemark filter query
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I have a repo that has a JSON file with author data for a blog I am making inside a folder `/src/data`: ```json [ { "id": "crutchcorn", "name": "Corbin Crutchley", "description": "Is a person who exists", "profileImg": "./crutchcorn.png" } ] ``` Inside that same folder exists the file `crutchcorn.png` I am mapping this author data to the frontmatter by adding this into the `gatsby-config.js`: ``` mapping: { "MarkdownRemark.frontmatter.author": `AuthorsJson`, } ``` I noticed that when I was using `filter` query on `allMarkdownRemark`, I am not able to query the author profile…

### CASE-7244 · [gatsby-source-shopify] product image localFile is null
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed · labels: type: bug/help wanted/stale?/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I have a shopify store with approximately 100 products and associated images. When running `npm run build` I am not seeing any errors, though the request is taking a while. However, when I explore my data in GraphiQL, some of the `localFile` nodes are…

### CASE-7252 · acf gallery type
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Hi! First of all thanks for you hard work, this is really awesome! 👍 I have encountered a bug/problem... I want to query with graphql an acf custom field gallery from a custom post type but the query contains only a boolean and no img sources. On wp side it must be good, because in json I can find the attributes of each images so it must be something wrong when gatsby fetches the data probably. With single img it works perfectly so till I can fix it I'm using 3 fields. The problem is that in graphql editor it doesn't see any attributes of the gallery type. Thank you for your help in advance!…

### CASE-7253 · [gatsby-source-wordpress] getting images from wordpress.com
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬10 · closed
- **Excerpt**: Is it possible without ACF? With wordpress.com, on the free tier, no plugins can be installed making it not possible to use ACF (correct me if I'm wrong). Specifically looking to grab the `featured_image` url opposed to the id. Wondering if a PR is needed to add `_embed` to the wordpress api [example here]([link]) or if I'm missing something.

### CASE-7256 · gatsby-plugin-image – Failed prop type: The prop `alt` is marked as required in `MainImage`, but its value is `undefined`.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description During the gatsby build, I see odd warning messages about missing `alt` tags with no pointer to which image(s) are concerned. ```TSX Warning: Failed prop type: The prop `alt` is marked as required in `MainImage`, but its value is…

### CASE-7260 · `gatsby-image-plugin` race condition prevents placeholder img from fading out when full-res img loads before DOM finishes parsing
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description There is a race condition between the script in charge of hiding placeholder images when full-size images are fully loaded ([this one]([link] framework]/blob/master/packages/gatsby-plugin-image/src/gatsby-ssr.tsx#L74-L110)) and pages that…

### CASE-7262 · Wrong image loads during after hard refresh in production build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · open · labels: type: bug/status: confirmed/topic: core
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description In production builds of my site, on a single, specific blog post, on initial page loads (and after a hard refresh), the wrong image is loaded. Here's a gif of that in action: [link] On each refresh in the above gif, I wait for the page to…

### CASE-7263 · [gatsby-plugin-image] "Cannot read properties of undefined (reading 'originalPositionFor')"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍7 💬9 · closed · labels: type: bug/type: upstream
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description After updating babel today, I am now getting a failed development build when running `gatsby develop` I experienced this on 2 different projects. However, `gatsby build` appears to work without errors. The following 2 packages got updated…

### CASE-7265 · [gatsby-source-wordpress] When sourcing images from WP, if the media library title contains a : it will fail on the build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: type: bug/status: needs reproduction/topic: source-wordpress
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using WordPress and GatsbyJS in combination, if your project sources Media files from the WordPress media library, if any of those files contains a colon : in the title field, it will not be able to build and will fail. ### Reproduction Link I can't share a…

### CASE-7267 · bundle failed trying to import fully specified paths
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/topic: webpack/babel
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When using fully specified paths in imports e.g export { quiz as jsFunctions } from './js-functions.js'; gatsby send this error message ![image]([link]) ### Steps to reproduce 1. add `type: module` to package.json 2. create an import with fully specified…

### CASE-7268 · Styles with id="gatsby-global-css" should be last included in the DOM in production
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description In development all my global styles & scss modules have greatest order over native gatsby styles from vendor plugins. For example I use `gatsby-plugin-image` and that have own styles like `.gatsby-image-wrapper` ### Steps to reproduce ```jsx import { StaticImage } from 'gatsby-plugin-image'; import * as styles from './file.modules.scss'; // ... <StaticImage className={styles.imgLeft} placeholder="blurred" src="../../../assets/img/BooksSection/book.png" alt="" /> ``` ```scss .imgLeft { position: absolute; } ``` ### Expected result In development: Rendered layout have two…

### CASE-7269 · [gatsby-source-contentful] gatsby-plugin-image should be a peerDep
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/topic: source-contentful
- **Excerpt**: Hello! On this documentation page: [link] framework]/tree/master/packages/gatsby-source-contentful#using-the-new-gatsby-image-plugin The documentation currently states: > 1. Install the plugins: > `npm install gatsby-plugin-image gatsby-plugin-sharp` But `gatsby-plugin-image` is already a dependency of `gatsby-source-contentful`, and it works fine without the redundant install. I didn't open a Pull Request because I'm not sure if this is intended or not. Thanks

### CASE-7273 · Netlifycms Gatsby - Field "image" must not have a selection since type "String" has no subfields.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬9 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> I have spent all day trying to find the answer to this, been through every github help and just could not find the answer and I know its something very simple. ## Description When making a change to the .md file I see this error > error There was an error in your…

### CASE-7275 · GitHub Issues: missing option to reopen my issues - GatsbyjsBot closing Issues without chance to reopen
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/topic: automation
- **Excerpt**: ## Description I am not able to reopen issues, GatsbyBot closing issues, but there is no chance to reopen them. ### Steps to reproduce [link] framework][ref] > Please keep in mind that I’m only a robot, so if I’ve closed this issue in error, I’m HUMAN_EMOTION_SORRY. Please feel free to reopen this issue or create a new one if you need anything else. ### Expected result no reopen possible ### Actual result missing reopen button: <img width="955" alt="Bildschirmfoto 2020-08-19 um 16 56 45" src="[link]> ### Environment - on GitHub Issues

### CASE-7276 · [gatsby-plugin-offline] Embedding Greenhouse
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/topic: plugins-PWA
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Per [link] we embedded a Greenhouse.io script `<script src="[link]></script>` on our site and it loads fine the first time and the script then attaches an iframe to the target `<div id="grnhse_app"></div>` correctly. A subsequent reload does not execute…

### CASE-7281 · graphql query for GatsbyContentfulFluid does not work in gatsby-node.js
- **Principles**: P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: needs reproduction/topic: GraphQL
- **Excerpt**: ## Description Have a portfolio site with Contentful + Gatsby. I'm trying to replace regular img's with gatsby-image's fluid Img. I have succesfully done this on my index.js landing page with a query that looks like this: ``` const data = useStaticQuery(graphql` query { allContentfulWork(sort: { fields: publishedDate, order: DESC }) { edges { node { title slug tags featured publishedDate(formatString: "YYYY") heroImage { fluid(maxWidth: 1800) { ...GatsbyContentfulFluid } title file { url contentType } } } } } } `) ``` However, when I add that fluid query in gatsby-node.js, where I generate…

### CASE-7283 · bug(blogs): blog posts are not visible
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description blogposts LA Days higher than Video 7 are not visible in: - [link] and in - [link] but i can open them direct: - [link] Video 10 - [link] Video 9 and others ### Steps to reproduce open: - [link] - [link] ### Expected result Blogpost should be visible ### Actual result not visible ### Environment Run `gatsby info --clipboard` in your project directory and paste the output here.

### CASE-7288 · Bug in Gatsby preview when a new build is deployed
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: status: needs more info
- **Excerpt**: I reported to @user vida email and was directed here, as it's suspected to be a Gatsby OSS issue. ## Description When using Gatsby Preview with a deployed gatsby application the page loads fine and content is updated as expected. When a new build is pushed to Gatsby Preview, the page breaks. Perhaps this is reproducible outside of Gatsby Preview, but I'm not sure how to go about it (it doesn't happen in development mode, presumably b/c react's hot reloading handles fetching new javascript) <img width="1329" alt="gatsby-preview" src="[link]> ### Steps to reproduce 1. Set up a Gatsby Preview…

### CASE-7291 · The first gatsby-image in a Swiper slideshow is always blurred after first loop
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: status: needs reproduction/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I have a [Swiper]([link]) slideshow filled with gatsby-images on a website. On the initial load, the first image is blurred for a short while and then gets cleared up when it's fully loaded. The slideshow proceeds normally through the rest of the slides…

### CASE-7292 · All images are being loaded from previous page on route change
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Having a strange issue where all images are being loaded from a blog index page when visiting the blog post page. ### Steps to reproduce - navigate to [link] - open your inspector - click on the first blog article - see all images from previous page being…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7204 · Gatsby websites auto scroll back to the top
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: type: bug/help wanted/stale?
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description When a Gatsby website loads, the user can happily start scrolling. However, after some time has elapsed the page scrolls back up to the top. ### Steps to reproduce This can be reproduced at [link] or [link] by going to the website with a throttled network connection and scrolling down before render() is called. ### Expected result It should…

### CASE-7249 · gatsby develop causes MaxListenersExceededWarning resource drain
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description when I run `gatsby develop`, after editing a few files and having it recompile I eventually get the error. ``` (node:47) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 drain listeners added. Use emitter.setMaxListeners() to increase limit ``` ### Steps to reproduce On my machine in my project, I just run develop…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7208 · Build fails when error thrown inside Suspense boundary
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬10 · open · labels: type: bug/status: confirmed
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I am trying to use the following pattern from [the React docs]( [link]) to opt out of server rendering for a particular component ```jsx <Suspense fallback={<Loading />}> <Chat /> </Suspense> function Chat() { if (typeof window ===…

### CASE-7217 · Gatsby v3 - SSR bundle failed - build issues, using Yarn v2
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍4 💬10 · closed · labels: type: bug
- **Excerpt**: ## Description A new site from `gatsby new` doesn't work with Yarn. I noticed this on migrating an older site from Gatsby v2 to v3 and wanted to test it from a clean slate. Sourced a new site from the automated build via cli and started it up with `npm run develop` just fine. Added yarn (v2), ran it and tried to start up the same minimal site with `yarn clean && yarn develop`. Webpack errors resulted. This is similar to the other tests that I've done with two other sites that use yarn instead of npm. ### Steps to reproduce `gatsby new` `cd my-gatsby-site && npm run develop` `yarn set version…

### CASE-7219 · Can't resolve '@user/router' in 'gatsby-link' and 'gatsby-react-router-scroll'
- **Principles**: P-F4 · **Env**: react, webpack
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: ## Description Migrated to gatsby 3, now running into this: ``` ERROR [ref] WEBPACK Generating development SSR bundle failed Can't resolve '@user/router' in '/home/christoph/projects/codepunkt.de/node_modules/gatsby-link' If you're trying to use a package make sure that '@user/router' is installed. If you're trying to use a local file make sure that the path is correct. File: node_modules/gatsby-link/index.js:22:14 ERROR [ref] WEBPACK Generating development SSR bundle failed Can't resolve '@user/router' in '/home/christoph/projects/codepunkt.de/node_modules/gatsby-react-router-scroll' If…

### CASE-7255 · ERROR [ref] WEBPACK: Generating SSR bundle failed
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍6 💬9 · open · labels: type: bug/status: triage needed
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hello, I have a Gatsby project that when I import the library @user/cma-client-browser, it gives the following error during the build phase (gatsby build). The original project is complex, but I was able to reproduce the error in the…

### CASE-7257 · SSR issue with React.useId() in React 18 - mismatch between SSR and client versions.
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍8 💬9 · open · labels: type: bug/status: confirmed
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description React 18's <a href="[link]>React.useId()</a> returns a different value in the server vs. client rendered versions. This requires using React 18 and having the `DEV_SSR: true` flag enabled. I believe when this happens enough times it might…

### CASE-7258 · gatsby hydration bug on dynamic route
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · open · labels: type: bug/status: confirmed/topic: frontend
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When Gatsby SSR is activated, and chakra provider is wrapping the root element, there is a hydration issue occurring, but only on dynamic pages. so, `pages/product.js` is fine with on hydration issue, but `pages/product/[id].js` receives a…

### CASE-7259 · SSR: Restricting Access to Specific Pages Based on Authenticated User
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍2 💬9 · open · labels: help wanted/type: documentation/not stale
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report. Please post those things in GitHub Discussions: [link] framework]/discussions ### Summary @user asked for this issue: [link] framework][ref][ref] --- A guide about how to perform simple authentication and authorization in Server-Side Rendering (SSR) using `getServerData` would be great! I would suggest that it include the following: 1. A page and related…

### CASE-7261 · pathPrefix and SSR@user does not work together
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed/topic: render-mode
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using the Gatsby v4 SSR@user feature of `gatsby serve` the usage of pathPrefix makes the runtime fail to prefetch urls. In `packages/gatsby/cache-dir/loader.js` there's a line: ``` return this.doPrefetch(findPath(pagePath)).then(() =>…

### CASE-7296 · gatsby-cli has react in package.json dependencies
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍1 💬9 · closed · labels: type: bug/good first issue
- **Excerpt**: ## Description `gatsby-cli`'s `package.json` has `react` in `dependencies`. It makes all kind of unwanted behavior in monorepo setups. For example: If you have `react` installed in the parent directory (`./`) and gatsby site installed by `gatsby new` command on a child directory (`./site`) directory, it creates a nasty bug. If you use hooks in your application, this error pops up: ``` Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such…

### CASE-7297 · [idea] linter to warn against using Suspense in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: ## Description build-only bug when using Suspense in gatsby. i used it, got no warning, waited for build, then got this in my netlify logs: [link] ### Steps to reproduce [link] ### Expected result just warn me in some sort of lint rule that suspense is not allowed in Gatsby pages? i'm sure someone's already written this?

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7213 · [gatsby-plugin-preload-fonts] Disable cache of puppeteer
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/topic: frontend
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When I run the script `gatsby-preload-fonts`, fonts that are not actually used in each pages are also added to the list. Generated `font-preload-cache.json` is below. ```jsonc { "timestamp": 1643635255474, "hash":…

### CASE-7226 · Schema customization resolved data are not present in page component
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: # Description I have a site using schema customization for extending the types: * [link] My use case is that I want a backreference from `kontent_item_category` to `kontent_item_article` to be able to show how many articles are in the category. ### Steps to reproduce If you check Gatsby preview on site: [link] The result returns (N/A means the data in backreference are not present): ``` design-inspiration (N/A) gatsby (N/A) typography (N/A) ``` But if you try to [run the query on the same environment vie…

### CASE-7266 · [gatsby-plugin-preload-fonts] Duplicate fonts - cache doesn’t seem to clear when static hash changes
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/topic: plugins
- **Excerpt**: ## Description I recently noticed that [my website]([link]) is trying to preload a _ton_ of redundant (sometimes non-existant) fonts. My `font-preload-cache.json` has duplicate font entries with different hashes on the same page; for instance: ```json "/blog/3/": { "/static/geomanist-medium-webfont-55687bb88819a897b599bb150b1fddcf.woff2": true, "/static/geomanist-medium-italic-webfont-a55f8f620cbd5804be1114299c1e9fd1.woff2": true, "/static/geomanist-regular-webfont-a35649b1d4c9738de84be469ebdf3b2e.woff2": true, < Huge base64 woff blob removed for readability >…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7214 · Images from Gutenberg Image blocks not displaying on Safari in production mode
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, react
- **Signals**: 👍3 💬10 · closed · labels: type: bug/topic: source-wordpress/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I am sourcing pages from my WordPress backend using `gatsby-source-wordpress`. I'm including page content by including ``` <section dangerouslySetInnerHTML={{ __html: getContent(props.data, props.pageTitle) }} ></section> ``` in my React…

### CASE-7215 · gatsby-plugin-mdx randomly inserts non breaking spaces
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, mobile
- **Signals**: 👍0 💬10 · closed · labels: type: bug/status: needs core review/topic: remark/mdx
- **Excerpt**: ## Description Some lines (text) are not properly broken up on when using MDX. This is especially annoying on mobile, where the lines will run out of the screen. When looking into the generated html, these lines have `&nbsp;` instead of regular spaces. I can't find anything odd or specific in our markdown that could trigger this. ### Steps to reproduce 1. Clone demo: [[link]]([link]) 2. Install and run develop 3. Browse to article "Hoeveel btw zit er op iZettle diensten?" (top of page) 4. Search for "Je zou misschien denken" 5. Open devtools in Chrome (or equivalent in other browser) and view…

### CASE-7218 · gatsby-plugin-preact with Gatsby 3 incorrectly renders "<meta http-equiv>"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react
- **Signals**: 👍2 💬10 · closed · labels: type: bug/type: upstream/topic: plugins
- **Excerpt**: ## Description Gatsby 2 (with and without preact), and Gatsby 3 (without preact) all correctly generate: ```html <meta http-equiv="x-ua-compatible" content="ie=edge"> ``` in the head, but Gatsby 3 with Preact (and preact plugin 5.0) instead generate: ```html <meta httpequiv="x-ua-compatible" content="ie=edge"> ``` note `httpequiv` instead of `http-equiv`. ### Steps to reproduce Minimal repro: 1. `npm init gatsby` with basic settings 2. `npm install gatsby-plugin-preact preact preact-render-to-string` 3. Add `"gatsby-plugin-preact"` to gatsby-config.js ### Expected result Continue to see…

### CASE-7233 · Site display blank page on Windows on IE and Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description My Gatsby site currently works on Mac for all browsers but not for IE and Edge on Windows. On Windows it'll just briefly show the page for less than a second and then display nothing. When I open the console it lists `<div id="___gatsby"></div>` with…

### CASE-7234 · `Gatsby-plugin-offline` Can't connect to site.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, mobile
- **Signals**: 👍1 💬10 · closed · labels: type: bug
- **Excerpt**: This occure after upgrade gatsby version or gatsby-plugin-offline. pure installation: [link] Steps to reproduce: 1. I install page on serwer with ssl 2. Open page on mobile (chrome) 3. Save page as PWA 4. Disable internet connection on mobile 5. Try open PWA from dekstop 6. I get "Can't connect to site'

### CASE-7243 · When using paths with no trailing slashes, first page navigated to gets skipped over in history.
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: chrome
- **Signals**: 👍2 💬10 · closed · labels: type: bug/help wanted/stale?/status: confirmed
- **Excerpt**: ## Description If you use paths with no trailing slashes, the first page you navigate to on your site will be replaced when you click the first navigation Link. As a result, using the back button from the second page will take you back to e.g. the blank-tab page in Chrome. This occurs because `production-app.js` triggers a `navigate` call in reach/router to fix the trailing slash. Normally, reach handles `navigate` as following (irrelevant details omitted): when you click a link, a `transitioning` variable is set to true in the reach history state (see [link]). That variable is then set to…

### CASE-7245 · Gatsby site freezes after swiping to go back in Safari iOS 12.2 Beta
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios 12, mobile
- **Signals**: 👍0 💬10 · closed · labels: status: needs more info/type: upstream
- **Excerpt**: edit: I realized after making this issue that it's only on iOS 12.2 Beta, so maybe it's the fault of Apple. **iOS 12.2 Beta** makes the ancient bug come back: [link] framework][ref] ![15486954421812622]([link]) Currently on every Gatsby site, when swiping to go back in mobile safari, the screen freezes up and sometimes goes blank for ~2-6 seconds. This really breaks the flow of the site. As soon as the page go backs I try to scroll, but its completely frozen (until that highlighted state on the button goes away).

### CASE-7246 · Images don't appear the first time the user loads a page on gatsbyjs.org
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 201, chrome, iphone
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: ## Description Images don't appear the first time a site is loaded on gatsbyjs.org. Seems like an offline-plugin issue -- perhaps @user could take a look? ### Steps to reproduce Visit a post you haven't visited before, that has images, such as [link] that has images. ### Expected result ![image]([link]) ### Actual result ![image]([link]) ### Environment iPhone XS, Chrome 2015 Macbook Pro, Chrome incognito

### CASE-7248 · [www] Make docsearch non-blocking on v2 www site
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍1 💬10 · closed · labels: type: bug/help wanted/good first issue
- **Excerpt**: <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I ran a Lighthouse audit in Chrome DevTools on the Gatsby v2 site. Is this normal? <a href="[link]>pic.twitter.com/diyMJoE79n</a></p>&mdash; Gudjon Jonsson ✪ (@user) <a href="[link]>June 22, 2018</a></blockquote> The photo in that tweet is: ![dgvw6tkwaaaadid]([link]) I ran an audit as well, and it looks like the docsearch script we're pulling in is blocking the load and slowing down the page. <img width="715" alt="screen shot 2018-06-22 at 4 58 41 pm" src="[link]> We should make sure that's corrected to speed up the site.

### CASE-7250 · JS Caching Issues With Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari
- **Signals**: 👍0 💬10 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description This is for an issue originally reported by @user on [link] The issue involves potentially the JS not getting properly cleared from the cache in Safari if the website is updated while the user is in the middle of a browser session. ### Steps to reproduce (Updated on 5/03/2018 to make it easier to reproduce) 1. `gatsby new gatsby-blog [link] framework]-starter-blog` 2. `gatsby build` 3. `gatsby serve` and open up the URL in Safari. Keep this tab/window open. 4. Make a change by adding a new page i.e. my-thrid-post 5. Run `gatsby build` and `gatsby serve` again 7. Go back to…

### CASE-7271 · Failed to fetch sw.js - service worker error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍4 💬9 · closed · labels: type: bug/stale?/topic: plugins-PWA
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> I hope this is not a duplicate. I would really appreciate your support on this! ## Description On development, I receive the following warning on Chrome (Version 89.0.4389.82 (Official Build) (x86_64)): ``` [Deprecation] SharedArrayBuffer will require cross-origin…

### CASE-7282 · gatsby-image is requesting each image 4 times in Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chromium, firefox, ios, macos
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: ## Description gatsby-image causes Safari (both iOS and macOS) to request the same image 4 times. To be sure that this isn't something specific to my browser and machine I also tested this in an iOS Simulator for iOS Safari, on macOS Mojave with the latest Safari and also on a clean macOS Catalina Safari via Browserstack. They all behave the same way: The same image is requested and downloaded 4 times. Chromium-based browsers don't seem to have issues here. Interestingly though in Firefox there is similar but indeterministic behavior: In Firefox (75, macOS 10.15.4) the same image sometimes is…

### CASE-7284 · Starter Pages do not appear to be loading correctly
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description When visiting the starters on [link] it appears that some of them are not loading correctly in a Brave browser ### Steps to reproduce - Open a browser window and visit the starters page [link] - Randomly select a starter and open the starter's page - Sometimes you'll need to do a hard refresh to get it to load, but on some browsers that doesn't show the correct layout (like on Brave). - It does not appear to matter which starter you look at, but it does seem to be random. A few I've experienced this issue on are [link] and [link] I've observed this on Chrome and Brave (as well…

### CASE-7285 · Gatsby site not rendering in IE 11
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬9 · closed · labels: type: bug
- **Excerpt**: I've created a new site using the [link] template, and I've upgraded to the latest version of Node.js (12.16.1) and the latest Gatsby (2.20.1), but I can't get the site to render in IE or the original Edge browsers. I've tried a ton of things I've found on the net, and I'm injecting polyfill.js as well. In fact, I've tried injecting another polyfill directly into the system to support "forEach", but I'm still getting a blank page, and the following error: `Object doesn't support property or method 'forEach'` Can anyone help with this?

### CASE-7287 · Gatsby Image lazy loading intermittently fails to trigger onLoad callback. (Chrome only)
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, react
- **Signals**: 👍4 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description I am finding `Gatsby-Image` is intermittently failing to display the full-size lazy loaded image, leaving the blurred variant visible. This only occurs when loading a web page from a cold cache. Refreshing the browser window once renders the images as initially expected. ### Steps to reproduce 1. You will need a Gatsby application with Contentful added as a data source. 2. Within React-based page template (not markdown), paste this Static GraphQL query, which requests for fluid variants of all contentful assets ```graphql const { allContentfulAsset } = useStaticQuery(graphql`…

### CASE-7299 · Video does not work on Safari with gatsby-plugin-offline
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, ios, macos
- **Signals**: 👍2 💬9 · closed · labels: type: bug/status: blocked/type: upstream/topic: plugins-PWA
- **Excerpt**: ## Description Caching video with gatsby-plugin-offline works almost everywhere, except on Safari After digging a bit, it seems that Safari do some pretty weird stuff when loading video, I found [this blog post interesting]([link]) A quick fix would probably be to exclude video files from the `gatsby-plugin-offline` cache, but I can't find a way to do so. ### Steps to reproduce You can check out the project I'm currently working on [link] - Visit the home page with Safari iOS or macOS - A video should start playing - Reload the page and the video is not loading anymore If you reproduce those…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7216 · Gatsby v3 / Theme UI 0.6 - Not Hot Reloading
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: Hi team, i've opened an issue on the theme-ui repo relating to hot reloads not firing when changes are made to a theme-ui theme object. Not sure if it's related to Gatsby or Theme UI or something else. Details in the issue below. Ty in advance, you're all legends... keep up the good work! Useful Links: - [link]

### CASE-7222 · Global MDX components do not work when MDX is used via a theme with NPM.
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug
- **Excerpt**: I'm unsure if this is a Gatsby or MDX issue so it is cross posted with MDX [link] --- ## Description I'm running into an issue where we add components to MDX global scope but those components don't render in the page if the theme is installed via NPM, the compnents work fine if the theme is installed via Yarn. We publish a theme (`gatsby-theme-minimal`) to a tag on Github via `gitpkg`. This theme configures MDX via `gatsby-plugin-mdx`, configures pages and provides a component for rendering MDX files. Several additional components are added to the `<MDXProvider>` in the theme: ```jsx…

### CASE-7228 · [gatsby-image] Difference in styles between develop and build packages versions
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: typescript, react
- **Signals**: 👍0 💬10 · closed · labels: type: bug/stale?/status: needs reproduction/topic: media
- **Excerpt**: ## Description This problem occurred for me in gatsby-image versions: **2.2.42** and **2.3.1** I have this component ```typescript import * as classnames from 'classnames'; import { theme } from 'components/src/components/Layout/ThemeProvider/ThemeProvider'; import { graphql, useStaticQuery } from 'gatsby'; import Img from 'gatsby-image'; import * as React from 'react'; type Props = { className?: string; }; type ImageSharpFixed = { aspectRatio: number; base64: string; height: number; originalName: string; src: string; srcSet: string; srcSetWebp: string; srcWebp: string; tracedSVG: string;…

### CASE-7238 · gatsby-remark-images error if using markdownCaptions: true
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬10 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description `gatsby-remark-images` produces and error if using `markdownCaptions: true` in `gatsby-config.js` ### Steps to reproduce 1. Create a new Gatsby site using the gatsby-starter-blog (e.g gatsby new my-themed-blog [link] framework]-starter-blog-theme) 2. Change `gatsby-config.js` to add option `markdownCaptions: true` on `gatsby-remark-images` block 3. Run yarn develop ### Expected result The page content should be generated and the development site should be available. ### Actual result Errors on terminal ``` UNHANDLED REJECTION Cannot read property 'contentDigest' of undefined…

### CASE-7293 · How to best implement Storybook into a theme
- **Principles**: P-C1, P-C2, P-C3 · **Env**: typescript
- **Signals**: 👍2 💬9 · closed · labels: stale?
- **Excerpt**: ## Summary I'm in the process of adding Storybook.js to a gatsby theme i'm making but i'm not sure the best way to do this and am struggling with getting it working, but i'm not sure if my approach is correct or would even work so i'm looking for some help/ideas/a push in the right direction. I'm new to both themes and storybook so i'm probably jumping in the deep end a little. And my project is typescript based which is causing some extra complexity. ## Relevant information So far, i've got storybook set up inside my theme (not my site) with the intention of having the stories inside the src…

### CASE-7295 · [Themes] Build error when adding `gatsby-theme-blog` to existing site
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: stale?
- **Excerpt**: ## Description Adding `gatsby-theme-blog` to an existing site doesn't work. ### Steps to reproduce 1. Start a new Gatsby site 2. Add `gatsby-theme-blog` as a plugin 3. Fill with an example blog post following the template 4. Set `basePath` to `/blog` in `gatsby-config`. ### Expected result The site builds and I should have a blog with one post in my `/blog` path. ### Actual result I got an error: ``` There was an error compiling the html.js component for the development server. See our docs page on debugging HTML builds for help [link] ReferenceError: Tag is not defined > 1 | /** @user jsx */…

### CASE-7298 · Support symlinked node_modules for gatsby-theme package
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I'm working with the new Gatsby-Themes API and Gatsby won't build my child theme if the parent theme is in a symlinked directory in the child's node_modules. This is the standard repo setup for a [Rush monorepo]([link]) and allows you to test against…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7221 · ERROR [ref] GRAPHQL : Unexpected error value: "failed to process
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed · labels: type: bug/stale?/topic: source-wordpress
- **Excerpt**: "gatsby develop" not download .png image file give me error ![TaskImgError]([link]) tihis same error on some other pages **My GraphQL Query like this** `query GET_PAGE($id: ID!) { wpgraphql { page(id: $id) { id pageId uri title content featuredImage { sourceUrl altText imageFile { childImageSharp { fluid(maxWidth: 1200, maxHeight:600, quality: 80, cropFocus: CENTER) { ...GatsbyImageSharpFluid_withWebp_noBase64 } } } } } }` **Wordpress GraphQL Query** ![wpQuery]([link]) **Gatsby GraphQL Query** ![wpqueryone]([link]) before above query work file but now it's give me error when click on…

### CASE-7236 · Fails to build static html from dynamic pages build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬10 · closed · labels: status: awaiting author response
- **Excerpt**: ## Description I'm dynamically generating pages from a json file, which works when I run `gatsby develop` but fails when I run `gatsby build`. The json file is pretty straightforward, and I loop through it in my `gatsby-node` file. I personally don't see what I'm doing wrong so I'm starting to believe it may be a bug in Gatsby. The error I'm getting in the terminal is: ``` Building static HTML failed for path "/featured-icons/apple-icons" See our docs page for more info on this error: [link] Error: Minified React error [ref]; visit [link] .html?invariant=130&args[]=object&args[]= for the full…

### CASE-7270 · Using GATSBY_EMPTY_ALT ignored for figcaption-generation by gatsby-remark-image ie creates non-sense figcaption
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/topic: remark/mdx
- **Excerpt**: The fix described in issue [ref] introduces a regression, especially from an accessibility perspective. When declaring an empty alt-attribute for an image using the keyword `GATSBY_EMPTY_ALT` in markdown (`![GATSBY_EMPTY_ALT](rel/path.jpg)` *and* having set `showCaptions: true` in the plugin-options in `gatsby-config.js`, the plugin produces unwanted HTML: ```html <figure class="gatsby-resp-image-figure" ...> <span class="gatsby-resp-image-wrapper" style="..."> <span class="gatsby-resp-image-background-image" style="..."></span> <img class="gatsby-resp-image-image" alt="" title=""…

### CASE-7278 · Cannot forward websocket connection due to randomized statusServerPort
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍16 💬9 · closed · labels: type: bug
- **Excerpt**: ## Description An error about reaching a random websocket port not being reachable, as Docker cannot be configured to know in advance what the random port will be. ### Steps to reproduce Start up a develop instance of gatsby, in browser devtools inspect websocket connections. There should be two, one is to the proxy port(definable via `--port`), while the other is for the `statusServerPort` and is always random. ### Expected result It should be configurable via either option or environment variable, so that a specific port can be specified. ### Actual result Cannot configure, inability to…

### CASE-7286 · navigate() does not return a Promise
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description When importing the `navigate` function ### Steps to reproduce ```js import { navigate } from "gatsby" navigate("/somewhere/").then(doSomething) ``` ### Expected result When the navigation completes, `doSomething` should be called. ### Actual result This throws an error because `navigate()` returns `undefined` instead of an expected `Promise` (see [type]([link] framework]/blob/master/packages/gatsby/index.d.ts#L3)). Looks like `gatsby-link` is wrapping that function using a global variable: [link] framework]/blob/master/packages/gatsby-link/src/index.js#L202-L204 Instead of…

### CASE-7290 · action.createTypes throws 'Type with name "ImageFormat" does not exists'
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed/topic: GraphQL
- **Excerpt**: [Demo repo]([link]) [Netlify log]([link]) ## Description I created a schema with `actions.printTypeDefinitions`. Here is part of the output: ```graphql type ImageSharp implements Node @user(types: ["File"]) @user { fixed(width: Int, height: Int, base64Width: Int, jpegProgressive: Boolean = true, pngCompressionSpeed: Int = 4, grayscale: Boolean = false, duotone: DuotoneGradient, traceSVG: Potrace, quality: Int, toFormat: ImageFormat = NO_CHANGE, toFormatBase64: ImageFormat = NO_CHANGE, cropFocus: ImageCropFocus = ATTENTION, fit: ImageFit = COVER, background: String = "rgba(0,0,0,1)", rotate:…

### CASE-7300 · [gatsby-source-graphql] error GraphQLIRPrinter: Need an InputObject type
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: type: bug/stale?/status: confirmed/type: upstream
- **Excerpt**: ## Description I'm using `gatsby-source-graphql` to query data from Hasura backend. I have a query that works on GraphiQL, but causes `gatsby develop` to crash. If I remove `order_by` from the query, it no longer causes `gatsby develop` to crash. Example query: ``` { MyFieldName { MyType( where: {id: {_eq: "some-id"}} order_by: { some_field: asc } ) { name } } } ``` ### Expected result No error. ### Actual result Error message ``` success update schema — 0.200 s error GraphQLIRPrinter: Need an InputObject type to print objects. Error: Invariant Violation: GraphQLIRPrinter: Need an InputObject…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7239 · Add Documentation For Self Hosting Gatsby Websites
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍3 💬10 · closed · labels: help wanted/type: documentation
- **Excerpt**: While the documentation for gatsby is great if you're using third-party service providers, if you're self-hosting your gatsby site, the documentation is sparse, to completely doesn't exist. I've spent a solid 30 or so minutes digging through stack overflow posts, the gatsby [deploying and hosting]([link]) documentation, and the closest I came to was [link] Initially I thought it would be as simple as building and updating a simple nginx config, but in practice it seems to be a bit more tricky than that once you introduce production environments to the mix that have things like load balancers…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7264 · Tailwind CSS Responsive classes overridden
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I configured Tailwind in a very standard way, using the `gatsby-postcss` plugin. The responsive classes get overridden: for example you see that, if I set `flex-col sm:flex-row`, I always get a the `flex-direction: column` behavior: <img…

### CASE-7280 · www: Logo screen is not working properly on responsive
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: mobile
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description The logo page([link]) is not working on mobile screen sizes, basically images are not showing up and scrolling feels like infinite scroll, the next section comes after scrolling a lot. ### Steps to reproduce 1. Go to [link] 2. Inspect element and select toggle device toolbar 3. You will see the page is not properly responsive ### Expected result 1. The text should not flow out of the width of device. 2. The images should appear. 3. It should scroll properly. ### Actual result 1. The text on this page is flowing out of the width of device, because of fixed width given. 2. The…

