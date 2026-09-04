# Case Chunk 096 — Round 96

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-10501 · Using Tailwind together with Vuetify in the same project?
- **Principles**: P-A2, P-A4 · **Env**: tailwind, vue
- **Signals**: 👍0 💬20 · closed
- **Excerpt**: Hello :) I discoverd Tailwind today and like it a lot. My thought was to add Tailwind to a current project that uses Vuetify already. The idea was to use just parts from Vuetify but also Tailwind in conjunction. Are you aware of class conflicts between the two? After adding Tailwind it seems, some flexbox definitions are not working properly anymore.

### CASE-10505 · No way to specify flex-basis css property in tailwind
- **Principles**: P-A2, P-A4, P-A1, P-G3 · **Env**: tailwind
- **Signals**: 👍34 💬19 · closed
- **Excerpt**: I am trying to create a responsive flexbox grid, like [link] which requires me to specify 2 styles for flex-basis (both of which are important, one does not override the other). ``` .flex-grid-item { height: auto; flex-grow: 1; flex-shrink: 0; flex-basis: 33.3333%; flex-basis: 200px; display: flex; } ``` Looking at the generated tailwind.css, there doesnt seem to be a way to specify these styles in the tailwind format, unless you define your own css class. <!-- 👋 Hey, thanks for taking an interest in Tailwind! Please only open an issue here if you have a bug to report or a feature proposal…

### CASE-10562 · Max-width screens named with numbers (e.g. 1800, 1440 instead of xl, lg) not working
- **Principles**: P-A2, P-A4, P-A1, P-G3, P-G1, P-G2 · **Env**: firefox, opera, windows, tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v2.2.15 **What build tool (or framework if it abstracts the build tool) are you using?** [link] **What version of Node.js are you using?** N/A **What browser are you using?** Firefox **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** I personally prefer to use numbered breakpoint names (e.g. 1800, 1200 vs 2xl, xl) as it feels a lot more intuitive during development. This worked with min-width breakpoints, but seems to not work with max-width breakpoints. The playground link documents this issue…

