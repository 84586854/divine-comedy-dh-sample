(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const encounters = window.DANTE_ENCOUNTERS;
  if (!encounters) throw new Error("DANTE_ENCOUNTERS is unavailable");

  const realms = {
    inferno: { zh: "地狱篇", en: "INFERNO", abbr: "Inf.", verb: "下降" },
    purgatorio: { zh: "炼狱篇", en: "PURGATORIO", abbr: "Purg.", verb: "登山" },
    paradiso: { zh: "天堂篇", en: "PARADISO", abbr: "Par.", verb: "上升" }
  };

  const titles = {
    inferno: ["幽暗森林","召唤与迟疑","地狱之门","林薄与高贵城堡","风暴中的弗兰切斯卡","冷雨与恰科","财富之轮","冥河与狄斯城","复仇女神与天使","火墓中的异端者","地狱分类学","血河与半人马","自杀者之林","火雨荒原","布鲁内托","三位佛罗伦萨人","革律翁","诱骗与谄媚","买卖圣职者","占卜者","魔鬼巡逻队","恶魔内斗","伪善者的铅衣","盗贼与蛇","身份变形","尤利西斯最后航行","圭多的坏建议","制造分裂者","炼金术士","伪造者之热病","巨人之井","冰湖与叛徒","乌戈利诺","路西法与出路"],
    purgatorio: ["炼狱海岸","天使之舟与卡塞拉","曼弗雷迪与理性的边界","贝拉夸与迟延","暴死者的请求","索尔代洛与意大利","花谷中的君王","守护天使与蛇","鹰梦与七个P","骄傲者与浮雕","谦卑祷文","路面的警示图像","嫉妒者与缝合之眼","阿尔诺河谷","愤怒之烟","马可·伦巴多与自由意志","爱的秩序","爱与选择","海妖之梦","贪婪与王朝","斯塔提乌斯现身","诗人与神秘树","福雷塞","诗歌的新风格","灵魂与身体","欲望之火与诗人","火墙、利亚与拉结","地上乐园与玛泰尔达","教会凯旋寓言","维吉尔离去","忏悔与忘川","车辇与知识树","欧诺埃河与净化"],
    paradiso: ["超越人性与升天","月天与月斑","皮卡尔达","誓愿与意志","誓愿的重量","查士丁尼与帝国之鹰","十字架与救赎","金星天与差异天性","库妮扎、福尔科与喇合","日天神学家之环","方济各","多明我","所罗门与轻率判断","复活之身与火星十字","卡恰圭达与旧佛罗伦萨","祖先与城市记忆","流放预言","正义之鹰","谁能够得救","正义诸王","土星天与天梯","本笃与腐败修院","基督凯旋","信德考试","望德考试","爱德考试与亚当","伯多禄斥责教皇","天使的秩序","天使创造与堕落","光之河与白玫瑰","贝雅特丽齐离去","白玫瑰中的位置","三重圆环"]
  };

  const manuals = {
    order: {
      title: "衡量之书", short: "辨行动", school: "托马斯主义伦理传统",
      thesis: "先分清行动、目的、手段和处境，再判断责任。",
      blind: "整齐的分类可能把一个具体的人压缩成罪名或结论。",
      rules: ["先确认发生了什么，再判断它追求的善。","好意不能自动使错误手段正当。","处境限制选择，却不能替人完成选择。","同情痛苦，但不要用同情取消责任。"]
    },
    witness: {
      title: "见证之书", short: "追姓名", school: "奥尔巴赫式形象论与历史现实主义",
      thesis: "先保留姓名、关系、城市和说话方式，再接受抽象解释。",
      blind: "越动人的证词越可能使你忘记，说话者也会选择、强调和省略。",
      rules: ["人物开口以前，不要替他写完身份。","记录姓名、关系、城邦与具体语气。","保存人物的矛盾，不把尊严等同无罪。","追问证词由谁说、对谁说、为何现在说。"]
    },
    reader: {
      title: "回读之书", short: "校叙词", school: "奥古斯丁式皈依诗学",
      thesis: "不只判断人物，也检查自己为何愿意相信这种讲法。",
      blind: "把一切都读成自我成长时，别人的历史会沦为你的寓言。",
      rules: ["区分正在犯错的旅人与后来叙述的诗人。","被一句话打动时，检查它怎样安排你的注意力。","解释若不改变下一步行动，就仍未完成。","保存错误和修订，不伪装从未误读。"]
    }
  };
  const roleAlias = { wanderer: "order", order: "order", witness: "witness", reader: "reader" };

  const portraitFiles = {
    "维吉尔":"character-virgil.png","贝雅特丽齐":"character-beatrice.png","涅索斯":"character-nessus-v1.webp","皮耶尔·德拉·维涅":"character-pier-delle-vigne-v1.webp","卡帕纽斯":"character-capaneus-v1.webp","布鲁内托·拉蒂尼":"character-brunetto-v1.webp","雅科波·鲁斯蒂库奇":"character-jacopo-rusticucci-v1.webp","受骗者":"character-seduced-witness-v1.webp","教皇尼各老三世":"character-nicholas-iii-v1.webp","曼托":"character-manto-v1.webp","马拉科达":"character-malacoda-v1.webp","钱波罗":"character-ciampolo-v1.webp","卡塔拉诺":"character-catalano-v1.webp","万尼·富奇":"character-vanni-fucci-v1.webp","阿涅洛":"character-agnello-v1.webp","尤利西斯":"character-ulysses-v2.png","圭多·达·蒙特费尔特":"character-guido-montefeltro-v1.webp","贝特朗·德·博恩":"character-bertran-de-born-v1.webp","卡波基奥":"character-capocchio-v1.webp","亚当师傅":"character-master-adam-v1.webp","宁录":"character-nimrod-v1.webp","博卡·德利·阿巴蒂":"character-bocca-v1.webp","乌戈利诺":"character-ugolino-v2.png","加图":"character-cato-v1.webp","卡塞拉":"character-casella-v1.webp","曼弗雷迪":"character-manfred-v1.webp","贝拉夸":"character-belacqua-v1.webp","皮娅":"character-pia-v1.webp","索尔代洛":"character-sordello-v1.webp","尼诺·维斯孔蒂":"character-nino-visconti-v1.webp","守门天使":"character-gate-angel-v1.webp","石雕中的玛利亚":"character-relief-mary-v1.webp","奥德里西":"character-oderisi-v1.webp","谦卑天使":"character-humility-angel-v1.webp","萨皮娅":"character-sapia-v1.webp","圭多·德尔·杜卡":"character-guido-del-duca-v1.webp","温柔天使":"character-meekness-angel-v1.webp","马可·伦巴多":"character-marco-lombardo-v1.webp","奔跑的怠惰者":"character-slothful-runners-v1.webp","海妖":"character-siren-v1.webp","于格·卡佩":"character-hugh-capet-v1.webp","斯塔提乌斯":"character-statius-v1.webp","福雷塞":"character-forese-v1.webp","博纳君塔":"character-bonagiunta-v1.webp","阿尔诺·达尼埃尔":"character-arnaut-daniel-v1.webp","玛泰尔达":"character-matelda-v1.webp","皮卡尔达":"character-piccarda-v2.png","查士丁尼":"character-justinian-v1.webp","卡洛·马泰洛":"character-charles-martel-v1.webp","库妮扎":"character-cunizza-v1.webp","托马斯·阿奎那":"character-aquinas-v1.webp","波拿文都拉":"character-bonaventure-v1.webp","所罗门":"character-solomon-v1.webp","卡恰圭达":"character-cacciaguida-v1.webp","正义之鹰":"character-eagle-justice-v1.webp","彼得·达米安":"character-peter-damian-v1.webp","本笃":"character-benedict-v1.webp","圣彼得":"character-saint-peter-v1.webp","圣雅各":"character-saint-james-v1.webp","圣约翰":"character-saint-john-v1.webp","圣伯尔纳":"character-saint-bernard-v1.webp"
  };

  const speakerRoles = {
    "维吉尔":"理性与诗歌的引路人","贝雅特丽齐":"启示与判断的引路人","涅索斯":"守卫血河的半人马","皮耶尔·德拉·维涅":"腓特烈二世的宫廷重臣","布鲁内托·拉蒂尼":"但丁的旧师与《宝库》作者","尤利西斯":"双角火焰中的希腊英雄","乌戈利诺":"饥饿塔的证词者","加图":"以自由之名守护炼狱海岸","卡塞拉":"但丁的歌者旧友","曼弗雷迪":"受绝罚后仍悔改的西西里国王","马可·伦巴多":"讲论自由意志与政治败坏的廷臣","斯塔提乌斯":"追随维吉尔诗歌的拉丁诗人","玛泰尔达":"地上乐园的引导者","皮卡尔达":"月天显现的修女","查士丁尼":"讲述帝国历史的皇帝","托马斯·阿奎那":"多明我会神学家","卡恰圭达":"但丁的高祖与流放预言者","正义之鹰":"由复数灵魂共同发声的正义形象","圣彼得":"检验信德的使徒","圣伯尔纳":"在白玫瑰中引向最终凝视的修士"
  };

  const arcs = [
    { start:10,end:16,numeral:"I",slug:"inferno-violence",realm:"inferno",title:"暴力的尺度",note:"从罪的分类进入血河、树林、火雨与革律翁。判断的对象从力量转向意图。" },
    { start:17,end:29,numeral:"II",slug:"inferno-fraud",realm:"inferno",title:"欺诈的语言",note:"承诺、圣职、预言、诡计与伪造不断改写事实。这里没有一句话可以只凭语气相信。" },
    { start:30,end:33,numeral:"III",slug:"inferno-ice",realm:"inferno",title:"冰中的姓名",note:"语言失效、身份被出卖，旅程在重力翻转中找到出口。" },
    { start:34,end:42,numeral:"IV",slug:"purgatorio-shore",realm:"purgatorio",title:"自由的海岸",note:"等待、传信、夜晚和山门重新训练时间。自由不再等于摆脱规则。" },
    { start:43,end:51,numeral:"V",slug:"purgatorio-terraces",realm:"purgatorio",title:"欲望的方向",note:"石雕、梦、烟与爱的分类让观看本身成为练习。" },
    { start:52,end:60,numeral:"VI",slug:"purgatorio-desire",realm:"purgatorio",title:"身体的记忆",note:"贪欲、饥饿、诗歌与火墙共同检验：改变如何进入身体。" },
    { start:61,end:66,numeral:"VII",slug:"purgatorio-eden",realm:"purgatorio",title:"乐园与告别",note:"维吉尔离去，贝雅特丽齐出现；观看者必须承认自己的偏离。" },
    { start:67,end:75,numeral:"VIII",slug:"paradiso-lower",realm:"paradiso",title:"显现与真实",note:"月斑、誓愿、帝国与差异天性迫使直觉接受检验。" },
    { start:76,end:83,numeral:"IX",slug:"paradiso-sun-mars",realm:"paradiso",title:"太阳与祖先",note:"两种修会传统彼此称颂，家族记忆最终转成作者责任。" },
    { start:84,end:95,numeral:"X",slug:"paradiso-justice",realm:"paradiso",title:"正义的复数声音",note:"鹰、天梯、三场考试与天使秩序持续追问人的判断权限。" },
    { start:96,end:99,numeral:"XI",slug:"paradiso-rose",realm:"paradiso",title:"白玫瑰",note:"引路人最后一次更替，语言在终极观看前承认边界。" }
  ];

  const quotes = [
    ["选择所关涉的，是我们力所能及的事情。","亚里士多德《尼各马可伦理学》III.3（意译）","下降越深，越要分清处境与仍然能够选择的部分。"],
    ["这部作品的意义不止一种；更确切地说，它是复义的。","传统归于但丁《致斯卡拉大亲王书》§20（意译）","同一个场景可以同时要求伦理判断、历史追索和阅读反省。"],
    ["记忆的力量是伟大的，广大而无边。","奥古斯丁《忏悔录》X.8（意译）","姓名一旦被带走，就会在后文改变另一次相遇。"],
    ["人有自由选择；否则劝告、命令、禁止、赏罚都会失去意义。","托马斯·阿奎那《神学大全》I, q.83, a.1（意译）","炼狱的规则不是地狱式的凝固，而是为了重新获得行动能力。"],
    ["我的心怎样听见爱，我便怎样把它写下。","《炼狱篇》XXIV.52–54（意译）","灵感不是免责理由；写作者仍需对词语造成的后果负责。"],
    ["你已成为自己自由、正直而健全的意志的主人。","《炼狱篇》XXVII.140（意译）","引导结束以后，真正的检验才开始。"],
    ["不要把人的判断推进得太快。","《天堂篇》XIII.130–132（意译）","当前证据可以支持行动，却不能冒充最后判决。"],
    ["你将尝到别人的面包多么咸，别人的楼梯多么难走。","《天堂篇》XVII.58–60（意译）","流放不仅是预言，也是作者位置和声音的来源。"],
    ["我的欲望和意志，已像均匀转动的轮，被爱推动。","《天堂篇》XXXIII.143–145（意译）","旅程最终留下的不是占有真理，而是被真理改变的行动方向。"]
  ];

  const threads = [
    ["inferno-13","purgatorio-25","受伤的身体仍在说话","你曾折断一根枝条才相信树中有人；如今必须解释影子为何仍能饥饿、流血和发声。"],
    ["inferno-15","paradiso-17","师长的预言成为作者责任","布鲁内托谈过你的命运；卡恰圭达现在要求你决定如何书写它。"],
    ["inferno-20","purgatorio-6","预言不能替当下行动","你曾想从倒行者口中偷听未来；现在意大利的现实要求当下责任。"],
    ["inferno-26","paradiso-2","求知需要方法和边界","尤利西斯用演说越过界柱；月斑问题要求你让实验推翻直觉。"],
    ["inferno-27","paradiso-29","权威印章不能替证词免责","预先赦免没有洗净欺诈建议；动人的讲道也不能用寓意掩盖虚假来源。"],
    ["inferno-32","purgatorio-31","求知欲也可能复制暴力","你曾为逼出姓名抓住博卡的头发；忘川之前，承认不能再靠强迫获得真相。"],
    ["inferno-33","paradiso-32","儿童不能只做难题材料","饥饿塔里的孩子曾被成人政治吞没；白玫瑰中的儿童仍要求作为具体生命被看见。"],
    ["purgatorio-2","purgatorio-27","熟悉之物也会拖延改变","卡塞拉的歌曾让你停步；如今没有命令，你必须独自迈出第一步。"],
    ["purgatorio-3","paradiso-3","强迫、制度与最后判断","曼弗雷迪的公开绝罚没有穷尽结局；皮卡尔达的满足也不能抹去她遭受的强迫。"],
    ["purgatorio-16","paradiso-4","星辰不替意志作答","马可反对把行动推给天体；月天再次要求区分外在强迫与内在同意。"],
    ["purgatorio-24","paradiso-29","语言的来源也是伦理问题","“听从爱”仍需承担作者责任；精彩故事也必须交代来源。"],
    ["purgatorio-30","paradiso-31","引路人的离去","维吉尔没有正式告别；贝雅特丽齐的离去让同一份依赖再次显形。"],
    ["paradiso-6","paradiso-18","单一符号与复数历史","罗马之鹰曾把漫长历史说成一个主语；正义之鹰如今由无数声音共同说“我”。"],
    ["paradiso-13","paradiso-19","暂缓终判不是逃避","对一株植物不可抢先断定最终果实；对未闻福音者也不可冒领永恒判席。"]
  ].map(([source,target,title,echo]) => ({ source,target,title,echo }));

  const directing = {
    "inferno-11": { ref:"Inf. XI.1–115", mechanic:"compare", arrival:"你和维吉尔离开法里纳塔的火墓，在一块刻着教皇姓名的石碑后停下。更深处的恶臭逼得你无法立刻下行。", encounter:"维吉尔利用这段停留解释地狱的次序：暴力在上，欺诈更深，背叛最接近中心。分类很清楚，你却发现放贷者的位置仍无法由这张图直接说明。", stakes:"下一段路会把分类变成真实刑罚。若不先弄清维吉尔使用的尺度，你会把地图当成答案。" },
    "inferno-12": { ref:"Inf. XII.1–139", mechanic:"sequence", arrival:"恶臭稍退，你们从崩塌的岩坡下行。弥诺陶洛斯在上方撞击碎石；维吉尔趁它狂怒失控，带你越过狭窄坡道。", encounter:"坡底是一条沸腾的血河，暴君按暴力程度浸在不同深度。巡逻的半人马先张弓阻拦；维吉尔说明你仍活着以后，首领喀戎派涅索斯护送你过河。", stakes:"你必须服从涅索斯指出的渡河位置。这里的深浅不是装饰，而是行动边界；越过它，箭会先于解释抵达。" },
    "inferno-13": { ref:"Inf. XIII.22–78", mechanic:"testimony", arrival:"渡过沸血河后，你们走进一片没有绿叶的树林。枝条扭曲，哀号从树冠间传来，却看不见说话的人。", encounter:"维吉尔要你折下一根细枝。木头立刻流血，皮耶尔·德拉·维涅的声音从伤口里责问你；你直到造成伤害，才相信树中困着灵魂。", stakes:"伤口正在滴血。你必须先决定如何停止并补救自己的求证，再谈他的宫廷故事。" },
    "inferno-14": { ref:"Inf. XIV.13–72", mechanic:"restraint", arrival:"树林在身后合拢，地面变成灼热沙地。大片火焰像雪一样缓慢落下：有人仰卧，有人蜷坐，也有人被迫不停奔跑。", encounter:"卡帕纽斯仰面躺着，仍向朱庇特叫嚣。维吉尔指出，外在火雨没有使他屈服；真正持续惩罚他的，是一刻也不肯放下的愤怒。", stakes:"他的挑衅不要求你获胜。你要做的是守住石堤与行路节奏，不让另一个人的怒火决定自己的动作。" },
    "inferno-15": { ref:"Inf. XV.22–99", mechanic:"identity", arrival:"火雨落在灼热沙地上。你和维吉尔只能沿着石堤前进，免得脚底被烧伤；一队灵魂贴着堤岸不停奔跑。", encounter:"其中一人抓住你的衣角。你从被火灼伤的面孔里认出旧师布鲁内托。他不能停步，只能边跑边问佛罗伦萨与学生的未来。", stakes:"师生之情、预言和刑罚同时存在。你的回答既不能让他停下受罚，也不能把敬爱伪装成无条件赞同。" },
    "inferno-16": { ref:"Inf. XVI.1–90", mechanic:"identity", arrival:"布鲁内托重新追上队伍后，瀑布声从悬崖下方传来。又有三名灵魂离开奔跑的行列，围成不断转动的圆圈，才能在不停步的同时与你交谈。", encounter:"他们是三位受尊敬的佛罗伦萨旧公民。雅科波·鲁斯蒂库奇替三人发问：骤来的财富和新贵是否已经毁掉故乡仍值得眷恋的礼节与勇气？", stakes:"你面对的不是抽象乡愁。三人等待一个活着的同乡说明城市现状，而你的回答会把私人记忆写成政治证词。" },
    "inferno-17": { ref:"Inf. XVII.1–27, 79–136", mechanic:"restraint", arrival:"谈话结束，维吉尔走到悬崖边，把你腰间的绳索抛进深渊。一只怪物随即像潜水者般浮上来：人脸温和，躯干布满花纹，蝎尾藏在身后。", encounter:"它是革律翁，欺诈的形象。维吉尔先与它交涉，再让你坐到前面，由他在后方护住你，也挡住那条尾巴；除此以外，没有通向恶沟的道路。", stakes:"外表可信与实际安全在这里分开。你必须登上危险本身，却可以决定怎样检查、怎样坐稳，以及把身体交给谁保护。" },
    "inferno-26": { ref:"Inf. XXVI.85–142", mechanic:"testimony", arrival:"盗贼沟的蛇影退去后，你们登上下一座石桥。沟底没有人形，只有一簇簇火焰移动；每一簇都把说话者藏在里面。", encounter:"维吉尔替你叫住一团双角火焰。较大的火舌发出尤利西斯的声音，讲述他如何用一篇演说带同伴越过赫拉克勒斯的界柱。", stakes:"他的求知语言令人振奋，结局却是全船沉没。你必须分开演说的力量、同伴的同意和领导者的责任。" },
    "inferno-34": { ref:"Inf. XXXIV.70–139", mechanic:"sequence", arrival:"越过冰湖中心的路西法以后，维吉尔抱住它腰间的毛，开始向下攀爬。到某一点，他忽然转身，仿佛又在向上。", encounter:"你以为他走错了方向。维吉尔让你回看路西法倒悬的双腿：你们已经越过地心，重力的方向在脚下翻转。", stakes:"出口不是新的门，而是对方位的重新理解。若仍用刚才的上下判断道路，你会永远绕回中心。" },
    "purgatorio-1": { ref:"Purg. I.1–108", mechanic:"identity", arrival:"你们从地底狭道重新看见星辰，来到南半球黎明前的海岸。地狱的烟尘仍留在你的脸上，芦苇和海水却第一次可以被风吹动。", encounter:"一位白发老人持剑拦住你们。他是加图：历史上死于自尽，却在诗中守护通向自由的山。维吉尔说明你仍活着，并受天上托付。", stakes:"在开始登山前，你必须接受清洗和束芦的命令，也必须承认眼前守门人的身份本身就是一道解释难题。" },
    "purgatorio-9": { ref:"Purg. IX.76–145", mechanic:"sequence", arrival:"你在山腰睡着，梦见鹰把你带入火中。醒来时，维吉尔说露琪亚已把你送到炼狱门前。", encounter:"守门天使坐在三级台阶上，用剑尖在你额头刻下七个P，又以银钥匙判断、金钥匙开启。门轴发出沉重声响。", stakes:"你必须记住进入次序和门后的警告；这里的规则不是为了把人固定在罪里，而是让每一个P能够被逐层除去。" },
    "purgatorio-16": { ref:"Purg. XVI.52–114", mechanic:"blindspot", arrival:"愤怒者的浓烟遮住日光，你无法再靠眼睛辨路。维吉尔让你把手搭在他肩上；黑暗里，一个声音听出你仍在呼吸。", encounter:"马可·伦巴多拒绝把人间败坏推给星辰。他承认天体会影响欲望，却坚持理性和自由意志仍能在制度与习惯之间作出选择。", stakes:"这场谈话会检验你的手册是否把处境解释成借口，或把自由说成不受历史影响的空话。" },
    "purgatorio-27": { ref:"Purg. XXVII.7–142", mechanic:"restraint", arrival:"最后一道火墙横在地上乐园之前。你已经在地狱见过永罚之火，却仍无法让活人的身体主动走进去。", encounter:"维吉尔以贝雅特丽齐的名字劝你，斯塔提乌斯先踏入火中。穿过之后，维吉尔宣布你的意志已经自由、正直、健全，不再需要他替你作每一个判断。", stakes:"这一次没有知识谜题。你要决定是否让身体完成理性已经承认的那一步。" },
    "purgatorio-30": { ref:"Purg. XXX.22–81", mechanic:"blindspot", arrival:"教会凯旋的队列停在忘川河畔，花雨从空中落下。你凭旧诗的回声转身寻找维吉尔，却发现身边已经空了。", encounter:"贝雅特丽齐站在车辇上直呼你的名字。她没有先安慰你，而是要求你说明：在她死后，你为何偏离曾经指向善的道路。", stakes:"旧引路人已经离去，新引路人拒绝替你回答。你必须在哀痛、羞愧和自我辩护之间说出可以被检验的承认。" },
    "paradiso-2": { ref:"Par. II.49–148", mechanic:"sequence", arrival:"进入月天以后，你把月面的明暗归因于物质疏密。贝雅特丽齐没有立刻纠正，而是让你先说完整。", encounter:"她用三个镜面和一盏灯安排思想实验：若亮暗只由远近或厚薄造成，镜中的反光应呈现另一种结果。你的直觉与实验冲突。", stakes:"这里的前进依赖修订，而不是固守聪明的第一答案。你要决定是否允许可重复的检验改写解释。" },
    "paradiso-6": { ref:"Par. VI.1–111", mechanic:"sequence", arrival:"水星天的光芒靠近，查士丁尼报出姓名。整整一歌只有他的声音：个人生平很快让位给罗马之鹰的漫长历史。", encounter:"他把共和国、帝国、基督受难与当代党争编进同一条叙述。鹰仿佛成为跨越数百年的单一行动者。", stakes:"你必须判断这条宏大历史线索解释了什么，又把哪些具体行动者藏进了一个符号。" },
    "paradiso-13": { ref:"Par. XIII.94–142", mechanic:"restraint", arrival:"两圈智慧之光结束舞蹈后，托马斯·阿奎那主动纠正你可能形成的结论：所罗门的智慧并不等于在所有意义上超越一切受造者。", encounter:"他随后告诫，不要因一株植物眼下的样子便断定最终果实；仓促判断会让肯定与否定都偏离事实。", stakes:"这一次，克制本身就是行动。你要在证据尚未完成时拒绝占据终审位置。" },
    "paradiso-17": { ref:"Par. XVII.46–142", mechanic:"testimony", arrival:"在火星天的十字光中，卡恰圭达已经讲完家族与旧佛罗伦萨。你终于问出一路上不断被暗示的问题：流放会怎样发生？", encounter:"高祖预言你将离开所爱之物，尝到别人面包的咸味，也要攀登别人的楼梯。他同时命令你把沿途所见如实写出，即使真话会得罪人。", stakes:"预言把受难者与未来作者放在同一位置。你要决定如何保存证词，而不把个人创伤变成自我神化的凭据。" },
    "paradiso-19": { ref:"Par. XIX.40–114", mechanic:"blindspot", arrival:"由许多灵魂组成的鹰以一个“我”开口。你把长期疑问交给它：一个生在印度河畔、从未听闻基督的人，为何应被排除？", encounter:"鹰没有给出可供人掌握的名单。它先指出人的视野只看见正义海洋的一小段岸线，同时仍批判自称基督徒者的恶行。", stakes:"承认知识边界不能变成拒绝判断眼前不义的借口。你必须同时守住谦卑与责任。" },
    "paradiso-24": { ref:"Par. XXIV.52–154", mechanic:"testimony", arrival:"圣彼得从凯旋的光群中靠近。贝雅特丽齐请求他检验你关于信德的理解；这不再是听别人讲述，而是一场公开问答。", encounter:"你先给出定义，再说明信仰的来源，并以使徒著作和奇迹论证。圣彼得不断追问每一层依据。", stakes:"背诵定义不足以通过检验。你必须让引用、论证与自己的承诺彼此对应。" },
    "paradiso-29": { ref:"Par. XXIX.85–126", mechanic:"testimony", arrival:"贝雅特丽齐解释天使的创造与堕落后，话锋转向人间讲坛：布道者用奇闻和寓言逗笑听众，却很少核对来源。", encounter:"她指出，听众只要笑了，兜帽便膨胀；虚假的精彩故事因此获得了近似权威的外观。", stakes:"这是对整部游戏也有效的警告。你必须决定一段动人的解释在进入档案前需要怎样标注和核验。" },
    "paradiso-31": { ref:"Par. XXXI.52–93", mechanic:"identity", arrival:"光之河显成白玫瑰。你转身准备继续询问贝雅特丽齐，却发现身边站着一位慈祥的老人。", encounter:"圣伯尔纳告诉你，贝雅特丽齐已经回到玫瑰中的座位。你循他的指引望见她，向她致谢；她遥远地微笑，然后把你交给最后一位引路人。", stakes:"第二次引路人更替不允许你假装没有失落。你必须先确认离去与接替，才能开始最后的观看。" },
    "paradiso-33": { ref:"Par. XXXIII.55–145", mechanic:"restraint", arrival:"圣伯尔纳的祈祷结束，玛利亚垂目表示允诺。你的视线进入一道越来越无法由记忆和语言保存的光。", encounter:"你先看见宇宙万物像书页般由爱装订，又看见三重圆环与其中的人形。理智试图理解两种本性如何结合，却在最后一刻被一道光完成。", stakes:"终点不是把神秘压缩成一句答案。你要决定带回什么，并承认哪些部分只能以失败的语言留下痕迹。" }
  };

  const mechanicGroups = {
    sequence: new Set(["inferno-18","inferno-25","inferno-30","inferno-34","purgatorio-9","purgatorio-12","purgatorio-29","purgatorio-32","paradiso-2","paradiso-6","paradiso-28","paradiso-30"]),
    identity: new Set(["inferno-15","inferno-19","inferno-22","inferno-31","inferno-32","purgatorio-1","purgatorio-3","purgatorio-5","purgatorio-11","purgatorio-26","paradiso-3","paradiso-10","paradiso-15","paradiso-20","paradiso-31"]),
    testimony: new Set(["inferno-13","inferno-24","inferno-26","inferno-27","inferno-33","purgatorio-6","purgatorio-16","purgatorio-21","purgatorio-24","paradiso-9","paradiso-17","paradiso-19","paradiso-24","paradiso-25","paradiso-29"]),
    restraint: new Set(["inferno-14","inferno-17","inferno-20","inferno-21","purgatorio-4","purgatorio-7","purgatorio-18","purgatorio-27","purgatorio-30","paradiso-13","paradiso-21","paradiso-23","paradiso-33"]),
    blindspot: new Set(["inferno-11","inferno-16","inferno-23","inferno-28","purgatorio-10","purgatorio-14","purgatorio-17","purgatorio-25","purgatorio-31","paradiso-4","paradiso-7","paradiso-12","paradiso-18","paradiso-26","paradiso-32"])
  };

  const breakthroughAnchors = {
    order: new Set(["inferno-13","purgatorio-3","paradiso-19"]),
    witness: new Set(["inferno-26","purgatorio-17","paradiso-29"]),
    reader: new Set(["inferno-15","purgatorio-25","paradiso-32"])
  };

  const flat = [];
  ["inferno","purgatorio","paradiso"].forEach(realm => {
    encounters[realm].forEach((entry, index) => flat.push({ ...entry, realm, canto:index + 1, id:`${realm}-${index + 1}`, global:flat.length, title:titles[realm][index] }));
  });

  const storageKey = "dante-pilgrimage-v2";
  const legacyKey = "dante-pilgrimage-v1";
  const defaults = { version:2, role:null, current:10, unlocked:10, decisions:{}, selectedEvidence:{}, visited:[], soundOn:false, revisions:2, checkpoint:10 };
  let corpus = null;
  let phase = "gate";
  let beat = 0;
  let selected = [];
  let displayedChoices = [];
  let particles = [];
  let ctx;

  function loadState() {
    try {
      const modern = JSON.parse(localStorage.getItem(storageKey) || "null");
      const legacy = JSON.parse(localStorage.getItem(legacyKey) || "null");
      const source = modern || legacy || {};
      const carried = roleAlias[localStorage.getItem("dante_manual")];
      const visited = Array.isArray(source.visited) ? source.visited.filter(id => flat.some(canto => canto.id === id)) : [];
      const highestVisited = visited.reduce((max, id) => Math.max(max, flat.findIndex(canto => canto.id === id)), 10);
      return {
        ...defaults,
        ...source,
        version: 2,
        role: roleAlias[source.role] || carried || null,
        current: Math.max(10, Math.min(Number(source.current) || 10, 99)),
        unlocked: Math.max(10, Math.min(Number(source.unlocked) || highestVisited + 1 || 10, 99)),
        decisions: source.decisions && typeof source.decisions === "object" ? source.decisions : {},
        selectedEvidence: source.selectedEvidence && typeof source.selectedEvidence === "object" ? source.selectedEvidence : {},
        visited,
        revisions: Number.isFinite(source.revisions) ? source.revisions : 2,
        checkpoint: Number.isFinite(source.checkpoint) ? source.checkpoint : 10
      };
    } catch { return { ...defaults }; }
  }

  let state = loadState();

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const current = () => flat[state.current];
  const school = () => manuals[state.role] || manuals.order;
  const currentArc = (index = state.current) => arcs.find(arc => index >= arc.start && index <= arc.end) || arcs[0];
  const sourceThread = id => threads.find(thread => thread.source === id);
  const targetThread = id => threads.find(thread => thread.target === id && state.decisions[thread.source]);
  const decisionList = () => Object.values(state.decisions).sort((a,b) => a.global - b.global);
  const roman = number => {
    const map = [[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    let result = "", value = number;
    map.forEach(([unit,glyph]) => { while (value >= unit) { result += glyph; value -= unit; } });
    return result;
  };

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      if (state.role) localStorage.setItem("dante_manual", state.role);
    } catch { /* Local previews can deny storage. */ }
  }

  function metrics() {
    let safety = 3;
    let strain = 0;
    const marks = { will:0, mercy:0, insight:0 };
    const lenses = new Set(state.role ? [state.role] : []);
    decisionList().forEach(decision => {
      lenses.add(decision.method);
      Object.keys(marks).forEach(key => { marks[key] += Number(decision.effect?.[key] || 0); });
      if (decision.aligned) safety += 1;
      else if (decision.breakthrough) safety += 0;
      else { safety -= decision.supported ? 1 : 2; strain += decision.supported ? 1 : 2; }
      if (decision.incompleteInvestigation) strain += 1;
    });
    return { safety:clamp(safety,0,5), strain:clamp(strain,0,9), marks, lenses };
  }

  function realmBreakthroughs() {
    return new Set(decisionList().filter(item => item.breakthrough).map(item => item.realm)).size;
  }

  function lineCount(canto) {
    return corpus?.cantos?.find(record => record.realm === canto.realm && record.canto === canto.canto)?.lines?.length || null;
  }

  function sourceLabel(canto) {
    const exact = directing[canto.id]?.ref;
    if (exact) return `${exact} · 场景整合／对白意译`;
    const count = lineCount(canto);
    return `${realms[canto.realm].abbr} ${roman(canto.canto)}${count ? `.1–${count}` : ""} · 据本歌事件整合，非逐字引文`;
  }

  function rolePortrait(canto) {
    const fallback = canto.realm === "inferno" ? "character-infernal-soul.png" : canto.realm === "purgatorio" ? "character-penitent.png" : "character-celestial.png";
    const fallbackRole = canto.realm === "inferno" ? "地狱中的证词者" : canto.realm === "purgatorio" ? "炼狱山上的灵魂" : "光中的讲述者";
    return [`assets/${portraitFiles[canto.speaker] || fallback}`, speakerRoles[canto.speaker] || fallbackRole];
  }

  function transitionFor(canto) {
    const direction = directing[canto.id];
    if (direction?.arrival) return direction.arrival;
    const previous = flat[canto.global - 1];
    if (!previous) return canto.scene;
    if (previous.realm !== canto.realm) {
      if (canto.realm === "purgatorio") return `你和维吉尔从地心另一侧的狭道走出，重新看见星辰。${canto.scene}`;
      return `炼狱山顶的景物退入光中，贝雅特丽齐带你离开尘世的尺度。${canto.scene}`;
    }
    const guide = canto.realm === "paradiso" ? "贝雅特丽齐" : "维吉尔";
    const variants = [
      `离开“${previous.title}”以后，你跟随${guide}继续${realms[canto.realm].verb}。${canto.scene}`,
      `“${previous.title}”留在身后，${guide}没有停步。道路把你带进“${canto.title}”：${canto.scene}`,
      `上一场相遇尚未完全沉默，你已经随${guide}抵达下一处。${canto.scene}`,
      `${guide}带你越过两歌之间没有被诗句细说的路程；当脚步重新停下，眼前是“${canto.title}”。${canto.scene}`
    ];
    return variants[canto.global % variants.length];
  }

  function encounterFor(canto) {
    const direction = directing[canto.id];
    if (direction?.encounter) return direction.encounter;
    if (canto.speaker === "石雕中的玛利亚") return `石像没有真的转身，姿态与刻痕却使古老话语仿佛在此刻重新发生：“${canto.spoken}”你听见的不是一位新证人，而是图像安排出来的在场感。`;
    const variants = [
      `${canto.speaker}先确认你确实看见了眼前景象，随后把此处最紧迫的事实说给你听：“${canto.spoken}”`,
      `你们尚未离开现场，${canto.speaker}便把注意力推向一个容易被忽略的细节：“${canto.spoken}”`,
      `${canto.speaker}没有替你总结整件事，只留下一个仍须由现场检验的判断：“${canto.spoken}”`,
      `直到${canto.speaker}开口，眼前景象才显出另一层因果：“${canto.spoken}”`,
      `${canto.speaker}把自己的位置、欲望与风险都压进一句话里：“${canto.spoken}”`,
      `道路暂时容许这次交谈。${canto.speaker}没有绕开问题：“${canto.spoken}”`
    ];
    return variants[canto.global % variants.length];
  }

  function stakesFor(canto) {
    const directed = directing[canto.id]?.stakes;
    if (directed) return directed;
    const variants = [
      `这句话与眼前景象并不自动相符。先确认它解释了什么、又遗漏了什么，再决定怎样回应${canto.speaker}。`,
      `说话者已经给出自己的解释，现场却还留着空白。下一步行动必须同时经得起两者核验。`,
      `你不能把整场相遇原封不动带走，只能带走经过核验的记录；选错依据，会让下一步行动失去支点。`,
      `眼前事实、${canto.speaker}的叙述与你携带的手册还没有重合。先让它们互相校正，再决定。`,
      `行动窗口正在缩小。你需要弄清这段话把什么说清，又把什么留在句外。`
    ];
    return variants[canto.global % variants.length];
  }

  function roleCueFor(canto) {
    const stakes = stakesFor(canto);
    const index = canto.global % 3;
    const cues = {
      order: [
        `《${school().title}》让你暂时搁置赞同与反感，先分开现场条件、人物目的与可执行的手段。`,
        `你按《${school().title}》在页上划出三栏：发生了什么，人物想得到什么，此刻还能做什么。`,
        `手册没有替你下结论，只要求先辨明行动、目的、手段与处境，免得好意遮住错误方法。`
      ],
      witness: [
        `你在《${school().title}》写下“${canto.speaker}”，再标明说话的位置与对象，不让罪类或光芒抹去说话者。`,
        `不先保存“${canto.speaker}”这个姓名或身份，后面的解释就会只剩一个方便的例子；你把它写在页首。`,
        `你把${canto.speaker}的话按原意记下，同时留出一行，准备核对是谁在此时、此地、向谁这样说。`
      ],
      reader: [
        `《${school().title}》要求你暂缓最顺手的解释，先看自己为何愿意相信或拒绝这段话。`,
        `你的第一反应已经出现。手册让你先把它记下，免得稍后的解释伪装成从未犹豫过。`,
        `你在最打动或最刺痛自己的那句话旁画了一道线：这不是答案，而是检查叙述怎样牵引你的起点。`
      ]
    };
    return `${cues[state.role]?.[index] || cues.order[index]}${stakes}`;
  }

  function storyBeats(canto) {
    const roleCue = roleCueFor(canto);
    return [
      { type:"抵达", speaker:"旁白", text:transitionFor(canto) },
      { type:"相遇", speaker:canto.speaker, text:encounterFor(canto) },
      { type:school().short, speaker:school().title, text:roleCue }
    ];
  }

  function mechanicFor(canto) {
    const directed = directing[canto.id]?.mechanic;
    const id = directed || Object.entries(mechanicGroups).find(([,set]) => set.has(canto.id))?.[0] || "compare";
    const variants = {
      sequence: { id, label:"事件复原", title:"把事情恢复到正确次序", instruction:"依次找出抵达条件、人物证词与行动风险。点错不会扣分，但本轮次序会重置。", count:3, expected:["scene","speech","risk"] },
      identity: { id, label:"身份追索", title:"先确认谁在说，再确认他身处何处", instruction:"姓名或身份必须先来自说话者留下的线索，然后再用现场限制这段证词。", count:2, expected:["speech","scene"] },
      testimony: { id, label:"证词核验", title:"让证词接受另一项事实的检验", instruction:"先保存人物原话，再选择现场条件或行动风险，确认这段话能说明什么、不能说明什么。", count:2 },
      restraint: { id, label:"行动边界", title:"选择一条此刻不能越过的边界", instruction:"不是所有信息都应立刻解释。选择一项你愿意在行动中严格遵守的限制。", count:1 },
      blindspot: { id, label:"手册盲区", title:"先让手册作答，再用外部证据检验它", instruction:"先查看手册会怎样解释此事，然后选择一项它容易忽略的现场或证词。", count:2, expected:["lens"] },
      compare: { id, label:"尺度比较", title:"选择两项能够互相限制的记录", instruction:"两项记录必须来自不同层面。单独一项也许真实，却不足以支撑行动。", count:2 }
    };
    return variants[id];
  }

  function evidenceCards(canto) {
    const echo = targetThread(canto.id);
    return [
      { id:"scene", method:"order", kind:"现场条件", title:"身体与道路", body:canto.scene, feedback:"这条记录说明行动受到什么实际条件限制。" },
      { id:"speech", method:"witness", kind:"人物证词", title:canto.speaker, body:canto.spoken, feedback:"你保存了说话者自己的措辞；它仍需要其他证据核验。" },
      { id:"lens", method:"reader", kind:echo ? "前文回声" : "手册初判", title:echo ? echo.title : school().title, body:echo ? echo.echo : `${school().thesis} 但要留意：${school().blind}`, feedback:echo ? "前面的选择正在改变本歌的阅读条件。" : "手册已经暴露自己的第一判断，也同时暴露了一处盲点。" },
      { id:"risk", method:["order","witness","reader"][canto.global % 3], kind:"行动风险", title:"为什么必须现在决定", body:canto.question, feedback:"这条记录把问题变成眼前行动，而不是事后的抽象评论。" }
    ];
  }

  function orderedCards(canto, cards) {
    const roleShift = { order:0, witness:1, reader:2 }[state.role] || 0;
    const shift = (canto.global + roleShift) % cards.length;
    return [...cards.slice(shift), ...cards.slice(0, shift)];
  }

  function orderedChoices(canto) {
    const normalized = canto.choices.map((choice,index) => ({ ...choice, originalIndex:index, method:roleAlias[choice.school] || choice.school }));
    const shift = canto.global % normalized.length;
    return [...normalized.slice(shift), ...normalized.slice(0, shift)];
  }

  function missionText(stage, canto = current()) {
    if (stage === "story") return `弄清你怎样抵达、${canto.speaker}为何出现，以及眼前冲突。`;
    if (stage === "investigation") return "选取能支撑行动的证据；不同记录会打开不同做法。";
    if (stage === "decision") return "现在行动。按钮不会提前告诉你哪一本手册赞同它。";
    return "查看现场结果、解释理由与长期影响，再决定是否承担。";
  }

  function updateMission(stage = phase) {
    const labels = { story:"遭遇", investigation:"调查", decision:"行动", outcome:"后果" };
    const order = ["story","investigation","decision","outcome"];
    const index = Math.max(0, order.indexOf(stage));
    const m = metrics();
    $("#pilgrimage").dataset.phase = stage;
    $("#missionStep").textContent = `${index + 1} / 4 · ${labels[stage] || "行路"}`;
    $("#missionObjective").textContent = missionText(stage);
    $$(".mission-progress li").forEach((item,itemIndex) => {
      item.classList.toggle("is-active", itemIndex === index);
      item.classList.toggle("is-complete", itemIndex < index);
    });
    $("#safetyValue").textContent = m.safety;
    $("#strainValue").textContent = m.strain;
    $("#fractureValue").textContent = realmBreakthroughs();
    $("#revisionValue").textContent = state.revisions;
  }

  function renderGate() {
    phase = "gate";
    $("#pilgrimage").dataset.phase = "gate";
    $("#gate").hidden = false;
    $("#play").hidden = true;
    $("#ending").hidden = true;
    $("#arcSelect").hidden = true;
    closeManual();
    const carry = $("#carry");
    carry.replaceChildren();
    if (state.role) {
      const note = document.createElement("p");
      note.textContent = `你携带《${school().title}》。它会保证一种可靠的读法，也会让你对某些事实迟钝。`;
      const change = document.createElement("button");
      change.type = "button";
      change.innerHTML = `<strong>更换手册并开始新旅程</strong><small>会清除本轮选择，但不影响百歌档案。</small>`;
      change.addEventListener("click", resetForManual);
      carry.append(note, change);
    } else {
      const intro = document.createElement("p");
      intro.textContent = "选择随身手册。三条路径会发现不同证据、打开不同问题，并以不同方式陷入盲区。";
      carry.append(intro);
      Object.entries(manuals).forEach(([id,manual]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = `<strong>${manual.title} · ${manual.short}</strong><small>${manual.school}。${manual.thesis}</small>`;
        button.addEventListener("click", () => { state.role = id; save(); renderGate(); });
        carry.append(button);
      });
    }
    const resume = flat[clamp(state.current,10,99)];
    $("#realmLabel").textContent = realms[resume.realm].zh;
    $("#cantoLabel").textContent = roman(resume.canto);
    $("#progressLabel").textContent = `${resume.global + 1} / 100`;
    $("#routeFill").style.width = `${resume.global + 1}%`;
    $("#archiveLink").href = `atlas.html?v=reader3&realm=${resume.realm}&canto=${resume.canto}&return=pilgrimage.html`;
    $("#beginButton").textContent = state.visited.length ? `继续 ${realms[resume.realm].zh}第${roman(resume.canto)}歌` : "从第十一歌开始";
    $("#beginButton").disabled = !state.role;
  }

  function renderArcSelect() {
    closeManual();
    $("#arcSelect").hidden = false;
    $("#arcGrid").replaceChildren(...arcs.map(arc => {
      const button = document.createElement("button");
      const unlocked = arc.start <= state.unlocked;
      const started = state.visited.some(id => {
        const index = flat.findIndex(canto => canto.id === id);
        return index >= arc.start && index <= arc.end;
      });
      button.type = "button";
      button.className = "arc-card";
      button.disabled = !unlocked;
      button.innerHTML = `<small>${arc.numeral} · ${realms[arc.realm].en}</small><strong>${arc.title}</strong><span>${arc.note}</span><em>${unlocked ? (started ? "从此处重走；其后的记录会被改写" : "可进入") : "尚未抵达"}</em>`;
      if (unlocked) button.addEventListener("click", () => { $("#arcSelect").hidden = true; startAt(arc.start, arc.start < state.current || started); });
      return button;
    }));
  }

  function truncateFrom(index) {
    Object.keys(state.decisions).forEach(id => {
      const global = flat.findIndex(canto => canto.id === id);
      if (global >= index) delete state.decisions[id];
    });
    Object.keys(state.selectedEvidence).forEach(id => {
      const global = flat.findIndex(canto => canto.id === id);
      if (global >= index) delete state.selectedEvidence[id];
    });
    state.visited = state.visited.filter(id => flat.findIndex(canto => canto.id === id) < index);
    state.unlocked = Math.max(10,index);
  }

  function startAt(index, rewinding = false) {
    if (!state.role) return;
    const target = clamp(index,10,99);
    if (rewinding) truncateFrom(target);
    state.current = target;
    state.checkpoint = currentArc(target).start;
    state.revisions = 2;
    save();
    $("#gate").hidden = true;
    $("#ending").hidden = true;
    $("#play").hidden = false;
    audio.start();
    renderCanto();
  }

  function updateHud() {
    const canto = current();
    const realm = realms[canto.realm];
    const arc = currentArc();
    $("#pilgrimage").dataset.realm = canto.realm;
    $("#pilgrimage").dataset.arc = arc.slug;
    $("#pilgrimage").dataset.canto = `${canto.realm}-${canto.canto}`;
    $("#pilgrimage").dataset.phase = phase;
    $("#realmLabel").textContent = realm.zh;
    $("#cantoLabel").textContent = roman(canto.canto);
    $("#progressLabel").textContent = `${canto.global + 1} / 100`;
    $("#routeFill").style.width = `${canto.global + 1}%`;
    $("#arcNumber").textContent = arc.numeral;
    $("#arcRealm").textContent = realm.en;
    $("#arcTitle").textContent = `${arc.title} · ${canto.title}`;
    $("#archiveLink").href = `atlas.html?v=reader3&realm=${canto.realm}&canto=${canto.canto}&return=pilgrimage.html`;
    const [image,role] = rolePortrait(canto);
    $("#characterImage").src = image;
    $("#characterImage").alt = canto.speaker;
    $("#characterName").textContent = canto.speaker;
    $("#characterRole").textContent = role;
    $("#character").hidden = false;
    renderManual();
    updateMission(phase);
    resetParticles(canto.realm);
  }

  function renderCanto() {
    phase = "story";
    beat = 0;
    selected = [];
    displayedChoices = [];
    updateHud();
    $("#storyCard").hidden = false;
    $("#investigation").hidden = true;
    $("#decision").hidden = true;
    $("#outcome").hidden = true;
    $("#interlude").hidden = true;
    showBeat();
  }

  function showBeat() {
    const canto = current();
    const items = storyBeats(canto);
    const item = items[beat];
    $("#beatType").textContent = item.type;
    $("#speaker").textContent = item.speaker;
    $("#sourceRef").textContent = sourceLabel(canto);
    $("#storyText").textContent = item.text;
    $("#storyContinue").innerHTML = beat === items.length - 1 ? "查看现场 <kbd>Space</kbd>" : "继续 <kbd>Space</kbd>";
    $("#storyCard").classList.remove("is-entering");
    requestAnimationFrame(() => $("#storyCard").classList.add("is-entering"));
    updateMission("story");
    audio.page();
  }

  function advanceStory() {
    if (phase !== "story" || !$("#manual").hidden) return;
    const items = storyBeats(current());
    if (beat < items.length - 1) { beat += 1; showBeat(); }
    else showInvestigation();
  }

  function showInvestigation() {
    phase = "investigation";
    const canto = current();
    const mechanic = mechanicFor(canto);
    const cards = orderedCards(canto,evidenceCards(canto));
    selected = [];
    $("#storyCard").hidden = true;
    $("#decision").hidden = true;
    $("#outcome").hidden = true;
    $("#investigation").hidden = false;
    $("#mechanicLabel").textContent = mechanic.label;
    $("#investigationTitle").textContent = mechanic.title;
    $("#investigationInstruction").textContent = mechanic.instruction;
    $("#investigationFeedback").textContent = "先查看记录，再决定带哪些事实进入判断。";
    $("#evidenceBoard").replaceChildren(...cards.map(card => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "evidence-card";
      button.dataset.id = card.id;
      button.innerHTML = `<small>${card.kind}</small><strong>${card.title}</strong><span>${card.body}</span>`;
      button.addEventListener("click", () => selectEvidence(card,button,mechanic));
      return button;
    }));
    updateTask(mechanic);
    updateMission("investigation");
  }

  function resetSelection(message) {
    selected = [];
    $$(".evidence-card").forEach(button => { button.classList.remove("is-selected"); button.disabled = false; });
    $("#investigationFeedback").textContent = message;
  }

  function selectEvidence(card, button, mechanic) {
    if (button.classList.contains("is-selected")) return;
    if (mechanic.id === "sequence") {
      const expected = mechanic.expected[selected.length];
      if (card.id !== expected) { resetSelection("次序不成立：先确认你怎样抵达，再保存人物证词，最后判断行动风险。"); updateTask(mechanic); return; }
    }
    if (mechanic.id === "identity") {
      const expected = mechanic.expected[selected.length];
      if (card.id !== expected) { $("#investigationFeedback").textContent = selected.length ? "已经有了身份线索；现在把这个人放回具体现场。" : "先从说话者留下的身份线索开始。"; return; }
    }
    if (mechanic.id === "testimony") {
      if (!selected.length && card.id !== "speech") { $("#investigationFeedback").textContent = "先保存人物原话，才知道下一条证据在核验什么。"; return; }
      if (selected.length && card.id === "lens") { $("#investigationFeedback").textContent = "手册可以解释证词，却不能替现场核验它；请选择现场条件或行动风险。"; return; }
    }
    if (mechanic.id === "blindspot") {
      if (!selected.length && card.id !== "lens") { $("#investigationFeedback").textContent = "先让手册说出自己的判断，才看得见它遗漏了什么。"; return; }
      if (selected.length && card.id === "lens") return;
    }
    if (mechanic.id === "compare" && selected.length && selected[0].method === card.method) {
      $("#investigationFeedback").textContent = "这两项记录使用了同一种尺度。换一项，让证据能够互相限制。";
      return;
    }
    selected.push(card);
    button.classList.add("is-selected");
    $("#investigationFeedback").textContent = card.feedback;
    if (selected.length >= mechanic.count) $$(".evidence-card:not(.is-selected)").forEach(item => { item.disabled = true; });
    updateTask(mechanic);
    audio.page();
  }

  function updateTask(mechanic) {
    $("#taskProgress").textContent = `${selected.length} / ${mechanic.count}`;
    $("#finishInvestigation").disabled = selected.length < mechanic.count;
  }

  function availableMethods() {
    const methods = new Set([state.role]);
    selected.forEach(card => methods.add(card.method));
    return methods;
  }

  function showDecision() {
    phase = "decision";
    const canto = current();
    state.selectedEvidence[canto.id] = selected.map(card => card.id);
    save();
    $("#investigation").hidden = true;
    $("#decision").hidden = false;
    $("#decisionQuestion").textContent = canto.question;
    displayedChoices = orderedChoices(canto);
    const available = availableMethods();
    $("#choiceList").replaceChildren(...displayedChoices.map((choice,index) => {
      const button = document.createElement("button");
      const enabled = available.has(choice.method);
      button.type = "button";
      button.disabled = !enabled;
      button.innerHTML = `<b>${String.fromCharCode(65 + index)}</b><strong>${choice.text}</strong><small>${enabled ? "记录已支持这项行动" : "缺少可核验的现场记录；返回调查后才能选择"}</small>`;
      if (enabled) button.addEventListener("click", () => choose(choice));
      return button;
    }));
    updateMission("decision");
  }

  function isBreakthrough(method,canto,supported) {
    return supported && method !== state.role && breakthroughAnchors[state.role]?.has(canto.id);
  }

  function choose(choice) {
    if (phase !== "decision") return;
    const canto = current();
    const supported = availableMethods().has(choice.method);
    const breakthrough = isBreakthrough(choice.method,canto,supported);
    const aligned = choice.method === state.role;
    const thread = sourceThread(canto.id);
    state.decisions[canto.id] = {
      global:canto.global, realm:canto.realm, canto:canto.canto, index:choice.originalIndex, method:choice.method,
      text:choice.text, result:choice.result, effect:choice.effect || {}, supported, aligned, breakthrough,
      evidence:selected.map(card => card.id), thread:thread?.title || null, speaker:canto.speaker
    };
    if (!state.visited.includes(canto.id)) state.visited.push(canto.id);
    state.unlocked = Math.max(state.unlocked, Math.min(99,canto.global + 1));
    save();
    showOutcome();
  }

  function interpretationFor(decision,canto) {
    const method = manuals[decision.method];
    if (decision.breakthrough) return `《${school().title}》在这里仍有用，却不足以独自处理眼前证据。你借用《${method.title}》的原则——${method.thesis}——并用调查记录支撑了这次越界，所以它成为一次修正，而不是任性反对。`;
    if (decision.aligned) return `这项行动落实了《${school().title}》的规则：${school().thesis} 它让你安全通过眼前冲突；代价是“${school().blind}”这一问题仍被留在页外。`;
    return `你借用了《${method.title}》：${method.thesis} 调查记录使这项行动成立，但它与原手册的判断方式发生冲突；这种冲突会累积为道路张力。`;
  }

  function legacyFor(decision,canto) {
    const thread = sourceThread(canto.id);
    const echo = targetThread(canto.id);
    if (thread) return `你折起一页，写下“${thread.title}”。抵达 ${thread.target.replace("inferno","Inf.").replace("purgatorio","Purg.").replace("paradiso","Par.")} 时，本次选择会改变那里的问题。`;
    if (echo) return `前文的“${echo.title}”已经在本歌兑现；这次回应决定那条旧记录是被修正，还是继续支配你的判断。`;
    const next = flat[canto.global + 1];
    return next ? `本次行动与所用证据已写入路书。下一歌“${next.title}”会继承当前定力与张力。` : "这是旅程最后一项正式判断，它将进入结局记录。";
  }

  function showOutcome() {
    phase = "outcome";
    const canto = current();
    const decision = state.decisions[canto.id];
    const m = metrics();
    $("#decision").hidden = true;
    $("#outcome").hidden = false;
    $("#outcomeKicker").textContent = decision.breakthrough ? "手册承认了一处盲点" : decision.aligned ? "道路保持稳定" : "两种解释发生张力";
    $("#outcomeTitle").textContent = decision.text;
    $("#outcomeScene").textContent = decision.result;
    const chips = [];
    if (decision.breakthrough) chips.push(["break","有证据的突破 · 本界裂痕成立"]);
    else if (decision.aligned) chips.push(["good","遵守手册 · 定力保持"]);
    else chips.push(["warn",`跨册行动 · 张力 ${m.strain} / 6`]);
    const markNames = { will:"行动", mercy:"见证", insight:"洞察" };
    Object.entries(decision.effect).filter(([,value]) => value).forEach(([key,value]) => chips.push(["",`${markNames[key] || key} +${value}`]));
    $("#outcomeEffects").replaceChildren(...chips.map(([className,text]) => {
      const span = document.createElement("span"); span.className = className; span.textContent = text; return span;
    }));
    $("#outcomeAnalysis").textContent = interpretationFor(decision,canto);
    $("#outcomeLegacy").textContent = legacyFor(decision,canto);
    $("#manualButtonNote").textContent = decision.text;
    $("#reviseButton").textContent = state.revisions > 0 ? `消耗一次修订（剩 ${state.revisions}）` : "本篇章弧已无修订机会";
    $("#reviseButton").disabled = state.revisions <= 0;
    $("#nextButton").textContent = m.safety <= 0 || m.strain >= 6 ? "查看滞留结果" : canto.realm === "inferno" ? "承担结果，继续下降" : canto.realm === "purgatorio" ? "承担结果，继续登山" : "承担结果，继续上升";
    renderManual();
    updateMission("outcome");
  }

  function revise() {
    if (state.revisions <= 0) return;
    const canto = current();
    state.revisions -= 1;
    delete state.decisions[canto.id];
    delete state.selectedEvidence[canto.id];
    state.visited = state.visited.filter(id => id !== canto.id);
    save();
    showInvestigation();
    renderManual();
    showToast("你撕下刚才的结论。修订不会抹去代价：本篇章弧少了一次重写机会。");
  }

  function continueJourney() {
    const m = metrics();
    if (m.safety <= 0 || m.strain >= 6) { showEnding("stranded"); return; }
    if (state.current >= 99) { showEnding("final"); return; }
    const from = current();
    const next = flat[state.current + 1];
    const arcBoundary = currentArc().end === state.current;
    const echo = targetThread(next.id);
    if (!arcBoundary && !echo) {
      phase = "passing";
      $("#pilgrimage").dataset.phase = phase;
      $("#play").classList.add("is-passing");
      showToast(`${realms[from.realm].abbr} ${roman(from.canto)} 已写入路书`);
      setTimeout(() => {
        state.current += 1;
        save();
        renderCanto();
        requestAnimationFrame(() => $("#play").classList.remove("is-passing"));
      },260);
      return;
    }
    phase = "interlude";
    $("#pilgrimage").dataset.phase = phase;
    $("#play").hidden = true;
    $("#interlude").hidden = false;
    const quote = quotes[Math.min(quotes.length - 1, arcs.indexOf(currentArc()))];
    $("#interludeRoute").textContent = `${realms[from.realm].abbr} ${roman(from.canto)} → ${realms[next.realm].abbr} ${roman(next.canto)}${arcBoundary ? " · 新篇章弧" : " · 前文回声"}`;
    $("#interludeQuote").textContent = echo ? echo.title : quote[0];
    $("#interludeSource").textContent = echo ? "— 你曾折起的那一页" : `— ${quote[1]}`;
    $("#interludeNote").textContent = echo ? echo.echo : quote[2];
    $("#interludeContinue").textContent = arcBoundary ? "进入下一段旅程" : "带着回声继续";
  }

  function finishInterlude() {
    state.current += 1;
    if (currentArc().start === state.current) {
      state.checkpoint = state.current;
      state.revisions = 2;
    }
    save();
    $("#interlude").hidden = true;
    $("#play").hidden = false;
    renderCanto();
  }

  function endingCopy(kind) {
    const m = metrics();
    const decisions = decisionList();
    const aligned = decisions.filter(item => item.aligned).length;
    const complete = decisions.filter(item => item.global >= 10).length >= 90;
    if (kind === "stranded") return {
      kicker:`滞留结局 · ${realms[current().realm].zh}`,
      title:"你仍能解释眼前，却已经无法继续行走。",
      body:`道路张力达到 ${m.strain}，定力降至 ${m.safety}。问题不在于你曾越出手册，而在于多次越界没有由足够证据支撑。你被固定在互相冲突、无法修订的判断之间。可以从本篇章弧检查点重走；更早的记录仍会保留。`
    };
    if (complete && realmBreakthroughs() === 3 && m.lenses.size === 3 && m.strain < 5) return {
      kicker:"隐藏结局 · 第四本手册", title:"最后一页没有标准答案，只有可继续核对的空白。",
      body:"你在三界各找到一处原手册无法独自解释的证据，也真正使用了另外两种方法。第四本手册保存原文、异议、行动后果和修订痕迹；它的规则，是不让任何解释免于再次接受证据。"
    };
    if (complete && aligned >= 77) return {
      kicker:"安全结局 · 正确的恶", title:"你毫发无伤地抵达，也没有真正离开手册。",
      body:`《${school().title}》为几乎每次相遇提供了可靠答案。不能被它容纳的姓名、矛盾与误读也逐渐从记录中消失。规则没有说谎；它只是把自己的遗漏写成了世界的边界。`
    };
    return {
      kicker:"开放结局 · 可修订的档案", title:"旅程结束，判断仍能被后来者检验。",
      body:"你带回姓名、行动、误读和修订痕迹。它们没有被强迫互相同意，却能让下一位读者返回原文，辨认哪些是诗句、哪些是解释、哪些是你在路上承担过的后果。"
    };
  }

  function showEnding(kind) {
    phase = "ending";
    $("#play").hidden = true;
    $("#interlude").hidden = true;
    $("#ending").hidden = false;
    const copy = endingCopy(kind);
    $("#endingKicker").textContent = copy.kicker;
    $("#endingTitle").textContent = copy.title;
    $("#endingBody").textContent = copy.body;
    $("#endingRecord").replaceChildren(...decisionList().slice(-10).map(decision => {
      const span = document.createElement("span");
      span.textContent = `${realms[decision.realm].abbr} ${roman(decision.canto)} · ${decision.text}`;
      return span;
    }));
    $("#endingReplay").textContent = kind === "stranded" ? "从本篇章弧检查点重走" : "选择已抵达的篇章弧重走";
    $("#endingReplay").onclick = () => {
      $("#ending").hidden = true;
      if (kind === "stranded") startAt(state.checkpoint,true);
      else renderArcSelect();
    };
  }

  function renderManual() {
    const manual = school();
    const canto = current();
    const decision = state.decisions[canto.id];
    const m = metrics();
    $("#manualTitle").textContent = manual.title;
    $("#manualButtonTitle").textContent = manual.title;
    $("#manualSchool").textContent = manual.school;
    $("#manualThesis").textContent = manual.thesis;
    $("#manualBlind").textContent = manual.blind;
    $("#manualRules").replaceChildren(...manual.rules.map(rule => { const li = document.createElement("li"); li.textContent = rule; return li; }));
    $("#manualSourceLink").href = `atlas.html?v=reader3&realm=${canto.realm}&canto=${canto.canto}&return=pilgrimage.html`;
    $("#recordRef").textContent = sourceLabel(canto);
    $("#recordTitle").textContent = canto.title;
    const picked = new Set(state.selectedEvidence[canto.id] || []);
    $("#recordEvidence").replaceChildren(...evidenceCards(canto).filter(card => picked.has(card.id)).map(card => {
      const article = document.createElement("article");
      article.innerHTML = `<small>${card.kind}</small><strong>${card.title}</strong><p>${card.body}</p>`;
      return article;
    }));
    $("#recordVerdict").textContent = decision ? `${decision.text}。${decision.breakthrough ? "这项行动以证据修正了手册盲点。" : decision.aligned ? "这项行动遵守本册规则。" : `这项行动借用了《${manuals[decision.method].title}》。`}` : "尚未作出判断。";
    const activeThreads = threads.filter(thread => state.decisions[thread.source]);
    $("#threadList").replaceChildren(...(activeThreads.length ? activeThreads.map(thread => {
      const article = document.createElement("article");
      const reached = flat.findIndex(cantoItem => cantoItem.id === thread.target) <= state.current;
      article.className = reached ? "" : "is-future";
      article.innerHTML = `<strong>${thread.title}</strong><p>${reached ? thread.echo : "页角已经折起；抵达对应章节后，它会改变那里的问题。"}</p><small>${thread.source} → ${thread.target}</small>`;
      return article;
    }) : [Object.assign(document.createElement("p"),{ textContent:"尚无判断进入后文。" })]));
    $("#manualStats").innerHTML = `<span>定力 ${m.safety} / 5</span><span>张力 ${m.strain} / 6</span><span>裂痕 ${realmBreakthroughs()} / 3界</span><span>修订 ${state.revisions}</span><span>行动 ${m.marks.will}</span><span>见证 ${m.marks.mercy}</span><span>洞察 ${m.marks.insight}</span>`;
    renderMiniMap();
  }

  function renderMiniMap() {
    $("#miniMap").replaceChildren(...flat.slice(10).map(canto => {
      const button = document.createElement("button");
      const visited = state.visited.includes(canto.id);
      const currentCanto = canto.global === state.current;
      button.type = "button";
      button.textContent = canto.canto;
      button.title = `${realms[canto.realm].zh} ${canto.canto} · ${canto.title}`;
      button.classList.toggle("visited",visited);
      button.classList.toggle("current",currentCanto);
      button.disabled = !visited && !currentCanto;
      if (!button.disabled) button.addEventListener("click", () => {
        if (canto.global !== state.current) truncateFrom(canto.global);
        state.current = canto.global;
        save();
        closeManual();
        $("#gate").hidden = true;
        $("#ending").hidden = true;
        $("#play").hidden = false;
        renderCanto();
      });
      return button;
    }));
  }

  function resetForManual() {
    const soundOn = state.soundOn;
    state = { ...defaults, soundOn };
    try { localStorage.removeItem("dante_manual"); } catch { /* ignore */ }
    save();
    renderGate();
  }

  function openManual(tab = "record") {
    if (!state.role) return;
    $("#manual").hidden = false;
    switchTab(tab);
  }

  function closeManual() { $("#manual").hidden = true; }

  function switchTab(tab) {
    $$('[data-tab]').forEach(button => button.classList.toggle("is-active",button.dataset.tab === tab));
    $$('[data-panel]').forEach(panel => {
      const active = panel.dataset.panel === tab;
      panel.hidden = !active;
      panel.classList.toggle("is-active",active);
    });
  }

  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    $("#toast").textContent = message;
    $("#toast").hidden = false;
    toastTimer = setTimeout(() => { $("#toast").hidden = true; },2600);
  }

  class Atmosphere {
    constructor() { this.context = null; this.master = null; this.oscillators = []; }
    start() {
      if (!state.soundOn) return;
      if (this.context) { this.context.resume(); this.master.gain.setTargetAtTime(.075,this.context.currentTime,.2); return; }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.context = new AC();
      this.master = this.context.createGain();
      this.master.gain.value = .0001;
      this.master.connect(this.context.destination);
      [46.25,69.3,92.5].forEach((frequency,index) => {
        const oscillator = this.context.createOscillator();
        const gain = this.context.createGain();
        oscillator.type = index ? "sine" : "triangle";
        oscillator.frequency.value = frequency;
        gain.gain.value = [.032,.014,.008][index];
        oscillator.connect(gain).connect(this.master);
        oscillator.start();
        this.oscillators.push(oscillator);
      });
      this.master.gain.linearRampToValueAtTime(.075,this.context.currentTime + 1.2);
    }
    stop() { if (this.context) this.master.gain.setTargetAtTime(.0001,this.context.currentTime,.15); }
    page() {
      if (!this.context || !state.soundOn) return;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      const now = this.context.currentTime;
      oscillator.frequency.value = current().realm === "paradiso" ? 196 : 105;
      gain.gain.setValueAtTime(.011,now);
      gain.gain.exponentialRampToValueAtTime(.0001,now + .14);
      oscillator.connect(gain).connect(this.master);
      oscillator.start(now);
      oscillator.stop(now + .16);
    }
  }

  const audio = new Atmosphere();
  function toggleSound() {
    state.soundOn = !state.soundOn;
    save();
    if (state.soundOn) audio.start(); else audio.stop();
    updateSoundButton();
  }
  function updateSoundButton() {
    $("#soundButton").setAttribute("aria-pressed",String(state.soundOn));
    $("#soundButton span").textContent = state.soundOn ? "开启" : "关闭";
  }

  function setupAtmosphere() {
    const canvas = $("#atmosphere");
    ctx = canvas.getContext("2d");
    const resize = () => {
      const scale = Math.min(devicePixelRatio,2);
      canvas.width = innerWidth * scale;
      canvas.height = innerHeight * scale;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(scale,0,0,scale,0,0);
    };
    addEventListener("resize",resize);
    resize();
    requestAnimationFrame(drawParticles);
  }

  function resetParticles(realm) {
    const count = realm === "paradiso" ? 60 : 38;
    particles = Array.from({ length:count },() => ({ x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.5+Math.random()*1.4,v:.1+Math.random()*.32,realm }));
  }

  function drawParticles() {
    if (!ctx) return;
    ctx.clearRect(0,0,innerWidth,innerHeight);
    particles.forEach(particle => {
      particle.y -= particle.v;
      if (particle.y < -4) { particle.y = innerHeight + 4; particle.x = Math.random()*innerWidth; }
      ctx.globalAlpha = .17;
      ctx.fillStyle = particle.realm === "inferno" ? "#d9673a" : particle.realm === "purgatorio" ? "#d6c19d" : "#fff";
      ctx.beginPath();
      ctx.arc(particle.x,particle.y,particle.r,0,Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(drawParticles);
  }

  function bind() {
    $("#beginButton").addEventListener("click",() => startAt(state.current,false));
    $("#selectArcButton").addEventListener("click",renderArcSelect);
    $("#closeArcSelect").addEventListener("click",() => { $("#arcSelect").hidden = true; });
    $("#storyContinue").addEventListener("click",advanceStory);
    $("#finishInvestigation").addEventListener("click",showDecision);
    $("#reviseButton").addEventListener("click",revise);
    $("#nextButton").addEventListener("click",continueJourney);
    $("#interludeContinue").addEventListener("click",finishInterlude);
    $("#manualButton").addEventListener("click",() => $("#manual").hidden ? openManual("record") : closeManual());
    $("#mapButton").addEventListener("click",() => openManual("map"));
    $("#closeManual").addEventListener("click",closeManual);
    $("#soundButton").addEventListener("click",toggleSound);
    $("#changeManualButton").addEventListener("click",resetForManual);
    $$('[data-tab]').forEach(button => button.addEventListener("click",() => switchTab(button.dataset.tab)));
    addEventListener("keydown",event => {
      if (event.target.matches("input,select,textarea,[contenteditable=true],button,a")) return;
      if (event.key === "Tab") { event.preventDefault(); $("#manual").hidden ? openManual("record") : closeManual(); return; }
      if (event.key.toLowerCase() === "m") { event.preventDefault(); toggleSound(); return; }
      if (!$("#manual").hidden) { if (event.key === "Escape") closeManual(); return; }
      if ((event.code === "Space" || event.key === "Enter") && phase === "story") { event.preventDefault(); advanceStory(); return; }
      if (["a","b","c"].includes(event.key.toLowerCase()) && phase === "decision") {
        event.preventDefault();
        const choice = displayedChoices[event.key.toLowerCase().charCodeAt(0) - 97];
        if (choice && availableMethods().has(choice.method)) choose(choice);
      }
    });
  }

  setupAtmosphere();
  bind();
  updateSoundButton();
  renderGate();
  fetch("corpus.json",{ cache:"no-store" }).then(response => response.ok ? response.json() : null).then(data => {
    corpus = data;
    if (phase !== "gate") { updateHud(); if (phase === "story") showBeat(); }
  }).catch(() => {});
})();
