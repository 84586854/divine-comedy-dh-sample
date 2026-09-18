const realms = {
  inferno: {
    index: "TRANSMISSION / INFERNO 05",
    title: "不要回答风中的名字",
    risk: "叙事感染",
    number: "04",
    rule: "风中有人准确叫出你的名字时，不要立刻回答。先问她：是谁替你选择了这条路？",
    speaker: "证词人 F-05",
    testimony: "“是爱情使我们走向同一个结局。那本书、那个作者，以及我们读到的那一刻，都不再让我们回头。”",
    question: "她是在忏悔，还是在重新书写责任？",
    choices: [
      ["相信她", "爱情夺走了选择能力"],
      ["检查措辞", "是谁在句子中承担行动？"]
    ],
    results: {
      trust: ["你把选择权交给了故事", "证词人使用“爱情”作为行动主体。你的同情是真实的，但同情还不能证明她没有选择。"],
      inspect: ["你发现了被隐藏的主语", "她的叙述把责任转交给爱情与书本。规则并不要求你拒绝同情，而是要求你在同情之前辨认选择。"]
    },
    citation: "《地狱篇》第五歌",
    source: "弗兰切斯卡把行动的主语交给“爱情”和“书”，将自己的选择描述成无法抗拒的外力。旅行者但丁被她的语言打动而昏倒；但诗人同时邀请读者检查这套漂亮说辞。",
    link: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-5/inferno-05/",
    linkLabel: "查看 Digital Dante 文本与评注 ↗",
    location: "第二圈 · 风暴带",
    guide: "维吉尔",
    diagram: "inferno"
  },
  purgatorio: {
    index: "PROTOCOL / PURGATORIO 09",
    title: "不要替别人擦去额上的字母",
    risk: "错误赦免",
    number: "07",
    rule: "门扉关闭后，额上的七个字母只能在攀登中消失。若有人请求你提前擦除，不要触碰他。",
    speaker: "同行者 P-09",
    testimony: "“我已经承认自己有罪。既然知道错误，惩罚就不再有必要。请替我擦掉第一个字母。”",
    question: "承认错误，是否等于完成改变？",
    choices: [
      ["替他擦除", "承认本身就是净化"],
      ["拒绝请求", "改变必须留下行动轨迹"]
    ],
    results: {
      trust: ["字母重新出现在你的额上", "炼狱不是口头认罪的捷径。你替他跳过过程，也把他的未完成状态转移给了自己。"],
      inspect: ["门后的阶梯变轻了一些", "炼狱的核心不是报复，而是训练欲望。字母由守门天使刻下，也只能随真实改变逐一消失。"]
    },
    citation: "《炼狱篇》第九歌",
    source: "守门天使用剑尖在但丁额头刻下七个 P，象征需要净化的罪。此后每经过一层，一个字母被天使抹去，攀登也随之变得更轻。",
    link: "https://digitaldante.columbia.edu/dante/divine-comedy/purgatorio/purgatorio-09/",
    linkLabel: "查看 Digital Dante 篇章入口 ↗",
    location: "炼狱门 · 第一阶",
    guide: "维吉尔",
    diagram: "purgatorio"
  },
  paradiso: {
    index: "VISION / PARADISO 33",
    title: "不要把所见之物完整说出",
    risk: "语言失效",
    number: "01",
    rule: "当三个圆环同时成为一个形象时，请停止记录。继续描述只会制造一个看似准确的赝品。",
    speaker: "观察者 D-33",
    testimony: "“我看见了，但记忆无法保存它；我理解了，但语言落在经验之后。”",
    question: "无法完整复述，是否意味着这次观看失败？",
    choices: [
      ["继续记录", "知识必须被完整保存"],
      ["承认边界", "缺失也是证据的一部分"]
    ],
    results: {
      trust: ["记录生成了一个过于清晰的图像", "你得到了一份完整档案，却失去了文本最重要的信息：人的语言无法占有终极经验。"],
      inspect: ["档案保留了一处空白", "这里的沉默不是缺陷，而是认识论标记：你知道自己看见过，也知道表达能力没有抵达那里。"]
    },
    citation: "《天堂篇》第三十三歌",
    source: "全诗终点不是一份清晰的宇宙说明书，而是语言和记忆的失败。但丁只能记录经验留下的变化：自己的意志与推动宇宙的爱取得协调。",
    link: "https://digitaldante.columbia.edu/dante/divine-comedy/paradiso/paradiso-33/",
    linkLabel: "查看 Digital Dante 篇章入口 ↗",
    location: "最高天 · 视野边界",
    guide: "圣伯尔纳",
    diagram: "paradiso"
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let currentRealm = "inferno";

function setDiagram(type) {
  const svg = $(".realm-diagram");
  const title = $("#diagramTitle");
  const desc = $("#diagramDesc");

  if (type === "inferno") {
    title.textContent = "地狱漏斗结构";
    desc.textContent = "九层地狱逐步向地心收窄，当前定位在第二圈。";
    svg.innerHTML = `
      <title id="diagramTitle">地狱漏斗结构</title>
      <desc id="diagramDesc">九层地狱逐步向地心收窄，当前定位在第二圈。</desc>
      <g class="diagram-lines" fill="none">
        <path d="M38 44h344L240 330h-60L38 44Z"/><path d="M60 88h300"/><path d="M78 126h264"/>
        <path d="M97 164h226"/><path d="M116 202h188"/><path d="M135 240h150"/><path d="M154 278h112"/>
      </g>
      <g class="diagram-labels"><text x="30" y="38">入口</text><text x="370" y="115">Ⅱ</text><text x="192" y="352">地心</text></g>
      <circle class="locator-pulse" cx="334" cy="111" r="15" style="transform-origin:334px 111px"/><circle class="locator" cx="334" cy="111" r="5"/>
    `;
  } else if (type === "purgatorio") {
    svg.innerHTML = `
      <title id="diagramTitle">炼狱山结构</title>
      <desc id="diagramDesc">七层山路向地上乐园升高，当前定位在山门。</desc>
      <g class="diagram-lines" fill="none">
        <path d="M52 328h316L224 48h-28L52 328Z"/><path d="M74 286h272"/><path d="M94 246h232"/>
        <path d="M114 206h192"/><path d="M134 166h152"/><path d="M154 126h112"/><path d="M176 86h68"/>
      </g>
      <g class="diagram-labels"><text x="35" y="348">山门</text><text x="197" y="38">乐园</text><text x="344" y="292">P×7</text></g>
      <circle class="locator-pulse" cx="80" cy="310" r="15" style="transform-origin:80px 310px"/><circle class="locator" cx="80" cy="310" r="5"/>
    `;
  } else {
    svg.innerHTML = `
      <title id="diagramTitle">天堂诸天结构</title>
      <desc id="diagramDesc">九重天围绕共同中心，当前定位在超越空间的最高天。</desc>
      <g class="diagram-lines" fill="none">
        <circle cx="210" cy="190" r="146"/><circle cx="210" cy="190" r="120"/><circle cx="210" cy="190" r="96"/>
        <circle cx="210" cy="190" r="72"/><circle cx="210" cy="190" r="48"/><circle cx="210" cy="190" r="24"/>
        <path d="M210 28v324M48 190h324"/>
      </g>
      <g class="diagram-labels"><text x="184" y="20">最高天</text><text x="195" y="194">爱</text><text x="338" y="72">Ⅸ</text></g>
      <circle class="locator-pulse" cx="326" cy="84" r="15" style="transform-origin:326px 84px"/><circle class="locator" cx="326" cy="84" r="5"/>
    `;
  }
}

function renderRealm(realmKey) {
  currentRealm = realmKey;
  const realm = realms[realmKey];

  $("#caseIndex").textContent = realm.index;
  $("#case-title").textContent = realm.title;
  $("#riskLabel").textContent = realm.risk;
  $("#ruleNumber").textContent = realm.number;
  $("#ruleCopy").textContent = realm.rule;
  $("#speakerLabel").textContent = realm.speaker;
  $("#testimony").textContent = realm.testimony;
  $("#encounter-title").textContent = realm.question;
  $("#citationLabel").textContent = realm.citation;
  $("#sourceText").textContent = realm.source;
  $("#sourceLink").href = realm.link;
  $("#sourceLink").textContent = realm.linkLabel;
  $("#locationLabel").textContent = realm.location;
  $("#guideLabel").textContent = realm.guide;

  const choiceButtons = $$(".choice");
  choiceButtons.forEach((button, index) => {
    const [title, subtitle] = realm.choices[index];
    button.querySelector("strong").textContent = title;
    button.querySelector("small").textContent = subtitle;
    button.classList.remove("is-selected");
  });

  $$(".realm-button").forEach((button) => {
    const active = button.dataset.realm === realmKey;
    button.classList.toggle("is-active", active);
    button.toggleAttribute("aria-current", active);
    button.querySelector(".realm-status").textContent = active ? "正在查看" : "切换区域";
  });

  $("#result").hidden = true;
  setDiagram(realm.diagram);
}

function selectChoice(choice) {
  const [title, text] = realms[currentRealm].results[choice];
  $$(".choice").forEach((button) => button.classList.toggle("is-selected", button.dataset.choice === choice));
  $("#resultTitle").textContent = title;
  $("#resultText").textContent = text;
  $("#result").hidden = false;
}

$$(".realm-button").forEach((button) => button.addEventListener("click", () => renderRealm(button.dataset.realm)));
$$(".choice").forEach((button) => button.addEventListener("click", () => selectChoice(button.dataset.choice)));

$("#sourceToggle").addEventListener("click", () => {
  const expanded = $("#sourceToggle").getAttribute("aria-expanded") === "true";
  $("#sourceToggle").setAttribute("aria-expanded", String(!expanded));
  $("#sourceContent").hidden = expanded;
});

$("#resetButton").addEventListener("click", () => {
  $$(".choice").forEach((button) => button.classList.remove("is-selected"));
  $("#result").hidden = true;
});

$("#aboutButton").addEventListener("click", () => {
  const expanded = $("#aboutButton").getAttribute("aria-expanded") === "true";
  $("#aboutButton").setAttribute("aria-expanded", String(!expanded));
  $("#aboutPanel").hidden = expanded;
});

$("#closeAbout").addEventListener("click", () => {
  $("#aboutButton").setAttribute("aria-expanded", "false");
  $("#aboutPanel").hidden = true;
  $("#aboutButton").focus();
});
