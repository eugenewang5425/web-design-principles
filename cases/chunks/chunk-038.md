# Case Chunk 038 — Round 38

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-4701 · Breaking change between 2.3.3 and 2.3.4
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Please have a look at this Codepen: <[link]> This loads version 2.3.3 of AlpineJS and defines `x-data` with a property called `name` which is assigned the empty string. Then it renders an input element which is disabled by default but becomes enabled by checking whether name is assigned a value. The output: ```html <div x-data='{ name: "" }'> <input :disabled="name"> </div> ``` All is fine. Now when I set the version to 2.x.x (which loads 2.3.4, no clue why actually setting it to 2.3.4 doesn’t) the output suddenly becomes this: ```html <div x-data='{ name: "" }'> <input disabled=""…

### CASE-4702 · Wrong option selected on init (x-for usage in select)
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍2 💬10 · closed
- **Excerpt**: There are some issues with which option is selected when select's options are generated with `x-for`. See pen for demo. Pen: [link] ## Expected behavior Both selects should display "cucumbers" after the page loads and Alpine initiates component. ## Observed behavior The select with a static option (after `x-for`'d options) shows the static option as selected. Other one shows the first available option as selected. ## Notes See how selects get correct option selected when you cause any changes in component data. Maybe this issue can be solved by triggering a forced update after selects with…

### CASE-4712 · x-init doesn't run after liveware rerender
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍3 💬8 · closed
- **Excerpt**: I'm trying to use `x-init` property to load `imask` on some input fields. It works on first load but stop working after a livewire refresh. Is it a bug in alpine? ```html <x-input-row name="phone_number" x-data="{ mask: '(00)000000000' }" x-init="IMask($refs.input, { mask })"> <label for="phone_number">Telefone*</label> <input wire:model="phone_number" id="phone_number" name="phone_number" type="tel" placeholder="(DD)999999999" autocorrect="off" autocomplete="off" x-ref="input"/> </x-input-row> ```

### CASE-4716 · TypeError: proxy set handler returned false for property
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I'm unsure if this will be fixed, or ever could be fixed without a huge refactor. But I thought I'd just check to see if it's anything I'm doing wrong. I want to store a slider in the proxy so I can access it for further functions. In this example I want to select the next slide when I fire a click `@user="nextSlide()"`. To do this I've stored the slider as data. However, it's returning the error `TypeError: proxy set handler returned false for property`. The code is: ``` let flkty = new Flickity(el, { wrapAround: true, prevNextButtons: false, pageDots: false, setGallerySize: el ==…

### CASE-4717 · x-text stops reacting to data changes after Livewire morph (data stays correct, binding goes dead)
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: ### Description I'm seeing an intermittent bug where an `x-text`-bound element stops reacting to changes in its own component's data after a Livewire morph, while the underlying reactive data itself remains correct. It happens inside a Livewire v3 app, so the DOM updates are driven by Livewire's `morph2()` (which wraps `Alpine.morph()` + `Alpine.transaction()`), not `x-if`/`x-for`. Setup: a small Alpine component (`x-data`) with a `select(id, value)` method that sets `selectedId`/`selectedValue`, and a `<div x-text="selectedValue != null ? selectedValue : placeholder">` inside a `<button>`.…

### CASE-4730 · Duplicate event handlers being added to elements with ids during LiveView update.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I've been running into a weird bug with event handlers being added more than once to elements when using AlpineJS with LiveView. This is a fairly minimal demonstration: ``` <script> function add_message(dispatch) { event.preventDefault() let message = document.getElementById("message").value; dispatch('add_message', {message: message}); } </script> <ul id="to-input-div" x-data="{}" phx-hook="PushEvent" phx-push-event="add_message"> <%= for message <- @user do %> <li><%= message %></li> <% end %> <input id="message" x-on:keydown.enter="add_message($dispatch)"> <button…

### CASE-4736 · Shorthand syntax inside Vue
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: It is possible to run Alpine inside an element that is managed by Vue - and it will work fine using the long-form syntax for binding and events (`x-on:click` instead of `@user`). However, the short-form doesn't work, understandably as Vue would be typically handling these attributes being used. I'm not super familiar with the Vue internals myself, but would it be possible to make Alpine take precedence for these attributes being used when inside an element managed by Vue that is not itself a template (either a single file component or using `inline-template`) as I'm not aware of Vue doing…

### CASE-4738 · $watch array output the same value between old and new.
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: maybe i am doing it wrong. doing $watch on an array and edit the input value in loop, (console) output the same value between old and new. code: [link] thank you. edit: turn out deep watch give wrong oldvalue. even example from documentation are wrong. tested from 3.8 to 3.10

### CASE-4741 · Binding a Livewire model to Alpine fails in 2.8.2?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: A few days ago I upgraded Alpine to the latest version. I was running into a bug where having an Alpine component inside another component had some errors. 2.8.2 fixed that. We were on 2.7.3 before. I just found this upgrade breaks some functionality of a component we have. This is what happens in this component: - It has 3 fields: quote.quantity, quote.price, quote.subtotal. They are all input fields in the rendered views. - In `updated()` we check if the field is `quantity` or `price` and if it is, we update the `subtotal`. We have a custom made currency input component that renders the…

### CASE-4750 · [Question] : Error Selection when uses type="number">
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: i got error when use input type="number" error message : Uncaught DOMException: Failed to execute 'setSelectionRange' on 'HTMLInputElement': The input element's type ('number') does not support selection. my code : <div x-data="form()"> <input type="number" class="form-control" name="price" x-model="price"> </div> <script> function form() { return { price : 0 } } </script> nb : i am use latest version

### CASE-4751 · [Bug?] Javascript confirm dialog cancel not working
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ```html <form action="/documents/1" method="POST" x-data onclick="return confirm('Move to trash?')" x-on:click="return confirm('Move to trash?')" > <button type="submit">Delete</button> </form> ``` The OG `onclick=""` is working as expected. OK continues the request, and cancel aborts the request. The Alpine version however always continues the request, on both OK and cancel. Might be me doing something wrong, but I can't seem to get it working. Any ideas?

### CASE-4772 · [cacheComponents] Activity component route preservation causes significant breakage in application logic, UI behavior and E2E tests
- **Principles**: P-G4, P-E3 · **Env**: chromium 3
- **Signals**: 👍26 💬80 · open · labels: linear: next/Cache Components
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce ### This reproduction demonstrates **3** issues caused by Activity-component–driven route preservation when `cacheComponents: true` is enabled 1. Clone the reproduction repo linked above. 2. Install dependencies: npm install npx playwright install chromium 3. Start the dev server: npm run dev 4. Test the following behaviors in the browser: **A. Dropdown stays open** - On the home page, open the dropdown once. In this reproduction, the dropdown’s default close-on-select behavior is intentionally prevented because of…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-4703 · x-data valid JSON not working
- **Principles**: P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: Not an issue, just a general question. `<div x-data="[JSON data object]">...</div>` Why wouldn't the below work if it's valid JSON? I get an `Uncaught (in promise) SyntaxError: Unexpected token ')'` error in the console. `x-data="{"liningweb-regular":{"className":".font-liningweb-regular"},"liningweb-oblique":{"className":".font-liningweb-oblique"}}"`

### CASE-4770 · [NEXT-1192] Failed to find font override - next/font/google
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, next.js, react
- **Signals**: 👍46 💬82 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Mon Jan 30 20:38:37 PST 2023; root:xnu-8792.81.3~2/RELEASE_ARM64_T6000 Binaries: Node: 18.14.0 npm: 9.3.1 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.2.5-canary.3 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font) ### Link to the code that reproduces…

### CASE-4771 · Error 'Failed to fetch `Noto Sans JP` from Google Fonts.'
- **Principles**: P-B1, P-B2, P-B3 · **Env**: opera, linux, ubuntu, next.js, react
- **Signals**: 👍42 💬82 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: linux Arch: x64 Version: Ubuntu 20.04.0 LTS Fri Jan 20 2023 09:56:57 GMT+0000 (Greenwich Mean Time) Binaries: Node: 16.14.2 npm: 7.17.0 Yarn: 1.22.19 pnpm: 7.13.6 Relevant packages: next: 13.1.3 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 ### Which area(s) of Next.js are affected? (leave empty if unsure) Font optimization (@user/font) ### Link to the code that reproduces this issue [link] ### To Reproduce To…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-4704 · How to show list of all `$refs`?
- **Principles**: P-A3, P-H1, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬10 · closed
- **Excerpt**: I'm working on an element that is designated with a `x-ref` attribute, but I seem to be unable to access it: ```php <div x-data="imageUploader()" > <input class="m-4 p-6 block bg-transparent rounded border-dashed border-4 border-gray-400" type="text" :name="fieldName" x-ref="fieldName + '-file'" x-on:dragover.stop.prevent="" x-on:drop.stop.prevent="captureFile" x-on:click="showFileUploadDialogue()" :style="'background-image: url(' + imagePreviewData + ')'" > </div> ``` ```js function imageUploader() { return { // ... processFiles: function (event) { console.log(this.$refs, this.fieldName); if…

### CASE-4726 · Prettier and VSCode failing with `@` shorthand syntax for `x-on:` when using Astro
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I'm using Astro v5 btw. I wished to use shorthand syntax for `x-on:` but I can't because VS Code syntax highlighting goes weird, and sometimes Prettier fails to format the file. The code still works on the live site with Alpine.js. ## Simple string, Shorthand ❌ VS Code ✅ Prettier ✅ Alpine <img width="255" alt="Image" src="[link] /> ## Simple string (in or not in JS block), Longhand ✅ VS Code ✅ Prettier ✅ Alpine <img width="287" alt="Image" src="[link] /> <img width="313" alt="Image" src="[link] /> ## Template literal, Shorthand ❌ VS Code ❌ Prettier ✅ Alpine <img width="271" alt="Image"…

### CASE-4734 · x-html causing a flicker / blink issue when any state is updated
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍2 💬5 · closed
- **Excerpt**: I'm rendering many things using `x-html`, but when I change any property on the state of the component, not only when the property directly being rendered on the `x-html` attribute, a render of the html is triggered and this makes the content blink or flicker. In particular I'm rendering images inside the html and the blinking is very noticeable and distracting. Shouldn't the `x-html` trigger an update only when its contents have actually updated? Thanks!

### CASE-4743 · Using x-text inside x-spread doesn't work. Throws error!
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: JS Code: ``` loginForm = function() { return { errors: {}, errorsMessage:{ ['x-text']() { return this.errors.message; }, ['x-show']() { return this.errors.message != ''; } } } } ``` HTML: ``` <div x-spread="errorsMessage"></div> ``` throws this error: ![image]([link]) If I remove the `[x-text]`, it works fine.

### CASE-4745 · @user is not working in another x-data
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: question
- **Excerpt**: ![image]([link])

### CASE-4763 · Custom Cache-Control response header for `/_next/image`
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍99 💬113 · closed
- **Excerpt**: <!-- NOTE: This template is not optional. If you remove it or leave out sections there is a high likelihood it will be moved to the GitHub Discussions "Help" section --> # Bug report ## Describe the bug When requesting `/_next/image(.*)`, I'm getting this Response header: ``` Cache-Control: public, max-age=60 ``` And it's fine... What's not fine is that I'm getting the same exact Response headers even when I use custom headers in `next.config.js`, i.e.: ```js module.exports = { async headers() { return [ { // This works, and returns appropriate Response headers: source: '/(.*).jpg', headers:…

### CASE-4775 · next/image "url" parameter is valid but upstream response is invalid
- **Principles**: P-A3, P-H1 · **Env**: opera, windows, next.js, react, typescript
- **Signals**: 👍31 💬76 · closed · labels: Image (next/image)/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.15.0 npm: 9.5.0 Yarn: N/A pnpm: N/A Relevant Packages: next: 13.4.14-canary.0 eslint-config-next: 13.4.7 react: 18.2.0 react-dom: 18.2.0 typescript: 5.1.3 Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Image optimization (next/image, next/legacy/image) ### Link to the code that reproduces this issue or a replay…

### CASE-4780 · Image warning issue - If you use CSS to change the size of your image, also include the styles 'width: "auto" or 'height: "auto"' to maintain the aspect ratio
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍22 💬65 · open · labels: bug/Image (next/image)
- **Excerpt**: ### Link to the code that reproduces this issue demo - [link] mvp - [link] mvp codesandbox - [link] github - [link] ### To Reproduce 1. Paste this code in page.tsx ```tsx <Image className="cursor-pointer max-h-[32px] w-auto h-auto" src={"/23_store-dark.png"} alt="logo" width={300} height={32} priority /> ``` See this ![image]([link] framework]/assets/39565703/58210a4d-52e1-485f-8974-604cf4caaec2) I already use width auto and height auto ### Current vs. Expected behavior I don't want to see useless warnings in my console Now I see useless warning that impossible to fix (I tried add some…

### CASE-4783 · next image optimization significantly slower in next after 10.0.7
- **Principles**: P-A3, P-H1 · **Env**: opera, linux, next.js
- **Signals**: 👍89 💬60 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.1.3-canary-0 ### What version of Node.js are you using? 12.12 ### What browser are you using? any ### What operating system are you using? linux server ### How are you deploying your application? next start ### Describe the Bug The latest canary releases seem to have fixed the image optimization memory consumption, however the initial image optimization is noticeably slower than the previous version (10.0.7) and can take seconds to populate images on the page. It seems to be exacerbated by loading more images in quick succession as well. ###…

### CASE-4786 · Firebase example: couldn't find a `pages` directory
- **Principles**: P-A3, P-H1 · **Env**: macos, next.js
- **Signals**: 👍35 💬58 · closed · labels: good first issue/examples
- **Excerpt**: # Bug report My project has a custom structure but so far it worked pretty well. Since I updated to v9.0.7 I get this error: `Error: > Couldn't find a `pages` directory. Please create one under the project root at Object.findPagesDir [...] ` So far running `next src/app` worked just fine. Is there anything different I should do now? ## Screenshot ![image]([link]) ## System information - OS: [macOS] - Version of Next.js: [9.0.7]

### CASE-4791 · React server mismatches: Prop `className` did not match.
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react, next.js
- **Signals**: 👍14 💬57 · closed · labels: good first issue
- **Excerpt**: # Bug report ## Describe the bug After upgrading from Next.js `9.0.5` to `9.2.2` we noticed that we are getting server mismatches for a lot of our components which never errored before. We also tried other versions (e.g. `9.1.x`, `9.2.x`, `9.3.x`) and all of them have the same problem. ## To Reproduce Please use this repository with easy reproducible error - [link] The code of the example component is open-source UI library and you can find it here - [link] ## Screenshots ![image]([link])

### CASE-4796 · Preact signals don't work with Next 13 appDir
- **Principles**: P-A3, P-H1 · **Env**: react, next.js
- **Signals**: 👍29 💬54 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Any enviroment ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce Just try to launch and look to the error ### Describe the Bug React signals don't work with next 13 appDir, if there are at least two client side components on the page. ![image]([link]) ``` Warning: Invalid hook call. Hooks can only be called inside of the body of a function…

### CASE-4797 · 307 redirect loop when using locale together with middleware in 13.5.1
- **Principles**: P-A3, P-H1 · **Env**: next.js
- **Signals**: 👍53 💬52 · closed · labels: bug/Internationalization (i18n)/linear: next/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. set `defaultLocale` to something different than `preferredLocale` (from header `accept-language`) 2. npm run dev 3. access `[link] or `[link] or `[link] or with trailing slash ### Current vs. Expected behavior <img width="1904" alt="image" src="[link] framework]/assets/60544162/f3ae5e4f-5f9c-4fd2-9e73-06f878725bf1"> Currently, Next.js 13.5.1 will stuck in 307 loop if: - turn on `localeDetection` (which is enabled by default) - set `defaultLocale` different from user's `preferredLocale` - use a middleware Expected…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-4705 · Dynamic modal with Alpine.js and Livewire
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A4 · **Env**: unspecified
- **Signals**: 👍3 💬10 · closed
- **Excerpt**: Hi all I am trying to create a simple modal using Alpine.js. I have a simple foreach loop in my Blade view: ```html @user($records as $record) <div x-data="{ open: false }"> <button x-on:click="open = true">Edit Record</button> <div x-show="open"> <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"> <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" x-on:click="open = false"></div> <div class="modal-container bg-white w-5/6 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto cursor-auto"> <div class="modal-close absolute top-0…

### CASE-4713 · Collapse & Expand Text: Toggle Text and get height
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed · labels: question
- **Excerpt**: It works but there are two problems: 1.) How can I get the height of div with alpine.js? `max-height: 9999px` is not optimal. 2.) Depending on whether the entire text is visible or not, the text should adapt. This does not work with `<span x-text =" {'Read less': expanded, 'Read more':! Expanded} "> </span>` <div x-data="{ expanded: false }"> <?php /* .max-h-40 { max-height: 40vh;}.max-h-9999 { max-height: 9999px;} */ ?> <div class="relative overflow-hidden transition-all ease-out duration-300" x-bind:class="{'max-h-9999': expanded, 'max-h-40': !expanded}"> <p>Lorem ipsum dolor sit amet,…

