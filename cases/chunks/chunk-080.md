# Case Chunk 080 — Round 80

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8901 · ENV variables don't work in the environments, only in build
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍1 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I wrote the issue in discord as well, so discussions can be held there if necessary. ### Problem background I'm trying to work with environment variables, I've read I need to prefix them with **VITE_** in order to use it in production, however I also read they need to be available during build stage. Is this really true? In that case I'd like to argue that it's either a bug or a bad/wrong design decision. Environment variables are meant to configure your environments differently depending on their needs simply by restarting the application. But with this current approach…

### CASE-8904 · false positive unused variable warning
- **Principles**: P-E1, P-E2, P-E4 · **Env**: svelte
- **Signals**: 👍1 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When building the popular `immich` photo management app, a warning is spit out: ``` "omit" is imported from external module "lodash-es" but never used in "src/lib/components/elements/dropdown.svelte", "src/lib/components/admin-page/settings/admin-settings.svelte", "src/lib/stores/assets.store.ts", "src/lib/utils/timeline-util.ts", "src/lib/components/admin-page/settings/job-settings/job-settings.svelte", "src/lib/components/admin-page/settings/machine-learning-settings/machine-learning-settings.svelte",…

### CASE-8915 · Vite v5.0.2 | vite.config.js - config define | process.env variables on production not available anymore
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍2 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In the past I set the process.env within the vite.config.js file to can access process.env variables. I need that because I'm still using jest and need the process.env variables there as well as in cypress. I just update to the latest version of Vite v5.0.2. I can't access the process.env variables anymore as they are empty on my production build. Locally it is still working. I think it has something to do with the changes described [here]([link]). My config looks like: ``` export default defineConfig(({ command, mode }) => { const env = loadEnv(mode, process.cwd(),…

### CASE-8923 · Build with SystemJS format causing global variables pollution
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug vite.config.js: ![image]([link] tool]/assets/71685145/46f183f4-5c82-4927-a1ca-8f84057fc809) entry: ![image]([link] tool]/assets/71685145/9c93e0de-8b7e-4e57-a6dc-f23dc7e6af8b) output: ![image]([link] tool]/assets/71685145/d6b33e07-ed64-4b68-a0ef-10f3434fb1e8) I was using single-spa in my project, so I followed the config on the single-spa [docs]([link]). Then, I found that if entry bundle includes "class", output will add unnecessary global vars, which causing conflict in my project. There is another issue [link] tool][ref] that seems to be related. ### Reproduction [link]…

### CASE-8935 · [Bug]: Fluentui v8 TooltipHost does not open when hovered/focused when running with `vite run`
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When serving my react project with `vite run` Fluentui v8 TooltipHosts do not show their content on mouse over/focus as they should. They do show correctly when running a production build produced by `vite build`. I also created an [issue against fluentui]([link]) because I'm not sure if the issue is in that library, or vite specifically. ### Reproduction [link] ### Steps to reproduce Create a new vite react project, and add "@user/react": "8.107.1". Add a TooltipHost component to the app, e.g ``` import { TooltipHost } from '@user/react'; ... <div className="App"> <div…

### CASE-8945 · Vite fatal error when a variable in .env ends with "$", even if it is not accessible by Vite.
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I have a project where a single .env file is used by both vite and symfony (PHP). There is a variable for symfony that ends with "$". Might be a regression of this: [link] tool][ref] Expectation: `npm install && npm run dev` runs successfully - starts devserver Reality: `npm install && npm run dev` fails with the following output: ``` up to date, audited 16 packages in 528ms 4 packages are looking for funding run `npm fund` for details found 0 vulnerabilities > [email] dev > vite error when starting dev server: Error: dotenv-expand failed to expand env vars. Maybe you…

### CASE-8946 · Semvars in an env variable throw an error in Vite
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug When an env variable has a semantic version (e.g. `"1.2.3"`), Vite throws a `Unexpected number in env.mjs:16:46` error, shows a blank screen, and stops loading anything. It seems that Vite tries to coerce it into a `number` rather than a `string`. <img width="629" alt="CleanShot 2023-01-30 at 17 43 25@user" src="[link]> <img width="446" alt="CleanShot 2023-01-30 at 17 43 32@user" src="[link]> ### Reproduction [link] ### Steps to reproduce 1. Install dependencies with `npm i` 1. Start the dev server with `npm run dev` 1. Visit the webpage (probably at `localhost:5173`) 1.…

### CASE-8950 · Less url set via variable not calculated correctly in monorepo
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug In a .less file imported via a monorepo dependency that calculates an url via variable, the url is not fixed correctly in certain cases. Minimal repro: in `packages/app/style.less`: ``` less @user "lib/style.less"; ``` in `packages/lib/style.less`: ``` less @user: './checkmark.svg'; @user: 'checkmark.svg'; img { content: url(@user); // does not work // content: url('./@{imgFile}'); // works } ``` If I run `npm run dev` and go to `localhost:5173`, I can see a network request that fails for: > [link] When I comment the first line and uncomment the 2nd line, I can see a…

### CASE-8953 · Vite build produces development version when using the --mode parameter AND when NODE_ENV is not set to production
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Our application is using Vite and React and has 3 deployments: development, qa and production. Each of those have different settings for authorization(different auth URLs) so I put those links into `.env.development`, `.env.qa` and `.env.production` files and use them through `import.meta.env`. The variables work fine, the problem is that react (or react plugin) generate a development build when running build command for qa or development modes. To build I wrote this command: ```json { "scripts": { "build": "vite build -m=${NODE_ENV=development}" } } ``` (the…

### CASE-9000 · Set base with environment variable
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Clear and concise description of the problem I'm running vite as part of bunch of nested npm scripts: ``` { "scripts": { "build": "npm run build:wasm && npm run build:js", "build:js": "tsc && vite build", "build:wasm": "wasm-pack build --target web --release", } } ``` I'd like to pass a base url, but due to a limitation with npm, it's rather hard to pass in arguments to nested scripts. Instead, I'd like the ability to have it passed as an environment variable, i.e. `BASE_URL=/foobarbaz/ npm run build` ### Suggested solution Not really sure honestly, would love some guidance. ###…

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8902 · Vite Build 2nd Attempt Do Not Response
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 1. Fork a repo using link: [link] 2. Add a new vite config file with empty content. ![image]([link] tool]/assets/61303421/a3df75d8-abc5-4c4a-8073-9b2f29eaa3fb) 3. Run `npm run build`, 1st attempt will generate output. ![image]([link] tool]/assets/61303421/e55c6a84-6963-4880-a0cc-0d0dd0e6b662) 4. Run `npm run build` again, 2nd attempt won't generate output. ![image]([link] tool]/assets/61303421/9d09ec4d-a43d-4855-9510-4775b42e2ea3) ### Reproduction [link] ### Steps to reproduce 1. Fork a repo using link: [link] 2. Add a new vite config file with empty content. 3. Run `npm…

### CASE-8906 · ssrLoadModule html-escapes single quote to &#x27;
- **Principles**: P-A3, P-H1, P-F4 · **Env**: react
- **Signals**: 👍0 💬4 · open · labels: pending triage
- **Excerpt**: ### Describe the bug When calling ssrLoadModule the resulting HTML, when passed to ReactDOMServer.renderToString, results in `'` (single quote) being html-escaped to `&#x27;`. It results in the error: Warning: Prop `style` did not match. Server: "" Client: "background-image:url('/src/assets/images/tacos-1.avif')" Actual code ``` <div style={{ backgroundImage: `url('${tacosUrl}')` }}> ``` Server-rendered HTML ``` <div style="background-image:url(&#x27;/src/assets/images/tacos-1.avif&#x27;)"> ``` ### Reproduction N/A ### Steps to reproduce _No response_ ### System Info ```shell System: OS:…

