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
  'yoga-basics':       {poseId:'tadasana',             name:'山式',   en:'Tadasana'},
  'hatha':             {poseId:'adho_mukha_svanasana',  name:'下犬式', en:'Adho Mukha Svanasana'},
  'restorative':       {poseId:'balasana',              name:'婴儿式', en:'Balasana'},
  'vinyasa':           {poseId:'virabhadrasana1',       name:'战士一式', en:'Virabhadrasana I'},
  'iyengar':           {poseId:'trikonasana',           name:'三角伸展式', en:'Trikonasana'},
  'yin':               {poseId:'baddha_konasana',       name:'蝴蝶式', en:'Baddha Konasana'},
  'ashtanga':          {poseId:'paschimottanasana',     name:'前屈式', en:'Paschimottanasana'},
  'hip-opening':       {poseId:'baddha_konasana',       name:'束角式', en:'Baddha Konasana'},
  'backbend':          {poseId:'urdhva_dhanurasana',    name:'轮式',   en:'Urdhva Dhanurasana'},
  'inversion':         {poseId:'sirsasana',             name:'头倒立', en:'Sirsasana'},
  'meditation-pranayama':{poseId:'padmasana',           name:'莲花坐', en:'Padmasana'},
  'prenatal':          {poseId:'utkata_konasana',       name:'女神式', en:'Utkata Konasana'},
  'spine-therapy':     {poseId:'marjaryasana',          name:'猫牛式', en:'Marjaryasana-Bitilakasana'},
};

var CAT_LABELS = {foundation:'基础课程',progressive:'进阶课程',workshop:'专题工作坊'};
var LVL_LABELS = ['','零基础','基础','进阶','高阶'];
function ac(cat){return cat==='foundation'?'#3A5248':cat==='progressive'?'#C4714B':'#8B6F4E';}

// ── Create directories ──
fs.mkdirSync(path.join(__dirname,'courses'),{recursive:true});
fs.mkdirSync(path.join(__dirname,'lessons'),{recursive:true});

// ── HTML page template ──
function htmlPage(title, body, poseIds) {
  poseIds = poseIds || [];
  var poseData = JSON.stringify(Object.fromEntries(
    poseIds.filter(function(id){return !!POSES[id]}).map(function(id){return [id, POSES[id]]})
  ));
  var extraCss = '.lesson-nav{display:flex;gap:12px;margin-top:36px;padding-top:24px;border-top:1px solid #E5DED5}.ln-btn{flex:1;text-decoration:none;border-radius:12px;padding:16px;background:#F7F3ED;display:flex;flex-direction:column;gap:4px;transition:background .2s}.ln-btn:active{background:#EDE8E0}.ln-prev{text-align:left}.ln-next{text-align:right;justify-content:flex-end}.ln-dir{font-family:Work Sans,sans-serif;font-size:12px;font-weight:600;color:#C4714B;letter-spacing:.04em}.ln-title{font-family:Work Sans,sans-serif;font-size:13px;font-weight:500;color:#6B6560;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.course-tabs{display:flex;gap:0;border-bottom:1.5px solid #E5DED5;margin:20px 0 24px}.ct-btn{flex:1;padding:12px 0;font-family:Work Sans,sans-serif;font-size:14px;font-weight:600;color:#9E9790;background:none;border:none;cursor:pointer;position:relative;transition:color .25s}.ct-btn::after{content:"";position:absolute;bottom:-1.5px;left:20%;right:20%;height:2.5px;border-radius:2px;background:transparent;transition:all .25s}.ct-btn.ct-active{color:#3A5248}.ct-btn.ct-active::after{background:#3A5248;left:10%;right:10%}.ci-section{margin-bottom:24px}.ci-label{font-family:Work Sans,sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#C4714B;margin-bottom:10px}.ci-desc{font-size:15px;color:#6B6560;line-height:1.9;margin:0}.ci-list{list-style:none}.ci-list li{padding:8px 0 8px 22px;position:relative;font-size:14px;color:#6B6560;line-height:1.7}.ci-list li::before{content:"";position:absolute;left:0;top:15px;width:8px;height:8px;border-radius:2px;background:#3A5248;transform:rotate(45deg)}.ci-outline-item{margin-bottom:16px}.ci-outline-item h4{font-family:Work Sans,sans-serif;font-size:14px;font-weight:600;color:#2A2A28;margin-bottom:4px;padding-left:12px;border-left:2.5px solid #C4714B}.ci-outline-item p{font-size:13px;color:#6B6560;line-height:1.7;padding-left:14px}.ci-table{width:100%;border-collapse:collapse;font-family:Work Sans,sans-serif;font-size:13px}.ci-table th{text-align:left;font-weight:600;color:#2A2A28;padding:8px 10px;border-bottom:2px solid #3A5248;font-size:12px}.ci-table td{padding:8px 10px;border-bottom:1px solid #E5DED5;color:#6B6560}.ci-table td:first-child{font-weight:500;color:#2A2A28;white-space:nowrap}.ci-tags{display:flex;flex-wrap:wrap;gap:6px}.ci-tag{font-family:Work Sans,sans-serif;font-size:12px;padding:5px 12px;border-radius:100px;background:rgba(58,82,72,.07);color:#3A5248;font-weight:500}.ci-hero{text-align:center;padding:24px 0 20px}.ci-hero-name{font-family:Work Sans,sans-serif;font-size:16px;font-weight:600;color:#3A5248;margin-top:10px}.ci-hero-en{font-family:Work Sans,sans-serif;font-size:13px;font-style:italic;color:#9E9790;margin-top:2px}.ci-note{background:#FFF3ED;border-radius:12px;padding:14px 16px;font-size:13px;color:#6B6560;line-height:1.7;border-left:3px solid #C4714B;margin-top:8px;overflow-wrap:break-word;word-break:break-word}.ci-desc{overflow-wrap:break-word;word-break:break-word}.ci-list li{overflow-wrap:break-word;word-break:break-word}.ci-table td{overflow-wrap:break-word;word-break:break-word}';
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
  var hero = HERO_POSES[course.id];
  if (hero) {
    var heroSvg = poseSvg(hero.poseId, {width:160, showLabel:false, color:color});
    introHtml += '<div class="ci-hero">' + heroSvg + '<div class="ci-hero-name">' + hero.name + '</div><div class="ci-hero-en">' + hero.en + '</div></div>';
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
