# Case Chunk 011 — Round 11

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-2001 · Next component's `setup` throw an error, turn back and last component crashed as well
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vue
- **Signals**: 👍0 💬5 · closed · labels: need more info
- **Excerpt**: ### Version 3.0.7 ### Reproduction link [[link]]([link]) ### Steps to reproduce 0. Open chrome dev console 1. Click "About" link 2. Click "Home" link ### What is expected? At last, `<Home />` component should be rendered successfully. ### What is actually happening? `<Home />` component missed, and there's an error: ``` TypeError: Cannot read property 'parentNode' of null [Vue warn]: Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at [link] ``` --- How should I catch and handle errors throw by `setup` function appropriately? <!--…

### CASE-2006 · [Vapor]: A compilation error occurs when an element cannot be used as a direct child
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, windows, vue
- **Signals**: 👍0 💬4 · closed · labels: :hammer: p3-minor-bug/scope: vapor
- **Excerpt**: ### Vue version 3.6.0-beta.5 ### Link to minimal reproduction [link] ### Steps to reproduce opening the link prompts an error. ### What is expected? correctly render {{ msg }}! ### What is actually happening? Console prompt error： Cannot read properties of null (reading 'firstChild') ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (16) x64 Intel(R) Core(TM) Ultra 7 255H Memory: 16.59 GB / 31.43 GB Binaries: Node: 22.18.0 - D:\Document\nodejs\node.EXE npm: 10.9.3 - D:\Document\nodejs\npm.CMD pnpm: 10.28.2 - D:\Document\nodejs\pnpm.CMD Browsers: Chrome: 144.0.7559.110 Edge:…

### CASE-2009 · defineModel on Firefox does not work as expected
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: firefox, firefox 2, chrome, windows, vue
- **Signals**: 👍0 💬4 · closed · labels: has workaround/browser specific/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.17 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Use firefox 2. Enter anything in the field. It should be blocked and only show "a", but it wont on firefox. ### What is expected? It should only keep "a" and nothing else should "make it through" ### What is actually happening? Seems like either a race condition or firefox not updating at the same time as Chrome? no clue. ### System Info ```shell System: OS: Windows 11 10.0.26100 CPU: (20) x64 Intel(R) Core(TM) i5-14600K Memory: 12.60 GB / 31.77 GB Binaries: Node: 22.16.0 - C:\nvm4w\nodejs\node.EXE npm:…

### CASE-2013 · Why is style isolation not working?
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.5.13 ### Link to minimal reproduction [link] ### Steps to reproduce App.vue: ```vue <script setup> import FullScreen from './FullScreen.vue'; </script> <template> <p class="p">????</p> <FullScreen></FullScreen> <Teleport to="body"> <FullScreen></FullScreen> </Teleport> </template> <style scoped> .p { background-color: red; } </style> ``` FullScreen.vue: ```vue <template> <p class="p">??????</p> </template> <style scoped> .p { background-color: green; } </style> ``` Google Chrome version: 131.0.6778.140 en-us: Why is the background-color of FullScreen.vue red instead of…

### CASE-2018 · Memory leak switch component by v-if ?
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: chrome, vue
- **Signals**: 👍2 💬4 · closed · labels: browser specific
- **Excerpt**: ### Vue version 3.5.12 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Click testIf. 2. Click 切换展示. 3. Click empty. 4. Click force the GC in Chrome Devtools ### What is expected? The memory should go back to initial level ### What is actually happening? the memory heap keeps growing ### System Info _No response_ ### Any additional comments? _No response_

### CASE-2025 · Vue 3 Script Setup syntax + style tag scoped = bug
- **Principles**: P-G1, P-G2, P-G3 · **Env**: opera, chrome, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Link to minimal reproduction [link] ### Rollup Version 4.12.0 ### Vue Version 3.4.19 ### Node Version 18.13.0 ### Operating System (or Browser) Chrome ### Expected Behaviour Build without error when i have a vue 3 component using script setup syntax + style tag with scoped property ### Actual Behaviour When i try to build my design system with a component using script setup syntax and with a scoped style tag i get this error: ``` [!] (plugin rpt2) RollupError: src/components/testworld/TestWorld.vue?vue&type=script&setup=true&lang.ts:4:22 - error TS7006: Parameter 'n' implicitly has an…

### CASE-2039 · Typing error with app.use(), requiring 2nd argument
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, linux, ubuntu, vue
- **Signals**: 👍0 💬4 · closed · labels: scope: types
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [link] ### Steps to reproduce - Clone the repo above - Run `yarn build` ### What is expected? No error ### What is actually happening? Typing error raises at `app.use(fluent)` ### System Info ```shell System: OS: Linux 5.19 Ubuntu 22.10 22.10 (Kinetic Kudu) CPU: (4) x64 Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz Memory: 6.45 GB / 11.59 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 18.14.0 - /usr/bin/node Yarn: 1.22.19 - /usr/bin/yarn npm: 9.3.1 - /usr/bin/npm Browsers: Chrome: 110.0.5481.100 Firefox: 110.0 npmPackages: vue:…

### CASE-2041 · Root Comments in a component will break Transition
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: chrome, safari, macos, vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: transition
- **Excerpt**: ### Vue version 3.x ### Link to minimal reproduction Ignore ### Steps to reproduce <img width="1313" alt="image" src="[link]> when I add commentary in componentA, like it <img width="1052" alt="image" src="[link]> It will not work ### What is expected? It works ### What is actually happening? not working ### System Info ```shell System: OS: macOS 12.3 CPU: (8) x64 Apple M1 Memory: 46.70 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.13.1 - ~/.nvm/versions/node/v16.13.1/bin/node npm: 6.14.10 - /usr/local/bin/npm Browsers: Chrome: 108.0.5359.98 Chrome Canary: 110.0.5474.0 Safari: 15.4…

### CASE-2042 · `watchEffect` within `effectScope` is removed when component is unmounted
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge, vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: reactivity/:exclamation: p4-important
- **Excerpt**: ### Vue version edge ### Link to minimal reproduction [link] ### Steps to reproduce - Click the "negate button" -> see multiple logs - untick the checkbox and tick it again (triggers unmount + mount of component) - Click the negate button again -> see only one log ### What is expected? watchEffect should trigger because it's inside of a detached effectScope ### What is actually happening? watchEffect isn't run anymore after the wrapping component unmounts ### System Info ```shell na ``` ### Any additional comments? From [link]

### CASE-2056 · v-model in input and textarea forms doen't work correctly on several mobile devices
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: chrome 99, android 8, vue, mobile
- **Signals**: 👍1 💬4 · closed · labels: browser specific
- **Excerpt**: ### Version 3.2.31 ### Reproduction link [github.com]([link]) ### Steps to reproduce ## Problem v-model on textarea and input forms doesn't work properly on some mobile devices. When user type something, value sync only after unfocus (blur) ## Code ``` <div id="app"> <textarea v-model="text"></textarea> <div><span>{{ text }}</span></div> </div> <script type="text/javascript"> Vue.createApp({ data() { return { text: '' } } }).mount('#app'); </script> ``` Works on most mobile devices and browsers, i.e Meizu C9 PRO (android 8.1.0 Chrome 99.0.4844.58) ![Image]([link]) But doen't work correctly on…

