# Pure Principles — 纯净原则版

> 31 条可直接执行的设计原则。每条 = 一句陈述 + 一句执行规则。
> 带真实案例的讲解版见 [WITH-CASES.md](./WITH-CASES.md)；按 bug 症状反查原则见 [../cases/BUG-INDEX.md](../cases/BUG-INDEX.md)。
>
> **ID 规则**：`P-<组><序号>`。组：A 布局 / B 排版 / C 色彩 / D 动效 / E 无障碍 / F 状态 / G 环境韧性 / H 性能。
> 版本：v1（2026-09-05，由 5 类经典原则体系 + 实战 bug 溯源综合而成，灵感来源见 README 末尾 Sources）

---

## A. Layout & Reflow 布局与回流

| ID | Principle | Rule |
|----|-----------|------|
| P-A1 | **Reflow Guarantee 重排保证** | 页面在 320px 宽至 400% 缩放的任意组合下不得出现水平滚动（WCAG 1.4.10 AA） |
| P-A2 | **Constraint Containment 约束包围** | 每个 flex/grid 子项显式声明 `min-width:0`；任何可能溢出的容器声明 `overflow-x: clip`（不是 hidden——hidden 会创建滚动容器并改变页面高度） |
| P-A3 | **Intrinsic Size Discipline 固有尺寸纪律** | 每张图片/视频/iframe 必须预留空间（`width`/`height`/`aspect-ratio`），加载不得引起布局位移 |
| P-A4 | **Tokenized Sizing 令牌化尺寸** | 间距、圆角、z-index、断点一律来自设计令牌，禁止魔法数字——换行计算与层叠规则依赖值域可预测 |
| P-A5 | **Stacking Discipline 层叠纪律** | 不依赖隐式层叠顺序：需要置顶的元素显式建立 stacking context，z-index 使用令牌刻度（如 10/20/30）而非随手写 999 |

## B. Typography 排版

| ID | Principle | Rule |
|----|-----------|------|
| P-B1 | **Readable Measure 可读行长** | 正文行长控制在 45–75 字符；先定 measure 再冻结栅格 |
| P-B2 | **Fluid Type with Fallback 流式字号带回退** | `clamp()` 流式标题，但必须验证小屏/大屏两端的换行不溢出 |
| P-B3 | **Font Loading Strategy 字体加载策略** | 网络字体必须声明 `font-display` + 度量兼容回退字体，加载过程不得引起 CLS |

## C. Color & Contrast 色彩与对比

| ID | Principle | Rule |
|----|-----------|------|
| P-C1 | **Contrast Floor 对比度下限** | 正文 ≥ 4.5:1，大字号与 UI 组件边界 ≥ 3:1（WCAG 1.4.3 / 1.4.11） |
| P-C2 | **Never Color Alone 不单靠颜色** | 状态（错误/成功/禁用）必须同时有图标或文字，不得仅用颜色区分（WCAG 1.4.1） |
| P-C3 | **Theme as Token Swap 主题即令牌切换** | 暗色模式 = 语义令牌整体替换，不是逐个改色；两个主题都要过对比度检查 |

## D. Motion 动效

| ID | Principle | Rule |
|----|-----------|------|
| P-D1 | **Interruptible First 动效可打断** | 任何动画必须能被用户输入立即打断——用户永远比动画优先 |
| P-D2 | **Respect Reduced Motion 尊重减少动效** | 非必要动效必须响应 `prefers-reduced-motion`，降级为瞬变 |
| P-D3 | **Compositor-Only 合成器专属** | 只动画 `transform` / `opacity`；动画布局属性（width/top/margin）即动画用户的掉帧 |
| P-D4 | **No Scroll Hijacking 不劫持滚动** | 滚动驱动的动效不得抢占滚轮/触摸控制；关键导航不得依赖浏览器内置平滑滚动（不同引擎实现差异大） |

## E. Accessibility 无障碍

