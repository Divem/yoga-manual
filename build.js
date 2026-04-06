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
  {id:'yoga-basics',name:'瑜伽入门',nameEn:'Yoga Basics',cat:'foundation',level:1,duration:60},
  {id:'hatha',name:'哈他瑜伽',nameEn:'Hatha Yoga',cat:'foundation',level:2,duration:75},
  {id:'restorative',name:'修复瑜伽',nameEn:'Restorative Yoga',cat:'foundation',level:1,duration:60},
  {id:'vinyasa',name:'流瑜伽',nameEn:'Vinyasa Flow',cat:'progressive',level:3,duration:60},
  {id:'ashtanga',name:'阿斯汤加瑜伽',nameEn:'Ashtanga Yoga',cat:'progressive',level:4,duration:90},
  {id:'iyengar',name:'艾扬格精准瑜伽',nameEn:'Iyengar Yoga',cat:'progressive',level:3,duration:90},
  {id:'yin',name:'阴瑜伽',nameEn:'Yin Yoga',cat:'progressive',level:2,duration:75},
  {id:'hip-opening',name:'开髋专题',nameEn:'Hip Opening',cat:'workshop',level:2,duration:120},
  {id:'backbend',name:'后弯专题',nameEn:'Backbend',cat:'workshop',level:3,duration:120},
  {id:'inversion',name:'倒立专题',nameEn:'Inversion',cat:'workshop',level:4,duration:120},
  {id:'meditation-pranayama',name:'冥想与呼吸法',nameEn:'Meditation & Pranayama',cat:'workshop',level:1,duration:60},
  {id:'prenatal',name:'孕产瑜伽',nameEn:'Prenatal Yoga',cat:'workshop',level:2,duration:60},
  {id:'spine-therapy',name:'脊柱理疗',nameEn:'Spine Therapy',cat:'workshop',level:2,duration:75},
];

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
  var extraCss = '.lesson-nav{display:flex;gap:12px;margin-top:36px;padding-top:24px;border-top:1px solid #E5DED5}.ln-btn{flex:1;text-decoration:none;border-radius:12px;padding:16px;background:#F7F3ED;display:flex;flex-direction:column;gap:4px;transition:background .2s}.ln-btn:active{background:#EDE8E0}.ln-prev{text-align:left}.ln-next{text-align:right;justify-content:flex-end}.ln-dir{font-family:Work Sans,sans-serif;font-size:12px;font-weight:600;color:#C4714B;letter-spacing:.04em}.ln-title{font-family:Work Sans,sans-serif;font-size:13px;font-weight:500;color:#6B6560;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}';
  return '<!DOCTYPE html>\n<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"><meta name="theme-color" content="#3A5248"><title>' + title + ' — 瑜伽中心</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"><style>' + CSS + extraCss + '</style></head><body>' + body + '</body></html>';
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

  var courseBody = '<nav style="position:fixed;top:0;left:0;right:0;z-index:100;height:56px;display:flex;align-items:center;gap:12px;padding:0 20px;background:rgba(247,243,237,.9);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(229,222,213,.5)"><a href="../index.html" style="text-decoration:none;color:#6B6560;font-family:Work Sans,sans-serif;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px">← 课程体系</a></nav><div style="padding:calc(56px + 20px) 20px 48px;max-width:680px;margin:0 auto"><div class="page-title">' + course.name + '</div><div class="page-en">' + course.nameEn + '</div><div class="page-info"><span class="page-badge">' + LVL_LABELS[lvl] + '</span><span class="page-badge">' + course.duration + 'min / 节</span><span class="page-badge">' + lessons.length + ' 节课</span><span class="page-badge">' + CAT_LABELS[course.cat] + '</span></div><div class="lesson-list">' + cards + '</div></div>';

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