### CASE-4722 · Separating the show trigger from the target?
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: Hi, Not sure if this is the best place to be asking but couldn't find anywhere else that seems good to discuss Alpine. I've just started and playing and thanks to @user I've got my sliding panel working. [link] (His codepen, not mine) I've extended it a little further and have extracted it into a function so I could also add classes to the body. ```javascript function panel() { return { show: false, open() { this.show = true; if (!body.classList.contains('overflow-hidden')) { body.classList.add('overflow-hidden') }; }, close() { this.show = false; if…

### CASE-4732 · Question: Clearing html data before load or stopping flash as content changes, or show 'loading' until html is downloaded in modal
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I am currently loading in content (urls) in twig via fetch like so: ``` <button @user="showModal = !showModal | fetch('{{ entry.url }}', { method: 'GET', headers: { 'X-Requested-With': 'XMLHttpRequest', }, }).then(res => res.text()).then(text => { html = text })" class="flex justify-center animate-grow-on-hover--small" > ``` This loads into a modal as follows: ``` <main x-data="{showModal: false, html: ''}"> <div id="bgMask" class="absolute z-0 top-0 right-0 w-full h-full bg-black opacity-75" x-show="showModal"></div> <div id="modal"> <div class="fixed overflow-scroll mx-auto inset-x-0…

