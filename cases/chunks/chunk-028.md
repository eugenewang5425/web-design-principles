# Case Chunk 028 — Round 28

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-3701 · FunctionComponent should allow returning VNode[] for HTM
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: types
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Trying to use typing (tsserver with JSDoc), with Preact/HTM, I get a type-mismatch when I try to annotate my Function Components: ``` Type '() => VNode<any> | VNode<any>[]' is not assignable to type 'FunctionComponent<{}>'. Type 'VNode<any> | VNode<any>[]' is not assignable to type 'VNode<any>'. Type 'VNode<any>[]' is missing the following properties from type 'VNode<any>': type, props, key (tsserver 2322) ``` **To Reproduce** ```js import { h, render } from 'preact' import htm from 'htm' const html =…

### CASE-3724 · Hydration removes and add nodes again when there are HTML comments just before them
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Preact unnecessarily removes and adds the DOM nodes that it finds after HTML comments during hydration. ```html <div id="root"> <div>I'm going to be preserved in the DOM</div> <!-- I'm a comment, so I'll be removed, which is also fine --> <div>I'll be removed and added back again</div> </div> ``` **To Reproduce** I reproduced the bug in this repository: [link] ([Open with Stackblitz Codeflow]([link])) And this is a branch with a [Mutation Observer added to the current hydration…

### CASE-3740 · [10.0.0-beta.2] Content rendered with dangerouslySetInnerHTML is removed during hydration
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/has fix
- **Excerpt**: Changes made in [1595]([link]][ref]) removes content of VNodes with dangerouslySetInnerHTML when hydrating. We use dangerouslySetInnerHTML to render content from our CMS. It renders fine on the server, but is now removed on the client side during hydration. When components are updated the content reappears. Peekaboo :) **Cause:** 1. [diff/index.js:279]([link]]/blob/10.0.0-beta.2/src/diff/index.js#L279) innerHTML is not set (good) but the content node remains in excessDomChildren and retains its parentNode (change from previous behavior. ParentNode used to be null as a result of setting…

### CASE-3757 · `hydrate` doesn't replace attributes at root replaced node
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** A clear and concise description of what the bug is. With an HTML pre-hydrated value like this: ```html <div id="app"> <ul style="color: red"> <li>Non-hydrated, should be red</li> </ul> </div> ``` Hydrating with an `ul` of different `style` attributes, like so: ```tsx import { hydrate } from 'preact'; function App() { return ( <ul style={{ color: 'blue' }}> <li>Hydrated, should be blue</li> </ul> ); } hydrate(<App />, document.getElementById('app')); ``` Does not replace the color from the SSR with the…

### CASE-3764 · Uncaught TypeError: _client.default.hydrateRoot is not a function
- **Principles**: P-F4 · **Env**: react, webpack
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: - ✅ Check if updating to the latest Preact version resolves the issue **Describe the bug** Trying to run a Preact compiled NextJs 13 application leads to the above error. Compiling to normal React issue is not present. Note: Issue is present after migrating to new AppDirectory with Server/Client components. **To Reproduce** - Build a small NextJS 13 application that compiles to Preact on build (will try and reproduce in sandbox) - Open the application to render infinite loading page - Issue is present in the console Current using this config to compile on build ``` webpack: (config, { dev,…

### CASE-3799 · bug when hydrating with error boundary
- **Principles**: P-F4 · **Env**: react
- **Signals**: 👍2 💬3 · closed
- **Excerpt**: Hi, I am hydrating server rendered html and have an error boundary to handle client rendering errors. I am observing that if a component throws during hydration, both the original HTML and the "error" HTML are visible. You can reproduce the issue by opening the HTML below in a browser. You can uncomment the imports for react instead of preact to see the expected behavior. ### Steps to reproduce ```html <!DOCTYPE html> <html> <head> <meta charset="utf8" /> </head> <body> <div id="root"> <div>Hello, World!</div> </div> <script type="module"> // use these imports to observe incorrect behavior…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-3702 · Change in v10.11.1 causes inputs to lose focus on DOM changes
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue (no) **Describe the bug** Up to preact v10.11.0 changes in the DOM did not cause a focused input to lose focus. Starting with v10.11.1 the input loses focus. **To Reproduce** Steps to reproduce the behavior: 1. Check out [link] 2. Notice preact is locked to v10.11.0 which does *not* contain the bug 3. Run `npm i` and then `npm start` 4. In the browser click on the input and press backspace 5. Notice the last "tag" is removed but the input keeps focus. 6. Go back to the console and press Ctrl+C to stop the server 7. Run…

### CASE-3715 · Keys not preventing child re-render
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬6 · closed · labels: has fix/The Wreckoning
- **Excerpt**: I've been having some issues today trying to maintain focus on an element as I re-render it. After some investigation I've found what appears to be a rendering issue in Preact... or I'm doing something incorrect (very possible). I've created two examples, [one in React ]([link]). ![render-react]([link]) --- and [one in Preact]([link]). ![render-preact]([link]) --- You can see that as I click through the buttons only the ones that change render in React. If I click the highlighted one nothing renders as nothing changed. When I do the same in Preact, even if the already active button, the…

### CASE-3720 · Possible bug: phantom VDOM node erroring render when using React Aria `ListBoxItem`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍2 💬5 · closed · labels: 11.x
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** A React Aria [`ComboBox`]([link]) containing [`ListBoxItem`]([link]) options fails to render with error `Cannot set property previousSibling of #<Node>`, render works normally for equivalent React application **To Reproduce** I created an issue demonstration repository [here]([link]) which uses the [latest version]([link]) of Preact (10.24.3 at time of writing). The issue demonstration repository is the bare minimum to reproduce the issue, and compares the erroring Preact application with the normally…

### CASE-3723 · It is not possible to remove the `role` attribute which results in invalid HTML
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍1 💬5 · closed · labels: bug/good first issue
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** It seems impossible to toggle between having a role attribute (`dialog` for example) and removing the attribute. For example, I want to have a `role="dialog"` when a menu is open, but remove the role attribute when it is closed. It currently returns an empty value. This affects accessibility because having an empty role is not valid HTML. You can check that using an [HTML validator]([link]): ![Screenshot 2023-09-19 at 16 20 43]([link]]/assets/34552881/14e1551f-2ac2-4e0a-96a6-6e4e0edb0188) This seems…

### CASE-3744 · contentEditable value is getting wiped out (question)
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: question
- **Excerpt**: I am not sure what I am doing wrong but certainly contentEditable value is getting reset on blur. Sorry for stupid question (I did search but did not find anything related to it.) also it is working in React set up but not in this setup To reproduce JSfiddle [[link]]([link]) problematic part of code is this ``` class ChildComponent extends Component { constructor() { super(); this.state = { inputActive: false, }; } render() { return ( <div role="button" style="border:1px solid red;" tabIndex="0" onFocus={() => { this.setState({ inputActive: true }); }} onBlur={() => { this.setState({…

### CASE-3750 · hydrate: checkbox with `autofocus` loses focus
- **Principles**: P-E1, P-E2, P-E4, P-F4, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Hydrating a checkbox with `autofocus` causes focus to be lost. **To Reproduce** ```html <!doctype html> <html> <head> <script type='module'> import { h, hydrate } from '[link] function Test() { return h('input', { type: 'checkbox', value: 'test', autofocus: true }) } hydrate(h(Test), document.body) </script> </head> <body> <input type='checkbox' value='test' autofocus> </body> </html> ``` Steps to reproduce the behavior: 1. Load the page 2. Expect the checkbox to be focused 3. It isn't! **Expected…

### CASE-3758 · onFocusIn and onFocusOut events incorrectly set
- **Principles**: P-E1, P-E2, P-E4, P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** The changing in casing of the `onfocusin` and `onfocusout` attributes to `onFocusIn` and `onFocusOut` in [4307]([link]][ref]), introduced in [10.19.7]([link]]/releases/tag/10.19.7), breaks those types of event listeners. **To Reproduce** 1. Go to [link] 2. Click on the top input field, then click on the next input field 3. See that the top most component does not change from "No focus" to "Has focus". The `focusin` event listener is never triggered. Inspecting the element using dev tools, the `onFocusIn` attrbute creates an event listener for the non standard `FocusIn`…

