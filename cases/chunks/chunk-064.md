# Case Chunk 064 — Round 64

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7301 · 404 link on Gatsby home page
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ## Description Clicking the "Creating Plugins" button on the [link] home page in the plugins section (see image) leads to a 404. ![image]([link]) Refreshing the page after that triggers the correct(?) redirect. Additionally, there is at least one more broken link on this page: [link] and there could be other cases so maybe global search for the slug to search and replace is a good idea. ### Steps to reproduce 1. Go to live site home page (incognito or not) 2. Scroll down to the plugins section 3. Click the "Creating Plugins" button ### Expected result We should see the relevant page or be…

### CASE-7305 · `deletePage` action is unexpectedly asynchronous
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description The issue seems to be that calling `deletePage` in two different `onCreatePage` hooks is unexpectedly asynchronous, causing the [DELETE_NODE reducer]([link] framework]/blob/fc2ff3503ac1ed32a4b7677b12edf4c4ea4fd050/packages/gatsby/src/redux/reducers/nodes.js#L16) to receive ```js { type: 'DELETE_NODE', plugin: undefined, payload: undefined } ``` This causes ![image]([link]) ### Steps to reproduce Here's a full description with a repro repo: [link] I could probably get this example even smaller if it needs to be, but [gatsby-mdx's onCreatePage]([link]) uses `deletePage` and so…

### CASE-7306 · gatsby-wordpress-source the thumbnail generation silently fails when gif is uploaded.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Suddenly there where images missing on the page. after some search i realized that one of the images uploaded in the wp backend was a gif. after removing it all images showed up again. the problem seems to be that during the thumbnail generation the gif throws an error and the rest of the images after the gif are not generated. but there is no hint or error message. ### Expected result either support gifs or at least throw an error that the format is not supported and retry the rest of the images after the gif ### Actual result thumbnail generation fails ### Environment ```…

### CASE-7313 · [v2] Builds are inconsistent
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: confirmed
- **Excerpt**: I realized that builds in Gatsby v2 are inconsistent. It means two builds based on the same code base couldn't provide the same the result (in the `public` folder). That can cause troubles when building your Gatsby project on multiple load-balanced servers (for instance). To reproduce the case: - `$ gatsby new my-blazing-fast-site [link] framework]-starter-default\#v2` - `$ cd my-blazing-fast-site` - `$ yarn build` - `$ mv public previous` - `$ rm -rf .cache` - `$ yarn build` - `$ diff -rq previous public` Unless you're lucky, you should have a diff like this: ![image]([link]) Which is caused…

### CASE-7317 · [v2] HMR not updating all pages
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description HMR is only updating one page. I made a video: [link] The shell says: ``` info changed file at E:\Lennart\Documents\GitHub\portfolio\content\blog\2018-06-21\index.md The "deleteNodes" action is now deprecated and will be removed in Gatsby v3. Please use "deleteNode" instead. (node:28256) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 drain listeners added. Use emitter.setMaxListe ners() to increase limit ``` What the video isn't showing: A split second after switching the page the correct text is shown, but then it goes away. **Note:** After some…

