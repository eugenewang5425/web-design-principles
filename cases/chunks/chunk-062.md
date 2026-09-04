# Case Chunk 062 — Round 62

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-7101 · gatsby-source-wordpress content images does not appear in develop
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: type: bug/topic: source-wordpress
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description in the example repo if you write /test in the browser the images don't appear, but if you go to another page and go back, or go there through a link then they appear ### Reproduction Link [link] ### Steps to Reproduce 1.clone the repo…

### CASE-7102 · Cannot read property 'split' of undefined
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬13 · closed · labels: type: bug/topic: webpack/babel
- **Excerpt**: ## Description Hey, everyone. So I updated these packages from ``` "gatsby": "^3.1.1", "gatsby-plugin-image": "^1.0.0", "gatsby-plugin-sharp": "^3.0.0", "gatsby-source-wordpress": "^5.2.0-alpha-wordpress.34" ``` to: ``` "gatsby": "^3.2.1", "gatsby-plugin-image": "^1.2.1", "gatsby-plugin-sharp": "^3.2.1", "gatsby-source-wordpress": "^5.2.2", ``` Now I'm having [this error]([link]), that I don't know where or how to trace, when I run gatsby build. The same error can be seen in Netlify. There are no errors or warnings in development mode though. I tried reverting back all the updates I've done,…

### CASE-7104 · Gatsby doesn't work with React 17 RC (Error: React-Hot-Loader: AppContainer should be patched)
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍1 💬13 · closed · labels: type: bug
- **Excerpt**: 1. Update `react` and `react-dom` to `17.0.0-rc.1` 2. Update `gatsby` to latest 3. Run `yarn dev` This is the result: <img width="706" alt="Screenshot 2020-09-21 at 17 45 55" src="[link]> While there's ongoing work to make Fast Refresh the default for compatible setups, in the meantime, can we figure out how to fix this error? I'm guessing that what needs to happen is for [link] to be solved by publishing a patched package. This is likely little work, but requires access to that package (cc @user). I could do this myself if I had the instructions.

### CASE-7108 · Gatsby develop refresh endpoint memory leak
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug/topic: source-contentful
- **Excerpt**: ## Description Each time the refresh endpoint is hit, memory increases a little bit and it doesn't go down, eventually leading to a heap out of memory after multiple refreshes. develop process memory previous to a refresh: ![image]([link]) develop process memory after a refresh: ![image]([link]) and hitting more times refresh it just goes higher. adding **--max_old_space_size** to a high value just delays the out of memory. ### Steps to reproduce gatsby develop hit refresh endpoint wait until refresh finishes hit refresh endpoint ... ### Expected result Memory should not increase without…

### CASE-7109 · [gatsby-plugin-offline] causing "A preload <link> was found... but was not used by the browser"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍9 💬13 · closed · labels: type: bug/status: needs core review
- **Excerpt**: # Description According to the Lighthouse report (version 6.1.0), `gatsby-plugin-offline` inhibits the browser to properly use `preload links`. ### Steps to reproduce ``` $ git clone [link] framework]-starter-blog.git $ cd gatsby-starter-blog $ sed -i -e 's|// `gatsby-plugin-offline`|`gatsby-plugin-offline`|' gatsby-config.js $ yarn; yarn build $ gatsby serve $ lighthouse [link] --only-categories=performance --view ``` ![image]([link]) ### Adding `crossorigin` attribute does not help I tried to do the obvious and installed the plugin `gatsby-plugin-preload-link-crossorigin`. The plugin adds…

### CASE-7113 · Prefix-paths not always prefixing static assets on build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: status: needs reproduction/status: awaiting author response
- **Excerpt**: ## Description When I run `gatsby build --prefix-paths` after running `gatsby clean`, all of the paths in my site are appropriately link; however, if I run `gatsby build --prefix-paths` again (without cleaning), certain assets lose their path prefix. This affects the assets that have a link starting with `/static/` in particular, and effects objects across my site, such as images loaded with Gatsby Image in JSX, as well as images and files generated from markdown. ### Steps to reproduce 1. Use a prefix path, and add an image somewhere in your gatsby site 2. Run `gatsby clean` 3. Run `gatsby…

### CASE-7114 · Sorting an array of objects does not update img src
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬13 · closed · labels: stale?/status: awaiting author response
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description This only occurs in a production build. When providing an array of objects that include an image source url to a component, you would expect the properties to display per object. Shuffling the array randomizes everything, but React seems to re-render…

### CASE-7118 · Issue with deploying to Netlify (Sharp plugin and libvips)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: status: awaiting author response
- **Excerpt**: ## Description Build works fine locally (OSX) but fails when deploying to Netlify. ### Expected result Successful deploy to Netlify ### Actual result This is the build log from the Netlify console. ``` 10:24:06 PM: Build ready to start 10:24:07 PM: build-image version: 8e315e54bc4032a32e73290be556cde4f8348c12 10:24:07 PM: build-image tag: v2.8.2 10:24:07 PM: buildbot version: b925d11411cabfe7b120501027bd0e96dbc28dde 10:24:07 PM: Fetching cached dependencies 10:24:08 PM: Starting to download cache of 340.6MB 10:24:10 PM: Finished downloading cache in 2.656395246s 10:24:10 PM: Starting to…

### CASE-7119 · Add DuoTone options to cache key
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug/help wanted/stale?/good first issue/status: confirmed
- **Excerpt**: ## Description On the gatsby-starter (and others) when I set a duotone on an image query... ```` <StaticQuery query={graphql` query { placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) { childImageSharp { fluid( maxWidth: 200 duotone: { shadow: "#10c5f8", highlight: "#32CD32" } ) { ...GatsbyImageSharpFluid } } } } `} ```` all works well. However when I change the highlight and shadow colours it still renders the old colour choices. I have emptied all caches etc to no avail ### Steps to reproduce Change highlight and shadow colours and rebuild ### Expected result New…

### CASE-7120 · SOLVED: Weird image 'popin' before page renders
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Images and icons are displayed really large on the screen before the page actually loads and renders everything correctly. Lasts half a second or so. ### Steps to reproduce Install fresh gatsby site Load in some svg images or icons Run "gatsby develop" or…

### CASE-7121 · [schema] Only download and process 3rd party images as they are queried
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: topic: media
- **Excerpt**: ## Summary Compile an 'expected schema' from queries that are created by the user in components and in gatsby-node.js. This can be used to reduce build times, address image processing issues, and implement better preview experience. Use it in gatsby-image to ensure the image being processed could be used in the app. For hot reloading and preview use the schema to update static pages generated in gatsby-node.js that do not respond the same way a page with a staticQuery does. ### Basic example Using the same mechanism that runs the static queries, collect them along with queries in gatsby-node…

### CASE-7123 · Gatsby does not recognize Contentful 404 page
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description According to [the docs]([link]), creating a page whose path matches the regex `/404*` should be recognized as the 404 page. However, the development 404 page says no custom 404 page was detected even though a page with such a path exists. <img width="1422" alt="custom-404-not-detected" src="[link]> ### Steps to reproduce Create a page in Contentful with slug `/404`. ### Expected result Show button to preview custom 404 page.

