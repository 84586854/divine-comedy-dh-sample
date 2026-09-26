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
      intro: "检查比喻、语法、沉默和阅读期待怎样参与事件。它能识别叙述陷阱，却可能把人物变成读者成长的材料。",
      rules: [
        "区分人物当时知道的事、后来叙述的事与读者补上的事。",
        "留意代词、时态和比喻；它们会制造行动后果。",
        "越像寓言的场景，越要检查谁被寓意遮住。",
        "只要识破文本机制，人物受到的伤害就已经得到解释。"
      ],
      warning: "第四条把解释当成补偿。看懂一种机制，并没有替其中的人承受后果。"
    }
  };

  const evidenceCatalog = {
    factionSparks: { lens: "order", title: "党争由骄傲、嫉妒与贪欲点燃", note: "恰科把佛罗伦萨的分裂追到三种欲望，而不只是一串党派胜负。", ref: "Inf. VI.64–75" },
    ciaccoName: { lens: "witness", title: "“恰科”是市民给他的称呼", note: "一个几乎被泥雨抹去的人，先要求旅人认出自己。", ref: "Inf. VI.40–57" },
    oracleUse: { lens: "reader", title: "旅人差点把恰科只当成预言工具", note: "同情之后立刻追问政治未来，暴露了提问者也在组织证词。", ref: "Inf. VI.58–90" },
    measuredUse: { lens: "order", title: "财富不是罪，失去尺度的使用才是", note: "吝啬与挥霍方向相反，却同样让财物支配行动。", ref: "Inf. VII.22–60" },
    erasedFaces: { lens: "witness", title: "失去尺度的人也失去了可辨认的面孔", note: "他们曾让财富吞没身份，如今连姓名也无法从队伍中恢复。", ref: "Inf. VII.37–57" },
    falseOpposites: { lens: "reader", title: "相反口号可能共享同一种占有欲", note: "“为什么紧握”与“为什么挥霍”互相指控，却被同一圆周绑定。", ref: "Inf. VII.25–35" },
    boundary: { lens: "order", title: "拒绝袭击不等于把报复称为正义", note: "让菲利波松开船舷是一项边界；享受他被撕扯是另一项行动。", ref: "Inf. VIII.31–63" },
    privateHistory: { lens: "witness", title: "旅人与泥中人共享佛罗伦萨旧怨", note: "叫出菲利波的姓名，也把看似普遍的正义重新放回私人政治史。", ref: "Inf. VIII.31–61" },
    cruelPleasure: { lens: "reader", title: "旅人正在享受仇敌受罚", note: "诗中的赞许语气不能自动证明这份快意没有问题。", ref: "Inf. VIII.37–63" },
    acceptedLimit: { lens: "order", title: "在城门前，服从保护也是行动", note: "维吉尔不仅命令旅人转身，还亲手遮住他的眼睛。", ref: "Inf. IX.52–60" },
    furyVoices: { lens: "witness", title: "三位复仇女神并非一团恐怖", note: "墨纪拉、阿勒克托与提西福涅分别占据城楼位置并发出声音。", ref: "Inf. IX.37–51" },
    gazeTrap: { lens: "reader", title: "美杜莎首先考验观看欲", note: "危险不只来自被看的怪物，也来自旅人非看不可的冲动。", ref: "Inf. IX.52–63" },
    distantKnowledge: { lens: "order", title: "亡魂能见远事，却不知眼前", note: "法里纳塔说明：未来接近现在时，他们的知识反而熄灭。", ref: "Inf. X.97–108" },
    fatherQuestion: { lens: "witness", title: "卡瓦尔坎特的问题被一次迟疑截断", note: "父亲只想知道儿子圭多是否活着；回答尚未出口，他已经倒回墓中。", ref: "Inf. X.52–72" },
    tenseTrap: { lens: "reader", title: "一个过去时制造了死亡误认", note: "“圭多曾经轻视”使卡瓦尔坎特把语法听成儿子已经死亡。", ref: "Inf. X.61–72" }
  };

  const chapters = [
    {
      id: "inf-06",
      canto: "第六歌",
      title: "冰雨中的名字",
      premise: "你从第五歌的昏厥中醒来。这里的人不再被风托起，而是被冰雹、污水和泥土压平。",
      background: "assets/canto6-rain-v1.png",
      backgroundAlt: "第三圈的冰冷污雨、泥中的灵魂与刻耳柏洛斯",
      weather: "rain",
      character: { name: "恰科", role: "佛罗伦萨市民 · 第三圈亡魂", image: "assets/character-ciacco-v1.png" },
      intro: [
        { type: "苏醒", speaker: "旁白", text: "意识重新合拢时，弗兰切斯卡的风已经留在上层。永不改变的冰雨、雪与污水落在第三圈，泥土发出腐败的气味。", source: "Inf. VI.1–12" },
        { type: "通过守兽", speaker: "维吉尔", text: "三头的刻耳柏洛斯扑向你们。维吉尔弯腰抓起泥土，投进三张饥饿的嘴；怪物忙于吞咽，你们从它脚边通过。", source: "Inf. VI.13–33" },
        { type: "有人坐起", speaker: "旁白", text: "倒伏的灵魂几乎没有面孔。只有一个人在你经过时撑起上身，仿佛他认得一个仍活着的佛罗伦萨人。", source: "Inf. VI.34–39" },
        { type: "辨认", speaker: "恰科", text: "“你出生在我死去以前。看看你是否还认得我。”雨水从他的脸上流过，你无法把这张脸同记忆中的任何人重合。", source: "据 Inf. VI.40–45 改写" }
      ],
      prompt: "你不认识他，却知道他可能熟悉佛罗伦萨。你的第一个问题是什么？",
      choices: [
        { lens: "order", label: "先承认不认识，再问城中党争由什么欲望推动", hint: "把预言追到行动的起点", evidence: "factionSparks", outcome: "你没有先问哪一派获胜，而是追问胜负以前发生了什么。恰科抹去嘴边的泥，开始从欲望而非党派名称讲起。" },
        { lens: "witness", label: "说明刑罚改变了他的面容，请他亲自报上姓名", hint: "先确认是谁在说话", evidence: "ciaccoName", outcome: "“你们城里人叫我恰科。”他没有提供显赫家世，只说自己因贪食倒在这场雨里，也不是唯一一个。" },
        { lens: "reader", label: "承认自己正想把他当成预言者，请他先作为市民说话", hint: "检查提问者怎样利用证词", evidence: "oracleUse", outcome: "你把政治问题留在第二位，并在页边写下：说话者不是通往未来的工具。恰科等你写完，才开始谈那座共同的城市。" }
      ],
      shared: [
        { type: "共同事实", speaker: "恰科", text: "他随后预言佛罗伦萨两派将流血、驱逐并交换权势；城里仍有两位正直者，却无人听从。骄傲、嫉妒和贪欲使整座城市持续饥饿。", source: "Inf. VI.64–75" },
        { type: "离开", speaker: "旁白", text: "恰科请求你回到人间后让人记得他，随即把头低回泥里。维吉尔说，在最后审判以前，他不会再次坐起。", source: "Inf. VI.88–99" }
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
      premise: "离开泥雨后，两支队伍用胸口推着巨石相撞。一个紧握，一个挥霍，却走在同一个圆上。",
      background: "assets/inferno-first-person.png",
      backgroundAlt: "地狱第四圈的黑石坡道",
      weather: "mist",
      character: null,
      intro: [
        { type: "守门者", speaker: "旁白", text: "普路托吐出一串难以解释的嘶哑音节。维吉尔叫它安静；怪物像断了桅杆的船帆一样倒下，你们继续下降。", source: "Inf. VII.1–15" },
        { type: "第四圈", speaker: "旁白", text: "两队灵魂从半圆两端推着重石迎面撞击。一边喊“为什么紧握”，另一边喊“为什么挥霍”；撞击以后，他们转身，再走一遍。", source: "Inf. VII.22–35" },
        { type: "解释", speaker: "维吉尔", text: "“他们生前在使用财富时都失去了尺度。相反的口号没有把他们分开，反而把他们绑进同一种重复。”", source: "Inf. VII.40–60" }
      ],
      prompt: "石头再次撞在一起。你先把什么写进手册？",
      choices: [
        { lens: "order", label: "区分财富、使用财富的目的与失去节制的行为", hint: "不把物品当成行动者", evidence: "measuredUse", outcome: "你划掉“财富使人犯罪”这句草稿。石头没有意志；紧握与挥霍是两种相反动作，却都让占有压过了尺度。" },
        { lens: "witness", label: "追问为什么这里几乎没有可辨认的姓名和面孔", hint: "查看分类抹去了谁", evidence: "erasedFaces", outcome: "维吉尔指向左队的剃发者：其中有教士与教皇，但他们已经无法被逐一辨认。财富曾替代他们的身份，如今罪类也这样做。" },
        { lens: "reader", label: "检查自己为何把挥霍本能地理解成比吝啬更自由", hint: "拆开相反口号的修辞", evidence: "falseOpposites", outcome: "圆周纠正了你的直觉：放手并不必然是慷慨。若行动仍只围绕占有，紧握和挥霍可以共享同一欲望。" }
      ],
      shared: [
        { type: "命运", speaker: "维吉尔", text: "“人间的财物由‘命运’流转；她不是任性的赌徒，而是分配尘世变动的职司。可任何一次分配，都不能替人决定怎样使用所得。”", source: "Inf. VII.61–96" },
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
      premise: "弗莱居阿斯的小舟驶向狄斯城。泥中的灵魂抓住船舷，而你比听见姓名更早感到厌恶。",
      background: "assets/canto8-styx-v1.png",
      backgroundAlt: "冥河泥沼、弗莱居阿斯的小舟与远处的狄斯城",
      weather: "mist",
      character: { name: "菲利波·阿尔真蒂", role: "佛罗伦萨贵族 · 愤怒者", image: "assets/character-filippo-v1.png" },
      intro: [
        { type: "渡沼", speaker: "旁白", text: "弗莱居阿斯把小舟推入死水。活人的重量使船身比平时下沉；远处，狄斯城的铁墙被永恒火焰烧成暗红。", source: "Inf. VIII.13–30" },
        { type: "袭击", speaker: "泥中的灵魂", text: "一个满身污泥的人突然抓住船舷：“你是谁，竟在死期以前来到这里？”你从声音认出他来自佛罗伦萨。", source: "Inf. VIII.31–36" },
        { type: "相认", speaker: "旁白", text: "他是菲利波·阿尔真蒂，与你的城市和政治记忆相连。厌恶比回答更快地涌上来；维吉尔已经伸手，准备把他推回沼泽。", source: "Inf. VIII.37–42" }
      ],
      prompt: "菲利波仍抓着船。你怎样处理这次相认？",
      choices: [
        { lens: "order", label: "命令他松手，但拒绝把私人快意写成正义", hint: "把边界与报复分开", evidence: "boundary", outcome: "你压住船舷，让他的手滑开。行动保护了渡船；至于希望他受更多苦的念头，你没有替它换上“正义”的名字。" },
        { lens: "witness", label: "叫出他的姓名，并承认你们在佛罗伦萨已有旧怨", hint: "给厌恶补上历史位置", evidence: "privateHistory", outcome: "“菲利波。”姓名使他停了一瞬，也使你的立场暴露：你不是在判断一个完全陌生的罪人，而是在地狱重遇城中的仇敌。" },
        { lens: "reader", label: "先承认自己正在享受仇敌受罚，再决定是否开口", hint: "审读旅人的快意", evidence: "cruelPleasure", outcome: "你听见自己几乎期待更残酷的一幕。诗中的赞许尚未到来，你已先把这种快意写进手册，拒绝让叙述替它自动洗白。" }
      ],
      shared: [
        { type: "原诗中的行动", speaker: "旁白", text: "维吉尔把菲利波推开，并称赞你的愤怒。泥中的亡魂随后扑向他；你看着他被拖回黑水，没有移开目光。", source: "Inf. VIII.40–63" },
        { type: "城门", speaker: "旁白", text: "小舟抵达狄斯城。守门的堕落天使只允许维吉尔靠近，听完他的话便关上城门；这是旅程开始以来，理性的引路第一次没有立刻打开道路。", source: "Inf. VIII.67–130" }
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
      premise: "城门紧闭，维吉尔也在等待援助。高塔上的复仇女神召唤美杜莎；这一次，观看本身就是危险。",
      background: "assets/canto8-styx-v1.png",
      backgroundAlt: "狄斯城外的冥河与红色铁城",
      weather: "embers",
      character: null,
      intro: [
        { type: "等待", speaker: "旁白", text: "维吉尔从紧闭的城门前返回。他试图掩饰迟疑，却不断望向沼泽远处，等待一种比自己更高的权力。", source: "Inf. IX.1–30" },
        { type: "城楼", speaker: "维吉尔", text: "三位复仇女神登上燃烧的塔顶：墨纪拉在左，阿勒克托在右，提西福涅居中。她们撕扯胸口，呼唤美杜莎把你变成石头。", source: "Inf. IX.34–54" },
        { type: "警告", speaker: "维吉尔", text: "“转过去，闭上眼睛。若你看见戈耳工，就再也没有返回人间的可能。”他没有只相信你的自制，还伸手遮住你的眼睛。", source: "Inf. IX.55–60" }
      ],
      prompt: "视野被遮住以后，你靠什么守住等待？",
      choices: [
        { lens: "order", label: "接受维吉尔的保护，不用冒险观看来证明勇敢", hint: "承认理性的边界", evidence: "acceptedLimit", outcome: "你把双手覆在维吉尔手背之外。此刻的行动不是战胜怪物，而是不让好奇把身体交给怪物。" },
        { lens: "witness", label: "不看城楼，只听三位复仇女神分别从哪里发声", hint: "恐怖也由不同声音组成", evidence: "furyVoices", outcome: "左、右、中央的喊声没有合成一团。你保存了三位复仇女神各自的位置，同时没有夺走那一眼。" },
        { lens: "reader", label: "检查自己为什么非看美杜莎不可", hint: "把怪物转回观看欲", evidence: "gazeTrap", outcome: "你意识到，怪物尚未出现，观看欲已经替她工作：它诱使你把禁令理解成必须揭开的谜底。" }
      ],
      shared: [
        { type: "援助抵达", speaker: "旁白", text: "沼泽忽然像被暴风劈开。来自天上的使者踏过水面，用一根短杖碰开城门；他没有等待感谢，转身沿原路离去。", source: "Inf. IX.64–105", character: { name: "天使使者", role: "打开狄斯城门的援助", image: "assets/character-celestial.png" } },
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
      premise: "燃烧的墓园里，政治辩论与父亲的追问挤在同一具石棺旁。一个语法时态会产生无法追回的后果。",
      background: "assets/canto10-tombs-v1.png",
      backgroundAlt: "狄斯城内燃烧的墓园与敞开的石棺",
      weather: "embers",
      character: { name: "法里纳塔·德利·乌贝尔蒂", role: "佛罗伦萨吉伯林派领袖", image: "assets/character-farinata-v1.png" },
      intro: [
        { type: "第六圈", speaker: "维吉尔", text: "“这些敞开的墓属于伊壁鸠鲁及其追随者——他们认为灵魂随身体一同死亡。最后审判以后，石盖才会永远闭合。”", source: "Inf. X.1–15" },
        { type: "有人起身", speaker: "旁白", text: "一具石棺中传出托斯卡纳口音。法里纳塔从腰部以上挺立起来，胸膛和额头笔直，仿佛整个地狱都不值得他低头。", source: "Inf. X.22–39" },
        { type: "政治记忆", speaker: "法里纳塔", text: "他先问你的祖先属于哪一派。你们立刻争论佛罗伦萨的驱逐、复归与蒙塔佩尔蒂战役；同一座城市把两个亡魂仍旧分成敌人。", source: "Inf. X.40–51, 73–93" },
        { type: "被打断的父亲", speaker: "旁白", text: "另一道影子只露出下巴。他是卡瓦尔坎特·德·卡瓦尔坎蒂，正在寻找儿子圭多。你说“圭多也许曾经轻视维吉尔”；父亲抓住“曾经”这个过去时，以为儿子已经死亡。你迟疑片刻，他便倒回墓中。", source: "Inf. X.52–72" }
      ],
      prompt: "卡瓦尔坎特已经消失，法里纳塔仍像没有听见一样站着。你怎样处理刚才发生的事？",
      choices: [
        { lens: "order", label: "追问亡魂为何能预见未来，却不知道圭多此刻是否活着", hint: "查明误解成立的条件", evidence: "distantKnowledge", outcome: "法里纳塔解释：他们像远视者，只能看见尚远的事；未来一旦成为现在，知识便熄灭，除非新来的亡魂带来消息。" },
        { lens: "witness", label: "先记录卡瓦尔坎特唯一的问题：我的儿子在哪里？", hint: "不让政治雄辩盖住父亲", evidence: "fatherQuestion", outcome: "你没有替沉默的父亲补写答案，只把问题原样留下。它夹在两段党争谈话之间，短得几乎会被法里纳塔的声音吞没。" },
        { lens: "reader", label: "圈出自己使用的“曾经”，记录这个时态怎样被听成死讯", hint: "语法在这里造成了行动后果", evidence: "tenseTrap", outcome: "你在“曾经”下面划线。误解不是抽象的修辞游戏：一个过去时、一次迟疑，让父亲带着错误的死亡消息倒回墓中。" }
      ],
      shared: [
        { type: "知识的边界", speaker: "法里纳塔", text: "他终于说明这里的亡魂如何知道事情：远处的未来仍可见，眼前与当下却是一片空白。最后审判以后，再没有未来，他们的知识也将完全关闭。", source: "Inf. X.97–108" },
        { type: "继续前行", speaker: "旁白", text: "维吉尔催你记住流放预言，却也答应稍后由贝雅特丽齐解释你的道路。你们离开墓园边缘，朝更深处传来的恶臭走去。", source: "Inf. X.118–136" }
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
    lenses: new Set(),
    safety: 3,
    fractures: 0,
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
      ? `你仍带着《${manuals[previous].title}》。可以继续使用它，也可以在冰雨落下以前换一本。`
      : "选择一本手册。它会保护你穿过危险，也会把某些事实挡在页外。";
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
    state.lenses = new Set();
    state.safety = 3;
    state.fractures = 0;
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
    renderProgress();
    renderSources();
    play(chapter.intro, showDecision);
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
    $("#lineType").textContent = "你的判断";
    $("#speaker").textContent = chapter.canto;
    $("#source").textContent = "选择会改变方向感与最终记录";
    $("#lineText").textContent = chapter.prompt;
    $("#continueButton").hidden = true;
    $("#choices").replaceChildren(...chapter.choices.map((choice) => {
      const button = document.createElement("button");
      const aligned = choice.lens === state.role;
      button.type = "button";
      button.innerHTML = "<span></span><small></small><em></em>";
      button.querySelector("span").textContent = choice.label;
      button.querySelector("small").textContent = choice.hint;
      button.querySelector("em").textContent = aligned ? manuals[choice.lens].title + " · 安全" : manuals[choice.lens].title + " · 越出本册";
      button.addEventListener("click", () => choose(choice));
      return button;
    }));
  }

  function choose(choice) {
    const chapter = chapters[state.chapter];
    const aligned = choice.lens === state.role;
    state.evidence.add(choice.evidence);
    state.lenses.add(choice.lens);
    if (aligned) {
      state.safety = Math.min(3, state.safety + 1);
      showToast(manuals[state.role].title + "确认：这条判断符合本册规则。");
    } else {
      state.safety = Math.max(0, state.safety - 1);
      state.fractures += 1;
      showToast("你越出了本册：方向感下降，但另一种事实进入记录。");
    }
    renderState();
    renderEvidence();
    const outcome = { type: "选择的后果", speaker: "页边记录", text: choice.outcome, source: evidenceCatalog[choice.evidence].ref };
    if (chapter.id === "inf-09" && state.safety === 0) {
      play([outcome], showPetrifiedEnding);
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
        note: "你将安全地继续下降；所有证据会被压进同一种解释。"
      },
      {
        id: "archive",
        title: "保留彼此冲突的笔记，不替它们制造统一答案",
        note: "人物、行动与文本机制并列存在，但矛盾仍等待后来的读者处理。"
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
        body: "你的手册成功解释了五歌中的每一道危险，并把不服从其原则的材料压到页边。你安全抵达更深处，却把恰科、菲利波、复仇女神与卡瓦尔坎特重新变成同一种学派的例证。规则没有说谎；它只是拒绝承认自己看不见什么。"
      },
      archive: {
        kicker: "结局 · 未完成的复数档案",
        title: "你没有强迫证据互相同意。",
        body: "行动、姓名与叙述机制被并排保存。它们有时互相纠正，有时仍旧冲突。你没有得到一条可以自动通行的规则，却给后来者留下了重新核对原文、历史与解释传统的入口。"
      },
      plural: {
        kicker: "隐藏结局 · 手册的错页",
        title: "规则第一次把自己也列为证据。",
        body: "你既没有抛弃手册，也没有让它垄断道路。衡量之书承认判断会抹去姓名，见证之书承认痛苦可能组织叙述，回读之书承认解释不能替人物承受后果。你仍在地狱，却不再把安全误认为完整。"
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
    $("#resultRecord").replaceChildren(...[...state.evidence].map((id) => {
      const span = document.createElement("span");
      span.textContent = evidenceCatalog[id].title;
      return span;
    }));
  }

  function renderEvidence() {
    const items = [...state.evidence];
    if (!items.length) {
      const empty = document.createElement("p");
      empty.textContent = "还没有证据。每一歌只能保留一条主动判断，请谨慎选择。";
      $("#evidenceList").replaceChildren(empty);
      return;
    }
    $("#evidenceList").replaceChildren(...items.map((id) => {
      const evidence = evidenceCatalog[id];
      const article = document.createElement("article");
      article.innerHTML = "<small></small><strong></strong><p></p>";
      article.querySelector("small").textContent = evidence.ref + " · " + manuals[evidence.lens].title;
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
