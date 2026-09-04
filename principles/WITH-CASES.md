# Principles × Cases — 原则与案例结合讲解版

> 同一套 31 条原则（编号与 [PURE.md](./PURE.md) 一致），但每条原则挂上真实案例讲解。
> **案例编号**：`CASE-0001~0099` = 本项目自己的实战案例；`CASE-1001+` = 从公开仓库 issue 中爬取并**匿名化**的高价值案例（症状与环境保留，来源信息不保留——来源聚合清单见 README 末尾）。
> **环境标注规则**：每个案例必须注明【平台 / 浏览器 / 缩放或视口 / 技术栈】，因为同一 bug 在不同环境的答案完全不同。
>
> 按"症状 → 原则"反查请用 [cases/BUG-INDEX.md](../cases/BUG-INDEX.md)。

---

## A. Layout & Reflow 布局与回流

### P-A1 Reflow Guarantee 重排保证
**陈述**：320px–400% 缩放任意组合不得出现水平滚动。它不是"设计目标"，是会被一根 15px 滚动条击穿的硬约束。

### P-A2 Constraint Containment 约束包围
**陈述**：flex/grid 子项 `min-width:0`；可能溢出的根容器用 `overflow-x: clip` 而非 `hidden`（hidden 创建滚动容器 → 页面多出滚动条 → 高度变化 → 见 CASE-0001）。

### CASE-0001 · 横向滚动条的"高度税"引发整页 ±15px 弹跳
- **环境**：Windows 10/11 · Chrome 桌面版 · 页面缩放 50/80/90/100% 均可复现 · 单页静态站（内联 JS + CSS）
- **症状**：页面底部反复弹跳 ±15px；滚动监听日志里页面总高在两个值之间来回跳（如 1266 ↔ 1281）。
- **根因**：某元素在特定缩放下横向溢出几像素 → Windows 经典滚动条（占高度约 15px）闪现 → 视口高度被压掉 15px → 底部钳制逻辑"距底 N px"判定漂移 → 溢出又随高度变化消失 → 滚动条消失 → 高度恢复 → 循环振荡。
- **修复**：`html { overflow-x: clip }`——`clip` 不创建滚动容器，横向溢出被裁掉但不引入滚动条；sticky 与纵向滚动不受影响。`overflow-x: hidden` 在这里反而会制造新的滚动容器。
- **对应原则**：P-A1（该溢出本不该存在）、P-A2（clip 护栏）、P-G1（经典滚动条占位是常量必须预留）、P-F1（依赖 maxY 稳定的判定全部失效）。

### CASE-1001+ · 爬取案例
横向溢出类案例见 `cases/chunks/`（bucket: `overflow-scroll`）。

---

## B–C. Typography / Color 排版与色彩

（本组原则细则见 PURE.md；爬取案例 bucket：`font-typography`、`contrast-color`。）

### CASE-4764 · 路由切换瞬间整页裸奔（样式被过早移除）
- **环境**：Next.js 生产构建（dev 模式不复现！）· CSS Modules（styled-jsx 无此问题）
- **症状**：点击 `next/link` 后，旧页面的 CSS Module 样式被立即移除，而 DOM 还在——过渡期间整页无样式闪白。
- **根因**：样式移除时机绑定在"路由切换"而非"DOM 实际卸载"，生产构建的样式打包方式放大了时序差。
- **对应原则**：P-B3（样式/字体的加载与卸载策略不得引起视觉突变——这是 font-display 教训在样式维度的重现）、P-F4（生产与开发行为不一致=环境矩阵缺口）、P-G3（dev 复现不了的生产 bug 是最危险的一类）。

- P-B1 行长 45–75ch，先 measure 后栅格
- P-B2 clamp() 流式字号需验证两端换行
- P-B3 `font-display` + 度量兼容回退，字体加载不得引起 CLS
- P-C1 正文 4.5:1 / 大字与 UI 边界 3:1
- P-C2 状态不得仅靠颜色
- P-C3 暗色模式 = 令牌整体替换

---

## D. Motion 动效

### P-D4 No Scroll Hijacking 不劫持滚动（含"不信任内置平滑滚动"）

### CASE-0002 · 点击导航飞出几百像素（Chrome 151 原生平滑滚动失准）
- **环境**：Windows · Chrome 151 桌面版（同样代码在 iOS WebView / 微信 IAB / 手机浏览器全部正常）· 单页锚点导航
- **症状**：点击导航项后页面平滑滑行，落点比目标差 290–346px；用户视频里页面底部按钮（行程本应为 0）点击后反而向上飞 346px。
- **根因**：Chrome 151/Windows 对原生锚点平滑滚动（`scroll-behavior: smooth`）的落点计算失准，且随当前滚动位置变化——不是代码 bug，是引擎实现差异。
- **修复**：导航点击 `preventDefault` → JS 读取 computed `scroll-padding`/`scroll-margin` 计算目标 → 钳制后 `window.scrollTo` 瞬时跳转 + `history.pushState`；CSS 移除 `scroll-behavior: smooth`。瞬时跳转没有动画 = 没有失败面。
- **对应原则**：P-D4（关键导航不得依赖内置平滑滚动）、P-G3（只在桌面 Chrome 发生 = 必须真机验证）、P-G1（落点计算同样被滚动条占位影响）。

