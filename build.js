#!/usr/bin/env node
// Build script: generates individual HTML files for each course and lesson
var fs = require('fs');
var path = require('path');

// ── Load CSS from index.html ──
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const cssMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/);
const CSS = cssMatch ? cssMatch[1] : '';

// ── Load pose data ──
var poseSrc = fs.readFileSync(path.join(__dirname, 'data/poses.js'), 'utf8');
var POSES = new Function(poseSrc + '; return POSES;')();

// ── SVG pose renderer ──
function poseSvg(poseId, opts = {}) {
  var pose = POSES[poseId];
  if (!pose) return '';
  var w = opts.width || 160, color = opts.color || '#3A5248', showLabel = opts.showLabel !== false;
  var s = w / 200, h = Math.round(280 * s), p = pose;
  function pt(a) { return a.map(function(v){return Math.round(v * s)}); }
  function q(a,b,c){ var a1=pt(a),b1=pt(b),c1=pt(c); return 'M'+a1[0]+','+a1[1]+' Q'+b1[0]+','+b1[1]+' '+c1[0]+','+c1[1]; }
  var sv='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg" style="display:block">';
  sv+='<circle cx="'+Math.round(w*.5)+'" cy="'+Math.round(h*.48)+'" r="'+Math.round(90*s)+'" fill="none" stroke="'+color+'" stroke-width="'+Math.round(.5*s)+'" opacity=".08"/>';
  sv+='<rect x="'+Math.round(30*s)+'" y="'+Math.round(268*s)+'" width="'+Math.round(140*s)+'" height="'+Math.round(6*s)+'" rx="'+Math.round(3*s)+'" fill="'+color+'" opacity=".06"/>';
  var sw=Math.round(2.2*s),sh=Math.round(2*s),hr=Math.round(11*s);
  if(p.chest){sv+='<path d="'+q(p.neck,p.chest,p.hip)+'" fill="none" stroke="'+color+'" stroke-width="'+sw+'" stroke-linecap="round"/>';}
  else{var n=pt(p.neck),hp=pt(p.hip);sv+='<path d="M'+n[0]+','+n[1]+' L'+hp[0]+','+hp[1]+'" fill="none" stroke="'+color+'" stroke-width="'+sw+'" stroke-linecap="round"/>';}
  sv+='<path d="'+q(p.sL,[((p.sL[0]+p.sR[0])/2),((p.sL[1]+p.sR[1])/2)],p.sR)+'" fill="none" stroke="'+color+'" stroke-width="'+sw+'" stroke-linecap="round"/>';
  sv+='<path d="'+q(p.sL,p.eL,p.hL)+'" fill="none" stroke="'+color+'" stroke-width="'+sh+'" stroke-linecap="round"/>';
  sv+='<path d="'+q(p.sR,p.eR,p.hR)+'" fill="none" stroke="'+color+'" stroke-width="'+sh+'" stroke-linecap="round"/>';
  sv+='<path d="'+q(p.hiL,p.kL,p.fL)+'" fill="none" stroke="'+color+'" stroke-width="'+sw+'" stroke-linecap="round"/>';
  sv+='<path d="'+q(p.hiR,p.kR,p.fR)+'" fill="none" stroke="'+color+'" stroke-width="'+sw+'" stroke-linecap="round"/>';
  var hd=pt(p.head);sv+='<circle cx="'+hd[0]+'" cy="'+hd[1]+'" r="'+hr+'" fill="'+color+'" opacity=".12" stroke="'+color+'" stroke-width="'+sh+'"/>';
  if(showLabel)sv+='<text x="'+Math.round(w/2)+'" y="'+(h-2)+'" text-anchor="middle" font-family="Work Sans,sans-serif" font-size="'+Math.round(10*s)+'" font-weight="500" fill="'+color+'" opacity=".7">'+p.name+'</text>';
  sv+='</svg>';return sv;
}

// ── Load lesson data ──
function loadData(filename) {
  var src = fs.readFileSync(path.join(__dirname, 'data', filename), 'utf8');
  src = src.replace(/^export\s+default\s+/gm, '').replace(/^var\s+\w+\s*;?\s*$/gm, '');
  var m = src.match(/(?:const|var)\s+(\w+)\s*=/);
  if (!m) return {};
  try { var fn = new Function(src + '; return ' + m[1] + ';'); return fn(); }
  catch(e) { console.error('Error loading ' + filename + ':', e.message); return {}; }
}

var foundationLessons = loadData('lessons-foundation.js');
var progressiveLessons = loadData('lessons-progressive.js');
var workshopLessons = loadData('lessons-workshop.js');

function getAllLessons(cid) {
  return foundationLessons[cid] || progressiveLessons[cid] || workshopLessons[cid] || null;
}

