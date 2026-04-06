## Why

课程介绍页面（`courses/*.html`）目前仅包含纯文字信息（描述、目标、大纲、课表、辅具），缺少视觉元素。每个课程体系都有其标志性的体式动作，加入对应的 SVG 插画能让用户在进入课程列表前就对课程风格有直观感知，提升页面的视觉吸引力和品牌辨识度。

## What Changes

- 在每个课程详情页的「课程介绍」tab 顶部区域，新增一个标志性体式 SVG 插画展示区
- 为 12 个课程各设计一个代表性的 SVG 线条插画（山式、下犬式、婴儿式、轮式、头倒立等）
- 插画采用与现有体式插画一致的线条风格（`stroke: #3A5248`），保持视觉统一
- 插画下方标注体式中英文名称

## Capabilities

### New Capabilities
- `course-hero-illustration`: 课程介绍页标志性体式插画的数据定义、SVG 设计与渲染逻辑

### Modified Capabilities

（无需修改现有能力规范）

## Impact

- 修改 12 个课程详情页 HTML 文件（`courses/*.html`）
- 在课程介绍 tab 的 `tabIntro` 容器顶部插入插画 HTML
- 不涉及 JS 数据文件或首页 `index.html` 的变更
- 插画内嵌为 inline SVG，无外部文件依赖
