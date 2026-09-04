# Case Chunk 060 — Round 60

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-6901 · Can't add breakpoints in Chrome DevTools
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-C1, P-C2, P-C3 · **Env**: chrome
- **Signals**: 👍7 💬33 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I'm not able to add breakpoints in Chrome DevTools after updating gatsby to version: `2.13.45` ### Steps to reproduce Use official theme starter `[link] framework]/tree/master/themes/gatsby-starter-theme` ### Expected result Be able to debug website in DevTools ### Actual result When I click on the line number bar I can't add a breakpoint. If I right-click and choose "Add breakpoint" the breakpoint is not showing up. Just noticed that I'm able to add a breakpoint but on the first line only. ### Environment Run `gatsby info --clipboard` in your project directory and paste the…

### CASE-6902 · [gatsby-plugin-mdx]: Double images / blurry / wrong style
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍31 💬33 · closed · labels: type: bug/status: confirmed
- **Excerpt**: I am using gatsby-remark-images in my Gatsby MDX powered website. Not sure whether this was introduced during the last months, because it worked before, but after upgrading everything I have to set the following style manually to override the responsive Gatsby style to make it work in my markdown. ``` .gatsby-resp-image-background-image { display: none !important; } ``` Otherwise I will have a large white space before my image gets rendered. <img width="1241" alt="Screenshot 2019-07-07 at 18 14 18" src="[link]> My images are used with the normal format in my markdown: `![my image…

### CASE-6994 · Contentful responsive image dimensions can be incorrect
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬19 · closed · labels: type: bug/help wanted/stale?
- **Excerpt**: ## Description When querying with `resolutions` or `resize` (and probably `sizes`; didn't try), if the requested dimensions are larger than the source image's natural dimensions and upscaling is disabled (as is default), the URL returned for the image points to an image with dimensions smaller than the requested dimensions. However, the `width` and `height` fields in the response say what the dimensions *would* be, had the image been upscaled. This means the details given in the srcset are incorrect, and also that the `img` tag has the larger dimensions, meaning the image will be upscaled in…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-6903 · [gatsby-plugin-offline] Default behavior serves stale data
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍24 💬33 · closed · labels: help wanted/topic: plugins-PWA
- **Excerpt**: ## Summary Default configuration for gatsby-plugin-offline serves stale data to users even when network is available. ## Relevant information Imagine a user who visits a website once a week. If the website has default gatsby-plugin-offline configuration, **the user will always see 1 week old version of the website** on their first pageload. Gatsby-plugin-offline is configured in such a way that it first serves stale content from its cache and then updates the cache in the background (so subsequent pageloads get a fresher version). I've been trying for hours but I can't seem to change this…

