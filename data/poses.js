// ═══════════════════════════════════════════════
// Yoga Pose Skeleton Data & SVG Renderer
// Coordinate system: 200×280, figure centered at x≈100, feet at y≈265
// ═══════════════════════════════════════════════

const POSES = {

// ── STANDING ──

tadasana: {
  name:'山式', nameEn:'Mountain Pose', sanskrit:'Tāḍāsana', cat:'standing',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[80,105],eR:[120,105],hL:[78,148],hR:[122,148],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,210],fL:[89,265],fR:[111,265]
},

uttanasana: {
  name:'站立前屈', nameEn:'Standing Forward Fold', sanskrit:'Uttānāsana', cat:'standing',
  head:[92,178],neck:[90,162],sL:[78,138],sR:[118,138],
  eL:[80,168],eR:[120,168],hL:[82,210],hR:[118,210],
  hip:[100,148],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,210],fL:[89,265],fR:[111,265]
},

ardha_uttanasana: {
  name:'半前屈', nameEn:'Half Forward Fold', sanskrit:'Ardha Uttānāsana', cat:'standing',
  head:[100,88],neck:[100,102],sL:[85,115],sR:[115,115],
  eL:[72,115],eR:[128,115],hL:[60,148],hR:[140,148],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,210],fL:[89,265],fR:[111,265]
},

virabhadrasana1: {
  name:'战士一式', nameEn:'Warrior I', sanskrit:'Vīrabhadrāsana I', cat:'standing',
  head:[100,22],neck:[100,40],sL:[85,56],sR:[115,56],
  eL:[88,28],eR:[112,28],hL:[92,2],hR:[108,2],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[60,192],kR:[130,185],fL:[42,265],fR:[148,265]
},

virabhadrasana2: {
  name:'战士二式', nameEn:'Warrior II', sanskrit:'Vīrabhadrāsana II', cat:'standing',
  head:[108,24],neck:[105,40],sL:[85,56],sR:[115,56],
  eL:[32,58],eR:[168,58],hL:[5,58],hR:[195,58],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[55,192],kR:[142,185],fL:[38,265],fR:[160,265]
},

virabhadrasana3: {
  name:'战士三式', nameEn:'Warrior III', sanskrit:'Vīrabhadrāsana III', cat:'balance',
  head:[162,115],neck:[152,120],sL:[130,128],sR:[145,118],
  eL:[115,115],eR:[160,108],hL:[100,110],hR:[172,98],
  hip:[100,148],hiL:[95,150],hiR:[105,150],
  kL:[60,155],kR:[60,155],fL:[15,160],fR:[15,160]
},

trikonasana: {
  name:'三角式', nameEn:'Triangle Pose', sanskrit:'Trikoṇāsana', cat:'standing',
  head:[72,120],neck:[78,130],sL:[85,58],sR:[115,58],
  eL:[55,128],eR:[130,85],hL:[45,168],hR:[145,115],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[55,192],kR:[142,185],fL:[38,265],fR:[160,265]
},

parivrtta_trikonasana: {
  name:'扭转三角式', nameEn:'Revolved Triangle', sanskrit:'Parivṛtta Trikoṇāsana', cat:'standing',
  head:[118,130],neck:[112,138],sL:[85,58],sR:[115,58],
  eL:[60,128],eR:[140,110],hL:[52,168],hR:[155,135],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[55,192],kR:[142,185],fL:[38,265],fR:[160,265]
},

parsvakonasana: {
  name:'侧角伸展式', nameEn:'Side Angle', sanskrit:'Utthita Pārśvakoṇāsana', cat:'standing',
  head:[148,80],neck:[138,90],sL:[85,58],sR:[115,58],
  eL:[65,128],eR:[160,70],hL:[52,168],hR:[180,50],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[55,192],kR:[142,185],fL:[38,265],fR:[160,265]
},