### CASE-8910 · vite5.0.10版本使用defineConfig返回async方法提示类型不兼容
- **Principles**: P-A3, P-H1 · **Env**: macos, vite, typescript, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 问题：使用 `vite5.0.10` 时，`defineConfig` 返回 `async function` 提示类型不兼容 <img width="1419" alt="image" src="[link] tool]/assets/51957438/8689e770-4795-4852-94ac-7a793576843c"> <img width="1404" alt="image" src="[link] tool]/assets/51957438/16b514c0-126c-4187-bdf1-ee07d8a35011"> ### Reproduction none ### Steps to reproduce `typescript: 5.2.2` `vue-tsc: 1.8.8` `vite: 5.0.10` ### System Info ```shell `macOS: 14.1.2 (23B2091)` ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X]…

### CASE-8914 · The requested module '/node_modules/.pnpm/[email]/node_modules/jquery/dist/jquery.js does not provide an export named 'default' (at @user.js)
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I want to use ztreejs in Vue3 and the result is an error ![image]([link] tool]/assets/35060559/783018e7-2a6e-45bf-8945-023df16bfa36) ![image]([link] tool]/assets/35060559/67fa1c4a-a650-4da7-b0bb-8204c3372fb6) ### Reproduction not ### Steps to reproduce _No response_ ### System Info ```shell not ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that…

### CASE-8916 · Vite CLI Paths take the entire path of the PC instead of just the project's path
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug This might be a Windows only thing (I posted the same issue in the Astro Repo and they already fixed it [[ref]]([link])) When I'm working with Vite and there are CLI prints in the terminal that mention the path, it prints the entire PC path. ![image]([link] tool]/assets/34131801/26c24dfc-7ad5-497d-ad0a-fa2e0f76b2a8) ### Reproduction [link] ### Steps to reproduce Open a project in windows and make the CLI print your path. ### System Info ```shell Windows 11 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8918 · [vite] Internal server error: ENOTSUP: operation not supported on socket, read
- **Principles**: P-A3, P-H1 · **Env**: opera, macos, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug My project is react. When I run the project with the'pnpm run dev 'command and then use the browser to access it, the following problems occur. This problem occurs many times over and over again. Sometimes there is no problem, and this problem occurs without knowing what is triggered. ![image]([link] tool]/assets/59407382/8776b73c-d423-46e1-a284-62201b2dfe2e) ### Reproduction [link] ### Steps to reproduce Run'pnpm i 'first, then'pnpm run dev' and finally open it with a browser ### System Info ```shell System: OS: macOS 13.5.2 CPU: (10) arm64 Apple M1 Max Memory: 1003.30…

### CASE-8919 · The `resolveUserExternal` method performs inconsistently on macOS and CentOS when parsing resource paths.
- **Principles**: P-A3, P-H1 · **Env**: macos, vue
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug For example: <img width="161" alt="image" src="[link] tool]/assets/22772994/3614127a-b78e-49e3-b643-e716281792f6"> ``` // App.vue .demo { background: url("./assets/pic/demo.png"); } ``` macOS: Both development and build can parse `demo.png` normally CentOS(build): ``` ./assets/pic/demo.png referenced in ... didn't resolve at build time, it will remain unchanged to be resolved at runtime ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell macOS: System: OS: macOS 13.5.2 CPU: (8) arm64 Apple M1 Memory: 84.50 MB / 8.00 GB Shell: 5.9 -…

### CASE-8920 · Caret in on-screen error output points to the wrong line
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: contribution welcome/feat: css/p2-nice-to-have
- **Excerpt**: ### Describe the bug When there is a LESS compilation error and the error appears in the browser, the caret points to the wrong line: ![image]([link] tool]/assets/10719780/7a2db786-788d-48fa-91d8-a0a74d87a52a) In the scenario above, the problem is on line 14 (`display.less` is missing). The error message at the top is correct, and the horizontal (column) location of the caret seems correct, but it's off by one line. It's pointing to line 13 instead of line 14. This issue is 100% reproducible with any kind of LESS compilation error. ### Reproduction N/A ### Steps to reproduce Induce a LESS…

### CASE-8922 · Status code of document requests is `200` even when there is a serious error.
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am writing some tests for the API surface of Vite that we are using a in a new project. These are really minimal. 1. run `vite` 2. request `[link] 3. check the status code 4. check that the reponse is html But this is true even when there is a serious failure. In our case I excluded the `vue` plugin, which obviously breaks everything. <img width="462" alt="Screenshot 2023-08-17 at 15 37 32" src="[link] tool]/assets/11521496/397b00fa-b3f6-4a3f-a2e3-a9a48c0b3517"> <img width="581" alt="Screenshot 2023-08-17 at 15 45 52" src="[link]…

### CASE-8925 · 静态资源处理 打包后体积增大三分之一
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug 摘自官网 处理全局静态资源动态导入 [link] function getImageUrl(name) { return new URL(`/assets/${name}.png`, import.meta.url).href } 如果使用下面这种 function getImageUrl(name) { return `/assets/${name}.png` } 打包体积会由31MB变成21MB，但是打包后图片地址没有被正确解析。有办法解决这个问题吗？ ### Reproduction [link] ### Steps to reproduce npm run build ### System Info ```shell mac ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8926 · Could not Fast Refresh. Learn more at [link] tool]-plugin-react/tree/main/packages/plugin-react#consistent-components-exports
- **Principles**: P-A3, P-H1 · **Env**: react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug <img width="1083" alt="image" src="[link] tool]/assets/124666577/f989bc6c-728f-4113-b44c-7037a2d5aa8a"> ### Reproduction 121 ### Steps to reproduce _No response_ ### System Info ```shell 如果你能描述你的问题. 那么它就解决了一半 奈何自己不行, 找不到原因, 也无法复现, 需要你们自己看输出 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that…

### CASE-8927 · Suspense content not rendering in vite react app but loads in CRA
- **Principles**: P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I created a very simple app with a link **Go to markdown page** at the homepage . On clicking the link , it navigated to `markdown/new` url and lazyloads a markdown editor. I also use cookiebot which returns 404 ( that is intentionally misconfigured ). Now when i click the `Go to markdown page` link, the suspense fallback is always rendered and the component is not loaded even though the JS is downloaded. The same application under same configuration works for the app powered by react-app. Please check the video where react-app is on first tab and vite app on the second.…

### CASE-8932 · use obfuscator can not dynamic route imports
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug **When I build the project using obfuscator and turn on stringArray and try to encode the string, the project cannot be accessed normally** <img width="1132" alt="image" src="[link] tool]/assets/30872365/773e2511-b739-4ea6-9899-b325ad253e45"> <img width="891" alt="image" src="[link] tool]/assets/30872365/abe37e91-923f-4b25-a10f-7d047a607821"> [link] tool][ref] [link] tool][ref] **I saw the above two issues and updated vite to 4.3.5,but did not solve the problem,Here is a minimal repro, using the same plugin as isue above** ### Reproduction [link] ### Steps to reproduce…

### CASE-8934 · SyntaxError Unexpected token error in react lib build mode
- **Principles**: P-A3, P-H1 · **Env**: macos, react
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug When i try to build a react component lib with the lib mode, i accross a SyntaxError. The dev mode is all right. ### Reproduction [CodeSandbox]([link]) ### Steps to reproduce 1. Wait the codesanbox setup 2. Create a new terminal <img width="1499" alt="image" src="[link]> 3. `pnpm run build:lib` ### System Info ```shell System: OS: macOS 13.2.1 CPU: (10) arm64 Apple M1 Pro Memory: 270.16 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.18.1 - ~/.nvm/versions/node/v16.18.1/bin/node Yarn: 1.22.19 - ~/.nvm/versions/node/v16.18.1/bin/yarn npm: 8.19.2 -…

### CASE-8938 · vite resolve module doesn't resolve /path/to/xxx/index
- **Principles**: P-A3, P-H1 · **Env**: linux, vite
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I create a package named math under node_modules, and use following `exports` config in package.json, but vite can't resolve `math/add`. I think vite should should find the `node_modules/math/es/add/index.js` <img width="1440" alt="image" src="[link]> ### Reproduction [link] ### Steps to reproduce 1. open reproduce url 2. after auto install depeendencies, `ctrl + c` 3. run `vite build` in terminal 4. you will see the error 5. open `vite.config.mjs` and uncomment `rollupPluginNodeResolve` 6. run `vite build` will ok ### System Info ```shell System: OS: Linux 5.0 undefined…