### CASE-4754 · Alpine doesn't work without initialized self/parent element
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: unspecified
- **Signals**: 👍4 💬1 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/3218 <div type='discussions-op-text'> <sup>Originally posted by **tinyoverflow** October 20, 2022</sup> Hello, I've noticed, that when trying to use Alpine events, it does not work unless the element itself or the parent has been initialized somehow. As far as I can tell, this behaviour is not documented. <details> <summary>Example file</summary> ```html <!doctype html> <html> <head> <title>Test</title> <script defer src="[link]></script> </head> <body x-init="console.log('init body')"> <button @user="console.log('test')">Test</button> <button…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-4706 · Keyed x-for with seems to not be robust against adding/removing elements
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: opera, chrome, macos, windows
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: ### Alpine.js version v3.15.12 ### Browser and operating system Safafi/Vivaldi (chrome) on macOS, Chrome on Windows ### Describe the issue you're experiencing I am trying to implement virtual scrolling on a large photo album. My approach is to make a div sized to the height of the full album, and put another div inside that with its top set to slightly above the window scroll region and render a subrange of the images inside that. Or in slightly simplified code: ``` <div :style="{ height: height }"> <div :style="{ top: top }" @user.window="UpdateLayout()"> <template x-for="i in visible_end -…

### CASE-4728 · When using browser history, the x-model attribute doesn't keep the state in sync with the input element.
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, firefox, safari
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/2505 <div type='discussions-op-text'> <sup>Originally posted by **emil-nasso** December 16, 2021</sup> I have a page with a search-bar that is handled using alpine.js. If I write something in the input-field, navigate away from the page and then get back to the page using the "back"-feature in my browser, I will still see my old input in the input field by the components state doesn't reflect that. Here is a simplified reproduction of this problem: [link] It seems to be working this way in chrome but firefox and safari doesn't repopulate the form when I…

### CASE-4731 · flatMap usage cause issue on Edge
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: There is a `flatMap` use case in `getXAttrs` function which cause Edge to stop working on current master. The use case implemented when Caleb was working on `x-bind`. So i think it is still `WIP`. Just want to put it here to remind.

### CASE-4737 · Focus plugin .noscroll modifier iOS issues
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: ios
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/3037 <div type='discussions-op-text'> <sup>Originally posted by **tomblanchard** July 13, 2022</sup> It seems that the focus plugin .noscroll modifier no longer prevents body scrolling on iOS - I think this is a new bug from one of the recent 15.x iOS updates because it previously worked flawlessly. Here's a screencast taken from the Alpine docs example on latest iOS version (15.5): [link] I've looked into this and it's related to the [disableScrolling]([link]]/blob/main/packages/focus/src/index.js#L185) function, it's strategy to prevent body scrolling is…

### CASE-4742 · Video Object plays without playing...
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, chrome
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I have the following: ```html <div x-show="['video/mp4', 'video/ogg', 'video/webm'].includes($store.page.pageDatum.fileType)" class="col-span-3 aspect-w-16 aspect-h-9"> <video class="max-h-full w-full" controls x-bind:src="$store.page.pageDatum.fileLink" x-bind:type="$store.page.pageDatum.fileType"></video> </div> ``` However, the player shows up, but its not playing as autoplay is off, but it is playing in the background. Could it be playing in some sort of shadow dom? Does the same thing in firefox and chrome. Or am I doing something wrong?

### CASE-4747 · MacOS Safari <img/> :src binding not working
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: safari, safari 13, chrome, macos
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: System: MacOS 10.14.6 Safari 13.1.1 When doing <img :src="variableName"/> on Safari and changing variableName value with JS, value gets updated, but Safari doesnt change the image (Chrome and FF does). Interesting part is that when trying to change the image via: `document.getElementById('img_tag_id').src = variableName;` it works OK.....