### CASE-10581 · .flex-1 (and possibly others) requires min-width: 0
- **Principles**: P-A2, P-A4 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: A quick bug report around flex: You can easily reproduce the issue by setting different horizontal paddings for the flexbox items (e.g. in the `flex-1` [documentation sample]([link])): the items will have different widths (and `box-sizing` won't change that). To solve it the `.flex-1` class (and I guess other shrinking-relating classes) should include a `min-width: 0` rule. There are [quite a few bugs]([link]) still with flexboxes, and possibly other workarounds would be required...

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10502 · [v4] `addComponents` is adding styles to `@user utilities` instead of `@user components`
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍52 💬19 · open · labels: v4/backwards compatibility
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.34 **What build tool (or framework if it abstracts the build tool) are you using?** `@user/cli` **Reproduction URL** [link] **Describe your issue** These are the layers in output CSS file: ``` @user theme, base, components, utilities; ``` **Expectation** It's expected for `addComponents` to add styles to `@user components` **Current behavior**…

### CASE-10522 · [v4] cli --watch seems to watch unneeded directories
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, ubuntu, tailwind
- **Signals**: 👍8 💬14 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** `@user/cli` **What version of Node.js are you using?** v20.18.1 **What browser are you using?** N/A **What operating system are you using?** Ubuntu 20.04 **Reproduction URL** N/A **Describe your issue** I have the following directory structure: ``` scss/tailwind.css another.php index.php files/models/A_LOT_OF_DIRECTORIES # <-- 1000+ dirs ``` My `scss/tailwind.css` looks like this: ```css @user theme, base, components, utilities; @user "tailwindcss/theme.css"…

### CASE-10564 · extend not working
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: hi, i try to add some custome utility for my own projact , but it dosent work in tailwind config theme: { extend: { spacing: { 65: "18rem", 66: "22rem", 67: "26rem", }, },

### CASE-10569 · Custom Functional Utilities not working in V4
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍4 💬10 · closed · labels: needs reproduction
- **Excerpt**: I have the following code: ```css @user { --text-shadow-sm: 0 1px 2px var(--tw-shadow-color); --text-shadow-md: 0 2px 4px var(--tw-shadow-color); --text-shadow-lg: 0 8px 16px var(--tw-shadow-color); } @user text-shadow-* { text-shadow: --value(--text-shadow-*); } ``` But I get the following error: ![Image]([link]) ![Image]([link]) Looking at the guide, I followed the example [here]([link]) but had to name it `text-shadow` instead of `text `because it was being picked up in the color namespace. My current solution is to use `textShadow `in the theme: ```css @user { --textShadow-sm: 0 1px 2px…

### CASE-10591 · Unable to set default light mode in Vercel portfolio template
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0 alpha For example: v2.0.4 **What build tool (or framework if it abstracts the build tool) are you using?** "dependencies": { "@user/postcss": "4.0.0-alpha.13", "@user/node": "20.11.17", "@user/react": "18.2.55", "@user/react-dom": "18.2.19", "@user/analytics": "^1.1.3", "@user/speed-insights": "^1.0.9", "geist": "1.2.2", "next": "canary", "next-mdx-remote":…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10503 · Watch issues on Docker on Windows
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, angular
- **Signals**: 👍10 💬19 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** ng build (Angular) **What version of Node.js are you using?** Docker node:v14 **What browser are you using?** Chrome **What operating system are you using?** Windows, but app is built within Docker **Describe your issue** JIT is a great concept until the expected watch API…

### CASE-10504 · Tailwind v3, Vue, Vite, @user any transform
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, safari, opera, macos, tailwind, vue, vite
- **Signals**: 👍6 💬19 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** "vue": "3.2.24", "autoprefixer": "10.4.0", "postcss": "8.4.4", "tailwindcss": "3.0.0", "vite": "2.7.1", **What version of Node.js are you using?** 16.13.1 **What browser are you using?** Chrome, Safari **What operating system are you using?** macOS Monterey **Reproduce link**…

### CASE-10506 · @user fails to resolve font URLs in external packages with Vite
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: safari, opera, macos, vite, tailwind
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.6 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.1.1 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I try to import fontawesome pro in my app.css. When running npm run build…

### CASE-10508 · Content changes not detected in SvelteKit when using globs on Windows
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, edge, opera, windows, svelte, tailwind
- **Signals**: 👍2 💬18 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** "postcss": "^8.4.6", **What version of Node.js are you using?** node 16.13.0 and also tried it with 14 **What browser are you using?** Firefox, also tried on Microsoft Edge **What operating system are you using?** Windows **Reproduction URL** [link] this is base sveltekit project with Tailwind 3.0 . if you run 'npm run dev' the correct style classes will be applied to tag classes in routes/index.svelte but try changing the **bg-color** to some other color,…

### CASE-10509 · [JIT] Purge paths with 'parent' levels (`../`) not working with JIT when symlinked
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬18 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.1 ### What build tool (or framework if it abstracts the build tool) are you using? postcss-cli v8.3.1 ### What version of Node.js are you using? Node v12.20.1 ### What browser are you using? Chrome ### What operating system are you using? macOS v11.2.3 ### Reproduction repository [link] ### Describe your issue Prior to JIT, I was able to 'purge' paths for production CSS that included paths 'above' the current directory by using the standard filesystem `../` syntax. For example my purge setup is as follows: ``` purge: […

### CASE-10510 · Unable to use the @user in vue scoped css.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, macos, vue, tailwind, vite
- **Signals**: 👍7 💬17 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** @user/vite 4.0.0, Laravel 11, vite 6 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Edge **What operating system are you using?** macOS **Reproduction URL** [Reproduction Repo]([link]) **Describe your issue**…

### CASE-10512 · Dark mode broken in 3.4.0, last working 3.3.7
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍8 💬16 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.4.0 **What build tool (or framework if it abstracts the build tool) are you using?** CDN **What version of Node.js are you using?** CDN, so N/A **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** We identified the offending CSS in [link] framework]/discussions/12627#discussioncomment-7911565 > 3.3.7: >…

### CASE-10514 · Tailwind 3 broken TS types for config
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 12.0.7 **What version of Node.js are you using?** For example: v14.18.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** [Documentation]([link]) says to do this to reference tailwind abstraction from JS:…

### CASE-10515 · Tailwind not working properly with laravel mix
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬15 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? laravel mix 6.0.6 ### What version of Node.js are you using? v 15.11.0 ### What browser are you using? Chrome / Brave ### What operating system are you using? Windows 10 ### Reproduction repository [link] ### Describe your issue 1. The first issue I am facing is whenever I run **npm run watch** I am getting infinite compilation. Issue is probably in this line in config file: `"./*.php",` `mode: 'jit'`, is enabled FYI. 2. After a while tailwind classes stopped…

### CASE-10517 · bg-conic not working in next.js production builds
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js, tailwind
- **Signals**: 👍1 💬14 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.6 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.3.2 **What version of Node.js are you using?** v22.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] (based on `npx create-next-app@user` for the initial commit) **Describe your issue** In…

### CASE-10518 · No classes generated in monorepo setup with Yarn PnP
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬14 · open
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.8 / v4.1+ **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.1+ **What version of Node.js are you using?** v22 **What browser are you using?** Chrome latest **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I think that this problem is because yarn pnp doesn't use real…

### CASE-10519 · TypeError: Cannot read properties of undefined (reading 'nodes')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, tailwind
- **Signals**: 👍2 💬14 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** @user/cli **What version of Node.js are you using?** Bun 1.2.x **What browser are you using?** Edge **What operating system are you using?** Windows **Reproduction URL** N/A - error is in the build process and can't be replicated on play **Describe your issue** When running…

### CASE-10520 · Upgrading from v4.0.3 to v4.0.9 breaks classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, nuxt
- **Signals**: 👍0 💬14 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** For example: Vite - Nuxt.js 3 **What version of Node.js are you using?** For example: v20.18.1 **What browser are you using?** For example: Chrome **What operating system are you using?** macOS **Describe your issue** When upgrading from v4.0.3 to v4.0.9 using…

### CASE-10523 · [v4] Tailwind utilities layer absent in production build when vite.build.minify is used
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, nuxt
- **Signals**: 👍10 💬14 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4 **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt (Vite) **What version of Node.js are you using?** 20 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] [link] **Describe your issue** The Tailwind `utilities` layer is absent in the reproduction. Observe how…

### CASE-10524 · Tailwind CDN page is empty
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, tailwind, next.js, webpack
- **Signals**: 👍7 💬14 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v2.0.4 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 8.3.1, Next.js 10.0.9, webpack 5.28.0 **What version of Node.js are you using?** For example: v12.0.0 **What browser are you using?** For example: Chrome, Safari, or N/A **What operating system are you using?** MAC OS CHROME…

### CASE-10526 · Background Opacity does not work when color relies on css variable
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, firefox, opera, linux, tailwind
- **Signals**: 👍4 💬15 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v3.0.18 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind play, Nx **What browser are you using?** Chrome, Firefox **What operating system are you using?** Linux **Reproduce** When you add your own color key in the colors object and make the color a css variable the opacity modifier i.e. `/50` is not working anymore. If you don't use a css variable it is working. Create the html and try to use the opacity modifier at a custom color ```html <div style="--custom-color: [ref]" class="h-52 w-52…

### CASE-10527 · TypeError: Cannot read property 'config' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Next 12.0.7 **What version of Node.js are you using?** v14.18.2 **What browser are you using?** Chrome **What operating system are you using?** Linux **Describe your issue** Compile error after import globals.css ``` error -…