### CASE-7320 · Inconsistent support for PNG image
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬9 · closed
- **Excerpt**: While working on [the `gatsby` branch of `facebook/react`]([link]) I noticed an unexpected behavior with regard to how Gatsby handles different image types within markdown files. This may be caused by something upstream (haven't dug into it yet) but the docs made no mention of this limitation that I saw so I wanted to file it. - [x] This works ```jsx <img src="../path/to/image.gif" alt="Some title"> ``` - [ ] This does not work (the image will fail to load at runtime) ```jsx <img src="../path/to/image.png" alt="Some title"> ``` - [x] This works ```markdown ![Some title](../path/to/image.png)…

### CASE-7321 · gatsby-remark-images strips imgs from gatsby-source-contentful markdown
- **Principles**: P-A3, P-H1 · **Env**: edge
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I wired up the `contentful` source plugin to fetch some blog content, but it's unclear to me how to handle the post body. I assumed I could just grab the `html` prop from the `childMarkdownRemark` field in the body, but the html therein doesn't include `<img>` tags. Here's an example: ``` // query { allContentfulBlogPostBodyTextNode { edges { node { body childMarkdownRemark { html } } } } } ``` ``` // result { "data": { "allContentfulBlogPostBodyTextNode": { "edges": [ { "node": { "body": "Hi this is markdown \n\n[link…

### CASE-7323 · prefixLink not working as expected with webpack url loader?
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I require an image like so: ``` js import avatar from '../../avatar.jpeg'; export default function Bio() { return ( <div className='bio'> <img className='avatar' alt='avatar' src={prefixLink(avatar)} /> <p className='intro' dangerouslySetInnerHTML={{ __html: config.bio }} /> </div> ); } ``` The image is not base64 encoded. A url is returned from url loader. In dev mode it looks something like `[link] but running this in production with `linkPrefix = "/xyz"` returns `/xyz423d290eaf378bf7e0361ddf2a3ed695.jpeg` Using ``` js prefixLink(`/${avatar}`) ``` fixes the issue in production but breaks it…

### CASE-7325 · Text content does not match server-rendered HTML.
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ### Preliminary Checks - [x] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hi, I am currently working on a project that has this error in production <img width="735" alt="Screenshot 2022-11-07 at 20 26 16" src="[link]> It points to [link] I have tried cloning a fresh instance of gatsby-starter-default and it has…

### CASE-7326 · [gatsby-source-contentful] useContentfulImage doesn't set all options, nor accepts url strings that start with `https:`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/topic: source-contentful/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hi! I found 2 bugs with useContentfulImage. ## useContentfulImage doesn't set all options If I add a few `console.log`'s in [the hook]([link] framework]/blob/master/packages/gatsby-source-contentful/src/hooks.js), like this ``` export…

### CASE-7327 · [gatsby-source-wordpress] html: useGatsyImage fails on build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬8 · closed · labels: type: bug/stale?/status: needs reproduction/topic: source-wordpress/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I have a big wordpress site with over 3000 posts and I've been using gatsby for my front end to big success. Lately, though, my builds have started failing. During build, when gatsby-source-wordpress fetches MediaItems, I get this error…

### CASE-7328 · using-gatsby-plugin-image fails to download images that don't have a file extension
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed/topic: core
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description following [link] I was unable to download and generated webp files ### Reproduction Link [link] ### Steps to Reproduce the code i used is `const image = getImage(getAssetURL(page.banner.id))` ``` <Container p={4} bg="muted" p={4} sx={{…

### CASE-7329 · TypeError: Cannot read properties of null (reading 'dir') when using GatsbyImage
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed/topic: GraphQL
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I had this issue upon following the Gatsby tutorial (all 7 parts), then trying to experiment with DSG by deferring the dynamically generated blog pages. Basically, when I have a GatsbyImage in my dynamically generated page (using the…

### CASE-7331 · `config` export is removed from non-template source files
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/good first issue/status: confirmed/topic: webpack/babel
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description after upgrading from 4.0.0 to 4.2.0 i'm getting an error: <img width="1037" alt="Screen Shot 2021-11-16 at 3 25 59 PM" src="[link]> ### Reproduction Link [link] ### Steps to Reproduce gatsby develop ### Expected Result site loads without…

### CASE-7333 · gatsby-plugin-image onStartLoad throws warning react dev tools
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬8 · closed · labels: type: bug/help wanted/good first issue/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Using onStartLoad causing React Dev Tools throwing the following message: ``` Warning: Unknown event handler property `onStartLoad`. It will be ignored. ``` <img width="2232" alt="CleanShot 2021-10-31 at 19 52 15@user" src="[link]> It…

### CASE-7334 · Advanced Custom Fields - Type "User" not retrieved properly in gatsby-source-wordpress
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs reproduction/topic: source-wordpress
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description The issues happened when I use the Advanced Custom Fields (ACF) with GraphQL in wordpress. ![image]([link]) If the ACF Fields type is `USER`, it is able to retrieve in the GraphQL in wordpress as the screenshot shown below.…

### CASE-7335 · Images not visible on initial page load with gatsby-plugin-image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Images are not visible (did not check how) on initial page load when using `gatsby-plugin-image` and `layout: FULL_WIDTH` or `layout: CONSTRAINED`. Images work if `layout: FIXED` is used. Also they work with `gatsby-image`. Also images…

### CASE-7336 · Issue with downloadImages: true
- **Principles**: P-A3, P-H1 · **Env**: opera
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs reproduction/topic: source-shopify
- **Excerpt**: When I try adding 'downloadImages: true' into the config I get the below error; ``` Polling bulk operation: gid://shopify/BulkOperation/364790513857 Status: COMPLETED Object count: 1841 info Completed bulk operation PRODUCTS: gid://shopify/BulkOperation/364790513857 info Creating nodes from bulk operation PRODUCTS Failed to validate error [Error [ValidationError]: "error" must be of type object] { _original: { context: { sourceMessage: 'Could not source from bulk operation' }, error: 'failed to process [link] + 'RequestError: socket hang up', pluginName: 'gatsby-source-shopify', text: 'Could…

### CASE-7337 · gatsby-source-contentful should respect the defaults of gatsby-plugin-image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬8 · closed · labels: type: bug/topic: source-contentful/topic: source-plugins
- **Excerpt**: The plugin should respect the configured default values of gatsby-plugin-image: [link] @user reported: I'm seeing an issue with placeholder being set to 'dominantColor' and ignoring defaults set in `gatsby-plugin-sharp`: ```js { resolve: `gatsby-plugin-sharp`, options: { defaults: { formats: [`auto`, `webp`], placeholder: `blurred`, backgroundColor: `transparent`, }, }, }, ``` I'm querying images from contentful (ie. not downloaded locally) without any params: ```gql narrowImage { gatsbyImageData } ``` Which returns an image with a background color set: ``` { "image": { "images": { "sources":…

### CASE-7338 · bug(gatsby-source-wordpress): maxFileSizeBytes option silently excludes entire MediaItem node instead of just the File node
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/topic: source-wordpress
- **Excerpt**: ## Description The featuredImage node is not working for pages & custom post types. It only works for posts. Here's my query: ``` query PAGE_QUERY { allWpPage { nodes { id featuredImage { node { altText sourceUrl } } } } } ``` And here's the result: ``` { "id": "cG9zdDo0NTI=", "featuredImage": null // this page does NOT have a featured image }, { "id": "cG9zdDoyOTQ3NzA=", "featuredImage": { "node": null // this page has a featured image } } ``` The second item in the list has a featured image and notice that it's returning a "node" which is null, whereas the top page does not have a featured…

### CASE-7342 · PNG image failed to be processed by vips2png
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: awaiting author response/topic: media
- **Excerpt**: ## Description I have this issue at build and develop time: `SearchGraphProcess2.png. It is probably corrupt, so please try replacing it. If it still fails, please open an issue with the image attached. Error: vips2png: unable to write to target target` ### Steps to reproduce clone this repo: [link] and build it to have the issue. This is a clone of starter blog with the image that make the build failed. ### Environment System: OS: Windows 10 10.0.19042 CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz Node: 12.12.0 - C:\Program Files\nodejs\node.EXE npm: 6.11.3 - C:\Program…

### CASE-7343 · queries are not extracted when `graphql` / `useStaticQuery` / `StaticQuery` are imported from `gatsby` using commonjs's `require`
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Using the official `gatsby-plugin-layout` plugin and a `useStaticQuery` in the layout component throw the error: `The result of this StaticQuery could not be fetched.` ### Steps to reproduce ``` module.exports = { siteMetadata: { title: "MyWebsite", }, plugins: ["gatsby-plugin-layout"] } ``` src/layouts/index.js ``` const {graphql, useStaticQuery} = require("gatsby") const {Helmet} = require("react-helmet") const React = require("react") export default ({children, location, pageContext}) => { const query = graphql` const { site: { siteMetadata: {title}, }, image, } =…

### CASE-7349 · Downgrading to older Gatsby version throws various errors
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Describe the issue that you're seeing.I decided to upgrade a bunch of outdated gatsby dependencies (see a screenshot from the PR below). Then I discovered a bug (see [link] framework][ref]). I found that the problem was in a particular version of gatsby, so I thought if I simply roll it back to a version before the issue was introduced, it would work smoothly. <img width="1241" alt="Screenshot 2020-07-08 at 13 58 06" src="[link]> These are headline summaries of me trying to pin versions of gatsby with versions of gatsby-cli (it was pointed out in one of the issues that a…

### CASE-7350 · gatsby-source-contentful: cannot get image uri after updating content in contentful
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/topic: source-contentful
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description cannot get image's uri after updating content in contentful can go back to normal if i use `gatsby clean` after updating things in contentful and then `gatsby develop` again ### Steps to reproduce - create a blog post content type contentful, sthg like:…

### CASE-7353 · (www): Uncaught ReferenceError: firebase is not defined
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description There is error in console of Gatsby website telling **Uncaught ReferenceError: firebase is not defined** ### Steps to reproduce 1. Open the [link] 2. Open the console 3. You will see the error telling **Uncaught ReferenceError: firebase is not defined** ### Screenshot <img width="512" alt="firebase-is-not-defined" src="[link]> ### Expected result There should not be any error in the console ### Actual result There is error in console telling **Uncaught ReferenceError: firebase is not defined** ### Environment ``` System: OS: macOS 10.15.4 CPU: (12) x64 Intel(R) Core(TM)…

### CASE-7357 · [gatsby-plugin-preact] Can't resolve 'react-dom' for node_modules package
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react, webpack
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: ## Description ``` ERROR [ref] WEBPACK Generating SSR bundle failed Can't resolve 'react-dom' in '[...]/node_modules/@user/react/dist' ``` ### Steps to reproduce 1. `npx gatsby new bug-repro` 2. `yarn add @user/react gatsby-plugin-preact` 3. Add the Preact plugin to `gatsby.config.js` 4. Edit `index.js` with ```jsx import React from "react" import { Link } from "gatsby" import Tippy from "@user/react" import Layout from "../components/layout" import Image from "../components/image" import SEO from "../components/seo" const IndexPage = () => ( <Layout> <SEO title="Home" /> <Tippy…

### CASE-7359 · Layout is broken for client routes in production build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: status: needs reproduction
- **Excerpt**: ## Description Hello. I have an application with client routes. On my page there main banner and tabs component. Each tab should have own url. ![ezgif com-video-to-gif]([link]) URL's: 1 tab - /chastnim-licam/krediti/kredit-na-lyubye-celi/ (root of the page) 2 tab - /chastnim-licam/krediti/kredit-na-lyubye-celi/tarify-i-documenty/ 3 tab - /chastnim-licam/krediti/kredit-na-lyubye-celi/voprosy-i-otvety/ I Added onCreatePage method to gatsby-node.js ``` exports.onCreatePage = async ({ page, actions }) => { const { createPage } = actions if…

### CASE-7366 · [gatsby-image] Webp format not used unless toFormat is specified.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Under the documentation describing how to use fragments with webp, the following appears: > If you want to automatically use WebP images when the browser supports the file format, use the withWebp fragments. If the browser doesn’t support WebP,…

### CASE-7368 · [gatsby-remark-images] Large blank spaces / blurs in RSS feeds
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: ## Description The `gatsby-remark-images` plugin causes large blank space above images in RSS readers that apply the page’s inline styles. This seems to be due to [ref], which moved the `<img>` tag’s positioning out of the `style` attribute and into a `<style>` tag that is not seen by RSS readers. Because of this, the `<img>` is not absolutely positioned over the background element, which causes either a large white space or a blurry background, depending on the HTML support in the reader. Additionally, the image is not correctly sized. ### Steps to reproduce 1. Include `gatsby-remark-images`…

### CASE-7373 · Code splitting common vendor files
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: # Summary I have a rather large package that is being built into all of my page bundles. I was under the impression from the docs that this would be ripped out into a common bundle, which is then only imported once? Am I missing a required option for this? ## Relevant information Here is my bundle analysis; <img width="1464" alt="Screen Shot 2019-07-02 at 12 59 31" src="[link]> As you can see `Dexie.es.js` is present in most of the bundles, along with some smaller common packages. ### Environment (if relevant) ``` System: OS: macOS High Sierra 10.13.2 CPU: (4) x64 Intel(R) Core(TM) i5-7360U…

### CASE-7374 · Custom markdown components with Rehype are wrapped in paragraphs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: type: bug/help wanted/stale?
- **Excerpt**: _Note: I'm aware that the current [recommended way]([link]) of adding custom components in Markdown is MDX, instead of the Rehype plugin. Therefore I'm not sure whether this should be fixed or not._ ## Description Custom components in Markdown, created following [this guide]([link]), are nested in a paragraph element when rendered to the DOM. ### Expected result The custom component shouldn't be wrapped in a `p`. **Why?** if the custom component's root element is a div (for example, if the component is an image gallery), there will be a `div` inside a `p`, which will cause a semantic error:…

### CASE-7376 · Gatsby Issue with Google Web cache
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Gatsby pointing to 404 page when Google Web cache tried to open. ### Steps to reproduce [link] ### Expected result Gatsby should route to the right page. ### Actual result What happened. ![image]([link]) ### Environment Run `gatsby info --clipboard` in…

### CASE-7378 · Gatsby Image Offset For Lazy Loading
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: help wanted/stale?/good first issue
- **Excerpt**: **Problem** Using Gatsby Image the images only start loading when you scroll to the object, so it always causes the issue that for few ms the image is not visible and then it appears from blur/or with fade effect. **Expected behaviour** I want to make sure that there is some offset definition to make sure that if I'm currently on the first section of the page, the second section already will load images, then when I'm on 2nd section, the 3rd section images will start loading. Currently, I could either define loading images immediately(set critical attribute) without waiting for scroll or…

### CASE-7379 · [gatsby-image] color of tracedSVG using Contentful fragments
- **Principles**: P-A3, P-H1 · **Env**: edge
- **Signals**: 👍1 💬8 · closed · labels: stale?/status: needs reproduction
- **Excerpt**: Hi, I am trying to change the color of the tracedSVG of images from Contentful using `gatsby-image`. ## Summary digging in the docs and around the web I found that you can put a `traceSVG` argument with various options in a graphql query, like this: `traceSVG: { background: "#fbfafc", color: "#dbd4e2" }` like in this example: ``` galleryImages: allUnsplashImagesYaml(filter: { gallery: { eq: true } }) { edges { node { credit title localFile { childImageSharp { fluid( maxWidth: 380 quality: 70 traceSVG: { background: "#fbfafc", color: "#dbd4e2" } ) { ...GatsbyImageSharpFluid_tracedSVG } } } } }…

### CASE-7380 · Incorrect warnings reported by npm on fresh installation of Gatsby
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: good first issue/type: maintenance
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description On following along with the tutorial and installing Gatsby globally on my machine I encountered this error from `npm` regarding wrong dependencies listed in some modules pf Gatsby. <img width="570" alt="Screenshot 2019-04-09 at 11 28 16 AM" src="[link]>…

### CASE-7381 · Gatsby/Wordpress returning null on images after unpublishing
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I'm using: Gatsby, Wordpress, and gatsby-source-wordpress, and ACF on Wordpress for my custom data. The issue I'm encountering is this: when a post is *unpublished* (from being published to a draft), and then re-published, the images (or almost all of them) become `null`. Example GraphQL being used: ```graphql main_images { product_code image { title localFile { childImageSharp { fluid(maxWidth: 1200) { ...GatsbyImageSharpFluid_withWebp } fixed(width: 100) { ...GatsbyImageSharpFixed } } } } } ``` In the instance of this GraphQL field, the issue I'm having is that `localFile`…

### CASE-7389 · [gatsby-image] Base64 version of image isn't hidden on first page load
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: status: awaiting author response
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I'm using gatsby-image to lazy-load some png images. Normally, after the image is loaded, the small base64 version is hidden. However, this doesn't happen when I load the built site. This leads to both images being visible at the same time which looks…

### CASE-7390 · Gatsby Default Starter Lighthouse PWA Issue on subpages - Does not provide fallback content when JavaScript is not available
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: status: needs more info
- **Excerpt**: The default starter gets top marks on lighthouse for the home page but, although very impressive, it misses out on a few PWA points for sub pages e.g. [[link]]([link]). Lighthouse issue: Does not provide fallback content when JavaScript is not available [[link]]([link]) ![image]([link]) ~~I have noticed that I get the following error if I disable javascript and try to view the page.~~ ~~```~~ ~~Uncaught TypeError: Cannot read property 'teardown' of undefined at Object.o.teardown (VM128 onloadwff.js:58) at VM128 onloadwff.js:58~~ ~~```~~ ~~This also happens on other Gatsby sites that I've…

### CASE-7394 · [gatsby-source-wordpress] Wordpress Media Sizes
- **Principles**: P-A3, P-H1 · **Env**: ios
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description I am using [link] for finer controls on cropping for different image sizes/ratios that my application is using. However, the `media_details.sizes` info is currently being stripped away by the plugin in favor of localFile. [link] framework]/blob/master/packages/gatsby-source-wordpress/src/normalize.js#L457 ### Steps to reproduce Create any…

### CASE-7395 · [v2] Images in css modules cause build to fail
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬8 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description When images are included in a css module, the build fails. Development mode works. ### Steps to reproduce 1. Include image in CSS module 2. Use (import) css module 2. Build ### Expected result Should behave the same way it does in `development`. ### Actual result Crash: ``` success Building production JavaScript and CSS bundles — 4.523 s error Building static HTML for pages failed See our docs page on debugging HTML builds for help [link] 61 | Object.defineProperty(ns, 'default', { enumerable: true, value: value }); 62 | if(mode & 2 && typeof value != 'string') for(var key in…

### CASE-7396 · [v2] When migrating to v2 webpack fails to load .pdf files
- **Principles**: P-A3, P-H1 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: type: bug/help wanted
- **Excerpt**: In the processing of migrating to v2. Seems like webpack isn't setup to load pdf files anymore. ![image]([link])

### CASE-7397 · [v2] StaticQuery doesn't work with typescript
- **Principles**: P-A3, P-H1 · **Env**: opera, typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Description StaticQuery's are forever stuck in the "Loading (StaticQuery)" state in both development and production build when using typescript. ### Steps to reproduce I've created a minimal example reproducing the issue. [link] ### Expected result ![image]([link]) The StaticQuery should be extracted, executed and the render function should be called with the query results. ### Actual result ![image]([link]) The static query is replaced with Loading (StaticQuery) ### Environment * Gatsby version: 2.0.0-alpha.43 * gatsby-cli version: 1.1.53 * Node.js version: v10.0.0 * Operating System:…

### CASE-7398 · [gatsby-plugin-sharp] Access to image EXIF/metadata?
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: help wanted
- **Excerpt**: This is just a general question - apologies if it's not the appropriate place to ask. I'm looking at using Gatsby to build image galleries and would quite like to hook into the EXIF data for things like captions/copyright/potentially geodata/etc. A quick skim of the Sharp docs suggests you can get access to that stuff and I was wondering if the gatsby plugin could be modified to retrieve that, or if I'm barking up the wrong tree...?

### CASE-7399 · createRemoteFileNode should parse out the query string from url
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Description When using `createRemoteFileNode` to fetch images and there are query parameters in the url, the file gets saved with a wrong extension and media type. For example: to access Firebase assets one will use an url such as [link] name]/o/**image.png**?alt=media&token=[some token] ### Steps to reproduce ```js const url = '[link] createRemoteFileNode({ url, store, cache, createNode, }) ``` ### Expected result One should get a `someHash.png` file in cache with correct media type ### Actual result File is named `someHash.png?alt=media&token=theToken` ### Environment * Gatsby: 1.9.225 *…

### CASE-7400 · Graphql image query is breaking for some images.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Description I started to build my blog in gatsbyjs and I am loving it. I am using netlifycms with it and netlify for deploying it.I am following [gatsby-starter-netlify-cms]([link]). In order to display images on the blog, I am storing them at /static/img and provide its path in the markdown frontmatter. However, this works for some images and doesn't work for some other. **Some more info on that** - If you look at [link] you can see that the first build failed while the second passed. The only change is in the image name. The images both of which were uploaded from netlify cms ui and are…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7302 · gatsby-image lazy loading not working in MacOS Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chrome, firefox, macos
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description In MacOS Safari, all images are downloaded at once, regardless of the expected lazy loading. In all the other browsers I tested in (i.e. Chrome, Firefox), lazy loading works just fine. ### Steps to reproduce Open a website built in Gatsby that contains as…

### CASE-7314 · 404.js page rendered momentarily before disappearing
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, safari, macos
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: ## Description Visiting `www.my.domain/fakepath` does not render my custom `404.js` in production. However `www.my.domain/404.html` works as expected. ### Environment ``` System: OS: macOS High Sierra 10.13.6 CPU: x64 Intel(R) Core(TM) i5-4258U CPU @ 2.40GHz Shell: 4.4.23 - /usr/local/bin/bash Binaries: Node: 10.9.0 - /usr/local/bin/node Yarn: 1.9.4 - /usr/local/bin/yarn npm: 6.4.1 - /usr/local/bin/npm Browsers: Chrome: 68.0.3440.106 Firefox: 60.0.1 Safari: 11.1.2 npmPackages: gatsby: ^1.9.277 => 1.9.277 gatsby-image: ^1.0.55 => 1.0.55 gatsby-link: ^1.6.46 => 1.6.46…

### CASE-7355 · gatsby-image low quality webp
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome/, firefox, safari, chrome
- **Signals**: 👍1 💬8 · closed · labels: type: bug/topic: media
- **Excerpt**: ## Description When using the [webp format]([link]), the quality is degraded compared to a png or jpg format. ### Steps to reproduce Open gatsby-image's [demo website]([link]) in chrome/firefox and safari(a browser that doesn't support web so it defaults to png/jpg) and compare the quality difference. Here is a screenshot, left chrome, right safari: <img width="961" alt="Screenshot 2020-05-29 at 16 28 59" src="[link]> ### Expected result The webp quality to be similar to the png/jpg one. ### Actual result The webp quality is worse.

### CASE-7360 · Unable to install sharp while running yarn
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, safari, macos
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: This is the setup of gatsby that I'm working with: ```System: OS: macOS 10.15.4 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 10.16.0 - ~/.nvm/versions/node/v10.16.0/bin/node Yarn: 1.17.3 - /usr/local/bin/yarn npm: 6.9.0 - ~/.nvm/versions/node/v10.16.0/bin/npm Languages: Python: 2.7.16 - /usr/bin/python Browsers: Chrome: 80.0.3987.149 Firefox: 74.0 Safari: 13.1 npmPackages: gatsby: ^2.20.6 => 2.20.6 gatsby-image: ^2.3.1 => 2.3.1 gatsby-plugin-catch-links: ^2.2.1 => 2.2.1 gatsby-plugin-google-analytics: ^2.2.2 => 2.2.2 gatsby-plugin-manifest:…

### CASE-7367 · scheduler.development.js:107 Uncaught TypeError: callback is not a function
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, react
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ## Description callback is not a function when update gatsby related packages and react to latest. ### Steps to reproduce repositories: [link] 1、`npm run check` // update all packages to latest 2、`npm start` // start project ### Expected result open page with no error ### Actual result callback is not a function ### Environment ``` System: OS: macOS 10.14.6 CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 10.16.3 - /usr/local/bin/node npm: 6.11.3 - /usr/local/bin/npm Languages: Python: 2.7.10 - /usr/bin/python Browsers: Chrome: 76.0.3809.132…

### CASE-7371 · [gatsby-plugin-offline] Static routes not working offline
- **Principles**: P-G1, P-G2, P-G3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: topic: plugins-PWA
- **Excerpt**: ## Description The static pages not served when offline, if you change route or reload. ### Steps to reproduce 1) Download, build and serve the gatsby-starter-blog starter. 2) At first visit (sw registration) if you disable the js and reload, the static content is served correctly 3) If you enable the js and navigate to another page, or reload and repeat step 2, you get a blank page (the offline-plugin-app-shell-fallback without data). ### Expected result The static page should be served What should happen? The static page is not served ### Actual result I get the the…

### CASE-7375 · gatsby-image loading="eager" does not work, only critical={true} works
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍8 💬8 · closed · labels: type: bug/help wanted/good first issue/status: confirmed
- **Excerpt**: ## Description I'm trying to enable eager loading on images using gatsby-image. ### Steps to reproduce 1. npm i --save gatsby-image@user 2. Import image from gatsby graphql w/ webp 3. Place below the fold and turn off chrome cache, and scroll down to image: ``` <Image loading="eager" /> <Image criticial /> ``` ### Expected result Critical and loading="eager" behaves the same way ### Actual result Critical loads the image on DOM entry, loading="eager" behaves like loading="lazy" ### Other info It looks like the gatsby-image source still references the props.critical instead of checking…

### CASE-7382 · SourceMaps in Windows do not display correctly
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, windows
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/status: confirmed/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description SCSS SourceMaps in any of the downloadable starter kits or in a fresh build of Gatsby, do not correctly show SCSS SourceMap references in the Web Inspector. In Firefox on Windows you see a Blob reference (Screenshot attached), In Chrome, you see an…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7303 · Bad content loaded from markdown when files have similar names (substings)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, windows
- **Signals**: 👍0 💬9 · closed · labels: type: bug/help wanted/stale?
- **Excerpt**: Bad content loaded when markdown files have similar names Useful Links: - [Repo ]([link] ) - [Example url ]([link]) ## Description Click on links load content from file with longer name on server On MacOS or Windows Parialy work, on some builds links work as expected, in some cases links load content of longer named file. ### Steps to reproduce Just clisk on link pairs and You will see difference between your local build and live site ### Expected result Show 4 different markdown file contents. ### Actual result Showing just content from files that have longer name. ### Environment Run `npm…

### CASE-7304 · gatsby: Don't use fork of relay-compiler
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: type: bug/help wanted/status: confirmed/topic: GraphQL
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When having literal enums that have non-string values (eg ImageCropFocus), Relay fails to print the query. ### Expected result Should print normally. ### Actual result Fails with exception. Reported upstream in [link] We should consider downgrading back…

### CASE-7307 · Security: all env vars in production bundle
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug
- **Excerpt**: ## Description While inspecting production bundles of a gatsby site, I saw that all environment variables used during the build process are included in a bundle js file. This can also include sensitive data (e.g WordPress htaccess passwords) when used via a .env file. ### Steps to reproduce - Include .env files as documented on [link] - Run production build - Inspect js bundle `app-*.js` for env vars ### Expected result Only env vars starting with `GATSBY_` (and maybe others necessary for the build - which ones?) should be included in production bundles, as stated on [link] ### Possible…

### CASE-7318 · GraphQL query with variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I've been stuck on this for a while and cannot see what is wrong, any pointers most welcome. In short I am trying to create some pages from some data returned from prismic. Following the guidelines in part four of the tutorial I have this in `gatsby-node.js`. ``` //create slugs exports.onCreateNode = ({ node, getNode, boundActionCreators }) => { const { createNodeField } = boundActionCreators if (node.internal.owner === 'gatsby-source-prismic' && node.type === `article`) { const slug = `${node.slugs[0]}`; console.log(`slug is: ${slug}`); createNodeField({ node, name: `slug`, value: slug, }) }…

### CASE-7356 · GraphiQL Query Variables are reset whenever query is updated
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I've noticed that the **Query Variable** field is reset every time I update a GraphQL query in the GraphiQL IDE. ### Steps to reproduce This can be reproduced on `gatsby-starter-blog`: ```bash gatsby new graphiql-test [link] framework]-starter-blog cd…

### CASE-7385 · Environment variables are not captured utilizing NODE_ENV in Webpack
- **Principles**: P-E1, P-E2, P-E4 · **Env**: webpack
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description [Environment variables]([link]) (captured in `.env.ENVIRONMENT`, e.g. `.env.staging`) do not get exposed correctly to the code that gets bundled with Webpack, e.g. the client-side, non-Node code. We can see this by walking through the build process: 1. Add a script, `build:staging` ```json { "scripts": { "build:staging": "cross-env NODE_ENV=staging npm run build" } } ``` 1. `gatsby build` is kicked off via the CLI [here]([link] framework]/blob/master/packages/gatsby-cli/src/create-cli.js#L177) - This _explicitly_ sets NODE_ENV=production, therefore ignoring any overrides from…

### CASE-7391 · Can't we "name-export" graphQL fragments from components?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: type: bug/stale?/status: confirmed/topic: GraphQL
- **Excerpt**: ## Summary Gatsby throws a `Error: Invariant Violation: GraphQLCompilerContext: Unknown document 'HeaderFragment'.` when exporting a named graphQL Fragment from a Component. ## Relevant information This is more of a question of how it works rather than a bug I think. That's why I labeled it as a question. When using GraphQL fragments. I do as the [docs]([link]) say to export the fragment and it works. ```js // HeaderComponent export const HeaderFragment = graphql` fragment HeaderFragment on ContentfulHomePage { title } ` ``` this is a named export. BUT when using the alternative syntax: ```js…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7308 · gatsby serve doesn't work after running gatsby build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, macos, bootstrap
- **Signals**: 👍1 💬9 · closed · labels: status: awaiting author response
- **Excerpt**: * Node.js version:10.13.0 * Gatsby version :2.4.5 * Operation system : MacOS 10.14.1 `gatsby build` ```success open and validate gatsby-configs — 0.007 s success load plugins — 0.173 s success onPreInit — 0.974 s success delete html and css files from previous builds — 0.019 s success initialize cache — 0.006 s success copy gatsby files — 0.113 s success onPreBootstrap — 0.011 s ⠂ source and transform nodesStarting to fetch data from Strapi (editors) Starting to fetch data from Strapi (imgs) Starting to fetch data from Strapi (articles) ⠄ source and transform nodesFetch Strapi data: 105.772ms…

### CASE-7309 · gatsby-transformer-remark: information is not a function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: webpack
- **Signals**: 👍1 💬9 · closed · labels: status: awaiting author response
- **Excerpt**: ## Description I think [this PR]([link] framework][ref]) may be causing some issues on `gatsby build` for me: ``` 106 | /* Stringify one attribute. */ 107 | function attribute(ctx, key, value) { > 108 | var info = information(key) || {}; | ^ 109 | var name; 110 | 111 | if ( WebpackError: TypeError: information is not a function ``` As soon as I upgrade to `2.1.8` it's throwing this error. ### Steps to reproduce 1. Upgrade `gatsby-transformer-remark` to `2.1.8` (I was on `2.1.7`) ### Expected result Successful build. ### Actual result 🚫 ### Environment Run `gatsby info --clipboard` in your…

### CASE-7310 · cache instance for subplugins
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug
- **Excerpt**: After implementing separate cache for each plugin, there is issue with cache instance for subplugins: - subplugins can implement their own API hooks and there they get cache instance for that subplugin - way parent plugins interact with subplugins is most often implementing most of subplugin functionality in something like `index.js` in this is called by parent plugin and often we pass cache from parent plugin to subplugin - for example in `gatsby-transformer-remark`: [link]…

### CASE-7311 · Different GraphQL schema with and without .cache
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Using gatsby-transformer-remark and gatsby-remark-images, I am seeing new fields added to the GraphQL schema if I run `gatsby develop` with a warm `.cache`. ### Steps to reproduce 1. Add gatsby-transformer-remark and gatsby-remark-images to your…

### CASE-7312 · Can't bind plugin via setParserPlugins option with gatsby-transform-remark
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: help wanted
- **Excerpt**: ## Summary I want to have an opportunity to use an `id` or `class` attributes in my markdown pages with this syntax: ```md [Any text]{.class id=anyId} ``` That's when a [remark-bracketed-spans]([link]) markdown parser plugin comes in. I'm stuck at making it works together with `gatsby-transform-remark` localy. What am I doing wrong? ## Relevant information Issue [link] framework][ref] was closed with great a PR adding setParserPlugins option and I want leverage this with `gatsby-remark-bracketed-spans` plugin. May be it can't work with local plugin? But I can't see why when following the…

### CASE-7319 · [gatsby-transformer-remark] 3rd level Indentation bug with UTF-8 characters
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed · labels: type: bug/status: needs more info
- **Excerpt**: This is the result of gatsby generation.Indentation is wrong： ![image]([link]) This is markdown file: ![image]([link]) This is local rendering ![image]([link]) my version of gatsby-transformer-remark is 1.7.15. This is the latest version. How do i solve this problem?

### CASE-7324 · Running gatsby through npm script from another directory throws an error
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: I have a npm script with this command `cd docs && ./node_modules/.bin/gatsby develop`. So gatsby and all the dependencies to run a gatsby website are inside the directory `docs`, and this error is thrown: ``` > [email] serve-docs /Users/tleunen/dev/projectX > cd docs && ./node_modules/.bin/gatsby develop Failed to require /Users/tleunen/dev/projectX/docs/html.js ./html.js Module build failed: ReferenceError: Unknown plugin "transform-object-rest-spread" specified in "/Users/tleunen/dev/projectX/.babelrc" at 0, attempted to resolve relative to "/Users/tleunen/dev/projectX" at…

### CASE-7330 · Invalid `srcset` being generated by `gatsby-transformer-remark` when using `react-rehype` when processing markdown with images
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/topic: media/topic: remark/mdx
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description There is a bug somewhere in the complex chain when processing markdown that contains images with `gatsby-transformer-remark` and friends. This happens when adding and setting up `rehype-react` following the [official Gatsby guide]([link])…

### CASE-7332 · "gatsby-transformer-remark" threw an error while running the setFieldsOnGraphQLNodeType lifecycle: Cannot read property 'setParserPlugins' of undefined
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Issue with images in a GatsbyJs v4 project: Field "image" must not have a selection since type "String" has no subfields. Had originally converted a Gatsby v3 project to v4 and kept getting `"String" has no subfields` message when running…

### CASE-7339 · gatsby-source-filesystem ->Error: EPERM: operation not permitted, open
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, windows, ubuntu
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ## Description run -> gatsby build gatsby-source-filesystem looks don't work in OS: Windows 10 10.0.19041. It works in ubuntu. FYI: it works with gatsby develop ### Steps to reproduce Done building ### Expected result Done building ### Actual result failed to process file.pdf Error: EPERM: operation not permitted, open '.cache\caches\gatsby-source-filesystem\tmp-7b17c8c1e6d1803fc8fa2cac31a6d818.pdf' not finished source and transform nodes - 362.452s failed Remote file download - 239.020s ### Environment System: OS: Windows 10 10.0.19041 CPU: (8) x64 Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz…

### CASE-7344 · Scroll restoration no longer works on popState when using shouldUpdateScroll browser API to orchestrate page transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description At some point in the last six months or so the shouldUpdateScroll browser API hook and related functionality seems to have been changed under the hood and introduced breaking changes to scroll restoration for Gatsby sites that use a simple animated page…

### CASE-7346 · Bug: relative url for links and images in package readme are not working
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/type: documentation/stale?
- **Excerpt**: ## Description Relative URL for links and images, definition in package readme results in 404 ### Steps to reproduce Source of Readme: [link] framework]/blob/master/packages/gatsby-plugin-sharp/README.md#L167 Location: Just above [link] ### Screenshot <img width="302" alt="Bildschirmfoto 2020-07-24 um 13 39 19" src="[link]> ### Examples bad ones - point to files in the repo: - `![Sharp transform fit options](./sharp-transform-fit-options.png)` - `[index.js](./src/index.js)` good ones: - external full links -> `[overlayWith]([link])` - points to gatsbyjs.org ->…

### CASE-7347 · Gatsby transformer CSV - truncates the data in graphiql.
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: needs core review
- **Excerpt**: <!--` Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Describe the issue that you're seeing. I have a csv with 406 rows and 4 columns. When using Graphiql it returns only rows. - 269 - using the following query ```const stationCsvData = useStaticQuery( graphql` query allStationsQuery {…

### CASE-7348 · Error: Cannot create as TypeComposer the following value: ImageFormat.
- **Principles**: P-D1, P-D2, P-D3, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍3 💬8 · closed · labels: type: bug/topic: plugins
- **Excerpt**: ## Description When linking gatsby-theme with `yarn link` to the gatsby site using that theme, `gatsby build` fails with the following error: ``` $ gatsby build --prefix-paths success open and validate gatsby-configs - 0.093s success load plugins - 4.355s success onPreInit - 0.016s success delete html and css files from previous builds - 0.013s success initialize cache - 0.013s success copy gatsby files - 0.167s success onPreBootstrap - 0.019s success createSchemaCustomization - 0.011s success source and transform nodes - 1.489s error Cannot create as TypeComposer the following value:…

### CASE-7363 · Type definition for createParentChildLink() requires owner in child node
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description I'm writing a transformer plugin in Typescript. When calling `createParentChildLink`, Typescript complains that I've not set owner in the child node. However, I believe the owner is set by Gatsby itself. The definition of `createParentChildLink` is: ```ts createParentChildLink( args: { parent: Node; child: Node }, plugin?: ActionPlugin ): void ``` ### Steps to reproduce Given the following `gatsby-node.ts` in `plugins/gatsby-test-plugin/src`, taken from [gatsby-transformer-sharp]([link] framework]/blob/master/packages/gatsby-transformer-sharp/src/on-node-create.js) ```ts import…

### CASE-7369 · GatsbyLinkProps typescript type not working for custom <Link /> component
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript, react
- **Signals**: 👍22 💬8 · closed
- **Excerpt**: ## Description I'm trying to extend a `<Link />` component in my Typescript project. This is a simplified example: ```typescript const CustomLink: React.FC<GatsbyLinkProps<any>> = props => <Link {...props} /> ``` I'm getting the error: ```typescript Type '{ activeClassName?: string; activeStyle?: object; innerRef?: Function; onClick?: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void; partiallyActive?: boolean; replace?: boolean; ... 263 more ...; onTransitionEndCapture?: (event: TransitionEvent<...>) => void; }' is not assignable to type 'IntrinsicClassAttributes<GatsbyLink<any>>'.…

### CASE-7383 · Improve createNode documentation for parent field
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: documentation/stale?
- **Excerpt**: ## Summary When creating a new node using `createNode` within an `onCreateNode` lifecycle hook, not setting the parent id may lead to the graphql schema generation inferring types incorrectly. In my particular case, I was using an `onCreateNode` hook to generate new nodes based on nodes created by `gatsby-transformer-json`. When the `parent` field is set to null, none of the field values are [checked to see if they look like filepaths]([link] framework]/blob/23b84338f50ed372e41440fdba538c583e0b203d/packages/gatsby/src/schema/types/type-file.js#L28-L35), leading to the "cannot make a…

### CASE-7386 · [gatsby-transformer-sharp] `cropFocus: attention` seems broken in example site
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: type: bug
- **Excerpt**: Screenshot below is from [[link]]([link]): <img width="661" alt="screen shot 2018-11-28 at 2 56 25 am" src="[link]> It states: > The default is `ATTENTION`, which the Sharp documentation describes as "focus on the region with the highest luminance frequency, colour saturation and presence of skin tones" – which is why we actually see Mr. Gatsby toasting to us in the first thumbnail But you'll notice in my screenshot that we don't see him toasting. ### Expected result We should see him ### Actual result We see the same as the `cropFocus: ENTROPY` example

### CASE-7387 · yarn develop gets stuck at ? Source and transform nodes
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬8 · closed · labels: stale?
- **Excerpt**: Hello! The problem with our gatsby project is that it gets stuck at the same line. Everything seems to work fine but it doesn't.. Here is what appears on the command line: `> gatsby develop success open and validate gatsby-config - 0.004 s success load plugins - 0.195 s success onPreInit - 0.605 s success delete html and css files from previous builds - 0.368 s success initialize cache - 3.565 s success copy gatsby files - 0.267 s success onPreBootstrap - 0.008 s ? source and transform nodes =START PLUGIN===================================== Site URL: [link] Site hosted on Wordpress.com:…

### CASE-7392 · examples/using-page-transitions/ does not transition out
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/help wanted/good first issue
- **Excerpt**: ## Description The example "using-page-transitions" stopped working correctly. Specifically, it does not seem to perform a "transition-out". When navigating, the current page should fade out before the next page fades in. I was relying on this example for my website, and I noticed this problem today, when upgrading from `2.0.0-beta.67` to `2.0.0-rc.0`. ### Expected result When navigating, the current page should fade out before the next page fades in. ### Actual result The current page does not fade out, but disappears abruptly, and the next page immediately fades in. ### Environment System:…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-7315 · [v2] Error: Gatsby-Browser.js - window is undefined
- **Principles**: P-D4, P-F1, P-F5 · **Env**: react
- **Signals**: 👍0 💬9 · closed · labels: type: bug/help wanted
- **Excerpt**: Hi, I'm getting this error in my gatsby-browser.js during gatsby develop. gatsby-browser.js ``` import picturefill from 'picturefill'; export function onClientEntry() { picturefill(); } export function onRouteUpdate() { window.scrollTo(0, 0); // When moving to another page it will always go top picturefill(); console.log('ReactDOM.render has executed'); if (process.env.GATSBY_ENV !== 'production') { let ev = document.createElement('script'); ev.type = 'text/javascript'; ev.async = true; ev.setAttribute('data-ev-tag-pid', 8873); ev.setAttribute('data-ev-tag-ocid', 2014); ev.src = ('https:' ==…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7316 · [gatsby-source-filesystem] errors are ignored in createRemoteFileNode
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬9 · closed · labels: help wanted
- **Excerpt**: Took me a while to find a bug in my `sourceNodes` code, because errors are ignored in `createRemoteFileNode` inside [processRemoteNode]([link] framework]/blob/master/packages/gatsby-source-filesystem/src/create-remote-file-node.js#L233) function. I kept getting `null` back from `createRemoteFileNode`. So after some digging, I put a console.log directly into gatsby-source-filesystem inside my node_modules and see the error ``` error TypeError: createNodeId is not a function at /home/bojan/www/instaset/website/node_modules/gatsby-source-filesystem/create-file-node.js:61:11 at Generator.next…

### CASE-7341 · DEV_SSR: true mode reevaluates node_module packages during SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: ## Description `DEV_SSR: true` mode reevaluates node_module packages during SSR, even though they didn't change. This causes packages that have global state (`globalThis.something = true`) to potentially behave in unexpected ways, as well as causes `instanceof` checks to fail if you are keeping a reference to a class instance from one of these libraries. ### Steps to reproduce [link] ### Expected result Imported node_modules are only evaluated once during DEV_SSR on the dev server, within the same JS isolate. Because it can be helpful to know what others in the community are doing, I also…

### CASE-7351 · 'window is not defined' error from build files
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug
- **Excerpt**: ## Description In build I constantly get the dreaded 'window is not defined' error from files I'm sure how to tackle. These are files I suspect have to do something with the page build and they consistently throw this error only in build time. I major change I did today is re-installing the ```package-lock.json ```file to solve another issue. But this came up after the initial issue was solved. Repo: [link] ### Steps to reproduce Run ```gatsby build``` ### Expected result No ```window``` related issues as I don't use it un-safely in my code, knowing it might cause problems with SSR. ###…

### CASE-7364 · [bug] Generating SSR bundle fails
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When running `gatsby develop` I get a webpack `ERROR [ref]` It also adds that babel `Cannot find module './src/data'` ### Steps to reproduce I tried reproducing to no avail. What I did that led me here was update from `[email]` to `[email]`. I also…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7322 · Source maps not working
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: If I set a breakpoint, the Chrome devtools show me the transpiled source. Are source maps not enabled by default? I've created a default starter en run `gatsby develop`.

### CASE-7354 · [gatsby-image] Wrong responsive aspect ratios on initial load
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: ios, mobile, desktop
- **Signals**: 👍13 💬8 · closed · labels: type: bug/topic: media/status: needs core review
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When loading images with different aspect ratios the wrong ratio is applied on initial page load. In the following example this is shown by loading a 2x3 image on mobile (<678px) and a 16x9 on desktop (>678px). This only occurs when on the built version…

### CASE-7393 · GIF not working in markdown-remark
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: macos
- **Signals**: 👍1 💬8 · closed · labels: stale?/status: needs more info
- **Excerpt**: ## Description Hey, everyone, I hope you can help! I am having a small issue with Gifs not working in markdown remark. They are reproduced in the build but they don't scale and they break the grid. ### Steps to reproduce 1. Add ![Gif](image_preview.gif) 2 Run develop 3. Gif added and multiple breakpoints to the site. ### Expected result Gif is on the page but scales as the browser scales the same as the example of using-gatsby-remark ### Actual result What happened. ![image]([link]) ![image]([link]) (sorry for my too many tabs if it gives you anxiety) ### Environment <!-- ` System: OS: macOS…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7340 · In development mode page loads styles not related to current page
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/status: needs more info/topic: plugins-styling
- **Excerpt**: ## Description I have "theme.scss" style which contains some color, grid sizes and other common styles. I do `@user "theme"` from other components I use those grid vars in, so I load theme in every component scss file. After page is loaded, I see in component styles, that it duplicates global styles from all other pages that load it. Since it does not reproduce on build, I suppose that's a bug? ![localhost:8000:404: 2021-03-04 18-35-50]([link]) <img width="1309" alt="localhost:9000:404: 2021-03-04 18-35-12" src="[link]> On real project it lead to something like this: <img width="283"…

### CASE-7345 · 'Duplicate "graphql" modules' error when developing a theme
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: ## Description I'm trying to convert a Gatsby plugin/starter I've been developing into a proper theme. I started with the [theme starter workspace]([link] framework]-starter-theme-workspace) and added the relevant code and plugin dependencies. All the code is available at [link] The theme appears to be working when published to the NPM and applied to an external Gatsby project, but I'm having problems applying the theme to the example project that is part of the theme starter workspace -- I'm getting the 'Duplicate "graphql" modules' error as shown below. Is there anything obvious that I'm…

### CASE-7352 · Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I am trying to setup a Gatsby site using Gatsby blog theme starter, everything works as expected, till the time I run `gatsby develop` ### Steps to reproduce Run below commands, which i picked from [Gatsby official documentation]([link]) `gatsby new…

### CASE-7361 · Bug with `gatsby-plugin-mdx` and multiple `gatsby-remark-*` plugins
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When I do the following steps an error occur during the building of the bundle. ### Steps to reproduce 1. `gatsby new reproducing-bug [link] framework]-starter-blog-theme` creating a new site from the blog theme starter. 2. `cd reproducing-bug` 3. Add a…

### CASE-7362 · Adding any gatsby dependency to a plugin causes build to fail
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed · labels: type: bug/stale?/topic: webpack/babel
- **Excerpt**: ## Description My end goal is to create my own blog theme which provides a `gatsby-config.js` file that loads and parses `markdown` files. Using the [`using-multiple-local-plugins`][local] as a starting point, I added the `gatsby-plugin-twitter` as a dependency to the `gatsby-plugin-console-log-a` directory. After doing so, `npm start` fails to build the `gatsby-site-using-local-plugins`. ### Steps to reproduce 1. Copy the [`using-multiple-local-plugins`][local] to your machine. 2. Install `gatsby-plugin-twitter` in the `gatsby-plugin-console-log-a` plugin. ```shell cd…

### CASE-7370 · gatsby-theme-blog error when using footnotes
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/stale?/status: confirmed/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description The gatsby-theme-blog produces an error when trying to use markdown footnotes ### Steps to reproduce 1. Create a new Gatsby site using the gatsby-theme-blog (e.g `gatsby new my-themed-blog [link] framework]-starter-blog-theme`) 2. Create a post with…

### CASE-7372 · Blog Theme error message
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description Created a site with `gatsby-starter-blog-theme`, and there is a `unique key` error message in the Gatsby Develop terminal. ### Steps to reproduce I created a test site for trying out Gatsby Themes with the following command: `gatsby new my-blog [link] framework]-starter-blog-theme` Then started: `gatsby develop` _***I did not create a demo project for testing since it was a baseline site. I can if need be.***_ ### Expected result It is expected that the new site starts with no error messages. Even though this error message displays, the site loads normally. ### Actual result…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7358 · `optimize-hook-destructuring` throws when skipping some items
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬8 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Updated description: Skipping some items when destructuring arrays returned by hooks result in following errors: ``` Property value of ObjectProperty expected node to be of a type ["Expression","PatternLike"] but instead got null ``` To reproduce (and test) - add following test to [link] framework]/blob/master/packages/babel-preset-gatsby/src/__tests__/optimize-hook-destructuring.js: ``` it(`should handle skipped items`, () => { const input = trim` import { useState } from 'react'; const [, setCount] = useState(0); ` expect(() => babel(input)).not.toThrow()…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-7365 · Fonts flicker on load and reload
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed · labels: stale?/status: needs more info
- **Excerpt**: I'm building out my portfolio site using Gatsby and I'm pretty much finished with it but I'm running into a problem with my fonts producing a sudden flicker on page refresh. Almost as if the site is falling back on fonts then quickly loading the intended font-family. I checked the network tab and the fonts are being loaded with a 304 status code, I'm not sure if that could be attributed to the problem or not. This was happening when I was importing the fonts from Google fonts in a sass file (using the @user import) and figured that was the problem. So I instead reached for the typography.js…

### CASE-7384 · Font loading fails without giving any errors
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ## Summary Can someone please explain how to load fonts in Gatsby? Edit: I resolved my issue in a different way, but I would still like to understand how to load fonts properly. ## Relevant information I'm working on [this Gatsby starter]([link]). If you scroll down and refresh the main page, you will notice that text jumps around during page load. I'm trying to fix that. Currently the browser renders "fallback font settings" first and then some JavaScript is executed which loads the real font and changes font-weight. This causes the jumpyness. I don't have much experience with web fonts,…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7377 · gatsby-source-filesystem breaks in v2.0.40
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: I'm going through the gatsby tutorial, and I got stuck on the Source Plugins section ([link]), as including the gatsby-source-fileystem stops compilation with the following message: ``` >gatsby develop success open and validate gatsby-configs - 0.013 s error Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method. error UNHANDLED REJECTION TypeError: Cannot read property 'startTime' of undefined - reporter.js:29…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7388 · gatsby.org starter-pack sidebar doesn't have a scroll bar (in Firefox)
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3, P-D4, P-F5 · **Env**: firefox
- **Signals**: 👍1 💬8 · closed · labels: good first issue
- **Excerpt**: ## Description The starter pack website, once filtered, doesn't have a scroll bar to allow me to scroll though the filters. This means that only after I reach the bottom of the main content does the sidebar content scroll. ### Steps to reproduce Go to [this link]([link]) and scroll on the sidebar. ### Expected result When my cursor is above the sidebar, and I turn the wheel on my mouse the sidebar should scroll. Alternatively, I should be shown a scrollbar so I can drag my mouse to where i want it to be. ### Actual result There is no scrollbar in the sidebar. When it is active and I am…