### CASE-3768 · v10.10.0 broke cypress test
- **Principles**: P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** I have a cypress test that check that closing a modal results in the focus being set on the button that triggered the modal. The test worked with preact version 10.9.0, and broke when I upgraded to preact 10.10.0. The Cypress tests worked with version 10.0.2, and 10.3.0. Please advise if there's something I need to modify in my code or my test in order to remain compatible with preact. Or even some hints of things to try would be useful. **To Reproduce** I'm not sure I can create a simple reproducible…

### CASE-3771 · Should grouping of rendered children matter for key="…" matchup?
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I have a regression in my app UI that started when I upgraded from `[email]-beta.2` to `[email]` and has persisted ever since (through `[email]`). The component is a list editor which always keeps a "pending" (empty placeholder) row available for entry of a new item — as soon as the user starts typing in the "pending" row, it should *turn into* an "item" row and a *new* pending row gets added underneath. To preserve the user's focus/cursor it is important that the same `<input />` DOM element is preserved as it goes from "pending" to "item" status and so I am careful to provide a stable…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-3703 · [nextjs] Preact renders 5x when error is thrown in render and cancels rendering route
- **Principles**: P-A3, P-H1 · **Env**: react, next.js
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: **Describe the bug** This is a bug related to Preact with Next.JS. If there's a better place to post this please let me know :) When an exception is throw in the render phase of a clientside rendered page the Next.JS `pages/_error` fails to render. **To Reproduce** - Repro: [link] - Source: [link] Steps to reproduce the behavior: 1. Visit / 2. Click link to render /failing 3. Observe fails to JS console showing 5x render and exceptions ![image]([link]) **Expected behavior** - Should only invoke `pages/failing` render once - Should then render `pages/_error`

### CASE-3704 · Possible race condition leading to "TypeError: Cannot read property 'context' of undefined"
- **Principles**: P-A3, P-H1, P-F4, P-F5, P-H3 · **Env**: react
- **Signals**: 👍1 💬6 · closed · labels: upstream
- **Excerpt**: **Describe the bug** There seems to be a race condition related to `useContext` with `Suspense` and `preact-ssr-prepass`. In my application i use `usePromise` (from `react-promise-suspense`) to await on certain computation server-side. Sometimes (but not systematically) the ssr prepass fails with this error : ``` error TypeError: Cannot read property 'context' of undefined at Object.exports.useContext (.../frugal/node_modules/preact/hooks/src/index.js:239:36) at Object.useAssertCreator (.../frugal/packages/preact-render/src/asset.ts:8:32) at Object.useImage…

### CASE-3705 · Preact causes memory leak on useState?
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍5 💬6 · closed
- **Excerpt**: I have spotted memory growth in a [performance benchmark]([link]). I have compared the same benchmark app with react. React clears memory when a component with useState is unmounted. Preact holds the state value after unmount: ![image]([link]) I am not sure about the cause and if it is expected behaviour, but it definitely spoils performance comparison results for Preact and probably a red flag, which is worth investigating further. ## Here is how to reproduce it: - Clone [link] - npm install - npm start (notice webserver started, if it does not start check prerequisites here: [link]) - cd…

### CASE-3707 · (TypeScript) Why can't I setState with an object containing the keys of my state type
- **Principles**: P-A3, P-H1 · **Env**: typescript, react
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: Why doesn't this work: ```typescript export interface IState { username: string; password: string; } // ... private onInputChange(e: Event, field: keyof IState) { const target = e.target as HTMLInputElement; this.setState({ [field]: target.value }); } ``` ![image]([link]) Am I incorrect in thinking this should work? `field` is by definition one of the keys of `IState`, so defining an object containing only `field` as keys should be a valid `IState` object. Is there an issue with the preact type declarations, or have I misunderstood something?

### CASE-3712 · [question/bug?] this.base arbitrary being null in favor of this. "nextBase"
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed
- **Excerpt**: I need to setup a listener on scroll to translate table headers .. But sometimes I found that this.base is null while this.nextBase has the element reference. Why? Thanks! [link] ![image]([link])

### CASE-3718 · Class attribute not cleared when re-using elements from cache pool
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: I am hitting a very weird and difficult to reproduce bug. It would be nice to have a Slack, Gitter or IRC channel for preact where I can collaborate with the community to repro it. The bug I'm hitting is with [`Message` Component of linter-ui-default]([link]). It should, according to the code produce messages like this, and it does <img width="577" alt="screen shot 2016-03-16 at 7 22 46 pm" src="[link]> but after a few dozen `render` triggers, it becomes this <img width="490" alt="screen shot 2016-03-16 at 7 22 34 pm" src="[link]> Nothing on our component side changes, I believe the bug to be…

### CASE-3726 · web components created by preact not renderer inside a shadow DOM
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍0 💬5 · closed · labels: documentation
- **Excerpt**: **Describe the feature you'd love to see** as [link] not clearly says preact's behavior, I am not sure it's a bug or it's a feature. ![image]([link]) when using preact & vite & preact-custom-element together, the element I created not rendered inside a shadow DOM. also, the CSS inside the component's <style> part pollute global style. <details> <summary>my main codes:</summary> <pre> import register from 'preact-custom-element'; import styles from "./greeting.css"; const Greeting = ({ name = 'World' }) => ( <> <style>{styles}</style> <p>Hello, {name}! </p> </> ); register(Greeting,…

### CASE-3735 · Issue on render
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: This bug was introduced on `10.4.2`. In `10.4.1` is working fine. Preact 10.4.1 vs 10.4.2 ![image]([link]) ### Reproduction I don't understand when it happens exactly. But look an error on SSR. ### Steps to reproduce * clone the repo [link] * `yarn && yarn dev` -> Is working fine * Upgrade Preact from 10.4.1 to 10.4.2 (or 10.4.4). * `rm -rf node_modules yarn.lock && yarn && yarn dev ` -> Is not rendering well the content ### Expected Behavior Render the content in the same way than 10.4.1 ### Actual Behavior It's not rendering the content.