### CASE-7124 · Gatsby + NetlifyCMS image src not correct and srcset not being used
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description After gatsby develop and build, the src attribute of images in markdown files(coming from NetlifyCMS) tries to look at where the image has been saved in the repo - ../../../static/assets/image.jpg This occurred after updating a number of packages:…

### CASE-7125 · If gatsby-image already has an item in cache, don't show the placeholder
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍9 💬13 · closed · labels: type: bug
- **Excerpt**: You can see this happening on this blog post. Click to it and back several times. The blurred up base64 image is shown every time. [link]

### CASE-7134 · gatsby-plugin-image class styles break user created styles & CSS frameworks like Tailwind CSS
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍7 💬12 · closed · labels: type: bug/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description The current implementation of `gatsby-plugin-image` injects it's CSS classes in a `<style>` element that is placed last in the DOM tree, after user created styles loaded via `gatsby-browser.js`. Making it impossible to override any of its…

### CASE-7139 · [gatsby-source-wordpress] parsed content images are not being replaced properly
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/topic: source-wordpress
- **Excerpt**: ## Description Some very funky stuff is happening with the image URLs gatsby replaces, it seems only some of them are getting picked up. Attached are some screenshots & the generated markup ![Screen Shot 2021-02-22 at 2 17 58 PM]([link]) ` <img loading="lazy" width="1024" height="512" src="[link] alt="" class="wp-image-198" srcset="/wp-content/uploads/2020/04/SD_Journal_YamsDay_004-1024x512.jpg 1024w, /wp-content/uploads/2020/04/SD_Journal_YamsDay_004-300x150.jpg 300w, /wp-content/uploads/2020/04/SD_Journal_YamsDay_004-768x384.jpg 768w,…

### CASE-7141 · `gatsby-source-filesystem` Race Issue `copy`ing Files
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, linux, windows
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?/topic: source-plugins
- **Excerpt**: ## Description This issue is a somewhat "hard-ish to reproduce, but seems clear to explain" issue with `gatsby-source-filesystem` when repeatedly copying the same file many times as part of a build. I think the logs exhibit the issue clearly enough to make sense of it though. I'm using [gatsby-remark-relative-images]([link]) to collect the images. The pages have references to an "OS/platform" (macos, linux, windows), with an icon used for each. As a result, I end up with a lot of operations for `gatsby-source-filesystem` to process on the same images. The core of the issue is: Gatsby will…

### CASE-7142 · Build error: Graphql "Input file contains unsupported image format"
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?/status: awaiting author response
- **Excerpt**: ## Description Some types of images cause Gatsby to throw an error during build. There's no error message or context that shows **which specific image** is causing the problem. While I'm pretty sure the actual error lies in a dependency of Gatsby, may aim with this bug report is to find out how to **figure out which image is causing the problem**. That, I believe, Gatsby could tell me. I have a site with ~2k images, and some of them throw this error. It's quite laborious to try to figure out which ones by trial an error! ### Steps to reproduce This is a 2 repo project. I've setup both repos…

### CASE-7144 · [Build Error] Out of memory when pages exceed 95
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/topic: performance
- **Excerpt**: ## Description Everything works fine when pages are 95, but after adding one more simple page and run `build` I got this error. ![image]([link]) I searched and tried this `node --max_old_space_size=12000 ./node_modules/.bin/gatsby build`. There is no error but the build time is very long (from 100s to around 600s with 1 more page) and still fail in Circle CI, so I don't think that is a solution. I totally stuck and need help. ### Steps to reproduce Clone this project. [link] ``` // at master branch yarn install yarn build ``` ### Expected result It should be able to build. If delete some page…

### CASE-7145 · Extern scripts being fired unreliably
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: ## Description hi guys I still have some issues with a script tag changing HTML in my gatsby template, I found that for some reason if the function is fired multiple time with setInterval then it works there (it used to work in the live repo too but now for some reason it stopped working as well) ### Steps to reproduce [link] as you can see if the setInterval is outcommented it will be shown wrong (placeholder image of some kind?) but if you remove the `//` then it works again as expected ### Expected result It should show a link with hover effect and other styles etc instead of an image ###…

### CASE-7148 · Gatsby 2.13.50 installing incompatible gatsby-cli
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Gatsby 2.13.50 uses a `^` to include `gatsby-cli`. This lead to in npm install causing us to pull in an incompatible version of the gatsby cli. ![image]([link]) This version causes the error: ``` The above error occurred in the <ReduxStoreProvider>…

### CASE-7150 · gatsby-remark-images: disable background-image on gatsby-resp-image-background-image to prevent FOUB
- **Principles**: P-A3, P-H1 · **Env**: edge
- **Signals**: 👍3 💬12 · closed · labels: help wanted/good first issue
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description [gatsby-remark-images]([link] framework]/tree/master/packages/gatsby-remark-images) has a blur-up effect that does not work well on `.png` images with transparent edges. I looked at the gatsby-remark-images [source code]([link]…

### CASE-7152 · Images not being copied to public/static on gatsby build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I am receiving 404 errors when rendering images from MDX files after running `gatsby build`. Initially I thought it happens to certain images but it happens randomly enough that I am not sure if it's an issue with the images or a config issue. I am…

### CASE-7154 · Gatsby-image fails in build in this repo, solved when removing a specific styled component
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: If you clone this [repo]([link]) and do 1. yarn 2. yarn workspace site develop everything works as expected, but if you 3. yarn workspace site build 4. yarn workspace site serve you should notice that the images of the 2 posts in `localhost/9000` are not shown. If you inspect it, the `<picture>` tag is missing. The problem is located [here]([link]) and [here]([link]) Somehow, gatsby doesn't like if you style `GIcon` here (which itself is styling a span). It is weird (because it seems completely unrelated). If you change [this]([link]) with ``` const Icon = ({ g_building }) => <GIcon…

### CASE-7158 · gatsby-plugin-manifest not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: same setup with [ref], installed the next version, checked the migration guide and nothing works except tons of uninformative error. ![image]([link]) Double checked with the guide and make sure the images are in correct position. Here is my `gatsby-config.js` ```javascript { resolve: `gatsby-plugin-manifest`, options: { name: "GatsbyJS", short_name: "GatsbyJS", start_url: "/", background_color: "#f7f0eb", theme_color: "#a2466c", display: "minimal-ui", icon: "src/images/favicon.png", // This path is relative to the root of the site. }, }, ``` basically, **every** plugin that is on v2 does not…

### CASE-7166 · GatsbyImage not working with JavaScript disabled via CSP (uBlock Origin, Noscript addons)
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬11 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description It seems that while GatsbyImage is designed to have the `<noscript>` tag support and work with both JavaScript enabled or disabled, this is not always the case. Many prosumers seem to use uBlock Origin ([link]) or NoScript for blocking…

### CASE-7167 · Broken JS if `pagePath` contains `"` character
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/stale?/topic: frontend
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description As it is stated in [Gatsby docs]([link]), page paths must not be pre-encoded. If a page path contains `"` character, the resulting JS is broken. [link] <img width="1212" alt="Screen_Shot_2022-08-10_at_10_43_19" src="[link]> ###…

