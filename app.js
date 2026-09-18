const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const realmMeta = {
  inferno: { zh: "地狱篇", en: "INFERNO", color: "red" },
  purgatorio: { zh: "炼狱篇", en: "PURGATORIO", color: "gold" },
  paradiso: { zh: "天堂篇", en: "PARADISO", color: "blue" },
};

const realmScenes = {
  inferno: {
    src: "assets/inferno-manuscript.jpg",
    alt: "但丁与维吉尔俯瞰逐层下沉的地狱漏斗，中世纪手抄本风格图景",
    caption: (title) => `“${title}”：火、岩层与冻结的意志沿地狱秩序向地心收窄`,
  },
  purgatorio: {
    src: "assets/purgatorio-manuscript.jpg",
    alt: "但丁与维吉尔走向炼狱山门，七层山路穿过云海升向晨光",
    caption: (title) => `“${title}”：同一座山让欲望经由时间、身体与同行者重新定向`,
  },
  paradiso: {
    src: "assets/paradiso-manuscript.jpg",
    alt: "但丁与贝雅特丽齐仰望同心天球、白玫瑰与三重光环",
    caption: (title) => `“${title}”：天球不是旅游站点，而是观看能力逐层扩张的显现`,
  },
};

const cantoTitles = {
  inferno: [
    "幽暗森林", "召唤与迟疑", "地狱之门", "林薄与高贵城堡", "风暴中的弗兰切斯卡", "冷雨与恰科", "财富之轮", "冥河与狄斯城", "复仇女神与天使", "火墓中的异端者", "地狱分类学", "血河与半人马", "自杀者之林", "火雨荒原", "布鲁内托", "三位佛罗伦萨人", "革律翁", "恶沟：诱骗与谄媚", "买卖圣职者", "占卜者", "魔鬼巡逻队", "恶魔内斗", "伪善者的铅衣", "盗贼与蛇", "身份变形", "尤利西斯最后航行", "圭多的坏建议", "制造分裂者", "炼金术士", "伪造者之热病", "巨人之井", "冰湖与叛徒", "乌戈利诺", "路西法与出路"
  ],
  purgatorio: [
    "炼狱海岸", "天使之舟与卡塞拉", "曼弗雷迪与理性的边界", "贝拉夸与迟延", "暴死者的请求", "祈祷、索尔代洛与意大利", "花谷中的怠惰君王", "守护天使与蛇", "鹰梦与七个P", "骄傲者与浮雕", "谦卑祷文", "路面的警示图像", "嫉妒者与缝合之眼", "阿尔诺河谷", "愤怒之烟", "马可·伦巴多与自由意志", "爱的秩序", "爱与选择", "海妖之梦", "贪婪与王朝", "斯塔提乌斯现身", "诗人与神秘树", "福雷塞", "诗歌的新风格", "灵魂与身体", "欲望之火与诗人", "火墙、利亚与拉结", "地上乐园与玛泰尔达", "教会凯旋寓言", "维吉尔离去，贝雅特丽齐到来", "忏悔与忘川", "车辇与知识树", "欧诺埃河与最终净化"
  ],
  paradiso: [
    "超越人性与升天", "月天与月斑", "皮卡尔达", "誓愿与意志", "誓愿的重量与水星天", "查士丁尼与帝国之鹰", "十字架与救赎逻辑", "金星天与差异天性", "库妮扎、福尔科与喇合", "日天神学家之环", "方济各与多明我会", "多明我与方济各会", "所罗门与轻率判断", "复活之身与火星十字", "卡恰圭达与旧佛罗伦萨", "祖先与城市记忆", "流放预言", "木星天的正义之鹰", "谁能够得救", "正义诸王", "土星天与天梯", "本笃与腐败修院", "基督凯旋", "信德考试", "望德考试", "爱德考试与亚当", "伯多禄斥责教皇", "天使的秩序", "天使创造与堕落", "光之河与白玫瑰", "贝雅特丽齐离去", "白玫瑰中的位置", "圣母祷文与三重圆环"
  ],
};