### CASE-6927 · gatsby-plugin-mdx: TOC broken with custom IDs
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬26 · closed · labels: type: bug/topic: remark/mdx
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description (This is in fact a duplicate of [link] framework][ref] which was closed by stalebot.) I use `gatsby-remark-autolink-headers` with `enableCustomId: true` to create headers with custom link targets: ``` # Header {#header} ## SubHeader…

### CASE-6937 · Catch and handle "The result of this StaticQuery could not be fetched"
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬25 · closed · labels: type: bug/not stale/topic: core
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When an outdated component attempts to fetch stale static query data from the server, the entire site crashes. While this issue involves the same error message as [ref], I don't understand what @user and @user have been tasked with solving…

### CASE-6966 · Potential memory leak when navigating between pages
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍3 💬22 · closed · labels: type: bug/stale?/status: confirmed
- **Excerpt**: ## Description If this is expected behavior or I'm reading the Memory tab wrong, feel free to close this 😅 What I'm seeing is when navigating between pages (even retracing steps back to an already-visited page), the JS heap size keeps growing. ### Steps to reproduce This happens on both my website and the React site. 1. Open [link] 2. Open DevTools > Memory > Take Heap Snapshot 3. Result: 13.7MB 4. Click 'Get Started' and click the 'Main Concepts' subheading on the right. Navigate through every page. 5. Take another snapshot > 22.6MB 6. Retrace all the steps backwards (already visited pages)…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-6904 · Gatsby Image - Unknown fragment ...
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬32 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description This morning I navigated to a Gatsby project of mine which has been in production for a year, fully functional. I launch a `gatsby develop` command and I'm getting an `Unknown fragment "GatsbyImageSharpFluid_noBase64"` error even though it worked for…

### CASE-6913 · gatsby-remark-images in MDX doesn't generate base64 placeholders
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬30 · closed · labels: type: bug
- **Excerpt**: ## Description Using `gatsby-remark-images` in MDX (see [this guide]([link])) doesn't generate a base64 placeholder. :arrow_right: [**demo repo**]([link]) :arrow_left: :arrow_right: [**live example**]([link]) :arrow_left: ### Steps to reproduce 1. create a new default gatsby site `gatsby new gatsby-image-with-mdx` 2. `cd gatsby-image-with-mdx` 3. install mdx and gatsby-remark-images `yarn add gatsby-plugin-mdx @user/mdx @user/react gatsby-remark-images` 4. configure the plugin and filesystem source in `gatsby-config.js`: ```javascript { resolve: `gatsby-plugin-mdx`, options: {…

### CASE-6914 · gatsby-plugin-sharp tracedSVG crashes build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬30 · closed · labels: type: bug/stale?/status: needs more info/status: needs reproduction
- **Excerpt**: ## Description Using tracedSVG on a file ending in .jpeg causes gatsby-plugin-sharp to report the following vague error: ``` error UNHANDLED EXCEPTION TypeError: Cannot read property 'bitmap' of undefined - Potrace.js:1000 Potrace._processLoadedImage [www]/[potrace]/lib/Potrace.js:1000:35 - Potrace.js:1046 Jimp.<anonymous> [www]/[potrace]/lib/Potrace.js:1046:14 - index.js:85 Jimp.throwError [www]/[jimp]/index.js:85:44 - index.js:201 ReadFileContext.callback [www]/[jimp]/index.js:201:44 ``` Of note, Twitter always uses .jpeg for its image suffix, so any images saved from Twitter will crash…

### CASE-6915 · Gatsby-source-wordpress not able to fetch image behind basic authenticate WordPress source
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬29 · closed · labels: type: bug/topic: source-wordpress/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Upgrading to latest gatsby-source-wordpress 6.10.0 has led to a build error of unable to fetch image error, with WordPress source that is behind basic authentication password protection. Build is fine once it's downgraded back to…

### CASE-6916 · Website fails to load completely
- **Principles**: P-A3, P-H1 · **Env**: bootstrap, webpack
- **Signals**: 👍0 💬29 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: ## Description Since I started using Gatsby a couple of months ago, I regularly get issues when visiting the published site. No issue in local development. The issue gets fixed when hitting Ctrl-Shift-R, but I can hardly expect all my visitors to do this every time... I just see this error in the console: <img width="629" alt="screen shot 2018-01-18 at 17 59 12" src="[link]> The `bootstrap%2003bd3a01b7024eecaa93:52` file shows this: ```js // Execute the module function modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); ``` This is in a file whose description…

### CASE-6917 · Issue: warning Query takes too long + Build breaks on netlify
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬28 · closed · labels: type: bug/stale?/topic: performance/topic: DX
- **Excerpt**: ## Description I'm getting the Warning `Query takes too long` on very small queries, for example: ``` export const pageQuery = graphql` query impressumPageQuery { markdownRemark(frontmatter: { templateKey: { eq: "impressum-page" } }) { html } } `; ``` This is not a problem for building my site locally but is on netlify which enforces a RAM limit (NPM error code 137). I have no idea why such a query would be so big. At first I thought it might be related to the new gatsby-plugin-image but it also appears on some sites with very small queries, like the above. ### Steps to reproduce 1. Fork…

### CASE-6925 · Source and target nodes of a mapping relationship don't update under develop/build
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬27 · closed
- **Excerpt**: ## Summary When doing relationships with a `mapping` in `gatsby-config.js` as described in the docs, nodes don't update, either in `develop` or `build`. You have to remove the develop/build caches. As commented below by @user this is related to a reported bug where a dependency should be added. ## Relevant information [Reproducible repo, writeup, and video illustrating the problem]([link]) This is in relation to [the docs]([link]) regarding forward and backwards references. Imagine you have a system with `Post` entries in markdown. Each has one `Author` and zero or more `Topic` references.…

### CASE-6926 · gatsby-cli broken after upgrade: Error: Cannot find module './create-cli'
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬27 · closed · labels: status: needs more info
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Gatsby CLI not working after upgrade. ### Steps to reproduce `npm i -g gatsby-cli` ### Expected result gatsby-cli should work normally after upgrade ### Actual result <img width="850" alt="screen shot 2018-12-28 at 6 29 44 pm" src="[link]> ``` Error:…

### CASE-6928 · gatsby-plugin-image images are flickering/blinking
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬26 · closed · labels: type: bug/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues And existing Discussions: [link] framework]/discussions --> ## Description We are trying to upgrade to `gatsby-plugin-image` (from `gatsby-image`), but images using the new `GatsbyImage` component are flickering. The following issue seems to describe the same issue, but…

### CASE-6929 · [gatsby-plugin-image] mobile vs. desktop logo conflicting with gatsby-image-wrapper
- **Principles**: P-A3, P-H1 · **Env**: react, mobile, desktop
- **Signals**: 👍1 💬26 · open · labels: type: bug/status: confirmed/topic: media
- **Excerpt**: My site's desktop logo/mobile logo differing sizes are stepping on each other. At first I thought this was an issue with my code so I opened a [discussion]([link] framework]/discussions/31712) question for help but after further research I believe it is a bug. ## Description I found two similar issues [ref] and [ref] and a patch was pushed in version 1.4 to address. However, I am running v1.6.0 and I am still having a similar issue. Here is my code: ``` import React from "react" import { Link, useStaticQuery, graphql } from "gatsby" import Navigation from "../components/navigation" import…

### CASE-6931 · Unknown option: .reactRuntime
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍9 💬26 · closed · labels: type: bug/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Running `gatsby develop` results in 2 errors stating: **"Unknown option: .reactRuntime"** It might be something to do with images, as I noticed the errors crop up just after the console statement: "Generating image thumbnails"... ``` success createPages…

### CASE-6934 · gatsby-image fluid not respecting maxHeight
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍9 💬26 · closed · labels: type: bug/help wanted/good first issue/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When I use the `fluid` function and specify a `maxHeight` value, it doesn't stick to that size. However, when I use the `fixed` version of the following, everything renders just fine. I have tried `gatsby clean`, `gatsby build`, and `gatsby serve` as well…

### CASE-6938 · [gatsby-source-wordpress] inline images won't resolve the data-src attribute
- **Principles**: P-A3, P-H1, P-F4 · **Env**: unspecified
- **Signals**: 👍10 💬25 · closed · labels: type: bug/topic: source-wordpress
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description After upgrading to `gatsby@user` and `gatsby-source-wordpress@user` the images from wordpress are not resolved correctly. somehow gatsby image is failing to rehydrate the src attributes from the `data-src` and `data-srcset` attribute.…

### CASE-6941 · Running Gatsby build gives Error: 856328897 TypeError: promise.finally is not a function
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬25 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When I run `gatsby build` or `npm install` I get the error `Error: 856328897 TypeError: promise.finally is not a function` ### Steps to reproduce I was getting missing images when deploying to netlify so I cleaned my local install then started getting…

### CASE-6942 · [gatsby-source-drupal] "Failed to process remote content" error on Drupal images
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬25 · closed · labels: type: bug
- **Excerpt**: ## Summary Occasionally, during our Gatsby build, right after the line `Starting to fetch data from Drupal`, we will see about 20-25 images which say `Failed to process remote content`. In the snippet below, I've change the exact filenames, but kept spaces, dashes, filetypes so you can get a sense of the kind of files that occasionally fail. Note that some of the files that fail to process are large (4 mb) but others are tiny (80 kb). We've noticed pngs, gifs, and jpgs so far. Is there a maximum file-size limit that Gatsby will be able to process for remote content? Or is there a file-naming…

### CASE-6943 · [gatsby-remark-images-contentful] intermittent build errors with/to base64
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍8 💬25 · closed · labels: type: bug/topic: GraphQL
- **Excerpt**: ## Description We're having an issue during the build phase of our project: sometimes the `run graphql queries...` step finishes without any issues and the site builds fine. But since recently the build process gets stuck at the `⡀ run graphql queries — 123/125 46.15 queries/second` step and keeps either spinning forever or, if it finishes, takes a very long time (it doesn't always stop at 123. Sometimes it stops at 7/125 or other numbers). ### Steps to reproduce 1. delete `.cache` folder 2. run `gatsby build` ### Expected result The build process should finish without issues. ### Actual…

### CASE-6947 · gatsby-remark-images not working (gatsby v2)
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍7 💬24 · closed · labels: type: bug/help wanted
- **Excerpt**: 1. I have read the issue at [ref] to double check the image is relative path 2. I have put the .jpg file together with the .md file **Screenshot for 1 and 2** ![the .md file is in the same directory with the image file]([link]) 3. I have double check the gatsby-config.js and here is the snippet: ```javascript module.exports = { siteMetadata: { title: 'Ke Han', }, plugins: [ 'gatsby-plugin-react-helmet', 'gatsby-plugin-catch-links', 'gatsby-plugin-sharp', { resolve: 'gatsby-source-filesystem', options: { path: `${__dirname}/src/pages`, name: 'pages', }, }, { resolve:…

### CASE-6948 · Sharp with Images in JSON from NetlifyCMS
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: ## Description I'm currently using Gatsby with Netlify CMS to manage my content in JSON files. This is working really well for the most part, but I'd like to be able to resize my images, as the CMS users are uploading multi-MB images as thumbnails. My content has more data in it than this, but the part I'm interested in talking about here looks like this: ```json { "thumbnail": "/assets/thumbnail.jpg" } ``` This is a reference to a file in `/static/assets/thumbnail.jpg`. ### Steps to reproduce It's not a bug so much as me not understanding how to either access plugins that'll do this for me,…

### CASE-6953 · [gatsby-plugin-image] Image requested and downloaded multiple times
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬23 · closed · labels: type: bug/topic: media
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Similar to [ref], the same image is requested multiple times. Except for this time, it happens on multiple modern browsers. ![image]([link]) ### Steps to reproduce Same as that in [ref], basically: 1. Create a Gatsby project from the default starter…

### CASE-6954 · Refreshing then hitting the back button causes 404 [Update: Development-mode only]
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍9 💬23 · closed · labels: type: bug/stale?/topic: frontend
- **Excerpt**: ## Update From comments below: If you use `gatsby build` / `gatsby serve`, the bug doesn't happen, apparently. So, it affects development only. ## Description If you refresh a page, then click on the back button, you get 404 instead of getting to the page you were on. ### Steps to reproduce #### Links - Reproduction on Codesandbox: [link] - Source code link: [link] #### Steps - Clone the repo, run `gatsby develop`, and open `[link] (or just open codesandbox link above) - You should see a link `click to go to /another-page` ![image]([link]) - Click on the link. - You should now see a page with…

### CASE-6956 · vips2png: "unable to write to target" error when generating thumbnails breaks the build
- **Principles**: P-A3, P-H1 · **Env**: bootstrap
- **Signals**: 👍6 💬23 · closed · labels: type: bug
- **Excerpt**: ## Description During the build step, this error happens **vipspng: libpng read error vips2png: unable to write to target** Please, could you provide me with a way to debug which image might be breaking vips2png (used by sharp plugin)? We have a thousand of them The error happens in CircleCI, and it's difficult to replicate in our local because of x number of reasons. More context: ``` info bootstrap finished - 39.546s warning [] 0/96 0.0 s 0% Generating image thumbnailswarning The requested height "500px" for a resolutions field for the file…

### CASE-6965 · [bug]: potrace fails randomly with "cannot read property bitmap of undefined"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍6 💬22 · closed · labels: type: bug
- **Excerpt**: Running `gatsby develop` works most of the time, but I randomly get this error. It seems that I'm _more likely_ to get the error after running `gatsby clean`. Today I ran `gatsby develop` 3 times in a row with no changes to anything. The first 2 times I got this error and the 3rd time it worked. ``` Generating image thumbnails [==============================] 5/5 0.1 secs 100% error UNHANDLED EXCEPTION TypeError: Cannot read property 'bitmap' of undefined - Potrace.js:1000 Potrace._processLoadedImage [blog]/[potrace]/lib/Potrace.js:1000:35 - Potrace.js:1046 Jimp.<anonymous>…

### CASE-6969 · Cannot read property 'Provider' of undefined. BaseContext from `@user/router` is undefined.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed · labels: type: bug/status: needs more info
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description ![image]([link]) `BaseContext` is undefined [here]([link] framework]/blob/9fbac50bb5588e918ed849d8bcf69f6df32884c7/packages/gatsby/cache-dir/production-app.js#L54). Also, it looks like [`@user/router` doesn't export BaseContext]([link]) 🤔. Ideally…

### CASE-6972 · [www/showcase] Twitter cards not working for individual "Showcase" entries
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed · labels: help wanted/stale?/good first issue
- **Excerpt**: Happened to all three URLs I tested: ![image]([link])

### CASE-6976 · GraphQL Error Field "image" must not have a selection since type "String" has no subfields.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬21 · closed
- **Excerpt**: ## Description I've been getting this error everytime I deploy to Netlify and most times in development. The only way I seem to be able to get around it in development is to delete node_modules and `yarn install`, and even this doesn't work every time. If I do get around it in development and I stop `gatsby develop`, the next time I run it, it comes back and I have to repeatedly delete node_modules and `yarn install` until it works again. My directory structure looks like ``` src ├── posts │ ├── some-post │ │ ├── some-image.jpg │ │ └── index.md ``` my post frontmatter looks like ``` ---…

### CASE-6977 · Production build of gatsby (v4) mangles some CSS SVG background images in production builds
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬20 · closed · labels: type: bug/stale?/topic: core
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description ## Expected Behavior Some components with CSS SVG background images are not mangled ## Current Behavior CSS SVG background images are not mangled Say, this svg: ```html <svg xmlns='[link] stroke-width='1.5' viewBox='0 0 32 32'> <g…

### CASE-6982 · Gatsby Remark Images ignores embedded pixel density of an image
- **Principles**: P-A3, P-H1 · **Env**: retina
- **Signals**: 👍1 💬20 · closed · labels: type: bug/status: confirmed/topic: remark/mdx
- **Excerpt**: ## Description According to documentation the pixel density of a processed image should be retained, but it's not. Images in 144×144 resolution are displayed in twice the size they were intended to be displayed as a result. ### Steps to reproduce The issue is currently present on Gatsby's own demo site for Remark: [link] For reference, I found old snapshot from 2017 that renders the image in question properly: [link] ### Expected result Retina images should be displayed in their intended size (scaled to resolution). ### Actual result Retina images are displayed in their natural pixel size.…

### CASE-6983 · Gatsby image flicker when navigating to another page
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: stale?/status: needs more info
- **Excerpt**: ## Description My header component uses an optimized image from gatsby-plugin-sharp and I am rendering it with gatsby-image. I noticed that the image flickers when I am changing between pages (eg. between home and page 2). I updated to the latest version of gatsby and gatsby-image I tried debugging by putting the same image in the header component but using the <img> tag with a relative import as the src. Here's a gif showing the behavior, notice the top icon flickers - [link] ### Steps to reproduce __[Demo of behavior]([link])__ - Create a gatsby project with the following js files - Run the…

### CASE-6985 · BUG: MozJPEG with PNG and `toFormat: JPG` outputs PNG with jpg extension
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: type: bug/topic: media
- **Excerpt**: ## Description When enabling mozjpeg in my gatsby-config.js, jpg images do see better compression, but any png source images if using `toFormat: JPG` in their graphql query, will not actually format the image into jpeg, but instead output a png image data with a jpg file extension. ### Steps to reproduce Enable mozjpeg in gatsby-config.js for `gatsby-plugin-sharp`: ``` // plugins: [ { resolve: `gatsby-plugin-sharp`, options: { useMozJpeg: true, }, }, ``` Use the default starter project with `gatsby new` and edit the `image.js` component to include `toFormat: JPG`: ``` const Image = () => (…

### CASE-6987 · gatsby-remark-images not showing certain images in `build`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed · labels: type: bug/stale?
- **Excerpt**: I've recently added `gatsby-remark-images` to my site and have two markdown posts with images. Both images are referenced in their respective `.md` files like so `![alt text](imagename.png)` In both cases I have the following file structure ``` -post-folder -- index.md -- imagename.png ``` In `gatsby develop`, both images show correctly in the posts and when I run `gatsby build` locally, I can see both images output to the public folder in the many sizes `gatsby-remark-images` generates. However, when I run my build on `wercker` only one of the posts generates the HTML to render the image.…

### CASE-6988 · UNHANDLED REJECTION Encountered an error trying to infer a GraphQL type for: `localImage___NODE`. There is no corresponding node with the `id` field matching:
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍3 💬19 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Having just upgraded to Gatsby 2.5.15, `gatsby develop` started producing this ERROR: > UNHANDLED REJECTION Encountered an error trying to infer a GraphQL type for: `localImage___NODE`. There is no corresponding node with the `id` field matching: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX". If I perform a `gatsby clean` before every `develop` there are no errors. But as soon as I try to run `gatsby develop` on an existing cache, the errors kill the build. It appears that when running off cache, for whatever reason the `gatsby-plugin-remote-images` attempts to resolve before the…

### CASE-6995 · [gatsby-plugin-sharp] High DPI images are rendered tiny
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: type: bug
- **Excerpt**: Because of the way the `presentationWidth` is calculated, my images being displayed through `gatsby-remark-images` are way smaller than they should be. For example, I have an image with `width=750` and `density=600` ```javascript const pixelRatio = typeof density === `number` && density > 0 ? density / 72 : 1 const presentationWidth = Math.min( options.maxWidth, Math.round(width / pixelRatio) ); ``` Under [this code]([link] framework]/blob/2166c5eae901ea1c201fc4c3cc4b029a39bf9d87/packages/gatsby-plugin-sharp/src/index.js#L364) the `presentationWidth` is calculated to be `90`. If my image…

### CASE-6996 · gatsby-plugin-image and opacity 0
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: type: bug/stale?/status: needs reproduction
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description I have a blog, made with `gatsby@user` here: [link] The sources for the blog are here: [link] The content comes from a headless CMS. API key not provided at this time, but can be given later if needed. The image urls come from the CMS and…

### CASE-6997 · gatsby-remark-images does not remove background image
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬18 · closed · labels: type: bug/stale?/topic: remark/mdx
- **Excerpt**: ## Description I assume that this is the same as [ref] - which still exists. This is a screenshot image with a transparent background... no - it should not be gray but white. ![]([link]) It seems that this issue is caused because `onRouteUpdate` is not called from inside the plugin. A workaround is to re-export `onRouteUpdate` in your own gatsby-browser.js exports.onRouteUpdate = require("gatsby-remark-images/gatsby-browser").onRouteUpdate; ### Steps to reproduce [link] ### Expected result Images should be cleaned up after loading. ### Actual result Image have a blurry background. ###…

### CASE-6998 · Error: NormalModuleFactory.afterResolve (ReactRefreshPlugin) is no longer a waterfall hook, but a bailing hook instead.
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍5 💬18 · closed · labels: type: bug/status: needs reproduction/type: upstream
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Created a fresh and new project using gatsby V3. running `gatsby develop` results in a build error. ### Steps to reproduce run `npm init gatsby`, run develop. fail ### Expected result Initial project should run ### Actual result ![image]([link]) ###…

### CASE-6999 · Plugin options error for `gatsby-plugin-manifest` and `gatsby-remark-images`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬18 · closed · labels: type: bug/topic: remark/mdx/topic: plugins-PWA
- **Excerpt**: ## Description Two weeks ago I updated my dependencies: [link] That is when `yarn dev` stopped working with this error: ``` alexa@user C:\Users\alexa\ae2 $ yarn dev yarn run v1.22.5 $ gatsby develop success open and validate gatsby-configs - 0.075s error Invalid plugin options for "gatsby-plugin-manifest": - "scope" is not allowed error Invalid plugin options for "gatsby-remark-images": - "wrapperStyle" must be one of [object] not finished load plugins - 5.593s error Command failed with exit code 1. info Visit [link] for documentation about this command. ``` I checked gatsby-plugin-manifest…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-6905 · Fix "resource preloaded but not used" warning in Chrome
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍10 💬32 · closed · labels: type: bug/help wanted/status: confirmed
- **Excerpt**: I am keep getting the warning message at chrome [link] "The resource <URL> was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally." The resource [link] was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. The resource [link] was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it…

### CASE-6910 · Hot Module Reloading (HMR) Not Working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬31 · closed
- **Excerpt**: Gatsby version: 0.12.46 Node version: 6.4.0 OS version: OSX El Capitan 10.11.6 Some hours ago I noticed that the hot module reloading (HMR) wasn't working, when I run `npm run develop` to start developing and make a change in my component, I get this error and warning in the chrome console: Error: ``` XMLHttpRequest cannot load [link] No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin '[link] is therefore not allowed access. The response had HTTP status code 404. ``` Warning: ``` [HMR] Update check failed: Error: Manifest request to [link] timed out. at…

### CASE-6921 · Hot module replacement not working with the default starter
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 60, windows, react
- **Signals**: 👍0 💬28 · closed
- **Excerpt**: Windows 10, Chrome 60.0.3112.90. I run: ``` gatsby new gatsby-site cd gatsby-site gatsby develop ``` I edit the file `src/pages/index.js` from `<h1>Hi people</h1>` to `<h1>Hi people 123</h1>`. No change is shown in the browser unless I refresh the page. No error is shown on the command line, only: ``` DONE Compiled successfully in 379ms 9:40:47 AM I Your site is running at [link] I Your graphql debugger is running at [link] ``` Only the following js errors are reported on the web page itself: ``` lowPriorityWarning.js:40 Warning: Accessing PropTypes via the main React package is deprecated,…

### CASE-6935 · The placeholder image in "gatsby-image" does not fade on Safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, desktop, mobile
- **Signals**: 👍2 💬26 · closed · labels: type: bug
- **Excerpt**: ## Description The low-res placeholder image that gatsby-image generates is not fading out on Safari, both on desktop and mobile. You can see it happening at the gatsby-image [example site]([link]). It becomes an issue when using images with transparency, as you can still see parts of the placeholder. ### Steps to reproduce Use gatsby-image on Safari. [link] is a good example, but it seems to affect any site built with Gatsby. My project, the gatsby-image demo site, and the main Gatsby site are all being affected from what I saw. ### Expected result The placeholder should fade out after the…

### CASE-6940 · bug(www): some plugin READMEs are not properly rendered
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, edge, windows
- **Signals**: 👍0 💬25 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description Plugin description is not rendering the Readme file properly, instead only _README.md_ is visible. ### Steps to reproduce Visit [link] ### Expected result ![image]([link]) Readme `gatsby-plugin-sass` should be transformed the same way as for other plugins ### Actual result What happened. ![image]([link]) ### Environment Windows, checked in Chrome and Edge

### CASE-6955 · Cannot find module 'gatsby-cli/lib/reporter'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos
- **Signals**: 👍14 💬23 · closed · labels: type: bug/status: confirmed
- **Excerpt**: After updating from gatsby 2.24.36 to version 2.24.40 getting error on npm start: Error in "/Users/Austin/Projects/schwayweb/node_modules/gatsby-plugin-page-creator/gatsby-node.js": Cannot find module 'gatsby-cli/lib/reporter' entire output here: [link] ``` System: OS: macOS 10.15.6 CPU: (12) x64 Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz Shell: 5.7.1 - /bin/zsh Binaries: Node: 12.14.1 - ~/.nvm/versions/node/v12.14.1/bin/node Yarn: 1.22.4 - /usr/local/bin/yarn npm: 6.14.6 - ~/.nvm/versions/node/v12.14.1/bin/npm Languages: Python: 2.7.17 - /usr/local/bin/python Browsers: Chrome: 84.0.4147.105…

### CASE-6962 · approach for adding polyfills
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, webpack
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: **UPDATE:** below is the original question that I had...which turned out to be a that I required some polyfills so the discussion around that is at the bottom. _**// original question //**_ Hey, I can´t seem to get my head around a problem I'm facing with IE 11 (I think). It works in all other browsers I've tested (might be an issue on safari on macOS also...don't have a mac to test it on but indications lead in that direction). I've deployed a site to netlify (also tested in on surge) but when I test it with IE 11 I get a bunch of console errors pointing at 'webpackJsonp' is undefined. The…

### CASE-6963 · URL with unicode characters will not load in MS Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍3 💬22 · closed · labels: type: bug/help wanted/status: awaiting author response
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description If a URL contains a unicode character (for example `foo.com/bår`) Gatsby will not render the page correctly in Microsoft Edge. ### Steps to reproduce Easiest way to do this: 1. Use the [Gatsby + Netlify CMS starter]([link]) 2. Change one of the existing…

### CASE-6967 · [gatsby-remark-images] The blur up effect on markdown images doesn't work in Firefox
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox
- **Signals**: 👍4 💬22 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I am looking to replicate the blur up effect of `gatsby-image`, but in the body of my markdown blog post images using `gatsby-remark-images`. Here are two examples, the top image is what I expect to happen, but the bottom image is what I am seeing (no blur up). **Example image with blur up using `gatsby-image`** ![Blur up working in gatsby-image]([link]) # **Example image with no blur up using `gatsby-remark-images`** ![Blur up not working in gatsby-remark-images]([link]) # ### Steps to reproduce Create a markdown page with an image in it. Use a similar setup to below,…

### CASE-6975 · [v2] Warning in browser console during gatsby serve (after build)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows
- **Signals**: 👍5 💬21 · closed · labels: type: bug/help wanted/stale?
- **Excerpt**: ## Summary Chrome throws a warning in console during gatsby serve. ## Relevant information The warning is : `The resource [link] was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.` It doesn't cause any problems, just throws a warning. Any clue as to why it does? ### Environment (if relevant) System: OS: Windows 10 CPU: x64 Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz Binaries: Yarn: 1.7.0 - C:\Program Files (x86)\Yarn\bin\yarn.CMD npm: 5.6.0 - C:\Program…

### CASE-6980 · 'gatsby-plugin-sitemap' doesn't generate a /sitemap.xml file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍4 💬20 · closed · labels: type: bug
- **Excerpt**: ## Description 'gatsby-plugin-sitemap' doesn't generate a **sitemap.xml** file, even with default config. I've changed to the default config of this plugin. In the past it worked like a charm with this code (beneath) but since gatsby-plugin-sitemap v4 it stopped working. Now even the default config doesn't show me the sitemap by going to 'yoursiteurl.com/sitemap.xml'. ``` { resolve: 'gatsby-plugin-sitemap', options: { query: ` { site { siteMetadata { siteUrl } } allSitePage { edges { node { path context { updatedAt } } } } }`, serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge)…

### CASE-6991 · 1668MB cache storage in chrome
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome
- **Signals**: 👍0 💬19 · closed · labels: status: confirmed
- **Excerpt**: ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) Even if I delete all these items the cache doesn't go down. ![image]([link]) I went to "\AppData\Local\Google\Chrome\User Data\***\Cache" and checked the whole folder doesn't increase on refresh and is not even the size of the storage chrome show. It might be a chrome bug? config: module.exports = { siteMetadata: { title: '***', siteUrl: `[link] }, plugins: [ `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, { resolve: `gatsby-plugin-sitemap`, options: { exclude: [ '/internal/*', ] } },…

### CASE-6992 · Web Sites keeps loading infinitely on Safari?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome, firefox
- **Signals**: 👍0 💬19 · closed · labels: status: needs more info
- **Excerpt**: If you visit [my website]([link]) & go to **Apps** on Safari, it keeps on redirecting again & again. And in console there is some weird error `TypeError: undefined is not an object (evaluating 'this.state.pageResources.json.pageContext')`. I think something is wrong with the static **pages.json** or **path.json** it generates after building the site. In Chrome or Firefox this works all fine. No issues at all. Has anyone ever faced this issue?

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-6906 · Next steps for gatsby-theme-blog
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬31 · closed
- **Excerpt**: I've spent ~20 hours over the past week building child themes of gatsby-theme-blog and have some thoughts about ways we can iterate on it. Thoughts in no particular order. - We query for page data in gatsby-node.js and pass them into components. The normal practice is to put the query for pages in the actual page components. This is useful for several reasons but is especially important as currently, a sub-theme can't override page queries. This would be a breaking change. - starter for a workspace for developing sub-themes — similar to the minimal theme setup. There's a lot of things to…

### CASE-6908 · Styled component doesn't have access to its (theme) props on 404.html page
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬31 · closed · labels: type: bug/help wanted
- **Excerpt**: <!-- To make it easier for us to help you — please follow the suggested format below. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues [link] framework]/issues --> ## Description Components being used on 404 page don't have access to passed props. I have this issue with styled components (accessing theme prop inside them), so example will be based on that. ### Steps to reproduce `gatsby new gatsby-site` `yarn add styled-components` `layouts/index.js` file: ```js ... import { ThemeProvider } from 'styled-components'…

### CASE-6924 · "Uncaught Error: Missing resources for /" with Component Shadowing
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬27 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description Since today after I serve my static files, I got this notorious Error: `Uncaught Error: Missing resources for /`. After researching and trying to find out what happened, I was able to pinpoint it to Component Shadowing with Themes. My setup is, that I have a Theme that exports Utility Components and Section Components, basically behaving like a UI-Kit. It's exported by an `export.js` file. Now when I shadow a Component, that I use, to let the user inject custom Components in a certain spot and at the same time import something from the theme, this occurs in the browser. This…

### CASE-6945 · gatsby build error [ref] A page component must export a React component for it to be valid. Please make sure this file exports a React component: /Users/tiagosanchez/Documents/Projects/personalBlog/node_modules/gatsby-plugin-offline/app-shell.js
- **Principles**: P-C1, P-C2, P-C3 · **Env**: react
- **Signals**: 👍13 💬24 · closed
- **Excerpt**: ## Description I run `gatsby build` on CLI for my blog (I am using gatsby-theme-blog and you can find it in the following [link]([link]), the repo for my blog. This was done following your [tutorial link]([link]) to prepare your site to be publish. The fist time I did it, it did run well, however after running the audit with Lighthouse and going through adding manifest and all the other good stuff, it is not working. I have the following error on my console ``` ERROR [ref] A page component must export a React component for it to be valid. Please make sure this file exports a React component:…

### CASE-6958 · Error loading a result for the page query in "/404.html". Query was not run and Page not found /404.html
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍8 💬23 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description When using `gatsby develop` with a theme, the following error is printed in the terminal after a page is loaded in the browser: ``` Error loading a result for the page query in "/404.html". Query was not run and Page not found /404.html ``` ### Steps to reproduce - `gatsby new my-blog [meta framework]-starter-blog-theme` - `cd my-blog` - `gatsby develop` - browse to `[link] - check the terminal to see this message: ``` Error loading a result for the page query in "/404.html". Query was not run and no cached result was Page not found /404.html ``` - This message will be printed…

### CASE-6971 · 404 Develop Page: Blank in theme development
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍4 💬21 · closed · labels: type: bug
- **Excerpt**: ## Description Following Jason's egghead course until step 5. The 404 develop page should show up showing the available pages, instead the pages stays blank and displays nothing. ### Steps to reproduce Setup a monorepo with a theme and example site, add some pages to the theme (basically following Jason's course). Run `yarn workspace my-theme develop` and try to visit `localhost:8000/asdf`. ### Expected result The dev browser should display the 404 dev page. ### Actual result Blank page and error in the terminal: ``` Page not found /404.html Error loading a result for the page query in…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-6907 · gatsby-transformer-sharp returns an error
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬31 · closed · labels: stale?/status: needs more info
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description Running gatsby develop with this as my config: NOTE: my code works if you remove ``` `gatsby-remark-copy-linked-files`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, { resolve: `gatsby-remark-images`, options: { maxWidth: 1080 } ``` From the config…

### CASE-6909 · Cannot read property 'childImageSharp' of null
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍10 💬31 · closed
- **Excerpt**: I've been playing with Gatsby trying to create a website that pulls data from a json file and generates pages. On each page a list of links/cards is displayed. Everything worked fine until I added images and tried using the sharp plugin (gatsby-plugin-sharp and gatsby-transformer-sharp) If I remove from the card.js file, image from the Card_details fragment, `const { small } = image.childImageSharp`, and the img tag, it all works as expected except no image. This error in GraphiQL ``` { "errors": [ { "message": "Path must be a string. Received undefined", "locations": [ { "line": 9, "column":…

### CASE-6911 · [gatsby-transformer-javascript-frontmatter] Frontmatter export breaks HMR
- **Principles**: P-D1, P-D2, P-D3 · **Env**: typescript
- **Signals**: 👍3 💬30 · open · labels: help wanted/good first issue/status: confirmed/topic: plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hot module reload (HMR) doesn't work, using [gatsby-transformer-javascript-frontmatter]([link]) plugin when javascript or typescript files export frontmatter. This issue has been around since at least Gatsby 3, and continues in Gatsby 4.…

### CASE-6912 · Browser API shouldUpdateScroll logic not being respected on pop state route transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬30 · closed · labels: type: bug/topic: frontend
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description This is follow up issue to [ref] — that issue has been closed but I'm experiencing a second issue preventing me from orchestrating smooth page transitions. The issue of getSavedScrollPosition returning a single value rather than x, y coordinate array has…

### CASE-6919 · Anchor links don't work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬28 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description I use `gatsby-transformer-remark` to parse markdown files and [get table of contents]([link]). If I hit an item in table of contents (anchor link), the browser doesn't scroll to the section. ### Steps to reproduce I created a basic demo project [here]([link]). If you open for example [link] and scroll to the bottom, you can see table of content there. I created a [recording]([link]), where I click on items in table of contents and nothing happens. ### Expected result If item in table of contents is clicked, browser should scroll to that section. ### Actual result The browser…

### CASE-6920 · Something went wrong installing the "sharp" module
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬28 · closed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description `gatsby develop` fails on existing site or even a new build. Full error below: ```ERROR Error in "/Users/hsnyc/Documents/Hosts/hsnyc/hsnyc_v4/hsnyc-gatsby/node_modules/gatsby-transformer-sharp/gatsby-node.js": Something went wrong installing the "sharp"…

### CASE-6922 · OutgoingMessage.prototype._headers is deprecated
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬27 · closed · labels: type: bug/stale?/status: needs more info
- **Excerpt**: ## Description After migration to Gatsby 3, I'm experiencing this deprecation warning, but cannot find, which module is causing it. ```markdown verbose Transition to "runningQueries" > "calculatingDirtyQueries" verbose Transition to "runningQueries" > "runningStaticQueries" verbose Transition to "runningQueries" > "runningPageQueries" ERROR (node:28688) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated success run page queries - 0.867s - 2/2 2.31/s verbose Transition to "runningQueries" > "waitingForJobs" verbose Transition to "runningQueries" > "done" verbose…

### CASE-6923 · `construct-error.js` - child "error" fails because ["error" must be an object]
- **Principles**: P-D1, P-D2, P-D3 · **Env**: bootstrap
- **Signals**: 👍12 💬27 · closed · labels: type: bug/status: confirmed
- **Excerpt**: ## Description Introducing a query error on `MarkdownRemarkFrontmatter` seems to throw error with construct-error.js due to some error in validating an error type using the `joi` library. The error message thrown is: `child "error" fails because ["error" must be an object]` <details> <summary>Original Build Error Log</summary> This behavior will be removed in the next major release of gatsby-plugin-feed. For more info, check out: [link] success onPreBootstrap - 0.044 s success source and transform nodes - 0.236 s success building schema - 0.581 s child "error" fails because ["error" must be…

### CASE-6933 · Add link checker for Gatsby Docs
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬26 · closed · labels: help wanted/type: documentation
- **Excerpt**: ## Summary There is a plugin for a remark Link check: [link] Can this also work on the Gatsby docs/Blog? Or as a PR check? *new edit:* ### Ideas - check local links - add a linter to check before it is submitted - check if it has a local domain name (A lint rule is WIP) - check if local domains begin with a `.`, `..` or `/` - allow local domain and remove local domain on build time with a transformer - check local anchors - with a linter and analyse each linked file? - on `gatsby develop`/`gatsby build` via a graphql query to query all headers? - check internal links for trailing slashes…

### CASE-6950 · GraphQL error in deployment when filtering WP Posts by categories or tags
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, react
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: ### Environment Gatsby version: 1.9.149 Node.js version: 6.12.3 Operating System: OSX 10.13.2 ### File contents `gatsby-config.js`: ```javascript module.exports = { siteMetadata: { title: `Gatsby Default Starter` }, plugins: [ `gatsby-plugin-react-helmet`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, { resolve: 'gatsby-source-wordpress', options: { baseUrl: 'f******s.w******y.co.uk', protocol: 'http', hostingWPCOM: false, useACF: true, verboseOutput: true } },{ resolve: `gatsby-plugin-sass`, options: { precision: 8 } }] } ``` `package.json`: ```javascript { "name":…

### CASE-6960 · [gatsby-source-contentful] TypeError: Cannot read property 'internal' of null
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍6 💬23 · closed · labels: stale?/status: needs reproduction
- **Excerpt**: ## Description Build fails with: ``` Fetch Contentful data: 250.798ms success source and transform nodes — 1.107 s error UNHANDLED REJECTION TypeError: Cannot read property 'internal' of undefined - infer-graphql-type.js:227 _.uniqBy.v [blumenhaus]/[gatsby]/dist/schema/infer-graphql-type.js:227:44 - lodash.js:4296 baseUniq [blumenhaus]/[lodash]/lodash.js:4296:35 - lodash.js:8418 Function.uniqBy [blumenhaus]/[lodash]/lodash.js:8418:40 - infer-graphql-type.js:227 inferFromFieldName [blumenhaus]/[gatsby]/dist/schema/infer-graphql-type.js:227:15 - infer-graphql-type.js:354 _.each…

### CASE-6964 · gatsby-source-shopify unable to complete build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬22 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: ## Description I have been unable to complete the build process using the 'gatsby-source-shopify' plugin. The progress varies each time, but it always stalls on "source and transform nodes" after a successful "fetched and processed collections" ### Steps to reproduce I have tried - disabling all plugins just to get through a build - using a fresh install with gatsby-starter - using the [shopify-starter]([link]) (a forked version of gatsby-shopify) which works with the demo content, but not with my own store credentials. I am beginning to believe it is something to do with the store I am…

### CASE-6973 · [gatsby-image] Image data not loading during build/develop
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍5 💬21 · closed · labels: type: bug/stale?/topic: source-drupal
- **Excerpt**: ## Description I'm using the `gatsby-image`, `gatsby-plugin-sharp`, and `gatsby-transformer-sharp` plugins to work with images imported from a Drupal backend. Up until a couple of days ago this was working fine. At some point I stopped and restarted `gatsby develop` and things just stopped working. The issue is related to images imported from Drupal, and specifically, an error where `props.image.localFile` is undefined in my component and causes the page to not display at all. (I can add a conditional to fix that, but it doesn't resolve the fact that the image should be there.) I'm using this…

### CASE-6978 · Post inline images not showing when using gatsby-source-wordpress with Framer Motion animation
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬20 · closed · labels: type: bug/stale?/status: needs more info/topic: source-wordpress/topic: source-plugins
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Hi there, I have a new Gatsby site which sources page content from a Wordpress site via `gatsby-source-wordpress`. It also uses Framer Motion to provide page transitions via the `AnimatePresence` component. After updating Gatsby recently I…

### CASE-6979 · Missing class properties transform
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍4 💬20 · closed · labels: type: bug/status: confirmed
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues And existing Discussions: [link] framework]/discussions --> ## Description The build command crashes after updating to v3.7: ``` yarn run v1.19.1 $ gatsby build --verbose verbose set gatsby_log_level: "verbose" verbose set gatsby_executing_command: "build" verbose loading…

### CASE-6984 · [gatsby-plugin-mdx] gatsby-remark-mathjax doesn't work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬20 · closed · labels: stale?/topic: remark/mdx
- **Excerpt**: <!-- Please fill out each section below, otherwise your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description gatsby-remark-mathjax doesn't work with gatsby-plugin-mdx ### Steps to reproduce [gatsby-mdx-minimal-repro-plugin-mathjax ]([link]) [link] is rendered by gatsby-transformer-remark [link] is rendered by gatsby-plugin-mdx ### Expected result renders ```…

### CASE-6986 · Proposal: Replace _.kebabCase() with a different function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: I believe a page's `path` is converted to its file name via `_.kebabCase()` [in]([link] framework]/blob/47a35aad300b9789ed328146fb71449652f4d101/packages/gatsby/cache-dir/static-entry.js#L28) [a]([link] framework]/blob/47a35aad300b9789ed328146fb71449652f4d101/packages/gatsby/src/redux/actions.js#L232) [few]([link] framework]/blob/47a35aad300b9789ed328146fb71449652f4d101/packages/gatsby/src/utils/js-chunk-names.js#L6) [places]([link] framework]/blob/47a35aad300b9789ed328146fb71449652f4d101/packages/gatsby-plugin-netlify/src/build-headers-program.js#L31). This results in transformations like…

### CASE-6989 · "WARNING: We noticed you're using the `useBuiltIns`" and gatsby-node failure when Gatsby 2.1.4 -> 2.1.20
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬19 · closed · labels: type: bug
- **Excerpt**: I'm getting this warning ``` ⠄ source and transform nodes WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option. You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands: npm…

### CASE-6993 · [gatsby-transformer-react-docgen] throws conflicting field types warning
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬19 · closed · labels: type: bug/help wanted
- **Excerpt**: ## Description `gatsby-transformer-react-docgen` throws "There are conflicting field types in your data" warning depending on the PropTypes. Here are two components that conflict: ``` Button.propTypes = { type: PropTypes.oneOf(['button', 'submit']), } ``` ``` DatePicker.propTypes = { lastMonth: PropTypes.instanceOf(Date), } ``` ### Steps to reproduce I've created a [repo to demonstrate this bug]([link]): 1. `git clone [email]:danoc/gatsby-react-docgen-repro.git && cd gatsby-react-docgen-repro && yarn && yarn develop` 2. See warning in console. ### Expected result Shouldn't start development…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-6918 · React 17 new JSX Transform: ReferenceError: React is not defined
- **Principles**: P-A5, P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍20 💬28 · closed · labels: type: bug/topic: webpack/babel
- **Excerpt**: ## Description Gatsby 2.28.1 will throw a `ReferenceError: React is not defined` if React is not imported on top of the file, but the new JSX Transform (built-in in Gatsby since 2.24) supports files with JSX without a React Import. ### Steps to reproduce I couldn't reproduce this in CodeSandbox but you should easily reproduce this by rendering a component that does not import React. ### Expected result Should not throw the error and allow components without a React import to work normally ### Actual result What happened. **It happens in both development and build mode** The output JS file…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-6930 · Can no longer run gatsby develop
- **Principles**: P-F4 · **Env**: macos, webpack, react
- **Signals**: 👍1 💬26 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: ## Description I can no longer run gatsby develop after updating the CLI. ### Steps to reproduce run `gatsby develop` ### Expected result Should run develop fine ### Actual result ``` ERROR [ref] WEBPACK Generating SSR bundle failed Can't resolve 'react/jsx-runtime.js' in '/Users/joetaylor/Documents/www/joebentaylor/.cache' If you're trying to use a package make sure that 'react/jsx-runtime.js' is installed. If you're trying to use a local file make sure that the path is correct. File: .cache/develop-static-entry.js ``` ### Environment ``` System: OS: macOS 10.15.7 CPU: (16) x64 Intel(R)…

### CASE-6939 · Generating SSR bundle failed saying it's not possible to compile spread arguments in `super()` without compiling classes
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍8 💬25 · closed · labels: type: bug/status: needs reproduction
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description gatsby build is failing with the error:- ``` error Generating SSR bundle failed /builds/anant-ag/kompanero/src/components/AddressFormModal.js: It's not possible to compile spread arguments in `super()` without compiling classes. ``` Here's the screenshot…

### CASE-6944 · Generating SSR bundle failed - Can't resolve 'gatsby-link' in 'xxx/.cache'
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍11 💬24 · closed · labels: type: bug/status: awaiting author response
- **Excerpt**: ## Description When I try to run `gatsby build` or `gatsby develop` I keep running into the following issue ``` Generating SSR bundle failed Can't resolve 'gatsby-link' in 'xxx/.cache' If you're trying to use a package make sure that 'gatsby-link' is installed. If you're trying to use a local file make sure that the path is correct. File: .cache/gatsby-browser-entry.js ``` ### Steps to reproduce This is project that has been working for a few months and I've updated yesterday and now I'm getting the above error message ### Expected result Should be able to run `gatsby build` and `gatsby…

### CASE-6949 · Comparing a component's "type" to the component is not producing expected result
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬24 · closed
- **Excerpt**: ## Description I have a few components that rely on `React.Children.map` to eventually compare `child.type` to the expected child component. This code works fine in all my React projects that use ordinary react (like Create React App), but doesn't work in Gatsby or NextJS (perhaps something to do with SSR) All my code is on the same version of React and Node (listed below) Here is a basic example of a "compound components" pattern where `<Foo>` expects `<Bar>` as it's child. In my CRA apps I get "Bar: world" as the end result (which is correct), but with Gatsby I get "not same" which shows a…

### CASE-6951 · WebpackError: Missing getServerSnapshot, which is required for server-rendered content. Only in build
- **Principles**: P-F4 · **Env**: webpack
- **Signals**: 👍0 💬23 · closed
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When running `gatsby build` this error occurs: ```console > [email] build > gatsby clean && gatsby build && copyfiles .vercel/* public && copyfiles vercel.json public info Deleting .cache, public,…

### CASE-6952 · [TS] Link is incompatible with React.forwardRef due to ref type mismatch
- **Principles**: P-F4 · **Env**: react, typescript
- **Signals**: 👍8 💬23 · closed · labels: type: bug/help wanted/stale?/topic: TypeScript
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description In a TypeScript environment, Gatsby' `Link` component is not compatible with `React.forwardRef` due to a `ref` type mismatch. ### Reproduction Link [link] ### Steps to Reproduce Run this code: ```tsx import type { GatsbyLinkProps } from…

### CASE-6961 · v2: Local gatsby-ssr.js is not run anymore on a static build.
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed · labels: type: bug
- **Excerpt**: Not sure what the deal here is, but trying my `onRenderBody` hook is no longer run when doing a gatsby build

### CASE-6970 · 301 redirects adding trailing slashes (gatsby build+serve)
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍11 💬21 · closed · labels: type: bug/status: confirmed/status: awaiting author response
- **Excerpt**: Hello ## Description I have problem with 301 redirects adding trailing slashes (/path => /path/) ONLY when I build+serve my site (gatsby build && gatsby serve && open [link] => I get redirected to [link]). Doesn't happen using gatsby develop. ### Steps to reproduce I have : - no gatsby-browser.js file - no gatsby-ssr.js file - an empty gatsby-config.js file - gatsby-node.js ``` exports.createPages = ({ actions: { createPage } }) => createPage({ path: '/hi', component: HiComponent, }); ``` - HiComponent renders hi and that's it So... minimum code possible, and still have this issue. Tried…

### CASE-6990 · SSR React helmet plugin not working in combination with Redux
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬19 · closed · labels: type: bug/stale?/status: confirmed/type: upstream
- **Excerpt**: ## Description I have a multi language website build with Gatsby, redux, redux-persist and Storyblok (CMS). When sharing our website in Slack I've noticed that no preview is available. I did some research and it looks that all the meta tags set via Helmet are present but they are not server rendered. You see the tags appearing when you inspect the website via the browser. **As a result, when sharing the website, no preview text or picture is available (og meta tags, title & description) and I guess this also has a negative impact on general SEO as well.** The official Gatsby website is…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-6932 · navigation.js:173 Uncaught TypeError
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍20 💬26 · closed · labels: type: bug
- **Excerpt**: Updated my packages today and started getting this error when i click a link on my webpage. ``` navigation.js:173 Uncaught TypeError: Cannot read property 'getElementsByTagName' of null at navigation.js:173 ``` ``` 170 | if (document.title) { 171 | pageName = document.title 172 | } > 173 | const pageHeadings = document 174 | .getElementById(`gatsby-focus-wrapper`) 175 | .getElementsByTagName(`h1`) 176 | if (pageHeadings && pageHeadings.length) { ```

### CASE-6936 · "invariant violation: inconsistent node counters detected" when upgrading to 4.8.0
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍7 💬25 · closed · labels: type: bug/status: confirmed/topic: GraphQL/topic: build
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description When **build** in 4.8.0 process fails returning the attached error. The error comes in queries with **elemMatch** filter. Everything normal in **develop**. Thanks for any help. ### Reproduction Link [link] ### Steps to Reproduce 1. yarn…

### CASE-6959 · [bug]: sharp and image processing failures
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍1 💬23 · closed
- **Excerpt**: ## Description In this issue, I'd like to collect _any_ issues others have run into regarding image processing failures with Gatsby. These should be focused on build **failures** and not warnings. For instance--if a failure occurred installing Sharp, note what the error message was and _any_ additional environment details that would be helpful for debugging the issue. Typically, these will be things like Node version, version of gatsby, version of sharp, etc. (`gatsby info --clipboard` will be _very_ helpful here) and consider following the template below to craft your reply. Also note: this…

### CASE-6968 · GraphQL Error 'Invariant violation: inconsistent node counters detected' with gatsby-source-contentful downloadLocal option
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed · labels: type: bug/topic: source-contentful
- **Excerpt**: ### Preliminary Checks - [X] This issue is not a duplicate. Before opening a new issue, please search existing issues: [link] framework]/issues - [X] This issue is not a question, feature request, RFC, or anything other than a bug report directly related to Gatsby. Please post those things in GitHub Discussions: [link] framework]/discussions ### Description Now that the issues ([link] framework][ref]) with `gatsby-source-contentful`'s `downloadLocal` option have been resolved, we've upgraded to Gatsby 4. However, we're running into a different but completely debilitating issue which is…

### CASE-6974 · Search is broken on v1 documentation site
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬21 · closed · labels: type: bug/stale?
- **Excerpt**: ## Description When I search the v1 docs site, I get results for pages that only exist on v2. If I click them I get taken to an error page. ### Steps to reproduce 1. Visit [link] 2. Focus search input, type in `createPage`, click first result <img width="749" alt="screen shot 2018-10-16 at 11 55 20 am" src="[link]> 3. You are taken to this page: [link] ### Expected result Results for v2 site should not show up when searching on v1 site. ### Actual result New page loads in weird state, loading icon never goes away and my macbook pro's fans turn on. Can't immediately tell what is going on by…

### CASE-7000 · Hot reload does not work with linaria
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬18 · closed · labels: type: bug/not stale/topic: DX
- **Excerpt**: ## Description Hot reload does not work with [link] since 2.24.9 Related issues: - [link] framework][ref] - [link] framework][ref] - [link] - [link] ### Steps to reproduce Demo project: [link] Using a linaria class, like [link] ```jsx import React from "react" import { Link } from "gatsby" import { css } from "linaria" import Layout from "../components/layout" import Image from "../components/image" import SEO from "../components/seo" const styles = { superClass: css` color: red; `, } const IndexPage = () => ( <Layout> <SEO title="Home" /> <h1 className={styles.superClass}>Hi people</h1>…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-6946 · Page Refresh Not retaining scroll position
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍3 💬24 · closed · labels: type: bug/stale?/status: confirmed/type: upstream
- **Excerpt**: ## Description When i refresh a page with a scroll bar, after i have scrolled down, the page reloads but i am back at the top of the page, not at the same scroll position. ### Steps to reproduce Go to: [link] shrink window down to ensure a decent amount of vertical scrolling. Hit refresh (note it sometimes works right away but once it breaks it's broken for good). If it didn't break right away do a few quick refresh spams and it should break ### Expected result hitting the refresh button takes me back to the same scroll position i was. (since i am not in a route i cannot use…

### CASE-6957 · Page content loaded inside a 'gatsby-announcer' div
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬23 · closed · labels: type: bug
- **Excerpt**: ## Description The project works perfectly fine in the development but after building and serving the project, the content of some pages is wrapped by a 'gatsby-announcer' div which has a 'position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0' style and therefore the content basically becomes hidden. The problem is that the page loads, I can see it flicker for a split second but very quickly disappears so I'm guessing it has something to do with some gatsby script. ### Steps to reproduce Unfortunately I'm not sure how to…

### CASE-6981 · Node Sass version 5.0.0 is incompatible with ^4.0.0.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍3 💬20 · closed · labels: type: feature or enhancement
- **Excerpt**: <!-- Please fill out each section below, otherwise, your issue will be closed. This info allows Gatsby maintainers to diagnose (and fix!) your issue as quickly as possible. Useful Links: - Documentation: [link] - How to File an Issue: [link] Before opening a new issue, please search existing issues: [link] framework]/issues --> ## Description When adding the gatsby-plugin-sass to new project, I get the error in the terminal `Generating development JavaScript bundle failed Node Sass version 5.0.0 is incompatible with ^4.0.0.` I saw this in stack overflow, seems like there was just a change.…