### CASE-7170 · WebpackError: TypeError: Cannot read property '__H' of undefined (gatsby-plugin-preact build time error)
- **Principles**: P-A3, P-H1 · **Env**: webpack, react
- **Signals**: 👍0 💬11 · closed · labels: type: bug/status: needs reproduction/topic: plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description We are facing a build time "WebpackError: TypeError: Cannot read property '__H' of undefined" error when we add the gatsby-plugin-preact you can also see in the below image. **Screen Shot:** ![Screen Shot 2021-12-02 at 4 32 29 PM]([link])…

### CASE-7174 · Gatsby-plugin-image - GatsbyImage not displaying image in IE11
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬11 · closed · labels: type: bug/stale?/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Upgrading from Gatsby-image to Gatsby-Plugin-Image, currently in IE11, it doesn't seem to be able to display the image with just a blank region. Didn't find any information on IE11 support or polyfill as this is quite new, assume this is a degradation?…

### CASE-7177 · Gatsby storybook tutorial does not support CSS modules
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/type: documentation/stale?
- **Excerpt**: ## Description Following the [visual testing tutorial ]([link]) from gatsbyjs.com ends with a storybook setup that does not support CSS modules. Here is a button component rendering via `gatsby develop` <img width="323" alt="Screen Shot 2020-08-31 at 4 36 08 PM" src="[link]> And here is the button rendering in storybook - the styles from the css modules are missing <img width="488" alt="Screen Shot 2020-08-31 at 4 36 13 PM" src="[link]> ### Steps to reproduce [Here is a minimal repo ]([link]) to reproduce, just run gatsby, and storybook to see the differences. ### Expected result The button…

### CASE-7178 · MDX v2 breaks Markdown images with gatsby-remark-images
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Attempting to upgrade to the latest version of MDX (2.0.0-next.7) breaks `gatsby-remark-images`. ### Steps to reproduce Minimal reproduction: [link] 1. Clone Repo 2. `npm install` 3. `gatsby develop` - note the missing image 4. `npm install @user/[email] @user/[email]` - install previous mdx 5. `gatsby clean` 6. `gatsby develop` - image appears ### Expected result These pages should render the same in both MDX 2.0.0-next.7 and 1.16.6. This isn't rendering the image in MDX 2.0.0-next.7 ``` import { Link } from "gatsby"; # Image issues ![Test](../images/gatsby-astronaut.png)…

### CASE-7179 · sizeByPixelDensity was deprecated because of a bug
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/stale?/topic: media
- **Excerpt**: ## Description Gatsby v2 is reporting that the `sizeByPixelDensity` option is deprecated (spamming our `gatsby develop` mode quite heavily in fact). Specifically [gatsby-plugin-sharp]([link]) documents this as a deprecated config option, but [gatsby-remark-images]([link]) doesn't. Also the deprecation reason in `gatsby-plugin-sharp` is wrong. This feature does work fine for JPEG and PNG files in Gatsby v1, but it is broken in Gatsby v2. We are in fact using this extensively for [link] Looking through some tickets that were opened around this topic, it seems this is the result of a lot of…

### CASE-7186 · Gatsby crashes every time I update existing .md files
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I have a blog with gatsby and every time i update an existing blog posts .md file, the gatsby develop command crashes with the following error: Field "featuredImage" must not have a selection since type "String" has no subfields. ### Steps to reproduce…

### CASE-7191 · Excerpt lacks space between paragraphs
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬11 · closed · labels: type: bug/help wanted/good first issue/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description While going through [Part 6 of the Gatsby tutorial]([link]), I noticed that generated excerpt output is displayed without spaces between paragraphs. So instead of receiving "Pandas are really sweet. Here's a video of a panda eating sweets." the excerpt is…

### CASE-7192 · Broken output of `gatsby build`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Hi, I'm having weird results when building my gatsby project, which is based on `gatsby-image`. When i run `gatsby develop` all looks good: <img width="932" alt="Screenshot 2019-06-01 at 21 54 12" src="[link]> However, when i run `gatsby build` (no errors) followed by `gatsby serve` (or serve `/public` via Caddy), I get: <img width="971" alt="Screenshot 2019-06-01 at 21 55 59" src="[link]> This happens as well when i delete `/public` and `.cache` before running both commands. It seems that assets (images, css) are not available or not properly linked. However, the image data is included in…

### CASE-7194 · [docs] [workflows] Improve docs for setting up a blog that pulls content from WordPress
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: type: documentation
- **Excerpt**: Part of the **Top 25 Learning Workflows initiative**. See [ref] for the meta issue that this issue falls under. # User story As a new Gatsby user, I want to create a blog/site that pulls content and images from WordPress and allows me to query it. # Evaluation | Search | Discover | Complete | Linked | Tone | Style | Overall | | --- | --- | --- | --- | --- | --- | --- | | :smile: | 😐 | 😐 | :smile: | :smile: | :smile: | 😐 | # Steps taken to implement 1. Searchability 1. Searched `gatsby wordpress` on Google; clicked [first result]([link]). 2. Discoverability 1. Searchbar: 1. Searched `gatsby…

### CASE-7195 · error GraphQL Error Unknown type "ImageSharpFixed"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: ## Description When I use `createRemoteFileNode`, I have an `error GraphQL Error Unknown type "ImageSharpFixed"` Node is created (available on `allFile`), but not in `allImageSharp` ### Steps to reproduce In `gatsby-node.js`, on create nodes, I try to download multiple image for each node ### Expected result Image should be available thought `allImageSharp` ### Actual result ``` gatsby_1 | $ gatsby develop --host 0.0.0.0 --port 12800 gatsby_1 | success open and validate gatsby-configs — 0.054 s gatsby_1 | success load plugins — 11.432 s gatsby_1 | success onPreInit — 0.017 s gatsby_1 |…

### CASE-7198 · Feature request: use file hashes to download the same asset only once
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed · labels: type: bug/help wanted/stale?/status: needs reproduction
- **Excerpt**: ## Summary If a static file is downloaded and cached in the browser, it shouldn't be downloaded again. The browser should just serve it from cache. Currently this is not working as it should, because separate GraphQL queries generate separate sets of assets - even when the output files are exactly same. This means that the exact same file will be generated into different paths, so the browser has to download the same file from multiple paths. ### More information I've put up a live demo at [link] When I go to the front page, my browser fetches [this image]([link]). When I click on the image…

### CASE-7199 · Babel errors shouldn't let the site run
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬11 · closed · labels: type: bug/help wanted/stale?/status: confirmed/topic: webpack/babel
- **Excerpt**: I'm in a hurry, feel free to close if I'm not following the template. I have some Babel errors: <img width="727" alt="screen shot 2019-01-19 at 9 48 26 pm" src="[link]> But the site still loads in DEV. I guess it just serves the previous version. This is very wrong and can lead to nightmare-ish debugging sessions. If there is a Babel error, refresh should show that error immediately. Not serve the previous version.

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-7103 · WordPress settings can't be queried?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: topic: source-wordpress
- **Excerpt**: It appears there is some sort of regression with settings from WordPress. Trying to query: ```graphql { wp { generalSettings { title } } } ``` Doesn't work. It says that a `databaseId` and `uri` are required input for querying the `wp` field. ![Screen Shot 2020-11-24 at 9 57 33 AM]([link])