### CASE-4749 · Add SVGElement.contains() polyfill to IE build
- **Principles**: P-G1, P-G2, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Internet Explorer only supports `.contains` for HTML elements, not for SVG. So the following fails, but works if you wrap the SVGs in spans and put the directive on those: ```html <button x-data="{ isOpen: false }"> <svg x-show="!isOpen"><!-- open icon --></svg> <svg x-show="isOpen"><!-- close icon --></svg> </button> ```

### CASE-4756 · Warning: Prop className did not match.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, next.js
- **Signals**: 👍780 💬273 · closed · labels: good first issue
- **Excerpt**: # Examples bug report ## Example name [with-styled-components]([link]) ## Describe the bug Also posted here: [ref] Using `css` prop introduced with styled-components v4 causes `Warning: Prop className did not match.`. ## To Reproduce Add any HTML element with `css` prop. ## Expected behavior Correctly styled rendering on the server side without any warnings. ## Screenshots ![57497472-7b657c00-72e0-11e9-84c5-e7e5fa0d351c]([link]) ## System information - OS: Windows - Chrome - Version of Next.js: 8.1.0 ## Additional context Here is an example I created to demonstrate the issue: [link] Open this…

### CASE-4757 · [NEXT-841] FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: chrome, safari, opera, next.js
- **Signals**: 👍127 💬191 · closed · labels: Webpack/linear: next
- **Excerpt**: ### What version of Next.js are you using? 12.0.7 ### What version of Node.js are you using? 16.6.2 ### What browser are you using? Chrome / safari ### What operating system are you using? Mac os ### How are you deploying your application? other ### Describe the Bug We have a monorepo with nx wherein we are using next for ssr We have been on next 11 and wanted to move to the next 12 with swc On doing so and making the neccessary changes, our app crashes with We have tried adding more memory but we feel that the issue lies elsewhere ``` --- Last few GCs ---> [66122:0x7fe502d00000] 544670 ms:…

### CASE-4759 · Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports"
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, opera, windows, next.js, react
- **Signals**: 👍46 💬174 · closed · labels: bug/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 18.15.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.3.5-canary.6 eslint-config-next: 13.3.2 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) _No response_ ### Link to the code that reproduces this issue sorry i can't upload because my project contains localhost database connections ### To Reproduce On…

### CASE-4760 · Next 9.5.1 out of memory after some hot reloads
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, next.js
- **Signals**: 👍177 💬144 · closed · labels: please add a complete reproduction
- **Excerpt**: # Bug report ## Describe the bug Since updating to 9.5.x (from 9.4.x), i get an out of memory error after 10 something hot reloads: `FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory` it did rarely happen in 9.4.1, but it happens very consistantly in 9.5.x ## To Reproduce thats probably tricky. it happens on big projects and might be related to some bug in the hot reload / rebuild. Maybe it happens when there are some import circles? ## Expected behavior nextjs should not go out-of-memory ## System information - OS:macOS - Browser: chrome - Version of Next.js:…

### CASE-4765 · Not scroll to top after changing route
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, safari, macos, ios, next.js
- **Signals**: 👍46 💬96 · closed · labels: Linking and Navigating/linear: next/locked
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? v15.9.0 ### What browser are you using? Chrome ### What operating system are you using? macOS ### How are you deploying your application? next start ### Describe the Bug I have two pages, each one contains lazy render components. After changing route by clicking <Link scroll={true}>. The page doesn't scroll to top. This happens on Chrome IOS (work well on safari IOS) ### Expected Behavior It should scroll to top after changing page ### To Reproduce I have created a demo project here: [[link]](url) 1.…

### CASE-4766 · Fast Refresh had to perform a full reload
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome 102, next.js, react
- **Signals**: 👍2 💬93 · closed · labels: bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ![image]([link]) ### What browser are you using? (if relevant) Google Chrome 102.0.5005.115 ### How are you deploying your application? (if relevant) next run dev ### Describe the Bug When data is sent to the service and a context that handles the entire application is updated, the system does not change the page but reloads itself, deleting everything in the provider (react) ### Expected Behavior I hope you go to the next screen which is indicated by the…

### CASE-4767 · [Example needed] i18n with Next.js 13 and `app` directory
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, windows, next.js, react
- **Signals**: 👍25 💬92 · closed · labels: examples
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 16.15.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.1-canary.0 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome ### How are you deploying your application? (if relevant) Local ### Describe the Bug Setting up i18n test in next.config as follows: ``` experimental: { appDir: true }, i18n: { locales:…

### CASE-4769 · [NEXT-684] Fast-refresh for CSS files is not working in Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, opera, next.js, react
- **Signals**: 👍56 💬85 · closed · labels: linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ``` Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.1.0: Sun Oct 9 20:15:09 PDT 2022; root:xnu-8792.41.9~2/RELEASE_ARM64_T6000 Binaries: Node: 19.1.0 npm: 8.19.3 Yarn: 1.22.19 pnpm: 7.14.2 Relevant packages: next: 13.0.6-canary.1 eslint-config-next: 13.0.5 react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) _No response_ ### How are you deploying your application? (if relevant) _No response_ ###…

### CASE-4773 · Server side locale always default in dynamic routes when a middleware is present
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react, typescript
- **Signals**: 👍30 💬76 · closed · labels: Linking and Navigating/Runtime/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.5.0: Thu Jun 8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000 Binaries: Node: 18.8.0 npm: 8.18.0 Yarn: 1.22.19 pnpm: N/A Relevant Packages: next: 13.4.18-canary.0 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A Next.js Config: output: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) Middleware / Edge (API…

### CASE-4774 · [NEXT-378] Next 13: Navigation with Link does not scroll up the page
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome 107, linux, next.js, react
- **Signals**: 👍54 💬73 · closed · labels: linear: next
- **Excerpt**: ### Verify canary release * [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information **Operating System**: Platform: linux Arch: x64 Version: [ref] SMP Mon Sep 19 19:14:52 UTC 2022 **Binaries**: Node: 16.15.0 npm: 8.5.5 Yarn: 3.2.4 pnpm: N/A **Relevant packages**: next: 13.0.2 eslint-config-next: 13.0.0 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome 107.0.5304.87 ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug When navigating between pages using `Link`, the page…

### CASE-4776 · next/image on node 16 give SIGSEGV
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, firefox, opera, macos, next.js, webpack
- **Signals**: 👍50 💬72 · closed
- **Excerpt**: ### What version of Next.js are you using? 10.1.3 ### What version of Node.js are you using? 16.0.0 ### What browser are you using? Chrome, Firefox ### What operating system are you using? macOS 11.2.3 ### How are you deploying your application? next dev ### Describe the Bug Mac Mini M1, Node 16 next start crashes hitting next/images Already nuked node_modules and locks after updating node version ``` $ next dev ready - started server on 0.0.0.0:3000, url: [link] info - Loaded env from /Users/vfornito/DEV/gvdp/vdp/.env.development info - Using webpack 4. Reason: future.webpack5 option not…

