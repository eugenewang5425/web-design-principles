# Case Chunk 099 — Round 99

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10801 · Blur filters don't work in production build
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.4 ### What build tool (or framework if it abstracts the build tool) are you using? laravel mix 6.0.19 ### What version of Node.js are you using? 16.0.0 ### What browser are you using? Chrome ### What operating system are you using? maxOS ### Reproduction repository [link] ### Describe your issue We have a div that has applied styles `filter blur-3xl` Renders quite beautifully on a dev build, but on the production build we have a hideous result: Dev result: ![image]([link]) Production result: ![image]([link]) Not really what we are looking…

### CASE-10802 · Object Position in JIT mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, opera, macos, tailwind, vite, svelte
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? Vite (with SvelteKit) ### What version of Node.js are you using? v14.17.3 ### What browser are you using? Safari, Firefox ### What operating system are you using? macOS Big Sur ### Reproduction repository N/A ### Describe your issue Using dynamic values on Object Position (top, bottom etc.) doesn't work as expected. I want to do this: `object-top-[30%]` Seems to be a bug: `object-[30%]` works but `object-[0,30%]` should compile to `object-position: 0 30%` but…

### CASE-10803 · [JIT] Class based variant bug when chaining
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.7 ### What build tool (or framework if it abstracts the build tool) are you using? postcss v8.3.6 ### What version of Node.js are you using? v14.15.5 ### What browser are you using? chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue When using **custom variants** with classes instead of pseudo selectors, and chaining multiple variants, the output is wrong. This is the code of the `addVariant`. ``` addVariant('class', ({ modifySelectors, separator }) => { modifySelectors(({…

### CASE-10804 · [Bug]: tailwindcss + Angular 12 - cannot put tailwind.config.js in subfolder
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, opera, macos, tailwind, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? postcss 8.2.14, angular 12.0.0 ### What version of Node.js are you using? v14.15.1 ### What browser are you using? Chrome, Edge (browser independent) ### What operating system are you using? macOS Catalina ### Reproduction repository [link] ### Describe your issue I want to use a custom path for my tailwind.config.js file with Angular 12 in postcss.config.js: ``` module.exports = { plugins: { tailwindcss: { config: "./config/tailwind.config.js" },…

### CASE-10805 · [Bug]: JIT does not work with filter
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.1 ### What build tool (or framework if it abstracts the build tool) are you using? postcss-cli 8.3.1 ### What version of Node.js are you using? 15.0.1 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository Nope ### Describe your issue I use JIT and have an imported file called `buttons.css` (postcss-import). In general everything works as expected, until I added some filter classes. ```css .btn-delete { @user text-white bg-red-600 border-red-700 filter saturate-50; } ```…

### CASE-10809 · New darkMode: 'media' Not Working Mac Big Sur
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, safari, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: The new darkMode: 'media' does not seem to be working. I made a working example here in the tailwind playground. I would expect the background color to be black since my system is set to dark and not light. Yet it is rendering bg-pink-200. I also tried switching browsers thinking it might have had something to do with Chrome. I tried Safari and still no dice. I feel like I'm using the variant correctly. Maybe I'm just using it wrong I'm unsure. [DarkMode Docs]([link]) **Example** [link] ![Screen Shot 2020-11-18 at 3 09 52 PM]([link]) <img width="1382" alt="Screen Shot 2020-11-18 at 3 11 48…

### CASE-10821 · [Bug Report] Long tables don't expand using Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, chrome
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hi @user et al: I noticed today when browsing the doc page, that long tables have an "expansion" feature, however, they don't expand when clicking on the down arrow in Safari or Chrome. ![not-expanding]([link]) Am I doing something wrong? Keep up all the hard work!

### CASE-10825 · Tailwind v4 CLI crashes on Android/Termux due to missing native build fallback (`@user/watcher`)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: When running the Tailwind v4 CLI (@user/[email]) inside a **Termux (Android)** environment using Node.js v24, the CLI crashes instantly during tw:dev (watch mode). The issue triggers specifically after running a clean npm install. Npm detects the android-arm64 platform, purges optional prebuilds for other platforms (removed 7 packages), and then attempts to load native bindings (@user/watcher-android-arm64 and @user/oxide-android-arm64). Since Termux uses an environment based on bionic libc rather than standard Android environments, these prebuilds fail to load, and the CLI crashes instead of…

### CASE-10829 · Filters doesn't work in Chrome for Android on version 114/137
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, opera, android, tailwind, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1 **What build tool (or framework if it abstracts the build tool) are you using?** vite/playground **What version of Node.js are you using?** v21 **What browser are you using?** Didn't work: Chrome v114, Kiwi Brower v137 Fine: Chrome v143, Firefox v107 **What operating system are you using?** Android **Describe your issue** Any filter effect will not work…

### CASE-10832 · Custom variants don't work with @user
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.13 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.5.2 **What version of Node.js are you using?** v24.7.0 **What browser are you using?** Chrome (v140) **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Custom variants don't work with `@user` rules. When defining a…

### CASE-10833 · Hmr not work in monorepo ui lib
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/139, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed · labels: bug/upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** "@user/vite": "^4.1.12", "tailwindcss": "^4.1.12" **What build tool (or framework if it abstracts the build tool) are you using?** "vite": "^7.1.4" **What version of Node.js are you using?** v22.15.0 **What browser are you using?** Chrome/139.0.7258.155 **What operating system are you using?** Windows11/24H2/26100.4946 **Reproduction URL** [link] **Describe…

### CASE-10835 · backdrop-blur not working on Safari 18.6 + macOS Sonoma
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 18, safari, opera, macos, tailwind, webkit
- **Signals**: 👍0 💬4 · closed · labels: browser bug
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1 **What browser are you using?** Safari Version 18.6 (19621.3.11.19.1, 19621) **What operating system are you using?** macOS Sonoma 14.7.7 **Reproduction URL** [link] **Describe your issue** On the official docs, and testing it locally, the -webkit-backdrop-filter is not applied. <img width="733" height="684" alt="Image" src="[link] />

### CASE-10836 · TailwindCSS Prefixing Breaks Custom Theme Variables in Utility Classes
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: chrome, opera, windows, tailwind, webpack
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** webpack **What version of Node.js are you using?** v20.18.3 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** When using `@user "tailwindcss" prefix(tw);`, custom theme variables (e.g., `--btn-color`) inside a utility class (e.g., `.btn`) don't resolve correctly. The background color doesn't apply, and using `var(--btn-color)` breaks due to the prefix. The `theme()`…

