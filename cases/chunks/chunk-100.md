# Case Chunk 100 — Round 100

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-10901 · Arbitrary values aren't recognised in Ruby percent arrays
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, tailwind
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Thank you for an awesome tool! I've been using it in all my projects recently and the productivity gains have been immense. **What version of Tailwind CSS are you using?** Tailwind v3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** postcss: 8.4.19, postcss-cli 10.0.0 **What version of Node.js are you using?** Node v16.18.1 **What browser are you using?** Firefox **What operating system are you using?** macOS **Reproduction URL** I have added a test case that fails, showing the incorrect behaviour. This is the first time I've popped the hood on Tailwind, so…

### CASE-10902 · Tailwindcss 3.2.1 Not working with Nextjs
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Not working with: v3.2.1 Working with: v3.1.8 **What build tool (or framework if it abstracts the build tool) are you using?** nextjs: 12.3.1 **What version of Node.js are you using?** node version: v18.11.0 But as am I'm using yarn: yarn version: v1.22.19 **What browser are you using?** I'm using chrome, safari, and duck duck go. None of them show the css with…

### CASE-10904 · CLI duplicate selectors in output after updates when important: true
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: V3.1.18 Tailwind CLI Node v14.18.1 Chrome Window 10 (No Docker or WSL) CLI command line: `npx tailwindcss --output wwwroot/css/tailwind.css --watch -i wwwroot/css/twbase.css` **Reproduction URL** I have a perfectly consistent repro on a large real project which I cannot share, and I cannot repro this in a small project. However I'm going to describe it in the hope that it might be diagnosable by someone familiar with the code. Please don't summarily execute my morning's worth of work on this bug report because of the lack of a URL - I will work with you guys to track this down. **Describe…

### CASE-10906 · CRA Sass/scss build error: "resolve-url-loader: error processing CSS Invalid mapping"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, edge, opera, windows, tailwind, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.1.5 **What build tool (or framework if it abstracts the build tool) are you using?** Create React App **What version of Node.js are you using?** v16.14.2 **What browser are you using?** Chrome, Firefox, Edge **What operating system are you using?** Windows 11 **Reproduction URL** See attachment. **Describe your issue** Using tailwindcss with sass `@user`…

### CASE-10908 · React.js - change config path in CRA v5
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, react, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.11 **What build tool (or framework if it abstracts the build tool) are you using?** "react": "^17.0.2", "autoprefixer": "^10.4.7", "postcss": "^8.4.14", **What browser are you using?** Chrome **What operating system are you using?** Windows **Describe your issue** The problem is that after I upgrade from v2 to v3, I can't change the config path like I did…

### CASE-10909 · Bg-clip-text with gradient clips text on large fonts
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome, firefox, safari, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.0.24 **What build tool (or framework if it abstracts the build tool) are you using?** Tailwind play **What version of Node.js are you using?** N/a **What browser are you using?** Chrome, Firefox, Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** I followed the docs for [cropping to text]([link]). On larger font sizes, the text line gets clipped. Notice in the screenshot below, after 7xl font characters like `g` and `y` get truncated at the bottom. This only happens on lines with…

### CASE-10910 · Tailwindcss v3.0.23 generates broken classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I recently installed the latest version (**v3.0.23**) of **Tailwind CSS** as suggested in its [document]([link]) (webpack v5.70.0, node v16.14.0, postcss-cli v9.1.0, Chrome v99.0.4844.51, Windows 10 64bit). After linking the HTML file to generated .css file, and adding a simple "bg-blue-800" class to the body of the HTML file, there were not any changes in the background color. **Visual Studio Code** indicates that there is a problematic class in the .css file. The class looks like as following: `.w-\[this-is\\\\\]w-\\\\\[weird-but-valid\] { width: this-is\\]w-\\[weird-but-valid;` Although my…

### CASE-10911 · Border color arbitrary value not generated
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, linux, tailwind, webpack
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** - webpack 5.69.1 - postcss 8.4.6 - postcss-loader 6.2.1 - css-loader 6.6.0 **What version of Node.js are you using?** For example: v16.8.0 **What browser are you using?** Chrome **What operating system are you using?** Windows Subsystem for Linux 2 **Reproduction URL**…

### CASE-10912 · Postcss tailwind plugin - filters broken when using @user
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.0.23 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 9.1.0 postcss: 8.4.6 **What version of Node.js are you using?** v16.3.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Expected: All filter css-vars (like --tw-blur, --tw-contrast...) should be initialized with a whitespace (e.g. `--tw-blur: ;`) Issue: When using tailwind postcss plugin, these whitespaces are stripped (`--tw-blur:;`). Thus, filters won't…

### CASE-10914 · Scroll Snap is not Smooth on Chrome (it has a late reaction)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, react, tailwind, next.js, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss v.3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** postcss v.8.4.6, Next.js v.12.0.7, Webpack v.5 **What version of Node.js are you using?** Node v.17.3.0 **What browser are you using?** Chrome Version 97.0.4692.71 (Official Build) (64-bit) **What operating system are you using?** Operating System: Manjaro…

### CASE-10915 · After upgrade from v2 till v3... Dark Theme not working
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Version of Tailwind CSS: v3.0.19 Build tool: [email] Node.js: 14.17.3 Browser: Chrome Operating system: Windows After upgrading from Tailwindcss v2. till v3 using this guide: [link] Dark theme is not working anymore. Tried to replicate in TailwinPlay, but not working: [link] **tailwind.config.js contains (part of the content):** ``` module.exports = { important: false, darkMode: 'class', content: [ './**/*.html', './**/*.razor', './**/*.cs' ], safelist: [ "dark", "minWidth", '3xl' ], theme: { extend: { colors: { 'my-gray': { '1': '#EDEDED', '2': '#3F424D', '3': '#383A44', '4': '#30323E', '5':…

### CASE-10916 · Memory leak in 3.0.18
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, opera, windows, tailwind, nuxt, webpack
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.0.18 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss-cli 8.3.1, Nuxt.js 2.18.8, webpack 4.*.* **What version of Node.js are you using?** For example: v16.13.2 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: Windows **Reproduction URL**…

### CASE-10917 · PostCSS doesn't work with microbundle
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 3.0.13 (latest) **What build tool (or framework if it abstracts the build tool) are you using?** - [email] (latest) - [email] (latest) - microbundle uses [email] (latest) **What version of Node.js are you using?** 16.13.2 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** As per @user's request in [this PR]([link] framework][ref]), we've run into an issue where, after the Tailwind watcher was removed, our stack (bundling with Microbundle) doesn't update the…

### CASE-10919 · [Bug] - Border and Divider not working while switching preflight to false
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind, react, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.11 **What build tool (or framework if it abstracts the build tool) are you using?** postcss (8.3.11), React 17.0.0, Vite (2.6.4) **What version of Node.js are you using?** v12.22.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Describe your issue** I think this is bug and not the feature. Currently **Border** and…

### CASE-10920 · 3.0.7: config fontSize values starting with a dash do not work
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.7 **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.4.5 **What version of Node.js are you using?** v16.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOs **Reproduction URL** [link] **Describe your issue** After upgrade from 3.0.6 to 3.0.7, seeing the following error: `Cannot…