### CASE-3745 · Preact doesn't work with FuseBox HRM
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: This same issue was raised in [fuse-box]([link]), but talking with @user (the creator of FuseBox) I think that's a problem of preact instead. When use FuseBox HRM with Preact in each update preact render multiple instances in the same dom node at every turn. I made a repo with the source code, if you just running `yarn start`, then make some modification on `src/index.tsx` you'll see the bug [link] This is what's happening: <img width="376" alt="screen shot 2017-10-26 at 16 05 07" src="[link]> How I spoke in the fuse-box issue, I tried to do the same with React and Inferno and they worked…

### CASE-3747 · Issue with code loaded in a separate iFrame
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: has fix
- **Excerpt**: I have a somewhat strange usage for Preact. I am the owner of a library ( [GWTReact]([link])) that allows you to use React in Java via the Google GWT compiler. I am interested in also supporting Preact (with the react compat library). From my initial testing it basically works except for one case where arrays of child elements are passed. GWT loads the transpiled Java code in an iFrame which is different than the Preact script is loaded. The following line of code is the problem: ```javascript function h(nodeName, attributes) { . . while (stack.length) if ((child = stack.pop()) instanceof…

### CASE-3761 · Context.Provider not taking child elements
- **Principles**: P-A3, P-H1 · **Env**: react, typescript
- **Signals**: 👍0 💬4 · closed · labels: types/needs-more-info
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** A clear and concise description of what the bug is. Don't know if it's a TypeScript problem or not. `Context.Provider` doesn't take child elements directly ![image]([link]]/assets/25424409/66770536-64a3-4e7a-8139-7e9e77e919be) But works just fine if they are passed into the prop `children` ![image]([link]]/assets/25424409/bbbf0e67-4a27-45c5-a759-5b5db928f3f4) The app works just fine either way

### CASE-3763 · README: Sponsor 15 (Zikir) Avatar <img> is broken
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** The img url of sponsor 14, organization `zikir.com`'s Sufi Medication, is broken and appears as below in `README.md`. The image url also leads to a `Not Found` page, while the `<a href />` works as expected. ![Preact Readme]([link]) **To Reproduce** This is visible on the Readme Doc. **Expected behavior** The image for company logo should be visible.

### CASE-3767 · Bundle issue with esbuild 0.14.51, 0.14.50 works
- **Principles**: P-A3, P-H1 · **Env**: react, webpack
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Webpack build break. <img width="527" alt="image" src="[link]> **To Reproduce** - [link] - `pnpm i` or `npm i` - `npm start` -> `BREAK` - change `esbuild` version in `package.json` to fix version "`0.14.50`" - `pnpm update` or `npm update` - `npm start` -> `WORKS` If possible, please provide a CodeSandbox/Codepen that demonstrates the issue. You can use the following template: [link] Steps to reproduce the behavior: 1. Go to '...' 2. Click on '....' 3. See error **Expected behavior** What should have…

### CASE-3776 · Preact doesn't work with react-frame-component
- **Principles**: P-A3, P-H1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug/compat/good first issue
- **Excerpt**: I'm trying to use Preact with [react-frame-component]([link]) and running into some issues. Specifically, it seems like when the iframe is unmounted it throws an error: `Cannot read property 'parentNode' of undefined`. Some additional notes: I think the error is related to how Preact handles portals. The error doesn't occur when I comment out the `createPortal` call on [link] By default, `this.props.head` is `null`, and Preact doesn't seem to like that. ### Reproduction Here's a simple CodeSandbox that demonstrates the issue: [link] Basically when one of the list items is selected, it'll…

### CASE-3784 · Prop method referring to wrong method
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I have a component which takes one method as prop and on some action, I call it, This component is used in two places but the prop method always refers to first one. Component: ![image]([link]) Used place 1: ``` <FileInput onFile={this.handleFileInput} /> ``` Used place 2: ``` <FileInput onFile={this.handleFileInput2} /> ``` Here if FileInput triggers from second used place it will still invoke method of used place 1

### CASE-3796 · Cannot read properties of undefined (reading '__m')
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: **Describe the bug** call `useId` will throw an error `Cannot read properties of undefined (reading '__m')` similar to [ref] the environment is with Astro, probably related, but the error throws from preact **To Reproduce** 1. open the stackblitz link from Astro's Preact example [link] 2. navigate to a component such as src/components/message.tsx 3. add `import { useId } from 'preact/hooks';` and call `useId()` within component 4. look at the console or page preview to see the error <img width="1920" alt="Snipaste_2024-03-26_10-48-27"…

### CASE-3798 · Cannot read property 'insertBefore' of undefined when using `Suspense` and `lazy`
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍3 💬3 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** `Cannot read property 'insertBefore' of undefined` when using `Suspense` and `lazy`. Reason being `originalParent` is undefined in `Suspense`'s `removeOriginal` function Works if checks `originalParent` before calling `insertBefore` on it ![image]([link]) **To Reproduce** If possible, please provide a CodeSandbox/Codepen that demonstrates the issue. You can use the following template: [link] Steps to reproduce the behavior: In codesandbox **Expected behavior** No error

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-3706 · [10.0.0-rc.0] binding events from custom elements does not work
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍16 💬6 · closed
- **Excerpt**: Hi! Preact X has a regression in regards to registering events from custom elements. I am unable to bind events from JSX anymore. I have to create the event listener manually in `componentDidMount`. Here is an example below: ```javascript import { h, Component } from 'preact'; import style from './style'; class Home extends Component { componentDidMount() { // This works this.checkbox.addEventListener('ionChange', console.log); } render() { return ( <div class={style.home}> <script type="module" src="[link] /> <link href="[link] rel="stylesheet" /> <h1>Home</h1> <ion-checkbox ref={checkbox =>…

### CASE-3716 · Component ignores the "key" attribute when it is the only child of another Component
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: bug/compat/has fix
- **Excerpt**: When a component returns in `render()` methon only one of its chilren, for example: ``` jsx class Router extends Component { render({ url, children }) { return children.find(c => c.attributes.path === url); } } ``` it ignores the `key` attributes from component's children. And then children of same type are patched in place by virtual dom algorithm instead of mounting / unmounting. Like if there are no `key` attributes at all. I now that Preact recycles DOM nodes and even components instead of render them again. But if we modify code like that: ``` jsx class Router extends Component {…

### CASE-3719 · Preact + antd creates memory leak
- **Principles**: P-F5, P-H3 · **Env**: react, vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** Using Preact with the `antd` UI library causes a memory leak which, as far as I've tested, does not happen with React. **To Reproduce** 1. Make a new Vite project with Preact. 2. Install `antd`. 3. Import and use components from `antd`. I've personally tested using `Button`. Repro: [link] **Expected behavior** Should not cause memory leak.

### CASE-3721 · Unmount hooks should be called during the commit phase to ensure consistency with React
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: feature request
- **Excerpt**: **Describe the bug** I've run into issues several times that are caused by calling cleanup functions during the rendering phase. First time in the UI library (a similar case is described here [link]][ref]). The second time with a library that prohibits data modification at the rendering stage. It would be nice for React compatibility and to prevent problems like this to call cleanup functions on hooks after rather than during rendering.

### CASE-3722 · Event bubbling can break in test conditions
- **Principles**: P-F5, P-H3 · **Env**: ios, react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** In test scenarios, on a fast machine, it's possible for preact rendering and a subsequent programmatic call to occur within the span of a single millisecond (yay!). However, that can trip up the logic in [link]][ref] because the _dispatched and _attached flags in the dispatched events and associated event listener props all end up getting the same value from Date.now(), resulting in any bubbling listeners getting short-circuited. **To Reproduce** Steps to reproduce the behavior: 1. Go to [link] and…

### CASE-3727 · Can't call "this.setState" on an unmounted component error.
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: compat
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** This bug looks to be the same as [ref] but on a version `10.6.6` of Preact. I am creating a modal (using `@user/react` and `preact/compat`) and when you press the modals close button the following warning appears in the console. ``` debug.js:379 Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method. ``` It should be noted that the component…

### CASE-3737 · createContext is not fully React compatible
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: After migrating an app from React to Preact 10, we noticed that some of our components were unmounting with the incorrect props. ### Reproduction Here is a reproduction of the issue on simplified codebase. Preact: [link] React: [link] ### Steps to reproduce So, the idea is that because of the `key` prop assigned to `Parent`, when `id` changes, it should unmount it with the previous id and then mount it with the new one. That's my expectation at least and it works like that in React. Here is the console output when clicking on the text. ``` // React render, id 0 mount, id 0 render, id 1…

### CASE-3742 · 10.0.0-beta.1 componentWillUnmount does not fire when using Preact.render() with replaceNode
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬5 · closed · labels: bug
- **Excerpt**: When calling `preact.render()` with the third optional `replaceNode` argument, re-rendering over a component does not call the `componentWillUnmount` lifecycle hook. Consider the HTML: ``` <div id='app'> <div id='component'></div> </div> ``` I want to change what component is rendered in the `#component` div, and because our app is not 100% preact, we use a separate call to `preact.render` to swap out the components. First render `ComponentA`: `render(<ComponentA />, document.getElementById('app'), document.getElementById('component'));` Resulting in: ``` <div id='app'> <div id='component'>I…

### CASE-3743 · beforeinput event listener not added
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: bug
- **Excerpt**: Took me a while to find this bug. `beforeinput` is often used by rich text editors (`contenteditable`), e.g Slate which I try to port to Preact. I could add the event listener manually but then I would probably need to maintain my own fork and Im not going to do that, especially considering that it's in beta and receives breaking updates all the time. ### [Codesandbox]([link]) It seems that it would be a special case for Preact events logic and add few bytes because `'onbeforeinput' in el` doesn't work. Is this something you're willing to consider?

### CASE-3746 · componentWillUnmount() fires too late
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍2 💬5 · closed · labels: bug/help wanted/important
- **Excerpt**: Hi. I have noticed that `componentWillUnmount()` in not fired immediately after the component is removed from the DOM in case when it was rendered into the same element type as the one that is replacing it (comments: 1, 2). It is fired much later, when the element is replaced with a completely different content (comments: 3, 4, 5). It is similar to [[ref]]([link]) and [[ref]]([link]), but reproducible with the latest version. *[jsfiddle]([link])* ```html <!DOCTYPE html> <html> <script src="[link]></script> <body></body> <script> const { h, render, Component } = preact; class App extends…

### CASE-3749 · componentDidMount not called in a specific case
- **Principles**: P-F5, P-H3, P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: bug/has fix
- **Excerpt**: The lifecycle hook `componentDidMount` does not get called for components that return false form `shouldComponentUpdate` and are wrapped in a normal component see repro: [link] (4.8.0) [link] (5.0.0-beta5) the beta fixes the immediate issue from 4.8.0 but if you wrap the component twice the same problem happens click the toggle button 4 times in console you will see mount unmount unmount the expected log would be mount unmount mount unmount if you remove the wrapper the log is correct If there is anything I can help with please let me know

### CASE-3755 · Latest preact version breaks @user/react-switch and application
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: needs-more-info
- **Excerpt**: preact@^10.25.0 (it has also been checked on 10.25.1) **Describe the bug** When trying to create a component, the page freezes. There is no memory leak in devtools, but the rendering process does not continue Everything works fine on version 10.24.3

### CASE-3760 · createPortal is not working properly
- **Principles**: P-F5, P-H3 · **Env**: react, webpack
- **Signals**: 👍0 💬4 · closed · labels: needs-more-info
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** I'm rendering drawer web component using createPortal.When changing the route the following error is thrown. In preact app i'm used `react-router-dom`. ``` Uncaught Error: Undefined parent passed to render(), this is the second argument. Check if the element is available in the DOM/has the correct id. at preact__WEBPACK_IMPORTED_MODULE_0__.options.__ (debug.js:89:1) at P (render.js:16:1) at e.componentWillUnmount (portals.js:23:1) at N (index.js:521:1) at N (index.js:531:1) at N (index.js:531:1) at N…

### CASE-3766 · "Cannot read properties of null (reading '__')" error when suspending the entire app
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Preact version: `10.10.1`. **Bug Description** When wrapping the entire `<App>` with Suspense, I get the following error: ``` Uncaught TypeError: Cannot read properties of null (reading '__') at i.__c.shouldComponentUpdate ``` And almost the entire app unmounts (due to the lack of error boundary). This **does not** happen if I only wrap the `<Routes>` component with Suspense. **To Reproduce** 1. Clone my repo: [link] 2. Execute `npm i` and `npm start`. 3. Refresh the page a few times until this error shows. You can even visit the preview deploy here: [link] **Expected behavior** No error…

### CASE-3787 · Unnecessary dom create and remove.
- **Principles**: P-F5, P-H3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: bug/duplicate
- **Excerpt**: ```jsx class A extends Component { render() { return <div>123</div> } componentWillUnmount() { console.log('unmount') } componentDidMount() { console.log('didMount') } componentDidUpdate() { console.log('didUpdate') } } class Test extends Component { render() { const visible = this.props.visible return (<div> {visible ? <div></div> : null} <div> {visible ? <div></div> : null} {this.props.children} </div> </div>); } } class App extends Component { state = { visible: false } setVisible(visible) { this.setState({ visible }); } render() { return (<div> <Test visible={this.state.visible}> <A />…

### CASE-3795 · Fragment unmounts when it shouldn't
- **Principles**: P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** After updating to 10.26.2, some Fragments are disappearing during a second render. I think this was caused by [ref]. **To Reproduce** [link] Steps to reproduce the behavior: 1. Open the page 2. Click either of the links 3. Both links disappear **Expected behavior** Nothing

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-3708 · [10.0.0-alpha.2] Safari resets cursor in controlled form inputs
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: safari, chrome, firefox, react
- **Signals**: 👍0 💬6 · closed · labels: bug/help wanted
- **Excerpt**: Haven't dived in to see what's going on at all yet, but Safari is not happy with controlled form field components under Preact X. When typing, the cursor is constantly reset to the end of the form field: 1. Place your cursor in the middle of a controlled `<input>` 2. Type several characters ## Expected results All of the characters appear at the point where cursor was placed. This works correctly in Chrome and Firefox. ## Actual results In Safari, the first character is inserted where the cursor started, but [presumably when the element is re-rendered] then the browser moves the cursor to the…

### CASE-3709 · autocorrect="off" is ignored in iOS Safari for elements rendered with Preact
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, ios, react, iphone
- **Signals**: 👍0 💬6 · closed · labels: wontfix/workaround
- **Excerpt**: Steps to reproduce: - Save the test file, which will create three text boxes with `autocorrect="off"`: - Directly, in HTML - By building and appending a DOM node with the `document` API - By using Preact to generate and render a node - Host the test file, for instance with `python -m SimpleHTTPServer` - Visit the page on an iPhone on your local network (`$yourIP:8000`) - Type `daf` and then `space` in to each textbox Expected behavior: - In each text box, `daf ` appears and is not autocorrected Actual behavior: - In the plain HTML text box, `daf ` is not autocorrected (correct behavior) - In…

### CASE-3711 · placeholder prop reused incorrectly when rerendering text input with cloneElement wrapper - MS Edge only
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, edge 40, react
- **Signals**: 👍1 💬6 · closed · labels: bug/help wanted/important/in X
- **Excerpt**: Discovered this while creating some form dialog boxes using `preact-portal`. See reproduction here: [link] I believe this represents the minimum amount needed to reproduce the issue, which includes: 1. A text input with a placeholder attribute and no value 2. A component that wraps the input and uses `cloneElement` to render its child, the text input 3. render the wrapped text input with placeholder text "foo" -> render null in place of the wrapped element -> render the wrapped text input with placeholder text "bar" Only occurs in Edge (tested using Microsoft Edge 40.15063.674.0) *Expected…

### CASE-3730 · Preact 10.x unnecessarily updates DOM for <select> options
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: chrome, react
- **Signals**: 👍0 💬5 · closed · labels: known issue
- **Excerpt**: **Describe the bug** Preact 10.x unnecessarily updates DOM (options's values specifically) for `<select>` element even if it's not changed. **To Reproduce** [link] Steps to reproduce the behavior: 1. Open Chrome Dev Tools and inspect select element options 2. Click on 'Render' button 3. See that every option's value is updated (highlighted with pink) **Expected behavior** DOM is not updated at all

### CASE-3738 · Select onInput doesn't function in Microsoft Edge
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, edge 44, react
- **Signals**: 👍1 💬5 · closed · labels: bug
- **Excerpt**: Hello, Browser: Microsoft Edge 44 Preact 10.3.1 Way to reproduce: - visit the url [link] - run the code in REPL - the value is not getting updated (when you select any of the options) Expected: The value is updated properl and onInput callback is getting fired.

### CASE-3765 · [preact/compat] radix-ui Slider component drag points (Thumbs) not working
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, react
- **Signals**: 👍2 💬4 · open · labels: compat
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** Thumb (drag points) are not receiving any updates past the initial css applied. **To Reproduce** [link] Steps to reproduce the behaviour: Load the stackblitz example above and drag the edges of the white lines: ![Screen Shot 2022-08-08 at 12 43 56 pm]([link]) While the line itself is adjustable, the `Thumb` components are not shown. If the nested span's css is modified from `display: none` to `display: block` the `Thumb` element is rendered on left edge with 0, 0 coords. ![Screen Shot 2022-08-08 at 12…

### CASE-3777 · Autofocus not working on Firefox
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4 · **Env**: firefox, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hi there, It seems like the `autoFocus` attribute is not working properly on Firefox (latest version). All the other browsers are fine though. I've also tried the exact same app using React instead and haven't had any issues. It does work when using a ref and doing `inputRef.current.focus()` on mount but I'm curious as to why it would behave that way when using it as an attribute 🤔 I'm using Preact 10.3.0 by the way.

### CASE-3785 · Firefox validation triggers on input component render
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox, react
- **Signals**: 👍0 💬4 · closed · labels: bug
- **Excerpt**: Hi, I noticed that on Firefox, any form inputs that are `required` are immediately validated. This results in the inputs having a red error outline on page load. I ran into this on `Preact v8.1.0` and `Firefox v58.0b10`. It looks like React recently fixed this: [link] The issue seems well documented in the thread. I might be able to poke around this weekend to offer assistance, but I just wanted to bring this up. Thanks!

### CASE-3786 · BUG with input[type="range"]
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge 16, react
- **Signals**: 👍0 💬4 · closed · labels: feedback needed
- **Excerpt**: Hi, I found a difference between React and preact. I get the render result by React, ```html <input type="range" step="any" min="0" max="10" value="8"> ``` and this by preact. ```html <input min="0" max="10" step="any" type="range"> ``` there is no value attribute in preact render result. I noticed the discussion in [ref] . It works well in all browsers except EDGE 16. ![upload]([link]) There is an initial value above the slider. I don't know how to remove it. The following content is example code. Replace /React(DOM)?/ with "preact", you will get the preact render result. ```html <!DOCTYPE…

### CASE-3791 · Bug: IE11, Edge and all Preact versions - textarea caret position
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: edge, react
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: Greetings! We use **Preact** on one project, he is very good with the file size, but we have recently found a nasty bug. In browsers **IIE11** and **Edge** when editing in the middle message, of the cursor moves to the last character, demo [link]

### CASE-3792 · dom class value lost in a special case
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome
- **Signals**: 👍0 💬4 · closed · labels: bug/compat/has fix
- **Excerpt**: hi~ @user in this codepen: [link] (5.0.0-beta9) follow these steps you will see the issue: 1. click Set background button 2. click Hide/Show button 4 times 3. in chrome dev tools - Elements tab you will see: ``` html <div id="panel" class> <button>SetBackground true</button> </div> ``` it should be: ``` html <div id="panel" class='bg'> <button>SetBackground true</button> </div> ``` If you change the vnode(id='panel') to be: ``` html <div id='panel' className={hasBg ? 'bg' : 'a_not_exists_class'}>...</div> ``` the class will be correct. It seems like that: If a `component.className` has been…

### CASE-3797 · Shallowly updating the page URL hides the currently focused input's datalist dropdown in Chrome
- **Principles**: P-G1, P-G2, P-G3, P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: chrome, firefox, react
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: ## Describe the bug Let's say an input has a datalist that shows a dropdown menu of options to choose from. If the app updates the page's URL with the form's serialized data as a user types in that input, the datalist menu disappears and doesn't come back no matter what the user types. This is only reproducible 1) with Preact 2) in Chrome. It is not reproducible with vanilla JS, React, or in Firefox. Here's a GIF demonstrating the bug: ![preact-bug]([link]) ## To Reproduce 1. Visit [link] (corresponding code: [link]). 2. Clear the input. The datalist should disappear (expected). 3. Type a `1`…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-3710 · vdom manipulation, confusion ..
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: question
- **Excerpt**: [link] Code and inspected result would tell the problem. But I'll try to explain. I'm trying to achieve , a table component, which creates rows and cols automatically with given children like: ```javascript <MTable> <th>x</th> <th>Test</th> <th>Test</th> <input snr type="text" /> <input type="text" /> <input type="text" /> </MTable> ``` As you might see in the code in the link above, in render of the MTable I'm traversing children, if there isn't a row ( tr ) or a "snr -> short for start new row" prop adding it, and continue. The thing that confuses me is , some extra -unwanted- rows in…

### CASE-3714 · linkState eventPath could be documented better
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: documentation
- **Excerpt**: [link] I love `linkState`, but the it's unclear from the page above what the second arg does. It might be useful to explain it in terms of radio buttons: ``` js class Foo extends Component { render({}, {yesChecked, noChecked}) { return <div> <label> <input type="radio" name="yes-or-no" checked={yesChecked} onChange={this.linkState('yesChecked')} /> Yes </label> <label> <input type="radio" name="yes-or-no" checked={noChecked} onChange={this.linkState('noChecked')} /> No </label> </div>; } } ``` The above doesn't work as expected. If the user clicks "no", `noChecked` becomes `true` but…

### CASE-3717 · Element ordering after rerender is wrong sometimes
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬6 · closed · labels: bug
- **Excerpt**: Hi, I have seen a bug that is happening in weird places that the order of items rendered gets switched up I have code similar to: ``` <div> {logic && <div>...</div>} {!logic && <h1>...</h1>} <Wrapper>...</Wrapper> </div> ``` when it renders first time its fine but if it rerenders with the logic changed it sometimes reverses the order of the 2 items that come out, this is really difficult to reproduce, was trying yesterday but could not come up with anything This happens in many places, sometimes a form field gets pushed down or modal title ends up at the bottom etc. I will try again today to…

### CASE-3731 · Preact 10.5.x Breaks Material-UI Components (visually)
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: I'm not sure if this is related to issue [ref] and pull request [ref] or not, but upgrading from preact 10.4.8 to 10.5.x breaks material-ui. The screenshots and snippets below use the same @user/core version (latest: 4.11.0) - all other packages are the same as well - only difference is the preact version. Swapped back and forth multiple times to confirm. It breaks essentially all material-ui components, I have included TextField and Button below as examples of the way they are impacted. Some things like Dialog and Select are drastically broken [visually] (even the background-color is…

### CASE-3732 · onChange + onClick event not batched into same render commit
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: 11.x
- **Excerpt**: ### Reproduction [link] ### Steps to reproduce (using `preact/compat`) ```js function App() { console.log("rerender"); let [checked, setChecked] = React.useState(false); let [, setState] = React.useState(false); return ( <> <input type="checkbox" checked={checked} onChange={(e) => { console.log("onChange", e.target.checked); setChecked(e.target.checked); }} onClick={(e) => { console.log("onClick", e.target.checked); // ... or uncomment calls to fix setState(true); setState(false); }} /> <br /> Checked? {String(checked)} </> ); } ``` 1. Try to toggle checkbox, doesn't work because this…

### CASE-3733 · Preact/compat - Input maxLength of null should be equal to undefined
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬5 · closed · labels: bug/compat/beginner-friendly
- **Excerpt**: ### Reproduction * Preact [link] * React [link] ### Steps to reproduce Type "anything" in the email input. ### Expected Behavior Can type "anything" since maxLength is not enforced. Inspecting the input element shows a value of "anything" and the maxLength attribute is not there. ### Actual Behavior Can't type "anything" since maxLength is enforced. Inspecting the input does not show a value of "anything" and the maxLength attribute is equal "0".

### CASE-3734 · Uncontrolled select support?
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: Hi, the _defaultValue_ attribute for `<select>` does not work in preact: [link] . Switching to a selected attribute (in `<option>` ) seems to work but causes some strange behaviour on late renderings (no sandbox yet).

### CASE-3739 · 'clipPathUnits' svg attribute is getting converted to 'clip-pathunits'
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: bug/beginner-friendly
- **Excerpt**: Input: ```html <svg> <clipPath id="hexagon" clipPathUnits="objectBoundingBox"> <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" /> </clipPath> </svg> ``` output: ```html <svg> <clipPath id="hexagon" clip-pathunits="objectBoundingBox"> <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" /> </clipPath> </svg> ```

### CASE-3741 · [10.0.0-beta.2] controlled text input does not perform like React
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬5 · closed
- **Excerpt**: I mentioned in the Slack I saw possible issues on <input> with PreactX vs react & preact8. Maybe it's a performance regression; since adding shouldComponentUpdate to input wrapper resolves the bug. For the benefit of those who asked, I've put a smallish repro test case in a github repository, namely: [link]

### CASE-3752 · Form submit event fired on re-rendered <button type="button"> is rerendered as <button type="submit"> on click
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [X] Check if updating to the latest Preact version resolves the issue **Describe the bug** This is similar to [link] When a button is conditionally re-rendered from `type="button"` to `type="submit"` on re-render after click, the outer form's onSubmit is fired even though the button that's clicked is suppose to be `type="click"`. The workaround is also similar to the React bug - using an unique `key` for the two buttons. Bisected the bug to between 10.13 and 10.12. **To Reproduce** [link] Steps to reproduce the behavior: 1. Click on "Start editing" 2. See alert showing the form was…

### CASE-3754 · Freeze issue introduced in version 10.25.0 of Preact with Mantine
- **Principles**: P-G4, P-E3 · **Env**: windows, react, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hello, **The issue is still present even with the latest version of Preact.** ### Environment - **Bun**: `1.1.43` - **Windows** ## Describe the bug In a web project with Preact, Preact signals, and Mantine with Select or SegmentedControl component, the page is blank and frozen after upgrading `preact` from `10.24.3` to `10.25.0`. ## To Reproduce Here is a Github repository that demonstrates the issue: [link] ### Small description to reproduce the issue 1. Create a vite project with **React** (not Preact). 2. Make the alias for `react` and `react-dom` to `preact/compat` (see [Preact…

### CASE-3756 · Minified Preact code causing Error by storing event handlers in `l` property on elements causing a name conflict
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬4 · closed
- **Excerpt**: **Describe the bug** Preact [stores references to an element's event handlers]([link]]/blob/main/src/diff/props.js#L151) inside a `_listeners` property on the element itself — this gets compiled to just `l` causing a conflict in case a form element with the same name exists inside a form — leading to this error: ``` Uncaught TypeError: t is not a function at HTMLFormElement.<anonymous> ``` **To Reproduce** * Create a `HTMLFormElement` containing one or several `HTMLInputElement` * Attach a `submit` handler to the form (the event handler can contain a simple `console.log`) * Give each of the…

### CASE-3759 · <search> HTML element is not supported in TypeScript types
- **Principles**: P-G4, P-E3 · **Env**: typescript, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue > I would like to open a PR fixing this issue, I know how to do so. **Describe the bug** A clear and concise description of what the bug is. When using the following semantic markup: ```html <header> <h1>Movie website</h1> <search> <form action="./search/"> <label for="movie">Find a Movie</label> <input type="search" id="movie" name="q" /> <button type="submit">Search</button> </form> </search> </header> ``` In Preact (using TypeScript), I get the following TypeScript error: ```typescript TS2339: Property search does not…

### CASE-3762 · DOM elements get laid out in incorrect order
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** In some specific cases, the DOM elements get laid out in an incorrect order. **To Reproduce** I have tried to trim down my app to the bare minimum to show the issue appearing. Here is a codesandbox: [link] Steps to reproduce the behavior: From the code, you can read that the submit button should always be the last element on the page. When performing the following interactions, the submit button appears in between the other elements: 1. Please select a source country (for example France) 2. Please…

### CASE-3770 · Textareas are empty on reload
- **Principles**: P-G4, P-E3 · **Env**: next.js, react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: **Describe the bug** I use next.js with preact 10.5.15, and it behaves as if this bug wasn't fixed: [link]][ref] **To Reproduce** 1. I have a next.js project with preact according to [link] 2. Have a controlled `textarea` on page (`<textarea value={track.trackNote} onChange={this.handleChange.bind(this, 'trackNote')} rows="5" />`) with nonempty content. 3. Load page (textarea content appears) 4. Refresh the page in browser (cmd+r) **Expected behavior** I can see the initial content **Actual behavior** During reload, the textarea content appears briefly (after the page loads from server and…

### CASE-3778 · [Material-UI] Select onChange broken - modifying event target
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Looks like the [material-ui/core/Select]([link]) modifies the `target` on a native event. Seems they're also doing it on item click: [link] Browsers throw an error since the event is marked read-only. I noticed there is some work to use non-synthetic events in preact-compat -- is there a way to configure it in certain cases?

### CASE-3779 · onChange not working with onMouseUp/onTouchEnd on input type=range
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: For input type=range ``` <input id={`range-for-${uniqueId}`} className={getStyleClass(value)} onMouseUp={onDragEnd} onTouchEnd={onDragEnd} type="range" min="0" max="10" value={value} onChange={onChange} list="steplist" /> ``` onChange is not working here. It was working on v10.beta-3 release and not on rc or stable v10.

### CASE-3783 · Portal renders `<undefined>` DOM element where `createPortal(...)` is rendered
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍1 💬4 · closed · labels: bug
- **Excerpt**: Rendering components into a container outside of the current root DOM element using `createPortal` results in an `<undefined>` DOM element being created at the place where the portal was rendered: **Test case:** [link] **Input HTML and code:** ```html <body> <div id="app"></div> <div id="dialog-container"></div> <script src="src/index.js"></script> </body> ``` ```js import { h, render } from 'preact'; import { createPortal } from 'preact/compat'; const appEl = document.querySelector('#app'); const dialogEl = document.querySelector('#dialog-container'); function Dialog() { return <div>Dialog…

### CASE-3790 · Recycling is broken with any type of user input elements
- **Principles**: P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: bug/The Wreckoning
- **Excerpt**: _This issue was noticed in both Preact 6 & 7, i.e. not a regression in 7._ Recycling is broken with any type of user input elements (`<select>`, `<input>`, etc.): when element is recycled it persists all input data in it, i.e. selected item, inputed text, etc. So when such element is restored to back to the DOM it has all those values/data set. Here is a reduced test case with `<select>` element (also happens with `<input>`): [link] Reproduction: > Click toggle to show `<select>` Then select "Value 2" Then click toggle again to hide `<select>` Then click toggle again to show `<select>` >…

### CASE-3794 · state gets overwritten?
- **Principles**: P-G4, P-E3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: question
- **Excerpt**: Hi, I'm having trouble passing functions down to child components that are meant to update different parts of a top-level container state. Here's a small example: ``` js class EventForm extends Component { handleSubmit (e) { e.preventDefault(); console.log(this.state); // undefined } render ({ }, { title, description }) { return <div> <form onSubmit={this.handleSubmit}> <h2>{title}</h2> // updates properly on input change <h3>{description}</h3> // updates properly on input change <EventInfo titleInput={this.linkState('title')} descInput={this.linkState('description')}/> <button type="submit"…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-3713 · Preact remounts nodes when a child element is perpended
- **Principles**: P-D1, P-D2, P-D3, P-G4, P-E3 · **Env**: react
- **Signals**: 👍0 💬6 · closed · labels: bug/important/has fix
- **Excerpt**: Hello! I have an issue with Preact where Preact remounts my nodes in the DOM whenever a new node is prepended(an ELEMENT_NODE, not TEXT_NODE). This causes css transitions to break. If my DOM tree looks like this: ``` <div id="parent"> <div id="childA"></div> <div id="childB"></div> </div> ``` And i then prepend a child via a Preact component, it will now look like this: ``` <div id="parent"> <div id="newChild"></div> <input type="checkbox" id="childA-with-transition"></div> // removed and then placed into dom again <div id="childB"></div> // removed and then placed into dom again </div> ```…

### CASE-3729 · [Need help]Cannot read property 'animationstartfalse' of undefined
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬5 · closed · labels: needs-more-info
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** [Our sentry reported this issue]([link]). And when I search the error message I got ![image]([link]) **To Reproduce** environment: ![image]([link]) I have no idea how to reproduce at all. I might need help optimizing the sentry config before I can find how to reproduce it. **Expected behavior**

### CASE-3751 · [Motion Support] guidance on lazy loading motion
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: feature request
- **Excerpt**: Switching from React and noticed motion is not working.... framer-motion is outdated. There are no build errors just animations are not running.

### CASE-3753 · } from './index'; -> } from './hooks'; in compat/src/render.js
- **Principles**: P-D1, P-D2, P-D3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [ ] Check if updating to the latest Preact version resolves the issue **Describe the bug** A clear and concise description of what the bug is. In [link]]/blob/main/compat/src/render.js you can see the following code: ```js import { useDeferredValue, useInsertionEffect, useSyncExternalStore, useTransition } from './index'; ``` which more accurately should be ```js import { useDeferredValue, useInsertionEffect, useSyncExternalStore, useTransition } from './hooks'; ``` While both SHOULD be valid, the former is failing with QuickJS engine because of a bug due to complex re-exports. I'm using…

### CASE-3769 · Uncaught TypeError: startTransition is not a function
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react, next.js
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** This is a bug related to Preact with Next.js. When an exception is throw in the render phase of a clientside rendered page the Next.JS pages/_error fails to render. Using the latest [email] and [email] and [email] installed, changing the route (e.g. calling Router.replace, Router.push) will throw three errors(Local development): 1. Error: Cancel rendering route 2. Uncaught (in promise) TypeError: startTransition is not a function 3. Uncaught TypeError: startTransition is not a function <img…

### CASE-3781 · onTransitionEnd stopped working
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Have noticed when aliasing preact 10.beta.1 for an existing react app, when a state change occurred and that variable was passed into a child prop, the child component is removed from the DOM and so `transitionEnd` events don't trigger. The React app doesn't use CSSTransition or others libs. Is this a bug? Or is there something special I need to do?

### CASE-3782 · Handling keys
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍9 💬4 · closed · labels: bug/important
- **Excerpt**: This happens since forever. - Single elements/components aren't remounted when their key changes - Sometimes elements/components are remounted when they should be just reordered Example GIF: every element has an entering animation and transition on `top` css property and this is what happens when I just reorder them. (data from randomuser.me) ![Peek 2019-03-10 20-45]([link]) Example GIF 2: User details page's key changes upon navigation, but it doesn't get remounted. You can tell by the lack of entering animation. ![Peek 2019-03-11 00-17]([link]) I'm using [email]-alpha.1 [Repro repo]([link])

### CASE-3793 · Key property not exist on virtual dom
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: I'm using react component [animate]([link]) to help me add animation to element(s), but I found not like what react did, preact not have key property on the dom: <img width="475" alt="screen shot 2016-05-18 at 5 00 06 pm" src="[link]> <img width="507" alt="screen shot 2016-05-18 at 5 07 26 pm" src="[link]> As a result, the animation library fails to find the key and throw an error. It would be nice if we can make `key` to be a readonly property on the virtual dom by using `Object.defindeProperty`

### CASE-3800 · React-spring not working with Preact
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬3 · closed · labels: bug
- **Excerpt**: _Reported via Slack by @user._ ## Reproduction [link] ### Steps to reproduce 1. Click and drag the background image. Same should work for touch events. 2. The background should switch to the next one, similar to a slider. ### Expected Behavior React: [link] ### Actual Behavior The images don't slide at all. Unable to switch to the next slide via drag/touch events.

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-3725 · useMemo returns `undefined` even when it should never do it (as of 10.8.1)
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react, typescript
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue **Describe the bug** The following code produces an error on the 1st re-render ```typescript export const TestComponent: FunctionComponent = () => { const ref = useRef(null) const [currentBreakpoints, setCurrentBreakpoints] = useState<number[]>([]); const result = useMemo( () => currentBreakpoints.map((breakpoint: number) => `cq-${breakpoint}`).join(' '), [currentBreakpoints] ); if (result === undefined) { throw new Error('hooks are broken!'); } return <div class={result} ref={ref}></div> } ``` **To Reproduce** check out…

### CASE-3728 · [preact/compat] causes page to stuck when rendering radix-ui Dialog
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react
- **Signals**: 👍7 💬5 · closed · labels: Portals
- **Excerpt**: - [x] Check if updating to the latest Preact version resolves the issue (tested, it doesn't resolve the issue) **Describe the bug** When using preact/compat with radix-ui, rendering `Dialog.Content` would cause the page to stuck indefinitely. **To Reproduce** [Open this stackblitz project]([link]), and click on the "Trigger" button to open the `Dialog`. The page should now be unresponsive. Steps to reproduce the behavior: 1. Go to [link] 2. Click on the "Trigger" button to open the `Dialog` component 3. The page should now be unresponsive. **Expected behavior** The same code works with React.…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-3736 · lazy/Suspense causing re-rendering to break application
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-A3, P-H1 · **Env**: react
- **Signals**: 👍2 💬5 · closed · labels: bug/suspense
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: 🗣 For help with Preact, ask on Slack: [link] ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> Performing a re-render inside a lazy loaded component causes a `TypeError`. This does not happen with React's `Suspense`. The error can be…

### CASE-3772 · <picture> element rendered with preact is broken in safari
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-G2, P-G3 · **Env**: safari, react
- **Signals**: 👍0 💬4 · closed · labels: upstream
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: ❓ Did you check that you're on the latest version of Preact? 🗣 For help with Preact, ask on discussions: [link]]/discussions ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> In safari (latest v14), a picture element rendered with preact…

### CASE-3774 · Material-UI's Drawer component causes props are not supported: `ref` error on first open.
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: debug
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: 🗣 For help with Preact, ask on Slack: [link] ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> Hi, I hope this is enough information, let me know otherwise. Thanks for your work. This looks like another issue had the identical error in…

### CASE-3775 · [compat] portals not unmounting
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: <!-- 👋 Hi there! Thanks for taking the time to open an issue. ׁ Here's a guide to getting your issue resolved quickly: 🗣 For help with Preact, ask on Slack: [link] ✨ Check for existing StackOverflow solutions: [link] 📚 Check out our docs - for Preact 10: [link] 🔎 Check if there's already an issue for your problem 🛠 If your issue relates to preact-cli, please file at [link]]-cli 📑 For documentation or website issues, please file at [link]]-www --> Not really sure if this is on people's radar or if there's an easy workaround I'm not seeing but issue is still open in old compat repository…

## scroll-behavior — Scroll Behavior 滚动行为 · principles: P-D4, P-F1, P-F5

### CASE-3748 · moving node during diffing cause complex problem
- **Principles**: P-D4, P-F1, P-F5 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: question
- **Excerpt**: [src/vdom/diff.js#L251]([link]) ``` // here cause reset some node properties, e.g scrollTop dom.insertBefore(child, originalChildren[i] || null); ``` like below, when child targets div.resize-triggers, originalChildren[i] targets div[key=3] before 'dom.insertBefore', div.contract-trigger.scrollTop is greater than 0, after 'dom.insertBefore', div.contract-trigger.scrollTop becomes 0 without firing a scroll event, and would never fire again ```html <style type="text/css"> .resize-triggers, .contract-trigger, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0;…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-3773 · contenteditable broken with Preact 10
- **Principles**: P-B1, P-B2, P-B3 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: workaround/known issue
- **Excerpt**: ### Reproduction ``` <!DOCTYPE html> <meta charset="UTF-8"> <style> span { border: 1px solid [ref]; } span:empty::after { content: 'placeholder'; font-size: smaller; left: 0; opacity: 0.5; top: 0; } </style> <!-- <script src="[link] integrity="sha512-X4tdt+//Fj3d6uBdK8YH5qHT7g0mDWf4ZOJS5UQj7OJu+QAy53ySvOoAe1iky/oZ8JaUaHLAHI2swH2SGnGzWg==" crossorigin="anonymous"></script> --> <script src="[link] integrity="sha512-dHedEHbrmayd9MzZJGcsUVzD2to6afhlJiXkDYzUBl3qrNOFE4nK1BsPnzSve6K3vTlMcmQLToPJGxs3gbsyew==" crossorigin="anonymous"></script> <script> const { Component, h, render } = self.preact;…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-3780 · preact debug mode with ES6 imports
- **Principles**: P-A5 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: The docs are showing `require` usage but what's the correct way to import this with ES6 and only in development? The following is indeed not working: proptypes validation is enabled after components are mounted thus those are not validated. ``` if (module.hot) { module.hot.accept(); import('preact/debug'); } ``` The following on top of index.js mean including also in production the debug logic. ``` import 'preact/debug'; //eslint-disable-line ``` Any help? My hint: `preact/debug` should export a function, this allows the developer to import it and run it only if NODE_ENV=development and…

### CASE-3789 · Preact unmounts DOM Node (wrong diff?)
- **Principles**: P-A5, P-F5, P-H3 · **Env**: react
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: Hello, I trimmed down my problem to the simplest example and I actually think the issue comes down to some difference in implementation with React. So I have a pretty simple use case / page: - A list of Hotels on the left - A Google map on the right - When I click a Hotel in the list, a detailed view appears on top of the map (`<HotelPane />`) ```js const HotelListPage = ({ hotels, selectedHotel }) => { return ( <div> <div className='HotelList'> <HotelList hotels ={hotels} /> </div> {selectedHotel !== null && <HotelPane hotel={selectedHotel} /> } <div className='Map'> <Map hotels ={hotels} />…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-3788 · Unnecessary DOM updates compared to react.js
- **Principles**: P-C1, P-C2, P-C3 · **Env**: react
- **Signals**: 👍2 💬4 · closed
- **Excerpt**: Hi, I've discovered that preact does a few DOM updates which are not necessary. Since its hard to explain I've created a minimal example repository ([link]) to show the effect. I'll try to explain it anyway: Given one renders a component with an empty div and a ref attached to it and in the update-lifecycle callback render another application into that div (e.g. some plugin concept). When the plugin component is updated (via its props) it is getting rerendered (as expected) but in contrast to react the 'contained application' will get remounted. This results in lifecycle problems. Any idea…