### CASE-10837 · Vite plugin converts HSL and RGB colors to HEX during build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind, svelte
- **Signals**: 👍0 💬4 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.7 **What build tool (or framework if it abstracts the build tool) are you using?** For example: SevlteKit 2.21.1, Vite 6.3.5, @user/vite-plugin-svelte 5.0.3 **What version of Node.js are you using?** Not relevant **What browser are you using?** For example: Chrome, Arc, Brave **What operating system are you using?** For example: macOS…

### CASE-10838 · `starting:translate-y-*` doesn’t animate in Safari when the value is set via a CSS custom property
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: safari, safari 18, chrome, firefox, ios 17, tailwind
- **Signals**: 👍0 💬4 · closed · labels: browser bug
- **Excerpt**: ### bug `starting:translate-y-*` (and related transform utilities) fail to animate in Safari 18.5 / iOS 17.5. The same animation works in Chrome and Firefox. When the rule is rewritten by hand **without** a custom property, Safari behaves correctly. [link] framework]/discussions/18304#discussion-8447890 ### reproduction * **Tailwind Play (v4.1.11)** – broken in Safari, works elsewhere <[link]> * **Tailwind Play (v4.1.11) CSS** – similar animation, but succeeds in Safari <[link]> ### actual behavior In Safari the element renders at its final position immediately; the `@user` block appears to…

### CASE-10839 · Tailwind v4 doesn't generate CSS variables when using @user directive
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.8 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.3.5 **What version of Node.js are you using?** v24.1.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** When using the old JS config (I **need** it, because my color palette is JS-generated; there really should be a way how to pass JS values to the new CSS config), colors defined in it work, but no CSS variable is created for them. In the reproduction, Tailwind…

### CASE-10842 · Tailwindcss 4.1.7 is too slow
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ^4.1.7 **What build tool (or framework if it abstracts the build tool) are you using?** "@user/vite": "^4.1.7", "vite": "^6.3.5" **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** A Tailwind Play link or public GitHub repo that includes a minimal…

### CASE-10843 · @user/postcss 4.1.6 with @user/transformer-postcss: Cannot read properties of undefined (reading 'input')
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: safari, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss: 4.1.7 **What build tool (or framework if it abstracts the build tool) are you using?** parcel 2.15.1 **What version of Node.js are you using?** v22.14.0 **What browser are you using?** Safari **What operating system are you using?** macOS **Describe your issue** ``` { "name": "test", "version": "0.0.0", "source": "src/index.html", "scripts": {…

### CASE-10846 · Latest `tailwindcss` and `@user/vite` packages don't compile DaisyUI styles in Nuxt 3 Layers architecture
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, nuxt
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** - `nuxt`: `3.16.2` - `vite`: `6.2.6` - daisyui: `5.0.18` - tailwindcss: `4.1.3` - @user/vite: `4.1.3` **What version of Node.js are you using?** - Node: `20` - Bun: `1.2.9` **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Related repository: [link] - Correct styles with the Nuxt 3 single application: [link] - Broken styles with the latest versions and Nuxt 3 layers architecture: [link] -…

### CASE-10851 · Css variable dont work with ring
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.4.17 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 5.4.x **What version of Node.js are you using?** v14.21.3 **What browser are you using?** Chrome (whatever) **What operating system are you using?** Windows 11 **Reproduction URL** Private project (sorry) **Describe your issue** **screen.scss** ``` @user base { // MSP…

### CASE-10852 · Bug: Detecting classes in source files causes crash
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.11 **What build tool (or framework if it abstracts the build tool) are you using?** "next": "15.2.2-canary.3" **What version of Node.js are you using?** v20.18.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Crash ```typescript const c = "#52d71e";…

### CASE-10855 · `outline-hidden` only applies transparent outline when `forced-colors` is active?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chromium, firefox, safari, opera, macos, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.0.11 **What version of Node.js are you using?** 22.13.1 **What browser are you using?** Chromium, Firefox, Safari **What operating system are you using?** MacOS **Reproduction URL** [link] **Describe your issue** I'm currently upgrading a project from v3 to v4. The…

### CASE-10856 · NextJs 13 / Tw4 - Utilities not applied
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.8 **What build tool For example: PostCss, Next.js 13.5.3 **What version of Node.js are you using?** v18.20.4 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** It appears that preflight and base theme is indeed loaded, but utilities are not applied. I suppose it fails to parse the content directory. <img width="1511" alt="Image" src="[link] />

### CASE-10857 · [v4] Gradient percentage range not working anymore (e.g. via-[percentage:10%_90%])
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.7 **What build tool (or framework if it abstracts the build tool) are you using?** gulp v5.0.0 + Postcss **What version of Node.js are you using?** v20.18.1 **What browser are you using?** Brave + Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Using the following class doesn't give the desired result in v4: ```bg-gradient-to-r from-sky-500 to-sky-500 via-rose-500 via-[percentage:10%_90%]``` v3 ![Image]([link]) v4 ![Image]([link]) The browser considers the property as invalid because…

### CASE-10858 · [v4] Blur not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, opera, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.6 **What build tool (or framework if it abstracts the build tool) are you using?** For example: N/A **What version of Node.js are you using?** For example: v20.18.1 **What browser are you using?** For example: Chrome and Edge **What operating system are you using?** For example: Linux **Reproduction URL** [link] **Describe your issue** Hello,…

### CASE-10859 · Tailwind CSS Classes Not Working on Chrome for Android 14
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chromium, opera, android 14, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: What version of Tailwind CSS are you using? v4.0.4 What build tool (or framework) are you using? Next.js 15.1.6 with PostCSS 8.5.1 What version of Node.js are you using? v22.13.1 What browser are you using? Chrome (latest) and other Chromium-based browsers on Android 14 What operating system are you using? Android 14 **Describe Your Issue** In my Next.js + Tailwind CSS project, I have encountered an issue where some Tailwind classes work in one component but fail in another, specifically on Chrome (and other Chromium-based browsers) on Android 14. - Observed Behavior: The following class…

### CASE-10860 · All the stylesheets CSS file loading twice on build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, react
- **Signals**: 👍0 💬4 · closed · labels: bug/vite/upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** react-router framework 7.1.3 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** - Clone the Repo [link] - `pnpm build` - Run `http-server-spa build/client index.html…

### CASE-10861 · [V4] Performance issue (@user)
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, safari
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hi there! After the update, I've encountered performance issues. Our project relies heavily on **custom variants**. Previously, we used the **addVariant** API to add them, which kept the generated CSS lightweight and didn’t slow down the browser. Now, when using the new approach with **@user**, we experience severe slowdowns, especially in large projects. The issue is particularly noticeable in Chrome, and in Safari, it's even worse. I’ve concluded that the problem lies specifically in the CSS, as the rest of the code remains unchanged. Below, I’ll show an example of how the generated CSS…

### CASE-10863 · v4 Regression: Keyframe animations defined in JS must be referred to using kebab case, even if defined in camelCase
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** webpack 89.0 **What version of Node.js are you using?** For example: v20.18.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Probably just a documentation issue, but can make one if helpful **Describe your issue**…

### CASE-10864 · v4.0 :hover not working on edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0 and 4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.5.1 **What version of Node.js are you using?** Node 23:alpine **What browser are you using?** Edge **What operating system are you using?** Windows **Describe your issue** I'm fancing problems while using :hover property on Edge browser. Seems that…

### CASE-10868 · [v4] Error: Can't resolve error with postcss
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0 release **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.5.1 **What version of Node.js are you using?** 20.18.2 **What browser are you using?** latest chrome **What operating system are you using?** macos 15.2 **Describe your issue** I habe a rails project, which uses tailwind via postcss. I did the upgrade steps…

### CASE-10869 · [v4] Linear gradients behave differently: there is no smoothness between "via" and "to"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** gulp v5.0.0 **What version of Node.js are you using?** v20.18.1 **What browser are you using?** Brave + Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Not sure if this is intentional or a regression, but in v4 there is no smoothness between "via" and "to" The classes I'm using: `bg-gradient-to-r from-white/0 from-20% via-white to-50%` (I'm using bg-gradient instead of bg-linear to toggle between…

### CASE-10870 · When using tailwindcss4.0.0 with ChakraUI3.5.1, the styles are conflicting and overriden.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite, react, typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** vite with react + typescript template using `npm create vite@user` **What version of Node.js are you using?** v22.13.0(Jod) **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] Please clone this repo and run `npm…

### CASE-10872 · Tailwind is not working with checkbox and select
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3, P-G4, P-E3 · **Env**: chrome, edge, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Tailwind: 3.4.17 Vite: 6.0.5 Node: 22.12.0 Browser: Chrome, Edge OS: Windows, Mac Reprod Link: Repo: [link] Hosted: [link] There seems to be a production issue with Tailwind CSS: Checkbox Issue: The rounded class is not being applied to the checkbox. Despite including this class, the checkbox remains square-shaped instead of rounded. Additionally, in dark mode, the checkbox color remains white, and also the background color is not being applied as expected. Select Input Issue: The select input is not styled consistently. There is uneven padding — the left side has more space than the right,…

### CASE-10873 · Style output via `tailwindcss-rails` gem appears off when compared to other build options
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.4.16 **What build tool (or framework if it abstracts the build tool) are you using?** the `tailwindcss-rails` gem **What version of Node.js are you using?** N/A **What browser are you using?** Issue seems browser agnostic, but I've tested Safari and Firefox **What operating system are you using?** macOS **Reproduction URL** Repo with minimal amount of…

### CASE-10875 · [v4] `@user/vite` crashing dev server with `_ has already been declared` errors
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind, svelte
- **Signals**: 👍0 💬4 · closed · labels: v4/vite
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0-beta.4 for both `tailwindcss` and `@user/vite` **What build tool (or framework if it abstracts the build tool) are you using?** Svelte 5/Vite **What version of Node.js are you using?** v20.15.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] Repro info below can also be found in the…