// ── Course data ──
var COURSES = [
  {id:'yoga-basics',name:'瑜伽入门',nameEn:'Yoga Basics',cat:'foundation',level:1,duration:60,
    audience:'零基础学员',prereq:[],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带'],
    desc:'专为从未接触过瑜伽的学员设计。不追求体式的深度，而是建立对身体的觉知、正确的呼吸模式和安全的练习习惯。',
    objectives:['理解瑜伽练习的基本原则','掌握 15-20 个基础体式的安全进入与退出','建立腹式呼吸和乌加依呼吸的基本模式','学会使用辅具降低体式难度','建立每周 2-3 次的规律练习节奏'],
    outline:[{title:'模块一：认识身体（第 1-2 课）',text:'瑜伽练习前的注意事项、腹式呼吸练习、身体扫描、基础热身序列'},{title:'模块二：站立根基（第 3-4 课）',text:'足弓激活、膝关节安全要点、站立体式的核心启动'},{title:'模块三：地面体式（第 5-6 课）',text:'坐姿骨盆正位、前屈中的脊柱延展、带子辅助的使用方法'},{title:'模块四：串联与呼吸（第 7-8 课）',text:'乌加依呼吸入门、简化拜日式的学习与完整串联'}],
    schedule:[['静心调息','5min','坐姿/仰卧，腹式呼吸，设定意图'],['热身','10min','关节活动、猫牛式'],['主题教学','30min','当堂核心体式分解教学'],['整合串联','10min','体式串联为简短序列'],['放松收束','5min','挺尸式 Savasana']],
    note:'完成 8 次课程后，学员应能独立完成简化拜日式、在 15 个基础体式中保持稳定停留，并具备进入哈他瑜伽课程的能力。'},
  {id:'hatha',name:'哈他瑜伽',nameEn:'Hatha Yoga',cat:'foundation',level:2,duration:75,
    audience:'有3个月以上基础的学员',prereq:['瑜伽入门'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯'],
    desc:'哈他瑜伽是所有体式练习的母体。注重每个体式的精准停留，通过较长的保持时间深入体会身体在体式中的工作方式。节奏缓慢但绝不轻松。',
    objectives:['将体式库扩展至 40+ 个体式','理解每个体式的骨骼对齐原则','掌握乌加依呼吸在体式中的持续运用','建立体式的内在觉知','初步理解体式的功效与禁忌'],
    outline:[{title:'模块一：站立体式深化（第 1-3 课）',text:'战土系列深化、半月式、扭转侧角、鹰式'},{title:'模块二：前屈与髋关节（第 4-6 课）',text:'骨盆前倾、腘绳肌 vs 髂腰肌、坐骨觉知'},{title:'模块三：后弯与胸椎灵活性（第 7-9 课）',text:'先延展再弯曲、胸椎主导后弯、核心保护'},{title:'模块四：扭转与脊柱健康（第 10-11 课）',text:'扭转三条原则、坐姿与站姿扭转的力学差异'},{title:'模块五：倒置与平衡（第 12-13 课）',text:'倒置体式生理益处、凝视点与心理稳定'},{title:'模块六：整合序列（第 14-16 课）',text:'经典哈他序列编排逻辑与完整体验'}],
    schedule:[['调息冥想','5min','坐姿调息，乌加依呼吸建立'],['热身','10min','拜日式 A×3 + B×2'],['站立序列','15min','站立体式的流动串联'],['主题体式','25min','核心教学——分解、调整、停留'],['整合与反体式','10min','反向练习、缓冲序列'],['放松收束','10min','仰卧扭转 → 挺尸式']],
    note:'完成 16 次课程后，学员应能独立完成完整拜日式 A 和 B，理解主要体式的禁忌症，具备进入流瑜伽、阴瑜伽或艾扬格课程的能力。'},
  {id:'restorative',name:'修复瑜伽',nameEn:'Restorative Yoga',cat:'foundation',level:1,duration:60,
    audience:'所有人群，尤其适合压力大、睡眠差的学员',prereq:[],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯×2','瑜伽抱枕'],
    desc:'修复瑜伽不是"简单版瑜伽"。核心是通过辅具的完全支撑，让身体在零肌肉参与的状态下进入深度放松。每个体式停留 5-15 分钟，整节课仅做 4-6 个体式。',
    objectives:['体验副交感神经主导的深度放松状态','学会使用辅具搭建 8-10 个修复体式','掌握身体扫描和呼吸放松技术','改善睡眠质量和压力管理能力'],
    outline:[{title:'仰卧系列',text:'支撑仰卧束角式、支撑桥式、靠墙抬腿（Viparita Karani）'},{title:'前弯系列',text:'支撑婴儿式、支撑坐姿前屈'},{title:'扭转系列',text:'支撑侧卧放松、支撑仰卧扭转'}],
    schedule:[['开始仪式','5min','仰卧位抵达，身体扫描'],['体式序列','40min','4-6 个修复体式（含反弹时间）'],['挺尸式','10min','完全覆盖毛毯的 Savasana'],['唤醒回收','5min','缓慢唤醒、坐姿结束']],
    note:'整节课仅 4-6 个体式，每个停留 5-15 分钟。教室灯光调暗，准备眼枕和颂钵。孕期 16 周后避免仰卧体式，替换为侧卧变体。'},
  {id:'vinyasa',name:'流瑜伽',nameEn:'Vinyasa Flow',cat:'progressive',level:3,duration:60,
    audience:'有1年以上基础的学员',prereq:['哈他瑜伽'],
    equipment:['瑜伽垫','瑜伽砖×2'],
    desc:'在呼吸的河流中让身体流动。在哈他基础上引入串联和编排变化，发展心肺耐力、动态力量和移动中的专注力。',
    objectives:['掌握标准 Vinyasa 过渡的安全执行','能在呼吸引导下流畅完成连续序列','理解流瑜伽序列的编排逻辑','发展 Bandha 收束在动态练习中的应用','提升心肺耐力与上肢力量'],
    outline:[{title:'模块一：Vinyasa 基础（第 1-3 课）',text:'一呼一动、Chaturanga 力学分析、上犬式与 Vinyasa 过渡'},{title:'模块二：站立流动序列（第 4-6 课）',text:'单侧站立编排、战士系列流动、平衡训练'},{title:'模块三：核心与手臂支撑（第 7-9 课）',text:'Bandha 收束法、核心激活、乌鸦式预备'},{title:'模块四：后弯流动（第 10-11 课）',text:'安全后弯原则、桥式到轮式的渐进准备'},{title:'模块五：完整课堂编排（第 12-14 课）',text:'高峰体式编排法、波浪节奏、音乐运用'}],
    schedule:[['开场调息','3min','坐姿调息，建立乌加依呼吸'],['热身','7min','猫牛→下犬→拜日式 A×3→B×2'],['站立序列','15min','站立流动串联'],['高峰序列','15min','向高峰体式递进的强化序列'],['地面序列','10min','坐姿/仰卧、扭转、冷却'],['Savasana','7min','挺尸式'],['回收','3min','侧卧起身']],
    note:'Chaturanga 是受伤率最高的动作，每节课控制在 10-15 次。如果学员气喘吁吁说明节奏过快，每 10-15 分钟安排一个重置点。'},
  {id:'ashtanga',name:'阿斯汤加瑜伽',nameEn:'Ashtanga Yoga',cat:'progressive',level:4,duration:90,
    audience:'有1年以上规律练习的学员',prereq:['哈他瑜伽','流瑜伽'],
    equipment:['瑜伽垫'],
    desc:'阿斯汤加是固定序列练习体系。每次练习同样的序列，通过日复一日的重复向内观察身体和心念的细微变化。提供 Led Class 和 Mysore Style 两种模式。',
    objectives:['记忆并独立完成初级序列的前半部分','理解 Vinyasa 计数系统','掌握 Tristhana 三要素','从 Led Class 过渡到 Mysore 自主练习','理解"门槛体式"概念'],
    outline:[{title:'开始序列',text:'拜日式 A × 5、拜日式 B × 5'},{title:'站立序列',text:'12 个固定站立体式，按顺序不可跳过'},{title:'坐姿序列（节选）',text:'前屈系列、玛里奇系列、船式、龟式、束角式'},{title:'结束序列',text:'轮式×3、肩倒立、犁式、头倒立、莲花坐调息'}],
    schedule:[['前半序列','40min','站立 + 坐姿前半（Led 模式）'],['后半序列','30min','坐姿后半 + 结束序列'],['Savasana','10min','挺尸式'],['调息','10min','莲花坐呼吸控制']],
    note:'传统练习周一至周六，月圆日和新月日休息。门槛体式前"卡住"是正常的，可能持续数月。需早起练习（传统清晨 5-8 点）。'},
  {id:'iyengar',name:'艾扬格精准瑜伽',nameEn:'Iyengar Yoga',cat:'progressive',level:3,duration:90,
    audience:'追求精准对齐的学员',prereq:['哈他瑜伽'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带×2','毛毯×3','瑜伽椅'],
    desc:'以极致的精准对齐和大量辅具使用为标志。每个体式可以讲解 20 分钟，因为每一寸身体都有它该去的位置。',
    objectives:['理解 30+ 核心体式的完整对齐要点','掌握 6 种以上辅具的使用方法','识别身体代偿模式并自我纠正','理解体式的治疗性应用','发展精细的身体觉知'],
    outline:[{title:'模块一：站立体式精研（第 1-4 课）',text:'三角式、半月式、战士一式骨盆难题'},{title:'模块二：前屈的骨盆力学（第 5-7 课）',text:'坐骨结节觉知、骨盆前倾角度与脊柱延展'},{title:'模块三：后弯的胸椎打开（第 8-10 课）',text:'椅子后弯、砖上后弯、带子绑上臂轮式'},{title:'模块四：倒置体式（第 11-13 课）',text:'毛毯肩倒立、靠墙头倒立、椅子肩倒立'},{title:'模块五：序列与治疗应用（第 14-16 课）',text:'体式处方：针对下背痛、肩颈紧张、焦虑失眠等'}],
    schedule:[['倒置/开场','10min','肩倒立或倒置变体（艾扬格课常以倒置开始）'],['站立序列','25min','2-4 个站立体式精细教学'],['主题体式','30min','当堂重点深入研究'],['冷却序列','15min','前屈、扭转、修复体式'],['Savasana','10min','辅具支撑的挺尸式']],
    note:'辅具不是"拐杖"而是"老师"——它让身体理解正确方向。一个体式至少演示三种辅具配置（标准/简化/加深）。'},
  {id:'yin',name:'阴瑜伽',nameEn:'Yin Yoga',cat:'progressive',level:2,duration:75,
    audience:'所有水平学员',prereq:['瑜伽入门'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯','瑜伽抱枕'],
    desc:'融合道家经络理论和西方筋膜科学。通过长时间的被动停留（3-5 分钟/体式），作用于深层结缔组织——筋膜、韧带和关节囊。',
    objectives:['掌握 15+ 个阴瑜伽体式及其变体','理解筋膜系统的基本概念','了解经络与体式的对应关系','学会长时间停留中运用呼吸和正念','能组合个人阴瑜伽练习'],
    outline:[{title:'髋部开放',text:'蝴蝶式、天鹅式、方块式（Fire Log）'},{title:'脊柱与后侧链',text:'毛毛虫式、香蕉式、仰卧扭转'},{title:'前侧链与股四头肌',text:'鞍式、龙式（Dragon）'},{title:'理论基础',text:'筋膜科学、六条下肢经络、骨骼形态限制 vs 肌肉紧张'}],
    schedule:[['开场','5min','介绍阴瑜伽三原则'],['体式序列','60min','8-10 个体式（含反弹时间）'],['Savasana','7min','完全放松'],['回收','3min','缓慢唤醒']],
    note:'每个体式退出后仰卧 1-2 分钟"反弹"，这是体式效果渗透的时间。骨骼形态限制了每个人的最大范围——不要比较。'},
  {id:'hip-opening',name:'开髋专题',nameEn:'Hip Opening Workshop',cat:'workshop',level:2,duration:120,
    audience:'希望系统提升髋关节灵活性的学员',prereq:['瑜伽入门'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯','瑜伽抱枕'],
    desc:'髋关节能进行六个方向的运动。系统梳理髋关节的运动模式，提供每个方向的专项体式训练，兼顾灵活性与稳定性。',
    objectives:['理解髋关节六个方向的解剖学基础','掌握各方向的专项开髋体式','区分骨骼限制与肌肉紧张','建立开髋后的稳定性训练意识'],
    outline:[{title:'第一阶段：热身与激活（15min）',text:'髋关节画圈、动态蜥蜴式、90-90 切换'},{title:'第二阶段：外旋深入（25min）',text:'束角式、鸽子式、方块式、牛面式'},{title:'第三阶段：内旋与伸展（20min）',text:'英雄坐、仰卧英雄、低弓步内旋'},{title:'第四阶段：屈曲与前屈（15min）',text:'坐角式、龟式准备、扫描式、深蹲'},{title:'第五阶段：稳定性训练（10min）',text:'单腿桥式、蚌式、战士 III 保持'}],
    schedule:[['理论讲解','20min','髋关节解剖与开髋原则'],['热身激活','15min','动态热身'],['外旋深入','25min','外旋体式序列'],['内旋与伸展','20min','内旋与前屈'],['稳定性训练','10min','核心与臀肌激活'],['冷却整合','15min','支撑束角、扭转、Savasana']],
    note:'膝关节是髋部体式中最脆弱的环节。鸽子式中前腿膝盖内侧不适需减小胫骨角度。开了之后还要稳住——搭配臀桥/蚌式维持稳定性。'},
  {id:'backbend',name:'后弯专题',nameEn:'Backbend Workshop',cat:'workshop',level:3,duration:120,
    audience:'有1年以上基础的学员',prereq:['哈他瑜伽'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带×2','毛毯','瑜伽轮(可选)'],
    desc:'后弯的核心：把后弯从腰椎转移到胸椎。大多数人的后弯发生在腰椎——因为胸椎僵硬紧锁而腰椎天然灵活。',
    objectives:['理解脊柱分段与后弯中的常见错误','掌握胸椎解锁技术和肩部灵活性训练','从低难度到高难度的渐进后弯序列','学会后弯后的反体式恢复'],
    outline:[{title:'第一阶段：胸椎唤醒（20min）',text:'泡沫轴松解、砖上胸椎被动打开、小狗式'},{title:'第二阶段：髋前侧打开（15min）',text:'低弓步、半鞍式、新月式'},{title:'第三阶段：后弯渐进序列（35min）',text:'俯卧后弯→跪姿后弯→仰卧后弯→轮式'},{title:'第四阶段：反体式与恢复（15min）',text:'仰卧抱膝、扭转、婴儿式、前屈'}],
    schedule:[['理论讲解','15min','脊柱分段、后弯准备条件'],['胸椎唤醒','20min','解锁胸椎灵活性'],['髋前侧打开','15min','释放髂腰肌'],['后弯渐进','35min','4 级渐进序列'],['反体式恢复','15min','冷却与放松'],['Savasana','5min','收束']],
    note:'后弯打开胸腔可能触发情绪释放，这是正常的。工作坊后 24 小时避免高强度后弯。课后腰部酸痛持续超过 24 小时说明过度，下次减量。'},
  {id:'inversion',name:'倒立专题',nameEn:'Inversion Workshop',cat:'workshop',level:4,duration:120,
    audience:'有2年以上基础的学员',prereq:['哈他瑜伽','流瑜伽'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯×3','墙壁空间'],
    desc:'倒立是瑜伽中最具标志性的类别。从基础倒置开始，系统建立倒立所需的力量、对齐和信心。',
    objectives:['建立肩带和核心的基座力量','掌握毛毯辅助肩倒立的完整方法','掌握靠墙头倒立的渐进教学','了解前臂倒立和手倒立入门'],
    outline:[{title:'第一阶段：基座力量（25min）',text:'海豚式、前臂平板、空心体保持、L-sit 预备'},{title:'第二阶段：肩倒立系统教学（25min）',text:'毛毯准备、三步渐进法、后续变化体式'},{title:'第三阶段：头倒立系统教学（30min）',text:'基座建立、前臂头顶三角关系、五步渐进法'},{title:'第四阶段：前臂/手倒立入门（10min）',text:'靠墙 L-形练习、踢起靠墙练习'}],
    schedule:[['力量建设','25min','肩带激活与核心强化'],['肩倒立','25min','毛毯辅助完整教学'],['头倒立','30min','靠墙渐进教学'],['倒立入门','10min','前臂倒立与手倒立初步'],['恢复','10min','婴儿式、扭转、Savasana']],
    note:'绝对禁忌：未控制高血压、青光眼、颈椎损伤、严重心脏疾病。头倒立中绝对不要转头。肩倒立必须用 3 层以上毛毯。'},
  {id:'meditation-pranayama',name:'冥想与呼吸法',nameEn:'Meditation & Pranayama',cat:'workshop',level:1,duration:60,
    audience:'所有人群',prereq:[],
    equipment:['瑜伽垫','冥想坐垫/毛毯','瑜伽砖'],
    desc:'呼吸是身体与心智之间的桥梁。从呼吸觉知到冥想入门的系统学习，无需任何瑜伽经验。',
    objectives:['建立自然呼吸观察能力','掌握腹式呼吸训练','学会乌加依、清理经络、蜂鸣式三种呼吸法','掌握身体扫描冥想入门'],
    outline:[{title:'第一阶段：呼吸觉知（10min）',text:'姿势建立、自然呼吸观察、数呼吸'},{title:'第二阶段：腹式呼吸训练（10min）',text:'一手胸口一手腹部、腹部放大呼吸'},{title:'第三阶段：呼吸法入门（15min）',text:'乌加依呼吸、清理经络呼吸、蜂鸣式呼吸'},{title:'第四阶段：冥想入门（10min）',text:'身体扫描冥想引导'}],
    schedule:[['呼吸觉知','10min','自然呼吸观察与数呼吸'],['腹式呼吸','10min','腹式呼吸分解与放大呼吸'],['呼吸法','15min','三种 Pranayama 入门'],['冥想','10min','身体扫描引导'],['总结','5min','课后练习建议']],
    note:'Pranayama 必须空腹练习（饭后 2-3 小时）。初学者不做屏气保留。任何头晕、恶心、心慌必须立即停止。"冥想中走神了发现走神了"——这本身就是冥想在起作用。'},
  {id:'prenatal',name:'孕产瑜伽',nameEn:'Prenatal Yoga',cat:'workshop',level:2,duration:60,
    audience:'孕期 14 周以上的健康孕妇',prereq:['瑜伽入门'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯×2','瑜伽抱枕','分娩球(可选)'],
    desc:'为孕中晚期的准妈妈设计的系统课程，从安全原则到呼吸训练、站立力量、开髋准备、不适缓解，最终以分娩呼吸法和产后恢复指引收官。6节课循序渐进，陪伴准妈妈安全舒适地度过孕期。',
    objectives:['了解孕期三个阶段的身体变化与安全原则','掌握三种孕期呼吸法和盆底肌训练','增强下肢力量和平衡能力','安全开髋为分娩创造空间','学会常见孕期不适的对症缓解','掌握分娩三个产程的呼吸配合','了解产后恢复时间线和注意事项'],
    outline:[{title:'模块一：认识孕期身体（第 1 课）',text:'孕期安全原则、身体觉知、骨盆运动、四足位温和练习'},{title:'模块二：呼吸与盆底肌（第 2 课）',text:'腹式呼吸精练、三种调息法、凯格尔运动、盆底肌呼吸配合'},{title:'模块三：站立力量与平衡（第 3 课）',text:'战士系列安全变体、花环式力量、平衡训练、重心适应'},{title:'模块四：髋部开放与产道准备（第 4 课）',text:'蝴蝶式系列、方块式、鸽子式预备、膝关节保护'},{title:'模块五：缓解孕期不适（第 5 课）',text:'腰背痛、水肿、失眠、坐骨神经痛的对症体式方案'},{title:'模块六：分娩准备与产后恢复（第 6 课）',text:'三产程呼吸法、分娩体式模拟、产后恢复时间线'}],
    schedule:[['围坐分享','5min','当周身体感受交流'],['热身','8-10min','关节活动、骨盆运动'],['主题练习','15-18min','当堂核心内容'],['针对性练习','10-15min','体式与呼吸训练'],['放松收束','5-10min','侧卧 Savasana']],
    note:'绝对禁忌：仰卧（孕 20 周后）、俯卧、深扭转、深度后弯、倒置、屏气、跳跃。每位学员必须获得主治医生书面许可。松弛素使关节韧带松弛，活动范围须限制在 60-70%。'},
  {id:'spine-therapy',name:'脊柱理疗',nameEn:'Spine Therapy Workshop',cat:'workshop',level:2,duration:75,
    audience:'久坐办公人群、有慢性腰背不适的学员',prereq:['瑜伽入门'],
    equipment:['瑜伽垫','瑜伽砖×2','伸展带','毛毯×2','瑜伽抱枕','网球/筋膜球'],
    desc:'久坐是脊柱最大的敌人。通过瑜伽体式和动作模式训练，缓解脊柱压力、恢复脊柱健康的系统性方案。',
    objectives:['恢复脊柱六个方向的灵活性','激活深层核心肌群','纠正上/下交叉综合征','掌握日常体态检查清单'],
    outline:[{title:'第一阶段：灵活性恢复（20min）',text:'猫牛式、站姿前屈/后弯/侧弯/扭转、脊柱画圈'},{title:'第二阶段：核心稳定性（15min）',text:'腹横肌激活、死虫式、鸟狗式、骨盆钟摆、臀桥'},{title:'第三阶段：针对性练习（20min）',text:'上交叉（头前伸圆肩）、下交叉（骨盆前倾腰痛）、胸椎僵硬'},{title:'第四阶段：日常体态纠正（5min）',text:'坐姿检查清单、每小时微运动'}],
    schedule:[['理论讲解','15min','脊柱解剖、久坐影响、三大支柱'],['灵活性恢复','20min','六个方向的运动能力'],['核心稳定','15min','深层肌群激活'],['针对性练习','20min','常见问题处方'],['冷却放松','5min','婴儿式、支撑束角']],
    note:'腿部放射性疼痛、下肢麻木、大小便失禁、外伤后背痛——建议就医而非自行练习。疼痛指数控制在 3/10 以内。每天 15 分钟比每周一次 70 分钟更有用。'},
];

// ── Hero pose mapping for course intro pages ──
var HERO_POSES = {
  'yoga-basics':       {poseId:'tadasana',             name:'山式',   en:'Tadasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#7BA68C',bottom:'#4A5568',bg:'#7BA68C',accent:'#A8D5BA'}},
  'hatha':             {poseId:'adho_mukha_svanasana',  name:'下犬式', en:'Adho Mukha Svanasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#C4714B',bottom:'#5D4037',bg:'#C4714B',accent:'#F5C1A8'}},
  'restorative':       {poseId:'balasana',              name:'婴儿式', en:'Balasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#9FA8DA',bottom:'#6B7B8D',bg:'#9FA8DA',accent:'#C5CAE9'}},
  'vinyasa':           {poseId:'virabhadrasana1',       name:'战士一式', en:'Virabhadrasana I',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#E57373',bottom:'#4A5568',bg:'#E57373',accent:'#FFCDD2'}},
  'iyengar':           {poseId:'trikonasana',           name:'三角伸展式', en:'Trikonasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#5C6BC0',bottom:'#37474F',bg:'#5C6BC0',accent:'#9FA8DA'}},
  'yin':               {poseId:'baddha_konasana',       name:'蝴蝶式', en:'Baddha Konasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#CE93D8',bottom:'#6B5B73',bg:'#CE93D8',accent:'#E1BEE7'}},
  'ashtanga':          {poseId:'paschimottanasana',     name:'前屈式', en:'Paschimottanasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#B71C1C',bottom:'#37474F',bg:'#C62828',accent:'#EF9A9A'}},
  'hip-opening':       {poseId:'baddha_konasana',       name:'束角式', en:'Baddha Konasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#26A69A',bottom:'#4A5568',bg:'#26A69A',accent:'#80CBC4'}},
  'backbend':          {poseId:'urdhva_dhanurasana',    name:'轮式',   en:'Urdhva Dhanurasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#FFB74D',bottom:'#5D4037',bg:'#FFB74D',accent:'#FFE0B2'}},
  'inversion':         {poseId:'sirsasana',             name:'头倒立', en:'Sirsasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#7E57C2',bottom:'#4A5568',bg:'#7E57C2',accent:'#D1C4E9'}},
  'meditation-pranayama':{poseId:'padmasana',           name:'莲花坐', en:'Padmasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#FFD54F',bottom:'#5D4037',bg:'#F9A825',accent:'#FFF9C4'}},
  'prenatal':          {poseId:'utkata_konasana',       name:'女神式', en:'Utkata Konasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#F48FB1',bottom:'#7B6B7D',bg:'#F48FB1',accent:'#F8BBD0'}},
  'spine-therapy':     {poseId:'marjaryasana',          name:'猫牛式', en:'Marjaryasana-Bitilakasana',
    colors:{skin:'#EDCAAD',hair:'#4E342E',top:'#8D9E72',bottom:'#4A5568',bg:'#8D9E72',accent:'#C5D8A4'}},
};

