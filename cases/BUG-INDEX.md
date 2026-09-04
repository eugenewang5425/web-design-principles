# Bug Index — 按 bug 症状反查设计原则 / Symptom → Principle

> 用法：拿着线上 bug 的**症状关键词**找到桶 → 桶内给出候选原则（[PURE.md](../principles/PURE.md)）与案例编号 → 到 chunk 文件读案例与环境。
> 反方向（原则 → 案例）见 [WITH-CASES.md](../principles/WITH-CASES.md) 与 [data/index.json](../data/index.json)。

Total cases: **5200** · Rounds: **52** · Updated: 2026-09-05

### overflow-scroll · Overflow & Scrollbars 溢出与滚动条
- **Principles**: [P-A1](../principles/PURE.md#p-a1) [P-A2](../principles/PURE.md#p-a2) [P-G1](../principles/PURE.md#p-g1) [P-F1](../principles/PURE.md#p-f1) · **74 cases**
- **Cases**: CASE-1127, CASE-1161, CASE-1176, CASE-1199, CASE-1430, CASE-1469, CASE-1507, CASE-1517, CASE-1522, CASE-1675, CASE-2113, CASE-2176, CASE-2252, CASE-2270, CASE-2296, CASE-2319, CASE-2402, CASE-2407, CASE-2446, CASE-2486, CASE-2531, CASE-2604, CASE-2664, CASE-2668, CASE-2719, CASE-2720, CASE-2800, CASE-2837, CASE-2843, CASE-2874 … +44 more (see chunks)

### stacking-zindex · Stacking & Occlusion 层叠与遮挡
- **Principles**: [P-A5](../principles/PURE.md#p-a5) · **43 cases**
- **Cases**: CASE-1094, CASE-1138, CASE-1155, CASE-1302, CASE-1507, CASE-1646, CASE-1699, CASE-1899, CASE-1944, CASE-2004, CASE-2318, CASE-2442, CASE-2457, CASE-2476, CASE-2544, CASE-2606, CASE-2773, CASE-2846, CASE-2906, CASE-2931, CASE-3025, CASE-3145, CASE-3260, CASE-3289, CASE-3570, CASE-3780, CASE-3789, CASE-3819, CASE-3954, CASE-4003 … +13 more (see chunks)

### flex-grid · Flex & Grid Layout 弹性与栅格布局
- **Principles**: [P-A2](../principles/PURE.md#p-a2) [P-A4](../principles/PURE.md#p-a4) · **26 cases**
- **Cases**: CASE-1357, CASE-1496, CASE-2068, CASE-2103, CASE-2107, CASE-2188, CASE-2446, CASE-2462, CASE-2465, CASE-2611, CASE-2693, CASE-3030, CASE-3100, CASE-3513, CASE-3574, CASE-4104, CASE-4263, CASE-4319, CASE-4367, CASE-4439, CASE-4498, CASE-4705, CASE-4965, CASE-5176, CASE-5584, CASE-5973

### responsive-viewport · Responsive & Viewport 响应式与视口
- **Principles**: [P-A1](../principles/PURE.md#p-a1) [P-A4](../principles/PURE.md#p-a4) [P-G3](../principles/PURE.md#p-g3) · **100 cases**
- **Cases**: CASE-1001, CASE-1024, CASE-1032, CASE-1112, CASE-1120, CASE-1189, CASE-1271, CASE-1296, CASE-1298, CASE-1299, CASE-1326, CASE-1368, CASE-1429, CASE-1460, CASE-1503, CASE-1557, CASE-1563, CASE-1811, CASE-1828, CASE-1829, CASE-1852, CASE-1896, CASE-1916, CASE-1927, CASE-1951, CASE-1988, CASE-2087, CASE-2102, CASE-2137, CASE-2156 … +70 more (see chunks)

### browser-quirk · Browser / Platform Quirk 浏览器与平台差异
- **Principles**: [P-G1](../principles/PURE.md#p-g1) [P-G2](../principles/PURE.md#p-g2) [P-G3](../principles/PURE.md#p-g3) · **1354 cases**
- **Cases**: CASE-1001, CASE-1004, CASE-1005, CASE-1012, CASE-1014, CASE-1019, CASE-1021, CASE-1022, CASE-1023, CASE-1031, CASE-1033, CASE-1034, CASE-1035, CASE-1037, CASE-1038, CASE-1039, CASE-1040, CASE-1041, CASE-1042, CASE-1045, CASE-1046, CASE-1048, CASE-1052, CASE-1055, CASE-1060, CASE-1061, CASE-1062, CASE-1064, CASE-1065, CASE-1066 … +1324 more (see chunks)

### animation-motion · Animation & Motion 动效
- **Principles**: [P-D1](../principles/PURE.md#p-d1) [P-D2](../principles/PURE.md#p-d2) [P-D3](../principles/PURE.md#p-d3) · **583 cases**
- **Cases**: CASE-1010, CASE-1025, CASE-1028, CASE-1070, CASE-1077, CASE-1088, CASE-1089, CASE-1096, CASE-1112, CASE-1118, CASE-1137, CASE-1146, CASE-1193, CASE-1201, CASE-1229, CASE-1234, CASE-1236, CASE-1241, CASE-1279, CASE-1330, CASE-1359, CASE-1377, CASE-1426, CASE-1451, CASE-1463, CASE-1468, CASE-1502, CASE-1518, CASE-1535, CASE-1540 … +553 more (see chunks)

### scroll-behavior · Scroll Behavior 滚动行为
- **Principles**: [P-D4](../principles/PURE.md#p-d4) [P-F1](../principles/PURE.md#p-f1) [P-F5](../principles/PURE.md#p-f5) · **22 cases**
- **Cases**: CASE-1039, CASE-1044, CASE-1139, CASE-1295, CASE-1395, CASE-1410, CASE-1563, CASE-1638, CASE-2725, CASE-2966, CASE-3095, CASE-3268, CASE-3748, CASE-3925, CASE-3951, CASE-4306, CASE-4685, CASE-5215, CASE-5656, CASE-5855, CASE-5939, CASE-6075

### focus-a11y · Focus & Accessibility 焦点与无障碍
- **Principles**: [P-E1](../principles/PURE.md#p-e1) [P-E2](../principles/PURE.md#p-e2) [P-E4](../principles/PURE.md#p-e4) · **673 cases**
- **Cases**: CASE-1016, CASE-1018, CASE-1036, CASE-1050, CASE-1064, CASE-1075, CASE-1079, CASE-1103, CASE-1105, CASE-1108, CASE-1117, CASE-1129, CASE-1135, CASE-1140, CASE-1145, CASE-1152, CASE-1157, CASE-1166, CASE-1171, CASE-1180, CASE-1207, CASE-1208, CASE-1216, CASE-1230, CASE-1233, CASE-1240, CASE-1246, CASE-1263, CASE-1267, CASE-1274 … +643 more (see chunks)

### contrast-color · Contrast & Color Themes 色彩对比与主题
- **Principles**: [P-C1](../principles/PURE.md#p-c1) [P-C2](../principles/PURE.md#p-c2) [P-C3](../principles/PURE.md#p-c3) · **43 cases**
- **Cases**: CASE-1182, CASE-1333, CASE-1469, CASE-1554, CASE-1622, CASE-1909, CASE-1967, CASE-2075, CASE-2232, CASE-2602, CASE-2909, CASE-3028, CASE-3057, CASE-3125, CASE-3452, CASE-3462, CASE-3629, CASE-3788, CASE-3962, CASE-3977, CASE-3978, CASE-3983, CASE-4148, CASE-4317, CASE-4359, CASE-4395, CASE-4410, CASE-4449, CASE-4477, CASE-4553 … +13 more (see chunks)

### font-typography · Fonts & Typography 字体与排版
- **Principles**: [P-B1](../principles/PURE.md#p-b1) [P-B2](../principles/PURE.md#p-b2) [P-B3](../principles/PURE.md#p-b3) · **90 cases**
- **Cases**: CASE-1061, CASE-1167, CASE-1354, CASE-1372, CASE-1599, CASE-2068, CASE-2152, CASE-2252, CASE-2374, CASE-2417, CASE-2455, CASE-2516, CASE-2598, CASE-2604, CASE-2610, CASE-2710, CASE-2731, CASE-2865, CASE-2904, CASE-2911, CASE-2983, CASE-3101, CASE-3104, CASE-3442, CASE-3462, CASE-3562, CASE-3773, CASE-3977, CASE-3986, CASE-4308 … +60 more (see chunks)

### media-cls · Media & CLS 媒体与布局位移
- **Principles**: [P-A3](../principles/PURE.md#p-a3) [P-H1](../principles/PURE.md#p-h1) · **1325 cases**
- **Cases**: CASE-1002, CASE-1003, CASE-1006, CASE-1007, CASE-1008, CASE-1012, CASE-1020, CASE-1022, CASE-1030, CASE-1047, CASE-1049, CASE-1052, CASE-1054, CASE-1066, CASE-1075, CASE-1082, CASE-1084, CASE-1095, CASE-1101, CASE-1106, CASE-1119, CASE-1122, CASE-1124, CASE-1129, CASE-1131, CASE-1133, CASE-1144, CASE-1147, CASE-1148, CASE-1154 … +1295 more (see chunks)

### ssr-hydration · SSR & Hydration 服务端渲染与水合
- **Principles**: [P-F4](../principles/PURE.md#p-f4) · **874 cases**
- **Cases**: CASE-1008, CASE-1024, CASE-1043, CASE-1051, CASE-1068, CASE-1071, CASE-1078, CASE-1081, CASE-1093, CASE-1097, CASE-1116, CASE-1121, CASE-1134, CASE-1158, CASE-1180, CASE-1185, CASE-1186, CASE-1212, CASE-1217, CASE-1223, CASE-1253, CASE-1258, CASE-1278, CASE-1288, CASE-1290, CASE-1302, CASE-1307, CASE-1308, CASE-1309, CASE-1312 … +844 more (see chunks)

### race-state · Race & Listeners 竞态与监听器
- **Principles**: [P-F5](../principles/PURE.md#p-f5) [P-H3](../principles/PURE.md#p-h3) · **434 cases**
- **Cases**: CASE-1057, CASE-1058, CASE-1060, CASE-1067, CASE-1072, CASE-1074, CASE-1080, CASE-1085, CASE-1099, CASE-1102, CASE-1111, CASE-1113, CASE-1126, CASE-1141, CASE-1143, CASE-1144, CASE-1149, CASE-1153, CASE-1157, CASE-1166, CASE-1168, CASE-1170, CASE-1179, CASE-1191, CASE-1194, CASE-1200, CASE-1202, CASE-1210, CASE-1211, CASE-1216 … +404 more (see chunks)

### layout-perf · Layout Performance 布局性能
- **Principles**: [P-H2](../principles/PURE.md#p-h2) [P-H3](../principles/PURE.md#p-h3) · **12 cases**
- **Cases**: CASE-1130, CASE-1222, CASE-1592, CASE-1609, CASE-1612, CASE-1621, CASE-2250, CASE-2300, CASE-2381, CASE-3450, CASE-3587, CASE-4013

### form-input · Forms & Mobile Input 表单与移动输入
- **Principles**: [P-G4](../principles/PURE.md#p-g4) [P-E3](../principles/PURE.md#p-e3) · **1018 cases**
- **Cases**: CASE-1005, CASE-1009, CASE-1011, CASE-1013, CASE-1015, CASE-1017, CASE-1018, CASE-1021, CASE-1026, CASE-1027, CASE-1029, CASE-1045, CASE-1050, CASE-1053, CASE-1056, CASE-1059, CASE-1063, CASE-1064, CASE-1069, CASE-1070, CASE-1073, CASE-1076, CASE-1085, CASE-1086, CASE-1087, CASE-1088, CASE-1090, CASE-1091, CASE-1097, CASE-1104 … +988 more (see chunks)