### CASE-10876 · [v4] Styling doesn't get applied properly to ::after elements
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, linux, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4 beta 3 **What build tool (or framework if it abstracts the build tool) are you using?** Astro 5 beta, Vite 6.01 **What version of Node.js are you using?** v20 **What browser are you using?** Chrome, Brave **What operating system are you using?** Windows, Linux **Reproduction URL** [link] **Describe your issue** The element no longer looks the same when…

### CASE-10878 · [v4] @user/postcss - transpilation either doesn't work or the output is not the same as with Autoprefixer
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 131, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed · labels: v4
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0-beta.2 **What build tool (or framework if it abstracts the build tool) are you using?** vite 5.4.11 **What version of Node.js are you using?** v22.11.0 **What browser are you using?** Chrome 131.0.6778.86 **What operating system are you using?** Windows 11 24H2 **Describe your issue** When the @user/postcss plugin is used, without explicitely using…

### CASE-10879 · Plugin config extensions aren't deepmerged.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** - 3.4.9 **What build tool (or framework if it abstracts the build tool) are you using?** - vite: 5.0.3 **What version of Node.js are you using?** - 22.11.0 **What browser are you using?** - Chrome **What operating system are you using?** - Windows **Reproduction URL** Unsure how to reproduce in tailwind.play as it's a config issue and I can't access the post…

### CASE-10880 · [v4] font family config breaks in `4.0.0-alpha.32`
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome 130, opera, windows, tailwind, vite, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.33 **What build tool (or framework if it abstracts the build tool) are you using?** vite 5.4.11, @user/vite 4.0.0-alpha.33, svelte 5.4.16 **What version of Node.js are you using?** v20.17.0 **What browser are you using?** Chrome 130 **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Custom font…

### CASE-10881 · Documented integration with angular does not work per your documentation
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, angular, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.4.14 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss 8.4.47 **What version of Node.js are you using?** For example: v18.18.0 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS [**Reproduction URL**]([link]) I know this is a link to…

### CASE-10882 · Tailwind cdn url is not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **Version of Tailwind CSS - v3.4.13** **Browser - Chrome, and Firefox** **Operating system - Ubntu v22.04.4** **URL - [link] **Describe your issue** When hitting this URL in browser it is not working. it showing error for the check the below screenshot from chrome & firefox ![Screenshot from 2024-10-29 04-55-59]([link]) ![image]([link]) ![image]([link]) ![image]([link]) **I am following the official…

