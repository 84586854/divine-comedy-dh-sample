(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const manuals = {
    order: {
      glyph: "I",
      title: "衡量之书",
      ability: "辨行动",
      intro: "把一句话拆成行动、意图、处境与后果。它能识别漂亮理由，却常把人物压缩成一桩案件。",
      rules: [
        "先问发生了什么，再问说话者希望你怎样评价它。",
        "动机能够解释行动，但不能自动替行动免责。",
        "怜悯受苦的人，不等于取消他曾经拥有的选择。",
        "当引路人已经给出秩序，就不要再被个别声音动摇。"
      ],
      lie: 3,
      warning: "第四条的墨色比其他三条更新。也许有人不愿你继续追问。",
      tradition: "以亚里士多德—托马斯主义的行动与德性分析为主要来源：区分行为对象、目的和处境，同时承认理性工具会把不可归类的人压平。",
      preferred: "agency"
    },
    witness: {
      glyph: "II",
      title: "见证之书",
      ability: "追姓名",
      intro: "在刑罚类别之外寻找姓名、城市、亲缘与没有开口的人。它保存面孔，却可能把真诚的口吻误当成完整事实。",
      rules: [
        "先记下姓名和关系，不要急着把人归入罪类。",
        "一个人的沉默同样属于证词，不得从记录中删去。",
        "永恒处境没有抹掉尘世经历；两者必须互相照明。",
        "只要一个声音足够具体、足够痛苦，它便不会欺骗你。"
      ],
      lie: 3,
      warning: "痛苦能够证明痛苦本身，却不能证明讲述已经完整。",
      tradition: "借鉴埃里希·奥尔巴赫的形象论与历史现实主义：亡魂的终极处境完成而不抹除其尘世人格，同时警惕把鲜活人物等同于无误证人。",
      preferred: "paolo"
    },
    reader: {
      glyph: "III",
      title: "回读之书",
      ability: "校叙词",
      intro: "比较人物怎样讲述、诗人怎样编排、读者为何被打动。它能看见故事的力量，也可能把别人的生命收回你的成长寓言。",
      rules: [
        "区分正在经历事件的旅人，与后来重写事件的诗人。",
        "借来的故事和词语不是装饰；它们会改变人的行动。",
        "越动人的句子，越要检查它省略了什么主语和动词。",
        "所有矛盾最终都只是为了教育正在阅读的你。"
      ],
      lie: 3,
      warning: "如果每个人都只用来解释你自己，他们会第二次从作品中消失。",
      tradition: "借鉴奥古斯丁式阅读与约翰·弗雷切罗的皈依诗学：阅读会使欲望转向，但任何只关注读者成长的解释，也可能侵占人物自身的历史。",
      preferred: "book"
    }
  };

  const actors = {
    virgil: { name: "维吉尔", role: "引路人 · 理性仍有边界", image: "assets/character-virgil.png" },
    minos: { name: "米诺斯", role: "第二圈的审判者", image: "assets/character-minos-v1.png" },
    pairUnknown: { name: "相伴的两道灵魂", role: "身份尚未确认", image: "assets/character-francesca-paolo.png" },
    francesca: { name: "弗兰切斯卡与保罗", role: "被风卷在一起的亡魂", image: "assets/character-francesca-paolo.png" }
  };

  const evidenceCatalog = {
    confession: { type: "现场", title: "亡魂自己陈述罪过", note: "米诺斯听取口供，再以尾巴的圈数指定去处。", ref: "Inf. V.4–15" },
    livingName: { type: "行动", title: "你以活人的姓名回答", note: "你没有把通行完全交给引路人的权威。", ref: "本轮行动" },
    guideAuthority: { type: "行动", title: "维吉尔代你通行", note: "秩序保护了你，也使米诺斯没有听见你的声音。", ref: "Inf. V.21–24" },
    restlessWind: { type: "现场", title: "风不允许任何灵魂停下", note: "刑罚把失去尺度的欲望变成永不止息的运动。", ref: "Inf. V.28–45" },
    namedCrowd: { type: "现场", title: "风中仍有姓名与历史", note: "塞米拉密斯、狄多、克利奥帕特拉、海伦等人并未成为无名风景。", ref: "Inf. V.52–72" },
    doves: { type: "现场", title: "二人主动离开队伍", note: "诗歌把他们比作由欲望召唤、凭意志飞向巢穴的鸽子。", ref: "Inf. V.82–87" },
    loveGrammar: { type: "证词", title: "“爱”连续成为句子的主语", note: "弗兰切斯卡三次让“爱”承担抓住、迫使和带向死亡的动作。", ref: "Inf. V.100–107" },
    agency: { type: "追问", title: "吻仍由具体的人完成", note: "叙述最终说出：颤抖的保罗吻了她。抽象的“爱”不能完全替代行动者。", ref: "Inf. V.133–136" },
    paoloSilence: { type: "追问", title: "保罗始终没有讲述自己的版本", note: "他只哭泣。两人的共同故事由弗兰切斯卡一人组织。", ref: "Inf. V.139–140" },
    book: { type: "追问", title: "一本书参与了行动", note: "他们阅读兰斯洛特与王后接吻；文本既是镜子，也成了媒介。", ref: "Inf. V.127–138" },
    murder: { type: "追问", title: "谋杀者被指向，却没有被命名", note: "弗兰切斯卡说该隐环正等待凶手，但把死亡经过留在句外。", ref: "Inf. V.106–107" },
    readerMetaphor: { type: "阅读", title: "比喻先把两人写成一对", note: "在两人开口以前，叙述已经用归巢的鸽子组织了读者的同情。", ref: "Inf. V.82–87" },
    travelerPity: { type: "追问", title: "你的怜悯也需要被审读", note: "旅人在听完证词后昏倒；强烈反应不是解释已经完成的证明。", ref: "Inf. V.109–142" }
  };

  const state = {
    role: null,
    evidence: new Set(),
    observations: 0,
    questionsLeft: 3,
    asked: new Set(),
    queue: [],
    queueIndex: 0,
    queueDone: null,
    rapport: 0,
    crossedLens: false,
    soundOn: false,
    canto: null
  };

  const passages = {
    call: { range: [79, 87], zh: 5 },
    love: { range: [100, 108], zh: 5 },
    book: { range: [127, 138], zh: 6 },
    fall: { range: [139, 142], zh: 7 }
  };

  function setProgress(step) {
    $$("#journeyProgress li").forEach((item, index) => {
      item.classList.toggle("is-current", index === step - 1);
      item.classList.toggle("is-complete", index < step - 1);
    });
  }

  function setScene(scene) {
    $("#app").dataset.scene = scene;
  }

  function setObjective(text) {
    $("#objectiveText").textContent = text;
  }

  function setActor(side, actorKey) {
    const figure = side === "left" ? $("#actorLeft") : $("#actorRight");
    if (!actorKey) {
      figure.hidden = true;
      return;
    }
    const actor = actors[actorKey];
    const prefix = side === "left" ? "actorLeft" : "actorRight";
    $("#" + prefix + "Image").src = actor.image;
    $("#" + prefix + "Image").alt = actor.name + "的人物形象";
    $("#" + prefix + "Name").textContent = actor.name;
    $("#" + prefix + "Role").textContent = actor.role;
    figure.hidden = false;
    figure.style.animation = "none";
    requestAnimationFrame(() => { figure.style.animation = ""; });
  }

  function setActors(left, right) {
    setActor("left", left);
    setActor("right", right);
  }

  function showDialogue(line) {
    $("#dialogue").hidden = false;
    $("#investigation").hidden = true;
    $("#questionDeck").hidden = true;
    $("#verdict").hidden = true;
    $("#speakerType").textContent = line.type || "现场";
    $("#speakerName").textContent = line.speaker || "旁白";
    $("#dialogueText").textContent = line.text;
    $("#sourceBadge").hidden = !line.source;
    $("#sourceBadge").textContent = line.source || "";
    if (line.scene) setScene(line.scene);
    if (line.objective) setObjective(line.objective);
    if ("left" in line || "right" in line) setActors(line.left || null, line.right || null);
    renderActions(line.actions || []);
    $("#continueButton").hidden = Boolean(line.actions?.length);
  }

  function renderActions(actions) {
    const box = $("#dialogueActions");
    box.replaceChildren(...actions.map((action) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = "<span></span>" + (action.hint ? "<small></small>" : "");
      button.querySelector("span").textContent = action.label;
      if (action.hint) button.querySelector("small").textContent = action.hint;
      button.addEventListener("click", action.run);
      return button;
    }));
  }

  function play(lines, done) {
    state.queue = lines;
    state.queueIndex = 0;
    state.queueDone = done;
    showDialogue(state.queue[0]);
  }

  function advance() {
    if (!$("#manual").hidden || $("#continueButton").hidden || $("#dialogue").hidden) return;
    state.queueIndex += 1;
    if (state.queueIndex < state.queue.length) {
      showDialogue(state.queue[state.queueIndex]);
      audio.page();
      return;
    }
    const done = state.queueDone;
    state.queue = [];
    state.queueDone = null;
    if (done) done();
  }

  function addEvidence(id, quiet = false) {
    if (state.evidence.has(id)) return;
    state.evidence.add(id);
    renderEvidence();
    if (!quiet) {
      const item = evidenceCatalog[id];
      showToast("证据写入手册 · " + item.title);
      audio.mark();
    }
  }

  function renderEvidence() {
    $("#evidenceCount").textContent = state.evidence.size;
    const list = $("#evidenceList");
    if (!state.evidence.size) {
      const empty = document.createElement("p");
      empty.className = "evidence-empty";
      empty.textContent = "你还没有亲眼确认任何事实。手册规则不能替代现场证据。";
      list.replaceChildren(empty);
    } else {
      list.replaceChildren(...[...state.evidence].map((id) => {
        const item = evidenceCatalog[id];
        const card = document.createElement("article");
        card.className = "evidence-card";
        card.innerHTML = "<small></small><strong></strong><p></p>";
        card.querySelector("small").textContent = item.type + " · " + item.ref;
        card.querySelector("strong").textContent = item.title;
        card.querySelector("p").textContent = item.note;
        return card;
      }));
    }
    const ribbon = $("#evidenceRibbon");
    const recent = [...state.evidence].slice(-3);
    ribbon.replaceChildren(...recent.map((id) => {
      const chip = document.createElement("span");
      chip.textContent = evidenceCatalog[id].title;
      return chip;
    }));
  }

  let toastTimer;
  function showToast(text) {
    clearTimeout(toastTimer);
    const toast = $("#toast");
    toast.textContent = text;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
  }

  function configureManual() {
    const manual = manuals[state.role];
    $("#manualGlyph").textContent = manual.glyph;
    $("#manualTitle").textContent = manual.title;
    $("#manualAbility").textContent = manual.ability;
    $("#manualIntro").textContent = manual.intro;
    $("#manualWarning").textContent = manual.warning;
    $("#manualTradition").textContent = manual.tradition;
    $("#manualRules").replaceChildren(...manual.rules.map((rule, index) => {
      const item = document.createElement("li");
      item.textContent = rule;
      item.dataset.rule = String(index);
      return item;
    }));
  }

  function startGame(role) {
    state.role = role;
    $("#app").dataset.role = role;
    $("#openManual").disabled = false;
    $("#opening").hidden = true;
    $("#story").hidden = false;
    configureManual();
    renderEvidence();
    startSound();
    setProgress(1);
    setScene("minos");
    setObjective("通过米诺斯的审判席");
    play([
      {
        type: "启程",
        speaker: "旁白",
        text: `你把《${manuals[role].title}》系在腰间。皮封上的字在风里变冷；维吉尔已经走到下一段石阶，示意你跟上。`,
        left: "virgil",
        right: null
      },
      {
        type: "抵达",
        speaker: "旁白",
        text: "石道突然收窄。每一个抵达这里的亡魂都必须说出自己的罪；高座上的米诺斯听完，便用尾巴绕身，圈数就是他们将坠入的深度。",
        source: "Inf. V.1–15",
        right: "minos"
      },
      {
        type: "审问",
        speaker: "米诺斯",
        text: "“活人，你也来到痛苦的客舍？看清是谁带你进来——入口宽阔，并不等于你有权通过。”",
        source: "据 Inf. V.16–20 改写",
        left: null,
        right: "minos"
      },
      {
        type: "引路",
        speaker: "维吉尔",
        text: "“不要阻拦。他的路已经在更高处被允许。”维吉尔没有回头，仿佛这句话足以替你结束审问。",
        source: "Inf. V.21–24",
        left: "virgil",
        right: "minos"
      }
    ], showGateDecision);
  }

  function showGateDecision() {
    const manual = manuals[state.role];
    showDialogue({
      type: "你的行动",
      speaker: "审判席前",
      text: "米诺斯仍盯着你。维吉尔已经迈向风声传来的门洞；你只有片刻决定，怎样从审判席前经过。",
      left: "virgil",
      right: "minos",
      actions: [
        {
          label: "跟紧维吉尔，让他的权威替你通行",
          hint: "安全，但米诺斯不会听见你的声音",
          run: () => resolveGate("guideAuthority")
        },
        {
          label: "报出自己的姓名，承认你仍活着",
          hint: manual.ability === "追姓名" ? "见证之书正在发热" : "你必须自己承担这句话",
          run: () => resolveGate("livingName")
        },
        {
          label: "不回答，先看清尾巴如何作出判决",
          hint: manual.ability === "辨行动" ? "衡量之书允许你拆解审判" : "这会激怒等待答复的人",
          run: () => resolveGate("confession")
        }
      ]
    });
  }

  function resolveGate(choice) {
    addEvidence(choice);
    const outcomes = {
      guideAuthority: "你没有回答。维吉尔的许可压过了米诺斯的追问；审判者让开道路，却把你的沉默记在了眼里。",
      livingName: "你说出自己的名字，也说自己仍有体温。米诺斯的尾尖在石面停了一瞬：这里习惯听亡魂招供，不习惯听活人自报来意。",
      confession: "你没有看他的脸，只数尾巴绕紧的动作。米诺斯发出低吼，但你看清了：亡魂先讲述自己，判决才落下。"
    };
    play([
      {
        type: "行动结果",
        speaker: "审判席",
        text: outcomes[choice],
        left: choice === "guideAuthority" ? "virgil" : null,
        right: "minos"
      },
      {
        type: "越过门槛",
        speaker: "旁白",
        text: "门洞后的声音不是哭喊，而是一整片被风撕碎的语言。你刚踏下最后一级石阶，黑暗便把米诺斯和他的判决隔在身后。",
        left: "virgil",
        right: null,
        objective: "在风暴中确认发生了什么"
      }
    ], enterStorm);
  }

  const observations = {
    wind: {
      label: "听风",
      position: ["74%", "23%"],
      evidence: "restlessWind",
      text: "风从来没有真正停下。它把灵魂拨弄、翻转、撞向岩壁，也不给他们减慢速度的希望。"
    },
    crowd: {
      label: "辨认队伍",
      position: ["43%", "30%"],
      evidence: "namedCrowd",
      text: "维吉尔逐个指出名字：狄多、克利奥帕特拉、海伦、阿基琉斯、特里斯丹。宏大的爱情故事在这里都带着具体的死亡。"
    },
    pair: {
      label: "追随两道影子",
      position: ["67%", "49%"],
      evidence: "doves",
      text: "两道影子始终靠在一起。风把其他灵魂吹散时，他们却像同一意志牵引的鸽子，从狄多的队伍中斜飞出来。"
    },
    lens: {
      label: "使用手册能力",
      position: ["28%", "49%"],
      evidence: null,
      text: ""
    }
  };

  function enterStorm() {
    setProgress(2);
    setScene("storm");
    setActors("virgil", null);
    setObjective("利用风眼观察三处现场");
    play([
      {
        type: "第二圈",
        speaker: "旁白",
        text: "没有火。只有一场永不停止的黑色风暴。亡魂像寒鸦与雁群被抛向两侧；每当撞上岩壁，声音便从人声变成诅咒。",
        source: "Inf. V.25–51",
        left: "virgil",
        right: null,
        scene: "storm"
      },
      {
        type: "引路",
        speaker: "维吉尔",
        text: "“这里受罚的，是让欲望压过判断的人；永不停息的风，把生前失去尺度的冲动变成了刑罚。不要只看他们被吹向哪里，也看他们怎样结队、怎样说话。”",
        source: "Inf. V.31–45",
        left: "virgil",
        right: null
      }
    ], showInvestigation);
  }

  function roleObservation() {
    if (state.role === "order") {
      return { evidence: "doves", text: "你不先替他们命名，只看动作：风向没有改变，两道影子却一同偏离队伍，朝你所在的岩台调整了方向。" };
    }
    if (state.role === "witness") {
      return { evidence: "paoloSilence", text: "靠近的两道影子里，女子抬头准备应答；男子始终低着脸。你先在页边给这个尚未开口的人留下一行空白。" };
    }
    return { evidence: "readerMetaphor", text: "你正要把他们比作归巢的鸽子，却先停笔：这个比喻来自观看者，不来自他们的证词。它会在两人开口前，先把他们写成一对。" };
  }

  function showInvestigation() {
    $("#dialogue").hidden = true;
    $("#investigation").hidden = false;
    $("#hotspotLayer").hidden = false;
    $("#reticle").hidden = false;
    $("#finishObservation").hidden = true;
    $("#investigationTitle").textContent = "选择要观察的现场";
    $("#investigationHint").textContent = "观察不会给你答案，但会改变之后能够提出的问题。";
    const layer = $("#hotspotLayer");
    const entries = Object.entries(observations);
    layer.replaceChildren(...entries.map(([id, item], index) => {
      const button = document.createElement("button");
      button.className = "hotspot";
      button.type = "button";
      button.style.left = item.position[0];
      button.style.top = item.position[1];
      button.innerHTML = "<b></b><span></span>";
      button.querySelector("b").textContent = String(index + 1).padStart(2, "0");
      button.querySelector("span").textContent = item.label;
      button.addEventListener("click", () => observe(id, button));
      return button;
    }));
    renderBudget();
  }

  function renderBudget() {
    $("#budgetDots").replaceChildren(...[0, 1, 2].map((index) => {
      const dot = document.createElement("i");
      dot.classList.toggle("is-used", index < state.observations);
      return dot;
    }));
    $("#budgetLabel").textContent = "已观察 " + state.observations + " / 3";
  }

  function observe(id, button) {
    if (button.classList.contains("is-seen") || state.observations >= 3) return;
    const item = id === "lens" ? roleObservation() : observations[id];
    button.classList.add("is-seen");
    state.observations += 1;
    addEvidence(item.evidence);
    $("#investigationHint").textContent = item.text;
    renderBudget();
    if (id === "lens") {
      $("#investigationTitle").textContent = manuals[state.role].ability + "留下了一条页边笔记";
    } else {
      $("#investigationTitle").textContent = item.label + "：现场笔记";
    }
    if (state.observations >= 3) {
      $$(".hotspot").forEach((hotspot) => { hotspot.disabled = true; });
      $("#investigationTitle").textContent = "你已经看见足够多的现场";
      $("#investigationHint").textContent = "那两道影子正在靠近。准备好后，由你决定怎样称呼他们。";
      $("#finishObservation").hidden = false;
    }
  }

  function callThePair() {
    $("#hotspotLayer").hidden = true;
    $("#investigation").hidden = true;
    $("#reticle").hidden = true;
    setObjective("呼唤并辨认靠近的亡魂");
    showDialogue({
      type: "风向改变",
      speaker: "维吉尔",
      text: "“等他们靠近。你可以呼唤，但你使用的称呼会先替他们决定一种身份。”两道影子正沿着风的弧线接近。",
      left: "virgil",
      right: null,
      actions: [
        { label: "“受苦的灵魂，请来和我们说话。”", hint: "先承认痛苦，不预设爱情无罪", run: () => greetPair("suffering") },
        { label: "“被爱牵引的两个人，请停一停。”", hint: "采用他们即将使用的语言", run: () => greetPair("love") },
        { label: "“从狄多队伍离开的两位，请告诉我你们的名字。”", hint: "以现场位置而非传说称呼他们", run: () => greetPair("precise") }
      ]
    });
  }

  function greetPair(kind) {
    state.rapport += kind === "suffering" ? 2 : kind === "precise" ? 1 : 0;
    setProgress(3);
    setScene("francesca");
    setObjective("听完证词，但不要替证词补全空白");
    const reaction = {
      suffering: "你的声音没有赞美，也没有指控。两道影子从风中落低，像被呼唤归巢的鸽子。",
      love: "“爱”这个词穿过风暴。两道影子立刻转向，仿佛你已经接受了他们讲述故事的方式。",
      precise: "你没有称他们为恋人。两道影子在岩台前降下，女子先抬起脸，男子仍旧沉默。"
    }[kind];
    play([
      { type: "相遇", speaker: "旁白", text: reaction, source: "Inf. V.73–87", left: "virgil", right: "pairUnknown" },
      {
        type: "辨认",
        speaker: "维吉尔",
        text: "“前面的是拉文纳的弗兰切斯卡，身后是保罗。先听她怎样说，不要让名字替你预先作答。”",
        source: "人物身份据本歌历史语境补明",
        left: "virgil",
        right: "francesca"
      },
      {
        type: "人物证词",
        speaker: "弗兰切斯卡",
        text: "“善良而宽厚的活人，既然你怜悯我们的痛苦，趁风暂时沉默，我会回答你。我的城在波河入海之处。”",
        source: "据 Inf. V.88–99 节译",
        left: null,
        right: "francesca"
      },
      {
        type: "人物证词",
        speaker: "弗兰切斯卡",
        text: "“爱迅速抓住温柔的心，使他爱上我的身体；爱不允许被爱的人不去爱；爱把我们带向同一场死亡。杀死我们的人，正被该隐环等待。”",
        source: "据 Inf. V.100–107 节译",
        left: null,
        right: "francesca"
      },
      {
        type: "在场者",
        speaker: "旁白",
        text: "她说了三次“爱”。每一次，爱都是行动者。保罗站在她身后，没有纠正，也没有补充。",
        left: null,
        right: "francesca"
      }
    ], () => {
      addEvidence("loveGrammar");
      showQuestions();
    });
  }

  const questions = {
    afternoon: {
      label: "“你说爱把你们带向死亡。你们第一次越过界限时，发生了什么？”",
      tag: "追问起因",
      evidence: "book",
      lines: [
        {
          type: "追问",
          speaker: "弗兰切斯卡",
          text: "“我们独自在一起，为消遣读兰斯洛特怎样被爱情抓住。好几次，文字使我们抬头相望，也使脸色改变。”",
          source: "据 Inf. V.127–132 节译",
          right: "francesca"
        },
        {
          type: "人物证词",
          speaker: "弗兰切斯卡",
          text: "“读到王后被亲吻时，他浑身颤抖，吻了我的嘴。书和写书的人做了我们的加莱奥托。那一天，我们没有再读下去。”",
          source: "据 Inf. V.133–138 节译",
          right: "francesca"
        }
      ]
    },
    death: {
      label: "“你说同一场死亡。是谁动了手？”",
      tag: "被省略的人",
      evidence: "murder",
      lines: [
        {
          type: "追问",
          speaker: "弗兰切斯卡",
          text: "她望向风里，没有报出丈夫的姓名。“该隐环会替我们等他。”这是她第二次把凶手放进未来，却没有讲述死亡本身。",
          source: "Inf. V.106–107",
          right: "francesca"
        }
      ]
    },
    agency: {
      label: "“你说‘爱’做了一切。当时是谁作了决定？”",
      tag: "辨行动",
      evidence: "agency",
      role: "order",
      lines: [
        {
          type: "越出原句",
          speaker: "弗兰切斯卡",
          text: "“我们读，我们抬眼——而后，是他吻了我。”她没有收回“爱”的力量，却第一次把行动还给了具体的人。",
          source: "Inf. V.127–136",
          right: "francesca"
        }
      ]
    },
    paolo: {
      label: "转向保罗：“你的版本呢？”",
      tag: "追沉默",
      evidence: "paoloSilence",
      role: "witness",
      lines: [
        {
          type: "沉默证词",
          speaker: "保罗",
          text: "他没有回答。风把哭声压回喉咙。你忽然明白：沉默可以进入记录，却不能被你擅自翻译成同意。",
          source: "Inf. V.139–140",
          right: "francesca"
        }
      ]
    },
    book: {
      label: "“如果没有兰斯洛特的故事，你们会怎样理解那个吻？”",
      tag: "校叙词",
      lock: "先追问起因，确认那本书进入了事件",
      evidence: "book",
      role: "reader",
      lines: [
        {
          type: "阅读留下的痕迹",
          speaker: "弗兰切斯卡",
          text: "“那一页先替我们说出了不敢说的话。”她仍称书为撮合者；你却听见另一层：借来的故事不仅解释欲望，也训练欲望模仿它。",
          source: "Inf. V.127–138",
          right: "francesca"
        }
      ]
    },
    pity: {
      label: "问维吉尔：“我的怜悯会不会也在误读她？”",
      tag: "审读自己",
      evidence: "travelerPity",
      role: "reader",
      lines: [
        {
          type: "引路人的反问",
          speaker: "维吉尔",
          text: "“怜悯让你停下听她，这是好的。但若你因痛苦的声音停止判断，你怜悯的也许只是自己愿意相信的故事。”",
          source: "结合 Inf. V.109–142 的情境改写",
          left: "virgil",
          right: "francesca"
        }
      ]
    }
  };

  function questionUnlocked(id, question) {
    if (id === "book" && !state.evidence.has("book")) return false;
    if (!question.role || question.role === state.role) return true;
    if (question.role === "order") return state.evidence.has("loveGrammar");
    if (question.role === "witness") return state.evidence.has("doves") || state.evidence.has("namedCrowd");
    return state.evidence.has("loveGrammar") || state.evidence.has("book");
  }

  function showQuestions() {
    setProgress(4);
    setObjective("三次追问后，决定如何记录");
    $("#dialogue").hidden = true;
    $("#questionDeck").hidden = false;
    $("#questionsLeft").textContent = state.questionsLeft;
    const box = $("#questionChoices");
    box.replaceChildren(...Object.entries(questions).filter(([id]) => !state.asked.has(id)).map(([id, question]) => {
      const button = document.createElement("button");
      const unlocked = questionUnlocked(id, question);
      const native = !question.role || question.role === state.role;
      button.type = "button";
      button.disabled = !unlocked;
      button.innerHTML = "<span></span><small></small>";
      button.querySelector("span").textContent = question.label;
      button.querySelector("small").textContent = unlocked ? (native ? question.tag : question.tag + " · 越出本册") : question.lock || question.tag + " · 尚缺现场证据";
      button.addEventListener("click", () => askQuestion(id));
      return button;
    }));
  }

  function askQuestion(id) {
    const question = questions[id];
    state.asked.add(id);
    state.questionsLeft -= 1;
    if (question.role && question.role !== state.role) state.crossedLens = true;
    $("#questionDeck").hidden = true;
    play(question.lines, () => {
      addEvidence(question.evidence);
      if (state.questionsLeft > 0) showQuestions();
      else closeTestimony();
    });
  }

  function closeTestimony() {
    play([
      {
        type: "风又起了",
        speaker: "旁白",
        text: "弗兰切斯卡与保罗的身影已经离开岩台。下一阵风会把他们卷回队伍；你把手册按在膝上，只来得及再写下一句结论。",
        left: null,
        right: "francesca",
        objective: "决定哪些事实将被带出地狱"
      }
    ], showVerdict);
  }

  function hiddenVerdictUnlocked() {
    const hasOmission = state.evidence.has("murder");
    const hasAgencyOrBook = state.evidence.has("agency") || state.evidence.has("book");
    const hasPerson = state.evidence.has("paoloSilence");
    return state.crossedLens && hasOmission && hasAgencyOrBook && hasPerson;
  }

  function showVerdict() {
    setProgress(5);
    setScene("verdict");
    setObjective("写下你愿意带走的版本");
    $("#dialogue").hidden = true;
    $("#questionDeck").hidden = true;
    $("#verdict").hidden = false;
    setActors(null, "francesca");
    const unlocked = hiddenVerdictUnlocked();
    const options = [
      {
        id: "romance",
        title: "爱把他们带向同一场死亡。",
        note: "保存痛苦与爱情的语言；省略具体行动、沉默和谋杀。",
        meta: "风会立刻放行，但最终记录只保留这段修辞。"
      },
      {
        id: "judgment",
        title: "他们曾经选择；“爱”不能替行动者免责。",
        note: "保存行动与责任；压低人物的痛苦、文本影响和历史处境。",
        meta: "道路会稳定，但这份裁决仍无法替保罗发言。"
      },
      {
        id: "open",
        title: "她的痛苦、她的选择与她没有说出的事实必须并存。",
        note: "拒绝让任何一本手册独占记录；把矛盾留给后来的阅读者核对。",
        meta: unlocked ? "第四页已经显现。你可以违背本册的最后一条规则。" : "尚未显现：需要追到凶手、行动或文本，并让保罗的沉默进入记录。"
      }
    ];
    $("#verdictOptions").replaceChildren(...options.map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.disabled = option.id === "open" && !unlocked;
      button.innerHTML = "<strong></strong><span></span><em></em>";
      button.querySelector("strong").textContent = option.title;
      button.querySelector("span").textContent = option.note;
      button.querySelector("em").textContent = option.meta;
      button.addEventListener("click", () => finish(option.id));
      return button;
    }));
  }

  function finish(kind) {
    $("#verdict").hidden = true;
    $("#ending").hidden = false;
    setScene("ending");
    setActors(null, null);
    const manual = manuals[state.role];
    const endings = {
      romance: {
        kicker: "结局 · 被保存的传说",
        title: "风替你合上了书。",
        body: "你完整保存了弗兰切斯卡最动人的句子。后来的人会记得爱情、鸽子和那一吻，却很难再看见谁作了决定、谁一直沉默、谁结束了两人的生命。其他证据仍夹在手册里，却没有进入你交给后来者的结论。"
      },
      judgment: {
        kicker: "结局 · 稳固的裁决",
        title: "道路变直，人物变薄。",
        body: "你的记录准确指出行动与责任。米诺斯会同意这份判断，手册也恢复了整齐。但风中的两个人被重新压成一个罪类：他们的历史、阅读和没有说出口的部分，都没有跟你离开。"
      },
      open: {
        kicker: "隐藏结局 · 第四页",
        title: "证词没有闭合。",
        body: "你没有把弗兰切斯卡判成无辜，也没有把她缩成罪名。你保存她的痛苦、保罗的沉默、书的介入、具体的吻和被省略的谋杀。手册最后一条规则从纸上脱落：安全并不等于完整。"
      }
    };
    const ending = endings[kind];
    $("#endingKicker").textContent = ending.kicker;
    $("#endingTitle").textContent = ending.title;
    $("#endingBody").textContent = ending.body;
    const kept = kind === "romance"
      ? ["loveGrammar", "book", "travelerPity"]
      : kind === "judgment"
        ? ["confession", "agency", "murder"]
        : [...state.evidence];
    $("#endingRecord").replaceChildren(...kept.filter((id) => evidenceCatalog[id] && state.evidence.has(id)).map((id) => {
      const chip = document.createElement("span");
      chip.textContent = evidenceCatalog[id].title;
      return chip;
    }));
    if (kind === "open") {
      const falseRule = $("#manualRules").children[manual.lie];
      if (falseRule) falseRule.classList.add("is-lie");
      showToast(manual.title + "承认：它不能独自解释这一歌。");
      audio.resolve();
    } else {
      audio.close();
    }
  }

  function reset() {
    state.role = null;
    state.evidence = new Set();
    state.observations = 0;
    state.questionsLeft = 3;
    state.asked = new Set();
    state.queue = [];
    state.queueIndex = 0;
    state.queueDone = null;
    state.rapport = 0;
    state.crossedLens = false;
    $("#app").dataset.role = "";
    $("#openManual").disabled = true;
    $("#app").dataset.scene = "threshold";
    $("#opening").hidden = false;
    $("#story").hidden = true;
    $("#ending").hidden = true;
    $("#manual").hidden = true;
    $("#hotspotLayer").hidden = true;
    $("#finishObservation").hidden = true;
    setActors(null, null);
    setProgress(1);
    renderEvidence();
  }

  function openManual(tab = "rules") {
    if (!state.role) return;
    $("#manual").hidden = false;
    switchManual(tab);
  }

  function closeManual() {
    $("#manual").hidden = true;
  }

  function switchManual(tab) {
    $$("[data-manual-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.manualTab === tab));
    $$("[data-manual-panel]").forEach((panel) => {
      const active = panel.dataset.manualPanel === tab;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    if (tab === "text") renderPassage($("#passageSelect").value);
  }

  async function loadCanto() {
    try {
      const response = await fetch("corpus.json");
      const corpus = await response.json();
      state.canto = corpus.cantos.find((canto) => canto.realm === "inferno" && canto.canto === 5);
      renderPassage("call");
    } catch {
      $("#parallelText").innerHTML = "<p class=\"zh\">文本载入失败。游戏仍可继续，重新连接后可核对三语原文。</p>";
    }
  }

  function renderPassage(key) {
    if (!state.canto) return;
    const passage = passages[key];
    const lines = state.canto.lines.filter((line) => line.n >= passage.range[0] && line.n <= passage.range[1]);
    const box = $("#parallelText");
    const fragments = [];
    for (const line of lines) {
      const no = document.createElement("span");
      no.className = "line-no";
      no.textContent = "V." + line.n;
      const it = document.createElement("span");
      it.className = "it";
      it.lang = "it";
      it.textContent = line.it;
      const en = document.createElement("span");
      en.className = "en";
      en.lang = "en";
      en.textContent = line.en;
      fragments.push(no, it, en);
    }
    const zh = document.createElement("p");
    zh.className = "zh";
    zh.lang = "zh-CN";
    zh.textContent = "王维克译（按原书段落）：" + state.canto.zh.paragraphs[passage.zh].text;
    fragments.push(zh);
    box.replaceChildren(...fragments);
  }

  class Atmosphere {
    constructor() {
      this.context = null;
      this.master = null;
      this.wind = null;
      this.drones = [];
    }
    start() {
      if (this.context) {
        if (this.context.state === "suspended") this.context.resume();
        this.master.gain.setTargetAtTime(.18, this.context.currentTime, .3);
        return;
      }
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.context = new AudioContext();
      this.master = this.context.createGain();
      this.master.gain.value = .0001;
      this.master.connect(this.context.destination);
      const buffer = this.context.createBuffer(1, this.context.sampleRate * 3, this.context.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i = 0; i < data.length; i++) {
        last = last * .985 + (Math.random() * 2 - 1) * .06;
        data[i] = last;
      }
      const wind = this.context.createBufferSource();
      const windFilter = this.context.createBiquadFilter();
      const windGain = this.context.createGain();
      wind.buffer = buffer;
      wind.loop = true;
      windFilter.type = "bandpass";
      windFilter.frequency.value = 430;
      windFilter.Q.value = .5;
      windGain.gain.value = .36;
      wind.connect(windFilter).connect(windGain).connect(this.master);
      wind.start();
      this.wind = wind;
      [55, 82.41, 110].forEach((frequency, index) => {
        const oscillator = this.context.createOscillator();
        const gain = this.context.createGain();
        oscillator.type = index === 1 ? "triangle" : "sine";
        oscillator.frequency.value = frequency;
        gain.gain.value = [.11, .045, .025][index];
        oscillator.connect(gain).connect(this.master);
        oscillator.start();
        this.drones.push(oscillator);
      });
      this.master.gain.linearRampToValueAtTime(.18, this.context.currentTime + 1.8);
    }
    stop() {
      if (!this.context) return;
      this.master.gain.setTargetAtTime(.0001, this.context.currentTime, .12);
    }
    tone(frequency, duration, level = .05) {
      if (!this.context || !state.soundOn) return;
      const now = this.context.currentTime;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.35, now + duration);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(level, now + .04);
      gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
      oscillator.connect(gain).connect(this.master);
      oscillator.start(now);
      oscillator.stop(now + duration + .05);
    }
    mark() { this.tone(392, .9, .045); }
    page() { this.tone(146.83, .35, .018); }
    resolve() { [261.63, 329.63, 392].forEach((note, index) => setTimeout(() => this.tone(note, 1.6, .04), index * 260)); }
    close() { this.tone(82.41, 2.4, .05); }
  }

  const audio = new Atmosphere();
  function startSound() {
    state.soundOn = true;
    audio.start();
    $("#soundButton").setAttribute("aria-pressed", "true");
  }
  function toggleSound() {
    state.soundOn = !state.soundOn;
    if (state.soundOn) audio.start();
    else audio.stop();
    $("#soundButton").setAttribute("aria-pressed", String(state.soundOn));
  }

  function buildSouls() {
    const stream = $("#soulStream");
    stream.replaceChildren(...Array.from({ length: 13 }, (_, index) => {
      const soul = document.createElement("span");
      soul.style.setProperty("--size", 10 + (index % 4) * 5 + "px");
      soul.style.setProperty("--duration", 12 + (index % 5) * 2.3 + "s");
      soul.style.setProperty("--delay", -index * 1.75 + "s");
      soul.style.top = 12 + ((index * 13) % 58) + "%";
      return soul;
    }));
  }

  function startStormCanvas() {
    const canvas = $("#stormCanvas");
    const context = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motes = Array.from({ length: reduced ? 18 : 72 }, () => ({
      x: Math.random(),
      y: Math.random(),
      length: 24 + Math.random() * 90,
      speed: .0018 + Math.random() * .004,
      alpha: .05 + Math.random() * .2
    }));
    function resize() {
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    function draw() {
      context.clearRect(0, 0, innerWidth, innerHeight);
      context.lineWidth = 1;
      for (const mote of motes) {
        context.strokeStyle = "rgba(218,225,228," + mote.alpha + ")";
        context.beginPath();
        context.moveTo(mote.x * innerWidth, mote.y * innerHeight);
        context.lineTo(mote.x * innerWidth + mote.length, mote.y * innerHeight - mote.length * .12);
        context.stroke();
        if (!reduced) {
          mote.x += mote.speed;
          mote.y -= mote.speed * .12;
          if (mote.x > 1.08 || mote.y < -.05) {
            mote.x = -.1;
            mote.y = .15 + Math.random() * .8;
          }
        }
      }
      requestAnimationFrame(draw);
    }
    resize();
    addEventListener("resize", resize, { passive: true });
    draw();
  }

  function bind() {
    $$("[data-role-choice]").forEach((button) => button.addEventListener("click", () => startGame(button.dataset.roleChoice)));
    $("#continueButton").addEventListener("click", advance);
    $("#finishObservation").addEventListener("click", callThePair);
    $("#soundButton").addEventListener("click", toggleSound);
    $("#openManual").addEventListener("click", () => openManual("rules"));
    $("#closeManual").addEventListener("click", closeManual);
    $$("[data-manual-tab]").forEach((button) => button.addEventListener("click", () => switchManual(button.dataset.manualTab)));
    $("#passageSelect").addEventListener("change", (event) => renderPassage(event.target.value));
    $("#restartButton").addEventListener("click", reset);
    $("#openReadingFromEnding").addEventListener("click", () => openManual("text"));
    addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        $("#manual").hidden ? openManual("rules") : closeManual();
        return;
      }
      if (event.key.toLowerCase() === "m") {
        toggleSound();
        return;
      }
      if ((event.code === "Space" || event.key === "Enter") && $("#manual").hidden) {
        event.preventDefault();
        advance();
      }
    });
    $("#worldBackdrop").parentElement.addEventListener("pointermove", (event) => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = (event.clientX / innerWidth - .5) * -1.1;
      const y = (event.clientY / innerHeight - .5) * -.7;
      $("#worldBackdrop").style.translate = x + "% " + y + "%";
    }, { passive: true });
  }

  buildSouls();
  startStormCanvas();
  bind();
  loadCanto();
})();
