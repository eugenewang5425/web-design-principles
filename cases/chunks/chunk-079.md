# Case Chunk 079 — Round 79

> 100 anonymized cases · collected 2026-09-05 · environments kept, sources removed (aggregate sources: README end)
> Symptom → principle lookup: [BUG-INDEX.md](../BUG-INDEX.md) · principle explanations: [WITH-CASES](../../principles/WITH-CASES.md)

## media-cls — Media & CLS 媒体与布局位移 · principles: P-A3, P-H1

### CASE-8801 · CSS class do not pass to children in the production build
- **Principles**: P-A3, P-H1 · **Env**: vue
- **Signals**: 👍1 💬5 · closed · labels: bug: upstream/inconsistency
- **Excerpt**: ### Describe the bug 1. Create this structure parent component ```vue <script setup lang="ts"> import HelloWorld from './components/HelloWorld.vue' </script> <template> <HelloWorld class="parent-class" /> </template> <style scoped> .parent-class { background-color: red; } </style> ``` child component(`HelloWorld.vue`) ```vue <template> <template v-if="true"> <div v-if="true">Child</div> </template> </template> <style scoped></style> ``` 2. During the dev server this code works as expected ![image]([link]) 3. But in production, we have no class ![image]([link]) If we remove the template tag or…

### CASE-8802 · ”document“ should not appear in the Worker.
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: p2-edge-case/feat: web workers
- **Excerpt**: ### Describe the bug I use Comlink to work with Worker. It's seems like: ![image]([link]) And to use: ```ts const worker = new Worker(new URL("./Decoder", import.meta.url), { type: "module" }); const decode = Comlink.wrap<typeof AVIFDecode>(worker); ``` Then, everything is fine with dev, but after building: ![image]([link]) ### Reproduction [link] ### Used Package Manager yarn ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check…

### CASE-8805 · Getting `Unexpected ";"` error when running yarn start
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I am trying to use `@user/mui-org.material-ui.tooltip` but I get the following error when calling `yarn dev` <img width="1680" alt="Screen Shot 2022-03-22 at 15 54 49" src="[link]> ### Reproduction [link] ### System Info ```shell System: OS: macOS 10.15.7 CPU: (8) x64 Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz Memory: 35.06 MB / 16.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 16.13.0 - ~/.nvm/versions/node/v16.13.0/bin/node Yarn: 1.22.15 - ~/.yarn/bin/yarn npm: 8.1.0 - ~/.nvm/versions/node/v16.13.0/bin/npm Watchman: 2022.02.14.00 - /usr/local/bin/watchman Browsers: Brave…

### CASE-8806 · Cannot find module '../dist/node/cli'
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Hey, guys! The Vite is requiring a file unexists. ![image]([link]) ### Reproduction Error: Cannot find module '../dist/node/cli' ### System Info ```shell System: OS: Linux 4.19 Ubuntu 20.04.3 LTS (Focal Fossa) CPU: (8) x64 Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz Memory: 2.76 GB / 3.70 GB Container: Yes Shell: 5.0.17 - /bin/bash Binaries: Node: 17.7.2 - ~/.nvm/versions/node/v17.7.2/bin/node npm: 8.5.5 - ~/.nvm/versions/node/v17.7.2/bin/npm npmPackages: vite: ^2.8.0 => 2.8.6 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of…

### CASE-8807 · vite build fails with withDefaults and props extending from another interface
- **Principles**: P-A3, P-H1 · **Env**: linux, ubuntu, vite
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug On this [line]([link]) if I use `Props` interface then it works fine. However, If I use `SelectProps` which extends from `Props` interface then the build fails with the below error: ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Linux 5.13 Ubuntu 21.10 21.10 (Impish Indri) CPU: (6) x64 Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz Memory: 1.36 GB / 7.71 GB Container: Yes Shell: 5.1.8 - /bin/bash Binaries: Node: 16.14.0 - ~/.nvm/versions/node/v16.14.0/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.14.0/bin/yarn npm: 8.3.1 -…

### CASE-8808 · Executing the build command through mode cannot resolve the path of the federation
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In a project using federation, it works fine if you use the yarn build command to package, but if you use yarn build --mode test, federation cannot be resolved ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 10.15.7 CPU: (8) x64 Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz Memory: 731.51 MB / 16.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 16.13.1 - ~/.nvm/versions/node/v16.13.1/bin/node Yarn: 1.22.17 - ~/.nvm/versions/node/v16.13.1/bin/yarn npm: 8.1.2 - ~/.nvm/versions/node/v16.13.1/bin/npm Watchman: 4.9.0 - /usr/local/bin/watchman…

### CASE-8832 · SSR: ReferenceError: module is not defined
- **Principles**: P-A3, P-H1, P-F4 · **Env**: ios, react, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I use a dependency in the ssr-react demo, for example: ![image]([link]) I get the error ``` ReferenceError: module is not defined at /Users/luhc228/workspace/demo/vite-ssr-react-demo/node_modules/axios/index.js?v=0bdbe0d4:1:6 at instantiateModule (/Users/luhc228/workspace/demo/vite-ssr-react-demo/node_modules/vite/dist/node/chunks/dep-85dbaaa7.js:66541:15) ReferenceError: module is not defined at /Users/luhc228/workspace/demo/vite-ssr-react-demo/node_modules/axios/index.js?v=0bdbe0d4:1:6 at instantiateModule…

### CASE-8833 · Nodejs 17 breaks Vite proxy
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Using nodejs 17 and the latest `pnpm create vite` and setting the proxy setting in `vite.config.ts`, this throws a `http proxy error` <img width="979" alt="Screenshot 2021-10-20 102805" src="[link]> ### Reproduction Install Nodejs 17 Run `npm init vite@user` Setup the proxy setting in `vite.config.ts` Try and make a HTTP request ### System Info ```shell Windows 11 Nodejs 17 Vite 2.6.4 React 17.0.0 ``` ### Used Package Manager pnpm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the…

### CASE-8835 · Error in jest environment
- **Principles**: P-A3, P-H1 · **Env**: typescript, vite, react
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I ran jest in a typescript environment, and the result reported: The'import.meta' meta-property is only allowed when the'--module' option is'es2020','esnext', or'system'. ![image]([link]) ### Reproduction I ran jest in a typescript environment, and the result reported: The'import.meta' meta-property is only allowed when the'--module' option is'es2020','esnext', or'system'. ![image]([link]) ### System Info ```shell vite，react ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md)…

### CASE-8837 · @user/plugin-vue does not allow absolute asset URLs to be preserved as-is
- **Principles**: P-A3, P-H1 · **Env**: vue, vite, webpack
- **Signals**: 👍2 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I've been experimenting with using Vite with WordPress, in place of an existing Webpack config. I've mostly gotten it working, but I can't find an elegant way to handle absolute paths when doing things like `<img src="/my/absolute/path.png">` in my (Vue 3) SFCs. For example, if I do `<img src="/wp-content/themes/ff-bulma/assets/images/close-button.png" alt="Close">`, I want it to request that absolute path as-is, instead of trying to resolve it as a module, because the backend is already serving the image at that path. When doing a `vite build`, Rollup sees those paths as…

### CASE-8839 · 预构建无法处理一些 ts 的 type 引用
- **Principles**: P-A3, P-H1 · **Env**: macos
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug 间接引用一些 npm 包，如果包里有一些无效的 ts type 引用，预构建会失败。 ![image]([link]) ### Reproduction ![image]([link]) ![image]([link]) b 这个包提供 function a，同时在 a.js 会引用 b.d.ts 里面的一个 interface test 。b.js 里面没有 test 相关变量。 此时直接引用 b/es/a/a.js 的方法，预构建也不会出问题。但是如果存在一个包 a, ![image]([link]) ![image]([link]) ![image]([link]) 对 b 的 a.js 进行了引用，我们再直接调用 a 的话， ![image]([link]) 预构建就会失败报 type 没有 export 的 error。 感觉像是 esbuild 依赖判断处理有问题。 ### System Info ```shell System: OS: macOS 10.15.7 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 50.30 MB / 32.00 GB Shell: 5.7.1 Binaries: Node: 14.17.0 Yarn:…

### CASE-8840 · Why ts error in .vue file can not be displayed in Vite HMR overlay
- **Principles**: P-A3, P-H1 · **Env**: vue, vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug My IDE is Webstorm, I can get ts error in Typescript terminal, but it can not be dispalyed in Vite HMR overlay ```ts export default defineComponent({ name: 'App', components: { HelloWorld }, setup() { const a = ref<string>(22223); a.value = 22212; return {a}; } }); ``` ![image]([link]) And Vite HMR overlay also doesn't show the error ![image]([link]) is is possible to show the error on broswer just like Vue CLI? ![image]([link]) ### Reproduction ``` export default defineComponent({ name: 'App', components: { HelloWorld }, setup() { const a = ref<string>(22223); a.value =…