const realmProtocols = {
  inferno: {
    risk: "叙事凝固",
    rule: (title) => `在“${title}”中，不要只问此人受了什么刑；先找出他如何把一次选择说成不可改变的身份。`,
    choices: [
      { key: "sympathy", title: "先相信证词", subtitle: "让人物自己的故事决定意义", error: "叙事感染", resultTitle: "你进入了证词人的语法", result: "同情让受刑者重新成为人，但第一人称证词也可能把责任转交给爱情、命运、政党或他人。请检查行动的主语。" },
      { key: "system", title: "先相信秩序", subtitle: "用罪类与刑罚解释一切", error: "结构崇拜", resultTitle: "地图变得清楚，人物却变薄了", result: "地狱的结构能解释位置，却不能自动解释每个灵魂。反讽、历史语境与诗人的判断仍会扰动整齐分类。" },
      { key: "language", title: "先检查语言", subtitle: "追踪主语、比喻与引文", error: "细读偏狭", resultTitle: "你发现了修辞机关", result: "细读能暴露自我辩护，但若脱离神学、政治与互文背景，也会把历史冲突误成纯粹措辞游戏。" },
    ],
  },
  purgatorio: {
    risk: "过早赦免",
    rule: (title) => `经过“${title}”时，不要把承认错误当作改变已经完成；请寻找欲望、身体与共同体留下的训练痕迹。`,
    choices: [
      { key: "confession", title: "承认即已改变", subtitle: "把自知当成净化的终点", error: "认知捷径", resultTitle: "你把起点误作终点", result: "炼狱承认悔意的真实，却坚持习惯仍需重新训练。知道、愿意与能够行动并不发生在同一时刻。" },
      { key: "discipline", title: "遵守训练程序", subtitle: "让阶梯与时间证明改变", error: "程序崇拜", resultTitle: "你的方法可见，但仍不完整", result: "实践是净化的证据；然而若只信程序，也会忽略恩典、代祷与共同体在诗中所起的作用。" },
      { key: "relation", title: "检查谁在帮助谁", subtitle: "从祈祷、记忆与陪伴理解改变", error: "关系浪漫化", resultTitle: "你看见了灵魂之间的通道", result: "炼狱不是孤立自救，但关系也不能代替个人意志。请同时保留互助与责任。" },
    ],
  },
  paradiso: {
    risk: "概念过曝",
    rule: (title) => `观看“${title}”时，不要把更明亮误认为更容易说明；记录你的理解如何改变，也记录语言在哪一步失效。`,
    choices: [
      { key: "doctrine", title: "先建立概念体系", subtitle: "以神学命题固定所见", error: "概念过曝", resultTitle: "你获得了秩序，也压平了经验", result: "教义概念提供精确边界，但《天堂篇》常用运动、音乐和光来显示：认识不仅是命题，也是观看能力的改变。" },
      { key: "image", title: "跟随光与图像", subtitle: "让诗性形象先行", error: "意象陶醉", resultTitle: "图像带你继续上升", result: "诗性形象保存超出概念的部分，却不能任意解释。仍需回到论证、结构与中世纪宇宙观。" },
      { key: "limit", title: "标记不可言说", subtitle: "把缺失也当作证据", error: "沉默崇拜", resultTitle: "你保留了一处必要空白", result: "承认边界不是停止理解。若把不可言说当成拒绝分析的许可，谦卑也会变成另一种逃避。" },
    ],
  },
};

