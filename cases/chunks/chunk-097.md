# Case Chunk 097 — Round 97

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10601 · v4.2.1: Arbitrary value classes (e.g. aspect-[12/5]) ignored by Next.js 16.1.6 Turbopack compiler
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, next.js, tailwind
- **Signals**: 👍2 💬8 · closed · labels: needs reproduction
- **Excerpt**: ### Environment & Context **What version of Tailwind CSS are you using?** v4.2.1 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 16.1.6 (using `next dev --turbo`), @user/postcss 4.2.1 **What version of Node.js are you using?** v20.18.0 (o superior) **What browser are you using?** Chrome / Safari (Latest) **What operating system are you using?** macOS (Sequoia) **Reproduction URL** N/A (Private Repository). **Note:** Since this bug specifically triggers under the **Next.js 16 Turbopack (Rust-based) compiler**, it cannot be reproduced in a standard…

### CASE-10603 · Sources are ignored in gitignored directory even when they are explicity set using hard path
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.8 standalone **What build tool (or framework if it abstracts the build tool) are you using?** Meson where i call cli **What version of Node.js are you using?** Not applicable **What browser are you using?** Chrome, Zen (doesn't matter) **What operating system are you using?** Linux WSL Debian bookworm **Reproduction URL** [link] **Describe your issue** When…

### CASE-10604 · Tailwind v4 is not seeing classes in slim templates
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.14 **What build tool (or framework if it abstracts the build tool) are you using?** I'm using Ruby on Rails with gem `tailwindcss-rails` v4.2.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Tell me if it's really needed, because it takes time to setup such example. **Describe your issue** I'm trying to upgrade to Tailwing V4, but new Tailwind doesn't see classes in my templates. Tailwind v3 was seeing classes successfully. In my project I use [Slim Templates]([link]) with…

### CASE-10605 · [v4] Tailwind CSS misinterprets custom text-shadow plugin as text size
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, svelte
- **Signals**: 👍6 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.12 **What build tool (or framework if it abstracts the build tool) are you using?** SvelteKit 2.18.0 **What version of Node.js are you using?** v22.14.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Using a custom plugin to add text shadows causes tailwindcss to…

### CASE-10606 · [v4.0.9+] Variables are ignored when referenced within CSS Modules
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: chrome, safari, firefox, opera, macos, windows, tailwind, vite
- **Signals**: 👍5 💬8 · closed · labels: bug/oxide
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.0 **What version of Node.js are you using?** 22.0.0 **What browser are you using?** Chrome, Safari and Firefox **What operating system are you using?** macOS and Windows **Reproduction URL** [link] **Describe your issue** When referencing the main theme file within CSS Modules, variables are no longer recognised and exported in the main CSS. This works fine in 4.0.8 (see ['working' branch]([link])) so am inclined to believe it has…

### CASE-10607 · [v4] transition-property Theme CSS Variables
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: safari, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.6 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js: 15.1.3 **What version of Node.js are you using?** v20.18.1 **What browser are you using?** Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** ***Overview*** I am trying to migrate a project to v4, which has…

### CASE-10608 · [v4] shadows not working on Chrome on macOS
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, safari, edge, firefox, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** V4 This is visible on your docs website, so I am ignoring adding details about frameworks, versions, etc. [link] [link] **What browser are you using?** Chrome EDIT: (I updated to the latest chrome version after taking the screenshots and the issue persists) > Chrome is up to date > Version 132.0.6834.160 (Official Build) (x86_64) **What operating system are you using?** macOS **Reproduction URL** [link] [link] **Describe your issue** In the screenshots below, you will see the shadows appear in Safari, Edge, and Firefox but not Chrome: <img…

### CASE-10609 · Invalid css transformation on build
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: firefox, opera, ubuntu, tailwind, svelte, vite
- **Signals**: 👍1 💬8 · closed · labels: bug/upstream
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** svelte 5.19.2, tailwindcss/vite 4.0.0, vite 6.0.11 **What version of Bun js are you using?** v1.2.0 **What browser are you using?** Zen Browser (Firefox) **What operating system are you using?** Ubuntu 22.04 **Reproduction URL** [link] **Describe your issue** ![On development mode]([link]) ![On production mode ]([link]) The bug is, i have a class like this `lg:bg-[center_bottom_-15rem]` and on development mode, tailwind puts all thing as is. When build the…

### CASE-10610 · [v4] --radius-full is not available as a variable
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, opera, macos, tailwind
- **Signals**: 👍6 💬9 · closed · labels: v4
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4 beta.2 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind Play **What version of Node.js are you using?** N/A **What browser are you using?** Firefox **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** `--radius-full` does not appear to be available as a variable. As an…

### CASE-10611 · [v4] Pseudo selector scale doesn't work on Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, chrome, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0-alpha.14 **What browser are you using?** For example: Firefox **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Pseudo element scale doesn't work in Firefox browser, while it works in other browsers To reproduce, check hover effect and compare it in Chrome vs Firefox

### CASE-10612 · 3.4.2 introduced breaking change with PR [ref]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.4.2 **What build tool (or framework if it abstracts the build tool) are you using?** PostCSS 8.4.35 Vite 5.1.5 **What version of Node.js are you using?** v21.6.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Sorry I don't have reproduction as the repo is my company private repo. **Describe your…

### CASE-10613 · Tailwind looks for classes inside `:not()` in utilities and components when in at-rules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, next.js
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 13.4.13 (Tool agnostic bug) **What version of Node.js are you using?** For example: v18.16.0 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: Windows **Reproduction URL** [link] **Describe your issue** Tailwind…

### CASE-10614 · Improve default reset of button styles for high contrast mode
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, firefox, edge, opera, windows, tailwind, next.js
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.3.1 **What build tool (or framework if it abstracts the build tool) are you using?** For example: Next.js 13.3.1 **What version of Node.js are you using?** For example: v17.9.1 **What browser are you using?** Chrome, Firefox, Edge **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Buttons that…

### CASE-10615 · Using important: true leads to duplicate rules in output
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: This issue supersedes [ref] which was a bit of a false start. V3.1.18 Tailwind CLI Node v14.18.1 Chrome Window 10 (No Docker or WSL) Command line : npx tailwindcss --output twout.css --watch -i twbase.css Reproduction URL: [link] **Describe your issue** When the important option is set to true, modifications to the source file cause TW to emit duplicate rules into the output for each update. Repro steps: 1. Start the CLI, using the command line above (or tw.bat on Windows) 2. Observe that the output file `twout.css` contains just two rules (after the boilerplate): ``` .ml-2 { margin-left:…

### CASE-10616 · Missing declaration file for "tailwindcss/resolveConfig"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite, typescript
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.1.6 **What build tool (or framework if it abstracts the build tool) are you using?** Vite, Typescript **What version of Node.js are you using?** For example: v16.15.1 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **Reproduction URL** [link] **Describe your issue** When attempting to use the…

### CASE-10617 · `dark` modifier in HTML can cause circular dependency issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v.3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.4.7 **What version of Node.js are you using?** v14.18.0 **What browser are you using?** Chrome (Version 99.0.4844.83 (Official Build) (x86_64)) **What operating system are you using?** macOS Big Sur (11.6.5) **Reproduction URL** [Tailwind Play]([link])…

### CASE-10619 · Chrome console live change not working with v3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, chromium, opera, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.9 (same problem with 3.0.13) **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.4.5 **What version of Node.js are you using?** v16.3.1 **What browser are you using?** Brave Version 1.33.106 Chromium: 96.0.4664.110 (Official Build) (arm64) **What operating system are you using?** macOS 11.6 **Describe your issue** with tailwind 2.2.19 I'm able to change in the Chrome console any tailwind classes and the changes are immediately visible. With tailwind 3.0.9, changing classes in Chrome console does not…

### CASE-10620 · v3.0.10 breaks specificity when used with Vue scoped style
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vue, tailwind, nuxt
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.0.10 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.4.5, "@user/postcss8": "1.1.3", "nuxt-start": "2.15.8", **What version of Node.js are you using?** v14.16.1 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS **Describe your issue**…

### CASE-10623 · Using `@user` with any class that sets `@user` (transforms/filters/rings/border) doesn't work in CSS modules/Svelte components/Vue components
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, safari, opera, macos, svelte, vue, tailwind
- **Signals**: 👍4 💬8 · closed
- **Excerpt**: First, thank you for this awesome tool. Tailwind is amazing! **What version of Tailwind CSS are you using?** v3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** next: 12.0.7 postcss: 8.4.4 autoprefixer: 10.4.0 **What version of Node.js are you using?** v16.13.0 and v14.18.x **What browser are you using?** Chrome, Safari, Brave **What operating system are you using?** macOS **Reproduction URL** [Reproduction repo]([link]) **Describe your issue** When applying the same tailwind `border` class to an element, the border color differs depending on how the styles…

### CASE-10624 · Performance regression from version 1 to 2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 14, opera, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v2.2.15 **What build tool (or framework if it abstracts the build tool) are you using?** Doesn't matter, provided example using CDN. **What version of Node.js are you using?** N/A **What browser are you using?** Tested on Safari 14.1.2 **What operating system are you using?** macOS **Reproduction URL** [link] [link] **Describe your issue** The browser has to…

### CASE-10625 · [Bug]: Using Array.flatMap instead of lodash.flatMap caused the project to fail to start, and it ran after the replacement under Nodejs v11
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.0.4 ### What build tool (or framework if it abstracts the build tool) are you using? "postcss": "^8.2.9", ### What version of Node.js are you using? 9 ### What browser are you using? Chrome ### What operating system are you using? MacOS ### Reproduction repository [link] ### Describe your issue ![image]([link]) it is work if I use lodash.flatmap ![image]([link])

### CASE-10626 · [JIT]: FLEX CLASS NOT WORKING
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, react
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.0 ### What build tool (or framework if it abstracts the build tool) are you using? "postcss-cli": "^8.3.1" ### What version of Node.js are you using? v12.19.0 ### What browser are you using? Chrome ### What operating system are you using? macOs ### [link] ### Describe your issue I am adding "flex" class in my react app project and for some reason, it doesn't read it, I changed to JIT mode and some styles are not working as they used to.

### CASE-10628 · Backdrop Filter doesn't animate with Transition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, windows, tailwind, react
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.1 ### What version of Node.js are you using? v14.15 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] I have a Modal component using Transition from `@user/react`, full code below. As you can see from the screen capture, the modal itself works, however the background div doesn't seem to work as expected, there are a couple of issues I have noticed 1) If you apply a background color class `bg-red-900` to the div, it does not apply. If you force it with a style…

### CASE-10629 · JIT not working with Parcel V2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍9 💬8 · closed
- **Excerpt**: ### What version of @user/jit are you using? v0.1.5 ### What version of Node.js are you using? v15.11.0 ### What browser are you using? Firefox, but I don't think that matters ### What operating system are you using? Fedora 33 (Linux) ### Reproduction repository [link] [link] Here's my `postcss.config.js`: ```js // unconventional, but it's done like this due to in-house // auto-gen tooling const autoprefixer = require('autoprefixer') const tailwindcss = require('@user/jit') const plugins = [autoprefixer, tailwindcss] module.exports = { plugins } ``` It will generate any classes currently…

### CASE-10632 · [1.0] `theme()` helper doesn't work in complex properties
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: webkit
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Hi, I've noticed the `theme()` helper doesn't work inside CSS properties that aren't a simple `background` or `color` etc. If you use the helper in a statement with multiple values it just outputs nothing. ```CSS /* Source */ input::-webkit-autofill { -webkit-box-shadow: 0 0 0 30px theme('colors.gray.200') inset !important; } /* Outputs */ input::-webkit-autofill { -webkit-box-shadow: 0 0 0 30px inset !important; } ``` It's working fine for simple statements like `color: theme('colors.gray.200');` etc., so I'm working around it by using CSS variables like this for now: ```CSS…

### CASE-10633 · @user/vite Tailwind CSS HMR not working with Vite 7 + SolidStart v2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, vite, tailwind
- **Signals**: 👍5 💬7 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Current TailwindCSS: 4.2.1 Current tailwindcss/vite: 4.2.1 **What build tool (or framework if it abstracts the build tool) are you using?** Vite: 7.3.1 (or any ^7.0.0 release) Solid Start: 2.0.0-alpha.2 **What version of Node.js are you using?** For example: 25.8.1 npm: 11.11.11 **What browser are you using?** Firefox Developer Edition: 149.0b8-1 Vivaldi:…

### CASE-10634 · `@user inline` isn't generating shadow classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.17 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 5.4.3 **What version of Node.js are you using?** v20.19.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** **Describe your issue** I'm trying to use @user inline to generate some utility classes I need, like the…

### CASE-10635 · Include glob path fails when path is also gitignored
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox/142, opera, mac os x, macos, tailwind, vite
- **Signals**: 👍0 💬9 · closed · labels: v4/oxide
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v4.1.12` **What build tool (or framework if it abstracts the build tool) are you using?** Vite (`6.2.1`) **What version of Node.js are you using?** `v22.19.0` **What browser are you using?** `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:142.0) Gecko/20100101 Firefox/142.0` **What operating system are you using?** `macOS Sequoia 15.6.1` **Reproduction URL**…

### CASE-10637 · @user directive not working in Stackblitz when targeting node_modules
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍7 💬7 · open · labels: bug
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** "postcss": "8.5.3", "@user/postcss": "^4.1.11", **What version of Node.js are you using?** Node v20.19.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** A few months ago this issue was fixed that allowed to use Tailwind v4 in Stackblitz: [[ref]]([link] framework][ref]) Unfortunately, it only works for a basic/default tailwind config and comes with a limitation: I cannot…

### CASE-10638 · [v4][cli] The `--minify` and `--optimize` flags remove CSS from output
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬7 · closed · labels: upstream/lightningcss
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.7 **What build tool (or framework if it abstracts the build tool) are you using?** `@user/[email]` **What version of Node.js are you using?** v22.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction** I can't reproduce it on Play Tailwind since it does not minify. Below are the steps to…

### CASE-10639 · Circular dependency because of index.css
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, linux, tailwind, vite, react
- **Signals**: 👍0 💬19 · open · labels: vite
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.6 **What version of Node.js are you using?** v22.14.0 **What browser are you using?** Chrome **What operating system are you using?** Debian GNU/Linux 12 (bookworm) **Reproduction URL** [link] **Describe your issue** When I save my `main.jsx` in my Vite + React +…

### CASE-10641 · CSS for certain classnames not being generated anymore
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍2 💬7 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.12 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.1 **What version of Node.js are you using?** v22.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** Something has broken since v4.0.7. Tailwind is no longer parsing certain classNames in the code.…

### CASE-10642 · Tailwind CSS v4 Selector Parsing Issue with Empty String Attribute
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, next.js, webpack
- **Signals**: 👍0 💬7 · closed · labels: upstream
- **Excerpt**: ## Tailwind CSS v4 Selector Parsing Issue with Empty String Attribute ### Environment - **Tailwind CSS Version:** 4.0.7 - **Framework:** Next.js 15.1.7 - **Node.js Version:** 22.14.0 - **Browser:** Chrome - **Operating System:** Windows ### Reproduction **Repository:** [[link]]([link]) **Steps to Reproduce:** 1. Clone the repository: ```bash git clone [link] cd next.js-hook-webpack-error ``` 2. Install dependencies: ```bash pnpm install ``` 3. Attempt to build the project: ```bash pnpm build ``` #### Issue Description: When attempting to build a Next.js project with Tailwind CSS v4, an issue…

### CASE-10643 · Hover not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.3 **What build tool (or framework if it abstracts the build tool) are you using?** Next js 15 **What version of Node.js are you using?** Node 20 **What browser are you using?** Chrome **What operating system are you using?** Windows 11 **Reproduction URL** [link] **Describe your issue** I was just tryin to use tailwindcss v4 for my new project but I noticed that hover: is not working, so, tried to check docs, but on the docs page itself hover is not working. try hovering on the button in the attached link.

### CASE-10644 · bug(v4): gradients not working on CEF with chrome version: 103.0.5060.141
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.0.11 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** For example: FiveM CEF Browser, Chrome Version: 103.0.5060.141 **What operating system are you using?** For example: Windows **Reproduction URL** Try to use Tailwind CSS V4…

### CASE-10645 · [v4] fontSize configuration line-height shorthand broken in v4
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.9 **What build tool (or framework if it abstracts the build tool) are you using?** NextJS 15.1.3 **What version of Node.js are you using?** v20.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] Vite repo showing the issue. Inspect the 3 text elements to see the second one has an…

### CASE-10646 · [V4] `postcss-preset-env` and `autoprefixer` not loaded
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.8 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 8.3.1, Next.js 10.0.9, webpack 5.28.0 - postcss 8.4.49 - postcss-load-config 6.0.1 **What version of Node.js are you using?** v20.10.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your…

### CASE-10649 · peer-checked:group-[]: Selector Behavior Changed in Tailwind v4?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0-beta.2 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind Play **What version of Node.js are you using?** N/A (Tailwind Play) **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] You can switch the version to v4 in the playground to see that the same selectors no longer works. Click on "Icon" text to open menus. **Describe your issue** In Tailwind v3, `peer-checked:group-[.toggle]:rotate-180` works as expected, allowing specific target of…

### CASE-10650 · PostCSS plugin not processing changes outside base directory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, ubuntu, tailwind, vite
- **Signals**: 👍5 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.4.3 **What build tool (or framework if it abstracts the build tool) are you using?** * [email] * [email] **What version of Node.js are you using?** 20.12.1 **What browser are you using?** Chrome **What operating system are you using?** macOS, Ubuntu 20.04.6 LTS **Reproduction URL** [link] **Reproduction method** * Wait for Vite server to start and page to load * Remove `preset` from `tailwind.config.js` and save file * Page automatically updates => background switches to white * Add `preset` to `tailwind.config.js` and save file * Page…

### CASE-10651 · [V4 Alpha] - Background Linear Gradients Not Applied in Next.js Starter 14.1.3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, next.js, tailwind, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-alpha.6 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 14.1.3 For example: postcss-cli 8.3.1, Next.js 10.0.9, webpack 5.28.0 **What version of Node.js are you using?** v20.11.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue**…

### CASE-10653 · Paths containing both brackets and parenthesis are not watched
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.4.0 **What build tool (or framework if it abstracts the build tool) are you using?** Bare minimum repro **What version of Node.js are you using?** 18 **What browser are you using?** Chrome **What operating system are you using?** macOs **Reproduction URL** [link] **Describe your issue** When a path contains both brackets and parenthesis, the changes are not detected. In the example, here is the file tree: ``` src/1.html src/(test)/2.html src/[test]/3.html src/[test]/(test)/4.html ``` Each file has this content: ``` mr-(the corresponding…

### CASE-10654 · in 3.3 `@user dark: ` doesn't work anymore with vue `:deep(.child-class)`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, vue, tailwind, vite
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.1 **What build tool (or framework if it abstracts the build tool) are you using?** vite4 and vite3 (happened with both) **What version of Node.js are you using?** v19.1.0 **What browser are you using?** Chrome **What operating system are you using?** WSL2 ubuntu 22 **Reproduction URL** [link] **Describe your issue** hello, tailwincss is set in `darkMode:…

### CASE-10656 · After Following Official Docs Exactly, Tailwind with Gatsby Doesn't Work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.1.8 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss 8.4.16 **What version of Node.js are you using?** For example: v16.15.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** Ah the classic 30 minute…

### CASE-10657 · Potential Node memory leak caused by safeList > pattern RegEx
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, edge, opera, macos, tailwind, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.1.8 **What build tool (or framework if it abstracts the build tool) are you using?** vite: v3.1.0 postcss: v8.4.16 autoprefixer: v10.4.8 **What version of Node.js are you using?** v16.17.0 **What browser are you using?** Chrome or Edge (latest) **What operating system are you using?** macOS (Monterey 12.5 on MacBook Air M2 where the issue happens) **Reproduction URL** [[link]]([link]) **Describe your issue** Receiving `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory` in terminal from Node. Repro steps: - run…

### CASE-10658 · Safari ignores alpha channel in colors in `::marker`, which makes styling them with Tailwind impossible
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, safari 15, macos, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.1.2 **What build tool (or framework if it abstracts the build tool) are you using?** <details> <summary>`postcss`</summary> ```js module.exports = { plugins: { "postcss-import": {}, "tailwindcss": {}, "autoprefixer": {}, } } ``` </details> **What version of Node.js are you using?** v12.22.9 **What browser are you using?** Safari 15.5 on macOS 12.4…

### CASE-10659 · I have content declared but getting "The `content` option in your Tailwind CSS configuration is missing or empty"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/, firefox, opera, macos, tailwind, vite
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 2.2.17 **What build tool (or framework if it abstracts the build tool) are you using?** Rollup/Vite **What version of Node.js are you using?** 18-pre (16) **What browser are you using?** Chrome/Firefox **What operating system are you using?** MacOS **Describe your issue** I have a package with ``` "dependencies": { "@user/forms": "0.5.0", ... "postcss":…

### CASE-10660 · @user causes vitejs to HMR all files until maximum call stack error.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind, react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 2.8.6 **What version of Node.js are you using?** v17.5.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [brielov/react-app]([link]) **Describe your issue** When using tailwindcss + vite, if you use css modules…

### CASE-10661 · Browser support is reduced by using rgb/opacity convention, maybe should favor rgba convention for legacy and modern browsers
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: safari, opera, ios, tailwind, next.js
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.18 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 12.1.0 **What version of Node.js are you using?** v12.19.0 **What browser are you using?** Safari **What operating system are you using?** iOS **Reproduction URL** Background and font-color using rgb/opacity convention - [link] Disabling backgroundOpacity and…

### CASE-10663 · before:content-['>'] doesn't work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.7 ### What build tool (or framework if it abstracts the build tool) are you using? `"next": "11.1.0"` and web playground ### What version of Node.js are you using? v14.16.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue Hey Tailwind team! I'm having an issue about [content-utilities]([link]) in JIT mode. According to that document, we can write content value via `content-*` utilities, and it seems like all of them work well. But I found a bug…

### CASE-10664 · [Bug]: JIT: media break points do not generate for postcss7-compat
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍5 💬7 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.0 ### What build tool (or framework if it abstracts the build tool) are you using? @user/cli 4.5.12 | postcss 7 ### What version of Node.js are you using? v15.6.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue Hello, first of congrats on the new release, tons of awesome features I can't imagine shipping the features can be simple. Describe the bug When enabling the JIT mode media queries are not generated properly. Additional context I…

### CASE-10665 · [Bug]: Strange / unexpected behavior with custom component, @user, and :not()
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? package.json: npm:@user/postcss7-compat Gemfile: tailwindcss-rails v0.3.3 ### What build tool (or framework if it abstracts the build tool) are you using? webpack 4 via rails webpacker / webpack-dev-server ### What version of Node.js are you using? 14.16.1 ### What browser are you using? Firefox ### What operating system are you using? Windows 10 ### Reproduction repository [link] ### Describe your issue Hey there. I'm fairly new to developing in Tailwind so please forgive me if I'm missing something. I'm finding it difficult to search for a…

### CASE-10679 · Nested Rounded Borders Hover Breaks Wrapping Border
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, safari 11
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: I have noticed that when nesting rounded borders the outer border is "broken" by the inner border with a white background of squared shape after leaving the hover state. I noticed this is not related to the background color -- is this perhaps a browser bug? (This currently doesn't seem to work in Chrome for some reason, still debugging that -- tested in Safari 11.0.1.) ![screen shot 2017-11-12 at 6 45 20 pm]([link]) ```scss .form-control-group { @user .w-2/3 .flex .border .border-grey-light .rounded; button:not(:first-child, :last-child), input:not(:first-child, :last-child) { @user…

### CASE-10681 · @user/vite skips CSS files that only use @user (feature detection gap)
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, macos, vite, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.2.2 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 8.0.8 with `@user/vite` **What version of Node.js are you using?** v24.14.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** A CSS file that only uses `@user` (no `@user`, `theme()`, or utility classes) is silently skipped by `@user/vite`. The `@user` directive is passed through raw to the browser, which drops it as an unknown at-rule. **Reproduction** — two CSS…

### CASE-10682 · CSS Modules `composes [class] from [file]` isn't processed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 7.2.2 **What version of Node.js are you using?** v22.21.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When using Tailwind with CSS Modules and the `composes` property with the…

### CASE-10683 · print variant not working for Safari
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: safari, chrome, opera, macos, tailwind, svelte
- **Signals**: 👍1 💬6 · closed · labels: browser bug
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** Sveltekitjs/kit: 2.27.1 **What version of Node.js are you using?** node v20.19.0 **What browser are you using?** Chrome, Dia, Safari **What operating system are you using?** macOS **Reproduction URL** [[link]] Fresh install of Sveltekit, tailwind… with just one page (src/routes/+page.svelte) **Describe your issue** When using the print variant, it works screen wise (as in it wouldn't utilize the css), but not print wise. For example, - print:hidden -- On…

### CASE-10684 · Error: "Parsing css source code failed" in Tailwind V3
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, react
- **Signals**: 👍0 💬6 · closed · labels: bug/v3
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** TailwindCSS: v3.4.17 **What build tool (or framework if it abstracts the build tool) are you using?** Nextjs: 15.4.5 React: 19.1.0 **What version of Node.js are you using?** NodeJS: 22 **What browser are you using?** Browser: Chrome **What operating system are you using?** OS: macOS **Reproduction URL** [link] **Describe your issue** Hi Tailwind team, I’m…

### CASE-10685 · Dev server returns 500 "Internal server error: Unexpected semicolon" if there is an additional semicolon in a module.css file
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, next.js, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 11.0.0, Next.js 15.1.7, Vite 6.1.0 **What version of Node.js are you using?** "vite": "^7.0.0", **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** A Tailwind Play link or public GitHub repo that includes a minimal reproduction of the bug. **Please do not link to your actual project**, what we need instead is a _minimal_ reproduction in a fresh project without any unnecessary…

### CASE-10686 · [4.1.4] Getting parser error : Cannot convert undefined or null to object
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, tailwind, vite
- **Signals**: 👍5 💬6 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.1.4 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.6 **What version of Node.js are you using?** v22.14.1 **What browser are you using?** Chrome, Safari **What operating system are you using?** macOS **Reproduction URL** Not Deployed **Describe your issue** Getting below issue when running the application…

### CASE-10687 · [4.1.4] Multiple drop-shadows are still broken
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, tailwind, next.js
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.4 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js v15.3.0 **What version of Node.js are you using?** v22.14.0 **What browser are you using?** Edge **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Seems like the multiple drop-shadow are still not working after the…

### CASE-10688 · @user Not Working as Expected During Build Process
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 135, opera, tailwind, vite, svelte
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: v4.1.3 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.5 **What version of Node.js are you using?** v20.18.1 **What browser are you using?** Edge 135.0.3179.54 **What operating system are you using?** mac OS 15.4 **Reproduction URL** [link] **Describe your issue** Try running laifu-nini in preview, this will look visually correct. Edit the app.css file inside laifu-nini and edit ```css @user '../../../packages/ui/src/lib/components/ui/button/*.svelte'; ``` to ```css @user…

### CASE-10689 · Custom colors not working in CSS
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.17 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.0 **What version of Node.js are you using?** v22.13.1 **What browser are you using?** Chrome **What operating system are you using?** macOS [link] **Issue** Referencing colors as `--color-*` properties from a CSS module file does not work unless the color utility…

### CASE-10690 · Some Tailwind classes are not extracted from Pug templates in Vue when elements have attributes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, tailwind, vue, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.15 (the latest released version, at the time of writing) **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.2.2, Vue 3.5.13, Pug 3.0.3 (the latest released version of each, at the time of writing) **What version of Node.js are you using?** v22.14.0 (the latest LTS release, at the time of writing) **What browser are you using?** Firefox (though I don't think it's relevant) **What operating system are you using?** Linux (Debian / MX Linux) (though I don't think it's relevant) **Reproduction URL** I cannot…

### CASE-10691 · Safari 16.4 crash on `<input placeholder>` or `text-current` + opacity
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: safari 16, ios, tailwind
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.14 **What browser are you using?** iOS Safari 16.4 **Reproduction URL** [link] ```html <p class="text-current/50">text</p> ``` [link] ```html <input placeholder="text" /> ``` **Describe your issue** Both of the examples above crash the webpage in Safari 16.4: <img width="948" alt="Image" src="[link] /> I don't know the full range of affected versions. The trigger seems to be passing `currentColor` to `color-mix()`, I found more information about it here: [link] My second example above crashes because that exact combo is in `preflight.css`:…

### CASE-10693 · [v4] Tailwind no longer correctly processed in .svelte files
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: firefox, opera, linux, tailwind, svelte, vite
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.0.4 **What build tool (or framework if it abstracts the build tool) are you using?** Svelte 5.19.8 vite 6.1.0 **What version of Node.js are you using?** Deno 2.0.2 (not node) **What browser are you using?** Firefox **What operating system are you using?** Arch Linux **Describe your issue** It seems like Tailwind no longer correctly processes CSS in `<style lang="postcss">` tags in .svelte files, _unless_ I include `@user "tailwindcss/theme";`. If I don't include it, errors such as this one appear: ``` [plugin:vite:css] [postcss] Cannot apply…

### CASE-10694 · @user directive not working with pnpm
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, tailwind, next.js
- **Signals**: 👍3 💬6 · closed · labels: oxide
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js v15.1.6 **What version of Node.js are you using?** v20.0.0 **What browser are you using?** Firefox **What operating system are you using?** macOS **Reproduction URL** [Tailwind 4 with pnpm]([link]) [Tailwind 4 with yarn]([link]) **Describe your issue** @user…

### CASE-10695 · Nesting Preflight Classes doesn't work in Dev mode
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** ^4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** Vite ^6.0.5 **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Describe your issue** In index.css use the following: ``` @user theme, base, components, utilities; @user "tailwindcss/theme.css" layer(theme) prefix(eln); @user "tailwindcss/utilities.css" layer(utilities); .twp { @user "tailwindcss/preflight.css" layer(base); } ``` I am trying to prefix and also limit effect…

### CASE-10696 · tailwindcss CLI looks at .gitignore files from outside of current repo
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, firefox, opera, macos, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0-beta.8 **What build tool (or framework if it abstracts the build tool) are you using?** Just a super simple static web page with a shell script that invokes the CLI **What version of Node.js are you using?** v23.6.1 **What browser are you using?** Safari and Firefox **What operating system are you using?** macOS 15.1.1 **Reproduction URL** [link] ...but,…

### CASE-10697 · [v4] bg-opacity utility classes ignored
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 (tagged release) **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind playground **What version of Node.js are you using?** Tailwind playground **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** The bg-opacity utilities do not take…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-10602 · Tailwind v4 generates different CSS on ARM64 vs AMD64 architectures
- **Principles**: P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: # Tailwind v4 generates different CSS on ARM64 vs AMD64 architectures ## Description Tailwind CSS v4 generates different CSS output when run on ARM64 vs AMD64 architectures using identical input files. This causes production deployments to have missing CSS when developing on a different architecture. ## Reproduction I've created a minimal reproduction repository with Docker-based tests: [link] ### Quick reproduction: ```bash git clone [link] cd tailwindcss-v4-arch-bug ./verify.sh # or docker compose up ``` ## Current Behavior When building the same HTML/CSS with Tailwind v4: - **AMD64**:…

### CASE-10621 · JIT mode doesn't work with PostCSS stdin input
- **Principles**: P-G4, P-E3 · **Env**: opera, linux, tailwind
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss v3.0.10 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.4.5 **What version of Node.js are you using?** v14.18.2 **What browser are you using?** N/A **What operating system are you using?** Linux, Debian 10 Buster (Specifically the vscode Hugo dev container at [link]) **Reproduction URL** [link]…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10618 · addComponents strips out classes when using media queries and breakpoint prefixes.
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 12.0.10 **What version of Node.js are you using?** v14.18.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I'm trying to update my plugin to fix some bugs and support version 3…

### CASE-10627 · flex class not output if a breakpoint variant is used
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, linux, tailwind, react
- **Signals**: 👍5 💬8 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.0 ### What version of Node.js are you using? v14.16.0 ### What browser are you using? Brave ### What operating system are you using? Linux ### Reproduction repository [link] ### Describe your issue I'm using create-react-app with the instructed modifications for compatability mode and Jit mode enabled. Steps taken are outlined in my Readme file. The `flex` class is not being output if I use a breakpoint variant. ### Scenario 1 `flex` is used but no variants. Result: `flex` class outputs correctly ``` <header className='flex'> <div…

### CASE-10631 · Scale vs group-hover
- **Principles**: P-A1, P-A4, P-G3, P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍4 💬8 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the problem: Scale property doesn't work in group-hover. ### Config: ``` // tailwind.config.js module.exports = { variants: { // ... scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'], } } ``` ### Simple code example: ``` <div class="w-32 h-32 bg-pink-500 hover:bg-blue-500 group"> <p class="pt-10 transform group-hover:scale-110">Hi!</p> </div> ``` Other properties, like background, work flawlessly.

### CASE-10652 · Adding non-pixel media queries to screens config prevents auto-generated max-* classes for the rest of the breakpoints
- **Principles**: P-A1, P-A4, P-G3, P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, next.js
- **Signals**: 👍4 💬7 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.3.3 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 13.5.4 **What version of Node.js are you using?** v18.16.0 **What browser are you using?** All **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** ``` module.exports = { theme: { extend: { screens: { // => @user…

### CASE-10666 · [Bug]: In CRA projects, Breakpoints not working when [JIT] mode is on
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: chrome, opera, macos, tailwind, react, bootstrap
- **Signals**: 👍8 💬7 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.0 ### What build tool (or framework if it abstracts the build tool) are you using? Create React App ### What version of Node.js are you using? v12.14.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue In the CRA bootstrapped project, when turn on the `JIT` mode, the breakpoints of Tailwind CSS is not working. However, when `JIT` mode is off, the breakpoints work just fine. See the bug details at: [link]

### CASE-10672 · Bug report: Creating variants of classes with selectors that are not classes
- **Principles**: P-A1, P-A4, P-G3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: Hi, I've opened this as a bug report but I'm not entirely clear if it should be a feature request instead. I've been trying to use `@user` or `@user` directives to generate responsive classes for my flex-fallback grid utility. Example code: ```css @user { .flex-grid-4 { > div { max-width: 25%; @user mr-5; &:last-of-type { @user mr-0; } } } } ``` I would expect this to generate the usual responsive classes with this ruleset however by using `div` and `:last-of-type` instead of a class selector I get this error on compilation ```bash (33:5) Variant cannot be generated because selector contains…

### CASE-10698 · [v4] Tailwind CLI for Windows x64 not working
- **Principles**: P-A1, P-A4, P-G3, P-B1, P-B2, P-B3 · **Env**: opera, windows, tailwind
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** tailwindcss v4.0.0-beta.9 **What build tool (or framework if it abstracts the build tool) are you using?** tailwindcss-windows-x64.exe **What version of Node.js are you using?** N/A **What browser are you using?** N/A **What operating system are you using?** Windows 11 **Describe your issue** The Windows CLI does not appear to be working. .\tailwind-windows-x64.exe -i tailwind.css -o wwwroot\output.css tailwind.css --- @user "tailwindcss"; @user { --font-display: "Satoshi", "sans-serif"; --breakpoint-3xl: 1920px; --color-avocado-100: oklch(0.99…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10622 · v2 to v3 theme() keys bug?
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, vue, webpack
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** vue cli v5.x webpack v5.x **What version of Node.js are you using?** v16.5.0 **What browser are you using?** N/A **What operating system are you using?** macOS **Describe your issue** Develop or compile. This message always appears ``` does not exist in your theme config. 'spacing' has the following keys: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60',…

### CASE-10636 · Problem with dark mode because Tailwind v4 loads two CSS versions in dev mode
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind, vite
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v4.1.11 **What build tool (or framework if it abstracts the build tool) are you using?** For example: Vite v5.4.14 and @user/vite v4.1.11 **What version of Node.js are you using?** For example: v22.12.0 **What browser are you using?** For example: Brave **What operating system are you using?** For example: macOS **Reproduction URL** I am not able…

### CASE-10676 · Replacing all colors breaks the build
- **Principles**: P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍2 💬7 · closed
- **Excerpt**: This bug occured while beta testing the new v1 config, it's not an issue in the stable release. With the following config: ```js module.exports = { theme: { colors: { blue: "[ref]", red: "#ee585f", paper: "#f5f2ea" } } }; ``` The build breaks because it expects a specific shade of grey to exist: [link] ``` TypeError: Cannot read property '700' of undefined at Array.reduce (<anonymous>) at new Promise (<anonymous>) ``` Currently working around the issue by extending the colors instead.

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10630 · tailwindcss cli throws
- **Principles**: P-A3, P-H1 · **Env**: windows, tailwind
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: ### Describe the problem: ``` Cannot find module 'autoprefixer' ``` ![image]([link]) <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> ### Link to a minimal reproduction: ```cli mkdir tmp-tester-tailwind cd tmp-tester-tailwind npx tailwindcss build -o tailwind.css ``` I am using windows 10.

### CASE-10662 · TailwindCSS Standalone CLI not working in Alpine Linux (docker)
- **Principles**: P-A3, P-H1 · **Env**: linux, tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: The tailwindcss binary release is not working on Alpine Linux. Tested with the release tailwindcss-linux-x64 v3.0.7 on the latest docker alpine image. If I run an alpine container (installing curl, and downloading the standalone release as described here [link] ) I got nothing (binary not found). Running the exact same steps in debian works. Tell me if I need to provide more information. Example steps to reproduce it: ```sh #On the host docker run -it --rm alpine ash #Within the container apk add curl curl -sLO [link] framework]/releases/latest/download/tailwindcss-linux-x64 chmod +x…

### CASE-10667 · @user/jit not working when configured in postcss.config.js
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### This is my dependencies and I already installed @user/jit ![image]([link]) # I Followed the Instruction given by the [link] But when I try to replace the **tailwindcss** object ``` // postcss.config.js module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, } } ``` Inside the postcss.config.js INTO THIS **@user/jit** object ``` // postcss.config.js module.exports = { plugins: { '@user/jit': {}, autoprefixer: {}, } } ``` and when I try again to run using yarn dev **It got me this error** ``` error - ./src/styles/tailwind.css…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10640 · Styles in a monorepo are not included anymore after upgrading to 4.0.8 or higher
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: needs reproduction
- **Excerpt**: 4.0.7 is the latest version that works for my mono repo, I tested every version above but they all break. - My styles are only imported in my main app, is that the issue? - My theme is inside a sub package where all config lives. - It feels like it does not resolve or find my css in my sub packages anymore after going to 4.0.8 I can see something was changed for excluding unused variables, but even the static helper doesn't resolve it. What changed? Is there some config update that I missed? For now staying on 4.0.7 is my solution. ``` @user "@user/shared-configs/theme/index.css"; #root {…

### CASE-10668 · hover style cannot override group-hover style
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Describe the problem: Say this HTML: ```html <div class="group"> <div class="group-hover:text-blue-500 hover:text-red-500">Lorem</div> <div class="group-hover:text-blue-500 hover:text-red-500">Ipsum</div> </div> ``` When hovering on the "lorem" div, I expect "lorem" to be red and "Ipsum" to be blue. But nothing goes red. Because the specificity of group-hover selector is bigger than hover selector (3 vs 2, due to the `.group` class). I'm not really sure if this is a bug. But `hover` appears after `group-hover` in the default variant configuration, so I feel like that hover should override…

### CASE-10669 · addBase plugin in tailwind.config.js is not working
- **Principles**: P-E1, P-E2, P-E4, P-C1, P-C2, P-C3, P-B1, P-B2, P-B3 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### addBase plugin in tailwind.config.js is not working I am using tailwind v2 with css in js. I want to use header tags (h1, h2, h3) to work as they normally would without tailwind as I have html generated from markdown files. My `tailwind.config.js` file: ```javascript const plugin = require('tailwindcss/plugin') module.exports = { purge: [], theme: { extend: {}, }, variants: {}, plugins: [ // require('@user/typography'), plugin(function({ addBase, config }) { addBase({ 'h1': { fontSize: config('theme.fontSize.2xl') }, 'h2': { fontSize: config('theme.fontSize.xl') }, 'h3': { fontSize:…

### CASE-10671 · Color opacity breaks when using functions to define colors
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: ### Describe the problem: If I define a color using a function like this: ``` { ... colors: { 'primary': ({ opacityVariable }) => `rgba(255,0,0,var(${ opacityVariable }))` } ... } ``` The CSS variable passed in by opacityVariable is not set by default, breaking the color. Looking at [link] framework]/blob/05406f9a487b34da12da173c3325cc0b69fca11f/src/util/withAlphaVariable.js#L21, it seems like this might be a bug. If I edit this file to include `[variable]: '1'` in the returned object, the default variable is set and everything works as anticipated. After some discussion on discord, Robin…

### CASE-10674 · CSS Variables and Screen doesn't work
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: When I assign css vars to screen options it doesn't work. DOESNT'T WORKS: This is my Part in the Tailwind Config ```js screens: { 'min': 'var(--bp-min)', 's': 'var(--bp-s)', 'm':'var(--bp-m)', 'l': 'var(--bp-l)', 'max': 'var(--bp-max)', }, ``` CSS ```css h1 { @user text-red; @user l { @user text-green; } } ``` WORKS: This is my Part in the Tailwind Config ```js screens: { 'min': '320px', 's': '600px', 'm':'800px', 'l': '1200px', 'max': '1600px', }, ``` CSS ```css h1 { @user text-red; @user l { @user text-green; } } ``` My app.pcss looks like this: ```css @user '01-settings.pcss'; // Here are…

### CASE-10675 · mx-auto/ml-auto/mr-auto not working in 1.0.0-beta.8?
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: I'm trying to center an image within a div using `margin-left: auto` `margin-right: auto` via Tailwind 1.0.0-beta.8. I've tried both `mx-auto` and `ml-auto` + `mr-auto`, but none of them seem to work in v.1.0.0beta8 ``` <img className="lg:block lg:mx-auto lg:max-w-60pct" /> ``` [The docs]([link]) seem to suggest the auto variants should be there and don't need to be configured, but they don't seem to work for me. Am I just doing something wrong? Thanks!

### CASE-10677 · Missing Styles if you extend the default colors object to define custom colors in tailwind.js
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: If you try to extend the colors object AFTER the module.exports = {} block, like this: Object.assign(colors, { 'panelColor': '#3333ff', }); You will find that the resulting tailwind.css file generated is MISSING the BASE styles for: .text-panelColor {} .bg-panelColor {} and so on. Though it does have styles like: .hover\:bg-panelColor:hover {} .focus\:bg-panelColor:focus {} .sm\:bg-panelColor {} .sm\:text-panelColor {} .md\:bg-panelColor {} and so on Note: tailwind.js has a definition of colors at the top: let colors = { 'transparent': 'transparent', 'black': '#22292f', ... } It works fine…

### CASE-10680 · Bug: Invalid CSS var(--prefix-*) with literal asterisk when arbitrary values share variable prefix
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬6 · closed · labels: needs reproduction
- **Excerpt**: ## Description When two or more arbitrary value utility classes reference CSS custom properties that share a common prefix (e.g., `--sidebar-width` and `--sidebar-collapsed-width`), Tailwind CSS v4.2.4 generates a single collapsed utility containing `var(--sidebar-*)` with a literal `*` character. This is not valid CSS and causes Lightning CSS to throw a parse error, crashing the dev server. ## Reproduction 1. Define CSS variables with a shared prefix: ```css :root { --sidebar-width: 240px; --sidebar-collapsed-width: 80px; } ``` 2. Use both as Tailwind arbitrary values in a template: ```html…

### CASE-10700 · [v4] Chaining arbitrary variants with BEM-like partial class name selectors no longer works
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍2 💬6 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.0-alpha30 **Reproduction URL** [link] **Describe your issue** With markup like this: ```html <div class="...tailwind classes..."> <ul class="tw3-list"><!-- 3rd-party HTML I don't control, for example --> <li class="tw3-list__item"></li> <li class="tw3-list__item tw3-list__item--active"></li> </ul> </div> ``` a regression I noticed when using chained variants like `[&--active]:[&\_\_item]:[&_.tw3-list]` (which I understand should be reversed in TW4) to create a selector for `.tw3-list__item--active` no longer works with Tailwind 4 and the…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-10647 · Update chokidar to v4
- **Principles**: P-F5, P-H3 · **Env**: tailwind
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: I would like to propose to update chokidar to v4. It reduces its dependency count by 11 deps and also brings better type safety. This is part of the ecosystem cleanup initiative ([link]). We try to modernize and declutter the ecosystem as best as we can. Tailwind is downloaded over 46 million times per month and reducing its dependencies will have a huge impact and will lead to faster install times in ci and on dev machines. I would be happy to create a PR with the necessary changes if you are open for that :) PS: Sorry for misusing the bug tracker. I didn't know where to put it

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10648 · V4 Minification Issue with ::after
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: vite
- **Signals**: 👍2 💬7 · closed · labels: needs reproduction/v4
- **Excerpt**: In v4 beta 1 I had this... ```CSS .btn-menu::after { @user absolute -bottom-1.5 block h-0.5 w-0 bg-neutral-200 dark:bg-neutral-700 transition-all content-['']; } ``` When I compile the npm run build using laravel and vite... ``` import { defineConfig } from 'vite'; import laravel from 'laravel-vite-plugin'; export default defineConfig({ plugins: [ laravel({ input: [ 'resources/css/styles.css', 'resources/js/custom.js', 'resources/css/admin.css', 'resources/js/admin.js'], refresh: true, }), ], }); ``` I get this error: ``` vite v5.4.9 building for production... ✓ 27 modules transformed.…

### CASE-10655 · cannot use camelCase for animation or keyframe name
- **Principles**: P-D1, P-D2, P-D3 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: using tailwind 3.2.7 I'm just going to paste my whole tailwind.config file in, that might be easiest. Long story short, there are two keyframe/animations named `slide-up` and `slide-down`. Originally, I named them `slideUp` and `slideDown`, but after quite a lot of debugging, I found out that these two animations would only work if they were renamed `slide-up` and `slide-down`. I briefly looked for a duplication of this issue, and couldn't find any, although there are enough closed issues that I might have missed it. ``` /* eslint-disable @user/no-var-requires */ const { fontFamily } =…

### CASE-10670 · Custom variant wrongly purged
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed · labels: needs reproduction
- **Excerpt**: I defined the following custom variant: ```js // aos variant addVariant('aos', ({ modifySelectors, separator }) => { modifySelectors(({ selector }) => { return selectorParser(selectors => { const clonedSelectors = selectors.clone(); [selectors, clonedSelectors].forEach((sel, i) => { sel.walkClasses(classNode => { classNode.value = `aos${separator}${classNode.value}`; classNode.parent.insertBefore(classNode, selectorParser().astSync(`.aos-animate${i === 0 ? '' : ' '}`)); }); }); selectors.append(clonedSelectors); }).processSync(selector); }); }); ``` The variant works propery, as in…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10673 · font-sans not working by default
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: After setting up Tailwind in a new Laravel project, all fonts are defaulting to Times / serif stack. Inspecting element shows that the `font-sans` class is not being correctly compiled and includes lots of white space (see screenshot): ![image]([link]) I haven't modified the default config file either.

### CASE-10699 · [v4] Vite plugin providing a virtual file can't be resolved from within main CSS file
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite, tailwind
- **Signals**: 👍1 💬6 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** ``` @user/cli 4.0.0-alpha.33 └── tailwindcss 4.0.0-alpha.33 @user/typography 0.5.15 └── tailwindcss 4.0.0-alpha.33 peer @user/vite 4.0.0-alpha.33 └── tailwindcss 4.0.0-alpha.33 tailwindcss 4.0.0-alpha.33 ``` **What build tool (or framework if it abstracts the build tool) are you using?** `astro 5.0.0-beta.8`, using `vite 6.0.0-beta.10` **What version of Node.js…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10678 · Conflict with utatti/perfect-scrollbar
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: tailwind
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: I'm attempting to use this package: [link] and it seems Tailwind is interfering with the position of the scroll bar - causing `left: 0` to be added to the element during scroll. I have both working correctly in another app using an older version of Tailwind (0.4.0) and I've narrowed the issue down to this line: `@user "tailwindcss/utilities";` but I'm stuck there. Any ideas?

### CASE-10692 · Bug: vite warnings when minifying css - Empty :where() generated
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: vite, webkit
- **Signals**: 👍12 💬6 · closed · labels: upstream
- **Excerpt**: ### The code in question: body::-webkit-scrollbar { @user bg-zinc-100 dark:bg-zinc-800; } ### The error on bundling: warnings when minifying css: ▲ [WARNING] Unexpected ")" [css-syntax-error] <stdin>:14:30: 14 │ body::-webkit-scrollbar:where(){background-color:var(--color-zinc-... ╵ ^ ▲ [WARNING] Unexpected ")" [css-syntax-error] <stdin>:16:36: 16 │ ...:-webkit-scrollbar-thumb:where(){border-color:var(--color-zinc-... ╵ ^ --- ### General detail I am stumped, as I am getting weird behaviours on CSS minification. In digging deeper it seems that it generates an empty `where()` when it should…

