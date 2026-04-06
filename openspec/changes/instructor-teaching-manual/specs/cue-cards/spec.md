## ADDED Requirements

### Requirement: 口令卡片将 sequence 转化为可翻阅的分步卡片
系统 SHALL 将每节课时的 sequence 数组中的每个步骤渲染为一张独立的全屏口令卡片，教练可逐张翻阅。

#### Scenario: 显示口令卡片内容
- **WHEN** 教练查看某一步骤的口令卡片
- **THEN** 卡片 SHALL 显示步骤名称（step 字段）、持续时间（duration 字段）、教学引导文字（note 字段），以及当前步骤在整体序列中的位置指示（如 3/8）

#### Scenario: 长文本引导语处理
- **WHEN** 步骤的 note 字段文字超过卡片可视区域
- **THEN** 卡片 SHALL 默认显示前 6 行，并提供「展开」按钮查看完整内容

### Requirement: 口令卡片支持滑动翻页
系统 SHALL 支持触屏左右滑动和点击箭头按钮两种方式切换口令卡片。

#### Scenario: 触屏滑动翻页
- **WHEN** 教练在口令卡片上向左滑动
- **THEN** 显示下一张口令卡片，带平滑过渡动画

#### Scenario: 点击箭头翻页
- **WHEN** 教练点击右箭头按钮
- **THEN** 显示下一张口令卡片

#### Scenario: 边界处理
- **WHEN** 教练在最后一张卡片向左滑动
- **THEN** 停留在最后一张卡片，不循环回到第一张

### Requirement: 口令卡片进度指示
系统 SHALL 在口令卡片视图中显示整体进度。

#### Scenario: 进度条显示
- **WHEN** 教练正在翻阅口令卡片
- **THEN** 页面顶部 SHALL 显示进度条，反映当前步骤在整节课中的时间进度比例

#### Scenario: 步骤导航
- **WHEN** 教练点击进度条上的某个步骤区段
- **THEN** 直接跳转到对应的口令卡片