const deepCases = {
  "inf-05": {
    title: "不要回答风中的名字",
    risk: "叙事感染",
    rule: "风中有人准确叫出你的名字时，不要立刻回答。先问她：是谁替你选择了这条路？",
    choices: [
      { key: "sympathy", title: "相信弗兰切斯卡", subtitle: "爱情夺走了选择能力", error: "叙事感染", resultTitle: "你把选择权交给了故事", result: "她使用“爱情”和“书”作为行动主体。你的同情是真实的，但同情还不能证明她没有选择。" },
      { key: "language", title: "检查行动主语", subtitle: "谁在句子里承担责任？", error: "修辞怀疑", resultTitle: "你发现了被隐藏的主语", result: "她的叙述把责任转交给爱情与书本。规则不要求拒绝同情，而要求在同情之前辨认选择。" },
      { key: "reader", title: "检查阅读现场", subtitle: "书如何参与了欲望？", error: "媒介决定论", resultTitle: "你把书也列为证人", result: "保罗与弗兰切斯卡把阅读当作行动的媒介，但文本没有简单宣判“书导致犯罪”；读者仍须解释读法与欲望如何相遇。" },
    ],
  },
  "pur-09": {
    title: "不要替别人擦去额上的字母",
    risk: "错误赦免",
    rule: "门扉关闭后，额上的七个字母只能在攀登中消失。若有人请求你提前擦除，不要触碰他。",
    choices: [
      { key: "confession", title: "替他擦除", subtitle: "承认本身就是净化", error: "认知捷径", resultTitle: "字母重新出现在你的额上", result: "炼狱不是口头认罪的捷径。你替他跳过过程，也把他的未完成状态转移给了自己。" },
      { key: "discipline", title: "拒绝请求", subtitle: "改变必须留下行动轨迹", error: "程序崇拜", resultTitle: "门后的阶梯变轻了一些", result: "七个P会随攀登逐层消失；但程序本身也不是魔法，它标记的是欲望被重新训练的过程。" },
      { key: "symbol", title: "质疑这条规则", subtitle: "字母是身体事实还是寓意装置？", error: "层次混淆", resultTitle: "手册出现了第一处裂缝", result: "七个P既发生在故事世界，也承担寓意功能。只把它当物理机关或只当抽象象征，都会遗失另一层。" },
    ],
  },
  "par-33": {
    title: "不要把所见之物完整说出",
    risk: "语言失效",
    rule: "当三个圆环同时成为一个形象时，请停止记录。继续描述只会制造一个看似准确的赝品。",
    choices: [
      { key: "doctrine", title: "继续记录", subtitle: "知识必须被完整保存", error: "概念过曝", resultTitle: "记录生成了一个过于清晰的图像", result: "你得到一份完整档案，却失去文本的重要信息：人的语言无法占有终极经验。" },
      { key: "limit", title: "承认边界", subtitle: "缺失也是证据的一部分", error: "沉默崇拜", resultTitle: "档案保留了一处空白", result: "沉默是认识论标记，不是放弃。诗仍用三重圆环、几何难题与被推动的意志留下可讨论的痕迹。" },
      { key: "revision", title: "改写整本手册", subtitle: "让规则承认自己的局限", error: "无限修订", resultTitle: "你抵达可修订结局", result: "规则没有被烧毁，而被降格为暂时工具。开放性不是取消判断，而是让判断保留证据、责任与修订入口。" },
    ],
  },
};

