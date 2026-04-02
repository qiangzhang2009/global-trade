# Design System — TradeRoot (全球贸易导航)

## Product Context

- **What this is:** 一棵树形导航网站，帮助中国企业在全球233个国家/地区中找到官方采购、B2B平台、代理分销网络。核心交互是"像翻阅地图一样"的多级展开树导航。
- **Who it's for:** 中国出海企业 — 制造业出口商、外贸业务员、海外市场拓展经理。专业、时间敏感、目标导向。
- **Space/industry:** B2B渠道导航 / 全球贸易撮合工具 / 外贸获客平台
- **Project type:** 单页Web应用 (SPA) — 以导航树为核心，辅以搜索、筛选、卡片展示

---

## Aesthetic Direction

- **Direction:** "Earth Observatory" — 地理图册 + 航海罗盘 + 数据终端的融合。像一张世界地图的精密工作台，深邃而值得信赖。
- **Decoration level:** Intentional — 有质感的背景层次、精致的边框、微妙的发光效果，但不是过度装饰
- **Mood:** 深邃、专业、可信赖。像Bloomberg Terminal + National Geographic Atlas的视觉交汇——数据丰富但不混乱，地图感强但不过时。
- **Reference sites:** N/A — 从设计知识构建，无竞争产品参考

**Safe choices (品类基准 — 用户期待这些):**
- 深色模式为主（专业工具的默认感知）
- 清晰的信息层次（卡片、树、搜索三足鼎立）
- 明确的渠道分类徽章（蓝/绿/橙/紫四色语义）
- 悬停状态清晰（提升可发现性）

**Risks (让产品脱颖而出的地方):**
- 树形导航作为第一交互范式（竞品多为平面列表）→ 体验区隔极强
- Instrument Serif衬线标题（大多数B2B工具用无衬线）→ 品牌感、权威感更强
- 深邃深色主题 + 琥珀/青绿点缀（区别于纯蓝/紫色的常规SaaS）→ 地理感、博物感
- 浅色模式使用暖色调（区别于冷灰）→ 亲和力、地域温度感

---

## Typography

- **Display/Hero:** Instrument Serif (Google Fonts) — 衬线显示字体，优雅权威，与B2B工具的无衬线主流形成对比
- **Body:** DM Sans (Google Fonts) — 柔和中性，支持全套字重300-700，多语言字符集完整，与Instrument Serif形成经典搭配
- **UI/Labels:** DM Sans 500-600 — 与Body同源，保持视觉一致性
- **Data/Tables:** JetBrains Mono (Google Fonts) — 等宽字体处理URL、徽章标签、数字统计数值
- **CJK/中文:** 系统默认思源字体 — 大陆用户不加载额外字体包，确保中英文混排和谐
- **Loading:** 系统字体栈作为后备
- **Scale:**
  - Hero: 72px / 60px / 48px (clamp)
  - H1: 36px / 32px
  - H2: 28px / 24px
  - H3: 20px / 18px
  - Body: 16px / 15px
  - Small: 14px
  - Caption: 12px / 11px / 10px

---

## Color

- **Approach:** Balanced with semantic channel-type accents
- **Background:**
  - `--bg-primary: #0b0f19` (深空) — 最深色层，主背景
  - `--bg-secondary: #111827` — 次级面板
  - `--bg-tertiary: #1a2235` — 卡片悬停/树节点背景
  - `--bg-card: #141c2e` — 卡片默认
  - `--bg-input: #0f1623` — 输入框
- **Borders:**
  - `--border-subtle: #1e2d45` — 细线，最低调分隔
  - `--border-default: #243450` — 组件边框
  - `--border-strong: #2e4060` — 强交互边框
- **Text:**
  - `--text-primary: #f0ede8` — 暖白主文字（区别于纯#fff）
  - `--text-secondary: #9ca3b4` — 次级文字
  - `--text-tertiary: #5c6478` — 最小/辅助文字
- **Accent — Channel Types:**
  - **Official/Government (官方):** Blue — `#3b82f6` (亮) / `#60a5fa` (浅) — 权威、信任、官方
  - **B2B Platforms (B2B平台):** Green — `#10b981` (亮) / `#34d399` (浅) — 商业、增长、活跃
  - **Distribution/Agent (代理分销):** Amber — `#f59e0b` (亮) / `#fbbf24` (浅) — 撮合、连接、机会
  - **Cross-border Platform (跨境平台):** Purple — `#8b5cf6` (亮) / `#a78bfa` (浅) — 国际、跨境、聚合
  - **Accent/Highlight:** Teal — `#14b8a6` / `#2dd4bf` — 用于状态、链接、微妙强调
