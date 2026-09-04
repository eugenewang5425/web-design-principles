# Case Chunk 098 — Round 98

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10701 · [v4] It seems that Oxide can't work with CSS Modules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, tailwind, vite
- **Signals**: 👍0 💬6 · closed · labels: v4
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v4.0.0-alpha.19` **What build tool (or framework if it abstracts the build tool) are you using?** vite: `v5.4.1`, @user/vite: `4.0.0-alpha.19` **What version of Node.js are you using?** `v22.6.0` **What browser are you using?** Firefox **What operating system are you using?** macOS **Reproduction URL** [link] But it seems that [the node version of…

### CASE-10703 · [v4]: variable-based classes only seem to use initial value, and not the theme values
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: chrome, firefox, tailwind, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v4.0.0-alpha.10` **What build tool (or framework if it abstracts the build tool) are you using?** `Vite (Remix)` > I dont expect the remix part of my setup is related to the issue at hand. But you never know. **What version of Node.js are you using?** `v20.11.1` **What browser are you using?** `Chrome (latest), Brave (latest), Firefox (latest)` > Latest…

### CASE-10704 · [v4] Individual side borders are broken
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, tailwind
- **Signals**: 👍0 💬6 · closed · labels: v4
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4 alpha **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind CLI **What browser are you using?** Chrome v122 **Reproduction URL** [link] **Describe your issue** Adding single side borders like this `<div class="p-8 border-t-4 border-indigo-500">Hey</div>` gives border on all sides.

### CASE-10705 · Transitioning translateY on hover with tailwind results in weird text movement vs normal css transition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, ubuntu, tailwind, nuxt
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** "@user/tailwindcss": "6.10.1", **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt 3.8.2 **What version of Node.js are you using?** v20.10.0 **What browser are you using?** Chrome (latest) **What operating system are you using?** Ubuntu 22.04.3 LTS **Reproduction URL** [link] **Describe your issue** For some reason when I use tailwind classes to transition an element's transform on hover to `translateY(-2px);` the text inside the element is moving while the transition is happening, resulting into a weird…

### CASE-10706 · Extending screens config breaks arbitrary values
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, windows, linux, tailwind, vite
- **Signals**: 👍6 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.5 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 4 **What version of Node.js are you using?** v18.0.0 **What browser are you using?** Chrome, Safari, or N/A **What operating system are you using?** Windows / Linux **Reproduction URL** [link] **Describe your issue** When extending screens in tailwind configuration…

### CASE-10707 · `var()` is incorrectly wrapped around dashed idents with CSS scroll animations
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 13.4.16 **What version of Node.js are you using?** v20.6.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I've been exploring using Tailwind with CSS scroll…

### CASE-10708 · "Uncaught ReferenceError: process is not defined" when importing "tailwindcss/resolveConfig" with Webpack 5 (v3.3.0)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.0 **What build tool (or framework if it abstracts the build tool) are you using?** Webpack 5.77.0 **What version of Node.js are you using?** For example: v14.18.1 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS (intel= **Describe your issue** After upgrading to tailwind v3.3.0 from v3.2.7 we…

### CASE-10709 · Issue with border color not overriding
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, tailwind, nuxt
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.2.6 **What build tool (or framework if it abstracts the build tool) are you using?** nuxt 3.2 **What version of Node.js are you using?** 18.14 **What browser are you using?** chrome **What operating system are you using?** fedora 37 **Reproduction URL** [link] **Describe your issue** Hello, Something in either 3.2.5 or 3.2.6 has messed up class cascading for…

### CASE-10710 · CSS injection order changed between 3.1.8 and 3.2.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.1.8 and v3.2.0 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 10.1.0 **What version of Node.js are you using?** v14.19.3 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** v3.1.8 [link] v3.2.0 [link] How to run: 1. Fork the sandboxes 2. Create a new terminal…

### CASE-10711 · bg-[url('')] doesn't work with external urls with PHP
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome, firefox, safari, opera, macos, tailwind, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hey guys, as the title says, I have a problem with bg-[url('')]. If you connect this variable with PHP to display an external image from the database, bg-[url('')] is not executed at all, but it works if you take PHP out again and leave it hardcoded which is not the point. **Tailwind version:** 3.1.8 **Framework:** Laravel 9 w/ Vite **Node.js version** 16.15.0 **Tested on browsers:** Chrome, Firefox & Safari **Operating System:** macOS **Examples:** _Hardcoded works_ ``` <div class="bg-[url('[link])] w-full h-full"></div> ``` _Included PHP doesn't work_ ``` @user ($image = '[link]) <div…

### CASE-10712 · Tailwind doesnt allow forcing !important with selector in place
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 101, chromium 103, opera, tailwind, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.1.6 **What build tool (or framework if it abstracts the build tool) are you using?** vite 3.0.3 **What version of Node.js are you using?** 16.14.10 **What browser are you using?** Firefox 101/Chromium 103 **What operating system are you using?** Fedora 36 **Reproduction URL** [link] **Describe your issue** Tailwind allows 2 modes for important application:…

### CASE-10713 · Extra table cell border in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 15, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.1.6 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 12.2.2, postcss 8.4.14, autoprefixer 10.4.7 **What version of Node.js are you using?** 16.15.0 **What browser are you using?** Safari 15.5 **What operating system are you using?** macOS **Reproduction URL** [link] [link] [link] **Describe your issue** I'm using…

### CASE-10714 · The color-adjust shorthand is currently deprecated
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind, nuxt, vite
- **Signals**: 👍12 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.24 **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt3 with Vite **What version of Node.js are you using?** 18.0.0 **What browser are you using?** Chrome **What operating system are you using?** Linux **Reproduction URL** It is not a problem with TailwindCSS but with a property that is deprecated. **Describe your issue**…