const dictionaries = [
  {
    id: "structure", title: "刑罚与结构词典", short: "空间 / 伦理", school: "ARISTOTELIAN · THOMISTIC",
    intro: "从罪的对象、意志与秩序理解三界结构。它最擅长说明“为何在这里”，最容易把人物压缩成分类标签。",
    entries: [
      ["CONTRAPASSO", "对位惩罚", "刑罚以相似或反转方式显出罪的形式；这是有力的读法，但不是但丁本人给所有刑罚贴出的统一术语。"],
      ["LIBERO ARBITRIO", "自由意志", "《神曲》伦理系统的支点。天体、环境和激情能够影响人，却不完全取消负责能力。"],
      ["INCONTINENZA", "无节制", "欲望压倒理性节制；在《地狱篇》第十一歌的分类中与暴力、欺诈相区别。"],
      ["FRODE", "欺诈", "对人与人应有信任的滥用；恶沟的复杂结构将其拆成多种社会关系。"],
      ["TRADIMENTO", "背叛", "对特殊信任纽带的破坏，位于冰封的第九圈；最深处不是烈火而是关系完全冻结。"],
      ["OMBRA", "幽灵 / 影", "死者拥有可感知形体却没有普通肉身；活着的但丁会投下影子，因此不断暴露异常身份。"],
    ],
  },
  {
    id: "desire", title: "欲望训练词典", short: "记忆 / 改变", school: "AUGUSTINIAN · MORAL PSYCHOLOGY",
    intro: "把罪与救赎看成爱欲方向的问题。它最擅长解释炼狱的变化，最容易把政治和制度问题心理化。",
    entries: [
      ["AMORE", "爱 / 欲望动力", "爱并不自动正确；问题在于它所指向的对象、强度与秩序。炼狱将错误之爱重新定向。"],
      ["ABITO", "习惯 / 德性倾向", "一次领悟不会立刻改变身体与欲望。攀登、负重、烟雾和火焰把改变写成长期训练。"],
      ["PENTIMENTO", "悔改", "不是自我描述的终点，而是转向的开始；临终悔改者仍需面对时间与关系的后果。"],
      ["GRAZIA", "恩典", "超出单靠个人努力可以取得的帮助。它不取消自由意志，而使意志能够完成自身不能独立完成的转向。"],
      ["MEMORIA", "记忆", "地狱灵魂反复讲述自己，炼狱灵魂请求被记住；忘川与欧诺埃则重组罪与善的记忆。"],
      ["PREGHIERA", "代祷", "生者的祈祷可以帮助炼狱灵魂，打破“每个人只靠自己”的封闭模型。"],
    ],
  },
  {
    id: "vision", title: "观看与神学词典", short: "光 / 语言", school: "SCHOLASTIC THEOLOGY · MYSTICISM",
    intro: "追踪天堂中的光、知识与语言边界。它最擅长辨认认识论层级，最容易把诗歌只当教义插图。",
    entries: [
      ["TRASUMANAR", "超越人性", "《天堂篇》开端的造词：经验发生了，但普通语言找不到稳定对应物。"],
      ["VISIONE", "观看", "天堂的上升表现为观看能力增强；所见并非简单换景，而是观看者自身被改变。"],
      ["PROVVIDENZA", "天意", "历史与个体差异被置于更大秩序中；人物仍会追问人类能否理解这种正义。"],
      ["GERARCHIA", "等级 / 秩序", "诸天与天使层级服务于人的理解。灵魂实际都在最高天，显现位置是教学性的调适。"],
      ["INEFFABILITÀ", "不可言说", "语言失败是被明确呈现的资料，不是空白支票；诗会用比喻记录失败的形状。"],
      ["INCARNAZIONE", "道成肉身", "无限与有限、神性与人性如何结合，是结尾“圆中人像”难题的神学核心。"],
    ],
  },
  {
    id: "rhetoric", title: "叙事政治词典", short: "证词 / 历史", school: "RHETORIC · HISTORY · RECEPTION",
    intro: "区分旅行者、诗人、人物证词与历史材料。它最擅长发现声音和权力，最容易低估文本的神学承诺。",
    entries: [
      ["DANTE-PERSONA", "人物但丁", "在1300年旅行、会恐惧会误判的角色，不等于写作时安排全诗的诗人但丁。"],
      ["ESILIO", "流放", "流放经验塑造了城市批判、归属焦虑和作者权威，但作品的意义不能只还原为个人报复。"],
      ["IMPERO / PAPATO", "帝国与教廷", "两种权威的冲突贯穿政治判断；具体人物与当时党争需要历史注释才能理解。"],
      ["ALLEGORIA", "寓意", "字面旅程可以同时承载道德与灵性意义；不同层次并非互相取消。归于但丁的《致坎格兰德书》真伪仍有争论。"],
      ["EXEMPLUM", "例证故事", "短小人物史被用来检验一般命题；人物不是只有“代表某罪”这一种功能。"],
      ["TERZA RIMA", "三韵句法", "aba bcb cdc 的连锁押韵推动叙事前进。译文很难同时保存意义、节奏与韵链。"],
      ["INTERTESTO", "互文", "维吉尔、奥维德、圣经、亚里士多德等先行文本在《神曲》中被继承、改写或竞争。"],
    ],
  },
];

const storageKey = "dante-protocol-state-v2";
let corpus = null;
let currentIndex = 0;
let activeRealmFilter = "all";
let activeDictionary = dictionaries[0].id;
let showingAllLines = false;
let state = loadState();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || { visited: [], decisions: {}, ledger: [] };
  } catch {
    return { visited: [], decisions: {}, ledger: [] };
  }
}

function saveState() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* private mode can reject storage */ }
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function formatNumber(value) { return new Intl.NumberFormat("zh-CN").format(value); }
function titleFor(canto) { return cantoTitles[canto.realm][canto.canto - 1] || `第${canto.canto}歌`; }
function protocolFor(canto) { return deepCases[canto.id] || { ...realmProtocols[canto.realm], title: titleFor(canto) }; }