vrksasana: {
  name:'树式', nameEn:'Tree Pose', sanskrit:'Vṛkṣāsana', cat:'balance',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[72,50],eR:[128,50],hL:[60,18],hR:[140,18],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,168],fL:[89,265],fR:[100,128]
},

padangusthasana: {
  name:'抓脚趾前屈', nameEn:'Big Toe Pose', sanskrit:'Pādāṅguṣṭhāsana', cat:'standing',
  head:[100,158],neck:[100,170],sL:[85,58],sR:[115,58],
  eL:[88,155],eR:[112,155],hL:[89,210],hR:[111,210],
  hip:[100,148],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,210],fL:[89,265],fR:[111,265]
},

utkatasana: {
  name:'幻椅式', nameEn:'Chair Pose', sanskrit:'Utkāṭāsana', cat:'standing',
  head:[100,15],neck:[100,32],sL:[85,48],sR:[115,48],
  eL:[80,2],eR:[120,2],hL:[78,0],hR:[122,0],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[70,195],kR:[130,195],fL:[65,265],fR:[135,265]
},

garudasana: {
  name:'鹰式', nameEn:'Eagle Pose', sanskrit:'Garuḍāsana', cat:'balance',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[92,80],eR:[108,80],hL:[100,115],hR:[100,115],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[82,195],kR:[118,195],fL:[80,250],fR:[120,250]
},

prasarita_padottanasana: {
  name:'双角式', nameEn:'Wide-Legged Forward Fold', sanskrit:'Prasārita Pādottānāsana', cat:'standing',
  head:[100,155],neck:[100,168],sL:[80,100],sR:[120,100],
  eL:[65,128],eR:[135,128],hL:[50,168],hR:[150,168],
  hip:[100,148],hiL:[85,152],hiR:[115,152],
  kL:[70,210],kR:[130,210],fL:[58,265],fR:[142,265]
},

ardha_chandrasana: {
  name:'半月式', nameEn:'Half Moon', sanskrit:'Ardha Candrāsana', cat:'balance',
  head:[158,88],neck:[148,98],sL:[130,108],sR:[142,95],
  eL:[115,105],eR:[160,88],hL:[100,100],hR:[175,78],
  hip:[100,148],hiL:[95,150],hiR:[105,150],
  kL:[65,160],kR:[65,160],fL:[30,172],fR:[30,172]
},

malasana: {
  name:'深蹲式', nameEn:'Garland Pose', sanskrit:'Mālāsana', cat:'standing',
  head:[100,90],neck:[100,108],sL:[85,122],sR:[115,122],
  eL:[72,148],eR:[128,148],hL:[65,175],hR:[135,175],
  hip:[100,168],hiL:[92,170],hiR:[108,170],
  kL:[68,210],kR:[132,210],fL:[62,265],fR:[138,265]
},

parsvottanasana: {
  name:'加强侧伸展', nameEn:'Pyramid Pose', sanskrit:'Pārśvottānāsana', cat:'standing',
  head:[85,165],neck:[88,155],sL:[80,105],sR:[110,105],
  eL:[68,80],eR:[128,80],hL:[60,55],hR:[135,55],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[65,195],kR:[128,192],fL:[50,265],fR:[145,265]
},

// ── SEATED ──

dandasana: {
  name:'手杖式', nameEn:'Staff Pose', sanskrit:'Daṇḍāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[120,52],eR:[80,52],hL:[148,45],hR:[52,45],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[91,200],kR:[109,200],fL:[89,265],fR:[111,265]
},

paschimottanasana: {
  name:'坐姿前屈', nameEn:'Seated Forward Fold', sanskrit:'Paścimottānāsana', cat:'seated',
  head:[68,148],neck:[75,155],sL:[85,100],sR:[115,100],
  eL:[62,148],eR:[130,140],hL:[55,185],hR:[140,175],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[91,200],kR:[109,200],fL:[89,265],fR:[111,265]
},