### CASE-10528 · Issue in Chrome with font weights (maybe a Chrome bug)
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: chrome, chrome 81, macos, windows, tailwind
- **Signals**: 👍13 💬14 · closed
- **Excerpt**: I've noticed that in Chrome 81+ (tried 80 (80.0.3987.116), 81 (81.0.4044.34), and 82 (82.0.4056.3)) on MacOS, the font weights are all showing as normal even though they have different weights in CSS. Here's a screenshot from the Tailwind website (Chrome 81 MacOS): <img width="701" alt="Font Weights" src="[link]> If I remove `system-ui,-apple-system,BlinkMacSystemFont` from the font stack then they have different weights. I've tried on my computer and Browserstack so I'm fairly confident it's not font issue on my computer. It does seem fine on Windows in Chrome and all other browsers on…

### CASE-10529 · [v4] Tailwind CSS v4 Beta does not work with Angular 16 after migration
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, tailwind, angular
- **Signals**: 👍2 💬14 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0-beta.4 **What build tool (or framework if it abstracts the build tool) are you using?** Angular 16.2.16 **What version of Node.js are you using?** 20.14.0 **What browser are you using?** Chrome, Safari, Arc **What operating system are you using?** macOS 15.1.1 **Reproduction URL** [link] **Describe your issue** I attempted to migrate from Tailwind CSS…

### CASE-10530 · Escaping underscores in JavaScript contexts can cause mismatched class selectors
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: firefox 103, chrome 103, opera, macos, tailwind, react
- **Signals**: 👍1 💬13 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.1.6 **What build tool (or framework if it abstracts the build tool) are you using?** Create React App v5.0.1 **What version of Node.js are you using?** v16.15.0 **What browser are you using?** Observed in Firefox 103 and Chrome 103 **What operating system are you using?** macOS 12.4 **Reproduction URL** [link] **Describe your issue** Tailwind's method of…

### CASE-10531 · Laravel Mix HMR CSS and Tailwind class generation breaks when compiling 2 JS files
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, macos, tailwind, vue
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.15 ### What build tool (or framework if it abstracts the build tool) are you using? Laravel Mix 6.0.6 ### What version of Node.js are you using? v14.17.0 ### What browser are you using? Firefox Developer Edition, Chrome, … ### What operating system are you using? macOS Big Sur ### Reproduction repository [link] ### Describe your issue In a fresh Laravel application served with Valet, Tailwind JIT mode doesn't create classes or update `app.css` **for classes used in Vue components** when using hot reload (`mix watch --hot` or…

### CASE-10532 · [Bug]: Erratic css purging behaviour on Next.js app
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, linux, next.js, tailwind
- **Signals**: 👍2 💬13 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 10.2.0 ### What version of Node.js are you using? v14.6.0 ### What browser are you using? Chrome / Vivaldi / Firefox ### What operating system are you using? Arch Linux ### Reproduction repository # ### Describe your issue I'm working on a personal website build with Next.js + TailwindCSS as of right now, and I've found unexpected behaviour when my CSS is getting purged on my (temporary) staging/production environment (I'm deploying directly to…

### CASE-10536 · Exceeded maximum recursion depth while resolving `tailwindcss/utilities`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, tailwind, next.js, vite
- **Signals**: 👍0 💬12 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ```json "tailwindcss": "^4.2.1", ``` **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 11.0.0, Next.js 15.1.7, Vite 6.1.0 ```json "next": "16.1.6", "@user/postcss": "^4.2.1", ``` **What version of Node.js are you using?** v24.14.0 **What browser are you using?** Chrome **What operating system are you…

### CASE-10537 · Source boundaries not respected in dev mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, opera, macos, tailwind, vite
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** Vite v6.3.5 **What version of Node.js are you using?** v24.1.0 **What browser are you using?** Chrome, Firefox, Safari **What operating system are you using?** macOS **Describe your issue** I have a setup with two vite configs, one for the app client part using inertia and…

### CASE-10538 · Modifier order issue: variants before arbitrary not selectors fail to apply styles
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬12 · closed · labels: v3
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.4.17 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss" 8.5.3, Vite 6.3.5/7.0.0 **What version of Node.js are you using?** For example: v22.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When using…

### CASE-10539 · tailwind watch mode not refreshing files in assets folder
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍3 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** tailwind cli **What version of Node.js are you using?** v23.4.0 **What browser are you using?** firefox **What operating system are you using?** linux **Reproduction URL** [link] **Describe your issue** The watch does not work for files located in the "assets" folder. I…

### CASE-10540 · !important Not Applied in Custom Tailwind @user in Angular
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, angular
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** Angular 19.1.8 **What version of Node.js are you using?** For example: v22.14.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** N/A **Describe your issue** When defining a custom Tailwind utility using @user, adding…

### CASE-10542 · [v4] Tailwind CSS 4 ignores .vitepress directory and files
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, ubuntu, tailwind, vite
- **Signals**: 👍0 💬12 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** vite **What version of Node.js are you using?** 22.13.1 **What browser are you using?** Firefox **What operating system are you using?** Ubuntu 24.04.1 **Describe your issue** With Tailwind 3.4.x I can incorporate Tailwind classes in my Vitepress markdown files. My…

### CASE-10543 · Tailwind 4 does not work with react-router v7 framework mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, react
- **Signals**: 👍4 💬12 · closed · labels: v4/vite
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4.0.0-beta.3 **What build tool (or framework if it abstracts the build tool) are you using?** For example: react-router v7 **What version of Node.js are you using?** For example: v22.0.0 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: Windows **Reproduction URL** You can find the reproduction on the PR below: [link] Steps to reproduce: - clone the repro and checkout the PR - run npm run build - it fails **Describe your issue** The build script for tailwind doesn't work with…

### CASE-10544 · Breaking changes in plugins potentially caused by parser changes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ## What version of Tailwind CSS are you using? v3.4.3 ## What browser are you using? Chrome v123.0.6312.107 (Official Build) (arm64) ## What operating system are you using? macOS Sonoma v14.4.1 (23E224) ## Reproduction URL * for MultiTool for Tailwind CSS: [link] * for JS Tool for Tailwind CSS: [link] ## Describe your issue I was auditing some of the plugins in my growing collection of plugins I've developed for the Tailwind CSS community this past week, and a couple of them appear to now break due to what I perceive to be changes in the way the parser handles arbitrary values in plugins.…

