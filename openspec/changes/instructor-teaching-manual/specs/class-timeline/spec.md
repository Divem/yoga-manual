## ADDED Requirements

### Requirement: 课堂时间线可视化 sequence 时间分配
系统 SHALL 将每节课时的 sequence 渲染为水平时间线条，每个步骤按 duration 比例占据对应宽度。

#### Scenario: 时间线基本展示
- **WHEN** 教练查看某课时的时间线
- **THEN** 页面 SHALL 显示一个水平时间条，每段标注步骤名称和时长（如「热身 10min」），各段宽度按时间比例分配

#### Scenario: 时间线颜色区分
- **WHEN** 时间线渲染各步骤
- **THEN** 不同类型的步骤（如热身、主体练习、放松）SHALL 使用不同的颜色区分，帮助教练一眼识别课堂结构

### Requirement: 时间线与口令卡片联动
系统 SHALL 支持点击时间线跳转到对应口令卡片。

#### Scenario: 点击时间线跳转
- **WHEN** 教练点击时间线上的某个步骤段
- **THEN** 口令卡片视图 SHALL 跳转到该步骤对应的卡片

#### Scenario: 口令卡片同步高亮
- **WHEN** 教练在口令卡片间翻阅
- **THEN** 时间线上当前步骤段 SHALL 高亮显示，反映当前位置

### Requirement: 时间线在移动端可用
系统 SHALL 确保时间线在手机屏幕上可用。

#### Scenario: 移动端时间线
- **WHEN** 教练在手机上查看时间线
- **THEN** 时间线 SHALL 可水平滚动查看，当前步骤自动居中显示
