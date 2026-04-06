## ADDED Requirements

### Requirement: 体式速查卡展示教练关注信息
系统 SHALL 为每节课时涉及的体式生成速查卡片，每张卡片包含教练教学所需的关键信息。

#### Scenario: 体式卡片基本信息
- **WHEN** 教练查看某体式的速查卡
- **THEN** 卡片 SHALL 显示体式 SVG 图示、中文名、英文名、梵文名、体式分类标签（站立/坐姿/前屈等）

#### Scenario: 体式卡片教学要点
- **WHEN** 教练查看某体式的速查卡
- **THEN** 卡片 SHALL 显示该课时 keyPoints 中与此体式相关的对齐与教学要点

#### Scenario: 体式卡片安全提示
- **WHEN** 该课时有 safetyNote 信息
- **THEN** 体式卡片区域 SHALL 显示安全提示/禁忌信息

### Requirement: 体式卡片按课时序列排列
系统 SHALL 按照课时 sequence 中体式出现的顺序排列速查卡片。

#### Scenario: 按教学顺序排列
- **WHEN** 教练打开某课时的体式速查区域
- **THEN** 体式卡片 SHALL 按照该课时 poses 数组的顺序排列，与实际教学顺序一致

### Requirement: 体式卡片可快速定位
系统 SHALL 在体式速查区域顶部提供体式名称列表，点击可快速滚动到对应卡片。

#### Scenario: 点击体式名跳转
- **WHEN** 教练点击体式名称列表中的某个体式
- **THEN** 页面平滑滚动到对应的体式速查卡片