// ── Colorful hero SVG renderer (richer, more human-like) ──
function heroSvg(poseId, colors) {
  var pose = POSES[poseId];
  if (!pose) return '';
  var w = 200, s = 1, h = 280;
  var c = colors;

  function pt(a) { return [Math.round(a[0]*s), Math.round(a[1]*s)]; }
  function q(a,b,cc) {
    var a1=pt(a),b1=pt(b),c1=pt(cc);
    return 'M'+a1[0]+','+a1[1]+' Q'+b1[0]+','+b1[1]+' '+c1[0]+','+c1[1];
  }
  var p = pose;
  var hd=pt(p.head), nk=pt(p.neck), sl=pt(p.sL), sr=pt(p.sR);
  var hl=pt(p.hiL), hr=pt(p.hiR), hp=pt(p.hip);

  var sv = '<svg viewBox="0 0 200 280" width="200" height="280" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto">';

  // Defs: gradient for background
  sv += '<defs>';
  sv += '<radialGradient id="heroBg"><stop offset="0%" stop-color="'+c.accent+'" stop-opacity=".35"/><stop offset="100%" stop-color="'+c.accent+'" stop-opacity="0"/></radialGradient>';
  sv += '<radialGradient id="heroGlow"><stop offset="0%" stop-color="'+c.bg+'" stop-opacity=".18"/><stop offset="100%" stop-color="'+c.bg+'" stop-opacity="0"/></radialGradient>';
  sv += '</defs>';

  // Background glow
  sv += '<circle cx="100" cy="130" r="105" fill="url(#heroBg)"/>';
  sv += '<circle cx="100" cy="130" r="68" fill="url(#heroGlow)"/>';

  // Decorative dots
  sv += '<circle cx="38" cy="65" r="3" fill="'+c.accent+'" opacity=".5"/>';
  sv += '<circle cx="165" cy="85" r="2.5" fill="'+c.accent+'" opacity=".4"/>';
  sv += '<circle cx="52" cy="195" r="2" fill="'+c.accent+'" opacity=".35"/>';
  sv += '<circle cx="155" cy="200" r="3.5" fill="'+c.accent+'" opacity=".3"/>';
  sv += '<circle cx="45" cy="130" r="1.8" fill="'+c.bg+'" opacity=".3"/>';
  sv += '<circle cx="160" cy="140" r="2.2" fill="'+c.bg+'" opacity=".25"/>';

  // Ground shadow (soft ellipse)
  sv += '<ellipse cx="100" cy="270" rx="60" ry="5" fill="'+c.bg+'" opacity=".12"/>';

  // ── Legs (thick, rounded, legging color) ──
  var legW = 7;
  sv += '<path d="'+q(p.hiL,p.kL,p.fL)+'" fill="none" stroke="'+c.bottom+'" stroke-width="'+legW+'" stroke-linecap="round"/>';
  sv += '<path d="'+q(p.hiR,p.kR,p.fR)+'" fill="none" stroke="'+c.bottom+'" stroke-width="'+legW+'" stroke-linecap="round"/>';

  // Feet (small circles)
  var fl=pt(p.fL), fr=pt(p.fR);
  sv += '<circle cx="'+fl[0]+'" cy="'+fl[1]+'" r="3" fill="'+c.bottom+'"/>';
  sv += '<circle cx="'+fr[0]+'" cy="'+fr[1]+'" r="3" fill="'+c.bottom+'"/>';

  // ── Torso (filled shape = clothing) ──
  // Build a rounded body shape: shoulders → hips
  var bodyPad = 5;
  sv += '<path d="M'+(sl[0]-bodyPad)+','+(sl[1])+' Q'+nk[0]+','+(nk[1]-4)+' '+(sr[0]+bodyPad)+','+sr[1]+' L'+(hr[0]+3)+','+hr[1]+' Q'+hp[0]+','+(hp[1]+6)+' '+(hl[0]-3)+','+hl[1]+' Z" fill="'+c.top+'" opacity=".9"/>';

  // Torso highlight (subtle lighter stripe)
  sv += '<path d="M'+nk[0]+','+nk[1]+' L'+hp[0]+','+hp[1]+'" stroke="'+c.accent+'" stroke-width="3" stroke-linecap="round" opacity=".3"/>';

  // ── Shoulders (thick, round = clothing) ──
  sv += '<path d="'+q(p.sL,[((p.sL[0]+p.sR[0])/2),((p.sL[1]+p.sR[1])/2)],p.sR)+'" fill="none" stroke="'+c.top+'" stroke-width="8" stroke-linecap="round" opacity=".9"/>';

  // ── Arms (skin color, thick & rounded) ──
  var armW = 5;
  // Upper arm slightly thicker
  sv += '<path d="'+q(p.sL,p.eL,p.hL)+'" fill="none" stroke="'+c.skin+'" stroke-width="'+armW+'" stroke-linecap="round"/>';
  sv += '<path d="'+q(p.sR,p.eR,p.hR)+'" fill="none" stroke="'+c.skin+'" stroke-width="'+armW+'" stroke-linecap="round"/>';
  // Hands (small circles)
  var handL=pt(p.hL), handR=pt(p.hR);
  sv += '<circle cx="'+handL[0]+'" cy="'+handL[1]+'" r="2.8" fill="'+c.skin+'"/>';
  sv += '<circle cx="'+handR[0]+'" cy="'+handR[1]+'" r="2.8" fill="'+c.skin+'"/>';

  // ── Neck (skin) ──
  sv += '<path d="M'+hd[0]+','+(hd[1]+10)+' L'+nk[0]+','+nk[1]+'" stroke="'+c.skin+'" stroke-width="5" stroke-linecap="round"/>';

  // ── Head (skin filled, larger) ──
  var headR = 15;
  sv += '<circle cx="'+hd[0]+'" cy="'+hd[1]+'" r="'+headR+'" fill="'+c.skin+'"/>';

  // ── Hair (dark, top half cap + bun) ──
  // Hair cap: semicircle on top half
  sv += '<path d="M'+(hd[0]-headR)+','+hd[1]+' A'+headR+','+headR+' 0 0,1 '+(hd[0]+headR)+','+hd[1]+'" fill="'+c.hair+'"/>';
  // Hair bun on top
  sv += '<circle cx="'+hd[0]+'" cy="'+(hd[1]-headR-3)+'" r="6" fill="'+c.hair+'"/>';
  // Hairband accent
  sv += '<path d="M'+(hd[0]-headR+1)+','+hd[1]+' Q'+hd[0]+','+(hd[1]-3)+' '+(hd[0]+headR-1)+','+hd[1]+'" fill="none" stroke="'+c.top+'" stroke-width="1.5" opacity=".7"/>';

  // ── Face (minimal: two eyes + gentle smile) ──
  sv += '<circle cx="'+(hd[0]-5)+'" cy="'+(hd[1]+3)+'" r="1.3" fill="'+c.hair+'"/>';
  sv += '<circle cx="'+(hd[0]+5)+'" cy="'+(hd[1]+3)+'" r="1.3" fill="'+c.hair+'"/>';
  // Blush
  sv += '<circle cx="'+(hd[0]-8)+'" cy="'+(hd[1]+6)+'" r="2.5" fill="#F8BBD0" opacity=".35"/>';
  sv += '<circle cx="'+(hd[0]+8)+'" cy="'+(hd[1]+6)+'" r="2.5" fill="#F8BBD0" opacity=".35"/>';
  // Smile
  sv += '<path d="M'+(hd[0]-3)+','+(hd[1]+8)+' Q'+hd[0]+','+(hd[1]+11)+' '+(hd[0]+3)+','+(hd[1]+8)+'" fill="none" stroke="'+c.hair+'" stroke-width=".8" stroke-linecap="round"/>';

  sv += '</svg>';
  return sv;
}