baddha_konasana: {
  name:'束角式', nameEn:'Bound Angle Pose', sanskrit:'Baddha Koṇāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[72,52],eR:[128,52],hL:[58,38],hR:[142,38],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[62,198],kR:[138,198],fL:[52,220],fR:[148,220]
},

janu_sirsasana: {
  name:'头碰膝式', nameEn:'Head to Knee Pose', sanskrit:'Jānu Śīrṣāsana', cat:'seated',
  head:[72,148],neck:[78,155],sL:[85,95],sR:[115,95],
  eL:[65,140],eR:[128,132],hL:[58,175],hR:[138,165],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[115,195],kR:[109,200],fL:[125,235],fR:[111,265]
},

upavistha_konasana: {
  name:'坐角式', nameEn:'Wide-Angle Seated Forward Bend', sanskrit:'Upaviṣṭha Koṇāsana', cat:'seated',
  head:[100,155],neck:[100,168],sL:[82,108],sR:[118,108],
  eL:[65,138],eR:[135,138],hL:[48,168],hR:[152,168],
  hip:[100,148],hiL:[85,152],hiR:[115,152],
  kL:[60,200],kR:[140,200],fL:[48,248],fR:[152,248]
},

gomukhasana: {
  name:'牛面式', nameEn:'Cow Face Pose', sanskrit:'Gomukhāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[80,85],eR:[120,85],hL:[95,120],hR:[105,120],
  hip:[100,148],hiL:[93,150],hiR:[107,150],
  kL:[82,198],kR:[118,198],fL:[78,255],fR:[122,255]
},

virasana: {
  name:'英雄坐', nameEn:'Hero Pose', sanskrit:'Vīrāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[80,105],eR:[120,105],hL:[78,148],hR:[122,148],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[72,205],kR:[128,205],fL:[60,250],fR:[140,250]
},

sukhasana: {
  name:'简易坐', nameEn:'Easy Pose', sanskrit:'Sukhāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[72,55],eR:[128,55],hL:[58,38],hR:[142,38],
  hip:[100,148],hiL:[88,152],hiR:[112,152],
  kL:[65,198],kR:[135,198],fL:[55,240],fR:[145,240]
},

// ── KNEELING / FOUR-POINT ──

balasana: {
  name:'婴儿式', nameEn:"Child's Pose", sanskrit:'Bālāsana', cat:'kneeling',
  head:[100,165],neck:[100,152],sL:[85,135],sR:[115,135],
  eL:[72,162],eR:[128,162],hL:[60,185],hR:[140,185],
  hip:[100,148],hiL:[93,152],hiR:[107,152],
  kL:[72,200],kR:[128,200],fL:[55,250],fR:[145,250]
},

marjaryasana: {
  name:'猫式', nameEn:'Cat Pose', sanskrit:'Mārjaryāsana', cat:'kneeling',
  head:[100,118],neck:[100,132],sL:[85,148],sR:[115,148],
  eL:[72,168],eR:[128,168],hL:[60,195],hR:[140,195],
  hip:[100,170],hiL:[93,172],hiR:[107,172],
  kL:[72,210],kR:[128,210],fL:[60,265],fR:[140,265]
},

bitilakasana: {
  name:'牛式', nameEn:'Cow Pose', sanskrit:'Bitīlakāsana', cat:'kneeling',
  head:[100,95],neck:[100,112],sL:[85,130],sR:[115,130],
  eL:[72,158],eR:[128,158],hL:[60,185],hR:[140,185],
  hip:[100,165],hiL:[93,168],hiR:[107,168],
  kL:[72,210],kR:[128,210],fL:[60,265],fR:[140,265]
},

ustrasana: {
  name:'骆驼式', nameEn:'Camel Pose', sanskrit:'Uṣṭrāsana', cat:'kneeling',
  head:[100,60],neck:[100,78],sL:[85,95],sR:[115,95],
  eL:[78,130],eR:[122,130],hL:[72,165],hR:[128,165],
  hip:[100,168],hiL:[93,170],hiR:[107,170],
  kL:[72,210],kR:[128,210],fL:[60,250],fR:[140,250]
},