### CASE-7149 · VSCode terminal stops showing input after running CLI
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed · labels: type: bug
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I can't see anything that I type after running `gatsby` from the VSCode terminal. ### Steps to reproduce 1. Run `gatsby develop` and hit Ctrl+C. 2. Terminal stops showing text input. ### Expected result Text input should still display after running…

### CASE-7156 · Impossible to declare multiple components that use <StaticQuery> in one file
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍2 💬12 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Say I want to have multiple components in a single file, that both use `StaticQuery` in one form or another. Example code: ```jsx // src/components/things.js import React from "react"; import {StaticQuery} from "gatsby"; export const MyFirstQuery = (props) => ( <StaticQuery query={some_query} render={() => <div>hello world</div>} /> ); export const MySecondQuery = (props) => ( <StaticQuery query={some_query} render={() => <div>hello world</div>} /> ); ``` ```jsx // src/pages/testpage.js import React from "react"; import { MyFirstQuery } from "../components/things"; export const…

### CASE-7182 · WSL: Problem renaming `reduxcache` while saving the redux cache
- **Principles**: P-G4, P-E3 · **Env**: windows
- **Signals**: 👍1 💬11 · closed · labels: type: bug
- **Excerpt**: This is split from [link] framework][ref] There appears to be a problem for a select number of users when Gatsby wants to save the cache. In particular, moving the temp folder to the main cache folder (through a rename) seems to fail. Reported by @user, @user, @user, and maybe @user (the source of their problem is probably caused by this). It appears to affect a lot of WSL users, if not only them. (@user's log output shows a user path that indicates the actual Gatsby calls run on a Windows host as well) ## Example logs ``` warn Error persisting state: EACCES: permission denied, rename…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-7105 · createPages uses stale cached data for "previous" and "next" pages
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: type: bug/topic: data
- **Excerpt**: ## Description I noticed this on my own blog's "previous post" and "next post" links, and it's reproducible on `gatsby-starter-blog`. It may have broader implications beyond my use case as well. If you have links to "previous" and "next" posts on each blog post's page, then those are not updated on each build. As you add posts, they remember their cached "previous" link, but are never updated with the "next." If a post is removed, then existing "previous/next" links are preserved. (And its page will still exist in the build.) ### Steps to reproduce I made a sample repo (almost identical to…

### CASE-7107 · runQuery filter in custom resolver breaks other queries (race condition?)
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: I define a custom relationship from neighbourhoods to stores using `createSchemaCustomization`: `gatsby-node.js` ```js exports.createSchemaCustomization = ({ actions, schema }) => { const { createTypes } = actions const { buildObjectType } = schema createTypes([ buildObjectType({ name: "SanityNeighbourhood", interfaces: ["Node"], fields: { stores: { type: "[SanityStore]", resolve: async ({ id }, args, { nodeModel }) => await nodeModel.runQuery({ query: { filter: { neighbourhoods: { elemMatch: { id: { eq: id } } } }, }, type: "SanityStore", firstOnly: false, }), }, }, }), ]) } ``` Then I…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-7106 · "source and transform nodes" is Too Opaque
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬13 · closed · labels: type: bug/stale?/topic: data
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I'm hung on the "source and transform nodes" step, and from the numerous related threads it seems this is a fairly common occurrence in Gatsby ... which is why this bug is _not_ yet another "please help me fix variant #972B of this bug" ;) Instead, this…

### CASE-7110 · Uncaught (in promise) Error: page resources for / not found. Not rendering React
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍9 💬13 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description I'm trying to use Gatsby with react-spring and react-three-fiber. I'm able to successfully get my example code to work while in develop mode. However, after a build and serving that page, I get an in-browser console error. **Uncaught (in promise) Error: page resources for / not found. Not rendering React at production-app.js:128 ** There are no build errors. The problem is not present when I change a.mesh to mesh. That initially led me to believe that this is a React-Spring and or three-fiber problem (and it still may very well be), but after checking issues here, I see other…

### CASE-7112 · "gatsby develop" produces "ERROR [ref] WEBPACK Generating SSR bundle failed Cannot find module '@user/core'”
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: webpack, bootstrap
- **Signals**: 👍2 💬13 · closed · labels: type: bug
- **Excerpt**: Here is the [full project on Github]([link]) I run gatsby develop and here is the full console output ``` gatsby develop success open and validate gatsby-configs - 0.042s success load plugins - 0.462s success onPreInit - 0.012s success initialize cache - 0.045s success copy gatsby files - 0.240s success onPreBootstrap - 0.062s success createSchemaCustomization - 0.018s success source and transform nodes - 0.165s success building schema - 0.502s success createPages - 0.066s success createPagesStatefully - 0.334s success onPreExtractQueries - 0.004s success update schema - 0.069s success…

### CASE-7116 · Image-sharp silently fails to process animated gifs
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: help wanted
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description If I have an animated gif in my content, image-sharp or transformer sharp does not throw any error, does not notify in any way that the image could not/has not been processed. ### Steps to reproduce Use an animated gif in content from your cms, see that…

### CASE-7122 · gatsby-transformer-xml README with wrong example
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: documentation/status: needs reproduction
- **Excerpt**: <!-- To make it easier for us to help you, please include as much useful information as possible. Useful Links: - Documentation: [link] - Contributing: [link] Gatsby has several community support channels, try asking your question on: - Discord: [link] - Spectrum: [link] - Twitter: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Summary The ['How to query']([link] framework]/tree/master/packages/gatsby-transformer-xml#how-to-query) section of the README for gatsby-transformer-xml package is wrong. ## Relevant information I have run the example…

### CASE-7126 · gatsby-transformer-csv hangs if CSV too large
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: stale?/topic: performance
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I'm trying to include data from a 3.5MB CSV using gatsby-transformer-csv. When I do `gatsby develop`, the terminal hangs at `source and transform nodes` for a long time but does eventually complete. Is gatsby-transformer-csv meant for files this large?…

### CASE-7127 · gatsby-plugin-emotion breaks rendering hooks
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: react
- **Signals**: 👍0 💬13 · closed · labels: type: bug
- **Excerpt**: ## Description After upgrading to the latest version of gatsby-plugin-emotion I noticed that some headers were missing from the ssr version of my pages. I added a log inside `onRenderBody` in my project's `gatsby-ssr.js` file and noticed it wasn't getting called at all. I was able to track it down to the usage of `babel-plugin-jsx-pragmatic` and `@user/plugin-transform-react-jsx` ([link] framework]/blob/master/packages/gatsby-plugin-emotion/src/gatsby-node.js#L4-L19). If I remove these lines then the rendering hooks get called again, but emotion is no longer working without adding the `@user…

### CASE-7129 · Prismjs + line numbers: Line numbers not aligned with code
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug
- **Excerpt**: ## Description PrismnJS: Line numbers in the gutter are not aligned with the code (on the X axis) ### Steps to reproduce Follow the instructions for setting up the gatsby prismjs plugin. The only thing I have done is in my gatsby-browser - i do ``` import "prismjs/themes/prism-okaidia.css" import "prismjs/plugins/line-numbers/prism-line-numbers.css" ``` here is the part of my config ``` { resolve: `gatsby-transformer-remark`, options: { plugins: [ { resolve: `gatsby-remark-prismjs`, options: { classPrefix: "language-", inlineCodeMarker: null, aliases: {}, showLineNumbers: true,…