### CASE-8939 · vite缓存 bug
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug ![image]([link]) 正常渲染页面 如果直接刷新浏览器，显示空页面 ![image]([link]) ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell mac ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to avoid creating a duplicate. - [X] Make sure this is a Vite issue and…

### CASE-8942 · CSS output name will change when import large css from node_modules
- **Principles**: P-A3, P-H1 · **Env**: vite, bootstrap
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug In my case, HTML and assets are from different servers. So I configured vite to always generate `build/index.css`. When doing code spliting, Vite will nicely output: ``` build/index.css <- the entry build/index2.css build/index3.css ``` However, when I imported some large css, like this: ```js import 'bootstrap/dist/css/bootstrap.css'; ... ``` The css output changed to: ``` build/index.css build/index2.css build/index3.css <- the entry ``` HTML output: ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <link rel="icon" type="image/svg+xml"…

### CASE-8949 · vite for svelte-template default leads to warnings on svg import
- **Principles**: P-A3, P-H1 · **Env**: ubuntu, vite, svelte
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ``` npm create vite@user sandbox -- --template svelte-ts pnpm install cd sandbox cd src vi App.svelte ``` Got warning immediately as shown below ![image]([link]) ### Reproduction npm create vite@user sandbox -- --template svelte-ts ### Steps to reproduce _No response_ ### System Info ```shell Ubuntu 22.04 Newest vite(4.0.0) ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the…

### CASE-8951 · Cannot import PDF file
- **Principles**: P-A3, P-H1 · **Env**: webpack, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug While using NX framework with the Webpack, I would like to convert it to Vite, and one thing that I have configured manually is the support for the PDF files to be imported in the React component. Now, I've created a clean new Vite/React application to test it out, and I am having trouble with the PDF. As far as I understood, it should already be supported, same as images, json and other such resources, however, I get IDE error and the resource does not get rendered on the page. ![image]([link]) ![image]([link]) ### Reproduction [link] ### Steps to reproduce Just accept…

### CASE-8952 · When importing SCSS in JS with ?inline query, unexpected double loading error appears.
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug In the provided example I'm trying to import a SCSS file that has been previously imported in my SCSS configuration. To avoid a double loading error I'm using this functionality from v4: [link] tool]/blob/main/packages/vite/CHANGELOG.md#importing-css-as-a-string [link] Unfortunately in my scenario with SCSS I still receive the double loading error although I'd expect the loaded SCSS file not to be emitted. <img width="645" alt="Screenshot 2023-01-07 at 18 01 45" src="[link]> ### Reproduction [link] ### Steps to reproduce yarn dev ### System Info ```shell System: OS: macOS…

### CASE-8955 · vite4 error: does not provide an export named 'default' in storybook
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug The latest version of vite will face error of <img width="1394" alt="image" src="[link]> when I run storybook. I downgrade to older version, the error is gone. "vite": "^2.6.10" ### Reproduction [link] ### Steps to reproduce run `npm run storybook` with ` "vite": "^4.0.3" ` and ` "vite": "^2.6.10" ` the error ocours in ^4.0.3 not the older version ### System Info ```shell System: OS: macOS 12.2.1 CPU: (8) arm64 Apple M1 Pro Memory: 78.63 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.18.1 - ~/.nvm/versions/node/v16.18.1/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn…

### CASE-8957 · import.meta.glob Not support alias for [email]
- **Principles**: P-A3, P-H1 · **Env**: typescript, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug config: ```typescript resolve: { alias: [ {find: '@', replacement: './src'} ] } ``` App.vue ```typescript const dir = import.meta.glob('@/assets/*.svg') console.log(dir) ``` run error: ``` [vite] Internal server error: Invalid glob: "@/assets/*.svg" (resolved: "src/assets/*.svg"). It must start with '/' or './' ``` ![image]([link]) ### Reproduction [link] ### Steps to reproduce ![image]([link]) ### System Info ```shell * ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) -…

### CASE-8959 · [systemjs] `new URL` question
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍1 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug When I upgraded from 3.04 to 3.2.2, the `new URL('../assets/imgs/logo.svg', import.meta.url).href` code did not work properly under the micro frontend system, after analysis Found that version 3.2.2 of `vite` will `import.meta.url` -> `self.location`. <img width="2505" alt="image" src="[link]> ### Reproduction [link] ### Steps to reproduce pnpm i pnpm dev ### System Info ```shell System: OS: macOS 12.2.1 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 996.69 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.0.0 - /usr/local/bin/node Yarn: 1.22.10 -…

### CASE-8962 · Building for production by default copies all files and folders from public (frustrating first time user experience)
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/feat: library mode
- **Excerpt**: ### Describe the bug I am a first time user of Vite, trying to give it a go. An issue I've ran into straight away is building for production `library mode` seems to copy all files and folders from public, even though the entry point is a super simple basic js file that doesn't import any of the files it's copied. If you take a look at the reproduction url take a look at the `dist` folder that vite has built - it included these files and folder: ![image]([link]) For our project those folders that it's copying is absolutely huge (gigabytes) and it actually looks like it's frozen the build…

### CASE-8964 · `vite build`: Wrong mime-type (e.g. `video/mp2t`) when using `import workerUrl from './my-worker.js?url` syntax
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug/feat: web workers
- **Excerpt**: ### Describe the bug When using the `?url` worker import syntax e.g. `import workerUrl from './my-worker.js?url` syntax, Vite currently infers the wrong mime-type. I guess in the case of TS it should re-write it to `.js` instead like it does for the `?worker` behaviour. ![image]([link]) ### Reproduction [link] ### System Info ```shell Stackblitz ``` ### Used Package Manager npm ### Logs Output file: ```js (function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new…

### CASE-8971 · Playground prevents pnpm install of monorepo
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/test
- **Excerpt**: ### Describe the bug Trying to `pnpm install` a freshly cloned Vite repo leads to `ERR_PNPM_NO_MATCHING_VERSION No matching version found for [email]` : ![image]([link]) Note that I have `strict-peer-dependencies=false` in my .npmrc file. The culprit is `./playground/optimize-deps/dep-with-optional-peer-dep/package.json`: ```json { "name": "dep-with-optional-peer-dep", "private": true, "version": "0.0.0", "main": "index.js", "type": "module", "peerDependencies": { "foobar": "0.0.0" }, "peerDependenciesMeta": { "foobar": { "optional": true } } } ``` Changing to `"foobar": "1.0.0"` or…

### CASE-8973 · Style files in the component library were lost when I use [email] to build the static resource
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug I use"vite": "^2.6.10" in my package.json. When I installed the packages, the version was upgraded to 2.9.15 by default. Then I built the static resource: <img width="586" alt="截屏2022-08-26 15 19 32" src="[link]> Then style problems were found in the production environment: <img width="354" alt="截屏2022-08-26 14 48 37" src="[link]> [email] did not package style files containing value of "--td-brand-color". Finally I dropped the version down to 2.6.10. Here's what it looks like when it's repackaged now: <img width="688" alt="截屏2022-08-26 16 22 32" src="[link]> Problem…

### CASE-8974 · Vue3 dynamicAsyncComponent Not Working
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Hi, I'm using `defineAsyncComponent()` in my Vue page and the components inside the page are loaded lazily. Today I switched from Laravel Mix to Vite. Everything works fine but my components loaded with `defineAsyncComponent()` are not loaded. When I look in the `public/build/assets` folder, I see that these components are not compiled at all. <img width="824" alt="CleanShot 2022-08-08 at 13 21 14@user" src="[link]> ### Reproduction # ### System Info ```shell # ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [x] Follow our [Code of…