supta_virasana: {
  name:'仰卧英雄式', nameEn:'Reclined Hero', sanskrit:'Supta Vīrāsana', cat:'supine',
  head:[100,60],neck:[100,78],sL:[85,95],sR:[115,95],
  eL:[120,82],eR:[80,82],hL:[145,70],hR:[55,70],
  hip:[100,168],hiL:[93,170],hiR:[107,170],
  kL:[72,210],kR:[128,210],fL:[60,250],fR:[140,250]
},

// ── PRONE ──

bhujangasana: {
  name:'眼镜蛇式', nameEn:'Cobra Pose', sanskrit:'Bhujaṅgāsana', cat:'prone',
  head:[142,128],neck:[135,140],sL:[118,155],sR:[130,148],
  eL:[95,168],eR:[148,165],hL:[78,182],hR:[162,180],
  hip:[100,178],hiL:[92,180],hiR:[108,180],
  kL:[78,220],kR:[122,220],fL:[68,265],fR:[132,265]
},

salabhasana: {
  name:'蝗虫式', nameEn:'Locust Pose', sanskrit:'Śalabhāsana', cat:'prone',
  head:[138,135],neck:[132,148],sL:[115,162],sR:[125,155],
  eL:[90,175],eR:[155,170],hL:[68,185],hR:[175,180],
  hip:[100,178],hiL:[92,180],hiR:[108,180],
  kL:[78,220],kR:[122,220],fL:[68,265],fR:[132,265]
},

urdhva_mukha_svanasana: {
  name:'上犬式', nameEn:'Upward Dog', sanskrit:'Ūrdhva Mukha Śvānāsana', cat:'prone',
  head:[148,115],neck:[140,128],sL:[120,148],sR:[135,140],
  eL:[95,165],eR:[155,160],hL:[72,185],hR:[172,178],
  hip:[100,180],hiL:[92,182],hiR:[108,182],
  kL:[75,225],kR:[125,225],fL:[62,265],fR:[138,265]
},

chaturanga: {
  name:'四柱支撑', nameEn:'Four-Limbed Staff', sanskrit:'Caturaṅga Daṇḍāsana', cat:'arm_balance',
  head:[148,128],neck:[140,135],sL:[120,148],sR:[132,142],
  eL:[98,158],eR:[155,152],hL:[72,168],hR:[175,162],
  hip:[100,165],hiL:[92,167],hiR:[108,167],
  kL:[75,210],kR:[125,210],fL:[62,258],fR:[138,258]
},

dhanurasana: {
  name:'弓式', nameEn:'Bow Pose', sanskrit:'Dhanurāsana', cat:'prone',
  head:[148,125],neck:[142,138],sL:[125,155],sR:[135,148],
  eL:[105,168],eR:[155,165],hL:[88,180],hR:[168,178],
  hip:[100,178],hiL:[92,180],hiR:[108,180],
  kL:[78,220],kR:[122,220],fL:[68,255],fR:[132,255]
},

// ── SUPINE ──

savasana: {
  name:'挺尸式', nameEn:"Corpse Pose", sanskrit:'Śavāsana', cat:'supine',
  head:[28,148],neck:[42,148],sL:[60,148],sR:[60,148],
  eL:[85,138],eR:[85,158],hL:[115,132],hR:[115,165],
  hip:[105,148],hiL:[115,148],hiR:[115,148],
  kL:[145,148],kR:[145,148],fL:[175,148],fR:[175,148]
},