### CASE-7130 · `gatsby-transformer-json` incompatible with `gatsby-source-contentful`
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug/help wanted
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I believe there's an incompatibility between `gatsby-transformer-json` and `gatsby-source-contentful` that results in an error on boot. I am experiencing this issue identically to [ref] (closed, marked stale). In short,…

### CASE-7133 · WP ACF repeater with image bug
- **Principles**: P-D1, P-D2, P-D3, P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: Node version v6.7.0 Gatsby version 1.9.108 gatsby-config.js : ``` module.exports = { siteMetadata: { title: `Anchor Employee Rewards`, date : `Today` }, plugins: [ `gatsby-plugin-glamor`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, { resolve: `gatsby-plugin-typography`, options: { pathToConfigModule: `src/utils/typography`, }, }, { resolve: 'gatsby-source-wordpress', options: { baseUrl: 'anchor-admin.wearewhy.co.uk', protocol: 'http', hostingWPCOM: false, useACF: true, verboseOutput: true, } } ], } ``` gatsby-node.js ``` const _ = require(`lodash`) const Promise = require(`bluebird`)…

### CASE-7135 · upgrading to gatsby-remark-katex v5.0.0 and/or gatsby-transformer-remark v4.0.0 breaks katex math equation
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: type: bug/help wanted/topic: remark/mdx
- **Excerpt**: ## upgrading to gatsby-remark-katex v5.0.0 and/or gatsby-transformer-remark v4.0.0 breaks katex math equation When I use gatsby-remark-katex v4.2.0 and gatsby-transformer-remark v3.2.0, katex math equations are working correctly ![aaaa]([link]) But when I update to the latest gatsby-remark-katex v5.0.0 and gatsby-transformer-remark v4.0.0, katex math equations no longer work ![bbb]([link]) ### Steps to reproduce I've created a minimal repo at [link] If you `yarn install && yarn start`, it will work. But if you update to the latest gatsby-remark-katex v5.0.0 and gatsby-transformer-remark…

### CASE-7136 · Automatic JSX runtime needs to be configured twice
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react, webpack
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?
- **Excerpt**: I've created an example monorepo that contains Gatsby sites and components in separate packages, and uses the new automatic JSX transform in React 17. In Gatsby v3, I seem to need to configure the JSX transform automatic runtime twice, in `gatsby-node.js` and `.babelrc.js`. This seems incorrect. ### Steps to reproduce Minimal reproduction: [link] If I remove the configuration in `gatsby-node.js`, building static HTML fails with `WebpackError: ReferenceError: React is not defined`: <details> ``` $ gatsby build success open and validate gatsby-configs - 0.045s warn Plugin…

### CASE-7143 · Link causes an Illegal invocation when using a masonry page
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: type: bug/stale?
- **Excerpt**: When using a masonry approach heavily inspired by the implementation provided by `react-spring`, but without using the library (css transitions instead), it seems that I cannot use the `<Link>` element Here is a minimal repo [link] When you travel to the `index2` page you get a warning in the console, apparently nothing else happens but in my app I see a blank page and I have to reload the page to see it (e.g. I cannot use the header since it has a `<Link>` and when in the masonry page it no longer works) Using a regular `<a>` seems to work ``` react-dom.development.js:188 Uncaught TypeError:…

### CASE-7161 · contentful API failing to fetch
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: Any idea, what could have gone wrong with contentful. I am using ``` "gatsby-source-contentful": "^1.3.31", ``` For the past couple of hours, I am seeing the below error on **all** my contentful projects. ``` gatsby develop success delete html and css files from previous builds — 0.009 s success open and validate gatsby-config.js — 0.005 s success copy gatsby files — 0.018 s success onPreBootstrap — 0.676 s ⡀ source and transform nodesStarting to fetch data from Contentful Fetching default locale ⠈ source and transform nodes[warning] Connection error occurred. Waiting for 2092 ms before…

### CASE-7173 · [gatsby-plugin-image] Blurred placeholder does not respect attention cropping
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/not stale/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description I have a static image: ``` <StaticImage alt="My alt" aspectRatio={360 / 288} formats={["auto", "webp", "avif"]} layout="constrained" width={640} placeholder="blurred" src="./my-image.jpg" /> ``` having, by default, `transformOptions={{fit: "cover",…

### CASE-7175 · gatsby-plugin-image placeholder opacity transition is blinking
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬11 · closed · labels: type: bug/topic: media
- **Excerpt**: ## Description as discussed in [link] framework][ref]. The image is blinking when blurring from the placeholder to the real image. Looks like because of the placeholder being removed from the DOM, so the opacity transition isnt working. ### Expected result The blur up effect should blur from the placeholder to the image, without blinking to the background color. ### Actual result You see placeholder -> background -> real image transition ### Environment System: OS: macOS 10.15.7 CPU: (8) x64 Intel(R) Core(TM) i7-1060NG7 CPU @ 1.20GHz Shell: 5.7.1 - /bin/zsh Binaries: Node: 14.15.4 -…

### CASE-7176 · file system routing: Incorrect output type string
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/topic: source-wordpress
- **Excerpt**: ## Description "build-schema" throws an error complaining about the output type of "WpPost.gatsbyPath". ``` success source and transform nodes - 6.842s ⠦ building schema ERROR Missing onError handler for invocation 'building-schema', error was 'Error: WpPost.gatsbyPath provided incorrect OutputType: 'String''. Stacktrace was 'Error: WpPost.gatsbyPath provided incorrect OutputType: 'String' tring' at TypeMapper.convertOutputFieldConfig (C:\Users\Alex\code\moonmeister\moonmeister.net\node_modules\gatsby\node_modules\graphql-compose\lib\TypeMapper.js:294:15) at resolveOutputConfigAsThunk…

### CASE-7180 · Uneven .md vs. .mdx build times
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬11 · closed · labels: type: bug/stale?/topic: performance/topic: remark/mdx
- **Excerpt**: ## Description We run a documentation website that has hit a performance bottleneck at around 1000 pages. This led us to test the difference between **gatsby-transformer-remark** and **gatsby-plugin-mdx** to compare .md and .mdx build times. We realize that these are not the same plugin, but our expectations were that the build times of each would be closer in-line with one another (for the exact same files). We used the following repo to benchmark results: [link] Here were the results of our test using the auto generated files: | | | | |----------------------------|-------|---------| |…