### CASE-4761 · 框架迁移击碎共享布局动画
- **环境**：Linux · Chromium 系浏览器 · React 18.2 + Next.js 13 App Router + Framer Motion（Pages Router 下同代码正常）
- **症状**：路由间共享布局动画（shared layout animation）迁移到 App Router 后完全失效。
- **根因**：动画库假设"路由切换时组件树连续存在"；App Router 的流式渲染与服务端组件改变了挂载时序，共享布局的前提被打破。
- **对应原则**：P-D1（动画状态必须可被路由与用户输入打断重建）、P-F5（动画状态与其生命周期契约绑定，换框架=换契约）、P-G3（框架迁移后动效必须真机回归）。

---

## E. Accessibility 无障碍

（细则见 PURE.md；爬取案例 bucket：`focus-a11y`，千余条——焦点丢失、trap 无出口、aria-live 缺失是最高频的三类。）

---

## F. State & Feedback 状态与反馈

### P-F1 Viewport Metrics Are Not Constant 视口度量非常量

### CASE-0003 · scroll-spy 末端"方向漏洞"导致高亮随机翻转
- **环境**：同 CASE-0001 站点 · 任何浏览器 · 页面末端两个 section（Now / Contact）都接近视口
- **症状**：滚轮小步滚动时高亮在两个 section 间随机翻转；±8px 随机游走仿真即可触发。
- **根因**：末端保持带用 `!down` 判方向——向下滚 121~240px 区间内每一步都会把"保持"翻走；保持带只有单侧阈值，没有双向滞回，噪声必然穿越阈值。
- **修复**：方向无关滞回（进入带 120px / 退出带 240px）+ HYST 12→16 + mousedown 期间释放 override；且所有"距底 N px"判定不再假设 `maxY` 恒定（滚动条税会让 maxY 漂移 ±15px，见 CASE-0001）。
- **对应原则**：P-F1（单点阈值在噪声环境必然振荡 → 带宽+滞回）、P-F5（监听回调读取的位置状态需过期检查）、P-G1。

### CASE-4756 · SSR 属性不匹配：`Warning: Prop className did not match`（780👍 的经典）
- **环境**：Windows · Chrome · Next.js + styled-components v4 的 `css` prop
- **症状**：服务端渲染输出的 class 与客户端首帧计算出的 class 不一致，每次水合控制台告警、样式闪烁。
- **根因**：客户端才知道的值（运行时插入的 class、随机 id、时间戳）参与首次渲染——服务端永远算不出一样的结果。
- **对应原则**：P-F4（渲染一致性：任何依赖浏览器环境的值必须延迟到 effect 中产生，或用确定性的 id 生成方案）。

---

## G. Environment Resilience 环境韧性

### P-G2 Occlusion Is a State 遮挡是一种状态

### CASE-0004 · 内嵌浏览器遮挡时渲染冻结、事件停发
- **环境**：App 内 WebView（Electron 壳 / 移动 IAB）· 页面含 scroll 驱动的 UI
- **症状**：窗口被遮挡/切走再回来后，scroll 事件不派发、定时器冻结；页面像死了一样，直到有强制产帧的动作（录屏/截图）才恢复。
- **根因**：IAB/Electron 对遮挡窗口停发事件、冻结 rAF 与定时器——恢复后 `performance.now()` 时间线出现大跳跃，依赖连续时间/连续事件的逻辑全部失真。
- **教训与规则**：可见性恢复逻辑必须容忍时间跳跃（不要比较"距上次 scroll 的间隔"做判定）；后台任务挂 `visibilitychange` 显式暂停/恢复；调试时可强制产帧确认是"冻结"而不是"死循环"。
- **对应原则**：P-G2、P-F1（时间也是一种"度量"，同样非常量）、P-G3（无头环境复现不了遮挡，必须真机）。

### P-G3 Real Device, Real Zoom 真机真缩放
本仓库三次"无头全绿但真机故障"（CASE-0001/0002/0004）的共同教训：**关键交互必须在用户真实浏览器 + 全缩放档位验证；主观视觉报告 + 真实环境复现 > 采样数据推断。**

### CASE-9121 · Source Map 在特定浏览器失效，调试武器被缴械
- **环境**：Chrome + webpack（多引擎项目）
- **症状**：断点与报错位置全部对不上源码；作者分不清是打包器、浏览器还是自己的配置问题。
- **教训**：调试基础设施本身也有浏览器兼容矩阵——`devtool` 模式 × 浏览器 × 压缩组合必须真机验证，否则生产事故时你恰好没有眼睛。
- **对应原则**：P-G3（真机真缩放原则同样适用于"可调试性"）、P-H1（可调试性是性能预算的一部分：修不了的性能问题等于没有性能预算）。

---

## H. Performance & Perception 性能与感知

（细则见 PURE.md；爬取案例 bucket：`layout-perf`、`race-state`、`media-cls`——其中 media-cls 是全库最大症状桶，占总量四分之一：图片/视频/iframe 未预留空间导致的布局位移是当代网页第一高发病。）

---

## 双向索引说明

```
原则 (P-A1…P-H3)  ⇄  bug 桶 (overflow-scroll, race-state, …)  ⇄  案例 (CASE-0001, CASE-1001…)
```

- **从原则找案例**：本文件 / `data/index.json` 的 `principles` 映射。
- **从 bug 找原则**：[cases/BUG-INDEX.md](../cases/BUG-INDEX.md)（按症状分桶，每桶列出映射原则与案例编号）。
- **机器可读**：`data/index.json`（双向）+ `data/cases.jsonl`（全量案例）。