### CASE-8979 · [vite3] - image path in xx-legacy.[hash].js is __VITE_ASSET_[hash]__
- **Principles**: P-A3, P-H1 · **Env**: macos, vite
- **Signals**: 👍0 💬4 · closed · labels: plugin: legacy/p4-important
- **Excerpt**: ### Describe the bug I am having this issue in my app since upgrading to Vite 3. After build, I found that image path in xx-legacy.[hash].js is __VITE_ASSET_[hash]__ and I couldn't load the image when the browser downgrade to use legacy resources. example: - before build `<style scoped> .container { background-image: url("@/assets/test.jpeg"); } </style>` - after build, path in xx-legacy.[hash].js ` .container[data-v-0bd88030]{background-image:url(__VITE_ASSET__e95e86d6__)} ` <img src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.4 CPU: 2.6 GHz Intel Core i7…

### CASE-8984 · React Context hot reload bug
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug <img width="1074" alt="image" src="[link]> React Context is great feature, and used widely, however it broke everytime when save the code or hot reload the vite project. ### Reproduction [link] this is the codesandbox link, however hmr does not work in codesandbox, pls do try at local // stores.js ``` import { createContext, useContext } from "react"; import { makeAutoObservable, toJS } from "mobx"; import RootStore from "./root"; export default class Store { constructor() { this.rootStore = new RootStore(this); makeAutoObservable(this); } } export const store = new…

### CASE-8990 · SASS sourcemaps not working
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug SASS sourcemaps don't seem to work correctly. I've stripped down my project to a few SASS files for reproduction, removed all third-party plugins, etc. Testing this repro should be as easy as `npm ci && npm run dev`, then open a browser, open devtools, and inspect any of the elements on screen. As shown in the screenshot here, sourcemaps do not point to any of the included SASS files in the project - instead, everything points to line numbers in `index.scss`: ![image]([link]) These line numbers do not exist - `index.scss` is only 6 lines of code. ### Reproduction [link]…

### CASE-8995 · read certificate and show the correct domain when startup
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬4 · closed · labels: enhancement
- **Excerpt**: ### Describe the bug I'm trying to serve a Vue.js website from a Docker container using a custom domain and SSL cert. It looks like Vite is not serving the SSL cert and the browser is blocking the site with the error: NET::ERR_CERT_AUTHORITY_INVALID. This is because the browser is not receiving the provided SSL cert and is using the browser default example.org self signed cert. This is currently working with Vue CLI using the same Docker image and run options. Here are my Vite server settings: ``` host: '0.0.0.0', port: 443, https: { key: readFileSync(ssl_key), cert: readFileSync(ssl_cert) },…

### CASE-8998 · react lazy component alias import is not work
- **Principles**: P-A3, P-H1 · **Env**: macos, react, vite
- **Signals**: 👍2 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I use lazy api, is not work like it ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.5 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 2.00 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.16.0 - ~/.nvm/versions/node/v14.16.0/bin/node Yarn: 1.19.1 - /usr/local/bin/yarn npm: 6.14.11 - ~/.nvm/versions/node/v14.16.0/bin/npm Watchman: 4.9.0 - /usr/local/bin/watchman npmPackages: @user/plugin-react: ^1.3.0 => 1.3.2 vite: ^2.9.7 => 2.9.8 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [ ]…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8903 · bug: Wrongly generated CSS selector upon build, while dev works fine
- **Principles**: P-G4, P-E3 · **Env**: react, vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/has workaround/p2-edge-case
- **Excerpt**: ### Describe the bug Hello! In a React TS + Vite project using CSS modules, I stumbled upon an issue where all written css selectors are correctly applied to the elements in dev mode, but in the production build, one selector is missing, and - upon further inspection - the generated CSS differs slightly. It happens roughly like this: The following [here simplified] CSS is what I've written in the CSS module, and is used as-is in dev mode and works fine: ```css .inputContainer { .input { ... } &:after { ... } &:after, & .input { ... } } ``` However, in production, the last css selector (…