var CAT_LABELS = {foundation:'基础课程',progressive:'进阶课程',workshop:'专题工作坊'};
var LVL_LABELS = ['','零基础','基础','进阶','高阶'];
function ac(cat){return cat==='foundation'?'var(--primary)':cat==='progressive'?'var(--accent)':'var(--workshop)';}

// ── Create directories ──
fs.mkdirSync(path.join(__dirname,'courses'),{recursive:true});
fs.mkdirSync(path.join(__dirname,'lessons'),{recursive:true});

// ── HTML page template ──
function htmlPage(title, body, poseIds) {
  poseIds = poseIds || [];
  var poseData = JSON.stringify(Object.fromEntries(
    poseIds.filter(function(id){return !!POSES[id]}).map(function(id){return [id, POSES[id]]})
  ));
  var extraCss = '.lesson-nav{display:flex;gap:12px;margin-top:36px;padding-top:24px;border-top:1px solid #E5DED5}.ln-btn{flex:1;text-decoration:none;border-radius:12px;padding:16px;background:#F7F3ED;display:flex;flex-direction:column;gap:4px;transition:background .2s}.ln-btn:active{background:#EDE8E0}.ln-prev{text-align:left}.ln-next{text-align:right;justify-content:flex-end}.ln-dir{font-family:Work Sans,sans-serif;font-size:12px;font-weight:600;color:var(--accent);letter-spacing:.04em}.ln-title{font-family:Work Sans,sans-serif;font-size:13px;font-weight:500;color:#6B6560;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.course-tabs{display:flex;gap:0;border-bottom:1.5px solid #E5DED5;margin:20px 0 24px}.ct-btn{flex:1;padding:12px 0;font-family:Work Sans,sans-serif;font-size:14px;font-weight:600;color:#9E9790;background:none;border:none;cursor:pointer;position:relative;transition:color .25s}.ct-btn::after{content:"";position:absolute;bottom:-1.5px;left:20%;right:20%;height:2.5px;border-radius:2px;background:transparent;transition:all .25s}.ct-btn.ct-active{color:var(--primary)}.ct-btn.ct-active::after{background:var(--primary);left:10%;right:10%}.ci-section{margin-bottom:24px}.ci-label{font-family:Work Sans,sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}.ci-desc{font-size:15px;color:#6B6560;line-height:1.9;margin:0}.ci-list{list-style:none}.ci-list li{padding:8px 0 8px 22px;position:relative;font-size:14px;color:#6B6560;line-height:1.7}.ci-list li::before{content:"";position:absolute;left:0;top:15px;width:8px;height:8px;border-radius:2px;background:var(--primary);transform:rotate(45deg)}.ci-outline-item{margin-bottom:16px}.ci-outline-item h4{font-family:Work Sans,sans-serif;font-size:14px;font-weight:600;color:#2A2A28;margin-bottom:4px;padding-left:12px;border-left:2.5px solid #C4714B}.ci-outline-item p{font-size:13px;color:#6B6560;line-height:1.7;padding-left:14px}.ci-table{width:100%;border-collapse:collapse;font-family:Work Sans,sans-serif;font-size:13px}.ci-table th{text-align:left;font-weight:600;color:#2A2A28;padding:8px 10px;border-bottom:2px solid #3A5248;font-size:12px}.ci-table td{padding:8px 10px;border-bottom:1px solid #E5DED5;color:#6B6560}.ci-table td:first-child{font-weight:500;color:#2A2A28;white-space:nowrap}.ci-tags{display:flex;flex-wrap:wrap;gap:6px}.ci-tag{font-family:Work Sans,sans-serif;font-size:12px;padding:5px 12px;border-radius:100px;background:var(--primary-l);color:var(--primary);font-weight:500}.ci-hero{text-align:center;padding:24px 0 20px}.ci-hero-name{font-family:Work Sans,sans-serif;font-size:16px;font-weight:600;color:var(--primary);margin-top:10px}.ci-hero-en{font-family:Work Sans,sans-serif;font-size:13px;font-style:italic;color:#9E9790;margin-top:2px}.ci-note{background:#FFF3ED;border-radius:12px;padding:14px 16px;font-size:13px;color:#6B6560;line-height:1.7;border-left:3px solid #C4714B;margin-top:8px;overflow-wrap:break-word;word-break:break-word}.ci-desc{overflow-wrap:break-word;word-break:break-word}.ci-list li{overflow-wrap:break-word;word-break:break-word}.ci-table td{overflow-wrap:break-word;word-break:break-word}';
  return '<!DOCTYPE html>\n<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"><meta name="theme-color" content="#3A5248"><title>' + title + ' — O-YOGA瑜伽原</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"><style>' + CSS + extraCss + '</style></head><body>' + body + '</body></html>';
}

// ── Generate all pages ──
var courseCount = 0, lessonCount = 0;

COURSES.forEach(function(course){
  var lessons = getAllLessons(course.id);
  if (!lessons) { console.log('  SKIP ' + course.id + ': no lessons'); return; }
  var color = ac(course.cat);
  var lvl = Array.isArray(course.level) ? course.level[0] : course.level;

  // Course page
  var cards = lessons.map(function(l){
    var mainSvg = l.poses && l.poses[0] ? poseSvg(l.poses[0],{width:60,showLabel:false,color:color}) : '';
    var desc = (l.desc||'').replace(/</g,'&lt;');
    return '<div class="lesson-card" onclick="location.href=\'../lessons/' + course.id + '-' + String(l.num).padStart(2,'0') + '.html\'"><div class="lc-num">' + String(l.num).padStart(2,'0') + '</div><div class="lc-body"><h3>' + l.title + '</h3><div class="lc-sub">' + (l.subtitle||'') + '</div><div class="lc-desc">' + desc + '</div></div>' + (mainSvg?'<div class="lc-pose">'+mainSvg+'</div>':'') + '<div class="lc-arrow">›</div></div>';
  }).join('');

  // Course intro HTML — hero illustration at top
  var introHtml = '';
  var heroData = HERO_POSES[course.id];
  if (heroData) {
    var heroIll = heroSvg(heroData.poseId, heroData.colors);
    introHtml += '<div class="ci-hero">' + heroIll + '<div class="ci-hero-name">' + heroData.name + '</div><div class="ci-hero-en">' + heroData.en + '</div></div>';
  }
  if (course.desc) {
    introHtml += '<div class="ci-section"><p class="ci-desc">' + course.desc + '</p></div>';
  }
  if (course.objectives && course.objectives.length) {
    introHtml += '<div class="ci-section"><div class="ci-label">课程目标</div><ul class="ci-list">' + course.objectives.map(function(o){return '<li>' + o + '</li>';}).join('') + '</ul></div>';
  }
  if (course.outline && course.outline.length) {
    introHtml += '<div class="ci-section"><div class="ci-label">课程大纲</div><div class="ci-outline">' + course.outline.map(function(o){return '<div class="ci-outline-item"><h4>' + o.title + '</h4><p>' + o.text + '</p></div>';}).join('') + '</div></div>';
  }
  if (course.schedule && course.schedule.length) {
    introHtml += '<div class="ci-section"><div class="ci-label">单节课结构（' + course.duration + ' 分钟）</div><table class="ci-table"><thead><tr><th>阶段</th><th>时长</th><th>内容</th></tr></thead><tbody>' + course.schedule.map(function(s){return '<tr><td>' + s[0] + '</td><td>' + s[1] + '</td><td>' + s[2] + '</td></tr>';}).join('') + '</tbody></table></div>';
  }
  if (course.equipment && course.equipment.length) {
    introHtml += '<div class="ci-section"><div class="ci-label">所需辅具</div><div class="ci-tags">' + course.equipment.map(function(e){return '<span class="ci-tag">' + e + '</span>';}).join('') + '</div></div>';
  }
  if (course.note) {
    introHtml += '<div class="ci-note">' + course.note + '</div>';
  }

  var courseBody = '<nav style="position:fixed;top:0;left:0;right:0;z-index:100;height:56px;display:flex;align-items:center;gap:12px;padding:0 20px;background:rgba(247,243,237,.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(229,222,213,.5)"><a href="../index.html" style="text-decoration:none;color:#6B6560;font-family:Work Sans,sans-serif;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px">← 课程体系</a></nav><div style="padding:calc(56px + 20px) 20px 48px;max-width:680px;margin:0 auto"><div class="page-title">' + course.name + '</div><div class="page-en">' + course.nameEn + '</div><div class="page-info"><span class="page-badge">' + LVL_LABELS[lvl] + '</span><span class="page-badge">' + course.duration + 'min / 节</span><span class="page-badge">' + lessons.length + ' 节课</span><span class="page-badge">' + CAT_LABELS[course.cat] + '</span></div><div class="course-tabs"><button class="ct-btn ct-active" onclick="switchTab(0,this)">课程介绍</button><button class="ct-btn" onclick="switchTab(1,this)">课程列表</button></div><div id="tabIntro" class="tab-content">' + introHtml + '</div><div id="tabList" class="tab-content" style="display:none"><div class="lesson-list">' + cards + '</div></div></div><script>function switchTab(i,btn){document.querySelectorAll(".tab-content").forEach(function(el){el.style.display="none"});document.querySelectorAll(".ct-btn").forEach(function(el){el.classList.remove("ct-active")});if(i===0)document.getElementById("tabIntro").style.display="";else document.getElementById("tabList").style.display="";btn.classList.add("ct-active")}if(location.hash==="#list"){switchTab(1,document.querySelectorAll(".ct-btn")[1])}</script>';

  var courseFile = path.join(__dirname, 'courses', course.id + '.html');
  var allPoseIds = lessons.reduce(function(arr,l){return arr.concat(l.poses||[]);},[]);
  fs.writeFileSync(courseFile, htmlPage(course.name, courseBody, allPoseIds), 'utf8');
  courseCount++;
  console.log('  courses/' + course.id + '.html (' + lessons.length + ' lessons)');

  // Lesson pages
  lessons.forEach(function(lesson){
    var desc = (lesson.desc||'').replace(/</g,'&lt;');
    var hero = lesson.poses && lesson.poses[0] ? poseSvg(lesson.poses[0],{width:220,showLabel:false,color:color}) : '';
    var grid = lesson.poses ? '<div class="pose-grid">' + lesson.poses.map(function(pid){
      var pose = POSES[pid]; if(!pose) return '';
      return '<div class="pose-card">' + poseSvg(pid,{width:100,showLabel:false,color:color}) + '<div class="pc-name">' + pose.name + '</div><div class="pc-en">' + pose.nameEn + '</div></div>';
    }).join('') + '</div>' : '';
    var seq = lesson.sequence ? '<div class="seq-list">' + lesson.sequence.map(function(s){
      return '<div class="seq-item"><div><span class="seq-step">' + s.step + '</span><span class="seq-dur">' + s.duration + '</span></div><div class="seq-note">' + (s.note||'') + '</div></div>';
    }).join('') + '</div>' : '';
    var kp = lesson.keyPoints ? '<ul class="kp-list">' + lesson.keyPoints.map(function(p){return '<li>' + p + '</li>';}).join('') + '</ul>' : '';
    var safety = lesson.safetyNote ? '<div class="safety-note"><strong>安全提示</strong><br>' + lesson.safetyNote + '</div>' : '';
    var obj = lesson.objectives ? '<ul class="kp-list">' + lesson.objectives.map(function(o){return '<li>' + o + '</li>';}).join('') + '</ul>' : '';

    var prevL = lesson.num > 1 ? lessons[lesson.num - 2] : null;
    var nextL = lesson.num < lessons.length ? lessons[lesson.num] : null;
    var navHtml = '<div class="lesson-nav">';
    if (prevL) {
      var pn = String(prevL.num).padStart(2,'0');
      navHtml += '<a class="ln-btn ln-prev" href="../lessons/' + course.id + '-' + pn + '.html"><span class="ln-dir">← 上一课</span><span class="ln-title">第 ' + prevL.num + ' 课：' + prevL.title + '</span></a>';
    } else {
      navHtml += '<span></span>';
    }
    if (nextL) {
      var nn = String(nextL.num).padStart(2,'0');
      navHtml += '<a class="ln-btn ln-next" href="../lessons/' + course.id + '-' + nn + '.html"><span class="ln-dir">下一课 →</span><span class="ln-title">第 ' + nextL.num + ' 课：' + nextL.title + '</span></a>';
    } else {
      navHtml += '<a class="ln-btn ln-next" href="../courses/' + course.id + '.html" style="justify-content:flex-end"><span class="ln-dir">返回课程 →</span></a>';
    }
    navHtml += '</div>';

    var lbody = '<nav style="position:fixed;top:0;left:0;right:0;z-index:100;height:56px;display:flex;align-items:center;gap:12px;padding:0 20px;background:rgba(247,243,237,.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(229,222,213,.5)"><a href="../courses/' + course.id + '.html" style="text-decoration:none;color:#6B6560;font-family:Work Sans,sans-serif;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px">← ' + course.name + '</a></nav><div style="padding:calc(56px + 16px) 20px calc(32px + env(safe-area-inset-bottom,0px));max-width:680px;margin:0 auto"><div class="page-title">第 ' + lesson.num + ' 课：' + lesson.title + '</div><div class="page-en">' + (lesson.subtitle||'') + '</div>' + (desc?'<div class="ld-section"><p class="ld-desc">' + desc + '</p></div>':'') + (hero?'<div class="ld-hero"><div class="ld-hero-inner">' + hero + '</div></div>':'') + (lesson.poses&&lesson.poses.length?'<div class="ld-section"><div class="ld-label">本节课体式（' + lesson.poses.length + '）</div>' + grid + '</div>':'') + (lesson.objectives&&lesson.objectives.length?'<div class="ld-section"><div class="ld-label">学习目标</div>' + obj + '</div>':'') + (lesson.sequence&&lesson.sequence.length?'<div class="ld-section"><div class="ld-label">课堂序列</div>' + seq + '</div>':'') + (lesson.keyPoints&&lesson.keyPoints.length?'<div class="ld-section"><div class="ld-label">教学要点</div>' + kp + '</div>':'') + safety + navHtml + '</div>';

    var num = String(lesson.num).padStart(2,'0');
    var lessonFile = path.join(__dirname, 'lessons', course.id + '-' + num + '.html');
    fs.writeFileSync(lessonFile, htmlPage('第'+lesson.num+'课 '+lesson.title+' — '+course.name, lbody, lesson.poses||[]), 'utf8');
    lessonCount++;
  });
});