| ID | Principle | Rule |
|----|-----------|------|
| P-E1 | **Focus Visible & Managed 焦点可见且受控** | 焦点永远可见（WCAG 2.4.7）；焦点陷阱只允许出现在模态中且必须有出口 |
| P-E2 | **Semantic First 语义优先** | 先用原生元素（button/nav/table），ARIA 是最后手段 |
| P-E3 | **Hit Target 命中目标** | 可点击目标 ≥ 24×24px（WCAG 2.5.8 AA），移动端推荐 44×44 |
| P-E4 | **Announce State Changes 播报状态变化** | 动态内容更新（toast/异步结果/实时高亮）通过 `aria-live` 播报 |

## F. State & Feedback 状态与反馈

| ID | Principle | Rule |
|----|-----------|------|
| P-F1 | **Viewport Metrics Are Not Constant 视口度量非常量** | 滚动/位置判定逻辑不得假设 `innerHeight`/`maxY` 等度量稳定——滚动条出现/消失会移动它们。用带宽 ≥ 阈值 + 双向滞回（hysteresis），不用单点阈值 |
| P-F2 | **Optimistic with Recovery 乐观更新可回滚** | 乐观 UI 必须配失败回滚路径，用户不会卡在假成功态 |
| P-F3 | **Skeleton ≥ Spinner 骨架优先** | 加载用骨架屏保持布局，不用 spinner 让内容区塌陷 |
| P-F4 | **Render Parity 渲染一致性** | SSR 输出与客户端首次渲染必须逐字节一致；任何依赖浏览器环境的值（宽度/随机/时间）延迟到 effect 中再产生 |
| P-F5 | **Listener Hygiene 监听器卫生** | 每个事件监听器与拥有它的生命周期绑定；高频回调读取的状态一律通过 ref/闭包检查是否过期（stale state guard） |

## G. Environment Resilience 环境韧性

| ID | Principle | Rule |
|----|-----------|------|
| P-G1 | **Scrollbar Modes Differ 滚动条模式因平台而异** | Overlay（macOS/移动）与 Classic（Windows/Linux，占 ~15px 宽/高）滚动条并存——设计必须兼容两者，且任何交互不得引发滚动条出现→消失的振荡 |
| P-G2 | **Occlusion Is a State 遮挡是一种状态** | WebView/内嵌浏览器（IAB、Electron）在遮挡时冻结 rAF/定时器/滚动事件——可见性恢复逻辑必须容忍时间跳跃 |
| P-G3 | **Real Device, Real Zoom 真机真缩放** | 无头全绿 ≠ 上线正确；关键交互必须在真实浏览器 + 50/67/80/90/100/110% 缩放档位验证 |
| P-G4 | **Keyboard Resizes 视觉视口会变** | 移动端软键盘弹起压缩 `visualViewport`——输入框、fixed 底栏必须响应 `visualViewport` 事件而非假设布局稳定 |

## H. Performance & Perception 性能与感知

| ID | Principle | Rule |
|----|-----------|------|
| P-H1 | **Perception Budgets 感知预算** | LCP < 2.5s、INP < 200ms、CLS < 0.1——超预算的功能先修性能再加 |
| P-H2 | **No Layout Thrash 布局抖动归零** | 同一帧内的 DOM 读操作（getBoundingClientRect 等）与写操作分组批量，读-写-读交替即掉帧 |
| P-H3 | **Throttle High-Frequency Events 高频事件节流** | scroll/resize/mousemove 回调一律 rAF 节流或 passive 监听，回调内不做布局读写 |

---

### 使用方式 Usage

- **Code review**：按组过表，每条规则都是可判定的 check 项。
- **Bug 归因**：线上 bug 出现后，按症状在 [BUG-INDEX.md](../cases/BUG-INDEX.md) 找桶 → 得到候选原则 → 读案例学环境。
- **AI agent**：本文件是纯规则形态，可直接作为 prompt/Cursor rule 素材；案例形态见 WITH-CASES.md。
