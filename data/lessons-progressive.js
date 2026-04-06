const PROGRESSIVE_LESSONS = {

  // ============================================================
  // 流瑜伽 (Vinyasa) — 14 节课
  // ============================================================
  'vinyasa': [
    // ---- 模块一：Vinyasa 基础 (L1-L3) ----
    {
      num: 1,
      title: 'Vinyasa 基础',
      subtitle: '乌佳依呼吸与四柱支撑',
      desc: '本节课聚焦乌佳依呼吸的精炼和四柱支撑的力学分析，是流瑜伽最重要的基本功。通过反复练习呼吸与动作的同步关系，建立内观觉知。重点讲解四柱支撑的常见错误以及适合不同身体条件的变化体式。',
      objectives: [
        '掌握乌佳依呼吸的原理与体感特征',
        '理解四柱支撑中肩膀、手肘、核心的对齐关系',
        '学会根据学生能力提供四柱支撑的降阶方案'
      ],
      poses: ['sukhasana', 'chaturanga', 'urdhva_mukha_svanasana', 'adho_mukha_svanasana', 'balasana'],
      sequence: [
        { step: '开场调息', duration: '5min', note: '坐姿冥想，引导乌佳依呼吸，感受喉部微收、呼吸有声音' },
        { step: '呼吸觉知练习', duration: '5min', note: '手放腹部感受横膈膜运动，呼气时轻微收腹启动Mula Bandha' },
        { step: '四柱支撑讲解与示范', duration: '10min', note: '分解四柱力学：肩膀不低于手肘、核心收紧、脚跟后蹬、身体一条直线' },
        { step: '四柱支撑常见错误', duration: '8min', note: '展示三组错误：肩膀塌陷、翘臀、手肘外展，让学生互相观察' },
        { step: '四柱支撑降阶练习', duration: '10min', note: '膝盖落地版→推高胸部版→完整版，每人找到适合自己的版本' },
        { step: '小型Vinyasa串联', duration: '10min', note: '四柱→上犬→下犬×5组，配合乌佳依呼吸节奏' },
        { step: '休息术', duration: '2min', note: '婴儿式放松，回顾呼吸感受' }
      ],
      keyPoints: [
        '乌佳依呼吸是Vinyasa的灵魂，所有动作跟随呼吸',
        '四柱支撑的核心不在手臂力量，而在全身协同',
        '膝盖落地的四柱仍然是有效的练习，不要让学生感到挫败'
      ],
      safetyNote: '四柱支撑中手腕疼痛时改用前臂支撑；肩关节有伤者避免完全四柱'
    },
    {
      num: 2,
      title: '拜日式A精细化',
      subtitle: '过渡的艺术',
      desc: '本节课深入拆解拜日式A的每一个过渡环节，追求动作之间的无缝衔接。重点练习从站立前屈到平板的跳跃后退、从下犬到站立前屈的跳跃前进，以及每个体式之间的呼吸节奏。通过过渡的精确化，让练习者的流动感自然浮现。',
      objectives: [
        '掌握拜日式A每个体式的精确进入与退出',
        '理解过渡动作与呼吸的一对一关系',
        '学会引导跳跃后退与前进的安全技巧'
      ],
      poses: ['tadasana', 'urdhva_mukha_svanasana', 'uttanasana', 'ardha_uttanasana', 'chaturanga', 'adho_mukha_svanasana'],
      sequence: [
        { step: '开场调息', duration: '3min', note: '山式站立，建立呼吸节奏，设定练习意图' },
        { step: '拜日式A逐体式拆解', duration: '15min', note: '每个体式停留3个呼吸，讲解进入退出要点，强调脊柱延展' },
        { step: '过渡专项：站立前屈→平板', duration: '10min', note: '分步教学：重心后移→双手撑地→单腿后跳→双脚落地成平板' },
        { step: '过渡专项：下犬→站立前屈', duration: '10min', note: '分步教学：眼睛看双手→起脚跟弹跳→双脚落地→卷起脊柱' },
        { step: '完整拜日式A流畅练习', duration: '10min', note: '5组完整练习，第一组慢速带口令，后四组逐渐加速' },
        { step: '自由流动', duration: '5min', note: '学生根据自身呼吸节奏自由练习3组' },
        { step: '休息术', duration: '2min', note: '摊尸式或婴儿式，感受身体热量和呼吸质量' }
      ],
      keyPoints: [
        '拜日式A是Vinyasa的基础模板，值得反复打磨',
        '过渡的干净程度决定了整节课的品质',
        '跳跃不是必须的，步进后退同样优雅'
      ],
      safetyNote: '跳跃前进时避免膝盖直接砸地，前脚掌先着地再放下脚跟'
    },
    {
      num: 3,
      title: '拜日式B与基础串联',
      subtitle: '呼吸驱动流动',
      desc: '在拜日式A的基础上引入拜日式B，加入幻椅式和战士一式，增加下肢力量和髋部灵活性训练。本节课开始练习基础的Vinyasa串联——在站立体式之间插入"半个Vinyasa"（四柱→上犬→下犬），体验呼吸如何驱动整个练习。',
      objectives: [
        '掌握拜日式B的完整序列和呼吸配合',
        '理解"半个Vinyasa"的插入逻辑和节奏',
        '能够完成基础的站立体式到下犬的串联'
      ],
      poses: ['tadasana', 'utkatasana', 'virabhadrasana1', 'urdhva_mukha_svanasana', 'uttanasana', 'ardha_uttanasana', 'chaturanga', 'adho_mukha_svanasana'],
      sequence: [
        { step: '开场调息', duration: '3min', note: '山式站立，3分钟乌佳依呼吸' },
        { step: '拜日式A热身', duration: '5min', note: '3组拜日式A唤醒身体' },
        { step: '拜日式B逐体式教学', duration: '15min', note: '重点教学幻椅式（坐骨向后、重心在脚跟）和战士一式（前髋外旋、后髋内旋）' },
        { step: '半个Vinyasa讲解', duration: '8min', note: '从战士一式→前屈→平板→四柱→上犬→下犬，每个过渡一个呼吸' },
        { step: '拜日式B + 半个Vinyasa练习', duration: '10min', note: '左右交替各3组，建立站立体式与地面串联的流畅感' },
        { step: '综合流动', duration: '5min', note: 'A+B混合练习，体验不同强度的呼吸节奏' },
        { step: '休息术', duration: '4min', note: '摊尸式，引导身体扫描放松' }
      ],
      keyPoints: [
        '拜日式B中幻椅式和战士一式增加了下肢负荷，注意膝盖对齐',
        '半个Vinyasa是Vinyasa练习的标志性特征，不是"额外运动"',
        '始终保持一个吸气一个动作、一个呼气一个动作'
      ],
      safetyNote: '幻椅式中膝关节不超过脚踝；战士一式前膝对准第二三脚趾'
    },

    // ---- 模块二：站立流动 (L4-L6) ----
    {
      num: 4,
      title: '单侧站立串联',
      subtitle: '战士流的无缝衔接',
      desc: '本节课聚焦同一侧的站立体式无缝串联：战士一式→战士二式→侧角伸展→半月式。学习如何在一个呼吸中完成体式间的转换，而不是停留在体式里。这是Vinyasa区别于其他流派的核心——体式之间的空间同样重要。',
      objectives: [
        '掌握战士一式到半月式的流畅过渡',
        '理解髋部转换的力学（从内旋到中立到外旋）',
        '学会编排单侧长串联的教学方法'
      ],
      poses: ['virabhadrasana1', 'virabhadrasana2', 'parsvakonasana', 'ardha_chandrasana', 'adho_mukha_svanasana', 'chaturanga'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式B×3，加入髋部开合热身' },
        { step: '右侧串联分解教学', duration: '12min', note: '战士一→战士二（前脚转90度、后脚平行）→侧角伸展（前手肘放膝上或指尖触地）→半月式（后方腿抬起），每步一个呼吸' },
        { step: '右侧串联流畅练习', duration: '5min', note: '连续3遍右侧串联，建立肌肉记忆' },
        { step: '左侧串联分解教学', duration: '8min', note: '同上步骤，强调左右不对称是正常的' },
        { step: '左右交替完整练习', duration: '8min', note: '右侧串联→下犬→左侧串联→下犬，循环3轮' },
        { step: '冷却', duration: '5min', note: '坐姿前屈、扭转、摊尸式' }
      ],
      keyPoints: [
        '战士一到战士二的转换关键是前髋从内旋回到中立',
        '侧角伸展到半月式时，下方手不需要触地，可以用砖块',
        '让学生理解"流动"不是速度快，而是每个过渡都有意识'
      ],
      safetyNote: '半月式中膝盖超伸者微微屈膝；有眩晕者靠墙练习'
    },
    {
      num: 5,
      title: '平衡训练',
      subtitle: '战士三式到站立体式',
      desc: '本节课专注于动态平衡能力的培养。从战士三式到半月式到站立分腿前屈，这些体式要求核心稳定、髋部正位和专注力的集中。教学中引入"凝视点"(Drishti)的概念，帮助学生通过视线稳定来提升平衡品质。',
      objectives: [
        '掌握战士三式的进入技巧和平衡要点',
        '理解从战士三式到半月式的动态转换',
        '学会使用凝视点和呼吸辅助平衡'
      ],
      poses: ['virabhadrasana3', 'ardha_chandrasana', 'padangusthasana', 'prasarita_padottanasana', 'virabhadrasana1'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式A×3 + 站立分腿前屈唤醒腿部' },
        { step: '战士三式分解', duration: '10min', note: '从战士一起始：吸气延展→呼气前移重心→吸气抬后腿。关键：骨盆正对地板，站立腿有力' },
        { step: '战士三式→半月式过渡', duration: '8min', note: '战士三式→呼气放手→转胸腔→半月式。强调这是两个体式的流动，不是两个独立的体式' },
        { step: '平衡序列练习', duration: '12min', note: '战士三→半月式→站立分腿→下犬→换侧。每侧3轮' },
        { step: '平衡挑战', duration: '5min', note: '闭眼山式30秒→闭眼战士三尝试（靠墙），体验视觉在平衡中的作用' },
        { step: '冷却与休息', duration: '5min', note: '坐姿前屈、仰卧扭转、摊尸式' }
      ],
      keyPoints: [
        '平衡不是"不晃"，而是在晃动中不断找回中心',
        '凝视点是不动的，但眼球是放松的',
        '呼吸在平衡体式中尤为重要——憋气=失去平衡'
      ],
      safetyNote: '平衡体式旁放置砖块以防跌倒；踝关节不稳者赤脚练习'
    },
    {
      num: 6,
      title: '扭转流动',
      subtitle: '脊柱的螺旋力量',
      desc: '本节课将扭转融入流动序列：扭转侧角伸展→扭转半月式→站立前屈中的扭转变体。扭转是Vinyasa中的"清洁剂"，有助于促进消化、缓解背部僵硬。教学中强调扭转的力学原则——从脊柱中段开始旋转，而不是靠手臂拉拽。',
      objectives: [
        '掌握扭转侧角伸展的进入和深度',
        '理解扭转半月式的平衡与旋转结合',
        '学会在流动中安全地加入扭转元素'
      ],
      poses: ['parivrtta_trikonasana', 'parsvakonasana', 'ardha_chandrasana', 'uttanasana', 'marjaryasana', 'supta_matsyendrasana'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式B×2 + 猫牛式×10（强调脊柱分段运动）' },
        { step: '扭转侧角伸展教学', duration: '10min', note: '下方手肘抵大腿外侧→上方手延展→胸腔旋转。常见问题：下方手肘滑落、脊柱侧弯代替扭转' },
        { step: '扭转半月式教学', duration: '10min', note: '从侧角伸展直接进入：呼气重心前移→抬后腿→扭转胸腔。可用砖块辅助下方手' },
        { step: '扭转流动序列', duration: '12min', note: '扭转三角→扭转侧角→扭转半月→下犬→换侧×3轮' },
        { step: '坐姿扭转冷却', duration: '5min', note: '仰卧脊柱扭转每侧2分钟，释放腰椎压力' },
        { step: '休息术', duration: '3min', note: '摊尸式，感受脊柱被"拧紧又松开"后的轻盈' }
      ],
      keyPoints: [
        '扭转的原则：延展优先于旋转——先拉长脊柱，再旋转',
        '扭转从核心启动（腹斜肌），不是用手臂拉身体',
        '呼气时加深扭转是自然的生理规律'
      ],
      safetyNote: '腰椎间盘问题者避免深度扭转；孕妇只做开链扭转（不交叉腿）'
    },

    // ---- 模块三：核心与手臂平衡 (L7-L9) ----
    {
      num: 7,
      title: '班达与核心',
      subtitle: '内在锁的能量',
      desc: '本节课正式引入班达(Bandha)的概念——根锁(Mula Bandha)和腹锁(Uddiyana Bandha)。这是Vinyasa练习中"看不见"但最核心的技术。通过腹部控制练习和核心序列，让学生理解班达如何在流动中提供轻盈感和稳定性。',
      objectives: [
        '理解根锁和腹锁的解剖位置和激活方式',
        '学会在动态练习中维持班达的觉知',
        '掌握核心激活在Vinyasa中的支撑作用'
      ],
      poses: ['navasana', 'adho_mukha_svanasana', 'chaturanga', 'balasana', 'uttanasana'],
      sequence: [
        { step: '调息与班达讲解', duration: '8min', note: '坐姿中讲解：根锁=盆底肌轻微上提（像憋尿的感觉）；腹锁=呼气末腹部自然内收上提。不是用力挤压，是精微的收束' },
        { step: '腹锁激活练习', duration: '8min', note: '站立位：手放腹部，快速呼气后屏息，感受腹部自然上提。重复5次' },
        { step: '核心序列', duration: '15min', note: '平板→四柱→下犬→船式×5→下犬。每步强调班达的参与' },
        { step: '班达在Vinyasa中的应用', duration: '12min', note: '拜日式A×5，专注在每次呼气时收束核心、吸气时延展脊柱' },
        { step: '休息术', duration: '7min', note: '摊尸式5分钟+坐姿冥想2分钟，感受核心区域的温度变化' }
      ],
      keyPoints: [
        '班达不是"用力收紧"，而是一种精微的能量方向——向上、向内',
        '根锁提供根基稳定性，腹锁提供脊柱支撑力',
        '初学者不需要完美激活班达，有觉知就足够了'
      ],
      safetyNote: '孕期和产后禁止练习根锁；腹锁练习中不可过度用力导致呼吸困难'
    },
    {
      num: 8,
      title: '侧板与船式动态',
      subtitle: '核心力量的流动表达',
      desc: '本节课将核心力量训练融入流动：侧板式的进入与变化、船式的动态练习、以及乌鸦式的前期准备。侧板式教会学生在不对称中找到平衡，船式培养深层核心耐力，乌鸦式准备则为下一节课的手臂平衡打基础。',
      objectives: [
        '掌握侧板式的基本形态和进入方法',
        '学会船式的动态练习（摇滚船式）',
        '理解乌鸦式准备中核心和手的关系'
      ],
      poses: ['navasana', 'adho_mukha_svanasana', 'balasana', 'bakasana'],
      sequence: [
        { step: '热身', duration: '8min', note: '拜日式B×3 + 腕关节热身（十指交叉翻掌、腕关节旋转）' },
        { step: '侧板式教学', duration: '10min', note: '从平板式开始→重心移向一侧→双脚叠放或前后脚→上方手臂延展。降阶：膝盖落地版' },
        { step: '侧板流动', duration: '8min', note: '平板→侧板→平板→对侧侧板，配合呼吸×5组' },
        { step: '船式动态教学', duration: '10min', note: '船式→呼气降腿接近地面→吸气抬回。保持脊柱延长，不要弓背。15次×3组' },
        { step: '乌鸦式准备', duration: '10min', note: '双手撑地与肩同宽→膝盖放三头肌后侧→重心前移→脚尖离地1秒→放下。使用砖块辅助' },
        { step: '冷却与休息', duration: '4min', note: '婴儿式→仰卧扭转→摊尸式' }
      ],
      keyPoints: [
        '侧板式中下方手的指尖微微内扣，防止肩膀塌陷',
        '船式动态中腰椎不要触地，保持腹部持续工作',
        '乌鸦式准备中恐惧心理比力量不足更常见——鼓励尝试'
      ],
      safetyNote: '手腕疼痛时侧板式改用前臂版；船式中尾骨不适者坐骨下垫毛毯'
    },
    {
      num: 9,
      title: '乌鸦式进阶',
      subtitle: '飞翔的勇气',
      desc: '本节课是核心与手臂平衡模块的高潮。从乌鸦式(Bakasana)的完整练习到八曲式(Astavakrasana)的入门准备，学生将体验身体离开地面的轻盈感。教学中强调恐惧管理——大多数学生有能力完成乌鸦式，限制他们的是心理而非身体。',
      objectives: [
        '掌握乌鸦式的完整进入方法和平衡技巧',
        '了解八曲式的基础条件和准备练习',
        '学会安全地教授手臂平衡的辅助方法'
      ],
      poses: ['bakasana', 'navasana', 'chaturanga', 'adho_mukha_svanasana', 'marjaryasana', 'balasana'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式A×3 + 腕关节+肩关节充分热身（含肩屈拉伸）' },
        { step: '乌鸦式回顾', duration: '8min', note: '复习上节课的乌鸦式准备，确保膝盖 placement 正确' },
        { step: '乌鸦式完整练习', duration: '12min', note: '脚尖离地→尝试抬一只脚→双脚离地。教师提供膝盖支撑或后腰保护。每组尝试后回到婴儿式休息' },
        { step: '乌鸦式→四柱流动', duration: '5min', note: '乌鸦式→呼气下巴→四柱→上犬→下犬，体验飞行到流动的衔接' },
        { step: '八曲式准备', duration: '10min', note: '坐姿扭转热身→肘板支撑→单侧倾斜尝试。讲解八曲式的原理：核心扭转+手臂支撑' },
        { step: '冷却与休息', duration: '5min', note: '腕关节放松（祈祷式拉伸）→前臂支撑→摊尸式' }
      ],
      keyPoints: [
        '乌鸦式的秘诀是"看前方"而不是看地板——视线决定重心',
        '手指张开"抓地"比手掌平放更稳定',
        '手臂平衡失败时下巴和前额先着地，保护面部和手腕'
      ],
      safetyNote: '在手的前方放置枕头/毛毯以防面部着地；肩关节有伤者跳过手臂平衡'
    },

    // ---- 模块四：后弯流动 (L10-L11) ----
    {
      num: 10,
      title: '后弯准备',
      subtitle: '逐步打开身体前侧',
      desc: '本节课系统性地建立后弯能力：蝗虫式→弓式→骆驼式→桥式，从俯卧后弯到跪姿后弯再到仰卧后弯，逐步增加脊柱伸展的深度和髋屈肌的参与。教学中强调后弯的质量远比深度重要——胸腔打开、脊柱均匀弯曲、呼吸流畅才是好后弯。',
      objectives: [
        '掌握蝗虫式、弓式、骆驼式、桥式的精准对齐',
        '理解后弯中脊柱的分段运动（腰椎→胸椎→颈椎）',
        '学会后弯后的反体式序列'
      ],
      poses: ['salabhasana', 'dhanurasana', 'ustrasana', 'setu_bandhasana', 'bhujangasana', 'supta_baddha_konasana'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式B×2 + 猫牛式（强调下犬中的脊柱延展）+ 新月式开髋屈肌' },
        { step: '蝗虫式与弓式', duration: '12min', note: '蝗虫式：双腿抬起≠翘臀，核心收紧、大腿内旋。弓式：双手抓脚踝、利用腿部拉力打开胸腔。每体式3次×5呼吸' },
        { step: '骆驼式教学', duration: '10min', note: '跪立→双手扶髋→髋部前推→胸腔上提→手依次触脚跟。降阶：脚尖点地版。每2次回到儿童式' },
        { step: '桥式', duration: '8min', note: '仰卧→双脚踩地与髋同宽→抬起髋部→双手撑腰。可在骶骨下方垫砖块被动停留' },
        { step: '后弯反体式', duration: '5min', note: '仰卧束角式2分钟→仰卧前屈（双膝抱胸）2分钟→摊尸式1分钟' }
      ],
      keyPoints: [
        '后弯的第一个原则：延展脊柱再弯曲——没有延展的后弯是压缩',
        '髋屈肌的灵活性直接影响后弯质量——骆驼式和桥式中前腿要积极发力',
        '后弯后必须做前屈/扭转作为反体式，平衡神经系统'
      ],
      safetyNote: '腰椎间盘突出者避免深度后弯；颈椎问题者骆驼式中不要低头'
    },
    {
      num: 11,
      title: '轮式准备与后弯Vinyasa',
      subtitle: '突破恐惧的空间',
      desc: '本节课以轮式准备为核心：从桥式逐步过渡到离墙轮式，帮助学生安全地体验深度后弯。同时将后弯元素融入Vinyasa流动——从上犬到轮式准备到桥式，创造一个"后弯波"。反体式序列的教学确保学生的神经系统回到平衡。',
      objectives: [
        '掌握桥式到轮式的渐进式准备方法',
        '学会利用墙壁安全地练习轮式',
        '理解后弯Vinyasa的编排逻辑和反体式选择'
      ],
      poses: ['urdhva_dhanurasana', 'setu_bandhasana', 'bhujangasana', 'ustrasana', 'supta_baddha_konasana', 'paschimottanasana'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式A×3（上犬加深）+ 新月式开髋屈肌×每侧2分钟' },
        { step: '后弯递进', duration: '12min', note: '桥式×3→桥式手抓脚踝×2→桥式抬起一条腿→离墙轮式准备（双手扶墙、头不着地）' },
        { step: '轮式尝试', duration: '10min', note: '双手放耳旁→脚跟踩地→头顶轻触地→推直手臂。教师提供髋部托举辅助。每组后回到桥式放松' },
        { step: '后弯Vinyasa流动', duration: '8min', note: '下犬→上犬→桥式→轮式尝试→下犬。感受从温和到强烈的后弯层次' },
        { step: '反体式序列', duration: '8min', note: '仰卧束角式2min→坐姿前屈2min→仰卧脊柱扭转每侧1.5min→摊尸式2min' },
        { step: '休息术', duration: '2min', note: '摊尸式，引导释放后弯后脊柱的残余张力' }
      ],
      keyPoints: [
        '轮式准备中头顶触地时颈椎不要承重，只是轻触',
        '手臂外旋（旋后）是轮式中推直手臂的关键',
        '轮式中脚跟容易外翻——提醒学生脚跟朝正前方'
      ],
      safetyNote: '轮式必须由教师辅助或有墙保护；腕关节疼痛者继续练习桥式即可'
    },

    // ---- 模块五：完整课堂编排 (L12-L14) ----
    {
      num: 12,
      title: '高峰体式编排',
      subtitle: '以舞王式为高峰',
      desc: '本节课示范如何以一个高峰体式（舞王式/Natarajasana）为中心编排整节课。从拜日式热身→站立体式准备→逐步打开髋屈肌和肩部灵活性→最终到达高峰体式→冷却。这种"金字塔式"编排是Vinyasa课堂最常用的结构。',
      objectives: [
        '理解高峰体式编排的基本结构：热身→准备→高峰→冷却',
        '学会逆向拆解高峰体式需要哪些身体准备',
        '掌握60分钟Vinyasa课堂的时间分配'
      ],
      poses: ['surya_namaskara_a', 'virabhadrasana1', 'virabhadrasana2', 'virabhadrasana3', 'ustrasana', 'dhanurasana', 'setu_bandhasana', 'paschimottanasana'],
      sequence: [
        { step: '开场调息', duration: '5min', note: '坐姿冥想，设定"平衡与优雅"的练习意图' },
        { step: '热身', duration: '10min', note: '拜日式A×3 + 拜日式B×2，加入新月式深度开髋屈肌' },
        { step: '站立体式准备', duration: '12min', note: '战士二→三角式→半月式，建立单腿站立稳定性和肩部灵活性' },
        { step: '后弯准备', duration: '8min', note: '战士一+后弯手变体→新月式后弯→桥式×2' },
        { step: '高峰体式：战士三→站立分腿过渡', duration: '8min', note: '演示以动态平衡为高峰的编排：战士三变体→站立分腿前屈→半神猴式' },
        { step: '冷却序列', duration: '5min', note: '坐姿前屈→仰卧扭转→仰卧束角式' },
        { step: '休息术', duration: '2min', note: '摊尸式，回顾从热身到高峰的"旅程"' }
      ],
      keyPoints: [
        '高峰体式不是必须所有人都做到——提供3个层级让每个人都能参与',
        '准备序列要覆盖高峰体式所需的所有关节活动方向',
        '冷却序列的时间不应少于总课时的15%'
      ],
      safetyNote: '后弯高峰体式后必须做前屈反体式；肩关节有伤者使用绑带辅助'
    },
    {
      num: 13,
      title: '动态平衡高峰',
      subtitle: '战士三到站立分腿',
      desc: '本节课展示另一种高峰编排思路：以动态过渡为高峰而非静态体式。战士三式到站立分腿前屈的转换需要极致的单腿稳定性、髋部开放和核心控制。这种编排更适合中高级学员，也更能体现Vinyasa"流动即体式"的哲学。',
      objectives: [
        '掌握以动态过渡为高峰的编排方法',
        '学会在同一串联中逐步增加难度',
        '理解如何在动态高峰后安全地降低强度'
      ],
      poses: ['virabhadrasana3', 'padangusthasana', 'prasarita_padottanasana', 'ardha_chandrasana', 'virabhadrasana1', 'virabhadrasana2'],
      sequence: [
        { step: '热身', duration: '10min', note: '拜日式A×3 + 站立分腿前屈×3（建立腿部力量）' },
        { step: '平衡递进', duration: '12min', note: '山式→树式→战士三（3秒停留）→战士三（5秒停留）→战士三→站立分腿过渡。每侧3轮' },
        { step: '动态高峰序列', duration: '15min', note: '战士一→战士三→半月式→战士三→站立分腿前屈→半劈叉→下犬。左右×3轮' },
        { step: '髋部开放冷却', duration: '8min', note: '青蛙式2min→鸽子式每侧2min→仰卧束角式2min' },
        { step: '休息术', duration: '5min', note: '摊尸式，感受双腿的松弛和能量的沉降' }
      ],
      keyPoints: [
        '动态高峰的关键是"逐步升温"——不要直接跳到最难版本',
        '过渡失败是正常的，教导学生把失败当作信息而非挫折',
        '动态高峰后的冷却要更加充分——神经系统需要更长时间平复'
      ],
      safetyNote: '腘绳肌有拉伤风险者在站立分腿前屈中保持微屈膝'
    },
    {
      num: 14,
      title: '自主编排与实践',
      subtitle: '成为自己的编排者',
      desc: '本节课是流瑜伽课程的结业课。学生将运用14节课所学的所有工具，自主设计一节60分钟的Vinyasa课堂，并选择音乐来配合课堂节奏。这是从"跟随者"到"创造者"的转变，也是检验教学能力的重要一步。每位学生将展示自己的编排并接受反馈。',
      objectives: [
        '能够独立设计一节60分钟的Vinyasa课堂',
        '理解音乐在Vinyasa课堂中的作用和选择原则',
        '具备自我评估和他评的教学反思能力'
      ],
      poses: ['tadasana', 'surya_namaskara_a', 'surya_namaskara_a', 'virabhadrasana1', 'virabhadrasana2', 'paschimottanasana', 'supta_matsyendrasana', 'savasana'],
      sequence: [
        { step: '编排指导', duration: '10min', note: '讲解60分钟课堂的标准结构：5min调息→10min热身→25min主体→10min高峰→5min冷却→5min休息术' },
        { step: '音乐选择指导', duration: '5min', note: 'Vinyasa音乐原则：热身段65-75BPM→主体段80-95BPM→高峰段95-110BPM→冷却段60-70BPM→休息术无音乐或环境音' },
        { step: '学生自主编排', duration: '20min', note: '每位学生写出一节课的高峰体式和关键体式列表，画出编排流程图' },
        { step: '学生展示与反馈', duration: '20min', note: '每人带大家体验5分钟自己的编排片段，集体给予建设性反馈' },
        { step: '课程总结', duration: '5min', note: '回顾14节课的旅程，颁发课程完成认可' }
      ],
      keyPoints: [
        '编排不是把喜欢的体式堆在一起——每个体式都要有"为什么在这里"的理由',
        '音乐是辅助而非主角——学生的呼吸才是真正的节奏',
        '好老师不是做最难的体式，而是让每个学生都在自己的边界上练习'
      ],
      safetyNote: '学生展示时教师全程观察，随时纠正安全隐患'
    }
  ],

  // ============================================================
  // 阿斯汤加 (Ashtanga) — 8 节周课
  // ============================================================
  'ashtanga': [
      {
        num: 1,
        title: '阿斯汤加根基',
        subtitle: '拜日式A精炼与站立前半',
        desc: '本节课开启阿斯汤加一级序列的系统性学习。从拜日式A的5次重复精炼开始，建立计数呼吸的节奏感。随后教授站立序列前半部分，强调阿斯汤加的三大支柱：乌佳依呼吸、凝视点和班达。课堂中介绍Tristhana的概念和传统练习规范。',
        objectives: [
          '掌握拜日式A的阿斯汤加计数法（梵文计数）',
          '理解Tristhana三要素并初步应用',
          '学会站立序列前半部分的标准进入方式'
        ],
        poses: ['surya_namaskara_a', 'tadasana', 'uttanasana', 'ardha_uttanasana', 'chaturanga', 'urdhva_mukha_svanasana', 'adho_mukha_svanasana', 'padangusthasana', 'prasarita_padottanasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '齐声诵唱开篇祈祷文，建立传统仪式感' },
          { step: 'Tristhana讲解', duration: '5min', note: '讲解呼吸（乌佳依）、凝视点（9个凝视点）、班达（根锁+腹锁）的关系' },
          { step: '拜日式A × 5', duration: '15min', note: '梵文计数：Ekam, Dve, Trini... 逐遍加速。要求每次呼吸一个动作，严格遵循计数' },
          { step: '站立序列前半', duration: '15min', note: '手抓大脚趾式（5个呼吸）→站立分腿前屈4个变体（各5呼吸）' },
          { step: '传统结束序列简化版', duration: '8min', note: '仰卧×3→轮式尝试→倒立准备→休息术' },
          { step: '课后讨论', duration: '5min', note: '讲解6天练习制、月亮日休息、清晨练习的传统' }
        ],
        keyPoints: [
          '阿斯汤加的核心是"固定序列、固定顺序、固定呼吸"',
          '计数不是为了赶时间，而是建立可重复的冥想节奏',
          '阿斯汤加是自我练习的传统——即使现在跟课，最终目标是Mysore自练'
        ],
        safetyNote: '拜日式5次重复对初学者强度大，允许中途婴儿式休息'
      },
      {
        num: 2,
        title: '站立序列完整',
        subtitle: '从山式到坐姿的过渡',
        desc: '本节课完成整个站立序列的学习，并进入坐姿序列的前4个体式：杖式→坐姿前屈A/B/C。站立序列是阿斯汤加的"诊断"环节——站立体式中暴露的不平衡将在坐姿序列中延续。教学中特别关注从站立到坐姿的跳跃过渡（穿越）。',
        objectives: [
          '掌握完整站立序列的标准练习',
          '学会坐姿前屈A/B/C的精准对齐',
          '理解穿越技术的力学原理'
        ],
        poses: ['tadasana', 'uttanasana', 'padangusthasana', 'trikonasana', 'parivrtta_trikonasana', 'parsvakonasana', 'virabhadrasana1', 'virabhadrasana2', 'dandasana', 'paschimottanasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '开篇祈祷文' },
          { step: '拜日式A × 5', duration: '12min', note: '梵文计数，建立节奏' },
          { step: '站立序列完整', duration: '18min', note: '三角式→扭转三角→侧角→战士一→战士二→手抓大脚趾→站立分腿前屈。每体式5呼吸' },
          { step: '穿越技术教学', duration: '5min', note: '讲解穿越原理：双手撑地→屈肘→双腿交叉穿过→坐姿。初学者可步进' },
          { step: '坐姿前屈A/B/C', duration: '10min', note: '杖式→A（双手抓大脚趾，额头触膝）→B（手腕抓脚，额头触膝）→C（手掌扣脚掌，额头触膝）。各5呼吸' },
          { step: '简化结束序列', duration: '8min', note: '仰卧×3→休息术' },
          { step: '课后讨论', duration: '5min', note: '讲解9个凝视点的位置和对应体式' }
        ],
        keyPoints: [
          '站立序列中三角式到战士二的左右过渡要一气呵成',
          '坐姿前屈ABC的核心区别在于手的位置——脊柱位置不变',
          '穿越是阿斯汤加的标志动作，但不是必须——步进同样有效'
        ],
        safetyNote: '穿越中手肘不要低于90度；腘绳肌紧张者在坐姿前屈中坐毛毯'
      },
      {
        num: 3,
        title: '坐姿扩展',
        subtitle: '从坐姿前屈到船式',
        desc: '本节课将坐姿序列扩展到船式(Navasana)，包含仰卧式、斜面式、半莲花坐姿前屈等体式。这是坐姿序列中体式密度最高的部分，每个体式的停留时间从5个呼吸开始建立。课程后半段安排第一次Mysore练习体验。',
        objectives: [
          '掌握坐姿序列从仰卧式到船式的标准练习',
          '理解半莲花在阿斯汤加中的重要性',
          '体验Mysore练习模式的基本形式'
        ],
        poses: ['dandasana', 'paschimottanasana', 'upavistha_konasana', 'navasana', 'bhujangasana', 'salabhasana', 'baddha_konasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '开篇祈祷文' },
          { step: '拜日式A × 5', duration: '10min', note: '梵文计数' },
          { step: '站立序列', duration: '10min', note: '完整站立序列，每体式5呼吸' },
          { step: '坐姿序列扩展', duration: '15min', note: '仰卧式→斜面式→半莲花坐姿前屈（可绑定）→坐角式前屈→船式×3组→仰卧船式×3组' },
          { step: 'Mysore体验', duration: '10min', note: '学生自行练习已学内容，教师不口令只辅助。体验"自练"的节奏' },
          { step: '结束序列', duration: '8min', note: '仰卧×3→清理法（可选）→休息术' },
          { step: '课后讨论', duration: '5min', note: '讨论Mysore体验的感受，解答疑问' }
        ],
        keyPoints: [
          '半莲花坐姿前屈中脚的位置是关键——不是踩大腿而是放大腿上',
          '船式中腰椎不能触地，脊柱始终保持延展',
          'Mysore模式中教师通过"给新体式"来控制进度——不是越多越好'
        ],
        safetyNote: '膝盖有伤者跳过半莲花相关体式；船式中尾骨痛者坐骨下垫毛毯'
      },
      {
        num: 4,
        title: '束角式与简化收束',
        subtitle: '坐姿序列的收束节奏',
        desc: '本节课教授坐姿序列后半段的核心体式——束角式及其后续变体，并引入阿斯汤加的收束序列基础版。束角式是坐姿序列从"前屈"转向"打开"的转折点。简化收束序列的学习让初学者也能体验完整的练习闭环。',
        objectives: [
          '掌握束角式A/B/C的进入和变化',
          '学会简化收束序列的完整流程',
          '理解"体式做到哪里就收到哪里"的原则'
        ],
        poses: ['baddha_konasana', 'upavistha_konasana', 'janu_sirsasana', 'supta_baddha_konasana', 'setu_bandhasana', 'sarvangasana', 'halasana', 'savasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '开篇祈祷文' },
          { step: '拜日式A × 5', duration: '10min', note: '梵文计数' },
          { step: '站立序列', duration: '10min', note: '完整站立序列' },
          { step: '坐姿序列复习', duration: '10min', note: '从杖式到船式，每体式5呼吸' },
          { step: '束角式A/B/C教学', duration: '10min', note: 'A（前屈）→B（前屈脚尖回勾）→C（头触地/砖块辅助）' },
          { step: '简化收束序列', duration: '12min', note: '肩倒立（靠墙或三毛毯版）→犁式→鱼式→休息术' },
          { step: '课后讨论', duration: '6min', note: '讲解"阈值体式"概念：不要急于加新体式，当前体式稳定后再继续' }
        ],
        keyPoints: [
          '束角式是髋部开放的基石体式，值得花时间深入',
          '收束序列中的肩倒立是"女王体式"——每天练习15分钟',
          '阿斯汤加中"做到哪里收到哪里"不是偷懒，是智慧'
        ],
        safetyNote: '肩倒立中颈椎不适者立即退出，改用靠墙腿向上；月经期不做倒立'
      },
      {
        num: 5,
        title: '领课上半部',
        subtitle: '梵文计数的节奏',
        desc: '本节课以领课(Led Class)形式完成一级序列上半部的完整练习。领课中教师使用梵文计数引导全班同步练习，这是阿斯汤加一周练习中最重要的课（通常周四或周日）。学生将体验在集体能量中被"推"到自己的边界。',
        objectives: [
          '体验完整领课的节奏和能量',
          '熟悉梵文计数与体式的对应关系',
          '理解领课与Mysore的互补关系'
        ],
        poses: ['surya_namaskara_a', 'tadasana', 'padangusthasana', 'trikonasana', 'virabhadrasana1', 'virabhadrasana2', 'dandasana', 'paschimottanasana', 'navasana', 'baddha_konasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '全班齐声诵唱' },
          { step: '拜日式A × 5', duration: '10min', note: '梵文计数领课' },
          { step: '站立序列领课', duration: '15min', note: '标准梵文计数，每体式5呼吸，不等待' },
          { step: '坐姿序列上半部领课', duration: '18min', note: '从杖式到船式，严格计数节奏' },
          { step: 'Mysore练习', duration: '10min', note: '学生自主练习已学内容，教师辅助' },
          { step: '结束序列', duration: '5min', note: '简化收束+休息术' }
        ],
        keyPoints: [
          '领课中不等待任何人——这是阿斯汤加的传统',
          '如果跟不上，跳过体式继续跟节奏，不要停在原地',
          '领课是检验练习质量的"考试"——Mysore是"学习"'
        ],
        safetyNote: '领课中不要因为赶节奏而牺牲体式质量；跟不上就跳过'
      },
      {
        num: 6,
        title: '领课进阶与Mysore深化',
        subtitle: '从跟随到自主',
        desc: '本节课包含一段完整领课练习（含计数），随后进入更长时间的Mysore自练。重点训练学生在没有教师口令的情况下独立维持练习节奏的能力。教师在此阶段从"引导者"转变为"观察者"，通过辅助而非口令来教学。',
        objectives: [
          '能够在领课中完整跟随计数到个人边界',
          '在Mysore中建立稳定的自我练习节奏',
          '理解阿斯汤加教师的辅助角色——最少干预原则'
        ],
        poses: ['surya_namaskara_a', 'padangusthasana', 'trikonasana', 'parivrtta_trikonasana', 'parsvakonasana', 'virabhadrasana1', 'dandasana', 'paschimottanasana', 'baddha_konasana', 'janu_sirsasana', 'setu_bandhasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '开篇祈祷文' },
          { step: '领课练习', duration: '30min', note: '完整领课到束角式，梵文计数。教师不解释只计数' },
          { step: '短暂休息', duration: '3min', note: '喝水、调整' },
          { step: 'Mysore自练', duration: '20min', note: '学生从拜日式开始自主练习，教师仅辅助不口令' },
          { step: '结束序列', duration: '5min', note: '收束序列+休息术' }
        ],
        keyPoints: [
          'Mysore练习中呼吸就是你的老师——跟着呼吸走',
          '教师的辅助应该是"推动"而不是"代替"',
          '阿斯汤加练习的深度来自于年复一年的重复，不是不断增加新体式'
        ],
        safetyNote: 'Mysore练习中不确定的体式宁可跳过也不要错误练习'
      },
      {
        num: 7,
        title: '阈值体式工作',
        subtitle: '面对瓶颈',
        desc: '本节课聚焦每位学生的"阈值体式"——序列中做到某个体式就无法继续的那个位置。这节Mysore课中学生将在自己的阈值体式上花更多时间，学习如何与瓶颈共处而非强行突破。教师将针对不同学生的阈值提供个性化辅助和替代方案。',
        objectives: [
          '理解阈值体式是练习的一部分，不是障碍',
          '学会在自己的边界上深入练习而非跳过',
          '掌握针对常见阈值体式的辅助技巧'
        ],
        poses: ['marjaryasana', 'bitilakasana', 'paschimottanasana', 'baddha_konasana', 'upavistha_konasana', 'navasana', 'bakasana', 'urdhva_dhanurasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '开篇祈祷文' },
          { step: 'Mysore自练', duration: '45min', note: '每位学生练习到自己的阈值体式。教师观察并记录每位学生的阈值位置' },
          { step: '阈值体式专题', duration: '10min', note: '教师根据观察结果，对3-5个常见阈值体式做集中教学和辅助演示' },
          { step: '结束序列', duration: '3min', note: '收束+休息术' }
        ],
        keyPoints: [
          '阈值体式是老师给你的信息——它告诉你需要在哪里加强',
          '不要跳过阈值体式——在它上面练习就是最好的进步',
          '阿斯汤加大师常说："Practice and all is coming"——练习就好，一切会来'
        ],
        safetyNote: '阈值体式旁提供辅助工具（砖块、绑带）；不强迫任何突破'
      },
      {
        num: 8,
        title: '领课完整与Mysore整合',
        subtitle: '独立练习之路',
        desc: '本节课是阿斯汤加课程的结业课。包含一次完整的领课体验，以及一段长时间的Mysore自练。课后讨论如何建立居家自我练习的习惯——选择固定时间、固定空间、固定序列。阿斯汤加的精髓在于"自我练习"而非"跟随课程"。',
        objectives: [
          '能够完成一次完整的阿斯汤加领课',
          '具备独立进行Mysore自我练习的能力',
          '制定个人居家练习计划'
        ],
        poses: ['surya_namaskara_a', 'tadasana', 'uttanasana', 'trikonasana', 'parivrtta_trikonasana', 'virabhadrasana1', 'virabhadrasana2', 'dandasana', 'paschimottanasana', 'navasana', 'baddha_konasana', 'sarvangasana', 'halasana', 'savasana'],
        sequence: [
          { step: '开场祈祷', duration: '2min', note: '全班齐声诵唱' },
          { step: '完整领课', duration: '45min', note: '一级序列到个人边界的完整领课，梵文计数' },
          { step: '短暂休息', duration: '5min', note: '喝水、调整' },
          { step: 'Mysore自练', duration: '20min', note: '从拜日式开始自主练习到个人阈值，收束+休息术' },
          { step: '课程总结', duration: '8min', note: '讨论居家练习建议：每天清晨同一时间、同一地点、拜日式5遍起手。推荐练习频率：每周5-6天' }
        ],
        keyPoints: [
          '阿斯汤加的终极目标是Mysore自我练习——不依赖教师',
          '开始时练习时间短没关系（20分钟也可以），关键是每天坚持',
          '固定时间是建立习惯的关键——最好在日出前完成'
        ],
        safetyNote: '居家练习时无教师辅助，在倒立体式旁放置毛毯保护'
      }
  ],

  // ============================================================
  // 艾扬格精准瑜伽 (Iyengar) — 16 节课
  // ============================================================
  'iyengar': [
        // ---- 模块一：站立精准 (L1-L4) ----
        {
          num: 1,
          title: '三角式精研',
          subtitle: '一个体式的深度探索',
          desc: '本节课是艾扬格方法的典型示范——用15-20分钟只做一个体式：三角式。通过反复进入、退出、使用不同辅助工具，学生将发现"已经会"的体式中隐藏的无限细节。随后学习金字塔式的三种砖块高度变化，体验辅助工具如何改变体式本质。',
          objectives: [
            '理解艾扬格"一个体式深度学习"的教学方法',
            '掌握三角式的精准对齐（脚、膝、骨盆、脊柱、头部）',
            '学会使用三种砖块高度辅助金字塔式'
          ],
          poses: ['trikonasana', 'parsvottanasana', 'tadasana', 'adho_mukha_svanasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '山式站立，讲解艾扬格方法核心："精准对齐带来身心转化"' },
            { step: '三角式精研', duration: '20min', note: '步骤1：无辅助5呼吸→步骤2：手放砖块（高/中/低）→步骤3：背靠墙→步骤4：上方手臂绑带辅助→步骤5：两人一组互相观察。每步之间讨论感受' },
            { step: '换侧三角式精研', duration: '15min', note: '同上步骤，注意左右差异' },
            { step: '金字塔式教学', duration: '10min', note: '三种砖块高度：高（对齐髋部）→中（轻度前屈）→低（深度前屈）。每种停留5呼吸，感受不同高度对脊柱的影响' },
            { step: '站立前屈冷却', duration: '5min', note: '手抓大脚趾站立前屈→站立分腿前屈→下犬式' },
            { step: '摊尸式', duration: '7min', note: '摊尸式，毛毯覆盖腹部，砂袋放在大腿上辅助下沉' }
          ],
          keyPoints: [
            '艾扬格的核心：延长停留时间+精准对齐+辅助工具',
            '三角式中后脚外侧要压实地面，这是容易被忽视的关键',
            '"已经会"的体式不代表"已经精"'
          ],
          safetyNote: '高血压者在三角式中不要低头；膝盖有伤者砖块放在最高位置'
        },
        {
          num: 2,
          title: '战士一式的骨盆谜题',
          subtitle: '前髋向后、后髋向前',
          desc: '本节课深入解析战士一式中骨盆的对齐难题——前髋向后推、后髋向前拉，使骨盆正对前方。这是战士一式最困难也最有价值的部分。随后学习半月式的墙壁+砖块辅助法，让学生在没有恐惧的情况下体验半月式的空间感。',
          objectives: [
            '理解战士一式中骨盆正位的具体操作方法',
            '掌握半月式的墙壁辅助练习法',
            '学会用砖块和墙壁分解复杂体式'
          ],
          poses: ['virabhadrasana1', 'ardha_chandrasana', 'tadasana', 'supta_baddha_konasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '山式站立，回顾艾扬格中"骨盆是脊柱的根基"的理念' },
            { step: '骨盆解剖复习', duration: '5min', note: '用手触摸髂前上棘，感受骨盆的前倾/后倾/旋转' },
            { step: '战士一式骨盆对齐教学', duration: '18min', note: '步骤1：脚的位置确认（前后脚不在一条线上）→步骤2：双手扶髋，不举手，只做骨盆调整→步骤3：后手推后膝向前→步骤4：前手拉前髋向后→步骤5：骨盆正位后举手。每步3呼吸' },
            { step: '半月式墙壁教学', duration: '15min', note: '背靠墙→侧面转→下方手扶砖块→上方手贴墙→打开胸腔。墙壁提供安全感和对齐参考' },
            { step: '冷却', duration: '4min', note: '下犬式→前屈→仰卧束角式' },
            { step: '摊尸式', duration: '5min', note: '毛毯+抱枕支撑的摊尸式' }
          ],
          keyPoints: [
            '战士一式中大多数人骨盆没有正对前方——这等于还没有做到战士一式',
            '骨盆正位需要髋关节的外旋/内旋能力，不要用腰椎代偿',
            '墙壁是最被低估的辅助工具——它提供绝对的垂直参考'
          ],
          safetyNote: '膝关节不适者缩短前脚步幅；半月式靠墙练习时地面放毛毯'
        },
        {
          num: 3,
          title: '站立分腿前屈四变体',
          subtitle: '同一方向四种深度',
          desc: '本节课深入练习站立分腿前屈(Prasarita Padottanasana)的四个变体——从手撑地到双手背后到抓脚踝到头触地。每个变体针对不同的身体能力，也打开脊柱的不同层面。随后加入砖块夹大腿的幻椅式，建立大腿内旋的觉知。',
          objectives: [
            '掌握站立分腿前屈四个变体的精准要点',
            '理解幻椅式中砖块的作用（大腿内旋+膝对齐）',
            '学会使用辅助工具逐步加深体式'
          ],
          poses: ['prasarita_padottanasana', 'utkatasana', 'padangusthasana', 'balasana', 'supta_baddha_konasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '山式站立，脚开到约一条腿长度，确认脚的平行' },
            { step: '变体I教学', duration: '8min', note: '手撑地版：脊柱延展，头顶向地面方向走，不是弓背。5呼吸×3' },
            { step: '变体II教学', duration: '8min', note: '双手背后互扣（或抓绑带）→胸腔打开→折叠加深。5呼吸×3' },
            { step: '变体III教学', duration: '8min', note: '双手抓脚踝→手肘内夹→胸腔穿过双腿。需要髋部充分开放。5呼吸×3' },
            { step: '变体IV教学', duration: '5min', note: '头顶触地版（砖块辅助）。安全退出：双手撑地起身。3呼吸×2' },
            { step: '幻椅式+砖块', duration: '10min', note: '砖块夹在大腿之间→幻椅式→砖块不掉=大腿内旋=膝盖正对脚尖。3呼吸×5' },
            { step: '冷却', duration: '3min', note: '婴儿式→下犬式' },
            { step: '摊尸式', duration: '5min', note: '支撑摊尸式' }
          ],
          keyPoints: [
            '站立分腿前屈中双脚的外侧缘要压实地面',
            '变体之间的区别是脊柱深度，不是腿部距离',
            '砖块夹大腿是艾扬格独创的教学工具——物理反馈比口头提示有效'
          ],
          safetyNote: '高血压者在变体III/IV中保持头部高于心脏；退出时不要猛起身'
        },
        {
          num: 4,
          title: '扭转三角与鸟王式',
          subtitle: '旋转与缠绕',
          desc: '本节课学习扭转三角式——艾扬格体系中最具挑战的站立体式之一，以及鸟王式——四肢缠绕的平衡体式。扭转三角要求脊柱延展基础上的深度旋转，鸟王式则考验髋部灵活性和专注力。教学中引入绑带辅助扭转和靠墙辅助平衡。',
          objectives: [
            '掌握扭转三角式中脊柱延展与旋转的平衡',
            '学会鸟王式中四肢缠绕的逐步进入方法',
            '理解绑带在扭转辅助中的使用技巧'
          ],
          poses: ['parivrtta_trikonasana', 'garudasana', 'trikonasana', 'tadasana', 'supta_matsyendrasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '山式站立，肩部和髋关节旋转热身' },
            { step: '扭转三角式教学', duration: '18min', note: '步骤1：下方手放砖块（最高位）→步骤2：上方手叉腰→步骤3：先延展脊柱再旋转→步骤4：使用绑带辅助上方手抓脚→步骤5：逐步降低砖块高度。换侧同上' },
            { step: '鸟王式教学', duration: '15min', note: '步骤1：只做腿部缠绕→步骤2：只做手臂缠绕→步骤3：两者结合→步骤4：靠墙辅助。每步5呼吸' },
            { step: '靠墙扭转冷却', duration: '5min', note: '靠墙站立扭转每侧2分钟' },
            { step: '坐姿扭转', duration: '4min', note: '仰卧脊柱扭转每侧2分钟' },
            { step: '摊尸式', duration: '5min', note: '支撑摊尸式' }
          ],
          keyPoints: [
            '扭转三角中"先延长后旋转"是铁律——没有延展的扭转是伤害',
            '鸟王式中腿缠绕不了不是髋的问题，是臀中肌/梨状肌紧张',
            '绑带是扭转最好的朋友——它延长了你的手臂'
          ],
          safetyNote: '扭转三角中腰椎间盘问题者保持脊柱中立不要过度扭转'
        },

        // ---- 模块二：前屈骨盆力学 (L5-L7) ----
        {
          num: 5,
          title: '杖式与前屈精准',
          subtitle: '坐姿的根基',
          desc: '本节课从杖式开始——所有坐姿体式的基础。通过对比坐毛毯和不坐毛毯的差异，学生将理解骨盆前倾在坐姿中的重要性。随后深入坐姿前屈的三种绑带使用方法，从脚部抓手到脚心到脚后跟，每种抓法对脊柱角度有不同的影响。',
          objectives: [
            '掌握杖式中骨盆前倾的关键和毛毯的使用',
            '学会坐姿前屈中三种绑带抓法',
            '理解膝盖伸直与弯曲对坐姿前屈的影响'
          ],
          poses: ['dandasana', 'paschimottanasana', 'tadasana', 'balasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '坐姿，讲解坐骨和骨盆前倾的关系' },
            { step: '杖式对比教学', duration: '12min', note: '不坐毛毯的杖式→感受腰椎后弓→坐毛毯（1-2条）→感受骨盆前倾→腰椎自然内收。用手触摸坐骨确认位置' },
            { step: '坐姿前屈绑带抓法A', duration: '8min', note: '绑带绕脚掌→双手抓绑带两端→保持脊柱延长向前折。适合腘绳肌非常紧张者' },
            { step: '坐姿前屈绑带抓法B', duration: '8min', note: '绑带绕脚心→肘关节外展→胸腔向前。增加肩部灵活性要求' },
            { step: '坐姿前屈绑带抓法C', duration: '8min', note: '绑带绕脚后跟→肘关节内收→胸腔贴大腿。最深版本，需要腘绳肌充分延长' },
            { step: '屈膝版本对比', duration: '5min', note: '微屈膝的坐姿前屈→感受腰椎的变化。屈膝不是偷懒，是让脊柱优先的智慧' },
            { step: '摊尸式', duration: '6min', note: '抱枕支撑的摊尸式，毛毯覆盖' }
          ],
          keyPoints: [
            '坐姿体式中最重要的是骨盆前倾——没有前倾，所有坐姿都是"坐在腰椎上"',
            '毛毯的作用不是"舒服"而是"正确"——它改变的是骨盆角度',
            '前屈的目标不是头碰膝盖，而是从髋关节折叠'
          ],
          safetyNote: '腰椎间盘问题者必须坐毛毯且保持脊柱延长；膝盖过度伸展者微屈膝'
        },
        {
          num: 6,
          title: '头碰膝式与束角式',
          subtitle: '不对称前屈与髋部打开',
          desc: '本节课学习两个经典坐姿体式：头碰膝式（三种变体）和束角式。头碰膝式的三种变体——手抓伸直腿、手抓弯腿、双手过头抓脚——从不同角度打开髋部。束角式配合砖块辅助，让不同髋部灵活度的学生都能安全练习。',
          objectives: [
            '掌握头碰膝式三种变体的进入方法和目的',
            '学会束角式中砖块辅助的正确使用',
            '理解不对称前屈对脊柱的旋转作用'
          ],
          poses: ['janu_sirsasana', 'baddha_konasana', 'dandasana', 'upavistha_konasana', 'supta_baddha_konasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '坐毛毯，髋关节旋转热身' },
            { step: '头碰膝式变体A', duration: '10min', note: '弯腿脚跟抵大腿根→双手抓伸直腿脚→脊柱向伸直腿方向延长。砖块可放弯腿膝下' },
            { step: '头碰膝式变体B', duration: '8min', note: '弯腿脚跟不动→双手过头抓伸直腿脚→胸腔内旋加深。需要肩部灵活性' },
            { step: '头碰膝式变体C', duration: '8min', note: '弯腿脚跟靠近会阴→双手抓弯腿脚→胸腔向弯腿方向旋转。这是最深的扭转+前屈版本' },
            { step: '束角式教学', duration: '12min', note: '坐毛毯→砖块放两侧膝下→脊柱延展→前屈到砖块上。不用砖块对比：膝离地=髋紧张，砖块让膝盖有支撑' },
            { step: '仰卧束角式', duration: '5min', note: '抱枕支撑背部，砖块膝下，毛毯覆盖' },
            { step: '摊尸式', duration: '4min', note: '直接从仰卧束角式过渡到摊尸式' }
          ],
          keyPoints: [
            '头碰膝式中弯腿的作用是"固定"一侧骨盆，让另一侧自由延长',
            '三种变体的区别在于胸腔方向——中正→内旋→旋转',
            '束角式中砖块的高度决定了前屈的深度——从高到低逐步递进'
          ],
          safetyNote: '膝盖疼痛者头碰膝式中弯腿膝下必须放砖块或毛毯'
        },

        // ---- 模块三：后弯胸腔打开 (L7-L9) ----
        {
          num: 7,
          title: '椅子后弯与胸腔打开',
          subtitle: '被动打开的力量',
          desc: '本节课使用瑜伽椅和砖块进行被动胸腔打开练习。椅子后弯是艾扬格体系的经典体式——学生躺在椅背上，让重力完成胸腔的打开。砖块辅助的被动胸腔打开则可以在无意识放松的状态下深入。这两种练习适合作为主动后弯的准备，也可以独立作为修复性练习。',
          objectives: [
            '掌握椅子后弯的进入、停留和安全退出方法',
            '学会砖块被动胸腔打开的放置位置',
            '理解被动打开与主动后弯的互补关系'
          ],
          poses: ['setu_bandhasana', 'ustrasana', 'bhujangasana', 'supta_baddha_konasana', 'viparita_karani'],
          sequence: [
            { step: '开场', duration: '3min', note: '仰卧，感受自然呼吸，设定"打开胸腔"的意图' },
            { step: '砖块被动胸腔打开', duration: '12min', note: '仰卧→一块砖放在肩胛骨下缘（最低高度）→另一块放头部后方→双臂打开→停留3-5分钟。感受胸腔的被动上提' },
            { step: '椅子后弯教学', duration: '15min', note: '椅背朝自己→坐椅面边缘→双手抓椅背两侧→缓慢后仰→背部落在椅背上→头部穿过椅背。停留2-3分钟。退出时双手撑椅面缓慢起身' },
            { step: '椅子上犬式', duration: '8min', note: '椅子面朝自己→双手撑椅面→胸腔穿过椅面下方→上犬式变体。5呼吸×3' },
            { step: '主动后弯简短练习', duration: '5min', note: '眼镜蛇式→蝗虫式，感受被动打开后的主动后弯差异' },
            { step: '冷却', duration: '7min', note: '仰卧束角式+腿靠墙5分钟→摊尸式5分钟' }
          ],
          keyPoints: [
            '椅子后弯是"最安全"的深度后弯——椅子提供360度支撑',
            '被动打开后的主动后弯会明显更容易——这是被动→主动的进阶逻辑',
            '退出椅子后弯时要缓慢——快速起身会导致头晕'
          ],
          safetyNote: '椅子后弯中如有颈部不适在头下加毛毯；高血压者缩短停留时间'
        },
        {
          num: 8,
          title: '轮式准备',
          subtitle: '墙壁、绑带与砖块',
          desc: '本节课是艾扬格体系中的轮式准备课程。使用三种辅助工具：双手推墙壁（降低手臂负荷）、绑带环绕上臂（防止手肘外展）、砖块夹大腿（保持腿部内旋）。艾扬格方法不急于"做"轮式，而是通过大量准备让学生在正确的对齐中自然进入。',
          objectives: [
            '掌握墙壁轮式准备的标准方法',
            '学会绑带和砖块在轮式准备中的使用',
            '理解艾扬格后弯哲学：对齐优先于深度'
          ],
          poses: ['urdhva_dhanurasana', 'setu_bandhasana', 'ustrasana', 'bhujangasana', 'salabhasana', 'dhanurasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '仰卧，全身扫描，确认肩部和脊柱状态' },
            { step: '后弯热身', duration: '8min', note: '眼镜蛇式×3→蝗虫式×3→弓式×2。每个体式强调胸腔打开' },
            { step: '桥式递进', duration: '8min', note: '桥式→双手撑腰→砖块放骶骨下→抬起一只腿。桥式是轮式的直接准备' },
            { step: '墙壁轮式教学', duration: '15min', note: '步骤1：仰卧→脚踩墙→双手撑地→头顶碰地（不是轮式，是准备位）→步骤2：绑带环绕上臂（肘肩宽）→步骤3：砖块夹大腿→步骤4：推直手臂。全程有教师辅助' },
            { step: '反体式序列', duration: '8min', note: '仰卧束角式3min→坐姿前屈3min→仰卧扭转每侧1.5min' },
            { step: '摊尸式', duration: '3min', note: '支撑摊尸式' }
          ],
          keyPoints: [
            '墙壁轮式中墙壁提供了"不后退"的参考——脚不会滑',
            '绑带的作用不是限制而是"提醒"——提醒手肘不要外翻',
            '艾扬格中轮式可能需要数月甚至数年的准备——这很正常'
          ],
          safetyNote: '轮式尝试必须由教师辅助；手腕疼痛者继续停留在桥式'
        },
        {
          num: 9,
          title: '高级后弯准备',
          subtitle: '单腿轮式与下落式',
          desc: '本节课为有足够后弯基础的学生介绍更高级的后弯准备：单腿轮式（从一个轮式抬起一条腿）和站立下落式（从站立缓慢后弯到轮式）。这两种练习在艾扬格体系中通常需要数年的准备，本课只做介绍和体验，不追求完成。',
          objectives: [
            '了解单腿轮式的准备条件和进入方法',
            '体验下落式（drop back）的墙壁辅助版本',
            '理解高级后弯的风险边界和自我评估'
          ],
          poses: ['urdhva_dhanurasana', 'setu_bandhasana', 'ustrasana', 'dhanurasana', 'salabhasana', 'supta_baddha_konasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '站立，检查脊柱灵活性和肩部热身' },
            { step: '后弯热身', duration: '10min', note: '拜日式变体×2（上犬加深）→桥式×5→轮式×3' },
            { step: '单腿轮式教学', duration: '12min', note: '轮式中→重心移向左脚→右脚缓慢抬离地面→5呼吸→放回→换侧。关键：髋部不外翻、支撑腿有力。教师辅助髋部' },
            { step: '墙壁下落式体验', duration: '12min', note: '靠墙站立→双手举过头→开始缓慢后弯→手触墙→指尖沿墙下走→最终到地面/砖块。全程教师全程保护髋部。不是完成，是体验' },
            { step: '反体式', duration: '8min', note: '坐姿前屈5min→仰卧束角式3min→摊尸式5min' },
            { step: '摊尸式', duration: '5min', note: '砂袋放在大腿上，毛毯覆盖腹部' }
          ],
          keyPoints: [
            '单腿轮式不是"炫技"——它测试的是轮式中的正位和稳定',
            '下落式是阿斯汤加进阶序列的一部分，艾扬格中更推荐墙壁版本',
            '高级后弯的准备时间以年计——享受过程而非追求结果'
          ],
          safetyNote: '下落式必须有2名教师辅助或靠墙练习；单腿轮式必须有髋部保护'
        },

        // ---- 模块四：倒立 (L10-L13) ----
        {
          num: 10,
          title: '毛毯肩倒立',
          subtitle: '精确的测量与进入',
          desc: '本节课教授艾扬格标志性的毛毯肩倒立技术。使用三块毛毯叠放提供肩部高度，确保颈椎安全。详细讲解测量方法（手肘到手指的距离=肩部到毛毯边缘的距离）和从椅子的安全进入法。目标是在支撑中停留2分钟，建立对倒立的基础信心。',
          objectives: [
            '掌握毛毯肩倒立的三毛毯叠放和测量方法',
            '学会从椅子的安全进入肩倒立技术',
            '能够在辅助下停留2分钟'
          ],
          poses: ['sarvangasana', 'halasana', 'setu_bandhasana', 'viparita_karani', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '仰卧，检查颈部活动度（颈部不能转90度者不做肩倒立）' },
            { step: '肩倒立测量教学', duration: '10min', note: '步骤1：坐毛毯边缘→手肘撑地→量手肘到中指尖距离→标记毛毯位置→躺下时肩膀刚好在毛毯边缘外。这是最关键的步骤，错误测量=颈椎受伤' },
            { step: '辅助肩倒立', duration: '12min', note: '从肩桥进入→双手撑腰→双腿向上→教师辅助定位。检查：肩膀在毛毯外、颈椎无压力、下巴不压胸口。停留从30秒开始，逐步到2分钟' },
            { step: '从椅子进入肩倒立', duration: '10min', note: '坐椅面→滚动背部到椅背→双腿向上→椅背支撑背部。适合颈椎紧张或无法独立进入者' },
            { step: '犁式教学', duration: '5min', note: '肩倒立→双腿过头→脚趾触地/砖块。脚趾不触地也没关系，重点是胸腔打开' },
            { step: '摊尸式', duration: '5min', note: '肩倒立后必须摊尸式2分钟以上，让血液回流正常化' }
          ],
          keyPoints: [
            '肩倒立是艾扬格的"女王体式"——每天练习15分钟可改变身体',
            '测量正确=颈椎无压力——毛毯的高度刚好让肩膀比头部高',
            '从椅子进入是最安全的入门方法——适合所有水平'
          ],
          safetyNote: '颈椎问题者禁止肩倒立，改用腿靠墙；月经期不做倒立'
        },
        {
          num: 11,
          title: '肩倒立变体',
          subtitle: '从犁式到单腿',
          desc: '本节课在肩倒立稳定的基础上引入变体：犁式、膝碰耳式(Karnapidasana)、单腿肩倒立。通过变体增加倒立的多样性，同时逐步增加停留时间到5分钟。教学中强调倒立中的呼吸品质——如果呼吸变浅急促，说明需要退出。',
          objectives: [
            '掌握肩倒立的三个主要变体',
            '能够在无辅助下稳定停留3-5分钟',
            '理解倒立中呼吸品质是安全指标'
          ],
          poses: ['sarvangasana', 'halasana', 'setu_bandhasana', 'viparita_karani', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '仰卧，颈部活动度检查，肩部热身' },
            { step: '肩倒立2分钟', duration: '5min', note: '标准肩倒立2分钟，确认稳定后继续' },
            { step: '犁式深化', duration: '8min', note: '犁式→脚趾触地→双手背后互扣→滚动脊柱。从脚趾触地→脚背触地→脚踝触地逐步加深' },
            { step: '膝碰耳式', duration: '8min', note: '犁式→弯曲膝盖→膝盖靠近耳朵→双手环抱膝盖。停留1-2分钟。对甲状腺和副鼻窦有良好效果' },
            { step: '单腿肩倒立', duration: '10min', note: '肩倒立→缓慢降低一条腿到45度→5呼吸→回到双腿向上→换侧。核心挑战：降低的腿不改变骨盆位置' },
            { step: '摊尸式', duration: '6min', note: '摊尸式至少3分钟，缓慢起身' }
          ],
          keyPoints: [
            '肩倒立变体的核心是"骨盆不动"——只动腿',
            '膝碰耳式中颈椎不要承重——重量应该在肩膀上',
            '停留时间从2分钟到5分钟是逐步建立的——不要急于加时间'
          ],
          safetyNote: '膝碰耳式中颈椎不适立即退出到肩倒立；高血压者停留时间减半'
        },
        {
          num: 12,
          title: '椅子肩倒立与头倒立准备',
          subtitle: '每个人的倒立方案',
          desc: '本节课提供两种方案：无法完成标准肩倒立的学生使用椅子肩倒立替代；准备进入头倒立的学生学习前臂基础和墙壁准备。艾扬格体系强调"每个人都应该有倒立的体验"——不同的身体条件使用不同的方法。',
          objectives: [
            '掌握椅子肩倒立的完整方法',
            '学会头倒立的前臂基础和墙壁准备',
            '理解如何根据学生条件选择倒立方案'
          ],
          poses: ['sarvangasana', 'setu_bandhasana', 'viparita_karani', 'sirsasana', 'halasana', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '根据学生条件分为两组：椅子肩倒立组/头倒立准备组' },
            { step: '椅子肩倒立教学（A组）', duration: '15min', note: '椅背靠墙→坐椅面→肩胛骨落在椅面上沿→双手抓椅背下沿→双腿向上→毯子盖眼。这是标准肩倒立的完全替代品' },
            { step: '头倒立前臂基础（B组）', duration: '15min', note: '步骤1：四点跪姿→手肘撑地（与肩同宽）→量手肘到手指距离=手肘间距离→步骤2：双手十指交叉→步骤3：头顶放手指形成的"杯子"中→步骤4：靠墙→抬起臀部→走路→脚离墙' },
            { step: '两组互换体验', duration: '10min', note: '每组体验另一种方法，理解不同身体需要的不同方案' },
            { step: '腿靠墙', duration: '5min', note: '腿靠墙5分钟，温和的倒立替代' },
            { step: '摊尸式', duration: '5min', note: '摊尸式，砂袋+毛毯' }
          ],
          keyPoints: [
            '椅子肩倒立对颈椎完全无压力——是最安全的倒立体式',
            '头倒立准备中最重要的是前臂距离=肩宽——太窄=压力集中',
            '头倒立中70%的重量应该在手臂上，只有30%在头顶'
          ],
          safetyNote: '头倒立绝对不可在没有教师辅助和墙壁保护下练习；颈椎受伤史者禁止'
        },
        {
          num: 13,
          title: '头倒立进阶',
          subtitle: '从墙壁到独立',
          desc: '本节课是头倒立的系统进阶课程。从靠墙双脚离地→屈膝向上→伸直腿→停留30秒→1分钟→3分钟，逐步建立头倒立的稳定性和耐力。教学中强调直线（手腕→手肘→肩膀→髋部→脚踝在一条垂直线上）和放松（面部肌肉、喉咙、肩膀的放松）。',
          objectives: [
            '掌握头倒立的6步进阶方法',
            '能够在墙壁辅助下稳定停留1分钟以上',
            '学会头倒立中的安全退出方法'
          ],
          poses: ['sirsasana', 'sarvangasana', 'setu_bandhasana', 'adho_mukha_svanasana', 'balasana', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '颈部热身+肩部打开（穿针式变体）' },
            { step: '头倒立准备复习', duration: '5min', note: '前臂基础确认、头顶位置确认、直线检查' },
            { step: '第1步：双脚离地', duration: '5min', note: '靠墙→走路→双脚同时离地1秒→放回。重复5次。建立核心激活' },
            { step: '第2步：屈膝向上', duration: '5min', note: '双脚离地→屈膝→膝盖贴胸口→停留5呼吸。检查直线' },
            { step: '第3步：伸直腿', duration: '5min', note: '屈膝→缓慢伸直腿→脚跟靠墙→停留30秒。检查：臀部没有超过肩膀' },
            { step: '第4-6步：时间递增', duration: '10min', note: '30秒→1分钟→2分钟。每次增加前回到婴儿式休息。教师持续观察直线' },
            { step: '退出练习', duration: '3min', note: '练习安全退出：屈膝→臀部下降→脚触地→婴儿式休息。绝不可直接"掉"下来' },
            { step: '摊尸式', duration: '4min', note: '摊尸式至少2分钟' }
          ],
          keyPoints: [
            '头倒立是"国王体式"——但前提是正确练习，错误练习是伤害',
            '直线是头倒立的生命线——不直=不稳定=危险',
            '面部放松是高级技巧——新手通常咬牙/皱眉/瞪眼'
          ],
          safetyNote: '高血压、心脏病、青光眼、颈椎问题者绝对禁止头倒立'
        },

        // ---- 模块五：序列编排与疗愈 (L14-L16) ----
        {
          num: 14,
          title: '艾扬格序列逻辑',
          subtitle: '体式编排的艺术',
          desc: '本节课讲解艾扬格体系独特的序列编排逻辑——与Vinyasa的"流动"不同，艾扬格序列遵循"能量方向"原则：倒立开始（能量向上）→站立（扎根大地）→坐姿前屈（内收）→后弯（打开）→扭转（净化）→修复（整合）。理解这个逻辑后，教师就能根据学生需要设计有效的课程。',
          objectives: [
            '理解艾扬格序列编排的六大能量方向',
            '学会根据课程目标选择合适的序列结构',
            '掌握不同时长课程（30/60/90分钟）的时间分配'
          ],
          poses: ['sirsasana', 'sarvangasana', 'tadasana', 'trikonasana', 'dandasana', 'paschimottanasana', 'setu_bandhasana', 'supta_matsyendrasana', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '讲解艾扬格序列编排的核心理念' },
            { step: '序列逻辑讲解', duration: '10min', note: '倒立（能量向上）→站立（扎根+身体觉知）→坐姿前屈（神经系统镇静）→后弯（胸腔打开）→扭转（脊柱净化）→修复（深度休息）' },
            { step: '30分钟序列示范', duration: '25min', note: '教师示范一个30分钟序列：头倒立5min→三角式+战士二各3min→坐姿前屈3min→桥式3min→扭转2min→摊尸式5min' },
            { step: '序列设计练习', duration: '12min', note: '学生根据给定主题（如"上午能量课"或"晚间放松课"）设计60分钟序列框架' },
            { step: '分享与讨论', duration: '10min', note: '每人分享设计思路，集体讨论优化' }
          ],
          keyPoints: [
            '艾扬格序列不追求"花哨"，追求"有效"——每个体式都有明确目的',
            '倒立放在开头是艾扬格的特色——在其他流派中这是不可思议的',
            '修复体式不是"结束"而是"整合"——它让前面所有体式的效果被身体吸收'
          ],
          safetyNote: '设计中必须考虑反体式——每个强体式后都要有平衡体式'
        },
        {
          num: 15,
          title: '常见问题疗愈处方',
          subtitle: '瑜伽作为治疗工具',
          desc: '本节课聚焦瑜伽作为辅助治疗工具的应用——针对下背部疼痛、颈部紧张、焦虑/失眠三种最常见的现代人问题，设计针对性的艾扬格序列。艾扬格体系以其精准的辅助工具使用而闻名，在疗愈领域有大量临床应用和研究成果。',
          objectives: [
            '掌握下背部疼痛的艾扬格辅助序列',
            '学会颈部紧张的缓解体式和辅助方法',
            '理解瑜伽对焦虑/失眠的神经学原理'
          ],
          poses: ['setu_bandhasana', 'adho_mukha_svanasana', 'supta_matsyendrasana', 'viparita_karani', 'supta_baddha_konasana', 'paschimottanasana', 'balasana', 'savasana'],
          sequence: [
            { step: '开场', duration: '3min', note: '讲解艾扬格疗愈瑜伽的基本原则："做你能做的，不做你做不到的"' },
            { step: '下背部疼痛序列', duration: '15min', note: '支撑桥式5min（砖块）→仰卧束角式5min→猫牛式×10→下犬式（椅子辅助）3min→仰卧抱膝到胸2min' },
            { step: '颈部紧张序列', duration: '15min', note: '支撑站立前屈3min→椅子上的胸腔打开3min→仰卧颈椎释放（毛毯卷）3min→穿针式变体每侧2min→摊尸式颈椎支撑4min' },
            { step: '焦虑/失眠序列', duration: '15min', note: '腿部靠墙10min→仰卧束角式（抱枕+砖块+毛毯）8min→摊尸式（眼部枕头+腹部毛毯+砂袋）10min。全程呼吸引导' },
            { step: '讨论', duration: '7min', note: '讨论何时需要转介给医疗专业人士——瑜伽是辅助，不是替代' }
          ],
          keyPoints: [
            '疗愈序列的核心是"支撑"——尽可能多地使用辅助工具',
            '急性疼痛期只做修复性体式，慢性期可以逐步加入主动体式',
            '焦虑/失眠的序列重点在延长呼气和延长停留时间'
          ],
          safetyNote: '疗愈序列必须先了解学生的完整医疗史；急性炎症期不做任何体式'
        },
        {
          num: 16,
          title: '手法辅助与整合',
          subtitle: '用双手传递智慧',
          desc: '本节课是艾扬格课程的结业课。学生将学习并练习基本的手法辅助技巧——如何用手引导而不强迫、如何通过触碰传递信息而非力量。每位学生将设计并带领一段15分钟的艾扬格风格序列，其他同学作为"学生"体验。这是从学习者到教学者的最后一步。',
          objectives: [
            '掌握基本的手法辅助原则和技巧',
            '能够设计并教授一段艾扬格风格序列',
            '完成从学员到教师的能力转化'
          ],
          poses: ['tadasana', 'trikonasana', 'virabhadrasana1', 'adho_mukha_svanasana', 'paschimottanasana', 'setu_bandhasana', 'supta_baddha_konasana', 'savasana'],
          sequence: [
            { step: '手法辅助原则讲解', duration: '10min', note: '原则1：先问再碰→原则2：触碰是引导不是推→原则3：从轻到重→原则4：持续观察面部表情→原则5：尊重个人空间' },
            { step: '辅助技巧练习', duration: '15min', note: '两人一组，练习三角式辅助（髋部引导）、坐姿前屈辅助（脊柱延展引导）、桥式辅助（髋部托举）。每对轮流做辅助者和被辅助者' },
            { step: '学生教学实践', duration: '25min', note: '每人15分钟教学片段：设计主题→选择体式→使用辅助工具→给予手法辅助→接受反馈' },
            { step: '课程总结', duration: '10min', note: '回顾16节课的旅程：从站立精准到倒立进阶到疗愈应用。艾扬格瑜伽的精髓——"通过身体来认识自我"' }
          ],
          keyPoints: [
            '好的辅助像" whispers "（低语），不是"shouts"（喊叫）',
            '辅助的目的是帮助学生感受正确的体式，不是帮他们做到更深的版本',
            '艾扬格说："我教的是瑜伽，不是B.K.S. Iyengar yoga"——精准的最终目的是自由'
          ],
          safetyNote: '辅助时注意保护自己的身体力学——弯曲膝盖而不是弯腰'
        }
  ],

  // ============================================================
  // 阴瑜伽 (Yin) — 6 节主题课
  // ============================================================
  'yin': [
          {
            num: 1,
            title: '髋部开放',
            subtitle: '释放储存的情绪',
            desc: '髋部是阴瑜伽中最重要的区域——被认为是情绪和压力的储存库。本节课通过蝴蝶式、鸽子式和双鸽子式等经典髋部体式，配合每次体式后的反弹休息，引导学生在长时间停留中释放深层紧张。这是阴瑜伽的基础体验课。',
            objectives: [
              '理解阴瑜伽的三大原则：找到边界、保持不动、停留时间',
              '掌握髋部开放的四个经典体式',
              '学会在反弹休息中观察身体感受'
            ],
            poses: ['baddha_konasana', 'eka_pada_rajakapotasana', 'agnistambhasana', 'supta_baddha_konasana', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '阴瑜伽三原则讲解：1.找到边缘（第一丝拉伸感）2.保持不动（不调整不抓挠）3.停留时间（3-5分钟让筋膜释放）' },
              { step: '蝴蝶式', duration: '5min', note: '第一个体式，建立停留节奏。脚掌相对，膝盖自然外开。可以身体前倾增加深度，但不超过70%的极限' },
              { step: '反弹休息', duration: '1min', note: '仰卧，感受效果渗透。不判断、不比较，只是观察' },
              { step: '鸽子式右侧', duration: '4min', note: '前腿膝盖不适时减小胫骨角度。髋部不齐是正常的，让重力自然拉开' },
              { step: '反弹休息', duration: '2min', note: '仰卧，观察右髋的感受变化' },
              { step: '鸽子式左侧', duration: '4min', note: '注意左右差异——记录但不判断' },
              { step: '反弹休息', duration: '2min', note: '仰卧' },
              { step: '双鸽子式右侧', duration: '4min', note: '坐骨下方垫毛毯。前方腿叠后方腿，脚踝不对膝盖' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '双鸽子式左侧', duration: '4min', note: '对比鸽子式和双鸽子式的感受差异——不同的髋部层次' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '蝴蝶式加深', duration: '5min', note: '回到蝴蝶式，感受与开场的差异——通常已经明显加深' },
              { step: '摊尸式', duration: '5min', note: '摊尸式，引导身体扫描，感谢自己的练习' }
            ],
            keyPoints: [
              '阴瑜伽中"不动"是关键——每调整一次，筋膜的释放就重新开始',
              '反弹休息是阴瑜伽的独特元素——不要跳过',
              '髋部的紧张往往与情绪有关——允许感受浮现，不需要分析'
            ],
            safetyNote: '膝盖疼痛立即退出体式；孕妇鸽子式改为仰卧鸽子'
          },
          {
            num: 2,
            title: '脊柱灵活',
            subtitle: '蛇的智慧',
            desc: '本节课聚焦脊柱的全方位活动——前屈、侧弯、旋转、伸展。通过毛毛虫式、香蕉式、仰卧脊柱扭转和儿童式，让脊柱在长时间停留中恢复自然的灵活性。脊柱是身体的"中央通道"，也是中医中督脉和膀胱经的走向。',
            objectives: [
              '掌握脊柱四个方向的活动体式',
              '理解侧卧香蕉式的精准摆放方法',
              '学会在脊柱练习中结合呼吸引导'
            ],
            poses: ['paschimottanasana', 'malasana', 'supta_matsyendrasana', 'balasana', 'supta_baddha_konasana', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '仰卧感受自然呼吸，引导注意力沿脊柱从头到尾骨移动' },
              { step: '毛毛虫式', duration: '5min', note: '坐姿双腿伸直→从髋部折叠→手抱脚或放在小腿两侧。重点是放松腹部，让重力拉脊柱' },
              { step: '反弹休息', duration: '1min', note: '仰卧，伸展双腿感受腘绳肌' },
              { step: '青蛙式准备', duration: '3min', note: '宽脚蹲，手肘撑地，打开髋部为脊柱活动做准备' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '香蕉式右侧', duration: '4min', note: '侧卧→双腿微屈→上方腿越过下方腿→上方手过头抓边缘或放地板。感受整个侧面的拉伸' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '香蕉式左侧', duration: '4min', note: '对比左右侧的灵活性差异' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '仰卧脊柱扭转右侧', duration: '5min', note: '仰卧→右膝弯曲倒向左侧→右肩尽量贴地。呼吸引导：吸气延展脊柱，呼气加深扭转' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '仰卧脊柱扭转左侧', duration: '5min', note: '同上步骤' },
              { step: '儿童式', duration: '5min', note: '膝盖分开大一点，手臂向前伸展，额头触地。这是修复性的前屈' },
              { step: '摊尸式', duration: '5min', note: '摊尸式，感受脊柱被"活动"后的轻盈' }
            ],
            keyPoints: [
              '脊柱的灵活性来自椎间盘的水分和韧带的弹性——阴瑜伽的长时间停留正好滋养这些组织',
              '香蕉式不只是"侧弯"——它打开整个侧面（从腋下到髋部）',
              '脊柱扭转中肩膀贴地比膝盖触地更重要'
            ],
            safetyNote: '脊柱扭转中如感到刺痛立即减轻幅度；骨质疏松者避免深度扭转'
          },
          {
            num: 3,
            title: '前侧链拉伸',
            subtitle: '打开心的铠甲',
            desc: '本节课聚焦身体前侧链的打开——从髋屈肌到腹部到胸腔。现代人的前侧链因久坐而持续缩短，导致呼吸浅、体态前倾、情绪压抑。通过龙式、仰卧英雄式和鱼式支撑，逐步释放前侧链的深层紧张。这是情绪释放最强烈的一节课。',
            objectives: [
              '理解前侧链缩短对体态和情绪的影响',
              '掌握龙式、仰卧英雄式、鞍式三个前侧链体式',
              '学会处理强烈情绪释放的教学方法'
            ],
            poses: ['eka_pada_rajakapotasana', 'supta_virasana', 'kapotasana_prep', 'supta_baddha_konasana', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '坐姿，讲解前侧链解剖：髂腰肌→腹直肌→胸小肌→胸锁乳突肌。前侧链是"自我保护"的肌肉——打开它需要安全感' },
              { step: '龙式右侧', duration: '4min', note: '前脚踩手外侧（加深髋屈肌）→后膝着地→双手撑地或肘支撑。可以在后腿膝盖下垫毛毯' },
              { step: '反弹休息', duration: '2min', note: '仰卧，感受髋屈肌的释放' },
              { step: '龙式左侧', duration: '4min', note: '同上' },
              { step: '反弹休息', duration: '2min', note: '仰卧' },
              { step: '鞍式', duration: '4min', note: '跪坐→双脚外开→臀部向脚跟方向坐。双手身后撑地支撑。可以在臀部下垫毛毯。强烈拉伸股四头肌和髋屈肌' },
              { step: '反弹休息', duration: '2min', note: '仰卧，双腿伸展' },
              { step: '仰卧英雄式', duration: '4min', note: '靠抱枕或 Bolster 的支撑版英雄式前屈。前侧链完全打开。如膝盖不适立即退出' },
              { step: '反弹休息', duration: '2min', note: '仰卧，双膝抱胸释放腰椎' },
              { step: '支撑鱼式', duration: '3min', note: '抱枕放肩胛骨下→胸腔打开→头部有支撑。前侧链打开的巅峰体式' },
              { step: '摊尸式', duration: '8min', note: '长时间摊尸式，前侧链打开后身体需要时间整合。引导呼吸到胸腔前侧' }
            ],
            keyPoints: [
              '前侧链打开时情绪容易浮现——这是正常的，不是"出问题"',
              '鞍式中膝盖不适=立刻退出，不硬撑',
              '仰卧英雄式是最强烈的阴瑜伽体式之一——务必使用充分支撑'
            ],
            safetyNote: '膝盖有伤者跳过鞍式和仰卧英雄式；心悸或情绪过度激动时改为仰卧束角式'
          },
          {
            num: 4,
            title: '经络平衡',
            subtitle: '能量通道的畅通',
            desc: '本节课从中医经络理论出发，设计针对肾/膀胱经、肝/胆经、脾/胃经的体式序列。阴瑜伽与中医经络理论有天然的结合——长时间停留的体式可以刺激筋膜中的经络通道，促进气血流通。每个体式都会说明对应的经络及其生理功能。',
            objectives: [
              '了解三条主要经络的走向和功能',
              '掌握与经络对应的阴瑜伽体式',
              '学会在教学中融入基本的经络知识'
            ],
            poses: ['baddha_konasana', 'eka_pada_rajakapotasana', 'bhujangasana', 'supta_baddha_konasana', 'supta_matsyendrasana', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '讲解经络基础：肾/膀胱（后侧/恐惧→信任）、肝/胆（侧面/愤怒→宽容）、脾/胃（前侧/焦虑→安定）' },
              { step: '蝴蝶式', duration: '5min', note: '对应肾/膀胱经。髋部内收打开大腿内侧（脾经）。引导：吸气想象能量沿脊柱上升' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '龙式每侧', duration: '4min/side', note: '对应脾/胃经（前侧链）和肝/胆经（髋外侧）。前侧链打开促进消化能量流动' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '人面狮身式', duration: '4min', note: '对应肾/膀胱经（脊柱前侧链）。温和的后弯刺激前侧经络。前臂撑地，胸腔微抬' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '支撑鱼式', duration: '3min', note: '对应心/小肠经和肺/大肠经。胸腔完全打开，呼吸深入' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '仰卧脊柱扭转每侧', duration: '4min', note: '对应肝/胆经（侧面旋转）。扭转清除能量淤堵' },
              { step: '摊尸式', duration: '8min', note: '摊尸式，引导全身经络的畅通想象：像河流一样流过身体每个角落' }
            ],
            keyPoints: [
              '经络知识不是"玄学"——它与现代解剖学中的筋膜链高度吻合',
              '每个体式都同时刺激多条经络，不需要"精确对应"',
              '经络知识可以作为教学语言增加课堂深度，但不要变成解剖课'
            ],
            safetyNote: '孕妇避免仰卧扭转；经期不做倒立体式'
          },
          {
            num: 5,
            title: '秋季收敛',
            subtitle: '顺应自然的节奏',
            desc: '本节课是一节"时令阴瑜伽"——根据中医"天人合一"的理念，秋季对应肺经和大肠经，是收敛、释放、让旧去新来的季节。体式选择以支撑前屈和轻柔扭转为主，帮助身体顺应秋季的"收"的能量。这节课展示了阴瑜伽如何与自然节律相结合。',
            objectives: [
              '理解中医秋季养生原理与阴瑜伽的结合',
              '掌握支撑前屈在情绪释放中的应用',
              '学会设计季节性阴瑜伽课程'
            ],
            poses: ['paschimottanasana', 'supta_matsyendrasana', 'supta_baddha_konasana', 'balasana', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '讲解秋季与肺/大肠经的关系：秋季是"释放"的季节——像树木落叶一样，让不需要的东西自然脱落' },
              { step: '支撑坐姿前屈', duration: '5min', note: '坐姿→Bolster 放在大腿上→折叠在 Bolster 上。前屈是"向内收敛"的体式，符合秋季能量。配合呼气延长' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '支撑儿童式', duration: '5min', note: '膝盖分开→Bolster 放在胸腹之间→折叠在上面。安全感的体式，秋季容易产生"孤独感"，这个体式提供温暖包裹' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '仰卧脊柱扭转每侧', duration: '5min', note: '轻柔扭转帮助大肠经的"排出"功能——不是物理排便，是能量的释放。呼气时加深扭转' },
              { step: '反弹休息', duration: '1min', note: '仰卧' },
              { step: '仰卧束角式', duration: '8min', note: '抱枕支撑→毛毯覆盖→砖块膝下。完全支撑的打开体式。秋季呼吸法的引导：4-7-8呼吸法（吸4-屏7-呼8）' },
              { step: '摊尸式', duration: '10min', note: '长时间摊尸式，这是秋季最重要的体式——给身体足够的"收"的时间' }
            ],
            keyPoints: [
              '季节性瑜伽不是"迷信"——它帮助人们与自然环境保持连接',
              '秋季前屈多于后弯，收敛多于打开——与春季的课程设计相反',
              '支撑体式是秋季课的主角——让身体在"被包裹"中放松'
            ],
            safetyNote: '秋季干燥注意补充水分；过敏者在俯卧体式中面部垫干净毛巾'
          },
          {
            num: 6,
            title: '深度放松',
            subtitle: '最小的努力最大的释放',
            desc: '本节课是阴瑜伽课程的收官之作——一节纯修复性课程。所有体式都使用充分支撑（抱枕、毛毯、砖块、砂袋），体式间的过渡极其缓慢。目标是让学生体验到"完全放手"的状态——不是睡觉，而是清醒的深度放松。这是现代高压生活中最稀缺的体验。',
            objectives: [
              '掌握四种核心修复性体式的支撑方法',
              '学会引导学生进入深度放松状态',
              '理解"最少努力最大效果"的阴瑜伽哲学'
            ],
            poses: ['balasana', 'supta_baddha_konasana', 'viparita_karani', 'savasana'],
            sequence: [
              { step: '开场', duration: '5min', note: '仰卧，引导全身扫描。设定意图：这节课什么都不需要"做"，只需要"允许"——允许身体放松、允许呼吸自然、允许感受存在' },
              { step: '支撑儿童式', duration: '5min', note: '宽膝→Bolster 胸腹下→额头放砖块或毛毯卷。完全被支撑的胎儿姿势。引导：感受被包裹的安全感' },
              { step: '缓慢过渡', duration: '1min', note: '极缓慢地起身——不要急着动，先动手指和脚趾' },
              { step: '支撑仰卧束角式', duration: '8min', note: '抱枕纵向放背部→砖块膝下→毛毯盖腿→眼部枕头→砂袋放在腹部。这是"最接近瑜伽Nidra"的阴瑜伽体式。引导从脚到头的逐区放松' },
              { step: '缓慢过渡', duration: '1min', note: '保持缓慢——这是深度放松课的一部分' },
              { step: '腿靠墙', duration: '10min', note: '臀部靠墙或微微离开→双腿靠墙→眼部枕头→毛毯覆盖。温和倒立促进血液回流。引导：想象双腿变成水的重量' },
              { step: '缓慢过渡到摊尸式', duration: '2min', note: '膝盖弯曲侧滚→缓慢移到垫子中央' },
              { step: '摊尸式', duration: '10min', note: '终极的阴瑜伽体式。毛毯→眼部枕头→砂袋→腹部毛毯。引导：你什么都不是，也不需要成为什么。只是存在。课程结束后轻敲地面唤醒' }
            ],
            keyPoints: [
              '深度放松比"做体式"更难——大部分人不习惯"什么都不做"',
              '支撑不是"偷懒"——它让深层组织在没有防御的情况下释放',
              '教师的语言在修复性课程中比体式更重要——语速慢、声音低、充满空间'
            ],
            safetyNote: '深度放松后起身要极其缓慢（先侧卧再坐起），避免血压骤降导致头晕'
          }
  ]
};