### CASE-7184 · gatsby-transformer-json crashes when .json file in directory starting with a number
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬11 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description When running gatsby develop if you have the gatsby-transformer-json installed and anywhere in you file system you have a .json file directly inside a directory that starts with a number gatsby will crash with ``` UNHANDLED REJECTION Syntax Error: Unexpected Int "20" GraphQLError: Syntax Error: Unexpected Int "20" - TypeMapper.js:113 TypeMapper.createType [gatsby-json-crasher]/[graphql-compose]/lib/TypeMapper.js:113:43 - ObjectTypeComposer.js:80 Function.createTemp [gatsby-json-crasher]/[graphql-compose]/lib/ObjectTypeComposer.js:80:28 - ObjectTypeComposer.js:56 Function.create…

### CASE-7188 · Converting site from remark to mdx increases compile and build times up to 8x
- **Principles**: P-D1, P-D2, P-D3 · **Env**: macos
- **Signals**: 👍2 💬11 · closed
- **Excerpt**: I just ported my entire [personal site](https;//janosh.io) from Remark to MDX. Compile times went from 17 sec (Remark) to 135 sec (MDX) and build times increased from 32 sec to 193 sec (in each case as measured by an actual clock). This is way more than I expected so I was wondering if perhaps I did something wrong in following [the MDX guide]([link]) and if there is potential for easy optimization. ## Relevant information [Here's the commit]([link]) that made the transition. ### Environment ``` System: OS: macOS 10.14.6 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Shell: 5.3 -…

### CASE-7196 · [gatsby-transformer-remark] Extra space when link is in excerpt
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/status: confirmed/topic: remark/mdx
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When a markdown file includes a link that would be shown in the plaintext excerpt, an extra space is added after the link. ### Steps to reproduce 1. Clone [link] framework]-starter-blog 2. Modify `content/blog/hello-world/index.md` so that the first…