console.log('\n  Generated ' + courseCount + ' course pages + ' + lessonCount + ' lesson pages');

// ══════════════════════════════════════════════════════════════
// ── INSTRUCTOR TEACHING MANUAL ──
// ══════════════════════════════════════════════════════════════

fs.mkdirSync(path.join(__dirname, 'instructor'), { recursive: true });

var INSTRUCTOR_CSS = `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#F7F3ED;--bg-deep:#EDE8E0;--bg-card:#FFFFFF;
  --fg:#2A2A28;--fg2:#6B6560;--fg3:#9E9790;
  --primary:#3A5248;--primary-h:#2D4038;--primary-l:var(--primary-l);
  --accent:#C4714B;--accent-h:#A85D3B;--accent-l:rgba(196,113,75,.09);
  --sand:#D4C5B5;--cream:#F7F3ED;--workshop:#8B6F4E;
  --border:#E5DED5;
  --shadow:0 1px 3px rgba(42,42,40,.05),0 8px 24px rgba(42,42,40,.04);
  --shadow-lg:0 4px 12px rgba(42,42,40,.06),0 20px 48px rgba(42,42,40,.08);
  --radius:14px;--radius-lg:22px;
  --font-d:'Fraunces',Georgia,'Noto Serif SC',serif;
  --font-b:-apple-system,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans SC',sans-serif;
  --font-u:'Work Sans',-apple-system,'PingFang SC',sans-serif;
  --nav-h:56px;--safe-b:env(safe-area-inset-bottom,0px);
}
/* ─── THEME OVERRIDES ─── */
[data-theme="purple"]{
  --primary:#6B4C9A;--primary-h:#573D82;--primary-l:rgba(107,76,154,.08);
  --accent:#D4726A;--accent-h:#B85D55;--accent-l:rgba(212,114,106,.09);
  --workshop:#9C7CB8;
}
[data-theme="ocean"]{
  --primary:#2B6A7C;--primary-h:#1D5566;--primary-l:rgba(43,106,124,.08);
  --accent:#E8915A;--accent-h:#CC7A48;--accent-l:rgba(232,145,90,.09);
  --workshop:#5A9EAE;
}
html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent}
body{font-family:var(--font-b);background:var(--bg);color:var(--fg);line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.028;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--sand);border-radius:4px}

/* Dark mode */
body.dark{--bg:#1a1a1a;--bg-deep:#222;--bg-card:#2a2a28;--fg:#e8e4de;--fg2:#b0a99f;--fg3:#807870;
  --primary-l:rgba(58,82,72,.15);--accent-l:rgba(196,113,75,.15);--border:#3a3836;
  --shadow:0 1px 3px rgba(0,0,0,.2),0 8px 24px rgba(0,0,0,.15);
  --shadow-lg:0 4px 12px rgba(0,0,0,.3),0 20px 48px rgba(0,0,0,.2)}
body.dark::after{opacity:.015}

/* Nav */
.i-nav{position:fixed;top:0;left:0;right:0;z-index:100;height:var(--nav-h);
  display:flex;align-items:center;justify-content:space-between;padding:0 16px;
  background:rgba(247,243,237,.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);
  border-bottom:1px solid rgba(229,222,213,.5)}
body.dark .i-nav{background:rgba(26,26,26,.92);border-bottom-color:rgba(58,54,50,.5)}
.i-nav a{text-decoration:none;color:var(--fg2);font-family:var(--font-u);font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px}
.i-nav-logo{font-family:var(--font-u);font-weight:700;font-size:14px;color:var(--primary);letter-spacing:-.02em}
.i-nav-logo span{font-family:var(--font-d);font-weight:500;font-style:italic;font-size:12px;color:var(--accent);margin-left:4px}
.dark-toggle{background:none;border:1.5px solid var(--border);border-radius:100px;padding:6px 12px;
  font-family:var(--font-u);font-size:12px;font-weight:500;color:var(--fg2);cursor:pointer;transition:all .2s}
.dark-toggle:hover{border-color:var(--accent);color:var(--accent)}

/* Container */
.i-container{padding:calc(var(--nav-h) + 20px) 16px calc(32px + var(--safe-b));max-width:720px;margin:0 auto}

/* Page header */
.i-page-tag{font-family:var(--font-u);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:8px;display:flex;align-items:center;gap:6px}
.i-page-tag::before{content:'';width:16px;height:1.5px;background:var(--accent)}
.i-page-title{font-family:var(--font-d);font-size:clamp(24px,6vw,32px);font-weight:500;color:var(--fg);line-height:1.3;margin-bottom:6px}
.i-page-sub{font-size:14px;color:var(--fg3);line-height:1.6;margin-bottom:6px}
.i-meta{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px}
.i-meta-tag{font-family:var(--font-u);font-size:12px;font-weight:500;padding:4px 12px;border-radius:100px;background:var(--primary-l);color:var(--primary)}

/* Section labels */
.i-section{margin-bottom:32px}
.i-label{font-family:var(--font-u);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.i-label::before{content:'';width:14px;height:1.5px;background:var(--accent)}

/* Objectives */
.i-obj-list{list-style:none}
.i-obj-list li{padding:6px 0 6px 20px;position:relative;font-size:14px;color:var(--fg2);line-height:1.7}
.i-obj-list li::before{content:'';position:absolute;left:0;top:13px;width:8px;height:8px;border-radius:50%;border:2px solid var(--primary)}

/* ─── TIMELINE ─── */
.i-timeline{position:relative;margin-bottom:24px}
.i-tl-bar{display:flex;border-radius:8px;overflow:hidden;height:40px;background:var(--bg-deep);cursor:pointer}
.i-tl-seg{display:flex;align-items:center;justify-content:center;gap:4px;padding:0 6px;
  font-family:var(--font-u);font-size:11px;font-weight:500;color:#fff;
  transition:opacity .2s;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.i-tl-seg:hover{opacity:.85}
.i-tl-seg.active{box-shadow:inset 0 -3px 0 rgba(255,255,255,.4)}
.i-tl-seg .tl-name{overflow:hidden;text-overflow:ellipsis}
.i-tl-seg .tl-dur{opacity:.7;font-size:10px;flex-shrink:0}
.i-tl-total{text-align:right;font-family:var(--font-u);font-size:11px;color:var(--fg3);margin-top:4px}
.i-tl-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}
.i-tl-scroll::-webkit-scrollbar{display:none}

/* Timeline segment colors */
:root{--tl-warmup:#7BA68C;--tl-cool:#9FA8DA}
.i-tl-seg.tl-warmup{background:var(--tl-warmup)}
.i-tl-seg.tl-main{background:var(--primary)}
.i-tl-seg.tl-peak{background:var(--accent)}
.i-tl-seg.tl-cool{background:var(--tl-cool)}
.i-tl-seg.tl-rest{background:var(--sand)}

/* ─── TABS ─── */
.i-tabs{display:flex;gap:0;border-bottom:1.5px solid var(--border);margin:20px 0 24px}
.i-tab{flex:1;padding:12px 0;font-family:var(--font-u);font-size:14px;font-weight:600;
  color:var(--fg3);background:none;border:none;cursor:pointer;position:relative;transition:color .25s;
  display:flex;align-items:center;justify-content:center;gap:6px}
.i-tab::after{content:"";position:absolute;bottom:-1.5px;left:20%;right:20%;height:2.5px;
  border-radius:2px;background:transparent;transition:all .25s}
.i-tab.i-tab-active{color:var(--primary)}
.i-tab.i-tab-active::after{background:var(--primary);left:10%;right:10%}
.i-tab-badge{font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;background:var(--accent);color:#fff}
.i-tab-icon{font-size:16px}
.i-tab-content{display:none}.i-tab-content.i-tab-active{display:block}

/* ─── FULLSCREEN CUE MODE ─── */
body.fs-mode{overflow:hidden}
body.fs-mode .i-nav,
body.fs-mode .i-container,
body.fs-mode .i-float-nav{display:none!important}
body.fs-mode .i-fs-cue{display:flex!important}
.i-fs-cue{display:none;flex-direction:column;height:100dvh;height:100vh;
  background:var(--bg);color:var(--fg);overflow:hidden}
body.dark .i-fs-cue{background:#111}
.i-fs-header{flex-shrink:0;padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.i-fs-title{font-family:var(--font-u);font-size:14px;font-weight:600;color:var(--fg);flex:1;text-align:center;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.i-fs-close{background:none;border:none;font-family:var(--font-u);font-size:13px;font-weight:500;
  color:var(--fg3);cursor:pointer;padding:6px 12px;border-radius:100px;border:1.5px solid var(--border);transition:all .2s}
.i-fs-close:hover{border-color:var(--accent);color:var(--accent)}
.i-fs-progress{flex-shrink:0;padding:0 16px 8px}
.i-fs-tl{flex-shrink:0;padding:0 16px 12px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch}
.i-fs-tl::-webkit-scrollbar{display:none}
.i-fs-tl-bar{display:flex;border-radius:8px;overflow:hidden;height:32px;background:var(--bg-deep);gap:1px;width:fit-content}
.i-fs-tl-seg{display:flex;align-items:center;justify-content:center;gap:3px;padding:0 8px;
  font-family:var(--font-u);font-size:11px;font-weight:500;color:#fff;flex-shrink:0;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:opacity .2s;min-width:0}
.i-fs-tl-seg .tl-dur{opacity:.6;font-size:10px;flex-shrink:0}
body.dark .i-fs-tl-seg{opacity:.85}
.i-fs-tl-seg.active{box-shadow:inset 0 -3px 0 rgba(255,255,255,.5)}
.i-fs-card-area{flex:1;overflow:hidden;position:relative}
.i-fs-card-track{display:flex;height:100%;overflow-x:auto;scroll-snap-type:x mandatory;
  scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;scroll-behavior:smooth}
.i-fs-card-track::-webkit-scrollbar{display:none}
.i-fs-card{flex:0 0 100%;scroll-snap-align:start;display:flex;flex-direction:column;
  justify-content:center;padding:24px 24px 32px;max-width:640px;margin:0 auto;width:100%;height:100%}
.i-fs-card-step{font-family:var(--font-u);font-size:clamp(24px,6vw,36px);font-weight:700;color:var(--fg);
  margin-bottom:8px;line-height:1.2}
.i-fs-card-dur{font-family:var(--font-u);font-size:16px;font-weight:600;color:var(--accent);
  margin-bottom:24px}
.i-fs-card-note{font-size:clamp(18px,4vw,24px);color:var(--fg2);line-height:1.9}
body.dark .i-fs-card-step{color:#e8e4de}
body.dark .i-fs-card-note{color:#b0a99f}
.i-fs-arrows{position:absolute;top:50%;left:0;right:0;display:flex;justify-content:space-between;
  pointer-events:none;transform:translateY(-50%);padding:0 8px}
.i-fs-arr{pointer-events:all;width:44px;height:44px;border-radius:50%;border:1.5px solid var(--border);
  background:var(--bg-card);display:flex;align-items:center;justify-content:center;cursor:pointer;
  font-size:20px;color:var(--fg2);box-shadow:var(--shadow);transition:all .2s}
body.dark .i-fs-arr{background:var(--bg-card);border-color:var(--border)}
.i-fs-arr:hover{border-color:var(--accent);color:var(--accent)}
.i-fs-arr:disabled{opacity:.3;pointer-events:none}
.i-fs-footer{flex-shrink:0;padding:12px 16px;display:flex;align-items:center;justify-content:center;gap:16px}
.i-fs-counter{font-family:var(--font-u);font-size:14px;font-weight:500;color:var(--fg3)}
.i-fs-dm{background:none;border:1.5px solid var(--border);border-radius:100px;padding:6px 12px;
  font-family:var(--font-u);font-size:12px;font-weight:500;color:var(--fg3);cursor:pointer;transition:all .2s}
.i-fs-dm:hover{border-color:var(--accent);color:var(--accent)}

/* ─── CUE CARDS (inline, non-fullscreen) ─── */
.i-cue-wrap{position:relative;margin-bottom:24px}
.i-cue-progress{display:flex;gap:2px;margin-bottom:12px;cursor:pointer}
.i-cue-prog-seg{height:4px;border-radius:2px;background:var(--border);transition:background .3s;position:relative}
.i-cue-prog-seg.done{background:var(--primary)}
.i-cue-prog-seg.current{background:var(--accent)}
.i-cue-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:0;
  scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;scroll-behavior:smooth}
.i-cue-track::-webkit-scrollbar{display:none}
.i-cue-card{flex:0 0 100%;scroll-snap-align:start;
  background:var(--bg-card);border-radius:var(--radius);padding:24px 20px;box-shadow:var(--shadow);
  min-height:220px;display:flex;flex-direction:column}
.i-cue-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}
.i-cue-step{font-family:var(--font-u);font-size:18px;font-weight:600;color:var(--fg)}
.i-cue-dur{font-family:var(--font-u);font-size:14px;font-weight:600;color:var(--accent);
  padding:4px 12px;border-radius:100px;background:var(--accent-l);flex-shrink:0}
.i-cue-note{font-size:15px;color:var(--fg2);line-height:1.8;flex:1;overflow:hidden}
.i-cue-note.collapsed{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical}
.i-cue-expand{background:none;border:none;font-family:var(--font-u);font-size:13px;font-weight:500;
  color:var(--accent);cursor:pointer;padding:8px 0 0;align-self:flex-start}
.i-cue-counter{text-align:center;font-family:var(--font-u);font-size:13px;color:var(--fg3);margin-top:12px}
.i-cue-arrows{position:absolute;top:50%;left:0;right:0;display:flex;justify-content:space-between;
  pointer-events:none;transform:translateY(-50%);padding:0 4px}
.i-cue-arr{pointer-events:all;width:36px;height:36px;border-radius:50%;border:1.5px solid var(--border);
  background:var(--bg-card);display:flex;align-items:center;justify-content:center;cursor:pointer;
  font-size:16px;color:var(--fg2);box-shadow:var(--shadow);transition:all .2s}
.i-cue-arr:hover{border-color:var(--accent);color:var(--accent)}
.i-cue-arr:disabled{opacity:.3;pointer-events:none}

/* ─── POSE REFERENCE ─── */
.i-pose-nav{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
.i-pose-nav-btn{font-family:var(--font-u);font-size:12px;font-weight:500;padding:4px 12px;
  border-radius:100px;border:1.5px solid var(--border);background:transparent;color:var(--fg2);
  cursor:pointer;transition:all .2s;white-space:nowrap}
.i-pose-nav-btn:hover,.i-pose-nav-btn.active{border-color:var(--primary);background:var(--primary);color:#fff}
.i-pose-cards{display:grid;gap:12px}
.i-pose-card{background:var(--bg-card);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);
  display:flex;gap:16px;align-items:flex-start}
.i-pose-svg{flex-shrink:0}
.i-pose-info{flex:1;min-width:0}
.i-pose-name{font-family:var(--font-u);font-size:15px;font-weight:600;color:var(--fg)}
.i-pose-en{font-family:var(--font-d);font-size:13px;font-style:italic;color:var(--fg3);margin-top:1px}
.i-pose-sanskrit{font-size:12px;color:var(--fg3);margin-top:1px}
.i-pose-cat{display:inline-block;font-family:var(--font-u);font-size:11px;font-weight:500;
  padding:2px 8px;border-radius:100px;background:var(--primary-l);color:var(--primary);margin-top:6px}

/* Key points & safety */
.i-kp-list{list-style:none}
.i-kp-list li{padding:8px 0 8px 20px;position:relative;font-size:14px;color:var(--fg2);line-height:1.7}
.i-kp-list li::before{content:'';position:absolute;left:0;top:14px;width:8px;height:8px;border-radius:2px;background:var(--primary);transform:rotate(45deg)}
.i-safety{background:rgba(196,113,75,.06);border-left:3px solid var(--accent);border-radius:0 var(--radius) var(--radius) 0;
  padding:16px 18px;font-size:14px;color:var(--fg2);line-height:1.7}
.i-safety strong{color:var(--accent);font-family:var(--font-u);font-size:12px;font-weight:600;
  letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:6px}

/* ─── FLOATING NAV ─── */
.i-float-nav{position:fixed;bottom:calc(20px + var(--safe-b));left:50%;transform:translateX(-50%);z-index:90;
  display:flex;gap:2px;background:var(--bg-card);border-radius:100px;padding:4px;box-shadow:var(--shadow-lg);
  border:1px solid var(--border)}
.i-float-btn{font-family:var(--font-u);font-size:11px;font-weight:600;padding:8px 14px;border-radius:100px;
  border:none;background:transparent;color:var(--fg3);cursor:pointer;transition:all .2s;white-space:nowrap}
.i-float-btn.active{background:var(--primary);color:#fff}
.i-float-btn:hover:not(.active){color:var(--fg)}

/* ─── LESSON NAV ─── */
.i-lesson-nav{display:flex;gap:12px;margin-top:36px;padding-top:24px;border-top:1px solid var(--border)}
.i-ln-btn{flex:1;text-decoration:none;border-radius:var(--radius);padding:16px;background:var(--bg-deep);
  display:flex;flex-direction:column;gap:4px;transition:background .2s}
.i-ln-btn:hover{background:var(--border)}
.i-ln-prev{text-align:left}.i-ln-next{text-align:right}
.i-ln-dir{font-family:var(--font-u);font-size:12px;font-weight:600;color:var(--accent);letter-spacing:.04em}
.i-ln-title{font-family:var(--font-u);font-size:13px;font-weight:500;color:var(--fg2);line-height:1.4}

/* ─── INDEX PAGE ─── */
.i-hero{padding:calc(var(--nav-h) + 32px) 16px 32px;text-align:center}
.i-hero h1{font-family:var(--font-d);font-size:clamp(28px,7vw,40px);font-weight:300;color:var(--fg);line-height:1.3;margin-bottom:8px}
.i-hero h1 em{font-style:italic;font-weight:500;color:var(--accent)}
.i-hero p{font-size:15px;color:var(--fg2);max-width:400px;margin:0 auto}
.i-filter{position:sticky;top:var(--nav-h);z-index:50;background:rgba(247,243,237,.9);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(229,222,213,.5);padding:10px 16px;display:flex;gap:4px;overflow-x:auto;
  scrollbar-width:none;-ms-overflow-style:none}
body.dark .i-filter{background:rgba(26,26,26,.92);border-bottom-color:rgba(58,54,50,.5)}
.i-filter::-webkit-scrollbar{display:none}
.i-filter-btn{flex-shrink:0;font-family:var(--font-u);font-size:13px;font-weight:500;padding:8px 18px;
  border-radius:100px;border:1.5px solid var(--border);background:transparent;color:var(--fg2);
  cursor:pointer;transition:all .25s;white-space:nowrap}
.i-filter-btn.active{background:var(--primary);border-color:var(--primary);color:#fff}
.i-course-group{padding:20px 16px;max-width:720px;margin:0 auto}
.i-course-group[data-cat]{display:block}
.i-course-group.hidden{display:none}
.i-group-title{font-family:var(--font-u);font-size:16px;font-weight:600;color:var(--fg);margin-bottom:4px;
  display:flex;align-items:center;gap:8px}
.i-group-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.i-group-en{font-family:var(--font-d);font-size:13px;font-style:italic;color:var(--fg3);margin-bottom:12px}
.i-lesson-grid{display:grid;gap:8px}
.i-lesson-item{background:var(--bg-card);border-radius:var(--radius);padding:14px 16px;box-shadow:var(--shadow);
  display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;transition:all .2s}
.i-lesson-item:hover{box-shadow:var(--shadow-lg);transform:translateY(-1px)}
.i-lesson-num{font-family:var(--font-d);font-size:20px;font-weight:700;color:var(--primary);opacity:.3;
  width:32px;text-align:center;flex-shrink:0}
.i-lesson-info{flex:1;min-width:0}
.i-lesson-info h4{font-family:var(--font-u);font-size:14px;font-weight:600;color:var(--fg);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.i-lesson-info p{font-size:12px;color:var(--fg3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.i-lesson-dur{font-family:var(--font-u);font-size:12px;font-weight:500;color:var(--fg3);flex-shrink:0}
.i-lesson-arr{color:var(--sand);font-size:18px;flex-shrink:0}

/* Footer */
.i-footer{padding:40px 16px calc(32px + var(--safe-b));text-align:center;border-top:1px solid var(--border)}
.i-footer p{font-size:13px;color:var(--fg3);line-height:1.8}
.i-footer .brand{font-family:var(--font-d);font-style:italic;color:var(--accent);font-size:14px}

/* ─── RESPONSIVE ─── */
@media(min-width:768px){
  .i-cue-card{min-height:180px}
  .i-pose-cards{grid-template-columns:1fr 1fr}
}
@media(min-width:900px){
  .i-tl-and-cue{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start}
  .i-tl-and-cue .i-timeline{position:sticky;top:calc(var(--nav-h) + 16px)}
}
`;