### CASE-2084 · Static Slots optimization combined with component instance re-use can lead to stale slot content never being updated. [EDGE CASE]
- **Principles**: P-G1, P-G2, P-G3, P-F5, P-H3 · **Env**: edge, vue
- **Signals**: 👍0 💬4 · closed · labels: scope: slots/has workaround/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.0.4 ### Reproduction link [[link]]([link]) ### Steps to reproduce You can see `Hello` never change to `World`. I already find the reason is that SFC compiler add `{ _: 1 }` to the compiled slots, which in `updateSlots` tell Vue there is no need to update `instance.slots`. But in this case, it work not correctly. ### What is expected? `Hello` and `World` switch in 1 second ### What is actually happening? never update <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2098 · input position not correct
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1, P-G4, P-E3 · **Env**: chrome 83, macos, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-beta.18 ### Reproduction link [[link]]([link]) ### Environment Input method: from mac Macos Catalina Chrome 83.0.4103.97 ### Steps to reproduce This is a magical problem, when the first Chinese character is entered, the pop-up box option is in the wrong position. There is a problem in jsbin preview mode, but no problem in edit mode. ![image]([link]) ### What is expected? Normal position ### What is actually happening? wrong position <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2100 · Edge 44 bug - Reactive props issue
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge 44, chrome, edge, react, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-beta.14 ### Reproduction link [[link]]([link]) ### Steps to reproduce Run the repro with `yarn dev` ### What is expected? on Chrome: ![]([link]) ### What is actually happening? on Edge 44: ![]([link]) --- I haven't had the time to really dig into this issue but it seems like when we use Vue (transpiled for edgeHTML 18 with buble see [ref]) there is an issue with how reactive props are delivered to children component, here `item` should not be undefined. However, reactivity seems to work for the parent component, you can see that the `watchEffect` hook is triggered correctly.…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-2002 · Warning of `<Transition>` with non-element root/multiple children isn't clear
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍2 💬5 · open · labels: :sparkles: feature request/:cake: p2-nice-to-have
- **Excerpt**: ### Version 3.0.7 ### Reproduction link [[link]]([link]) ### Steps to reproduce Click "toggle" button ### What is expected? Opacity transition, as slot returns single element ### What is actually happening? Error: "Component inside <Transition> renders non-element root node that cannot be animated" --- This is regression, it worked with ver 3.0.3 and earlier: [link] Possible workaround is to make separate components for each case: [link] but it would be nice to get rid of it `<keep-alive>` simply explains why would I need it, it is not necessary for reproduction <!-- generated by vue-issues.…

### CASE-2005 · inconsistent behaviour on nested transition groups
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍1 💬5 · open · labels: :lady_beetle:  bug/scope: transition/has PR
- **Excerpt**: ### Version 3.0.0-beta.18 ### Reproduction link [[link]]([link]) Codepen: Vue 2 version: [link] Vue 3 version: [link] ### Steps to reproduce Bug 1: 1. Open **Vue 3** example, click **Reverse Outer** button. Titles transitioning in correct positions. But nested transition group (team names with red and green) will be instantly teleport to sides then start transitioning. In Vue 2 example nested transition groups is animating right. Bug 2: This is Vue 2 bug. Maybe should be discussed on Vue 2 repo. 1. Open **Vue 2** example, click **Reverse Inner** button. Then click right after to **Reverse…

### CASE-2012 · Memory leaks when using a named transition component inside router-view
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F5, P-H3 · **Env**: macos, vue
- **Signals**: 👍0 💬4 · closed · labels: can't reproduce
- **Excerpt**: ### Vue version 3.5.13 ### Link to minimal reproduction [link] ### Steps to reproduce Navigate to the first child page, then to the second one, and return to the main page. ### What is expected? Detached DOM elements and objects should be cleared from memory. ### What is actually happening? Detached DOM elements and objects remain in memory. <img width="1345" alt="Image" src="[link] /> <img width="1345" alt="Image" src="[link] /> ### System Info ```shell System: OS: macOS 15.1.1 CPU: (16) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 1.21 GB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries:…

### CASE-2017 · TransitionGroup bleeds trigger of custom classes (and possibly other things?) to nested TransitionGroups
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, tailwind
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.5.2 ### Link to minimal reproduction [Vue SFC Playground example]([link]) ### Steps to reproduce In the example is a nested transition group. This is typical for Trello-like applications. Custom classes (e.g. tailwind) are put on both the outer and the inner group. Most importantly: the `move-class` is something like `transition-all`. ### What is expected? When triggering a transition of the outer class, the elements of the inner class should remain undisturbed and move as a single block. ### What is actually happening? The moveClass of the inner TransitionGroup is applied…

### CASE-2019 · Possible memory leak with Transition
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: macos, vue
- **Signals**: 👍5 💬4 · closed · labels: :lady_beetle:  bug/scope: transition/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.12 ### Link to minimal reproduction [link] ### Steps to reproduce Open Memory tab in dev tools and just click `Show` and `Hide` multiple times. ### What is expected? After `Hide` and `Collect Gargabe` memory should be reclaimed to around 100MB. ### What is actually happening? Memory allocation is continuously increasing without any notable decrease after `Hide` and `Collect Gargabe`. If I remove `Transition`, everything works okay. ### System Info ```shell System: OS: macOS 15.0.1 CPU: (12) arm64 Apple M3 Pro Memory: 1.36 GB / 36.00 GB Shell: 5.9 - /bin/zsh Binaries: Node:…

### CASE-2021 · @user/compiler-sfc remove `~/` when handling the assets in template.
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.4.31 ### Link to minimal reproduction [link] ### Steps to reproduce See the `JS` tab in the playground. ```html <img src="./foo.png" > <img src="@/foo.png" > <img src="@user/foo.png" > <img src="~/foo.png" > <img src="~pub/foo.png" > ``` are transformed to: ```js import _imports_0 from './foo.png' import _imports_1 from '@/foo.png' import _imports_2 from '@user/foo.png' import _imports_3 from 'foo.png' import _imports_4 from 'pub/foo.png' ``` ### What is expected? ```js import _imports_0 from './foo.png' import _imports_1 from '@/foo.png' import _imports_2 from…

### CASE-2028 · Transition doesn't work without key property in child component
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.2.45 ### Link to minimal reproduction [link] ### Steps to reproduce ```vue <!-- keep-alive doesn't work --> <RouterView v-slot="{ Component, route }"> <Transition name="fade"> <div :key="route.fullPath" class="w-full h-full"> <KeepAlive> <component :is="Component" v-if="route.meta.keepAlive" :key="route.fullPath" /> </KeepAlive> <component :is="Component" v-if="!route.meta.keepAlive" /> </div> </Transition> </RouterView> ``` ```vue <!-- remove key in div, keep-alive works, but transition doesn't work --> <RouterView v-slot="{ Component, route }"> <Transition name="fade">…

### CASE-2029 · TransitionGroup Breaking Hot Reload
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, vite
- **Signals**: 👍0 💬4 · closed · labels: need more info
- **Excerpt**: ### Vue version 3.3.4 ### Link to minimal reproduction [link] ### Steps to reproduce Normal Vue + Vite Installer. Adding Multiple Components with a TransitionGroup ontop. Now when I try to live reload I get a big error: ``` MoneyWash.vue?t=1692153450913:95 [Vue warn]: Unhandled error during execution of render function at <TransitionGroup name="fade" > at <App> warn2 @ runtime-core.esm-bundler.js:41 logError @ runtime-core.esm-bundler.js:216 handleError @ runtime-core.esm-bundler.js:208 renderComponentRoot @ runtime-core.esm-bundler.js:853 componentUpdateFn @ runtime-core.esm-bundler.js:5764…

### CASE-2035 · App crashes when using router-view, transition, suspense and teleport
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍2 💬4 · closed · labels: scope: transition/scope: suspense/scope: teleport/has PR/🔩 p2-edge-case
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Click C a few times, notice app is fine 2. Click B 3. Now click C again, app will crash ### What is expected? App should not crash ### What is actually happening? App crashes with `Uncaught (in promise) TypeError: node is null` ### System Info _No response_ ### Any additional comments? I initially thought this issue was a problem with PrimeVue and raised an issue [there]([link]), but after narrowing it down further it seems more like a core vue problem.

### CASE-2036 · Async components in a TransitionGroup cause getBoundingClientRect is not a function
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍2 💬4 · closed · labels: scope: transition/has PR/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [SFC Playground Reproduction]([link]) ### Steps to reproduce - Add an async component (`defineAsyncComponent`) to a list rendered inside a `TransitionGroup` - Add a new item to the list before the previous async component has been resolved ### What is expected? Both components should be rendered once they are resolved. ### What is actually happening? If a new component is added to the `TransitionGroup` before a previously added async component is resolved and rendered, the app always crashes with: ``` TypeError:…

