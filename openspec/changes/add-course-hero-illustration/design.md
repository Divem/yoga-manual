## Context

课程详情页（`courses/*.html`）采用静态 HTML + 内联 CSS/JS 的架构，无构建工具。现有课程介绍 tab（`#tabIntro`）顶部直接以文字描述开头。课程列表 tab 中的每节课已有内联 SVG 体式插画（60×84 viewBox），插画风格统一：`stroke: #3A5248`，线条简约。

当前 12 个课程文件均为纯静态 HTML，通过 `generate.js` 生成。每个课程的标志性体式需要在生成时注入到课程介绍 tab 中。

## Goals / Non-Goals

**Goals:**
- 在每个课程介绍页的 `tabIntro` 顶部添加一个标志性体式 SVG 插画
- 12 个课程各有一个独特的代表性体式插画
- 插画风格与现有课程列表中的体式插画保持一致
- 插画下方显示体式中英文名称

**Non-Goals:**
- 不修改首页 `index.html` 的课程卡片
- 不引入外部图片依赖（所有插画为 inline SVG）
- 不改变现有课程介绍 tab 的其他内容结构
- 不添加动画或交互效果

## Decisions

### 1. 插画位置：tabIntro 顶部、课程描述之前

**选择**：在 `tabIntro` 容器的第一个子元素前插入插画区。

**理由**：用户打开课程介绍 tab 时第一时间看到视觉元素，建立对课程风格的直观印象，然后再阅读文字描述。

### 2. 插画尺寸与布局

**选择**：插画区居中显示，SVG viewBox 120×168（现有课程列表插画 60×84 的 2 倍），宽度 160px，保持视觉细节。

**布局结构**：
```html
<div class="ci-hero">
  <svg viewBox="0 0 120 168" width="160">...</svg>
  <div class="ci-hero-name">体式中文名</div>
  <div class="ci-hero-en">English Name</div>
</div>
```

**理由**：2 倍放大既保证在大屏上的清晰度，又与课程列表中的小插画形成层次对比。

### 3. SVG 插画数据内嵌到 HTML

**选择**：直接在 `generate.js` 中为每个课程定义标志性体式 SVG 数据，生成时内嵌到 HTML。

**理由**：与现有体式插画的处理方式一致，无需引入新的数据文件或外部依赖。

### 4. 各课程标志性体式映射

| 课程 | 标志性体式 | 英文名 |
|------|-----------|--------|
| 瑜伽入门 | 山式 | Tadasana |
| 哈他瑜伽 | 下犬式 | Adho Mukha Svanasana |
| 修复瑜伽 | 婴儿式 | Balasana |
| 流瑜伽 | 战士一式 | Virabhadrasana I |
| 艾扬格精准瑜伽 | 三角伸展式（带砖） | Trikonasana |
| 阴瑜伽 | 蝴蝶式 | Baddha Konasana |
| 阿斯汤加 | 前屈式 | Paschimottanasana |
| 开髋专题 | 束角式 | Baddha Konasana |
| 后弯专题 | 轮式 | Urdhva Dhanurasana |
| 倒立专题 | 头倒立 | Sirsasana |
| 冥想与呼吸法 | 莲花坐 | Padmasana |
| 孕产瑜伽 | 女神式 | Utkata Konasana |
| 脊柱理疗 | 猫牛式 | Marjaryasana-Bitilakasana |

## Risks / Trade-offs

- [SVG 设计质量] 12 个独立体式 SVG 需要手工绘制，可能存在风格不一致 → 使用统一的 stroke 参数和 viewBox，参考现有插画风格
- [页面体积增加] 每个课程页增加约 1-2KB SVG 代码 → 可忽略，内联 SVG 无额外请求开销