### CASE-8842 · vite.config 配置 resolve.alias 解析编译不报错
- **Principles**: P-A3, P-H1 · **Env**: windows, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug vite.config 配置 resolve.alias 使用错误路径时解析编译不报错 ### Reproduction 1. 使用 vite cli 工具创建一个项目。 2. 在 vite.config.js 添加 ```javascript import { resolve } from 'path' export default defineConfig({ // ...省略 resolve: { alias: { '@': resolve(__dirname, 'src') } } }) ``` 3. 修改依赖地址 ``` // 原始, 例如：当去除 `.vue` 后缀时终端和浏览器提示错误信息。 import HelloWorld from "../components/HelloWorld.vue"; // 修改，例如：当去除 `.vue` 后缀时终端和浏览器无提示错误信息。 import HelloWorld from "@/components/HelloWorld.vue"; ``` 有信息效果 ![image]([link]) 无信息效果 ![image]([link]) ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (8) x64…

### CASE-8843 · Can not dynamically import a raw file in production mode.
- **Principles**: P-A3, P-H1 · **Env**: windows
- **Signals**: 👍5 💬5 · closed · labels: duplicate/pending triage
- **Excerpt**: ### Describe the bug Can not dynamically import a raw file in production mode. But it can work in dev mode. Main code: ![image]([link]) Run build & server, it happen: ![image]([link]) ### Reproduction [link] Reproduction: yarn npm run build npm run serve Click load file button, will throw error in console. ### System Info ```shell System: OS: Windows 10 10.0.18362 CPU: (6) x64 Intel(R) Core(TM) i5-9400 CPU @ 2.90GHz Memory: 6.24 GB / 15.86 GB Binaries: Node: 14.15.1 - D:\Software\nodejs\node.EXE Yarn: 1.22.10 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.8 - D:\Software\nodejs\npm.CMD Browsers:…

### CASE-8847 · [vite:build-html] EISDIR: illegal operation on a directory, read
- **Principles**: P-A3, P-H1 · **Env**: opera, vite
- **Signals**: 👍0 💬5 · closed · labels: p2-nice-to-have
- **Excerpt**: ### Describe the bug Build process fails if html contains an image tag with a blank src attribute: ```html <img src="" /> ``` Results in the following npm console error: ```[vite:build-html] EISDIR: illegal operation on a directory, read file: {PROJECT_ROOT_DIRECTORY}/index.html error during build: Error: EISDIR: illegal operation on a directory, read npm ERR! code ELIFECYCLE npm ERR! errno 1 npm ERR! [email] build: `vite build` npm ERR! Exit status 1 npm ERR! npm ERR! Failed at the [email] build script. npm ERR! This is probably not a problem with npm. There is likely additional logging…

### CASE-8851 · `vite build --watch` dont handle static resources
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug Use `vite build --watch`, static resources will not be handle when the file changes, such as svg file <!-- A clear and concise description of what the bug is. --> <!-- If you intend to submit a PR for this issue, tell us in the description. Thanks! --> ### Reproduction 1. fork `[link] 2. run vite build --watch ![image]([link]) 3. change a file,dispatch watch ![image]([link]) ![image]([link]) <!-- Please provide…

### CASE-8853 · asset filename hash options does not work on image
- **Principles**: P-A3, P-H1 · **Env**: vue, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> <!-- !!! IMPORTANT !!! Please do not ignore this template. If you do, your issue will be closed immediately. --> ### Describe the bug code ``` <img alt="Vue logo" src="../../assets/logo.png" /> ``` vite.config.js ``` output:{ entryFileNames: "[name]-HASH-[hash].js", assetFileNames:"[name]-HASH-[hash][extname]", chunkFileNames:"[name]-HASH-[hash].js" }, ``` npm run build ``` logo.03d6d6da.png vendor-HASH-74164848.js ``` Another asset files have `-HASH-` chunk, but logo.png does not `-HASH-` chunk. <!-- A clear and concise description of what…

### CASE-8854 · Issue with generic syntax in .tsx
- **Principles**: P-A3, P-H1 · **Env**: react, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug This is a common hack to use a comma to declare generics without default or extends in TSX file. It's seems that some part of the build chain (in dev mode) drop the comma, making the file invalid. ![image]([link]) ## Reproduction [link] Equivalent to `yarn create @user/app --template react-ts` + update `main.tsx` to: ```tsx const App = <T,>(props: {value: T}) => { return <div>Hello {typeof props.value}</div> } ReactDOM.render( <React.StrictMode> <App value="string" /> </React.StrictMode>, document.getElementById('root') ) ``` ## System Info - `vite` version: 2.0.4 (esbuild…

### CASE-8855 · RangeError: Maximum call stack error only in vite2.
- **Principles**: P-A3, P-H1 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [ ] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug I switched my project from the vue-cli-service to vite2 and now i get the error(see images), it appears when the "notfound" path is beeing triggered. I don't really know how to reproduce it or why it is happening with vite only. My [router]([link]) and…

### CASE-8856 · 404 Image assets in `dev`
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug I don't think this is a bug, but probably a fundamental misunderstanding I'm having with scaffolding a Vite project, and I'm not sure how to resolve. I have a simple app that serves CKEditor4. When running…

### CASE-8860 · Sourcemap error when importing firebase/auth
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍3 💬5 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> ## Describe the bug When importing `firebase/auth`, receiving errors with ESM compatible library. Have no issues with other parts of the library, `firebase/app`, `firebase/firestore`, etc. `Error: ENOENT: no such file or directory, stat '/Users/server/Projects/firebase-example/node_modules/@user/auth/dist/` It seems all the correct files are in place. <img width="942" alt="Screen Shot 2020-11-06 at 11…

### CASE-8866 · Improve clarity around VITE_* exposure to client
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: documentation
- **Excerpt**: ### Documentation is - [x] Missing - [ ] Outdated - [x] Confusing - [ ] Not sure? ### Explain in Detail Documentation around the exposure risk when using `VITE_*` is disjointed and obscured behind inconsistent terminology, especially considering the potential impact of incorrect Further, the problem is made worse by the newly included Scrimba tutorial, which briefly reinforces the idea of freely using secrets with `VITE_*` (1:15 mark in the video), and does not cover the precautions or steps necessary to protect secrets in production. ### Your Suggestion for Changes Docs should be more…

### CASE-8869 · vite 7.2.0 version run 'vite build' does not generate a directory named dist, 7.1.12 version is normal
- **Principles**: P-A3, P-H1 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · closed
- **Excerpt**: ### Describe the bug OS Windows 11, vite 7.2.0 version run 'vite build' does not generate a directory named dist, 7.1.12 version is normal <img width="1699" height="546" alt="Image" src="[link] /> ### Reproduction npm run build ### Steps to reproduce run 'npm run build' ### System Info ```shell windows 11 26220.7051 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [x] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [x] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [x] Read the [docs]([link]). - [x] Check that…

### CASE-8877 · Using worker in Vite prompts that document is not defined
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug vite: 6.2.2 ![Image]([link]) ![Image]([link]) ![Image]([link]) ![Image]([link]) ![Image]([link]) ### Reproduction [link] tool]&issueNumber=12611 ### Steps to reproduce _No response_ ### System Info ```shell Chome ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [x] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [x] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [x] Read the [docs]([link]). - [x] Check that there isn't [already an issue]([link] tool]/issues) that reports the same bug to…

### CASE-8881 · Failed to resolve the relative background image url in css when there're `(`/`)` in it's parent paths.
- **Principles**: P-A3, P-H1 · **Env**: linux, vue, vite
- **Signals**: 👍0 💬4 · open · labels: feat: css/has workaround/p3-downstream-blocker/inconsistency
- **Excerpt**: ### Describe the bug It seems to fail to resolve the relative background image url in css when a component is located in a folder containing brackets. A workaround is to wrap the `url` with double quotes: ```css .foo { background: url(./javascript.svg); /* before */ background: url("./javascript.svg"); /* after */ } ``` This works in build. Migrated from [link] tool]-plugin-vue[ref] ### Reproduction [link])%2Findex.css,vite.config.js&terminal=dev ### Steps to reproduce _No response_ ### System Info ```shell Stackblitz System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU…

### CASE-8891 · Incorrect line numbers for inline scripts
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When you have a simple inline script with a `<script>` tag, line numbers reported in the console are wrong. This makes debugging harder as the line numbers don't match up. ### Reproduction n/a ### Steps to reproduce Put this in an `index.html` file: ```html <!doctype html> <h1>Line number test</h1> <script> x() </script> ``` Then run `vite` and open the localhost URL in a browser. It will say there's an error on line 6 but it should say there's an error on line 4: ![image]([link]) Open the file directly in the browser instead with a `file://` URL and it works as expected:…

### CASE-8894 · Unable to build the app
- **Principles**: P-A3, P-H1 · **Env**: vite, typescript
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug We were using CRA for our App. Now I am trying to migrate the project from CRA to vite. went through multiple blogs to migrate to vite. After the migration I am getting the below Error. tried multiple things in vite.config.ts but still getting the same error. Thanks in advance for any help <img width="1728" alt="Screenshot 2024-06-13 at 11 09 47 PM" src="[link] tool]/assets/103481710/c608347d-0d6b-40b1-9620-af522a587bce"> ### Reproduction na ### Steps to reproduce the node modules are generating js files which are having typescripts.Attached the SS for the same ### System…