### CASE-2038 · Binding the 'v-for' element with 'ref' causes the movement animation to disappear when the list element is removed.
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬4 · open · labels: :lady_beetle:  bug/scope: transition/has workaround
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [link] ### Steps to reproduce Create loop elements and use the 'ref' binding to animate the 'transition-group' list, removing the first (or any of the last element) elements from the list 创建循环元素并使用`ref`绑定，创建`transition-group`列表动画，移除列表的第一个(或者除了末尾的任意一个)元素 ### What is expected? The element moves up. 元素向上移动 ### What is actually happening? You'll see elements overlap. 会看到元素发生重叠 ### System Info _No response_ ### Any additional comments? The latest and alpha versions have been tested in SFC Playground and both have this issue. 已在SFC…

### CASE-2046 · Transition appear flag doesn't work in SSR
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vue
- **Signals**: 👍14 💬4 · closed · labels: :lady_beetle:  bug/scope: transition/scope: ssr/:exclamation: p4-important
- **Excerpt**: ### Vue version 3.2.25 ### Link to minimal reproduction [link] [Playground without router]([link]) ### Steps to reproduce No steps, just load the attached live example and reload the result frame if needed, ### What is expected? There should be a transition when the component is rendered for the first time. ### What is actually happening? There is no animation, the component just appears. ### System Info _No response_ ### Any additional comments? _No response_

### CASE-2052 · onBeforeMount and onMount called, but onBeforeUnmount and onUnmount not, if inside <transition>
- **Principles**: P-D1, P-D2, P-D3, P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: scope: transition
- **Excerpt**: ### Vue version 3.2.27 ### Link to minimal reproduction [link] ### Steps to reproduce If component A is itself loading a child component inside a `<transition>`, but A is replaced by B during loading, the child component is only executing the onBeforeMount and onMount hook, but not the Unmount hooks, even though it is removed from the DOM and not visible anymore. This issue only happens if the timing is right. In our project (with vue cli and a lot of stuff) I could reproduce it with a promise of 10ms, and a page transition after 100ms. But in the reproduction link it behaved differently.…

### CASE-2053 · Root comment breaking the `<Transition>` without any warning
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍10 💬4 · open · labels: :lady_beetle:  bug/scope: transition
- **Excerpt**: ### Vue version 3.2.37 ### Link to minimal reproduction [link] ### Steps to reproduce Click the `Toggle` button twice, the `<Home>` component missing. ### What is expected? `<Home>` and `<About>` components can be switched back and forth. ### What is actually happening? When switch to `<About>` component with root comment, `<Transition>` breaking. Console does not have any warning. ### System Info _No response_ ### Any additional comments? I think it should log a warning to admonish this usage, if this is a limitation.

### CASE-2059 · Unnecessary move animation in nested <transition-group>
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬4 · open · labels: scope: transition/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.2.30 ### Reproduction link [github.com]([link]) ### Steps to reproduce npm run dev en : and click green or red button to change sort 中文 : 然后点击绿色或红色的按钮调整列表顺序 ### What is expected? en : Only the outermost div has transition animation 中文 : 只有最外层的 div 有过渡动画 ### What is actually happening? en : Inner div also has transition animation 中文 : 内部的 div 同样产生了过渡效果 --- en : i find add a css can fix this bug 中文 : 我发现添加一个 css 可以修复这个 bug .scx-group-list-move .scx-group-list-move { transition: unset; } <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2061 · Conditional rendering causing to trigger CSS transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: :lady_beetle:  bug/🔩 p2-edge-case
- **Excerpt**: ### Version 3.2.26 ### Reproduction link [SFC Playground]([link]) ### Steps to reproduce Change page using pagination button (not prev/next) ### What is expected? Switch should not animate when is mounted ### What is actually happening? For some reason, the switch is animated when is mounted. IDK why because its value is always set to true. This bug is related to the fact that inside the pagination I conditionally render either a button or a span tag. (line 38). If you set `ENABLE_SPAN_SWAP` to false to disable conditional rendering or use prev/next buttons to change the page then this bug…

### CASE-2066 · transition-group throws error attempting to transition whitespace node, but only with migration build and client-side compiled template
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: transition/has workaround/scope: v2 compat
- **Excerpt**: ### Version 3.2.11 ### Reproduction link [codesandbox.io]([link]) ### Steps to reproduce - Load the CodeSandbox link. Open the CodeSandbox console (using the console link in the bottom left corner of the preview area) and note that a warning about `<TransitionGroup>` has already appeared. - Click the "Toggle transition" button ### What is expected? The transition works (the hidden image appears) ### What is actually happening? An error is thrown when attempting the transition (`child.el.getBoundingClientRect is not a function`), and the transition doesn't work. Additionally, a warning is…

### CASE-2067 · transition-group containing component with multiple root nodes throws error when transitioning (child.el.getBoundingClientRect is not a function)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: transition
- **Excerpt**: ### Version 3.2.12 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce - Load the SFC playground link. Note that it throws a warning on load. - Click the "Toggle transition" button. Note that this throws a warning, but otherwise behaves correctly. - Click the "Toggle transition" button again. This throws an error. ### What is expected? The transition toggles without warnings or errors. ### What is actually happening? - When the SFC playground loads, it throws the warning `Extraneous non-props attributes (class) were passed to component but could not be automatically…

### CASE-2072 · Transition wrapper components break hydration
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vue
- **Signals**: 👍5 💬4 · closed · labels: :lady_beetle:  bug/scope: ssr/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.1.1 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create an SSR App with Vue 2 compatibility mode 2. Add a component that wraps `<transition>` component 2. Try to render anything wrapped in that component ### What is expected? Hydration should work without errors ### What is actually happening? Hydration fails with the message: ``` vue.runtime.esm-bundler.js:1343 [Vue warn]: Hydration node mismatch: - Client vnode: Symbol(Comment) - Server rendered DOM: <!--[--> (start of fragment) at <BaseTransition appear=false persisted=false mode=undefined ... > at…

### CASE-2081 · Transition TypeError with multiple listeners
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: transition/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.0.5 ### Reproduction link [[link]]([link]) ### Steps to reproduce Click the toggle button ### What is expected? The grey square should hide ### What is actually happening? ``` Uncaught (in promise) TypeError: onLeave is not a function ``` --- Worked in Vue 2: [link] <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2085 · use slotted() in component is not working when use transition element
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍1 💬4 · closed · labels: :lady_beetle:  bug/scope: transition/scope: slots/:exclamation: p4-important
- **Excerpt**: ### Version 3.0.4 ### Reproduction link [[link]]([link]) ### Steps to reproduce Change hasTransition flage in todo.vue, you will see that. ### What is expected? I want transition elements to be used with components that use slotted() ### What is actually happening? As title. <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2086 · Transitions doesn't work with leave hooks
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.4 ### Reproduction link [[link]]([link]) ### Steps to reproduce Click on "Have Children" menu, it expands nicely with css transition but collapse will not transition in v3.0.4 while it works in v3.0.3. ### What is expected? Expand and collapse with transition effect. ### What is actually happening? Collapse transition is not working --- I believe this is happening because v.3.0.4 is disabling the transition before `nextFrame` in this merged PR [link] I can see in dev tools that when the height is changed to "0px", `transition-property: none` is applied to the element that…

### CASE-2091 · kebab case props on slots are not transformed to camelcase
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue
- **Signals**: 👍2 💬4 · closed · labels: :lady_beetle:  bug/has workaround/has PR
- **Excerpt**: ### Version 3.0.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce Open [link] and you'll see that `<template #object>` slot will render value of `props.hasBeenClicked`. Clicking on "Click me" button also works as expected and re-renders new value. Nothing of this works when I use boolean value directly. Same goes for string and maybe other primitive type values. ### What is expected? Boolean prop should work same as object prop. I'd expect it to work same as in Vue 2: [link] ### What is actually happening? Boolean and string props don't work until they are wrapped in an object.…