### CASE-10545 · `optimizeUniversalDefaults` make borders black in TailwindPlay too but only at development time!
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, windows, tailwind, svelte, vite
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 2.2.19 **What build tool (or framework if it abstracts the build tool) are you using?** SvelteKit (Vite) with "postcss": "8.3.11" **What version of Node.js are you using?** node 16.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** If you open the reproduction URL you'll see the border color "GRAY", not black like in the screenshot below. ![image]([link]) If you start a new TailwindPlayground project and write that config before and then write the html…

### CASE-10546 · rtl language support when using dir=rtl
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, firefox, tailwind
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v2.2.15 **What browser are you using?** sidekick, edge, firefox **Reproduction URL** [link] **Describe your issue** When using `space-x-*` and `dir="rtl"`, the first space between elements is not applied correctly, please see the reproduction.

### CASE-10549 · Super obscure issue - hover on Tailwind V4 not working in extreme edge case
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chrome, opera, windows, tailwind, react, typescript
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** "@user/postcss": "^4", "tailwindcss": "^4", or the version this site is on: [tailwind docs]([link]) **What build tool (or framework if it abstracts the build tool) are you using?** "@user/eslintrc": "^3", "@user/postcss": "^4", "@user/node": "^20", "@user/react": "^19", "@user/react-dom": "^19", "eslint": "^9", "eslint-config-next": "15.2.3", "tailwindcss": "^4", "typescript": "^5" **What version of Node.js are you using?** v22.8.0 **What browser are you using?** Chrome, Edge **What operating system are you using?** Windows HP Spectre 360…

### CASE-10550 · Non-existence of .git directory breaks tailwind styles
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js, vite
- **Signals**: 👍0 💬11 · closed · labels: needs reproduction/oxide
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.12 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 11.0.0, Next.js 15.1.7, Vite 6.1.0 Vite 6.2.1 **What version of Node.js are you using?** v22.14.0 **What browser are you using?** chrome **What operating system are you using?** macos **Reproduction URL** * Following the instructions [here]([link])…

### CASE-10552 · [v4] Source glob pattern `./**/*.{js,ts,jsx,tsx,mdx}` does not match Next.js-style catchall route segments like `[...slug]`.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js, tailwind
- **Signals**: 👍2 💬11 · closed · labels: bug/upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.3 **What build tool (or framework if it abstracts the build tool) are you using?** - Next.js 15.1.6 - PostCSS 8 **What version of Node.js are you using?** 23.5.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** If you are [disabling automatic detection]([link]) with:…

### CASE-10553 · [v4] preflight removed margins conflicts with web-component :host styles
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 134, chromium 132, opera, ubuntu, tailwind
- **Signals**: 👍17 💬11 · open
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** @user/[email], [email], @user/[email] **What version of Node.js are you using?** v22.9.0 **What browser are you using?** Firefox 134.0.2, Chromium 132.0.6834.83 **What operating system are you using?** Kubuntu 24.10. **Reproduction URL** [link] ```bash npm ci npm start ```…

### CASE-10555 · [v4] light-dark is broken in optimized build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0-beta.8 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.1.1, postcss 8.4.49 **What version of Node.js are you using?** Bun 1.1.40 **What browser are you using?** Safari **What operating system are you using?** macOS 15.2 **Describe your issue** <details><summary>Original description</summary> <div> I defined my…

### CASE-10556 · [v4] `group-hover/xyz` does not seem to work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.6 **What build tool (or framework if it abstracts the build tool) are you using?** `@user/[email]-beta.6` **What version of Node.js are you using?** For example: v20.0.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When hovering on a group with `group/tag`,…

### CASE-10557 · Support for natively nested CSS not working as expected.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍1 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.28 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 5.4.8 **What version of Node.js are you using?** 20.11.0 **What browser are you using?** Chrome (latest as of today) **What operating system are you using?** MacOS **Reproduction URL** This is currently on localhost. Since v4 isn't available in the playground,…

### CASE-10558 · Tailwind CSS not working in WSL
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, tailwind
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** I'm using the gem [tailwindcss-rails]([link]) which has tailwindcss [v3.2.4]([link] framework]/releases/tag/v3.2.4) **What build tool (or framework if it abstracts the build tool) are you using?** I'm not using any build tool since I'm using Rails 7 with import maps. **What version of Node.js are you using?** v16.17.0 **What browser are you using?** Firefox…

### CASE-10559 · @user base override UI library styles
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** postcss:8.0.0 vite: 2.8.0 **What version of Node.js are you using?** v14.18.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** Introduced tailwindcss to override the button style of VantUI ![image]([link])…