### CASE-8895 · new URL ,The packing volume increases 打包体积增大
- **Principles**: P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ``` function getImageUrl(name) { return new URL(`./assets/imgs/${name}`, import.meta.url).href; } getImageUrl('home/aaa.jpg'); ``` It seems to pack all the image addresses under imgs. 似乎会把imgs下的所有图片地址都打包 ![image]([link] tool]/assets/56909676/ec164a3f-c551-4fc5-8d6c-9a14a690b702) ### Reproduction [link] ### Steps to reproduce npm run build ### System Info ```shell [link] ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link]…

### CASE-8899 · malformed_package_json runs tests while vite is being run in regular dev mode causing fatal error.
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug ![image]([link] tool]/assets/7501201/5de24bd8-57b4-4b58-bba9-c5e55c5a5e3d) ### Reproduction [link] ### Steps to reproduce vite ./project_dir --host ### System Info ```shell win10x64 32Gb 14600kf ``` ### Used Package Manager npm ### Logs VITE v5.2.6 ready in 1330 ms ➜ Local: [link] ➜ Network: [link] ➜ press h + enter to show help Error: Failed to scan for dependencies from entries: C:/Users/pinke/p/menu-front/project/index.html ✘ [ERROR] Expected string in JSON but found end of file node_modules/resolve/test/resolver/malformed_package_json/package.json:2:0: 2 │ ╵ ^ at…

### CASE-8900 · Vite adds spaces around commas in image url within srcset (HTML files)
- **Principles**: P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: feat: html/p3-minor-bug
- **Excerpt**: ### Describe the bug Vite appears to add spaces around commas when a comma is present in a `srcset` property. This only occurs in HTML files. If my index.html file contains ```html <img srcset="[link] 800w" src="[link] /> ``` Vite outputs ```html <img srcset="[link] , width=800 800w" src="[link]> ``` Take note of the space added to the image url around the comma in the query parameter. `?im=Resize , width=800` The browser reads `width=800` as the entire image url and attempts to request `/width=800` which is nonexistent. ![Screenshot 2024-03-02 004053]([link]…

## browser-quirk — Browser / Platform Quirk 浏览器与平台差异 · principles: P-G1, P-G2, P-G3

### CASE-8803 · Error when trying to run dev server with default React TS template
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, windows, react, vite, typescript
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Ran ``` yarn create vite ``` Picked React and typescript, also happens with react js ``` cd test yarn yarn dev ``` Throws errors Doesn't happen with vanilla js nor typescript, only react ### Reproduction yarn create vite & cd test & yarn & yarn dev ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (16) x64 AMD Ryzen 7 4800H with Radeon Graphics Memory: 10.24 GB / 15.42 GB Binaries: Node: 17.9.0 - D:\tools\nvm\nodejs\node.EXE Yarn: 1.22.15 - D:\tools\nvm\nodejs\yarn.CMD npm: 8.5.5 - D:\tools\nvm\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0),…

### CASE-8804 · Set WS Proxy not working
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, edge, windows, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug 最近做了个案例项目，需要用到proxy代理ws的API服务，但设置后，运行项目会闪退（dev-server exit），浏览器开发工具中的网络会持续发起__vite_ping一个请求 如下： vite.config.ts ` proxy: { "^/swapi/*": { target: "[link] changeOrigin: true, ws: true, secure: false, }, } ` Terminal 运行截图： ![image]([link]) chrome开发者工具网络请求： ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: Windows 10 10.0.22000 CPU: (16) x64 Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz Memory: 16.86 GB / 31.92 GB Binaries: Node: 16.11.1 - ~\AppData\Roaming\nvm\v16.11.1\node.EXE Yarn: 1.22.17 - ~\AppData\Roaming\nvm\v16.11.1\yarn.CMD Browsers: Edge:…

### CASE-8813 · vite 开启https后 在移动端浏览器 页面会一直刷新
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, ios14, windows, vite, iphone
- **Signals**: 👍0 💬5 · closed · labels: duplicate
- **Excerpt**: ### Describe the bug vite 开启https后 在ios14.7.1浏览器打开 页面会一直刷新 重现步骤： yarn create vite yarn install vite.config.js 添加server:{https:true} 开启https yarn dev --host 在手机浏览器打开项目地址 [link] ### Reproduction 这个问题不好在线重现 建议用yarn直接新建一个项目来复现 ### System Info ```shell System: iPhone11 ,ios14.7.1 OS: Windows 10 10.0.19044 CPU: (12) x64 11th Gen Intel(R) Core(TM) i5-11400F @ 2.60GHz Memory: 6.37 GB / 15.80 GB Binaries: Node: 14.17.5 - D:\Program Files\nodejs\node.EXE Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD npm: 6.14.14 - D:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium…

### CASE-8816 · Issue with Dependency Pre-Bundling produces bad output with 'react-moment' and other dependencies
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, react, vite
- **Signals**: 👍1 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I'm working on migrating a decently sized project to Vite from another build tool and am running into issues with dependency pre bundling not producing valid output, see below. I could not find the issue template, so I hope this is sufficient ### Stack Blitz minimal reproduction ([link]([link])) you can see the error in browser's console, disabling source maps makes the code more readable in this case ### Exception in chrome console: ``` react-moment.js?v=15952a87:411 Uncaught TypeError: Cannot set properties of undefined (setting 'format') at F…

### CASE-8818 · TailwindCss not running in React-ts
- **Principles**: P-G1, P-G2, P-G3 · **Env**: edge, chromium, windows, tailwind, react, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction/feat: css
- **Excerpt**: ### Describe the bug Tailwindcss is not runnign in react ts ### Reproduction install tailwindcss v3 with autoprefixed and postcss in react-ts plugin using vitejs ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz Memory: 2.60 GB / 15.74 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE npm: 8.1.0 - C:\Program Files\nodejs\npm.CMD Browsers: Edge: Spartan (44.19041.1266.0), Chromium (96.0.1054.62) Internet Explorer: 11.0.19041.1202 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow…

### CASE-8819 · Invalid left-hand side in assignment
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, vite
- **Signals**: 👍2 💬5 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug I'm getting an error this error: `Failed to load source map for /node_modules/.vite/@user.js?v=2c960083` in the chrome console `Uncaught SyntaxError: Invalid left-hand side in assignment` The chrome source tab showing error in this part: `var createContext = (ctx) => { ctx = Object.assign({ cwd: process.cwd(), env: "development" }, ctx); if (!ctx.env) { "development" = "development"; // <---- error } return ctx; };` ### Reproduction [link] ### System Info ```shell OS: macOS 11.1 CPU: (12) x64 Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz Memory: 1.36 GB / 16.00 GB Shell: 5.8 -…

### CASE-8820 · Using @user/plugin-legacy within Astro project: Build fails with Error
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, safari, macos
- **Signals**: 👍0 💬5 · closed · labels: pending triage/plugin: legacy/p3-downstream-blocker
- **Excerpt**: ### Describe the bug I am using the `@user/plugin-legacy` package within an Astro project. When building the production bundle the build fails with the following error message shown below. Tried Node versions 17, 16 and 14. Same error. ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (10) arm64 Apple M1 Max Memory: 2.32 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 17.2.0 - ~/.nvm/versions/node/v17.2.0/bin/node npm: 8.1.4 - ~/.nvm/versions/node/v17.2.0/bin/npm Browsers: Chrome: 96.0.4664.110 Safari: 15.2 npmPackages: @user/plugin-legacy: ^1.6.4 => 1.6.4 ```…

### CASE-8821 · 设置环境变量后，这个环境变量并没有出现在import.meta.env列表中
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vue, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) ![image]([link]) ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.1 CPU: (10) arm64 Apple M1 Pro Memory: 1.24 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.12.0 - ~/.nvm/versions/node/v16.12.0/bin/node Yarn: 1.22.17 - /opt/homebrew/bin/yarn npm: 8.1.0 - ~/.nvm/versions/node/v16.12.0/bin/npm Browsers: Chrome: 96.0.4664.110 Safari: 15.2 npmPackages: @user/plugin-vue: ^2.0.0 => 2.0.1 vite: ^2.7.2 => 2.7.10 ``` ### Used Package Manager yarn ### Logs _No response_…

### CASE-8822 · Build failed
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vue
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug I installed according to the example on the official website, and there was an error when packaging. ### Reproduction clone this repo `[link] run ``` npm install npm run build ``` ### System Info ```shell npx: installed 1 in 2.08s System: OS: macOS 12.1 CPU: (8) x64 Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz Memory: 772.09 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 12.18.0 - ~/.nvm/versions/node/v12.18.0/bin/node npm: 6.14.4 - ~/.nvm/versions/node/v12.18.0/bin/npm Browsers: Chrome: 96.0.4664.110 Firefox: 95.0 Safari: 15.2 npmPackages: @user/plugin-vue: ^2.0.0 =>…

### CASE-8827 · Some browsers run errors: 'globalThis' is not defined
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 51, windows, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug 最新版本 在浙政钉内置浏览器运行报错 'globalThis' is not defined 使用@user/plugin-legacy，依旧报同样的错误 ``` legacy({ targets: ['chrome 51'], }), ``` 外部版本比较低的浏览器可以显示，但有报错 ``` Uncaught SyntaxError: Unexpected token import (index):11 vite: loading legacy build because dynamic import is unsupported, syntax error above should be ignored ``` ### Reproduction Since 2.6.0-beta.3 [[link]]([link]) ### System Info ```shell System: OS: Windows 10 10.0.19043 CPU: (4) x64 Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz Memory: 4.01 GB / 15.91 GB Binaries: Node: 16.13.0 - C:\Program Files\nodejs\node.EXE Yarn: 1.22.15…

