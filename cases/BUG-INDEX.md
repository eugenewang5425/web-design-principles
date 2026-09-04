# Bug Index — 按 bug 症状反查设计原则 / Symptom → Principle

> 用法：拿着线上 bug 的**症状关键词**找到桶 → 桶内给出候选原则（[PURE.md](../principles/PURE.md)）与案例编号 → 到 chunk 文件读案例与环境。
> 反方向（原则 → 案例）见 [WITH-CASES.md](../principles/WITH-CASES.md) 与 [data/index.json](../data/index.json)。

Total cases: **200** · Rounds: **2** · Updated: 2026-09-05

### overflow-scroll · Overflow & Scrollbars 溢出与滚动条
- **Principles**: [P-A1](../principles/PURE.md#p-a1) [P-A2](../principles/PURE.md#p-a2) [P-G1](../principles/PURE.md#p-g1) [P-F1](../principles/PURE.md#p-f1) · **4 cases**
- **Cases**: CASE-1127, CASE-1161, CASE-1176, CASE-1199

### stacking-zindex · Stacking & Occlusion 层叠与遮挡
- **Principles**: [P-A5](../principles/PURE.md#p-a5) · **3 cases**
- **Cases**: CASE-1094, CASE-1138, CASE-1155

### responsive-viewport · Responsive & Viewport 响应式与视口
- **Principles**: [P-A1](../principles/PURE.md#p-a1) [P-A4](../principles/PURE.md#p-a4) [P-G3](../principles/PURE.md#p-g3) · **6 cases**
- **Cases**: CASE-1001, CASE-1024, CASE-1032, CASE-1112, CASE-1120, CASE-1189

### browser-quirk · Browser / Platform Quirk 浏览器与平台差异
- **Principles**: [P-G1](../principles/PURE.md#p-g1) [P-G2](../principles/PURE.md#p-g2) [P-G3](../principles/PURE.md#p-g3) · **67 cases**
- **Cases**: CASE-1001, CASE-1004, CASE-1005, CASE-1012, CASE-1014, CASE-1019, CASE-1021, CASE-1022, CASE-1023, CASE-1031, CASE-1033, CASE-1034, CASE-1035, CASE-1037, CASE-1038, CASE-1039, CASE-1040, CASE-1041, CASE-1042, CASE-1045, CASE-1046, CASE-1048, CASE-1052, CASE-1055, CASE-1060, CASE-1061, CASE-1062, CASE-1064, CASE-1065, CASE-1066 … +37 more (see chunks)

### animation-motion · Animation & Motion 动效
- **Principles**: [P-D1](../principles/PURE.md#p-d1) [P-D2](../principles/PURE.md#p-d2) [P-D3](../principles/PURE.md#p-d3) · **13 cases**
- **Cases**: CASE-1010, CASE-1025, CASE-1028, CASE-1070, CASE-1077, CASE-1088, CASE-1089, CASE-1096, CASE-1112, CASE-1118, CASE-1137, CASE-1146, CASE-1193

### scroll-behavior · Scroll Behavior 滚动行为
- **Principles**: [P-D4](../principles/PURE.md#p-d4) [P-F1](../principles/PURE.md#p-f1) [P-F5](../principles/PURE.md#p-f5) · **3 cases**
- **Cases**: CASE-1039, CASE-1044, CASE-1139

### focus-a11y · Focus & Accessibility 焦点与无障碍
- **Principles**: [P-E1](../principles/PURE.md#p-e1) [P-E2](../principles/PURE.md#p-e2) [P-E4](../principles/PURE.md#p-e4) · **20 cases**
- **Cases**: CASE-1016, CASE-1018, CASE-1036, CASE-1050, CASE-1064, CASE-1075, CASE-1079, CASE-1103, CASE-1105, CASE-1108, CASE-1117, CASE-1129, CASE-1135, CASE-1140, CASE-1145, CASE-1152, CASE-1157, CASE-1166, CASE-1171, CASE-1180

### contrast-color · Contrast & Color Themes 色彩对比与主题
- **Principles**: [P-C1](../principles/PURE.md#p-c1) [P-C2](../principles/PURE.md#p-c2) [P-C3](../principles/PURE.md#p-c3) · **1 cases**
- **Cases**: CASE-1182

### font-typography · Fonts & Typography 字体与排版
- **Principles**: [P-B1](../principles/PURE.md#p-b1) [P-B2](../principles/PURE.md#p-b2) [P-B3](../principles/PURE.md#p-b3) · **2 cases**
- **Cases**: CASE-1061, CASE-1167

### media-cls · Media & CLS 媒体与布局位移
- **Principles**: [P-A3](../principles/PURE.md#p-a3) [P-H1](../principles/PURE.md#p-h1) · **43 cases**
- **Cases**: CASE-1002, CASE-1003, CASE-1006, CASE-1007, CASE-1008, CASE-1012, CASE-1020, CASE-1022, CASE-1030, CASE-1047, CASE-1049, CASE-1052, CASE-1054, CASE-1066, CASE-1075, CASE-1082, CASE-1084, CASE-1095, CASE-1101, CASE-1106, CASE-1119, CASE-1122, CASE-1124, CASE-1129, CASE-1131, CASE-1133, CASE-1144, CASE-1147, CASE-1148, CASE-1154 … +13 more (see chunks)

### ssr-hydration · SSR & Hydration 服务端渲染与水合
- **Principles**: [P-F4](../principles/PURE.md#p-f4) · **17 cases**
- **Cases**: CASE-1008, CASE-1024, CASE-1043, CASE-1051, CASE-1068, CASE-1071, CASE-1078, CASE-1081, CASE-1093, CASE-1097, CASE-1116, CASE-1121, CASE-1134, CASE-1158, CASE-1180, CASE-1185, CASE-1186

### race-state · Race & Listeners 竞态与监听器
- **Principles**: [P-F5](../principles/PURE.md#p-f5) [P-H3](../principles/PURE.md#p-h3) · **26 cases**
- **Cases**: CASE-1057, CASE-1058, CASE-1060, CASE-1067, CASE-1072, CASE-1074, CASE-1080, CASE-1085, CASE-1099, CASE-1102, CASE-1111, CASE-1113, CASE-1126, CASE-1141, CASE-1143, CASE-1144, CASE-1149, CASE-1153, CASE-1157, CASE-1166, CASE-1168, CASE-1170, CASE-1179, CASE-1191, CASE-1194, CASE-1200

### layout-perf · Layout Performance 布局性能
- **Principles**: [P-H2](../principles/PURE.md#p-h2) [P-H3](../principles/PURE.md#p-h3) · **1 cases**
- **Cases**: CASE-1130

### form-input · Forms & Mobile Input 表单与移动输入
- **Principles**: [P-G4](../principles/PURE.md#p-g4) [P-E3](../principles/PURE.md#p-e3) · **53 cases**
- **Cases**: CASE-1005, CASE-1009, CASE-1011, CASE-1013, CASE-1015, CASE-1017, CASE-1018, CASE-1021, CASE-1026, CASE-1027, CASE-1029, CASE-1045, CASE-1050, CASE-1053, CASE-1056, CASE-1059, CASE-1063, CASE-1064, CASE-1069, CASE-1070, CASE-1073, CASE-1076, CASE-1085, CASE-1086, CASE-1087, CASE-1088, CASE-1090, CASE-1091, CASE-1097, CASE-1104 … +23 more (see chunks)