### CASE-2097 · Transition hooks not working properly (only when using SFCs)
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-beta.19 ### Reproduction link [[link]]([link]) ### Steps to reproduce Run the example here: [link] (or run the `avoid-sfc` branch of the GitHub repo) - See that the onLeave hook waits until `done` is called to set `display: none` Run the example in the GitHub repro (that uses SFCs) - See that the onLeave hook sets `display: none` immediately, even though `done` isn't called until 1s later ### What is expected? Element visibility isn't toggled until `done` is called ### What is actually happening? Element is hidden immediately --- After further investigation, it seems this is…

### CASE-2099 · Router navigation bug when wrapped with a transition
- **Principles**: P-D1, P-D2, P-D3 · **Env**: ios, vue, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-beta.15 ### Reproduction link [[link]]([link]) ### Steps to reproduce "dependencies": { "axios": "^0.19.2", "bulma": "^0.9.0", "core-js": "^3.6.5", "lodash-es": "^4.17.15", "register-service-worker": "^1.7.1", "vue": "^3.0.0-beta.15", "vue-class-component": "8.0.0-alpha.6", "vue-property-decorator": "9.0.0", "vue-router": "^4.0.0-alpha.13", "vuex": "^4.0.0-beta.2", "webpack-build-notifier": "^2.0.1" }, "devDependencies": { "@user/jest": "^26.0.0", "@user/lodash-es": "^4.17.3", "@user/eslint-plugin": "^3.3.0", "@user/parser": "^3.3.0", "@user/cli-plugin-babel": "~4.4.4",…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-2003 · Unable to unset a 'form' prop on a button with null value.
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍1 💬5 · closed · labels: :lady_beetle:  bug/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.0.4 ### Reproduction link [[link]]([link]) ### Steps to reproduce * Run the fiddle above. * check the console * See an error: ### What is expected? 'form' attribute is being unset successfully. ### What is actually happening? Console Warning: > Failed setting prop "form" on <button>: value null is invalid. TypeError: Cannot set property form of #<HTMLButtonElement> which has only a getter --- [ref] attempted to solve a similar problem, making Vue patch this with `setAttribute` instead of setting it as a DOMprop - but the added value check makes Vue fall back to a DOMprop…

### CASE-2007 · Custom element properties cannot be overridden
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · open · labels: :hammer: p3-minor-bug/scope: custom elements
- **Excerpt**: ### Vue version v3.5.18 ### Link to minimal reproduction [link] ### Steps to reproduce I'm creating a custom datepicker control. Similar to the native `<input type="datepicker">` control, I want to reject assignments to the `value` property that aren't valid dates. An easy solution would be to subclass the custom element: ```javascript const baseCustomElement = defineCustomElement({ props: { myProp: Date }, setup(props) { ... }, }); class DerivedCustomElement extends baseCustomElement { set myProp(newValue) { if (isValid(newValue)) { super.myProp = newValue; } } } ``` However, this doesn't…

### CASE-2008 · Value is visable in html when rendering input with type password
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.4.28 ### Link to minimal reproduction [link] ### Steps to reproduce in this example you can see a input of type password being rendered and it shows the value in the html ### What is expected? Value should not be visible in the HTML. ### What is actually happening? It started happening in Vue 3.4.28: [link]]/blob/main/changelogs/CHANGELOG-3.4.md[ref]-2024-06-14 Here's the relevant commit: [link]]/commit/537a571f8cf09dfe0a020e9e8891ecdd351fc3e4 ### System Info ```shell ``` ### Any additional comments? I originally posted this as a bug of Quasar: [link]

### CASE-2011 · CSS direct descendant wildcard rule no longer applied to child components
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: scope: compiler/has workaround/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.15 ### Link to minimal reproduction [link] ### Steps to reproduce The Vue issue helper doesn't seem to create issues, so I have to fill this form manually. **Steps to reproduce:** Create a component with a scoped style block having a CSS rule affecting its direct descendants with a wildcard rule, such as: ``` > * { max-width: 200px; } ``` ### What is expected? CSS rule is applied to children, as it does in 3.5.14. ### What is actually happening? CSS rule is not applied to children after 3.5.15. If I remove the direct descendant arrow, or replace the wildcard with div, the…

### CASE-2015 · `triggerRef` fails when target is an array
- **Principles**: P-G4, P-E3 · **Env**: vue, react
- **Signals**: 👍1 💬4 · closed · labels: scope: reactivity/has workaround/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.6 ### Link to minimal reproduction [link] ### Steps to reproduce ```ts const form = reactive({ user: { email: ['[email]', '[email]'] } }); const emailNumberRef = toRef(form.user.email, 0); watchEffect(() => { console.log(emailNumberRef.value); }); triggerRef(emailNumberRef); // <-- FAILS /* @user/reactivity/dist/reactivity.cjs.js:1487 ref2.dep.trigger({ ^ TypeError: Cannot read properties of undefined (reading 'trigger') */ const emailStringRef = toRef(form.user.email, '1'); // <-- TS is not happy watchEffect(() => { console.log(emailStringRef.value); });…

### CASE-2020 · Unexpected DOM Updates When Wrapping Checkbox in a Vue Component
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍3 💬4 · closed · labels: scope: v-model/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version v3.4.38 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Open the Devtools Elements panel. 2. Click on the first Checkbox, and notice that the corresponding `<input>` does not show any updates. 3. Click on the second Checkbox, and observe that the corresponding `<input>` flickers (updates). [link] ### What is expected? In this straightforward reproduction, the corresponding `<input>` DOM should not be updated when clicking on the Checkbox, as there are no updates besides `modelValue`. ### What is actually happening? The following code does not update the DOM,…

### CASE-2034 · Allow to pass an object of modelModifiers to native inputs
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍11 💬4 · open · labels: :sparkles: feature request
- **Excerpt**: ### What problem does this feature solve? Native inputs support v-model modifiers `lazy, number and trim`. However, most of the time, people use a wrapper around their inputs. According to the docs you can add modelModifiers to your custom component so thats not the problem. However, it is impossible to pass all modifiers from the wrapper component down to the unerlying native input. ```vue <template> <!-- not working --> <input v-model.modelMofidiers="value" /> </template> <script setup> defineProps({ modelValue: String, modelModifiers: Object }) </script> ``` There is just no working…

### CASE-2047 · v-bind:name not working when name attribute is present
- **Principles**: P-G4, P-E3 · **Env**: linux, vue, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.2.39 ### Link to minimal reproduction [link] ### Steps to reproduce - Add an input with static name attribute and a dynamic name (v-bind:name) attribute, binded to a component reactive property (data, props, computed, etc.). - Inspect the input name using browser devtools or any other tool or mechanism (like sending and catching a post request). ### What is expected? The input name to have the same value of the property binded. ### What is actually happening? It keeps the static name, ignoring completely v-bind:name ### System Info ```shell System: OS: Linux 5.15 KDE neon…

### CASE-2054 · Encountered Error `Maximum call stack size exceeded` when using `<component>`
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: regression
- **Excerpt**: ### Link to minimal reproduction [link] ### Steps to reproduce After I upgraded my vue dependency from `[email]` to `[email]` in my project, I found that my project was not working properly. I encapsulate my own input component in a file called `Input.vue`, however, it seems to be conflicting with `<component is="input" />`, producing the error as I described in the title. > I reproduced this errored case in The SFC Playground too. ### What is expected? 1. I understand that I could avoid this by changing the name of the `Input.vue` file, but this naming would have worked perfectly fine in the…

### CASE-2062 · css scoped with v-global compilation results are incorrect
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.2.26 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce # step1: input css ```vue <style scoped> :global(.global) .scoped { color: #f00; } .scoped :global(.global) { display: block; } :global(.global) { display: block; } .scoped { background-color: #0f0; } </style> ``` # step2: get css ```css /* incorrect */ .global { color: #f00; } /* incorrect */ .global { display: block; } /* incorrect */ .global { display: block; } .scoped[data-v-f13b4d11] { background-color: #0f0; } ``` ### What is expected? # step2: get css（expected） ```css /* expected */ .global…