### CASE-8828 · `server.origin` breaks HMR (tailwind JIT) - regression
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, tailwind, vite
- **Signals**: 👍0 💬5 · closed · labels: feat: hmr/p3-minor-bug/regression
- **Excerpt**: ### Describe the bug Reported and fixed in: [ref] Setting the server.origin property in vite.config.ts breaks tailwind JIT hmr. Fixing the vite version to 2.5.10 fixes the issue (server.origin didn't exist so that makes sense). Reproduction steps in the repro README: [link] ### Reproduction [link] ### System Info ```shell System: OS: macOS 12.0.1 CPU: (10) arm64 Apple M1 Max Memory: 2.43 GB / 32.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.18.1 - /opt/homebrew/bin/node npm: 6.14.15 - /opt/homebrew/bin/npm Browsers: Chrome: 96.0.4664.55 Firefox: 93.0 Firefox Developer Edition: 95.0 Safari:…

### CASE-8829 · Node internal modules cannot be required within dependencies
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, vite, react, typescript
- **Signals**: 👍2 💬5 · closed · labels: pending triage/has workaround
- **Excerpt**: ### Describe the bug I'm trying to build an electron app with vite + react + typescript. Within electron, it's possible to require Node internals like fs or crypto. Within our own code, we got this working by using the `vite-plugin-commonjs-externals`, however, within dependencies from our package.json: - in dev, this exception is thrown ``` Module "crypto" has been externalized for browser compatibility and cannot be accessed in client code ``` - in prod, the module resolves to an empty object In some places, i've read about the `rollup-plugin-node-builtins` which i've also tried but didn't…