var INSTRUCTOR_JS = `
// Dark mode
(function(){
  var dm = localStorage.getItem('instructor-dark');
  if(dm==='true') document.body.classList.add('dark');
})();
function toggleDark(){
  document.body.classList.toggle('dark');
  localStorage.setItem('instructor-dark', document.body.classList.contains('dark'));
}

// Cue card logic
function initCueCards(){
  var track = document.querySelector('.i-cue-track');
  if(!track) return;
  var cards = track.querySelectorAll('.i-cue-card');
  var progSegs = document.querySelectorAll('.i-cue-prog-seg');
  var counter = document.querySelector('.i-cue-counter');
  var prevBtn = document.querySelector('.i-cue-prev');
  var nextBtn = document.querySelector('.i-cue-next');
  var tlSegs = document.querySelectorAll('.i-tl-seg');
  var current = 0;

  function update(){
    progSegs.forEach(function(s,i){
      s.classList.remove('done','current');
      if(i < current) s.classList.add('done');
      if(i === current) s.classList.add('current');
    });
    if(counter) counter.textContent = (current+1) + ' / ' + cards.length;
    if(prevBtn) prevBtn.disabled = current === 0;
    if(nextBtn) nextBtn.disabled = current === cards.length - 1;
    tlSegs.forEach(function(s,i){
      s.classList.toggle('active', i === current);
    });
  }

  function goTo(idx){
    if(idx < 0 || idx >= cards.length) return;
    current = idx;
    cards[idx].scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});
    update();
  }

  // scroll-snap observer
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && e.intersectionRatio > 0.5){
        current = Array.from(cards).indexOf(e.target);
        update();
      }
    });
  }, {root:track, threshold:0.5});
  cards.forEach(function(c){obs.observe(c)});

  if(prevBtn) prevBtn.onclick = function(){goTo(current-1)};
  if(nextBtn) nextBtn.onclick = function(){goTo(current+1)};

  // Progress bar click
  progSegs.forEach(function(s,i){
    s.onclick = function(){goTo(i)};
  });

  // Timeline click
  tlSegs.forEach(function(s,i){
    s.onclick = function(){goTo(i)};
  });

  // Expand/collapse
  document.querySelectorAll('.i-cue-expand').forEach(function(btn){
    btn.onclick = function(){
      var note = btn.previousElementSibling;
      if(note.classList.contains('collapsed')){
        note.classList.remove('collapsed');
        btn.textContent = '收起';
      } else {
        note.classList.add('collapsed');
        btn.textContent = '展开全部';
      }
    };
  });

  update();
  window._cueGoTo = goTo;
}

// Floating nav highlight
function initFloatNav(){
  var btns = document.querySelectorAll('.i-float-btn');
  if(!btns.length) return;
  var sections = [];
  btns.forEach(function(btn){
    var target = document.querySelector(btn.getAttribute('data-target'));
    if(target) sections.push({btn:btn, el:target});
  });
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      sections.forEach(function(s){
        if(s.el === e.target && e.isIntersecting){
          btns.forEach(function(b){b.classList.remove('active')});
          s.btn.classList.add('active');
        }
      });
    });
  },{threshold:0.2});
  sections.forEach(function(s){obs.observe(s.el)});

  btns.forEach(function(btn){
    btn.onclick = function(){
      var t = document.querySelector(btn.getAttribute('data-target'));
      if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    };
  });
}

// Pose nav
function initPoseNav(){
  document.querySelectorAll('.i-pose-nav-btn').forEach(function(btn){
    btn.onclick = function(){
      var target = document.getElementById(btn.getAttribute('data-pose'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'center'});
      document.querySelectorAll('.i-pose-nav-btn').forEach(function(b){b.classList.remove('active')});
      btn.classList.add('active');
    };
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initTheme();\n  initCueCards();
  initFloatNav();
  initPoseNav();
  initTabs();
  initFsCue();
});

// Theme\nconst THEME_COLORS={sage:\x27#3A5248\x27,purple:\x27#6B4C9A\x27,ocean:\x27#2B6A7C\x27};\nfunction initTheme(){\n  var t=localStorage.getItem(\x27yoga-theme\x27)||\x27sage\x27;\n  document.documentElement.setAttribute(\x27data-theme\x27,t);\n  var tc=document.querySelector(\x27meta[name="theme-color"]\x27);\n  if(tc) tc.content=THEME_COLORS[t]||THEME_COLORS.sage;\n}\n\n// Tab switching
function initTabs(){
  document.querySelectorAll('.i-tab').forEach(function(btn){
    btn.onclick = function(){
      var target = btn.getAttribute('data-tab');
      document.querySelectorAll('.i-tab').forEach(function(b){b.classList.remove('i-tab-active')});
      document.querySelectorAll('.i-tab-content').forEach(function(c){c.classList.remove('i-tab-active')});
      btn.classList.add('i-tab-active');
      var el = document.getElementById(target);
      if(el) el.classList.add('i-tab-active');
    };
  });
}

// Fullscreen cue mode
function initFsCue(){
  var fsOverlay = document.getElementById('fsCue');
  if(!fsOverlay) return;
  var fsCards = fsOverlay.querySelectorAll('.i-fs-card');
  var fsSegs = fsOverlay.querySelectorAll('.i-fs-tl-seg');
  var fsPrev = fsOverlay.querySelector('.i-fs-prev');
  var fsNext = fsOverlay.querySelector('.i-fs-next');
  var fsCounter = fsOverlay.querySelector('.i-fs-counter');
  var fsClose = fsOverlay.querySelector('.i-fs-close');
  var fsProgress = fsOverlay.querySelector('.i-fs-progress-bar');
  var current = 0;

  function update(){
    fsSegs.forEach(function(s,i){
      s.classList.toggle('active', i===current);
    });
    if(fsCounter) fsCounter.textContent = (current+1) + ' / ' + fsCards.length;
    if(fsPrev) fsPrev.disabled = current===0;
    if(fsNext) fsNext.disabled = current===fsCards.length-1;
    // Update progress bar
    if(fsProgress){
      var pct = fsCards.length>0 ? ((current+1)/fsCards.length*100) : 0;
      fsProgress.style.width = pct+'%';
    }
  }

  function goTo(idx){
    if(idx<0||idx>=fsCards.length) return;
    current = idx;
    fsCards[idx].scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});
    // Auto-scroll timeline
    var seg = fsSegs[idx];
    if(seg) seg.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    update();
  }

  // scroll-snap observer
  var track = fsOverlay.querySelector('.i-fs-card-track');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && e.intersectionRatio>0.5){
        current = Array.from(fsCards).indexOf(e.target);
        update();
      }
    });
  },{root:track, threshold:0.5});
  fsCards.forEach(function(c){obs.observe(c)});

  if(fsPrev) fsPrev.onclick = function(){goTo(current-1)};
  if(fsNext) fsNext.onclick = function(){goTo(current+1)};
  fsSegs.forEach(function(s,i){s.onclick = function(){goTo(i)}});
  if(fsClose) fsClose.onclick = function(){
    document.body.classList.remove('fs-mode');
    document.body.requestFullscreen && document.fullscreenElement && document.exitFullscreen().catch(function(){});
  };

  // Open fullscreen cue
  window._openFsCue = function(){
    document.body.classList.add('fs-mode');
    // Try native fullscreen
    if(document.documentElement.requestFullscreen){
      document.documentElement.requestFullscreen().catch(function(){});
    }
    update();
    goTo(0);
  };

  // Keyboard nav in fullscreen
  document.addEventListener('keydown', function(e){
    if(!document.body.classList.contains('fs-mode')) return;
    if(e.key==='ArrowLeft'||e.key==='ArrowUp') goTo(current-1);
    else if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' ') goTo(current+1);
    else if(e.key==='Escape'){
      document.body.classList.remove('fs-mode');
      if(document.fullscreenElement) document.exitFullscreen().catch(function(){});
    }
  });

  update();
}
`;