### CASE-2065 · Support TS annotation on v-model
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: New issue repro of issue [ref]. It was closed with fix that appears to address a different issue. Apologies for reposting. ### What problem does this feature solve? An object with attributes of union type throws ts2322 in Volar when supplied to v-model for textarea, input (and others), when the attribute is specified in `v-model`. Type annotation would solve, and does do so with `v-bind`, but doesn't work with `v-model`. Ergo the only current workaround is to use a v-bind/@user combo where TS annotations can be used. Example usecase: ```ts interface MyType { data: string|Date, } ``` Template:…

### CASE-2073 · There is a problem when using the setup writing method of vue3 and the element plus UI
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0 ### Reproduction link [[link]]([link]) ### Steps to reproduce ## In the use of setup syntax, the elform of element plus UI uses ref and v-modal at the same time, and the input box will get stuck The code is as follows ```html <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" > <el-form-item label="age" prop="age" :rules="[ { required: true, message: '年龄不能为空' }, { type: 'number', message: '年龄必须为数字值' }, ]" > <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" placeholder="bug" /> </el-form-item>…

### CASE-2077 · 在函数里赋值给reactive申明的响应式参数，能够在赋值的下一行打印出来，但是在template中取不到
- **Principles**: P-G4, P-E3 · **Env**: react, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.11 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1、用script导入高德的jsapi 2、获取高德map对象 3、使用高德的搜索插件，搜索完毕赋值，可打印，但是在template不可使用 4、不知是我没有使用正确，还是vue3的bug 使用的antdv2 template： ``` <a-select style="width:100%" placeholder="请输入你要检索的地点" show-search @user="searchPalace" > <a-select-option v-for="palace in palaces" :value="palace.name"> {{ palace.name }} </a-select-option> </a-select> <div id="container" style="height:300px;width:300px"></div> ``` js： ``` setup(){ const AMap = undefined const map = undefined const data = reactive({ palaces: [], }) onMounted(() => { //…

### CASE-2078 · Cannot remove size attribute of <input>.
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/has workaround/:cake: p2-nice-to-have
- **Excerpt**: ### Version 3.0.11 ### Reproduction link [[link]]([link]) ### Steps to reproduce - Open the link. - Display error: Uncaught (in promise): Failed to set the 'size' property on 'HTMLInputElement': The value provided is 0, which is an invalid size. ### What is expected? Renders `<input>` without the size attribute because I specified null for the size. ### What is actually happening? An error will occur. --- Even if `undefined` is given, an error will occur. <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2082 · Multiple Select Initialization
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍2 💬4 · closed · labels: :lady_beetle:  bug/has workaround/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.0.5 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Create select with few different options. 2. Add 'multiple' attr to select. 3. Add 'selected' attr to few select options. 4. Just update the page ### What is expected? All selected options are chosen ### What is actually happening? Only last select option is chosen <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2089 · Using "bundler" build with compiler (vue.esm-bundler.js) with webpack in "production" mode includes @user/parser in final bundle
- **Principles**: P-G4, P-E3 · **Env**: vue, webpack
- **Signals**: 👍1 💬4 · closed · labels: :lady_beetle:  bug/scope: compiler
- **Excerpt**: ### Version 3.0.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. create new project with Vue CLI - select Vue 3 preset 2. Modify `build` command in `package.json` by adding `--report` 3. create `vue.config.js` and enable runtime compilation - `runtimeCompiler: true` (which switches vue alias to `vue.esm-bundler.js`) 3. run `yarn build` 4. Check `dist\report.html` ### What is expected? "vendors" bundle should not include `@user/parser` package (230 KB) ### What is actually happening? `@user/parser` is part of the production bundle... --- As anything from @user/parser is not…

### CASE-2092 · v-model.number modifier doesn't work on custom component
- **Principles**: P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1: Open codepen link 2: Add a number to the fisrt input and the type "number" will display. This is a normal input. 3. Add a number to the second input and the type "string" will display. This is a custom input. ### What is expected? The custom input should return a number. ### What is actually happening? It returns a string. <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2093 · reactivity issue with property watch and emit
- **Principles**: P-G4, P-E3 · **Env**: react, vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/has PR
- **Excerpt**: ### Version 3.0.0 ### Reproduction link [[link]]([link]) ### Steps to reproduce On the minimal reproduction example, click on "via watch on component property" ### What is expected? it should display "global: indirectVal" ### What is actually happening? it displays "global: initialValue" --- On the minimal reproduction example, you can replace [link] with [link] to show the behaviour with Vue.js 2.x Is this an expected regression? (I've read various migration stuff and didn't find any mention of this). In the project that hit this issue, the component is doing stuff with textarea cursor:…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-2004 · Vue production build errors at runtime when encountering a <style> tag in HTML
- **Principles**: P-A5 · **Env**: vue
- **Signals**: 👍3 💬5 · closed
- **Excerpt**: ### Version 3.0.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Pull repo 2. Run `yarn build` or `npm run build` 3. Run index.html and see error in the console ### What is expected? Vue should (or used to) ignore <style> and <script> tags that were in the HTML that it's running on top of. ### What is actually happening? It's throwing "Uncaught SyntaxError: 59" and stopping execution of Vue. --- This bug came up because I have SVGs in my markup that are rendered by Twig/PHP, and they have <style> tags in them. <!-- generated by vue-issues. DO NOT REMOVE -->

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-2010 · A component which is a memory leak will cause all components of the routing page to fail to be destroyed normally. If it is in a large component, it will cause serious performance problems‼️
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.5.14 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Click the "EmptyPage" button to enter the EmptyPage page, open the browser Memory panel and Performance monitoring panel Performance monitor, record memory snapshots and record DOM Nodes (Memory: 18.1MB, DOM Nodes: 53) 2. Click the "TestElSelect" button, enter the TestElSelect page, trigger the drop-down box of the Select component (you can trigger one or more, feel free), click the "EmptyPage" button, go back to the EmptyPage page, record a memory snapshot and record DOM Nodes (Memory: 20.9MB, DOM Nodes:…

### CASE-2022 · Memory leak on unmounted DOM element or component
- **Principles**: P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.4.29 ### Link to minimal reproduction [Reproduction]([link]) ### Steps to reproduce Click the toggle button a few times. ### What is expected? There is a div with an @user event listener, and my expectation is that the event listener should be added when the div is mounted to the DOM and removed when the div is unmounted. ### What is actually happening? The console shows that the event listener gets added, but never that it gets removed. Performance recordings show that the amount of listeners keeps increasing, never decreasing. ![Screenshot 2024-07-08…

### CASE-2031 · Lifecycle hooks is executed in the wrong order.
- **Principles**: P-F5, P-H3 · **Env**: vue
- **Signals**: 👍1 💬4 · closed · labels: :lady_beetle:  bug/🔩 p2-edge-case
- **Excerpt**: ### Vue version 3.3.4 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Click the `open:0` button 2. Click the `close` button 3. Click the `open:1` button ### What is expected? Console log: ``` open: 0 init => onBeforeMount onBeforeMount => onMounted onMounted => onBeforeUnmount onBeforeUnmount => onUnmounted close init => onBeforeMount onBeforeMount => onMounted open: 1 init => onBeforeMount onBeforeMount => onMounted onMounted => onBeforeUnmount onBeforeUnmount => onUnmounted ``` OR: ``` open: 0 close init => onBeforeMount onBeforeMount => onMounted open: 1 ``` ### What is…

### CASE-2064 · Nested Teleport of disabled teleport stays in DOM when parent is unmounted
- **Principles**: P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · open · labels: :lady_beetle:  bug/scope: teleport
- **Excerpt**: ### Version 3.2.19 ### Reproduction link [codesandbox.io]([link]) ### Steps to reproduce 1. use a teleport, and set it's disabled prop is `true`; 2. put some components inside; 3. make the teleport unmount (e.g. v-if, switch route, or other...); 4. these child components will not be unmount. ### What is expected? These child components will be unmount. ### What is actually happening? These child components will not be unmount. <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2076 · 使用keepAlive缓存路由，首次跳别的路由时候，被缓存的路由会执行unmounted方法
- **Principles**: P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: keep-alive/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.0.11 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. 启动脚手架，打开F12 console 2. 点击缓存Home页面，使include为 ['Home'] 3. 点击 count 按钮， 使count不为 0 4. 切换路由为about，在console中观察到打印 'home 销毁'，说明触发了 unmounted 5. 切换回home，未打印'home 创建'且count不为0，说明home是被缓存的，与第4步触发unmounted现象发生矛盾 ### What is expected? 期望被缓存的路由不执行销毁生命周期函数 (unmounted) ### What is actually happening? 被缓存的路由组件首次跳别的路由会执行销毁生命周期函数 --- 遇到这个bug的场景是添加面包屑功能，在面包屑存在的路由需要被缓存，关闭面包屑的路由组件应被释放 <!-- generated by vue-issues. DO NOT REMOVE -->

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-2014 · A reactive variable create from the `Map` data while lost some new functions after use iterator methods like `values`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, react, vue
- **Signals**: 👍7 💬4 · closed · labels: scope: reactivity/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.5.13 ### Link to minimal reproduction [Vue SFC Playground]([link]) ### Steps to reproduce do nothing ### What is expected? all result is `true` ### What is actually happening? some method is lost ### System Info ```shell System: OS: macOS 14.6.1 CPU: (8) arm64 Apple M2 Memory: 76.94 MB / 16.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 22.12.0 - ~/.local/state/fnm_multishells/89642_1734598694517/bin/node npm: 10.9.0 - ~/.local/state/fnm_multishells/89642_1734598694517/bin/npm pnpm: 9.15.0 - ~/.local/state/fnm_multishells/89642_1734598694517/bin/pnpm bun: 1.1.39 -…

