(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const manuals = {
    order: {
      glyph: "I",
      title: "衡量之书",
      ability: "辨行动",
      intro: "把欲望、行动、处境与后果分开记录。它能抵抗借口，却容易把人物压缩成可裁决的案例。",
      rules: [
        "先确认发生了什么，再评价说话者的理由。",
        "处境能够限制选择，但不能替行动者完成选择。",
        "同一种欲望会进入个人、财富和城邦；必须追踪它怎样变成行动。",
        "只要判断足够清楚，姓名和叙述方式便不再重要。"
      ],
      warning: "第四条过于整齐。没有姓名的正确判断，也可能复制地狱的分类。"
    },
    witness: {
      glyph: "II",
      title: "见证之书",
      ability: "追姓名",
      intro: "在罪类之外保存姓名、城市、亲缘与被打断的声音。它保护人物，却可能把痛苦误当成完整证词。",
      rules: [
        "任何罪类都不能替代一个人的姓名与历史。",
        "先记录谁没有获得回答，再记录胜者怎样解释事件。",
        "城邦冲突必须落回具体的人、家族和被放逐者。",
        "只要证词足够具体、足够痛苦，就不必再怀疑它的组织方式。"
      ],
      warning: "第四条把真诚和完整混在了一起。受苦者仍可能省略、误认或利用听众。"
    },
    reader: {
      glyph: "III",
      title: "回读之书",
      ability: "校叙词",
      intro: "检查比喻、语法、沉默，以及文字怎样引导读者判断。它能识别叙述陷阱，却可能把人物变成读者成长的材料。",
      rules: [
        "区分人物当时知道的事、后来叙述的事与读者补上的事。",
        "留意代词、时态和比喻；它们会制造行动后果。",
        "越像寓言的场景，越要检查谁被寓意遮住。",
        "只要看懂文字怎样引导判断，人物受到的伤害就已经得到解释。"
      ],
      warning: "第四条把解释当成补偿。看懂文字的写法，并没有替其中的人承受后果。"
    }
  };

  const evidenceCatalog = {
    factionSparks: { lens: "order", title: "党争由骄傲、嫉妒与贪欲点燃", note: "恰科把佛罗伦萨的分裂追到三种欲望，而不只是一串党派胜负。", ref: "Inf. VI.64–75" },
    ciaccoName: { lens: "witness", title: "“恰科”是市民给他的称呼", note: "一个几乎被泥雨抹去的人，先要求旅人认出自己。", ref: "Inf. VI.40–57" },
    oracleUse: { lens: "reader", title: "旅人先问佛罗伦萨，再问眼前的人", note: "面对尚未报上姓名的亡魂，旅人先追问城市的未来，也把对方推成了预言的来源。", ref: "Inf. VI.58–90" },
    measuredUse: { lens: "order", title: "财富不是罪，失去尺度的使用才是", note: "吝啬与挥霍方向相反，却同样让财物支配行动。", ref: "Inf. VII.22–60" },
    erasedFaces: { lens: "witness", title: "失去尺度的人也失去了可辨认的面孔", note: "他们曾让财富吞没身份，如今连姓名也无法从队伍中恢复。", ref: "Inf. VII.37–57" },
    falseOpposites: { lens: "reader", title: "相反口号可能共享同一种占有欲", note: "“为什么紧握”与“为什么挥霍”互相指控，却被同一圆周绑定。", ref: "Inf. VII.25–35" },
    boundary: { lens: "order", title: "挡开袭击不等于赞成报复", note: "阻止菲利波扑向渡船是一项边界；留下观看他受罚则是另一项选择。", ref: "Inf. VIII.31–63" },
    privateHistory: { lens: "witness", title: "相认使旅人不再是中立旁观者", note: "叫出菲利波，也必须记下旅人在认出他时已经表现出的敌意。", ref: "Inf. VIII.31–61" },
    cruelPleasure: { lens: "reader", title: "旅人正在享受仇敌受罚", note: "诗中的赞许语气不能自动证明这份快意没有问题。", ref: "Inf. VIII.37–63" },
    acceptedLimit: { lens: "order", title: "在城门前，服从保护也是行动", note: "维吉尔不仅命令旅人转身，还亲手遮住他的眼睛。", ref: "Inf. IX.52–60" },
    furyVoices: { lens: "witness", title: "三位复仇女神并非一团恐怖", note: "墨纪拉、阿勒克托与提西福涅分别占据城楼位置并发出声音。", ref: "Inf. IX.37–51" },
    gazeTrap: { lens: "reader", title: "美杜莎首先考验观看欲", note: "危险不只来自被看的怪物，也来自旅人非看不可的冲动。", ref: "Inf. IX.52–63" },
    distantKnowledge: { lens: "order", title: "亡魂能见远事，却不知眼前", note: "法里纳塔说明：未来接近现在时，他们的知识反而熄灭。", ref: "Inf. X.97–108" },
    fatherQuestion: { lens: "witness", title: "卡瓦尔坎特的问题被一次迟疑截断", note: "父亲追问圭多为什么不在、是否还活着；回答尚未出口，他已经倒回墓中。", ref: "Inf. X.52–72" },
    tenseTrap: { lens: "reader", title: "一个过去时制造了死亡误认", note: "“圭多曾经轻视”使卡瓦尔坎特把语法听成儿子已经死亡。", ref: "Inf. X.61–72" }
  };

  const chapters = [
    {
      id: "inf-06",
      canto: "第六歌",
      title: "冰雨中的名字",
      premise: "第三圈的雨抹平面孔；一个人却想让你记起他的名字。",
      background: "assets/canto6-rain-v1.png",
      backgroundAlt: "第三圈的冰冷污雨、泥中的灵魂与刻耳柏洛斯",
      weather: "rain",
      character: { name: "泥中的灵魂", role: "身份尚未确认", image: "assets/character-ciacco-v1.png" },
      observations: [
        { id: "c6-rain", label: "接住冰雨", position: ["72%", "21%"], title: "雨永远以同一种方式落下", note: "冰雹、雪和污水循环不止，把刑罚变成了没有尽头的日常。", ref: "Inf. VI.7–12" },
        { id: "c6-mouths", label: "观察三张嘴", position: ["64%", "43%"], title: "一把泥土换来片刻通行", note: "维吉尔用泥土占住刻耳柏洛斯的三张嘴，趁它吞咽时通过。", ref: "Inf. VI.13–33" },
        { id: "c6-faces", label: "辨认泥中的脸", position: ["33%", "49%"], title: "泥雨使每一张脸都难以辨认", note: "亡魂全都伏在地面，面孔被同一种刑罚压平；只有姓名能重新建立差异。", ref: "Inf. VI.34–39" }
      ],
      lensObservations: {
        order: { id: "c6-action", label: "使用辨行动", position: ["22%", "28%"], title: "饥饿、取食与投泥是三种行动", note: "把欲望和动作分开，才能看见维吉尔如何借怪物的饥饿开路。", ref: "Inf. VI.13–33" },
        witness: {
          id: "c6-recognition", label: "使用追姓名", position: ["22%", "28%"],
          title: "先为无法辨认的人留下姓名位置", note: "在任何亡魂开口以前，手册先留出空白，避免把整片泥地只记成一种罪类。", ref: "Inf. VI.34–39",
          targets: [
            { id: "mark-c6-speaker", label: "给坐起的人留一行空白", short: "坐起的人", title: "一行等待姓名的空白", note: "你先确认这里有一个具体的说话者，等他亲自填入姓名。", ref: "Inf. VI.34–54" },
            { id: "mark-c6-crowd", label: "记录那些没有坐起的人", short: "泥中的众人", title: "泥中还有未能开口的人", note: "恰科吸引了旅人的注意，周围更多亡魂却没有得到说话的机会。", ref: "Inf. VI.34–39" }
          ]
        },
        reader: { id: "c6-waking", label: "使用校叙词", position: ["22%", "28%"], title: "这一歌从旅人的苏醒开始", note: "第五歌的怜悯没有停住旅程；醒来以后，旅人必须面对新的痛苦。", ref: "Inf. VI.1–6" }
      },
      investigationTitle: "趁泥中的灵魂尚未开口，先看清第三圈",
      investigationHint: "你只能细看三处。刑罚怎样运作、谁仍保有差异，会改变你稍后能够问什么。",
      readyTitle: "泥中的灵魂正等你开口",
      readyHint: "三条现场记录已经写下。现在决定先问姓名、佛罗伦萨，还是争斗的原因。",
      proceedLabel: "回应泥中的灵魂",
      intro: [
        { type: "苏醒", speaker: "旁白", text: "意识重新合拢时，弗兰切斯卡的风已经留在上层。永不改变的冰雨、雪与污水落在第三圈，泥土发出腐败的气味。", source: "Inf. VI.1–12" },
        { type: "通过守兽", speaker: "维吉尔", text: "三头的刻耳柏洛斯扑向你们。维吉尔弯腰抓起泥土，投进三张饥饿的嘴；怪物忙于吞咽，你们从它脚边通过。", source: "Inf. VI.13–33" }
      ],
      encounter: [
        { type: "有人坐起", speaker: "旁白", text: "倒伏的灵魂几乎没有面孔。只有一个人在你经过时撑起上身，仿佛他认得一个仍活着的佛罗伦萨人。", source: "Inf. VI.34–39" },
        { type: "辨认", speaker: "泥中的灵魂", text: "“你出生在我死去以前。看看你是否还认得我。”雨水从他的脸上流过，你无法把这张脸同记忆中的任何人重合。", source: "据 Inf. VI.40–45 改写" }
      ],
      prompt: "你不认识他，却知道他可能熟悉佛罗伦萨。你的第一个问题是什么？",
      choices: [
        { lens: "order", requires: "c6-mouths", label: "“佛罗伦萨的人为什么彼此为敌？”", hint: "你会先听见党争的原因，暂时不知道他的姓名", evidence: "factionSparks", result: { type: "回答", speaker: "泥中的灵魂", text: "“骄傲、嫉妒和贪欲点燃了众人的心。”他预言两派将流血，并轮流把对方逐出佛罗伦萨。", source: "Inf. VI.64–75" } },
        { lens: "witness", requires: "c6-faces", label: "“雨改变了你的面容。请你亲自报上姓名。”", hint: "你会确认说话者，但听不到完整的党争预言", evidence: "ciaccoName", character: { name: "恰科", role: "佛罗伦萨市民 · 第三圈亡魂", image: "assets/character-ciacco-v1.png" }, result: { type: "报上姓名", speaker: "恰科", text: "“你们城里人叫我恰科。”他没有显赫家世，只承认自己因贪食落入这场雨。", source: "Inf. VI.52–57" } },
        { lens: "reader", requires: "c6-faces", label: "“你认得我来自佛罗伦萨。那座城如今会怎样？”", hint: "你会先追问城市的未来，而不是眼前人的身份", evidence: "oracleUse", result: { type: "城市的未来", speaker: "泥中的灵魂", text: "他没有先报姓名，只说佛罗伦萨将因党争流血，两派会轮流放逐对方。直到回答以后，你才意识到自己已经把他当成通往未来的工具。", source: "据 Inf. VI.58–75 改写" } }
      ],
      shared: [
        { type: "离开", speaker: "旁白", text: "他请求你回到人间后记得这次相遇，随即把头低回泥中。维吉尔说，最后审判以前，他不会再次坐起。", source: "Inf. VI.88–99" }
      ],
      quote: "城里仍有两个正直的人，却无人听从。",
      quoteSource: "《地狱篇》VI.73 · 据原文意译",
      sources: [
        { ref: "VI.52–54", it: "Voi cittadini mi chiamaste Ciacco", en: "You citizens were wont to call me Ciacco", zh: "你们城里人一向叫我恰科。" },
        { ref: "VI.73–75", it: "Giusti son due, e non vi sono intesi", en: "The just are two, and are not understood there", zh: "正直者只有两个，却无人听从；骄傲、嫉妒与贪欲点燃众心。" }
      ]
    },
    {
      id: "inf-07",
      canto: "第七歌",
      title: "相反者的圆周",
      premise: "两支彼此辱骂的队伍，被同一条圆周送回原点。",
      background: "assets/inferno-first-person.png",
      backgroundAlt: "地狱第四圈的黑石坡道",
      weather: "mist",
      character: null,
      observations: [
        { id: "c7-stones", label: "计算石头轨迹", position: ["67%", "25%"], title: "两队沿同一圆周反向运动", note: "他们看似敌对，却被相同的碰撞、转身与返回困在一个系统里。", ref: "Inf. VII.22–35" },
        { id: "c7-tonsures", label: "看左侧剃发者", position: ["34%", "36%"], title: "教士身份仍可辨认，个人姓名却消失了", note: "维吉尔能指出其中有教士与教皇，却不能把他们逐一叫出。", ref: "Inf. VII.37–54" },
        { id: "c7-slogans", label: "听两边的口号", position: ["55%", "51%"], title: "相反的指控共享同一种句式", note: "两边只问对方为何紧握或挥霍，从不描述自己的行动。", ref: "Inf. VII.25–30" }
      ],
      lensObservations: {
        order: { id: "c7-measure", label: "使用辨行动", position: ["22%", "22%"], title: "石头不是罪的来源", note: "真正受判断的是人如何使用可流转之物，以及行动是否仍有尺度。", ref: "Inf. VII.40–60" },
        witness: {
          id: "c7-erasure", label: "使用追姓名", position: ["22%", "22%"],
          title: "这些人只剩身份，已经没有姓名", note: "维吉尔能看出教士、枢机和教皇，却一个也叫不出来；地狱把他们固定成了一支无名队伍。", ref: "Inf. VII.52–57",
          targets: [
            { id: "mark-c7-clergy", label: "在职位后面留下姓名空白", short: "无名教士", title: "职位后面还有空白", note: "你写下“教士、枢机、教皇”，又在每个称谓后留出空位，不让职位冒充姓名。", ref: "Inf. VII.37–54" },
            { id: "mark-c7-crowds", label: "分别记录两队的动作", short: "相撞的两队", title: "动作留下了，人仍无法分辨", note: "你记下紧握者与挥霍者的动作，也承认无法把任何一个人从圆周中分离出来。", ref: "Inf. VII.25–57" }
          ]
        },
        reader: { id: "c7-symmetry", label: "使用校叙词", position: ["22%", "22%"], title: "场面太对称，容易让人以为两边完全一样", note: "他们的动作方向相反，但这不表示每个人的经历、权力和后果都相同。", ref: "Inf. VII.22–60" }
      },
      investigationTitle: "先辨认两支队伍为何永远相撞",
      investigationHint: "选择三处细节。先看他们怎样推动石头，不要把挥霍误认成慷慨。",
      readyTitle: "巨石又要撞在一起",
      readyHint: "碰撞声很快会盖过谈话。选择你愿意留下的解释。",
      proceedLabel: "向维吉尔提出判断",
      intro: [
        { type: "守门者", speaker: "旁白", text: "守在第四圈入口的普路托吐出一串难以解释的嘶哑音节。维吉尔叫它安静；怪物像断了桅杆的船帆一样倒下，你们继续下降。", source: "Inf. VII.1–15" },
        { type: "第四圈", speaker: "旁白", text: "两队灵魂从半圆两端推着重石迎面撞击。一边喊“为什么紧握”，另一边喊“为什么挥霍”；撞击以后，他们转身，再走一遍。", source: "Inf. VII.22–35" }
      ],
      encounter: [
        { type: "辨认失败", speaker: "维吉尔", text: "“左边有教士、枢机和教皇。至于姓名——他们生前让财富蒙蔽了自己，如今已经谁也认不出来。”", source: "Inf. VII.37–54" }
      ],
      prompt: "石头再次撞在一起。你先把什么写进手册？",
      choices: [
        { lens: "order", requires: "c7-stones", label: "把石头、财富与人的使用方式分开记录", hint: "你会继续听维吉尔解释财富为何流转", evidence: "measuredUse", result: { type: "福尔图娜", speaker: "维吉尔", text: "“财富本身没有意志。掌管世间财富流转的福尔图娜只让它不断易手；紧握或挥霍，才是人在变化中作出的选择。”", source: "Inf. VII.40–96" } },
        { lens: "witness", requires: "c7-tonsures", label: "追问：为什么能认出身份，却一个姓名都没有？", hint: "你会留下姓名空白，不再追问财富流转的原因", evidence: "erasedFaces", result: { type: "无法复原", speaker: "维吉尔", text: "他再次查看剃发者，仍叫不出任何人。你在手册里留下数行空白：它们证明这里曾有个人，却不能替任何人编造姓名。", source: "Inf. VII.37–57" } },
        { lens: "reader", requires: "c7-slogans", label: "把两边的口号抄在同一行，比较它们的句式", hint: "你会比较两句口号，不再追问个人姓名", evidence: "falseOpposites", result: { type: "同一句式", speaker: "页边记录", text: "“为什么紧握？”“为什么挥霍？”两句话都盯着对方，却没有一边说明自己的动作。喊声结束以后，他们仍被圆周送回原点。", source: "Inf. VII.25–35" } }
      ],
      shared: [
        { type: "继续下降", speaker: "旁白", text: "石头的撞击声留在身后。黑水从坡底聚成沼泽，水面上有人互相撕打，水面下还有话语在气泡里破裂。", source: "Inf. VII.100–126" }
      ],
      quote: "月下所有黄金，也不能使其中一个疲惫的灵魂停歇。",
      quoteSource: "《地狱篇》VII.64–66 · 据原文意译",
      sources: [
        { ref: "VII.40–45", it: "con misura nullo spendio ferci", en: "there with measure they no spending made", zh: "他们在使用财富时，全都失去了尺度。" },
        { ref: "VII.64–66", it: "tutto l’oro ch’è sotto la luna", en: "all the gold that is beneath the moon", zh: "月下所有黄金，也不能使一个灵魂停歇。" }
      ]
    },
    {
      id: "inf-08",
      canto: "第八歌",
      title: "泥中的旧怨",
      premise: "一次佛罗伦萨人的相认，让旅人自己的敌意进入审判。",
      background: "assets/canto8-styx-v1.png",
      backgroundAlt: "冥河泥沼、弗莱居阿斯的小舟与远处的狄斯城",
      weather: "mist",
      character: { name: "泥中站起的人", role: "身份尚未确认", image: "assets/character-filippo-v1.png" },
      observations: [
        { id: "c8-boat", label: "看下沉的船身", position: ["28%", "43%"], title: "活人的重量改变了渡船", note: "你的重量让船身下沉，说明你并非一个不留痕迹的旁观者。", ref: "Inf. VIII.25–30" },
        { id: "c8-accent", label: "听他的质问", position: ["62%", "38%"], title: "他先发现你仍然活着", note: "他问你为何在死期以前来到这里，却没有报上自己的姓名；相认还没有完成。", ref: "Inf. VIII.31–39" },
        { id: "c8-reaction", label: "留意自己的回答", position: ["76%", "19%"], title: "你没有先回答自己的姓名", note: "面对“你是谁”的质问，你先反问对方的身份；敌意已经出现在相认以前。", ref: "Inf. VIII.31–39" }
      ],
      lensObservations: {
        order: { id: "c8-grip", label: "使用辨行动", position: ["20%", "24%"], title: "回应、阻拦与停留观看是三个动作", note: "先把三个动作分开，冲突升级时才能判断自己究竟选择了什么。", ref: "Inf. VIII.31–63" },
        witness: {
          id: "c8-feud", label: "使用追姓名", position: ["20%", "24%"],
          title: "相认时，也要记录是谁先带着敌意开口", note: "叫出对方姓名以前，先保留双方最初说过的话，不把自己写成没有过去的法官。", ref: "Inf. VIII.31–61",
          targets: [
            { id: "mark-c8-stranger", label: "先记录这个没有报姓名的人", short: "泥中人", title: "一个没有报姓名的人先开了口", note: "你保存他的第一句质问，不提前把他写成抽象的愤怒者。", ref: "Inf. VIII.31–39" },
            { id: "mark-c8-self", label: "也记录自己没有回答姓名", short: "旅人自己", title: "旅人也回避了对方的问题", note: "他问你是谁，你却先反问并表现敌意；相认不是单方面发生的。", ref: "Inf. VIII.31–61" }
          ]
        },
        reader: { id: "c8-pleasure", label: "使用校叙词", position: ["20%", "24%"], title: "别让稍后的称赞替你判断愤怒", note: "等维吉尔开口时，留意他的赞许是否让你的敌意显得天然正确。", ref: "Inf. VIII.43–63" }
      },
      investigationTitle: "先记住相认以前发生了什么",
      investigationHint: "你还没有认出他。选择三处细节，分清他的质问、你的回答和渡船的处境。",
      readyTitle: "泥中的人仍在船边",
      readyHint: "相认以前的细节已经记下。现在继续听他开口。",
      proceedLabel: "继续回应泥中的人",
      intro: [
        { type: "渡沼", speaker: "旁白", text: "摆渡者弗莱居阿斯把小舟推入死水。活人的重量使船身比平时下沉；远处，狄斯城的铁墙被永恒火焰烧成暗红。", source: "Inf. VIII.13–30" },
        { type: "拦问", speaker: "泥中的灵魂", text: "一个满身污泥的人突然从水面立起，与船并行：“你是谁，竟在死期以前来到这里？”他没有报上姓名。", source: "Inf. VIII.31–36" }
      ],
      encounter: [
        { type: "相认", speaker: "旁白", text: "“我认得你，即使满身污泥。”话一出口，菲利波·阿尔真蒂的姓名终于从佛罗伦萨的记忆里浮现。", source: "Inf. VIII.37–39", character: { name: "菲利波·阿尔真蒂", role: "佛罗伦萨贵族 · 愤怒者", image: "assets/character-filippo-v1.png" } },
        { type: "敌意", speaker: "旁白", text: "你叫他继续留在泥里受苦。这不像一个陌生旅人的回答，而像一个佛罗伦萨人早已怀有的厌恶。", source: "据 Inf. VIII.37–42 改写" },
        { type: "袭击", speaker: "旁白", text: "菲利波听见后把双手伸向船。维吉尔上前拦住他，弗莱居阿斯仍握着桨，等你决定是否立刻离开。", source: "Inf. VIII.40–45" }
      ],
      prompt: "菲利波的双手已经伸向船。你怎样结束这场冲突？",
      choices: [
        { lens: "order", requires: "c8-boat", label: "挡开他的手，命令弗莱居阿斯继续划", hint: "渡船会立刻离开；你将看不到他随后受罚", evidence: "boundary", result: { type: "离开冲突", speaker: "旁白", text: "你挡住伸来的手，维吉尔顺势把菲利波推回水中。船没有停；身后传来撕打和姓名的喊声，你没有回头。", source: "据 Inf. VIII.40–63 改写" } },
        { lens: "witness", requires: "c8-accent", label: "叫出“菲利波”，也把自己先前的敌意记在旁边", hint: "姓名和双方的反应都会进入记录；渡船不会立刻离开", evidence: "privateHistory", result: { type: "姓名被夺走", speaker: "旁白", text: "你写下“菲利波·阿尔真蒂”，又补上一句：“我在认出他时已经希望他受罚。”泥中众魂随即重复他的姓名，扑向他。姓名留下了，敌意也没有被藏起来。", source: "据 Inf. VIII.40–63 改写" } },
        { lens: "reader", requires: "c8-reaction", label: "承认自己希望他受罚，请维吉尔让船先离开", hint: "你会先离开现场，再检查维吉尔的称赞怎样影响你", evidence: "cruelPleasure", result: { type: "赞许的诱惑", speaker: "旁白", text: "维吉尔推开菲利波，称赞你的愤怒。船划开以后，你把这句称赞与自己先前的话并排记下，没有让赞许替你证明反应正确。", source: "据 Inf. VIII.40–63 改写" } }
      ],
      shared: [
        { type: "城门", speaker: "旁白", text: "小舟抵达狄斯城。守门的堕落天使只允许维吉尔靠近，听完他的话便关上城门；这是第一次，维吉尔的解释和权威都没能让守门者让路。", source: "Inf. VIII.67–130" }
      ],
      quote: "“我认得你，即使你满身污泥。”",
      quoteSource: "《地狱篇》VIII.37–39 · 据原文意译",
      sources: [
        { ref: "VIII.31–39", it: "ch’i’ ti conosco, ancor sie lordo tutto", en: "For thee I know, though thou art all defiled", zh: "我认得你，即使你满身污泥。" },
        { ref: "VIII.58–63", it: "A Filippo Argenti!", en: "At Philippo Argenti!", zh: "泥中的众魂喊着菲利波的名字，向他扑去。" }
      ]
    },
    {
      id: "inf-09",
      canto: "第九歌",
      title: "不该直视之物",
      premise: "当一眼足以终止旅程，闭眼也成为行动。",
      background: "assets/canto8-styx-v1.png",
      backgroundAlt: "狄斯城外的冥河与红色铁城",
      weather: "embers",
      character: null,
      observations: [
        { id: "c9-gate", label: "回想紧闭城门", position: ["74%", "32%"], title: "维吉尔没能叫开城门", note: "守门者拒绝了他的交涉，你们第一次只能停在原地等待援手。", ref: "Inf. VIII.79–130; IX.1–30" },
        { id: "c9-hands", label: "感受遮眼的手", position: ["28%", "49%"], title: "警告之后，还有一双真正遮住视线的手", note: "维吉尔亲自执行保护，没有把风险全留给你的自制。", ref: "Inf. IX.55–60" },
        { id: "c9-voices", label: "听城楼三个方位", position: ["55%", "21%"], title: "复仇女神有不同姓名与位置", note: "墨纪拉、阿勒克托与提西福涅不是一团无差别的恐怖。", ref: "Inf. IX.37–51" }
      ],
      lensObservations: {
        order: { id: "c9-limit", label: "使用辨行动", position: ["18%", "25%"], title: "危险以一眼为单位", note: "闭眼必须赶在美杜莎出现以前完成；迟疑本身也会造成后果。", ref: "Inf. IX.52–60" },
        witness: {
          id: "c9-names", label: "使用追姓名", position: ["18%", "25%"],
          title: "为威胁命名可以保留差异，但不能取消危险", note: "记录三位复仇女神，不等于获得直视美杜莎的安全许可。", ref: "Inf. IX.37–60",
          targets: [
            { id: "mark-c9-furies", label: "分别写下三位复仇女神", short: "三位复仇女神", title: "恐怖由三个声音组成", note: "墨纪拉、阿勒克托与提西福涅被分别记录，不再合成一团威胁。", ref: "Inf. IX.37–51" },
            { id: "mark-c9-virgil", label: "记录维吉尔遮眼的动作", short: "维吉尔的双手", title: "引路人也会迟疑，也会伸手保护", note: "你同时记下他的迟疑和遮眼动作，而不只记住最后那道命令。", ref: "Inf. IX.1–30, 55–60" }
          ]
        },
        reader: { id: "c9-veil", label: "使用校叙词", position: ["18%", "25%"], title: "诗在最危险的时刻叫读者停下来解释", note: "它邀请读者寻找隐藏含义，却没有说明哪一种解释才是唯一答案。", ref: "Inf. IX.61–63" }
      },
      investigationTitle: "闭上眼以后，重新确认你仍能依靠什么",
      investigationHint: "选择三处已经记住或仍能听见的细节。这里的观察不等于直视。",
      readyTitle: "城楼上的声音正在逼近",
      readyHint: "你不能继续观看，只能依靠刚才留下的三条线索。",
      proceedLabel: "在闭眼中作出决定",
      intro: [
        { type: "等待", speaker: "旁白", text: "维吉尔从紧闭的城门前返回。他试图掩饰迟疑，却不断望向沼泽远处，等待一种比自己更高的权力。", source: "Inf. IX.1–30" },
        { type: "城楼", speaker: "维吉尔", text: "三位复仇女神登上燃烧的塔顶：墨纪拉在左，阿勒克托在右，提西福涅居中。她们撕扯胸口，呼唤美杜莎把你变成石头。", source: "Inf. IX.34–54" },
        { type: "警告", speaker: "维吉尔", text: "“转过去，闭上眼睛。若你看见美杜莎，就再也没有返回人间的可能。”他没有只相信你的自制，还伸手遮住你的眼睛。", source: "Inf. IX.55–60" }
      ],
      encounter: [],
      prompt: "你已经不能观看。接下来依靠哪条线索行动？",
      choices: [
        { lens: "order", requires: "c9-hands", label: "不挣脱维吉尔的手，等他主动松开", hint: "你会等到维吉尔松手，不尝试看清美杜莎", evidence: "acceptedLimit", result: { type: "及时闭眼", speaker: "旁白", text: "你没有试探最后一眼。轰鸣越过沼泽时，维吉尔才松开手：一位天上的使者已经踏过水面，用短杖打开城门。", source: "Inf. IX.55–105", character: { name: "天使使者", role: "打开狄斯城门的援助", image: "assets/character-celestial.png" } } },
        { lens: "witness", requires: "c9-voices", label: "闭着眼，分别记下左、右和中央的声音", hint: "你会根据声音记下三位复仇女神的位置", evidence: "furyVoices", result: { type: "声音中断", speaker: "旁白", text: "墨纪拉、阿勒克托、提西福涅的声音仍在三个方位。随后一声巨响压过她们；你睁眼时，天上的使者已用短杖碰开城门。", source: "Inf. IX.37–105", character: { name: "天使使者", role: "打开狄斯城门的援助", image: "assets/character-celestial.png" } } },
        { lens: "reader", requires: "c9-gate", label: "不再猜美杜莎长什么样，压下“非看不可”的冲动", hint: "你会把注意力从怪物转向自己的观看冲动", evidence: "gazeTrap", result: { type: "观看欲退去", speaker: "旁白", text: "你不再想象怪物的脸。下一次睁眼，改变局面的不是你看清了什么，而是天上的使者用短杖打开了城门。", source: "据 Inf. IX.52–105 改写", character: { name: "天使使者", role: "打开狄斯城门的援助", image: "assets/character-celestial.png" } } }
      ],
      shared: [
        { type: "进入狄斯", speaker: "维吉尔", text: "“现在可以睁眼。”城内不是宫殿，而是一片被火烧热的墓园；每一具石棺都敞着盖子。", source: "Inf. IX.106–133" }
      ],
      quote: "理智健全的人，请看诗句帷幕下隐藏的教义。",
      quoteSource: "《地狱篇》IX.61–63 · 据原文意译",
      sources: [
        { ref: "IX.58–60", it: "con le sue ancor non mi chiudessi", en: "to blind me with his own", zh: "维吉尔亲手盖住旅人的眼睛。" },
        { ref: "IX.61–63", it: "mirate la dottrina che s’asconde", en: "Observe the doctrine that conceals itself", zh: "请看诗句帷幕之下隐藏的教义。" }
      ]
    },
    {
      id: "inf-10",
      canto: "第十歌",
      title: "过去时的伤口",
      premise: "一次迟疑，让“曾经”变成了父亲听见的死讯。",
      background: "assets/canto10-tombs-v1.png",
      backgroundAlt: "狄斯城内燃烧的墓园与敞开的石棺",
      weather: "embers",
      character: { name: "石棺中站起的人", role: "托斯卡纳口音 · 身份尚未确认", image: "assets/character-farinata-v1.png" },
      observations: [
        { id: "c10-tombs", label: "检查敞开的石棺", position: ["70%", "32%"], title: "石棺将在最后审判以后闭合", note: "相信灵魂随身体死亡的人，如今在敞开的坟墓中等待身体复归。", ref: "Inf. X.7–15" },
        { id: "c10-tense-heard", label: "重听那句过去时", position: ["61%", "19%"], title: "父亲抓住的不是整句话，而是“曾经”", note: "他不知道现在发生的事，又把你的停顿当成了死亡的确认。", ref: "Inf. X.61–72" },
        { id: "c10-father", label: "回想父亲的问题", position: ["35%", "46%"], title: "两个问题没有得到回答", note: "圭多为什么没有同行？他是否还活着？父亲倒下以前都没有听见回答。", ref: "Inf. X.52–72" }
      ],
      lensObservations: {
        order: { id: "c10-knowledge", label: "使用辨行动", position: ["21%", "24%"], title: "误解由三件事接连造成", note: "父亲看不见现在；你用了过去时；误会出现后，你没有立刻纠正。", ref: "Inf. X.61–72, 97–108" },
        witness: {
          id: "c10-interruption", label: "使用追姓名", position: ["21%", "24%"],
          title: "父亲的提问被法里纳塔的政治谈话夹在中间", note: "卡瓦尔坎特只出现了片刻；如果不主动保存，他的问题很快会被流放预言盖过去。", ref: "Inf. X.52–93",
          targets: [
            { id: "mark-c10-father", label: "保存卡瓦尔坎特的两个问题", short: "父亲的问题", title: "两个没有得到回答的问题", note: "你原样记录：圭多为什么不在？他还活着吗？", ref: "Inf. X.52–72" },
            { id: "mark-c10-farinata", label: "记录法里纳塔没有回头", short: "法里纳塔的沉默", title: "政治雄辩没有为父亲停下", note: "卡瓦尔坎特倒回墓中时，法里纳塔没有转头，随即接回自己的党争。", ref: "Inf. X.73–93" }
          ]
        },
        reader: { id: "c10-tense", label: "使用校叙词", position: ["21%", "24%"], title: "诗先让误会发生，后来才解释原因", note: "父亲已经倒下，到第97行以后，读者才知道亡魂为什么看不见现在。", ref: "Inf. X.61–72, 97–108" }
      },
      investigationTitle: "卡瓦尔坎特已经倒下：回看误解如何发生",
      investigationHint: "选择三处细节。你不能追回父亲，但可以分清过去时、知识缺口和那次停顿各自造成了什么。",
      readyTitle: "法里纳塔还在等待你的回应",
      readyHint: "父亲的声音已经消失。你只能决定哪一部分会进入记录。",
      proceedLabel: "整理这次无法追回的误解",
      intro: [
        { type: "第六圈", speaker: "维吉尔", text: "“这些敞开的墓属于伊壁鸠鲁及其追随者——他们认为灵魂随身体一同死亡。最后审判以后，石盖才会永远闭合。”", source: "Inf. X.1–15" },
        { type: "有人起身", speaker: "旁白", text: "一具石棺中传出托斯卡纳口音。法里纳塔从腰部以上挺立起来，胸膛和额头笔直，仿佛整个地狱都不值得他低头。", source: "Inf. X.22–39", character: { name: "法里纳塔·德利·乌贝尔蒂", role: "佛罗伦萨吉伯林派领袖", image: "assets/character-farinata-v1.png" } },
        { type: "政治记忆", speaker: "法里纳塔", text: "他问你的祖先属于哪一派。得知答案后，他说自己曾两次驱散你的同党；你立刻回击：他们两次都回来了。", source: "Inf. X.40–51" },
        { type: "父亲起身", speaker: "旁白", text: "相邻石棺里，另一道影子只露出下巴。他是圭多的父亲卡瓦尔坎特，四下寻找后急问：“我的儿子在哪里？他为什么不和你同行？”", source: "Inf. X.52–60", character: { name: "卡瓦尔坎特·德·卡瓦尔坎蒂", role: "圭多之父 · 佛罗伦萨亡魂", image: "assets/character-infernal-soul.png" } },
        { type: "一句过去时", speaker: "旅人", text: "你答：“带我来到这里的不是自己的才智，而是维吉尔；圭多也许曾经不敬重他。”父亲没有听完整句，只抓住了“曾经”。", source: "据 Inf. X.61–63 改写" },
        { type: "误认", speaker: "卡瓦尔坎特", text: "“你说‘曾经’？他难道已经不在人世？”你迟疑片刻，没有立即回答；父亲把这次停顿当成确认，随即倒回墓中。", source: "Inf. X.64–72" },
        { type: "谈话复位", speaker: "旁白", text: "法里纳塔没有转头，仿佛父亲从未出现。他接回刚才的党争，预言你不久也会尝到无法返回佛罗伦萨的痛苦。", source: "Inf. X.73–93", character: { name: "法里纳塔·德利·乌贝尔蒂", role: "佛罗伦萨吉伯林派领袖", image: "assets/character-farinata-v1.png" } }
      ],
      encounter: [],
      prompt: "卡瓦尔坎特已经消失，法里纳塔仍像没有听见一样站着。你怎样处理刚才发生的事？",
      choices: [
        { lens: "order", requires: "c10-tombs", label: "打断法里纳塔：你能预见流放，为何不知道圭多还活着？", hint: "法里纳塔会解释亡魂为什么看不见现在", evidence: "distantKnowledge", result: { type: "知识的边界", speaker: "法里纳塔", text: "“我们像远视者，只看得见尚远的事。事情一到眼前，知识便熄灭；若没有新来的亡魂，我们对现在一无所知。”", source: "Inf. X.94–108" } },
        { lens: "witness", requires: "c10-father", label: "转向空墓，原样记下父亲没有得到回答的两个问题", hint: "你会保存父亲的问题，不再追问亡魂知识的规则", evidence: "fatherQuestion", result: { type: "无人回答", speaker: "旁白", text: "“圭多为什么不在？他还活着吗？”墓中没有回应。法里纳塔也没有停下；这两句话只能由你带走。", source: "Inf. X.52–78" } },
        { lens: "reader", requires: "c10-tense-heard", label: "圈出“曾经”和随后的迟疑，记录误解发生在哪一刻", hint: "你会标出造成误会的词和停顿，不再追问法里纳塔", evidence: "tenseTrap", result: { type: "迟到的修正", speaker: "页边记录", text: "你把“曾经”改成“仍然活着”，但卡瓦尔坎特已经听不见。改对句子无法撤销迟疑造成的结果。", source: "据 Inf. X.61–72 改写" } }
      ],
      shared: [
        { type: "继续前行", speaker: "旁白", text: "维吉尔催你记住流放预言，并说等见到将在更高处接引你的贝雅特丽齐，她会进一步解释这条道路。你们离开墓园，朝更深处传来的恶臭走去。", source: "Inf. X.118–136" }
      ],
      quote: null,
      sources: [
        { ref: "X.35–36", it: "s’ergea col petto e con la fronte", en: "he uprose erect with breast and front", zh: "他挺起胸膛和额头，仿佛蔑视整个地狱。" },
        { ref: "X.67–72", it: "dicesti ‘elli ebbe’? non viv’ elli ancora?", en: "Saidst thou—he had? Is he not still alive?", zh: "你说“他曾经”？难道他已经不在人世？" },
        { ref: "X.100–105", it: "Noi veggiam, come quei c’ha mala luce", en: "We see, like those who have imperfect sight", zh: "我们像视力不佳的人，只看得见遥远的事。" }
      ]
    }
  ];

  const state = {
    role: null,
    chapter: 0,
    queue: [],
    queueIndex: 0,
    queueDone: null,
    evidence: new Set(),
    judgments: new Set(),
    witnessMarks: new Map(),
    lenses: new Set(),
    observationsInChapter: 0,
    safety: 3,
    fractures: 0,
    anchorAvailable: false,
    anchorUsed: false,
    anchorLabel: null,
    soundOn: false
  };

  function savedRole() {
    try { return localStorage.getItem("dante_manual"); } catch { return null; }
  }

  function saveRole(role) {
    try { localStorage.setItem("dante_manual", role); } catch { /* local preview may deny storage */ }
  }

  function renderGate() {
    const previous = savedRole();
    $("#gateText").textContent = previous && manuals[previous]
      ? `你仍带着《${manuals[previous].title}》。遵守它能保持方向；借用别册的方法会承担风险，也会补进本册遗漏的事实。`
      : "选择一本手册。遵守它能保持方向；借用别册的方法会承担风险，也会补进本册遗漏的事实。";
    $("#roleOptions").replaceChildren(...Object.entries(manuals).map(([id, manual]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = "<span></span><strong></strong><small></small>";
      button.querySelector("span").textContent = manual.glyph + " · " + manual.ability;
      button.querySelector("strong").textContent = manual.title;
      button.querySelector("small").textContent = manual.intro;
      button.addEventListener("click", () => startArc(id));
      return button;
    }));
    const actions = $("#gateActions");
    actions.replaceChildren();
    if (previous && manuals[previous]) {
      const keep = document.createElement("button");
      keep.type = "button";
      keep.textContent = "继续使用《" + manuals[previous].title + "》";
      keep.addEventListener("click", () => startArc(previous));
      actions.append(keep);
    }
  }

  function resetState() {
    state.chapter = 0;
    state.queue = [];
    state.queueIndex = 0;
    state.queueDone = null;
    state.evidence = new Set();
    state.judgments = new Set();
    state.witnessMarks = new Map();
    state.lenses = new Set();
    state.observationsInChapter = 0;
    state.safety = 3;
    state.fractures = 0;
    state.anchorAvailable = false;
    state.anchorUsed = false;
    state.anchorLabel = null;
  }

  function startArc(role) {
    resetState();
    state.role = role;
    saveRole(role);
    $("#arc").dataset.role = role;
    $("#roleGate").hidden = true;
    $("#result").hidden = true;
    $("#play").hidden = false;
    configureManual();
    renderProgress();
    renderState();
    startSound();
    enterChapter(0);
  }

  function configureManual() {
    const manual = manuals[state.role];
    $("#manualGlyph").textContent = manual.glyph;
    $("#manualTitle").textContent = manual.title;
    $("#manualIntro").textContent = manual.intro;
    $("#manualWarning").textContent = manual.warning;
    $("#manualRules").replaceChildren(...manual.rules.map((rule, index) => {
      const li = document.createElement("li");
      li.textContent = rule;
      li.dataset.rule = index;
      return li;
    }));
    renderEvidence();
  }

  function renderProgress() {
    $("#cantoProgress").replaceChildren(...chapters.map((chapter, index) => {
      const li = document.createElement("li");
      li.textContent = chapter.canto.replace("第", "").replace("歌", "");
      li.classList.toggle("is-current", index === state.chapter);
      li.classList.toggle("is-complete", index < state.chapter);
      return li;
    }));
  }

  function renderState() {
    $("#safetyPips").replaceChildren(...[0, 1, 2].map((index) => {
      const pip = document.createElement("i");
      pip.classList.toggle("is-full", index < state.safety);
      return pip;
    }));
    $("#fractureCount").textContent = state.fractures;
    $("#evidenceCount").textContent = state.evidence.size;
    const anchor = $("#witnessAnchorState");
    anchor.hidden = state.role !== "witness";
    anchor.classList.remove("is-ready", "is-used");
    if (state.anchorAvailable) {
      anchor.classList.add("is-ready");
      $("#witnessAnchorValue").textContent = "就绪 · " + state.anchorLabel;
    } else if (state.anchorUsed) {
      anchor.classList.add("is-used");
      $("#witnessAnchorValue").textContent = "已消耗";
    } else {
      $("#witnessAnchorValue").textContent = "未建立";
    }
  }

  function setCharacter(character) {
    if (!character) {
      $("#character").hidden = true;
      return;
    }
    $("#characterImage").src = character.image;
    $("#characterImage").alt = character.name + "的人物形象";
    $("#characterName").textContent = character.name;
    $("#characterRole").textContent = character.role;
    $("#character").hidden = false;
  }

  function enterChapter(index) {
    state.chapter = index;
    state.observationsInChapter = 0;
    state.anchorAvailable = false;
    state.anchorUsed = false;
    state.anchorLabel = null;
    const chapter = chapters[index];
    $("#interlude").hidden = true;
    $("#play").hidden = false;
    $("#chapterIndex").textContent = chapter.canto;
    $("#chapterTitle").textContent = chapter.title;
    $("#chapterPremise").textContent = chapter.premise;
    $("#sceneImage").src = chapter.background;
    $("#sceneImage").alt = chapter.backgroundAlt;
    $("#arc").dataset.weather = chapter.weather;
    setCharacter(chapter.character);
    $("#observationLayer").hidden = true;
    $("#investigation").hidden = true;
    $("#witnessTargets").hidden = true;
    $("#witnessTargets").replaceChildren();
    $("#dialogue").hidden = false;
    renderProgress();
    renderState();
    renderSources();
    play(chapter.intro, showInvestigation);
  }

  function showLine(line) {
    $("#dialogue").hidden = false;
    $("#lineType").textContent = line.type || "现场";
    $("#speaker").textContent = line.speaker || "旁白";
    $("#source").textContent = line.source || "";
    $("#lineText").textContent = line.text;
    $("#choices").replaceChildren();
    $("#continueButton").hidden = false;
    if ("character" in line) setCharacter(line.character);
  }

  function play(lines, done) {
    state.queue = lines;
    state.queueIndex = 0;
    state.queueDone = done;
    showLine(lines[0]);
  }

  function advance() {
    if (!$("#manual").hidden || $("#continueButton").hidden || $("#dialogue").hidden) return;
    state.queueIndex += 1;
    if (state.queueIndex < state.queue.length) {
      showLine(state.queue[state.queueIndex]);
      audio.page();
      return;
    }
    const done = state.queueDone;
    state.queue = [];
    state.queueDone = null;
    if (done) done();
  }

  function showDecision() {
    const chapter = chapters[state.chapter];
    $("#observationLayer").hidden = true;
    $("#investigation").hidden = true;
    $("#dialogue").hidden = false;
    $("#lineType").textContent = "你的判断";
    $("#speaker").textContent = chapter.canto;
    $("#source").textContent = "选择会改变方向感与最终记录";
    $("#lineText").textContent = chapter.prompt;
    $("#continueButton").hidden = true;
    $("#choices").replaceChildren(...chapter.choices.map((choice) => {
      const button = document.createElement("button");
      const aligned = choice.lens === state.role;
      const unlocked = aligned || state.evidence.has(choice.requires);
      button.type = "button";
      button.disabled = !unlocked;
      button.innerHTML = "<span></span><small></small><em></em>";
      button.querySelector("span").textContent = choice.label;
      button.querySelector("small").textContent = unlocked ? choice.hint : "观察现场后才能提出这项判断";
      const protectedCrossing = state.role === "witness" && state.anchorAvailable && !aligned;
      button.querySelector("em").textContent = unlocked
        ? (aligned
          ? manuals[choice.lens].title + " · 安全"
          : manuals[choice.lens].title + (protectedCrossing ? " · 消耗见证锚点" : " · 越出本册"))
        : manuals[choice.lens].title + " · 尚缺证据";
      button.addEventListener("click", () => choose(choice));
      return button;
    }));
  }

  function observationSet() {
    const chapter = chapters[state.chapter];
    const roleItem = chapter.lensObservations[state.role];
    return [...chapter.observations, { ...roleItem, lens: state.role }];
  }

  function showInvestigation() {
    const chapter = chapters[state.chapter];
    $("#dialogue").hidden = true;
    $("#observationLayer").hidden = false;
    $("#investigation").hidden = false;
    $("#finishObservation").hidden = true;
    $("#witnessTargets").hidden = true;
    $("#witnessTargets").replaceChildren();
    $("#investigationTitle").textContent = chapter.investigationTitle;
    $("#investigationHint").textContent = chapter.investigationHint;
    const items = observationSet();
    $("#observationLayer").replaceChildren(...items.map((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "observation-hotspot";
      button.style.left = item.position[0];
      button.style.top = item.position[1];
      button.innerHTML = "<b></b><span></span>";
      button.querySelector("b").textContent = String(index + 1).padStart(2, "0");
      button.querySelector("span").textContent = item.label;
      button.addEventListener("click", () => observe(item, button));
      return button;
    }));
    $("#finishObservation").textContent = chapter.proceedLabel;
    renderObservationBudget();
  }

  function observe(item, button) {
    if (button.classList.contains("is-seen") || state.observationsInChapter >= 3) return;
    if (state.role === "witness" && item.lens === "witness" && item.targets?.length) {
      showWitnessTargets(item, button);
      return;
    }
    commitObservation(item, button);
  }

  function showWitnessTargets(item, hotspot) {
    const targets = $("#witnessTargets");
    $("#investigationTitle").textContent = "追姓名：你要替谁留下位置？";
    $("#investigationHint").textContent = "这条记录会成为本歌的见证锚点。越出见证之书一次时，它能替你保住方向。";
    $$(".observation-hotspot").forEach((button) => { button.disabled = true; });
    targets.hidden = false;
    targets.replaceChildren(...item.targets.map((target) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = "<strong></strong><small></small>";
      button.querySelector("strong").textContent = target.label;
      button.querySelector("small").textContent = target.note;
      button.addEventListener("click", () => {
        state.witnessMarks.set(chapters[state.chapter].id, target.id);
        state.anchorAvailable = true;
        state.anchorUsed = false;
        state.anchorLabel = target.short;
        targets.hidden = true;
        targets.replaceChildren();
        commitObservation({ ...target, lens: "witness" }, hotspot);
        showToast("追姓名：" + target.short + "成为本歌的见证锚点。");
      });
      return button;
    }));
  }

  function commitObservation(item, button) {
    const chapter = chapters[state.chapter];
    button.classList.add("is-seen");
    state.observationsInChapter += 1;
    evidenceCatalog[item.id] = {
      lens: item.lens || "site",
      title: item.title,
      note: item.note,
      ref: item.ref
    };
    state.evidence.add(item.id);
    $("#investigationTitle").textContent = item.title;
    $("#investigationHint").textContent = item.note;
    renderObservationBudget();
    renderEvidence();
    renderState();
    if (state.observationsInChapter >= 3) {
      $$(".observation-hotspot").forEach((hotspot) => { hotspot.disabled = true; });
      $("#investigationTitle").textContent = chapter.readyTitle;
      $("#investigationHint").textContent = chapter.readyHint;
      $("#finishObservation").hidden = false;
    } else {
      $$(".observation-hotspot").forEach((hotspot) => {
        hotspot.disabled = hotspot.classList.contains("is-seen");
      });
    }
  }

  function renderObservationBudget() {
    $("#observationDots").replaceChildren(...[0, 1, 2].map((index) => {
      const dot = document.createElement("i");
      dot.classList.toggle("is-full", index < state.observationsInChapter);
      return dot;
    }));
    $("#observationLabel").textContent = "已观察 " + state.observationsInChapter + " / 3";
  }

  function continueFromObservation() {
    const chapter = chapters[state.chapter];
    $("#observationLayer").hidden = true;
    $("#investigation").hidden = true;
    if (chapter.encounter?.length) play(chapter.encounter, showDecision);
    else showDecision();
  }

  function choose(choice) {
    const chapter = chapters[state.chapter];
    const aligned = choice.lens === state.role;
    state.evidence.add(choice.evidence);
    state.judgments.add(choice.evidence);
    state.lenses.add(choice.lens);
    const protectedCrossing = !aligned && state.role === "witness" && state.anchorAvailable;
    if (aligned) {
      state.safety = Math.min(3, state.safety + 1);
      showToast(manuals[state.role].title + "确认：这条判断符合本册规则。");
    } else {
      state.fractures += 1;
      if (protectedCrossing) {
        state.anchorAvailable = false;
        state.anchorUsed = true;
        showToast("见证锚点已消耗：" + state.anchorLabel + "使你越出本册时保持方向。");
      } else {
        state.safety = Math.max(0, state.safety - 1);
        showToast("你越出了本册：方向感下降，但另一种事实进入记录。");
      }
    }
    renderState();
    renderEvidence();
    const outcome = choice.result
      ? { ...choice.result }
      : { type: "选择的后果", speaker: "页边记录", text: choice.outcome, source: evidenceCatalog[choice.evidence].ref };
    if (choice.character && !outcome.character) outcome.character = choice.character;
    if (chapter.id === "inf-09" && state.safety === 0) {
      play([{
        type: "迟疑",
        speaker: "旁白",
        text: "几种判断在脑中互相争执。你知道应该闭眼，却慢了足以看见城楼反光的一瞬；维吉尔的手落下时，石化已经从视野边缘开始。",
        source: "据 Inf. IX.52–60 改写"
      }], showPetrifiedEnding);
      return;
    }
    play([outcome, ...chapter.shared], completeChapter);
  }

  function completeChapter() {
    const chapter = chapters[state.chapter];
    if (state.chapter === chapters.length - 1) {
      showFinale();
      return;
    }
    $("#play").hidden = true;
    $("#interludeLabel").textContent = chapter.canto + "之后";
    $("#interludeQuote").textContent = chapter.quote;
    $("#interludeSource").textContent = chapter.quoteSource;
    $("#nextCanto").textContent = "进入" + chapters[state.chapter + 1].canto;
    $("#interlude").hidden = false;
  }

  function showPetrifiedEnding() {
    $("#play").hidden = true;
    $("#result").hidden = false;
    $("#resultKicker").textContent = "滞留结局 · 城门上的石像";
    $("#resultTitle").textContent = "正确的动作来得太迟。";
    $("#resultBody").textContent = "连续越出手册耗尽了方向感。最后一次判断本身并没有错，但你迟疑了足以让美杜莎起效的一瞬。地狱没有杀死你；它把你固定成了一个再也不能修正自己的解释。";
    renderResultRecord();
  }

  function showFinale() {
    $("#play").hidden = true;
    $("#finale").hidden = false;
    const hidden = state.fractures >= 2 && state.lenses.size === 3 && state.safety > 0;
    const options = [
      {
        id: "manual",
        title: "让《" + manuals[state.role].title + "》整理全部记录",
        note: "你会安全地继续下降，但其余两种读法不会进入结论。"
      },
      {
        id: "archive",
        title: "保留彼此冲突的笔记，不替它们制造统一答案",
        note: "不同记录会并排留下，交给后来的读者重新核对。"
      },
      {
        id: "plural",
        title: "要求手册在最后一页写下自己的错误",
        note: hidden ? "三种阅读方法都已进入记录，且你仍保有方向感。" : "尚未显现：需要至少两次越出本册，并实际使用三种阅读方法。",
        locked: !hidden
      }
    ];
    $("#finalChoices").replaceChildren(...options.map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.disabled = option.locked;
      button.innerHTML = "<strong></strong><span></span>";
      button.querySelector("strong").textContent = option.title;
      button.querySelector("span").textContent = option.note;
      button.addEventListener("click", () => finish(option.id));
      return button;
    }));
  }

  function finish(kind) {
    $("#finale").hidden = true;
    $("#result").hidden = false;
    const results = {
      manual: {
        kicker: "结局 · 安全的单一解释",
        title: "道路清楚了，地狱也变窄了。",
        body: "手册解释了沿途的危险，也删去了无法归类的记录。你安全抵达更深处，却只留下每个人符合本册规则的那一面。规则没有说谎；它只是没有承认遗漏。"
      },
      archive: {
        kicker: "结局 · 未完成的复数档案",
        title: "你没有强迫证据互相同意。",
        body: "行动、姓名和文字的作用被并排保存。它们有时互相纠正，有时仍旧冲突。你没有得到永远正确的规则，却给后来者留下了重新核对原文与历史的入口。"
      },
      plural: {
        kicker: "隐藏结局 · 手册的错页",
        title: "规则第一次把自己也列为证据。",
        body: "你没有让任何一本手册垄断道路。衡量之书承认判断会抹去姓名；见证之书承认痛苦的讲述也有强调和省略；回读之书承认看懂文字不能撤销伤害。你仍在地狱，却不再把安全误认为完整。"
      }
    };
    const result = results[kind];
    $("#resultKicker").textContent = result.kicker;
    $("#resultTitle").textContent = result.title;
    $("#resultBody").textContent = result.body;
    if (kind === "plural") {
      const falseRule = $("#manualRules").children[3];
      if (falseRule) falseRule.classList.add("is-lie");
      audio.resolve();
    }
    renderResultRecord();
  }

  function renderResultRecord() {
    const record = [...new Set([...state.witnessMarks.values(), ...state.judgments])];
    $("#resultRecord").replaceChildren(...record.map((id) => {
      const span = document.createElement("span");
      span.textContent = evidenceCatalog[id].title;
      return span;
    }));
  }

  function renderEvidence() {
    const items = [...state.evidence];
    if (!items.length) {
      const empty = document.createElement("p");
      empty.textContent = "还没有证据。每一歌只能作出一次最终判断；现场观察会决定哪些选项可用。";
      $("#evidenceList").replaceChildren(empty);
      return;
    }
    $("#evidenceList").replaceChildren(...items.map((id) => {
      const evidence = evidenceCatalog[id];
      const article = document.createElement("article");
      article.innerHTML = "<small></small><strong></strong><p></p>";
      article.querySelector("small").textContent = evidence.ref + " · " + (evidence.lens === "site" ? "现场" : manuals[evidence.lens].title);
      article.querySelector("strong").textContent = evidence.title;
      article.querySelector("p").textContent = evidence.note;
      return article;
    }));
  }

  function renderSources() {
    const sources = chapters[state.chapter].sources;
    $("#sourceList").replaceChildren(...sources.map((source) => {
      const article = document.createElement("article");
      article.innerHTML = "<small></small><p lang=\"it\"></p><p lang=\"en\"></p><p lang=\"zh-CN\"></p>";
      article.querySelector("small").textContent = "Inf. " + source.ref;
      const ps = article.querySelectorAll("p");
      ps[0].textContent = source.it;
      ps[1].textContent = source.en;
      ps[2].textContent = "中文校译：" + source.zh;
      return article;
    }));
  }

  function openManual(tab = "rules") {
    if (!state.role) return;
    $("#manual").hidden = false;
    switchTab(tab);
  }

  function closeManual() { $("#manual").hidden = true; }

  function switchTab(tab) {
    $$('[data-tab]').forEach((button) => button.classList.toggle("is-active", button.dataset.tab === tab));
    $$('[data-panel]').forEach((panel) => { panel.hidden = panel.dataset.panel !== tab; });
  }

  let toastTimer;
  function showToast(text) {
    clearTimeout(toastTimer);
    $("#toast").textContent = text;
    $("#toast").hidden = false;
    toastTimer = setTimeout(() => { $("#toast").hidden = true; }, 2600);
  }

  class Atmosphere {
    constructor() { this.context = null; this.master = null; }
    start() {
      if (this.context) {
        this.context.resume();
        this.master.gain.setTargetAtTime(.13, this.context.currentTime, .2);
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
      for (let i = 0; i < data.length; i++) { last = last * .987 + (Math.random() * 2 - 1) * .045; data[i] = last; }
      const noise = this.context.createBufferSource();
      const filter = this.context.createBiquadFilter();
      noise.buffer = buffer;
      noise.loop = true;
      filter.type = "bandpass";
      filter.frequency.value = 310;
      filter.Q.value = .55;
      noise.connect(filter).connect(this.master);
      noise.start();
      [48.99, 73.42, 98].forEach((frequency, index) => {
        const oscillator = this.context.createOscillator();
        const gain = this.context.createGain();
        oscillator.type = index ? "sine" : "triangle";
        oscillator.frequency.value = frequency;
        gain.gain.value = [.08, .028, .018][index];
        oscillator.connect(gain).connect(this.master);
        oscillator.start();
      });
      this.master.gain.linearRampToValueAtTime(.13, this.context.currentTime + 1.2);
    }
    stop() { if (this.context) this.master.gain.setTargetAtTime(.0001, this.context.currentTime, .12); }
    tone(frequency, duration, level = .025) {
      if (!this.context || !state.soundOn) return;
      const now = this.context.currentTime;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(level, now + .04);
      gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
      oscillator.connect(gain).connect(this.master);
      oscillator.start(now);
      oscillator.stop(now + duration + .05);
    }
    page() { this.tone(110, .32, .012); }
    resolve() { [220, 277.18, 329.63].forEach((note, i) => setTimeout(() => this.tone(note, 1.5, .03), i * 220)); }
  }

  const audio = new Atmosphere();
  function startSound() {
    state.soundOn = true;
    audio.start();
    $("#soundButton").setAttribute("aria-pressed", "true");
  }
  function toggleSound() {
    state.soundOn = !state.soundOn;
    if (state.soundOn) audio.start(); else audio.stop();
    $("#soundButton").setAttribute("aria-pressed", String(state.soundOn));
  }

  function restart() {
    audio.stop();
    state.soundOn = false;
    $("#soundButton").setAttribute("aria-pressed", "false");
    $("#result").hidden = true;
    $("#finale").hidden = true;
    $("#interlude").hidden = true;
    $("#play").hidden = true;
    $("#roleGate").hidden = false;
    renderGate();
  }

  function bind() {
    $("#continueButton").addEventListener("click", advance);
    $("#finishObservation").addEventListener("click", continueFromObservation);
    $("#nextCanto").addEventListener("click", () => enterChapter(state.chapter + 1));
    $("#manualButton").addEventListener("click", () => $("#manual").hidden ? openManual() : closeManual());
    $("#closeManual").addEventListener("click", closeManual);
    $$('[data-tab]').forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
    $("#soundButton").addEventListener("click", toggleSound);
    $("#replayArc").addEventListener("click", restart);
    addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        $("#manual").hidden ? openManual() : closeManual();
      } else if ((event.code === "Space" || event.key === "Enter") && $("#manual").hidden) {
        event.preventDefault();
        advance();
      } else if (event.key.toLowerCase() === "m") toggleSound();
    });
  }

  renderGate();
  bind();
})();