### CASE-10883 · [v4] vite build --watch only compile html classes right on the init run
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, opera, linux, vite, tailwind
- **Signals**: 👍0 💬4 · closed · labels: v4/vite
- **Excerpt**: **What version of Tailwind CSS are you using?** v4 **What build tool (or framework if it abstracts the build tool) are you using?** Plain vite Projekt with css/html Input files in rollup config **What version of Node.js are you using?** v20.11.0 **What browser are you using?** Chrome **What operating system are you using?** Linux Debian **Describe your issue** I have some css files ans HTML files. The HTML contains some tailwindcss classes like p-2 etc. If i run vite build --watch the first build is correct. And the p-2 css Definition is in the Output css. But if i change the classes in the…

### CASE-10884 · Inverting light/dark scales without using :dark variant by playing with data-theme attribute or class name
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.18 **What build tool (or framework if it abstracts the build tool) are you using?** Remix 2.9 **What version of Node.js are you using?** v20.10.0 **What browser are you using?** Firefox **What operating system are you using?** None. I am using a Linux distro. **Reproduction URL** [link] **Describe your issue** Hello everyone, I'm using the latest…

### CASE-10885 · Regression: classes with decimals no longer showing up in 4.0.0-alpha.18
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.0-alpha.18 **What build tool (or framework if it abstracts the build tool) are you using?** For example: @user/postcss 4.0.0-alpha.18, Next.js 15.0.0-rc.0 **What version of Node.js are you using?** For example: v20.15.0 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS…

### CASE-10886 · Arbitrary dynamic value in % doesn't work!
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ^3.3.5 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 13.4.5 **What version of Node.js are you using?** For example: v16.16.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Tailwind Play link: [link] **Describe your issue** The arbitrary value for left position…

### CASE-10887 · darkMode: 'class' feature not working with Tailwind CDN (v3.4.1)
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: firefox, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.4.1 **What build tool (or framework if it abstracts the build tool) are you using?** CDN **What version of Node.js are you using?** CDN, so N/A **What browser are you using?** Firefox **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** **Dark Mode On:** <img width="1428" alt="Screenshot 2024-02-02 at 20 04 17" src="[link] framework]/assets/95721351/78cb6543-24b8-4b0b-8c1c-b5a5cda5bd7a"> **Dark Mode Off:** <img width="1431" alt="Screenshot 2024-02-02 at 20 05 22" src="[link]…

### CASE-10889 · Arbituray Value using Clamp() doesn't work if there is a negative value
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 118, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.4.31, postcss-cli 10.1.0, webpack 5.89.0 **What version of Node.js are you using?** v16.14.0 **What browser are you using?** Chrome 118.0.5993.118 **What operating system are you using?** Windows 10 **Reproduction URL** Can't provide URL of the project. But it can…

### CASE-10891 · Custom variant not "hiding" built-in variant of same name
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind, nuxt
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt v3.7.4 **What version of Node.js are you using?** v18.18.0 **What browser are you using?** Arc (Chrome) **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When I make a plugin creating variants with the same names as…

### CASE-10892 · TailwindCDN breaks when loading a custom plugin within an iframe
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.7.2 **What build tool are you using?** parcel v2.0.0, but it seems unrelated (also tried on esbuild v0.17.19) **What version of Node.js are you using?** v14.18.1 (also tried on v18.14.2) **What browser are you using?** Chrome, Firefox **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** TailwindCDN breaks when…

### CASE-10893 · Problem with the default tw-backdrop-brightness property
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 114, firefox, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Version: "tailwindcss": "^3.3.2", **What build tool (or framework if it abstracts the build tool) are you using?** "next": "^13.4.7", "turbo": "^1.10.6" **What version of Node.js are you using?** v18.14.2 **What browser are you using?** Chrome 114.0.5735.198 In Firefox and other browser everything is fine. **What operating system are you using?** macOS…

### CASE-10894 · [postcss] Cannot create property tailwind.config.js on string node-jiti (File: index.css)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, tailwind, vite, react
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: **Tailwind**: v3.3.2 **Vite**: v4.3.9 **React**: v18.2.0 **Node**: v19.0.0 **Browser**: Chrome **OS**: Windows **pnpm**: V8.6.5 **Reproduction URL**: [link] ## **Describing the issue** All I did was simply create a new vite project, with react, and follow your documentation on how to add tailwind. The steps being: 1. npm create vite@user my-project -- --template react 2. cd my-project 3. code . 4. pnpm add -D tailwindcss postcss autoprefixer 5. npx tailwindcss init -p 6. add content to tailwind.config.js: content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ], 7. add to index.css these…

### CASE-10895 · Tailwind CLI creates .css which violates MIT License
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 114, opera, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.2 **What build tool (or framework if it abstracts the build tool) are you using?** - Tailwind CLI **What version of Node.js are you using?** - v18.6.1 **What browser are you using?** - Firefox 114.0.2 (64-bit) **What operating system are you using?** - Arch Linux **Reproduction URL** - N/A **Describe your issue** While I was writing a blog post on open…

### CASE-10896 · [v3.3.2] Docs: sticky element not working as expected
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.3.2 **What build tool (or framework if it abstracts the build tool) are you using?** n/a **What version of Node.js are you using?** n/a **What browser are you using?** Chrome **What operating system are you using?** macOS latest **Reproduction URL** [link] **Describe your issue** On the sticky section of the documentation there is a bug where in some cases the category sticky element does not show up as they are expected to. [link] framework]/assets/3485831/9253a536-e457-4ac9-b214-eaec19e5df51

### CASE-10898 · @user rule won't recognize any @user rule (components, utilities or base)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link] framework]/discussions/10605 <div type='discussions-op-text'> <sup>Originally posted by **JOYBOY-0** February 16, 2023</sup> ### What version of Tailwind CSS are you using? v3.0.24 ### Relevant dependencies: ``` "vite": "^4.1.0" "autoprefixer": "^10.4.13", "postcss": "^8.4.21", "postcss-import": "^15.1.0", "tailwindcss": "^3.2.6", ``` "postcss": "^8.4.12", "vite": "^2.9.1" ### What version of Node.js are you using? `v19.6.0` ### What browser are you using? Chrome ### What operating system are you using? Windows 10 ### PostCSS config file: ```jmodule.exports = {…