function scenePosition(canto) {
  if (canto.realm === "inferno") {
    if (canto.canto <= 4) return "24% 50%";
    if (canto.canto <= 17) return "51% 50%";
    if (canto.canto <= 31) return "69% 58%";
    return "79% 76%";
  }
  if (canto.realm === "purgatorio") {
    if (canto.canto <= 9) return "50% 82%";
    if (canto.canto <= 27) return "50% 52%";
    return "50% 18%";
  }
  if (canto.canto <= 9) return "50% 78%";
  if (canto.canto <= 22) return "50% 51%";
  return "50% 20%";
}

function switchView(viewName) {
  $$(".mode-tab").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewName));
  $$('[data-view-panel]').forEach((panel) => {
    const active = panel.dataset.viewPanel === viewName;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (viewName === "archive" && corpus) runSearch();
  if (viewName === "manual") renderLedger();
}

function renderAtlas() {
  const filtered = corpus.cantos.filter((canto) => activeRealmFilter === "all" || canto.realm === activeRealmFilter);
  $("#cantoGrid").innerHTML = filtered.map((canto) => {
    const classes = ["canto-node"];
    if (state.visited.includes(canto.id)) classes.push("is-visited");
    if (canto.deepCase) classes.push("is-deep");
    if (corpus.cantos[currentIndex].id === canto.id) classes.push("is-current");
    return `<button class="${classes.join(" ")}" data-canto-id="${canto.id}" type="button" title="${escapeHtml(canto.realmZh)} 第${canto.canto}歌 · ${escapeHtml(titleFor(canto))}">${String(canto.canto).padStart(2, "0")}</button>`;
  }).join("");
  $("#progressLabel").textContent = `已访问 ${state.visited.length} / 100`;
}

function renderLineWindow(canto) {
  const lines = showingAllLines ? canto.lines : canto.lines.slice(0, 9);
  $("#showAllLines").textContent = showingAllLines ? "收起本歌" : `查看本歌全部 ${canto.lines.length} 行`;
  $("#alignmentNote").textContent = canto.alignment === "line"
    ? "意大利原文与朗费罗英译按行序对齐；译文只作为对读入口。"
    : "本歌两种底本分行数不同，英文仅按顺序近似对齐，不作为严格校勘对应。";
  $("#lineWindow").innerHTML = lines.map((line) => `
    <div class="line-row">
      <span class="line-ref">${String(line.n).padStart(3, "0")}</span>
      <p class="line-it" lang="it">${escapeHtml(line.it)}</p>
      <p class="line-en" lang="en">${escapeHtml(line.en)}</p>
    </div>`).join("");
}

function renderDecision(canto, protocol) {
  const decision = state.decisions[canto.id];
  $$(".choice-card", $("#choiceGrid")).forEach((button) => button.classList.toggle("is-selected", button.dataset.choice === decision?.choice));
  if (!decision) {
    $("#resultCard").hidden = true;
    return;
  }
  const choice = protocol.choices.find((item) => item.key === decision.choice);
  if (!choice) return;
  $("#resultTitle").textContent = choice.resultTitle;
  $("#resultText").textContent = choice.result;
  $("#resultCard").hidden = false;
}

function renderCanto(index, options = {}) {
  currentIndex = Math.max(0, Math.min(index, corpus.cantos.length - 1));
  const canto = corpus.cantos[currentIndex];
  const protocol = protocolFor(canto);
  showingAllLines = false;
  if (!state.visited.includes(canto.id)) state.visited.push(canto.id);
  saveState();

  $("#caseIndex").textContent = `${realmMeta[canto.realm].en} / CANTO ${String(canto.canto).padStart(2, "0")} · 全书节点 ${canto.global}/100`;
  $("#caseTitle").textContent = protocol.title || titleFor(canto);
  $("#caseSummary").textContent = `Longfellow目录提要：${canto.summaryEn}`;
  $("#riskLabel").textContent = protocol.risk;
  const scene = realmScenes[canto.realm];
  $("#sceneStage").className = `scene-stage realm-${canto.realm}${canto.id === "inf-05" ? " case-wind" : ""}${canto.id === "pur-09" ? " case-gate" : ""}${canto.id === "par-33" ? " case-trinity" : ""}`;
  $("#sceneImage").src = scene.src;
  $("#sceneImage").alt = scene.alt;
  $("#sceneImage").style.objectPosition = scenePosition(canto);
  $("#sceneKicker").textContent = `${realmMeta[canto.realm].en} · ANIMATED PLATE`;
  $("#sceneCaption").textContent = scene.caption(titleFor(canto));
  $("#ruleNumber").textContent = String(canto.global).padStart(3, "0");
  $("#ruleCopy").textContent = typeof protocol.rule === "function" ? protocol.rule(titleFor(canto)) : protocol.rule;
  $("#choiceGrid").innerHTML = protocol.choices.map((choice, choiceIndex) => `
    <button class="choice-card" data-choice="${choice.key}" type="button">
      <span class="choice-key">${String.fromCharCode(65 + choiceIndex)}</span>
      <strong>${escapeHtml(choice.title)}</strong><small>${escapeHtml(choice.subtitle)}</small>
    </button>`).join("");
  $("#branchCount").textContent = canto.deepCase ? "深度案例 · 三条路径" : "三条基础解释路径";
  renderDecision(canto, protocol);
  renderLineWindow(canto);
  $("#previousCanto").disabled = currentIndex === 0;
  $("#nextCanto").disabled = currentIndex === corpus.cantos.length - 1;
  renderAtlas();
  if (options.scroll) $("#casePanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function chooseBranch(choiceKey) {
  const canto = corpus.cantos[currentIndex];
  const protocol = protocolFor(canto);
  const choice = protocol.choices.find((item) => item.key === choiceKey);
  if (!choice) return;
  state.decisions[canto.id] = { choice: choice.key, at: Date.now() };
  state.ledger = state.ledger.filter((item) => item.cantoId !== canto.id);
  state.ledger.unshift({ cantoId: canto.id, canto: `${canto.realmZh} 第${canto.canto}歌`, title: titleFor(canto), error: choice.error, at: Date.now() });
  state.ledger = state.ledger.slice(0, 100);
  saveState();
  renderDecision(canto, protocol);
}

function runSearch() {
  const rawQuery = $("#corpusSearch").value.trim();
  const query = rawQuery.toLocaleLowerCase();
  const realm = $("#archiveRealm").value;
  let results = [];
  let total = 0;
  for (const canto of corpus.cantos) {
    if (realm !== "all" && canto.realm !== realm) continue;
    if (!query && canto.id !== corpus.cantos[currentIndex].id) continue;
    for (const line of canto.lines) {
      if (!query || line.it.toLocaleLowerCase().includes(query) || line.en.toLocaleLowerCase().includes(query)) {
        total += 1;
        if (results.length < 120) results.push({ canto, line });
      }
    }
  }
  $("#archiveResultCount").textContent = formatNumber(total);
  if (!results.length) {
    $("#archiveResults").innerHTML = `<div class="empty-state">没有找到“${escapeHtml(rawQuery)}”。可尝试词根或更短的人名。</div>`;
    return;
  }
  $("#archiveResults").innerHTML = results.map(({ canto, line }) => `
    <article class="archive-item">
      <span class="ref">${escapeHtml(canto.realmZh)} ${String(canto.canto).padStart(2, "0")}:${String(line.n).padStart(3, "0")}</span>
      <p lang="it">${escapeHtml(line.it)}</p>
      <p class="translation" lang="en">${escapeHtml(line.en)}</p>
      <button class="plain-button small goto-canto" data-canto-id="${canto.id}" type="button">返回此歌 →</button>
    </article>`).join("") + (total > 120 ? `<p class="search-help">另有 ${formatNumber(total - 120)} 条结果未展开，请缩小检索范围。</p>` : "");
}

function renderManual() {
  $("#manualNav").innerHTML = dictionaries.map((dictionary) => `
    <button class="manual-button ${dictionary.id === activeDictionary ? "is-active" : ""}" data-dictionary="${dictionary.id}" type="button"><strong>${dictionary.title}</strong><small>${dictionary.short}</small></button>`).join("");
  const dictionary = dictionaries.find((item) => item.id === activeDictionary);
  $("#dictionarySchool").textContent = dictionary.school;
  $("#dictionaryTitle").textContent = dictionary.title;
  $("#dictionaryIntro").textContent = dictionary.intro;
  $("#dictionaryEntries").innerHTML = dictionary.entries.map(([term, zh, definition]) => `
    <article class="dictionary-entry"><h4><span>${term}</span>${zh}</h4><p>${definition}</p></article>`).join("");
}

function renderLedger() {
  if (!state.ledger.length) {
    $("#ledgerEntries").innerHTML = '<div class="ledger-empty">尚无记录。选择任一解释路径后，偏向会出现在这里。</div>';
    return;
  }
  const counts = state.ledger.reduce((map, item) => map.set(item.error, (map.get(item.error) || 0) + 1), new Map());
  $("#ledgerEntries").innerHTML = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([error, count]) => {
    const latest = state.ledger.find((item) => item.error === error);
    return `<div class="ledger-entry"><strong>${escapeHtml(error)} × ${count}</strong><small>最近：${escapeHtml(latest.canto)} · ${escapeHtml(latest.title)}</small></div>`;
  }).join("");
}

function openCantoById(id, scroll = true) {
  const index = corpus.cantos.findIndex((canto) => canto.id === id);
  if (index < 0) return;
  switchView("journey");
  renderCanto(index, { scroll });
}

function bindEvents() {
  $("#startButton").addEventListener("click", () => $("#workspace").scrollIntoView({ behavior: "smooth" }));
  $$(".mode-tab").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$(".filter-chip").forEach((button) => button.addEventListener("click", () => {
    activeRealmFilter = button.dataset.realm;
    $$(".filter-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
    renderAtlas();
  }));
  $("#cantoGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-canto-id]");
    if (button) openCantoById(button.dataset.cantoId);
  });
  $("#choiceGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-choice]");
    if (button) chooseBranch(button.dataset.choice);
  });
  $("#previousCanto").addEventListener("click", () => renderCanto(currentIndex - 1, { scroll: true }));
  $("#nextCanto").addEventListener("click", () => renderCanto(currentIndex + 1, { scroll: true }));
  $("#showAllLines").addEventListener("click", () => { showingAllLines = !showingAllLines; renderLineWindow(corpus.cantos[currentIndex]); });
  $("#inspectLinesButton").addEventListener("click", () => { $("#corpusSearch").value = ""; switchView("archive"); $("#archiveView").scrollIntoView({ behavior: "smooth" }); });
  $("#searchButton").addEventListener("click", runSearch);
  $("#corpusSearch").addEventListener("keydown", (event) => { if (event.key === "Enter") runSearch(); });
  $("#archiveRealm").addEventListener("change", runSearch);
  $("#archiveResults").addEventListener("click", (event) => {
    const button = event.target.closest(".goto-canto");
    if (button) openCantoById(button.dataset.cantoId);
  });
  $("#manualNav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-dictionary]");
    if (!button) return;
    activeDictionary = button.dataset.dictionary;
    renderManual();
  });
  $("#clearLedger").addEventListener("click", () => { state.decisions = {}; state.ledger = []; saveState(); renderLedger(); renderCanto(currentIndex); });
  $("#aboutButton").addEventListener("click", () => {
    const open = $("#aboutButton").getAttribute("aria-expanded") === "true";
    $("#aboutButton").setAttribute("aria-expanded", String(!open));
    $("#aboutPanel").hidden = open;
  });
  $("#closeAbout").addEventListener("click", () => { $("#aboutPanel").hidden = true; $("#aboutButton").setAttribute("aria-expanded", "false"); $("#aboutButton").focus(); });
}

async function init() {
  bindEvents();
  renderManual();
  renderLedger();
  try {
    const response = await fetch("corpus.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    corpus = await response.json();
    $("#cantoCount").textContent = formatNumber(corpus.meta.cantoCount);
    $("#lineCount").textContent = formatNumber(corpus.meta.lineCount);
    $("#archiveResultCount").textContent = formatNumber(corpus.meta.lineCount);
    renderCanto(0);
    $("#loadingState").hidden = true;
    $("#caseContent").hidden = false;
  } catch (error) {
    $("#loadingState").innerHTML = `<p>档案载入失败：${escapeHtml(error.message)}。请刷新页面或检查网络连接。</p>`;
  }
}

init();