// Timeline segment color classification
function tlClass(stepName) {
  var s = stepName.toLowerCase();
  if (/热身|唤醒|激活|开场|调息|静心|围坐|理论/.test(s)) return 'tl-warmup';
  if (/放松|savasana|挺尸|冷却|恢复|收束|回收/.test(s)) return 'tl-cool';
  if (/休息|反弹/.test(s)) return 'tl-rest';
  if (/高峰|核心|主题|深入|渐进|强化/.test(s)) return 'tl-peak';
  return 'tl-main';
}

// Parse duration string to minutes
function parseDur(d) {
  if (!d) return 0;
  var m = d.match(/(\d+)/);
  return m ? parseInt(m[1]) : 0;
}

// Pose category labels
var POSE_CAT_LABELS = {
  standing:'站立',seated:'坐姿',kneeling:'跪姿',prone:'俯卧',supine:'仰卧',
  inversion:'倒置',arm_balance:'手臂支撑',backbend:'后弯',balance:'平衡',core:'核心'
};

function instructorPage(title, body) {
  return '<!DOCTYPE html>\n<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"><meta name="theme-color" content="#3A5248"><title>' + title + ' — O-YOGA教练手册</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"><style>' + INSTRUCTOR_CSS + '</style></head><body>' + body + '<script>' + INSTRUCTOR_JS + '<\/script></body></html>';
}

// ── Generate instructor index page ──
function generateInstructorIndex() {
  var groups = {};
  COURSES.forEach(function(course) {
    var lessons = getAllLessons(course.id);
    if (!lessons) return;
    if (!groups[course.cat]) groups[course.cat] = [];
    groups[course.cat].push({ course: course, lessons: lessons });
  });

  var catOrder = ['foundation', 'progressive', 'workshop'];
  var catColors = { foundation: 'var(--primary)', progressive: 'var(--accent)', workshop: 'var(--workshop)' };

  var filterHtml = '<div class="i-filter"><button class="i-filter-btn active" onclick="filterCat(\'all\')">全部</button><button class="i-filter-btn" onclick="filterCat(\'foundation\')">基础课程</button><button class="i-filter-btn" onclick="filterCat(\'progressive\')">进阶课程</button><button class="i-filter-btn" onclick="filterCat(\'workshop\')">专题工作坊</button></div>';

  var groupsHtml = '';
  catOrder.forEach(function(cat) {
    if (!groups[cat]) return;
    groups[cat].forEach(function(g) {
      var c = g.course, lessons = g.lessons;
      var items = lessons.map(function(l) {
        var num = String(l.num).padStart(2, '0');
        return '<a class="i-lesson-item" href="' + c.id + '-' + num + '.html"><span class="i-lesson-num">' + num + '</span><div class="i-lesson-info"><h4>' + l.title + '</h4><p>' + (l.subtitle || '') + '</p></div><span class="i-lesson-dur">' + c.duration + 'min</span><span class="i-lesson-arr">›</span></a>';
      }).join('');
      groupsHtml += '<div class="i-course-group" data-cat="' + cat + '"><div class="i-group-title"><span class="i-group-dot" style="background:' + catColors[cat] + '"></span>' + c.name + ' <span style="font-weight:400;color:var(--fg3);font-size:13px">(' + lessons.length + '课时)</span></div><div class="i-group-en">' + c.nameEn + '</div><div class="i-lesson-grid">' + items + '</div></div>';
    });
  });

  var filterJs = '<script>function filterCat(cat){document.querySelectorAll(".i-filter-btn").forEach(function(b){b.classList.remove("active")});event.target.classList.add("active");document.querySelectorAll(".i-course-group").forEach(function(g){if(cat==="all"||g.dataset.cat===cat){g.classList.remove("hidden")}else{g.classList.add("hidden")}})}<\/script>';

  var body = '<nav class="i-nav"><a href="../index.html" class="i-nav-logo">O-YOGA<span>教练手册</span></a><button class="dark-toggle" onclick="toggleDark()">深色模式</button></nav><div class="i-hero"><h1>教练<em>教学手册</em></h1><p>备课参考 · 口令速查 · 体式图解 · 课堂节奏</p></div>' + filterHtml + groupsHtml + '<footer class="i-footer"><p><span class="brand">O-YOGA瑜伽原</span> · 教练手册</p></footer>' + filterJs;

  fs.writeFileSync(path.join(__dirname, 'instructor', 'index.html'), instructorPage('教练教学手册', body), 'utf8');
  console.log('  instructor/index.html');
}