### CASE-10560 · [3.x] Transforms not working (Laravel Mix)
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** - Laravel 8.75 - Laravel Mix 6.0.39 **What version of Node.js are you using?** 14.17.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** ~[link] (Deleted) Screenshot: ![image]([link]) **Describe your issue** The "base transform" selector is not generated. Therefore any transform utilities do not work. Basically there should be at least the following css code: ```css .rotate-90, .translate-x-1\/2 { /*…

### CASE-10561 · Focus visible doesn't work with @user in CSS module
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍4 💬11 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.0.0-alpha.2 **What build tool (or framework if it abstracts the build tool) are you using?** Next 12.0.4 **What version of Node.js are you using?** v16.13.0 **What browser are you using?** Chrome **What operating system are you using?** MacOS **Reproduction URL** Test.module.css ``` .testClass { @user focus-visible:ring-4 focus-visible:ring-teal-300; } ``` **Describe your issue** Focus visible doesn't work using @user with CSS modules as of 3.0 alpha 2. It works fine if I revert back to alpha 1.

### CASE-10563 · [Bug]: Tailwindcss JIT doesn't add new classes when files change [watch mode cache issue]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? gulp 4.0.2, browser-sync 2.26.14, gulp-postcss 9.0.0, postcss 8.2.15, @user/postcss-sass 4.0.0, postcss-scss 3.0.5 ### What version of Node.js are you using? v15.11.0 ### What browser are you using? Edge Beta v91.0.864.19 ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue When I edit my pug files e.g. I changing the padding or margin, tailwind jit mode doesn't update the css styles, but when I run the…

### CASE-10566 · Ring class does not in Chrome 111/118+ because of extra comma
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 111, chrome, opera, macos, windows, tailwind, vite
- **Signals**: 👍1 💬10 · closed · labels: browser bug
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.13 **What build tool (or framework if it abstracts the build tool) are you using?** Vite/playground **What browser are you using?** Chrome **What operating system are you using?** macOS, Windows **Reproduction URL** [link] **Describe your issue** When generating ring class name tailwind adds: ``` var(--tw-ring-inset,) 0 0 0 calc(40px +…

### CASE-10567 · tailwindcss CLI no longer works with Docker bind mounts
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍16 💬10 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** @user/cli **What version of Node.js are you using?** node:22-slim **What browser are you using?** Chrome **What operating system are you using?** macOS (w/docker) **Reproduction URL** Create a Dockerfile similar to the following: ```Dockerfile FROM node:22-slim WORKDIR…

### CASE-10568 · Tailwind CSS Not Updating Global Styles on Latest Version
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍2 💬10 · closed · labels: bug/postcss
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.1 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.2.4 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Chrome **What operating system are you using?** macOS After updating to the latest version of Tailwind CSS, global styles defined in global.css are not updating properly. The…

### CASE-10570 · [v4] Angular compilation errors in Docker are preventing TailwindCSS from working.
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, angular, tailwind, typescript, desktop
- **Signals**: 👍11 💬10 · open
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** TailwindCSS v4.0 **What build tool (or framework if it abstracts the build tool) are you using?** - Docker Desktop 4.38.0 - Node:22-alpine - Angular 19.1.4 (CLI, Core) - Typescript 5.7.2 - PostCSS 8.5.1 - TailwindCSS 4.0.4 **What version of Node.js are you using?** Node:22-alpine (Docker image) **What browser are you using?** Chrome **What operating system are…

### CASE-10573 · The `not-` variant does not work as expected with named groups (`group/{name}`)
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome 131, opera, windows, tailwind
- **Signals**: 👍7 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind Play ([link]) **What version of Node.js are you using?** - **What browser are you using?** Chrome 131 **What operating system are you using?** Windows 11 **Reproduction URL** [link] **Describe your issue** ``` <!-- Named group (does NOT work) --> <div…

### CASE-10575 · [v4] Something has broken since alpha.15, causing imports in CSS files and vite URL imports to not work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.25 **What build tool (or framework if it abstracts the build tool) are you using?** vite 5.4.8 **What version of Node.js are you using?** bun 1.1.27 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Unfortunately Stackblitz doesn't support creating a repro since it can't run the tailwind wasm…

### CASE-10576 · Insiders builds content paths not detected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** insiders.2a88642 **What build tool (or framework if it abstracts the build tool) are you using?** Reproduced in two different environments Parcel 2.7.0, postcss 8.4.18 Webpack 4.10.0, postcss 8.4.18 **What version of Node.js are you using?** v16.14.0 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **Reproduction URL**…

### CASE-10577 · Safari - Issue with colors and opacity
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 15, opera, macos, tailwind
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** laravel-mix v6.0.43 **What version of Node.js are you using?** v17.7.1 **What browser are you using?** Safari 15.4 **What operating system are you using?** macOS 12.3 **Reproduction URL** [link] **Describe your issue** **It's may be more a Safari bug than a Tailwind CSS…

### CASE-10578 · --tw-bg-opacity not defined when compiled for production
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, safari, opera, macos, tailwind
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? postcss, laravel-mix (all latest) ### What version of Node.js are you using? 16.2.0 ### What browser are you using? Firefox, Chrome, Safari ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue Hi ! On the front page in the slider. Under the title of the slide there is the pagination of the slide generate by Tiny Slider (.slide-nav) As you can see, the slide pagination is not visisible, looking in the…

### CASE-10584 · TailwindCSS styles not applied in Vite sandbox preview server
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, react
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.4.4 **What build tool (or framework if it abstracts the build tool) are you using?** remix-run/react 2.17.0, vite 6.0.0 **What version of Node.js are you using?** v20.0.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I’m running a Remix + Vite + TailwindCSS app inside my custom “sandbox” runner (an Express + Vite dev server that copies my project into /private/tmp/... and spins up Vite there). What I expected: Tailwind utility classes should be applied…

### CASE-10585 · Importing directly from a nuxt.config file is not allowed.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, nuxt, tailwind, vite
- **Signals**: 👍1 💬9 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.5 **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt 3.17.1 Vite 6.3.4 **What version of Node.js are you using?** 20.12.2 **What browser are you using?** Chrome **What operating system are you using?** Windows **Describe your issue** I occasionally encounter an error in Nuxt. The error message is as follows: ```…

### CASE-10586 · Angular 19 cannot automatically recover using @user with Tailwind CSS 4
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, angular, tailwind
- **Signals**: 👍8 💬9 · closed · labels: postcss
- **Excerpt**: Tailwind CSS: 4.0.14 Angular: 19.2.4 Node: 23.6.0 Chrome: 134.0.6998.89 (Official Build) (arm64) MacOS: Sequoia 15.3.2 (24D81) **Reproduction URL** [[link]]([link]) **Describe your issue** Reproducing the issue: - run `yarn install && yarn start` - open `src/tailwind.css` - change `bg-white` class within `@user` directive to `bg-unknown` at line 4 - observe the error: ``` ✘ [ERROR] Cannot apply unknown utility class: bg-unknown [plugin angular-css] angular:styles/global:styles:1:8: 1 │ @user 'src/styles.css'; ``` - change `bg-unknown` class within `@user` directive back to `bg-white` at line…

### CASE-10587 · [v4] [email] postcss broken production build space-{x,y}-*, divide-{x,y}-*
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 132, opera, macos, tailwind
- **Signals**: 👍8 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** - @user/[email] - [email] - [email] - [email] **What build tool (or framework if it abstracts the build tool) are you using?** - @user/[email] **What version of Node.js are you using?** - [email] **What browser are you using?** - Google Chrome 132.0.6834.111 (Official Build) (arm64) **What operating system are you using?** - macOS **Reproduction URL** - [link]…

### CASE-10588 · tailwindcss and shadow dom not working well (--spacing)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind, vite
- **Signals**: 👍5 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4 **What build tool (or framework if it abstracts the build tool) are you using?** For example: vite **What version of Node.js are you using?** For example: v23 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: Linux **Describe your issue** I mainly using tailwindcss to structure my layout…

### CASE-10589 · Astro client: directive will cause tailwindcss to be invalid
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, tailwind, vue
- **Signals**: 👍0 💬9 · closed · labels: v4/vite/upstream
- **Excerpt**: related [link] ### Astro Info ```block Astro v5.1.9 Node v22.11.0 System macOS (x64) Package Manager pnpm Output static Adapter none Integrations @user/vue ``` ### If this issue only occurs in one browser, which browser is a problem? Chrome ### Describe the Bug **What version of Tailwind CSS are you using?** 4.0 **What build tool (or framework if it abstracts the build tool) are you using?** astro **What version of Node.js are you using?** For example: v22 **Reproduction URL** [link] **Describe your issue** client: directive will cause tailwindcss to be invalid, The policy of the dev module…

### CASE-10592 · Tailwind Config file: modules alias import errors
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, next.js
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.3.1 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 8.4.18, Next.js 13.3.1 **What version of Node.js are you using?** For example: v16.16.0 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: Windows **Describe your issue** I am…

### CASE-10595 · Tailwind V3: `@user ring...` does not work anymore
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, vue
- **Signals**: 👍1 💬9 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** vite.js 2, vue 3 ```json "@user/line-clamp": "^0.3.0", "@user/tailwindcss": "^2.2.4", "@user/plugin-vue": "^1.6.0", "autoprefixer": "^10.4.0", "postcss-nested-ancestors": "^2.0.0", "tailwindcss": "^3.0.1", "vite": "^2.5.3", ``` **What version of Node.js are you using?** v15.8.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Can't be reproduced in Tailwind Play, since it works there.…

### CASE-10596 · Using pug with vite+tailwindcss in JIT mode causes HMR to not detect changes in new css compiled classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, firefox, opera, ubuntu, macos, vite, tailwind
- **Signals**: 👍6 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.0 (but the bug was present before, when enabling JIT) **What build tool (or framework if it abstracts the build tool) are you using?** vite 2.7.1 **What version of Node.js are you using?** v14.18.1 **What browser are you using?** Chrome, Safari, Firefox **What operating system are you using?** Ubuntu, NixOS, macOS **Reproduction URL** [link] **Describe…

### CASE-10597 · Backdrop filter doesn't work on child when also applied to parent
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, tailwind
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v2.2.1 **What build tool (or framework if it abstracts the build tool) are you using?** NA **What version of Node.js are you using?** NA **What browser are you using?** Chrome **What operating system are you using?** NA **Reproduction URL** [link] **Describe your issue** When "backdrop-filter backdrop-blur-sm" applied to parent and child block it works only on parent one.

### CASE-10599 · focus-visible doesn't work in Firefox even with polyfill
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, tailwind
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: ### Describe the problem: Using the classes prefixed by `focus-visible:`, like `focus-visible:ring-2` doesn't work at all. No focus ring is present on the element when focused by keyboard. It isn't working even in the docs at [link] ![focus-visible-tailwind]([link]) Note this isn't issue with the docs, this is an issue with tailwind. I've also set up tailwind + focus-visible js polyfill and postcss plugin locally and I'm observing the same behavior - no focus ring at all. I've confirmed that the polyfill is working in the docs (and also locally) by looking at the elements structure. Browser:…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10507 · hover in v4 relies on a feature that is buggy in Chromium-based browsers
- **Principles**: P-A3, P-H1 · **Env**: chromium, windows, tailwind
- **Signals**: 👍22 💬18 · open · labels: upstream
- **Excerpt**: There's a long-standing bug in Chromium that incorrectly identifies 2-in-1 Windows PCs with external keyboard and mouse attached as having no "fine" inputs. Looks like Tailwind CSS 4 now relies on this "feature" which makes hover (and possibly other things) not work on projects using v4 on these PCs. Here's the issue on the Chromium issues tracker: [link] I'm attaching a video demonstrating this in action. [link]

### CASE-10574 · [V4-BETA] Error: Selector is not pure in LightningCSS (Selector: video, Specificity: 0x1)
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, tailwind
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.0-beta.9 **What build tool (or framework if it abstracts the build tool) are you using?** For example: NextJS v15, @user/postcss 4.0.0-beta.9 **What version of Node.js are you using?** For example: v20.15.0 **What browser are you using?** For example: ARC **What operating system are you using?** For example: Windows 11 **Reproduction URL**…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10511 · Circular dependencies when using `@user` cause infinite loops/hanging
- **Principles**: P-G4, P-E3 · **Env**: tailwind, webpack
- **Signals**: 👍4 💬18 · closed
- **Excerpt**: ### Describe the problem: After upgrading to Tailwind v2, my webpack build started [hanging during the building phase]([link]) > 28% building 1/3 entries 22/27 dependencies 5/14 modules It seems to be that a compound selector is causing an infinite loop and is not triggering `RangeError: Maximum call stack size exceeded`. Also not triggering Tailwind's [circular dependency detection]([link]). ```css .my-border { @user border-2; } /* Remove the following line to see Tailwind report a "circular dependency". Leave it to see build hang. */ .foo { @user my-border; } .bar.input-border { @user…

### CASE-10525 · Tailwind does not recognize classes on the angular component tag
- **Principles**: P-G4, P-E3 · **Env**: tailwind, angular
- **Signals**: 👍0 💬14 · closed
- **Excerpt**: I have two components called button and text-box and I use sass to style them. To do this, I gave each component a class like the following: textbox component: ```ts @user({ selector: 'my-text-box', template:`<input type="text">`, host: { class: 'editor-container' }, }) export class MyTextBoxComponent {} ``` ```scss @user components { .editor-container { @user block bg-white shadow-sm border border-solid border-black; } } ``` button component: ```ts @user({ selector: 'my-button', template:` <button> Hello </button> `, host: { class: 'my-button' }, }) export class MyButtonComponent implements…

### CASE-10582 · Using @user on hover styles in a stylesheet doesn't work
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍4 💬10 · closed
- **Excerpt**: ![screenshot 2018-11-29 at 11 21 05]([link]) When I try to use @user on .btn-orange, it doesn't actually work for the hover styles, because the input element in reality doesn't have the class. As a workaround I had to use @user. Is there any better solution for this issue? I don't have control over the html so adding the class is not an option. Sorry if this was asked before. Thanks for your work!

### CASE-10594 · input type="search" properties are not reset on iPhone
- **Principles**: P-G4, P-E3 · **Env**: tailwind, iphone, desktop
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.23 **Describe your issue** On iPhone the input **type="search"** properties are not reset by default and components are rendered differently from desktop browsers. When the type is changed to **input type="text"** the rendering is identical. Visuals: **input type="search"** ![input_search]([link]) **input type="text"** ![input_text]([link])

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10513 · Bug Report: Font Weight not working properly after v1.2.0 release
- **Principles**: P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬16 · closed · labels: bug
- **Excerpt**: I've just upgraded tailwindcss from v1.1.x to v1.2.0, then the font weight is not working properly as before. As shown in the screenshot below, the weight differences between some of the classes seem to be gone. E.g. the weight of "semibold", "bold", "extrabold" are all the same now. Screenshot taken from tailwind website. ![Screenshot]([link])

### CASE-10521 · @user/postcss fails to resolve font URLs in external packages with Vite
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, macos, vite, tailwind
- **Signals**: 👍4 💬14 · closed · labels: postcss
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.6 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.1.0 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** N/A **What operating system are you using?** macOS **Reproduction** [link] **Describe your issue** The CSS entrypoint imports `@user/fontawesome-free` package CSS. When you run `npm run build`, you'll see errors indicating that font URLs within that CSS have failed to resolve: ``` ../webfonts/fa-brands-400.woff2 referenced in ../webfonts/fa-brands-400.woff2 didn't…

### CASE-10533 · Cannot use custom utilities with @user in VueJS SFC
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vue, tailwind
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: ### Describe the problem: <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> I have create a custom utility saved in a separate file `JRNICustomUtilities.css` imported by `postcss-import`: **Content of file** ``` .standard-body { font-size: 0.875rem; font-weight: 400; } ``` **tailwind.css** ``` @user "tailwindcss/base"; @user "./jrniCustomBaseStyles.css"; @user "tailwindcss/components"; @user "tailwindcss/utilities"; @user "./JRNICustomUtilities.css"; ``` I attempt to use the custom utility in a VueJS SFC `StudioHeader`…

### CASE-10571 · @user statement is not working in v4.0.2
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, tailwind
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** N/A **What version of Node.js are you using?** N/A **What browser are you using?** N/A **What operating system are you using?** N/A **Reproduction URL** [link] **Describe your issue** When we use @user url('[link]) for font files, it will be removed in the final CSS (compiled via tailwindcss)

### CASE-10580 · h1, h2, ... broken by font-weight: inherit
- **Principles**: P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍29 💬10 · closed
- **Excerpt**: My tailwind.css file includes the following ... ``` h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; } ``` This obviously breaks h1 etc. What if the proper way for me to fix this? Also, why aren't other people complaining about this? I'm a newbie so maybe I'm missing something obvious.

### CASE-10583 · @user not working
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Has anyone tried using the `@user` directive? Doesn't seem to reflect in the compiled CSS. Here is what I'm trying to do: ```css .main-nav .nav-item { @user .inline-block .uppercase .font-bold .mr-4 .pb-3 .border-b-4 .border-transparent; @user sm { @user .block; } } ``` The first `@user` rules work but the @user directive does not reflect. Thanks!

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10516 · Flex-box "order" with responsive helpers
- **Principles**: P-A1, P-A4, P-G3 · **Env**: tailwind, desktop, mobile
- **Signals**: 👍8 💬15 · closed
- **Excerpt**: Hey there, I'm currently building my first site with Tailwind and it seems that i will finish it tomorrow (which was really, really fast). One kind of utilitis I was missing so far was ```order```. Especially with responsive helpers. I like that quite a lot for reordering items on desktop or mobile for different viewports. I'm quite sure you thought about that and you have a reason why you didn't add them. Would you mind sharing your thoughts? As far as I know it's safe to use (or am I wrong). If they should be added, I suggest adding ```order``` from ```1``` to ```5``` including responsive…

### CASE-10547 · Nested classes in @user directive getting prefixed
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: I decided to start rewriting our (SASS) toolkit, starting off with my grid class. It's all BEM based, and I ran into the following unexpected/undesired behavior. I have a SASS map named `$grid-gaps` that has key/values pairs (e.g. `xs: 0.5rem`). I loop over them to set the appropriate gap modifiers and wrap them in a `@user` directive so they become responsive: .o-grid { ... @user $key, $val in $grid-gaps { @user { &--gap-#{$key} { margin: ($val * -0.5); .o-grid__col { padding: ($val * 0.5); } } } } } However, the code above _also_ creates responsive prefixes for the child classes, yielding…

### CASE-10554 · Missing CSS viewport units in build
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, safari, firefox, opera, macos, ios, tailwind, vite
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** For example: astro 5.1.9, tailwindcss/vite 4.0.0 **What version of Node.js are you using?** For example: v18.19.0 **What browser are you using?** For example: Chrome, Safari, Firefox **What operating system are you using?** For example: macOS, iOS **Describe…

### CASE-10579 · Custom container max-width doesn't work with custom container padding
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍11 💬10 · closed
- **Excerpt**: ### Describe the problem: When adding a custom container max-width and a custom horizontal padding for the container component, the custom padding is not taking effect for small and medium breakpoints. Tailwind picks up the default 1rem padding and also the lg padding but not the ones in the sm and md breakpoints. When removing the screen key under the container object, it works just fine. Here is a copy of the configuration file: ``` module.exports = { theme: { extend: { container: { center: true, padding: { DEFAULT: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', }, screens: { lg: '1152px',…

### CASE-10590 · [Bug] Adding a custom directive to `theme.extend.screens` breaks other breakpoints.
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, webpack
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.4.4 **What build tool (or framework if it abstracts the build tool) are you using?** - webpack 5.92.0 - postcss-loader 8.1.1 - postcss-preset-env 9.5.14 **What version of Node.js are you using?** For example: v20.11.0 **What browser are you using?** Arc **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** The reproduction URL basically shows my issue. As soon as I add a custom directive `hoversupport` to my `theme.screens.extend` in `tailwind.config.js`, my breakpoints stop working. Is this…

### CASE-10593 · Using both screen directive and breakpoint prefix throws error in v3.0.24
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍8 💬9 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.24 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli v9.1.0 **What version of Node.js are you using?** v16.14.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** <!-- A Tailwind Play link or public GitHub repo that includes a minimal reproduction of the bug.…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10534 · Tailwind dont work at all
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind, webpack
- **Signals**: 👍0 💬13 · closed
- **Excerpt**: I am trying to setup tailwind on my just created laravel project bu after `npm run dev` resulted `app.css` stay like this: ```css @user 'base'; @user 'components'; @user 'utilities'; ``` my webpack.mix.js are folowing: ```javascript const mix = require('laravel-mix') const tailwindcss = require('tailwindcss') mix .js('resources/js/app.js', 'public/js') .sass('resources/sass/app.scss', 'public/css') .options({ processCssUrls: false, postCss: [ tailwindcss('tailwind.js') ], }) ``` my tailwind.js are folowing: ```javascript module.exports = { theme: {}, variants: {}, plugins: [], } ``` What I am…

### CASE-10548 · Some classes are not generated in Ruby/HAML since upgrading to Tailwind 4
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.4 **What build tool (or framework if it abstracts the build tool) are you using?** Standalone CLI **What version of Node.js are you using?** 20.19 **What browser are you using?** N/A **What operating system are you using?** N/A **Reproduction URL** [link] **Describe your issue** We are using custom classes like "w-[16px] h-[16px]" sometimes in ruby variable…

### CASE-10572 · [v4] Incomplete Functionality of Next.js Module CSS with Tailwind CSS: @user and Custom Variants Issues
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, next.js, tailwind, react
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.10 **What build tool (or framework if it abstracts the build tool) are you using?** Next 15.1.4, React 19 **What version of Node.js are you using?** v20.18.1 **What browser are you using?** ARC **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** So, I have noticed several problems with the NextJS…

### CASE-10598 · Putting html classes with `dark:` variant doesn't work if `darkMode: 'class'`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬9 · closed
- **Excerpt**: Dark-mode as class. Add to html tag any class with `dark:`. No effect.

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10535 · Feature Request: Invisible Content for Screen Reader Users
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍12 💬13 · closed
- **Excerpt**: Hello, I would like to submit the following feature proposal for Tailwind: Invisible Content for Screen Reader Users. It's hugely helpful when building websites that have to meet WCAG 2.0 compliance. WEBAim recommends the following: ``` .hidden-text { position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden; } ``` More information about Invisible Content from WEBAim: [link] Admittedly, this may exist already and I missed it, or perhaps this goes against the utility first approach, but I just wanted to throw it out there. Thank you. NM

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-10541 · [v4] flex-col not working on 4.0.2 and 4.0.3 in SSR mode via the vite starter templates
- **Principles**: P-F4 · **Env**: vite, tailwind
- **Signals**: 👍0 💬12 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> I've successfully updated one of my projects to v4.0 and after updating to 4.0.2 flex-col is no longer working in SSR dev mode. **What version of Tailwind CSS are you using?** 4.0.2 and 4.0.3 **What build tool (or framework if it abstracts the build tool) are you using?** only vite and the tailwind vite plugin. **What version of Node.js are you using?** using a vanillaJS setup. **What browser are you…

### CASE-10551 · Inconsistent CSS assets between client and SSR builds with @user/vite
- **Principles**: P-F4 · **Env**: opera, macos, vite, tailwind
- **Signals**: 👍0 💬11 · closed · labels: vite
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.0.5 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.1.0 **What version of Node.js are you using?** Bun 1.2.2 **What browser are you using?** N/A **What operating system are you using?** macOS **Reproduction URL** - Using the `@user/vite` plugin: [link] - Using the `@user/postcss` plugin: [link] **Describe your issue** When using `@user/vite`, and creating an SSR build with Vite, the CSS asset paths differ between the SSR and client builds. This is not true with `@user/postcss`. The above repos contain a…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-10565 · [Feedback Requested] Renaming the leading and tracking utilities
- **Principles**: P-A5 · **Env**: tailwind
- **Signals**: 👍0 💬11 · closed
- **Excerpt**: Following up on the discussions in [ref] and [ref], I wanted to create a separate thread to get feedback on the overall idea and the motivation behind it. One of the big problems I'm trying to solve for Tailwind 1.0 is that I want the core plugin names to be as consistent as possible as well as as guessable/intuitive as possible. You can see a bunch of the work I have done towards that in this pull request: [link] The framework behind the new core plugin naming is: 1. **Use singular terminology, not plural.** It should be "the border color plugin", not "the border colors plugin". 2. **Match…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10600 · Rotate classes not working
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍5 💬9 · closed
- **Excerpt**: I have not been able to get the `rotate-*` classes using the `--transform-rotate` property working. Alternatively, applying `transform: rotate(-90deg)` style in the same situation works great.