### CASE-10921 · Preflight: `li` should also receive `list-style: none;`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> This could be seen as a feature I guess, though technically I would consider it a bug (albeit a super minor one). **What version of Tailwind CSS are you using?** 2.2.19 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 2.6.14 **What version of Node.js are you using?** 16.0.0 **What browser are you using?** Chrome **What operating system are you using?** macOS…

### CASE-10923 · Custom animations are not working when the prefix option is used
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v2.2.15 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Custom animations are not working when tailwind is used with prefix option. Steps to reproduce: - Open reproduction URL - replace `tw-animate-shake` class with `animate-shake` in HTML section - remove `prefix: 'tw'`…

### CASE-10924 · Incorrect generation of selector :not in JIT mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox 93, chromium 95, opera, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** [email], @user/[email] **What build tool (or framework if it abstracts the build tool) are you using?** [email], [email], [email] **What version of Node.js are you using?** v14.18.0 **What browser are you using?** Firefox 93.0, Chromium 95.0.4638.54 **What operating system are you using?** Linux Mint 20.1 Ulyssa **Reproduction URL** [link] **Describe your…

### CASE-10925 · vite `server.origin` breaks tailwind JIT HMR
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, safari, opera, macos, vite, tailwind
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 2.2.17 **What build tool (or framework if it abstracts the build tool) are you using?** vite 2.6.10 **What version of Node.js are you using?** 12 **What browser are you using?** Firefox / Chrome / Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Vite added a new server.origin property to it's config…

### CASE-10926 · translate-x does not work as expected with JIT mode enabled and no base styles
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 2.2.16 **What build tool (or framework if it abstracts the build tool) are you using?** Laravel Mix 6.0.31 with built-in PostCSS **What version of Node.js are you using?** 15.11.0 **What browser are you using?** Chrome **What operating system are you using?** masOS **Reproduction URL** [link] **Describe your issue** In my case I did not include the tailwind base styles. ``` /* @user base; */ ``` And with JIT mode enabled, using classes `transform translate-x-1/2` doesn't work as expected. The `translate-x-1/2` class has no effect. However, turn…

### CASE-10927 · mode: 'jit' is not working on Vite
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, vite, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.14 ### What build tool (or framework if it abstracts the build tool) are you using? [email] ### What version of Node.js are you using? v15.5.0 ### What browser are you using? chrome ### What operating system are you using? windows ### Reproduction repository [link] ### Describe your issue mode: 'jit' is not working, however once I deleted the mode: 'jit', it's working (without Arbitrary value working obviously). p.s. : tried to find similar issue, didn't find one. thanks very much in advance!

### CASE-10928 · Can't chain checked and first variants
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.9 ### What build tool (or framework if it abstracts the build tool) are you using? NextJS (also tailwind playground) ### What version of Node.js are you using? v12.22.4 ### What browser are you using? Firefox ### What operating system are you using? Linux ### Reproduction repository [link] ### Describe your issue I'm trying to create a custom checkbox/toggle element by using adding the `peer` class to a hidden checkbox input and the using `peer-checked:<classes>` to style the custom checkbox. It works just using it like that but when I want…

### CASE-10929 · tailwind classes using -webkit not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, webkit
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? stencil - postcss ### What version of Node.js are you using? V14 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue this code for example is not working properly: `<span class='decoration-cone text-9xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Hello <br /> world</span>` by adding this css classes I got the code working, ```…

### CASE-10930 · Borders added when pasting into Microsoft Word/Outlook
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, ios, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.7 ### What build tool (or framework if it abstracts the build tool) are you using? twin ### What version of Node.js are you using? n/a ### What browser are you using? Chrome ### What operating system are you using? macOs ### Reproduction repository n/a ### Describe your issue Tailwind current adds `border: 0 solid` to every element. While this works fine in most scenarios, it unfortunately causes issues for anyone copy and pasting content into Microsoft Word or Outlook. Word decides to always display a border around an element that has a…

### CASE-10931 · JIT resolveDefaultsAtRules crash: Cannot read property 'filter' of undefined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, macos, tailwind, vite
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.7 ### What build tool (or framework if it abstracts the build tool) are you using? Vite ### What version of Node.js are you using? v15.5.1 ### What browser are you using? Firefox Developer Edition ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue Since Tailwind @user.2.6, my CSS has failed to compile. I know it compiled fine in @user.2.4, but didn't try in @user.2.5. The exception is ``` 9:41:47 PM [vite] Internal server error: Cannot read property 'filter' of undefined Plugin: vite:css…

### CASE-10932 · JIT + dark + arbitrary value is not working
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: chrome, opera, macos, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.2 ### What build tool (or framework if it abstracts the build tool) are you using? Webpack ### What version of Node.js are you using? v14.17.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue When using `darkMode: 'class'`, `dark:text-[rgb(217,217,217)]` won't work. If I define the color in theme then use the color name, then it works. Reproduce: Search for line with `dark:dop-text-[rgb(217,217,217)]` you will see there is no effect. [link] Not…

### CASE-10933 · Next.js building css with tailwind JIT mode error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, next.js, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.2.4 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 11.0.1 ### What version of Node.js are you using? 16.4.2 ### What browser are you using? Chrome ### What operating system are you using? Windows with WSL ### Reproduction repository [link] ### Describe your issue I'm not sure if the problem is in tailwind but I found a bug when I try to build a project in Next.js using the latest version of tailwind in JIT mode, basically when I try to build the webpack it shows an error, without specifying where, it…