### CASE-7200 · [gatsby-plugin-sharp] Skip processing images with no ICC input profile
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/stale?
- **Excerpt**: I am having an issue with embedded ICC profiles that do not match (e.g. CMYK profile for RGB image) when using [gatsby-plugin-sharp][1]. Currently the troublesome images generate the embedded profile incompatible with image error and the processing of all fetched images fails. Could this be reduced to a warning and ignore the profile to carry on processing the remaining fetched images. Here is a sandbox of the issue - [[link]][3] The error I receive is error The GraphQL query from /sandbox/src/templates/event.js failed. Errors: icc_transform: no input profile vips_colourspace: no known route…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-7111 · cached module - create-react-context is breaking CMS
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, webpack, bootstrap
- **Signals**: 👍0 💬13 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description My current website is built with Gatsby and Netlify-CMS. Netlify CMS is internally using [link] which in turn uses create-react-context. When i try to access the CMS admin it breaks with this error: ``` ManagerContext.js:5 Uncaught TypeError: createReactContext is not a function at Object../node_modules/react-aria-menubutton/dist/ManagerContext.js (ManagerContext.js:5) at __webpack_require__ (bootstrap:725) at fn (bootstrap:100) at Object../node_modules/react-aria-menubutton/dist/Wrapper.js (Wrapper.js:12) at __webpack_require__ (bootstrap:725) at fn (bootstrap:100) at…

### CASE-7137 · gatsby-plugin-mdx: TOC broken with custom IDs
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍4 💬12 · closed · labels: type: bug/stale?/topic: remark/mdx
- **Excerpt**: ## Description I use `gatsby-remark-autolink-headers` with `enableCustomId: true` to create headers with custom link targets: # Header {#header} ## SubHeader {#subheader} The result is that the html code is produced as it should be: `{#header}` is removed, the `id` is applied to the `<h1>`: <h1 id="header" style="position: relative;"> <a href="#header" aria-label="header permalink" class="anchor before"></a> Header </h1> BUT: The TOC is not using new IDs and headers: ```graphql query MyQuery { allMdx { nodes { tableOfContents } } } ``` ``` { "data": { "allMdx": { "nodes": [ {…

### CASE-7140 · TailwindCSS 2.0.1 requires PostCSS 8: build breaks if Tailwind added via gatsby-plugin-sass
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬12 · closed · labels: type: bug
- **Excerpt**: ## Description The group-hover defaults are not working (like textColor and backgroundColor) and [following the docs]([link]) and specifying them in the config doesn't seem to take effect. <img width="850" alt="image" src="[link]> If specified in tailwind.config.js under variants > extend as shown in the docs, the changes don't have effect: <img width="528" alt="image" src="[link]>

### CASE-7146 · develop vs build styles mismatch due to sass imports
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3, P-F4 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: type: bug
- **Excerpt**: ## Description Variables imported from a sass stylesheet are undefined on `gatsby build`, but work fine on `gatsby develop`. This results in obscure bugs that only manifest themselves on first page load in production. I believe this might be the cause of some of these 'mysterious' issues where `gatsby build` styles differ from `gatsby develop`, since this probably also happens to each theme or plugin that uses preprocessor imports. ### Steps to reproduce Minimal reproduction based on `gatsby-starter-default`: [link] Run `gatsby develop`, and you'll see the background is violet. Run `gatsby…

### CASE-7151 · ESLint editor integration is not working on a new app
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬12 · closed · labels: stale?
- **Excerpt**: ## Description Hello! I'm having trouble setting up ESLint editor integration for my Gatsby site. It doesn't work a new app (steps below). I think I've ruled out my editor itself as the problem, because it does show inline ESLint errors with a new Create React App. ### Steps to reproduce 1. Run `gatsby new gatsby-site` 2. Add an unused variable to `index.js`, e.g. `let x = 'foo'` 3. Save file Here's a repo with an unused variable: [link] ### Expected result My editor (Atom) should show the ESLint error ### Actual result My editor shows no ESLint error. However, I do see the linting error in…

### CASE-7157 · dead code elimination with env variables
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬12 · closed · labels: stale?
- **Excerpt**: ## Summary Hello ! On a project, we want to be able to remove code from a bundle using environment variables. As it was not working as expected I made a simple reproduction with the default gatsby starter: [link] Here are the steps that I followed: in pages/index.js: ```diff import React from 'react' import { Link } from 'gatsby' import Layout from '../components/layout' const IndexPage = () => { + if (process.env.GATSBY_SHOULD_BE_REMOVED){ + console.log('THIS IS NOT REMOVED AND SHOULD BE') + } + if (!process.env.GATSBY_SHOULD_BE_REMOVED){ + console.log('THIS SHOULD NOT BE REMOVED'); + } + if…

### CASE-7162 · Environment Variables in gatsby-config.js not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: ## Description I want to use environment variables in my frontend code and in my gatsby-config.js. I followed the steps from [link] and for the frontend code it works perfectly with my two files: `.env.development` and `.env.production`. ### Environment Gatsby version: 1.9.183 Node.js version: 8.9.4 Operating System: macOS 10.13.3 ### File contents (if changed): `gatsby-config.js`: ``` require('dotenv').config(); module.exports = { plugins: [ {...} { resolve: `gatsby-plugin-google-analytics`, options: { trackingId: process.env.GA_KEY, anonymize: true, }, }, ], }; ``` `package.json`: not…

### CASE-7164 · Consider removing words that shouldn't be used in educational writing from the docs (simply, easily, just)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍16 💬12 · closed · labels: type: documentation/good first issue
- **Excerpt**: Pointing out how "simple", "obvious", or "easy" something is can have the opposite-of-intended effect. If a person doesn't understand the 'simple' code, the project can seem inaccessible. "I don't understand this easy thing. I guess I just don't get it like other people do." A good resource on words to avoid is [link] Some that appear often in the Gatsby documentation are "simply", "easily", and "just (do x)". For example, in the Plugins documentation: > Plugins are just Node.js packages meaning you install them like anything else in node using NPM. > Then in your site’s gatsby-config.js you…

### CASE-7187 · navigate / Link doesn't trigger refresh of current page when updating location state
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: I think I've spotted a bug with the Link / navigate component. The below code is accessible via /search-results, I've simplified it to hopefully make the bug easier to sport. When on /search-results, if you click the "Update Months" <Link />. I would expect the content to change to say "36 Months", however this doesn't update unless you refresh the page. If I placed that same <Link /> code on another route (Home for example), then clicked it. It would link to the /search-results page with the location.state prop correctly populated. It looks as though when updating the location.state prop of…

### CASE-7189 · --https fails if the path of the project contains spaces
- **Principles**: P-E1, P-E2, P-E4 · **Env**: windows
- **Signals**: 👍1 💬11 · closed · labels: type: bug/help wanted/stale?/good first issue
- **Excerpt**: ## Description command `gatsby run develop --https` fails in the generate certificate step if the path of the project contains spaces ### Steps to reproduce I'm on windows, so I don't know if the same steps will reproduce the issue on other OS's 1. Create a user whose name contains spaces 1. Create a project anywhere 1. Install openssl and add it to the PATH env variable 1. run the command `gatsby develop --https` ### Expected result Gatsby generates certificate and starts an https server ### Actual result Error `Error: Command failed: openssl genrsa -out C:\Users\User Name With…

### CASE-7193 · [gatsby-source-shopify] Timeouts during load; Limit of 250 is too large?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/help wanted/good first issue/status: confirmed
- **Excerpt**: ## Description Gatsby Shopify source plugin throws unhandled Timeout exception while building cache. When modifying the GraphQL query to use `first: 150` rather than `first: 250`, the cache is built and Gatsby starts. ### Steps to reproduce 1. Create a new Gatsby project 2. Add the Shopify source with API key (our store has 4300 products inclusive of unique variants) 3. Run `yarn start` ### Expected result Gatsby starts normally, with a fully built Shopify cache. ### Actual result Gatsby fails to start ``` npm WARN lifecycle The node binary used for scripts is…

### CASE-7197 · Using the useState setter doesn't rerender component from template
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ## Description `useState` Hooks do not work when they are part of a template. I tried multiple solutions, eg adding `pureSFC`. It just doesn't work. ### Steps to reproduce 1. Clone this [example]([link]) and install dependencies 2. Run `yarn start` 3. go to [[link]]([link]) and try changing the variants. ### Expected result The component should rerender and give the Variation a white BG. ### Actual result The state of the variant doesn't change, because the component doesn't rerender. The component is in this [repo]([link]) and in this [component]([link]) ### Environment System: OS: macOS…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-7115 · 'gatsby-remark-images` inside `gatsby-plugin-mdx` breaking styled-components...
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬13 · closed · labels: type: bug
- **Excerpt**: Hi @user, @user @user XD Not sure who to ping here, but this has been driving me nuts for a while, and i think I may have made a little progress in figuring out what is going wrong, at least... ## Description `gatsby-remark-images` inside `gatsby-plugin-mdx` seems to be completely breaking `styled-component` functionality if trying to render images inside a styled-component container `<div>` in `.mdx` files. ### Steps to reproduce In this example, I am trying to create a horizontal scrolling container using styled-components. @user created a minimal working example where he pulls in images…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-7117 · Gatsby Link error when rapidly changing pages
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬13 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ### Steps to reproduce Opening my personal site [janosh.io]([link]) (which I recently ported from Remark to MDX, maybe that's related since I didn't notice the following behavior before) and rapidly clicking links in the nav bar eventually results in a blank page. Reloading the page displays the error message "This site can’t be reached". ![offline]([link]) Doing a hard refresh (cmd + shift + R in Chrome) displays the page correctly. This seems to suggest that there's a problem with Gatsby Link. The Chrome console only shows ``` TypeError: n is not a function at…

### CASE-7128 · after build no html output
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox
- **Signals**: 👍1 💬13 · closed · labels: status: needs reproduction
- **Excerpt**: <!-- To make it easier for us to help you, please include as much useful information as possible. Useful Links: - Documentation: [link] Gatsby has several community support channels, try asking your question on: - Discord: [link] - Spectrum: [link] - Twitter: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Summary so i have a blog, everything works great when running gatsby develop, but when i run gatsby build && gatsby serve, and i check "view source code" on chrome and firefox, there is no html contents. and no meta tags from helmet. this is…

### CASE-7131 · [gatsby-plugin-offline] pathPrefix, 404
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/64, safari/537, linux, webkit
- **Signals**: 👍0 💬13 · closed · labels: type: bug/status: confirmed
- **Excerpt**: another `pathPrefix` issue, all pages 404 on subsequent loads nginx logs when reloading: ``` 213.93.201.49 - - [07/Sep/2018:17:06:55 +0200] "GET /offline-plugin-app-shell-fallback/index.html HTTP/2.0" 404 271 "[link] "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36" ``` Missing pathprefix there! ``` [4mSystem:[0m OS: Linux 4.9 Debian GNU/Linux 9 (stretch) 9 (stretch) CPU: x64 Intel(R) Core(TM) i7-7500U CPU @ 2.70GHz Shell: 5.3.1 - /bin/zsh [4mBinaries:[0m Node: 10.7.0 - ~/.nvm/versions/node/v10.7.0/bin/node Yarn: 1.9.4 -…

### CASE-7132 · Tutorial Part Six: No Date or Title in frontmatter in GraphiQL
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, windows
- **Signals**: 👍0 💬13 · closed · labels: help wanted
- **Excerpt**: ## Description In the part of the tutorial where we first view the frontmatter node in GraphiQL, the title is blank and the date node is missing. ### Steps to reproduce The problem is caused by copying all text in a code block in the tutorial from Firefox and pasting into a text editor on a Windows machine. 1. Using a Windows 10 machine, create a new empty text file called sweet-pandas-eating-sweets.md per the tutorial. 2. In Firefox, on the tutorial part six page, use your mouse to select all text in the markdown code block for sweet-pandas-eating-sweets.md. Be sure to select all text, from…

### CASE-7153 · Images webp doesn't work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome/, safari, macos
- **Signals**: 👍4 💬12 · closed · labels: status: needs reproduction
- **Excerpt**: My images `.webp` doesn't work. How to fix `.webp` please ? Or not to using it, prefering `.png` Thanks ## Description My images `.webp` doesn't work on Chrome/Safari. ### Steps to reproduce Nothing ### Expected result `.webp` should be status 200 instead 404. ### Actual result `.webp` has status 404. ### Environment ``` System: OS: macOS 10.14.3 CPU: (8) x64 Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz Shell: 3.2.57 - /bin/bash Binaries: Node: 10.16.0 - /usr/local/opt/node@user/bin/node Yarn: 1.16.0 - /usr/local/bin/yarn npm: 6.9.0 - /usr/local/opt/node@user/bin/npm Languages: Python: 2.7.10 -…

### CASE-7155 · Bug? on official website
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍2 💬12 · closed · labels: type: bug
- **Excerpt**: ## Description Here is a gif: ![nov-21-2018 20-42-26]([link]) ### Steps to reproduce Go to this link `[link] ### Environment Chrome on Mac Mojave Version 70.0.3538.102 (Official Build) (64-bit)

### CASE-7160 · Netlify CMS address printed in console redirects to gatsby development 404 page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍2 💬12 · closed
- **Excerpt**: ## Description Navigating to `[link] displays the gatsby 404 development page even though a page exists at `[link] We discussed this in gitter here: [link] Note: This does seem to be windows specific, because on my Mac it does not happen (both in Chrome) (tagging @user) ### Steps to reproduce 1. Execute `gatsby new my-default-project [link] framework]-starter-default#v2` 2. Execute `yarn add netlify-cms@^1.9.3 gatsby-plugin-netlify-cms@user` 3. Add `gatsby-plugin-netlify-cms` to your `gatsby-config.js` plugins array. 4. Run `gatsby develop` 5. Attempt to navigate to `[link] **or** 1. Clone…

### CASE-7165 · Is it possible to have 2 layouts?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍1 💬12 · closed
- **Excerpt**: hi, is it possible to have more than 1 layout? I searched issues, but can't find anything useful? I tried [ref] method, use the code below: ``` createPage({ path: edge.node.fields.slug, // required component: blogPost, context: { slug: edge.node.fields.slug, }, layout: 'noFooter', }) ``` but it doesn't work. Is there any examples or is it possible? thanks~

### CASE-7169 · [gatsby-plugin-mdx] unreachable code after return statement
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox
- **Signals**: 👍3 💬11 · closed · labels: type: bug/stale?/topic: remark/mdx
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When using `gatsby-plugin-mdx` and rendering `MDXRenderer` the following warning appears in the console on Firefox: `unreachable code after return statement` ### Reproduction Link [link] ### Steps to Reproduce 1. Clone and run reproduction…

### CASE-7181 · XMLHttpRequest cannot load [link] due to access control checks.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome
- **Signals**: 👍0 💬11 · closed · labels: stale?/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description safari don't work, chrome is ok safari debug display " XMLHttpRequest cannot load [link] due to access control checks." "XMLHttpRequest cannot load [link] due to access control checks." ### Steps to reproduce 1. open [link] website, add a product to…

### CASE-7185 · gatsby-starter-blog-theme printing "Functions that are interpolated in css calls will be stringified" error in console
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬11 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: ## Description Fresh Gatsby instance created using the command `gatsby new my-themed-blog [link] framework]-starter-blog-theme-core` is printing a "Functions that are interpolated in css calls will be stringified" error in browser console <img width="1371" alt="Screen Shot 2019-12-28 at 10 42 29 PM" src="[link]> ### Steps to reproduce 1. On a machine with gatsby and yarn installed globally run `gatsby new my-themed-blog [link] framework]-starter-blog-theme-core` 2. go into newly created folder and run `gatsby develop` 3. view the site in chrome and open the developer tools -> console. You…

### CASE-7190 · Gatsby pages with 'adwords' in slug do not work when AdBlock is active
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬11 · closed · labels: type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description It seems that any pages with the word **'adwords'** in the url do not work with the Google Chrome AdBlock extension active. I have not experienced this issue with any other page slugs before. I have tested this on a new Gatsby project using `gatsby new`…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-7138 · gatsby-image-plugin throws EnsureResources error when using createPages API
- **Principles**: P-A5, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: type: bug/stale?/topic: media
- **Excerpt**: ## Description I run a blog that's built on top of Gatsby. Our [initial Gatsby 3 migration]([link]) went down without too much trouble. (we're having some issues with specific images loading in build, but we're still investigating that) However, when we went to migrate to `gatsby-image-plugin` instead of `gatsby-image`, we ran into issues. Our pages that are built using `pageName.tsx` and default exports build just fine, but for the pages we're using `gatsby-node.js` and `createPages`, we hit the following errors: ``` Error in function EnsureResources.render in ./.cache/ensure-resources.js:86…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-7147 · [gatsby] `gatsby develop` produces minified source code
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍1 💬12 · closed · labels: type: bug/help wanted
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description The develop mode is producing minified source code, which means I can't add breakpoints ### Steps to reproduce ``` gatsby new test-site cd test-site yarn start ``` ### Expected result Code viewed in developer tools should allow breakpoints to be set on…

### CASE-7159 · [www/showcase] Make site detail modal responsive
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: Currently the details modal shown for window widths 750px and larger is hardcoded to that same width of 750px: [link] framework]/blob/49c52f5e78d56083a0cb45e8cd9306fcd0b92de4/www/src/components/layout.js#L74-L94 This means when reducing the window width below 750px, the modal content won't adapt to the screen width, resulting in first links to the next and previous sites to be cut off, and finally the modal content itself. Let's fix that!