### CASE-4777 · Error: Cannot find module 'webpack'
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, opera, macos, webpack, next.js
- **Signals**: 👍118 💬71 · closed · labels: bug
- **Excerpt**: **What version of Next.js are you using?** 10.0.6 **What version of Node.js are you using?** 14.15.4 **What browser are you using?** Safari **What operating system are you using?** macOS **How are you deploying your application?** yarn build locally **Describe the Bug** I just updated to 10.0.6 version from 10.0.5 and im getting the next error: Error: Cannot find module 'webpack'. I found out that if I remove next-pwa it works, and the terminal output while building all of the errors came form next-pwa. **Expected Behavior** If I downgrade to 10.0.5 my project builds in dev and prod. **To…

### CASE-4779 · Bug: extremely high memory usage with `next dev`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, android, next.js, react
- **Signals**: 👍37 💬68 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: android Arch: arm64 Version: [ref] SMP PREEMPT Fri Aug 5 15:52:33 AST 2022 Binaries: Node: 18.10.0 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.0.3-canary.0 eslint-config-next: 13.0.2 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Chrome Canary v109.0.5400.0 (Android) ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug The memory usage on the last…

### CASE-4781 · NextJs compiling extremely slow
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-F4 · **Env**: chrome, opera, windows, next.js
- **Signals**: 👍18 💬65 · closed · labels: Webpack/Performance
- **Excerpt**: ### What version of Next.js are you using? 11.1.2 ### What version of Node.js are you using? 14.18.0 ### What browser are you using? Chrome ### What operating system are you using? Windows 10 ### How are you deploying your application? AWS ECS ### Describe the Bug I've been using NextJs for years and recently it has been very hard to work with because very slow in development. After `npm run dev`, I go to `localhost:3000`. From there the page can take up to 60 seconds to display. Then when the first page finally displays, each code change fast refresh or page transition SSR (compilation)…

### CASE-4782 · next/head <meta> tags for pages overriding default _app.js <meta> tags are rendered in the browser but not visible to facebook debugger.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, next.js
- **Signals**: 👍4 💬62 · closed · labels: bug
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in Next.js canary release ### Provide environment information sorry this is not working. i am running nextjs 12 node 16.12.1 yarn 1.22.5 ### What browser are you using? (if relevant) chrome ### How are you deploying your application? (if relevant) VPS ### Describe the Bug Summary: I am trying to create fb and twitter metadata for my whole site by defining a <Head> with metadata in _app.js with overrides for specific components using the identical set of <meta> tags with some local overrides. Implementation: I have a two page…

### CASE-4785 · ChunkLoadError (timeout: (chunks/xxx)
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, firefox 102, next.js, react
- **Signals**: 👍40 💬58 · closed · labels: bug/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: darwin Arch: x64 Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:22 PDT 2022; root:xnu-8020.121.3~4/RELEASE_X86_64 Binaries: Node: 16.16.0 npm: 8.11.0 Yarn: 1.22.18 pnpm: N/A Relevant packages: next: 12.2.2 eslint-config-next: 12.1.5 react: 17.0.2 react-dom: 17.0.2 ### What browser are you using? (if relevant) Firefox 102.0 ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug When a next…

### CASE-4787 · Error: Invariant: attempted to hard navigate to the same URL on iPhone
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: opera, chrome, windows, next.js, react, iphone
- **Signals**: 👍31 💬57 · closed · labels: please add a complete reproduction/bug/linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Operating System: Platform: win32 Arch: x64 Version: Windows 10 Home Binaries: Node: 18.12.0 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 13.0.3 eslint-config-next: 13.0.3 react: 18.2.0 react-dom: 18.2.0 ### What browser are you using? (if relevant) Google Chrome v107.0.5304.107 ### How are you deploying your application? (if relevant) next start, Digital Ocean ### Describe the Bug Hi, I just connected my production next.js app to the error tracker…

### CASE-4789 · Cannot read properties of undefined (reading 'getInitialProps')
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 100, windows, next.js, react
- **Signals**: 👍12 💬57 · closed
- **Excerpt**: ### Verify canary release - [x] I verified that the issue exists in Next.js canary release ### Provide environment information next: 12.1.1-12.1.6-canary.2 react: 17.0.2 or 18.0.0 node: 14.19.1 system: windows ### What browser are you using? (if relevant) chrome 100.0.4896.88 ### How are you deploying your application? (if relevant) next start ### Describe the Bug ![error]([link]) ### Expected Behavior no error in console and display page content ### To Reproduce ``` //app.ts const MyApp = ({ Component, pageProps }: AppProps) => { return <Component {...pageProps} />; }; MyApp.getInitialProps…

### CASE-4790 · Cache-Control headers set in next.config.js are overwritten
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, opera, macos, next.js
- **Signals**: 👍45 💬57 · closed · labels: bug/locked
- **Excerpt**: **What version of Next.js are you using?** 10.0.7, 10.0.8-canary.3 **What version of Node.js are you using?** 15.8.0 **What browser are you using?** curl, Chrome **What operating system are you using?** macOS **How are you deploying your application?** next start **Describe the Bug** Custom `Cache-Control` headers configured in `next.config.js` are overwritten in some cases. It looks any page that use `getStaticProps` will have their cache headers overwritten with `Cache-Control: s-maxage=31536000, stale-while-revalidate` which seems to come from [link]…

### CASE-4793 · [NEXT-1126] Cookies set in middleware missing on Server Component render pass
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, edge, next.js, react
- **Signals**: 👍50 💬55 · closed · labels: Runtime/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: darwin Arch: arm64 Version: Darwin Kernel Version 22.3.0: Thu Jan 5 20:48:54 PST 2023; root:xnu-8792.81.2~2/RELEASE_ARM64_T6000 Binaries: Node: 18.13.0 npm: 8.19.3 Yarn: N/A pnpm: 7.25.0 Relevant packages: next: 13.4.1 eslint-config-next: 13.1.6 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Middleware / Edge (API routes, runtime) ###…

### CASE-4795 · Unable to download swc package - Next.js project in Android Termux
- **Principles**: P-G1, P-G2, P-G3 · **Env**: android, next.js
- **Signals**: 👍19 💬54 · closed · labels: SWC/locked
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Start the Application by npm run dev 2. Visit localhost:3000/api/fileUpload 3. It crashes in Android termux after it ### Current vs. Expected behavior I am getting trying to create a api which takes files and save in public/uploads But when go to [link] It crashes and getting this `$ npm run dev > [email] dev > next dev ▲ Next.js 14.0.2 - Local: [link] Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" [link] ✓ Ready in 5.6s ⚠ Attempted to load @user/swc-android-arm64, but it was not…

### CASE-4798 · HMR taking much longer with webpack@user and next@user
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, opera, macos, webpack, next.js
- **Signals**: 👍0 💬52 · closed · labels: please add a complete reproduction
- **Excerpt**: **What version of Next.js are you using?** 10.0.5-canary.9 **What version of Node.js are you using?** v15.3.0 **What browser are you using?** Chrome **What operating system are you using?** macOS **How are you deploying your application?** next start **Describe the Bug** In dev mode with webpack@user HMR takes considerably longer than with webpack@user for the same change and exactly the same codebase. **Expected Behavior** HMR being faster or at the same speed. **To Reproduce** Still need to isolate the issue, which is really hard because this page is around 700kB total! The webpack@user…