### CASE-10934 · Outdated `button:focus` makes buttons less accessible
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: firefox, opera, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2 ### What build tool (or framework if it abstracts the build tool) are you using? vite 2 ### What version of Node.js are you using? 14 ### What browser are you using? Firefox ### What operating system are you using? OpenSUSE Tumbleweed ### Reproduction repository [link] ### Describe your issue TailwindCSS Preflight adds a fairly visually inaccessible `outline: 1px dotted;` to `button:focus`, which can be seen as a regression towards the newer and much more accessible Firefox form element default focus style. [link]…

### CASE-10936 · npm install from repo on Termux ENOENT chmod cli.js
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, android, linux, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? GitHub master HEAD ### What build tool (or framework if it abstracts the build tool) are you using? postcss 8.3.0, next 10.2.3 ### What version of Node.js are you using? 14.15.4 ### What browser are you using? Brave ### What operating system are you using? Android/Linux/Termux ### Reproduction repository git init; npm init; npm install -D [css framework] ### Describe your issue It is platform specific, not project related. The reproduction repo does not apply. On Android, download F-Droid, install Termux, do NOT use Google Play Termux as it is…

### CASE-10938 · [Bug]: Tailwind classes does not workl
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ubuntu, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? NEXT JS 10.2.2 ### What version of Node.js are you using? 14.17.0 ### What browser are you using? Chrome ### What operating system are you using? Ubuntu ### Reproduction repository [link] ### Describe your issue Adding tailwind classes to my "HeaderItem.js" component has no effect

### CASE-10939 · [Bug]: [email] introduces ReDoS vulnerability
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? [email] ### What version of Node.js are you using? v14.11.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] framework] ### Describe your issue The dependency [email] introduces a ReDoS vulnerability ([link]) The vulnerability was fixed in [email]

### CASE-10941 · [Bug]: No webkit prefix for sticky
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari 12, opera, macos, webkit, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Next 10.2.0/10.2.2 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? Safari 12.1 ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue Expected behavior -webkit-sticky is added to the css, sticky class works on Safari 12.1 npx autoprefixer --info includes sticky Current behavior -webkit-sticky is not added to the css, sticky class does not work on Safari 12.1 npx autoprefixer…

### CASE-10942 · JIT doesn't give a confirmation message after building and it doesn't watch
- **Principles**: P-G1, P-G2, P-G3, P-C1, P-C2, P-C3 · **Env**: safari, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? "postcss": "^8.2.15", "postcss-cli": "^8.3.1", ### What version of Node.js are you using? 16.0.0 (also tested on 14.16.1) ### What browser are you using? Safari ### What operating system are you using? macOS ### Reproduction repository /// ### Describe your issue I've started building a Ghost theme and I want to use Tailwind CSS for this project. I followed the instructions from the TailwindCSS docs to install it and create a config file. After that I…

### CASE-10943 · [Bug]: space-x- uses marginLeft so elements aren't aligned when wrapped
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.1 ### What build tool (or framework if it abstracts the build tool) are you using? next 10.0.8 ### What version of Node.js are you using? 14.16.0 ### What browser are you using? chrome ### What operating system are you using? macOS ### Reproduction repository --- ### Describe your issue `space-x-4` adds left margin except on first element, which breaks alignement when wrapped on several rows Use Case: ```tsx <div className="flex flex-row items-baseline flex-nowrap space-x-3 space-y-2"> {elements.map(e => <Tag tag={e} />} </div> ``` Result:…

### CASE-10944 · [Bug]: Important modifier not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, opera, macos, tailwind, vue, webpack
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? vue-tailwind 2.2.1, webpack 5.21.2 ### What version of Node.js are you using? v15.11.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue The important modifier does not work as announced here: [link] The attached reproduction link should have a blue background but it is still gray: ![image]([link])

### CASE-10945 · [Bug]:
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 89, opera, windows, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? ^2.1.0 ### What build tool (or framework if it abstracts the build tool) are you using? webpack, tailwind jit ### What version of Node.js are you using? v14.16.0 ### What browser are you using? Chrome 89.0.4389.128, 64-bit ### What operating system are you using? Windows 10 ### Reproduction repository [link] ### Describe your issue Normally, when designing UI's, when you don't change the global state, you'd expect your unit to remain the same size. That's the definition of a unit. Yet, when I use tailwind `w-4` and/or tailwind `mr-1`, which use…

### CASE-10946 · [JIT] not working with @user/craco
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? 2.1.0 ### What version of Node.js are you using? 12.20.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] I'm using TailwindCSS with craco, to support "css modules apply syntax", in addition, I want to use "Just-in-time", it does not work as expected, styles are not getting compiled fine. only tailwind base styles (normalizers) are available to use now.

### CASE-10947 · Plugin is not correctly generating variant/screen classes when using JIT
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-C1, P-C2, P-C3 · **Env**: chrome, opera, macos, next.js, webpack, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of @user/jit are you using? v0.1.18 ### What version of Node.js are you using? v14.13.0 ### What build tool (or framework if it abstracts the build tool) are you using? postcss 8.2.9, Next.js 10.0.5, webpack 4.44.1 ### What browser are you using? Chrome ### What operating system are you using? macOS ### Reproduction repository [link] The [Nightwind plugin]([link]) essentially generates a bunch of classes like `.dark .text-red-600` to build a dark theme based on a specified tailwind.config.js configuration. --- ### Expected behavior Similarly as when it's used without JIT, the…

### CASE-10948 · JIT is not working in a Vite - React project
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, windows, vite, react, tailwind
- **Signals**: 👍3 💬4 · closed
- **Excerpt**: ### What version of @user/jit are you using? 0.1.17 ### What version of Node.js are you using? v14.16.0 ### What build tool (or framework if it abstracts the build tool) are you using? postcss: "8.2.8", react: "17.0.0", vite: "^2.1.3" ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] Variants like **focus-visible, active, disabled**, and others do not work. Not even the Tailwind IntelliSense autocomplete (have the last version of it). Styles generated on demand do not work too. Something like `shadow-[inset -15px 0…

### CASE-10949 · Phoenix Framework Compatibility
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, webpack, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of @user/jit are you using? 0.1.17 ### What version of Node.js are you using? 15.5.1 ### What build tool (or framework if it abstracts the build tool) are you using? webpack-4.46.0 phoenix-1.5.8 ### What browser are you using? Firefox ### What operating system are you using? Linux 5.11.9 ### Reproduction repository [link] Out of the box, there are some issues with getting Phoenix to work with tailwindcss-jit. I am mostly posting this for visibility in case others come to create issues (see [css framework]-jit[ref]). Since the issue is around file watching, I have not included…