### CASE-8907 · Vite not tree-shaking extra rollup inputs
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug Vite 5.0.12 can't tree-shake extra inputs defined in `build.rollupOptions.input` when `moduleSideEffects` is set to false: ```js // vite.config.js import { defineConfig } from 'vite'; export default defineConfig({ build: { rollupOptions: { input: { index: './index.html', extra: './extra.js', }, treeshake: { moduleSideEffects: false, }, output: { dir: './dist/vite', }, }, }, }); ``` ```js // main.js import './extra.js'; ``` ```js // extra.js import { Firestore } from 'firebase/firestore'; const a = Firestore; ``` In the example above, the entire `firebase/firestore` module…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8905 · [vite] Pre-transform error: Failed to load url /src/pages/index/main
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug After updating to Vite 5 I started getting this error. Vite preview works fine but vite dev fails and gives following error Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "". Strict MIME type checking is enforced for module scripts per HTML spec. Starting page of app is different that index.html. `import { resolve } from "path"; import { defineConfig } from "vite"; import vue from "@user/plugin-vue"; import VueI18nPlugin from "@user/unplugin-vue-i18n/vite"; import mpa from "vite-plugin-mpa"; import…

### CASE-8912 · base path is added twice for absolute URL assets in dev mode when assets plugin is applied before transformIndexHtml
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍1 💬4 · open · labels: pending triage
- **Excerpt**: ### Describe the bug On dev mode, for absolute asset URLs in monorepos, the assets plugin resolves the asset including the `base` and `origin` from the vite config when calling [fileToDevUrl]([link] tool]/blob/73e971f27a63b2d4ecb5acf44f8726cdd3d2082b/packages/vite/src/node/plugins/asset.ts#L302), then when `transformIndexHtml` is applied, the `indexHtml` plugin appends `base` again when resolving the asset path in [processNodeUrl]([link] tool]/blob/73e971f27a63b2d4ecb5acf44f8726cdd3d2082b/packages/vite/src/node/server/middlewares/indexHtml.ts#L152C5-L152C5) the `base` is appended again. This…

### CASE-8921 · new URL throw error when environment is `happy-dom` in `0.34.2`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ``` ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ FAIL test/basic.test.ts [ test/basic.test.ts ] TypeError: The URL must be of scheme file ❯ TypeError.get ../../../blitz.ba0db7b1.js:67:7048 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Serialized Error: { code: 'ERR_INVALID_URL_SCHEME' } ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯ Test Files 1 failed (1) Tests (1) Start at 13:20:13 Duration 1.10s (transform 33ms, setup…

### CASE-8928 · Internal rollup crash when transform generates invalid js
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When a plugin incorrectly transform JS code into invalid JS code, instead of showing the actual parsing error. It makes rollup crash in the error augmentation code. Seems like an bug shared between rollup and vite. The error augmentation code should use the sourceCode as the last transform. Not the original source code. ``` > vite build vite v4.3.9 building for production... ✓ 3 modules transformed. ✓ built in 85ms [vite:build-import-analysis] Cannot destructure property 'line' of 'locate(...)' as it is undefined. file: /home/projects/vitejs-vite-5cun7m/counter.js error…

### CASE-8933 · plugin, can't pre transform assets imported with query modifiers `?raw`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug According to the docs a custom plugin's `enforce: "pre"` should execute before Vite's core plugins but it seems that module imports with query modifiers are processed before, not after, breaking this contract. For example importing `file.html?raw` I'd expect my plugin's transform to have access to the original html body however i'm getting the `?raw` transformed version `export default "<html ..>"` which i'd assume would occur later in the plugin chain ```js { name: 'my-plugin', enforce: 'pre', transform: async (code, id) => { if(id.endsWith('.html?raw')) { // code here…

### CASE-8936 · Wrong class name exported with class static property and `eval`
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug Vite has bug transforming the following code: `counter.ts` ```ts export class Foo { public static bar: string; constructor() { Foo.bar = 'bar'; } baz() { eval('-100'); } } ``` `main.ts` ```ts import { Foo } from './counter'; console.log(new Foo()); ``` The genarated `counter.ts` ```js export class _Foo { static bar; constructor() { _Foo.bar = "bar"; } baz() { eval("-100"); } } //#…

### CASE-8947 · SCSS files are not compiled when being imported from CSS files
- **Principles**: P-D1, P-D2, P-D3 · **Env**: linux, ubuntu
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I'm trying to import an SCSS file from a CSS file, I see either: * An "unknown word" error from postcss-import if there are any SCSS comments; * A "cannot find" error from postcss-import if there are any imports inside SCSS (even though postcss-import shouldn't be handling those) * Untransformed SCSS being added as if it was CSS This makes me suspect that SCSS imports from CSS aren't being transformed properly. ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.15 Ubuntu 22.04.1 LTS 22.04.1 LTS (Jammy Jellyfish)…

### CASE-8956 · Should add `inlineDynamicImports: true` for UMD builds
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug [UMD doesn't support lazy loading and dynamic imports]([link]), but ES and CJS do. However, since I can't specify different `rollupOptions` for different formats, I can't build them (es, cjs, umd) all at once. If I build them at once and don't include `inlineDynamicImports: true` in my `rollupOptions`, UMD will fail to build. However, if include `inlineDynamicImports: true`, the dynamic imports in the es and cjs targets will be removed as well. **Not Including `inlineDynamicImports`**: ```log vite v4.0.3 building for production... ✓ 1559 modules transformed.…

### CASE-8960 · Replace "require" is not always needed
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: wontfix
- **Excerpt**: ### Describe the bug Some packages (as `uniqid`) make checks like `if(typeof require !== 'undefined')` to ensure that we are in node env. But vite replace that `require` to `_require` which is defined and then "module as been externalized"... I think if it is not function call, there is no need to transform that check. ### Reproduction [link] [link] ### Steps to reproduce ```bash npm create vite vite-project -- --template vanilla cd vite-project npm i npm i uniqid echo "import uniqid from 'uniqid'" >> main.js npm run dev ``` Then open [link] in browser and check browser console ### System…

### CASE-8961 · postcss plugin order is confused
- **Principles**: P-D1, P-D2, P-D3 · **Env**: chrome60, windows
- **Signals**: 👍0 💬4 · closed · labels: documentation/contribution welcome/feat: css
- **Excerpt**: ### Describe the bug when postcss use plugin "postcssPresetEnv({stage: 2})",I'm expecting is the result of the CSS being transformed into the config,but “inset: 0;” no transform,I found this bug is ESBuild need set"cssTarget" for "chrome60"。 It's so confusing, when I add the plugin, it doesn't work...Can add a description to the official documentation? ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-11320H @ 3.20GHz Memory: 2.77 GB / 15.74 GB Binaries: Node: 16.13.1 - C:\Program…

### CASE-8977 · Rollup code-split error during lib build
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/p2-edge-case
- **Excerpt**: ### Describe the bug Building a library with `iife` _and_ `es` formats selected. As soon as a dynamic import is introduced, the ESM build fails to compile: ```sh $ vite build vite v3.0.2 building for production... ✓ 3 modules transformed. dist/howdy.iife.js 0.19 KiB / gzip: 0.17 KiB dist/style.css 1.01 KiB / gzip: 0.54 KiB Cannot split a chunk that has already been edited (1:7 – "import("./foobar")") error during build: Error: Cannot split a chunk that has already been edited (1:7 – "import("./foobar")") at MagicString._splitChunk…

### CASE-8978 · Cannot build Vue 3 app. Development version works just fine
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vue, vite, desktop
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug For some reason I suddenly cannot build my Vue 3 app. If I run development version with `npm run dev` it works without any problem or error. However If I try to build production app `npm run build` it fails with this error: <details> <summary>Build error - Click to expand</summary> ```shell PS C:\Users\admin\Desktop\front> npm run build > [email] build > vite build vite v3.0.2 building for production... ✓ 75 modules transformed. [commonjs--resolver] Failed to resolve entry for package "C:\Users\admin\Desktop\front". The package may have incorrect main/module/exports…

### CASE-8989 · Wrong Source Map for js files in SSR mode
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: has workaround/p3-downstream-blocker/feat: ssr
- **Excerpt**: ### Describe the bug When transforming JS files with `server.transformRequest` and enabled SSR flag, it returns invalid source map. `sourceContent` includes already processed import paths instead of the original ones. To run code in reproduction: ```sh node vite-repro.mjs ``` It was noticed in Vitest, because snapshots rely on source maps: [link] ### Reproduction [link] ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link]…

### CASE-8991 · Build process hangs at 'modules transformed' with >=2.9.7, works with 2.9.6
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I have a bigger code base that stops working when using the following code while using vite `>=2.9.7`. I tested older versions and `2.9.6` works. ```ts pageContext?.web?.absoluteUrl ?? window.location.origin ``` Rolling back to `2.9.6` or changing the code to the following works: ```ts pageContext ? pageContext.web.absoluteUrl : window.location.origin ``` `vite dev` works while `vite build` hangs. The repro only shows the code that causes this issue, but the minimal repro itself works. I'm not sure what exactly causes this issue, but it has to do with the commits in 2.9.7…

### CASE-8992 · Vite transforms and more importantly removes valid css colours
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug Hi ! When using vite (tried with both Vue and Solid SPAs so not a framework issue) colours styles applied inside components (works as it should in html files) are transformed. For example: `hsl(0, 0%, 0%)` becomes: `rgb(0, 0, 0)` In my opinion it shouldn't do any transformation as it is a valid CSS colour but here's a worse issue. When applying this style `background-color: rgb(0, 0, 0); background-color: oklch(0% 0 220/1);` which is valid CSS there is no style at all. When applying a style, I expect to find inside the DOM what I wrote even if it's garbage. I wasn't sure…

### CASE-8993 · Multiline comment in :global declaration in Sass file that is a CSS module throws minification warning
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/feat: css
- **Excerpt**: ### Describe the bug When working with CSS modules in Sass files and including multi-line comments inside of a `:global` declaration, the production build shows a warning. Given the following code: ```sass :global { /* * Add the correct display in all browsers. */ summary { display: list-item; } } ``` When running `npm run build` it outputs the following CSS: ```css {}summary{display:list-item} ``` This shows the following warning during the build: ``` vite v2.9.9 building for production... ✓ 31 modules transformed. warnings when minifying css: ▲ [WARNING] Unexpected "{" <stdin>:1:1: 1 │ { ╵…

### CASE-8996 · Vite 2.9.7+ leads to Javascript heap out of memory
- **Principles**: P-D1, P-D2, P-D3 · **Env**: vite, vue, tailwind
- **Signals**: 👍4 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When building my site (Vue, TS, Tailwind, moderately large app with mostly bespoke components), with any version >= 2.9.7, I get GC errors like this near the end of the build process (full debug log is pasted under "Logs" below): ```shell vite v2.9.9 building for production... transforming (1877) node_modules\monaco-editor\esm\vs\base\common\navigator.jsUse of eval is strongly discouraged, as it poses security risks and may cause issues with minification Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification ✓ 1877 modules…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8908 · TS Decorators don't work when using Vite 5.0.11 & TS 5.3.3
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome, vite, typescript, react
- **Signals**: 👍0 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug When trying out the `typescript-json-serializer` project, I noticed that the latest versions of Vite doesn't read the contents of `tsconfig.json` when specified in `vite.config.ts` ```typescript export default defineConfig({ plugins: [react()], optimizeDeps: { esbuildOptions: { tsconfig: './tsconfig.json' } }, }) ``` Leading to (n chrome): ``` 3:09:30 PM [vite] Pre-transform error: Transform failed with 4 errors: /Users/mbeznos/git/ts-json-serialize-test/src/models/human.ts:9:8: ERROR: Parameter decorators only work when experimental decorators are enabled…

### CASE-8909 · Why does vite collect styles after js files?
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3, P-A3, P-H1 · **Env**: safari 12, vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Why does vite collect styles after js files? Because of this, on safari 12, the animation does not work on the first load (outside the cache) ![image]([link] tool]/assets/24230199/d4ae068f-ab45-46f7-b6f3-1212d28313e2) ### Reproduction test.artemsites.ru/vite-styles - here with the original build test.artemsites.ru - here I am manually.css moved to the top ### Steps to reproduce Load the site (test.artemsites.ru/vite-styles) outside the cache and make sure that the dot at the bottom of the decorative line does not appear ![image]([link]…

### CASE-8911 · Plugin legacy is not working as expected for replaceAll
- **Principles**: P-G1, P-G2, P-G3, P-D1, P-D2, P-D3 · **Env**: chrome 84, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug Hello, I am using `vite` with `react` & `viteRails`. I don't think the plugin legacy works as expected trying to include replaceAll and in Chrome 84 version it doesn't work. I use a library in my project called [camelCaseKeys]([link]). This library depends on [camelCase]([link]) which has a function [`replaceAll`]([link]). My project was using babel: `{ "presets": ["@user/preset-env", "@user/preset-react"], "plugins": [ "@user/plugin-syntax-dynamic-import", "@user/plugin-proposal-class-properties", "@user/plugin-transform-runtime" ] }` which I completely removed all babel…

### CASE-8913 · 打包的时候报错
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 升级vite5后打包报错 ### Reproduction - ### Steps to reproduce _No response_ ### System Info ```shell System: OS: macOS 14.1.2 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 110.76 MB / 16.00 GB Shell: 3.2.57 - /bin/sh Binaries: Node: 16.19.1 - /usr/local/bin/node Yarn: 1.22.21 - /usr/local/bin/yarn npm: 9.8.1 - /usr/local/bin/npm pnpm: 8.11.0 - /usr/local/bin/pnpm Browsers: Safari: 17.1.2 ``` ### Used Package Manager pnpm ### Logs <img width="945" alt="image" src="[link] tool]/assets/19872771/2dea0700-9be8-4082-b27c-4331fecfcbc0"> <img width="945" alt="image"…

### CASE-8917 · `resolve` conditions not respected when running the dev server / ssrLoadModule
- **Principles**: P-G1, P-G2, P-G3, P-F4 · **Env**: edge, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am setting resolve.conditions to `["workerd", "worker", "browser"]`, and ssr.target to `webworker`, so that imported packages use the browser/worker/edge versions if available. This works fine during vite build, but it seems these config options are not respected when running the vite dev server or manually creating a server and using `ssrLoadModule`. ### Reproduction [link] ### Steps to reproduce `yarn` followed by `yarn start`. Note the console logs out undefined for the `renderToReadableStream` import. This indicates the import resolved to the node version of react,…

### CASE-8924 · External static assets are loaded as script modules
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vue, webpack, vite
- **Signals**: 👍5 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm migrating a Vue application from Webpack to Vite, where a few static files are served by our backend, separate from the frontend bundle. These are referenced in eg. img src via absolute paths. I have added the paths for these in `build.rollupOptions.external`, which resolved build failures. However, when the page from the build output is loaded in the browser, the Vue application fails to mount. Chrome shows the following error in the console: ``` Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of…

### CASE-8937 · Vite app hang on Fedora 37
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, chrome, chromium, vite
- **Signals**: 👍1 💬4 · closed · labels: documentation/contribution welcome
- **Excerpt**: ### Describe the bug When accessing our app run with `vite dev` the page stay blank. When I inspect network I can see that it make about 600-800 request and then stops. In my coworkers computer it works and load around 2k5 files. No idea why, I can't find any errors messages anywhere. I tried on firefox, chrome and chromium. I also tried the troubleshoot guide there: [link] and did the following with no success: **Inotify** ``` ➜ ~ sysctl fs.inotify fs.inotify.max_queued_events = 16384 fs.inotify.max_user_instances = 8192 fs.inotify.max_user_watches = 524288 ``` **Ulimit** ``` ➜ ~ ulimit -Sn…

### CASE-8941 · requestIdleCallback delay too long(500ms).
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox 10, windows
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ```js // first // 500ms chrome and edge; firefox 10ms console.time('requestIdleCallback') requestIdleCallback(() => { console.timeEnd('requestIdleCallback') // second // 16ms console.time('requestIdleCallback') requestIdleCallback(() => { console.timeEnd('requestIdleCallback') }) }) ``` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Windows 10 10.0.19045 CPU: (8) x64 AMD Ryzen 5 3400G with Radeon Vega Graphics Memory: 3.69 GB / 13.94 GB Binaries: Node: 18.12.1 - C:\Program Files\nodejs\node.EXE npm: 8.19.2 - C:\Program…

### CASE-8944 · @user/plugin-legacy 无法兼容android4、5等传统机型
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome/39, safari/537, android4, android 7, linux, android 5, webkit, mobile
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction/cannot reproduce/plugin: legacy
- **Excerpt**: ### Describe the bug 目前我已经兼容到android 7及以上，但是面对更多的版本一直无法解决。 ### Reproduction [link] ### Steps to reproduce npm install; npm run dev; ### System Info ```shell 浏览器UA： 'Mozilla/5.0 (Linux; Android 5.1.1; HUAWEI P7-L07 Build/HuaweiP7-L07) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36 Appara/5.0 (com.snda.wifilocating; A0008; feed/1.0.220725; wkbrowser 4.9.12 230202)' ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing…

### CASE-8958 · React 项目添加自定义插件时控制台报错
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 提供了一个最小复现 repo，我希望做一个自定义插件，希望在启动项目时进行一写操作，故在 configResolved 钩子中定义了实现方法。达到我的预期了，并且服务可以正常启动。但是打开浏览器控制台会有一个错误信息，页面无法渲染。 ### Reproduction [link] ### Steps to reproduce 查看 READEME.md 说明 ### System Info ```shell System: OS: macOS 12.6.1 CPU: (10) arm64 Apple M1 Pro Memory: 100.31 MB / 32.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.13.0/bin/yarn npm: 8.12.1 - ~/.nvm/versions/node/v16.13.0/bin/npm Watchman: 2022.03.21.00 - /opt/homebrew/bin/watchman Browsers: Chrome: 107.0.5304.110 Safari:…

### CASE-8966 · TypeScript version is different between node_modules and package.json
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: edge, windows, typescript, vite
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug 1. create my vite project 2. the typescript version is 4.6.4 in package.json 3. but the real typescript version is 4.8.3 in node_modules <img width="647" alt="image" src="[link]> <img width="770" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.19041 CPU: (12) x64 Intel(R) Core(TM) i5-10400F CPU @ 2.90GHz Memory: 6.32 GB / 15.92 GB Binaries: Node: 18.1.0 - D:\Coding Editor\Node JS\node.EXE Yarn: 1.22.17 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.13 - D:\Coding Editor\Node JS\npm.CMD Browsers: Edge: Spartan…

### CASE-8967 · Setting `fastRefresh: false` breaks HMR
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When `fastRefresh` is `false` and running `vite dev` making changes to the `App.tsx` behaviors weirdly — changes are reflected later and flickering can be seen some of the times. I want to disable `fastRefresh` because of [link] tool][ref]. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.4 CPU: (8) arm64 Apple M1 Memory: 122.03 MB / 8.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 16.15.1 - /opt/homebrew/bin/node Yarn: 1.22.19 - /opt/homebrew/bin/yarn npm: 8.11.0 - /opt/homebrew/bin/npm Browsers: Chrome: 105.0.5195.125 Firefox: 101.0.1 Safari: 15.5…

### CASE-8969 · The package may have incorrect main/module/exports specified in its package.json. error during build:
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug vite version updated, make one error when i run build: <img width="813" alt="image" src="[link]> ### Reproduction npm run build ### System Info ```shell chrome ``` ### Used Package Manager npm ### Logs [commonjs--resolver] Failed to resolve entry for package "quasar". The package may have incorrect main/module/exports specified in its package.json. error during build: ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]).…

### CASE-8972 · No loader is configured for ".html" files
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, edge, firefox, safari, macos
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug During dependency pre-bundling, if there is a dependency which imports html files, esbuild would report an error: ``` No loader is configured for ".html" files: xxx.html ``` ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.3.1 CPU: (6) x64 Intel(R) Core(TM) i5-8500B CPU @ 3.00GHz Memory: 211.95 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.20.0 - ~/.nvm/versions/node/v14.20.0/bin/node npm: 6.14.17 - ~/.nvm/versions/node/v14.20.0/bin/npm Browsers: Chrome: 104.0.5112.101 Edge: 92.0.902.84 Firefox: 103.0.2 Safari: 14.1 npmPackages:…

### CASE-8975 · Target build ESNEXT + Error with browser compatibility
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome87, edge88, firefox78, safari13, macos, vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug Hi, I am trying to use Metaplex / Solana Web3 with vite & vue. It seems to have an error with the build target. I receive this error: `Big integer literals are not available in the configured target environment ("chrome87", "edge88", "es2020", "firefox78", "safari13" + 2 overrides)` It is weird, my build target is esnext so it should work. I tried with multiple version of node, I am a bit lost. Can someone help? I followed this starterkit: [link] ### Reproduction [link] ### System Info ```shell System: OS: macOS 11.6.1 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @…

### CASE-8976 · vite tree shaking invalid
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug In utils.ts export function never be imported. But the result of build contains methods that are not introduced. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.2.1 CPU: (8) x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz Memory: 200.75 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.10.0 - ~/.nvm/versions/node/v16.10.0/bin/node Yarn: 1.22.18 - ~/.nvm/versions/node/v16.10.0/bin/yarn npm: 7.24.0 - ~/.nvm/versions/node/v16.10.0/bin/npm Browsers: Chrome: 103.0.5060.134 Safari: 15.3 npmPackages: vite: ^3.0.3 => 3.0.3 ``` ### Used Package Manager…

### CASE-8983 · SSL Error when using '--https'
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: firefox, linux, vite, vue
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Create a new project via `npm create vite@user vite3https -- --template vue`. Inside the project run `npm install` and then `npm run dev -- --https`. Go to firefox at `[link] it shows `SSL_ERROR_NO_CYPHER_OVERLAP` ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.4 Manjaro Linux CPU: (2) x64 Intel(R) Core(TM) i5-5200U CPU @ 2.20GHz Memory: 1.96 GB / 4.79 GB Container: Yes Shell: 5.9 - /usr/bin/zsh Binaries: Node: 18.4.0 - /run/user/1000/fnm_multishells/1847726_1657787567665/bin/node Yarn: 1.22.19 - /usr/bin/yarn npm: 8.13.2 -…

### CASE-8985 · [ERROR] With statements cannot be used with the "esm" output format due to strict mode
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: wontfix
- **Excerpt**: ### Describe the bug npm run dev ‘start fail’ ![Snipaste_2022-07-04_14-12-51]([link]) run : vite build --mode build ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.0.1 CPU: (12) x64 Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz Memory: 91.90 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 12.14.0 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 8.3.1 - /usr/local/bin/npm Browsers: Chrome: 103.0.5060.53 Safari: 15.1 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8986 · can't reload the source in the public
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, firefox, safari, macos
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug the static server is wrong: dev server can't find the file in public, and return the index.html: <img width="1226" alt="image" src="[link]> <img width="1200" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.4 CPU: (8) x64 Apple M1 Memory: 55.07 MB / 16.00 GB Shell: 5.8.1 - /bin/zsh Binaries: Node: 14.15.1 - ~/.nvm/versions/node/v14.15.1/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v14.15.1/bin/yarn npm: 6.14.8 - ~/.nvm/versions/node/v14.15.1/bin/npm Browsers: Chrome: 103.0.5060.53 Edge: 103.0.1264.44 Firefox: 102.0 Safari:…

### CASE-8999 · plugin-legacy doesn't work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome58, chrome84, safari, macos, vite, react
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug I set ` build: {polyfillModulePreload: true,target: 'chrome58'}` in vite.config.ts, but `TypeError: a.replaceAll is not a function` throw at chrome84. <img width="577" alt="image" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (8) arm64 Apple M1 Pro Memory: 111.06 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.14.0 - /usr/local/bin/node Yarn: 1.22.17 - /usr/local/bin/yarn npm: 8.3.1 - /usr/local/bin/npm Browsers: Safari: 15.2 npmPackages: @user/plugin-react-refresh: ^1.3.1 => 1.3.3 vite: ^2.9.0 => 2.9.6 ``` ### Used…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8929 · Breakpoints lost in JS files with HRM
- **Principles**: P-A1, P-A4, P-G3 · **Env**: linux, vite
- **Signals**: 👍0 💬4 · closed · labels: feat: hmr/feat: sourcemap
- **Excerpt**: ### Describe the bug Hi! Trying vite with HRM I found that by adding a breakpoint (in the browser inspector) on a js file and then changing something in that file, the breakpoint is lost. This doesn't happen with JSX files. To try this I added a stackblitz where there is a counter.js file. Add a breakpoint on the js file and then modify something on it, the breakpoint will vanish. Thanks. ### Reproduction [link] ### Steps to reproduce Add a breakpoint to the counter.js file and then modify it. ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU…

### CASE-8943 · Import of 'react-responsive-spritesheet' behaves differently from dev to prod builds
- **Principles**: P-A1, P-A4, P-G3 · **Env**: react, vite
- **Signals**: 👍1 💬4 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug Importing [react-responsive-spritesheet]([link]) and running `$ vite` results in the module's default being directly imported, resulting in the following: ```js > import x from 'react-responsive-spritesheet'; > console.log(x); < function foo(bar) ``` But when running `$ vite build`, the bundled code acts like this: ```js > import x from 'react-responsive-spritesheet'; > console.log(x); < { default: foo(bar) , __esModule: true } ``` This error seems to be exactly the same result as [link] tool][ref], which was supposed to be fixed with vite 3, but I'm running vite 4 and…

### CASE-8963 · On build index.html the compiler dosen't add the .js and .css properly.
- **Principles**: P-A1, P-A4, P-G3 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug On npm run build the output index.html dosen't properly "import" the .js and .css files. What happens: ``` <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <link rel="icon" href="./favicon.ico" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>xxx</title> **<script type="module" crossorigin src="/assets/index.f7559d16.js"></script> <link rel="stylesheet" href="/assets/index.c5257e97.css">** </head> <body> <div id="app"></div> </body> </html> ``` What should happen: ``` <!DOCTYPE html> <html lang="en"> <head> <meta…

### CASE-8987 · Missing exports within build
- **Principles**: P-A1, P-A4, P-G3 · **Env**: vite, react, mobile
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I'm running into an odd issue with a dependency when building with Vite. Here's a simple component using `react-responsive`: ```jsx import React from 'react'; import { useMediaQuery } from 'react-responsive'; const Component = () => { const isMobile = useMediaQuery({ query: '(max-width: 991px)' }); if (isMobile) { return <span>Mobile view</span>; } return <span>PC View</span>; }; export default Component; ``` After building with Vite (`vite build`) and visiting my website, it'll return me an error: ``` TypeError: reactResponsive.exports.useMediaQuery is not a function ```…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8930 · vite build can't resolve monorepo SCSS module hoisted by yarn
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In the monorepo I am working on ([link]), `vite build` cannot find an imported SCSS file for a package because its module was hoisted by yarn. Within a file /package/core/src/styles/styles.scss, this line fails... ```scss @user '@user/styles/scss/config' with ( $css--font-face: false ); ``` This happens because the `@user/styles` package was hoisted to the root-level's node_modules directory. If I add this to my `.yarnrc.yml`, it successfully resolves its... ```yml nmHoistingLimits: workspaces ``` ### Reproduction [link] ### Steps to reproduce 1. `git clone [link] 2. `cd…

### CASE-8965 · css module :global
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: invalid/feat: css
- **Excerpt**: ### Describe the bug css module less :global no support index.module.less :global { .header { height: 50px; line-height: 50px; } } import styles from './index.module.less' <Header className={styles.header}> <ProBreadcrumb /> </Header> ### Reproduction [link] ### System Info ```shell [link] branch: feature-vite ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there…

### CASE-8980 · [v3.x] - `public/fonts/font.woff` in `index.html` contains `__VITE_PUBLIC_ASSET__`
- **Principles**: P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍4 💬4 · closed · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug _Working fine prior 3.0.0. Tested up to `3.0.1`_ Having a font in in `/public/fonts/font.woff` referencing in `index.html` makes build not working. The path is not changed, but contains `__VITE_PUBLIC_ASSET__hash__` 1) Create `/public/fonts/font.woff` (needs to be in `fonts` folder) 2) Create `index.html` with ``` @user { font-family: 'Open Sans'; font-style: normal; font-weight: 400; font-display: swap; src: url('/fonts/opensans-regular.woff2') format('woff2'), url('/fonts/opensans-regular.woff') format('woff'), url('/fonts/opensans-regular.ttf') format('truetype'); }…

### CASE-8981 · Unable to load font files referenced in a node_modules CSS file
- **Principles**: P-B1, P-B2, P-B3 · **Env**: windows
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug/regression
- **Excerpt**: ### Describe the bug From version v2.9.13 up to the latest, if you try to import @user/font the icon is not displayed. In build mode everything works fine, but in dev mode it doesn't. [link] If you try to open the url directly it doesn't work, if you remove the query string it works. I think it's his fault: [link] tool]/commit/e109d64 ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (12) x64 AMD Ryzen 5 2600 Six-Core Processor Memory: 7.58 GB / 15.93 GB Binaries: Node: 16.16.0 - C:\Program Files\nodejs\node.EXE Yarn: 3.2.1 - C:\Program…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-8931 · [SvelteKit] $env/static/public not properly tree shaken
- **Principles**: P-A5 · **Env**: svelte
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug (Ticket originally created at [link] ) Hello, I'm working on a project where there will be features flags that would be used in build because each of our customer will have a different build of the project. Because of (very) strict requirements, code that is behind a disabled feature flag should not be in the build given to the customer. I'm working on a proof of concept using $env/static/public for the feature flags, but I see that the code behind the feature flag actually is in the resulting build. My best guess is that the values of the features flag are replaced after…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8940 · Tailwind CSS wrong path in a monorepo
- **Principles**: P-F4 · **Env**: tailwind, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have an app with client and server folders. `tailwind.config.cjs`, `postcss.config.cjs` and `vite.config.ts` are located in `packages/client` directory, so does `index.css` that is imported in `App.tsx`. A Vite **_createServer_** is created in `packages/server/index.ts `in middleware mode (SSR) from [vitejs.dev]([link]) guide. ### The problem ``` [postcss] ENOENT: no such file or directory, open '/Users/roma/Sites/reelstories/packages/server/tailwind.config.cjs' ``` ### Vite `createServer` ``` > await createViteServer({ > root: path.resolve(__dirname, '../client'), >…

### CASE-8948 · ssrLoadModule uses 4+ GB of memory when loading 50+ MB files and causes crash due to OOM
- **Principles**: P-F4 · **Env**: unspecified
- **Signals**: 👍3 💬4 · closed · labels: p3-minor-bug/performance
- **Excerpt**: ### Describe the bug When using `ssrLoadModule` to load files, the memory required to load files appears to be very large. In my testing about 100x larger than the size of the file itself. This is problematic in particular when attempting to load large JSON files or text files (using `?raw`) for use on the server. On my computer the memory usage is so large that loading a 50 MB file causes node to crash due to running out of memory. On my older computer, which has 8 GB of RAM, it is even worse, with 30 MB and sometimes even 20 MB files causing a crash. (I originally found this issue when…

### CASE-8954 · DeprecationWarning: Implicit coercion to integer for exit code is deprecated
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug I posted this on the prisma github but I noticed when I kill the vite process this happens regardless of what libraries I am using. i am running nodemon for an express server that uses vite + ssr every time nodemon restarts the server, i get this warning: ```console (node:14591) [DEP0164] DeprecationWarning: Implicit coercion to integer for exit code is deprecated. at process.exit (node:internal/process/per_thread:200:7) at Object.onceWrapper (node:events:628:26) at process.emit (node:events:513:28) ``` looks like this is only happening in node 19+ due to this change:…

### CASE-8970 · Improve developer experience by changing message "failed to load module for ssr"
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬4 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Description As an indirect user of Vite by using Astro, I would like the `failed to load module for ssr` to express why the module failed to load. I believe there are multiple conditions that can trigger this - the one I experience **often** is a wrong path to a file. It's only through past experience of this error that I know, in my case at least, that this usually means the file was not found. ### Suggested solution [link] tool]/blob/3a586e4818ed0bd1d6974dc6718fe5ea44b72bd7/packages/vite/src/node/ssr/ssrModuleLoader.ts#L87-L93 Complete the `TODO` and display a more informative message…

### CASE-8982 · Vue is externalized no matter the `ssr.noExternal` value
- **Principles**: P-F4 · **Env**: ios, vue, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug I'm migrating a project from vite 2 to 3, and just facing a little issue with SSR externals. It vite 2, I was just using something like `noExternal: /./` to make sure nothing is externalised, which worked well. In Vite 3, it seems that `vue` and `@user/server-renderer` are not externalised (the generated output imports vue methods from the vue package). All others deps are bundled into the mjs output. I tried to set `ssr.noExternal` to true, but then I got various error like `Cannot bundle Node.js built-in "http" imported from "node_modules/axios/lib/adapters/http.js".…

### CASE-8988 · Component is missing template or render function
- **Principles**: P-F4 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hi! We are switching to Vite v3 in VitePress, but there is a blocker. We are not able to make it work without `legacy.buildSsrCjsExternalHeuristics` set to true. It is set here in Vite docs too: [link] tool]/blob/cd59ee430051ee313559d3fd45418c659b9146d1/docs/vite.config.ts#L8 Steps to reproduce: - Clone the repo, checkout `chore/vite-3` - Run `pnpm i && pnpm docs-build` Sorry that the provided repo is not minimal and the issue may not be with Vite itself, but any help will be appreciated. Thanks! ### Reproduction [link] ### System Info ```shell System: OS: Windows 10…

### CASE-8997 · Playground link in docs lead to 404
- **Principles**: P-F4 · **Env**: vite, vue, react
- **Signals**: 👍1 💬4 · closed · labels: documentation/p1-chore
- **Excerpt**: ### Describe the bug The playground links in Vite SSR docs lead to 404 pages because playground got moved to root. ssr-vue playground links to: [link] tool]/tree/main/packages/playground/ssr-vue but should link to: [link] tool]/tree/main/playground/ssr-vue react playground links to: [link] tool]/tree/main/packages/playground/ssr-react but should link to: [link] tool]/tree/main/playground/ssr-react ### Reproduction [link] ### System Info ```shell All systems ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8968 · vite3.1.1版本不支持插件"vite-plugin-theme": "0.8.6",导致界面报错，3.0.9版本还是兼容的。
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug vite3.1.1版本不兼容插件"vite-plugin-theme": "0.8.6",导致界面报错，3.0.9版本还是兼容的。 提示报错：Uncaught ReferenceError: __COLOR_PLUGIN_OUTPUT_FILE_NAME__ is not defined ### Reproduction vite3.1.1版本不兼容插件"vite-plugin-theme": "0.8.6",导致界面报错，3.0.9版本还是兼容的。 提示报错：Uncaught ReferenceError: __COLOR_PLUGIN_OUTPUT_FILE_NAME__ is not defined ### System Info ```shell vite3.1.1版本不兼容插件"vite-plugin-theme": "0.8.6",导致界面报错，3.0.9版本还是兼容的。 提示报错：Uncaught ReferenceError: __COLOR_PLUGIN_OUTPUT_FILE_NAME__ is not defined ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8994 · create-vite: (react-ts) cannot find modules or corresponding type declarations
- **Principles**: P-A1, P-A2, P-G1, P-F1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug The `react-ts` template causes multiple errors around missing modules or type declarations. ``` Cannot find module 'vite' or its corresponding type declarations. Cannot find module '@user/plugin-react' or its corresponding type declarations. ``` I initially tried this on Windows, using WSL and pnpm. I also have access to a Mac, so tried it on there with npm. Both encounter the same issue, so I doubt it is package manager or VSCode related. Additionally, I found this [Stack Overflow issue]([link]), so clearly a few thousand people have had a similar issue these last few…