### CASE-10715 · Ring shadow artifacts when using ring-offset and rounded-full
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.15 **What build tool (or framework if it abstracts the build tool) are you using?** webpack 5.65.0 **What version of Node.js are you using?** v17.3.1 **What browser are you using?** Firefox v96.0.1, Chrome v97.0.4692.71 **What operating system are you using?** Windows **Reproduction URL** [Tailwind Playground to reproduce issue]([link]) **Describe your…

### CASE-10716 · tailwindcss v3.0.2 not working in CRA with typescript template
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, typescript, react
- **Signals**: 👍5 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** autoprefixer: "^10.4.0", postcss: "^8.4.5", react: "^17.0.2", react-dom: "^17.0.2", react-scripts: "5.0.0", typescript: "^4.5.4" **What version of Node.js are you using?** v14.16.0 **What browser are you using?** Chrome **What operating system are you using?** Windows 10…

### CASE-10717 · leading-loose unable to override line-height from xl:text-6xl due css definition order
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: chrome, firefox, opera, macos, windows, tailwind, next.js
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** * [email] * [email] * nextjs or postcss-cli or [email] **What version of Node.js are you using?** * Node v14.16.1 **What browser are you using?** Chrome, Firefox **What operating system are you using?** macOS and Windows **Reproduction URL** [link] **Describe your issue** In a brand new Next.js project(or also legacy using v3 and gulp with postcss), `leading-loose` css classes are generated before screen size variants(`md`, `xl`, etc) so because [what matters…

### CASE-10718 · Utility classes can't be built with @user and custom props
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍4 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** PostCSS **What version of Node.js are you using?** v14.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** I've made utility classes that have both Tailwind tokens and custom css.…

### CASE-10719 · v2.2.5 not generating global variables
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.5 ### What build tool (or framework if it abstracts the build tool) are you using? nextjs v11 ### What version of Node.js are you using? 14 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue After upgrading to the latest patch version, it seems like there is now a bug with the transform property. the CSS being generated: ```css position: absolute; top: 0px; right: 0px; --tw-translate-x: -0.875rem; transform: var(--tw-transform); --tw-translate-y:…

### CASE-10720 · `transform` universal selector causes unwanted wiggliness while transitioning
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome 91, opera, macos, windows, tailwind, next.js, vite
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 11.0.1 & Vite(Storybook Core) 2.4.2 ### What version of Node.js are you using? v14.16.1 ### What browser are you using? Chrome 91.0.4472.114 ### What operating system are you using? Both macOS & Windows ### Reproduction repository [link] ### Describe your issue As demonstrated in the videos below, we are seeing the wiggliness in out button intermittently when adding `translate-y-0 hover:-translate-y-px active:translate-y-0`. But the same doesn't…

### CASE-10721 · Storybook 2.2.4 breaks when JIT mode and Watch mode are both enabled.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, react
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? create-react-app 4.0.3 ### What version of Node.js are you using? v14.15.4 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue ## Summary If you have Storybook configured with TailwindCSS where JIT mode and also watch mode are enabled, then it will not compile `@user` directives found in CSS. Here is a sample CSS file: ```css @user base; @user components; @user…

### CASE-10722 · [Bug]: className does not work （next.js）
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, opera, macos, next.js, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 10.2.0 ### What version of Node.js are you using? v12.22.1 ### What browser are you using? Chrome, Safari ### What operating system are you using? macOS ### Reproduction repository className does not work （next.js） ### Describe your issue className fails to work in my project. I tried `rm -rf ./next/cache`, but it is still not solved. Please help me solve it ![image]([link]) Please look at the `tailwind.config.js` ```javascript const colors =…

### CASE-10723 · [Bug]: Extended screens always override default screens
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 89, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? newest ### What build tool (or framework if it abstracts the build tool) are you using? webpack, newest ### What version of Node.js are you using? 14 ### What browser are you using? Chrome 89.0.4389.128, 64-bit ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue Normally, classes with higher resolution width take precedense over lower ones. So if I have `sm:w-full md:w-6/12`, and I am on `md` resolution, the `w-6/12` will take precedense. This isn't resolved by CSS specificity or anything,…

### CASE-10724 · [Bug]: Adding new utilites with Vue3 + Vite
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vue, vite, tailwind, typescript
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Vue.JS 3.0.11 ### What version of Node.js are you using? 14 ### What browser are you using? Chrome ### What operating system are you using? MacOS ### Reproduction repository [link] ### Describe your issue Hi, Adding some new utilities classes not working with Vue 3 + Vite (+ Typescript) Reproduction link: [codesandbox]([link]) Like the [documentation]([link]) say, in my `tailwind.css` : ```css @user base; @user components; @user utilities; @user utilities {…

### CASE-10726 · JIT x CSS Modules x `@user` directive results in no CSS module class emitted
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.1 ### What version of Node.js are you using? v12.14.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository repro steps below # The Bug HTML elements aren't being assigned classnames when the Tailwind JIT engine is used with CSS modules and `@user components`. This happens in both dev and prod I think most people can remove `@user` but I'm reporting this anyway because this seems like a regression # Reproduction 1. `yarn create next-app --example with-tailwindcss`, then `cd` into…

### CASE-10735 · [Bug] `focus:shadow-outline` on button not working in Firefox or Safari
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, safari, chromium
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hi ! I've been testing your great library and I don't know if you noticed but the `focus:shadow-outline` class doesn't work in Firefox and Safari but does work in Chromium. The weird thing is that both `shadow-outline` and `hover:shadow-outline` work everywhere. I also tried [buttons]([link]) of your documentation directly and they don't work either, so it's not a problem on my side.

### CASE-10737 · [Bug] Appearence-none has browser inconsistencies
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: firefox, chrome
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Using `appearence-none` on forms is hit and miss depending on browsers. Firefox has a red border on `required` fields if they remain empty: ![image]([link]) And chrome likes to throw a blue focus on the input field: ![image]([link]) I've made a CodePen here where you can see the issues by loading different browsers. [link] Suprising IE works fine for once in my life 🤷‍♂️

### CASE-10739 · @user doesn't comprehend the idea of custom mixins
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox/, chromium, opera, linux, tailwind, vite
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss and @user/vite 4.1.17 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 7.2.7 **What version of Node.js are you using?** v24.10.0 **What browser are you using?** Firefox/Chromium **What operating system are you using?** Linux **Reproduction URL** [link] **Describe your issue** `@user` is from the [functions and…

### CASE-10742 · [v4] Vite + Tailwind CSS classes not applying when project is outside a Git repository
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, vite, tailwind
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.13 **What build tool (or framework if it abstracts the build tool) are you using?** Vite v7.1.2 **What version of Node.js are you using?** v22.15.0 **What browser are you using?** Chrome **What operating system are you using?** maxOS **Reproduction URL** [link] **Describe your issue** Issue Description Tailwind CSS classes are not being…

### CASE-10745 · Tailwind CSS v3 custom @user classes don't trigger hot reload in Next.js v15.4
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, tailwind, next.js
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction/v3
- **Excerpt**: <!-- Provide requested details --> **What version of Tailwind CSS are you using?** v3.4.17 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js v15.4 (app directory, turbo dev server) **What version of Node.js are you using?** v20.10.0 **What browser are you using?** Chrome (v124), though the issue is independent of browser. **What operating system are you using?** Ubuntu 22.04 **Reproduction URL** I reproduced this with a minimal Next.js app. The steps to reproduce are below. **Describe your issue** When developing a Next.js 15.4 application that uses…

### CASE-10746 · @user/vite plugin not processing pseudo classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, vite, tailwind
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss: "4.1.10", "@user/tailwindcss": "^7.0.0-beta.0", `"@user/vite": "^4.1.4" **What build tool (or framework if it abstracts the build tool) are you using?** `"@user/postcss": "^4.1.11" **What version of Node.js are you using?** v23.7.0 **What browser are you using?** Chrome **What operating system are you using?** Red Hat Linux 9 (RHEL9) **Reproduction…

### CASE-10747 · Ring in combination with radius and offsets renders wrong in Safari
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 18, opera, chrome, macos, tailwind
- **Signals**: 👍0 💬6 · closed · labels: browser bug/upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.6 **What browser are you using?** Safari 18.4 (20621.1.15.11.10) **What operating system are you using?** macOS 15.4.1 (24E263) **Reproduction URL** [link] **Describe your issue** In Safari (Chrome and FF rendered correctly) when using the `ring` utility with `ring-offset` on an element with rounded corners, the rounded corners of the…

### CASE-10748 · [4.1.4]If I only use the text-xl in class name, seem the --tw-leading will be not defined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, opera, macos, tailwind, react, webpack
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.4 **What build tool (or framework if it abstracts the build tool) are you using?** ReactV18 webpackV5 **What version of Node.js are you using?** v20.0.0 **What browser are you using?** Chrome, Safari **What operating system are you using?** macOS **Describe your issue** ![Image]([link])

### CASE-10749 · Error: Can't resolve '~rc-collapse/assets/index.css' in '.../node_modules/
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** webpack: 5.94.0 **What version of Node.js are you using?** v20.0.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** Describe the problem you're seeing, any important steps to reproduce and what behavior you expect…

### CASE-10750 · Webpack hot reloading loop with Gatsby + Tailwind v4 (after migration)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, webpack, tailwind
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Tailwind 4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** "gatsby": "^5.14.1", "gatsby-plugin-postcss": "^6.13.1" **What version of Node.js are you using?** v20.13.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** After upgrading to Tailwind v4, I've found issues…

### CASE-10752 · [v4.0.17] Infinite rebuild loop with `vite build --watch`, fixed in v4.0.6
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind
- **Signals**: 👍0 💬5 · open · labels: vite
- **Excerpt**: ### What version of Tailwind CSS are you using? v4.0.17 (bug appears) v4.0.6 (works correctly) ### What build tool (or framework if it abstracts the build tool) are you using? Vite 6.2.3 ### What version of Node.js are you using? v23.10.0 ### What version of npm are you using? 10.9.2 ### What browser are you using? Chrome ### What operating system are you using? macOS --- ### Describe the bug After upgrading to Tailwind CSS v4.0.17, running the following command causes an infinite rebuild loop: ```bash vite build --watch ``` Reproduction steps 1. Install [email] and @user/[email] 2. Run vite…

### CASE-10754 · Theme loading and CSS referencing in multiple clients css files in v4 is not working
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, firefox, opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Theme loading and CSS referencing in multiple clients css files in v4 is not working **What version of Tailwind CSS are you using?** v4.0.14 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.2 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Zen Browser, Chrome, Firefox **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** We have updated our app from v3 to v4. Our app has multiple clients configurations, meaning: each client has its own config file. Using the dev server and…

### CASE-10755 · Custom utilities sorted incorrectly
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.10 **What build tool (or framework if it abstracts the build tool) are you using?** Tested on: Next.js 15.1.7 PostCSS 8.5.2 **What version of Node.js are you using?** v23.8.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** In the upgrade guide it is mentioned that custom utilities are sorted based on the number of properties they define. See [this section]([link]). Now as shown in the reproduction URL, this does not seem to function properly. The…

### CASE-10757 · Nested CSS output by Tailwind during dev mode doesn't work in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, tailwind
- **Signals**: 👍0 💬5 · open
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.0.6 **What browser are you using?** This bug appears on Chrome but not in Firefox. | Firefox | Chrome | |-|-| | <img width="1190" alt="Image" src="[link] /> | <img width="1264" alt="Image" src="[link] /> | | No bug, works as expected. | Buggy, colors are incorrect. | **Reproduction URL** [link] **Describe your issue** Nested CSS output by…

### CASE-10758 · Upgrade tool blur event renaming problem
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, tailwind, vite, vue
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.3 **What build tool (or framework if it abstracts the build tool) are you using?** vite 6 **What version of Node.js are you using?** 22.13.1 **What browser are you using?** Edge **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** If you have a .vue file that assigns a blur event, running the upgrade tool…

### CASE-10759 · base layer messing with custom elements
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ^4.0.3 **What build tool (or framework if it abstracts the build tool) are you using?** just `tailwindcss` and native html features. **What version of Node.js are you using?** v23.4.0 **What browser are you using?** Chrome **What operating system are you using?** Fedora 41 **Describe your issue** I've talked about that before in this [issue]([link]…

### CASE-10761 · [v4] Background gradient does not display (generated css has syntax error)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, tailwind
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 11.0.0, postcss 8.5.1 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Chrome & Safari (same issue) **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When using background…

### CASE-10763 · Tailwind v4: Applied styles on a base element are overtaking classes defined in an HTML file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** Here's the bug with v4: [link] Notice how the link color is sky instead of gray. Now change the version to v3.4 and the link will become gray. **Describe your issue** With v3 you could apply a color to a specific element and then choose to override that color as needed. This is a really useful pattern where you can set a default color or style for something (such as links) and 80%…

### CASE-10764 · Can't unset font-weights in v4
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** vite v6.0.3 **What version of Node.js are you using?** v20.13.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** I just started to use tailwind (jumped straight to v4) and I'm building my existing design system…

### CASE-10765 · [V4] :merge selector broken
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍4 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.9 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.1.4 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** At a high level: 1. The following issue is triggered when…

### CASE-10766 · [V4] Windows + Nuxt + Postcss: Pre-transform error: [postcss] Cannot read properties of undefined (reading 'call')
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: edge, opera, windows, nuxt, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.2 **What build tool (or framework if it abstracts the build tool) are you using?** - Pnpm - Nuxt 3.14.159 - Postcss (already pre-installed with Nuxt) - "@user/postcss": ^0.0.0-development.1 **What version of Node.js are you using?** 20.16.0 **What browser are you using?** Edge **What operating system are you using?** Windows 11 **Reproduction URL**…

### CASE-10769 · Double backslash in js to escape class name with underscore will result in tailwindcss not being generated correctly
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.4.9 **What build tool (or framework if it abstracts the build tool) are you using?** I use `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` **What version of Node.js are you using?** v20.11.1 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **Reproduction URL** [link] **Describe your issue** When I…

### CASE-10773 · Shadow does not apply when size is instantiated on hover
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v3.4.3 ### What browser are you using? Chrome v123.0.6312.87 (Official Build) (arm64) ### What operating system are you using? macOS Sonoma v14.4 ### Reproduction URL [link] ### Describe your issue Changing the size of a shadow does not reveal the shadow if its size is instantiated on hover. My workaround was to show the shadow by default without a variant and hide it when it's not being hovered using a `:not` pseudo selector. This bug appears to be easily reproducible. I demonstrate the issue on this Loom as well: [link]

### CASE-10774 · [V4] Box Shadow Color doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: 4.0.0-alpha.11 **What build tool (or framework if it abstracts the build tool) are you using?** nextjs@user **What version of Node.js are you using?** For example: v21.7.1 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS **Reproduction URL** [link] **Describe your issue** `<div className="h-20 w-20 shadow-xl shadow-red-500" />` - color isn't applied it tends to be `rgba(0,0,0, 0.1)`

### CASE-10775 · [V4] Module dection not working in solid start
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed · labels: v4/vite
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0-alpha.7 **What build tool (or framework if it abstracts the build tool) are you using?** [email], [email] **What version of Node.js are you using?** v20.11.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [Stackblitz Repro]([link]) Sadly not startable in a webcontainer as it can't load native addons but this is the minimal repro. **Describe your issue** As the new vite plugin analyzes the module graph it can't detect solid starts routes. Because solid supplies a FileRoutes…

### CASE-10776 · dark selector does not work correctly in @user starting from version 3.3.0
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, next.js, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?**: v3.3.0 **What build tool (or framework if it abstracts the build tool) are you using?**: postcss-cli 8.4.32, Next.js 13.4.19, webpack **What version of Node.js are you using?**: v20 **What browser are you using?**: Chrome **What operating system are you using?**: Windows **Reproduction URL**: [link] **Describe your issue** In the repro you can see that in the…

### CASE-10777 · text- arbitrary value assumes color when enough info present to suggest font size
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.4.1 **What build tool (or framework if it abstracts the build tool) are you using?** Vite **What version of Node.js are you using?** 18.17 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Using arbitrary value syntax to reference css custom properties. Of course tailwind…

### CASE-10779 · JavaScript heap out of memory issue on large monorepos codebase
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, react, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.4.31, react 17.0.2, vite 4.4.9 **What version of Node.js are you using?** v16.14.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Sorry large scale internal project, hard to replicate with an example…

### CASE-10780 · Tailwind 3.3+ dark mode does not work with encapsulated angular components using @user
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, firefox, opera, windows, macos, tailwind, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.3.5 **What build tool (or framework if it abstracts the build tool) are you using?** tried angular 13 and angular 16 **What version of Node.js are you using?** v18.10.0 **What browser are you using?** Chrome, Firefox **What operating system are you using?** Windows, macOS **Reproduction URL** [link] **Describe your issue** When using @user with dark mode set to class and angular viewEncapsulation is not disabled, the `dark:` rules are also scoped. Using this simple css: ```scss :host{ @user text-amber-900 dark:text-amber-500; } ``` This is…

### CASE-10782 · after update from 3.2.7 to 3.3.0 pseudo elements `after` and `before` doesn't get `dark: ...` anymore
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 111, opera, tailwind
- **Signals**: 👍6 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.3.0 **What build tool (or framework if it abstracts the build tool) are you using?** astro v2.1.8 **What version of Node.js are you using?** 19.8.1 **What browser are you using?** Chrome 111 **What operating system are you using?** Zorin OS 16.2 **Describe your issue** after update every `after` and `before` pseudo element doesn't get any `dark` modifier…

### CASE-10783 · New color syntax with alpha
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** N/A **What version of Node.js are you using?** N/A **What browser are you using?** Firefox **What operating system are you using?** Linux **Reproduction URL** [link] **Note:** Tailwind Play does not recognize the `bg-{color}-{number}/{alpha}` syntax. **Describe your issue**…

### CASE-10784 · Dynamic nested groups names webpack error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, webpack, tailwind, next.js
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** I'm using the latest v3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** I'm using Next.js (v13.1.1) with Webpack (v5.74.0) **What version of Node.js are you using?** v18.12.1 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [CodeSandbox bug repoduction]([link]) **Describe your issue** I tried to assign names to groups by props dynamically on runtime but it failed to compile with this message:…

### CASE-10785 · Error: Expected a backslash preceding the semicolon.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 103, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v2.0.4 **What build tool (or framework if it abstracts the build tool) are you using?** "autoprefixer": "^10.4.8", "tailwindcss": "^3.1.8" "laravel-vite-plugin": "^0.5.0", "lodash": "^4.17.19", "postcss": "^8.4.16", "vite": "^3.0.0" **What version of Node.js are you using?** v16.14.2 **What browser are you using?** Firefox 103.0.2 (64-bits) **What…

### CASE-10786 · tailwindcss does not support css file in monorepo packages
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** latest v3.1.4. **What build tool (or framework if it abstracts the build tool) are you using?** webpack 5.73.0 **What version of Node.js are you using?** v16.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** The css file is in a scoped package and is not transformed correctly. I created some css files in scoped packages and configured my `tailwind.config.js` follow issue [content - supports scoped packages path? [ref]]([link] framework][ref]) : ```js //…

### CASE-10787 · Cannot add component named according to the BEM methodology.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** "tailwindcss": "3.1.2", **What build tool (or framework if it abstracts the build tool) are you using?** vite": "2.9.12" **What version of Node.js are you using?** v18.0.0 **What browser are you using?** Safari **What operating system are you using?** macOS **Reproduction URL** If really need, i can add. **Describe your issue** I can not add component named…

### CASE-10788 · JIT stop working after change styling class a few times
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, angular
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.24 **What build tool (or framework if it abstracts the build tool) are you using?** Angular 12.2.0 **What version of Node.js are you using?** v14.17.5 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** The JIT stop working after change the class a few times, even with…

### CASE-10789 · Compound background-image JIT not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, firefox, linux, ubuntu, tailwind, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** [email] ``` Operating System: Platform: linux Arch: x64 Version: [ref]-Ubuntu SMP Thu Mar 24 15:35:05 UTC 2022 Binaries: Node: 14.18.1 npm: 8.6.0 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.1.5 react: 18.0.0 react-dom: 18.0.0 ``` **What browser are you using?** Firefox Doing compound bg-[] for background images is not working. e.g. ``` bg-[url('/media/left-side-bar.png'),linear-gradient(to_right,_#e2d9d4,_#f3eeeb)] ``` Either of those work by themselves works, but when it is joined it is not working. When I hover over it the CSS class it…

### CASE-10790 · `postcss-import` module breaks `content` & `safelist` when using TailwindCLI
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Tested from 3.0.0 to 3.0.24 **What build tool (or framework if it abstracts the build tool) are you using?** TailwindCSS CLI from 3.0.0 to 3.0.24 **What version of Node.js are you using?** v12.13.0 **What browser are you using?** Chrome **What operating system are you using?** Linux _(server & compilation side)_ **Reproduction repository:** - [link] **Assets…

### CASE-10791 · @user rule cannot pick up grouped utility css selector
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** **2.2.19** **What build tool (or framework if it abstracts the build tool) are you using?** **postcss-cli 8.3.1** **What version of Node.js are you using?** **v16.13.2** **What browser are you using?** **Chrome** **What operating system are you using?** **MacOS** **Reproduction URL** [link] **Describe your issue** I am using a grouped css selector in my utility…

### CASE-10792 · Default ringColor has opacity baked into it
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, opera, macos, tailwind, webpack
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.4.6, webpack 5.65.0 **What version of Node.js are you using?** For example: v17.5.0 **What browser are you using?** Edge (Chromium) **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When trying to set the default…

### CASE-10793 · JIT is not working with tailwind 3.08 and postcss 8.4.5
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** "tailwindcss": "^3.0.8" "postcss": "^8.4.5" **What build tool (or framework if it abstracts the build tool) are you using?** "next": "10.1.3" **What version of Node.js are you using?** v16.13.1 **What browser are you using?** Chrome **What operating system are you using?** Linux Mint Hey folks, There weren't any issue while I was starting my nextjs app with the command below in terms of JIT mode; `"dev": "TAILWIND_MODE=watch next dev"` After updating postcss to the latest with the tailwind together. Postcss is starting displaying warning message…

### CASE-10795 · `TAILWIND_MODE=watch` doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite, vue
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.7 **What build tool (or framework if it abstracts the build tool) are you using?** vite 2.7.6, vue 2.6.14, vite-plugin-vue2 1.9.0 **What version of Node.js are you using?** 16.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** There is an issue opened by @user in…

### CASE-10797 · "blur-x" and "backdrop-blur-x" does not work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, opera, tailwind, nuxt
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information, it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ^3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt.js ^2.15.7 @user/postcss8 ^1.1.3 postcss ^8.4.5 **What version of Node.js are you using?** node: '14.17.1', **What browser are you using?** I've checked it in chrome, and safari Images are attached chrome ![chrome]([link]) safari ![safari]([link]) **What operating…

### CASE-10799 · TW 3 - DEFAULT on text and background colors
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.0-alpha.2 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind play **What version of Node.js are you using?** Tailwind play **What browser are you using?** Chrome, Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Setting `DEFAULT` on text/background colors seems…

### CASE-10800 · PurgeCSS skippedContentGlobs not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.15 ### What build tool (or framework if it abstracts the build tool) are you using? tailwindcss ### What version of Node.js are you using? v14.17.2 ### What browser are you using? Firefox ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue I have this situation where i need to exclude some folders from the build process. Earlier it would be possible with eg. !(node_modules) but it looks like that node-glob which PurgeCSS relies on, have removed this features. Instead in PurgeCSS as of…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10702 · Compiler Memory Leak when (repeatedly) copying files on Win x64
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: opera, windows, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.4.3 **What build tool (or framework if it abstracts the build tool) are you using?** `npx tailwindcss -i` directly via `npm run tailwind` **What version of Node.js are you using?** v20.14.0 x64 **What browser are you using?** N/A **What operating system are you using?** Windows 11 x64 (Fresh Development Image) **Issue Description** During development the Tailwind compiler was crashing about every 15min for a specific Visual studio project. The reproduction is based on some of the files from that development project (only CSHTML files). When…

### CASE-10740 · `@user` does not scan node_modules
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, tailwind, vite, nuxt
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.13 **What build tool (or framework if it abstracts the build tool) are you using?** Vite (nuxt 4.1.2) **What version of Node.js are you using?** v22.19.0 **What browser are you using?** Brave **What operating system are you using?** Windows **Reproduction URL** Not available. Working locally. Package structure <img width="604" height="657" alt="Image"…

### CASE-10771 · Invalid CSS generated for class like `[&>&]:before:XXX`
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.4.4 **Reproduction URL** [link] <img width="758" alt="image" src="[link] framework]/assets/534911/877158b3-e651-4ac7-91b2-b5d2ff2ffd47"> **Describe your issue** When using a class like `[&>&]:before:content-['']` the generated CSS output contain invalid class with `::before::before` instead of only one `::before`: ```diff…

### CASE-10781 · [Bug]: Example of Sticky Positioning Element Not Working in Tailwind Docs
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ## Description: I noticed an issue with the example of the sticky positioning element in the Tailwind CSS documentation. The example provided is not functioning as expected. To demonstrate the problem, I have attached a video showcasing the issue. ## Environment: Browser: Brave Browser (version: [Please specify version]) Tailwind CSS version: v3.3.2 ## Steps to Reproduce: 1. Go to the documentation page containing the example for sticky positioning. 2. Observe that the sticky positioning element does not behave correctly. ## Expected Behavior: The sticky positioning element should stick to…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-10725 · [Bug]: Responsive wariant of break-word
- **Principles**: P-A2, P-A4, P-A1, P-G3, P-G1, P-G2 · **Env**: chrome, opera, macos, tailwind, nuxt, mobile
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Nuxt ### What version of Node.js are you using? v16.0.0 ### What browser are you using? Chrome v90.0.4430.93 (Official version) (x86_64) ### What operating system are you using? macOS ### Reproduction repository Propably no need / will be added in future ### Describe your issue Hello, Found that this proper version: ```css break-word: break-all ``` In mobile show us this one that isn't overriding property: ```css @user (min-width: 320px) .xs\:break-words {…

### CASE-10762 · [v4] variants are not working on layer defined components and utilities
- **Principles**: P-A2, P-A4, P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **Reproduction URL** v3.4.15 - [link] v4.0.0 - [link] Following style should be applied, works for v3 not for v4 ```css @user (min-width: 768px) { .x-button:is(.md\:square) { --x-button-padding-block: 0; --x-button-padding-inline: 0; --x-button-inline-size: var(--x-button-block-size); } } ``` **Describe your issue** Previously on v3 components and…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10727 · Font Variants doesn't work with @user
- **Principles**: P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: ### Describe the problem: [Font Variant Numeric]([link]) utility-classes doesn't work with `@user`. More information inside the example ### Link to a minimal reproduction: [link]

### CASE-10730 · hover:bg-opacity-* not working
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: ### Describe the problem: hover:bg-opacity-* not working when using custom color variable using css variable. hover:bg-opacity-* works when using default Tailwind color variable I have custom css color variable generated using tailwind.config.js ![custom-tailwind-color-variable]([link]) when I am using `bg-gray-500 hover:bg-opacity-50` it works fine. But when I am using `bg-primary hover:bg-opacity-50` , it doesn't work. Opacity have no effect. Tailwind Version: 1.5.2 ### Link to a minimal reproduction: Not any

### CASE-10731 · Inconsistent results with color values
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hi I'm having a nightmare with trying to get colour values to work with a site I'm working on I've upgraded to v1.4.2 today (having been working on 1.1.2 up till then) as I've been having issues with my implementation of PurgeCSS. I am now using the configuration built in with Tailwind (great addition btw) but it's now giving me really inconsistent results with purging classes, particularly colors. This is an example of the colors object I have in my tailwind config: ``` colors: { transparent: 'transparent', /** * Brand colours, and any variations */ brand: { dark: '#373A3E', medium:…

### CASE-10736 · React PostCSS
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: react, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: So I am trying to use tailwind css and I am noticing that the compiled css file is missing things like `bg-white`. I think I might be doing something wrong as I am not seeing colors when I add the classes. . I am using postcss. // postcss.config.js ``` const tailwindcss = require ('tailwindcss'); module.exports = { plugins: [tailwindcss ('./src/utils/tailwind.js'), require ('autoprefixer')], }; ``` // tailwind.js ``` module.exports = { theme: { colors: {}, extend: {}, }, variants: {}, plugins: [], }; ``` // tailwind.css ``` @user preflight; @user components; @user utilities; ``` //…

### CASE-10743 · basis-X uses spacing instead of container variables
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I define custom container vars in my theme with tshirt sizing, as well as for spacing. setting `basis-md` picks up on the spacing md variable, not the container one. but spacing is not meant for dimensions, container is - as per the docs. so this seems like a bug.

### CASE-10756 · [v4] Slim template regression - 2xl variant classes not extracted
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, linux, tailwind
- **Signals**: 👍1 💬5 · closed · labels: oxide
- **Excerpt**: There is a regression in v4 in Slim templates - the 2xl variant classes are not extracted from source files. **What version of Tailwind CSS are you using?** 4.0.8 **What build tool (or framework if it abstracts the build tool) are you using?** tailwindcss CLI **What version of Node.js are you using?** n/a **What browser are you using?** n/a **What operating system are you using?** Linux **Reproduction URL** [link] **Describe your issue** There is a regression similar to [ref] but present in Tailwind v4 (4.0.8). The `2xl:` variant classes are not extracted from sources by the Tailwind CLI.…

### CASE-10760 · [v4] Tailwind bundles unused css variables, bloating up the css
- **Principles**: P-E1, P-E2, P-E4 · **Env**: chromium, opera, macos, tailwind
- **Signals**: 👍41 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** Playground **What version of Node.js are you using?** Playground version **What browser are you using?** Chromium **What operating system are you using?** macOS **Reproduction URL** [link] Delete the entire html file, switch between v4 and v3 and compare the size of the…

### CASE-10768 · calc() broken in v4: Invalid property value, expected type "<length> | <percentage>"
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: 4.0.0-alpha.20 **What build tool (or framework if it abstracts the build tool) are you using?** For example: Vite 5.4.2 **What version of Node.js are you using?** For example: v20.15.0 **What browser are you using?** For example: Brave **What operating system are you using?** For example: macOS **Reproduction URL** [link] **Describe your issue** The same code does work in v3. Setting the CSS variable's `syntax` property from `"<length> | <percentage>"` to `"<length-percentage>"` fixes it.

### CASE-10772 · group not working in conjunction to data selectors?
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: Version 3.4.3 Reproduction URL: [link] (Move focus with TAB and notice that the background color doesn't change. If you remove either the `group-focus` or the `data` selector it does work) Am I doing something wrong?

### CASE-10778 · Can we talk about the class sort order? [Prettier Plugin]
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍11 💬5 · closed
- **Excerpt**: ### Discussed in [link] framework]/discussions/12804 <div type='discussions-op-text'> <sup>Originally posted by **asimpletune** January 22, 2024</sup> Originally I was going to write this in [the PR]([link]) for biomejs, but then I figured it's actually a tailwind-wide question. As I understand, the [sort order]([link]) is based on the order of how class are generated in the resulting CSS. I think this is a very good start, and handles most of what one wants. However with variants I don't think that is the case, and I'd like to explain why. The best possible outcome of this discussion is I…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10728 · Overriding a single shade not working with uniformColorPalette
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hi tailwind team, When I override a single color, `50` shade from `uniformColorPalette` are remove. I'm working with lastest tailwind version 1.8.5 using the following config `tailwind.config.js` ``` const { colors } = require('tailwindcss/defaultTheme') module.exports = { theme: { extend: { colors: { blue: { ...colors.blue, '900': '#2A3142' }, yellow: { ...colors.yellow, '500': '#FCCF36' }, gray: { ...colors.gray, '300': '#D7DADD' }, }, }, }, experimental: { uniformColorPalette: true, }, } ``` In this case `blue-50`, `yellow-50` and `gray-50` are remove but not from others colors. Thanks,…

### CASE-10733 · Issue with loading border-{color} from config
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hey! First: love Tailwind, very awsome. So, I was trying to design theming, and I think I've arrived to a decent solution, I just use the nested syntax in `tailwind.config.js` and then use a `body` class to control what theme is active. Looks something like this: `tailwind.config.js` ``` module.exports = { theme: { colors: { brandColor: '#ffc045', brandColorDark: '#ff9b00', default: { main: '#7c0000', ... // Pricing tiers border colors simple: '#ffd645', }, dark: { main: '#ffc353', ... // Pricing tiers border colors simple: '#ffd645', }, }, }, } ``` `theme.scss` ``` .color-brand { @user…

### CASE-10796 · Custom color not working
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.5 **What build tool (or framework if it abstracts the build tool) are you using?** webpack 2.2.1 **What version of Node.js are you using?** 14 **What browser are you using?** N/A **What operating system are you using?** macOS **Describe your issue** After updating from v2 to 3.0.5 just one custom color (brown-light) is not working anymore. My config: ``` prefix: 'tw-', theme: { extend: { colors: { brown: { DEFAULT: '#352C24', light: '#9A8A7B' //This is not working }, pink: { DEFAULT: '#D5A0BD', light: '#F8E7F1' }, gray: { 200: '#F4F4F4',…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10729 · Custom left/top not working
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I am using some custom left/top values in taliwind for `left:1` and `top:1`, but for some reason, they just aren't working. ``` module.exports = { purge: [], theme: { extend: { left: { "1": "15px" }, top: { "1": "15px" } } }, variants: { width: ["responsive"], left: ["responsive"], top: ["responsive"] }, plugins: [ require("postcss-preset-env")({ stage: 0 }), require("tailwindcss")("tailwind.config.js"), require("autoprefixer") ] }; ``` Thats how I use them: ``` <span className={ "top-1 left-0 md:left-1 " }> ``` Neither responsive prefixes work. Package.json: ``` "dependencies": {…

### CASE-10734 · Error when adding 'first' or 'last' variant
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Updated from 0.6.1 to the latest version. Everything works fine, but when I try to add 'first' or 'last' class [as stated in the docs]([link]): variants: { margin: ['responsive','first'] } It gives me an error `TypeError: variantGenerators[variant] is not a function` Any clues of what can be going wrong? Thanks in advance!

### CASE-10738 · Dynamic responsive variants (max-*/min-*) do not honor custom breakpoints defined in @user static, while unprefixed variants do
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, macos, linux, tailwind, nuxt, vite
- **Signals**: 👍2 💬5 · closed · labels: needs reproduction
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.x (verified on at least 4.0.6) **What build tool (or framework if it abstracts the build tool) are you using?** Nuxt UI (Nuxt 3+), Tailwind CLI, and also tested with Vite 6.1.0 **What version of Node.js are you using?** v20.x **What browser are you using?** Any (problem is about generated CSS) **What operating system are you using?** Tested on macOS and Linux (occurs in all environments) **Reproduction URL** [Reproduction repository]([link]) **Describe your issue** When defining custom breakpoints using `@user static` in CSS (for example:…

### CASE-10744 · [v4] In a production environment, the theme does not contain breakpoint variables
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-E1, P-E2, P-E4 · **Env**: chrome, safari, opera, macos, tailwind, next.js
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.12 **What build tool (or framework if it abstracts the build tool) are you using?** For example: Next.js 14.2.25 **What version of Node.js are you using?** For example: v22.18.0 **What browser are you using?** For example: Chrome, Safari **What operating system are you using?** For example: macOS **Describe your issue** Also, breakpoint styles…

### CASE-10751 · Tailwind CSS (@user/vite) Base Styles Incorrectly Overridden by `md:` Media Queries in Chrome/Arc, but not Firefox/Safari
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome/, firefox/, safari, chrome 134, opera, chrome, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.1 **What build tool (or framework if it abstracts the build tool) are you using?** Astro v5.5.6, @user/vite v4.1.1 **What version of Node.js are you using?** v23.10.0 **What browser are you using?** Chrome 134.0.6998.166 (Official Build) (arm64), Arc 134.0.6998.166 (Official Build) (arm64) **What operating system are you using?** macOS **Reproduction URL** [Repository]([link]) **Describe your issue** Tailwind CSS base styles (without media query prefixes) are being incorrectly overridden by `md:` media query prefixed styles in Google Chrome…

### CASE-10753 · Tailwindcss v4.0.13 - Media queries and breakpoints not working in Safari 16.4
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: safari 16, chrome, safari, opera, macos, tailwind, vite, react
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.13 **What build tool (or framework if it abstracts the build tool) are you using?** "@user/vite": "^4.0.13", "@user/plugin-react": "^4.3.4", **What version of Node.js are you using?** nvm --version = 0.35.0 npm --version = 9.5.1 **What browser are you using?** Chrome Version 133.0.6943.142 (Official Build) (arm64) Safari Version 16.4 (18615.1.26.110.1) **What operating system are you using?** MacOS - Ventura 13.3.1 (a) **Reproduction URL** Just the basic setup - I just followed the installation guide at [link] **Describe your issue**…

### CASE-10767 · [v4] `col-span-*` overrides `col-start-*`. Same with `row-*`
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.23 **What build tool (or framework if it abstracts the build tool) are you using?** `@user/cli v4.0.0-alpha.23` **What version of Node.js are you using?** v20.12.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When using `col-span-*` with breakpoint…

### CASE-10770 · Max-width screens named with numbers (e.g. 1800, 1440 instead of xl, lg) not working
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Re-opening [link] framework][ref], which asks for support for numerically named max-width breakpoints. It was initially fixed, and then reverted in [link] framework][ref]. **What version of Tailwind CSS are you using?** 3.4.4 **What build tool (or framework if it abstracts the build tool) are you using?** N/A **What version of Node.js are you using?** N/A **What browser are you using?** N/A **What operating system are you using?** N/A **Reproduction URL** [link] **Describe your issue** I personally prefer to use numbered breakpoint names (e.g. 1800, 1200 vs 2xl, xl) as it feels a lot more…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10732 · [Feature request] Add overscroll options
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D4, P-F5 · **Env**: tailwind, mobile
- **Signals**: 👍3 💬6 · closed
- **Excerpt**: On mobile UIs, you can have something called [`overscroll-behaviour`]([link]) which can help on removing 'pull to refresh' when scrolling. It is also useful for chat boxes or other contained UI elements - see [this MDN example]([link]). It would be really handy to add this to Tailwind! ### Values - `auto` - The default scroll overflow behavior occurs as normal. - `contain` - Default scroll overflow behavior is observed inside the element this value is set on (e.g. "bounce" effects or refreshes), but no scroll chaining occurs to neighbouring scrolling areas, e.g. underlying elements will not…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10741 · @user directives ignored by tailwindcss cli -i when imported via @user
- **Principles**: P-G4, P-E3 · **Env**: opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.13 **What build tool (or framework if it abstracts the build tool) are you using?** "@user/cli": "^4.1.13", **What version of Node.js are you using?** v22 **What browser are you using?** N/A **What operating system are you using?** macOS **Reproduction URL** Incredibly easy to reproduce: [link] **Describe your issue** Using `tailwindcss` to generate built files - you cannot use @user syntax to import css files using @user directives. - If an @user directive is declared in a css file @user(ed) into the input for `tailwindcss -i` - then the…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10794 · Group Hover with prefix config doesn't work
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: a have issue with prefix config and group hover ``` prefix: 'tw-' ``` parent : group children: group-hover:tw-scale-100 can't work with the prefix! ``` <div class="tw-flex tw-items-center tw-rounded tw-cursor-pointer group"> <div class="">Nam Ng</div> <div class="tw-flex tw-items-center tw-transition-all tw-duration-100 tw-scale-0 group-hover:tw-scale-100"> <div class="tw-text-xs">Edit name</div> </div> </div> ```

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10798 · Using `0` as arbitrary value doesn't work for for some properties
- **Principles**: P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v2.2.19 **Reproduction URL** [link] **Describe your issue** Trying to apply custom value as `0` for border width Tailwind JIT doesn't generate the selector. E.g. using `border-[0]` does nothing, even though `border-width: 0` is valid CSS expression. Same for font size with `text-[0]` (`font-size: 0` is valid CSS). Haven't checked other properties. This doesn't…