### CASE-2023 · In certain cases, the view fails to update properly
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.4.30 ### Link to minimal reproduction [link] ### Steps to reproduce First start the project, you will find that when you click the fold away button, the red border cannot be updated properly. When you switch to app2.vue in main.js, you will find that everything is normal, in fact, the two usage methods should be equivalent ### What is expected? You can update the view normally in both cases, or explain why this happens ### What is actually happening? When the value of a bound reactive variable changes, the border does not update properly ### System Info ```shell Version:…

### CASE-2024 · Incorrect type error with kebab-cased "aria-*" props
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.4.21 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Create a component with a prop name of "ariaLabel" 2. Render that component with a valid value as `aria-label` ### What is expected? No type errors should be thrown ### What is actually happening? The kebab-cased version of an `aria-*` prop will produce a type error. This is true of all aria properties, not just valid ones. For example, `aria-whoops` will also produce an error. ``` Argument of type '{ "aria-label": string; }' is not assignable to parameter of type '{ ariaLabel: string; } & VNodeProps &…

### CASE-2032 · Async component not rendering in SSR bundle, due to `default` export being missed
- **Principles**: P-E1, P-E2, P-E4, P-F4 · **Env**: vue
- **Signals**: 👍1 💬4 · open · labels: need guidance/scope: ssr/has workaround
- **Excerpt**: ### Vue version 3.3.2 ### Link to minimal reproduction [link] ### Steps to reproduce See reproduction repository for steps. The async component is not rendered after bundling because inside the `defineAsyncComponent` function the code to set the `comp` variable to the default export of the "module" is not being run. When running, it is helpful to attach a debugger and break at the relevant code inside the `defineAsyncComponent` function so you can see the problem more clearly: ```js 🔴 if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) { comp = comp.default; } ``` The…

### CASE-2033 · scss v-bind doesn't work with rgb()
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.3.2 ### Link to minimal reproduction [link] ### Steps to reproduce Use v-bind in css rgb function in style block with scss ### What is expected? The variable works in the rgb function ### What is actually happening? An error occurs: Internal server error: [sass] Missing element $green. ### System Info _No response_ ### Any additional comments? I don't know if this bug belongs here or anywhere else. If I assign the JS variable to a css variable using v-bind first and then use the css variable in the rgb function it works: ```css <style lang="scss"> .headline { --color:…

### CASE-2040 · template local variable pollution
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: opera, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [link] ### Steps to reproduce ``` <template> <div v-show="false"> {{ text = ['1,2,3,4,5'] }} </div> <div>{{ text }}</div> </template> ``` ![image]([link]) ### What is expected? text not found ### What is actually happening? text normal operation ### System Info _No response_ ### Any additional comments? _No response_

### CASE-2049 · v-model.lazy is not updating the value of an input when it has a focus
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: vue
- **Signals**: 👍1 💬4 · closed · labels: :lady_beetle:  bug/scope: v-model/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version after 3.2.0-beta.5 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Type Jacob into the input. 2. Hit enter. same as [link] ### What is expected? Value property of the input element should be changed to Joseph, as was the value of the name property in the Vue instance. ### What is actually happening? Value property of the input element is not being changed. ### System Info _No response_ ### Any additional comments? The value of the input is correctly being updated when using v-model without .lazy modifier. 3.2.0-beta.4 does not have this bug. This bug occurs…

### CASE-2050 · ref type broken for HTMLElement
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: ### Vue version 3.2.27 ### Link to minimal reproduction [link] ### Steps to reproduce Note the error on line 4 of `index.ts`. ### What is expected? `ref<HTMLElement | null>(null)` is assignable to a variable of type `Ref<HTMLElement | null>`. ### What is actually happening? Type Error: ``` Type '{ accessKey: string; readonly accessKeyLabel: string; autocapitalize: string; dir: string; draggable: boolean; hidden: boolean; innerText: string; lang: string; readonly offsetHeight: number; ... 274 more ...; focus: (options?: FocusOptions) => void; }' is not assignable to type 'HTMLElement'. The…

### CASE-2055 · v-model.lazy does not update DOM element when it has focus after Vue model change
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: v-model/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.2.33 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce Within 5 seconds of the page loading, move the slider to any non-zero value (which makes sure the slider has DOM focus). After 5 seconds, timer will internally change the ref level to 0 ### What is expected? Both the text to the left AND the slider go to 0 after 5 seconds ### What is actually happening? The text to the left goes to 0, but the slider remains where it was last dragged to --- If the slider doesn't have focus (e.g. we don't move in in the 5 second window after page load), the slider also…

### CASE-2070 · App.vue(parent) variable change <component :is='Children' > ,Children.vue render twice
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/:hammer: p3-minor-bug
- **Excerpt**: ### Version 3.1.5 ### [Reproduction link] [[link]]([link] "") ### Steps to reproduce 1. item in v-for "arr" 2. App.vue(parent) Irrelevant variable change 3. watch the devtools, 4. click button 3. \<result1>:\<component v-model='item.id'>，Children.vue render twice 4. \<result2>:\<component v-model='arr[0].id'>，Children.vue oneice twice ### What is expected? render onice ### What is actually happening? App.vue(parent) variable change , Children.vue render twice --- watch the devtools, click button \<result1>:\<component v-model='item.id'>，Children.vue render twice \<result2>:\<component…

### CASE-2074 · this.$store is undefined in components in migration build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.1.0-beta.7 ### Reproduction link [[link]]([link]) ### Steps to reproduce Follow the steps outlined [here]([link]) to upgrade a vue 2.x app using vuex to vue 3, and use `@user/compat v3.1.0-beta.7` ### What is expected? The store is accessible in components via this.$store after migration build is installed and compiler errors are dealt with in the console. ### What is actually happening? this.$store is undefined in components after the migration build is installed and compiler errors are dealt with. --- I could be reading the @user/compat instructions incorrectly, but it seems…