- **Light Mode (浅色模式):**
  - `--bg-primary: #faf8f5` — 暖白纸张感背景
  - `--bg-secondary: #f2ede6` — 暖灰次级
  - `--bg-card: #ffffff` — 白色卡片
  - 保留语义色彩，但降低饱和度10-15%

---

## Spacing

- **Base unit:** 8px
- **Density:** Comfortable — 为数据密集型导航提供呼吸感，但不过于稀疏
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96)

---

## Layout

- **Approach:** Grid-disciplined with sidebar-tree + content-panel split
- **Main Layout:** 两栏结构
  - 左侧：可折叠树形导航栏 (260px min, 响应式隐藏/滑出)
  - 右侧：内容区域 (卡片网格 + 详情面板)
- **Global Elements:**
  - Sticky header (64px height, backdrop-blur)
  - Global search bar (hero area + sticky header compact version)
  - Stats bar (global coverage numbers)
- **Max content width:** 1440px
- **Breakpoints:** 480px / 768px / 1024px / 1280px / 1440px
- **Border radius:** hierarchical — xs:4px / sm:6px / md:10px / lg:16px / xl:24px / full:9999px
- **Container padding:** 40px desktop / 20px mobile

---

## Motion

- **Approach:** Intentional — 只在有意义的地方使用动画，不是装饰性
- **Easing:**
  - enter: cubic-bezier(0, 0, 0.2, 1) — ease-out，进场流畅
  - exit: cubic-bezier(0.4, 0, 1, 1) — ease-in，退场干脆
  - move: cubic-bezier(0.4, 0, 0.2, 1) — ease-in-out，位移平滑
- **Duration:**
  - micro: 50-100ms — 按钮状态切换
  - short: 150-200ms — 悬停效果、徽章切换
  - medium: 250-350ms — 面板展开、过滤器切换
  - long: 400-600ms — 页面级动画、模态
- **Tree animations:**
  - 展开/折叠: height + opacity, 250ms ease
  - 节点激活: background-color, 150ms
  - 内容切换: opacity + translateY, 200ms
- **Entrance animations:**
  - fadeInUp (opacity 0→1, translateY 12px→0, 400ms)
  - Staggered delays: 100ms between items
- **Skeleton loading:** shimmer gradient, 1.5s infinite

---

## Component Inventory

### Channel Card
- States: default / hover / active / loading
- Shows: icon, badge (type), name, description, URL, arrow
- Hover: translateY(-2px) + shadow + arrow slide

### Tree Node
- States: collapsed / expanded / active / hover
- Shows: expand icon, region flag/icon, label, count
- Expand: rotate 90deg icon, slideDown children

### Search Bar
- States: default / focused / has-value
- Global: 56px height, large, prominent in hero
- Compact: 44px height, in sticky header

### Filter Pills
- States: default / active / hover
- Multi-select within groups
- Color shifts when active (dim bg → accent border)

### Breadcrumb
- Shows: continent › region › country › channel type
- Clickable ancestors
- Current item non-clickable

### Stats Bar
- Animated counters on scroll-into-view
- Gradient text for numbers
- Per-channel type color coding

### Sidebar Tree
- Sticky, scrollable independently
- Collapse to icon-only on mobile
- Expand/collapse all controls

### Channel Detail Panel
- Slide-in from right or overlay
- Full description, tags, related channels
- Direct link button (opens in new tab)
- Copy URL, add to favorites

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-02 | Initial design system created | Created by design consultation based on product context: global B2B channel directory, Chinese export companies as primary users |
| 2026-04-02 | Instrument Serif for display | Differentiates from typical B2B tool (which uses sans-serif); conveys authority and editorial quality |
| 2026-04-02 | 4-color channel type system | Clear semantic distinction without overwhelming; blue/green/amber/purple covers all 4 tiers |
| 2026-04-02 | Deep dark theme with warm accents | Professional tool default (dark), warm white text (#f0ede8) avoids coldness of pure white, amber/teal accents add geographic feel |
| 2026-04-02 | Tree as primary navigation | Core differentiator — existing directories are flat; tree navigation enables precise drilling into country/channel type |
| 2026-04-02 | Light mode with warm tones | Not cold grey — warm (#faf8f5) evokes map paper, feels more approachable |