### CASE-10953 · Gradient from-transparent to-white show's dark gradient on safari
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, chrome, tailwind
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the problem: ![image]([link]) CSS Generated by tailwind: ``` .to-white { --tw-gradient-to: #fff; } .from-transparent { --tw-gradient-from: transparent; --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,transparent)); } ``` The problem is: `--tw-gradient-from: transparent;` Safari renders transparent as rgba(0,0,0,0) (maybe a safari bug?) If I change `transparent` to `rgba(255,255,255,0)` it looks good and as intended. ![image]([link]) ### Link to a minimal reproduction: Check in safari: [link] Looks right in chrome: [link]

### CASE-10961 · Weird box-shadow bug on Safari for next.tailwindcss.com
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: There seems to be a very apparent box-shadow on the next.tailwindcss.com site on Safari: [link]

### CASE-10965 · light-dark function gets wrongly transformed by lightning css
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍2 💬3 · closed · labels: upstream
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.12 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.5.2 **What version of Node.js are you using?** v23.11.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When using the light-dark() CSS function, it gets wrongly transformed…

### CASE-10966 · Poor performance of space-* classes (:where(& > :not(:last-child)))
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** 4.1.12 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.3.5 **What version of Node.js are you using?** 22.15.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** I tried to reproduce in Tailwind Play, but it seems like that it not actually using tailwind v4 if v4 is selected. If you check the generated css file in the browser on that page it includes ``` ! tailwindcss v3.4.17 | MIT License | [link] ``` I hence cannot provide a tailwind play link (bug…

### CASE-10969 · `@user/vite@^4.0.8` is not able to find classes from component based config and components
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, vite, tailwind
- **Signals**: 👍5 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v4.0.9` (`4.0.7` works fine) **What build tool (or framework if it abstracts the build tool) are you using?** - Vite `6.2.0` **What version of Node.js are you using?** `v22.13.1` **What browser are you using?** Chrome **What operating system are you using?** Debian (WSL2) **Reproduction URL** [link] **Describe your issue** With the change from the PR [link]…

### CASE-10970 · Translate Classes not Working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, opera, macos, tailwind, next.js
- **Signals**: 👍2 💬3 · closed · labels: needs reproduction
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.9 **What build tool (or framework if it abstracts the build tool) are you using?** Create Next App, Next.js 15.2.0 **What version of Node.js are you using?** v23.8.0 **What browser are you using?** Chrome, but interestingly the problem doesn't appear on Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Tailwind translate classes are not working in NextJs on Chrome. Interestingly enough, they work on Tailwind Play and on Safari, but just not Chrome. Creating and using a custom class…

### CASE-10971 · Group selector specificity breaks v3 => v4 upgrade for hover
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍10 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.2 **What build tool (or framework if it abstracts the build tool) are you using?** Next.js 15.1.3 **What version of Node.js are you using?** v22.12.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Upgrading from v3 => v4 breaks the specificity for `group` with…

### CASE-10972 · `@user/vite` breaks `url()` using `resolve.alias`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, vite, tailwind, next.js, webpack
- **Signals**: 👍1 💬3 · closed · labels: bug/vite
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 4.0.1 **What build tool (or framework if it abstracts the build tool) are you using?** Vite 6.0.11 with @user/vite 4.0.1 For example: postcss-cli 8.3.1, Next.js 10.0.9, webpack 5.28.0 **What version of Node.js are you using?** 22.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows **Reproduction URL** [link] 1. Download…

### CASE-10973 · [v4] Border utility class doesn't works inside shadowRoot
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: chrome 133, opera, chrome, macos, tailwind, vite
- **Signals**: 👍4 💬3 · closed
- **Excerpt**: **Tailwind Version:** v4.0.1 **Build Tool:** Vite 6.0.11 **Browser Version:** Chrome 133 **Operating System:** macOS 15 I have a Chrome extension that uses shadowRoot to render its UI. After upgrading to v4, borders stopped working. Found out `border` utility class in v4 uses a custom CSS `@user` to declare `--tw-border-style` and `@user` doesn't works inside shadowRoot. ## Border working outside shadowRoot ``` <!doctype html> <html> <body></body> <style> div { border-color: #dc2626; border-style: var(--tw-border-style); border-width: 16px; font-size: 36px; } @user --tw-border-style { syntax:…

### CASE-10974 · v4: @user/vite: Invalid css in @user section causes the styles to be silently broken in production build only
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vite, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** "@user/vite": "^4.0.0" **What build tool (or framework if it abstracts the build tool) are you using?** "vite": "^6.0.5" **What version of Node.js are you using?** v22.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** The above demo demonstrates, how a single typo in…

### CASE-10975 · [v4] generated CSS variables clash with existing variables
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.0.0 **What build tool (or framework if it abstracts the build tool) are you using?** CLI **What version of Node.js are you using?** v21.7.3 **What browser are you using?** Chrome **What operating system are you using?** macOS Sonoma 14.6 **Reproduction URL** [link] **Describe your issue** In our project, we have already defined our own color palette using…

### CASE-10976 · Selection is broken in Chrome 131 due to --tw-text-opacity and friends
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 131, chrome, edge, opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** Not sure what version sites are using, but I suspect less than a year old. **What build tool (or framework if it abstracts the build tool) are you using?** Don't know **What version of Node.js are you using?** Don't know **What browser are you using?** Chrome and Edge **What operating system are you using?** All **Reproduction URL** See [link] for numerous reproductions. From The Verge: ``` .selection\:bg-franklin-20::selection { --tw-bg-opacity: 1; background-color: rgb(216 255 246/var(--tw-bg-opacity)); } ``` All selection is blank in Chrome…

### CASE-10977 · [4 alpha] breaks the default Vite `url(...)` references in imported CSS files.
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: safari, opera, macos, vite, tailwind
- **Signals**: 👍0 💬3 · closed · labels: bug/v4/vite
- **Excerpt**: **What version of Tailwind CSS are you using?** For example: alpha.29 (latest) **What build tool (or framework if it abstracts the build tool) are you using?** For example: Vite 5.4.10 (latest) **What version of Node.js are you using?** For example: v20.9.0 **What browser are you using?** Mainly Safari, however it's not related to the issue 🙃 **What operating system are you using?** MacOS **Reproduction URL** [link] **Describe your issue** Vite provides [@user inline and rebasing]([link]) for CSS. I'm trying to import font from the Fontsource library: [link] which references font files using…

### CASE-10978 · Duplicate ellipsis in Safari when using `<sup>` or `<sub>` tags
- **Principles**: P-G1, P-G2, P-G3, P-B1, P-B2, P-B3 · **Env**: safari, opera, macos, tailwind
- **Signals**: 👍0 💬3 · closed · labels: browser bug
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.4.10 **What build tool (or framework if it abstracts the build tool) are you using?** N/A **What version of Node.js are you using?** N/A **What browser are you using?** Safari **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** When loading the above reproduction in Safari, the text is truncated with multiple…

### CASE-10980 · Important modifier doesn't work on `@user` rules for custom utilities and components
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.4.1 **What build tool (or framework if it abstracts the build tool) are you using?** N/A **What version of Node.js are you using?** v19.8.1 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** This may be intended behavior—if so, apologies for filing this as an issue. I…

### CASE-10983 · Input outlines show during transition with Tailwind 3.2.6
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍8 💬3 · closed
- **Excerpt**: ### What version of @user/forms are you using? 0.5.3 ### What version of Node.js are you using? 18.13.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue Since [link] framework][ref] was merged inputs that use this plugin and the `transition` class receive an outline ring in addition to the box-shadow ring during their transition animation. The way to fix this is to add `outline-none` to the input or apply that to all inputs in your style sheet. `@user/forms` sets the input's outline style to…

### CASE-10984 · Order of CSS selectors is not correct with v3.2.x in specific scenarios
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, ios, windows, tailwind, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** I use Vite. But I was able to reproduce the bug with `npx tailwindcss -i ./src/style.css -o ./dist/style.css`. **What version of Node.js are you using?** v16.16.0 **What browser are you using?** Chrome **What operating system are you using?** Windows 10 **Reproduction URL** [link] Please click on `Run` to run the instance and `Show files` to view the code. I couldn't replicate it on play.tailwindcss.com because the files are required to be in a specific…

### CASE-10988 · HMR is really slow when there are a lot of Vue components with `<style>`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, vue, tailwind, vite
- **Signals**: 👍5 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.0.22 **What build tool (or framework if it abstracts the build tool) are you using?** vite 2.8.2 **What version of Node.js are you using?** 16.13.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **Reproduction URL** With `<style>` tags (slow): [link] With `<style>` tags, without Tailwind (fast): [link] Without `<style>`…

### CASE-10989 · rgb and not rgba
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 56, opera, tailwind
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.13 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 8.4.5 **What version of Node.js are you using?** v14.18.1 **What browser are you using?** N/A (Samsung Signage Display Chrome 56) **What operating system are you using?** Samsung Tizen [link] **Describe your issue** On some browsers there is a problem with the…

### CASE-10990 · v3.0.10 with NextJS & module.css Issues
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, next.js
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** For example: v3.0.10 **What build tool (or framework if it abstracts the build tool) are you using?** For example: postcss 8.4.5, Next.js 12.0.7 **What version of Node.js are you using?** For example: v14.17.1 **What browser are you using?** For example: Chrome **What operating system are you using?** For example: macOS **Reproduction URL** [link] **Describe…

### CASE-10991 · Tailwind JIT do not generate class with slash after it
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, linux, tailwind, angular
- **Signals**: 👍14 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v2.2, v3 **What build tool (or framework if it abstracts the build tool) are you using?** angular: 12.2 **What version of Node.js are you using?** v16.13.0 **What browser are you using?** Chrome **What operating system are you using?** Windows, Linux **Reproduction URL** [link] ``` npm ci npm run build:lib npm run start ``` Text with `text-blue-500` is not blue…

### CASE-10992 · Tailwind version 3 not working with TypeScript
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, tailwind, typescript, react
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: I am using macOS, Chrome, NodeV17.0.1, tailwindcss V3.0.0 I am using TypeScript in my current project. I installed tailwind v3.0.0 following the documentation. I only changed 'npx create-react-app@user --scripts-version=@user --template=typescript@user my-ts-app ' part for TypeScript. After that, I tried to add '.ts,.tsx' part in the content part. However, when I tried to change something via className it doesn't affect the style.

### CASE-10993 · Error: Cannot find module '../src/plugins'
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, linux, tailwind
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.3 ### What build tool (or framework if it abstracts the build tool) are you using? Gatsby ### What version of Node.js are you using? v.16.4.0 ### What browser are you using? Firefox ### What operating system are you using? Arch linux ### Reproduction repository [link] ### Describe your issue I cannot the latest version of tailwindcss through yarn, seems to be a bug with importing the plugins that was just introduced. If I manually set the version to 2.2.0 all is well. Repro: 1. Clone repo 2. `yarn install` ```shell [4/4] Building fresh…

### CASE-10994 · Unable to @user the "group" class in SCSS module with JIT enabled.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, windows, tailwind
- **Signals**: 👍6 💬3 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.0 ### What version of Node.js are you using? v14.16.0 ### What browser are you using? Chrome ### What operating system are you using? Windows ### Reproduction repository [link] ### Error > Syntax error: <some_dir>\tw-jit-gp-err-rpd\TestDiv.module.scss The \`group\` class does not exist. If \`group\` is a custom class, make sure it is defined within a \`@user\` directive. So I used the example ([Group-hover]([link])) from the Tailwind documentation to reproduce this error. In the reproduction repository, I created two components, one is just…

### CASE-10998 · Nested color objects with mixed-case parent keys don't generate utilities in v4
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, ios, tailwind, next.js
- **Signals**: 👍1 💬2 · closed · labels: bug
- **Excerpt**: **Tailwind CSS version** : v4.1.18 **Build tool**: Next.js 15.5.7 with @user/postcss **Node.js version** : v20.11.1 **Browser**: Chrome (also tested in Safari - same behavior) **OS**: macOS 15.2 **Issue** In Tailwind CSS v4, nested color objects in `tailwind.config.ts` fail to generate utility classes when the parent key contains mixed-case or alphanumeric characters (e.g., `iosV3`, `myTheme`, `v3Landing`). However, lowercase-only parent keys (e.g., `iosv3`, `glass`, `electric`) work correctly. This behavior is **undocumented** and creates confusion during migration from v3 to v4, as…

### CASE-10999 · tailwindcss/vite 4.0.8 or higher with qwik doesn't render classes
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, tailwind, vite
- **Signals**: 👍2 💬2 · closed · labels: needs reproduction
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** tailwindcss 4.0.14 @user/vite 4.0.8 or higher **What build tool (or framework if it abstracts the build tool) are you using?** Qwik 1.12.1 **What version of Node.js are you using?** v22.13.1 **What browser are you using?** Chrome latest **What operating system are you using?** macOS Sequoia 15.3.1 **Reproduction URL** See [link] I have included an updated…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-10903 · Preflight breaks max-height image in flexbox in Safari
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, safari 15, safari 16, opera, chrome, firefox, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** Reproduced in Tailwind Play v3.2.1 **What browser are you using?** Safari 15.6.1 / Safari 16.0 **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** Adding Tailwind breaks image resizing inside a flexbox in Safari. The example is a minimal reproduction of the issue. The example looks great in Chrome and Firefox: <img width="616" alt="chrome" src="[link]> But is broken in Safari: <img width="826" alt="safari" src="[link]> After removing `@user base;` in the CSS tab in Tailwind Play (or alternatively,…

### CASE-10955 · Safari not respecting flex-containers inside a button
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, firefox, chrome, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem: Safari (v14/macOS Catalina) seems to ignore flex containers inside buttons. I'm not sure, if this is a browser bug or intended behavior, since Firefox (v82.0b5 and v81) and Chrome (87.0) seem to work just fine. ### Link to a minimal reproduction: I've created a pen at [link] It should look like <img width="903" alt="Bildschirmfoto 2020-10-01 um 08 59 11" src="[link]> but Safari renders it as <img width="866" alt="Bildschirmfoto 2020-10-01 um 09 00 03" src="[link]> ignoring `justify-between`.

### CASE-10981 · 'break-words' does not wrap when wrapped in a flex container
- **Principles**: P-A2, P-A4, P-G1, P-G2, P-G3 · **Env**: chrome 113, safari 16, opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** Version: 3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** phoenix: 1.7.1 elixir: 1.14 **~What version of Node.js are you using?~** None, because it is Elixir **What browser are you using?** Tested on: - Chrome 113.0.5672.92 (Official Build) (x86_64) - Safari 16.4 (18615.1.26.110.1) **What operating system are you using?**…

### CASE-11000 · Missing classes because of `{` boundary and new extractor
- **Principles**: P-A2, P-A4 · **Env**: tailwind
- **Signals**: 👍2 💬2 · closed
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.11 **Reproduction** With the new extractor ([link] framework][ref]) the class `h-4` and `mx-4` is not picked up anymore when using the following Twig template content: ``` <div class="flex items-center mx-4{% if session.isValid %}{% else %} h-4{% endif %}"></div> ``` (See [link] for the example on Tailwind Play and the generated CSS) I assume the `{` after `h-4` and `mx-4` is somehow not considered a (possible) boundary anymore. I think this is likely a bug, as many template languages use `{` and `}` as delimiters in some way, so the…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-10905 · Tailwind v3.1.5 CLI fails to install static style sheets on ubuntu stable images
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hello everyone, I just saw this bug while trying to deploy my application in PROD. My stylesheet is generated exclusively with the tailwind CLI (installed via npx), and since I didn't specify any version on my scripts, I could notice the following regression : **What version of Tailwind CSS are you using?** Reproduces the bugs : 3.1.5 Last known working : 3.1.4 **What build tool (or framework if it abstracts the build tool) are you using?** I was using the Rust [1.62]([link]) docker image to build my style sheet, but after moving to the [22.04]([link]) ubuntu's docker image, I could see it…

### CASE-10951 · version 2 @user directive not work in vue component
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem: I'm working on a project and this build with laravel inertiajs-vue. inside my component, I try to shorten my class list by `@user` directive but it not working and it doesn't through any error also. I don't what is the problem ### Component ```html <li v-for="(contact, index) in contacts" :key="contact.id" @user="selectContact(index, contact)" class="contact-row" :class="{'selected' : index == selected}"> <div class="avatar"> <img :src="contact.profile_photo_path" :alt="contact.name"> </div> <div class="contact-info"> <p class="name">{{ contact.name }}</p> <p…

### CASE-10956 · 'applyComplexClasses' does not support 'active' pseudo class
- **Principles**: P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem: I watched your great youtube videos from ([link]) and had to try out the new `applyComplexClasses` switch. I tried to move my split up @user code from from multiple declarations to one, but got an error when trying to add the 'active:' pseudo class. Using ``` experimental: { applyComplexClasses: true, }, ``` doesn't work with `active:` pseudo class. ### Link to a minimal reproduction: 1. Add the following to your tailwind.css: ``` .btn { @user active:bg-green-500; } ``` 2. Observe the following error being displayed in the browser: ``` (8:10) The…

### CASE-10985 · Div content with brackets `[]` prevents arbitrary class from being generated
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ## This works: [link] <img width="810" alt="image" src="[link]> ## This does not work: [link] <img width="821" alt="image" src="[link]>

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-10907 · Updating from v3.0.23 to v3.1.1 & 3.1.2 getting variant.replace not a function error
- **Principles**: P-A5, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hi All. I am trying to update our project from tailwinds v3.0.23 to the latest. Going to v3.0.24 I have no issues but updating to v3.1.1 or 3.1.2 I am getting this error when I try to run my project. It also comes up as an intellisense error as shown below. Not sure if it something I am doing wrong that worked in the older versions. I am using laravel mix v6.0.11 which runs on top of webpack 4.4.31 Here is the output: <img width="1204" alt="Screen Shot 2022-06-10 at 4 54 42 PM" src="[link]> Then here is what installed. I am running node v16.13.2: <img width="1462" alt="Screen Shot 2022-06-10…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-10913 · Focus ring opacity on text input not working with arbitrary value
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, macos, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** "tailwindcss": "^3.0.18", **What build tool (or framework if it abstracts the build tool) are you using?** "next": "12.0.9", **What version of Node.js are you using?** v12.19.0 **What browser are you using?** All **What operating system are you using?** macOS **Reproduction URL** [link] **Describe your issue** A custom ring to text input with arbritrary value…

### CASE-10935 · `peer-focus:peer-valid:*` generates wrong output
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: opera, macos, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.2.2 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 11.0.0 ### What version of Node.js are you using? v14.16.1 ### What browser are you using? N/A ### What operating system are you using? macOS ### Reproduction repository [link] ### Describe your issue While trying to apply `peer-focus:peer-valid:border-blue-500` to avoid a precedence clash with `peer-invalid:border-red-500`, it turns out that the former generates the following input, which is invalid: ```css .peer:focus:valid ~ ~…

### CASE-10967 · Nested `@user` inside `@user`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: tailwind
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v4.1.11 **Reproduction URL** [link] **Describe your issue** For the purpose of reusing, I declare a `@user` for `@user`. In another custom variant `@user`, I would like to use that `supports-scroll-state` variant to add fallback. I expected the nested `@user` would be replaced with the definition of the corresponding `@user`, but instead, it was kept as-is.…

### CASE-10979 · Arbitrary value for `anchor-name` outputs as custom variable instead of identifier value
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, macos, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** `v3.4.4` **What build tool (or framework if it abstracts the build tool) are you using?** `"next": "^14.2.3"` **What version of Node.js are you using?** `v18.15.0` **What browser are you using?** N/A **What operating system are you using?** macOS **Reproduction URL** [link] ```html <div class="[anchor-name:--foo]"></div> <div…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-10918 · Min-h-[50vh] arbitrary values on min-height not working
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, macos, tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** v3.0.12 **What build tool (or framework if it abstracts the build tool) are you using?** webpack 5.28.0 **What version of Node.js are you using?** v14.0.0 **What browser are you using?** N/A **What operating system are you using?** macOS **Describe your issue** It seems vh arbitrary values do not work at all on min-height.

### CASE-10937 · Grid utility class not applying properly at different breakpoints in NextJS project's production build (Vercel deploy)
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: firefox, opera, windows, tailwind, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? Next.js 10.2.2 ### What version of Node.js are you using? v14.15.3 ### What browser are you using? Firefox ### What operating system are you using? Windows ### Reproduction repository [link] ### Describe your issue Hi all, I encountered a weird bug after I deployed my website through Vercel's deployment platform: the grid utility class is no longer functioning. To be clear, in localhost:3000, my app renders properly the grid layout and adapts to breakpoints…

### CASE-10954 · sr-only elements are affecting spacing
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍5 💬4 · closed
- **Excerpt**: ### Describe the problem: When using spacing utilities, eg `space-x-4` to lay out elements, `sr-only` elements affect the spacing flow, when in my opinion they should not as they are, by definition, not visible. ### Link to a minimal reproduction: [link] There is a space before the "Visible item 1" (see the blue background not hitting the side of the viewport) where there should not be in my opinion.

### CASE-10962 · [Bug] Using emoji as a prefix/separator - 1.0.0-beta.3
- **Principles**: P-A1, P-A4, P-G3 · **Env**: tailwind, mobile, desktop
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- 👋 Hey, thanks for taking an interest in Tailwind! Please only open an issue here if you have a bug to report or a feature proposal you'd like to discuss. If you need help, have questions about best practices, or want to start a discussion about anything else related to Tailwind, open an issue on the `tailwindcss/discuss` repo instead: [link] --> Noticed with that with the `1.0.0-beta.3` version emojies as a prefix/separator output got changed. Previously in `0.7.x` with config: ``` { screens: { mobile: '60em', tablet: '80em', desktop: '120em', }, modules: { appearance: ['responsive'],…

### CASE-10968 · Invalid CSS causes entire page to crash with STATUS_BREAKPOINT
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2, P-D1, P-D2, P-D3 · **Env**: chrome, opera, windows, tailwind, react, vite, webview
- **Signals**: 👍6 💬3 · closed · labels: browser bug
- **Excerpt**: **What version of Tailwind CSS are you using?** v4.0.17 **What build tool (or framework if it abstracts the build tool) are you using?** postcss 8.5.3, React 18.3.1, Vite 6.0.3 **What version of Node.js are you using?** v22.0.0 **What browser are you using?** Chrome, Vivaldi, WebView2 (Tauri app) **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** I'm working with Tauri, Vite, React, and tailwindcss (with postcss transformer defined in vite.config.js). One specific class with 3 modifiers (`file:disabled:dark:bg-green-500`) generates some…

### CASE-10986 · @user on dynamic (min-*, max-*) breakpoints
- **Principles**: P-A1, P-A4, P-G3 · **Env**: opera, windows, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 3.2.4 **What build tool (or framework if it abstracts the build tool) are you using?** postcss-cli 10.0.0 with postcss-import and tailwindcss/nesting **What version of Node.js are you using?** 16.16 **What browser are you using?** N/A **What operating system are you using?** Windows **Reproduction URL** [link] **Describe your issue** Hi! Is there any way to get…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-10922 · the `purge.transform` API works only if the file extension (given in the keys of the object) has the period character
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- Please provide all of the information requested below. We're a small team and without all of this information it's not possible for us to help and your bug report will be closed. --> **What version of Tailwind CSS are you using?** 2.2.19 **What build tool (or framework if it abstracts the build tool) are you using?** None. I'm using tailwind CLI directly. **What version of Node.js are you using?** 12.22.6 **What browser are you using?** Doesn't matter for this issue. **What operating system are you using?** Doesn't matter for this issue. **Reproduction URL** Sorry but, as far as I know,…

### CASE-10963 · Cannot create transition property with multiple values
- **Principles**: P-D1, P-D2, P-D3 · **Env**: tailwind, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- 👋 Hey, thanks for taking an interest in Tailwind! Please only open an issue here if you have a bug to report or a feature proposal you'd like to discuss. If you need help, have questions about best practices, or want to start a discussion about anything else related to Tailwind, open an issue on the `tailwindcss/discuss` repo instead: [link] --> When creating a plugin and adding a multi-value transition property, webpack stops compiling with exception ```js addComponents({ '.button': { transition: 'background-color 150ms ease-in-out, color 150ms ease-in-out, box-shadow: 150ms…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-10940 · after installing tailwind in vue 3 + vite + typescript the initial project load is extremely slow[Bug]:
- **Principles**: P-F5, P-H3 · **Env**: opera, windows, tailwind, vue, vite, typescript
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### What version of Tailwind CSS are you using? v^2.1.2 ### What build tool (or framework if it abstracts the build tool) are you using? postcss: ^8.2.15 and vite: ^2.2.3, ### What version of Node.js are you using? v15.0.0 ### What browser are you using? Brave ### What operating system are you using? Windows 10 ### Reproduction repository [link] ### Describe your issue I instaled tailwind to vue 3, but after `import './assets/styles/index.css';` to file main.ts, the proyecto load is very slow and the inspection of code in borwser it freezes. I activated de `mode: jit` but this not inyect the…

### CASE-10952 · Javascript heap out of memory running webpack-dev-server
- **Principles**: P-F5, P-H3 · **Env**: webpack, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the problem: I am running a rails 6.0 project with the following dependencies: 1. tailwindcss 2.0.2 2. @user/webpacker 5.2.1 3. postcss 7.0.32 4. postcss-import 12.0.1 5. postcss-nested 4.2.3. 6. webpack-dev-server 3.11.0 When I run webpack-dev-server, I get a Javascript heap out of memory error This particular project imports many other CSS files. ### CSS that causes the memory leak In this case, the selector .flex is causing webpack-dev-server to hang without any error message getting displayed. ```css .user-block__container .flex .or { @user m-5 text-lg text-center…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-10950 · what is x-state and x-description?
- **Principles**: P-B1, P-B2, P-B3, P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: ### Describe the problem: <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> > Hello there! I digged into the tailwind ui select boxed - to get this work with my livewire alpinejs project. There are some strange attributes in there: > > ``` <span x-state:on="Selected" x-state:off="Not Selected" :class="{ 'font-semibold': value === 0, 'font-normal': !(value === 0) }" class="block truncate font-normal"> Wade Cooper </span> ``` > I can not find out what this x-state:on is and how this should be connected with the whole…

### CASE-10958 · Default line height broken
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hi, I am trying to set the default line height like shown [in the docs]([link]) ## tailwind.config.js ```javascript fontSize: { test: ['16px', '24px'], }, ``` ## result ```css .text-test { font-size: 16px; font-size: 24px; } ``` ![image]([link])

### CASE-10960 · @user !important doesn't work
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: From the docs: >If you'd like to `@user` an existing class and make it !important, simply add !important to the end of the declaration: > ```css > .btn { > @user font-bold py-2 px-4 rounded !important; > } > ``` My code: ```css .swal2-modal { @user rounded-xl !important; } ``` An error occurs during the SCSS compilation ``` ERROR in ./src/scss/app.scss ([..]/src/scss/app.scss) Module build failed (from ./node_modules/sass-loader/lib/loader.js): @user rounded-xl !important; ^ Invalid CSS after "...pply rounded-xl": expected "}", was "!important;" in [..]/src/scss/_swal.scss (line 10, column…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-10957 · 2 issues report
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍4 💬4 · closed
- **Excerpt**: Hello, Casper (the default theme for Ghost) is so fast that a page almost loads in 1 second (1.3 sec on 4G to be precise). At the moment I'm using the Liebling theme which works fine with Tailwind. But if I want to use Casper to have a superfast website, I can't because Tailwind and Casper don't interact correctly. Another bug I found was that some speedtest website (yellowlab.tools) indicates that Tailwind loads twice with Liebling but Casper loads it only once though. So the speedtest tool is alright. And that may be contribute to the slowness of my site with Liebling (2.7 seconds on 4G,…

### CASE-10959 · [bug]: borderStyle cannot be overridden
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: the `borderStyle` property cannot be overridden as the util returns with just the static properties/theme - [link] ```js // config borderStyle: { solid: "solid", dashed: "dashed" }, // or borderStyle: false ``` so, even when doing this, tailwind generates all the border styles and doesn't pick from the theme config.

### CASE-10982 · breaks `editor.defaultColorDecorators` in VS Code 1.78
- **Principles**: P-C1, P-C2, P-C3 · **Env**: opera, macos, tailwind
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: **What version of Tailwind CSS IntelliSense are you using?** 0.9.11 **What version of Tailwind CSS are you using?** 3.3.1 **What package manager are you using?** npm **What operating system are you using?** macOS **Tailwind config** Lmk if this is really needed. Minimal config for reproduction: ```js /** @user {import('tailwindcss').Config} */ module.exports = { content: [/* fill me in */], theme: { extend: { colors: { example: '#ff0000', } } }, } ``` **VS Code settings** Lmk if this is really needed. **Reproduction URL** Lmk if you have a recommended way of creating cloud reproductions for…

### CASE-10987 · cssnano removes empty custom properties
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: **I opened also a bug report on the cssnano repo:** [link] ### Describe the bug In TailwindCSS, many custom properties are set, like `--tw-grayscale: ;` A class like `.blur` sets following CSS: ```css .blur { --tw-blur: blur(8px); filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); } ``` The problem is, if the class `.grayscale` is not used (who set a value, just like blur) the custom property gets removed and the class `blur` doesn't work anymore.

### CASE-10995 · Purge does not purge ALL unused classes
- **Principles**: P-C1, P-C2, P-C3 · **Env**: react, tailwind
- **Signals**: 👍7 💬3 · closed
- **Excerpt**: ### Describe the problem: <!-- Explain the behavior you're seeing that you think is a bug, and explain how you think things should behave instead. --> After setting up a new project (Create React App) with TailwindCSS with Purge enabled, running `tailwind build ...` does not purge **ALL** unused classes (basically none should be used since it's a brand new CRA application). Config file is as follow: ```js module.exports = { prefix: '', future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true }, purge: { enabled: true, content: ['**/*.jsx', '**/*.js'] }, theme: {} } ```…

### CASE-10996 · TailwindCSS 1.8 doesn't purge
- **Principles**: P-C1, P-C2, P-C3 · **Env**: tailwind
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: ### Describe the problem: TailwindCSS 1.8 fails to purge CSS. No layers-related experimental flags were set. The config in both cases as follows: ``` // tailwind.config.js module.exports = { theme: { fontFamily: { display: ['Gilroy', 'sans-serif'], body: ['Gilroy', 'sans-serif'], }, extend: { colors: { fsbg: '#f6f7fa', fsdgrey: '[ref]', fsgrey: '#767d8c', fsblack: '[ref]', fsblue: '[ref]' }, screens: { 'print': {'raw': 'print'}, // => @user print { ... } } } }, plugins: [ require('postcss'), require('@user/custom-forms'), require('autoprefixer'), ], experimental: { uniformColorPalette: true,…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-10964 · :hover shadow
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: it would be most excellent if this would be possible `<div class="max-w-sm rounded overflow-hidden shadow hover:shadow-md">`

### CASE-10997 · Add overflow-x-hidden and overflow-y-hidden
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: They're useful because sometimes you want `overflow-x-hidden overflow-y-auto` (the default `overflow-x` when `overflow-y` is set to `auto` is also `auto`).