### CASE-2080 · Renamed variable caused unhandled error in console
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.7 ### Reproduction link [[link]]([link]) ### Steps to reproduce Current version of Vue@user throwing error in console and asks to log this to Vue team, so I'm here. So I'm using variable in root component that got renamed, and child component still have old variable name, and that's basically what causes this error in a console. Example: [link] ### What is expected? Some meaningful error message pointing to template line where variable is not resolved. ### What is actually happening? There is no error message except of Vue's warning about `Unhandled error during execution of…

### CASE-2083 · script setup: Compiler creates wrong patch flags depending on style of variable assignment.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react, vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: compiler/scope: sfc
- **Excerpt**: ### Version 3.0.5 ### Reproduction link [[link]]([link]) ### Steps to reproduce 0. clone, run `yarn` and `yarn dev` in terminal 1. use `assignment 2` to create reactive array, named as `receivedData` in `App.vue` 2. click `emit` button on the page 3. DOM view didn't update(`why`) as `receivedData` updated 4. use `assignment 1` 5. click `emit` button 6. DOM view updates as `receivedData` updated(`why`) ```javascript /* assignment 1 */ const { receivedData, receiveHandler } = { receivedData: reactive([]), receiveHandler: function (arg1, arg2) { receivedData.push([arg1, arg2]); } }; ```…

### CASE-2090 · Unhandled error during execution of scheduler flush.
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce Clone the github repo and and access the router-link About ### What is expected? no errors / Global properties should be accessible inside the setup() function : ### What is actually happening? Vue warn]: Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at [link] at <Sidebar onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > at <RouterView> at <App> --- Global properties is not accessible inside the setup() function : Uncaught (in promise)…

### CASE-2096 · `change` event happens before `v-model` updates the value
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug
- **Excerpt**: ### Version 3.0.0-rc.7 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. Select a country from the dropdown list 2. No data for the selected country is shown 3. Select another country 4. The data for the **first country** selected is now shown ### What is expected? The first time the country is selected to show data for that country right away ### What is actually happening? 1. The first time I select a country, the `selectedCountry` ref variable is showing as an object with the property `value` set to the country selected. 2. When the code tries to access…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-2016 · Remove vue custom element and append it back later can cause a lot of issues
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: vue
- **Signals**: 👍1 💬4 · open · labels: :hammer: p3-minor-bug/scope: custom elements
- **Excerpt**: ### Vue version 3.5.13 ### Link to minimal reproduction [link] ### Steps to reproduce 1. Click "remove el1" and then click "prepend el1", we'll get an error ![image]([link]) 2. Refresh the page, click "move el2 to el1". el2 is not updated 3. Refresh the page, click "remove el2" and "append el2", and then click "change el2 attr", its attribute is changed, but prop is not updated ### What is expected? Remove custom element and append it back should work as expected ### What is actually happening? For now, Vue will unmount the custom element after next tick of disconnection. If we append fully…

### CASE-2026 · the div which has the ref attribute inside the v-for, when I v-if toggle them, the ref value.length increase more and more
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/has workaround
- **Excerpt**: ### Vue version 3.2.47 ### Link to minimal reproduction [link] ### Steps to reproduce if I click `toggleVisible` many times, 1. the `refDivSingle` toggle between null and div 2. the `refCompSingle` toggle between null and {} 3. the `refDivArr.length` increase **more and more** <-- error here 4. the `refCompArr.length` toggle between 3 and 0 if I use ref function, it don't get null <img width="532" alt="image" src="[link]]/assets/417448/b1a09a97-2c9f-4310-9430-27aa04b79863"> ### What is expected? the `refDivArr.length` should toggle between 3 and 0, same as the `refCompArr.length` ### What is…

### CASE-2027 · bugs: teleport component with router push occur error
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: scope: teleport/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.3.4 (latest) ### Link to minimal reproduction [link] ### Steps to reproduce i have to router and object props props has click event to child components child components also have teleport component ``` <teleport to="#app"> <div class="teleport">move</div> </teleport> ``` teleport to app occured error change to Fields('#app') to another class(ex: '.container'), it works ### What is expected? teleport to div tag with id 'app' ### What is actually happening? but it has error loop ![image]([link]]/assets/51049245/72d75b40-1860-4c39-ae46-bedb71d33170) ### System Info _No…

### CASE-2030 · Unhandled error during execution
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Vue version 3.3.4 ### Link to minimal reproduction [link] ### Steps to reproduce Start a blank project running `vue create [project-name]` Create a simple home screen Fetch the pokemon data in this home ([link]) Pass as props `name`and `url` data to a component With this props in this component, create another, then pass the `url`as props to another component. In this third component, try to render the pokemon data, like image and name, using the `url` passed as props. the error says : `[Vue warn]: Unhandled error during execution of render function ` `Unhandled error during execution of…

### CASE-2037 · Whitespace preserve does not work
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍4 💬4 · open · labels: :lady_beetle:  bug/scope: compiler/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.2.37 ### Link to minimal reproduction [link] ### Steps to reproduce Check `vite.config.ts`, you will find that `template.compilerOptions.whitespace: 'preserve'` is set. Then look at `App.vue` and the output. ### What is expected? I is my understanding that with `whitespace: 'preserve'` the output should be ![image]([link]) or at least it should be easily possible to change the template so that it is. ### What is actually happening? The output is ![image]([link]) and I have found no obvious way to get the desired output. I have tried * adding a second `<span>` with a space in…

### CASE-2051 · content for literal <template> elements is not readable.
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍1 💬4 · open · labels: :lady_beetle:  bug/🔩 p2-edge-case
- **Excerpt**: ### Vue version 3.2.37 ### Link to minimal reproduction [link] ### Steps to reproduce Visit testcase. ### What is expected? Both custom elements should render identically ### What is actually happening? The custom element inside the Vue app renders an empty iframe, because the `<template>` element's content is being emptied by Vue. ~Template elements inside the app but *not* inside a custom element do retain their contents.~ ### System Info _No response_ ### Any additional comments? _No response_

### CASE-2057 · translate="no" in Vue3 is not work
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/has workaround/🔩 p2-edge-case
- **Excerpt**: ### Version 3.2.31 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce 1. npm init vue@user 2. write code like this: ``` <div translate="no">Hello Vue.js</div> <div translate="yes">Hello Vue.js</div> ``` <img src="[link] width="400px" /> ### What is expected? Expect something like this. <img src="[link] width="400px" /> ### What is actually happening? Actually: <img src="[link] width="400px" /> <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2058 · cant get ref value in v-for in my project, but work online playground
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍1 💬4 · closed · labels: :lady_beetle:  bug
- **Excerpt**: ### Version 3.2.31 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce copy sfc playground code to my project, console return version: 3.2.31 refs: proxy {} ![image]([link]) ### What is expected? need right ref value in v-for ### What is actually happening? cant get result <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2069 · TSX Wrong Emit Handler Return Type
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.2.1 ### Reproduction link [[link]]([link]) ### Steps to reproduce Event handler should return void not validation value of emit. ### What is expected? No type error ### What is actually happening? Type error is happening ![image]([link]) <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2071 · 3.2 Beta issue: router link effect is being run before the route component is unmounted
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.2.0-beta.1 ### Reproduction link [link] [[link]]([link]) <img width="956" alt="Screen Shot 2021-07-19 at 10 14 16 AM" src="[link]> ### Steps to reproduce Click on 'Go to Route A' then on 'Go to Route B' and observe the error thrown in the console ### What is expected? It should not throw any error and switch route correctly (works with vue<3.2) ### What is actually happening? Error <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2079 · Entering the page shows that ReferenceError is not caught: defineComponent is not defined
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.7 ### Reproduction link [[link]]([link]) ![image]([link]) ![image]([link]) ### Steps to reproduce npm run dev ### What is expected? The page is displayed normally ### What is actually happening? Page crash <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2088 · Inconstant `inheritAttrs` behavior in production and development
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug
- **Excerpt**: ### Version 3.0.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce 1. `npm run dev` ![image]([link]) 2. `npm run build`, then serve dist ![image]([link]) ### What is expected? I'm not sure which is expected by vue. I expect the dev behavior ### What is actually happening? behavior is inconstant <!-- generated by vue-issues. DO NOT REMOVE -->

