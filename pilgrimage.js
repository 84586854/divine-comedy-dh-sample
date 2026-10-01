(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const encounterSets = window.DANTE_ENCOUNTERS;
  const realms = {
    inferno: { zh: "地狱篇", en: "INFERNO", abbr: "Inf.", count: 34 },
    purgatorio: { zh: "炼狱篇", en: "PURGATORIO", abbr: "Purg.", count: 33 },
    paradiso: { zh: "天堂篇", en: "PARADISO", abbr: "Par.", count: 33 }
  };
  const titles = {
    inferno: ["幽暗森林","召唤与迟疑","地狱之门","林薄与高贵城堡","风暴中的弗兰切斯卡","冷雨与恰科","财富之轮","冥河与狄斯城","复仇女神与天使","火墓中的异端者","地狱分类学","血河与半人马","自杀者之林","火雨荒原","布鲁内托","三位佛罗伦萨人","革律翁","诱骗与谄媚","买卖圣职者","占卜者","魔鬼巡逻队","恶魔内斗","伪善者的铅衣","盗贼与蛇","身份变形","尤利西斯最后航行","圭多的坏建议","制造分裂者","炼金术士","伪造者之热病","巨人之井","冰湖与叛徒","乌戈利诺","路西法与出路"],
    purgatorio: ["炼狱海岸","天使之舟与卡塞拉","曼弗雷迪与理性的边界","贝拉夸与迟延","暴死者的请求","索尔代洛与意大利","花谷中的君王","守护天使与蛇","鹰梦与七个P","骄傲者与浮雕","谦卑祷文","路面的警示图像","嫉妒者与缝合之眼","阿尔诺河谷","愤怒之烟","马可·伦巴多与自由意志","爱的秩序","爱与选择","海妖之梦","贪婪与王朝","斯塔提乌斯现身","诗人与神秘树","福雷塞","诗歌的新风格","灵魂与身体","欲望之火与诗人","火墙、利亚与拉结","地上乐园与玛泰尔达","教会凯旋寓言","维吉尔离去","忏悔与忘川","车辇与知识树","欧诺埃河与净化"],
    paradiso: ["超越人性与升天","月天与月斑","皮卡尔达","誓愿与意志","誓愿的重量","查士丁尼与帝国之鹰","十字架与救赎","金星天与差异天性","库妮扎、福尔科与喇合","日天神学家之环","方济各","多明我","所罗门与轻率判断","复活之身与火星十字","卡恰圭达与旧佛罗伦萨","祖先与城市记忆","流放预言","正义之鹰","谁能够得救","正义诸王","土星天与天梯","本笃与腐败修院","基督凯旋","信德考试","望德考试","爱德考试与亚当","伯多禄斥责教皇","天使的秩序","天使创造与堕落","光之河与白玫瑰","贝雅特丽齐离去","白玫瑰中的位置","三重圆环"]
  };
  const manuals = {
    order: { title: "衡量之书", school: "托马斯主义伦理传统", thesis: "先分清行动、目的、手段和处境，再判断责任。", blind: "整齐的分类可能把一个具体的人压缩成罪名或结论。", rules: ["先确认发生了什么，再判断它追求的善。","好意不能自动使错误手段正当。","处境限制选择，却不能替人完成选择。","同情痛苦，但不要用同情取消责任。"] },
    witness: { title: "见证之书", school: "形象论与历史现实主义", thesis: "先保留姓名、关系、城市和说话方式，再接受抽象解释。", blind: "越动人的证词越可能使你忘记，说话者也会选择、强调和省略。", rules: ["人物开口以前，不要替他写完身份。","记录姓名、关系、城邦与具体语气。","保存人物的矛盾，不把尊严等同无罪。","追问证词由谁说、对谁说、为何现在说。"] },
    reader: { title: "回读之书", school: "奥古斯丁式皈依诗学", thesis: "不只判断人物，也检查自己为何愿意相信这种讲法。", blind: "把一切都读成自我成长时，别人的历史会沦为你的寓言。", rules: ["区分正在犯错的旅人与后来叙述的诗人。","被一句话打动时，检查它怎样安排你的注意力。","解释若不改变下一步行动，就仍未完成。","保存错误和修订，不伪装从未误读。"] }
  };
  const roleAlias = { wanderer: "order", order: "order", witness: "witness", reader: "reader" };
  const portraits = {
    "维吉尔": ["assets/character-virgil.png", "理性与诗歌的引路人"],
    "贝雅特丽齐": ["assets/character-beatrice.png", "启示与判断的引路人"],
    "尤利西斯": ["assets/character-ulysses-v2.png", "双角火焰中的希腊英雄"],
    "乌戈利诺": ["assets/character-ugolino-v2.png", "饥饿塔的幸存证词者"],
    "皮卡尔达": ["assets/character-piccarda-v2.png", "月天显现的修女"],
    "圣伯尔纳": ["assets/character-celestial.png", "最后凝视的引路人"]
  };
  const speakerRoles = {
    "涅索斯":"守卫血河的半人马","皮耶尔·德拉·维涅":"腓特烈二世的宫廷重臣","卡帕纽斯":"仍向诸神叫嚣的底比斯战士","布鲁内托·拉蒂尼":"但丁的旧师与《宝库》作者","雅科波·鲁斯蒂库奇":"佛罗伦萨旧公民","教皇尼各老三世":"倒插石孔的买卖圣职者","曼托":"与曼图亚建城叙事相关的预言者","马拉科达":"持钩恶魔的首领","钱波罗":"试图欺骗恶魔的纳瓦拉贪吏","卡塔拉诺":"身穿镀金铅衣的伪善者","万尼·富奇":"盗窃圣器的佛罗伦萨人","圭多·达·蒙特费尔特":"献出欺诈计策的退隐将领","贝特朗·德·博恩":"挑拨父子战争的诗人","亚当师傅":"水肿的伪币制造者","宁录":"语言无法互通的巨人","博卡·德利·阿巴蒂":"蒙塔佩尔蒂战役中的叛徒",
    "加图":"炼狱山海岸的守门者","卡塞拉":"但丁的歌者旧友","曼弗雷迪":"受绝罚后悔改的西西里国王","贝拉夸":"仍带着生前迟缓姿态的旧识","皮娅":"来自锡耶纳、死于马雷马的女子","索尔代洛":"因曼图亚之名拥抱维吉尔的诗人","尼诺·维斯孔蒂":"加卢拉法官与但丁旧识","守门天使":"在额上刻下七个P的守门者","奥德里西":"承认名声更替的细密画家","马可·伦巴多":"讲论自由意志与政治败坏的廷臣","斯塔提乌斯":"追随维吉尔诗歌的拉丁诗人","阿尔诺·达尼埃尔":"以奥克语告别的普罗旺斯诗人","玛泰尔达":"地上乐园的引导者",
    "卡洛·马泰洛":"讨论天性与公共职位的安茹王子","库妮扎":"在金星天回望欲望与政治的灵魂","托马斯·阿奎那":"多明我会神学家","波拿文都拉":"方济各会神学家","所罗门":"回答复活身体问题的智慧之光","卡恰圭达":"但丁的高祖与流放预言者","正义之鹰":"由复数灵魂共同发声的正义形象","彼得·达米安":"从黄金天梯降下的隐修者","本笃":"指责修院腐败的会祖","圣彼得":"检验信德并斥责腐败教皇的使徒","圣雅各":"检验希望的使徒","圣约翰":"检验爱德的使徒"
  };
  const arcs = [
    { start: 10, end: 16, numeral: "I", realm: "inferno", title: "暴力的尺度", note: "从罪的分类进入血河、树林、火雨与革律翁。判断的对象从力量转向意图。" },
    { start: 17, end: 29, numeral: "II", realm: "inferno", title: "欺诈的语言", note: "承诺、圣职、预言、诡计与伪造不断改写事实。这里没有一句话可以只凭语气相信。" },
    { start: 30, end: 33, numeral: "III", realm: "inferno", title: "冰中的姓名", note: "语言失效、身份被出卖，旅程在重力翻转中找到出口。" },
    { start: 34, end: 42, numeral: "IV", realm: "purgatorio", title: "自由的海岸", note: "等待、传信、夜晚和山门重新训练时间。自由不再等于摆脱规则。" },
    { start: 43, end: 51, numeral: "V", realm: "purgatorio", title: "欲望的方向", note: "石雕、梦、烟与爱的分类让观看本身成为练习。" },
    { start: 52, end: 60, numeral: "VI", realm: "purgatorio", title: "身体的记忆", note: "贪欲、饥饿、诗歌与火墙共同检验：改变如何进入身体。" },
    { start: 61, end: 66, numeral: "VII", realm: "purgatorio", title: "乐园与告别", note: "维吉尔离去，贝雅特丽齐出现；观看者必须承认自己的偏离。" },
    { start: 67, end: 75, numeral: "VIII", realm: "paradiso", title: "显现与真实", note: "月斑、誓愿、帝国与差异天性迫使直觉接受检验。" },
    { start: 76, end: 83, numeral: "IX", realm: "paradiso", title: "太阳与祖先", note: "两种修会传统彼此称颂，家族记忆最终转成作者责任。" },
    { start: 84, end: 95, numeral: "X", realm: "paradiso", title: "正义的复数声音", note: "鹰、天梯、三场考试与天使秩序持续追问人的判断权限。" },
    { start: 96, end: 99, numeral: "XI", realm: "paradiso", title: "白玫瑰", note: "引路人最后一次更替，语言在终极观看前承认边界。" }
  ];
  const quotes = [
    ["选择所关涉的，是我们力所能及的事情。", "亚里士多德《尼各马可伦理学》III.3（中译）", "下降越深，越要分清处境与仍然能够选择的部分。"],
    ["这部作品的意义不止一种；更确切地说，它是复义的。", "传统归于但丁《致斯卡拉大亲王书》§20（中译）", "同一个场景可以同时要求伦理判断、历史追索和阅读反省。"],
    ["记忆的力量是伟大的，广大而无边。", "奥古斯丁《忏悔录》X.8（中译）", "姓名一旦被带走，就会在后文改变另一次相遇。"],
    ["人有自由选择；否则劝告、命令、禁止、赏罚都会失去意义。", "托马斯·阿奎那《神学大全》I, q.83, a.1（意译）", "炼狱的规则不是地狱式的凝固，而是为了重新获得行动能力。"],
    ["我的心怎样听见爱，我便怎样把它写下。", "《炼狱篇》XXIV.52–54（据原文意译）", "灵感不是免责理由；写作者仍需对词语造成的后果负责。"],
    ["你已成为自己自由、正直而健全的意志的主人。", "《炼狱篇》XXVII.140（据原文意译）", "引导结束以后，真正的检验才开始。"],
    ["不要把人的判断推进得太快。", "《天堂篇》XIII.130–132（据原文意译）", "当前证据可以支持行动，却不能冒充最后判决。"],
    ["你将尝到别人的面包多么咸，别人的楼梯多么难走。", "《天堂篇》XVII.58–60（据原文意译）", "流放不仅是预言，也是作者位置和声音的来源。"],
    ["看见整体的人，不应因自己只见一寸而坐上审判席。", "《天堂篇》XIX（据正义之鹰论述意译）", "承认权限边界，不等于放弃对眼前行动的判断。"],
    ["我的欲望和意志，已像均匀转动的轮，被爱推动。", "《天堂篇》XXXIII.143–145（据原文意译）", "旅程最终留下的不是占有真理，而是被真理改变的行动方向。"]
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
    ["purgatorio-24","paradiso-29","语言的来源也是伦理问题","‘听从爱’仍需承担作者责任；精彩故事也必须交代来源。"],
    ["purgatorio-30","paradiso-31","引路人的离去","维吉尔没有正式告别；贝雅特丽齐的离去让同一份依赖再次显形。"],
    ["paradiso-6","paradiso-18","单一符号与复数历史","罗马之鹰曾把漫长历史说成一个主语；正义之鹰如今由无数声音共同说‘我’。"],
    ["paradiso-13","paradiso-19","暂缓终判不是逃避","对一株植物不可抢先断定最终果实；对未闻福音者也不可冒领永恒判席。"]
  ].map(([source,target,title,echo]) => ({ source,target,title,echo }));

  const flat = [];
  ["inferno","purgatorio","paradiso"].forEach(realm => encounterSets[realm].forEach((entry, i) => flat.push({ ...entry, realm, canto: i + 1, id: `${realm}-${i + 1}`, title: titles[realm][i], global: flat.length })));
  const storageKey = "dante-pilgrimage-v1";
  let corpus = null;
  const defaults = { role: null, current: 10, decisions: {}, selectedEvidence: {}, visited: [], soundOn: false };
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const carried = roleAlias[localStorage.getItem("dante_manual")];
      return { ...defaults, ...saved, role: saved.role || carried || null };
    } catch { return { ...defaults }; }
  }
  let state = loadState();
  let phase = "gate", beat = 0, selected = [], sequenceCursor = 0, particles = [], ctx;
  const roman = number => {
    const map = [[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    let result = "", n = number;
    map.forEach(([value, glyph]) => { while (n >= value) { result += glyph; n -= value; } });
    return result;
  };
  const current = () => flat[state.current];
  const currentArc = () => arcs.find(arc => state.current >= arc.start && state.current <= arc.end) || arcs[0];
  const school = () => manuals[state.role] || manuals.order;
  const normalizeSchool = choiceSchool => roleAlias[choiceSchool] || choiceSchool;
  function sourceLabel(canto) {
    const record = corpus?.cantos?.find(item => item.realm === canto.realm && item.canto === canto.canto);
    return `${realms[canto.realm].abbr} ${roman(canto.canto)}${record ? ` · 1–${record.lines.length}行` : ""} · 本歌戏剧化转述`;
  }
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(state)); if (state.role) localStorage.setItem("dante_manual", state.role); } catch {} };
  function decisionList() { return Object.values(state.decisions); }
  function metrics() {
    let safety = 2, strain = 0, fractures = 0;
    const lenses = new Set([state.role]);
    decisionList().forEach(decision => {
      lenses.add(decision.method);
      if (decision.method === state.role) { safety = Math.min(5, safety + 1); strain = Math.max(0, strain - 1); }
      else { fractures += 1; strain += decision.breakthrough ? 0 : 1; safety = Math.max(0, safety - (decision.breakthrough ? 0 : 1)); }
    });
    return { safety, strain, fractures, lenses };
  }
  const breakthroughAnchors = {
    order: new Set(["inferno-13","purgatorio-3","paradiso-19"]),
    witness: new Set(["inferno-26","purgatorio-17","paradiso-29"]),
    reader: new Set(["inferno-15","purgatorio-25","paradiso-32"])
  };
  function isBreakthrough(method, canto = current()) { return method !== state.role && breakthroughAnchors[state.role]?.has(canto.id); }
  function realmBreakthroughs() { return new Set(decisionList().filter(d => d.breakthrough).map(d => d.realm)).size; }
  function sourceThread(id) { return threads.find(thread => thread.source === id); }
  function targetThread(id) { return threads.find(thread => thread.target === id && state.decisions[thread.source]); }
  function mechanicFor(canto) {
    const sequence = new Set(["inferno-18","inferno-25","inferno-30","inferno-34","purgatorio-9","purgatorio-12","purgatorio-29","purgatorio-32","paradiso-6","paradiso-28","paradiso-30"]);
    const identity = new Set(["inferno-15","inferno-19","inferno-22","inferno-31","inferno-32","purgatorio-3","purgatorio-5","purgatorio-11","purgatorio-26","paradiso-3","paradiso-10","paradiso-15","paradiso-20"]);
    const testimony = new Set(["inferno-13","inferno-24","inferno-26","inferno-27","inferno-33","purgatorio-6","purgatorio-16","purgatorio-21","purgatorio-24","paradiso-9","paradiso-17","paradiso-19","paradiso-24","paradiso-25","paradiso-29"]);
    const restraint = new Set(["inferno-14","inferno-17","inferno-20","inferno-21","purgatorio-4","purgatorio-7","purgatorio-18","purgatorio-27","purgatorio-30","paradiso-13","paradiso-21","paradiso-23","paradiso-31","paradiso-33"]);
    const blindspot = new Set(["inferno-11","inferno-16","inferno-23","inferno-28","purgatorio-1","purgatorio-10","purgatorio-14","purgatorio-17","purgatorio-25","purgatorio-31","paradiso-4","paradiso-7","paradiso-12","paradiso-18","paradiso-26","paradiso-32"]);
    if (sequence.has(canto.id)) return { id: "sequence", label: "事件复原", title: "按发生顺序复原现场", instruction: "依次选择“抵达—证词—风险”。顺序错误会抹去本轮记录。", count: 3 };
    if (identity.has(canto.id)) return { id: "identity", label: "身份追索", title: "先确认是谁，再确认他身处何处", instruction: "先保留人物证词，再把它放回具体现场。", count: 2 };
    if (testimony.has(canto.id)) return { id: "testimony", label: "证词核验", title: "指出这段话需要怎样核对", instruction: "选择人物说法，再选择能够限制或补足它的现场记录。", count: 2 };
    if (restraint.has(canto.id)) return { id: "restraint", label: "观看限制", title: "留下一项暂不解释的内容", instruction: "只选择一项：你将保留它，但不急着把它写成结论。", count: 1 };
    if (blindspot.has(canto.id)) return { id: "blindspot", label: "手册盲区", title: "让规则接受一次外部证据", instruction: "选择手册批注，再选择一项不属于本册惯常视角的记录。", count: 2 };
    return { id: "compare", label: "尺度比较", title: "选择两项可以共同支持判断的记录", instruction: "你只能带两项记录进入判断；未选择的一项仍会留在原文档案里。", count: 2 };
  }
  function evidenceCards(canto) {
    const echo = targetThread(canto.id);
    return [
      { id: "scene", kind: "现场", title: "可见事实", body: canto.scene },
      { id: "speech", kind: "证词", title: canto.speaker, body: canto.spoken },
      { id: "lens", kind: echo ? "旧页回声" : "手册批注", title: echo ? echo.title : school().title, body: echo ? echo.echo : `${school().thesis} 当前问题是：${canto.question}` }
    ];
  }
  function rolePortrait(canto) {
    if (portraits[canto.speaker]) return portraits[canto.speaker];
    if (canto.realm === "inferno") return ["assets/character-infernal-soul.png", speakerRoles[canto.speaker] || "地狱中的证词者"];
    if (canto.realm === "purgatorio") return ["assets/character-penitent.png", speakerRoles[canto.speaker] || "炼狱山上的灵魂"];
    return ["assets/character-celestial.png", speakerRoles[canto.speaker] || "光中的讲述者"];
  }
  function renderGate() {
    phase = "gate"; $("#pilgrimage").dataset.phase = "gate"; $("#gate").hidden = false; $("#play").hidden = true; $("#ending").hidden = true; closeManual();
    const carry = $("#carry"); carry.replaceChildren();
    if (state.role) {
      carry.textContent = `你带着《${school().title}》抵达这里。它会继续保护你，也会继续遗漏自己无法解释的事实。`;
      const change = document.createElement("button"); change.type = "button"; change.textContent = "换一本手册，清除本轮判断"; change.addEventListener("click", resetForManual); carry.append(change);
    } else {
      const intro = document.createElement("p"); intro.textContent = "选择随身手册；这不是难度选项，而是你此后首先能看见什么。"; carry.append(intro);
      Object.entries(manuals).forEach(([id, manual]) => { const button = document.createElement("button"); button.type = "button"; button.textContent = `${manual.title} · ${manual.school}`; button.addEventListener("click", () => { state.role = id; save(); renderGate(); }); carry.append(button); });
    }
    $("#beginButton").disabled = !state.role;
  }
  function renderArcSelect() {
    closeManual(); $("#arcSelect").hidden = false;
    $("#arcGrid").replaceChildren(...arcs.map(arc => {
      const button = document.createElement("button"); button.type = "button"; button.className = "arc-card";
      const start = flat[arc.start], end = flat[arc.end];
      button.innerHTML = `<small>${arc.numeral} · ${realms[arc.realm].en}</small><strong>${arc.title}</strong><span>${arc.note}</span><em>${realms[start.realm].abbr} ${roman(start.canto)} — ${realms[end.realm].abbr} ${roman(end.canto)}</em>`;
      button.addEventListener("click", () => { $("#arcSelect").hidden = true; startAt(arc.start); }); return button;
    }));
  }
  function startAt(index) {
    if (!state.role) return;
    state.current = Math.max(10, Math.min(index, 99)); save(); $("#gate").hidden = true; $("#ending").hidden = true; $("#play").hidden = false; audio.start(); renderCanto();
  }
  function updateHud() {
    const canto = current(), realm = realms[canto.realm], arc = currentArc();
    $("#pilgrimage").dataset.realm = canto.realm; $("#pilgrimage").dataset.phase = phase;
    $("#realmLabel").textContent = realm.zh; $("#cantoLabel").textContent = roman(canto.canto); $("#progressLabel").textContent = `${canto.global + 1} / 100`; $("#routeFill").style.width = `${canto.global + 1}%`;
    $("#arcNumber").textContent = arc.numeral; $("#arcRealm").textContent = realms[arc.realm].en; $("#arcTitle").textContent = arc.title;
    $("#archiveLink").href = `atlas.html?v=reader2&realm=${canto.realm}&canto=${canto.canto}&return=pilgrimage.html`;
    const [image, role] = rolePortrait(canto); $("#characterImage").src = image; $("#characterImage").alt = canto.speaker; $("#characterName").textContent = canto.speaker; $("#characterRole").textContent = role;
    $("#character").hidden = false; renderManual(); resetParticles(canto.realm);
  }
  function renderCanto() {
    const canto = current(); phase = "story"; beat = 0; selected = []; sequenceCursor = 0; updateHud();
    $("#storyCard").hidden = false; $("#investigation").hidden = true; $("#decision").hidden = true; $("#outcome").hidden = true; $("#interlude").hidden = true; showBeat();
  }
  function storyBeats(canto) {
    return [
      { type: "抵达", speaker: "旁白", text: canto.scene },
      { type: "人物开口", speaker: canto.speaker, text: canto.spoken },
      { type: "必须判断", speaker: "旁白", text: canto.question }
    ];
  }
  function showBeat() {
    const canto = current(), item = storyBeats(canto)[beat];
    $("#beatType").textContent = item.type; $("#speaker").textContent = item.speaker; $("#sourceRef").textContent = sourceLabel(canto); $("#storyText").textContent = item.text;
    $("#storyContinue").textContent = beat === 2 ? "调查现场" : "继续"; audio.page();
  }
  function advanceStory() {
    if (phase !== "story" || !$("#manual").hidden) return;
    if (beat < 2) { beat += 1; showBeat(); } else showInvestigation();
  }
  function showInvestigation() {
    phase = "investigation"; const canto = current(), mechanic = mechanicFor(canto), cards = evidenceCards(canto);
    $("#storyCard").hidden = true; $("#investigation").hidden = false; $("#mechanicLabel").textContent = mechanic.label; $("#investigationTitle").textContent = mechanic.title; $("#investigationInstruction").textContent = mechanic.instruction; selected = []; sequenceCursor = 0;
    const order = mechanic.id === "sequence" ? [2,0,1] : [0,1,2];
    $("#evidenceBoard").replaceChildren(...order.map(index => {
      const card = cards[index], button = document.createElement("button"); button.type = "button"; button.className = "evidence-card"; button.dataset.id = card.id; button.innerHTML = `<small>${card.kind}</small><strong>${card.title}</strong><span>${card.body}</span>`; button.addEventListener("click", () => selectEvidence(card, button, mechanic)); return button;
    })); updateTask(mechanic);
  }
  function selectEvidence(card, button, mechanic) {
    if (button.classList.contains("is-selected")) return;
    if (mechanic.id === "sequence") {
      const expected = ["scene","speech","lens"][sequenceCursor];
      if (card.id !== expected) { selected = []; sequenceCursor = 0; $$(".evidence-card").forEach(item => item.classList.remove("is-selected")); showToast("顺序断裂：先从抵达现场开始复原。"); updateTask(mechanic); return; }
      sequenceCursor += 1;
    } else if (mechanic.id === "identity") {
      const expected = ["speech","scene"][selected.length]; if (card.id !== expected) { showToast(selected.length ? "姓名之后，还要把人物放回现场。" : "先从说话者留下的身份线索开始。"); return; }
    } else if (mechanic.id === "testimony") {
      if (!selected.length && card.id !== "speech") { showToast("先选人物证词，再找能够限制它的记录。"); return; }
      if (selected.length === 1 && card.id === "speech") return;
    } else if (mechanic.id === "blindspot") {
      if (!selected.length && card.id !== "lens") { showToast("先让手册说出自己的判断，再引入外部证据。"); return; }
      if (selected.length === 1 && card.id === "lens") return;
    }
    selected.push(card.id); button.classList.add("is-selected");
    if (selected.length >= mechanic.count) $$(".evidence-card:not(.is-selected)").forEach(item => item.disabled = true);
    updateTask(mechanic); audio.page();
  }
  function updateTask(mechanic) { $("#taskProgress").textContent = `${selected.length} / ${mechanic.count}`; $("#finishInvestigation").disabled = selected.length < mechanic.count; }
  function showDecision() {
    phase = "decision"; const canto = current(); state.selectedEvidence[canto.id] = [...selected]; save(); $("#investigation").hidden = true; $("#decision").hidden = false; $("#decisionQuestion").textContent = canto.question;
    $("#choiceList").replaceChildren(...canto.choices.map((choice, index) => {
      const button = document.createElement("button"); button.type = "button"; const letter = String.fromCharCode(65 + index); const method = manuals[normalizeSchool(choice.school)];
      button.innerHTML = `<b>${letter}</b><strong>${choice.text}</strong><small>${method.title}将优先保留一种事实，但结果尚未发生</small>`; button.addEventListener("click", () => choose(index)); return button;
    }));
  }
  function choose(index) {
    if (phase !== "decision") return;
    const canto = current(), choice = canto.choices[index], method = normalizeSchool(choice.school), breakthrough = isBreakthrough(method, canto), thread = sourceThread(canto.id);
    state.decisions[canto.id] = { realm: canto.realm, canto: canto.canto, index, method, text: choice.text, result: choice.result, effect: choice.effect || {}, breakthrough, thread: thread?.title || null };
    if (!state.visited.includes(canto.id)) state.visited.push(canto.id); save(); showOutcome();
  }
  function showOutcome() {
    phase = "outcome"; const canto = current(), decision = state.decisions[canto.id], choice = canto.choices[decision.index], aligned = decision.method === state.role, thread = sourceThread(canto.id), m = metrics();
    $("#decision").hidden = true; $("#outcome").hidden = false; $("#outcomeKicker").textContent = decision.breakthrough ? "手册出现裂痕" : aligned ? "行动后的现场" : "你越出了本册"; $("#outcomeTitle").textContent = choice.text; $("#outcomeScene").textContent = choice.result;
    $("#outcomeAnalysis").textContent = decision.breakthrough ? `${school().title}无法独自容纳这项证据。你没有丢弃规则，而是看见了它的适用边界。` : aligned ? `这项行动符合《${school().title}》的规则，因此方向保持稳定；但本册的盲点也会继续存在。` : `你借用了《${manuals[decision.method].title}》的视角。另一类事实进入记录，代价是原有方向感暂时下降。`;
    $("#outcomeLegacy").textContent = thread ? `你把这一页折起一角：“${thread.title}”。它会在后面的旅程中重新出现。` : `本歌留下“${choice.text}”这项记录。当前道路张力 ${m.strain} / 6，手册裂痕 ${realmBreakthroughs()} / 3界。`;
    $("#manualButtonNote").textContent = choice.text; renderManual();
  }
  function revise() { const canto = current(); delete state.decisions[canto.id]; delete state.selectedEvidence[canto.id]; save(); showInvestigation(); renderManual(); }
  function continueJourney() {
    const m = metrics();
    if (m.strain >= 6) { showEnding("stranded"); return; }
    if (state.current >= 99) { showEnding("final"); return; }
    const from = current(), next = flat[state.current + 1]; phase = "interlude"; $("#play").hidden = true; $("#interlude").hidden = false;
    const arcBoundary = currentArc().end === state.current, quote = quotes[arcs.findIndex(arc => arc.end >= state.current) % quotes.length];
    $("#interludeRoute").textContent = `${realms[from.realm].abbr} ${roman(from.canto)} → ${realms[next.realm].abbr} ${roman(next.canto)}${arcBoundary ? " · 新篇章弧" : ""}`; $("#interludeQuote").textContent = quote[0]; $("#interludeSource").textContent = `— ${quote[1]}`; $("#interludeNote").textContent = quote[2];
  }
  function finishInterlude() { state.current += 1; save(); $("#interlude").hidden = true; $("#play").hidden = false; renderCanto(); }
  function showEnding(kind) {
    phase = "ending"; $("#play").hidden = true; $("#interlude").hidden = true; $("#ending").hidden = false; const m = metrics(), breakthroughs = realmBreakthroughs(), aligned = decisionList().filter(d => d.method === state.role).length;
    let kicker, title, body;
    if (kind === "stranded") { kicker = `滞留结局 · ${realms[current().realm].zh}`; title = "道路把你的判断折回原处。"; body = `连续越出手册却没有找到足够证据，使道路张力达到 ${m.strain}。你没有被惩罚消灭，而是被固定在一套无法继续修订的解释里。选择一个篇章弧重走，可以保留更早的记录。`; }
    else if (breakthroughs === 3 && m.lenses.size === 3 && m.strain < 5) { kicker = "隐藏结局 · 第四本手册"; title = "最后一页没有规则，只有可以继续核对的空白。"; body = "你在地狱、炼狱与天堂各找到一处原手册无法独自解释的证据，也实际借用了另外两种方法。第四本手册不是新的标准答案：它保存原文、异议、后果，以及允许后来者继续修订的位置。"; }
    else if (aligned >= Math.max(75, decisionList().length * .85)) { kicker = "安全结局 · 正确的恶"; title = "你毫发无伤地抵达，也没有真正离开手册。"; body = `《${school().title}》为几乎每一次相遇提供了正确解释。不能被它容纳的声音也因此逐渐从记录里消失。规则没有说谎；它只是没有承认遗漏。`; }
    else { kicker = "开放结局 · 可修订的档案"; title = "旅程结束，判断仍然可以被后来者检验。"; body = "你带回了姓名、行动、误读和修订痕迹。它们没有被强迫互相同意，却能让下一位读者返回原文，继续追问这条道路。"; }
    $("#endingKicker").textContent = kicker; $("#endingTitle").textContent = title; $("#endingBody").textContent = body; $("#endingRecord").replaceChildren(...decisionList().slice(-10).map(d => { const span = document.createElement("span"); span.textContent = `${realms[d.realm].abbr} ${roman(d.canto)} · ${d.text}`; return span; }));
  }
  function renderManual() {
    const manual = school(), canto = current(), decision = state.decisions[canto.id], m = metrics();
    $("#manualTitle").textContent = manual.title; $("#manualButtonTitle").textContent = manual.title; $("#manualSchool").textContent = manual.school; $("#manualThesis").textContent = manual.thesis; $("#manualBlind").textContent = manual.blind; $("#manualRules").replaceChildren(...manual.rules.map(rule => { const li = document.createElement("li"); li.textContent = rule; return li; }));
    $("#manualSourceLink").href = `atlas.html?v=reader2&realm=${canto.realm}&canto=${canto.canto}&return=pilgrimage.html`;
    $("#recordRef").textContent = sourceLabel(canto); $("#recordTitle").textContent = canto.title; const cards = evidenceCards(canto), picked = state.selectedEvidence[canto.id] || [];
    $("#recordEvidence").replaceChildren(...cards.filter(card => picked.includes(card.id)).map(card => { const article = document.createElement("article"); article.innerHTML = `<small>${card.kind}</small><strong>${card.title}</strong><p>${card.body}</p>`; return article; })); $("#recordVerdict").textContent = decision ? `${decision.text}。${decision.breakthrough ? "这项判断使手册承认了一处盲点。" : decision.method === state.role ? "判断符合本册规则。" : `判断借用了《${manuals[decision.method].title}》。`}` : "尚未作出判断。";
    const activeThreads = threads.filter(thread => state.decisions[thread.source]); $("#threadList").replaceChildren(...(activeThreads.length ? activeThreads.map(thread => { const article = document.createElement("article"), reached = flat.findIndex(c => c.id === thread.target) <= state.current; article.className = reached ? "" : "is-future"; article.innerHTML = `<strong>${thread.title}</strong><p>${reached ? thread.echo : "页角已经折起，去向尚未显现。"}</p><small>${thread.source.replace("inferno","Inf.").replace("purgatorio","Purg.").replace("paradiso","Par.")} → ${thread.target.replace("inferno","Inf.").replace("purgatorio","Purg.").replace("paradiso","Par.")}</small>`; return article; }) : [Object.assign(document.createElement("p"), { textContent: "尚无判断进入后文。" })]));
    $("#manualStats").innerHTML = `<span>安全 ${m.safety} / 5</span><span>张力 ${m.strain} / 6</span><span>越界 ${m.fractures}</span><span>裂痕 ${realmBreakthroughs()} / 3界</span>`; renderMiniMap();
  }
  function renderMiniMap() { $("#miniMap").replaceChildren(...flat.slice(10).map(canto => { const button = document.createElement("button"); button.type = "button"; button.textContent = canto.canto; button.title = `${realms[canto.realm].zh} ${canto.canto} · ${canto.title}`; if (state.visited.includes(canto.id)) button.classList.add("visited"); if (canto.global === state.current) button.classList.add("current"); button.addEventListener("click", () => { state.current = canto.global; save(); closeManual(); $("#gate").hidden = true; $("#ending").hidden = true; $("#play").hidden = false; renderCanto(); }); return button; })); }
  function resetForManual() { state = { ...defaults, soundOn: state.soundOn }; try { localStorage.removeItem("dante_manual"); } catch {} save(); $("#arcSelect").hidden = true; renderGate(); }
  function openManual(tab = "rule") { if (!state.role) return; $("#manual").hidden = false; switchTab(tab); }
  function closeManual() { $("#manual").hidden = true; }
  function switchTab(tab) { $$('[data-tab]').forEach(button => button.classList.toggle("is-active", button.dataset.tab === tab)); $$('[data-panel]').forEach(panel => { const active = panel.dataset.panel === tab; panel.hidden = !active; panel.classList.toggle("is-active", active); }); }
  let toastTimer;
  function showToast(message) { clearTimeout(toastTimer); $("#toast").textContent = message; $("#toast").hidden = false; toastTimer = setTimeout(() => { $("#toast").hidden = true; }, 2400); }
  class Atmosphere {
    constructor() { this.context = null; this.master = null; }
    start() { if (!state.soundOn) return; if (this.context) { this.context.resume(); this.master.gain.setTargetAtTime(.09, this.context.currentTime, .2); return; } const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return; this.context = new AC(); this.master = this.context.createGain(); this.master.gain.value = .0001; this.master.connect(this.context.destination); const notes = current().realm === "inferno" ? [46.25,69.3] : current().realm === "purgatorio" ? [73.42,110] : [130.81,196]; notes.forEach((frequency, i) => { const oscillator = this.context.createOscillator(), gain = this.context.createGain(); oscillator.type = i ? "sine" : "triangle"; oscillator.frequency.value = frequency; gain.gain.value = i ? .022 : .038; oscillator.connect(gain).connect(this.master); oscillator.start(); }); this.master.gain.linearRampToValueAtTime(.09, this.context.currentTime + 1.2); }
    stop() { if (this.context) this.master.gain.setTargetAtTime(.0001, this.context.currentTime, .15); }
    page() { if (!this.context || !state.soundOn) return; const osc = this.context.createOscillator(), gain = this.context.createGain(), now = this.context.currentTime; osc.frequency.value = 105; gain.gain.setValueAtTime(.014, now); gain.gain.exponentialRampToValueAtTime(.0001, now + .16); osc.connect(gain).connect(this.master); osc.start(now); osc.stop(now + .18); }
  }
  const audio = new Atmosphere();
  function toggleSound() { state.soundOn = !state.soundOn; save(); if (state.soundOn) audio.start(); else audio.stop(); updateSoundButton(); }
  function updateSoundButton() { $("#soundButton").setAttribute("aria-pressed", String(state.soundOn)); $("#soundButton span").textContent = state.soundOn ? "开启" : "关闭"; }
  function setupAtmosphere() { const canvas = $("#atmosphere"); ctx = canvas.getContext("2d"); const resize = () => { const scale = Math.min(devicePixelRatio, 2); canvas.width = innerWidth * scale; canvas.height = innerHeight * scale; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; ctx.setTransform(scale,0,0,scale,0,0); }; addEventListener("resize", resize); resize(); requestAnimationFrame(drawParticles); }
  function resetParticles(realm) { const count = realm === "paradiso" ? 62 : 42; particles = Array.from({ length: count }, () => ({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, r:.5+Math.random()*1.5, v:.12+Math.random()*.35, realm })); }
  function drawParticles() { if (!ctx) return; ctx.clearRect(0,0,innerWidth,innerHeight); particles.forEach(p => { p.y -= p.v; if (p.y < -4) { p.y = innerHeight + 4; p.x = Math.random()*innerWidth; } ctx.globalAlpha = .18; ctx.fillStyle = p.realm === "inferno" ? "#d9673a" : p.realm === "purgatorio" ? "#d6c19d" : "#fff"; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }); requestAnimationFrame(drawParticles); }
  function bind() {
    $("#beginButton").addEventListener("click", () => startAt(Math.max(10, state.current || 10))); $("#selectArcButton").addEventListener("click", renderArcSelect); $("#closeArcSelect").addEventListener("click", () => { $("#arcSelect").hidden = true; }); $("#storyContinue").addEventListener("click", advanceStory); $("#finishInvestigation").addEventListener("click", showDecision); $("#reviseButton").addEventListener("click", revise); $("#nextButton").addEventListener("click", continueJourney); $("#interludeContinue").addEventListener("click", finishInterlude); $("#manualButton").addEventListener("click", () => $("#manual").hidden ? openManual("record") : closeManual()); $("#mapButton").addEventListener("click", () => openManual("map")); $("#closeManual").addEventListener("click", closeManual); $("#soundButton").addEventListener("click", toggleSound); $("#endingReplay").addEventListener("click", () => { $("#ending").hidden = true; renderArcSelect(); }); $("#changeManualButton").addEventListener("click", resetForManual); $$('[data-tab]').forEach(button => button.addEventListener("click", () => switchTab(button.dataset.tab)));
    addEventListener("keydown", event => { if (event.target.matches("input,select,textarea,[contenteditable=true]")) return; if (event.key === "Tab") { event.preventDefault(); $("#manual").hidden ? openManual("record") : closeManual(); return; } if (event.key.toLowerCase() === "m") { event.preventDefault(); toggleSound(); return; } if (!$("#manual").hidden) { if (event.key === "Escape") closeManual(); return; } if ((event.code === "Space" || event.key === "Enter") && phase === "story") { event.preventDefault(); advanceStory(); } if (["a","b","c"].includes(event.key.toLowerCase()) && phase === "decision") { event.preventDefault(); choose(event.key.toLowerCase().charCodeAt(0) - 97); } });
  }
  setupAtmosphere(); bind(); updateSoundButton(); renderGate();
  fetch("corpus.json", { cache: "no-store" }).then(response => response.ok ? response.json() : null).then(data => { corpus = data; if (phase !== "gate") { updateHud(); if (phase === "story") showBeat(); } }).catch(() => {});
})();