### CASE-10900 · `break-words` class might need to include `word-break: break-word`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v3.2.4` **What build tool (or framework if it abstracts the build tool) are you using?** `Gatsby v5.2.0` **What version of Node.js are you using?** `18` **What browser are you using?** `Firefox` **What operating system are you using?** `Windows` **Reproduction URL** [link] **Describe your issue** I state "might" because this might be a browser bug, or another…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10806 · tailwindcss 2.0 is not working on laravel 8
- **Principles**: P-A1, P-A4, P-G3 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the problem: 1 installed tailwindcss postcss autoprefixer 2 added directives to resource/css/app.css 3 upgraded laravel-mix 5.1 to 6 beta when i run npm run dev ✔ Compiled Successfully in 8498ms ┌───────────────────────────────────┬──────────┐ │ File │ Size │ ├───────────────────────────────────┼──────────┤ │ /js/app.js │ 593 KiB │ ├───────────────────────────────────┼──────────┤ │ css/app.css │ 61 bytes <!-- it's just not working. No errors, no nothing <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta…

### CASE-10812 · Responsive Container Classes dont work
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ``` module.exports = { purge: [], theme: { container: { center: true, padding: { default: '1rem', sm: '2rem', lg: '4rem', xl: '5rem', }, }, ``` This do not work. Just the default has an effect to the container when compiled. Maybe this is in conflict with my screens config: ``` screens: { 'sm': { 'min': '640px' }, 'md': { 'min': '768px' }, 'lg': { 'min': '1024px' }, 'xl': { 'min': '1280px' }, 'xxl': { 'min': '1441px' }, 'wide': { 'min': '1601px' }, 'ultrawide': { 'min': '1901px' }, 'landscape': { 'raw': '(orientation: landscape) and (max-width: 1280px)' }, 'phone-landscape': { 'raw':…

### CASE-10816 · [Feature Request] Responsive Containers
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- 👋 Hey, thanks for taking an interest in Tailwind! Please only open an issue here if you have a bug to report or a feature proposal you'd like to discuss. If you need help, have questions about best practices, or want to start a discussion about anything else related to Tailwind, open an issue on the `tailwindcss/discuss` repo instead: [link] --> Hey there, So my boss recently asked me if select blocks in the site could break out of the container on anything smaller then XL. I thought a simple xl:container would do the trick but I then found that it didn't exist. To add to it I cannot…

### CASE-10822 · Colon classes can't be found
- **Principles**: P-A1, P-A4, P-G3 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I am experiencing a weird issue while trying to use tailwind classes that contain colons like the responsive and hover ones. The upcoming snippet is followed by an exception when building the less files. ```css @user preflight; @user utilities; .btn { @user .no-underline .text-sm .px-3 .py-3 .leading-none .border .rounded .border-white .text-white .md\:flex-initial .hover\:text-primary .hover\:bg-white .mr-2 .md\:mr-0; } ``` ```sh ERROR in ./resources/assets/css/app.less Module build failed: ModuleBuildError: Module build failed: Syntax Error (2:4) No .md\\\:flex-initial class found. 1 | .btn…

### CASE-10834 · Classes are not being generated if using breakpoint
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, tailwind
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.2 Doesn't work, 3. does work. **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.5.6 **What version of Node.js are you using?** 24.4.1 **What browser are you using?** Chrome **What operating system are you using?** Win11 **Describe your issue** I am using tailwind as a postcss plugin. New 4. version requires…

### CASE-10845 · Inconsistent ordering between custom min-[...] breakpoints and Tailwind’s default responsive prefixes
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.0 **What version of Node.js are you using?** v20.10.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** - Issue: Custom `.container` class breaks at wider breakpoints I'm…

### CASE-10848 · Group and group-hover Not working at responsive screen in tailwind-V4
- **Principles**: P-A1, P-A4, P-G3 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Dear team . Group and group-hover Not working at responsive screen in tailwind-V4 [link] Br// Muhammad Fauzan

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10807 · TailwindCSS2 and Nano issue on focus-within, prod build error.
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the problem: After upgrading to TailwindCSS2 the `postcss` fails on `Error: Expected an opening square bracket.` The issue is the line: ` .sm\[focus-within]\:sr-only[focus-within] {` Without `precss` in `postcss` it builds but the final CSS is missing some classes. ` at /home/xxx/common.css:45216:3` ``` .sm\:not-sr-only { position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; } /* ---> HERE <---- */ .sm\[focus-within]\:not-sr-only[focus-within] { position: static; width: auto; height: auto; padding: 0; margin: 0;…

### CASE-10819 · Word-Wrapping
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: I'm aware we have `break-words` and `break-normal` but they don't allow us to insert line breaks when words overflow their parent container. Unfortunately they're not enough to make this work and I had to extend the class and add `word-break: break-all` too. Demo showing the issue and how it looks when _fixed_: [link] Some useful links: - [link] - [link] Should this be included by default? Should we make a couple new classes to add support for `word-break`? Also since `word-wrap` is not part of the standard and we now have `overflow-wrap`, should we change it and let Autoprefixer do its…

### CASE-10820 · Grid creates horizontal scrolling
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hello, if creating a grid like the docs say, I get horizontal scrolling. Example: [link] You have to resize the window to a breakpoint of the container or for example 999px, then there is the horizontal scrolling. Am I doing something wrong?

### CASE-10823 · [ Problem ] Compiling Stylus with Laravel Mix
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G4, P-E3 · **Env**: webpack, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hey everybody. How are you? I'm getting some weird behavior when I try to compile Stylus stylesheet using Laravel Mix. My input file is: ```styl // resources/assets/stylus/app.styl @user preflight; @user utilities; .card { @user .max-w-sm .rounded .overflow-hidden .shadow-lg; } ``` As instructed on the docs, my Mix config file is set to: ```js // webpack.mix.js mix.stylus('resources/assets/stylus/app.styl', 'public/css') .options({ postCss: [ tailwindcss('./tailwind.config.js') ], }); ``` And the output file is: ```css // public/css/app.css // ... Around line 3639 @user .max-w-sm .rounded…