supta_baddha_konasana: {
  name:'仰卧束角式', nameEn:'Reclined Bound Angle', sanskrit:'Supta Baddha Koṇāsana', cat:'supine',
  head:[28,148],neck:[42,148],sL:[60,148],sR:[60,148],
  eL:[85,138],eR:[85,158],hL:[115,130],hR:[115,165],
  hip:[105,148],hiL:[115,148],hiR:[115,148],
  kL:[140,160],kR:[140,136],fL:[158,175],fR:[158,122]
},

setu_bandhasana: {
  name:'桥式', nameEn:'Bridge Pose', sanskrit:'Setu Bandhāsana', cat:'supine',
  head:[72,195],neck:[78,182],sL:[85,165],sR:[115,165],
  eL:[72,178],eR:[128,178],hL:[68,195],hR:[132,195],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[91,210],kR:[109,210],fL:[89,265],fR:[111,265]
},

supta_matsyendrasana: {
  name:'仰卧扭转', nameEn:'Reclined Twist', sanskrit:'Supta Matsyendrāsana', cat:'supine',
  head:[55,168],neck:[65,162],sL:[82,150],sR:[82,150],
  eL:[65,145],eR:[100,155],hL:[50,138],hR:[115,168],
  hip:[100,178],hiL:[92,180],hiR:[108,180],
  kL:[88,220],kR:[118,178],fL:[85,265],fR:[125,178]
},

viparita_karani: {
  name:'靠墙抬腿', nameEn:'Legs Up the Wall', sanskrit:'Viparīta Karaṇī', cat:'inversion',
  head:[28,155],neck:[42,155],sL:[60,155],sR:[60,155],
  eL:[80,145],eR:[80,165],hL:[100,140],hR:[100,170],
  hip:[105,155],hiL:[115,155],hiR:[115,155],
  kL:[145,118],kR:[145,118],fL:[170,82],fR:[170,82]
},

// ── INVERSIONS ──

adho_mukha_svanasana: {
  name:'下犬式', nameEn:'Downward Dog', sanskrit:'Adho Mukha Śvānāsana', cat:'inversion',
  head:[38,115],neck:[48,128],sL:[65,145],sR:[72,138],
  eL:[50,168],eR:[85,165],hL:[38,192],hR:[95,188],
  hip:[100,168],hiL:[93,170],hiR:[107,170],
  kL:[122,225],kR:[142,222],fL:[138,265],fR:[162,265]
},

sarvangasana: {
  name:'肩倒立', nameEn:'Shoulderstand', sanskrit:'Sarvāṅgāsana', cat:'inversion',
  head:[100,200],neck:[100,185],sL:[85,168],sR:[115,168],
  eL:[72,158],eR:[128,158],hL:[60,142],hR:[140,142],
  hip:[100,120],hiL:[93,118],hiR:[107,118],
  kL:[91,68],kR:[109,68],fL:[89,15],fR:[111,15]
},

sirsasana: {
  name:'头倒立', nameEn:'Headstand', sanskrit:'Śīrṣāsana', cat:'inversion',
  head:[100,232],neck:[100,218],sL:[85,200],sR:[115,200],
  eL:[68,192],eR:[132,192],hL:[55,180],hR:[145,180],
  hip:[100,145],hiL:[93,143],hiR:[107,143],
  kL:[91,88],kR:[109,88],fL:[89,30],fR:[111,30]
},

halasana: {
  name:'犁式', nameEn:'Plow Pose', sanskrit:'Halāsana', cat:'inversion',
  head:[100,195],neck:[100,180],sL:[85,165],sR:[115,165],
  eL:[68,155],eR:[132,155],hL:[52,142],hR:[148,142],
  hip:[100,135],hiL:[93,133],hiR:[107,133],
  kL:[128,118],kR:[148,118],fL:[155,102],fR:[175,102]
},

pincha_mayurasana: {
  name:'前臂倒立', nameEn:'Forearm Stand', sanskrit:'Piñcha Mayūrāsana', cat:'inversion',
  head:[100,225],neck:[100,210],sL:[82,195],sR:[118,195],
  eL:[55,210],eR:[145,210],hL:[40,225],hR:[160,225],
  hip:[100,142],hiL:[93,140],hiR:[107,140],
  kL:[91,85],kR:[109,85],fL:[89,25],fR:[111,25]
},