### CASE-7172 · Responsive images generated with contain fit and an aspect ratio that causes pillarboxing are missing high resolution images
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · open · labels: type: bug/help wanted/status: confirmed/topic: media
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Images that get transformed with imagesharp using `fit: contain` and an `aspectRatio` that causes [pillarboxing]([link]) should add the pillarboxes *before* resizing the image for each breakpoint. Otherwise, we end up losing higher…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-7163 · Reset Scroll Position after page is loaded
- **Principles**: P-F4 · **Env**: opera
- **Signals**: 👍2 💬12 · closed · labels: type: bug
- **Excerpt**: ## Description Each time i load new page, the scroll position stays same as it was on the previous page. I want to reset the scroll position each time page is reloaded. ### Environment Gatsby version: 1.9.130 Node.js version: 6.10.2 Operating System: mac OS High Sierra ### File contents (if changed): `gatsby-config.js`: <!-- code block or not changed --> `package.json`: <!-- code block or not changed --> `gatsby-node.js`: <!-- code block or not changed --> `gatsby-browser.js`: <!-- code block or not changed --> `gatsby-ssr.js`: <!-- code block or not changed --> ### Steps to reproduce I've…

### CASE-7168 · graphql dependency is mismatched with graphql-compose
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬11 · closed · labels: type: bug/help wanted/status: confirmed/topic: GraphQL
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description There is a [known issue]([link]) with graphql-compose where it technically depends on graphql v16, but isn't explicit about it. Gatsby, after [ref], depends on this package but depends on an earlier version of graphql. As a result, the…

### CASE-7183 · Site's Server rendered components not getting cleaned up in browser
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug/status: confirmed/topic: core
- **Excerpt**: ## Description With two of my site's components, the NavBar and the CookieConsentForm. Multiple instances are present on load. It appears that the components created during the build, which I imagine are created using the component tree described in the `gatsby-ssr.js` are overriding OR existing with the components described in the `gatsby-browser.js` file. So in the example of the NavBar, the component looks a little like this ```javascript function NavBar() { <Router> <SimpleNavBar path="/landing-page/" /> <NavBar default path="/" /> </Router> } ``` This displays the right components at the…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-7171 · Remote MDX Frontmatter Image urls not working on Gatsby Cloud - Gatsby 4
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬11 · closed · labels: type: bug
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hi team. I tried to upgrade my theme to Gatsby 4 by when deploying to Gatsby Cloud i've noticed the remote images that are sourced from MDX Frontmatter and converted into File nodes to be processed with `childImageSharpe` using…