### CASE-4799 · Internal Server Error (500) right after installing and running Next.js 9.5.2
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, next.js, react
- **Signals**: 👍4 💬53 · closed · labels: good first issue
- **Excerpt**: # Bug report Internal Server Error, Next.js 9.5.2 ## Describe the bug Next.js build 9.5.2 is giving Internal Server Error (500) right after installing npx create-next-app ## To Reproduce 1. npx create-next-app 2. npm run dev 3. Open the browser localhost:3000 4. See "Internal Server Error" ## Link [link] ## Expected behavior Normally, Next.js should output a welcome page. ## System information - Windows 10 - Chrome - Next.js 9.5.2 - Node.js 12.18.2 - React 16.13.1 - React-DOM 16.13.1

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-4707 · Focus lost when using AlpineJS $id after the Livewire request is sent
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬8 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/2826 Also discussed in the Livewire repo: [link] <div type='discussions-op-text'> <sup>Originally posted by **johanvanhelden** April 11, 2022</sup> Hi all! Not sure if this is a bug, or me not understanding something. I was watching Caleb's Laracon talk and he was showing of how to use Alpine to generate ids for elements. So I just finished implementing it, but after I type some data into an input element, and the Livewire request is sent to the server, the input looses its focus. **Demo:** ![LivewireAlpineDemo]([link]) The HTML for the input element looks…

### CASE-4708 · Multiple x-refs with the same value (returns the last child element that matches rather than, like querySelector does, the first)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: As per my discussion with @user on the [Discord channel]([link]) > Is there any reason, if multiple x-refs with the same value exist, why $refs returns the last child element that matches rather than, like querySelector does, return the first? Hugo's reply: > The implementation walks the elements and overrides the ref when the attribute is found, so the last walked element for a given ref will be the one accessible through $refs. This is not necessarily wanted behaviour, just how it's implemented and could be a bug, probably worth raising in the repo. And thus here I am!

### CASE-4710 · Iterating over a range has to be a Number literal
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: I'm not sure if this is intended, but you can't iterate over a range using a variable that holds an integer: ``` x-for="i in 10" works x-for="i in j" where j is 10 doesn't work ``` Here's a pen: [link]

### CASE-4714 · $dispatch magic variable is not defined inside a function
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍2 💬8 · closed
- **Excerpt**: I'm not sure if this is a bug or feature request. Until [ref] is implemented I am working on passing data between parent / child components by using $dispatch. $dispatch works fine if you specify it inline like in the examples from the README. However, if you call a function such as: `<button @user="updateCount()">Click me</button>` And then try to reference $dispatch inside updateCount, it is not defined. Here is an example of this in action [link] I also included a workaround which involves passing in the $event to updateCount and calling dispatchEvent with a CustomEvent explicitly.

### CASE-4718 · @user.away fires if mouse is click inside focus element and released on "away" element
- **Principles**: P-E1, P-E2, P-E4 · **Env**: bootstrap
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: Thank you for alpine js !!! I can't figure out if it's a bug or just standard behavior. Nevertheless it's quite annoying :-) When I have modal's showing and I mouse click on them then move the mouse outside and releases - then the click.away will fire. That is undesirable as users often will run into that the modal closes even though the mouse was not clicked on the surrounding elements. Click away should be limited to mouse events where both click and release was on the "away" elements. (Bootstrap modals will go away if you click outside and releases inside, not the other way around)

### CASE-4724 · Strange bug with tiny slider
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Hello, I wanted to build a simple carousel with **[Alpine]([link]])** and **[Tiny slider]([link])**. ```html <div class="slider"> <template x-for="(item, index) in items" :key="index"> <div x-text="'Slide ' + index"></div> </template> </div> ``` But when I init the **Tiny slider** function (after mount), the `item` & `index` variables inside the `<template x-for>` became undefined... ![image]([link]) But if I have something outside the loop, there is no problem. Maybe it's because `tiny-slider` get container direct childs, and try to parse the `<template>` because he's not removed after…

### CASE-4727 · x-modelable and x-model not working with equal names
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: I spotted an unexpected behaviour using x-modelable. If the variables name in x-modelable equals the name used in x-model it won't work. Example: ```blade <div x-data="{items: []}" x-init="setTimeout(() => items.push({id: Date.now(), name: 'TEST'}), 1000)"> This snippet will work as expected, displaying '1' on the inner div: <div x-data="{things: []}" x-modelable="things" x-model="items"> <div x-text="things.length"></div> </div> While this snippet remains displaying '0': <div x-data="{items: []}" x-modelable="items" x-model="items"> <div x-text="items.length"></div> </div> </div> ```…

### CASE-4729 · cannot bind to correct, after refresh x-data @user livewire
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: hi. i'm happy to alpine with livewire for using make something. today i got some strange action so i make this issue. i want make is. make viewing html relationship data with database hierachical data set all user. same like this. (sorry for make understand. my english is....) [link] i try to this. 1. make hierachical data set for all user (on my database) 2. using AlpineJs for making accordian function for looking nice so make get every root user id from laravel livewire every request (get data from database) 3. x-data is bind with livewire using @user (i using "selectedUser" variable on…