### CASE-10840 · "truncate" utility cuts off characters on y-axis
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: **Describe your issue** During development I noticed that the "g" in one of my spans was cut-off, since I was using the "truncate" utility. From [the docs]([link]) we can see that it currently is bundling these classes: ``` overflow: hidden; text-overflow: ellipsis; white-space: nowrap; ``` I would argue that this is unintended behaviour and recommend switching to: ``` overflow-x: clip; text-overflow: ellipsis; white-space: nowrap; ``` If that is deemed too dangerous (since it might affect text written in languages that go top to bottom), maybe another utility (e.g. `truncate-x` or…

### CASE-10844 · [upgrade to v4] Error: Cannot apply unknown utility class: lg:block
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: opera, windows, tailwind, webkit, mobile
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.4.17 **What build tool (or framework if it abstracts the build tool) are you using?** npx **What version of Node.js are you using?** v22.14.0 **What operating system are you using?** Windows **Reproduction URL** ``` @user base { .no-scrollbar-mobile::-webkit-scrollbar { @user hidden lg:block; } } ``` **Describe your issue** Can't upgrade because of that…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10808 · Hugo + Tailwindcss + Netlify fails to build
- **Principles**: P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### package.js ``` { "name": "website", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "start": "./hugo server --gc --disableFastRender", "build": "hugo --minify --gc" }, "keywords": [], "author": "", "license": "", "homepage": "[link] "dependencies": { "@user/postcss-purgecss": "3.0.0", "@user/typography": "0.3.1", "@user/ui": "0.7.2", "aos": "3.0.0-beta.6", "autoprefixer": "10.0.2", "postcss": "8.1.7", "postcss-cli": "8.3.0", "postcss-import": "13.0.0", "prettier": "^2.1.2", "prettier-plugin-go-template": "0.0.10", "tailwindcss": "^2.0.1" } } ``` ###…

### CASE-10826 · Resolves text-[--spacing(n)] as color instead of font-size
- **Principles**: P-B1, P-B2, P-B3 · **Env**: tailwind, angular
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link] framework]/discussions/20257 <div type='discussions-op-text'> <sup>Originally posted by **marcjulian** June 18, 2026</sup> <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.3.0, v4.3.1 **What build tool (or framework if it abstracts the build tool) are you using?** For example: @user/postcss 4.3.1, postcss 8.5.15, Angular v22 **What version of Node.js are you using?**…

### CASE-10827 · Vue pre-processor panics with Utf8Error from bare unwrap()
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vue, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: Hit this on a Vue 3 project building with `@user/[email]`. Any `.vue` whose template text contains common multi-byte glyphs (em-dash, ellipsis, arrows: `—`, `…`, `→`, `·`, `⌘`) can take down the build with: ``` thread '<unnamed>' panicked at crates/oxide/src/extractor/pre_processors/vue.rs:17:59: called `Result::unwrap()` on an `Err` value: Utf8Error { valid_up_to: 45, error_len: Some(1) } fatal runtime error: failed to initiate panic, error 604197664, aborting error: Failed to run "vite" due to signal SIGABRT ``` ## Where [`crates/oxide/src/extractor/pre_processors/vue.rs`]([link]…

### CASE-10841 · Standalone CLI watch not working in the Docker dev container, but works (albeit with some quirks) on Windows
- **Principles**: P-B1, P-B2, P-B3 · **Env**: windows, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Tailwind CSS CLI v4.1.7 Windows 11 x64** seems to work "fine". Editing `templates/test/index.html.twig`: ![Tailwind CSS CLI on Windows]([link]) 1. Add `text-2xl`, the class is added to the output ✅ 2. Change the class to `font-bold`, the class is added but previous `text-2xl` isn't removed 🛑 This is intended behavior — like a kind of history or cache — where previously 'seen' classes are never removed? The main issue I'm facing — however — is running **Tailwind CSS CLI in a Docker container Debian 12 (bookworm) x86_64**: isn't working at all, no class is added to the output: ![Tailwind CSS…

### CASE-10890 · Add `leading-inherit` / `leading-reset` class to help with WCAG requirement that allows users to increase `line-height`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux, windows, tailwind, next.js, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.3.1, Next.js 10.0.9, webpack 5.28.0 **What version of Node.js are you using?** v12.0.0 - LTS **What browser are you using?** All browsers **What operating system are you using?** All Os, Linux, Windows, Mac **Reproduction URL** [link] **Describe your issue**…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10810 · Background imports from tailwind config file doesn't work with vuejs
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: tailwind, vue
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Describe the problem: Importing background images in tailiwind.config.js like ``` backgroundImage: (theme) => ({ 'down-arrow': "url('/assets/down-arrow.svg')", }), ``` is not working when the class bg-down-arrow is used The CSS in dev tools is ``` .bg-down-arrow { background-image: url('/assets/down-arrow.svg'); } ``` The CSS when used a class in css is like ``` .bg-down-arrow { background: url(/img/down-arrow.1467c7af.svg); } ``` This is probably not a problem with Tailwind but there should be a way to handle this scenario for vuejs

### CASE-10831 · `@user` directive fails to resolve custom theme utilities in svelte builds since v4.1.14
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, windows, svelte, tailwind, vite
- **Signals**: 👍1 💬4 · closed · labels: needs reproduction
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.14 **What build tool (or framework if it abstracts the build tool) are you using?** @user/package 2.5.4, Vite 7.1.9, PostCSS 8.5.6 **What version of Node.js are you using?** v20.x+ (Node.js runtime) **What browser are you using?** N/A (build-time issue) **What operating system are you using?** Windows (also affects other platforms) **Reproduction URL** _A minimal reproduction would need to be created - this is a complex monorepo setup with svelte-package + @user directive + custom theme utilities_ **Describe your issue** The `@user`…

### CASE-10854 · "Unexpected semicolon" error when using @user "daisyui/theme" to custom theme for daisyui
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.0 **What version of Node.js are you using?** v22.11.0 **What browser are you using?** Brave **What operating system are you using?** MacOS **Describe your issue** When using @user "daisyui/theme" to custom theme for daisyui, i got an issue like: [vite] Internal…