### CASE-8830 · vite dynamic import not join config.base
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, windows, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug dynamic import not join config.base vite.config.base = 'https//cdn.xxxx.xxxx' code: `import.meta.glob('./**/*.js').then(md => {*****})` bundled： import('./**/*.js') expected: import('https//cdn.xxxx.xxxx'/**/*.js') ### Reproduction de environment everything is ok after bundled chrome warnnind can't load './**/**.js', the path not join vite.config.base ### System Info ```shell System: OS: Windows 10 10.0.19042 CPU: (16) x64 AMD Ryzen 7 4800H with Radeon Graphics Memory: 3.80 GB / 15.87 GB Binaries: Node: 12.17.0 - D:\application\nodejs\node.EXE Yarn: 1.22.10 -…

### CASE-8831 · Vite not working in macOS Monterey
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, firefox, safari, macos, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: has workaround
- **Excerpt**: ### Describe the bug Following the basic instructions does not work. 1. `yarn create vite my-vite-app --template vue-ts` 1. `cd my-vite-app` 1. `yarn && yarn serve` 1. To `localhost:5000` ![2021-11-16 at 16:55]([link]) ### Reproduction N/A ### System Info ```shell System: OS: macOS 12.0.1 CPU: (8) arm64 Apple M1 Memory: 1.42 GB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 16.9.1 - /usr/local/bin/node Yarn: 1.22.15 - /opt/homebrew/bin/yarn npm: 7.21.1 - /usr/local/bin/npm Browsers: Chrome: 95.0.4638.69 Firefox: 94.0.1 Safari: 15.1 npmPackages: @user/plugin-vue: ^1.9.3 => 1.9.4 vite: ^2.6.4…

### CASE-8836 · Importing Asset as URL strips the host in the `base` option
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, macos
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I'd like to change the full path of JS-imported asset URLs and CSS url() references. I find the option of 「base」in official doc. But it seems not useful. Are there any way to set the full path of static resource reference ? ### Reproduction ![image]([link]) setting the option of「base」, but not work. Result as follow: ![image]([link]) ### System Info ```shell System: OS: macOS 10.15.7 CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz Memory: 122.08 MB / 32.00 GB Shell: 5.7.1 - /bin/zsh Binaries: Node: 14.17.0 Yarn: 1.22.10 npm: 6.14.13 Browsers: Chrome: 93.0.4577.82…

### CASE-8841 · Dependencies are not resolved correctly when start vite server in child packages in monorepo
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, vite
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug The `source file` request is broke when debugging. Can it be scanned recursively when it is not found in the current `node_modules` directory？ ### Reproduction 1. using `chrome devtools Sources CallStack` to debug function' 2. click `jump to the next function call`. It will jump to `node_modules/.vite/xxx` (whose source file is provide by `../../node_modules/xxx` ). 3. Vite server didn't correctly resolve dependcies which cause request file content return `404` and can not continue debug. ### System Info ```shell vite: 2.4.2 ``` ### Used Package Manager yarn ### Logs _No…

### CASE-8844 · plugin-legacy SystemJS [link]
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome 53, chrome 91, vite
- **Signals**: 👍0 💬5 · closed · labels: plugin: legacy/p2-edge-case
- **Excerpt**: ### Describe the bug Hi Im trying to compile app for old browsers (there are some certain versions which I need to support, for eg Chrome 53) And I got following error in Chrome 53 ``` polyfills-legacy.c6e6dd68.js:1 Uncaught (in promise) Error: assets/index-legacy.d57e0ebc.js, [link] (SystemJS [link]) at Error (native) at [link] at f.O.resolve ([link]) at [link] ``` The same code does work well in Chrome 91 ### Reproduction package.json ``` { "name": "App", "version": "1.0.1", "scripts": { "dev": "vite", "build": "vite build", "serve": "vite preview" }, "dependencies": { "@user/qr-esm":…

### CASE-8846 · plugin-react-refresh does not work
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, react, vite
- **Signals**: 👍7 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I found when using `plugin-react-refresh` that I had to add an unrelated component for the hot update to work, see the video [link] ### Reproduction [vite-test.zip]([link] tool]/files/6767665/vite-test.zip) ### System Info ```shell System: OS: macOS 11.4 CPU: (8) arm64 Apple M1 Memory: 4.82 GB / 16.00 GB Shell: 3.3.0 - /opt/homebrew/bin/fish Binaries: Node: 16.4.1 - /opt/homebrew/bin/node Yarn: 1.22.10 - /opt/homebrew/bin/yarn npm: 7.18.1 - /opt/homebrew/bin/npm Browsers: Chrome: 91.0.4472.114 Safari: 14.1.1 ``` ### Used Package Manager yarn ### Logs _No response_ ###…

### CASE-8849 · Uncaught TypeError: Cannot read property 'constant' of undefined
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, safari, macos, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Upgrade vite to 2.3.8, access to the packaged program through the preview will report an error Suspected lodash-es is not included ![image]([link]) [](url) ![image]([link]) ### Reproduction [codesandbox]([link]) [github]([link]) ### System Info ```shell System: OS: macOS 11.4 CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz Memory: 39.30 MB / 16.00 GB Shell: 5.8 - /bin/zsh Binaries: Node: 14.15.4 - /usr/local/bin/node Yarn: 1.22.10 - /usr/local/bin/yarn npm: 6.14.10 - /usr/local/bin/npm Browsers: Chrome: 91.0.4472.114 Safari: 14.1.1 ``` ### Used Package Manager npm…

### CASE-8852 · preact-ts sourcemap wrong line number
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, windows, react, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Using preact-ts template in dev mode produces wrong line numbers in source maps. ### Reproduction 1. npm init @user/app vite-preact-ts --template preact-ts 2. cd vite-preact-ts 3. npm install 4. In app.tsx add `console.log('line 4');` on line 4 5. npm run dev 6. Open console in Chrome, the log will say `line 4 - app.tsx:3` The line numbers are not just off by 1, with real components, they can be off by 20 lines or more. ![image]([link]) ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue --binaries --browsers`: ```node System: OS: Windows…

### CASE-8857 · Optimizing the electron-updater leads to its breakdown
- **Principles**: P-G1, P-G2, P-G3 · **Env**: electron, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: <!-- 中文用户请注意：请仔细阅读以下模版，如果不遵循模版，issue 将会被直接关闭。 --> **⚠️ IMPORTANT ⚠️ Please check the following list before proceeding. If you ignore this issue template, your issue will be directly closed.** - [x] Read [the docs]([link]). - [x] Use Vite >=2.0. (1.x is no longer supported) - [x] If the issue is related to 1.x -> 2.0 upgrade, read the [Migration Guide]([link]) first. ## Describe the bug Optimization of the [electron-updater]([link]) package leads to its breakdown. I assume that the problem is in cyclic dependencies ## Reproduction 1. Clone repo [cawa-93/vite-issue]([link]) 2. ```npm install```…

### CASE-8858 · Vite uses Ant to report some errors
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: chrome, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: <!-- Before you continue... If you just upgraded Vite and suddenly everything stops working, try opening the Network tab in your browser devtools, tick "disable cache" and refresh the page. --> ## Describe the bug ### 就是引用ant 后， 在使用时报告相关错误如下： > 不知道为什么 会引用 ant 的`package.json`, 开始我以为是需要使用rollup的json插件来解决问题，但是尝试后无效。 * main.ts ![image]([link]) * chrome console ![image]([link]) ## Reproduction [链接地址]([link]) ## System Info - vite 2.0.0 beta.4 - vue 3.0.5 - ant-design-vue 2.0.0-rc.7 ## Logs (Optional if provided reproduction) 1. Run `vite` or `vite build` with the `--debug` flag. 2. Provide the…

### CASE-8859 · web worker: Unexpected identifier 'jspdf'. import call expects exactly one argument
- **Principles**: P-G1, P-G2, P-G3, P-A3, P-H1 · **Env**: safari 14, chrome, vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ## Describe the bug See issue in Safari 14.0.2 (work ok in Chrome), in dev mode only, work ok after building for production ## Reproduction [link] ## System Info Vite `1.0.0-rc.13` ## Logs (Optional if provided reproduction) <img width="538" alt="Screen Shot 2021-01-03 at 22 36 14" src="[link]>

### CASE-8870 · Copy pasting from code blocks on the ducmentation tool frustrating and losing formatting
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: firefox 144, linux, vite
- **Signals**: 👍0 💬4 · closed · labels: documentation/bug: upstream
- **Excerpt**: ### Documentation is - [ ] Missing - [ ] Outdated - [x] Confusing - [x] Not sure? ### Explain in Detail I tried to copy some text from the vite documentation to use in my own project. This experience is frustrating. Once you manage to select the text, vite also mangles your clipboard entry Browser: Firefox 144.0 (64-bits) on Arch Linux ### Your Suggestion for Changes If a user starts selecting some text, do not show popups. If a user has selected some text, do not clear the selecting when a popup shows If a user starts selecting text, do not extend the text selection to the end of the…

### CASE-8872 · Media Session API fails after system sleep
- **Principles**: P-G1, P-G2, P-G3 · **Env**: chrome, macos, vue, vite, electron
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When running a Vue app via Vite dev server (`vite`), the [Media Session API]([link]) integration breaks after the system goes to sleep and resumes. Specifically, system-level media controls (e.g., media keys, media menu on macOS) no longer show my app after sleep, even though the app still runs fine. This issue **does** occur: - When opening the Vite dev server URL (`[link]) directly in Chrome - When loading the same URL via `win.loadURL('[link])` in Electron This issue does **not** occur: - When the same code is run using `vite build` and served via `loadFile()` in…

### CASE-8880 · Vite Hot Reload gives error in webview.
- **Principles**: P-G1, P-G2, P-G3 · **Env**: vite, webview, react
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug Hi Team, I am trying to load react page using Vite build to vscode extension web view. It loads fine at first place. But my question is if i am making any change in React component it is not picking up that change until i come out from debug session and rebuild again. I don't want to come out of debug session to rebuild everytime. It is time consuming. My vite config has the commands to put the bundle to dist folder. It works fine and put into dist folder first time. My webview is reading bundle from dist folder. I am trying to use **vite build --watch --config…

### CASE-8882 · Dynamic import with `type: 'json'` causes syntax error on Firefox
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, firefox 133, linux
- **Signals**: 👍0 💬4 · open · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug ```js const module = () => import('./sample.json', { with: { type: 'json' } }); // breaks const module = () => import('./sample.json', { assert: { type: 'json' } }); // breaks const module = () => import('./sample.json'); // works ``` In Firefox 133.0.3 (aarch64) > Uncaught SyntaxError: missing ) after argument list `main.js:6:54` ### Reproduction [link] ### Steps to reproduce _No response_ ### System Info ```shell System: OS: Linux 5.0 undefined CPU: (8) x64 Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz Memory: 0 Bytes / 0 Bytes Shell: 1.0 - /bin/jsh Binaries: Node: 18.20.3 -…

### CASE-8885 · Random errors using dev server in Firefox: "Loading failed for the module with source" & NS_ERROR_NET_PARTIAL_TRANSFER
- **Principles**: P-G1, P-G2, P-G3 · **Env**: firefox, firefox 130, chrome, vite
- **Signals**: 👍1 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug Running VITE v5.4.7 and LARAVEL v10.48.22 (plugin v1.0.5). Running "npm run dev". Using Firefox 130 on Mac. Using about 40 inputs. Page loads only work roughly half the time. Often one or more modules will fail to load. Seems to happen more on initial page load but not always. Console shows "Loading failed for the module with source XXX". Network inspector shows modules failed with NS_ERROR_NET_PARTIAL_TRANSFER error. Works fine on Chrome. ### Reproduction I can't do this at the moment (understand this is a problem) but wanted to put this issue in so others could find it.…

### CASE-8887 · Conditional exports can't be active when key is `browser`
- **Principles**: P-G1, P-G2, P-G3 · **Env**: safari, macos, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I use 'browser' as an optional condition for exporting, I cannot correctly import the module. ### Reproduction [link] ### Steps to reproduce Run `pnpm install` followed by `pnpm run test` ### System Info ```shell npx envinfo --system --npmPackages '{vite,@user/*,rollup}' --binaries --browsers System: OS: macOS 14.1.1 CPU: (10) arm64 Apple M1 Pro Memory: 154.44 MB / 32.00 GB Shell: 5.9 - /bin/zsh Binaries: Node: 18.20.4 - /usr/local/bin/node Yarn: 1.22.19 - /usr/local/bin/yarn npm: 10.7.0 - /usr/local/bin/npm pnpm: 8.12.1 - ~/Library/pnpm/pnpm Browsers: Safari: 17.1…

### CASE-8892 · 使用 build:win 打包，修改模式 --mode test ，并新建 .env.test 文件，打包报错
- **Principles**: P-G1, P-G2, P-G3, P-G4, P-E3 · **Env**: electron, vite, vue
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug 打包错误提示如下： error during build: Error: An entry point is required in the electron vite main config, which can be specified using "build.lib.entry" or "build.rollupOptions.input". 将.env.test文件中的配置复制到 .env.production 中，发现能打包成功。 ### Reproduction 未上线 ### Steps to reproduce npm run build:winTest ### System Info ```shell { "name": "electron-app", "version": "1.0.0", "description": "An Electron application with Vue", "main": "./out/main/index.js", "author": "example.com", "homepage": "[link] "scripts": { "format": "prettier --write .", "lint": "eslint . --ext…

## animation-motion — Animation & Motion 动效 · principles: P-D1, P-D2, P-D3

### CASE-8809 · @user/plugin-vue will remove the code comment when <script lang="ts">
- **Principles**: P-D1, P-D2, P-D3, P-A3, P-H1, P-F4 · **Env**: vue, vite
- **Signals**: 👍0 💬5 · closed · labels: wontfix/pending triage
- **Excerpt**: ### Describe the bug my vite plugin: ```javascript { name: 'client-only', transform(code, id, { ssr } = {}) { if (ssr) { // In ssr case, I need to do some transform according to the code comment. eg: //... return transform(code); } }, } ``` my vite config: ```javascript plugins: [ vue(), clientOnly() // after the vue plugin ] ``` but I found if the *.vue' file's <script> with lang='ts', the comment in code will be remove: ![image]([link]) ![image]([link]) btw, the <script> without lang='ts', will keep the comment ![image]([link]) ![image]([link]) I try to trace the source code…

### CASE-8811 · [Vite + React + TS + Jest] is it any intention to make vite testable?
- **Principles**: P-D1, P-D2, P-D3, P-E1, P-E2, P-E4 · **Env**: vite, react, typescript
- **Signals**: 👍2 💬5 · closed · labels: enhancement: pending triage
- **Excerpt**: ### Clear and concise description of the problem I started a new project with Vite. Everything worked fine till i had to implement environment variables. I made it with documentation using `import.meta` and I noticed that all my tests associated with place where I used this syntax were broken. I have stack: - React 17 - TypeScript 4.5.2 - jest 27 - RTL - msw - Cypress I tried a lot of solution from SO (like implement ts-jest, transformers in jest etc.) and even closed(why?) issues in Vite but it didn't work. I found a temporary workaround doing this: To be able run application i had to define…

### CASE-8850 · Cannot rollup a minimal application including 'react-data-table'
- **Principles**: P-D1, P-D2, P-D3 · **Env**: windows, react, vite, vue
- **Signals**: 👍0 💬5 · closed · labels: bug: upstream
- **Excerpt**: ### Describe the bug If you create a trivial application and add "react-data-table-component" module it fails to rollup. It works in dev mode though ### Reproduction Steps: 1. npm init @user/app 2. npm install react-data-table-component 3. change source to import it 4. npm run build `error during build: Error: Transform failed with 1 error: assets/vendor.34901b56.js:1323:2731: error: Expected identifier but found "("` repo: [link] ### System Info Output of `npx envinfo --system --npmPackages vite,@user/plugin-vue --binaries --browsers`: ``` System: OS: Windows 10 10.0.19042 CPU: (20) x64…

### CASE-8868 · `options.ssr` remains `true` in custom environments even when `build.ssr: false` is configured
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: unspecified
- **Signals**: 👍0 💬4 · open · labels: pending triage
- **Excerpt**: ### Describe the bug When using the new Environment API to define a custom environment (or any environment other than the built-in client), the options.ssr passed to plugin hooks (e.g., transform) is determined solely by the environment's consumer type. This means that even if build.ssr is true, a plugin might see options.ssr as false if the environment's consumer is client. I believe build.ssr should influence the ssr flag passed to plugins, so that plugin behavior correctly reflects whether the build is targeting SSR. ### Reproduction [link] ### Steps to reproduce _No response_ ### System…

### CASE-8879 · Vite SSR doesn't fail when same name is declared via import
- **Principles**: P-D1, P-D2, P-D3, P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · open · labels: feat: ssr/p2-edge-case/regression
- **Excerpt**: ### Describe the bug Example code `test.js` ```js import { join } from "node:path"; import { join } from "node:path"; export default join("a", "b") ``` On Node: ```js ❯ node src/test.js SyntaxError: Identifier 'join' has already been declared (2:9) at ModuleLoader.moduleStrategy ([link]) at ModuleLoader.<anonymous> ([link]) at async [link] Node.js v18.20.3 ``` On Vite SSR: ```js ❯ node repro.js [Module: null prototype] { default: 'a/b' } ``` --- I noticed this when testing oxc module runner transform in [link] where oxc rejected such code but current ssr tolerate the same code. ###…

### CASE-8893 · Unable to completely disable Rollup's tree shaking
- **Principles**: P-D1, P-D2, P-D3 · **Env**: svelte, vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Setting `moduleSideEffects` to `no-treeshake` does not completely disable Rollup's tree shaking. **Short Story** I have used the [`output.manualChunks`]([link]) option to split the code Svelte to a separated chunk, and set `moduleSideEffects` to `no-treeshake` in the result of the [`transform` hook]([link]) to disable tree shake, expecting the code in the Svelte chunk to be consistent. Unfortunately, exports are still being removed. **Long Story** I'm trying to make something like micro-frontends for Vite + Svelte + TS. But [module-federation]([link]) does not support…

### CASE-8898 · Empty modules in optimized dependencies compile incorrectly
- **Principles**: P-D1, P-D2, P-D3 · **Env**: unspecified
- **Signals**: 👍1 💬4 · closed · labels: p3-minor-bug/feat: deps optimizer
- **Excerpt**: ### Describe the bug If you create an empty module containing only `export {}` in an app or non-optimized dependency, and then import it into the app via `import * as ...`, you get back an empty module, which is correct and consistent with native browser behavior. But if you create an empty module containing only `export {}` in an optimized dependency, and then import it into the app via `import * as ...` you get a runtime error. It looks like the dep optimizer is replacing `export {}` with an empty file, which is not really a safe transformation. ### Reproduction [link] ### Steps to…

## focus-a11y — Focus & Accessibility 焦点与无障碍 · principles: P-E1, P-E2, P-E4

### CASE-8810 · Error: Unknown variable dynamic import: ./icons/user.svg?raw
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage/inconsistency
- **Excerpt**: ### Describe the bug First, open the simple reproduction on Stackblitz. You will see that everything works there. If you run `vite build && vite preview` though, you will see the error: ``` Error: Unknown variable dynamic import: ./icons/user.svg?raw ``` ### Reproduction [link] ### System Info ```shell - ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't…

### CASE-8814 · .env taking priority over .env.local
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have an API with a VITE_API_URL environment variable that I use to change where the client is pointing depending whether it's local or in production. I have the variables declared in `.env` and an override in `.env.local` as follows. **.env** ``` VITE_API_URL=[link] ``` **.env.local** ``` VITE_API_URL=[link] ``` I then integrate the environment variable with the following and the variable works. ```javascript const client = new ApolloClient({ uri: import.meta.env.VITE_API_URL, // rest of config... }) ``` When developing locally with the Vite dev server, the client uses…

### CASE-8817 · vite define and object property value shorthand dev and build inconsistencies
- **Principles**: P-E1, P-E2, P-E4 · **Env**: macos, vite, vue, webpack
- **Signals**: 👍0 💬5 · closed · labels: inconsistency
- **Excerpt**: ### Describe the bug Vite config `define: {APP_DOMAIN: JSON.strinfigy('x')}` and vue component source ``` data(){ return { APP_DOMAIN } }, ``` works fine in dev mode, but on build returns error on APP_DOMAIN position ``` [rollup-plugin-dynamic-import-variables] Unexpected token (166:6) App.vue:166:6 error during build: SyntaxError: Unexpected token (166:6) ``` Tried also `APP_DOMAIN: APP_DOMAIN` which works as expected in dev mode, but build translate it to `x: 'x'` Webpack didn't have issue with this. ### Reproduction [link]([link]) ### System Info ```shell System: OS: macOS 12.1 CPU: (8)…

### CASE-8824 · vite react plugin bundles element tagnames as <tagname> in production mode
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite, react
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When bundling an app with React + Vite in production mode, Vite bundles all components with the tag name `<tagname>`. I would expect that the tag names be preserved when building for production. The sample app has the following code: ```js React.createElement(tagName, {}, children) ``` It looks like `tagName` is being converted to `"tagName"` (the string) when building. If I change that `tagName` variable to `helloworld`, then the elements would show up as `<helloworld>` instead. ### Reproduction [link] **Steps to reproduce** 1. Run `npm install`. 2. In the `test-module`…

### CASE-8826 · import.meta.env does not work for dependencies when running in development
- **Principles**: P-E1, P-E2, P-E4 · **Env**: unspecified
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug I'm trying to pass some environment variables to parts of my modular application. For that I have some `import.meta.env` statements in my dependencies. When I build it in production, all seems to work fine; the `import.meta.env` statements are statically replaced with their actual values and all is well. This is not consistent with the behaviour I'm seeing when running this in development. Here I am getting an undefined error. It looks like, contrary to production mode, that in development only the actual project gets its `import.meta.env` filled in. Is there any way to…

### CASE-8838 · Can't access non-vite env variable by exposing in .env
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬5 · closed
- **Excerpt**: ### Describe the bug I'm trying to access the $BITBUCKET_BUILD_NUMBER in my vite app, by adding `VITE_RELEASE=$BITBUCKET_BUILD_NUMBER` to the .env files as suggested in a few threads. But it's not picked up by VITE. I know VITE doesn't recognize variables without prefix VITE_ , and exposing them can be done as VITE_VAR=$VAR, but that doesn't seem to be working. I'm using VITE 2.5.3 ### Reproduction [link] To reproduce : 1. Clone Repo 2. export SOME_VAR=something_else 3. export VITE_VAR3=another_variable 4. npm run beta-build 5. Go to dist/assets/index.<hash>.js, search for…

### CASE-8863 · topLevelVar true by default - breaks dead code elimination
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/p3-minor-bug
- **Excerpt**: ### Describe the bug Currently in Vite 8 rolldown's topLevelVar options is `true` by default. Variables defined with `var` are not "inlined" during dead code elimination, which breaks dead code elimination. ### Reproduction [link] ### Steps to reproduce ```ts // lib.ts let used = false; export function use() { used = true; } export function test() { if (used) return 123; return 321; } ``` ```ts // index.ts import { test } from './lib' console.log(test()) ``` expected output (with topLevelVar: false) ```js function test() { return 321; } //#endregion //#region index.ts console.log(test());…

### CASE-8864 · $RefreshSig$ is not defined when use pnpm created a react project and running
- **Principles**: P-E1, P-E2, P-E4, P-G4, P-E3 · **Env**: react, vite, typescript
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug pnpm create vite choose react js or ts The project ultimately ran successfully, but the page displayed blank and gave an error in console(Uncaught ReferenceError: $RefreshReg$ is not defined at App.jsx:10:16). ### Reproduction pnpm create vite ### Steps to reproduce E:\react-cli-demo>pnpm create vite | o Project name: | test-react-ts | o Select a framework: | React | o Select a variant: | TypeScript | o Install with pnpm and start now? | Yes | o Scaffolding project in E:\react-cli-demo\test-react-ts... | o Installing dependencies with pnpm... Packages: +175…

### CASE-8875 · Provide an unaltered/corrected import.meta object in vite.config.ts and imported files
- **Principles**: P-E1, P-E2, P-E4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p2-edge-case
- **Excerpt**: ### Describe the bug I noticed recently that the values in `import.meta` in `vite.config.ts` (or equivalent file) and in files it imports directly or not, is not as expected. Indeed, since you bundle the configuration internally, the final result is one single file. `import.meta` is the “real” object and represents that actual temporary file, while code like `import.meta.url` is being replaced during build time to hold the values the user expects. We can see it in the code: - [injected module variables names get defined]([link]…

### CASE-8886 · The object is created with the old class name, but the instanceof check is performed with the renamed class name
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: unspecified
- **Signals**: 👍0 💬4 · closed · labels: p3-minor-bug/feat: deps optimizer
- **Excerpt**: ### Describe the bug We have a FlexGridPdfConverter class in our library (Wijmo). When we use the draw() method to draw the FlexGrid into a PdfDocument it produces an error in the constole: “Uncaught ** Assertion failed in Wijmo: Invalid argument: "value". Error”. The error is caused because of failure of following check: “e instanceof PdfPen” The reason is that the “e” variable contains the instance of “PdfPen” instead of “PdfPen2”. You may observe the same in the images below: ![image]([link]) ![image]([link]) Please note that I tried to run the exact code in an esbuild setup, and the issue…

### CASE-8889 · --template parameter ignored (running npm create vite on windows)
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: windows, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Running `npm create vite@user test-app -- --template react-ts` still prompts for framework and variant. <img width="460" alt="image" src="[link]> ### Reproduction n/a (bug is in create-vite) ### Steps to reproduce Running `npm create vite@user test-app -- --template react-ts` Expected: project is created with no additional prompts Actual: create-vite still prompts for framework and variant ### System Info ```shell Windows 10 node 20.12.2 npm 10.5.0 ``` ### Used Package Manager npm ### Logs _No response_ ### Validations - [X] Follow our [Code of Conduct]([link]…

### CASE-8897 · Vite Build include unused variable(s)
- **Principles**: P-E1, P-E2, P-E4, P-A3, P-H1 · **Env**: vite, react
- **Signals**: 👍0 💬4 · closed · labels: invalid
- **Excerpt**: ### Describe the bug Vite Build include unused variable(s) when the components are short circuit evaluation `src/Layout/LeftSidebar.jsx` has a variable declare as array and map into `Link` component from `react-router-dom` the `src/Layout/LeftSidebar.jsx` is imported in `src/Layout/Header.jsx` while `src/Layout/Header.jsx`is imported and short circuit evaluated in `src/Layout/index.jsx` Actual output: Variables declare in `src/Layout/LeftSidebar.jsx` included in output <img width="533" alt="Screenshot 2024-03-31 at 12 23 59" src="[link]…

## form-input — Forms & Mobile Input 表单与移动输入 · principles: P-G4, P-E3

### CASE-8812 · Providing build.rollupOptions as an array of RollupOptions objects (i.e. RollupOptions[]) doesn’t work
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug According to the documentation for [`build.rollupOptions`]([link]) it is possible to pass the export of a Rollup config file: > This is the same as options that can be exported from a Rollup config file and will be merged with Vite's internal Rollup options. This doesn’t work when the export is a list of rollup options (i.e. `RollupOptions[]`). From what I can tell, vite just plainly doesn’t ever expect the options provided to be an array; hence, it reports "Unknown input options: 0, 1, 2, 3. Allowed options: acorn, acornInjectPlugins, …" (here, "0, 1, 2, 3" are just the…

### CASE-8845 · CSS input missing from manifest.json
- **Principles**: P-G4, P-E3 · **Env**: vite, vue
- **Signals**: 👍8 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug When I specify an SCSS file as an input in `rollupOptions`, it get compiled correctly in dist/assets but it's missing from manifest.json. I guess this is not a standard use case. I'm primarily using Vite to add Vue to a Django website which works great. But the website has quite a bit of SCSS which I would like to build with Vite as well. I can make a js entrypoint file that only contains `import 'style.scss'` to make it appear in the manifest, but would it be possible to specify an scss input directly? ### Reproduction Don't need SCSS to reproduce, same outcome with…

### CASE-8862 · Dependency scan fails with incorrect file path when input contains @ in directory name on Windows
- **Principles**: P-G4, P-E3 · **Env**: windows, vite
- **Signals**: 👍0 💬4 · open · labels: p3-minor-bug
- **Excerpt**: ### Describe the bug When using a multi‑page configuration with `input` (not `rolldownOptions.input`), I always get a dependency scan error. The full error message is: ``` PS D:\desk\test-vite-scan\test> pnpm exec vite --force --host dirPackage D:\desk\test-vite-scan\test fileHTML D:\desk\test-vite-scan\test\@user\whatever.html 14:19:27 [vite] (client) Forced re-optimization of dependencies VITE v8.2.2 ready in 195 ms ➜ Local: [link] ➜ press h + enter to show help (!) Failed to run dependency scan. Skipping dependency pre-bundling. Error: failed to resolve rolldownOptions.input value:…

### CASE-8867 · (create-vite) Creating a project using Marko doesn't work
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: p2-edge-case/feat: create-vite
- **Excerpt**: ### Describe the bug If you run `npm create vite@user` and select Marko, it fails saying that the folder already exists: ``` ✖ Project path already exists '/home/lost/playground/other/framework-test/marko_' Error: Project path already exists '/home/lost/playground/other/framework-test/marko_' at assertAllGood (/home/lost/.npm/_npx/9847185164d43527/node_modules/@user/create/dist/index.js:113:11) at async create (/home/lost/.npm/_npx/9847185164d43527/node_modules/@user/create/dist/index.js:51:3) at async run (/home/lost/.npm/_npx/9847185164d43527/node_modules/@user/create/dist/cli.js:151:9) ```…

### CASE-8883 · Livewire 3 - Laravel 11 - Tailwind CSS double refresh issue with HMR
- **Principles**: P-G4, P-E3 · **Env**: tailwind
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug While progressing through development of my code (here it's coming from a course on Laracast) I encountered a strange behaviour with HMR: - When saving any change in the blade file, the page reload as intended - When changing PHP on the server side, it doesn't reload, which is I think normal as well. - But when interacting with input with `wire:model` or not on it, the page reload and reset the state. It doesn't occur every time, it generally occurs when there has been a change either on the blade or the PHP part of a _liverwire_ component. ### Reproduction [link] ###…

### CASE-8888 · issue with npm run dev, "[ERROR] Must use "outdir" when there are multiple input files"
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug Hi, I have followed the get started tutorial of vite. But I could not access the tutorial web page due to the following error [ERROR] Must use "outdir" when there are multiple input files. actually I seem to have found out the reason. if I run the file in "/Users/ /Documents/- local files - programming env <Hu>/* - folder, progring projects - test folder/testingArea-hu’s test" I get error. but if I instead run it in "/Users/ /Documents/- local files - programming env <Hu>/ - folder, progring projects - test folder/testingArea-hu’s test" all things work out. but why? why…

### CASE-8896 · rollupOptions.output.assetFileNames only working for CSS
- **Principles**: P-G4, P-E3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction
- **Excerpt**: ### Describe the bug When trying to create a new output for anything other than CSS, I always only get CSS files returned ### Reproduction Laravel 11 project with Vite v5 ### Steps to reproduce Console logging `name` shows me only CSS files despite the JS input files existing: ```js import { defineConfig } from 'vite'; import laravel from 'laravel-vite-plugin'; export default defineConfig({ plugins: [ laravel({ input: [ 'resources/css/app.css', 'resources/js/app.js', 'resources/js/hash.js', ], refresh: true, }), ], build: { rollupOptions: { output: { assetFileNames: ({ name }) => {…

## contrast-color — Contrast & Color Themes 色彩对比与主题 · principles: P-C1, P-C2, P-C3

### CASE-8815 · Vite lossily combines `link[rel=stylesheet]` and `link[rel=stylesheet][media="(prefers-color-scheme:dark)"]`
- **Principles**: P-C1, P-C2, P-C3 · **Env**: vite
- **Signals**: 👍5 💬5 · closed · labels: feat: css/p3-minor-bug
- **Excerpt**: ### Describe the bug Vite lossily (note the `media` attribute) combines ```html <link rel=stylesheet href="a.css" /> <link rel=stylesheet href="b.css" media="(prefers-color-scheme:dark)" /> ``` to ```html <link rel=stylesheet href="c123.css" /> ``` How to prevent this? Ideally both files were optimized and name-hashed, but not combined into one and the media attribute preserved: ```html <link rel=stylesheet href="a123.css" /> <link rel=stylesheet href="b456.css" media="(prefers-color-scheme:dark)" /> ``` ### Reproduction [link] ### System Info ```shell N/A ``` ### Used Package Manager npm ###…

### CASE-8848 · 2.7.8 can't load the woff or ttf when i use element-plus
- **Principles**: P-C1, P-C2, P-C3, P-B1, P-B2, P-B3 · **Env**: unspecified
- **Signals**: 👍0 💬5 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug when i use version 2.7.7, it work as i want but i use version 2.7.8, i can't see any icon from element-plus the important i do is： import 'element-plus/lib/theme-chalk/index.css' in main.js it may be a bug from 2.7.7 to 2.7.8 ### Reproduction nothing ### System Info ```shell nothing ``` ### Used Package Manager yarn ### Logs ```shell xx ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/.github/contributing.md). - [X] Read the [docs]([link]). - [X] Check that…

## font-typography — Fonts & Typography 字体与排版 · principles: P-B1, P-B2, P-B3

### CASE-8823 · node_modules font-face url can not resolve
- **Principles**: P-B1, P-B2, P-B3, P-A3, P-H1 · **Env**: opera, macos, vite
- **Signals**: 👍1 💬5 · closed · labels: needs reproduction/feat: css
- **Excerpt**: ### Describe the bug My project using a node_modules dependency that have a css file. The css file font-face url can not resolve but i see the docs that assetsInclude default include these file types. ![image]([link]) ![image]([link]) ### Reproduction error: No loader is configured for ".woff" files error: No loader is configured for ".woff2" files error: No loader is configured for ".ttf" files ### System Info ```shell vite version: ^2.7.2 Operating System: MacOS Big Sur 11.5.1 Node version: 12.18.2 ``` ### Used Package Manager yarn ### Logs _No response_ ### Validations - [X] Follow our…

## ssr-hydration — SSR & Hydration 服务端渲染与水合 · principles: P-F4

### CASE-8825 · TypeError: ssrContext is undefined
- **Principles**: P-F4 · **Env**: vite, vue
- **Signals**: 👍0 💬5 · closed · labels: needs reproduction/cannot reproduce
- **Excerpt**: ### Describe the bug See [link] tool][ref] Happened in my build with Vite 2.7.1 and @user/plugin-vue 1.10.2 As @user said; reverting to [email] fixed the issue. ### Reproduction See [link] tool][ref] ### System Info ```shell See [link] tool][ref] ``` ### Used Package Manager npm ### Logs ```shell See [link] tool][ref] ``` ### Validations - [X] Follow our [Code of Conduct]([link] tool]/blob/main/CODE_OF_CONDUCT.md) - [X] Read the [Contributing Guidelines]([link] tool]/blob/main/CONTRIBUTING.md). - [X] Read the [docs]([link]). - [X] Check that there isn't [already an issue]([link] tool]/issues)…

### CASE-8834 · WASM+Vite via SvelteKit: `TypeError: Failed to construct 'URL': Invalid URL` on client
- **Principles**: P-F4 · **Env**: vite, svelte
- **Signals**: 👍1 💬5 · closed · labels: pending triage/has workaround/rollup plugin compat
- **Excerpt**: ### Describe the bug Hi! I am trying to setup Vite with WASM via SvelteKit and [rollup-plugin-assemblyscript]([link]). My wasm-module is ignored on SSR and loads only on client: ```svelte onMount(async () => { // this runs only on client const wasmUrl = await import("asc:@/core/add.as"); WebAssembly.instantiateStreaming(fetch(wasmUrl)).then(({ instance }) => console.log(instance.exports.add(40, 2)) ); }); ``` After successful build I receive such error on client: ``` TypeError: Failed to construct 'URL': Invalid URL at add-ff7f1bae.js:1 ``` Inside generated add-*.js file: ```js const e = new…

### CASE-8865 · esbuild.jsxDev incorrectly set to true during production build (NODE_ENV mutation by postcss-load-config)
- **Principles**: P-F4 · **Env**: vite, react, tailwind
- **Signals**: 👍0 💬4 · closed · labels: needs reproduction/clarity: high
- **Excerpt**: ### Describe the bug During `vite build`, `esbuild.jsxDev` resolves to `true` instead of `false` because `process.env.NODE_ENV` gets mutated to `"development"` by `postcss-load-config` before the resolved config is computed. This causes SSR bundles to import `react/jsx-dev-runtime` instead of `react/jsx-runtime`, leading to a crash in production: ``` TypeError: jsxDEV is not a function at RootDocument (router-g_kzoCrs.mjs:1039:106) at renderWithHooks (react-dom.mjs:8447:20) ``` ### Reproduction 1. Create a React SSR project using Vite 7.3.x + TailwindCSS (PostCSS) 2. Run `vite build` 3. The…

### CASE-8871 · bug(ssr): vite hmr server called twice when use two configurations in server side render
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug In vite ssr, if I separate vite config logic to different files like `vite.client.config.ts` and `vite.server.config.ts`, and I get `viteDevServer` instance by calling `createServer` method use these configurations. On the server side, I use `ssrLoadModule` in the viteDevServer instance, like ```js const viteServer = await createServer(serverConfig) await (viteServer as ViteDevServer).ssrLoadModule(viteServerEntry) ``` On the client side, I use a ViteDevServer instance with middleware mode, like ```js const viteServer: ViteDevServer = await createServer(clientConfig)…

### CASE-8873 · Live binding does not work when the `Object` constructor is shadowed
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍1 💬4 · closed · labels: p3-minor-bug/feat: ssr/regression
- **Excerpt**: ### Describe the bug After updating to `[email]`, SSR in my app stopped working. I discovered that the issue was introduced in this commit: [link] tool]/commit/80a91ff82426a4c88d54b9f5ec9a4205cb13899b `lib.js` contains the following code, which shadows the global `Object` constructor and causes the following error: ```js export default function Object() {} ``` ``` TypeError: Object.defineProperty is not a function at eval (/home/projects/vitejs-vite-b63hinxr/src/lib.js:5:8) at ESModulesEvaluator.runInlinedModule…

### CASE-8884 · Support `server.origin` for references in HTML files
- **Principles**: P-F4 · **Env**: vite
- **Signals**: 👍4 💬4 · closed · labels: pending triage
- **Excerpt**: ### Description The Vite Shared Options documentation for [base]([link]) states: > Full URL, e.g. [link] (The origin part won't be used in development so the value is the same as /foo/) This has turned out to be a problem for me because I serve HTML generated by a Vite SSR server from a server in front of the Vite dev server. In short, a server at [link] requests HTML from Vite running at [link] and the fronting server returns the HTML it got from Vite to the browser. At this point, all URLs in the HTML are relative to [link] instead of being relative to [link] so all static assets on the…

## overflow-scroll — Overflow & Scrollbars 溢出与滚动条 · principles: P-A1, P-A2, P-G1, P-F1

### CASE-8861 · The css sourceMap not work
- **Principles**: P-A1, P-A2, P-G1, P-F1, P-E1, P-E2, P-E4, P-B1, P-B2, P-B3 · **Env**: vite
- **Signals**: 👍15 💬5 · closed · labels: enhancement/feat: css
- **Excerpt**: ## Describe the bug I open sourceMap option both in vite.config.js and postcss.config.js, but the sourceMap did not work.What's more，the style property cannot be edited in dev tools. ```js // postcss.config.js module.exports = { map: 'inline', plugins: { 'postcss-preset-env': { stage: 2, preserve: false, features: { 'nesting-rules': false, 'custom-selectors': true, 'custom-properties': true, 'system-ui-font-family': true, 'environment-variables': true, 'overflow-property': true, 'place-properties': true, }, autoprefixer: {}, importFrom: [ './src/assets/css/_var.css', ], exportTo:…

## responsive-viewport — Responsive & Viewport 响应式与视口 · principles: P-A1, P-A4, P-G3

### CASE-8874 · Unexpected sourcemaps behavior
- **Principles**: P-A1, P-A4, P-G3, P-A3, P-H1 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: bug: upstream/p3-minor-bug/feat: sourcemap
- **Excerpt**: ### Describe the bug I encountered sourcemapping issues when using Vite. ## Exhibit 1 using terser as minifier ([commit]([link])) ### Step 1 It's possible to add a breakpoint at the return statement: <img width="330" alt="Image" src="[link] /> ### Step 2 Set it up and step into: <img width="1494" alt="Image" src="[link] /> Oops, we end up within `useEffect`'s implementation and not within the appropriate JSX factory function. At this time the stack frame within `App.tsx` shows a good location: <img width="421" alt="Image" src="[link] /> But we got here from the breakpoint at line 8. That's…

### CASE-8890 · Vite reloads when idle for some time
- **Principles**: P-A1, P-A4, P-G3 · **Env**: linux, vite, react
- **Signals**: 👍0 💬4 · closed · labels: pending triage/cannot reproduce
- **Excerpt**: ### Describe the bug I'm using Vite + React. The app is up and running inside the browser, and it's connected to an API that is in debug mode with some breakpoints in it. For some reason whenever I have to follow another task (like answering an email, or installing another app on Linux, etc.) I see that VS Code comes up with the breakpoint being activated and I realize that the Vite+React app is reloaded for no reason. Nobody refreshed the app, nobody changed anything server-side, and nobody did anything with the source code or the app. ### Reproduction no production ### Steps to reproduce 1.…

## stacking-zindex — Stacking & Occlusion 层叠与遮挡 · principles: P-A5

### CASE-8876 · "require is not defined" on the server, in dev mode only
- **Principles**: P-A5, P-F4 · **Env**: react
- **Signals**: 👍1 💬4 · closed · labels: has workaround/feat: ssr/p2-edge-case/inconsistency
- **Excerpt**: ### Describe the bug [link] - here's a reduced example of the issue, building on top of the Preact SSR template. Here I'm using a plugin to import a module for SSR only. In this case, JSDOM. `pnpm run build && pnpm run preview` works fine. However, if I visit the app in `pnpm run dev`, I get the error `ReferenceError: require is not defined`. ### Reproduction [link] ### Steps to reproduce 1. Check out [link] and install dependencies. 2. `pnpm run dev` 3. Visit the server in a browser 4. See `ReferenceError: require is not defined` 5. Note that replacing step 2 with `pnpm run build && pnpm run…

## race-state — Race & Listeners 竞态与监听器 · principles: P-F5, P-H3

### CASE-8878 · package.json "exports" with array matcher only takes first
- **Principles**: P-F5, P-H3 · **Env**: vite
- **Signals**: 👍0 💬4 · closed · labels: pending triage
- **Excerpt**: ### Describe the bug I have a monorepo package with a `package.json` file that uses an `"exports"` key like, ```json { "exports": { "./*": [ "./*.tsx", "./*.ts", "./*.d.ts", "./*" ] } } ``` It appears that when I import a `.ts` file from this package from an external module, Vite fails to find it, giving me an error, ``` Failed to resolve import '...'. Does the file exist? ``` The filename is `useDebounce.ts`. I know for fact that the file exists, and can even be accessed by control-clicking in VSCode. See below for the reason this occurs. I debugged the Vite runtime and traced in Vite's…