### CASE-4739 · Error with Alpine and Livewire related with x-show
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Discussed in [link]]/discussions/2640 <div type='discussions-op-text'> <sup>Originally posted by **skalero01** February 4, 2022</sup> Hi, i have a big error with alpine and livewire that i havent be able to fix it. **The error:** When the page is reloaded with livewire the values on x-show doesnt change, but on @user it works perfectly. Even if i add an id to force the dom to change when we execute alpine the passed variables are the same that the last request. Basically i have the next code on the html: ```html <td colspan="2"> &emsp; {{ $platform->platform }} <span…

### CASE-4740 · Focus question
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hello, I have a question, I don't know if it's a bug or not. In the pen : [link] My tab system is ok. But after clicking the button stay on state "focus". This is normally ? Or maybe I forgot something ? Thanks

### CASE-4744 · Changing one property seems to refresh all bindings
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I had a weird issue with AlpineJS where the value of an input was overwritten when an input action changes an unrelated property. I had the following email input and span: ```html <input type="email" x-ref="inputemail" name="email" x-model.debounce="email" @user="loginInvalid = false" required autofocus> <span class="Form-error" x-show="loginInvalid" x-cloak>Your email or password is wrong. Please try again.</span> ``` If loginInvalid was true, the input event would set loginInvalid to false and hide the span. However, the changed value of the input would immediately be overwritten by…

### CASE-4746 · $event object not accessible in event handlers added via x-spread
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: When adding event handlers via `x-spread` it doesn't appear that the native event object is accessible to the callback function: ```js function Example(){ return { button: { ['@user'](){ // No way to access event object? No arguments are supplied } } } } ``` I was expecting that the event handler would be called with the `$event` object as it's first argument - analogous to supplying a handler name in an `x-on`/`@` directive - for example `@user="myHandler"` I opened a discussion topic about this a few days ago here: [link]]/discussions/617 however after further investigation this seems to me…

### CASE-4748 · Dynamic / variable class names?
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hello, and thanks for your work! I'm a Vue fan, and I enjoy your library even if there is some differences. About Vue, on a `:class` attribute, I assume that when an **input** is: ```html <div x-data="{ variable1: 'foo', variable2: 'bar' }"> <button :class="{ [variable1]: true }">Foo</button> <button :class="variable2">Bar</button> </div> ``` The **expected output** is (like Vue): ```html <div> <button class="foo">Foo</button> <button class="bar">Bar</button> </div> ``` But here is the Alpine output: ```html <div> <button class="[variable1]">Foo</button> <button class="variable2">Bar</button>…

### CASE-4753 · Delete operator doesn't work directly on data objects
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: Version: 1.9.3 Note: this is inside a v-for Workaround: Create temp variable and then reassign it Data Variables (`vars`): [link] Click Event with Workaround: [link]

### CASE-4788 · v12.2 up to v12.3.2-canary.22 handleHardNavigation Invariant: attempted to hard navigate to the same URL
- **Principles**: P-E1, P-E2, P-E4 · **Env**: opera, windows, next.js, react
- **Signals**: 👍60 💬57 · closed · labels: Linking and Navigating
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information Deployed to Vercel ``` Operating System: Platform: win32 Arch: x64 Version: Windows 10 Pro Binaries: Node: 16.13.1 npm: N/A Yarn: N/A pnpm: N/A Relevant packages: next: 12.3.2-canary.22 eslint-config-next: 12.3.1 react: 18.2.0 react-dom: 18.2.0 ``` ### What browser are you using? (if relevant) Not relevant ### How are you deploying your application? (if relevant) Vercel ### Describe the Bug It seems that since Next.js v12.2 the internal router does an extra…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-4709 · Checkbox x-model values are duplicated if node is moved in the DOM
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: mobile
- **Signals**: 👍0 💬8 · closed · labels: question
- **Excerpt**: I am creating a set of responsive search filters, which requires moving a form to a different DOM node (but all within the same Alpine.js component. I've noticed that doing this causes Alpine to keep duplicating the results for each checkbox. I've made a simple codepen which clearly demonstrates the problem: [link] If you toggle the check boxes and resize the window to below 768px (so the form moves to the mobile container) you will see toggling a checkbox will show it twice, it seems every time the DOM node containing the x-models is moved, it will keep duplicating the values in memory. Many…

### CASE-4721 · IE11 and Extracted Component Logic not working
- **Principles**: P-A1, P-A4, P-G3 · **Env**: windows
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: #### Issue description When using AlpineJS in IE11, utilising the IE11 version of the Alpine script via CDN or as part of a bundle, it won't register the extracted component logic or work like it does in other browsers. #### Steps to reproduce the issue 1. Make sure you're running IE11 on a Windows 10 machine or VM. 2. Paste the following code into a .html document: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> <div x-data="teamProfileModal()"> <button…

### CASE-4735 · Alpine.js not working in Edge
- **Principles**: P-A1, P-A4, P-G3, P-G1, P-G2 · **Env**: edge
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: Hello, I've been experimenting with Alpine.js today and it looks really nice, but when I tried to test it in Edge and Internet Explorer it didn't look like it was working. I tried the simplest example from the docs, but it didn't work. I have added polyfills as described in docs. Here is the message that I've got in the console. ``` SCRIPT1028: SCRIPT1028: Expected identifier, string or number alpine.js (1,5743) ``` Tested code example: ``` <!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1.0"> <script src="[link]></script>…

### CASE-4752 · Click handler inside component triggers away method of parent
- **Principles**: P-A1, P-A4, P-G3 · **Env**: mobile
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** I have a responsive menu with a dropdown in the menu. When the browser is at a size that the mobile menu is triggered and a user has clicked on the mobile menu to show it, there is a link (about) that has the dropdown. Both menus have away methods on their click handlers. However, when you click on dropdown inside the dropdown it triggers the parents away method despite being a child of it. **Describe what should be happening** When you click on the child dropdown the parent dropdown should remain open. **Demo** [link] **Thoughts** Is the definition of the new component…

### CASE-4768 · Debugger not binding breakpoints in VSCode in server components, using official Next.js debugger setup
- **Principles**: P-A1, P-A4, P-G3, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍48 💬87 · open · labels: bug
- **Excerpt**: ### Link to the code that reproduces this issue [link] ### To Reproduce 1. Open the code in `VSCode` 2. Add a breakpoint in any server side files 3. Open the "Run and Debug" panel 4. Select "Next.js: debug full stack" and press "F5" or the play button 5. Note that breakpoints don't land when requests are made in either scenario. Breakpoints set in server components that aren't attached (sorry the screencaps below didn't show my mouse hover so here's a gif): ![Zight Recording 2024-02-13 at 09 45 03 AM]([link] framework]/assets/273842/41de6e84-8b08-44f9-9459-bb3d84f7179e) ![page tsx — tmp2…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-4711 · Using x-html and adding classes doesn't show css transitions
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: Let's say that an element gets its html like so: `<div x-html="theHtml"></div>` And that `theHtml` inserted is: `<p class="test" x-on:mouseenter="hover = 2" :class="{ 'test-hover': hover > 1 }"></p>` Then we have a transition defined on the `.text` class, and the expected hover effect on `.text-hover`. The reason that I'm not using `.test:hover` directly in CSS is that I want to use some logic to apply classes to other elements as well, hence `hover > 1` above. ``` .test { transition: all .2s ease-in-out; } .test-hover { transform: scale3d(1.3, 1.3, 1.3); } ``` If I put the html in the `div`…

### CASE-4719 · Wait Transition to finish before showing x-show
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed
- **Excerpt**: Hello, I have a strange issue while trying to animate Tabs. I have 3 buttons for tabs, and 3 div's to display content. But when I add transition to the content. It breaks. See the below fiddle to see what I mean. [link] How do I let other tab wait for the transition to finish before showing? I have seen the pull [ref] but this is not working. <details><summary>View Code</summary> <p> ```html <div x-data="{ open: 'tab1' }"> <button @user.prevent="open= 'tab1'"> Open Tab 1 </button> <button @user.preventk="open= 'tab2'"> Open Tab 2 </button> <button @user.prevent="open= 'tab3'"> Open Tab 3…

### CASE-4720 · Might be an Alpine Performance bug on `x-show` with transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬7 · closed
- **Excerpt**: Tricky one, [link] Screencast: [link] When there is an element with any attribute in `x-show` element, things gets weird. In this example: Try to click on toggle button quickly multiple times. You will end up with half way done transition. `open` is `true` but transition is not completed. Once you remove `id` on inner element, things are fine. So i guess at some point Alpine doesn't has enough time to complete walking on dom and skip some tasks?

### CASE-4723 · :class bindings and x-transition are not compatible
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬7 · closed · labels: bug
- **Excerpt**: Transitions don't work if you also have a `:class` binding on the same element as the `x-transition`. I would imagine that this is something to do with a conflict of multiple events trying to write to the `class` but it's pretty inconvenient. Has this been noticed before and is there any workaround? Here is an illustration of the problem, if you trigger an error message by clicking any button then I have created two error messages, one with and one without the `:class` binding to show the issue. [link]

### CASE-4755 · Leak from magics usage
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍6 💬0 · closed
- **Excerpt**: High frequency evaluations of alpine strings that use magics (requestAnimationFrame usage in our case) exacerbate a leak we have found. What we observe is that _x_cleanups will grow by 1 every time you use a magic property in an evaluated string, which will eventually cause our web page to crash running out of memory. Here is a minimal reproduction of the issue: [link] Resize the preview window on that page and you should see that _x_cleanups for the div with id "leaky" grows. [This other issue]([link]][ref]) appears to be unrelated since incorporating the patch from his branch doesn't…

### CASE-4761 · [NEXT-1151] App router issue with Framer Motion shared layout animations
- **Principles**: P-D1, P-D2, P-D3 · **Env**: opera, linux, next.js, react
- **Signals**: 👍330 💬142 · open · labels: linear: next
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref] SMP Tue Jan 10 18:39:00 UTC 2023 Binaries: Node: 16.17.0 npm: 8.15.0 Yarn: 1.22.19 pnpm: 7.1.0 Relevant packages: next: 13.4.1-canary.1 eslint-config-next: 13.0.7 react: 18.2.0 react-dom: 18.2.0 ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true) ### Link to the code that reproduces this issue [link] ### To Reproduce I provided a larger repro…

### CASE-4764 · CSS module styling is removed too early on route changes
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍281 💬107 · closed · labels: Webpack/Linking and Navigating/linear: next
- **Excerpt**: # Bug report ## Describe the bug CSS module styling is removed immediately after clicking a `next/link`, instead of after the DOM is removed **on production builds**. This causes the components to have no styling at all during a page transition. **This issue does not happen on dev mode**. I believe this is a bug with CSS modules specifically because components styled with `styled-jsx` don't have this problem. Really would love to be able to use Sass via CSS modules here instead of re-writing the entire app I'm working on using `styled-jsx`. If Sass modules can't work in this scenario, I think…

### CASE-4794 · Can not navigate in development (Router hangs after some time)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍133 💬55 · closed
- **Excerpt**: # Bug report ## Describe the bug Either `Link` or `Router` stops working when doing client side routing. It seems that HMR may be interrupting the transition between pages. It occurs most frequently if the app is left idle or in the background for a bit of time (although I have experienced it happening whilst clicking around without it being idle) ## To Reproduce Steps to reproduce the behavior, please provide code snippets or a repository: 1. Clone this repo ([link]) 2. Install dependencies `npm install` 3. Run the server `npm run dev` 4. Visit all pages by clicking the links 5. Go make a…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-4715 · Unbinding global event listeners w/ Turbolinks
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬8 · closed
- **Excerpt**: The `window` and `document` modifier for `x-on` doesn't work well with turbolinks. The event listener gets duplicated each time the element is initialized (see [this minimal project]([link]) that reproduces the issue). I think this could be solved by watching removed nodes in mutation observer, but Alpine would need to keep track of the global handlers associated with each element. I'm not sure this is a good path. I'm glad to work on a PR if there is a good solution for this issue :+1:

### CASE-4725 · x-on debounce?
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍5 💬6 · closed · labels: enhancement
- **Excerpt**: For starters, thank you so much for this Caleb. I freaking love alpine. Just a quick question though. Is there no debounce on input methods like there is in Livewire. I've tried: x-on:input.debounce="function()" x-on:input.debounce.500="function()" And both always execute the function immediately. I know I can just use setTimeout in the function. Just wanted to see if it was already built in and i'm just doing it wrong. Thanks again for the awesome framework!!!

### CASE-4733 · x-model debounce not working
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hi everybody! Testing AlpineJS for the first time and it looks great, thank you! Did I miss something or why is debounce not working in this simple codepen? [link] I've tried several different options (with ms, without ms, using x-model or using x-on:input). The value of foo is always instantly updated! Thank you in advance, Bernhard

### CASE-4758 · Next.js development high memory usage
- **Principles**: P-F5, P-H3 · **Env**: next.js
- **Signals**: 👍205 💬177 · closed · labels: linear: next
- **Excerpt**: **Before posting a comment on this issue please read this entire post.** ## Previous work The past few weeks we've been investigating / optimizing various memory usage issues. Specifically geared towards production memory usage. In investigating these we were able to find there was one memory leak in Node.js itself when using `fetch()` in Node.js versions before `18.17.0` (you'll want to use `18.17.1` for security patches though). Most of the reports related to memory usage turned out to be reports of "it's higher than the previous version" rather than a memory leak. This was expected because…

### CASE-4784 · [NEXT-1160] Clicking Links in intercepted routes does not unmount the interceptor route
- **Principles**: P-F5, P-H3 · **Env**: opera, linux, ubuntu, next.js, react, typescript
- **Signals**: 👍43 💬59 · closed · labels: bug/Linking and Navigating/linear: next/locked
- **Excerpt**: ### Verify canary release - [X] I verified that the issue exists in the latest Next.js canary release ### Provide environment information ```bash Operating System: Platform: linux Arch: x64 Version: [ref]~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Mar 31 16:00:14 UTC 2 Binaries: Node: 18.12.1 npm: 8.19.2 Yarn: 1.22.19 pnpm: N/A Relevant packages: next: 13.4.2-canary.5 eslint-config-next: N/A react: 18.2.0 react-dom: 18.2.0 typescript: N/A ``` ### Which area(s) of Next.js are affected? (leave empty if unsure) App directory (appDir: true), Routing (next/router, next/navigation, next/link) ### Link…

### CASE-4800 · Page state is not reset for navigating between dynamic routes
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍89 💬52 · closed
- **Excerpt**: # Bug report ## Describe the bug The page state is not reset for navigation between dynamic routes that served by the same source component. for example, give page source `/a/[param]/index.js`, when navigating from `/a/1` to `/a/b`, states on the page won't' be reset. The causing is that for this kind of navigation, what actually happened is the same React Component been rendered with different `props`. Thus react takes it as a component is rerendering itself, and causing the new navigated page receive stale states. To fix it, just add `{key: <composed base on URL routing params> }` to page…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-4762 · trailing slash in link for legit page works for client side navigation but leads to not found bundle and 404 on hard refresh (ssr)
- **Principles**: P-F4 · **Env**: next.js
- **Signals**: 👍189 💬124 · closed
- **Excerpt**: trailing slash in link for legit page works for client side navigation but leads to not found bundle and 404 on hard refresh (ssr) # Bug report ## Describe the bug let me know if title needs further clarification. [all relevant issues]([link]) has been closed with reasoning that its been fixed in 6-canary (I believe it is not) or by improved serve (which is true only in perhaps production static export). I'm rewriting my existing blog to next.js and i previously used trailing slashes. Latest `serve` can help with it once i build my next.js powered blog. But in order to fix dev env i need…

### CASE-4792 · Context provided in _app.js can't be consumed in pages in SSR
- **Principles**: P-F4 · **Env**: react, next.js
- **Signals**: 👍50 💬56 · closed
- **Excerpt**: <!--- Provide a general summary of the issue in the Title above --> React v16.3 context provided in `pages/_app.js` can be consumed and rendered in pages on the client, but is undefined in SSR. This causes React SSR markup mismatch errors. Note that context can be universally provided/consumed *within* `pages/_app.js`, the issue is specifically when providing context in `pages/_app.js` and consuming it in a page such as `pages/index.js`. <!-- ⚠️ IMPORTANT ⚠️ If you have a question about Next.js please ask it on Spectrum [link] or join our Slack community at [link] and ask it in the `#next`…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-4778 · [FIXED in 15.1.0] next.js 14 redirect() inside a server action can't switch between root layouts (was working in next.js 13)
- **Principles**: P-A5, P-G4, P-E3 · **Env**: next.js
- **Signals**: 👍24 💬69 · closed · labels: locked/Server Actions/Redirects
- **Excerpt**: # FIXED IN 15.1.0! Was fixed in this PR: [link] framework][ref] --- ### Link to the code that reproduces this issue [link] ### To Reproduce 1. start the development server with `npm run dev` 2. open [link] in your browser 3. Click on the "search" submit button on top of the page next to the text input (it doesn't matter what you enter into the textfield, it always redirects to the same route -> [link]) ### Current vs. Expected behavior ### Expected result: You should land on `/en/search/hello` as that is the hardcoded redirection inside the server action in `services/SiteSearch.service.ts`. (…