// ── Generate instructor lesson pages ──
function generateInstructorLessonPages() {
  var instructorLessonCount = 0;

  COURSES.forEach(function(course) {
    var lessons = getAllLessons(course.id);
    if (!lessons) return;
    var color = ac(course.cat);

    lessons.forEach(function(lesson, idx) {
      var num = String(lesson.num).padStart(2, '0');

      // ── Nav bar ──
      var navHtml = '<nav class="i-nav"><a href="index.html">← 教练手册</a><button class="dark-toggle" onclick="toggleDark()">深色模式</button></nav>';

      // ── Page header ──
      var headerHtml = '<div class="i-page-tag">教练手册</div><div class="i-page-title">第 ' + lesson.num + ' 课：' + lesson.title + '</div><div class="i-page-sub">' + course.name + ' · ' + (lesson.subtitle || '') + '</div><div class="i-meta"><span class="i-meta-tag">' + course.duration + ' 分钟</span><span class="i-meta-tag">' + CAT_LABELS[course.cat] + '</span><span class="i-meta-tag">Level ' + (Array.isArray(course.level) ? course.level[0] : course.level) + '</span></div>';

      // ── Objectives ──
      var objHtml = '';
      if (lesson.objectives && lesson.objectives.length) {
        objHtml = '<div class="i-section" id="sec-obj"><div class="i-label">学习目标</div><ul class="i-obj-list">' + lesson.objectives.map(function(o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>';
      }

      // ── Timeline ──
      var timelineHtml = '';
      if (lesson.sequence && lesson.sequence.length) {
        var totalMin = lesson.sequence.reduce(function(sum, s) { return sum + parseDur(s.duration); }, 0);
        var segs = lesson.sequence.map(function(s, i) {
          var min = parseDur(s.duration);
          var pct = totalMin > 0 ? (min / totalMin * 100) : (100 / lesson.sequence.length);
          return '<div class="i-tl-seg ' + tlClass(s.step) + '" style="width:' + pct + '%" data-idx="' + i + '"><span class="tl-name">' + s.step + '</span><span class="tl-dur">' + s.duration + '</span></div>';
        }).join('');
        timelineHtml = '<div class="i-section" id="sec-timeline"><div class="i-label">课堂时间线</div><div class="i-timeline"><div class="i-tl-scroll"><div class="i-tl-bar" style="min-width:' + Math.max(lesson.sequence.length * 80, 320) + 'px">' + segs + '</div></div><div class="i-tl-total">总时长 ' + totalMin + ' 分钟</div></div></div>';
      }

      // ── Cue cards ──
      var cueHtml = '';
      if (lesson.sequence && lesson.sequence.length) {
        var progSegs = lesson.sequence.map(function(s, i) {
          var min = parseDur(s.duration);
          var totalMin2 = lesson.sequence.reduce(function(sum, s2) { return sum + parseDur(s2.duration); }, 0);
          var pct = totalMin2 > 0 ? (min / totalMin2 * 100) : (100 / lesson.sequence.length);
          return '<div class="i-cue-prog-seg" style="flex:' + pct + '" data-idx="' + i + '"></div>';
        }).join('');

        var cards = lesson.sequence.map(function(s, i) {
          var noteText = (s.note || '').replace(/</g, '&lt;');
          var needsExpand = noteText.length > 200;
          return '<div class="i-cue-card"><div class="i-cue-header"><div class="i-cue-step">' + s.step + '</div><div class="i-cue-dur">' + s.duration + '</div></div><div class="i-cue-note' + (needsExpand ? ' collapsed' : '') + '">' + noteText + '</div>' + (needsExpand ? '<button class="i-cue-expand">展开全部</button>' : '') + '</div>';
        }).join('');

        cueHtml = '<div class="i-section" id="sec-cue"><div class="i-label">教学口令卡</div><div class="i-cue-wrap"><div class="i-cue-progress">' + progSegs + '</div><div class="i-cue-track">' + cards + '</div><div class="i-cue-arrows"><button class="i-cue-arr i-cue-prev" aria-label="上一步">‹</button><button class="i-cue-arr i-cue-next" aria-label="下一步">›</button></div><div class="i-cue-counter"></div></div></div>';
      }

      // ── Pose reference cards ──
      var poseHtml = '';
      if (lesson.poses && lesson.poses.length) {
        var poseNavBtns = lesson.poses.map(function(pid) {
          var pose = POSES[pid];
          if (!pose) return '';
          return '<button class="i-pose-nav-btn" data-pose="pose-' + pid + '">' + pose.name + '</button>';
        }).filter(Boolean).join('');

        var poseCards = lesson.poses.map(function(pid) {
          var pose = POSES[pid];
          if (!pose) return '';
          var svg = poseSvg(pid, { width: 80, showLabel: false, color: color });
          var catLabel = POSE_CAT_LABELS[pose.cat] || pose.cat || '';
          return '<div class="i-pose-card" id="pose-' + pid + '">' + '<div class="i-pose-svg">' + svg + '</div>' + '<div class="i-pose-info"><div class="i-pose-name">' + pose.name + '</div><div class="i-pose-en">' + pose.nameEn + '</div>' + (pose.sanskrit ? '<div class="i-pose-sanskrit">' + pose.sanskrit + '</div>' : '') + (catLabel ? '<span class="i-pose-cat">' + catLabel + '</span>' : '') + '</div></div>';
        }).filter(Boolean).join('');

        poseHtml = '<div class="i-section" id="sec-pose"><div class="i-label">体式速查 (' + lesson.poses.length + ')</div><div class="i-pose-nav">' + poseNavBtns + '</div><div class="i-pose-cards">' + poseCards + '</div></div>';
      }

      // ── Key points ──
      var kpHtml = '';
      if (lesson.keyPoints && lesson.keyPoints.length) {
        kpHtml = '<div class="i-section" id="sec-kp"><div class="i-label">教学要点</div><ul class="i-kp-list">' + lesson.keyPoints.map(function(p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
      }

      // ── Safety ──
      var safetyHtml = '';
      if (lesson.safetyNote) {
        safetyHtml = '<div class="i-section" id="sec-safety"><div class="i-label">安全提示</div><div class="i-safety"><strong>注意事项</strong>' + lesson.safetyNote + '</div></div>';
      }

      // ── Floating nav ──
      var floatSections = [];
      if (timelineHtml) floatSections.push({ id: 'sec-timeline', label: '时间线' });
      if (poseHtml) floatSections.push({ id: 'sec-pose', label: '体式' });
      if (kpHtml) floatSections.push({ id: 'sec-kp', label: '要点' });
      if (safetyHtml) floatSections.push({ id: 'sec-safety', label: '安全' });
      var floatHtml = '';
      if (floatSections.length > 1) {
        floatHtml = '<div class="i-float-nav">' + floatSections.map(function(s) {
          return '<button class="i-float-btn" data-target="#' + s.id + '">' + s.label + '</button>';
        }).join('') + '</div>';
      }

      // ── Lesson navigation (prev/next) ──
      var prevL = lesson.num > 1 ? lessons[lesson.num - 2] : null;
      var nextL = lesson.num < lessons.length ? lessons[lesson.num] : null;
      var lessonNavHtml = '<div class="i-lesson-nav">';
      if (prevL) {
        var pn = String(prevL.num).padStart(2, '0');
        lessonNavHtml += '<a class="i-ln-btn i-ln-prev" href="' + course.id + '-' + pn + '.html"><span class="i-ln-dir">← 上一课</span><span class="i-ln-title">第 ' + prevL.num + ' 课：' + prevL.title + '</span></a>';
      } else {
        lessonNavHtml += '<span></span>';
      }
      if (nextL) {
        var nn = String(nextL.num).padStart(2, '0');
        lessonNavHtml += '<a class="i-ln-btn i-ln-next" href="' + course.id + '-' + nn + '.html"><span class="i-ln-dir">下一课 →</span><span class="i-ln-title">第 ' + nextL.num + ' 课：' + nextL.title + '</span></a>';
      } else {
        lessonNavHtml += '<a class="i-ln-btn i-ln-next" href="index.html"><span class="i-ln-dir">返回手册 →</span></a>';
      }
      lessonNavHtml += '</div>';

      // ── Tab: 备课（overview) ──
      var overviewContent = objHtml + timelineHtml + poseHtml + kpHtml + safetyHtml + lessonNavHtml;

      // ── Tab: 口令演示 ──
      var cueTabContent = '';
      if (lesson.sequence && lesson.sequence.length) {
        // Full-screen cue card overlay
        var totalMin = lesson.sequence.reduce(function(sum, s) { return sum + parseDur(s.duration); }, 0);
        var fsSegs = lesson.sequence.map(function(s, i) {
          var min = parseDur(s.duration);
          var pct = totalMin > 0 ? (min / totalMin * 100) : (100 / lesson.sequence.length);
          return '<div class="i-fs-tl-seg ' + tlClass(s.step) + '" style="width:' + pct + 'px" data-idx="' + i + '"><span class="tl-name">' + s.step + '</span><span class="tl-dur">' + s.duration + '</span></div>';
        }).join('');

        var fsCards = lesson.sequence.map(function(s) {
          var noteText = (s.note || '').replace(/</g, '&lt;');
          return '<div class="i-fs-card"><div class="i-fs-card-step">' + s.step + '</div><div class="i-fs-card-dur">' + s.duration + '</div><div class="i-fs-card-note">' + noteText + '</div></div>';
        }).join('');

        var fsOverlay = '<div class="i-fs-cue" id="fsCue">'
          + '<div class="i-fs-header"><button class="i-fs-close">✕ 退出全屏</button><div class="i-fs-title">第 ' + lesson.num + ' 课：' + lesson.title + '</div><div style="width:72px"></div></div>'
          + '<div class="i-fs-progress"><div style="height:3px;border-radius:2px;background:var(--bg-deep);overflow:hidden"><div class="i-fs-progress-bar" style="height:100%;background:var(--accent);border-radius:2px;transition:width .3s;width:0"></div></div></div>'
          + '<div class="i-fs-tl"><div class="i-fs-tl-bar" style="min-width:' + Math.max(lesson.sequence.length * 80, 320) + 'px">' + fsSegs + '</div></div>'
          + '<div class="i-fs-card-area"><div class="i-fs-card-track">' + fsCards + '</div>'
          + '<div class="i-fs-arrows"><button class="i-fs-arr i-fs-prev" aria-label="上一步">‹</button><button class="i-fs-arr i-fs-next" aria-label="下一步">›</button></div></div>'
          + '<div class="i-fs-footer"><span class="i-fs-counter"></span><button class="i-fs-dm" onclick="toggleDark()">深色模式</button></div>'
          + '</div>';

        // Inline cue cards (smaller preview in the tab)
        var progSegs = lesson.sequence.map(function(s, i) {
          var min = parseDur(s.duration);
          var pct = totalMin > 0 ? (min / totalMin * 100) : (100 / lesson.sequence.length);
          return '<div class="i-cue-prog-seg" style="flex:' + pct + '" data-idx="' + i + '"></div>';
        }).join('');

        var inlineCards = lesson.sequence.map(function(s, i) {
          var noteText = (s.note || '').replace(/</g, '&lt;');
          var needsExpand = noteText.length > 200;
          return '<div class="i-cue-card"><div class="i-cue-header"><div class="i-cue-step">' + s.step + '</div><div class="i-cue-dur">' + s.duration + '</div></div><div class="i-cue-note' + (needsExpand ? ' collapsed' : '') + '">' + noteText + '</div>' + (needsExpand ? '<button class="i-cue-expand">展开全部</button>' : '') + '</div>';
        }).join('');

        cueTabContent = '<div style="text-align:center;margin-bottom:24px"><button class="btn" style="display:inline-flex;align-items:center;gap:8px;font-family:var(--font-u);font-size:16px;font-weight:600;padding:16px 36px;border-radius:100px;border:none;cursor:pointer;background:var(--primary);color:#fff;box-shadow:var(--shadow-lg);transition:all .2s" onclick="_openFsCue()">进入全屏口令模式 ↗</button><p style="font-size:13px;color:var(--fg3);margin-top:12px">全屏显示教学口令卡，支持键盘左右箭头翻页，Esc 退出</p></div>'
          + '<div class="i-cue-wrap"><div class="i-cue-progress">' + progSegs + '</div><div class="i-cue-track">' + inlineCards + '</div><div class="i-cue-arrows"><button class="i-cue-arr i-cue-prev" aria-label="上一步">‹</button><button class="i-cue-arr i-cue-next" aria-label="下一步">›</button></div><div class="i-cue-counter"></div></div>';

        // Attach fullscreen overlay to body (outside container)
        navHtml = navHtml + fsOverlay;
      }

      // ── Tabs ──
      var cueBadge = (lesson.sequence && lesson.sequence.length) ? '<span class="i-tab-badge">' + lesson.sequence.length + '</span>' : '';
      var tabsHtml = '<div class="i-tabs"><button class="i-tab i-tab-active" data-tab="tab-overview">备课参考</button><button class="i-tab" data-tab="tab-cue"><span class="i-tab-icon">🗣</span> 口令演示 ' + cueBadge + '</button></div>';

      // ── Assemble page ──
      var body = navHtml + '<div class="i-container">' + headerHtml + tabsHtml
        + '<div class="i-tab-content i-tab-active" id="tab-overview">' + overviewContent + '</div>'
        + (cueTabContent ? '<div class="i-tab-content" id="tab-cue">' + cueTabContent + '</div>' : '')
        + '</div>' + floatHtml;

      var file = path.join(__dirname, 'instructor', course.id + '-' + num + '.html');
      fs.writeFileSync(file, instructorPage('第' + lesson.num + '课 ' + lesson.title + ' — ' + course.name, body), 'utf8');
      instructorLessonCount++;
    });
  });

  return instructorLessonCount;
}

generateInstructorIndex();
var iLessons = generateInstructorLessonPages();
console.log('  Generated instructor/index.html + ' + iLessons + ' instructor lesson pages');