// ── ARM BALANCE ──

navasana: {
  name:'船式', nameEn:'Boat Pose', sanskrit:'Nāvāsana', cat:'core',
  head:[100,30],neck:[100,48],sL:[85,62],sR:[115,62],
  eL:[70,52],eR:[130,52],hL:[52,38],hR:[148,38],
  hip:[100,142],hiL:[93,145],hiR:[107,145],
  kL:[58,178],kR:[142,178],fL:[18,205],fR:[182,205]
},

bakasana: {
  name:'乌鸦式', nameEn:'Crow Pose', sanskrit:'Bakāsana', cat:'arm_balance',
  head:[100,95],neck:[105,108],sL:[90,122],sR:[110,118],
  eL:[72,115],eR:[128,112],hL:[55,105],hR:[145,102],
  hip:[100,158],hiL:[93,160],hiR:[107,160],
  kL:[75,200],kR:[125,200],fL:[58,242],fR:[142,242]
},

urdhva_dhanurasana: {
  name:'轮式', nameEn:'Wheel Pose', sanskrit:'Ūrdhva Dhanurāsana', cat:'backbend',
  head:[100,45],neck:[100,62],sL:[82,78],sR:[118,78],
  eL:[62,92],eR:[138,92],hL:[48,112],hR:[152,112],
  hip:[100,168],hiL:[93,170],hiR:[107,170],
  kL:[80,215],kR:[120,215],fL:[70,265],fR:[130,265]
},

// ── FLOW / TRANSITIONS ──

surya_namaskara_a: {
  name:'拜日式 A', nameEn:'Sun Salutation A', sanskrit:'Sūrya Namaskāra A', cat:'flow',
  head:[100,15],neck:[100,30],sL:[85,46],sR:[115,46],
  eL:[68,25],eR:[132,25],hL:[50,8],hR:[150,8],
  hip:[100,140],hiL:[93,142],hiR:[107,142],
  kL:[80,190],kR:[120,190],fL:[72,245],fR:[128,245]
},

eka_pada_rajakapotasana: {
  name:'鸽子式', nameEn:'Pigeon Pose', sanskrit:'Eka Pada Rājakapotāsana', cat:'hip',
  head:[105,85],neck:[102,98],sL:[88,112],sR:[115,108],
  eL:[72,135],eR:[130,100],hL:[60,160],hR:[142,82],
  hip:[100,150],hiL:[92,152],hiR:[108,152],
  kL:[108,195],kR:[138,200],fL:[118,235],fR:[148,240]
},

agnistambhasana: {
  name:'方块式', nameEn:'Fire Log Pose', sanskrit:'Agnistambhāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[72,55],eR:[128,55],hL:[58,38],hR:[142,38],
  hip:[100,148],hiL:[90,152],hiR:[110,152],
  kL:[75,192],kR:[125,192],fL:[65,230],fR:[135,230]
},

padmasana: {
  name:'莲花坐', nameEn:'Lotus Pose', sanskrit:'Padmāsana', cat:'seated',
  head:[100,25],neck:[100,42],sL:[85,58],sR:[115,58],
  eL:[68,95],eR:[132,95],hL:[55,130],hR:[145,130],
  hip:[100,150],hiL:[80,155],hiR:[120,155],
  kL:[55,188],kR:[145,188],fL:[125,175],fR:[75,175]
},

utkata_konasana: {
  name:'女神式', nameEn:'Goddess Pose', sanskrit:'Utkaṭa Koṇāsana', cat:'standing',
  head:[100,22],neck:[100,40],sL:[85,56],sR:[115,56],
  eL:[62,82],eR:[138,82],hL:[58,56],hR:[142,56],
  hip:[100,148],hiL:[82,150],hiR:[118,150],
  kL:[55,195],kR:[145,195],fL:[40,265],fR:[160,265]
},