### CASE-10866 · Cannot use HTML style tag with Vite to apply a theme
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, vite, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Latest Vite with autoprefixer **What version of Node.js are you using?** NodeJS v22.10.0 **What browser are you using?** Brave **What operating system are you using?** macOS **Reproduction URL** ```html <!DOCTYPE html> <html> <head> <style> @user "tailwindcss"; @user…

### CASE-10897 · Dark mode doesn't work in v3.3.1
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, linux, tailwind, svelte, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> The dark mode doesn't work in `v3.3.1` anymore in some browsers. **What version of Tailwind CSS are you using?** v3.3.1 **What build tool (or framework if it abstracts the build tool) are you using?** Sveltekit 1.15.7, vite 4.3.1 **What version of Node.js are you using?** v18.16.0 **What browser are you using?** Falkon **What operating system are you using?** Linux **Reproduction URL** The dark mode in the…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10811 · PostCSS each in conjunction with @user... vars are not expanded?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: Assume that you have the following CSS variable: ```css :root { --colors: red, green, blue; } ``` With PostCSS each plugin I can easly loop and dynamically create 3 classes: ```css @user $color in var(--colors) { .myclass-$(color) { color: $(color); } } ``` ```css .myclass-red{ color: red; } /* other classes ... */ ``` Wrapping in `@user` doesn't work anymore, example output: ```css @user { @user $color in var(--colors) { .myclass-$(color) { color: $(color); } } } ``` ```css .sm\:myclass-\$\(color\) { color: red; } /* other classes ... */ ``` I'm using the same syntax, just wrapping my…

### CASE-10813 · Tailwindcss v1.8 dark mode (experimental) issue
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: ### Describe the problem: 🚫 Error: Your config mentions the "dark" variant, but "dark" doesn't appear to be a variant. Did you forget or misconfigure a plugin that supplies that variant? <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> ### Link to a minimal reproduction: ```javascript // tailwind.config.js 'use strict'; module.exports = { dark: 'class', experimental: 'all', future: { purgeLayersByDefault: true, removeDeprecatedGapUtilities: true, }, purge: { content: [ './public/**/*.html', './src/**/*.js', ], },…

### CASE-10814 · Not purging vue css block
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: vue, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I'm facing a weird issue with tailwind purgeCss. It successfully purges any unused classes from external `.css` or `.scss` files. But it is not purging any classes defined inside the `<style>` block. ### Postcss Config: ./postcss.config.js ```js module.exports = { plugins: [require("tailwindcss"), require("autoprefixer")] }; ``` ### Tailwind Config: ./tailwind.config.js ```js module.exports = { purge: { enabled: true, mode: "all", content: ["./public/**/*.html", "./src/**/*.vue"] }, theme: { extend: {} }, variants: {}, plugins: [] }; ``` ### App Component: ./src/App.vue ```vue <template>…

### CASE-10818 · .outline-none class missing in stylesheet
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: No matter what I try, I simply can't get the .outline-none to work, it's not included in my stylesheet. I'm running the newest Tailwindcss version 0.7.3 Here is my app.scss ```sass // Import Preflight and Components @user preflight; @user components; // Import Custom Mixins @user "mixins"; // Import Custom Classes @user "components/all"; @user "utilities/all"; @user "layouts/all"; // Import Utilities // TailwindCSS recommends leaving utilities till last to ensure they aren't overwritten. @user utilities; ``` The modules.export in my tailwind.config.js ```js ... outline: ['focus'], ... ``` My…

### CASE-10824 · Scanned candidate emitted with corrupted bytes (`child` → `U+FFFD \x06 U+FFFD \x01`) by a long-lived `next dev` (Turbopack) process — evidence against the scanner's `from_utf8_unchecked` safety assumption
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: ## Summary A long-running `next dev` (Turbopack) process in a pnpm monorepo entered a state where Tailwind's generated CSS contained a corrupted copy of one arbitrary-variant candidate. The bytes of `child` in the candidate `[&>*:last-child]:col-span-2` (present verbatim in a `.tsx` source file) were replaced by the four characters `U+FFFD U+0006 U+FFFD U+0001`, producing unparseable CSS. Every route then failed with lightningcss's `Parsing CSS source code failed`, and the state persisted in memory until the dev server was restarted. A production `next build` of the identical tree compiled…

### CASE-10830 · `theme()` function evaluates to garbage in the `@user` definition in some cases
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.14 **Reproduction URL** [link] **Describe your issue** ```css @user { --color-lime: light-dark(theme(colors.lime.950), theme(colors.lime.50)); } ``` The second argument, `theme(colors.lime.50)`, somehow evaluates to `m`. This does not happen with 3-digit color variants. <img width="589" height="99" alt="Image" src="[link] />

### CASE-10865 · Tailwind uses incorrect css variable for `max-w-*` utilities
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.1 **Reproduction URL** [link] **Describe your issue** I have custom theme variables in my project, such as `--spacing-sm`, `--spacing-md`, etc. When using the utility `max-w-sm`, I expect tailwind to generate the following CSS: ```css max-width: var(--container-sm); ``` However, it instead generates: ```css max-width: var(--spacing-sm); ``` It seems like…

### CASE-10867 · [v4] Cannot apply unknown utility class X without @user directive
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind, vite, vue, svelte
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 5.4.14 **Describe your issue** In the [upgrade guide]([link]) for v4, the following is stated: > In v4, stylesheets that are bundled separately from your main CSS file (e.g. CSS modules files, <style> blocks in Vue, Svelte, or Astro, etc.) do not have access to theme variables, custom utilities, and custom variants defined in other files. This makes it seem like you wouldn't have to use the `@user` directive to include all util classes included out of…

### CASE-10871 · Bug: CSS Variables in `@user`, `@user base`, and `:root` do Not Inherit Inline style Values in Tailwind CSS v4
- **Principles**: P-E1, P-E2, P-E4 · **Env**: chromium, opera, macos, ios, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ## What version of Tailwind CSS are you using? v4.0.0 ## What build tool are you using? Tailwind Playground ## What version of Node.js are you using? N/A ## What browser are you using? Chromium to 132.0.6834.111. ## What operating system are you using? macOS Sonoma 14.5 ## Reproduction URL [Tailwind Play]([link]) ## Describe your issue ### Expected Behavior: CSS variables defined via `@user`, `@user base`, `:root`, and global scope should inherit the value set inline via `style="--var: foo;"` ### Actual Behavior: #### Only these scenarios work: - Direct Tailwind color w or w/out use of var…

### CASE-10874 · Group modifiers not working in v4 beta when using the `tailwindcss-react-aria-components` plugin
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind, react
- **Signals**: 👍17 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ```json "tailwindcss": "4.0.0-beta.7" "@user/postcss": "4.0.0-beta.7" ``` **What build tool (or framework if it abstracts the build tool) are you using?** ```json "next": "15.1.0" "postcss": "8.4.49" "tailwindcss-react-aria-components": "1.2.0" ``` ```json "packageManager": "[email]" ``` **What version of Node.js are you using?** ``` v20.17.0 ``` **What browser…

### CASE-10888 · Variants of `@user`-provided utilities have incorrect source map locations
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.5 **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.4.31 **What version of Node.js are you using?** v20.9.0 **What browser are you using?** N/A **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Without tailwind, running postcss (+ autoprefixer) on the following…

### CASE-10899 · multi config via @user does not include preflight CSS and CSS Variable Defaults
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link] framework]/discussions/10215 <div type='discussions-op-text'> <sup>Originally posted by **Onatcer** January 2, 2023</sup> So I'm not really sure if this is a bug, missing documentation, if I just overlooked something or if this is expected behavior but I tried the multi-config feature and it did not include preflight CSS and CSS Variable Default Values like it would when I create a project normally. I was able to reproduce it in a minimal project with tailwind CLI. Thats the style.css ``` @user "../tailwind.admin.config.js" @user base; @user components; @user…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10815 · space and divide utilities not working with @user
- **Principles**: P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍22 💬5 · closed
- **Excerpt**: On 1.3.4, when trying to use something like `space-x-1` with @user I get the following error: ```css @user base; @user components; @user utilities; .form-inline { @user flex space-x-1 items-center; } ``` > `@user` cannot be used with `.space-x-1` because`.space-x-1` either cannot be found, or its actual definition includes a pseudo-selector like :hover, :active, etc. If you're sure that `.space-x-1` exists, make sure that any `@user` statements are being properly processed *before* Tailwind CSS sees your CSS, as `@user` can only be used for classes in the same CSS tree. [link] The…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-10817 · @user in 1.0b4 not working
- **Principles**: P-A2, P-A4, P-A1, P-G3, P-G1, P-G2 · **Env**: chrome, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Either I'm really tired or I simply don't know how to use the `@user` function appropriately; my code (`postcss-nested`): ``` .jumbotron { /* ... other stuff */ .body { @user text-2xl; @user mx-auto; width: 100%; @user md{ width: 60%; } } } ``` The above does not set the media query up correctly, here is the result in Chrome DevTools: ``` .jumbotron .body { font-size: 1.5rem; margin-left: auto; margin-right: auto; width: 100%; @user (min-width: 768px) {; width: 60%; }: ; } ``` Screenshot of same as well: ![Screen Shot 2019-04-01 at 8 24 33 PM]([link]) webpack.config.js `module.rules` relevant…