### CASE-2094 · Generic array type infer incorrect
- **Principles**: P-A3, P-H1 · **Env**: react, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-rc.11 ### What is expected? The parameter type of the `push` method of the generic array should be `T` not `UnwrapRefSimple <T>` ### What is actually happening? The parameter type is inferred to `UnwrapRefSimple <T>` ### Steps to reproduce ![image]([link]) Reproduce code ↓ ``` ts import { reactive } from 'vue'; export interface QueueMethods<T> { add: (item: T) => void; } const useQueue = <T>(initialValue: T[] = []): QueueMethods<T> => { const queue = reactive(initialValue); return { add(value: T) { queue.push(value); }, }; }; export default useQueue; ``` --- Caused by this…

### CASE-2095 · View doesn't sync with value when update parent in created hook of child
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.0.0-rc.10 ### Reproduction link [[link]]([link]) ### Steps to reproduce change provider's value in injected component created hook. provider is not re-rendered. Vue3 doesn't work as expected [link] ![image]([link]) Vue2 works as expected [link] ![image]([link]) ### What is expected? Show `changed-value\nchanged-value` ### What is actually happening? Show `provider-value\nchanged-value` <!-- generated by vue-issues. DO NOT REMOVE -->

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-2043 · SSR problem with empty text node in render function
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍3 💬4 · closed · labels: :lady_beetle:  bug/scope: ssr/:hammer: p3-minor-bug
- **Excerpt**: ### Vue version 3.2.45 ### Link to minimal reproduction [link] ### Steps to reproduce Click the button in the Playground example above. Note the console error. The UI also does not update to show the new text. ### What is expected? No error. ### What is actually happening? ``` Uncaught (in promise) TypeError: Cannot set properties of null (setting 'nodeValue') at setText (runtime-dom.esm-browser.js:9332:24) at processText (runtime-dom.esm-browser.js:6536:17) at patch (runtime-dom.esm-browser.js:6491:17) at patchKeyedChildren (runtime-dom.esm-browser.js:7274:17) at patchChildren…

### CASE-2044 · SSR+Suspense: the fallback slot is not hidden after hydration
- **Principles**: P-F4 · **Env**: vue
- **Signals**: 👍3 💬4 · closed · labels: :lady_beetle:  bug/scope: suspense/scope: ssr
- **Excerpt**: ### Vue version 3.2.45 ### Link to minimal reproduction [link] or [link] ### Steps to reproduce Open the prepared sfc.vuejs.org link or Clone prepared github-repo, run `yarn install && yarn dev` and open [link] URL in the browser ### What is expected? Application root component will be rendered on the server to: ``` Dynamic client only value: value I'm content! ``` and will not change after client hydration. ### What is actually happening? Application root component rendering on the server to: ``` Dynamic client only value: value I'm content! ``` and then replaced on client during hydration…

### CASE-2045 · renderToString doesn't render Component is script (json ld)
- **Principles**: P-F4 · **Env**: vue, typescript
- **Signals**: 👍0 💬4 · closed · labels: scope: ssr
- **Excerpt**: ### Vue version 3.2.45 ### Link to minimal reproduction [link] ```typescript import { createSSRApp } from 'vue' import { renderToString } from 'vue/server-renderer' const app = createSSRApp({ template: `<Component :is="'script'" data-something="value" v-html="JSON.stringify({ foo: 'bar' })" />`, }) renderToString(app).then(html => console.log(html)) ``` ### Steps to reproduce Clone the minimal reproduction repo ``` git clone [link] yarn node index.js ``` ### What is expected? After running node index.js ``` <script data-something="value">{"foo":"bar"}</script> ``` ### What is actually…

### CASE-2048 · 3.2.38 regression error for multi-branch dynamic slots
- **Principles**: P-F4 · **Env**: windows, vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/regression
- **Excerpt**: ### Vue version 3.2.38, 3.2.39 (above commit 00036bb52c4e641b2be7fa55c39ced9448163b0f) ### Link to minimal reproduction [link] ### Steps to reproduce Build the project with SSR. ### What is expected? The build should pass. ### What is actually happening? ``` TypeError: Cannot set properties of undefined (setting 'key') at slots.<computed> ``` ### System Info ```shell System: OS: Windows 10 10.0.19044 CPU: (8) x64 Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz Memory: 12.46 GB / 23.84 GB Binaries: Node: 16.15.1 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.15 - ~\AppData\Roaming\npm\yarn.CMD npm:…

### CASE-2060 · Computed value not updated in SSR
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/:exclamation: p4-important
- **Excerpt**: ### Version 3.2.27 ### Reproduction link [github.com]([link]) ### Steps to reproduce ```sh yarn node index.js ``` ### What is expected? Computed value is updated and html renders with correct message. ```sh <div>hello world</div> ``` ### What is actually happening? Computed value is not updated and an empty div is rendered. ```sh <div></div> ``` --- I'm not sure if this a bug or is it me misusing computed in SSR context, but such an app architecture as in my reproduction demo seems to me completely valid and should work. There is a computed value in a component which is based on part of app's…

### CASE-2063 · Template refs fail to compile with typescript
- **Principles**: P-F4 · **Env**: typescript, vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.2.22 ### Reproduction link [sfc.vuejs.org/]([link]) ### Steps to reproduce tsconfig ``` { "compilerOptions": { "target": "esnext", "module": "esnext", "strict": true, "moduleResolution": "node", "allowJs": true, "sourceMap": true, "noImplicitAny": false }, "include": ["Assets/**/*.ts", "Assets/**/*.js", "Assets/**/*.vue"], "exclude": ["node_modules"] } ``` ### What is expected? Compiling ### What is actually happening? Throws a compile error for mismatched types ``` semantic error TS2322: Type 'object | null' is not assignable to type 'HTMLElement | undefined'. Type 'null' is…

## flex-grid — Flex & Grid Layout 弹性与栅格布局 · principles: P-A2, P-A4

### CASE-2068 · State-Driven Dynamic CSS: v-bind doesn't work inside media queries
- **Principles**: P-A2, P-A4, P-B1, P-B2, P-B3 · **Env**: vue
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Version 3.2.2 ### Reproduction link [[link]]([link]) ### Steps to reproduce v-bind after max-width and min-width inside media queries does not provide any data ### What is expected? Expected to see red font with screen width less than 700px ### What is actually happening? We get this css code after compiling: @user only screen and (max-width: v-bind(width)) { div[data-v-f13b4d11] { color: red; } } <!-- generated by vue-issues. DO NOT REMOVE -->

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-2075 · @user/server-renderer renderToString generating incorrect srcset URL for source elements within a router link
- **Principles**: P-C1, P-C2, P-C3, P-A3, P-H1, P-F4 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: :lady_beetle:  bug/scope: ssr
- **Excerpt**: ### Version 3.1.0-beta.6 Edit: Still an issue as of 3.2.30 ### Reproduction link [[link]]([link]) ### Steps to reproduce Clone the git repository. Run `npm install` and then `npm run generate`. This will generate a `dist/static/index.html` file. (One is already generated) ### What is expected? The generated html file should have two picture elements which point to different images in both the `source` element and the `img` element. As seen in the source file at `src/views/Home.vue`. ```html <source media="(prefers-color-scheme: dark)" type="image/svg+xml" srcset="/img/code-white.svg" /> ```…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-2087 · Cannot use v-for in the slot
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vue
- **Signals**: 👍10 💬4 · closed · labels: :lady_beetle:  bug
- **Excerpt**: ### Version 3.0.4 ### Reproduction link [link] ### Steps to reproduce When using v-for in the slot, if the initial list object = [], an error will be reported directly in the subsequent push ### What is expected? Correctly perform responsive rendering ### What is actually happening? Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at [link] --- Found this problem in 3.0.4 <!-- generated by vue-issues. DO NOT REMOVE -->