kapotasana_prep: {
  name:'龙式', nameEn:'Dragon Pose', sanskrit:'Dragon Pose', cat:'hip',
  head:[100,80],neck:[100,95],sL:[85,108],sR:[115,108],
  eL:[72,135],eR:[128,135],hL:[60,162],hR:[140,162],
  hip:[100,150],hiL:[93,152],hiR:[107,152],
  kL:[58,195],kR:[135,192],fL:[42,252],fR:[148,265]
}
};

// ═══════════════════════════════════════════════
// SVG POSE RENDERER
// ═══════════════════════════════════════════════

function renderPoseSvg(poseId, opts = {}) {
  const pose = POSES[poseId];
  if (!pose) return `<div style="width:${opts.width||160}px;height:${Math.round((opts.width||160)*1.4)}px;background:var(--bg-deep);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--fg3)">未找到体式</div>`;

  const w = opts.width || 160;
  const color = opts.color || '#3A5248';
  const showLabel = opts.showLabel !== false;
  const s = w / 200;
  const h = Math.round(280 * s);
  const p = pose;

  function pt(arr) { return arr.map(v => Math.round(v * s)); }
  function qPath(a, b, c) {
    const [ax,ay]=pt(a),[bx,by]=pt(b),[cx,cy]=pt(c);
    return `M${ax},${ay} Q${bx},${by} ${cx},${cy}`;
  }

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;

  // Decorative circle bg
  svg += `<circle cx="${Math.round(w*0.5)}" cy="${Math.round(h*0.48)}" r="${Math.round(90*s)}" fill="none" stroke="${color}" stroke-width="${Math.round(0.5*s)}" opacity="0.08"/>`;

  // Ground mat
  const matY = Math.round(268 * s);
  svg += `<rect x="${Math.round(30*s)}" y="${matY}" width="${Math.round(140*s)}" height="${Math.round(6*s)}" rx="${Math.round(3*s)}" fill="${color}" opacity="0.06"/>`;

  const sw = Math.round(2.2 * s);
  const swHead = Math.round(2 * s);
  const headR = Math.round(11 * s);

  // Torso
  if (p.chest) {
    svg += `<path d="${qPath(p.neck, p.chest, p.hip)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;
  } else {
    const [nx,ny]=pt(p.neck),[hx,hy]=pt(p.hip);
    svg += `<path d="M${nx},${ny} L${hx},${hy}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }

  // Shoulders
  svg += `<path d="${qPath(p.sL, [((p.sL[0]+p.sR[0])/2), ((p.sL[1]+p.sR[1])/2)], p.sR)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;

  // Arms
  svg += `<path d="${qPath(p.sL, p.eL, p.hL)}" fill="none" stroke="${color}" stroke-width="${swHead}" stroke-linecap="round"/>`;
  svg += `<path d="${qPath(p.sR, p.eR, p.hR)}" fill="none" stroke="${color}" stroke-width="${swHead}" stroke-linecap="round"/>`;

  // Legs
  svg += `<path d="${qPath(p.hiL, p.kL, p.fL)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;
  svg += `<path d="${qPath(p.hiR, p.kR, p.fR)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;

  // Head
  const [hx,hy] = pt(p.head);
  svg += `<circle cx="${hx}" cy="${hy}" r="${headR}" fill="${color}" opacity="0.12" stroke="${color}" stroke-width="${swHead}"/>`;

  // Label
  if (showLabel) {
    svg += `<text x="${Math.round(w/2)}" y="${h-2}" text-anchor="middle" font-family="'Work Sans',-apple-system,sans-serif" font-size="${Math.round(10*s)}" font-weight="500" fill="${color}" opacity="0.7">${pose.name}</text>`;
  }

  svg += `</svg>`;
  return svg;
}