### CASE-10877 · [v4] @user/postcss - transpilation uses css :is selector but breaks specificity
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3 · **Env**: chrome 131, opera, macos, tailwind, vite
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.0.0-beta.2 **What build tool (or framework if it abstracts the build tool) are you using?** vite 6.0.0 **What version of Node.js are you using?** v22.8.0 **What browser are you using?** Chrome 131.0.6778.86 (Official Build) (arm64) **What operating system are you using?** macOS **Describe your issue** ``` .rte { ul.checklist, ol { --sz-i-li: calc(var(--s) * 4); --gap: calc(var(--s) * 3.5); li { padding-inline-start: calc(var(--sz-i-li) + var(--gap)); position: relative; &::before, > .icon { width: var(--sz-i-li); height: var(--sz-i-li);…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-10828 · @user/vite: Client and SSR environments produce different CSS content with Vite Environment API (TanStack Start)
- **Principles**: P-F4 · **Env**: opera, linux, vite, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.2.2 (`@user/vite` v4.2.2) **What build tool (or framework if it abstracts the build tool) are you using?** Vite 8.0.3, TanStack Start 1.167.16 (uses the Vite Environment API), Nitro 3.0.260311-beta **What version of Node.js are you using?** v22 (reproduced with both Node 22 and Bun 1.3.5) **What browser are you using?** N/A (build-time issue) **What operating system are you using?** Linux (reproduced in Docker with both `node:22` and `oven/bun:1.3`) **Reproduction URL** [link] **Describe your issue** `@user/vite` produces different CSS…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10847 · preflight.css overwrites default `margin: auto` for `[popover]` elements.
- **Principles**: P-A3, P-H1 · **Env**: opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4 **What build tool (or framework if it abstracts the build tool) are you using?** For example: NA **What version of Node.js are you using?** For example: NA **What browser are you using?** For example: NA **What operating system are you using?** For example: NA **Reproduction URL** [link] **Describe your issue** preflight.css overwrites the default `margin: auto` for `[popover]` UA styles. Maybe not a bug but doesn't seem intuitive either? Thought I'd mention it. ![Image]([link])

### CASE-10849 · Invalid CSS 'infinity * 1px' generated in full utilities [v4.0.15]
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: **Describe the bug** Tailwind CSS generates invalid CSS `calc(infinity * 1px)` for the `w-full`, `h-full`, `min-w-full`, and `min-h-full` utilities, causing a PostCSS lexical error. **Where it happened:** `packages/tailwindcss/src/utilities.ts` **To Reproduce** 1. Create a Tailwind CSS project. 2. Use the `w-full` or `h-full` utility class in your HTML. 3. Run your build process. **Expected behavior** Tailwind CSS should generate valid CSS for the full utilities. **Actual behavior** Tailwind CSS generates `calc(infinity * 1px)`, causing a PostCSS error: version = v4.0.15 <img width="673"…

### CASE-10850 · npx @user/upgrade not working with v4.0.15
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: `npx @user/upgrade` stopped working after v4.0.15 `npx @user/[email]` works fine. <img width="483" alt="Image" src="[link] />

### CASE-10853 · @user/vite fails handling image-set() notations
- **Principles**: P-A3, P-H1 · **Env**: vite, tailwind
- **Signals**: 👍0 💬4 · closed · labels: vite/upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> I'm currently using v4.0.11 as a Vite plugin with Node v22.14.0. when using image-set() CSS functional notations in a css file and processing them with the tailwind vite plugin, ```css background-image: image-set( url("@/assets/image1.avif") 1x, url("@/assets/image2.avif") 2x, ); ``` becomes ```css background-image:image-set(url(/assets/image1-xxx.avif) 1x,url(2x)) ``` I've made a little repo for…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10862 · group-hover:translate-y-6 translate-y-0
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> "@user/vite": "^4.0.2", "tailwindcss": "^4.0.2" ` <ul class="flex space-x-6 items-center"> <li class="relative group"> <button>Production</button> <div class="absolute transform text-slate-400 left-0 top-0 opacity-0 group-hover:opacity-100 invisible group-hover:mt-4 mt-0 group-hover:visible transition-all ease-in-out duration-300" > <div class="relative w-[480px] rounded-xl top-6 p-6 bg-white shadow-2xl" >…

